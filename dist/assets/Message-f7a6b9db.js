import{d as l,g as p,z as _,o,e as n,w as c,X as u,h as s,a as f,T as i,n as m,G as v,t as y,Y as g,u as h,Z as C,$ as k,a0 as w,_ as x}from"./index-d92c8974.js";const M={class:"message-mask"},z={class:"message"},I={class:"content"},T=l({__name:"Message",props:{type:{default:"success"},content:{default:""},duration:{default:2e3},destroy:{type:Function,default:()=>{}}},setup(r){const e=r,t={success:{content:"操作成功",icon:C},warning:{content:"警告信息",icon:k},error:{content:"操作错误",icon:w}},a=p(!1);return _(()=>{a.value=!0,setTimeout(()=>{a.value=!1},e.duration)}),(d,B)=>(o(),n(i,{name:"fade-mask",mode:"out-in",appear:"",onAfterLeave:d.destroy},{default:c(()=>[u(s("div",M,[f(i,{name:"zoom-message",mode:"out-in",appear:""},{default:c(()=>[s("section",z,[s("div",{class:m(["icon",e.type])},[(o(),n(v(t[e.type].icon),{size:80}))],2),s("p",I,y(e.content||t[e.type].content),1)])]),_:1})],512),[[g,h(a)]])]),_:1},8,["onAfterLeave"]))}});const A=x(T,[["__scopeId","data-v-3f45dd5e"]]);export{A as default};