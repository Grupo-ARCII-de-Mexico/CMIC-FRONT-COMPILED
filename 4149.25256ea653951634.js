"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4149],{4149:(Y,Z,a)=>{a.r(Z),a.d(Z,{VerApoyoPageModule:()=>N});var x=a(6814),P=a(95),c=a(9843),g=a(9085),v=a(5861),A=a(6676),C=a(553),m=a(1486),o=a(6689),V=a(4433),M=a(7153),U=a(2425),b=a(930),E=a(2051);function J(i,d){if(1&i){const l=o.EpF();o.TgZ(0,"tr")(1,"th",12),o._UZ(2,"ion-img",13),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td")(6,"ion-buttons",14)(7,"ion-button",15),o.NdJ("click",function(){const r=o.CHM(l).$implicit,s=o.oxw();return o.KtG(s.vistaPrevia(r.id))}),o._UZ(8,"ion-icon",16),o.qZA(),o.TgZ(9,"ion-button",17),o._UZ(10,"ion-icon",18),o.qZA(),o.TgZ(11,"ion-button",15),o.NdJ("click",function(){const r=o.CHM(l).$implicit,s=o.oxw();return o.KtG(s.exportToExcel(r.id))}),o._UZ(12,"ion-icon",19),o.qZA(),o.TgZ(13,"ion-button",17),o._UZ(14,"ion-icon",20),o.qZA(),o.TgZ(15,"ion-button",15),o.NdJ("click",function(){const r=o.CHM(l).$implicit,s=o.oxw();return o.KtG(s.deleteEvento(r.id))}),o._UZ(16,"ion-icon",21),o.qZA(),o.TgZ(17,"ion-button",15),o.NdJ("click",function(){const r=o.CHM(l).$implicit,s=o.oxw();return o.KtG(s.cerrarEvento(r.id))}),o._UZ(18,"ion-icon",22),o.qZA()()()()}if(2&i){const l=d.$implicit,e=o.oxw();o.xp6(2),o.Q6J("src",e.uri+l.imagen),o.xp6(2),o.Oqu(l.titulo),o.xp6(5),o.MGl("routerLink","ver-usuarios/",l.identificador,""),o.xp6(4),o.MGl("routerLink","editar-evento/",l.id,"")}}const S=[{path:"",component:(()=>{var i;class d{constructor(e,n,r,s,u,p){this.nav=e,this.alert=n,this.loading=r,this.toast=s,this.genericService=u,this.apoyos=p,this.uri=C.N.image+"apoyos-dn/",this.eventos=[]}ngOnInit(){this.apoyos.user$.subscribe(e=>{this.eventos=e})}mon(e){return A(e).locale("es").format("L")+" "+A(new Date(e)).utc().format("LTS")}vistaPrevia(e){var n=this;return(0,v.Z)(function*(){const r=n.eventos.find(s=>s.id===e);r&&window.open(C.N.host+"apoyo/"+r.identificador,"_blank")})()}exportToExcel(e){const n=this.eventos.find(t=>t.id===e);let r=[];for(let t of null==n?void 0:n.apoyos){var s,u,p,f,y,h;r.push({Nombre:t?null==t?void 0:t.nombre:null!==(s=null==t?void 0:t.nombre)&&void 0!==s?s:"",Cargo:t?null==t?void 0:t.cargo:null!==(u=null==t?void 0:t.cargo)&&void 0!==u?u:"",Empresa:t?null==t?void 0:t.empresa:null!==(p=null==t?void 0:t.empresa)&&void 0!==p?p:"",Correo:t?null==t?void 0:t.email:null!==(f=null==t?void 0:t.email)&&void 0!==f?f:"",Tel\u00e9fono:t?null==t?void 0:t.telefono:null!==(y=null==t?void 0:t.telefono)&&void 0!==y?y:"",RFC:t?null==t?void 0:t.rfc:null!==(h=null==t?void 0:t.rfc)&&void 0!==h?h:""}),console.log(r)}if(r){const t=m.P6.json_to_sheet(r),T=m.P6.book_new();m.P6.book_append_sheet(T,t,"Sheet1"),m.NC(T,(null==n?void 0:n.titulo.toUpperCase())+".xlsx")}}deleteEvento(e){var n=this;return(0,v.Z)(function*(){var r;yield n.alert.setData({animated:!0,header:"Est\xe1 a punto de eliminar este evento",message:"Si lo elimina se perder\xe1n todos los datos relacionados. \n \xbfDesea continuar?",buttons:[{text:"Cancelar"},{text:"Confirmar",handler:(r=(0,v.Z)(function*(){n.loading.setData({animated:!0,message:"Eliminando",spinner:"dots"}),yield n.loading.create(),yield n.loading.show(),n.genericService.delete("desastre",e).subscribe(function(){var s=(0,v.Z)(function*(u){yield n.loading.hide(),n.toast.success("Evento Eliminado")});return function(u){return s.apply(this,arguments)}}())}),function(){return r.apply(this,arguments)})}]})})()}cerrarEvento(e){var n=this;return(0,v.Z)(function*(){var r;yield n.alert.setData({animated:!0,header:"Cerrar Evento",message:"Est\xe1 a punto de cerrar el evento una vez lo haga no podr\xe1 reabrilo \xbfDesea Continuar?",buttons:[{text:"Cancelar"},{text:"Cerrar",handler:(r=(0,v.Z)(function*(){n.genericService.update("desastre",e,{active:!1}).subscribe(s=>{n.eventos=n.eventos.map(u=>u.id===e?s:u)})}),function(){return r.apply(this,arguments)})}]})})()}people(e){return(0,v.Z)(function*(){})()}}return(i=d).\u0275fac=function(e){return new(e||i)(o.Y36(c.SH),o.Y36(V.c),o.Y36(M.b),o.Y36(U._W),o.Y36(b.M),o.Y36(E.d))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-ver-apoyo"]],decls:24,vars:3,consts:[[3,"fullscreen"],[1,"mt-5","px-3"],[1,"container"],[1,"my-3"],[1,"d-flex","mt-5"],[1,"h4"],["placeholder","Buscar evento","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"debounce"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red","d-none","d-md-block"],["scope","col",1,"red"],[4,"ngFor","ngForOf"],["scope","row",1,"text-center","d-none","d-md-block"],[1,"img-fluid",3,"src"],["color","primary","slot","start"],["color","primary",3,"click"],["slot","icon-only","name","eye-outline"],["color","primary",3,"routerLink"],["slot","icon-only","name","people-outline"],["slot","icon-only","name","download-outline"],["slot","icon-only","name","create-outline"],["slot","icon-only","name","trash-outline"],["slot","icon-only","name","close-outline"]],template:function(e,n){1&e&&(o.TgZ(0,"ion-content",0),o._UZ(1,"br")(2,"br"),o.TgZ(3,"div",1)(4,"div",2)(5,"h1",3)(6,"b"),o._uU(7,"Apoyos"),o.qZA()(),o.TgZ(8,"div",4)(9,"h5",5)(10,"b"),o._uU(11,"Apoyos Registrados"),o.qZA()(),o._UZ(12,"ion-searchbar",6),o.qZA(),o.TgZ(13,"table",7)(14,"thead",8)(15,"tr")(16,"th",9),o._uU(17,"Foto"),o.qZA(),o.TgZ(18,"th",10),o._uU(19,"Titulo"),o.qZA(),o.TgZ(20,"th",10),o._uU(21,"Opciones"),o.qZA()()(),o.TgZ(22,"tbody"),o.YNc(23,J,19,4,"tr",11),o.qZA()()()()()),2&e&&(o.Q6J("fullscreen",!0),o.xp6(12),o.Q6J("debounce",250),o.xp6(11),o.Q6J("ngForOf",n.eventos))},dependencies:[x.sg,c.YG,c.Sm,c.W2,c.gu,c.Xz,c.VI,c.j9,c.YI,g.rH],styles:[".img-fluid[_ngcontent-%COMP%]{max-width:200px}.red[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}"]}),d})()}];let F=(()=>{var i;class d{}return(i=d).\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[g.Bz.forChild(S),g.Bz]}),d})(),N=(()=>{var i;class d{}return(i=d).\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[x.ez,P.u5,c.Pc,F]}),d})()}}]);