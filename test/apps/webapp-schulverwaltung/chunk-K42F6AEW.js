import{M as g,O as s,P as i,k as p,l as f,n as a,o as l,x as c}from"./chunk-NEW5VGRB.js";function b(r,t,e){return l([r,t]).pipe(c(([n,u])=>u),i(([n,u])=>{let o=e?n?.get(e)||null:n;return o?o.statusChanges.pipe(s(o.status),a(()=>h(o))):f([])}),s([]),g(1))}function m(r,t){return r.pipe(a(e=>e.get(t)||null))}function d(r,t){return m(r,t).pipe(i(e=>e?e.valueChanges:p))}function h(r){return r?Object.keys(r.errors||{}).map(t=>({error:t,params:r.errors&&r.errors[t]instanceof Object?r.errors[t]:null})):[]}function E(r){return t=>r(...t)}export{b as a,m as b,d as c,E as d};
