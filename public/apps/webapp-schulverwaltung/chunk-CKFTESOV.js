import{a as it}from"./chunk-DTTSX64G.js";import{a as J}from"./chunk-Y4QYVF5K.js";import{B as st,C as rt,b as Qe,c as Ze,s as et,x as tt}from"./chunk-UYCIECIQ.js";import{a as ce,b as N,c as Je,d as ot}from"./chunk-G6EB45SC.js";import{e as pe,o as E}from"./chunk-WCDEMEW2.js";import{h as Ye}from"./chunk-XFA6UPZX.js";import{a as nt}from"./chunk-PSYDBHTH.js";import{w as _}from"./chunk-W4U7QKJF.js";import{a as Ke}from"./chunk-AVBHFGIF.js";import{$a as m,$c as je,Ab as w,Ad as Fe,Bb as H,Bd as He,Cb as K,Eb as $e,F as L,Fb as Ie,Ga as Ce,Hc as d,Ic as g,J as ge,Jb as a,Jc as Be,Kb as c,Lb as q,M as ie,Md as S,Na as j,Nc as v,Od as qe,P as l,Pd as We,Qa as C,R as M,Ra as Re,Rd as ze,Uc as I,Va as P,X as ve,Xa as re,Xc as u,Ya as G,Yc as W,Z as Se,Za as X,_ as O,_a as p,_c as k,a as V,ab as F,ad as ae,b as U,cc as _e,cd as z,ea as ne,eb as Te,f as ye,fa as se,fd as Pe,g as ee,gb as oe,gc as xe,hb as x,hc as $,hd as we,id as Ne,jd as Ve,l as te,lc as Ee,n as y,nd as Ue,o as D,pd as Me,rb as f,rd as Oe,s as be,sb as Le,sd as Ge,tb as b,wc as Ae,x as T,xa as o,ya as h,yc as De,zc as ke,zd as Xe}from"./chunk-2W7IS4PN.js";function de(i,r){return i.pipe(y(e=>e.find(t=>t.Key===r)||null))}function _t(i){return i.slice().sort((r,e)=>r.Value.localeCompare(e.Value))}var at=new Se("Confirm Absences Service");function ct(i,r,e){let[t,n]=Ye(e?.in,i,r);return+pe(t)==+pe(n)}var ht=(i,r)=>r.Id,yt=i=>({count:i}),bt=()=>["/edit-absences"];function gt(i,r){if(i&1&&(p(0,"div",4),f(1),a(2,"translate"),m()),i&2){let e=r.$implicit;o(),b(" ",q(2,1,"global.validation-errors."+e.error,e.params)," ")}}function vt(i,r){if(i&1&&(p(0,"div",21),f(1),a(2,"translate"),m()),i&2){let e=r.$implicit;o(),b(" ",q(2,1,"global.validation-errors."+e.error,e.params)," ")}}function St(i,r){if(i&1&&(G(0,vt,3,4,"div",21,re),a(2,"async")),i&2){let e=x(4);X(c(2,0,e.absenceTypeIdErrors$))}}function Ct(i,r){if(i&1&&(p(0,"div",16),F(1,"input",19),a(2,"async"),p(3,"label",20),f(4),m(),j(5,St,3,2),a(6,"async"),m()),i&2){let e,t,n=r.$implicit,s=r.$index,R=x(3);o(),Re("is-invalid",((e=(e=c(2,7,R.absenceTypeIdErrors$))==null?null:e.length)!==null&&e!==void 0?e:0)>0),C("id","absence-type-"+s)("value",n.Id),o(2),C("for","absence-type-"+s),o(),b(" ",n.Designation," "),o(),P(((t=(t=c(6,9,R.absenceTypes$))==null?null:t.length)!==null&&t!==void 0?t:0)-1===s?5:-1)}}function Rt(i,r){if(i&1&&(G(0,Ct,7,11,"div",16,ht),a(2,"async"),p(3,"div",17),f(4),a(5,"translate"),p(6,"a",18),f(7),a(8,"translate"),m()()),i&2){let e=x(2);X(c(2,3,e.absenceTypes$)),o(4),b(" ",c(5,5,"open-absences.edit.remark")," "),o(2),C("routerLink",$e(9,bt)),o(),b(" ",c(8,7,"edit-absences.title")," ")}}function Tt(i,r){i&1&&(p(0,"div",15)(1,"span",22),f(2,"Loading..."),m()())}function Lt(i,r){if(i&1){let e=Te();p(0,"form",3),oe("ngSubmit",function(){ne(e);let n=x();return se(n.onSubmit())}),G(1,gt,3,4,"div",4,re),a(3,"async"),p(4,"div",5)(5,"div",6),F(6,"input",7),p(7,"label",8),f(8),m(),j(9,Rt,9,10),m(),p(10,"div",9),F(11,"input",10),p(12,"label",11),f(13),m()()(),p(14,"div",12)(15,"button",13),a(16,"async"),oe("click",function(){ne(e);let n=x();return se(n.cancel())}),f(17),a(18,"translate"),m(),p(19,"button",14),a(20,"async"),f(21),a(22,"translate"),j(23,Tt,3,0,"div",15),a(24,"async"),m()()()}if(i&2){let e=x(),t=K(0),n=K(2),s=K(4);C("formGroup",t),o(),X(c(3,11,e.formErrors$)),o(5),C("value",s.Key),o(2),b(" ",s.Value," "),o(),P(t.get("absenceTypeId")?9:-1),o(2),C("value",n.Key),o(2),b(" ",n.Value," "),o(2),C("disabled",c(16,13,e.saving$)),o(2),b(" ",c(18,15,"open-absences.edit.cancel")," "),o(2),C("disabled",c(20,17,e.saving$)),o(2),b(" ",c(22,19,"open-absences.edit.save")," "),o(2),P(c(24,21,e.saving$)?23:-1)}}var Zt=(()=>{class i{constructor(e,t,n,s,R,B,A,dt,mt,lt,ft){this.fb=e,this.router=t,this.activatedRoute=n,this.toastService=s,this.translate=R,this.selectionService=B,this.dropDownItemsService=A,this.presenceTypesService=dt,this.updateService=mt,this.settings=lt,this.openAbsencesEditService=ft,this.formGroup$=this.selectionService.selectedWithoutPresenceType$.pipe(y(this.createFormGroup.bind(this)),ie(1)),this.saving$=new ee(!1),this.submitted$=new ee(!1),this.formErrors$=ce(this.formGroup$,this.submitted$),this.absenceTypeIdErrors$=ce(this.formGroup$,this.submitted$,"absenceTypeId"),this.confirmationStates$=this.dropDownItemsService.getAbsenceConfirmationStates().pipe(ie(1)),this.excusedState$=de(this.confirmationStates$,this.settings.excusedAbsenceStateId),this.unexcusedState$=de(this.confirmationStates$,this.settings.unexcusedAbsenceStateId),this.absenceTypes$=this.presenceTypesService.confirmationTypes$,this.destroy$=new ye}ngOnInit(){this.selectionService.selectedIds$.pipe(L(1)).subscribe(e=>{e.length===0&&this.navigateBack()}),Je(this.formGroup$,"confirmationValue").pipe(M(this.destroy$)).subscribe(e=>{typeof e=="number"&&this.updateAbsenceTypeIdDisabled(e)}),D([N(this.formGroup$,"confirmationValue").pipe(T(_)),N(this.formGroup$,"absenceTypeId").pipe(T(_)),this.saving$]).pipe(M(this.destroy$)).subscribe(([e,t,n])=>{n?(e.disable(),t.disable()):(e.enable(),this.updateAbsenceTypeIdDisabled(e.value))}),D([N(this.formGroup$,"confirmationValue").pipe(T(_)),this.excusedState$.pipe(L(1),T(_))]).pipe(M(this.destroy$)).subscribe(([e,t])=>e.setValue(t.Key))}ngOnDestroy(){this.destroy$.next()}onSubmit(){this.submitted$.next(!0),this.formGroup$.pipe(L(1)).subscribe(e=>{if(e.valid){let{confirmationValue:t,absenceTypeId:n}=e.value;this.save(t,n)}})}cancel(){this.navigateBack()}getSelectedCount(){return this.selectionService.selectedLessons$.pipe(y(e=>e.length))}createFormGroup(e){return e.length>0?this.fb.group({confirmationValue:[null],absenceTypeId:[null,we.required]}):this.fb.group({confirmationValue:[null]})}updateAbsenceTypeIdDisabled(e){D([N(this.formGroup$,"absenceTypeId").pipe(L(1),T(_)),this.excusedState$.pipe(L(1),T(_))]).subscribe(([t,n])=>{e===n.Key?t.enable():t.disable()})}save(e,t){this.saving$.next(!0),D([this.selectionService.selectedIds$.pipe(L(1)),this.unexcusedState$.pipe(L(1),T(_))]).pipe(l(([n,s])=>D(n.map(({lessonIds:R,personId:B,presenceTypeId:A})=>this.updateService.confirmLessonPresences(R,[B],this.getNewAbsenceTypeId(A,e,Number(s.Key),t),e)))),ge(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}getNewAbsenceTypeId(e,t,n,s){if(!e)throw new Error("absence type id cannot be null");return t===n?this.settings.absencePresenceTypeId:e===this.settings.absencePresenceTypeId?s:e}onSaveSuccess(){this.openAbsencesEditService?.updateAfterConfirm&&this.openAbsencesEditService.updateAfterConfirm(),this.toastService.success(this.translate.instant("open-absences.edit.save-success")),this.navigateBack()}navigateBack(){this.router.navigate(this.openAbsencesEditService?.confirmBackLink||[".."],{relativeTo:this.activatedRoute,queryParams:this.openAbsencesEditService?.confirmBackLinkParams})}static{this.\u0275fac=function(t){return new(t||i)(h(Xe),h(De),h(Ae),h(Ke),h(qe),h(tt),h(it),h(st),h(rt),h(z),h(at,8))}}static{this.\u0275cmp=Ce({type:i,selectors:[["bkd-confirm-absences"]],decls:16,vars:21,consts:[[1,"bkd-container","bkd-container-limited"],[1,"mb-3","pb-3","border-bottom"],[3,"formGroup"],[3,"ngSubmit","formGroup"],[1,"alert","alert-danger"],[1,"form-group","pb-4"],[1,"form-check","mt-2","mb-3","pb-3","border-bottom"],["type","radio","id","excused","formControlName","confirmationValue",1,"form-check-input",3,"value"],["for","excused",1,"form-check-label"],[1,"form-check","mt-3","mb-3","pb-3","border-bottom"],["type","radio","id","unexcused","formControlName","confirmationValue",1,"form-check-input",3,"value"],["for","unexcused",1,"form-check-label"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],["type","submit",1,"btn","btn-primary","ms-2",3,"disabled"],["role","status",1,"spinner-border","spinner-border-sm","align-middle"],[1,"form-check","my-3"],[1,"remark"],[3,"routerLink"],["type","radio","formControlName","absenceTypeId",1,"form-check-input",3,"id","value"],[1,"form-check-label",3,"for"],[1,"invalid-feedback"],[1,"visually-hidden"]],template:function(t,n){if(t&1&&(w(0),a(1,"async"),w(2),a(3,"async"),w(4),a(5,"async"),p(6,"div",0)(7,"h1"),f(8),a(9,"translate"),m(),p(10,"div",1),w(11),a(12,"async"),f(13),a(14,"translate"),m(),j(15,Lt,25,23,"form",2),m()),t&2){let s=H(c(1,3,n.formGroup$));o(2);let R=H(c(3,6,n.unexcusedState$));o(2);let B=H(c(5,9,n.excusedState$));o(4),Le(c(9,12,"open-absences.edit.title"));let A=c(12,14,n.getSelectedCount());o(5),b(" ",q(14,16,A===1?"open-absences.edit.lesson-selected":"open-absences.edit.lessons-selected",Ie(19,yt,A))," "),o(2),P(s&&R&&B?15:-1)}},dependencies:[Fe,Ue,Pe,Me,Ne,Ve,He,Oe,Ge,ke,_e,We],encapsulation:2,changeDetection:0})}}return i})();var pt=v({StudentRef:u,StudentFullName:d,TotalAbsences:g,TotalAbsencesUnconfirmed:g,TotalAbsencesValidExcuse:g,TotalAbsencesWithoutExcuse:g,TotalAbsencesUnchecked:g,TotalDispensations:g,TotalHalfDays:g,TotalIncidents:g});var me=v({Id:d,LessonRef:u,StudentRef:u,EventRef:u,TypeRef:W,RegistrationRef:W,StudyClassRef:W,ConfirmationStateId:I(g),EventDesignation:d,HasStudyCourseConfirmationCode:Be,LessonDateTimeFrom:k,LessonDateTimeTo:k,Comment:I(d),Date:I(je),Type:I(d),StudentFullName:d,StudyClassNumber:d,TeacherInformation:I(d)});var Y=v({LessonRef:u,EventRef:u,StudyClassNumber:d,StudentRef:u});var le=v({LessonRef:u,EventRef:u,EventDesignation:d,StudyClassNumber:d,TeacherInformation:I(d),LessonDateTimeFrom:k,LessonDateTimeTo:k});function fe(i){return r=>r.pipe(l(e=>{let t=Number(e.headers.get("X-Pagination-Offset")),n=Number(e.headers.get("X-Pagination-Total"));return S(i)(e.body).pipe(y(s=>({offset:t,total:n,entries:s})))}))}function Z(i,r,e=new $){return e.set("offset",String(i)).set("limit",String(r))}function ue(i=new xe){return i.set("X-Pagination-Total","on")}var Di=(()=>{class i extends nt{constructor(e,t,n){super(e,t,me,"LessonPresences"),this.storage=n,this.lessonPresenceRefCodec=v(ae(this.codec.props,["LessonRef","RegistrationRef","StudentRef","EventRef","StudyClassRef","TypeRef"])),this.lessonPresenceIdCodec=v(ae(this.codec.props,["Id"]))}getLessonsByDate(e){let t={fields:Object.keys(le.props).join(","),"filter.LessonDateTimeFrom":`=${E(e,"yyyy-MM-dd")}`,sort:"LessonDateTimeFrom"},n={"X-Role-Restriction":"LessonTeacherRole"};return this.http.get(`${this.baseUrl}/`,{params:t,headers:n}).pipe(l(S(le)))}getLessonStudyClassesByDate(e){let t={fields:Object.keys(Y.props).join(","),"filter.LessonDateTimeFrom":`=${E(e,"yyyy-MM-dd")}`,sort:"LessonDateTimeFrom"},n={"X-Role-Restriction":"LessonTeacherRole"};return this.http.get(`${this.baseUrl}/`,{params:t,headers:n}).pipe(l(S(Y)))}getLessonStudyClassesByEvent(e){let t={"filter.EventRef":`=${e}`,sort:"LessonDateTimeFrom"},n={"X-Role-Restriction":"LessonTeacherRole"};return this.http.get(`${this.baseUrl}/`,{params:t,headers:n}).pipe(l(S(Y)))}getListByLessons(e){if(e.length===0)return te([]);let n={"filter.LessonRef":`;${e.map(s=>s.LessonRef.Id).join(";")}`};return this.getList({params:n,headers:{"X-Role-Restriction":"LessonTeacherRole"}})}getListByDateStudentClass(e,t,n){let s={"filter.LessonDateTimeFrom":`=${E(e,"yyyy-MM-dd")}`,"filter.StudentRef":`=${t}`};return n!=null&&(s["filter.StudyClassRef"]=`=${n}`),this.getList({params:s,headers:{"X-Role-Restriction":"LessonTeacherRole"}})}getListForToday(){return this.http.get(`${this.baseUrl}/Today`,{headers:{"X-Role-Restriction":"LessonTeacherRole"}}).pipe(l(S(this.codec)))}getListOfUnconfirmed(e){return J(this.storage.getPayload()?.roles,"ClassTeacherRole")?be([this.getListOfUnconfirmedClassTeacher(e),this.getListOfUnconfirmedLessonTeacher(e)]).pipe(y(ot(et))):J(this.storage.getPayload()?.roles,"LessonTeacherRole")?this.getListOfUnconfirmedLessonTeacher(e):J(this.storage.getPayload()?.roles,"AbsenceAdministratorRole")?this.getListOfUnconfirmedAbsenceAdministrator(e):te([])}getStatistics(e,t,n){let s=he([[e.student,"StudentRef"],[e.educationalEvent,"EventRef"],[e.studyClass,"StudyClassRef"]]);return s=$t(t,s),s=Z(n,this.settings.paginationLimit,s),this.http.get(`${this.baseUrl}/Statistics`,{params:s,headers:ue(),observe:"response"}).pipe(fe(pt))}getLessonRefs(e){let t=he([[e.student,"StudentRef"],[e.educationalEvent,"EventRef"],[e.studyClass,"StudyClassRef"]]);return t=t.set("filter.TypeRef",">0"),t=t.set("fields",["LessonRef","RegistrationRef","StudentRef","EventRef","StudyClassRef","TypeRef"].join(",")),t=t.set("limit","1500"),this.http.get(`${this.baseUrl}/`,{params:t}).pipe(l(S(this.lessonPresenceRefCodec)))}getRegistrationRefsByEventIds(e){let t=new $;return t.set("filter.EventRef",`;${e.join(";")}`),t=t.set("fields",["LessonRef","RegistrationRef","StudentRef","EventRef","StudyClassRef","TypeRef"].join(",")),this.http.get(`${this.baseUrl}/`,{params:t}).pipe(l(S(this.lessonPresenceRefCodec)))}getFilteredList(e,t,n){let s=he([[e.student,"StudentRef"],[e.educationalEvent,"EventRef"],[e.studyClass,"StudyClassRef"]],new $({fromObject:n}));return e.teacher&&(s=s.set("filter.TeacherInformation",`~*${e.teacher}*`)),e.dateFrom&&e.dateTo&&ct(e.dateFrom,e.dateTo)?s=s.set("filter.LessonDateTimeFrom",`=${E(e.dateFrom,"yyyy-MM-dd")}`):(e.dateFrom&&(s=s.set("filter.LessonDateTimeFrom",`>${E(Ze(e.dateFrom,1),"yyyy-MM-dd")}`)),e.dateTo&&(s=s.set("filter.LessonDateTimeTo",`<${E(Qe(e.dateTo,1),"yyyy-MM-dd")}`))),e.weekdays&&(s=s.set("filter.WeekdayId",`;${e.weekdays.join(";")}`)),e.confirmationStates&&(s=s.set("filter.ConfirmationStateId",`;${e.confirmationStates.join(";")}`)),e.incidentTypes&&(s=s.set("filter.TypeRef",`;${e.incidentTypes.join(";")}`)),e.presenceTypes&&(s=s.set("filter.TypeRef",`;${e.presenceTypes.join(";")}`)),e.incidentTypes&&e.presenceTypes&&(s=s.set("filter.TypeRef",`;${e.presenceTypes.join(";")};${e.incidentTypes.join(";")}`)),this.http.get(`${this.baseUrl}/`,{params:Z(t,this.settings.paginationLimit,s),headers:ue(),observe:"response"}).pipe(fe(me))}hasLessonsLessonTeacher(){let e=new $().set("fields","Id");return this.http.get(`${this.baseUrl}/`,{params:Z(0,1,e),headers:{"X-Role-Restriction":"LessonTeacherRole"}}).pipe(l(S(this.lessonPresenceIdCodec)),y(t=>t.length>0))}checkableAbsencesCount(){return this.http.get(`${this.baseUrl}/`,{headers:{"X-Role-Restriction":"LessonTeacherRole"},params:{"filter.ConfirmationStateId":`;${this.settings.checkableAbsenceStateId}`,fields:"Id,ConfirmationStateId"}}).pipe(l(S(this.lessonPresenceIdCodec)),y(e=>e.length))}getListOfUnconfirmedLessonTeacher(e){return this.getList({headers:{"X-Role-Restriction":"LessonTeacherRole"},params:U(V({},e),{"filter.ConfirmationStateId":`=${this.settings.unconfirmedAbsenceStateId}`,"filter.HasStudyCourseConfirmationCode":"=false"})})}getListOfUnconfirmedClassTeacher(e){return this.getList({headers:{"X-Role-Restriction":"ClassTeacherRole"},params:U(V({},e),{"filter.ConfirmationStateId":`=${this.settings.unconfirmedAbsenceStateId}`,"filter.HasStudyCourseConfirmationCode":"=true"})})}getListOfUnconfirmedAbsenceAdministrator(e){return this.getList({headers:{"X-Role-Restriction":"AbsenceAdministratorRole"},params:U(V({},e),{"filter.ConfirmationStateId":`=${this.settings.unconfirmedAbsenceStateId}`})})}static{this.\u0275fac=function(t){return new(t||i)(O(Ee),O(z),O(ze))}}static{this.\u0275prov=ve({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function he(i,r=new $){return i.reduce((e,[t,n])=>t&&n?e.set(`filter.${n}`,`=${t}`):e,r)}function $t(i,r=new $){return i?r.set("sort",`${i.key}.${i.ascending?"asc":"desc"}`):r}export{_t as a,at as b,ct as c,Zt as d,Di as e};
