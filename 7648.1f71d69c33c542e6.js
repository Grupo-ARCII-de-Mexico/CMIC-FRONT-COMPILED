"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7648],{7648:(Ai,X,a)=>{a.r(X),a.d(X,{VerLicitacionesPageModule:()=>Ti});var m=a(6814),h=a(95),u=a(9843),f=a(9085),g=a(5861),y=a(1486),$=a(6676),i=a(6689),ti=a(2338),oi=a(930),ci=a(4433),li=a(7153),ai=a(2425),ii=a(7602),si=a(3041);function di(t,l){if(1&t){const o=i.EpF();i.TgZ(0,"ion-button",16),i.NdJ("click",function(){i.CHM(o);const n=i.oxw();return i.KtG(n.click("in"))}),i.TgZ(1,"ion-label"),i._uU(2),i.qZA(),i.TgZ(3,"input",17),i.NdJ("change",function(n){i.CHM(o);const s=i.oxw();return i.KtG(s.onFileSelected(n))}),i.qZA()()}if(2&t){const o=i.oxw();i.Q6J("color",null!=o.file&&o.file.uri?"success":"primary"),i.xp6(2),i.Oqu(null!=o.file&&o.file.uri?"Archivo Cargado":"Subir Licitaciones")}}const ui=function(){return["/dashboard/licitaciones/crear-licitaciones"]};function ri(t,l){1&t&&(i.TgZ(0,"ion-button",18),i._uU(1," Crear Licitaci\xf3n "),i.qZA()),2&t&&i.Q6J("routerLink",i.DdM(1,ui))}function gi(t,l){1&t&&(i.TgZ(0,"th",12),i._uU(1,"Opciones"),i.qZA())}function fi(t,l){if(1&t){const o=i.EpF();i.TgZ(0,"td")(1,"ion-buttons",21)(2,"ion-button",22),i._UZ(3,"ion-icon",23),i.qZA(),i.TgZ(4,"ion-button",24),i.NdJ("click",function(){i.CHM(o);const n=i.oxw().$implicit,s=i.oxw(2);return i.KtG(s.deleteEvento(n.id))}),i._UZ(5,"ion-icon",25),i.qZA()()()}if(2&t){const o=i.oxw().$implicit;i.xp6(2),i.MGl("routerLink","editar-licitaciones/",o.id,"")}}function pi(t,l){if(1&t&&(i.TgZ(0,"tr")(1,"th",20),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td"),i._uU(6),i.qZA(),i.YNc(7,fi,6,1,"td",14),i.qZA()),2&t){const o=l.$implicit,c=i.oxw(2);i.xp6(2),i.hij(" ",o.codigoContrato," "),i.xp6(2),i.Oqu(o.noProcedimiento),i.xp6(2),i.Oqu(o.dependencia),i.xp6(1),i.Q6J("ngIf",c.visible)}}function mi(t,l){if(1&t&&(i.TgZ(0,"tbody"),i.YNc(1,pi,8,4,"tr",19),i.ALo(2,"licitacionSearch"),i.qZA()),2&t){const o=i.oxw();i.xp6(1),i.Q6J("ngForOf",i.xi3(2,1,o.licitaciones.slice(o.pagina*o.divisor,(o.pagina+1)*o.divisor),o.search))}}function hi(t,l){if(1&t){const o=i.EpF();i.TgZ(0,"td")(1,"ion-buttons",21)(2,"ion-button",22),i._UZ(3,"ion-icon",23),i.qZA(),i.TgZ(4,"ion-button",24),i.NdJ("click",function(){i.CHM(o);const n=i.oxw().$implicit,s=i.oxw(2);return i.KtG(s.deleteEvento(n.id))}),i._UZ(5,"ion-icon",25),i.qZA()()()}if(2&t){const o=i.oxw().$implicit;i.xp6(2),i.MGl("routerLink","editar-licitaciones/",o.id,"")}}function vi(t,l){if(1&t&&(i.TgZ(0,"tr")(1,"th",20),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td"),i._uU(6),i.qZA(),i.YNc(7,hi,6,1,"td",14),i.qZA()),2&t){const o=l.$implicit,c=i.oxw(2);i.xp6(2),i.hij(" ",o.codigoContrato," "),i.xp6(2),i.Oqu(o.noProcedimiento),i.xp6(2),i.Oqu(o.dependencia),i.xp6(1),i.Q6J("ngIf",c.visible)}}function xi(t,l){if(1&t&&(i.TgZ(0,"tbody"),i.YNc(1,vi,8,4,"tr",19),i.qZA()),2&t){const o=i.oxw();i.xp6(1),i.Q6J("ngForOf",o.licitacionesSelected)}}const Zi=[{path:"",component:(()=>{var t;class l{constructor(c,n,s,d,r){this.licitacionRepo=c,this.genericService=n,this.alert=s,this.loading=d,this.toast=r,this.visible=!0,this.licitaciones=[],this.licitacionesToCreate=[],this.licitacionesSelected=[],this.divisor=15,this.pagina=0}ngOnInit(){this.licitacionRepo.licitaciones$.subscribe(c=>{this.licitaciones=c,this.licitacionesSelected=c.slice(0,this.divisor)})}mon(c){return $(c).locale("es").format("L")+" "+$(new Date(c)).utc().format("LTS")}deleteEvento(c){var n=this;return(0,g.Z)(function*(){var s;yield n.alert.setData({animated:!0,header:"Est\xe1 a punto de eliminar esta licitaci\xf3n",message:"Si lo elimina se perder\xe1n todos los datos relacionados. \n \xbfDesea continuar?",buttons:[{text:"Cancelar"},{text:"Confirmar",handler:(s=(0,g.Z)(function*(){n.loading.setData({animated:!0,message:"Eliminando",spinner:"dots"}),yield n.loading.create(),yield n.loading.show(),n.genericService.delete("licitaciones",c).subscribe(function(){var d=(0,g.Z)(function*(r){yield n.loading.hide(),n.toast.success("Licitaci\xf3n Eliminada"),n.licitacionRepo.deleteLicitacion(c)});return function(r){return d.apply(this,arguments)}}())}),function(){return s.apply(this,arguments)})}]})})()}onFileSelected(c){var n=this;return(0,g.Z)(function*(){if(n.loading.setData({animated:!0,message:"Cargando licitaciones",spinner:"dots"}),yield n.loading.create(),yield n.loading.show(),n.file={documento:"file",uri:c.target.files[0]},n.file){const s=new FileReader;s.onload=function(){var d=(0,g.Z)(function*(r){const ei=y.ij(r.target.result,{type:"binary"});let p=y.P6.sheet_to_json(ei.Sheets[ei.SheetNames[0]],{header:1});p=p.filter(e=>e.some(W=>null!=W&&""!==W)),p.shift();for(let e of p){var x,Z,b,P,T,L,A,C,V,w,M,D,J,F,S,I,U,_,N,O,q,Y,E,Q,k,j,G,R,B,H,z,K;n.licitacionesToCreate.push({claveExpediente:null!==(x=e[0])&&void 0!==x?x:null,codigoContrato:null!==(Z=e[1])&&void 0!==Z?Z:null,noProcedimiento:null!==(b=e[2])&&void 0!==b?b:null,dependencia:null!==(P=e[3])&&void 0!==P?P:null,unidadCompradora:null!==(T=e[4])&&void 0!==T?T:null,descripcionObra:null!==(L=e[5])&&void 0!==L?L:null,tipoContratacion:null!==(A=e[6])&&void 0!==A?A:null,caracter:null!==(C=e[7])&&void 0!==C?C:null,modalidad:null!==(V=e[8])&&void 0!==V?V:null,procedenciaRecursos:null!==(w=e[9])&&void 0!==w?w:null,origenRecursos:null!==(M=e[10])&&void 0!==M?M:null,programasEspeciales:null!==(D=e[11])&&void 0!==D?D:null,fechaPublicacion:"-"!==e[12]?new Date(24*(e[12]-1)*60*60*1e3):void 0,fechaPresentacionPropuestaProgramada:"-"!==e[13]?new Date(24*(e[13]-1)*60*60*1e3):void 0,fechaPresentacionPropuesta:"-"!==e[14]?new Date(24*(e[14]-1)*60*60*1e3):void 0,fechaFalloProgramada:"-"!==e[15]?new Date(24*(e[15]-1)*60*60*1e3):void 0,fechaFallo:"-"!==e[16]?new Date(24*(e[16]-1)*60*60*1e3):void 0,estatusProcedimiento:null!==(J=e[17])&&void 0!==J?J:null,empresaGanadora:null!==(F=e[18])&&void 0!==F?F:null,importeAdjudicado:null!==(S=e[19])&&void 0!==S?S:null,fechaInicioContrato:"-"!==e[38]?new Date(24*(e[38]-1)*60*60*1e3):void 0,fechaFinContrato:"-"!==e[38]?new Date(24*(e[38]-1)*60*60*1e3):void 0,lugarVenta:null!==(I=e[22])&&void 0!==I?I:null,domicilioVenta:null!==(U=e[23])&&void 0!==U?U:null,fechaInicio1:"-"!==e[24]?new Date(24*(e[24]-1)*60*60*1e3):void 0,fechaFin1:"-"!==e[25]?new Date(24*(e[25]-1)*60*60*1e3):void 0,fechaInicio2:"-"!==e[26]?new Date(24*(e[26]-1)*60*60*1e3):void 0,fechaFin2:"-"!==e[27]?new Date(24*(e[27]-1)*60*60*1e3):void 0,fechaInicio3:"-"!==e[28]?new Date(24*(e[28]-1)*60*60*1e3):void 0,fechaFin3:"-"!==e[29]?new Date(24*(e[29]-1)*60*60*1e3):void 0,fechaInicio4:"-"!==e[30]?new Date(24*(e[30]-1)*60*60*1e3):void 0,fechaFin4:"-"!==e[31]?new Date(24*(e[31]-1)*60*60*1e3):void 0,fechaInicio5:"-"!==e[32]?new Date(24*(e[32]-1)*60*60*1e3):void 0,fechaFin5:"-"!==e[33]?new Date(24*(e[33]-1)*60*60*1e3):void 0,formaPago:null!==(_=e[34])&&void 0!==_?_:null,datosPago:null!==(N=e[35])&&void 0!==N?N:null,lugarJuntaAclaraciones:null!==(O=e[36])&&void 0!==O?O:null,direccionJuntaAclaracion:null!==(q=e[37])&&void 0!==q?q:null,fechaJuntaAclaraciones:"-"!==e[38]?new Date(24*(e[38]-1)*60*60*1e3):void 0,MontoFiniquitoContrato:null!==(Y=e[39])&&void 0!==Y?Y:null,plazoEjecucion:null!==(E=e[40])&&void 0!==E?E:null,municipio:null!==(Q=e[41])&&void 0!==Q?Q:null,noAfiliado:null!==(k=e[42])&&void 0!==k?k:null,ultimoAnoAfiliacion:null!==(j=e[43])&&void 0!==j?j:null,delegacion:null!==(G=e[44])&&void 0!==G?G:null,esAfiliado:"-"!==e[45],montoAfiliado:null!==(R=e[46])&&void 0!==R?R:null,montoNoAfiliado:null!==(B=e[47])&&void 0!==B?B:null,montoBajo:null!==(H=e[48])&&void 0!==H?H:null,montoAlto:null!==(z=e[49])&&void 0!==z?z:null,lugarGanadorApertura:null!==(K=e[50])&&void 0!==K?K:null,esExtranjera:"-"!==e[51]})}const ni=[];for(let e=0;e<n.licitacionesToCreate.length;e+=100)ni.push(n.licitacionesToCreate.slice(e,e+100));yield n.loading.hide(),yield n.alertMassiveUpload(ni)});return function(r){return d.apply(this,arguments)}}(),s.readAsBinaryString(n.file.uri)}})()}click(c){document.getElementById(c).click()}alertMassiveUpload(c){var n=this;return(0,g.Z)(function*(){var s;yield n.alert.setData({animated:!0,header:"Se van a subir "+n.licitacionesToCreate.length+" licitaciones",message:"Esto puede tomar un tiempo \xbfDesea Continuar?",buttons:[{text:"Cancelar"},{text:"Cargar Licitaciones",handler:(s=(0,g.Z)(function*(){n.loading.setData({animated:!0,message:"Subiendo Licitaciones espere...",spinner:"dots"}),yield n.loading.create(),yield n.loading.show();for(const d of c){const r=yield n.genericService.post("licitaciones/massive",d).toPromise(),v=[...n.licitaciones,...r||[]];n.licitacionRepo.setLicitacion(v)}n.toast.success("Licitaciones Guardadas"),yield n.loading.hide(),n.file=void 0}),function(){return s.apply(this,arguments)})}]})})()}getPagina(c){this.pagina=c,this.licitacionesSelected=this.licitaciones.slice(c*this.divisor,(c+1)*this.divisor)}}return(t=l).\u0275fac=function(c){return new(c||t)(i.Y36(ti.X),i.Y36(oi.M),i.Y36(ci.c),i.Y36(li.b),i.Y36(ai._W))},t.\u0275cmp=i.Xpm({type:t,selectors:[["ver-licitaciones"]],inputs:{visible:"visible"},decls:28,vars:10,consts:[[3,"fullscreen"],["color","dark",1,"py-2"],[1,"ms-2","ms-md-5","mb-0","titulo"],[1,"palito","ms-2","ms-md-5","mt-0","mb-3"],["slot","end","shape","round","class","mx-1 mt-2","expand","block",3,"color","click",4,"ngIf"],["slot","end","class","mx-1 mt-2","routerLinkActive","router-link-active","shape","round",3,"routerLink",4,"ngIf"],[1,"mt-1","px-3"],[1,"container"],[1,"d-flex","mt-5"],["placeholder","Buscar licitaci\xf3n","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"ngModel","debounce","ngModelChange"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red"],["scope","col","class","red",4,"ngIf"],[4,"ngIf"],[3,"total","divisor","pagina"],["slot","end","shape","round","expand","block",1,"mx-1","mt-2",3,"color","click"],["id","in","type","file","accept",".xls, .cvc, .xlsx",2,"display","none",3,"change"],["slot","end","routerLinkActive","router-link-active","shape","round",1,"mx-1","mt-2",3,"routerLink"],[4,"ngFor","ngForOf"],["scope","row",1,"text-center"],["color","primary","slot","start"],["color","primary",3,"routerLink"],["slot","icon-only","name","create-outline"],["color","primary",3,"click"],["slot","icon-only","name","trash-outline"]],template:function(c,n){1&c&&(i.TgZ(0,"ion-content",0),i._UZ(1,"br"),i.TgZ(2,"ion-toolbar",1),i._UZ(3,"br"),i.TgZ(4,"h1",2)(5,"b"),i._uU(6," Licitaciones"),i.qZA()(),i._UZ(7,"hr",3),i.YNc(8,di,4,2,"ion-button",4),i.YNc(9,ri,2,2,"ion-button",5),i.qZA(),i.TgZ(10,"div",6)(11,"div",7)(12,"div",8),i._UZ(13,"hr"),i.TgZ(14,"ion-searchbar",9),i.NdJ("ngModelChange",function(d){return n.search=d})("ngModelChange",function(){return n.licitacionesSelected=[]}),i.qZA()(),i.TgZ(15,"table",10)(16,"thead",11)(17,"tr")(18,"th",12),i._uU(19,"No. Contrato"),i.qZA(),i.TgZ(20,"th",12),i._uU(21,"No. Procedimiento"),i.qZA(),i.TgZ(22,"th",12),i._uU(23,"Dependencia"),i.qZA(),i.YNc(24,gi,2,0,"th",13),i.qZA()(),i.YNc(25,mi,3,4,"tbody",14),i.YNc(26,xi,2,1,"tbody",14),i.qZA(),i.TgZ(27,"paginador",15),i.NdJ("pagina",function(d){return n.getPagina(d)}),i.qZA()()()()),2&c&&(i.Q6J("fullscreen",!0),i.xp6(8),i.Q6J("ngIf",n.visible),i.xp6(1),i.Q6J("ngIf",n.visible),i.xp6(5),i.Q6J("ngModel",n.search)("debounce",250),i.xp6(10),i.Q6J("ngIf",n.visible),i.xp6(1),i.Q6J("ngIf",0===n.licitacionesSelected.length),i.xp6(1),i.Q6J("ngIf",n.licitacionesSelected.length>0),i.xp6(1),i.Q6J("total",n.licitaciones.length)("divisor",n.divisor))},dependencies:[m.sg,m.O5,h.JJ,h.On,u.YG,u.Sm,u.W2,u.gu,u.Q$,u.VI,u.sr,u.j9,u.YI,f.rH,f.Od,ii.a,si.M],styles:["ion-searchbar[_ngcontent-%COMP%]{width:250px;border-radius:15px!important;border-start-end-radius:10px}ion-img[_ngcontent-%COMP%]{width:150px}.red[_ngcontent-%COMP%]{background-color:red;color:#fff}"]}),l})()}];let bi=(()=>{var t;class l{}return(t=l).\u0275fac=function(c){return new(c||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[f.Bz.forChild(Zi),f.Bz]}),l})();var Pi=a(3386);let Ti=(()=>{var t;class l{}return(t=l).\u0275fac=function(c){return new(c||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[m.ez,h.u5,u.Pc,bi,ii.a,Pi.d]}),l})()}}]);