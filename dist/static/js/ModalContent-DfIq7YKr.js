import{d as a,b as e,J as s,k as l,a1 as o,e as t,o as u,c as i,w as n,B as d,i as v,s as r,g as c,h as p,t as f,ag as x,N as g,_ as m}from"./index-Df7KX6yp.js";import{u as _,f as y,g as h}from"./index-DDeUdgsX.js";const C={style:{padding:"10px 14px 14px 14px"}},N={class:"audio-name"},k=["src"],R=m(a({__name:"ModalContent",props:{data:{},onClose:{}},setup(a){const m=a,R=e(!1),S=s("audioRef"),b=s("audioHeadRef"),w=l((()=>{var a;return(null==(a=m.data)?void 0:a.src)||""}));o((()=>{R.value=!0}));const{width:I,height:J}=_(),{width:j,height:z}=y(S),A=e({top:40,left:I.value-j.value}),D=JSON.parse(sessionStorage.getItem("AudioDialogXY"));D&&D.top&&D.left&&(A.value.top=D.top,A.value.left=D.left);const{x:H,y:O}=h(S,{initialValue:{x:A.value.left-j.value,y:A.value.top}}),X=l((()=>{let a=H.value,e=O.value;return H.value>I.value-j.value&&(a=I.value-j.value),H.value<0&&(a=0),O.value>J.value-z.value&&(e=J.value-z.value),O.value<0&&(e=0),sessionStorage.setItem("AudioDialogXY",JSON.stringify({top:e,left:a})),{left:`${a}px`,top:`${e}px`}})),Y=()=>{R.value=!1,m.onClose&&m.onClose()};return(a,e)=>{const s=t("icon-music"),l=t("icon-close");return u(),i(g,{name:"slide-dynamic-origin"},{default:n((()=>{var a,e;return[d(v("div",{ref_key:"audioRef",ref:S,class:"audio-box",style:r(c(X))},[v("section",C,[v("div",{ref_key:"audioHeadRef",ref:b,class:"audio-box__header"},[v("div",N,[p(s,{size:16,spin:""}),v("span",null,f(null==(a=m.data)?void 0:a.name)+"."+f(null==(e=m.data)?void 0:e.extendName),1)]),v("div",{class:"close-icon",onClick:Y},[p(l,{size:12})])],512),v("audio",{class:"audio",src:c(w),controls:"",autoplay:""},null,8,k)])],4),[[x,c(R)]])]})),_:1})}}}),[["__scopeId","data-v-ce701310"]]);export{R as default};
