import{_ as q}from"./index-15ab2ac0.js";import{c as E}from"./index-3740ec6c.js";import{d as D,W as O,X as Q,h as r,a as o,o as k,i as P,b as e,w as t,I as F,u as m,c as G,l as a,g as C,Y as X,q as Y,Z,m as H,_ as j,t as N,Q as J,M as A,e as K,f as ee}from"./index-ad0224cd.js";import"./index-578bfdd4.js";import{u as te}from"./usePagination-44eed113.js";import{g as oe}from"./index-d694372f.js";const ne={class:"table-box"},ae={name:"GiTable",inheritAttrs:!1},se=D({...ae,emits:["refresh"],setup(f,{expose:g,emit:w}){const v=O(),V=Q(),u=r(null),h=r(!1),b=r("small"),y=r(!0),c=r(null),{isFullscreen:S,toggle:T}=E(c),l=()=>{w("refresh")};return g({tableRef:u}),(z,i)=>{const n=o("a-space"),I=o("a-switch"),d=o("a-tooltip"),$=o("icon-refresh"),x=o("a-button"),B=o("icon-fullscreen"),R=o("icon-fullscreen-exit"),s=o("icon-apps"),p=o("a-radio"),L=o("a-radio-group"),M=o("a-row"),W=o("a-table");return k(),P("div",{class:H(["gi-table",{fullscreen:m(S)}]),ref_key:"giTableRef",ref:c},[e(M,{justify:"space-between"},{default:t(()=>[e(n,null,{default:t(()=>[F(z.$slots,"custom-extra",{},void 0,!0)]),_:3}),e(n,{size:15},{default:t(()=>[e(d,{content:"斑马纹"},{default:t(()=>[e(I,{modelValue:h.value,"onUpdate:modelValue":i[0]||(i[0]=_=>h.value=_),size:"medium"},null,8,["modelValue"])]),_:1}),e(d,{content:"刷新"},{default:t(()=>[e(x,{size:"mini",class:"gi_hover_btn",onClick:l},{icon:t(()=>[e($,{size:18})]),_:1})]),_:1}),e(d,{content:"全屏"},{default:t(()=>[e(x,{size:"mini",class:"gi_hover_btn",onClick:m(T)},{icon:t(()=>[m(S)?(k(),G(R,{key:1,size:18})):(k(),G(B,{key:0,size:18}))]),_:1},8,["onClick"])]),_:1}),e(d,{content:"显示边框"},{default:t(()=>[e(x,{size:"mini",class:"gi_hover_btn",onClick:i[1]||(i[1]=_=>y.value=!y.value)},{icon:t(()=>[e(s,{size:18})]),_:1})]),_:1}),e(L,{type:"button",size:"mini",modelValue:b.value,"onUpdate:modelValue":i[2]||(i[2]=_=>b.value=_)},{default:t(()=>[e(p,{value:"mini"},{default:t(()=>[a("小")]),_:1}),e(p,{value:"small"},{default:t(()=>[a("默认")]),_:1}),e(p,{value:"medium"},{default:t(()=>[a("中")]),_:1}),e(p,{value:"large"},{default:t(()=>[a("大")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:3}),C("div",ne,[e(W,Z(m(v),{stripe:h.value,size:b.value,bordered:{cell:y.value},ref_key:"tableRef",ref:u}),X({_:2},[Y(Object.keys(m(V)),_=>({name:_,fn:t(()=>[F(z.$slots,_,{},void 0,!0)])}))]),1040,["stripe","size","bordered"])])],2)}}});const le=j(se,[["__scopeId","data-v-34ecff0a"]]),U=f=>(K("data-v-0f0c11ae"),f=f(),ee(),f),ie={class:"table-page"},ce=U(()=>C("span",null,"新增",-1)),_e=U(()=>C("span",null,"删除",-1)),re=U(()=>C("span",null,"导入",-1)),ue=D({name:"CustomTable"}),de=D({...ue,setup(f){const g=r(!1),w=r([]),{pagination:v,setTotal:V}=te(()=>u()),u=async()=>{try{g.value=!0;const c=await oe({current:v.current,pageSize:v.pageSize});w.value=c.data.list,V(c.data.total)}catch{}finally{g.value=!1}};u();const h=()=>{A.info("点击了新增")},b=()=>{A.info("点击了删除")},y=()=>{A.info("点击了导入")};return(c,S)=>{const T=o("icon-plus"),l=o("a-button"),z=o("icon-delete"),i=o("icon-export"),n=o("a-table-column"),I=o("a-avatar"),d=o("a-switch"),$=o("a-popconfirm"),x=o("a-space"),B=le,R=q;return k(),P("div",ie,[e(B,{"row-key":"id",loading:g.value,data:w.value,scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:m(v),onRefresh:u},{"custom-extra":t(()=>[e(l,{type:"primary",onClick:h},{icon:t(()=>[e(T)]),default:t(()=>[ce]),_:1}),e(l,{type:"primary",status:"danger",onClick:b},{icon:t(()=>[e(z)]),default:t(()=>[_e]),_:1}),e(l,{onClick:y},{icon:t(()=>[e(i)]),default:t(()=>[re]),_:1})]),columns:t(()=>[e(n,{title:"序号",width:66,align:"center"},{cell:t(s=>[a(N(s.rowIndex+1),1)]),_:1}),e(n,{title:"姓名","data-index":"name",width:120}),e(n,{title:"头像",width:80},{cell:t(({record:s})=>[e(I,{size:30,style:J({backgroundColor:s.color})},{default:t(()=>[a(N(s.name[0]),1)]),_:2},1032,["style"])]),_:1}),e(n,{title:"手机号","data-index":"phone",width:150}),e(n,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),e(n,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),e(n,{title:"状态",width:100},{cell:t(({record:s})=>[e(d,{modelValue:s.status,"onUpdate:modelValue":p=>s.status=p,size:"medium"},{checked:t(()=>[a("开启")]),unchecked:t(()=>[a("关闭")]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(n,{title:"操作",width:200,align:"center"},{cell:t(({record:s})=>[e(x,null,{default:t(()=>[e(l,{type:"primary",size:"mini"},{default:t(()=>[a("修改")]),_:1}),e(l,{size:"mini"},{default:t(()=>[a("详情")]),_:1}),e($,{type:"warning",content:"您确定要删除该项吗?"},{default:t(()=>[e(l,{type:"primary",status:"danger",size:"mini"},{default:t(()=>[a("删除")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["loading","data","pagination"]),e(R)])}}});const be=j(de,[["__scopeId","data-v-0f0c11ae"]]);export{be as default};