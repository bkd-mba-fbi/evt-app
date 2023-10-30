"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[403],{9403:(ht,$,a)=>{a.r($),a.d($,{EditAbsencesModule:()=>ct});var j=a(6486),f=a(1523),F=a(2572),b=a(7081),d=a(7398),y=a(9773),B=a(1140),M=a(1389),H=a(2388),U=a(4477),x=a(4141),K=a(6191),e=a(5879),h=a(6814),V=a(3005),X=a(1608),w=a(7575),J=a(905),P=a(5001);let v=(()=>{class n extends U.f{constructor(t,s,i,r,c,m,l){super(t,s,i,r,"/edit-absences"),this.lessonPresencesService=c,this.presenceTypesService=m,this.dropDownItemsService=l,this.presenceTypes$=this.loadPresenceTypes().pipe((0,b.d)(1)),this.absenceConfirmationStates$=this.loadAbsenceConfirmationStates().pipe((0,d.U)(B.I),(0,b.d)(1)),this.presenceControlEntries$=(0,F.a)([this.entries$,this.presenceTypes$,this.absenceConfirmationStates$]).pipe((0,d.U)((0,M.h)(K.v)),(0,b.d)(1)),this.selected=[],this.queryParamsString$.pipe((0,y.R)(this.destroy$)).subscribe(S=>this.confirmBackLinkParams={returnparams:S})}resetSelection(){this.selected=[]}getInitialFilter(){return{student:null,educationalEvent:null,studyClass:null,teacher:null,dateFrom:null,dateTo:null,presenceTypes:null,confirmationStates:null,incidentTypes:null}}isValidFilter(t){return!!(t.student||t.educationalEvent||t.studyClass||t.teacher||t.dateFrom||t.dateTo||t.presenceTypes||t.confirmationStates||t.incidentTypes)}loadEntries(t,s,i){return this.loadingService.load(this.lessonPresencesService.getFilteredList(t,i,{sort:"StudentFullName.asc,LessonDateTimeFrom.asc"}),U.O)}buildParamsFromFilter(t){return(0,H.i)(t)}loadPresenceTypes(){return this.loadingService.load(this.presenceTypesService.activePresenceTypes$)}loadAbsenceConfirmationStates(){return this.loadingService.load(this.dropDownItemsService.getAbsenceConfirmationStates())}static#e=this.\u0275fac=function(s){return new(s||n)(e.LFG(h.Ye),e.LFG(V.b),e.LFG(X.K),e.LFG(x.L6),e.LFG(w.q),e.LFG(J.c),e.LFG(P.R))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac})}return n})();var W=a(6163);let ee=(()=>{class n{constructor(t){this.state=t}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(v))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["erz-edit-absences"]],features:[e._Bn([v,{provide:W.m,useExisting:v}])],decls:1,vars:0,template:function(s,i){1&s&&e._UZ(0,"router-outlet")},dependencies:[f.lC],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return n})();var N=a(8645),g=a(8180),te=a(2181),ne=a(6561);let q=(()=>{class n extends ne.z{static#e=this.\u0275fac=function(){let t;return function(i){return(t||(t=e.n5z(n)))(i||n)}}();static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac})}return n})();var O=a(2220),C=a(3942),se=a(412),ie=a(6283),z=a(6567),ae=a(59),L=a(253),re=a(9189),E=a(8484),oe=a(3296),_=a(7749),ce=a(3779),le=a(9245),de=a(9018),A=a(754);const ue=A.dt({HRef:A.Z_,Id:A.pk,TeacherId:A.pk,FullName:A.Z_});var pe=a(7346),he=a(2096),I=a(4664),me=a(275),ge=a(9862);let fe=(()=>{class n extends pe.r{constructor(t,s){super(t,s,ue,"TeacherResources","FullName","FullName")}getTypeaheadItemByKey(t){return this.http.get(`${this.baseUrl}/`,{params:{fields:[this.keyAttr,this.labelAttr].join(","),[`filter.${this.labelAttr}`]:`~*${t}*`}}).pipe((0,I.w)((0,me.Y0)(this.typeaheadCodec)),(0,I.w)(s=>(0,he.of)({Key:s[0].FullName,Value:`${s[0].FullName}`})))}static#e=this.\u0275fac=function(s){return new(s||n)(e.LFG(ge.eN),e.LFG(x.L6))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Z=a(9515),_e=a(2015),ve=a(1133),be=a(6001);let ye=(()=>{class n{constructor(t,s,i,r,c,m){this.studentsService=t,this.educationalEventsService=s,this.studyClassService=i,this.teacherResourcesService=r,this.state=c,this.translate=m,this.filter={student:null,educationalEvent:null,studyClass:null,teacher:null,dateFrom:null,dateTo:null,presenceTypes:null,confirmationStates:null,incidentTypes:null},this.filterChange=new e.vpe,this.absenceConfirmationStatesGrouped$=this.state.absenceConfirmationStates$.pipe((0,d.U)(l=>(0,_.pt)(l,this.translate.instant("shared.multiselect.all-option")))),this.presenceTypesGrouped$=this.state.presenceTypes$.pipe((0,d.U)(l=>l.filter((0,C.ff)(E.C3)).filter((0,C.ff)(E.hm))),(0,d.U)(_.KV),(0,d.U)(_.nC),(0,d.U)(l=>(0,_.pt)(l,this.translate.instant("shared.multiselect.all-option")))),this.incidentTypesGrouped$=this.state.presenceTypes$.pipe((0,d.U)(l=>l.filter(E.hm)),(0,d.U)(_.KV),(0,d.U)(_.nC),(0,d.U)(l=>(0,_.pt)(l,this.translate.instant("shared.multiselect.all-option")))),this.classesHttpFilter={params:{fields:"IsActive","filter.IsActive":"=true"}}}show(){this.filterChange.emit({...this.filter,dateFrom:Y(this.filter.dateFrom),dateTo:Y(this.filter.dateTo)})}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(ce.l),e.Y36(le.$),e.Y36(de.R),e.Y36(fe),e.Y36(v),e.Y36(Z.sK))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["erz-edit-absences-header"]],inputs:{filter:"filter"},outputs:{filterChange:"filterChange"},features:[e._Bn([{provide:L.DO,useClass:L.s5},{provide:L.NG,useClass:oe.n}])],decls:54,vars:53,consts:[[1,"row","g-3","mb-5"],[1,"col-md-6","col-lg-3"],[1,"form-label"],[3,"typeaheadService","value","valueChange"],[3,"typeaheadService","value","additionalHttpParams","valueChange"],[3,"value","valueChange"],[1,"row","g-3","align-items-end"],[1,"col-sm-12","col-md"],[3,"options","values","valuesChange"],[1,"col-auto"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"erz-typeahead",3),e.NdJ("valueChange",function(c){return i.filter.student=c}),e.qZA()(),e.TgZ(6,"div",1)(7,"label",2),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"erz-typeahead",3),e.NdJ("valueChange",function(c){return i.filter.educationalEvent=c}),e.qZA()(),e.TgZ(11,"div",1)(12,"label",2),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"erz-typeahead",4),e.NdJ("valueChange",function(c){return i.filter.studyClass=c}),e.qZA()(),e.TgZ(16,"div",1)(17,"label",2),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"erz-typeahead",3),e.NdJ("valueChange",function(c){return i.filter.teacher=c}),e.qZA()(),e.TgZ(21,"div",1)(22,"label",2),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"erz-date-select",5),e.NdJ("valueChange",function(c){return i.filter.dateFrom=c}),e.qZA()(),e.TgZ(26,"div",1)(27,"label",2),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"erz-date-select",5),e.NdJ("valueChange",function(c){return i.filter.dateTo=c}),e.qZA()()(),e.TgZ(31,"div",6)(32,"div",7)(33,"label",2),e._uU(34),e.ALo(35,"translate"),e.qZA(),e.TgZ(36,"erz-multiselect",8),e.NdJ("valuesChange",function(c){return i.filter.confirmationStates=c}),e.ALo(37,"async"),e.qZA()(),e.TgZ(38,"div",7)(39,"label",2),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"erz-multiselect",8),e.NdJ("valuesChange",function(c){return i.filter.presenceTypes=c}),e.ALo(43,"async"),e.qZA()(),e.TgZ(44,"div",7)(45,"label",2),e._uU(46),e.ALo(47,"translate"),e.qZA(),e.TgZ(48,"erz-multiselect",8),e.NdJ("valuesChange",function(c){return i.filter.incidentTypes=c}),e.ALo(49,"async"),e.qZA()(),e.TgZ(50,"div",9)(51,"button",10),e.NdJ("click",function(){return i.show()}),e._uU(52),e.ALo(53,"translate"),e.qZA()()()),2&s&&(e.xp6(3),e.Oqu(e.lcZ(4,27,"edit-absences.header.student")),e.xp6(2),e.Q6J("typeaheadService",i.studentsService)("value",i.filter.student),e.xp6(3),e.Oqu(e.lcZ(9,29,"edit-absences.header.module-instance")),e.xp6(2),e.Q6J("typeaheadService",i.educationalEventsService)("value",i.filter.educationalEvent),e.xp6(3),e.Oqu(e.lcZ(14,31,"edit-absences.header.study-class")),e.xp6(2),e.Q6J("typeaheadService",i.studyClassService)("value",i.filter.studyClass)("additionalHttpParams",i.classesHttpFilter),e.xp6(3),e.Oqu(e.lcZ(19,33,"edit-absences.header.teacher")),e.xp6(2),e.Q6J("typeaheadService",i.teacherResourcesService)("value",i.filter.teacher),e.xp6(3),e.Oqu(e.lcZ(24,35,"edit-absences.header.date-from")),e.xp6(2),e.Q6J("value",i.filter.dateFrom),e.xp6(3),e.Oqu(e.lcZ(29,37,"edit-absences.header.date-to")),e.xp6(2),e.Q6J("value",i.filter.dateTo),e.xp6(4),e.Oqu(e.lcZ(35,39,"edit-absences.header.confirmation-state")),e.xp6(2),e.Q6J("options",e.lcZ(37,41,i.absenceConfirmationStatesGrouped$))("values",i.filter.confirmationStates),e.xp6(4),e.Oqu(e.lcZ(41,43,"edit-absences.header.presence-type")),e.xp6(2),e.Q6J("options",e.lcZ(43,45,i.presenceTypesGrouped$))("values",i.filter.presenceTypes),e.xp6(4),e.Oqu(e.lcZ(47,47,"edit-absences.header.incident")),e.xp6(2),e.Q6J("options",e.lcZ(49,49,i.incidentTypesGrouped$))("values",i.filter.incidentTypes),e.xp6(4),e.hij(" ",e.lcZ(53,51,"edit-absences.header.show")," "))},dependencies:[_e.t,ve.T,be.z,h.Ov,Z.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:1rem 1rem 1rem 0;border-bottom:1px solid #dee2e6}"],changeDetection:0})}return n})();function Y(n){return n?(0,re.Z)(n):null}const Q=function(n){return{count:n}},G=function(n){return{returnparams:n}};function Ae(n,o){if(1&n&&(e.TgZ(0,"div",12)(1,"div",13),e._uU(2),e.ALo(3,"translate"),e.ALo(4,"async"),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"a",14),e.ALo(7,"async"),e.TgZ(8,"i",15),e._uU(9,"edit"),e.qZA()()()),2&n){const t=e.oxw(4).erzLet,s=e.oxw();e.xp6(2),e.AsE(" ",e.xi3(3,5,"edit-absences.list.total",e.VKq(15,Q,e.lcZ(4,8,s.state.total$)||0)),", ",e.xi3(5,10,"edit-absences.list.selected",e.VKq(17,Q,t.selection.length))," "),e.xp6(4),e.ekj("disabled",0===t.selection.length),e.Q6J("queryParams",e.VKq(19,G,e.lcZ(7,13,s.state.queryParamsString$)))}}const Ze=function(n){return["student",n,"absences"]};function Te(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",20),e.NdJ("click",function(i){e.CHM(t);const r=e.MAs(3),c=e.oxw(6);return e.KtG(c.onCheckboxCellClick(i,r))}),e.TgZ(2,"input",17,21),e.NdJ("change",function(){const r=e.CHM(t).$implicit,c=e.oxw(6);return e.KtG(c.selectionService.toggle(r.lessonPresence))}),e.ALo(4,"async"),e.qZA()(),e.TgZ(5,"td",18),e.ALo(6,"translate"),e.TgZ(7,"span",22)(8,"i",15),e._uU(9),e.qZA()()(),e.TgZ(10,"td"),e.ALo(11,"translate"),e.TgZ(12,"a",23),e.ALo(13,"async"),e._uU(14),e.qZA(),e._UZ(15,"br"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e.ALo(18,"translate"),e._uU(19),e.ALo(20,"date"),e.qZA(),e.TgZ(21,"td"),e.ALo(22,"translate"),e._uU(23),e.ALo(24,"date"),e.ALo(25,"date"),e.qZA(),e.TgZ(26,"td"),e.ALo(27,"translate"),e._uU(28),e.qZA(),e.TgZ(29,"td",24),e.ALo(30,"translate"),e._uU(31),e.qZA(),e.TgZ(32,"td"),e.ALo(33,"translate"),e._uU(34),e.qZA()()}if(2&n){const t=o.$implicit,s=e.oxw(6);e.xp6(2),e.Q6J("checked",e.lcZ(4,21,s.selectionService.isSelected$(t.lessonPresence))),e.xp6(3),e.uIk("data-label",e.lcZ(6,23,"edit-absences.list.header.presence")),e.xp6(2),e.Q6J("className",t.presenceCategory),e.xp6(2),e.Oqu(t.presenceCategoryIcon),e.xp6(1),e.uIk("data-label",e.lcZ(11,25,"edit-absences.list.header.mobil-student-module-instance-study-class")),e.xp6(2),e.Q6J("routerLink",e.VKq(48,Ze,t.lessonPresence.StudentRef.Id))("queryParams",e.VKq(50,G,e.lcZ(13,27,s.profileReturnParams$))),e.xp6(2),e.hij(" ",t.lessonPresence.StudentFullName," "),e.xp6(2),e.AsE(" ",t.lessonPresence.EventDesignation,", ",t.lessonPresence.StudyClassNumber," "),e.xp6(1),e.uIk("data-label",e.lcZ(18,29,"edit-absences.list.header.date")),e.xp6(2),e.hij(" ",e.xi3(20,31,t.lessonPresence.LessonDateTimeFrom,"mediumDate")," "),e.xp6(2),e.uIk("data-label",e.lcZ(22,34,"edit-absences.list.header.time")),e.xp6(2),e.AsE(" ",e.xi3(24,36,t.lessonPresence.LessonDateTimeFrom,"shortTime"),"\u2013",e.xi3(25,39,t.lessonPresence.LessonDateTimeTo,"shortTime")," "),e.xp6(3),e.uIk("data-label",e.lcZ(27,42,"edit-absences.list.header.confirmation-state")),e.xp6(2),e.hij(" ",null==t.confirmationState?null:t.confirmationState.Value," "),e.xp6(1),e.uIk("data-label",e.lcZ(30,44,"edit-absences.list.header.mobil-presence-type-incident")),e.xp6(2),e.hij(" ",null==t.presenceType?null:t.presenceType.Designation," "),e.xp6(1),e.uIk("data-label",e.lcZ(33,46,"edit-absences.list.header.teacher")),e.xp6(2),e.hij(" ",t.lessonPresence.TeacherInformation," ")}}function xe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"table",16)(1,"thead")(2,"tr")(3,"th")(4,"input",17),e.NdJ("change",function(i){e.CHM(t);const r=e.oxw(5);return e.KtG(r.toggleAll(i.currentTarget.checked))}),e.qZA()(),e.TgZ(5,"th",18),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"th"),e._uU(9),e.ALo(10,"translate"),e._UZ(11,"br"),e._uU(12),e.ALo(13,"translate"),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"th"),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"th"),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"th"),e._uU(22),e.ALo(23,"translate"),e.qZA(),e.TgZ(24,"th"),e._uU(25),e.ALo(26,"translate"),e.ALo(27,"translate"),e.qZA(),e.TgZ(28,"th"),e._uU(29),e.ALo(30,"translate"),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,Te,35,52,"tr",19),e.qZA()()}if(2&n){const t=e.oxw(4).erzLet;e.xp6(4),e.Q6J("checked",t.selection.length===t.entries.length),e.xp6(2),e.hij(" ",e.lcZ(7,12,"edit-absences.list.header.presence")," "),e.xp6(3),e.hij(" ",e.lcZ(10,14,"edit-absences.list.header.student")," "),e.xp6(3),e.AsE(" ",e.lcZ(13,16,"edit-absences.list.header.module-instance"),", ",e.lcZ(14,18,"edit-absences.list.header.study-class")," "),e.xp6(4),e.hij(" ",e.lcZ(17,20,"edit-absences.list.header.date")," "),e.xp6(3),e.Oqu(e.lcZ(20,22,"edit-absences.list.header.time")),e.xp6(3),e.hij(" ",e.lcZ(23,24,"edit-absences.list.header.confirmation-state")," "),e.xp6(3),e.AsE(" ",e.lcZ(26,26,"edit-absences.list.header.presence-type")," / ",e.lcZ(27,28,"edit-absences.list.header.incident")," "),e.xp6(4),e.Oqu(e.lcZ(30,30,"edit-absences.list.header.teacher")),e.xp6(3),e.Q6J("ngForOf",t.entries)}}function Ce(n,o){1&n&&e._UZ(0,"erz-spinner",25)}function Le(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(5);return e.KtG(i.state.nextPage())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"global.pagination.load-more")," "))}function Ee(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",7),e.NdJ("scrolled",function(){e.CHM(t);const i=e.oxw(4);return e.KtG(i.onScroll())}),e.YNc(1,Ae,10,21,"div",8),e.YNc(2,xe,33,32,"table",9),e.YNc(3,Ce,1,0,"erz-spinner",10),e.YNc(4,Le,3,3,"button",11),e.qZA()}if(2&n){const t=e.oxw(3).erzLet;e.xp6(1),e.Q6J("ngIf",t.entries&&t.entries.length>0),e.xp6(1),e.Q6J("ngIf",t.entries&&t.entries.length>0),e.xp6(1),e.Q6J("ngIf",t.loadingPage),e.xp6(1),e.Q6J("ngIf",t.hasMore&&!t.loadingPage)}}function Ie(n,o){1&n&&(e.TgZ(0,"p",27),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"edit-absences.no-entries")))}function Se(n,o){if(1&n&&(e.ynx(0),e.YNc(1,Ee,5,4,"div",5),e.YNc(2,Ie,3,3,"ng-template",null,6,e.W1O),e.BQk()),2&n){const t=e.MAs(3),s=e.oxw(2).erzLet;e.xp6(1),e.Q6J("ngIf",s.entries&&s.entries.length>0||s.loadingPage)("ngIfElse",t)}}function $e(n,o){1&n&&e._UZ(0,"erz-spinner")}function Fe(n,o){if(1&n&&(e.ynx(0),e.YNc(1,Se,4,2,"ng-container",2),e.ALo(2,"async"),e.YNc(3,$e,1,0,"ng-template",null,4,e.W1O),e.BQk()),2&n){const t=e.MAs(4),s=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!1===e.lcZ(2,2,s.state.loading$))("ngIfElse",t)}}function Ue(n,o){1&n&&(e.TgZ(0,"p",27),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"edit-absences.no-filter")))}function Je(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"erz-edit-absences-header",1),e.NdJ("filterChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.state.setFilter(i))}),e.ALo(2,"async"),e.qZA(),e.YNc(3,Fe,5,4,"ng-container",2),e.ALo(4,"async"),e.YNc(5,Ue,3,3,"ng-template",null,3,e.W1O),e.BQk()}if(2&n){const t=e.MAs(6),s=e.oxw();e.xp6(1),e.Q6J("filter",e.lcZ(2,3,s.filterFromParams$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,5,s.state.isFilterValid$))("ngIfElse",t)}}const Pe=function(n,o,t,s){return{selection:n,entries:o,hasMore:t,loadingPage:s}};let Ne=(()=>{class n{constructor(t,s,i,r){this.state=t,this.selectionService=s,this.scrollPosition=i,this.route=r,this.filterFromParams$=this.route.queryParams.pipe((0,d.U)(qe)),this.profileReturnParams$=this.state.queryParamsString$,this.destroy$=new N.x}ngOnInit(){this.filterFromParams$.pipe((0,g.q)(1)).subscribe(t=>this.state.setFilter(t)),this.state.validFilter$.pipe((0,y.R)(this.destroy$)).subscribe(()=>this.selectionService.clear()),this.selectionService.selection$.pipe((0,y.R)(this.destroy$)).subscribe(t=>this.state.selected=t),this.route.queryParams.pipe((0,g.q)(1),(0,d.U)(({reload:t})=>t),(0,te.h)(C.fQ)).subscribe(()=>this.state.resetEntries())}ngAfterViewInit(){this.scrollPosition.restore()}ngOnDestroy(){this.destroy$.next()}toggleAll(t){this.state.entries$.pipe((0,g.q)(1)).subscribe(s=>this.selectionService.clear(t?s:null))}onCheckboxCellClick(t,s){t.target!==s&&s.click()}onScroll(){this.state.nextPage()}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(v),e.Y36(q),e.Y36(se.X),e.Y36(f.gz))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["erz-edit-absences-list"]],features:[e._Bn([q])],decls:8,vars:17,consts:[[4,"erzLet"],[3,"filter","filterChange"],[4,"ngIf","ngIfElse"],["noFilter",""],["loading",""],["class","py-3","infiniteScroll","",3,"scrolled",4,"ngIf","ngIfElse"],["noEntries",""],["infiniteScroll","",1,"py-3",3,"scrolled"],["class","d-flex align-items-center justify-content-between",4,"ngIf"],["class","table table-striped",4,"ngIf"],["class","inline",4,"ngIf"],["type","button","class","btn btn-outline-secondary btn-sm d-block mx-auto",3,"click",4,"ngIf"],[1,"d-flex","align-items-center","justify-content-between"],[1,"total"],["routerLink","/edit-absences/edit",1,"edit","btn","btn-primary","btn-icon","mt-1","mb-2",3,"queryParams"],[1,"material-icons"],[1,"table","table-striped"],["type","checkbox",3,"checked","change"],[1,"presence-category"],[4,"ngFor","ngForOf"],[1,"edit-absences-checkbox",3,"click"],["checkbox",""],[3,"className"],[1,"student",3,"routerLink","queryParams"],[1,"designation-incident"],[1,"inline"],["type","button",1,"btn","btn-outline-secondary","btn-sm","d-block","mx-auto",3,"click"],[1,"mt-3"]],template:function(s,i){1&s&&(e.TgZ(0,"h1"),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.YNc(3,Je,7,7,"ng-container",0),e.ALo(4,"async"),e.ALo(5,"async"),e.ALo(6,"async"),e.ALo(7,"async")),2&s&&(e.xp6(1),e.Oqu(e.lcZ(2,2,"edit-absences.title")),e.xp6(2),e.Q6J("erzLet",e.l5B(12,Pe,e.lcZ(4,4,i.selectionService.selection$),e.lcZ(5,6,i.state.presenceControlEntries$),e.lcZ(6,8,i.state.hasMore$),e.lcZ(7,10,i.state.loadingPage$))))},dependencies:[h.sg,h.O5,f.rH,ie.Ry,z.e,ae.O,ye,h.Ov,h.uU,Z.X$],styles:[".presence-category[_ngcontent-%COMP%]{text-align:center}.presence-category[_ngcontent-%COMP%]   .absent[_ngcontent-%COMP%]{color:#d01018}.presence-category[_ngcontent-%COMP%]   .present[_ngcontent-%COMP%]{color:#3d8608}.presence-category[_ngcontent-%COMP%]   .unapproved[_ngcontent-%COMP%]{color:#ffa814}.designation-incident[_ngcontent-%COMP%]{max-width:50ch}@media screen and (max-width: 820px){.edit-absences-checkbox[_ngcontent-%COMP%]{text-align:left}.presence-category[_ngcontent-%COMP%]{text-align:right}.designation-incident[_ngcontent-%COMP%]{max-width:initial}}"],changeDetection:0})}return n})();function qe(n){return{student:n.student?Number(n.student):null,educationalEvent:n.educationalEvent?Number(n.educationalEvent):null,studyClass:n.studyClass?Number(n.studyClass):null,teacher:n.teacher??null,dateFrom:n.dateFrom?(0,O.nx)(n.dateFrom):null,dateTo:n.dateTo?(0,O.nx)(n.dateTo):null,presenceTypes:n.presenceTypes?n.presenceTypes.split(",").map(Number):null,confirmationStates:n.confirmationStates?n.confirmationStates.split(",").map(Number):null,incidentTypes:n.incidentTypes?n.incidentTypes.split(",").map(Number):null}}var p=a(6223),D=a(5619),Oe=a(4716),ze=a(2194),k=a(49),Ye=a(6023),u=function(n){return n.Absent="absent",n.Dispensation="dispensation",n.HalfDay="half-day",n.Incident="incident",n.Present="present",n}(u||{});let Qe=(()=>{class n{constructor(t,s){this.updateService=t,this.settings=s}update(t,s,i,r,c,m){let l=[];switch(i){case u.Present:l=this.createResetBulkRequests(t);break;case u.Absent:l=this.createAbsentEditBulkRequests(t,s,r,c);break;case u.Dispensation:l=this.createEditBulkRequests(t,null,this.settings.dispensationPresenceTypeId);break;case u.HalfDay:l=this.createEditBulkRequests(t,null,this.settings.halfDayPresenceTypeId);break;case u.Incident:l=this.createEditBulkRequests(t,null,m)}return(0,F.a)(l).pipe((0,d.U)(()=>{}))}createAbsentEditBulkRequests(t,s,i,r){return i===this.settings.excusedAbsenceStateId?this.createEditBulkRequests(t,i,r):i===this.settings.unexcusedAbsenceStateId?this.createEditBulkRequests(t,i,this.settings.absencePresenceTypeId):[...this.createEditBulkRequests(t.filter(R(s,this.settings)),i,this.settings.absencePresenceTypeId),...this.createEditBulkRequests(t.filter((0,C.ff)(R(s,this.settings))),i,null)]}createResetBulkRequests(t){return(0,k.fG)(t).map(({lessonIds:s,personIds:i})=>this.updateService.removeLessonPresences(s,i))}createEditBulkRequests(t,s,i){return(0,k.fG)(t).map(({lessonIds:r,personIds:c})=>this.updateService.editLessonPresences(r,c,i||void 0,s||void 0))}static#e=this.\u0275fac=function(s){return new(s||n)(e.LFG(Ye.O),e.LFG(x.L6))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function R(n,o){return t=>{const s=n.find(i=>i.Id===t.TypeRef.Id);return!s||s.Id===o.dispensationPresenceTypeId||s.Id===o.halfDayPresenceTypeId||s.IsIncident}}var T=a(1257),Ge=a(1342),De=a(6869);function ke(n,o){if(1&n&&(e.TgZ(0,"div",11),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,"global.validation-errors."+t.error,t.params)," ")}}function Re(n,o){if(1&n&&(e.TgZ(0,"option",23),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("ngValue",t.Id),e.xp6(1),e.hij(" ",t.Designation," ")}}function je(n,o){if(1&n&&(e.TgZ(0,"select",22),e.ALo(1,"async"),e.TgZ(2,"option",23),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.YNc(5,Re,2,2,"option",24),e.ALo(6,"async"),e.qZA()),2&n){const t=e.oxw(6);e.ekj("is-invalid",e.lcZ(1,5,t.absenceTypeIdErrors$).length>0),e.xp6(2),e.Q6J("ngValue",null),e.xp6(1),e.hij(" ",e.lcZ(4,7,"edit-absences.edit.absence-type-placeholder")," "),e.xp6(2),e.Q6J("ngForOf",e.lcZ(6,9,t.absenceTypes$))}}function Be(n,o){if(1&n&&(e.TgZ(0,"div",25),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,"global.validation-errors."+t.error,t.params)," ")}}function Me(n,o){if(1&n&&(e.TgZ(0,"div",18),e._UZ(1,"input",19),e.TgZ(2,"label",14),e._uU(3),e.qZA(),e.YNc(4,je,7,11,"select",20),e.YNc(5,Be,3,4,"div",21),e.ALo(6,"async"),e.qZA()),2&n){const t=o.$implicit,s=e.oxw(5);e.xp6(1),e.Q6J("id","state-"+t.Key)("value",t.Key),e.xp6(1),e.s9C("for","state-"+t.Key),e.xp6(1),e.hij(" ",t.Value," "),e.xp6(1),e.Q6J("ngIf",s.isExcused(t)),e.xp6(1),e.Q6J("ngForOf",e.lcZ(6,6,s.absenceTypeIdErrors$))}}function He(n,o){if(1&n&&(e.TgZ(0,"div",16),e.YNc(1,Me,7,8,"div",17),e.qZA()),2&n){const t=e.oxw(3).erzLet;e.xp6(1),e.Q6J("ngForOf",t.confirmationStates)}}function Ke(n,o){if(1&n&&(e.TgZ(0,"option",23),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("ngValue",t.Id),e.xp6(1),e.hij(" ",t.Designation," ")}}function Ve(n,o){if(1&n&&(e.TgZ(0,"div",25),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,"global.validation-errors."+t.error,t.params)," ")}}function Xe(n,o){if(1&n&&(e.TgZ(0,"div",16)(1,"select",26),e.ALo(2,"async"),e.TgZ(3,"option",23),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.YNc(6,Ke,2,2,"option",24),e.ALo(7,"async"),e.qZA(),e.YNc(8,Ve,3,4,"div",21),e.ALo(9,"async"),e.qZA()),2&n){const t=e.oxw(4);e.xp6(1),e.ekj("is-invalid",e.lcZ(2,6,t.incidentIdErrors$).length>0),e.xp6(2),e.Q6J("ngValue",null),e.xp6(1),e.hij(" ",e.lcZ(5,8,"edit-absences.edit.incident-placeholder")," "),e.xp6(2),e.Q6J("ngForOf",e.lcZ(7,10,t.incidents$)),e.xp6(2),e.Q6J("ngForOf",e.lcZ(9,12,t.incidentIdErrors$))}}function we(n,o){if(1&n&&(e.TgZ(0,"div",12),e._UZ(1,"input",13),e.TgZ(2,"label",14),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.YNc(5,He,2,1,"div",15),e.YNc(6,Xe,10,14,"div",15),e.qZA()),2&n){const t=o.$implicit,s=e.oxw(3);e.xp6(1),e.Q6J("id","category-"+t)("value",t),e.xp6(1),e.s9C("for","category-"+t),e.xp6(1),e.hij(" ",e.lcZ(4,6,"edit-absences.edit.categories."+t)," "),e.xp6(2),e.Q6J("ngIf",s.isAbsent(t)),e.xp6(1),e.Q6J("ngIf",s.isIncident(t))}}function We(n,o){1&n&&(e.TgZ(0,"div",27)(1,"span",28),e._uU(2,"Loading..."),e.qZA()())}function et(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"form",3),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.onSubmit())}),e.YNc(1,ke,3,4,"div",4),e.ALo(2,"async"),e.TgZ(3,"div",5),e.YNc(4,we,7,8,"div",6),e.qZA(),e.TgZ(5,"div",7)(6,"button",8),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.cancel())}),e.ALo(7,"async"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"button",9),e.ALo(11,"async"),e._uU(12),e.ALo(13,"translate"),e.YNc(14,We,3,0,"div",10),e.ALo(15,"async"),e.qZA()()()}if(2&n){const t=e.oxw().erzLet,s=e.oxw();e.Q6J("formGroup",t.formGroup),e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,8,s.formErrors$)),e.xp6(3),e.Q6J("ngForOf",t.categories),e.xp6(2),e.Q6J("disabled",e.lcZ(7,10,s.saving$)),e.xp6(2),e.hij(" ",e.lcZ(9,12,"edit-absences.edit.cancel")," "),e.xp6(2),e.Q6J("disabled",e.lcZ(11,14,s.saving$)),e.xp6(2),e.hij(" ",e.lcZ(13,16,"edit-absences.edit.save")," "),e.xp6(2),e.Q6J("ngIf",e.lcZ(15,18,s.saving$))}}function tt(n,o){if(1&n&&(e.TgZ(0,"div",1),e.YNc(1,et,16,20,"form",2),e.qZA()),2&n){const t=o.erzLet;e.xp6(1),e.Q6J("ngIf",t.formGroup&&t.confirmationStates)}}const nt=function(n,o,t){return{confirmationStates:n,categories:o,formGroup:t}},at=[{path:"",component:ee,children:[{path:"",component:Ne,data:{restoreScrollPositionFrom:["/edit-absences/edit","/edit-absences/student/:id/addresses","/edit-absences/student/:id/absences","/edit-absences/student/:id/grades"]}},{path:"edit",component:(()=>{class n{constructor(t,s,i,r,c,m,l,S,lt,dt){this.fb=t,this.router=s,this.route=i,this.toastService=r,this.translate=c,this.state=m,this.dropDownItemsService=l,this.presenceTypesService=S,this.updateService=lt,this.settings=dt,this.absenceTypes$=this.presenceTypesService.confirmationTypes$,this.incidents$=this.presenceTypesService.incidentTypes$,this.formGroup$=this.createFormGroup(),this.saving$=new D.X(!1),this.submitted$=new D.X(!1),this.formErrors$=(0,T.Z6)(this.formGroup$,this.submitted$),this.absenceTypeIdErrors$=(0,T.Z6)(this.formGroup$,this.submitted$,"absenceTypeId"),this.incidentIdErrors$=(0,T.Z6)(this.formGroup$,this.submitted$,"incidentId"),this.availableCategories=[u.Absent,u.Dispensation,u.HalfDay,u.Incident,u.Present],this.confirmationStates$=this.dropDownItemsService.getAbsenceConfirmationStates().pipe((0,d.U)(this.sortAbsenceConfirmationStates.bind(this)),(0,b.d)(1)),this.activeCategories$=this.presenceTypesService.halfDayActive$.pipe((0,d.U)(ut=>ut?this.availableCategories:this.availableCategories.filter(pt=>pt!==u.HalfDay))),this.destroy$=new N.x}ngOnInit(){0===this.state.selected.length&&this.navigateBack(),(0,T.ZX)(this.formGroup$,"category").pipe((0,y.R)(this.destroy$)).subscribe(this.updateConfirmationValueDisabled.bind(this)),(0,T.ZX)(this.formGroup$,"confirmationValue").pipe((0,y.R)(this.destroy$)).subscribe(this.updateAbsenceTypeIdDisabled.bind(this))}ngOnDestroy(){this.destroy$.next()}isAbsent(t){return t===u.Absent}isExcused(t){return t.Key===this.settings.excusedAbsenceStateId}isIncident(t){return t===u.Incident}onSubmit(){this.submitted$.next(!0),this.formGroup$.pipe((0,g.q)(1)).subscribe(t=>{t.valid&&this.save(t)})}cancel(){this.navigateBack()}createFormGroup(){return this.getInitialAbsenceTypeId().pipe((0,d.U)(t=>this.fb.group({category:[u.Absent,p.kI.required],confirmationValue:[this.settings.excusedAbsenceStateId,p.kI.required],absenceTypeId:[t,p.kI.required],incidentId:[{value:null,disabled:!0},p.kI.required]})),(0,b.d)(1))}getInitialAbsenceTypeId(){return this.absenceTypes$.pipe((0,g.q)(1),(0,d.U)(t=>{const s=t.map(r=>r.Id),i=(0,ze.Z)(this.state.selected.map(r=>r.TypeRef.Id));return 1===i.length&&null!=i[0]&&s.includes(i[0])?i[0]:null}))}updateConfirmationValueDisabled(){this.formGroup$.pipe((0,g.q)(1)).subscribe(t=>{const s=t.get("category"),i=t.get("confirmationValue"),r=t.get("absenceTypeId"),c=t.get("incidentId");s&&i&&r&&c&&(s.value===u.Absent?(i.enable(),this.updateAbsenceTypeIdDisabled()):(i.disable(),r.disable()),s.value===u.Incident?c.enable():c.disable())})}updateAbsenceTypeIdDisabled(){this.formGroup$.pipe((0,g.q)(1)).subscribe(t=>{const s=t.get("confirmationValue"),i=t.get("absenceTypeId");s&&i&&(s.value===this.settings.excusedAbsenceStateId?i.enable():i.disable())})}save(t){this.saving$.next(!0);const{category:s,confirmationValue:i,absenceTypeId:r,incidentId:c}=t.value;this.presenceTypesService.presenceTypes$.pipe((0,I.w)(m=>this.updateService.update(this.state.selected,m,s,i,r,c)),(0,Oe.x)(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}onSaveSuccess(){this.state.resetSelection(),this.toastService.success(this.translate.instant("edit-absences.edit.save-success")),this.navigateBack(!0)}navigateBack(t){this.route.queryParams.pipe((0,g.q)(1)).subscribe(s=>{this.router.navigate(["/edit-absences"],{queryParams:{...(0,Ge.dD)(s.returnparams),reload:t}})})}sortAbsenceConfirmationStates(t){return t.slice().sort((s,i)=>s.Key===this.settings.excusedAbsenceStateId?-1:i.Key===this.settings.excusedAbsenceStateId?1:s.Value.localeCompare(i.Value))}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(p.QS),e.Y36(f.F0),e.Y36(f.gz),e.Y36(De.k),e.Y36(Z.sK),e.Y36(v),e.Y36(P.R),e.Y36(J.c),e.Y36(Qe),e.Y36(x.L6))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["erz-edit-absences-edit"]],decls:7,vars:14,consts:[["class","erz-container erz-container-limited erz-container-padding-y",4,"erzLet"],[1,"erz-container","erz-container-limited","erz-container-padding-y"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngFor","ngForOf"],[1,"form-group","pb-4"],["class","form-check mt-2 mb-3",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-secondary",3,"disabled","click"],["type","submit",1,"btn","btn-primary","ms-2",3,"disabled"],["class","spinner-border spinner-border-sm align-middle","role","status",4,"ngIf"],[1,"alert","alert-danger"],[1,"form-check","mt-2","mb-3"],["type","radio","formControlName","category",1,"form-check-input",3,"id","value"],[1,"form-check-label",3,"for"],["class","ms-5",4,"ngIf"],[1,"ms-5"],["class","form-check mt-2 mb-2",4,"ngFor","ngForOf"],[1,"form-check","mt-2","mb-2"],["type","radio","formControlName","confirmationValue",1,"form-check-input",3,"id","value"],["class","form-select mt-1","formControlName","absenceTypeId",3,"is-invalid",4,"ngIf"],["class","invalid-feedback",4,"ngFor","ngForOf"],["formControlName","absenceTypeId",1,"form-select","mt-1"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"invalid-feedback"],["formControlName","incidentId",1,"form-select","mt-1"],["role","status",1,"spinner-border","spinner-border-sm","align-middle"],[1,"visually-hidden"]],template:function(s,i){1&s&&(e.TgZ(0,"h1"),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.YNc(3,tt,2,1,"div",0),e.ALo(4,"async"),e.ALo(5,"async"),e.ALo(6,"async")),2&s&&(e.xp6(1),e.Oqu(e.lcZ(2,2,"edit-absences.title")),e.xp6(2),e.Q6J("erzLet",e.kEZ(10,nt,e.lcZ(4,4,i.confirmationStates$),e.lcZ(5,6,i.activeCategories$),e.lcZ(6,8,i.formGroup$))))},dependencies:[h.sg,h.O5,p._Y,p.YN,p.Kr,p.Fj,p.EJ,p._,p.JJ,p.JL,p.sg,p.u,z.e,h.Ov,Z.X$],changeDetection:0})}return n})()},a(1162).H]}];let rt=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[f.Bz.forChild(at),f.Bz]})}return n})();var ot=a(8393);let ct=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({providers:[ot.o],imports:[j.m,rt]})}return n})()}}]);