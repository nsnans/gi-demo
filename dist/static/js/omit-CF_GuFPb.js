import{f3 as r,f4 as n,f5 as t,f6 as e,f7 as a,f8 as u,f9 as o,fa as c,fb as f,fc as i,fd as l,fe as s,ff as v,fg as h,fh as p,fi as g}from"./index-CTftGuoI.js";var y=Date.now;var d=r?function(n,t){return r(n,"toString",{configurable:!0,enumerable:!1,value:(e=t,function(){return e}),writable:!0});var e}:function(r){return r};var b,w,j,m=(b=d,w=0,j=0,function(){var r=y(),n=16-(r-j);if(j=r,n>0){if(++w>=800)return arguments[0]}else w=0;return b.apply(void 0,arguments)}),O=Math.max;var x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var A="Expected a function";function S(r,n){if("function"!=typeof r||null!=n&&"function"!=typeof n)throw new TypeError(A);var t=function(){var e=arguments,a=n?n.apply(this,e):e[0],u=t.cache;if(u.has(a))return u.get(a);var o=r.apply(this,e);return t.cache=u.set(a,o)||u,o};return t.cache=new(S.Cache||e),t}S.Cache=e;var $=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,E=/\\(\\)?/g,z=function(r){var n=S(r,(function(r){return 500===t.size&&t.clear(),r})),t=n.cache;return n}((function(r){var n=[];return 46===r.charCodeAt(0)&&n.push(""),r.replace($,(function(r,t,e,a){n.push(e?a.replace(E,"$1"):t||r)})),n}));function D(r,e){return n(r)?r:function(r,e){if(n(r))return!1;var a=typeof r;return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=r&&!t(r))||C.test(r)||!x.test(r)||null!=e&&r in Object(e)}(r,e)?[r]:z(a(r))}var F=1/0;function M(r){if("string"==typeof r||t(r))return r;var n=r+"";return"0"==n&&1/r==-F?"-0":n}var P=u?u.isConcatSpreadable:void 0;function T(r){return n(r)||o(r)||!!(P&&r&&r[P])}function k(r,n,t,e,a){var u=-1,o=r.length;for(t||(t=T),a||(a=[]);++u<o;){var f=r[u];n>0&&t(f)?n>1?k(f,n-1,t,e,a):c(a,f):e||(a[a.length]=f)}return a}function q(r){return(null==r?0:r.length)?k(r,1):[]}var B="[object Object]",G=Function.prototype,H=Object.prototype,I=G.toString,J=H.hasOwnProperty,K=I.call(Object);function L(r,n){return n.length<2?r:function(r,n){for(var t=0,e=(n=D(n,r)).length;null!=r&&t<e;)r=r[M(n[t++])];return t&&t==e?r:void 0}(r,s(n,0,-1))}function N(r,n){return null==(r=L(r,n=D(n,r)))||delete r[M((t=n,e=null==t?0:t.length,e?t[e-1]:void 0))];var t,e}function Q(r){return function(r){if(!f(r)||i(r)!=B)return!1;var n=l(r);if(null===n)return!0;var t=J.call(n,"constructor")&&n.constructor;return"function"==typeof t&&t instanceof t&&I.call(t)==K}(r)?void 0:r}var R=function(r){return m(function(r,n,t){return n=O(void 0===n?r.length-1:n,0),function(){for(var e=arguments,a=-1,u=O(e.length-n,0),o=Array(u);++a<u;)o[a]=e[n+a];a=-1;for(var c=Array(n+1);++a<n;)c[a]=e[a];return c[n]=t(o),function(r,n,t){switch(t.length){case 0:return r.call(n);case 1:return r.call(n,t[0]);case 2:return r.call(n,t[0],t[1]);case 3:return r.call(n,t[0],t[1],t[2])}return r.apply(n,t)}(r,this,c)}}(r,void 0,q),r+"")}((function(r,n){var t={};if(null==r)return t;var e=!1;n=v(n,(function(n){return n=D(n,r),e||(e=n.length>1),n})),h(r,p(r),t),e&&(t=g(t,7,Q));for(var a=n.length;a--;)N(t,n[a]);return t}));export{R as o};
