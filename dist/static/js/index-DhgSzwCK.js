import{_ as e}from"./index-B-grRd7X.js";import{_ as t}from"./index-DHJNVLwM.js";import{_ as a}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-yzLE9yPk.js";import{_ as i}from"./GiCellGender.vue_vue_type_script_setup_true_lang-DyR0BY3G.js";import{_ as n}from"./GiCellAvatar.vue_vue_type_script_setup_true_lang-cd-51q58.js";import{d as l,e as s,o,f as r,h as d,w as c,I as u,t as p,g as _,V as m,y as f,z as g,i as x,_ as h}from"./index-B2dmbZHS.js";import{u as v}from"./useBreakpoint-Bm9bcxS1.js";import{b as w}from"./index-Czgcw0B6.js";import"./index-DM0jNx4E.js";const k=e=>(f("data-v-40fcf3dd"),e=e(),g(),e),y={class:"table-page"},C=k((()=>x("span",null,"新增",-1))),b=k((()=>x("span",null,"删除",-1))),j=k((()=>x("span",null,"导入",-1))),T=h(l({name:"TableCustom",__name:"index",setup(l){const{tableData:f,getTableData:g,pagination:x,loading:h}=v((e=>w(e))),k=()=>{m.info("点击了新增")},T=()=>{m.info("点击了批量删除")},G=()=>{m.info("点击了导入")},z=()=>new Promise((e=>setTimeout((()=>e(!0)),300)));return(l,v)=>{const w=s("icon-plus"),A=s("a-button"),D=s("icon-delete"),I=s("icon-export"),B=s("a-table-column"),O=n,R=i,V=s("a-tag"),J=a,P=s("a-divider"),S=s("a-link"),U=s("a-popconfirm"),W=s("a-space"),$=t,q=e;return o(),r("div",y,[d($,{"row-key":"id",title:"会员列表",loading:_(h),data:_(f),scroll:{x:"100%",y:"100%",minWidth:1200},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:_(x),onRefresh:_(g)},{"custom-extra":c((()=>[d(A,{type:"primary",onClick:k},{icon:c((()=>[d(w)])),default:c((()=>[C])),_:1}),d(A,{type:"primary",status:"danger",onClick:T},{icon:c((()=>[d(D)])),default:c((()=>[b])),_:1}),d(A,{onClick:G},{icon:c((()=>[d(I)])),default:c((()=>[j])),_:1})])),columns:c((()=>[d(B,{title:"序号",width:66,align:"center"},{cell:c((e=>[u(p(e.rowIndex+1),1)])),_:1}),d(B,{title:"姓名","data-index":"name",width:120},{cell:c((({record:e})=>[d(O,{"is-link":"",avatar:e.avatar,name:e.name,onClick:t=>(e=>{m.success(`点击了${e.name}`)})(e)},null,8,["avatar","name","onClick"])])),_:1}),d(B,{title:"手机号","data-index":"phone",width:150}),d(B,{title:"性别","data-index":"gender",width:100,align:"center"},{cell:c((({record:e})=>[d(R,{gender:e.gender},null,8,["gender"])])),_:1}),d(B,{title:"角色",width:100,align:"center"},{cell:c((()=>[d(V,{size:"small",color:"#7816ff"},{default:c((()=>[u("普通用户")])),_:1})])),_:1}),d(B,{title:"状态",width:100,align:"center"},{cell:c((({record:e})=>[d(J,{status:e.status},null,8,["status"])])),_:1}),d(B,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:"",sortable:{sortDirections:["ascend","descend"]}}),d(B,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),d(B,{title:"操作",width:180,align:"center"},{cell:c((()=>[d(W,null,{split:c((()=>[d(P,{direction:"vertical",margin:0})])),default:c((()=>[d(S,null,{default:c((()=>[u("编辑")])),_:1}),d(S,null,{default:c((()=>[u("详情")])),_:1}),d(U,{type:"warning",content:"您确定要删除该项吗?","ok-button-props":{status:"danger"},onBeforeOk:z},{default:c((()=>[d(S,{status:"danger"},{default:c((()=>[u("删除")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination","onRefresh"]),d(q)])}}}),[["__scopeId","data-v-40fcf3dd"]]);export{T as default};
