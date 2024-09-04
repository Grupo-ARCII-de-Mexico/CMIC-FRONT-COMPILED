"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2182],{2182:(C,g,o)=>{o.r(g),o.d(g,{SliderPageModule:()=>y});var h=o(6814),s=o(95),n=o(9843),m=o(9085),c=o(5861),f=o(4664),v=o(553),e=o(6689),b=o(2264),S=o(9403),F=o(2425),x=o(930);const P=[{path:"",component:(()=>{var r;class l{constructor(t,i,a,u,p,I,U){this.fb=t,this.compress=i,this.sliderRepo=a,this.toast=u,this.genericS=p,this.params=I,this.nav=U,this.editar=!1,this.uri=v.N.image+"sliders/"}ngOnInit(){var t=this;this.sliderForm=this.fb.group({texto:[null],uri:[null],button:[null]}),this.params.params.pipe((0,f.w)(i=>{var a;return this.identificador=Number(null!==(a=null==i?void 0:i.identificador)&&void 0!==a?a:0),this.sliderRepo.slider$})).subscribe(function(){var i=(0,c.Z)(function*(a){if(0!==t.identificador){const u=a.find(p=>p.id===t.identificador);t.sliderForm.setValue({texto:u.texto,uri:u.uri,button:u.button}),t.image=t.uri+u.imagen,t.editar=!0}});return function(a){return i.apply(this,arguments)}}())}addImage(){var t=this;return(0,c.Z)(function*(){t.image=yield t.compress.returnImageCompress()})()}save(){var t=this;return(0,c.Z)(function*(){if(t.editar)return t.edit();const i=new FormData;t.image&&i.append("imagen",t.compress.dataURItoBlob(t.image)),i.append("texto",t.sliderForm.controls.texto.value),i.append("uri",t.sliderForm.controls.uri.value),i.append("button",t.sliderForm.controls.button.value),t.genericS.postWhitImage("sliders",i).subscribe(a=>{t.toast.success("Slider Creado"),t.sliderRepo.addSlider(a),t.image=null,t.sliderForm.reset()})})()}edit(){const t=new FormData;this.image.includes("data:")&&t.append("imagen",this.compress.dataURItoBlob(this.image)),t.append("texto",this.sliderForm.controls.texto.value),t.append("uri",this.sliderForm.controls.uri.value),t.append("button",this.sliderForm.controls.button.value),this.genericS.updateWhitImage("sliders",this.identificador,t).subscribe(i=>{this.toast.success("Slider Actualizado"),this.sliderRepo.updateSlider(this.identificador,i),this.image=null,this.sliderForm.reset(),this.nav.navigateBack("/dashboard/website/slider-ver")})}}return(r=l).\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(b.Y),e.Y36(S.t),e.Y36(F._W),e.Y36(x.M),e.Y36(m.gz),e.Y36(n.SH))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-slider"]],decls:19,vars:6,consts:[[3,"fullscreen"],["color","dark",1,"py-2"],[1,"ms-2","ms-md-5","mb-0","titulo"],[1,"palito","ms-2","ms-md-5","mt-0","mb-3"],[1,"container","px-5"],[3,"formGroup"],["lines","none"],["slot","start","shape","round",3,"click"],["slot","end",2,"max-height","150px","width","200px",3,"src"],["type","text","label","Ingrese texto al Slider","labelPlacement","floating","formControlName","texto",1,"my-2","border"],["type","text","label","Ingrese texto al bot\xf3n","labelPlacement","floating","formControlName","button",1,"my-2","border"],["type","text","label","Ingrese una URL al bot\xf3n","labelPlacement","floating","formControlName","uri",1,"my-2","border"],["expand","block","shape","round",3,"disabled","click"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br"),e.TgZ(2,"ion-toolbar",1),e._UZ(3,"br"),e.TgZ(4,"h1",2)(5,"b"),e._uU(6),e.qZA()(),e._UZ(7,"hr",3),e.qZA(),e.TgZ(8,"div",4)(9,"form",5)(10,"ion-item",6)(11,"ion-button",7),e.NdJ("click",function(){return i.addImage()}),e._uU(12," Subir Fotograf\xeda "),e.qZA(),e._UZ(13,"ion-img",8),e.qZA(),e._UZ(14,"ion-input",9)(15,"ion-input",10)(16,"ion-input",11),e.TgZ(17,"ion-button",12),e.NdJ("click",function(){return i.save()}),e._uU(18),e.qZA()()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(6),e.hij(" ",i.editar?"Editar":"Crear"," Slider"),e.xp6(3),e.Q6J("formGroup",i.sliderForm),e.xp6(4),e.Q6J("src",i.image),e.xp6(4),e.Q6J("disabled",!i.image),e.xp6(1),e.hij(" ",i.editar?"Guardar Cambios":"Crear Slider"," "))},dependencies:[s._Y,s.JJ,s.JL,n.YG,n.W2,n.Xz,n.pK,n.Ie,n.sr,n.j9,s.sg,s.u]}),l})()}];let Z=(()=>{var r;class l{}return(r=l).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.Bz.forChild(P),m.Bz]}),l})(),y=(()=>{var r;class l{}return(r=l).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[h.ez,s.u5,n.Pc,s.UX,Z]}),l})()}}]);