import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkDictionary, checkStatus, checkAll, buildDist, toJson, sha256, envelope } from '../tools/lib.mjs';

const source = {
  schema: 'i18n-source/1',
  hash: 'abcdef0123456789'.repeat(4),
  count: 4,
  entries: {
    'Crawl now': { bundle: 'core', vars: [], plural: false, where: [], note: '' },
    'Showing {shown} of {total}': { bundle: 'core', vars: ['shown', 'total'], plural: false, where: [], note: '' },
    '{n} pages': { bundle: 'core', vars: ['n'], plural: true, forms: { one: '{n} page', other: '{n} pages' }, where: [], note: '' },
    'Fail': { bundle: 'findings', vars: [], plural: false, where: [], note: '' },
  },
};
const languages = [{ code: 'de', endonym: 'Deutsch' }, { code: 'pl', endonym: 'Polski' }];
const dict = (lang, bundle, entries) => envelope(source, lang, bundle, entries);
const errs = (lang, entries, bundle = 'core') => checkDictionary(source, dict(lang, bundle, entries), lang);

test('valid file passes, missing keys are reported not failed', () => {
  const r = errs('de', { 'Crawl now': 'Jetzt scannen' });
  assert.deepEqual(r.errors, []);
  assert.deepEqual(r.missing, ['Showing {shown} of {total}', '{n} pages']);
});

test('orphan, empty, markup, spaces, null', () => {
  const r = errs('de', { Nope: 'x', 'Crawl now': '' });
  assert.equal(r.errors.length, 2);
  assert.match(errs('de', { 'Crawl now': 'a <b>' }).errors[0], /contains < or >/);
  assert.match(errs('de', { 'Crawl now': ' a' }).errors[0], /spaces/);
  assert.match(errs('de', { 'Crawl now': null }).errors[0], /null/);
});

test('placeholders must equal the key', () => {
  assert.deepEqual(errs('de', { 'Showing {shown} of {total}': '{total} insgesamt, {shown} gezeigt' }).errors, []);
  assert.equal(errs('de', { 'Showing {shown} of {total}': '{shown}' }).errors.length, 1);
  assert.equal(errs('de', { 'Showing {shown} of {total}': '{shown} {total} {extra}' }).errors.length, 1);
  assert.deepEqual(errs('de', { 'Showing {shown} of {total}': '{{x}} {shown} {total}' }).errors, []);
});

test('plural categories come from Intl.PluralRules and {n} may be left out of zero/one/two', () => {
  assert.deepEqual(errs('de', { '{n} pages': { one: 'Eine Seite', other: '{n} Seiten' } }).errors, []);
  assert.match(errs('de', { '{n} pages': { one: '{n} Seite', other: 'Seiten' } }).errors[0], /placeholders/);
  assert.match(errs('de', { '{n} pages': { one: 'a', few: 'b', other: '{n}' } }).errors[0], /plural forms/);
  const pl = { one: '{n} strona', few: '{n} strony', many: '{n} stron', other: '{n} strony' };
  assert.deepEqual(errs('pl', { '{n} pages': pl }).errors, []);
  assert.match(errs('pl', { '{n} pages': { ...pl, few: 'strony' } }).errors[0], /placeholders/);
  assert.match(errs('de', { '{n} pages': '{n} Seiten' }).errors[0], /needs an object/);
  assert.match(errs('de', { 'Crawl now': { one: 'a', other: 'b' } }).errors[0], /must be a string/);
});

test('bundle, lang and source hash are checked', () => {
  assert.match(errs('de', { Fail: 'Fehler' }).errors[0], /belongs to bundle "findings"/);
  assert.match(checkDictionary(source, { ...dict('de', 'core', {}), source: '00000000' }, 'de').errors[0], /source is/);
  assert.match(checkDictionary(source, dict('de', 'core', {}), 'pl').errors[0], /expected "pl"/);
});

test('length ratio is a warning above 3x', () => {
  const r = errs('de', { 'Crawl now': 'x'.repeat(28) });
  assert.deepEqual(r.errors, []);
  assert.equal(r.warnings.length, 1);
  assert.equal(errs('de', { 'Crawl now': 'x'.repeat(27) }).warnings.length, 0);
});

test('reviewed needs a named reviewer', () => {
  assert.equal(checkStatus({ de: { status: 'reviewed' } }, languages).length, 2);
  assert.deepEqual(checkStatus({ de: { status: 'reviewed', reviewed_by: 'A B', reviewed_on: '2026-11-03' } }, languages), []);
  assert.equal(checkStatus({ de: { status: 'drafted', reviewed_by: 'A B' } }, languages).length, 1);
  assert.equal(checkStatus({ xx: { status: 'drafted' } }, languages).length, 1);
});

const files = (lang, bundle, data) => ({ [lang]: { [bundle]: { data, text: toJson(data, 2) } } });
const inputs = (status = {}) => ({
  source, languages, status, dirs: ['de', 'pl'],
  files: {
    ...files('de', 'core', { 'Crawl now': 'Jetzt scannen', '{n} pages': { one: 'Eine Seite', other: '{n} Seiten' } }),
    pl: { findings: { data: { Fail: 'Błąd' }, text: toJson({ Fail: 'Błąd' }, 2) } },
  },
});

test('checkAll counts per bundle', () => {
  const { rows, errors } = checkAll(inputs());
  assert.deepEqual(errors, []);
  assert.deepEqual(rows.map((r) => r.errors), [[], []]);
  assert.deepEqual([rows[0].bundles.core.have, rows[0].bundles.core.total, rows[1].bundles.findings.have], [2, 3, 1]);
});

test('toJson sorts keys at every level, even integer-like ones', () => {
  assert.equal(toJson({ b: 1, 10: { z: 1, a: 2 }, 2: 3 }), '{"10":{"a":2,"z":1},"2":3,"b":1}\n');
  assert.equal(toJson({ a: [1], b: {} }, 2), '{\n  "a": [\n    1\n  ],\n  "b": {}\n}\n');
});

test('build: manifest shape, hashed names, determinism', () => {
  const a = buildDist(inputs({ de: { status: 'reviewed', reviewed_by: 'A B', reviewed_on: '2026-11-03' } }));
  const b = buildDist(inputs({ de: { status: 'reviewed', reviewed_by: 'A B', reviewed_on: '2026-11-03' } }));
  assert.deepEqual([...a.files].map(([k, v]) => [k, v.toString()]), [...b.files].map(([k, v]) => [k, v.toString()]));
  const m = a.manifest;
  assert.equal(m.schema, 'i18n-manifest/1');
  assert.equal(m.source, 'abcdef01');
  assert.deepEqual(Object.keys(m.languages), ['de', 'pl']);
  assert.equal(m.languages.en, undefined);
  const de = m.languages.de;
  assert.deepEqual([de.endonym, de.status, de.reviewed_by, de.reviewed_on], ['Deutsch', 'reviewed', 'A B', '2026-11-03']);
  assert.equal(de.findings, undefined);
  assert.equal(m.languages.pl.status, 'drafted');
  assert.equal('reviewed_by' in m.languages.pl, false);
  assert.equal(m.languages.pl.core, undefined);
  for (const [lang, bundle] of [['de', 'core'], ['pl', 'findings']]) {
    const e = m.languages[lang][bundle];
    const bytes = a.files.get(`dict/${e.file}`);
    assert.match(e.file, new RegExp(`^${bundle}\\.${lang}\\.[0-9a-f]{8}\\.json$`));
    assert.equal(e.sha256, sha256(bytes));
    assert.equal(e.file.split('.')[2], e.sha256.slice(0, 8));
    assert.equal(e.bytes, bytes.length);
    const parsed = JSON.parse(bytes.toString());
    assert.equal(e.entries, Object.keys(parsed.entries).length);
    assert.deepEqual([parsed.schema, parsed.lang, parsed.bundle, parsed.source], ['i18n-dict/1', lang, bundle, 'abcdef01']);
    assert.ok(bytes.toString().endsWith('}\n') && bytes[0] !== 0xef);
  }
  assert.equal(JSON.stringify(m).includes('null'), false);
});

test('a changed entry changes the file name', () => {
  const i = inputs();
  const before = buildDist(i).manifest.languages.pl.findings.file;
  i.files.pl.findings.data = { Fail: 'Fehler' };
  assert.notEqual(buildDist(i).manifest.languages.pl.findings.file, before);
});
