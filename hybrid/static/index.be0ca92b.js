import{r as R,O as it,o as st,v as ot,x as K,L as ut,t as ct,P as ft}from"./entry.dede6f31.js";var lt=typeof global=="object"&&global&&global.Object===Object&&global;const Ne=lt;var gt=typeof self=="object"&&self&&self.Object===Object&&self,dt=Ne||gt||Function("return this")();const S=dt;var ht=S.Symbol;const I=ht;var Ge=Object.prototype,pt=Ge.hasOwnProperty,yt=Ge.toString,G=I?I.toStringTag:void 0;function _t(e){var t=pt.call(e,G),r=e[G];try{e[G]=void 0;var n=!0}catch{}var a=yt.call(e);return n&&(t?e[G]=r:delete e[G]),a}var vt=Object.prototype,wt=vt.toString;function Tt(e){return wt.call(e)}var bt="[object Null]",xt="[object Undefined]",he=I?I.toStringTag:void 0;function B(e){return e==null?e===void 0?xt:bt:he&&he in Object(e)?_t(e):Tt(e)}function F(e){return e!=null&&typeof e=="object"}var $t="[object Symbol]";function q(e){return typeof e=="symbol"||F(e)&&B(e)==$t}function At(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var Ot=Array.isArray;const O=Ot;var mt=1/0,pe=I?I.prototype:void 0,ye=pe?pe.toString:void 0;function He(e){if(typeof e=="string")return e;if(O(e))return At(e,He)+"";if(q(e))return ye?ye.call(e):"";var t=e+"";return t=="0"&&1/e==-mt?"-0":t}var Pt=/\s/;function St(e){for(var t=e.length;t--&&Pt.test(e.charAt(t)););return t}var Et=/^\s+/;function Ct(e){return e&&e.slice(0,St(e)+1).replace(Et,"")}function z(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var _e=0/0,It=/^[-+]0x[0-9a-f]+$/i,Rt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,Dt=parseInt;function Lt(e){if(typeof e=="number")return e;if(q(e))return _e;if(z(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=z(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ct(e);var r=Rt.test(e);return r||Mt.test(e)?Dt(e.slice(2),r?2:8):It.test(e)?_e:+e}var ve=1/0,Ft=17976931348623157e292;function Bt(e){if(!e)return e===0?e:0;if(e=Lt(e),e===ve||e===-ve){var t=e<0?-1:1;return t*Ft}return e===e?e:0}function Nt(e){var t=Bt(e),r=t%1;return t===t?r?t-r:t:0}function Ue(e){return e}var Gt="[object AsyncFunction]",Ht="[object Function]",Ut="[object GeneratorFunction]",zt="[object Proxy]";function ze(e){if(!z(e))return!1;var t=B(e);return t==Ht||t==Ut||t==Gt||t==zt}var Xt=S["__core-js_shared__"];const V=Xt;var we=function(){var e=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Yt(e){return!!we&&we in e}var Kt=Function.prototype,Wt=Kt.toString;function L(e){if(e!=null){try{return Wt.call(e)}catch{}try{return e+""}catch{}}return""}var Zt=/[\\^$.*+?()[\]{}|]/g,qt=/^\[object .+?Constructor\]$/,Jt=Function.prototype,Qt=Object.prototype,jt=Jt.toString,Vt=Qt.hasOwnProperty,kt=RegExp("^"+jt.call(Vt).replace(Zt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function er(e){if(!z(e)||Yt(e))return!1;var t=ze(e)?kt:qt;return t.test(L(e))}function tr(e,t){return e==null?void 0:e[t]}function N(e,t){var r=tr(e,t);return er(r)?r:void 0}var rr=N(S,"WeakMap");const te=rr;function nr(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}function ar(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1}var ir=9007199254740991,sr=/^(?:0|[1-9]\d*)$/;function Xe(e,t){var r=typeof e;return t=t??ir,!!t&&(r=="number"||r!="symbol"&&sr.test(e))&&e>-1&&e%1==0&&e<t}function Ye(e,t){return e===t||e!==e&&t!==t}var or=9007199254740991;function se(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=or}function Ke(e){return e!=null&&se(e.length)&&!ze(e)}var ur=Object.prototype;function cr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ur;return e===r}function fr(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var lr="[object Arguments]";function Te(e){return F(e)&&B(e)==lr}var We=Object.prototype,gr=We.hasOwnProperty,dr=We.propertyIsEnumerable,hr=Te(function(){return arguments}())?Te:function(e){return F(e)&&gr.call(e,"callee")&&!dr.call(e,"callee")};const Ze=hr;function pr(){return!1}var qe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,be=qe&&typeof module=="object"&&module&&!module.nodeType&&module,yr=be&&be.exports===qe,xe=yr?S.Buffer:void 0,_r=xe?xe.isBuffer:void 0,vr=_r||pr;const re=vr;var wr="[object Arguments]",Tr="[object Array]",br="[object Boolean]",xr="[object Date]",$r="[object Error]",Ar="[object Function]",Or="[object Map]",mr="[object Number]",Pr="[object Object]",Sr="[object RegExp]",Er="[object Set]",Cr="[object String]",Ir="[object WeakMap]",Rr="[object ArrayBuffer]",Mr="[object DataView]",Dr="[object Float32Array]",Lr="[object Float64Array]",Fr="[object Int8Array]",Br="[object Int16Array]",Nr="[object Int32Array]",Gr="[object Uint8Array]",Hr="[object Uint8ClampedArray]",Ur="[object Uint16Array]",zr="[object Uint32Array]",h={};h[Dr]=h[Lr]=h[Fr]=h[Br]=h[Nr]=h[Gr]=h[Hr]=h[Ur]=h[zr]=!0;h[wr]=h[Tr]=h[Rr]=h[br]=h[Mr]=h[xr]=h[$r]=h[Ar]=h[Or]=h[mr]=h[Pr]=h[Sr]=h[Er]=h[Cr]=h[Ir]=!1;function Xr(e){return F(e)&&se(e.length)&&!!h[B(e)]}function Yr(e){return function(t){return e(t)}}var Je=typeof exports=="object"&&exports&&!exports.nodeType&&exports,U=Je&&typeof module=="object"&&module&&!module.nodeType&&module,Kr=U&&U.exports===Je,k=Kr&&Ne.process,Wr=function(){try{var e=U&&U.require&&U.require("util").types;return e||k&&k.binding&&k.binding("util")}catch{}}();const $e=Wr;var Ae=$e&&$e.isTypedArray,Zr=Ae?Yr(Ae):Xr;const Qe=Zr;var qr=Object.prototype,Jr=qr.hasOwnProperty;function Qr(e,t){var r=O(e),n=!r&&Ze(e),a=!r&&!n&&re(e),i=!r&&!n&&!a&&Qe(e),o=r||n||a||i,f=o?fr(e.length,String):[],d=f.length;for(var g in e)(t||Jr.call(e,g))&&!(o&&(g=="length"||a&&(g=="offset"||g=="parent")||i&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||Xe(g,d)))&&f.push(g);return f}function jr(e,t){return function(r){return e(t(r))}}var Vr=jr(Object.keys,Object);const kr=Vr;var en=Object.prototype,tn=en.hasOwnProperty;function rn(e){if(!cr(e))return kr(e);var t=[];for(var r in Object(e))tn.call(e,r)&&r!="constructor"&&t.push(r);return t}function oe(e){return Ke(e)?Qr(e):rn(e)}var nn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,an=/^\w*$/;function ue(e,t){if(O(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||q(e)?!0:an.test(e)||!nn.test(e)||t!=null&&e in Object(t)}var sn=N(Object,"create");const X=sn;function on(){this.__data__=X?X(null):{},this.size=0}function un(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var cn="__lodash_hash_undefined__",fn=Object.prototype,ln=fn.hasOwnProperty;function gn(e){var t=this.__data__;if(X){var r=t[e];return r===cn?void 0:r}return ln.call(t,e)?t[e]:void 0}var dn=Object.prototype,hn=dn.hasOwnProperty;function pn(e){var t=this.__data__;return X?t[e]!==void 0:hn.call(t,e)}var yn="__lodash_hash_undefined__";function _n(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=X&&t===void 0?yn:t,this}function D(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}D.prototype.clear=on;D.prototype.delete=un;D.prototype.get=gn;D.prototype.has=pn;D.prototype.set=_n;function vn(){this.__data__=[],this.size=0}function J(e,t){for(var r=e.length;r--;)if(Ye(e[r][0],t))return r;return-1}var wn=Array.prototype,Tn=wn.splice;function bn(e){var t=this.__data__,r=J(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Tn.call(t,r,1),--this.size,!0}function xn(e){var t=this.__data__,r=J(t,e);return r<0?void 0:t[r][1]}function $n(e){return J(this.__data__,e)>-1}function An(e,t){var r=this.__data__,n=J(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function E(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}E.prototype.clear=vn;E.prototype.delete=bn;E.prototype.get=xn;E.prototype.has=$n;E.prototype.set=An;var On=N(S,"Map");const Y=On;function mn(){this.size=0,this.__data__={hash:new D,map:new(Y||E),string:new D}}function Pn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Q(e,t){var r=e.__data__;return Pn(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Sn(e){var t=Q(this,e).delete(e);return this.size-=t?1:0,t}function En(e){return Q(this,e).get(e)}function Cn(e){return Q(this,e).has(e)}function In(e,t){var r=Q(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function C(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}C.prototype.clear=mn;C.prototype.delete=Sn;C.prototype.get=En;C.prototype.has=Cn;C.prototype.set=In;var Rn="Expected a function";function ce(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Rn);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(ce.Cache||C),r}ce.Cache=C;var Mn=500;function Dn(e){var t=ce(e,function(n){return r.size===Mn&&r.clear(),n}),r=t.cache;return t}var Ln=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fn=/\\(\\)?/g,Bn=Dn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ln,function(r,n,a,i){t.push(a?i.replace(Fn,"$1"):n||r)}),t});const Nn=Bn;function Gn(e){return e==null?"":He(e)}function je(e,t){return O(e)?e:ue(e,t)?[e]:Nn(Gn(e))}var Hn=1/0;function j(e){if(typeof e=="string"||q(e))return e;var t=e+"";return t=="0"&&1/e==-Hn?"-0":t}function Ve(e,t){t=je(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[j(t[r++])];return r&&r==n?e:void 0}function Un(e,t,r){var n=e==null?void 0:Ve(e,t);return n===void 0?r:n}function zn(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}function Xn(){this.__data__=new E,this.size=0}function Yn(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Kn(e){return this.__data__.get(e)}function Wn(e){return this.__data__.has(e)}var Zn=200;function qn(e,t){var r=this.__data__;if(r instanceof E){var n=r.__data__;if(!Y||n.length<Zn-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new C(n)}return r.set(e,t),this.size=r.size,this}function P(e){var t=this.__data__=new E(e);this.size=t.size}P.prototype.clear=Xn;P.prototype.delete=Yn;P.prototype.get=Kn;P.prototype.has=Wn;P.prototype.set=qn;function ke(e,t){for(var r=-1,n=e==null?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i}function Jn(){return[]}var Qn=Object.prototype,jn=Qn.propertyIsEnumerable,Oe=Object.getOwnPropertySymbols,Vn=Oe?function(e){return e==null?[]:(e=Object(e),ke(Oe(e),function(t){return jn.call(e,t)}))}:Jn;const kn=Vn;function ea(e,t,r){var n=t(e);return O(e)?n:zn(n,r(e))}function me(e){return ea(e,oe,kn)}var ta=N(S,"DataView");const ne=ta;var ra=N(S,"Promise");const ae=ra;var na=N(S,"Set");const ie=na;var Pe="[object Map]",aa="[object Object]",Se="[object Promise]",Ee="[object Set]",Ce="[object WeakMap]",Ie="[object DataView]",ia=L(ne),sa=L(Y),oa=L(ae),ua=L(ie),ca=L(te),M=B;(ne&&M(new ne(new ArrayBuffer(1)))!=Ie||Y&&M(new Y)!=Pe||ae&&M(ae.resolve())!=Se||ie&&M(new ie)!=Ee||te&&M(new te)!=Ce)&&(M=function(e){var t=B(e),r=t==aa?e.constructor:void 0,n=r?L(r):"";if(n)switch(n){case ia:return Ie;case sa:return Pe;case oa:return Se;case ua:return Ee;case ca:return Ce}return t});const Re=M;var fa=S.Uint8Array;const Me=fa;var la="__lodash_hash_undefined__";function ga(e){return this.__data__.set(e,la),this}function da(e){return this.__data__.has(e)}function Z(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new C;++t<r;)this.add(e[t])}Z.prototype.add=Z.prototype.push=ga;Z.prototype.has=da;function ha(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function pa(e,t){return e.has(t)}var ya=1,_a=2;function et(e,t,r,n,a,i){var o=r&ya,f=e.length,d=t.length;if(f!=d&&!(o&&d>f))return!1;var g=i.get(e),_=i.get(t);if(g&&_)return g==t&&_==e;var p=-1,c=!0,x=r&_a?new Z:void 0;for(i.set(e,t),i.set(t,e);++p<f;){var w=e[p],T=t[p];if(n)var $=o?n(T,w,p,t,e,i):n(w,T,p,e,t,i);if($!==void 0){if($)continue;c=!1;break}if(x){if(!ha(t,function(s,u){if(!pa(x,u)&&(w===s||a(w,s,r,n,i)))return x.push(u)})){c=!1;break}}else if(!(w===T||a(w,T,r,n,i))){c=!1;break}}return i.delete(e),i.delete(t),c}function va(e){var t=-1,r=Array(e.size);return e.forEach(function(n,a){r[++t]=[a,n]}),r}function wa(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var Ta=1,ba=2,xa="[object Boolean]",$a="[object Date]",Aa="[object Error]",Oa="[object Map]",ma="[object Number]",Pa="[object RegExp]",Sa="[object Set]",Ea="[object String]",Ca="[object Symbol]",Ia="[object ArrayBuffer]",Ra="[object DataView]",De=I?I.prototype:void 0,ee=De?De.valueOf:void 0;function Ma(e,t,r,n,a,i,o){switch(r){case Ra:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ia:return!(e.byteLength!=t.byteLength||!i(new Me(e),new Me(t)));case xa:case $a:case ma:return Ye(+e,+t);case Aa:return e.name==t.name&&e.message==t.message;case Pa:case Ea:return e==t+"";case Oa:var f=va;case Sa:var d=n&Ta;if(f||(f=wa),e.size!=t.size&&!d)return!1;var g=o.get(e);if(g)return g==t;n|=ba,o.set(e,t);var _=et(f(e),f(t),n,a,i,o);return o.delete(e),_;case Ca:if(ee)return ee.call(e)==ee.call(t)}return!1}var Da=1,La=Object.prototype,Fa=La.hasOwnProperty;function Ba(e,t,r,n,a,i){var o=r&Da,f=me(e),d=f.length,g=me(t),_=g.length;if(d!=_&&!o)return!1;for(var p=d;p--;){var c=f[p];if(!(o?c in t:Fa.call(t,c)))return!1}var x=i.get(e),w=i.get(t);if(x&&w)return x==t&&w==e;var T=!0;i.set(e,t),i.set(t,e);for(var $=o;++p<d;){c=f[p];var s=e[c],u=t[c];if(n)var y=o?n(u,s,c,t,e,i):n(s,u,c,e,t,i);if(!(y===void 0?s===u||a(s,u,r,n,i):y)){T=!1;break}$||($=c=="constructor")}if(T&&!$){var b=e.constructor,v=t.constructor;b!=v&&"constructor"in e&&"constructor"in t&&!(typeof b=="function"&&b instanceof b&&typeof v=="function"&&v instanceof v)&&(T=!1)}return i.delete(e),i.delete(t),T}var Na=1,Le="[object Arguments]",Fe="[object Array]",W="[object Object]",Ga=Object.prototype,Be=Ga.hasOwnProperty;function Ha(e,t,r,n,a,i){var o=O(e),f=O(t),d=o?Fe:Re(e),g=f?Fe:Re(t);d=d==Le?W:d,g=g==Le?W:g;var _=d==W,p=g==W,c=d==g;if(c&&re(e)){if(!re(t))return!1;o=!0,_=!1}if(c&&!_)return i||(i=new P),o||Qe(e)?et(e,t,r,n,a,i):Ma(e,t,d,r,n,a,i);if(!(r&Na)){var x=_&&Be.call(e,"__wrapped__"),w=p&&Be.call(t,"__wrapped__");if(x||w){var T=x?e.value():e,$=w?t.value():t;return i||(i=new P),a(T,$,r,n,i)}}return c?(i||(i=new P),Ba(e,t,r,n,a,i)):!1}function fe(e,t,r,n,a){return e===t?!0:e==null||t==null||!F(e)&&!F(t)?e!==e&&t!==t:Ha(e,t,r,n,fe,a)}var Ua=1,za=2;function Xa(e,t,r,n){var a=r.length,i=a,o=!n;if(e==null)return!i;for(e=Object(e);a--;){var f=r[a];if(o&&f[2]?f[1]!==e[f[0]]:!(f[0]in e))return!1}for(;++a<i;){f=r[a];var d=f[0],g=e[d],_=f[1];if(o&&f[2]){if(g===void 0&&!(d in e))return!1}else{var p=new P;if(n)var c=n(g,_,d,e,t,p);if(!(c===void 0?fe(_,g,Ua|za,n,p):c))return!1}}return!0}function tt(e){return e===e&&!z(e)}function Ya(e){for(var t=oe(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,tt(a)]}return t}function rt(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}function Ka(e){var t=Ya(e);return t.length==1&&t[0][2]?rt(t[0][0],t[0][1]):function(r){return r===e||Xa(r,e,t)}}function Wa(e,t){return e!=null&&t in Object(e)}function Za(e,t,r){t=je(t,e);for(var n=-1,a=t.length,i=!1;++n<a;){var o=j(t[n]);if(!(i=e!=null&&r(e,o)))break;e=e[o]}return i||++n!=a?i:(a=e==null?0:e.length,!!a&&se(a)&&Xe(o,a)&&(O(e)||Ze(e)))}function qa(e,t){return e!=null&&Za(e,t,Wa)}var Ja=1,Qa=2;function ja(e,t){return ue(e)&&tt(t)?rt(j(e),t):function(r){var n=Un(r,e);return n===void 0&&n===t?qa(r,e):fe(t,n,Ja|Qa)}}function Va(e){return function(t){return t==null?void 0:t[e]}}function ka(e){return function(t){return Ve(t,e)}}function ei(e){return ue(e)?Va(j(e)):ka(e)}function nt(e){return typeof e=="function"?e:e==null?Ue:typeof e=="object"?O(e)?ja(e[0],e[1]):Ka(e):ei(e)}function ti(e){return function(t,r,n){for(var a=-1,i=Object(t),o=n(t),f=o.length;f--;){var d=o[e?f:++a];if(r(i[d],d,i)===!1)break}return t}}var ri=ti();const ni=ri;function ai(e,t){return e&&ni(e,t,oe)}function ii(e,t){return function(r,n){if(r==null)return r;if(!Ke(r))return e(r,n);for(var a=r.length,i=t?a:-1,o=Object(r);(t?i--:++i<a)&&n(o[i],i,o)!==!1;);return r}}var si=ii(ai);const at=si;function oi(e){return typeof e=="function"?e:Ue}function H(e,t){var r=O(e)?nr:at;return r(e,oi(t))}function ui(e,t){var r=[];return at(e,function(n,a,i){t(n,a,i)&&r.push(n)}),r}function ci(e,t){var r=O(e)?ke:ui;return r(e,nt(t))}var fi=Math.max;function li(e,t,r){var n=e==null?0:e.length;if(!n)return-1;var a=r==null?0:Nt(r);return a<0&&(a=fi(n+a,0)),ar(e,nt(t),a)}const gi=["onWheel"],di={class:"text-center mt-4"},m=10,pi={__name:"index",setup(e){R(1);const t=R(null),r=R({x:0,y:0}),n=R(null),a=it([{id:1,x:30,y:30,width:50,height:50,selected:!1,isDragging:!1,scale:1,fillStyle:"#3498db"},{id:2,x:30,y:30,width:50,height:50,selected:!1,isDragging:!1,scale:1,fillStyle:"#bbb"}]),i=[{cursor:"LT",x:0,y:0},{cursor:"CT",x:.5,y:0},{cursor:"RT",x:1,y:0},{cursor:"RC",x:1,y:.5},{cursor:"RB",x:1,y:1},{cursor:"CB",x:.5,y:1},{cursor:"LB",x:0,y:1},{cursor:"LC",x:0,y:.5}],o=()=>{const s=n.value.getContext("2d");s.clearRect(0,0,n.value.width,n.value.height),H(a,u=>{s.save(),s.translate(u.x,u.y),s.scale(u.scale,u.scale),s.fillStyle=u.fillStyle,s.fillRect(0,0,u.width,u.height),u.selected&&i.forEach(y=>{const b=y.x*u.width-m/2,v=y.y*u.height-m/2;s.fillStyle="#000",s.fillRect(b,v,m,m)}),s.restore()})},f=R(null),d=s=>{const u=s.deltaY>0?-.1:.1;t.value&&(t.value.scale+=u,t.value.scale=Math.max(.1,t.value.scale)),o()},g=(s,u,y)=>{const b=y.clientX-s.x*u.x-n.value.getBoundingClientRect().left,v=y.clientY-s.y*u.y-n.value.getBoundingClientRect().top,l=y.clientX-n.value.getBoundingClientRect().left,A=y.clientY-n.value.getBoundingClientRect().top;switch(u.cursor){case"LT":s.width=s.width+s.x-l,s.x=l,s.height=s.height+s.y-A,s.y=A;break;case"CT":s.height=s.height+s.y-A,s.y=A;break;case"RT":s.height=s.height+s.y-A,s.y=A,s.width=b;break;case"RC":s.width=b;break;case"RB":s.width=b,s.height=v;break;case"CB":s.height=v;break;case"LB":s.width=s.width+s.x-l,s.x=l,s.height=v;break;case"LC":s.width=s.width+s.x-l,s.x=l;break}o()},_=R(null),p=R(null);let c;const x=s=>{c="";const u=s.clientX-n.value.getBoundingClientRect().left,y=s.clientY-n.value.getBoundingClientRect().top,b=ci(a,l=>u>=l.x+(l.width<0?l.width:0)&&u<=l.x+Math.abs(l.width)+m&&y>=l.y+(l.height<0?l.height:0)&&y<=l.y+Math.abs(l.height)+m);H(a,l=>{l.selected=!1,l.isDragging=!1}),H(b,(l,A)=>{console.log(l,A),c=l}),console.log(a,"objects"),console.log(c,"clickedObject"),console.log(b,"filterObject");let v="";H(a,l=>{const A=i.find(le=>{const ge=l.x+le.x*l.width-m/2,de=l.y+le.y*l.height-m/2;return u>=ge&&u<=ge+m&&y>=de&&y<=de+m});A&&(v=A)}),v?(f.value=!0,console.log("點擊到控制點",v,"of物件",c),_.value=c,p.value=v,c.selected=!0,g(c,v,s)):c?(console.log("click object"),c.isDragging=!0,c.selected=!0,t.value=c,r.value={x:s.clientX,y:s.clientY},o()):(H(a,l=>{l.selected=!1,l.isDragging=!1}),_.value="",p.value="",o(),console.log(c,"clear"))},w=()=>{t.value&&(t.value.isDragging=!1),t.value=null,f.value=!1,_.value=null,p.value=null},T=s=>{if(t.value&&t.value.isDragging){const u=s.clientX-r.value.x,y=s.clientY-r.value.y;t.value.x+=u,t.value.y+=y,r.value={x:s.clientX,y:s.clientY},o()}else f.value&&_.value&&p.value&&g(_.value,p.value,s)},$=s=>{console.log(c,s,"zindex");const u=li(a,{id:c.id});if(console.log(u,"currentIndex"),u!==-1){const y=a.splice(u,1)[0];a.splice(u+s,0,y),o()}};return st(()=>{o(),console.log("drawObjects")}),(s,u)=>(ct(),ot(ut,null,[K("canvas",{class:"border-2 border-blue-800 mx-auto max-w-[600px] aspect-[1920/1080]",ref_key:"myCanvas",ref:n,onMousedown:x,onMouseup:w,onMousemove:T,onWheel:ft(d,["prevent"])},null,40,gi),K("div",di,[K("button",{class:"border-2 mx-2 px-2 cursor-pointer border-orange-700 shadow-none hover:bg-orange-400 hover:text-orange-950",onClick:u[0]||(u[0]=y=>$(1))},"向上一層"),K("button",{class:"border-2 mx-2 px-2 cursor-pointer border-orange-700 shadow-none hover:bg-orange-400 hover:text-orange-950",onClick:u[1]||(u[1]=y=>$(-1))},"向下一層")])],64))}};export{pi as default};
