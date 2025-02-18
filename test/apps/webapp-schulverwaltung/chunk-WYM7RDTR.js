import{l as q,m as J,o as V,p as Y,w as z}from"./chunk-J4ZWCX23.js";import"./chunk-Y4QYVF5K.js";import"./chunk-H664QRX4.js";import{d as U}from"./chunk-JGKXAFYO.js";import"./chunk-NC6UEGAF.js";import{i as O,j as H}from"./chunk-SL67CYEF.js";import{h as N}from"./chunk-HQSONWXM.js";import{D as M,x as I}from"./chunk-RXRYDGZR.js";import{$ as r,Cc as B,Eb as v,Fb as y,Gb as C,Hb as G,Ia as c,Ib as P,M as F,Nb as o,Ob as n,P as x,Pa as w,Sa as S,Sd as b,Ud as A,X as L,Xa as D,ab as f,bb as m,cb as p,gc as $,h as _,hd as j,jb as E,n as a,o as R,s as T,vb as g,wb as h,ya as d}from"./chunk-NEW5VGRB.js";var l=(()=>{class t{constructor(){this.storageService=r(A),this.loadingService=r(O),this.coursesRestService=r(q),this.subscriptionRestService=r(V),this.reportsService=r(U),this.gradingScalesRestService=r(J),this.settings=r(j),this.studentId$=new _(1),this.loading$=this.loadingService.loading$,this.studentCourses$=this.loadCourses().pipe(F(1)),this.studentCoursesSorted$=this.studentCourses$.pipe(a(e=>e.slice().sort((i,u)=>i.Designation.localeCompare(u.Designation)))),this.studentCourseIds$=this.studentCourses$.pipe(a(e=>e.flatMap(i=>i.Id))),this.subscriptionIds$=R([this.studentId$,this.studentCourseIds$]).pipe(x(([e,i])=>this.subscriptionRestService.getSubscriptionIdsByStudentAndCourse(e,i))),this.testReports$=this.subscriptionIds$.pipe(a(e=>this.reportsService.getStudentSubscriptionGradesReports(e))),this.tests$=this.studentCourses$.pipe(a(e=>e.flatMap(i=>i.Tests).filter(I))),this.gradingScaleIdsFromTests$=this.tests$.pipe(a(e=>[...e.map(i=>i.GradingScaleId)].filter(I).filter(M))),this.gradingScaleIdsFromCourses$=this.studentCourses$.pipe(a(e=>e.flatMap(i=>i.GradingScaleId).filter(I).filter(M))),this.gradingScaleIds$=R([this.gradingScaleIdsFromCourses$,this.gradingScaleIdsFromTests$]).pipe(a(([e,i])=>e.concat(i).filter(M))),this.gradingScales$=this.gradingScaleIds$.pipe(x(e=>T(e.map(i=>this.gradingScalesRestService.getGradingScale(i)))));let s=this.storageService.getPayload()?.id_person;s&&this.studentId$.next(Number(s))}loadCourses(){return this.loadingService.load(this.coursesRestService.getExpandedCoursesForStudent())}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=L({token:t,factory:t.\u0275fac})}}return t})();var Z=()=>[],K=(()=>{class t{constructor(){this.myGradesService=r(l)}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["bkd-my-grades-header"]],decls:7,vars:7,consts:[[1,"d-flex","justify-content-between","header"],[3,"reports"]],template:function(e,i){if(e&1&&(f(0,"div",0)(1,"div"),g(2),o(3,"translate"),m(),f(4,"div"),p(5,"bkd-reports-link",1),o(6,"async"),m()()),e&2){let u;d(2),h(n(3,2,"my-grades.header")),d(3),S("reports",(u=n(6,4,i.myGradesService.testReports$))!==null&&u!==void 0?u:P(6,Z))}},dependencies:[H,$,b],styles:[".header[_ngcontent-%COMP%]{padding-bottom:1rem}.report[_ngcontent-%COMP%]{margin-left:1rem}"]})}}return t})();function ee(t,X){t&1&&p(0,"bkd-spinner")}function te(t,X){if(t&1&&p(0,"bkd-dossier-grades-view",1),t&2){E();let s=C(0),e=C(2),i=C(4);S("courses",s)("studentId",e)("gradingScales",i)("isEditable",!1)}}var Q=(()=>{class t{constructor(){this.myGradesService=r(l)}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["bkd-my-grades-show"]],features:[G([Y])],decls:14,vars:15,consts:[[1,"bkd-container","bkd-container-limited"],[3,"courses","studentId","gradingScales","isEditable"]],template:function(e,i){e&1&&(v(0),o(1,"async"),v(2),o(3,"async"),v(4),o(5,"async"),f(6,"div",0)(7,"h1"),g(8),o(9,"translate"),m(),p(10,"bkd-my-grades-header"),w(11,ee,1,0,"bkd-spinner"),o(12,"async"),w(13,te,1,4,"bkd-dossier-grades-view",1),m()),e&2&&(y(n(1,2,i.myGradesService.studentCoursesSorted$)),d(2),y(n(3,5,i.myGradesService.studentId$)),d(2),y(n(5,8,i.myGradesService.gradingScales$)),d(4),h(n(9,11,"my-grades.title")),d(3),D(n(12,13,i.myGradesService.loading$)?11:13))},dependencies:[K,z,N,$,b],encapsulation:2})}}return t})();var W=(()=>{class t{constructor(){}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["bkd-my-grades"]],features:[G([l])],decls:1,vars:0,template:function(e,i){e&1&&p(0,"router-outlet")},dependencies:[B],encapsulation:2})}}return t})();var Pe=[{path:"",component:W,children:[{path:"",component:Q}]}];export{Pe as MY_GRADES_ROUTES};
