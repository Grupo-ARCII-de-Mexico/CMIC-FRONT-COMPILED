"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9808],{9808:(J,f,a)=>{a.r(f),a.d(f,{EventosPageModule:()=>F});var h=a(6814),E=a(95),l=a(9843),g=a(9085),c=a(6676),b=a(553),P=a(5768),e=a(6689),M=a(1922),k=a(930),C=a(4846),x=a(7022),y=a(9585);const A=["SwiperBol"];function _(n,s){if(1&n&&(e.TgZ(0,"div",28)(1,"div",29)(2,"div",30)(3,"h3",31),e._uU(4),e.qZA(),e.TgZ(5,"h3",32),e._uU(6),e.qZA()()()()),2&n){const o=e.oxw();e.MGl("routerLink","/evento/",o.selectedEventos[0].identificador,""),e.xp6(1),e.Jzz("\n        background-image: url(",o.uri+o.selectedEventos[0].imagen,");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        min-height: 20vh;\n        "),e.xp6(3),e.AsE(" ",o.selectedEventos[0].titulo.slice(0,40),"",o.selectedEventos[0].titulo.length>40?"...":""," "),e.xp6(2),e.hij(" ",o.fecha(o.selectedEventos[0].fechaInicio),"")}}function T(n,s){if(1&n&&(e.TgZ(0,"div",33)(1,"div",29)(2,"div",34)(3,"h3",35)(4,"strong"),e._uU(5),e.qZA()(),e.TgZ(6,"h3",36),e._uU(7),e.qZA()()()()),2&n){const o=s.$implicit,t=e.oxw();e.MGl("routerLink","/evento/",o.identificador,""),e.xp6(1),e.Jzz("\n        background-image: url(",t.uri+o.imagen,");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        min-height: 20vh;\n        "),e.xp6(4),e.AsE(" ",o.titulo.slice(0,40),"",o.titulo.length>40?"...":"",""),e.xp6(2),e.hij(" ",t.fecha(o.fechaInicio),"")}}function O(n,s){if(1&n&&(e.TgZ(0,"swiper-slide",37)(1,"ion-card",38),e._UZ(2,"ion-card-header"),e.TgZ(3,"ion-card-content")(4,"h4",39),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA(),e.TgZ(8,"div",40)(9,"ion-button",41),e._uU(10," Leer m\xe1s "),e.qZA()()()()()),2&n){const o=s.$implicit,t=e.oxw();e.xp6(2),e.Jzz("\n      background-image: url(",t.uri2+o.imagen,");\n      background-position: center;\n      height: 200px;\n      background-size: cover;\n      background-repeat: no-repeat;\n      "),e.xp6(3),e.AsE("",o.titulo.slice(0,50),"",o.titulo.length>=50?"...":"",""),e.xp6(2),e.hij(" ",t.fecha(o.createdAt),""),e.xp6(2),e.MGl("routerLink","/website/boletin/",o.identificador,"")}}const S=function(){return{delay:4e3,pauseOnMouseEnter:!0}};(0,P.z2)(),c.locale("ES");const U=[{path:"",component:(()=>{var n;class s{constructor(t,i,r){this.headerStatusService=t,this.genericService=i,this.boletinRepo=r,this.uri=b.N.image+"eventos/",this.uri2=b.N.image+"boletines/",this.boletines=[],this.highlightedDates=[],this.year=(new Date).getFullYear()+2,this.paginationConfig={el:".swiper-pagination",type:"bullets",clickable:!0},this.breakpoints={1024:{slidesPerView:3},968:{slidesPerView:3},768:{slidesPerView:2},567:{slidesPerView:1},167:{slidesPerView:1}},this.eventos=[],this.selectedEventos=[]}ngOnInit(){this.boletinRepo.boletin$.subscribe(t=>{this.boletines=t}),this.genericService.getAll("evento").subscribe(t=>{this.eventos=t.sort((i,r)=>new Date(r.fechaFin).getTime()-new Date(i.fechaFin).getTime()),this.viewSelect();for(const i of t)this.highlightedDates.push({textColor:"var(--ion-color-light)",backgroundColor:"var(--ion-color-dark)",date:c(i.fechaInicio).format("YYYY-MM-DD")})})}next(){var t;this.mySwiper&&(null===(t=this.mySwiper)||void 0===t||t.nativeElement.swiper.slideNext())}back(){this.mySwiper&&this.mySwiper.nativeElement.swiper&&this.mySwiper.nativeElement.swiper.slidePrev()}viewSelect(t){var i,r;if(this.eventos.length<=5)return void(this.selectedEventos=this.eventos);const w=[],m=[],v=[],Z=null!=t&&null!==(i=t.detail)&&void 0!==i&&i.value?c(null==t||null===(r=t.detail)||void 0===r?void 0:r.value):c();for(const d of this.eventos)c(d.fechaInicio).isSame(Z,"day")?w.push(d):c(d.fechaInicio).isAfter(Z)?m.push(d):v.push(d);m.sort((d,p)=>c(d.fechaInicio).diff(c(p.fechaInicio))),v.sort((d,p)=>c(p.fechaInicio).diff(c(d.fechaInicio)));const z=[...w,...m,...v].slice(0,5);this.selectedEventos=z,this.selectedEventos=Array.from(new Set([...this.selectedEventos])),this.selectedEventos=this.selectedEventos.slice(0,5)}fecha(t){return c(t).format("LL")}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(M.e),e.Y36(k.M),e.Y36(C.a))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-eventos"]],viewQuery:function(t,i){if(1&t&&e.Gf(A,5),2&t){let r;e.iGM(r=e.CRH())&&(i.mySwiper=r.first)}},decls:45,vars:11,consts:[[3,"fullscreen","scrollEvents","ionScroll"],[1,"container","my-5"],[1,"text-center","d-flex","flex-column","titulo"],[1,"mb-2","titulo",2,"font-weight","bold"],[1,"mb-3","mx-auto"],[1,"row"],[1,"col-md-3","my-2","mx-auto"],["presentation","date",1,"mx-auto",3,"highlightedDates","max","ionChange"],["class","col-md-9 my-2",3,"routerLink",4,"ngIf"],["class","col-md-3 my-2",3,"routerLink",4,"ngFor","ngForOf"],["id","SwiperBol",1,"d-flex",3,"autoplay","pagination","breakpoints"],["SwiperBol",""],["class","d-flex my-4",4,"ngFor","ngForOf"],["slot","start"],["color","primary","fill","clear",3,"click"],["slot","icon-only","name","arrow-back"],["slot","icon-only","name","arrow-forward"],[1,"d-flex","pt-3","w-100"],[1,"mx-auto","py-0","w-100"],[1,"p-0","m-0","af"],[1,"col-md-6","d-flex","my-3","my-md-0"],["src","../../../../../assets/15.jpg","alt","",1,"h-100","p-0",2,"max-height","400px"],[1,"col-md-6","d-flex"],[1,"m-auto","container"],["color","primary",1,"ion.margin-vertical"],[1,"mb-2","titulo","text-black"],[1,"mb-5"],["routerLink","/website/afiliate","shape","round",1,"mb-3"],[1,"col-md-9","my-2",3,"routerLink"],[1,"w-100","h-100","image-container"],[1,"bg-l","h-100","d-flex","image-overlay","flex-column"],[1,"text-white","mt-5","image-text","titulo"],[1,"text-white","mb-auto","image-text","h5"],[1,"col-md-3","my-2",3,"routerLink"],[1,"bg-l","d-flex","image-overlay","flex-column"],[1,"text-white","mt-1","image-text","h5"],[1,"text-white","mb-auto","image-text","p"],[1,"d-flex","my-4"],[1,"mx-auto","w-90"],[1,"text-black","h3","text-start","my-3"],[1,"d-flex","my-2"],["routerLinkActive","router-link-active","color","primary","shape","round",1,"mx-auto",3,"routerLink"]],template:function(t,i){1&t&&(e._UZ(0,"web-header"),e.TgZ(1,"ion-content",0),e.NdJ("ionScroll",function(u){return i.headerStatusService.setBooleanStatus(u)}),e.TgZ(2,"div",1)(3,"div",2)(4,"h1",3),e._uU(5," Pr\xf3ximos Eventos"),e.qZA(),e._UZ(6,"hr",4),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"ion-datetime",7),e.NdJ("ionChange",function(u){return i.viewSelect(u)}),e.qZA()(),e.YNc(10,_,7,7,"div",8),e.YNc(11,T,8,7,"div",9),e.qZA()(),e.TgZ(12,"div",1)(13,"div",2)(14,"h1",3),e._uU(15," Boletines"),e.qZA(),e._UZ(16,"hr",4),e.qZA(),e.TgZ(17,"swiper-container",10,11),e.YNc(19,O,11,7,"swiper-slide",12),e.qZA(),e.TgZ(20,"ion-buttons",13)(21,"ion-button",14),e.NdJ("click",function(){return i.back()}),e._UZ(22,"ion-icon",15),e.qZA(),e.TgZ(23,"ion-button",14),e.NdJ("click",function(){return i.next()}),e._UZ(24,"ion-icon",16),e.qZA()()(),e.TgZ(25,"div",17)(26,"ion-card",18)(27,"ion-card-content",19)(28,"div",5)(29,"div",20),e._UZ(30,"img",21),e.qZA(),e.TgZ(31,"div",22)(32,"div",23)(33,"ion-text",24)(34,"h5")(35,"strong"),e._uU(36,"CMIC Ciudad de M\xe9xico"),e.qZA()()(),e.TgZ(37,"h1",25),e._uU(38," Af\xedliate ahora a la CMIC y "),e._UZ(39,"br"),e._uU(40," disfruta todos los beneficios"),e.qZA(),e._UZ(41,"hr",26),e.TgZ(42,"ion-button",27),e._uU(43," Af\xedliate "),e.qZA()()()()()()(),e._UZ(44,"web-footer"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("fullscreen",!0)("scrollEvents",!0),e.xp6(8),e.MGl("max","",i.year,"-01-01"),e.Q6J("highlightedDates",i.highlightedDates),e.xp6(1),e.Q6J("ngIf",i.selectedEventos.length>0),e.xp6(1),e.Q6J("ngForOf",i.selectedEventos.slice(1,i.selectedEventos.length)),e.xp6(6),e.Q6J("autoplay",e.DdM(10,S))("pagination",i.paginationConfig)("breakpoints",i.breakpoints),e.xp6(2),e.Q6J("ngForOf",i.boletines))},dependencies:[h.sg,h.O5,l.YG,l.Sm,l.PM,l.FN,l.Zi,l.W2,l.x4,l.gu,l.yW,l.QI,l.YI,x.s,y.r,g.rH,g.Od],styles:['@charset "UTF-8";.titulo[_ngcontent-%COMP%]{font-size:32px!important;font-weight:700}hr[_ngcontent-%COMP%]{border-color:var(--ion-color-primary);background-color:var(--ion-color-primary);border-width:2px;margin:0 auto 0 0;width:50px;opacity:1}.image-container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;border-radius:15px;cursor:pointer}.image-container[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]{position:absolute;top:30%;left:0;width:100%;transform:translateY(50%);background-color:#000000b3;padding:10px;transition:transform .3s,opacity .3s;opacity:0}.image-container[_ngcontent-%COMP%]:hover   .image-overlay[_ngcontent-%COMP%]{transform:translate(0);opacity:1}.image-overlay[_ngcontent-%COMP%]   .image-text[_ngcontent-%COMP%]{color:#fff;text-align:left}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:auto;transition:transform .3s}.image-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.1)}.bg-l[_ngcontent-%COMP%]{background:rgba(0,0,0,.6);width:100%;height:70%}@media (max-width: 768px){.titulo[_ngcontent-%COMP%]{font-size:20px!important;font-weight:700;margin-top:12px!important}.image-container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;border-radius:15px;height:400px}.bg-l[_ngcontent-%COMP%]{background:rgba(0,0,0,.6);width:100%;height:100%}.image-container[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]{position:absolute;top:10%;left:0;width:100%;transform:translateY(50%);background-color:#000000b3;padding:10px;transition:transform .3s,opacity .3s;opacity:0}}.w-90[_ngcontent-%COMP%]{width:90%}']}),s})()}];let I=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(U),g.Bz]}),s})(),F=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.ez,E.u5,l.Pc,x.s,y.r,I]}),s})()}}]);