import{a as it}from"./chunk-MVTCHCDH.js";import{a as M}from"./chunk-Y4QYVF5K.js";import{K as et,P as tt,T as rt,U as st,c as Ye,j as ne,t as D,u as Ze}from"./chunk-GI4AZI25.js";import{a as ie,b as P,c as Je,e as ot}from"./chunk-Q5U6YZUT.js";import{a as Qe,b as nt}from"./chunk-33NXTXD7.js";import{u as E}from"./chunk-FTRAQKUW.js";import{a as He}from"./chunk-3AROKYRB.js";import{$ as be,$a as T,$b as $e,$c as je,Ac as f,Bb as c,Bc as v,Cb as d,Cc as De,Db as V,E as x,Ed as C,Ga as S,Gc as _,Gd as Ke,Hd as qe,I as fe,Ia as p,Id as We,Ja as ye,Jd as ze,L as z,Nc as L,O as y,Pc as R,Q as w,Qc as G,Sa as m,Sb as Ce,Sc as k,Ta as l,Tb as Ie,Tc as Pe,Ua as N,Uc as te,Va as Y,W as ue,Wa as Z,Wb as xe,Wc as U,Y as he,Ya as ge,Z as O,Zc as Be,_a as ee,a as B,ac as $,ad as we,b as j,bd as Oe,e as me,ec as Le,f as q,fd as Ne,ha as J,hd as Ve,ia as Q,jb as u,jd as Ge,k as W,kb as ve,kd as Ue,lb as g,m as b,n as A,pc as Ee,r as le,rc as Ae,rd as Me,sc as ke,sd as Fe,tb as Se,td as Xe,ua as a,ub as Te,va as h,vb as _e,w as I,xb as Re}from"./chunk-T7QWSMKM.js";function re(i,r){return i.pipe(b(n=>n.find(e=>e.Key===r)||null))}function Et(i){return i.slice().sort((r,n)=>r.Value.localeCompare(n.Value))}var at=new he("Confirm Absences Service");function ct(i,r){let n=ne(i),e=ne(r);return+n==+e}var ht=(i,r,n)=>({formGroup:i,unexcusedState:r,excusedState:n}),bt=i=>({count:i}),yt=()=>["/edit-absences"];function gt(i,r){if(i&1&&(m(0,"div",4),u(1),c(2,"translate"),l()),i&2){let n=r.bkdLet;a(),g(" ",V(2,1,n===1?"open-absences.edit.lesson-selected":"open-absences.edit.lessons-selected",_e(4,bt,n))," ")}}function vt(i,r){if(i&1&&(m(0,"div",19),u(1),c(2,"translate"),l()),i&2){let n=r.$implicit;a(),g(" ",V(2,1,"global.validation-errors."+n.error,n.params)," ")}}function St(i,r){if(i&1&&(m(0,"div",27),u(1),c(2,"translate"),l()),i&2){let n=r.$implicit;a(),g(" ",V(2,1,"global.validation-errors."+n.error,n.params)," ")}}function Tt(i,r){if(i&1&&(Y(0),S(1,St,3,4,"div",26),c(2,"async"),Z()),i&2){let n=T(5);a(),p("ngForOf",d(2,1,n.absenceTypeIdErrors$))}}function _t(i,r){if(i&1&&(m(0,"div",23),N(1,"input",24),c(2,"async"),m(3,"label",25),u(4),l(),S(5,Tt,3,3,"ng-container",11),c(6,"async"),l()),i&2){let n,e,t=r.$implicit,o=r.index,s=T(4);a(),ye("is-invalid",((n=(n=d(2,7,s.absenceTypeIdErrors$))==null?null:n.length)!==null&&n!==void 0?n:0)>0),p("id","absence-type-"+o)("value",t.Id),a(2),p("for","absence-type-"+o),a(),g(" ",t.Designation," "),a(),p("ngIf",((e=(e=d(6,9,s.absenceTypes$))==null?null:e.length)!==null&&e!==void 0?e:0)-1===o)}}function Rt(i,r){if(i&1&&(Y(0),S(1,_t,7,11,"div",20),c(2,"async"),m(3,"div",21),u(4),c(5,"translate"),m(6,"a",22),u(7),c(8,"translate"),l()(),Z()),i&2){let n=T(3);a(),p("ngForOf",d(2,4,n.absenceTypes$)),a(3),g(" ",d(5,6,"open-absences.edit.remark")," "),a(2),p("routerLink",Te(10,yt)),a(),g(" ",d(8,8,"edit-absences.title")," ")}}function Ct(i,r){i&1&&(m(0,"div",28)(1,"span",29),u(2,"Loading..."),l()())}function It(i,r){if(i&1){let n=ge();m(0,"form",5),ee("ngSubmit",function(){J(n);let t=T(2);return Q(t.onSubmit())}),S(1,vt,3,4,"div",6),c(2,"async"),m(3,"div",7)(4,"div",8),N(5,"input",9),m(6,"label",10),u(7),l(),S(8,Rt,9,11,"ng-container",11),l(),m(9,"div",12),N(10,"input",13),m(11,"label",14),u(12),l()()(),m(13,"div",15)(14,"button",16),c(15,"async"),ee("click",function(){J(n);let t=T(2);return Q(t.cancel())}),u(16),c(17,"translate"),l(),m(18,"button",17),c(19,"async"),u(20),c(21,"translate"),S(22,Ct,3,0,"div",18),c(23,"async"),l()()()}if(i&2){let n=T().bkdLet,e=T();p("formGroup",n.formGroup),a(),p("ngForOf",d(2,12,e.formErrors$)),a(4),p("value",n.excusedState.Key),a(2),g(" ",n.excusedState.Value," "),a(),p("ngIf",n.formGroup.get("absenceTypeId")),a(2),p("value",n.unexcusedState.Key),a(2),g(" ",n.unexcusedState.Value," "),a(2),p("disabled",d(15,14,e.saving$)),a(2),g(" ",d(17,16,"open-absences.edit.cancel")," "),a(2),p("disabled",d(19,18,e.saving$)),a(2),g(" ",d(21,20,"open-absences.edit.save")," "),a(2),p("ngIf",d(23,22,e.saving$))}}function xt(i,r){if(i&1&&(m(0,"div",1)(1,"h1"),u(2),c(3,"translate"),l(),S(4,gt,3,6,"div",2),c(5,"async"),S(6,It,24,24,"form",3),l()),i&2){let n=r.bkdLet,e=T();a(2),ve(d(3,3,"open-absences.edit.title")),a(2),p("bkdLet",d(5,5,e.getSelectedCount())),a(2),p("ngIf",n.formGroup&&n.unexcusedState&&n.excusedState)}}var ti=(()=>{let r=class r{constructor(e,t,o,s,X,H,K,dt,mt,lt,ft){this.fb=e,this.router=t,this.activatedRoute=o,this.toastService=s,this.translate=X,this.selectionService=H,this.dropDownItemsService=K,this.presenceTypesService=dt,this.updateService=mt,this.settings=lt,this.openAbsencesEditService=ft,this.formGroup$=this.selectionService.selectedWithoutPresenceType$.pipe(b(this.createFormGroup.bind(this)),z(1)),this.saving$=new q(!1),this.submitted$=new q(!1),this.formErrors$=ie(this.formGroup$,this.submitted$),this.absenceTypeIdErrors$=ie(this.formGroup$,this.submitted$,"absenceTypeId"),this.confirmationStates$=this.dropDownItemsService.getAbsenceConfirmationStates().pipe(z(1)),this.excusedState$=re(this.confirmationStates$,this.settings.excusedAbsenceStateId),this.unexcusedState$=re(this.confirmationStates$,this.settings.unexcusedAbsenceStateId),this.absenceTypes$=this.presenceTypesService.confirmationTypes$,this.destroy$=new me}ngOnInit(){this.selectionService.selectedIds$.pipe(x(1)).subscribe(e=>{e.length===0&&this.navigateBack()}),Je(this.formGroup$,"confirmationValue").pipe(w(this.destroy$)).subscribe(e=>{typeof e=="number"&&this.updateAbsenceTypeIdDisabled(e)}),A([P(this.formGroup$,"confirmationValue").pipe(I(E)),P(this.formGroup$,"absenceTypeId").pipe(I(E)),this.saving$]).pipe(w(this.destroy$)).subscribe(([e,t,o])=>{o?(e.disable(),t.disable()):(e.enable(),this.updateAbsenceTypeIdDisabled(e.value))}),A([P(this.formGroup$,"confirmationValue").pipe(I(E)),this.excusedState$.pipe(x(1),I(E))]).pipe(w(this.destroy$)).subscribe(([e,t])=>e.setValue(t.Key))}ngOnDestroy(){this.destroy$.next()}onSubmit(){this.submitted$.next(!0),this.formGroup$.pipe(x(1)).subscribe(e=>{if(e.valid){let{confirmationValue:t,absenceTypeId:o}=e.value;this.save(t,o)}})}cancel(){this.navigateBack()}getSelectedCount(){return this.selectionService.selectedLessons$.pipe(b(e=>e.length))}createFormGroup(e){return e.length>0?this.fb.group({confirmationValue:[null],absenceTypeId:[null,je.required]}):this.fb.group({confirmationValue:[null]})}updateAbsenceTypeIdDisabled(e){A([P(this.formGroup$,"absenceTypeId").pipe(x(1),I(E)),this.excusedState$.pipe(x(1),I(E))]).subscribe(([t,o])=>{e===o.Key?t.enable():t.disable()})}save(e,t){this.saving$.next(!0),A([this.selectionService.selectedIds$.pipe(x(1)),this.unexcusedState$.pipe(x(1),I(E))]).pipe(y(([o,s])=>A(o.map(({lessonIds:X,personId:H,presenceTypeId:K})=>this.updateService.confirmLessonPresences(X,[H],this.getNewAbsenceTypeId(K,e,Number(s.Key),t),e)))),fe(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}getNewAbsenceTypeId(e,t,o,s){if(!e)throw new Error("absence type id cannot be null");return t===o?this.settings.absencePresenceTypeId:e===this.settings.absencePresenceTypeId?s:e}onSaveSuccess(){this.openAbsencesEditService?.updateAfterConfirm&&this.openAbsencesEditService.updateAfterConfirm(),this.toastService.success(this.translate.instant("open-absences.edit.save-success")),this.navigateBack()}navigateBack(){this.router.navigate(this.openAbsencesEditService?.confirmBackLink||[".."],{relativeTo:this.activatedRoute,queryParams:this.openAbsencesEditService?.confirmBackLinkParams})}};r.\u0275fac=function(t){return new(t||r)(h(Me),h(Ae),h(Ee),h(He),h(Ke),h(tt),h(it),h(rt),h(st),h(U),h(at,8))},r.\u0275cmp=be({type:r,selectors:[["bkd-confirm-absences"]],standalone:!0,features:[Se],decls:4,vars:11,consts:[["class","bkd-container bkd-container-limited",4,"bkdLet"],[1,"bkd-container","bkd-container-limited"],["class","mb-3 pb-3 border-bottom",4,"bkdLet"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"mb-3","pb-3","border-bottom"],[3,"ngSubmit","formGroup"],["class","alert alert-danger",4,"ngFor","ngForOf"],[1,"form-group","pb-4"],[1,"form-check","mt-2","mb-3","pb-3","border-bottom"],["type","radio","id","excused","formControlName","confirmationValue",1,"form-check-input",3,"value"],["for","excused",1,"form-check-label"],[4,"ngIf"],[1,"form-check","mt-3","mb-3","pb-3","border-bottom"],["type","radio","id","unexcused","formControlName","confirmationValue",1,"form-check-input",3,"value"],["for","unexcused",1,"form-check-label"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],["type","submit",1,"btn","btn-primary","ms-2",3,"disabled"],["class","spinner-border spinner-border-sm align-middle","role","status",4,"ngIf"],[1,"alert","alert-danger"],["class","form-check my-3",4,"ngFor","ngForOf"],[1,"remark"],[3,"routerLink"],[1,"form-check","my-3"],["type","radio","formControlName","absenceTypeId",1,"form-check-input",3,"id","value"],[1,"form-check-label",3,"for"],["class","invalid-feedback",4,"ngFor","ngForOf"],[1,"invalid-feedback"],["role","status",1,"spinner-border","spinner-border-sm","align-middle"],[1,"visually-hidden"]],template:function(t,o){t&1&&(S(0,xt,7,7,"div",0),c(1,"async"),c(2,"async"),c(3,"async")),t&2&&p("bkdLet",Re(7,ht,d(1,1,o.formGroup$),d(2,3,o.unexcusedState$),d(3,5,o.excusedState$)))},dependencies:[Qe,Ie,Fe,Ne,Be,Ve,we,Oe,Xe,Ge,Ue,Ce,ke,xe,We,qe],changeDetection:0});let i=r;return i})();var pt=_({StudentRef:R,StudentFullName:f,TotalAbsences:v,TotalAbsencesUnconfirmed:v,TotalAbsencesValidExcuse:v,TotalAbsencesWithoutExcuse:v,TotalAbsencesUnchecked:v,TotalDispensations:v,TotalHalfDays:v,TotalIncidents:v});var oe=_({Id:f,LessonRef:R,StudentRef:R,EventRef:R,TypeRef:G,RegistrationRef:G,StudyClassRef:G,ConfirmationStateId:L(v),EventDesignation:f,HasStudyCourseConfirmationCode:De,LessonDateTimeFrom:k,LessonDateTimeTo:k,Comment:L(f),Date:L(Pe),Type:L(f),StudentFullName:f,StudyClassNumber:f,TeacherInformation:L(f)});var ae=_({LessonRef:R,EventRef:R,EventDesignation:f,StudyClassNumber:f,TeacherInformation:L(f),LessonDateTimeFrom:k,LessonDateTimeTo:k});function ce(i){return r=>r.pipe(y(n=>{let e=Number(n.headers.get("X-Pagination-Offset")),t=Number(n.headers.get("X-Pagination-Total"));return C(i)(n.body).pipe(b(o=>({offset:e,total:t,entries:o})))}))}function F(i,r,n=new $){return n.set("offset",String(i)).set("limit",String(r))}function pe(i=new $e){return i.set("X-Pagination-Total","on")}var Ai=(()=>{let r=class r extends nt{constructor(e,t,o){super(e,t,oe,"LessonPresences"),this.storage=o,this.lessonPresenceRefCodec=_(te(this.codec.props,["LessonRef","RegistrationRef","StudentRef","EventRef","StudyClassRef","TypeRef"])),this.lessonPresenceIdCodec=_(te(this.codec.props,["Id"]))}getLessonsByDate(e){let t={fields:Object.keys(ae.props).join(","),"filter.LessonDateTimeFrom":`=${D(e,"yyyy-MM-dd")}`,sort:"LessonDateTimeFrom"},o={"X-Role-Restriction":"LessonTeacherRole"};return this.http.get(`${this.baseUrl}/`,{params:t,headers:o}).pipe(y(C(ae)))}getListByLessons(e){if(e.length===0)return W([]);let o={"filter.LessonRef":`;${e.map(s=>s.LessonRef.Id).join(";")}`};return this.getList({params:o,headers:{"X-Role-Restriction":"LessonTeacherRole"}})}getListByDateStudentClass(e,t,o){let s={"filter.LessonDateTimeFrom":`=${D(e,"yyyy-MM-dd")}`,"filter.StudentRef":`=${t}`};return o!=null&&(s["filter.StudyClassRef"]=`=${o}`),this.getList({params:s,headers:{"X-Role-Restriction":"LessonTeacherRole"}})}getListForToday(){return this.http.get(`${this.baseUrl}/Today`,{headers:{"X-Role-Restriction":"LessonTeacherRole"}}).pipe(y(C(this.codec)))}getListOfUnconfirmed(e){return M(this.storage.getPayload()?.roles,"ClassTeacherRole")?le([this.getListOfUnconfirmedClassTeacher(e),this.getListOfUnconfirmedLessonTeacher(e)]).pipe(b(ot(et))):M(this.storage.getPayload()?.roles,"LessonTeacherRole")?this.getListOfUnconfirmedLessonTeacher(e):M(this.storage.getPayload()?.roles,"AbsenceAdministratorRole")?this.getListOfUnconfirmedAbsenceAdministrator(e):W([])}getStatistics(e,t,o){let s=de([[e.student,"StudentRef"],[e.educationalEvent,"EventRef"],[e.studyClass,"StudyClassRef"]]);return s=$t(t,s),s=F(o,this.settings.paginationLimit,s),this.http.get(`${this.baseUrl}/Statistics`,{params:s,headers:pe(),observe:"response"}).pipe(ce(pt))}getLessonRefs(e){let t=de([[e.student,"StudentRef"],[e.educationalEvent,"EventRef"],[e.studyClass,"StudyClassRef"]]);return t=t.set("filter.TypeRef",">0"),t=t.set("fields",["LessonRef","RegistrationRef","StudentRef","EventRef","StudyClassRef","TypeRef"].join(",")),t=t.set("limit","1500"),this.http.get(`${this.baseUrl}/`,{params:t}).pipe(y(C(this.lessonPresenceRefCodec)))}getRegistrationRefsByEventIds(e){let t=new $;return t.set("filter.EventRef",`;${e.join(";")}`),t=t.set("fields",["LessonRef","RegistrationRef","StudentRef","EventRef","StudyClassRef","TypeRef"].join(",")),this.http.get(`${this.baseUrl}/`,{params:t}).pipe(y(C(this.lessonPresenceRefCodec)))}getFilteredList(e,t,o){let s=de([[e.student,"StudentRef"],[e.educationalEvent,"EventRef"],[e.studyClass,"StudyClassRef"]],new $({fromObject:o}));return e.teacher&&(s=s.set("filter.TeacherInformation",`~*${e.teacher}*`)),e.dateFrom&&e.dateTo&&ct(e.dateFrom,e.dateTo)?s=s.set("filter.LessonDateTimeFrom",`=${D(e.dateFrom,"yyyy-MM-dd")}`):(e.dateFrom&&(s=s.set("filter.LessonDateTimeFrom",`>${D(Ze(e.dateFrom,1),"yyyy-MM-dd")}`)),e.dateTo&&(s=s.set("filter.LessonDateTimeTo",`<${D(Ye(e.dateTo,1),"yyyy-MM-dd")}`))),e.confirmationStates&&(s=s.set("filter.ConfirmationStateId",`;${e.confirmationStates.join(";")}`)),e.incidentTypes&&(s=s.set("filter.TypeRef",`;${e.incidentTypes.join(";")}`)),e.presenceTypes&&(s=s.set("filter.TypeRef",`;${e.presenceTypes.join(";")}`)),e.incidentTypes&&e.presenceTypes&&(s=s.set("filter.TypeRef",`;${e.presenceTypes.join(";")};${e.incidentTypes.join(";")}`)),this.http.get(`${this.baseUrl}/`,{params:F(t,this.settings.paginationLimit,s),headers:pe(),observe:"response"}).pipe(ce(oe))}hasLessonsLessonTeacher(){let e=new $().set("fields","Id");return this.http.get(`${this.baseUrl}/`,{params:F(0,1,e),headers:{"X-Role-Restriction":"LessonTeacherRole"}}).pipe(y(C(this.lessonPresenceIdCodec)),b(t=>t.length>0))}checkableAbsencesCount(){return this.http.get(`${this.baseUrl}/`,{headers:{"X-Role-Restriction":"LessonTeacherRole"},params:{"filter.ConfirmationStateId":`;${this.settings.checkableAbsenceStateId}`,fields:"Id,ConfirmationStateId"}}).pipe(y(C(this.lessonPresenceIdCodec)),b(e=>e.length))}getListOfUnconfirmedLessonTeacher(e){return this.getList({headers:{"X-Role-Restriction":"LessonTeacherRole"},params:j(B({},e),{"filter.ConfirmationStateId":`=${this.settings.unconfirmedAbsenceStateId}`,"filter.HasStudyCourseConfirmationCode":"=false"})})}getListOfUnconfirmedClassTeacher(e){return this.getList({headers:{"X-Role-Restriction":"ClassTeacherRole"},params:j(B({},e),{"filter.ConfirmationStateId":`=${this.settings.unconfirmedAbsenceStateId}`,"filter.HasStudyCourseConfirmationCode":"=true"})})}getListOfUnconfirmedAbsenceAdministrator(e){return this.getList({headers:{"X-Role-Restriction":"AbsenceAdministratorRole"},params:j(B({},e),{"filter.ConfirmationStateId":`=${this.settings.unconfirmedAbsenceStateId}`})})}};r.\u0275fac=function(t){return new(t||r)(O(Le),O(U),O(ze))},r.\u0275prov=ue({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();function de(i,r=new $){return i.reduce((n,[e,t])=>e&&t?n.set(`filter.${t}`,`=${e}`):n,r)}function $t(i,r=new $){return i?r.set("sort",`${i.key}.${i.ascending?"asc":"desc"}`):r}export{Et as a,at as b,ct as c,ti as d,Ai as e};
