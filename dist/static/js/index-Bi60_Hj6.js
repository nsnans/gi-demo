import{_ as e}from"./index-Bsgaynbs.js";import{_ as a}from"./AddMenuModal.vue_vue_type_script_setup_true_lang-YJbxzDYy.js";import{d as l,J as t,b as i,U as n,e as o,o as s,f as d,h as r,w as c,i as u,g as p,c as m,G as _,t as f,a as y,fe as k,F as g,r as h,v,K as w,ah as x,a3 as z}from"./index-BUFsz7Wk.js";import{a as j}from"./menu-D7Sse0UJ.js";import{d as b}from"./index-CLdkLKnB.js";import{u as C}from"./useDict-7a7D9ELK.js";import{u as M}from"./useBreakpoint-DLRBKOJM.js";import{_ as R}from"./index-_fogO8Hf.js";import"./index-BS6JuPOk.js";import"./index-BnJCFZ-6.js";import"./useResetReactive-DWj2tJcX.js";const S={class:"gi_page menu-manage"},V=l({name:"SystemMenu",__name:"index",setup(l){const{data:V}=C({code:"status"}),A=t("AddMenuModalRef"),D=t("tableRef"),I=i(!1),O=()=>{var e;I.value=!I.value,null==(e=D.value)||e.expandAll(I.value)},B=n({name:"",status:""}),{loading:J,tableData:U,search:N,handleDelete:W}=M((()=>j()),{immediate:!0}),q=()=>{B.name="",B.status="",N()},F=()=>{var e;null==(e=A.value)||e.add()},G=()=>{x.open({title:"数据结构",content:()=>z(R,{codeJson:JSON.stringify(U.value,null,"\t")}),width:560})};return(l,t)=>{const i=o("icon-plus"),n=o("a-button"),x=o("icon-list"),z=o("icon-mind-mapping"),j=o("a-tooltip"),C=o("icon-code"),M=o("a-space"),R=o("icon-search"),K=o("a-input"),Z=o("a-select"),$=o("icon-refresh"),E=o("a-row"),H=o("IconDown"),L=o("IconRight"),P=o("a-table-column"),Q=o("a-tag"),T=e,X=o("a-switch"),Y=o("icon-edit"),ee=o("icon-delete"),ae=o("a-popconfirm"),le=o("a-table"),te=o("a-card");return s(),d("div",S,[r(te,{title:"菜单管理"},{default:c((()=>[r(E,{justify:"space-between"},{default:c((()=>[r(M,{wrap:""},{default:c((()=>[r(n,{type:"primary",onClick:F},{icon:c((()=>[r(i)])),default:c((()=>[t[2]||(t[2]=u("span",null,"新增",-1))])),_:1}),r(j,{content:"展开/折叠"},{default:c((()=>[r(n,{type:"primary",status:"success",onClick:O},{icon:c((()=>[p(I)?(s(),m(z,{key:1})):(s(),m(x,{key:0}))])),_:1})])),_:1}),r(j,{content:"查看数据结构"},{default:c((()=>[r(n,{type:"primary",status:"warning",onClick:G},{icon:c((()=>[r(C)])),_:1})])),_:1})])),_:1}),r(M,{wrap:""},{default:c((()=>[r(K,{modelValue:p(B).name,"onUpdate:modelValue":t[0]||(t[0]=e=>p(B).name=e),placeholder:"输入菜单名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:c((()=>[r(R)])),_:1},8,["modelValue"]),r(Z,{modelValue:p(B).status,"onUpdate:modelValue":t[1]||(t[1]=e=>p(B).status=e),options:p(V),placeholder:"菜单状态",style:{width:"120px"}},null,8,["modelValue","options"]),r(n,{type:"primary",onClick:p(N)},{icon:c((()=>[r(R)])),default:c((()=>[t[3]||(t[3]=u("span",null,"搜索",-1))])),_:1},8,["onClick"]),r(n,{onClick:q},{icon:c((()=>[r($)])),default:c((()=>[t[4]||(t[4]=u("span",null,"重置",-1))])),_:1})])),_:1})])),_:1}),r(le,{ref_key:"tableRef",ref:D,"row-key":"id",data:p(U),loading:p(J),bordered:{cell:!0},scroll:{x:"100%",y:"100%",minWidth:1700},pagination:!1,size:"mini"},{"expand-icon":c((({expanded:e})=>[e?(s(),m(H,{key:0})):(s(),m(L,{key:1}))])),columns:c((()=>[r(P,{title:"菜单名称"},{cell:c((({record:e})=>[_(f(e.title||""),1)])),_:1}),r(P,{title:"类型",width:80,align:"center"},{cell:c((({record:e})=>[1===e.type?(s(),m(Q,{key:0,size:"small",color:"orangered"},{default:c((()=>t[5]||(t[5]=[_("目录")]))),_:1})):y("",!0),2===e.type?(s(),m(Q,{key:1,size:"small",color:"green"},{default:c((()=>t[6]||(t[6]=[_("菜单")]))),_:1})):y("",!0),3===e.type?(s(),m(Q,{key:2,size:"small"},{default:c((()=>t[7]||(t[7]=[_("按钮")]))),_:1})):y("",!0)])),_:1}),r(P,{title:"排序",width:80,align:"center"},{cell:c((({record:e})=>[_(f(e.sort||0),1)])),_:1}),r(P,{title:"路由路径","data-index":"path"}),r(P,{title:"路由名称"},{cell:c((({record:e})=>[_(f(p(k)(e.path)),1)])),_:1}),r(P,{title:"组件路径","data-index":"component"}),r(P,{title:"权限标识","data-index":"permission"}),r(P,{title:"菜单图标","data-index":"icon",width:100,align:"center"},{cell:c((({record:e})=>[e.svgIcon?(s(),m(T,{key:0,size:24,name:e.svgIcon},null,8,["name"])):(s(),d(g,{key:1},[e.icon?(s(),m(h(e.icon),{key:0,size:24})):y("",!0)],64))])),_:1}),r(P,{title:"状态",width:80,align:"center"},{cell:c((({record:e})=>[r(X,{type:"round",size:"small","model-value":e.status,"checked-value":1,"unchecked-value":0},null,8,["model-value"])])),_:1}),r(P,{title:"是否缓存",width:100,align:"center"},{cell:c((({record:e})=>[e.keepAlive?(s(),m(Q,{key:0,size:"small",color:"green"},{default:c((()=>t[8]||(t[8]=[_("是")]))),_:1})):(s(),m(Q,{key:1,size:"small",color:"red"},{default:c((()=>t[9]||(t[9]=[_("否")]))),_:1}))])),_:1}),r(P,{title:"是否隐藏",width:100,align:"center"},{cell:c((({record:e})=>[e.hidden?(s(),m(Q,{key:0,size:"small",color:"green"},{default:c((()=>t[10]||(t[10]=[_("是")]))),_:1})):(s(),m(Q,{key:1,size:"small",color:"red"},{default:c((()=>t[11]||(t[11]=[_("否")]))),_:1}))])),_:1}),r(P,{title:"是否外链",width:100,align:"center"},{cell:c((({record:e})=>[p(v)(e.path)?(s(),m(Q,{key:0,size:"small",color:"green"},{default:c((()=>t[12]||(t[12]=[_("是")]))),_:1})):(s(),m(Q,{key:1,size:"small",color:"red"},{default:c((()=>t[13]||(t[13]=[_("否")]))),_:1}))])),_:1}),r(P,{title:"操作",width:200,align:"left",fixed:p(w)()?void 0:"right"},{cell:c((({record:e})=>[r(M,null,{default:c((()=>[r(n,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=A.value)||t.edit(l.id));var l,t}},{icon:c((()=>[r(Y)])),default:c((()=>[t[14]||(t[14]=u("span",null,"编辑",-1))])),_:2},1032,["onClick"]),[1,2].includes(e.type)?(s(),m(n,{key:0,type:"primary",status:"success",size:"mini"},{icon:c((()=>[r(i)])),_:1})):y("",!0),r(ae,{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:a=>(async e=>W((()=>b({ids:[e.id]})),{showModal:!1}))(e)},{default:c((()=>[r(n,{type:"primary",status:"danger",size:"mini"},{icon:c((()=>[r(ee)])),default:c((()=>[t[15]||(t[15]=u("span",null,"删除",-1))])),_:1})])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading"])])),_:1}),r(a,{ref_key:"AddMenuModalRef",ref:A,menus:p(U),onSaveSuccess:p(N)},null,8,["menus","onSaveSuccess"])])}}});export{V as default};
