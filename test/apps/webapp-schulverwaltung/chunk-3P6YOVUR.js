import{F as s,M as p,P as f,Q as d,R as n,X as g,_ as h,f as c,fc as S,l,n as a,p as u,tc as v,uc as m,vc as P,x as e,yc as $}from"./chunk-2W7IS4PN.js";var I=(()=>{class o{constructor(t,i){this.router=t,this.viewportScroller=i,this.scrollPositions={},this.previousRoute=null,this.currentRoute=this.getInitialActivatedRouteSnapshot(),this.currentScrollPosition=[0,0],this.destroy$=new c,this.activationEnd$=this.router.events.pipe(e(R)),this.navigationEnd$=this.router.events.pipe(e(C)),this.navigationStart$=this.router.events.pipe(e(y)),this.scrollPosition$=this.navigationStart$.pipe(a(this.getScrollPosition.bind(this))),this.route$=this.activationEnd$.pipe(s(1)).pipe(u(r=>[l(r),this.navigationEnd$.pipe(f(()=>this.activationEnd$.pipe(s(1))))]),d(),a(r=>r.snapshot),p(1)),this.scrollPosition$.pipe(n(this.destroy$)).subscribe(r=>this.currentScrollPosition=r),this.route$.pipe(n(this.destroy$)).subscribe(r=>{this.previousRoute=this.currentRoute,this.currentRoute=r})}ngOnDestroy(){this.destroy$.next()}restore(){if(!this.currentRoute||!this.requiresStoring(this.currentRoute))return;if(this.previousRoute&&this.shouldStoreFor(this.currentRoute,this.previousRoute)){let i=this.getPath(this.currentRoute);this.scrollToPosition(this.scrollPositions[i]||[0,0])}let t=this.currentRoute;this.route$.pipe(s(1),n(this.destroy$),e(i=>this.shouldStoreFor(t,i))).subscribe(()=>{let i=this.getPath(t);this.scrollPositions[i]=this.currentScrollPosition})}getScrollPosition(){return this.viewportScroller.getScrollPosition()}scrollToPosition(t){this.viewportScroller.scrollToPosition(t)}getPath(t){return t?"/"+t.pathFromRoot.map(i=>i.routeConfig&&i.routeConfig.path).filter(i=>i).join("/"):"/"}requiresStoring(t){return!!(t&&t.routeConfig&&t.routeConfig.data&&Array.isArray(t.routeConfig.data.restoreScrollPositionFrom)&&t.routeConfig.data.restoreScrollPositionFrom.length>0)}shouldStoreFor(t,i){return(t&&t.routeConfig&&t.routeConfig.data&&Array.isArray(t.routeConfig.data.restoreScrollPositionFrom)?t.routeConfig.data.restoreScrollPositionFrom:[]).includes(this.getPath(i))}getInitialActivatedRouteSnapshot(){let t=this.router.routerState.snapshot.root;for(;t.firstChild;)t=t.firstChild;return t}static{this.\u0275fac=function(i){return new(i||o)(h($),h(S))}}static{this.\u0275prov=g({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function R(o){return o instanceof P}function y(o){return o instanceof v}function C(o){return o instanceof m}export{I as a};
