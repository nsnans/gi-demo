import{d as e,g as a,N as l,z as o,r as n,o as s,e as t,w as d,a as i,u as r,H as u,_ as m}from"./index-06cb2dae.js";const f=m(e({__name:"index",props:{fileInfo:{},onClose:{}},setup(e){const m=e,f=a(!1),v=l({name:""});o((()=>{var e;v.name=(null==(e=m.fileInfo)?void 0:e.name)||"",f.value=!0}));const p=()=>{f.value=!1,m.onClose&&m.onClose()},c=a(null),_=async()=>{var e;return!(await(null==(e=c.value)?void 0:e.validate()))&&await new Promise((e=>setTimeout((()=>{e(!0)}),2e3)))};return(e,a)=>{const l=n("a-input"),o=n("a-form-item"),m=n("a-form"),w=n("a-row"),b=n("a-modal");return s(),t(b,{title:"重命名",width:"500px",visible:r(f),"onUpdate:visible":a[1]||(a[1]=e=>u(f)?f.value=e:null),"modal-animation-name":"el-fade",onClose:p,onBeforeOk:_},{default:d((()=>[i(w,{justify:"center",align:"center"},{default:d((()=>[i(m,{ref_key:"FormRef",ref:c,model:r(v),style:{width:"80%"}},{default:d((()=>[i(o,{field:"name",label:"文件名称",rules:[{required:!0,message:"请输入文件名称"}]},{default:d((()=>[i(l,{modelValue:r(v).name,"onUpdate:modelValue":a[0]||(a[0]=e=>r(v).name=e),placeholder:"请输入","allow-clear":""},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1},8,["visible"])}}}),[["__scopeId","data-v-db720943"]]);export{f as default};