import{a as Y}from"./chunk-N2RKIMWO.js";import{a as pe,b as le}from"./chunk-SKUS47ZU.js";import{f as ce,g as me}from"./chunk-26VH6QDS.js";import{d as K}from"./chunk-K42F6AEW.js";import{g as Z,h as J,i as se}from"./chunk-SL67CYEF.js";import{a as O,b as q}from"./chunk-HQSONWXM.js";import{x as V}from"./chunk-RXRYDGZR.js";import{$ as u,Ec as oe,Ia as M,La as ee,Mc as d,Nb as h,Nc as U,Ob as x,P as F,Pa as b,Pb as j,Sa as te,Sc as z,Sd as re,Ta as ne,Ud as N,X as D,Xa as p,Zc as f,_c as R,ab as c,bb as m,cb as s,da as X,ec as ie,hc as ae,hd as E,jb as l,l as P,n as G,nb as y,o as T,oc as B,qc as w,vb as o,wb as S,x as W,xa as g,xb as C,ya as a,yb as v}from"./chunk-NEW5VGRB.js";function xe(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();C(" ",e.student.AddressLine2,"")}}function ve(t,r){if(t&1&&(c(0,"a",0),o(1),m(),s(2,"br")),t&2){let e=l();y("href","tel:",e.student.PhonePrivate,"",g),a(),C(" ",e.student.PhonePrivate," ")}}function Se(t,r){if(t&1&&(c(0,"a",0),o(1),m(),s(2,"br")),t&2){let e=l();y("href","tel:",e.student.PhoneMobile,"",g),a(),C(" ",e.student.PhoneMobile," ")}}function _e(t,r){if(t&1&&(c(0,"a",0),o(1),m()),t&2){let e=l();y("href","mailto:",e.email,"",g),a(),C(" ",e.email," ")}}var Ge=(()=>{class t{constructor(){this.emailProperty="DisplayEmail"}get postalCode(){return"PostalCode"in this.student?this.student.PostalCode:this.student.Zip}get email(){return this.emailProperty==="Email2"&&"Email2"in this.student?this.student.Email2||null:this.student.DisplayEmail}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=M({type:t,selectors:[["bkd-student-dossier-address"]],inputs:{student:"student",emailProperty:"emailProperty"},decls:9,vars:7,consts:[[3,"href"]],template:function(i,n){i&1&&(c(0,"address"),o(1),s(2,"br"),b(3,xe,2,1),o(4),s(5,"br"),b(6,ve,3,3)(7,Se,3,3)(8,_e,2,3,"a",0),m()),i&2&&(a(),C(" ",n.student.AddressLine1,""),a(2),p(n.student.AddressLine2?3:-1),a(),v(" ",n.postalCode||""," ",n.student.Location,""),a(2),p(n.student.PhonePrivate?6:-1),a(),p(n.student.PhoneMobile?7:-1),a(),p(n.email?8:-1))},encapsulation:2,changeDetection:0})}}return t})();var $=(()=>{class t{transform(e){return e?.DisplayEmail||e?.Email||e?.Email2||null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=ee({name:"bkdPersonEmail",type:t,pure:!0})}}return t})();function be(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();C(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.CompanyName,"")}}function Pe(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();C(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.CompanyNameAddition,"")}}function Me(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();v(" ",(e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.Lastname)||""," ",(e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.Firstname)||"","")}}function Ie(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();C(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.AddressLine1,"")}}function Ae(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();C(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.AddressLine2,"")}}function Te(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();v(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.PostalCode," ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.Location,"")}}function De(t,r){if(t&1&&(c(0,"a",0),o(1),s(2,"br"),m()),t&2){let e=l();y("href","tel:",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.PhoneBusiness,"",g),a(),S(e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.PhoneBusiness)}}function Ee(t,r){if(t&1&&(c(0,"a",0),h(1,"bkdPersonEmail"),o(2),h(3,"bkdPersonEmail"),m()),t&2){let e=l();y("href","mailto:",x(1,3,e.company.apprenticeshipManager),"",g),a(2),S(x(3,5,e.company.apprenticeshipManager))}}function Le(t,r){if(t&1&&(c(0,"div",1),o(1),h(2,"translate"),h(3,"addSpace"),s(4,"br"),o(5),h(6,"date"),h(7,"date"),m()),t&2){let e=l();a(),v(" ",x(2,4,"shared.profile.apprenticeship-period"),"",j(3,6,":",":"),""),a(4),v(" ",j(6,9,e.company.apprenticeshipContract.ContractDateFrom,"dd.MM.yyyy"),"\u2013",j(7,12,e.company.apprenticeshipContract.ContractDateTo,"dd.MM.yyyy")," ")}}function ke(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l(2);v(" ",e.company.jobTrainer.Lastname||""," ",e.company.jobTrainer.Firstname||"","")}}function je(t,r){if(t&1&&(c(0,"a",0),o(1),s(2,"br"),m()),t&2){let e=l(2);y("href","tel:",e.company.jobTrainer.PhoneBusiness,"",g),a(),S(e.company.jobTrainer.PhoneBusiness)}}function Re(t,r){if(t&1&&(c(0,"a",0),o(1),s(2,"br"),m()),t&2){let e=l(2);y("href","tel:",e.company.jobTrainer.PhoneMobile,"",g),a(),S(e.company.jobTrainer.PhoneMobile)}}function Fe(t,r){if(t&1&&(c(0,"a",0),h(1,"bkdPersonEmail"),o(2),h(3,"bkdPersonEmail"),m()),t&2){let e=l(2);y("href","mailto:",x(1,3,e.company.jobTrainer),"",g),a(2),S(x(3,5,e.company.jobTrainer))}}function Be(t,r){if(t&1&&(c(0,"div",1),o(1),h(2,"translate"),h(3,"addSpace"),c(4,"address"),b(5,ke,2,2)(6,je,3,3,"a",0)(7,Re,3,3,"a",0)(8,Fe,4,7,"a",0),h(9,"bkdPersonEmail"),m()()),t&2){let e=l();a(),v(" ",x(2,6,"shared.profile.job-trainer"),"",j(3,8,":",":")," "),a(4),p(e.company.jobTrainer.Lastname||e.company.jobTrainer.Firstname?5:-1),a(),p(e.company.jobTrainer.PhoneBusiness?6:-1),a(),p(e.company.jobTrainer.PhoneMobile?7:-1),a(),p(x(9,11,e.company.jobTrainer)?8:-1)}}var Xe=(()=>{class t{constructor(){}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=M({type:t,selectors:[["bkd-student-dossier-apprenticeship-company"]],inputs:{company:"company"},decls:12,vars:12,consts:[[3,"href"],[1,"subentry"]],template:function(i,n){i&1&&(c(0,"address"),b(1,be,2,1)(2,Pe,2,1)(3,Me,2,2)(4,Ie,2,1)(5,Ae,2,1)(6,Te,2,2)(7,De,3,3,"a",0)(8,Ee,4,7,"a",0),h(9,"bkdPersonEmail"),m(),b(10,Le,8,15,"div",1)(11,Be,10,13,"div",1)),i&2&&(a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.CompanyName?1:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.CompanyNameAddition?2:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.Lastname||n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.Firstname?3:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.AddressLine1?4:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.AddressLine2?5:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.PostalCode&&(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.Location)?6:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.PhoneBusiness?7:-1),a(),p(x(9,10,n.company.apprenticeshipManager)?8:-1),a(2),p(n.company.apprenticeshipContract.ContractDateFrom?10:-1),a(),p(n.company.jobTrainer?11:-1))},dependencies:[ae,re,me,$],styles:[".subentry[_ngcontent-%COMP%]{padding-bottom:1rem}"],changeDetection:0})}}return t})();function we(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();C(" ",e.person.AddressLine1,"")}}function Ue(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();C(" ",e.person.AddressLine2,"")}}function ze(t,r){if(t&1&&(o(0),s(1,"br")),t&2){let e=l();v(" ",e.person.Zip," ",e.person.Location,"")}}function Ne(t,r){if(t&1&&(c(0,"a",0),o(1),s(2,"br"),m()),t&2){let e=l();y("href","tel:",e.person.PhonePrivate,"",g),a(),S(e.person.PhonePrivate)}}function Oe(t,r){if(t&1&&(c(0,"a",0),o(1),s(2,"br"),m()),t&2){let e=l();y("href","tel:",e.person.PhoneMobile,"",g),a(),S(e.person.PhoneMobile)}}function Je(t,r){if(t&1&&(c(0,"a",0),h(1,"bkdPersonEmail"),o(2),h(3,"bkdPersonEmail"),m()),t&2){let e=l();y("href","mailto:",x(1,3,e.person),"",g),a(2),S(x(3,5,e.person))}}var nt=(()=>{class t{constructor(){}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=M({type:t,selectors:[["bkd-student-dossier-legal-representative"]],inputs:{person:"person"},decls:10,vars:10,consts:[[3,"href"]],template:function(i,n){i&1&&(c(0,"address"),o(1),s(2,"br"),b(3,we,2,1)(4,Ue,2,1)(5,ze,2,2)(6,Ne,3,3,"a",0)(7,Oe,3,3,"a",0)(8,Je,4,7,"a",0),h(9,"bkdPersonEmail"),m()),i&2&&(a(),v(" ",n.person.LastName," ",n.person.FirstName,""),a(2),p(n.person.AddressLine1?3:-1),a(),p(n.person.AddressLine2?4:-1),a(),p(n.person.Zip&&n.person.Zip?5:-1),a(),p(n.person.PhonePrivate?6:-1),a(),p(n.person.PhoneMobile?7:-1),a(),p(x(9,8,n.person)?8:-1))},dependencies:[$],encapsulation:2,changeDetection:0})}}return t})();var de=z({Email:f(d),Email2:f(d),PhoneBusiness:f(d),CompanyName:R(d),CompanyNameAddition:R(d),Firstname:f(d),Lastname:f(d),AddressLine1:R(d),AddressLine2:R(d),PostalCode:f(d),Location:f(d),Id:U});var ue=(()=>{class t extends O{constructor(){let e=u(w),i=u(E);super(e,i,de,"ApprenticeshipManagers")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var he=z({Email:f(d),Email2:f(d),PhoneBusiness:f(d),PhoneMobile:f(d),Firstname:f(d),Lastname:f(d),Id:U});var fe=(()=>{class t extends O{constructor(){let e=u(w),i=u(E);super(e,i,he,"JobTrainers")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Q(t,r){let e=+Z(t)-+Z(r);return e<0?-1:e>0?1:e}function ge(t,r,e){let[i,n]=J(e?.in,t,r);return i.getFullYear()-n.getFullYear()}function ye(t,r,e){let[i,n]=J(e?.in,t,r),_=Q(i,n),L=Math.abs(ge(i,n));i.setFullYear(1584),n.setFullYear(1584);let k=Q(i,n)===-_,A=_*(L-+k);return A===0?0:A}var $e=18;function Ce(t){return ye(new Date,t.Birthdate||new Date)>=$e}var qt=(()=>{class t{constructor(){this.studentService=u(ce),this.personsService=u(le),this.apprenticeshipManagersService=u(ue),this.jobTrainersService=u(fe),this.loadingService=u(se),this.dropDownItemsService=u(pe),this.storageService=u(N),this.loading$=this.loadingService.loading$}getProfile(e){return this.loadingService.load(T([this.loadStudent(e),this.loadLegalRepresentatives(e),this.loadApprenticeshipContracts(e)]).pipe(F(K(this.mapToProfile.bind(this)))))}getMyProfile(){let i=(this.storageService.getPayload()?.roles?.split(";")??[]).includes("StudentRole");return this.loadingService.load(this.personsService.getMyself({context:new B().set(Y,{disableErrorHandlingForStatus:[403]})}).pipe(F(n=>T([P(n),i?this.loadLegalRepresentatives(n.Id):P([]),i?this.loadApprenticeshipContracts(n.Id):P([]),this.loadStayPermitValue(n.StayPermit)]))).pipe(F(K(this.mapToProfile.bind(this))),W(V)))}loadStudent(e){return this.studentService.get(e,{context:new B().set(Y,{disableErrorHandlingForStatus:[404]})}).pipe(q())}loadLegalRepresentatives(e){return this.studentService.getLegalRepresentatives(e)}loadApprenticeshipContracts(e){return this.studentService.getCurrentApprenticeshipContracts(e,{context:new B().set(Y,{disableErrorHandlingForStatus:[404]})}).pipe(q([]))}loadStayPermitValue(e){return this.dropDownItemsService.getStayPermits().pipe(G(i=>i.find(n=>n.Key===e)?.Value||null))}mapToProfile(e,i,n,_=null){return e?(i=this.getRelevantLegalRepresentatives(e,i),T([this.loadLegalRepresentativPersons(i),this.loadJobTrainers(n),this.loadApprenticeshipManagers(n)]).pipe(G(([L,k,A])=>this.createProfile(e,_,i,L,n,A,k)))):P(null)}loadLegalRepresentativPersons(e){return e.length===0?P([]):this.personsService.getListForIds(e.map(i=>i.RepresentativeId))}loadJobTrainers(e){let i=e.map(n=>n.JobTrainer).filter(n=>typeof n=="number");return i.length===0?P([]):T(i.map(n=>this.jobTrainersService.get(n)))}loadApprenticeshipManagers(e){let i=e.map(n=>n.ApprenticeshipManagerId);return i.length===0?P([]):T(i.map(n=>this.apprenticeshipManagersService.get(n)))}createProfile(e,i,n,_,L,k,A){return{student:e,stayPermitValue:i||void 0,legalRepresentativePersons:n.map(H=>this.findPerson(H.RepresentativeId,_)).filter(V),apprenticeshipCompanies:L.map(H=>this.createApprenticeshipCompany(H,k,A))}}getRelevantLegalRepresentatives(e,i){let n=Ce(e);return i.filter(_=>!n||_.RepresentativeAfterMajority)}createApprenticeshipCompany(e,i,n){return{apprenticeshipContract:e,jobTrainer:this.findPerson(e.JobTrainer,n),apprenticeshipManager:this.findPerson(e.ApprenticeshipManagerId,i)}}findPerson(e,i){return e&&i.find(n=>n.Id===e)||null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var on=(()=>{class t{constructor(){this.settings=u(E),this.storageService=u(N),this.avatarStyles={}}ngOnChanges(e){e.studentId&&(this.avatarStyles=this.buildAvatarStyles(this.studentId))}buildAvatarStyles(e){return{"background-image":[this.buildAvatarUrl(e),this.fallbackAvatarUrl].map(i=>`url(${i})`).join(", ")}}buildAvatarUrl(e){let i=this.storageService.getAccessToken()||"";return`${this.settings.apiUrl}/Files/personPictures/${e}?token=${i}`}get fallbackAvatarUrl(){return`${this.settings.scriptsAndAssetsPath}/assets/images/avatar-placeholder.png`}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=M({type:t,selectors:[["bkd-avatar"]],inputs:{studentId:"studentId",link:"link",linkParams:"linkParams"},features:[X],decls:1,vars:5,consts:[[1,"avatar",3,"routerLink","queryParams","ngStyle"]],template:function(i,n){i&1&&s(0,"a",0),i&2&&(ne("disabled",!n.link),te("routerLink",n.link)("queryParams",n.linkParams)("ngStyle",n.avatarStyles))},dependencies:[oe,ie],styles:["[_nghost-%COMP%]{display:flex}.small[_nghost-%COMP%]{width:40px;min-width:40px;height:50px}.medium[_nghost-%COMP%]{width:58px;min-width:58px;height:75px}.large[_nghost-%COMP%]{width:100px;min-width:100px;height:130px}.avatar[_ngcontent-%COMP%]{flex:1;border:1px solid rgba(0,0,0,.25);background-repeat:no-repeat;background-size:cover;background-position:center}a.disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:default}"]})}}return t})();export{qt as a,Ge as b,Xe as c,nt as d,on as e};
