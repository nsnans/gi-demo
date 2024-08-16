import{_ as e}from"./index-BbUUfeFp.js";import{_ as a}from"./AddMenuModal.vue_vue_type_script_setup_true_lang-CZHXrQE-.js";import{d as l,b as t,U as i,e as n,o,f as s,h as d,w as r,g as c,c as u,I as p,t as m,a as _,fd as f,F as y,r as k,v as g,L as h,i as v,f6 as w,a1 as x}from"./index-B2dmbZHS.js";import{a as z}from"./menu-C-BfPNh7.js";import{d as j}from"./index-DkFu_bjC.js";import{u as b}from"./useDict-gQtbVd6X.js";import{u as C}from"./useBreakpoint-Bm9bcxS1.js";import{_ as S}from"./index-B3t3W3bk.js";import"./index-G_oiYOTE.js";import"./index-DM0jNx4E.js";import"./useForm-D6YaSEXq.js";const V={class:"gi_page menu-manage"},I=v("span",null,"新增",-1),M=v("span",null,"搜索",-1),A=v("span",null,"重置",-1),D=v("span",null,"编辑",-1),B=v("span",null,"删除",-1),J=l({name:"SystemMenu",__name:"index",setup(l){const{data:v}=b({code:"status"}),J=t(),O=t(),R=t(!1),U=()=>{var e;R.value=!R.value,null==(e=O.value)||e.expandAll(R.value)},F=i({name:"",status:""}),{loading:W,tableData:L,search:N,handleDelete:X}=C((()=>z()),{immediate:!0}),q=()=>{F.name="",F.status="",N()},E=()=>{var e;null==(e=J.value)||e.add()},G=()=>{w.open({title:"数据结构",content:()=>x(S,{codeJson:JSON.stringify(L.value,null,"\t")}),width:560})};return(l,t)=>{const i=n("icon-plus"),w=n("a-button"),x=n("icon-list"),z=n("icon-mind-mapping"),b=n("a-tooltip"),C=n("icon-code"),S=n("a-space"),H=n("icon-search"),K=n("a-input"),P=n("a-select"),Q=n("icon-refresh"),T=n("a-row"),Y=n("IconDown"),Z=n("IconRight"),$=n("a-table-column"),ee=n("a-tag"),ae=e,le=n("a-switch"),te=n("icon-edit"),ie=n("icon-delete"),ne=n("a-popconfirm"),oe=n("a-table"),se=n("a-card");return o(),s("div",V,[d(se,{title:"菜单管理"},{default:r((()=>[d(T,{justify:"space-between"},{default:r((()=>[d(S,{wrap:""},{default:r((()=>[d(w,{type:"primary",onClick:E},{icon:r((()=>[d(i)])),default:r((()=>[I])),_:1}),d(b,{content:"展开/折叠"},{default:r((()=>[d(w,{type:"primary",status:"success",onClick:U},{icon:r((()=>[c(R)?(o(),u(z,{key:1})):(o(),u(x,{key:0}))])),_:1})])),_:1}),d(b,{content:"查看数据结构"},{default:r((()=>[d(w,{type:"primary",status:"warning",onClick:G},{icon:r((()=>[d(C)])),_:1})])),_:1})])),_:1}),d(S,{wrap:""},{default:r((()=>[d(K,{modelValue:c(F).name,"onUpdate:modelValue":t[0]||(t[0]=e=>c(F).name=e),placeholder:"输入菜单名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:r((()=>[d(H)])),_:1},8,["modelValue"]),d(P,{modelValue:c(F).status,"onUpdate:modelValue":t[1]||(t[1]=e=>c(F).status=e),options:c(v),placeholder:"菜单状态",style:{width:"120px"}},null,8,["modelValue","options"]),d(w,{type:"primary",onClick:c(N)},{icon:r((()=>[d(H)])),default:r((()=>[M])),_:1},8,["onClick"]),d(w,{onClick:q},{icon:r((()=>[d(Q)])),default:r((()=>[A])),_:1})])),_:1})])),_:1}),d(oe,{ref_key:"tableRef",ref:O,"row-key":"id",data:c(L),loading:c(W),bordered:{cell:!0},scroll:{x:"100%",y:"100%",minWidth:1700},pagination:!1,size:"mini"},{"expand-icon":r((({expanded:e})=>[e?(o(),u(Y,{key:0})):(o(),u(Z,{key:1}))])),columns:r((()=>[d($,{title:"菜单名称"},{cell:r((({record:e})=>[p(m(e.title||""),1)])),_:1}),d($,{title:"类型",width:80,align:"center"},{cell:r((({record:e})=>[1===e.type?(o(),u(ee,{key:0,size:"small",color:"orangered"},{default:r((()=>[p("目录")])),_:1})):_("",!0),2===e.type?(o(),u(ee,{key:1,size:"small",color:"green"},{default:r((()=>[p("菜单")])),_:1})):_("",!0),3===e.type?(o(),u(ee,{key:2,size:"small"},{default:r((()=>[p("按钮")])),_:1})):_("",!0)])),_:1}),d($,{title:"排序",width:80,align:"center"},{cell:r((({record:e})=>[p(m(e.sort||0),1)])),_:1}),d($,{title:"路由路径","data-index":"path"}),d($,{title:"路由名称"},{cell:r((({record:e})=>[p(m(c(f)(e.path)),1)])),_:1}),d($,{title:"组件路径","data-index":"component"}),d($,{title:"权限标识","data-index":"permission"}),d($,{title:"菜单图标","data-index":"icon",width:100,align:"center"},{cell:r((({record:e})=>[e.svgIcon?(o(),u(ae,{key:0,size:24,name:e.svgIcon},null,8,["name"])):(o(),s(y,{key:1},[e.icon?(o(),u(k(e.icon),{key:0,size:24})):_("",!0)],64))])),_:1}),d($,{title:"状态",width:80,align:"center"},{cell:r((({record:e})=>[d(le,{type:"round",size:"small","model-value":e.status,"checked-value":1,"unchecked-value":0},null,8,["model-value"])])),_:1}),d($,{title:"是否缓存",width:100,align:"center"},{cell:r((({record:e})=>[e.keepAlive?(o(),u(ee,{key:0,size:"small",color:"green"},{default:r((()=>[p("是")])),_:1})):(o(),u(ee,{key:1,size:"small",color:"red"},{default:r((()=>[p("否")])),_:1}))])),_:1}),d($,{title:"是否隐藏",width:100,align:"center"},{cell:r((({record:e})=>[e.hidden?(o(),u(ee,{key:0,size:"small",color:"green"},{default:r((()=>[p("是")])),_:1})):(o(),u(ee,{key:1,size:"small",color:"red"},{default:r((()=>[p("否")])),_:1}))])),_:1}),d($,{title:"是否外链",width:100,align:"center"},{cell:r((({record:e})=>[c(g)(e.path)?(o(),u(ee,{key:0,size:"small",color:"green"},{default:r((()=>[p("是")])),_:1})):(o(),u(ee,{key:1,size:"small",color:"red"},{default:r((()=>[p("否")])),_:1}))])),_:1}),d($,{title:"操作",width:200,align:"left",fixed:c(h)()?void 0:"right"},{cell:r((({record:e})=>[d(S,null,{default:r((()=>[d(w,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=J.value)||t.edit(l.id));var l,t}},{icon:r((()=>[d(te)])),default:r((()=>[D])),_:2},1032,["onClick"]),[1,2].includes(e.type)?(o(),u(w,{key:0,type:"primary",status:"success",size:"mini"},{icon:r((()=>[d(i)])),_:1})):_("",!0),d(ne,{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:a=>(async e=>X((()=>j({ids:[e.id]})),{showModal:!1}))(e)},{default:r((()=>[d(w,{type:"primary",status:"danger",size:"mini"},{icon:r((()=>[d(ie)])),default:r((()=>[B])),_:1})])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading"])])),_:1}),d(a,{ref_key:"AddMenuModalRef",ref:J,menus:c(L),onSaveSuccess:c(N)},null,8,["menus","onSaveSuccess"])])}}});export{J as default};
