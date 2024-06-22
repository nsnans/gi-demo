import{_ as e}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-JcDpYvVG.js";import{_ as a}from"./AddDeptModal.vue_vue_type_script_setup_true_lang-BgWYc1gT.js";import{d as t,b as l,U as n,e as s,o as i,f as o,h as d,w as r,g as u,c,L as p,a as m,i as f,V as _,S as y}from"./index-DyiAUk2E.js";import{u as h}from"./useTable-C3n_eLe3.js";import{a as k}from"./useDept-DJ0NJf6a.js";import{d as g}from"./index-BgQnqqtj.js";import{u as w}from"./useDict-CgsCNnL5.js";import"./useForm-DRpFaFOG.js";import"./useBreakpoint-DcdOSOHb.js";import"./index-CCaNRIPZ.js";const x={class:"gi_page dept-manage"},v=f("span",null,"搜索",-1),S=f("span",null,"重置",-1),j=f("span",null,"新增",-1),C=f("span",null,"删除",-1),b=f("span",null,"编辑",-1),D=f("span",null,"新增",-1),V=f("span",null,"删除",-1),A=t({name:"SystemDept",__name:"index",setup(t){const{data:f}=w({code:"status"}),A=l(),U=l(),z=n({name:"",status:""}),{loading:B,tableData:I,selectedKeys:M,search:R,select:O,selectAll:T,handleDelete:W}=h((()=>k()),{immediate:!0,onSuccess:()=>{y((()=>{var e;null==(e=U.value)||e.expandAll(!0)}))}}),F=()=>{z.name="",z.status="",R()},G=()=>{var e;null==(e=A.value)||e.add()},J=()=>{if(!M.value.length)return _.warning("请选择部门");W((()=>g({ids:M.value})))};return(t,l)=>{const n=s("icon-search"),_=s("a-input"),y=s("a-select"),h=s("a-button"),k=s("icon-refresh"),w=s("a-space"),K=s("icon-plus"),L=s("icon-delete"),X=s("a-row"),Y=s("IconDown"),q=s("IconRight"),E=s("a-table-column"),H=e,N=s("icon-edit"),P=s("a-popconfirm"),Q=s("a-table"),Z=s("a-card");return i(),o("div",x,[d(Z,{title:"部门管理"},{default:r((()=>[d(w,{wrap:""},{default:r((()=>[d(_,{modelValue:u(z).name,"onUpdate:modelValue":l[0]||(l[0]=e=>u(z).name=e),placeholder:"输入部门名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:r((()=>[d(n)])),_:1},8,["modelValue"]),d(y,{modelValue:u(z).status,"onUpdate:modelValue":l[1]||(l[1]=e=>u(z).status=e),options:u(f),placeholder:"部门状态",style:{width:"120px"}},null,8,["modelValue","options"]),d(h,{type:"primary",onClick:u(R)},{icon:r((()=>[d(n)])),default:r((()=>[v])),_:1},8,["onClick"]),d(h,{onClick:F},{icon:r((()=>[d(k)])),default:r((()=>[S])),_:1})])),_:1}),d(X,null,{default:r((()=>[d(w,{wrap:""},{default:r((()=>[d(h,{type:"primary",onClick:G},{icon:r((()=>[d(K)])),default:r((()=>[j])),_:1}),d(h,{type:"primary",status:"danger",onClick:J},{icon:r((()=>[d(L)])),default:r((()=>[C])),_:1})])),_:1})])),_:1}),d(Q,{ref_key:"tableRef",ref:U,"row-key":"id",bordered:{cell:!0},data:u(I),loading:u(B),scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:!1,"row-selection":{type:"checkbox",showCheckedAll:!1},"selected-keys":u(M),onSelect:u(O),onSelectAll:u(T)},{"expand-icon":r((({expanded:e})=>[e?(i(),c(Y,{key:0})):(i(),c(q,{key:1}))])),columns:r((()=>[d(E,{title:"部门名称","data-index":"name",width:160}),d(E,{title:"排序","data-index":"sort",width:100,align:"center"}),d(E,{title:"状态",width:100,align:"center"},{cell:r((({record:e})=>[d(H,{status:e.status},null,8,["status"])])),_:1}),d(E,{title:"描述","data-index":"description",width:250}),d(E,{title:"创建时间","data-index":"createTime",width:200}),d(E,{title:"操作",width:200,align:"center",fixed:u(p)()?void 0:"right"},{cell:r((({record:e})=>[d(w,null,{default:r((()=>[d(h,{type:"primary",size:"mini",onClick:a=>{return t=e,void(null==(l=A.value)||l.edit(t.id));var t,l}},{icon:r((()=>[d(N)])),default:r((()=>[b])),_:2},1032,["onClick"]),e.parentId?(i(),c(h,{key:0,type:"primary",status:"success",size:"mini",onClick:l[2]||(l[2]=e=>G())},{icon:r((()=>[d(K)])),default:r((()=>[D])),_:1})):m("",!0),d(P,{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:a=>(async e=>W((()=>g({ids:[e.id]})),{showModal:!1}))(e)},{default:r((()=>[d(h,{type:"primary",status:"danger",size:"mini"},{icon:r((()=>[d(L)])),default:r((()=>[V])),_:1})])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading","selected-keys","onSelect","onSelectAll"])])),_:1}),d(a,{ref_key:"AddDeptModalRef",ref:A,onSaveSuccess:u(R)},null,8,["onSaveSuccess"])])}}});export{A as default};
