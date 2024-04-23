"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[76],{1037:(O,E,e)=>{e.d(E,{m2:()=>v,XB:()=>d,t1:()=>y});var t=e(5818),n=e(4273);function C(o,s){return+(0,n.a)(o)<+(0,n.a)(s)}function u(o,s){const f=+(0,n.a)(o),[a,m]=[+(0,n.a)(s.start),+(0,n.a)(s.end)].sort((I,T)=>I-T);return f>=a&&f<=m}var i=e(7233);class g{constructor(s,f,a){this.TeacherInformation=s,this.LessonDateTimeFrom=f,this.LessonDateTimeTo=a,this.lessons=[]}addLesson(s){this.lessons.some(f=>(0,i.ib)(f,s))||(this.lessons.push(s),this.updateId(),this.updateStudyClassNumbers(),this.updateEventDesignations())}getIds(){return[...new Set(this.lessons.map(s=>s.LessonRef.Id))]}getEventIds(){return[...new Set(this.lessons.map(s=>s.EventRef.Id))]}updateId(){this.id=[...new Set(this.lessons.map(s=>s.LessonRef.Id).sort())].join("-")}updateStudyClassNumbers(){this.studyClassNumbers=[...new Set(this.lessons.map(s=>s.StudyClassNumber).sort((s,f)=>s.localeCompare(f)))].join(", ")}updateEventDesignations(){this.eventDesignations=[...new Set(this.lessons.map(s=>s.EventDesignation).sort())].join(", ")}}function d(o){return y(o).reduce((s,f)=>{const a=s.find(I=>function r(o,s){return null===o&&null===s||null!==o&&null!==s&&o.TeacherInformation===s.TeacherInformation&&o.LessonDateTimeFrom.getTime()===s.LessonDateTimeFrom.getTime()&&o.LessonDateTimeTo.getTime()===s.LessonDateTimeTo.getTime()}(I,f));if(a)return a.addLesson(f),s;const m=function l(o){const s=new g(o.TeacherInformation,o.LessonDateTimeFrom,o.LessonDateTimeTo);return s.addLesson(o),s}(f);return[...s,m]},[]).sort(i.qZ)}function v(o){if(0===o.length)return null;const s=new Date;if(o=[...o].sort(i.qZ),(0,t.r)(s,o[0].LessonDateTimeFrom)){for(const f of o)if(C(s,f.LessonDateTimeFrom)||u(s,{start:f.LessonDateTimeFrom,end:f.LessonDateTimeTo}))return f;return o[o.length-1]}return o[0]}function y(o){return o.reduce((s,f)=>s.some(a=>(0,i.ib)(a,f))?s:[...s,f],[])}},181:(O,E,e)=>{e.d(E,{m:()=>c});var t=e(4438),n=e(9417),C=e(1324),h=e(3955),u=e(1195);let c=(()=>{class i{constructor(){this.value=null,this.placeholder="shared.date-select.default-placeholder",this.minDate=null,this.valueChange=new t.bkB,this.componentId=(0,u.A)("bkd-date-select-")}static#t=this.\u0275fac=function(g){return new(g||i)};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["bkd-date-select"]],inputs:{value:"value",placeholder:"placeholder",minDate:"minDate"},outputs:{valueChange:"valueChange"},standalone:!0,features:[t.aNF],decls:8,vars:10,consts:[["dp","ngbDatepicker"],[1,"input-group"],[1,"input-group-text",3,"id"],[1,"material-icons"],["type","text","ngbDatepicker","",1,"form-control",3,"click","ngModelChange","minDate","ngModel"]],template:function(g,d){if(1&g){const v=t.RV6();t.j41(0,"div",1)(1,"span",2)(2,"i",3),t.EFF(3,"calendar_today"),t.k0s()(),t.j41(4,"input",4,0),t.nI1(6,"translate"),t.nI1(7,"translate"),t.bIt("click",function(){t.eBV(v);const o=t.sdS(5);return t.Njj(o.toggle())})("ngModelChange",function(o){return t.eBV(v),t.Njj(d.valueChange.emit(o))}),t.k0s()()}2&g&&(t.R7$(),t.Y8G("id",d.componentId),t.R7$(3),t.Y8G("minDate",d.minDate)("ngModel",d.value),t.BMQ("placeholder",t.bMT(6,6,d.placeholder))("aria-label",t.bMT(7,8,d.placeholder))("aria-describedby",d.componentId))},dependencies:[C.cw,n.YN,n.me,n.BC,n.vS,h.h,h.D9]})}return i})()},2239:(O,E,e)=>{e.d(E,{B:()=>h});var t=e(177),n=e(4438);function C(u,c){if(1&u){const i=n.RV6();n.j41(0,"button",5),n.bIt("click",function(){n.eBV(i);const l=n.XpG();return n.Njj(l.valueChange.emit(""))}),n.j41(1,"i",2),n.EFF(2,"clear"),n.k0s()()}}let h=(()=>{class u{constructor(){this.value="",this.disabled=!1,this.valueChange=new n.bkB}static#t=this.\u0275fac=function(r){return new(r||u)};static#e=this.\u0275cmp=n.VBU({type:u,selectors:[["bkd-resettable-input"]],inputs:{value:"value",disabled:"disabled",placeholder:"placeholder",label:"label"},outputs:{valueChange:"valueChange"},standalone:!0,features:[n.aNF],decls:6,vars:7,consts:[[1,"input-group"],["id","resettable-input",1,"input-group-text"],[1,"material-icons"],["type","text","aria-describedby","resettable-input",1,"form-control",3,"keyup","value","disabled"],["class","clear btn btn-link text-decoration-none","type","button",3,"click",4,"ngIf"],["type","button",1,"clear","btn","btn-link","text-decoration-none",3,"click"]],template:function(r,l){1&r&&(n.j41(0,"div",0)(1,"span",1)(2,"i",2),n.EFF(3,"search"),n.k0s()(),n.j41(4,"input",3),n.bIt("keyup",function(d){return l.valueChange.emit(null==d.target?null:d.target.value)}),n.k0s(),n.DNE(5,C,3,0,"button",4),n.k0s()),2&r&&(n.R7$(4),n.AVh("has-value",l.value),n.Y8G("value",l.value)("disabled",l.disabled),n.BMQ("placeholder",l.placeholder)("aria-label",l.label),n.R7$(),n.Y8G("ngIf",l.value))},dependencies:[t.bT],styles:["input.has-value[_ngcontent-%COMP%]{padding-right:2.5em}.btn.clear[_ngcontent-%COMP%]{position:absolute;right:0;z-index:5;padding-left:.5rem;padding-right:.5rem}"]})}return u})()},6914:(O,E,e)=>{e.d(E,{RJ:()=>f,I4:()=>g,aZ:()=>d,$1:()=>s,H_:()=>v,u8:()=>y,tl:()=>l});var t=e(5783);var h=e(3813);function u(a,m,I){return void 0===I&&(I="withFallback("+a.name+")"),function C(a,m,I){void 0===I&&(I=a.name);var T=function n(a){var m=Object.create(Object.getPrototypeOf(a));return Object.assign(m,a),m}(a);return T.validate=m,T.decode=function(M){return m(M,t.TY(T))},T.name=I,T}(a,function(T,M){return(0,h.NW)(function(){return t.kX(m)})(a.validate(T,M))},I)}var c=e(5306),i=e(5666);const r=t.NW({Key:t.Yj,Value:t.Yj}),l=t.NW({Id:t.Yj,Settings:t.tB(t.YO(r))}),g=c.js.pipe(t.NW({mail:u(t.zM,!1),gui:u(t.zM,!1),phoneMobile:u(t.zM,!1)})),d=new t.ZU("NotificationTypesInactive",a=>Array.isArray(a)&&a.every(m=>"string"==typeof m),(a,m)=>"string"==typeof a?t.kX(a.split(";").filter(Boolean)):t.V2(a,m),a=>a.join(";"));var v=function(a){return a.Grid="grid",a.List="list",a}(v||{});const y=c.js.pipe(t.NW({presenceControl:t.ZE({grid:null,list:null})})),o=t.NW({eventId:(0,c.c$)(t.ai),group:(0,c.c$)(i.H.props.Key)}),s=c.js.pipe(t.tB(t.YO(o))),f=t.NW({AccessInfo:t.NW({Roles:t.YO(t.Yj),Permissions:t.YO(t.Yj)})})},6772:(O,E,e)=>{e.d(E,{z:()=>r});var t=e(5558),n=e(2809),C=e(1015),h=e(785),u=e(6952),c=e(4438),i=e(1626);let r=(()=>{class l extends u.G{constructor(d,v){super(d,v,C.t,"Events")}getSubscriptionDetailsDefinitions(d){return this.http.get(`${this.baseUrl}/${d}/SubscriptionDetails`).pipe((0,t.n)((0,h.k$)(this.codec)))}getDesignation(d){const v=d.Classes?d.Classes.map(y=>y.Number).join(", "):null;return v?d.Designation+", "+v:d.Designation}static#t=this.\u0275fac=function(v){return new(v||l)(c.KVO(i.Qq),c.KVO(n.yy))};static#e=this.\u0275prov=c.jDH({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},3515:(O,E,e)=>{e.d(E,{A:()=>M});var t=e(1413),n=e(9172),C=e(152),h=e(5558),u=e(6354),c=e(4668),i=e(8141),r=e(6914),l=e(785),g=e(172),d=e(4438),v=e(2809),y=e(6952),o=e(1626);let s=(()=>{class _ extends y.G{constructor(p,D){super(p,D,r.tl,"UserSettings")}getUserSettingsCst(p){return this.http.get(`${this.baseUrl}/Cst`,{params:p}).pipe((0,h.n)((0,l.D4)(this.codec)))}updateUserSettingsCst(p){return this.http.patch(`${this.baseUrl}/Cst`,p)}getAccessInfo(){return this.http.get(`${this.baseUrl}/?expand=AccessInfo`).pipe((0,h.n)((0,l.D4)(r.RJ)),(0,u.T)(({AccessInfo:p})=>p))}static#t=this.\u0275fac=function(D){return new(D||_)(d.KVO(o.Qq),d.KVO(v.yy))};static#e=this.\u0275prov=d.jDH({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})();const a="presenceControlViewMode",m="presenceControlGroupView",I="notification",T="notificationTypesInactive";let M=(()=>{class _{constructor(p){this.settingsRestService=p,this.refetch$=new t.B,this.settings$=this.refetch$.pipe((0,n.Z)(null),(0,C.B)(100),(0,h.n)(()=>this.settingsRestService.getUserSettingsCst()),(0,u.T)(D=>D.Settings),(0,c.t)(1)),this.accessInfo$=this.settingsRestService.getAccessInfo().pipe((0,c.t)(1))}refetch(){this.refetch$.next()}getSetting(p){return this.settings$.pipe((0,u.T)(D=>D.find(S=>S.Key===p)?.Value??null))}saveSetting(p,D){return this.settingsRestService.updateUserSettingsCst(this.buildSettings(p,D)).pipe((0,i.M)(()=>this.refetch$.next()))}getPresenceControlViewMode(){return this.getSetting(a).pipe((0,g.Jh)('{"presenceControl":"grid"}'),(0,h.n)((0,l.D4)(r.u8)),(0,u.T)(({presenceControl:p})=>p))}savePresenceControlViewMode(p){return this.saveSetting(a,r.u8.encode({presenceControl:p}))}getPresenceControlGroupView(){return this.getSetting(m).pipe((0,g.Jh)("[]"),(0,h.n)((0,l.D4)(r.$1)))}savePresenceControlGroupView(p){return this.saveSetting(m,r.$1.encode(p))}getNotificationChannels(){return this.getSetting(I).pipe((0,g.Jh)("{}"),(0,h.n)((0,l.D4)(r.I4)))}saveNotificationChannels(p){return this.saveSetting(I,r.I4.encode(p))}getNotificationTypesInactive(){return this.getSetting(T).pipe((0,g.Jh)(""),(0,h.n)((0,l.D4)(r.aZ)))}saveNotificationTypesInactive(p){return this.saveSetting(T,r.aZ.encode(p))}getRolesAndPermissions(){return this.accessInfo$.pipe((0,u.T)(({Roles:p,Permissions:D})=>[...p,...D]),(0,n.Z)(null))}buildSettings(p,D){return{Id:"Cst",Settings:[{Key:p,Value:D}]}}static#t=this.\u0275fac=function(D){return new(D||_)(d.KVO(s))};static#e=this.\u0275prov=d.jDH({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},2930:(O,E,e)=>{e.d(E,{F:()=>n,r:()=>C});var t=e(5314);function n(h,u,c){return h.map(i=>{let l,r=null;return i.TypeRef.Id&&(r=u.find(g=>g.Id===i.TypeRef.Id)||null),i.ConfirmationStateId&&(l=c.find(g=>g.Key===i.ConfirmationStateId)),new t.Jt(i,r,null,l)})}function C(h,u,c){return h?u.filter(i=>c.find(r=>r===i.lessonPresence.StudentRef.Id)):u}},8358:(O,E,e)=>{e.d(E,{x:()=>n});var t=e(8116);function n(c,i){return i?c.filter(function C(c){const i=u(c);return r=>h(r.studentFullName,i)||h(r.studyClassNumber,i)||h(r.Designation,i)||h(r.evaluationText,i)}(i)):c}function h(c,i){return!!c&&u(c).includes(i)}function u(c){return(0,t.A)(c.toLowerCase())}}}]);