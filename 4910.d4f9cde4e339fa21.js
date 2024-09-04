"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4910],{4910:(b,J,o)=>{o.r(J),o.d(J,{ApoyosPageModule:()=>q});var H=o(6814),I=o(95),g=o(9843),L=o(9085),v=o(5861),c=o(6676),V=o(553),f=o(1486),i=o(6689),W=o(4433),X=o(7153),K=o(2425),Q=o(930),p=o(2051);c.locale("es");const w=[{path:"",component:(()=>{var s;class t{constructor(l,d,e,a,r,h){this.nav=l,this.alert=d,this.loading=e,this.toast=a,this.genericService=r,this.apoyos=h,this.uri=V.N.image+"apoyos-dn/",this.eventos=[]}ngOnInit(){this.apoyos.user$.subscribe(l=>{this.eventos=l,this.apoyos.setApoyos(l)})}mon(l){return c(l).locale("es").format("L")+" "+c(new Date(l)).utc().format("LTS")}vistaPrevia(l){var d=this;return(0,v.Z)(function*(){const e=d.eventos.find(a=>a.id===l);e&&window.open(V.N.host+"evento/"+e.identificador,"_blank")})()}exportToExcel(l){const d=this.eventos.find(n=>n.id===l);let e=[];for(let n of null==d?void 0:d.boletos){var a,r,h,m,y,P,A,C,M,x,S,E,F,N,T,z,Z,D,Y,j,B,R,U,O;e.push({Folio:n.folio,Nombre:n.afiliado?null==n||null===(a=n.afiliado)||void 0===a?void 0:a.nombre:null!==(r=null==n||null===(h=n.participante)||void 0===h?void 0:h.nombre)&&void 0!==r?r:"",Cargo:n.afiliado?null==n||null===(m=n.afiliado)||void 0===m?void 0:m.cargo:null!==(y=null==n||null===(P=n.participante)||void 0===P?void 0:P.cargo)&&void 0!==y?y:"",Empresa:n.afiliado?null==n||null===(A=n.afiliado)||void 0===A?void 0:A.empresa:null!==(C=null==n||null===(M=n.participante)||void 0===M?void 0:M.empresa)&&void 0!==C?C:"",Organizaci\u00f3n:n.afiliado?null==n||null===(x=n.afiliado)||void 0===x?void 0:x.organizacion:null!==(S=null==n||null===(E=n.participante)||void 0===E?void 0:E.organizacion)&&void 0!==S?S:"",Correo:n.afiliado?null==n||null===(F=n.afiliado)||void 0===F?void 0:F.email:null!==(N=null==n||null===(T=n.participante)||void 0===T?void 0:T.email)&&void 0!==N?N:"",Tel\u00e9fono:n.afiliado?null==n||null===(z=n.afiliado)||void 0===z?void 0:z.telefono:null!==(Z=null==n||null===(D=n.participante)||void 0===D?void 0:D.telefono)&&void 0!==Z?Z:"","Tipo Asistencia":null!==(Y=n.privilegio)&&void 0!==Y?Y:"N/A","Forma de Pago":n.idPago?"Tarjeta de cr\xe9dito":"Transferencia","Boleto Pagado":n.active?"Si":"No","Necesita Factura":n.quieroFactura?"Si":"No",RFC:n.afiliado?null==n||null===(j=n.afiliado)||void 0===j?void 0:j.rfc:null!==(B=null==n||null===(R=n.participante)||void 0===R?void 0:R.rfc)&&void 0!==B?B:"",CURP:null!==(U=null==n||null===(O=n.participante)||void 0===O?void 0:O.curp)&&void 0!==U?U:""})}if(e){const n=f.P6.json_to_sheet(e),G=f.P6.book_new();f.P6.book_append_sheet(G,n,"Sheet1"),f.NC(G,(null==d?void 0:d.titulo.toUpperCase())+".xlsx")}}deleteEvento(l){var d=this;return(0,v.Z)(function*(){var e;yield d.alert.setData({animated:!0,header:"Est\xe1 a punto de eliminar este evento",message:"Si lo elimina se perder\xe1n todos los datos relacionados. \n \xbfDesea continuar?",buttons:[{text:"Cancelar"},{text:"Confirmar",handler:(e=(0,v.Z)(function*(){d.loading.setData({animated:!0,message:"Eliminando",spinner:"dots"}),yield d.loading.create(),yield d.loading.show(),d.genericService.delete("desastres",l).subscribe(function(){var a=(0,v.Z)(function*(r){yield d.loading.hide(),d.toast.success("Apoyo Eliminado")});return function(r){return a.apply(this,arguments)}}())}),function(){return e.apply(this,arguments)})}]})})()}cerrarEvento(l){var d=this;return(0,v.Z)(function*(){var e;yield d.alert.setData({animated:!0,header:"Cerrar Apoyo",message:"Est\xe1 a punto de cerrar el apoyo una vez lo haga no podr\xe1 reabrilo \xbfDesea Continuar?",buttons:[{text:"Cancelar"},{text:"Cerrar",handler:(e=(0,v.Z)(function*(){d.genericService.update("desastres",l,{active:!1}).subscribe(a=>{d.eventos=d.eventos.map(r=>r.id===l?a:r),d.toast.success("Apoyo Cerrado")})}),function(){return e.apply(this,arguments)})}]})})()}}return(s=t).\u0275fac=function(l){return new(l||s)(i.Y36(g.SH),i.Y36(W.c),i.Y36(X.b),i.Y36(K._W),i.Y36(Q.M),i.Y36(p.d))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-apoyos"]],decls:1,vars:0,template:function(l,d){1&l&&i._UZ(0,"ion-router-outlet")},dependencies:[g.jP],styles:[".red[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}"]}),t})(),children:[{path:"crear-apoyos",loadChildren:()=>Promise.all([o.e(2264),o.e(8915),o.e(6528),o.e(3923)]).then(o.bind(o,3923)).then(s=>s.CrearApoyoPageModule)},{path:"editar-apoyos/:identificador",loadChildren:()=>Promise.all([o.e(2264),o.e(8915),o.e(6528),o.e(3923)]).then(o.bind(o,3923)).then(s=>s.CrearApoyoPageModule)},{path:"",loadChildren:()=>o.e(4149).then(o.bind(o,4149)).then(s=>s.VerApoyoPageModule)},{path:"ver-usuarios/:identificador",loadChildren:()=>o.e(1601).then(o.bind(o,1601)).then(s=>s.VerUsuariosPageModule)}]}];let k=(()=>{var s;class t{}return(s=t).\u0275fac=function(l){return new(l||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[L.Bz.forChild(w),L.Bz]}),t})(),q=(()=>{var s;class t{}return(s=t).\u0275fac=function(l){return new(l||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[H.ez,I.u5,g.Pc,k]}),t})()}}]);