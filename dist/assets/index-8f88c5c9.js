import{d as e,O as l,g as a,r as t,eN as d,o as u,c as i,a as n,w as o,u as s,W as r,f as c,X as p,e as f,t as m,h as _,D as g,p as x,j as v,_ as h}from"./index-6dde5c99.js";import{u as y}from"./usePagination-83bbdfb7.js";import{g as b}from"./index-5c7b9724.js";const w=e=>(x("data-v-49ceee47"),e=e(),v(),e),z={class:"table-page"},V={class:"gi_table_box gi_mt"},k=w((()=>_("span",null,"编辑",-1))),C=w((()=>_("span",null,"详情",-1))),P=w((()=>_("span",null,"删除",-1))),S=h(e({name:"TableMain",__name:"index",setup(e){const x=l({value1:"",value2:"",value3:"",value4:"",value5:""}),v=a(!1),h=a([]),w=a(!1),{current:S,pageSize:j,total:U,changeCurrent:T,changePageSize:I,setTotal:W}=y((()=>D())),D=async()=>{try{v.value=!0;const e=await b({current:S.value,pageSize:j.value});h.value=e.data.list,W(e.data.total)}catch(e){}finally{v.value=!1}};return D(),(e,l)=>{const a=t("a-input"),y=t("a-form-item"),b=t("a-col"),W=t("a-option"),M=t("a-select"),N=t("a-date-picker"),O=t("icon-search"),X=t("a-button"),q=t("icon-up"),A=t("icon-down"),B=t("a-space"),E=t("a-row"),F=t("a-form"),G=t("a-table-column"),H=t("a-avatar"),J=t("a-typography-text"),K=t("a-popconfirm"),L=t("a-table"),Q=d("hasPerm");return u(),i("div",z,[n(F,{"label-align":"right","auto-label-width":"",model:s(x),class:"form"},{default:o((()=>[n(E,{gutter:16,wrap:""},{default:o((()=>[n(b,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:o((()=>[n(y,{field:"value1",label:"姓名"},{default:o((()=>[n(a,{modelValue:s(x).value1,"onUpdate:modelValue":l[0]||(l[0]=e=>s(x).value1=e),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1})])),_:1}),n(b,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:o((()=>[n(y,{field:"value2",label:"手机"},{default:o((()=>[n(a,{modelValue:s(x).value2,"onUpdate:modelValue":l[1]||(l[1]=e=>s(x).value2=e),placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1})])),_:1}),r(n(b,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:o((()=>[n(y,{field:"value3",label:"类型"},{default:o((()=>[n(M,{placeholder:"请选择"},{default:o((()=>[n(W,null,{default:o((()=>[c("北京")])),_:1}),n(W,null,{default:o((()=>[c("上海")])),_:1}),n(W,null,{default:o((()=>[c("广州")])),_:1})])),_:1})])),_:1})])),_:1},512),[[p,s(w)]]),r(n(b,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:o((()=>[n(y,{field:"value3",label:"时间"},{default:o((()=>[n(N,{"show-time":"",modelValue:s(x).value3,"onUpdate:modelValue":l[2]||(l[2]=e=>s(x).value3=e),placeholder:"请选择创建时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1},512),[[p,s(w)]]),r(n(b,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:o((()=>[n(y,{field:"value4",label:"状态"},{default:o((()=>[n(M,{placeholder:"请选择"},{default:o((()=>[n(W,null,{default:o((()=>[c("开启")])),_:1}),n(W,null,{default:o((()=>[c("关闭")])),_:1})])),_:1})])),_:1})])),_:1},512),[[p,s(w)]]),r(n(b,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:o((()=>[n(y,{field:"value5",label:"地址"},{default:o((()=>[n(a,{modelValue:s(x).value5,"onUpdate:modelValue":l[3]||(l[3]=e=>s(x).value5=e),placeholder:"请输入查询地址"},null,8,["modelValue"])])),_:1})])),_:1},512),[[p,s(w)]]),n(b,{span:12},{default:o((()=>[n(B,null,{default:o((()=>[n(X,{type:"primary",onClick:D},{icon:o((()=>[n(O)])),default:o((()=>[c("查询")])),_:1}),n(X,null,{default:o((()=>[c("重置")])),_:1}),n(X,{type:"text",class:"collapsed-btn",onClick:l[4]||(l[4]=e=>w.value=!s(w))},{icon:o((()=>[s(w)?(u(),f(q,{key:0})):(u(),f(A,{key:1}))])),default:o((()=>[c(m(s(w)?"收起":"展开"),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),_("div",V,[n(L,{"row-key":"id",size:"small","page-position":"bottom",bordered:{cell:!0},loading:s(v),data:s(h),scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:{showPageSize:!0,total:s(U),current:s(S),pageSize:s(j)},onPageChange:s(T),onPageSizeChange:s(I)},{columns:o((()=>[n(G,{title:"序号",width:66,align:"center"},{cell:o((e=>[c(m(e.rowIndex+1),1)])),_:1}),n(G,{title:"姓名","data-index":"name",width:120}),n(G,{title:"头像",width:80},{cell:o((({record:e})=>[n(H,{size:30,style:g({backgroundColor:e.color})},{default:o((()=>[c(m(e.name[0]),1)])),_:2},1032,["style"])])),_:1}),n(G,{title:"手机号","data-index":"phone",width:150}),n(G,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),n(G,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),n(G,{title:"状态",width:100,align:"center"},{cell:o((({record:e})=>[e.status?(u(),f(J,{key:0,type:"success"},{default:o((()=>[c("开启")])),_:1})):(u(),f(J,{key:1,type:"danger"},{default:o((()=>[c("关闭")])),_:1}))])),_:1}),n(G,{title:"操作",width:200,align:"left"},{cell:o((({record:e})=>[n(B,null,{default:o((()=>[r((u(),f(X,{type:"primary",size:"mini"},{default:o((()=>[k])),_:1})),[[Q,["table:btn:edit"]]]),n(X,{size:"mini"},{default:o((()=>[C])),_:1}),n(K,{type:"warning",content:"您确定要删除该项吗?"},{default:o((()=>[n(X,{type:"primary",status:"danger",size:"mini"},{default:o((()=>[P])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination","onPageChange","onPageSizeChange"])])])}}}),[["__scopeId","data-v-49ceee47"]]);export{S as default};