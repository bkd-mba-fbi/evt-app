import{a as Ae,b as De,c as Le,d as Ve,e as Fe}from"./chunk-B57Y3D3Y.js";import"./chunk-HCNFZOWE.js";import{b as Be}from"./chunk-MQKQDCN4.js";import"./chunk-AYQPMCNZ.js";import"./chunk-Z4YBXGVO.js";import{b as $e,d as Ne}from"./chunk-3L4RH6QP.js";import"./chunk-XAZECV42.js";import{a as W}from"./chunk-G6EB45SC.js";import{i as Ie}from"./chunk-XFA6UPZX.js";import{b as Te}from"./chunk-PSYDBHTH.js";import{c as ge,d as be,e as Se,f as Pe,g as Me,w as ke}from"./chunk-W4U7QKJF.js";import{a as we}from"./chunk-AVBHFGIF.js";import{$a as o,Ab as F,Ad as he,B as K,Bb as R,Bd as xe,Cb as v,Db as le,F as U,Ga as x,J as Q,Jb as a,Kb as s,Lb as E,M as j,Na as _,O as X,Od as Ee,P as I,Pa as ne,Pd as D,Qa as y,Ra as oe,Va as u,X as ee,Xa as z,Ya as T,Za as $,_ as te,_a as r,ab as m,cc as A,da as ie,dc as G,ea as S,eb as w,fa as P,fd as ce,g as N,gb as M,h as Z,hb as c,hd as me,id as fe,jd as _e,kb as B,l as O,m as q,n as k,nd as ue,qb as b,rb as l,rd as ye,sb as C,sd as ve,tb as f,ub as re,vb as ae,x as J,xa as n,xc as pe,ya as g,yc as de,zc as se,zd as Ce}from"./chunk-2W7IS4PN.js";var Y="no_access",V=(()=>{class e{constructor(t){this.profileService=t,this.reset$=new N(void 0),this.rawProfile$=this.reset$.pipe(I(()=>this.loadProfile()),j(1)),this.profile$=this.rawProfile$.pipe(k(i=>i===Y?null:i)),this.noAccess$=this.rawProfile$.pipe(k(i=>i===Y)),this.loading$=this.profileService.loading$}reset(){this.reset$.next()}loadProfile(){return this.profileService.getMyProfile().pipe(K(t=>t.status===403?O(Y):q(()=>t)))}static{this.\u0275fac=function(i){return new(i||e)(te(Ae))}}static{this.\u0275prov=ee({token:e,factory:e.\u0275fac})}}return e})();function Ze(e,d){if(e&1&&(r(0,"div"),l(1),o()),e&2){c(2);let t=v(2);n(),f(" ",t.AddressLine2," ")}}function qe(e,d){if(e&1&&(r(0,"div",5),l(1),a(2,"translate"),o()),e&2){let t=d.$implicit;n(),f(" ",E(2,1,"global.validation-errors."+t.error,t.params)," ")}}function Je(e,d){if(e&1&&(r(0,"div",13),l(1),a(2,"translate"),o()),e&2){let t=d.$implicit;n(),f(" ",E(2,1,"global.validation-errors."+t.error,t.params)," ")}}function Ke(e,d){e&1&&(r(0,"div",18)(1,"span",19),l(2,"Loading..."),o()())}function Qe(e,d){if(e&1){let t=w();r(0,"form",2),M("ngSubmit",function(){S(t);let p=c();return P(p.onSubmit())}),r(1,"div",3)(2,"p"),l(3),a(4,"translate"),o(),r(5,"address",4)(6,"div"),l(7),o(),_(8,Ze,2,1,"div"),r(9,"div"),l(10),o()()(),T(11,qe,3,4,"div",5,z),a(13,"async"),r(14,"div",3)(15,"label",6),l(16),a(17,"translate"),o(),m(18,"input",7),o(),r(19,"div",3)(20,"label",8),l(21),a(22,"translate"),o(),m(23,"input",9),r(24,"small",10),l(25),a(26,"translate"),o()(),r(27,"div",3)(28,"label",11),l(29),a(30,"translate"),o(),m(31,"input",12),a(32,"async"),T(33,Je,3,4,"div",13,z),a(35,"async"),r(36,"small",14),l(37),a(38,"translate"),o()(),r(39,"div",15)(40,"button",16),a(41,"async"),M("click",function(){S(t);let p=c();return P(p.cancel())}),l(42),a(43,"translate"),o(),r(44,"button",17),a(45,"async"),l(46),a(47,"translate"),_(48,Ke,3,0,"div",18),a(49,"async"),o()()()}if(e&2){let t,i=c(),p=v(0),h=v(2);y("formGroup",p),n(3),C(s(4,18,"my-profile.edit.address-changes-remark")),n(4),C(h.AddressLine1),n(),u(h.AddressLine2?8:-1),n(2),re("",h.Zip||""," ",h.Location,""),n(),$(s(13,20,i.formErrors$)),n(5),f(" ",s(17,22,"my-profile.edit.fields.phone-private")," "),n(5),f(" ",s(22,24,"my-profile.edit.fields.phone-mobile")," "),n(4),C(s(26,26,"my-profile.edit.fields.phone-mobile-hint")),n(4),f(" ",s(30,28,"my-profile.edit.fields.email2")," "),n(2),oe("is-invalid",((t=(t=s(32,30,i.email2Errors$))==null?null:t.length)!==null&&t!==void 0?t:0)>0),n(2),$(s(35,32,i.email2Errors$)),n(4),C(s(38,34,"my-profile.edit.fields.email2-hint")),n(3),y("disabled",s(41,36,i.saving$)),n(2),f(" ",s(43,38,"my-profile.edit.cancel")," "),n(2),y("disabled",s(45,40,i.saving$)),n(2),f(" ",s(47,42,"my-profile.edit.save")," "),n(2),u(s(49,44,i.saving$)?48:-1)}}var Oe=(()=>{class e{constructor(t,i,p,h,H,We){this.fb=t,this.router=i,this.toastService=p,this.translate=h,this.profileService=H,this.personsService=We,this.student$=this.profileService.profile$.pipe(J(ke),k(({student:Ye})=>Ye)),this.formGroup$=this.student$.pipe(k(this.createFormGroup.bind(this)),j(1)),this.saving$=new N(!1),this.submitted$=new N(!1),this.formErrors$=W(this.formGroup$,this.submitted$),this.email2Errors$=W(this.formGroup$,this.submitted$,"email2")}cancel(){this.navigateBack()}onSubmit(){this.submitted$.next(!0),this.formGroup$.pipe(U(1)).subscribe(t=>{if(t.valid){let{phonePrivate:i,phoneMobile:p,email2:h}=t.value;this.save(i?.trim()||null,p?.trim()||null,h||null)}})}createFormGroup(t){return this.fb.group({phonePrivate:[t.PhonePrivate],phoneMobile:[t.PhoneMobile],email2:[t.Email2,me.email]})}save(t,i,p){this.saving$.next(!0),this.student$.pipe(U(1),I(h=>this.personsService.update(h.Id,t,i,p)),Q(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}onSaveSuccess(){this.profileService.reset(),this.toastService.success(this.translate.instant("my-profile.edit.save-success")),this.navigateBack()}navigateBack(){this.router.navigate(["/my-profile"])}static{this.\u0275fac=function(i){return new(i||e)(g(Ce),g(de),g(we),g(Ee),g(V),g(Be))}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-edit"]],decls:9,vars:10,consts:[[1,"bkd-container","bkd-container-limited"],[3,"formGroup"],[3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"text-muted"],[1,"alert","alert-danger"],["id","my-profile-phone-private",1,"form-label"],["id","my-profile-phone-private","formControlName","phonePrivate","type","tel",1,"form-control"],["id","my-profile-phone-mobile",1,"form-label"],["id","my-profile-phone-mobile","formControlName","phoneMobile","type","tel","aria-describedby","my-profile-phone-mobile-hint",1,"form-control"],["id","my-profile-phone-mobile-hint",1,"form-text"],["for","my-profile-email2",1,"form-label"],["id","my-profile-email2","formControlName","email2","type","email","aria-describedby","my-profile-email2-hint",1,"form-control"],[1,"invalid-feedback"],["id","my-profile-email2-hint",1,"form-text"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],["type","submit",1,"btn","btn-primary","ms-2",3,"disabled"],["role","status",1,"spinner-border","spinner-border-sm","align-middle"],[1,"visually-hidden"]],template:function(i,p){if(i&1&&(F(0),a(1,"async"),F(2),a(3,"async"),r(4,"div",0)(5,"h1"),l(6),a(7,"translate"),o(),_(8,Qe,50,46,"form",1),o()),i&2){let h=R(s(1,2,p.formGroup$));n(2);let H=R(s(3,5,p.student$));n(4),C(s(7,8,"my-profile.edit.title")),n(2),u(h&&H?8:-1)}},dependencies:[he,ue,ce,fe,_e,xe,ye,ve,A,D],encapsulation:2,changeDetection:0})}}return e})();var je=(()=>{class e{constructor(){}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-address"]],inputs:{address:"address"},decls:2,vars:1,template:function(i,p){i&1&&(r(0,"address"),l(1),o()),i&2&&(n(),C(p.address))},styles:["[_nghost-%COMP%]{padding:1rem}address[_ngcontent-%COMP%]{white-space:pre-wrap}"],changeDetection:0})}}return e})();var Ge=(()=>{class e{constructor(){}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-entry"]],inputs:{label:"label",value:"value"},decls:6,vars:4,consts:[[1,"row"],[1,"col-md-6"]],template:function(i,p){i&1&&(r(0,"dl",0)(1,"dt",1),l(2),a(3,"translate"),o(),r(4,"dd",1),l(5),o()()),i&2&&(n(2),C(s(3,2,p.label)),n(3),C(p.value))},dependencies:[D],styles:["dl[_ngcontent-%COMP%]{padding:0 1rem}dt[_ngcontent-%COMP%]{font-weight:400;color:#00000080}"],changeDetection:0})}}return e})();function Xe(e,d){if(e&1&&(r(0,"span"),l(1),o()),e&2){let t=c(2);n(),f("(",t.student.Gender,")")}}function et(e,d){if(e&1&&(r(0,"div",0)(1,"div",2),m(2,"bkd-avatar",3),r(3,"div",4),l(4),_(5,Xe,2,1,"span"),r(6,"div",5),l(7),a(8,"date"),o()()(),m(9,"bkd-reports-link",6),a(10,"async"),o()),e&2){let t=c();n(2),y("studentId",t.student.Id),n(2),ae(" ",t.student.LastName," ",t.student.FirstName," ",t.student.MiddleName," "),n(),u(t.student.Gender?5:-1),n(2),f(" ",E(8,7,t.student.Birthdate,"dd.MM.yyyy")," "),n(2),y("reports",s(10,10,t.reports$))}}function tt(e,d){if(e&1&&(r(0,"div",1),l(1),o()),e&2){let t=c();n(),C(t.student.Email)}}var He=(()=>{class e{constructor(t){this.reportsService=t,this.studentId$=new Z(1),this.reports$=this.studentId$.pipe(I(i=>i?this.reportsService.getPersonMasterDataReports(i):O([])),X([]))}ngOnChanges(t){t.student&&this.studentId$.next(t.student.currentValue?.Id||null)}static{this.\u0275fac=function(i){return new(i||e)(g(Ne))}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-header"]],inputs:{student:"student"},features:[ie],decls:2,vars:2,consts:[[1,"avatar-person"],[1,"email"],[1,"d-flex"],[1,"me-3","avatar","large",3,"studentId"],[1,"person"],[1,"birthdate"],[3,"reports"]],template:function(i,p){i&1&&_(0,et,11,12,"div",0)(1,tt,2,1,"div",1),i&2&&(u(p.student?0:-1),n(),u(p.student?1:-1))},dependencies:[Fe,Ie,A,G],styles:[".avatar-person[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-left:1rem 1rem 1rem 0}.person[_ngcontent-%COMP%]{align-self:center}.email[_ngcontent-%COMP%]{padding:1rem 1rem 0 0}.report[_ngcontent-%COMP%]{align-self:flex-start;line-height:1}"],changeDetection:0})}}return e})();var it=(e,d)=>d.apprenticeshipContract.Id,nt=(e,d)=>d.Id;function ot(e,d){e&1&&m(0,"bkd-spinner")}function rt(e,d){e&1&&(r(0,"p",7),l(1),a(2,"translate"),o()),e&2&&(n(),f(" ",s(2,1,"shared.profile.substitution-profile")," "))}function at(e,d){e&1&&(r(0,"p",8),l(1),a(2,"translate"),o()),e&2&&(n(),f(" ",s(2,1,"shared.profile.no-profile")," "))}function lt(e,d){if(e&1&&(_(0,rt,3,3,"p",7),a(1,"async"),_(2,at,3,3,"p",8)),e&2){let t=c();u(s(1,1,t.profileService.noAccess$)?0:2)}}function pt(e,d){if(e&1&&m(0,"bkd-my-profile-entry",12),e&2){c(2);let t=v(0);B("value",t.student.SocialSecurityNumber)}}function dt(e,d){if(e&1&&m(0,"bkd-my-profile-entry",13),e&2){c(2);let t=v(0);B("value",t.student.HomeTown||t.student.Nationality)}}function st(e,d){if(e&1&&m(0,"bkd-my-profile-entry",14),e&2){c(2);let t=v(0);B("value",t.student.NativeLanguage)}}function ct(e,d){if(e&1&&m(0,"bkd-my-profile-entry",15),e&2){c(2);let t=v(0);B("value",t.stayPermitValue)}}function mt(e,d){if(e&1&&(m(0,"bkd-my-profile-entry",16),a(1,"date")),e&2){c(2);let t=v(0);B("value",E(1,1,t.student.StayPermitExpiry,"mediumDate"))}}function ft(e,d){if(e&1&&(r(0,"div",24)(1,"a",25),a(2,"translate"),r(3,"i",26),l(4,"edit"),o()(),m(5,"bkd-student-dossier-address",27),o()),e&2){c(2);let t=v(0);n(),ne("aria-label",s(2,2,"my-profile.edit.title")),n(4),y("student",t.student)}}function _t(e,d){if(e&1&&m(0,"bkd-my-profile-address",28),e&2){c(3);let t=v(0);y("address",t.student.CorrespondenceAddress)}}function ut(e,d){if(e&1){let t=w();r(0,"div",18,1)(2,"div",19)(3,"bkd-student-dossier-entry-header",20),M("click",function(){S(t);let p=b(1);return P(p.toggle())}),l(4),a(5,"translate"),o()(),r(6,"div",21)(7,"div",22),_(8,_t,1,1,"ng-template"),o()()()}if(e&2){let t=b(1);n(3),y("opened",!t.collapsed),n(),f(" ",s(5,2,"shared.profile.correspondence-address")," ")}}function yt(e,d){if(e&1&&m(0,"bkd-my-profile-address",28),e&2){c(3);let t=v(0);y("address",t.student.BillingAddress)}}function vt(e,d){if(e&1){let t=w();r(0,"div",18,2)(2,"div",19)(3,"bkd-student-dossier-entry-header",20),M("click",function(){S(t);let p=b(1);return P(p.toggle())}),l(4),a(5,"translate"),o()(),r(6,"div",21)(7,"div",22),_(8,yt,1,1,"ng-template"),o()()()}if(e&2){let t=b(1);n(3),y("opened",!t.collapsed),n(),f(" ",s(5,2,"shared.profile.billing-address")," ")}}function Ct(e,d){if(e&1&&m(0,"bkd-student-dossier-legal-representative",29),e&2){let t=d.$implicit;y("person",t)}}function ht(e,d){if(e&1&&T(0,Ct,1,1,"bkd-student-dossier-legal-representative",29,nt),e&2){c(3);let t=v(0);$(t.legalRepresentativePersons)}}function xt(e,d){if(e&1){let t=w();r(0,"div",18,3)(2,"div",19)(3,"bkd-student-dossier-entry-header",20),M("click",function(){S(t);let p=b(1);return P(p.toggle())}),l(4),a(5,"translate"),o()(),r(6,"div",21)(7,"div",22),_(8,ht,2,0,"ng-template"),o()()()}if(e&2){let t=b(1);n(3),y("opened",!t.collapsed),n(),f(" ",s(5,2,"shared.profile.legal-representation")," ")}}function gt(e,d){if(e&1&&l(0),e&2){let t=c().$index;f(" ",t+1," ")}}function bt(e,d){if(e&1&&m(0,"bkd-student-dossier-apprenticeship-company",30),e&2){let t=c().$implicit;y("company",t)}}function St(e,d){if(e&1){let t=w();r(0,"div",23,4)(2,"div",19)(3,"bkd-student-dossier-entry-header",20),M("click",function(){S(t);let p=b(1);return P(p.toggle())}),l(4),a(5,"translate"),_(6,gt,1,1),o()(),r(7,"div",21)(8,"div",22),_(9,bt,1,1,"ng-template"),o()()()}if(e&2){let t=b(1);c(2);let i=v(0);n(3),y("opened",!t.collapsed),n(),f(" ",s(5,3,"shared.profile.apprenticeship-company")," "),n(2),u(i.apprenticeshipCompanies.length>1?6:-1)}}function Pt(e,d){if(e&1){let t=w();m(0,"bkd-my-profile-header",9),r(1,"div",10)(2,"div",11),_(3,pt,1,1,"bkd-my-profile-entry",12)(4,dt,1,1,"bkd-my-profile-entry",13)(5,st,1,1,"bkd-my-profile-entry",14)(6,ct,1,1,"bkd-my-profile-entry",15)(7,mt,2,4,"bkd-my-profile-entry",16),o(),r(8,"div",17)(9,"div",18,0)(11,"div",19)(12,"bkd-student-dossier-entry-header",20),M("click",function(){S(t);let p=b(10);return P(p.toggle())}),l(13),a(14,"translate"),o()(),r(15,"div",21)(16,"div",22),_(17,ft,6,4,"ng-template"),o()()(),_(18,ut,9,4,"div",18)(19,vt,9,4,"div",18)(20,xt,9,4,"div",18),T(21,St,10,5,"div",23,it),o()()}if(e&2){let t=b(10);c();let i=v(0);y("student",i.student),n(3),u(i.student.SocialSecurityNumber?3:-1),n(),u(i.student.HomeTown||i.student.Nationality?4:-1),n(),u(i.student.NativeLanguage?5:-1),n(),u(i.stayPermitValue?6:-1),n(),u(i.student.StayPermitExpiry?7:-1),n(5),y("opened",!t.collapsed),n(),f(" ",s(14,11,"shared.profile.student-address")," "),n(5),u(i.student.CorrespondenceAddress?18:-1),n(),u(i.student.BillingAddress?19:-1),n(),u(i.legalRepresentativePersons.length>0?20:-1),n(),$(i.apprenticeshipCompanies)}}var Ue=(()=>{class e{constructor(t){this.profileService=t}static{this.\u0275fac=function(i){return new(i||e)(g(V))}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile-show"]],decls:10,vars:9,consts:[["studentAddress","ngbAccordionItem"],["correspondenceAddress","ngbAccordionItem"],["billingAddress","ngbAccordionItem"],["legalRepresentatives","ngbAccordionItem"],["apprenticeshipCompanies","ngbAccordionItem"],[1,"bkd-container","bkd-container-limited"],["data-testid","profile-title"],["data-testid","profile-substitution"],["data-testid","profile-none"],[3,"student"],["data-testid","profile-content",1,"profile-content"],[1,"profile-entries","pt-3"],["label","my-profile.show.social-security-number",3,"value"],["label","my-profile.show.hometown-nationality",3,"value"],["label","my-profile.show.native-language",3,"value"],["label","my-profile.show.stay-permit",3,"value"],["label","my-profile.show.stay-permit-expiry",3,"value"],["ngbAccordion",""],["ngbAccordionItem",""],["ngbAccordionHeader",""],[3,"click","opened"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[3,"ngbAccordionItem"],[1,"clearfix"],["routerLink","edit",1,"btn","btn-primary","btn-icon","float-end","me-2"],[1,"material-icons"],["emailProperty","Email2",1,"profile-entry",3,"student"],[1,"profile-entry",3,"address"],[1,"profile-entry",3,"person"],[1,"profile-entry",3,"company"]],template:function(i,p){if(i&1&&(F(0),a(1,"async"),r(2,"div",5)(3,"h1",6),l(4),a(5,"translate"),o(),_(6,ot,1,0,"bkd-spinner"),a(7,"async"),_(8,lt,3,3)(9,Pt,23,13),o()),i&2){let h=R(s(1,2,p.profileService.profile$));n(4),C(s(5,5,"my-profile.title")),n(2),u(s(7,7,p.profileService.loading$)?6:h?9:8)}},dependencies:[He,Ge,Me,Pe,Se,$e,be,ge,se,De,je,Ve,Le,Te,A,G,D],styles:[".profile-content[_ngcontent-%COMP%]{padding-top:1rem}.profile-entry[_ngcontent-%COMP%]{display:block;padding:0 1rem}.profile-entries[_ngcontent-%COMP%]:not(:empty){border-top:1px solid rgb(222,222,222)}"],changeDetection:0})}}return e})();var ze=(()=>{class e{constructor(){}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=x({type:e,selectors:[["bkd-my-profile"]],features:[le([V])],decls:1,vars:0,template:function(i,p){i&1&&m(0,"router-outlet")},dependencies:[pe],encapsulation:2,changeDetection:0})}}return e})();var yi=[{path:"",component:ze,children:[{path:"",component:Ue},{path:"edit",component:Oe}]}];export{yi as MY_PROFILE_ROUTES};
