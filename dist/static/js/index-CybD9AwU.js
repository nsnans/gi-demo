import{d as a,e,f as o,o as l,a as r,w as s,j as n,M as d,_ as i}from"./index-CTftGuoI.js";const t=["src","sandbox","allow"],f=i(a({name:"GiIframe",__name:"index",props:{src:{default:""},loadingTip:{default:"加载中..."},sandbox:{default:"allow-scripts allow-same-origin allow-forms"},allow:{default:"fullscreen payment"},showError:{type:Boolean,default:!0}},emits:["load","error","loading-change"],setup(a,{expose:i,emit:f}){const c=a,u=f,g=e(),m=e(!0),p=()=>{m.value=!1,u("load"),u("loading-change",!1)},w=a=>{m.value=!1,u("error",a),u("loading-change",!1),c.showError&&d.error("iframe 加载失败，请检查网络连接或链接是否有效")};return i({reload:()=>{g.value&&(m.value=!0,u("loading-change",!0),g.value.src=c.src)},iframeRef:g}),(a,e)=>{const d=o("a-spin");return l(),r(d,{class:"gi-iframe",loading:m.value,"loading-tip":a.loadingTip},{default:s((()=>[n("iframe",{ref_key:"iframeRef",ref:g,class:"iframe",src:a.src,sandbox:a.sandbox,allow:a.allow,onLoad:p,onError:w},null,40,t)])),_:1},8,["loading","loading-tip"])}}}),[["__scopeId","data-v-168d271d"]]);export{f as _};
