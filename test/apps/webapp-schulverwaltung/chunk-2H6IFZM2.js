import{v as b}from"./chunk-AP373D4K.js";import{a as g}from"./chunk-B6WYZ7BT.js";import{$ as i,B as f,Id as E,dc as p,fc as d,k as t,m as u,tc as m}from"./chunk-IFJN5CDK.js";var S=new p(()=>({disableErrorHandling:!1,disableErrorHandlingForStatus:[]}));function R(){return(e,o)=>{let s=e.context.get(S);return o(e).pipe(f(h(s)))}}function h(e){let o=i(m),s=i(g),a=i(E);return r=>{if(r instanceof d&&!e.disableErrorHandling&&(!e.disableErrorHandlingForStatus||!e.disableErrorHandlingForStatus.includes(r.status)))switch(r.status){case 401:return n("noaccess"),o.navigate(["/unauthenticated"]),t;case 403:return n("noaccess"),o.navigate(["/dashboard"]),t;case 404:return n("notfound"),t;case 0:case 503:case 504:return n("unavailable"),t;case 409:return v(r),t;default:return n("server"),t}return u(()=>r)};function n(r){s.error(a.instant(`global.rest-errors.${r}-message`),a.instant(`global.rest-errors.${r}-title`))}function v(r){let c=a.instant("global.rest-errors.conflict-message"),l=H(r);s.error(l.length>0?l.join(`
`):c,a.instant("global.rest-errors.conflict-title"))}function H(r){return Array.isArray(r.error?.Issues)?r.error.Issues.map(c=>c?.Message).filter(b):[]}}export{S as a,R as b};
