"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3132],{3132:(N,f,n)=>{n.r(f),n.d(f,{ApoyosDnPageModule:()=>z});var v=n(6814),s=n(95),a=n(9843),m=n(9085),u=n(5861),g=n(6676),h=n(5545),x=n(553),e=n(6689),y=n(930),Z=n(2425),A=n(7153),b=n(4433),P=n(9659);function C(t,l){if(1&t){const i=e.EpF();e.TgZ(0,"form",30),e.NdJ("ngSubmit",function(){e.CHM(i);const r=e.oxw(2);return e.KtG(r.save())}),e.TgZ(1,"ion-item"),e._UZ(2,"ion-input",31),e.qZA(),e.TgZ(3,"ion-item")(4,"ion-input",32)(5,"div",33),e._uU(6,"Nombre Completo "),e.TgZ(7,"ion-text",34),e._uU(8,"*"),e.qZA()()()(),e.TgZ(9,"ion-item")(10,"ion-input",35)(11,"div",33),e._uU(12,"RFC de la empresa "),e.TgZ(13,"ion-text",34),e._uU(14,"*"),e.qZA()()()(),e.TgZ(15,"ion-item")(16,"ion-input",36)(17,"div",33),e._uU(18,"Tel\xe9fono "),e.TgZ(19,"ion-text",34),e._uU(20,"*"),e.qZA()()()(),e.TgZ(21,"ion-item")(22,"ion-input",37)(23,"div",33),e._uU(24,"Correo "),e.TgZ(25,"ion-text",34),e._uU(26,"*"),e.qZA()()()(),e.TgZ(27,"ion-item"),e._UZ(28,"ion-input",38),e.qZA(),e.TgZ(29,"ion-item")(30,"ion-input",39)(31,"div",33),e._uU(32,"Cargo en la empresa "),e._UZ(33,"ion-text",34),e.qZA()()(),e.TgZ(34,"ion-item")(35,"ion-input",40)(36,"div",33),e._uU(37,"Delegaci\xf3n "),e._UZ(38,"ion-text",34),e.qZA()()(),e.TgZ(39,"ion-button",41),e._uU(40," Registrarse "),e.qZA()()}if(2&t){const i=e.oxw(2);e.Q6J("formGroup",i.usuarioForm),e.xp6(39),e.Q6J("disabled",i.usuarioForm.invalid)}}function T(t,l){if(1&t&&(e.TgZ(0,"div",14)(1,"div",15)(2,"div",16)(3,"ion-card",17)(4,"ion-card-content",18),e._UZ(5,"ion-img",19),e.qZA()()()(),e.TgZ(6,"div",20)(7,"div",21)(8,"ion-card",22)(9,"ion-accordion-group",23)(10,"ion-accordion",24)(11,"ion-item",25)(12,"ion-card-title",26)(13,"b",27),e._uU(14,"Registro"),e.qZA()()(),e.TgZ(15,"div",28),e.YNc(16,C,41,2,"form",29),e.qZA()()()()()()()),2&t){const i=e.oxw();e.xp6(5),e.Q6J("src",i.uri+i.evento.imagen),e.xp6(11),e.Q6J("ngIf",i.usuarioForm)}}g.locale("es");const U=[{path:"",component:(()=>{var t;class l{constructor(o,r,d,p,c,I){this.route=o,this.genericS=r,this.toast=d,this.loading=p,this.fb=c,this.alert=I,this.uri=x.N.image+"apoyos-dn/",this.iframe=!1}ngOnInit(){var o=this;(0,h.w)(),this.route.params.subscribe(r=>{this.genericS.getOne("desastres",r.identificador).subscribe(function(){var p=(0,u.Z)(function*(c){o.evento=c,o.cerrarRegistro(o.evento)});return function(c){return p.apply(this,arguments)}}())}),this.usuarioForm=this.fb.group({nombre:[null,s.kI.required],telefono:[null,s.kI.required],email:[null,[s.kI.required,s.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],rfc:[],cargo:[],delegacion:[],organizacion:[],empresa:[],numAfiliado:[]})}mon(o){return g(new Date(o)).format("LL")+" a las "+g(new Date(o)).utc().format("LTS")}save(){var o=this;return(0,u.Z)(function*(){yield o.loading.setData({animated:!0,spinner:"dots",translucent:!0,message:"Preparando Registro..."}),yield o.loading.create(),yield o.loading.show(),o.genericS.post("apoyos-dn",{...o.usuarioForm.value,desastre:o.evento.id}).subscribe(function(){var r=(0,u.Z)(function*(d){yield o.loading.hide(),o.toast.success("Gracias Por Unirte"),o.usuarioForm.reset()});return function(d){return r.apply(this,arguments)}}(),function(){var r=(0,u.Z)(function*(d){o.toast.error("Sucedi\xf3 un Error intente m\xe1s tarde"),yield o.loading.hide()});return function(d){return r.apply(this,arguments)}}())})()}cerrarRegistro(o){var r=this;return(0,u.Z)(function*(){console.log(o),o.active||(yield r.alert.setData({header:"Registro Cerrado",message:"Lo sentimos el registro se encuentra cerrado",backdropDismiss:!1,keyboardClose:!1,animated:!0}))})()}}return(t=l).\u0275fac=function(o){return new(o||t)(e.Y36(m.gz),e.Y36(y.M),e.Y36(Z._W),e.Y36(A.b),e.Y36(s.qu),e.Y36(b.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-apoyos-dn"]],decls:17,vars:2,consts:[[2,"background-color","#d8d8d8",3,"fullscreen"],[1,"titulo","row",2,"z-index","0"],[1,"my-4"],[1,"h",2,"z-index","1"],["class","bg-white row",4,"ngIf"],[1,"titulo2"],[1,"d-none","d-md-block"],[1,"d-flex","mt-3"],[1,"ms-auto","my-auto","text-white"],["src","../../../assets/9ANOS_ARCII_blanco.png",1,"me-auto","ms-3",2,"width","70px"],[1,"d-block","d-md-none"],[1,"mt-3"],[1,"ms-3","my-auto","text-white"],["src","../../../assets/9ANOS_ARCII_blanco.png",1,"ms-5",2,"width","70px"],[1,"bg-white","row"],[1,"d-flex","container","col-md-7"],[1,"container","d-flex","mt-4","mt-md-0"],["mode","ios",1,"shadow","mt-5","mb-auto","mx-auto"],[1,"izquierda","d-flex"],[1,"m-auto","img-fluid",2,"max-width","500px",3,"src"],[1,"col-md-4","d-flex","container"],[1,"container","mt-3"],[1,"shadow","mx-auto","w-100"],["value","first",2,"z-index","1"],["value","first"],["slot","header","color","secondary"],[1,"text-white"],[2,"font-size","20px"],["slot","content",1,"ion-padding"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["labelPlacement","floating","label","No.Afiliado","formControlName","numAfiliado","type","text"],["labelPlacement","floating","formControlName","nombre","type","text"],["slot","label"],["color","danger"],["labelPlacement","floating","formControlName","rfc","type","text"],["labelPlacement","floating","formControlName","telefono","type","text"],["labelPlacement","floating","formControlName","email","type","email"],["label","Ingrese el nombre de su empresa","labelPlacement","floating","formControlName","empresa","type","text"],["labelPlacement","floating","formControlName","cargo","type","text"],["labelPlacement","floating","formControlName","delegacion","type","text"],["expand","block","slot","end","shape","round","type","submit",1,"mt-3",3,"disabled"]],template:function(o,r){1&o&&(e._UZ(0,"header"),e.TgZ(1,"ion-content",0)(2,"div",1),e._UZ(3,"div",2),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,T,17,2,"div",4),e.qZA(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"h2",8),e._uU(10,"Impulsado solidariamente por: "),e.qZA(),e._UZ(11,"ion-img",9),e.qZA()(),e.TgZ(12,"div",10)(13,"div",11)(14,"p",12),e._uU(15,"Impulsado solidariamente por: "),e.qZA(),e._UZ(16,"ion-img",13),e.qZA()()()()),2&o&&(e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("ngIf",r.evento))},dependencies:[v.O5,s._Y,s.JJ,s.JL,s.sg,s.u,a.We,a.eh,a.YG,a.PM,a.FN,a.Dq,a.W2,a.Xz,a.pK,a.Ie,a.yW,a.j9,P.E],styles:["ion-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}h5[_ngcontent-%COMP%]{font-size:20px}h4[_ngcontent-%COMP%]{font-size:20px!important}.inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:32px!important}.titulo[_ngcontent-%COMP%], .titulo2[_ngcontent-%COMP%]{background:rgb(0,0,0);background:linear-gradient(129deg,rgb(0,0,0) 22%,rgb(73,73,73) 63%)}.izquierda[_ngcontent-%COMP%]{background-position:center;background-repeat:cover;-webkit-backdrop-filter:grayscale(30%);backdrop-filter:grayscale(30%)}"]}),l})()}];let D=(()=>{var t;class l{}return(t=l).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(U),m.Bz]}),l})();var M=n(3964);let z=(()=>{var t;class l{}return(t=l).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.ez,s.u5,s.UX,a.Pc,D,M.HeaderPageModule]}),l})()}}]);