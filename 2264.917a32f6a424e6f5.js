"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2264],{2264:(k,_,x)=>{x.d(_,{Y:()=>b});var f=x(5861),v=x(6689),p=function(e){return e[e.Up=1]="Up",e[e.Down=3]="Down",e[e.Right=6]="Right",e[e.Left=8]="Left",e[e.UpMirrored=2]="UpMirrored",e[e.DownMirrored=4]="DownMirrored",e[e.LeftMirrored=5]="LeftMirrored",e[e.RightMirrored=7]="RightMirrored",e[e.Default=0]="Default",e[e.NotJpeg=-1]="NotJpeg",e[e.NotDefined=-2]="NotDefined",e}(p||{});class m{}m.getOrientation=e=>new Promise((a,i)=>{try{const r=new FileReader;r.onload=()=>{const n=new DataView(r.result);if(!n.byteLength||65496!==n.getUint16(0,!1))return a(p.NotDefined);const c=n.byteLength;let t=2;for(;t<c;){const o=n.getUint16(t,!1);if(t+=2,65505===o){if(1165519206!==n.getUint32(t+=2,!1))return a(p.NotJpeg);const l=18761===n.getUint16(t+=6,!1);t+=n.getUint32(t+4,l);const g=n.getUint16(t,l);t+=2;for(let s=0;s<g;s++)if(274===n.getUint16(t+12*s,l))return a(n.getUint16(t+12*s+8,l))}else{if(65280!=(65280&o))break;t+=n.getUint16(t,!1)}}return a(p.NotJpeg)},r.readAsArrayBuffer(e)}catch{return i(p.Default)}}),m.uploadFile=(e,a=!0,i=!1)=>new Promise(function(r,n){const c=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),t=/iPad|iPhone|iPod/i.test(navigator.userAgent);Promise.resolve(c||t).then(o=>o?m.generateUploadInputNative(window.document,a,i):m.generateUploadInputRenderer(e,a,i)).then(o=>{const l=o?Array.from(o):[],g=l.map(d=>m.getOrientation(d)),s=l.map(d=>m.fileToDataURL(d));let u=[];Promise.all(g).then(d=>(u=d,Promise.all(s))).then(d=>{const h=d.map((C,w)=>({image:C.dataUrl,orientation:u[w],fileName:C.fileName}));r(a?h:h[0])})}).catch(o=>n(o))}),m.fileToDataURL=e=>new Promise((a,i)=>{const r=new FileReader;r.onload=n=>{a({dataUrl:n.target.result,fileName:e.name})};try{r.readAsDataURL(e)}catch(n){i(`ngx-image-compress - probably no file have been selected: ${n}`)}}),m.generateUploadInputRenderer=(e,a=!0,i=!1)=>{let r=!1;return new Promise((n,c)=>{const t=e.createElement("input");e.setStyle(t,"display","none"),e.setProperty(t,"type","file"),e.setProperty(t,"accept","image/*"),a&&e.setProperty(t,"multiple","true"),e.listen(t,"click",o=>{o.target.value=""}),e.listen(t,"change",o=>{r=!0,n(o.target.files)}),i&&window.addEventListener("focus",()=>{setTimeout(()=>{r||c(new Error("file upload on blur - no file selected"))},300)},{once:!0}),t.click()})},m.generateUploadInputNative=(e,a=!0,i=!1)=>{let r=!1;return new Promise((n,c)=>{const t=e.createElement("input");t.id="upload-input"+new Date,t.style.display="none",t.setAttribute("type","file"),t.setAttribute("accept","image/*"),a&&t.setAttribute("multiple","true"),e.body.appendChild(t),t.addEventListener("change",()=>{r=!0,n(t.files),e.body.removeChild(e.getElementById(t.id))},{once:!0}),i&&window.addEventListener("focus",()=>{setTimeout(()=>{!r&&e.getElementById(t.id)&&(c(new Error("file upload on blur - no file selected")),e.body.removeChild(e.getElementById(t.id)))},300)},{once:!0}),t.click()})},m.compress=(e,a,i,r=50,n=50,c=0,t=0)=>new Promise(function(o,l){n/=100,r/=100;const g=new Image;g.onload=()=>{const s=i.createElement("canvas"),u=s.getContext("2d");if(!u)return l("No canvas context available");let d=g.naturalWidth,h=g.naturalHeight;if(!CSS.supports("image-orientation","from-image")&&(a===p.Right||a===p.Left)){const U=d;d=h,h=U}r=Math.min(r,c?c/d:1,t?t/h:1),s.width=d*r,s.height=h*r;const y=Math.PI/180;CSS.supports("image-orientation","from-image")||a===p.Up?u.drawImage(g,0,0,s.width,s.height):a===p.Right?(u.save(),u.rotate(90*y),u.translate(0,-s.width),u.drawImage(g,0,0,s.height,s.width),u.restore()):a===p.Left?(u.save(),u.rotate(-90*y),u.translate(-s.width,0),u.drawImage(g,0,0,s.height,s.width),u.restore()):a===p.Down?(u.save(),u.rotate(180*y),u.translate(-s.width,-s.height),u.drawImage(g,0,0,s.width,s.height),u.restore()):u.drawImage(g,0,0,s.width,s.height);const S=e.substr(5,e.split(";")[0].length-5),F=s.toDataURL(S,n);o(F)},g.onerror=s=>l(s),g.src=e}),m.byteCount=e=>encodeURI(e).split(/%..|./).length-1,m.getImageMaxSize=function(){var e=(0,f.Z)(function*(a,i,r,n=!1){const t=g=>(g/1024/1024).toFixed(2);i&&console.debug("NgxImageCompress - Opening upload window");const o=yield m.uploadFile(r,!1,n);let l;for(let g=0;g<10;g++){const s=m.byteCount(o.image);l=yield m.compress(o.image,o.orientation,r,50,100);const u=m.byteCount(l);if(console.debug("NgxImageCompress -","Compression from",t(s),"MB to",t(u),"MB"),u>=s)throw 0===g?(i&&console.debug("NgxImageCompress -","File can't be reduced at all - returning the original",t(s),"MB large"),{...o,image:l}):(i&&console.debug("NgxImageCompress -","File can't be reduced more - returning the best we can, which is ",t(s),"MB large"),{...o,image:l});if(u<1024*a*1024)return i&&console.debug("NgxImageCompress -","Here your file",t(u),"MB large"),{...o,image:l};if(9===g)throw i&&console.debug("NgxImageCompress -","File can't reach the desired size after",10,"tries. Returning file ",t(s),"MB large"),{...o,image:l};i&&console.debug("NgxImageCompress -","Reached",t(u),"MB large. Trying another time after",g+1,"times"),o.image=l}throw i&&console.debug("NgxImageCompress - Unexpected error"),{}});return function(a,i,r){return e.apply(this,arguments)}}();let M=(()=>{class e{constructor(i){this.DOC_ORIENTATION=p,this.render=i.createRenderer(null,null)}byteCount(i){return m.byteCount(i)}getOrientation(i){return m.getOrientation(i)}uploadFile(){return m.uploadFile(this.render,!1)}uploadMultipleFiles(){return m.uploadFile(this.render,!0)}uploadFileOrReject(){return m.uploadFile(this.render,!1,!0)}uploadMultipleFilesOrReject(){return m.uploadFile(this.render,!0,!0)}compressFile(i,r,n=50,c=50,t=0,o=0){return m.compress(i,r,this.render,n,c,t,o)}uploadAndGetImageWithMaxSize(i=1,r=!1,n=!1){return m.getImageMaxSize(i,r,this.render,n).then(c=>c.image).catch(c=>{throw c.image})}uploadAndGetImageWithMaxSizeAndMetas(i=1,r=!1,n=!1){return m.getImageMaxSize(i,r,this.render,n)}}return e.\u0275fac=function(i){return new(i||e)(v.LFG(v.FYo))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),b=(()=>{var e;class a{constructor(r){this.imageCompress=r}returnImageCompress(){var r=this;return(0,f.Z)(function*(){return yield r.imageCompress.uploadFile().then(function(){var n=(0,f.Z)(function*({image:c,orientation:t}){return yield r.imageCompress.compressFile(c,t,50,50).then(function(){var o=(0,f.Z)(function*(l){return yield l});return function(l){return o.apply(this,arguments)}}())});return function(c){return n.apply(this,arguments)}}())})()}returnImageCompressMultiple(){var r=this;return(0,f.Z)(function*(){const n=[];return yield r.imageCompress.uploadMultipleFiles().then(function(){var c=(0,f.Z)(function*(t){console.log(t);for(let o of t)yield r.imageCompress.compressFile(o.image,o.orientation,50,50).then(function(){var l=(0,f.Z)(function*(g){n.push(g)});return function(g){return l.apply(this,arguments)}}())});return function(t){return c.apply(this,arguments)}}()),n})()}dataURItoBlob(r){for(var n=atob(r.split(",")[1]),c=r.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(n.length),o=new Uint8Array(t),l=0;l<n.length;l++)o[l]=n.charCodeAt(l);return new Blob([t],{type:c})}}return(e=a).\u0275fac=function(r){return new(r||e)(v.LFG(M))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),a})()}}]);