"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9562],{9562:(k,u,a)=>{a.r(u),a.d(u,{OportunidadNegocioPageModule:()=>w});var d=a(6814),m=a(95),r=a(9843),g=a(9085),f=a(5861),_=a(553),o=a(6689),x=a(930),s=a(9585),p=a(7022);function Z(t,i){1&t&&(o.TgZ(0,"p",35)(1,"strong"),o._uU(2,"Especialidad que se requiere:"),o.qZA()())}function b(t,i){if(1&t&&(o.TgZ(0,"p",36),o._uU(1),o.qZA()),2&t){const n=i.$implicit;o.xp6(1),o.hij(" ",n,"")}}function h(t,i){if(1&t&&(o.TgZ(0,"ion-button",37),o._uU(1," Registrarme "),o.qZA()),2&t){const n=o.oxw(),c=n.index;o.MGl("routerLink","/oportunidad-negocio/",n.$implicit.identificador,""),o.Q6J("color",c%2?"dark":"primary")}}function O(t,i){1&t&&(o.TgZ(0,"ion-button",38),o._uU(1," Cerrado "),o.qZA()),2&t&&o.Q6J("disabled",!0)}function v(t,i){if(1&t&&(o.TgZ(0,"ion-list",25)(1,"ion-item",26),o._UZ(2,"ion-img",27),o.TgZ(3,"ion-text",28)(4,"h1")(5,"strong"),o._uU(6),o.qZA(),o.YNc(7,Z,3,0,"p",29),o.YNc(8,b,2,1,"p",30),o.qZA()(),o.YNc(9,h,2,2,"ion-button",31),o.YNc(10,O,2,1,"ion-button",32),o.qZA(),o.TgZ(11,"div",33),o._UZ(12,"hr",34),o.qZA()()),2&t){const n=i.$implicit,e=o.oxw();o.xp6(2),o.Q6J("src",e.uri+n.logotipo),o.xp6(4),o.Oqu(n.empresa),o.xp6(1),o.Q6J("ngIf",n.especialidades.length>0),o.xp6(1),o.Q6J("ngForOf",n.especialidades),o.xp6(1),o.Q6J("ngIf",n.active),o.xp6(1),o.Q6J("ngIf",!n.active)}}function y(t,i){if(1&t&&(o.TgZ(0,"ion-card-subtitle"),o._uU(1),o.qZA()),2&t){const n=i.$implicit;o.xp6(1),o.hij(" ",n," ")}}function P(t,i){if(1&t&&(o.TgZ(0,"ion-button",37),o._uU(1," Registrarme "),o.qZA()),2&t){const n=o.oxw(),c=n.index;o.MGl("routerLink","/oportunidad-negocio/",n.$implicit.identificador,""),o.Q6J("color",c%2?"dark":"primary")}}function T(t,i){1&t&&(o.TgZ(0,"ion-button",38),o._uU(1," Cerrado "),o.qZA()),2&t&&o.Q6J("disabled",!0)}function N(t,i){if(1&t&&(o.TgZ(0,"ion-card",39),o._UZ(1,"img",40),o.TgZ(2,"ion-card-header")(3,"ion-card-title")(4,"strong"),o._uU(5),o.qZA()(),o.TgZ(6,"ion-card-subtitle")(7,"strong"),o._uU(8,"Especialidad que se requiere: "),o.qZA()(),o.YNc(9,y,2,1,"ion-card-subtitle",41),o.qZA(),o.TgZ(10,"ion-card-content"),o.YNc(11,P,2,2,"ion-button",31),o.YNc(12,T,2,1,"ion-button",32),o.qZA()()),2&t){const n=i.$implicit,e=o.oxw();o.xp6(1),o.Q6J("src",e.uri+n.logotipo,o.LSH),o.xp6(4),o.Oqu(n.empresa),o.xp6(4),o.Q6J("ngForOf",n.especialidades),o.xp6(2),o.Q6J("ngIf",n.active),o.xp6(1),o.Q6J("ngIf",!n.active)}}const U=[{path:"",component:(()=>{var t;class i{constructor(e){this.genericS=e,this.uri=_.N.image+"oportunidades-logotipos/",this.negocio=[]}ngOnInit(){var e=this;this.genericS.getAll("negocio").subscribe(function(){var c=(0,f.Z)(function*(l){e.negocio=l.filter(M=>4!==M.id),console.log(l)});return function(l){return c.apply(this,arguments)}}())}}return(t=i).\u0275fac=function(e){return new(e||t)(o.Y36(x.M))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-oportunidad-negocio"]],decls:40,vars:3,consts:[[3,"fullscreen"],[1,"fondo","titulo","d-flex"],[1,"frojo","w-100","d-flex","flex-column"],[1,"titulo","text-center","mt-auto","mx-auto","text-white"],[1,"mt-auto","ms-auto","text-white","me-4","mb-4"],[1,"container"],["class","d-none d-md-block",4,"ngFor","ngForOf"],[1,"d-block","d-md-none"],[1,"d-flex"],["mode","md","class","my-4 mx-auto aa",4,"ngFor","ngForOf"],[1,"d-flex","pt-5","w-100","px-5","px-md-0"],[1,"shadow","mx-auto","py-0","w-100"],[1,"p-0","m-0","af"],[1,"row"],[1,"col-md-6","d-flex","my-3","my-md-0"],["src","../../../../../assets/56.jpg","alt","",1,"h-100","p-0"],[1,"col-md-6","d-flex"],[1,"m-auto","container"],["color","dark",1,"ion-margin-vertical"],[1,"mb-2","text-black","mt-3"],[1,"mb-5","hrr"],["color","dark","fill","clear",1,"my-1","ion-text-lowercase"],["slot","start","name","mail","color","primary"],["color","dark","fill","clear",1,"my-1"],["slot","start","name","call","color","primary"],[1,"d-none","d-md-block"],["lines","none",1,"ion-margin-vertical"],["slot","start",1,"my-3",2,"background-color","gray",3,"src"],["color","primary"],["class","text-black my-2",4,"ngIf"],["class","text-black my-1",4,"ngFor","ngForOf"],["slot","end","class","mt-auto mb-3","shape","round",3,"routerLink","color",4,"ngIf"],["slot","end","color","primary","fill","clear","class","mt-auto mb-3","shape","round",3,"disabled",4,"ngIf"],[1,"w-100"],[1,"hrrr"],[1,"text-black","my-2"],[1,"text-black","my-1"],["slot","end","shape","round",1,"mt-auto","mb-3",3,"routerLink","color"],["slot","end","color","primary","fill","clear","shape","round",1,"mt-auto","mb-3",3,"disabled"],["mode","md",1,"my-4","mx-auto","aa"],[2,"background-color","gray",3,"src"],[4,"ngFor","ngForOf"]],template:function(e,c){1&e&&(o._UZ(0,"web-header"),o.TgZ(1,"ion-content",0)(2,"div",1)(3,"div",2)(4,"h1",3),o._uU(5,"Oportunidades de Negocio "),o.qZA(),o.TgZ(6,"p",4),o._uU(7," Inicio / Oportunidades de negocio"),o.qZA()()(),o.TgZ(8,"div",5),o.YNc(9,v,13,6,"ion-list",6),o.TgZ(10,"div",7),o._UZ(11,"div",8),o.YNc(12,N,13,5,"ion-card",9),o.qZA()(),o.TgZ(13,"div",10)(14,"ion-card",11)(15,"ion-card-content",12)(16,"div",13)(17,"div",14),o._UZ(18,"img",15),o.qZA(),o.TgZ(19,"div",16)(20,"div",17)(21,"ion-text",18)(22,"h3"),o._uU(23,"Para cualquier duda o aclaraci\xf3n favor de "),o._UZ(24,"br"),o._uU(25," contactar a nuestra \xe1rea t\xe9cnica con : "),o.qZA()(),o.TgZ(26,"h1",19)(27,"strong"),o._uU(28,"Ing. Gabriela L\xf3pez"),o.qZA()(),o._UZ(29,"hr",20),o.TgZ(30,"ion-button",21),o._UZ(31,"ion-icon",22),o.TgZ(32,"strong"),o._uU(33," gerente.tecnico@cmiccdmx.org"),o.qZA()(),o._UZ(34,"br"),o.TgZ(35,"ion-button",23),o._UZ(36,"ion-icon",24),o.TgZ(37,"strong"),o._uU(38," 55 5424 7400 Ext. 7502"),o.qZA()()()()()()()(),o._UZ(39,"web-footer"),o.qZA()),2&e&&(o.xp6(1),o.Q6J("fullscreen",!0),o.xp6(8),o.Q6J("ngForOf",c.negocio),o.xp6(3),o.Q6J("ngForOf",c.negocio))},dependencies:[d.sg,d.O5,r.YG,r.PM,r.FN,r.Zi,r.tO,r.Dq,r.W2,r.gu,r.Xz,r.Ie,r.q_,r.yW,r.YI,s.r,p.s,g.rH],styles:[".fondo[_ngcontent-%COMP%]{background-image:url(52.e8e464a91718debe.jpg);background-position:center;background-size:cover;background-repeat:no-repeat;height:20vh}.bg-l[_ngcontent-%COMP%]{background:rgba(0,0,0,.4);width:100%;height:100%}ion-img[_ngcontent-%COMP%]{width:150px}.aa[_ngcontent-%COMP%]{max-width:300px}.hrr[_ngcontent-%COMP%]{border-color:var(--ion-color-primary);background-color:var(--ion-color-primary);border-width:2px;margin:0 auto 0 0;width:100px;opacity:1}.hrrr[_ngcontent-%COMP%]{border-color:var(--ion-color-primary);background-color:var(--ion-color-primary);border-width:1px;width:100%;opacity:1}.info[_ngcontent-%COMP%]{background:rgb(255,255,255);background:linear-gradient(0deg,rgb(255,255,255) 50%,rgb(241,241,241) 50%);min-height:70vh;font-weight:700}.a[_ngcontent-%COMP%]{border-color:var(--ion-color-primary)!important;border:1px;min-width:350px;max-width:350px;min-height:505px}.f[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.hr[_ngcontent-%COMP%]{margin-right:auto}.zz[_ngcontent-%COMP%]{font-size:40px;font-weight:bolder}.titulo[_ngcontent-%COMP%]{font-size:32px!important;font-weight:700}.gray[_ngcontent-%COMP%]{background-color:#f1f1f1}"]}),i})()}];let A=(()=>{var t;class i{}return(t=i).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[g.Bz.forChild(U),g.Bz]}),i})(),w=(()=>{var t;class i{}return(t=i).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez,m.u5,r.Pc,s.r,p.s,A]}),i})()}}]);