import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang-tcmrj1PX.js";import l from"./index-nxNCm1Xl.js";import{b as s,d as t,I as o,L as r,S as i,J as n,f as u,h as d,w as m,n as c,e as p,o as f,i as _,g,K as v,H as w,G as y,U as x,_ as h}from"./index-CCeV6cKV.js";import{P as b}from"./regexp-LyZ7ySAN.js";import"./index-s2taQbvd.js";import"./CornerTop.vue_vue_type_script_setup_true_lang-C7ISBZPy.js";import"./CornerBottom.vue_vue_type_script_setup_true_lang-eJskrIH6.js";const V={class:"login"},j={class:"login-right"},k=h(t({name:"Login",__name:"index",setup(t){const h=c(),k=o(),z=r(),L=i({username:"admin",password:"123456"}),q={username:[{required:!0,message:"请输入账号"}],password:[{required:!0,message:"请输入密码"},{match:b,message:"输入密码格式不正确"}]},U=s(!1),{loading:C,setLoading:R}=function(e=!1){const a=s(e);return{loading:a,setLoading:e=>{a.value=e},toggle:()=>{a.value=!a.value}}}(),S=s(""),A=n("formRef"),B=async()=>{var e;try{if(await(null==(e=A.value)?void 0:e.validate()))return;R(!0),await k.login(L),z.reset();const{redirect:a,...l}=h.currentRoute.value.query;h.push({path:a||"/",query:{...l}}),x.success("登录成功")}catch(a){S.value=a.message}finally{R(!1)}};return(s,t)=>{const o=p("a-col"),r=p("icon-user"),i=p("a-input"),n=p("a-form-item"),c=p("icon-lock"),x=p("a-input-password"),h=p("a-checkbox"),b=p("a-link"),k=p("a-row"),z=p("a-button"),R=p("a-space"),S=p("a-form"),I=a;return f(),u("div",V,[d(k,{align:"stretch",class:"login-box"},{default:m((()=>[d(o,{xs:0,sm:12,md:15},{default:m((()=>t[3]||(t[3]=[_("div",{class:"login-left"},[_("img",{class:"login-left__img",src:"/gi-demo/static/svg/login-img-BnXpmWAf.svg"})],-1)]))),_:1}),d(o,{xs:24,sm:12,md:9},{default:m((()=>[_("div",j,[d(S,{ref_key:"formRef",ref:A,size:g(v)()?"large":"medium",model:g(L),rules:q,style:{width:"84%"},"label-col-style":{display:"none"},"wrapper-col-style":{flex:1}},{default:m((()=>[t[8]||(t[8]=_("h3",{class:"login-right__title"},[_("img",{class:"logo",src:e}),_("span",null,"Admin Pro")],-1)),d(n,{field:"username"},{default:m((()=>[d(i,{modelValue:g(L).username,"onUpdate:modelValue":t[0]||(t[0]=e=>g(L).username=e),placeholder:"账号 admin/user","allow-clear":""},{prefix:m((()=>[d(r,{"stroke-width":1,style:{fontSize:"20px"}})])),_:1},8,["modelValue"])])),_:1}),d(n,{field:"password"},{default:m((()=>[d(x,{modelValue:g(L).password,"onUpdate:modelValue":t[1]||(t[1]=e=>g(L).password=e),placeholder:"密码","allow-clear":""},{prefix:m((()=>[d(c,{"stroke-width":1,style:{fontSize:"20px"}})])),_:1},8,["modelValue"])])),_:1}),d(n,null,{default:m((()=>[d(k,{justify:"space-between",align:"center",class:"w-full"},{default:m((()=>[d(h,{modelValue:g(U),"onUpdate:modelValue":t[2]||(t[2]=e=>w(U)?U.value=e:null)},{default:m((()=>t[4]||(t[4]=[y("记住密码")]))),_:1},8,["modelValue"]),d(b,null,{default:m((()=>t[5]||(t[5]=[y("忘记密码")]))),_:1})])),_:1})])),_:1}),d(n,null,{default:m((()=>[d(R,{direction:"vertical",fill:"",class:"w-full"},{default:m((()=>[d(z,{type:"primary",size:"large",long:"",loading:g(C),onClick:B},{default:m((()=>t[6]||(t[6]=[y("登录")]))),_:1},8,["loading"]),d(z,{type:"text",size:"large",long:"",class:"register-btn"},{default:m((()=>t[7]||(t[7]=[y("注册账号")]))),_:1})])),_:1})])),_:1})])),_:1},8,["size","model"])])])),_:1})])),_:1}),d(I,{class:"theme-btn"}),d(l)])}}}),[["__scopeId","data-v-95d9bcdc"]]);export{k as default};
