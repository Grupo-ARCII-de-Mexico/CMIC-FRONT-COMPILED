"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3685],{3685:(A,g,o)=>{o.r(g),o.d(g,{SliderVerPageModule:()=>V});var p=o(6814),f=o(95),s=o(9843),c=o(9085),u=o(5861),h=o(553),e=o(6689),Z=o(9403),v=o(4433),S=o(7153),y=o(2425),x=o(930);function P(t,l){if(1&t){const i=e.EpF();e.TgZ(0,"tr")(1,"th",13),e._UZ(2,"ion-img",14),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"ion-buttons",15)(7,"ion-button",16),e._UZ(8,"ion-icon",17),e.qZA(),e.TgZ(9,"ion-button",18),e.NdJ("click",function(){const d=e.CHM(i).$implicit,a=e.oxw();return e.KtG(a.deleteSlider(d.id))}),e._UZ(10,"ion-icon",19),e.qZA()()()()}if(2&t){const i=l.$implicit,r=e.oxw();e.xp6(2),e.Q6J("src",r.uri+i.imagen),e.xp6(2),e.Oqu(i.texto),e.xp6(3),e.MGl("routerLink","/dashboard/website/slider/",i.id,"")}}const T=[{path:"",component:(()=>{var t;class l{constructor(r,n,d,a,m){this.sliderRepo=r,this.alert=n,this.loading=d,this.toast=a,this.genericS=m,this.uri=h.N.image+"sliders/",this.sliders=[]}ngOnInit(){this.sliderRepo.slider$.subscribe(r=>{this.sliders=r})}deleteSlider(r){var n=this;return(0,u.Z)(function*(){var d;yield n.alert.setData({animated:!0,header:"Est\xe1 a punto de eliminar este Slider",message:"Si lo elimina se perder\xe1n todos los datos relacionados. \n \xbfDesea continuar?",buttons:[{text:"Cancelar"},{text:"Confirmar",handler:(d=(0,u.Z)(function*(){n.loading.setData({animated:!0,message:"Eliminando",spinner:"dots"}),yield n.loading.create(),yield n.loading.show(),n.genericS.delete("sliders",r).subscribe(function(){var a=(0,u.Z)(function*(m){yield n.loading.hide(),n.toast.success("Slider Eliminado"),n.sliderRepo.deleteSlider(r)});return function(m){return a.apply(this,arguments)}}())}),function(){return d.apply(this,arguments)})}]})})()}}return(t=l).\u0275fac=function(r){return new(r||t)(e.Y36(Z.t),e.Y36(v.c),e.Y36(S.b),e.Y36(y._W),e.Y36(x.M))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-slider-ver"]],decls:23,vars:3,consts:[[3,"fullscreen"],["color","dark",1,"py-2"],[1,"ms-2","ms-md-5","mb-0","titulo"],[1,"palito","ms-2","ms-md-5","mt-0","mb-3"],[1,"px-3"],[1,"container"],[1,"d-flex","mt-1"],["placeholder","Buscar Slider","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"debounce"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red","d-none","d-md-block"],["scope","col",1,"red"],[4,"ngFor","ngForOf"],["scope","row",1,"text-center","d-none","d-md-block"],[1,"img-fluid",3,"src"],["color","primary","slot","start"],["color","primary",3,"routerLink"],["slot","icon-only","name","create-outline"],["color","primary",3,"click"],["slot","icon-only","name","trash-outline"]],template:function(r,n){1&r&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br"),e.TgZ(2,"ion-toolbar",1),e._UZ(3,"br"),e.TgZ(4,"h1",2)(5,"b"),e._uU(6," Sliders"),e.qZA()(),e._UZ(7,"hr",3),e.qZA(),e.TgZ(8,"div",4)(9,"div",5)(10,"div",6),e._UZ(11,"ion-searchbar",7),e.qZA(),e.TgZ(12,"table",8)(13,"thead",9)(14,"tr")(15,"th",10),e._uU(16,"Foto"),e.qZA(),e.TgZ(17,"th",11),e._uU(18,"Titulo"),e.qZA(),e.TgZ(19,"th",11),e._uU(20,"Opciones"),e.qZA()()(),e.TgZ(21,"tbody"),e.YNc(22,P,11,3,"tr",12),e.qZA()()()()()),2&r&&(e.Q6J("fullscreen",!0),e.xp6(11),e.Q6J("debounce",250),e.xp6(11),e.Q6J("ngForOf",n.sliders))},dependencies:[p.sg,s.YG,s.Sm,s.W2,s.gu,s.Xz,s.VI,s.sr,s.j9,s.YI,c.rH],styles:[".img-fluid[_ngcontent-%COMP%]{max-width:200px}.red[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}"]}),l})()}];let b=(()=>{var t;class l{}return(t=l).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(T),c.Bz]}),l})(),V=(()=>{var t;class l{}return(t=l).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,f.u5,s.Pc,f.UX,b]}),l})()}}]);