"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[154],{154:(I,_,d)=>{d.r(_),d.d(_,{CrearOportunidadPageModule:()=>F});var p=d(6814),g=d(95),c=d(9843),h=d(9085),u=d(5861),s=d(8915),Z=d(4664),C=d(9397),e=d(6689),O=d(7153),T=d(2425),v=d(2264),b=d(930);function P(i,l){if(1&i&&e._UZ(0,"ion-img",22),2&i){const r=e.oxw();e.Q6J("src",r.logotipo)}}function M(i,l){1&i&&(e.TgZ(0,"h5",23)(1,"b"),e._uU(2,"Documentos Agregados"),e.qZA()())}function x(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.TgZ(3,"p"),e._uU(4),e.qZA()(),e.TgZ(5,"ion-button",24),e.NdJ("click",function(){const a=e.CHM(r).index,t=e.oxw();return e.KtG(t.eliminarDocumentos(a))}),e._UZ(6,"ion-icon",25),e.qZA()()}if(2&i){const r=l.$implicit;e.xp6(2),e.hij(" ",r.texto," "),e.xp6(2),e.Oqu(r.descripcion)}}function A(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.qZA(),e.TgZ(3,"ion-button",24),e.NdJ("click",function(){const a=e.CHM(r).$implicit,t=e.oxw();return e.KtG(t.eliminar(a))}),e._UZ(4,"ion-icon",25),e.qZA()()}if(2&i){const r=l.$implicit;e.xp6(2),e.Oqu(r)}}const J=[{path:"",component:(()=>{var i;class l{constructor(o,n,a,t){this.loading=o,this.toast=n,this.compressImage=a,this.genericService=t,this.empresa="",this.toolbar=[[{heading:["h1","h2","h3","h4","h5","h6"]}],["bold","italic"],["underline","strike"],["ordered_list","bullet_list"],["align_left","align_center","align_right","align_justify"],["horizontal_rule","format_clear"],["text_color","background_color"]],this.documentos=[],this.especialidades=[],this.especialidad="",this.document={texto:"",descripcion:""},this.convocatoria=""}ngOnInit(){this.editor=new s.ML}uploadImage(){var o=this;return(0,u.Z)(function*(){o.logotipo=yield o.compressImage.returnImageCompress()})()}agregarEspecialidad(){this.especialidades.push(this.especialidad),this.especialidad=""}eliminar(o){this.especialidades.splice(o,1)}agregarDocumentos(){this.documentos.push(this.document),this.document={texto:"",descripcion:""}}eliminarDocumentos(o){this.documentos.splice(o,1)}save(){var o=this;return(0,u.Z)(function*(){o.loading.setData({animated:!0,message:"Subiendo...",spinner:"dots"}),yield o.loading.create(),yield o.loading.show();const n=new FormData;n.append("logotipo",o.compressImage.dataURItoBlob(o.logotipo)),o.genericService.postWhitImage("negocio",n).pipe((0,Z.w)(function(){var a=(0,u.Z)(function*(t){let m;if(m="string"!=typeof o.convocatoria?(0,s.io)(o.convocatoria):o.convocatoria,o.documentoOpcional){const f=new FormData;f.append("documento",o.documentoOpcional),yield o.genericService.updateWhitImage("negocio",t.id,f).toPromise()}return o.genericService.update("negocio",t.id,{especialidades:o.especialidades,documentos:o.documentos,empresa:o.empresa,convocatoria:m}).toPromise()});return function(t){return a.apply(this,arguments)}}()),(0,C.b)(function(){var a=(0,u.Z)(function*(t){console.log(t),o.empresa="",o.logotipo=null,o.especialidad="",o.especialidades=[],o.documentos=[],o.document={texto:"",descripcion:""},o.convocatoria="",o.documentoOpcional=null,yield o.loading.hide(),o.toast.success("Nueva Oportunidad de Negocio","Creada")});return function(t){return a.apply(this,arguments)}}())).subscribe()})()}onFileSelected(o){this.documentoOpcional=o.target.files[0],o.target.value=""}click(){document.getElementById("opcional").click()}}return(i=l).\u0275fac=function(o){return new(o||i)(e.Y36(O.b),e.Y36(T._W),e.Y36(v.Y),e.Y36(b.M))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-crear-oportunidad"]],decls:53,vars:20,consts:[[3,"fullscreen"],[1,"mt-5","px-3"],[1,"container"],[1,"my-3"],["button","",3,"click"],["style","max-width: 200px; max-height: 330px;",3,"src",4,"ngIf"],["type","text","labelPlacement","floating","label","Nombre de la empresa",3,"ngModel","ngModelChange"],["type","text","labelPlacement","floating","label","Ingrese Nombre del Documento",3,"ngModel","ngModelChange"],["slot","end",3,"disabled","click"],["slot","icon-only","name","add"],["labelPlacement","floating","label","Ingrese Descripci\xf3n",3,"ngModel","ngModelChange"],["class","my-2",4,"ngIf"],[4,"ngFor","ngForOf"],["type","text","labelPlacement","floating","label","Ingrese Especialidad",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf","ngForAs"],[1,"NgxEditor__Wrapper"],[3,"toolbar","editor"],[3,"editor","ngModel","placeholder","ngModelChange"],["color","danger"],["expand","block","fill","clear","slot","end",3,"color","click"],["id","opcional","type","file","accept",".pdf",2,"display","none",3,"change"],["expand","block","shape","round",1,"my-3",3,"disabled","click"],[2,"max-width","200px","max-height","330px",3,"src"],[1,"my-2"],["slot","end",3,"click"],["slot","icon-only","name","close"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br")(2,"br"),e.TgZ(3,"div",1)(4,"div",2)(5,"h1",3)(6,"b"),e._uU(7,"Crear Oportunidad de Negocio"),e.qZA()(),e.TgZ(8,"ion-item",4),e.NdJ("click",function(){return n.uploadImage()}),e.TgZ(9,"ion-label"),e._uU(10,"Subir Imagen"),e.qZA(),e.YNc(11,P,1,1,"ion-img",5),e.qZA(),e.TgZ(12,"ion-item")(13,"ion-input",6),e.NdJ("ngModelChange",function(t){return n.empresa=t}),e.qZA()(),e.TgZ(14,"h3",3)(15,"b"),e._uU(16,"Agregar Documentos"),e.qZA()(),e.TgZ(17,"ion-item")(18,"ion-input",7),e.NdJ("ngModelChange",function(t){return n.document.texto=t}),e.qZA(),e.TgZ(19,"ion-button",8),e.NdJ("click",function(){return n.agregarDocumentos()}),e._UZ(20,"ion-icon",9),e.qZA()(),e.TgZ(21,"ion-item")(22,"ion-textarea",10),e.NdJ("ngModelChange",function(t){return n.document.descripcion=t}),e.qZA()(),e.YNc(23,M,3,0,"h5",11),e.YNc(24,x,7,2,"ion-item",12),e.TgZ(25,"h3",3)(26,"b"),e._uU(27,"Agregar Especialidades"),e.qZA()(),e.TgZ(28,"ion-item")(29,"ion-input",13),e.NdJ("ngModelChange",function(t){return n.especialidad=t}),e.qZA(),e.TgZ(30,"ion-button",8),e.NdJ("click",function(){return n.agregarEspecialidad()}),e._UZ(31,"ion-icon",9),e.qZA()(),e.YNc(32,A,5,1,"ion-item",14),e.qZA()(),e.TgZ(33,"div",2)(34,"h3",3)(35,"b"),e._uU(36,"Informaci\xf3n Adicional "),e.qZA()(),e.TgZ(37,"div",15),e._UZ(38,"ngx-editor-menu",16),e.TgZ(39,"ngx-editor",17),e.NdJ("ngModelChange",function(t){return n.convocatoria=t}),e.qZA()(),e.TgZ(40,"ion-item")(41,"ion-label"),e._uU(42," PDF con informaci\xf3n adicional"),e.TgZ(43,"ion-text",18),e._uU(44," * "),e.qZA(),e.TgZ(45,"p"),e._uU(46,"(formato PDF)"),e.qZA()(),e.TgZ(47,"ion-button",19),e.NdJ("click",function(){return n.click()}),e.TgZ(48,"ion-label"),e._uU(49),e.qZA(),e.TgZ(50,"input",20),e.NdJ("change",function(t){return n.onFileSelected(t)}),e.qZA()()(),e.TgZ(51,"ion-button",21),e.NdJ("click",function(){return n.save()}),e._uU(52," Crear "),e.qZA()()()),2&o&&(e.Q6J("fullscreen",!0),e.xp6(11),e.Q6J("ngIf",n.logotipo),e.xp6(2),e.Q6J("ngModel",n.empresa),e.xp6(5),e.Q6J("ngModel",n.document.texto),e.xp6(1),e.Q6J("disabled",""===n.document.texto),e.xp6(3),e.Q6J("ngModel",n.document.descripcion),e.xp6(1),e.Q6J("ngIf",n.documentos.length>0),e.xp6(1),e.Q6J("ngForOf",n.documentos),e.xp6(5),e.Q6J("ngModel",n.especialidad),e.xp6(1),e.Q6J("disabled",!n.especialidad||""===n.especialidad),e.xp6(2),e.Q6J("ngForOf",n.especialidades)("ngForAs",n.index),e.xp6(6),e.Q6J("toolbar",n.toolbar)("editor",n.editor),e.xp6(1),e.Q6J("editor",n.editor)("ngModel",n.convocatoria)("placeholder","Descripci\xf3n del evento"),e.xp6(8),e.Q6J("color",n.documentoOpcional?"success":"primary"),e.xp6(2),e.Oqu(n.documentoOpcional?"Archivo Cargado":"Seleccionar archivo"),e.xp6(2),e.Q6J("disabled",!n.logotipo||""===n.empresa))},dependencies:[p.sg,p.O5,g.JJ,g.On,c.YG,c.W2,c.gu,c.Xz,c.pK,c.Ie,c.Q$,c.yW,c.g2,c.j9,s.tP,s.Mn]}),l})()}];let y=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(J),h.Bz]}),l})(),F=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,g.u5,g.UX,c.Pc,s.FP,y]}),l})()}}]);