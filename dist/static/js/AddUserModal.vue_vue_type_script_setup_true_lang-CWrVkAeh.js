import{E as e,a as l}from"./regexp-LyZ7ySAN.js";import{b as a,d,k as t,J as s,e as o,o as i,c as u,w as m,h as r,g as n,fb as c,fc as f,G as p,H as h,U as b}from"./index-CCeV6cKV.js";import{g}from"./user-CQdVQ00l.js";import{s as v}from"./index-Co7QgDPz.js";import{u as V}from"./useDept-Less4jer.js";import{b as x}from"./role-fZjxsgGB.js";import{u as _}from"./useForm-DVHp7bfp.js";const w=d({__name:"AddUserModal",emits:["save-success"],setup(d,{expose:w,emit:k}){const y=k,{roleList:U,getRoleList:I}=function(){const e=a(!1),l=a([]),d=a(0);return{roleList:l,getRoleList:async()=>{try{e.value=!0;const a=await x({page:1,size:99});l.value=a.data.records.filter((e=>1===e.status)),d.value=a.data.total}finally{e.value=!1}},loading:e,total:d}}();I();const j=t((()=>U.value.map((e=>({label:e.name,value:e.code}))))),{deptList:L,getDeptList:M}=V();M();const q={xs:24,sm:24,md:12,lg:12,xl:12,xxl:12},R=s("formRef"),z=a(""),F=t((()=>!!z.value)),D=t((()=>F.value?"编辑用户":"新增用户")),H=a(!1),{form:O,resetForm:W}=_({id:"",username:"",nickname:"",gender:1,phone:"",email:"",deptId:"",roleIds:[],description:"",status:1,type:2,disabled:!1}),A={username:[{required:!0,message:"请输入用户名"},{min:2,max:4,message:"长度在 2 - 4个字符"}],nickname:[{required:!0,message:"请输入昵称"},{min:2,max:4,message:"长度在 2 - 4个字符"}],email:[{match:e,message:"邮箱格式不正确"}],phone:[{match:l,message:"手机号格式不正确"}],deptId:[{required:!0,message:"请选择所属部门"}],roleIds:[{required:!0,message:"请选择角色"}],status:[{required:!0,message:"请选择状态"}]},B=()=>{var e;null==(e=R.value)||e.resetFields(),W()};w({add:()=>{z.value="",H.value=!0},edit:async e=>{H.value=!0,z.value=e;const l=await g({id:e});Object.assign(O,l.data)}});const C=async()=>{var e;try{if(await(null==(e=R.value)?void 0:e.validate()))return!1;return!!(await v(O)).data&&(b.success("模拟保存成功"),y("save-success"),!0)}catch(l){return!1}};return(e,l)=>{const a=o("a-input"),d=o("a-form-item"),t=o("a-col"),s=o("a-row"),b=o("a-radio"),g=o("a-radio-group"),v=o("a-tree-select"),V=o("a-select"),x=o("a-textarea"),_=o("a-switch"),w=o("a-form"),k=o("a-modal");return i(),u(k,{visible:n(H),"onUpdate:visible":l[9]||(l[9]=e=>h(H)?H.value=e:null),title:n(D),width:"90%","mask-closable":!1,"modal-style":{maxWidth:"600px"},"body-style":{maxHeight:"70vh"},onBeforeOk:C,onClose:B},{default:m((()=>[r(w,{ref_key:"formRef",ref:R,model:n(O),rules:A,size:"medium","auto-label-width":""},{default:m((()=>[r(s,null,{default:m((()=>[r(t,c(f(q)),{default:m((()=>[r(d,{label:"用户名",field:"username"},{default:m((()=>[r(a,{modelValue:n(O).username,"onUpdate:modelValue":l[0]||(l[0]=e=>n(O).username=e),modelModifiers:{trim:!0},placeholder:"请输入用户名","allow-clear":"",disabled:n(O).disabled,"max-length":10},null,8,["modelValue","disabled"])])),_:1})])),_:1},16),r(t,c(f(q)),{default:m((()=>[r(d,{label:"昵称",field:"nickname"},{default:m((()=>[r(a,{modelValue:n(O).nickname,"onUpdate:modelValue":l[1]||(l[1]=e=>n(O).nickname=e),modelModifiers:{trim:!0},placeholder:"请输入昵称","allow-clear":"","max-length":10},null,8,["modelValue"])])),_:1})])),_:1},16),r(t,c(f(q)),{default:m((()=>[r(d,{label:"手机号码",field:"phone"},{default:m((()=>[r(a,{modelValue:n(O).phone,"onUpdate:modelValue":l[2]||(l[2]=e=>n(O).phone=e),modelModifiers:{trim:!0},placeholder:"请输入手机号码","allow-clear":"","max-length":11},null,8,["modelValue"])])),_:1})])),_:1},16),r(t,c(f(q)),{default:m((()=>[r(d,{label:"邮箱",field:"email"},{default:m((()=>[r(a,{modelValue:n(O).email,"onUpdate:modelValue":l[3]||(l[3]=e=>n(O).email=e),modelModifiers:{trim:!0},placeholder:"请输入邮箱","allow-clear":"","max-length":30},null,8,["modelValue"])])),_:1})])),_:1},16)])),_:1}),r(d,{label:"性别",field:"gender"},{default:m((()=>[r(g,{modelValue:n(O).gender,"onUpdate:modelValue":l[4]||(l[4]=e=>n(O).gender=e)},{default:m((()=>[r(b,{value:1},{default:m((()=>l[10]||(l[10]=[p("男")]))),_:1}),r(b,{value:2},{default:m((()=>l[11]||(l[11]=[p("女")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),r(d,{label:"所属部门",field:"deptId"},{default:m((()=>[r(v,{modelValue:n(O).deptId,"onUpdate:modelValue":l[5]||(l[5]=e=>n(O).deptId=e),data:n(L),"field-names":{key:"id",title:"name"},placeholder:"请选择所属部门","allow-clear":"","allow-search":"",disabled:n(O).disabled},null,8,["modelValue","data","disabled"])])),_:1}),r(d,{label:"角色",field:"roleIds",disabled:n(O).disabled},{default:m((()=>[r(V,{modelValue:n(O).roleIds,"onUpdate:modelValue":l[6]||(l[6]=e=>n(O).roleIds=e),options:n(j),placeholder:"请选择所属角色",multiple:"","allow-clear":"","allow-search":{retainInputValue:!0}},null,8,["modelValue","options"])])),_:1},8,["disabled"]),r(d,{label:"描述",field:"description"},{default:m((()=>[r(x,{modelValue:n(O).description,"onUpdate:modelValue":l[7]||(l[7]=e=>n(O).description=e),modelModifiers:{trim:!0},"max-length":200,placeholder:"请填写描述","auto-size":{minRows:3},"show-word-limit":""},null,8,["modelValue"])])),_:1}),r(d,{label:"状态",field:"status"},{default:m((()=>[r(_,{modelValue:n(O).status,"onUpdate:modelValue":l[8]||(l[8]=e=>n(O).status=e),type:"round","checked-value":1,"unchecked-value":0,"checked-text":"正常","unchecked-text":"禁用"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{w as _};
