import{a as F}from"./chunk-OFB4XAK2.js";import{a as G,e as u}from"./chunk-KK2SHN2W.js";import{Ac as m,Bc as U,Cc as a,D as V,Dc as x,Ec as h,Fd as s,Gc as A,Hc as l,Ic as o,M as I,Mc as C,Nc as _,O as S,P as n,Pc as v,S as O,Tc as d,X as g,Yc as $,_ as f,f as T,gc as j,n as c,yc as P,zc as R}from"./chunk-IFJN5CDK.js";function M(e){var r=Object.create(Object.getPrototypeOf(e));return Object.assign(r,e),r}function k(e,r,t){t===void 0&&(t=e.name);var i=M(e);return i.validate=r,i.decode=function(p){return r(p,_(i))},i.name=t,i}function y(e,r,t){return t===void 0&&(t="withFallback("+e.name+")"),k(e,function(i,p){return P(function(){return m(r)})(e.validate(i,p))},t)}var q=o({Key:a,Value:a}),D=o({Id:a,Settings:C(l(q))}),b=d.pipe(o({mail:y(h,!1),gui:y(h,!1),phoneMobile:y(h,!1)})),E=new U("NotificationTypesInactive",e=>Array.isArray(e)&&e.every(r=>typeof r=="string"),(e,r)=>typeof e=="string"?m(e.split(";").filter(Boolean)):R(e,r),e=>e.join(";")),z=function(e){return e.Grid="grid",e.List="list",e}(z||{}),w=d.pipe(o({presenceControl:A({grid:null,list:null})})),Q=o({eventId:v(x),group:v(F.props.Key)}),N=d.pipe(C(l(Q))),Y=o({AccessInfo:o({Roles:l(a),Permissions:l(a)})});var L=(()=>{class e extends G{constructor(t,i){super(t,i,D,"UserSettings")}getUserSettingsCst(t){return this.http.get(`${this.baseUrl}/Cst`,{params:t}).pipe(n(s(this.codec)))}updateUserSettingsCst(t){return this.http.patch(`${this.baseUrl}/Cst`,t)}getAccessInfo(){return this.http.get(`${this.baseUrl}/?expand=AccessInfo`).pipe(n(s(Y)),c(({AccessInfo:t})=>t))}static{this.\u0275fac=function(i){return new(i||e)(f(j),f($))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var tt=100,H="presenceControlViewMode",W="presenceControlGroupView",B="notification",J="notificationTypesInactive",vt=(()=>{class e{constructor(t){this.settingsRestService=t,this.refetch$=new T,this.settings$=this.refetch$.pipe(S(null),V(tt),n(()=>this.settingsRestService.getUserSettingsCst()),c(i=>i.Settings),I(1)),this.accessInfo$=this.settingsRestService.getAccessInfo().pipe(I(1))}refetch(){this.refetch$.next()}getSetting(t){return this.settings$.pipe(c(i=>i.find(p=>p.Key===t)?.Value??null))}saveSetting(t,i){return this.settingsRestService.updateUserSettingsCst(this.buildSettings(t,i)).pipe(O(()=>this.refetch$.next()))}getPresenceControlViewMode(){return this.getSetting(H).pipe(u('{"presenceControl":"grid"}'),n(s(w)),c(({presenceControl:t})=>t))}savePresenceControlViewMode(t){return this.saveSetting(H,w.encode({presenceControl:t}))}getPresenceControlGroupView(){return this.getSetting(W).pipe(u("[]"),n(s(N)))}savePresenceControlGroupView(t){return this.saveSetting(W,N.encode(t))}getNotificationChannels(){return this.getSetting(B).pipe(u("{}"),n(s(b)))}saveNotificationChannels(t){return this.saveSetting(B,b.encode(t))}getNotificationTypesInactive(){return this.getSetting(J).pipe(u(""),n(s(E)))}saveNotificationTypesInactive(t){return this.saveSetting(J,E.encode(t))}getRolesAndPermissions(){return this.accessInfo$.pipe(c(({Roles:t,Permissions:i})=>[...t,...i]),S(null))}buildSettings(t,i){return{Id:"Cst",Settings:[{Key:t,Value:i}]}}static{this.\u0275fac=function(i){return new(i||e)(f(L))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{z as a,vt as b};
