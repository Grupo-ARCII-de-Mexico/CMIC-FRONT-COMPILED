"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1934],{1934:(j,M,l)=>{l.r(M),l.d(M,{VerNegociosPageModule:()=>H});var U=l(6814),k=l(95),c=l(9843),f=l(9085),g=l(5861),J=l(9397),E=l(553),v=l(1486),e=l(6689),S=l(930),F=l(5368),Y=l(2425),w=l(4433),G=l(7153);function D(i,d){if(1&i){const s=e.EpF();e.TgZ(0,"tr")(1,"th",13),e._UZ(2,"ion-img",14),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"ion-buttons",15)(7,"ion-button",16),e.NdJ("click",function(){const n=e.CHM(s).$implicit,r=e.oxw();return e.KtG(r.alerta(n.identificador))}),e._UZ(8,"ion-icon",17),e.qZA(),e.TgZ(9,"ion-button",18),e.NdJ("click",function(){const n=e.CHM(s).$implicit,r=e.oxw();return e.KtG(r.vistaPrevia(n.id))}),e._UZ(10,"ion-icon",19),e.qZA(),e.TgZ(11,"ion-button",18),e.NdJ("click",function(){const n=e.CHM(s).$implicit,r=e.oxw();return e.KtG(r.exportToExcel(n.empresa,n.oportunidadNegocio))}),e._UZ(12,"ion-icon",20),e.qZA(),e.TgZ(13,"ion-button",21),e._UZ(14,"ion-icon",22),e.qZA(),e.TgZ(15,"ion-button",21),e._UZ(16,"ion-icon",23),e.qZA(),e.TgZ(17,"ion-button",18),e.NdJ("click",function(){const n=e.CHM(s).$implicit,r=e.oxw();return e.KtG(r.delete(n.id))}),e._UZ(18,"ion-icon",24),e.qZA()()()()}if(2&i){const s=d.$implicit,o=e.oxw();e.xp6(2),e.Q6J("src",o.uri+s.logotipo),e.xp6(2),e.Oqu(null==s?null:s.empresa),e.xp6(9),e.s9C("routerLink",s.identificador),e.xp6(2),e.MGl("routerLink","editar-oportunidad/",s.id,"")}}const R=[{path:"",component:(()=>{var i;class d{constructor(o,t,n,r,u){this.gService=o,this.negocioRepo=t,this.toast=n,this.alerts=r,this.loading=u,this.negocios=[],this.uri=E.N.image+"oportunidades-logotipos/"}ngOnInit(){this.gService.getAll("negocio").subscribe(o=>{this.negocioRepo.setNegocio(o)}),this.negocioRepo.negocio$.pipe((0,J.b)(o=>this.negocios=o)).subscribe()}vistaPrevia(o){var t=this;return(0,g.Z)(function*(){const n=t.negocios.find(r=>r.id===o);n&&window.open(E.N.host+"oportunidad-negocio/"+n.identificador,"_blank")})()}delete(o){var t=this;return(0,g.Z)(function*(){var n;yield t.alerts.setData({animated:!0,header:"Eliminar ON",message:"\xbfDesea Eliminar esta ON?",buttons:[{text:"Cancelar"},{text:"Eliminar",handler:(n=(0,g.Z)(function*(){t.gService.delete("negocio",o).subscribe(function(){var r=(0,g.Z)(function*(u){t.negocios=t.negocios.filter(m=>m.id!==o),t.toast.success("ON eliminada","Eliminado")});return function(u){return r.apply(this,arguments)}}())}),function(){return n.apply(this,arguments)})}]})})()}exportToExcel(o,t){let n=[];for(let a of t){var r,u,m,p,h,Z,x,y,N,C,P,b,T,A,V;n.push({Empresa:null!==(r=a.empresa)&&void 0!==r?r:"","No. Afiliado":null!==(u=a.afiliado)&&void 0!==u?u:"",Calle:null!==(m=a.calle)&&void 0!==m?m:"",Colonia:null!==(p=a.colonia)&&void 0!==p?p:"","Alcald\xeda / Municipio":null!==(h=a.municipio)&&void 0!==h?h:"",Estado:null!==(Z=a.estado)&&void 0!==Z?Z:"","C\xf3digo Postal":null!==(x=a.cp)&&void 0!==x?x:"",Denominaci\u00f3n:null!==(y=a.denominacion)&&void 0!==y?y:"","Sitio Web":null!==(N=a.web)&&void 0!==N?N:"","Nombre de Contacto":null!==(C=a.contacto.nombre)&&void 0!==C?C:"","Apellido Paterno Contacto":null!==(P=a.contacto.paterno)&&void 0!==P?P:"","Apellido Materno de Contacto":null!==(b=a.contacto.materno)&&void 0!==b?b:"","Telefono1 de Contacto":null!==(T=a.contacto.telefono)&&void 0!==T?T:"","Telefono 2 de Contacto":null!==(A=a.contacto.telefonoOficina)&&void 0!==A?A:"","Correo de Contacto":null!==(V=a.contacto.email)&&void 0!==V?V:""})}if(n){const a=v.P6.json_to_sheet(n),O=v.P6.book_new();v.P6.book_append_sheet(O,a,"Sheet1"),v.NC(O,o+".xlsx")}}alerta(o){var t=this;return(0,g.Z)(function*(){var n;yield t.loading.setData({animated:!0,message:"Enviando..."}),yield t.alerts.setData({animated:!0,header:"Enviar Acceso a la Empresa",message:"Agregue el correo a quien desea enviar el acceso (Si vuelve a mandar este correo el acceso anterior ser\xe1 eliminado)",backdropDismiss:!1,inputs:[{type:"email",name:"password",placeholder:"Ingrese el correo"}],buttons:[{text:"Enviar contrase\xf1a",handler:(n=(0,g.Z)(function*(r){return yield t.loading.create(),yield t.loading.show(),!!(yield t.gService.post("negocio/sendPassword/"+o,{email:r.password}).toPromise().catch(function(){var m=(0,g.Z)(function*(p){yield t.loading.hide()});return function(p){return m.apply(this,arguments)}}()))}),function(u){return n.apply(this,arguments)})}]})})()}}return(i=d).\u0275fac=function(o){return new(o||i)(e.Y36(S.M),e.Y36(F.v),e.Y36(Y._W),e.Y36(w.c),e.Y36(G.b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-ver-negocios"]],decls:23,vars:3,consts:[[3,"fullscreen"],["color","dark",1,"py-2"],[1,"ms-2","ms-md-5","mb-0","titulo"],[1,"palito","ms-2","ms-md-5","mt-0","mb-3"],[1,"px-3"],[1,"container"],[1,"d-flex","mt-1"],["placeholder","Buscar Oportunidad de Negocio","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"debounce"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red","d-none","d-md-block"],["scope","col",1,"red"],[4,"ngFor","ngForOf"],["scope","row",1,"text-center","d-none","d-md-block"],[1,"img-fluid",3,"src"],["color","primary","slot","start"],["color","primary",1,"",3,"click"],["slot","icon-only","name","send-outline"],["color","primary",3,"click"],["slot","icon-only","name","eye-outline"],["slot","icon-only","name","download-outline"],["color","primary",3,"routerLink"],["slot","icon-only","name","people-outline"],["slot","icon-only","name","create-outline"],["slot","icon-only","name","trash-outline"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br"),e.TgZ(2,"ion-toolbar",1),e._UZ(3,"br"),e.TgZ(4,"h1",2)(5,"b"),e._uU(6," Oportunidades de Negocio"),e.qZA()(),e._UZ(7,"hr",3),e.qZA(),e.TgZ(8,"div",4)(9,"div",5)(10,"div",6),e._UZ(11,"ion-searchbar",7),e.qZA(),e.TgZ(12,"table",8)(13,"thead",9)(14,"tr")(15,"th",10),e._uU(16,"Foto"),e.qZA(),e.TgZ(17,"th",11),e._uU(18,"Empresa"),e.qZA(),e.TgZ(19,"th",11),e._uU(20,"Opciones"),e.qZA()()(),e.TgZ(21,"tbody"),e.YNc(22,D,19,4,"tr",12),e.qZA()()()()()),2&o&&(e.Q6J("fullscreen",!0),e.xp6(11),e.Q6J("debounce",250),e.xp6(11),e.Q6J("ngForOf",t.negocios))},dependencies:[U.sg,c.YG,c.Sm,c.W2,c.gu,c.Xz,c.VI,c.sr,c.j9,c.YI,f.rH],styles:[".img-fluid[_ngcontent-%COMP%]{max-width:200px}.red[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}"]}),d})()}];let B=(()=>{var i;class d{}return(i=d).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.Bz.forChild(R),f.Bz]}),d})(),H=(()=>{var i;class d{}return(i=d).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[U.ez,k.u5,c.Pc,B]}),d})()}}]);