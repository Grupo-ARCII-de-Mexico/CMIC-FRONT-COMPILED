"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2473],{2473:(C,u,r)=>{r.r(u),r.d(u,{FicPageModule:()=>P});var l=r(6814),g=r(95),s=r(9843),d=r(9085),f=r(553),h=r(6744),o=r(6689),v=r(1922),Z=r(1012),p=r(7022),m=r(9585);function _(e,a){if(1&e){const i=o.EpF();o.TgZ(0,"ion-button",41),o.NdJ("click",function(){o.CHM(i);const n=o.oxw().$implicit,c=o.oxw();return o.KtG(c.openUrl(n.url))}),o._uU(1),o.ALo(2,"currency"),o.qZA()}if(2&e){const i=o.oxw().$implicit;o.xp6(1),o.hij(" ",o.lcZ(2,1,i.precio)," MXN ")}}function x(e,a){if(1&e){const i=o.EpF();o.TgZ(0,"ion-button",41),o.NdJ("click",function(){o.CHM(i);const n=o.oxw().$implicit,c=o.oxw();return o.KtG(c.openUrl(n.url))}),o._uU(1," M\xe1s Informaci\xf3n "),o.qZA()}}function b(e,a){if(1&e&&(o.TgZ(0,"swiper-slide",38)(1,"ion-card",20),o._UZ(2,"ion-card-header"),o.TgZ(3,"ion-card-content")(4,"h4",39),o._uU(5),o.qZA(),o.YNc(6,_,3,3,"ion-button",40),o.YNc(7,x,2,0,"ion-button",40),o.qZA()()()),2&e){const i=a.$implicit,t=o.oxw();o.xp6(2),o.Jzz("\n      background-image: url(",t.uri3+i.imagen,");\n      background-position: center;\n      height: 200px;\n      background-size: cover;\n      background-repeat: no-repeat;\n      "),o.xp6(3),o.Oqu(i.titulo),o.xp6(1),o.Q6J("ngIf","null"!==i.precio),o.xp6(1),o.Q6J("ngIf","null"===i.precio)}}const F=function(){return{delay:4e3,pauseOnMouseEnter:!0}};(0,h.z2)();const y=[{path:"",component:(()=>{var e;class a{constructor(t,n){this.headerStatusService=t,this.cursoRepo=n,this.paginationConfig={el:".swiper-pagination",type:"bullets",clickable:!0},this.breakpoints={1024:{slidesPerView:4},768:{slidesPerView:3},567:{slidesPerView:2},167:{slidesPerView:1}},this.uri3=f.N.image+"cursos/",this.cursos=[]}ngOnInit(){this.cursoRepo.curso$.subscribe(t=>{this.cursos=t.filter(n=>"FIC"==n.tipo)})}checkSection(t){const n=t.detail.currentY-50,c=document.getElementById("subheader");n>100?null==c||c.classList.remove("d-md-block"):null==c||c.classList.add("d-md-block")}openUrl(t){window.open(t,"_blank")}}return(e=a).\u0275fac=function(t){return new(t||e)(o.Y36(v.e),o.Y36(Z.U))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-fic"]],decls:66,vars:7,consts:[[3,"fullscreen","scrollEvents","ionScroll"],[1,"fondo","d-flex"],[1,"frojo","w-100","d-flex","flex-column","h-100"],[1,"d-flex","h-100","w-100"],[1,"titulo","text-center","my-auto","ms-auto","text-white"],["color","dark","shape","round",1,"ms-2","ms-md-5","my-auto","me-auto","py-3",3,"click"],[1,"mt-auto","ms-auto","text-white","me-4","mb-4"],[1,"d-flex","py-5"],["mode","ios",1,"shadow","mx-auto","py-3"],[1,"m-auto","container"],[1,"mb-2","text-center","titulo"],[1,"d-flex"],[1,"mx-auto","mb-3"],[1,"row"],[1,"col-xl-5","d-flex","my-3"],["src","../../../../../../../assets/logocompletofic.png","alt","",1,"mx-auto","img-fluid","p-3","py-5"],[1,"col-xl-7","d-flex"],[1,"my-auto","ion-text-justify"],[1,"my-5"],[1,"text-center","titulo","h1"],[1,"mx-auto"],[1,"container"],[1,"d-flex",3,"autoplay","pagination","breakpoints"],["class","d-flex my-4",4,"ngFor","ngForOf"],[1,"d-flex","py-5","w-100"],[1,"shadow","mx-auto","py-0","w-100"],[1,"p-0","m-0","af"],[1,"col-md-6","d-flex","my-3","my-md-0"],["src","../../../../../assets/48.jpg","alt","",1,"img","p-0"],[1,"col-md-6","d-flex"],["color","primary",1,"ion.margin-vertical"],[1,"mb-2","titulo","text-black"],[1,"mb-5"],["routerLink","/website/afiliate","shape","round",1,"mb-3"],[1,"col-md-3","my-3","mx-auto","text-center"],["src","../../../../../assets/logo-icic2.png","alt",""],["src","../../../../../assets/logo-itc-3.png","alt",""],["src","../../../../../assets/logo-fic2.png","alt",""],[1,"d-flex","my-4"],[1,"text-black","h2","text-center","my-3",2,"font-weight","bold"],["color","secondary","expand","block","shape","round",3,"click",4,"ngIf"],["color","secondary","expand","block","shape","round",3,"click"]],template:function(t,n){1&t&&(o._UZ(0,"web-header"),o.TgZ(1,"ion-content",0),o.NdJ("ionScroll",function(U){return n.headerStatusService.setBooleanStatus(U)}),o.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),o._uU(6,"Conoce m\xe1s del FIC"),o.qZA(),o.TgZ(7,"ion-button",5),o.NdJ("click",function(){return n.openUrl("https://www.fic.org.mx/")}),o._uU(8," Visitar Sitio "),o.qZA()(),o.TgZ(9,"p",6),o._uU(10," Inicio / Instituciones / FIC"),o.qZA()()(),o.TgZ(11,"div",7)(12,"ion-card",8)(13,"ion-card-content")(14,"div",9)(15,"h1",10),o._uU(16," Fundaci\xf3n de la Industria de la Construcci\xf3n"),o.qZA(),o.TgZ(17,"div",11),o._UZ(18,"hr",12),o.qZA()(),o.TgZ(19,"div",13)(20,"div",14),o._UZ(21,"img",15),o.qZA(),o.TgZ(22,"div",16)(23,"p",17),o._uU(24," Desde 1994 la Fundaci\xf3n de la Industria de la Construcci\xf3n (FIC), funciona como eje motriz para el desarrollo tecnol\xf3gico mediante las mega tendencias en construcci\xf3n y es el pilar de la investigaci\xf3n aplicada para el sector industrial; otorga asesor\xedas mediante bancos de informaci\xf3n, cursos, seminarios, talleres y congresos con ponentes nacionales e internacionales. "),o._UZ(25,"br")(26,"br"),o._uU(27," Su Misi\xf3n es Promover el crecimiento empresarial por medio de la tecnolog\xeda y su Objetivo es Investigar, conocer, desarrollar y documentar lo referente a tecnolog\xedas de punta, t\xe9cnicas, procesos, maquinaria, herramientas, nuevos sistemas gerenciales de informaci\xf3n y de control en construcci\xf3n, para disposici\xf3n de los empresarios del ramo, obteniendo la modernizaci\xf3n del sector. "),o._UZ(28,"br")(29,"br"),o._uU(30," Como Pol\xedtica de Calidad, la FIC est\xe1 comprometida a mejorar la competitividad y productividad de las empresas constructoras del pa\xeds."),o.qZA()()()()()(),o.TgZ(31,"div",18)(32,"h1",19),o._uU(33," Diplomados, Certificaci\xf3n y Validaci\xf3n Empresarial "),o.qZA(),o.TgZ(34,"div",11),o._UZ(35,"hr",20),o.qZA()(),o.TgZ(36,"div",21)(37,"swiper-container",22),o.YNc(38,b,8,6,"swiper-slide",23),o.qZA()(),o.TgZ(39,"div",24)(40,"ion-card",25)(41,"ion-card-content",26)(42,"div",13)(43,"div",27),o._UZ(44,"img",28),o.qZA(),o.TgZ(45,"div",29)(46,"div",9)(47,"ion-text",30)(48,"h5"),o._uU(49,"CMIC Ciudad de M\xe9xico"),o.qZA()(),o.TgZ(50,"h1",31),o._uU(51," Af\xedliate ahora a la CMIC y "),o._UZ(52,"br"),o._uU(53," disfruta todos los beneficios"),o.qZA(),o._UZ(54,"hr",32),o.TgZ(55,"ion-button",33),o._uU(56," Af\xedliate "),o.qZA()()()()()()(),o.TgZ(57,"div",21)(58,"div",13)(59,"div",34),o._UZ(60,"img",35),o.qZA(),o.TgZ(61,"div",34),o._UZ(62,"img",36),o.qZA(),o.TgZ(63,"div",34),o._UZ(64,"img",37),o.qZA()()(),o._UZ(65,"web-footer"),o.qZA()),2&t&&(o.xp6(1),o.Q6J("fullscreen",!0)("scrollEvents",!0),o.xp6(36),o.Q6J("autoplay",o.DdM(6,F))("pagination",n.paginationConfig)("breakpoints",n.breakpoints),o.xp6(1),o.Q6J("ngForOf",n.cursos))},dependencies:[l.sg,l.O5,s.YG,s.PM,s.FN,s.Zi,s.W2,s.yW,s.YI,d.rH,p.s,m.r,l.H9],styles:[".titulo[_ngcontent-%COMP%]{font-size:32px!important;font-weight:700}hr[_ngcontent-%COMP%]{border-color:var(--ion-color-primary);background-color:var(--ion-color-primary);border-width:2px;margin:0 auto 0 0;width:50px;opacity:1}ion-card[_ngcontent-%COMP%]{width:90%;transition:.5s;cursor:pointer}.shadow[_ngcontent-%COMP%]{width:60%;transition:.5s;cursor:pointer}@media (max-width: 768px){ion-card[_ngcontent-%COMP%]{width:80%}.shadow[_ngcontent-%COMP%]{width:80%;transition:.5s;cursor:pointer}}.fondo[_ngcontent-%COMP%]{background-image:url(22.f3fc962f52841476.jpg);background-position:center;background-size:cover;background-repeat:no-repeat;height:20vh;color:#fff}.bg-l[_ngcontent-%COMP%]{background:rgba(0,0,0,.6);width:100%;height:100%}ion-card[_ngcontent-%COMP%]{width:90%}.aa[_ngcontent-%COMP%]{width:60%}"]}),a})()}];let w=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[d.Bz.forChild(y),d.Bz]}),a})(),P=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[l.ez,g.u5,s.Pc,w,p.s,m.r]}),a})()}}]);