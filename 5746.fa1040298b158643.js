"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5746,9026,6588],{5404:(S,E,n)=>{n.d(E,{x:()=>c});var v=n(5861),P=n(9026),g=n(9397),T=n(4664),x=n(4028),e=n(6689),y=n(930),f=n(95),t=n(2264),O=n(4433),u=n(7027),Z=n(1284),h=n(7153),U=n(2425),_=n(6814);function M(l,a){if(1&l&&(e.TgZ(0,"ion-select-option",27),e._uU(1),e.qZA()),2&l){const i=a.$implicit;e.Q6J("value",a.index),e.xp6(1),e.Oqu(i)}}function C(l,a){if(1&l&&(e.TgZ(0,"ion-select-option",27),e._uU(1),e.qZA()),2&l){const i=a.$implicit;e.Q6J("value",null==i?null:i.id),e.xp6(1),e.Oqu(null==i?null:i.ciudad)}}function A(l,a){if(1&l&&(e.TgZ(0,"ion-select-option",27),e._uU(1),e.qZA()),2&l){const i=a.$implicit;e.Q6J("value",i.id),e.xp6(1),e.Oqu(i.nombre)}}function D(l,a){if(1&l&&(e.TgZ(0,"ion-select-option",28),e._uU(1),e.qZA()),2&l){const i=e.oxw(2);e.Q6J("value",null==i.extranjero?null:i.extranjero.id),e.xp6(1),e.Oqu(null==i.extranjero?null:i.extranjero.nombre)}}function N(l,a){if(1&l){const i=e.EpF();e.TgZ(0,"form",8),e.NdJ("ngSubmit",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.update())}),e.TgZ(1,"ion-item")(2,"ion-select",9),e.YNc(3,M,2,2,"ion-select-option",10),e.qZA()(),e.TgZ(4,"ion-item"),e._UZ(5,"ion-input",11),e.qZA(),e.TgZ(6,"ion-item")(7,"ion-input",12)(8,"div",13),e._uU(9,"Nombre Completo "),e.TgZ(10,"ion-text",14),e._uU(11,"*"),e.qZA()()()(),e.TgZ(12,"ion-item")(13,"ion-input",15)(14,"div",13),e._uU(15,"Tel\xe9fono "),e.TgZ(16,"ion-text",14),e._uU(17,"*"),e.qZA()()()(),e.TgZ(18,"ion-item")(19,"ion-input",16)(20,"div",13),e._uU(21,"Correo "),e.TgZ(22,"ion-text",14),e._uU(23,"*"),e.qZA()()()(),e.TgZ(24,"ion-item"),e._UZ(25,"ion-input",17),e.qZA(),e.TgZ(26,"ion-item")(27,"ion-input",18)(28,"div",13),e._uU(29,"Cargo en la empresa "),e._UZ(30,"ion-text",14),e.qZA()()(),e.TgZ(31,"ion-item")(32,"ion-select",19),e.YNc(33,C,2,2,"ion-select-option",10),e.qZA()(),e.TgZ(34,"ion-item"),e._UZ(35,"ion-input",20),e.qZA(),e.TgZ(36,"ion-item")(37,"ion-select",21)(38,"div",13),e._uU(39,"Estado de Origen "),e.qZA(),e.YNc(40,A,2,2,"ion-select-option",10),e.YNc(41,D,2,2,"ion-select-option",22),e.qZA()(),e.TgZ(42,"ion-item"),e._UZ(43,"ion-input",23),e.qZA(),e.TgZ(44,"ion-item"),e._UZ(45,"ion-input",24),e.qZA(),e.TgZ(46,"ion-item")(47,"ion-text"),e._uU(48,"Suba su credencial estudiantil o documento que lo avale "),e._UZ(49,"br"),e.qZA(),e.TgZ(50,"ion-button",25),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.upload())}),e._uU(51," Subir Credencial "),e.qZA()(),e.TgZ(52,"ion-button",26),e._uU(53," Actualizar "),e.qZA()()}if(2&l){const i=e.oxw();e.Q6J("formGroup",i.participanteForm),e.xp6(3),e.Q6J("ngForOf",i.tipoPublicoArray),e.xp6(29),e.Q6J("cancelText","Cerrar"),e.xp6(1),e.Q6J("ngForOf",i.delegaciones),e.xp6(4),e.Q6J("cancelText","Cerrar"),e.xp6(3),e.Q6J("ngForOf",i.estados),e.xp6(1),e.Q6J("ngIf",i.extranjero)}}let c=(()=>{var l;class a{constructor(o,r,s,d,p,J,m,b,I){this.genericS=o,this.fb=r,this.compressService=s,this.alert=d,this.modalC=p,this.boletos=J,this.nav=m,this.load=b,this.toast=I,this.delegaciones=[],this.estados=[],this.tipoPublico=x.L,this.tipoPublicoArray=x.x,this.stripeCosto=0}ngOnInit(){this.stripe(),(0,P.$)(this.genericS.getAll("delegacion"),this.genericS.getAll("estados")).pipe((0,g.b)(o=>{var r,s,d;this.delegaciones=o[0].sort(function(m,b){return m.ciudad.localeCompare(b.ciudad)});const p=this.delegaciones.find(m=>"OTRO"===m.ciudad.toUpperCase());this.delegaciones=this.delegaciones.filter(m=>"OTRO"!==m.ciudad.toUpperCase()),this.delegaciones.push(p),this.extranjero=o[1].find(m=>33==m.id),this.estados=o[1].filter(m=>33!==m.id).sort(function(m,b){return m.nombre.localeCompare(b.nombre)}),this.participante=this.boleto.participante,console.log(this.boleto);const J=null!==(r=null===(s=o[0].find(m=>{var b;return m.ciudad===(null===(b=this.participante)||void 0===b?void 0:b.delegacion)}))||void 0===s?void 0:s.id)&&void 0!==r?r:null;this.participanteForm=this.fb.group({nombre:this.participante.nombre,numAfiliado:this.participante.numAfiliado,telefono:this.participante.telefono,email:this.participante.email,cargo:this.participante.cargo,empresa:this.participante.empresa,curp:this.participante.curp,rfc:this.participante.rfc,organizacion:this.participante.organizacion,estado:this.participante.estado.id,delegacion:J,tipo:null!==(d=Number(this.participante.tipo))&&void 0!==d?d:0})})).subscribe()}upload(){var o=this;return(0,v.Z)(function*(){o.evidencia=yield o.compressService.returnImageCompress()})()}update(){var o=this;return(0,v.Z)(function*(){if(o.load.setData({message:"Actualizando Usuario",animated:!0,spinner:"dots"}),yield o.load.create(),yield o.load.show(),o.participanteForm.controls.delegacion.value){var r,s;const d=null!==(r=o.delegaciones.find(p=>p.id===o.participanteForm.controls.delegacion.value))&&void 0!==r?r:null;o.participanteForm.controls.delegacion.setValue(null!==(s=null==d?void 0:d.ciudad)&&void 0!==s?s:null)}o.genericS.update("participante",o.participante.id,{...o.participanteForm.value}).subscribe(function(){var d=(0,v.Z)(function*(p){yield o.modalC.dismiss(),yield o.load.hide(),o.toast.success("Usuario Actualizado"),o.boletos.updateEvento(o.boleto.id,{participante:p})});return function(p){return d.apply(this,arguments)}}())})()}updateBoleto(){this.genericS.update("boleto",this.boleto.id,this.boleto).subscribe(o=>{this.boletos.updateEvento(o.id,o)})}stripe(){this.boleto.idPago&&this.genericS.post("payments",{idPago:this.boleto.idPago}).subscribe(o=>{this.stripeCosto=o.amount})}pagar(){var o=this;return(0,v.Z)(function*(){var r;o.alert.setData({animated:!0,header:"Confirmar Pago",message:"Si confirma el pago se procedera con el proceso de entrega del QR",buttons:[{text:"Cancelar"},{text:"Confirmar",handler:(r=(0,v.Z)(function*(){o.genericS.update("boleto",o.boleto.id,{active:!0}).pipe((0,T.w)(s=>(o.boletos.updateEvento(s.id,s),o.genericS.post("boleto/confirm-free/"+s.id,{}))),(0,g.b)(s=>{o.toast.success("boleto activado"),o.modalC.dismiss()})).subscribe()}),function(){return r.apply(this,arguments)})}]}),yield o.alert.create(),yield o.alert.show()})()}}return(l=a).\u0275fac=function(o){return new(o||l)(e.Y36(y.M),e.Y36(f.qu),e.Y36(t.Y),e.Y36(O.c),e.Y36(u.IN),e.Y36(Z.b9),e.Y36(u.SH),e.Y36(h.b),e.Y36(U._W))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-editar-usuario"]],inputs:{boleto:"boleto"},decls:14,vars:8,consts:[[3,"translucent"],["color","primary"],["slot","end","color","tertiary","expand","block",1,"me-2",3,"click"],[3,"fullscreen"],["label","privilegios","type","text","placeholder","",3,"ngModel","ngModelChange"],["label","costo boleto","type","text","placeholder","",3,"ngModel","ngModelChange"],["expand","block","fill","clear","shape","round",3,"click"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["label","Tipo de Participante","formControlName","tipo","placeholder","Seleccione"],[3,"value",4,"ngFor","ngForOf"],["labelPlacement","floating","label","No.Afiliado","formControlName","numAfiliado","type","text"],["labelPlacement","floating","formControlName","nombre","type","text"],["slot","label"],["color","danger"],["labelPlacement","floating","formControlName","telefono","type","text"],["labelPlacement","floating","formControlName","email","type","email"],["label","Ingrese el nombre de su empresa","labelPlacement","floating","formControlName","empresa","type","text"],["labelPlacement","floating","formControlName","cargo","type","text"],["label","Delegaci\xf3n CMIC","formControlName","delegacion","okText","Seleccionar","placeholder","Seleccione",3,"cancelText"],["label","Ingrese el nombre de su organizaci\xf3n","labelPlacement","floating","formControlName","organizacion","type","text"],["formControlName","estado","okText","Seleccionar","placeholder","Seleccione",3,"cancelText"],["class","border-top",3,"value",4,"ngIf"],["label","RFC","labelPlacement","floating","formControlName","rfc","type","text"],["label","CURP","labelPlacement","floating","formControlName","curp","type","text"],["expand","block","shape","round",3,"click"],["expand","block","slot","end","shape","round","type","submit",1,"mt-3"],[3,"value"],[1,"border-top",3,"value"]],template:function(o,r){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),e._uU(3,"Editar Participante"),e.qZA(),e.TgZ(4,"ion-button",2),e.NdJ("click",function(){return r.pagar()}),e._uU(5," Confirmar Pago "),e.qZA()()(),e.TgZ(6,"ion-content",3),e._uU(7),e.ALo(8,"currency"),e.TgZ(9,"ion-input",4),e.NdJ("ngModelChange",function(d){return r.boleto.privilegio=d}),e.qZA(),e.TgZ(10,"ion-input",5),e.NdJ("ngModelChange",function(d){return r.boleto.costo=d}),e.qZA(),e.TgZ(11,"ion-button",6),e.NdJ("click",function(){return r.updateBoleto()}),e._uU(12," Guardar "),e.qZA(),e.YNc(13,N,54,7,"form",7),e.qZA()),2&o&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(1),e.hij(" ",e.lcZ(8,6,r.stripeCosto)," "),e.xp6(2),e.Q6J("ngModel",r.boleto.privilegio),e.xp6(1),e.Q6J("ngModel",r.boleto.costo),e.xp6(3),e.Q6J("ngIf",r.participanteForm))},dependencies:[_.sg,_.O5,f._Y,f.JJ,f.JL,f.On,f.sg,f.u,u.YG,u.W2,u.Gu,u.pK,u.Ie,u.t9,u.n0,u.yW,u.wd,u.sr,u.QI,u.j9,_.H9]}),a})()},5746:(S,E,n)=>{n.r(E),n.d(E,{VerUsuariosPageModule:()=>N});var v=n(6814),P=n(95),g=n(7027),T=n(9085),x=n(5861),e=n(6676),y=n(4028),f=n(5404),t=n(6689),O=n(1284),u=n(8013),Z=n(930),h=n(4433),U=n(2425);let _=(()=>{var c;class l{transform(i,o){const r=[];if(!o)return i;if(i)for(const p of i){var s,d;(null==p||null===(s=p.participante)||void 0===s?void 0:s.nombre.toLowerCase().indexOf(o.toLowerCase()))>-1&&r.push(p),(null==p||null===(d=p.participante)||void 0===d?void 0:d.email.toLowerCase().indexOf(o.toLowerCase()))>-1&&r.push(p)}return r}}return(c=l).\u0275fac=function(i){return new(i||c)},c.\u0275pipe=t.Yjl({name:"userSearch",type:c,pure:!0}),l})();function M(c,l){if(1&c){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"ion-buttons",10)(15,"ion-button",11),t.NdJ("click",function(){const r=t.CHM(a).$implicit,s=t.oxw();return t.KtG(s.edit(r))}),t._UZ(16,"ion-icon",12),t.qZA(),t.TgZ(17,"ion-button",11),t.NdJ("click",function(){const r=t.CHM(a).$implicit,s=t.oxw();return t.KtG(s.delete(r.id))}),t._UZ(18,"ion-icon",13),t.qZA()()()()}if(2&c){const a=l.$implicit,i=t.oxw();t.xp6(2),t.Oqu(null==a||null==a.participante?null:a.participante.nombre),t.xp6(2),t.Oqu(null==a||null==a.participante?null:a.participante.rfc),t.xp6(2),t.Oqu(null==a||null==a.participante?null:a.participante.telefono),t.xp6(2),t.Oqu(null==a||null==a.participante?null:a.participante.email),t.xp6(2),t.Oqu(i.tipoPubico[null==a||null==a.participante?null:a.participante.tipo]),t.xp6(2),t.Oqu(a.active?"Pagado":"")}}const A=[{path:"",component:(()=>{var c;class l{constructor(i,o,r,s,d,p,J,m){this.modalC=i,this.boletoRepo=o,this.eventoRepo=r,this.nav=s,this.genericS=d,this.alert=p,this.toast=J,this.activeRoute=m,this.boletos=[],this.tipoPubico=y.x}ngOnInit(){this.activeRoute.queryParams.subscribe(i=>{this.idEvento=Number(i.id)}),this.boletoRepo.evento$.subscribe(i=>{this.boletos=i,0===this.boletos.length&&this.nav.navigateForward("dashboard/eventos")})}mon(i){return e().locale("es"),e(i).format("L")+" "+e(i).format("LT")}edit(i){var o=this;return(0,x.Z)(function*(){yield(yield o.modalC.create({component:f.x,componentProps:{boleto:i}})).present()})()}delete(i){var o=this;return(0,x.Z)(function*(){yield o.alert.setData({animated:!0,header:"Eliminar usuario",message:"\xbfDesea eliminarlo Permanentemente?",buttons:[{text:"cancelar"},{text:"Confirmar",handler:()=>{o.genericS.delete("boleto",i).subscribe(r=>{o.boletos=o.boletos.filter(s=>s.id!==i),o.toast.success("Usuario Eliminado Correctamente"),o.eventoRepo.updateEvento(o.idEvento,{boletos:o.boletos})})}}]}),yield o.alert.create(),yield o.alert.show()})()}}return(c=l).\u0275fac=function(i){return new(i||c)(t.Y36(g.IN),t.Y36(O.b9),t.Y36(u.hJ),t.Y36(g.SH),t.Y36(Z.M),t.Y36(h.c),t.Y36(U._W),t.Y36(T.gz))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-ver-usuarios"]],decls:29,vars:7,consts:[[3,"fullscreen"],[1,"mt-5"],[1,"container"],[1,"d-flex","mt-5"],[1,"h2"],["placeholder","Buscar usuario","inputmode","text","type","text",1,"ms-auto","me-3","my-0","w-100",3,"ngModel","debounce","ngModelChange"],[1,"table","mt-0"],[1,"red"],["scope","col",1,"red"],[4,"ngFor","ngForOf"],["slot","start"],["color","primary","fill","clear",3,"click"],["slot","icon-only","name","create-outline"],["slot","icon-only","name","trash-outline"]],template:function(i,o){1&i&&(t.TgZ(0,"ion-content",0),t._UZ(1,"div",1)(2,"br"),t.TgZ(3,"div",2)(4,"div",3)(5,"h5",4)(6,"b"),t._uU(7,"Ver Usuarios"),t.qZA()(),t.TgZ(8,"ion-searchbar",5),t.NdJ("ngModelChange",function(s){return o.search=s}),t.qZA()(),t.TgZ(9,"table",6)(10,"thead",7)(11,"tr")(12,"th",8),t._uU(13,"Nombre"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"RFC"),t.qZA(),t.TgZ(16,"th",8),t._uU(17,"Tel\xe9fono"),t.qZA(),t.TgZ(18,"th",8),t._uU(19,"Correo"),t.qZA(),t.TgZ(20,"th",8),t._uU(21,"Role"),t.qZA(),t.TgZ(22,"th",8),t._uU(23,"Estatus"),t.qZA(),t.TgZ(24,"th",8),t._uU(25,"Opciones"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,M,19,6,"tr",9),t.ALo(28,"userSearch"),t.qZA()()()()),2&i&&(t.Q6J("fullscreen",!0),t.xp6(8),t.Q6J("ngModel",o.search)("debounce",250),t.xp6(19),t.Q6J("ngForOf",t.xi3(28,4,o.boletos,o.search)))},dependencies:[v.sg,P.JJ,P.On,g.YG,g.Sm,g.W2,g.gu,g.VI,g.j9,_],styles:[".red[_ngcontent-%COMP%]{background-color:red;color:#fff}"]}),l})()},{path:"editar-usuario",loadChildren:()=>n.e(6967).then(n.bind(n,6967)).then(c=>c.EditarUsuarioPageModule)}];let D=(()=>{var c;class l{}return(c=l).\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[T.Bz.forChild(A),T.Bz]}),l})(),N=(()=>{var c;class l{}return(c=l).\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[v.ez,P.u5,g.Pc,D]}),l})()},9026:(S,E,n)=>{n.d(E,{$:()=>f});var v=n(5592),P=n(4829);const{isArray:g}=Array;var x=n(6232),e=n(8251),y=n(4564);function f(...t){const O=(0,y.jO)(t),u=function T(t){return 1===t.length&&g(t[0])?t[0]:t}(t);return u.length?new v.y(Z=>{let h=u.map(()=>[]),U=u.map(()=>!1);Z.add(()=>{h=U=null});for(let _=0;!Z.closed&&_<u.length;_++)(0,P.Xf)(u[_]).subscribe((0,e.x)(Z,M=>{if(h[_].push(M),h.every(C=>C.length)){const C=h.map(A=>A.shift());Z.next(O?O(...C):C),h.some((A,D)=>!A.length&&U[D])&&Z.complete()}},()=>{U[_]=!0,!h[_].length&&Z.complete()}));return()=>{h=U=null}}):x.E}}}]);