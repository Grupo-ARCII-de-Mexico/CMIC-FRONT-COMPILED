"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4267],{4267:(C,Z,i)=>{i.r(Z),i.d(Z,{ContactoPageModule:()=>U});var p=i(6814),d=i(95),a=i(9843),m=i(9085),s=i(5861),o=i(6689),f=i(930),x=i(7153),v=i(2425),u=i(9585),h=i(7022);const _=[{path:"",component:(()=>{var n;class r{constructor(t,e,l){this.gService=t,this.loading=e,this.toast=l,this.form={name:"",tel:"",correo:"",mensaje:""}}ngOnInit(){}send(){var t=this;return(0,s.Z)(function*(){yield t.loading.setData({animated:!0,message:"Enviando"}),yield t.loading.create(),yield t.loading.show(),t.gService.post("contacto",t.form).subscribe((0,s.Z)(function*(){yield t.loading.hide(),t.form={name:"",tel:"",correo:"",mensaje:""},t.toast.success("Nos pondremos en contacto a la brevedad","Gracias por su inter\xe9s")}))})()}}return(n=r).\u0275fac=function(t){return new(t||n)(o.Y36(f.M),o.Y36(x.b),o.Y36(v._W))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-contacto"]],decls:193,vars:6,consts:[[3,"fullscreen"],[1,"mapa","d-flex"],[1,"col-10","offset-md-1","col-md-6","col-lg-4","my-auto","mx-auto","ms-auto","ms-md-5","mx-md-0","mb-5"],[1,"d-flex","flex-column","ion-padding","shadow"],[1,"text-center","titu","text-black"],[1,"mx-auto","hrr"],["label","Nombre completo","color","primary","label-placement","stacked","fill","outline","placeholder","",1,"ion-margin-vertical",3,"ngModel","ngModelChange"],["label","Correo","color","primary","label-placement","stacked","fill","outline","placeholder","",1,"ion-margin-vertical",3,"ngModel","ngModelChange"],["label","Tel\xe9fono","color","primary","label-placement","stacked","fill","outline","placeholder","",1,"ion-margin-vertical",3,"ngModel","ngModelChange"],["label","Mensaje","color","primary","label-placement","stacked","fill","outline","placeholder","","rows","10",1,"ion-margin-vertical",3,"ngModel","ngModelChange"],["shape","round",1,"mx-auto","ion-margin-vertical",3,"disabled","click"],[1,"info"],[1,"py-5"],[1,"text-center","titulo","text-black"],[1,"row","h-100","mb-5"],[1,"col-xl-3","my-auto","col-lg-6","mx-auto","d-flex","mini"],["mode","ios",1,"ion-padding","a","mx-auto",2,"border","1px solid black"],["color","primary"],[1,"titulo","text-center","zz"],[1,"d-flex"],[1,"hr","mx-auto"],[1,"text-start","d-flex","ion-margin-vertical"],["color","primary","name","mail",1,"ms-2","me-2","my-auto","f"],["color","dark",1,"me-auto","my-auto"],[1,"f","mb-0"],["color","primary","name","logo-whatsapp",1,"ms-2","me-2","my-auto","f"],["color","primary","name","call",1,"ms-2","me-3","my-auto","f"],[1,"col-xl-3","col-lg-6","my-auto","mx-auto","d-flex","mini"],[1,"col-lg-6","col-xl-3","my-auto","mx-auto","d-flex","mini"],["mode","ios",1,"ion-padding","mx-auto","a",2,"border","1px solid black"],[1,"d-flex","py-5","w-100"],[1,"mx-auto","py-0","w-100"],[1,"p-0","m-0","h-1","af"],[1,"row"],[1,"col-md-6","d-flex","my-3","my-md-0","h-1","px-0"],["src","../../../../../assets/15.jpg","alt","",1,"img","p-0"],[1,"col-md-6","d-flex","bg-gray","bgi"],[1,"m-auto","container"],["color","primary",1,"ion-margin-vertical"],[1,"mb-2","titulo","text-black"],[1,"mb-5"],["routerLink","/website/afiliate","shape","round",1,"mb-3"],[1,"container"],[1,"col-md-3","my-3","mx-auto","text-center"],["src","../../../../../assets/logo-icic2.png","alt",""],["src","../../../../../assets/logo-itc-3.png","alt",""],["src","../../../../../assets/logo-fic2.png","alt",""]],template:function(t,e){1&t&&(o._UZ(0,"web-header"),o.TgZ(1,"ion-content",0)(2,"div",1)(3,"div",2)(4,"ion-card",3)(5,"h1",4),o._uU(6,"Cont\xe1ctanos"),o.qZA(),o._UZ(7,"hr",5),o.TgZ(8,"ion-input",6),o.NdJ("ngModelChange",function(c){return e.form.name=c}),o.qZA(),o.TgZ(9,"ion-input",7),o.NdJ("ngModelChange",function(c){return e.form.correo=c}),o.qZA(),o.TgZ(10,"ion-input",8),o.NdJ("ngModelChange",function(c){return e.form.tel=c}),o.qZA(),o.TgZ(11,"ion-textarea",9),o.NdJ("ngModelChange",function(c){return e.form.mensaje=c}),o.qZA(),o.TgZ(12,"ion-button",10),o.NdJ("click",function(){return e.send()}),o._uU(13," Enviar "),o.qZA()()()(),o.TgZ(14,"div",11)(15,"div",12)(16,"h1",13),o._uU(17,"Informaci\xf3n de Contacto"),o.qZA(),o._UZ(18,"hr",5),o.qZA(),o.TgZ(19,"div",14)(20,"div",15)(21,"ion-card",16)(22,"ion-text",17)(23,"h1",18),o._uU(24,"Afiliaci\xf3n / SIEM"),o.qZA()(),o.TgZ(25,"div",19),o._UZ(26,"hr",20),o.qZA(),o.TgZ(27,"div",21),o._UZ(28,"ion-icon",22),o.TgZ(29,"ion-text",23)(30,"h6",24),o._uU(31,"afiliacion@cmiccdmx.org"),o.qZA()()(),o.TgZ(32,"div",21),o._UZ(33,"ion-icon",22),o.TgZ(34,"ion-text",23)(35,"h6",24),o._uU(36,"coord.afiliacion@cmiccdmx.org"),o.qZA()()(),o.TgZ(37,"div",21),o._UZ(38,"ion-icon",25),o.TgZ(39,"ion-text",23)(40,"h6",24),o._uU(41,"55 6472 0073"),o.qZA()()(),o.TgZ(42,"div",21),o._UZ(43,"ion-icon",26),o.TgZ(44,"ion-text",23)(45,"h6",24),o._uU(46,"55 5424 7438 Ext. 2007 / 7064 "),o.qZA()()(),o.TgZ(47,"div",21),o._UZ(48,"ion-icon",26),o.TgZ(49,"ion-text",23)(50,"h6",24),o._uU(51," 55 5424 7400 Ext. 2007 / 7064 "),o.qZA()()()()(),o.TgZ(52,"div",27)(53,"ion-card",16)(54,"ion-text",17)(55,"h1",18),o._uU(56,"ITC"),o.qZA()(),o.TgZ(57,"div",19),o._UZ(58,"hr",20),o.qZA(),o.TgZ(59,"ion-text",23)(60,"h6",24),o._uU(61,"Licenciaturas, maestr\xedas, diplomados y especialidades:"),o.qZA()(),o.TgZ(62,"div",21),o._UZ(63,"ion-icon",22),o.TgZ(64,"ion-text",23)(65,"h6",24),o._uU(66,"direccion.cdmx@itc-ac.edu.mx"),o.qZA()()(),o.TgZ(67,"div",21),o._UZ(68,"ion-icon",22),o.TgZ(69,"ion-text",23)(70,"h6",24),o._uU(71,"info@itc-ac.edu.mx"),o.qZA()()(),o.TgZ(72,"div",21),o._UZ(73,"ion-icon",22),o.TgZ(74,"ion-text",23)(75,"h6",24),o._uU(76,"promocionitccdmx@itc-ac.edu.mx"),o.qZA()()(),o._UZ(77,"br"),o.TgZ(78,"ion-text",23)(79,"h6",24),o._uU(80,"Oficina Acad\xe9mica:"),o.qZA()(),o.TgZ(81,"div",21),o._UZ(82,"ion-icon",22),o.TgZ(83,"ion-text",23)(84,"h6",24),o._uU(85,"gabriela@itc-ac.edu.mx"),o.qZA()()(),o.TgZ(86,"div",21),o._UZ(87,"ion-icon",25),o.TgZ(88,"ion-text",23)(89,"h6",24),o._uU(90,"55 6472 0073"),o.qZA()()(),o.TgZ(91,"div",21),o._UZ(92,"ion-icon",26),o.TgZ(93,"ion-text",23)(94,"h6",24),o._uU(95,"55 5668 0787 Ext. 5 / 2019 / 2020 "),o.qZA()()(),o.TgZ(96,"div",21),o._UZ(97,"ion-icon",26),o.TgZ(98,"ion-text",23)(99,"h6",24),o._uU(100,"55 5668 2851 Ext. 5 / 2019 / 2020 "),o.qZA()()(),o.TgZ(101,"div",21),o._UZ(102,"ion-icon",26),o.TgZ(103,"ion-text",23)(104,"h6",24),o._uU(105,"55 5668 0748 Ext. 5 / 2019 / 2020 "),o.qZA()()()()(),o.TgZ(106,"div",28)(107,"ion-card",29)(108,"ion-text",17)(109,"h1",18),o._uU(110,"ICIC"),o.qZA()(),o.TgZ(111,"div",19),o._UZ(112,"hr",20),o.qZA(),o.TgZ(113,"div",21),o._UZ(114,"ion-icon",22),o.TgZ(115,"ion-text",23)(116,"h6",24),o._uU(117,"asistente.icic@icic-oc.org"),o.qZA()()(),o.TgZ(118,"div",21),o._UZ(119,"ion-icon",22),o.TgZ(120,"ion-text",23)(121,"h6",24),o._uU(122,"lizbeth.casanova@cmiccdmx.org"),o.qZA()()(),o.TgZ(123,"div",21),o._UZ(124,"ion-icon",22),o.TgZ(125,"ion-text",23)(126,"h6",24),o._uU(127,"yoselin.pina@cmiccdmx.org"),o.qZA()()(),o.TgZ(128,"div",21),o._UZ(129,"ion-icon",25),o.TgZ(130,"ion-text",23)(131,"h6",24),o._uU(132,"55 2748 6784"),o.qZA()()(),o.TgZ(133,"div",21),o._UZ(134,"ion-icon",26),o.TgZ(135,"ion-text",23)(136,"h6",24),o._uU(137,"55 5424 7400 Ext. 2020 / 2019 / 2017 "),o.qZA()()()()(),o.TgZ(138,"div",28)(139,"ion-card",16)(140,"ion-text",17)(141,"h1",18),o._uU(142,"FIC"),o.qZA()(),o.TgZ(143,"div",19),o._UZ(144,"hr",20),o.qZA(),o.TgZ(145,"div",21),o._UZ(146,"ion-icon",22),o.TgZ(147,"ion-text",23)(148,"h6",24),o._uU(149,"seminarios.fic@fic.org.mx"),o.qZA()()(),o.TgZ(150,"div",21),o._UZ(151,"ion-icon",22),o.TgZ(152,"ion-text",23)(153,"h6",24),o._uU(154,"asistente.icic@cmiccdmx.org"),o.qZA()()(),o.TgZ(155,"div",21),o._UZ(156,"ion-icon",25),o.TgZ(157,"ion-text",23)(158,"h6",24),o._uU(159,"55 2712 0779"),o.qZA()()(),o.TgZ(160,"div",21),o._UZ(161,"ion-icon",26),o.TgZ(162,"ion-text",23)(163,"h6",24),o._uU(164,"55 6271 4910"),o.qZA()()()()()()(),o.TgZ(165,"div",30)(166,"div",31)(167,"ion-card-content",32)(168,"div",33)(169,"div",34),o._UZ(170,"img",35),o.qZA(),o.TgZ(171,"div",36)(172,"div",37)(173,"ion-text",38)(174,"h5")(175,"strong"),o._uU(176,"CMIC Ciudad de M\xe9xico"),o.qZA()()(),o.TgZ(177,"h1",39),o._uU(178," Af\xedliate ahora a la CMIC y "),o._UZ(179,"br"),o._uU(180," disfruta todos los beneficios"),o.qZA(),o._UZ(181,"hr",40),o.TgZ(182,"ion-button",41),o._uU(183," Af\xedliate "),o.qZA()()()()()()(),o.TgZ(184,"div",42)(185,"div",33)(186,"div",43),o._UZ(187,"img",44),o.qZA(),o.TgZ(188,"div",43),o._UZ(189,"img",45),o.qZA(),o.TgZ(190,"div",43),o._UZ(191,"img",46),o.qZA()()(),o._UZ(192,"web-footer"),o.qZA()),2&t&&(o.xp6(1),o.Q6J("fullscreen",!0),o.xp6(7),o.Q6J("ngModel",e.form.name),o.xp6(1),o.Q6J("ngModel",e.form.correo),o.xp6(1),o.Q6J("ngModel",e.form.tel),o.xp6(1),o.Q6J("ngModel",e.form.mensaje),o.xp6(1),o.Q6J("disabled",!e.form.correo.includes("@")))},dependencies:[d.JJ,d.On,a.YG,a.PM,a.FN,a.W2,a.gu,a.pK,a.yW,a.g2,a.j9,a.YI,m.rH,u.r,h.s],styles:[".mapa[_ngcontent-%COMP%]{background-image:url(Mapa.7e72b1f48280a51f.png);background-position:center;background-repeat:no-repeat;background-size:cover;min-height:70vh}.hrr[_ngcontent-%COMP%]{border-color:var(--ion-color-primary);background-color:var(--ion-color-primary);border-width:2px;margin:0 auto 0 0;width:100px;opacity:1}.titu[_ngcontent-%COMP%]{font-size:42px!important;font-weight:700}ion-card[_ngcontent-%COMP%]{border-radius:15px}.info[_ngcontent-%COMP%]{background:rgb(255,255,255);background:linear-gradient(0deg,rgb(255,255,255) 50%,rgb(241,241,241) 50%);min-height:70vh;font-weight:700}.a[_ngcontent-%COMP%]{border-color:var(--ion-color-primary)!important;border:1px;min-width:350px;max-width:350px;min-height:505px}.f[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.hr[_ngcontent-%COMP%]{margin-right:auto}.zz[_ngcontent-%COMP%]{font-size:40px;font-weight:bolder}.titulo[_ngcontent-%COMP%]{font-size:32px!important;font-weight:700}.gray[_ngcontent-%COMP%]{background-color:#f1f1f1}.af[_ngcontent-%COMP%]{background-color:#f1f1f1;transition:.3s}.af[_ngcontent-%COMP%]:hover{background-color:#d4d4d4;transition:.3s}.af[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .3s}.af[_ngcontent-%COMP%]:hover   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(.95);transition:.3s}hr[_ngcontent-%COMP%]{border-color:var(--ion-color-primary);background-color:var(--ion-color-primary);border-width:2px;margin:0 auto 0 0;width:50px;opacity:1}"]}),r})()}];let T=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[m.Bz.forChild(_),m.Bz]}),r})(),U=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[p.ez,d.u5,a.Pc,T,u.r,h.s]}),r})()}}]);