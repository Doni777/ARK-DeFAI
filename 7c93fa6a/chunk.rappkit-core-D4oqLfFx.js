const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["7c93fa6a/chunk.index-Si1u1Z0u.js","7c93fa6a/chunk.rappkit-ui-CSaCLIY7.js","7c93fa6a/chunk.rappkit-utils-DJqMpFvj.js","7c93fa6a/chunk.wc-libs-DepVwrWw.js","7c93fa6a/chunk.index-CtMxEuXF.js"])))=>i.map(i=>d[i]);
import{useState as ed,useEffect as td}from"https://esm.sh/react@18.3.1";import{d as Tr,r as id,u as nd,e as rd,B as oa,z as g,p as od,g as ad,a as sd,m as cd,b as ld,c as ud,f as dd,h as pd,i as hd,j as fd,s as wd,k as gd,w as md,l as vd,n as bd,o as Cd,q as F,t as N,v as Mt,x as A,y as l,A as h,C as oo,D as O,E as si,F as ci,G as v,Q as xd,H as yd}from"./chunk.rappkit-utils-DJqMpFvj.js";import{k as Ed,A as Td,E as _d,d as kd,Q as Ad,J as Sd,W as Id,V as Rd,Y as Nd}from"./chunk.wc-libs-DepVwrWw.js";import{http as Es,fallback as $d,createClient as Jl,custom as Pd,weiUnits as Od,ContractFunctionExecutionError as Ld,hexToString as eu,trim as Dd,formatUnits as ic,getAddress as vt,SwitchChainError as Pi,numberToHex as rn,UserRejectedRequestError as Ge,withRetry as Ud,withTimeout as Wd,ResourceUnavailableRpcError as Ts,parseUnits as Md}from"https://esm.sh/viem@2.26.2";import{u as Bd}from"./chunk.rappkit-ui-CSaCLIY7.js";var nm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function rm(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(r){var o=Object.getOwnPropertyDescriptor(i,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return i[r]}})}),t}function Oo(i){return{formatters:void 0,fees:void 0,serializers:void 0,...i}}const qc=Oo({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"}),Kc=Oo({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});Oo({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"});Oo({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}});Oo({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}});var _s={},Qr={},Yc;function Fd(){if(Yc)return Qr;Yc=1,Qr.byteLength=s,Qr.toByteArray=d,Qr.fromByteArray=b;for(var i=[],e=[],t=typeof Uint8Array<"u"?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,n=r.length;o<n;++o)i[o]=r[o],e[r.charCodeAt(o)]=o;e[45]=62,e[95]=63;function a(y){var T=y.length;if(T%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var _=y.indexOf("=");_===-1&&(_=T);var I=_===T?0:4-_%4;return[_,I]}function s(y){var T=a(y),_=T[0],I=T[1];return(_+I)*3/4-I}function p(y,T,_){return(T+_)*3/4-_}function d(y){var T,_=a(y),I=_[0],B=_[1],W=new t(p(y,I,B)),D=0,V=B>0?I-4:I,L;for(L=0;L<V;L+=4)T=e[y.charCodeAt(L)]<<18|e[y.charCodeAt(L+1)]<<12|e[y.charCodeAt(L+2)]<<6|e[y.charCodeAt(L+3)],W[D++]=T>>16&255,W[D++]=T>>8&255,W[D++]=T&255;return B===2&&(T=e[y.charCodeAt(L)]<<2|e[y.charCodeAt(L+1)]>>4,W[D++]=T&255),B===1&&(T=e[y.charCodeAt(L)]<<10|e[y.charCodeAt(L+1)]<<4|e[y.charCodeAt(L+2)]>>2,W[D++]=T>>8&255,W[D++]=T&255),W}function w(y){return i[y>>18&63]+i[y>>12&63]+i[y>>6&63]+i[y&63]}function C(y,T,_){for(var I,B=[],W=T;W<_;W+=3)I=(y[W]<<16&16711680)+(y[W+1]<<8&65280)+(y[W+2]&255),B.push(w(I));return B.join("")}function b(y){for(var T,_=y.length,I=_%3,B=[],W=16383,D=0,V=_-I;D<V;D+=W)B.push(C(y,D,D+W>V?V:D+W));return I===1?(T=y[_-1],B.push(i[T>>2]+i[T<<4&63]+"==")):I===2&&(T=(y[_-2]<<8)+y[_-1],B.push(i[T>>10]+i[T>>4&63]+i[T<<2&63]+"=")),B.join("")}return Qr}var aa={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var Xc;function zd(){return Xc||(Xc=1,aa.read=function(i,e,t,r,o){var n,a,s=o*8-r-1,p=(1<<s)-1,d=p>>1,w=-7,C=t?o-1:0,b=t?-1:1,y=i[e+C];for(C+=b,n=y&(1<<-w)-1,y>>=-w,w+=s;w>0;n=n*256+i[e+C],C+=b,w-=8);for(a=n&(1<<-w)-1,n>>=-w,w+=r;w>0;a=a*256+i[e+C],C+=b,w-=8);if(n===0)n=1-d;else{if(n===p)return a?NaN:(y?-1:1)*(1/0);a=a+Math.pow(2,r),n=n-d}return(y?-1:1)*a*Math.pow(2,n-r)},aa.write=function(i,e,t,r,o,n){var a,s,p,d=n*8-o-1,w=(1<<d)-1,C=w>>1,b=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=r?0:n-1,T=r?1:-1,_=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=w):(a=Math.floor(Math.log(e)/Math.LN2),e*(p=Math.pow(2,-a))<1&&(a--,p*=2),a+C>=1?e+=b/p:e+=b*Math.pow(2,1-C),e*p>=2&&(a++,p/=2),a+C>=w?(s=0,a=w):a+C>=1?(s=(e*p-1)*Math.pow(2,o),a=a+C):(s=e*Math.pow(2,C-1)*Math.pow(2,o),a=0));o>=8;i[t+y]=s&255,y+=T,s/=256,o-=8);for(a=a<<o|s,d+=o;d>0;i[t+y]=a&255,y+=T,a/=256,d-=8);i[t+y-T]|=_*128}),aa}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Qc;function Vd(){return Qc||(Qc=1,(function(i){const e=Fd(),t=zd(),r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=s,i.SlowBuffer=W,i.INSPECT_MAX_BYTES=50;const o=2147483647;i.kMaxLength=o,s.TYPED_ARRAY_SUPPORT=n(),!s.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function n(){try{const f=new Uint8Array(1),c={foo:function(){return 42}};return Object.setPrototypeOf(c,Uint8Array.prototype),Object.setPrototypeOf(f,c),f.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function a(f){if(f>o)throw new RangeError('The value "'+f+'" is invalid for option "size"');const c=new Uint8Array(f);return Object.setPrototypeOf(c,s.prototype),c}function s(f,c,u){if(typeof f=="number"){if(typeof c=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return C(f)}return p(f,c,u)}s.poolSize=8192;function p(f,c,u){if(typeof f=="string")return b(f,c);if(ArrayBuffer.isView(f))return T(f);if(f==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof f);if(ii(f,ArrayBuffer)||f&&ii(f.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ii(f,SharedArrayBuffer)||f&&ii(f.buffer,SharedArrayBuffer)))return _(f,c,u);if(typeof f=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const x=f.valueOf&&f.valueOf();if(x!=null&&x!==f)return s.from(x,c,u);const k=I(f);if(k)return k;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof f[Symbol.toPrimitive]=="function")return s.from(f[Symbol.toPrimitive]("string"),c,u);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof f)}s.from=function(f,c,u){return p(f,c,u)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function d(f){if(typeof f!="number")throw new TypeError('"size" argument must be of type number');if(f<0)throw new RangeError('The value "'+f+'" is invalid for option "size"')}function w(f,c,u){return d(f),f<=0?a(f):c!==void 0?typeof u=="string"?a(f).fill(c,u):a(f).fill(c):a(f)}s.alloc=function(f,c,u){return w(f,c,u)};function C(f){return d(f),a(f<0?0:B(f)|0)}s.allocUnsafe=function(f){return C(f)},s.allocUnsafeSlow=function(f){return C(f)};function b(f,c){if((typeof c!="string"||c==="")&&(c="utf8"),!s.isEncoding(c))throw new TypeError("Unknown encoding: "+c);const u=D(f,c)|0;let x=a(u);const k=x.write(f,c);return k!==u&&(x=x.slice(0,k)),x}function y(f){const c=f.length<0?0:B(f.length)|0,u=a(c);for(let x=0;x<c;x+=1)u[x]=f[x]&255;return u}function T(f){if(ii(f,Uint8Array)){const c=new Uint8Array(f);return _(c.buffer,c.byteOffset,c.byteLength)}return y(f)}function _(f,c,u){if(c<0||f.byteLength<c)throw new RangeError('"offset" is outside of buffer bounds');if(f.byteLength<c+(u||0))throw new RangeError('"length" is outside of buffer bounds');let x;return c===void 0&&u===void 0?x=new Uint8Array(f):u===void 0?x=new Uint8Array(f,c):x=new Uint8Array(f,c,u),Object.setPrototypeOf(x,s.prototype),x}function I(f){if(s.isBuffer(f)){const c=B(f.length)|0,u=a(c);return u.length===0||f.copy(u,0,0,c),u}if(f.length!==void 0)return typeof f.length!="number"||ys(f.length)?a(0):y(f);if(f.type==="Buffer"&&Array.isArray(f.data))return y(f.data)}function B(f){if(f>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return f|0}function W(f){return+f!=f&&(f=0),s.alloc(+f)}s.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==s.prototype},s.compare=function(c,u){if(ii(c,Uint8Array)&&(c=s.from(c,c.offset,c.byteLength)),ii(u,Uint8Array)&&(u=s.from(u,u.offset,u.byteLength)),!s.isBuffer(c)||!s.isBuffer(u))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===u)return 0;let x=c.length,k=u.length;for(let P=0,j=Math.min(x,k);P<j;++P)if(c[P]!==u[P]){x=c[P],k=u[P];break}return x<k?-1:k<x?1:0},s.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(c,u){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return s.alloc(0);let x;if(u===void 0)for(u=0,x=0;x<c.length;++x)u+=c[x].length;const k=s.allocUnsafe(u);let P=0;for(x=0;x<c.length;++x){let j=c[x];if(ii(j,Uint8Array))P+j.length>k.length?(s.isBuffer(j)||(j=s.from(j)),j.copy(k,P)):Uint8Array.prototype.set.call(k,j,P);else if(s.isBuffer(j))j.copy(k,P);else throw new TypeError('"list" argument must be an Array of Buffers');P+=j.length}return k};function D(f,c){if(s.isBuffer(f))return f.length;if(ArrayBuffer.isView(f)||ii(f,ArrayBuffer))return f.byteLength;if(typeof f!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof f);const u=f.length,x=arguments.length>2&&arguments[2]===!0;if(!x&&u===0)return 0;let k=!1;for(;;)switch(c){case"ascii":case"latin1":case"binary":return u;case"utf8":case"utf-8":return xs(f).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u*2;case"hex":return u>>>1;case"base64":return Gc(f).length;default:if(k)return x?-1:xs(f).length;c=(""+c).toLowerCase(),k=!0}}s.byteLength=D;function V(f,c,u){let x=!1;if((c===void 0||c<0)&&(c=0),c>this.length||((u===void 0||u>this.length)&&(u=this.length),u<=0)||(u>>>=0,c>>>=0,u<=c))return"";for(f||(f="utf8");;)switch(f){case"hex":return Hu(this,c,u);case"utf8":case"utf-8":return it(this,c,u);case"ascii":return zu(this,c,u);case"latin1":case"binary":return Vu(this,c,u);case"base64":return We(this,c,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Zu(this,c,u);default:if(x)throw new TypeError("Unknown encoding: "+f);f=(f+"").toLowerCase(),x=!0}}s.prototype._isBuffer=!0;function L(f,c,u){const x=f[c];f[c]=f[u],f[u]=x}s.prototype.swap16=function(){const c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let u=0;u<c;u+=2)L(this,u,u+1);return this},s.prototype.swap32=function(){const c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let u=0;u<c;u+=4)L(this,u,u+3),L(this,u+1,u+2);return this},s.prototype.swap64=function(){const c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let u=0;u<c;u+=8)L(this,u,u+7),L(this,u+1,u+6),L(this,u+2,u+5),L(this,u+3,u+4);return this},s.prototype.toString=function(){const c=this.length;return c===0?"":arguments.length===0?it(this,0,c):V.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(c){if(!s.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:s.compare(this,c)===0},s.prototype.inspect=function(){let c="";const u=i.INSPECT_MAX_BYTES;return c=this.toString("hex",0,u).replace(/(.{2})/g,"$1 ").trim(),this.length>u&&(c+=" ... "),"<Buffer "+c+">"},r&&(s.prototype[r]=s.prototype.inspect),s.prototype.compare=function(c,u,x,k,P){if(ii(c,Uint8Array)&&(c=s.from(c,c.offset,c.byteLength)),!s.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(u===void 0&&(u=0),x===void 0&&(x=c?c.length:0),k===void 0&&(k=0),P===void 0&&(P=this.length),u<0||x>c.length||k<0||P>this.length)throw new RangeError("out of range index");if(k>=P&&u>=x)return 0;if(k>=P)return-1;if(u>=x)return 1;if(u>>>=0,x>>>=0,k>>>=0,P>>>=0,this===c)return 0;let j=P-k,pe=x-u;const Pe=Math.min(j,pe),Ae=this.slice(k,P),Oe=c.slice(u,x);for(let xe=0;xe<Pe;++xe)if(Ae[xe]!==Oe[xe]){j=Ae[xe],pe=Oe[xe];break}return j<pe?-1:pe<j?1:0};function K(f,c,u,x,k){if(f.length===0)return-1;if(typeof u=="string"?(x=u,u=0):u>2147483647?u=2147483647:u<-2147483648&&(u=-2147483648),u=+u,ys(u)&&(u=k?0:f.length-1),u<0&&(u=f.length+u),u>=f.length){if(k)return-1;u=f.length-1}else if(u<0)if(k)u=0;else return-1;if(typeof c=="string"&&(c=s.from(c,x)),s.isBuffer(c))return c.length===0?-1:H(f,c,u,x,k);if(typeof c=="number")return c=c&255,typeof Uint8Array.prototype.indexOf=="function"?k?Uint8Array.prototype.indexOf.call(f,c,u):Uint8Array.prototype.lastIndexOf.call(f,c,u):H(f,[c],u,x,k);throw new TypeError("val must be string, number or Buffer")}function H(f,c,u,x,k){let P=1,j=f.length,pe=c.length;if(x!==void 0&&(x=String(x).toLowerCase(),x==="ucs2"||x==="ucs-2"||x==="utf16le"||x==="utf-16le")){if(f.length<2||c.length<2)return-1;P=2,j/=2,pe/=2,u/=2}function Pe(Oe,xe){return P===1?Oe[xe]:Oe.readUInt16BE(xe*P)}let Ae;if(k){let Oe=-1;for(Ae=u;Ae<j;Ae++)if(Pe(f,Ae)===Pe(c,Oe===-1?0:Ae-Oe)){if(Oe===-1&&(Oe=Ae),Ae-Oe+1===pe)return Oe*P}else Oe!==-1&&(Ae-=Ae-Oe),Oe=-1}else for(u+pe>j&&(u=j-pe),Ae=u;Ae>=0;Ae--){let Oe=!0;for(let xe=0;xe<pe;xe++)if(Pe(f,Ae+xe)!==Pe(c,xe)){Oe=!1;break}if(Oe)return Ae}return-1}s.prototype.includes=function(c,u,x){return this.indexOf(c,u,x)!==-1},s.prototype.indexOf=function(c,u,x){return K(this,c,u,x,!0)},s.prototype.lastIndexOf=function(c,u,x){return K(this,c,u,x,!1)};function we(f,c,u,x){u=Number(u)||0;const k=f.length-u;x?(x=Number(x),x>k&&(x=k)):x=k;const P=c.length;x>P/2&&(x=P/2);let j;for(j=0;j<x;++j){const pe=parseInt(c.substr(j*2,2),16);if(ys(pe))return j;f[u+j]=pe}return j}function X(f,c,u,x){return ra(xs(c,f.length-u),f,u,x)}function ce(f,c,u,x){return ra(Yu(c),f,u,x)}function ae(f,c,u,x){return ra(Gc(c),f,u,x)}function Me(f,c,u,x){return ra(Xu(c,f.length-u),f,u,x)}s.prototype.write=function(c,u,x,k){if(u===void 0)k="utf8",x=this.length,u=0;else if(x===void 0&&typeof u=="string")k=u,x=this.length,u=0;else if(isFinite(u))u=u>>>0,isFinite(x)?(x=x>>>0,k===void 0&&(k="utf8")):(k=x,x=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const P=this.length-u;if((x===void 0||x>P)&&(x=P),c.length>0&&(x<0||u<0)||u>this.length)throw new RangeError("Attempt to write outside buffer bounds");k||(k="utf8");let j=!1;for(;;)switch(k){case"hex":return we(this,c,u,x);case"utf8":case"utf-8":return X(this,c,u,x);case"ascii":case"latin1":case"binary":return ce(this,c,u,x);case"base64":return ae(this,c,u,x);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Me(this,c,u,x);default:if(j)throw new TypeError("Unknown encoding: "+k);k=(""+k).toLowerCase(),j=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function We(f,c,u){return c===0&&u===f.length?e.fromByteArray(f):e.fromByteArray(f.slice(c,u))}function it(f,c,u){u=Math.min(f.length,u);const x=[];let k=c;for(;k<u;){const P=f[k];let j=null,pe=P>239?4:P>223?3:P>191?2:1;if(k+pe<=u){let Pe,Ae,Oe,xe;switch(pe){case 1:P<128&&(j=P);break;case 2:Pe=f[k+1],(Pe&192)===128&&(xe=(P&31)<<6|Pe&63,xe>127&&(j=xe));break;case 3:Pe=f[k+1],Ae=f[k+2],(Pe&192)===128&&(Ae&192)===128&&(xe=(P&15)<<12|(Pe&63)<<6|Ae&63,xe>2047&&(xe<55296||xe>57343)&&(j=xe));break;case 4:Pe=f[k+1],Ae=f[k+2],Oe=f[k+3],(Pe&192)===128&&(Ae&192)===128&&(Oe&192)===128&&(xe=(P&15)<<18|(Pe&63)<<12|(Ae&63)<<6|Oe&63,xe>65535&&xe<1114112&&(j=xe))}}j===null?(j=65533,pe=1):j>65535&&(j-=65536,x.push(j>>>10&1023|55296),j=56320|j&1023),x.push(j),k+=pe}return St(x)}const Gi=4096;function St(f){const c=f.length;if(c<=Gi)return String.fromCharCode.apply(String,f);let u="",x=0;for(;x<c;)u+=String.fromCharCode.apply(String,f.slice(x,x+=Gi));return u}function zu(f,c,u){let x="";u=Math.min(f.length,u);for(let k=c;k<u;++k)x+=String.fromCharCode(f[k]&127);return x}function Vu(f,c,u){let x="";u=Math.min(f.length,u);for(let k=c;k<u;++k)x+=String.fromCharCode(f[k]);return x}function Hu(f,c,u){const x=f.length;(!c||c<0)&&(c=0),(!u||u<0||u>x)&&(u=x);let k="";for(let P=c;P<u;++P)k+=Qu[f[P]];return k}function Zu(f,c,u){const x=f.slice(c,u);let k="";for(let P=0;P<x.length-1;P+=2)k+=String.fromCharCode(x[P]+x[P+1]*256);return k}s.prototype.slice=function(c,u){const x=this.length;c=~~c,u=u===void 0?x:~~u,c<0?(c+=x,c<0&&(c=0)):c>x&&(c=x),u<0?(u+=x,u<0&&(u=0)):u>x&&(u=x),u<c&&(u=c);const k=this.subarray(c,u);return Object.setPrototypeOf(k,s.prototype),k};function ze(f,c,u){if(f%1!==0||f<0)throw new RangeError("offset is not uint");if(f+c>u)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(c,u,x){c=c>>>0,u=u>>>0,x||ze(c,u,this.length);let k=this[c],P=1,j=0;for(;++j<u&&(P*=256);)k+=this[c+j]*P;return k},s.prototype.readUintBE=s.prototype.readUIntBE=function(c,u,x){c=c>>>0,u=u>>>0,x||ze(c,u,this.length);let k=this[c+--u],P=1;for(;u>0&&(P*=256);)k+=this[c+--u]*P;return k},s.prototype.readUint8=s.prototype.readUInt8=function(c,u){return c=c>>>0,u||ze(c,1,this.length),this[c]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(c,u){return c=c>>>0,u||ze(c,2,this.length),this[c]|this[c+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(c,u){return c=c>>>0,u||ze(c,2,this.length),this[c]<<8|this[c+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(c,u){return c=c>>>0,u||ze(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(c,u){return c=c>>>0,u||ze(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},s.prototype.readBigUInt64LE=qi(function(c){c=c>>>0,br(c,"offset");const u=this[c],x=this[c+7];(u===void 0||x===void 0)&&Xr(c,this.length-8);const k=u+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,P=this[++c]+this[++c]*2**8+this[++c]*2**16+x*2**24;return BigInt(k)+(BigInt(P)<<BigInt(32))}),s.prototype.readBigUInt64BE=qi(function(c){c=c>>>0,br(c,"offset");const u=this[c],x=this[c+7];(u===void 0||x===void 0)&&Xr(c,this.length-8);const k=u*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],P=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+x;return(BigInt(k)<<BigInt(32))+BigInt(P)}),s.prototype.readIntLE=function(c,u,x){c=c>>>0,u=u>>>0,x||ze(c,u,this.length);let k=this[c],P=1,j=0;for(;++j<u&&(P*=256);)k+=this[c+j]*P;return P*=128,k>=P&&(k-=Math.pow(2,8*u)),k},s.prototype.readIntBE=function(c,u,x){c=c>>>0,u=u>>>0,x||ze(c,u,this.length);let k=u,P=1,j=this[c+--k];for(;k>0&&(P*=256);)j+=this[c+--k]*P;return P*=128,j>=P&&(j-=Math.pow(2,8*u)),j},s.prototype.readInt8=function(c,u){return c=c>>>0,u||ze(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},s.prototype.readInt16LE=function(c,u){c=c>>>0,u||ze(c,2,this.length);const x=this[c]|this[c+1]<<8;return x&32768?x|4294901760:x},s.prototype.readInt16BE=function(c,u){c=c>>>0,u||ze(c,2,this.length);const x=this[c+1]|this[c]<<8;return x&32768?x|4294901760:x},s.prototype.readInt32LE=function(c,u){return c=c>>>0,u||ze(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},s.prototype.readInt32BE=function(c,u){return c=c>>>0,u||ze(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},s.prototype.readBigInt64LE=qi(function(c){c=c>>>0,br(c,"offset");const u=this[c],x=this[c+7];(u===void 0||x===void 0)&&Xr(c,this.length-8);const k=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(x<<24);return(BigInt(k)<<BigInt(32))+BigInt(u+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),s.prototype.readBigInt64BE=qi(function(c){c=c>>>0,br(c,"offset");const u=this[c],x=this[c+7];(u===void 0||x===void 0)&&Xr(c,this.length-8);const k=(u<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(k)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+x)}),s.prototype.readFloatLE=function(c,u){return c=c>>>0,u||ze(c,4,this.length),t.read(this,c,!0,23,4)},s.prototype.readFloatBE=function(c,u){return c=c>>>0,u||ze(c,4,this.length),t.read(this,c,!1,23,4)},s.prototype.readDoubleLE=function(c,u){return c=c>>>0,u||ze(c,8,this.length),t.read(this,c,!0,52,8)},s.prototype.readDoubleBE=function(c,u){return c=c>>>0,u||ze(c,8,this.length),t.read(this,c,!1,52,8)};function ct(f,c,u,x,k,P){if(!s.isBuffer(f))throw new TypeError('"buffer" argument must be a Buffer instance');if(c>k||c<P)throw new RangeError('"value" argument is out of bounds');if(u+x>f.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(c,u,x,k){if(c=+c,u=u>>>0,x=x>>>0,!k){const pe=Math.pow(2,8*x)-1;ct(this,c,u,x,pe,0)}let P=1,j=0;for(this[u]=c&255;++j<x&&(P*=256);)this[u+j]=c/P&255;return u+x},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(c,u,x,k){if(c=+c,u=u>>>0,x=x>>>0,!k){const pe=Math.pow(2,8*x)-1;ct(this,c,u,x,pe,0)}let P=x-1,j=1;for(this[u+P]=c&255;--P>=0&&(j*=256);)this[u+P]=c/j&255;return u+x},s.prototype.writeUint8=s.prototype.writeUInt8=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,1,255,0),this[u]=c&255,u+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,2,65535,0),this[u]=c&255,this[u+1]=c>>>8,u+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,2,65535,0),this[u]=c>>>8,this[u+1]=c&255,u+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,4,4294967295,0),this[u+3]=c>>>24,this[u+2]=c>>>16,this[u+1]=c>>>8,this[u]=c&255,u+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,4,4294967295,0),this[u]=c>>>24,this[u+1]=c>>>16,this[u+2]=c>>>8,this[u+3]=c&255,u+4};function Bc(f,c,u,x,k){Zc(c,x,k,f,u,7);let P=Number(c&BigInt(4294967295));f[u++]=P,P=P>>8,f[u++]=P,P=P>>8,f[u++]=P,P=P>>8,f[u++]=P;let j=Number(c>>BigInt(32)&BigInt(4294967295));return f[u++]=j,j=j>>8,f[u++]=j,j=j>>8,f[u++]=j,j=j>>8,f[u++]=j,u}function jc(f,c,u,x,k){Zc(c,x,k,f,u,7);let P=Number(c&BigInt(4294967295));f[u+7]=P,P=P>>8,f[u+6]=P,P=P>>8,f[u+5]=P,P=P>>8,f[u+4]=P;let j=Number(c>>BigInt(32)&BigInt(4294967295));return f[u+3]=j,j=j>>8,f[u+2]=j,j=j>>8,f[u+1]=j,j=j>>8,f[u]=j,u+8}s.prototype.writeBigUInt64LE=qi(function(c,u=0){return Bc(this,c,u,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=qi(function(c,u=0){return jc(this,c,u,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(c,u,x,k){if(c=+c,u=u>>>0,!k){const Pe=Math.pow(2,8*x-1);ct(this,c,u,x,Pe-1,-Pe)}let P=0,j=1,pe=0;for(this[u]=c&255;++P<x&&(j*=256);)c<0&&pe===0&&this[u+P-1]!==0&&(pe=1),this[u+P]=(c/j>>0)-pe&255;return u+x},s.prototype.writeIntBE=function(c,u,x,k){if(c=+c,u=u>>>0,!k){const Pe=Math.pow(2,8*x-1);ct(this,c,u,x,Pe-1,-Pe)}let P=x-1,j=1,pe=0;for(this[u+P]=c&255;--P>=0&&(j*=256);)c<0&&pe===0&&this[u+P+1]!==0&&(pe=1),this[u+P]=(c/j>>0)-pe&255;return u+x},s.prototype.writeInt8=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,1,127,-128),c<0&&(c=255+c+1),this[u]=c&255,u+1},s.prototype.writeInt16LE=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,2,32767,-32768),this[u]=c&255,this[u+1]=c>>>8,u+2},s.prototype.writeInt16BE=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,2,32767,-32768),this[u]=c>>>8,this[u+1]=c&255,u+2},s.prototype.writeInt32LE=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,4,2147483647,-2147483648),this[u]=c&255,this[u+1]=c>>>8,this[u+2]=c>>>16,this[u+3]=c>>>24,u+4},s.prototype.writeInt32BE=function(c,u,x){return c=+c,u=u>>>0,x||ct(this,c,u,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[u]=c>>>24,this[u+1]=c>>>16,this[u+2]=c>>>8,this[u+3]=c&255,u+4},s.prototype.writeBigInt64LE=qi(function(c,u=0){return Bc(this,c,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=qi(function(c,u=0){return jc(this,c,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Fc(f,c,u,x,k,P){if(u+x>f.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("Index out of range")}function zc(f,c,u,x,k){return c=+c,u=u>>>0,k||Fc(f,c,u,4),t.write(f,c,u,x,23,4),u+4}s.prototype.writeFloatLE=function(c,u,x){return zc(this,c,u,!0,x)},s.prototype.writeFloatBE=function(c,u,x){return zc(this,c,u,!1,x)};function Vc(f,c,u,x,k){return c=+c,u=u>>>0,k||Fc(f,c,u,8),t.write(f,c,u,x,52,8),u+8}s.prototype.writeDoubleLE=function(c,u,x){return Vc(this,c,u,!0,x)},s.prototype.writeDoubleBE=function(c,u,x){return Vc(this,c,u,!1,x)},s.prototype.copy=function(c,u,x,k){if(!s.isBuffer(c))throw new TypeError("argument should be a Buffer");if(x||(x=0),!k&&k!==0&&(k=this.length),u>=c.length&&(u=c.length),u||(u=0),k>0&&k<x&&(k=x),k===x||c.length===0||this.length===0)return 0;if(u<0)throw new RangeError("targetStart out of bounds");if(x<0||x>=this.length)throw new RangeError("Index out of range");if(k<0)throw new RangeError("sourceEnd out of bounds");k>this.length&&(k=this.length),c.length-u<k-x&&(k=c.length-u+x);const P=k-x;return this===c&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(u,x,k):Uint8Array.prototype.set.call(c,this.subarray(x,k),u),P},s.prototype.fill=function(c,u,x,k){if(typeof c=="string"){if(typeof u=="string"?(k=u,u=0,x=this.length):typeof x=="string"&&(k=x,x=this.length),k!==void 0&&typeof k!="string")throw new TypeError("encoding must be a string");if(typeof k=="string"&&!s.isEncoding(k))throw new TypeError("Unknown encoding: "+k);if(c.length===1){const j=c.charCodeAt(0);(k==="utf8"&&j<128||k==="latin1")&&(c=j)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(u<0||this.length<u||this.length<x)throw new RangeError("Out of range index");if(x<=u)return this;u=u>>>0,x=x===void 0?this.length:x>>>0,c||(c=0);let P;if(typeof c=="number")for(P=u;P<x;++P)this[P]=c;else{const j=s.isBuffer(c)?c:s.from(c,k),pe=j.length;if(pe===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(P=0;P<x-u;++P)this[P+u]=j[P%pe]}return this};const vr={};function Cs(f,c,u){vr[f]=class extends u{constructor(){super(),Object.defineProperty(this,"message",{value:c.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${f}]`,this.stack,delete this.name}get code(){return f}set code(k){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:k,writable:!0})}toString(){return`${this.name} [${f}]: ${this.message}`}}}Cs("ERR_BUFFER_OUT_OF_BOUNDS",function(f){return f?`${f} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Cs("ERR_INVALID_ARG_TYPE",function(f,c){return`The "${f}" argument must be of type number. Received type ${typeof c}`},TypeError),Cs("ERR_OUT_OF_RANGE",function(f,c,u){let x=`The value of "${f}" is out of range.`,k=u;return Number.isInteger(u)&&Math.abs(u)>2**32?k=Hc(String(u)):typeof u=="bigint"&&(k=String(u),(u>BigInt(2)**BigInt(32)||u<-(BigInt(2)**BigInt(32)))&&(k=Hc(k)),k+="n"),x+=` It must be ${c}. Received ${k}`,x},RangeError);function Hc(f){let c="",u=f.length;const x=f[0]==="-"?1:0;for(;u>=x+4;u-=3)c=`_${f.slice(u-3,u)}${c}`;return`${f.slice(0,u)}${c}`}function Gu(f,c,u){br(c,"offset"),(f[c]===void 0||f[c+u]===void 0)&&Xr(c,f.length-(u+1))}function Zc(f,c,u,x,k,P){if(f>u||f<c){const j=typeof c=="bigint"?"n":"";let pe;throw c===0||c===BigInt(0)?pe=`>= 0${j} and < 2${j} ** ${(P+1)*8}${j}`:pe=`>= -(2${j} ** ${(P+1)*8-1}${j}) and < 2 ** ${(P+1)*8-1}${j}`,new vr.ERR_OUT_OF_RANGE("value",pe,f)}Gu(x,k,P)}function br(f,c){if(typeof f!="number")throw new vr.ERR_INVALID_ARG_TYPE(c,"number",f)}function Xr(f,c,u){throw Math.floor(f)!==f?(br(f,u),new vr.ERR_OUT_OF_RANGE("offset","an integer",f)):c<0?new vr.ERR_BUFFER_OUT_OF_BOUNDS:new vr.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${c}`,f)}const qu=/[^+/0-9A-Za-z-_]/g;function Ku(f){if(f=f.split("=")[0],f=f.trim().replace(qu,""),f.length<2)return"";for(;f.length%4!==0;)f=f+"=";return f}function xs(f,c){c=c||1/0;let u;const x=f.length;let k=null;const P=[];for(let j=0;j<x;++j){if(u=f.charCodeAt(j),u>55295&&u<57344){if(!k){if(u>56319){(c-=3)>-1&&P.push(239,191,189);continue}else if(j+1===x){(c-=3)>-1&&P.push(239,191,189);continue}k=u;continue}if(u<56320){(c-=3)>-1&&P.push(239,191,189),k=u;continue}u=(k-55296<<10|u-56320)+65536}else k&&(c-=3)>-1&&P.push(239,191,189);if(k=null,u<128){if((c-=1)<0)break;P.push(u)}else if(u<2048){if((c-=2)<0)break;P.push(u>>6|192,u&63|128)}else if(u<65536){if((c-=3)<0)break;P.push(u>>12|224,u>>6&63|128,u&63|128)}else if(u<1114112){if((c-=4)<0)break;P.push(u>>18|240,u>>12&63|128,u>>6&63|128,u&63|128)}else throw new Error("Invalid code point")}return P}function Yu(f){const c=[];for(let u=0;u<f.length;++u)c.push(f.charCodeAt(u)&255);return c}function Xu(f,c){let u,x,k;const P=[];for(let j=0;j<f.length&&!((c-=2)<0);++j)u=f.charCodeAt(j),x=u>>8,k=u%256,P.push(k),P.push(x);return P}function Gc(f){return e.toByteArray(Ku(f))}function ra(f,c,u,x){let k;for(k=0;k<x&&!(k+u>=c.length||k>=f.length);++k)c[k+u]=f[k];return k}function ii(f,c){return f instanceof c||f!=null&&f.constructor!=null&&f.constructor.name!=null&&f.constructor.name===c.name}function ys(f){return f!==f}const Qu=(function(){const f="0123456789abcdef",c=new Array(256);for(let u=0;u<16;++u){const x=u*16;for(let k=0;k<16;++k)c[x+k]=f[u]+f[k]}return c})();function qi(f){return typeof BigInt>"u"?Ju:f}function Ju(){throw new Error("BigInt not supported")}})(_s)),_s}var Hd=Vd(),Ql;typeof window<"u"&&(window.Buffer||(window.Buffer=Hd.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Ql=window.process)!=null&&Ql.env||(window.process={env:{}}));Tr.extend(id);Tr.extend(nd);const Zd={...rd,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};Tr.locale("en-web3-modal",Zd);const nc={getYear(i=new Date().toISOString()){return Tr(i).year()},getRelativeDateFromNow(i){return Tr(i).locale("en-web3-modal").fromNow(!0)},formatDate(i,e="DD MMM"){return Tr(i).format(e)}},In={caipNetworkIdToNumber(i){return i?Number(i.split(":")[1]):void 0},parseEvmChainId(i){return typeof i=="string"?this.caipNetworkIdToNumber(i):i}},fe={bigNumber(i){return new oa(i)},multiply(i,e){if(i===void 0||e===void 0)return oa(0);const t=new oa(i),r=new oa(e);return t.multipliedBy(r)},formatNumberToLocalString(i,e=2){return i===void 0?"0.00":typeof i=="number"?i.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(i).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},Gd={numericInputKeyDown(i,e,t){const r=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"],o=i.metaKey||i.ctrlKey,n=i.key,a=n.toLocaleLowerCase(),s=a==="a",p=a==="c",d=a==="v",w=a==="x",C=n===",",b=n===".",y=n>="0"&&n<="9";!o&&(s||p||d||w)&&i.preventDefault(),e==="0"&&!C&&!b&&n==="0"&&i.preventDefault(),e==="0"&&y&&(t(n),i.preventDefault()),(C||b)&&(e||(t("0."),i.preventDefault()),(e!=null&&e.includes(".")||e!=null&&e.includes(","))&&i.preventDefault()),!y&&!r.includes(n)&&!b&&!C&&i.preventDefault()}},qd=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Kd=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Ce={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot"},CHAIN_NAME_MAP:{eip155:"Ethereum",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"]},Yd={getERC20Abi:i=>Ce.USDT_CONTRACT_ADDRESSES.includes(i)?Kd:qd},rc={URLS:{FAQ:"https://walletconnect.com/faq"}},Re={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_CONNECTOR:"@appkit/connected_connector",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit/connected_social_username",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",CONNECTED_NAMESPACE:"@appkit/connected_namespace",CONNECTION_STATUS:"@appkit/connection_status"},Ne={setItem(i,e){sa()&&localStorage.setItem(i,e)},getItem(i){if(sa())return localStorage.getItem(i)||void 0},removeItem(i){sa()&&localStorage.removeItem(i)},clear(){sa()&&localStorage.clear()}};function sa(){return typeof window<"u"&&typeof localStorage<"u"}function ai(i,e){return e==="light"?{"--w3m-accent":(i==null?void 0:i["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(i==null?void 0:i["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}function Xd(i){return(i==null?void 0:i.endsWith(Ce.WC_NAME_SUFFIX_LEGACY))||(i==null?void 0:i.endsWith(Ce.WC_NAME_SUFFIX))}const Qd=Symbol(),Jc=Object.getPrototypeOf,Ds=new WeakMap,Jd=i=>i&&(Ds.has(i)?Ds.get(i):Jc(i)===Object.prototype||Jc(i)===Array.prototype),e0=i=>Jd(i)&&i[Qd]||null,el=(i,e=!0)=>{Ds.set(i,e)},fa={},ks=i=>typeof i=="object"&&i!==null,Yi=new WeakMap,io=new WeakSet,t0=(i=Object.is,e=(d,w)=>new Proxy(d,w),t=d=>ks(d)&&!io.has(d)&&(Array.isArray(d)||!(Symbol.iterator in d))&&!(d instanceof WeakMap)&&!(d instanceof WeakSet)&&!(d instanceof Error)&&!(d instanceof Number)&&!(d instanceof Date)&&!(d instanceof String)&&!(d instanceof RegExp)&&!(d instanceof ArrayBuffer),r=d=>{switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:throw d}},o=new WeakMap,n=(d,w,C=r)=>{const b=o.get(d);if((b==null?void 0:b[0])===w)return b[1];const y=Array.isArray(d)?[]:Object.create(Object.getPrototypeOf(d));return el(y,!0),o.set(d,[w,y]),Reflect.ownKeys(d).forEach(T=>{if(Object.getOwnPropertyDescriptor(y,T))return;const _=Reflect.get(d,T),I={value:_,enumerable:!0,configurable:!0};if(io.has(_))el(_,!1);else if(_ instanceof Promise)delete I.value,I.get=()=>C(_);else if(Yi.has(_)){const[B,W]=Yi.get(_);I.value=n(B,W(),C)}Object.defineProperty(y,T,I)}),Object.preventExtensions(y)},a=new WeakMap,s=[1,1],p=d=>{if(!ks(d))throw new Error("object required");const w=a.get(d);if(w)return w;let C=s[0];const b=new Set,y=(X,ce=++s[0])=>{C!==ce&&(C=ce,b.forEach(ae=>ae(X,ce)))};let T=s[1];const _=(X=++s[1])=>(T!==X&&!b.size&&(T=X,B.forEach(([ce])=>{const ae=ce[1](X);ae>C&&(C=ae)})),C),I=X=>(ce,ae)=>{const Me=[...ce];Me[1]=[X,...Me[1]],y(Me,ae)},B=new Map,W=(X,ce)=>{if((fa?"production":void 0)!=="production"&&B.has(X))throw new Error("prop listener already exists");if(b.size){const ae=ce[3](I(X));B.set(X,[ce,ae])}else B.set(X,[ce])},D=X=>{var ce;const ae=B.get(X);ae&&(B.delete(X),(ce=ae[1])==null||ce.call(ae))},V=X=>(b.add(X),b.size===1&&B.forEach(([ae,Me],We)=>{if((fa?"production":void 0)!=="production"&&Me)throw new Error("remove already exists");const it=ae[3](I(We));B.set(We,[ae,it])}),()=>{b.delete(X),b.size===0&&B.forEach(([ae,Me],We)=>{Me&&(Me(),B.set(We,[ae]))})}),L=Array.isArray(d)?[]:Object.create(Object.getPrototypeOf(d)),H=e(L,{deleteProperty(X,ce){const ae=Reflect.get(X,ce);D(ce);const Me=Reflect.deleteProperty(X,ce);return Me&&y(["delete",[ce],ae]),Me},set(X,ce,ae,Me){const We=Reflect.has(X,ce),it=Reflect.get(X,ce,Me);if(We&&(i(it,ae)||a.has(ae)&&i(it,a.get(ae))))return!0;D(ce),ks(ae)&&(ae=e0(ae)||ae);let Gi=ae;if(ae instanceof Promise)ae.then(St=>{ae.status="fulfilled",ae.value=St,y(["resolve",[ce],St])}).catch(St=>{ae.status="rejected",ae.reason=St,y(["reject",[ce],St])});else{!Yi.has(ae)&&t(ae)&&(Gi=p(ae));const St=!io.has(Gi)&&Yi.get(Gi);St&&W(ce,St)}return Reflect.set(X,ce,Gi,Me),y(["set",[ce],ae,it]),!0}});a.set(d,H);const we=[L,_,n,V];return Yi.set(H,we),Reflect.ownKeys(d).forEach(X=>{const ce=Object.getOwnPropertyDescriptor(d,X);"value"in ce&&(H[X]=d[X],delete ce.value,delete ce.writable),Object.defineProperty(L,X,ce)}),H})=>[p,Yi,io,i,e,t,r,o,n,a,s],[i0]=t0();function Ie(i={}){return i0(i)}function qe(i,e,t){const r=Yi.get(i);(fa?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let o;const n=[],a=r[3];let s=!1;const d=a(w=>{n.push(w),o||(o=Promise.resolve().then(()=>{o=void 0,s&&e(n.splice(0))}))});return s=!0,()=>{s=!1,d()}}function wa(i,e){const t=Yi.get(i);(fa?"production":void 0)!=="production"&&!t&&console.warn("Please use proxy object");const[r,o,n]=t;return n(r,o(),e)}function $t(i){return io.add(i),i}function Ke(i,e,t,r){let o=i[e];return qe(i,()=>{const n=i[e];Object.is(o,n)||t(o=n)})}function n0(i){const e=Ie({data:Array.from([]),has(t){return this.data.some(r=>r[0]===t)},set(t,r){const o=this.data.find(n=>n[0]===t);return o?o[1]=r:this.data.push([t,r]),this},get(t){var r;return(r=this.data.find(o=>o[0]===t))==null?void 0:r[1]},delete(t){const r=this.data.findIndex(o=>o[0]===t);return r===-1?!1:(this.data.splice(r,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(t){this.data.forEach(r=>{t(r[1],r[0],this)})},keys(){return this.data.map(t=>t[0]).values()},values(){return this.data.map(t=>t[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(e,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(e),e}const As="https://secure.walletconnect.org",tu=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],r0="WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",me={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:As,SECURE_SITE_DASHBOARD:`${As}/dashboard`,SECURE_SITE_FAVICON:`${As}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in a new browser tab"},DEFAULT_FEATURES:{swaps:!0,onramp:!0,email:!0,emailShowWallets:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],history:!0,analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1}},M={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(i,e=""){return i==null?void 0:i.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const i=window.navigator.userAgent.toLowerCase();return M.isMobile()&&i.includes("android")},isIos(){const i=window.navigator.userAgent.toLowerCase();return M.isMobile()&&(i.includes("iphone")||i.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(i){return i?i-Date.now()<=me.TEN_SEC_MS:!0},isAllowedRetry(i,e=me.ONE_SEC_MS){return Date.now()-i>=e},copyToClopboard(i){navigator.clipboard.writeText(i)},getPairingExpiry(){return Date.now()+me.FOUR_MINUTES_MS},getNetworkId(i){return i==null?void 0:i.split(":")[1]},getPlainAddress(i){return i==null?void 0:i.split(":")[2]},async wait(i){return new Promise(e=>{setTimeout(e,i)})},debounce(i,e=500){let t;return(...r)=>{function o(){i(...r)}t&&clearTimeout(t),t=setTimeout(o,e)}},isHttpUrl(i){return i.startsWith("http://")||i.startsWith("https://")},formatNativeUrl(i,e){if(M.isHttpUrl(i))return this.formatUniversalUrl(i,e);let t=i;t.includes("://")||(t=i.replaceAll("/","").replaceAll(":",""),t=`${t}://`),t.endsWith("/")||(t=`${t}/`),this.isTelegram()&&this.isAndroid()&&(e=encodeURIComponent(e));const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},formatUniversalUrl(i,e){if(!M.isHttpUrl(i))return this.formatNativeUrl(i,e);let t=i;t.endsWith("/")||(t=`${t}/`);const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},getOpenTargetForPlatform(i){return this.isTelegram()?"_blank":i},openHref(i,e,t){window.open(i,this.getOpenTargetForPlatform(e),t||"noreferrer noopener")},returnOpenHref(i,e,t){return window.open(i,this.getOpenTargetForPlatform(e),t||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},async preloadImage(i){const e=new Promise((t,r)=>{const o=new Image;o.onload=t,o.onerror=r,o.crossOrigin="anonymous",o.src=i});return Promise.race([e,M.wait(2e3)])},formatBalance(i,e){let t="0.000";if(typeof i=="string"){const r=Number(i);if(r){const o=Math.floor(r*1e3)/1e3;o&&(t=o.toString())}}return`${t}${e?` ${e}`:""}`},formatBalance2(i,e){var r;let t;if(i==="0")t="0";else if(typeof i=="string"){const o=Number(i);o&&(t=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return{value:t??"0",rest:t==="0"?"000":"",symbol:e}},getApiUrl(){return Ce.W3M_API_URL},getBlockchainApiUrl(){return Ce.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return Ce.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,i=>{const e=Math.random()*16|0;return(i==="x"?e:e&3|8).toString(16)})},parseError(i){var e,t;return typeof i=="string"?i:typeof((t=(e=i==null?void 0:i.issues)==null?void 0:e[0])==null?void 0:t.message)=="string"?i.issues[0].message:i instanceof Error?i.message:"Unknown error"},sortRequestedNetworks(i,e=[]){const t={};return e&&i&&(i.forEach((r,o)=>{t[r]=o}),e.sort((r,o)=>{const n=t[r.id],a=t[o.id];return n!==void 0&&a!==void 0?n-a:n!==void 0?-1:a!==void 0?1:0})),e},calculateBalance(i){let e=0;for(const t of i)e+=t.value??0;return e},formatTokenBalance(i){const e=i.toFixed(2),[t,r]=e.split(".");return{dollars:t,pennies:r}},isAddress(i,e="eip155"){switch(e){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)||/^(?:0x)?[0-9A-F]{40}$/iu.test(i))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(i);default:return!1}},uniqueBy(i,e){const t=new Set;return i.filter(r=>{const o=r[e];return t.has(o)?!1:(t.add(o),!0)})},generateSdkVersion(i,e,t){const o=i.length===0?"universal":i.map(n=>n.adapterType).join(",");return`${e}-${o}-${t}`}};async function Jr(...i){const e=await fetch(...i);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e}class Ka{constructor({baseUrl:e,clientId:t}){this.baseUrl=e,this.clientId=t}async get({headers:e,signal:t,cache:r,...o}){const n=this.createUrl(o);return(await Jr(n,{method:"GET",headers:e,signal:t,cache:r})).json()}async getBlob({headers:e,signal:t,...r}){const o=this.createUrl(r);return(await Jr(o,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await Jr(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await Jr(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await Jr(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([o,n])=>{n&&r.searchParams.append(o,n)}),this.clientId&&r.searchParams.append("clientId",this.clientId),r}}const ye=Ie({features:me.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined"}),U={state:ye,subscribeKey(i,e){return Ke(ye,i,e)},setOptions(i){Object.assign(ye,i)},setFeatures(i){i&&Object.entries(i).forEach(([e,t])=>{ye.features||(ye.features=me.DEFAULT_FEATURES),e in ye.features&&(ye.features[e]=t)})},setProjectId(i){ye.projectId=i},setAllWallets(i){ye.allWallets=i},setIncludeWalletIds(i){ye.includeWalletIds=i},setExcludeWalletIds(i){ye.excludeWalletIds=i},setFeaturedWalletIds(i){ye.featuredWalletIds=i},setTokens(i){ye.tokens=i},setTermsConditionsUrl(i){ye.termsConditionsUrl=i},setPrivacyPolicyUrl(i){ye.privacyPolicyUrl=i},setCustomWallets(i){ye.customWallets=i},setIsSiweEnabled(i){ye.isSiweEnabled=i},setIsUniversalProvider(i){ye.isUniversalProvider=i},setSdkVersion(i){ye.sdkVersion=i},setMetadata(i){ye.metadata=i},setDisableAppend(i){ye.disableAppend=i},setEIP6963Enabled(i){ye.enableEIP6963=i},setDebug(i){ye.debug=i},setEnableWalletConnect(i){ye.enableWalletConnect=i},setEnableWallets(i){ye.enableWallets=i},setHasMultipleAddresses(i){ye.hasMultipleAddresses=i},setSIWX(i){ye.siwx=i}},o0={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},iu=M.getBlockchainApiUrl(),Le=Ie({clientId:null,api:new Ka({baseUrl:iu,clientId:null})}),Se={state:Le,fetchIdentity({address:i}){return Le.api.get({path:`/v1/identity/${i}`,params:{projectId:U.state.projectId,sender:m.state.activeCaipAddress?M.getPlainAddress(m.state.activeCaipAddress):void 0}})},fetchTransactions({account:i,projectId:e,cursor:t,onramp:r,signal:o,cache:n,chainId:a}){return Le.api.get({path:`/v1/account/${i}/history`,params:{projectId:e,cursor:t,onramp:r,chainId:a},signal:o,cache:n})},fetchSwapQuote({projectId:i,amount:e,userAddress:t,from:r,to:o,gasPrice:n}){return Le.api.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:i,amount:e,userAddress:t,from:r,to:o,gasPrice:n}})},fetchSwapTokens({projectId:i,chainId:e}){return Le.api.get({path:"/v1/convert/tokens",params:{projectId:i,chainId:e}})},fetchTokenPrice({projectId:i,addresses:e}){return Le.api.post({path:"/v1/fungible/price",body:{projectId:i,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchSwapAllowance({projectId:i,tokenAddress:e,userAddress:t}){const{sdkType:r,sdkVersion:o}=U.state;return Le.api.get({path:"/v1/convert/allowance",params:{projectId:i,tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":o||"html-wagmi-4.2.2"}})},fetchGasPrice({projectId:i,chainId:e}){const{sdkType:t,sdkVersion:r}=U.state;return Le.api.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":t,"x-sdk-version":r||"html-wagmi-4.2.2"},params:{projectId:i,chainId:e}})},generateSwapCalldata({amount:i,from:e,projectId:t,to:r,userAddress:o}){return Le.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:i,eip155:{slippage:me.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:t,to:r,userAddress:o}})},generateApproveCalldata({from:i,projectId:e,to:t,userAddress:r}){const{sdkType:o,sdkVersion:n}=U.state;return Le.api.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":n||"html-wagmi-4.2.2"},params:{projectId:e,userAddress:r,from:i,to:t}})},async getBalance(i,e,t){const{sdkType:r,sdkVersion:o}=U.state;return Le.api.get({path:`/v1/account/${i}/balance`,headers:{"x-sdk-type":r,"x-sdk-version":o||"html-wagmi-4.2.2"},params:{currency:"usd",projectId:U.state.projectId,chainId:e,forceUpdate:t}})},async lookupEnsName(i){return Le.api.get({path:`/v1/profile/account/${i}`,params:{projectId:U.state.projectId,apiVersion:"2"}})},async reverseLookupEnsName({address:i}){return Le.api.get({path:`/v1/profile/reverse/${i}`,params:{sender:R.state.address,projectId:U.state.projectId,apiVersion:"2"}})},async getEnsNameSuggestions(i){return Le.api.get({path:`/v1/profile/suggestions/${i}`,params:{projectId:U.state.projectId,zone:"reown.id"}})},async registerEnsName({coinType:i,address:e,message:t,signature:r}){return Le.api.post({path:"/v1/profile/account",body:{coin_type:i,address:e,message:t,signature:r},headers:{"Content-Type":"application/json"}})},async generateOnRampURL({destinationWallets:i,partnerUserId:e,defaultNetwork:t,purchaseAmount:r,paymentAmount:o}){return(await Le.api.post({path:"/v1/generators/onrampurl",params:{projectId:U.state.projectId},body:{destinationWallets:i,defaultNetwork:t,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await Le.api.get({path:"/v1/onramp/options",params:{projectId:U.state.projectId}})}catch{return o0}},async getOnrampQuote({purchaseCurrency:i,paymentCurrency:e,amount:t,network:r}){try{return await Le.api.post({path:"/v1/onramp/quote",params:{projectId:U.state.projectId},body:{purchaseCurrency:i,paymentCurrency:e,amount:t,network:r}})}catch{return{coinbaseFee:{amount:t,currency:e.id},networkFee:{amount:t,currency:e.id},paymentSubtotal:{amount:t,currency:e.id},paymentTotal:{amount:t,currency:e.id},purchaseAmount:{amount:t,currency:e.id},quoteId:"mocked-quote-id"}}},getSmartSessions(i){return Le.api.get({path:`/v1/sessions/${i}`,params:{projectId:U.state.projectId}})},revokeSmartSession(i,e,t){return Le.api.post({path:`/v1/sessions/${i}/revoke`,params:{projectId:U.state.projectId},body:{pci:e,signature:t}})},setClientId(i){Le.clientId=i,Le.api=new Ka({baseUrl:iu,clientId:i})}},wt=Ie({message:"",variant:"success",svg:void 0,open:!1}),q={state:wt,subscribeKey(i,e){return Ke(wt,i,e)},showLoading(i){this._showMessage({message:i,variant:"loading"})},showSuccess(i){this._showMessage({message:i,variant:"success"})},showSvg(i,e){this._showMessage({message:i,svg:e})},showError(i){const e=M.parseError(i);this._showMessage({message:e,variant:"error"})},hide(){wt.open=!1},_showMessage({message:i,svg:e,variant:t="success"}){wt.open?(wt.open=!1,setTimeout(()=>{wt.message=i,wt.variant=t,wt.svg=e,wt.open=!0},150)):(wt.message=i,wt.variant=t,wt.svg=e,wt.open=!0)}},a0=M.getAnalyticsUrl(),s0=new Ka({baseUrl:a0,clientId:null}),c0=["MODAL_CREATED"],Cr=Ie({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),z={state:Cr,subscribe(i){return qe(Cr,()=>i(Cr))},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=U.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(i){try{if(c0.includes(i.data.event)||typeof window>"u")return;await s0.post({path:"/e",headers:z._getApiHeaders(),body:{eventId:M.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:i.timestamp,props:i.data}})}catch{}},sendEvent(i){var e;Cr.timestamp=Date.now(),Cr.data=i,(e=U.state.features)!=null&&e.analytics&&z._sendAnalyticsEvent(Cr)}};var oc={};const l0=oc.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.org/sdk",u0=oc.NEXT_PUBLIC_DEFAULT_LOG_LEVEL||"error",d0=oc.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION||2,ie={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@appkit-wallet/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",FRAME_READY:"@w3m-frame/READY",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},se={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},De=g.object({message:g.string()});function Q(i){return g.literal(ie[i])}g.object({accessList:g.array(g.string()),blockHash:g.string().nullable(),blockNumber:g.string().nullable(),chainId:g.string().or(g.number()),from:g.string(),gas:g.string(),hash:g.string(),input:g.string().nullable(),maxFeePerGas:g.string(),maxPriorityFeePerGas:g.string(),nonce:g.string(),r:g.string(),s:g.string(),to:g.string(),transactionIndex:g.string().nullable(),type:g.string(),v:g.string(),value:g.string()});const p0=g.object({chainId:g.string().or(g.number())}),h0=g.object({email:g.string().email()}),f0=g.object({otp:g.string()}),w0=g.object({uri:g.string()}),g0=g.object({chainId:g.optional(g.string().or(g.number())),preferredAccountType:g.optional(g.string())}),m0=g.object({provider:g.enum(["google","github","apple","facebook","x","discord"])}),v0=g.object({email:g.string().email()}),b0=g.object({otp:g.string()}),C0=g.object({otp:g.string()}),x0=g.object({themeMode:g.optional(g.enum(["light","dark"])),themeVariables:g.optional(g.record(g.string(),g.string().or(g.number()))),w3mThemeVariables:g.optional(g.record(g.string(),g.string()))}),y0=g.object({metadata:g.object({name:g.string(),description:g.string(),url:g.string(),icons:g.array(g.string())}).optional(),sdkVersion:g.string().optional(),sdkType:g.string().optional(),projectId:g.string()}),E0=g.object({type:g.string()}),T0=g.object({action:g.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),_0=g.object({url:g.string()}),k0=g.object({userName:g.string()}),A0=g.object({email:g.string(),address:g.string(),chainId:g.string().or(g.number()),accounts:g.array(g.object({address:g.string(),type:g.enum([se.ACCOUNT_TYPES.EOA,se.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:g.string().optional()}),S0=g.object({action:g.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),I0=g.object({email:g.string().email().optional().nullable(),address:g.string(),chainId:g.string().or(g.number()),smartAccountDeployed:g.optional(g.boolean()),accounts:g.array(g.object({address:g.string(),type:g.enum([se.ACCOUNT_TYPES.EOA,se.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:g.optional(g.string())}),R0=g.object({uri:g.string()}),N0=g.object({isConnected:g.boolean()}),$0=g.object({chainId:g.string().or(g.number())}),P0=g.object({chainId:g.string().or(g.number())}),O0=g.object({newEmail:g.string().email()}),L0=g.object({smartAccountEnabledNetworks:g.array(g.number())});g.object({address:g.string(),isDeployed:g.boolean()});const D0=g.object({version:g.string().optional()}),U0=g.object({type:g.string(),address:g.string()}),W0=g.any(),M0=g.object({method:g.literal("eth_accounts")}),B0=g.object({method:g.literal("eth_blockNumber")}),j0=g.object({method:g.literal("eth_call"),params:g.array(g.any())}),F0=g.object({method:g.literal("eth_chainId")}),z0=g.object({method:g.literal("eth_estimateGas"),params:g.array(g.any())}),V0=g.object({method:g.literal("eth_feeHistory"),params:g.array(g.any())}),H0=g.object({method:g.literal("eth_gasPrice")}),Z0=g.object({method:g.literal("eth_getAccount"),params:g.array(g.any())}),G0=g.object({method:g.literal("eth_getBalance"),params:g.array(g.any())}),q0=g.object({method:g.literal("eth_getBlockByHash"),params:g.array(g.any())}),K0=g.object({method:g.literal("eth_getBlockByNumber"),params:g.array(g.any())}),Y0=g.object({method:g.literal("eth_getBlockReceipts"),params:g.array(g.any())}),X0=g.object({method:g.literal("eth_getBlockTransactionCountByHash"),params:g.array(g.any())}),Q0=g.object({method:g.literal("eth_getBlockTransactionCountByNumber"),params:g.array(g.any())}),J0=g.object({method:g.literal("eth_getCode"),params:g.array(g.any())}),e1=g.object({method:g.literal("eth_getFilterChanges"),params:g.array(g.any())}),t1=g.object({method:g.literal("eth_getFilterLogs"),params:g.array(g.any())}),i1=g.object({method:g.literal("eth_getLogs"),params:g.array(g.any())}),n1=g.object({method:g.literal("eth_getProof"),params:g.array(g.any())}),r1=g.object({method:g.literal("eth_getStorageAt"),params:g.array(g.any())}),o1=g.object({method:g.literal("eth_getTransactionByBlockHashAndIndex"),params:g.array(g.any())}),a1=g.object({method:g.literal("eth_getTransactionByBlockNumberAndIndex"),params:g.array(g.any())}),s1=g.object({method:g.literal("eth_getTransactionByHash"),params:g.array(g.any())}),c1=g.object({method:g.literal("eth_getTransactionCount"),params:g.array(g.any())}),l1=g.object({method:g.literal("eth_getTransactionReceipt"),params:g.array(g.any())}),u1=g.object({method:g.literal("eth_getUncleCountByBlockHash"),params:g.array(g.any())}),d1=g.object({method:g.literal("eth_getUncleCountByBlockNumber"),params:g.array(g.any())}),p1=g.object({method:g.literal("eth_maxPriorityFeePerGas")}),h1=g.object({method:g.literal("eth_newBlockFilter")}),f1=g.object({method:g.literal("eth_newFilter"),params:g.array(g.any())}),w1=g.object({method:g.literal("eth_newPendingTransactionFilter")}),g1=g.object({method:g.literal("eth_sendRawTransaction"),params:g.array(g.any())}),m1=g.object({method:g.literal("eth_syncing"),params:g.array(g.any())}),v1=g.object({method:g.literal("eth_uninstallFilter"),params:g.array(g.any())}),tl=g.object({method:g.literal("personal_sign"),params:g.array(g.any())}),b1=g.object({method:g.literal("eth_signTypedData_v4"),params:g.array(g.any())}),il=g.object({method:g.literal("eth_sendTransaction"),params:g.array(g.any())}),C1=g.object({method:g.literal("solana_signMessage"),params:g.object({message:g.string(),pubkey:g.string()})}),x1=g.object({method:g.literal("solana_signTransaction"),params:g.object({transaction:g.string()})}),y1=g.object({method:g.literal("solana_signAllTransactions"),params:g.object({transactions:g.array(g.string())})}),E1=g.object({method:g.literal("solana_signAndSendTransaction"),params:g.object({transaction:g.string(),options:g.object({skipPreflight:g.boolean().optional(),preflightCommitment:g.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:g.number().optional(),minContextSlot:g.number().optional()}).optional()})}),T1=g.object({method:g.literal("wallet_sendCalls"),params:g.array(g.object({chainId:g.string().or(g.number()).optional(),from:g.string().optional(),version:g.string().optional(),capabilities:g.any().optional(),calls:g.array(g.object({to:g.string().startsWith("0x"),data:g.string().startsWith("0x").optional(),value:g.string().optional()}))}))}),_1=g.object({method:g.literal("wallet_getCallsStatus"),params:g.array(g.string())}),k1=g.object({method:g.literal("wallet_getCapabilities")}),A1=g.object({method:g.literal("wallet_grantPermissions"),params:g.array(g.any())}),S1=g.object({method:g.literal("wallet_revokePermissions"),params:g.any()}),nl=g.object({token:g.string()}),J=g.object({id:g.string().optional()}),eo={appEvent:J.extend({type:Q("APP_SWITCH_NETWORK"),payload:p0}).or(J.extend({type:Q("APP_CONNECT_EMAIL"),payload:h0})).or(J.extend({type:Q("APP_CONNECT_DEVICE")})).or(J.extend({type:Q("APP_CONNECT_OTP"),payload:f0})).or(J.extend({type:Q("APP_CONNECT_SOCIAL"),payload:w0})).or(J.extend({type:Q("APP_GET_FARCASTER_URI")})).or(J.extend({type:Q("APP_CONNECT_FARCASTER")})).or(J.extend({type:Q("APP_GET_USER"),payload:g.optional(g0)})).or(J.extend({type:Q("APP_GET_SOCIAL_REDIRECT_URI"),payload:m0})).or(J.extend({type:Q("APP_SIGN_OUT")})).or(J.extend({type:Q("APP_IS_CONNECTED"),payload:g.optional(nl)})).or(J.extend({type:Q("APP_GET_CHAIN_ID")})).or(J.extend({type:Q("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(J.extend({type:Q("APP_INIT_SMART_ACCOUNT")})).or(J.extend({type:Q("APP_SET_PREFERRED_ACCOUNT"),payload:E0})).or(J.extend({type:Q("APP_RPC_REQUEST"),payload:tl.or(il).or(M0).or(B0).or(j0).or(F0).or(z0).or(V0).or(H0).or(Z0).or(G0).or(q0).or(K0).or(Y0).or(X0).or(Q0).or(J0).or(e1).or(t1).or(i1).or(n1).or(r1).or(o1).or(a1).or(s1).or(c1).or(l1).or(u1).or(d1).or(p1).or(h1).or(f1).or(w1).or(g1).or(m1).or(v1).or(tl).or(b1).or(il).or(C1).or(x1).or(y1).or(E1).or(_1).or(T1).or(k1).or(A1).or(S1)})).or(J.extend({type:Q("APP_UPDATE_EMAIL"),payload:v0})).or(J.extend({type:Q("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:b0})).or(J.extend({type:Q("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:C0})).or(J.extend({type:Q("APP_SYNC_THEME"),payload:x0})).or(J.extend({type:Q("APP_SYNC_DAPP_DATA"),payload:y0})),frameEvent:J.extend({type:Q("FRAME_SWITCH_NETWORK_ERROR"),payload:De}).or(J.extend({type:Q("FRAME_SWITCH_NETWORK_SUCCESS"),payload:P0})).or(J.extend({type:Q("FRAME_CONNECT_EMAIL_SUCCESS"),payload:T0})).or(J.extend({type:Q("FRAME_CONNECT_EMAIL_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:_0})).or(J.extend({type:Q("FRAME_GET_FARCASTER_URI_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:k0})).or(J.extend({type:Q("FRAME_CONNECT_FARCASTER_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_CONNECT_OTP_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_CONNECT_OTP_SUCCESS")})).or(J.extend({type:Q("FRAME_CONNECT_DEVICE_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_CONNECT_DEVICE_SUCCESS")})).or(J.extend({type:Q("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:A0})).or(J.extend({type:Q("FRAME_CONNECT_SOCIAL_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_GET_USER_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_GET_USER_SUCCESS"),payload:I0})).or(J.extend({type:Q("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:R0})).or(J.extend({type:Q("FRAME_SIGN_OUT_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_SIGN_OUT_SUCCESS")})).or(J.extend({type:Q("FRAME_IS_CONNECTED_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_IS_CONNECTED_SUCCESS"),payload:N0})).or(J.extend({type:Q("FRAME_GET_CHAIN_ID_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_GET_CHAIN_ID_SUCCESS"),payload:$0})).or(J.extend({type:Q("FRAME_RPC_REQUEST_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_RPC_REQUEST_SUCCESS"),payload:W0})).or(J.extend({type:Q("FRAME_SESSION_UPDATE"),payload:nl})).or(J.extend({type:Q("FRAME_UPDATE_EMAIL_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_UPDATE_EMAIL_SUCCESS"),payload:S0})).or(J.extend({type:Q("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(J.extend({type:Q("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:O0})).or(J.extend({type:Q("FRAME_SYNC_THEME_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_SYNC_THEME_SUCCESS")})).or(J.extend({type:Q("FRAME_SYNC_DAPP_DATA_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(J.extend({type:Q("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:L0})).or(J.extend({type:Q("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:U0})).or(J.extend({type:Q("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:De})).or(J.extend({type:Q("FRAME_READY"),payload:D0}))},Je={set(i,e){et.isClient&&localStorage.setItem(`${ie.STORAGE_KEY}${i}`,e)},get(i){return et.isClient?localStorage.getItem(`${ie.STORAGE_KEY}${i}`):null},delete(i,e){et.isClient&&(e?localStorage.removeItem(i):localStorage.removeItem(`${ie.STORAGE_KEY}${i}`))}},rl={transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},ca=30*1e3,et={checkIfAllowedToTriggerEmail(){const i=Je.get(ie.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<ca){const t=Math.ceil((ca-e)/1e3);throw new Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){const i=Je.get(ie.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<ca)return Math.ceil((ca-e)/1e3)}return 0},checkIfRequestExists(i){return se.NOT_SAFE_RPC_METHODS.includes(i.method)||se.SAFE_RPC_METHODS.includes(i.method)},getResponseType(i){return typeof i=="string"&&((i==null?void 0:i.match(rl.transactionHash))||(i==null?void 0:i.match(rl.signedMessage)))?ie.RPC_RESPONSE_TYPE_TX:ie.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsSafe(i){return se.SAFE_RPC_METHODS.includes(i.method)},isClient:typeof window<"u"};class I1{constructor(e,t=!1,r="eip155:1"){if(this.iframe=null,this.rpcUrl=Ce.BLOCKCHAIN_API_RPC_URL,this.initFrame=()=>{const o=document.getElementById("w3m-iframe");this.iframe&&!o&&document.body.appendChild(this.iframe)},this.events={registerFrameEventHandler:(o,n,a)=>{function s({data:p}){if(typeof p.type!="string"||!p.type.includes(ie.FRAME_EVENT_KEY))return;const d=eo.frameEvent.parse(p);d.id===o&&(n(d),window.removeEventListener("message",s))}et.isClient&&(window.addEventListener("message",s),a.addEventListener("abort",()=>{window.removeEventListener("message",s)}))},onFrameEvent:o=>{et.isClient&&window.addEventListener("message",({data:n})=>{if(typeof n.type!="string"||!n.type.includes(ie.FRAME_EVENT_KEY))return;const a=eo.frameEvent.parse(n);o(a)})},onAppEvent:o=>{et.isClient&&window.addEventListener("message",({data:n})=>{if(typeof n.type!="string"||!n.type.includes(ie.APP_EVENT_KEY))return;const a=eo.appEvent.parse(n);o(a)})},postAppEvent:o=>{var n;if(et.isClient){if(!((n=this.iframe)!=null&&n.contentWindow))throw new Error("W3mFrame: iframe is not set");eo.appEvent.parse(o),this.iframe.contentWindow.postMessage(o,"*")}},postFrameEvent:o=>{if(et.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");eo.frameEvent.parse(o),parent.postMessage(o,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((o,n)=>{this.frameLoadPromiseResolver={resolve:o,reject:n}}),t&&(this.frameLoadPromise=new Promise((o,n)=>{this.frameLoadPromiseResolver={resolve:o,reject:n}}),et.isClient)){const o=document.createElement("iframe");o.id="w3m-iframe",o.src=`${l0}?projectId=${e}&chainId=${r}&version=${d0}`,o.name="w3m-secure-iframe",o.style.position="fixed",o.style.zIndex="999999",o.style.display="none",o.style.animationDelay="0s, 50ms",o.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",o.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",this.iframe=o,this.iframe.onerror=()=>{var n;(n=this.frameLoadPromiseResolver)==null||n.reject("Unable to load email login dependency")},this.events.onFrameEvent(n=>{var a;n.type==="@w3m-frame/READY"&&((a=this.frameLoadPromiseResolver)==null||a.resolve(void 0))})}}get networks(){const e=["eip155:1","eip155:5","eip155:11155111","eip155:10","eip155:420","eip155:42161","eip155:421613","eip155:137","eip155:80001","eip155:42220","eip155:1313161554","eip155:1313161555","eip155:56","eip155:97","eip155:43114","eip155:43113","eip155:324","eip155:280","eip155:100","eip155:8453","eip155:84531","eip155:84532","eip155:7777777","eip155:999","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"].map(t=>({[t]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=${t}&projectId=${this.projectId}`,chainId:t}}));return Object.assign({},...e)}}class R1{constructor(e){var n;const t=Ed({level:u0}),{logger:r,chunkLoggerController:o}=Td({opts:t});this.logger=_d(r,this.constructor.name),this.chunkLoggerController=o,typeof window<"u"&&((n=this.chunkLoggerController)!=null&&n.downloadLogsBlobInBrowser)&&(window.downloadAppKitLogsBlob||(window.downloadAppKitLogsBlob={}),window.downloadAppKitLogsBlob.sdk=()=>{var a;(a=this.chunkLoggerController)!=null&&a.downloadLogsBlobInBrowser&&this.chunkLoggerController.downloadLogsBlobInBrowser({projectId:e})})}}class N1{constructor({projectId:e,chainId:t,onTimeout:r}){this.openRpcRequests=[],this.w3mLogger=new R1(e),this.w3mFrame=new I1(e,!0,t),this.onTimeout=r,this.getLoginEmailUsed()&&this.w3mFrame.initFrame()}getLoginEmailUsed(){return!!Je.get(ie.EMAIL_LOGIN_USED_KEY)}getEmail(){return Je.get(ie.EMAIL)}async connectEmail(e){try{et.checkIfAllowedToTriggerEmail(),this.w3mFrame.initFrame();const t=await this.appEvent({type:ie.APP_CONNECT_EMAIL,payload:e});return this.setNewLastEmailLoginTime(),t}catch(t){throw this.w3mLogger.logger.error({error:t},"Error connecting email"),t}}async connectDevice(){try{return this.appEvent({type:ie.APP_CONNECT_DEVICE})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting device"),e}}async connectOtp(e){try{return this.appEvent({type:ie.APP_CONNECT_OTP,payload:e})}catch(t){throw this.w3mLogger.logger.error({error:t},"Error connecting otp"),t}}async isConnected(){try{const e=await this.appEvent({type:ie.APP_IS_CONNECTED});return e.isConnected||this.deleteAuthLoginCache(),e}catch(e){throw this.deleteAuthLoginCache(),this.w3mLogger.logger.error({error:e},"Error checking connection"),e}}async getChainId(){try{const e=await this.appEvent({type:ie.APP_GET_CHAIN_ID});return this.setLastUsedChainId(e.chainId),e}catch(e){throw this.w3mLogger.logger.error({error:e},"Error getting chain id"),e}}async getSocialRedirectUri(e){try{return this.w3mFrame.initFrame(),this.appEvent({type:ie.APP_GET_SOCIAL_REDIRECT_URI,payload:e})}catch(t){throw this.w3mLogger.logger.error({error:t},"Error getting social redirect uri"),t}}async updateEmail(e){try{const t=await this.appEvent({type:ie.APP_UPDATE_EMAIL,payload:e});return this.setNewLastEmailLoginTime(),t}catch(t){throw this.w3mLogger.logger.error({error:t},"Error updating email"),t}}async updateEmailPrimaryOtp(e){try{return this.appEvent({type:ie.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e})}catch(t){throw this.w3mLogger.logger.error({error:t},"Error updating email primary otp"),t}}async updateEmailSecondaryOtp(e){try{const t=await this.appEvent({type:ie.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e});return this.setLoginSuccess(t.newEmail),t}catch(t){throw this.w3mLogger.logger.error({error:t},"Error updating email secondary otp"),t}}async syncTheme(e){try{return this.appEvent({type:ie.APP_SYNC_THEME,payload:e})}catch(t){throw this.w3mLogger.logger.error({error:t},"Error syncing theme"),t}}async syncDappData(e){try{return this.appEvent({type:ie.APP_SYNC_DAPP_DATA,payload:e})}catch(t){throw this.w3mLogger.logger.error({error:t},"Error syncing dapp data"),t}}async getSmartAccountEnabledNetworks(){try{const e=await this.appEvent({type:ie.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS});return this.persistSmartAccountEnabledNetworks(e.smartAccountEnabledNetworks),e}catch(e){throw this.persistSmartAccountEnabledNetworks([]),this.w3mLogger.logger.error({error:e},"Error getting smart account enabled networks"),e}}async setPreferredAccount(e){try{return this.appEvent({type:ie.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}})}catch(t){throw this.w3mLogger.logger.error({error:t},"Error setting preferred account"),t}}async connect(e){try{const t=(e==null?void 0:e.chainId)||this.getLastUsedChainId()||1,r=await this.appEvent({type:ie.APP_GET_USER,payload:{...e,chainId:t}});return this.setLoginSuccess(r.email),this.setLastUsedChainId(r.chainId),r}catch(t){throw this.w3mLogger.logger.error({error:t},"Error connecting"),t}}async getUser(e){try{const t=(e==null?void 0:e.chainId)||this.getLastUsedChainId()||1;return await this.appEvent({type:ie.APP_GET_USER,payload:{...e,chainId:t}})}catch(t){throw this.w3mLogger.logger.error({error:t},"Error connecting"),t}}async connectSocial(e){try{const t=await this.appEvent({type:ie.APP_CONNECT_SOCIAL,payload:{uri:e}});return t.userName&&this.setSocialLoginSuccess(t.userName),t}catch(t){throw this.w3mLogger.logger.error({error:t},"Error connecting social"),t}}async getFarcasterUri(){try{return this.w3mFrame.initFrame(),await this.appEvent({type:ie.APP_GET_FARCASTER_URI})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error getting farcaster uri"),e}}async connectFarcaster(){try{const e=await this.appEvent({type:ie.APP_CONNECT_FARCASTER});return e.userName&&this.setSocialLoginSuccess(e.userName),e}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting farcaster"),e}}async switchNetwork(e){try{const t=await this.appEvent({type:ie.APP_SWITCH_NETWORK,payload:{chainId:e}});return this.setLastUsedChainId(t.chainId),t}catch(t){throw this.w3mLogger.logger.error({error:t},"Error switching network"),t}}async disconnect(){try{const e=await this.appEvent({type:ie.APP_SIGN_OUT});return this.deleteAuthLoginCache(),e}catch(e){throw this.w3mLogger.logger.error({error:e},"Error disconnecting"),e}}async request(e){var t,r,o;try{if(se.GET_CHAIN_ID===e.method)return this.getLastUsedChainId();(t=this.rpcRequestHandler)==null||t.call(this,e);const n=await this.appEvent({type:ie.APP_RPC_REQUEST,payload:e});return(r=this.rpcSuccessHandler)==null||r.call(this,n,e),n}catch(n){throw(o=this.rpcErrorHandler)==null||o.call(this,n,e),this.w3mLogger.logger.error({error:n},"Error requesting"),n}}onRpcRequest(e){this.rpcRequestHandler=e}onRpcSuccess(e){this.rpcSuccessHandler=e}onRpcError(e){this.rpcErrorHandler=e}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===ie.FRAME_IS_CONNECTED_SUCCESS&&t.payload.isConnected&&e()})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===ie.FRAME_IS_CONNECTED_ERROR&&e(),t.type===ie.FRAME_IS_CONNECTED_SUCCESS&&!t.payload.isConnected&&e()})}onConnect(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===ie.FRAME_GET_USER_SUCCESS&&e(t.payload)})}async getCapabilities(){try{return await this.request({method:"wallet_getCapabilities"})||{}}catch{return{}}}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===ie.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===ie.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:se.ACCOUNT_TYPES.EOA})})}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===ie.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===ie.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])})}getAvailableChainIds(){return Object.keys(this.w3mFrame.networks)}rejectRpcRequests(){try{this.openRpcRequests.forEach(({abortController:e,method:t})=>{se.SAFE_RPC_METHODS.includes(t)||e.abort()}),this.openRpcRequests=[]}catch(e){this.w3mLogger.logger.error({error:e},"Error aborting RPC request")}}async appEvent(e){await this.w3mFrame.frameLoadPromise;let t;function r(s){return s.replace("@w3m-app/","")}const o=new AbortController,n=r(e.type);return[ie.APP_CONNECT_EMAIL,ie.APP_CONNECT_DEVICE,ie.APP_CONNECT_OTP,ie.APP_CONNECT_SOCIAL,ie.APP_GET_SOCIAL_REDIRECT_URI,ie.APP_GET_FARCASTER_URI].map(r).includes(n)&&(t=setTimeout(()=>{var s;(s=this.onTimeout)==null||s.call(this),o.abort()},3e4)),new Promise((s,p)=>{var C,b;const d=Math.random().toString(36).substring(7);if((b=(C=this.w3mLogger.logger).info)==null||b.call(C,{event:e,id:d},"Sending app event"),this.w3mFrame.events.postAppEvent({...e,id:d}),n==="RPC_REQUEST"){const y=e;this.openRpcRequests=[...this.openRpcRequests,{...y.payload,abortController:o}]}o.signal.addEventListener("abort",()=>{p(n==="RPC_REQUEST"?new Error("Request was aborted"):new Error("Something went wrong"))});function w(y,T){var _,I,B;y.id===d&&((I=(_=T.logger).info)==null||I.call(_,{framEvent:y,id:d},"Received frame response"),y.type===`@w3m-frame/${n}_SUCCESS`?(t&&clearTimeout(t),"payload"in y&&s(y.payload),s(void 0)):y.type===`@w3m-frame/${n}_ERROR`&&(t&&clearTimeout(t),"payload"in y&&p(new Error(((B=y.payload)==null?void 0:B.message)||"An error occurred")),p(new Error("An error occurred"))))}this.w3mFrame.events.registerFrameEventHandler(d,y=>w(y,this.w3mLogger),o.signal)})}setNewLastEmailLoginTime(){Je.set(ie.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setSocialLoginSuccess(e){Je.set(ie.SOCIAL_USERNAME,e)}setLoginSuccess(e){e&&Je.set(ie.EMAIL,e),Je.set(ie.EMAIL_LOGIN_USED_KEY,"true"),Je.delete(ie.LAST_EMAIL_LOGIN_TIME)}deleteAuthLoginCache(){Je.delete(ie.EMAIL_LOGIN_USED_KEY),Je.delete(ie.EMAIL),Je.delete(ie.LAST_USED_CHAIN_KEY),Je.delete(ie.SOCIAL_USERNAME)}setLastUsedChainId(e){e&&Je.set(ie.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(Je.get(ie.LAST_USED_CHAIN_KEY))}persistSmartAccountEnabledNetworks(e){Je.set(ie.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}const _e=Ie({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),Be={state:_e,subscribe(i){return qe(_e,()=>i(_e))},setLastNetworkInView(i){_e.lastNetworkInView=i},async fetchTransactions(i,e){var r;const{projectId:t}=U.state;if(!t||!i)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");_e.loading=!0;try{const o=await Se.fetchTransactions({account:i,projectId:t,cursor:_e.next,onramp:e,cache:e==="coinbase"?"no-cache":void 0,chainId:(r=m.state.activeCaipNetwork)==null?void 0:r.caipNetworkId}),n=this.filterSpamTransactions(o.data),a=this.filterByConnectedChain(n),s=[..._e.transactions,...a];_e.loading=!1,e==="coinbase"?_e.coinbaseTransactions=this.groupTransactionsByYearAndMonth(_e.coinbaseTransactions,o.data):(_e.transactions=s,_e.transactionsByYear=this.groupTransactionsByYearAndMonth(_e.transactionsByYear,a)),_e.empty=s.length===0,_e.next=o.next?o.next:void 0}catch{z.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:i,projectId:t,cursor:_e.next,isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),q.showError("Failed to fetch transactions"),_e.loading=!1,_e.empty=!0,_e.next=void 0}},groupTransactionsByYearAndMonth(i={},e=[]){const t=i;return e.forEach(r=>{const o=new Date(r.metadata.minedAt).getFullYear(),n=new Date(r.metadata.minedAt).getMonth(),a=t[o]??{},p=(a[n]??[]).filter(d=>d.id!==r.id);t[o]={...a,[n]:[...p,r].sort((d,w)=>new Date(w.metadata.minedAt).getTime()-new Date(d.metadata.minedAt).getTime())}}),t},filterSpamTransactions(i){return i.filter(e=>!e.transfers.every(r=>{var o;return((o=r.nft_info)==null?void 0:o.flags.is_spam)===!0}))},filterByConnectedChain(i){var r;const e=(r=m.state.activeCaipNetwork)==null?void 0:r.caipNetworkId;return i.filter(o=>o.metadata.chain===e)},clearCursor(){_e.next=void 0},resetTransactions(){_e.transactions=[],_e.transactionsByYear={},_e.lastNetworkInView=void 0,_e.loading=!1,_e.empty=!1,_e.next=void 0}},Ii=Ie({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Te={state:Ii,subscribe(i){return qe(Ii,()=>i(Ii))},setThemeMode(i){Ii.themeMode=i;try{const e=Y.getAuthConnector();if(e){const t=Te.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:i,themeVariables:t,w3mThemeVariables:ai(t,i)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(i){Ii.themeVariables={...Ii.themeVariables,...i};try{const e=Y.getAuthConnector();if(e){const t=Te.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:ai(Ii.themeVariables,Ii.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return wa(Ii)}},ni=Ie({allConnectors:[],connectors:[]}),Y={state:ni,subscribeKey(i,e){return Ke(ni,i,e)},setConnectors(i){i.filter(t=>!ni.allConnectors.some(r=>r.id===t.id&&this.getConnectorName(r.name)===this.getConnectorName(t.name)&&r.chain===t.chain)).forEach(t=>{ni.allConnectors.push($t(t))}),ni.connectors=this.mergeMultiChainConnectors(ni.allConnectors)},mergeMultiChainConnectors(i){const e=this.generateConnectorMapByName(i),t=[];return e.forEach(r=>{const o=r[0],n=(o==null?void 0:o.id)==="ID_AUTH";r.length>1?t.push({name:o==null?void 0:o.name,imageUrl:o==null?void 0:o.imageUrl,imageId:o==null?void 0:o.imageId,connectors:[...r],type:n?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(o==null?void 0:o.id)||""}):o&&t.push(o)}),t},generateConnectorMapByName(i){const e=new Map;return i.forEach(t=>{const{name:r}=t,o=this.getConnectorName(r);if(!o)return;const n=e.get(o)||[];n.find(s=>s.chain===t.chain)||n.push(t),e.set(o,n)}),e},getConnectorName(i){return i&&({"Trust Wallet":"Trust"}[i]||i)},getUniqueConnectorsByName(i){const e=[];return i.forEach(t=>{e.find(r=>r.chain===t.chain)||e.push(t)}),e},addConnector(i){var e,t;if(i.id==="ID_AUTH"){const r=i,o=wa(U.state),n=Te.getSnapshot().themeMode,a=Te.getSnapshot().themeVariables;(t=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||t.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId,sdkType:o.sdkType}),r.provider.syncTheme({themeMode:n,themeVariables:a,w3mThemeVariables:ai(a,n)}),this.setConnectors([i])}else this.setConnectors([i])},getAuthConnector(){var t;const i=m.state.activeChain,e=ni.connectors.find(r=>r.id==="ID_AUTH");if(e)return(t=e==null?void 0:e.connectors)!=null&&t.length?e.connectors.find(o=>o.chain===i):e},getAnnouncedConnectorRdns(){return ni.connectors.filter(i=>i.type==="ANNOUNCED").map(i=>{var e;return(e=i.info)==null?void 0:e.rdns})},getConnectors(){return ni.connectors},getConnector(i,e){return ni.connectors.find(t=>{var r;return t.explorerId===i||((r=t.info)==null?void 0:r.rdns)===e})},syncIfAuthConnector(i){var n,a;if(i.id!=="ID_AUTH")return;const e=i,t=wa(U.state),r=Te.getSnapshot().themeMode,o=Te.getSnapshot().themeVariables;(a=(n=e==null?void 0:e.provider)==null?void 0:n.syncDappData)==null||a.call(n,{metadata:t.metadata,sdkVersion:t.sdkVersion,sdkType:t.sdkType,projectId:t.projectId}),e.provider.syncTheme({themeMode:r,themeVariables:o,w3mThemeVariables:ai(o,r)})}},ke=Ie({wcError:!1,buffering:!1,status:"disconnected"});let xr;const ee={state:ke,subscribeKey(i,e){return Ke(ke,i,e)},_getClient(){return ke._client},setClient(i){ke._client=$t(i)},async connectWalletConnect(){var i,e;if(de.setConnectedConnector("WALLET_CONNECT"),M.isTelegram()){if(xr){try{await xr}catch{}xr=void 0;return}if(!M.isPairingExpired(ke==null?void 0:ke.wcPairingExpiry)){const t=ke.wcUri;ke.wcUri=t;return}xr=new Promise(async(t,r)=>{var o,n;await((n=(o=this._getClient())==null?void 0:o.connectWalletConnect)==null?void 0:n.call(o,a=>{ke.wcUri=a,ke.wcPairingExpiry=M.getPairingExpiry()}).catch(r)),t()}),this.state.status="connecting",await xr,xr=void 0,ke.wcPairingExpiry=void 0,this.state.status="connected"}else await((e=(i=this._getClient())==null?void 0:i.connectWalletConnect)==null?void 0:e.call(i,t=>{ke.wcUri=t,ke.wcPairingExpiry=M.getPairingExpiry()}))},async connectExternal(i,e,t=!0){var r,o;await((o=(r=this._getClient())==null?void 0:r.connectExternal)==null?void 0:o.call(r,i)),t&&m.setActiveNamespace(e)},async reconnectExternal(i){var e,t;await((t=(e=this._getClient())==null?void 0:e.reconnectExternal)==null?void 0:t.call(e,i)),de.setConnectedConnector(i.type==="AUTH"?"ID_AUTH":i.type)},async setPreferredAccountType(i){var t;te.setLoading(!0);const e=Y.getAuthConnector();e&&(await(e==null?void 0:e.provider.setPreferredAccount(i)),await this.reconnectExternal(e),te.setLoading(!1),z.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:i,network:((t=m.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)||""}}))},async signMessage(i){var e;return(e=this._getClient())==null?void 0:e.signMessage(i)},parseUnits(i,e){var t;return(t=this._getClient())==null?void 0:t.parseUnits(i,e)},formatUnits(i,e){var t;return(t=this._getClient())==null?void 0:t.formatUnits(i,e)},async sendTransaction(i){var e;return(e=this._getClient())==null?void 0:e.sendTransaction(i)},async getCapabilities(i){var e;return(e=this._getClient())==null?void 0:e.getCapabilities(i)},async grantPermissions(i){var e;return(e=this._getClient())==null?void 0:e.grantPermissions(i)},async estimateGas(i){var e;return(e=this._getClient())==null?void 0:e.estimateGas(i)},async writeContract(i){var e;return(e=this._getClient())==null?void 0:e.writeContract(i)},async getEnsAddress(i){var e;return(e=this._getClient())==null?void 0:e.getEnsAddress(i)},async getEnsAvatar(i){var e;return(e=this._getClient())==null?void 0:e.getEnsAvatar(i)},checkInstalled(i){var e,t;return((t=(e=this._getClient())==null?void 0:e.checkInstalled)==null?void 0:t.call(e,i))||!1},resetWcConnection(){ke.wcUri=void 0,ke.wcPairingExpiry=void 0,ke.wcLinking=void 0,ke.recentWallet=void 0,ke.status="disconnected",Be.resetTransactions(),de.deleteWalletConnectDeepLink()},setWcLinking(i){ke.wcLinking=i},setWcError(i){ke.wcError=i,ke.buffering=!1},setRecentWallet(i){ke.recentWallet=i},setBuffering(i){ke.buffering=i},setStatus(i){ke.status=i},async disconnect(){try{const i=this._getClient(),e=U.state.siwx;if(e){const t=m.getActiveCaipNetwork(),r=M.getPlainAddress(m.getActiveCaipAddress());t&&r&&await e.revokeSession(t.caipNetworkId,r)}await(i==null?void 0:i.disconnect()),this.resetWcConnection()}catch{throw new Error("Failed to disconnect")}}},no={async getTokenList(){var r;const i=m.state.activeCaipNetwork,e=await Se.fetchSwapTokens({chainId:i==null?void 0:i.caipNetworkId,projectId:U.state.projectId});return((r=e==null?void 0:e.tokens)==null?void 0:r.map(o=>({...o,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){var t;const i=U.state.projectId,e=m.state.activeCaipNetwork;if(!e)return null;try{switch(e.chainNamespace){case"solana":const r=(t=await(ee==null?void 0:ee.estimateGas({chainNamespace:"solana"})))==null?void 0:t.toString();return{standard:r,fast:r,instant:r};case"eip155":default:return await Se.fetchGasPrice({projectId:i,chainId:e.caipNetworkId})}}catch{return null}},async fetchSwapAllowance({tokenAddress:i,userAddress:e,sourceTokenAmount:t,sourceTokenDecimals:r}){const o=U.state.projectId,n=await Se.fetchSwapAllowance({projectId:o,tokenAddress:i,userAddress:e});if(n!=null&&n.allowance&&t&&r){const a=ee.parseUnits(t,r)||0;return BigInt(n.allowance)>=a}return!1},async getMyTokensWithBalance(i){const e=R.state.address,t=m.state.activeCaipNetwork;if(!e||!t)return[];const o=(await Se.getBalance(e,t.caipNetworkId,i)).balances.filter(n=>n.quantity.decimals!=="0");return R.setTokenBalance(o,m.state.activeChain),this.mapBalancesToSwapTokens(o)},mapBalancesToSwapTokens(i){return(i==null?void 0:i.map(e=>({...e,address:e!=null&&e.address?e.address:m.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},Ee=Ie({view:"Connect",history:["Connect"],transactionStack:[]}),S={state:Ee,subscribeKey(i,e){return Ke(Ee,i,e)},pushTransactionStack(i){Ee.transactionStack.push(i)},popTransactionStack(i){var t,r;const e=Ee.transactionStack.pop();if(e)if(i)this.goBack(),(t=e==null?void 0:e.onCancel)==null||t.call(e);else{if(e.goBack)this.goBack();else if(e.replace){const n=Ee.history.indexOf("ConnectingSiwe");n>0?this.goBackToIndex(n-1):(te.close(),Ee.history=[])}else e.view&&this.reset(e.view);(r=e==null?void 0:e.onSuccess)==null||r.call(e)}},push(i,e){i!==Ee.view&&(Ee.view=i,Ee.history.push(i),Ee.data=e)},reset(i){Ee.view=i,Ee.history=[i]},replace(i,e){Ee.history.at(-1)===i||(Ee.view=i,Ee.history[Ee.history.length-1]=i,Ee.data=e)},goBack(){if(Ee.history.length>1&&!Ee.history.includes("UnsupportedChain")){Ee.history.pop();const[i]=Ee.history.slice(-1);i&&(Ee.view=i)}else te.close()},goBackToIndex(i){if(Ee.history.length>1){Ee.history=Ee.history.slice(0,i+1);const[e]=Ee.history.slice(-1);e&&(Ee.view=e)}}},Ni={getGasPriceInEther(i,e){const t=e*i;return Number(t)/1e18},getGasPriceInUSD(i,e,t){const r=Ni.getGasPriceInEther(e,t);return fe.bigNumber(i).multipliedBy(r).toNumber()},getPriceImpact({sourceTokenAmount:i,sourceTokenPriceInUSD:e,toTokenPriceInUSD:t,toTokenAmount:r}){const o=fe.bigNumber(i).multipliedBy(e),n=fe.bigNumber(r).multipliedBy(t);return o.minus(n).dividedBy(o).multipliedBy(100).toNumber()},getMaxSlippage(i,e){const t=fe.bigNumber(i).dividedBy(100);return fe.multiply(e,t).toNumber()},getProviderFee(i,e=.0085){return fe.bigNumber(i).multipliedBy(e).toString()},isInsufficientNetworkTokenForGas(i,e){const t=e||"0";return fe.bigNumber(i).isZero()?!0:fe.bigNumber(fe.bigNumber(t)).isGreaterThan(i)},isInsufficientSourceTokenForSwap(i,e,t){var n,a;const r=(a=(n=t==null?void 0:t.find(s=>s.address===e))==null?void 0:n.quantity)==null?void 0:a.numeric;return fe.bigNumber(r||"0").isLessThan(i)},getToTokenAmount({sourceToken:i,toToken:e,sourceTokenPrice:t,toTokenPrice:r,sourceTokenAmount:o}){if(o==="0"||!i||!e)return"0";const n=i.decimals,a=t,s=e.decimals,p=r;if(p<=0)return"0";const d=fe.bigNumber(o).multipliedBy(.0085),C=fe.bigNumber(o).minus(d).multipliedBy(fe.bigNumber(10).pow(n)),b=fe.bigNumber(a).dividedBy(p),y=n-s;return C.multipliedBy(b).dividedBy(fe.bigNumber(10).pow(y)).dividedBy(fe.bigNumber(10).pow(s)).toFixed(s).toString()}},ol=15e4,$1=6,lt={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:me.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},$=Ie(lt),Z={state:$,subscribe(i){return qe($,()=>i($))},subscribeKey(i,e){return Ke($,i,e)},getParams(){var s,p,d,w,C,b,y,T;const i=m.state.activeCaipAddress,e=M.getPlainAddress(i),t=m.getActiveNetworkTokenAddress(),r=de.getConnectedConnector();if(!e)throw new Error("No address found to swap the tokens from.");const o=!((s=$.toToken)!=null&&s.address)||!((p=$.toToken)!=null&&p.decimals),n=!((d=$.sourceToken)!=null&&d.address)||!((w=$.sourceToken)!=null&&w.decimals)||!fe.bigNumber($.sourceTokenAmount).isGreaterThan(0),a=!$.sourceTokenAmount;return{networkAddress:t,fromAddress:e,fromCaipAddress:i,sourceTokenAddress:(C=$.sourceToken)==null?void 0:C.address,toTokenAddress:(b=$.toToken)==null?void 0:b.address,toTokenAmount:$.toTokenAmount,toTokenDecimals:(y=$.toToken)==null?void 0:y.decimals,sourceTokenAmount:$.sourceTokenAmount,sourceTokenDecimals:(T=$.sourceToken)==null?void 0:T.decimals,invalidToToken:o,invalidSourceToken:n,invalidSourceTokenAmount:a,availableToSwap:i&&!o&&!n&&!a,isAuthConnector:r==="ID_AUTH"}},setSourceToken(i){if(!i){$.sourceToken=i,$.sourceTokenAmount="",$.sourceTokenPriceInUSD=0;return}$.sourceToken=i,this.setTokenPrice(i.address,"sourceToken")},setSourceTokenAmount(i){$.sourceTokenAmount=i},setToToken(i){if(!i){$.toToken=i,$.toTokenAmount="",$.toTokenPriceInUSD=0;return}$.toToken=i,this.setTokenPrice(i.address,"toToken")},setToTokenAmount(i){$.toTokenAmount=i?fe.formatNumberToLocalString(i,$1):""},async setTokenPrice(i,e){const{availableToSwap:t}=this.getParams();let r=$.tokensPriceMap[i]||0;r||($.loadingPrices=!0,r=await this.getAddressPrice(i)),e==="sourceToken"?$.sourceTokenPriceInUSD=r:e==="toToken"&&($.toTokenPriceInUSD=r),$.loadingPrices&&($.loadingPrices=!1,t&&this.swapTokens())},switchTokens(){if($.initializing||!$.initialized)return;const i=$.toToken?{...$.toToken}:void 0,e=$.sourceToken?{...$.sourceToken}:void 0,t=i&&$.toTokenAmount===""?"1":$.toTokenAmount;this.setSourceToken(i),this.setToToken(e),this.setSourceTokenAmount(t),this.setToTokenAmount(""),this.swapTokens()},resetState(){$.myTokensWithBalance=lt.myTokensWithBalance,$.tokensPriceMap=lt.tokensPriceMap,$.initialized=lt.initialized,$.sourceToken=lt.sourceToken,$.sourceTokenAmount=lt.sourceTokenAmount,$.sourceTokenPriceInUSD=lt.sourceTokenPriceInUSD,$.toToken=lt.toToken,$.toTokenAmount=lt.toTokenAmount,$.toTokenPriceInUSD=lt.toTokenPriceInUSD,$.networkPrice=lt.networkPrice,$.networkTokenSymbol=lt.networkTokenSymbol,$.networkBalanceInUSD=lt.networkBalanceInUSD,$.inputError=lt.inputError},resetValues(){var t;const{networkAddress:i}=this.getParams(),e=(t=$.tokens)==null?void 0:t.find(r=>r.address===i);this.setSourceToken(e),this.setToToken(void 0)},getApprovalLoadingState(){return $.loadingApprovalTransaction},clearError(){$.transactionError=void 0},async initializeState(){if(!$.initializing){if($.initializing=!0,!$.initialized)try{await this.fetchTokens(),$.initialized=!0}catch{$.initialized=!1,q.showError("Failed to initialize swap"),S.goBack()}$.initializing=!1}},async fetchTokens(){var t;const{networkAddress:i}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const e=(t=$.tokens)==null?void 0:t.find(r=>r.address===i);e&&($.networkTokenSymbol=e.symbol,this.setSourceToken(e),this.setSourceTokenAmount("1"))},async getTokenList(){const i=await no.getTokenList();$.tokens=i,$.popularTokens=i.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0),$.suggestedTokens=i.filter(e=>!!me.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(i){var p,d;const e=$.tokensPriceMap[i];if(e)return e;const r=(await Se.fetchTokenPrice({projectId:U.state.projectId,addresses:[i]})).fungibles||[],o=[...$.tokens||[],...$.myTokensWithBalance||[]],n=(p=o==null?void 0:o.find(w=>w.address===i))==null?void 0:p.symbol,a=((d=r.find(w=>w.symbol.toLowerCase()===(n==null?void 0:n.toLowerCase())))==null?void 0:d.price)||0,s=parseFloat(a.toString());return $.tokensPriceMap[i]=s,s},async getNetworkTokenPrice(){var o;const{networkAddress:i}=this.getParams(),t=(o=(await Se.fetchTokenPrice({projectId:U.state.projectId,addresses:[i]}).catch(()=>(q.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles)==null?void 0:o[0],r=(t==null?void 0:t.price.toString())||"0";$.tokensPriceMap[i]=parseFloat(r),$.networkTokenSymbol=(t==null?void 0:t.symbol)||"",$.networkPrice=r},async getMyTokensWithBalance(i){const e=await no.getMyTokensWithBalance(i);e&&(await this.getInitialGasPrice(),this.setBalances(e))},setBalances(i){const{networkAddress:e}=this.getParams(),t=m.state.activeCaipNetwork;if(!t)return;const r=i.find(o=>o.address===e);i.forEach(o=>{$.tokensPriceMap[o.address]=o.price||0}),$.myTokensWithBalance=i.filter(o=>o.address.startsWith(t.caipNetworkId)),$.networkBalanceInUSD=r?fe.multiply(r.quantity.numeric,r.price).toString():"0"},async getInitialGasPrice(){var e,t;const i=await no.fetchGasPrice();if(!i)return{gasPrice:null,gasPriceInUSD:null};switch((t=(e=m.state)==null?void 0:e.activeCaipNetwork)==null?void 0:t.chainNamespace){case"solana":return $.gasFee=i.standard??"0",$.gasPriceInUSD=fe.multiply(i.standard,$.networkPrice).dividedBy(1e9).toNumber(),{gasPrice:BigInt($.gasFee),gasPriceInUSD:Number($.gasPriceInUSD)};case"eip155":default:const r=i.standard??"0",o=BigInt(r),n=BigInt(ol),a=Ni.getGasPriceInUSD($.networkPrice,n,o);return $.gasFee=r,$.gasPriceInUSD=a,{gasPrice:o,gasPriceInUSD:a}}},async swapTokens(){var d,w;const i=R.state.address,e=$.sourceToken,t=$.toToken,r=fe.bigNumber($.sourceTokenAmount).isGreaterThan(0);if(!t||!e||$.loadingPrices||!r)return;$.loadingQuote=!0;const o=fe.bigNumber($.sourceTokenAmount).multipliedBy(10**e.decimals).integerValue(),n=await Se.fetchSwapQuote({userAddress:i,projectId:U.state.projectId,from:e.address,to:t.address,gasPrice:$.gasFee,amount:o.toString()});$.loadingQuote=!1;const a=(w=(d=n==null?void 0:n.quotes)==null?void 0:d[0])==null?void 0:w.toAmount;if(!a)return;const s=fe.bigNumber(a).dividedBy(10**t.decimals).toString();this.setToTokenAmount(s),this.hasInsufficientToken($.sourceTokenAmount,e.address)?$.inputError="Insufficient balance":($.inputError=void 0,this.setTransactionDetails())},async getTransaction(){const{fromCaipAddress:i,availableToSwap:e}=this.getParams(),t=$.sourceToken,r=$.toToken;if(!(!i||!e||!t||!r||$.loadingQuote))try{$.loadingBuildTransaction=!0;const o=await no.fetchSwapAllowance({userAddress:i,tokenAddress:t.address,sourceTokenAmount:$.sourceTokenAmount,sourceTokenDecimals:t.decimals});let n;return o?n=await this.createSwapTransaction():n=await this.createAllowanceTransaction(),$.loadingBuildTransaction=!1,$.fetchError=!1,n}catch{S.goBack(),q.showError("Failed to check allowance"),$.loadingBuildTransaction=!1,$.approvalTransaction=void 0,$.swapTransaction=void 0,$.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:i,fromAddress:e,sourceTokenAddress:t,toTokenAddress:r}=this.getParams();if(!(!i||!r)){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=await Se.generateApproveCalldata({projectId:U.state.projectId,from:t,to:r,userAddress:i}),n=await ee.estimateGas({address:e,to:M.getPlainAddress(o.tx.to),data:o.tx.data}),a={data:o.tx.data,to:M.getPlainAddress(o.tx.from),gas:n,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:$.toTokenAmount};return $.swapTransaction=void 0,$.approvalTransaction={data:a.data,to:a.to,gas:a.gas??BigInt(0),gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount},{data:a.data,to:a.to,gas:a.gas??BigInt(0),gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount}}catch{S.goBack(),q.showError("Failed to create approval transaction"),$.approvalTransaction=void 0,$.swapTransaction=void 0,$.fetchError=!0;return}}},async createSwapTransaction(){var a;const{networkAddress:i,fromCaipAddress:e,sourceTokenAmount:t}=this.getParams(),r=$.sourceToken,o=$.toToken;if(!e||!t||!r||!o)return;const n=(a=ee.parseUnits(t,r.decimals))==null?void 0:a.toString();try{const s=await Se.generateSwapCalldata({projectId:U.state.projectId,userAddress:e,from:r.address,to:o.address,amount:n}),p=r.address===i,d=BigInt(s.tx.eip155.gas),w=BigInt(s.tx.eip155.gasPrice),C={data:s.tx.data,to:M.getPlainAddress(s.tx.to),gas:d,gasPrice:w,value:BigInt(p?n??"0":"0"),toAmount:$.toTokenAmount};return $.gasPriceInUSD=Ni.getGasPriceInUSD($.networkPrice,d,w),$.approvalTransaction=void 0,$.swapTransaction=C,C}catch{S.goBack(),q.showError("Failed to create transaction"),$.approvalTransaction=void 0,$.swapTransaction=void 0,$.fetchError=!0;return}},async sendTransactionForApproval(i){const{fromAddress:e,isAuthConnector:t}=this.getParams();$.loadingApprovalTransaction=!0;const r="Approve limit increase in your wallet";t?S.pushTransactionStack({view:null,goBack:!0,onSuccess(){q.showLoading(r)}}):q.showLoading(r);try{await ee.sendTransaction({address:e,to:i.to,data:i.data,value:BigInt(i.value),gasPrice:BigInt(i.gasPrice),chainNamespace:"eip155"}),await this.swapTokens(),await this.getTransaction(),$.approvalTransaction=void 0,$.loadingApprovalTransaction=!1}catch(o){const n=o;$.transactionError=n==null?void 0:n.shortMessage,$.loadingApprovalTransaction=!1,q.showError((n==null?void 0:n.shortMessage)||"Transaction error")}},async sendTransactionForSwap(i){var a,s,p,d,w,C,b,y,T,_,I,B;if(!i)return;const{fromAddress:e,toTokenAmount:t,isAuthConnector:r}=this.getParams();$.loadingTransaction=!0;const o=`Swapping ${(a=$.sourceToken)==null?void 0:a.symbol} to ${fe.formatNumberToLocalString(t,3)} ${(s=$.toToken)==null?void 0:s.symbol}`,n=`Swapped ${(p=$.sourceToken)==null?void 0:p.symbol} to ${fe.formatNumberToLocalString(t,3)} ${(d=$.toToken)==null?void 0:d.symbol}`;r?S.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){q.showLoading(o),Z.resetState()}}):q.showLoading("Confirm transaction in your wallet");try{const W=[(w=$.sourceToken)==null?void 0:w.address,(C=$.toToken)==null?void 0:C.address].join(","),D=await ee.sendTransaction({address:e,to:i.to,data:i.data,gas:i.gas,gasPrice:BigInt(i.gasPrice),value:i.value,chainNamespace:"eip155"});return $.loadingTransaction=!1,q.showSuccess(n),z.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:((b=m.state.activeCaipNetwork)==null?void 0:b.caipNetworkId)||"",swapFromToken:((y=this.state.sourceToken)==null?void 0:y.symbol)||"",swapToToken:((T=this.state.toToken)==null?void 0:T.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),Z.resetState(),r||S.replace("Account"),Z.getMyTokensWithBalance(W),D}catch(W){const D=W;$.transactionError=D==null?void 0:D.shortMessage,$.loadingTransaction=!1,q.showError((D==null?void 0:D.shortMessage)||"Transaction error"),z.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:(D==null?void 0:D.shortMessage)||(D==null?void 0:D.message)||"Unknown",network:((_=m.state.activeCaipNetwork)==null?void 0:_.caipNetworkId)||"",swapFromToken:((I=this.state.sourceToken)==null?void 0:I.symbol)||"",swapToToken:((B=this.state.toToken)==null?void 0:B.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(i,e){const t=Ni.isInsufficientSourceTokenForSwap(i,e,$.myTokensWithBalance);let r=!0;return R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT?r=!1:r=Ni.isInsufficientNetworkTokenForGas($.networkBalanceInUSD,$.gasPriceInUSD),r||t},setTransactionDetails(){const{toTokenAddress:i,toTokenDecimals:e}=this.getParams();!i||!e||($.gasPriceInUSD=Ni.getGasPriceInUSD($.networkPrice,BigInt($.gasFee),BigInt(ol)),$.priceImpact=Ni.getPriceImpact({sourceTokenAmount:$.sourceTokenAmount,sourceTokenPriceInUSD:$.sourceTokenPriceInUSD,toTokenPriceInUSD:$.toTokenPriceInUSD,toTokenAmount:$.toTokenAmount}),$.maxSlippage=Ni.getMaxSlippage($.slippage,$.toTokenAmount),$.providerFee=Ni.getProviderFee($.sourceTokenAmount))}},yr=Ie({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),R={state:yr,replaceState(i){i&&Object.assign(yr,$t(i))},subscribe(i){return m.subscribeChainProp("accountState",e=>{if(e)return i(e)})},subscribeKey(i,e,t){let r;return m.subscribeChainProp("accountState",o=>{if(o){const n=o[i];r!==n&&(r=n,e(n))}},t)},setStatus(i,e){m.setAccountProp("status",i,e)},getCaipAddress(i){return m.getAccountProp("caipAddress",i)},setProvider(i,e){i&&m.setAccountProp("provider",i,e)},setCaipAddress(i,e){const t=i?M.getPlainAddress(i):void 0;e===m.state.activeChain&&(m.state.activeCaipAddress=i),m.setAccountProp("caipAddress",i,e),m.setAccountProp("address",t,e)},setBalance(i,e,t){m.setAccountProp("balance",i,t),m.setAccountProp("balanceSymbol",e,t)},setProfileName(i,e){m.setAccountProp("profileName",i,e)},setProfileImage(i,e){m.setAccountProp("profileImage",i,e)},setAddressExplorerUrl(i,e){m.setAccountProp("addressExplorerUrl",i,e)},setSmartAccountDeployed(i,e){m.setAccountProp("smartAccountDeployed",i,e)},setCurrentTab(i){m.setAccountProp("currentTab",i,m.state.activeChain)},setTokenBalance(i,e){i&&m.setAccountProp("tokenBalance",i,e)},setShouldUpdateToAddress(i,e){m.setAccountProp("shouldUpdateToAddress",i,e)},setAllAccounts(i,e){m.setAccountProp("allAccounts",i,e)},addAddressLabel(i,e,t){const r=m.getAccountProp("addressLabels",t)||new Map;r.set(i,e),m.setAccountProp("addressLabels",r,t)},removeAddressLabel(i,e){const t=m.getAccountProp("addressLabels",e)||new Map;t.delete(i),m.setAccountProp("addressLabels",t,e)},setConnectedWalletInfo(i,e){m.setAccountProp("connectedWalletInfo",i,e,!1)},setPreferredAccountType(i,e){m.setAccountProp("preferredAccountType",i,e)},setSocialProvider(i,e){i&&m.setAccountProp("socialProvider",i,e)},setSocialWindow(i,e){i&&m.setAccountProp("socialWindow",$t(i),e)},setFarcasterUrl(i,e){i&&m.setAccountProp("farcasterUrl",i,e)},async fetchTokenBalance(){var o,n;const i=(o=m.state.activeCaipNetwork)==null?void 0:o.caipNetworkId,e=(n=m.state.activeCaipNetwork)==null?void 0:n.chainNamespace,t=m.state.activeCaipAddress,r=t?M.getPlainAddress(t):void 0;if(!(yr.lastRetry&&!M.isAllowedRetry(yr.lastRetry,30*me.ONE_SEC_MS)))try{if(r&&i&&e){const a=await Se.getBalance(r,i),s=a.balances.filter(p=>p.quantity.decimals!=="0");this.setTokenBalance(s,e),Z.setBalances(no.mapBalancesToSwapTokens(a.balances)),yr.lastRetry=void 0}}catch{yr.lastRetry=Date.now(),q.showError("Token Balance Unavailable")}},resetAccount(i){m.resetAccount(i)}},to=Ie({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),en={state:to,subscribe(i){return qe(to,()=>i(to))},set(i){Object.assign(to,{...to,...i})}},P1={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},O1={supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},le=Ie({chains:n0(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0}}),m={state:le,subscribe(i){return qe(le,()=>{i(le)})},subscribeKey(i,e){return Ke(le,i,e)},subscribeChainProp(i,e,t){let r;return qe(le.chains,()=>{var n;const o=t||le.activeChain;if(o){const a=(n=le.chains.get(o))==null?void 0:n[i];r!==a&&(r=a,e(a))}})},initialize(i){const e=i==null?void 0:i[0];((i==null?void 0:i.length)===0||!e)&&(le.noAdapters=!0),le.noAdapters||(le.activeChain=e==null?void 0:e.namespace,en.set({activeChain:e==null?void 0:e.namespace}),i.forEach(t=>{le.chains.set(t.namespace,{namespace:t.namespace,connectionControllerClient:t.connectionControllerClient,networkControllerClient:t.networkControllerClient,adapterType:t.adapterType,accountState:P1,networkState:O1,caipNetworks:t.caipNetworks})}))},setAdapterNetworkState(i,e){const t=le.chains.get(i);t&&(t.networkState=$t({...t.networkState,...e}),le.chains.set(i,$t(t)))},setChainAccountData(i,e,t=!0){if(!i)throw new Error("Chain is required to update chain account data");const r=le.chains.get(i);r&&(r.accountState=$t({...r.accountState,...e}),le.chains.set(i,r),(le.chains.size===1||le.activeChain===i)&&(e.caipAddress&&(le.activeCaipAddress=e.caipAddress),R.replaceState(r.accountState)))},setAccountProp(i,e,t,r=!0){this.setChainAccountData(t,{[i]:e},r)},setActiveNamespace(i){var r,o;le.activeChain=i;const e=i?le.chains.get(i):void 0,t=(r=e==null?void 0:e.networkState)==null?void 0:r.caipNetwork;t!=null&&t.id&&(le.activeCaipAddress=(o=e==null?void 0:e.accountState)==null?void 0:o.caipAddress,le.activeCaipNetwork=t,Ne.setItem(Re.ACTIVE_CAIP_NETWORK_ID,t==null?void 0:t.caipNetworkId),en.set({activeChain:i,selectedNetworkId:t==null?void 0:t.caipNetworkId}))},setActiveCaipNetwork(i){var r,o,n;if(!i)return;const e=le.chains.get(i.chainNamespace);le.activeChain=i.chainNamespace,le.activeCaipNetwork=i,(r=e==null?void 0:e.accountState)!=null&&r.address?le.activeCaipAddress=`${i.chainNamespace}:${i.id}:${(o=e==null?void 0:e.accountState)==null?void 0:o.address}`:le.activeCaipAddress=void 0,e&&R.replaceState(e.accountState),en.set({activeChain:le.activeChain,selectedNetworkId:(n=le.activeCaipNetwork)==null?void 0:n.caipNetworkId}),Ne.setItem(Re.ACTIVE_CAIP_NETWORK_ID,i.caipNetworkId),this.checkIfSupportedNetwork(i.chainNamespace)||this.showUnsupportedChainUI()},addCaipNetwork(i){var t;if(!i)return;const e=le.chains.get(i.chainNamespace);e&&((t=e==null?void 0:e.caipNetworks)==null||t.push(i))},async switchActiveNetwork(i){var o;const e=m.state.chains.get(m.state.activeChain),t=!((o=e==null?void 0:e.caipNetworks)!=null&&o.some(n=>{var a;return n.id===((a=le.activeCaipNetwork)==null?void 0:a.id)})),r=this.getNetworkControllerClient(i.chainNamespace);r&&await r.switchCaipNetwork(i),t&&S.goBack(),this.setActiveCaipNetwork(i),i&&z.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:i.caipNetworkId}})},setActiveConnector(i){i&&(le.activeConnector=$t(i))},getNetworkControllerClient(i){const e=i||le.activeChain,t=le.chains.get(e);if(!t)throw new Error("Chain adapter not found");if(!t.networkControllerClient)throw new Error("NetworkController client not set");return t.networkControllerClient},getConnectionControllerClient(i){const e=i||le.activeChain;if(!e)throw new Error("Chain is required to get connection controller client");const t=le.chains.get(e);if(!(t!=null&&t.connectionControllerClient))throw new Error("ConnectionController client not set");return t.connectionControllerClient},getAccountProp(i,e){var o;let t=le.activeChain;if(e&&(t=e),!t)return;const r=(o=le.chains.get(t))==null?void 0:o.accountState;if(r)return r[i]},getNetworkProp(i,e){var r;const t=(r=le.chains.get(e))==null?void 0:r.networkState;if(t)return t[i]},getRequestedCaipNetworks(i){const e=le.chains.get(i),{approvedCaipNetworkIds:t=[],requestedCaipNetworks:r=[]}=(e==null?void 0:e.networkState)||{};return M.sortRequestedNetworks(t,r)},getAllRequestedCaipNetworks(){const i=[];return le.chains.forEach(e=>{const t=this.getRequestedCaipNetworks(e.namespace);i.push(...t)}),i},setRequestedCaipNetworks(i,e){this.setAdapterNetworkState(e,{requestedCaipNetworks:i})},getAllApprovedCaipNetworkIds(){const i=[];return le.chains.forEach(e=>{const t=this.getApprovedCaipNetworkIds(e.namespace);i.push(...t)}),i},getActiveCaipNetwork(){return le.activeCaipNetwork},getActiveCaipAddress(){return le.activeCaipAddress},getApprovedCaipNetworkIds(i){var r;const e=le.chains.get(i);return((r=e==null?void 0:e.networkState)==null?void 0:r.approvedCaipNetworkIds)||[]},async setApprovedCaipNetworksData(i){const e=this.getNetworkControllerClient(),t=await(e==null?void 0:e.getApprovedCaipNetworksData());this.setAdapterNetworkState(i,{approvedCaipNetworkIds:t==null?void 0:t.approvedCaipNetworkIds,supportsAllNetworks:t==null?void 0:t.supportsAllNetworks})},checkIfSupportedNetwork(i){const e=this.state.activeCaipNetwork,t=this.getRequestedCaipNetworks(i);return t.length?t==null?void 0:t.some(r=>r.id===(e==null?void 0:e.id)):!0},checkIfSupportedChainId(i){if(!this.state.activeChain)return!0;const e=this.getRequestedCaipNetworks(this.state.activeChain);return e==null?void 0:e.some(t=>t.id===i)},setSmartAccountEnabledNetworks(i,e){this.setAdapterNetworkState(e,{smartAccountEnabledNetworks:i})},checkIfSmartAccountEnabled(){var r;const i=In.caipNetworkIdToNumber((r=le.activeCaipNetwork)==null?void 0:r.caipNetworkId),e=this.state.activeChain;if(!e||!i)return!1;const t=this.getNetworkProp("smartAccountEnabledNetworks",e);return!!(t!=null&&t.includes(Number(i)))},getActiveNetworkTokenAddress(){var r,o;const i=((r=this.state.activeCaipNetwork)==null?void 0:r.chainNamespace)||"eip155",e=((o=this.state.activeCaipNetwork)==null?void 0:o.id)||1,t=me.NATIVE_TOKEN_ADDRESS[i];return`${i}:${e}:${t}`},showUnsupportedChainUI(){setTimeout(()=>{te.open({view:"UnsupportedChain"})},300)},checkIfNamesSupported(){const i=le.activeCaipNetwork;return!!(i!=null&&i.chainNamespace&&me.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(i.chainNamespace))},resetNetwork(i){this.setAdapterNetworkState(i,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(i){const e=i;if(!e)throw new Error("Chain is required to set account prop");this.state.activeCaipAddress=void 0,this.setChainAccountData(e,$t({smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,provider:void 0}))}},de={setWalletConnectDeepLink({name:i,href:e}){try{Ne.setItem(Re.DEEPLINK_CHOICE,JSON.stringify({href:e,name:i}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const i=Ne.getItem(Re.DEEPLINK_CHOICE);if(i)return JSON.parse(i)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{Ne.removeItem(Re.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setAppKitRecent(i){try{const e=de.getRecentWallets();e.find(r=>r.id===i.id)||(e.unshift(i),e.length>2&&e.pop(),Ne.setItem(Re.RECENT_WALLETS,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const i=Ne.getItem(Re.RECENT_WALLETS);return i?JSON.parse(i):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnector(i){try{Ne.setItem(Re.CONNECTED_CONNECTOR,i)}catch{console.info("Unable to set Connected Connector")}},setConnectedNamespace(i){try{Ne.setItem(Re.CONNECTED_NAMESPACE,i)}catch{console.info("Unable to set Connected Namespace")}},getConnectedConnector(){try{return Ne.getItem(Re.CONNECTED_CONNECTOR)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(i){try{Ne.setItem(Re.CONNECTED_SOCIAL,i)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return Ne.getItem(Re.CONNECTED_SOCIAL)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return Ne.getItem(Re.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get Connected Social Username")}},getStoredActiveCaipNetwork(){const i=Ne.getItem(Re.ACTIVE_CAIP_NETWORK_ID),e=m.getAllRequestedCaipNetworks();return e==null?void 0:e.find(r=>r.caipNetworkId===i)},setConnectionStatus(i){try{Ne.setItem(Re.CONNECTION_STATUS,i)}catch{console.info("Unable to set Connection Status")}},getConnectionStatus(){try{return Ne.getItem(Re.CONNECTION_STATUS)}catch{return}}},It=Ie({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),$e={state:It,subscribeNetworkImages(i){return qe(It.networkImages,()=>i(It.networkImages))},subscribeKey(i,e){return Ke(It,i,e)},subscribe(i){return qe(It,()=>i(It))},setWalletImage(i,e){It.walletImages[i]=e},setNetworkImage(i,e){It.networkImages[i]=e},setChainImage(i,e){It.chainImages[i]=e},setConnectorImage(i,e){It.connectorImages[i]=e},setTokenImage(i,e){It.tokenImages[i]=e},setCurrencyImage(i,e){It.currencyImages[i]=e}},L1=M.getApiUrl(),Qe=new Ka({baseUrl:L1,clientId:null}),D1="40",al="4",U1=20,Ve=Ie({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),ne={state:Ve,subscribeKey(i,e){return Ke(Ve,i,e)},_getSdkProperties(){const{projectId:i,sdkType:e,sdkVersion:t}=U.state;return{projectId:i,st:e||"appkit",sv:t||"html-wagmi-4.2.2"}},_filterOutExtensions(i){return U.state.isUniversalProvider?i.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):i},async _fetchWalletImage(i){const e=`${Qe.baseUrl}/getWalletImage/${i}`,t=await Qe.getBlob({path:e,params:ne._getSdkProperties()});$e.setWalletImage(i,URL.createObjectURL(t))},async _fetchNetworkImage(i){const e=`${Qe.baseUrl}/public/getAssetImage/${i}`,t=await Qe.getBlob({path:e,params:ne._getSdkProperties()});$e.setNetworkImage(i,URL.createObjectURL(t))},async _fetchConnectorImage(i){const e=`${Qe.baseUrl}/public/getAssetImage/${i}`,t=await Qe.getBlob({path:e,params:ne._getSdkProperties()});$e.setConnectorImage(i,URL.createObjectURL(t))},async _fetchCurrencyImage(i){const e=`${Qe.baseUrl}/public/getCurrencyImage/${i}`,t=await Qe.getBlob({path:e,params:ne._getSdkProperties()});$e.setCurrencyImage(i,URL.createObjectURL(t))},async _fetchTokenImage(i){const e=`${Qe.baseUrl}/public/getTokenImage/${i}`,t=await Qe.getBlob({path:e,params:ne._getSdkProperties()});$e.setTokenImage(i,URL.createObjectURL(t))},async fetchNetworkImages(){const i=m.getAllRequestedCaipNetworks(),e=i==null?void 0:i.map(({assets:t})=>t==null?void 0:t.imageId).filter(Boolean);e&&await Promise.allSettled(e.map(t=>ne._fetchNetworkImage(t)))},async fetchConnectorImages(){const{connectors:i}=Y.state,e=i.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(e.map(t=>ne._fetchConnectorImage(t)))},async fetchCurrencyImages(i=[]){await Promise.allSettled(i.map(e=>ne._fetchCurrencyImage(e)))},async fetchTokenImages(i=[]){await Promise.allSettled(i.map(e=>ne._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:i}=U.state;if(i!=null&&i.length){const{data:e}=await Qe.get({path:"/getWallets",params:{...ne._getSdkProperties(),page:"1",entries:i!=null&&i.length?String(i.length):al,include:i==null?void 0:i.join(",")}});e.sort((r,o)=>i.indexOf(r.id)-i.indexOf(o.id));const t=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(t.map(r=>ne._fetchWalletImage(r))),Ve.featured=e}},async fetchRecommendedWallets(){var i;try{const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=U.state,o=[...t??[],...r??[]].filter(Boolean),{data:n,count:a}=await Qe.get({path:"/getWallets",params:{...ne._getSdkProperties(),page:"1",chains:(i=m.state.activeCaipNetwork)==null?void 0:i.caipNetworkId,entries:al,include:e==null?void 0:e.join(","),exclude:o==null?void 0:o.join(",")}}),s=de.getRecentWallets(),p=n.map(w=>w.image_id).filter(Boolean),d=s.map(w=>w.image_id).filter(Boolean);await Promise.allSettled([...p,...d].map(w=>ne._fetchWalletImage(w))),Ve.recommended=n,Ve.count=a??0}catch{}},async fetchWallets({page:i}){var p;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=U.state,o=[...Ve.recommended.map(({id:d})=>d),...t??[],...r??[]].filter(Boolean),{data:n,count:a}=await Qe.get({path:"/getWallets",params:{...ne._getSdkProperties(),page:String(i),entries:D1,chains:(p=m.state.activeCaipNetwork)==null?void 0:p.caipNetworkId,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),s=n.slice(0,U1).map(d=>d.image_id).filter(Boolean);await Promise.allSettled(s.map(d=>ne._fetchWalletImage(d))),Ve.wallets=M.uniqueBy([...Ve.wallets,...ne._filterOutExtensions(n)],"id"),Ve.count=a>Ve.count?a:Ve.count,Ve.page=i},async searchWalletByIds({ids:i}){var t;const{data:e}=await Qe.get({path:"/getWallets",params:{...ne._getSdkProperties(),page:"1",entries:String(i.length),chains:(t=m.state.activeCaipNetwork)==null?void 0:t.caipNetworkId,include:i==null?void 0:i.join(",")}});e&&e.forEach(r=>{r!=null&&r.rdns&&Ve.excludedRDNS.push(r.rdns)})},async searchWallet({search:i,badge:e}){var a;const{includeWalletIds:t,excludeWalletIds:r}=U.state;Ve.search=[];const{data:o}=await Qe.get({path:"/getWallets",params:{...ne._getSdkProperties(),page:"1",entries:"100",search:i==null?void 0:i.trim(),badge_type:e,chains:(a=m.state.activeCaipNetwork)==null?void 0:a.caipNetworkId,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}});z.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:e??"",search:i??""}});const n=o.map(s=>s.image_id).filter(Boolean);await Promise.allSettled([...n.map(s=>ne._fetchWalletImage(s)),M.wait(300)]),Ve.search=ne._filterOutExtensions(o)},async reFetchWallets(){Ve.page=1,Ve.wallets=[],await ne.fetchFeaturedWallets(),await ne.fetchRecommendedWallets()},prefetch(){var e;const i=[ne.fetchFeaturedWallets(),ne.fetchRecommendedWallets(),ne.fetchNetworkImages(),ne.fetchConnectorImages()];(e=U.state.features)!=null&&e.analytics&&i.push(ne.fetchAnalyticsConfig()),Ve.prefetchPromise=Promise.race([Promise.allSettled(i)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:i}=await Qe.get({path:"/getAnalyticsConfig",params:ne._getSdkProperties()});U.setFeatures({analytics:i})}},ri=Ie({loading:!1,open:!1,shake:!1}),te={state:ri,subscribe(i){return qe(ri,()=>i(ri))},subscribeKey(i,e){return Ke(ri,i,e)},async open(i){await ne.state.prefetchPromise;const e=m.state.activeCaipAddress,t=m.state.noAdapters;i!=null&&i.view?S.reset(i.view):e?S.reset("Account"):t&&!M.isMobile()?S.reset("ConnectingWalletConnect"):S.reset("Connect"),ri.open=!0,en.set({open:!0}),z.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!e}})},close(){const i=!!m.state.activeCaipAddress;ri.open=!1,en.set({open:!1}),z.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:i}})},setLoading(i){ri.loading=i,en.set({loading:i})},shake(){ri.shake||(ri.shake=!0,setTimeout(()=>{ri.shake=!1},500))}},ao={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},Us={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},W1={providers:tu,selectedProvider:null,error:null,purchaseCurrency:ao,paymentCurrency:Us,purchaseCurrencies:[ao],paymentCurrencies:[],quotesLoading:!1},ve=Ie(W1),be={state:ve,subscribe(i){return qe(ve,()=>i(ve))},subscribeKey(i,e){return Ke(ve,i,e)},setSelectedProvider(i){if(i&&i.name==="meld"){const e=r0,t=m.state.activeChain===Ce.CHAIN.SOLANA?"SOL":"USDC",r=R.state.address??"",o=new URL(i.url);o.searchParams.append("publicKey",e),o.searchParams.append("destinationCurrencyCode",t),o.searchParams.append("walletAddress",r),i.url=o.toString()}ve.selectedProvider=i},setPurchaseCurrency(i){ve.purchaseCurrency=i},setPaymentCurrency(i){ve.paymentCurrency=i},setPurchaseAmount(i){this.state.purchaseAmount=i},setPaymentAmount(i){this.state.paymentAmount=i},async getAvailableCurrencies(){const i=await Se.getOnrampOptions();ve.purchaseCurrencies=i.purchaseCurrencies,ve.paymentCurrencies=i.paymentCurrencies,ve.paymentCurrency=i.paymentCurrencies[0]||Us,ve.purchaseCurrency=i.purchaseCurrencies[0]||ao,await ne.fetchCurrencyImages(i.paymentCurrencies.map(e=>e.id)),await ne.fetchTokenImages(i.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var i,e;ve.quotesLoading=!0;try{const t=await Se.getOnrampQuote({purchaseCurrency:ve.purchaseCurrency,paymentCurrency:ve.paymentCurrency,amount:((i=ve.paymentAmount)==null?void 0:i.toString())||"0",network:(e=ve.purchaseCurrency)==null?void 0:e.symbol});return ve.quotesLoading=!1,ve.purchaseAmount=Number(t.purchaseAmount.amount),t}catch(t){return ve.error=t.message,ve.quotesLoading=!1,null}finally{ve.quotesLoading=!1}},resetState(){ve.providers=tu,ve.selectedProvider=null,ve.error=null,ve.purchaseCurrency=ao,ve.paymentCurrency=Us,ve.purchaseCurrencies=[ao],ve.paymentCurrencies=[],ve.paymentAmount=void 0,ve.purchaseAmount=void 0,ve.quotesLoading=!1}},He=Ie({loading:!1}),ge={state:He,subscribe(i){return qe(He,()=>i(He))},subscribeKey(i,e){return Ke(He,i,e)},setToken(i){i&&(He.token=$t(i))},setTokenAmount(i){He.sendTokenAmount=i},setReceiverAddress(i){He.receiverAddress=i},setReceiverProfileImageUrl(i){He.receiverProfileImageUrl=i},setReceiverProfileName(i){He.receiverProfileName=i},setGasPrice(i){He.gasPrice=i},setGasPriceInUsd(i){He.gasPriceInUSD=i},setLoading(i){He.loading=i},sendToken(){var i;switch((i=m.state.activeCaipNetwork)==null?void 0:i.chainNamespace){case"eip155":this.sendEvmToken();return;case"solana":this.sendSolanaToken();return;default:throw new Error("Unsupported chain")}},sendEvmToken(){var i,e,t,r,o;(i=this.state.token)!=null&&i.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(z.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:((e=m.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&((t=this.state.token)!=null&&t.quantity.decimals)&&(z.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT,token:(r=this.state.token)==null?void 0:r.symbol,amount:this.state.sendTokenAmount,network:((o=m.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async sendNativeToken(i){var n,a,s,p;S.pushTransactionStack({view:"Account",goBack:!1});const e=i.receiverAddress,t=R.state.address,r=ee.parseUnits(i.sendTokenAmount.toString(),Number(i.decimals)),o="0x";try{await ee.sendTransaction({chainNamespace:"eip155",to:e,address:t,data:o,value:r??BigInt(0),gasPrice:i.gasPrice}),q.showSuccess("Transaction started"),z.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT,token:((n=this.state.token)==null?void 0:n.symbol)||"",amount:i.sendTokenAmount,network:((a=m.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||""}}),this.resetSend()}catch{z.sendEvent({type:"track",event:"SEND_ERROR",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT,token:((s=this.state.token)==null?void 0:s.symbol)||"",amount:i.sendTokenAmount,network:((p=m.state.activeCaipNetwork)==null?void 0:p.caipNetworkId)||""}}),q.showError("Something went wrong")}},async sendERC20Token(i){S.pushTransactionStack({view:"Account",goBack:!1});const e=ee.parseUnits(i.sendTokenAmount.toString(),Number(i.decimals));try{if(R.state.address&&i.sendTokenAmount&&i.receiverAddress&&i.tokenAddress){const t=M.getPlainAddress(i.tokenAddress);await ee.writeContract({fromAddress:R.state.address,tokenAddress:t,receiverAddress:i.receiverAddress,tokenAmount:e??BigInt(0),method:"transfer",abi:Yd.getERC20Abi(t)}),q.showSuccess("Transaction started"),this.resetSend()}}catch{q.showError("Something went wrong")}},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){q.showError("Please enter a valid amount and receiver address");return}S.pushTransactionStack({view:"Account",goBack:!1}),ee.sendTransaction({chainNamespace:"solana",to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),R.fetchTokenBalance()}).catch(i=>{q.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send solana transaction",i)})},resetSend(){He.token=void 0,He.sendTokenAmount=void 0,He.receiverAddress=void 0,He.receiverProfileImageUrl=void 0,He.receiverProfileName=void 0,He.loading=!1}},Bt=Ie({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),gt={state:Bt,subscribe(i){return qe(Bt,()=>i(Bt))},subscribeKey(i,e){return Ke(Bt,i,e)},showTooltip({message:i,triggerRect:e,variant:t}){Bt.open=!0,Bt.message=i,Bt.triggerRect=e,Bt.variant=t},hide(){Bt.open=!1,Bt.message="",Bt.triggerRect={width:0,height:0,top:0,left:0}}},sl=2147483648,M1={convertEVMChainIdToCoinType(i){if(i>=sl)throw new Error("Invalid chainId");return(sl|i)>>>0}},Rt=Ie({suggestions:[],loading:!1}),oi={state:Rt,subscribe(i){return qe(Rt,()=>i(Rt))},subscribeKey(i,e){return Ke(Rt,i,e)},async resolveName(i){var e,t;try{return await Se.lookupEnsName(i)}catch(r){const o=r;throw new Error(((t=(e=o==null?void 0:o.reasons)==null?void 0:e[0])==null?void 0:t.description)||"Error resolving name")}},async isNameRegistered(i){try{return await Se.lookupEnsName(i),!0}catch{return!1}},async getSuggestions(i){try{Rt.loading=!0,Rt.suggestions=[];const e=await Se.getEnsNameSuggestions(i);return Rt.suggestions=e.suggestions.map(t=>({...t,name:t.name}))||[],Rt.suggestions}catch(e){const t=this.parseEnsApiError(e,"Error fetching name suggestions");throw new Error(t)}finally{Rt.loading=!1}},async getNamesForAddress(i){try{return m.state.activeCaipNetwork?await Se.reverseLookupEnsName({address:i}):[]}catch(e){const t=this.parseEnsApiError(e,"Error fetching names for address");throw new Error(t)}},async registerName(i){const e=m.state.activeCaipNetwork;if(!e)throw new Error("Network not found");const t=R.state.address,r=Y.getAuthConnector();if(!t||!r)throw new Error("Address or auth connector not found");Rt.loading=!0;try{const o=JSON.stringify({name:i,attributes:{},timestamp:Math.floor(Date.now()/1e3)});S.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){Rt.loading=!1}});const n=await ee.signMessage(o),a=e.id;if(!a)throw new Error("Network not found");const s=M1.convertEVMChainIdToCoinType(Number(a));await Se.registerEnsName({coinType:s,address:t,signature:n,message:o}),R.setProfileName(i,e.chainNamespace),S.replace("RegisterAccountNameSuccess")}catch(o){const n=this.parseEnsApiError(o,`Error registering name ${i}`);throw S.replace("RegisterAccountName"),new Error(n)}finally{Rt.loading=!1}},validateName(i){return/^[a-zA-Z0-9-]{4,}$/u.test(i)},parseEnsApiError(i,e){var r,o;const t=i;return((o=(r=t==null?void 0:t.reasons)==null?void 0:r[0])==null?void 0:o.description)||e}},Ki=Ie({message:"",variant:"info",open:!1}),$n={state:Ki,subscribeKey(i,e){return Ke(Ki,i,e)},open(i,e){const{debug:t}=U.state,{shortMessage:r,longMessage:o}=i;t&&(Ki.message=r,Ki.variant=e,Ki.open=!0),o&&console.error(typeof o=="function"?o():o)},close(){Ki.open=!1,Ki.message="",Ki.variant="info"}},B1={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:""},he={async fetchWalletImage(i){if(i)return await ne._fetchWalletImage(i),this.getWalletImageById(i)},getWalletImageById(i){if(i)return $e.state.walletImages[i]},getWalletImage(i){if(i!=null&&i.image_url)return i==null?void 0:i.image_url;if(i!=null&&i.image_id)return $e.state.walletImages[i.image_id]},getNetworkImage(i){var e,t,r;if((e=i==null?void 0:i.assets)!=null&&e.imageUrl)return(t=i==null?void 0:i.assets)==null?void 0:t.imageUrl;if((r=i==null?void 0:i.assets)!=null&&r.imageId)return $e.state.networkImages[i.assets.imageId]},getNetworkImageById(i){if(i)return $e.state.networkImages[i]},getConnectorImage(i){if(i!=null&&i.imageUrl)return i.imageUrl;if(i!=null&&i.imageId)return $e.state.connectorImages[i.imageId]},getChainImage(i){return $e.state.networkImages[B1[i]]}},jt={getSIWX(){return U.state.siwx},async initializeIfEnabled(){var n;const i=U.state.siwx,e=m.getActiveCaipAddress();if(!(i&&e))return;const[t,r,o]=e.split(":");if(m.checkIfSupportedNetwork(t))try{if((await i.getSessions(`${t}:${r}`,o)).length)return;await te.open({view:"SIWXSignMessage"})}catch(a){console.error("SIWXUtil:initializeIfEnabled",a),z.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties()}),await((n=ee._getClient())==null?void 0:n.disconnect().catch(console.error)),S.reset("Connect"),q.showError("A problem occurred while trying initialize authentication")}},async requestSignMessage(){const i=U.state.siwx,e=M.getPlainAddress(m.getActiveCaipAddress()),t=m.getActiveCaipNetwork(),r=ee._getClient();if(!i)throw new Error("SIWX is not enabled");if(!e)throw new Error("No ActiveCaipAddress found");if(!t)throw new Error("No ActiveCaipNetwork or client found");if(!r)throw new Error("No ConnectionController client found");try{const o=await i.createMessage({chainId:t.caipNetworkId,accountAddress:e}),n=o.toString();de.getConnectedConnector()==="ID_AUTH"&&S.pushTransactionStack({view:null,goBack:!1,replace:!0});const a=await r.signMessage(n);await i.addSession({data:o,message:n,signature:a}),te.close(),z.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(o){const n=this.getSIWXEventProperties();(!te.state.open||S.state.view==="ApproveTransaction")&&await te.open({view:"SIWXSignMessage"}),n.isSmartAccount?q.showError("This application might not support Smart Accounts"):q.showError("Signature declined"),z.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:n}),console.error("SWIXUtil:requestSignMessage",o)}},async cancelSignMessage(){try{await ee.disconnect(),S.reset("Connect"),z.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(i){console.error("SIWXUtil:cancelSignMessage",i)}},async getSessions(){const i=U.state.siwx,e=M.getPlainAddress(m.getActiveCaipAddress()),t=m.getActiveCaipNetwork();return i&&e&&t?i.getSessions(t.caipNetworkId,e):[]},async isSIWXCloseDisabled(){if(this.getSIWX()){const e=S.state.view==="ApproveTransaction",t=S.state.view==="SIWXSignMessage";if(e||t)return(await this.getSessions()).length===0}return!1},async universalProviderAuthenticate({universalProvider:i,chains:e,methods:t}){var s,p;const r=jt.getSIWX(),o=new Set(e.map(d=>d.split(":")[0]));if(!r||o.size!==1)return!1;const n=await r.createMessage({chainId:((s=m.getActiveCaipNetwork())==null?void 0:s.caipNetworkId)||"",accountAddress:""}),a=await i.authenticate({nonce:n.nonce,domain:n.domain,uri:n.uri,exp:n.expirationTime,iat:n.issuedAt,nbf:n.notBefore,requestId:n.requestId,version:n.version,resources:n.resources,statement:n.statement,chainId:n.chainId,methods:t,chains:e});if((p=a==null?void 0:a.auths)!=null&&p.length){const d=a.auths.map(w=>{const C=i.client.formatAuthMessage({request:w.p,iss:w.p.iss});return{data:{...w.p,accountAddress:w.p.iss.split(":").slice(-1).join(""),chainId:w.p.iss.split(":").slice(2,4).join(":"),uri:w.p.aud,version:w.p.version||n.version,expirationTime:w.p.exp,issuedAt:w.p.iat,notBefore:w.p.nbf},message:C,signature:w.s.s,cacao:w}});try{await r.setSessions(d),z.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:jt.getSIWXEventProperties()})}catch(w){throw console.error("SIWX:universalProviderAuth - failed to set sessions",w),z.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:jt.getSIWXEventProperties()}),await i.disconnect().catch(console.error),w}}return!0},getSIWXEventProperties(){var i;return{network:((i=m.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)||"",isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}},oe={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",WALLET_STANDARD_CONNECTOR_ID:"announced",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",AUTH_CONNECTOR_ID:"ID_AUTH",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"ID_AUTH"},Qi={ConnectorExplorerIds:{[oe.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[oe.COINBASE_SDK_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[oe.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[oe.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[oe.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[oe.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[oe.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[oe.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[oe.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[oe.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[oe.INJECTED_CONNECTOR_ID]:"Browser Wallet",[oe.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[oe.COINBASE_CONNECTOR_ID]:"Coinbase",[oe.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[oe.LEDGER_CONNECTOR_ID]:"Ledger",[oe.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[oe.INJECTED_CONNECTOR_ID]:"INJECTED",[oe.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[oe.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[oe.AUTH_CONNECTOR_ID]:"AUTH"}},Ws={ALERT_ERRORS:{SWITCH_NETWORK_NOT_FOUND:{shortMessage:"Network Not Found",longMessage:"Network not found - please make sure it is included in 'networks' array in createAppKit function"},SOCIALS_TIMEOUT:{shortMessage:"Invalid App Configuration",longMessage:()=>"There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"},PROJECT_ID_NOT_CONFIGURED:{shortMessage:"Project ID Not Configured",longMessage:"Project ID Not Configured - update configuration on cloud.reown.com"}}},j1="rpc.walletconnect.org";function F1(i,e){const t=new URL("https://rpc.walletconnect.org/v1/");return t.searchParams.set("chainId",i),t.searchParams.set("projectId",e),t.toString()}const cl=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301"],Rn={extendRpcUrlWithProjectId(i,e){let t=!1;try{t=new URL(i).host===j1}catch{t=!1}if(t){const r=new URL(i);return r.searchParams.has("projectId")||r.searchParams.set("projectId",e),r.toString()}return i},isCaipNetwork(i){return"chainNamespace"in i&&"caipNetworkId"in i},getChainNamespace(i){return this.isCaipNetwork(i)?i.chainNamespace:Ce.CHAIN.EVM},getCaipNetworkId(i){return this.isCaipNetwork(i)?i.caipNetworkId:`${Ce.CHAIN.EVM}:${i.id}`},getRpcUrl(i,e,t){var o,n,a;const r=(a=(n=(o=i.rpcUrls)==null?void 0:o.default)==null?void 0:n.http)==null?void 0:a[0];return cl.includes(e)?F1(e,t):r||""},extendCaipNetwork(i,{customNetworkImageUrls:e,projectId:t}){const r=this.getCaipNetworkId(i),o=this.getChainNamespace(i),n=this.getRpcUrl(i,r,t);return{...i,chainNamespace:o,caipNetworkId:r,assets:{imageId:Qi.NetworkImageIds[i.id],imageUrl:e==null?void 0:e[i.id]},rpcUrls:{...i.rpcUrls,default:{http:[n]}}}},extendCaipNetworks(i,{customNetworkImageUrls:e,projectId:t}){return i.map(r=>Rn.extendCaipNetwork(r,{customNetworkImageUrls:e,projectId:t}))},getViemTransport(i){var t;const e=(t=i.rpcUrls.default.http)==null?void 0:t[0];return cl.includes(i.caipNetworkId)?$d([Es(e,{fetchOptions:{headers:{"Content-Type":"text/plain"}}}),Es(e)]):Es(e)}};var ga;(function(i){i.Google="google",i.Github="github",i.Apple="apple",i.Facebook="facebook",i.X="x",i.Discord="discord",i.Farcaster="farcaster"})(ga||(ga={}));class nu{constructor(e){this.availableConnectors=[],this.eventListeners=new Map,e&&this.construct(e)}construct(e){this.caipNetworks=e.networks,this.projectId=e.projectId,this.namespace=e.namespace}get connectors(){return this.availableConnectors}get networks(){return this.caipNetworks||[]}setUniversalProvider(e){this.addConnector({id:oe.WALLET_CONNECT_CONNECTOR_ID,type:"WALLET_CONNECT",name:Qi.ConnectorNamesMap[oe.WALLET_CONNECT_CONNECTOR_ID],provider:e,imageId:Qi.ConnectorImageIds[oe.WALLET_CONNECT_CONNECTOR_ID],chain:this.namespace,chains:[]})}setAuthProvider(e){this.addConnector({id:oe.AUTH_CONNECTOR_ID,type:"AUTH",name:"Auth",provider:e,imageId:Qi.ConnectorImageIds[oe.AUTH_CONNECTOR_ID],chain:this.namespace,chains:[]})}addConnector(...e){var r,o;if(e.some(n=>n.id==="ID_AUTH")){const n=e.find(d=>d.id==="ID_AUTH"),a=wa(U.state),s=Te.getSnapshot().themeMode,p=Te.getSnapshot().themeVariables;(o=(r=n==null?void 0:n.provider)==null?void 0:r.syncDappData)==null||o.call(r,{metadata:a.metadata,sdkVersion:a.sdkVersion,projectId:a.projectId,sdkType:a.sdkType}),n.provider.syncTheme({themeMode:s,themeVariables:p,w3mThemeVariables:ai(p,s)})}const t=new Set;this.availableConnectors=[...e,...this.availableConnectors].filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}setStatus(e,t){R.setStatus(e,t)}on(e,t){var r;this.eventListeners.has(e)||this.eventListeners.set(e,new Set),(r=this.eventListeners.get(e))==null||r.add(t)}off(e,t){const r=this.eventListeners.get(e);r&&r.delete(t)}emit(e,t){const r=this.eventListeners.get(e);r&&r.forEach(o=>o(t))}}const z1="modulepreload",V1=function(i){return"/"+i},ll={},so=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(w=>Promise.resolve(w).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),p=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=a(t.map(d=>{if(d=V1(d),d in ll)return;ll[d]=!0;const w=d.endsWith(".css"),C=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${C}`))return;const b=document.createElement("link");if(b.rel=w?"stylesheet":z1,w||(b.as="script"),b.crossOrigin="",b.href=d,p&&b.setAttribute("nonce",p),document.head.appendChild(b),w)return new Promise((y,T)=>{b.addEventListener("load",y),b.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&n(s.reason);return e().catch(n)})};function ut(i,e,t){const r=i[e.name];if(typeof r=="function")return r;const o=i[t];return typeof o=="function"?o:n=>e(i,n)}const pa="2.16.7",H1=()=>`@wagmi/core@${pa}`;var ru=function(i,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!r:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(i):r?r.value:e.get(i)},ma,ou;let bn=class Ms extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return H1()}constructor(e,t={}){var n;super(),ma.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const r=t.cause instanceof Ms?t.cause.details:(n=t.cause)!=null&&n.message?t.cause.message:t.details,o=t.cause instanceof Ms&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return ru(this,ma,"m",ou).call(this,this,e)}};ma=new WeakSet,ou=function i(e,t){return t!=null&&t(e)?e:e.cause?ru(this,ma,"m",i).call(this,e.cause,t):e};class Pn extends bn{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class Z1 extends bn{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class G1 extends bn{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class q1 extends bn{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class K1 extends bn{constructor({connectionChainId:e,connectorChainId:t}){super(`The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorChainMismatchError"})}}class Y1 extends bn{constructor({connector:e}){super(`Connector "${e.name}" unavailable while reconnecting.`,{details:["During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.","All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.","This error commonly occurs for connectors that asynchronously inject after reconnection has already started."].join(" ")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorUnavailableReconnectingError"})}}async function ul(i,e){var r;let t;if(typeof e.connector=="function"?t=i._internal.connectors.setup(e.connector):t=e.connector,t.uid===i.state.current)throw new Z1;try{i.setState(p=>({...p,status:"connecting"})),t.emitter.emit("message",{type:"connecting"});const{connector:o,...n}=e,a=await t.connect(n),s=a.accounts;return t.emitter.off("connect",i._internal.events.connect),t.emitter.on("change",i._internal.events.change),t.emitter.on("disconnect",i._internal.events.disconnect),await((r=i.storage)==null?void 0:r.setItem("recentConnectorId",t.id)),i.setState(p=>({...p,connections:new Map(p.connections).set(t.uid,{accounts:s,chainId:a.chainId,connector:t}),current:t.uid,status:"connected"})),{accounts:s,chainId:a.chainId}}catch(o){throw i.setState(n=>({...n,status:n.current?"connected":"disconnected"})),o}}async function Ya(i,e={}){let t;if(e.connector){const{connector:d}=e;if(i.state.status==="reconnecting"&&!d.getAccounts&&!d.getChainId)throw new Y1({connector:d});const[w,C]=await Promise.all([d.getAccounts().catch(b=>{if(e.account===null)return[];throw b}),d.getChainId()]);t={accounts:w,chainId:C,connector:d}}else t=i.state.connections.get(i.state.current);if(!t)throw new G1;const r=e.chainId??t.chainId,o=await t.connector.getChainId();if(o!==t.chainId)throw new K1({connectionChainId:t.chainId,connectorChainId:o});const n=t.connector;if(n.getClient)return n.getClient({chainId:r});const a=od(e.account??t.accounts[0]);if(a&&(a.address=ad(a.address)),e.account&&!t.accounts.some(d=>d.toLowerCase()===a.address.toLowerCase()))throw new q1({address:a.address,connector:n});const s=i.chains.find(d=>d.id===r),p=await t.connector.getProvider({chainId:r});return Jl({account:a,chain:s,name:"Connector Client",transport:d=>Pd(p)({...d,retryCount:0})})}async function X1(i,e={}){var o,n;let t;if(e.connector)t=e.connector;else{const{connections:a,current:s}=i.state,p=a.get(s);t=p==null?void 0:p.connector}const r=i.state.connections;t&&(await t.disconnect(),t.emitter.off("change",i._internal.events.change),t.emitter.off("disconnect",i._internal.events.disconnect),t.emitter.on("connect",i._internal.events.connect),r.delete(t.uid)),i.setState(a=>{if(r.size===0)return{...a,connections:new Map,current:null,status:"disconnected"};const s=r.values().next().value;return{...a,connections:new Map(r),current:s.connector.uid}});{const a=i.state.current;if(!a)return;const s=(o=i.state.connections.get(a))==null?void 0:o.connector;if(!s)return;await((n=i.storage)==null?void 0:n.setItem("recentConnectorId",s.id))}}async function Q1(i,e){const{chainId:t,connector:r,...o}=e;let n;e.account?n=e.account:n=(await Ya(i,{account:e.account,chainId:t,connector:r})).account;const a=i.getClient({chainId:t});return ut(a,sd,"estimateGas")({...o,account:n})}function au(i){return typeof i=="number"?i:i==="wei"?0:Math.abs(Od[i])}function ac(i){const e=i.state.current,t=i.state.connections.get(e),r=t==null?void 0:t.accounts,o=r==null?void 0:r[0],n=i.chains.find(s=>s.id===(t==null?void 0:t.chainId)),a=i.state.status;switch(a){case"connected":return{address:o,addresses:r,chain:n,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:a};case"reconnecting":return{address:o,addresses:r,chain:n,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!!o,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:a};case"connecting":return{address:o,addresses:r,chain:n,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:a};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:a}}}async function J1(i,e){const{allowFailure:t=!0,chainId:r,contracts:o,...n}=e,a=i.getClient({chainId:r});return ut(a,cd,"multicall")({allowFailure:t,contracts:o,...n})}function ep(i,e){const{chainId:t,...r}=e,o=i.getClient({chainId:t});return ut(o,ld,"readContract")(r)}async function tp(i,e){var s;const{allowFailure:t=!0,blockNumber:r,blockTag:o,...n}=e,a=e.contracts;try{const p={};for(const[b,y]of a.entries()){const T=y.chainId??i.state.chainId;p[T]||(p[T]=[]),(s=p[T])==null||s.push({contract:y,index:b})}const d=()=>Object.entries(p).map(([b,y])=>J1(i,{...n,allowFailure:t,blockNumber:r,blockTag:o,chainId:Number.parseInt(b),contracts:y.map(({contract:T})=>T)})),w=(await Promise.all(d())).flat(),C=Object.values(p).flatMap(b=>b.map(({index:y})=>y));return w.reduce((b,y,T)=>(b&&(b[C[T]]=y),b),[])}catch(p){if(p instanceof Ld)throw p;const d=()=>a.map(w=>ep(i,{...w,blockNumber:r,blockTag:o}));return t?(await Promise.allSettled(d())).map(w=>w.status==="fulfilled"?{result:w.value,status:"success"}:{error:w.reason,result:void 0,status:"failure"}):await Promise.all(d())}}async function ip(i,e){const{address:t,blockNumber:r,blockTag:o,chainId:n,token:a,unit:s="ether"}=e;if(a)try{return await dl(i,{balanceAddress:t,chainId:n,symbolType:"string",tokenAddress:a})}catch(b){if(b.name==="ContractFunctionExecutionError"){const y=await dl(i,{balanceAddress:t,chainId:n,symbolType:"bytes32",tokenAddress:a}),T=eu(Dd(y.symbol,{dir:"right"}));return{...y,symbol:T}}throw b}const p=i.getClient({chainId:n}),w=await ut(p,ud,"getBalance")(r?{address:t,blockNumber:r}:{address:t,blockTag:o}),C=i.chains.find(b=>b.id===n)??p.chain;return{decimals:C.nativeCurrency.decimals,formatted:ic(w,au(s)),symbol:C.nativeCurrency.symbol,value:w}}async function dl(i,e){const{balanceAddress:t,chainId:r,symbolType:o,tokenAddress:n,unit:a}=e,s={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:o}]}],address:n},[p,d,w]=await tp(i,{allowFailure:!1,contracts:[{...s,functionName:"balanceOf",args:[t],chainId:r},{...s,functionName:"decimals",chainId:r},{...s,functionName:"symbol",chainId:r}]}),C=ic(p??"0",au(a??d));return{decimals:d,formatted:C,symbol:w,value:p}}function lo(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){if(i.constructor!==e.constructor)return!1;let t,r;if(Array.isArray(i)&&Array.isArray(e)){if(t=i.length,t!==e.length)return!1;for(r=t;r--!==0;)if(!lo(i[r],e[r]))return!1;return!0}if(i.valueOf!==Object.prototype.valueOf)return i.valueOf()===e.valueOf();if(i.toString!==Object.prototype.toString)return i.toString()===e.toString();const o=Object.keys(i);if(t=o.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;for(r=t;r--!==0;){const n=o[r];if(n&&!lo(i[n],e[n]))return!1}return!0}return i!==i&&e!==e}let la=[];function Er(i){const e=[...i.state.connections.values()];return i.state.status==="reconnecting"||lo(la,e)?la:(la=e,e)}function np(i,e){const{chainId:t,...r}=e,o=i.getClient({chainId:t});return ut(o,dd,"getEnsAddress")(r)}function rp(i,e){const{chainId:t,...r}=e,o=i.getClient({chainId:t});return ut(o,pd,"getEnsAvatar")(r)}function op(i,e){const{chainId:t,...r}=e,o=i.getClient({chainId:t});return ut(o,hd,"getEnsName")(r)}async function ap(i,e){const{account:t,chainId:r,...o}=e,n=t??ac(i).address,a=i.getClient({chainId:r});return ut(a,fd,"prepareTransactionRequest")({...o,...n?{account:n}:{}})}let Ss=!1;async function su(i,e={}){var d,w;if(Ss)return[];Ss=!0,i.setState(C=>({...C,status:C.current?"reconnecting":"connecting"}));const t=[];if((d=e.connectors)!=null&&d.length)for(const C of e.connectors){let b;typeof C=="function"?b=i._internal.connectors.setup(C):b=C,t.push(b)}else t.push(...i.connectors);let r;try{r=await((w=i.storage)==null?void 0:w.getItem("recentConnectorId"))}catch{}const o={};for(const[,C]of i.state.connections)o[C.connector.id]=1;r&&(o[r]=0);const n=Object.keys(o).length>0?[...t].sort((C,b)=>(o[C.id]??10)-(o[b.id]??10)):t;let a=!1;const s=[],p=[];for(const C of n){const b=await C.getProvider().catch(()=>{});if(!b||p.some(_=>_===b)||!await C.isAuthorized())continue;const T=await C.connect({isReconnecting:!0}).catch(()=>null);T&&(C.emitter.off("connect",i._internal.events.connect),C.emitter.on("change",i._internal.events.change),C.emitter.on("disconnect",i._internal.events.disconnect),i.setState(_=>{const I=new Map(a?_.connections:new Map).set(C.uid,{accounts:T.accounts,chainId:T.chainId,connector:C});return{..._,current:a?_.current:C.uid,connections:I}}),s.push({accounts:T.accounts,chainId:T.chainId,connector:C}),p.push(b),a=!0)}return(i.state.status==="reconnecting"||i.state.status==="connecting")&&(a?i.setState(C=>({...C,status:"connected"})):i.setState(C=>({...C,connections:new Map,current:null,status:"disconnected"}))),Ss=!1,s}async function sp(i,e){const{account:t,chainId:r,connector:o,...n}=e;let a;return typeof t=="object"&&(t==null?void 0:t.type)==="local"?a=i.getClient({chainId:r}):a=await Ya(i,{account:t??void 0,chainId:r,connector:o}),await ut(a,wd,"sendTransaction")({...n,...t?{account:t}:{},chain:r?{id:r}:null,gas:n.gas??void 0})}async function cp(i,e){const{account:t,connector:r,...o}=e;let n;return typeof t=="object"&&t.type==="local"?n=i.getClient():n=await Ya(i,{account:t,connector:r}),ut(n,gd,"signMessage")({...o,...t?{account:t}:{}})}class Xi extends bn{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class lp extends bn{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}async function up(i,e){var a;const{addEthereumChainParameter:t,chainId:r}=e,o=i.state.connections.get(((a=e.connector)==null?void 0:a.uid)??i.state.current);if(o){const s=o.connector;if(!s.switchChain)throw new lp({connector:s});return await s.switchChain({addEthereumChainParameter:t,chainId:r})}const n=i.chains.find(s=>s.id===r);if(!n)throw new Pn;return i.setState(s=>({...s,chainId:r})),n}function dp(i,e){const{onChange:t}=e;return i.subscribe(()=>ac(i),t,{equalityFn(r,o){const{connector:n,...a}=r,{connector:s,...p}=o;return lo(a,p)&&(n==null?void 0:n.id)===(s==null?void 0:s.id)&&(n==null?void 0:n.uid)===(s==null?void 0:s.uid)}})}function pp(i,e){const{onChange:t}=e;return i.subscribe(()=>Er(i),t,{equalityFn:lo})}async function hp(i,e){const{chainId:t,timeout:r=0,...o}=e,n=i.getClient({chainId:t}),s=await ut(n,md,"waitForTransactionReceipt")({...o,timeout:r});if(s.status==="reverted"){const d=await ut(n,vd,"getTransaction")({hash:s.transactionHash}),C=await ut(n,bd,"call")({...d,data:d.input,gasPrice:d.type!=="eip1559"?d.gasPrice:void 0,maxFeePerGas:d.type==="eip1559"?d.maxFeePerGas:void 0,maxPriorityFeePerGas:d.type==="eip1559"?d.maxPriorityFeePerGas:void 0}),b=C!=null&&C.data?eu(`0x${C.data.substring(138)}`):"unknown reason";throw new Error(b)}return{...s,chainId:n.chain.id}}async function fp(i,e){const{account:t,chainId:r,connector:o,...n}=e;let a;return typeof t=="object"&&(t==null?void 0:t.type)==="local"?a=i.getClient({chainId:r}):a=await Ya(i,{account:t??void 0,chainId:r,connector:o}),await ut(a,Cd,"writeContract")({...n,...t?{account:t}:{},chain:r?{id:r}:null})}Xa.type="injected";function Xa(i={}){const{shimDisconnect:e=!0,unstable_shimAsyncInject:t}=i;function r(){const p=i.target;if(typeof p=="function"){const d=p();if(d)return d}return typeof p=="object"?p:typeof p=="string"?{...wp[p]??{id:p,name:`${p[0].toUpperCase()}${p.slice(1)}`,provider:`is${p[0].toUpperCase()}${p.slice(1)}`}}:{id:"injected",name:"Injected",provider(d){return d==null?void 0:d.ethereum}}}let o,n,a,s;return p=>({get icon(){return r().icon},get id(){return r().id},get name(){return r().name},get supportsSimulation(){return!0},type:Xa.type,async setup(){const d=await this.getProvider();d!=null&&d.on&&i.target&&(a||(a=this.onConnect.bind(this),d.on("connect",a)),o||(o=this.onAccountsChanged.bind(this),d.on("accountsChanged",o)))},async connect({chainId:d,isReconnecting:w}={}){var y,T,_,I,B,W;const C=await this.getProvider();if(!C)throw new Xi;let b=[];if(w)b=await this.getAccounts().catch(()=>[]);else if(e)try{b=(I=(_=(T=(y=(await C.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}))[0])==null?void 0:y.caveats)==null?void 0:T[0])==null?void 0:_.value)==null?void 0:I.map(V=>vt(V)),b.length>0&&(b=await this.getAccounts())}catch(D){const V=D;if(V.code===Ge.code)throw new Ge(V);if(V.code===Ts.code)throw V}try{!(b!=null&&b.length)&&!w&&(b=(await C.request({method:"eth_requestAccounts"})).map(L=>vt(L))),a&&(C.removeListener("connect",a),a=void 0),o||(o=this.onAccountsChanged.bind(this),C.on("accountsChanged",o)),n||(n=this.onChainChanged.bind(this),C.on("chainChanged",n)),s||(s=this.onDisconnect.bind(this),C.on("disconnect",s));let D=await this.getChainId();if(d&&D!==d){const V=await this.switchChain({chainId:d}).catch(L=>{if(L.code===Ge.code)throw L;return{id:D}});D=(V==null?void 0:V.id)??D}return e&&await((B=p.storage)==null?void 0:B.removeItem(`${this.id}.disconnected`)),i.target||await((W=p.storage)==null?void 0:W.setItem("injected.connected",!0)),{accounts:b,chainId:D}}catch(D){const V=D;throw V.code===Ge.code?new Ge(V):V.code===Ts.code?new Ts(V):V}},async disconnect(){var w,C;const d=await this.getProvider();if(!d)throw new Xi;n&&(d.removeListener("chainChanged",n),n=void 0),s&&(d.removeListener("disconnect",s),s=void 0),a||(a=this.onConnect.bind(this),d.on("connect",a));try{await Wd(()=>d.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]}),{timeout:100})}catch{}e&&await((w=p.storage)==null?void 0:w.setItem(`${this.id}.disconnected`,!0)),i.target||await((C=p.storage)==null?void 0:C.removeItem("injected.connected"))},async getAccounts(){const d=await this.getProvider();if(!d)throw new Xi;return(await d.request({method:"eth_accounts"})).map(C=>vt(C))},async getChainId(){const d=await this.getProvider();if(!d)throw new Xi;const w=await d.request({method:"eth_chainId"});return Number(w)},async getProvider(){if(typeof window>"u")return;let d;const w=r();return typeof w.provider=="function"?d=w.provider(window):typeof w.provider=="string"?d=ha(window,w.provider):d=w.provider,d&&!d.removeListener&&("off"in d&&typeof d.off=="function"?d.removeListener=d.off:d.removeListener=()=>{}),d},async isAuthorized(){var d,w;try{if(e&&await((d=p.storage)==null?void 0:d.getItem(`${this.id}.disconnected`))||!i.target&&!await((w=p.storage)==null?void 0:w.getItem("injected.connected")))return!1;if(!await this.getProvider()){if(t!==void 0&&t!==!1){const T=async()=>(typeof window<"u"&&window.removeEventListener("ethereum#initialized",T),!!await this.getProvider()),_=typeof t=="number"?t:1e3;if(await Promise.race([...typeof window<"u"?[new Promise(B=>window.addEventListener("ethereum#initialized",()=>B(T()),{once:!0}))]:[],new Promise(B=>setTimeout(()=>B(T()),_))]))return!0}throw new Xi}return!!(await Ud(()=>this.getAccounts())).length}catch{return!1}},async switchChain({addEthereumChainParameter:d,chainId:w}){var T,_,I,B;const C=await this.getProvider();if(!C)throw new Xi;const b=p.chains.find(W=>W.id===w);if(!b)throw new Pi(new Pn);const y=new Promise(W=>{const D=(V=>{"chainId"in V&&V.chainId===w&&(p.emitter.off("change",D),W())});p.emitter.on("change",D)});try{return await Promise.all([C.request({method:"wallet_switchEthereumChain",params:[{chainId:rn(w)}]}).then(async()=>{await this.getChainId()===w&&p.emitter.emit("change",{chainId:w})}),y]),b}catch(W){const D=W;if(D.code===4902||((_=(T=D==null?void 0:D.data)==null?void 0:T.originalError)==null?void 0:_.code)===4902)try{const{default:V,...L}=b.blockExplorers??{};let K;d!=null&&d.blockExplorerUrls?K=d.blockExplorerUrls:V&&(K=[V.url,...Object.values(L).map(X=>X.url)]);let H;(I=d==null?void 0:d.rpcUrls)!=null&&I.length?H=d.rpcUrls:H=[((B=b.rpcUrls.default)==null?void 0:B.http[0])??""];const we={blockExplorerUrls:K,chainId:rn(w),chainName:(d==null?void 0:d.chainName)??b.name,iconUrls:d==null?void 0:d.iconUrls,nativeCurrency:(d==null?void 0:d.nativeCurrency)??b.nativeCurrency,rpcUrls:H};return await Promise.all([C.request({method:"wallet_addEthereumChain",params:[we]}).then(async()=>{if(await this.getChainId()===w)p.emitter.emit("change",{chainId:w});else throw new Ge(new Error("User rejected switch after adding network."))}),y]),b}catch(V){throw new Ge(V)}throw D.code===Ge.code?new Ge(D):new Pi(D)}},async onAccountsChanged(d){var w;if(d.length===0)this.onDisconnect();else if(p.emitter.listenerCount("connect")){const C=(await this.getChainId()).toString();this.onConnect({chainId:C}),e&&await((w=p.storage)==null?void 0:w.removeItem(`${this.id}.disconnected`))}else p.emitter.emit("change",{accounts:d.map(C=>vt(C))})},onChainChanged(d){const w=Number(d);p.emitter.emit("change",{chainId:w})},async onConnect(d){const w=await this.getAccounts();if(w.length===0)return;const C=Number(d.chainId);p.emitter.emit("connect",{accounts:w,chainId:C});const b=await this.getProvider();b&&(a&&(b.removeListener("connect",a),a=void 0),o||(o=this.onAccountsChanged.bind(this),b.on("accountsChanged",o)),n||(n=this.onChainChanged.bind(this),b.on("chainChanged",n)),s||(s=this.onDisconnect.bind(this),b.on("disconnect",s)))},async onDisconnect(d){const w=await this.getProvider();d&&d.code===1013&&w&&(await this.getAccounts()).length||(p.emitter.emit("disconnect"),w&&(n&&(w.removeListener("chainChanged",n),n=void 0),s&&(w.removeListener("disconnect",s),s=void 0),a||(a=this.onConnect.bind(this),w.on("connect",a))))}})}const wp={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider(i){return i!=null&&i.coinbaseWalletExtension?i.coinbaseWalletExtension:ha(i,"isCoinbaseWallet")}},metaMask:{id:"metaMask",name:"MetaMask",provider(i){return ha(i,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;const t=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPhantom","isPortal","isRabby","isTokenPocket","isTokenary","isUniswapWallet","isZerion"];for(const r of t)if(e[r])return!1;return!0})}},phantom:{id:"phantom",name:"Phantom",provider(i){var e,t;return(e=i==null?void 0:i.phantom)!=null&&e.ethereum?(t=i.phantom)==null?void 0:t.ethereum:ha(i,"isPhantom")}}};function ha(i,e){function t(o){return typeof e=="function"?e(o):typeof e=="string"?o[e]:!0}const r=i.ethereum;if(r!=null&&r.providers)return r.providers.find(o=>t(o));if(r&&t(r))return r}function gp(i){if(typeof window>"u")return;const e=t=>i(t.detail);return window.addEventListener("eip6963:announceProvider",e),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",e)}function mp(){const i=new Set;let e=[];const t=()=>gp(o=>{e.some(({info:n})=>n.uuid===o.info.uuid)||(e=[...e,o],i.forEach(n=>n(e,{added:[o]})))});let r=t();return{_listeners(){return i},clear(){i.forEach(o=>o([],{removed:[...e]})),e=[]},destroy(){this.clear(),i.clear(),r==null||r()},findProvider({rdns:o}){return e.find(n=>n.info.rdns===o)},getProviders(){return e},reset(){this.clear(),r==null||r(),r=t()},subscribe(o,{emitImmediately:n}={}){return i.add(o),n&&o(e,{added:e}),()=>i.delete(o)}}}const vp=i=>(e,t,r)=>{const o=r.subscribe;return r.subscribe=(a,s,p)=>{let d=a;if(s){const w=(p==null?void 0:p.equalityFn)||Object.is;let C=a(r.getState());d=b=>{const y=a(b);if(!w(C,y)){const T=C;s(C=y,T)}},p!=null&&p.fireImmediately&&s(C,C)}return o(d)},i(e,t,r)},bp=vp;function Cp(i,e){let t;try{t=i()}catch{return}return{getItem:o=>{var n;const a=p=>p===null?null:JSON.parse(p,void 0),s=(n=t.getItem(o))!=null?n:null;return s instanceof Promise?s.then(a):a(s)},setItem:(o,n)=>t.setItem(o,JSON.stringify(n,void 0)),removeItem:o=>t.removeItem(o)}}const Bs=i=>e=>{try{const t=i(e);return t instanceof Promise?t:{then(r){return Bs(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return Bs(r)(t)}}}},xp=(i,e)=>(t,r,o)=>{let n={storage:Cp(()=>localStorage),partialize:_=>_,version:0,merge:(_,I)=>({...I,..._}),...e},a=!1;const s=new Set,p=new Set;let d=n.storage;if(!d)return i((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`),t(..._)},r,o);const w=()=>{const _=n.partialize({...r()});return d.setItem(n.name,{state:_,version:n.version})},C=o.setState;o.setState=(_,I)=>{C(_,I),w()};const b=i((..._)=>{t(..._),w()},r,o);o.getInitialState=()=>b;let y;const T=()=>{var _,I;if(!d)return;a=!1,s.forEach(W=>{var D;return W((D=r())!=null?D:b)});const B=((I=n.onRehydrateStorage)==null?void 0:I.call(n,(_=r())!=null?_:b))||void 0;return Bs(d.getItem.bind(d))(n.name).then(W=>{if(W)if(typeof W.version=="number"&&W.version!==n.version){if(n.migrate)return[!0,n.migrate(W.state,W.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,W.state];return[!1,void 0]}).then(W=>{var D;const[V,L]=W;if(y=n.merge(L,(D=r())!=null?D:b),t(y,!0),V)return w()}).then(()=>{B==null||B(y,void 0),y=r(),a=!0,p.forEach(W=>W(y))}).catch(W=>{B==null||B(void 0,W)})};return o.persist={setOptions:_=>{n={...n,..._},_.storage&&(d=_.storage)},clearStorage:()=>{d==null||d.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>T(),hasHydrated:()=>a,onHydrate:_=>(s.add(_),()=>{s.delete(_)}),onFinishHydration:_=>(p.add(_),()=>{p.delete(_)})},n.skipHydration||T(),y||b},yp=xp,pl=i=>{let e;const t=new Set,r=(d,w)=>{const C=typeof d=="function"?d(e):d;if(!Object.is(C,e)){const b=e;e=w??(typeof C!="object"||C===null)?C:Object.assign({},e,C),t.forEach(y=>y(e,b))}},o=()=>e,s={setState:r,getState:o,getInitialState:()=>p,subscribe:d=>(t.add(d),()=>t.delete(d))},p=e=i(r,o,s);return s},Is=i=>i?pl(i):pl;var Rs={exports:{}},hl;function Ep(){return hl||(hl=1,(function(i){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function o(p,d,w){this.fn=p,this.context=d,this.once=w||!1}function n(p,d,w,C,b){if(typeof w!="function")throw new TypeError("The listener must be a function");var y=new o(w,C||p,b),T=t?t+d:d;return p._events[T]?p._events[T].fn?p._events[T]=[p._events[T],y]:p._events[T].push(y):(p._events[T]=y,p._eventsCount++),p}function a(p,d){--p._eventsCount===0?p._events=new r:delete p._events[d]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var d=[],w,C;if(this._eventsCount===0)return d;for(C in w=this._events)e.call(w,C)&&d.push(t?C.slice(1):C);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(w)):d},s.prototype.listeners=function(d){var w=t?t+d:d,C=this._events[w];if(!C)return[];if(C.fn)return[C.fn];for(var b=0,y=C.length,T=new Array(y);b<y;b++)T[b]=C[b].fn;return T},s.prototype.listenerCount=function(d){var w=t?t+d:d,C=this._events[w];return C?C.fn?1:C.length:0},s.prototype.emit=function(d,w,C,b,y,T){var _=t?t+d:d;if(!this._events[_])return!1;var I=this._events[_],B=arguments.length,W,D;if(I.fn){switch(I.once&&this.removeListener(d,I.fn,void 0,!0),B){case 1:return I.fn.call(I.context),!0;case 2:return I.fn.call(I.context,w),!0;case 3:return I.fn.call(I.context,w,C),!0;case 4:return I.fn.call(I.context,w,C,b),!0;case 5:return I.fn.call(I.context,w,C,b,y),!0;case 6:return I.fn.call(I.context,w,C,b,y,T),!0}for(D=1,W=new Array(B-1);D<B;D++)W[D-1]=arguments[D];I.fn.apply(I.context,W)}else{var V=I.length,L;for(D=0;D<V;D++)switch(I[D].once&&this.removeListener(d,I[D].fn,void 0,!0),B){case 1:I[D].fn.call(I[D].context);break;case 2:I[D].fn.call(I[D].context,w);break;case 3:I[D].fn.call(I[D].context,w,C);break;case 4:I[D].fn.call(I[D].context,w,C,b);break;default:if(!W)for(L=1,W=new Array(B-1);L<B;L++)W[L-1]=arguments[L];I[D].fn.apply(I[D].context,W)}}return!0},s.prototype.on=function(d,w,C){return n(this,d,w,C,!1)},s.prototype.once=function(d,w,C){return n(this,d,w,C,!0)},s.prototype.removeListener=function(d,w,C,b){var y=t?t+d:d;if(!this._events[y])return this;if(!w)return a(this,y),this;var T=this._events[y];if(T.fn)T.fn===w&&(!b||T.once)&&(!C||T.context===C)&&a(this,y);else{for(var _=0,I=[],B=T.length;_<B;_++)(T[_].fn!==w||b&&!T[_].once||C&&T[_].context!==C)&&I.push(T[_]);I.length?this._events[y]=I.length===1?I[0]:I:a(this,y)}return this},s.prototype.removeAllListeners=function(d){var w;return d?(w=t?t+d:d,this._events[w]&&a(this,w)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,i.exports=s})(Rs)),Rs.exports}var Tp=Ep();const _p=jd(Tp);class kp{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"_emitter",{enumerable:!0,configurable:!0,writable:!0,value:new _p})}on(e,t){this._emitter.on(e,t)}once(e,t){this._emitter.once(e,t)}off(e,t){this._emitter.off(e,t)}emit(e,...t){const r=t[0];this._emitter.emit(e,{uid:this.uid,...r})}listenerCount(e){return this._emitter.listenerCount(e)}}function Ap(i){return new kp(i)}function Sp(i,e){return JSON.parse(i,(t,r)=>{let o=r;return(o==null?void 0:o.__type)==="bigint"&&(o=BigInt(o.value)),(o==null?void 0:o.__type)==="Map"&&(o=new Map(o.value)),(e==null?void 0:e(t,o))??o})}function fl(i,e){return i.slice(0,e).join(".")||"."}function wl(i,e){const{length:t}=i;for(let r=0;r<t;++r)if(i[r]===e)return r+1;return 0}function Ip(i,e){const t=typeof i=="function",r=typeof e=="function",o=[],n=[];return function(s,p){if(typeof p=="object")if(o.length){const d=wl(o,this);d===0?o[o.length]=this:(o.splice(d),n.splice(d)),n[n.length]=s;const w=wl(o,p);if(w!==0)return r?e.call(this,s,p,fl(n,w)):`[ref=${fl(n,w)}]`}else o[0]=p,n[0]=s;return t?i.call(this,s,p):p}}function Rp(i,e,t,r){return JSON.stringify(i,Ip((o,n)=>{let a=n;return typeof a=="bigint"&&(a={__type:"bigint",value:n.toString()}),a instanceof Map&&(a={__type:"Map",value:Array.from(n.entries())}),(e==null?void 0:e(o,a))??a},r),t??void 0)}function Np(i){const{deserialize:e=Sp,key:t="wagmi",serialize:r=Rp,storage:o=cu}=i;function n(a){return a instanceof Promise?a.then(s=>s).catch(()=>null):a}return{...o,key:t,async getItem(a,s){const p=o.getItem(`${t}.${a}`),d=await n(p);return d?e(d)??null:s??null},async setItem(a,s){const p=`${t}.${a}`;s===null?await n(o.removeItem(p)):await n(o.setItem(p,r(s)))},async removeItem(a){await n(o.removeItem(`${t}.${a}`))}}}const cu={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};function $p(){const i=typeof window<"u"&&window.localStorage?window.localStorage:cu;return{getItem(e){return i.getItem(e)},removeItem(e){i.removeItem(e)},setItem(e,t){try{i.setItem(e,t)}catch{}}}}function Pp(i){const{multiInjectedProviderDiscovery:e=!0,storage:t=Np({storage:$p()}),syncConnectedChain:r=!0,ssr:o=!1,...n}=i,a=typeof window<"u"&&e?mp():void 0,s=Is(()=>n.chains),p=Is(()=>{const L=[],K=new Set;for(const H of n.connectors??[]){const we=d(H);if(L.push(we),!o&&we.rdns){const X=typeof we.rdns=="string"?[we.rdns]:we.rdns;for(const ce of X)K.add(ce)}}if(!o&&a){const H=a.getProviders();for(const we of H)K.has(we.info.rdns)||L.push(d(w(we)))}return L});function d(L){var we;const K=Ap(Bd()),H={...L({emitter:K,chains:s.getState(),storage:t,transports:n.transports}),emitter:K,uid:K.uid};return K.on("connect",D),(we=H.setup)==null||we.call(H),H}function w(L){const{info:K}=L,H=L.provider;return Xa({target:{...K,id:K.rdns,provider:H}})}const C=new Map;function b(L={}){const K=L.chainId??I.getState().chainId,H=s.getState().find(X=>X.id===K);if(L.chainId&&!H)throw new Pn;{const X=C.get(I.getState().chainId);if(X&&!H)return X;if(!H)throw new Pn}{const X=C.get(K);if(X)return X}let we;if(n.client)we=n.client({chain:H});else{const X=H.id,ce=s.getState().map(We=>We.id),ae={},Me=Object.entries(n);for(const[We,it]of Me)if(!(We==="chains"||We==="client"||We==="connectors"||We==="transports"))if(typeof it=="object")if(X in it)ae[We]=it[X];else{if(ce.some(St=>St in it))continue;ae[We]=it}else ae[We]=it;we=Jl({...ae,chain:H,batch:ae.batch??{multicall:!0},transport:We=>n.transports[X]({...We,connectors:p})})}return C.set(K,we),we}function y(){return{chainId:s.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let T;const _="0.0.0-canary-";pa.startsWith(_)?T=Number.parseInt(pa.replace(_,"")):T=Number.parseInt(pa.split(".")[0]??"0");const I=Is(bp(t?yp(y,{migrate(L,K){if(K===T)return L;const H=y(),we=B(L,H.chainId);return{...H,chainId:we}},name:"store",partialize(L){return{connections:{__type:"Map",value:Array.from(L.connections.entries()).map(([K,H])=>{const{id:we,name:X,type:ce,uid:ae}=H.connector;return[K,{...H,connector:{id:we,name:X,type:ce,uid:ae}}]})},chainId:L.chainId,current:L.current}},merge(L,K){typeof L=="object"&&L&&"status"in L&&delete L.status;const H=B(L,K.chainId);return{...K,...L,chainId:H}},skipHydration:o,storage:t,version:T}):y));I.setState(y());function B(L,K){return L&&typeof L=="object"&&"chainId"in L&&typeof L.chainId=="number"&&s.getState().some(H=>H.id===L.chainId)?L.chainId:K}r&&I.subscribe(({connections:L,current:K})=>{var H;return K?(H=L.get(K))==null?void 0:H.chainId:void 0},L=>{if(s.getState().some(H=>H.id===L))return I.setState(H=>({...H,chainId:L??H.chainId}))}),a==null||a.subscribe(L=>{const K=new Set,H=new Set;for(const X of p.getState())if(K.add(X.id),X.rdns){const ce=typeof X.rdns=="string"?[X.rdns]:X.rdns;for(const ae of ce)H.add(ae)}const we=[];for(const X of L){if(H.has(X.info.rdns))continue;const ce=d(w(X));K.has(ce.id)||we.push(ce)}t&&!I.persist.hasHydrated()||p.setState(X=>[...X,...we],!0)});function W(L){I.setState(K=>{const H=K.connections.get(L.uid);return H?{...K,connections:new Map(K.connections).set(L.uid,{accounts:L.accounts??H.accounts,chainId:L.chainId??H.chainId,connector:H.connector})}:K})}function D(L){I.getState().status==="connecting"||I.getState().status==="reconnecting"||I.setState(K=>{const H=p.getState().find(we=>we.uid===L.uid);return H?(H.emitter.listenerCount("connect")&&H.emitter.off("connect",W),H.emitter.listenerCount("change")||H.emitter.on("change",W),H.emitter.listenerCount("disconnect")||H.emitter.on("disconnect",V),{...K,connections:new Map(K.connections).set(L.uid,{accounts:L.accounts,chainId:L.chainId,connector:H}),current:L.uid,status:"connected"}):K})}function V(L){I.setState(K=>{const H=K.connections.get(L.uid);if(H){const X=H.connector;X.emitter.listenerCount("change")&&H.connector.emitter.off("change",W),X.emitter.listenerCount("disconnect")&&H.connector.emitter.off("disconnect",V),X.emitter.listenerCount("connect")||H.connector.emitter.on("connect",D)}if(K.connections.delete(L.uid),K.connections.size===0)return{...K,connections:new Map,current:null,status:"disconnected"};const we=K.connections.values().next().value;return{...K,connections:new Map(K.connections),current:we.connector.uid}})}return{get chains(){return s.getState()},get connectors(){return p.getState()},storage:t,getClient:b,get state(){return I.getState()},setState(L){let K;typeof L=="function"?K=L(I.getState()):K=L;const H=y();typeof K!="object"&&(K=H),Object.keys(H).some(X=>!(X in K))&&(K=H),I.setState(K,!0)},subscribe(L,K,H){return I.subscribe(L,K,H?{...H,fireImmediately:H.emitImmediately}:void 0)},_internal:{mipd:a,store:I,ssr:!!o,syncConnectedChain:r,transports:n.transports,chains:{setState(L){const K=typeof L=="function"?L(s.getState()):L;if(K.length!==0)return s.setState(K,!0)},subscribe(L){return s.subscribe(L)}},connectors:{providerDetailToConnector:w,setup:d,setState(L){return p.setState(typeof L=="function"?L(p.getState()):L,!0)},subscribe(L){return p.subscribe(L)}},events:{change:W,connect:D,disconnect:V}}}}function am(i,e){const{initialState:t,reconnectOnMount:r}=e;return t&&!i._internal.store.persist.hasHydrated()&&i.setState({...t,chainId:i.chains.some(o=>o.id===t.chainId)?t.chainId:i.chains[0].id,connections:r?t.connections:new Map,status:r?"reconnecting":"disconnected"}),{async onMount(){i._internal.ssr&&(await i._internal.store.persist.rehydrate(),i._internal.mipd&&i._internal.connectors.setState(o=>{var p;const n=new Set;for(const d of o??[])if(d.rdns){const w=Array.isArray(d.rdns)?d.rdns:[d.rdns];for(const C of w)n.add(C)}const a=[],s=((p=i._internal.mipd)==null?void 0:p.getProviders())??[];for(const d of s){if(n.has(d.info.rdns))continue;const w=i._internal.connectors.providerDetailToConnector(d),C=i._internal.connectors.setup(w);a.push(C)}return[...o,...a]})),r?su(i):i.storage&&i.setState(o=>({...o,connections:new Map}))}}}class _r{constructor(){}static getInstance({projectId:e,chainId:t,onTimeout:r}){return _r.instance||(_r.instance=new N1({projectId:e,chainId:t,onTimeout:r})),_r.instance}}function Op(i){let e=[];function t(r){return In.parseEvmChainId(r)||1}return r=>({id:oe.AUTH_CONNECTOR_ID,name:"AppKit Auth",type:"ID_AUTH",chain:Ce.CHAIN.EVM,async connect(o={}){const n=await this.getProvider();let a=o.chainId;if(o.isReconnecting&&(a=n.getLastUsedChainId(),!a))throw new Error("ChainId not found in provider");const{address:s,chainId:p,accounts:d}=await n.connect({chainId:a});e=(d==null?void 0:d.map(C=>C.address))||[s],await n.getSmartAccountEnabledNetworks();const w=t(p);return{accounts:e,account:s,chainId:w,chain:{id:w,unsuported:!1}}},async disconnect(){await(await this.getProvider()).disconnect()},getAccounts(){return e!=null&&e.length?(r.emitter.emit("change",{accounts:e}),Promise.resolve(e)):Promise.resolve([])},async getProvider(){return this.provider||(this.provider=_r.getInstance({projectId:i.options.projectId,onTimeout:()=>{$n.open(Ws.ALERT_ERRORS.SOCIALS_TIMEOUT,"error")}})),Promise.resolve(this.provider)},async getChainId(){const o=await this.getProvider(),{chainId:n}=await o.getChainId();return t(n)},async isAuthorized(){const o=await this.getProvider();return Promise.resolve(o.getLoginEmailUsed())},async switchChain({chainId:o}){var n;try{const a=r.chains.find(d=>d.id===o);if(!a)throw new Pi(new Error("chain not found on connector."));const p=await(await this.getProvider()).connect({chainId:o});return e=((n=p==null?void 0:p.accounts)==null?void 0:n.map(d=>d.address))||[p.address],r.emitter.emit("change",{chainId:Number(o),accounts:e}),a}catch(a){throw a instanceof Error?new Pi(a):a}},onAccountsChanged(o){o.length===0?this.onDisconnect():r.emitter.emit("change",{accounts:o.map(vt)})},onChainChanged(o){const n=Number(o);r.emitter.emit("change",{chainId:n})},async onDisconnect(o){await(await this.getProvider()).disconnect()}})}const Lp=F`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,Dp=F`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;let co,tn,nn;function lu(i,e){co=document.createElement("style"),tn=document.createElement("style"),nn=document.createElement("style"),co.textContent=kr(i).core.cssText,tn.textContent=kr(i).dark.cssText,nn.textContent=kr(i).light.cssText,document.head.appendChild(co),document.head.appendChild(tn),document.head.appendChild(nn),sc(e)}function sc(i){tn&&nn&&(i==="light"?(tn.removeAttribute("media"),nn.media="enabled"):(nn.removeAttribute("media"),tn.media="enabled"))}function uu(i){co&&tn&&nn&&(co.textContent=kr(i).core.cssText,tn.textContent=kr(i).dark.cssText,nn.textContent=kr(i).light.cssText)}function kr(i){return{core:N`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${Mt(i!=null&&i["--w3m-color-mix-strength"]?`${i["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Mt((i==null?void 0:i["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Mt((i==null?void 0:i["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Mt((i==null?void 0:i["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Mt((i==null?void 0:i["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:N`
      :root {
        --w3m-color-mix: ${Mt((i==null?void 0:i["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Mt(ai(i,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${Mt(ai(i,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:N`
      :root {
        --w3m-color-mix: ${Mt((i==null?void 0:i["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Mt(ai(i,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${Mt(ai(i,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);
      }
    `}}const G=N`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,ue=N`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Lo=N`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;function Up(i,e){const{kind:t,elements:r}=e;return{kind:t,elements:r,finisher(o){customElements.get(i)||customElements.define(i,o)}}}function Wp(i,e){return customElements.get(i)||customElements.define(i,e),e}function E(i){return function(t){return typeof t=="function"?Wp(i,t):Up(i,t)}}const Mp=N`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var Bp=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let va=class extends A{render(){return l`<slot></slot>`}};va.styles=[G,Mp];va=Bp([E("wui-card")],va);const jp=N`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Fp=F`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,zp=F`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Vp=F`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,Hp=F`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,Zp=F`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Gp=F`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,qp=F`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Kp=F`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Yp=F`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Xp=F`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,Qp=F`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Jp=F`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,eh=F`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,th=F`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`,ih=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,nh=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,rh=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,oh=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ah=F`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,sh=F`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,ch=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,lh=F`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,uh=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,dh=F`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,ph=F` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,hh=F`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,fh=F`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,wh=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,gh=F`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,mh=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,vh=F`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,bh=F`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ch=F`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,xh=F`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,yh=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Eh=F`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Th=F`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,_h=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,kh=F`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,Ah=F`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Sh=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Ih=F`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,Rh=F`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,Nh=F`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,$h=F`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ph=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,Oh=F` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,Lh=F`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,Dh=F`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Uh=F`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,Wh=F`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Mh=F`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,Bh=F`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,jh=F`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Fh=F`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,zh=F`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,Vh=F`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,Hh=F`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Zh=F`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,Gh=F`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,qh=F`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Kh=F`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Yh=F`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,Xh=F`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,Qh=F`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Jh=F`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,ef=F`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,tf=F`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,nf=F`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,rf=F`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,of=F`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,af=F`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,gl=F`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`,sf=F`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`,cf=F`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`;var Qa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const lf={add:Fp,allWallets:zp,arrowBottomCircle:Vp,appStore:Hp,apple:Zp,arrowBottom:Gp,arrowLeft:qp,arrowRight:Kp,arrowTop:Yp,bank:Xp,browser:Qp,card:Jp,checkmark:th,checkmarkBold:eh,chevronBottom:ih,chevronLeft:nh,chevronRight:rh,chevronTop:oh,chromeStore:ah,clock:sh,close:ch,compass:uh,coinPlaceholder:lh,copy:dh,cursor:ph,cursorTransparent:hh,desktop:fh,disconnect:wh,discord:gh,etherscan:mh,extension:vh,externalLink:bh,facebook:Ch,farcaster:xh,filters:yh,github:Eh,google:Th,helpCircle:_h,image:kh,id:af,infoCircle:Ah,lightbulb:of,mail:Sh,mobile:Ih,more:Rh,networkPlaceholder:Nh,nftPlaceholder:$h,off:Ph,playStore:Oh,plus:Lh,qrCode:Dh,recycleHorizontal:Uh,refresh:Wh,search:Mh,send:Bh,swapHorizontal:jh,swapHorizontalMedium:zh,swapHorizontalBold:Fh,swapHorizontalRoundedBold:Vh,swapVertical:Hh,telegram:Zh,threeDots:Gh,twitch:qh,twitter:gl,twitterIcon:Kh,verify:Yh,verifyFilled:Xh,wallet:Jh,walletConnect:ef,walletConnectLightBrown:tf,walletConnectBrown:nf,walletPlaceholder:Qh,warningCircle:rf,x:gl,info:sf,exclamationTriangle:cf};let On=class extends A{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,l`${lf[this.name]}`}};On.styles=[G,Lo,jp];Qa([h()],On.prototype,"size",void 0);Qa([h()],On.prototype,"name",void 0);Qa([h()],On.prototype,"color",void 0);On=Qa([E("wui-icon")],On);const uf=N`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Ja=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ln=class extends A{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,l`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Ln.styles=[G,Lo,uf];Ja([h()],Ln.prototype,"src",void 0);Ja([h()],Ln.prototype,"alt",void 0);Ja([h()],Ln.prototype,"size",void 0);Ln=Ja([E("wui-image")],Ln);const df=N`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var pf=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ba=class extends A{render(){return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};ba.styles=[G,df];ba=pf([E("wui-loading-hexagon")],ba);const hf=N`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var cc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ar=class extends A{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,l`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Ar.styles=[G,hf];cc([h()],Ar.prototype,"color",void 0);cc([h()],Ar.prototype,"size",void 0);Ar=cc([E("wui-loading-spinner")],Ar);const ff=N`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var du=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let uo=class extends A{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,o=116+r,n=245+r,a=360+r*1.75;return l`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${n}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};uo.styles=[G,ff];du([h({type:Number})],uo.prototype,"radius",void 0);uo=du([E("wui-loading-thumbnail")],uo);const wf=N`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Do=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let on=class extends A{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,l`<slot></slot>`}};on.styles=[wf];Do([h()],on.prototype,"width",void 0);Do([h()],on.prototype,"height",void 0);Do([h()],on.prototype,"borderRadius",void 0);Do([h()],on.prototype,"variant",void 0);on=Do([E("wui-shimmer")],on);const gf=N`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var Uo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let an=class extends A{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,l`<slot class=${oo(e)}></slot>`}};an.styles=[G,gf];Uo([h()],an.prototype,"variant",void 0);Uo([h()],an.prototype,"color",void 0);Uo([h()],an.prototype,"align",void 0);Uo([h()],an.prototype,"lineClamp",void 0);an=Uo([E("wui-text")],an);const mf=F`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,vf=F`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,bf=F`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,Cf=F`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,xf=F`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,yf=F`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Ef=F`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Tf=F`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,_f=F`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,kf=F`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Af=F`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Sf=F`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,If=F`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Rf=F`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,Nf=F`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,$f=F`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Pf=F`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Of=F`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,Lf=F`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,Df=F`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Uf=F`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Wf=F`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,Mf=N`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`,Bf=F`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `;var lc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const jf={browser:mf,dao:vf,defi:bf,defiAlt:Cf,eth:xf,layers:yf,lock:Ef,login:Tf,network:_f,nft:kf,noun:Af,profile:Sf,system:If,coinbase:Rf,meld:Wf,onrampCard:Of,moonpay:Nf,stripe:$f,paypal:Pf,google:Lf,pencil:Df,lightbulb:Uf,solana:Bf};let Sr=class extends A{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,l`${jf[this.name]}`}};Sr.styles=[G,Mf];lc([h()],Sr.prototype,"name",void 0);lc([h()],Sr.prototype,"size",void 0);Sr=lc([E("wui-visual")],Sr);const re={getSpacingStyles(i,e){if(Array.isArray(i))return i[e]?`var(--wui-spacing-${i[e]})`:void 0;if(typeof i=="string")return`var(--wui-spacing-${i})`},getFormattedDate(i){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(i)},getHostName(i){try{return new URL(i).hostname}catch{return""}},getTruncateString({string:i,charsStart:e,charsEnd:t,truncate:r}){return i.length<=e+t?i:r==="end"?`${i.substring(0,e)}...`:r==="start"?`...${i.substring(i.length-t)}`:`${i.substring(0,Math.floor(e))}...${i.substring(i.length-Math.floor(t))}`},generateAvatarColors(i){const t=i.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(t),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(o==null?void 0:o.replace("px","")),s=`${a}% ${a}% at 65% 40%`,p=[];for(let d=0;d<5;d+=1){const w=this.tintColor(r,.15*d);p.push(`rgb(${w[0]}, ${w[1]}, ${w[2]})`)}return`
    --local-color-1: ${p[0]};
    --local-color-2: ${p[1]};
    --local-color-3: ${p[2]};
    --local-color-4: ${p[3]};
    --local-color-5: ${p[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(i){const e=parseInt(i,16),t=e>>16&255,r=e>>8&255,o=e&255;return[t,r,o]},tintColor(i,e){const[t,r,o]=i,n=Math.round(t+(255-t)*e),a=Math.round(r+(255-r)*e),s=Math.round(o+(255-o)*e);return[n,a,s]},isNumber(i){return{number:/^[0-9]+$/u}.number.test(i)},getColorTheme(i){return i||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(i){const e=i.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(i,e,t){return i.toString().length>=e?Number(i).toFixed(t):i},formatNumberToLocalString(i,e=2){return i===void 0?"0.00":typeof i=="number"?i.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(i).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},Ff=N`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var _t=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let tt=class extends A{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&re.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&re.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&re.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&re.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&re.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&re.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&re.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&re.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};tt.styles=[G,Ff];_t([h()],tt.prototype,"flexDirection",void 0);_t([h()],tt.prototype,"flexWrap",void 0);_t([h()],tt.prototype,"flexBasis",void 0);_t([h()],tt.prototype,"flexGrow",void 0);_t([h()],tt.prototype,"flexShrink",void 0);_t([h()],tt.prototype,"alignItems",void 0);_t([h()],tt.prototype,"justifyContent",void 0);_t([h()],tt.prototype,"columnGap",void 0);_t([h()],tt.prototype,"rowGap",void 0);_t([h()],tt.prototype,"gap",void 0);_t([h()],tt.prototype,"padding",void 0);_t([h()],tt.prototype,"margin",void 0);tt=_t([E("wui-flex")],tt);const zf=N`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Wo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let sn=class extends A{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,l`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",l`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=re.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};sn.styles=[G,zf];Wo([h()],sn.prototype,"imageSrc",void 0);Wo([h()],sn.prototype,"alt",void 0);Wo([h()],sn.prototype,"address",void 0);Wo([h()],sn.prototype,"size",void 0);sn=Wo([E("wui-avatar")],sn);const Vf=N`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var ji=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pt=class extends A{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",r=this.size==="xl",o=t?"12%":"16%",n=t?"xxs":r?"s":"3xl",a=this.background==="gray",s=this.background==="opaque",p=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let d=`var(--wui-color-${this.backgroundColor})`;return p?d=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(d=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${d};
       --local-bg-mix: ${p||a?"100%":o};
       --local-border-radius: var(--wui-border-radius-${n});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,l` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Pt.styles=[G,ue,Vf];ji([h()],Pt.prototype,"size",void 0);ji([h()],Pt.prototype,"backgroundColor",void 0);ji([h()],Pt.prototype,"iconColor",void 0);ji([h()],Pt.prototype,"iconSize",void 0);ji([h()],Pt.prototype,"background",void 0);ji([h({type:Boolean})],Pt.prototype,"border",void 0);ji([h()],Pt.prototype,"borderColor",void 0);ji([h()],Pt.prototype,"icon",void 0);Pt=ji([E("wui-icon-box")],Pt);const Hf=N`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var yi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bt=class extends A{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return l`
      <button
        ?disabled=${this.disabled}
        class=${O(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?re.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return l` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return l`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};bt.styles=[G,ue,Hf];yi([h()],bt.prototype,"networkSrc",void 0);yi([h()],bt.prototype,"avatarSrc",void 0);yi([h()],bt.prototype,"balance",void 0);yi([h({type:Boolean})],bt.prototype,"isUnsupportedChain",void 0);yi([h({type:Boolean})],bt.prototype,"disabled",void 0);yi([h()],bt.prototype,"address",void 0);yi([h()],bt.prototype,"profileName",void 0);yi([h()],bt.prototype,"charsStart",void 0);yi([h()],bt.prototype,"charsEnd",void 0);bt=yi([E("wui-account-button")],bt);const Zf=N`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var ar=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let li=class extends A{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:l`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};li.styles=[G,Zf];ar([h()],li.prototype,"size",void 0);ar([h()],li.prototype,"name",void 0);ar([h()],li.prototype,"imageSrc",void 0);ar([h()],li.prototype,"walletIcon",void 0);ar([h({type:Boolean})],li.prototype,"installed",void 0);ar([h()],li.prototype,"badgeSize",void 0);li=ar([E("wui-wallet-image")],li);const Gf=N`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var pu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Ns=4;let po=class extends A{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Ns;return l`${this.walletImages.slice(0,Ns).map(({src:t,walletName:r})=>l`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${O(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Ns-this.walletImages.length)].map(()=>l` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};po.styles=[G,Gf];pu([h({type:Array})],po.prototype,"walletImages",void 0);po=pu([E("wui-all-wallets-image")],po);const qf=N`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Ei=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const ml={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},Kf={lg:"paragraph-600",md:"small-600"},Yf={lg:"md",md:"md"};let Ct=class extends A{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??Kf[this.size];return l`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=Yf[this.size],t=this.disabled?ml.disabled:ml[this.variant];return l`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return l``}};Ct.styles=[G,ue,qf];Ei([h()],Ct.prototype,"size",void 0);Ei([h({type:Boolean})],Ct.prototype,"disabled",void 0);Ei([h({type:Boolean})],Ct.prototype,"fullWidth",void 0);Ei([h({type:Boolean})],Ct.prototype,"loading",void 0);Ei([h()],Ct.prototype,"variant",void 0);Ei([h({type:Boolean})],Ct.prototype,"hasIconLeft",void 0);Ei([h({type:Boolean})],Ct.prototype,"hasIconRight",void 0);Ei([h()],Ct.prototype,"borderRadius",void 0);Ei([h()],Ct.prototype,"textVariant",void 0);Ct=Ei([E("wui-button")],Ct);const hu=F`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Xf=N`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var fu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ho=class extends A{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${hu}`:l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ho.styles=[G,ue,Xf];fu([h()],ho.prototype,"type",void 0);ho=fu([E("wui-card-select-loader")],ho);const Qf=F`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Jf=F`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,ew=N`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var sr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ui=class extends A{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:Qf,md:hu,lg:Jf},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,l`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ui.styles=[G,ew];sr([h()],ui.prototype,"size",void 0);sr([h()],ui.prototype,"name",void 0);sr([h({type:Object})],ui.prototype,"networkImagesBySize",void 0);sr([h()],ui.prototype,"imageSrc",void 0);sr([h({type:Boolean})],ui.prototype,"selected",void 0);sr([h({type:Boolean})],ui.prototype,"round",void 0);ui=sr([E("wui-network-image")],ui);const tw=N`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var cr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let di=class extends A{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return l`
      <button data-selected=${O(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?l`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${O(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:l`
      <wui-wallet-image
        size="md"
        imageSrc=${O(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};di.styles=[G,ue,tw];cr([h()],di.prototype,"name",void 0);cr([h()],di.prototype,"type",void 0);cr([h()],di.prototype,"imageSrc",void 0);cr([h({type:Boolean})],di.prototype,"disabled",void 0);cr([h({type:Boolean})],di.prototype,"selected",void 0);cr([h({type:Boolean})],di.prototype,"installed",void 0);di=cr([E("wui-card-select")],di);const iw=N`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var Fi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ot=class extends A{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return l`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:re.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?l`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};Ot.styles=[G,ue,iw];Fi([h()],Ot.prototype,"variant",void 0);Fi([h()],Ot.prototype,"imageSrc",void 0);Fi([h()],Ot.prototype,"imageIcon",void 0);Fi([h()],Ot.prototype,"imageIconSize",void 0);Fi([h({type:Boolean})],Ot.prototype,"disabled",void 0);Fi([h()],Ot.prototype,"icon",void 0);Fi([h()],Ot.prototype,"href",void 0);Fi([h()],Ot.prototype,"text",void 0);Ot=Fi([E("wui-chip")],Ot);const nw=N`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var uc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ir=class extends A{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return l`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?l`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Ir.styles=[G,ue,nw];uc([h()],Ir.prototype,"size",void 0);uc([h({type:Boolean})],Ir.prototype,"loading",void 0);Ir=uc([E("wui-connect-button")],Ir);const rw=N`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var es=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Dn=class extends A{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Dn.styles=[G,ue,rw];es([h({type:Boolean})],Dn.prototype,"disabled",void 0);es([h()],Dn.prototype,"label",void 0);es([h()],Dn.prototype,"buttonLabel",void 0);Dn=es([E("wui-cta-button")],Dn);const ow=N`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var aw=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ca=class extends A{render(){return l`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};Ca.styles=[G,ue,ow];Ca=aw([E("wui-details-group")],Ca);const sw=N`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var wu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fo=class extends A{constructor(){super(...arguments),this.name=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};fo.styles=[G,ue,sw];wu([h()],fo.prototype,"name",void 0);fo=wu([E("wui-details-group-item")],fo);const cw=N`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`;var dc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Rr=class extends A{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?l`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(e=>l`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};Rr.styles=[G,ue,cw];dc([h({type:Array})],Rr.prototype,"actions",void 0);dc([h({type:Boolean})],Rr.prototype,"isOpen",void 0);Rr=dc([E("wui-dropdown-menu")],Rr);const lw=N`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Ti=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xt=class extends A{constructor(){super(...arguments),this.inputElementRef=si(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,r={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return l`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${ci(this.inputElementRef)}
        class=${oo(r)}
        type=${this.type}
        enterkeyhint=${O(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${O(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?l`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};xt.styles=[G,ue,lw];Ti([h()],xt.prototype,"size",void 0);Ti([h()],xt.prototype,"icon",void 0);Ti([h({type:Boolean})],xt.prototype,"disabled",void 0);Ti([h()],xt.prototype,"placeholder",void 0);Ti([h()],xt.prototype,"type",void 0);Ti([h()],xt.prototype,"keyHint",void 0);Ti([h()],xt.prototype,"value",void 0);Ti([h()],xt.prototype,"inputRightPadding",void 0);Ti([h()],xt.prototype,"tabIdx",void 0);xt=Ti([E("wui-input-text")],xt);const uw=N`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Mo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let cn=class extends A{constructor(){super(...arguments),this.disabled=!1}render(){return l`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${O(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?l`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};cn.styles=[G,uw];Mo([h()],cn.prototype,"errorMessage",void 0);Mo([h({type:Boolean})],cn.prototype,"disabled",void 0);Mo([h()],cn.prototype,"value",void 0);Mo([h()],cn.prototype,"tabIdx",void 0);cn=Mo([E("wui-email-input")],cn);const dw=N`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var Bo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ln=class extends A{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return l`
      <wui-input-text
        value=${O(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return l`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${Ce.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?l`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};ln.styles=[G,dw];Bo([h()],ln.prototype,"errorMessage",void 0);Bo([h({type:Boolean})],ln.prototype,"disabled",void 0);Bo([h()],ln.prototype,"value",void 0);Bo([h({type:Boolean})],ln.prototype,"loading",void 0);ln=Bo([E("wui-ens-input")],ln);const pw=N`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var jo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let un=class extends A{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};un.styles=[G,ue,Lo,pw];jo([h()],un.prototype,"size",void 0);jo([h({type:Boolean})],un.prototype,"disabled",void 0);jo([h()],un.prototype,"icon",void 0);jo([h()],un.prototype,"iconColor",void 0);un=jo([E("wui-icon-link")],un);const hw=N`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var gu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wo=class extends A{constructor(){super(...arguments),this.icon="copy"}render(){return l`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};wo.styles=[G,ue,hw];gu([h()],wo.prototype,"icon",void 0);wo=gu([E("wui-input-element")],wo);const fw=N`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var pc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Nr=class extends A{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return l`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};Nr.styles=[G,ue,fw];pc([h({type:Boolean})],Nr.prototype,"disabled",void 0);pc([h({type:String})],Nr.prototype,"value",void 0);Nr=pc([E("wui-input-numeric")],Nr);const ww=N`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var ts=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Un=class extends A{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${O(this.tabIdx)} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Un.styles=[G,ue,ww];ts([h()],Un.prototype,"tabIdx",void 0);ts([h({type:Boolean})],Un.prototype,"disabled",void 0);ts([h()],Un.prototype,"color",void 0);Un=ts([E("wui-link")],Un);const gw=N`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Yt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let dt=class extends A{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return l`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${O(this.iconVariant)}
        tabindex=${O(this.tabIdx)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return l`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return l`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:t;return l`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?l`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:l``}chevronTemplate(){return this.chevron?l`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};dt.styles=[G,ue,gw];Yt([h()],dt.prototype,"icon",void 0);Yt([h()],dt.prototype,"iconSize",void 0);Yt([h()],dt.prototype,"tabIdx",void 0);Yt([h()],dt.prototype,"variant",void 0);Yt([h()],dt.prototype,"iconVariant",void 0);Yt([h({type:Boolean})],dt.prototype,"disabled",void 0);Yt([h()],dt.prototype,"imageSrc",void 0);Yt([h()],dt.prototype,"alt",void 0);Yt([h({type:Boolean})],dt.prototype,"chevron",void 0);Yt([h({type:Boolean})],dt.prototype,"loading",void 0);dt=Yt([E("wui-list-item")],dt);var js;(function(i){i.approve="approved",i.bought="bought",i.borrow="borrowed",i.burn="burnt",i.cancel="canceled",i.claim="claimed",i.deploy="deployed",i.deposit="deposited",i.execute="executed",i.mint="minted",i.receive="received",i.repay="repaid",i.send="sent",i.sell="sold",i.stake="staked",i.trade="swapped",i.unstake="unstaked",i.withdraw="withdrawn"})(js||(js={}));const mw=N`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var lr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let pi=class extends A{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r=(e==null?void 0:e.type)==="NFT",o=t!=null&&t.url?t.type==="NFT":r,n=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${a};
    `,l`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||t!=null&&t.url)?l`<div class="swap-images-container">
        ${e!=null&&e.url?l`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t!=null&&t.url?l`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?l`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?l`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:l`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",t;return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?l`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};pi.styles=[mw];lr([h()],pi.prototype,"type",void 0);lr([h()],pi.prototype,"status",void 0);lr([h()],pi.prototype,"direction",void 0);lr([h({type:Boolean})],pi.prototype,"onlyDirectionIcon",void 0);lr([h({type:Array})],pi.prototype,"images",void 0);lr([h({type:Object})],pi.prototype,"secondImage",void 0);pi=lr([E("wui-transaction-visual")],pi);const vw=N`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Xt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let pt=class extends A{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return l`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${O(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${O(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${js[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[0];return e?l`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[1];return e?l`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};pt.styles=[G,vw];Xt([h()],pt.prototype,"type",void 0);Xt([h({type:Array})],pt.prototype,"descriptions",void 0);Xt([h()],pt.prototype,"date",void 0);Xt([h({type:Boolean})],pt.prototype,"onlyDirectionIcon",void 0);Xt([h()],pt.prototype,"status",void 0);Xt([h()],pt.prototype,"direction",void 0);Xt([h({type:Array})],pt.prototype,"images",void 0);Xt([h({type:Array})],pt.prototype,"price",void 0);Xt([h({type:Array})],pt.prototype,"amount",void 0);Xt([h({type:Array})],pt.prototype,"symbol",void 0);pt=Xt([E("wui-transaction-list-item")],pt);const bw=N`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Cw=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xa=class extends A{render(){return l`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};xa.styles=[G,bw];xa=Cw([E("wui-transaction-list-item-loader")],xa);const xw=N`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var hc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $r=class extends A{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return l`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};$r.styles=[G,xw];hc([h()],$r.prototype,"variant",void 0);hc([h()],$r.prototype,"size",void 0);$r=hc([E("wui-tag")],$r);const yw=N`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var Dt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let rt=class extends A{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${O(this.tabIdx)} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?l`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?l`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rt.styles=[G,ue,yw];Dt([h({type:Array})],rt.prototype,"walletImages",void 0);Dt([h()],rt.prototype,"imageSrc",void 0);Dt([h()],rt.prototype,"name",void 0);Dt([h()],rt.prototype,"tagLabel",void 0);Dt([h()],rt.prototype,"tagVariant",void 0);Dt([h()],rt.prototype,"icon",void 0);Dt([h()],rt.prototype,"walletIcon",void 0);Dt([h()],rt.prototype,"tabIdx",void 0);Dt([h({type:Boolean})],rt.prototype,"installed",void 0);Dt([h({type:Boolean})],rt.prototype,"disabled",void 0);Dt([h({type:Boolean})],rt.prototype,"showAllWallets",void 0);rt=Dt([E("wui-list-wallet")],rt);const Ew=N`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var mu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let go=class extends A{constructor(){super(...arguments),this.logo="google"}render(){return l`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};go.styles=[G,Ew];mu([h()],go.prototype,"logo",void 0);go=mu([E("wui-logo")],go);const Tw=N`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var is=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Wn=class extends A{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${O(this.tabIdx)} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Wn.styles=[G,ue,Tw];is([h()],Wn.prototype,"logo",void 0);is([h({type:Boolean})],Wn.prototype,"disabled",void 0);is([h()],Wn.prototype,"tabIdx",void 0);Wn=is([E("wui-logo-select")],Wn);const _w=N`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var ns=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Mn=class extends A{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return l`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Mn.styles=[G,ue,_w];ns([h()],Mn.prototype,"imageSrc",void 0);ns([h({type:Boolean})],Mn.prototype,"isUnsupportedChain",void 0);ns([h({type:Boolean})],Mn.prototype,"disabled",void 0);Mn=ns([E("wui-network-button")],Mn);const kw=N`
  :host {
    position: relative;
    display: block;
  }
`;var rs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Bn=class extends A{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,t)=>{const r=e.target,o=this.getInputElement(r),n=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;n.includes(e.key)&&e.preventDefault();const a=o.selectionStart;switch(e.key){case"ArrowLeft":a&&o.setSelectionRange(a+1,a+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break;case"Backspace":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const r=t+1;if(!this.shouldInputBeEnabled(r))return;const o=this.numerics[r<this.length?r:t],n=o?this.getInputElement(o):void 0;n&&(n.disabled=!1,n.focus())}if(e==="prev"){const r=t-1,o=this.numerics[r>-1?r:t],n=o?this.getInputElement(o):void 0;n&&n.focus()}}}firstUpdated(){var t,r;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return l`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>l`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,t)}
              @click=${r=>this.selectInput(r)}
              @keydown=${r=>this.handleKeyDown(r,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){const o=this.numerics[t],n=e||(o?this.getInputElement(o):void 0);n&&(n.value=r,this.values=this.values.map((a,s)=>s===t?r:a))}selectInput(e){const t=e.target;if(t){const r=this.getInputElement(t);r==null||r.select()}}handleInput(e,t){const r=e.target,o=this.getInputElement(r);if(o){const n=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,n,t):re.isNumber(n)&&e.data?(this.updateInput(o,t,e.data),this.focusInputField("next",t)):this.updateInput(o,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const o=t[0];if(o&&re.isNumber(o)){this.updateInput(e,r,o);const a=t.substring(1);if(r+1<this.length&&a.length){const s=this.numerics[r+1],p=s?this.getInputElement(s):void 0;p&&this.handlePaste(p,a,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};Bn.styles=[G,kw];rs([h({type:Number})],Bn.prototype,"length",void 0);rs([h({type:String})],Bn.prototype,"otp",void 0);rs([v()],Bn.prototype,"values",void 0);Bn=rs([E("wui-otp")],Bn);const Aw=.1,vl=2.5,Ri=7;function $s(i,e,t){return i===e?!1:(i-e<0?e-i:i-e)<=t+Aw}function Sw(i,e){const t=Array.prototype.slice.call(xd.create(i,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(t.length);return t.reduce((o,n,a)=>(a%r===0?o.push([n]):o[o.length-1].push(n))&&o,[])}const Iw={generate(i,e,t){const r="#141414",o="transparent",a=[],s=Sw(i,"Q"),p=e/s.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:_,y:I})=>{const B=(s.length-Ri)*p*_,W=(s.length-Ri)*p*I,D=.45;for(let V=0;V<d.length;V+=1){const L=p*(Ri-V*2);a.push(F`
            <rect
              fill=${V===2?r:o}
              width=${V===0?L-5:L}
              rx= ${V===0?(L-5)*D:L*D}
              ry= ${V===0?(L-5)*D:L*D}
              stroke=${r}
              stroke-width=${V===0?5:0}
              height=${V===0?L-5:L}
              x= ${V===0?W+p*V+5/2:W+p*V}
              y= ${V===0?B+p*V+5/2:B+p*V}
            />
          `)}});const w=Math.floor((t+25)/p),C=s.length/2-w/2,b=s.length/2+w/2-1,y=[];s.forEach((_,I)=>{_.forEach((B,W)=>{if(s[I][W]&&!(I<Ri&&W<Ri||I>s.length-(Ri+1)&&W<Ri||I<Ri&&W>s.length-(Ri+1))&&!(I>C&&I<b&&W>C&&W<b)){const D=I*p+p/2,V=W*p+p/2;y.push([D,V])}})});const T={};return y.forEach(([_,I])=>{var B;T[_]?(B=T[_])==null||B.push(I):T[_]=[I]}),Object.entries(T).map(([_,I])=>{const B=I.filter(W=>I.every(D=>!$s(W,D,p)));return[Number(_),B]}).forEach(([_,I])=>{I.forEach(B=>{a.push(F`<circle cx=${_} cy=${B} fill=${r} r=${p/vl} />`)})}),Object.entries(T).filter(([_,I])=>I.length>1).map(([_,I])=>{const B=I.filter(W=>I.some(D=>$s(W,D,p)));return[Number(_),B]}).map(([_,I])=>{I.sort((W,D)=>W<D?-1:1);const B=[];for(const W of I){const D=B.find(V=>V.some(L=>$s(W,L,p)));D?D.push(W):B.push([W])}return[_,B.map(W=>[W[0],W[W.length-1]])]}).forEach(([_,I])=>{I.forEach(([B,W])=>{a.push(F`
              <line
                x1=${_}
                x2=${_}
                y1=${B}
                y2=${W}
                stroke=${r}
                stroke-width=${p/(vl/2)}
                stroke-linecap="round"
              />
            `)})}),a}},Rw=N`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Cn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ft=class extends A{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,l`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return F`
      <svg height=${e} width=${e}>
        ${Iw.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?l`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:l`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Ft.styles=[G,Rw];Cn([h()],Ft.prototype,"uri",void 0);Cn([h({type:Number})],Ft.prototype,"size",void 0);Cn([h()],Ft.prototype,"theme",void 0);Cn([h()],Ft.prototype,"imageSrc",void 0);Cn([h()],Ft.prototype,"alt",void 0);Cn([h({type:Boolean})],Ft.prototype,"arenaClear",void 0);Cn([h({type:Boolean})],Ft.prototype,"farcaster",void 0);Ft=Cn([E("wui-qr-code")],Ft);const Nw=N`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var $w=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ya=class extends A{constructor(){super(...arguments),this.inputComponentRef=si()}render(){return l`
      <wui-input-text
        ${ci(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};ya.styles=[G,Nw];ya=$w([E("wui-search-bar")],ya);const Pw=N`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var ur=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let hi=class extends A{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return l`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?l`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:l`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};hi.styles=[G,Pw];ur([h()],hi.prototype,"backgroundColor",void 0);ur([h()],hi.prototype,"iconColor",void 0);ur([h()],hi.prototype,"icon",void 0);ur([h()],hi.prototype,"message",void 0);ur([h()],hi.prototype,"loading",void 0);ur([h()],hi.prototype,"iconType",void 0);hi=ur([E("wui-snackbar")],hi);const Ow=N`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var Fo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let dn=class extends A{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,l`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){$n.close()}};dn.styles=[G,Ow];Fo([h()],dn.prototype,"message",void 0);Fo([h()],dn.prototype,"backgroundColor",void 0);Fo([h()],dn.prototype,"iconColor",void 0);Fo([h()],dn.prototype,"icon",void 0);dn=Fo([E("wui-alertbar")],dn);const Lw=N`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var xn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let zt=class extends A{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{var o;const r=t===this.activeTab;return l`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?l`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],o=this.buttons[e],n=r==null?void 0:r.querySelector("wui-text"),a=o==null?void 0:o.querySelector("wui-text"),s=o==null?void 0:o.getBoundingClientRect(),p=a==null?void 0:a.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&s&&p&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(s.width+p.width)+6}px`,o.animate([{width:`${s.width+p.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};zt.styles=[G,ue,Lw];xn([h({type:Array})],zt.prototype,"tabs",void 0);xn([h()],zt.prototype,"onTabChange",void 0);xn([h({type:Array})],zt.prototype,"buttons",void 0);xn([h({type:Boolean})],zt.prototype,"disabled",void 0);xn([h()],zt.prototype,"localTabWidth",void 0);xn([v()],zt.prototype,"activeTab",void 0);xn([v()],zt.prototype,"isDense",void 0);zt=xn([E("wui-tabs")],zt);const Dw=N`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var fc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pr=class extends A{constructor(){super(...arguments),this.text=""}render(){return l`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Pr.styles=[G,ue,Dw];fc([h()],Pr.prototype,"imageSrc",void 0);fc([h()],Pr.prototype,"text",void 0);Pr=fc([E("wui-token-button")],Pr);const Uw=N`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var os=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let jn=class extends A{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,l`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};jn.styles=[G,ue,Uw];os([h()],jn.prototype,"placement",void 0);os([h()],jn.prototype,"variant",void 0);os([h()],jn.prototype,"message",void 0);jn=os([E("wui-tooltip")],jn);const Ww=N`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var yn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Vt=class extends A{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t;if(!this.visible)return null;const e=this.amount&&this.price?(t=fe.multiply(this.price,this.amount))==null?void 0:t.toFixed(3):null;return l`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?l`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${re.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?l`<wui-text variant="small-400" color="fg-200">
                  ${re.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?l`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?l`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};Vt.styles=[G,ue,Ww];yn([h()],Vt.prototype,"imageSrc",void 0);yn([h()],Vt.prototype,"name",void 0);yn([h()],Vt.prototype,"symbol",void 0);yn([h()],Vt.prototype,"price",void 0);yn([h()],Vt.prototype,"amount",void 0);yn([v()],Vt.prototype,"visible",void 0);yn([v()],Vt.prototype,"imageError",void 0);Vt=yn([E("wui-token-list-item")],Vt);const Mw=N`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var as=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Fn=class extends A{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,l`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Fn.styles=[G,Mw];as([h()],Fn.prototype,"imageSrc",void 0);as([h()],Fn.prototype,"alt",void 0);as([h({type:Boolean})],Fn.prototype,"borderRadiusFull",void 0);Fn=as([E("wui-visual-thumbnail")],Fn);const Bw=N`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var ss=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let zn=class extends A{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};zn.styles=[G,ue,Bw];ss([h()],zn.prototype,"label",void 0);ss([h()],zn.prototype,"description",void 0);ss([h()],zn.prototype,"icon",void 0);zn=ss([E("wui-notice-card")],zn);const jw=N`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var wc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Ps=100;let Or=class extends A{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var r,o;const e=(r=this.shadowRoot)==null?void 0:r.querySelector(".heightContent"),t=(o=this.shadowRoot)==null?void 0:o.querySelector(".textContent");if(e&&t){this.scrollElement=e;const n=t==null?void 0:t.scrollHeight;n&&n>Ps&&(this.enableAccordion=!0,this.scrollHeightElement=n,this.requestUpdate())}})}render(){return l`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${Ps}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${Ps}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?l` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Or.styles=[G,ue,jw];wc([h()],Or.prototype,"textTitle",void 0);wc([h()],Or.prototype,"overflowedContent",void 0);Or=wc([E("wui-list-accordion")],Or);const Fw=N`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var cs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Vn=class extends A{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?l` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Vn.styles=[G,ue,Fw];cs([h()],Vn.prototype,"imageSrc",void 0);cs([h()],Vn.prototype,"textTitle",void 0);cs([h()],Vn.prototype,"textValue",void 0);Vn=cs([E("wui-list-content")],Vn);const zw=N`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var zr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Oi=class extends A{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return l`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?l`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?l`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:l`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};Oi.styles=[G,ue,zw];zr([h()],Oi.prototype,"imageSrc",void 0);zr([h()],Oi.prototype,"name",void 0);zr([h({type:Boolean})],Oi.prototype,"disabled",void 0);zr([h({type:Boolean})],Oi.prototype,"selected",void 0);zr([h({type:Boolean})],Oi.prototype,"transparent",void 0);Oi=zr([E("wui-list-network")],Oi);const Vw=N`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Vr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Li=class extends A{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?l`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Li.styles=[G,ue,Vw];Vr([h()],Li.prototype,"amount",void 0);Vr([h()],Li.prototype,"networkCurreny",void 0);Vr([h()],Li.prototype,"networkImageUrl",void 0);Vr([h()],Li.prototype,"receiverAddress",void 0);Vr([h()],Li.prototype,"addressExplorerUrl",void 0);Li=Vr([E("wui-list-wallet-transaction")],Li);const Hw=N`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var vu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let mo=class extends A{constructor(){super(...arguments),this.text=""}render(){return l`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};mo.styles=[G,ue,Hw];vu([h()],mo.prototype,"text",void 0);mo=vu([E("wui-promo")],mo);const Zw=N`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var gc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Lr=class extends A{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Lr.styles=[G,Zw];gc([h()],Lr.prototype,"dollars",void 0);gc([h()],Lr.prototype,"pennies",void 0);Lr=gc([E("wui-balance")],Lr);const Gw=N`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Hr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Di=class extends A{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return l`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${re.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Di.styles=[G,ue,Gw];Hr([h()],Di.prototype,"networkSrc",void 0);Hr([h()],Di.prototype,"avatarSrc",void 0);Hr([h()],Di.prototype,"profileName",void 0);Hr([h()],Di.prototype,"address",void 0);Hr([h()],Di.prototype,"icon",void 0);Di=Hr([E("wui-profile-button")],Di);const qw=N`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var dr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fi=class extends A{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=de.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH"}render(){return l`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${re.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){var t,r;if(e.target instanceof HTMLElement&&e.target.id==="copy-address"){(t=this.onCopyClick)==null||t.call(this,e);return}(r=this.onProfileClick)==null||r.call(this,e)}getIconTemplate(e){return l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};fi.styles=[G,ue,qw];dr([h()],fi.prototype,"avatarSrc",void 0);dr([h()],fi.prototype,"profileName",void 0);dr([h()],fi.prototype,"address",void 0);dr([h()],fi.prototype,"icon",void 0);dr([h()],fi.prototype,"onProfileClick",void 0);dr([h()],fi.prototype,"onCopyClick",void 0);fi=dr([E("wui-profile-button-v2")],fi);const Kw=N`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var pr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wi=class extends A{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e=this.size==="sm"?"small-600":"paragraph-600";return l`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};wi.styles=[G,ue,Kw];pr([h()],wi.prototype,"variant",void 0);pr([h()],wi.prototype,"imageSrc",void 0);pr([h({type:Boolean})],wi.prototype,"disabled",void 0);pr([h()],wi.prototype,"icon",void 0);pr([h()],wi.prototype,"size",void 0);pr([h()],wi.prototype,"text",void 0);wi=pr([E("wui-chip-button")],wi);const Yw=N`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var mc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Dr=class extends A{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return l` <wui-flex class="networks">
      ${e==null?void 0:e.map(t=>l` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};Dr.styles=[G,ue,Yw];mc([h({type:Array})],Dr.prototype,"networkImages",void 0);mc([h()],Dr.prototype,"text",void 0);Dr=mc([E("wui-compatible-network")],Dr);const Xw=N`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var vc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ur=class extends A{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Ur.styles=[G,ue,Xw];vc([h()],Ur.prototype,"icon",void 0);vc([h()],Ur.prototype,"text",void 0);Ur=vc([E("wui-banner")],Ur);const Qw=N`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var ls=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Hn=class extends A{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Hn.styles=[G,ue,Qw];ls([h()],Hn.prototype,"imageSrc",void 0);ls([h()],Hn.prototype,"text",void 0);ls([h()],Hn.prototype,"size",void 0);Hn=ls([E("wui-banner-img")],Hn);const Jw=N`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var hr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let gi=class extends A{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return l`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${re.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?l`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:l`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};gi.styles=[G,ue,Jw];hr([h()],gi.prototype,"tokenName",void 0);hr([h()],gi.prototype,"tokenImageUrl",void 0);hr([h({type:Number})],gi.prototype,"tokenValue",void 0);hr([h()],gi.prototype,"tokenAmount",void 0);hr([h()],gi.prototype,"tokenCurrency",void 0);hr([h({type:Boolean})],gi.prototype,"clickable",void 0);gi=hr([E("wui-list-token")],gi);const eg=N`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var En=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ht=class extends A{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return l`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?l` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:l`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Ht.styles=[G,ue,eg];En([h()],Ht.prototype,"icon",void 0);En([h()],Ht.prototype,"text",void 0);En([h()],Ht.prototype,"description",void 0);En([h()],Ht.prototype,"tag",void 0);En([h()],Ht.prototype,"iconBackgroundColor",void 0);En([h()],Ht.prototype,"iconColor",void 0);En([h({type:Boolean})],Ht.prototype,"disabled",void 0);Ht=En([E("wui-list-description")],Ht);const tg=N`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,ig=/[.*+?^${}()|[\]\\]/gu,ng=/[0-9,.]/u;var us=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Zn=class extends A{constructor(){super(...arguments),this.inputElementRef=si(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),l`<input
      ${ci(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var r,o;const t=e.data;if(t&&((r=this.inputElementRef)!=null&&r.value))if(t===","){const n=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=n,this.value=`${this.value}${n}`}else ng.test(t)||(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(ig,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:(o=this.inputElementRef.value)==null?void 0:o.value,bubbles:!0,composed:!0}))}};Zn.styles=[G,ue,tg];us([h({type:Boolean})],Zn.prototype,"disabled",void 0);us([h({type:String})],Zn.prototype,"value",void 0);us([h({type:String})],Zn.prototype,"placeholder",void 0);Zn=us([E("wui-input-amount")],Zn);const rg=N`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var zo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let pn=class extends A{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return l`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?l`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};pn.styles=[G,ue,rg];zo([h()],pn.prototype,"text",void 0);zo([h()],pn.prototype,"address",void 0);zo([h()],pn.prototype,"imageSrc",void 0);zo([h({type:Boolean})],pn.prototype,"isAddress",void 0);pn=zo([E("wui-preview-item")],pn);const og=N`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var Vo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let hn=class extends A{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=de.getConnectedConnector(),this.labels=R.state.addressLabels,this.caipNetwork=m.state.activeCaipNetwork,this.socialProvider=de.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){var e;super.connectedCallback(),Se.getBalance(this.accountAddress,(e=this.caipNetwork)==null?void 0:e.caipNetworkId).then(t=>{let r=this.balance;t.balances.length>0&&(r=t.balances.reduce((o,n)=>o+((n==null?void 0:n.value)||0),0)),this.balance=r,this.fetchingBalance=!1,this.requestUpdate()}).catch(()=>{this.fetchingBalance=!1,this.requestUpdate()})}render(){const e=this.getLabel();return this.shouldShowIcon=this.connectedConnector==="ID_AUTH",l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===se.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:l`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${re.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:l` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){var t;let e=(t=this.labels)==null?void 0:t.get(this.accountAddress);return!e&&this.connectedConnector==="ID_AUTH"?e=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:!e&&this.connectedConnector==="INJECTED"||this.connectedConnector==="ANNOUNCED"?e="Injected Account":e||(e="EOA"),e}};hn.styles=[G,ue,og];Vo([h()],hn.prototype,"accountAddress",void 0);Vo([h()],hn.prototype,"accountType",void 0);Vo([h({type:Boolean})],hn.prototype,"selected",void 0);Vo([h({type:Function})],hn.prototype,"onSelect",void 0);hn=Vo([E("wui-list-account")],hn);const ag=N`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var bc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Wr=class extends A{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return l`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};Wr.styles=[G,ue,ag];bc([h()],Wr.prototype,"text",void 0);bc([h()],Wr.prototype,"icon",void 0);Wr=bc([E("wui-icon-button")],Wr);const sg=N`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var ds=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Gn=class extends A{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${O(this.tabIdx)} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Gn.styles=[G,ue,sg];ds([h()],Gn.prototype,"text",void 0);ds([h({type:Boolean})],Gn.prototype,"disabled",void 0);ds([h()],Gn.prototype,"tabIdx",void 0);Gn=ds([E("wui-list-button")],Gn);const cg=N`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Zr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ui=class extends A{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${O(this.tabIdx)} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?l` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};Ui.styles=[G,ue,cg];Zr([h()],Ui.prototype,"logo",void 0);Zr([h()],Ui.prototype,"name",void 0);Zr([h()],Ui.prototype,"align",void 0);Zr([h()],Ui.prototype,"tabIdx",void 0);Zr([h({type:Boolean})],Ui.prototype,"disabled",void 0);Ui=Zr([E("wui-list-social")],Ui);const lg=N`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var bu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vo=class extends A{constructor(){super(...arguments),this.imageSrc=""}render(){return l`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:l`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};vo.styles=[G,ue,Lo,lg];bu([h()],vo.prototype,"imageSrc",void 0);vo=bu([E("wui-select")],vo);const ug=N`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var Cu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bo=class extends A{constructor(){super(...arguments),this.inputElementRef=si(),this.checked=void 0}render(){return l`
      <label>
        <input
          ${ci(this.inputElementRef)}
          ?checked=${O(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};bo.styles=[G,ug];Cu([h({type:Boolean})],bo.prototype,"checked",void 0);bo=Cu([E("wui-checkbox")],bo);const dg=N`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var xu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Co=class extends A{constructor(){super(...arguments),this.inputElementRef=si(),this.checked=void 0}render(){return l`
      <label>
        <input
          ${ci(this.inputElementRef)}
          type="checkbox"
          ?checked=${O(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};Co.styles=[G,ue,Lo,dg];xu([h({type:Boolean})],Co.prototype,"checked",void 0);Co=xu([E("wui-switch")],Co);const pg=N`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var yu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xo=class extends A{constructor(){super(...arguments),this.checked=void 0}render(){return l`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${O(this.checked)}></wui-switch>
      </button>
    `}};xo.styles=[G,ue,pg];yu([h({type:Boolean})],xo.prototype,"checked",void 0);xo=yu([E("wui-certified-switch")],xo);const hg=N`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Ut=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ot=class extends A{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&re.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&re.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&re.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&re.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&re.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&re.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&re.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&re.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};ot.styles=[G,hg];Ut([h()],ot.prototype,"gridTemplateRows",void 0);Ut([h()],ot.prototype,"gridTemplateColumns",void 0);Ut([h()],ot.prototype,"justifyItems",void 0);Ut([h()],ot.prototype,"alignItems",void 0);Ut([h()],ot.prototype,"justifyContent",void 0);Ut([h()],ot.prototype,"alignContent",void 0);Ut([h()],ot.prototype,"columnGap",void 0);Ut([h()],ot.prototype,"rowGap",void 0);Ut([h()],ot.prototype,"gap",void 0);Ut([h()],ot.prototype,"padding",void 0);Ut([h()],ot.prototype,"margin",void 0);ot=Ut([E("wui-grid")],ot);const fg=N`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var Eu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yo=class extends A{constructor(){super(...arguments),this.text=""}render(){return l`${this.template()}`}template(){return this.text?l`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};yo.styles=[G,fg];Eu([h()],yo.prototype,"text",void 0);yo=Eu([E("wui-separator")],yo);const Nn={interpolate(i,e,t){if(i.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const r=i[0]||0,o=i[1]||0,n=e[0]||0,a=e[1]||0;return t<r?n:t>o?a:(a-n)/(o-r)*(t-r)+n}},wg=3,gg=["receive","deposit","borrow","claim"],mg=["withdraw","repay","burn"],Ji={getMonthName(i){const e=new Date;return e.setMonth(i),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(i,e){const t=nc.getYear(),r=this.getMonthName(e);return i===t?r:`${r} ${i}`},getTransactionImages(i){const[e,t]=i,r=!!e&&(i==null?void 0:i.every(a=>!!a.nft_info)),o=(i==null?void 0:i.length)>1;return(i==null?void 0:i.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(t)]:o?i.map(a=>this.getTransactionImage(a)):[this.getTransactionImage(e)]},getTransactionImage(i){return{type:Ji.getTransactionTransferTokenType(i),url:Ji.getTransactionImageURL(i)}},getTransactionImageURL(i){var o,n,a,s,p;let e;const t=!!(i!=null&&i.nft_info),r=!!(i!=null&&i.fungible_info);return i&&t?e=(a=(n=(o=i==null?void 0:i.nft_info)==null?void 0:o.content)==null?void 0:n.preview)==null?void 0:a.url:i&&r&&(e=(p=(s=i==null?void 0:i.fungible_info)==null?void 0:s.icon)==null?void 0:p.url),e},getTransactionTransferTokenType(i){if(i!=null&&i.fungible_info)return"FUNGIBLE";if(i!=null&&i.nft_info)return"NFT"},getTransactionDescriptions(i){var C,b,y;const e=(C=i==null?void 0:i.metadata)==null?void 0:C.operationType,t=i==null?void 0:i.transfers,r=((b=i==null?void 0:i.transfers)==null?void 0:b.length)>0,o=((y=i==null?void 0:i.transfers)==null?void 0:y.length)>1,n=r&&(t==null?void 0:t.every(T=>!!(T!=null&&T.fungible_info))),[a,s]=t;let p=this.getTransferDescription(a),d=this.getTransferDescription(s);if(!r)return(e==="send"||e==="receive")&&n?(p=re.getTruncateString({string:i==null?void 0:i.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),d=re.getTruncateString({string:i==null?void 0:i.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[p,d]):[i.metadata.status];if(o)return t.map(T=>this.getTransferDescription(T));let w="";return gg.includes(e)?w="+":mg.includes(e)&&(w="-"),p=w.concat(p),[p]},getTransferDescription(i){var t;let e="";return i&&(i!=null&&i.nft_info?e=((t=i==null?void 0:i.nft_info)==null?void 0:t.name)||"-":i!=null&&i.fungible_info&&(e=this.getFungibleTransferDescription(i)||"-")),e},getFungibleTransferDescription(i){var r;return i?[this.getQuantityFixedValue(i==null?void 0:i.quantity.numeric),(r=i==null?void 0:i.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(i){return i?parseFloat(i).toFixed(wg):null}},vg=Object.freeze(Object.defineProperty({__proto__:null,MathUtil:Nn,TransactionUtil:Ji,UiHelperUtil:re,get WuiAccountButton(){return bt},get WuiAlertBar(){return dn},get WuiAllWalletsImage(){return po},get WuiAvatar(){return sn},get WuiBalance(){return Lr},get WuiBanner(){return Ur},get WuiBannerImg(){return Hn},get WuiButton(){return Ct},get WuiCard(){return va},get WuiCardSelect(){return di},get WuiCardSelectLoader(){return ho},get WuiCertifiedSwitch(){return xo},get WuiCheckBox(){return bo},get WuiChip(){return Ot},get WuiChipButton(){return wi},get WuiCompatibleNetwork(){return Dr},get WuiConnectButton(){return Ir},get WuiCtaButton(){return Dn},get WuiDetailsGroup(){return Ca},get WuiDetailsGroupItem(){return fo},get WuiDropdownMenu(){return Rr},get WuiEmailInput(){return cn},get WuiEnsInput(){return ln},get WuiFlex(){return tt},get WuiGrid(){return ot},get WuiIcon(){return On},get WuiIconBox(){return Pt},get WuiIconButton(){return Wr},get WuiIconLink(){return un},get WuiImage(){return Ln},get WuiInputAmount(){return Zn},get WuiInputElement(){return wo},get WuiInputNumeric(){return Nr},get WuiInputText(){return xt},get WuiLink(){return Un},get WuiListAccordion(){return Or},get WuiListAccount(){return hn},get WuiListButton(){return Gn},get WuiListContent(){return Vn},get WuiListDescription(){return Ht},get WuiListItem(){return dt},get WuiListNetwork(){return Oi},get WuiListSocial(){return Ui},get WuiListToken(){return gi},get WuiListWallet(){return rt},get WuiListWalletTransaction(){return Li},get WuiLoadingHexagon(){return ba},get WuiLoadingSpinner(){return Ar},get WuiLoadingThumbnail(){return uo},get WuiLogo(){return go},get WuiLogoSelect(){return Wn},get WuiNetworkButton(){return Mn},get WuiNetworkImage(){return ui},get WuiNoticeCard(){return zn},get WuiOtp(){return Bn},get WuiPreviewItem(){return pn},get WuiProfileButton(){return Di},get WuiProfileButtonV2(){return fi},get WuiPromo(){return mo},get WuiQrCode(){return Ft},get WuiSearchBar(){return ya},get WuiSelect(){return vo},get WuiSeparator(){return yo},get WuiShimmer(){return on},get WuiSnackbar(){return hi},get WuiSwitch(){return Co},get WuiTabs(){return zt},get WuiTag(){return $r},get WuiText(){return an},get WuiTokenButton(){return Pr},get WuiTokenListItem(){return Vt},get WuiTooltip(){return jn},get WuiTransactionListItem(){return pt},get WuiTransactionListItemLoader(){return xa},get WuiTransactionVisual(){return pi},get WuiVisual(){return Sr},get WuiVisualThumbnail(){return Fn},get WuiWalletImage(){return li},customElement:E,initializeTheming:lu,setColorTheme:sc,setThemeVariables:uu,swapInputMaskBottomSvg:Lp,swapInputMaskTopSvg:Dp},Symbol.toStringTag,{value:"Module"})),Cc={getMethodsByChainNamespace(i){switch(i){case"solana":return["solana_signMessage","solana_signTransaction","solana_requestAccounts","solana_getAccounts","solana_signAllTransactions","solana_signAndSendTransaction"];case"eip155":return["personal_sign","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendRawTransaction","eth_sendTransaction","wallet_getCapabilities","wallet_sendCalls","wallet_showCallsStatus","wallet_getCallsStatus","wallet_grantPermissions","wallet_revokePermissions","wallet_switchEthereumChain"];case"bip122":return["sendTransfer","signMessage","signPsbt","getAccountAddresses"];default:return[]}},createNamespaces(i){return i.reduce((e,t)=>{const{id:r,chainNamespace:o,rpcUrls:n}=t,a=n.default.http[0],s=this.getMethodsByChainNamespace(o);e[o]||(e[o]={methods:s,events:["accountsChanged","chainChanged"],chains:[],rpcMap:{}});const p=`${o}:${r}`,d=e[o];switch(d.chains.push(p),p){case qc.caipNetworkId:d.chains.push(qc.deprecatedCaipNetworkId);break;case Kc.caipNetworkId:d.chains.push(Kc.deprecatedCaipNetworkId);break}return d!=null&&d.rpcMap&&a&&(d.rpcMap[r]=a),e},{})},resolveReownName:async i=>{var r;const e=await oi.resolveName(i);return((r=(Object.values(e==null?void 0:e.addresses)||[])[0])==null?void 0:r.address)||!1},getChainsFromNamespaces(i={}){return Object.values(i).flatMap(e=>{const t=e.chains||[],r=e.accounts.map(o=>{const[n,a]=o.split(":");return`${n}:${a}`});return Array.from(new Set([...t,...r]))})}};function bg(i){if(i.length>=255)throw new TypeError("Alphabet too long");const e=new Uint8Array(256);for(let d=0;d<e.length;d++)e[d]=255;for(let d=0;d<i.length;d++){const w=i.charAt(d),C=w.charCodeAt(0);if(e[C]!==255)throw new TypeError(w+" is ambiguous");e[C]=d}const t=i.length,r=i.charAt(0),o=Math.log(t)/Math.log(256),n=Math.log(256)/Math.log(t);function a(d){if(d instanceof Uint8Array||(ArrayBuffer.isView(d)?d=new Uint8Array(d.buffer,d.byteOffset,d.byteLength):Array.isArray(d)&&(d=Uint8Array.from(d))),!(d instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(d.length===0)return"";let w=0,C=0,b=0;const y=d.length;for(;b!==y&&d[b]===0;)b++,w++;const T=(y-b)*n+1>>>0,_=new Uint8Array(T);for(;b!==y;){let W=d[b],D=0;for(let V=T-1;(W!==0||D<C)&&V!==-1;V--,D++)W+=256*_[V]>>>0,_[V]=W%t>>>0,W=W/t>>>0;if(W!==0)throw new Error("Non-zero carry");C=D,b++}let I=T-C;for(;I!==T&&_[I]===0;)I++;let B=r.repeat(w);for(;I<T;++I)B+=i.charAt(_[I]);return B}function s(d){if(typeof d!="string")throw new TypeError("Expected String");if(d.length===0)return new Uint8Array;let w=0,C=0,b=0;for(;d[w]===r;)C++,w++;const y=(d.length-w)*o+1>>>0,T=new Uint8Array(y);for(;w<d.length;){const W=d.charCodeAt(w);if(W>255)return;let D=e[W];if(D===255)return;let V=0;for(let L=y-1;(D!==0||V<b)&&L!==-1;L--,V++)D+=t*T[L]>>>0,T[L]=D%256>>>0,D=D/256>>>0;if(D!==0)throw new Error("Non-zero carry");b=V,w++}let _=y-b;for(;_!==y&&T[_]===0;)_++;const I=new Uint8Array(C+(y-_));let B=C;for(;_!==y;)I[B++]=T[_++];return I}function p(d){const w=s(d);if(w)return w;throw new Error("Non-base"+t+" character")}return{encode:a,decodeUnsafe:s,decode:p}}var Cg="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";const xg=bg(Cg);class yg extends nu{async connectWalletConnect(e){const t=this.connectors.find(n=>n.type==="WALLET_CONNECT"),r=t==null?void 0:t.provider;if(!this.caipNetworks||!r)throw new Error("UniversalAdapter:connectWalletConnect - caipNetworks or provider is undefined");r.on("display_uri",n=>{e(n)});const o=Cc.createNamespaces(this.caipNetworks);await r.connect({optionalNamespaces:o})}async connect(e){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:Number(e.chainId),provider:this.provider,address:""})}async disconnect(){const e=this.connectors.find(r=>r.id==="WALLET_CONNECT"),t=e==null?void 0:e.provider;await(t==null?void 0:t.disconnect())}async syncConnectors(){return Promise.resolve()}async getBalance(){return Promise.resolve({balance:"0",decimals:0,symbol:""})}async signMessage(e){var a,s,p;const{provider:t,message:r,address:o}=e;if(!t)throw new Error("UniversalAdapter:signMessage - provider is undefined");let n="";return((a=m.state.activeCaipNetwork)==null?void 0:a.chainNamespace)===Ce.CHAIN.SOLANA?n=(await t.request({method:"solana_signMessage",params:{message:xg.encode(new TextEncoder().encode(r)),pubkey:o}},(s=m.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)).signature:n=await t.request({method:"personal_sign",params:[r,o]},(p=m.state.activeCaipNetwork)==null?void 0:p.caipNetworkId),{signature:n}}async estimateGas(){return Promise.resolve({gas:BigInt(0)})}async getProfile(){return Promise.resolve({profileImage:"",profileName:""})}async sendTransaction(){return Promise.resolve({hash:""})}async writeContract(){return Promise.resolve({hash:""})}async getEnsAddress(){return Promise.resolve({address:!1})}parseUnits(){return 0n}formatUnits(){return"0"}async getCapabilities(){return Promise.resolve({})}async grantPermissions(){return Promise.resolve({})}async revokePermissions(){return Promise.resolve("0x")}async syncConnection(){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:1,provider:this.provider,address:""})}async switchNetwork(e){const{caipNetwork:t}=e,r=this.connectors.find(n=>n.type==="WALLET_CONNECT"),o=r==null?void 0:r.provider;if(!o)throw new Error("UniversalAdapter:switchNetwork - provider is undefined");o.setDefaultChain(`${t.chainNamespace}:${String(t.id)}`)}getWalletConnectProvider(){const e=this.connectors.find(r=>r.type==="WALLET_CONNECT");return e==null?void 0:e.provider}}const Ea={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},Nt=Ie({providers:{...Ea},providerIds:{...Ea}}),Ze={state:Nt,subscribeKey(i,e){return Ke(Nt,i,e)},subscribeProviders(i){return qe(Nt.providers,()=>i(Nt.providers))},setProvider(i,e){e&&(Nt.providers[i]=$t(e))},getProvider(i){return Nt.providers[i]},setProviderId(i,e){e&&(Nt.providerIds[i]=e)},getProviderId(i){return Nt.providerIds[i]},reset(){Nt.providers={...Ea},Nt.providerIds={...Ea}},resetChain(i){Nt.providers[i]=void 0,Nt.providerIds[i]=void 0}},Eg={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},Tg={supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},_g=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions"];let bl=!1;class kg{constructor(e){this.chainNamespaces=[],this.initPromise=void 0,this.setStatus=(t,r)=>{de.setConnectionStatus(t),R.setStatus(t,r)},this.getIsConnectedState=()=>!!m.state.activeCaipAddress,this.setAllAccounts=(t,r)=>{R.setAllAccounts(t,r),U.setHasMultipleAddresses((t==null?void 0:t.length)>1)},this.addAddressLabel=(t,r,o)=>{R.addAddressLabel(t,r,o)},this.removeAddressLabel=(t,r)=>{R.removeAddressLabel(t,r)},this.getCaipAddress=t=>m.state.activeChain===t||!t?m.state.activeCaipAddress:m.getAccountProp("caipAddress",t),this.getAddressByChainNamespace=t=>m.getAccountProp("address",t),this.getAddress=t=>m.state.activeChain===t||!t?R.state.address:m.getAccountProp("address",t),this.getProvider=()=>R.state.provider,this.getPreferredAccountType=()=>R.state.preferredAccountType,this.setCaipAddress=(t,r)=>{R.setCaipAddress(t,r)},this.setProvider=(t,r)=>{R.setProvider(t,r)},this.setBalance=(t,r,o)=>{R.setBalance(t,r,o)},this.setProfileName=(t,r)=>{R.setProfileName(t,r)},this.setProfileImage=(t,r)=>{R.setProfileImage(t,r)},this.resetAccount=t=>{R.resetAccount(t)},this.setCaipNetwork=t=>{m.setActiveCaipNetwork(t)},this.getCaipNetwork=t=>{var r;return t?(r=m.getRequestedCaipNetworks(t).filter(o=>o.chainNamespace===t))==null?void 0:r[0]:m.state.activeCaipNetwork},this.getCaipNetworkId=()=>{const t=this.getCaipNetwork();if(t)return t.id},this.getCaipNetworks=t=>m.getRequestedCaipNetworks(t),this.getActiveChainNamespace=()=>m.state.activeChain,this.setRequestedCaipNetworks=(t,r)=>{m.setRequestedCaipNetworks(t,r)},this.getApprovedCaipNetworkIds=()=>m.getAllApprovedCaipNetworkIds(),this.setApprovedCaipNetworksData=t=>m.setApprovedCaipNetworksData(t),this.resetNetwork=t=>{m.resetNetwork(t)},this.setConnectors=t=>{const r=[...Y.getConnectors(),...t];Y.setConnectors(r)},this.addConnector=t=>{Y.addConnector(t)},this.getConnectors=()=>Y.getConnectors(),this.resetWcConnection=()=>{ee.resetWcConnection()},this.fetchIdentity=t=>Se.fetchIdentity(t),this.setAddressExplorerUrl=(t,r)=>{R.setAddressExplorerUrl(t,r)},this.setSmartAccountDeployed=(t,r)=>{R.setSmartAccountDeployed(t,r)},this.setConnectedWalletInfo=(t,r)=>{R.setConnectedWalletInfo(t,r)},this.setSmartAccountEnabledNetworks=(t,r)=>{m.setSmartAccountEnabledNetworks(t,r)},this.setPreferredAccountType=(t,r)=>{R.setPreferredAccountType(t,r)},this.getReownName=t=>oi.getNamesForAddress(t),this.setEIP6963Enabled=t=>{U.setEIP6963Enabled(t)},this.setClientId=t=>{Se.setClientId(t)},this.getConnectorImage=t=>he.getConnectorImage(t),this.handleUnsafeRPCRequest=()=>{if(this.isOpen()){if(this.isTransactionStackEmpty())return;this.redirect("ApproveTransaction")}else this.open({view:"ApproveTransaction"})},this.options=e,this.initialize(e)}static getInstance(){return this.instance}async initialize(e){this.caipNetworks=this.extendCaipNetworks(e),this.defaultCaipNetwork=this.extendDefaultCaipNetwork(e),await this.initControllers(e),this.createAuthProvider(),await this.createUniversalProvider(),this.createClients(),m.initialize(e.adapters??[]),this.chainAdapters=await this.createAdapters(e.adapters),await this.initChainAdapters(),this.syncRequestedNetworks(),await this.initOrContinue(),await this.syncExistingConnection(),this.version=e.sdkVersion}async open(e){await this.initOrContinue(),te.open(e)}async close(){await this.initOrContinue(),te.close()}setLoading(e){te.setLoading(e)}getError(){return""}getChainId(){var e;return(e=m.state.activeCaipNetwork)==null?void 0:e.id}switchNetwork(e){var r;const t=(r=this.caipNetworks)==null?void 0:r.find(o=>o.id===e.id);if(!t){$n.open(Ws.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND,"error");return}m.switchActiveNetwork(t)}getWalletProvider(){return m.state.activeChain?Ze.state.providers[m.state.activeChain]:null}getWalletProviderType(){return m.state.activeChain?Ze.state.providerIds[m.state.activeChain]:null}subscribeProvider(){return null}getThemeMode(){return Te.state.themeMode}getThemeVariables(){return Te.state.themeVariables}setThemeMode(e){Te.setThemeMode(e),sc(Te.state.themeMode)}setThemeVariables(e){Te.setThemeVariables(e),uu(Te.state.themeVariables)}subscribeTheme(e){return Te.subscribe(e)}getWalletInfo(){return R.state.connectedWalletInfo}subscribeAccount(e){function t(){e({caipAddress:m.state.activeCaipAddress,address:M.getPlainAddress(m.state.activeCaipAddress),isConnected:!!m.state.activeCaipAddress,status:R.state.status})}m.subscribe(t),R.subscribe(t)}subscribeNetwork(e){return m.subscribe(({activeCaipNetwork:t})=>{e({caipNetwork:t,chainId:t==null?void 0:t.id,caipNetworkId:t==null?void 0:t.caipNetworkId})})}subscribeWalletInfo(e){return R.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){R.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){m.subscribeKey("activeCaipNetwork",e)}getState(){return en.state}subscribeState(e){return en.subscribe(e)}showErrorMessage(e){q.showError(e)}showSuccessMessage(e){q.showSuccess(e)}getEvent(){return{...z.state}}subscribeEvents(e){return z.subscribe(e)}replace(e){S.replace(e)}redirect(e){S.push(e)}popTransactionStack(e){S.popTransactionStack(e)}isOpen(){return te.state.open}isTransactionStackEmpty(){return S.state.transactionStack.length===0}isTransactionShouldReplaceView(){var e;return(e=S.state.transactionStack[S.state.transactionStack.length-1])==null?void 0:e.replace}async disconnect(){var e;await((e=this.connectionControllerClient)==null?void 0:e.disconnect())}async initControllers(e){var o;if(U.setDebug(e.debug),U.setProjectId(e.projectId),U.setSdkVersion(e.sdkVersion),!e.projectId){$n.open(Ws.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,"error");return}this.adapters=e.adapters;const t=this.getDefaultMetaData();if(!e.metadata&&t&&(e.metadata=t),this.setDefaultNetwork(),U.setAllWallets(e.allWallets),U.setIncludeWalletIds(e.includeWalletIds),U.setExcludeWalletIds(e.excludeWalletIds),e.excludeWalletIds&&ne.searchWalletByIds({ids:e.excludeWalletIds}),U.setFeaturedWalletIds(e.featuredWalletIds),U.setTokens(e.tokens),U.setTermsConditionsUrl(e.termsConditionsUrl),U.setPrivacyPolicyUrl(e.privacyPolicyUrl),U.setCustomWallets(e.customWallets),U.setFeatures(e.features),U.setEnableWalletConnect(e.enableWalletConnect!==!1),U.setEnableWallets(e.enableWallets!==!1),e.metadata&&U.setMetadata(e.metadata),e.themeMode&&Te.setThemeMode(e.themeMode),e.themeVariables&&Te.setThemeVariables(e.themeVariables),e.disableAppend&&U.setDisableAppend(!!e.disableAppend),e.siwx&&U.setSIWX(e.siwx),((o=e.adapters)==null?void 0:o.find(n=>n.namespace===Ce.CHAIN.EVM))&&e.siweConfig){if(e.siwx)throw new Error("Cannot set both `siweConfig` and `siwx` options");const n=await so(()=>Promise.resolve().then(()=>K3),void 0);if(typeof n.mapToSIWX!="function")throw new Error("Please update the `@reown/appkit-siwe` package to the latest version");U.setSIWX(n.mapToSIWX(e.siweConfig))}}getDefaultMetaData(){var e,t,r;return typeof window<"u"&&typeof document<"u"?{name:((e=document.getElementsByTagName("title")[0])==null?void 0:e.textContent)||"",description:((t=document.querySelector('meta[property="og:description"]'))==null?void 0:t.content)||"",url:window.location.origin,icons:[((r=document.querySelector('link[rel~="icon"]'))==null?void 0:r.href)||""]}:null}setUnsupportedNetwork(e){const t=this.getActiveChainNamespace();t&&m.setActiveCaipNetwork({id:e,caipNetworkId:`${t}:${e}`,name:"Unknown Network",chainNamespace:t,nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}})}extendCaipNetworks(e){return Rn.extendCaipNetworks(e.networks,{customNetworkImageUrls:e.chainImages,projectId:e.projectId})}extendDefaultCaipNetwork(e){const t=e.networks.find(o=>{var n;return o.id===((n=e.defaultNetwork)==null?void 0:n.id)});return t?Rn.extendCaipNetwork(t,{customNetworkImageUrls:e.chainImages,projectId:e.projectId}):void 0}createClients(){this.connectionControllerClient={connectWalletConnect:async e=>{var o,n,a,s,p,d,w;const t=this.getAdapter(m.state.activeChain);(o=this.universalProvider)==null||o.on("display_uri",C=>{e(C)}),this.setClientId(await((p=(s=(a=(n=this.universalProvider)==null?void 0:n.client)==null?void 0:a.core)==null?void 0:s.crypto)==null?void 0:p.getClientId())||null);let r=!1;if(this.universalProvider){const C=((d=this.caipNetworks)==null?void 0:d.map(b=>b.caipNetworkId))||[];r=await jt.universalProviderAuthenticate({universalProvider:this.universalProvider,chains:C,methods:_g})}r?this.close():await(t==null?void 0:t.connectWalletConnect(e,(w=this.getCaipNetwork())==null?void 0:w.id)),await this.syncWalletConnectAccount()},connectExternal:async({id:e,info:t,type:r,provider:o,chain:n,caipNetwork:a})=>{var d,w,C,b,y,T,_,I,B,W;if(n&&n!==m.state.activeChain&&!a){const D=(d=this.caipNetworks)==null?void 0:d.find(V=>V.chainNamespace===n);D&&this.setCaipNetwork(D)}const s=n?this.getAdapter(n):this.getAdapter(m.state.activeChain),p=await(s==null?void 0:s.connect({id:e,info:t,type:r,provider:o,chainId:(a==null?void 0:a.id)||((w=this.getCaipNetwork())==null?void 0:w.id),rpcUrl:((y=(b=(C=a==null?void 0:a.rpcUrls)==null?void 0:C.default)==null?void 0:b.http)==null?void 0:y[0])||((B=(I=(_=(T=this.getCaipNetwork())==null?void 0:T.rpcUrls)==null?void 0:_.default)==null?void 0:I.http)==null?void 0:B[0])}));p&&(this.syncProvider({...p,chainNamespace:n||m.state.activeChain}),await this.syncAccount({...p,chainNamespace:n||m.state.activeChain})),(W=this.caipNetworks)!=null&&W.some(D=>D.id===(p==null?void 0:p.chainId))||p!=null&&p.chainId&&this.setUnsupportedNetwork(p.chainId)},reconnectExternal:async({id:e,info:t,type:r,provider:o})=>{var a;const n=this.getAdapter(m.state.activeChain);n!=null&&n.reconnect&&await(n==null?void 0:n.reconnect({id:e,info:t,type:r,provider:o,chainId:(a=this.getCaipNetwork())==null?void 0:a.id}))},disconnect:async()=>{const e=this.getAdapter(m.state.activeChain),t=Ze.getProvider(m.state.activeChain),r=Ze.state.providerIds[m.state.activeChain];await(e==null?void 0:e.disconnect({provider:t,providerType:r})),this.setStatus("disconnected",m.state.activeChain),Ne.removeItem(Re.CONNECTED_CONNECTOR),Ne.removeItem(Re.ACTIVE_CAIP_NETWORK_ID),m.state.chains.forEach(o=>{this.resetAccount(o.namespace)})},checkInstalled:e=>e?e.some(t=>{var r;return!!((r=window.ethereum)!=null&&r[String(t)])}):!!window.ethereum,signMessage:async e=>{const t=this.getAdapter(m.state.activeChain),r=await(t==null?void 0:t.signMessage({message:e,address:R.state.address,provider:Ze.getProvider(m.state.activeChain)}));return(r==null?void 0:r.signature)||""},sendTransaction:async e=>{if(e.chainNamespace==="eip155"){const t=this.getAdapter(m.state.activeChain),r=await(t==null?void 0:t.sendTransaction(e));return(r==null?void 0:r.hash)||""}return""},estimateGas:async e=>{if(e.chainNamespace==="eip155"){const t=this.getAdapter(m.state.activeChain),r=Ze.getProvider(m.state.activeChain),o=this.getCaipNetwork();if(!o)throw new Error("CaipNetwork is undefined");const n=await(t==null?void 0:t.estimateGas({...e,provider:r,caipNetwork:o}));return(n==null?void 0:n.gas)||0n}return 0n},getEnsAvatar:async()=>{var r;const e=this.getAdapter(m.state.activeChain),t=await(e==null?void 0:e.getProfile({address:R.state.address,chainId:Number((r=this.getCaipNetwork())==null?void 0:r.id)}));return(t==null?void 0:t.profileImage)||!1},getEnsAddress:async e=>{const t=this.getAdapter(m.state.activeChain),r=this.getCaipNetwork();if(!r)return!1;const o=await(t==null?void 0:t.getEnsAddress({name:e,caipNetwork:r}));return(o==null?void 0:o.address)||!1},writeContract:async e=>{const t=this.getAdapter(m.state.activeChain),r=this.getCaipNetwork(),o=this.getCaipAddress(),n=Ze.getProvider(m.state.activeChain);if(!r||!o)throw new Error("CaipNetwork or CaipAddress is undefined");const a=await(t==null?void 0:t.writeContract({...e,caipNetwork:r,provider:n,caipAddress:o}));return a==null?void 0:a.hash},parseUnits:(e,t)=>{const r=this.getAdapter(m.state.activeChain);return(r==null?void 0:r.parseUnits({value:e,decimals:t}))??0n},formatUnits:(e,t)=>{const r=this.getAdapter(m.state.activeChain);return(r==null?void 0:r.formatUnits({value:e,decimals:t}))??"0"},getCapabilities:async e=>{const t=this.getAdapter(m.state.activeChain);await(t==null?void 0:t.getCapabilities(e))},grantPermissions:async e=>{const t=this.getAdapter(m.state.activeChain);return await(t==null?void 0:t.grantPermissions(e))},revokePermissions:async e=>{const t=this.getAdapter(m.state.activeChain);return t!=null&&t.revokePermissions?await t.revokePermissions(e):"0x"}},this.networkControllerClient={switchCaipNetwork:async e=>{var t,r,o;if(e)if(R.state.address&&e.chainNamespace===m.state.activeChain){const n=this.getAdapter(m.state.activeChain),a=Ze.getProvider(m.state.activeChain),s=Ze.state.providerIds[m.state.activeChain];await(n==null?void 0:n.switchNetwork({caipNetwork:e,provider:a,providerType:s})),this.setCaipNetwork(e),await this.syncAccount({address:R.state.address,chainId:(t=m.state.activeCaipNetwork)==null?void 0:t.id,chainNamespace:e.chainNamespace})}else if(R.state.address){const n=Ze.state.providerIds[m.state.activeChain];if(n===oe.CONNECTOR_TYPE_AUTH)try{m.state.activeChain=e.chainNamespace,await((o=(r=this.connectionControllerClient)==null?void 0:r.connectExternal)==null?void 0:o.call(r,{id:oe.AUTH_CONNECTOR_ID,provider:this.authProvider,chain:e.chainNamespace,chainId:e.id,type:oe.CONNECTOR_TYPE_AUTH,caipNetwork:e}))}catch{const s=this.getAdapter(e.chainNamespace);await(s==null?void 0:s.switchNetwork({caipNetwork:e,provider:this.authProvider,providerType:n}))}else if(n==="WALLET_CONNECT")this.setCaipNetwork(e),this.syncWalletConnectAccount();else{this.setCaipNetwork(e);const a=this.getAddressByChainNamespace(e.chainNamespace);a&&this.syncAccount({address:a,chainId:e.id,chainNamespace:e.chainNamespace})}}else this.setCaipNetwork(e)},getApprovedCaipNetworksData:async()=>{var t,r,o,n,a;if(Ze.state.providerIds[m.state.activeChain]===oe.CONNECTOR_TYPE_WALLET_CONNECT){const s=(r=(t=this.universalProvider)==null?void 0:t.session)==null?void 0:r.namespaces;return{supportsAllNetworks:((a=(n=(o=this.universalProvider)==null?void 0:o.session)==null?void 0:n.peer)==null?void 0:a.metadata.name)==="MetaMask Wallet",approvedCaipNetworkIds:this.getChainsFromNamespaces(s)}}return{supportsAllNetworks:!0,approvedCaipNetworkIds:[]}}},this.networkControllerClient&&this.connectionControllerClient&&ee.setClient(this.connectionControllerClient)}async handleDisconnect(){var e;await((e=this.connectionControllerClient)==null?void 0:e.disconnect())}async listenAuthConnector(e){var o,n,a;this.setLoading(!0);const t=e.getLoginEmailUsed();this.setLoading(t),t&&this.setStatus("connecting",m.state.activeChain);const{isConnected:r}=await e.isConnected();e.onRpcRequest(s=>{et.checkIfRequestExists(s)?et.checkIfRequestIsSafe(s)||this.handleUnsafeRPCRequest():(this.open(),console.error(se.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:s.method}),setTimeout(()=>{this.showErrorMessage(se.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),e.rejectRpcRequests())}),e.onRpcError(()=>{this.isOpen()&&(this.isTransactionStackEmpty()?this.close():this.popTransactionStack(!0))}),e.onRpcSuccess((s,p)=>{et.checkIfRequestIsSafe(p)||(this.isTransactionStackEmpty()?this.close():this.popTransactionStack())}),e.onNotConnected(()=>{const p=Ne.getItem(Re.CONNECTED_CONNECTOR)===oe.AUTH_CONNECTOR_ID;!r&&p&&(this.setCaipAddress(void 0,m.state.activeChain),this.setLoading(!1))}),e.onIsConnected(()=>{e.connect()}),e.onConnect(async s=>{this.syncProvider({type:oe.CONNECTOR_TYPE_AUTH,provider:e,id:oe.AUTH_CONNECTOR_ID,chainNamespace:m.state.activeChain});const p=m.state.activeChain==="eip155"?`eip155:${s.chainId}:${s.address}`:`${s.chainId}:${s.address}`;this.setCaipAddress(p,m.state.activeChain),this.setSmartAccountDeployed(!!s.smartAccountDeployed,m.state.activeChain),this.setPreferredAccountType(s.preferredAccountType,m.state.activeChain),this.setAllAccounts(s.accounts||[{address:s.address,type:s.preferredAccountType||"eoa"}],m.state.activeChain),await e.getSmartAccountEnabledNetworks(),this.setLoading(!1)}),e.onGetSmartAccountEnabledNetworks(s=>{this.setSmartAccountEnabledNetworks(s,m.state.activeChain)}),e.onSetPreferredAccount(({address:s,type:p})=>{s&&this.setPreferredAccountType(p,m.state.activeChain)}),r&&((o=this.connectionControllerClient)!=null&&o.connectExternal)?(await((a=this.connectionControllerClient)==null?void 0:a.connectExternal({id:oe.AUTH_CONNECTOR_ID,info:{name:oe.AUTH_CONNECTOR_ID},type:oe.CONNECTOR_TYPE_AUTH,provider:e,chainId:(n=m.state.activeCaipNetwork)==null?void 0:n.id})),this.setLoading(!1),this.setStatus("connected",m.state.activeChain)):(this.setLoading(!1),this.setStatus("disconnected",m.state.activeChain))}listenWalletConnect(){this.universalProvider&&(this.universalProvider.on("disconnect",()=>{this.chainNamespaces.forEach(e=>{this.resetAccount(e)}),ee.resetWcConnection()}),this.universalProvider.on("chainChanged",e=>{var o;const t=(o=this.caipNetworks)==null?void 0:o.find(n=>n.chainNamespace===m.state.activeChain&&n.id==e),r=this.getCaipNetwork();if(!t){this.setUnsupportedNetwork(e);return}(!r||(r==null?void 0:r.id)!==(t==null?void 0:t.id))&&this.setCaipNetwork(t)}))}listenAdapter(e){const t=this.getAdapter(e),r=de.getConnectionStatus();r==="connected"?this.setStatus("connecting",e):this.setStatus(r,e),t==null||t.on("switchNetwork",({address:o,chainId:n})=>{var a;n&&((a=this.caipNetworks)!=null&&a.find(s=>s.id===n))?m.state.activeChain===e&&o?this.syncAccount({address:o,chainId:n,chainNamespace:e}):m.state.activeChain===e&&R.state.address&&this.syncAccount({address:R.state.address,chainId:n,chainNamespace:e}):this.setUnsupportedNetwork(n)}),t==null||t.on("disconnect",()=>{m.state.activeChain===e&&this.handleDisconnect()}),t==null||t.on("accountChanged",({address:o,chainId:n})=>{var a,s;m.state.activeChain===e&&n?this.syncAccount({address:o,chainId:n,chainNamespace:e}):m.state.activeChain===e&&((a=m.state.activeCaipNetwork)!=null&&a.id)&&this.syncAccount({address:o,chainId:(s=m.state.activeCaipNetwork)==null?void 0:s.id,chainNamespace:e})})}getChainsFromNamespaces(e={}){return Object.values(e).flatMap(t=>{const r=t.chains||[],o=t.accounts.map(n=>{const[a,s]=n.split(":");return`${a}:${s}`});return Array.from(new Set([...r,...o]))})}async syncWalletConnectAccount(){const e=this.getAdapter(m.state.activeChain);de.setConnectedNamespace(m.state.activeChain),this.chainNamespaces.forEach(async t=>{var o,n,a,s,p,d,w,C;const r=(s=(a=(n=(o=this.universalProvider)==null?void 0:o.session)==null?void 0:n.namespaces)==null?void 0:a[t])==null?void 0:s.accounts[0];if(r){if(Ze.setProviderId(t,oe.CONNECTOR_TYPE_WALLET_CONNECT),this.caipNetworks&&m.state.activeCaipNetwork&&(e==null?void 0:e.namespace)!=="eip155"){const y=e==null?void 0:e.getWalletConnectProvider({caipNetworks:this.caipNetworks,provider:this.universalProvider,activeCaipNetwork:m.state.activeCaipNetwork});Ze.setProvider(t,y)}else Ze.setProvider(t,this.universalProvider);de.setConnectedConnector(oe.CONNECTOR_TYPE_WALLET_CONNECT);let b="";if(r.split(":").length===3?b=r.split(":")[2]:b=R.state.address,(e==null?void 0:e.adapterType)==="wagmi")try{await(e==null?void 0:e.connect({id:"walletConnect",type:"WALLET_CONNECT",chainId:(p=m.state.activeCaipNetwork)==null?void 0:p.id}))}catch{e!=null&&e.reconnect&&(e==null||e.reconnect({id:"walletConnect",type:"WALLET_CONNECT"}))}this.syncWalletConnectAccounts(t),await this.syncAccount({address:b,chainId:m.state.activeChain===t?(d=m.state.activeCaipNetwork)==null?void 0:d.id:(C=(w=this.caipNetworks)==null?void 0:w.find(y=>y.chainNamespace===t))==null?void 0:C.id,chainNamespace:t})}}),await m.setApprovedCaipNetworksData(m.state.activeChain)}syncWalletConnectAccounts(e){var r,o,n,a,s;const t=(s=(a=(n=(o=(r=this.universalProvider)==null?void 0:r.session)==null?void 0:o.namespaces)==null?void 0:n[e])==null?void 0:a.accounts)==null?void 0:s.map(p=>{const[,,d]=p.split(":");return d}).filter((p,d,w)=>w.indexOf(p)===d);t&&this.setAllAccounts(t.map(p=>({address:p,type:"eoa"})),e)}syncProvider({type:e,provider:t,id:r,chainNamespace:o}){Ze.setProviderId(o,e),Ze.setProvider(o,t),de.setConnectedConnector(r),de.setConnectedNamespace(m.state.activeChain)}async syncAccount({address:e,chainId:t,chainNamespace:r}){var o,n;if(this.setPreferredAccountType(R.state.preferredAccountType?R.state.preferredAccountType:"eoa",m.state.activeChain),this.setCaipAddress(`${r}:${t}:${e}`,r),this.setStatus("connected",r),r===m.state.activeChain){const a=(o=this.caipNetworks)==null?void 0:o.find(d=>d.id===t&&d.chainNamespace===r);a?this.setCaipNetwork(a):this.setCaipNetwork((n=this.caipNetworks)==null?void 0:n.find(d=>d.chainNamespace===r)),this.syncConnectedWalletInfo(r);const s=this.getAdapter(r),p=await(s==null?void 0:s.getBalance({address:e,chainId:t,caipNetwork:a||this.getCaipNetwork(),tokens:this.options.tokens}));p&&this.setBalance(p.balance,p.symbol,r),await this.syncIdentity({address:e,chainId:Number(t),chainNamespace:r})}}syncConnectedWalletInfo(e){var o;const t=Ne.getItem(Re.CONNECTED_CONNECTOR),r=Ze.state.providerIds[e];if(r===oe.CONNECTOR_TYPE_ANNOUNCED||r===oe.CONNECTOR_TYPE_INJECTED){if(t){const n=this.getConnectors().find(a=>a.id===t);n!=null&&n.info&&this.setConnectedWalletInfo({...n.info},e)}}else if(r===oe.CONNECTOR_TYPE_WALLET_CONNECT){const n=Ze.getProvider(e);n!=null&&n.session&&this.setConnectedWalletInfo({...n.session.peer.metadata,name:n.session.peer.metadata.name,icon:(o=n.session.peer.metadata.icons)==null?void 0:o[0]},e)}else if(r===oe.COINBASE_CONNECTOR_ID){const n=this.getConnectors().find(a=>a.id===oe.COINBASE_CONNECTOR_ID);this.setConnectedWalletInfo({name:"Coinbase Wallet",icon:this.getConnectorImage(n)},e)}else t&&this.setConnectedWalletInfo({name:t},e)}async syncIdentity({address:e,chainId:t,chainNamespace:r}){try{const{name:o,avatar:n}=await this.fetchIdentity({address:e});if(this.setProfileName(o,r),this.setProfileImage(n,r),!o){await this.syncReownName(e,r);const a=this.getAdapter(r),s=await(a==null?void 0:a.getProfile({address:e,chainId:Number(t)}));s!=null&&s.profileName?(this.setProfileName(s.profileName,r),s.profileImage&&this.setProfileImage(s.profileImage,r)):(await this.syncReownName(e,r),this.setProfileImage(null,r))}}catch{t===1?await this.syncReownName(e,r):(await this.syncReownName(e,r),this.setProfileImage(null,r))}}async syncReownName(e,t){try{const r=await this.getReownName(e);if(r[0]){const o=r[0];this.setProfileName(o.name,t)}else this.setProfileName(null,t)}catch{this.setProfileName(null,t)}}syncRequestedNetworks(){var t;const e=[...new Set((t=this.caipNetworks)==null?void 0:t.map(r=>r.chainNamespace))];this.chainNamespaces=e,e.forEach(r=>{var o;return this.setRequestedCaipNetworks(((o=this.caipNetworks)==null?void 0:o.filter(n=>n.chainNamespace===r))??[],r)})}async syncExistingConnection(){var r,o,n,a,s,p;const e=Ne.getItem(Re.CONNECTED_CONNECTOR),t=Ne.getItem(Re.CONNECTED_NAMESPACE);if(e===oe.CONNECTOR_TYPE_WALLET_CONNECT&&t)this.syncWalletConnectAccount();else if(e&&e!==oe.CONNECTOR_TYPE_W3M_AUTH&&t){this.setStatus("connecting",t);const d=this.getAdapter(t),w=await(d==null?void 0:d.syncConnection({id:e,chainId:(r=this.getCaipNetwork())==null?void 0:r.id,namespace:t,rpcUrl:(s=(a=(n=(o=this.getCaipNetwork())==null?void 0:o.rpcUrls)==null?void 0:n.default)==null?void 0:a.http)==null?void 0:s[0]}));w?(this.syncProvider({...w,chainNamespace:t}),await this.syncAccount({...w,chainNamespace:t}),this.setStatus("connected",t)):this.setStatus("disconnected",t),(p=this.caipNetworks)!=null&&p.some(C=>C.id===(w==null?void 0:w.chainId))||w!=null&&w.chainId&&this.setUnsupportedNetwork(w.chainId)}else e!==oe.CONNECTOR_TYPE_W3M_AUTH&&this.setStatus("disconnected",m.state.activeChain)}getAdapter(e){var t;return(t=this.chainAdapters)==null?void 0:t[e]}createUniversalProvider(){var e;return!this.universalProviderInitPromise&&typeof window<"u"&&((e=this.options)!=null&&e.projectId)&&(this.universalProviderInitPromise=this.initializeUniversalAdapter()),this.universalProviderInitPromise}async initializeUniversalAdapter(){var t,r,o,n,a,s,p,d,w;const e={projectId:(t=this.options)==null?void 0:t.projectId,metadata:{name:(r=this.options)!=null&&r.metadata?(o=this.options)==null?void 0:o.metadata.name:"",description:(n=this.options)!=null&&n.metadata?(a=this.options)==null?void 0:a.metadata.description:"",url:(s=this.options)!=null&&s.metadata?(p=this.options)==null?void 0:p.metadata.url:"",icons:(d=this.options)!=null&&d.metadata?(w=this.options)==null?void 0:w.metadata.icons:[""]}};this.universalProvider=await kd.init(e)}async getUniversalProvider(){if(!this.universalProvider)try{await this.createUniversalProvider()}catch{throw new Error("AppKit:getUniversalProvider - Cannot create provider")}return this.universalProvider}createAuthProvider(){var r,o,n,a,s,p,d,w,C,b;const e=((o=(r=this.options)==null?void 0:r.features)==null?void 0:o.email)===void 0?me.DEFAULT_FEATURES.email:(a=(n=this.options)==null?void 0:n.features)==null?void 0:a.email,t=(p=(s=this.options)==null?void 0:s.features)!=null&&p.socials?((C=(w=(d=this.options)==null?void 0:d.features)==null?void 0:w.socials)==null?void 0:C.length)>0:me.DEFAULT_FEATURES.socials;(b=this.options)!=null&&b.projectId&&(e||t)&&(this.authProvider=_r.getInstance({projectId:this.options.projectId}),this.listenAuthConnector(this.authProvider))}async createAdapters(e){return this.universalProvider||(this.universalProvider=await this.getUniversalProvider()),this.syncRequestedNetworks(),this.chainNamespaces.reduce((t,r)=>{var n;const o=e==null?void 0:e.find(a=>a.namespace===r);return o?(t[r]=o,t[r].namespace=r,t[r].construct({namespace:r,projectId:(n=this.options)==null?void 0:n.projectId,networks:this.caipNetworks}),this.universalProvider&&t[r].setUniversalProvider(this.universalProvider),this.authProvider&&t[r].setAuthProvider(this.authProvider),t[r].syncConnectors(this.options,this)):(t[r]=new yg({namespace:r,networks:this.caipNetworks}),this.universalProvider&&t[r].setUniversalProvider(this.universalProvider),this.authProvider&&t[r].setAuthProvider(this.authProvider)),m.state.chains.set(r,{namespace:r,connectionControllerClient:this.connectionControllerClient,networkControllerClient:this.networkControllerClient,networkState:Tg,accountState:Eg,caipNetworks:this.caipNetworks??[]}),t},{})}async initChainAdapters(){await Promise.all(this.chainNamespaces.map(async e=>{var t,r;this.options&&(this.listenAdapter(e),this.setConnectors(((r=(t=this.chainAdapters)==null?void 0:t[e])==null?void 0:r.connectors)||[]))})),this.listenWalletConnect()}setDefaultNetwork(){var o,n;const e=Ne.getItem(Re.ACTIVE_CAIP_NETWORK_ID),r=(e&&((o=this.caipNetworks)!=null&&o.length)?this.caipNetworks.find(a=>a.caipNetworkId===e):void 0)||this.defaultCaipNetwork||((n=this.caipNetworks)==null?void 0:n[0]);r&&m.setActiveCaipNetwork(r)}async initOrContinue(){return!this.initPromise&&!bl&&M.isClient()&&(bl=!0,this.initPromise=new Promise(async e=>{await Promise.all([so(()=>Promise.resolve().then(()=>vg),void 0),so(()=>Promise.resolve().then(()=>X3),void 0)]);const t=document.createElement("w3m-modal");U.state.disableAppend||document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}const Ag="1.5.3";var ht=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};class ft extends A{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.caipAddress=m.state.activeCaipAddress,this.balanceVal=R.state.balance,this.balanceSymbol=R.state.balanceSymbol,this.profileName=R.state.profileName,this.profileImage=R.state.profileImage,this.network=m.state.activeCaipNetwork,this.networkImage=he.getNetworkImage(this.network),this.isSupported=!0,this.unsubscribe.push($e.subscribeNetworkImages(()=>{this.networkImage=he.getNetworkImage(this.network)}),m.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),R.subscribeKey("balance",e=>this.balanceVal=e),R.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),R.subscribeKey("profileName",e=>this.profileName=e),R.subscribeKey("profileImage",e=>this.profileImage=e),m.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=he.getNetworkImage(e),this.isSupported=e!=null&&e.chainNamespace?m.checkIfSupportedNetwork(e==null?void 0:e.chainNamespace):!0}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!m.state.activeChain)return null;const e=this.balance==="show";return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!this.isSupported}
        address=${O(M.getPlainAddress(this.caipAddress))}
        profileName=${O(this.profileName)}
        networkSrc=${O(this.networkImage)}
        avatarSrc=${O(this.profileImage)}
        balance=${e?M.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isSupported?te.open():te.open({view:"UnsupportedChain"})}}ht([h({type:Boolean})],ft.prototype,"disabled",void 0);ht([h()],ft.prototype,"balance",void 0);ht([h()],ft.prototype,"charsStart",void 0);ht([h()],ft.prototype,"charsEnd",void 0);ht([v()],ft.prototype,"caipAddress",void 0);ht([v()],ft.prototype,"balanceVal",void 0);ht([v()],ft.prototype,"balanceSymbol",void 0);ht([v()],ft.prototype,"profileName",void 0);ht([v()],ft.prototype,"profileImage",void 0);ht([v()],ft.prototype,"network",void 0);ht([v()],ft.prototype,"networkImage",void 0);ht([v()],ft.prototype,"isSupported",void 0);let Cl=class extends ft{};Cl=ht([E("w3m-account-button")],Cl);let xl=class extends ft{};xl=ht([E("appkit-account-button")],xl);const Sg=N`
  :host {
    display: block;
    width: max-content;
  }
`;var Qt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};class Wt extends A{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.caipAddress=m.state.activeCaipAddress,this.isLoading=te.state.loading}firstUpdated(){this.unsubscribe.push(m.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),te.subscribeKey("loading",e=>this.isLoading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress&&!this.isLoading?l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${O(this.balance)}
            .charsStart=${O(this.charsStart)}
            .charsEnd=${O(this.charsEnd)}
          >
          </appkit-account-button>
        `:l`
          <appkit-connect-button
            size=${O(this.size)}
            label=${O(this.label)}
            loadingLabel=${O(this.loadingLabel)}
          ></appkit-connect-button>
        `}}Wt.styles=Sg;Qt([h({type:Boolean})],Wt.prototype,"disabled",void 0);Qt([h()],Wt.prototype,"balance",void 0);Qt([h()],Wt.prototype,"size",void 0);Qt([h()],Wt.prototype,"label",void 0);Qt([h()],Wt.prototype,"loadingLabel",void 0);Qt([h()],Wt.prototype,"charsStart",void 0);Qt([h()],Wt.prototype,"charsEnd",void 0);Qt([v()],Wt.prototype,"caipAddress",void 0);Qt([v()],Wt.prototype,"isLoading",void 0);let yl=class extends Wt{};yl=Qt([E("w3m-button")],yl);let El=class extends Wt{};El=Qt([E("appkit-button")],El);var fr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};class wr extends A{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=te.state.open,this.loading=te.state.loading,this.unsubscribe.push(te.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return l`
      <wui-connect-button
        size=${O(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?te.close():this.loading||te.open()}}fr([h()],wr.prototype,"size",void 0);fr([h()],wr.prototype,"label",void 0);fr([h()],wr.prototype,"loadingLabel",void 0);fr([v()],wr.prototype,"open",void 0);fr([v()],wr.prototype,"loading",void 0);let Tl=class extends wr{};Tl=fr([E("w3m-connect-button")],Tl);let _l=class extends wr{};_l=fr([E("appkit-connect-button")],_l);const Ig=N`
  :host {
    display: block;
    width: max-content;
  }
`;var zi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};class _i extends A{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=m.state.activeCaipNetwork,this.networkImage=he.getNetworkImage(this.network),this.caipAddress=m.state.activeCaipAddress,this.loading=te.state.loading,this.isSupported=!0,this.unsubscribe.push($e.subscribeNetworkImages(()=>{this.networkImage=he.getNetworkImage(this.network)}),m.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),m.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=he.getNetworkImage(e),this.isSupported=e!=null&&e.chainNamespace?m.checkIfSupportedNetwork(e.chainNamespace):!0}),te.subscribeKey("loading",e=>this.loading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.network?m.checkIfSupportedNetwork(this.network.chainNamespace):!0;return l`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!e}
        imageSrc=${O(this.networkImage)}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(z.sendEvent({type:"track",event:"CLICK_NETWORKS"}),te.open({view:"Networks"}))}}_i.styles=Ig;zi([h({type:Boolean})],_i.prototype,"disabled",void 0);zi([h({type:String})],_i.prototype,"label",void 0);zi([v()],_i.prototype,"network",void 0);zi([v()],_i.prototype,"networkImage",void 0);zi([v()],_i.prototype,"caipAddress",void 0);zi([v()],_i.prototype,"loading",void 0);zi([v()],_i.prototype,"isSupported",void 0);let kl=class extends _i{};kl=zi([E("w3m-network-button")],kl);let Al=class extends _i{};Al=zi([E("appkit-network-button")],Al);const Rg=N`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var Ng={};const $i={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:Ng.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};var xc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Eo=class extends A{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=S.state.view,this.viewDirection="",this.unsubscribe.push(S.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{const t=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=t,this.style.animation="unset"},$i.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return l`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return l`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return l`<w3m-account-view></w3m-account-view>`;case"AllWallets":return l`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return l`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return l`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return l`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return l`<w3m-connect-view></w3m-connect-view>`;case"Create":return l`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return l`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return l`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return l`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return l`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return l`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return l`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return l`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return l`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return l`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return l`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return l`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return l`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return l`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return l`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return l`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return l`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return l`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return l`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return l`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return l`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return l`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return l`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return l`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return l`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return l`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return l`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return l`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return l`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return l`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return l`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return l`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return l`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return l`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return l`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return l`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return l`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return l`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return l`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return l`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return l`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return l`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return l`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return l`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return l`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;default:return l`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){gt.hide();let t=$i.VIEW_DIRECTION.Next;const{history:r}=S.state;r.length<this.prevHistoryLength&&(t=$i.VIEW_DIRECTION.Prev),this.prevHistoryLength=r.length,this.viewDirection=t,setTimeout(()=>{this.view=e},$i.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};Eo.styles=Rg;xc([v()],Eo.prototype,"view",void 0);xc([v()],Eo.prototype,"viewDirection",void 0);Eo=xc([E("w3m-router")],Eo);const $g=N`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var Tn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Pg={USD:"$",EUR:"€",GBP:"£"},Og=[100,250,500,1e3];let mi=class extends A{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=m.state.activeCaipAddress,this.loading=te.state.loading,this.paymentCurrency=be.state.paymentCurrency,this.paymentAmount=be.state.paymentAmount,this.purchaseAmount=be.state.purchaseAmount,this.quoteLoading=be.state.quotesLoading,this.unsubscribe.push(m.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),te.subscribeKey("loading",e=>{this.loading=e}),be.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${Og.map(e=>{var t;return l`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${Pg[((t=this.paymentCurrency)==null?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?l`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:l`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||te.open({view:"OnRampProviders"})}openModal(){te.open({view:"Connect"})}async onPaymentAmountChange(e){be.setPaymentAmount(Number(e.detail)),await be.getQuote()}async selectPresetAmount(e){be.setPaymentAmount(e),await be.getQuote()}};mi.styles=$g;Tn([h({type:Boolean})],mi.prototype,"disabled",void 0);Tn([v()],mi.prototype,"caipAddress",void 0);Tn([v()],mi.prototype,"loading",void 0);Tn([v()],mi.prototype,"paymentCurrency",void 0);Tn([v()],mi.prototype,"paymentAmount",void 0);Tn([v()],mi.prototype,"purchaseAmount",void 0);Tn([v()],mi.prototype,"quoteLoading",void 0);mi=Tn([E("w3m-onramp-widget")],mi);var ki=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Zt=class extends A{constructor(){super(),this.usubscribe=[],this.networkImages=$e.state.networkImages,this.address=R.state.address,this.profileImage=R.state.profileImage,this.profileName=R.state.profileName,this.network=m.state.activeCaipNetwork,this.preferredAccountType=R.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(R.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):te.close()}),R.subscribeKey("preferredAccountType",e=>this.preferredAccountType=e),m.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var t,r,o;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((r=(t=this.network)==null?void 0:t.assets)==null?void 0:r.imageId)??""];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${O(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${re.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${O(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((o=this.network)==null?void 0:o.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=de.getConnectedConnector(),t=Y.getAuthConnector();return!m.checkIfNamesSupported()||!t||e!=="ID_AUTH"||this.profileName?null:l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=de.getConnectedConnector(),t=Y.getAuthConnector(),{origin:r}=location;return!t||e!=="ID_AUTH"||r.includes(me.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=m.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var n;return o===((n=this.network)==null?void 0:n.id)});return t||!r}onCopyAddress(){try{this.address&&(M.copyToClopboard(this.address),q.showSuccess("Address copied"))}catch{q.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=m.checkIfSmartAccountEnabled(),t=de.getConnectedConnector();return!Y.getAuthConnector()||t!=="ID_AUTH"||!e?null:(this.switched||(this.text=this.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){S.push("ChooseAccountName")}async changePreferredAccountType(){const e=m.checkIfSmartAccountEnabled(),t=this.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT||!e?se.ACCOUNT_TYPES.EOA:se.ACCOUNT_TYPES.SMART_ACCOUNT;Y.getAuthConnector()&&(this.loading=!0,await ee.setPreferredAccountType(t),this.text=t===se.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,ge.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&S.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await ee.disconnect(),z.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),te.close()}catch{z.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),q.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){z.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),S.push("UpgradeEmailWallet")}};ki([v()],Zt.prototype,"address",void 0);ki([v()],Zt.prototype,"profileImage",void 0);ki([v()],Zt.prototype,"profileName",void 0);ki([v()],Zt.prototype,"network",void 0);ki([v()],Zt.prototype,"preferredAccountType",void 0);ki([v()],Zt.prototype,"disconnecting",void 0);ki([v()],Zt.prototype,"loading",void 0);ki([v()],Zt.prototype,"switched",void 0);ki([v()],Zt.prototype,"text",void 0);Zt=ki([E("w3m-account-settings-view")],Zt);var Lg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Sl=class extends A{render(){const e=de.getConnectedConnector(),t=Y.getAuthConnector();return l`
      ${t&&e==="ID_AUTH"?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};Sl=Lg([E("w3m-account-view")],Sl);var yc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ta=class extends A{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=M.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return l`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            badge=${O(this.badge)}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list badge=${O(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",q.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return M.isMobile()?l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){S.push("ConnectingWalletConnect")}};yc([v()],Ta.prototype,"search",void 0);yc([v()],Ta.prototype,"badge",void 0);Ta=yc([E("w3m-all-wallets-view")],Ta);const Dg=N`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var Jt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yt=class extends A{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=be.state.selectedProvider,this.uri=ee.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(be.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var r,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(r=this.selectedOnRampProvider)==null?void 0:r.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return l`
      <wui-flex
        data-error=${O(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${O((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=R.state.address,t=U.state.projectId;if(!e)throw new Error("No address found");(await Se.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter(n=>new Date(n.metadata.minedAt)>new Date(this.startTime)||n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),S.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){q.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,M.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?l`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=Te.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){q.showError("No link found"),S.goBack();return}try{M.copyToClopboard(this.selectedOnRampProvider.url),q.showSuccess("Link copied")}catch{q.showError("Failed to copy")}}};yt.styles=Dg;Jt([v()],yt.prototype,"intervalId",void 0);Jt([v()],yt.prototype,"selectedOnRampProvider",void 0);Jt([v()],yt.prototype,"uri",void 0);Jt([v()],yt.prototype,"ready",void 0);Jt([v()],yt.prototype,"showRetry",void 0);Jt([v()],yt.prototype,"buffering",void 0);Jt([v()],yt.prototype,"error",void 0);Jt([v()],yt.prototype,"startTime",void 0);Jt([h({type:Boolean})],yt.prototype,"isMobile",void 0);Jt([h()],yt.prototype,"onRetry",void 0);yt=Jt([E("w3m-buy-in-progress-view")],yt);const Ug=N`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Gr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fn=class extends A{constructor(){super(),this.unsubscribe=[],this.connectors=Y.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.features=U.state.features,this.walletGuide="get-started",this.checked=!1,this.unsubscribe.push(Y.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(t=>t.type==="AUTH")}),U.subscribeKey("features",e=>this.features=e))}disconnectedCallback(){var t;this.unsubscribe.forEach(r=>r());const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".connect");e==null||e.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".connect");requestAnimationFrame(this.handleConnectListScroll.bind(this)),e==null||e.addEventListener("scroll",this.handleConnectListScroll.bind(this))}render(){var y,T;const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state,r=(y=U.state.features)==null?void 0:y.legalCheckbox,a=!!(e||t)&&!!r&&this.walletGuide==="get-started"&&!this.checked,s={connect:!0,disabled:a},p=(T=this.features)==null?void 0:T.socials,d=U.state.enableWallets,C=p&&p.length||this.authConnector,b=a?-1:void 0;return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex flexDirection="column" class=${oo(s)}>
          <wui-flex
            flexDirection="column"
            .padding=${C&&d&&this.walletGuide==="get-started"?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            <w3m-email-login-widget
              walletGuide=${this.walletGuide}
              tabIdx=${O(b)}
            ></w3m-email-login-widget>
            <w3m-social-login-widget tabIdx=${O(b)}></w3m-social-login-widget>
            ${this.walletListTemplate(b)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(a)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}walletListTemplate(e){var n,a;const t=(n=this.features)==null?void 0:n.socials,r=(a=this.features)==null?void 0:a.emailShowWallets;return!U.state.enableWallets||(M.isTelegram()&&M.isIos()&&ee.connectWalletConnect().catch(s=>({})),this.walletGuide==="explore")?null:this.authConnector&&t?this.authConnector&&r?l`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connector-list tabIdx=${O(e)}></w3m-connector-list>
            <wui-flex class="all-wallets">
              <w3m-all-wallets-widget tabIdx=${O(e)}></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:l`<wui-list-button
        tabIdx=${O(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list tabIdx=${O(e)}></w3m-wallet-login-list>`}guideTemplate(e=!1){var s;const t=(s=this.features)==null?void 0:s.socials,r=U.state.enableWallets,o=t&&t.length,n={guide:!0,disabled:e},a=e?-1:void 0;return!this.authConnector&&!o||!r?null:this.walletGuide==="explore"?l`
        <wui-flex
          flexDirection="column"
          .padding=${["0","0","xl","0"]}
          class=${oo(n)}
        >
          <w3m-wallet-guide walletGuide=${this.walletGuide}></w3m-wallet-guide>
        </wui-flex>
      `:l`
      <wui-flex
        flexDirection="column"
        .padding=${["xl","0","xl","0"]}
        class=${oo(n)}
      >
        <w3m-wallet-guide
          tabIdx=${O(a)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:l`<w3m-legal-checkbox
      @checkboxChange=${this.onCheckboxChange.bind(this)}
      data-testid="w3m-legal-checkbox"
    ></w3m-legal-checkbox>`}handleConnectListScroll(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".connect");!e||e.scrollHeight<=470||(e.style.setProperty("--connect-scroll--top-opacity",Nn.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",Nn.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}onContinueWalletClick(){S.push("ConnectWallets")}onCheckboxChange(e){this.checked=!!e.detail}};fn.styles=Ug;Gr([v()],fn.prototype,"connectors",void 0);Gr([v()],fn.prototype,"authConnector",void 0);Gr([v()],fn.prototype,"features",void 0);Gr([h()],fn.prototype,"walletGuide",void 0);Gr([v()],fn.prototype,"checked",void 0);fn=Gr([E("w3m-connect-view")],fn);const Wg=N`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Ai=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};class Ye extends A{constructor(){var e,t,r,o,n;super(),this.wallet=(e=S.state.data)==null?void 0:e.wallet,this.connector=(t=S.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=he.getWalletImage(this.wallet)??he.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=ee.state.wcUri,this.error=ee.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(ee.subscribeKey("wcUri",a=>{var s;this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),ee.subscribeKey("wcError",a=>this.error=a),ee.subscribeKey("buffering",a=>this.buffering=a)),M.isTelegram()&&M.isIos()&&ee.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),l`
      <wui-flex
        data-error=${O(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${O(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;this.buffering||(ee.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(t=this.onConnect)==null||t.call(this))}loaderTemplate(){const e=Te.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(M.copyToClopboard(this.uri),q.showSuccess("Link copied"))}catch{q.showError("Failed to copy")}}}Ye.styles=Wg;Ai([v()],Ye.prototype,"isRetrying",void 0);Ai([v()],Ye.prototype,"uri",void 0);Ai([v()],Ye.prototype,"error",void 0);Ai([v()],Ye.prototype,"ready",void 0);Ai([v()],Ye.prototype,"showRetry",void 0);Ai([v()],Ye.prototype,"secondaryBtnLabel",void 0);Ai([v()],Ye.prototype,"secondaryLabel",void 0);Ai([v()],Ye.prototype,"buffering",void 0);Ai([h({type:Boolean})],Ye.prototype,"isMobile",void 0);Ai([h()],Ye.prototype,"onRetry",void 0);var Mg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Il=class extends Ye{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(m.subscribeKey("activeCaipAddress",e=>{e&&te.close()}))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id!==oe.COINBASE_SDK_CONNECTOR_ID||!this.error)&&(await ee.connectExternal(this.connector,this.connector.chain),z.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){z.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Il=Mg([E("w3m-connecting-external-view")],Il);const Bg=N`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var Tu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _a=class extends A{constructor(){super(),this.unsubscribe=[],this.activeConnector=m.state.activeConnector,this.unsubscribe.push(m.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${O(he.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${(e=this.activeConnector)==null?void 0:e.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var e,t;return(t=(e=this.activeConnector)==null?void 0:e.connectors)==null?void 0:t.map(r=>r.name?l`
            <wui-list-wallet
              imageSrc=${O(he.getChainImage(r.chain))}
              name=${Ce.CHAIN_NAME_MAP[r.chain]}
              @click=${()=>this.onConnector(r)}
            ></wui-list-wallet>
          `:null)}onConnector(e){var r,o;const t=(o=(r=this.activeConnector)==null?void 0:r.connectors)==null?void 0:o.find(n=>n.chain===e.chain);if(!t){q.showError("Failed to find connector");return}t.id==="walletConnect"?M.isMobile()?S.push("AllWallets"):S.push("ConnectingWalletConnect"):S.push("ConnectingExternal",{connector:t})}};_a.styles=Bg;Tu([v()],_a.prototype,"activeConnector",void 0);_a=Tu([E("w3m-connecting-multi-chain-view")],_a);var ps=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let To=class extends A{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=S.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!U.state.siwx,this.determinePlatforms(),this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),me.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `:l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){if(this.platform!=="browser")try{const{wcPairingExpiry:t,status:r}=ee.state;(e||M.isPairingExpired(t)||r==="connecting")&&(await ee.connectWalletConnect(),this.finalizeConnection(),this.isSiwxEnabled||te.close())}catch(t){z.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),ee.setWcError(!0),M.isAllowedRetry(this.lastRetry)?(q.showError(t.message??"Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0)):q.showError(t.message??"Connection error")}}finalizeConnection(){var r;const{wcLinking:e,recentWallet:t}=ee.state;e&&de.setWalletConnectDeepLink(e),t&&de.setAppKitRecent(t),z.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((r=this.wallet)==null?void 0:r.name)||"Unknown"}})}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:o,rdns:n,name:a}=this.wallet,s=o==null?void 0:o.map(({injected_id:_})=>_).filter(Boolean),p=[...n?[n]:s??[],a],d=U.state.isUniversalProvider?!1:p.length,w=e,C=r,b=ee.checkInstalled(p),y=d&&b,T=t&&!M.isMobile();y&&this.platforms.push("browser"),w&&this.platforms.push(M.isMobile()?"mobile":"qrcode"),C&&this.platforms.push("web"),T&&this.platforms.push("desktop"),!y&&d&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ps([v()],To.prototype,"platform",void 0);ps([v()],To.prototype,"platforms",void 0);ps([v()],To.prototype,"isSiwxEnabled",void 0);To=ps([E("w3m-connecting-wc-view")],To);const jg=N`
  .continue-button-container {
    width: 100%;
  }
`;var _u=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ka=class extends A{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{M.openHref(rc.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){S.push("RegisterAccountName"),z.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}})}};ka.styles=jg;_u([v()],ka.prototype,"loading",void 0);ka=_u([E("w3m-choose-account-name-view")],ka);var Fg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Rl=class extends A{constructor(){var e;super(...arguments),this.wallet=(e=S.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&M.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&M.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&M.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&M.openHref(this.wallet.homepage,"_blank")}};Rl=Fg([E("w3m-downloads-view")],Rl);var zg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Vg="https://walletconnect.com/explorer";let Nl=class extends A{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{M.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=ne.state,{customWallets:r}=U.state;return[...t,...r??[],...e].slice(0,4).map(n=>l`
        <wui-list-wallet
          name=${n.name??"Unknown"}
          tagVariant="main"
          imageSrc=${O(he.getWalletImage(n))}
          @click=${()=>{M.openHref(n.homepage??Vg,"_blank")}}
        ></wui-list-wallet>
      `)}};Nl=zg([E("w3m-get-wallet-view")],Nl);const Hg=N`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var _n=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vi=class extends A{constructor(){super(),this.formRef=si(),this.usubscribe=[],this.name="",this.error="",this.loading=oi.state.loading,this.suggestions=oi.state.suggestions,this.registered=!1,this.profileName=R.state.profileName,this.onDebouncedNameInputChange=M.debounce(e=>{oi.validateName(e)?(this.error="",this.name=e,oi.getSuggestions(e),oi.isNameRegistered(e).then(t=>{this.registered=t})):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(oi.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),R.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach(t=>t()),(e=this.formRef.value)==null||e.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${ci(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?l`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?l`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:l`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;const e=this.registered?this.suggestions.filter(t=>t.name!==this.name):[];return l`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map(t=>this.availableNameTemplate(t.name))}
    </wui-flex>`}availableNameTemplate(e){return l` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&oi.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;const e=`${this.name}${Ce.WC_NAME_SUFFIX}`;z.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await oi.registerName(e),z.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(e){q.showError(e.message),z.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:`${this.name}${Ce.WC_NAME_SUFFIX}`,error:(e==null?void 0:e.message)||"Unknown error"}})}}onEnterKey(e){e.key==="Enter"&&this.isAllowedToSubmit()&&this.onSubmitName()}};vi.styles=Hg;_n([h()],vi.prototype,"errorMessage",void 0);_n([v()],vi.prototype,"name",void 0);_n([v()],vi.prototype,"error",void 0);_n([v()],vi.prototype,"loading",void 0);_n([v()],vi.prototype,"suggestions",void 0);_n([v()],vi.prototype,"registered",void 0);_n([v()],vi.prototype,"profileName",void 0);vi=_n([E("w3m-register-account-name-view")],vi);const Zg=N`
  .continue-button-container {
    width: 100%;
  }
`;var Gg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Fs=class extends A{render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{M.openHref(rc.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){S.replace("Account")}};Fs.styles=Zg;Fs=Gg([E("w3m-register-account-name-success-view")],Fs);const qg=N`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Ec=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _o=class extends A{constructor(){var e;super(),this.network=(e=S.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${O(he.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=de.getConnectedConnector();return Y.getAuthConnector()&&e==="AUTH"?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var r;const e=de.getConnectedConnector();return Y.getAuthConnector()&&e==="AUTH"?`Switching to ${((r=this.network)==null?void 0:r.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&await m.switchActiveNetwork(this.network)}catch{this.error=!0}}};_o.styles=qg;Ec([v()],_o.prototype,"showRetry",void 0);Ec([v()],_o.prototype,"error",void 0);_o=Ec([E("w3m-network-switch-view")],_o);const Kg=N`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Ho=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qn=class extends A{constructor(){super(),this.unsubscribe=[],this.network=m.state.activeCaipNetwork,this.requestedCaipNetworks=m.getAllRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=M.debounce(e=>{this.search=e},100),this.unsubscribe.push(m.subscribeKey("activeCaipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){z.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),S.push("WhatIsANetwork")}networksTemplate(){var o;const e=m.getAllRequestedCaipNetworks(),t=m.getAllApprovedCaipNetworkIds(),r=M.sortRequestedNetworks(t,e);return this.search?this.filteredNetworks=r==null?void 0:r.filter(n=>{var a;return(a=n==null?void 0:n.name)==null?void 0:a.toLowerCase().includes(this.search.toLowerCase())}):this.filteredNetworks=r,(o=this.filteredNetworks)==null?void 0:o.map(n=>{var a;return l`
        <wui-list-network
          .selected=${((a=this.network)==null?void 0:a.id)===n.id}
          imageSrc=${O(he.getNetworkImage(n))}
          type="network"
          name=${n.name??n.id}
          @click=${()=>this.onSwitchNetwork(n)}
          .disabled=${this.getNetworkDisabled(n)}
          data-testid=${`w3m-network-switch-${n.name??n.id}`}
        ></wui-list-network>
      `})}getNetworkDisabled(e){const t=e.chainNamespace,r=R.getCaipAddress(t),o=m.getAllApprovedCaipNetworkIds(),n=m.getNetworkProp("supportsAllNetworks",t)!==!1,a=de.getConnectedConnector(),s=Y.getAuthConnector();return!r||n||a==="ID_AUTH"&&s?!1:!(o!=null&&o.includes(e.caipNetworkId))}onSwitchNetwork(e){var p;const t=S.state.data;if(e.id===((p=this.network)==null?void 0:p.id))return;const o=e.chainNamespace!==m.state.activeChain,n=m.getAccountProp("caipAddress",e.chainNamespace),a=R.state.caipAddress,s=de.getConnectedConnector()==="ID_AUTH";o&&a&&!n&&!s?S.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):S.push("SwitchNetwork",{...t,network:e})}};qn.styles=Kg;Ho([v()],qn.prototype,"network",void 0);Ho([v()],qn.prototype,"requestedCaipNetworks",void 0);Ho([v()],qn.prototype,"filteredNetworks",void 0);Ho([v()],qn.prototype,"search",void 0);qn=Ho([E("w3m-networks-view")],qn);const Yg=N`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var Zo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Xg=7;let Kn=class extends A{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=be.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=Be.state.coinbaseTransactions,this.tokenImages=$e.state.tokenImages,this.unsubscribe.push(be.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),$e.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},Be.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),Be.clearCursor(),this.fetchTransactions()}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(t=>{var s,p,d;const r=nc.formatDate((s=t==null?void 0:t.metadata)==null?void 0:s.minedAt),o=t.transfers[0],n=o==null?void 0:o.fungible_info;if(!n)return null;const a=((p=n==null?void 0:n.icon)==null?void 0:p.url)||((d=this.tokenImages)==null?void 0:d[n.symbol||""]);return l`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${O(n.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${r}
          icon=${O(a)}
          symbol=${O(n.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const r=parseInt(t,10);return new Array(12).fill(null).map((n,a)=>a).reverse().map(n=>{var p;const a=Ji.getTransactionGroupTitle(r,n),s=(p=this.coinbaseTransactions[r])==null?void 0:p[n];return s?l`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${a}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(s)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=R.state.address,t=U.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await Be.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(n=>n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const n=R.state.address;await Be.fetchTransactions(n,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(Xg).fill(l` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};Kn.styles=Yg;Zo([v()],Kn.prototype,"selectedOnRampProvider",void 0);Zo([v()],Kn.prototype,"loading",void 0);Zo([v()],Kn.prototype,"coinbaseTransactions",void 0);Zo([v()],Kn.prototype,"tokenImages",void 0);Kn=Zo([E("w3m-onramp-activity-view")],Kn);const Qg=N`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Go=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Yn=class extends A{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=be.state.paymentCurrency,this.currencies=be.state.paymentCurrencies,this.currencyImages=$e.state.currencyImages,this.checked=!1,this.unsubscribe.push(be.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),$e.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var s;const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state,r=(s=U.state.features)==null?void 0:s.legalCheckbox,a=!!(e||t)&&!!r&&!this.checked;return l`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${O(a?"disabled":void 0)}
      >
        ${this.currenciesTemplate(a)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map(t=>{var r;return l`
        <wui-list-item
          imageSrc=${O((r=this.currencyImages)==null?void 0:r[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${O(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(be.setPaymentCurrency(e),te.close())}onCheckboxChange(e){this.checked=!!e.detail}};Yn.styles=Qg;Go([v()],Yn.prototype,"selectedCurrency",void 0);Go([v()],Yn.prototype,"currencies",void 0);Go([v()],Yn.prototype,"currencyImages",void 0);Go([v()],Yn.prototype,"checked",void 0);Yn=Go([E("w3m-onramp-fiat-select-view")],Yn);var ku=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let zs=class extends A{constructor(){super(),this.unsubscribe=[],this.providers=be.state.providers,this.unsubscribe.push(be.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async t=>t.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(t==null?void 0:t.url));Promise.all(e).then(t=>{this.providers=this.providers.map((r,o)=>({...r,url:t[o]||""}))})}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(m.state.activeChain??"eip155")).map(e=>l`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){be.setSelectedProvider(e),S.push("BuyInProgress"),M.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),z.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=R.state.address,t=m.state.activeCaipNetwork;if(!e)throw new Error("No address found");if(!(t!=null&&t.name))throw new Error("No network found");const r=me.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??me.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=be.state.purchaseCurrency,n=o?[o.symbol]:be.state.purchaseCurrencies.map(a=>a.symbol);return await Se.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:me.WC_COINBASE_PAY_SDK_CHAINS,assets:n}],partnerUserId:e,purchaseAmount:be.state.purchaseAmount})}};ku([v()],zs.prototype,"providers",void 0);zs=ku([E("w3m-onramp-providers-view")],zs);const Jg=N`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var qo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Xn=class extends A{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=be.state.purchaseCurrencies,this.tokens=be.state.purchaseCurrencies,this.tokenImages=$e.state.tokenImages,this.checked=!1,this.unsubscribe.push(be.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),$e.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var s;const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state,r=(s=U.state.features)==null?void 0:s.legalCheckbox,a=!!(e||t)&&!!r&&!this.checked;return l`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${O(a?"disabled":void 0)}
      >
        ${this.currenciesTemplate(a)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map(t=>{var r;return l`
        <wui-list-item
          imageSrc=${O((r=this.tokenImages)==null?void 0:r[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${O(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(be.setPurchaseCurrency(e),te.close())}onCheckboxChange(e){this.checked=!!e.detail}};Xn.styles=Jg;qo([v()],Xn.prototype,"selectedCurrency",void 0);qo([v()],Xn.prototype,"tokens",void 0);qo([v()],Xn.prototype,"tokenImages",void 0);qo([v()],Xn.prototype,"checked",void 0);Xn=qo([E("w3m-onramp-token-select-view")],Xn);const e2=N`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var Xe=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let je=class extends A{constructor(){var e;super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=(e=m.state.activeCaipNetwork)==null?void 0:e.caipNetworkId,this.initialized=Z.state.initialized,this.loadingQuote=Z.state.loadingQuote,this.loadingPrices=Z.state.loadingPrices,this.loadingTransaction=Z.state.loadingTransaction,this.sourceToken=Z.state.sourceToken,this.sourceTokenAmount=Z.state.sourceTokenAmount,this.sourceTokenPriceInUSD=Z.state.sourceTokenPriceInUSD,this.toToken=Z.state.toToken,this.toTokenAmount=Z.state.toTokenAmount,this.toTokenPriceInUSD=Z.state.toTokenPriceInUSD,this.inputError=Z.state.inputError,this.gasPriceInUSD=Z.state.gasPriceInUSD,this.fetchError=Z.state.fetchError,this.onDebouncedGetSwapCalldata=M.debounce(async()=>{await Z.swapTokens()},200),m.subscribeKey("activeCaipNetwork",t=>{this.caipNetworkId!==(t==null?void 0:t.caipNetworkId)&&(this.caipNetworkId=t==null?void 0:t.caipNetworkId,Z.resetState(),Z.initializeState())}),this.unsubscribe.push(te.subscribeKey("open",t=>{t||Z.resetState()}),S.subscribeKey("view",t=>{t.includes("Swap")||Z.resetValues()}),Z.subscribe(t=>{this.initialized=t.initialized,this.loadingQuote=t.loadingQuote,this.loadingPrices=t.loadingPrices,this.loadingTransaction=t.loadingTransaction,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.gasPriceInUSD=t.gasPriceInUSD,this.fetchError=t.fetchError}))}firstUpdated(){Z.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{Z.getNetworkTokenPrice(),Z.getMyTokensWithBalance(),Z.swapTokens()},1e4)}templateSwap(){return l`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount"}templateReplaceTokensButton(){return l`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return l`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){var s,p;const r=(s=Z.state.myTokensWithBalance)==null?void 0:s.find(d=>(d==null?void 0:d.address)===(t==null?void 0:t.address)),o=e==="toToken"?this.toTokenAmount:this.sourceTokenAmount,n=e==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let a=parseFloat(o)*n;return e==="toToken"&&(a-=this.gasPriceInUSD||0),l`<w3m-swap-input
      .value=${e==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loadingQuote&&e==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${(p=r==null?void 0:r.quantity)==null?void 0:p.numeric}
      .price=${r==null?void 0:r.price}
      .marketValue=${a}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){const r=e==="sourceToken"?this.sourceToken:this.toToken,o=(r==null?void 0:r.address)===m.getActiveNetworkTokenAddress();let n="0";if(!t){n="0",this.handleChangeAmount(e,n);return}if(!this.gasPriceInUSD){n=t,this.handleChangeAmount(e,n);return}const a=fe.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),s=o?fe.bigNumber(t).minus(a):fe.bigNumber(t);this.handleChangeAmount(e,s.isGreaterThan(0)?s.toFixed(20):"0")}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:l`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(e,t){Z.clearError(),e==="sourceToken"?Z.setSourceTokenAmount(t):Z.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,r=this.loadingQuote||this.loadingPrices||this.loadingTransaction,o=r||e||t||this.inputError;return l` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${r}
        .disabled=${o}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){Z.switchTokens()}onSwapPreview(){var e,t;if(this.fetchError){Z.swapTokens();return}z.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:((e=this.sourceToken)==null?void 0:e.symbol)||"",swapToToken:((t=this.toToken)==null?void 0:t.symbol)||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.push("SwapPreview")}};je.styles=e2;Xe([v()],je.prototype,"interval",void 0);Xe([v()],je.prototype,"detailsOpen",void 0);Xe([v()],je.prototype,"caipNetworkId",void 0);Xe([v()],je.prototype,"initialized",void 0);Xe([v()],je.prototype,"loadingQuote",void 0);Xe([v()],je.prototype,"loadingPrices",void 0);Xe([v()],je.prototype,"loadingTransaction",void 0);Xe([v()],je.prototype,"sourceToken",void 0);Xe([v()],je.prototype,"sourceTokenAmount",void 0);Xe([v()],je.prototype,"sourceTokenPriceInUSD",void 0);Xe([v()],je.prototype,"toToken",void 0);Xe([v()],je.prototype,"toTokenAmount",void 0);Xe([v()],je.prototype,"toTokenPriceInUSD",void 0);Xe([v()],je.prototype,"inputError",void 0);Xe([v()],je.prototype,"gasPriceInUSD",void 0);Xe([v()],je.prototype,"fetchError",void 0);je=Xe([E("w3m-swap-view")],je);const t2=N`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var Au=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Aa=class extends A{constructor(){var e,t,r,o;super(...arguments),this.unsubscribe=[],this.switchToChain=(e=S.state.data)==null?void 0:e.switchToChain,this.navigateTo=(t=S.state.data)==null?void 0:t.navigateTo,this.navigateWithReplace=(r=S.state.data)==null?void 0:r.navigateWithReplace,this.caipNetwork=(o=S.state.data)==null?void 0:o.network,this.activeChain=m.state.activeChain}firstUpdated(){this.unsubscribe.push(m.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?Ce.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=this.switchToChain==="eip155"?"Ethereum":this.switchToChain;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual
            name=${this.switchToChain==="eip155"?"eth":this.switchToChain}
          ></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button size="md" @click=${this.switchActiveChain.bind(this)}>Switch</wui-button>
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(this.caipNetwork?await m.switchActiveNetwork(this.caipNetwork):m.setActiveNamespace(this.switchToChain),te.close(),te.open({view:"Connect"}))}};Aa.styles=t2;Au([h()],Aa.prototype,"activeChain",void 0);Aa=Au([E("w3m-switch-active-chain-view")],Aa);const i2=N`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var Fe=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ue=class extends A{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=Z.state.approvalTransaction,this.swapTransaction=Z.state.swapTransaction,this.sourceToken=Z.state.sourceToken,this.sourceTokenAmount=Z.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=Z.state.sourceTokenPriceInUSD,this.toToken=Z.state.toToken,this.toTokenAmount=Z.state.toTokenAmount??"",this.toTokenPriceInUSD=Z.state.toTokenPriceInUSD,this.caipNetwork=m.state.activeCaipNetwork,this.balanceSymbol=R.state.balanceSymbol,this.gasPriceInUSD=Z.state.gasPriceInUSD,this.inputError=Z.state.inputError,this.loadingQuote=Z.state.loadingQuote,this.loadingApprovalTransaction=Z.state.loadingApprovalTransaction,this.loadingBuildTransaction=Z.state.loadingBuildTransaction,this.loadingTransaction=Z.state.loadingTransaction,this.unsubscribe.push(R.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&S.goBack()}),m.subscribeKey("activeCaipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),Z.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,e.inputError&&S.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction}))}firstUpdated(){Z.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{Z.getApprovalLoadingState()||Z.getTransaction()},1e4)}templateSwap(){var p,d,w,C;const e=`${re.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(p=this.sourceToken)==null?void 0:p.symbol}`,t=`${re.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(d=this.toToken)==null?void 0:d.symbol}`,r=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,o=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),n=re.formatNumberToLocalString(r),a=re.formatNumberToLocalString(o),s=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${n}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${(w=this.sourceToken)==null?void 0:w.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${(C=this.toToken)==null?void 0:C.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${s}
            ?disabled=${s}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:l`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){S.goBack()}onSendTransaction(){this.approvalTransaction?Z.sendTransactionForApproval(this.approvalTransaction):Z.sendTransactionForSwap(this.swapTransaction)}};Ue.styles=i2;Fe([v()],Ue.prototype,"interval",void 0);Fe([v()],Ue.prototype,"detailsOpen",void 0);Fe([v()],Ue.prototype,"approvalTransaction",void 0);Fe([v()],Ue.prototype,"swapTransaction",void 0);Fe([v()],Ue.prototype,"sourceToken",void 0);Fe([v()],Ue.prototype,"sourceTokenAmount",void 0);Fe([v()],Ue.prototype,"sourceTokenPriceInUSD",void 0);Fe([v()],Ue.prototype,"toToken",void 0);Fe([v()],Ue.prototype,"toTokenAmount",void 0);Fe([v()],Ue.prototype,"toTokenPriceInUSD",void 0);Fe([v()],Ue.prototype,"caipNetwork",void 0);Fe([v()],Ue.prototype,"balanceSymbol",void 0);Fe([v()],Ue.prototype,"gasPriceInUSD",void 0);Fe([v()],Ue.prototype,"inputError",void 0);Fe([v()],Ue.prototype,"loadingQuote",void 0);Fe([v()],Ue.prototype,"loadingApprovalTransaction",void 0);Fe([v()],Ue.prototype,"loadingBuildTransaction",void 0);Fe([v()],Ue.prototype,"loadingTransaction",void 0);Ue=Fe([E("w3m-swap-preview-view")],Ue);const n2=N`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var Vi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Gt=class extends A{constructor(){var e;super(),this.unsubscribe=[],this.targetToken=(e=S.state.data)==null?void 0:e.target,this.sourceToken=Z.state.sourceToken,this.sourceTokenAmount=Z.state.sourceTokenAmount,this.toToken=Z.state.toToken,this.myTokensWithBalance=Z.state.myTokensWithBalance,this.popularTokens=Z.state.popularTokens,this.searchValue="",this.unsubscribe.push(Z.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance}))}updated(){var r,o;const e=(r=this.renderRoot)==null?void 0:r.querySelector(".suggested-tokens-container");e==null||e.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");t==null||t.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var r,o;super.disconnectedCallback();const e=(r=this.renderRoot)==null?void 0:r.querySelector(".suggested-tokens-container"),t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");e==null||e.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t==null||t.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){this.targetToken==="sourceToken"?Z.setSourceToken(e):(Z.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&Z.swapTokens()),S.goBack()}templateSearchInput(){return l`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],r=this.filterTokensWithText(e,this.searchValue),o=this.filterTokensWithText(t,this.searchValue);return l`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${(r==null?void 0:r.length)>0?l`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${r.map(n=>{var s,p,d;const a=n.symbol===((s=this.sourceToken)==null?void 0:s.symbol)||n.symbol===((p=this.toToken)==null?void 0:p.symbol);return l`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${n.symbol}"
                      name=${n.name}
                      ?disabled=${a}
                      symbol=${n.symbol}
                      price=${n==null?void 0:n.price}
                      amount=${(d=n==null?void 0:n.quantity)==null?void 0:d.numeric}
                      imageSrc=${n.logoUri}
                      @click=${()=>{a||this.onSelectToken(n)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${(o==null?void 0:o.length)>0?o.map(n=>l`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${n.symbol}"
                    name=${n.name}
                    symbol=${n.symbol}
                    imageSrc=${n.logoUri}
                    @click=${()=>this.onSelectToken(n)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=Z.state.suggestedTokens?Z.state.suggestedTokens.slice(0,8):null;return e?l`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map(t=>l`
            <wui-token-button
              text=${t.symbol}
              imageSrc=${t.logoUri}
              @click=${()=>this.onSelectToken(t)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",Nn.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",Nn.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",Nn.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",Nn.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter(r=>`${r.symbol} ${r.name} ${r.address}`.toLowerCase().includes(t.toLowerCase()))}};Gt.styles=n2;Vi([v()],Gt.prototype,"interval",void 0);Vi([v()],Gt.prototype,"targetToken",void 0);Vi([v()],Gt.prototype,"sourceToken",void 0);Vi([v()],Gt.prototype,"sourceTokenAmount",void 0);Vi([v()],Gt.prototype,"toToken",void 0);Vi([v()],Gt.prototype,"myTokensWithBalance",void 0);Vi([v()],Gt.prototype,"popularTokens",void 0);Vi([v()],Gt.prototype,"searchValue",void 0);Gt=Vi([E("w3m-swap-select-token-view")],Gt);const r2=N`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var o2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Vs=class extends A{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};Vs.styles=r2;Vs=o2([E("w3m-transactions-view")],Vs);var a2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const s2=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let $l=class extends A{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${s2}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{M.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};$l=a2([E("w3m-what-is-a-network-view")],$l);var c2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const l2=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Pl=class extends A{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${l2}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){z.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),S.push("GetWallet")}};Pl=c2([E("w3m-what-is-a-wallet-view")],Pl);var u2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ol=class extends A{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${S.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};Ol=u2([E("w3m-what-is-a-buy-view")],Ol);const d2=N`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var hs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const p2=6;let Wi=class extends A{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=et.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=S.state.data)==null?void 0:e.email,this.authConnector=Y.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?l`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:l` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?l`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=et.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=et.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.authConnector&&this.otp.length===p2&&(this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))))}catch(r){this.error=M.parseError(r),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!Y.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),q.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){q.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};Wi.styles=d2;hs([v()],Wi.prototype,"loading",void 0);hs([v()],Wi.prototype,"timeoutTimeLeft",void 0);hs([v()],Wi.prototype,"error",void 0);Wi=hs([E("w3m-email-otp-widget")],Wi);var h2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ll=class extends Wi{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){if(await this.authConnector.provider.connectOtp({otp:e}),z.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),m.state.activeChain)await ee.connectExternal(this.authConnector,m.state.activeChain);else throw new Error("Active chain is not set on ChainControll");z.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),U.state.siwx||te.close()}}catch(t){throw z.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),z.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};Ll=h2([E("w3m-email-verify-otp-view")],Ll);const f2=N`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var Su=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Sa=class extends A{constructor(){var e;super(),this.email=(e=S.state.data)==null?void 0:e.email,this.authConnector=Y.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),z.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),z.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),S.replace("EmailVerifyOtp",{email:this.email})}catch{S.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),q.showSuccess("Code email resent")}}catch(e){q.showError(e)}finally{this.loading=!1}}};Sa.styles=f2;Su([v()],Sa.prototype,"loading",void 0);Sa=Su([E("w3m-email-verify-device-view")],Sa);const w2=N`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var Iu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Os=600,Dl=360,g2=64;let Ia=class extends A{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(te.subscribeKey("open",e=>{e||(this.onHideIframe(),S.popTransactionStack())}),te.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){var t;await this.syncTheme(),this.iframe.style.display="block";const e=(t=this==null?void 0:this.renderRoot)==null?void 0:t.querySelector("div");this.bodyObserver=new ResizeObserver(r=>{var a,s;const o=(a=r==null?void 0:r[0])==null?void 0:a.contentBoxSize,n=(s=o==null?void 0:o[0])==null?void 0:s.inlineSize;this.iframe.style.height=`${Os}px`,e.style.height=`${Os}px`,n&&n<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width=`${Dl}px`,this.iframe.style.left=`calc(50% - ${Dl/2}px)`,this.iframe.style.top=`calc(50% - ${Os/2}px + ${g2/2}px)`,this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)}render(){return l`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const e=Y.getAuthConnector();if(e){const t=Te.getSnapshot().themeMode,r=Te.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:r,w3mThemeVariables:ai(r,t)})}}};Ia.styles=w2;Iu([v()],Ia.prototype,"ready",void 0);Ia=Iu([E("w3m-approve-transaction-view")],Ia);var m2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ul=class extends A{render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${me.SECURE_SITE_DASHBOARD}
          imageSrc=${me.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Ul=m2([E("w3m-upgrade-wallet-view")],Ul);var Tc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ra=class extends A{constructor(){super(...arguments),this.authConnector=Y.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,await ee.setPreferredAccountType(se.ACCOUNT_TYPES.SMART_ACCOUNT),this.loading=!1,S.push("Account")}catch{q.showError("Error upgrading to smart account")}}}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{M.openHref(rc.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){S.push("Account")}};Tc([v()],Ra.prototype,"authConnector",void 0);Tc([v()],Ra.prototype,"loading",void 0);Ra=Tc([E("w3m-upgrade-to-smart-account-view")],Ra);const v2=N`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var _c=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ko=class extends A{constructor(){var e;super(...arguments),this.formRef=si(),this.initialEmail=((e=S.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return l`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ci(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${S.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=Y.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const r=await t.provider.updateEmail({email:this.email});z.sendEvent({type:"track",event:"EMAIL_EDIT"}),r.action==="VERIFY_SECONDARY_OTP"?S.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):S.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){q.showError(t),this.loading=!1}}};ko.styles=v2;_c([v()],ko.prototype,"email",void 0);_c([v()],ko.prototype,"loading",void 0);ko=_c([E("w3m-update-email-wallet-view")],ko);var b2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Wl=class extends Wi{constructor(){var e;super(),this.email=(e=S.state.data)==null?void 0:e.email,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),z.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),S.replace("UpdateEmailSecondaryOtp",S.state.data))}catch(r){throw z.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{S.replace("UpdateEmailWallet",S.state.data)}}};Wl=b2([E("w3m-update-email-primary-otp-view")],Wl);var C2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ml=class extends Wi{constructor(){var e;super(),this.email=(e=S.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:t}),z.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),S.reset("Account"))}catch(r){throw z.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{S.replace("UpdateEmailWallet",S.state.data)}}};Ml=C2([E("w3m-update-email-secondary-otp-view")],Ml);const x2=N`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Ru=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Na=class extends A{constructor(){var e;super(...arguments),this.swapUnsupportedChain=(e=S.state.data)==null?void 0:e.swapUnsupportedChain,this.disconecting=!1}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=m.getAllRequestedCaipNetworks(),t=m.getAllApprovedCaipNetworkIds(),r=M.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?r.filter(n=>me.SWAP_SUPPORTED_NETWORKS.includes(n.caipNetworkId)):r).map(n=>l`
        <wui-list-network
          imageSrc=${O(he.getNetworkImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(n)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await ee.disconnect(),z.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),te.close()}catch{z.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),q.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const t=R.state.caipAddress,r=m.getAllApprovedCaipNetworkIds(),o=m.getNetworkProp("supportsAllNetworks",e.chainNamespace),n=S.state.data;t?r!=null&&r.includes(e.caipNetworkId)?await m.switchActiveNetwork(e):o?S.push("SwitchNetwork",{...n,network:e}):S.push("SwitchNetwork",{...n,network:e}):t||(m.setActiveCaipNetwork(e),S.push("Connect"))}};Na.styles=x2;Ru([v()],Na.prototype,"disconecting",void 0);Na=Ru([E("w3m-unsupported-chain-view")],Na);const y2=N`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var Ko=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Qn=class extends A{constructor(){super(),this.unsubscribe=[],this.address=R.state.address,this.profileName=R.state.profileName,this.network=m.state.activeCaipNetwork,this.preferredAccountType=R.state.preferredAccountType,this.unsubscribe.push(R.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):q.showError("Account not found")}),m.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=he.getNetworkImage(this.network);return l` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${re.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${Te.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var a;const e=m.getAllRequestedCaipNetworks(),t=m.checkIfSmartAccountEnabled(),r=m.state.activeCaipNetwork;if(this.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[he.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;const n=((a=e==null?void 0:e.filter(s=>{var p;return(p=s==null?void 0:s.assets)==null?void 0:p.imageId}))==null?void 0:a.slice(0,5)).map(he.getNetworkImage).filter(Boolean);return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${n}
    ></wui-compatible-network>`}onReceiveClick(){S.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(M.copyToClopboard(this.address),q.showSuccess("Address copied"))}catch{q.showError("Failed to copy")}}};Qn.styles=y2;Ko([v()],Qn.prototype,"address",void 0);Ko([v()],Qn.prototype,"profileName",void 0);Ko([v()],Qn.prototype,"network",void 0);Ko([v()],Qn.prototype,"preferredAccountType",void 0);Qn=Ko([E("w3m-wallet-receive-view")],Qn);const E2=N`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Nu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $a=class extends A{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=R.state.preferredAccountType,this.unsubscribe.push(R.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=m.getAllRequestedCaipNetworks(),t=m.getAllApprovedCaipNetworkIds(),r=m.state.activeCaipNetwork,o=m.checkIfSmartAccountEnabled();let n=M.sortRequestedNetworks(t,e);if(o&&this.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;n=[r]}return n.map(a=>l`
        <wui-list-network
          imageSrc=${O(he.getNetworkImage(a))}
          name=${a.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};$a.styles=E2;Nu([v()],$a.prototype,"preferredAccountType",void 0);$a=Nu([E("w3m-wallet-compatible-networks-view")],$a);const T2=N`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var Hi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qt=class extends A{constructor(){super(),this.unsubscribe=[],this.token=ge.state.token,this.sendTokenAmount=ge.state.sendTokenAmount,this.receiverAddress=ge.state.receiverAddress,this.receiverProfileName=ge.state.receiverProfileName,this.loading=ge.state.loading,this.gasPriceInUSD=ge.state.gasPriceInUSD,this.gasPrice=ge.state.gasPrice,this.message="Preview Send",this.fetchNetworkPrice(),this.unsubscribe.push(ge.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),l` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await Z.getNetworkTokenPrice();const e=await Z.getInitialGasPrice();e!=null&&e.gasPrice&&(e!=null&&e.gasPriceInUSD)&&(ge.setGasPrice(e.gasPrice),ge.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){S.push("WalletSendPreview")}getMessage(){var e;this.message="Preview Send",this.receiverAddress&&!M.isAddress(this.receiverAddress,m.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&((e=this.token)!=null&&e.price)&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}};qt.styles=T2;Hi([v()],qt.prototype,"token",void 0);Hi([v()],qt.prototype,"sendTokenAmount",void 0);Hi([v()],qt.prototype,"receiverAddress",void 0);Hi([v()],qt.prototype,"receiverProfileName",void 0);Hi([v()],qt.prototype,"loading",void 0);Hi([v()],qt.prototype,"gasPriceInUSD",void 0);Hi([v()],qt.prototype,"gasPrice",void 0);Hi([v()],qt.prototype,"message",void 0);qt=Hi([E("w3m-wallet-send-view")],qt);const _2=N`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var Yo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Jn=class extends A{constructor(){super(),this.unsubscribe=[],this.tokenBalance=R.state.tokenBalance,this.search="",this.onDebouncedSearch=M.debounce(e=>{this.search=e}),this.unsubscribe.push(R.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e,t;return this.tokens=(e=this.tokenBalance)==null?void 0:e.filter(r=>{var o;return r.chainId===((o=m.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)}),this.search?this.filteredTokens=(t=this.tokenBalance)==null?void 0:t.filter(r=>r.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,l`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(r=>l`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,r)}
                    ?clickable=${!0}
                    tokenName=${r.name}
                    tokenImageUrl=${r.iconUrl}
                    tokenAmount=${r.quantity.numeric}
                    tokenValue=${r.value}
                    tokenCurrency=${r.symbol}
                  ></wui-list-token>`):l`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){S.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){ge.setToken(e),ge.setTokenAmount(void 0),S.goBack()}};Jn.styles=_2;Yo([v()],Jn.prototype,"tokenBalance",void 0);Yo([v()],Jn.prototype,"tokens",void 0);Yo([v()],Jn.prototype,"filteredTokens",void 0);Yo([v()],Jn.prototype,"search",void 0);Jn=Yo([E("w3m-wallet-send-select-token-view")],Jn);const k2=N`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var kn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bi=class extends A{constructor(){super(),this.unsubscribe=[],this.token=ge.state.token,this.sendTokenAmount=ge.state.sendTokenAmount,this.receiverAddress=ge.state.receiverAddress,this.receiverProfileName=ge.state.receiverProfileName,this.receiverProfileImageUrl=ge.state.receiverProfileImageUrl,this.gasPriceInUSD=ge.state.gasPriceInUSD,this.caipNetwork=m.state.activeCaipNetwork,this.unsubscribe.push(ge.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),m.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,t;return l` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?re.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${(e=this.token)==null?void 0:e.symbol}"
            .imageSrc=${(t=this.token)==null?void 0:t.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?re.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):re.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return l`<wui-text variant="paragraph-400" color="fg-100"
        >$${t.toFixed(2)}</wui-text
      >`}return null}onSendClick(){ge.sendToken()}onCancelClick(){S.goBack()}};bi.styles=k2;kn([v()],bi.prototype,"token",void 0);kn([v()],bi.prototype,"sendTokenAmount",void 0);kn([v()],bi.prototype,"receiverAddress",void 0);kn([v()],bi.prototype,"receiverProfileName",void 0);kn([v()],bi.prototype,"receiverProfileImageUrl",void 0);kn([v()],bi.prototype,"gasPriceInUSD",void 0);kn([v()],bi.prototype,"caipNetwork",void 0);bi=kn([E("w3m-wallet-send-preview-view")],bi);const A2=N`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var $u=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pa=class extends A{constructor(){super(...arguments),this.checked=!1}render(){var p;const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state,r=(p=U.state.features)==null?void 0:p.legalCheckbox,n=!!(e||t)&&!!r,a=n&&!this.checked,s=a?-1:void 0;return l`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","s","s","s"]:"s"}
        gap="xs"
        class=${O(a?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${O(s)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(e){this.checked=!!e.detail}};Pa.styles=A2;$u([v()],Pa.prototype,"checked",void 0);Pa=$u([E("w3m-connect-wallets-view")],Pa);const S2=N`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Pu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Oa=class extends A{constructor(){super(...arguments),this.checked=!1}render(){var p;const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state,r=(p=U.state.features)==null?void 0:p.legalCheckbox,n=!!(e||t)&&!!r,a=n&&!this.checked,s=a?-1:void 0;return l`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","s","s","s"]:"s"}
        gap="xs"
        class=${O(a?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${O(s)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(e){this.checked=!!e.detail}};Oa.styles=S2;Pu([v()],Oa.prototype,"checked",void 0);Oa=Pu([E("w3m-connect-socials-view")],Oa);const I2=N`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var qr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wn=class extends A{constructor(){super(),this.unsubscribe=[],this.socialProvider=R.state.socialProvider,this.socialWindow=R.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=Y.getAuthConnector(),this.handleSocialConnection=async e=>{var t;if((t=e.data)!=null&&t.resultUri)if(e.origin===$i.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),R.setSocialWindow(void 0,m.state.activeChain)),this.connecting=!0,this.updateMessage();const r=e.data.resultUri;this.socialProvider&&z.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await this.authConnector.provider.connectSocial(r),this.socialProvider&&(de.setConnectedSocialProvider(this.socialProvider),await ee.connectExternal(this.authConnector,this.authConnector.chain),z.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch{this.error=!0,this.updateMessage(),this.socialProvider&&z.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else S.goBack(),q.showError("Untrusted Origin"),this.socialProvider&&z.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},this.unsubscribe.push(R.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&te.state.open&&te.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return l`
      <wui-flex
        data-error=${O(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${O(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=Te.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval(()=>{var t;(t=this.socialWindow)!=null&&t.closed&&(!this.connecting&&S.state.view==="ConnectingSocial"&&(this.socialProvider&&z.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),S.goBack()),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};wn.styles=I2;qr([v()],wn.prototype,"socialProvider",void 0);qr([v()],wn.prototype,"socialWindow",void 0);qr([v()],wn.prototype,"error",void 0);qr([v()],wn.prototype,"connecting",void 0);qr([v()],wn.prototype,"message",void 0);wn=qr([E("w3m-connecting-social-view")],wn);const R2=N`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var Kr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let gn=class extends A{constructor(){super(),this.usubscribe=[],this.address=R.state.address,this.profileImage=R.state.profileImage,this.profileName=R.state.profileName,this.accounts=R.state.allAccounts,this.loading=!1,this.usubscribe.push(R.subscribeKey("address",e=>{e?this.address=e:te.close()})),this.usubscribe.push(R.subscribeKey("profileImage",e=>{this.profileImage=e})),this.usubscribe.push(R.subscribeKey("profileName",e=>{this.profileName=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return l`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${O(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?re.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):re.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>S.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return l`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e=>this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){this.loading=!0,Y.getAuthConnector()&&await ee.setPreferredAccountType(e.type),R.setShouldUpdateToAddress(e.address,m.state.activeChain),this.loading=!1}accountTemplate(e){return l`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":l`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.profileName?(M.copyToClopboard(this.profileName),q.showSuccess("Name copied")):this.address&&(M.copyToClopboard(this.address),q.showSuccess("Address copied"))}catch{q.showError("Failed to copy")}}};gn.styles=R2;Kr([v()],gn.prototype,"address",void 0);Kr([v()],gn.prototype,"profileImage",void 0);Kr([v()],gn.prototype,"profileName",void 0);Kr([v()],gn.prototype,"accounts",void 0);Kr([v()],gn.prototype,"loading",void 0);gn=Kr([E("w3m-profile-view")],gn);const N2=N`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var kc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ao=class extends A{constructor(){super(),this.metadata=U.state.metadata,this.allAccounts=R.state.allAccounts||[],this.balances={},this.labels=R.state.addressLabels,this.currentAddress=R.state.address||"",this.connectedConnector=de.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH",this.caipNetwork=m.state.activeCaipNetwork,R.subscribeKey("allAccounts",e=>{this.allAccounts=e})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(e=>{var t;Se.getBalance(e.address,(t=this.caipNetwork)==null?void 0:t.caipNetworkId).then(r=>{let o=this.balances[e.address]||0;r.balances.length>0&&(o=r.balances.reduce((n,a)=>n+((a==null?void 0:a.value)||0),0)),this.balances[e.address]=o,this.requestUpdate()})})}getAddressIcon(e){return e==="smartAccount"?"lightbulb":"mail"}render(){var e,t;return l`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${O((e=this.metadata)==null?void 0:e.icons[0])}
          text=${O((t=this.metadata)==null?void 0:t.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((r,o)=>this.getAddressTemplate(r,o))}
      </wui-flex>
    `}getAddressTemplate(e,t){var o,n,a,s;const r=(o=this.labels)==null?void 0:o.get(e.address);return l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${this.shouldShowIcon?l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:l`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${r||re.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[e.address]=="number"?`$${(n=this.balances[e.address])==null?void 0:n.toFixed(2)}`:l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${((a=e.address)==null?void 0:a.toLowerCase())===((s=this.currentAddress)==null?void 0:s.toLowerCase())?"":l`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){const t=m.state.activeCaipNetwork,r=t==null?void 0:t.chainNamespace,o=`${r}:${t==null?void 0:t.id}:${e}`;R.setCaipAddress(o,r),te.close()}};Ao.styles=N2;kc([v()],Ao.prototype,"allAccounts",void 0);kc([v()],Ao.prototype,"balances",void 0);Ao=kc([E("w3m-switch-address-view")],Ao);const $2=N`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var Xo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let er=class extends A{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=R.state.socialProvider,this.uri=R.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=Y.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(R.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),R.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`${this.platformTemplate()}`}platformTemplate(){return M.isMobile()?l`${this.mobileTemplate()}`:l`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?l`${this.loadingTemplate()}`:l`${this.qrTemplate()}`}qrTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=Te.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}async connectFarcaster(){var e;if(this.authConnector)try{await((e=this.authConnector)==null?void 0:e.provider.connectFarcaster()),this.socialProvider&&de.setConnectedSocialProvider(this.socialProvider),this.loading=!0,await ee.connectExternal(this.authConnector,this.authConnector.chain),this.loading=!1,te.close()}catch(t){S.goBack(),q.showError(t)}}mobileLinkTemplate(){return l`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&M.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return l` <wui-qr-code
      size=${e}
      theme=${Te.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(M.copyToClopboard(this.uri),q.showSuccess("Link copied"))}catch{q.showError("Failed to copy")}}};er.styles=$2;Xo([v()],er.prototype,"socialProvider",void 0);Xo([v()],er.prototype,"uri",void 0);Xo([v()],er.prototype,"ready",void 0);Xo([v()],er.prototype,"loading",void 0);er=Xo([E("w3m-connecting-farcaster-view")],er);var Ac=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let La=class extends A{constructor(){var e;super(...arguments),this.dappName=(e=U.state.metadata)==null?void 0:e.name,this.isCancelling=!1,this.isSigning=!1}render(){return l`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await jt.requestSignMessage().finally(()=>this.isSigning=!1)}async onCancel(){this.isCancelling=!0,await jt.cancelSignMessage().finally(()=>this.isCancelling=!1)}};Ac([v()],La.prototype,"isCancelling",void 0);Ac([v()],La.prototype,"isSigning",void 0);La=Ac([E("w3m-siwx-sign-message-view")],La);const P2=N`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,Mr={filterOutDuplicatesByRDNS(i){const e=U.state.enableEIP6963?Y.state.connectors:[],t=de.getRecentWallets(),r=e.map(s=>{var p;return(p=s.info)==null?void 0:p.rdns}).filter(Boolean),o=t.map(s=>s.rdns).filter(Boolean),n=r.concat(o);if(n.includes("io.metamask.mobile")&&M.isMobile()){const s=n.indexOf("io.metamask.mobile");n[s]="io.metamask"}return i.filter(s=>!n.includes(String(s==null?void 0:s.rdns)))},filterOutDuplicatesByIds(i){const e=Y.state.connectors.filter(s=>s.type==="ANNOUNCED"||s.type==="INJECTED"),t=de.getRecentWallets(),r=e.map(s=>s.explorerId),o=t.map(s=>s.id),n=r.concat(o);return i.filter(s=>!n.includes(s==null?void 0:s.id))},filterOutDuplicateWallets(i){const e=this.filterOutDuplicatesByRDNS(i);return this.filterOutDuplicatesByIds(e)},markWalletsAsInstalled(i){const{connectors:e}=Y.state,t=e.filter(n=>n.type==="ANNOUNCED").reduce((n,a)=>{var s;return(s=a.info)!=null&&s.rdns&&(n[a.info.rdns]=!0),n},{});return i.map(n=>({...n,installed:!!n.rdns&&!!t[n.rdns??""]})).sort((n,a)=>Number(a.installed)-Number(n.installed))}};var Qo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Bl="local-paginator";let tr=class extends A{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!ne.state.wallets.length,this.wallets=ne.state.wallets,this.recommended=ne.state.recommended,this.featured=ne.state.featured,this.unsubscribe.push(ne.subscribeKey("wallets",e=>this.wallets=e),ne.subscribeKey("recommended",e=>this.recommended=e),ne.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");this.initial&&e&&(await ne.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${O(t)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return Mr.markWalletsAsInstalled(e).map(r=>l`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(r)}
          .wallet=${r}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:o}=ne.state,n=window.innerWidth<352?3:4,a=e.length+t.length;let p=Math.ceil(a/n)*n-a+n;return p-=e.length?r.length%n:0,o===0&&r.length>0?null:o===0||[...r,...e,...t].length<o?this.shimmerTemplate(p,Bl):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${Bl}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:n,wallets:a}=ne.state;a.length<n&&ne.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const t=Y.getConnector(e.id,e.rdns);t?S.push("ConnectingExternal",{connector:t}):S.push("ConnectingWalletConnect",{wallet:e})}};tr.styles=P2;Qo([v()],tr.prototype,"initial",void 0);Qo([v()],tr.prototype,"wallets",void 0);Qo([v()],tr.prototype,"recommended",void 0);Qo([v()],tr.prototype,"featured",void 0);tr=Qo([E("w3m-all-wallets-list")],tr);const O2=N`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    will-change: background-color, color;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Jo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ir=class extends A{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t,r;const e=((t=this.wallet)==null?void 0:t.badge_type)==="certified";return l`
      <button ontouchstart>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${O(e?"certified":void 0)}
            >${(r=this.wallet)==null?void 0:r.name}</wui-text
          >
          ${e?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,t;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="md"
        imageSrc=${O(this.imageSrc)}
        name=${(e=this.wallet)==null?void 0:e.name}
        .installed=${(t=this.wallet)==null?void 0:t.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=he.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await he.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};ir.styles=O2;Jo([v()],ir.prototype,"visible",void 0);Jo([v()],ir.prototype,"imageSrc",void 0);Jo([v()],ir.prototype,"imageLoading",void 0);Jo([h()],ir.prototype,"wallet",void 0);ir=Jo([E("w3m-all-wallets-list-item")],ir);const L2=N`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var fs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Br=class extends A{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await ne.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=ne.state,t=Mr.markWalletsAsInstalled(e);return e.length?l`
      <wui-grid
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(r=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=Y.getConnector(e.id,e.rdns);t?S.push("ConnectingExternal",{connector:t}):S.push("ConnectingWalletConnect",{wallet:e})}};Br.styles=L2;fs([v()],Br.prototype,"loading",void 0);fs([h()],Br.prototype,"query",void 0);fs([h()],Br.prototype,"badge",void 0);Br=fs([E("w3m-all-wallets-search")],Br);var ws=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let So=class extends A{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(ee.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var r;const t=this.platformTabs[e];t&&((r=this.onSelectPlatfrom)==null||r.call(this,t))}};ws([h({type:Array})],So.prototype,"platforms",void 0);ws([h()],So.prototype,"onSelectPlatfrom",void 0);ws([v()],So.prototype,"buffering",void 0);So=ws([E("w3m-connecting-header")],So);var D2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let jl=class extends Ye{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=Y.state,r=t.find(o=>{var n,a,s;return o.type==="ANNOUNCED"&&((n=o.info)==null?void 0:n.rdns)===((a=this.wallet)==null?void 0:a.rdns)||o.type==="INJECTED"||o.name===((s=this.wallet)==null?void 0:s.name)});if(r)await ee.connectExternal(r,r.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");te.close(),z.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(t){z.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};jl=D2([E("w3m-connecting-wc-browser")],jl);var U2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Fl=class extends Ye{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:r}=this.wallet,{redirect:o,href:n}=M.formatNativeUrl(t,this.uri);ee.setWcLinking({name:r,href:n}),ee.setRecentWallet(this.wallet),M.openHref(o,"_blank")}catch{this.error=!0}}};Fl=U2([E("w3m-connecting-wc-desktop")],Fl);var W2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let zl=class extends Ye{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel=void 0,this.secondaryLabel=me.CONNECT_LABELS.MOBILE,this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}}),this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=me.CONNECT_LABELS.MOBILE},me.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},me.THREE_SEC_MS)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:r}=this.wallet,{redirect:o,href:n}=M.formatNativeUrl(t,this.uri);ee.setWcLinking({name:r,href:n}),ee.setRecentWallet(this.wallet),M.openHref(o,"_self"),clearTimeout(this.labelTimeout),this.secondaryLabel=me.CONNECT_LABELS.MOBILE}catch(t){z.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}}onBuffering(){const e=M.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(ee.setBuffering(!0),setTimeout(()=>{ee.setBuffering(!1)},5e3))}};zl=W2([E("w3m-connecting-wc-mobile")],zl);const M2=N`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var B2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Hs=class extends Ye{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return ee.setWcLinking(void 0),ee.setRecentWallet(this.wallet),l` <wui-qr-code
      size=${e}
      theme=${Te.state.themeMode}
      uri=${this.uri}
      imageSrc=${O(he.getWalletImage(this.wallet))}
      alt=${O(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Hs.styles=M2;Hs=B2([E("w3m-connecting-wc-qrcode")],Hs);var j2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Vl=class extends A{constructor(){var e;if(super(),this.wallet=(e=S.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${O(he.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Vl=j2([E("w3m-connecting-wc-unsupported")],Vl);var F2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Hl=class extends Ye{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:r}=this.wallet,{redirect:o,href:n}=M.formatUniversalUrl(t,this.uri);ee.setWcLinking({name:r,href:n}),ee.setRecentWallet(this.wallet),M.openHref(o,"_blank")}catch{this.error=!0}}};Hl=F2([E("w3m-connecting-wc-web")],Hl);const z2=N`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var kt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const V2=me.CONVERT_SLIPPAGE_TOLERANCE;let at=class extends A{constructor(){var e;super(),this.unsubscribe=[],this.networkName=(e=m.state.activeCaipNetwork)==null?void 0:e.name,this.detailsOpen=!1,this.sourceToken=Z.state.sourceToken,this.toToken=Z.state.toToken,this.toTokenAmount=Z.state.toTokenAmount,this.sourceTokenPriceInUSD=Z.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=Z.state.toTokenPriceInUSD,this.gasPriceInUSD=Z.state.gasPriceInUSD,this.priceImpact=Z.state.priceImpact,this.maxSlippage=Z.state.maxSlippage,this.networkTokenSymbol=Z.state.networkTokenSymbol,this.inputError=Z.state.inputError,this.unsubscribe.push(Z.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.gasPriceInUSD=t.gasPriceInUSD,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError}))}render(){const e=this.toTokenAmount&&this.maxSlippage?fe.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const t=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return l`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${re.formatNumberToLocalString(t,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${re.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?l`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${re.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?l` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${re.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?l`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${e?`Transaction will be reversed if you receive less than ${re.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${re.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${V2}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};at.styles=[z2];kt([v()],at.prototype,"networkName",void 0);kt([h()],at.prototype,"detailsOpen",void 0);kt([v()],at.prototype,"sourceToken",void 0);kt([v()],at.prototype,"toToken",void 0);kt([v()],at.prototype,"toTokenAmount",void 0);kt([v()],at.prototype,"sourceTokenPriceInUSD",void 0);kt([v()],at.prototype,"toTokenPriceInUSD",void 0);kt([v()],at.prototype,"gasPriceInUSD",void 0);kt([v()],at.prototype,"priceImpact",void 0);kt([v()],at.prototype,"maxSlippage",void 0);kt([v()],at.prototype,"networkTokenSymbol",void 0);kt([v()],at.prototype,"inputError",void 0);at=kt([E("w3m-swap-details")],at);const H2=N`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var ei=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Z2=5e-5;let Et=class extends A{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",t=fe.bigNumber(e).isGreaterThan("0");return l`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${re.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return Gd.numericInputKeyDown(e,this.value,t=>{var r;return(r=this.onSetAmount)==null?void 0:r.call(this,this.target,t)})}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value.replace(/[^0-9.]/gu,"");t===","||t==="."?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){var e;(e=this.onSetMaxValue)==null||e.call(this,this.target,this.balance)}templateTokenSelectButton(){return this.token?l`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:l` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const e=fe.multiply(this.balance,this.price),t=e?e==null?void 0:e.isGreaterThan(Z2):!1;return l`
      ${t?l`<wui-text variant="small-400" color="fg-200">
            ${re.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?l` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:l` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){z.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),S.push("SwapSelectToken",{target:this.target})}onBuyToken(){S.push("OnRampProviders")}};Et.styles=[H2];ei([h()],Et.prototype,"focused",void 0);ei([h()],Et.prototype,"balance",void 0);ei([h()],Et.prototype,"value",void 0);ei([h()],Et.prototype,"price",void 0);ei([h()],Et.prototype,"marketValue",void 0);ei([h()],Et.prototype,"disabled",void 0);ei([h()],Et.prototype,"target",void 0);ei([h()],Et.prototype,"token",void 0);ei([h()],Et.prototype,"onSetAmount",void 0);ei([h()],Et.prototype,"onSetMaxValue",void 0);Et=ei([E("w3m-swap-input")],Et);const G2=N`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var Ou=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Da=class extends A{constructor(){super(...arguments),this.target="sourceToken"}render(){return l`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return l`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};Da.styles=[G2];Ou([h()],Da.prototype,"target",void 0);Da=Ou([E("w3m-swap-input-skeleton")],Da);const q2=N`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Zi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const K2=["SmartSessionList"];function Ls(){var a,s,p,d,w,C,b;const i=(s=(a=S.state.data)==null?void 0:a.connector)==null?void 0:s.name,e=(d=(p=S.state.data)==null?void 0:p.wallet)==null?void 0:d.name,t=(C=(w=S.state.data)==null?void 0:w.network)==null?void 0:C.name,r=e??i,o=Y.getConnectors();return{Connect:`Connect ${o.length===1&&((b=o[0])==null?void 0:b.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:t??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:R.state.socialProvider?R.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let Kt=class extends A{constructor(){super(),this.unsubscribe=[],this.heading=Ls()[S.state.view],this.network=m.state.activeCaipNetwork,this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=S.state.view,this.viewDirection="",this.headerText=Ls()[S.state.view],this.unsubscribe.push(S.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=Ls()[e]},$i.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),ee.subscribeKey("buffering",e=>this.buffering=e),m.subscribeKey("activeCaipNetwork",e=>this.network=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){z.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),S.push("WhatIsAWallet")}async onClose(){S.state.view==="UnsupportedChain"||await jt.isSIWXCloseDisabled()?te.shake():te.close()}rightHeaderTemplate(){var t,r;const e=(r=(t=U==null?void 0:U.state)==null?void 0:t.features)==null?void 0:r.smartSessions;return S.state.view!=="Account"||!e?this.closeButtonTemplate():l`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>S.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return l`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=K2.includes(this.view);return l`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?l`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var p;const{view:e}=S.state,t=e==="Connect",r=e==="ApproveTransaction",o=e==="UpgradeToSmartAccount",n=e==="ConnectingSiwe",a=e==="Account",s=r||o||n;return a?l`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${O((p=this.network)==null?void 0:p.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${O(he.getNetworkImage(this.network))}
      ></wui-select>`:this.showBack&&!s?l`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:l`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(z.sendEvent({type:"track",event:"CLICK_NETWORKS"}),S.push("Networks"))}isAllowedNetworkSwitch(){const e=m.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var n;return o===((n=this.network)==null?void 0:n.id)});return t||!r}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=S.state;let t=$i.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=$i.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var r;const{history:e}=S.state,t=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){S.goBack()}};Kt.styles=q2;Zi([v()],Kt.prototype,"heading",void 0);Zi([v()],Kt.prototype,"network",void 0);Zi([v()],Kt.prototype,"buffering",void 0);Zi([v()],Kt.prototype,"showBack",void 0);Zi([v()],Kt.prototype,"prevHistoryLength",void 0);Zi([v()],Kt.prototype,"view",void 0);Zi([v()],Kt.prototype,"viewDirection",void 0);Zi([v()],Kt.prototype,"headerText",void 0);Kt=Zi([E("w3m-header")],Kt);var Lu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Zs=class extends A{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>l`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Lu([h({type:Array})],Zs.prototype,"data",void 0);Zs=Lu([E("w3m-help-widget")],Zs);const Y2=N`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var At=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let st=class extends A{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return l`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?l`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await ne._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return l`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return l`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return l`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};st.styles=[Y2];At([h({type:Boolean})],st.prototype,"disabled",void 0);At([h()],st.prototype,"color",void 0);At([h()],st.prototype,"label",void 0);At([h()],st.prototype,"purchaseValue",void 0);At([h()],st.prototype,"purchaseCurrency",void 0);At([h()],st.prototype,"date",void 0);At([h({type:Boolean})],st.prototype,"completed",void 0);At([h({type:Boolean})],st.prototype,"inProgress",void 0);At([h({type:Boolean})],st.prototype,"failed",void 0);At([h()],st.prototype,"onClick",void 0);At([h()],st.prototype,"symbol",void 0);At([h()],st.prototype,"icon",void 0);st=At([E("w3m-onramp-activity-item")],st);const X2=N`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var gr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Mi=class extends A{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=$e.state.currencyImages,this.tokenImages=$e.state.tokenImages,this.unsubscribe.push(be.subscribeKey("purchaseCurrency",t=>{!t||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(t))}),be.subscribeKey("paymentCurrency",t=>{!t||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(t))}),be.subscribe(t=>{this.type==="Fiat"?this.currencies=t.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=t.paymentCurrencies.map(this.formatPaymentCurrency)}),$e.subscribe(t=>{this.currencyImages={...t.currencyImages},this.tokenImages={...t.tokenImages}}))}firstUpdated(){be.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var r;const e=((r=this.selectedCurrency)==null?void 0:r.symbol)||"",t=this.currencyImages[e]||this.tokenImages[e];return l`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?l` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>te.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${O(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:l`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};Mi.styles=X2;gr([h({type:String})],Mi.prototype,"type",void 0);gr([h({type:Number})],Mi.prototype,"value",void 0);gr([v()],Mi.prototype,"currencies",void 0);gr([v()],Mi.prototype,"selectedCurrency",void 0);gr([v()],Mi.prototype,"currencyImages",void 0);gr([v()],Mi.prototype,"tokenImages",void 0);Mi=gr([E("w3m-onramp-input")],Mi);const Q2=N`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var An=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ci=class extends A{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${O(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?l`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var r;const e=m.getAllRequestedCaipNetworks(),t=(r=e==null?void 0:e.filter(o=>{var n;return(n=o==null?void 0:o.assets)==null?void 0:n.imageId}))==null?void 0:r.slice(0,5);return l`
      <wui-flex class="networks">
        ${t==null?void 0:t.map(o=>l`
            <wui-flex class="network-icon">
              <wui-image src=${O(he.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Ci.styles=[Q2];An([h({type:Boolean})],Ci.prototype,"disabled",void 0);An([h()],Ci.prototype,"color",void 0);An([h()],Ci.prototype,"name",void 0);An([h()],Ci.prototype,"label",void 0);An([h()],Ci.prototype,"feeRange",void 0);An([h({type:Boolean})],Ci.prototype,"loading",void 0);An([h()],Ci.prototype,"onClick",void 0);Ci=An([E("w3m-onramp-provider-item")],Ci);const J2=N`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var e3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Gs=class extends A{render(){var o;const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state,r=(o=U.state.features)==null?void 0:o.legalCheckbox;return!e&&!t||r?null:l`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=U.state;return e?l`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=U.state;return e?l`<a href=${e}>Privacy Policy</a>`:null}};Gs.styles=[J2];Gs=e3([E("w3m-legal-footer")],Gs);const t3=N`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var i3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qs=class extends A{render(){var o;const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state,r=(o=U.state.features)==null?void 0:o.legalCheckbox;return!e&&!t||!r?null:l`
      <wui-checkbox data-testid="wui-checkbox">
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=U.state;return e?l`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=U.state;return e?l`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}};qs.styles=[t3];qs=i3([E("w3m-legal-checkbox")],qs);const n3=N`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Du=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ua=class extends A{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:o,homepage:n}=this.wallet,a=M.isMobile(),s=M.isIos(),p=M.isAndroid(),d=[t,r,n,o].filter(Boolean).length>1,w=re.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!a?l`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${()=>S.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&n?l`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?l`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&p?l`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&M.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&M.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&M.openHref(this.wallet.homepage,"_blank")}};Ua.styles=[n3];Du([h({type:Object})],Ua.prototype,"wallet",void 0);Ua=Du([E("w3m-mobile-download-links")],Ua);const r3=N`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var o3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ks=class extends A{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state;return!e&&!t?null:l`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return l` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){z.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.push("WhatIsABuy")}};Ks.styles=[r3];Ks=o3([E("w3m-onramp-providers-footer")],Ks);const a3=N`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Uu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const s3={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Wa=class extends A{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=q.state.open,this.unsubscribe.push(q.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:r}=q.state,o=s3[t],{icon:n,iconColor:a}=r??o??{};return l`
      <wui-snackbar
        message=${e}
        backgroundColor=${o==null?void 0:o.backgroundColor}
        iconColor=${a}
        icon=${n}
        .loading=${t==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>q.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Wa.styles=a3;Uu([v()],Wa.prototype,"open",void 0);Wa=Uu([E("w3m-snackbar")],Wa);const c3=N`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var Wu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const l3={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let Ma=class extends A{constructor(){super(),this.unsubscribe=[],this.open=$n.state.open,this.onOpen(!0),this.unsubscribe.push($n.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=$n.state,r=l3[t];return l`
      <wui-alertbar
        message=${e}
        backgroundColor=${r==null?void 0:r.backgroundColor}
        iconColor=${r==null?void 0:r.iconColor}
        icon=${r==null?void 0:r.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Ma.styles=c3;Wu([v()],Ma.prototype,"open",void 0);Ma=Wu([E("w3m-alertbar")],Ma);const u3=N`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Sn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xi=class extends A{constructor(){super(),this.unsubscribe=[],this.formRef=si(),this.connectors=Y.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.email="",this.loading=!1,this.error="",this.walletGuide="get-started",this.unsubscribe.push(Y.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=e.find(t=>t.type==="AUTH")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){var t;const e=(t=U.state.features)==null?void 0:t.email;return!this.authConnector||!e?null:l`
      <form ${ci(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${O(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()} ${this.separatorTemplate()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}separatorTemplate(){var a,s;const e=(a=U.state.features)==null?void 0:a.socials,t=this.connectors.length>1,r=U.state.enableWallets,o=(s=U.state.features)==null?void 0:s.emailShowWallets;return(e&&e.length||o||!t||!r)&&this.walletGuide==="get-started"||e&&e.length>0?null:l`
      <wui-flex
        data-testid="w3m-email-login-or-separator"
        .padding=${["xxs","0","0","0"]}
      >
        <wui-separator text="or"></wui-separator>
      </wui-flex>
    `}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?l`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(![Ce.CHAIN.EVM,Ce.CHAIN.SOLANA].find(o=>o===m.state.activeChain)){S.push("SwitchActiveChain",{switchToChain:Ce.CHAIN.EVM});return}try{if(this.loading)return;this.loading=!0,e.preventDefault();const o=Y.getAuthConnector();if(!o)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:n}=await o.provider.connectEmail({email:this.email});z.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),n==="VERIFY_OTP"?(z.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),S.push("EmailVerifyOtp",{email:this.email})):n==="VERIFY_DEVICE"&&S.push("EmailVerifyDevice",{email:this.email})}catch(o){const n=M.parseError(o);n!=null&&n.includes("Invalid email")?this.error="Invalid email. Try again.":q.showError(o)}finally{this.loading=!1}}onFocusEvent(){z.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};xi.styles=u3;Sn([h()],xi.prototype,"tabIdx",void 0);Sn([v()],xi.prototype,"connectors",void 0);Sn([v()],xi.prototype,"authConnector",void 0);Sn([v()],xi.prototype,"email",void 0);Sn([v()],xi.prototype,"loading",void 0);Sn([v()],xi.prototype,"error",void 0);Sn([h()],xi.prototype,"walletGuide",void 0);xi=Sn([E("w3m-email-login-widget")],xi);const d3=N`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var Si=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Lt=class extends A{constructor(){super(),this.unsubscribe=[],this.caipAddress=R.state.caipAddress,this.address=M.getPlainAddress(R.state.caipAddress),this.allAccounts=R.state.allAccounts,this.profileImage=R.state.profileImage,this.profileName=R.state.profileName,this.disconnecting=!1,this.balance=R.state.balance,this.balanceSymbol=R.state.balanceSymbol,this.features=U.state.features,this.unsubscribe.push(R.subscribeKey("caipAddress",e=>{this.address=M.getPlainAddress(e),this.caipAddress=e}),R.subscribeKey("balance",e=>this.balance=e),R.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),R.subscribeKey("profileName",e=>this.profileName=e),R.subscribeKey("profileImage",e=>this.profileImage=e),U.subscribeKey("features",e=>this.features=e),R.subscribeKey("allAccounts",e=>{this.allAccounts=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress)return null;const e=m.state.activeChain===Ce.CHAIN.EVM&&this.allAccounts.length>1;return l`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${M.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.onrampTemplate()} ${this.swapsTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){var t;return((t=this.features)==null?void 0:t.onramp)?l`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}activityTemplate(){const e=m.state.activeChain===Ce.CHAIN.SOLANA;return l` <wui-list-item
      iconVariant="blue"
      icon="clock"
      iconSize="sm"
      ?chevron=${!e}
      ?disabled=${e}
      @click=${this.onTransactions.bind(this)}
    >
      <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}> Activity </wui-text>
      ${e?l`<wui-tag variant="main">Coming soon</wui-tag>`:""}
    </wui-list-item>`}swapsTemplate(){var r;const e=(r=this.features)==null?void 0:r.swaps,t=m.state.activeChain===Ce.CHAIN.SOLANA;return!e||t?null:l`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=de.getConnectedConnector(),t=Y.getAuthConnector(),{origin:r}=location;return!t||e!=="ID_AUTH"||r.includes(me.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){S.push("SwitchAddress")}handleClickPay(){S.push("OnRampProviders")}handleClickSwap(){S.push("Swap")}explorerBtnTemplate(){return R.state.addressExplorerUrl?l`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return l`
      <wui-avatar
        alt=${O(this.caipAddress)}
        address=${O(M.getPlainAddress(this.caipAddress))}
        imageSrc=${O(this.profileImage===null?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?re.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):re.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.allAccounts.find(r=>r.address===this.address),t=R.state.addressLabels.get(this.address);return l`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${O(this.address)}
        icon="${(e==null?void 0:e.type)===se.ACCOUNT_TYPES.SMART_ACCOUNT&&m.state.activeChain===Ce.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${O(this.profileImage?this.profileImage:void 0)}
        profileName=${O(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}onCopyAddress(){try{this.address&&(M.copyToClopboard(this.address),q.showSuccess("Address copied"))}catch{q.showError("Failed to copy")}}onTransactions(){z.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await ee.disconnect(),z.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),te.close()}catch{z.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),q.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=R.state.addressExplorerUrl;e&&M.openHref(e,"_blank")}onGoToUpgradeView(){z.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),S.push("UpgradeEmailWallet")}};Lt.styles=d3;Si([v()],Lt.prototype,"caipAddress",void 0);Si([v()],Lt.prototype,"address",void 0);Si([v()],Lt.prototype,"allAccounts",void 0);Si([v()],Lt.prototype,"profileImage",void 0);Si([v()],Lt.prototype,"profileName",void 0);Si([v()],Lt.prototype,"disconnecting",void 0);Si([v()],Lt.prototype,"balance",void 0);Si([v()],Lt.prototype,"balanceSymbol",void 0);Si([v()],Lt.prototype,"features",void 0);Lt=Si([E("w3m-account-default-widget")],Lt);const p3=N`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var ti=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const h3=3,f3=48,w3=430;let Tt=class extends A{constructor(){super(),this.unsubscribe=[],this.address=R.state.address,this.profileImage=R.state.profileImage,this.profileName=R.state.profileName,this.smartAccountDeployed=R.state.smartAccountDeployed,this.network=m.state.activeCaipNetwork,this.currentTab=R.state.currentTab,this.tokenBalance=R.state.tokenBalance,this.preferredAccountType=R.state.preferredAccountType,this.features=U.state.features,this.unsubscribe.push(R.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):te.close()}),m.subscribeKey("activeCaipNetwork",e=>this.network=e),U.subscribeKey("features",e=>this.features=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){R.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=he.getNetworkImage(this.network);return l`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.network&&l`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${O(this.address)}
        networkSrc=${O(e)}
        icon="chevronBottom"
        avatarSrc=${O(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
        data-testid="w3m-profile-button"
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button
            data-testid="wallet-features-onramp-button"
            @click=${this.onBuyClick.bind(this)}
            icon="card"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
        ${this.swapsTemplate()}
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button
            data-testid="wallet-features-receive-button"
            @click=${this.onReceiveClick.bind(this)}
            icon="arrowBottomCircle"
          >
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button
            data-testid="wallet-features-send-button"
            @click=${this.onSendClick.bind(this)}
            icon="send"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${M.isMobile()&&window.innerWidth<w3?`${(window.innerWidth-f3)/h3}px`:"104px"}
        .tabs=${$i.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}swapsTemplate(){var t;return((t=this.features)==null?void 0:t.swaps)?l`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swap-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>R.fetchTokenBalance(),1e4)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const t=M.calculateBalance(this.tokenBalance),{dollars:r="0",pennies:o="00"}=M.formatTokenBalance(t);return l`<wui-balance dollars=${r} pennies=${o}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!m.checkIfSmartAccountEnabled()||this.preferredAccountType!==se.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:l` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){R.setCurrentTab(e)}onProfileButtonClick(){S.push("Profile")}onBuyClick(){S.push("OnRampProviders")}onSwapClick(){var e,t,r;(e=this.network)!=null&&e.caipNetworkId&&!me.SWAP_SUPPORTED_NETWORKS.includes((t=this.network)==null?void 0:t.caipNetworkId)?S.push("UnsupportedChain",{swapUnsupportedChain:!0}):(z.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:((r=this.network)==null?void 0:r.caipNetworkId)||"",isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.push("Swap"))}onReceiveClick(){S.push("WalletReceive")}onSendClick(){var e;z.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:((e=this.network)==null?void 0:e.caipNetworkId)||"",isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.push("WalletSend")}onUpdateToSmartAccount(){S.push("UpgradeToSmartAccount")}};Tt.styles=p3;ti([v()],Tt.prototype,"watchTokenBalance",void 0);ti([v()],Tt.prototype,"address",void 0);ti([v()],Tt.prototype,"profileImage",void 0);ti([v()],Tt.prototype,"profileName",void 0);ti([v()],Tt.prototype,"smartAccountDeployed",void 0);ti([v()],Tt.prototype,"network",void 0);ti([v()],Tt.prototype,"currentTab",void 0);ti([v()],Tt.prototype,"tokenBalance",void 0);ti([v()],Tt.prototype,"preferredAccountType",void 0);ti([v()],Tt.prototype,"features",void 0);Tt=ti([E("w3m-account-wallet-features-widget")],Tt);const g3=N`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var m3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ys=class extends A{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};Ys.styles=g3;Ys=m3([E("w3m-account-activity-widget")],Ys);const v3=N`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var b3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Xs=class extends A{render(){return l`${this.nftTemplate()}`}nftTemplate(){return l` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`}onReceiveClick(){S.push("WalletReceive")}};Xs.styles=v3;Xs=b3([E("w3m-account-nfts-widget")],Xs);const C3=N`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var Mu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ba=class extends A{constructor(){super(),this.unsubscribe=[],this.tokenBalance=R.state.tokenBalance,this.unsubscribe.push(R.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(t=>l`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){S.push("WalletReceive")}onBuyClick(){z.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.push("OnRampProviders")}};Ba.styles=C3;Mu([v()],Ba.prototype,"tokenBalance",void 0);Ba=Mu([E("w3m-account-tokens-widget")],Ba);const x3=N`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var mr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const ua="last-transaction",y3=7;let Bi=class extends A{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=m.state.activeCaipAddress,this.transactionsByYear=Be.state.transactionsByYear,this.loading=Be.state.loading,this.empty=Be.state.empty,this.next=Be.state.next,Be.clearCursor(),this.unsubscribe.push(m.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(Be.resetTransactions(),Be.fetchTransactions(e)),this.caipAddress=e}),m.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),Be.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){var r;const e=(r=m.state.activeCaipNetwork)==null?void 0:r.caipNetworkId;Be.state.lastNetworkInView!==e&&(Be.resetTransactions(),this.caipAddress&&Be.fetchTransactions(M.getPlainAddress(this.caipAddress))),Be.setLastNetworkInView(e)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(t=>{const r=parseInt(t,10),o=new Array(12).fill(null).map((n,a)=>{var d;const s=Ji.getTransactionGroupTitle(r,a),p=(d=this.transactionsByYear[r])==null?void 0:d[a];return{groupTitle:s,transactions:p}}).filter(({transactions:n})=>n).reverse();return o.map(({groupTitle:n,transactions:a},s)=>{const p=s===o.length-1;return a?l`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${p?"true":"false"}"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a,p)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){const{date:r,descriptions:o,direction:n,isAllNFT:a,images:s,status:p,transfers:d,type:w}=this.getTransactionListItemProps(e),C=(d==null?void 0:d.length)>1;return(d==null?void 0:d.length)===2&&!a?l`
        <wui-transaction-list-item
          date=${r}
          .direction=${n}
          id=${t&&this.next?ua:""}
          status=${p}
          type=${w}
          .images=${s}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:C?d.map((y,T)=>{const _=Ji.getTransferDescription(y),I=t&&T===d.length-1;return l` <wui-transaction-list-item
          date=${r}
          direction=${y.direction}
          id=${I&&this.next?ua:""}
          status=${p}
          type=${w}
          .onlyDirectionIcon=${!0}
          .images=${[s[T]]}
          .descriptions=${[_]}
        ></wui-transaction-list-item>`}):l`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?ua:""}
        status=${p}
        type=${w}
        .images=${s}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,o)=>{const n=t&&o===e.length-1;return l`${this.templateRenderTransaction(r,n)}`})}emptyStateActivity(){return l`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return l`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?l`${this.emptyStateAccount()}`:l`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(y3).fill(l` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){S.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=U.state;this.paginationObserver=new IntersectionObserver(([t])=>{t!=null&&t.isIntersecting&&!this.loading&&(Be.fetchTransactions(M.getPlainAddress(this.caipAddress)),z.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:M.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var t,r,o;(t=this.paginationObserver)==null||t.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${ua}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var p,d,w,C,b;const t=nc.formatDate((p=e==null?void 0:e.metadata)==null?void 0:p.minedAt),r=Ji.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,n=(d=e==null?void 0:e.transfers)==null?void 0:d[0],a=!!n&&((w=e==null?void 0:e.transfers)==null?void 0:w.every(y=>!!y.nft_info)),s=Ji.getTransactionImages(o);return{date:t,direction:n==null?void 0:n.direction,descriptions:r,isAllNFT:a,images:s,status:(C=e.metadata)==null?void 0:C.status,transfers:o,type:(b=e.metadata)==null?void 0:b.operationType}}};Bi.styles=x3;mr([h()],Bi.prototype,"page",void 0);mr([v()],Bi.prototype,"caipAddress",void 0);mr([v()],Bi.prototype,"transactionsByYear",void 0);mr([v()],Bi.prototype,"loading",void 0);mr([v()],Bi.prototype,"empty",void 0);mr([v()],Bi.prototype,"next",void 0);Bi=mr([E("w3m-activity-list")],Bi);const E3=N`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var ea=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let nr=class extends A{render(){return l` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?l`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:l`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){S.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return l`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${t?`$${re.formatNumberToLocalString(t,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l` <wui-text variant="small-400" color="error-100">
          ${re.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:l` <wui-text variant="small-400" color="fg-200">
        ${re.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:l`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){ge.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&typeof this.gasPrice<"u"){const e=this.token.address===void 0||Object.values(me.NATIVE_TOKEN_ADDRESS).some(o=>{var n;return((n=this.token)==null?void 0:n.address)===o}),t=fe.bigNumber(this.gasPrice).shiftedBy(-this.token.quantity.decimals),r=e?fe.bigNumber(this.token.quantity.numeric).minus(t):fe.bigNumber(this.token.quantity.numeric);ge.setTokenAmount(Number(r.toFixed(20)))}}onBuyClick(){S.push("OnRampProviders")}};nr.styles=E3;ea([h({type:Object})],nr.prototype,"token",void 0);ea([h({type:Number})],nr.prototype,"sendTokenAmount",void 0);ea([h({type:Number})],nr.prototype,"gasPriceInUSD",void 0);ea([h({type:Number})],nr.prototype,"gasPrice",void 0);nr=ea([E("w3m-input-token")],nr);const T3=N`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var gs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let jr=class extends A{constructor(){super(...arguments),this.inputElementRef=si(),this.instructionElementRef=si(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=M.debounce(async e=>{const t=await ee.getEnsAddress(e);if(ge.setLoading(!1),t){ge.setReceiverProfileName(e),ge.setReceiverAddress(t);const r=await ee.getEnsAvatar(e);ge.setReceiverProfileImageUrl(r||void 0)}else ge.setReceiverAddress(e),ge.setReceiverProfileName(void 0),ge.setReceiverProfileImageUrl(void 0)})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return l` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${ci(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${ci(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();ge.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),ge.setLoading(!0),this.onDebouncedSearch(t.value)}};jr.styles=T3;gs([h()],jr.prototype,"value",void 0);gs([v()],jr.prototype,"instructionHidden",void 0);gs([v()],jr.prototype,"pasting",void 0);jr=gs([E("w3m-input-address")],jr);const _3=N`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var ms=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Fr=class extends A{render(){return l` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${O(re.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${re.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?l` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${O(he.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&S.push("Networks",{network:e})}};Fr.styles=_3;ms([h()],Fr.prototype,"receiverAddress",void 0);ms([h({type:Object})],Fr.prototype,"caipNetwork",void 0);ms([h({type:Number})],Fr.prototype,"networkFee",void 0);Fr=ms([E("w3m-wallet-send-details")],Fr);const k3=N`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ta=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let rr=class extends A{constructor(){super(),this.unsubscribe=[],this.open=gt.state.open,this.message=gt.state.message,this.triggerRect=gt.state.triggerRect,this.variant=gt.state.variant,this.unsubscribe.push(gt.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,l`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};rr.styles=[k3];ta([v()],rr.prototype,"open",void 0);ta([v()],rr.prototype,"message",void 0);ta([v()],rr.prototype,"triggerRect",void 0);ta([v()],rr.prototype,"variant",void 0);rr=ta([E("w3m-tooltip")],rr);const A3=N`
  :host {
    width: 100%;
    display: block;
  }
`;var Sc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Io=class extends A{constructor(){super(),this.unsubscribe=[],this.text="",this.open=gt.state.open,this.unsubscribe.push(S.subscribeKey("view",()=>{gt.hide()}),te.subscribeKey("open",e=>{e||gt.hide()}),gt.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),gt.hide()}render(){return l`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return l`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||gt.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||gt.hide()}};Io.styles=[A3];Sc([h()],Io.prototype,"text",void 0);Sc([v()],Io.prototype,"open",void 0);Io=Sc([E("w3m-tooltip-trigger")],Io);const S3=N`
  :host > wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Yr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Zl=2,Gl=6;let mn=class extends A{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=Y.state.connectors,this.features=U.state.features,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.unsubscribe.push(Y.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(t=>t.type==="AUTH")}),U.subscribeKey("features",e=>this.features=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;const e=(t=this.features)==null?void 0:t.socials;return!this.authConnector||!e||!(e!=null&&e.length)?null:l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        .padding=${["0","0","xs","0"]}
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `}topViewTemplate(){var t;const e=(t=this.features)==null?void 0:t.socials;return!this.authConnector||!e||!(e!=null&&e.length)?null:e.length===2?l` <wui-flex gap="xs">
        ${e.slice(0,Zl).map(r=>l`<wui-logo-select
              data-testid=${`social-selector-${r}`}
              @click=${()=>{this.onSocialClick(r)}}
              logo=${r}
              tabIdx=${O(this.tabIdx)}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-social
      data-testid=${`social-selector-${e==null?void 0:e[0]}`}
      @click=${()=>{this.onSocialClick(e==null?void 0:e[0])}}
      logo=${O(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${O(this.tabIdx)}
    ></wui-list-social>`}bottomViewTemplate(){var t;const e=(t=this.features)==null?void 0:t.socials;return!this.authConnector||!e||!(e!=null&&e.length)||e.length<=Zl?null:e.length>Gl?l`<wui-flex gap="xs">
        ${e.slice(1,Gl-1).map(r=>l`<wui-logo-select
              data-testid=${`social-selector-${r}`}
              @click=${()=>{this.onSocialClick(r)}}
              logo=${r}
              tabIdx=${O(this.tabIdx)}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${O(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`:l`<wui-flex gap="xs">
      ${e.slice(1,e.length).map(r=>l`<wui-logo-select
            data-testid=${`social-selector-${r}`}
            @click=${()=>{this.onSocialClick(r)}}
            logo=${r}
            tabIdx=${O(this.tabIdx)}
          ></wui-logo-select>`)}
    </wui-flex>`}separatorTemplate(){const e=this.connectors.find(r=>r.id==="walletConnect"),t=U.state.enableWallets;return e&&t||this.walletGuide==="explore"?l`<wui-separator text="or"></wui-separator>`:null}onMoreSocialsClick(){S.push("ConnectSocials")}async onSocialClick(e){var t,r;if(e&&(R.setSocialProvider(e,m.state.activeChain),z.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===ga.Farcaster){S.push("ConnectingFarcaster");const o=Y.getAuthConnector();if(o&&!R.state.farcasterUrl)try{const{url:n}=await o.provider.getFarcasterUri();R.setFarcasterUrl(n,m.state.activeChain)}catch(n){S.goBack(),q.showError(n)}}else{S.push("ConnectingSocial");const o=Y.getAuthConnector();this.popupWindow=M.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(o&&e){const{uri:n}=await o.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&n)R.setSocialWindow(this.popupWindow,m.state.activeChain),this.popupWindow.location.href=n;else throw(t=this.popupWindow)==null||t.close(),new Error("Something went wrong")}}catch{(r=this.popupWindow)==null||r.close(),q.showError("Something went wrong")}}}};mn.styles=S3;Yr([h()],mn.prototype,"walletGuide",void 0);Yr([h()],mn.prototype,"tabIdx",void 0);Yr([v()],mn.prototype,"connectors",void 0);Yr([v()],mn.prototype,"features",void 0);Yr([v()],mn.prototype,"authConnector",void 0);mn=Yr([E("w3m-social-login-widget")],mn);var Bu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Qs=class extends A{constructor(){super(...arguments),this.tabIdx=void 0}render(){return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${O(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${O(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Bu([h()],Qs.prototype,"tabIdx",void 0);Qs=Bu([E("w3m-wallet-login-list")],Qs);const I3=N`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ia=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let or=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.features=U.state.features,this.unsubscribe.push(Y.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(t=>t.type==="AUTH")}),U.subscribeKey("features",e=>this.features=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;const e=(t=this.features)==null?void 0:t.socials;return!this.authConnector||!e||!(e!=null&&e.length)?null:l` <wui-flex flexDirection="column" gap="xs">
      ${e.map(r=>l`<wui-list-social
            @click=${()=>{this.onSocialClick(r)}}
            name=${r}
            logo=${r}
            tabIdx=${O(this.tabIdx)}
          ></wui-list-social>`)}
    </wui-flex>`}async onSocialClick(e){var t,r;if(e&&(R.setSocialProvider(e,m.state.activeChain),z.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===ga.Farcaster){S.push("ConnectingFarcaster");const o=Y.getAuthConnector();if(o&&!R.state.farcasterUrl)try{const{url:n}=await o.provider.getFarcasterUri();R.setFarcasterUrl(n,m.state.activeChain)}catch(n){S.goBack(),q.showError(n)}}else{S.push("ConnectingSocial");const o=Y.getAuthConnector();this.popupWindow=M.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(o&&e){const{uri:n}=await o.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&n)R.setSocialWindow(this.popupWindow,m.state.activeChain),this.popupWindow.location.href=n;else throw(t=this.popupWindow)==null||t.close(),new Error("Something went wrong")}}catch{(r=this.popupWindow)==null||r.close(),q.showError("Something went wrong")}}}};or.styles=I3;ia([h()],or.prototype,"tabIdx",void 0);ia([v()],or.prototype,"connectors",void 0);ia([v()],or.prototype,"authConnector",void 0);ia([v()],or.prototype,"features",void 0);or=ia([E("w3m-social-login-list")],or);var Ic=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ja=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.unsubscribe.push(Y.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>t.type==="ANNOUNCED");return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>{var r,o;return(r=t.info)!=null&&r.rdns&&ne.state.excludedRDNS&&ne.state.excludedRDNS.includes((o=t==null?void 0:t.info)==null?void 0:o.rdns)?null:l`
            <wui-list-wallet
              imageSrc=${O(he.getConnectorImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnector(t)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              .installed=${!0}
              tabIdx=${O(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?M.isMobile()?S.push("AllWallets"):S.push("ConnectingWalletConnect"):S.push("ConnectingExternal",{connector:e})}};Ic([h()],ja.prototype,"tabIdx",void 0);Ic([v()],ja.prototype,"connectors",void 0);ja=Ic([E("w3m-connect-announced-widget")],ja);var Rc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Fa=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.unsubscribe.push(Y.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=U.state;if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return l`<wui-flex flexDirection="column" gap="xs">
      ${t.map(r=>l`
          <wui-list-wallet
            imageSrc=${O(he.getWalletImage(r))}
            name=${r.name??"Unknown"}
            @click=${()=>this.onConnectWallet(r)}
            data-testid=${`wallet-selector-${r.id}`}
            tabIdx=${O(this.tabIdx)}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=de.getRecentWallets(),r=this.connectors.map(s=>{var p;return(p=s.info)==null?void 0:p.rdns}).filter(Boolean),o=t.map(s=>s.rdns).filter(Boolean),n=r.concat(o);if(n.includes("io.metamask.mobile")&&M.isMobile()){const s=n.indexOf("io.metamask.mobile");n[s]="io.metamask"}return e.filter(s=>!n.includes(String(s==null?void 0:s.rdns)))}onConnectWallet(e){S.push("ConnectingWalletConnect",{wallet:e})}};Rc([h()],Fa.prototype,"tabIdx",void 0);Rc([v()],Fa.prototype,"connectors",void 0);Fa=Rc([E("w3m-connect-custom-widget")],Fa);var ju=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Js=class extends A{constructor(){super(...arguments),this.unsubscribe=[],this.tabIdx=void 0}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{featured:e}=ne.state;if(!e.length)return this.style.cssText="display: none",null;const t=Mr.filterOutDuplicateWallets(e);return l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(r=>l`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${r.id}`}
              imageSrc=${O(he.getWalletImage(r))}
              name=${r.name??"Unknown"}
              @click=${()=>this.onConnectWallet(r)}
              tabIdx=${O(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){const t=Y.getConnector(e.id,e.rdns);t?S.push("ConnectingExternal",{connector:t}):S.push("ConnectingWalletConnect",{wallet:e})}};ju([h()],Js.prototype,"tabIdx",void 0);Js=ju([E("w3m-connect-featured-widget")],Js);var Nc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let za=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.unsubscribe.push(Y.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;const e=this.connectors.filter(r=>r.type==="INJECTED");return!(e!=null&&e.length)||e.length===1&&((t=e[0])==null?void 0:t.name)==="Browser Wallet"&&!M.isMobile()?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(r=>{var n;if(!M.isMobile()&&r.name==="Browser Wallet")return null;const o=(n=r.info)==null?void 0:n.rdns;return!o&&!ee.checkInstalled(void 0)?(this.style.cssText="display: none",null):o&&ne.state.excludedRDNS&&ne.state.excludedRDNS.includes(o)?null:l`
            <wui-list-wallet
              imageSrc=${O(he.getConnectorImage(r))}
              .installed=${!0}
              name=${r.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${r.id}`}
              @click=${()=>this.onConnector(r)}
              tabIdx=${O(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){m.setActiveConnector(e),S.push("ConnectingExternal",{connector:e})}};Nc([h()],za.prototype,"tabIdx",void 0);Nc([v()],za.prototype,"connectors",void 0);za=Nc([E("w3m-connect-injected-widget")],za);var $c=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Va=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.unsubscribe.push(Y.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>t.type==="MULTI_CHAIN"&&t.name!=="WalletConnect");return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>l`
            <wui-list-wallet
              imageSrc=${O(he.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${O(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){m.setActiveConnector(e),S.push("ConnectingMultiChain")}};$c([h()],Va.prototype,"tabIdx",void 0);$c([v()],Va.prototype,"connectors",void 0);Va=$c([E("w3m-connect-multi-chain-widget")],Va);var Pc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ha=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.unsubscribe.push(Y.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const t=this.connectors.filter(r=>r.type==="EXTERNAL").filter(r=>r.id!=="coinbaseWalletSDK");return t!=null&&t.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(r=>l`
            <wui-list-wallet
              imageSrc=${O(he.getConnectorImage(r))}
              .installed=${!0}
              name=${r.name??"Unknown"}
              data-testid=${`wallet-selector-external-${r.id}`}
              @click=${()=>this.onConnector(r)}
              tabIdx=${O(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){S.push("ConnectingExternal",{connector:e})}};Pc([h()],Ha.prototype,"tabIdx",void 0);Pc([v()],Ha.prototype,"connectors",void 0);Ha=Pc([E("w3m-connect-external-widget")],Ha);var Fu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ec=class extends A{constructor(){super(...arguments),this.tabIdx=void 0}render(){const e=de.getRecentWallets();return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>l`
            <wui-list-wallet
              imageSrc=${O(he.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${O(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){S.push("ConnectingWalletConnect",{wallet:e})}};Fu([h()],ec.prototype,"tabIdx",void 0);ec=Fu([E("w3m-connect-recent-widget")],ec);var Oc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Za=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.unsubscribe.push(Y.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.connectors.find(b=>b.id==="walletConnect"))return null;const{recommended:t}=ne.state,{customWallets:r,featuredWalletIds:o}=U.state,{connectors:n}=Y.state,a=de.getRecentWallets(),p=n.filter(b=>b.type==="INJECTED"||b.type==="ANNOUNCED"||b.type==="MULTI_CHAIN").filter(b=>b.name!=="Browser Wallet");if(o||r||!t.length)return this.style.cssText="display: none",null;const d=p.length+a.length,w=Math.max(0,2-d),C=Mr.filterOutDuplicateWallets(t).slice(0,w);return C.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${C.map(b=>l`
            <wui-list-wallet
              imageSrc=${O(he.getWalletImage(b))}
              name=${(b==null?void 0:b.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(b)}
              tabIdx=${O(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){const t=Y.getConnector(e.id,e.rdns);t?S.push("ConnectingExternal",{connector:t}):S.push("ConnectingWalletConnect",{wallet:e})}};Oc([h()],Za.prototype,"tabIdx",void 0);Oc([v()],Za.prototype,"connectors",void 0);Za=Oc([E("w3m-connect-recommended-widget")],Za);var Lc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ga=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.unsubscribe.push(Y.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(M.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(t=>t.id==="walletConnect");return e?l`
      <wui-list-wallet
        imageSrc=${O(he.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${O(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText="display: none",null)}onConnector(e){m.setActiveConnector(e),S.push("ConnectingWalletConnect")}};Lc([h()],Ga.prototype,"tabIdx",void 0);Lc([v()],Ga.prototype,"connectors",void 0);Ga=Lc([E("w3m-connect-walletconnect-widget")],Ga);const R3=N`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Dc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ro=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.unsubscribe.push(Y.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{custom:e,recent:t,announced:r,injected:o,multiChain:n,recommended:a,featured:s,external:p}=this.getConnectorsByType(),d=U.state.enableWalletConnect;return l`
      <wui-flex flexDirection="column" gap="xs">
        ${d?l`<w3m-connect-walletconnect-widget
              tabIdx=${O(this.tabIdx)}
            ></w3m-connect-walletconnect-widget>`:null}
        ${t.length?l`<w3m-connect-recent-widget
              tabIdx=${O(this.tabIdx)}
            ></w3m-connect-recent-widget>`:null}
        ${n.length?l`<w3m-connect-multi-chain-widget
              tabIdx=${O(this.tabIdx)}
            ></w3m-connect-multi-chain-widget>`:null}
        ${r.length?l`<w3m-connect-announced-widget
              tabIdx=${O(this.tabIdx)}
            ></w3m-connect-announced-widget>`:null}
        ${o.length?l`<w3m-connect-injected-widget
              tabIdx=${O(this.tabIdx)}
            ></w3m-connect-injected-widget>`:null}
        ${s.length?l`<w3m-connect-featured-widget
              tabIdx=${O(this.tabIdx)}
            ></w3m-connect-featured-widget>`:null}
        ${e!=null&&e.length?l`<w3m-connect-custom-widget
              tabIdx=${O(this.tabIdx)}
            ></w3m-connect-custom-widget>`:null}
        ${p.length?l`<w3m-connect-external-widget
              tabIdx=${O(this.tabIdx)}
            ></w3m-connect-external-widget>`:null}
        ${a.length?l`<w3m-connect-recommended-widget
              tabIdx=${O(this.tabIdx)}
            ></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}getConnectorsByType(){const{featured:e,recommended:t}=ne.state,{customWallets:r}=U.state,o=de.getRecentWallets(),n=Mr.filterOutDuplicateWallets(t),a=Mr.filterOutDuplicateWallets(e),s=this.connectors.filter(C=>C.type==="MULTI_CHAIN"),p=this.connectors.filter(C=>C.type==="ANNOUNCED"),d=this.connectors.filter(C=>C.type==="INJECTED"),w=this.connectors.filter(C=>C.type==="EXTERNAL");return{custom:r,recent:o,external:w,multiChain:s,announced:p,injected:d,recommended:n,featured:a}}};Ro.styles=R3;Dc([h()],Ro.prototype,"tabIdx",void 0);Dc([v()],Ro.prototype,"connectors",void 0);Ro=Dc([E("w3m-connector-list")],Ro);var vs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let No=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=Y.state.connectors,this.count=ne.state.count,this.unsubscribe.push(Y.subscribeKey("connectors",e=>this.connectors=e),ne.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(s=>s.id==="walletConnect"),{allWallets:t}=U.state;if(!e||t==="HIDE"||t==="ONLY_MOBILE"&&!M.isMobile())return null;const r=ne.state.featured.length,o=this.count+r,n=o<10?o:Math.floor(o/10)*10,a=n<o?`${n}+`:`${n}`;return l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${O(this.tabIdx)}
      ></wui-list-wallet>
    `}onAllWallets(){z.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),S.push("AllWallets")}};vs([h()],No.prototype,"tabIdx",void 0);vs([v()],No.prototype,"connectors",void 0);vs([v()],No.prototype,"count",void 0);No=vs([E("w3m-all-wallets-widget")],No);var N3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ql=class extends A{constructor(){super(...arguments),this.socialProvider=de.getConnectedSocialProvider(),this.socialUsername=de.getConnectedSocialUsername()}render(){const e=de.getConnectedConnector(),t=Y.getAuthConnector();if(!t||e!=="ID_AUTH")return this.style.cssText="display: none",null;const r=t.provider.getEmail()??"";return l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(r,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(r)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||S.push("UpdateEmailWallet",{email:e})}getAuthName(e){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};ql=N3([E("w3m-account-auth-button")],ql);const $3=N`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Uc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $o=class extends A{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return this.walletGuide==="explore"?l`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://explorer.walletconnect.com"
              title="Visit our Explorer"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:l`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${O(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){S.push("Create")}};$o.styles=$3;Uc([h()],$o.prototype,"tabIdx",void 0);Uc([h()],$o.prototype,"walletGuide",void 0);$o=Uc([E("w3m-wallet-guide")],$o);const P3=N`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var O3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let tc=class extends A{constructor(){var e,t;super(...arguments),this.dappImageUrl=(e=U.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(t=R.state.connectedWalletInfo)==null?void 0:t.icon}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};tc.styles=P3;tc=O3([E("w3m-siwx-sign-message-thumbnails")],tc);Wc.type="walletConnect";function Wc(i,e,t){const r=i.isNewChainsStale??!0;let o,n,a,s,p,d,w;return C=>({id:"walletConnect",name:"WalletConnect",type:Wc.type,async setup(){const b=await this.getProvider().catch(()=>null);b&&(s||(s=this.onConnect.bind(this),b.on("connect",s)),d||(d=this.onSessionDelete.bind(this),b.on("session_delete",d)))},async connect({...b}={}){try{const y=await this.getProvider();if(!y)throw new Xi;p||(p=this.onDisplayUri,y.on("display_uri",p));const T=await this.isChainsStale();if(y.session&&T&&await y.disconnect(),!y.session||T){const B=Cc.createNamespaces(t);await y.connect({optionalNamespaces:B,..."pairingTopic"in b?{pairingTopic:b.pairingTopic}:{}}),this.setRequestedChainsIds(t.map(W=>Number(W.id)))}const _=(await y.enable()).map(B=>vt(B)),I=await this.getChainId();return p&&(y.removeListener("display_uri",p),p=void 0),s&&(y.removeListener("connect",s),s=void 0),n||(n=this.onAccountsChanged.bind(this),y.on("accountsChanged",n)),a||(a=this.onChainChanged.bind(this),y.on("chainChanged",a)),w||(w=this.onDisconnect.bind(this),y.on("disconnect",w)),d||(d=this.onSessionDelete.bind(this),y.on("session_delete",d)),{accounts:_,chainId:I}}catch(y){throw/(user rejected|connection request reset)/i.test(y==null?void 0:y.message)?new Ge(y):y}},async disconnect(){const b=await this.getProvider();try{await(b==null?void 0:b.disconnect())}catch(y){if(!/No matching key/i.test(y.message))throw y}finally{a&&(b==null||b.removeListener("chainChanged",a),a=void 0),w&&(b==null||b.removeListener("disconnect",w),w=void 0),s||(s=this.onConnect.bind(this),b==null||b.on("connect",s)),n&&(b==null||b.removeListener("accountsChanged",n),n=void 0),d&&(b==null||b.removeListener("session_delete",d),d=void 0),this.setRequestedChainsIds([])}},async getAccounts(){var _,I,B;const b=await this.getProvider();if(!((_=b==null?void 0:b.session)!=null&&_.namespaces))return[];const y=(B=(I=b==null?void 0:b.session)==null?void 0:I.namespaces.eip155)==null?void 0:B.accounts;return(y==null?void 0:y.map(W=>W.split(":")[2]))??[]},async getProvider({chainId:b}={}){var T,_;o||(o=await e.getUniversalProvider(),o==null||o.events.setMaxListeners(Number.POSITIVE_INFINITY));const y=(T=e.getCaipNetwork())==null?void 0:T.id;if(b&&y!==b){const I=de.getStoredActiveCaipNetwork();I&&I.chainNamespace===Ce.CHAIN.EVM&&await((_=this.switchChain)==null?void 0:_.call(this,{chainId:Number(I.id)}))}return o},async getChainId(){var I,B,W,D;const b=(I=e.getCaipNetwork())==null?void 0:I.id;if(b)return b;const T=(D=(W=(B=(await this.getProvider()).session)==null?void 0:B.namespaces.eip155)==null?void 0:W.chains)==null?void 0:D[0],_=t.find(V=>V.id===T);return _==null?void 0:_.id},async isAuthorized(){try{const[b,y]=await Promise.all([this.getAccounts(),this.getProvider()]);return b.length?await this.isChainsStale()&&y.session?(await y.disconnect().catch(()=>{}),!1):!0:!1}catch{return!1}},async switchChain({addEthereumChainParameter:b,chainId:y}){var I,B;const T=await this.getProvider();if(!T)throw new Xi;const _=t.find(W=>W.id===y);if(!_)throw new Pi(new Pn);try{await T.request({method:"wallet_switchEthereumChain",params:[{chainId:rn(y)}]}),_!=null&&_.caipNetworkId&&T.setDefaultChain(_==null?void 0:_.caipNetworkId),C.emitter.emit("change",{chainId:Number(y)});const W=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...W,y]),{..._,id:_.id}}catch(W){const D=W;if(/(?:user rejected)/iu.test(D.message))throw new Ge(D);try{let V;b!=null&&b.blockExplorerUrls?V=b.blockExplorerUrls:V=(I=_.blockExplorers)!=null&&I.default.url?[(B=_.blockExplorers)==null?void 0:B.default.url]:[];const L={blockExplorerUrls:V,chainId:rn(y),chainName:_.name,iconUrls:b==null?void 0:b.iconUrls,nativeCurrency:_.nativeCurrency,rpcUrls:_.rpcUrls.default.http};await T.request({method:"wallet_addEthereumChain",params:[L]});const K=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...K,y]),{..._,id:_.id}}catch(V){throw new Ge(V)}}},onAccountsChanged(b){b.length===0?this.onDisconnect():C.emitter.emit("change",{accounts:b.map(y=>vt(y))})},onChainChanged(b){const y=Number(b);C.emitter.emit("change",{chainId:y})},onConnect(b){this.setRequestedChainsIds(t.map(y=>Number(y.id)))},async onDisconnect(b){this.setRequestedChainsIds([]),C.emitter.emit("disconnect");const y=await this.getProvider();n&&(y.removeListener("accountsChanged",n),n=void 0),a&&(y.removeListener("chainChanged",a),a=void 0),w&&(y.removeListener("disconnect",w),w=void 0),d&&(y.removeListener("session_delete",d),d=void 0),s||(s=this.onConnect.bind(this),y.on("connect",s))},onDisplayUri(b){C.emitter.emit("message",{type:"display_uri",data:b})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){var T,_,I;if(!((T=o==null?void 0:o.session)!=null&&T.namespaces))return[];const b=(I=(_=o==null?void 0:o.session)==null?void 0:_.namespaces.eip155)==null?void 0:I.accounts;return(b==null?void 0:b.map(B=>Number.parseInt(B.split(":")[1]??"")))??[]},async getRequestedChainsIds(){var y;const b=await((y=C.storage)==null?void 0:y.getItem(this.requestedChainsStorageKey))??[];return[...new Set(b)]},async isChainsStale(){if(!r)return!1;const b=C.chains.map(_=>_.id),y=this.getNamespaceChainsIds();if(y.length&&!y.some(_=>b.includes(_)))return!1;const T=await this.getRequestedChainsIds();return!b.every(_=>T.includes(Number(_)))},async setRequestedChainsIds(b){var y;await((y=C.storage)==null?void 0:y.setItem(this.requestedChainsStorageKey,b))},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}bs.type="coinbaseWallet";function bs(i={}){return i.version==="3"||i.headlessMode?D3(i):L3(i)}function L3(i){let e,t,r,o;return n=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",rdns:"com.coinbase.wallet",type:bs.type,async connect({chainId:a,...s}={}){try{const p=await this.getProvider(),d=(await p.request({method:"eth_requestAccounts",params:"instantOnboarding"in s&&s.instantOnboarding?[{onboarding:"instant"}]:[]})).map(C=>vt(C));t||(t=this.onAccountsChanged.bind(this),p.on("accountsChanged",t)),r||(r=this.onChainChanged.bind(this),p.on("chainChanged",r)),o||(o=this.onDisconnect.bind(this),p.on("disconnect",o));let w=await this.getChainId();if(a&&w!==a){const C=await this.switchChain({chainId:a}).catch(b=>{if(b.code===Ge.code)throw b;return{id:w}});w=(C==null?void 0:C.id)??w}return{accounts:d,chainId:w}}catch(p){throw/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(p.message)?new Ge(p):p}},async disconnect(){var s;const a=await this.getProvider();t&&(a.removeListener("accountsChanged",t),t=void 0),r&&(a.removeListener("chainChanged",r),r=void 0),o&&(a.removeListener("disconnect",o),o=void 0),a.disconnect(),(s=a.close)==null||s.call(a)},async getAccounts(){return(await(await this.getProvider()).request({method:"eth_accounts"})).map(s=>vt(s))},async getChainId(){const s=await(await this.getProvider()).request({method:"eth_chainId"});return Number(s)},async getProvider(){if(!e){const a=(()=>{var d;return typeof i.preference=="string"?{options:i.preference}:{...i.preference,options:((d=i.preference)==null?void 0:d.options)??"all"}})(),{createCoinbaseWalletSDK:s}=await so(async()=>{const{createCoinbaseWalletSDK:d}=await import("./chunk.index-Si1u1Z0u.js");return{createCoinbaseWalletSDK:d}},__vite__mapDeps([0,1,2,3]));e=s({...i,appChainIds:n.chains.map(d=>d.id),preference:a}).getProvider()}return e},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({addEthereumChainParameter:a,chainId:s}){var w,C,b,y;const p=n.chains.find(T=>T.id===s);if(!p)throw new Pi(new Pn);const d=await this.getProvider();try{return await d.request({method:"wallet_switchEthereumChain",params:[{chainId:rn(p.id)}]}),p}catch(T){if(T.code===4902)try{let _;a!=null&&a.blockExplorerUrls?_=a.blockExplorerUrls:_=(w=p.blockExplorers)!=null&&w.default.url?[(C=p.blockExplorers)==null?void 0:C.default.url]:[];let I;(b=a==null?void 0:a.rpcUrls)!=null&&b.length?I=a.rpcUrls:I=[((y=p.rpcUrls.default)==null?void 0:y.http[0])??""];const B={blockExplorerUrls:_,chainId:rn(s),chainName:(a==null?void 0:a.chainName)??p.name,iconUrls:a==null?void 0:a.iconUrls,nativeCurrency:(a==null?void 0:a.nativeCurrency)??p.nativeCurrency,rpcUrls:I};return await d.request({method:"wallet_addEthereumChain",params:[B]}),p}catch(_){throw new Ge(_)}throw new Pi(T)}},onAccountsChanged(a){a.length===0?this.onDisconnect():n.emitter.emit("change",{accounts:a.map(s=>vt(s))})},onChainChanged(a){const s=Number(a);n.emitter.emit("change",{chainId:s})},async onDisconnect(a){n.emitter.emit("disconnect");const s=await this.getProvider();t&&(s.removeListener("accountsChanged",t),t=void 0),r&&(s.removeListener("chainChanged",r),r=void 0),o&&(s.removeListener("disconnect",o),o=void 0)}})}function D3(i){let t,r,o,n,a;return s=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",type:bs.type,async connect({chainId:p}={}){try{const d=await this.getProvider(),w=(await d.request({method:"eth_requestAccounts"})).map(b=>vt(b));o||(o=this.onAccountsChanged.bind(this),d.on("accountsChanged",o)),n||(n=this.onChainChanged.bind(this),d.on("chainChanged",n)),a||(a=this.onDisconnect.bind(this),d.on("disconnect",a));let C=await this.getChainId();if(p&&C!==p){const b=await this.switchChain({chainId:p}).catch(y=>{if(y.code===Ge.code)throw y;return{id:C}});C=(b==null?void 0:b.id)??C}return{accounts:w,chainId:C}}catch(d){throw/(user closed modal|accounts received is empty|user denied account)/i.test(d.message)?new Ge(d):d}},async disconnect(){const p=await this.getProvider();o&&(p.removeListener("accountsChanged",o),o=void 0),n&&(p.removeListener("chainChanged",n),n=void 0),a&&(p.removeListener("disconnect",a),a=void 0),p.disconnect(),p.close()},async getAccounts(){return(await(await this.getProvider()).request({method:"eth_accounts"})).map(d=>vt(d))},async getChainId(){const d=await(await this.getProvider()).request({method:"eth_chainId"});return Number(d)},async getProvider(){var p;if(!r){const d=await(async()=>{const{default:T}=await so(async()=>{const{default:_}=await import("./chunk.index-CtMxEuXF.js").then(I=>I.i);return{default:_}},__vite__mapDeps([4,1,2,3]));return typeof T!="function"&&typeof T.default=="function"?T.default:T})();t=new d({...i,reloadOnDisconnect:!1});const w=(p=t.walletExtension)==null?void 0:p.getChainId(),C=s.chains.find(T=>i.chainId?T.id===i.chainId:T.id===w)||s.chains[0],b=i.chainId||(C==null?void 0:C.id),y=i.jsonRpcUrl||(C==null?void 0:C.rpcUrls.default.http[0]);r=t.makeWeb3Provider(y,b)}return r},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({addEthereumChainParameter:p,chainId:d}){var b,y,T,_;const w=s.chains.find(I=>I.id===d);if(!w)throw new Pi(new Pn);const C=await this.getProvider();try{return await C.request({method:"wallet_switchEthereumChain",params:[{chainId:rn(w.id)}]}),w}catch(I){if(I.code===4902)try{let B;p!=null&&p.blockExplorerUrls?B=p.blockExplorerUrls:B=(b=w.blockExplorers)!=null&&b.default.url?[(y=w.blockExplorers)==null?void 0:y.default.url]:[];let W;(T=p==null?void 0:p.rpcUrls)!=null&&T.length?W=p.rpcUrls:W=[((_=w.rpcUrls.default)==null?void 0:_.http[0])??""];const D={blockExplorerUrls:B,chainId:rn(d),chainName:(p==null?void 0:p.chainName)??w.name,iconUrls:p==null?void 0:p.iconUrls,nativeCurrency:(p==null?void 0:p.nativeCurrency)??w.nativeCurrency,rpcUrls:W};return await C.request({method:"wallet_addEthereumChain",params:[D]}),w}catch(B){throw new Ge(B)}throw new Pi(I)}},onAccountsChanged(p){p.length===0?this.onDisconnect():s.emitter.emit("change",{accounts:p.map(d=>vt(d))})},onChainChanged(p){const d=Number(p);s.emitter.emit("change",{chainId:d})},async onDisconnect(p){s.emitter.emit("disconnect");const d=await this.getProvider();o&&(d.removeListener("accountsChanged",o),o=void 0),n&&(d.removeListener("chainChanged",n),n=void 0),a&&(d.removeListener("disconnect",a),a=void 0)}})}function U3(i){try{return JSON.parse(i)}catch{throw new Error("Error parsing wallet capabilities")}}class Lv extends nu{constructor(e){super({projectId:e.projectId,networks:Rn.extendCaipNetworks(e.networks,{projectId:e.projectId,customNetworkImageUrls:{}})}),this.adapterType="wagmi",this.namespace=Ce.CHAIN.EVM,this.createConfig({...e,networks:Rn.extendCaipNetworks(e.networks,{projectId:e.projectId,customNetworkImageUrls:{}}),projectId:e.projectId}),this.setupWatchers()}createConfig(e){this.caipNetworks=Rn.extendCaipNetworks(e.networks,{projectId:e.projectId,customNetworkImageUrls:{}}),this.wagmiChains=this.caipNetworks.filter(n=>n.chainNamespace===Ce.CHAIN.EVM);const t=this.wagmiChains.map(n=>[n.id,Rn.getViemTransport(n)]);Object.entries(e.transports??{}).forEach(([n,a])=>{const s=t.findIndex(([p])=>p===Number(n));s===-1?t.push([Number(n),a]):t[s]=[Number(n),a]});const r=Object.fromEntries(t),o=[...e.connectors??[]];this.wagmiConfig=Pp({...e,chains:this.wagmiChains,transports:r,connectors:o})}setupWatchers(){dp(this.wagmiConfig,{onChange:e=>{e.address&&this.emit("accountChanged",{address:e.address,chainId:e.chainId}),e.chainId&&this.emit("switchNetwork",{address:e.address,chainId:e.chainId})}}),pp(this.wagmiConfig,{onChange:e=>{e.length===0&&this.emit("disconnect")}})}addWagmiConnectors(e,t){var a,s,p,d,w,C,b,y;const r=[];e.enableCoinbase!==!1&&r.push(bs({version:"4",appName:((a=e.metadata)==null?void 0:a.name)??"Unknown",appLogoUrl:((s=e.metadata)==null?void 0:s.icons[0])??"Unknown",preference:e.coinbasePreference??"all"})),e.enableWalletConnect!==!1&&r.push(Wc(e,t,this.caipNetworks)),e.enableInjected!==!1&&r.push(Xa({shimDisconnect:!0}));const o=((p=e.features)==null?void 0:p.email)===void 0?me.DEFAULT_FEATURES.email:(d=e.features)==null?void 0:d.email,n=(w=e.features)!=null&&w.socials?((b=(C=e.features)==null?void 0:C.socials)==null?void 0:b.length)>0:me.DEFAULT_FEATURES.socials;(o||n)&&r.push(Op({chains:this.wagmiChains,options:{projectId:e.projectId},provider:(y=this.availableConnectors.find(T=>T.id===oe.AUTH_CONNECTOR_ID))==null?void 0:y.provider})),r.forEach(T=>{const _=this.wagmiConfig._internal.connectors.setup(T);this.wagmiConfig._internal.connectors.setState(I=>[...I,_])})}async signMessage(e){try{return{signature:await cp(this.wagmiConfig,{message:e.message,account:e.address})}}catch{throw new Error("WagmiAdapter:signMessage - Sign message failed")}}async sendTransaction(e){const{chainId:t}=ac(this.wagmiConfig),r={account:e.address,to:e.to,value:e.value,gas:e.gas,gasPrice:e.gasPrice,data:e.data,chainId:t,type:"legacy"};await ap(this.wagmiConfig,r);const o=await sp(this.wagmiConfig,r);return await hp(this.wagmiConfig,{hash:o,timeout:25e3}),{hash:o}}async writeContract(e){var a;const{caipNetwork:t,...r}=e,o=Number(In.caipNetworkIdToNumber(t.caipNetworkId));return{hash:await fp(this.wagmiConfig,{chain:(a=this.wagmiChains)==null?void 0:a[o],chainId:o,address:r.tokenAddress,account:r.fromAddress,abi:r.abi,functionName:r.method,args:[r.receiverAddress,r.tokenAmount]})}}async getEnsAddress(e){const{name:t,caipNetwork:r}=e;try{if(!this.wagmiConfig)throw new Error("networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined");let o=!1,n=!1;return Xd(t)&&(n=await Cc.resolveReownName(t)||!1),r.id===1&&(o=await np(this.wagmiConfig,{name:yd(t),chainId:r.id})),{address:o||n||!1}}catch{return{address:!1}}}async estimateGas(e){try{return{gas:await Q1(this.wagmiConfig,{account:e.address,to:e.to,data:e.data,type:"legacy"})}}catch{throw new Error("WagmiAdapter:estimateGas - error estimating gas")}}parseUnits(e){return Md(e.value,e.decimals)}formatUnits(e){return ic(e.value,e.decimals)}syncConnectors(e,t){this.addWagmiConnectors(e,t);const r=this.wagmiConfig.connectors.map(a=>({...a,chain:this.namespace})),o=new Set;r.filter(a=>{const s=o.has(a.id);return o.add(a.id),!s}).forEach(a=>{var d;const s=oe.AUTH_CONNECTOR_ID===a.id,p=a.id===oe.INJECTED_CONNECTOR_ID;!s&&this.namespace&&this.addConnector({id:a.id,explorerId:Qi.ConnectorExplorerIds[a.id],imageUrl:((d=e==null?void 0:e.connectorImages)==null?void 0:d[a.id])??a.icon,name:Qi.ConnectorNamesMap[a.id]??a.name,imageId:Qi.ConnectorImageIds[a.id],type:Qi.ConnectorTypesMap[a.type]??"EXTERNAL",info:p?void 0:{rdns:a.id},chain:this.namespace,chains:[]})})}async syncConnection(e){const{id:t}=e,o=Er(this.wagmiConfig).find(s=>s.connector.id===t),n=this.wagmiConfig.connectors.find(s=>s.id===t),a=await(n==null?void 0:n.getProvider());return{chainId:Number(o==null?void 0:o.chainId),address:o==null?void 0:o.accounts[0],provider:a,type:o==null?void 0:o.connector.type,id:o==null?void 0:o.connector.id}}async connectWalletConnect(e,t){const r=this.wagmiConfig.connectors.find(n=>n.type==="walletConnect"),o=await r.getProvider();if(!this.caipNetworks||!o)throw new Error("UniversalAdapter:connectWalletConnect - caipNetworks or provider is undefined");o.on("display_uri",n=>{e(n)}),await ul(this.wagmiConfig,{connector:r,chainId:t?Number(t):void 0})}async connect(e){var d;const{id:t,provider:r,type:o,info:n,chainId:a}=e,s=this.wagmiConfig.connectors.find(w=>w.id===t);if(!s)throw new Error("connectionControllerClient:connectExternal - connector is undefined");r&&n&&s.id===oe.EIP6963_CONNECTOR_ID&&((d=s.setEip6963Wallet)==null||d.call(s,{provider:r,info:n}));const p=await ul(this.wagmiConfig,{connector:s,chainId:a?Number(a):void 0});return{address:p.accounts[0],chainId:p.chainId,provider:r,type:o,id:t}}async reconnect(e){const{id:t}=e,r=this.wagmiConfig.connectors.find(o=>o.id===t);if(!r)throw new Error("connectionControllerClient:connectExternal - connector is undefined");await su(this.wagmiConfig,{connectors:[r]})}async getBalance(e){var r,o,n;const t=(r=this.caipNetworks)==null?void 0:r.find(a=>a.id===e.chainId);if(t&&this.wagmiConfig){const a=Number(e.chainId),s=await ip(this.wagmiConfig,{address:e.address,chainId:a,token:(n=(o=e.tokens)==null?void 0:o[t.caipNetworkId])==null?void 0:n.address});return{balance:s.formatted,symbol:s.symbol}}return{balance:"",symbol:""}}async getProfile(e){const t=e.chainId,r=await op(this.wagmiConfig,{address:e.address,chainId:t});if(r){const o=await rp(this.wagmiConfig,{name:r,chainId:t});return{profileName:r,profileImage:o??void 0}}return{profileName:void 0,profileImage:void 0}}getWalletConnectProvider(){var e;return(e=this.wagmiConfig.connectors.find(t=>t.type==="walletConnect"))==null?void 0:e.provider}async disconnect(){const e=Er(this.wagmiConfig);await Promise.all(e.map(async t=>{const r=t==null?void 0:t.connector;r&&await X1(this.wagmiConfig,{connector:r})}))}async switchNetwork(e){await up(this.wagmiConfig,{chainId:e.caipNetwork.id})}async getCapabilities(e){var a,s;if(!this.wagmiConfig)throw new Error("connectionControllerClient:getCapabilities - wagmiConfig is undefined");const r=Er(this.wagmiConfig)[0];if(!(r!=null&&r.connector))throw new Error("connectionControllerClient:getCapabilities - connector is undefined");const o=await r.connector.getProvider();if(!o)throw new Error("connectionControllerClient:getCapabilities - provider is undefined");const n=(s=(a=o.session)==null?void 0:a.sessionProperties)==null?void 0:s.capabilities;if(n){const d=U3(n)[e];if(d)return d}return await o.request({method:"wallet_getCapabilities",params:[e]})}async grantPermissions(e){if(!this.wagmiConfig)throw new Error("connectionControllerClient:grantPermissions - wagmiConfig is undefined");const r=Er(this.wagmiConfig)[0];if(!(r!=null&&r.connector))throw new Error("connectionControllerClient:grantPermissions - connector is undefined");const o=await r.connector.getProvider();if(!o)throw new Error("connectionControllerClient:grantPermissions - provider is undefined");return o.request({method:"wallet_grantPermissions",params:e})}async revokePermissions(e){if(!this.wagmiConfig)throw new Error("connectionControllerClient:revokePermissions - wagmiConfig is undefined");const r=Er(this.wagmiConfig)[0];if(!(r!=null&&r.connector))throw new Error("connectionControllerClient:revokePermissions - connector is undefined");const o=await r.connector.getProvider();if(!o)throw new Error("connectionControllerClient:revokePermissions - provider is undefined");return o.request({method:"wallet_revokePermissions",params:e})}}function Dv(){async function i(){await ee.disconnect()}return{disconnect:i}}let mt;function W3(i){i&&(mt=i)}function Uv(){if(!mt)throw new Error('Please call "createAppKit" before using "useAppKit" hook');async function i(t){await(mt==null?void 0:mt.open(t))}async function e(){await(mt==null?void 0:mt.close())}return{open:i,close:e}}function Wv(){if(!mt)throw new Error('Please call "createAppKit" before using "useAppKitState" hook');const[i,e]=ed(mt.getState());return td(()=>{const t=mt==null?void 0:mt.subscribeState(r=>{e({...r})});return()=>{t==null||t()}},[]),i}let da;function Mv(i){return da||(da=new kg({...i,sdkVersion:M.generateSdkVersion(i.adapters??[],"react",Ag)}),W3(da)),da}const nt=Ie({status:"uninitialized"}),ro={state:nt,subscribeKey(i,e){return Ke(nt,i,e)},subscribe(i){return qe(nt,()=>i(nt))},_getClient(){if(!nt._client)throw new Error("SIWEController client not set");return nt._client},async getNonce(i){const t=await this._getClient().getNonce(i);return this.setNonce(t),t},async getSession(){try{const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e||void 0}catch{return}},createMessage(i){const t=this._getClient().createMessage(i);return this.setMessage(t),t},async verifyMessage(i){return await this._getClient().verifyMessage(i)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const i=this._getClient();await i.signOut(),this.setStatus("ready"),this.setSession(void 0),(e=i.onSignOut)==null||e.call(i)},onSignIn(i){var t;const e=this._getClient();(t=e.onSignIn)==null||t.call(e,i)},onSignOut(){var e;const i=this._getClient();(e=i.onSignOut)==null||e.call(i)},async setSIWEClient(i){nt._client=$t(i),nt.session=await this.getSession(),nt.status=nt.session?"success":"ready"},setNonce(i){nt.nonce=i},setStatus(i){nt.status=i},setMessage(i){nt.message=i},setSession(i){nt.session=i,nt.status=i?"success":"ready"}},Kl={FIVE_MINUTES_IN_MS:3e5};class M3{constructor(e){const{enabled:t=!0,nonceRefetchIntervalMs:r=Kl.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:o=Kl.FIVE_MINUTES_IN_MS,signOutOnAccountChange:n=!0,signOutOnDisconnect:a=!0,signOutOnNetworkChange:s=!0,...p}=e;this.options={enabled:t,nonceRefetchIntervalMs:r,sessionRefetchIntervalMs:o,signOutOnDisconnect:a,signOutOnAccountChange:n,signOutOnNetworkChange:s},this.methods=p}async getNonce(e){const t=await this.methods.getNonce(e);if(!t)throw new Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){var e,t;return await((t=(e=this.methods).getMessageParams)==null?void 0:t.call(e))||{}}createMessage(e){const t=this.methods.createMessage(e);if(!t)throw new Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){const e=await this.methods.getSession();if(!e)throw new Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){await jt.requestSignMessage();const e=await this.methods.getSession();if(!e)throw new Error("Error verifying SIWE signature");return e}async signOut(){const e=jt.getSIWX();return e?(await e.setSessions([]),!0):!1}}const B3=/0x[a-fA-F0-9]{40}/u,j3=/Chain ID: (?<temp1>\d+)/u;function F3(i){var e;return((e=i.match(B3))==null?void 0:e[0])||""}function z3(i){var e;return`eip155:${((e=i.match(j3))==null?void 0:e[1])||1}`}async function V3({address:i,message:e,signature:t,chainId:r,projectId:o}){let n=Ad(i,e,t);return n||(n=await Sd(i,e,t,r,o)),n}const H3=N`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Z3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qa=class extends A{constructor(){var e,t;super(...arguments),this.dappImageUrl=(e=U.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(t=R.state.connectedWalletInfo)==null?void 0:t.icon}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};qa.styles=H3;qa=Z3([E("w3m-connecting-siwe")],qa);var Mc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Po=class extends A{constructor(){var e;super(...arguments),this.dappName=(e=U.state.metadata)==null?void 0:e.name,this.isSigning=!1,this.isCancelling=!1}render(){return l`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){var e,t,r;this.isSigning=!0,z.sendEvent({event:"CLICK_SIGN_SIWX_MESSAGE",type:"track",properties:{network:((e=m.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)||"",isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}});try{ro.setStatus("loading");const o=await ro.signIn();return ro.setStatus("success"),z.sendEvent({event:"SIWX_AUTH_SUCCESS",type:"track",properties:{network:((t=m.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)||"",isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),o}catch{const a=R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT;return a?q.showError("This application might not support Smart Accounts"):q.showError("Signature declined"),ro.setStatus("error"),z.sendEvent({event:"SIWX_AUTH_ERROR",type:"track",properties:{network:((r=m.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)||"",isSmartAccount:a}})}finally{this.isSigning=!1}}async onCancel(){var t;this.isCancelling=!0,m.state.activeCaipAddress?(await ee.disconnect(),te.close()):S.push("Connect"),this.isCancelling=!1,z.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:{network:((t=m.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)||"",isSmartAccount:R.state.preferredAccountType===se.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Mc([v()],Po.prototype,"isSigning",void 0);Mc([v()],Po.prototype,"isCancelling",void 0);Po=Mc([E("w3m-connecting-siwe-view")],Po);const Yl=[];function G3(i){async function e(){try{const r=await i.methods.getSession();if(!r)return;if(!(r!=null&&r.address))throw new Error("SIWE session is missing address");if(!(r!=null&&r.chainId))throw new Error("SIWE session is missing chainId");return r}catch(r){console.warn("AppKit:SIWE:getSession - error:",r);return}}async function t(){var r,o;await i.methods.signOut(),(o=(r=i.methods).onSignOut)==null||o.call(r)}return Yl.forEach(r=>r()),Yl.push(m.subscribeKey("activeCaipNetwork",async r=>{if(!i.options.signOutOnNetworkChange)return;const o=await e();o&&o.chainId!==In.caipNetworkIdToNumber(r==null?void 0:r.caipNetworkId)&&await t()}),m.subscribeKey("activeCaipAddress",async r=>{var o,n;if(i.options.signOutOnDisconnect&&!r){await e()&&await t();return}if(i.options.signOutOnAccountChange){const a=await e(),s=(o=a==null?void 0:a.address)==null?void 0:o.toLowerCase(),p=(n=M==null?void 0:M.getPlainAddress(r))==null?void 0:n.toLowerCase();a&&s!==p&&await t()}})),{async createMessage(r){var p,d;const o=await((d=(p=i.methods).getMessageParams)==null?void 0:d.call(p));if(!o)throw new Error("Failed to get message params!");const n=await i.getNonce(r.accountAddress),a=o.iat||new Date().toISOString(),s="1";return{nonce:n,version:s,requestId:o.requestId,accountAddress:r.accountAddress,chainId:r.chainId,domain:o.domain,uri:o.uri,notBefore:o.nbf,resources:o.resources,statement:o.statement,expirationTime:o.exp,issuedAt:a,toString:()=>i.createMessage({...o,chainId:In.caipNetworkIdToNumber(r.chainId)||1,address:`did:pkh:${r.chainId}:${r.accountAddress}`,nonce:n,version:s,iat:a})}},async addSession(r){var n,a;if(!In.parseEvmChainId(r.data.chainId))return Promise.resolve();if(await i.methods.verifyMessage(r))return(a=(n=i.methods).onSignIn)==null||a.call(n,{address:r.data.accountAddress,chainId:In.parseEvmChainId(r.data.chainId)}),Promise.resolve();throw new Error("Failed to verify message")},async revokeSession(r,o){try{await t()}catch(n){console.warn("AppKit:SIWE:revokeSession - signOut error",n)}},async setSessions(r){if(r.length===0)try{await t()}catch(o){console.warn("AppKit:SIWE:setSessions - signOut error",o)}else{const o=r.find(n=>{var a;return n.data.chainId===((a=m.getActiveCaipNetwork())==null?void 0:a.caipNetworkId)})||r[0];await this.addSession(o)}},async getSessions(r,o){var n;try{if(!r.startsWith("eip155:"))return[{data:{accountAddress:o,chainId:r},message:"",signature:""}];const a=await e(),s=`eip155:${a==null?void 0:a.chainId}`,p=(n=a==null?void 0:a.address)==null?void 0:n.toLowerCase(),d=o==null?void 0:o.toLowerCase();return!a||p!==d||s!==r?[]:[{data:{accountAddress:a.address,chainId:s},message:"",signature:""}]}catch(a){return console.warn("AppKit:SIWE:getSessions - error:",a),[]}}}}function q3(i){return new M3(i)}const K3=Object.freeze(Object.defineProperty({__proto__:null,SIWEController:ro,get W3mConnectingSiwe(){return qa},get W3mConnectingSiweView(){return Po},createSIWEConfig:q3,formatMessage:Id,getAddressFromMessage:F3,getChainIdFromMessage:z3,getDidAddress:Rd,getDidChainId:Nd,mapToSIWX:G3,verifySignature:V3},Symbol.toStringTag,{value:"Module"})),Y3=N`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var na=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Xl="scroll-lock";let vn=class extends A{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=te.state.open,this.caipAddress=m.state.activeCaipAddress,this.caipNetwork=m.state.activeCaipNetwork,this.shake=te.state.shake,this.initializeTheming(),ne.prefetch(),this.unsubscribe.push(te.subscribeKey("open",e=>e?this.onOpen():this.onClose()),te.subscribeKey("shake",e=>this.shake=e),m.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),m.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e))),z.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?l`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
              <w3m-alertbar></w3m-alertbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){S.state.view==="UnsupportedChain"||await jt.isSIWXCloseDisabled()?te.shake():te.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=Te.state,r=re.getColorTheme(t);lu(e,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),q.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Xl,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Xl}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:o}=r.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=M.getPlainAddress(e);this.caipAddress=e,await jt.initializeIfEnabled(),t||te.close()}onNewNetwork(e){var o,n,a,s;if(!this.caipAddress){this.caipNetwork=e,S.goBack();return}const t=(n=(o=this.caipNetwork)==null?void 0:o.caipNetworkId)==null?void 0:n.toString(),r=(a=e==null?void 0:e.caipNetworkId)==null?void 0:a.toString();t&&r&&t!==r&&((s=this.caipNetwork)==null?void 0:s.name)!=="Unknown Network"&&S.goBack(),this.caipNetwork=e}};vn.styles=Y3;na([v()],vn.prototype,"open",void 0);na([v()],vn.prototype,"caipAddress",void 0);na([v()],vn.prototype,"caipNetwork",void 0);na([v()],vn.prototype,"shake",void 0);vn=na([E("w3m-modal")],vn);const X3=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return vn}},Symbol.toStringTag,{value:"Module"}));export{bn as B,_p as E,Lv as W,so as _,jd as a,ac as b,nm as c,lo as d,Wv as e,Dv as f,rm as g,am as h,Mv as i,Ep as j,Vd as r,Uv as u,dp as w};
