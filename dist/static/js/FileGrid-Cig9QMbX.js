import{d as e,e as a,o as i,f as l,h as s,w as t,F as c,j as o,c as d,i as n,A as r,t as m,B as u,x as g,ao as p,_ as f}from"./index-CgpQDUug.js";import k from"./FileImage-Dx5aY4B6.js";import x from"./FileRightMenu-6D-zGIFp.js";import"./index-BzU3tN9E.js";import"./file-vS2Qaiq0.js";const h={class:"file-grid"},_=["onClick"],C={class:"file-grid-item__wrapper"},F={class:"file-icon"},j={class:"gi_line_1 file-name"},v=["onClick"],I=f(e({__name:"FileGrid",props:{data:{default:()=>[]},selectedFileIds:{default:()=>[]},isBatchMode:{type:Boolean,default:!1}},emits:["click","select","right-menu-click"],setup(e,{emit:f}){const I=e,b=f,B=e=>`${e.name}${e.extendName?`.${e.extendName}`:""}`,M=e=>{b("select",e)};return(e,f)=>{const w=a("a-checkbox"),y=a("a-grid-item"),$=a("a-trigger"),N=a("a-grid");return i(),l("div",h,[s(N,{cols:{xs:4,sm:4,md:5,lg:7,xl:8,xxl:9},"col-gap":12,"row-gap":12},{default:t((()=>[(i(!0),l(c,null,o(e.data,(e=>(i(),d($,{key:e.id,trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":"","scroll-to-close":""},{content:t((()=>[s(x,{data:e,onClick:a=>((e,a)=>{b("right-menu-click",e,a)})(a,e)},null,8,["data","onClick"])])),default:t((()=>[s(y,null,{default:t((()=>[n("div",{class:"file-grid-item",onClick:r((a=>(e=>{b("click",e)})(e)),["stop"])},[n("section",C,[n("div",F,[s(k,{data:e},null,8,["data"])]),n("p",j,m(B(e)),1)]),u(n("section",{class:g(["check-mode",{checked:I.selectedFileIds.includes(e.id)}]),onClick:r((a=>M(e)),["stop"])},[s(w,{class:"checkbox","model-value":I.selectedFileIds.includes(e.id),onChange:a=>M(e)},null,8,["model-value","onChange"])],10,v),[[p,I.isBatchMode]])],8,_)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}}}),[["__scopeId","data-v-339d1cbb"]]);export{I as default};