"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2267],{2267:(B,h,i)=>{i.r(h),i.d(h,{ViewEventoPageModule:()=>j});var v=i(6814),Z=i(95),s=i(7027),g=i(9085),u=i(5861),p=i(6676),y=i(553),P=i(4028),b=i(3295),M=i(4664),E=i(9397),w=i(7038),T=i(3597),e=i(6689),U=i(930),A=i(2425),O=i(7121),I=i(9659);function C(t,r){if(1&t&&e._UZ(0,"img",9),2&t){const n=e.oxw();e.Q6J("src",n.uri+n.evento.logotipo,e.LSH)}}function V(t,r){if(1&t&&(e.TgZ(0,"div",33),e._UZ(1,"app-map",34),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("evento",n.evento)("visor",!0)}}function z(t,r){1&t&&(e.TgZ(0,"ion-card-subtitle",26),e._uU(1,"Costos:"),e.qZA())}function J(t,r){if(1&t&&(e.TgZ(0,"div",37)(1,"ion-card-subtitle",26),e._uU(2),e.TgZ(3,"b"),e._uU(4),e.ALo(5,"currency"),e.qZA()()()),2&t){const n=r.$implicit;e.xp6(2),e.hij("",n.nombre,": "),e.xp6(2),e.Oqu(e.lcZ(5,2,n.costo))}}function Q(t,r){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,z,2,0,"ion-card-subtitle",35),e.YNc(2,J,6,4,"div",36),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.evento.costos.length>0),e.xp6(1),e.Q6J("ngForOf",n.evento.costos)}}function F(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"ion-card",13)(4,"ion-card-content",14),e._UZ(5,"ion-img",15),e.qZA()()()(),e.TgZ(6,"div",16)(7,"div",17)(8,"ion-card",18)(9,"ion-accordion-group",19)(10,"ion-accordion",20)(11,"ion-item",21)(12,"ion-card-title",22)(13,"b",23),e._uU(14,"Informaci\xf3n del Evento"),e.qZA()()(),e.TgZ(15,"div",24)(16,"ion-card-content")(17,"ion-card-title",25)(18,"b"),e._uU(19),e.qZA()(),e.TgZ(20,"ion-card-subtitle",26),e._uU(21,"Dia del evento: "),e.TgZ(22,"b"),e._uU(23),e.qZA()(),e.TgZ(24,"ion-card-subtitle",26),e._uU(25,"Cupo "),e.TgZ(26,"b"),e._uU(27),e.qZA()(),e.TgZ(28,"ion-card-subtitle",26),e._uU(29,"Lugar: "),e.TgZ(30,"b"),e._uU(31),e.qZA()(),e.YNc(32,V,2,2,"div",27),e.YNc(33,Q,3,2,"div",28),e.TgZ(34,"ion-card-subtitle",26),e._uU(35,"Informaci\xf3n Adicional: "),e.qZA(),e._UZ(36,"div",29),e.qZA()()(),e.TgZ(37,"ion-accordion",30)(38,"ion-item",21)(39,"ion-card-title",31)(40,"b",23),e._uU(41,"Registro"),e.qZA()()(),e.TgZ(42,"div",24)(43,"evento-form",32),e.NdJ("usuarioGuardado",function(a){e.CHM(n);const d=e.oxw();return e.KtG(d.getUser(a))}),e.qZA()()()()()()()()}if(2&t){const n=e.oxw();e.xp6(5),e.Q6J("src",n.uri+n.evento.imagen),e.xp6(14),e.Oqu(n.evento.titulo),e.xp6(4),e.Oqu(n.mon(n.evento.fechaInicio)),e.xp6(4),e.Oqu(n.evento.tieneCupoMaximo?"Limitado":"Ilimitado"),e.xp6(4),e.Oqu(n.evento.lugar),e.xp6(1),e.Q6J("ngIf",n.evento.mapLat),e.xp6(1),e.Q6J("ngIf",!n.evento.esGratis),e.xp6(3),e.Q6J("innerHTML",n.evento.detalles,e.oJD),e.xp6(7),e.Q6J("evento",n.evento)}}p.locale("es");const L=[{path:"",component:(()=>{var t;class r{constructor(o,a,d,l,c){this.route=o,this.genericS=a,this.modalc=d,this.toast=l,this.loading=c,this.tipoPublico=P.L,this.uri=y.N.image+"eventos/",this.iframe=!1}ngOnInit(){var o=this;this.route.params.subscribe(a=>{const d=a.identificador;a.iframe&&(this.iframe=!0),this.genericS.getOne("evento",d).subscribe(function(){var l=(0,u.Z)(function*(c){var m,f,x;o.evento=c,o.evento.costos="string"==typeof(null===(m=o.evento)||void 0===m?void 0:m.costos)?JSON.parse(null!==(f=null===(x=o.evento)||void 0===x?void 0:x.costos)&&void 0!==f?f:"[]"):o.evento.costos});return function(c){return l.apply(this,arguments)}}())})}mon(o){return p(new Date(o)).format("LL")+" a las "+p(new Date(o)).utc().format("LTS")}verMapa(){var o=this;return(0,u.Z)(function*(){(yield o.modalc.create({component:T.s,componentProps:{visor:!0,evento:o.evento}})).present()})()}getUser(o){var a=this;return(0,u.Z)(function*(){if(a.evento.esGratis){const d=yield a.loading.create({id:"pago",animated:!0,spinner:"dots",translucent:!0,message:"Procesando..."});yield d.present();const l={evento:a.evento.id,plataformaPago:w.R.STRIPE};0===o.tipo?l.afiliado=o.id:l.participante=o.id,a.genericS.post("boleto",l).pipe((0,M.w)(c=>a.genericS.post("boleto/confirm-free/"+c.boleto.id,{})),(0,E.b)(function(){var c=(0,u.Z)(function*(m){a.modalc.dismiss(),yield d.dismiss(),a.toast.success("Registro Guardado","Revise su correo")});return function(m){return c.apply(this,arguments)}}())).subscribe()}else(yield a.modalc.create({component:b.$,componentProps:{emision:o,evento:a.evento},backdropDismiss:!1,keyboardClose:!1})).present()})()}verpago(){var o=this;return(0,u.Z)(function*(){(yield o.modalc.create({component:b.$,backdropDismiss:!1,keyboardClose:!1,componentProps:{evento:o.evento,emision:{id:10,tipo:P.L.ESTUDIANTES}}})).present()})()}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(g.gz),e.Y36(U.M),e.Y36(s.IN),e.Y36(A._W),e.Y36(s.HT))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-view-evento"]],inputs:{evento:"evento"},decls:22,vars:4,consts:[[2,"background-color","#d8d8d8",3,"fullscreen"],[1,"titulo","row",2,"z-index","0"],[1,"text-white","my-auto","py-1","pb-2","mt-4","pb-md-5","ms-3","ms-md-5","me-auto","col-md-3","w-100"],[1,"d-none","d-md-block"],["color","light",1,"w-100"],["class","mx-auto mx-md-0 img-fluid col-6 my-1 py-2 my-md-auto col-md-3 me-0 me-md-3","width","300px","style","max-height: 300px;","alt","",3,"src",4,"ngIf"],[1,"h",2,"z-index","1"],["class","bg-white row",4,"ngIf"],[1,"titulo2","fixed-bottom",2,"z-index","-1"],["width","300px","alt","",1,"mx-auto","mx-md-0","img-fluid","col-6","my-1","py-2","my-md-auto","col-md-3","me-0","me-md-3",2,"max-height","300px",3,"src"],[1,"bg-white","row"],[1,"d-flex","container","col-md-7"],[1,"container","d-flex","mt-4","mt-md-0"],["mode","ios",1,"shadow","mt-5","mb-auto","mx-auto"],[1,"izquierda","d-flex","h-100"],[1,"m-auto","img-fluid",3,"src"],[1,"col-md-4","d-flex","container"],[1,"container","mt-3"],[1,"shadow","mx-auto","w-100"],["value","first",2,"z-index","1"],["value","first"],["slot","header","color","secondary"],[1,"text-white","mt-0"],[2,"font-size","20px"],["slot","content",1,"ion-padding"],[1,"text-center","text-black","h2","mb-3"],[1,"my-3",2,"font-size","14px"],["class","text-center","style","width: 100%; height: 200px;",4,"ngIf"],[4,"ngIf"],[1,"text-justify","contenido-con-estilos","mt-2",3,"innerHTML"],["value","second"],[1,"text-white"],[3,"evento","usuarioGuardado"],[1,"text-center",2,"width","100%","height","200px"],["width","100px",3,"evento","visor"],["class","my-3","style","font-size: 14px;",4,"ngIf"],["class","container",4,"ngFor","ngForOf"],[1,"container"]],template:function(o,a){1&o&&(e._UZ(0,"header"),e.TgZ(1,"ion-content",0)(2,"div",1)(3,"ion-label",2)(4,"h1"),e._uU(5,"Eventos"),e.qZA(),e.TgZ(6,"div",3)(7,"ion-breadcrumbs",4)(8,"ion-breadcrumb"),e._uU(9,"Inicio"),e.qZA(),e.TgZ(10,"ion-breadcrumb"),e._uU(11,"Eventos"),e.qZA(),e.TgZ(12,"ion-breadcrumb"),e._uU(13),e.qZA()()()(),e.YNc(14,C,1,1,"img",5),e.qZA(),e.TgZ(15,"div",6),e.YNc(16,F,44,9,"div",7),e.qZA(),e.TgZ(17,"div",8),e._UZ(18,"br")(19,"br")(20,"br")(21,"br"),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(12),e.Oqu(a.evento.titulo),e.xp6(1),e.Q6J("ngIf",null==a.evento?null:a.evento.logotipo),e.xp6(2),e.Q6J("ngIf",a.evento))},dependencies:[v.sg,v.O5,s.We,s.eh,s.fn,s.gZ,s.PM,s.FN,s.tO,s.Dq,s.W2,s.Xz,s.Ie,s.Q$,O.q,T.s,I.E,v.H9],styles:["ion-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}h5[_ngcontent-%COMP%]{font-size:20px}h4[_ngcontent-%COMP%]{font-size:20px!important}.inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:32px!important}.titulo[_ngcontent-%COMP%], .titulo2[_ngcontent-%COMP%]{background:rgb(0,0,0);background:linear-gradient(129deg,rgb(0,0,0) 22%,rgb(73,73,73) 63%)}.izquierda[_ngcontent-%COMP%]{background-position:center;background-repeat:cover;-webkit-backdrop-filter:grayscale(30%);backdrop-filter:grayscale(30%)}.h[_ngcontent-%COMP%]{height:92%}"]}),r})(),title:"Evento | CMIC"}];let N=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(L),g.Bz]}),r})();var S=i(5847),Y=i(3194),D=i(1213),R=i(2191),G=i(5236),H=i(8915),q=i(3964);let j=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.ez,Z.u5,Z.UX,s.Pc,N,R.RegistroEventoFormPageModule,D.$,S.DashboardPageModule,Y.WhatsappPageModule,G.MapPageModule,H.FP,q.HeaderPageModule]}),r})()}}]);