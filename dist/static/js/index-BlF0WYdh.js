import{_ as e}from"./index-DKPnCvLQ.js";import{O as a,a as l}from"./regexp-CZKnpGWl.js";import{d,e as o,V as t,I as u,f as s,o as r,a as m,w as n,i,D as f,h as p,W as c,g as _,b as V,M as b,_ as h}from"./index-CTftGuoI.js";import{u as y}from"./useDict-CqZsxzDW.js";const g={key:0},x=h(d({name:"FormBase",__name:"index",setup(d){const{data:h}=y({code:"hobbys"}),x=o([{key:"01",title:"XXX学校",children:[{key:"011",title:"组织部"},{key:"012",title:"宣传部"}]}]),w=t({name:"",phone:"",age:"",sex:1,birthday:"",education:1,rangDate:[],dept:[],hobbys:[],isRead:!1}),v={name:[{required:!0,message:"请输入姓名"},{maxLength:4,message:"姓名不超过4个字符"},{match:a,message:"仅支持中文姓名"}],phone:[{required:!0,message:"请输入手机号"},{match:l,message:"手机号格式不正确"}],sex:[{required:!0,message:"请选择性别"}]},k=u("formRef"),U=()=>{var e;null==(e=k.value)||e.resetFields()},j=async()=>{var e;await(null==(e=k.value)?void 0:e.validate())||b.success("提交通过")};return(a,l)=>{const d=s("a-button"),o=s("a-input"),t=s("a-typography-text"),u=s("a-form-item"),b=s("a-radio"),y=s("a-radio-group"),D=s("a-col"),R=s("a-date-picker"),q=s("a-row"),X=s("a-tree-select"),C=s("a-option"),F=s("a-select"),I=s("a-range-picker"),O=s("a-checkbox"),z=s("a-space"),B=s("a-form"),J=e,L=s("a-card");return r(),m(L,{title:"基础表单",class:"gi_card gi_margin flex-1","body-style":{overflowY:"auto"}},{extra:n((()=>[i(d,null,{default:n((()=>l[10]||(l[10]=[f("返回")]))),_:1})])),default:n((()=>[i(z,{wrap:"",size:30},{default:n((()=>[i(B,{ref_key:"formRef",ref:k,model:p(w),rules:v,"auto-label-width":"",class:"form-base__form"},{default:n((()=>[i(u,{label:"姓名",field:"name"},{extra:n((()=>[i(t,{type:"secondary"},{default:n((()=>l[11]||(l[11]=[f("请输入中文姓名")]))),_:1})])),default:n((()=>[i(o,{modelValue:p(w).name,"onUpdate:modelValue":l[0]||(l[0]=e=>p(w).name=e),placeholder:"请输入姓名","allow-clear":""},null,8,["modelValue"])])),_:1}),i(u,{label:"手机号",field:"phone"},{default:n((()=>[i(o,{modelValue:p(w).phone,"onUpdate:modelValue":l[1]||(l[1]=e=>p(w).phone=e),placeholder:"请输入手机号","allow-clear":""},null,8,["modelValue"])])),_:1}),i(u,{label:"年龄",field:"age"},{default:n((()=>[i(o,{modelValue:p(w).age,"onUpdate:modelValue":l[2]||(l[2]=e=>p(w).age=e),placeholder:"请输入年龄","allow-clear":""},null,8,["modelValue"])])),_:1}),i(q,null,{default:n((()=>[i(D,{xs:24,sm:24,md:12},{default:n((()=>[i(u,{label:"性别",field:"sex"},{default:n((()=>[i(y,{modelValue:p(w).sex,"onUpdate:modelValue":l[3]||(l[3]=e=>p(w).sex=e),"allow-clear":""},{default:n((()=>[i(b,{value:1},{default:n((()=>l[12]||(l[12]=[f("男")]))),_:1}),i(b,{value:2},{default:n((()=>l[13]||(l[13]=[f("女")]))),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(D,{xs:24,sm:24,md:12},{default:n((()=>[i(u,{label:"生日",field:"birthday"},{default:n((()=>[i(R,{modelValue:p(w).birthday,"onUpdate:modelValue":l[4]||(l[4]=e=>p(w).birthday=e),placeholder:"请选择出生日期","allow-clear":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(u,{label:"部门",field:"dept"},{default:n((()=>[i(X,{modelValue:p(w).dept,"onUpdate:modelValue":l[5]||(l[5]=e=>p(w).dept=e),data:p(x),multiple:"",placeholder:"请选择部门","allow-clear":""},null,8,["modelValue","data"])])),_:1}),i(u,{label:"学历",field:"education"},{default:n((()=>[i(F,{modelValue:p(w).education,"onUpdate:modelValue":l[6]||(l[6]=e=>p(w).education=e),placeholder:"请选择学历","allow-clear":"",style:{width:"120px"}},{default:n((()=>[i(C,{value:1},{default:n((()=>l[14]||(l[14]=[f("本科")]))),_:1}),i(C,{value:2},{default:n((()=>l[15]||(l[15]=[f("大专")]))),_:1}),i(C,{value:3},{default:n((()=>l[16]||(l[16]=[f("硕士")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),i(u,{label:"在校日期范围",field:"rangDate"},{default:n((()=>[i(I,{modelValue:p(w).rangDate,"onUpdate:modelValue":l[7]||(l[7]=e=>p(w).rangDate=e),"allow-clear":""},null,8,["modelValue"])])),_:1}),i(u,{label:"爱好",field:"hobbys",extra:"这里的数据采用了数据字典"},{default:n((()=>[i(F,{modelValue:p(w).hobbys,"onUpdate:modelValue":l[8]||(l[8]=e=>p(w).hobbys=e),options:p(h),placeholder:"请选择爱好",multiple:"","allow-clear":""},null,8,["modelValue","options"])])),_:1}),i(u,{field:"isRead"},{default:n((()=>[i(O,{modelValue:p(w).isRead,"onUpdate:modelValue":l[9]||(l[9]=e=>p(w).isRead=e)},{default:n((()=>l[17]||(l[17]=[f("我已阅读")]))),_:1},8,["modelValue"])])),_:1}),i(u,null,{default:n((()=>[i(z,null,{default:n((()=>[i(d,{onClick:U},{default:n((()=>l[18]||(l[18]=[f("重置")]))),_:1}),i(d,{type:"primary",onClick:j},{default:n((()=>l[19]||(l[19]=[f("提交")]))),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),p(c)()?V("",!0):(r(),_("section",g,[i(J,{"code-json":JSON.stringify(p(w),null,"\t")},null,8,["code-json"])]))])),_:1})])),_:1})}}}),[["__scopeId","data-v-97e8683f"]]);export{x as default};
