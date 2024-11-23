import{d as e,k as l,h as t,e as o,o as a,f as r,w as u,G as d,U as c}from"./index-CELQnxv0.js";const i={red:"#FF0000 ",orangered:"#f77234",orange:"#ff7d00",gold:"#f7ba1e",lime:"#9fdb1d",green:"#00b42a",cyan:"#14c9c9",blue:"#3491fa",purple:"#722ed1",pink:"#f5319d",gray:"#86909c"},n=e({name:"GiTag",props:{type:{type:String,default:"light"},status:{type:String,default:"primary"},color:{type:String,default:""},size:{type:String,default:"small"},closable:{type:Boolean,default:!1}},emits:["click","close"],setup(e,{slots:a,emit:r}){const u=l((()=>{const l=["gi-tag"];return e.type&&l.push(`gi-tag__type--${e.type}`),e.size&&l.push(`gi-tag__size--${e.size}`),e.status&&l.push(`gi-tag__status--${e.status}`),l}));const d=l((()=>{const l={};if(e.color){const o=i[e.color]||e.color,{r:a,g:r,b:u}=((t=o).includes("#")&&(t=t.slice(1)),{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16)});"light"===e.type&&(l.color=o,l.backgroundColor=`rgba(${a}, ${r}, ${u}, 0.1)`,l["--tag-close-hover-bg-color"]=o),"dark"===e.type&&(l.color="#fff",l.backgroundColor=o,l["--tag-close-hover-color"]=o,l["--tag-close-hover-bg-color"]="rgba(255, 255, 255, 0.9)"),"outline"===e.type&&(l.color=o,l.backgroundColor="transparent",l.borderColor=o,l["--tag-close-hover-bg-color"]=o),"light-outline"===e.type&&(l.color=o,l.backgroundColor=`rgba(${a}, ${r}, ${u}, 0.1)`,l.borderColor=`rgba(${a}, ${r}, ${u}, 0.2)`,l["--tag-close-hover-bg-color"]=o)}var t;return l})),c=()=>{r("click")},n=t("span",{class:"gi-tag-close-btn",onClick:e=>(e.stopPropagation(),void r("close"))},[t(o("icon-close"),{class:"close-icon"},null)]);return()=>{var l;return t("span",{class:u.value,style:d.value,onClick:c},[null==(l=a.default)?void 0:l.call(a),e.closable&&n])}}}),s=e({__name:"index",setup(e){const l=()=>{c.success("点击了关闭图标")};return(e,c)=>{const i=n,s=o("a-space"),f=o("a-card"),p=n;return a(),r("div",null,[t(f,{title:"基本使用",bordered:!0},{default:u((()=>[t(s,{wrap:"",fill:""},{default:u((()=>[t(i,null,{default:u((()=>c[0]||(c[0]=[d("light")]))),_:1}),t(i,{status:"success",closable:"",onClose:l},{default:u((()=>c[1]||(c[1]=[d("标签")]))),_:1}),t(i,{status:"warning"},{default:u((()=>c[2]||(c[2]=[d("标签")]))),_:1}),t(i,{status:"danger",closable:""},{default:u((()=>c[3]||(c[3]=[d("标签")]))),_:1})])),_:1}),t(s,{wrap:"",fill:""},{default:u((()=>[t(i,{type:"dark",size:"mini"},{default:u((()=>c[4]||(c[4]=[d("dark")]))),_:1}),t(i,{type:"dark",size:"mini",status:"success",closable:"",onClose:l},{default:u((()=>c[5]||(c[5]=[d("标签")]))),_:1}),t(i,{type:"dark",size:"mini",status:"warning"},{default:u((()=>c[6]||(c[6]=[d("标签")]))),_:1}),t(i,{type:"dark",size:"mini",status:"danger",closable:""},{default:u((()=>c[7]||(c[7]=[d("标签")]))),_:1})])),_:1}),t(s,{wrap:"",fill:""},{default:u((()=>[t(i,{type:"outline"},{default:u((()=>c[8]||(c[8]=[d("outline")]))),_:1}),t(i,{type:"outline",status:"success",closable:"",onClose:l},{default:u((()=>c[9]||(c[9]=[d("标签")]))),_:1}),t(i,{type:"outline",status:"warning"},{default:u((()=>c[10]||(c[10]=[d("标签")]))),_:1}),t(i,{type:"outline",status:"danger",closable:""},{default:u((()=>c[11]||(c[11]=[d("标签")]))),_:1})])),_:1}),t(s,{wrap:"",fill:""},{default:u((()=>[t(i,{type:"light-outline"},{default:u((()=>c[12]||(c[12]=[d("light-outline")]))),_:1}),t(i,{type:"light-outline",status:"success",closable:"",onClose:l},{default:u((()=>c[13]||(c[13]=[d("标签")]))),_:1}),t(i,{type:"light-outline",status:"warning"},{default:u((()=>c[14]||(c[14]=[d("标签")]))),_:1}),t(i,{type:"light-outline",status:"danger",closable:""},{default:u((()=>c[15]||(c[15]=[d("标签")]))),_:1})])),_:1})])),_:1}),t(f,{title:"基础颜色",bordered:!0,class:"gi_mt"},{default:u((()=>[t(s,{wrap:"",fill:""},{default:u((()=>[t(p,{color:"red",closable:""},{default:u((()=>c[16]||(c[16]=[d("red")]))),_:1}),t(p,{color:"orangered"},{default:u((()=>c[17]||(c[17]=[d("orangered")]))),_:1}),t(p,{color:"orange"},{default:u((()=>c[18]||(c[18]=[d("orange")]))),_:1}),t(p,{color:"gold"},{default:u((()=>c[19]||(c[19]=[d("gold")]))),_:1}),t(p,{color:"lime"},{default:u((()=>c[20]||(c[20]=[d("lime")]))),_:1}),t(p,{color:"green"},{default:u((()=>c[21]||(c[21]=[d("green")]))),_:1}),t(p,{color:"cyan"},{default:u((()=>c[22]||(c[22]=[d("cyan")]))),_:1}),t(p,{color:"blue"},{default:u((()=>c[23]||(c[23]=[d("blue")]))),_:1}),t(p,{color:"purple"},{default:u((()=>c[24]||(c[24]=[d("purple")]))),_:1}),t(p,{color:"pink"},{default:u((()=>c[25]||(c[25]=[d("pink")]))),_:1}),t(p,{color:"gray"},{default:u((()=>c[26]||(c[26]=[d("gray")]))),_:1})])),_:1}),t(s,{wrap:"",fill:""},{default:u((()=>[t(p,{type:"dark",color:"red",closable:""},{default:u((()=>c[27]||(c[27]=[d("red")]))),_:1}),t(p,{type:"dark",color:"orangered"},{default:u((()=>c[28]||(c[28]=[d("orangered")]))),_:1}),t(p,{type:"dark",color:"orange"},{default:u((()=>c[29]||(c[29]=[d("orange")]))),_:1}),t(p,{type:"dark",color:"gold"},{default:u((()=>c[30]||(c[30]=[d("gold")]))),_:1}),t(p,{type:"dark",color:"lime"},{default:u((()=>c[31]||(c[31]=[d("lime")]))),_:1}),t(p,{type:"dark",color:"green"},{default:u((()=>c[32]||(c[32]=[d("green")]))),_:1}),t(p,{type:"dark",color:"cyan"},{default:u((()=>c[33]||(c[33]=[d("cyan")]))),_:1}),t(p,{type:"dark",color:"blue"},{default:u((()=>c[34]||(c[34]=[d("blue")]))),_:1}),t(p,{type:"dark",color:"purple"},{default:u((()=>c[35]||(c[35]=[d("purple")]))),_:1}),t(p,{type:"dark",color:"pink"},{default:u((()=>c[36]||(c[36]=[d("pink")]))),_:1}),t(p,{type:"dark",color:"gray"},{default:u((()=>c[37]||(c[37]=[d("gray")]))),_:1})])),_:1}),t(s,{wrap:"",fill:""},{default:u((()=>[t(p,{type:"outline",color:"red",closable:""},{default:u((()=>c[38]||(c[38]=[d("red")]))),_:1}),t(p,{type:"outline",color:"orangered"},{default:u((()=>c[39]||(c[39]=[d("orangered")]))),_:1}),t(p,{type:"outline",color:"orange"},{default:u((()=>c[40]||(c[40]=[d("orange")]))),_:1}),t(p,{type:"outline",color:"gold"},{default:u((()=>c[41]||(c[41]=[d("gold")]))),_:1}),t(p,{type:"outline",color:"lime"},{default:u((()=>c[42]||(c[42]=[d("lime")]))),_:1}),t(p,{type:"outline",color:"green"},{default:u((()=>c[43]||(c[43]=[d("green")]))),_:1}),t(p,{type:"outline",color:"cyan"},{default:u((()=>c[44]||(c[44]=[d("cyan")]))),_:1}),t(p,{type:"outline",color:"blue"},{default:u((()=>c[45]||(c[45]=[d("blue")]))),_:1}),t(p,{type:"outline",color:"purple"},{default:u((()=>c[46]||(c[46]=[d("purple")]))),_:1}),t(p,{type:"outline",color:"pink"},{default:u((()=>c[47]||(c[47]=[d("pink")]))),_:1}),t(p,{type:"outline",color:"gray"},{default:u((()=>c[48]||(c[48]=[d("gray")]))),_:1})])),_:1}),t(s,{wrap:"",fill:""},{default:u((()=>[t(p,{type:"light-outline",color:"red",closable:""},{default:u((()=>c[49]||(c[49]=[d("red")]))),_:1}),t(p,{type:"light-outline",color:"orangered"},{default:u((()=>c[50]||(c[50]=[d("orangered")]))),_:1}),t(p,{type:"light-outline",color:"orange"},{default:u((()=>c[51]||(c[51]=[d("orange")]))),_:1}),t(p,{type:"light-outline",color:"gold"},{default:u((()=>c[52]||(c[52]=[d("gold")]))),_:1}),t(p,{type:"light-outline",color:"lime"},{default:u((()=>c[53]||(c[53]=[d("lime")]))),_:1}),t(p,{type:"light-outline",color:"green"},{default:u((()=>c[54]||(c[54]=[d("green")]))),_:1}),t(p,{type:"light-outline",color:"cyan"},{default:u((()=>c[55]||(c[55]=[d("cyan")]))),_:1}),t(p,{type:"light-outline",color:"blue"},{default:u((()=>c[56]||(c[56]=[d("blue")]))),_:1}),t(p,{type:"light-outline",color:"purple"},{default:u((()=>c[57]||(c[57]=[d("purple")]))),_:1}),t(p,{type:"light-outline",color:"pink"},{default:u((()=>c[58]||(c[58]=[d("pink")]))),_:1}),t(p,{type:"light-outline",color:"gray"},{default:u((()=>c[59]||(c[59]=[d("gray")]))),_:1})])),_:1})])),_:1}),t(f,{title:"自定义颜色",bordered:!0,class:"gi_mt"},{default:u((()=>[t(s,{wrap:"",fill:""},{default:u((()=>[t(p,{color:"#4E6EF2",closable:""},{default:u((()=>c[60]||(c[60]=[d("#4E6EF2")]))),_:1}),t(p,{color:"#1BA035"},{default:u((()=>c[61]||(c[61]=[d("#1BA035")]))),_:1}),t(p,{color:"#AB57E3"},{default:u((()=>c[62]||(c[62]=[d("#AB57E3")]))),_:1}),t(p,{color:"#FF6C9D"},{default:u((()=>c[63]||(c[63]=[d("#FF6C9D")]))),_:1}),t(p,{color:"#0fc6c2"},{default:u((()=>c[64]||(c[64]=[d("#0fc6c2")]))),_:1})])),_:1}),t(s,{wrap:"",fill:""},{default:u((()=>[t(p,{type:"dark",color:"#4E6EF2",closable:""},{default:u((()=>c[65]||(c[65]=[d("#4E6EF2")]))),_:1}),t(p,{type:"dark",color:"#1BA035"},{default:u((()=>c[66]||(c[66]=[d("#1BA035")]))),_:1}),t(p,{type:"dark",color:"#AB57E3"},{default:u((()=>c[67]||(c[67]=[d("#AB57E3")]))),_:1}),t(p,{type:"dark",color:"#FF6C9D"},{default:u((()=>c[68]||(c[68]=[d("#FF6C9D")]))),_:1}),t(p,{type:"dark",color:"#0fc6c2"},{default:u((()=>c[69]||(c[69]=[d("#0fc6c2")]))),_:1})])),_:1}),t(s,{wrap:"",fill:""},{default:u((()=>[t(p,{type:"outline",color:"#4E6EF2",closable:""},{default:u((()=>c[70]||(c[70]=[d("#4E6EF2")]))),_:1}),t(p,{type:"outline",color:"#1BA035"},{default:u((()=>c[71]||(c[71]=[d("#1BA035")]))),_:1}),t(p,{type:"outline",color:"#AB57E3"},{default:u((()=>c[72]||(c[72]=[d("#AB57E3")]))),_:1}),t(p,{type:"outline",color:"#FF6C9D"},{default:u((()=>c[73]||(c[73]=[d("#FF6C9D")]))),_:1}),t(p,{type:"outline",color:"#0fc6c2"},{default:u((()=>c[74]||(c[74]=[d("#0fc6c2")]))),_:1})])),_:1}),t(s,{wrap:"",fill:""},{default:u((()=>[t(p,{type:"light-outline",color:"#4E6EF2",size:"mini",closable:""},{default:u((()=>c[75]||(c[75]=[d("#4E6EF2")]))),_:1}),t(p,{type:"light-outline",color:"#1BA035",size:"mini"},{default:u((()=>c[76]||(c[76]=[d("#1BA035")]))),_:1}),t(p,{type:"light-outline",color:"#AB57E3",size:"mini"},{default:u((()=>c[77]||(c[77]=[d("#AB57E3")]))),_:1}),t(p,{type:"light-outline",color:"#FF6C9D",size:"mini"},{default:u((()=>c[78]||(c[78]=[d("#FF6C9D")]))),_:1}),t(p,{type:"light-outline",color:"#0fc6c2",size:"mini"},{default:u((()=>c[79]||(c[79]=[d("#0fc6c2")]))),_:1})])),_:1})])),_:1})])}}});export{s as _};