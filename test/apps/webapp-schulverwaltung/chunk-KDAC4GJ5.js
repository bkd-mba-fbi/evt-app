import{a as G}from"./chunk-HII3S2DL.js";import{b as M,f as u}from"./chunk-SOHFFTKU.js";import{Ac as A,Bc as h,C as V,Cd as s,Dc as U,Ec as l,Fc as o,Jc as S,Kc as $,L as I,Mc as v,N as C,O as n,Qc as d,R as O,Vc as F,W as g,Z as f,dc as j,e as T,m as a,vc as P,wc as R,xc as m,yc as x,zc as p}from"./chunk-XTHSYQMN.js";function K(e){var i=Object.create(Object.getPrototypeOf(e));return Object.assign(i,e),i}function _(e,i,c){c===void 0&&(c=e.name);var t=K(e);return t.validate=i,t.decode=function(r){return i(r,$(t))},t.name=c,t}function y(e,i,c){return c===void 0&&(c="withFallback("+e.name+")"),_(e,function(t,r){return P(function(){return m(i)})(e.validate(t,r))},c)}var z=o({Key:p,Value:p}),D=o({Id:p,Settings:S(l(z))}),b=d.pipe(o({mail:y(h,!1),gui:y(h,!1),phoneMobile:y(h,!1)})),E=new x("NotificationTypesInactive",e=>Array.isArray(e)&&e.every(i=>typeof i=="string"),(e,i)=>typeof e=="string"?m(e.split(";").filter(Boolean)):R(e,i),e=>e.join(";")),Q=function(e){return e.Grid="grid",e.List="list",e}(Q||{}),w=d.pipe(o({presenceControl:U({grid:null,list:null})})),X=o({eventId:v(A),group:v(G.props.Key)}),N=d.pipe(S(l(X))),Y=o({AccessInfo:o({Roles:l(p),Permissions:l(p)})});var L=(()=>{let i=class i extends M{constructor(t,r){super(t,r,D,"UserSettings")}getUserSettingsCst(t){return this.http.get(`${this.baseUrl}/Cst`,{params:t}).pipe(n(s(this.codec)))}updateUserSettingsCst(t){return this.http.patch(`${this.baseUrl}/Cst`,t)}getAccessInfo(){return this.http.get(`${this.baseUrl}/?expand=AccessInfo`).pipe(n(s(Y)),a(({AccessInfo:t})=>t))}};i.\u0275fac=function(r){return new(r||i)(f(j),f(F))},i.\u0275prov=g({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var et=100,H="presenceControlViewMode",W="presenceControlGroupView",B="notification",J="notificationTypesInactive",bt=(()=>{let i=class i{constructor(t){this.settingsRestService=t,this.refetch$=new T,this.settings$=this.refetch$.pipe(C(null),V(et),n(()=>this.settingsRestService.getUserSettingsCst()),a(r=>r.Settings),I(1)),this.accessInfo$=this.settingsRestService.getAccessInfo().pipe(I(1))}refetch(){this.refetch$.next()}getSetting(t){return this.settings$.pipe(a(r=>r.find(q=>q.Key===t)?.Value??null))}saveSetting(t,r){return this.settingsRestService.updateUserSettingsCst(this.buildSettings(t,r)).pipe(O(()=>this.refetch$.next()))}getPresenceControlViewMode(){return this.getSetting(H).pipe(u('{"presenceControl":"grid"}'),n(s(w)),a(({presenceControl:t})=>t))}savePresenceControlViewMode(t){return this.saveSetting(H,w.encode({presenceControl:t}))}getPresenceControlGroupView(){return this.getSetting(W).pipe(u("[]"),n(s(N)))}savePresenceControlGroupView(t){return this.saveSetting(W,N.encode(t))}getNotificationChannels(){return this.getSetting(B).pipe(u("{}"),n(s(b)))}saveNotificationChannels(t){return this.saveSetting(B,b.encode(t))}getNotificationTypesInactive(){return this.getSetting(J).pipe(u(""),n(s(E)))}saveNotificationTypesInactive(t){return this.saveSetting(J,E.encode(t))}getRolesAndPermissions(){return this.accessInfo$.pipe(a(({Roles:t,Permissions:r})=>[...t,...r]),C(null))}buildSettings(t,r){return{Id:"Cst",Settings:[{Key:t,Value:r}]}}};i.\u0275fac=function(r){return new(r||i)(f(L))},i.\u0275prov=g({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();export{Q as a,bt as b};
