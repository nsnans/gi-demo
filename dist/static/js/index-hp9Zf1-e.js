import{_ as e}from"./index-Bbt2S_wH.js";import{O as a,a as t}from"./regexp-LyZ7ySAN.js";import{a1 as r,a2 as n,a3 as o,a4 as s,a5 as i,a6 as l,a7 as u,a8 as c,a9 as d,aa as f,ab as m,l as p,n as v,S as g,k as h,b,O as _,U as y,M as j,ac as k,d as w,J as x,e as A,o as O,f as R,i as E,h as C,w as q,g as L,G as P,t as S,_ as V}from"./index-CELQnxv0.js";import{i as F,g as z,a as D,u as I}from"./index-DKlYnAuf.js";function T(e){var a=-1,t=null==e?0:e.length;for(this.__data__=new r;++a<t;)this.add(e[a])}function B(e,a){for(var t=-1,r=null==e?0:e.length;++t<r;)if(a(e[t],t,e))return!0;return!1}T.prototype.add=T.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},T.prototype.has=function(e){return this.__data__.has(e)};var U=1,M=2;function G(e,a,t,r,n,o){var s=t&U,i=e.length,l=a.length;if(i!=l&&!(s&&l>i))return!1;var u=o.get(e),c=o.get(a);if(u&&c)return u==a&&c==e;var d=-1,f=!0,m=t&M?new T:void 0;for(o.set(e,a),o.set(a,e);++d<i;){var p=e[d],v=a[d];if(r)var g=s?r(v,p,d,a,e,o):r(p,v,d,e,a,o);if(void 0!==g){if(g)continue;f=!1;break}if(m){if(!B(a,(function(e,a){if(s=a,!m.has(s)&&(p===e||n(p,e,t,r,o)))return m.push(a);var s}))){f=!1;break}}else if(p!==v&&!n(p,v,t,r,o)){f=!1;break}}return o.delete(e),o.delete(a),f}function J(e){var a=-1,t=Array(e.size);return e.forEach((function(e,r){t[++a]=[r,e]})),t}function N(e){var a=-1,t=Array(e.size);return e.forEach((function(e){t[++a]=e})),t}var W=1,H=2,K="[object Boolean]",Q="[object Date]",X="[object Error]",Y="[object Map]",Z="[object Number]",$="[object RegExp]",ee="[object Set]",ae="[object String]",te="[object Symbol]",re="[object ArrayBuffer]",ne="[object DataView]",oe=n?n.prototype:void 0,se=oe?oe.valueOf:void 0;var ie=1,le=Object.prototype.hasOwnProperty;var ue=1,ce="[object Arguments]",de="[object Array]",fe="[object Object]",me=Object.prototype.hasOwnProperty;function pe(e,a,t,r,n,m){var p=f(e),v=f(a),g=p?de:l(e),h=v?de:l(a),b=(g=g==ce?fe:g)==fe,_=(h=h==ce?fe:h)==fe,y=g==h;if(y&&u(e)){if(!u(a))return!1;p=!0,b=!1}if(y&&!b)return m||(m=new c),p||d(e)?G(e,a,t,r,n,m):function(e,a,t,r,n,i,l){switch(t){case ne:if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case re:return!(e.byteLength!=a.byteLength||!i(new s(e),new s(a)));case K:case Q:case Z:return o(+e,+a);case X:return e.name==a.name&&e.message==a.message;case $:case ae:return e==a+"";case Y:var u=J;case ee:var c=r&W;if(u||(u=N),e.size!=a.size&&!c)return!1;var d=l.get(e);if(d)return d==a;r|=H,l.set(e,a);var f=G(u(e),u(a),r,n,i,l);return l.delete(e),f;case te:if(se)return se.call(e)==se.call(a)}return!1}(e,a,g,t,r,n,m);if(!(t&ue)){var j=b&&me.call(e,"__wrapped__"),k=_&&me.call(a,"__wrapped__");if(j||k){var w=j?e.value():e,x=k?a.value():a;return m||(m=new c),n(w,x,t,r,m)}}return!!y&&(m||(m=new c),function(e,a,t,r,n,o){var s=t&ie,l=i(e),u=l.length;if(u!=i(a).length&&!s)return!1;for(var c=u;c--;){var d=l[c];if(!(s?d in a:le.call(a,d)))return!1}var f=o.get(e),m=o.get(a);if(f&&m)return f==a&&m==e;var p=!0;o.set(e,a),o.set(a,e);for(var v=s;++c<u;){var g=e[d=l[c]],h=a[d];if(r)var b=s?r(h,g,d,a,e,o):r(g,h,d,e,a,o);if(!(void 0===b?g===h||n(g,h,t,r,o):b)){p=!1;break}v||(v="constructor"==d)}if(p&&!v){var _=e.constructor,y=a.constructor;_==y||!("constructor"in e)||!("constructor"in a)||"function"==typeof _&&_ instanceof _&&"function"==typeof y&&y instanceof y||(p=!1)}return o.delete(e),o.delete(a),p}(e,a,t,r,n,m))}function ve(e,a,t,r,n){return e===a||(null==e||null==a||!m(e)&&!m(a)?e!=e&&a!=a:pe(e,a,t,r,ve,n))}function ge(e){const a=p(),t=v(),r=g({}),n=g({}),o=h((()=>!!a.query[(null==e?void 0:e.key)||"id"])),s=b(!1),i=b(!1),l=b(!1),u=h((()=>o.value?"编辑":"新增")),c=async()=>{try{i.value=!0;const a=o.value?await e.detailApi(r):await e.initApi();a.success&&(Object.assign(r,a.data),Object.assign(n,a.data),s.value=!1)}catch(a){e.onError&&e.onError(a)}finally{i.value=!1}};c(),_((()=>a.query),(()=>{c()})),_((()=>r),(e=>{s.value=!ve(e,n)}),{immediate:!0,deep:!0});return{form:r,title:u,loading:i,isEdit:o,back:()=>{s.value?j.warning({title:"提示",content:"您确定丢弃更改的内容吗？",hideCancel:!1,onOk:()=>{t.back()}}):t.back()},save:async()=>{var n,s;try{if(await(null==(s=null==(n=null==e?void 0:e.formRef)?void 0:n.value)?void 0:s.validate()))return;l.value=!0;const i=o.value?await e.editApi(r):await e.addApi(r);i.success&&(y.success(o.value?"编辑成功！":"新增成功！"),o.value||!0!==e.addToEdit||t.replace({path:a.fullPath,query:{[e.key]:i.data[e.key]}}),e.onSuccess&&e.onSuccess(i.data))}catch(i){e.onError&&e.onError(i)}finally{l.value=!1}},saveLoading:l,reset:()=>{var a,t;if(o.value){for(const e in r)delete r[e];Object.assign(r,k(n))}else null==(t=null==(a=null==e?void 0:e.formRef)?void 0:a.value)||t.resetFields()}}}const he={class:"gi_page form-base"},be={class:"gi_box"},_e=V(w({name:"DataForm",__name:"index",setup(r){const n=p(),o=x("formRef"),s={name:[{required:!0,message:"请输入姓名"},{maxLength:4,message:"姓名不超过4个字符"},{match:a,message:"仅支持中文姓名"}],phone:[{required:!0,message:"请输入手机号"},{match:t,message:"手机号格式不正确"}]},{form:i,title:l,loading:u,save:c,saveLoading:d,back:f,reset:m}=ge({key:"id",formRef:o,initApi:F,detailApi:()=>z({id:n.query.id}),addApi:e=>D({...e,extra:"额外参数-新增"}),editApi:e=>I({...e,extra:"额外参数-编辑"}),addToEdit:!0,onSuccess:()=>{}});return(a,t)=>{const r=A("a-button"),n=A("a-form-item"),p=A("a-input"),v=A("a-typography-text"),g=A("a-space"),h=A("a-form"),b=e,_=A("a-spin"),y=A("a-card");return O(),R("div",he,[E("section",be,[C(y,{title:L(l),bordered:!1},{extra:q((()=>[C(r,{onClick:L(f)},{default:q((()=>t[2]||(t[2]=[P("返回")]))),_:1},8,["onClick"])])),default:q((()=>[C(_,{loading:L(u)},{default:q((()=>[C(h,{ref_key:"formRef",ref:o,model:L(i),rules:s,"auto-label-width":"",class:"form-base__form"},{default:q((()=>[C(n,{label:"ID",field:"id"},{default:q((()=>[P(S(L(i).id||"暂无"),1)])),_:1}),C(n,{label:"姓名",field:"name"},{extra:q((()=>[C(v,{type:"secondary"},{default:q((()=>t[3]||(t[3]=[P("请输入中文姓名")]))),_:1})])),default:q((()=>[C(p,{modelValue:L(i).name,"onUpdate:modelValue":t[0]||(t[0]=e=>L(i).name=e),placeholder:"请输入姓名","allow-clear":""},null,8,["modelValue"])])),_:1}),C(n,{label:"手机号",field:"phone"},{default:q((()=>[C(p,{modelValue:L(i).phone,"onUpdate:modelValue":t[1]||(t[1]=e=>L(i).phone=e),placeholder:"请输入手机号","allow-clear":""},null,8,["modelValue"])])),_:1}),C(n,null,{default:q((()=>[C(g,null,{default:q((()=>[C(r,{onClick:L(m)},{default:q((()=>t[4]||(t[4]=[P("重置")]))),_:1},8,["onClick"]),C(r,{type:"primary",loading:L(d),onClick:L(c)},{default:q((()=>t[5]||(t[5]=[P("提交")]))),_:1},8,["loading","onClick"])])),_:1})])),_:1})])),_:1},8,["model"]),C(b,{"code-json":"\nconst route = useRoute()\nconst formRef = useTemplateRef('formRef')\n\nconst rules: FormInstance['rules'] = {\n  name: [\n    { required: true, message: '请输入姓名' },\n    { maxLength: 4, message: '姓名不超过4个字符' },\n    { match: Regexp.OnlyCh, message: '仅支持中文姓名' }\n  ],\n  phone: [\n    { required: true, message: '请输入手机号' },\n    { match: Regexp.Phone, message: '手机号格式不正确' }\n  ]\n}\n\n/**\n * @description useFormCurd 的特性\n * 1. 能够快速实现表单的新增编辑\n * 2. 能够监视表单的更改，在你点击返回按钮的时候提示：'您确定丢弃更改的内容吗？'\n * 3. 封装思路可作为参考\n */\ntype Form = { id: string; name: string; phone: string }\nconst { form, title, loading, save, saveLoading, back, reset } = useFormCurd<Form>({\n  key: 'id', // 主键\n  formRef: formRef, // 表单的实例对象\n  initApi: initPerson, // 初始化表单字段接口\n  detailApi: () => getPersonById({ id: route.query.id as string }), // 编辑模式下查询详情接口\n  addApi: (form) => addPerson({ ...form, extra: '额外参数-新增' }), // 新增接口\n  editApi: (form) => updatePerson({ ...form, extra: '额外参数-编辑' }), // 编辑接口\n  addToEdit: true, // 新增成功跳到编辑模式\n  onSuccess: (form)=> {\n    console.log('保存成功后的回调函数', form.id)\n  }\n})\n"})])),_:1},8,["loading"])])),_:1},8,["title"])])])}}}),[["__scopeId","data-v-7ea5076e"]]);export{_e as default};