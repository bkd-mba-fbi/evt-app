import{a as we,b as De}from"./chunk-NK7SMC5C.js";import{b as ve,d as Oe,e as $e}from"./chunk-TMXWSOGF.js";import{b as Ie}from"./chunk-UPTESATB.js";import"./chunk-Y4QYVF5K.js";import"./chunk-XKNLLORS.js";import{a as z}from"./chunk-EJNJ2ZNZ.js";import{C as ke,E as Pe,G as Ee,H as Te,a as ge,q as ye,r as Se,s as xe,x as Ae,y}from"./chunk-W6XALPR5.js";import{d as Q}from"./chunk-XBIMNMBY.js";import"./chunk-A7CCEKNQ.js";import{j as Le}from"./chunk-2AZMKO7X.js";import{b as Me}from"./chunk-HLAFRD2O.js";import{A as Ce,B as _e}from"./chunk-QTBTUQ3W.js";import"./chunk-HVJBOTRL.js";import{$a as r,Ab as F,Ac as be,Bb as U,Cb as I,Db as ae,Eb as j,F as _,Fb as K,Ga as P,Gb as pe,Jb as a,Kb as l,Lb as B,M as N,Na as w,P as V,Pd as he,Qa as C,Qd as fe,R as Y,Ra as se,Va as R,X as ie,Xa as oe,Ya as G,Za as J,_ as T,_a as c,ab as x,cc as q,dc as le,ea as O,eb as D,f as k,fa as $,g as W,gb as M,hb as f,k as ee,n as b,o as S,qb as re,rb as u,sb as v,tb as E,ub as ce,w as te,x as ne,xc as de,ya as s,yc as me,za as h,zc as ue}from"./chunk-S3H6YSFW.js";var Ue=["studentFullName","studyClassNumber"],A=(()=>{class n{constructor(e,t,i,o){this.lessonPresencesService=e,this.selectionService=t,this.loadingService=i,this.translate=o,this.loading$=this.loadingService.loading$,this.search$=new W(""),this.updateUnconfirmedAbsences$=new k,this.unconfirmedAbsences$=te(this.loadUnconfirmedAbsences(),this.updateUnconfirmedAbsences$).pipe(N(1)),this.entries$=this.unconfirmedAbsences$.pipe(b(ye),N(1)),this.sortCriteriaSubject$=new W({primarySortKey:"date",ascending:!1}),this.sortCriteria$=this.sortCriteriaSubject$.asObservable(),this.sortedEntries$=S([this.entries$,this.sortCriteria$]).pipe(b(Q(Se))),this.filteredEntries$=S([this.sortedEntries$,this.search$]).pipe(b(([d,p])=>De(d,Ue,p)),N(1)),this.currentDetail=null}getUnconfirmedAbsences(e,t){return this.entries$.pipe(b(i=>{let o=i.find(d=>d.dateString===e&&d.studentId===t);return o?o.absences:[]}))}getAllUnconfirmedAbsencesForStudent(e){return this.entries$.pipe(b(t=>t.filter(i=>i.studentId===e).reduce((i,o)=>i.concat(o.absences),[])))}toggleSort(e){this.sortCriteriaSubject$.pipe(_(1)).subscribe(t=>{t.primarySortKey===e?this.sortCriteriaSubject$.next({primarySortKey:e,ascending:!t.ascending}):this.sortCriteriaSubject$.next({primarySortKey:e,ascending:e==="name"})})}get confirmBackLink(){return this.currentDetail?["/open-absences/detail",this.currentDetail.personId,this.currentDetail.date]:["/open-absences"]}updateAfterConfirm(){S([this.unconfirmedAbsences$.pipe(_(1)),this.selectionService.selectedIds$.pipe(_(1))]).pipe(b(Q(xe))).subscribe(e=>{this.selectionService.clear(),this.updateUnconfirmedAbsences$.next(e)})}buildMailToString(e,t){let i=e.Email,o=this.translate.instant("open-absences.detail.mail.subject"),d=t.map(L=>Ae(L)).join("%0D%0A"),p=`${this.translate.instant("open-absences.detail.mail.body")}%0D%0A${d}`;return p.length>=1600&&(p=`${p.substring(0,1500)}%0D%0A${this.translate.instant("open-absences.detail.mail.bodyToLargeForEmailTo")}`),`${i}?subject=${o}&body=${p}`}loadUnconfirmedAbsences(){return this.loadingService.load(this.lessonPresencesService.getListOfUnconfirmed())}static{this.\u0275fac=function(t){return new(t||n)(T($e),T(y),T(Le),T(he))}}static{this.\u0275prov=ie({token:n,factory:n.\u0275fac})}}return n})();var qe=()=>["/open-absences"],Be=(()=>{class n{constructor(e,t,i,o,d,p,L){this.router=e,this.route=t,this.openAbsencesService=i,this.presenceTypesService=o,this.personService=d,this.selectionService=p,this.scrollPosition=L,this.absences$=this.route.paramMap.pipe(V(this.getAbsencesForParams.bind(this))),this.hasAbsences$=this.absences$.pipe(b(Ce(1))),this.studentFullName$=this.absences$.pipe(b(m=>m[0]&&m[0].StudentFullName||null)),this.allSelected$=S([this.absences$,this.selectionService.selection$]).pipe(b(([m,H])=>m.length===H.length)),this.studentEmail$=this.absences$.pipe(b(m=>m[0]&&m[0].StudentRef.Id||null),V(m=>m?this.personService.getByIdWithEmailInfos(m):ee)),this.allUnconfirmedAbsencesForStudent$=this.route.paramMap.pipe(V(this.getAbsencesForStudentParam.bind(this))),this.mailTo$=S([this.studentEmail$,this.allUnconfirmedAbsencesForStudent$]).pipe(b(([m,H])=>this.openAbsencesService.buildMailToString(m,H))),this.destroy$=new k}ngOnInit(){this.selectionService.clearNonLessonPresences(),this.route.paramMap.pipe(Y(this.destroy$)).subscribe(e=>this.openAbsencesService.currentDetail={date:String(e.get("date")),personId:Number(e.get("personId"))}),this.hasAbsences$.pipe(Y(this.destroy$),ne(ge(_e))).subscribe(()=>void this.router.navigate(["/open-absences"]))}ngAfterViewInit(){this.scrollPosition.restore()}ngOnDestroy(){this.destroy$.next()}toggleAll(e){e?this.absences$.pipe(_(1)).subscribe(t=>this.selectionService.clear(t)):this.selectionService.clear()}onRowClick(e,t){e.target!==t&&t.click()}getPresenceTypeDesignation(e){return this.presenceTypesService.displayedTypes$.pipe(b(t=>e.TypeRef.Id&&t.find(i=>i.Id===e.TypeRef.Id)?.Designation||null))}getAbsencesForParams(e){return this.openAbsencesService.getUnconfirmedAbsences(String(e.get("date")),Number(e.get("personId")))}getAbsencesForStudentParam(e){return this.openAbsencesService.getAllUnconfirmedAbsencesForStudent(Number(e.get("personId")))}static{this.\u0275fac=function(t){return new(t||n)(h(ue),h(de),h(A),h(ke),h(Ie),h(y),h(z))}}static{this.\u0275cmp=P({type:n,selectors:[["bkd-open-absences-detail"]],decls:6,vars:10,consts:[[3,"link"],[3,"absences$","selectionService","confirmLink","displayEmail","mailTo$"]],template:function(t,i){t&1&&(c(0,"div"),x(1,"bkd-backlink",0),c(2,"h1"),u(3),a(4,"async"),r()(),x(5,"bkd-student-dossier-absences",1)),t&2&&(s(),C("link",j(9,qe)),s(2),v(l(4,7,i.studentFullName$)),s(2),C("absences$",i.absences$)("selectionService",i.selectionService)("confirmLink","/open-absences/confirm")("displayEmail",!0)("mailTo$",i.mailTo$))},dependencies:[Te,Ee,q],styles:['.content[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.back[_ngcontent-%COMP%]{color:#000;text-decoration:none}.back[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{text-decoration:underline}.absence-entry[_ngcontent-%COMP%]{padding:1rem;border-bottom:1px solid #dee2e6;display:grid;grid-template-areas:"checkbox lesson-class time teacher" "checkbox presence-type date days-ago";grid-template-columns:min-content 2fr 1fr 2fr}.checkbox[_ngcontent-%COMP%]{grid-area:checkbox;margin:0;padding:.6rem .5rem 0 0}.checkbox[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{position:static!important;margin:0!important;display:block}.all[_ngcontent-%COMP%]{grid-area:all}.lesson-class[_ngcontent-%COMP%]{grid-area:lesson-class;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.time[_ngcontent-%COMP%]{grid-area:time}.teacher[_ngcontent-%COMP%]{grid-area:teacher}.presence-type[_ngcontent-%COMP%]{color:#adb5bd;grid-area:presence-type}.date[_ngcontent-%COMP%]{grid-area:date}.days-ago[_ngcontent-%COMP%]{color:#adb5bd;grid-area:days-ago}.date-days-ago[_ngcontent-%COMP%]{grid-area:date-days-ago;display:none}@media (max-width: 750px){.content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.absence-entry[_ngcontent-%COMP%]{grid-template-areas:"checkbox lesson-class" "checkbox teacher" "checkbox date-days-ago" "checkbox time" "checkbox presence-type";grid-template-columns:min-content 1fr}.date-days-ago[_ngcontent-%COMP%]{display:block}.date[_ngcontent-%COMP%], .days-ago[_ngcontent-%COMP%]{display:none}}'],changeDetection:0})}}return n})();var ze=(n,g)=>g.id,Ne=()=>[],Z=n=>({count:n}),He=(n,g)=>["detail",n,g];function We(n,g){if(n&1&&(c(0,"div",2)(1,"div",5),u(2),a(3,"translate"),r(),c(4,"a",6)(5,"i",7),u(6,"edit"),r()()()),n&2){f();let e=I(0);s(2),E(" ",B(3,3,"open-absences.selected",K(6,Z,e.length))," "),s(2),se("disabled",e.length===0)}}function Ye(n,g){n&1&&x(0,"bkd-spinner")}function Ge(n,g){n&1&&(c(0,"p",3),u(1),a(2,"translate"),r()),n&2&&(s(),v(l(2,1,"open-absences.noEntries")))}function Je(n,g){if(n&1&&(c(0,"span",13),u(1),r()),n&2){let e=f().$implicit,t=f(2),i=I(4);s(),v(t.getSortDirectionCharacter(i,e))}}function Qe(n,g){if(n&1){let e=D();c(0,"div",12),M("click",function(){let i=O(e).$implicit,o=f(2);return $(o.openAbsencesService.toggleSort(i))}),u(1),a(2,"translate"),w(3,Je,2,1,"span",13),r()}if(n&2){let e=g.$implicit;f(2);let t=I(4);C("className",e),s(),E(" ",l(2,3,"open-absences.list.header."+e)," "),s(2),R(t?3:-1)}}function Xe(n,g){if(n&1){let e=D();c(0,"div")(1,"div",14)(2,"div",15),M("click",function(i){O(e);let o=re(4),d=f(2);return $(d.onCheckboxCellClick(i,o))}),c(3,"input",10,0),a(5,"async"),M("change",function(){let i=O(e).$implicit,o=f(2);return $(o.selectionService.toggle(i))}),r()(),c(6,"div",16)(7,"a",17),u(8),r()(),c(9,"div",18),u(10),r(),c(11,"div",19),u(12),a(13,"translate"),r(),c(14,"div",20),u(15),a(16,"translate"),r(),c(17,"div",21),u(18),a(19,"bkdDaysDifference"),r(),c(20,"div",22),u(21),a(22,"date"),r()()()}if(n&2){let e=g.$implicit,t=f(2);s(3),C("checked",l(5,9,t.selectionService.isSelected$(e))),s(4),C("routerLink",pe(22,He,e.studentId,e.dateString)),s(),v(e.studentFullName),s(2),E(" ",e.studyClassNumber," "),s(2),E(" ",B(13,11,t.getLessonsCountKey(e),K(25,Z,e.lessonsCount))," "),s(3),ce(" ",e.studyClassNumber,", ",B(16,14,t.getLessonsCountKey(e),K(27,Z,e.lessonsCount))," "),s(3),E(" ",l(19,17,e.date)," "),s(3),v(B(22,19,e.date,"dd.MM.yyyy"))}}function Ze(n,g){if(n&1){let e=D();c(0,"div",4)(1,"div",8)(2,"div",9)(3,"input",10),M("change",function(i){O(e);let o=f();return $(o.onToggleAll(i.currentTarget==null?null:i.currentTarget.checked))}),r()(),G(4,Qe,4,5,"div",11,oe),r(),G(6,Xe,23,29,"div",null,ze),r()}if(n&2){let e=f(),t=I(0),i=I(2);s(3),C("checked",t.length===i.length),s(),J(e.primarySortKeys),s(2),J(i)}}var Ve=(()=>{class n{constructor(e,t,i){this.openAbsencesService=e,this.selectionService=t,this.scrollPosition=i,this.primarySortKeys=["name","date"],this.destroy$=new k}ngOnInit(){this.openAbsencesService.currentDetail=null,this.selectionService.clearNonOpenAbsencesEntries()}ngAfterViewInit(){this.scrollPosition.restore()}ngOnDestroy(){this.destroy$.next()}onToggleAll(e){this.openAbsencesService.filteredEntries$.pipe(_(1)).subscribe(t=>{this.selectionService.clear(e?t:null)})}onCheckboxCellClick(e,t){e.target!==t&&t.click()}getSortDirectionCharacter(e,t){return e.primarySortKey!==t?"":e.ascending?"\u2193":"\u2191"}getLessonsCountKey(e){return`open-absences.list.content.lessonsCount.${e.lessonsCount===1?"singular":"plural"}`}static{this.\u0275fac=function(t){return new(t||n)(h(A),h(y),h(z))}}static{this.\u0275cmp=P({type:n,selectors:[["bkd-open-absences-list"]],decls:22,vars:29,consts:[["checkbox",""],[1,"d-flex","header-search",3,"valueChange","value","placeholder","label"],[1,"d-flex","align-items-center","justify-content-between","mt-1"],[1,"mt-3"],[1,"content"],[1,"selection-count","ps-1"],["routerLink","/open-absences/confirm",1,"edit","btn","btn-primary","btn-edit","mt-1","mb-2"],[1,"material-icons"],[1,"absence-header"],[1,"checkbox"],["type","checkbox",1,"form-check-input",3,"change","checked"],[3,"className"],[3,"click","className"],[1,"sort-direction"],[1,"absence-entry"],[1,"checkbox",3,"click"],[1,"name","pe-2"],[3,"routerLink"],[1,"study-class"],[1,"lessons-count"],[1,"study-class-lessons-count"],[1,"days-ago"],[1,"date"]],template:function(t,i){if(t&1){let o=D();F(0),a(1,"async"),F(2),a(3,"async"),F(4),a(5,"async"),F(6),a(7,"async"),c(8,"h1"),u(9),a(10,"translate"),r(),c(11,"div")(12,"div")(13,"bkd-resettable-input",1),a(14,"async"),a(15,"translate"),a(16,"translate"),M("valueChange",function(p){return O(o),$(i.openAbsencesService.search$.next(p))}),r(),w(17,We,7,8,"div",2),r(),w(18,Ye,1,0,"bkd-spinner"),a(19,"async"),w(20,Ge,3,3,"p",3)(21,Ze,8,1,"div",4),r()}if(t&2){let o,d,p;U((o=l(1,6,i.selectionService.selection$))!==null&&o!==void 0?o:j(27,Ne)),s(2);let L=U((d=l(3,9,i.openAbsencesService.filteredEntries$))!==null&&d!==void 0?d:j(28,Ne));s(2),U(l(5,12,i.openAbsencesService.sortCriteria$));let m=((p=(p=l(7,15,i.openAbsencesService.sortedEntries$))==null?null:p.length)!==null&&p!==void 0?p:0)===0||L.length===0;s(5),v(l(10,17,"open-absences.title")),s(4),C("value",l(14,19,i.openAbsencesService.search$))("placeholder",l(15,21,"open-absences.search-by-name-or-class"))("label",l(16,23,"open-absences.search")),s(4),R(m?-1:17),s(),R(l(19,25,i.openAbsencesService.loading$)?18:m?20:21)}},dependencies:[we,be,Me,q,le,fe,Pe],styles:['.header-search[_ngcontent-%COMP%]{max-width:500px}.absence-header[_ngcontent-%COMP%]{cursor:pointer;padding:1rem;display:grid;grid-template-areas:"checkbox name date";grid-template-columns:min-content 5fr 1fr;border-top:1px solid #dee2e6;border-bottom:2px solid #dee2e6;align-items:center}.absence-entry[_ngcontent-%COMP%]{padding:1rem;border-bottom:1px solid #dee2e6;display:grid;grid-template-areas:"checkbox name study-class lessons-count days-ago date";grid-template-columns:min-content 2fr 1fr 1fr 1fr 1fr;align-items:center}.checkbox[_ngcontent-%COMP%]{align-self:start;grid-area:checkbox;margin:0;padding:.3rem 1rem 0 0}.checkbox[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{position:static!important;margin:0!important;display:block}.name[_ngcontent-%COMP%]{grid-area:name;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.lessons-count[_ngcontent-%COMP%]{grid-area:lessons-count}.study-class[_ngcontent-%COMP%]{grid-area:study-class}.study-class-lessons-count[_ngcontent-%COMP%]{grid-area:study-class-lessons-count;display:none}.days-ago[_ngcontent-%COMP%]{color:#6c757d;grid-area:days-ago}.date[_ngcontent-%COMP%]{grid-area:date}@media (max-width: 750px){.content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.absence-header[_ngcontent-%COMP%]{grid-template-areas:"checkbox name date";grid-template-columns:min-content 3fr 2fr}.absence-entry[_ngcontent-%COMP%]{grid-template-areas:"checkbox name date" "checkbox study-class-lessons-count days-ago";grid-template-columns:min-content 3fr 2fr}.study-class-lessons-count[_ngcontent-%COMP%]{display:block}.study-class[_ngcontent-%COMP%], .lessons-count[_ngcontent-%COMP%]{display:none}.days-ago[_ngcontent-%COMP%], .study-class-lessons-count[_ngcontent-%COMP%]{font-size:.875rem;color:#adb5bd}}'],changeDetection:0})}}return n})();var Re=(()=>{class n{constructor(){}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=P({type:n,selectors:[["bkd-open-absences"]],features:[ae([A,y,{provide:ve,useExisting:A}])],decls:1,vars:0,template:function(t,i){t&1&&x(0,"router-outlet")},dependencies:[me],encapsulation:2,changeDetection:0})}}return n})();var Bt=[{path:"",component:Re,children:[{path:"",component:Ve,data:{restoreScrollPositionFrom:["/open-absences/detail/:personId/:date","/open-absences/confirm"]}},{path:"detail/:personId/:date",component:Be,data:{restoreScrollPositionFrom:["/open-absences/confirm"]}},{path:"confirm",component:Oe}]}];export{Bt as OPEN_ABSENCES_ROUTES};
