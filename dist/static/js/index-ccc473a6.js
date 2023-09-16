import{_ as a}from"./AddRoleModal.vue_vue_type_script_setup_true_lang-e49ffc22.js";import{d as e,g as l,N as t,r as i,o as n,c as d,a as s,w as o,u,f as r,h as c,t as p,e as m,E as _,M as f}from"./index-13a6078f.js";import{u as y}from"./usePagination-6607fc48.js";import{h as g}from"./index-92df8142.js";const h={class:"gi_page_scroll_y role-manage"},x=c("span",null,"查询",-1),b=c("span",null,"重置",-1),v=c("span",null,"新增",-1),w=c("span",null,"删除",-1),k={class:"gi_mt"},C=c("span",null,"编辑",-1),V=c("span",null,"删除",-1),R=e({name:"SystemRole",__name:"index",setup(e){const R=l(),j=t({name:"",status:""}),{pagination:z,setTotal:M}=y((()=>{U()})),T=l(!1),A=l([]),U=async()=>{try{T.value=!0;const a=await g();A.value=a.data.list,M(a.data.total)}catch(a){}finally{T.value=!1}};U();const E=()=>{z.onChange(1)},I=()=>{j.status="",j.status="",z.onChange(1)},N=()=>{var a;null==(a=R.value)||a.add()},O=()=>{f.info("点击了确认按钮")};return(e,l)=>{const t=i("icon-search"),f=i("a-input"),y=i("a-option"),g=i("a-select"),M=i("a-button"),U=i("icon-refresh"),P=i("a-space"),S=i("icon-plus"),W=i("icon-delete"),q=i("a-row"),B=i("a-table-column"),D=i("a-tag"),F=i("icon-edit"),G=i("icon-safe"),H=i("a-popconfirm"),J=i("a-table"),K=i("a-card");return n(),d("div",h,[s(K,{title:"角色管理"},{default:o((()=>[s(P,null,{default:o((()=>[s(f,{modelValue:u(j).name,"onUpdate:modelValue":l[0]||(l[0]=a=>u(j).name=a),placeholder:"输入角色名搜索","allow-clear":"",style:{width:"250px"}},{prefix:o((()=>[s(t)])),_:1},8,["modelValue"]),s(g,{modelValue:u(j).status,"onUpdate:modelValue":l[1]||(l[1]=a=>u(j).status=a),placeholder:"角色状态","allow-clear":"",style:{width:"120px"}},{default:o((()=>[s(y,{value:1},{default:o((()=>[r("正常")])),_:1}),s(y,{value:0},{default:o((()=>[r("禁用")])),_:1})])),_:1},8,["modelValue"]),s(M,{type:"primary",onClick:E},{icon:o((()=>[s(t)])),default:o((()=>[x])),_:1}),s(M,{onClick:I},{icon:o((()=>[s(U)])),default:o((()=>[b])),_:1})])),_:1}),s(q,{class:"gi_my"},{default:o((()=>[s(P,null,{default:o((()=>[s(M,{type:"primary",onClick:N},{icon:o((()=>[s(S)])),default:o((()=>[v])),_:1}),s(M,{type:"primary",status:"danger"},{icon:o((()=>[s(W)])),default:o((()=>[w])),_:1})])),_:1})])),_:1}),c("section",k,[s(J,{"row-key":"id",data:u(A),bordered:{cell:!0},loading:u(T),scroll:{x:"100%",y:"100%",minWidth:900},pagination:u(z)},{columns:o((()=>[s(B,{title:"序号",width:80},{cell:o((a=>[r(p(a.rowIndex+1),1)])),_:1}),s(B,{title:"角色名称","data-index":"name"}),s(B,{title:"角色编号","data-index":"code"}),s(B,{title:"状态",width:100,align:"center"},{cell:o((({record:a})=>[1==a.status?(n(),m(D,{key:0,color:"green"},{default:o((()=>[r("正常")])),_:1})):_("",!0),0==a.status?(n(),m(D,{key:1,color:"red"},{default:o((()=>[r("禁用")])),_:1})):_("",!0)])),_:1}),s(B,{title:"角色描述","data-index":"description"}),s(B,{title:"创建时间","data-index":"createTime"}),s(B,{title:"操作",width:280,align:"center",fixed:"right"},{cell:o((({record:a})=>[s(P,null,{default:o((()=>[s(M,{type:"primary",size:"mini",disabled:a.disabled,onClick:e=>{return l=a,void(null==(t=R.value)||t.edit(l.id));var l,t}},{icon:o((()=>[s(F)])),default:o((()=>[C])),_:2},1032,["disabled","onClick"]),s(M,{type:"primary",status:"success",size:"mini",disabled:a.disabled},{icon:o((()=>[s(G)])),default:o((()=>[r("分配权限")])),_:2},1032,["disabled"]),s(H,{type:"warning",content:"确定删除该角色吗?",onOk:O},{default:o((()=>[s(M,{type:"primary",status:"danger",size:"mini",disabled:a.disabled},{icon:o((()=>[s(W)])),default:o((()=>[V])),_:2},1032,["disabled"])])),_:2},1024)])),_:2},1024)])),_:1})])),_:1},8,["data","loading","pagination"])]),s(a,{ref_key:"AddRoleModalRef",ref:R},null,512)])),_:1})])}}});export{R as default};
