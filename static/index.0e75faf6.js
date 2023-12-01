import{r as h,L as _,o as L,v as S,x as w,M as T,t as H,N as E}from"./entry.2d4368de.js";import{f as v,a as I,b as W}from"./findIndex.615d1ad3.js";const z=["onWheel"],F={class:"text-center mt-4"},o=10,V={__name:"index",setup(N){console.log("index"),h(1);const n=h(null),y=h({x:0,y:0}),r=h(null),u=_([{id:1,x:30,y:30,width:50,height:50,selected:!1,isDragging:!1,scale:1,fillStyle:"#3498db"},{id:2,x:30,y:30,width:50,height:50,selected:!1,isDragging:!1,scale:1,fillStyle:"#bbb"}]),p=[{cursor:"LT",x:0,y:0},{cursor:"CT",x:.5,y:0},{cursor:"RT",x:1,y:0},{cursor:"RC",x:1,y:.5},{cursor:"RB",x:1,y:1},{cursor:"CB",x:.5,y:1},{cursor:"LB",x:0,y:1},{cursor:"LC",x:0,y:.5}],g=()=>{const e=r.value.getContext("2d");e.clearRect(0,0,r.value.width,r.value.height),v(u,t=>{e.save(),e.translate(t.x,t.y),e.scale(t.scale,t.scale),e.fillStyle=t.fillStyle,e.fillRect(0,0,t.width,t.height),t.selected&&p.forEach(s=>{const d=s.x*t.width-o/2,c=s.y*t.height-o/2;e.fillStyle="#000",e.fillRect(d,c,o,o)}),e.restore()})},m=h(null),D=e=>{const t=e.deltaY>0?-.1:.1;n.value&&(n.value.scale+=t,n.value.scale=Math.max(.1,n.value.scale)),g()},k=(e,t,s)=>{const d=s.clientX-e.x*t.x-r.value.getBoundingClientRect().left,c=s.clientY-e.y*t.y-r.value.getBoundingClientRect().top,l=s.clientX-r.value.getBoundingClientRect().left,i=s.clientY-r.value.getBoundingClientRect().top;switch(t.cursor){case"LT":e.width=e.width+e.x-l,e.x=l,e.height=e.height+e.y-i,e.y=i;break;case"CT":e.height=e.height+e.y-i,e.y=i;break;case"RT":e.height=e.height+e.y-i,e.y=i,e.width=d;break;case"RC":e.width=d;break;case"RB":e.width=d,e.height=c;break;case"CB":e.height=c;break;case"LB":e.width=e.width+e.x-l,e.x=l,e.height=c;break;case"LC":e.width=e.width+e.x-l,e.x=l;break}g()},x=h(null),f=h(null);let a;const X=e=>{a="";const t=e.clientX-r.value.getBoundingClientRect().left,s=e.clientY-r.value.getBoundingClientRect().top,d=W(u,l=>t>=l.x+(l.width<0?l.width:0)&&t<=l.x+Math.abs(l.width)+o&&s>=l.y+(l.height<0?l.height:0)&&s<=l.y+Math.abs(l.height)+o);v(u,l=>{l.selected=!1,l.isDragging=!1}),v(d,(l,i)=>{console.log(l,i),a=l}),console.log(u,"objects"),console.log(a,"clickedObject"),console.log(d,"filterObject");let c="";v(u,l=>{const i=p.find(R=>{const B=l.x+R.x*l.width-o/2,Y=l.y+R.y*l.height-o/2;return t>=B&&t<=B+o&&s>=Y&&s<=Y+o});i&&(c=i)}),c?(m.value=!0,console.log("點擊到控制點",c,"of物件",a),x.value=a,f.value=c,a.selected=!0,k(a,c,e)):a?(console.log("click object"),a.isDragging=!0,a.selected=!0,n.value=a,y.value={x:e.clientX,y:e.clientY},g()):(v(u,l=>{l.selected=!1,l.isDragging=!1}),x.value="",f.value="",g(),console.log(a,"clear"))},M=()=>{n.value&&(n.value.isDragging=!1),n.value=null,m.value=!1,x.value=null,f.value=null},O=e=>{if(n.value&&n.value.isDragging){const t=e.clientX-y.value.x,s=e.clientY-y.value.y;n.value.x+=t,n.value.y+=s,y.value={x:e.clientX,y:e.clientY},g()}else m.value&&x.value&&f.value&&k(x.value,f.value,e)},C=e=>{console.log(a,e,"zindex");const t=I(u,{id:a.id});if(console.log(t,"currentIndex"),t!==-1){const s=u.splice(t,1)[0];u.splice(t+e,0,s),g()}};return L(()=>{g(),console.log("drawObjects")}),(e,t)=>(H(),S(T,null,[w("canvas",{class:"border-2 border-blue-800 mx-auto max-w-[600px] aspect-[1920/1080]",ref_key:"myCanvas",ref:r,onMousedown:X,onMouseup:M,onMousemove:O,onWheel:E(D,["prevent"])},null,40,z),w("div",F,[w("button",{class:"border-2 mx-2 px-2 cursor-pointer border-orange-700 shadow-none hover:bg-orange-400 hover:text-orange-950",onClick:t[0]||(t[0]=s=>C(1))},"向上一層"),w("button",{class:"border-2 mx-2 px-2 cursor-pointer border-orange-700 shadow-none hover:bg-orange-400 hover:text-orange-950",onClick:t[1]||(t[1]=s=>C(-1))},"向下一層")])],64))}};export{V as default};
