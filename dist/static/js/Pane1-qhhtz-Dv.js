import{_ as e}from"./index-_fogO8Hf.js";import{_ as a}from"./GiEditTable.vue_vue_type_script_setup_true_lang-BIQJOybQ.js";import t from"./FilterAddress-TQ0KgZ_r.js";import{a as s}from"./regexp-LyZ7ySAN.js";import{d as l,b as n,k as i,J as r,h as u,G as d,V as o,e as p,o as c,f as m,w as f,g as v,t as _,i as y,_ as x}from"./index-BUFsz7Wk.js";import{u as g}from"./useDict-7a7D9ELK.js";const h={class:"pane"},w=x(l({name:"FormTable",__name:"Pane1",setup(l){const{data:x}=g({code:"status"}),w=n(!1),b=n([{name:"张三",phone:"",address:"广州市",rate:3,status:0,num:0}]),j=i((()=>JSON.stringify(b.value,null,"\t"))),I=r("GiEditTableRef"),k=i((()=>[{type:"input",title:"姓名",dataIndex:"name",required:!0},{type:"input",title:"手机号",dataIndex:"phone",required:!0,rules:[{match:s,message:"手机号格式不正确"}]},{type:"select",title:"状态",dataIndex:"status",props:{options:x.value}},{type:"rate",title:"评分",dataIndex:"rate",columnProps:{width:200}},{type:"input-number",title:"小数",dataIndex:"num",columnProps:{width:120}},{type:"textarea",title:()=>u(p("a-space"),null,{default:()=>[u("span",null,[d("地址 ")]),u(t,{onConfirm:e=>{o.success(`点击了确认，查询值为: ${e||"空"}`)}},null)]}),dataIndex:"address",props:{autoSize:!0,maxLength:200,showWordLimit:!0},columnProps:{width:250}},{type:"",title:"操作",dataIndex:"action",slotName:"action",columnProps:{width:100,align:"center",fixed:"right"},formItemProps:{contentClass:"arco-table-cell-align-center"}}])),C=()=>{b.value.push({name:"",phone:"",address:"",rate:0,status:0,num:0})},R=()=>{var e,a;w.value=!w.value,w.value&&(null==(a=null==(e=I.value)?void 0:e.formRef)||a.clearValidate())},P=()=>{var e,a,t,s;null==(a=null==(e=I.value)?void 0:e.formRef)||a.resetFields(),null==(s=null==(t=I.value)?void 0:t.formRef)||s.clearValidate()},G=async()=>{var e,a;const t=await(null==(a=null==(e=I.value)?void 0:e.formRef)?void 0:a.validate());if(t){const e=Object.values(t);o.warning(e[0].message)}else o.success("验证通过~")},T=({rowIndex:e,col:a})=>!!w.value||"name"===a.dataIndex&&0===e;return(t,s)=>{const l=p("a-button"),n=p("icon-plus"),i=p("a-space"),r=p("a-row"),o=a,x=e;return c(),m("div",h,[u(r,{justify:"end"},{default:f((()=>[u(i,{wrap:""},{default:f((()=>[u(l,{type:"primary",status:v(w)?"success":"warning",onClick:R},{default:f((()=>[d(_(v(w)?"编辑":"只读"),1)])),_:1},8,["status"]),u(l,{type:"primary",onClick:C},{icon:f((()=>[u(n)])),default:f((()=>[s[0]||(s[0]=y("span",null,"新增",-1))])),_:1})])),_:1})])),_:1}),u(o,{ref_key:"GiEditTableRef",ref:I,scroll:{minWidth:1200},columns:v(k),data:v(b),"cell-disabled":T},{action:f((({rowIndex:e})=>[u(i,null,{default:f((()=>[u(l,{type:"primary",status:"danger",size:"mini",disabled:0===e,onClick:a=>{return t=e,void b.value.splice(t,1);var t}},{default:f((()=>s[1]||(s[1]=[d(" 删除 ")]))),_:2},1032,["disabled","onClick"])])),_:2},1024)])),_:1},8,["columns","data"]),u(r,{justify:"end",class:"gi_mt"},{default:f((()=>[u(i,{wrap:""},{default:f((()=>[u(l,{onClick:P},{default:f((()=>s[2]||(s[2]=[d("重置")]))),_:1}),u(l,{type:"primary",onClick:G},{default:f((()=>s[3]||(s[3]=[d("验证并提交")]))),_:1})])),_:1})])),_:1}),u(x,{"code-json":v(j)},null,8,["code-json"])])}}}),[["__scopeId","data-v-9052a37e"]]);export{w as default};
