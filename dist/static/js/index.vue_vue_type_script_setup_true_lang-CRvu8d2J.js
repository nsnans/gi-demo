import{d as e,e as a,f as d,o as t,a as c,w as n,i as r,h as l,eY as o}from"./index-CTftGuoI.js";const i=[{id:"7e05bd5a227a5c5c05054b41d5e4c82c",parentId:"0",parentName:null,name:"一级指标（实施考核）",level:1,quotaWeight:60,selfScore:120,deptScore:null,children:[{id:"784f95270c4c6139194dd40a29fb15dc",parentId:"7e05bd5a227a5c5c05054b41d5e4c82c",parentName:"一级指标（实施考核）",name:"二级指标（实施考核）",level:2,quotaWeight:40,selfScore:30,deptScore:null,children:[{id:"7d8c544d388823c6c1c588ee3ac0f10d",parentId:"784f95270c4c6139194dd40a29fb15dc",parentName:"二级指标（实施考核）",name:"三级指标（实施考核）",level:3,quotaWeight:30,selfScore:20,deptScore:null,children:[{id:"5e91a2eac4b7f340d90a6d7bc294d83d",children:[],parentId:"7d8c544d388823c6c1c588ee3ac0f10d",parentName:"三级指标（实施考核）",name:"四级指标（实施考核）1",level:4,quotaWeight:80,selfScore:8,deptScore:68},{id:"5e91a2eac4b7f340d90a6d7bc294d84d",children:[],parentId:"7d8c544d388823c6c1c588ee3ac0f10d",parentName:"三级指标（实施考核）",name:"四级指标（实施考核）2",level:4,quotaWeight:21,selfScore:3,deptScore:70}]},{id:"7d8c544d388823c6c1c588ee3ac5560d",parentId:"784f95270c4c6139194dd40a29fb15dc",parentName:"二级指标（实施考核）",name:"三级指标（实施考核）1",level:3,quotaWeight:30,selfScore:20,deptScore:75,children:[{id:"5e91a2eac4b7f340d90a6d7bc294d56d",children:[],parentId:"7d8c544d388823c6c1c588ee3ac5560d",parentName:"三级指标（实施考核）",name:"四级指标（实施考核）3",level:4,quotaWeight:25,selfScore:5,deptScore:90}]}]}]}],s=e({__name:"index",setup(e){const s=a([]),p=[{title:"一级指标",dataIndex:"name1"},{title:"二级指标",dataIndex:"name2"},{title:"三级指标",dataIndex:"name3"},{title:"四级指标",dataIndex:"name4"},{title:"权重分",dataIndex:"quotaWeight",width:100},{title:"自评分",dataIndex:"selfScore",width:100},{title:"处室评分（百分制）",dataIndex:"deptScore",fixed:"right"}],f=({record:e,rowIndex:a,column:d})=>{const t=e[d.dataIndex];if(t&&["name1","name2","name3"].includes(d.dataIndex)){const e=s.value[a-1];let c=s.value[a+1];if(e&&e[d.dataIndex]===t)return{rowspan:0,colspan:0};{let e=1;for(;c&&c[d.dataIndex]===t;)c=s.value[++e+a];if(e>1)return{rowspan:e,colspan:1}}}};return s.value=(e=>{const a=[],d={};return o.eachTree(e,((e,t,c,n,r)=>{if(d[e.id]=e,e.keys=r?r.keys.concat([e.id]):[e.id],!e.children||!e.children.length){const t={};e.keys.forEach(((e,a)=>{const c=a+1,n=d[e];t[`id${c}`]=n.id,t[`name${c}`]=n.name,4===c&&(t.quotaWeight=n.quotaWeight,t.selfScore=n.selfScore,t.deptScore=n.deptScore)})),a.push(t)}}),{children:"children"}),a})(i),(e,a)=>{const o=d("a-table"),i=d("a-card");return t(),c(i,{title:"横向树列表",bordered:!1},{default:n((()=>[r(o,{hoverable:!1,scroll:{x:"100%",y:"100%",minWidth:1e3},bordered:{cell:!0},columns:p,data:l(s),pagination:!1,"span-method":f},null,8,["data"])])),_:1})}}});export{s as _};
