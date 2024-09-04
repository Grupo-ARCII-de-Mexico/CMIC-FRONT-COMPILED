"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4910],{4910:(q,L,e)=>{e.r(L),e.d(L,{ApoyosPageModule:()=>k});var I=e(6814),V=e(95),h=e(9843),O=e(9085),t=e(5861),g=e(6676),G=e(553),c=e(1486),i=e(6689),W=e(4433),X=e(7153),K=e(2425),Q=e(930);g.locale("es");const p=[{path:"",component:(()=>{var s;class v{constructor(d,o,a,l,r){this.nav=d,this.alert=o,this.loading=a,this.toast=l,this.genericService=r,this.uri=G.N.image+"apoyos-dn/",this.eventos=[]}ngOnInit(){this.genericService.getAll("desastres").subscribe(d=>{this.eventos=d})}mon(d){return g(d).locale("es").format("L")+" "+g(new Date(d)).utc().format("LTS")}vistaPrevia(d){var o=this;return(0,t.Z)(function*(){const a=o.eventos.find(l=>l.id===d);a&&window.open(G.N.host+"evento/"+a.identificador,"_blank")})()}exportToExcel(d){const o=this.eventos.find(n=>n.id===d);let a=[];for(let n of null==o?void 0:o.boletos){var l,r,f,m,y,P,A,C,x,S,E,M,F,N,T,z,Z,D,j,B,R,Y,U,J;a.push({Folio:n.folio,Nombre:n.afiliado?null==n||null===(l=n.afiliado)||void 0===l?void 0:l.nombre:null!==(r=null==n||null===(f=n.participante)||void 0===f?void 0:f.nombre)&&void 0!==r?r:"",Cargo:n.afiliado?null==n||null===(m=n.afiliado)||void 0===m?void 0:m.cargo:null!==(y=null==n||null===(P=n.participante)||void 0===P?void 0:P.cargo)&&void 0!==y?y:"",Empresa:n.afiliado?null==n||null===(A=n.afiliado)||void 0===A?void 0:A.empresa:null!==(C=null==n||null===(x=n.participante)||void 0===x?void 0:x.empresa)&&void 0!==C?C:"",Organizaci\u00f3n:n.afiliado?null==n||null===(S=n.afiliado)||void 0===S?void 0:S.organizacion:null!==(E=null==n||null===(M=n.participante)||void 0===M?void 0:M.organizacion)&&void 0!==E?E:"",Correo:n.afiliado?null==n||null===(F=n.afiliado)||void 0===F?void 0:F.email:null!==(N=null==n||null===(T=n.participante)||void 0===T?void 0:T.email)&&void 0!==N?N:"",Tel\u00e9fono:n.afiliado?null==n||null===(z=n.afiliado)||void 0===z?void 0:z.telefono:null!==(Z=null==n||null===(D=n.participante)||void 0===D?void 0:D.telefono)&&void 0!==Z?Z:"","Tipo Asistencia":null!==(j=n.privilegio)&&void 0!==j?j:"N/A","Forma de Pago":n.idPago?"Tarjeta de cr\xe9dito":"Transferencia","Boleto Pagado":n.active?"Si":"No","Necesita Factura":n.quieroFactura?"Si":"No",RFC:n.afiliado?null==n||null===(B=n.afiliado)||void 0===B?void 0:B.rfc:null!==(R=null==n||null===(Y=n.participante)||void 0===Y?void 0:Y.rfc)&&void 0!==R?R:"",CURP:null!==(U=null==n||null===(J=n.participante)||void 0===J?void 0:J.curp)&&void 0!==U?U:""})}if(a){const n=c.P6.json_to_sheet(a),H=c.P6.book_new();c.P6.book_append_sheet(H,n,"Sheet1"),c.NC(H,(null==o?void 0:o.titulo.toUpperCase())+".xlsx")}}deleteEvento(d){var o=this;return(0,t.Z)(function*(){var a;o.alert.setData({animated:!0,header:"Est\xe1 a punto de eliminar este evento",message:"Si lo elimina se perder\xe1n todos los datos relacionados. \n \xbfDesea continuar?",buttons:[{text:"Cancelar"},{text:"Confirmar",handler:(a=(0,t.Z)(function*(){o.loading.setData({animated:!0,message:"Eliminando",spinner:"dots"}),yield o.loading.create(),yield o.loading.show(),o.genericService.delete("desastre",d).subscribe(function(){var l=(0,t.Z)(function*(r){yield o.loading.hide(),o.toast.success("Evento Eliminado")});return function(r){return l.apply(this,arguments)}}())}),function(){return a.apply(this,arguments)})}]}),yield o.alert.create(),yield o.alert.show()})()}cerrarEvento(d){var o=this;return(0,t.Z)(function*(){var a;o.alert.setData({animated:!0,header:"Cerrar Evento",message:"Est\xe1 a punto de cerrar el evento una vez lo haga no podr\xe1 reabrilo \xbfDesea Continuar?",buttons:[{text:"Cancelar"},{text:"Cerrar",handler:(a=(0,t.Z)(function*(){o.genericService.update("desastre",d,{active:!1}).subscribe(l=>{o.eventos=o.eventos.map(r=>r.id===d?l:r)})}),function(){return a.apply(this,arguments)})}]}),yield o.alert.create(),yield o.alert.show()})()}}return(s=v).\u0275fac=function(d){return new(d||s)(i.Y36(h.SH),i.Y36(W.c),i.Y36(X.b),i.Y36(K._W),i.Y36(Q.M))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-apoyos"]],decls:1,vars:0,template:function(d,o){1&d&&i._UZ(0,"ion-router-outlet")},dependencies:[h.jP]}),v})(),children:[{path:"crear-apoyos",loadChildren:()=>Promise.all([e.e(2264),e.e(8915),e.e(3923)]).then(e.bind(e,3923)).then(s=>s.CrearApoyoPageModule)},{path:"",loadChildren:()=>e.e(4149).then(e.bind(e,4149)).then(s=>s.VerApoyoPageModule)}]}];let w=(()=>{var s;class v{}return(s=v).\u0275fac=function(d){return new(d||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[O.Bz.forChild(p),O.Bz]}),v})(),k=(()=>{var s;class v{}return(s=v).\u0275fac=function(d){return new(d||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[I.ez,V.u5,h.Pc,w]}),v})()}}]);