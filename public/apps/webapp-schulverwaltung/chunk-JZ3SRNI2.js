import{p as Y,r as z,s as Q,t as W,w as X}from"./chunk-U5XSAHDS.js";import"./chunk-Y4QYVF5K.js";import"./chunk-UVJXXYOR.js";import{d as K}from"./chunk-DZUR7EKU.js";import{a as J,b as V}from"./chunk-UPZQ4FTT.js";import{b as U}from"./chunk-5NJNJ42P.js";import{C as w,w as x}from"./chunk-JHVNIEZK.js";import{$a as m,Ab as I,Bb as $,Cb as b,Db as O,Fa as l,Ib as o,Jb as a,M as E,Ma as j,Od as R,P as _,Pa as v,Qd as q,Ua as B,X as P,Za as g,_ as p,_a as u,bc as M,bd as N,gb as A,h as L,n as d,o as k,qb as y,rb as C,s as D,wa as c,wc as H,xa as h,zb as G}from"./chunk-34ZOBT6Z.js";var f=(()=>{class e{constructor(s,t,n,S,se,ne,oe){this.storageService=s,this.loadingService=t,this.coursesRestService=n,this.subscriptionRestService=S,this.reportsService=se,this.gradingScalesRestService=ne,this.settings=oe,this.studentId$=new L(1),this.loading$=this.loadingService.loading$,this.studentCourses$=this.loadCourses().pipe(E(1)),this.studentCoursesSorted$=this.studentCourses$.pipe(d(i=>i.slice().sort((r,ae)=>r.Designation.localeCompare(ae.Designation)))),this.studentCourseIds$=this.studentCourses$.pipe(d(i=>i.flatMap(r=>r.Id))),this.subscriptionIds$=k([this.studentId$,this.studentCourseIds$]).pipe(_(([i,r])=>this.subscriptionRestService.getSubscriptionIdsByStudentAndCourse(i,r))),this.testReports$=this.subscriptionIds$.pipe(d(i=>this.reportsService.getStudentSubscriptionGradesReports(i))),this.tests$=this.studentCourses$.pipe(d(i=>i.flatMap(r=>r.Tests).filter(x))),this.gradingScaleIdsFromTests$=this.tests$.pipe(d(i=>[...i.map(r=>r.GradingScaleId)].filter(x).filter(w))),this.gradingScaleIdsFromCourses$=this.studentCourses$.pipe(d(i=>i.flatMap(r=>r.GradingScaleId).filter(x).filter(w))),this.gradingScaleIds$=k([this.gradingScaleIdsFromCourses$,this.gradingScaleIdsFromTests$]).pipe(d(([i,r])=>i.concat(r).filter(w))),this.gradingScales$=this.gradingScaleIds$.pipe(_(i=>D(i.map(r=>this.gradingScalesRestService.getGradingScale(r)))));let F=this.storageService.getPayload()?.id_person;F&&this.studentId$.next(Number(F))}loadCourses(){return this.loadingService.load(this.coursesRestService.getExpandedCoursesForStudent())}static{this.\u0275fac=function(t){return new(t||e)(p(q),p(V),p(Y),p(z),p(K),p(Q),p(N))}}static{this.\u0275prov=P({token:e,factory:e.\u0275fac})}}return e})();var de=()=>[],ee=(()=>{class e{constructor(s){this.myGradesService=s}static{this.\u0275fac=function(t){return new(t||e)(h(f))}}static{this.\u0275cmp=l({type:e,selectors:[["bkd-my-grades-header"]],decls:7,vars:7,consts:[[1,"d-flex","justify-content-between","header"],[3,"reports"]],template:function(t,n){if(t&1&&(g(0,"div",0)(1,"div"),y(2),o(3,"translate"),u(),g(4,"div"),m(5,"bkd-reports-link",1),o(6,"async"),u()()),t&2){let S;c(2),C(a(3,2,"my-grades.header")),c(3),v("reports",(S=a(6,4,n.myGradesService.testReports$))!==null&&S!==void 0?S:O(6,de))}},dependencies:[J,M,R],styles:[".header[_ngcontent-%COMP%]{padding-bottom:1rem}.report[_ngcontent-%COMP%]{margin-left:1rem}"]})}}return e})();function pe(e,re){e&1&&m(0,"bkd-spinner")}function ce(e,re){if(e&1&&m(0,"bkd-dossier-grades-view",1),e&2){A();let s=$(0),t=$(2),n=$(4);v("courses",s)("studentId",t)("gradingScales",n)("isEditable",!1)}}var te=(()=>{class e{constructor(s){this.myGradesService=s}static{this.\u0275fac=function(t){return new(t||e)(h(f))}}static{this.\u0275cmp=l({type:e,selectors:[["bkd-my-grades-show"]],features:[b([W])],decls:14,vars:15,consts:[[1,"bkd-container","bkd-container-limited"],[3,"courses","studentId","gradingScales","isEditable"]],template:function(t,n){t&1&&(G(0),o(1,"async"),G(2),o(3,"async"),G(4),o(5,"async"),g(6,"div",0)(7,"h1"),y(8),o(9,"translate"),u(),m(10,"bkd-my-grades-header"),j(11,pe,1,0,"bkd-spinner"),o(12,"async"),j(13,ce,1,4,"bkd-dossier-grades-view",1),u()),t&2&&(I(a(1,2,n.myGradesService.studentCoursesSorted$)),c(2),I(a(3,5,n.myGradesService.studentId$)),c(2),I(a(5,8,n.myGradesService.gradingScales$)),c(4),C(a(9,11,"my-grades.title")),c(3),B(a(12,13,n.myGradesService.loading$)?11:13))},dependencies:[ee,X,U,M,R],encapsulation:2})}}return e})();var ie=(()=>{class e{constructor(){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=l({type:e,selectors:[["bkd-my-grades"]],features:[b([f])],decls:1,vars:0,template:function(t,n){t&1&&m(0,"router-outlet")},dependencies:[H],encapsulation:2})}}return e})();var Ee=[{path:"",component:ie,children:[{path:"",component:te}]}];export{Ee as MY_GRADES_ROUTES};
