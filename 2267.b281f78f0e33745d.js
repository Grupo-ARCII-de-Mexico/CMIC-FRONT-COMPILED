"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2267],{2267:(H,h,i)=>{i.r(h),i.d(h,{ViewEventoPageModule:()=>R});var g=i(6814),Z=i(95),s=i(7027),m=i(9085),u=i(5861),p=i(6676),y=i(553),P=i(4028),b=i(3295),M=i(4664),E=i(9397),w=i(7038),T=i(3597),o=i(6689),A=i(930),U=i(2425),O=i(7121);function C(t,r){if(1&t&&(o.TgZ(0,"div",30),o._UZ(1,"app-map",31),o.qZA()),2&t){const n=o.oxw(2);o.xp6(1),o.Q6J("evento",n.evento)("visor",!0)}}function I(t,r){1&t&&(o.TgZ(0,"ion-card-subtitle",23),o._uU(1,"Costos:"),o.qZA())}function V(t,r){if(1&t&&(o.TgZ(0,"div",34)(1,"ion-card-subtitle",23),o._uU(2),o.TgZ(3,"b"),o._uU(4),o.ALo(5,"currency"),o.qZA()()()),2&t){const n=r.$implicit;o.xp6(2),o.hij("",n.nombre,": "),o.xp6(2),o.Oqu(o.lcZ(5,2,n.costo))}}function z(t,r){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,I,2,0,"ion-card-subtitle",32),o.YNc(2,V,6,4,"div",33),o.qZA()),2&t){const n=o.oxw(2);o.xp6(1),o.Q6J("ngIf",n.evento.costos.length>0),o.xp6(1),o.Q6J("ngForOf",n.evento.costos)}}function J(t,r){if(1&t){const n=o.EpF();o.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"ion-card",10)(4,"ion-card-content",11),o._UZ(5,"ion-img",12),o.qZA()()()(),o.TgZ(6,"div",13)(7,"div",14)(8,"ion-card",15)(9,"ion-accordion-group",16)(10,"ion-accordion",17)(11,"ion-item",18)(12,"ion-card-title",19)(13,"b",20),o._uU(14,"Informaci\xf3n del Evento"),o.qZA()()(),o.TgZ(15,"div",21)(16,"ion-card-content")(17,"ion-card-title",22)(18,"b"),o._uU(19),o.qZA()(),o.TgZ(20,"ion-card-subtitle",23),o._uU(21,"Dia del evento: "),o.TgZ(22,"b"),o._uU(23),o.qZA()(),o.TgZ(24,"ion-card-subtitle",23),o._uU(25,"Cupo "),o.TgZ(26,"b"),o._uU(27),o.qZA()(),o.TgZ(28,"ion-card-subtitle",23),o._uU(29,"Lugar: "),o.TgZ(30,"b"),o._uU(31),o.qZA()(),o.YNc(32,C,2,2,"div",24),o.YNc(33,z,3,2,"div",25),o.TgZ(34,"ion-card-subtitle",23),o._uU(35,"Informaci\xf3n Adicional: "),o.qZA(),o._UZ(36,"div",26),o.qZA()()(),o.TgZ(37,"ion-accordion",27)(38,"ion-item",18)(39,"ion-card-title",28)(40,"b",20),o._uU(41,"Registro"),o.qZA()()(),o.TgZ(42,"div",21)(43,"evento-form",29),o.NdJ("usuarioGuardado",function(a){o.CHM(n);const c=o.oxw();return o.KtG(c.getUser(a))}),o.qZA()()()()()()()()}if(2&t){const n=o.oxw();o.xp6(5),o.Q6J("src",n.uri+n.evento.imagen),o.xp6(14),o.Oqu(n.evento.titulo),o.xp6(4),o.Oqu(n.mon(n.evento.fechaInicio)),o.xp6(4),o.Oqu(n.evento.tieneCupoMaximo?"Limitado":"Ilimitado"),o.xp6(4),o.Oqu(n.evento.lugar),o.xp6(1),o.Q6J("ngIf",n.evento.mapLat),o.xp6(1),o.Q6J("ngIf",!n.evento.esGratis),o.xp6(3),o.Q6J("innerHTML",n.evento.detalles,o.oJD),o.xp6(7),o.Q6J("evento",n.evento)}}p.locale("es");const F=[{path:"",component:(()=>{var t;class r{constructor(e,a,c,l,d){this.route=e,this.genericS=a,this.modalc=c,this.toast=l,this.loading=d,this.tipoPublico=P.L,this.uri=y.N.image+"eventos/",this.iframe=!1}ngOnInit(){var e=this;this.route.params.subscribe(a=>{const c=a.identificador;a.iframe&&(this.iframe=!0),this.genericS.getOne("evento",c).subscribe(function(){var l=(0,u.Z)(function*(d){var v,f,x;e.evento=d,e.evento.costos="string"==typeof(null===(v=e.evento)||void 0===v?void 0:v.costos)?JSON.parse(null!==(f=null===(x=e.evento)||void 0===x?void 0:x.costos)&&void 0!==f?f:"[]"):e.evento.costos});return function(d){return l.apply(this,arguments)}}())})}mon(e){return console.log(e),p(new Date(e)).format("LL")+" a las "+p(new Date(e)).utc().format("LTS")}verMapa(){var e=this;return(0,u.Z)(function*(){(yield e.modalc.create({component:T.s,componentProps:{visor:!0,evento:e.evento}})).present()})()}getUser(e){var a=this;return(0,u.Z)(function*(){if(console.log(e),a.evento.esGratis){const c=yield a.loading.create({id:"pago",animated:!0,spinner:"dots",translucent:!0,message:"Procesando..."});yield c.present();const l={evento:a.evento.id,plataformaPago:w.R.STRIPE};0===e.tipo?l.afiliado=e.id:l.participante=e.id,a.genericS.post("boleto",l).pipe((0,M.w)(d=>a.genericS.post("boleto/confirm-free/"+d.boleto.id,{})),(0,E.b)(function(){var d=(0,u.Z)(function*(v){a.modalc.dismiss(),yield c.dismiss(),a.toast.success("Registro Guardado","Revise su correo")});return function(v){return d.apply(this,arguments)}}())).subscribe()}else console.log(e),(yield a.modalc.create({component:b.$,componentProps:{emision:e,evento:a.evento},backdropDismiss:!1,keyboardClose:!1})).present()})()}verpago(){var e=this;return(0,u.Z)(function*(){(yield e.modalc.create({component:b.$,backdropDismiss:!1,keyboardClose:!1,componentProps:{evento:e.evento,emision:{id:10,tipo:P.L.ESTUDIANTES}}})).present()})()}}return(t=r).\u0275fac=function(e){return new(e||t)(o.Y36(m.gz),o.Y36(A.M),o.Y36(s.IN),o.Y36(U._W),o.Y36(s.HT))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-view-evento"]],inputs:{evento:"evento"},decls:16,vars:2,consts:[["color","primary"],["src","../../../assets/logo.png",2,"width","150px"],[2,"background-color","#d8d8d8",3,"fullscreen"],[1,"titulo","fixed-top",2,"z-index","0"],[1,"h",2,"z-index","1"],["class","bg-white row",4,"ngIf"],[1,"titulo2","fixed-bottom",2,"z-index","-1"],[1,"bg-white","row"],[1,"d-flex","container","col-md-7"],[1,"container","d-flex","mt-4","mt-md-0"],["mode","ios",1,"shadow","m-auto"],[1,"izquierda","d-flex","h-100"],[1,"m-auto","img-fluid",3,"src"],[1,"col-md-4","d-flex","container"],[1,"container","mt-3"],[1,"shadow","mx-auto","w-100"],["value","first",2,"z-index","1"],["value","first"],["slot","header","color","secondary"],[1,"text-white","mt-0"],[2,"font-size","20px"],["slot","content",1,"ion-padding"],[1,"text-center","text-black","h2","mb-3"],[1,"my-3",2,"font-size","14px"],["class","text-center","style","width: 100%; height: 200px;",4,"ngIf"],[4,"ngIf"],[1,"text-justify","contenido-con-estilos","mt-2",3,"innerHTML"],["value","second"],[1,"text-white"],[3,"evento","usuarioGuardado"],[1,"text-center",2,"width","100%","height","200px"],["width","100px",3,"evento","visor"],["class","my-3","style","font-size: 14px;",4,"ngIf"],["class","container",4,"ngFor","ngForOf"],[1,"container"]],template:function(e,a){1&e&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0),o._UZ(2,"ion-img",1),o.qZA()(),o.TgZ(3,"ion-content",2)(4,"div",3),o._UZ(5,"br")(6,"br")(7,"br")(8,"br"),o.qZA(),o.TgZ(9,"div",4),o.YNc(10,J,44,9,"div",5),o.qZA(),o.TgZ(11,"div",6),o._UZ(12,"br")(13,"br")(14,"br")(15,"br"),o.qZA()()),2&e&&(o.xp6(3),o.Q6J("fullscreen",!0),o.xp6(7),o.Q6J("ngIf",a.evento))},dependencies:[g.sg,g.O5,s.We,s.eh,s.PM,s.FN,s.tO,s.Dq,s.W2,s.Gu,s.Xz,s.Ie,s.sr,O.q,T.s,g.H9],styles:["ion-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}h5[_ngcontent-%COMP%]{font-size:20px}h4[_ngcontent-%COMP%]{font-size:20px!important}.inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:32px!important}.titulo[_ngcontent-%COMP%], .titulo2[_ngcontent-%COMP%]{background:rgb(0,0,0);background:linear-gradient(129deg,rgb(0,0,0) 22%,rgb(73,73,73) 63%)}.izquierda[_ngcontent-%COMP%]{background-position:center;background-repeat:cover;-webkit-backdrop-filter:grayscale(30%);backdrop-filter:grayscale(30%)}.h[_ngcontent-%COMP%]{height:92%}"]}),r})(),title:"Evento | CMIC"}];let L=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[m.Bz.forChild(F),m.Bz]}),r})();var N=i(5847),S=i(3194),Q=i(1213),Y=i(2191),D=i(5236),G=i(8915);let R=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[g.ez,Z.u5,Z.UX,s.Pc,L,Y.RegistroEventoFormPageModule,Q.$,N.DashboardPageModule,S.WhatsappPageModule,D.MapPageModule,G.FP]}),r})()}}]);