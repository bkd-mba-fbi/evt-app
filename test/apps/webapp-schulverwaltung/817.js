"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[817],{3817:(de,g,o)=>{o.r(g),o.d(g,{EvaluateAbsencesModule:()=>_e});var h=o(6482),c=o(3519),b=o(2722),A=o(8029),p=o(6649),y=o(5186),e=o(4650),r=o(6895),x=o(2024),v=o(8714),C=o(4379);let _=(()=>{class t extends p.f{constructor(n,s,l,i,u){super(n,s,u,l,"/evaluate-absences"),this.lessonPresenceService=i,this.queryParamsString$.pipe((0,b.R)(this.destroy$)).subscribe(d=>this.confirmBackLinkParams={returnparams:d})}getInitialFilter(){return{student:null,educationalEvent:null,studyClass:null}}isValidFilter(n){return Boolean(n.student||n.educationalEvent||n.studyClass)}getInitialSorting(){return{key:"StudentFullName",ascending:!0}}loadEntries(n,s,l){return this.loadingService.load(this.lessonPresenceService.getStatistics(n,s,l),p.O)}buildParamsFromFilter(n){return(0,y.i)(n)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(r.Ye),e.LFG(x.b),e.LFG(A.L6),e.LFG(v.q),e.LFG(C.K))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var E=o(3509);let Z=(()=>{class t{constructor(n){this.state=n}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_))},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-evaluate-absences"]],features:[e._Bn([_,{provide:E.m,useExisting:_}])],decls:1,vars:0,template:function(n,s){1&n&&e._UZ(0,"router-outlet")},dependencies:[c.lC],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),t})();var m=o(4004),L=o(5698),T=o(3900),S=o(4782),F=o(3657),I=o(6501),P=o(6401),$=o(6238),J=o(7296),N=o(1104),Y=o(2925),U=o(386),M=o(77),O=o(7283),z=o(6628),f=o(6188);let Q=(()=>{class t{constructor(n,s,l){this.studentsService=n,this.educationalEventsService=s,this.studyClassesService=l,this.filter={student:null,educationalEvent:null,studyClass:null},this.filterChange=new e.vpe,this.classesHttpFilter={params:{fields:"IsActive","filter.IsActive":"=true"}}}show(){this.filterChange.emit(this.filter)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(U.l),e.Y36(M.$),e.Y36(O.R))},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-evaluate-absences-header"]],inputs:{filter:"filter"},outputs:{filterChange:"filterChange"},decls:20,vars:19,consts:[[1,"row","g-3","align-items-end"],[1,"col-sm-12","col-md"],[1,"form-label"],[3,"typeaheadService","value","valueChange"],[3,"typeaheadService","value","additionalHttpParams","valueChange"],[1,"col-auto"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"erz-typeahead",3),e.NdJ("valueChange",function(i){return s.filter.student=i}),e.qZA()(),e.TgZ(6,"div",1)(7,"label",2),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"erz-typeahead",3),e.NdJ("valueChange",function(i){return s.filter.educationalEvent=i}),e.qZA()(),e.TgZ(11,"div",1)(12,"label",2),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"erz-typeahead",4),e.NdJ("valueChange",function(i){return s.filter.studyClass=i}),e.qZA()(),e.TgZ(16,"div",5)(17,"button",6),e.NdJ("click",function(){return s.show()}),e._uU(18),e.ALo(19,"translate"),e.qZA()()()),2&n&&(e.xp6(3),e.Oqu(e.lcZ(4,11,"evaluate-absences.header.student")),e.xp6(2),e.Q6J("typeaheadService",s.studentsService)("value",s.filter.student),e.xp6(3),e.Oqu(e.lcZ(9,13,"evaluate-absences.header.module-instance")),e.xp6(2),e.Q6J("typeaheadService",s.educationalEventsService)("value",s.filter.educationalEvent),e.xp6(3),e.Oqu(e.lcZ(14,15,"evaluate-absences.header.study-class")),e.xp6(2),e.Q6J("typeaheadService",s.studyClassesService)("value",s.filter.studyClass)("additionalHttpParams",s.classesHttpFilter),e.xp6(3),e.hij(" ",e.lcZ(19,17,"evaluate-absences.header.show")," "))},dependencies:[z.t,f.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:1rem;border-bottom:1px solid #dee2e6}"],changeDetection:0}),t})();function k(t,a){if(1&t&&(e.TgZ(0,"a",16),e.ALo(1,"async"),e.TgZ(2,"i",17),e._uU(3,"description"),e.qZA()()),2&t){const n=e.oxw(5);e.Q6J("href",e.lcZ(1,1,n.reportUrl$),e.LSH)}}function R(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"th",18),e.NdJ("click",function(){const i=e.CHM(n).$implicit,u=e.oxw(5);return e.KtG(u.state.sortService.toggleSorting(i.key))}),e.TgZ(1,"div",19)(2,"div",20),e.ALo(3,"translate"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"div",21),e._uU(7),e.ALo(8,"async"),e.qZA()()()}if(2&t){const n=a.$implicit,s=e.oxw(5);e.Q6J("ngClass",n.label),e.xp6(2),e.Q6J("ngbTooltip",e.lcZ(3,4,"evaluate-absences.list.header."+n.label)),e.xp6(2),e.hij(" ",e.lcZ(5,6,"evaluate-absences.list.header."+n.label)," "),e.xp6(3),e.hij(" ",e.lcZ(8,8,s.state.sortService.getSortingChar$(n))," ")}}const H=function(t){return["student",t,"absences"]},w=function(t){return{returnparams:t}};function j(t,a){if(1&t&&(e.TgZ(0,"a",25),e.ALo(1,"async"),e._uU(2),e.qZA()),2&t){const n=e.oxw().$implicit,s=e.oxw().$implicit,l=e.oxw(6);e.Q6J("routerLink",e.VKq(5,H,s.StudentRef.Id))("queryParams",e.VKq(7,w,e.lcZ(1,3,l.profileReturnParams$))),e.xp6(2),e.hij(" ",s[n.key]," ")}}function B(t,a){if(1&t&&e._uU(0),2&t){const n=e.oxw().$implicit,s=e.oxw().$implicit;e.hij(" ",s[n.key]," ")}}function q(t,a){if(1&t&&(e.TgZ(0,"td"),e.ALo(1,"translate"),e.YNc(2,j,3,9,"a",23),e.YNc(3,B,1,1,"ng-template",null,24,e.W1O),e.qZA()),2&t){const n=a.$implicit,s=e.MAs(4);e.uIk("data-label",e.lcZ(1,3,"evaluate-absences.list.header."+n.label)),e.xp6(2),e.Q6J("ngIf","StudentFullName"===n.key)("ngIfElse",s)}}function G(t,a){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,q,5,5,"td",22),e.qZA()),2&t){const n=e.oxw(6);e.xp6(1),e.Q6J("ngForOf",n.columns)}}function K(t,a){if(1&t&&(e.TgZ(0,"tbody"),e.YNc(1,G,2,1,"tr",22),e.qZA()),2&t){const n=e.oxw(4).erzLet;e.xp6(1),e.Q6J("ngForOf",n.entries)}}function X(t,a){1&t&&e._UZ(0,"erz-spinner",26)}function D(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(5);return e.KtG(l.state.nextPage())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"global.pagination.load-more")," "))}function W(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",8)(1,"div",9),e.YNc(2,k,4,3,"a",10),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"table",11),e.NdJ("scrolled",function(){e.CHM(n);const l=e.oxw(4);return e.KtG(l.onScroll())}),e.TgZ(5,"thead")(6,"tr"),e.YNc(7,R,9,10,"th",12),e.qZA()(),e.YNc(8,K,2,1,"tbody",13),e.qZA(),e.YNc(9,X,1,0,"erz-spinner",14),e.YNc(10,D,3,3,"button",15),e.qZA()}if(2&t){const n=e.oxw(3).erzLet,s=e.oxw();e.xp6(2),e.Q6J("ngIf",e.lcZ(3,5,s.reportUrl$)),e.xp6(5),e.Q6J("ngForOf",s.columns),e.xp6(1),e.Q6J("ngIf",n.entries&&n.entries.length>0),e.xp6(1),e.Q6J("ngIf",n.loadingPage),e.xp6(1),e.Q6J("ngIf",n.hasMore&&!n.loadingPage)}}function V(t,a){1&t&&(e.TgZ(0,"p",28),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"evaluate-absences.no-entries")," "))}function ee(t,a){if(1&t&&(e.ynx(0),e.YNc(1,W,11,7,"div",6),e.YNc(2,V,3,3,"ng-template",null,7,e.W1O),e.BQk()),2&t){const n=e.MAs(3),s=e.oxw(2).erzLet;e.xp6(1),e.Q6J("ngIf",s.entries&&s.entries.length>0||s.loadingPage)("ngIfElse",n)}}function te(t,a){1&t&&e._UZ(0,"erz-spinner")}function ne(t,a){if(1&t&&(e.ynx(0),e.YNc(1,ee,4,2,"ng-container",3),e.ALo(2,"async"),e.YNc(3,te,1,0,"ng-template",null,5,e.W1O),e.BQk()),2&t){const n=e.MAs(4),s=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!1===e.lcZ(2,2,s.state.loading$))("ngIfElse",n)}}function se(t,a){1&t&&(e.TgZ(0,"p",28),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"evaluate-absences.no-filter")))}function ae(t,a){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"erz-evaluate-absences-header",2),e.NdJ("filterChange",function(l){e.CHM(n);const i=e.oxw();return e.KtG(i.state.setFilter(l))}),e.ALo(2,"async"),e.qZA(),e.YNc(3,ne,5,4,"ng-container",3),e.ALo(4,"async"),e.YNc(5,se,3,3,"ng-template",null,4,e.W1O),e.BQk()}if(2&t){const n=e.MAs(6),s=e.oxw();e.xp6(1),e.Q6J("filter",e.lcZ(2,3,s.filterFromParams$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,5,s.state.isFilterValid$))("ngIfElse",n)}}const oe=function(t,a,n){return{entries:t,hasMore:a,loadingPage:n}};function ie(t){return{student:t.student?Number(t.student):null,educationalEvent:t.educationalEvent?Number(t.educationalEvent):null,studyClass:t.studyClass?Number(t.studyClass):null}}const re=[{path:"",component:Z,children:[{path:"",component:(()=>{class t{constructor(n,s,l,i,u,d){this.state=n,this.scrollPosition=s,this.route=l,this.presenceTypesService=i,this.reportsService=u,this.lessonPresencesService=d,this.reportUrl$=this.loadReportUrl(),this.columns=[{key:"StudentFullName",label:"student"},{key:"TotalAbsences",label:"total"},{key:"TotalAbsencesValidExcuse",label:"valid-excuse"},{key:"TotalAbsencesWithoutExcuse",label:"without-excuse"},{key:"TotalAbsencesUnconfirmed",label:"unconfirmed"},{key:"TotalAbsencesUnchecked",label:"unchecked"},{key:"TotalIncidents",label:"incident"}],this.filterFromParams$=this.route.queryParams.pipe((0,m.U)(ie)),this.profileReturnParams$=this.state.queryParamsString$}ngOnInit(){this.filterFromParams$.pipe((0,L.q)(1)).subscribe(n=>this.state.setFilter(n)),this.presenceTypesService.halfDayActive$.subscribe(n=>{n&&(this.columns=[...this.columns,{key:"TotalHalfDays",label:"halfday"}])})}ngAfterViewInit(){this.scrollPosition.restore()}onScroll(){this.state.nextPage()}loadReportUrl(){return this.state.validFilter$.pipe((0,T.w)(n=>this.lessonPresencesService.getLessonRefs(n)),(0,m.U)(n=>n.length>0?this.reportsService.getEvaluateAbsencesUrl(this.getReportRecordIds(n)):null),(0,S.d)(1))}getReportRecordIds(n){return n.map(s=>`${s.LessonRef.Id}_${s.RegistrationRef.Id}`)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_),e.Y36(F.X),e.Y36(c.gz),e.Y36(I.c),e.Y36(P.F),e.Y36(v.q))},t.\u0275cmp=e.Xpm({type:t,selectors:[["erz-evaluate-absences-list"]],decls:7,vars:14,consts:[[1,"mx-3"],[4,"erzLet"],[3,"filter","filterChange"],[4,"ngIf","ngIfElse"],["noFilter",""],["loading",""],["class","p-3",4,"ngIf","ngIfElse"],["noEntries",""],[1,"p-3"],[1,"buttons"],["class","report btn btn-primary btn-icon mb-2","target","_blank",3,"href",4,"ngIf"],["infiniteScroll","",1,"table","table-striped","table-fixed",3,"scrolled"],["scope","col",3,"ngClass","click",4,"ngFor","ngForOf"],[4,"ngIf"],["class","inline",4,"ngIf"],["type","button","class","btn btn-outline-secondary btn-sm d-block mx-auto",3,"click",4,"ngIf"],["target","_blank",1,"report","btn","btn-primary","btn-icon","mb-2",3,"href"],[1,"material-icons"],["scope","col",3,"ngClass","click"],[1,"d-flex"],[1,"column-title",3,"ngbTooltip"],[1,"sort-direction"],[4,"ngFor","ngForOf"],["class","student",3,"routerLink","queryParams",4,"ngIf","ngIfElse"],["noLink",""],[1,"student",3,"routerLink","queryParams"],[1,"inline"],["type","button",1,"btn","btn-outline-secondary","btn-sm","d-block","mx-auto",3,"click"],[1,"mt-3","px-3"]],template:function(n,s){1&n&&(e.TgZ(0,"h1",0),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.YNc(3,ae,7,7,"ng-container",1),e.ALo(4,"async"),e.ALo(5,"async"),e.ALo(6,"async")),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,2,"evaluate-absences.title")),e.xp6(2),e.Q6J("erzLet",e.kEZ(10,oe,e.lcZ(4,4,s.state.entries$),e.lcZ(5,6,s.state.hasMore$),e.lcZ(6,8,s.state.loadingPage$))))},dependencies:[r.mk,r.sg,r.O5,c.yS,$._L,J.Ry,N.e,Y.O,Q,r.Ov,f.X$],styles:["th[_ngcontent-%COMP%]{cursor:pointer}th.student[_ngcontent-%COMP%]{width:30%}.column-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0}),t})(),data:{restoreScrollPositionFrom:["/evaluate-absences/student/:id"]}},o(7467).H]}];let ue=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(re),c.Bz]}),t})(),_e=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.m,ue]}),t})()}}]);