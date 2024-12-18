import{a as yt}from"./chunk-Y4QYVF5K.js";import{a as xt}from"./chunk-UVJXXYOR.js";import{b as Tt,c as _t,d as wt}from"./chunk-DZUR7EKU.js";import{b as Gt}from"./chunk-UPZQ4FTT.js";import{a as se}from"./chunk-5NJNJ42P.js";import{C as Ce,c as ft,d as ht,e as It,f as St,g as bt,r as vt,s as Ct,w as ve}from"./chunk-JHVNIEZK.js";import{$a as te,$b as Ze,$c as nt,Ab as ce,Ad as gt,Bb as U,D as we,Db as Xe,Eb as fe,Fa as $,Gc as v,H as qe,Hc as o,Ia as Q,Ib as c,Ic as j,Jb as f,K as Ke,Kb as L,Kd as q,Lb as Je,Lc as w,Ld as N,M as Ee,Ma as T,Mc as S,Nb as Ye,Nc as he,Nd as be,Od as M,P as C,Pa as G,Pc as De,Qa as $e,R as Pe,Tc as u,Ua as _,Vc as it,X as R,Xa as Z,Ya as ee,Yb as Qe,Za as l,Zc as re,_ as x,_a as d,a as O,b as F,bc as V,bd as W,c as He,ca as H,cc as et,da as J,db as ie,dc as tt,ea as Y,ed as rt,f as ue,fb as k,g as B,gb as I,gd as Re,h as oe,hd as Ie,jb as ge,kc as ne,kd as st,l as Ge,la as ze,ld as at,m as Ue,n as m,nd as ot,o as de,pb as le,pd as dt,qb as p,rb as D,s as me,sb as b,sd as lt,td as pt,ud as ct,vd as ut,w as Le,wa as a,wd as mt,x as We,xa as P,zb as pe,zd as Se}from"./chunk-34ZOBT6Z.js";var ni=(t,r)=>r.Key,ri=t=>({width:t});function si(t,r){if(t&1&&(l(0,"option",1),p(1),c(2,"translate"),d()),t&2){let e=I();G("ngValue",null),a(),b(" ",f(2,2,e.emptyLabel)," ")}}function ai(t,r){if(t&1&&(l(0,"option",1),p(1),d()),t&2){let e=r.$implicit;G("ngValue",e),a(),b(" ",e.Value," ")}}var Et=(()=>{class t{constructor(){this.options=[],this.allowEmpty=!0,this.emptyLabel="",this.value=null,this.disabled=!1,this.tabindex=0,this.width="auto",this.valueChange=new ze,this.options$=new B([]),this.rawValue$=new B(null),this.value$=de([this.rawValue$,this.options$]).pipe(m(([e,i])=>i&&i.find(n=>n.Key===e)||null))}ngOnChanges(e){e.value&&this.rawValue$.next(e.value.currentValue),e.options&&this.options$.next(e.options.currentValue)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=$({type:t,selectors:[["bkd-select"]],inputs:{options:"options",allowEmpty:"allowEmpty",emptyLabel:"emptyLabel",value:"value",disabled:"disabled",tabindex:"tabindex",width:"width"},outputs:{valueChange:"valueChange"},features:[H],decls:6,vars:9,consts:[[1,"form-select",3,"ngModelChange","tabindex","ngStyle","disabled","ngModel"],[3,"ngValue"]],template:function(i,n){i&1&&(l(0,"select",0),c(1,"async"),k("ngModelChange",function(y){return n.valueChange.emit(y&&y.Key)}),T(2,si,3,4,"option",1),Z(3,ai,2,2,"option",1,ni),p(5,` >
`),d()),i&2&&(ge("tabindex",n.tabindex),G("ngStyle",fe(7,ri,n.width))("disabled",n.disabled)("ngModel",f(1,5,n.value$)),a(2),_(n.allowEmpty?2:-1),a(),ee(n.options))},dependencies:[Se,pt,ct,lt,Ie,at,V,Ze,M],encapsulation:2,changeDetection:0})}}return t})();var Pt=S({Id:o,Designation:v,StudentCount:o,Number:v});var Me=S({Id:v,TestId:o,CourseRegistrationId:o,GradeId:u(o),GradeValue:u(o),GradeDesignation:u(v),Points:u(o),StudentId:o});var $t=S({Id:o,CourseId:o,Date:re,Designation:v,Weight:o,WeightPercent:o,IsPointGrading:j,MaxPoints:u(o),MaxPointsAdjusted:u(o),IsPublished:j,IsOwner:j,Owner:u(v),GradingScaleId:u(o),Results:u(w(Me))});var Dt=S({Id:o}),Rt=he({HRef:u(v)}),oi=he({HasEvaluationStarted:j,EvaluationUntil:u(re),HasReviewOfEvaluationStarted:j,HasTestGrading:j,Id:o}),di=De([Dt,Rt,oi]),li=he({Id:o,StudentCount:o}),pi=De([Dt,Rt,li]),ci=S({Grade:v,AverageTestResult:o,Id:o,StudentId:o}),Oe=S({AverageTestResult:o,CanGrade:j,EventId:o,GradeId:u(o),GradeValue:u(o),Id:o,StudentId:o}),K=S({HRef:v,Id:o,Number:v,Designation:v,DateFrom:u(re),DateTo:u(re),StatusId:o,GradingScaleId:u(o),FinalGrades:u(w(ci)),Gradings:u(w(Oe)),Tests:u(w($t)),EvaluationStatusRef:di,AttendanceRef:pi,ParticipatingStudents:u(w(_t)),Classes:u(w(Pt))}),Mt=S({TestResults:w(Me),Gradings:w(Oe)}),Ot=S({Gradings:w(Oe)});var xe=(()=>{class t extends se{constructor(e,i){super(e,i,K,"Courses"),this.statusCodec=S(nt(this.codec.props,["Id","StatusId","EvaluationStatusRef"]))}getNumberOfCoursesForRating(){return this.http.get(`${this.baseUrl}/?expand=EvaluationStatusRef&fields=Id,StatusId,EvaluationStatusRef&filter.StatusId=;10300;10240`,{headers:{"X-Role-Restriction":"TeacherRole"}}).pipe(C(N(this.statusCodec)),m(e=>e.filter(i=>i.EvaluationStatusRef.HasEvaluationStarted===!0)),m(e=>e.length))}getExpandedCourses(e){return yt(e,"TeacherRole")?this.http.get(`${this.baseUrl}/?expand=EvaluationStatusRef,AttendanceRef,Classes,FinalGrades&filter.StatusId=;${this.settings.eventlist.statusfilter}`,{headers:{"X-Role-Restriction":"TeacherRole"}}).pipe(C(N(K))):Ge([])}getExpandedCourse(e){return this.http.get(`${this.baseUrl}/${e}?expand=ParticipatingStudents,EvaluationStatusRef,Tests,Gradings,FinalGrades,Classes`).pipe(C(q(K)))}getExpandedCourseWithParticipants(e){return this.http.get(`${this.baseUrl}/${e}?expand=ParticipatingStudents,Classes,AttendanceRef`).pipe(C(q(K)))}getExpandedCoursesForDossier(){return this.http.get(`${this.baseUrl}/?expand=Tests,Gradings,FinalGrades,EvaluationStatusRef,ParticipatingStudents,Classes&filter.StatusId=;${this.settings.eventlist.statusfilter}`).pipe(C(N(K)))}getExpandedCoursesForStudent(){return this.http.get(`${this.baseUrl}/?expand=Tests,Gradings,FinalGrades&filter.StatusId=;${this.settings.eventlist.statusfilter}`,{headers:{"X-Role-Restriction":"StudentRole"}}).pipe(C(N(K)))}add(e,i,n,s,y,A,g){let h={Tests:[{Date:i,Designation:n,Weight:s,IsPointGrading:y,MaxPoints:A,MaxPointsAdjusted:g}]};return this.http.put(`${this.baseUrl}/${e}/Tests/New`,h).pipe(m(()=>{}))}update(e,i,n,s,y,A,g,h){let X={Tests:[{Id:i,Designation:n,Date:s,Weight:y,IsPointGrading:A,MaxPoints:g,MaxPointsAdjusted:h}]};return this.http.put(`${this.baseUrl}/${e}/Tests/Update`,X).pipe(m(()=>{}))}delete(e,i){let n={TestIds:[i]};return this.http.put(`${this.baseUrl}/${e}/Tests/Delete`,n).pipe(m(()=>i))}updateTestResult(e,i){let h=i,{studentId:n,testId:s}=h,y=He(h,["studentId","testId"]),A={StudentIds:[n],TestId:s},g="gradeId"in y?F(O({},A),{GradeId:y.gradeId}):F(O({},A),{Points:y.points});return this.http.put(`${this.baseUrl}/${e}/SetTestResult`,g).pipe(C(q(Mt)),C(({TestResults:X,Gradings:Ne})=>X.length<=1&&Ne.length===1?Ge({courseId:e,testResult:X[0]??null,grading:Ne[0]}):Ue(()=>new Error("`TestResults` or `Gradings` does not contain a single value"))))}setAverageAsFinalGrade(e){return this.http.put(`${this.baseUrl}/SetAverageTestResult`,e).pipe(C(q(Ot)))}publishTest(e){let i={TestIds:[e]};return this.http.put(`${this.baseUrl}/PublishTest`,i).pipe(m(()=>e))}unpublishTest(e){let i={TestIds:[e]};return this.http.put(`${this.baseUrl}/UnpublishTest`,i).pipe(m(()=>e))}static{this.\u0275fac=function(i){return new(i||t)(x(ne),x(W))}}static{this.\u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function At(t){return t.length===0?0:Fe(t.map(({value:r,weight:e})=>r*e))/Fe(t.map(({weight:r})=>r))}function je(t){return t.length===0?0:Number(Fe(t)/t.length)}function Fe(t){return t.reduce(ui,0)}function ui(t,r){return t+r}function xn(t,r,e){return t?t.Tests?.reduce((i,n)=>i||n.Id===r&&n.Results?.find(s=>s.TestId===r&&s.StudentId===e)||null,null)??null:null}function yn(t,r,e){return r.map(i=>i.Id===t.TestId?Be(t,i,e):i)}function Tn(t,r,e){return e.map(i=>i.Id===t?mi(r,i):i)}function _n(t,r){return r.map(e=>e.Id===t?F(O({},e),{IsPublished:!e.IsPublished}):e)}function Gn(t){let r=fi(t);if(r.length===0)throw new Error("unable to calculate averages without results");return je(r)}function Ae(t){return t.MaxPointsAdjusted||t.MaxPoints}function wn(t){let r=gi(t);if(r.length===0)throw new Error("unable to calculate averages without results");return je(r)}function z(t,r){return r.Results?.find(e=>e.StudentId===t)}function En(t,r){return r===null?null:r.filter(e=>e.Id!==t)}function Be(t,r,e){let i=e&&r.Results?.find(s=>s.TestId===t.TestId&&s.StudentId===t.StudentId),n=r.Results?.filter(s=>!(s.TestId===t.TestId&&s.StudentId===t.StudentId))||[];return i&&e==="grade"?t.GradeId=i.GradeId:i&&e==="points"&&(t.Points=i.Points),F(O({},r),{Results:[...n,t]})}function kt(t){return t.slice().sort((r,e)=>e.Date.getTime()-r.Date.getTime())}function ye(t,r){return r?.find(e=>e.Id===t.GradingScaleId)||null}function mi(t,r){return F(O({},r),{Results:r.Results?.filter(e=>e.StudentId!==t)||[]})}function gi(t){return t.Results?.filter(r=>r.GradeDesignation!==null).map(r=>Number(r.GradeDesignation)).filter(r=>!isNaN(r))||[]}function fi(t){return t.Results?.map(r=>r.Points!==null?r.Points:Bt).filter(r=>r>Bt)||[]}var Bt=-1;var Mn=S({Id:v,SubscriptionId:o,VssId:o,EventId:o,DropdownItems:u(w(xt)),IdPerson:o,ShowAsRadioButtons:j,Value:u(v)}),ke=S({Id:o,EventId:u(o),PersonId:u(o),Status:v,EventDesignation:u(v)});var Vt=(()=>{class t extends se{constructor(e,i){super(e,i,ke,"Subscriptions")}getSubscriptionIdsByStudentAndCourse(e,i){return this.http.get(`${this.baseUrl}/`,{params:{"filter.PersonId":`=${e}`,"filter.EventId":`;${i}`}}).pipe(C(N(it)),m(n=>n.map(s=>s.Id)))}getSubscriptionCountsByEvents(e){return this.http.get(`${this.baseUrl}/`,{params:{"filter.EventId":`;${e.join(";")}`,fields:["Id","EventId"].join(",")}}).pipe(C(N(S({Id:o,EventId:o}))),m(i=>i.reduce((n,s)=>(n[s.EventId]=n[s.EventId]?n[s.EventId]+1:1,n),{})))}getSubscriptionsByCourse(e,i){return this.http.get(`${this.baseUrl}/`,{params:F(O({"filter.EventId":`=${e}`},i),{fields:["Id","EventId","EventDesignation","PersonId","Status"].join(",")})}).pipe(C(N(ke)))}static{this.\u0275fac=function(i){return new(i||t)(x(ne),x(W))}}static{this.\u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Ii=S({Id:o,Designation:v}),Ve=S({Id:o,Grades:w(Ii)});var Nt=(()=>{class t extends se{constructor(e,i){super(e,i,Ve,"GradingScales")}getGradingScale(e){return this.http.get(`${this.baseUrl}/${e}`).pipe(C(q(Ve)))}getGradingScales(e){return me(e.map(this.getGradingScale.bind(this)))}static{this.\u0275fac=function(i){return new(i||t)(x(ne),x(W))}}static{this.\u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Te=(()=>{class t{constructor(e,i,n,s,y,A){this.coursesRestService=e,this.subscriptionRestService=i,this.reportsService=n,this.loadingService=s,this.gradingScalesRestService=y,this.settings=A,this.studentId$=new oe(1),this.initialStudentCourses$=this.studentId$.pipe(qe(),C(this.loadCourses.bind(this)),m(g=>g.sort((h,X)=>h.Designation.localeCompare(X.Designation))),Ee(1)),this.action$=new oe(1),this.studentCourses$=Le(this.action$,this.initialStudentCourses$.pipe(m(g=>({type:"initializeCourses",payload:g})))).pipe(Ke(this.coursesReducer.bind(this),[]),Ee(1)),this.loading$=this.loadingService.loading$,this.studentCourseIds$=this.studentCourses$.pipe(m(g=>g.flatMap(h=>h.Id))),this.subscriptionIds$=de([this.studentId$,this.studentCourseIds$]).pipe(C(([g,h])=>this.subscriptionRestService.getSubscriptionIdsByStudentAndCourse(g,h))),this.testReports$=this.subscriptionIds$.pipe(m(g=>this.reportsService.getTeacherSubscriptionGradesReports(g))),this.tests$=this.studentCourses$.pipe(m(g=>g.flatMap(h=>h.Tests).filter(ve))),this.gradingScaleIdsFromTests$=this.tests$.pipe(m(g=>[...g.map(h=>h.GradingScaleId)].filter(ve).filter(Ce))),this.gradingScaleIdsFromCourses$=this.studentCourses$.pipe(m(g=>g.flatMap(h=>h.GradingScaleId).filter(ve).filter(Ce))),this.gradingScaleIds$=de([this.gradingScaleIdsFromCourses$,this.gradingScaleIdsFromTests$]).pipe(m(([g,h])=>g.concat(h).filter(Ce))),this.gradingScales$=this.gradingScaleIds$.pipe(C(g=>me(g.map(h=>this.gradingScalesRestService.getGradingScale(h)))))}setStudentId(e){this.studentId$.next(e)}getFinalGradeForStudent(e,i){return e?.FinalGrades?.find(n=>n.StudentId===i)}getGradingForStudent(e,i){return e?.Gradings?.find(n=>n.StudentId===i)}getGradingScaleOfCourse(e,i){return i?.find(n=>n.Id===e.GradingScaleId)}getGradesForStudent(e,i,n){return e.Tests?.flatMap(s=>({value:Number(ye(s,n)?.Grades.find(A=>A.Id===z(i,s)?.GradeId)?.Designation),weight:s.Weight})).filter(({value:s})=>!!s)||[]}updateStudentCourses(e){this.action$.next({type:"updateCourses",payload:e})}loadCourses(e){return this.loadingService.load(this.coursesRestService.getExpandedCoursesForDossier().pipe(m(i=>i.filter(n=>n.ParticipatingStudents?.find(s=>s.Id===e)))))}coursesReducer(e,i){switch(i.type){case"initializeCourses":return i.payload;case"updateCourses":return this.updateCourses([...e],i.payload);default:return e}}updateCourses(e,i){return e.map(n=>F(O({},n),{Tests:n.Tests!==null?n.Tests.map(s=>s.Id===i.Id?i:s):null}))}static{this.\u0275fac=function(i){return new(i||t)(x(xe),x(Vt),x(wt),x(Gt),x(Nt),x(W))}}static{this.\u0275prov=R({token:t,factory:t.\u0275fac})}}return t})();var Ut=(()=>{class t{constructor(){}get inIframe(){return window.parent!==window}get window(){return this.inIframe?window.parent:null}get document(){return this.window?.document.documentElement??null}querySelector(e){return this.window?.document?.querySelector("bkd-portal")?.shadowRoot?.querySelector(e)??null}getIframeElement(){return this.querySelector("bkd-content")?.shadowRoot?.querySelector("iframe")??null}getIframeTop(){return this.getIframeElement()?.offsetTop??0}getIFrameBottom(){let e=this.getIframeElement();return e?e.offsetTop+e.offsetHeight:0}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Lt=(()=>{class t{constructor(e,i){this.modal=e,this.portal=i}open(...e){let i=this.modal.open(...e);return this.applyPortalOffsetAndMaxHeight(i),this.disablePortalScrolling(i),i}get activeInstances(){return this.modal.activeInstances}dismissAll(...e){return this.modal.dismissAll(...e)}hasOpenModals(...e){return this.modal.hasOpenModals(...e)}applyPortalOffsetAndMaxHeight(e){let i=this.getModalWindowElement(e);if(!i){console.warn("Trying to apply portal offset to <ngb-modal-window>, but element is not present!");return}this.portal.window&&(i.style.top=`${this.getModalIframeOffset()}px`,i.style.maxHeight=`${this.getModalHeight()}px`)}disablePortalScrolling(e){if(this.portal.window&&this.portal.document){let i=this.portal.window.innerWidth-this.portal.document.clientWidth;this.portal.document.style.paddingRight=`${i}px`,this.portal.document.style.overflow="hidden"}e.hidden.subscribe(()=>{this.portal.document&&(this.portal.document.style.paddingRight="0px",this.portal.document.style.overflow="auto")})}getModalWindowElement(e){return e._windowCmptRef?.instance?._elRef?.nativeElement??null}getModalIframeOffset(){return Math.max(this.getViewportTop()-this.portal.getIframeTop(),0)}getModalTop(){return Math.max(this.getViewportTop(),this.portal.getIframeTop())}getModalBottom(){return Math.min(this.getViewportBottom(),this.portal.getIFrameBottom())}getModalHeight(){return this.getModalBottom()-this.getModalTop()}getViewportTop(){return this.portal.window?.scrollY??0}getViewportBottom(){return this.getViewportTop()+this.getViewportHeight()}getViewportHeight(){return this.portal.window?.innerHeight??0}static{this.\u0275fac=function(i){return new(i||t)(x(Ct),x(Ut))}}static{this.\u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function _e(t,r,e){return r?r.Grade:xi(t,e)||t?.GradeValue}function xi(t,r){return r?.Grades.find(e=>e.Id===t?.GradeId)?.Designation}var yi="1-3",qt="\u2013",Kt=(()=>{class t{constructor(e){this.locale=e}transform(e,i,n){let s=Number(e??null);return isNaN(s)?qt:Ti(Number(e??null),n??this.locale,i)}static{this.\u0275fac=function(i){return new(i||t)(P(Ye,16))}}static{this.\u0275pipe=Q({name:"decimalOrDash",type:t,pure:!0})}}return t})();function Ti(t,r,e){return t===0?qt:Qe(t,r,`1.${_i(e)}`)}function _i(t){return t?String(t).includes("-")?String(t):`${t}-${t}`:yi}var zt=(()=>{class t{constructor(){}getGradeForStudent(){return _e(this.grading,this.finalGrade,this.gradingScale)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=$({type:t,selectors:[["bkd-dossier-grades-final-grade"]],inputs:{finalGrade:"finalGrade",grading:"grading",gradingScale:"gradingScale",average:"average"},decls:14,vars:11,consts:[[1,"final-entry"],["data-testid","final-grade"],["data-testid","average-test-results"]],template:function(i,n){i&1&&(l(0,"div",0)(1,"div"),p(2),c(3,"translate"),d(),l(4,"div",1)(5,"span"),p(6),d()(),l(7,"div"),p(8),c(9,"translate"),d(),l(10,"div",2)(11,"span"),p(12),c(13,"decimalOrDash"),d()()()),i&2&&(a(2),D(f(3,4,"dossier.grade")),a(4),D(n.getGradeForStudent()||"\u2013"),a(2),D(f(9,6,"dossier.average")),a(4),D(L(13,8,n.average,"1-3")))},dependencies:[M,Kt],styles:[".final-entry[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-columns:repeat(2,1fr)}span[_ngcontent-%COMP%]{margin-left:2em}"]})}}return t})();var Xt=(()=>{class t{constructor(e){this.translate=e}transform(e,i,n,s="tests.points"){return e.IsPointGrading&&(e.IsPublished||n)?`${z(i,e)?.Points||"\u2013"} / ${e.MaxPointsAdjusted||e.MaxPoints} ${this.translate.instant(s)}`:""}static{this.\u0275fac=function(i){return new(i||t)(P(be,16))}}static{this.\u0275pipe=Q({name:"bkdTestPoints",type:t,pure:!0})}}return t})();var Jt=(()=>{class t{constructor(e){this.translate=e}transform(e){return`${this.translate.instant("tests.factor")} ${e.Weight} (${e.WeightPercent}%)`}static{this.\u0275fac=function(i){return new(i||t)(P(be,16))}}static{this.\u0275pipe=Q({name:"bkdTestWeight",type:t,pure:!0})}}return t})();var wi=t=>({maxPoints:t});function Ei(t,r){if(t&1&&(l(0,"div",13),p(1),c(2,"translate"),d()),t&2){let e=I(2);a(),b(" ",L(2,1,"global.validation-errors.invalidPoints",fe(4,wi,e.maxPoints))," ")}}function Pi(t,r){if(t&1){let e=ie();l(0,"div",3)(1,"label",11),p(2),c(3,"translate"),d(),l(4,"div",6)(5,"input",12,0),k("input",function(){J(e);let n=le(6),s=I();return Y(s.onPointsChange(n.value))}),d()(),T(7,Ei,3,6,"div",13),d()}if(t&2){let e=I();a(2),D(f(3,8,"dossier.dialog.points")),a(2),$e("is-invalid",e.pointsInput.errors),a(),$e("is-invalid",e.pointsInput.errors),ge("max",e.maxPoints),G("formControl",e.pointsInput),a(2),_(e.pointsInput.errors?7:-1)}}var Yt=500,Qt=(()=>{class t{constructor(e,i){this.activeModal=e,this.courseService=i,this.maxPoints=0,this.gradeSubject$=new ue,this.pointsSubject$=new ue,this.closeButtonDisabled$=new B(!1),this.gradingScaleDisabled$=new B(!0),this.grade$=this.gradeSubject$.pipe(we(Yt)),this.points$=this.pointsSubject$.pipe(we(Yt),We(this.isValid.bind(this)),m(Number)),this.destroy$=new ue}ngOnInit(){this.maxPoints=Ae(this.test),this.pointsInput=new st({value:this.points,disabled:!1},[Re.min(0),Re.pattern("[0-9]+([\\.][0-9]+)?"),this.maxPointValidator()]),this.gradingScaleDisabled$.next(this.test.IsPointGrading&&this.points>0),this.points$.pipe(Pe(this.destroy$)).subscribe(e=>this.updateTestResult({studentId:this.studentId,testId:this.test.Id,points:e})),this.grade$.pipe(Pe(this.destroy$)).subscribe(e=>this.updateTestResult({studentId:this.studentId,testId:this.test.Id,gradeId:e}))}onGradeChange(e){this.gradeSubject$.next(e)}onPointsChange(e){this.pointsSubject$.next(e),this.gradingScaleDisabled$.next(e.length>0)}updateTestResult(e){this.closeButtonDisabled$.next(!0),this.courseService.updateTestResult(this.test.CourseId,e).subscribe(({testResult:i})=>{this.gradeId=i?.GradeId??null,this.updatedTestResult=i,this.closeButtonDisabled$.next(!1)})}isValid(e){return e===""||isNaN(Number(e))?!1:!(Number(e)<0||Number(e)>this.maxPoints)}maxPointValidator(){return e=>Number(e.value)>Ae(this.test)?{customMax:!0}:null}static{this.\u0275fac=function(i){return new(i||t)(P(vt),P(xe))}}static{this.\u0275cmp=$({type:t,selectors:[["bkd-dossier-grades-edit"]],inputs:{test:"test",gradeId:"gradeId",gradeOptions:"gradeOptions",points:"points",studentId:"studentId"},decls:19,vars:20,consts:[["pointInput",""],[1,"modal-body"],[1,"mb-4"],[1,"form-group","row"],[1,"form-group","row","mt-2"],["for","grade",1,"col-6","col-form-label"],[1,"col-6"],["id","grade",3,"valueChange","options","value","allowEmpty","disabled"],[1,"text-muted","mt-4"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click","disabled"],["for","points",1,"col-6","col-form-label"],["id","points","type","number","step","0.01","min","0",1,"form-control",3,"input","max","formControl"],["data-testid","validation-error-message",1,"invalid-feedback","col-6","offset-6"]],template:function(i,n){i&1&&(l(0,"div",1)(1,"p",2),p(2),d(),T(3,Pi,8,10,"div",3),l(4,"div",4)(5,"label",5),p(6),c(7,"translate"),d(),l(8,"div",6)(9,"bkd-select",7),c(10,"async"),k("valueChange",function(y){return y&&n.onGradeChange(y)}),d()()(),l(11,"p",8),p(12),c(13,"translate"),d()(),l(14,"div",9)(15,"button",10),c(16,"async"),k("click",function(){return n.activeModal.close(n.updatedTestResult)}),p(17),c(18,"translate"),d()()),i&2&&(a(2),D(n.test.Designation),a(),_(n.test.IsPointGrading?3:-1),a(3),D(f(7,10,"dossier.dialog.grade")),a(3),G("options",n.gradeOptions)("value",n.gradeId)("allowEmpty",!1)("disabled",f(10,12,n.gradingScaleDisabled$)),a(3),b(" ",f(13,14,n.test.IsPointGrading?"dossier.dialog.hint.points":"dossier.dialog.hint.grade")," "),a(3),G("disabled",f(16,16,n.closeButtonDisabled$)),a(2),b(" ",f(18,18,"dossier.dialog.close")," "))},dependencies:[Se,rt,ot,Ie,mt,ut,gt,dt,Et,V,M],encapsulation:2})}}return t})();function $i(t,r){if(t&1){let e=ie();l(0,"a",10),k("click",function(){J(e);let n=I(2),s=U(0);return Y(n.editGrading(s))}),l(1,"i",11),p(2,"edit"),d(),l(3,"span",5),p(4),d()()}if(t&2){I(2);let e=U(2);a(4),D(e)}}function Di(t,r){if(t&1&&(l(0,"span",5),p(1),d()),t&2){I(2);let e=U(2);a(),D(e)}}function Ri(t,r){if(t&1&&(l(0,"div",9),p(1),c(2,"translate"),d()),t&2){I(2);let e=U(0);a(),b(" ",f(2,1,e.IsPublished?"tests.published":"tests.not-published")," ")}}function Mi(t,r){if(t&1&&(l(0,"div",0)(1,"div",1),p(2),d(),l(3,"div",2),p(4),c(5,"date"),d(),l(6,"div",3),T(7,$i,5,1,"a",4)(8,Di,2,1,"span",5),d(),l(9,"div",6),p(10),c(11,"bkdTestWeight"),d(),l(12,"div",7)(13,"span"),p(14),c(15,"bkdTestPoints"),d()(),l(16,"div",8),p(17),d(),T(18,Ri,3,3,"div",9),d()),t&2){let e=I(),i=U(0);a(2),b(" ",i.Designation," "),a(2),b(" ",L(5,7,i.Date,"dd.MM.yyyy")," "),a(3),_(e.isEditable&&i.IsOwner?7:8),a(3),b(" ",f(11,10,i)," "),a(4),D(Je(15,12,i,e.studentId,e.isEditable,"dossier.points")),a(3),b(" ",i.Owner," "),a(),_(e.isEditable?18:-1)}}var Zt=(()=>{class t{constructor(e,i){this.gradeService=e,this.modalService=i,this.test$=new oe(1),this.grading$=this.test$.pipe(m(this.getGrading.bind(this)))}ngOnChanges(e){e.test&&this.test$.next(this.test)}editGrading(e){let i=this.modalService.open(Qt,{backdrop:"static"});i.componentInstance.test=e,i.componentInstance.gradeId=this.getGradeId(e),i.componentInstance.gradeOptions=t.mapToOptions(this.gradingScale),i.componentInstance.studentId=this.studentId,i.componentInstance.points=this.getPoints(e),i.result.then(n=>{n&&this.updateStudentGrade(n,e)},()=>{})}updateStudentGrade(e,i){let n=Be(e,i);this.gradeService.updateStudentCourses(n)}getGrading(e){return this.gradingScale?.Grades.find(i=>i.Id===this.getGradeId(e))?.Designation||"\u2013"}getGradeId(e){return z(this.studentId,e)?.GradeId||null}getPoints(e){return z(this.studentId,e)?.Points||null}static mapToOptions(e){return e?.Grades.map(i=>({Key:i.Id,Value:i.Designation}))||null}static{this.\u0275fac=function(i){return new(i||t)(P(Te),P(Lt))}}static{this.\u0275cmp=$({type:t,selectors:[["bkd-dossier-single-test"]],inputs:{test:"test",studentId:"studentId",gradingScale:"gradingScale",isEditable:"isEditable"},features:[H],decls:5,vars:7,consts:[[1,"test-entry"],["data-testid","test-designation",1,"designation"],["data-testid","test-date",1,"date"],[1,"grade"],["aria-label","edit grade",1,"btn","btn-link"],["data-testid","test-grade"],["data-testid","test-factor",1,"factor"],["data-testid","test-points",1,"points"],["data-testid","test-teacher",1,"teacher"],["data-testid","test-status",1,"state"],["aria-label","edit grade",1,"btn","btn-link",3,"click"],["data-testid","test-grade-edit-icon",1,"material-icons"]],template:function(i,n){if(i&1&&(pe(0),c(1,"async"),pe(2),c(3,"async"),T(4,Mi,19,17,"div",0)),i&2){let s=ce(f(1,1,n.test$));a(2),ce(f(3,4,n.grading$)),a(2),_(s?4:-1)}},dependencies:[V,et,M,Xt,Jt],styles:['.test-entry[_ngcontent-%COMP%]{border-top:1px solid #dee2e6;padding:1rem;display:grid;grid-template-areas:"designation designation grade factor" "date date points ." "teacher teacher . ." "state state . .";grid-template-columns:repeat(4,1fr)}span[_ngcontent-%COMP%]{margin-left:2em}.designation[_ngcontent-%COMP%]{grid-area:designation}.date[_ngcontent-%COMP%]{grid-area:date}.grade[_ngcontent-%COMP%]{grid-area:grade}.grade[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;color:#000;padding:0;text-decoration:none}.grade[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-decoration:underline}.grade[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{text-decoration-color:#ea161f}.grade[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:-1em;color:#00000080}.points[_ngcontent-%COMP%]{grid-area:points;color:#00000080}.teacher[_ngcontent-%COMP%]{grid-area:teacher}.state[_ngcontent-%COMP%]{grid-area:state}@media (max-width: 575.98px){.test-entry[_ngcontent-%COMP%]{grid-template-areas:"designation designation" "date grade" "factor points" "teacher teacher" "state state";grid-template-columns:repeat(2,1fr)}}']})}}return t})();var Oi=(t,r)=>r.Id,Fi=()=>[];function ji(t,r){if(t&1&&te(0,"bkd-dossier-single-test",2),t&2){let e=r.$implicit,i=I(2);G("test",e)("studentId",i.studentId)("gradingScale",i.getGradingScaleOfTest(e))("isEditable",i.isEditable)}}function Ai(t,r){if(t&1&&(l(0,"div"),te(1,"bkd-dossier-grades-final-grade",1),Z(2,ji,1,4,"bkd-dossier-single-test",2,Oi),d()),t&2){let e=I(),i=U(0);a(),G("finalGrade",e.decoratedCourse.finalGrade)("grading",e.decoratedCourse.grading)("gradingScale",e.decoratedCourse.gradingScale)("average",e.decoratedCourse.average),a(),ee(i)}}function Bi(t,r){t&1&&(l(0,"p",0),p(1),c(2,"translate"),d()),t&2&&(a(),b(" ",f(2,1,"dossier.no-tests")," "))}var ei=(()=>{class t{ngOnChanges(e){e.decoratedCourse&&this.sortedTests$.next(this.sortedTests())}constructor(){this.sortedTests$=new B([])}sortedTests(){return this.decoratedCourse.course.Tests?kt(this.decoratedCourse.course.Tests):[]}getGradingScaleOfTest(e){return ye(e,this.gradingScales)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=$({type:t,selectors:[["bkd-dossier-course-tests"]],inputs:{studentId:"studentId",decoratedCourse:"decoratedCourse",gradingScales:"gradingScales",isEditable:"isEditable"},features:[H],decls:4,vars:5,consts:[["data-testid","message-no-tests",1,"p-3"],[3,"finalGrade","grading","gradingScale","average"],[3,"test","studentId","gradingScale","isEditable"]],template:function(i,n){if(i&1&&(pe(0),c(1,"async"),T(2,Ai,4,4,"div")(3,Bi,3,3,"p",0)),i&2){let s,y=ce((s=f(1,1,n.sortedTests$))!==null&&s!==void 0?s:Xe(4,Fi));a(2),_(y.length>0?2:3)}},dependencies:[zt,Zt,V,M],encapsulation:2})}}return t})();function ki(t,r){if(t&1&&(l(0,"span",0),p(1),d()),t&2){let e=I();a(),b(" (",e.grade,")")}}function Vi(t,r){if(t&1&&(l(0,"span",1),p(1),c(2,"number"),d()),t&2){let e=I();a(),b(" (",L(2,1,e.average,"1.1-3"),")")}}var ti=(()=>{class t{constructor(){}get grade(){return this.getGradeForStudent()}getGradeForStudent(){return _e(this.grading,this.finalGrade,this.gradingScale)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=$({type:t,selectors:[["bkd-dossier-grades-course-header"]],inputs:{designation:"designation",finalGrade:"finalGrade",grading:"grading",gradingScale:"gradingScale",average:"average"},decls:3,vars:3,consts:[["data-testId","grade",1,"grade"],["data-testId","average",1,"average"]],template:function(i,n){i&1&&(p(0),T(1,ki,2,1,"span",0)(2,Vi,3,4,"span",1)),i&2&&(b("",n.designation,`
`),a(),_(n.grade?1:-1),a(),_(!n.grade&&n.average?2:-1))},dependencies:[tt],styles:[".average[_ngcontent-%COMP%]{color:#00000080}"]})}}return t})();var Ni=(t,r)=>r.course.Id;function Hi(t,r){if(t&1&&te(0,"bkd-dossier-course-tests",9),t&2){let e=I().$implicit,i=I(2);G("decoratedCourse",e)("studentId",i.studentId)("gradingScales",i.gradingScales)("isEditable",i.isEditable)}}function Ui(t,r){if(t&1){let e=ie();l(0,"div")(1,"div",2)(2,"div",3,0)(4,"div",4)(5,"bkd-student-dossier-entry-header",5),k("click",function(){J(e);let n=le(3);return Y(n.toggle())}),te(6,"bkd-dossier-grades-course-header",6),d()(),l(7,"div",7)(8,"div",8),T(9,Hi,1,4,"ng-template"),d()()()()()}if(t&2){let e=r.$implicit,i=le(3);a(5),G("opened",!i.collapsed),a(),G("designation",e.course.Designation)("finalGrade",e.finalGrade)("grading",e.grading)("gradingScale",e.gradingScale)("average",e.average)}}function Li(t,r){if(t&1&&(Z(0,Ui,10,6,"div",null,Ni),c(2,"async")),t&2){let e=I();ee(f(2,0,e.decoratedCoursesSubject$))}}function Wi(t,r){t&1&&(l(0,"p",1),p(1),c(2,"translate"),d()),t&2&&(a(),b(" ",f(2,1,"dossier.no-courses")," "))}var qr=(()=>{class t{constructor(e){this.dossierGradesService=e,this.isEditable=!0,this.decoratedCoursesSubject$=new B([])}ngOnChanges(){this.decoratedCoursesSubject$.next(this.decorateCourses())}decorateCourses(){return this.courses.map(e=>{let i=this.dossierGradesService.getFinalGradeForStudent(e,this.studentId),n=this.dossierGradesService.getGradesForStudent(e,this.studentId,this.gradingScales);return{course:e,finalGrade:i,grading:this.dossierGradesService.getGradingForStudent(e,this.studentId),gradingScale:this.dossierGradesService.getGradingScaleOfCourse(e,this.gradingScales),average:i?.AverageTestResult||At(n)}})}static{this.\u0275fac=function(i){return new(i||t)(P(Te))}}static{this.\u0275cmp=$({type:t,selectors:[["bkd-dossier-grades-view"]],inputs:{courses:"courses",studentId:"studentId",gradingScales:"gradingScales",isEditable:"isEditable"},features:[H],decls:2,vars:1,consts:[["courses","ngbAccordionItem"],["data-testid","message-no-courses",1,"py-3"],["ngbAccordion",""],["ngbAccordionItem",""],["ngbAccordionHeader",""],[3,"click","opened"],[3,"designation","finalGrade","grading","gradingScale","average"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[3,"decoratedCourse","studentId","gradingScales","isEditable"]],template:function(i,n){i&1&&T(0,Li,3,2)(1,Wi,3,3,"p",1),i&2&&_(n.courses.length>0?0:1)},dependencies:[bt,St,It,Tt,ti,ht,ft,ei,V,M],encapsulation:2})}}return t})();export{je as a,xn as b,yn as c,Tn as d,_n as e,Gn as f,wn as g,En as h,kt as i,qt as j,Kt as k,Ti as l,Et as m,Pt as n,Oe as o,xe as p,Mn as q,Vt as r,Nt as s,Te as t,Ut as u,Lt as v,qr as w};
