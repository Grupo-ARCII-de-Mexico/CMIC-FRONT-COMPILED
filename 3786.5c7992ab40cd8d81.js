"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3786],{3786:(Y,g,r)=>{r.r(g),r.d(g,{BoletinesPageModule:()=>U});var f=r(6814),l=r(95),a=r(9843),p=r(9085),h=r(5861),u=r(8915),v=r(4664),b=r(553),e=r(6689),B=r(2264),F=r(4846),Z=r(2425),P=r(930),y=r(6533);const J=[{path:"",component:(()=>{var o;class d{constructor(i,t,n,s,m,M,R,T){this.fb=i,this.compress=t,this.sliderRepo=n,this.toast=s,this.genericS=m,this.params=M,this.nav=R,this.authRepo=T,this.toolbar=[[{heading:["h1","h2","h3","h4","h5","h6"]}],["bold","italic"],["underline","strike"],["ordered_list","bullet_list"],["align_left","align_center","align_right","align_justify"],["horizontal_rule","format_clear"],["text_color","background_color"]],this.editar=!1,this.uri=b.N.image+"boletines/"}ngOnInit(){var i=this;this.editor=new u.ML,this.authRepo.user$.subscribe(t=>this.name=t[0].names),this.sliderForm=this.fb.group({titulo:[null],informacion:[null]}),this.params.params.pipe((0,v.w)(t=>{var n;return this.identificador=Number(null!==(n=null==t?void 0:t.identificador)&&void 0!==n?n:0),this.sliderRepo.boletin$})).subscribe(function(){var t=(0,h.Z)(function*(n){if(0!==i.identificador){const s=n.find(m=>m.id===i.identificador);i.sliderForm.setValue({titulo:s.titulo,informacion:s.informacion}),i.image=i.uri+s.imagen,i.editar=!0}});return function(n){return t.apply(this,arguments)}}())}addImage(){var i=this;return(0,h.Z)(function*(){i.image=yield i.compress.returnImageCompress()})()}save(){var i=this;return(0,h.Z)(function*(){if(i.editar)return i.edit();const t=new FormData;let n;i.image&&t.append("imagen",i.compress.dataURItoBlob(i.image)),n="string"!=typeof i.sliderForm.controls.informacion.value?(0,u.io)(i.sliderForm.controls.informacion.value):i.sliderForm.controls.informacion.value,t.append("titulo",i.sliderForm.controls.titulo.value),t.append("autor",i.name),t.append("informacion",n);const s=i.sliderForm.controls.titulo.value.replace(/ /g,"-");t.append("identificador",s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()),i.genericS.postWhitImage("boletines",t).subscribe(m=>{i.toast.success("Bolet\xedn Creado"),i.sliderRepo.addBoletin(m),i.image=null,i.sliderForm.reset()})})()}edit(){const i=new FormData;let t;this.image.includes("data:")&&i.append("imagen",this.compress.dataURItoBlob(this.image)),i.append("titulo",this.sliderForm.controls.titulo.value),i.append("autor",this.name),t="string"!=typeof this.sliderForm.controls.informacion.value?(0,u.io)(this.sliderForm.controls.informacion.value):this.sliderForm.controls.informacion.value;const n=this.sliderForm.controls.titulo.value.replace(/ /g,"-");i.append("identificador",n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()),i.append("informacion",t),this.genericS.updateWhitImage("boletines",this.identificador,i).subscribe(s=>{this.toast.success("Bolet\xedn Actualizado"),this.sliderRepo.updateBoletin(this.identificador,s),this.image=null,this.sliderForm.reset(),this.nav.navigateBack("/dashboard/website/boletines-ver")})}}return(o=d).\u0275fac=function(i){return new(i||o)(e.Y36(l.qu),e.Y36(B.Y),e.Y36(F.a),e.Y36(Z._W),e.Y36(P.M),e.Y36(p.gz),e.Y36(a.SH),e.Y36(y.O))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-boletines"]],decls:20,vars:10,consts:[[3,"fullscreen"],["color","dark",1,"py-2"],[1,"ms-2","ms-md-5","mb-0","titulo"],[1,"palito","ms-2","ms-md-5","mt-0","mb-3"],[1,"container","px-5"],[3,"formGroup"],["lines","none"],["slot","start","shape","round",3,"click"],["slot","end",2,"max-height","150px","width","200px",3,"src"],["type","text","label","Titulo","labelPlacement","floating","formControlName","titulo",1,"my-2","border"],[1,"NgxEditor__Wrapper"],[3,"toolbar","editor"],["formControlName","informacion",3,"editor","placeholder"],["expand","block","shape","round",3,"disabled","click"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br"),e.TgZ(2,"ion-toolbar",1),e._UZ(3,"br"),e.TgZ(4,"h1",2)(5,"b"),e._uU(6),e.qZA()(),e._UZ(7,"hr",3),e.qZA(),e.TgZ(8,"div",4)(9,"form",5)(10,"ion-item",6)(11,"ion-button",7),e.NdJ("click",function(){return t.addImage()}),e._uU(12," Subir Fotograf\xeda "),e.qZA(),e._UZ(13,"ion-img",8),e.qZA(),e._UZ(14,"ion-input",9),e.TgZ(15,"div",10),e._UZ(16,"ngx-editor-menu",11)(17,"ngx-editor",12),e.qZA(),e.TgZ(18,"ion-button",13),e.NdJ("click",function(){return t.save()}),e._uU(19),e.qZA()()()()),2&i&&(e.Q6J("fullscreen",!0),e.xp6(6),e.hij(" ",t.editar?"Editar":"Crear"," Boletines"),e.xp6(3),e.Q6J("formGroup",t.sliderForm),e.xp6(4),e.Q6J("src",t.image),e.xp6(3),e.Q6J("toolbar",t.toolbar)("editor",t.editor),e.xp6(1),e.Q6J("editor",t.editor)("placeholder","Descripci\xf3n del evento"),e.xp6(1),e.Q6J("disabled",!t.image),e.xp6(1),e.hij(" ",t.editar?"Guardar Cambios":"Crear Bolet\xedn"," "))},dependencies:[l._Y,l.JJ,l.JL,u.tP,u.Mn,l.sg,l.u,a.YG,a.W2,a.Xz,a.pK,a.Ie,a.sr,a.j9]}),d})()}];let C=(()=>{var o;class d{}return(o=d).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(J),p.Bz]}),d})(),U=(()=>{var o;class d{}return(o=d).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.ez,l.u5,u.FP,l.UX,a.Pc,C]}),d})()}}]);