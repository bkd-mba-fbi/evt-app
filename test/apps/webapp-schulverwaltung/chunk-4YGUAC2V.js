import{a as $}from"./chunk-2H6IFZM2.js";import{a as ce,b as de}from"./chunk-7FRZV7VF.js";import{d as me,e as fe}from"./chunk-VUPOI3TG.js";import{j as K,k as J,l as Q}from"./chunk-NL5E3FC5.js";import{b as ue}from"./chunk-YD3RJIHU.js";import{a as Y,c as W}from"./chunk-KK2SHN2W.js";import{u as q}from"./chunk-AP373D4K.js";import{Ab as A,Cc as d,Dc as z,Gb as u,Ha as _,Hb as x,Ib as F,Ic as N,Jd as se,Kd as le,Ld as O,Ma as ie,Na as ae,P as B,Pc as f,Qc as R,Ra as p,Wa as c,X as j,Xa as m,Xb as re,Ya as s,Yc as k,_ as h,_b as oe,aa as I,da as te,db as l,ec as w,gc as U,ha as ne,hb as y,l as M,n as V,nb as r,o as L,ob as S,pb as C,qb as v,uc as pe,va as g,wa as a,x as ee,xa as Z}from"./chunk-IFJN5CDK.js";function Se(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();C(" ",e.student.AddressLine2,"")}}function _e(t,o){if(t&1&&(c(0,"a",0),r(1),m(),s(2,"br")),t&2){let e=l();y("href","tel:",e.student.PhonePrivate,"",g),a(),C(" ",e.student.PhonePrivate," ")}}function Pe(t,o){if(t&1&&(c(0,"a",0),r(1),m(),s(2,"br")),t&2){let e=l();y("href","tel:",e.student.PhoneMobile,"",g),a(),C(" ",e.student.PhoneMobile," ")}}function Me(t,o){if(t&1&&(c(0,"a",0),r(1),m()),t&2){let e=l();y("href","mailto:",e.email,"",g),a(),C(" ",e.email," ")}}var Xe=(()=>{class t{constructor(){this.emailProperty="DisplayEmail"}get postalCode(){return"PostalCode"in this.student?this.student.PostalCode:this.student.Zip}get email(){return this.emailProperty==="Email2"&&"Email2"in this.student?this.student.Email2||null:this.student.DisplayEmail}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=I({type:t,selectors:[["bkd-student-dossier-address"]],inputs:{student:"student",emailProperty:"emailProperty"},standalone:!0,features:[A],decls:9,vars:7,consts:[[3,"href"]],template:function(i,n){i&1&&(c(0,"address"),r(1),s(2,"br"),_(3,Se,2,1,"br"),r(4),s(5,"br"),_(6,_e,3,3)(7,Pe,3,3)(8,Me,2,3,"a",0),m()),i&2&&(a(),C(" ",n.student.AddressLine1,""),a(2),p(n.student.AddressLine2?3:-1),a(),v(" ",n.postalCode||""," ",n.student.Location,""),a(2),p(n.student.PhonePrivate?6:-1),a(),p(n.student.PhoneMobile?7:-1),a(),p(n.email?8:-1))},changeDetection:0})}}return t})();var H=(()=>{class t{transform(e){return e?.DisplayEmail||e?.Email||e?.Email2||null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=te({name:"bkdPersonEmail",type:t,pure:!0,standalone:!0})}}return t})();function Ie(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();C(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.CompanyName,"")}}function Ae(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();C(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.CompanyNameAddition,"")}}function Te(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();v(" ",(e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.Lastname)||""," ",(e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.Firstname)||"","")}}function De(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();C(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.AddressLine1,"")}}function Ee(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();C(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.AddressLine2,"")}}function Le(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();v(" ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.PostalCode," ",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.Location,"")}}function je(t,o){if(t&1&&(c(0,"a",0),r(1),s(2,"br"),m()),t&2){let e=l();y("href","tel:",e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.PhoneBusiness,"",g),a(),S(e.company.apprenticeshipManager==null?null:e.company.apprenticeshipManager.PhoneBusiness)}}function ke(t,o){if(t&1&&(c(0,"a",0),u(1,"bkdPersonEmail"),r(2),u(3,"bkdPersonEmail"),m()),t&2){let e=l();y("href","mailto:",x(1,3,e.company.apprenticeshipManager),"",g),a(2),S(x(3,5,e.company.apprenticeshipManager))}}function Fe(t,o){if(t&1&&(c(0,"div",1),r(1),u(2,"translate"),u(3,"addSpace"),s(4,"br"),r(5),u(6,"date"),u(7,"date"),m()),t&2){let e=l();a(),v(" ",x(2,4,"shared.profile.apprenticeship-period"),"",F(3,6,":",":"),""),a(4),v(" ",F(6,9,e.company.apprenticeshipContract.ContractDateFrom,"dd.MM.yyyy"),"\u2013",F(7,12,e.company.apprenticeshipContract.ContractDateTo,"dd.MM.yyyy")," ")}}function Re(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l(2);v(" ",e.company.jobTrainer.Lastname||""," ",e.company.jobTrainer.Firstname||"","")}}function Be(t,o){if(t&1&&(c(0,"a",0),r(1),s(2,"br"),m()),t&2){let e=l(2);y("href","tel:",e.company.jobTrainer.PhoneBusiness,"",g),a(),S(e.company.jobTrainer.PhoneBusiness)}}function we(t,o){if(t&1&&(c(0,"a",0),r(1),s(2,"br"),m()),t&2){let e=l(2);y("href","tel:",e.company.jobTrainer.PhoneMobile,"",g),a(),S(e.company.jobTrainer.PhoneMobile)}}function Ue(t,o){if(t&1&&(c(0,"a",0),u(1,"bkdPersonEmail"),r(2),u(3,"bkdPersonEmail"),m()),t&2){let e=l(2);y("href","mailto:",x(1,3,e.company.jobTrainer),"",g),a(2),S(x(3,5,e.company.jobTrainer))}}function ze(t,o){if(t&1&&(c(0,"div",1),r(1),u(2,"translate"),u(3,"addSpace"),c(4,"address"),_(5,Re,2,2,"br")(6,Be,3,3,"a",0)(7,we,3,3,"a",0)(8,Ue,4,7,"a",0),u(9,"bkdPersonEmail"),m()()),t&2){let e=l();a(),v(" ",x(2,6,"shared.profile.job-trainer"),"",F(3,8,":",":")," "),a(4),p(e.company.jobTrainer.Lastname||e.company.jobTrainer.Firstname?5:-1),a(),p(e.company.jobTrainer.PhoneBusiness?6:-1),a(),p(e.company.jobTrainer.PhoneMobile?7:-1),a(),p(x(9,11,e.company.jobTrainer)?8:-1)}}var pt=(()=>{class t{constructor(){}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=I({type:t,selectors:[["bkd-student-dossier-apprenticeship-company"]],inputs:{company:"company"},standalone:!0,features:[A],decls:12,vars:12,consts:[[3,"href"],[1,"subentry"]],template:function(i,n){i&1&&(c(0,"address"),_(1,Ie,2,1,"br")(2,Ae,2,1,"br")(3,Te,2,2,"br")(4,De,2,1,"br")(5,Ee,2,1,"br")(6,Le,2,2,"br")(7,je,3,3,"a",0)(8,ke,4,7,"a",0),u(9,"bkdPersonEmail"),m(),_(10,Fe,8,15,"div",1)(11,ze,10,13,"div",1)),i&2&&(a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.CompanyName?1:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.CompanyNameAddition?2:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.Lastname||n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.Firstname?3:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.AddressLine1?4:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.AddressLine2?5:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.PostalCode&&(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.Location)?6:-1),a(),p(n.company.apprenticeshipManager!=null&&n.company.apprenticeshipManager.PhoneBusiness?7:-1),a(),p(x(9,10,n.company.apprenticeshipManager)?8:-1),a(2),p(n.company.apprenticeshipContract.ContractDateFrom?10:-1),a(),p(n.company.jobTrainer?11:-1))},dependencies:[oe,le,se,fe,H],styles:[".subentry[_ngcontent-%COMP%]{padding-bottom:1rem}"],changeDetection:0})}}return t})();function Ne(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();C(" ",e.person.AddressLine1,"")}}function Oe(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();C(" ",e.person.AddressLine2,"")}}function Je(t,o){if(t&1&&(r(0),s(1,"br")),t&2){let e=l();v(" ",e.person.Zip," ",e.person.Location,"")}}function Ye(t,o){if(t&1&&(c(0,"a",0),r(1),s(2,"br"),m()),t&2){let e=l();y("href","tel:",e.person.PhonePrivate,"",g),a(),S(e.person.PhonePrivate)}}function $e(t,o){if(t&1&&(c(0,"a",0),r(1),s(2,"br"),m()),t&2){let e=l();y("href","tel:",e.person.PhoneMobile,"",g),a(),S(e.person.PhoneMobile)}}function He(t,o){if(t&1&&(c(0,"a",0),u(1,"bkdPersonEmail"),r(2),u(3,"bkdPersonEmail"),m()),t&2){let e=l();y("href","mailto:",x(1,3,e.person),"",g),a(2),S(x(3,5,e.person))}}var ct=(()=>{class t{constructor(){}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=I({type:t,selectors:[["bkd-student-dossier-legal-representative"]],inputs:{person:"person"},standalone:!0,features:[A],decls:10,vars:10,consts:[[3,"href"]],template:function(i,n){i&1&&(c(0,"address"),r(1),s(2,"br"),_(3,Ne,2,1,"br")(4,Oe,2,1,"br")(5,Je,2,2,"br")(6,Ye,3,3,"a",0)(7,$e,3,3,"a",0)(8,He,4,7,"a",0),u(9,"bkdPersonEmail"),m()),i&2&&(a(),v(" ",n.person.LastName," ",n.person.FirstName,""),a(2),p(n.person.AddressLine1?3:-1),a(),p(n.person.AddressLine2?4:-1),a(),p(n.person.Zip&&n.person.Zip?5:-1),a(),p(n.person.PhonePrivate?6:-1),a(),p(n.person.PhoneMobile?7:-1),a(),p(x(9,8,n.person)?8:-1))},dependencies:[H],changeDetection:0})}}return t})();function X(t,o){let e=+K(t)-+K(o);return e<0?-1:e>0?1:e}function he(t,o,e){let[i,n]=J(e?.in,t,o);return i.getFullYear()-n.getFullYear()}function ge(t,o,e){let[i,n]=J(e?.in,t,o),b=X(i,n),T=Math.abs(he(i,n));i.setFullYear(1584),n.setFullYear(1584);let D=X(i,n)===-b,P=b*(T-+D);return P===0?0:P}var Ge=18;function ye(t){return ge(new Date,t.Birthdate||new Date)>=Ge}var Ce=N({Email:f(d),Email2:f(d),PhoneBusiness:f(d),CompanyName:R(d),CompanyNameAddition:R(d),Firstname:f(d),Lastname:f(d),AddressLine1:R(d),AddressLine2:R(d),PostalCode:f(d),Location:f(d),Id:z});var xe=(()=>{class t extends Y{constructor(e,i){super(e,i,Ce,"ApprenticeshipManagers")}static{this.\u0275fac=function(i){return new(i||t)(h(U),h(k))}}static{this.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ve=N({Email:f(d),Email2:f(d),PhoneBusiness:f(d),PhoneMobile:f(d),Firstname:f(d),Lastname:f(d),Id:z});var be=(()=>{class t extends Y{constructor(e,i){super(e,i,ve,"JobTrainers")}static{this.\u0275fac=function(i){return new(i||t)(h(U),h(k))}}static{this.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var $t=(()=>{class t{constructor(e,i,n,b,T,D,P){this.studentService=e,this.personsService=i,this.apprenticeshipManagersService=n,this.jobTrainersService=b,this.loadingService=T,this.dropDownItemsService=D,this.storageService=P,this.loading$=this.loadingService.loading$}getProfile(e){return this.loadingService.load(L([this.loadStudent(e),this.loadLegalRepresentatives(e),this.loadApprenticeshipContracts(e)]).pipe(B(Q(this.mapToProfile.bind(this)))))}getMyProfile(){let i=(this.storageService.getPayload()?.roles?.split(";")??[]).includes("StudentRole");return this.loadingService.load(this.personsService.getMyself({context:new w().set($,{disableErrorHandlingForStatus:[403]})}).pipe(B(n=>L([M(n),i?this.loadLegalRepresentatives(n.Id):M([]),i?this.loadApprenticeshipContracts(n.Id):M([]),this.loadStayPermitValue(n.StayPermit)]))).pipe(B(Q(this.mapToProfile.bind(this))),ee(q)))}loadStudent(e){return this.studentService.get(e,{context:new w().set($,{disableErrorHandlingForStatus:[404]})}).pipe(W())}loadLegalRepresentatives(e){return this.studentService.getLegalRepresentatives(e)}loadApprenticeshipContracts(e){return this.studentService.getCurrentApprenticeshipContracts(e,{context:new w().set($,{disableErrorHandlingForStatus:[404]})}).pipe(W([]))}loadStayPermitValue(e){return this.dropDownItemsService.getStayPermits().pipe(V(i=>i.find(n=>n.Key===e)?.Value||null))}mapToProfile(e,i,n,b=null){return e?(i=this.getRelevantLegalRepresentatives(e,i),L([this.loadLegalRepresentativPersons(i),this.loadJobTrainers(n),this.loadApprenticeshipManagers(n)]).pipe(V(([T,D,P])=>this.createProfile(e,b,i,T,n,P,D)))):M(null)}loadLegalRepresentativPersons(e){return e.length===0?M([]):this.personsService.getListForIds(e.map(i=>i.RepresentativeId))}loadJobTrainers(e){let i=e.map(n=>n.JobTrainer).filter(n=>typeof n=="number");return i.length===0?M([]):L(i.map(n=>this.jobTrainersService.get(n)))}loadApprenticeshipManagers(e){let i=e.map(n=>n.ApprenticeshipManagerId);return i.length===0?M([]):L(i.map(n=>this.apprenticeshipManagersService.get(n)))}createProfile(e,i,n,b,T,D,P){return{student:e,stayPermitValue:i||void 0,legalRepresentativePersons:n.map(G=>this.findPerson(G.RepresentativeId,b)).filter(q),apprenticeshipCompanies:T.map(G=>this.createApprenticeshipCompany(G,D,P))}}getRelevantLegalRepresentatives(e,i){let n=ye(e);return i.filter(b=>!n||b.RepresentativeAfterMajority)}createApprenticeshipCompany(e,i,n){return{apprenticeshipContract:e,jobTrainer:this.findPerson(e.JobTrainer,n),apprenticeshipManager:this.findPerson(e.ApprenticeshipManagerId,i)}}findPerson(e,i){return e&&i.find(n=>n.Id===e)||null}static{this.\u0275fac=function(i){return new(i||t)(h(me),h(de),h(xe),h(be),h(ue),h(ce),h(O))}}static{this.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var qt=(()=>{class t{constructor(e,i){this.settings=e,this.storageService=i,this.avatarStyles={}}ngOnChanges(e){e.studentId&&(this.avatarStyles=this.buildAvatarStyles(this.studentId))}buildAvatarStyles(e){return{"background-image":[this.buildAvatarUrl(e),this.fallbackAvatarUrl].map(i=>`url(${i})`).join(", ")}}buildAvatarUrl(e){let i=this.storageService.getAccessToken()||"";return`${this.settings.apiUrl}/Files/personPictures/${e}?token=${i}`}get fallbackAvatarUrl(){return`${this.settings.scriptsAndAssetsPath}/assets/images/avatar-placeholder.png`}static{this.\u0275fac=function(i){return new(i||t)(Z(k),Z(O))}}static{this.\u0275cmp=I({type:t,selectors:[["bkd-avatar"]],inputs:{studentId:"studentId",link:"link",linkParams:"linkParams"},standalone:!0,features:[ne,A],decls:1,vars:5,consts:[[1,"avatar",3,"routerLink","queryParams","ngStyle"]],template:function(i,n){i&1&&s(0,"a",0),i&2&&(ae("disabled",!n.link),ie("routerLink",n.link)("queryParams",n.linkParams)("ngStyle",n.avatarStyles))},dependencies:[pe,re],styles:["[_nghost-%COMP%]{display:flex}.small[_nghost-%COMP%]{width:40px;min-width:40px;height:50px}.medium[_nghost-%COMP%]{width:58px;min-width:58px;height:75px}.large[_nghost-%COMP%]{width:100px;min-width:100px;height:130px}.avatar[_ngcontent-%COMP%]{flex:1;border:1px solid rgba(0,0,0,.25);background-repeat:no-repeat;background-size:cover;background-position:center}a.disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:default}"]})}}return t})();export{$t as a,Xe as b,pt as c,ct as d,qt as e};
