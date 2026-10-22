// Shared pure functions for check.mjs and build.mjs. No network.
//
// checkDictionary, varNames and the plural/placeholder rules are copied from the app repo:
//   app/src/i18n/check.ts   (checkDictionary)
//   app/src/shared/i18n-dom.ts   (varNames)
// They are the contract of app/docs/I18N.md sections 9.4, 9.5 and 19. This repo runs standalone, so
// the code is a copy. To refresh: diff those two files against this one, port the change by hand,
// run `npm test`. Added here: whitespace and length checks, and the canonical JSON writer.
import { createHash } from 'node:crypto';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export const BUNDLES = ['core', 'findings'];

/** Placeholder names of a string, `{{` and `}}` excluded. */
export const varNames = (s) => [...s.replace(/\{\{|\}\}/g, '').matchAll(/\{([a-z][A-Za-z0-9]*)\}/g)].map((m) => m[1]);

const same = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
const uniqSorted = (xs) => [...new Set(xs)].sort();

/**
 * Checks one dictionary file object against the source strings (I18N.md 19).
 * Returns { missing, errors, warnings }. Missing keys are a report, not a failure.
 */
export function checkDictionary(source, file, expectLang) {
  const errors = [];
  const warnings = [];
  const f = file;
  if (!f || typeof f !== 'object') return { missing: [], errors: ['not an object'], warnings };
  if (f.schema !== 'i18n-dict/1') errors.push('schema must be "i18n-dict/1"');
  const lang = String(f.lang);
  if (expectLang && lang !== expectLang) errors.push(`lang is "${lang}", expected "${expectLang}"`);
  if (!BUNDLES.includes(f.bundle)) errors.push('bundle must be "core" or "findings"');
  if (f.source !== source.hash.slice(0, 8)) errors.push(`source is "${f.source}", the source strings have "${source.hash.slice(0, 8)}"`);
  const entries = f.entries;
  if (!entries || typeof entries !== 'object' || Array.isArray(entries)) return { missing: [], errors: [...errors, 'entries must be an object'], warnings };

  let cats = [];
  try { cats = [...new Intl.PluralRules(lang).resolvedOptions().pluralCategories].sort(); } catch { errors.push(`"${lang}" is not a language code`); }

  const checkText = (key, v, where, vars, mayOmitN, englishLen) => {
    if (typeof v !== 'string') { errors.push(`"${key}": ${where} is not a string`); return; }
    if (v === '') { errors.push(`"${key}": ${where} is empty`); return; }
    if (/[<>]/.test(v)) errors.push(`"${key}": ${where} contains < or >`);
    if (v !== v.trim()) errors.push(`"${key}": ${where} has leading or trailing spaces`);
    const used = uniqSorted(varNames(v));
    const bad = used.filter((n) => !vars.includes(n));
    // Every named placeholder must appear; {n} may be left out of the zero, one and two forms ("Eine Seite").
    const lacking = vars.filter((n) => !used.includes(n) && !(mayOmitN && n === 'n'));
    if (bad.length || lacking.length) errors.push(`"${key}": ${where} placeholders {${used.join('}, {')}} differ from {${vars.join('}, {')}}`);
    // Short English words ("OK", "Back") often need long translations; only longer strings are compared.
    if (englishLen >= 8 && [...v].length > 3 * englishLen) warnings.push(`"${key}": ${where} is ${[...v].length} characters, English has ${englishLen}`);
  };

  for (const [key, v] of Object.entries(entries)) {
    const s = source.entries[key];
    if (!s) { errors.push(`orphan key "${key}"`); continue; }
    if (f.bundle && s.bundle !== f.bundle) { errors.push(`"${key}" belongs to bundle "${s.bundle}"`); continue; }
    if (v === null || v === undefined) { errors.push(`"${key}": null`); continue; }
    const englishLen = [...key].length;
    if (s.plural) {
      if (typeof v !== 'object' || Array.isArray(v)) { errors.push(`"${key}": plural key needs an object of forms`); continue; }
      const got = Object.keys(v).sort();
      if (cats.length && !same(got, cats)) errors.push(`"${key}": plural forms are ${got.join(', ')}; ${lang} needs ${cats.join(', ')}`);
      for (const [c, text] of Object.entries(v)) checkText(key, text, `form ${c}`, s.vars, c === 'zero' || c === 'one' || c === 'two', englishLen);
    } else {
      if (typeof v === 'object') { errors.push(`"${key}": not a plural key, value must be a string`); continue; }
      checkText(key, v, 'value', s.vars, false, englishLen);
    }
  }
  const missing = Object.entries(source.entries).filter(([k, s]) => s.bundle === f.bundle && !(k in entries)).map(([k]) => k);
  return { missing, errors, warnings };
}

/** Number of source keys per bundle. */
export const bundleTotals = (source) => {
  const t = { core: 0, findings: 0 };
  for (const s of Object.values(source.entries)) t[s.bundle] += 1;
  return t;
};

// ---- canonical JSON: keys sorted by UTF-16 code unit at every level (also integer-like keys), UTF-8, one trailing newline.
export function toJson(value, indent = 0) {
  const nl = (d) => (indent ? '\n' + ' '.repeat(indent * d) : '');
  const ser = (v, d) => {
    if (v === null || typeof v !== 'object') return JSON.stringify(v);
    if (Array.isArray(v)) return v.length ? `[${v.map((x) => nl(d + 1) + ser(x, d + 1)).join(',')}${nl(d)}]` : '[]';
    const keys = Object.keys(v).sort();
    return keys.length ? `{${keys.map((k) => `${nl(d + 1)}${JSON.stringify(k)}:${indent ? ' ' : ''}${ser(v[k], d + 1)}`).join(',')}${nl(d)}}` : '{}';
  };
  return ser(value, 0) + '\n';
}

export const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

/** The dictionary file object (I18N.md 3.1). */
export const envelope = (source, lang, bundle, entries) => ({ schema: 'i18n-dict/1', lang, bundle, source: source.hash.slice(0, 8), entries });

// ---- loading
const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));

export function loadInputs(root) {
  const source = readJson(join(root, 'source/source-strings.json'));
  const languages = readJson(join(root, 'source/languages.json')).map((l) => ({ code: l.code, endonym: l.endonym })).filter((l) => l.code !== 'en');
  const statusPath = join(root, 'status.json');
  const status = existsSync(statusPath) ? readJson(statusPath) : {};
  const srcDir = join(root, 'src');
  const dirs = existsSync(srcDir) ? readdirSync(srcDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort() : [];
  const files = {}; // lang -> bundle -> { text, data } (data undefined when the JSON does not parse)
  for (const lang of dirs) {
    files[lang] = {};
    for (const bundle of BUNDLES) {
      const p = join(srcDir, lang, `${bundle}.json`);
      if (!existsSync(p)) continue;
      const text = readFileSync(p, 'utf8');
      let data;
      let parseError;
      try { data = JSON.parse(text); } catch (e) { parseError = String(e.message); }
      files[lang][bundle] = { text, data, parseError };
    }
  }
  return { source, languages, status, dirs, files };
}

/** Status entry per language: errors for a reviewed language without a named reviewer. */
export function checkStatus(status, languages) {
  const errors = [];
  const codes = languages.map((l) => l.code);
  for (const [lang, s] of Object.entries(status)) {
    if (!codes.includes(lang)) { errors.push(`status.json: "${lang}" is not a language`); continue; }
    if (s.status !== 'drafted' && s.status !== 'reviewed') errors.push(`status.json: ${lang}: status must be drafted or reviewed`);
    if (s.status === 'reviewed') {
      if (!s.reviewed_by || !String(s.reviewed_by).trim()) errors.push(`status.json: ${lang}: reviewed needs reviewed_by`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(s.reviewed_on ?? '')) errors.push(`status.json: ${lang}: reviewed needs reviewed_on as YYYY-MM-DD`);
    } else if (s.reviewed_by || s.reviewed_on) errors.push(`status.json: ${lang}: reviewed_by and reviewed_on only with status reviewed`);
  }
  return errors;
}

/**
 * Checks every language folder. Returns { rows, errors, warnings, missingTotal } where rows is per language.
 * An src file is the flat entries object (key -> string or plural object).
 */
export function checkAll({ source, languages, status, dirs, files }) {
  const codes = languages.map((l) => l.code);
  const totals = bundleTotals(source);
  const errors = [];
  const rows = [];
  if (source.schema !== 'i18n-source/1') errors.push(`source-strings.json: schema is "${source.schema}", expected "i18n-source/1"`);
  errors.push(...checkStatus(status, languages));
  let missingTotal = 0;
  for (const lang of dirs) {
    const row = { lang, errors: [], warnings: [], bundles: {}, status: status[lang]?.status ?? 'drafted' };
    if (!codes.includes(lang)) row.errors.push(`src/${lang}: not one of the 23 languages in source/languages.json (en has no file)`);
    for (const bundle of BUNDLES) {
      const f = files[lang][bundle];
      if (!f) { row.bundles[bundle] = { have: 0, total: totals[bundle], missing: [] }; continue; }
      const where = `src/${lang}/${bundle}.json`;
      if (f.parseError) { row.errors.push(`${where}: ${f.parseError}`); row.bundles[bundle] = { have: 0, total: totals[bundle], missing: [] }; continue; }
      if (!f.data || typeof f.data !== 'object' || Array.isArray(f.data)) { row.errors.push(`${where}: must be a flat object`); continue; }
      const r = checkDictionary(source, envelope(source, lang, bundle, f.data), lang);
      row.errors.push(...r.errors.map((e) => `${where}: ${e}`));
      row.warnings.push(...r.warnings.map((e) => `${where}: ${e}`));
      if (f.text !== toJson(f.data, 2)) row.warnings.push(`${where}: not in canonical format (sorted keys, 2-space indent); the build rewrites it`);
      const have = Object.keys(f.data).length;
      row.bundles[bundle] = { have, total: totals[bundle], missing: r.missing };
      missingTotal += r.missing.length;
    }
    rows.push(row);
  }
  return { rows, errors, missingTotal };
}

/**
 * Builds dist in memory: Map of path -> string, plus the manifest. Callers must have run checkAll without errors.
 * Hash and manifest follow I18N.md 3.1 and 3.2. Languages with no entries are left out.
 */
export function buildDist({ source, languages, status, files }) {
  const out = new Map();
  const manifest = { schema: 'i18n-manifest/1', source: source.hash.slice(0, 8), languages: {} };
  for (const { code, endonym } of languages) {
    const entry = { endonym, status: status[code]?.status ?? 'drafted' };
    if (entry.status === 'reviewed') { entry.reviewed_by = status[code].reviewed_by; entry.reviewed_on = status[code].reviewed_on; }
    for (const bundle of BUNDLES) {
      const data = files[code]?.[bundle]?.data;
      if (!data || !Object.keys(data).length) continue;
      const bytes = Buffer.from(toJson(envelope(source, code, bundle, data)), 'utf8');
      const digest = sha256(bytes);
      const file = `${bundle}.${code}.${digest.slice(0, 8)}.json`;
      out.set(`dict/${file}`, bytes);
      entry[bundle] = { file, sha256: digest, entries: Object.keys(data).length, bytes: bytes.length };
    }
    if (entry.core || entry.findings) manifest.languages[code] = entry;
  }
  out.set('manifest.json', Buffer.from(toJson(manifest, 2), 'utf8'));
  return { files: out, manifest };
}
