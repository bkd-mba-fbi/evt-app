if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>s(e,r),a={module:{uri:r},exports:c,require:f};i[r]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(o(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-rGf1XeHc.css",revision:null},{url:"assets/index-zaqj-T1c.js",revision:null},{url:"favicon.ico",revision:"7f7b4463e9eb80575be520d1a65caa84"},{url:"fonts/roboto-v30-latin-ext_latin-100.woff",revision:"985a841110216240a35a8c4fc60584b3"},{url:"fonts/roboto-v30-latin-ext_latin-300.woff",revision:"3cff98e259e1e1b74a84f99f3f1cd96d"},{url:"fonts/roboto-v30-latin-ext_latin-400.woff",revision:"221b2e1078cfb56ce34500ac0066fdcf"},{url:"fonts/roboto-v30-latin-ext_latin-500.woff",revision:"f9bdf9b7f08ecd9c2484ca884b96acd7"},{url:"fonts/roboto-v30-latin-ext_latin-700.woff",revision:"52ab1ba80e525b22e7e4498c3482f755"},{url:"icon.svg",revision:"d762ecc590c5a56a8806275d51aae838"},{url:"icons/apple-touch-icon-180x180.png",revision:"c1b11308f96f01c48f01087a728fded7"},{url:"icons/close.svg",revision:"0387cc33e88c4c8bab1f501e6e4b01af"},{url:"icons/external-link.svg",revision:"f4ae08d87a41d8f9142b3c84e1bbe067"},{url:"icons/hamburger.svg",revision:"03797db4a0bafbc48369838b480abcdc"},{url:"icons/logout.svg",revision:"216866e3f2d894c9be9e40b54f6dde73"},{url:"icons/maskable-icon-512x512.png",revision:"2f35be7614fe7975d18f07a7d8856aa0"},{url:"icons/pwa-192x192.png",revision:"c1b11308f96f01c48f01087a728fded7"},{url:"icons/pwa-512x512.png",revision:"2f35be7614fe7975d18f07a7d8856aa0"},{url:"icons/pwa-64x64.png",revision:"87d80000eaf6e4397f2c33bb17b2c7e5"},{url:"icons/settings.svg",revision:"d50d4f487277ef1c24d0f0f42fd8cd41"},{url:"index.html",revision:"eaff577bc1a4d22dc0ecd678280a0221"},{url:"locales/fr-CH.js",revision:"bffe76ed71f9e0ba1914145139e139fc"},{url:"logo.svg",revision:"15c7b80733a293d2b9b74060c3b30e80"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"scripts/iframe.js",revision:"807a2ad99773c12f3985b4b4d7bc0445"},{url:"scripts/noteneingabe.js",revision:"3c65db58f0a8f78862e4637fbf224a57"},{url:"styles/kursausschreibung-override.css",revision:"a4af9f9cc8c62066f5cba83351febc58"},{url:"styles/noteneingabe-override.css",revision:"4e2dad371a47039931015cda11991bd2"},{url:"styles/raumreservation-override.css",revision:"31cdb1450aa35e69fd155ee9d251eff2"},{url:"styles/stellvertretung-override.css",revision:"948ce2aebfb94c54aed16dafe86b67b8"},{url:"favicon.ico",revision:"7f7b4463e9eb80575be520d1a65caa84"},{url:"icon.svg",revision:"d762ecc590c5a56a8806275d51aae838"},{url:"icons/apple-touch-icon-180x180.png",revision:"c1b11308f96f01c48f01087a728fded7"},{url:"icons/pwa-64x64.png",revision:"87d80000eaf6e4397f2c33bb17b2c7e5"},{url:"icons/pwa-192x192.png",revision:"c1b11308f96f01c48f01087a728fded7"},{url:"icons/pwa-512x512.png",revision:"2f35be7614fe7975d18f07a7d8856aa0"},{url:"icons/maskable-icon-512x512.png",revision:"2f35be7614fe7975d18f07a7d8856aa0"},{url:"manifest.webmanifest",revision:"168ae2eaf9b54b39ef6c08d7ba33e74d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/apps/]}))}));
