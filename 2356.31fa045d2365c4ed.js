"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2356],{2356:(A,u,c)=>{c.r(u),c.d(u,{VerNegociosPageModule:()=>V});var p=c(6814),v=c(95),r=c(7027),m=c(9085),h=c(5861),f=c(553),o=c(6689),N=c(930),Z=c(1264),a=c(4998);const g=(0,Z.MT)({name:"negocio"},(0,a.h4)());let y=(()=>{var e;class i{constructor(){this.negocio$=g.pipe((0,a.WK)())}setNegocio(t){g.update((0,a.J6)(t))}addNegocio(t){g.update((0,a.dP)(t))}updateNegocio(t,s){g.update((0,a.jB)(t,s))}deleteNegocio(t){g.update((0,a._L)(t))}}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),i})();function P(e,i){if(1&e){const n=o.EpF();o.TgZ(0,"tr")(1,"th",12),o._UZ(2,"ion-img",13),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td")(6,"ion-buttons",14)(7,"ion-button",15),o.NdJ("click",function(){const d=o.CHM(n).$implicit,l=o.oxw();return o.KtG(l.vistaPrevia(d.id))}),o._UZ(8,"ion-icon",16),o.qZA()()()()}if(2&e){const n=i.$implicit,t=o.oxw();o.xp6(2),o.Q6J("src",t.uri+n.logotipo),o.xp6(2),o.Oqu(null==n?null:n.empresa)}}const x=[{path:"",component:(()=>{var e;class i{constructor(t,s){this.gService=t,this.negocioRepo=s,this.negocios=[],this.uri=f.N.image+"oportunidades-logotipos/"}ngOnInit(){this.gService.getAll("negocio").subscribe(t=>{this.negocios=t})}vistaPrevia(t){var s=this;return(0,h.Z)(function*(){const d=s.negocios.find(l=>l.id===t);d&&window.open(f.N.host+"oportunidad-negocio/"+d.identificador,"_blank")})()}}return(e=i).\u0275fac=function(t){return new(t||e)(o.Y36(N.M),o.Y36(y))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-ver-negocios"]],decls:24,vars:3,consts:[[3,"fullscreen"],[1,"mt-5","px-3"],[1,"container"],[1,"my-3"],[1,"d-flex","mt-5"],[1,"h4"],["placeholder","Buscar Oportunidad de Negocio","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"debounce"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red","d-none","d-md-block"],["scope","col",1,"red"],[4,"ngFor","ngForOf"],["scope","row",1,"text-center","d-none","d-md-block"],[1,"img-fluid",3,"src"],["color","primary","slot","start"],["color","primary",3,"click"],["slot","icon-only","name","eye-outline"]],template:function(t,s){1&t&&(o.TgZ(0,"ion-content",0),o._UZ(1,"br")(2,"br"),o.TgZ(3,"div",1)(4,"div",2)(5,"h1",3)(6,"b"),o._uU(7,"Oportunidades de Negocio"),o.qZA()(),o.TgZ(8,"div",4)(9,"h5",5)(10,"b"),o._uU(11,"Eventos Registrados"),o.qZA()(),o._UZ(12,"ion-searchbar",6),o.qZA(),o.TgZ(13,"table",7)(14,"thead",8)(15,"tr")(16,"th",9),o._uU(17,"Foto"),o.qZA(),o.TgZ(18,"th",10),o._uU(19,"Empresa"),o.qZA(),o.TgZ(20,"th",10),o._uU(21,"Opciones"),o.qZA()()(),o.TgZ(22,"tbody"),o.YNc(23,P,9,2,"tr",11),o.qZA()()()()()),2&t&&(o.Q6J("fullscreen",!0),o.xp6(12),o.Q6J("debounce",250),o.xp6(11),o.Q6J("ngForOf",s.negocios))},dependencies:[p.sg,r.YG,r.Sm,r.W2,r.gu,r.Xz,r.VI,r.j9],styles:[".img-fluid[_ngcontent-%COMP%]{max-width:200px}.red[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}"]}),i})()}];let T=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[m.Bz.forChild(x),m.Bz]}),i})(),V=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[p.ez,v.u5,r.Pc,T]}),i})()}}]);