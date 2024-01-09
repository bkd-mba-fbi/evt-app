(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=globalThis,Hn=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fn=Symbol(),Pr=new WeakMap;let ci=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Fn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Hn&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Pr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Pr.set(n,e))}return e}toString(){return this.cssText}};const vo=t=>new ci(typeof t=="string"?t:t+"",void 0,Fn),I=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new ci(n,t,Fn)},yo=(t,e)=>{if(Hn)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=xt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},Cr=Hn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return vo(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wo,defineProperty:ko,getOwnPropertyDescriptor:_o,getOwnPropertyNames:Ao,getOwnPropertySymbols:Eo,getPrototypeOf:To}=Object,de=globalThis,Rr=de.trustedTypes,So=Rr?Rr.emptyScript:"",gn=de.reactiveElementPolyfillSupport,tt=(t,e)=>t,Nt={toAttribute(t,e){switch(e){case Boolean:t=t?So:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Bn=(t,e)=>!wo(t,e),xr={attribute:!0,type:String,converter:Nt,reflect:!1,hasChanged:Bn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),de.litPropertyMetadata??(de.litPropertyMetadata=new WeakMap);class ze extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=xr){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&ko(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:s}=_o(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const c=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xr}static _$Ei(){if(this.hasOwnProperty(tt("elementProperties")))return;const e=To(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tt("properties"))){const n=this.properties,r=[...Ao(n),...Eo(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Cr(i))}else e!==void 0&&n.push(Cr(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$E_)==null||n.delete(e)}_$ES(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n){var s;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Nt).toAttribute(n,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,n){var s;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Nt;this._$Em=i,this[i]=c.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(e,n,r,i=!1,s){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Bn)(i?s:this[e],n))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(n)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(e){}firstUpdated(e){}}ze.elementStyles=[],ze.shadowRootOptions={mode:"open"},ze[tt("elementProperties")]=new Map,ze[tt("finalized")]=new Map,gn==null||gn({ReactiveElement:ze}),(de.reactiveElementVersions??(de.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=globalThis,Mt=nt.trustedTypes,Or=Mt?Mt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Wn="$lit$",oe=`lit$${(Math.random()+"").slice(9)}$`,Gn="?"+oe,$o=`<${Gn}>`,Te=document,ot=()=>Te.createComment(""),st=t=>t===null||typeof t!="object"&&typeof t!="function",ui=Array.isArray,di=t=>ui(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",mn=`[ 	
\f\r]`,Xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ir=/-->/g,Lr=/>/g,ve=RegExp(`>|${mn}(?:([^\\s"'>=/]+)(${mn}*=${mn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nr=/'/g,Mr=/"/g,hi=/^(?:script|style|textarea|title)$/i,Po=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),A=Po(1),se=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Dr=new WeakMap,_e=Te.createTreeWalker(Te,129);function pi(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Or!==void 0?Or.createHTML(e):e}const fi=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=Xe;for(let c=0;c<n;c++){const l=t[c];let u,f,d=-1,g=0;for(;g<l.length&&(o.lastIndex=g,f=o.exec(l),f!==null);)g=o.lastIndex,o===Xe?f[1]==="!--"?o=Ir:f[1]!==void 0?o=Lr:f[2]!==void 0?(hi.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=ve):f[3]!==void 0&&(o=ve):o===ve?f[0]===">"?(o=i??Xe,d=-1):f[1]===void 0?d=-2:(d=o.lastIndex-f[2].length,u=f[1],o=f[3]===void 0?ve:f[3]==='"'?Mr:Nr):o===Mr||o===Nr?o=ve:o===Ir||o===Lr?o=Xe:(o=ve,i=void 0);const h=o===ve&&t[c+1].startsWith("/>")?" ":"";s+=o===Xe?l+$o:d>=0?(r.push(u),l.slice(0,d)+Wn+l.slice(d)+oe+h):l+oe+(d===-2?c:h)}return[pi(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class at{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const c=e.length-1,l=this.parts,[u,f]=fi(e,n);if(this.el=at.createElement(u,r),_e.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=_e.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Wn)){const g=f[o++],h=i.getAttribute(d).split(oe),b=/([.?@])?(.*)/.exec(g);l.push({type:1,index:s,name:b[2],strings:h,ctor:b[1]==="."?mi:b[1]==="?"?bi:b[1]==="@"?vi:gt}),i.removeAttribute(d)}else d.startsWith(oe)&&(l.push({type:6,index:s}),i.removeAttribute(d));if(hi.test(i.tagName)){const d=i.textContent.split(oe),g=d.length-1;if(g>0){i.textContent=Mt?Mt.emptyScript:"";for(let h=0;h<g;h++)i.append(d[h],ot()),_e.nextNode(),l.push({type:2,index:++s});i.append(d[g],ot())}}}else if(i.nodeType===8)if(i.data===Gn)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(oe,d+1))!==-1;)l.push({type:7,index:s}),d+=oe.length-1}s++}}static createElement(e,n){const r=Te.createElement("template");return r.innerHTML=e,r}}function Se(t,e,n=t,r){var o,c;if(e===se)return e;let i=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const s=st(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=Se(t,i._$AS(t,e.values),i,r)),e}class gi{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??Te).importNode(n,!0);_e.currentNode=i;let s=_e.nextNode(),o=0,c=0,l=r[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new Ge(s,s.nextSibling,this,e):l.type===1?u=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(u=new yi(s,this,e)),this._$AV.push(u),l=r[++c]}o!==(l==null?void 0:l.index)&&(s=_e.nextNode(),o++)}return _e.currentNode=Te,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class Ge{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Se(this,e,n),st(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==se&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):di(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==R&&st(this._$AH)?this._$AA.nextSibling.data=e:this.$(Te.createTextNode(e)),this._$AH=e}g(e){var s;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=at.createElement(pi(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(n);else{const o=new gi(i,this),c=o.u(this.options);o.p(n),this.$(c),this._$AH=o}}_$AC(e){let n=Dr.get(e.strings);return n===void 0&&Dr.set(e.strings,n=new at(e)),n}T(e){ui(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new Ge(this.k(ot()),this.k(ot()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class gt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=R}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=Se(this,e,n,0),o=!st(e)||e!==this._$AH&&e!==se,o&&(this._$AH=e);else{const c=e;let l,u;for(e=s[0],l=0;l<s.length-1;l++)u=Se(this,c[r+l],n,l),u===se&&(u=this._$AH[l]),o||(o=!st(u)||u!==this._$AH[l]),u===R?e=R:e!==R&&(e+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!i&&this.O(e)}O(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class mi extends gt{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===R?void 0:e}}class bi extends gt{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}}class vi extends gt{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){if((e=Se(this,e,n,0)??R)===se)return;const r=this._$AH,i=e===R&&r!==R||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==R&&(r===R||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class yi{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}}const Co={j:Wn,P:oe,A:Gn,C:1,M:fi,L:gi,R:di,V:Se,D:Ge,I:gt,H:bi,N:vi,U:mi,B:yi},bn=nt.litHtmlPolyfillSupport;bn==null||bn(at,Ge),(nt.litHtmlVersions??(nt.litHtmlVersions=[])).push("3.1.0");const Ro=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const s=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Ge(e.insertBefore(ot(),s),s,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let O=class extends ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ro(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return se}};var li;O._$litElement$=!0,O.finalized=!0,(li=globalThis.litElementHydrateSupport)==null||li.call(globalThis,{LitElement:O});const vn=globalThis.litElementPolyfillSupport;vn==null||vn({LitElement:O});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xo={attribute:!0,type:String,converter:Nt,reflect:!1,hasChanged:Bn},Oo=(t=xo,e,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,t),r==="accessor"){const{name:o}=n;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,l,t)},init(c){return c!==void 0&&this.C(o,void 0,t),c}}}if(r==="setter"){const{name:o}=n;return function(c){const l=this[o];e.call(this,c),this.requestUpdate(o,l,t)}}throw Error("Unsupported decorator location: "+r)};function V(t){return(e,n)=>typeof n=="object"?Oo(t,e,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qe(t){return V({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(t,e){return(n,r,i)=>{const s=o=>{var c;return((c=o.renderRoot)==null?void 0:c.querySelector(t))??null};if(e){const{get:o,set:c}=typeof r=="object"?n:i??(()=>{const l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return Ur(n,r,{get(){let l=o.call(this);return l===void 0&&(l=s(this),(l!==null||this.hasUpdated)&&c.call(this,l)),l}})}return Ur(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Kt=t=>(...e)=>({_$litDirective$:t,values:e});let Vt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Io}=Co,zr=()=>document.createComment(""),Qe=(t,e,n)=>{var s;const r=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const o=r.insertBefore(zr(),i),c=r.insertBefore(zr(),i);n=new Io(o,c,t,t.options)}else{const o=n._$AB.nextSibling,c=n._$AM,l=c!==t;if(l){let u;(s=n._$AQ)==null||s.call(n,t),n._$AM=t,n._$AP!==void 0&&(u=t._$AU)!==c._$AU&&n._$AP(u)}if(o!==i||l){let u=n._$AA;for(;u!==o;){const f=u.nextSibling;r.insertBefore(u,i),u=f}}}return n},ye=(t,e,n=t)=>(t._$AI(e,n),t),Lo={},wi=(t,e=Lo)=>t._$AH=e,No=t=>t._$AH,yn=t=>{var r;(r=t._$AP)==null||r.call(t,!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo=Kt(class extends Vt{constructor(){super(...arguments),this.key=R}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(wi(t),this.key=e),n}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function je(t,e,n){return t?e(t):n==null?void 0:n(t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Do=t=>typeof t!="string"&&"strTag"in t,ki=(t,e,n)=>{let r=t[0];for(let i=1;i<t.length;i++)r+=e[n?n[i-1]:i-1],r+=t[i];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=t=>Do(t)?ki(t.strings,t.values):t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rn="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Uo{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Rn,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Rn,this.__litLocalizeEventHandler)}}const zo=t=>t.addController(new Uo(t)),jo=zo;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=()=>(t,e)=>(t.addInitializer(jo),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ai{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const ie=[];for(let t=0;t<256;t++)ie[t]=(t>>4&15).toString(16)+(t&15).toString(16);function Ho(t){let e=0,n=8997,r=0,i=33826,s=0,o=40164,c=0,l=52210;for(let u=0;u<t.length;u++)n^=t.charCodeAt(u),e=n*435,r=i*435,s=o*435,c=l*435,s+=n<<8,c+=i<<8,r+=e>>>16,n=e&65535,s+=r>>>16,i=r&65535,l=c+(s>>>16)&65535,o=s&65535;return ie[l>>8]+ie[l&255]+ie[o>>8]+ie[o&255]+ie[i>>8]+ie[i&255]+ie[n>>8]+ie[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fo="",Bo="h",Wo="s";function Go(t,e){return(e?Bo:Wo)+Ho(typeof t=="string"?t:t.join(Fo))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jr=new WeakMap,Hr=new Map;function qo(t,e,n){if(t){const r=(n==null?void 0:n.id)??Ko(e),i=t[r];if(i){if(typeof i=="string")return i;if("strTag"in i)return ki(i.strings,e.values,i.values);{let s=jr.get(i);return s===void 0&&(s=i.values,jr.set(i,s)),{...i,values:s.map(o=>e.values[o])}}}}return _i(e)}function Ko(t){const e=typeof t=="string"?t:t.strings;let n=Hr.get(e);return n===void 0&&(n=Go(e,typeof t!="string"&&!("strTag"in t)),Hr.set(e,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wn(t){window.dispatchEvent(new CustomEvent(Rn,{detail:t}))}let Dt="",kn,Ei,Ut,xn,Ti,ke=new Ai;ke.resolve();let $t=0;const Vo=t=>(Qo((e,n)=>qo(Ti,e,n)),Dt=Ei=t.sourceLocale,Ut=new Set(t.targetLocales),Ut.add(t.sourceLocale),xn=t.loadLocale,{getLocale:Yo,setLocale:Xo}),Yo=()=>Dt,Xo=t=>{if(t===(kn??Dt))return ke.promise;if(!Ut||!xn)throw new Error("Internal error");if(!Ut.has(t))throw new Error("Invalid locale code");$t++;const e=$t;return kn=t,ke.settled&&(ke=new Ai),wn({status:"loading",loadingLocale:t}),(t===Ei?Promise.resolve({templates:void 0}):xn(t)).then(r=>{$t===e&&(Dt=t,kn=void 0,Ti=r.templates,wn({status:"ready",readyLocale:t}),ke.resolve())},r=>{$t===e&&(wn({status:"error",errorLocale:t,errorMessage:r.toString()}),ke.reject(r))}),ke.promise};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let k=_i,Fr=!1;function Qo(t){if(Fr)throw new Error("lit-localize can only be configured once");k=t,Fr=!0}function Si(t){return typeof t=="function"?t():t}const qt=class qt extends Event{constructor(e,n,r){super(qt.eventName,{cancelable:!1}),this.key=e,this.value=n,this.state=r}};qt.eventName="lit-state-changed";let Ae=qt;const Zo=(t,e)=>e!==t&&(e===e||t===t),tr=class tr extends EventTarget{static initPropertyMap(){this.propertyMap||(this.propertyMap=new Map)}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([e])=>[e,this[e]]))}constructor(){super(),this.hookMap=new Map,this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([e,n])=>{if(n.initialValue!==void 0){const r=Si(n.initialValue);this[e]=r,n.value=r}})}static finalize(){if(this.finalized)return!1;this.finalized=!0;const e=Object.keys(this.properties||{});for(const n of e)this.createProperty(n,this.properties[n]);return!0}static createProperty(e,n){this.finalize();const r=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(String(e),r,n);Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,n,r){const i=(r==null?void 0:r.hasChanged)||Zo;return{get(){return this[n]},set(s){const o=this[e];this[n]=s,i(s,o)===!0&&this.dispatchStateEvent(e,s,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(e=>e.reset()),[...this.propertyMap].filter(([e,n])=>!(n.skipReset===!0||n.resetValue===void 0)).forEach(([e,n])=>{this[e]=n.resetValue})}subscribe(e,n,r){n&&!Array.isArray(n)&&(n=[n]);const i=s=>{(!n||n.includes(s.key))&&e(s.key,s.value,this)};return this.addEventListener(Ae.eventName,i,r),()=>this.removeEventListener(Ae.eventName,i)}dispatchStateEvent(e,n,r){this.dispatchEvent(new Ae(e,n,r))}};tr.finalized=!1;let On=tr;const Br="DONOTUSE",nr=class nr{constructor(e){if(this.state=e,!this.constructor.hookName||this.constructor.hookName===Br)throw new Error("hook subclass must have their own hookName");this.unsubscribe=this.subscribe(),e.hookMap.set(this.constructor.hookName,this)}subscribe(){return this.state.subscribe(this.fromState.bind(this),this.hookedProps.map(([e])=>e))}get hookedProps(){const e=Object.getPrototypeOf(this.state);return e.propertyMap||e.initPropertyMap(),[...e.propertyMap].filter(([,n])=>(n==null?void 0:n.hook)&&(n==null?void 0:n.hook[this.constructor.hookName]))}isHookedProp(e){var n,r;return(r=(n=this.getDefinition(e))==null?void 0:n.hook)==null?void 0:r[this.constructor.hookName]}getDefinition(e){return this.state.propertyMap.get(e)}toState(e){Object.entries(e).filter(([n])=>this.isHookedProp(n)).forEach(([n,r])=>this.state[n]=r)}fromState(e,n,r){throw"fromState must be implemented in subclasses"}reset(){throw"reset hook must be implemented in subclasses"}};nr.hookName=Br;let Wr=nr;class ae{constructor(e,n,r){this.host=e,this.state=n,this.callback=r||(()=>this.host.requestUpdate()),this.host.addController(this)}hostConnected(){this.state.addEventListener(Ae.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(Ae.eventName,this.callback)}}function le(t){return(e,n)=>{if(Object.getOwnPropertyDescriptor(e,n))throw new Error("@property must be called before all state decorators");const r=e.constructor;r.initPropertyMap();const i=e.hasOwnProperty(n);return r.propertyMap.set(n,{...t,initialValue:t==null?void 0:t.value,resetValue:t==null?void 0:t.value}),r.createProperty(n,t),i?Object.getOwnPropertyDescriptor(e,n):void 0}}function Jo(t,e){if(t!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{t=JSON.parse(t)}catch{console.warn("cannot parse value",t)}return t}const es=new URL(location.href);function ts(t){return(e,n)=>{if(!Object.getOwnPropertyDescriptor(e,n))throw new Error("@local-storage decorator need to be called after @property");const i=e.constructor,s=`${(t==null?void 0:t.parameter)||String(n)}`,o=i.propertyMap.get(n),c=o==null?void 0:o.type;if(o){const l=o.initialValue,u=es.searchParams.get(s);u!==null&&(o.skipAsync=!0),o.initialValue=()=>Jo(u,c)??Si(l),i.propertyMap.set(n,{...o,...t});return}}}const L={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"anmeldedetailsEinlesen",scope:"NG",root:"apps/EmberApps/AnmeldedetailsEinlesen/index.html",heading:!0},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},get navigationPhotoList(){return{key:"photoList",label:k("Fotoliste"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"}},get navigationInputGrades(){return{key:"inputGrades",label:k("Noteneingabe"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"}},get navigationMyProfile(){return{key:"myProfile",label:k("Mein Profil"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"}},get navigationMySettings(){return{key:"mySettings",label:k("Einstellungen"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"}},get navigation(){return[{label:k("Unterricht"),items:[{key:"presenceControl",label:k("Präsenzkontrolle"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",label:k("Aktuelle Fächer"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",label:k("Tests und Bewertung"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",label:k("Stellvertretung erfassen"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",label:k("Stellvertretung ausüben"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{label:k("Absenzen"),items:[{key:"openAbsences",label:k("Offene Absenzen entschuldigen"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",label:k("Absenzen bearbeiten"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",label:k("Absenzen auswerten"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{label:k("Aus-/Weiterbildung"),items:[{key:"myAbsences",label:k("Absenzen"),allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",label:k("Noten"),allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{label:k("Angebote"),items:[{key:"coursesAndEvents",label:k("Kurse und Veranstaltungen"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",label:k("Schulinterne Weiterbildung"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole","Reservations"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",label:k("Räume und Geräte reservieren"),allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{label:k("Administration"),items:[{key:"substitutionsAdmin",label:k("Stellvertretungen administrieren"),allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",label:k("Personen und Institutionen suchen"),allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"eventRegistration",label:k("Anmeldedetails einlesen"),allowedRolesOrPermissions:["PersonRight","RegistrationRightAusbildungSemester","RegistrationRightAusbildungKurs","RegistrationRightAusbildungModulanlass","RegistrationRightAusbildungModul","RegistrationRightAusbildungStudiengang","RegistrationRightAusbildungStudienjahrgang","RegistrationRightAusbildungVeranstaltung","RegistrationRightWeiterbildungCAS","RegistrationRightWeiterbildungCASAnlass","RegistrationRightWeiterbildungDAS","RegistrationRightWeiterbildungDASJahrgang","RegistrationRightWeiterbildungInteressent","RegistrationRightWeiterbildungKurs","RegistrationRightWeiterbildungMAS","RegistrationRightWeiterbildungMASJahrgang","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungModulbefreiung","RegistrationRightWeiterbildungSemester","RegistrationRightWeiterbildungVeranstaltung","RegistrationRightWeiterbildungEvaluationsanlass","RegistrationRightWeiterbildungFakturierung","RegistrationRightWeiterbildungMailingliste","RegistrationRightWeiterbildungPlatzangebot","RegistrationRightWeiterbildungReservation"],deniedInstanceIds:null,appKey:"anmeldedetailsEinlesen",appPath:"#/input"}]}]}};function Yt(){var t;return((t=window.eventoPortal)==null?void 0:t.settings)??{apiServer:"",oAuthServer:"",oAuthPrefix:"",oAuthClientId:"",notificationRefreshTime:30}}function lt(t){const{instance_id:e,scope:n,culture_info:r,nbf:i,exp:s,substitution_id:o,holder_roles:c}=os(t);return{instanceId:e,scope:n,locale:r,issueTime:i,expirationTime:s,substitutionId:o?parseInt(o,10):void 0,substitutionRoles:c?c.split(";"):void 0}}function Gr(t,e,n){if(!t)return!1;const r=lt(t);return r.scope===e&&r.locale===n&&!rs(r)}function ns(t){if(!t)return!0;const{expirationTime:e}=t,n=Math.floor(Date.now()/1e3);return e<n}function rs(t){if(!t)return!0;const{issueTime:e,expirationTime:n}=t,r=n-e,i=Math.floor(Date.now()/1e3);return n<=i+r/2}function is(t){const{expirationTime:e}=t;return Math.max(e*1e3-Date.now(),0)}function os(t){const n=t.split(".")[1].replace("-","+").replace("_","/"),r=decodeURIComponent(window.atob(n).split("").map(function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}const $i="bkdInstance",In="bkdCodeVerifier",ct="bkdRedirectUrl",Kn="bkdAccessToken",Vn="bkdRefreshToken",ut="CLX.LoginToken",ss="uiCulture",as="CLX.TokenExpire";function Pi(){return localStorage.getItem($i)}function ls(t){localStorage.setItem($i,t)}function cs(t){return localStorage.getItem(`${Kn}_${t}`)}function us(){return localStorage.getItem(Vn)}function ds(t){t&&localStorage.setItem(Vn,t)}function hs(t,e){localStorage.setItem(`${Kn}_${t}`,e)}function ps(){new Array(localStorage.length).fill(void 0).forEach((t,e)=>{const n=localStorage.key(e);n&&(n.startsWith(Kn)||n===Vn)&&localStorage.removeItem(n)}),sessionStorage.removeItem(ut)}function fs(t){localStorage.setItem(ss,t)}function gs(){const t=sessionStorage.getItem(ut);return t?t.replace(/^"+|"+$/g,""):null}function ms(){const t=localStorage.getItem(ut);return t?t.replace(/^"+|"+$/g,""):null}function bs(t){sessionStorage.setItem(ut,`"${t}"`),localStorage.setItem(ut,`"${t}"`);let{expirationTime:e}=lt(t);e=e*1e3,localStorage.setItem(as,e.toString())}function vs(){const t=sessionStorage.getItem(In),e=sessionStorage.getItem(ct)??void 0;return sessionStorage.removeItem(ct),sessionStorage.removeItem(In),t?{redirectUri:e,codeVerifier:t}:null}function ys(t,e){sessionStorage.setItem(In,t),e?sessionStorage.setItem(ct,e):sessionStorage.removeItem(ct)}function ws(){return sessionStorage.getItem(ct)}class ks{constructor(){this.state={refreshToken:us(),refreshTokenPayload:null,accessToken:gs(),accessTokenPayload:null},this.refreshTokenSubscribers=[],this.accessTokenSubscribers=[],this.afterRefreshTokenUpdate(this.refreshToken,!1),this.afterAccessTokenUpdate(this.accessToken,!1)}get refreshToken(){return this.state.refreshToken}set refreshToken(e){this.state.refreshToken=e,this.afterRefreshTokenUpdate(e)}get refreshTokenPayload(){return this.state.refreshTokenPayload}get accessToken(){return this.state.accessToken}set accessToken(e){this.state.accessToken=e,this.afterAccessTokenUpdate(e)}get accessTokenPayload(){return this.state.accessTokenPayload}get authenticated(){return!!this.accessToken}get scope(){var e;return((e=this.accessTokenPayload)==null?void 0:e.scope)??null}get locale(){var e;return((e=this.accessTokenPayload)==null?void 0:e.locale)??null}get instanceId(){var e;return((e=this.accessTokenPayload)==null?void 0:e.instanceId)??null}isRefreshTokenExpired(){return ns(this.refreshTokenPayload)}resetAllTokens(){this.state.refreshToken=null,this.state.refreshTokenPayload=null,this.state.accessToken=null,this.state.accessTokenPayload=null,ps()}onRefreshTokenUpdate(e){return this.refreshTokenSubscribers.push(e),()=>{const n=this.refreshTokenSubscribers.findIndex(r=>r===e);this.refreshTokenSubscribers.splice(n,1)}}onAccessTokenUpdate(e){return this.accessTokenSubscribers.push(e),()=>{const n=this.accessTokenSubscribers.findIndex(r=>r===e);this.accessTokenSubscribers.splice(n,1)}}afterRefreshTokenUpdate(e,n=!0){this.state.refreshTokenPayload=e?lt(e):null,e&&n&&ds(e),this.notifyRefreshTokenSubscribers()}afterAccessTokenUpdate(e,n=!0){const r=e?lt(e):null;this.state.accessTokenPayload=r,e&&r&&n&&(hs(r.scope,e),bs(e)),this.notifyAccessTokenSubscribers()}notifyRefreshTokenSubscribers(){this.refreshTokenSubscribers.forEach(e=>e(this.refreshTokenPayload))}notifyAccessTokenSubscribers(){this.accessTokenSubscribers.forEach(e=>e(this.accessTokenPayload))}}const P=new ks,he=Yt();if(typeof(he==null?void 0:he.apiServer)!="string")throw new Error("Invalid 'apiServer' setting");async function _s(){var n,r;const t=`${he.apiServer}/UserSettings/?expand=AccessInfo`,e=await mt(t);return{roles:((n=e==null?void 0:e.AccessInfo)==null?void 0:n.Roles)??[],permissions:((r=e==null?void 0:e.AccessInfo)==null?void 0:r.Permissions)??[]}}async function As(){const t=`${he.apiServer}/Configurations/SchoolAppNavigation`,e=await mt(t);return(e==null?void 0:e.instanceName)||null}function Es(){const t=`${he.apiServer}/TeacherSubstitutions/current`;return mt(t)}const Ci="notificationData";async function Ts(){var r;const t=`${he.apiServer}/UserSettings/Cst`,{Settings:e}=await mt(t),n=(r=e.find(i=>i.Key===Ci))==null?void 0:r.Value;return n?JSON.parse(n):[]}function qr(t){const e=`${he.apiServer}/UserSettings/Cst`,n={Id:"Cst",Settings:[{Key:Ci,Value:JSON.stringify(t)}]};return mt(e,{method:"PATCH",body:JSON.stringify(n)},!0)}async function mt(t,{method:e="GET",body:n=void 0}={},r){const{accessToken:i}=P;if(!i)throw new Error("No token available");const s=new Headers({"CLX-Authorization":`token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${i}`,"Content-Type":"application/json"}),o=await fetch(t,{method:e,headers:s,body:n});if(!r)return o.json()}const Ss="modulepreload",$s=function(t){return"/"+t},Kr={},Ps=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=$s(o),o in Kr)return;Kr[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const g=s[d];if(g.href===o&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Ss,c||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),c)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Ri="de-CH",Cs=["fr-CH"],Yn=["de-CH","fr-CH"],{getLocale:Rs,setLocale:xs}=Vo({sourceLocale:Ri,targetLocales:Cs,loadLocale:t=>Ps(()=>import(`/locales/${t}.js`),__vite__mapDeps([]))});function xi(){const t=Is()??Ms()??Ds();return t&&Ls(t)?t:Ns()??Ri}async function Os(t){await xs(t),document.documentElement.lang=t}function Is(){return new URL(location.href).searchParams.get($e)}function Ls(t){return Yn.includes(t)}function Ns(){const t=navigator.language.slice(0,2);return Yn.find(e=>e.startsWith(t))??null}function Ms(){const t=ws();return t?new URL(t).searchParams.get($e):null}function Ds(){const t=ms();return t?lt(t).locale:null}const Us=[L.navigationHome,L.navigationMyProfile,L.navigationMySettings,L.navigationPhotoList,L.navigationInputGrades];function Xt(t,e){const n=Oi(t,({key:r})=>r===e);return n||{item:L.navigationHome,group:null}}function zs(t,e){return Oi(t,n=>n.appPath!=="#/"&&e.startsWith(n.appPath))}function Oi(t,e){let n=Us.find(r=>e(r));if(n)return{item:n,group:null};for(const r of t)if(n=r.items.find(i=>e(i)),n)return{item:n,group:r};return null}function Qt(t){const e=L.apps.find(n=>n.key===t.appKey);if(!e)throw new Error(`Invalid app: ${t.appKey}`);return e}function js(t,e){const{item:n}=Xt(t,e);return Qt(n).scope}function Hs(t,e,n){return t.reduce((r,i)=>{const s=i.items.filter(o=>Fs(o,e)&&Bs(o,n));return s.length>0?[...r,{...i,items:s}]:r},[])}function Fs(t,e){return t.deniedInstanceIds===null||t.deniedInstanceIds.includes(e)}function Bs(t,e){return t.allowedRolesOrPermissions===null||t.allowedRolesOrPermissions.some(n=>e.includes(n))}function Ws(t){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(r=>{t.includes(r)||e.searchParams.delete(r)}),history.replaceState({},"",e)}function Vr(t,e,n=!1){const r=new URL(location.href);r.searchParams.set(t,e),n?history.replaceState({},"",r):history.pushState({},"",r)}function _n(t){return t.slice(Math.max(t.indexOf("#"),0))}function An(t,e=!1){const n=new URL(location.href);n.hash=t,e?history.replaceState({},"",n):history.pushState({},"",n)}function Gs(){const e=new URL(location.href).searchParams.get(Fe);return e?js(L.navigation,e):Qt(L.navigationHome).scope}function He(t){const e=typeof t=="string"?Xt(w.navigation,t).item:t;return qs(e).toString()}function qs(t){const e=new URL(location.origin);return e.searchParams.set($e,w.locale),e.searchParams.set(Fe,t.key),e.hash=t.appPath,e}var Ks=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,ce=(t,e,n,r)=>{for(var i=r>1?void 0:r?Vs(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ks(e,n,i),i};const $e="locale",Fe="module",Ys=[$e,Fe];class ee extends On{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.handleStateChange("locale",this.locale),this.subscribe(this.handleStateChange.bind(this)),P.onAccessTokenUpdate(()=>this.updateNavigation()),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((n,r)=>e(r),"locale")}subscribeInstanceName(e){return this.subscribe((n,r)=>e(r),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((n,r)=>e(r),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((n,r)=>e(r),"navigationItem")}subscribeScopeAndLocale(e,n=!1){return n||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{Ws(Ys),this.locale=e.searchParams.get($e)||Rs(),this.navigationItemKey=e.searchParams.get(Fe)??L.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e,n){e==="locale"&&(await this.updateLocale(n),await this.loadInstanceName()),(e==="locale"||e==="navigationItemKey")&&fs(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(e){Vr($e,e),await Os(e)}updateNavigation(){var n;const{instanceId:e}=P;e&&(this.navigation=Hs(L.navigation,e,((n=P.accessTokenPayload)==null?void 0:n.substitutionRoles)||this.rolesAndPermissions))}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:n,group:r}=Xt(this.navigation,e);this.navigationItem=n,this.navigationGroup=r,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"&&this.actualAppPath.startsWith(n.appPath)?this.appPath=this.actualAppPath:this.appPath=n.appPath,this.actualAppPath=null,this.updateHashFromAppPath(),n.key===L.navigationHome.key&&n.key!==e&&(this.navigationItemKey=n.key)}Vr(Fe,this.navigationItemKey)}updateHashFromAppPath(){const e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},"",e)}updateApp(e){this.app=Qt(e)}async loadRolesAndPermissions(){if(!P.authenticated)return;const{roles:e,permissions:n}=await _s();this.rolesAndPermissions=[...e,...n]}async loadInstanceName(){if(!P.authenticated)return;const e=await As();this.instanceName=[k("Evento"),e].filter(Boolean).join(" | ")}}ce([le({value:xi()})],ee.prototype,"locale",2);ce([le({value:[]})],ee.prototype,"rolesAndPermissions",2);ce([le({value:""})],ee.prototype,"instanceName",2);ce([le({value:[]})],ee.prototype,"navigation",2);ce([ts({parameter:Fe}),le({value:null})],ee.prototype,"navigationItemKey",2);ce([le({value:null})],ee.prototype,"navigationGroup",2);ce([le({value:L.navigationHome})],ee.prototype,"navigationItem",2);ce([le({value:Qt(L.navigationHome)})],ee.prototype,"app",2);ce([le({value:L.navigationHome.appPath})],ee.prototype,"appPath",2);const w=new ee,Ii=I`
  /* Brand Colors (https://kantonbern.snowflake.ch/styleguides/1/Kanton-Bern/#Sm1) */
  --bkd-brand-white: rgba(255, 255, 255, 0.42);
  --bkd-brand-red: rgba(234, 22, 31, 1);
  --bkd-brand-black: rgba(0, 0, 0, 1);
  --bkd-brand-light-sand: rgba(252, 248, 243, 1);
  --bkd-brand-sand: rgba(250, 241, 227, 1);
  --bkd-brand-dark-sand: rgba(247, 233, 210, 1);
  --bkd-brand-sand-hover: rgba(242, 224, 195, 1);
  --bkd-brand-cappuchino: rgba(235, 211, 174, 1);

  /* Functional Foreground Colors (https://kantonbern.snowflake.ch/styleguides/1/Kanton-Bern/#Sm2) */
  --bkd-func-fg-black: rgba(0, 0, 0, 1);
  --bkd-func-fg-grey: rgba(112, 112, 112, 1);
  --bkd-func-fg-light-grey: rgba(112, 112, 112, 0.68);
  --bkd-func-fg-white: rgba(255, 255, 255, 1);

  /* Functional Background Colors (https://kantonbern.snowflake.ch/styleguides/1/Kanton-Bern/#Sm2) */
  --bkd-func-bg-anthrazit-hover: rgba(64, 64, 64, 1);
  --bkd-func-bg-anthrazit: rgba(78, 78, 78, 0.95);
  --bkd-func-bg-dark-grey: rgba(112, 112, 112, 1);
  --bkd-func-bg-line-grey: rgba(112, 112, 112, 0.5);
  --bkd-func-bg-grey: rgba(222, 222, 222, 1);
  --bkd-func-bg-light-grey: rgba(242, 242, 242, 1);
  --bkd-func-bg-very-light-grey: rgba(248, 248, 248, 1);
  --bkd-func-bg-white: rgba(255, 255, 255, 1);
  --bkd-func-bg-red: rgba(208, 16, 24, 1);
  --bkd-func-bg-green: rgba(61, 134, 8, 1);

  /* Component-specific Colors */
  --bkd-language-switcher-active-border: rgba(234, 22, 31, 0.77);
  --bkd-footer-border: rgba(238, 238, 238, 1);
  --bkd-mobile-nav-shadow: rgba(0, 0, 0, 0.16);

  /* Dropdowns */
  --bkd-z-index-dropdown: 1;

  /* Fonts */
  --bkd-font-family: "Roboto", sans-serif;
  --bkd-font-size-base: 16px;
  --bkd-font-weight-base: 300;
  --bkd-line-height-base: 1.625;

  /* Spacings */
  --bkd-margin-horizontal-large: 40px;
  --bkd-margin-horizontal-medium: 30px;
  --bkd-margin-horizontal-small: 20px;
`,Li=I`
  /* See https://kantonbern.snowflake.ch/styleguides/1/Kanton-Bern/#Sm3 */

  /* Thin */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 100;
    src: url("/fonts/roboto-v30-latin-ext_latin-100.woff") format("woff");
  }

  /* Light */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/roboto-v30-latin-ext_latin-300.woff") format("woff");
  }

  /* Regular */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/roboto-v30-latin-ext_latin-400.woff") format("woff");
  }

  /* Medium */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/roboto-v30-latin-ext_latin-500.woff") format("woff");
  }

  /* Bold */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/roboto-v30-latin-ext_latin-700.woff") format("woff");
  }
`,j=I`
  :host {
    ${Ii}
    ${Li}
  }

  /* Reset */
  * {
    box-sizing: border-box;

    font-family: var(--bkd-font-family);
    font-size: var(--bkd-font-size-base);
    font-weight: var(--bkd-font-weight-base);
    line-height: var(--bkd-line-height-base);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  img,
  svg {
    display: block;
  }
`;function Xs(t){var n;const e=document.createElement("style");e.innerText=t,(n=document.querySelector("body"))==null||n.appendChild(e)}var Qs=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,Ni=(t,e,n,r)=>{for(var i=r>1?void 0:r?Zs(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Qs(e,n,i),i};let zt=class extends O{constructor(){super(),this.renderedOffline=!1,this.handleMessage=t=>{switch(t.data.type){case"bkdAppResize":{this.handleResize(t.data.height);break}}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new ae(this,w)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage),window.addEventListener("online",this.handleOnline)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),window.removeEventListener("online",this.handleOnline),super.disconnectedCallback()}handleResize(t){this.iframe&&(this.iframe.height=t)}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?P.scope!==w.app.scope?A`<main role="main"></main>`:A`
      <main role="main">
        ${je(w.app.heading,()=>A`<h1>${w.navigationItem.label}</h1>`)}
        ${Mo(w.app.root,A`
            <iframe
              id="app"
              title=${w.app.key}
              src=${`/${w.app.root}${w.appPath}`}
            ></iframe>
          `)}
      </main>
    `:A`<main role="main">
        <h1>${k("Offline")}</h1>
        <p>${k("Keine Verbindung vorhanden.")}</p>
      </main>`}};zt.styles=[j,I`
      /* Large screen */

      :host {
        --bkd-content-margin-top: 3rem;
        --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-large);
        padding: var(--bkd-content-margin-top)
          var(--bkd-content-margin-horizontal) 0
          var(--bkd-content-margin-horizontal);
      }

      h1 {
        font-size: 3.375rem;
        font-weight: 100;
        line-height: 2.25rem;
        margin: 0 0 calc(3.375rem / 2) 0;
      }

      iframe {
        border: none;
        width: 100%;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-content-margin-top: 2rem;
          --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        h1 {
          font-size: 2.25rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-content-margin-top: 1rem;
          --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `];Ni([Z("iframe")],zt.prototype,"iframe",2);zt=Ni([U("bkd-content"),z()],zt);var Js=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,ta=(t,e,n,r)=>{for(var i=r>1?void 0:r?ea(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Js(e,n,i),i};let Ln=class extends O{constructor(){super(),new ae(this,w)}render(){return A`
      <footer role="contentinfo">
        <div class="copyright">${k("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          <a
            href=${`https://www.bkd.be.ch/${w.locale.slice(0,2)}/tools/rechtliches.html`}
            target="_blank"
            >${k("Rechtliche Hinweise")}</a
          >
          <a
            href=${`https://www.bkd.be.ch/${w.locale.slice(0,2)}/tools/impressum.html`}
            target="_blank"
            >${k("Impressum")}</a
          >
        </div>
      </footer>
    `}};Ln.styles=[j,I`
      /* Large screen */

      :host {
        --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-large);
        --bkd-footer-padding-vertical: 18px;

        padding: var(--bkd-footer-padding-vertical)
          var(--bkd-footer-padding-horizontal);
        border-top: 1px solid var(--bkd-footer-border);
        background-color: var(--bkd-brand-light-sand);
        color: var(--bkd-func-fg-black);
      }

      footer {
        display: flex;
        justify-content: space-between;
      }

      .copyright {
        font-size: 0.8125rem;
        font-weight: 300;
        letter-spacing: 0.02rem;
        word-spacing: 0.05rem;
      }

      .footer-nav {
        display: flex;
        gap: 2.5rem;
      }

      a {
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        line-height: 1.5;
        color: var(--bkd-func-fg-black);
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        border-bottom: 2px solid var(--bkd-func-fg-black);
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
      }

      a:hover::after,
      a:focus::after,
      a:active::after {
        transform: scaleX(1);
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-medium);
        }

        footer {
          flex-direction: column-reverse;
          gap: 1.25rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `];Ln=ta([U("bkd-footer"),z()],Ln);function jt(t,e){if(t===e||t.contains(e))return!0;if("shadowRoot"in t&&t.shadowRoot)return jt(t.shadowRoot,e);for(const n of Array.from(t.children))if(jt(n,e))return!0;return!1}class bt{constructor(e,n){this.host=e,this.options=n,this.open=!1,this.closeOnBlur=r=>{this.menuElement&&"relatedTarget"in r&&(this.menuElement.contains(r.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=r=>{const i=r.composedPath()[0];if(!i)return;const s=this.toggleElement&&!jt(this.toggleElement,i),o=this.menuElement&&!jt(this.menuElement,i);s&&o&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=r=>{switch(r.key){case"Tab":{this.options.tabInside||this.close();break}case"Escape":{this.close();break}case"ArrowDown":{const i=this.items[this.nextLinkIndex(1)];i==null||i.focus();break}case"ArrowUp":{const i=this.items[this.nextLinkIndex(-1)];i==null||i.focus();break}}},this.host.addController(this)}get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){var n;const e=((n=this.options)==null?void 0:n.queryItems)&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){var e;return(e=this.options)!=null&&e.queryFocused?this.options.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.addEventListener("focusout",this.closeOnBlur,!0)),(n=this.iframeDocument)==null||n.addEventListener("click",this.handleIframeClick,!0)}),document.addEventListener("click",this.handleDocumentClick,!0),this.host.addEventListener("keydown",this.handleKeydown,!0)}removeListeners(){var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.removeEventListener("focusout",this.closeOnBlur,!0)),document.removeEventListener("click",this.handleDocumentClick,!0),(n=this.iframeDocument)==null||n.removeEventListener("click",this.handleIframeClick,!0),this.host.removeEventListener("keydown",this.handleKeydown,!0)}get iframeDocument(){var i,s;const e=(i=document.querySelector("bkd-portal"))==null?void 0:i.shadowRoot,n=(s=e==null?void 0:e.querySelector("bkd-content"))==null?void 0:s.shadowRoot,r=n==null?void 0:n.querySelector("iframe");return(r==null?void 0:r.contentDocument)??null}activeLinkIndex(){const e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){const n=this.activeLinkIndex(),r=0,i=this.items.length-1;if(n===null)return e>0?r:i;const s=n+e;return s>i?r:s<r?i:s}}var na=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,Xn=(t,e,n,r)=>{for(var i=r>1?void 0:r?ra(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&na(e,n,i),i};let dt=class extends O{constructor(){super(),this.mobileNav=new bt(this,{queryToggleElement:()=>{var t,e;return((e=(t=this.serviceNavElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("bkd-hamburger"))??null},queryMenuElement:()=>{var t;return((t=this.mobileNavElement)==null?void 0:t.shadowRoot)??null},tabInside:!0}),new ae(this,w)}handleLogoClick(t){t.preventDefault(),w.navigationItemKey=L.navigationHome.key,w.appPath=L.navigationHome.appPath}handleNavItemClick(t){const{item:e}=t.detail;w.navigationItemKey=e.key,this.mobileNav.close()}handleSettingsItemClick(t){const{item:e,event:n}=t.detail;e.external||(n.preventDefault(),e.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):w.navigationItemKey=e.key),this.mobileNav.close()}render(){return A`
      <header role="banner">
        <a
          class="logo"
          href=${He("home")}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${k("Evento Startseite")}
        /></a>
        <div class="logo-caption">${w.instanceName}</div>
        ${je(navigator.onLine,()=>A`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        ${je(navigator.onLine,()=>A` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${je(this.mobileNav.open,()=>A`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};dt.styles=[j,I`
      /* Large screen */

      :host {
        --bkd-header-margin-top: 12px;
        --bkd-header-margin-bottom: calc(2 * var(--bkd-header-margin-top));
        --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-large);

        position: relative;
        padding: var(--bkd-header-margin-top)
          var(--bkd-header-margin-horizontal) var(--bkd-header-margin-bottom)
          var(--bkd-header-margin-horizontal);
        border-bottom: 1px solid var(--bkd-func-bg-grey);
      }

      header {
        display: grid;
        grid-template-columns: max-content auto;
        grid-template-areas:
          "service-nav service-nav"
          "logo ."
          "logo-caption nav";
      }

      bkd-service-nav {
        grid-area: service-nav;
        justify-self: end;
      }

      .logo {
        grid-area: logo;
      }

      .logo > img {
        width: 150px;
      }

      .logo-caption {
        grid-area: logo-caption;
        align-self: baseline;
        max-width: 21rem;
      }

      bkd-nav {
        grid-area: nav;
        align-self: baseline;
        justify-self: end;
      }

      /* Hide mobile nav on large screens */
      @media screen and (min-width: 1201px) {
        bkd-mobile-nav {
          display: none;
        }
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        header {
          grid-template-areas:
            "logo service-nav"
            "logo-caption logo-caption";
        }

        bkd-service-nav {
          align-self: center;
        }

        .logo > img {
          width: 110px;
        }

        .logo-caption {
          margin-top: 12px;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 0.75rem;
          max-width: 13.125rem;
        }

        bkd-nav {
          display: none;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }

        bkd-service-nav {
          align-self: start;
          margin-top: 2px; /* Align with logo text */
        }
      }
    `];Xn([Z("bkd-service-nav")],dt.prototype,"serviceNavElement",2);Xn([Z("bkd-mobile-nav")],dt.prototype,"mobileNavElement",2);dt=Xn([U("bkd-header"),z()],dt);var ia=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,Mi=(t,e,n,r)=>{for(var i=r>1?void 0:r?oa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ia(e,n,i),i};let Ht=class extends O{constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const t=this.open?"/icons/close.svg":"/icons/hamburger.svg";return A`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${k("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};Ht.styles=[j,I`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];Mi([V()],Ht.prototype,"open",2);Ht=Mi([U("bkd-hamburger"),z()],Ht);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=Kt(class extends Vt{constructor(t){var e;if(super(t),t.type!==qn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((r=this.st)!=null&&r.has(s))&&this.it.add(s);return this.render(e)}const n=t.element.classList;for(const s of this.it)s in e||(n.remove(s),this.it.delete(s));for(const s in e){const o=!!e[s];o===this.it.has(s)||(i=this.st)!=null&&i.has(s)||(o?(n.add(s),this.it.add(s)):(n.remove(s),this.it.delete(s)))}return se}});var sa=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,la=(t,e,n,r)=>{for(var i=r>1?void 0:r?aa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&sa(e,n,i),i};let Nn=class extends O{constructor(){super(),new ae(this,w)}handleLocaleChange(t,e){t.preventDefault(),w.locale=e}render(){return A`<ul>
      ${Yn.map(t=>A`<li>
            <a
              href="#"
              class=${Pe({active:t===w.locale})}
              aria-current=${t===w.locale}
              @click=${e=>this.handleLocaleChange(e,t)}
            >
              ${t.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};Nn.styles=[j,I`
      ul {
        display: flex;
        align-items: baseline;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        display: flex;
        align-items: baseline;
        margin-left: 0.75rem;
      }

      li + li:before {
        content: "|";
        margin-right: 0.75rem;
      }

      a {
        display: block;
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.025rem;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--bkd-func-fg-black);
      }

      a:after {
        display: block;
        content: "";
        border-bottom: 2px solid var(--bkd-func-fg-black);
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
      }

      a.active {
        border-bottom: 2px solid var(--bkd-language-switcher-active-border);
      }

      a:hover::after,
      a:focus::after,
      a:active::after {
        transform: scaleX(1);
      }

      a.active:hover::after,
      a.active:focus::after,
      a.active:active::after {
        transform: scaleX(0);
      }
    `];Nn=la([U("bkd-language-switcher"),z()],Nn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ee(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mn extends Vt{constructor(e){if(super(e),this.et=R,e.type!==qn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===R||e==null)return this.vt=void 0,this.et=e;if(e===se)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const n=[e];return n.raw=n,this.vt={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Mn.directiveName="unsafeHTML",Mn.resultType=1;const ue=Kt(Mn),ca=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,ua=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function Di(t){return[{key:"myProfile",label:k("Mein Profil"),href:He("myProfile")},{key:"mySettings",label:k("Einstellungen"),href:He("mySettings")},{key:"videos",label:k("Video-Tutorials"),href:t==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:k("Logout"),href:"#",img:"/icons/logout.svg"}]}var da=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,Ui=(t,e,n,r)=>{for(var i=r>1?void 0:r?ha(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&da(e,n,i),i};let Ft=class extends O{constructor(){super(),this.openGroup=null,this.handleKeyup=t=>{t.key==="Tab"&&this.openGroupOfFocusedItem()},new ae(this,w)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener("keyup",this.handleKeyup)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=w.navigationGroup)}openGroupOfFocusedItem(){var e,n;const t=(e=this.shadowRoot)==null?void 0:e.activeElement;if(t instanceof HTMLElement){const r=t.dataset.itemKey;if(r){const{group:i}=Xt(L.navigation,r);i&&i.label!==((n=this.openGroup)==null?void 0:n.label)&&(this.openGroup=i)}}}handleGroupClick(t,e){var n;t.preventDefault(),this.openGroup=e.label!==((n=this.openGroup)==null?void 0:n.label)?e:null}handleNavItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}handleSettingsItemClick(t,e){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderGroup(t){var n;const e=t.label===((n=this.openGroup)==null?void 0:n.label);return A`
      <li
        class=${Pe({group:!0,open:e})}
        aria-expanded=${e}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${r=>this.handleGroupClick(r,t)}
        >
          <label> ${t.label} </label>
          ${ue(e?ca:ua)}
        </button>
        <ul class="items">
          ${Ee(t.items,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){const e=t.key===w.navigationItemKey;return A`
      <li
        class=${Pe({item:!0,active:e})}
      >
        <a
          href=${He(t)}
          data-item-key=${t.key}
          @click=${n=>this.handleNavItemClick(n,t)}
        >
          ${t.label}
        </a>
      </li>
    `}renderSettingsItem(t){return A`<li>
      <a
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}
      </a>
      ${t.img?A`<img src=${t.img} alt="" width="24" height="24" />`:R}
    </li>`}render(){return A`
      <nav role="navigation" aria-label=${k("Mobile Navigation")}>
        <ul class="nav">
          ${Ee(w.navigation,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${Ee(Di(w.locale),this.renderSettingsItem.bind(this))}
          </ul>
          <bkd-language-switcher></bkd-language-switcher>
        </div>
      </nav>
    `}};Ft.styles=[j,I`
      :host {
        position: absolute;
        width: 100vw;
        padding: 1.25rem;
        left: 0;
        top: calc(100% + 1px); /* Place right below header */
        height: calc(100vh - 100% - 1px);
        background-color: var(--bkd-func-bg-white);
      }

      nav {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }

      a {
        color: var(--bkd-brand-black);
        text-decoration: none;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li.group {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .group-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: none;
        background: transparent;
      }

      .group-header label {
        font-weight: 600;
        cursor: pointer;
      }

      ul.items {
        height: 0;
      }

      .open ul.items {
        height: auto;
      }

      li.item {
        display: flex; /* Animated bottom border should only be as wide as the link */
        border-left: 4px solid transparent;
        padding: 0.5rem 1.25rem;
      }

      li.item a {
        font-weight: 400;
      }

      li.item a:after {
        display: block;
        content: "";
        border-bottom: 2px solid var(--bkd-brand-black);
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
      }

      li.item a:hover::after,
      li.item a:focus::after,
      li.item a:active::after {
        transform: scaleX(1);
      }

      li.item.active {
        border-color: var(--bkd-brand-red);
        background-color: var(--bkd-brand-sand);
      }

      li.item.active a {
        font-weight: 600;
        color: var(--bkd-brand-red);
      }

      li.item.active a:after {
        border-color: transparent;
      }

      .service-nav {
        background: var(--bkd-brand-sand);
        padding: 1.5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .service-nav li {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        height: 36px;
        line-height: 1.5;
      }

      .service-nav a {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--bkd-func-fg-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
        margin-top: 2px;
      }

      .service-nav a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      .service-nav a:hover::after,
      .service-nav a:focus::after {
        transform: scaleX(1);
      }

      bkd-language-switcher {
        margin-left: -0.75rem;
      }
    `];Ui([qe()],Ft.prototype,"openGroup",2);Ft=Ui([U("bkd-mobile-nav"),z()],Ft);var pa=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,ga=(t,e,n,r)=>{for(var i=r>1?void 0:r?fa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&pa(e,n,i),i};let Dn=class extends O{constructor(){super(),new ae(this,w)}renderGroupToggle(t,e){return A`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${e}
      ></bkd-nav-group-toggle>
    `}render(){return A`<nav role="navigation" aria-label=${k("Hauptnavigation")}>
      ${Ee(w.navigation,t=>{var e;return this.renderGroupToggle(t,t.label===((e=w.navigationGroup)==null?void 0:e.label))})}
    </nav>`}};Dn.styles=[j,I`
      /* Large screen */

      nav {
        display: flex;
        justify-content: end;
        gap: 4.375rem;
      }

      /* Medium screen */

      @media screen and (max-width: 1500px) {
        nav {
          gap: 3rem;
        }
      }
    `];Dn=ga([U("bkd-nav"),z()],Dn);var ma=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,Qn=(t,e,n,r)=>{for(var i=r>1?void 0:r?ba(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ma(e,n,i),i};let ht=class extends O{constructor(){super(),this.open=!1,new ae(this,w)}handleItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}renderItem(t){const e=t.key===w.navigationItemKey;return A`
      <li role="presentation" class=${Pe({active:e})}>
        <a
          role="menuitem"
          href=${He(t)}
          @click=${n=>this.handleItemClick(n,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return A`
      <ul role="menu">
        ${Ee(this.group.items,this.renderItem.bind(this))}
      </ul>
    `}};ht.styles=[j,I`
      :host {
        position: relative;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem 0;
        margin: 0.5rem 0;
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: max-content;
      }

      li {
        padding: 0 1.5rem;
        height: 100%;
        line-height: 2.5;
      }

      li.active {
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        padding: 0 calc(1.5rem - 6px);
      }

      li.active a {
        font-weight: 600;
        color: var(--bkd-brand-red);
      }

      li.active a:after {
        background-color: transparent;
      }

      a {
        font-size: 1.125rem;
        font-weight: 300;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a.active::after {
        background-color: var(--bkd-brand-red);
      }

      a:hover::after,
      a:focus::after,
      a:active::after,
      a.active::after {
        transform: scaleX(1);
      }
    `];Qn([V()],ht.prototype,"group",2);Qn([V()],ht.prototype,"open",2);ht=Qn([U("bkd-nav-group-dropdown"),z()],ht);var va=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,vt=(t,e,n,r)=>{for(var i=r>1?void 0:r?ya(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&va(e,n,i),i};let Ce=class extends O{constructor(){super(...arguments),this.dropdown=new bt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector('ul[role="menu"]'))??null},queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}toggle(t){t.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return A`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${Pe({active:!!this.active})}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        ${this.group.label}
      </a>
      <bkd-nav-group-dropdown
        .group=${this.group}
        .open=${this.dropdown.open}
        @bkdnavitemclick=${this.handleItemClick.bind(this)}
      ></bkd-nav-group-dropdown>
    `}};Ce.styles=[j,I`
      a {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a.active:after {
        background-color: var(--bkd-brand-red);
      }

      a:hover::after,
      a:focus::after,
      a:active::after,
      a.active:after {
        transform: scaleX(1);
      }
    `];vt([V()],Ce.prototype,"group",2);vt([V({type:Boolean})],Ce.prototype,"active",2);vt([Z("a")],Ce.prototype,"toggleElement",2);vt([Z("bkd-nav-group-dropdown")],Ce.prototype,"menuElement",2);Ce=vt([U("bkd-nav-group-toggle"),z()],Ce);var wa=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,zi=(t,e,n,r)=>{for(var i=r>1?void 0:r?ka(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&wa(e,n,i),i};let Bt=class extends O{handleClick(t){t.preventDefault()}render(){if(this.item)return A`<a href="#" @click=${this.handleClick.bind(this)}
      >${this.item.label}</a
    >`}};Bt.styles=[j,I``];zi([V()],Bt.prototype,"item",2);Bt=zi([U("bkd-nav-item-link"),z()],Bt);var _a=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,ji=(t,e,n,r)=>{for(var i=r>1?void 0:r?Aa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&_a(e,n,i),i};let Wt=class extends O{constructor(){super(...arguments),this.mobileNavOpen=!1}render(){return A`
      <nav role="navigation" aria-label=${k("Servicenavigation")}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        <bkd-language-switcher></bkd-language-switcher>
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};Wt.styles=[j,I`
      /* Large screen */

      :host {
        margin-left: 1rem;
      }

      nav {
        display: flex;
        align-items: center;
        gap: 2.5rem;
      }

      bkd-hamburger {
        display: none;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        bkd-user-settings {
          display: none;
        }

        bkd-language-switcher {
          display: none;
        }

        bkd-hamburger {
          display: inherit;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          gap: 1.5rem;
        }
      }
    `];ji([V()],Wt.prototype,"mobileNavOpen",2);Wt=ji([U("bkd-service-nav"),z()],Wt);var Ea=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,Zt=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ta(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ea(e,n,i),i};let Be=class extends O{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(t=>!this.activeSubstitution||t.Id===this.activeSubstitution.Id)}handleSubstitutionClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:e},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(t){var n;const e=t.Id===((n=this.activeSubstitution)==null?void 0:n.Id);return A`
      <li role="presentation" class=${Pe({active:e})}>
        <a
          role="menuitem"
          href="#"
          @click=${r=>this.handleSubstitutionClick(r,t)}
          >${t.Holder}</a
        >
      </li>
    `}render(){if(this.open)return A`
      <ul role="menu" id="substitutions-menu">
        <li role="presentation" class="dropdown-menu-header">
          <button
            role="menuitem"
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${k("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${k("Stellvertretung ausüben")}
          </div>
        </li>
        ${Ee(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${je(this.activeSubstitution,()=>A`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${k("Stellvertretung beenden")}
              </button>
            </li>`)}
      </ul>
    `}};Be.styles=[j,I`
      :host {
        display: block;
        position: relative;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem 0;
        margin: 0.5rem 0;
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        max-height: 90vh;
        overflow: auto;
      }

      li {
        padding: 0 1.5rem;
        line-height: 2.5;
      }

      li.active {
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        padding: 0 calc(1.5rem - 6px);
      }

      li.active a {
        font-weight: 600;
        color: var(--bkd-brand-red);
      }

      li.active a:after {
        background-color: transparent;
      }

      a {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a.active::after {
        background-color: var(--bkd-brand-red);
      }

      a:hover::after,
      a:focus::after,
      a:active::after,
      a.active::after {
        transform: scaleX(1);
      }

      button {
        cursor: pointer;
      }

      .dropdown-menu-header,
      .dropdown-menu-stop {
        display: none;
      }

      /* For medium & small screens */
      @media screen and (max-width: 1200px) {
        :host {
          position: static;
        }

        ul {
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: var(--bkd-margin-horizontal-small);
          border: none;
          max-height: 100vh;
        }

        li:not(.dropdown-menu-header):not(.dropdown-menu-stop) {
          height: 2.8rem;
          display: flex;
          align-items: center;
        }

        a {
          font-size: 1.125rem;
          font-weight: 300;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .dropdown-menu-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 0 0 0.75rem 0;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid var(--bkd-func-bg-line-grey);
        }

        .dropdown-menu-heading {
          font-size: calc(28 / 16 * 1rem);
        }

        .dropdown-menu-close {
          display: flex;
          margin-left: auto;
          padding: 0;
          background: none;
          border: none;
          aspect-ratio: 1/1;
        }

        .dropdown-menu-stop {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .dropdown-menu-stop button {
          display: block;
          width: 100%;
          max-width: 25rem;
          padding: 0.25rem 0.5rem;
          border: none;
          border-radius: calc(2 * 0.25rem + 1.125rem);
          font-size: 1.125rem;
          font-weight: 500;
          background-color: var(--bkd-func-bg-anthrazit);
          color: var(--bkd-func-fg-white);
        }
      }
    `];Zt([V()],Be.prototype,"availableSubstitutions",2);Zt([V()],Be.prototype,"activeSubstitution",2);Zt([V()],Be.prototype,"open",2);Be=Zt([U("bkd-substitutions-dropdown"),z()],Be);const Sa=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,$a=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,Pa=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function Ca(t,e,n){const r=document.createElement("form");r.method=t,r.style.visibility="hidden",r.action=e,Object.keys(n).forEach(i=>{const s=document.createElement("input");s.type="hidden",s.name=i,s.value=n[i],r.appendChild(s)}),document.body.appendChild(r),r.submit()}var Ra=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,yt=(t,e,n,r)=>{for(var i=r>1?void 0:r?xa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ra(e,n,i),i};let Re=class extends O{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new bt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.menuElement)==null?void 0:t.shadowRoot)??null},tabInside:!this.isLargeScreen(),queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const t=await Es();this.availableSubstitutions=t.filter(n=>this.isNotInFuture(n)).sort((n,r)=>n.Holder.localeCompare(r.Holder));const e=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===e)??null}isNotInFuture(t){return!!t.DateFrom&&new Date(t.DateFrom)<=new Date}getActiveSubstitutionId(){var t;return((t=P.accessTokenPayload)==null?void 0:t.substitutionId)??null}toggle(t){t.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(t){this.activeSubstitution||this.redirect(t,"start")}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,"stop")}redirect(t,e){const{oAuthServer:n,oAuthPrefix:r}=Yt(),i=`${n}/${r}/Authorization/Substitutions/${t.Id}/${e}`;Ca("POST",i,{access_token:P.accessToken??"",redirect_uri:He("home")})}handleSubstitutionStart(t){this.dropdown.close(),this.startSubstitution(t.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){var t;return((t=this.activeSubstitution)==null?void 0:t.Holder)||k("Stellvertretung ausüben")}render(){if(this.availableSubstitutions.length!==0)return A`
      <button
        class=${Pe({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${ue(Pa)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${ue(this.activeSubstitution?$a:Sa)}
        </div>
      </button>
      <bkd-substitutions-dropdown
        .availableSubstitutions=${this.availableSubstitutions}
        .activeSubstitution=${this.activeSubstitution}
        .open=${this.dropdown.open}
        @bkdsubstitutionstart=${this.handleSubstitutionStart.bind(this)}
        @bkdsubstitutionstop=${this.handleSubstitutionStop.bind(this)}
        @bkdclose=${()=>this.dropdown.close()}
      ></bkd-substitutions-dropdown>
    `}};Re.styles=[j,I`
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 0 1rem;
        height: calc(
          32 / 16 * 1rem
        ); /* Fixed height to match notifications toggle */
        border: none;
        border-radius: calc(32 / 16 * 1rem);
        line-height: 1;
        background-color: var(--bkd-brand-dark-sand);
        color: var(--bkd-func-fg-black);
        cursor: pointer;
      }

      /* When substitution is active */
      button.active {
        background-color: var(--bkd-brand-red);
        color: var(--bkd-func-fg-white);
      }

      .label {
        font-size: calc(14 / 16 * 1rem);
        font-weight: 400;
        max-width: 40ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .icon {
        display: none;
      }
      .icon-caret {
        transform: rotate(0deg);
        transition: transform 100ms;
      }
      button.open .icon-caret {
        transform: rotate(180deg);
      }

      /* For medium & small screens */
      @media screen and (max-width: 1200px) {
        button {
          padding: 0;
          aspect-ratio: 1/1;
          border-radius: 50%;
        }
        button:not(.active) {
          background-color: transparent;
        }
        .icon {
          display: block;
        }
        .label,
        .icon-caret {
          display: none;
        }
      }
    `];yt([Z("button")],Re.prototype,"toggleElement",2);yt([Z("bkd-substitutions-dropdown")],Re.prototype,"menuElement",2);yt([qe()],Re.prototype,"availableSubstitutions",2);yt([qe()],Re.prototype,"activeSubstitution",2);Re=yt([U("bkd-substitutions-toggle"),z()],Re);const Oa='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>';var Ia=Object.defineProperty,La=Object.getOwnPropertyDescriptor,wt=(t,e,n,r)=>{for(var i=r>1?void 0:r?La(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ia(e,n,i),i};const Ot=Yt();if(typeof(Ot==null?void 0:Ot.notificationRefreshTime)!="number")throw new Error("Invalid 'notificationRefreshTime' setting");var It=(t=>(t.PENDING="pending",t.ERROR="error",t.SUCCESS="success",t))(It||{});let xe=class extends O{constructor(){super(...arguments),this.state="pending",this.dropdown=new bt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.dropdownElement)==null?void 0:t.shadowRoot)??null},queryItems:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("button"))??null},queryFocused:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),Ot.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){const t=[];qr(t),this.notifications=t}handleDeleteNotification(t){if(!this.notifications)return;const e=this.notifications.filter(n=>n.id!==t.detail.id);qr(e),this.notifications=e}async fetch(){try{this.notifications=await Ts(),this.state="success"}catch{this.state="error"}}render(){var t,e;return A` <button
        id="notifications-toggle"
        type="button"
        aria-label="${k("Benachrichtigungen")}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${ue(Oa)}
        <span
          class="circle"
          ?hidden=${this.state!=="success"||((t=this.notifications)==null?void 0:t.length)===0}
        >
          ${(e=this.notifications)==null?void 0:e.length}
        </span>
      </button>
      <bkd-notifications-dropdown
        .open=${this.dropdown.open}
        .state=${this.state}
        .notifications=${this.notifications}
        @bkddeleteallnotifications=${this.handleDeleteAllNotifications.bind(this)}
        @bkddeletenotification=${this.handleDeleteNotification.bind(this)}
      >
      </bkd-notifications-dropdown>`}};xe.styles=[j,I`
      button {
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 0;
        display: flex;
      }

      .circle {
        color: var(--bkd-func-bg-white);
        background-color: var(--bkd-brand-red);
        box-shadow: 0 0 0 2px var(--bkd-func-bg-white);
        border-radius: 50%;
        font-weight: 700;
        font-size: 0.85rem;
        line-height: 1.5;
        text-align: center;
        width: 1.25rem;
        height: 1.25rem;
        margin-left: -10px;
        margin-top: 2px;
      }
    `];wt([Z("button")],xe.prototype,"toggleElement",2);wt([Z("bkd-notifications-dropdown")],xe.prototype,"dropdownElement",2);wt([qe()],xe.prototype,"notifications",2);wt([qe()],xe.prototype,"state",2);xe=wt([U("bkd-notifications-toggle"),z()],xe);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},Na=Kt(class extends Vt{constructor(t){if(super(t),t.type!==qn.CHILD)throw Error("repeat() can only be used in text expressions")}ht(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const i=[],s=[];let o=0;for(const c of t)i[o]=r?r(c,o):o,s[o]=n(c,o),o++;return{values:s,keys:i}}render(t,e,n){return this.ht(t,e,n).values}update(t,[e,n,r]){const i=No(t),{values:s,keys:o}=this.ht(e,n,r);if(!Array.isArray(i))return this.dt=o,s;const c=this.dt??(this.dt=[]),l=[];let u,f,d=0,g=i.length-1,h=0,b=s.length-1;for(;d<=g&&h<=b;)if(i[d]===null)d++;else if(i[g]===null)g--;else if(c[d]===o[h])l[h]=ye(i[d],s[h]),d++,h++;else if(c[g]===o[b])l[b]=ye(i[g],s[b]),g--,b--;else if(c[d]===o[b])l[b]=ye(i[d],s[b]),Qe(t,l[b+1],i[d]),d++,b--;else if(c[g]===o[h])l[h]=ye(i[g],s[h]),Qe(t,i[d],i[g]),g--,h++;else if(u===void 0&&(u=Yr(o,h,b),f=Yr(c,d,g)),u.has(c[d]))if(u.has(c[g])){const m=f.get(o[h]),E=m!==void 0?i[m]:null;if(E===null){const T=Qe(t,i[d]);ye(T,s[h]),l[h]=T}else l[h]=ye(E,s[h]),Qe(t,i[d],E),i[m]=null;h++}else yn(i[g]),g--;else yn(i[d]),d++;for(;h<=b;){const m=Qe(t,l[b+1]);ye(m,s[h]),l[h++]=m}for(;d<=g;){const m=i[d++];m!==null&&yn(m)}return this.dt=o,wi(t,l),se}}),Ma='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>',Da='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>';/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */const{entries:Hi,setPrototypeOf:Xr,isFrozen:Ua,getPrototypeOf:za,getOwnPropertyDescriptor:Fi}=Object;let{freeze:G,seal:Q,create:Bi}=Object,{apply:Un,construct:zn}=typeof Reflect<"u"&&Reflect;G||(G=function(e){return e});Q||(Q=function(e){return e});Un||(Un=function(e,n,r){return e.apply(n,r)});zn||(zn=function(e,n){return new e(...n)});const Pt=X(Array.prototype.forEach),Qr=X(Array.prototype.pop),Ze=X(Array.prototype.push),Lt=X(String.prototype.toLowerCase),En=X(String.prototype.toString),ja=X(String.prototype.match),Je=X(String.prototype.replace),Ha=X(String.prototype.indexOf),Fa=X(String.prototype.trim),Y=X(RegExp.prototype.test),et=Ba(TypeError);function X(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Un(t,e,r)}}function Ba(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return zn(t,n)}}function _(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Lt;Xr&&Xr(t,null);let r=e.length;for(;r--;){let i=e[r];if(typeof i=="string"){const s=n(i);s!==i&&(Ua(e)||(e[r]=s),i=s)}t[i]=!0}return t}function Ue(t){const e=Bi(null);for(const[n,r]of Hi(t))Fi(t,n)!==void 0&&(e[n]=r);return e}function Ct(t,e){for(;t!==null;){const r=Fi(t,e);if(r){if(r.get)return X(r.get);if(typeof r.value=="function")return X(r.value)}t=za(t)}function n(r){return console.warn("fallback value for",r),null}return n}const Zr=G(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Tn=G(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Sn=G(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Wa=G(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),$n=G(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ga=G(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Jr=G(["#text"]),ei=G(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Pn=G(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ti=G(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Rt=G(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qa=Q(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ka=Q(/<%[\w\W]*|[\w\W]*%>/gm),Va=Q(/\${[\w\W]*}/gm),Ya=Q(/^data-[\-\w.\u00B7-\uFFFF]/),Xa=Q(/^aria-[\-\w]+$/),Wi=Q(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Qa=Q(/^(?:\w+script|data):/i),Za=Q(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Gi=Q(/^html$/i);var ni=Object.freeze({__proto__:null,MUSTACHE_EXPR:qa,ERB_EXPR:Ka,TMPLIT_EXPR:Va,DATA_ATTR:Ya,ARIA_ATTR:Xa,IS_ALLOWED_URI:Wi,IS_SCRIPT_OR_DATA:Qa,ATTR_WHITESPACE:Za,DOCTYPE_NAME:Gi});const Ja=function(){return typeof window>"u"?null:window},el=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(r=n.getAttribute(i));const s="dompurify"+(r?"#"+r:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function qi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ja();const e=y=>qi(y);if(e.version="3.0.6",e.removed=[],!t||!t.document||t.document.nodeType!==9)return e.isSupported=!1,e;let{document:n}=t;const r=n,i=r.currentScript,{DocumentFragment:s,HTMLTemplateElement:o,Node:c,Element:l,NodeFilter:u,NamedNodeMap:f=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:d,DOMParser:g,trustedTypes:h}=t,b=l.prototype,m=Ct(b,"cloneNode"),E=Ct(b,"nextSibling"),T=Ct(b,"childNodes"),S=Ct(b,"parentNode");if(typeof o=="function"){const y=n.createElement("template");y.content&&y.content.ownerDocument&&(n=y.content.ownerDocument)}let $,W="";const{implementation:pe,createNodeIterator:to,createDocumentFragment:no,getElementsByTagName:ro}=n,{importNode:io}=r;let J={};e.isSupported=typeof Hi=="function"&&typeof S=="function"&&pe&&pe.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:en,ERB_EXPR:tn,TMPLIT_EXPR:nn,DATA_ATTR:oo,ARIA_ATTR:so,IS_SCRIPT_OR_DATA:ao,ATTR_WHITESPACE:rr}=ni;let{IS_ALLOWED_URI:ir}=ni,N=null;const or=_({},[...Zr,...Tn,...Sn,...$n,...Jr]);let M=null;const sr=_({},[...ei,...Pn,...ti,...Rt]);let x=Object.seal(Bi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ke=null,rn=null,ar=!0,on=!0,lr=!1,cr=!0,Oe=!1,fe=!1,sn=!1,an=!1,Ie=!1,_t=!1,At=!1,ur=!0,dr=!1;const lo="user-content-";let ln=!0,Ve=!1,Le={},Ne=null;const hr=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let pr=null;const fr=_({},["audio","video","img","source","image","track"]);let cn=null;const gr=_({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Et="http://www.w3.org/1998/Math/MathML",Tt="http://www.w3.org/2000/svg",te="http://www.w3.org/1999/xhtml";let Me=te,un=!1,dn=null;const co=_({},[Et,Tt,te],En);let ge=null;const uo=["application/xhtml+xml","text/html"],ho="text/html";let D=null,De=null;const po=n.createElement("form"),mr=function(a){return a instanceof RegExp||a instanceof Function},hn=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(De&&De===a)){if((!a||typeof a!="object")&&(a={}),a=Ue(a),ge=uo.indexOf(a.PARSER_MEDIA_TYPE)===-1?ge=ho:ge=a.PARSER_MEDIA_TYPE,D=ge==="application/xhtml+xml"?En:Lt,N="ALLOWED_TAGS"in a?_({},a.ALLOWED_TAGS,D):or,M="ALLOWED_ATTR"in a?_({},a.ALLOWED_ATTR,D):sr,dn="ALLOWED_NAMESPACES"in a?_({},a.ALLOWED_NAMESPACES,En):co,cn="ADD_URI_SAFE_ATTR"in a?_(Ue(gr),a.ADD_URI_SAFE_ATTR,D):gr,pr="ADD_DATA_URI_TAGS"in a?_(Ue(fr),a.ADD_DATA_URI_TAGS,D):fr,Ne="FORBID_CONTENTS"in a?_({},a.FORBID_CONTENTS,D):hr,Ke="FORBID_TAGS"in a?_({},a.FORBID_TAGS,D):{},rn="FORBID_ATTR"in a?_({},a.FORBID_ATTR,D):{},Le="USE_PROFILES"in a?a.USE_PROFILES:!1,ar=a.ALLOW_ARIA_ATTR!==!1,on=a.ALLOW_DATA_ATTR!==!1,lr=a.ALLOW_UNKNOWN_PROTOCOLS||!1,cr=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Oe=a.SAFE_FOR_TEMPLATES||!1,fe=a.WHOLE_DOCUMENT||!1,Ie=a.RETURN_DOM||!1,_t=a.RETURN_DOM_FRAGMENT||!1,At=a.RETURN_TRUSTED_TYPE||!1,an=a.FORCE_BODY||!1,ur=a.SANITIZE_DOM!==!1,dr=a.SANITIZE_NAMED_PROPS||!1,ln=a.KEEP_CONTENT!==!1,Ve=a.IN_PLACE||!1,ir=a.ALLOWED_URI_REGEXP||Wi,Me=a.NAMESPACE||te,x=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&mr(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(x.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&mr(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(x.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(x.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Oe&&(on=!1),_t&&(Ie=!0),Le&&(N=_({},[...Jr]),M=[],Le.html===!0&&(_(N,Zr),_(M,ei)),Le.svg===!0&&(_(N,Tn),_(M,Pn),_(M,Rt)),Le.svgFilters===!0&&(_(N,Sn),_(M,Pn),_(M,Rt)),Le.mathMl===!0&&(_(N,$n),_(M,ti),_(M,Rt))),a.ADD_TAGS&&(N===or&&(N=Ue(N)),_(N,a.ADD_TAGS,D)),a.ADD_ATTR&&(M===sr&&(M=Ue(M)),_(M,a.ADD_ATTR,D)),a.ADD_URI_SAFE_ATTR&&_(cn,a.ADD_URI_SAFE_ATTR,D),a.FORBID_CONTENTS&&(Ne===hr&&(Ne=Ue(Ne)),_(Ne,a.FORBID_CONTENTS,D)),ln&&(N["#text"]=!0),fe&&_(N,["html","head","body"]),N.table&&(_(N,["tbody"]),delete Ke.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw et('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw et('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');$=a.TRUSTED_TYPES_POLICY,W=$.createHTML("")}else $===void 0&&($=el(h,i)),$!==null&&typeof W=="string"&&(W=$.createHTML(""));G&&G(a),De=a}},br=_({},["mi","mo","mn","ms","mtext"]),vr=_({},["foreignobject","desc","title","annotation-xml"]),fo=_({},["title","style","font","a","script"]),St=_({},Tn);_(St,Sn),_(St,Wa);const pn=_({},$n);_(pn,Ga);const go=function(a){let p=S(a);(!p||!p.tagName)&&(p={namespaceURI:Me,tagName:"template"});const v=Lt(a.tagName),C=Lt(p.tagName);return dn[a.namespaceURI]?a.namespaceURI===Tt?p.namespaceURI===te?v==="svg":p.namespaceURI===Et?v==="svg"&&(C==="annotation-xml"||br[C]):!!St[v]:a.namespaceURI===Et?p.namespaceURI===te?v==="math":p.namespaceURI===Tt?v==="math"&&vr[C]:!!pn[v]:a.namespaceURI===te?p.namespaceURI===Tt&&!vr[C]||p.namespaceURI===Et&&!br[C]?!1:!pn[v]&&(fo[v]||!St[v]):!!(ge==="application/xhtml+xml"&&dn[a.namespaceURI]):!1},me=function(a){Ze(e.removed,{element:a});try{a.parentNode.removeChild(a)}catch{a.remove()}},fn=function(a,p){try{Ze(e.removed,{attribute:p.getAttributeNode(a),from:p})}catch{Ze(e.removed,{attribute:null,from:p})}if(p.removeAttribute(a),a==="is"&&!M[a])if(Ie||_t)try{me(p)}catch{}else try{p.setAttribute(a,"")}catch{}},yr=function(a){let p=null,v=null;if(an)a="<remove></remove>"+a;else{const F=ja(a,/^[\r\n\t ]+/);v=F&&F[0]}ge==="application/xhtml+xml"&&Me===te&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const C=$?$.createHTML(a):a;if(Me===te)try{p=new g().parseFromString(C,ge)}catch{}if(!p||!p.documentElement){p=pe.createDocument(Me,"template",null);try{p.documentElement.innerHTML=un?W:C}catch{}}const H=p.body||p.documentElement;return a&&v&&H.insertBefore(n.createTextNode(v),H.childNodes[0]||null),Me===te?ro.call(p,fe?"html":"body")[0]:fe?p.documentElement:H},wr=function(a){return to.call(a.ownerDocument||a,a,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null)},mo=function(a){return a instanceof d&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof f)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},kr=function(a){return typeof c=="function"&&a instanceof c},ne=function(a,p,v){J[a]&&Pt(J[a],C=>{C.call(e,p,v,De)})},_r=function(a){let p=null;if(ne("beforeSanitizeElements",a,null),mo(a))return me(a),!0;const v=D(a.nodeName);if(ne("uponSanitizeElement",a,{tagName:v,allowedTags:N}),a.hasChildNodes()&&!kr(a.firstElementChild)&&Y(/<[/\w]/g,a.innerHTML)&&Y(/<[/\w]/g,a.textContent))return me(a),!0;if(!N[v]||Ke[v]){if(!Ke[v]&&Er(v)&&(x.tagNameCheck instanceof RegExp&&Y(x.tagNameCheck,v)||x.tagNameCheck instanceof Function&&x.tagNameCheck(v)))return!1;if(ln&&!Ne[v]){const C=S(a)||a.parentNode,H=T(a)||a.childNodes;if(H&&C){const F=H.length;for(let q=F-1;q>=0;--q)C.insertBefore(m(H[q],!0),E(a))}}return me(a),!0}return a instanceof l&&!go(a)||(v==="noscript"||v==="noembed"||v==="noframes")&&Y(/<\/no(script|embed|frames)/i,a.innerHTML)?(me(a),!0):(Oe&&a.nodeType===3&&(p=a.textContent,Pt([en,tn,nn],C=>{p=Je(p,C," ")}),a.textContent!==p&&(Ze(e.removed,{element:a.cloneNode()}),a.textContent=p)),ne("afterSanitizeElements",a,null),!1)},Ar=function(a,p,v){if(ur&&(p==="id"||p==="name")&&(v in n||v in po))return!1;if(!(on&&!rn[p]&&Y(oo,p))){if(!(ar&&Y(so,p))){if(!M[p]||rn[p]){if(!(Er(a)&&(x.tagNameCheck instanceof RegExp&&Y(x.tagNameCheck,a)||x.tagNameCheck instanceof Function&&x.tagNameCheck(a))&&(x.attributeNameCheck instanceof RegExp&&Y(x.attributeNameCheck,p)||x.attributeNameCheck instanceof Function&&x.attributeNameCheck(p))||p==="is"&&x.allowCustomizedBuiltInElements&&(x.tagNameCheck instanceof RegExp&&Y(x.tagNameCheck,v)||x.tagNameCheck instanceof Function&&x.tagNameCheck(v))))return!1}else if(!cn[p]){if(!Y(ir,Je(v,rr,""))){if(!((p==="src"||p==="xlink:href"||p==="href")&&a!=="script"&&Ha(v,"data:")===0&&pr[a])){if(!(lr&&!Y(ao,Je(v,rr,"")))){if(v)return!1}}}}}}return!0},Er=function(a){return a.indexOf("-")>0},Tr=function(a){ne("beforeSanitizeAttributes",a,null);const{attributes:p}=a;if(!p)return;const v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:M};let C=p.length;for(;C--;){const H=p[C],{name:F,namespaceURI:q,value:be}=H,Ye=D(F);let K=F==="value"?be:Fa(be);if(v.attrName=Ye,v.attrValue=K,v.keepAttr=!0,v.forceKeepAttr=void 0,ne("uponSanitizeAttribute",a,v),K=v.attrValue,v.forceKeepAttr||(fn(F,a),!v.keepAttr))continue;if(!cr&&Y(/\/>/i,K)){fn(F,a);continue}Oe&&Pt([en,tn,nn],$r=>{K=Je(K,$r," ")});const Sr=D(a.nodeName);if(Ar(Sr,Ye,K)){if(dr&&(Ye==="id"||Ye==="name")&&(fn(F,a),K=lo+K),$&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!q)switch(h.getAttributeType(Sr,Ye)){case"TrustedHTML":{K=$.createHTML(K);break}case"TrustedScriptURL":{K=$.createScriptURL(K);break}}try{q?a.setAttributeNS(q,F,K):a.setAttribute(F,K),Qr(e.removed)}catch{}}}ne("afterSanitizeAttributes",a,null)},bo=function y(a){let p=null;const v=wr(a);for(ne("beforeSanitizeShadowDOM",a,null);p=v.nextNode();)ne("uponSanitizeShadowNode",p,null),!_r(p)&&(p.content instanceof s&&y(p.content),Tr(p));ne("afterSanitizeShadowDOM",a,null)};return e.sanitize=function(y){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=null,v=null,C=null,H=null;if(un=!y,un&&(y="<!-->"),typeof y!="string"&&!kr(y))if(typeof y.toString=="function"){if(y=y.toString(),typeof y!="string")throw et("dirty is not a string, aborting")}else throw et("toString is not a function");if(!e.isSupported)return y;if(sn||hn(a),e.removed=[],typeof y=="string"&&(Ve=!1),Ve){if(y.nodeName){const be=D(y.nodeName);if(!N[be]||Ke[be])throw et("root node is forbidden and cannot be sanitized in-place")}}else if(y instanceof c)p=yr("<!---->"),v=p.ownerDocument.importNode(y,!0),v.nodeType===1&&v.nodeName==="BODY"||v.nodeName==="HTML"?p=v:p.appendChild(v);else{if(!Ie&&!Oe&&!fe&&y.indexOf("<")===-1)return $&&At?$.createHTML(y):y;if(p=yr(y),!p)return Ie?null:At?W:""}p&&an&&me(p.firstChild);const F=wr(Ve?y:p);for(;C=F.nextNode();)_r(C)||(C.content instanceof s&&bo(C.content),Tr(C));if(Ve)return y;if(Ie){if(_t)for(H=no.call(p.ownerDocument);p.firstChild;)H.appendChild(p.firstChild);else H=p;return(M.shadowroot||M.shadowrootmode)&&(H=io.call(r,H,!0)),H}let q=fe?p.outerHTML:p.innerHTML;return fe&&N["!doctype"]&&p.ownerDocument&&p.ownerDocument.doctype&&p.ownerDocument.doctype.name&&Y(Gi,p.ownerDocument.doctype.name)&&(q="<!DOCTYPE "+p.ownerDocument.doctype.name+`>
`+q),Oe&&Pt([en,tn,nn],be=>{q=Je(q,be," ")}),$&&At?$.createHTML(q):q},e.setConfig=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};hn(y),sn=!0},e.clearConfig=function(){De=null,sn=!1},e.isValidAttribute=function(y,a,p){De||hn({});const v=D(y),C=D(a);return Ar(v,C,p)},e.addHook=function(y,a){typeof a=="function"&&(J[y]=J[y]||[],Ze(J[y],a))},e.removeHook=function(y){if(J[y])return Qr(J[y])},e.removeHooks=function(y){J[y]&&(J[y]=[])},e.removeAllHooks=function(){J={}},e}var tl=qi();const nl={ALLOWED_TAGS:["br","div","span","a","ul","ol","li","sup","sub","code","cite"],ALLOWED_ATTR:["style","href"]};function ri(t){return tl.sanitize(t,nl)}var rl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,Jt=(t,e,n,r)=>{for(var i=r>1?void 0:r?il(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&rl(e,n,i),i};let We=class extends O{constructor(){super(...arguments),this.open=!1,this.state=It.PENDING,this.notifications=[]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent("bkddeleteallnotifications",{bubbles:!0,composed:!0}))}handleDeleteNotification(t){this.dispatchEvent(new CustomEvent("bkddeletenotification",{bubbles:!0,composed:!0,detail:{id:t}}))}renderContent(){return this.state===It.ERROR?A`<div class="error">
        ${k("Fehler beim Laden der Benachrichtigungen")}
      </div>`:this.state===It.PENDING?A`<div class="pending">${ue(Ma)}</div>`:this.notifications.length===0?A`<div class="notification">${k("Keine Benachrichtigungen")}</div>`:Na(this.notifications,t=>t.id,t=>this.renderNotification(t))}renderNotification(t){const e=ri(t.subject),n=ri(t.body);return A`<div class="notification">
      <div class="text">
        <div class="subject">${ue(e)}</div>
        <div class="body">${ue(n)}</div>
      </div>
      <button
        type="button"
        aria-label="${k("Benachrichtigung löschen")}"
        @click=${()=>this.handleDeleteNotification(t.id)}
      >
        ${ue(Da)}
      </button>
    </div> `}render(){if(this.open)return A`<div id="notifications-dropdown">
      <div class="header">
        <h2>${k("Benachrichtigungen")}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications||this.notifications.length===0}
          @click="${()=>this.handleDeleteAllNotifications()}"
        >
          ${k("Alle löschen")}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`}};We.styles=[j,I`
      :host {
        display: block;
        position: relative;
      }

      #notifications-dropdown {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        margin-top: 0.5rem;
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: 33vw;
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      h2 {
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 1.16;
      }

      .header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--bkd-func-bg-grey);
        align-items: center;
        padding: 1rem;
      }

      .header button {
        font-weight: 400;
        background-color: var(--bkd-func-bg-anthrazit);
        color: var(--bkd-func-bg-white);
        border-radius: 40px;
        border: none;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
      }

      .header button:hover,
      .header button:focus {
        background-color: var(--bkd-func-bg-anthrazit-hover);
      }

      .header button:disabled {
        cursor: default;
        background-color: var(--bkd-func-bg-grey);
      }

      .content {
        overflow-y: auto;
      }

      .pending,
      .error {
        padding: 1rem;
      }

      .error {
        color: var(--bkd-func-bg-red);
      }

      .notification {
        border-bottom: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .notification button {
        align-self: end;
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 0;
        display: flex;
      }

      .text {
        display: flex;
        justify-content: space-between;
      }

      .subject {
        padding-right: 1rem;
      }

      .body {
        text-align: right;
      }

      /* For medium & small screens */
      @media screen and (max-width: 1200px) {
        :host {
          position: absolute;
          top: calc(100% - 0.5rem); /* Place right below header */
          left: 0;
          width: 100vw;
        }

        #notifications-dropdown {
          min-width: auto;
          width: 100vw;
          right: 0;
        }
      }
    `];Jt([V()],We.prototype,"open",2);Jt([V()],We.prototype,"state",2);Jt([V()],We.prototype,"notifications",2);We=Jt([U("bkd-notifications-dropdown"),z()],We);var ol=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,Zn=(t,e,n,r)=>{for(var i=r>1?void 0:r?sl(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ol(e,n,i),i};let pt=class extends O{constructor(){super(),this.dropdown=new bt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.activeElement)??null}}),new ae(this,w)}handleSettingsItemClick(t,e){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderSettingsItem(t){return A`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?A`<img src=${t.img} alt="" width="24" height="24" />`:R}
    </li>`}render(){return A`
      <button
        type="button"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${k("Menü Benutzereinstellungen")}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${Ee(Di(w.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};pt.styles=[j,I`
      :host {
        display: flex;
        position: relative;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem 0;
        list-style-type: none;
        margin-top: calc(32px + 0.5rem);
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: max-content;
      }

      li {
        padding: 0 1.5rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        height: 36px;
      }

      li.selected {
        color: var(--bkd-brand-red);
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        font-weight: 700;
        padding: 0 calc(1.5rem - 6px);
      }

      a {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--bkd-func-fg-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
        margin-top: 2px;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a:hover::after,
      a:focus::after {
        transform: scaleX(1);
      }
    `];Zn([Z("button")],pt.prototype,"toggleElement",2);Zn([Z('ul[role="menu"]')],pt.prototype,"menuElement",2);pt=Zn([U("bkd-user-settings"),z()],pt);function al(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Ki={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={934:(o,c,l)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.generateQueryString=c.OAuth2Client=void 0;const u=l(443),f=l(618);function d(h,b){return new URL(h,b).toString()}function g(h){return new URLSearchParams(Object.fromEntries(Object.entries(h).filter(([b,m])=>m!==void 0))).toString()}c.OAuth2Client=class{constructor(h){this.discoveryDone=!1,this.serverMetadata=null,h!=null&&h.fetch||(h.fetch=fetch.bind(globalThis)),this.settings=h}async refreshToken(h){if(!h.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const b={grant_type:"refresh_token",refresh_token:h.refreshToken};return this.settings.clientSecret||(b.client_id=this.settings.clientId),this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",b))}async clientCredentials(h){var b;const m=["client_id","client_secret","grant_type","scope"];if(h!=null&&h.extraParams&&Object.keys(h.extraParams).filter(T=>m.includes(T)).length>0)throw new Error(`The following extraParams are disallowed: '${m.join("', '")}'`);const E={grant_type:"client_credentials",scope:(b=h==null?void 0:h.scope)===null||b===void 0?void 0:b.join(" "),...h==null?void 0:h.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",E))}async password(h){var b;const m={grant_type:"password",...h,scope:(b=h.scope)===null||b===void 0?void 0:b.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",m))}get authorizationCode(){return new f.OAuth2AuthorizationCodeClient(this)}async introspect(h){const b={token:h.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",b)}async getEndpoint(h){if(this.settings[h]!==void 0)return d(this.settings[h],this.settings.server);if(h!=="discoveryEndpoint"&&(await this.discover(),this.settings[h]!==void 0))return d(this.settings[h],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${h}. Either specify ${h} in the settings, or the "server" endpoint to let the client discover it.`);switch(h){case"authorizationEndpoint":return d("/authorize",this.settings.server);case"tokenEndpoint":return d("/token",this.settings.server);case"discoveryEndpoint":return d("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return d("/introspect",this.settings.server)}}async discover(){var h;if(this.discoveryDone)return;let b;this.discoveryDone=!0;try{b=await this.getEndpoint("discoveryEndpoint")}catch{return void console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint')}const m=await this.settings.fetch(b,{headers:{Accept:"application/json"}});if(!m.ok)return;if(!(!((h=m.headers.get("Content-Type"))===null||h===void 0)&&h.startsWith("application/json")))return void console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");this.serverMetadata=await m.json();const E=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[T,S]of E)this.serverMetadata[T]&&(this.settings[S]=d(this.serverMetadata[T],b));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(h,b){const m=await this.getEndpoint(h),E={"Content-Type":"application/x-www-form-urlencoded"};let T=this.settings.authenticationMethod;switch(T||(T=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),T){case"client_secret_basic":E.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":b.client_id=this.settings.clientId,this.settings.clientSecret&&(b.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+T+". Open a feature request if you want this!")}const S=await this.settings.fetch(m,{method:"POST",body:g(b),headers:E});if(S.ok)return await S.json();let $,W,pe;throw S.headers.has("Content-Type")&&S.headers.get("Content-Type").startsWith("application/json")&&($=await S.json()),$!=null&&$.error?(W="OAuth2 error "+$.error+".",$.error_description&&(W+=" "+$.error_description),pe=$.error):(W="HTTP Error "+S.status+" "+S.statusText,S.status===401&&this.settings.clientSecret&&(W+=". It's likely that the clientId and/or clientSecret was incorrect"),pe=null),new u.OAuth2Error(W,pe,S.status)}tokenResponseToOAuth2Token(h){return h.then(b=>{var m;return{accessToken:b.access_token,expiresAt:b.expires_in?Date.now()+1e3*b.expires_in:null,refreshToken:(m=b.refresh_token)!==null&&m!==void 0?m:null}})}},c.generateQueryString=g},618:(o,c,l)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.getCodeChallenge=c.generateCodeVerifier=c.OAuth2AuthorizationCodeClient=void 0;const u=l(934),f=l(443);async function d(m){const E=g();if(E!=null&&E.subtle)return["S256",b(await E.subtle.digest("SHA-256",h(m)))];{const T=l(212).createHash("sha256");return T.update(h(m)),["S256",T.digest("base64url")]}}function g(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const m=l(212);return m.webcrypto?m.webcrypto:null}function h(m){const E=new Uint8Array(m.length);for(let T=0;T<m.length;T++)E[T]=255&m.charCodeAt(T);return E}function b(m){return btoa(String.fromCharCode(...new Uint8Array(m))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}c.OAuth2AuthorizationCodeClient=class{constructor(m){this.client=m}async getAuthorizeUri(m){const[E,T]=await Promise.all([m.codeVerifier?d(m.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]);let S={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:m.redirectUri,code_challenge_method:E==null?void 0:E[0],code_challenge:E==null?void 0:E[1]};m.state&&(S.state=m.state),m.scope&&(S.scope=m.scope.join(" "));const $=Object.keys(S);if(m!=null&&m.extraParams&&Object.keys(m.extraParams).filter(W=>$.includes(W)).length>0)throw new Error(`The following extraParams are disallowed: '${$.join("', '")}'`);return S={...S,...m==null?void 0:m.extraParams},T+"?"+(0,u.generateQueryString)(S)}async getTokenFromCodeRedirect(m,E){const{code:T}=await this.validateResponse(m,{state:E.state});return this.getToken({code:T,redirectUri:E.redirectUri,codeVerifier:E.codeVerifier})}async validateResponse(m,E){var T;const S=new URL(m).searchParams;if(S.has("error"))throw new f.OAuth2Error((T=S.get("error_description"))!==null&&T!==void 0?T:"OAuth2 error",S.get("error"),0);if(!S.has("code"))throw new Error(`The url did not contain a code parameter ${m}`);if(E.state&&E.state!==S.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${E.state}`);return{code:S.get("code"),scope:S.has("scope")?S.get("scope").split(" "):void 0}}async getToken(m){const E={grant_type:"authorization_code",code:m.code,redirect_uri:m.redirectUri,code_verifier:m.codeVerifier};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",E))}},c.generateCodeVerifier=async function(){const m=g();if(m){const E=new Uint8Array(32);return m.getRandomValues(E),b(E)}{const E=l(212);return new Promise((T,S)=>{E.randomBytes(32,($,W)=>{$&&S($),T(W.toString("base64url"))})})}},c.getCodeChallenge=d},443:(o,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Error=void 0;class l extends Error{constructor(f,d,g){super(f),this.oauth2Code=d,this.httpCode=g}}c.OAuth2Error=l},13:(o,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Fetch=void 0,c.OAuth2Fetch=class{constructor(l){this.token=null,this.activeGetStoredToken=null,this.activeRefresh=null,this.refreshTimer=null,(l==null?void 0:l.scheduleRefresh)===void 0&&(l.scheduleRefresh=!0),this.options=l,l.getStoredToken&&(this.activeGetStoredToken=(async()=>{this.token=await l.getStoredToken(),this.activeGetStoredToken=null})()),this.scheduleRefresh()}async fetch(l,u){const f=new Request(l,u);return this.mw()(f,d=>fetch(d))}mw(){return async(l,u)=>{const f=await this.getAccessToken();let d=l.clone();d.headers.set("Authorization","Bearer "+f);let g=await u(d);if(!g.ok&&g.status===401){const h=await this.refreshToken();d=l.clone(),d.headers.set("Authorization","Bearer "+h.accessToken),g=await u(d)}return g}}async getToken(){return this.token&&(this.token.expiresAt===null||this.token.expiresAt>Date.now())?this.token:this.refreshToken()}async getAccessToken(){return await this.activeGetStoredToken,(await this.getToken()).accessToken}async refreshToken(){var l,u;if(this.activeRefresh)return this.activeRefresh;const f=this.token;this.activeRefresh=(async()=>{var d,g;let h=null;try{f!=null&&f.refreshToken&&(h=await this.options.client.refreshToken(f))}catch{console.warn("[oauth2] refresh token not accepted, we'll try reauthenticating")}if(h||(h=await this.options.getNewToken()),!h){const b=new Error("Unable to obtain OAuth2 tokens, a full reauth may be needed");throw(g=(d=this.options).onError)===null||g===void 0||g.call(d,b),b}return h})();try{const d=await this.activeRefresh;return this.token=d,(u=(l=this.options).storeToken)===null||u===void 0||u.call(l,d),this.scheduleRefresh(),d}catch(d){throw this.options.onError&&this.options.onError(d),d}finally{this.activeRefresh=null}}scheduleRefresh(){var l;if(!this.options.scheduleRefresh||(this.refreshTimer&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),!(!((l=this.token)===null||l===void 0)&&l.expiresAt)||!this.token.refreshToken))return;const u=this.token.expiresAt-Date.now();u<12e4||(this.refreshTimer=setTimeout(async()=>{try{await this.refreshToken()}catch(f){console.error("[fetch-mw-oauth2] error while doing a background OAuth2 auto-refresh",f)}},u-6e4))}}},212:()=>{}},r={};function i(o){var c=r[o];if(c!==void 0)return c.exports;var l=r[o]={exports:{}};return n[o](l,l.exports,i),l.exports}var s={};return(()=>{var o=s;Object.defineProperty(o,"__esModule",{value:!0}),o.OAuth2Error=o.OAuth2Fetch=o.generateCodeVerifier=o.OAuth2AuthorizationCodeClient=o.OAuth2Client=void 0;var c=i(934);Object.defineProperty(o,"OAuth2Client",{enumerable:!0,get:function(){return c.OAuth2Client}});var l=i(618);Object.defineProperty(o,"OAuth2AuthorizationCodeClient",{enumerable:!0,get:function(){return l.OAuth2AuthorizationCodeClient}}),Object.defineProperty(o,"generateCodeVerifier",{enumerable:!0,get:function(){return l.generateCodeVerifier}});var u=i(13);Object.defineProperty(o,"OAuth2Fetch",{enumerable:!0,get:function(){return u.OAuth2Fetch}});var f=i(443);Object.defineProperty(o,"OAuth2Error",{enumerable:!0,get:function(){return f.OAuth2Error}})})(),s})())})(Ki);var Jn=Ki.exports,we={},kt={};Object.defineProperty(kt,"__esModule",{value:!0});kt.OAuth2Error=void 0;class ll extends Error{constructor(e,n,r){super(e),this.oauth2Code=n,this.httpCode=r}}kt.OAuth2Error=ll;var re={};const cl={},ul=Object.freeze(Object.defineProperty({__proto__:null,default:cl},Symbol.toStringTag,{value:"Module"})),Cn=al(ul);var ii;function Vi(){if(ii)return re;ii=1,Object.defineProperty(re,"__esModule",{value:!0}),re.getCodeChallenge=re.generateCodeVerifier=re.OAuth2AuthorizationCodeClient=void 0;const t=Yi(),e=kt;class n{constructor(u){this.client=u}async getAuthorizeUri(u){const[f,d]=await Promise.all([u.codeVerifier?i(u.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]);let g={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:u.redirectUri,code_challenge_method:f==null?void 0:f[0],code_challenge:f==null?void 0:f[1]};u.state&&(g.state=u.state),u.scope&&(g.scope=u.scope.join(" "));const h=Object.keys(g);if(u!=null&&u.extraParams&&Object.keys(u.extraParams).filter(b=>h.includes(b)).length>0)throw new Error(`The following extraParams are disallowed: '${h.join("', '")}'`);return g={...g,...u==null?void 0:u.extraParams},d+"?"+(0,t.generateQueryString)(g)}async getTokenFromCodeRedirect(u,f){const{code:d}=await this.validateResponse(u,{state:f.state});return this.getToken({code:d,redirectUri:f.redirectUri,codeVerifier:f.codeVerifier})}async validateResponse(u,f){var d;const g=new URL(u).searchParams;if(g.has("error"))throw new e.OAuth2Error((d=g.get("error_description"))!==null&&d!==void 0?d:"OAuth2 error",g.get("error"),0);if(!g.has("code"))throw new Error(`The url did not contain a code parameter ${u}`);if(f.state&&f.state!==g.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${f.state}`);return{code:g.get("code"),scope:g.has("scope")?g.get("scope").split(" "):void 0}}async getToken(u){const f={grant_type:"authorization_code",code:u.code,redirect_uri:u.redirectUri,code_verifier:u.codeVerifier};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",f))}}re.OAuth2AuthorizationCodeClient=n;async function r(){const l=s();if(l){const u=new Uint8Array(32);return l.getRandomValues(u),c(u)}else{const u=Cn;return new Promise((f,d)=>{u.randomBytes(32,(g,h)=>{g&&d(g),f(h.toString("base64url"))})})}}re.generateCodeVerifier=r;async function i(l){const u=s();if(u!=null&&u.subtle)return["S256",c(await u.subtle.digest("SHA-256",o(l)))];{const d=Cn.createHash("sha256");return d.update(o(l)),["S256",d.digest("base64url")]}}re.getCodeChallenge=i;function s(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const l=Cn;return l.webcrypto?l.webcrypto:null}function o(l){const u=new Uint8Array(l.length);for(let f=0;f<l.length;f++)u[f]=l.charCodeAt(f)&255;return u}function c(l){return btoa(String.fromCharCode(...new Uint8Array(l))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return re}var oi;function Yi(){if(oi)return we;oi=1,Object.defineProperty(we,"__esModule",{value:!0}),we.generateQueryString=we.OAuth2Client=void 0;const t=kt,e=Vi();class n{constructor(o){this.discoveryDone=!1,this.serverMetadata=null,o!=null&&o.fetch||(o.fetch=fetch.bind(globalThis)),this.settings=o}async refreshToken(o){if(!o.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const c={grant_type:"refresh_token",refresh_token:o.refreshToken};return this.settings.clientSecret||(c.client_id=this.settings.clientId),this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",c))}async clientCredentials(o){var c;const l=["client_id","client_secret","grant_type","scope"];if(o!=null&&o.extraParams&&Object.keys(o.extraParams).filter(f=>l.includes(f)).length>0)throw new Error(`The following extraParams are disallowed: '${l.join("', '")}'`);const u={grant_type:"client_credentials",scope:(c=o==null?void 0:o.scope)===null||c===void 0?void 0:c.join(" "),...o==null?void 0:o.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",u))}async password(o){var c;const l={grant_type:"password",...o,scope:(c=o.scope)===null||c===void 0?void 0:c.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",l))}get authorizationCode(){return new e.OAuth2AuthorizationCodeClient(this)}async introspect(o){const c={token:o.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",c)}async getEndpoint(o){if(this.settings[o]!==void 0)return r(this.settings[o],this.settings.server);if(o!=="discoveryEndpoint"&&(await this.discover(),this.settings[o]!==void 0))return r(this.settings[o],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${o}. Either specify ${o} in the settings, or the "server" endpoint to let the client discover it.`);switch(o){case"authorizationEndpoint":return r("/authorize",this.settings.server);case"tokenEndpoint":return r("/token",this.settings.server);case"discoveryEndpoint":return r("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return r("/introspect",this.settings.server)}}async discover(){var o;if(this.discoveryDone)return;this.discoveryDone=!0;let c;try{c=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const l=await this.settings.fetch(c,{headers:{Accept:"application/json"}});if(!l.ok)return;if(!(!((o=l.headers.get("Content-Type"))===null||o===void 0)&&o.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await l.json();const u=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[f,d]of u)this.serverMetadata[f]&&(this.settings[d]=r(this.serverMetadata[f],c));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(o,c){const l=await this.getEndpoint(o),u={"Content-Type":"application/x-www-form-urlencoded"};let f=this.settings.authenticationMethod;switch(f||(f=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),f){case"client_secret_basic":u.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":c.client_id=this.settings.clientId,this.settings.clientSecret&&(c.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+f+". Open a feature request if you want this!")}const d=await this.settings.fetch(l,{method:"POST",body:i(c),headers:u});if(d.ok)return await d.json();let g,h,b;throw d.headers.has("Content-Type")&&d.headers.get("Content-Type").startsWith("application/json")&&(g=await d.json()),g!=null&&g.error?(h="OAuth2 error "+g.error+".",g.error_description&&(h+=" "+g.error_description),b=g.error):(h="HTTP Error "+d.status+" "+d.statusText,d.status===401&&this.settings.clientSecret&&(h+=". It's likely that the clientId and/or clientSecret was incorrect"),b=null),new t.OAuth2Error(h,b,d.status)}tokenResponseToOAuth2Token(o){return o.then(c=>{var l;return{accessToken:c.access_token,expiresAt:c.expires_in?Date.now()+c.expires_in*1e3:null,refreshToken:(l=c.refresh_token)!==null&&l!==void 0?l:null}})}}we.OAuth2Client=n;function r(s,o){return new URL(s,o).toString()}function i(s){return new URLSearchParams(Object.fromEntries(Object.entries(s).filter(([o,c])=>c!==void 0))).toString()}return we.generateQueryString=i,we}var dl=Yi(),Xi=Vi(),Qi=(t=>(t.Refresh="refresh",t.Access="access",t))(Qi||{});const rt={refresh:void 0,access:void 0};function hl(t){si(t,P.refreshTokenPayload),P.onRefreshTokenUpdate(e=>si(t,e)),ai(t,P.accessTokenPayload),P.onAccessTokenUpdate(e=>ai(t,e))}function pl(){Object.values(Qi).forEach(t=>{rt[t]&&clearTimeout(rt[t])})}function si(t,e){Zi("refresh",e,()=>{const n=P.accessTokenPayload;if(!n)return;const{scope:r,locale:i}=n;ft(t,r,i,er)})}function ai(t,e){Zi("access",e,()=>{if(!e)return;const{scope:n,locale:r}=e;ft(t,n,r,Ji)})}function Zi(t,e,n){rt[t]&&clearTimeout(rt[t]);const r=e&&is(e);r&&r>0&&(rt[t]=setTimeout(n,r))}const B=Yt();if(typeof(B==null?void 0:B.oAuthServer)!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof(B==null?void 0:B.oAuthPrefix)!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof(B==null?void 0:B.oAuthClientId)!="string")throw new Error("Invalid 'clientId' setting");function fl(){return new Jn.OAuth2Client({server:B.oAuthServer,clientId:B.oAuthClientId,tokenEndpoint:`${B.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return bl()},fetch:(...t)=>fetch(...t)})}async function gl(t,e,n){const r=vs(),i=await vl(t,r);if(i){yl(i,r);return}const s=wl();if(s){kl(s);return}await jn(t,e,n)}async function jn(t,e,n){if(P.isRefreshTokenExpired())return ft(t,e,n,er);const r=P.accessToken,i=cs(e);Gr(r,e,n)||(Gr(i,e,n)?P.accessToken=i:await ft(t,e,n,Ji))}async function ml(t){const e=Pi();if(!e)throw new Error("No instance available");const{accessToken:n,scope:r,locale:i}=P;if(!(!n||!r||!i))try{await _l(t,`${B.oAuthPrefix}/Authorization/${e}/Logout`,{access_token:n})}catch(s){if(!(s instanceof SyntaxError))throw s}finally{P.resetAllTokens(),pl(),await ft(t,r,i,er)}}function bl(){const t=Pi();return t?`${B.oAuthPrefix}/Authorization/${t}/Login`:`${B.oAuthPrefix}/Authorization/Login`}async function ft(t,e,n,r){const i=await Jn.generateCodeVerifier(),s=new URL(document.location.href);s.searchParams.set($e,n),ys(i,s.toString());const o=await r(t,e,n,s.toString(),i);document.location.href=o.toString()}const er=async(t,e,n,r,i)=>{const s=new URL(await t.getEndpoint("authorizationEndpoint")),[o,c]=await Xi.getCodeChallenge(i);return s.searchParams.set("clientId",t.settings.clientId),s.searchParams.set("redirectUrl",r),s.searchParams.set("culture_info",n),s.searchParams.set("application_scope",e),s.searchParams.set("response_type","code"),s.searchParams.set("code_challenge_method",o),s.searchParams.set("code_challenge",c),s},Ji=async(t,e,n,r,i)=>{const s=new URL(`${B.oAuthPrefix}/Authorization/RefreshPublic`,t.settings.server),[o,c]=await Xi.getCodeChallenge(i);return s.searchParams.set("redirectUrl",r),s.searchParams.set("culture_info",n),s.searchParams.set("application_scope",e),s.searchParams.set("refresh_token",P.refreshToken??""),s.searchParams.set("response_type","code"),s.searchParams.set("code_challenge_method",o),s.searchParams.set("code_challenge",c),s};async function vl(t,e){return new URLSearchParams(document.location.search).get("code")&&(e!=null&&e.redirectUri)?await t.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:e.redirectUri,codeVerifier:e.codeVerifier}):null}function yl({refreshToken:t,accessToken:e},n){var i;P.refreshToken=t,P.accessToken=e;const r=(i=P.accessTokenPayload)==null?void 0:i.instanceId;r&&ls(r),n!=null&&n.redirectUri&&w.navigate(new URL(n.redirectUri))}function wl(){const t=new URLSearchParams(document.location.search),e=t.get("access_token"),n=t.get("expires_in"),r=t.get("refresh_token");return e?{accessToken:e,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function kl(t){const{refreshToken:e,accessToken:n}=t;P.refreshToken=e,P.accessToken=n;const r=new URL(document.location.href);r.searchParams.delete("access_token"),r.searchParams.delete("expires_in"),r.searchParams.delete("refresh_token"),window.parent===window?history.replaceState({},"",r):window.parent.location.assign(r)}async function _l(t,e,n){var u;const r=new URL(e,t.settings.server).toString(),i={"Content-Type":"application/x-www-form-urlencoded"},s=await fetch(r,{method:"POST",body:n&&dl.generateQueryString(n),headers:i});if(s.ok)return await s.json();let o,c,l;throw(u=s.headers.get("Content-Type"))!=null&&u.startsWith("application/json")&&(o=await s.json()),o!=null&&o.error?(c="OAuth2 error "+o.error+".",o.error_description&&(c+=" "+o.error_description),l=o.error):(c="HTTP Error "+s.status+" "+s.statusText,l=null),new Jn.OAuth2Error(c,l,s.status)}var Al=Object.defineProperty,El=Object.getOwnPropertyDescriptor,eo=(t,e,n,r)=>{for(var i=r>1?void 0:r?El(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Al(e,n,i),i};const it=fl();hl(it);const Tl=async function(){await gl(it,Gs(),xi()),w.init()}();Xs(I`
    ${Li}
    :root {
      ${Ii}
    }
  `.toString());let Gt=class extends O{constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:t})=>{switch(t.type){case"bkdAppPushState":{const e=t.args[2];this.updateUrlAndNavigationState(e,!1);break}case"bkdAppReplaceState":{const e=t.args[2];An(_n(e),!0);break}case"bkdAppHashChange":{const{url:e}=t;An(_n(e));break}}},Tl.then(()=>this.authReady=!0),new ae(this,w)}connectedCallback(){super.connectedCallback(),w.initialized.then(()=>{P.scope!==w.app.scope&&jn(it,w.app.scope,w.locale)}),this.subscriptions.push(w.subscribeScopeAndLocale((e,n)=>jn(it,e,n),!0)),this.subscriptions.push(w.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(w.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const t=new URL(location.href);w.actualAppPath=t.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(t=>t()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}updateTitle(){const{instanceName:t,navigationItem:e}=w,n=(e==null?void 0:e.label)&&(e==null?void 0:e.key)!==L.navigationHome.key;document.title=n?[e==null?void 0:e.label,t].join(" ― "):t}updateUrlAndNavigationState(t,e){var i;const n=_n(t);An(n,e);const r=zs(w.navigation,n);(i=r==null?void 0:r.item)!=null&&i.key&&r.item.key!==w.navigationItemKey?(w.actualAppPath=n,w.navigationItemKey=r.item.key):w.appPath=n}handleHashChange(t){const e=new URL(t.newURL);w.appPath=e.hash}handleLogout(){ml(it)}render(){return A`
      ${je(this.authReady&&P.authenticated,()=>A`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};Gt.styles=[j,I`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
      }

      bkd-content {
        flex: auto;
      }
    `];eo([qe()],Gt.prototype,"authReady",2);Gt=eo([U("bkd-portal"),z()],Gt);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}