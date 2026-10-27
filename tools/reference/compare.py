# python3 -I tools/reference/compare.py   Compares every short label of src/<lang>/ with the references; writes .reference/compare.json.
import json,re,os,sys,collections
R=os.environ.get('REF_DIR') or os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','.reference')
T=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..')
def norm(s):
    s=s.replace('…','...').replace('’',"'").replace('“','"').replace('”','"')
    s=re.sub(r'[&_](?=\w)','',s) if len(s)<40 else s
    s=s.strip().strip('.:!?').strip(); s=re.sub(r'\s+',' ',s); return s.lower()
idx=json.load(open(R+'/index.json'))
rows={}
tot=collections.Counter()
for lang in sorted(idx):
    ref=idx[lang]; res={'agree':[],'differ':[],'none':0}
    for bundle in ('core','findings'):
        d=json.load(open(f'{T}/src/{lang}/{bundle}.json'))
        for k,v in d.items():
            if not isinstance(v,str): continue
            ne=norm(k)
            if '{' in k or len(k)>60: continue
            r=ref.get(ne)
            if not r: res['none']+=1; continue
            nv=norm(v)
            if nv in r: res['agree'].append(k)
            else: res['differ'].append({'en':k,'ours':v,'ref':{t:s for t,s in sorted(r.items(),key=lambda x:-len(x[1]))[:4]}})
    rows[lang]=res
    tot['agree']+=len(res['agree']); tot['differ']+=len(res['differ']); tot['none']+=res['none']
    print(f"{lang}: matched {len(res['agree'])+len(res['differ'])} short labels ({len(res['agree'])} agree, {len(res['differ'])} differ), {res['none']} have no reference")
print(dict(tot))
json.dump(rows,open(R+'/compare.json','w'),ensure_ascii=False,indent=1)
