# python3 -I tools/reference/build_index.py   Reads .reference/ and writes .reference/index.json (English UI term -> translations and their source).
import re,json,glob,os,collections,sys
R=os.environ.get('REF_DIR') or os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','.reference')
def norm(s):
    s=s.replace('…','...').replace('’',"'").replace('“','"').replace('”','"')
    s=re.sub(r'[&_](?=\w)','',s) if len(s)<40 else s
    s=s.strip().strip('.:!?').strip()
    s=re.sub(r'\s+',' ',s)
    return s.lower()
def parse_po(path):
    out=[];cur={};field=None
    def flush():
        if 'id' in cur and cur.get('str') and 'plural' not in cur: out.append((cur.get('ctx',''),cur['id'],cur['str']))
    for line in open(path,encoding='utf-8'):
        line=line.rstrip('\n')
        if line.startswith('#') : continue
        m=re.match(r'(msgctxt|msgid_plural|msgid|msgstr\[0\]|msgstr)\s+"(.*)"$',line)
        if m:
            k,v=m.group(1),m.group(2)
            if k=='msgctxt': flush(); cur={'ctx':v}; field='ctx'
            elif k=='msgid':
                if field!='ctx': flush(); cur={}
                cur['id']=v; field='id'
            elif k=='msgid_plural': cur['plural']=v; field='plural'
            elif k.startswith('msgstr'): cur['str']=v; field='str'
            continue
        m=re.match(r'"(.*)"$',line)
        if m and field: cur[field]=cur.get(field,'')+m.group(1)
        elif line=='' : flush(); cur={}; field=None
    flush()
    un=lambda s: s.replace('\\"','"').replace('\\n','\n').replace('\\\\','\\')
    return [(c,un(i),un(s)) for c,i,s in out if i]
def parse_ftl(path):
    d={};key=None
    for line in open(path,encoding='utf-8'):
        if line.startswith('#') : continue
        m=re.match(r'^([a-zA-Z][\w-]*)\s*=\s*(.*)$',line)
        if m:
            key=m.group(1)
            if m.group(2).strip(): d[key]=d.get(key,'')+m.group(2).strip()
            continue
        m=re.match(r'^\s+\.([\w-]+)\s*=\s*(.*)$',line)
        if m and key: d[f'{key}.{m.group(1)}']=m.group(2).strip(); continue
        if key and line.startswith(' ') and line.strip() and not line.strip().startswith(('.','[','*')):
            if key in d: d[key]+=' '+line.strip()
    return d
def clean(s): return s
idx=collections.defaultdict(lambda: collections.defaultdict(lambda: collections.defaultdict(set)))  # lang -> norm_en -> norm_tr -> sources
raw=collections.defaultdict(dict)
langs=sorted({os.path.basename(p).split('.')[0] for p in glob.glob(R+'/wp/*.po')}|{'mt'})
bad=re.compile(r'%[sd0-9$]|\{\$|\$\d|\{|\}|<|>|\[')
def add(l,en,tr,src):
    if not en or not tr or bad.search(en) or bad.search(tr): return
    if len(en)>90: return
    ne,nt=norm(en),norm(tr)
    if not ne or not nt or ne==nt and len(ne)>3 and False: return
    idx[l][ne][nt].add(src); raw[l].setdefault((ne,nt),(en,tr))
for l in langs:
    for kind in ('core','admin'):
        p=f'{R}/wp/{l}.{kind}.po'
        if os.path.exists(p):
            for ctx,i,s in parse_po(p): add(l,i,s,'wp-'+kind)
    en={}
    for f in glob.glob(R+'/moz/en.*.ftl'): 
        for k,v in parse_ftl(f).items(): en[(os.path.basename(f).split('.')[1],k)]=v
    for f in glob.glob(f'{R}/moz/{l}.*.ftl'):
        base=os.path.basename(f).split('.')[1]
        for k,v in parse_ftl(f).items():
            e=en.get((base,k))
            if e: add(l,e,v,'moz')
    # mediawiki
    if os.path.exists(f'{R}/mw/{l}.json') and os.path.exists(f'{R}/mw/en.json'):
        E=json.load(open(f'{R}/mw/en.json')); L=json.load(open(f'{R}/mw/{l}.json'))
        for k,e in E.items():
            if k in L and isinstance(e,str) and isinstance(L[k],str): add(l,e,L[k],'mw')
out={l:{e:{t:sorted(s) for t,s in ts.items()} for e,ts in idx[l].items()} for l in idx}
json.dump(out,open(R+'/index.json','w'),ensure_ascii=False)
for l in langs: print(l,len(out.get(l,{})),'english terms')
