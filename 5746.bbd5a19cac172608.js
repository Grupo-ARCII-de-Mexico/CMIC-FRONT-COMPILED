"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5746],{5404:(D,b,i)=>{i.d(b,{x:()=>N});var g=i(5861),U=i(9026),c=i(9397),T=i(4664),E=i(4028),e=i(6689),O=i(930),f=i(95),t=i(2264),x=i(4433),u=i(9843),Z=i(1284),h=i(7153),P=i(2425),_=i(6814);function y(d,r){if(1&d&&(e.TgZ(0,"ion-select-option",27),e._uU(1),e.qZA()),2&d){const l=r.$implicit;e.Q6J("value",r.index),e.xp6(1),e.Oqu(l)}}function A(d,r){if(1&d&&(e.TgZ(0,"ion-select-option",27),e._uU(1),e.qZA()),2&d){const l=r.$implicit;e.Q6J("value",null==l?null:l.id),e.xp6(1),e.Oqu(null==l?null:l.ciudad)}}function C(d,r){if(1&d&&(e.TgZ(0,"ion-select-option",27),e._uU(1),e.qZA()),2&d){const l=r.$implicit;e.Q6J("value",l.id),e.xp6(1),e.Oqu(l.nombre)}}function M(d,r){if(1&d&&(e.TgZ(0,"ion-select-option",28),e._uU(1),e.qZA()),2&d){const l=e.oxw(2);e.Q6J("value",null==l.extranjero?null:l.extranjero.id),e.xp6(1),e.Oqu(null==l.extranjero?null:l.extranjero.nombre)}}function S(d,r){if(1&d){const l=e.EpF();e.TgZ(0,"form",8),e.NdJ("ngSubmit",function(){e.CHM(l);const n=e.oxw();return e.KtG(n.update())}),e.TgZ(1,"ion-item")(2,"ion-select",9),e.YNc(3,y,2,2,"ion-select-option",10),e.qZA()(),e.TgZ(4,"ion-item"),e._UZ(5,"ion-input",11),e.qZA(),e.TgZ(6,"ion-item")(7,"ion-input",12)(8,"div",13),e._uU(9,"Nombre Completo "),e.TgZ(10,"ion-text",14),e._uU(11,"*"),e.qZA()()()(),e.TgZ(12,"ion-item")(13,"ion-input",15)(14,"div",13),e._uU(15,"Tel\xe9fono "),e.TgZ(16,"ion-text",14),e._uU(17,"*"),e.qZA()()()(),e.TgZ(18,"ion-item")(19,"ion-input",16)(20,"div",13),e._uU(21,"Correo "),e.TgZ(22,"ion-text",14),e._uU(23,"*"),e.qZA()()()(),e.TgZ(24,"ion-item"),e._UZ(25,"ion-input",17),e.qZA(),e.TgZ(26,"ion-item")(27,"ion-input",18)(28,"div",13),e._uU(29,"Cargo en la empresa "),e._UZ(30,"ion-text",14),e.qZA()()(),e.TgZ(31,"ion-item")(32,"ion-select",19),e.YNc(33,A,2,2,"ion-select-option",10),e.qZA()(),e.TgZ(34,"ion-item"),e._UZ(35,"ion-input",20),e.qZA(),e.TgZ(36,"ion-item")(37,"ion-select",21)(38,"div",13),e._uU(39,"Estado de Origen "),e.qZA(),e.YNc(40,C,2,2,"ion-select-option",10),e.YNc(41,M,2,2,"ion-select-option",22),e.qZA()(),e.TgZ(42,"ion-item"),e._UZ(43,"ion-input",23),e.qZA(),e.TgZ(44,"ion-item"),e._UZ(45,"ion-input",24),e.qZA(),e.TgZ(46,"ion-item")(47,"ion-text"),e._uU(48,"Suba su credencial estudiantil o documento que lo avale "),e._UZ(49,"br"),e.qZA(),e.TgZ(50,"ion-button",25),e.NdJ("click",function(){e.CHM(l);const n=e.oxw();return e.KtG(n.upload())}),e._uU(51," Subir Credencial "),e.qZA()(),e.TgZ(52,"ion-button",26),e._uU(53," Actualizar "),e.qZA()()}if(2&d){const l=e.oxw();e.Q6J("formGroup",l.participanteForm),e.xp6(3),e.Q6J("ngForOf",l.tipoPublicoArray),e.xp6(29),e.Q6J("cancelText","Cerrar"),e.xp6(1),e.Q6J("ngForOf",l.delegaciones),e.xp6(4),e.Q6J("cancelText","Cerrar"),e.xp6(3),e.Q6J("ngForOf",l.estados),e.xp6(1),e.Q6J("ngIf",l.extranjero)}}let N=(()=>{var d;class r{constructor(o,n,a,s,p,m,v,I,J){this.genericS=o,this.fb=n,this.compressService=a,this.alert=s,this.modalC=p,this.boletos=m,this.nav=v,this.load=I,this.toast=J,this.delegaciones=[],this.estados=[],this.tipoPublico=E.L,this.tipoPublicoArray=E.x,this.stripeCosto=0}ngOnInit(){this.stripe(),(0,U.$)(this.genericS.getAll("delegacion"),this.genericS.getAll("estados")).pipe((0,c.b)(o=>{var n,a,s;this.delegaciones=o[0].sort(function(m,v){return m.ciudad.localeCompare(v.ciudad)}),this.extranjero=o[1].find(m=>33==m.id),this.estados=o[1].filter(m=>33!==m.id).sort(function(m,v){return m.nombre.localeCompare(v.nombre)}),this.participante=this.boleto.participante,console.log(this.boleto);const p=null!==(n=null===(a=o[0].find(m=>{var v;return m.ciudad===(null===(v=this.participante)||void 0===v?void 0:v.delegacion)}))||void 0===a?void 0:a.id)&&void 0!==n?n:null;this.participanteForm=this.fb.group({nombre:this.participante.nombre,numAfiliado:this.participante.numAfiliado,telefono:this.participante.telefono,email:this.participante.email,cargo:this.participante.cargo,empresa:this.participante.empresa,curp:this.participante.curp,rfc:this.participante.rfc,organizacion:this.participante.organizacion,estado:this.participante.estado.id,delegacion:p,tipo:null!==(s=Number(this.participante.tipo))&&void 0!==s?s:0})})).subscribe()}upload(){var o=this;return(0,g.Z)(function*(){o.evidencia=yield o.compressService.returnImageCompress()})()}update(){var o=this;return(0,g.Z)(function*(){if(o.load.setData({message:"Actualizando Usuario",animated:!0,spinner:"dots"}),yield o.load.create(),yield o.load.show(),o.participanteForm.controls.delegacion.value){var n,a;const s=null!==(n=o.delegaciones.find(p=>p.id===o.participanteForm.controls.delegacion.value))&&void 0!==n?n:null;o.participanteForm.controls.delegacion.setValue(null!==(a=null==s?void 0:s.ciudad)&&void 0!==a?a:null)}o.genericS.update("participante",o.participante.id,{...o.participanteForm.value}).subscribe(function(){var s=(0,g.Z)(function*(p){yield o.modalC.dismiss(),yield o.load.hide(),o.toast.success("Usuario Actualizado"),o.boletos.updateEvento(o.boleto.id,{participante:p})});return function(p){return s.apply(this,arguments)}}())})()}updateBoleto(){this.genericS.update("boleto",this.boleto.id,this.boleto).subscribe(o=>{this.boletos.updateEvento(o.id,o)})}stripe(){this.boleto.idPago&&this.genericS.post("payments",{idPago:this.boleto.idPago}).subscribe(o=>{this.stripeCosto=o.amount})}pagar(){var o=this;return(0,g.Z)(function*(){var n;o.alert.setData({animated:!0,header:"Confirmar Pago",message:"Si confirma el pago se procedera con el proceso de entrega del QR",buttons:[{text:"Cancelar"},{text:"Confirmar",handler:(n=(0,g.Z)(function*(){o.genericS.update("boleto",o.boleto.id,{active:!0}).pipe((0,T.w)(a=>(o.boletos.updateEvento(a.id,a),o.genericS.post("boleto/confirm/"+a.id,{}))),(0,c.b)(a=>{o.toast.success("boleto activado"),o.modalC.dismiss()})).subscribe()}),function(){return n.apply(this,arguments)})}]}),yield o.alert.create(),yield o.alert.show()})()}}return(d=r).\u0275fac=function(o){return new(o||d)(e.Y36(O.M),e.Y36(f.qu),e.Y36(t.Y),e.Y36(x.c),e.Y36(u.IN),e.Y36(Z.b9),e.Y36(u.SH),e.Y36(h.b),e.Y36(P._W))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-editar-usuario"]],inputs:{boleto:"boleto"},decls:14,vars:8,consts:[[3,"translucent"],["color","primary"],["slot","end","color","tertiary","expand","block",1,"me-2",3,"click"],[3,"fullscreen"],["label","privilegios","type","text","placeholder","",3,"ngModel","ngModelChange"],["label","costo boleto","type","text","placeholder","",3,"ngModel","ngModelChange"],["expand","block","fill","clear","shape","round",3,"click"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["label","Tipo de Participante","formControlName","tipo","placeholder","Seleccione"],[3,"value",4,"ngFor","ngForOf"],["labelPlacement","floating","label","No.Afiliado","formControlName","numAfiliado","type","text"],["labelPlacement","floating","formControlName","nombre","type","text"],["slot","label"],["color","danger"],["labelPlacement","floating","formControlName","telefono","type","text"],["labelPlacement","floating","formControlName","email","type","email"],["label","Ingrese el nombre de su empresa","labelPlacement","floating","formControlName","empresa","type","text"],["labelPlacement","floating","formControlName","cargo","type","text"],["label","Delegaci\xf3n CMIC","formControlName","delegacion","okText","Seleccionar","placeholder","Seleccione",3,"cancelText"],["label","Ingrese el nombre de su organizaci\xf3n","labelPlacement","floating","formControlName","organizacion","type","text"],["formControlName","estado","okText","Seleccionar","placeholder","Seleccione",3,"cancelText"],["class","border-top",3,"value",4,"ngIf"],["label","RFC","labelPlacement","floating","formControlName","rfc","type","text"],["label","CURP","labelPlacement","floating","formControlName","curp","type","text"],["expand","block","shape","round",3,"click"],["expand","block","slot","end","shape","round","type","submit",1,"mt-3"],[3,"value"],[1,"border-top",3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),e._uU(3,"Editar Participante"),e.qZA(),e.TgZ(4,"ion-button",2),e.NdJ("click",function(){return n.pagar()}),e._uU(5," Confirmar Pago "),e.qZA()()(),e.TgZ(6,"ion-content",3),e._uU(7),e.ALo(8,"currency"),e.TgZ(9,"ion-input",4),e.NdJ("ngModelChange",function(s){return n.boleto.privilegio=s}),e.qZA(),e.TgZ(10,"ion-input",5),e.NdJ("ngModelChange",function(s){return n.boleto.costo=s}),e.qZA(),e.TgZ(11,"ion-button",6),e.NdJ("click",function(){return n.updateBoleto()}),e._uU(12," Guardar "),e.qZA(),e.YNc(13,S,54,7,"form",7),e.qZA()),2&o&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(1),e.hij(" ",e.lcZ(8,6,n.stripeCosto)," "),e.xp6(2),e.Q6J("ngModel",n.boleto.privilegio),e.xp6(1),e.Q6J("ngModel",n.boleto.costo),e.xp6(3),e.Q6J("ngIf",n.participanteForm))},dependencies:[_.sg,_.O5,f._Y,f.JJ,f.JL,f.On,f.sg,f.u,u.YG,u.W2,u.Gu,u.pK,u.Ie,u.t9,u.n0,u.yW,u.wd,u.sr,u.QI,u.j9,_.H9]}),r})()},5746:(D,b,i)=>{i.r(b),i.d(b,{VerUsuariosPageModule:()=>d});var g=i(6814),U=i(95),c=i(9843),T=i(9085),E=i(5861),e=i(6676),O=i(4028),f=i(5404),t=i(6689),x=i(1284),u=i(8013),Z=i(930),h=i(4433),P=i(2425),_=i(6991);let y=(()=>{var r;class l{transform(n,a){const s=[];if(!a)return n;if(n)for(const m of n){var p;(null==m||null===(p=m.participante)||void 0===p?void 0:p.nombre.toLowerCase().indexOf(a.toLowerCase()))>-1&&s.push(m)}return(0,_.o)(s)}}return(r=l).\u0275fac=function(n){return new(n||r)},r.\u0275pipe=t.Yjl({name:"userSearch",type:r,pure:!0}),l})();function A(r,l){if(1&r){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"ion-buttons",10)(15,"ion-button",11),t.NdJ("click",function(){const s=t.CHM(o).$implicit,p=t.oxw();return t.KtG(p.edit(s))}),t._UZ(16,"ion-icon",12),t.qZA(),t.TgZ(17,"ion-button",11),t.NdJ("click",function(){const s=t.CHM(o).$implicit,p=t.oxw();return t.KtG(p.delete(s.id))}),t._UZ(18,"ion-icon",13),t.qZA()()()()}if(2&r){const o=l.$implicit,n=t.oxw();t.xp6(2),t.Oqu(null==o||null==o.participante?null:o.participante.nombre),t.xp6(2),t.Oqu(null==o||null==o.participante?null:o.participante.rfc),t.xp6(2),t.Oqu(null==o||null==o.participante?null:o.participante.telefono),t.xp6(2),t.Oqu(null==o||null==o.participante?null:o.participante.email),t.xp6(2),t.Oqu(n.tipoPubico[null==o||null==o.participante?null:o.participante.tipo]),t.xp6(2),t.Oqu(o.active?"Pagado":"")}}const M=[{path:"",component:(()=>{var r;class l{constructor(n,a,s,p,m,v,I,J){this.modalC=n,this.boletoRepo=a,this.eventoRepo=s,this.nav=p,this.genericS=m,this.alert=v,this.toast=I,this.activeRoute=J,this.boletos=[],this.tipoPubico=O.x}ngOnInit(){this.activeRoute.queryParams.subscribe(n=>{this.idEvento=Number(n.id)}),this.boletoRepo.evento$.subscribe(n=>{this.boletos=n,0===this.boletos.length&&this.nav.navigateForward("dashboard/eventos")})}mon(n){return e().locale("es"),e(n).format("L")+" "+e(n).format("LT")}edit(n){var a=this;return(0,E.Z)(function*(){yield(yield a.modalC.create({component:f.x,componentProps:{boleto:n,evento:a.idEvento}})).present()})()}delete(n){var a=this;return(0,E.Z)(function*(){yield a.alert.setData({animated:!0,header:"Eliminar usuario",message:"\xbfDesea eliminarlo Permanentemente?",buttons:[{text:"cancelar"},{text:"Confirmar",handler:()=>{a.genericS.delete("boleto",n).subscribe(s=>{a.boletos=a.boletos.filter(p=>p.id!==n),a.toast.success("Usuario Eliminado Correctamente"),a.eventoRepo.updateEvento(a.idEvento,{boletos:a.boletos})})}}]}),yield a.alert.create(),yield a.alert.show()})()}}return(r=l).\u0275fac=function(n){return new(n||r)(t.Y36(c.IN),t.Y36(x.b9),t.Y36(u.hJ),t.Y36(c.SH),t.Y36(Z.M),t.Y36(h.c),t.Y36(P._W),t.Y36(T.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-ver-usuarios"]],decls:29,vars:7,consts:[[3,"fullscreen"],[1,"mt-5"],[1,"container"],[1,"d-flex","mt-5"],[1,"h2"],["placeholder","Buscar usuario","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"ngModel","debounce","ngModelChange"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red"],[4,"ngFor","ngForOf"],["slot","start"],["color","primary","fill","clear",3,"click"],["slot","icon-only","name","create-outline"],["slot","icon-only","name","trash-outline"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-content",0),t._UZ(1,"div",1)(2,"br"),t.TgZ(3,"div",2)(4,"div",3)(5,"h5",4)(6,"b"),t._uU(7,"Ver Usuarios"),t.qZA()(),t.TgZ(8,"ion-searchbar",5),t.NdJ("ngModelChange",function(p){return a.search=p}),t.qZA()(),t.TgZ(9,"table",6)(10,"thead",7)(11,"tr")(12,"th",8),t._uU(13,"Nombre"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"RFC"),t.qZA(),t.TgZ(16,"th",8),t._uU(17,"Tel\xe9fono"),t.qZA(),t.TgZ(18,"th",8),t._uU(19,"Correo"),t.qZA(),t.TgZ(20,"th",8),t._uU(21,"Role"),t.qZA(),t.TgZ(22,"th",8),t._uU(23,"Estatus"),t.qZA(),t.TgZ(24,"th",8),t._uU(25,"Opciones"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,A,19,6,"tr",9),t.ALo(28,"userSearch"),t.qZA()()()()),2&n&&(t.Q6J("fullscreen",!0),t.xp6(8),t.Q6J("ngModel",a.search)("debounce",250),t.xp6(19),t.Q6J("ngForOf",t.xi3(28,4,a.boletos,a.search)))},dependencies:[g.sg,U.JJ,U.On,c.YG,c.Sm,c.W2,c.gu,c.VI,c.j9,y],styles:[".red[_ngcontent-%COMP%]{background-color:red;color:#fff}"]}),l})()},{path:"editar-usuario",loadChildren:()=>i.e(6967).then(i.bind(i,6967)).then(r=>r.EditarUsuarioPageModule)}];let S=(()=>{var r;class l{}return(r=l).\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[T.Bz.forChild(M),T.Bz]}),l})();var N=i(3386);let d=(()=>{var r;class l{}return(r=l).\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.ez,U.u5,c.Pc,S,N.d]}),l})()},4028:(D,b,i)=>{i.d(b,{L:()=>g,x:()=>U});var g=function(c){return c[c.ESTUDIANTES=0]="ESTUDIANTES",c[c.AFILIADOS=1]="AFILIADOS",c[c.PUBLICO_GENERAL=2]="PUBLICO_GENERAL",c[c.PRENSA=3]="PRENSA",c}(g||{});const U=["Estudiante","Afiliado","P\xfablico General","Prensa"]},9026:(D,b,i)=>{i.d(b,{$:()=>f});var g=i(5592),U=i(4829);const{isArray:c}=Array;var E=i(6232),e=i(8251),O=i(4564);function f(...t){const x=(0,O.jO)(t),u=function T(t){return 1===t.length&&c(t[0])?t[0]:t}(t);return u.length?new g.y(Z=>{let h=u.map(()=>[]),P=u.map(()=>!1);Z.add(()=>{h=P=null});for(let _=0;!Z.closed&&_<u.length;_++)(0,U.Xf)(u[_]).subscribe((0,e.x)(Z,y=>{if(h[_].push(y),h.every(A=>A.length)){const A=h.map(C=>C.shift());Z.next(x?x(...A):A),h.some((C,M)=>!C.length&&P[M])&&Z.complete()}},()=>{P[_]=!0,!h[_].length&&Z.complete()}));return()=>{h=P=null}}):E.E}}}]);