import{d as e,J as a,b as l,k as s,e as t,o as d,c as o,w as i,h as u,g as m,H as r,U as n}from"./index-CCeV6cKV.js";import{g as c}from"./role-fZjxsgGB.js";import{s as f}from"./index-Co7QgDPz.js";import{u as p}from"./useForm-DVHp7bfp.js";const v=e({__name:"AddRoleModal",emits:["save-success"],setup(e,{expose:v,emit:h}){const x=h,b=a("formRef"),w=l(""),V=s((()=>!!w.value)),_=s((()=>V.value?"编辑角色":"新增角色")),g=l(!1),{form:k,resetForm:y}=p({name:"",code:"",status:1,description:""}),U={name:[{required:!0,message:"请输入角色名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}],code:[{required:!0,message:"请输入角色编码"},{match:/^[a-zA-Z][a-zA-Z0-9_]*$/,message:"格式不对！只能英文开头，包含英文数字下划线"}],status:[{required:!0}]},j=()=>{var e;null==(e=b.value)||e.resetFields(),y()};v({add:()=>{w.value="",g.value=!0},edit:async e=>{g.value=!0,w.value=e;const a=await c({id:e});Object.assign(k,a.data)}});const R=async()=>{var e;try{if(await(null==(e=b.value)?void 0:e.validate()))return!1;return!!(await f(k)).data&&(n.success("模拟保存成功"),x("save-success"),!0)}catch(a){return!1}};return(e,a)=>{const l=t("a-input"),s=t("a-form-item"),n=t("a-textarea"),c=t("a-switch"),f=t("a-form"),p=t("a-modal");return d(),o(p,{visible:m(g),"onUpdate:visible":a[4]||(a[4]=e=>r(g)?g.value=e:null),title:m(_),width:"90%","mask-closable":!1,"modal-style":{maxWidth:"520px"},onBeforeOk:R,onClose:j},{default:i((()=>[u(f,{ref_key:"formRef",ref:b,model:m(k),rules:U,size:"medium","auto-label-width":""},{default:i((()=>[u(s,{label:"角色名称",field:"name"},{default:i((()=>[u(l,{modelValue:m(k).name,"onUpdate:modelValue":a[0]||(a[0]=e=>m(k).name=e),modelModifiers:{trim:!0},placeholder:"请输入角色名称","allow-clear":"","max-length":10},null,8,["modelValue"])])),_:1}),u(s,{label:"角色编码",field:"code"},{default:i((()=>[u(l,{modelValue:m(k).code,"onUpdate:modelValue":a[1]||(a[1]=e=>m(k).code=e),modelModifiers:{trim:!0},placeholder:"请输入角色编码","allow-clear":"",disabled:m(V),"max-length":10},null,8,["modelValue","disabled"])])),_:1}),u(s,{label:"描述",field:"description"},{default:i((()=>[u(n,{modelValue:m(k).description,"onUpdate:modelValue":a[2]||(a[2]=e=>m(k).description=e),modelModifiers:{trim:!0},placeholder:"请填写描述","max-length":200,"show-word-limit":"","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])])),_:1}),u(s,{label:"状态",field:"status"},{default:i((()=>[u(c,{modelValue:m(k).status,"onUpdate:modelValue":a[3]||(a[3]=e=>m(k).status=e),type:"round","checked-value":1,"unchecked-value":0,"checked-text":"正常","unchecked-text":"禁用"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{v as _};
