var z=Object.defineProperty;var y=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var B=(l,a,o)=>a in l?z(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o,C=(l,a)=>{for(var o in a||(a={}))N.call(a,o)&&B(l,o,a[o]);if(y)for(var o of y(a))q.call(a,o)&&B(l,o,a[o]);return l};import{d as w,r as E,y as L,g as u,o as b,q as h,w as t,b as e,u as d,i as x,h as V,_ as O,f as v,Y as W,c as Y,a as k,A as $,v as j,p as G,e as H,M as J}from"./index.97bb6bb5.js";import{b as K}from"./system.0b5ea515.js";import"./axios.95a3b452.js";const P=V("role_code_"),Q=w({props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:a}){const o=l,c=E({name:"",roleCode:"",remarks:""});let n=L({get:()=>o.modelValue,set:F=>{a("update:modelValue",F)}});return(F,i)=>{const g=u("a-input"),s=u("a-form-item"),_=u("a-textarea"),D=u("a-form"),m=u("a-modal");return b(),h(m,{visible:d(n),"onUpdate:visible":i[3]||(i[3]=r=>x(n)?n.value=r:n=r),title:"\u65B0\u589E\u89D2\u8272"},{default:t(()=>[e(D,null,{default:t(()=>[e(s,{label:"\u89D2\u8272\u540D\u79F0",name:"name",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:"blur"},{min:3,max:10,message:"\u957F\u5EA6\u5728 3 - 10\u4E2A\u5B57\u7B26",trigger:"blur"}],"validate-trigger":["change","input"]},{default:t(()=>[e(g,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",modelValue:d(c).name,"onUpdate:modelValue":i[0]||(i[0]=r=>d(c).name=r)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u89D2\u8272\u7F16\u53F7",name:"roleCode"},{default:t(()=>[e(g,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u53F7",modelValue:d(c).roleCode,"onUpdate:modelValue":i[1]||(i[1]=r=>d(c).roleCode=r)},{prepend:t(()=>[P]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u63CF\u8FF0",name:"remarks"},{default:t(()=>[e(_,{modelValue:d(c).remarks,"onUpdate:modelValue":i[2]||(i[2]=r=>d(c).remarks=r),placeholder:"\u89D2\u8272\u63CF\u8FF0","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["visible"])}}});const X=l=>(G("data-v-06028a00"),l=l(),H(),l),Z={class:"role-manage"},ee=X(()=>k("span",null,"\u65B0\u589E\u89D2\u8272",-1)),te={class:"table-box"},ae=V("\u83DC\u5355\u6743\u9650"),oe=w({setup(l){let a=v(!1);const o=v([]);let c=v(0),n=v(!1);const F=E({pageCount:1,pageSize:500});(async()=>{try{a.value=!0;const s=await K(C({},F));s.success&&(o.value=s.data.list,c.value=s.data.total,a.value=!1)}catch(s){return s}})();const g=()=>{J.info("\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE")};return(s,_)=>{const D=u("icon-plus"),m=u("a-button"),r=u("a-row"),p=u("a-table-column"),A=u("icon-delete"),R=u("a-popconfirm"),S=u("icon-edit"),I=u("icon-safe"),U=u("a-space"),M=u("a-table"),T=W("loading");return b(),Y("div",Z,[e(r,{class:"head"},{default:t(()=>[e(m,{type:"primary",onClick:_[0]||(_[0]=f=>x(n)?n.value=!0:n=!0)},{icon:t(()=>[e(D)]),default:t(()=>[ee]),_:1})]),_:1}),k("section",te,[$((b(),h(M,{data:o.value,"row-key":"id",scroll:{x:"100%",y:"100%",minWidth:900},pagination:{"show-page-size":!0}},{columns:t(()=>[e(p,{title:"\u5E8F\u53F7",width:"60"},{cell:t(f=>[V(j(f.rowIndex+1),1)]),_:1}),e(p,{title:"\u89D2\u8272\u540D\u79F0","data-index":"name"}),e(p,{title:"\u89D2\u8272\u7F16\u53F7","data-index":"roleCode"}),e(p,{title:"\u89D2\u8272\u63CF\u8FF0","data-index":"description"}),e(p,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"}),e(p,{title:"\u64CD\u4F5C",width:"220"},{cell:t(({record:f})=>[e(U,null,{default:t(()=>[e(R,{content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?",onOk:g},{default:t(()=>[e(m,{type:"primary",status:"danger"},{icon:t(()=>[e(A)]),_:1})]),_:1}),e(m,{type:"primary"},{icon:t(()=>[e(S)]),_:1}),e(m,{type:"primary",status:"success"},{icon:t(()=>[e(I)]),default:t(()=>[ae]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])),[[T,d(a)]])]),e(Q,{modelValue:d(n),"onUpdate:modelValue":_[1]||(_[1]=f=>x(n)?n.value=f:n=f)},null,8,["modelValue"])])}}});var re=O(oe,[["__scopeId","data-v-06028a00"]]);export{re as default};
