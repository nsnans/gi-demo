import{c as e}from"./index.es-CwtQrD6I.js";import{d as a,b as t,S as i,e as o,o as s,f as r,i as l,h as n,w as c,g as u,t as p,_ as m}from"./index-CgpQDUug.js";const d={class:"pre-image"},f={class:"viewer-box"},b=["src"],v={class:"zoom-proportion"},_=m(a({__name:"PreImage",setup(a){const m=t("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F09fc753c76d4a8575c105452c81b76ba563c0d8d.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652531003&t=100230590302237a20f8e136de146f6b"),_=t(),g=t(""),y=i({fullscreen:!1,inline:!0,toolbar:!1,navbar:!1,rotatable:!0,backdrop:!0,button:!0,title:!1,zoom:e=>{g.value=`${Number.parseInt(String(100*e.detail.ratio))}%`}}),h=e=>{_.value=e,setTimeout((()=>{g.value=`${Number.parseInt(String(100*_.value.initialImageData.ratio))}%`}),100)},k=e=>{if(_.value)return"rotateLeft"===e?_.value.rotate(-90):"rotateRight"===e?_.value.rotate(90):"scalePlus"===e?_.value.zoom(.1):"scaleMinus"===e?_.value.zoom(-.1):"fullScreen"===e?_.value.full():void 0};return(a,t)=>{const i=o("icon-undo"),F=o("a-button"),w=o("icon-redo"),I=o("icon-minus"),z=o("icon-plus"),C=o("a-space"),S=o("icon-edit"),j=o("icon-fullscreen"),x=o("a-row");return s(),r("div",d,[l("section",f,[n(u(e),{ref_key:"viewer",ref:_,class:"viewer",options:u(y),onInited:h},{default:c((()=>[l("img",{src:u(m),class:"image"},null,8,b)])),_:1},8,["options"])]),n(x,{justify:"space-between",align:"stretch"},{default:c((()=>[n(C,null,{default:c((()=>[n(F,{type:"primary",onClick:t[0]||(t[0]=e=>k("rotateLeft"))},{icon:c((()=>[n(i)])),_:1}),n(F,{type:"primary",onClick:t[1]||(t[1]=e=>k("rotateRight"))},{icon:c((()=>[n(w)])),_:1}),n(F,{type:"primary",onClick:t[2]||(t[2]=e=>k("scaleMinus"))},{icon:c((()=>[n(I)])),_:1}),l("section",v,p(u(g)),1),n(F,{type:"primary",onClick:t[3]||(t[3]=e=>k("scalePlus"))},{icon:c((()=>[n(z)])),_:1})])),_:1}),n(C,null,{default:c((()=>[n(F,{type:"primary"},{icon:c((()=>[n(S)])),_:1}),n(F,{type:"primary",onClick:t[4]||(t[4]=e=>k("fullScreen"))},{icon:c((()=>[n(j)])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-c6ea2751"]]);export{_ as default};