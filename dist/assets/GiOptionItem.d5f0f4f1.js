import{_ as i,o as t,c as l,n,d as _,i as p,a as o,m as c,V as m,K as u,I as f,Z as v}from"./index.ec8d6b95.js";const y={},g={class:"gi-option"};function h(e,s){return t(),l("ul",g,[n(e.$slots,"default",{},void 0,!0)])}const $=i(y,[["render",h],["__scopeId","data-v-1ad5e92d"]]),k={class:"wrap"},I={class:"icon-wrapper"},C=_({name:"GiOptionItem"}),B=_({...C,props:{icon:{type:String,default:""},label:{type:String,default:""},more:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:s}){const r=()=>{s("click")};return(a,G)=>{const d=p("IconRight");return t(),l("li",{class:v(["gi-option-item",{more:e.more,active:e.active}]),onClick:r},[o("section",k,[o("span",I,[n(a.$slots,"icon",{},()=>[(t(),c(m(e.icon),{size:16,"stroke-width":2}))],!0)]),n(a.$slots,"default",{},()=>[o("span",null,u(e.label),1)],!0)]),e.more?(t(),c(d,{key:0})):f("",!0)],2)}}});const S=i(B,[["__scopeId","data-v-07ff3c27"]]);export{S as G,$ as a};