import{a as Le,b as Fe,c as Ve,d as Ne,e as Oe}from"./chunk-7VKKHU7R.js";import"./chunk-2H6IFZM2.js";import{b as De}from"./chunk-7FRZV7VF.js";import"./chunk-OFB4XAK2.js";import"./chunk-VUPOI3TG.js";import{b as Ae,d as Re}from"./chunk-WACRWBCS.js";import"./chunk-YUHFF3NM.js";import{a as Z}from"./chunk-NL5E3FC5.js";import{a as $e}from"./chunk-YD3RJIHU.js";import{b as Be}from"./chunk-KK2SHN2W.js";import{a as Se,b as Pe,c as Me,d as we,e as Ee,u as Te}from"./chunk-AP373D4K.js";import{a as ke}from"./chunk-B6WYZ7BT.js";import{$c as fe,Ab as g,B as X,F as W,Gb as a,Ha as u,Hb as s,Ib as k,Id as Ie,J as ee,Jd as L,Kd as F,La as re,M as H,Ma as y,Na as ae,O as te,P as T,Ra as _,Ta as Y,Ua as $,Va as B,Wa as r,X as ie,Xa as o,Ya as c,Zb as D,_ as ne,_b as U,aa as x,ab as E,bd as ue,cb as w,cd as _e,db as m,dd as ye,g as R,gb as A,h as J,ha as oe,hd as ve,ia as P,ja as M,l as G,ld as Ce,m as K,mb as S,md as he,n as I,nb as l,ob as C,pb as f,qb as le,rb as pe,sc as se,tc as me,td as xe,uc as ce,ud as ge,vd as be,wa as n,wb as O,x as Q,xa as b,xb as j,yb as v,zb as de}from"./chunk-IFJN5CDK.js";var q="no_access",N=(()=>{class e{constructor(t){this.profileService=t,this.reset$=new R(void 0),this.rawProfile$=this.reset$.pipe(T(()=>this.loadProfile()),H(1)),this.profile$=this.rawProfile$.pipe(I(i=>i===q?null:i)),this.noAccess$=this.rawProfile$.pipe(I(i=>i===q)),this.loading$=this.profileService.loading$}reset(){this.reset$.next()}loadProfile(){return this.profileService.getMyProfile().pipe(X(t=>t.status===403?G(q):K(()=>t)))}static{this.\u0275fac=function(i){return new(i||e)(ne(Le))}}static{this.\u0275prov=ie({token:e,factory:e.\u0275fac})}}return e})();function Ke(e,d){if(e&1&&(r(0,"div"),l(1),o()),e&2){m(2);let t=v(2);n(),f(" ",t.AddressLine2," ")}}function Qe(e,d){if(e&1&&(r(0,"div",5),l(1),a(2,"translate"),o()),e&2){let t=d.$implicit;n(),f(" ",k(2,1,"global.validation-errors."+t.error,t.params)," ")}}function Xe(e,d){if(e&1&&(r(0,"div",13),l(1),a(2,"translate"),o()),e&2){let t=d.$implicit;n(),f(" ",k(2,1,"global.validation-errors."+t.error,t.params)," ")}}function et(e,d){e&1&&(r(0,"div",18)(1,"span",19),l(2,"Loading..."),o()())}function tt(e,d){if(e&1){let t=E();r(0,"form",2),w("ngSubmit",function(){P(t);let p=m();return M(p.onSubmit())}),r(1,"div",3)(2,"p"),l(3),a(4,"translate"),o(),r(5,"address",4)(6,"div"),l(7),o(),u(8,Ke,2,1,"div"),r(9,"div"),l(10),o()()(),$(11,Qe,3,4,"div",5,Y),a(13,"async"),r(14,"div",3)(15,"label",6),l(16),a(17,"translate"),o(),c(18,"input",7),o(),r(19,"div",3)(20,"label",8),l(21),a(22,"translate"),o(),c(23,"input",9),r(24,"small",10),l(25),a(26,"translate"),o()(),r(27,"div",3)(28,"label",11),l(29),a(30,"translate"),o(),c(31,"input",12),a(32,"async"),$(33,Xe,3,4,"div",13,Y),a(35,"async"),r(36,"small",14),l(37),a(38,"translate"),o()(),r(39,"div",15)(40,"button",16),a(41,"async"),w("click",function(){P(t);let p=m();return M(p.cancel())}),l(42),a(43,"translate"),o(),r(44,"button",17),a(45,"async"),l(46),a(47,"translate"),u(48,et,3,0,"div",18),a(49,"async"),o()()()}if(e&2){let t,i=m(),p=v(0),h=v(2);y("formGroup",p),n(3),C(s(4,18,"my-profile.edit.address-changes-remark")),n(4),C(h.AddressLine1),n(),_(h.AddressLine2?8:-1),n(2),le("",h.Zip||""," ",h.Location,""),n(),B(s(13,20,i.formErrors$)),n(5),f(" ",s(17,22,"my-profile.edit.fields.phone-private")," "),n(5),f(" ",s(22,24,"my-profile.edit.fields.phone-mobile")," "),n(4),C(s(26,26,"my-profile.edit.fields.phone-mobile-hint")),n(4),f(" ",s(30,28,"my-profile.edit.fields.email2")," "),n(2),ae("is-invalid",((t=(t=s(32,30,i.email2Errors$))==null?null:t.length)!==null&&t!==void 0?t:0)>0),n(2),B(s(35,32,i.email2Errors$)),n(4),C(s(38,34,"my-profile.edit.fields.email2-hint")),n(3),y("disabled",s(41,36,i.saving$)),n(2),f(" ",s(43,38,"my-profile.edit.cancel")," "),n(2),y("disabled",s(45,40,i.saving$)),n(2),f(" ",s(47,42,"my-profile.edit.save")," "),n(2),_(s(49,44,i.saving$)?48:-1)}}var He=(()=>{class e{constructor(t,i,p,h,z,qe){this.fb=t,this.router=i,this.toastService=p,this.translate=h,this.profileService=z,this.personsService=qe,this.student$=this.profileService.profile$.pipe(Q(Te),I(({student:Je})=>Je)),this.formGroup$=this.student$.pipe(I(this.createFormGroup.bind(this)),H(1)),this.saving$=new R(!1),this.submitted$=new R(!1),this.formErrors$=Z(this.formGroup$,this.submitted$),this.email2Errors$=Z(this.formGroup$,this.submitted$,"email2")}cancel(){this.navigateBack()}onSubmit(){this.submitted$.next(!0),this.formGroup$.pipe(W(1)).subscribe(t=>{if(t.valid){let{phonePrivate:i,phoneMobile:p,email2:h}=t.value;this.save(i?.trim()||null,p?.trim()||null,h||null)}})}createFormGroup(t){return this.fb.group({phonePrivate:[t.PhonePrivate],phoneMobile:[t.PhoneMobile],email2:[t.Email2,ue.email]})}save(t,i,p){this.saving$.next(!0),this.student$.pipe(W(1),T(h=>this.personsService.update(h.Id,t,i,p)),ee(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}onSaveSuccess(){this.profileService.reset(),this.toastService.success(this.translate.instant("my-profile.edit.save-success")),this.navigateBack()}navigateBack(){this.router.navigate(["/my-profile"])}static{this.\u0275fac=function(i){return new(i||e)(b(xe),b(me),b(ke),b(Ie),b(N),b(De))}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-edit"]],standalone:!0,features:[g],decls:9,vars:10,consts:[[1,"bkd-container","bkd-container-limited"],[3,"formGroup"],[3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"text-muted"],[1,"alert","alert-danger"],["id","my-profile-phone-private",1,"form-label"],["id","my-profile-phone-private","formControlName","phonePrivate","type","tel",1,"form-control"],["id","my-profile-phone-mobile",1,"form-label"],["id","my-profile-phone-mobile","formControlName","phoneMobile","type","tel","aria-describedby","my-profile-phone-mobile-hint",1,"form-control"],["id","my-profile-phone-mobile-hint",1,"form-text"],["for","my-profile-email2",1,"form-label"],["id","my-profile-email2","formControlName","email2","type","email","aria-describedby","my-profile-email2-hint",1,"form-control"],[1,"invalid-feedback"],["id","my-profile-email2-hint",1,"form-text"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],["type","submit",1,"btn","btn-primary","ms-2",3,"disabled"],["role","status",1,"spinner-border","spinner-border-sm","align-middle"],[1,"visually-hidden"]],template:function(i,p){if(i&1&&(O(0),a(1,"async"),O(2),a(3,"async"),r(4,"div",0)(5,"h1"),l(6),a(7,"translate"),o(),u(8,tt,50,46,"form",1),o()),i&2){let h=j(s(1,2,p.formGroup$));n(2);let z=j(s(3,5,p.student$));n(4),C(s(7,8,"my-profile.edit.title")),n(2),_(h&&z?8:-1)}},dependencies:[ge,ve,fe,_e,ye,be,Ce,he,D,F,L],changeDetection:0})}}return e})();var Ue=(()=>{class e{constructor(){}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-address"]],inputs:{address:"address"},standalone:!0,features:[g],decls:2,vars:1,template:function(i,p){i&1&&(r(0,"address"),l(1),o()),i&2&&(n(),C(p.address))},styles:["[_nghost-%COMP%]{padding:1rem}address[_ngcontent-%COMP%]{white-space:pre-wrap}"],changeDetection:0})}}return e})();var ze=(()=>{class e{constructor(){}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-entry"]],inputs:{label:"label",value:"value"},standalone:!0,features:[g],decls:6,vars:4,consts:[[1,"row"],[1,"col-md-6"]],template:function(i,p){i&1&&(r(0,"dl",0)(1,"dt",1),l(2),a(3,"translate"),o(),r(4,"dd",1),l(5),o()()),i&2&&(n(2),C(s(3,2,p.label)),n(3),C(p.value))},dependencies:[F,L],styles:["dl[_ngcontent-%COMP%]{padding:0 1rem}dt[_ngcontent-%COMP%]{font-weight:400;color:#00000080}"],changeDetection:0})}}return e})();function it(e,d){if(e&1&&(r(0,"span"),l(1),o()),e&2){let t=m(2);n(),f("(",t.student.Gender,")")}}function nt(e,d){if(e&1&&(r(0,"div",0)(1,"div",2),c(2,"bkd-avatar",3),r(3,"div",4),l(4),u(5,it,2,1,"span"),r(6,"div",5),l(7),a(8,"date"),o()()(),c(9,"bkd-reports-link",6),a(10,"async"),o()),e&2){let t=m();n(2),y("studentId",t.student.Id),n(2),pe(" ",t.student.LastName," ",t.student.FirstName," ",t.student.MiddleName," "),n(),_(t.student.Gender?5:-1),n(2),f(" ",k(8,7,t.student.Birthdate,"dd.MM.yyyy")," "),n(2),y("reports",s(10,10,t.reports$))}}function ot(e,d){if(e&1&&(r(0,"div",1),l(1),o()),e&2){let t=m();n(),C(t.student.Email)}}var We=(()=>{class e{constructor(t){this.reportsService=t,this.studentId$=new J(1),this.reports$=this.studentId$.pipe(T(i=>i?this.reportsService.getPersonMasterDataReports(i):G([])),te([]))}ngOnChanges(t){t.student&&this.studentId$.next(t.student.currentValue?.Id||null)}static{this.\u0275fac=function(i){return new(i||e)(b(Re))}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-header"]],inputs:{student:"student"},standalone:!0,features:[oe,g],decls:2,vars:2,consts:[[1,"avatar-person"],[1,"email"],[1,"d-flex"],[1,"me-3","avatar","large",3,"studentId"],[1,"person"],[1,"birthdate"],[3,"reports"]],template:function(i,p){i&1&&u(0,nt,11,12,"div",0)(1,ot,2,1,"div",1),i&2&&(_(p.student?0:-1),n(),_(p.student?1:-1))},dependencies:[Oe,$e,D,U],styles:[".avatar-person[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-left:1rem 1rem 1rem 0}.person[_ngcontent-%COMP%]{align-self:center}.email[_ngcontent-%COMP%]{padding:1rem 1rem 0 0}.report[_ngcontent-%COMP%]{align-self:flex-start;line-height:1}"],changeDetection:0})}}return e})();var rt=(e,d)=>d.apprenticeshipContract.Id,at=(e,d)=>d.Id;function lt(e,d){e&1&&c(0,"bkd-spinner")}function pt(e,d){e&1&&(r(0,"p",7),l(1),a(2,"translate"),o()),e&2&&(n(),f(" ",s(2,1,"shared.profile.substitution-profile")," "))}function dt(e,d){e&1&&(r(0,"p",8),l(1),a(2,"translate"),o()),e&2&&(n(),f(" ",s(2,1,"shared.profile.no-profile")," "))}function st(e,d){if(e&1&&(u(0,pt,3,3,"p",7),a(1,"async"),u(2,dt,3,3,"p",8)),e&2){let t=m();_(s(1,1,t.profileService.noAccess$)?0:2)}}function mt(e,d){if(e&1&&c(0,"bkd-my-profile-entry",12),e&2){m(2);let t=v(0);A("value",t.student.SocialSecurityNumber)}}function ct(e,d){if(e&1&&c(0,"bkd-my-profile-entry",13),e&2){m(2);let t=v(0);A("value",t.student.HomeTown||t.student.Nationality)}}function ft(e,d){if(e&1&&c(0,"bkd-my-profile-entry",14),e&2){m(2);let t=v(0);A("value",t.student.NativeLanguage)}}function ut(e,d){if(e&1&&c(0,"bkd-my-profile-entry",15),e&2){m(2);let t=v(0);A("value",t.stayPermitValue)}}function _t(e,d){if(e&1&&(c(0,"bkd-my-profile-entry",16),a(1,"date")),e&2){m(2);let t=v(0);A("value",k(1,1,t.student.StayPermitExpiry,"mediumDate"))}}function yt(e,d){if(e&1&&(r(0,"div",24)(1,"a",25),a(2,"translate"),r(3,"i",26),l(4,"edit"),o()(),c(5,"bkd-student-dossier-address",27),o()),e&2){m(2);let t=v(0);n(),re("aria-label",s(2,2,"my-profile.edit.title")),n(4),y("student",t.student)}}function vt(e,d){if(e&1&&c(0,"bkd-my-profile-address",28),e&2){m(3);let t=v(0);y("address",t.student.CorrespondenceAddress)}}function Ct(e,d){if(e&1){let t=E();r(0,"div",18,1)(2,"div",19)(3,"bkd-student-dossier-entry-header",20),w("click",function(){P(t);let p=S(1);return M(p.toggle())}),l(4),a(5,"translate"),o()(),r(6,"div",21)(7,"div",22),u(8,vt,1,1,"ng-template"),o()()()}if(e&2){let t=S(1);n(3),y("opened",!t.collapsed),n(),f(" ",s(5,2,"shared.profile.correspondence-address")," ")}}function ht(e,d){if(e&1&&c(0,"bkd-my-profile-address",28),e&2){m(3);let t=v(0);y("address",t.student.BillingAddress)}}function xt(e,d){if(e&1){let t=E();r(0,"div",18,2)(2,"div",19)(3,"bkd-student-dossier-entry-header",20),w("click",function(){P(t);let p=S(1);return M(p.toggle())}),l(4),a(5,"translate"),o()(),r(6,"div",21)(7,"div",22),u(8,ht,1,1,"ng-template"),o()()()}if(e&2){let t=S(1);n(3),y("opened",!t.collapsed),n(),f(" ",s(5,2,"shared.profile.billing-address")," ")}}function gt(e,d){if(e&1&&c(0,"bkd-student-dossier-legal-representative",29),e&2){let t=d.$implicit;y("person",t)}}function bt(e,d){if(e&1&&$(0,gt,1,1,"bkd-student-dossier-legal-representative",29,at),e&2){m(3);let t=v(0);B(t.legalRepresentativePersons)}}function St(e,d){if(e&1){let t=E();r(0,"div",18,3)(2,"div",19)(3,"bkd-student-dossier-entry-header",20),w("click",function(){P(t);let p=S(1);return M(p.toggle())}),l(4),a(5,"translate"),o()(),r(6,"div",21)(7,"div",22),u(8,bt,2,0,"ng-template"),o()()()}if(e&2){let t=S(1);n(3),y("opened",!t.collapsed),n(),f(" ",s(5,2,"shared.profile.legal-representation")," ")}}function Pt(e,d){if(e&1&&l(0),e&2){let t=m().$index;f(" ",t+1," ")}}function Mt(e,d){if(e&1&&c(0,"bkd-student-dossier-apprenticeship-company",30),e&2){let t=m().$implicit;y("company",t)}}function wt(e,d){if(e&1){let t=E();r(0,"div",23,4)(2,"div",19)(3,"bkd-student-dossier-entry-header",20),w("click",function(){P(t);let p=S(1);return M(p.toggle())}),l(4),a(5,"translate"),u(6,Pt,1,1),o()(),r(7,"div",21)(8,"div",22),u(9,Mt,1,1,"ng-template"),o()()()}if(e&2){let t=S(1);m(2);let i=v(0);n(3),y("opened",!t.collapsed),n(),f(" ",s(5,3,"shared.profile.apprenticeship-company")," "),n(2),_(i.apprenticeshipCompanies.length>1?6:-1)}}function Et(e,d){if(e&1){let t=E();c(0,"bkd-my-profile-header",9),r(1,"div",10)(2,"div",11),u(3,mt,1,1,"bkd-my-profile-entry",12)(4,ct,1,1,"bkd-my-profile-entry",13)(5,ft,1,1,"bkd-my-profile-entry",14)(6,ut,1,1,"bkd-my-profile-entry",15)(7,_t,2,4,"bkd-my-profile-entry",16),o(),r(8,"div",17)(9,"div",18,0)(11,"div",19)(12,"bkd-student-dossier-entry-header",20),w("click",function(){P(t);let p=S(10);return M(p.toggle())}),l(13),a(14,"translate"),o()(),r(15,"div",21)(16,"div",22),u(17,yt,6,4,"ng-template"),o()()(),u(18,Ct,9,4,"div",18)(19,xt,9,4,"div",18)(20,St,9,4,"div",18),$(21,wt,10,5,"div",23,rt),o()()}if(e&2){let t=S(10);m();let i=v(0);y("student",i.student),n(3),_(i.student.SocialSecurityNumber?3:-1),n(),_(i.student.HomeTown||i.student.Nationality?4:-1),n(),_(i.student.NativeLanguage?5:-1),n(),_(i.stayPermitValue?6:-1),n(),_(i.student.StayPermitExpiry?7:-1),n(5),y("opened",!t.collapsed),n(),f(" ",s(14,11,"shared.profile.student-address")," "),n(5),_(i.student.CorrespondenceAddress?18:-1),n(),_(i.student.BillingAddress?19:-1),n(),_(i.legalRepresentativePersons.length>0?20:-1),n(),B(i.apprenticeshipCompanies)}}var Ye=(()=>{class e{constructor(t){this.profileService=t}static{this.\u0275fac=function(i){return new(i||e)(b(N))}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-show"]],standalone:!0,features:[g],decls:10,vars:9,consts:[["studentAddress","ngbAccordionItem"],["correspondenceAddress","ngbAccordionItem"],["billingAddress","ngbAccordionItem"],["legalRepresentatives","ngbAccordionItem"],["apprenticeshipCompanies","ngbAccordionItem"],[1,"bkd-container","bkd-container-limited"],["data-testid","profile-title"],["data-testid","profile-substitution"],["data-testid","profile-none"],[3,"student"],["data-testid","profile-content",1,"profile-content"],[1,"profile-entries","pt-3"],["label","my-profile.show.social-security-number",3,"value"],["label","my-profile.show.hometown-nationality",3,"value"],["label","my-profile.show.native-language",3,"value"],["label","my-profile.show.stay-permit",3,"value"],["label","my-profile.show.stay-permit-expiry",3,"value"],["ngbAccordion",""],["ngbAccordionItem",""],["ngbAccordionHeader",""],[3,"click","opened"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[3,"ngbAccordionItem"],[1,"clearfix"],["routerLink","edit",1,"btn","btn-primary","btn-icon","float-end","me-2"],[1,"material-icons"],["emailProperty","Email2",1,"profile-entry",3,"student"],[1,"profile-entry",3,"address"],[1,"profile-entry",3,"person"],[1,"profile-entry",3,"company"]],template:function(i,p){if(i&1&&(O(0),a(1,"async"),r(2,"div",5)(3,"h1",6),l(4),a(5,"translate"),o(),u(6,lt,1,0,"bkd-spinner"),a(7,"async"),u(8,st,3,3)(9,Et,23,13),o()),i&2){let h=j(s(1,2,p.profileService.profile$));n(4),C(s(5,5,"my-profile.title")),n(2),_(s(7,7,p.profileService.loading$)?6:h?9:8)}},dependencies:[We,ze,Ee,we,Me,Ae,Pe,Se,ce,Fe,Ue,Ne,Ve,Be,D,U,F,L],styles:[".profile-content[_ngcontent-%COMP%]{padding-top:1rem}.profile-entry[_ngcontent-%COMP%]{display:block;padding:0 1rem}.profile-entries[_ngcontent-%COMP%]:not(:empty){border-top:1px solid rgb(222,222,222)}"],changeDetection:0})}}return e})();var Ze=(()=>{class e{constructor(){}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile"]],standalone:!0,features:[de([N]),g],decls:1,vars:0,template:function(i,p){i&1&&c(0,"router-outlet")},dependencies:[se],changeDetection:0})}}return e})();var Ci=[{path:"",component:Ze,children:[{path:"",component:Ye},{path:"edit",component:He}]}];export{Ci as MY_PROFILE_ROUTES};
