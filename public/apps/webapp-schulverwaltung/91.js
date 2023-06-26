"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[91],{7091:(K,S,o)=>{o.r(S),o.d(S,{OpenAbsencesModule:()=>he});var _=o(6482),m=o(3519),M=o(1135),f=o(7579),$=o(6451),v=o(9841),O=o(4782),p=o(4004),b=o(5698),y=o(6478),x=o(5255),L=o(1363),A=o(7029),e=o(4650),T=o(8714),P=o(2151),U=o(2024),E=o(6188);let l=(()=>{class n{constructor(t,s,r,a){this.lessonPresencesService=t,this.selectionService=s,this.loadingService=r,this.translate=a,this.loading$=this.loadingService.loading$,this.search$=new M.X(""),this.updateUnconfirmedAbsences$=new f.x,this.unconfirmedAbsences$=(0,$.T)(this.loadUnconfirmedAbsences(),this.updateUnconfirmedAbsences$).pipe((0,O.d)(1)),this.entries$=this.unconfirmedAbsences$.pipe((0,p.U)(A.Ob),(0,O.d)(1)),this.sortCriteriaSubject$=new M.X({primarySortKey:"date",ascending:!1}),this.sortCriteria$=this.sortCriteriaSubject$.asObservable(),this.sortedEntries$=(0,v.a)([this.entries$,this.sortCriteria$]).pipe((0,p.U)((0,y.h)(A.EA))),this.filteredEntries$=(0,v.a)([this.sortedEntries$,this.search$]).pipe((0,p.U)((0,y.h)(x.P)),(0,O.d)(1)),this.currentDetail=null}getUnconfirmedAbsences(t,s){return this.entries$.pipe((0,p.U)(r=>{const a=r.find(u=>u.dateString===t&&u.studentId===s);return a?a.absences:[]}))}getAllUnconfirmedAbsencesForStudent(t){return this.entries$.pipe((0,p.U)(s=>s.filter(r=>r.studentId===t).reduce((r,a)=>r.concat(a.absences),[])))}toggleSort(t){this.sortCriteriaSubject$.pipe((0,b.q)(1)).subscribe(s=>{this.sortCriteriaSubject$.next(s.primarySortKey===t?{primarySortKey:t,ascending:!s.ascending}:{primarySortKey:t,ascending:"name"===t})})}get confirmBackLink(){return this.currentDetail?["/open-absences/detail",this.currentDetail.personId,this.currentDetail.date]:["/open-absences"]}updateAfterConfirm(){(0,v.a)([this.unconfirmedAbsences$.pipe((0,b.q)(1)),this.selectionService.selectedIds$.pipe((0,b.q)(1))]).pipe((0,p.U)((0,y.h)(A.pE))).subscribe(t=>{this.selectionService.clear(),this.updateUnconfirmedAbsences$.next(t)})}buildMailToString(t,s){const r=t.Email,a=this.translate.instant("open-absences.detail.mail.subject"),u=s.map(I=>(0,L.kK)(I)).join("%0D%0A");let C=`${this.translate.instant("open-absences.detail.mail.body")}%0D%0A${u}`;return C.length>=1600&&(C=`${C.substring(0,1500)}%0D%0A${this.translate.instant("open-absences.detail.mail.bodyToLargeForEmailTo")}`),`${r}?subject=${a}&body=${C}`}loadUnconfirmedAbsences(){return this.loadingService.load(this.lessonPresencesService.getListOfUnconfirmed())}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(T.q),e.LFG(P.o),e.LFG(U.b),e.LFG(E.sK))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var D=o(3509);let c=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["erz-open-absences"]],features:[e._Bn([l,{provide:D.m,useExisting:l}])],decls:1,vars:0,template:function(t,s){1&t&&e._UZ(0,"router-outlet")},dependencies:[m.lC],changeDetection:0}),n})();var d=o(3657),g=o(6895),j=o(1104),k=o(2925),z=o(368),J=o(9425);function Y(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",16),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw(4);return e.KtG(u.openAbsencesService.toggleSort(a))}),e._uU(1),e.ALo(2,"translate"),e.TgZ(3,"span",17),e._uU(4),e.qZA()()}if(2&n){const t=i.$implicit,s=e.oxw(3).erzLet,r=e.oxw();e.Q6J("className",t),e.xp6(1),e.hij(" ",e.lcZ(2,3,"open-absences.list.header."+t)," "),e.xp6(3),e.Oqu(r.getSortDirectionCharacter(s.sortCriteria,t))}}const W=function(n,i){return["detail",n,i]},Z=function(n){return{count:n}};function Q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",18)(2,"div",19),e.NdJ("click",function(r){e.CHM(t);const a=e.MAs(4),u=e.oxw(4);return e.KtG(u.onCheckboxCellClick(r,a))}),e.TgZ(3,"input",13,20),e.NdJ("change",function(){const a=e.CHM(t).$implicit,u=e.oxw(4);return e.KtG(u.selectionService.toggle(a))}),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",21)(7,"a",22),e._uU(8),e.qZA()(),e.TgZ(9,"div",23),e._uU(10),e.qZA(),e.TgZ(11,"div",24),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"div",25),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"div",26),e._uU(18),e.ALo(19,"erzDaysDifference"),e.qZA(),e.TgZ(20,"div",27),e._uU(21),e.ALo(22,"date"),e.qZA()()()}if(2&n){const t=i.$implicit,s=e.oxw(4);e.xp6(3),e.Q6J("checked",e.lcZ(5,9,s.selectionService.isSelected$(t))),e.xp6(4),e.Q6J("routerLink",e.WLB(22,W,t.studentId,t.dateString)),e.xp6(1),e.Oqu(t.studentFullName),e.xp6(2),e.hij(" ",t.studyClassNumber," "),e.xp6(2),e.hij(" ",e.xi3(13,11,s.getLessonsCountKey(t),e.VKq(25,Z,t.lessonsCount))," "),e.xp6(3),e.AsE(" ",t.studyClassNumber,", ",e.xi3(16,14,s.getLessonsCountKey(t),e.VKq(27,Z,t.lessonsCount))," "),e.xp6(3),e.hij(" ",e.lcZ(19,17,t.date)," "),e.xp6(3),e.Oqu(e.xi3(22,19,t.date,"dd.MM.yyyy"))}}const w=function(){return["name","date"]};function G(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",4)(2,"erz-resettable-input",5),e.NdJ("valueChange",function(r){e.CHM(t);const a=e.oxw(3);return e.KtG(a.openAbsencesService.search$.next(r))}),e.ALo(3,"async"),e.ALo(4,"translate"),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"div",6)(7,"div",7),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"a",8)(11,"i",9),e._uU(12,"edit"),e.qZA()()()(),e.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"input",13),e.NdJ("change",function(r){e.CHM(t);const a=e.oxw(3);return e.KtG(a.onToggleAll(r.currentTarget.checked))}),e.qZA()(),e.YNc(17,Y,5,5,"div",14),e.qZA(),e.YNc(18,Q,23,29,"div",15),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2).erzLet,s=e.oxw();e.xp6(2),e.Q6J("value",e.lcZ(3,9,s.openAbsencesService.search$))("placeholder",e.lcZ(4,11,"open-absences.search-by-name-or-class"))("label",e.lcZ(5,13,"open-absences.search")),e.xp6(6),e.hij(" ",e.xi3(9,15,"open-absences.selected",e.VKq(18,Z,t.selection.length))," "),e.xp6(2),e.ekj("disabled",0===t.selection.length),e.xp6(6),e.Q6J("checked",t.selection.length===t.entries.length),e.xp6(1),e.Q6J("ngForOf",e.DdM(20,w)),e.xp6(1),e.Q6J("ngForOf",t.entries)}}function X(n,i){1&n&&(e.TgZ(0,"p",28),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"open-absences.noEntries")))}function H(n,i){if(1&n&&(e.ynx(0),e.YNc(1,G,19,21,"ng-container",1),e.ALo(2,"async"),e.YNc(3,X,3,3,"ng-template",null,3,e.W1O),e.BQk()),2&n){const t=e.MAs(4),s=e.oxw().erzLet,r=e.oxw();let a;e.xp6(1),e.Q6J("ngIf",(null==(a=e.lcZ(2,2,r.openAbsencesService.sortedEntries$))?null:a.length)>0||(null==s.entries?null:s.entries.length)>0)("ngIfElse",t)}}function V(n,i){1&n&&e._UZ(0,"erz-spinner")}function q(n,i){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,H,5,4,"ng-container",1),e.ALo(2,"async"),e.YNc(3,V,1,0,"ng-template",null,2,e.W1O),e.qZA()),2&n){const t=e.MAs(4),s=e.oxw();e.xp6(1),e.Q6J("ngIf",!1===e.lcZ(2,2,s.openAbsencesService.loading$))("ngIfElse",t)}}const ee=function(n,i,t){return{selection:n,entries:i,sortCriteria:t}};let te=(()=>{class n{constructor(t,s,r){this.openAbsencesService=t,this.selectionService=s,this.scrollPosition=r,this.destroy$=new f.x}ngOnInit(){this.openAbsencesService.currentDetail=null,this.selectionService.clearNonOpenAbsencesEntries()}ngAfterViewInit(){this.scrollPosition.restore()}ngOnDestroy(){this.destroy$.next()}onToggleAll(t){this.openAbsencesService.filteredEntries$.pipe((0,b.q)(1)).subscribe(s=>{this.selectionService.clear(t?s:null)})}onCheckboxCellClick(t,s){t.target!==s&&s.click()}getSortDirectionCharacter(t,s){return t.primarySortKey!==s?"":t.ascending?"\u2193":"\u2191"}getLessonsCountKey(t){return"open-absences.list.content.lessonsCount."+(1===t.lessonsCount?"singular":"plural")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l),e.Y36(P.o),e.Y36(d.X))},n.\u0275cmp=e.Xpm({type:n,selectors:[["erz-open-absences-list"]],decls:4,vars:11,consts:[[4,"erzLet"],[4,"ngIf","ngIfElse"],["loading",""],["noEntries",""],[1,"pt-3","ps-3","pe-3"],[1,"d-flex","header-search",3,"value","placeholder","label","valueChange"],[1,"d-flex","align-items-center","justify-content-between","mt-1"],[1,"selection-count","ps-1"],["routerLink","/open-absences/confirm",1,"edit","btn","btn-primary","btn-edit","mt-1","mb-2"],[1,"material-icons"],[1,"content"],[1,"absence-header"],[1,"checkbox"],["type","checkbox",1,"form-check-input",3,"checked","change"],[3,"className","click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"className","click"],[1,"sort-direction"],[1,"absence-entry"],[1,"checkbox",3,"click"],["checkbox",""],[1,"name","pe-2"],[3,"routerLink"],[1,"study-class"],[1,"lessons-count"],[1,"study-class-lessons-count"],[1,"days-ago"],[1,"date"],[1,"mt-3"]],template:function(t,s){1&t&&(e.YNc(0,q,5,4,"div",0),e.ALo(1,"async"),e.ALo(2,"async"),e.ALo(3,"async")),2&t&&e.Q6J("erzLet",e.kEZ(7,ee,e.lcZ(1,1,s.selectionService.selection$),e.lcZ(2,3,s.openAbsencesService.filteredEntries$),e.lcZ(3,5,s.openAbsencesService.sortCriteria$)))},dependencies:[g.sg,g.O5,m.yS,j.e,k.O,z.w,g.Ov,g.uU,E.X$,J.Q],styles:['.content[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.header-search[_ngcontent-%COMP%]{max-width:500px}.absence-header[_ngcontent-%COMP%]{cursor:pointer;padding:1rem;display:grid;grid-template-areas:"checkbox name date";grid-template-columns:min-content 5fr 1fr;border-top:1px solid #dee2e6;border-bottom:2px solid #dee2e6;align-items:center}.absence-entry[_ngcontent-%COMP%]{padding:1rem;border-bottom:1px solid #dee2e6;display:grid;grid-template-areas:"checkbox name study-class lessons-count days-ago date";grid-template-columns:min-content 2fr 1fr 1fr 1fr 1fr;align-items:center}.checkbox[_ngcontent-%COMP%]{align-self:start;grid-area:checkbox;margin:0;padding:.3rem 1rem 0 0}.checkbox[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{position:static!important;margin:0!important;display:block}.name[_ngcontent-%COMP%]{grid-area:name;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.lessons-count[_ngcontent-%COMP%]{grid-area:lessons-count}.study-class[_ngcontent-%COMP%]{grid-area:study-class}.study-class-lessons-count[_ngcontent-%COMP%]{grid-area:study-class-lessons-count;display:none}.days-ago[_ngcontent-%COMP%]{color:#6c757d;grid-area:days-ago}.date[_ngcontent-%COMP%]{grid-area:date}@media (max-width: 750px){.content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.absence-header[_ngcontent-%COMP%]{grid-template-areas:"checkbox name date";grid-template-columns:min-content 3fr 2fr}.absence-entry[_ngcontent-%COMP%]{grid-template-areas:"checkbox name date" "checkbox study-class-lessons-count days-ago";grid-template-columns:min-content 3fr 2fr}.study-class-lessons-count[_ngcontent-%COMP%]{display:block}.study-class[_ngcontent-%COMP%], .lessons-count[_ngcontent-%COMP%]{display:none}.days-ago[_ngcontent-%COMP%], .study-class-lessons-count[_ngcontent-%COMP%]{font-size:.875rem;color:#adb5bd}}'],changeDetection:0}),n})();var ne=o(515),F=o(3900),N=o(2722),se=o(9300),oe=o(9679),B=o(3978),ie=o(6501),re=o(5644),ce=o(5592);const ae=function(){return["/open-absences"]};function le(n,i){if(1&n&&(e.TgZ(0,"div",2)(1,"button",3)(2,"div",4)(3,"i",5),e._uU(4,"navigate_before"),e.qZA(),e.TgZ(5,"span",6),e._uU(6),e.ALo(7,"async"),e.qZA()()()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("routerLink",e.DdM(4,ae)),e.xp6(5),e.Oqu(e.lcZ(7,2,t.studentFullName$))}}const ge=[{path:"",component:c,children:[{path:"",component:te,data:{restoreScrollPositionFrom:["/open-absences/detail/:personId/:date","/open-absences/confirm"]}},{path:"detail/:personId/:date",component:(()=>{class n{constructor(t,s,r,a,u,C,I){this.router=t,this.route=s,this.openAbsencesService=r,this.presenceTypesService=a,this.personService=u,this.selectionService=C,this.scrollPosition=I,this.absences$=this.route.paramMap.pipe((0,F.w)(this.getAbsencesForParams.bind(this))),this.hasAbsences$=this.absences$.pipe((0,p.U)((0,B.$L)(1))),this.studentFullName$=this.absences$.pipe((0,p.U)(h=>h[0]&&h[0].StudentFullName||null)),this.allSelected$=(0,v.a)([this.absences$,this.selectionService.selection$]).pipe((0,p.U)(([h,R])=>h.length===R.length)),this.studentEmail$=this.absences$.pipe((0,p.U)(h=>h[0]&&h[0].StudentRef.Id||null),(0,F.w)(h=>h?this.personService.getByIdWithEmailInfos(h):ne.E)),this.allUnconfirmedAbsencesForStudent$=this.route.paramMap.pipe((0,F.w)(this.getAbsencesForStudentParam.bind(this))),this.mailTo$=(0,v.a)([this.studentEmail$,this.allUnconfirmedAbsencesForStudent$]).pipe((0,p.U)(([h,R])=>this.openAbsencesService.buildMailToString(h,R))),this.destroy$=new f.x}ngOnInit(){this.selectionService.clearNonLessonPresences(),this.route.paramMap.pipe((0,N.R)(this.destroy$)).subscribe(t=>this.openAbsencesService.currentDetail={date:String(t.get("date")),personId:Number(t.get("personId"))}),this.hasAbsences$.pipe((0,N.R)(this.destroy$),(0,se.h)((0,oe.ff)(B.fQ))).subscribe(()=>this.router.navigate(["/open-absences"]))}ngAfterViewInit(){this.scrollPosition.restore()}ngOnDestroy(){this.destroy$.next()}toggleAll(t){t?this.absences$.pipe((0,b.q)(1)).subscribe(s=>this.selectionService.clear(s)):this.selectionService.clear()}onRowClick(t,s){t.target!==s&&s.click()}getPresenceTypeDesignation(t){return this.presenceTypesService.displayedTypes$.pipe((0,p.U)(s=>t.TypeRef.Id&&s.find(r=>r.Id===t.TypeRef.Id)?.Designation||null))}getAbsencesForParams(t){return this.openAbsencesService.getUnconfirmedAbsences(String(t.get("date")),Number(t.get("personId")))}getAbsencesForStudentParam(t){return this.openAbsencesService.getAllUnconfirmedAbsencesForStudent(Number(t.get("personId")))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.F0),e.Y36(m.gz),e.Y36(l),e.Y36(ie.c),e.Y36(re.J),e.Y36(P.o),e.Y36(d.X))},n.\u0275cmp=e.Xpm({type:n,selectors:[["erz-open-absences-detail"]],decls:3,vars:8,consts:[["class","d-flex align-items-center justify-content-between",4,"erzLet"],[3,"absences$","selectionService","confirmLink","displayEmail","mailTo$"],[1,"d-flex","align-items-center","justify-content-between"],["type","button",1,"back","btn","btn-link","p-3",3,"routerLink"],[1,"d-flex","align-items-center"],[1,"material-icons"],[1,"ms-3"]],template:function(t,s){1&t&&(e.YNc(0,le,8,5,"div",0),e.ALo(1,"async"),e._UZ(2,"erz-student-dossier-absences",1)),2&t&&(e.Q6J("erzLet",e.lcZ(1,6,s.selectionService.selection$)),e.xp6(2),e.Q6J("absences$",s.absences$)("selectionService",s.selectionService)("confirmLink","/open-absences/confirm")("displayEmail",!0)("mailTo$",s.mailTo$))},dependencies:[m.rH,j.e,ce.u,g.Ov],styles:['.content[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.back[_ngcontent-%COMP%]{color:#000;text-decoration:none}.back[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{text-decoration:underline}.absence-entry[_ngcontent-%COMP%]{padding:1rem;border-bottom:1px solid #dee2e6;display:grid;grid-template-areas:"checkbox lesson-class time teacher" "checkbox presence-type date days-ago";grid-template-columns:min-content 2fr 1fr 2fr}.checkbox[_ngcontent-%COMP%]{grid-area:checkbox;margin:0;padding:.6rem .5rem 0 0}.checkbox[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{position:static!important;margin:0!important;display:block}.all[_ngcontent-%COMP%]{grid-area:all}.lesson-class[_ngcontent-%COMP%]{grid-area:lesson-class;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.time[_ngcontent-%COMP%]{grid-area:time}.teacher[_ngcontent-%COMP%]{grid-area:teacher}.presence-type[_ngcontent-%COMP%]{color:#adb5bd;grid-area:presence-type}.date[_ngcontent-%COMP%]{grid-area:date}.days-ago[_ngcontent-%COMP%]{color:#adb5bd;grid-area:days-ago}.date-days-ago[_ngcontent-%COMP%]{grid-area:date-days-ago;display:none}@media (max-width: 750px){.content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.absence-entry[_ngcontent-%COMP%]{grid-template-areas:"checkbox lesson-class" "checkbox teacher" "checkbox date-days-ago" "checkbox time" "checkbox presence-type";grid-template-columns:min-content 1fr}.date-days-ago[_ngcontent-%COMP%]{display:block}.date[_ngcontent-%COMP%], .days-ago[_ngcontent-%COMP%]{display:none}}'],changeDetection:0}),n})(),data:{restoreScrollPositionFrom:["/open-absences/confirm"]}},{path:"confirm",component:o(5275).A}]}];let ue=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(ge),m.Bz]}),n})(),he=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.m,ue]}),n})()},3657:(K,S,o)=>{o.d(S,{X:()=>T});var _=o(3519),m=o(7579),M=o(9646),f=o(9300),$=o(4004),v=o(5698),O=o(5577),p=o(3900),b=o(3843),y=o(4782),x=o(2722),L=o(5684),A=o(4650),e=o(6895);let T=(()=>{class l{constructor(c,d){this.router=c,this.viewportScroller=d,this.scrollPositions={},this.previousRoute=null,this.currentRoute=null,this.currentScrollPosition=[0,0],this.destroy$=new m.x,this.scrollPosition$=this.router.events.pipe((0,f.h)(U),(0,$.U)(this.getScrollPosition.bind(this))),this.activationEnd$=this.router.events.pipe((0,f.h)(P)),this.navigationEnd$=this.router.events.pipe((0,f.h)(E)),this.route$=this.activationEnd$.pipe((0,v.q)(1)).pipe((0,O.z)(g=>[(0,M.of)(g),this.navigationEnd$.pipe((0,p.w)(()=>this.activationEnd$.pipe((0,v.q)(1))))]),(0,b.B)(),(0,$.U)(g=>g.snapshot),(0,y.d)(1)),this.scrollPosition$.pipe((0,x.R)(this.destroy$)).subscribe(g=>this.currentScrollPosition=g),this.route$.pipe((0,x.R)(this.destroy$)).subscribe(g=>{this.previousRoute=this.currentRoute,this.currentRoute=g})}ngOnDestroy(){this.destroy$.next()}restore(){if(!this.currentRoute||!this.requiresStoring(this.currentRoute))return;if(this.previousRoute&&this.shouldStoreFor(this.currentRoute,this.previousRoute)){const d=this.getPath(this.currentRoute);this.scrollToPosition(this.scrollPositions[d]||[0,0])}const c=this.currentRoute;this.route$.pipe((0,L.T)(1),(0,v.q)(1),(0,x.R)(this.destroy$),(0,f.h)(d=>this.shouldStoreFor(c,d))).subscribe(()=>{const d=this.getPath(c);this.scrollPositions[d]=this.currentScrollPosition})}getScrollPosition(){return this.viewportScroller.getScrollPosition()}scrollToPosition(c){this.viewportScroller.scrollToPosition(c)}getPath(c){return c?"/"+c.pathFromRoot.map(d=>d.routeConfig&&d.routeConfig.path).filter(d=>d).join("/"):"/"}requiresStoring(c){return Boolean(c&&c.routeConfig&&c.routeConfig.data&&Array.isArray(c.routeConfig.data.restoreScrollPositionFrom)&&c.routeConfig.data.restoreScrollPositionFrom.length>0)}shouldStoreFor(c,d){return(c&&c.routeConfig&&c.routeConfig.data&&Array.isArray(c.routeConfig.data.restoreScrollPositionFrom)?c.routeConfig.data.restoreScrollPositionFrom:[]).includes(this.getPath(d))}}return l.\u0275fac=function(c){return new(c||l)(A.LFG(_.F0),A.LFG(e.EM))},l.\u0275prov=A.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();function P(l){return l instanceof _.jw}function U(l){return l instanceof _.OD}function E(l){return l instanceof _.m2}}}]);