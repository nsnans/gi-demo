var I=Object.defineProperty,w=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var B=(n,t,a)=>t in n?I(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,E=(n,t)=>{for(var a in t||(t={}))M.call(t,a)&&B(n,a,t[a]);if(b)for(var a of b(t))z.call(t,a)&&B(n,a,t[a]);return n},$=(n,t)=>w(n,D(t));import{_ as S}from"./avatar.d240db71.js";import{_ as x,j as s,o as l,c as g,e,f as o,b as _,B as L,C as N,k as u,d as y,a as k,r as V,u as v,n as C,E as A,F as H,p as U,t as j}from"./index.b2535838.js";import K from"./index.2868fbb8.js";import R from"./index.ca267695.js";import T from"./index.24f2dd19.js";import q from"./index.ca24e13d.js";import"./system.eabb5ab7.js";import"./axios.e4c64477.js";import"./index.1fb9a986.js";const G={},h=n=>(L("data-v-40badd38"),n=n(),N(),n),J={class:"head"},O=h(()=>_("img",{src:S},null,-1)),P=h(()=>_("section",{class:"user-name"},"Lin",-1)),Q={class:"label-list"},W=h(()=>_("span",null,"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",-1)),X=h(()=>_("span",null,"\u524D\u7AEF",-1)),Y=h(()=>_("span",null,"\u5E7F\u5DDE",-1)),Z=u("\u7F16\u8F91\u4FE1\u606F");function ee(n,t){const a=s("IconCamera"),c=s("a-avatar"),i=s("icon-user"),d=s("icon-safe"),r=s("icon-location"),m=s("icon-edit"),f=s("a-button");return l(),g("div",J,[e(c,{size:60,"trigger-icon-style":{color:"#3491FA"}},{"trigger-icon":o(()=>[e(a)]),default:o(()=>[O]),_:1}),P,_("section",Q,[_("div",null,[e(i),W]),_("div",null,[e(d),X]),_("div",null,[e(r),Y])]),e(f,{type:"primary",class:"edit-btn"},{icon:o(()=>[e(m)]),default:o(()=>[Z]),_:1})])}var oe=x(G,[["render",ee],["__scopeId","data-v-40badd38"]]);const te={class:"user-center"},ne={style:{"margin-top":"20px","padding-left":"20px"}},ae=u("Lin"),se=u("\u53CC\u9C7C\u5EA7"),_e=u("07\u670816\u65E5"),ce=u("vue3"),ue=u("pinia"),ie=u("vite"),de=u("ts"),le=u("arco design"),re=u("\u738B\u8005\u8363\u8000"),pe=u("\u65C5\u884C"),me=u("\u54C8\u54C8\u54C8"),fe=y({setup(n){return(t,a)=>{const c=s("a-descriptions-item"),i=s("a-tag"),d=s("a-space"),r=s("icon-man"),m=s("icon-woman"),f=s("a-switch"),p=s("a-descriptions");return l(),g("div",te,[e(oe),_("section",ne,[e(p,{title:"\u57FA\u672C\u4FE1\u606F",column:1},{default:o(()=>[e(c,{label:"\u6635\u79F0"},{default:o(()=>[ae]),_:1}),e(c,{label:"\u661F\u5EA7"},{default:o(()=>[se]),_:1}),e(c,{label:"\u751F\u65E5"},{default:o(()=>[_e]),_:1}),e(c,{label:"\u6807\u7B7E"},{default:o(()=>[e(d,{size:5},{default:o(()=>[e(i,{color:"#f53f3f"},{default:o(()=>[ce]),_:1}),e(i,{color:"#7816ff"},{default:o(()=>[ue]),_:1}),e(i,{color:"#00b42a"},{default:o(()=>[ie]),_:1}),e(i,{color:"#165dff"},{default:o(()=>[de]),_:1}),e(i,{color:"#ff7d00"},{default:o(()=>[le]),_:1})]),_:1})]),_:1}),e(c,{label:"\u7231\u597D"},{default:o(()=>[e(d,{size:5},{default:o(()=>[e(i,{color:"purple"},{default:o(()=>[re]),_:1}),e(i,{color:"magenta"},{default:o(()=>[pe]),_:1})]),_:1})]),_:1}),e(c,{label:"\u6027\u522B"},{default:o(()=>[e(f,{size:"medium","model-value":!0},{"checked-icon":o(()=>[e(r)]),"unchecked-icon":o(()=>[e(m)]),_:1})]),_:1}),e(c,{label:"\u5EA7\u53F3\u94ED"},{default:o(()=>[me]),_:1})]),_:1})])])}}});var he=x(fe,[["__scopeId","data-v-115a5a92"]]);const ve={class:"system-manage"},ge={class:"left"},Ce={class:"right"},xe=y({name:"SystemManage"}),ye=y($(E({},xe),{setup(n){let t=k("01"),a=k(0);const c=V([{id:"01",name:"\u90E8\u95E8\u7BA1\u7406",value:K,icon:"icon-mind-mapping"},{id:"02",name:"\u7528\u6237\u7BA1\u7406",value:R,icon:"icon-user-group"},{id:"03",name:"\u89D2\u8272\u7BA1\u7406",value:T,icon:"icon-robot"},{id:"04",name:"\u83DC\u5355\u7BA1\u7406",value:q,icon:"icon-menu"},{id:"05",name:"\u4E2A\u4EBA\u4E2D\u5FC3",value:he,icon:"icon-user"}]),i=(d,r)=>{t.value=d.id,a.value=r};return(d,r)=>{const m=s("a-menu-item"),f=s("a-menu");return l(),g("div",ve,[_("section",ge,[e(f,{style:{width:"200px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":[v(t)],"show-collapse-button":""},{default:o(()=>[(l(!0),g(H,null,U(v(c),(p,F)=>(l(),C(m,{key:p.id,onClick:be=>i(p,F)},{icon:o(()=>[(l(),C(A(p.icon),{size:18}))]),default:o(()=>[_("span",null,j(p.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["default-selected-keys"])]),_("section",Ce,[(l(),C(A(v(c)[v(a)].value)))])])}}}));var ze=x(ye,[["__scopeId","data-v-351d5f0f"]]);export{ze as default};
