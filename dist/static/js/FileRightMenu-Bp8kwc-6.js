import{_ as e}from"./index-DIWjyLbc.js";import{d as o,o as a,g as i,C as l,_ as t,f as n,j as c,i as s,t as d,a as r,b as p,x as _,w as m}from"./index-CTftGuoI.js";import{_ as u}from"./index-DlUxsYjc.js";const f={class:"gi-option"},v=t(o({name:"GiOption",__name:"index",setup:e=>(e,o)=>(a(),i("ul",f,[l(e.$slots,"default",{},void 0,!0)]))}),[["__scopeId","data-v-9f37533c"]]),k={class:"gi-option-item__wrapper"},b={class:"gi-option-item__icon"},g={class:"gi-option-item__label"},C=t(o({name:"GiOptionItem",__name:"index",props:{icon:{default:""},label:{default:""},more:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:o}){const t=e,m=o,f=()=>{m("click")};return(e,o)=>{const m=u,v=n("IconRight");return a(),i("li",{class:_(["gi-option-item",{"gi-option-item--more":t.more,"gi-option-item--active":t.active}]),onClick:f},[c("div",k,[c("span",b,[l(e.$slots,"icon",{},(()=>[s(m,{name:t.icon},null,8,["name"])]),!0)]),l(e.$slots,"default",{},(()=>[c("span",g,d(t.label),1)]),!0)]),t.more?(a(),r(v,{key:0})):p("",!0)],2)}}}),[["__scopeId","data-v-7bf14a97"]]),w=t(o({__name:"FileRightMenu",props:{data:{default:void 0},shadow:{type:Boolean,default:!0}},emits:["click"],setup(o,{emit:i}){const l=o,t=i,c=e=>{t("click",e)};return(o,i)=>{const t=n("icon-edit"),d=e,u=n("icon-export"),f=n("icon-download"),k=n("icon-attachment"),b=n("a-popover"),g=n("icon-drive-file"),w=n("icon-delete");return a(),r(v,{class:_({shadow:l.shadow})},{default:m((()=>{var e;return[s(C,{label:"重命名",onClick:i[0]||(i[0]=e=>c("rename"))},{icon:m((()=>[s(d,{color:"#4F6BF6"},{default:m((()=>[s(t)])),_:1})])),_:1}),s(C,{label:"移动到",onClick:i[1]||(i[1]=e=>c("move"))},{icon:m((()=>[s(d,{color:"#62C558"},{default:m((()=>[s(u)])),_:1})])),_:1}),s(C,{label:"下载",onClick:i[2]||(i[2]=e=>c("download"))},{icon:m((()=>[s(d,{color:"#1677FF"},{default:m((()=>[s(f)])),_:1})])),_:1}),"zip"===(null==(e=l.data)?void 0:e.extendName)?(a(),r(b,{key:0,position:"right","content-style":{padding:0,overflow:"hidden",width:"150px"},"arrow-style":{display:"none"}},{content:m((()=>[s(v,null,{default:m((()=>[s(C,{label:"解压到当前目录",icon:"file-rar",onClick:i[3]||(i[3]=e=>c("zip1"))}),s(C,{label:"解压到其他目录",icon:"file-rar",onClick:i[4]||(i[4]=e=>c("zip2"))})])),_:1})])),default:m((()=>[s(C,{label:"解压",more:""},{icon:m((()=>[s(d,{color:"#62C558"},{default:m((()=>[s(k)])),_:1})])),_:1})])),_:1})):p("",!0),s(C,{label:"详情",onClick:i[5]||(i[5]=e=>c("detail"))},{icon:m((()=>[s(d,{color:"#A15FDE"},{default:m((()=>[s(g)])),_:1})])),_:1}),s(C,{label:"删除",onClick:i[6]||(i[6]=e=>c("delete"))},{icon:m((()=>[s(d,{color:"danger"},{default:m((()=>[s(w)])),_:1})])),_:1})]})),_:1},8,["class"])}}}),[["__scopeId","data-v-7285011c"]]);export{w as default};
