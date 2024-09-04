"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8577],{8577:(ye,J,h)=>{h.r(J),h.d(J,{ion_modal:()=>ge});var D=h(5861),f=h(1688),M=h(8360),H=h(1042),u=h(839),G=h(6710),Q=h(4874),l=h(4988),b=h(3567),w=h(1651),L=h(2085),$=h(1612),p=h(1774),se=h(5149),ae=h(9203),X=h(6225),z=(h(7484),h(619),function(e){return e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",e}(z||{}));const F={getEngine(){const e=(0,Q.g)();if(null!=e&&e.isPluginAvailable("StatusBar"))return e.Plugins.StatusBar},supportsDefaultStatusBarStyle(){const e=(0,Q.g)();return!(null==e||!e.PluginHeaders)},setStyle(e){const t=this.getEngine();t&&t.setStyle(e)},getStyle:(e=(0,D.Z)(function*(){const t=this.getEngine();if(!t)return z.Default;const{style:n}=yield t.getInfo();return n}),function(){return e.apply(this,arguments)})},ne=(e,t)=>{if(1===t)return 0;const n=1/(1-t);return e*n+-t*n},de=()=>{!X.w||X.w.innerWidth>=768||!F.supportsDefaultStatusBarStyle()||F.setStyle({style:z.Dark})},le=(e=z.Default)=>{!X.w||X.w.innerWidth>=768||!F.supportsDefaultStatusBarStyle()||F.setStyle({style:e})},ce=function(){var e=(0,D.Z)(function*(t,n){"function"!=typeof t.canDismiss||!(yield t.canDismiss(void 0,l.G))||(n.isRunning()?n.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(n,r){return e.apply(this,arguments)}}(),re=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,pe=(e,t)=>(0,u.l)(400,e/Math.abs(1.1*t),500),he=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,r=void 0===n||n<t,i=r?`calc(var(--backdrop-opacity) * ${t})`:"0",o=(0,p.c)("backdropAnimation").fromTo("opacity",0,i);return r&&o.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:o}},fe=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,r=`calc(var(--backdrop-opacity) * ${ne(t,n)})`,i=[{offset:0,opacity:r},{offset:1,opacity:0}],o=[{offset:0,opacity:r},{offset:n,opacity:0},{offset:1,opacity:0}],s=(0,p.c)("backdropAnimation").keyframes(0!==n?o:i);return{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:s}},ue=(e,t)=>{const{presentingEl:n,currentBreakpoint:r}=t,i=(0,u.g)(e),{wrapperAnimation:o,backdropAnimation:s}=void 0!==r?he(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};s.addElement(i.querySelector("ion-backdrop")),o.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=(0,p.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(n){const d=window.innerWidth<768,y="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,x=(0,u.g)(n),A=(0,p.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),v=document.body;if(d){const _=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",E=`translateY(${y?"-10px":_}) scale(0.93)`;A.afterStyles({transform:E}).beforeAddWrite(()=>v.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:E,borderRadius:"10px 10px 0 0"}]),a.addAnimation(A)}else if(a.addAnimation(s),y){const k=`translateY(-10px) scale(${y?.93:1})`;A.afterStyles({transform:k}).addElement(x.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:k}]);const c=(0,p.c)().afterStyles({transform:k}).addElement(x.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:k}]);a.addAnimation([A,c])}else o.fromTo("opacity","0","1")}else a.addAnimation(s);return a},me=(e,t,n=500)=>{const{presentingEl:r,currentBreakpoint:i}=t,o=(0,u.g)(e),{wrapperAnimation:s,backdropAnimation:a}=void 0!==i?fe(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};a.addElement(o.querySelector("ion-backdrop")),s.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,p.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(s);if(r){const y=window.innerWidth<768,x="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,A=(0,u.g)(r),v=(0,p.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(k=>{1===k&&(r.style.setProperty("overflow",""),Array.from(_.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(E=>void 0!==E.presentingElement).length<=1&&_.style.setProperty("background-color",""))}),_=document.body;if(y){const k=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",j=`translateY(${x?"-10px":k}) scale(0.93)`;v.addElement(r).keyframes([{offset:0,filter:"contrast(0.85)",transform:j,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(v)}else if(d.addAnimation(a),x){const c=`translateY(-10px) scale(${x?.93:1})`;v.addElement(A.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const E=(0,p.c)().addElement(A.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([v,E])}else s.fromTo("opacity","1","0")}else d.addAnimation(a);return d},_e=(e,t)=>{const{currentBreakpoint:n}=t,r=(0,u.g)(e),{wrapperAnimation:i,backdropAnimation:o}=void 0!==n?he(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return o.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),(0,p.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,i])},Se=(e,t)=>{const{currentBreakpoint:n}=t,r=(0,u.g)(e),{wrapperAnimation:i,backdropAnimation:o}=void 0!==n?fe(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return o.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),(0,p.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,i])},ge=class{constructor(e){(0,f.r)(this,e),this.didPresent=(0,f.d)(this,"ionModalDidPresent",7),this.willPresent=(0,f.d)(this,"ionModalWillPresent",7),this.willDismiss=(0,f.d)(this,"ionModalWillDismiss",7),this.didDismiss=(0,f.d)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,f.d)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,f.d)(this,"didPresent",7),this.willPresentShorthand=(0,f.d)(this,"willPresent",7),this.willDismissShorthand=(0,f.d)(this,"willDismiss",7),this.didDismissShorthand=(0,f.d)(this,"didDismiss",7),this.ionMount=(0,f.d)(this,"ionMount",7),this.triggerController=(0,l.e)(),this.coreDelegate=(0,H.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:n}=this;"cycle"!==n||void 0!==t||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,l.B)},this.onLifecycle=t=>{const n=this.usersElement,r=Be[t.type];if(n&&r){const i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}triggerChanged(){const{trigger:e,el:t,triggerController:n}=this;e&&n.addClickListener(t,e)}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){const{el:e}=this;(0,l.j)(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,el:n}=this,r=this.isSheetModal=void 0!==e&&void 0!==t;this.inheritedAttributes=(0,u.k)(n,["aria-label","role"]),r&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,G.p)("Your breakpoints array must include the initialBreakpoint value."),(0,l.k)(n)}componentDidLoad(){!0===this.isOpen&&(0,u.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints)}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(e,t){var n=this;return(0,D.Z)(function*(){const{canDismiss:r}=n;return"function"==typeof r?r(e,t):r})()}present(){var e=this;return(0,D.Z)(function*(){if(e.presented)return;const{presentingElement:t,el:n}=e;void 0!==e.currentTransition&&(yield e.currentTransition),e.currentBreakpoint=e.initialBreakpoint;const{inline:r,delegate:i}=e.getDelegate(!0);e.usersElement=yield(0,H.a)(i,n,e.component,["ion-page"],e.componentProps,r),e.ionMount.emit(),(0,u.m)(n)?yield(0,w.e)(e.usersElement):e.keepContentsMounted||(yield(0,w.w)()),(0,f.w)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,l.f)(e,"modalEnter",ue,_e,{presentingEl:t,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,u.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener($.KEYBOARD_DID_OPEN,e.keyboardOpenCallback));const o=void 0!==t;o&&"ios"===(0,L.b)(e)&&(e.statusBarStyle=yield F.getStyle(),de()),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():o&&e.initSwipeToClose(),e.currentTransition=void 0})()}initSwipeToClose(){var t,e=this;if("ios"!==(0,L.b)(this))return;const{el:n}=this,r=this.leaveAnimation||L.c.get("modalLeave",me),i=this.animation=r(n,{presentingEl:this.presentingElement});if(!(0,M.a)(n))return void(0,M.p)(n);const s=null!==(t=this.statusBarStyle)&&void 0!==t?t:z.Default;this.gesture=((e,t,n,r)=>{const o=e.offsetHeight;let s=!1,a=!1,d=null,y=null,A=!0,v=0;const Z=(0,ae.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:g=>{const m=g.event.target;return null===m||!m.closest||(d=(0,M.f)(m),d?(y=(0,M.i)(d)?(0,u.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===y.scrollTop):null===m.closest("ion-footer"))},onStart:g=>{const{deltaY:m}=g;A=!d||!(0,M.i)(d)||d.scrollY,a=void 0!==e.canDismiss&&!0!==e.canDismiss,m>0&&d&&(0,M.d)(d),t.progressStart(!0,s?1:0)},onMove:g=>{const{deltaY:m}=g;m>0&&d&&(0,M.d)(d);const C=g.deltaY/o,P=C>=0&&a,T=P?.2:.9999,N=P?re(C/T):C,B=(0,u.l)(1e-4,N,T);t.progressStep(B),B>=.5&&v<.5?le(n):B<.5&&v>=.5&&de(),v=B},onEnd:g=>{const m=g.velocityY,C=g.deltaY/o,P=C>=0&&a,T=P?.2:.9999,N=P?re(C/T):C,B=(0,u.l)(1e-4,N,T),R=!P&&(g.deltaY+1e3*m)/o>=.5;let V=R?-.001:.001;R?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),V+=(0,se.g)([0,0],[.32,.72],[0,1],[1,1],B)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),V+=(0,se.g)([0,0],[1,0],[.68,.28],[1,1],B)[0]);const ee=pe(R?C*o:(1-B)*o,m);s=R,Z.enable(!1),d&&(0,M.r)(d,A),t.onFinish(()=>{R||Z.enable(!0)}).progressEnd(R?1:0,V,ee),P&&B>T/4?ce(e,t):R&&r()}});return Z})(n,i,s,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,D.Z)(function*(){yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||void 0===t)return;const r=this.enterAnimation||L.c.get("modalEnter",ue),i=this.animation=r(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});i.progressStart(!0,1);const{gesture:o,moveSheetToBreakpoint:s}=((e,t,n,r,i,o,s=[],a,d,y)=>{const v={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},_=e.querySelector("ion-content"),k=n.clientHeight;let c=r,E=0,j=!1;const g=o.childAnimations.find(S=>"wrapperAnimation"===S.id),m=o.childAnimations.find(S=>"backdropAnimation"===S.id),C=s[s.length-1],P=s[0],T=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},N=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};g&&m&&(g.keyframes([...v.WRAPPER_KEYFRAMES]),m.keyframes([...v.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-c),c>i?T():N()),_&&c!==C&&(_.scrollY=!1);const ee=S=>{const{breakpoint:W,canDismiss:O,breakpointOffset:Y,animated:U}=S,K=O&&0===W,I=K?c:W,be=0!==I;return c=0,g&&m&&(g.keyframes([{offset:0,transform:`translateY(${100*Y}%)`},{offset:1,transform:`translateY(${100*(1-I)}%)`}]),m.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${ne(1-Y,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${ne(I,i)})`}]),o.progressStep(0)),te.enable(!1),K?ce(e,o):be||d(),new Promise(ie=>{o.onFinish(()=>{be?g&&m?(0,u.r)(()=>{g.keyframes([...v.WRAPPER_KEYFRAMES]),m.keyframes([...v.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-I),c=I,y(c),_&&c===s[s.length-1]&&(_.scrollY=!0),c>i?T():N(),te.enable(!0),ie()}):(te.enable(!0),ie()):ie()},{oneTimeCallback:!0}).progressEnd(1,0,U?500:0)})},te=(0,ae.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:S=>{const W=S.event.target.closest("ion-content");return c=a(),!(1===c&&W)},onStart:()=>{j=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===P,_&&(_.scrollY=!1),(0,u.r)(()=>{e.focus()}),o.progressStart(!0,1-c)},onMove:S=>{const O=s.length>1?1-s[1]:void 0,Y=1-c+S.deltaY/k,U=void 0!==O&&Y>=O&&j,K=U?.95:.9999,I=U&&void 0!==O?O+re((Y-O)/(K-O)):Y;E=(0,u.l)(1e-4,I,K),o.progressStep(E)},onEnd:S=>{const Y=c-(S.deltaY+350*S.velocityY)/k,U=s.reduce((K,I)=>Math.abs(I-Y)<Math.abs(K-Y)?I:K);ee({breakpoint:U,breakpointOffset:E,canDismiss:j,animated:!0})}});return{gesture:te,moveSheetToBreakpoint:ee}})(this.el,this.backdropEl,e,t,n,i,this.sortedBreakpoints,()=>{var a;return null!==(a=this.currentBreakpoint)&&void 0!==a?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=o,this.moveSheetToBreakpoint=s,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,D.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var n=this;return(0,D.Z)(function*(){var r;if(n.gestureAnimationDismissing&&t!==l.G||"handler"!==t&&!(yield n.checkCanDismiss(e,t)))return!1;const{presentingElement:i}=n;void 0!==i&&"ios"===(0,L.b)(n)&&le(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&(window.removeEventListener($.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),n.keyboardOpenCallback=void 0),void 0!==n.currentTransition&&(yield n.currentTransition);const s=l.n.get(n)||[];n.currentTransition=(0,l.g)(n,e,t,"modalLeave",me,Se,{presentingEl:i,currentBreakpoint:null!==(r=n.currentBreakpoint)&&void 0!==r?r:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});const a=yield n.currentTransition;if(a){const{delegate:d}=n.getDelegate();yield(0,H.d)(d,n.usersElement),(0,f.w)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy(),s.forEach(y=>y.destroy())}return n.currentBreakpoint=void 0,n.currentTransition=void 0,n.animation=void 0,a})()}onDidDismiss(){return(0,l.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,l.h)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,D.Z)(function*(){if(!t.isSheetModal)return void(0,G.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,G.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:r,canDismiss:i,breakpoints:o,animated:s}=t;n!==e&&r&&(t.sheetTransition=r({breakpoint:e,breakpointOffset:1-n,canDismiss:void 0!==i&&!0!==i&&0===o[0],animated:s}),yield t.sheetTransition,t.sheetTransition=void 0)})()}getCurrentBreakpoint(){var e=this;return(0,D.Z)(function*(){return e.currentBreakpoint})()}moveToNextBreakpoint(){var e=this;return(0,D.Z)(function*(){const{breakpoints:t,currentBreakpoint:n}=e;if(!t||null==n)return!1;const r=t.filter(a=>0!==a),o=(r.indexOf(n)+1)%r.length,s=r[o];return yield e.setCurrentBreakpoint(s),!0})()}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:r,handleBehavior:i,inheritedAttributes:o}=this,s=!1!==e&&t,a=(0,L.b)(this),d=void 0!==n&&"ios"===a,y="cycle"===i;return(0,f.h)(f.H,Object.assign({"no-router":!0,tabindex:"-1"},r,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[a]:!0,"modal-default":!d&&!t,"modal-card":d,"modal-sheet":t,"overlay-hidden":!0},(0,b.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,f.h)("ion-backdrop",{ref:x=>this.backdropEl=x,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===a&&(0,f.h)("div",{class:"modal-shadow"}),(0,f.h)("div",Object.assign({role:"dialog"},o,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:x=>this.wrapperEl=x}),s&&(0,f.h)("button",{class:"modal-handle",tabIndex:y?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:y?this.onHandleClick:void 0,part:"handle"}),(0,f.h)("slot",null)))}get el(){return(0,f.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Be={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var e;ge.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},3567:(ye,J,h)=>{h.d(J,{c:()=>M,g:()=>u,h:()=>f,o:()=>Q});var D=h(5861);const f=(l,b)=>null!==b.closest(l),M=(l,b)=>"string"==typeof l&&l.length>0?Object.assign({"ion-color":!0,[`ion-color-${l}`]:!0},b):b,u=l=>{const b={};return(l=>void 0!==l?(Array.isArray(l)?l:l.split(" ")).filter(w=>null!=w).map(w=>w.trim()).filter(w=>""!==w):[])(l).forEach(w=>b[w]=!0),b},G=/^[a-z][a-z0-9+\-.]*:/,Q=function(){var l=(0,D.Z)(function*(b,w,L,$){if(null!=b&&"#"!==b[0]&&!G.test(b)){const p=document.querySelector("ion-router");if(p)return null!=w&&w.preventDefault(),p.push(b,L,$)}return!1});return function(w,L,$,p){return l.apply(this,arguments)}}()}}]);