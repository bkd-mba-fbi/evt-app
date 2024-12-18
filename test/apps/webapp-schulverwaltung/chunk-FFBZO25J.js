import{b as _,c as O,d as M,e as Y,f as I,h as Yr,i as Ir,j as Er,k as Hr,l as hr,m as qr,n as Lr,o as yr,p as vr}from"./chunk-EDO6DY2V.js";import{f as Mr,g as _r,h as Or,i as d,j as w}from"./chunk-PQGQXFEQ.js";import{i as Nr}from"./chunk-JHVNIEZK.js";import{X as Tr,ha as kr}from"./chunk-34ZOBT6Z.js";function Qr(){return Object.assign({},O())}function Rr(o,r){let t=w(o,r?.in).getDay();return t===0?7:t}function Fr(o,r){let t=Vr(r)?new r(0):d(r,0);return t.setFullYear(o.getFullYear(),o.getMonth(),o.getDate()),t.setHours(o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds()),t}function Vr(o){return typeof o=="function"&&o.prototype?.constructor===o}var Zr=10,E=class{subPriority=0;validate(r,t){return!0}},H=class extends E{constructor(r,t,e,s,i){super(),this.value=r,this.validateValue=t,this.setValue=e,this.priority=s,i&&(this.subPriority=i)}validate(r,t){return this.validateValue(r,this.value,t)}set(r,t,e){return this.setValue(r,t,this.value,e)}},q=class extends E{priority=Zr;subPriority=-1;constructor(r,t){super(),this.context=r||(e=>d(t,e))}set(r,t){return t.timestampIsSet?r:d(r,Fr(r,this.context))}};var n=class{run(r,t,e,s){let i=this.parse(r,t,e,s);return i?{setter:new H(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(r,t,e){return!0}};var L=class extends n{priority=140;parse(r,t,e){switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"})||e.era(r,{width:"narrow"});case"GGGGG":return e.era(r,{width:"narrow"});case"GGGG":default:return e.era(r,{width:"wide"})||e.era(r,{width:"abbreviated"})||e.era(r,{width:"narrow"})}}set(r,t,e){return t.era=e,r.setFullYear(e,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=["R","u","t","T"]};var c={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},x={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function p(o,r){return o&&{value:r(o.value),rest:o.rest}}function u(o,r){let t=r.match(o);return t?{value:parseInt(t[0],10),rest:r.slice(t[0].length)}:null}function h(o,r){let t=r.match(o);if(!t)return null;if(t[0]==="Z")return{value:0,rest:r.slice(1)};let e=t[1]==="+"?1:-1,s=t[2]?parseInt(t[2],10):0,i=t[3]?parseInt(t[3],10):0,l=t[5]?parseInt(t[5],10):0;return{value:e*(s*_r+i*Mr+l*Or),rest:r.slice(t[0].length)}}function v(o){return u(c.anyDigitsSigned,o)}function a(o,r){switch(o){case 1:return u(c.singleDigit,r);case 2:return u(c.twoDigits,r);case 3:return u(c.threeDigits,r);case 4:return u(c.fourDigits,r);default:return u(new RegExp("^\\d{1,"+o+"}"),r)}}function P(o,r){switch(o){case 1:return u(c.singleDigitSigned,r);case 2:return u(c.twoDigitsSigned,r);case 3:return u(c.threeDigitsSigned,r);case 4:return u(c.fourDigitsSigned,r);default:return u(new RegExp("^-?\\d{1,"+o+"}"),r)}}function T(o){switch(o){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Q(o,r){let t=r>0,e=t?r:1-r,s;if(e<=50)s=o||100;else{let i=e+50,l=Math.trunc(i/100)*100,y=o>=i%100;s=o+l-(y?100:0)}return t?s:1-s}function R(o){return o%400===0||o%4===0&&o%100!==0}var F=class extends n{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(r,t,e){let s=i=>({year:i,isTwoDigitYear:t==="yy"});switch(t){case"y":return p(a(4,r),s);case"yo":return p(e.ordinalNumber(r,{unit:"year"}),s);default:return p(a(t.length,r),s)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,e){let s=r.getFullYear();if(e.isTwoDigitYear){let l=Q(e.year,s);return r.setFullYear(l,0,1),r.setHours(0,0,0,0),r}let i=!("era"in t)||t.era===1?e.year:1-e.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}};var W=class extends n{priority=130;parse(r,t,e){let s=i=>({year:i,isTwoDigitYear:t==="YY"});switch(t){case"Y":return p(a(4,r),s);case"Yo":return p(e.ordinalNumber(r,{unit:"year"}),s);default:return p(a(t.length,r),s)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,e,s){let i=Er(r,s);if(e.isTwoDigitYear){let y=Q(e.year,i);return r.setFullYear(y,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),M(r,s)}let l=!("era"in t)||t.era===1?e.year:1-e.year;return r.setFullYear(l,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),M(r,s)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]};var C=class extends n{priority=130;parse(r,t){return t==="R"?P(4,r):P(t.length,r)}set(r,t,e){let s=d(r,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),Y(s)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]};var B=class extends n{priority=130;parse(r,t){return t==="u"?P(4,r):P(t.length,r)}set(r,t,e){return r.setFullYear(e,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]};var G=class extends n{priority=120;parse(r,t,e){switch(t){case"Q":case"QQ":return a(t.length,r);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"})||e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(r,{width:"wide",context:"formatting"})||e.quarter(r,{width:"abbreviated",context:"formatting"})||e.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=1&&t<=4}set(r,t,e){return r.setMonth((e-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]};var X=class extends n{priority=120;parse(r,t,e){switch(t){case"q":case"qq":return a(t.length,r);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"})||e.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(r,{width:"wide",context:"standalone"})||e.quarter(r,{width:"abbreviated",context:"standalone"})||e.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=1&&t<=4}set(r,t,e){return r.setMonth((e-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]};var z=class extends n{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(r,t,e){let s=i=>i-1;switch(t){case"M":return p(u(c.month,r),s);case"MM":return p(a(2,r),s);case"Mo":return p(e.ordinalNumber(r,{unit:"month"}),s);case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"})||e.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(r,{width:"wide",context:"formatting"})||e.month(r,{width:"abbreviated",context:"formatting"})||e.month(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=11}set(r,t,e){return r.setMonth(e,1),r.setHours(0,0,0,0),r}};var A=class extends n{priority=110;parse(r,t,e){let s=i=>i-1;switch(t){case"L":return p(u(c.month,r),s);case"LL":return p(a(2,r),s);case"Lo":return p(e.ordinalNumber(r,{unit:"month"}),s);case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"})||e.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(r,{width:"wide",context:"standalone"})||e.month(r,{width:"abbreviated",context:"standalone"})||e.month(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=0&&t<=11}set(r,t,e){return r.setMonth(e,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]};function Wr(o,r,t){let e=w(o,t?.in),s=Hr(e,t)-r;return e.setDate(e.getDate()-s*7),w(e,t?.in)}var V=class extends n{priority=100;parse(r,t,e){switch(t){case"w":return u(c.week,r);case"wo":return e.ordinalNumber(r,{unit:"week"});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,e,s){return M(Wr(r,e,s),s)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]};function Cr(o,r,t){let e=w(o,t?.in),s=Ir(e,t)-r;return e.setDate(e.getDate()-s*7),e}var Z=class extends n{priority=100;parse(r,t,e){switch(t){case"I":return u(c.week,r);case"Io":return e.ordinalNumber(r,{unit:"week"});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,e){return Y(Cr(r,e))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]};var Kr=[31,28,31,30,31,30,31,31,30,31,30,31],$r=[31,29,31,30,31,30,31,31,30,31,30,31],K=class extends n{priority=90;subPriority=1;parse(r,t,e){switch(t){case"d":return u(c.date,r);case"do":return e.ordinalNumber(r,{unit:"date"});default:return a(t.length,r)}}validate(r,t){let e=r.getFullYear(),s=R(e),i=r.getMonth();return s?t>=1&&t<=$r[i]:t>=1&&t<=Kr[i]}set(r,t,e){return r.setDate(e),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]};var $=class extends n{priority=90;subpriority=1;parse(r,t,e){switch(t){case"D":case"DD":return u(c.dayOfYear,r);case"Do":return e.ordinalNumber(r,{unit:"date"});default:return a(t.length,r)}}validate(r,t){let e=r.getFullYear();return R(e)?t>=1&&t<=366:t>=1&&t<=365}set(r,t,e){return r.setMonth(0,e),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]};function k(o,r,t){let e=O(),s=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??e.weekStartsOn??e.locale?.options?.weekStartsOn??0,i=w(o,t?.in),l=i.getDay(),dr=(r%7+7)%7,D=7-s,N=r<0||r>6?r-(l+D)%7:(dr+D)%7-(l+D)%7;return _(i,N,t)}var j=class extends n{priority=90;parse(r,t,e){switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return e.day(r,{width:"wide",context:"formatting"})||e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=6}set(r,t,e,s){return r=k(r,e,s),r.setHours(0,0,0,0),r}incompatibleTokens=["D","i","e","c","t","T"]};var U=class extends n{priority=90;parse(r,t,e,s){let i=l=>{let y=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+y};switch(t){case"e":case"ee":return p(a(t.length,r),i);case"eo":return p(e.ordinalNumber(r,{unit:"day"}),i);case"eee":return e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"eeeee":return e.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return e.day(r,{width:"wide",context:"formatting"})||e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=6}set(r,t,e,s){return r=k(r,e,s),r.setHours(0,0,0,0),r}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]};var J=class extends n{priority=90;parse(r,t,e,s){let i=l=>{let y=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+y};switch(t){case"c":case"cc":return p(a(t.length,r),i);case"co":return p(e.ordinalNumber(r,{unit:"day"}),i);case"ccc":return e.day(r,{width:"abbreviated",context:"standalone"})||e.day(r,{width:"short",context:"standalone"})||e.day(r,{width:"narrow",context:"standalone"});case"ccccc":return e.day(r,{width:"narrow",context:"standalone"});case"cccccc":return e.day(r,{width:"short",context:"standalone"})||e.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return e.day(r,{width:"wide",context:"standalone"})||e.day(r,{width:"abbreviated",context:"standalone"})||e.day(r,{width:"short",context:"standalone"})||e.day(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=0&&t<=6}set(r,t,e,s){return r=k(r,e,s),r.setHours(0,0,0,0),r}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]};function Br(o,r,t){let e=w(o,t?.in),s=Rr(e,t),i=r-s;return _(e,i,t)}var S=class extends n{priority=90;parse(r,t,e){let s=i=>i===0?7:i;switch(t){case"i":case"ii":return a(t.length,r);case"io":return e.ordinalNumber(r,{unit:"day"});case"iii":return p(e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"}),s);case"iiiii":return p(e.day(r,{width:"narrow",context:"formatting"}),s);case"iiiiii":return p(e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"}),s);case"iiii":default:return p(e.day(r,{width:"wide",context:"formatting"})||e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"}),s)}}validate(r,t){return t>=1&&t<=7}set(r,t,e){return r=Br(r,e),r.setHours(0,0,0,0),r}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]};var rr=class extends n{priority=80;parse(r,t,e){switch(t){case"a":case"aa":case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})||e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,e){return r.setHours(T(e),0,0,0),r}incompatibleTokens=["b","B","H","k","t","T"]};var er=class extends n{priority=80;parse(r,t,e){switch(t){case"b":case"bb":case"bbb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})||e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,e){return r.setHours(T(e),0,0,0),r}incompatibleTokens=["a","B","H","k","t","T"]};var tr=class extends n{priority=80;parse(r,t,e){switch(t){case"B":case"BB":case"BBB":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})||e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,e){return r.setHours(T(e),0,0,0),r}incompatibleTokens=["a","b","t","T"]};var or=class extends n{priority=70;parse(r,t,e){switch(t){case"h":return u(c.hour12h,r);case"ho":return e.ordinalNumber(r,{unit:"hour"});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=12}set(r,t,e){let s=r.getHours()>=12;return s&&e<12?r.setHours(e+12,0,0,0):!s&&e===12?r.setHours(0,0,0,0):r.setHours(e,0,0,0),r}incompatibleTokens=["H","K","k","t","T"]};var sr=class extends n{priority=70;parse(r,t,e){switch(t){case"H":return u(c.hour23h,r);case"Ho":return e.ordinalNumber(r,{unit:"hour"});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=23}set(r,t,e){return r.setHours(e,0,0,0),r}incompatibleTokens=["a","b","h","K","k","t","T"]};var nr=class extends n{priority=70;parse(r,t,e){switch(t){case"K":return u(c.hour11h,r);case"Ko":return e.ordinalNumber(r,{unit:"hour"});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=11}set(r,t,e){return r.getHours()>=12&&e<12?r.setHours(e+12,0,0,0):r.setHours(e,0,0,0),r}incompatibleTokens=["h","H","k","t","T"]};var ir=class extends n{priority=70;parse(r,t,e){switch(t){case"k":return u(c.hour24h,r);case"ko":return e.ordinalNumber(r,{unit:"hour"});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=24}set(r,t,e){let s=e<=24?e%24:e;return r.setHours(s,0,0,0),r}incompatibleTokens=["a","b","h","H","K","t","T"]};var ar=class extends n{priority=60;parse(r,t,e){switch(t){case"m":return u(c.minute,r);case"mo":return e.ordinalNumber(r,{unit:"minute"});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,e){return r.setMinutes(e,0,0),r}incompatibleTokens=["t","T"]};var ur=class extends n{priority=50;parse(r,t,e){switch(t){case"s":return u(c.second,r);case"so":return e.ordinalNumber(r,{unit:"second"});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,e){return r.setSeconds(e,0),r}incompatibleTokens=["t","T"]};var cr=class extends n{priority=30;parse(r,t){let e=s=>Math.trunc(s*Math.pow(10,-t.length+3));return p(a(t.length,r),e)}set(r,t,e){return r.setMilliseconds(e),r}incompatibleTokens=["t","T"]};var mr=class extends n{priority=10;parse(r,t){switch(t){case"X":return h(x.basicOptionalMinutes,r);case"XX":return h(x.basic,r);case"XXXX":return h(x.basicOptionalSeconds,r);case"XXXXX":return h(x.extendedOptionalSeconds,r);case"XXX":default:return h(x.extended,r)}}set(r,t,e){return t.timestampIsSet?r:d(r,r.getTime()-I(r)-e)}incompatibleTokens=["t","T","x"]};var pr=class extends n{priority=10;parse(r,t){switch(t){case"x":return h(x.basicOptionalMinutes,r);case"xx":return h(x.basic,r);case"xxxx":return h(x.basicOptionalSeconds,r);case"xxxxx":return h(x.extendedOptionalSeconds,r);case"xxx":default:return h(x.extended,r)}}set(r,t,e){return t.timestampIsSet?r:d(r,r.getTime()-I(r)-e)}incompatibleTokens=["t","T","X"]};var fr=class extends n{priority=40;parse(r){return v(r)}set(r,t,e){return[d(r,e*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"};var lr=class extends n{priority=20;parse(r){return v(r)}set(r,t,e){return[d(r,e),{timestampIsSet:!0}]}incompatibleTokens="*"};var Gr={G:new L,y:new F,Y:new W,R:new C,u:new B,Q:new G,q:new X,M:new z,L:new A,w:new V,I:new Z,d:new K,D:new $,E:new j,e:new U,c:new J,i:new S,a:new rr,b:new er,B:new tr,h:new or,H:new sr,K:new nr,k:new ir,m:new ar,s:new ur,S:new cr,X:new mr,x:new pr,t:new fr,T:new lr};var jr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ur=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Jr=/^'([^]*?)'?$/,Sr=/''/g,re=/\S/,ee=/[a-zA-Z]/;function Xr(o,r,t,e){let s=()=>d(e?.in||t,NaN),i=Qr(),l=e?.locale??i.locale??Yr,y=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,dr=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0;if(!r)return o?s():w(t,e?.in);let D={firstWeekContainsDate:y,weekStartsOn:dr,locale:l},N=[new q(e?.in,t)],zr=r.match(Ur).map(m=>{let f=m[0];if(f in hr){let b=hr[f];return b(m,l.formatLong)}return m}).join("").match(jr),wr=[];for(let m of zr){!e?.useAdditionalWeekYearTokens&&Lr(m)&&yr(m,r,o),!e?.useAdditionalDayOfYearTokens&&qr(m)&&yr(m,r,o);let f=m[0],b=Gr[f];if(b){let{incompatibleTokens:Dr}=b;if(Array.isArray(Dr)){let gr=wr.find(Pr=>Dr.includes(Pr.token)||Pr.token===f);if(gr)throw new RangeError(`The format string mustn't contain \`${gr.fullToken}\` and \`${m}\` at the same time`)}else if(b.incompatibleTokens==="*"&&wr.length>0)throw new RangeError(`The format string mustn't contain \`${m}\` and any other token at the same time`);wr.push({token:f,fullToken:m});let xr=b.run(o,m,l.match,D);if(!xr)return s();N.push(xr.setter),o=xr.rest}else{if(f.match(ee))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");if(m==="''"?m="'":f==="'"&&(m=te(m)),o.indexOf(m)===0)o=o.slice(m.length);else return s()}}if(o.length>0&&re.test(o))return s();let Ar=N.map(m=>m.priority).sort((m,f)=>f-m).filter((m,f,b)=>b.indexOf(m)===f).map(m=>N.filter(f=>f.priority===m).sort((f,b)=>b.subPriority-f.subPriority)).map(m=>m[0]),g=w(t,e?.in);if(isNaN(+g))return s();let br={};for(let m of Ar){if(!m.validate(g,D))return s();let f=m.set(g,br,D);Array.isArray(f)?(g=f[0],Object.assign(br,f[1])):g=f}return g}function te(o){return o.match(Jr)[1].replace(Sr,"'")}var Fs=(()=>{class o extends Nr{parse(t){let e=t?Xr(t,"dd.MM.yyyy",new Date):null;return e?{year:e.getFullYear(),month:e.getMonth(),day:e.getDay()}:null}format(t){return t?vr(new Date(t.year,t.month-1,t.day),"dd.MM.yyyy"):""}static{this.\u0275fac=(()=>{let t;return function(s){return(t||(t=kr(o)))(s||o)}})()}static{this.\u0275prov=Tr({token:o,factory:o.\u0275fac})}}return o})();export{Fs as a};
