"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1835],{1835:(I,f,d)=>{d.r(f),d.d(f,{CrearEventoPageModule:()=>ie});var _=d(6814),u=d(95),l=d(9843),Z=d(9085),p=d(5861),x=d(8915),b=d(8013),S=d(4028),q=d(7038),w=d(3597),G=d(7398),Q=d(9397),e=d(6689),M=d(2264),R=d(2425),L=d(930),Y=d(4433),k=d(7153);function D(r,c){if(1&r&&e._UZ(0,"ion-img",35),2&r){const n=e.oxw(2);e.Q6J("src",n.img)}}function O(r,c){1&r&&(e.TgZ(0,"ion-item")(1,"ion-input",36)(2,"div",11),e._uU(3,"Cupo "),e.TgZ(4,"ion-text",7),e._uU(5,"*"),e.qZA()()()())}function H(r,c){if(1&r&&(e.TgZ(0,"ion-item")(1,"ion-select",37)(2,"ion-select-option",9),e._uU(3,"Transferencia"),e.qZA(),e.TgZ(4,"ion-select-option",9),e._uU(5,"Tarjetas (Stripe) "),e.qZA()()()),2&r){const n=e.oxw(2);e.xp6(2),e.Q6J("value",n.tipoPago.TRANSFERENCIA),e.xp6(2),e.Q6J("value",n.tipoPago.STRIPE)}}function z(r,c){if(1&r){const n=e.EpF();e.TgZ(0,"div",38)(1,"ion-select",39),e.NdJ("ionChange",function(o){const s=e.CHM(n).index,a=e.oxw(3);return e.KtG(a.setTipo(o,s,"publico"))}),e.TgZ(2,"ion-select-option",9),e._uU(3,"Afiliado"),e.qZA(),e.TgZ(4,"ion-select-option",9),e._uU(5,"P\xfablico General"),e.qZA(),e.TgZ(6,"ion-select-option",9),e._uU(7,"Estudiante"),e.qZA()(),e.TgZ(8,"ion-input",40),e.NdJ("ionChange",function(o){const s=e.CHM(n).index,a=e.oxw(3);return e.KtG(a.setTipo(o,s,"nombre"))}),e.qZA(),e.TgZ(9,"ion-input",41),e.NdJ("ionChange",function(o){const s=e.CHM(n).index,a=e.oxw(3);return e.KtG(a.setTipo(o,s,"costo"))}),e.qZA(),e.TgZ(10,"ion-button",42),e.NdJ("click",function(){const i=e.CHM(n).index,s=e.oxw(3);return e.KtG(s.quitar(i))}),e._UZ(11,"ion-icon",43),e.qZA()()}if(2&r){const n=c.$implicit,t=e.oxw(3);e.xp6(1),e.Q6J("value",n.publico),e.xp6(1),e.Q6J("value",t.tipoPublico.AFILIADOS),e.xp6(2),e.Q6J("value",t.tipoPublico.PUBLICO_GENERAL),e.xp6(2),e.Q6J("value",t.tipoPublico.ESTUDIANTES),e.xp6(2),e.Q6J("value",n.nombre),e.xp6(1),e.Q6J("value",n.costo)}}function K(r,c){if(1&r){const n=e.EpF();e.TgZ(0,"div",3)(1,"ion-item")(2,"ion-label"),e._uU(3,"Costos"),e.qZA(),e.TgZ(4,"ion-button",24),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2);return e.KtG(o.agregar())}),e._uU(5," Agregar Costos "),e.qZA()(),e.YNc(6,z,12,6,"div",25),e.qZA()}if(2&r){const n=e.oxw(2);e.xp6(6),e.Q6J("ngForOf",n.costos)}}function j(r,c){if(1&r){const n=e.EpF();e.TgZ(0,"div",38)(1,"ion-input",44),e.NdJ("ionChange",function(o){const s=e.CHM(n).index,a=e.oxw(2);return e.KtG(a.setTipoAgenda(o,s,"nombre"))}),e.qZA(),e.TgZ(2,"ion-input",45),e.NdJ("ionChange",function(o){const s=e.CHM(n).index,a=e.oxw(2);return e.KtG(a.setTipoAgenda(o,s,"horas"))}),e.qZA(),e.TgZ(3,"ion-button",42),e.NdJ("click",function(){const i=e.CHM(n).index,s=e.oxw(2);return e.KtG(s.quitarAgenda(i))}),e._UZ(4,"ion-icon",43),e.qZA()()}if(2&r){const n=c.$implicit;e.xp6(1),e.Q6J("value",n.nombre),e.xp6(1),e.Q6J("value",n.horas)}}function V(r,c){if(1&r){const n=e.EpF();e.TgZ(0,"div",38)(1,"ion-input",46),e.NdJ("ionChange",function(o){const s=e.CHM(n).index,a=e.oxw(2);return e.KtG(a.setTipoPonente(o,s,"nombre"))}),e.qZA(),e.TgZ(2,"ion-input",47),e.NdJ("ionChange",function(o){const s=e.CHM(n).index,a=e.oxw(2);return e.KtG(a.setTipoPonente(o,s,"cargo"))}),e.qZA(),e.TgZ(3,"ion-button",48),e.NdJ("click",function(){const i=e.CHM(n).index,s=e.oxw(2);return e.KtG(s.subirFotoPonente(i))}),e._uU(4),e.qZA(),e.TgZ(5,"ion-button",42),e.NdJ("click",function(){const i=e.CHM(n).index,s=e.oxw(2);return e.KtG(s.quitarPonente(i))}),e._UZ(6,"ion-icon",43),e.qZA()()}if(2&r){const n=c.$implicit,t=c.index,o=e.oxw(2);e.xp6(1),e.Q6J("value",n.nombre),e.xp6(1),e.Q6J("value",n.cargo),e.xp6(2),e.hij(" ",o.ponentes[t].foto?"Foto Cargada":"Subir Fotografia"," ")}}function B(r,c){1&r&&(e.TgZ(0,"ion-item")(1,"ion-input",49)(2,"div",11),e._uU(3,"Escriba la direcci\xf3n: "),e.qZA()()())}function W(r,c){if(1&r){const n=e.EpF();e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2,"Agregar Mapa "),e.TgZ(3,"ion-text",7),e._uU(4,"*"),e.qZA()(),e.TgZ(5,"ion-button",50),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2);return e.KtG(o.verMapa())}),e._uU(6," Abrir Mapa "),e.qZA()()}}function X(r,c){if(1&r){const n=e.EpF();e.TgZ(0,"div",51)(1,"div",52)(2,"ion-label",53),e._uU(3,"Generar Liga Zoom Autom\xe1ticamente "),e.TgZ(4,"ion-text",7),e._uU(5,"*"),e.qZA()(),e.TgZ(6,"ion-button",54),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2);return e.KtG(o.generateZoom())}),e._uU(7," Generar Liga de Zoom "),e.qZA()(),e.TgZ(8,"div",52)(9,"ion-label",53),e._uU(10,"Agregar Liga Zoom "),e.TgZ(11,"ion-text",7),e._uU(12,"*"),e.qZA()(),e.TgZ(13,"div",51),e._UZ(14,"ion-input",55)(15,"ion-input",56),e.qZA()()()}if(2&r){const n=e.oxw(2);e.xp6(6),e.Q6J("disabled",!n.eventForm.controls.titulo.value),e.xp6(8),e.Q6J("readonly",n.disabled),e.xp6(1),e.Q6J("readonly",n.disabled)}}function $(r,c){if(1&r&&(e.TgZ(0,"ion-button",57),e._uU(1," Crear Evento "),e.qZA()),2&r){const n=e.oxw(2);e.Q6J("disabled",!n.img||n.eventForm.invalid)}}function ee(r,c){1&r&&(e.TgZ(0,"ion-button",58),e._uU(1," Actualizar Evento "),e.qZA())}function te(r,c){if(1&r){const n=e.EpF();e.TgZ(0,"div",2)(1,"form",5),e.NdJ("ngSubmit",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.edit?o.editar():o.save())}),e.TgZ(2,"div",6)(3,"h4"),e._uU(4,"Tipo Evento "),e.TgZ(5,"ion-text",7),e._uU(6,"*"),e.qZA()()(),e.TgZ(7,"ion-segment",8)(8,"ion-segment-button",9)(9,"ion-label"),e._uU(10,"Presencial"),e.qZA()(),e.TgZ(11,"ion-segment-button",9)(12,"ion-label"),e._uU(13,"Hibrido"),e.qZA()(),e.TgZ(14,"ion-segment-button",9)(15,"ion-label"),e._uU(16,"Virtual"),e.qZA()()(),e.TgZ(17,"ion-item")(18,"ion-input",10)(19,"div",11),e._uU(20,"Titulo "),e.TgZ(21,"ion-text",7),e._uU(22,"*"),e.qZA()()()(),e.TgZ(23,"div",12)(24,"div",13)(25,"ion-label",14),e._uU(26,"Fecha y Hora del Evento "),e.TgZ(27,"ion-text",7),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"ion-datetime",15)(30,"span",16),e._uU(31,"Tiempo"),e.qZA()()(),e.TgZ(32,"div",13)(33,"ion-label",14),e._uU(34,"Hora de Fin"),e.TgZ(35,"ion-text",7),e._uU(36,"*"),e.qZA()(),e._UZ(37,"ion-datetime",17),e.qZA()(),e.TgZ(38,"ion-item",18),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.upload())}),e.YNc(39,D,1,1,"ion-img",19),e._UZ(40,"br"),e.TgZ(41,"ion-label"),e._uU(42,"Subir Imagen"),e.qZA()(),e.TgZ(43,"ion-item")(44,"ion-text"),e._uU(45,"Evento Gratuito"),e.qZA(),e._UZ(46,"ion-toggle",20),e.qZA(),e.TgZ(47,"ion-item")(48,"ion-text"),e._uU(49,"Cupo M\xe1ximo"),e.qZA(),e._UZ(50,"ion-toggle",21),e.qZA(),e.YNc(51,O,6,0,"ion-item",22),e.YNc(52,H,6,2,"ion-item",22),e.YNc(53,K,7,1,"div",23),e.TgZ(54,"div",3)(55,"ion-item")(56,"ion-label"),e._uU(57,"Agenda"),e.qZA(),e.TgZ(58,"ion-button",24),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.agregarAgenda())}),e._uU(59," Agregar Agenda "),e.qZA()(),e.YNc(60,j,5,2,"div",25),e.qZA(),e.TgZ(61,"div",3)(62,"ion-item")(63,"ion-label"),e._uU(64,"Ponentes"),e.qZA(),e.TgZ(65,"ion-button",24),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.agregarPonente())}),e._uU(66," Agregar Ponente "),e.qZA()(),e.YNc(67,V,7,3,"div",25),e.qZA(),e.YNc(68,B,4,0,"ion-item",22),e.YNc(69,W,7,0,"ion-item",22),e._UZ(70,"br"),e.YNc(71,X,16,3,"div",26),e._UZ(72,"br"),e.TgZ(73,"ion-label",27),e._uU(74,"Detalles del evento "),e.TgZ(75,"ion-text",7),e._uU(76,"*"),e.qZA()(),e._UZ(77,"br"),e.TgZ(78,"div",28),e._UZ(79,"ngx-editor-menu",29)(80,"ngx-editor",30),e.qZA(),e.TgZ(81,"div",31),e.YNc(82,$,2,1,"ion-button",32),e.YNc(83,ee,2,0,"ion-button",33),e.TgZ(84,"ion-button",34),e._uU(85," Vista Previa "),e.qZA()()()()}if(2&r){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.eventForm),e.xp6(7),e.Q6J("value",0),e.xp6(3),e.Q6J("value",1),e.xp6(3),e.Q6J("value",2),e.xp6(25),e.Q6J("ngIf",n.img),e.xp6(12),e.Q6J("ngIf",n.eventForm.controls.tieneCupoMaximo.value),e.xp6(1),e.Q6J("ngIf",!n.eventForm.controls.esGratis.value),e.xp6(1),e.Q6J("ngIf",!n.eventForm.controls.esGratis.value),e.xp6(7),e.Q6J("ngForOf",n.agenda),e.xp6(7),e.Q6J("ngForOf",n.ponentes),e.xp6(1),e.Q6J("ngIf",2!=n.eventForm.controls.tipoEvento.value),e.xp6(1),e.Q6J("ngIf",2!=n.eventForm.controls.tipoEvento.value),e.xp6(2),e.Q6J("ngIf",0!=n.eventForm.controls.tipoEvento.value),e.xp6(8),e.Q6J("toolbar",n.toolbar)("editor",n.editor),e.xp6(1),e.Q6J("editor",n.editor)("placeholder","Descripci\xf3n del evento"),e.xp6(2),e.Q6J("ngIf",!n.edit),e.xp6(1),e.Q6J("ngIf",n.edit)}}const oe=[{path:"",component:(()=>{var r;class c{constructor(t,o,i,s,a,g,m,v,h,C){this.fb=t,this.compressService=o,this.toast=i,this.modalc=s,this.genericService=a,this.alert=g,this.load=m,this.eventoRepo=v,this.activatedRoute=h,this.nav=C,this.tipoPago=q.R,this.tipoPublico=S.L,this.img=null,this.disabled=!1,this.costos=[],this.ponentes=[],this.agenda=[],this.edit=!1,this.toolbar=[[{heading:["h1","h2","h3","h4","h5","h6"]}],["bold","italic"],["underline","strike"],["ordered_list","bullet_list"],["align_left","align_center","align_right","align_justify"],["horizontal_rule","format_clear"],["text_color","background_color"]]}ngOnInit(){this.eventForm=this.fb.group({fechaInicio:[null,u.kI.required],fechaFin:[null,u.kI.required],titulo:[null,u.kI.required],detalles:[null,u.kI.required],pasarelasPago:[[]],lugar:[null],esGratis:[!1],tieneCupoMaximo:[!1],cupo:[0],zoom:[],zoomPassword:[null],mapLat:[0],mapLong:[0],tipoEvento:[b.$J.PRESENCIAL]}),this.activatedRoute.params.subscribe(({id:t})=>{t&&this.configEdition(Number(t))}),this.editor=new x.ML}upload(){var t=this;return(0,p.Z)(function*(){t.img=yield t.compressService.returnImageCompress()})()}ngOnDestroy(){this.editor.destroy()}verMapa(){var t=this;return(0,p.Z)(function*(){const o=yield t.modalc.create({component:w.s});o.onDidDismiss().then(({data:i})=>{i&&(t.eventForm.controls.mapLat.setValue(i.latitude),t.eventForm.controls.mapLong.setValue(i.longitude),t.toast.success("Ubicaci\xf3n Guardada"))}),o.present()})()}generateZoom(){var t=this;return(0,p.Z)(function*(){var o;t.load.setData({animated:!0,spinner:"dots",translucent:!0,message:"Generando Liga de Zoom..."}),yield t.load.create(),yield t.alert.setData({header:"Esta a punto de generar una liga de zoom",message:"Elija una opci\xf3n",buttons:[{text:"Crear sin contrase\xf1a",handler:(o=(0,p.Z)(function*(){yield t.load.show();const i=t.genericService.post("evento/zoom",{password:0,date:t.eventForm.controls.fechaInicio.value,title:t.eventForm.controls.titulo.value}).toPromise();t.eventForm.controls.zoom.setValue(i.join_url),t.toast.success("Liga Generada Exitosamente"),yield t.load.hide()}),function(){return o.apply(this,arguments)})},{text:"Crear con contrase\xf1a",handler:function(){var o=(0,p.Z)(function*(){yield t.load.show();const i=yield t.genericService.post("evento/zoom",{password:1,date:t.eventForm.controls.fechaInicio.value,title:t.eventForm.controls.titulo.value}).toPromise();console.log(i),t.eventForm.controls.zoom.setValue(i.join_url),t.eventForm.controls.zoomPassword.setValue(i.password),t.disabled=!0,t.toast.success("Liga Generada Exitosamente"),yield t.load.hide()});return function(){return o.apply(this,arguments)}}()},{text:"Cancelar"}]})})()}agregar(){this.costos.push({costo:null,nombre:null,publico:null})}quitar(t){this.costos.splice(t,1)}agregarAgenda(){this.agenda.push({nombre:null,horas:null})}quitarAgenda(t){this.agenda.splice(t,1)}agregarPonente(){this.ponentes.push({nombre:null,foto:null,cargo:null})}quitarPonente(t){this.ponentes.splice(t,1)}subirFotoPonente(t){var o=this;return(0,p.Z)(function*(){o.ponentes[t].foto=yield o.compressService.returnImageCompress()})()}setTipo(t,o,i){this.costos[o][i]=t.detail.value}setTipoAgenda(t,o,i){this.agenda[o][i]=t.detail.value}setTipoPonente(t,o,i){this.ponentes[o][i]=t.detail.value}save(){var t=this;return(0,p.Z)(function*(){let o;yield t.load.setData({animated:!0,spinner:"dots",translucent:!0,message:"Creando Evento..."}),yield t.load.create(),yield t.load.show(),o="string"!=typeof t.eventForm.controls.detalles.value?(0,x.io)(t.eventForm.controls.detalles.value):t.eventForm.controls.detalles.value,t.eventForm.controls.detalles.setValue(o);const i=new FormData;for(const a in t.eventForm.value)t.eventForm.value.hasOwnProperty(a)&&"costos"!==a&&i.append(a,t.eventForm.value[a]);if(t.img&&i.append("imagen",t.compressService.dataURItoBlob(t.img)),t.agenda.length>0&&i.append("agenda",JSON.stringify(t.agenda)),t.ponentes.length>0){let a=0;for(const g of t.ponentes){if(g.foto){const m=new FormData;m.append("imagen",t.compressService.dataURItoBlob(g.foto));const v=yield t.genericService.postWhitImage("evento/ponente",m).toPromise();t.ponentes[a].foto=v.file}a+=1}i.append("ponentes",JSON.stringify(t.ponentes))}i.append("costos",JSON.stringify(t.costos));const s=t.eventForm.controls.titulo.value.replace(/ /g,"-");i.append("identificador",s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()),t.genericService.postWhitImage("evento",i).subscribe(function(){var a=(0,p.Z)(function*(g){t.img=null,t.disabled=!0,t.eventForm.reset({pasarelasPago:[[]],esGratis:[!1],tieneCupoMaximo:[!1],cupo:[0],mapLat:[0],mapLong:[0],tipoEvento:[b.$J.PRESENCIAL]}),t.costos=[],t.ponentes=[],t.agenda=[],t.eventoRepo.addEvento(g),yield t.load.hide(),t.toast.success("Evento Guardado")});return function(g){return a.apply(this,arguments)}}())})()}configEdition(t){this.idEdit=t,this.edit=!0,this.eventoRepo.evento$.pipe((0,G.U)(o=>o.find(i=>i.id===t)),(0,Q.b)(o=>{var i,s,a,g,m,v,h,C,T,E,A,P,y,F,N,U,J;o?(this.costos="string"==typeof(null==o?void 0:o.costos)?JSON.parse(null!==(J=null==o?void 0:o.costos)&&void 0!==J?J:"[]"):o.costos,this.agenda=null!==(i=null==o?void 0:o.agenda)&&void 0!==i?i:[],this.ponentes=null!==(s=null==o?void 0:o.ponentes)&&void 0!==s?s:[],this.eventForm.setValue({fechaInicio:null!==(a=o.fechaInicio)&&void 0!==a?a:null,fechaFin:null!==(g=o.fechaFin)&&void 0!==g?g:null,titulo:null!==(m=o.titulo)&&void 0!==m?m:null,detalles:null!==(v=o.detalles)&&void 0!==v?v:null,pasarelasPago:null!==(h=o.pasarelasPago)&&void 0!==h?h:null,lugar:null!==(C=o.lugar)&&void 0!==C?C:null,esGratis:null!==(T=o.esGratis)&&void 0!==T?T:null,tieneCupoMaximo:null!==(E=o.tieneCupoMaximo)&&void 0!==E?E:null,cupo:null!==(A=o.cupo)&&void 0!==A?A:null,zoom:null!==(P=o.zoom)&&void 0!==P?P:null,zoomPassword:null!==(y=o.zoomPassword)&&void 0!==y?y:null,mapLat:null!==(F=o.mapLat)&&void 0!==F?F:null,mapLong:null!==(N=o.mapLong)&&void 0!==N?N:null,tipoEvento:null!==(U=o.tipoEvento)&&void 0!==U?U:null})):this.nav.navigateForward("/dashboard/eventos")})).subscribe()}editar(){var t=this;return(0,p.Z)(function*(){let o;yield t.load.setData({animated:!0,spinner:"dots",translucent:!0,message:"Editando Evento..."}),yield t.load.create(),yield t.load.show(),o="string"!=typeof t.eventForm.controls.detalles.value?(0,x.io)(t.eventForm.controls.detalles.value):t.eventForm.controls.detalles.value,t.eventForm.controls.detalles.setValue(o);const i=new FormData;for(const a in t.eventForm.value)t.eventForm.value.hasOwnProperty(a)&&"costos"!==a&&i.append(a,t.eventForm.value[a]);if(t.img&&i.append("imagen",t.compressService.dataURItoBlob(t.img)),t.agenda.length>0&&i.append("agenda",JSON.stringify(t.agenda)),t.ponentes.length>0){let a=0;for(const g of t.ponentes){if(g.foto&&g.foto.includes("data:image/jpeg")){const m=new FormData;m.append("imagen",t.compressService.dataURItoBlob(g.foto));const v=yield t.genericService.postWhitImage("evento/ponente",m).toPromise();t.ponentes[a].foto=v.file}a+=1}i.append("ponentes",JSON.stringify(t.ponentes))}i.append("costos",JSON.stringify(t.costos));const s=t.eventForm.controls.titulo.value.replace(/ /g,"-");i.append("identificador",s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()),t.genericService.updateWhitImage("evento",t.idEdit,i).subscribe(function(){var a=(0,p.Z)(function*(g){t.eventoRepo.updateEvento(t.idEdit,g),yield t.load.hide(),t.nav.navigateForward("/dashboard/eventos"),t.toast.success("Evento Editado")});return function(g){return a.apply(this,arguments)}}())})()}}return(r=c).\u0275fac=function(t){return new(t||r)(e.Y36(u.qu),e.Y36(M.Y),e.Y36(R._W),e.Y36(l.IN),e.Y36(L.M),e.Y36(Y.c),e.Y36(k.b),e.Y36(b.hJ),e.Y36(Z.gz),e.Y36(l.SH))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-crear-evento"]],decls:9,vars:3,consts:[[3,"fullscreen"],[1,"mt-5","px-4"],[1,"container"],[1,"my-3"],["class","container",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"text-center"],["color","danger"],["formControlName","tipoEvento"],[3,"value"],["labelPlacement","floating","required","","type","text","formControlName","titulo"],["slot","label"],[1,"row","my-3"],[1,"col-md-4","mx-auto"],[1,"text-center","h4"],["hourCycle","h12","minuteValues","0,15,30,45","formControlName","fechaInicio","slot","end"],["slot","time-label"],["hourCycle","h12","presentation","time","minuteValues","0,15,30,45","slot","end","formControlName","fechaFin"],["button","",3,"click"],["slot","end","style","width: 300px;","class","my-3",3,"src",4,"ngIf"],["formControlName","esGratis","slot","end"],["formControlName","tieneCupoMaximo","slot","end"],[4,"ngIf"],["class","my-3",4,"ngIf"],["expand","block","fill","clear","shape","round",3,"click"],["class","ms-3 border-bottom",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"my-4"],[1,"NgxEditor__Wrapper"],[3,"toolbar","editor"],["formControlName","detalles",3,"editor","placeholder"],[1,"d-flex","mt-4"],["shape","round","color","primary","type","submit","class","mt-2",3,"disabled",4,"ngIf"],["shape","round","color","primary","type","submit","class","mt-2",4,"ngIf"],["shape","round","color","primary",1,"mt-2","d-none"],["slot","end",1,"my-3",2,"width","300px",3,"src"],["required","","labelPlacement","floating","type","number","formControlName","cupo"],["label","Formas de Pago","labelPlacement","floating","interface","popover","formControlName","pasarelasPago","multiple","true","placeholder","Selecciona"],[1,"ms-3","border-bottom"],["slot","start","okText","Aceptar","cancelText","Cerrar","placeholder","Dirigido a...",1,"col-md-4","my-3",3,"value","ionChange"],["type","text","label","Ingrese Nombre","labelPlacement","floating","placeholder","Cena",1,"border","col-md-4","my-3",3,"value","ionChange"],["label","Ingrese Precio","labelPlacement","floating","placeholder","800","slot","end","type","number",1,"border","col-md-4","my-3",3,"value","ionChange"],["slot","end",3,"click"],["slot","icon-only","name","trash-outline"],["type","text","label","Ingrese Actividad","labelPlacement","floating","placeholder","Cena",1,"border","col-md-4","my-3",3,"value","ionChange"],["label","Ingrese Horario","labelPlacement","floating","placeholder","800","slot","end","type","text",1,"border","col-md-4","my-3",3,"value","ionChange"],["type","text","label","Ingrese Actividad","labelPlacement","floating","placeholder","",1,"border","col-md-4","my-3",3,"value","ionChange"],["label","Ingrese Cargo / Oficio / Puesto","labelPlacement","floating","placeholder","800","slot","end","type","texto",1,"border","col-md-4","my-3",3,"value","ionChange"],["shape","round",3,"click"],["type","text","formControlName","lugar"],["expand","block","shape","round",3,"click"],[1,"row"],[1,"col-md-6"],[1,"ion-margin-vertical"],["slot","start","expand","block","shape","round",1,"my-2",3,"disabled","click"],["type","text","formControlName","zoom","placeholder","URL de Zoom",1,"border","col-md-6","my-2",3,"readonly"],["type","text","formControlName","zoomPassword","maxlength","8","placeholder","Contrase\xf1a",1,"border","col-md-6","my-2",3,"readonly"],["shape","round","color","primary","type","submit",1,"mt-2",3,"disabled"],["shape","round","color","primary","type","submit",1,"mt-2"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br")(2,"br"),e.TgZ(3,"div",1)(4,"div",2)(5,"h1",3)(6,"b"),e._uU(7),e.qZA()(),e.YNc(8,te,86,19,"div",4),e.qZA()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(7),e.hij(" ",o.edit?"Editar ":"Crear "," Evento"),e.xp6(1),e.Q6J("ngIf",o.eventForm))},dependencies:[_.sg,_.O5,u._Y,u.JJ,u.JL,u.Q7,u.nD,l.YG,l.W2,l.x4,l.gu,l.Xz,l.pK,l.Ie,l.Q$,l.cJ,l.GO,l.t9,l.n0,l.yW,l.ho,l.w,l.as,l.QI,l.j9,x.tP,x.Mn,u.sg,u.u]}),c})()}];let ne=(()=>{var r;class c{}return(r=c).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[Z.Bz.forChild(oe),Z.Bz]}),c})(),ie=(()=>{var r;class c{}return(r=c).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[_.ez,u.u5,l.Pc,x.FP,u.UX,ne]}),c})()},7038:(I,f,d)=>{d.d(f,{L:()=>u,R:()=>_});var _=function(l){return l[l.STRIPE=0]="STRIPE",l[l.TRANSFERENCIA=1]="TRANSFERENCIA",l}(_||{});const u=["Pago con Tarjeta","Transferencia"]},4028:(I,f,d)=>{d.d(f,{L:()=>_,x:()=>u});var _=function(l){return l[l.ESTUDIANTES=0]="ESTUDIANTES",l[l.AFILIADOS=1]="AFILIADOS",l[l.PUBLICO_GENERAL=2]="PUBLICO_GENERAL",l[l.PRENSA=3]="PRENSA",l}(_||{});const u=["Estudiante","Afiliado","P\xfablico General","Prensa"]}}]);