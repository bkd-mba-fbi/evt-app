import{Bd as c,F as r,X as n,g as a}from"./chunk-IFJN5CDK.js";var h=(()=>{class i{constructor(){this.toastsSubject=new a([]),this.toasts$=this.toastsSubject.asObservable()}success(t,e){this.addUnique({message:t,header:e,classname:"bg-success text-light",icon:"check_circle"})}warning(t,e){this.addUnique({message:t,header:e,classname:"bg-warning",icon:"help"})}error(t,e){this.addUnique({message:t,header:e,classname:"bg-danger text-light",icon:"cancel"})}remove(t){this.updateToasts(e=>e.filter(s=>!c(s,t)))}addUnique(t){this.updateToasts(e=>{if(!this.exists(e,t))return[...e,t]})}exists(t,e){return!!t.find(s=>s.message===e.message&&s.header===e.header)}updateToasts(t){this.toasts$.pipe(r(1)).subscribe(e=>{let s=t(e);s&&this.toastsSubject.next(s)})}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{h as a};
