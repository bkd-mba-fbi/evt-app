import{o as A}from"./chunk-A7CCEKNQ.js";import{a as B}from"./chunk-HLAFRD2O.js";import{a as V}from"./chunk-HVJBOTRL.js";import{Ia as k,Ic as D,Jc as R,Nd as b,Oc as S,P as m,Pd as x,S as w,T as P,X as M,_ as d,a as p,b as h,bd as Y,da as j,dd as $,k as W,l as g,ma as T,mc as z,n as u,na as U,p as O,ra as F,t as K,x as N,za as y}from"./chunk-S3H6YSFW.js";function _(t,e,o,i){let n=window&&!!window.document&&window.document.documentElement,r=n&&e?window:o;if(t&&(r=t&&n&&typeof t=="string"?tt(t,o.nativeElement,i):t,!r))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function tt(t,e,o){return(o?window.document:e).querySelector(t)}function E(t){return t&&!t.firstChange}function et(){return typeof window<"u"}var ot={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},it={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"},v=class{constructor(e=!0){this.vertical=e,this.propsMap=e?ot:it}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}};function nt(t,e,o){return!!(t&&e||!o&&e)}function rt({windowElement:t,axis:e}){return lt({axis:e,isWindow:st(t)},t)}function lt(t,e){let o=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return h(p({},t),{container:o})}function st(t){return["Window","global"].some(o=>Object.prototype.toString.call(t).includes(o))}function I(t,e){return t?e.document.documentElement:null}function G(t,e){let o=ft(e);return e.isWindow?ct(o,t,e):at(o,t,e)}function ct(t,e,o){let{axis:i,container:n,isWindow:r}=o,{offsetHeightKey:l,clientHeightKey:c}=X(i),a=t+q(I(r,n),i,r),s=L(e.nativeElement,r,l,c),f=ut(e.nativeElement,i,r)+s;return{height:t,scrolled:a,totalToScroll:f,isWindow:r}}function at(t,e,o){let{axis:i,container:n}=o,r=n[i.scrollTopKey()],l=n[i.scrollHeightKey()];return{height:t,scrolled:r,totalToScroll:l,isWindow:!1}}function X(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function ft({container:t,isWindow:e,axis:o}){let{offsetHeightKey:i,clientHeightKey:n}=X(o);return L(t,e,i,n)}function L(t,e,o,i){if(isNaN(t[o])){let n=I(e,t);return n?n[i]:0}else return t[o]}function ut(t,e,o){let i=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[i]+q(t,e,o)}function q(t,e,o){let i=e.pageYOffsetKey(),n=e.scrollTopKey(),r=e.offsetTopKey();return isNaN(window.pageYOffset)?I(o,t)[n]:t.ownerDocument?t.ownerDocument.defaultView[i]:t[r]}function dt(t,e={down:0,up:0},o){let i,n;if(t.totalToScroll<=0)return!1;let r=t.isWindow?t.scrolled:t.height+t.scrolled;if(o)i=(t.totalToScroll-r)/t.totalToScroll,n=(e?.down?e.down:0)/10;else{let c=t.scrolled+(t.totalToScroll-r);i=t.scrolled/c,n=(e?.up?e.up:0)/10}return i<=n}function pt(t,e){return t<e.scrolled}function ht(t,e,o){let i=pt(t,e);return{fire:dt(e,o,i),scrollDown:i}}var C=class{constructor(e){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},Object.assign(this,e)}updateScrollPosition(e){return this.lastScrollPosition=e}updateTotalToScroll(e){this.lastTotalToScroll!==e&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=e)}updateScroll(e,o){this.updateScrollPosition(e),this.updateTotalToScroll(o)}updateTriggeredFlag(e,o){o?this.triggered.down=e:this.triggered.up=e}isTriggeredScroll(e,o){return o?this.triggered.down===e:this.triggered.up===e}};function gt(t){let{scrollContainer:e,scrollWindow:o,element:i,fromRoot:n}=t,r=rt({axis:new v(!t.horizontal),windowElement:_(e,o,i,n)}),l=new C({totalToScroll:G(i,r).totalToScroll}),c={container:r.container,throttle:t.throttle},a={up:t.upDistance,down:t.downDistance};return mt(c).pipe(O(()=>g(G(i,r))),u(s=>St(l.lastScrollPosition,s,a)),w(({stats:s})=>l.updateScroll(s.scrolled,s.totalToScroll)),N(({fire:s,scrollDown:f,stats:{totalToScroll:J}})=>nt(t.alwaysCallback,s,l.isTriggeredScroll(J,f))),w(({scrollDown:s,stats:{totalToScroll:f}})=>{l.updateTriggeredFlag(f,s)}),u(wt))}function mt(t){let e=K(t.container,"scroll");return t.throttle&&(e=e.pipe(P(t.throttle,void 0,{leading:!0,trailing:!0}))),e}function St(t,e,o){let{scrollDown:i,fire:n}=ht(t,e,o);return{scrollDown:i,fire:n,stats:e}}var H={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function wt(t){let{scrollDown:e,stats:{scrolled:o}}=t;return{type:e?H.DOWN:H.UP,payload:{currentScrollPosition:o}}}var Nt=(()=>{class t{constructor(o,i){this.element=o,this.zone=i,this.scrolled=new T,this.scrolledUp=new T,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:o,infiniteScrollDisabled:i,infiniteScrollDistance:n}){let r=E(o),l=E(i),c=E(n),a=!l&&!this.infiniteScrollDisabled||l&&!i.currentValue||c;(r||l||c)&&(this.destroyScroller(),a&&this.setup())}ngOnDestroy(){this.destroyScroller()}setup(){et()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=gt({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(o=>this.handleOnScroll(o))})}handleOnScroll({type:o,payload:i}){let n=o===H.DOWN?this.scrolled:this.scrolledUp;Tt(n)&&this.zone.run(()=>n.emit(i))}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)(y(F),y(U))}}static{this.\u0275dir=k({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[j]})}}return t})();function Tt(t){return t.observed??t.observers.length>0}function Ut(t){return Object.keys(t).reduce((e,o)=>{let i=yt(t[o]);return i?h(p({},e),{[o]:i}):e},{})}function yt(t){return t?t instanceof Date?A(t,"yyyy-MM-dd"):String(t):null}var Z=S({Id:R,Designation:D,Number:D});var qt=(()=>{class t extends B{constructor(o,i,n,r){super(o,i,Z,"EducationalEvents"),this.translate=n,this.toastService=r,this.typeaheadCodec=S(Y(this.codec.props,["Id","Designation","Number"]))}getTypeaheadItems(o){return this.http.get(`${this.baseUrl}/CurrentSemester`,{params:{fields:["Id","Designation","Number"].join(","),"filter.Designation":`~*${o}*`}}).pipe(m(b(this.typeaheadCodec)),u(i=>i.map(n=>({Key:n.Id,Value:`${n.Designation} (${n.Number})`}))))}getTypeaheadItemByKey(o){return this.http.get(`${this.baseUrl}/CurrentSemester`,{params:{fields:["Id","Designation","Number"].join(","),"filter.Id":`=${o}`}}).pipe(m(b(this.typeaheadCodec)),m(i=>i.length===0?(this.toastService.error(this.translate.instant("global.rest-errors.notfound-message"),this.translate.instant("global.rest-errors.notfound-title")),W):g({Key:i[0].Id,Value:`${i[0].Designation} (${i[0].Number})`})))}static{this.\u0275fac=function(i){return new(i||t)(d(z),d($),d(x),d(V))}}static{this.\u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{Ut as a,Nt as b,qt as c};
