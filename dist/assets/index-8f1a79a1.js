import{L as e,M as a,eG as t,eH as i,eu as l,d as n,eE as o,G as s,eB as d,eI as c,g as u,z as r,eJ as p,r as f,o as m,c as _,a as h,w as v,f as y,F as g,b as w,u as j,e as k,J as x,t as C,E as I,W as M,X as b,N as F,R as L,i as N,p as T,j as B,h as R,_ as J}from"./index-1c970280.js";import{f as S,i as q}from"./file-map-2a15779f.js";import{a as E}from"./index.es-b3a1f897.js";/* empty css               */import G from"./FileNavPath-e7edf6c6.js";import z from"./FileGrid-d47d68f9.js";import H from"./FileList-bdd3c6d3.js";import K from"./index-ad2dba57.js";import P from"./index-962ab242.js";import{_ as V}from"./index.vue_vue_type_script_setup_true_lang-2abf3d87.js";import $ from"./index-c28a107a.js";import"./FileImg-85381537.js";import"./FileRightMenu-aaf1da05.js";function Q(e,a){const n=document.createElement("div");document.body.appendChild(n);const o=t(e,{...a,onClose:()=>{setTimeout((()=>{o.unmount(),document.body.removeChild(n)}),350)}});o.use(i),o.use(l),o.mount(n)}const W=e=>(T("data-v-dd73879c"),e=e(),B(),e),X={class:"file-main"},A=W((()=>R("span",null,"上传文件",-1))),D=W((()=>R("span",null,"上传文件夹",-1))),O=J(n({__name:"index",setup(t){var i;const l=o(),n=s(),{width:T}=d(),B=c(),R=u(!1),J=u([]),W=u("0");W.value=(null==(i=l.query.fileType)?void 0:i.toString())||"0";const O=async()=>{try{R.value=!0,U.value=!1;const i=await(t={fileType:W.value},e.get(`${a}/file/list`,t));J.value=i.data.list}catch(i){return i}finally{R.value=!1}var t};r((()=>{O()})),p((e=>{var a;e.query.fileType&&(W.value=null==(a=e.query.fileType)?void 0:a.toString(),O())}));const U=u(!1),Y=e=>{if(F.success(`点击了文件-${e.name}`),q.includes(e.extendName)&&e.src){const a=J.value.filter((e=>q.includes(e.extendName))).map((e=>e.src||"")),t=a.findIndex((a=>a===e.src));a.length&&E({options:{initialViewIndex:t},images:a})}"mp4"===e.extendName&&Q(V,{fileInfo:e}),"mp3"===e.extendName&&function(e){Q($,{fileInfo:e})}(e)},Z=e=>{B.addSelectedFileItem(e)},ee=(e,a)=>{F.success("点击了"+e),"delete"===e&&L.warning({title:"提示",content:"是否删除该文件？",hideCancel:!1}),"rename"===e&&Q(P,{fileInfo:a}),"move"===e&&function(e){Q(K,{fileInfo:e})}(a),"detail"===e&&n.push({path:"/file/detail"})},ae=()=>{L.warning({title:"提示",content:"是否确认删除？",hideCancel:!1})};return(e,a)=>{const t=f("icon-upload"),i=f("a-button"),l=N,n=f("a-doption"),o=f("a-dropdown"),s=f("a-option"),d=f("a-select"),c=f("a-input"),u=f("icon-search"),r=f("a-input-group"),p=f("a-space"),F=f("icon-delete"),L=f("icon-select-all"),q=f("icon-swap"),E=f("a-tooltip"),K=f("icon-filter"),P=f("icon-apps"),V=f("icon-list"),$=f("a-button-group"),Q=f("a-row"),W=f("a-empty"),O=f("a-spin");return m(),_("div",X,[h(G),h(Q,{justify:"space-between",class:"row-operate"},{default:v((()=>[h(p,null,{default:v((()=>[h(o,null,{content:v((()=>[h(n,null,{icon:v((()=>[h(l,{name:"upload-file"})])),default:v((()=>[A])),_:1}),h(n,null,{icon:v((()=>[h(l,{name:"upload-folder"})])),default:v((()=>[D])),_:1})])),default:v((()=>[h(i,{type:"primary",shape:"round"},{icon:v((()=>[h(t)])),default:v((()=>[y("上传")])),_:1})])),_:1}),h(r,null,{default:v((()=>[h(d,{style:{width:"150px"},placeholder:"请选择"},{default:v((()=>[(m(!0),_(g,null,w(j(S),(e=>(m(),k(s,{key:e.value},{icon:v((()=>[(m(),k(x(e.icon),{size:"18",color:"#999"}))])),default:v((()=>[y(C(e.name),1)])),_:2},1024)))),128))])),_:1}),h(c,{placeholder:"请输入关键词...","allow-clear":""}),h(i,{type:"primary"},{icon:v((()=>[h(u)])),default:v((()=>[y("搜索")])),_:1})])),_:1})])),_:1}),j(T)>715?(m(),k(p,{key:0},{default:v((()=>[j(U)?(m(),k(i,{key:0,disabled:!j(B).selectedFileIdList.length,type:"primary",status:"danger",onClick:ae},{icon:v((()=>[h(F)])),_:1},8,["disabled"])):I("",!0),h(i,{type:"primary",onClick:a[0]||(a[0]=e=>U.value=!j(U))},{icon:v((()=>[h(L)])),default:v((()=>[y(C(j(U)?"取消批量":"批量操作"),1)])),_:1}),h($,null,{default:v((()=>[h(E,{content:"传输列表",position:"bottom"},{default:v((()=>[h(i,{onClick:a[1]||(a[1]=e=>R.value=!j(R))},{icon:v((()=>[h(q)])),_:1})])),_:1}),h(E,{content:"排序",position:"bottom"},{default:v((()=>[h(i,null,{icon:v((()=>[h(K)])),_:1})])),_:1}),h(E,{content:"视图",position:"bottom"},{default:v((()=>[h(i,{onClick:j(B).changeViewMode},{icon:v((()=>["grid"===j(B).viewMode?(m(),k(P,{key:0})):(m(),k(V,{key:1}))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})):I("",!0)])),_:1}),h(O,{class:"file-wrap",loading:j(R)},{default:v((()=>[M(h(z,{data:j(J),isBatchMode:j(U),selectedFileIdList:j(B).selectedFileIdList,onClick:Y,onCheck:Z,onRightMenuClick:ee},null,8,["data","isBatchMode","selectedFileIdList"]),[[b,j(J).length&&"grid"==j(B).viewMode]]),M(h(H,{data:j(J),isBatchMode:j(U),onClick:Y,onRightMenuClick:ee},null,8,["data","isBatchMode"]),[[b,j(J).length&&"list"==j(B).viewMode]]),M(h(W,null,null,512),[[b,!j(J).length]])])),_:1},8,["loading"])])}}}),[["__scopeId","data-v-dd73879c"]]);export{O as default};
