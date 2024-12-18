import{a as ye,b as Se,c as ge}from"./chunk-X4IBKFGZ.js";import{a as be}from"./chunk-ETZJYB5I.js";import{a as _e}from"./chunk-4CSFXSJN.js";import{a as ue}from"./chunk-SP6SA4GZ.js";import"./chunk-NOKI2UHM.js";import"./chunk-U5XSAHDS.js";import"./chunk-4GQ5KKE3.js";import{b as oe,e as M}from"./chunk-HAKJPBT5.js";import"./chunk-HAMVO7SX.js";import"./chunk-Y4QYVF5K.js";import"./chunk-UVJXXYOR.js";import{a as ve,b as Ce,c as fe}from"./chunk-SVCHNGNX.js";import{f as de}from"./chunk-UFRLS5GG.js";import{d as me}from"./chunk-DZUR7EKU.js";import"./chunk-FLVW3H6P.js";import"./chunk-2UDOWYE6.js";import{a as he}from"./chunk-ZA3SEXFP.js";import{L as re,P as se}from"./chunk-EDO6DY2V.js";import"./chunk-PQGQXFEQ.js";import{a as le,b as pe}from"./chunk-UPZQ4FTT.js";import{b as ce}from"./chunk-5NJNJ42P.js";import{u as ae}from"./chunk-JHVNIEZK.js";import"./chunk-LTVWFE76.js";import{$a as k,Ab as j,Bb as S,Cb as J,Db as K,Eb as N,F as W,Fa as x,Ib as s,Jb as l,M as q,Ma as C,Oa as z,Od as D,P as V,Pa as v,R as U,Ua as b,Wb as Q,X as G,Xa as I,Ya as F,Za as o,_ as E,_a as r,_b as Y,bc as Z,bd as ne,da as L,db as P,ea as T,fb as h,gb as p,la as X,n as H,qb as m,rb as y,sb as f,vc as ee,wa as a,wb as w,wc as te,xa as _,xb as R,yb as B,yc as ie,zb as $}from"./chunk-34ZOBT6Z.js";var Ee=(()=>{class e{constructor(t,i,n){this.studentsService=t,this.educationalEventsService=i,this.studyClassesService=n,this.filter={student:null,educationalEvent:null,studyClass:null},this.filterChange=new X,this.classesHttpFilter={params:{fields:"IsActive","filter.IsActive":"=true"}}}show(){this.filterChange.emit(this.filter)}static{this.\u0275fac=function(i){return new(i||e)(_(de),_(ge),_(_e))}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-evaluate-absences-header"]],inputs:{filter:"filter"},outputs:{filterChange:"filterChange"},decls:20,vars:19,consts:[[1,"row","g-3","align-items-end"],[1,"col-sm-12","col-md"],[1,"form-label"],[3,"valueChange","typeaheadService","value"],[3,"valueChange","typeaheadService","value","additionalHttpParams"],[1,"col-auto"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1)(2,"label",2),m(3),s(4,"translate"),r(),o(5,"bkd-typeahead",3),B("valueChange",function(d){return R(n.filter.student,d)||(n.filter.student=d),d}),r()(),o(6,"div",1)(7,"label",2),m(8),s(9,"translate"),r(),o(10,"bkd-typeahead",3),B("valueChange",function(d){return R(n.filter.educationalEvent,d)||(n.filter.educationalEvent=d),d}),r()(),o(11,"div",1)(12,"label",2),m(13),s(14,"translate"),r(),o(15,"bkd-typeahead",4),B("valueChange",function(d){return R(n.filter.studyClass,d)||(n.filter.studyClass=d),d}),r()(),o(16,"div",5)(17,"button",6),h("click",function(){return n.show()}),m(18),s(19,"translate"),r()()()),i&2&&(a(3),y(l(4,11,"evaluate-absences.header.student")),a(2),v("typeaheadService",n.studentsService),w("value",n.filter.student),a(3),y(l(9,13,"evaluate-absences.header.module-instance")),a(2),v("typeaheadService",n.educationalEventsService),w("value",n.filter.educationalEvent),a(3),y(l(14,15,"evaluate-absences.header.study-class")),a(2),v("typeaheadService",n.studyClassesService),w("value",n.filter.studyClass),v("additionalHttpParams",n.classesHttpFilter),a(3),f(" ",l(19,17,"evaluate-absences.header.show")," "))},dependencies:[be,D],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:1rem 1rem 1rem 0;border-bottom:1px solid #dee2e6}"],changeDetection:0})}}return e})();var g=(()=>{class e extends Ce{constructor(t,i,n,u,d){super(t,i,d,n,"/evaluate-absences"),this.lessonPresenceService=u,this.queryParamsString$.pipe(U(this.destroy$)).subscribe(A=>this.confirmBackLinkParams={returnparams:A})}updateAfterConfirm(){this.resetEntries()}getInitialFilter(){return{student:null,educationalEvent:null,studyClass:null}}isValidFilter(t){return!!(t.student||t.educationalEvent||t.studyClass)}getInitialSorting(){return{key:"StudentFullName",ascending:!0}}loadEntries(t,i,n){return this.loadingService.load(this.lessonPresenceService.getStatistics(t,i,n),ve)}buildParamsFromFilter(t){return ye(t)}static{this.\u0275fac=function(i){return new(i||e)(E(Q),E(pe),E(ne),E(M),E(fe))}}static{this.\u0275prov=G({token:e,factory:e.\u0275fac})}}return e})();var ke=(e,c)=>c.key,Pe=(e,c)=>c.StudentRef.Id,Ie=()=>[],Fe=e=>["student",e,"absences"],we=e=>({returnparams:e});function Re(e,c){e&1&&k(0,"bkd-spinner")}function Be(e,c){if(e&1){let t=P();o(0,"th",9),h("click",function(){let n=L(t).$implicit,u=p(4);return T(u.state.sortService.toggleSorting(n.key))}),o(1,"div",10)(2,"div",11),s(3,"translate"),m(4),s(5,"translate"),r(),o(6,"div",12),m(7),s(8,"async"),r()()()}if(e&2){let t=c.$implicit,i=p(4);v("ngClass",t.label),a(2),v("ngbTooltip",l(3,4,"evaluate-absences.list.header."+t.label)),a(2),f(" ",l(5,6,"evaluate-absences.list.header."+t.label)," "),a(3),f(" ",l(8,8,i.state.sortService.getSortingChar$(t.key))," ")}}function $e(e,c){if(e&1&&(o(0,"a",13),s(1,"async"),m(2),r()),e&2){let t=p().$implicit,i=p().$implicit,n=p(5);v("routerLink",N(5,Fe,i.StudentRef.Id))("queryParams",N(7,we,l(1,3,n.profileReturnParams$))),a(2),f(" ",i[t.key]," ")}}function je(e,c){if(e&1&&m(0),e&2){let t=p().$implicit,i=p().$implicit;f(" ",i[t.key]," ")}}function De(e,c){if(e&1&&(o(0,"td"),s(1,"translate"),C(2,$e,3,9,"a",13)(3,je,1,1),r()),e&2){let t=c.$implicit;z("data-label",l(1,2,"evaluate-absences.list.header."+t.label)),a(2),b(t.key==="StudentFullName"?2:3)}}function Me(e,c){if(e&1&&(o(0,"tr"),I(1,De,4,4,"td",null,ke),r()),e&2){let t=p(5);a(),F(t.columns)}}function Ve(e,c){if(e&1&&(o(0,"tbody"),I(1,Me,3,0,"tr",null,Pe),r()),e&2){p(4);let t=S(0);a(),F(t)}}function Ne(e,c){e&1&&k(0,"bkd-spinner",7)}function Oe(e,c){if(e&1){let t=P();o(0,"button",14),h("click",function(){L(t);let n=p(4);return T(n.state.nextPage())}),m(1),s(2,"translate"),r()}e&2&&(a(),f(" ",l(2,1,"global.pagination.load-more")," "))}function He(e,c){if(e&1){let t=P();o(0,"div",2)(1,"div",3),k(2,"bkd-reports-link",4),s(3,"async"),r(),o(4,"table",5),h("scrolled",function(){L(t);let n=p(3);return T(n.onScroll())}),o(5,"thead")(6,"tr"),I(7,Be,9,10,"th",6,ke),r()(),C(9,Ve,3,0,"tbody"),r(),C(10,Ne,1,0,"bkd-spinner",7)(11,Oe,3,3,"button",8),r()}if(e&2){let t,i=p(3),n=S(0),u=S(2),d=S(4);a(2),v("reports",(t=l(3,4,i.reports$))!==null&&t!==void 0?t:K(6,Ie)),a(5),F(i.columns),a(2),b(n&&n.length>0?9:-1),a(),b(d?10:-1),a(),b(u&&!d?11:-1)}}function We(e,c){e&1&&(o(0,"p",1),m(1),s(2,"translate"),r()),e&2&&(a(),f(" ",l(2,1,"evaluate-absences.no-entries")," "))}function qe(e,c){if(e&1&&C(0,He,12,7,"div",2)(1,We,3,3,"p",1),e&2){p(2);let t=S(0),i=S(4);b(t&&t.length>0||i?0:1)}}function Ue(e,c){if(e&1&&(C(0,Re,1,0,"bkd-spinner"),s(1,"async"),C(2,qe,2,1)),e&2){let t=p();b(l(1,1,t.state.loading$)?0:2)}}function Ge(e,c){e&1&&(o(0,"p",1),m(1),s(2,"translate"),r()),e&2&&(a(),y(l(2,1,"evaluate-absences.no-filter")))}var Ae=(()=>{class e{constructor(t,i,n,u,d,A){this.state=t,this.scrollPosition=i,this.route=n,this.presenceTypesService=u,this.reportsService=d,this.lessonPresencesService=A,this.reports$=this.loadReports(),this.columns=[{key:"StudentFullName",label:"student"},{key:"TotalAbsences",label:"total"},{key:"TotalAbsencesValidExcuse",label:"valid-excuse"},{key:"TotalAbsencesWithoutExcuse",label:"without-excuse"},{key:"TotalAbsencesUnconfirmed",label:"unconfirmed"},{key:"TotalAbsencesUnchecked",label:"unchecked"},{key:"TotalIncidents",label:"incident"}],this.filterFromParams$=this.route.queryParams.pipe(H(Xe)),this.profileReturnParams$=this.state.queryParamsString$}ngOnInit(){this.filterFromParams$.pipe(W(1)).subscribe(t=>this.state.setFilter(t)),this.presenceTypesService.halfDayActive$.subscribe(t=>{t&&(this.columns=[...this.columns,{key:"TotalHalfDays",label:"halfday"}])})}ngAfterViewInit(){this.scrollPosition.restore()}onScroll(){this.state.nextPage()}loadReports(){return this.state.validFilter$.pipe(V(t=>this.lessonPresencesService.getLessonRefs(t)),V(t=>t.length>0?this.reportsService.getEvaluateAbsencesReports(this.getReportRecordIds(t)):[]),q(1))}getReportRecordIds(t){return t.map(i=>`${i.LessonRef.Id}_${i.RegistrationRef.Id}`)}static{this.\u0275fac=function(i){return new(i||e)(_(g),_(he),_(ee),_(se),_(me),_(M))}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-evaluate-absences-list"]],decls:14,vars:18,consts:[[3,"filterChange","filter"],[1,"mt-3"],[1,"py-3"],[1,"buttons"],[1,"mb-2",3,"reports"],["infiniteScroll","",1,"table","table-striped","table-fixed",3,"scrolled"],["scope","col",3,"ngClass"],[1,"inline"],["type","button",1,"btn","btn-outline-secondary","btn-sm","d-block","mx-auto"],["scope","col",3,"click","ngClass"],[1,"d-flex"],[1,"column-title",3,"ngbTooltip"],[1,"sort-direction"],[1,"student",3,"routerLink","queryParams"],["type","button",1,"btn","btn-outline-secondary","btn-sm","d-block","mx-auto",3,"click"]],template:function(i,n){if(i&1){let u=P();$(0),s(1,"async"),$(2),s(3,"async"),$(4),s(5,"async"),o(6,"h1"),m(7),s(8,"translate"),r(),o(9,"bkd-evaluate-absences-header",0),s(10,"async"),h("filterChange",function(A){return L(u),T(n.state.setFilter(A))}),r(),C(11,Ue,3,3),s(12,"async"),C(13,Ge,3,3,"p",1)}i&2&&(j(l(1,3,n.state.entries$)),a(2),j(l(3,6,n.state.hasMore$)),a(2),j(l(5,9,n.state.loadingPage$)),a(3),y(l(8,12,"evaluate-absences.title")),a(2),v("filter",l(10,14,n.filterFromParams$)),a(2),b(l(12,16,n.state.isFilterValid$)?11:13))},dependencies:[Ee,le,Se,Y,ae,ie,ce,Z,D],styles:["th[_ngcontent-%COMP%]{cursor:pointer}th.student[_ngcontent-%COMP%]{width:30%}.column-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0})}}return e})();function Xe(e){return{student:e.student?Number(e.student):null,educationalEvent:e.educationalEvent?Number(e.educationalEvent):null,studyClass:e.studyClass?Number(e.studyClass):null}}var Le=(()=>{class e{constructor(t){this.state=t}static{this.\u0275fac=function(i){return new(i||e)(_(g))}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-evaluate-absences"]],features:[J([g,{provide:oe,useExisting:g},re])],decls:1,vars:0,template:function(i,n){i&1&&k(0,"router-outlet")},dependencies:[te],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}return e})();var Bt=[{path:"",component:Le,children:[{path:"",component:Ae,data:{restoreScrollPositionFrom:["/evaluate-absences/student/:id"]}},ue]}];export{Bt as EVALUATE_ABSENCES_ROUTES};
