import{$a as C,B as u,E as f,Eb as b,Nd as P,O as s,Od as v,P as i,U as g,_a as w,aa as x,l as a,m as l,mc as O,n as o,q as h,rb as M,t as d,v as m,w as p}from"./chunk-TTJNYD2F.js";var E=(()=>{class t{constructor(){}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=x({type:t,selectors:[["bkd-spinner"]],standalone:!0,features:[b],decls:4,vars:0,consts:[[1,"spinner-container"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(r,c){r&1&&(w(0,"div",0)(1,"div",1)(2,"span",2),M(3,"Loading..."),C()()())},styles:[".spinner-container[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]:not(.inline)   .spinner-container[_ngcontent-%COMP%]{top:-131px;min-height:200px}.spinner-border[_ngcontent-%COMP%]{width:4rem;height:4rem}[_nghost-%COMP%]:not(.inline)   .spinner-border[_ngcontent-%COMP%]{margin-top:100px}.small[_nghost-%COMP%]   .spinner-border[_ngcontent-%COMP%]{width:2rem;height:2rem;--bs-spinner-vertical-align: -.2em;--bs-spinner-border-width: .15em}"]})}}return t})();var y=class{constructor(e,n,r,c){this.http=e,this.settings=n,this.codec=r,this.resourcePath=c}get(e,n){return this.http.get(`${this.baseUrl}/${e}`,n).pipe(i(P(this.codec)))}getList(e){return this.http.get(`${this.baseUrl}/`,e).pipe(i(v(this.codec)))}get baseUrl(){return`${this.settings.apiUrl}/${this.resourcePath}`}};function T(t){return u(e=>e instanceof O&&e.status===404?a(t||null):l(()=>e))}function A(t){return e=>h(()=>(t(),e))}function H(t){return e=>e.pipe(o(n=>n??t),f(t))}function R(t,e){return t.pipe(i(n=>e.pipe(s(n),o(()=>n))))}function W(t,e=window.document){return p(...["click","keydown"].map(n=>d(e,n))).pipe(s(null),i(()=>m(t)),o(()=>{}))}function j(t,e){return p(t,e.pipe(g(t),o(([n,r])=>r)))}export{y as a,E as b,T as c,A as d,H as e,R as f,W as g,j as h};
