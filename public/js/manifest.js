(()=>{"use strict";var e,r,n,o={},t={};function a(e){var r=t[e];if(void 0!==r)return r.exports;var n=t[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=o,e=[],a.O=(r,n,o,t)=>{if(!n){var d=1/0;for(l=0;l<e.length;l++){for(var[n,o,t]=e[l],i=!0,s=0;s<n.length;s++)(!1&t||d>=t)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(i=!1,t<d&&(d=t));if(i){e.splice(l--,1);var c=o();void 0!==c&&(r=c)}}return r}t=t||0;for(var l=e.length;l>0&&e[l-1][2]>t;l--)e[l]=e[l-1];e[l]=[n,o,t]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var n in r)a.o(r,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,n)=>(a.f[n](e,r),r)),[])),a.u=e=>"js/"+e+"."+{"home.chunk":"dbacbbf496f4491c","compose.chunk":"3cdf403a94940e09","post.chunk":"d1af16b1b6084a54","profile.chunk":"d3323261e185e009","discover~memories.chunk":"75593281ab774b6e","discover~myhashtags.chunk":"6eecc7637a951b1c","daci.chunk":"ae39bfc1ad7a059c","discover~findfriends.chunk":"a486ca739d8df573","discover~serverfeed.chunk":"2e8231740908b3fe","discover~settings.chunk":"3e7bde155f5bc204","discover.chunk":"7d6f47d56d11ce99","notifications.chunk":"3d4a692464b51ea5","dms.chunk":"bad84b30673bf1a3","dms~message.chunk":"d897eb10f222d917","profile~followers.bundle":"5f901422e5edf3d6","profile~following.bundle":"d5e21bf2a0fd05af","discover~hashtag.bundle":"8bd37429a016b213","error404.bundle":"2709b14bca6550e2","i18n.bundle":"b8411fedc11e6a7c","changelog.bundle":"91d20efe512d28f9"}[e]+".js",a.miniCssF=e=>e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="pixelfed:",a.l=(e,o,t,d)=>{if(r[e])r[e].push(o);else{var i,s;if(void 0!==t)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+t){i=f;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",n+t),i.src=e),r[e]=[o];var u=(n,o)=>{i.onerror=i.onload=null,clearTimeout(b);var t=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),t&&t.forEach((e=>e(o))),n)return n(o)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),s&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/",(()=>{var e={"/js/manifest":0,"css/appdark":0,"css/app":0,"css/portfolio":0,"css/admin":0,"css/landing":0,"css/spa":0};a.f.j=(r,n)=>{var o=a.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else if(/^(css\/(a(pp(|dark)|dmin)|landing|portfolio|spa)|\/js\/manifest)$/.test(r))e[r]=0;else{var t=new Promise(((n,t)=>o=e[r]=[n,t]));n.push(o[2]=t);var d=a.p+a.u(r),i=new Error;a.l(d,(n=>{if(a.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var t=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;i.message="Loading chunk "+r+" failed.\n("+t+": "+d+")",i.name="ChunkLoadError",i.type=t,i.request=d,o[1](i)}}),"chunk-"+r,r)}},a.O.j=r=>0===e[r];var r=(r,n)=>{var o,t,[d,i,s]=n,c=0;if(d.some((r=>0!==e[r]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var l=s(a)}for(r&&r(n);c<d.length;c++)t=d[c],a.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return a.O(l)},n=self.webpackChunkpixelfed=self.webpackChunkpixelfed||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),a.nc=void 0})();