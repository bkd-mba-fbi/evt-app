"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[243],{8319:(P,p,n)=>{n.r(p),n.d(p,{MY_SETTINGS_ROUTES:()=>z});var a=n(3955),c=n(177),l=n(9417),h=n(7673),m=n(7786),u=n(4412),O=n(1413),v=n(6354),b=n(4668),F=n(5558),R=n(3294),D=n(3993),k=n(5245),C=n(6977),$=n(980),_=n(1517),W=n(7887),t=n(4438),B=n(1195);let j=(()=>{class s{constructor(){this.id=null,this.label=null,this.disabled=!1,this.value=!1,this.valueChange=new t.bkB,this.fallbackId=(0,B.A)("bkd-switch")}static#t=this.\u0275fac=function(i){return new(i||s)};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["bkd-switch"]],inputs:{id:"id",label:"label",disabled:"disabled",value:"value"},outputs:{valueChange:"valueChange"},standalone:!0,features:[t.aNF],decls:3,vars:5,consts:[["type","checkbox",3,"ngModelChange","disabled","ngModel"]],template:function(i,r){if(1&i&&(t.j41(0,"input",0),t.bIt("ngModelChange",function(I){return r.valueChange.emit(I)}),t.k0s(),t.j41(1,"label"),t.EFF(2),t.k0s()),2&i){let T,I;t.Y8G("disabled",r.disabled)("ngModel",r.value),t.BMQ("id",null!==(T=r.id)&&void 0!==T?T:r.fallbackId),t.R7$(),t.BMQ("for",null!==(I=r.id)&&void 0!==I?I:r.fallbackId),t.R7$(),t.JRh(r.label)}},dependencies:[l.YN,l.Zm,l.BC,l.vS],styles:['input[_ngcontent-%COMP%]{opacity:0;position:absolute}label[_ngcontent-%COMP%]{cursor:pointer;text-indent:-9999px;width:36px;height:18px;border:1px solid rgb(0,0,0);background:#fff;display:block;border-radius:18px;position:relative}label[_ngcontent-%COMP%]:after{content:"";position:absolute;top:1px;left:1px;width:14px;height:14px;background:#000;border-radius:14px;transition:.3s}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{border-color:#000;background:#000}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{left:calc(100% - 1px);transform:translate(-100%);background:#fff}input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{box-shadow:0 0 0 .25rem #4e4e4e40}input[_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]{cursor:default;background:#fff;border-color:#dedede}input[_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]:after{background:#dedede}label[_ngcontent-%COMP%]:active:after{width:18.2px}'],changeDetection:0})}return s})();function Y(s,M){if(1&s&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&s){const e=M.$implicit;t.R7$(),t.SpI(" ",e," ")}}function K(s,M){if(1&s&&(t.j41(0,"div",4),t.DNE(1,Y,2,1,"div",5),t.k0s()),2&s){const e=t.XpG();t.R7$(),t.Y8G("ngForOf",e.descriptionLines)}}let d=(()=>{class s{constructor(e){this.cd=e,this.id="",this.label="",this.description=null,this.disabled=!1,this.onChange=i=>{},this.onTouched=()=>{},this._value=!1}get value(){return this._value}set value(e){this._value=e,this.onChange(e)}get descriptionLines(){return this.description?this.description.split("\n"):[]}writeValue(e){this._value=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}static#t=this.\u0275fac=function(i){return new(i||s)(t.rXU(t.gRc))};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["bkd-my-settings-notifications-toggle"]],inputs:{id:"id",label:"label",description:"description",disabled:"disabled"},standalone:!0,features:[t.Jv_([{provide:l.kq,useExisting:(0,t.Rfq)(()=>s),multi:!0}]),t.aNF],decls:5,vars:6,consts:[[1,"d-flex","align-items-center"],[1,"flex-fill"],[3,"valueChange","id","value","disabled"],["class","form-text",4,"ngIf"],[1,"form-text"],[4,"ngFor","ngForOf"]],template:function(i,r){1&i&&(t.j41(0,"div",0)(1,"label",1),t.EFF(2),t.k0s(),t.j41(3,"bkd-switch",2),t.mxI("valueChange",function(I){return t.DH7(r.value,I)||(r.value=I),I}),t.k0s()(),t.DNE(4,K,2,1,"div",3)),2&i&&(t.R7$(),t.BMQ("for",r.id),t.R7$(),t.SpI(" ",r.label," "),t.R7$(),t.Y8G("id",r.id),t.R50("value",r.value),t.Y8G("disabled",r.disabled),t.R7$(),t.Y8G("ngIf",r.description))},dependencies:[j,c.bT,c.pM],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return s})();var f=n(3515),o=n(5889),g=n(3460),y=n(2809),E=n(4297),N=n(4599);let x=(()=>{class s{constructor(e,i){this.settings=e,this.storage=i,this.currentRoles=null}getNotificationTypes(){return this.getNotificationTypeKeys().map(e=>{if(!(e in this.settings.notificationTypes))throw new Error(`Key '${e}' is missing in 'notificationTypes' setting`);return{key:e,text:this.settings.notificationTypes[e]}})}getNotificationTypeKeys(){return(0,g.A)(this.settings.notificationTypesAssignments.reduce((e,{roles:i,types:r})=>this.hasAnyRole(i)?[...e,...r]:e,[]))}hasAnyRole(e){return null===this.currentRoles&&(this.currentRoles=(0,E.O)(this.storage.getPayload()?.roles)),this.currentRoles.some(i=>e.includes(i))}static#t=this.\u0275fac=function(i){return new(i||s)(t.KVO(y.yy),t.KVO(N.n))};static#n=this.\u0275prov=t.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const V=(s,M)=>({channelsFormGroup:s,typesFormGroup:M});function U(s,M){1&s&&(t.j41(0,"div",6),t.nrm(1,"bkd-spinner",7),t.k0s())}function G(s,M){if(1&s&&(t.nrm(0,"bkd-my-settings-notifications-toggle",10),t.nI1(1,"async"),t.nI1(2,"async")),2&s){const e=M.$implicit;t.AVh("mt-4",M.index>0),t.Y8G("id","notification-channels-"+e.key)("label",t.bMT(1,6,e.label))("description",t.bMT(2,8,e.description))("formControlName",e.key)}}function X(s,M){if(1&s&&(t.j41(0,"form",8),t.DNE(1,G,3,10,"bkd-my-settings-notifications-toggle",9),t.k0s()),2&s){const e=t.XpG().bkdLet,i=t.XpG();t.Y8G("formGroup",e.channelsFormGroup),t.R7$(),t.Y8G("ngForOf",i.channelsSettings)}}function A(s,M){if(1&s&&(t.nrm(0,"bkd-my-settings-notifications-toggle",10),t.nI1(1,"async"),t.nI1(2,"async")),2&s){const e=M.$implicit;t.AVh("mt-4",M.index>0),t.Y8G("id","notification-types-"+e.key)("label",t.bMT(1,6,e.label))("description",t.bMT(2,8,e.description))("formControlName",e.key)}}function L(s,M){if(1&s&&(t.j41(0,"form",8),t.DNE(1,A,3,10,"bkd-my-settings-notifications-toggle",9),t.k0s()),2&s){const e=t.XpG().bkdLet,i=t.XpG();t.Y8G("formGroup",e.typesFormGroup),t.R7$(),t.Y8G("ngForOf",i.typesSettings)}}function Q(s,M){if(1&s&&(t.j41(0,"div",1)(1,"h2",2)(2,"span"),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.DNE(5,U,2,0,"div",3),t.nI1(6,"async"),t.k0s(),t.DNE(7,X,2,2,"form",4),t.j41(8,"p",5),t.EFF(9),t.nI1(10,"translate"),t.k0s(),t.nrm(11,"hr"),t.DNE(12,L,2,2,"form",4),t.k0s()),2&s){const e=M.bkdLet,i=t.XpG();t.R7$(3),t.JRh(t.bMT(4,5,"my-settings.notifications.title")),t.R7$(2),t.Y8G("ngIf",t.bMT(6,7,i.saving$)),t.R7$(2),t.Y8G("ngIf",e.channelsFormGroup),t.R7$(2),t.SpI(" ",t.bMT(10,9,"my-settings.notifications.privacy-hint")," "),t.R7$(3),t.Y8G("ngIf",e.typesFormGroup)}}let J=(()=>{class s{constructor(e,i,r,T,I){this.userSettings=e,this.formBuilder=i,this.toastService=r,this.translate=T,this.notificationTypes=I,this.channelsSettings=[{key:"gui",label:this.translate.get("my-settings.notifications.gui")},{key:"mail",label:this.translate.get("my-settings.notifications.mail")},{key:"phoneMobile",label:this.translate.get("my-settings.notifications.phoneMobile")}],this.typesSettings=this.notificationTypes.getNotificationTypes().map(S=>{const{label:w,description:q}="fr-CH"===this.translate.currentLang?S.text.fr:S.text.de;return{key:S.key,label:(0,h.of)(w),description:(0,h.of)(q)}}),this.channelsValue$=this.userSettings.getNotificationChannels(),this.typesValue$=this.userSettings.getNotificationTypesInactive().pipe((0,v.T)(this.typesArrayToRecord.bind(this))),this.channelsFormGroup$=this.channelsValue$.pipe((0,v.T)(S=>this.createFormGroup(this.channelsSettings,S)),(0,b.t)(1)),this.allChannelsInactive$=(0,m.h)(this.channelsValue$,this.channelsFormGroup$.pipe((0,F.n)(S=>S.valueChanges))).pipe((0,v.T)(S=>Object.values(S).every(w=>!w)),(0,R.F)()),this.typesFormGroup$=this.typesValue$.pipe((0,D.E)(this.allChannelsInactive$),(0,v.T)(([S,w])=>this.createFormGroup(this.typesSettings,S,!0,w)),(0,b.t)(1)),this.saving$=new u.t(!1),this.destroy$=new O.B}ngOnInit(){this.userSettings.refetch(),this.allChannelsInactive$.pipe((0,k.i)(1),(0,D.E)(this.typesFormGroup$),(0,C.Q)(this.destroy$)).subscribe(([e,i])=>{Object.values(i.controls).forEach(r=>e?r.disable():r.enable())}),this.channelsFormGroup$.pipe((0,C.Q)(this.destroy$),(0,F.n)(e=>e.valueChanges)).subscribe(this.saveChannels.bind(this)),this.typesFormGroup$.pipe((0,C.Q)(this.destroy$),(0,F.n)(e=>e.valueChanges)).subscribe(this.saveTypes.bind(this))}ngOnDestroy(){this.destroy$.next()}createFormGroup(e,i,r=!1,T=!1){return this.formBuilder.group(e.reduce((I,{key:S})=>({...I,[S]:[{value:i[S]??r,disabled:T}]}),{}))}saveChannels(e){this.saving$.next(!0),this.userSettings.saveNotificationChannels(e).pipe((0,$.j)(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}saveTypes(e){this.saving$.next(!0),this.userSettings.saveNotificationTypesInactive(this.typesRecordToArray(e)).pipe((0,$.j)(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}onSaveSuccess(){this.toastService.success(this.translate.instant("my-settings.notifications.save-success"))}typesArrayToRecord(e){return this.typesSettings.reduce((r,{key:T})=>({...r,[T]:!e.includes(T)}),{})}typesRecordToArray(e){return Object.keys(e).reduce((r,T)=>e[T]?r:[...r,T],[])}static#t=this.\u0275fac=function(i){return new(i||s)(t.rXU(f.A),t.rXU(l.ze),t.rXU(o.f),t.rXU(a.c$),t.rXU(x))};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["bkd-my-settings-notifications"]],standalone:!0,features:[t.aNF],decls:3,vars:8,consts:[["class","pb-4",4,"bkdLet"],[1,"pb-4"],[1,"m-0","pb-3","d-flex","align-items-stretch"],["class","position-relative",4,"ngIf"],[3,"formGroup",4,"ngIf"],[1,"mt-4","form-text"],[1,"position-relative"],[1,"position-absolute","inline","small","d-inline-block","ms-2"],[3,"formGroup"],[3,"id","label","description","formControlName","mt-4",4,"ngFor","ngForOf"],[3,"id","label","description","formControlName"]],template:function(i,r){1&i&&(t.DNE(0,Q,13,11,"div",0),t.nI1(1,"async"),t.nI1(2,"async")),2&i&&t.Y8G("bkdLet",t.l_i(5,V,t.bMT(1,1,r.channelsFormGroup$),t.bMT(2,3,r.typesFormGroup$)))},dependencies:[W.N,c.bT,_.t,l.YN,l.qT,l.BC,l.cb,l.X1,l.j4,l.JD,c.pM,d,c.Jj,a.h,a.D9],styles:[".checkbox[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{position:static!important;margin:0!important}"],changeDetection:0})}return s})(),H=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["bkd-my-settings-show"]],standalone:!0,features:[t.aNF],decls:5,vars:3,consts:[[1,"bkd-container","bkd-container-limited"]],template:function(i,r){1&i&&(t.j41(0,"div",0)(1,"h1"),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.nrm(4,"bkd-my-settings-notifications"),t.k0s()),2&i&&(t.R7$(2),t.JRh(t.bMT(3,1,"my-settings.title")))},dependencies:[J,a.h,a.D9]})}return s})();var Z=n(5539);const z=[{path:"",component:(()=>{class s{constructor(){}static#t=this.\u0275fac=function(i){return new(i||s)};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["bkd-my-settings"]],standalone:!0,features:[t.aNF],decls:1,vars:0,template:function(i,r){1&i&&t.nrm(0,"router-outlet")},dependencies:[Z.n3],changeDetection:0})}return s})(),children:[{path:"",component:H}]}]},1517:(P,p,n)=>{n.d(p,{t:()=>c});var a=n(4438);let c=(()=>{class l{constructor(){}static#t=this.\u0275fac=function(u){return new(u||l)};static#n=this.\u0275cmp=a.VBU({type:l,selectors:[["bkd-spinner"]],standalone:!0,features:[a.aNF],decls:4,vars:0,consts:[[1,"spinner-container"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(u,O){1&u&&(a.j41(0,"div",0)(1,"div",1)(2,"span",2),a.EFF(3,"Loading..."),a.k0s()()())},styles:[".spinner-container[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]:not(.inline)   .spinner-container[_ngcontent-%COMP%]{top:-131px;min-height:200px}.spinner-border[_ngcontent-%COMP%]{width:4rem;height:4rem}[_nghost-%COMP%]:not(.inline)   .spinner-border[_ngcontent-%COMP%]{margin-top:100px}.small[_nghost-%COMP%]   .spinner-border[_ngcontent-%COMP%]{width:2rem;height:2rem;--bs-spinner-vertical-align: -.2em;--bs-spinner-border-width: .15em}"]})}return l})()},7887:(P,p,n)=>{n.d(p,{N:()=>l});var a=n(4438);class c{constructor(){this.$implicit=null,this.bkdLet=null}}let l=(()=>{class h{set bkdLet(u){this.context.$implicit=this.context.bkdLet=u}constructor(u,O){this.vcr=u,this.templateRef=O,this.context=new c}ngOnInit(){this.vcr.createEmbeddedView(this.templateRef,this.context)}static#t=this.\u0275fac=function(O){return new(O||h)(a.rXU(a.c1b),a.rXU(a.C4Q))};static#n=this.\u0275dir=a.FsC({type:h,selectors:[["","bkdLet",""]],inputs:{bkdLet:"bkdLet"},standalone:!0})}return h})()},5666:(P,p,n)=>{n.d(p,{H:()=>c});var a=n(5783);const c=a.NW({Key:a.KC([a.ai,a.Yj]),Value:a.Yj})},6952:(P,p,n)=>{n.d(p,{G:()=>l});var a=n(5558),c=n(785);class l{constructor(m,u,O,v){this.http=m,this.settings=u,this.codec=O,this.resourcePath=v}get(m,u){return this.http.get(`${this.baseUrl}/${m}`,u).pipe((0,a.n)((0,c.D4)(this.codec)))}getList(m){return this.http.get(`${this.baseUrl}/`,m).pipe((0,a.n)((0,c.k$)(this.codec)))}get baseUrl(){return`${this.settings.apiUrl}/${this.resourcePath}`}}},172:(P,p,n)=>{n.d(p,{Sq:()=>_,Jh:()=>B,$m:()=>Y,iA:()=>t,i7:()=>j,Qr:()=>K});var a=n(1626),c=n(7673),l=n(8810),h=n(9030),m=n(7786),u=n(3726),O=n(3236),v=n(1584),F=n(9437),R=n(6354),D=n(9901),k=n(5558),C=n(9172),$=n(3993);function _(d){return(0,F.W)(f=>f instanceof a.yz&&404===f.status?(0,c.of)(d||null):(0,l.$)(()=>f))}function t(d){return f=>(0,h.v)(()=>(d(),f))}function B(d){return f=>f.pipe((0,R.T)(o=>o??d),(0,D.U)(d))}function j(d,f){return d.pipe((0,k.n)(o=>f.pipe((0,C.Z)(o),(0,R.T)(()=>o))))}function Y(d,f=window.document){return(0,m.h)(...["click","keydown"].map(o=>(0,u.R)(f,o))).pipe((0,C.Z)(null),(0,k.n)(()=>function b(d=0,f=O.E){return d<0&&(d=0),(0,v.O)(d,d,f)}(d)),(0,R.T)(()=>{}))}function K(d,f){return(0,m.h)(d,f.pipe((0,$.E)(d),(0,R.T)(([o,g])=>g)))}},4297:(P,p,n)=>{function a(l,h){return c(l).includes(h)}function c(l){return l?l.split(";"):[]}n.d(p,{O:()=>c,h:()=>a})},152:(P,p,n)=>{n.d(p,{B:()=>h});var a=n(3236),c=n(9974),l=n(4360);function h(m,u=a.E){return(0,c.N)((O,v)=>{let b=null,F=null,R=null;const D=()=>{if(b){b.unsubscribe(),b=null;const C=F;F=null,v.next(C)}};function k(){const C=R+m,$=u.now();if($<C)return b=this.schedule(void 0,C-$),void v.add(b);D()}O.subscribe((0,l._)(v,C=>{F=C,R=u.now(),b||(b=u.schedule(k,m),v.add(b))},()=>{D(),v.complete()},void 0,()=>{F=b=null}))})}},7672:(P,p,n)=>{n.d(p,{A:()=>f});var a=n(8587);const m=function h(o){return o!=o},R=function F(o,g){return!(null==o||!o.length)&&function v(o,g,y){return g==g?function u(o,g,y){for(var E=y-1,N=o.length;++E<N;)if(o[E]===g)return E;return-1}(o,g,y):function c(o,g,y,E){for(var N=o.length,x=y+(E?1:-1);E?x--:++x<N;)if(g(o[x],x,o))return x;return-1}(o,m,y)}(o,g,0)>-1},k=function D(o,g,y){for(var E=-1,N=null==o?0:o.length;++E<N;)if(y(g,o[E]))return!0;return!1};var C=n(5934),$=n(4226);var t=n(3998);const Y=$.A&&1/(0,t.A)(new $.A([,-0]))[1]==1/0?function(o){return new $.A(o)}:function _(){},f=function d(o,g,y){var E=-1,N=R,x=o.length,V=!0,U=[],G=U;if(y)V=!1,N=k;else if(x>=200){var X=g?null:Y(o);if(X)return(0,t.A)(X);V=!1,N=C.A,G=new a.A}else G=g?[]:U;t:for(;++E<x;){var A=o[E],L=g?g(A):A;if(A=y||0!==A?A:0,V&&L==L){for(var Q=G.length;Q--;)if(G[Q]===L)continue t;g&&G.push(L),U.push(A)}else N(G,L,y)||(G!==U&&G.push(L),U.push(A))}return U}},3460:(P,p,n)=>{n.d(p,{A:()=>l});var a=n(7672);const l=function c(h){return h&&h.length?(0,a.A)(h):[]}},1195:(P,p,n)=>{n.d(p,{A:()=>h});var a=n(5402),c=0;const h=function l(m){var u=++c;return(0,a.A)(m)+u}}}]);