"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9134],{9200:(R,v,i)=>{i.r(v),i.d(v,{RegistrarUsuarioPageModule:()=>O});var m=i(6814),s=i(95),r=i(7027),C=i(9085),U=i(5861),b=i(9026),y=i(9397),A=i(4028),e=i(6689),P=i(930),p=i(8013),g=i(7153),u=i(2425),Z=i(2264);function d(o,a){if(1&o&&(e.TgZ(0,"ion-select-option",24),e._uU(1),e.qZA()),2&o){const n=a.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.titulo)}}function S(o,a){if(1&o&&(e.TgZ(0,"ion-select-option",24),e._uU(1),e.qZA()),2&o){const n=a.$implicit;e.Q6J("value",a.index),e.xp6(1),e.Oqu(n)}}function x(o,a){if(1&o&&(e.TgZ(0,"ion-select-option",24),e._uU(1),e.qZA()),2&o){const n=a.$implicit;e.Q6J("value",null==n?null:n.id),e.xp6(1),e.Oqu(null==n?null:n.ciudad)}}function h(o,a){if(1&o&&(e.TgZ(0,"ion-select-option",24),e._uU(1),e.qZA()),2&o){const n=a.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.nombre)}}function N(o,a){if(1&o&&(e.TgZ(0,"ion-select-option",25),e._uU(1),e.qZA()),2&o){const n=e.oxw(2);e.Q6J("value",null==n.extranjero?null:n.extranjero.id),e.xp6(1),e.Oqu(null==n.extranjero?null:n.extranjero.nombre)}}function I(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"form",4),e.NdJ("ngSubmit",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.update())}),e.TgZ(1,"ion-item")(2,"ion-select",5),e.YNc(3,d,2,2,"ion-select-option",6),e.qZA()(),e.TgZ(4,"ion-item")(5,"ion-select",7),e.YNc(6,S,2,2,"ion-select-option",6),e.qZA()(),e.TgZ(7,"ion-item"),e._UZ(8,"ion-input",8),e.qZA(),e.TgZ(9,"ion-item")(10,"ion-input",9)(11,"div",10),e._uU(12,"Nombre Completo "),e.TgZ(13,"ion-text",11),e._uU(14,"*"),e.qZA()()()(),e.TgZ(15,"ion-item")(16,"ion-input",12)(17,"div",10),e._uU(18,"Tel\xe9fono "),e.TgZ(19,"ion-text",11),e._uU(20,"*"),e.qZA()()()(),e.TgZ(21,"ion-item")(22,"ion-input",13)(23,"div",10),e._uU(24,"Correo "),e.TgZ(25,"ion-text",11),e._uU(26,"*"),e.qZA()()()(),e.TgZ(27,"ion-item"),e._UZ(28,"ion-input",14),e.qZA(),e.TgZ(29,"ion-item")(30,"ion-input",15)(31,"div",10),e._uU(32,"Cargo en la empresa "),e._UZ(33,"ion-text",11),e.qZA()()(),e.TgZ(34,"ion-item")(35,"ion-select",16),e.YNc(36,x,2,2,"ion-select-option",6),e.qZA()(),e.TgZ(37,"ion-item"),e._UZ(38,"ion-input",17),e.qZA(),e.TgZ(39,"ion-item")(40,"ion-select",18)(41,"div",10),e._uU(42,"Estado de Origen "),e.qZA(),e.YNc(43,h,2,2,"ion-select-option",6),e.YNc(44,N,2,2,"ion-select-option",19),e.qZA()(),e.TgZ(45,"ion-item"),e._UZ(46,"ion-input",20),e.qZA(),e.TgZ(47,"ion-item"),e._UZ(48,"ion-input",21),e.qZA(),e.TgZ(49,"ion-item")(50,"ion-text"),e._uU(51,"Suba su credencial estudiantil o documento que lo avale "),e._UZ(52,"br"),e.qZA(),e.TgZ(53,"ion-button",22),e.NdJ("click",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.upload())}),e._uU(54," Subir Credencial "),e.qZA()(),e.TgZ(55,"ion-button",23),e._uU(56," Actualizar "),e.qZA()()}if(2&o){const n=e.oxw();e.Q6J("formGroup",n.usuarioForm),e.xp6(3),e.Q6J("ngForOf",n.evento),e.xp6(3),e.Q6J("ngForOf",n.tipoPublicoArray),e.xp6(29),e.Q6J("cancelText","Cerrar"),e.xp6(1),e.Q6J("ngForOf",n.delegaciones),e.xp6(4),e.Q6J("cancelText","Cerrar"),e.xp6(3),e.Q6J("ngForOf",n.estados),e.xp6(1),e.Q6J("ngIf",n.extranjero)}}const F=[{path:"",component:(()=>{var o;class a{constructor(t,l,c,f,T,_,E){this.fb=t,this.genericService=l,this.eventos=c,this.load=f,this.toast=T,this.modalC=_,this.compressService=E,this.evento=[],this.delegaciones=[],this.estados=[],this.tipoPublico=A.L,this.tipoPublicoArray=A.x,this.boleto={costo:0,privilegio:"Sesi\xf3n Foro + Comida",quieroFactura:!1,plataformaPago:1}}ngOnInit(){this.eventos.evento$.subscribe(t=>{this.evento=t}),(0,b.$)(this.genericService.getAll("delegacion"),this.genericService.getAll("estados")).pipe((0,y.b)(t=>{this.delegaciones=t[0].sort(function(l,c){return l.ciudad.localeCompare(c.ciudad)}),this.extranjero=t[1].find(l=>33==l.id),this.estados=t[1].filter(l=>33!==l.id).sort(function(l,c){return l.nombre.localeCompare(c.nombre)})})).subscribe(),this.usuarioForm=this.fb.group({nombre:[null,s.kI.required],telefono:[null,s.kI.required],email:[null,[s.kI.required,s.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],rfc:[],cargo:[],delegacion:[],curp:[],evidencia:[],organizacion:[],empresa:[],numAfiliado:[],estado:[],tipo:[A.L.AFILIADOS],evento:[]})}update(){var t=this;return(0,U.Z)(function*(){if(t.load.setData({message:"Creando Usuario",animated:!0,spinner:"dots"}),yield t.load.create(),yield t.load.show(),t.usuarioForm.controls.delegacion.value){var l,c;const f=null!==(l=t.delegaciones.find(T=>T.id===t.usuarioForm.controls.delegacion.value))&&void 0!==l?l:null;t.usuarioForm.controls.delegacion.setValue(null!==(c=null==f?void 0:f.ciudad)&&void 0!==c?c:null)}t.genericService.post("participante",{...t.usuarioForm.value}).subscribe(function(){var f=(0,U.Z)(function*(T){yield t.modalC.dismiss(),yield t.load.hide(),t.toast.success("Usuario Actualizado")});return function(T){return f.apply(this,arguments)}}())})()}upload(){var t=this;return(0,U.Z)(function*(){t.evidencia=yield t.compressService.returnImageCompress()})()}}return(o=a).\u0275fac=function(t){return new(t||o)(e.Y36(s.qu),e.Y36(P.M),e.Y36(p.hJ),e.Y36(g.b),e.Y36(u._W),e.Y36(r.IN),e.Y36(Z.Y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-registrar-usuario"]],decls:9,vars:2,consts:[[3,"fullscreen"],[1,"mt-5","px-4"],[1,"container","px-4"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["label","Eventos","formControlName","evento","placeholder","Seleccione el evento"],[3,"value",4,"ngFor","ngForOf"],["label","Tipo de Participante","formControlName","tipo","placeholder","Seleccione"],["labelPlacement","floating","label","No.Afiliado","formControlName","numAfiliado","type","text"],["labelPlacement","floating","formControlName","nombre","type","text"],["slot","label"],["color","danger"],["labelPlacement","floating","formControlName","telefono","type","text"],["labelPlacement","floating","formControlName","email","type","email"],["label","Ingrese el nombre de su empresa","labelPlacement","floating","formControlName","empresa","type","text"],["labelPlacement","floating","formControlName","cargo","type","text"],["label","Delegaci\xf3n CMIC","formControlName","delegacion","okText","Seleccionar","placeholder","Seleccione",3,"cancelText"],["label","Ingrese el nombre de su organizaci\xf3n","labelPlacement","floating","formControlName","organizacion","type","text"],["formControlName","estado","okText","Seleccionar","placeholder","Seleccione",3,"cancelText"],["class","border-top",3,"value",4,"ngIf"],["label","RFC","labelPlacement","floating","formControlName","rfc","type","text"],["label","CURP","labelPlacement","floating","formControlName","curp","type","text"],["expand","block","shape","round",3,"click"],["expand","block","slot","end","shape","round","type","submit",1,"mt-3"],[3,"value"],[1,"border-top",3,"value"]],template:function(t,l){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br")(2,"br")(3,"div",1),e.TgZ(4,"div",2)(5,"h1")(6,"b"),e._uU(7,"Registrar Usuarios"),e.qZA()(),e.YNc(8,I,57,8,"form",3),e.qZA()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(8),e.Q6J("ngIf",l.usuarioForm))},dependencies:[m.sg,m.O5,s._Y,s.JJ,s.JL,s.sg,s.u,r.YG,r.W2,r.pK,r.Ie,r.t9,r.n0,r.yW,r.QI,r.j9]}),a})()}];let J=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[C.Bz.forChild(F),C.Bz]}),a})(),O=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,s.u5,s.UX,r.Pc,J]}),a})()},4028:(R,v,i)=>{i.d(v,{L:()=>m,x:()=>s});var m=function(r){return r[r.ESTUDIANTES=0]="ESTUDIANTES",r[r.AFILIADOS=1]="AFILIADOS",r[r.PUBLICO_GENERAL=2]="PUBLICO_GENERAL",r[r.PRENSA=3]="PRENSA",r}(m||{});const s=["Estudiante","Afiliado","P\xfablico General","Prensa"]},9026:(R,v,i)=>{i.d(v,{$:()=>A});var m=i(5592),s=i(4829);const{isArray:r}=Array;var U=i(6232),b=i(8251),y=i(4564);function A(...e){const P=(0,y.jO)(e),p=function C(e){return 1===e.length&&r(e[0])?e[0]:e}(e);return p.length?new m.y(g=>{let u=p.map(()=>[]),Z=p.map(()=>!1);g.add(()=>{u=Z=null});for(let d=0;!g.closed&&d<p.length;d++)(0,s.Xf)(p[d]).subscribe((0,b.x)(g,S=>{if(u[d].push(S),u.every(x=>x.length)){const x=u.map(h=>h.shift());g.next(P?P(...x):x),u.some((h,N)=>!h.length&&Z[N])&&g.complete()}},()=>{Z[d]=!0,!u[d].length&&g.complete()}));return()=>{u=Z=null}}):U.E}}}]);