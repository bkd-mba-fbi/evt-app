import{n as e}from"./chunk-QHPTZGVN.js";import{b as l}from"./chunk-X2BR3YJG.js";import{Ed as a,O as s,W as n,Wc as p,Z as o,ec as m}from"./chunk-T7QWSMKM.js";var R=(()=>{let t=class t extends l{constructor(c,i){super(c,i,e,"StudyClasses","Number")}getActive(){return this.http.get(`${this.baseUrl}/?filter.IsActive==true`,{headers:{"X-Role-Restriction":"ClassTeacherRole"}}).pipe(s(a(e)))}getActiveFormativeAssessments(){return this.http.get(`${this.baseUrl}/FormativeAssessments?filter.IsActive==true`,{headers:{"X-Role-Restriction":"ClassTeacherRole"}}).pipe(s(a(e)))}};t.\u0275fac=function(i){return new(i||t)(o(m),o(p))},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{R as a};
