"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4267],{4267:(C,m,e)=>{e.r(m),e.d(m,{ContactoPageModule:()=>_});var p=e(6814),d=e(95),a=e(9843),u=e(9085),s=e(5861),o=e(6689),f=e(930),x=e(7153),v=e(2425),Z=e(9585),h=e(7022);const T=[{path:"",component:(()=>{var n;class r{constructor(t,i,g){this.gService=t,this.loading=i,this.toast=g,this.form={name:"",tel:"",correo:"",mensaje:""}}ngOnInit(){}send(){var t=this;return(0,s.Z)(function*(){yield t.loading.setData({animated:!0,message:"Enviando"}),yield t.loading.create(),yield t.loading.show(),t.gService.post("contacto",t.form).subscribe((0,s.Z)(function*(){yield t.loading.hide(),t.form={name:"",tel:"",correo:"",mensaje:""},t.toast.success("Nos pondremos en contacto a la brevedad","Gracias por su inter\xe9s")}))})()}}return(n=r).\u0275fac=function(t){return new(t||n)(o.Y36(f.M),o.Y36(x.b),o.Y36(v._W))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-contacto"]],decls:174,vars:6,consts:[[3,"fullscreen"],[1,"mapa","d-flex"],[1,"col-10","offset-md-1","col-md-6","col-lg-4","my-auto","mx-auto","ms-auto","ms-md-5","mx-md-0","mb-5"],[1,"d-flex","flex-column","ion-padding","shadow"],[1,"text-center","titu","text-black"],[1,"mx-auto","hrr"],["label","Nombre completo","color","primary","label-placement","stacked","fill","outline","placeholder","",1,"ion-margin-vertical",3,"ngModel","ngModelChange"],["label","Correo","color","primary","label-placement","stacked","fill","outline","placeholder","",1,"ion-margin-vertical",3,"ngModel","ngModelChange"],["label","Tel\xe9fono","color","primary","label-placement","stacked","fill","outline","placeholder","",1,"ion-margin-vertical",3,"ngModel","ngModelChange"],["label","Mensaje","color","primary","label-placement","stacked","fill","outline","placeholder","","rows","10",1,"ion-margin-vertical",3,"ngModel","ngModelChange"],["shape","round",1,"mx-auto","ion-margin-vertical",3,"disabled","click"],[1,"info"],[1,"py-5"],[1,"row","h-100","mb-5"],[1,"col-xl-3","my-auto","col-lg-6","mx-auto","d-flex"],["mode","ios",1,"ion-padding","a","mx-auto",2,"border","1px solid black"],["color","primary"],[1,"titulo","text-center","zz"],[1,"hr"],[1,"text-start","d-flex","ion-margin-vertical"],["color","primary","name","mail",1,"ms-2","me-2","my-auto","f"],["color","dark",1,"me-auto","my-auto"],[1,"f","mb-0"],["color","primary","name","logo-whatsapp",1,"ms-2","me-2","my-auto","f"],["color","primary","name","call",1,"ms-2","me-3","my-auto","f"],[1,"col-xl-3","col-lg-6","my-auto","mx-auto","d-flex"],[1,"col-lg-6","col-xl-3","my-auto","mx-auto","d-flex"],["mode","ios",1,"ion-padding","mx-auto","a",2,"border","1px solid black"],[1,"d-flex","py-5","w-100"],[1,"shadow","mx-auto","py-0","w-100"],[1,"p-0","m-0"],[1,"row"],[1,"col-md-6","d-flex","my-3","my-md-0",2,"background-image","url(../../../../../assets/15.jpg)","background-position","bottom center","background-size","cover","background-repeat","no-repeat","min-height","40vh"],[1,"col-md-6","d-flex","gray"],[1,"m-auto","container"],["color","primary",1,"ion-margin-vertical"],[1,"mb-2","titulo","text-black"],[1,"mb-5","hrr"],["shape","round",1,"mb-3"],[1,"container"],[1,"col-md-3","my-3","mx-auto","text-center"],["src","../../../../../assets/logo-icic2.png","alt",""],["src","../../../../../assets/logo-itc-3.png","alt",""],["src","../../../../../assets/logo-fic2.png","alt",""]],template:function(t,i){1&t&&(o._UZ(0,"web-header"),o.TgZ(1,"ion-content",0)(2,"div",1)(3,"div",2)(4,"ion-card",3)(5,"h1",4),o._uU(6,"Cont\xe1ctanos"),o.qZA(),o._UZ(7,"hr",5),o.TgZ(8,"ion-input",6),o.NdJ("ngModelChange",function(c){return i.form.name=c}),o.qZA(),o.TgZ(9,"ion-input",7),o.NdJ("ngModelChange",function(c){return i.form.correo=c}),o.qZA(),o.TgZ(10,"ion-input",8),o.NdJ("ngModelChange",function(c){return i.form.tel=c}),o.qZA(),o.TgZ(11,"ion-textarea",9),o.NdJ("ngModelChange",function(c){return i.form.mensaje=c}),o.qZA(),o.TgZ(12,"ion-button",10),o.NdJ("click",function(){return i.send()}),o._uU(13," Enviar "),o.qZA()()()(),o.TgZ(14,"div",11)(15,"div",12)(16,"h1",4),o._uU(17,"Informaci\xf3n de Contacto"),o.qZA(),o._UZ(18,"hr",5),o.qZA(),o.TgZ(19,"div",13)(20,"div",14)(21,"ion-card",15)(22,"ion-text",16)(23,"h1",17),o._uU(24,"Afiliaci\xf3n / SIEM"),o.qZA()(),o._UZ(25,"hr",18),o.TgZ(26,"div",19),o._UZ(27,"ion-icon",20),o.TgZ(28,"ion-text",21)(29,"h6",22),o._uU(30,"afiliacion@cmiccdmx.org"),o.qZA()()(),o.TgZ(31,"div",19),o._UZ(32,"ion-icon",20),o.TgZ(33,"ion-text",21)(34,"h6",22),o._uU(35,"coord.afiliacion@cmiccdmx.org"),o.qZA()()(),o.TgZ(36,"div",19),o._UZ(37,"ion-icon",23),o.TgZ(38,"ion-text",21)(39,"h6",22),o._uU(40,"55 6472 0073"),o.qZA()()(),o.TgZ(41,"div",19),o._UZ(42,"ion-icon",24),o.TgZ(43,"ion-text",21)(44,"h6",22),o._uU(45,"55 5424 7438 / 55 5424 7438 / 55 5424 7400 Ext. 2007 / 7064 "),o.qZA()()()()(),o.TgZ(46,"div",25)(47,"ion-card",15)(48,"ion-text",16)(49,"h1",17),o._uU(50,"ITC"),o.qZA()(),o._UZ(51,"hr",18),o.TgZ(52,"ion-text",21)(53,"h6",22),o._uU(54,"Licenciaturas, maestr\xedas, diplomados y especialidades:"),o.qZA()(),o.TgZ(55,"div",19),o._UZ(56,"ion-icon",20),o.TgZ(57,"ion-text",21)(58,"h6",22),o._uU(59,"direccion.cdmx@itc-ac.edu.mx"),o.qZA()()(),o.TgZ(60,"div",19),o._UZ(61,"ion-icon",20),o.TgZ(62,"ion-text",21)(63,"h6",22),o._uU(64,"info@itc-ac.edu.mx"),o.qZA()()(),o.TgZ(65,"div",19),o._UZ(66,"ion-icon",20),o.TgZ(67,"ion-text",21)(68,"h6",22),o._uU(69,"promocionitccdmx@itc-ac.edu.mx"),o.qZA()()(),o._UZ(70,"br"),o.TgZ(71,"ion-text",21)(72,"h6",22),o._uU(73,"Oficina Acad\xe9mica:"),o.qZA()(),o.TgZ(74,"div",19),o._UZ(75,"ion-icon",20),o.TgZ(76,"ion-text",21)(77,"h6",22),o._uU(78,"gabriela@itc-ac.edu.mx"),o.qZA()()(),o.TgZ(79,"div",19),o._UZ(80,"ion-icon",23),o.TgZ(81,"ion-text",21)(82,"h6",22),o._uU(83,"55 6472 0073"),o.qZA()()(),o.TgZ(84,"div",19),o._UZ(85,"ion-icon",24),o.TgZ(86,"ion-text",21)(87,"h6",22),o._uU(88,"55 5668 0787 / 2851 / 0748 Ext. 5 / 2019 / 2020 "),o.qZA()()()()(),o.TgZ(89,"div",26)(90,"ion-card",27)(91,"ion-text",16)(92,"h1",17),o._uU(93,"ICIC"),o.qZA()(),o._UZ(94,"hr",18),o.TgZ(95,"div",19),o._UZ(96,"ion-icon",20),o.TgZ(97,"ion-text",21)(98,"h6",22),o._uU(99,"asistente.icic@icic-oc.org"),o.qZA()()(),o.TgZ(100,"div",19),o._UZ(101,"ion-icon",20),o.TgZ(102,"ion-text",21)(103,"h6",22),o._uU(104,"lizbeth.casanova@cmiccdmx.org"),o.qZA()()(),o.TgZ(105,"div",19),o._UZ(106,"ion-icon",20),o.TgZ(107,"ion-text",21)(108,"h6",22),o._uU(109,"yoselin.pina@cmiccdmx.org"),o.qZA()()(),o._UZ(110,"br"),o.TgZ(111,"div",19),o._UZ(112,"ion-icon",23),o.TgZ(113,"ion-text",21)(114,"h6",22),o._uU(115,"55 2748 6784"),o.qZA()()(),o.TgZ(116,"div",19),o._UZ(117,"ion-icon",24),o.TgZ(118,"ion-text",21)(119,"h6",22),o._uU(120,"55 5424 7400 Ext. 2020 / 2019 / 2017 "),o.qZA()()()()(),o.TgZ(121,"div",26)(122,"ion-card",15)(123,"ion-text",16)(124,"h1",17),o._uU(125,"FIC"),o.qZA()(),o._UZ(126,"hr",18),o.TgZ(127,"div",19),o._UZ(128,"ion-icon",20),o.TgZ(129,"ion-text",21)(130,"h6",22),o._uU(131,"seminarios.fic@fic.org.mx"),o.qZA()()(),o.TgZ(132,"div",19),o._UZ(133,"ion-icon",20),o.TgZ(134,"ion-text",21)(135,"h6",22),o._uU(136,"asistente.icic@cmiccdmx.org"),o.qZA()()(),o.TgZ(137,"div",19),o._UZ(138,"ion-icon",23),o.TgZ(139,"ion-text",21)(140,"h6",22),o._uU(141,"55 2712 0779"),o.qZA()()(),o.TgZ(142,"div",19),o._UZ(143,"ion-icon",24),o.TgZ(144,"ion-text",21)(145,"h6",22),o._uU(146,"55 6271 4910"),o.qZA()()()()()()(),o.TgZ(147,"div",28)(148,"ion-card",29)(149,"ion-card-content",30)(150,"div",31),o._UZ(151,"div",32),o.TgZ(152,"div",33)(153,"div",34)(154,"ion-text",35)(155,"h5")(156,"strong"),o._uU(157,"CMIC Ciudad de M\xe9xico"),o.qZA()()(),o.TgZ(158,"h1",36),o._uU(159," Af\xedliate ahora a la CMIC y "),o._UZ(160,"br"),o._uU(161," disfruta todos los beneficios"),o.qZA(),o._UZ(162,"hr",37),o.TgZ(163,"ion-button",38),o._uU(164," Af\xedliate "),o.qZA()()()()()()(),o.TgZ(165,"div",39)(166,"div",31)(167,"div",40),o._UZ(168,"img",41),o.qZA(),o.TgZ(169,"div",40),o._UZ(170,"img",42),o.qZA(),o.TgZ(171,"div",40),o._UZ(172,"img",43),o.qZA()()(),o._UZ(173,"web-footer"),o.qZA()),2&t&&(o.xp6(1),o.Q6J("fullscreen",!0),o.xp6(7),o.Q6J("ngModel",i.form.name),o.xp6(1),o.Q6J("ngModel",i.form.correo),o.xp6(1),o.Q6J("ngModel",i.form.tel),o.xp6(1),o.Q6J("ngModel",i.form.mensaje),o.xp6(1),o.Q6J("disabled",!i.form.correo.includes("@")))},dependencies:[d.JJ,d.On,a.YG,a.PM,a.FN,a.W2,a.gu,a.pK,a.yW,a.g2,a.j9,Z.r,h.s],styles:[".mapa[_ngcontent-%COMP%]{background-image:url(Mapa.7e72b1f48280a51f.png);background-position:center;background-repeat:no-repeat;background-size:cover;min-height:70vh}.hrr[_ngcontent-%COMP%]{border-color:var(--ion-color-primary);background-color:var(--ion-color-primary);border-width:2px;margin:0 auto 0 0;width:100px;opacity:1}.titu[_ngcontent-%COMP%]{font-size:42px!important;font-weight:700}ion-card[_ngcontent-%COMP%]{border-radius:15px}.info[_ngcontent-%COMP%]{background:rgb(255,255,255);background:linear-gradient(0deg,rgb(255,255,255) 50%,rgb(241,241,241) 50%);min-height:70vh;font-weight:700}.a[_ngcontent-%COMP%]{border-color:var(--ion-color-primary)!important;border:1px;min-width:350px;max-width:350px;min-height:505px}.f[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.hr[_ngcontent-%COMP%]{margin-right:auto}.zz[_ngcontent-%COMP%]{font-size:40px;font-weight:bolder}.titulo[_ngcontent-%COMP%]{font-size:32px!important;font-weight:700}.gray[_ngcontent-%COMP%]{background-color:#f1f1f1}"]}),r})()}];let U=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.Bz.forChild(T),u.Bz]}),r})(),_=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[p.ez,d.u5,a.Pc,U,Z.r,h.s]}),r})()}}]);