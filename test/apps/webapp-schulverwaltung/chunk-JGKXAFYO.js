import{$ as c,Hd as O,Ia as d,Ld as B,Mc as i,Nc as h,P as C,Pc as f,Rc as F,Sa as x,Sc as R,Uc as k,Ud as _,Vd as G,X as P,Zc as a,_c as L,a as b,ab as u,b as y,bb as g,cb as M,dd as w,hd as E,kb as D,l as A,lb as T,n as v,o as S,qc as j,vb as U,wb as $,ya as m}from"./chunk-NEW5VGRB.js";var N=(()=>{class o{constructor(){this.expanded=!1}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=d({type:o,selectors:[["bkd-caret"]],inputs:{expanded:"expanded"},decls:2,vars:1,consts:[["role","button",1,"d-flex","material-icons"]],template:function(e,r){e&1&&(u(0,"i",0),U(1),g()),e&2&&(m(),$(r.expanded?"expand_less":"expand_more"))},styles:["i[_ngcontent-%COMP%]:hover{color:#ea161f}"]})}}return o})();var X=["*"],V=(()=>{class o{constructor(){this.opened=!1}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=d({type:o,selectors:[["bkd-student-dossier-entry-header"]],inputs:{opened:"opened"},ngContentSelectors:X,decls:3,vars:1,consts:[[1,"m-0"],[1,"d-flex","align-items-center",3,"expanded"]],template:function(e,r){e&1&&(D(),u(0,"h5",0),T(1),g(),M(2,"bkd-caret",1)),e&2&&(m(2),x("expanded",r.opened))},dependencies:[N],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-top:1px solid #dee2e6;cursor:pointer}button[_ngcontent-%COMP%]{color:#000;text-decoration:none}.btn-link[_ngcontent-%COMP%]:hover{text-decoration:none}"],changeDetection:0})}}return o})();var J=R({Id:h,Title:i}),z=a(F(J));var ct=(()=>{class o{constructor(){this.settings=c(E),this.storageService=c(_),this.http=c(j)}getPersonMasterDataReports(t){return this.getAvailableReports("Person",this.settings.personMasterDataReports,[t])}getStudentConfirmationReports(t){return this.getAvailableReports("Praesenzinformation",this.settings.studentConfirmationReports,t)}getEvaluateAbsencesReports(t){return this.getAvailableReports("Praesenzinformation",this.settings.evaluateAbsencesReports,t)}getMyAbsencesReports(t){return this.getAvailableReports("Praesenzinformation",this.settings.myAbsencesReports,t)}getCourseTestsReports(t){return this.getAvailableReports("Anlass",this.settings.testsByCourseReports,[t])}getStudentSubscriptionGradesReports(t){return this.settings.testsBySubscriptionStudentReports.map((r,n)=>{let s=this.getReportUrl(r.type,"Anmeldung",r.id,t);return y(b({},r),{title:`Report ${n+1}`,url:s})})}getTeacherSubscriptionGradesReports(t){return this.settings.testsBySubscriptionTeacherReports.map((r,n)=>{let s=this.getReportUrl(r.type,"Anmeldung",r.id,t);return y(b({},r),{title:`Report ${n+1}`,url:s})})}getStudyClassStudentsReports(t){return this.getAvailableReports("Anlass",this.settings.studyClassStudentsReports,[t])}getCourseStudentsReports(t){return this.getAvailableReports("Anlass",this.settings.courseStudentsReports,[t])}getAvailableReports(t,e,r){let n=B(e,p=>p.type),s=S(Object.keys(n).map(p=>this.getAvailableReportsForType(p,t,n[p].map(({id:l})=>l),r)));return this.mergeAvailableReports(s,e)}getAvailableReportsForType(t,e,r,n){return n.length===0?A([]):this.http.get(this.getReportAvailabilityUrl(t,e,r,n)).pipe(C(G(z)),v(s=>s?s.map(({Id:p,Title:l})=>({type:t,id:p,title:l,url:this.getReportUrl(t,e,p,n)})):[]))}mergeAvailableReports(t,e){return t.pipe(v(r=>{let n=O(r);return e.reduce((s,p)=>{let l=n.find(({id:H})=>H===p.id);return l?[...s,l]:s},[])}))}getReportUrl(t,e,r,n){let s=new URL(`${this.settings.apiUrl}/Files/${this.getReportTypePathPart(t)}/${e}/${r}`);return s.searchParams.set("ids",n.join(",")),s.searchParams.set("token",this.storageService.getAccessToken()??""),s.toString()}getReportAvailabilityUrl(t,e,r,n){let s=new URL(`${this.settings.apiUrl}/${this.getReportTypePathPart(t)}/AvailableReports/${e}`);return s.searchParams.set("ids",Array.isArray(r)?r.join(","):String(r)),s.searchParams.set("keys",n.join(",")),s.toString()}getReportTypePathPart(t){return`${t[0].toUpperCase()+t.slice(1)}Reports`}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275prov=P({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var gt=R({Id:h,AddressLine1:a(i),AddressLine2:L(i),Birthdate:a(w),DisplayEmail:a(i),FirstName:i,FullName:i,Gender:k([f("M"),f("F"),f("X")]),LastName:i,Location:a(i),PhoneMobile:a(i),PhonePrivate:a(i),PostalCode:a(i)});export{gt as a,N as b,V as c,ct as d};
