"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[390],{853:(O,A,e)=>{e.d(A,{h:()=>i});var s=e(4438);let i=(()=>{class u{constructor(){this.expanded=!1}static#t=this.\u0275fac=function(p){return new(p||u)};static#e=this.\u0275cmp=s.VBU({type:u,selectors:[["bkd-caret"]],inputs:{expanded:"expanded"},standalone:!0,features:[s.aNF],decls:2,vars:1,consts:[["role","button",1,"d-flex","material-icons"]],template:function(p,h){1&p&&(s.j41(0,"i",0),s.EFF(1),s.k0s()),2&p&&(s.R7$(),s.JRh(h.expanded?"expand_less":"expand_more"))},styles:["i[_ngcontent-%COMP%]:hover{color:#ea161f}"]})}return u})()},3919:(O,A,e)=>{e.d(A,{$:()=>b});var s=e(853),i=e(4438);const u=["*"];let b=(()=>{class d{constructor(){this.opened=!1}static#t=this.\u0275fac=function(f){return new(f||d)};static#e=this.\u0275cmp=i.VBU({type:d,selectors:[["bkd-student-dossier-entry-header"]],inputs:{opened:"opened"},standalone:!0,features:[i.aNF],ngContentSelectors:u,decls:3,vars:1,consts:[[1,"m-0"],[1,"d-flex","align-items-center",3,"expanded"]],template:function(f,E){1&f&&(i.NAR(),i.j41(0,"h5",0),i.SdG(1),i.k0s(),i.nrm(2,"bkd-caret",1)),2&f&&(i.R7$(2),i.Y8G("expanded",E.opened))},dependencies:[s.h],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-top:1px solid #dee2e6;cursor:pointer}button[_ngcontent-%COMP%]{color:#000;text-decoration:none}.btn-link[_ngcontent-%COMP%]:hover{text-decoration:none}"],changeDetection:0})}return d})()},9573:(O,A,e)=>{e.d(A,{o:()=>u});var s=e(5783),i=e(5306);const u=s.NW({Id:s.ai,AddressLine1:(0,i.c$)(s.Yj),AddressLine2:(0,i.bW)(s.Yj),Birthdate:(0,i.c$)(i.iC),DisplayEmail:(0,i.c$)(s.Yj),FullName:s.Yj,Gender:s.KC([s.eu("M"),s.eu("F"),s.eu("X")]),Location:(0,i.c$)(s.Yj),PhoneMobile:(0,i.c$)(s.Yj),PhonePrivate:(0,i.c$)(s.Yj),PostalCode:(0,i.c$)(s.Yj)})},5507:(O,A,e)=>{e.d(A,{P:()=>k});var s=e(4981);const u=function i(l,c,t,r){for(var n=-1,o=null==l?0:l.length;++n<o;){var a=l[n];c(r,a,t(a),l)}return r},h=function b(l){return function(c,t,r){for(var n=-1,o=Object(c),a=r(c),v=a.length;v--;){var R=a[l?v:++n];if(!1===t(o[R],R,o))break}return c}}();var f=e(2662);var j=e(1287);const F=function g(l,c){return function(t,r){if(null==t)return t;if(!(0,j.A)(t))return l(t,r);for(var n=t.length,o=c?n:-1,a=Object(t);(c?o--:++o<n)&&!1!==r(a[o],o,a););return t}}(function E(l,c){return l&&h(l,c,f.A)}),$=function m(l,c,t,r){return F(l,function(n,o,a){c(r,n,t(n),a)}),r};var D=e(5405),C=e(3744),Y=Object.prototype.hasOwnProperty;const V=function x(l,c){return function(t,r){var n=(0,C.A)(t)?u:$,o=c?c():{};return n(t,l,(0,D.A)(r,2),o)}}(function(l,c,t){Y.call(l,t)?l[t].push(c):(0,s.A)(l,t,[c])});var W=e(5529),N=e(4572),I=e(7673),w=e(5558),U=e(6354),z=e(2809),B=e(5783),G=e(5306);const H=B.NW({Id:B.ai,Title:B.Yj}),J=(0,G.c$)(B.YO(H));var Q=e(785),M=e(4438),X=e(4599),Z=e(1626);let k=(()=>{class l{constructor(t,r,n){this.settings=t,this.storageService=r,this.http=n}getPersonMasterDataReports(t){return this.getAvailableReports("Person",this.settings.personMasterDataReports,[t])}getStudentConfirmationReports(t){return this.getAvailableReports("Praesenzinformation",this.settings.studentConfirmationReports,t)}getEvaluateAbsencesReports(t){return this.getAvailableReports("Praesenzinformation",this.settings.evaluateAbsencesReports,t)}getMyAbsencesReports(t){return this.getAvailableReports("Praesenzinformation",this.settings.myAbsencesReports,t)}getCourseReports(t){return this.getAvailableReports("Anlass",this.settings.testsByCourseReports,[t])}getStudentSubscriptionReports(t){return this.settings.testsBySubscriptionStudentReports.map((n,o)=>{const a=this.getReportUrl(n.type,"Anmeldung",n.id,t);return{...n,title:`Report ${o+1}`,url:a}})}getTeacherSubscriptionReports(t){return this.settings.testsBySubscriptionTeacherReports.map((n,o)=>{const a=this.getReportUrl(n.type,"Anmeldung",n.id,t);return{...n,title:`Report ${o+1}`,url:a}})}getAvailableReports(t,r,n){const o=V(r,v=>v.type),a=(0,N.z)(Object.keys(o).map(v=>this.getAvailableReportsForType(v,t,o[v].map(({id:R})=>R),n)));return this.mergeAvailableReports(a,r)}getAvailableReportsForType(t,r,n,o){return 0===o.length?(0,I.of)([]):this.http.get(this.getReportAvailabilityUrl(t,r,n,o)).pipe((0,w.n)((0,Q.D4)(J)),(0,U.T)(a=>a?a.map(({Id:v,Title:R})=>({type:t,id:v,title:R,url:this.getReportUrl(t,r,v,o)})):[]))}mergeAvailableReports(t,r){return t.pipe((0,U.T)(n=>{const o=(0,W.A)(n);return r.reduce((a,v)=>{const R=o.find(({id:_})=>_===v.id);return R?[...a,R]:a},[])}))}getReportUrl(t,r,n,o){const a=new URL(`${this.settings.apiUrl}/Files/${this.getReportTypePathPart(t)}/${r}/${n}`);return a.searchParams.set("ids",o.join(",")),a.searchParams.set("token",this.storageService.getAccessToken()??""),a.toString()}getReportAvailabilityUrl(t,r,n,o){const a=new URL(`${this.settings.apiUrl}/${this.getReportTypePathPart(t)}/AvailableReports/${r}`);return a.searchParams.set("ids",Array.isArray(n)?n.join(","):String(n)),a.searchParams.set("keys",o.join(",")),a.toString()}getReportTypePathPart(t){return`${t[0].toUpperCase()+t.slice(1)}Reports`}static#t=this.\u0275fac=function(r){return new(r||l)(M.KVO(z.yy),M.KVO(X.n),M.KVO(Z.Qq))};static#e=this.\u0275prov=M.jDH({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},4981:(O,A,e)=>{e.d(A,{A:()=>d});var s=e(4713);const u=function(){try{var p=(0,s.A)(Object,"defineProperty");return p({},"",{}),p}catch{}}(),d=function b(p,h,f){"__proto__"==h&&u?u(p,h,{configurable:!0,enumerable:!0,value:f,writable:!0}):p[h]=f}},5529:(O,A,e)=>{e.d(A,{A:()=>j});var s=e(563),i=e(6944),u=e(6513),b=e(3744),d=i.A?i.A.isConcatSpreadable:void 0;const h=function p(g){return(0,b.A)(g)||(0,u.A)(g)||!!(d&&g&&g[d])},E=function f(g,y,P,F,m){var $=-1,D=g.length;for(P||(P=h),m||(m=[]);++$<D;){var C=g[$];y>0&&P(C)?y>1?f(C,y-1,P,F,m):(0,s.A)(m,C):F||(m[m.length]=C)}return m},j=function S(g){return null!=g&&g.length?E(g,1):[]}}}]);