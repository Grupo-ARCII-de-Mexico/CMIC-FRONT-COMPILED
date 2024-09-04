"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2182],{2182:(Y,g,n)=>{n.r(g),n.d(g,{SliderPageModule:()=>C});var h=n(6814),s=n(95),a=n(9843),m=n(9085),c=n(5861),f=n(4664),v=n(6528),b=n(553),e=n(6689),S=n(2264),F=n(9403),P=n(2425),x=n(930);const y=[{path:"",component:(()=>{var r;class l{constructor(t,i,o,u,p,U,I,J){this.fb=t,this.compress=i,this.sliderRepo=o,this.toast=u,this.genericS=p,this.params=U,this.nav=I,this.modalC=J,this.editar=!1,this.uri=b.N.image+"sliders/"}ngOnInit(){var t=this;this.sliderForm=this.fb.group({texto:[null],uri:[null],button:[null]}),this.params.params.pipe((0,f.w)(i=>{var o;return this.identificador=Number(null!==(o=null==i?void 0:i.identificador)&&void 0!==o?o:0),this.sliderRepo.slider$})).subscribe(function(){var i=(0,c.Z)(function*(o){if(0!==t.identificador){const u=o.find(p=>p.id===t.identificador);t.sliderForm.setValue({texto:u.texto,uri:u.uri,button:u.button}),t.image=t.uri+u.imagen,t.editar=!0}});return function(o){return i.apply(this,arguments)}}())}addImage(){var t=this;return(0,c.Z)(function*(){t.image=yield t.compress.returnImageCompress();const i=yield t.modalC.create({component:v.n,animated:!0,componentProps:{imageUrl:t.image}});i.onDidDismiss().then(({data:o})=>{t.image=null!=o?o:null}),yield i.present()})()}save(){var t=this;return(0,c.Z)(function*(){if(t.editar)return t.edit();const i=new FormData;t.image&&i.append("imagen",t.compress.dataURItoBlob(t.image)),i.append("texto",t.sliderForm.controls.texto.value),i.append("uri",t.sliderForm.controls.uri.value),i.append("button",t.sliderForm.controls.button.value),t.genericS.post("sliders",i).subscribe(o=>{t.toast.success("Slider Creado"),t.sliderRepo.addSlider(o),t.image=null,t.sliderForm.reset()})})()}edit(){const t=new FormData;this.image.includes("data:")&&t.append("imagen",this.compress.dataURItoBlob(this.image)),t.append("texto",this.sliderForm.controls.texto.value),t.append("uri",this.sliderForm.controls.uri.value),t.append("button",this.sliderForm.controls.button.value),this.genericS.updateWhitImage("sliders",this.identificador,t).subscribe(i=>{this.toast.success("Slider Actualizado"),this.sliderRepo.updateSlider(this.identificador,i),this.image=null,this.sliderForm.reset(),this.nav.navigateBack("/dashboard/website/slider-ver")})}}return(r=l).\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(S.Y),e.Y36(F.t),e.Y36(P._W),e.Y36(x.M),e.Y36(m.gz),e.Y36(a.SH),e.Y36(a.IN))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-slider"]],decls:19,vars:6,consts:[[3,"fullscreen"],["color","dark",1,"py-2"],[1,"ms-2","ms-md-5","mb-0","titulo"],[1,"palito","ms-2","ms-md-5","mt-0","mb-3"],[1,"container","px-5"],[3,"formGroup"],["lines","none"],["slot","start","shape","round",3,"click"],["slot","end",2,"max-height","150px","width","200px",3,"src"],["type","text","label","Ingrese texto al Slider","labelPlacement","floating","formControlName","texto",1,"my-2","border"],["type","text","label","Ingrese texto al bot\xf3n","labelPlacement","floating","formControlName","button",1,"my-2","border"],["type","text","label","Ingrese una URL al bot\xf3n","labelPlacement","floating","formControlName","uri",1,"my-2","border"],["expand","block","shape","round",3,"disabled","click"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br"),e.TgZ(2,"ion-toolbar",1),e._UZ(3,"br"),e.TgZ(4,"h1",2)(5,"b"),e._uU(6),e.qZA()(),e._UZ(7,"hr",3),e.qZA(),e.TgZ(8,"div",4)(9,"form",5)(10,"ion-item",6)(11,"ion-button",7),e.NdJ("click",function(){return i.addImage()}),e._uU(12," Subir Fotograf\xeda "),e.qZA(),e._UZ(13,"ion-img",8),e.qZA(),e._UZ(14,"ion-input",9)(15,"ion-input",10)(16,"ion-input",11),e.TgZ(17,"ion-button",12),e.NdJ("click",function(){return i.save()}),e._uU(18),e.qZA()()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(6),e.hij(" ",i.editar?"Editar":"Crear"," Slider"),e.xp6(3),e.Q6J("formGroup",i.sliderForm),e.xp6(4),e.Q6J("src",i.image),e.xp6(4),e.Q6J("disabled",!i.image),e.xp6(1),e.hij(" ",i.editar?"Guardar Cambios":"Crear Slider"," "))},dependencies:[s._Y,s.JJ,s.JL,a.YG,a.W2,a.Xz,a.pK,a.Ie,a.sr,a.j9,s.sg,s.u]}),l})()}];let Z=(()=>{var r;class l{}return(r=l).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.Bz.forChild(y),m.Bz]}),l})(),C=(()=>{var r;class l{}return(r=l).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[h.ez,s.u5,a.Pc,s.UX,Z]}),l})()}}]);