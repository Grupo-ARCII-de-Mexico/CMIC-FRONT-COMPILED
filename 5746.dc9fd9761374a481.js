"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5746,9026],{5404:(I,b,i)=>{i.d(b,{x:()=>R});var m=i(5861),P=i(9026),c=i(9397),E=i(4664),T=i(4028),t=i(6689),y=i(930),Z=i(95),e=i(2264),C=i(4433),d=i(9843),U=i(1284),_=i(7153),A=i(2425),h=i(6814);function M(p,a){if(1&p&&(t.TgZ(0,"ion-select-option",24),t._uU(1),t.qZA()),2&p){const r=a.$implicit;t.Q6J("value",a.index),t.xp6(1),t.Oqu(r)}}function x(p,a){if(1&p&&(t.TgZ(0,"ion-select-option",24),t._uU(1),t.qZA()),2&p){const r=a.$implicit;t.Q6J("value",null==r?null:r.id),t.xp6(1),t.Oqu(null==r?null:r.ciudad)}}function O(p,a){if(1&p&&(t.TgZ(0,"ion-select-option",24),t._uU(1),t.qZA()),2&p){const r=a.$implicit;t.Q6J("value",r.id),t.xp6(1),t.Oqu(r.nombre)}}function D(p,a){if(1&p&&(t.TgZ(0,"ion-select-option",25),t._uU(1),t.qZA()),2&p){const r=t.oxw(2);t.Q6J("value",null==r.extranjero?null:r.extranjero.id),t.xp6(1),t.Oqu(null==r.extranjero?null:r.extranjero.nombre)}}function N(p,a){if(1&p){const r=t.EpF();t.TgZ(0,"form",5),t.NdJ("ngSubmit",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.update())}),t.TgZ(1,"ion-item")(2,"ion-select",6),t.YNc(3,M,2,2,"ion-select-option",7),t.qZA()(),t.TgZ(4,"ion-item"),t._UZ(5,"ion-input",8),t.qZA(),t.TgZ(6,"ion-item")(7,"ion-input",9)(8,"div",10),t._uU(9,"Nombre Completo "),t.TgZ(10,"ion-text",11),t._uU(11,"*"),t.qZA()()()(),t.TgZ(12,"ion-item")(13,"ion-input",12)(14,"div",10),t._uU(15,"Tel\xe9fono "),t.TgZ(16,"ion-text",11),t._uU(17,"*"),t.qZA()()()(),t.TgZ(18,"ion-item")(19,"ion-input",13)(20,"div",10),t._uU(21,"Correo "),t.TgZ(22,"ion-text",11),t._uU(23,"*"),t.qZA()()()(),t.TgZ(24,"ion-item"),t._UZ(25,"ion-input",14),t.qZA(),t.TgZ(26,"ion-item")(27,"ion-input",15)(28,"div",10),t._uU(29,"Cargo en la empresa "),t._UZ(30,"ion-text",11),t.qZA()()(),t.TgZ(31,"ion-item")(32,"ion-select",16),t.YNc(33,x,2,2,"ion-select-option",7),t.qZA()(),t.TgZ(34,"ion-item"),t._UZ(35,"ion-input",17),t.qZA(),t.TgZ(36,"ion-item")(37,"ion-select",18)(38,"div",10),t._uU(39,"Estado de Origen "),t.qZA(),t.YNc(40,O,2,2,"ion-select-option",7),t.YNc(41,D,2,2,"ion-select-option",19),t.qZA()(),t.TgZ(42,"ion-item"),t._UZ(43,"ion-input",20),t.qZA(),t.TgZ(44,"ion-item"),t._UZ(45,"ion-input",21),t.qZA(),t.TgZ(46,"ion-item")(47,"ion-text"),t._uU(48,"Suba su credencial estudiantil o documento que lo avale "),t._UZ(49,"br"),t.qZA(),t.TgZ(50,"ion-button",22),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.upload())}),t._uU(51," Subir Credencial "),t.qZA()(),t.TgZ(52,"ion-button",23),t._uU(53," Actualizar "),t.qZA()()}if(2&p){const r=t.oxw();t.Q6J("formGroup",r.participanteForm),t.xp6(3),t.Q6J("ngForOf",r.tipoPublicoArray),t.xp6(29),t.Q6J("cancelText","Cerrar"),t.xp6(1),t.Q6J("ngForOf",r.delegaciones),t.xp6(4),t.Q6J("cancelText","Cerrar"),t.xp6(3),t.Q6J("ngForOf",r.estados),t.xp6(1),t.Q6J("ngIf",r.extranjero)}}let R=(()=>{var p;class a{constructor(o,n,l,u,s,f,S,g,v){this.genericS=o,this.fb=n,this.compressService=l,this.alert=u,this.modalC=s,this.boletos=f,this.nav=S,this.load=g,this.toast=v,this.delegaciones=[],this.estados=[],this.tipoPublico=T.L,this.tipoPublicoArray=T.x,this.stripeCosto=0}ngOnInit(){this.stripe(),(0,P.$)(this.genericS.getAll("delegacion"),this.genericS.getAll("estados")).pipe((0,c.b)(o=>{var n,l,u,s,f;this.delegaciones=o[0].sort(function(g,v){return g.ciudad.localeCompare(v.ciudad)}),this.extranjero=o[1].find(g=>33==g.id),this.estados=o[1].filter(g=>33!==g.id).sort(function(g,v){return g.nombre.localeCompare(v.nombre)}),this.participante=this.boleto.participante,console.log(this.boleto);const S=null!==(n=null===(l=o[0].find(g=>{var v;return g.ciudad===(null===(v=this.participante)||void 0===v?void 0:v.delegacion)}))||void 0===l?void 0:l.id)&&void 0!==n?n:null;this.participanteForm=this.fb.group({nombre:this.participante.nombre,numAfiliado:this.participante.numAfiliado,telefono:this.participante.telefono,email:this.participante.email,cargo:this.participante.cargo,empresa:this.participante.empresa,curp:this.participante.curp,rfc:this.participante.rfc,organizacion:this.participante.organizacion,estado:null!==(u=null===(s=this.participante)||void 0===s||null===(s=s.estado)||void 0===s?void 0:s.id)&&void 0!==u?u:null,delegacion:S,tipo:null!==(f=Number(this.participante.tipo))&&void 0!==f?f:0})})).subscribe()}upload(){var o=this;return(0,m.Z)(function*(){o.evidencia=yield o.compressService.returnImageCompress()})()}update(){var o=this;return(0,m.Z)(function*(){if(o.load.setData({message:"Actualizando Usuario",animated:!0,spinner:"dots"}),yield o.load.create(),yield o.load.show(),o.participanteForm.controls.delegacion.value){var n,l;const u=null!==(n=o.delegaciones.find(s=>s.id===o.participanteForm.controls.delegacion.value))&&void 0!==n?n:null;o.participanteForm.controls.delegacion.setValue(null!==(l=null==u?void 0:u.ciudad)&&void 0!==l?l:null)}o.genericS.update("participante",o.participante.id,{...o.participanteForm.value}).subscribe(function(){var u=(0,m.Z)(function*(s){yield o.modalC.dismiss(),yield o.load.hide(),o.toast.success("Usuario Actualizado"),o.boletos.updateEvento(o.boleto.id,{participante:s})});return function(s){return u.apply(this,arguments)}}())})()}updateBoleto(){this.genericS.update("boleto",this.boleto.id,this.boleto).subscribe(o=>{this.boletos.updateEvento(o.id,o)})}stripe(){this.boleto.idPago&&this.genericS.post("payments",{idPago:this.boleto.idPago}).subscribe(o=>{this.stripeCosto=o.amount})}pagar(){var o=this;return(0,m.Z)(function*(){var n;yield o.alert.setData({animated:!0,header:"Confirmar Pago",message:"Si confirma el pago se procedera con el proceso de entrega del QR",buttons:[{text:"Cancelar"},{text:"Confirmar",handler:(n=(0,m.Z)(function*(){o.genericS.update("boleto",o.boleto.id,{active:!0}).pipe((0,E.w)(l=>(o.boletos.updateEvento(l.id,l),o.genericS.post("boleto/confirm/"+l.id,{}))),(0,c.b)(l=>{o.toast.success("boleto activado"),o.modalC.dismiss()})).subscribe()}),function(){return n.apply(this,arguments)})}]})})()}}return(p=a).\u0275fac=function(o){return new(o||p)(t.Y36(y.M),t.Y36(Z.qu),t.Y36(e.Y),t.Y36(C.c),t.Y36(d.IN),t.Y36(U.b9),t.Y36(d.SH),t.Y36(_.b),t.Y36(A._W))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-editar-usuario"]],inputs:{boleto:"boleto"},decls:8,vars:3,consts:[[3,"translucent"],["color","primary"],["slot","end","color","tertiary","expand","block",1,"me-2",3,"click"],[3,"fullscreen"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["label","Tipo de Participante","formControlName","tipo","placeholder","Seleccione"],[3,"value",4,"ngFor","ngForOf"],["labelPlacement","floating","label","No.Afiliado","formControlName","numAfiliado","type","text"],["labelPlacement","floating","formControlName","nombre","type","text"],["slot","label"],["color","danger"],["labelPlacement","floating","formControlName","telefono","type","text"],["labelPlacement","floating","formControlName","email","type","email"],["label","Ingrese el nombre de su empresa","labelPlacement","floating","formControlName","empresa","type","text"],["labelPlacement","floating","formControlName","cargo","type","text"],["label","Delegaci\xf3n CMIC","formControlName","delegacion","okText","Seleccionar","placeholder","Seleccione",3,"cancelText"],["label","Ingrese el nombre de su organizaci\xf3n","labelPlacement","floating","formControlName","organizacion","type","text"],["formControlName","estado","okText","Seleccionar","placeholder","Seleccione",3,"cancelText"],["class","border-top",3,"value",4,"ngIf"],["label","RFC","labelPlacement","floating","formControlName","rfc","type","text"],["label","CURP","labelPlacement","floating","formControlName","curp","type","text"],["expand","block","shape","round",3,"click"],["expand","block","slot","end","shape","round","type","submit",1,"mt-3"],[3,"value"],[1,"border-top",3,"value"]],template:function(o,n){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),t._uU(3,"Editar Participante"),t.qZA(),t.TgZ(4,"ion-button",2),t.NdJ("click",function(){return n.pagar()}),t._uU(5," Confirmar Pago "),t.qZA()()(),t.TgZ(6,"ion-content",3),t.YNc(7,N,54,7,"form",4),t.qZA()),2&o&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",n.participanteForm))},dependencies:[h.sg,h.O5,Z._Y,Z.JJ,Z.JL,Z.sg,Z.u,d.YG,d.W2,d.Gu,d.pK,d.Ie,d.t9,d.n0,d.yW,d.wd,d.sr,d.QI,d.j9]}),a})()},5746:(I,b,i)=>{i.r(b),i.d(b,{VerUsuariosPageModule:()=>p});var m=i(6814),P=i(95),c=i(9843),E=i(9085),T=i(5861),t=i(6676),y=i(4028),Z=i(5404),e=i(6689),C=i(1284),d=i(8013),U=i(930),_=i(4433),A=i(2425),h=i(6991);let M=(()=>{var a;class r{transform(n,l){const u=[];if(!l)return n;if(n)for(const f of n){var s;(null==f||null===(s=f.participante)||void 0===s?void 0:s.nombre.toLowerCase().indexOf(l.toLowerCase()))>-1&&u.push(f)}return(0,h.o)(u)}}return(a=r).\u0275fac=function(n){return new(n||a)},a.\u0275pipe=e.Yjl({name:"userSearch",type:a,pure:!0}),r})();function x(a,r){if(1&a){const o=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"ion-buttons",10)(15,"ion-button",11),e.NdJ("click",function(){const u=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.edit(u))}),e._UZ(16,"ion-icon",12),e.qZA(),e.TgZ(17,"ion-button",11),e.NdJ("click",function(){const u=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.delete(u.id))}),e._UZ(18,"ion-icon",13),e.qZA()()()()}if(2&a){const o=r.$implicit,n=e.oxw();e.xp6(2),e.Oqu(null==o||null==o.participante?null:o.participante.nombre),e.xp6(2),e.Oqu(null==o||null==o.participante?null:o.participante.rfc),e.xp6(2),e.Oqu(null==o||null==o.participante?null:o.participante.telefono),e.xp6(2),e.Oqu(null==o||null==o.participante?null:o.participante.email),e.xp6(2),e.Oqu(n.tipoPubico[null==o||null==o.participante?null:o.participante.tipo]),e.xp6(2),e.Oqu(o.active?"Pagado":"")}}const D=[{path:"",component:(()=>{var a;class r{constructor(n,l,u,s,f,S,g,v){this.modalC=n,this.boletoRepo=l,this.eventoRepo=u,this.nav=s,this.genericS=f,this.alert=S,this.toast=g,this.activeRoute=v,this.boletos=[],this.tipoPubico=y.x}ngOnInit(){this.activeRoute.queryParams.subscribe(n=>{this.idEvento=Number(n.id)}),this.boletoRepo.evento$.subscribe(n=>{this.boletos=n,0===this.boletos.length&&this.nav.navigateForward("dashboard/eventos")})}mon(n){return t().locale("es"),t(n).format("L")+" "+t(n).format("LT")}edit(n){var l=this;return(0,T.Z)(function*(){yield(yield l.modalC.create({component:Z.x,componentProps:{boleto:n,evento:l.idEvento}})).present()})()}delete(n){var l=this;return(0,T.Z)(function*(){yield l.alert.setData({animated:!0,header:"Eliminar usuario",message:"\xbfDesea eliminarlo Permanentemente?",buttons:[{text:"cancelar"},{text:"Confirmar",handler:()=>{l.genericS.delete("boleto",n).subscribe(u=>{l.boletos=l.boletos.filter(s=>s.id!==n),l.toast.success("Usuario Eliminado Correctamente"),l.eventoRepo.updateEvento(l.idEvento,{boletos:l.boletos})})}}]})})()}}return(a=r).\u0275fac=function(n){return new(n||a)(e.Y36(c.IN),e.Y36(C.b9),e.Y36(d.hJ),e.Y36(c.SH),e.Y36(U.M),e.Y36(_.c),e.Y36(A._W),e.Y36(E.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-ver-usuarios"]],decls:29,vars:7,consts:[[3,"fullscreen"],[1,"mt-5"],[1,"container"],[1,"d-flex","mt-5"],[1,"h2"],["placeholder","Buscar usuario","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"ngModel","debounce","ngModelChange"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red"],[4,"ngFor","ngForOf"],["slot","start"],["color","primary","fill","clear",3,"click"],["slot","icon-only","name","create-outline"],["slot","icon-only","name","trash-outline"]],template:function(n,l){1&n&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1)(2,"br"),e.TgZ(3,"div",2)(4,"div",3)(5,"h5",4)(6,"b"),e._uU(7,"Ver Usuarios"),e.qZA()(),e.TgZ(8,"ion-searchbar",5),e.NdJ("ngModelChange",function(s){return l.search=s}),e.qZA()(),e.TgZ(9,"table",6)(10,"thead",7)(11,"tr")(12,"th",8),e._uU(13,"Nombre"),e.qZA(),e.TgZ(14,"th",8),e._uU(15,"RFC"),e.qZA(),e.TgZ(16,"th",8),e._uU(17,"Tel\xe9fono"),e.qZA(),e.TgZ(18,"th",8),e._uU(19,"Correo"),e.qZA(),e.TgZ(20,"th",8),e._uU(21,"Role"),e.qZA(),e.TgZ(22,"th",8),e._uU(23,"Estatus"),e.qZA(),e.TgZ(24,"th",8),e._uU(25,"Opciones"),e.qZA()()(),e.TgZ(26,"tbody"),e.YNc(27,x,19,6,"tr",9),e.ALo(28,"userSearch"),e.qZA()()()()),2&n&&(e.Q6J("fullscreen",!0),e.xp6(8),e.Q6J("ngModel",l.search)("debounce",250),e.xp6(19),e.Q6J("ngForOf",e.xi3(28,4,l.boletos,l.search)))},dependencies:[m.sg,P.JJ,P.On,c.YG,c.Sm,c.W2,c.gu,c.VI,c.j9,M],styles:[".red[_ngcontent-%COMP%]{background-color:red;color:#fff}"]}),r})()},{path:"editar-usuario",loadChildren:()=>i.e(6967).then(i.bind(i,6967)).then(a=>a.EditarUsuarioPageModule)}];let N=(()=>{var a;class r{}return(a=r).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[E.Bz.forChild(D),E.Bz]}),r})();var R=i(3386);let p=(()=>{var a;class r{}return(a=r).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.ez,P.u5,c.Pc,N,R.d]}),r})()},4028:(I,b,i)=>{i.d(b,{L:()=>m,x:()=>P});var m=function(c){return c[c.ESTUDIANTES=0]="ESTUDIANTES",c[c.AFILIADOS=1]="AFILIADOS",c[c.PUBLICO_GENERAL=2]="PUBLICO_GENERAL",c[c.PRENSA=3]="PRENSA",c}(m||{});const P=["Estudiante","Afiliado","P\xfablico General","Prensa"]},9026:(I,b,i)=>{i.d(b,{$:()=>Z});var m=i(5592),P=i(4829);const{isArray:c}=Array;var T=i(6232),t=i(8251),y=i(4564);function Z(...e){const C=(0,y.jO)(e),d=function E(e){return 1===e.length&&c(e[0])?e[0]:e}(e);return d.length?new m.y(U=>{let _=d.map(()=>[]),A=d.map(()=>!1);U.add(()=>{_=A=null});for(let h=0;!U.closed&&h<d.length;h++)(0,P.Xf)(d[h]).subscribe((0,t.x)(U,M=>{if(_[h].push(M),_.every(x=>x.length)){const x=_.map(O=>O.shift());U.next(C?C(...x):x),_.some((O,D)=>!O.length&&A[D])&&U.complete()}},()=>{A[h]=!0,!_[h].length&&U.complete()}));return()=>{_=A=null}}):T.E}}}]);