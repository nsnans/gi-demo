import{z as Y,h as v,j as y,A as Z,s as se,v as ee,B as ie,C as ue,D as ce,q as D,E as fe,F as pe,G as j,H as de}from"./index.79d3d7fd.js";var L;const T=typeof window<"u",ve=e=>typeof e=="string",k=()=>{};T&&((L=window==null?void 0:window.navigator)==null?void 0:L.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ge(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const te=e=>e();function me(e=te){const t=v(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function x(e){return ue()?(ce(e),!0):!1}var we=Object.defineProperty,_e=Object.defineProperties,he=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,be=(e,t)=>{for(var r in t||(t={}))ye.call(t,r)&&R(e,r,t[r]);if(z)for(var r of z(t))Oe.call(t,r)&&R(e,r,t[r]);return e},Pe=(e,t)=>_e(e,he(t));function Ee(e){if(!Y(e))return fe(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const r in e.value)t[r]=pe(()=>({get(){return e.value[r]},set(n){if(Array.isArray(e.value)){const a=[...e.value];a[r]=n,e.value=a}else{const a=Pe(be({},e.value),{[r]:n});Object.setPrototypeOf(a,e.value),e.value=a}}}));return t}function Se(e,t=!0){Z()?ie(e):t?e():ee(e)}function I(e,t=!0){Z()?se(e):t?e():ee(e)}function $e(e,t,r={}){const{immediate:n=!0}=r,a=v(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function i(){a.value=!1,s()}function u(...p){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...p)},y(t))}return n&&(a.value=!0,T&&u()),x(i),{isPending:a,start:u,stop:i}}function vt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=Y(e),o=v(e);function s(i){return arguments.length?(o.value=i,o.value):(o.value=o.value===y(r)?y(n):y(r),o.value)}return a?s:[o,s]}var W=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Te=(e,t)=>{var r={};for(var n in e)Fe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&W)for(var n of W(e))t.indexOf(n)<0&&De.call(e,n)&&(r[n]=e[n]);return r};function je(e,t,r={}){const n=r,{eventFilter:a=te}=n,o=Te(n,["eventFilter"]);return D(e,ge(a,t),o)}var xe=Object.defineProperty,Ne=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ke=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&V(e,r,t[r]);if(C)for(var r of C(t))ne.call(t,r)&&V(e,r,t[r]);return e},Me=(e,t)=>Ne(e,Ce(t)),Ae=(e,t)=>{var r={};for(var n in e)re.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&C)for(var n of C(e))t.indexOf(n)<0&&ne.call(e,n)&&(r[n]=e[n]);return r};function Ie(e,t,r={}){const n=r,{eventFilter:a}=n,o=Ae(n,["eventFilter"]),{eventFilter:s,pause:i,resume:u,isActive:p}=me(a);return{stop:je(e,t,Me(ke({},o),{eventFilter:s})),pause:i,resume:u,isActive:p}}function P(e){var t;const r=y(e);return(t=r==null?void 0:r.$el)!=null?t:r}const b=T?window:void 0,Le=T?window.document:void 0,ze=T?window.navigator:void 0;function h(...e){let t,r,n,a;if(ve(e[0])?([r,n,a]=e,t=b):[t,r,n,a]=e,!t)return k;let o=k;const s=D(()=>P(t),u=>{o(),u&&(u.addEventListener(r,n,a),o=()=>{u.removeEventListener(r,n,a),o=k})},{immediate:!0,flush:"post"}),i=()=>{s(),o()};return x(i),i}function gt(e,t,r={}){const{window:n=b,ignore:a,capture:o=!0}=r;if(!n)return;const s=v(!0);let i;const u=c=>{n.clearTimeout(i);const l=P(e),f=c.composedPath();!l||l===c.target||f.includes(l)||!s.value||a&&a.length>0&&a.some(w=>{const g=P(w);return g&&(c.target===g||f.includes(g))})||t(c)},p=[h(n,"click",u,{passive:!0,capture:o}),h(n,"pointerdown",c=>{const l=P(e);s.value=!!l&&!c.composedPath().includes(l)},{passive:!0}),h(n,"pointerup",c=>{if(c.button===0){const l=c.composedPath();c.composedPath=()=>l,i=n.setTimeout(()=>u(c),50)}},{passive:!0})];return()=>p.forEach(c=>c())}function Re(e,t={}){const{window:r=b}=t,n=Boolean(r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=v(!1),s=()=>{!n||(a||(a=r.matchMedia(e)),o.value=a.matches)};return Se(()=>{s(),a&&("addEventListener"in a?a.addEventListener("change",s):a.addListener(s),x(()=>{"removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s)}))}),o}function mt(e={}){const{navigator:t=ze,read:r=!1,source:n,copiedDuring:a=1500}=e,o=["copy","cut"],s=Boolean(t&&"clipboard"in t),i=v(""),u=v(!1),p=$e(()=>u.value=!1,a);function m(){t.clipboard.readText().then(l=>{i.value=l})}if(s&&r)for(const l of o)h(l,m);async function c(l=y(n)){s&&l!=null&&(await t.clipboard.writeText(l),i.value=l,u.value=!0,p.start())}return{isSupported:s,text:i,copied:u,copy:c}}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A="__vueuse_ssr_handlers__";M[A]=M[A]||{};const We=M[A];function ae(e,t){return We[e]||t}function Ve(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Be={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function qe(e,t,r,n={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:i=!0,writeDefaults:u=!0,shallow:p,window:m=b,eventFilter:c,onError:l=d=>{console.error(d)}}=n,f=(p?de:v)(t);if(!r)try{r=ae("getDefaultStorage",()=>{var d;return(d=b)==null?void 0:d.localStorage})()}catch(d){l(d)}if(!r)return f;const w=y(t),g=Ve(w),_=(a=n.serializer)!=null?a:Be[g],{pause:O,resume:S}=Ie(f,()=>$(f.value),{flush:o,deep:s,eventFilter:c});return m&&i&&h(m,"storage",N),N(),f;function $(d){try{d==null?r.removeItem(e):r.setItem(e,_.write(d))}catch(E){l(E)}}function F(d){if(!(d&&d.key!==e)){O();try{const E=d?d.newValue:r.getItem(e);return E==null?(u&&w!==null&&r.setItem(e,_.write(w)),w):typeof E!="string"?E:_.read(E)}catch(E){l(E)}finally{S()}}}function N(d){d&&d.key!==e||(f.value=F(d))}}function oe(e){return Re("(prefers-color-scheme: dark)",e)}var He=Object.defineProperty,B=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Qe=(e,t)=>{for(var r in t||(t={}))Je.call(t,r)&&q(e,r,t[r]);if(B)for(var r of B(t))Ge.call(t,r)&&q(e,r,t[r]);return e};function Ue(e={}){const{selector:t="html",attribute:r="class",window:n=b,storage:a,storageKey:o="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:i,emitAuto:u}=e,p=Qe({auto:"",light:"light",dark:"dark"},e.modes||{}),m=oe({window:n}),c=j(()=>m.value?"dark":"light"),l=i||(o==null?v("auto"):qe(o,"auto",a,{window:n,listenToStorageChanges:s})),f=j({get(){return l.value==="auto"&&!u?c.value:l.value},set(O){l.value=O}}),w=ae("updateHTMLAttrs",(O,S,$)=>{const F=n==null?void 0:n.document.querySelector(O);if(!!F)if(S==="class"){const N=$.split(/\s/g);Object.values(p).flatMap(d=>(d||"").split(/\s/g)).filter(Boolean).forEach(d=>{N.includes(d)?F.classList.add(d):F.classList.remove(d)})}else F.setAttribute(S,$)});function g(O){var S;const $=O==="auto"?c.value:O;w(t,r,(S=p[$])!=null?S:$)}function _(O){e.onChanged?e.onChanged(O,g):g(O)}return D(f,_,{flush:"post",immediate:!0}),I(()=>_(f.value)),f}var Xe=Object.defineProperty,Ke=Object.defineProperties,Ye=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tt=(e,t)=>{for(var r in t||(t={}))Ze.call(t,r)&&J(e,r,t[r]);if(H)for(var r of H(t))et.call(t,r)&&J(e,r,t[r]);return e},rt=(e,t)=>Ke(e,Ye(t));function wt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=b}=e,a=Ue(rt(tt({},e),{onChanged:(i,u)=>{var p;e.onChanged?(p=e.onChanged)==null||p.call(e,i==="dark"):u(i)},modes:{dark:t,light:r}})),o=oe({window:n});return j({get(){return a.value==="dark"},set(i){i===o.value?a.value="auto":a.value=i?"dark":"light"}})}var nt=Object.defineProperty,at=Object.defineProperties,ot=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,it=(e,t)=>{for(var r in t||(t={}))lt.call(t,r)&&Q(e,r,t[r]);if(G)for(var r of G(t))st.call(t,r)&&Q(e,r,t[r]);return e},ut=(e,t)=>at(e,ot(t));function _t(e,t={}){var r,n;const a=(r=t.draggingElement)!=null?r:b,o=v((n=t.initialValue)!=null?n:{x:0,y:0}),s=v(),i=l=>t.pointerTypes?t.pointerTypes.includes(l.pointerType):!0,u=l=>{y(t.preventDefault)&&l.preventDefault(),y(t.stopPropagation)&&l.stopPropagation()},p=l=>{var f;if(!i(l)||y(t.exact)&&l.target!==y(e))return;const w=y(e).getBoundingClientRect(),g={x:l.pageX-w.left,y:l.pageY-w.top};((f=t.onStart)==null?void 0:f.call(t,g,l))!==!1&&(s.value=g,u(l))},m=l=>{var f;!i(l)||!s.value||(o.value={x:l.pageX-s.value.x,y:l.pageY-s.value.y},(f=t.onMove)==null||f.call(t,o.value,l),u(l))},c=l=>{var f;!i(l)||!s.value||(s.value=void 0,(f=t.onEnd)==null||f.call(t,o.value,l),u(l))};return T&&(h(e,"pointerdown",p,!0),h(a,"pointermove",m,!0),h(a,"pointerup",c,!0)),ut(it({},Ee(o)),{position:o,isDragging:j(()=>!!s.value),style:j(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var U=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,pt=(e,t)=>{var r={};for(var n in e)ct.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&U)for(var n of U(e))t.indexOf(n)<0&&ft.call(e,n)&&(r[n]=e[n]);return r};function le(e,t,r={}){const n=r,{window:a=b}=n,o=pt(n,["window"]);let s;const i=a&&"ResizeObserver"in a,u=()=>{s&&(s.disconnect(),s=void 0)},p=D(()=>P(e),c=>{u(),i&&a&&c&&(s=new ResizeObserver(t),s.observe(c,o))},{immediate:!0,flush:"post"}),m=()=>{u(),p()};return x(m),{isSupported:i,stop:m}}function ht(e,t={}){const{reset:r=!0,windowResize:n=!0,windowScroll:a=!0,immediate:o=!0}=t,s=v(0),i=v(0),u=v(0),p=v(0),m=v(0),c=v(0),l=v(0),f=v(0);function w(){const g=P(e);if(!g){r&&(s.value=0,i.value=0,u.value=0,p.value=0,m.value=0,c.value=0,l.value=0,f.value=0);return}const _=g.getBoundingClientRect();s.value=_.height,i.value=_.bottom,u.value=_.left,p.value=_.right,m.value=_.top,c.value=_.width,l.value=_.x,f.value=_.y}return le(e,w),D(()=>P(e),g=>!g&&w()),a&&h("scroll",w,{passive:!0}),n&&h("resize",w,{passive:!0}),I(()=>{o&&w()}),{height:s,bottom:i,left:u,right:p,top:m,width:c,x:l,y:f,update:w}}function yt(e,t={width:0,height:0},r={}){const n=v(t.width),a=v(t.height);return le(e,([o])=>{n.value=o.contentRect.width,a.value=o.contentRect.height},r),D(()=>P(e),o=>{n.value=o?t.width:0,a.value=o?t.height:0}),{width:n,height:a}}const X=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Ot(e,t={}){const{document:r=Le,autoExit:n=!1}=t,a=e||(r==null?void 0:r.querySelector("html")),o=v(!1);let s=!1,i=X[0];if(!r)s=!1;else for(const g of X)if(g[1]in r){i=g,s=!0;break}const[u,p,m,,c]=i;async function l(){!s||(r!=null&&r[m]&&await r[p](),o.value=!1)}async function f(){if(!s)return;await l();const g=P(a);g&&(await g[u](),o.value=!0)}async function w(){o.value?await l():await f()}return r&&h(r,c,()=>{o.value=!!(r!=null&&r[m])},!1),n&&x(l),{isSupported:s,isFullscreen:o,enter:f,exit:l,toggle:w}}var K;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(K||(K={}));function bt(e={}){const{window:t=b,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0}=e,o=v(r),s=v(n),i=()=>{t&&(o.value=t.innerWidth,s.value=t.innerHeight)};return i(),I(i),h("resize",i,{passive:!0}),a&&h("orientationchange",i,{passive:!0}),{width:o,height:s}}export{vt as a,mt as b,ht as c,bt as d,yt as e,_t as f,Ot as g,gt as o,wt as u};