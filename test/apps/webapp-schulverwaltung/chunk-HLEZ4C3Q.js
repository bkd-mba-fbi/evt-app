import{a as o,b as s,tc as c,uc as l}from"./chunk-TTJNYD2F.js";function u(e){return String(e||"").replace(/^\?/,"").split("&").reduce((t,r)=>{let[n,i]=r.split("=");return s(o({},t),{[n]:i})},{})}function p(e){return Object.keys(e).reduce((t,r)=>{let n=e[r];return[...t,n==null?r:`${r}=${n}`]},[]).join("&")}function f(e){let i=new l().parse(e)?.root.children[c]?.segments;return i?i[0].path:null}function g(e){let{pathname:t,search:r}=new URL(e,window.location.href);return{link:t,params:u(r)}}export{u as a,p as b,f as c,g as d};
