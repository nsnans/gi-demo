import{d as e,J as a,b as l,k as t,e as s,o as d,c as o,w as i,h as u,g as r,H as m,U as n}from"./index-CCeV6cKV.js";import{u as c}from"./useForm-DVHp7bfp.js";import{u as p,g as f}from"./useDept-Less4jer.js";import{s as v}from"./index-Co7QgDPz.js";const h=e({__name:"AddDeptModal",emits:["save-success"],setup(e,{expose:h,emit:V}){const w=V,b=a("formRef"),x=l(""),_=l(!1),k=t((()=>!!x.value)),g=t((()=>k.value?"编辑部门":"新增部门")),{deptList:y,getDeptList:U}=p();U();const{form:j,resetForm:I}=c({id:"",parentId:"",name:"",sort:0,status:1,description:""}),D={name:[{required:!0,message:"请输入部门名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}]},F=()=>{var e;null==(e=b.value)||e.resetFields(),I()};h({add:()=>{x.value="",_.value=!0},edit:async e=>{y.value.length||await U(),x.value=e,_.value=!0;const a=await f({id:e});Object.assign(j,a.data)}});const M=async()=>{var e;try{if(await(null==(e=b.value)?void 0:e.validate()))return!1;return!!(await v(j)).data&&(n.success("模拟保存成功"),w("save-success"),!0)}catch(a){return!1}};return(e,a)=>{const l=s("a-tree-select"),t=s("a-form-item"),n=s("a-input"),c=s("a-input-number"),p=s("a-textarea"),f=s("a-switch"),v=s("a-form"),h=s("a-modal");return d(),o(h,{visible:r(_),"onUpdate:visible":a[5]||(a[5]=e=>m(_)?_.value=e:null),title:r(g),width:"90%","modal-style":{maxWidth:"520px"},"mask-closable":!1,onBeforeOk:M,onClose:F},{default:i((()=>[u(v,{ref_key:"formRef",ref:b,model:r(j),rules:D,size:"medium","auto-label-width":""},{default:i((()=>[u(t,{label:"上级部门",field:"parentId"},{default:i((()=>[u(l,{modelValue:r(j).parentId,"onUpdate:modelValue":a[0]||(a[0]=e=>r(j).parentId=e),"allow-clear":"",data:r(y),placeholder:"请选择上级部门","field-names":{key:"id",title:"name",children:"children"}},null,8,["modelValue","data"])])),_:1}),u(t,{label:"部门名称",field:"name"},{default:i((()=>[u(n,{modelValue:r(j).name,"onUpdate:modelValue":a[1]||(a[1]=e=>r(j).name=e),modelModifiers:{trim:!0},placeholder:"请输入部门名称","allow-clear":"","max-length":10},null,8,["modelValue"])])),_:1}),u(t,{label:"排序",field:"sort"},{default:i((()=>[u(c,{modelValue:r(j).sort,"onUpdate:modelValue":a[2]||(a[2]=e=>r(j).sort=e),style:{width:"120px"}},null,8,["modelValue"])])),_:1}),u(t,{label:"描述",field:"description"},{default:i((()=>[u(p,{modelValue:r(j).description,"onUpdate:modelValue":a[3]||(a[3]=e=>r(j).description=e),modelModifiers:{trim:!0},"max-length":200,placeholder:"请填写描述","auto-size":{minRows:3},"show-word-limit":""},null,8,["modelValue"])])),_:1}),u(t,{label:"状态",field:"status"},{default:i((()=>[u(f,{modelValue:r(j).status,"onUpdate:modelValue":a[4]||(a[4]=e=>r(j).status=e),type:"round","checked-value":1,"unchecked-value":0,"checked-text":"正常","unchecked-text":"禁用"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{h as _};
