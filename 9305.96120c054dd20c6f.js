"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9305],{9305:($,O,l)=>{l.r(O),l.d(O,{VerEventoPageModule:()=>_});var z=l(6814),B=l(95),a=l(9843),h=l(9085),v=l(5861),f=l(1486),G=l(6676),H=l(553),e=l(6689),I=l(8013),j=l(1284),q=l(4433),K=l(7153),L=l(2425),Q=l(930);function W(s,c){if(1&s){const d=e.EpF();e.TgZ(0,"tr")(1,"th",12),e._UZ(2,"ion-img",13),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"ion-buttons",14)(9,"ion-button",15),e.NdJ("click",function(){const r=e.CHM(d).$implicit,i=e.oxw();return e.KtG(i.vistaPrevia(r.id))}),e._UZ(10,"ion-icon",16),e.qZA(),e.TgZ(11,"ion-button",15),e.NdJ("click",function(){const r=e.CHM(d).$implicit,i=e.oxw();return e.KtG(i.exportToExcel(r.id))}),e._UZ(12,"ion-icon",17),e.qZA(),e.TgZ(13,"ion-button",15),e.NdJ("click",function(){const r=e.CHM(d).$implicit,i=e.oxw();return e.KtG(i.modalUser(r.id))}),e._UZ(14,"ion-icon",18),e.qZA(),e.TgZ(15,"ion-button",19),e._UZ(16,"ion-icon",20),e.qZA(),e.TgZ(17,"ion-button",15),e.NdJ("click",function(){const r=e.CHM(d).$implicit,i=e.oxw();return e.KtG(i.deleteEvento(r.id))}),e._UZ(18,"ion-icon",21),e.qZA(),e.TgZ(19,"ion-button",15),e.NdJ("click",function(){const r=e.CHM(d).$implicit,i=e.oxw();return e.KtG(i.cerrarEvento(r.id))}),e._UZ(20,"ion-icon",22),e.qZA()()()()}if(2&s){const d=c.$implicit,t=e.oxw();e.xp6(2),e.Q6J("src",t.uri+d.imagen),e.xp6(2),e.Oqu(d.titulo),e.xp6(2),e.Oqu(t.mon(d.fechaInicio)),e.xp6(9),e.MGl("routerLink","editar-evento/",d.id,"")}}const X=[{path:"",component:(()=>{var s;class c{constructor(t,o,r,i,u,m,g){this.eventoRepo=t,this.boletosRepo=o,this.nav=r,this.alert=i,this.loading=u,this.toast=m,this.genericService=g,this.uri=H.N.image+"eventos/",this.eventos=[]}ngOnInit(){this.eventoRepo.evento$.subscribe(t=>{this.eventos=t.sort((o,r)=>new Date(r.fechaInicio).getTime()-new Date(o.fechaInicio).getTime())})}mon(t){return G(t).locale("es").format("L")+" "+G(new Date(t)).utc().format("LTS")}vistaPrevia(t){var o=this;return(0,v.Z)(function*(){const r=o.eventos.find(i=>i.id===t);r&&window.open(H.N.host+"evento/"+r.identificador,"_blank")})()}exportToExcel(t){const o=this.eventos.find(n=>n.id===t);let r=[];for(let n of null==o?void 0:o.boletos){var i,u,m,g,Z,x,y,E,T,C,P,p,A,U,V,M,N,F,J,S,w,R,Y,D;r.push({Folio:n.folio,Nombre:n.afiliado?null==n||null===(i=n.afiliado)||void 0===i?void 0:i.nombre:null!==(u=null==n||null===(m=n.participante)||void 0===m?void 0:m.nombre)&&void 0!==u?u:"",Cargo:n.afiliado?null==n||null===(g=n.afiliado)||void 0===g?void 0:g.cargo:null!==(Z=null==n||null===(x=n.participante)||void 0===x?void 0:x.cargo)&&void 0!==Z?Z:"",Empresa:n.afiliado?null==n||null===(y=n.afiliado)||void 0===y?void 0:y.empresa:null!==(E=null==n||null===(T=n.participante)||void 0===T?void 0:T.empresa)&&void 0!==E?E:"",Organizaci\u00f3n:n.afiliado?null==n||null===(C=n.afiliado)||void 0===C?void 0:C.organizacion:null!==(P=null==n||null===(p=n.participante)||void 0===p?void 0:p.organizacion)&&void 0!==P?P:"",Correo:n.afiliado?null==n||null===(A=n.afiliado)||void 0===A?void 0:A.email:null!==(U=null==n||null===(V=n.participante)||void 0===V?void 0:V.email)&&void 0!==U?U:"",Tel\u00e9fono:n.afiliado?null==n||null===(M=n.afiliado)||void 0===M?void 0:M.telefono:null!==(N=null==n||null===(F=n.participante)||void 0===F?void 0:F.telefono)&&void 0!==N?N:"","Tipo Asistencia":null!==(J=n.privilegio)&&void 0!==J?J:"N/A","Forma de Pago":n.idPago?"Tarjeta de cr\xe9dito":"Transferencia","Boleto Pagado":n.active?"Si":"No","Necesita Factura":n.quieroFactura?"Si":"No",RFC:n.afiliado?null==n||null===(S=n.afiliado)||void 0===S?void 0:S.rfc:null!==(w=null==n||null===(R=n.participante)||void 0===R?void 0:R.rfc)&&void 0!==w?w:"",CURP:null!==(Y=null==n||null===(D=n.participante)||void 0===D?void 0:D.curp)&&void 0!==Y?Y:""})}if(r){const n=f.P6.json_to_sheet(r),k=f.P6.book_new();f.P6.book_append_sheet(k,n,"Sheet1"),f.NC(k,(null==o?void 0:o.titulo.toUpperCase())+".xlsx")}}modalUser(t){var o=this;return(0,v.Z)(function*(){const r=o.eventos.find(i=>i.id===t);r&&(o.boletosRepo.setEventos(r.boletos),o.nav.navigateForward("dashboard/eventos/ver-usuarios",{queryParams:{id:t}}))})()}deleteEvento(t){var o=this;return(0,v.Z)(function*(){var r;o.alert.setData({animated:!0,header:"Est\xe1 a punto de eliminar este evento",message:"Si lo elimina se perder\xe1n todos los datos relacionados. \n \xbfDesea continuar?",buttons:[{text:"Cancelar"},{text:"Confirmar",handler:(r=(0,v.Z)(function*(){o.loading.setData({animated:!0,message:"Eliminando",spinner:"dots"}),yield o.loading.create(),yield o.loading.show(),o.genericService.delete("evento",t).subscribe(function(){var i=(0,v.Z)(function*(u){yield o.loading.hide(),o.toast.success("Evento Eliminado"),o.eventoRepo.deleteEvento(t)});return function(u){return i.apply(this,arguments)}}())}),function(){return r.apply(this,arguments)})}]}),yield o.alert.create(),yield o.alert.show()})()}cerrarEvento(t){var o=this;return(0,v.Z)(function*(){var r;o.alert.setData({animated:!0,header:"Cerrar Evento",message:"Est\xe1 a punto de cerrar el evento una vez lo haga no podr\xe1 reabrilo \xbfDesea Continuar?",buttons:[{text:"Cancelar"},{text:"Cerrar",handler:(r=(0,v.Z)(function*(){o.genericService.update("evento",t,{active:!0}).subscribe(i=>{o.eventos=o.eventos.map(u=>u.id===t?i:u)})}),function(){return r.apply(this,arguments)})}]}),yield o.alert.create(),yield o.alert.show()})()}}return(s=c).\u0275fac=function(t){return new(t||s)(e.Y36(I.hJ),e.Y36(j.b9),e.Y36(a.SH),e.Y36(q.c),e.Y36(K.b),e.Y36(L._W),e.Y36(Q.M))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-ver-evento"]],decls:26,vars:3,consts:[[3,"fullscreen"],[1,"mt-5","px-3"],[1,"container"],[1,"my-3"],[1,"d-flex","mt-5"],[1,"h4"],["placeholder","Buscar evento","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"debounce"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red","d-none","d-md-block"],["scope","col",1,"red"],[4,"ngFor","ngForOf"],["scope","row",1,"text-center","d-none","d-md-block"],[1,"img-fluid",3,"src"],["color","primary","slot","start"],["color","primary",3,"click"],["slot","icon-only","name","eye-outline"],["slot","icon-only","name","download-outline"],["slot","icon-only","name","people-outline"],["color","primary",3,"routerLink"],["slot","icon-only","name","create-outline"],["slot","icon-only","name","trash-outline"],["slot","icon-only","name","close-outline"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br")(2,"br"),e.TgZ(3,"div",1)(4,"div",2)(5,"h1",3)(6,"b"),e._uU(7,"Eventos"),e.qZA()(),e.TgZ(8,"div",4)(9,"h5",5)(10,"b"),e._uU(11,"Eventos Registrados"),e.qZA()(),e._UZ(12,"ion-searchbar",6),e.qZA(),e.TgZ(13,"table",7)(14,"thead",8)(15,"tr")(16,"th",9),e._uU(17,"Foto"),e.qZA(),e.TgZ(18,"th",10),e._uU(19,"Nombre"),e.qZA(),e.TgZ(20,"th",10),e._uU(21,"Dia y Hora"),e.qZA(),e.TgZ(22,"th",10),e._uU(23,"Opciones"),e.qZA()()(),e.TgZ(24,"tbody"),e.YNc(25,W,21,4,"tr",11),e.qZA()()()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(12),e.Q6J("debounce",250),e.xp6(13),e.Q6J("ngForOf",o.eventos))},dependencies:[z.sg,a.YG,a.Sm,a.W2,a.gu,a.Xz,a.VI,a.j9,a.YI,h.rH],styles:[".red[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}.img-fluid[_ngcontent-%COMP%]{max-width:200px}"]}),c})()}];let b=(()=>{var s;class c{}return(s=c).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[h.Bz.forChild(X),h.Bz]}),c})(),_=(()=>{var s;class c{}return(s=c).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[z.ez,B.u5,a.Pc,b]}),c})()}}]);