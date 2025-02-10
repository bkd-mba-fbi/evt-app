import{e as je,f as Ue,o as S}from"./chunk-A7CCEKNQ.js";import{f as Be,g as Ne,i as He}from"./chunk-2AZMKO7X.js";import{a as Ve,b as Ge}from"./chunk-HLAFRD2O.js";import{C as ne,x as Me,z as Oe}from"./chunk-QTBTUQ3W.js";import{$a as p,Ab as Pe,Ac as G,Bb as Le,Cb as Ae,F as $,Ga as U,H as N,Ic as Re,Ja as ye,Jb as l,Jc as te,K as de,Kb as d,Kc as T,Kd as q,Lb as M,M as y,Na as g,O as I,Oc as we,P as Y,Pd as Ee,Q as ue,Qa as A,Qd as K,Ra as he,Va as b,Vc as Fe,X as _,Ya as ge,Za as be,_ as h,_a as c,ab as Z,cc as ke,da as me,dc as $e,dd as v,ea as R,eb as V,f as re,fa as w,g as se,gb as F,h as k,hb as m,ib as _e,jb as xe,kb as Ce,l as ae,lb as Te,mc as H,n as r,nb as ve,o as ce,ob as Se,pb as Ie,qb as De,r as le,rb as u,sb as E,tb as C,ub as ee,x as pe,xa as fe,ya as s,za as j}from"./chunk-S3H6YSFW.js";var qe=function(e){return function(i){return!e(i)}};function it(e){return!e}function ot(e){return!!(e&&e.IsComment)}function rt(e){return!!(e&&e.IsIncident)}function W(e){return!!(e&&(e.IsAbsence||e.IsDispensation||e.IsHalfDay))}function ie(e,i){return!!(e&&i&&e.Id===i.absencePresenceTypeId)}function oe(e,i){return!!(e&&i&&i===e.checkableAbsenceStateId)}function Ke(e,i,t){return!!(it(i)&&e.ConfirmationStateId===null||ot(i)||rt(i)||W(i)&&e.ConfirmationStateId===t.unconfirmedAbsenceStateId||oe(t,e.ConfirmationStateId))}function Ft(e,i){return e?.IsAbsence?i.unconfirmedAbsenceStateId:null}var f=function(e){return e.Present="present",e.Unapproved="unapproved",e.Absent="absent",e}(f||{});function st(e){switch(e){case f.Absent:return"cancel";case f.Unapproved:return"help";default:return"check_circle"}}var Q=class{constructor(i,t,n,o){this.lessonPresence=i,this.presenceType=t,this.precedingAbsences=n,this.confirmationState=o,this.studentFullName=i.StudentFullName}get id(){return`${this.lessonPresence.LessonRef.Id}-${this.lessonPresence.StudentRef.Id}`}get presenceCategory(){return oe(this.settings,this.confirmationState&&Number(this.confirmationState.Key))?f.Unapproved:W(this.presenceType)?f.Absent:f.Present}get nextPresenceCategory(){return this.presenceCategory===f.Absent?f.Present:f.Absent}getNextPresenceType(i){switch(this.nextPresenceCategory){case f.Absent:return this.presenceCategory===f.Unapproved?this.presenceType:i.find(t=>ie(t,this.settings))||null;default:return null}}get canChangePresenceType(){return Ke(this.lessonPresence,this.presenceType,this.settings)}get canChangeIncident(){return!W(this.presenceType)}get showDesignation(){return!this.canChangePresenceType||this.presenceCategory===f.Absent&&!ie(this.presenceType,this.settings)||this.presenceCategory===f.Unapproved}get presenceCategoryIcon(){return st(this.presenceCategory)}get settings(){return window.schulverwaltung.settings}};function We(e,i,t){let n=Ne(e,t?.in);return isNaN(i)?Be(t?.in||e,NaN):(i&&n.setDate(n.getDate()+i),n)}function Vt(e,i,t){return We(e,-i,t)}var D=class{constructor(i){if(this.absences=i,i.length===0)throw new Error("Absences array is empty");this.date=je(this.absences[0].LessonDateTimeFrom),this.dateString=S(this.date,"yyyy-MM-dd"),this.studentId=this.absences[0].StudentRef.Id,this.studentFullName=this.absences[0].StudentFullName,this.studyClassNumber=this.absences[0].StudyClassNumber,this.lessonsCount=this.absences.length}get id(){return`${this.dateString}-${this.studentId}`}};function Qt(e,i){return e===null&&i===null||e!==null&&i!==null&&e.LessonRef.Id===i.LessonRef.Id&&e.EventDesignation===i.EventDesignation&&e.StudyClassNumber===i.StudyClassNumber&&e.TeacherInformation===i.TeacherInformation&&e.LessonDateTimeFrom.getTime()===i.LessonDateTimeFrom.getTime()&&e.LessonDateTimeTo.getTime()===i.LessonDateTimeTo.getTime()}function at(e,i){return e?i.filter(t=>e.lessons.map(n=>n.LessonRef.Id).indexOf(t.LessonRef.Id)>=0).sort(pt):[]}function ct(e,i,t){return q(e.filter(n=>n.StudentRef.Id===i.StudentRef.Id&&n.LessonRef.From&&n.LessonRef.From.toDateString()===t?.LessonDateTimeFrom.toDateString()&&n.LessonRef.From<t?.LessonDateTimeFrom),"Id").sort(dt)}function zt(e,i,t,n,o){return at(e,i).map(a=>lt(e,a,t,n,o))}function lt(e,i,t,n,o){let a=null;i.TypeRef.Id&&(a=t.find(X=>X.Id===i.TypeRef.Id)||null);let x=ct(o,i,e),L;return i.ConfirmationStateId&&(L=n.find(X=>X.Key===i.ConfirmationStateId)),new Q(i,a,x,L)}function Qe(e,i){let t=e.LessonDateTimeFrom.getTime(),n=i.LessonDateTimeFrom.getTime();return t-n===0?e.LessonDateTimeTo.getTime()-i.LessonDateTimeTo.getTime():t-n}function pt(e,i){return e.StudentFullName.localeCompare(i.StudentFullName)}function dt(e,i){return e.LessonRef.From&&e.LessonRef.To&&i.LessonRef.From&&i.LessonRef.To?e.LessonRef.From.getTime()-i.LessonRef.From.getTime()===0?e.LessonRef.To.getTime()-i.LessonRef.To.getTime():e.LessonRef.From.getTime()-i.LessonRef.From.getTime():0}var z=class extends Error{constructor(i,t){super(`TypeScript thought we could never end up here
${t}`)}};function on(e){let i=mt(e);return Object.keys(i).reduce((t,n)=>(Object.keys(i[n]).forEach(o=>{t=[...t,new D(i[n][o].sort(Qe))]}),t),[])}function rn(e,i){return[...e].sort(ut(i))}function J(e){return e.reduce((i,t)=>i.concat(t.absences),[])}function sn(e,i){return e.filter(t=>!i.some(({lessonIds:n,personId:o})=>n.includes(t.LessonRef.Id)&&o===t.StudentRef.Id))}function an(e,i){return q([...e,...i],"Id")}function ut(e){return(i,t)=>{switch(e.primarySortKey){case"date":{let n=i.date.getTime(),o=t.date.getTime();return n===o?i.studentFullName.localeCompare(t.studentFullName):e.ascending?n-o:o-n}case"name":{let n=e.ascending?i.studentFullName.localeCompare(t.studentFullName):t.studentFullName.localeCompare(i.studentFullName);return n===0?t.date.getTime()-i.date.getTime():n}default:throw new z(e.primarySortKey,"Unhandled sort criteria")}}}function mt(e){return e.reduce((i,t)=>{let n=S(t.LessonDateTimeFrom,"yyyy-MM-dd"),o=t.StudentRef.Id;return i[n]||(i[n]={}),i[n][o]||(i[n][o]=[]),i[n][o].push(t),i},{})}var O=function(e){return e.ToggleSelection="TOGGLE",e.ClearSelection="CLEAR",e}(O||{}),ze=(()=>{class e{constructor(){this.action$=new re,this.selection$=le(this.action$.pipe(de(this.reduceSelection.bind(this),[]),I([])),{connector:()=>new k(1)}),this.selectionSub=this.selection$.connect()}ngOnDestroy(){this.selectionSub.unsubscribe()}toggle(t){this.action$.next({type:O.ToggleSelection,payload:t})}clear(t=null){this.action$.next({type:O.ClearSelection,payload:t})}isSelected$(t){return this.selection$.pipe(r(n=>n.includes(t)),N())}reduceSelection(t,n){switch(n.type){case O.ToggleSelection:return t.includes(n.payload)?t.filter(o=>o!==n.payload):[...t,n.payload];case O.ClearSelection:return n.payload||[];default:return t}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=_({token:e,factory:e.\u0275fac})}}return e})();function mn(e){let i=e.reduce((t,n)=>(t[n.StudentRef.Id]||(t[n.StudentRef.Id]=[]),t[n.StudentRef.Id].push(n.LessonRef.Id),t),{});return Object.keys(i).map(t=>({personIds:[Number(t)],lessonIds:i[t]}))}function Je(e){let i={};return e.forEach(t=>{i[t.StudentRef.Id]||(i[t.StudentRef.Id]={}),i[t.StudentRef.Id][String(t.TypeRef.Id)]||(i[t.StudentRef.Id][String(t.TypeRef.Id)]=[]),i[t.StudentRef.Id][String(t.TypeRef.Id)].push(t.LessonRef.Id)}),Object.keys(i).reduce((t,n)=>[...t,...Object.keys(i[n]).map(o=>({personId:Number(n),presenceTypeId:o==="null"?null:Number(o),lessonIds:i[n][String(o)]}))],[])}function fn(e){return e.slice().sort((i,t)=>i.LessonDateTimeFrom.getTime()-t.LessonDateTimeFrom.getTime())}function yn(e){return`${e.EventDesignation}, ${S(e.LessonDateTimeFrom,"dd.MM.yyyy")}, ${S(e.LessonDateTimeFrom,"HH:mm")}-${S(e.LessonDateTimeTo,"HH:mm")}`}var In=(()=>{class e extends ze{constructor(t){super(),this.settings=t,this.selectedIds$=this.selection$.pipe(r(B),r(({openAbsencesEntries:n,lessonPresences:o})=>Je([...J(n),...o])),y(1)),this.selectedLessons$=this.selection$.pipe(r(B),r(({openAbsencesEntries:n,lessonPresences:o})=>[...J(n),...o]),y(1)),this.selectedWithoutPresenceType$=this.selection$.pipe(r(B),r(({openAbsencesEntries:n,lessonPresences:o})=>[...J(n),...o].filter(a=>a.TypeRef.Id===this.settings.absencePresenceTypeId)))}clearNonOpenAbsencesEntries(){this.selection$.pipe($(1),r(B)).subscribe(({openAbsencesEntries:t})=>this.clear(t))}clearNonLessonPresences(){this.selection$.pipe($(1),r(B)).subscribe(({lessonPresences:t})=>this.clear(t))}static{this.\u0275fac=function(n){return new(n||e)(h(v))}}static{this.\u0275prov=_({token:e,factory:e.\u0275fac})}}return e})();function B(e){return{openAbsencesEntries:e.filter(ne(D)),lessonPresences:e.filter(qe(ne(D)))}}function Xe(e){return e.slice().sort((i,t)=>i.Sort-t.Sort)}function Pn(e){return e.map(i=>({Key:i.Id,Value:i.Designation||""}))}function Ln(e,i){return e.map(t=>Object.assign(t,{Group:i}))}var Ye=we({Id:te,Active:T,Designation:Fe(Re),IsAbsence:T,IsComment:T,IsDispensation:T,IsIncident:T,IsHalfDay:T,NeedsConfirmation:T,Sort:te});var Ze=(()=>{class e extends Ve{constructor(t,n){super(t,n,Ye,"PresenceTypes")}static{this.\u0275fac=function(n){return new(n||e)(h(H),h(v))}}static{this.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var et=(()=>{class e{constructor(t,n){this.restService=t,this.settings=n,this.presenceTypes$=this.loadPresenceTypes().pipe(y(1)),this.activePresenceTypes$=this.presenceTypes$.pipe(r(this.filterActiveTypes.bind(this)),y(1)),this.confirmationTypes$=this.presenceTypes$.pipe(r(this.filterConfirmationTypes.bind(this)),y(1)),this.incidentTypes$=this.presenceTypes$.pipe(r(this.filterIncidentTypes.bind(this)),y(1)),this.displayedTypes$=this.presenceTypes$.pipe(r(this.filterDisplayedTypes.bind(this)),y(1)),this.halfDayActive$=this.presenceTypes$.pipe(r(this.isHalfDayActive.bind(this)),I(!1),N(),y(1))}getPresenceType(t){return this.presenceTypes$.pipe(r(n=>{let o=n.find(a=>a.Id===t);if(!o)throw new Error("presence type not found");return o}))}loadPresenceTypes(){return this.restService.getList().pipe(r(Xe))}filterActiveTypes(t){return t.filter(n=>n.Active)}filterConfirmationTypes(t){return t.filter(n=>n.NeedsConfirmation&&n.Active&&n.Id!==this.settings.absencePresenceTypeId)}filterIncidentTypes(t){return t.filter(n=>n.IsIncident&&n.Active)}filterDisplayedTypes(t){return t.filter(n=>n.Id!==this.settings.absencePresenceTypeId)}isHalfDayActive(t){return!!t.find(n=>n.Id===this.settings.halfDayPresenceTypeId)?.Active}static{this.\u0275fac=function(n){return new(n||e)(h(Ze),h(v))}}static{this.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Un=(()=>{class e{constructor(t,n){this.http=t,this.settings=n}editLessonPresences(t,n,o,a,x){let L={LessonIds:t,PersonIds:n};return o!==void 0&&(L.PresenceTypeId=o),a!==void 0&&(L.ConfirmationValue=a),this.http.put(`${this.settings.apiUrl}/LessonPresences/Edit`,L,x).pipe(r(()=>{}))}removeLessonPresences(t,n,o){return this.http.put(`${this.settings.apiUrl}/LessonPresences/Reset`,{LessonIds:t,PersonIds:n,WithComment:!0},o).pipe(r(()=>{}))}confirmLessonPresences(t,n,o,a){let x={LessonIds:t,PersonIds:n,AbsenceTypeId:o,ConfirmationValue:a};return this.http.put(`${this.settings.apiUrl}/LessonAbsences/Confirm`,x).pipe(r(()=>{}))}static{this.\u0275fac=function(n){return new(n||e)(h(H),h(v))}}static{this.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var tt=(()=>{class e{constructor(t){this.translate=t}transform(t){if(!t)return"";let n=Ue(t,new Date);return this.translate.instant(`shared.daysDifference.${this.getKey(n)}`,{count:Math.abs(n)})}getKey(t){return t===0?"today":t===1?"tomorrow":t===-1?"yesterday":t>0?"in":"ago"}static{this.\u0275fac=function(n){return new(n||e)(j(Ee,16))}}static{this.\u0275pipe=ye({name:"bkdDaysDifference",type:e,pure:!0})}}return e})();function Kn(e){return e.length===0}function nt(e){return Array.isArray(e)}var gt=["checkbox"],bt=(e,i)=>i.Id;function _t(e,i){e&1&&Z(0,"bkd-spinner",2)}function xt(e,i){if(e&1&&Z(0,"bkd-reports-link",13),e&2){let t=m(4);A("reports",t.reports)("disableIfUnavailable",!0)}}function Ct(e,i){if(e&1&&(c(0,"a",14),l(1,"async"),c(2,"i",12),u(3,"mail"),p()()),e&2){let t=m(4);Te("href","mailto:",d(1,2,t.mailTo$),"",fe)}}function Tt(e,i){if(e&1&&(c(0,"div",15),u(1),p()),e&2){let t=m(4);s(),C(" ",t.defaultAbsenceSelectionMessage," ")}}function vt(e,i){if(e&1){let t=V();c(0,"div",6),F("click",function(o){R(t);let a=De(3),x=m(3);return w(x.onRowClick(o,a))}),c(1,"div",7)(2,"input",8,0),l(4,"async"),F("change",function(o){R(t);let a=m(3);return w(a.toggleAll(o.target==null?null:o.target.checked))}),p()(),c(5,"div",9),u(6),l(7,"translate"),p(),c(8,"div",10)(9,"a",11),l(10,"async"),c(11,"i",12),u(12,"edit"),p()(),g(13,xt,1,2,"bkd-reports-link",13)(14,Ct,4,4,"a",14),p(),g(15,Tt,2,1,"div",15),l(16,"async"),p()}if(e&2){let t,n,o=m(3);s(2),A("checked",d(4,8,o.allSelected$)),s(4),E(d(7,10,"open-absences.detail.all")),s(3),he("disabled",((t=d(10,12,o.selectionService==null?null:o.selectionService.selection$))==null?null:t.length)===0),Ce("routerLink",o.confirmLink),s(4),b(o.reports?13:-1),s(),b(o.displayEmail?14:-1),s(),b(o.defaultAbsenceSelectionMessage&&((n=d(16,14,o.selectionService==null?null:o.selectionService.selectedWithoutPresenceType$))!=null&&n.length)?15:-1)}}function St(e,i){if(e&1){let t=V();c(0,"div",7)(1,"input",8,1),l(3,"async"),F("change",function(){R(t);let o=m().$implicit,a=m(3);return w(a.selectionService==null?null:a.selectionService.toggle(o))}),p()()}if(e&2){let t=m().$implicit,n=m(3);s(),A("checked",d(3,1,n.selectionService==null?null:n.selectionService.isSelected$(t)))}}function It(e,i){if(e&1&&u(0),e&2){let t=m().$implicit;C(" , ",t.StudyClassNumber," ")}}function Dt(e,i){if(e&1&&(c(0,"div",20),u(1),p()),e&2){m();let t=Ae(12);s(),C(" ",t," ")}}function Pt(e,i){e&1&&(c(0,"div",21),u(1),l(2,"translate"),p()),e&2&&(s(),C(" ",d(2,1,"my-absences.show.confirm-presence-type")," "))}function Lt(e,i){if(e&1){let t=V();c(0,"div",16),F("click",function(o){let a=R(t).$index,x=m(3);return w(x.onRowClick(o,a))}),g(1,St,4,3,"div",7),l(2,"async"),c(3,"div",17),u(4),g(5,It,1,1),p(),c(6,"div",18),u(7),l(8,"date"),l(9,"date"),p(),c(10,"div",19),u(11),p(),Pe(12),l(13,"async"),g(14,Dt,2,1,"div",20)(15,Pt,3,3,"div",21),c(16,"div",22),u(17),l(18,"date"),p(),c(19,"div",23),u(20),l(21,"bkdDaysDifference"),p(),c(22,"div",24),u(23),l(24,"date"),l(25,"bkdDaysDifference"),p()()}if(e&2){let t=i.$implicit,n=m(3);s(),b(d(2,12,n.editable$)?1:-1),s(3),C(" ",t.EventDesignation," "),s(),b(t.StudyClassNumber?5:-1),s(2),ee(" ",M(8,14,t.LessonDateTimeFrom,"HH:mm"),"\u2013",M(9,17,t.LessonDateTimeTo,"HH:mm")," "),s(4),C(" ",t.TeacherInformation," "),s();let o=Le(d(13,20,n.getPresenceTypeDesignation(t)));s(2),b(o?14:-1),s(),b(n.displayPresenceType&&!o&&n.defaultAbsenceSelectionMessage?15:-1),s(2),C(" ",M(18,23,t.LessonDateTimeFrom,"dd.MM.yyyy")," "),s(3),C(" ",d(21,26,t.LessonDateTimeFrom)," "),s(3),ee(" ",M(24,28,t.LessonDateTimeFrom,"dd.MM.yyyy"),", ",d(25,31,t.LessonDateTimeFrom)," ")}}function At(e,i){if(e&1&&(g(0,vt,17,16,"div",4),l(1,"async"),ge(2,Lt,26,33,"div",5,bt),l(4,"async")),e&2){let t=m(2);b(d(1,1,t.editable$)?0:-1),s(2),be(d(4,3,t.lessonPresences$))}}function kt(e,i){e&1&&(c(0,"p",3),u(1),l(2,"translate"),p()),e&2&&(s(),E(d(2,1,"shared.profile.no-absences")))}function $t(e,i){if(e&1&&(g(0,At,5,5),l(1,"async"),g(2,kt,3,3,"p",3)),e&2){let t,n=m();b(((t=(t=d(1,1,n.lessonPresences$))==null?null:t.length)!==null&&t!==void 0?t:0)>0?0:2)}}var oi=(()=>{class e{constructor(t){this.presenceTypesService=t,this.selectionService=null,this.displayPresenceType=!0,this.defaultAbsenceSelectionMessage=null,this.reports=null,this.confirmLink="confirm",this.displayEmail=!1,this.lessonPresences$$=new k(1),this.lessonPresences$=this.lessonPresences$$.pipe(ue(),I(null),y(1)),this.loading$=this.lessonPresences$.pipe(r(Oe(nt))),this.selectionService$=new k(1),this.editable$=this.selectionService$.pipe(r(()=>!0),I(!1)),this.displayPresenceType$=new se(!0),this.allSelected$=ce([this.lessonPresences$.pipe(pe(Me)),this.selectionService$.pipe(Y(n=>n.selection$))]).pipe(r(([n,o])=>n.length===o.length))}ngOnChanges(t){t.absences$&&this.lessonPresences$$.next(t.absences$.currentValue),t.selectionService&&t.selectionService.currentValue&&(t.selectionService.currentValue.clear(),this.selectionService$.next(t.selectionService.currentValue)),t.displayPresenceType&&this.displayPresenceType$.next(t.displayPresenceType.currentValue)}toggleAll(t){t?this.lessonPresences$.pipe($(1)).subscribe(n=>this.selectionService?.clear(n)):this.selectionService?.clear()}onRowClick(t,n){if(this.checkboxes.length===0)return;let o;typeof n=="number"?o=this.checkboxes.toArray()[n].nativeElement:o=n,t.target!==o&&!t.target.closest(".buttons")&&o.click()}getPresenceTypeDesignation(t){return this.displayPresenceType$.pipe(Y(n=>n?this.presenceTypesService.displayedTypes$:ae([])),r(n=>t.TypeRef.Id&&n.find(o=>o.Id===t.TypeRef.Id)?.Designation||null))}static{this.\u0275fac=function(n){return new(n||e)(j(et))}}static{this.\u0275cmp=U({type:e,selectors:[["bkd-student-dossier-absences"]],viewQuery:function(n,o){if(n&1&&ve(gt,5),n&2){let a;Se(a=Ie())&&(o.checkboxes=a)}},inputs:{absences$:"absences$",selectionService:"selectionService",displayPresenceType:"displayPresenceType",defaultAbsenceSelectionMessage:"defaultAbsenceSelectionMessage",reports:"reports",confirmLink:"confirmLink",displayEmail:"displayEmail",mailTo$:"mailTo$"},features:[me],decls:3,vars:3,consts:[["allCheckbox",""],["checkbox",""],[1,"inline","d-block","mb-3"],[1,"mx-3"],[1,"absence-all"],[1,"absence-entry"],[1,"absence-all",3,"click"],[1,"checkbox"],["type","checkbox",1,"form-check-input",3,"change","checked"],[1,"all"],[1,"buttons"],[1,"edit","btn","btn-primary","btn-icon","me-2",3,"routerLink"],[1,"material-icons"],[1,"me-2",3,"reports","disableIfUnavailable"],["target","_blank",1,"mail","btn","btn-primary","btn-icon","me-2",3,"href"],[1,"validation"],[1,"absence-entry",3,"click"],[1,"lesson-class"],[1,"time","pe-2"],[1,"teacher"],[1,"presence-type"],[1,"presence-type","confirm"],[1,"date"],[1,"days-ago"],[1,"date-days-ago"]],template:function(n,o){n&1&&(g(0,_t,1,0,"bkd-spinner",2),l(1,"async"),g(2,$t,3,3)),n&2&&b(d(1,1,o.loading$)?0:2)},dependencies:[G,He,Ge,ke,$e,K,tt],styles:['.absence-all[_ngcontent-%COMP%]{padding:0 0 .5rem 1rem;border-bottom:1px solid #dee2e6;display:grid;grid-template-areas:"checkbox all buttons" "validation validation validation";grid-template-columns:min-content 1fr min-content}.absence-entry[_ngcontent-%COMP%]{padding:1rem;border-bottom:1px solid #dee2e6;display:grid;grid-template-areas:"checkbox lesson-class time teacher" "checkbox presence-type date days-ago";grid-template-columns:min-content 2fr 1fr 2fr}.absence-entry[_ngcontent-%COMP%]:first-child{padding-top:0}.absence-all[_ngcontent-%COMP%] + .absence-entry[_ngcontent-%COMP%]{padding-top:1rem}.checkbox[_ngcontent-%COMP%]{grid-area:checkbox;margin:0;padding:.3rem 1rem 0 0}.checkbox[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{position:static!important;margin:0!important;display:block}.all[_ngcontent-%COMP%]{grid-area:all}.buttons[_ngcontent-%COMP%]{grid-area:buttons;display:flex}.validation[_ngcontent-%COMP%]{grid-area:validation}.validation[_ngcontent-%COMP%], .presence-type.confirm[_ngcontent-%COMP%]{color:#ea161f}.lesson-class[_ngcontent-%COMP%]{grid-area:lesson-class;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.time[_ngcontent-%COMP%]{grid-area:time}.teacher[_ngcontent-%COMP%]{grid-area:teacher}.presence-type[_ngcontent-%COMP%]{color:#adb5bd;grid-area:presence-type}.date[_ngcontent-%COMP%]{grid-area:date}.days-ago[_ngcontent-%COMP%]{color:#adb5bd;grid-area:days-ago}.date-days-ago[_ngcontent-%COMP%]{grid-area:date-days-ago;display:none}@media (max-width: 750px){.absence-entry[_ngcontent-%COMP%]{grid-template-areas:"checkbox lesson-class" "checkbox teacher" "checkbox date-days-ago" "checkbox time" "checkbox presence-type";grid-template-columns:min-content 1fr}.date-days-ago[_ngcontent-%COMP%]{display:block}.date[_ngcontent-%COMP%], .days-ago[_ngcontent-%COMP%]{display:none}}'],changeDetection:0})}}return e})();var Rt=["*"],ci=(()=>{class e{constructor(){this.link=[]}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=U({type:e,selectors:[["bkd-backlink"]],inputs:{link:"link",params:"params"},ngContentSelectors:Rt,decls:8,vars:5,consts:[[1,"d-flex","align-items-start","justify-content-between","w-100","mb-3"],[3,"routerLink","queryParams"],[1,"material-icons"],[1,"label"]],template:function(n,o){n&1&&(_e(),c(0,"div",0)(1,"a",1)(2,"span",2),u(3,"arrow_back"),p(),c(4,"span",3),u(5),l(6,"translate"),p()(),xe(7),p()),n&2&&(s(),A("routerLink",o.link)("queryParams",o.params),s(4),E(d(6,3,"global.back")))},dependencies:[G,K],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{height:calc(var(--bs-body-font-size) * var(--bs-body-line-height))}a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.3rem}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus{text-decoration:none}a[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:focus   .label[_ngcontent-%COMP%]{text-decoration:underline;text-decoration-color:#ea161f}"]})}}return e})();export{qe as a,We as b,Vt as c,ot as d,rt as e,W as f,Ke as g,Ft as h,f as i,st as j,Q as k,Qt as l,zt as m,lt as n,Qe as o,z as p,on as q,rn as r,sn as s,an as t,ze as u,mn as v,fn as w,yn as x,In as y,Xe as z,Pn as A,Ln as B,et as C,Un as D,tt as E,Kn as F,oi as G,ci as H};
