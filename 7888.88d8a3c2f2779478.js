"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7888],{7888:(M,h,n)=>{n.r(h),n.d(h,{CursosPageModule:()=>x});var v=n(6814),l=n(95),a=n(9843),f=n(9085),m=n(5861),p=n(8915),C=n(4664),F=n(6528),b=n(553),e=n(6689),Z=n(2264),y=n(1012),P=n(2425),I=n(930),U=n(7153);const T=[{path:"",component:(()=>{var t;class u{constructor(o,i,r,s,d,c,A,N,Y){this.fb=o,this.compress=i,this.sliderRepo=r,this.toast=s,this.genericS=d,this.params=c,this.nav=A,this.modalC=N,this.loading=Y,this.toolbar=[[{heading:["h1","h2","h3","h4","h5","h6"]}],["bold","italic"],["underline","strike"],["ordered_list","bullet_list"],["align_left","align_center","align_right","align_justify"],["horizontal_rule","format_clear"],["text_color","background_color"]],this.editar=!1,this.uri=b.N.image+"boletines/"}ngOnInit(){var o=this;this.editor=new p.ML,this.sliderForm=this.fb.group({titulo:[null],informacion:[null],precio:[null],tipo:[null]}),this.params.params.pipe((0,C.w)(i=>{var r;return this.identificador=Number(null!==(r=null==i?void 0:i.identificador)&&void 0!==r?r:0),this.sliderRepo.curso$})).subscribe(function(){var i=(0,m.Z)(function*(r){if(0!==o.identificador){const s=r.find(d=>d.id===o.identificador);o.sliderForm.setValue({titulo:s.titulo,informacion:s.informacion,precio:s.precio,tipo:s.tipo}),o.image=o.uri+s.imagen,o.editar=!0}});return function(r){return i.apply(this,arguments)}}())}addImage(){var o=this;return(0,m.Z)(function*(){o.image=yield o.compress.returnImageCompress();const i=yield o.modalC.create({component:F.n,animated:!0,componentProps:{imageUrl:o.image}});i.onDidDismiss().then(({data:r})=>{o.image=null!=r?r:null}),yield i.present()})()}save(){var o=this;return(0,m.Z)(function*(){if(yield o.loading.setData({animated:!0,message:"Guardando..."}),yield o.loading.create(),yield o.loading.show(),o.editar)return o.edit();const i=new FormData;o.image&&i.append("imagen",o.compress.dataURItoBlob(o.image));let r="";o.sliderForm.controls.informacion.value&&(r="string"!=typeof o.sliderForm.controls.informacion.value?(0,p.io)(o.sliderForm.controls.informacion.value):o.sliderForm.controls.informacion.value),i.append("titulo",o.sliderForm.controls.titulo.value),r&&i.append("informacion",r),i.append("precio",o.sliderForm.controls.precio.value),i.append("tipo",o.sliderForm.controls.tipo.value);const s=o.sliderForm.controls.titulo.value.replace(/ /g,"-");i.append("identificador",s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()),o.genericS.postWhitImage("cursos",i).subscribe(function(){var d=(0,m.Z)(function*(c){o.toast.success("Curso Creado"),o.sliderRepo.addCurso(c),o.image=null,o.sliderForm.reset(),yield o.loading.hide()});return function(c){return d.apply(this,arguments)}}())})()}edit(){var o=this;return(0,m.Z)(function*(){const i=new FormData;let r;o.image.includes("data:")&&i.append("imagen",o.compress.dataURItoBlob(o.image)),i.append("titulo",o.sliderForm.controls.titulo.value),o.sliderForm.controls.informacion.value&&(r="string"!=typeof o.sliderForm.controls.informacion.value?(0,p.io)(o.sliderForm.controls.informacion.value):o.sliderForm.controls.informacion.value);const s=o.sliderForm.controls.titulo.value.replace(/ /g,"-");i.append("identificador",s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()),r&&i.append("informacion",r),i.append("precio",o.sliderForm.controls.precio.value),i.append("tipo",o.sliderForm.controls.tipo.value),o.genericS.updateWhitImage("cursos",o.identificador,i).subscribe(function(){var d=(0,m.Z)(function*(c){o.toast.success("Curso Actualizado"),o.sliderRepo.updateCurso(o.identificador,c),o.image=null,o.sliderForm.reset(),o.nav.navigateBack("/dashboard/website/cursos-ver"),yield o.loading.show()});return function(c){return d.apply(this,arguments)}}())})()}}return(t=u).\u0275fac=function(o){return new(o||t)(e.Y36(l.qu),e.Y36(Z.Y),e.Y36(y.U),e.Y36(P._W),e.Y36(I.M),e.Y36(f.gz),e.Y36(a.SH),e.Y36(a.IN),e.Y36(U.b))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-cursos"]],decls:29,vars:10,consts:[[3,"fullscreen"],["color","dark",1,"py-2"],[1,"ms-2","ms-md-5","mb-0","titulo"],[1,"palito","ms-2","ms-md-5","mt-0","mb-3"],[1,"container","px-5"],[3,"formGroup"],["lines","none"],["slot","start","shape","round",3,"click"],["slot","end",2,"max-height","150px","width","200px",3,"src"],["type","text","label","Titulo","labelPlacement","floating","formControlName","titulo",1,"my-2","border"],["type","number","label","Precio","labelPlacement","floating","formControlName","precio",1,"my-2","border"],["label","Instituci\xf3n del Curso","labelPlacement","floating","formControlName","tipo"],["value","FIC"],["value","ITC"],["value","ICIC"],[1,"NgxEditor__Wrapper"],[3,"toolbar","editor"],["formControlName","informacion",3,"editor","placeholder"],["expand","block","shape","round",3,"disabled","click"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br"),e.TgZ(2,"ion-toolbar",1),e._UZ(3,"br"),e.TgZ(4,"h1",2)(5,"b"),e._uU(6),e.qZA()(),e._UZ(7,"hr",3),e.qZA(),e.TgZ(8,"div",4)(9,"form",5)(10,"ion-item",6)(11,"ion-button",7),e.NdJ("click",function(){return i.addImage()}),e._uU(12," Subir Fotograf\xeda "),e.qZA(),e._UZ(13,"ion-img",8),e.qZA(),e._UZ(14,"ion-input",9)(15,"ion-input",10),e.TgZ(16,"ion-item")(17,"ion-select",11)(18,"ion-select-option",12),e._uU(19,"FIC"),e.qZA(),e.TgZ(20,"ion-select-option",13),e._uU(21,"ITC"),e.qZA(),e.TgZ(22,"ion-select-option",14),e._uU(23,"ICIC"),e.qZA()()(),e.TgZ(24,"div",15),e._UZ(25,"ngx-editor-menu",16)(26,"ngx-editor",17),e.qZA(),e.TgZ(27,"ion-button",18),e.NdJ("click",function(){return i.save()}),e._uU(28),e.qZA()()()()),2&o&&(e.Q6J("fullscreen",!0),e.xp6(6),e.hij(" ",i.editar?"Editar":"Crear"," Cursos"),e.xp6(3),e.Q6J("formGroup",i.sliderForm),e.xp6(4),e.Q6J("src",i.image),e.xp6(12),e.Q6J("toolbar",i.toolbar)("editor",i.editor),e.xp6(1),e.Q6J("editor",i.editor)("placeholder","Descripci\xf3n del evento"),e.xp6(1),e.Q6J("disabled",!i.image),e.xp6(1),e.hij(" ",i.editar?"Guardar Cambios":"Crear Curso"," "))},dependencies:[l._Y,l.JJ,l.JL,l.sg,l.u,p.tP,p.Mn,a.YG,a.W2,a.Xz,a.pK,a.Ie,a.t9,a.n0,a.sr,a.as,a.QI,a.j9]}),u})()}];let J=(()=>{var t;class u{}return(t=u).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.Bz.forChild(T),f.Bz]}),u})(),x=(()=>{var t;class u{}return(t=u).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.ez,l.u5,l.UX,p.FP,a.Pc,J]}),u})()}}]);