"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1934],{1934:(j,M,a)=>{a.r(M),a.d(M,{VerNegociosPageModule:()=>H});var E=a(6814),J=a(95),d=a(9843),f=a(9085),g=a(5861),S=a(9397),U=a(553),v=a(1486),e=a(6689),k=a(930),F=a(5368),Y=a(2425),w=a(4433),R=a(7153);function D(i,l){if(1&i){const c=e.EpF();e.TgZ(0,"tr")(1,"th",12),e._UZ(2,"ion-img",13),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"ion-buttons",14)(7,"ion-button",15),e.NdJ("click",function(){const n=e.CHM(c).$implicit,r=e.oxw();return e.KtG(r.alerta(n.identificador))}),e._UZ(8,"ion-icon",16),e.qZA(),e.TgZ(9,"ion-button",17),e.NdJ("click",function(){const n=e.CHM(c).$implicit,r=e.oxw();return e.KtG(r.vistaPrevia(n.id))}),e._UZ(10,"ion-icon",18),e.qZA(),e.TgZ(11,"ion-button",17),e.NdJ("click",function(){const n=e.CHM(c).$implicit,r=e.oxw();return e.KtG(r.exportToExcel(n.empresa,n.oportunidadNegocio))}),e._UZ(12,"ion-icon",19),e.qZA(),e.TgZ(13,"ion-button",20),e._UZ(14,"ion-icon",21),e.qZA(),e.TgZ(15,"ion-button",17),e.NdJ("click",function(){const n=e.CHM(c).$implicit,r=e.oxw();return e.KtG(r.delete(n.id))}),e._UZ(16,"ion-icon",22),e.qZA()()()()}if(2&i){const c=l.$implicit,o=e.oxw();e.xp6(2),e.Q6J("src",o.uri+c.logotipo),e.xp6(2),e.Oqu(null==c?null:c.empresa),e.xp6(9),e.s9C("routerLink",c.identificador)}}const G=[{path:"",component:(()=>{var i;class l{constructor(o,t,n,r,u){this.gService=o,this.negocioRepo=t,this.toast=n,this.alerts=r,this.loading=u,this.negocios=[],this.uri=U.N.image+"oportunidades-logotipos/"}ngOnInit(){this.gService.getAll("negocio").subscribe(o=>{this.negocioRepo.setNegocio(o)}),this.negocioRepo.negocio$.pipe((0,S.b)(o=>this.negocios=o)).subscribe()}vistaPrevia(o){var t=this;return(0,g.Z)(function*(){const n=t.negocios.find(r=>r.id===o);n&&window.open(U.N.host+"oportunidad-negocio/"+n.identificador,"_blank")})()}delete(o){var t=this;return(0,g.Z)(function*(){var n;yield t.alerts.setData({animated:!0,header:"Eliminar ON",message:"\xbfDesea Eliminar esta ON?",buttons:[{text:"Cancelar"},{text:"Eliminar",handler:(n=(0,g.Z)(function*(){t.gService.delete("negocio",o).subscribe(function(){var r=(0,g.Z)(function*(u){t.negocios=t.negocios.filter(m=>m.id!==o),t.toast.success("ON eliminada","Eliminado")});return function(u){return r.apply(this,arguments)}}())}),function(){return n.apply(this,arguments)})}]})})()}exportToExcel(o,t){let n=[];for(let s of t){var r,u,m,p,h,x,Z,y,N,C,P,b,T,A,V;n.push({Empresa:null!==(r=s.empresa)&&void 0!==r?r:"","No. Afiliado":null!==(u=s.afiliado)&&void 0!==u?u:"",Calle:null!==(m=s.calle)&&void 0!==m?m:"",Colonia:null!==(p=s.colonia)&&void 0!==p?p:"","Alcald\xeda / Municipio":null!==(h=s.municipio)&&void 0!==h?h:"",Estado:null!==(x=s.estado)&&void 0!==x?x:"","C\xf3digo Postal":null!==(Z=s.cp)&&void 0!==Z?Z:"",Denominaci\u00f3n:null!==(y=s.denominacion)&&void 0!==y?y:"","Sitio Web":null!==(N=s.web)&&void 0!==N?N:"","Nombre de Contacto":null!==(C=s.contacto.nombre)&&void 0!==C?C:"","Apellido Paterno Contacto":null!==(P=s.contacto.paterno)&&void 0!==P?P:"","Apellido Materno de Contacto":null!==(b=s.contacto.materno)&&void 0!==b?b:"","Telefono1 de Contacto":null!==(T=s.contacto.telefono)&&void 0!==T?T:"","Telefono 2 de Contacto":null!==(A=s.contacto.telefonoOficina)&&void 0!==A?A:"","Correo de Contacto":null!==(V=s.contacto.email)&&void 0!==V?V:""})}if(n){const s=v.P6.json_to_sheet(n),O=v.P6.book_new();v.P6.book_append_sheet(O,s,"Sheet1"),v.NC(O,o+".xlsx")}}alerta(o){var t=this;return(0,g.Z)(function*(){var n;yield t.loading.setData({animated:!0,message:"Enviando..."}),yield t.alerts.setData({animated:!0,header:"Enviar Acceso a la Empresa",message:"Agregue el correo a quien desea enviar el acceso (Si vuelve a mandar este correo el acceso anterior ser\xe1 eliminado)",backdropDismiss:!1,inputs:[{type:"email",name:"password",placeholder:"Ingrese el correo"}],buttons:[{text:"Enviar contrase\xf1a",handler:(n=(0,g.Z)(function*(r){return yield t.loading.create(),yield t.loading.show(),!!(yield t.gService.post("negocio/sendPassword/"+o,{email:r.password}).toPromise().catch(function(){var m=(0,g.Z)(function*(p){yield t.loading.hide()});return function(p){return m.apply(this,arguments)}}()))}),function(u){return n.apply(this,arguments)})}]})})()}}return(i=l).\u0275fac=function(o){return new(o||i)(e.Y36(k.M),e.Y36(F.v),e.Y36(Y._W),e.Y36(w.c),e.Y36(R.b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-ver-negocios"]],decls:24,vars:3,consts:[[3,"fullscreen"],[1,"mt-5","px-3"],[1,"container"],[1,"my-3"],[1,"d-flex","mt-5"],[1,"h4"],["placeholder","Buscar Oportunidad de Negocio","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"debounce"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red","d-none","d-md-block"],["scope","col",1,"red"],[4,"ngFor","ngForOf"],["scope","row",1,"text-center","d-none","d-md-block"],[1,"img-fluid",3,"src"],["color","primary","slot","start"],["color","primary",1,"",3,"click"],["slot","icon-only","name","send-outline"],["color","primary",3,"click"],["slot","icon-only","name","eye-outline"],["slot","icon-only","name","download-outline"],["color","primary",3,"routerLink"],["slot","icon-only","name","people-outline"],["slot","icon-only","name","trash-outline"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br")(2,"br"),e.TgZ(3,"div",1)(4,"div",2)(5,"h1",3)(6,"b"),e._uU(7,"Oportunidades de Negocio"),e.qZA()(),e.TgZ(8,"div",4)(9,"h5",5)(10,"b"),e._uU(11,"Eventos Registrados"),e.qZA()(),e._UZ(12,"ion-searchbar",6),e.qZA(),e.TgZ(13,"table",7)(14,"thead",8)(15,"tr")(16,"th",9),e._uU(17,"Foto"),e.qZA(),e.TgZ(18,"th",10),e._uU(19,"Empresa"),e.qZA(),e.TgZ(20,"th",10),e._uU(21,"Opciones"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,D,17,3,"tr",11),e.qZA()()()()()),2&o&&(e.Q6J("fullscreen",!0),e.xp6(12),e.Q6J("debounce",250),e.xp6(11),e.Q6J("ngForOf",t.negocios))},dependencies:[E.sg,d.YG,d.Sm,d.W2,d.gu,d.Xz,d.VI,d.j9,d.YI,f.rH],styles:[".img-fluid[_ngcontent-%COMP%]{max-width:200px}.red[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}"]}),l})()}];let B=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.Bz.forChild(G),f.Bz]}),l})(),H=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[E.ez,J.u5,d.Pc,B]}),l})()}}]);