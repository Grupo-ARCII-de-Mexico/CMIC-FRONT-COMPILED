"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2267],{2267:(S,p,i)=>{i.r(p),i.d(p,{ViewEventoPageModule:()=>G});var u=i(6814),f=i(95),s=i(7027),g=i(9085),v=i(5861),m=i(6676),P=i(553),h=i(4028),x=i(3295),T=i(4664),y=i(9397),E=i(7038),Z=i(3597),o=i(6689),w=i(930),M=i(2425),U=i(7121);function A(e,r){if(1&e&&(o.TgZ(0,"div",25),o._UZ(1,"app-map",26),o.qZA()),2&e){const n=o.oxw(2);o.xp6(1),o.Q6J("evento",n.evento)("visor",!0)}}function V(e,r){1&e&&(o.TgZ(0,"ion-card-subtitle",19),o._uU(1,"Costos:"),o.qZA())}function I(e,r){if(1&e&&(o.TgZ(0,"div",6)(1,"ion-card-subtitle",19),o._uU(2),o.TgZ(3,"b"),o._uU(4),o.ALo(5,"currency"),o.qZA()()()),2&e){const n=r.$implicit;o.xp6(2),o.hij("",n.nombre,": "),o.xp6(2),o.Oqu(o.lcZ(5,2,n.costo))}}function J(e,r){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,V,2,0,"ion-card-subtitle",27),o.YNc(2,I,6,4,"div",28),o.qZA()),2&e){const n=o.oxw(2);o.xp6(1),o.Q6J("ngIf",n.evento.costos.length>0),o.xp6(1),o.Q6J("ngForOf",n.evento.costos)}}function b(e,r){if(1&e){const n=o.EpF();o.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"ion-card",7)(4,"ion-card-header"),o._UZ(5,"ion-img",8),o.TgZ(6,"ion-card-title",9),o._uU(7),o.qZA()(),o.TgZ(8,"ion-card-content"),o._UZ(9,"ion-text",0)(10,"div",10),o.qZA()()()(),o.TgZ(11,"div",11)(12,"div",12)(13,"ion-card",13)(14,"ion-accordion-group",14)(15,"ion-accordion",14)(16,"ion-item",15)(17,"ion-card-title",16)(18,"b",17),o._uU(19,"Informaci\xf3n del Evento"),o.qZA()()(),o.TgZ(20,"div",18)(21,"ion-card-content")(22,"ion-card-subtitle",19),o._uU(23,"Dia del evento: "),o.TgZ(24,"b"),o._uU(25),o.qZA()(),o.TgZ(26,"ion-card-subtitle",19),o._uU(27,"Cupo "),o.TgZ(28,"b"),o._uU(29),o.qZA()(),o.TgZ(30,"ion-card-subtitle",19),o._uU(31,"Lugar: "),o.TgZ(32,"b"),o._uU(33),o.qZA()(),o.YNc(34,A,2,2,"div",20),o.YNc(35,J,3,2,"div",21),o.qZA()()(),o.TgZ(36,"ion-accordion",22)(37,"ion-item",15)(38,"ion-card-title",23)(39,"b",17),o._uU(40,"Registro"),o.qZA()()(),o.TgZ(41,"div",18)(42,"evento-form",24),o.NdJ("usuarioGuardado",function(a){o.CHM(n);const c=o.oxw();return o.KtG(c.getUser(a))}),o.qZA()()()()()()()()}if(2&e){const n=o.oxw();o.xp6(5),o.Q6J("src",n.uri+n.evento.imagen),o.xp6(2),o.Oqu(n.evento.titulo),o.xp6(3),o.Q6J("innerHTML",n.evento.detalles,o.oJD),o.xp6(15),o.Oqu(n.mon(n.evento.fechaInicio)),o.xp6(4),o.Oqu(n.evento.tieneCupoMaximo?"Imitado":"Ilimitado"),o.xp6(4),o.Oqu(n.evento.lugar),o.xp6(1),o.Q6J("ngIf",n.evento.mapLat),o.xp6(1),o.Q6J("ngIf",!n.evento.esGratis),o.xp6(7),o.Q6J("evento",n.evento)}}m().locale("es");const O=[{path:"",component:(()=>{var e;class r{constructor(t,a,c,l,d){this.route=t,this.genericS=a,this.modalc=c,this.toast=l,this.loading=d,this.tipoPublico=h.L,this.uri=P.N.image+"eventos/",this.iframe=!1}ngOnInit(){var t=this;this.route.params.subscribe(a=>{const c=a.identificador;a.iframe&&(this.iframe=!0),this.genericS.getOne("evento",c).subscribe(function(){var l=(0,v.Z)(function*(d){t.evento=d});return function(d){return l.apply(this,arguments)}}())})}mon(t){return m(t).locale("es").format("LL")+" a las "+m(t).locale("es").format("LT")}verMapa(){var t=this;return(0,v.Z)(function*(){(yield t.modalc.create({component:Z.s,componentProps:{visor:!0,evento:t.evento}})).present()})()}getUser(t){var a=this;return(0,v.Z)(function*(){if(console.log(t),a.evento.esGratis){const c=yield a.loading.create({id:"pago",animated:!0,spinner:"dots",translucent:!0,message:"Procesando..."});yield c.present();const l={evento:a.evento.id,plataformaPago:E.R.STRIPE};0===t.tipo?l.afiliado=t.id:l.participante=t.id,a.genericS.post("boleto",l).pipe((0,T.w)(d=>a.genericS.post("boleto/confirm-free/"+d.boleto.id,{})),(0,y.b)(function(){var d=(0,v.Z)(function*(R){a.modalc.dismiss(),yield c.dismiss(),a.toast.success("Registro Guardado","Revise su correo")});return function(R){return d.apply(this,arguments)}}())).subscribe()}else console.log(t),(yield a.modalc.create({component:x.$,componentProps:{emision:t,evento:a.evento},backdropDismiss:!1,keyboardClose:!1})).present()})()}verpago(){var t=this;return(0,v.Z)(function*(){(yield t.modalc.create({component:x.$,backdropDismiss:!1,keyboardClose:!1,componentProps:{evento:t.evento,emision:{id:10,tipo:h.L.ESTUDIANTES}}})).present()})()}}return(e=r).\u0275fac=function(t){return new(t||e)(o.Y36(g.gz),o.Y36(w.M),o.Y36(s.IN),o.Y36(M._W),o.Y36(s.HT))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-view-evento"]],inputs:{evento:"evento"},decls:5,vars:2,consts:[["color","primary"],["src","../../../assets/logo.png",2,"width","150px"],[3,"fullscreen"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-8","d-flex","container"],[1,"container"],["mode","ios",1,"shadow","mx-auto","w-100"],[1,"w-100",2,"height","400px",3,"src"],[1,"mt-4"],[3,"innerHTML"],[1,"col-md-4","d-flex","container"],[1,"container","mt-3"],[1,"shadow","mx-auto","w-100"],["value","first"],["slot","header","color","primary"],[1,"text-white","mt-0"],[2,"font-size","20px"],["slot","content",1,"ion-padding"],[1,"my-3",2,"font-size","14px"],["class","text-center","style","width: 100%; height: 200px;",4,"ngIf"],[4,"ngIf"],["value","second"],[1,"text-white"],[3,"evento","usuarioGuardado"],[1,"text-center",2,"width","100%","height","200px"],["width","100px",3,"evento","visor"],["class","my-3","style","font-size: 14px;",4,"ngIf"],["class","container",4,"ngFor","ngForOf"]],template:function(t,a){1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0),o._UZ(2,"ion-img",1),o.qZA()(),o.TgZ(3,"ion-content",2),o.YNc(4,b,43,9,"div",3),o.qZA()),2&t&&(o.xp6(3),o.Q6J("fullscreen",!0),o.xp6(1),o.Q6J("ngIf",a.evento))},dependencies:[u.sg,u.O5,s.We,s.eh,s.PM,s.FN,s.Zi,s.tO,s.Dq,s.W2,s.Gu,s.Xz,s.Ie,s.yW,s.sr,U.q,Z.s,u.H9],styles:["ion-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}"]}),r})()}];let C=(()=>{var e;class r{}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[g.Bz.forChild(O),g.Bz]}),r})();var F=i(5847),L=i(3194),N=i(1213),Q=i(2191),Y=i(5236);let G=(()=>{var e;class r{}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.ez,f.u5,f.UX,s.Pc,C,Q.RegistroEventoFormPageModule,N.$,F.DashboardPageModule,L.WhatsappPageModule,Y.MapPageModule]}),r})()}}]);