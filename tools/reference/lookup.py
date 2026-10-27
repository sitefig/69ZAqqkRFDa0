#!/usr/bin/env python3
# python3 -I lookup.py <lang> <english word or phrase> [max]
# Lists reference UI strings (WordPress core/admin, Mozilla, MediaWiki) whose English contains the word, with the language's translation.
import json,sys,re,os
R=os.environ.get('REF_DIR') or os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','.reference')
lang,term=sys.argv[1],sys.argv[2].lower(); mx=int(sys.argv[3]) if len(sys.argv)>3 else 25
idx=json.load(open(R+'/index.json')).get(lang,{})
pat=re.compile(r'(?<![a-z])'+re.escape(term)+r'(?![a-z])')
hits=[(len(e),e) for e in idx if pat.search(e) and len(e.split())<=6]
hits.sort()
for _,e in hits[:mx]:
    print(f"{e}  =>  "+" | ".join(f"{t} [{','.join(s)}]" for t,s in list(idx[e].items())[:2]))
if not hits: print('(no reference)')
