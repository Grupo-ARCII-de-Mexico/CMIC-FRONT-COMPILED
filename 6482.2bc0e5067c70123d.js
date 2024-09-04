"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6482],{6482:(R,m,o)=>{o.r(m),o.d(m,{WebsitePageModule:()=>b});var u=o(6814),g=o(95),i=o(9843),d=o(9085),h=o(5545),t=o(6689),r=o(930),P=o(9403),Z=o(4846),f=o(1012),T=o(3340),v=o(1561);const C=[{path:"",component:(()=>{var n;class a{constructor(e,l,s,A,M,y,I){this.menu=e,this.genericS=l,this.sliderRepo=s,this.boletinRepo=A,this.cursoRepo=M,this.comentarioRepo=y,this.comisionesRepo=I}ngOnInit(){(0,h.w)(),this.genericS.getAll("sliders").subscribe(e=>{this.sliderRepo.setSliders(e)}),this.genericS.getAll("boletines").subscribe(e=>{this.boletinRepo.setBoletins(e)}),this.genericS.getAll("cursos").subscribe(e=>{this.cursoRepo.setCursos(e)}),this.genericS.getAll("comentarios").subscribe(e=>{this.comentarioRepo.setComentarios(e)}),this.genericS.getAll("comisiones").subscribe(e=>{this.comisionesRepo.setComisioness(e)})}closemenu(){this.menu.close()}}return(n=a).\u0275fac=function(e){return new(e||n)(t.Y36(i._q),t.Y36(r.M),t.Y36(P.t),t.Y36(Z.a),t.Y36(f.U),t.Y36(T.l),t.Y36(v.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-website"]],decls:37,vars:1,consts:[["id","main-web",3,"animated"],["color","secondary","contentId","main-web","menuId","website","side","start","type","overlay"],["color","secondary"],["src","../../../../../assets/logo.png"],["button","","routerLink","/website/oportunidad-negocio","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/eventos","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/licitaciones","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["value","first"],["slot","header","color","secondary"],["slot","content"],["button","","routerLink","/website/instituciones/icic","button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/instituciones/itc","button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/instituciones/fic","button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/cmic","button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/afiliate","button","","color","primary","lines","none",1,"mx-auto","px-0",3,"click"]],template:function(e,l){1&e&&(t._UZ(0,"ion-router-outlet",0),t.TgZ(1,"ion-menu",1)(2,"ion-content",2),t._UZ(3,"ion-img",3),t.TgZ(4,"ion-item",4),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(5,"ion-label"),t._uU(6,"Oportunidades de Negocio"),t.qZA()(),t.TgZ(7,"ion-item",5),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(8,"ion-label"),t._uU(9,"Eventos"),t.qZA()(),t.TgZ(10,"ion-item",6),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(11,"ion-label"),t._uU(12,"Licitaciones"),t.qZA()(),t.TgZ(13,"ion-accordion-group")(14,"ion-accordion",7)(15,"ion-item",8)(16,"ion-label"),t._uU(17,"Instituciones"),t.qZA()(),t.TgZ(18,"div",9)(19,"ion-item",10),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(20,"ion-label"),t._uU(21,"Capacitaci\xf3n Ejecutiva (ICIC)"),t.qZA()(),t.TgZ(22,"ion-item",11),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(23,"ion-label"),t._uU(24,"Oferta Educativa (ITC)"),t.qZA()(),t.TgZ(25,"ion-item",12),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(26,"ion-label"),t._uU(27,"Instituto Certificador (FIC)"),t.qZA()()()()(),t.TgZ(28,"ion-item",13),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(29,"ion-label"),t._uU(30,"CMIC"),t.qZA()(),t.TgZ(31,"ion-item",14),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(32,"ion-label"),t._uU(33,"Foro"),t.qZA()(),t.TgZ(34,"ion-item",15),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(35,"ion-label"),t._uU(36,"Af\xedliate"),t.qZA()()()()),2&e&&t.Q6J("animated",!1)},dependencies:[i.We,i.eh,i.W2,i.Xz,i.Ie,i.Q$,i.z0,i.jP,i.YI,d.rH]}),a})(),children:[{path:"",loadChildren:()=>Promise.all([o.e(5251),o.e(1345),o.e(5768),o.e(1789)]).then(o.bind(o,1789)).then(n=>n.HomePageModule)},{path:"eventos",loadChildren:()=>Promise.all([o.e(5251),o.e(1345),o.e(5768),o.e(9808)]).then(o.bind(o,9808)).then(n=>n.EventosPageModule)},{path:"instituciones",loadChildren:()=>Promise.all([o.e(5251),o.e(8532)]).then(o.bind(o,8532)).then(n=>n.InstitucionesPageModule)},{path:"cmic",loadChildren:()=>Promise.all([o.e(5251),o.e(1345),o.e(8592),o.e(2098)]).then(o.bind(o,2098)).then(n=>n.CmicPageModule)},{path:"afiliate",loadChildren:()=>Promise.all([o.e(5251),o.e(1345),o.e(8592),o.e(6339)]).then(o.bind(o,6339)).then(n=>n.AfiliatePageModule)},{path:"contacto",loadChildren:()=>Promise.all([o.e(5251),o.e(4267)]).then(o.bind(o,4267)).then(n=>n.ContactoPageModule)},{path:"oportunidad-negocio",loadChildren:()=>Promise.all([o.e(5251),o.e(9562)]).then(o.bind(o,9562)).then(n=>n.OportunidadNegocioPageModule)},{path:"licitaciones",loadChildren:()=>Promise.all([o.e(5251),o.e(1345),o.e(8592),o.e(8189)]).then(o.bind(o,8189)).then(n=>n.LicitacionesPageModule)},{path:"privacidad",loadChildren:()=>Promise.all([o.e(5251),o.e(7105)]).then(o.bind(o,7105)).then(n=>n.PrivacidadPageModule)}]},{path:"boletin",loadChildren:()=>o.e(7479).then(o.bind(o,7479)).then(n=>n.BoletinPageModule)}];let W=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(C),d.Bz]}),a})(),b=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,g.u5,i.Pc,W]}),a})()}}]);