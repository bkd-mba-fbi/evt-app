import{Id as g,Ld as u,Mb as s,X as o,_ as r}from"./chunk-IFJN5CDK.js";var i=["de-CH","fr-CH"],n=i[0];function f(){return[{provide:s,useFactory:t=>t.detectLanguage(),deps:[c]}]}var c=(()=>{class t{constructor(e,a){this.translate=e,this.storage=a}initialize(){this.translate.setDefaultLang(n),this.translate.use(this.detectLanguage())}detectLanguage(){return this.detectedLanguage||(this.detectedLanguage=this.getDocumentLanguage()||this.getStoredLanguage()||this.getBrowserLanguage()||n),this.detectedLanguage}getLocalizedLanguage(e){return e=i.find(a=>a===`${(e||"").toLowerCase()}-CH`),e||n}getDocumentLanguage(){let e=document.querySelector("[lang]");return this.normalizeLanguage(e&&e.lang)}getStoredLanguage(){return this.normalizeLanguage(this.storage.getLanguage())}getBrowserLanguage(){return this.normalizeLanguage(this.translate.getBrowserLang())}normalizeLanguage(e){return e=(e||"").split("-")[0],e&&i.find(a=>e===a.split("-")[0])||null}static{this.\u0275fac=function(a){return new(a||t)(r(g),r(u))}}static{this.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{f as a,c as b};
