import{v as N,z}from"./chunk-7TIAFCYF.js";import{$a as o,Cd as B,D as _,Eb as P,H as u,J as h,Kb as l,La as g,Lb as p,Md as D,P as T,Pa as O,Qa as f,Rd as H,Sd as K,Va as y,_a as a,aa as I,eb as $,ec as k,g as m,gb as C,ha as M,hb as x,hd as F,ia as S,ja as E,kd as w,n as c,od as V,rb as d,x as v,ya as r}from"./chunk-TTJNYD2F.js";function A(n,s){if(n&1){let e=$();a(0,"button",6),C("click",function(t){S(e);let b=x();return E(b.modelChange(t))}),a(1,"i",2),d(2,"clear"),o()()}}function j(n,s){n&1&&(a(0,"div",5)(1,"div",7)(2,"span",8),d(3,"Loading..."),o()()())}var q=300,U=3,oe=(()=>{class n{constructor(){this.selectedItem$=new m(null),this.placeholder="shared.typeahead.default-placeholder",this.valueChange=this.selectedItem$.pipe(c(e=>e?e.Key:null),u()),this.componentId=D("bkd-typeahead-"),this.loading$=new m(!1),this.search=e=>e.pipe(G(U,q),T(this.fetchItems.bind(this)))}ngOnChanges(e){e.value&&e.value.currentValue&&e.value.currentValue!==this.selectedItemKey&&this.fetchItem(e.value.currentValue).subscribe(i=>{this.modelChange(i)})}format(e){return e.Value}modelChange(e){this.selectedItem$.next(e instanceof Object?e:null)}get selectedItemKey(){return this.selectedItem$.value?this.selectedItem$.value.Key:null}fetchItems(e){return this.loading$.next(!0),this.typeaheadService.getTypeaheadItems(e,this.additionalHttpParams).pipe(h(()=>this.loading$.next(!1)))}fetchItem(e){return this.loading$.next(!0),this.typeaheadService.getTypeaheadItemByKey(e).pipe(h(()=>this.loading$.next(!1)))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=I({type:n,selectors:[["bkd-typeahead"]],inputs:{typeaheadService:"typeaheadService",placeholder:"placeholder",value:"value",additionalHttpParams:"additionalHttpParams"},outputs:{valueChange:"valueChange"},standalone:!0,features:[M,P],decls:11,vars:18,consts:[[1,"input-group"],[1,"input-group-text",3,"id"],[1,"material-icons"],["type","text",1,"form-control",3,"ngModelChange","ngbTypeahead","inputFormatter","resultFormatter","ngModel"],["type","button",1,"btn","btn-link","text-decoration-none"],[1,"spinner-container"],["type","button",1,"btn","btn-link","text-decoration-none",3,"click"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"visually-hidden"]],template:function(i,t){i&1&&(a(0,"div",0)(1,"span",1)(2,"i",2),d(3,"search"),o()(),a(4,"input",3),l(5,"async"),l(6,"translate"),l(7,"translate"),C("ngModelChange",function(L){return t.modelChange(L)}),o(),g(8,A,3,0,"button",4),o(),g(9,j,4,0,"div",5),l(10,"async")),i&2&&(r(),f("id",t.componentId),r(3),f("ngbTypeahead",t.search)("inputFormatter",t.format)("resultFormatter",t.format)("ngModel",p(5,10,t.selectedItem$)),O("placeholder",p(6,12,t.placeholder))("aria-label",p(7,14,t.placeholder))("aria-describedby",t.componentId),r(4),y(t.value?8:-1),r(),y(p(10,16,t.loading$)?9:-1))},dependencies:[N,B,F,w,V,k,K,H],styles:["[_nghost-%COMP%]{display:block;position:relative;background:#fff}.spinner-container[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:.75rem;display:flex;align-items:center;z-index:1001}.spinner-border[_ngcontent-%COMP%]{color:#6c757d}input[_ngcontent-%COMP%]{padding-right:2.5em}.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{position:absolute;right:0;z-index:5}"],changeDetection:0})}}return n})();function G(n,s){return e=>e.pipe(_(s),c(R),u(),v(z(n)))}function R(n){return n.trim().toLowerCase()}export{oe as a};
