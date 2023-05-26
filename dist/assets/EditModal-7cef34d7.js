import{O as T,P as D}from"./regexp-7291c1d5.js";import{d as Q,Q as A,g as f,l as k,r as a,o as V,e as G,w as e,a as t,u as n,f as c,n as H,c as J,F as K,b as W,h as i,t as X,L as Y,P as Z,p as $,j as ee,_ as te}from"./index-d92c8974.js";const h=d=>($("data-v-e5225c5f"),d=d(),ee(),d),ae=h(()=>i("div",null,"仅支持中文姓名",-1)),oe=h(()=>i("span",null,"权限配置",-1)),le=h(()=>i("span",null,"自定义管理员、编辑者的权限， 点击",-1)),ne=Q({__name:"EditModal",setup(d,{expose:C}){const s=A({name:"",phone:"",status:!1}),v={name:[{required:!0,message:"请输入姓名"},{match:T,message:"只能是中文姓名"},{minLength:1,maxLength:4,message:"名字最长不超过4个字符"}],phone:[{match:D,message:"手机号格式不正确"}],status:[{required:!0}]},E=[{name:"新增"},{name:"编辑"},{name:"重命名"},{name:"分享"},{name:"删除"}],u=f(!1),r=f(""),g=k(()=>!!r.value),I=k(()=>g.value?"编辑":"新增"),b=f(),M=async()=>{var o;return await((o=b.value)==null?void 0:o.validate())?!1:(await new Promise(_=>setTimeout(_,1500)),Z.success(g.value?"编辑成功":"新增成功"),!0)};return C({add:()=>{r.value="",u.value=!0},edit:m=>{r.value=m,u.value=!0}}),(m,o)=>{const _=a("a-input"),p=a("a-form-item"),x=a("a-radio"),q=a("a-radio-group"),B=a("a-form"),y=a("a-row"),L=a("icon-question-circle-fill"),P=a("a-link"),S=a("a-tooltip"),U=a("a-space"),j=a("icon-right"),w=a("a-checkbox"),N=a("a-checkbox-group"),R=a("a-collapse-item"),z=a("a-collapse"),F=a("a-modal");return V(),G(F,{visible:n(u),"onUpdate:visible":o[3]||(o[3]=l=>Y(u)?u.value=l:null),title:n(I),"on-before-ok":M},{default:e(()=>[t(y,{justify:"center"},{default:e(()=>[t(B,{ref_key:"formRef",ref:b,model:n(s),size:"medium","auto-label-width":"",style:{width:"auto"}},{default:e(()=>[t(p,{field:"name",label:"姓名",rules:v.name},{extra:e(()=>[ae]),default:e(()=>[t(_,{modelValue:n(s).name,"onUpdate:modelValue":o[0]||(o[0]=l=>n(s).name=l),placeholder:"请输入姓名",style:{width:"300px"}},null,8,["modelValue"])]),_:1},8,["rules"]),t(p,{field:"phone",label:"手机号"},{default:e(()=>[t(_,{modelValue:n(s).phone,"onUpdate:modelValue":o[1]||(o[1]=l=>n(s).phone=l),placeholder:"请输入手机号",style:{width:"300px"}},null,8,["modelValue"])]),_:1}),t(p,{field:"status",label:"状态",rules:v.status},{default:e(()=>[t(q,{modelValue:n(s).status,"onUpdate:modelValue":o[2]||(o[2]=l=>n(s).status=l)},{default:e(()=>[t(x,{value:!1},{default:e(()=>[c("关闭")]),_:1}),t(x,{value:!0},{default:e(()=>[c("开启")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["model"])]),_:1}),t(z,{bordered:!1,"default-active-key":["1"]},{default:e(()=>[t(R,{"show-expand-icon":!0,key:"1"},{header:e(()=>[t(U,null,{default:e(()=>[oe,t(S,{position:"right","content-style":{width:"200px"}},{content:e(()=>[le,t(P,{type:"primary",hoverable:!1},{default:e(()=>[c("了解更多权限")]),_:1})]),default:e(()=>[t(L,{style:{color:"rgb(var(--warning-6))"}})]),_:1})]),_:1})]),"expand-icon":e(({active:l})=>[t(j,{class:H({gi_rotate_90deg:l})},null,8,["class"])]),default:e(()=>[(V(),J(K,null,W(E,(l,O)=>t(y,{justify:"space-between",key:O},{default:e(()=>[i("span",null,X(l.name),1),t(N,null,{default:e(()=>[t(w,{value:"1"},{default:e(()=>[c("管理员")]),_:1}),t(w,{value:"2"},{default:e(()=>[c("编辑者")]),_:1})]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["visible","title"])}}});const _e=te(ne,[["__scopeId","data-v-e5225c5f"]]);export{_e as default};