"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[266],{8266:(M,c,t)=>{t.r(c),t.d(c,{DashboardModule:()=>_});var d=t(6482),l=t(3519),i=t(4004),n=t(4650),h=t(8623),r=t(6895),m=t(1104),u=t(2925),p=t(6188);function f(e,o){1&e&&n._UZ(0,"erz-spinner")}function g(e,o){1&e&&(n.TgZ(0,"p"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&e&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"dashboard.no-access")," "))}function v(e,o){1&e&&(n.TgZ(0,"div")(1,"h2"),n._uU(2),n.ALo(3,"translate"),n.qZA()()),2&e&&(n.xp6(2),n.Oqu(n.lcZ(3,1,"dashboard.search")))}function A(e,o){1&e&&(n.TgZ(0,"div")(1,"h2"),n._uU(2),n.ALo(3,"translate"),n.qZA()()),2&e&&(n.xp6(2),n.Oqu(n.lcZ(3,1,"dashboard.actions")))}function b(e,o){if(1&e&&(n.TgZ(0,"div",5),n.YNc(1,v,4,3,"div",1),n.YNc(2,A,4,3,"div",1),n.qZA()),2&e){const s=n.oxw().erzLet;n.xp6(1),n.Q6J("ngIf",s.hasSearch),n.xp6(1),n.Q6J("ngIf",s.hasActions)}}function T(e,o){1&e&&(n.TgZ(0,"div",6)(1,"h2"),n._uU(2),n.ALo(3,"translate"),n.qZA()()),2&e&&(n.xp6(2),n.Oqu(n.lcZ(3,1,"dashboard.timetable")))}function C(e,o){if(1&e&&(n.TgZ(0,"div")(1,"h1"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.YNc(4,f,1,0,"erz-spinner",1),n.YNc(5,g,3,3,"p",1),n.TgZ(6,"div",2),n.YNc(7,b,3,2,"div",3),n.YNc(8,T,4,3,"div",4),n.qZA()()),2&e){const s=o.erzLet;n.xp6(2),n.Oqu(n.lcZ(3,5,"dashboard.heading")),n.xp6(2),n.Q6J("ngIf",s.loading),n.xp6(1),n.Q6J("ngIf",!(s.loading||s.hasSearch||s.hasActions||s.hasTimetable)),n.xp6(2),n.Q6J("ngIf",s.hasSearch||s.hasActions),n.xp6(1),n.Q6J("ngIf",s.hasTimetable)}}const Z=function(e,o,s,a){return{loading:e,hasSearch:o,hasActions:s,hasTimetable:a}},x=["LessonTeacherRole","ClassTeacherRole","TeacherRole","AbsenceAdministratorRole"],R=["LessonTeacherRole","TeacherRole","StudentRole","SubstituteAdministratorRole"],D=["LessonTeacherRole","StudentRole"],L=[{path:"",component:(()=>{class e{constructor(s){this.settingsService=s,this.rolesAndPermissions$=this.settingsService.getRolesAndPermissions(),this.loading$=this.rolesAndPermissions$.pipe((0,i.U)(a=>null==a)),this.hasSearch$=this.rolesAndPermissions$.pipe((0,i.U)(this.hasRoles(x))),this.hasActions$=this.rolesAndPermissions$.pipe((0,i.U)(this.hasRoles(R))),this.hasTimetable$=this.rolesAndPermissions$.pipe((0,i.U)(this.hasRoles(D)))}hasRoles(s){return a=>(a??[]).some(O=>s.includes(O))}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(h.s))},e.\u0275cmp=n.Xpm({type:e,selectors:[["erz-dashboard"]],decls:5,vars:14,consts:[[4,"erzLet"],[4,"ngIf"],[1,"columns"],["class","search-actions-column",4,"ngIf"],["class","timetable-column",4,"ngIf"],[1,"search-actions-column"],[1,"timetable-column"]],template:function(s,a){1&s&&(n.YNc(0,C,9,7,"div",0),n.ALo(1,"async"),n.ALo(2,"async"),n.ALo(3,"async"),n.ALo(4,"async")),2&s&&n.Q6J("erzLet",n.l5B(9,Z,n.lcZ(1,1,a.loading$),n.lcZ(2,3,a.hasSearch$),n.lcZ(3,5,a.hasActions$),n.lcZ(4,7,a.hasTimetable$)))},dependencies:[r.O5,m.e,u.O,r.Ov,p.X$],styles:[".columns[_ngcontent-%COMP%]{display:flex;flex-direction:column}.columns[_ngcontent-%COMP%], .search-actions-column[_ngcontent-%COMP%]{gap:3rem}.search-actions-column[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.timetable-column[_ngcontent-%COMP%]{flex:2}@media (min-width: 992px){.columns[_ngcontent-%COMP%]{flex-direction:row;gap:1.5rem}}"],changeDetection:0}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[l.Bz.forChild(L),l.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.m,S]}),e})()}}]);