"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[461],{2523:(ve,Ze,Me)=>{const Ne=":";Error;const qe=function(r,...s){if(qe.translate){const h=qe.translate(r,s);r=h[0],s=h[1]}let u=st(r[0],r.raw[0]);for(let h=1;h<r.length;h++)u+=s[h-1]+st(r[h],r.raw[h]);return u},ot=":";function st(r,s){return s.charAt(0)===ot?r.substring(function Ge(r,s){for(let u=1,h=1;u<r.length;u++,h++)if("\\"===s[h])h++;else if(r[u]===Ne)return u;throw new Error(`Unterminated $localize metadata block in "${s}".`)}(r,s)+1):r}globalThis.$localize=qe,Me(6935)},6935:()=>{!function(e){const n=e.performance;function a(B){n&&n.mark&&n.mark(B)}function i(B,v){n&&n.measure&&n.measure(B,v)}a("Zone");const l=e.__Zone_symbol_prefix||"__zone_symbol__";function f(B){return l+B}const E=!0===e[f("forceDuplicateZoneCheck")];if(e.Zone){if(E||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let p=(()=>{class B{static#e=this.__symbol__=f;static assertZonePatched(){if(e.Promise!==ye.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=B.current;for(;t.parent;)t=t.parent;return t}static get current(){return Q.zone}static get currentTask(){return ge}static __load_patch(t,o,I=!1){if(ye.hasOwnProperty(t)){if(!I&&E)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const Z="Zone:"+t;a(Z),ye[t]=o(e,B,oe),i(Z,Z)}}get parent(){return this._parent}get name(){return this._name}constructor(t,o){this._parent=t,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new S(this,this._parent&&this._parent._zoneDelegate,o)}get(t){const o=this.getZoneWith(t);if(o)return o._properties[t]}getZoneWith(t){let o=this;for(;o;){if(o._properties.hasOwnProperty(t))return o;o=o._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,o){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const I=this._zoneDelegate.intercept(this,t,o),Z=this;return function(){return Z.runGuarded(I,this,arguments,o)}}run(t,o,I,Z){Q={parent:Q,zone:this};try{return this._zoneDelegate.invoke(this,t,o,I,Z)}finally{Q=Q.parent}}runGuarded(t,o=null,I,Z){Q={parent:Q,zone:this};try{try{return this._zoneDelegate.invoke(this,t,o,I,Z)}catch(se){if(this._zoneDelegate.handleError(this,se))throw se}}finally{Q=Q.parent}}runTask(t,o,I){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||ce).name+"; Execution: "+this.name+")");if(t.state===G&&(t.type===ue||t.type===C))return;const Z=t.state!=k;Z&&t._transitionTo(k,V),t.runCount++;const se=ge;ge=t,Q={parent:Q,zone:this};try{t.type==C&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,o,I)}catch(_){if(this._zoneDelegate.handleError(this,_))throw _}}finally{t.state!==G&&t.state!==g&&(t.type==ue||t.data&&t.data.isPeriodic?Z&&t._transitionTo(V,k):(t.runCount=0,this._updateTaskCount(t,-1),Z&&t._transitionTo(G,k,G))),Q=Q.parent,ge=se}}scheduleTask(t){if(t.zone&&t.zone!==this){let I=this;for(;I;){if(I===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);I=I.parent}}t._transitionTo(re,G);const o=[];t._zoneDelegates=o,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(I){throw t._transitionTo(g,re,G),this._zoneDelegate.handleError(this,I),I}return t._zoneDelegates===o&&this._updateTaskCount(t,1),t.state==re&&t._transitionTo(V,re),t}scheduleMicroTask(t,o,I,Z){return this.scheduleTask(new b($,t,o,I,Z,void 0))}scheduleMacroTask(t,o,I,Z,se){return this.scheduleTask(new b(C,t,o,I,Z,se))}scheduleEventTask(t,o,I,Z,se){return this.scheduleTask(new b(ue,t,o,I,Z,se))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||ce).name+"; Execution: "+this.name+")");if(t.state===V||t.state===k){t._transitionTo(q,V,k);try{this._zoneDelegate.cancelTask(this,t)}catch(o){throw t._transitionTo(g,q),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(t,-1),t._transitionTo(G,q),t.runCount=0,t}}_updateTaskCount(t,o){const I=t._zoneDelegates;-1==o&&(t._zoneDelegates=null);for(let Z=0;Z<I.length;Z++)I[Z]._updateTaskCount(t.type,o)}}return B})();const N={name:"",onHasTask:(B,v,t,o)=>B.hasTask(t,o),onScheduleTask:(B,v,t,o)=>B.scheduleTask(t,o),onInvokeTask:(B,v,t,o,I,Z)=>B.invokeTask(t,o,I,Z),onCancelTask:(B,v,t,o)=>B.cancelTask(t,o)};class S{constructor(v,t,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=v,this._parentDelegate=t,this._forkZS=o&&(o&&o.onFork?o:t._forkZS),this._forkDlgt=o&&(o.onFork?t:t._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:t._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:t._interceptZS),this._interceptDlgt=o&&(o.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:t._invokeZS),this._invokeDlgt=o&&(o.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:t._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:t._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:t._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:t._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const I=o&&o.onHasTask;(I||t&&t._hasTaskZS)&&(this._hasTaskZS=I?o:N,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=v,o.onScheduleTask||(this._scheduleTaskZS=N,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=N,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=N,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(v,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,v,t):new p(v,t)}intercept(v,t,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,v,t,o):t}invoke(v,t,o,I,Z){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,v,t,o,I,Z):t.apply(o,I)}handleError(v,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,v,t)}scheduleTask(v,t){let o=t;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,v,t),o||(o=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=$)throw new Error("Task is missing scheduleFn.");D(t)}return o}invokeTask(v,t,o,I){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,v,t,o,I):t.callback.apply(o,I)}cancelTask(v,t){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,v,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");o=t.cancelFn(t)}return o}hasTask(v,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,v,t)}catch(o){this.handleError(v,o)}}_updateTaskCount(v,t){const o=this._taskCounts,I=o[v],Z=o[v]=I+t;if(Z<0)throw new Error("More tasks executed then were scheduled.");0!=I&&0!=Z||this.hasTask(this.zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:v})}}class b{constructor(v,t,o,I,Z,se){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=v,this.source=t,this.data=I,this.scheduleFn=Z,this.cancelFn=se,!o)throw new Error("callback is not defined");this.callback=o;const _=this;this.invoke=v===ue&&I&&I.useG?b.invokeTask:function(){return b.invokeTask.call(e,_,this,arguments)}}static invokeTask(v,t,o){v||(v=this),he++;try{return v.runCount++,v.zone.runTask(v,t,o)}finally{1==he&&y(),he--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(G,re)}_transitionTo(v,t,o){if(this._state!==t&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${v}', expecting state '${t}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=v,v==G&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const H=f("setTimeout"),j=f("Promise"),x=f("then");let ae,J=[],z=!1;function ne(B){if(ae||e[j]&&(ae=e[j].resolve(0)),ae){let v=ae[x];v||(v=ae.then),v.call(ae,B)}else e[H](B,0)}function D(B){0===he&&0===J.length&&ne(y),B&&J.push(B)}function y(){if(!z){for(z=!0;J.length;){const B=J;J=[];for(let v=0;v<B.length;v++){const t=B[v];try{t.zone.runTask(t,null,null)}catch(o){oe.onUnhandledError(o)}}}oe.microtaskDrainDone(),z=!1}}const ce={name:"NO ZONE"},G="notScheduled",re="scheduling",V="scheduled",k="running",q="canceling",g="unknown",$="microTask",C="macroTask",ue="eventTask",ye={},oe={symbol:f,currentZoneFrame:()=>Q,onUnhandledError:ee,microtaskDrainDone:ee,scheduleMicroTask:D,showUncaughtError:()=>!p[f("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:ee,patchMethod:()=>ee,bindArguments:()=>[],patchThen:()=>ee,patchMacroTask:()=>ee,patchEventPrototype:()=>ee,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>ee,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>ee,wrapWithCurrentZone:()=>ee,filterProperties:()=>[],attachOriginToPatched:()=>ee,_redefineProperty:()=>ee,patchCallbacks:()=>ee,nativeScheduleMicroTask:ne};let Q={parent:null,zone:new p(null,null)},ge=null,he=0;function ee(){}i("Zone","Zone"),e.Zone=p}(globalThis);const ve=Object.getOwnPropertyDescriptor,Ze=Object.defineProperty,Me=Object.getPrototypeOf,Ne=Object.create,ct=Array.prototype.slice,Le="addEventListener",$e="removeEventListener",be=Zone.__symbol__(Le),Ke=Zone.__symbol__($e),_e="true",pe="false",Ce=Zone.__symbol__("");function He(e,n){return Zone.current.wrap(e,n)}function Be(e,n,a,i,l){return Zone.current.scheduleMacroTask(e,n,a,i,l)}const U=Zone.__symbol__,Ae=typeof window<"u",we=Ae?window:void 0,K=Ae&&we||globalThis,at="removeAttribute";function je(e,n){for(let a=e.length-1;a>=0;a--)"function"==typeof e[a]&&(e[a]=He(e[a],n+"_"+a));return e}function Ue(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Ve=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Pe=!("nw"in K)&&typeof K.process<"u"&&"[object process]"==={}.toString.call(K.process),me=!Pe&&!Ve&&!(!Ae||!we.HTMLElement),Qe=typeof K.process<"u"&&"[object process]"==={}.toString.call(K.process)&&!Ve&&!(!Ae||!we.HTMLElement),Re={},et=function(e){if(!(e=e||K.event))return;let n=Re[e.type];n||(n=Re[e.type]=U("ON_PROPERTY"+e.type));const a=this||e.target||K,i=a[n];let l;return me&&a===we&&"error"===e.type?(l=i&&i.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===l&&e.preventDefault()):(l=i&&i.apply(this,arguments),null!=l&&!l&&e.preventDefault()),l};function ze(e,n,a){let i=ve(e,n);if(!i&&a&&ve(a,n)&&(i={enumerable:!0,configurable:!0}),!i||!i.configurable)return;const l=U("on"+n+"patched");if(e.hasOwnProperty(l)&&e[l])return;delete i.writable,delete i.value;const f=i.get,E=i.set,p=n.slice(2);let N=Re[p];N||(N=Re[p]=U("ON_PROPERTY"+p)),i.set=function(S){let b=this;!b&&e===K&&(b=K),b&&("function"==typeof b[N]&&b.removeEventListener(p,et),E&&E.call(b,null),b[N]=S,"function"==typeof S&&b.addEventListener(p,et,!1))},i.get=function(){let S=this;if(!S&&e===K&&(S=K),!S)return null;const b=S[N];if(b)return b;if(f){let H=f.call(this);if(H)return i.set.call(this,H),"function"==typeof S[at]&&S.removeAttribute(n),H}return null},Ze(e,n,i),e[l]=!0}function tt(e,n,a){if(n)for(let i=0;i<n.length;i++)ze(e,"on"+n[i],a);else{const i=[];for(const l in e)"on"==l.slice(0,2)&&i.push(l);for(let l=0;l<i.length;l++)ze(e,i[l],a)}}const de=U("originalInstance");function Oe(e){const n=K[e];if(!n)return;K[U(e)]=n,K[e]=function(){const l=je(arguments,e);switch(l.length){case 0:this[de]=new n;break;case 1:this[de]=new n(l[0]);break;case 2:this[de]=new n(l[0],l[1]);break;case 3:this[de]=new n(l[0],l[1],l[2]);break;case 4:this[de]=new n(l[0],l[1],l[2],l[3]);break;default:throw new Error("Arg list too long.")}},Ee(K[e],n);const a=new n(function(){});let i;for(i in a)"XMLHttpRequest"===e&&"responseBlob"===i||function(l){"function"==typeof a[l]?K[e].prototype[l]=function(){return this[de][l].apply(this[de],arguments)}:Ze(K[e].prototype,l,{set:function(f){"function"==typeof f?(this[de][l]=He(f,e+"."+l),Ee(this[de][l],f)):this[de][l]=f},get:function(){return this[de][l]}})}(i);for(i in n)"prototype"!==i&&n.hasOwnProperty(i)&&(K[e][i]=n[i])}function Te(e,n,a){let i=e;for(;i&&!i.hasOwnProperty(n);)i=Me(i);!i&&e[n]&&(i=e);const l=U(n);let f=null;if(i&&(!(f=i[l])||!i.hasOwnProperty(l))&&(f=i[l]=i[n],Ue(i&&ve(i,n)))){const p=a(f,l,n);i[n]=function(){return p(this,arguments)},Ee(i[n],f)}return f}function nt(e,n,a){let i=null;function l(f){const E=f.data;return E.args[E.cbIdx]=function(){f.invoke.apply(this,arguments)},i.apply(E.target,E.args),f}i=Te(e,n,f=>function(E,p){const N=a(E,p);return N.cbIdx>=0&&"function"==typeof p[N.cbIdx]?Be(N.name,p[N.cbIdx],N,l):f.apply(E,p)})}function Ee(e,n){e[U("OriginalDelegate")]=n}let Ge=!1,Fe=!1;function lt(){if(Ge)return Fe;Ge=!0;try{const e=we.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Fe=!0)}catch{}return Fe}Zone.__load_patch("ZoneAwarePromise",(e,n,a)=>{const i=Object.getOwnPropertyDescriptor,l=Object.defineProperty,E=a.symbol,p=[],N=!1!==e[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],S=E("Promise"),b=E("then"),H="__creationTrace__";a.onUnhandledError=_=>{if(a.showUncaughtError()){const d=_&&_.rejection;d?console.error("Unhandled Promise rejection:",d instanceof Error?d.message:d,"; Zone:",_.zone.name,"; Task:",_.task&&_.task.source,"; Value:",d,d instanceof Error?d.stack:void 0):console.error(_)}},a.microtaskDrainDone=()=>{for(;p.length;){const _=p.shift();try{_.zone.runGuarded(()=>{throw _.throwOriginal?_.rejection:_})}catch(d){x(d)}}};const j=E("unhandledPromiseRejectionHandler");function x(_){a.onUnhandledError(_);try{const d=n[j];"function"==typeof d&&d.call(this,_)}catch{}}function J(_){return _&&_.then}function z(_){return _}function ae(_){return t.reject(_)}const ne=E("state"),D=E("value"),y=E("finally"),ce=E("parentPromiseValue"),G=E("parentPromiseState"),re="Promise.then",V=null,k=!0,q=!1,g=0;function $(_,d){return c=>{try{oe(_,d,c)}catch(T){oe(_,!1,T)}}}const C=function(){let _=!1;return function(c){return function(){_||(_=!0,c.apply(null,arguments))}}},ue="Promise resolved with itself",ye=E("currentTaskTrace");function oe(_,d,c){const T=C();if(_===c)throw new TypeError(ue);if(_[ne]===V){let R=null;try{("object"==typeof c||"function"==typeof c)&&(R=c&&c.then)}catch(O){return T(()=>{oe(_,!1,O)})(),_}if(d!==q&&c instanceof t&&c.hasOwnProperty(ne)&&c.hasOwnProperty(D)&&c[ne]!==V)ge(c),oe(_,c[ne],c[D]);else if(d!==q&&"function"==typeof R)try{R.call(c,T($(_,d)),T($(_,!1)))}catch(O){T(()=>{oe(_,!1,O)})()}else{_[ne]=d;const O=_[D];if(_[D]=c,_[y]===y&&d===k&&(_[ne]=_[G],_[D]=_[ce]),d===q&&c instanceof Error){const P=n.currentTask&&n.currentTask.data&&n.currentTask.data[H];P&&l(c,ye,{configurable:!0,enumerable:!1,writable:!0,value:P})}for(let P=0;P<O.length;)he(_,O[P++],O[P++],O[P++],O[P++]);if(0==O.length&&d==q){_[ne]=g;let P=c;try{throw new Error("Uncaught (in promise): "+function f(_){return _&&_.toString===Object.prototype.toString?(_.constructor&&_.constructor.name||"")+": "+JSON.stringify(_):_?_.toString():Object.prototype.toString.call(_)}(c)+(c&&c.stack?"\n"+c.stack:""))}catch(M){P=M}N&&(P.throwOriginal=!0),P.rejection=c,P.promise=_,P.zone=n.current,P.task=n.currentTask,p.push(P),a.scheduleMicroTask()}}}return _}const Q=E("rejectionHandledHandler");function ge(_){if(_[ne]===g){try{const d=n[Q];d&&"function"==typeof d&&d.call(this,{rejection:_[D],promise:_})}catch{}_[ne]=q;for(let d=0;d<p.length;d++)_===p[d].promise&&p.splice(d,1)}}function he(_,d,c,T,R){ge(_);const O=_[ne],P=O?"function"==typeof T?T:z:"function"==typeof R?R:ae;d.scheduleMicroTask(re,()=>{try{const M=_[D],L=!!c&&y===c[y];L&&(c[ce]=M,c[G]=O);const A=d.run(P,void 0,L&&P!==ae&&P!==z?[]:[M]);oe(c,!0,A)}catch(M){oe(c,!1,M)}},c)}const B=function(){},v=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(d){return d instanceof t?d:oe(new this(null),k,d)}static reject(d){return oe(new this(null),q,d)}static withResolvers(){const d={};return d.promise=new t((c,T)=>{d.resolve=c,d.reject=T}),d}static any(d){if(!d||"function"!=typeof d[Symbol.iterator])return Promise.reject(new v([],"All promises were rejected"));const c=[];let T=0;try{for(let P of d)T++,c.push(t.resolve(P))}catch{return Promise.reject(new v([],"All promises were rejected"))}if(0===T)return Promise.reject(new v([],"All promises were rejected"));let R=!1;const O=[];return new t((P,M)=>{for(let L=0;L<c.length;L++)c[L].then(A=>{R||(R=!0,P(A))},A=>{O.push(A),T--,0===T&&(R=!0,M(new v(O,"All promises were rejected")))})})}static race(d){let c,T,R=new this((M,L)=>{c=M,T=L});function O(M){c(M)}function P(M){T(M)}for(let M of d)J(M)||(M=this.resolve(M)),M.then(O,P);return R}static all(d){return t.allWithCallback(d)}static allSettled(d){return(this&&this.prototype instanceof t?this:t).allWithCallback(d,{thenCallback:T=>({status:"fulfilled",value:T}),errorCallback:T=>({status:"rejected",reason:T})})}static allWithCallback(d,c){let T,R,O=new this((A,X)=>{T=A,R=X}),P=2,M=0;const L=[];for(let A of d){J(A)||(A=this.resolve(A));const X=M;try{A.then(Y=>{L[X]=c?c.thenCallback(Y):Y,P--,0===P&&T(L)},Y=>{c?(L[X]=c.errorCallback(Y),P--,0===P&&T(L)):R(Y)})}catch(Y){R(Y)}P++,M++}return P-=2,0===P&&T(L),O}constructor(d){const c=this;if(!(c instanceof t))throw new Error("Must be an instanceof Promise.");c[ne]=V,c[D]=[];try{const T=C();d&&d(T($(c,k)),T($(c,q)))}catch(T){oe(c,!1,T)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(d,c){let T=this.constructor?.[Symbol.species];(!T||"function"!=typeof T)&&(T=this.constructor||t);const R=new T(B),O=n.current;return this[ne]==V?this[D].push(O,R,d,c):he(this,O,R,d,c),R}catch(d){return this.then(null,d)}finally(d){let c=this.constructor?.[Symbol.species];(!c||"function"!=typeof c)&&(c=t);const T=new c(B);T[y]=y;const R=n.current;return this[ne]==V?this[D].push(R,T,d,d):he(this,R,T,d,d),T}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const o=e[S]=e.Promise;e.Promise=t;const I=E("thenPatched");function Z(_){const d=_.prototype,c=i(d,"then");if(c&&(!1===c.writable||!c.configurable))return;const T=d.then;d[b]=T,_.prototype.then=function(R,O){return new t((M,L)=>{T.call(this,M,L)}).then(R,O)},_[I]=!0}return a.patchThen=Z,o&&(Z(o),Te(e,"fetch",_=>function se(_){return function(d,c){let T=_.apply(d,c);if(T instanceof t)return T;let R=T.constructor;return R[I]||Z(R),T}}(_))),Promise[n.__symbol__("uncaughtPromiseErrors")]=p,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,a=U("OriginalDelegate"),i=U("Promise"),l=U("Error"),f=function(){if("function"==typeof this){const S=this[a];if(S)return"function"==typeof S?n.call(S):Object.prototype.toString.call(S);if(this===Promise){const b=e[i];if(b)return n.call(b)}if(this===Error){const b=e[l];if(b)return n.call(b)}}return n.call(this)};f[a]=n,Function.prototype.toString=f;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}});let Se=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){Se=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Se=!1}const Tt={useG:!0},le={},We={},ut=new RegExp("^"+Ce+"(\\w+)(true|false)$"),ft=U("propagationStopped");function rt(e,n){const a=(n?n(e):e)+pe,i=(n?n(e):e)+_e,l=Ce+a,f=Ce+i;le[e]={},le[e][pe]=l,le[e][_e]=f}function qe(e,n,a,i){const l=i&&i.add||Le,f=i&&i.rm||$e,E=i&&i.listeners||"eventListeners",p=i&&i.rmAll||"removeAllListeners",N=U(l),S="."+l+":",b="prependListener",H="."+b+":",j=function(D,y,ce){if(D.isRemoved)return;const G=D.callback;let re;"object"==typeof G&&G.handleEvent&&(D.callback=k=>G.handleEvent(k),D.originalDelegate=G);try{D.invoke(D,y,[ce])}catch(k){re=k}const V=D.options;return V&&"object"==typeof V&&V.once&&y[f].call(y,ce.type,D.originalDelegate?D.originalDelegate:D.callback,V),re};function x(D,y,ce){if(!(y=y||e.event))return;const G=D||y.target||e,re=G[le[y.type][ce?_e:pe]];if(re){const V=[];if(1===re.length){const k=j(re[0],G,y);k&&V.push(k)}else{const k=re.slice();for(let q=0;q<k.length&&(!y||!0!==y[ft]);q++){const g=j(k[q],G,y);g&&V.push(g)}}if(1===V.length)throw V[0];for(let k=0;k<V.length;k++){const q=V[k];n.nativeScheduleMicroTask(()=>{throw q})}}}const J=function(D){return x(this,D,!1)},z=function(D){return x(this,D,!0)};function ae(D,y){if(!D)return!1;let ce=!0;y&&void 0!==y.useG&&(ce=y.useG);const G=y&&y.vh;let re=!0;y&&void 0!==y.chkDup&&(re=y.chkDup);let V=!1;y&&void 0!==y.rt&&(V=y.rt);let k=D;for(;k&&!k.hasOwnProperty(l);)k=Me(k);if(!k&&D[l]&&(k=D),!k||k[N])return!1;const q=y&&y.eventNameToString,g={},$=k[N]=k[l],C=k[U(f)]=k[f],ue=k[U(E)]=k[E],ye=k[U(p)]=k[p];let oe;y&&y.prepend&&(oe=k[U(y.prepend)]=k[y.prepend]);const t=ce?function(c){if(!g.isExisting)return $.call(g.target,g.eventName,g.capture?z:J,g.options)}:function(c){return $.call(g.target,g.eventName,c.invoke,g.options)},o=ce?function(c){if(!c.isRemoved){const T=le[c.eventName];let R;T&&(R=T[c.capture?_e:pe]);const O=R&&c.target[R];if(O)for(let P=0;P<O.length;P++)if(O[P]===c){O.splice(P,1),c.isRemoved=!0,0===O.length&&(c.allRemoved=!0,c.target[R]=null);break}}if(c.allRemoved)return C.call(c.target,c.eventName,c.capture?z:J,c.options)}:function(c){return C.call(c.target,c.eventName,c.invoke,c.options)},Z=y&&y.diff?y.diff:function(c,T){const R=typeof T;return"function"===R&&c.callback===T||"object"===R&&c.originalDelegate===T},se=Zone[U("UNPATCHED_EVENTS")],_=e[U("PASSIVE_EVENTS")],d=function(c,T,R,O,P=!1,M=!1){return function(){const L=this||e;let A=arguments[0];y&&y.transferEventName&&(A=y.transferEventName(A));let X=arguments[1];if(!X)return c.apply(this,arguments);if(Pe&&"uncaughtException"===A)return c.apply(this,arguments);let Y=!1;if("function"!=typeof X){if(!X.handleEvent)return c.apply(this,arguments);Y=!0}if(G&&!G(c,X,L,arguments))return;const Ie=Se&&!!_&&-1!==_.indexOf(A),fe=function Q(c,T){return!Se&&"object"==typeof c&&c?!!c.capture:Se&&T?"boolean"==typeof c?{capture:c,passive:!0}:c?"object"==typeof c&&!1!==c.passive?{...c,passive:!0}:c:{passive:!0}:c}(arguments[2],Ie),Xe=fe&&"object"==typeof fe&&fe.signal&&"object"==typeof fe.signal?fe.signal:void 0;if(Xe?.aborted)return;if(se)for(let De=0;De<se.length;De++)if(A===se[De])return Ie?c.call(L,A,X,fe):c.apply(this,arguments);const ht=!!fe&&("boolean"==typeof fe||fe.capture),gt=!(!fe||"object"!=typeof fe)&&fe.once,vt=Zone.current;let dt=le[A];dt||(rt(A,q),dt=le[A]);const pt=dt[ht?_e:pe];let it,xe=L[pt],mt=!1;if(xe){if(mt=!0,re)for(let De=0;De<xe.length;De++)if(Z(xe[De],X))return}else xe=L[pt]=[];const yt=L.constructor.name,kt=We[yt];kt&&(it=kt[A]),it||(it=yt+T+(q?q(A):A)),g.options=fe,gt&&(g.options.once=!1),g.target=L,g.capture=ht,g.eventName=A,g.isExisting=mt;const Ye=ce?Tt:void 0;Ye&&(Ye.taskData=g),Xe&&(g.options.signal=void 0);const ke=vt.scheduleEventTask(it,X,Ye,R,O);return Xe&&(g.options.signal=Xe,c.call(Xe,"abort",()=>{ke.zone.cancelTask(ke)},{once:!0})),g.target=null,Ye&&(Ye.taskData=null),gt&&(fe.once=!0),!Se&&"boolean"==typeof ke.options||(ke.options=fe),ke.target=L,ke.capture=ht,ke.eventName=A,Y&&(ke.originalDelegate=X),M?xe.unshift(ke):xe.push(ke),P?L:void 0}};return k[l]=d($,S,t,o,V),oe&&(k[b]=d(oe,H,function(c){return oe.call(g.target,g.eventName,c.invoke,g.options)},o,V,!0)),k[f]=function(){const c=this||e;let T=arguments[0];y&&y.transferEventName&&(T=y.transferEventName(T));const R=arguments[2],O=!!R&&("boolean"==typeof R||R.capture),P=arguments[1];if(!P)return C.apply(this,arguments);if(G&&!G(C,P,c,arguments))return;const M=le[T];let L;M&&(L=M[O?_e:pe]);const A=L&&c[L];if(A)for(let X=0;X<A.length;X++){const Y=A[X];if(Z(Y,P))return A.splice(X,1),Y.isRemoved=!0,0===A.length&&(Y.allRemoved=!0,c[L]=null,"string"==typeof T)&&(c[Ce+"ON_PROPERTY"+T]=null),Y.zone.cancelTask(Y),V?c:void 0}return C.apply(this,arguments)},k[E]=function(){const c=this||e;let T=arguments[0];y&&y.transferEventName&&(T=y.transferEventName(T));const R=[],O=ot(c,q?q(T):T);for(let P=0;P<O.length;P++){const M=O[P];R.push(M.originalDelegate?M.originalDelegate:M.callback)}return R},k[p]=function(){const c=this||e;let T=arguments[0];if(T){y&&y.transferEventName&&(T=y.transferEventName(T));const R=le[T];if(R){const M=c[R[pe]],L=c[R[_e]];if(M){const A=M.slice();for(let X=0;X<A.length;X++){const Y=A[X];this[f].call(this,T,Y.originalDelegate?Y.originalDelegate:Y.callback,Y.options)}}if(L){const A=L.slice();for(let X=0;X<A.length;X++){const Y=A[X];this[f].call(this,T,Y.originalDelegate?Y.originalDelegate:Y.callback,Y.options)}}}}else{const R=Object.keys(c);for(let O=0;O<R.length;O++){const M=ut.exec(R[O]);let L=M&&M[1];L&&"removeListener"!==L&&this[p].call(this,L)}this[p].call(this,"removeListener")}if(V)return this},Ee(k[l],$),Ee(k[f],C),ye&&Ee(k[p],ye),ue&&Ee(k[E],ue),!0}let ne=[];for(let D=0;D<a.length;D++)ne[D]=ae(a[D],i);return ne}function ot(e,n){if(!n){const f=[];for(let E in e){const p=ut.exec(E);let N=p&&p[1];if(N&&(!n||N===n)){const S=e[E];if(S)for(let b=0;b<S.length;b++)f.push(S[b])}}return f}let a=le[n];a||(rt(n),a=le[n]);const i=e[a[pe]],l=e[a[_e]];return i?l?i.concat(l):i.slice():l?l.slice():[]}function st(e,n){const a=e.Event;a&&a.prototype&&n.patchMethod(a.prototype,"stopImmediatePropagation",i=>function(l,f){l[ft]=!0,i&&i.apply(l,f)})}function Et(e,n,a,i,l){const f=Zone.__symbol__(i);if(n[f])return;const E=n[f]=n[i];n[i]=function(p,N,S){return N&&N.prototype&&l.forEach(function(b){const H=`${a}.${i}::`+b,j=N.prototype;try{if(j.hasOwnProperty(b)){const x=e.ObjectGetOwnPropertyDescriptor(j,b);x&&x.value?(x.value=e.wrapWithCurrentZone(x.value,H),e._redefineProperty(N.prototype,b,x)):j[b]&&(j[b]=e.wrapWithCurrentZone(j[b],H))}else j[b]&&(j[b]=e.wrapWithCurrentZone(j[b],H))}catch{}}),E.call(n,p,N,S)},e.attachOriginToPatched(n[i],E)}function r(e,n,a){if(!a||0===a.length)return n;const i=a.filter(f=>f.target===e);if(!i||0===i.length)return n;const l=i[0].ignoreProperties;return n.filter(f=>-1===l.indexOf(f))}function s(e,n,a,i){e&&tt(e,r(e,n,a),i)}function u(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,a)=>{const i=u(e);a.patchOnProperties=tt,a.patchMethod=Te,a.bindArguments=je,a.patchMacroTask=nt;const l=n.__symbol__("BLACK_LISTED_EVENTS"),f=n.__symbol__("UNPATCHED_EVENTS");e[f]&&(e[l]=e[f]),e[l]&&(n[l]=n[f]=e[l]),a.patchEventPrototype=st,a.patchEventTarget=qe,a.isIEOrEdge=lt,a.ObjectDefineProperty=Ze,a.ObjectGetOwnPropertyDescriptor=ve,a.ObjectCreate=Ne,a.ArraySlice=ct,a.patchClass=Oe,a.wrapWithCurrentZone=He,a.filterProperties=r,a.attachOriginToPatched=Ee,a._redefineProperty=Object.defineProperty,a.patchCallbacks=Et,a.getGlobalObjects=()=>({globalSources:We,zoneSymbolEventNames:le,eventNames:i,isBrowser:me,isMix:Qe,isNode:Pe,TRUE_STR:_e,FALSE_STR:pe,ZONE_SYMBOL_PREFIX:Ce,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:$e})});const w=U("zoneTask");function te(e,n,a,i){let l=null,f=null;a+=i;const E={};function p(S){const b=S.data;return b.args[0]=function(){return S.invoke.apply(this,arguments)},b.handleId=l.apply(e,b.args),S}function N(S){return f.call(e,S.data.handleId)}l=Te(e,n+=i,S=>function(b,H){if("function"==typeof H[0]){const j={isPeriodic:"Interval"===i,delay:"Timeout"===i||"Interval"===i?H[1]||0:void 0,args:H},x=H[0];H[0]=function(){try{return x.apply(this,arguments)}finally{j.isPeriodic||("number"==typeof j.handleId?delete E[j.handleId]:j.handleId&&(j.handleId[w]=null))}};const J=Be(n,H[0],j,p,N);if(!J)return J;const z=J.data.handleId;return"number"==typeof z?E[z]=J:z&&(z[w]=J),z&&z.ref&&z.unref&&"function"==typeof z.ref&&"function"==typeof z.unref&&(J.ref=z.ref.bind(z),J.unref=z.unref.bind(z)),"number"==typeof z||z?z:J}return S.apply(e,H)}),f=Te(e,a,S=>function(b,H){const j=H[0];let x;"number"==typeof j?x=E[j]:(x=j&&j[w],x||(x=j)),x&&"string"==typeof x.type?"notScheduled"!==x.state&&(x.cancelFn&&x.data.isPeriodic||0===x.runCount)&&("number"==typeof j?delete E[j]:j&&(j[w]=null),x.zone.cancelTask(x)):S.apply(e,H)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("timers",e=>{const n="set",a="clear";te(e,n,a,"Timeout"),te(e,n,a,"Interval"),te(e,n,a,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{te(e,"request","cancel","AnimationFrame"),te(e,"mozRequest","mozCancel","AnimationFrame"),te(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const a=["alert","prompt","confirm"];for(let i=0;i<a.length;i++)Te(e,a[i],(f,E,p)=>function(N,S){return n.current.run(f,e,S,p)})}),Zone.__load_patch("EventTarget",(e,n,a)=>{(function ie(e,n){n.patchEventPrototype(e,n)})(e,a),function F(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:a,zoneSymbolEventNames:i,TRUE_STR:l,FALSE_STR:f,ZONE_SYMBOL_PREFIX:E}=n.getGlobalObjects();for(let N=0;N<a.length;N++){const S=a[N],j=E+(S+f),x=E+(S+l);i[S]={},i[S][f]=j,i[S][l]=x}const p=e.EventTarget;p&&p.prototype&&n.patchEventTarget(e,n,[p&&p.prototype])}(e,a);const i=e.XMLHttpRequestEventTarget;i&&i.prototype&&a.patchEventTarget(e,a,[i.prototype])}),Zone.__load_patch("MutationObserver",(e,n,a)=>{Oe("MutationObserver"),Oe("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,a)=>{Oe("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,a)=>{Oe("FileReader")}),Zone.__load_patch("on_property",(e,n,a)=>{!function h(e,n){if(Pe&&!Qe||Zone[e.symbol("patchEvents")])return;const a=n.__Zone_ignore_on_properties;let i=[];if(me){const l=window;i=i.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const f=function _t(){try{const e=we.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:l,ignoreProperties:["error"]}]:[];s(l,u(l),a&&a.concat(f),Me(l))}i=i.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let l=0;l<i.length;l++){const f=n[i[l]];f&&f.prototype&&s(f.prototype,u(f.prototype),a)}}(a,e)}),Zone.__load_patch("customElements",(e,n,a)=>{!function W(e,n){const{isBrowser:a,isMix:i}=n.getGlobalObjects();(a||i)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(e,a)}),Zone.__load_patch("XHR",(e,n)=>{!function N(S){const b=S.XMLHttpRequest;if(!b)return;const H=b.prototype;let x=H[be],J=H[Ke];if(!x){const g=S.XMLHttpRequestEventTarget;if(g){const $=g.prototype;x=$[be],J=$[Ke]}}const z="readystatechange",ae="scheduled";function ne(g){const $=g.data,C=$.target;C[f]=!1,C[p]=!1;const ue=C[l];x||(x=C[be],J=C[Ke]),ue&&J.call(C,z,ue);const ye=C[l]=()=>{if(C.readyState===C.DONE)if(!$.aborted&&C[f]&&g.state===ae){const Q=C[n.__symbol__("loadfalse")];if(0!==C.status&&Q&&Q.length>0){const ge=g.invoke;g.invoke=function(){const he=C[n.__symbol__("loadfalse")];for(let ee=0;ee<he.length;ee++)he[ee]===g&&he.splice(ee,1);!$.aborted&&g.state===ae&&ge.call(g)},Q.push(g)}else g.invoke()}else!$.aborted&&!1===C[f]&&(C[p]=!0)};return x.call(C,z,ye),C[a]||(C[a]=g),k.apply(C,$.args),C[f]=!0,g}function D(){}function y(g){const $=g.data;return $.aborted=!0,q.apply($.target,$.args)}const ce=Te(H,"open",()=>function(g,$){return g[i]=0==$[2],g[E]=$[1],ce.apply(g,$)}),re=U("fetchTaskAborting"),V=U("fetchTaskScheduling"),k=Te(H,"send",()=>function(g,$){if(!0===n.current[V]||g[i])return k.apply(g,$);{const C={target:g,url:g[E],isPeriodic:!1,args:$,aborted:!1},ue=Be("XMLHttpRequest.send",D,C,ne,y);g&&!0===g[p]&&!C.aborted&&ue.state===ae&&ue.invoke()}}),q=Te(H,"abort",()=>function(g,$){const C=function j(g){return g[a]}(g);if(C&&"string"==typeof C.type){if(null==C.cancelFn||C.data&&C.data.aborted)return;C.zone.cancelTask(C)}else if(!0===n.current[re])return q.apply(g,$)})}(e);const a=U("xhrTask"),i=U("xhrSync"),l=U("xhrListener"),f=U("xhrScheduled"),E=U("xhrURL"),p=U("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function Je(e,n){const a=e.constructor.name;for(let i=0;i<n.length;i++){const l=n[i],f=e[l];if(f){if(!Ue(ve(e,l)))continue;e[l]=(p=>{const N=function(){return p.apply(this,je(arguments,a+"."+l))};return Ee(N,p),N})(f)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function a(i){return function(l){ot(e,i).forEach(E=>{const p=e.PromiseRejectionEvent;if(p){const N=new p(i,{promise:l.promise,reason:l.rejection});E.invoke(N)}})}}e.PromiseRejectionEvent&&(n[U("unhandledPromiseRejectionHandler")]=a("unhandledrejection"),n[U("rejectionHandledHandler")]=a("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,n,a)=>{!function m(e,n){n.patchMethod(e,"queueMicrotask",a=>function(i,l){Zone.current.scheduleMicroTask("queueMicrotask",l[0])})}(e,a)})}},ve=>{ve(ve.s=2523)}]);