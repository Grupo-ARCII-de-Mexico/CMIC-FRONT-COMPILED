"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6482],{6482:(I,m,o)=>{o.r(m),o.d(m,{WebsitePageModule:()=>W});var u=o(6814),g=o(95),i=o(9843),d=o(9085),r=o(5545),t=o(6689),h=o(930),P=o(9403),Z=o(4846),f=o(1012),T=o(3340),v=o(1561);const C=[{path:"",component:(()=>{var e;class c{constructor(n,l,s,A,M,p,y){this.menu=n,this.genericS=l,this.sliderRepo=s,this.boletinRepo=A,this.cursoRepo=M,this.comentarioRepo=p,this.comisionesRepo=y}ngOnInit(){(0,r.w)(),this.genericS.getAll("sliders").subscribe(n=>{this.sliderRepo.setSliders(n)}),this.genericS.getAll("boletines").subscribe(n=>{this.boletinRepo.setBoletins(n)}),this.genericS.getAll("cursos").subscribe(n=>{this.cursoRepo.setCursos(n)}),this.genericS.getAll("comentarios").subscribe(n=>{this.comentarioRepo.setComentarios(n)}),this.genericS.getAll("comisiones").subscribe(n=>{this.comisionesRepo.setComisioness(n)})}closemenu(){this.menu.close()}}return(e=c).\u0275fac=function(n){return new(n||e)(t.Y36(i._q),t.Y36(h.M),t.Y36(P.t),t.Y36(Z.a),t.Y36(f.U),t.Y36(T.l),t.Y36(v.g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-website"]],decls:37,vars:1,consts:[["id","main-web",3,"animated"],["color","secondary","contentId","main-web","menuId","website","side","start","type","overlay"],["color","secondary"],["src","../../../../../assets/logo.png"],["button","","routerLink","/website/oportunidad-negocio","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/eventos","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/licitaciones","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["value","first"],["slot","header","color","secondary"],["slot","content"],["button","","routerLink","/website/instituciones/icic","button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/instituciones/itc","button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/instituciones/fic","button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/cmic","button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","color","dark","lines","none",1,"mx-auto","px-0",3,"click"],["button","","routerLink","/website/afiliate","button","","color","primary","lines","none",1,"mx-auto","px-0",3,"click"]],template:function(n,l){1&n&&(t._UZ(0,"ion-router-outlet",0),t.TgZ(1,"ion-menu",1)(2,"ion-content",2),t._UZ(3,"ion-img",3),t.TgZ(4,"ion-item",4),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(5,"ion-label"),t._uU(6,"Oportunidades de Negocio"),t.qZA()(),t.TgZ(7,"ion-item",5),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(8,"ion-label"),t._uU(9,"Eventos"),t.qZA()(),t.TgZ(10,"ion-item",6),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(11,"ion-label"),t._uU(12,"Licitaciones"),t.qZA()(),t.TgZ(13,"ion-accordion-group")(14,"ion-accordion",7)(15,"ion-item",8)(16,"ion-label"),t._uU(17,"Instituciones"),t.qZA()(),t.TgZ(18,"div",9)(19,"ion-item",10),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(20,"ion-label"),t._uU(21,"Capacitaci\xf3n Ejecutiva (ICIC)"),t.qZA()(),t.TgZ(22,"ion-item",11),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(23,"ion-label"),t._uU(24,"Oferta Educativa (ITC)"),t.qZA()(),t.TgZ(25,"ion-item",12),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(26,"ion-label"),t._uU(27,"Instituto Certificador (FIC)"),t.qZA()()()()(),t.TgZ(28,"ion-item",13),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(29,"ion-label"),t._uU(30,"CMIC"),t.qZA()(),t.TgZ(31,"ion-item",14),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(32,"ion-label"),t._uU(33,"Foro"),t.qZA()(),t.TgZ(34,"ion-item",15),t.NdJ("click",function(){return l.closemenu()}),t.TgZ(35,"ion-label"),t._uU(36,"Af\xedliate"),t.qZA()()()()),2&n&&t.Q6J("animated",!1)},dependencies:[i.We,i.eh,i.W2,i.Xz,i.Ie,i.Q$,i.z0,i.jP,i.YI,d.rH]}),c})(),children:[{path:"",loadChildren:()=>Promise.all([o.e(1345),o.e(5251),o.e(5768),o.e(1789)]).then(o.bind(o,1789)).then(e=>e.HomePageModule)},{path:"eventos",loadChildren:()=>Promise.all([o.e(1345),o.e(5251),o.e(5768),o.e(9808)]).then(o.bind(o,9808)).then(e=>e.EventosPageModule)},{path:"instituciones",loadChildren:()=>Promise.all([o.e(5251),o.e(8532)]).then(o.bind(o,8532)).then(e=>e.InstitucionesPageModule)},{path:"cmic",loadChildren:()=>Promise.all([o.e(1345),o.e(5251),o.e(8592),o.e(2098)]).then(o.bind(o,2098)).then(e=>e.CmicPageModule)},{path:"afiliate",loadChildren:()=>Promise.all([o.e(1345),o.e(5251),o.e(8592),o.e(6339)]).then(o.bind(o,6339)).then(e=>e.AfiliatePageModule)},{path:"contacto",loadChildren:()=>Promise.all([o.e(5251),o.e(4267)]).then(o.bind(o,4267)).then(e=>e.ContactoPageModule)},{path:"oportunidad-negocio",loadChildren:()=>Promise.all([o.e(5251),o.e(9562)]).then(o.bind(o,9562)).then(e=>e.OportunidadNegocioPageModule)},{path:"licitaciones",loadChildren:()=>Promise.all([o.e(1345),o.e(5251),o.e(8592),o.e(8189)]).then(o.bind(o,8189)).then(e=>e.LicitacionesPageModule)}]},{path:"privacidad",loadChildren:()=>o.e(7105).then(o.bind(o,7105)).then(e=>e.PrivacidadPageModule)}];let b=(()=>{var e;class c{}return(e=c).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(C),d.Bz]}),c})(),W=(()=>{var e;class c{}return(e=c).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,g.u5,i.Pc,b]}),c})()}}]);