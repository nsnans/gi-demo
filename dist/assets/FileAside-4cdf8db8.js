import{d as g,eE as v,J as x,eB as w,g as C,x as b,r as t,u as o,o as c,c as _,a as n,w as e,f as B,F,b as S,e as T,h as q,t as I,E as N,i as V,_ as A}from"./index-d92c8974.js";import{f as E}from"./file-map-2a15779f.js";const z={key:0,class:"file-aside"},L=g({__name:"FileAside",setup(R){const s=v(),r=x(),{width:l}=w(),i=C("0");b(()=>s.query,()=>{s.query.fileType&&(i.value=s.query.fileType.toString())},{immediate:!0});const d=u=>{r.push({path:"/file",query:{fileType:u.value}})};return(u,W)=>{const p=t("icon-apps"),m=V,f=t("a-menu-item"),y=t("a-sub-menu"),h=t("a-menu"),k=t("a-card");return o(l)>715?(c(),_("div",z,[n(k,{title:"文件管理",bordered:!1,"body-style":{padding:0}},{default:e(()=>[n(h,{style:{width:"220px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":[o(i)]},{default:e(()=>[n(y,{key:"0"},{icon:e(()=>[n(p)]),title:e(()=>[B("文件类型")]),default:e(()=>[(c(!0),_(F,null,S(o(E),a=>(c(),T(f,{key:a.value.toString(),onClick:D=>d(a)},{icon:e(()=>[n(m,{size:28,name:a.menuIcon},null,8,["name"])]),default:e(()=>[q("span",null,I(a.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["default-selected-keys"])]),_:1})])):N("",!0)}}});const K=A(L,[["__scopeId","data-v-9a5a642c"]]);export{K as default};