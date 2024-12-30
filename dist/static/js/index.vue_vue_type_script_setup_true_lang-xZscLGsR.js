import{_ as e}from"./GiCellStatus.vue_vue_type_script_setup_true_lang--sA3yp3R.js";import{_ as a}from"./AddDictDataModal.vue_vue_type_script_setup_true_lang-DsWN_VRM.js";import{d as l,b as t,J as i,e as n,o as s,c as o,w as d,h as r,i as u,g as c,G as p,t as m,H as _,V as v,f1 as f}from"./index-Df7KX6yp.js";import{d as y}from"./index-MCfVMmJn.js";import{u as g}from"./useBreakpoint-CibouDb6.js";const h=l({__name:"index",setup(l,{expose:h}){const k=t(!1),w=i("AddDictDataModalRef"),x=t(""),{loading:b,tableData:S,pagination:D,selectedKeys:A,search:C,select:j,selectAll:z,handleDelete:M}=g((e=>f({...e,code:x.value})),{immediate:!1}),B=()=>{if(!A.value.length)return v.warning("请选择字典数据！");M((()=>y({ids:A.value})))},W=()=>{var e;null==(e=w.value)||e.add()};return h({open:e=>{S.value=[],x.value=e.code,k.value=!0,C()}}),(l,t)=>{const i=n("icon-plus"),v=n("a-button"),f=n("icon-delete"),g=n("a-space"),h=n("a-row"),G=n("a-table-column"),O=e,R=n("icon-edit"),V=n("a-popconfirm"),H=n("a-table"),I=n("a-modal");return s(),o(I,{visible:c(k),"onUpdate:visible":t[0]||(t[0]=e=>_(k)?k.value=e:null),title:"字典数据",width:"90%","hide-cancel":"","ok-text":"关闭","mask-closable":!1,"modal-style":{maxWidth:"680px"}},{default:d((()=>[r(h,null,{default:d((()=>[r(g,{wrap:""},{default:d((()=>[r(v,{type:"primary",onClick:W},{icon:d((()=>[r(i)])),default:d((()=>[t[1]||(t[1]=u("span",null,"新增",-1))])),_:1}),r(v,{type:"primary",status:"danger",onClick:B},{icon:d((()=>[r(f)])),default:d((()=>[t[2]||(t[2]=u("span",null,"删除",-1))])),_:1})])),_:1})])),_:1}),r(H,{"row-key":"id",size:"small",data:c(S),bordered:{cell:!0},loading:c(b),scroll:{x:"100%",y:"100%",minWidth:600},pagination:{...c(D),size:"small"},"row-selection":{type:"checkbox",showCheckedAll:!0},"selected-keys":c(A),onSelect:c(j),onSelectAll:c(z)},{columns:d((()=>[r(G,{title:"序号",width:64},{cell:d((e=>[p(m(e.rowIndex+1),1)])),_:1}),r(G,{title:"字典名","data-index":"name"}),r(G,{title:"字典值","data-index":"value"}),r(G,{title:"状态",width:100,align:"center"},{cell:d((({record:e})=>[r(O,{status:e.status},null,8,["status"])])),_:1}),r(G,{title:"操作",width:180,align:"center"},{cell:d((({record:e})=>[r(g,null,{default:d((()=>[r(v,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=w.value)||t.edit({id:l.id,code:x.value}));var l,t}},{icon:d((()=>[r(R)])),default:d((()=>[t[3]||(t[3]=u("span",null,"编辑",-1))])),_:2},1032,["onClick"]),r(V,{type:"warning",content:"确定删除该角色吗?",onBeforeOk:a=>{return l=e,M((()=>y({ids:[l.id]})),{showModal:!1});var l}},{default:d((()=>[r(v,{type:"primary",status:"danger",size:"mini"},{icon:d((()=>[r(f)])),default:d((()=>[t[4]||(t[4]=u("span",null,"删除",-1))])),_:1})])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1})])),_:1},8,["data","loading","pagination","selected-keys","onSelect","onSelectAll"]),r(a,{ref_key:"AddDictDataModalRef",ref:w,onSaveSuccess:c(C)},null,8,["onSaveSuccess"])])),_:1},8,["visible"])}}});export{h as _};
