import{M as I,O as i,P as p,k as m,l as x,n as c,o as f,x as l}from"./chunk-34ZOBT6Z.js";function C(t,o,n){return f([t,o]).pipe(l(([r,a])=>a),p(([r,a])=>{let e=n?r?.get(n)||null:r;return e?e.statusChanges.pipe(i(e.status),c(()=>h(e))):x([])}),i([]),I(1))}function y(t,o){return t.pipe(c(n=>n.get(o)||null))}function j(t,o){return y(t,o).pipe(p(n=>n?n.valueChanges:m))}function h(t){return t?Object.keys(t.errors||{}).map(o=>({error:o,params:t.errors&&t.errors[o]instanceof Object?t.errors[o]:null})):[]}function w(t){return o=>t(...o)}var b=Math.pow(10,8)*24*60*60*1e3,T=-b,W=6048e5,E=864e5,H=6e4,z=36e5,O=1e3;var D=3600;var d=D*24,Q=d*7,M=d*365.2425,Y=M/12,V=Y*3,u=Symbol.for("constructDateFrom");function s(t,o){return typeof t=="function"?t(o):t&&typeof t=="object"&&u in t?t[u](o):t instanceof Date?new t.constructor(o):new Date(o)}function P(t,o){return s(o||t,t)}function G(t,...o){let n=s.bind(null,t||o.find(r=>typeof r=="object"));return o.map(n)}export{C as a,y as b,j as c,W as d,E as e,H as f,z as g,O as h,s as i,P as j,G as k,w as l};
