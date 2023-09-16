import{_ as e}from"./AddDeptModal.vue_vue_type_script_setup_true_lang-3680b8d5.js";import{d as a,g as t,N as l,r as n,o as i,c as d,a as s,w as o,u,f as r,h as c,e as p,E as m,C as _}from"./index-13a6078f.js";import{a as f}from"./index-92df8142.js";import"./useDept-93de35b5.js";const y={class:"gi_page_scroll_y dept-manage"},g=c("span",null,"搜索",-1),h=c("span",null,"重置",-1),x=c("span",null,"新增",-1),v=c("span",null,"删除",-1),k={class:"gi_mt"},w=c("span",null,"编辑",-1),C=c("span",null,"新增",-1),V=c("span",null,"删除",-1),b=a({name:"SystemDept",__name:"index",setup(a){const b=t(),D=t(),j=l({name:"",status:""}),R=t(!1),z=t([]),A=async()=>{try{R.value=!0;const e=await f();z.value=e.data,_((()=>{var e;null==(e=D.value)||e.expandAll(!0)}))}catch(e){}finally{R.value=!1}};A();const I=()=>{A()},M=()=>{j.name="",j.status="",A()},T=()=>{var e;null==(e=b.value)||e.add()};return(a,t)=>{const l=n("icon-search"),_=n("a-input"),f=n("a-option"),A=n("a-select"),U=n("a-button"),E=n("icon-refresh"),N=n("a-space"),P=n("icon-plus"),Q=n("icon-delete"),S=n("a-row"),W=n("IconDown"),q=n("IconRight"),B=n("a-table-column"),F=n("a-tag"),G=n("icon-edit"),H=n("a-popconfirm"),J=n("a-table"),K=n("a-card");return i(),d("div",y,[s(K,{title:"部门管理"},{default:o((()=>[s(N,null,{default:o((()=>[s(_,{modelValue:u(j).name,"onUpdate:modelValue":t[0]||(t[0]=e=>u(j).name=e),placeholder:"输入部门名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:o((()=>[s(l)])),_:1},8,["modelValue"]),s(A,{modelValue:u(j).status,"onUpdate:modelValue":t[1]||(t[1]=e=>u(j).status=e),placeholder:"部门状态",style:{width:"120px"}},{default:o((()=>[s(f,{value:1},{default:o((()=>[r("正常")])),_:1}),s(f,{value:0},{default:o((()=>[r("禁用")])),_:1})])),_:1},8,["modelValue"]),s(U,{type:"primary",onClick:I},{icon:o((()=>[s(l)])),default:o((()=>[g])),_:1}),s(U,{onClick:M},{icon:o((()=>[s(E)])),default:o((()=>[h])),_:1})])),_:1}),s(S,{class:"gi_my"},{default:o((()=>[s(N,null,{default:o((()=>[s(U,{type:"primary",onClick:T},{icon:o((()=>[s(P)])),default:o((()=>[x])),_:1}),s(U,{type:"primary",status:"danger"},{icon:o((()=>[s(Q)])),default:o((()=>[v])),_:1})])),_:1})])),_:1}),c("section",k,[s(J,{loading:u(R),ref_key:"TableRef",ref:D,"row-key":"id",bordered:{cell:!0},data:u(z),scroll:{x:"100%",y:"100%",minWidth:900},pagination:!1},{"expand-icon":o((({expanded:e})=>[e?(i(),p(W,{key:0})):(i(),p(q,{key:1}))])),columns:o((()=>[s(B,{title:"部门名称","data-index":"name"}),s(B,{title:"排序","data-index":"sort",width:100,align:"center"}),s(B,{title:"状态",width:100,align:"center"},{cell:o((({record:e})=>[1==e.status?(i(),p(F,{key:0,color:"green"},{default:o((()=>[r("正常")])),_:1})):m("",!0),0==e.status?(i(),p(F,{key:1,color:"red"},{default:o((()=>[r("禁用")])),_:1})):m("",!0)])),_:1}),s(B,{title:"描述","data-index":"description",width:250}),s(B,{title:"创建时间","data-index":"createTime",width:200}),s(B,{title:"操作",width:250,align:"center",fixed:"right"},{cell:o((({record:e})=>[s(N,null,{default:o((()=>[s(U,{type:"primary",size:"mini",onClick:a=>{return t=e,void(null==(l=b.value)||l.edit(t.id));var t,l}},{icon:o((()=>[s(G)])),default:o((()=>[w])),_:2},1032,["onClick"]),e.parentId?(i(),p(U,{key:0,type:"primary",status:"success",size:"mini",onClick:t[2]||(t[2]=e=>T())},{icon:o((()=>[s(P)])),default:o((()=>[C])),_:1})):m("",!0),s(H,{type:"warning",content:"您确定要删除该项吗?"},{default:o((()=>[s(U,{type:"primary",status:"danger",size:"mini"},{icon:o((()=>[s(Q)])),default:o((()=>[V])),_:1})])),_:1})])),_:2},1024)])),_:1})])),_:1},8,["loading","data"])])])),_:1}),s(e,{ref_key:"AddDeptModalRef",ref:b},null,512)])}}});export{b as default};
