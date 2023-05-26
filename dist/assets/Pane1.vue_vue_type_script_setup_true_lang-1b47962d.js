import{N as ie,O as re,d as P,r as n,o as l,e as d,i as O,w as t,a as e,p as _e,j as de,h as y,_ as J,g as C,c as B,u as i,L as pe,t as N,C as ue,P as A,J as me,Q as fe,R as he,S as ge,E as G,f as V,F as L,b as j,U as ye}from"./index-d92c8974.js";import{u as ve}from"./usePagination-e302e7d1.js";import ke from"./EditModal-7cef34d7.js";import{g as we}from"./index-d5d51e07.js";import{S as F}from"./person-ff3306fc.js";function xe(){return ie.get(`${re}/cate/tree`)}const K=P({__name:"TreeSwitcherIcon",props:{expanded:{type:Boolean},hasChildren:{type:Boolean}},setup(v){return(h,p)=>{const f=O,a=n("icon-drive-file");return h.hasChildren&&h.expanded?(l(),d(f,{key:0,class:"switcher-icon",name:"plus-square",size:16})):h.hasChildren&&!h.expanded?(l(),d(f,{key:1,class:"switcher-icon",name:"minus-square",size:16,style:{transform:"rotate(0deg)"}})):(l(),d(a,{key:2,size:16}))}}}),U=v=>(_e("data-v-a9b7b123"),v=v(),de(),v),Ce=U(()=>y("span",null,"新增",-1)),be=U(()=>y("span",null,"编辑",-1)),ze=U(()=>y("span",null,"移动",-1)),$e=U(()=>y("span",null,"删除",-1)),Se=P({__name:"RightMenu",props:{treeData:{}},emits:["click"],setup(v,{emit:h}){const p=f=>{h("click",f)};return(f,a)=>{const g=n("icon-plus-circle"),u=n("a-menu-item"),M=n("icon-edit"),k=n("icon-export"),R=n("icon-right"),r=n("a-space"),w=O,I=n("a-tree"),D=n("a-scrollbar"),b=n("a-popover"),T=n("icon-delete"),z=n("a-menu");return l(),d(z,{class:"menu"},{default:t(()=>[e(u,{onClick:a[0]||(a[0]=_=>p("add"))},{icon:t(()=>[e(g,{size:16,"stroke-width":3})]),default:t(()=>[Ce]),_:1}),e(u,{onClick:a[1]||(a[1]=_=>p("edit"))},{icon:t(()=>[e(M,{size:16,"stroke-width":3})]),default:t(()=>[be]),_:1}),e(b,{position:"right",trigger:"click","content-style":{padding:0,overflow:"hidden"},"unmount-on-close":!1},{content:t(()=>[e(D,{style:{height:"100%",overflow:"auto"},"outer-style":"width: 260px;height: 500px"},{default:t(()=>[e(I,{ref:"treeMoveRef","show-line":"",size:"mini",data:f.treeData[0].children,fieldNames:{key:"id",title:"name"}},{"switcher-icon":t((_,{checked:m,selected:o,expanded:c})=>[e(K,{expanded:c,"has-children":!!(_.children&&_.children.length)},null,8,["expanded","has-children"])]),icon:t(_=>[_.children?_.children?(l(),d(w,{key:1,name:"com-file-open",size:16})):(l(),d(w,{key:2,name:"com-file",size:16})):(l(),d(w,{key:0,name:"com-file-close",size:16}))]),_:1},8,["data"])]),_:1})]),default:t(()=>[e(u,{onClick:a[2]||(a[2]=_=>p("move"))},{icon:t(()=>[e(k,{size:16,"stroke-width":3})]),default:t(()=>[e(r,{size:18},{default:t(()=>[ze,e(R)]),_:1})]),_:1})]),_:1}),e(u,{onClick:a[3]||(a[3]=_=>p("delete"))},{icon:t(()=>[e(T,{size:16,"stroke-width":3})]),default:t(()=>[$e]),_:1})]),_:1})}}});const Ve=J(Se,[["__scopeId","data-v-a9b7b123"]]),Me={class:"cate-tree"},Re={class:"search-wrap"},Ie={class:"wrap"},De=P({__name:"index",props:{type:{default:1},placeholder:{default:"请输入关键词"}},emits:["node-click"],setup(v,{emit:h}){const p=v,f=C(!1),a=C(),g=C(""),u=C([]),M=()=>{h("node-click")};(async()=>{try{f.value=!0;const r=await xe();u.value=r.data,ue(()=>{a.value.expandAll()})}catch(r){return r}finally{f.value=!1}})();const R=r=>{r!=="move"&&A.info(r)};return(r,w)=>{const I=n("icon-search"),D=n("a-input"),b=O,T=n("a-trigger"),z=n("a-tree"),_=n("a-scrollbar");return l(),B("div",Me,[y("div",Re,[e(D,{"allow-clear":"",maxlength:20,placeholder:p.placeholder,modelValue:i(g),"onUpdate:modelValue":w[0]||(w[0]=m=>pe(g)?g.value=m:null)},{prefix:t(()=>[e(I)]),_:1},8,["placeholder","modelValue"])]),y("div",Ie,[e(_,{style:{height:"100%",overflow:"auto"},"outer-style":"height: 100%"},{default:t(()=>[e(z,{ref_key:"treeRef",ref:a,"show-line":"",size:"mini",data:i(u),fieldNames:{key:"id"},onSelect:M},{"switcher-icon":t((m,{checked:o,selected:c,expanded:E})=>[e(K,{expanded:E,"has-children":!!(m.children&&m.children.length)},null,8,["expanded","has-children"])]),icon:t(m=>[m.children?m.children?(l(),d(b,{key:1,name:"com-file-open",size:16})):(l(),d(b,{key:2,name:"com-file",size:16})):(l(),d(b,{key:0,name:"com-file-close",size:16}))]),title:t(m=>[e(T,{trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":""},{content:t(()=>[e(Ve,{"tree-data":i(u),onClick:R},null,8,["tree-data"])]),default:t(()=>[y("div",null,N(m.name),1)]),_:2},1024)]),_:1},8,["data"])]),_:1})])])}}});const Te=J(De,[["__scopeId","data-v-2b2a084c"]]),Be={class:"data-pane"},Ee={class:"content"},Ne={class:"table-box"},Oe=P({__name:"Pane1",setup(v){const h=me(),{pagination:p,setTotal:f}=ve(()=>k()),a=fe({name:"",status:""}),g=C([]),u=C(!1),M=o=>o<30?"danger":o<60?"warning":"success",k=async()=>{try{u.value=!0;const o=await we({...a,current:p.current,pageSize:p.pageSize});g.value=o.data.list,f(o.data.total)}catch{}finally{u.value=!1}};he(()=>{k()});const R=()=>{ye.warning({title:"提示",content:"是否确认删除？",hideCancel:!1,onOk:()=>{g.value=[]}})},r=C(),w=()=>{var o;(o=r.value)==null||o.add()},I=o=>{var c;(c=r.value)==null||c.edit(o.id)},D=o=>{h.push({path:"/data/detail",query:{id:o.id}})},b=o=>{A.success("删除成功"),k()},T=()=>{if(!z.value.length)return A.warning("请勾选数据");A.success("点击了导出")},z=C([]),_=o=>{z.value=o},m=o=>{z.value=o?g.value.map(c=>c.id):[]};return(o,c)=>{const E=n("a-card"),Q=n("icon-plus"),x=n("a-button"),W=n("icon-delete"),X=n("icon-export"),q=n("a-space"),H=n("a-option"),Y=n("a-select"),Z=n("a-input"),ee=n("icon-search"),te=n("a-input-group"),ne=n("icon-refresh"),oe=n("a-row"),$=n("a-table-column"),ae=n("a-progress"),se=n("a-tag"),le=n("a-popconfirm"),ce=n("a-table");return l(),B("div",Be,[i(ge).browse().isMobile?G("",!0):(l(),d(E,{key:0,title:"数据分类",bordered:!1,class:"gi_card pane-left"},{default:t(()=>[e(Te,{placeholder:"请输入搜索关键词",onNodeClick:c[0]||(c[0]=s=>i(p).onChange(1))})]),_:1})),e(E,{title:"数据列表",bordered:!1,"header-style":{display:"none"},class:"gi_card pane-right"},{default:t(()=>[y("div",Ee,[e(oe,{justify:"space-between",style:{"margin-bottom":"12px"}},{default:t(()=>[e(q,null,{default:t(()=>[e(x,{type:"primary",onClick:w},{icon:t(()=>[e(Q)]),_:1}),e(x,{type:"primary",status:"danger",onClick:R},{icon:t(()=>[e(W)]),default:t(()=>[V("删除")]),_:1}),e(x,{type:"primary",status:"success",onClick:T},{icon:t(()=>[e(X)]),_:1})]),_:1}),e(q,null,{default:t(()=>[e(Y,{modelValue:i(a).status,"onUpdate:modelValue":c[1]||(c[1]=s=>i(a).status=s),class:"gi_select_input",placeholder:"请选择","allow-clear":""},{default:t(()=>[(l(!0),B(L,null,j(i(F),s=>(l(),d(H,{key:s.value,value:s.value},{default:t(()=>[V(N(s.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(te,null,{default:t(()=>[e(Z,{modelValue:i(a).name,"onUpdate:modelValue":c[2]||(c[2]=s=>i(a).name=s),placeholder:"请输入搜索关键词","allow-clear":""},null,8,["modelValue"]),e(x,{type:"primary",onClick:k},{default:t(()=>[e(ee)]),_:1})]),_:1}),e(x,{type:"primary",onClick:k},{icon:t(()=>[e(ne)]),_:1})]),_:1})]),_:1}),y("section",Ne,[e(ce,{"row-key":"id",size:"small",loading:i(u),bordered:{cell:!0},data:i(g),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:i(p),onSelect:_,onSelectAll:m},{columns:t(()=>[e($,{title:"序号",width:68},{cell:t(s=>[V(N(s.rowIndex+1),1)]),_:1}),e($,{title:"姓名","data-index":"name"}),e($,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),e($,{title:"比例",width:200},{cell:t(({record:s})=>[e(ae,{status:M(s.proportion),percent:s.proportion/100},null,8,["status","percent"])]),_:1}),e($,{title:"状态",width:100,align:"center"},{cell:t(({record:s})=>[(l(!0),B(L,null,j(i(F),S=>(l(),B(L,{key:S.value},[S.value===s.status?(l(),d(se,{key:0,size:"small",color:S.color},{default:t(()=>[V(N(S.name),1)]),_:2},1032,["color"])):G("",!0)],64))),128))]),_:1}),e($,{title:"创建时间","data-index":"createTime",width:180}),e($,{title:"操作",width:200,align:"center",fixed:"right"},{cell:t(({record:s})=>[e(q,null,{default:t(()=>[e(x,{type:"primary",size:"mini",onClick:S=>I(s)},{default:t(()=>[V("修改")]),_:2},1032,["onClick"]),e(x,{size:"mini",onClick:S=>D(s)},{default:t(()=>[V("详情")]),_:2},1032,["onClick"]),e(le,{type:"warning",content:"您确定要删除该项吗?",onOk:S=>b(s.id)},{default:t(()=>[e(x,{type:"primary",status:"danger",size:"mini"},{default:t(()=>[V("删除")]),_:1})]),_:2},1032,["onOk"])]),_:2},1024)]),_:1})]),_:1},8,["loading","data","pagination"])])])]),_:1}),e(ke,{ref_key:"EditModalRef",ref:r},null,512)])}}});export{Oe as _};