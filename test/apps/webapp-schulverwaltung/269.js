"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[269],{7269:(F,m,n)=>{n.r(m),n.d(m,{MySettingsModule:()=>q});var y=n(6486),p=n(1523),t=n(5879),h=n(2096),A=n(3019),M=n(5619),b=n(8645),d=n(7398),S=n(7081),v=n(4664),N=n(3997),x=n(2460),$=n(836),T=n(9773),Z=n(4716),L=n(7938),l=n(6223),z=n(6869),C=n(9515),O=n(2194),G=n(4141),U=n(6031),J=n(8173);let R=(()=>{class s{constructor(i,e){this.settings=i,this.storage=e,this.currentRoles=null}getNotificationTypes(){return this.getNotificationTypeKeys().map(i=>{if(!(i in this.settings.notificationTypes))throw new Error(`Key '${i}' is missing in 'notificationTypes' setting`);return{key:i,text:this.settings.notificationTypes[i]}})}getNotificationTypeKeys(){return(0,O.Z)(this.settings.notificationTypesAssignments.reduce((i,{roles:e,types:o})=>this.hasAnyRole(e)?[...i,...o]:i,[]))}hasAnyRole(i){return null===this.currentRoles&&(this.currentRoles=(0,U.F)(this.storage.getPayload()?.roles)),this.currentRoles.some(e=>i.includes(e))}static#t=this.\u0275fac=function(e){return new(e||s)(t.LFG(G.L6),t.LFG(J.V))};static#i=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var g=n(6814),I=n(6567),Y=n(59),Q=n(1703);function j(s,a){if(1&s&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&s){const i=a.$implicit;t.xp6(1),t.hij(" ",i," ")}}function B(s,a){if(1&s&&(t.TgZ(0,"div",4),t.YNc(1,j,2,1,"div",5),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.descriptionLines)}}let w=(()=>{class s{constructor(i){this.cd=i,this.id="",this.label="",this.description=null,this.disabled=!1,this.onChange=e=>{},this.onTouched=()=>{},this._value=!1}get value(){return this._value}set value(i){this._value=i,this.onChange(i)}get descriptionLines(){return this.description?this.description.split("\n"):[]}writeValue(i){this._value=i}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}static#t=this.\u0275fac=function(e){return new(e||s)(t.Y36(t.sBO))};static#i=this.\u0275cmp=t.Xpm({type:s,selectors:[["erz-my-settings-notifications-toggle"]],inputs:{id:"id",label:"label",description:"description",disabled:"disabled"},features:[t._Bn([{provide:l.JU,useExisting:(0,t.Gpc)(()=>s),multi:!0}])],decls:5,vars:6,consts:[[1,"d-flex","align-items-center"],[1,"flex-fill"],[3,"id","value","disabled","valueChange"],["class","form-text",4,"ngIf"],[1,"form-text"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"label",1),t._uU(2),t.qZA(),t.TgZ(3,"erz-switch",2),t.NdJ("valueChange",function(u){return o.value=u}),t.qZA()(),t.YNc(4,B,2,1,"div",3)),2&e&&(t.xp6(1),t.uIk("for",o.id),t.xp6(1),t.hij(" ",o.label," "),t.xp6(1),t.Q6J("id",o.id)("value",o.value)("disabled",o.disabled),t.xp6(1),t.Q6J("ngIf",o.description))},dependencies:[g.sg,g.O5,Q.q],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return s})();function E(s,a){1&s&&(t.TgZ(0,"div",6),t._UZ(1,"erz-spinner",7),t.qZA())}function D(s,a){if(1&s&&(t._UZ(0,"erz-my-settings-notifications-toggle",10),t.ALo(1,"async"),t.ALo(2,"async")),2&s){const i=a.$implicit;t.ekj("mt-4",a.index>0),t.Q6J("id","notification-channels-"+i.key)("label",t.lcZ(1,6,i.label))("description",t.lcZ(2,8,i.description))("formControlName",i.key)}}function P(s,a){if(1&s&&(t.TgZ(0,"form",8),t.YNc(1,D,3,10,"erz-my-settings-notifications-toggle",9),t.qZA()),2&s){const i=t.oxw().erzLet,e=t.oxw();t.Q6J("formGroup",i.channelsFormGroup),t.xp6(1),t.Q6J("ngForOf",e.channelsSettings)}}function X(s,a){if(1&s&&(t._UZ(0,"erz-my-settings-notifications-toggle",10),t.ALo(1,"async"),t.ALo(2,"async")),2&s){const i=a.$implicit;t.ekj("mt-4",a.index>0),t.Q6J("id","notification-types-"+i.key)("label",t.lcZ(1,6,i.label))("description",t.lcZ(2,8,i.description))("formControlName",i.key)}}function V(s,a){if(1&s&&(t.TgZ(0,"form",8),t.YNc(1,X,3,10,"erz-my-settings-notifications-toggle",9),t.qZA()),2&s){const i=t.oxw().erzLet,e=t.oxw();t.Q6J("formGroup",i.typesFormGroup),t.xp6(1),t.Q6J("ngForOf",e.typesSettings)}}function K(s,a){if(1&s&&(t.TgZ(0,"div",1)(1,"h2",2)(2,"span"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.YNc(5,E,2,0,"div",3),t.ALo(6,"async"),t.qZA(),t.YNc(7,P,2,2,"form",4),t.TgZ(8,"p",5),t._uU(9),t.ALo(10,"translate"),t.qZA(),t._UZ(11,"hr"),t.YNc(12,V,2,2,"form",4),t.qZA()),2&s){const i=a.erzLet,e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,5,"my-settings.notifications.title")),t.xp6(2),t.Q6J("ngIf",t.lcZ(6,7,e.saving$)),t.xp6(2),t.Q6J("ngIf",i.channelsFormGroup),t.xp6(2),t.hij(" ",t.lcZ(10,9,"my-settings.notifications.privacy-hint")," "),t.xp6(3),t.Q6J("ngIf",i.typesFormGroup)}}const W=function(s,a){return{channelsFormGroup:s,typesFormGroup:a}};let H=(()=>{class s{constructor(i,e,o,c,u){this.userSettings=i,this.formBuilder=e,this.toastService=o,this.translate=c,this.notificationTypes=u,this.channelsSettings=[{key:"gui",label:this.translate.get("my-settings.notifications.gui")},{key:"mail",label:this.translate.get("my-settings.notifications.mail")},{key:"phoneMobile",label:this.translate.get("my-settings.notifications.phoneMobile")}],this.typesSettings=this.notificationTypes.getNotificationTypes().map(r=>{const{label:f,description:tt}="fr-CH"===this.translate.currentLang?r.text.fr:r.text.de;return{key:r.key,label:(0,h.of)(f),description:(0,h.of)(tt)}}),this.channelsValue$=this.userSettings.getNotificationChannels(),this.typesValue$=this.userSettings.getNotificationTypesInactive().pipe((0,d.U)(this.typesArrayToRecord.bind(this))),this.channelsFormGroup$=this.channelsValue$.pipe((0,d.U)(r=>this.createFormGroup(this.channelsSettings,r)),(0,S.d)(1)),this.allChannelsInactive$=(0,A.T)(this.channelsValue$,this.channelsFormGroup$.pipe((0,v.w)(r=>r.valueChanges))).pipe((0,d.U)(r=>Object.values(r).every(f=>!f)),(0,N.x)()),this.typesFormGroup$=this.typesValue$.pipe((0,x.M)(this.allChannelsInactive$),(0,d.U)(([r,f])=>this.createFormGroup(this.typesSettings,r,!0,f)),(0,S.d)(1)),this.saving$=new M.X(!1),this.destroy$=new b.x}ngOnInit(){this.userSettings.refetch(),this.allChannelsInactive$.pipe((0,$.T)(1),(0,x.M)(this.typesFormGroup$),(0,T.R)(this.destroy$)).subscribe(([i,e])=>{Object.values(e.controls).forEach(o=>i?o.disable():o.enable())}),this.channelsFormGroup$.pipe((0,T.R)(this.destroy$),(0,v.w)(i=>i.valueChanges)).subscribe(this.saveChannels.bind(this)),this.typesFormGroup$.pipe((0,T.R)(this.destroy$),(0,v.w)(i=>i.valueChanges)).subscribe(this.saveTypes.bind(this))}ngOnDestroy(){this.destroy$.next()}createFormGroup(i,e,o=!1,c=!1){return this.formBuilder.group(i.reduce((u,{key:r})=>({...u,[r]:[{value:e[r]??o,disabled:c}]}),{}))}saveChannels(i){this.saving$.next(!0),this.userSettings.saveNotificationChannels(i).pipe((0,Z.x)(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}saveTypes(i){this.saving$.next(!0),this.userSettings.saveNotificationTypesInactive(this.typesRecordToArray(i)).pipe((0,Z.x)(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}onSaveSuccess(){this.toastService.success(this.translate.instant("my-settings.notifications.save-success"))}typesArrayToRecord(i){return this.typesSettings.reduce((o,{key:c})=>({...o,[c]:!i.includes(c)}),{})}typesRecordToArray(i){return Object.keys(i).reduce((o,c)=>i[c]?o:[...o,c],[])}static#t=this.\u0275fac=function(e){return new(e||s)(t.Y36(L.s),t.Y36(l.QS),t.Y36(z.k),t.Y36(C.sK),t.Y36(R))};static#i=this.\u0275cmp=t.Xpm({type:s,selectors:[["erz-my-settings-notifications"]],decls:3,vars:8,consts:[["class","pb-4",4,"erzLet"],[1,"pb-4"],[1,"m-0","pb-3","d-flex","align-items-stretch"],["class","position-relative",4,"ngIf"],[3,"formGroup",4,"ngIf"],[1,"mt-4","form-text"],[1,"position-relative"],[1,"position-absolute","inline","small","d-inline-block","ms-2"],[3,"formGroup"],[3,"id","label","description","formControlName","mt-4",4,"ngFor","ngForOf"],[3,"id","label","description","formControlName"]],template:function(e,o){1&e&&(t.YNc(0,K,13,11,"div",0),t.ALo(1,"async"),t.ALo(2,"async")),2&e&&t.Q6J("erzLet",t.WLB(5,W,t.lcZ(1,1,o.channelsFormGroup$),t.lcZ(2,3,o.typesFormGroup$)))},dependencies:[g.sg,g.O5,l._Y,l.JJ,l.JL,l.sg,l.u,I.e,Y.O,w,g.Ov,C.X$],styles:[".checkbox[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{position:static!important;margin:0!important}"],changeDetection:0})}return s})();const k=[{path:"",component:(()=>{class s{constructor(){}static#t=this.\u0275fac=function(e){return new(e||s)};static#i=this.\u0275cmp=t.Xpm({type:s,selectors:[["erz-my-settings"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"router-outlet")},dependencies:[p.lC],changeDetection:0})}return s})(),children:[{path:"",component:(()=>{class s{static#t=this.\u0275fac=function(e){return new(e||s)};static#i=this.\u0275cmp=t.Xpm({type:s,selectors:[["erz-my-settings-show"]],decls:5,vars:3,consts:[[1,"erz-container","erz-container-limited"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"erz-my-settings-notifications"),t.qZA()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"my-settings.title")))},dependencies:[H,C.X$]})}return s})()}]}];let _=(()=>{class s{static#t=this.\u0275fac=function(e){return new(e||s)};static#i=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(k),p.Bz]})}return s})(),q=(()=>{class s{static#t=this.\u0275fac=function(e){return new(e||s)};static#i=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[y.m,_]})}return s})()},2194:(F,m,n)=>{n.d(m,{Z:()=>t});var y=n(9473);const t=function p(h){return h&&h.length?(0,y.Z)(h):[]}}}]);