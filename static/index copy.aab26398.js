import{r as o,v as i,x as s,L as m,M as k,t as f,N as h}from"./entry.cfb17626.js";const g={class:"relative border-2 border-dashed border-green-500 inline-block"},w=["onMousedown"],C=s("p",null,"TEST",-1),L=[C],x={__name:"index copy",setup(T){const d=["LT","CT","RT","RC","RB","CB","LB","LC"],p=t=>{let e="";switch(t){case"LT":e="left-0 top-0";break;case"CT":e="left-1/2 top-0";break;case"RT":e="left-full top-0";break;case"RC":e="left-full top-1/2";break;case"RB":e="left-full top-full";break;case"CB":e="left-1/2 top-full";break;case"LB":e="left-0 top-full";break;case"LC":e="left-0 top-1/2";break}return e},l=o(!1),n=o(""),b=t=>{n.value=t,l.value=!0},_=()=>{l.value=!1},r=o(null),c=o(null),v=t=>{if(l.value){const e=r.value;t.clientX-e.offsetLeft,t.clientY-e.offsetTop;const a=c.value;switch(n.value){case"LT":a.classList.remove("absolute")}}};return(t,e)=>(f(),i("div",{class:"border-2 border-blue-800 mx-auto max-w-[600px] aspect-[1920/1080] p-2",ref_key:"drawingContainer",ref:r,onMousemove:v},[s("div",g,[(f(),i(m,null,k(d,(a,u)=>s("div",{class:h(["absolute z-10 cursor-pointer rounded-full h-2 w-2 bg-red-500 -translate-x-1 -translate-y-1",p(a)]),key:u,onMousedown:B=>b(u),onMouseup:_},null,42,w)),64)),s("div",{class:"bg-blue-300",ref_key:"drawingElement",ref:c},L,512)])],544))}};export{x as default};
