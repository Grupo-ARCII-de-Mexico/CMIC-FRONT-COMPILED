"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1835],{1835:(I,v,s)=>{s.r(v),s.d(v,{CrearEventoPageModule:()=>ee});var g=s(6814),u=s(95),a=s(7027),C=s(9085),p=s(5861),_=s(8915),b=s(8013),N=s(4028),J=s(7038),S=s(3597),Q=s(7398),G=s(9397),e=s(6689),q=s(2264),L=s(2425),w=s(930),R=s(4433),M=s(7153);function Y(i,c){if(1&i&&e._UZ(0,"ion-img",33),2&i){const n=e.oxw(2);e.Q6J("src",n.img)}}function D(i,c){1&i&&(e.TgZ(0,"ion-item")(1,"ion-input",34)(2,"div",11),e._uU(3,"Cupo "),e.TgZ(4,"ion-text",7),e._uU(5,"*"),e.qZA()()()())}function z(i,c){if(1&i&&(e.TgZ(0,"ion-item")(1,"ion-select",35)(2,"ion-select-option",9),e._uU(3,"Transferencia"),e.qZA(),e.TgZ(4,"ion-select-option",9),e._uU(5,"Tarjetas (Stripe) "),e.qZA()()()),2&i){const n=e.oxw(2);e.xp6(2),e.Q6J("value",n.tipoPago.TRANSFERENCIA),e.xp6(2),e.Q6J("value",n.tipoPago.STRIPE)}}function O(i,c){if(1&i){const n=e.EpF();e.TgZ(0,"div",38)(1,"ion-select",39),e.NdJ("ionChange",function(o){const d=e.CHM(n).index,l=e.oxw(3);return e.KtG(l.setTipo(o,d,"publico"))}),e.TgZ(2,"ion-select-option",9),e._uU(3,"Afiliado"),e.qZA(),e.TgZ(4,"ion-select-option",9),e._uU(5,"P\xfablico General"),e.qZA(),e.TgZ(6,"ion-select-option",9),e._uU(7,"Estudiante"),e.qZA()(),e.TgZ(8,"ion-input",40),e.NdJ("ionChange",function(o){const d=e.CHM(n).index,l=e.oxw(3);return e.KtG(l.setTipo(o,d,"nombre"))}),e.qZA(),e.TgZ(9,"ion-input",41),e.NdJ("ionChange",function(o){const d=e.CHM(n).index,l=e.oxw(3);return e.KtG(l.setTipo(o,d,"costo"))}),e.qZA(),e.TgZ(10,"ion-button",42),e.NdJ("click",function(){const r=e.CHM(n).index,d=e.oxw(3);return e.KtG(d.quitar(r))}),e._UZ(11,"ion-icon",43),e.qZA()()}if(2&i){const n=c.$implicit,t=e.oxw(3);e.xp6(1),e.Q6J("value",n.publico),e.xp6(1),e.Q6J("value",t.tipoPublico.AFILIADOS),e.xp6(2),e.Q6J("value",t.tipoPublico.PUBLICO_GENERAL),e.xp6(2),e.Q6J("value",t.tipoPublico.ESTUDIANTES),e.xp6(2),e.Q6J("value",n.nombre),e.xp6(1),e.Q6J("value",n.costo)}}function k(i,c){if(1&i){const n=e.EpF();e.TgZ(0,"div",3)(1,"ion-item")(2,"ion-label"),e._uU(3,"Costos"),e.qZA(),e.TgZ(4,"ion-button",36),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2);return e.KtG(o.agregar())}),e._uU(5," Agregar Costos "),e.qZA()(),e.YNc(6,O,12,6,"div",37),e.qZA()}if(2&i){const n=e.oxw(2);e.xp6(6),e.Q6J("ngForOf",n.costos)}}function H(i,c){1&i&&(e.TgZ(0,"ion-item")(1,"ion-input",44)(2,"div",11),e._uU(3,"Escriba la direcci\xf3n: "),e.TgZ(4,"ion-text",7),e._uU(5,"*"),e.qZA()()()())}function V(i,c){if(1&i){const n=e.EpF();e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2,"Agregar Mapa "),e.TgZ(3,"ion-text",7),e._uU(4,"*"),e.qZA()(),e.TgZ(5,"ion-button",45),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2);return e.KtG(o.verMapa())}),e._uU(6," Abrir Mapa "),e.qZA()()}}function j(i,c){if(1&i){const n=e.EpF();e.TgZ(0,"div",46)(1,"div",47)(2,"ion-label",48),e._uU(3,"Generar Liga Zoom Autom\xe1ticamente "),e.TgZ(4,"ion-text",7),e._uU(5,"*"),e.qZA()(),e.TgZ(6,"ion-button",49),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2);return e.KtG(o.generateZoom())}),e._uU(7," Generar Liga de Zoom "),e.qZA()(),e.TgZ(8,"div",47)(9,"ion-label",48),e._uU(10,"Agregar Liga Zoom "),e.TgZ(11,"ion-text",7),e._uU(12,"*"),e.qZA()(),e.TgZ(13,"div",46),e._UZ(14,"ion-input",50)(15,"ion-input",51),e.qZA()()()}if(2&i){const n=e.oxw(2);e.xp6(6),e.Q6J("disabled",!n.eventForm.controls.titulo.value),e.xp6(8),e.Q6J("readonly",n.disabled),e.xp6(1),e.Q6J("readonly",n.disabled)}}function K(i,c){if(1&i&&(e.TgZ(0,"ion-button",52),e._uU(1," Crear Evento "),e.qZA()),2&i){const n=e.oxw(2);e.Q6J("disabled",!n.img||n.eventForm.invalid)}}function B(i,c){1&i&&(e.TgZ(0,"ion-button",53),e._uU(1," Actualizar Evento "),e.qZA())}function W(i,c){if(1&i){const n=e.EpF();e.TgZ(0,"div",2)(1,"form",5),e.NdJ("ngSubmit",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.edit?o.editar():o.save())}),e.TgZ(2,"div",6)(3,"h4"),e._uU(4,"Tipo Evento "),e.TgZ(5,"ion-text",7),e._uU(6,"*"),e.qZA()()(),e.TgZ(7,"ion-segment",8)(8,"ion-segment-button",9)(9,"ion-label"),e._uU(10,"Presencial"),e.qZA()(),e.TgZ(11,"ion-segment-button",9)(12,"ion-label"),e._uU(13,"Hibrido"),e.qZA()(),e.TgZ(14,"ion-segment-button",9)(15,"ion-label"),e._uU(16,"Virtual"),e.qZA()()(),e.TgZ(17,"ion-item")(18,"ion-input",10)(19,"div",11),e._uU(20,"Titulo "),e.TgZ(21,"ion-text",7),e._uU(22,"*"),e.qZA()()()(),e.TgZ(23,"div",12)(24,"div",13)(25,"ion-label",14),e._uU(26,"Fecha y Hora del Evento "),e.TgZ(27,"ion-text",7),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"ion-datetime",15)(30,"span",16),e._uU(31,"Tiempo"),e.qZA()()(),e.TgZ(32,"div",13)(33,"ion-label",14),e._uU(34,"Hora de Fin"),e.TgZ(35,"ion-text",7),e._uU(36,"*"),e.qZA()(),e._UZ(37,"ion-datetime",17),e.qZA()(),e.TgZ(38,"ion-item",18),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.upload())}),e.YNc(39,Y,1,1,"ion-img",19),e._UZ(40,"br"),e.TgZ(41,"ion-label"),e._uU(42,"Subir Imagen"),e.qZA()(),e.TgZ(43,"ion-item")(44,"ion-text"),e._uU(45,"Evento Gratuito"),e.qZA(),e._UZ(46,"ion-toggle",20),e.qZA(),e.TgZ(47,"ion-item")(48,"ion-text"),e._uU(49,"Cupo M\xe1ximo"),e.qZA(),e._UZ(50,"ion-toggle",21),e.qZA(),e.YNc(51,D,6,0,"ion-item",22),e.YNc(52,z,6,2,"ion-item",22),e.YNc(53,k,7,1,"div",23),e.YNc(54,H,6,0,"ion-item",22),e.YNc(55,V,7,0,"ion-item",22),e._UZ(56,"br"),e.YNc(57,j,16,3,"div",24),e._UZ(58,"br"),e.TgZ(59,"ion-label",25),e._uU(60,"Detalles del evento "),e.TgZ(61,"ion-text",7),e._uU(62,"*"),e.qZA()(),e._UZ(63,"br"),e.TgZ(64,"div",26),e._UZ(65,"ngx-editor-menu",27)(66,"ngx-editor",28),e.qZA(),e.TgZ(67,"div",29),e.YNc(68,K,2,1,"ion-button",30),e.YNc(69,B,2,0,"ion-button",31),e.TgZ(70,"ion-button",32),e._uU(71," Vista Previa "),e.qZA()()()()}if(2&i){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.eventForm),e.xp6(7),e.Q6J("value",0),e.xp6(3),e.Q6J("value",1),e.xp6(3),e.Q6J("value",2),e.xp6(25),e.Q6J("ngIf",n.img),e.xp6(12),e.Q6J("ngIf",n.eventForm.controls.tieneCupoMaximo.value),e.xp6(1),e.Q6J("ngIf",!n.eventForm.controls.esGratis.value),e.xp6(1),e.Q6J("ngIf",!n.eventForm.controls.esGratis.value),e.xp6(1),e.Q6J("ngIf",2!=n.eventForm.controls.tipoEvento.value),e.xp6(1),e.Q6J("ngIf",2!=n.eventForm.controls.tipoEvento.value),e.xp6(2),e.Q6J("ngIf",0!=n.eventForm.controls.tipoEvento.value),e.xp6(8),e.Q6J("toolbar",n.toolbar)("editor",n.editor),e.xp6(1),e.Q6J("editor",n.editor)("placeholder","Descripci\xf3n del evento"),e.xp6(2),e.Q6J("ngIf",!n.edit),e.xp6(1),e.Q6J("ngIf",n.edit)}}const X=[{path:"",component:(()=>{var i;class c{constructor(t,o,r,d,l,m,f,h,x,Z){this.fb=t,this.compressService=o,this.toast=r,this.modalc=d,this.genericService=l,this.alert=m,this.load=f,this.eventoRepo=h,this.activatedRoute=x,this.nav=Z,this.tipoPago=J.R,this.tipoPublico=N.L,this.img=null,this.disabled=!1,this.costos=[],this.edit=!1,this.toolbar=[[{heading:["h1","h2","h3","h4","h5","h6"]}],["bold","italic"],["underline","strike"],["ordered_list","bullet_list"],["align_left","align_center","align_right","align_justify"],["horizontal_rule","format_clear"],["text_color","background_color"]]}ngOnInit(){this.eventForm=this.fb.group({fechaInicio:[null,u.kI.required],fechaFin:[null,u.kI.required],titulo:[null,u.kI.required],detalles:[null,u.kI.required],pasarelasPago:[[]],lugar:[null],esGratis:[!1],tieneCupoMaximo:[!1],cupo:[0],zoom:[],zoomPassword:[null],mapLat:[0],mapLong:[0],tipoEvento:[b.$J.PRESENCIAL]}),this.activatedRoute.params.subscribe(({id:t})=>{t&&this.configEdition(Number(t))}),this.editor=new _.ML}upload(){var t=this;return(0,p.Z)(function*(){t.img=yield t.compressService.returnImageCompress()})()}ngOnDestroy(){this.editor.destroy()}verMapa(){var t=this;return(0,p.Z)(function*(){const o=yield t.modalc.create({component:S.s});o.onDidDismiss().then(({data:r})=>{r&&(t.eventForm.controls.mapLat.setValue(r.latitude),t.eventForm.controls.mapLong.setValue(r.longitude),t.toast.success("Ubicaci\xf3n Guardada"))}),o.present()})()}generateZoom(){var t=this;return(0,p.Z)(function*(){var o;t.load.setData({animated:!0,spinner:"dots",translucent:!0,message:"Generando Liga de Zoom..."}),yield t.load.create(),t.alert.setData({header:"Esta a punto de generar una liga de zoom",message:"Elija una opci\xf3n",buttons:[{text:"Crear sin contrase\xf1a",handler:(o=(0,p.Z)(function*(){yield t.load.show();const r=t.genericService.post("evento/zoom",{password:0,date:t.eventForm.controls.fechaInicio.value,title:t.eventForm.controls.titulo.value}).toPromise();t.eventForm.controls.zoom.setValue(r.join_url),t.toast.success("Liga Generada Exitosamente"),yield t.load.hide()}),function(){return o.apply(this,arguments)})},{text:"Crear con contrase\xf1a",handler:function(){var o=(0,p.Z)(function*(){yield t.load.show();const r=yield t.genericService.post("evento/zoom",{password:1,date:t.eventForm.controls.fechaInicio.value,title:t.eventForm.controls.titulo.value}).toPromise();console.log(r),t.eventForm.controls.zoom.setValue(r.join_url),t.eventForm.controls.zoomPassword.setValue(r.password),t.disabled=!0,t.toast.success("Liga Generada Exitosamente"),yield t.load.hide()});return function(){return o.apply(this,arguments)}}()},{text:"Cancelar"}]}),yield t.alert.create(),yield t.alert.show()})()}agregar(){this.costos.push({costo:null,nombre:null,publico:null})}quitar(t){this.costos.splice(t,1)}setTipo(t,o,r){this.costos[o][r]=t.detail.value}save(){var t=this;return(0,p.Z)(function*(){let o;yield t.load.setData({animated:!0,spinner:"dots",translucent:!0,message:"Creando Evento..."}),yield t.load.create(),yield t.load.show(),o="string"!=typeof t.eventForm.controls.detalles.value?(0,_.io)(t.eventForm.controls.detalles.value):t.eventForm.controls.detalles.value,t.eventForm.controls.detalles.setValue(o);const r=new FormData;for(const l in t.eventForm.value)t.eventForm.value.hasOwnProperty(l)&&"costos"!==l&&r.append(l,t.eventForm.value[l]);t.img&&r.append("imagen",t.compressService.dataURItoBlob(t.img)),r.append("costos",JSON.stringify(t.costos));const d=t.eventForm.controls.titulo.value.replace(/ /g,"-");r.append("identificador",d.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()),t.genericService.postWhitImage("evento",r).subscribe(function(){var l=(0,p.Z)(function*(m){t.img=null,t.disabled=!0,t.eventForm.reset({pasarelasPago:[[]],esGratis:[!1],tieneCupoMaximo:[!1],cupo:[0],mapLat:[0],mapLong:[0],tipoEvento:[b.$J.PRESENCIAL]}),t.costos=[],t.eventoRepo.addEvento(m),yield t.load.hide(),t.toast.success("Evento Guardado")});return function(m){return l.apply(this,arguments)}}())})()}configEdition(t){this.idEdit=t,this.edit=!0,this.eventoRepo.evento$.pipe((0,Q.U)(o=>o.find(r=>r.id===t)),(0,G.b)(o=>{var r,d,l,m,f,h,x,Z,E,T,y,A,F,P,U;o?(console.log(typeof(null==o?void 0:o.costos)),this.costos="string"==typeof(null==o?void 0:o.costos)?JSON.parse(null!==(U=null==o?void 0:o.costos)&&void 0!==U?U:"[]"):o.costos,this.eventForm.setValue({fechaInicio:null!==(r=o.fechaInicio)&&void 0!==r?r:null,fechaFin:null!==(d=o.fechaFin)&&void 0!==d?d:null,titulo:null!==(l=o.titulo)&&void 0!==l?l:null,detalles:null!==(m=o.detalles)&&void 0!==m?m:null,pasarelasPago:null!==(f=o.pasarelasPago)&&void 0!==f?f:null,lugar:null!==(h=o.lugar)&&void 0!==h?h:null,esGratis:null!==(x=o.esGratis)&&void 0!==x?x:null,tieneCupoMaximo:null!==(Z=o.tieneCupoMaximo)&&void 0!==Z?Z:null,cupo:null!==(E=o.cupo)&&void 0!==E?E:null,zoom:null!==(T=o.zoom)&&void 0!==T?T:null,zoomPassword:null!==(y=o.zoomPassword)&&void 0!==y?y:null,mapLat:null!==(A=o.mapLat)&&void 0!==A?A:null,mapLong:null!==(F=o.mapLong)&&void 0!==F?F:null,tipoEvento:null!==(P=o.tipoEvento)&&void 0!==P?P:null})):this.nav.navigateForward("/dashboard/eventos")})).subscribe()}editar(){var t=this;return(0,p.Z)(function*(){let o;yield t.load.setData({animated:!0,spinner:"dots",translucent:!0,message:"Editando Evento..."}),yield t.load.create(),yield t.load.show(),o="string"!=typeof t.eventForm.controls.detalles.value?(0,_.io)(t.eventForm.controls.detalles.value):t.eventForm.controls.detalles.value,t.eventForm.controls.detalles.setValue(o);const r=new FormData;for(const l in t.eventForm.value)t.eventForm.value.hasOwnProperty(l)&&"costos"!==l&&r.append(l,t.eventForm.value[l]);t.img&&r.append("imagen",t.compressService.dataURItoBlob(t.img)),r.append("costos",JSON.stringify(t.costos));const d=t.eventForm.controls.titulo.value.replace(/ /g,"-");r.append("identificador",d.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()),t.genericService.updateWhitImage("evento",t.idEdit,r).subscribe(function(){var l=(0,p.Z)(function*(m){t.eventoRepo.updateEvento(t.idEdit,m),yield t.load.hide(),t.nav.navigateForward("/dashboard/eventos"),t.toast.success("Evento Editado")});return function(m){return l.apply(this,arguments)}}())})()}}return(i=c).\u0275fac=function(t){return new(t||i)(e.Y36(u.qu),e.Y36(q.Y),e.Y36(L._W),e.Y36(a.IN),e.Y36(w.M),e.Y36(R.c),e.Y36(M.b),e.Y36(b.hJ),e.Y36(C.gz),e.Y36(a.SH))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-crear-evento"]],decls:9,vars:3,consts:[[3,"fullscreen"],[1,"mt-5","px-4"],[1,"container"],[1,"my-3"],["class","container",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"text-center"],["color","danger"],["formControlName","tipoEvento"],[3,"value"],["labelPlacement","floating","required","","type","text","formControlName","titulo"],["slot","label"],[1,"row","my-3"],[1,"col-md-4","mx-auto"],[1,"text-center","h4"],["hourCycle","h12","minuteValues","0,15,30,45","formControlName","fechaInicio","slot","end"],["slot","time-label"],["hourCycle","h12","presentation","time","minuteValues","0,15,30,45","slot","end","formControlName","fechaFin"],["button","",3,"click"],["slot","end","style","width: 300px;","class","my-3",3,"src",4,"ngIf"],["formControlName","esGratis","slot","end"],["formControlName","tieneCupoMaximo","slot","end"],[4,"ngIf"],["class","my-3",4,"ngIf"],["class","row",4,"ngIf"],[1,"my-4"],[1,"NgxEditor__Wrapper"],[3,"toolbar","editor"],["formControlName","detalles",3,"editor","placeholder"],[1,"d-flex","mt-4"],["shape","round","color","primary","type","submit","class","mt-2",3,"disabled",4,"ngIf"],["shape","round","color","primary","type","submit","class","mt-2",4,"ngIf"],["shape","round","color","primary",1,"mt-2","d-none"],["slot","end",1,"my-3",2,"width","300px",3,"src"],["required","","labelPlacement","floating","type","number","formControlName","cupo"],["label","Formas de Pago","labelPlacement","floating","interface","popover","formControlName","pasarelasPago","multiple","true","placeholder","Selecciona"],["expand","block","fill","clear","shape","round",3,"click"],["class","ms-3 border-bottom",4,"ngFor","ngForOf"],[1,"ms-3","border-bottom"],["slot","start","okText","Aceptar","cancelText","Cerrar","placeholder","Dirigido a...",1,"col-md-4","my-3",3,"value","ionChange"],["type","text","label","Ingrese Nombre","labelPlacement","floating","placeholder","Cena",1,"border","col-md-4","my-3",3,"value","ionChange"],["label","Ingrese Precio","labelPlacement","floating","placeholder","800","slot","end","type","number",1,"border","col-md-4","my-3",3,"value","ionChange"],["slot","end",3,"click"],["slot","icon-only","name","trash-outline"],["required","","type","text","formControlName","lugar"],["expand","block","shape","round",3,"click"],[1,"row"],[1,"col-md-6"],[1,"ion-margin-vertical"],["slot","start","expand","block","shape","round",1,"my-2",3,"disabled","click"],["type","text","formControlName","zoom","placeholder","URL de Zoom",1,"border","col-md-6","my-2",3,"readonly"],["type","text","formControlName","zoomPassword","maxlength","8","placeholder","Contrase\xf1a",1,"border","col-md-6","my-2",3,"readonly"],["shape","round","color","primary","type","submit",1,"mt-2",3,"disabled"],["shape","round","color","primary","type","submit",1,"mt-2"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br")(2,"br"),e.TgZ(3,"div",1)(4,"div",2)(5,"h1",3)(6,"b"),e._uU(7),e.qZA()(),e.YNc(8,W,72,17,"div",4),e.qZA()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(7),e.hij(" ",o.edit?"Editar ":"Crear "," Evento"),e.xp6(1),e.Q6J("ngIf",o.eventForm))},dependencies:[g.sg,g.O5,u._Y,u.JJ,u.JL,u.Q7,u.nD,a.YG,a.W2,a.x4,a.gu,a.Xz,a.pK,a.Ie,a.Q$,a.cJ,a.GO,a.t9,a.n0,a.yW,a.ho,a.w,a.as,a.QI,a.j9,_.tP,_.Mn,u.sg,u.u]}),c})()}];let $=(()=>{var i;class c{}return(i=c).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[C.Bz.forChild(X),C.Bz]}),c})(),ee=(()=>{var i;class c{}return(i=c).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,u.u5,a.Pc,_.FP,u.UX,$]}),c})()},7038:(I,v,s)=>{s.d(v,{L:()=>u,R:()=>g});var g=function(a){return a[a.STRIPE=0]="STRIPE",a[a.TRANSFERENCIA=1]="TRANSFERENCIA",a}(g||{});const u=["Pago con Tarjeta","Transferencia"]},4028:(I,v,s)=>{s.d(v,{L:()=>g,x:()=>u});var g=function(a){return a[a.ESTUDIANTES=0]="ESTUDIANTES",a[a.AFILIADOS=1]="AFILIADOS",a[a.PUBLICO_GENERAL=2]="PUBLICO_GENERAL",a[a.PRENSA=3]="PRENSA",a}(g||{});const u=["Estudiante","Afiliado","P\xfablico General","Prensa"]}}]);