(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,CK='com.allen_sauer.gwt.dragdrop.client.',DK='com.allen_sauer.gwt.dragdrop.client.drop.',EK='com.allen_sauer.gwt.dragdrop.client.util.',FK='com.allen_sauer.gwt.dragdrop.client.util.impl.',aL='com.google.gwt.core.client.',bL='com.google.gwt.lang.',cL='com.google.gwt.user.client.',dL='com.google.gwt.user.client.impl.',eL='com.google.gwt.user.client.ui.',fL='com.google.gwt.user.client.ui.impl.',gL='java.io.',hL='java.lang.',iL='java.util.',jL='pl.balon.gwt.diagrams.client.common.bezier.',kL='pl.balon.gwt.diagrams.client.connection.',lL='pl.balon.gwt.diagrams.client.connection.calculator.',mL='pl.balon.gwt.diagrams.client.connection.data.',nL='pl.balon.gwt.diagrams.client.connector.',oL='pl.balon.gwt.diagramsexample.client.',pL='pl.balon.gwt.diagramsexample.client.examples.';function BK(){}
function oD(a){return this===a;}
function pD(){return yE(this);}
function qD(){return this.tN+'@'+this.hC();}
function mD(){}
_=mD.prototype={};_.eQ=oD;_.hC=pD;_.tS=qD;_.toString=function(){return this.tS();};_.tN=hL+'Object';_.tI=1;function rI(b,a){b.d=a;return b;}
function qI(){}
_=qI.prototype=new mD();_.tN=iL+'EventObject';_.tI=3;_.d=null;function ib(c,b,a){rI(c,b);c.c=a;return c;}
function kb(){var a;a=this.c!==null?'dropTarget='+hf(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+hf(this.d)+')';}
function hb(){}
_=hb.prototype=new qI();_.tS=kb;_.tN=CK+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ib(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new hb();_.tS=q;_.tN=CK+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function u(){u=BK;F=pJ(new tI());}
function s(a){a.g=x(a);}
function t(c,b,a){u();s(c);c.f=b!==null?b:Cw();c.e=mP(c,c.f,a);B(c,c.e);c.l=Bb(new zb(),c);return c;}
function v(c,a,b){jz(a,'dragdrop-dragging');}
function w(b,a){xb(b.g,b.f,a);dz(a,'dragdrop-dragging');}
function x(a){return sb(new lb());}
function y(b,c){var a;a=vb(b.g,c,b.f);return a!==null?a:b.e;}
function z(a,b){{A(a,b,b);}}
function A(c,b,a){Fb(c.l,b,a);dz(b,'dragdrop-draggable');dz(a,'dragdrop-handle');wJ(F,b,a);}
function B(b,a){tb(b.g,a);}
function C(b,a){if(rh(b.j,2)){dp(qh(b.j,2),a,b.k.a,b.k.d);}else if(rh(b.j,3)){mu(qh(b.j,3),a,b.h);}else if(rh(b.j,4)){bA(qh(b.j,4),a,b.h);}else if(rh(b.j,5)){tr(qh(b.j,5),a,b.h);}else if(rh(b.j,6)){qh(b.j,6).wc(a);}else{throw tD(new rD(),'Unable to handle initialDraggableParent '+jg(b.j));}}
function D(b,a){if(b.i!==null&&gE(b.i)!=0){zk(a.gb(),'margin',b.i);}}
function E(b,a){b.j=a.p;if(rh(b.j,2)){b.k=nf(new mf(),a,b.j);}else if(rh(b.j,3)){b.h=Dp(qh(b.j,3),a);}else if(rh(b.j,4)){b.h=Dp(qh(b.j,4),a);}else if(rh(b.j,5)){b.h=Dp(qh(b.j,5),a);}else if(rh(b.j,6)){}else{throw tD(new rD(),"Unable to handle 'initialDraggableParent instanceof "+jg(b.j)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.i=ik(a.gb(),'margin');if(b.i!==null&&gE(b.i)!=0){zk(a.gb(),'margin','0px');}}
function r(){}
_=r.prototype=new mD();_.tN=CK+'AbstractDragController';_.tI=6;_.e=null;_.f=null;_.h=0;_.i=null;_.j=null;_.k=null;_.l=null;var F;function bb(b,a){b.b=a;return b;}
function db(a){if(a.c==0){return;}Cb(a.b,a.d,a.e);a.a=wE()-a.c;a.c=0;}
function eb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=wE();}if(a.a>80){al(a);}else{db(a);}}
function fb(){db(this);}
function ab(){}
_=ab.prototype=new mD();_.F=fb;_.tN=CK+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function rb(a){a.a=kH(new iH());}
function sb(a){rb(a);return a;}
function tb(b,a){mH(b.a,a);}
function vb(g,h,a){var b,c,d,e,f,i,j,k;i=kf(new jf(),h,null);j=ge(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(je(f,i)){k=fe(f,j);if(k<=c){if(e===null|| !Ae(pb(b).gb(),pb(e).gb())){c=k;e=b;}}}}return e===null?null:e.a;}
function wb(a){return vF(a.a);}
function xb(h,b,d){var a,c,e,f,g;a=kf(new jf(),b,null);g=kH(new iH());for(f=wb(h);oF(f);){e=qh(pF(f),7);c=nb(new mb(),e);if(!Ae(d.gb(),pb(c).gb())){if(je(c.b,a)){mH(g,c);}}}h.b=qh(wH(g,lh('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',155,9,[])),8);gI(h.b);}
function lb(){}
_=lb.prototype=new mD();_.tN=CK+'DropControllerCollection';_.tI=8;_.b=null;function nb(c,a){var b;c.a=a;b=a.fb();if(!b.ub()){throw qC(new oC(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=kf(new jf(),b,null);return c;}
function pb(a){return a.a.fb();}
function qb(a){var b;b=qh(a,9);return Ae(pb(this).gb(),pb(b).gb())?1:(-1);}
function mb(){}
_=mb.prototype=new mD();_.u=qb;_.tN=CK+'DropControllerCollection$Candidate';_.tI=9;_.a=null;_.b=null;function Ab(a){a.d=bb(new ab(),a);a.f=pJ(new tI());}
function Bb(b,a){Ab(b);b.e=a;b.a=a.f;return b;}
function Cb(e,f,g){var a,b,c,d;c=nf(new mf(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=FC(0,aD(a,e.l));b=FC(0,aD(b,e.m));}Be(e.o.gb(),a,b);d=y(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.cc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ac(e.o,e.g,e.e);}}if(e.i!==null){e.i.jc(e.o,e.g,e.e);}}
function Db(b){var a;nk(b.b.gb());b.h=false;if(b.i!==null){b.i.cc(b.g,b.e);}b.i=null;jc(b.e,b.g,null);a=ib(new hb(),b.g,null);}
function Fb(c,b,a){if(a!==null){bv(a,c);wJ(c.f,a,b);}else{throw tD(new rD(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function ac(f){var a,c,d,e;f.g=qh(vJ(f.f,f.b),12);kc(f.e,f.g);f.o=f.e.d;f.l=Fe(f.a.gb())-f.o.mb();f.m=Ee(f.a.gb())-f.o.lb();e=nf(new mf(),f.b,f.a);c=nf(new mf(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;sk(f.b.gb());f.h=true;try{Cb(f,f.j,f.k);}catch(a){a=Ah(a);if(rh(a,10)){d=a;Db(f);throw d;}else throw a;}}
function bc(b,c,d){var a;this.b=b;a=rj((aj(),lj));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Cj((aj(),lj));df();this.j=c;this.k=d;}
function cc(a){}
function dc(a){}
function ec(d,e,f){var a,c;if(!this.h){if(this.n){ac(this);}if(!this.h){return;}}Cj((aj(),lj));try{eb(this.d,e,f);}catch(a){a=Ah(a);if(rh(a,10)){c=a;Db(this);throw c;}else throw a;}}
function fc(g,h,i){var a,a,d,e,f;d=rj((aj(),lj));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{nk(this.b.gb());Cb(this,h,i);this.h=false;if(this.i===null){Db(this);return;}{this.i.fb();}try{this.i.kc(this.o,this.g,this.e);}catch(a){a=Ah(a);if(rh(a,11)){a;Db(this);return;}else throw a;}jc(this.e,this.g,this.i.fb());e=this.i.Fb(this.o,this.g,this.e);}catch(a){a=Ah(a);if(rh(a,10)){f=a;Db(this);throw f;}else throw a;}finally{this.i=null;}}
function zb(){}
_=zb.prototype=new mD();_.ec=bc;_.fc=cc;_.gc=dc;_.hc=ec;_.ic=fc;_.tN=CK+'MouseDragHandler';_.tI=10;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ic(){ic=BK;u();}
function hc(c,b,a){ic();t(c,b,a);return c;}
function jc(c,a,b){v(c,a,b);if(c.a!==null){c.a=null;if(c.c!==null){vA(c.c);c.c=null;}else{if(b===null){C(c,a);}}D(c,a);vA(c.d);c.d=null;}}
function kc(d,a){var b,c;w(d,a);d.a=a;d.c=lc(d,a);E(d,a);c=nf(new mf(),a,d.f);d.d=hx(new ax());dz(d.d,'dragdrop-movable-panel');if(d.c===null){mz(d.d,a.mb(),a.lb());}dp(d.f,d.d,c.a,c.d);b=d.c!==null?d.c:d.a;d.d.wc(b);}
function lc(c,a){var b;if(c.b){b=qt(new ur(),'this is a Drag Proxy');dz(b,'dragdrop-proxy');mz(b,c.a.mb(),c.a.lb());return b;}else{return null;}}
function gc(){}
_=gc.prototype=new r();_.tN=CK+'PickupDragController';_.tI=11;_.a=null;_.b=false;_.c=null;_.d=null;function Bc(b,a){b.g=a;dz(a,'dragdrop-boundary');return b;}
function Dc(d,c,b,a){jz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.xb(c,b,a);}
function Ec(d,c,b,a){dz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Fc(c,b,a){jz(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function ad(){return this.g;}
function bd(c,b,a){return ib(new hb(),b,this.g);}
function cd(c,b,a){return Dc(this,c,b,a);}
function dd(c,b,a){Ec(this,c,b,a);}
function ed(b,a){Fc(this,b,a);}
function fd(c,b,a){}
function gd(c,b,a){}
function Ac(){}
_=Ac.prototype=new mD();_.fb=ad;_.xb=bd;_.Fb=cd;_.ac=dd;_.cc=ed;_.jc=fd;_.kc=gd;_.tN=DK+'AbstractDropController';_.tI=12;_.g=null;function jd(){jd=BK;pd=Fu(new Du(),'x');}
function id(b,a){jd();Bc(b,a);return b;}
function kd(f,e){var a,b,c,d;d=hx(new ax());dz(d,'dragdrop-positioner');dp(Cw(),d,(-500),(-500));d.wc(pd);a=hx(new ax());c=e.mb()-af(d);b=e.lb()-bf(d);mz(a,c,b);d.wc(a);return d;}
function ld(e,d,b,a){var c;c=Dc(e,d,b,a);od(e);return c;}
function md(d,c,b,a){Ec(d,c,b,a);d.f=kd(d,b);}
function nd(c,b,a){Fc(c,b,a);od(c);}
function od(a){if(a.f!==null){vA(a.f);}}
function qd(c,b,a){return ld(this,c,b,a);}
function rd(c,b,a){md(this,c,b,a);}
function sd(b,a){nd(this,b,a);}
function hd(){}
_=hd.prototype=new Ac();_.Fb=qd;_.ac=rd;_.cc=sd;_.tN=DK+'AbstractPositioningDropController';_.tI=13;_.f=null;var pd;function oc(){oc=BK;jd();}
function nc(b,a){oc();id(b,a);b.d=Bd(new Ad(),a);return b;}
function pc(d,c,a,e){var b;b=d.cb(c,a,e);if(b!==null){dp(d.d.b,e,b.a,b.d);}}
function qc(e,d,b,a){var c;dp(e.d.b,b,e.c.a,e.c.d);c=ld(e,d,b,a);e.e=null;return c;}
function rc(c,b,a){nd(c,b,a);Fd(c.d,null);c.e=null;}
function sc(d,c,b,a){pc(d,c,b,d.f);}
function tc(b,a,d){var c;c=kf(new jf(),b,this.d.a);if(this.e===null){this.e=nf(new mf(),b,this.d.b);}else{tf(this.e,b);}pf(this.e,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.e;}
function uc(e,b,a){var c,d;c=this.g;d=nf(new mf(),b,c);return o(new n(),b,c,d.a,d.d);}
function vc(c,b,a){return qc(this,c,b,a);}
function wc(c,b,a){md(this,c,b,a);Fd(this.d,a.f);}
function xc(b,a){rc(this,b,a);}
function yc(c,b,a){sc(this,c,b,a);}
function zc(c,b,a){this.c=this.cb(c,b,b);if(this.c===null){throw be(new ae());}}
function mc(){}
_=mc.prototype=new hd();_.cb=tc;_.xb=uc;_.Fb=vc;_.ac=wc;_.cc=xc;_.jc=yc;_.kc=zc;_.tN=DK+'AbsolutePositionDropController';_.tI=14;_.c=null;_.d=null;_.e=null;function vd(){vd=BK;oc();}
function ud(c,b,a){vd();nc(c,b);c.a=a;return c;}
function wd(b,a,d){var c;if(this.a){c=kf(new jf(),b,this.d.a);if(this.b===null){this.b=nf(new mf(),b,this.d.b);}else{tf(this.b,b);}pf(this.b,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.b;}else{return null;}}
function xd(d,c,a){var b;b=qc(this,d,c,a);this.b=null;return b;}
function yd(b,a){rc(this,b,a);this.b=null;}
function td(){}
_=td.prototype=new mc();_.cb=wd;_.Fb=xd;_.cc=yd;_.tN=DK+'BoundaryDropController';_.tI=15;_.a=false;_.b=null;function Bd(b,a){b.b=a;return b;}
function Dd(a){return Ee(a.b.gb());}
function Ed(a){return Fe(a.b.gb());}
function Fd(b,a){b.a=a;}
function Ad(){}
_=Ad.prototype=new mD();_.tN=DK+'DropTargetInfo';_.tI=16;_.a=null;_.b=null;function DE(){DE=BK;FE=kh('[Ljava.lang.StackTraceElement;',[153],[35],[0],null);}
function AE(a){a.c=FE;}
function BE(a){DE();AE(a);return a;}
function CE(b,a){DE();AE(b);b.b=a;return b;}
function EE(c){var a,b;a=jg(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function aF(){return EE(this);}
function zE(){}
_=zE.prototype=new mD();_.tS=aF;_.tN=hL+'Throwable';_.tI=17;_.a=null;_.b=null;var FE;function kC(){kC=BK;DE();}
function iC(a){kC();BE(a);return a;}
function jC(b,a){kC();CE(b,a);return b;}
function hC(){}
_=hC.prototype=new zE();_.tN=hL+'Exception';_.tI=18;function ce(){ce=BK;kC();}
function be(a){ce();iC(a);return a;}
function ae(){}
_=ae.prototype=new hC();_.tN=DK+'VetoDropException';_.tI=19;function fe(b,a){var c,d;c=FC(b.b-a.a,a.a-b.c);d=FC(b.d-a.b,a.b-b.a);return FC(c,d);}
function ge(a){return ue(new te(),a.b+th(ie(a)/2),a.d+th(he(a)/2));}
function he(a){return a.a-a.d;}
function ie(a){return a.c-a.b;}
function je(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function ke(b,a){b.a=a;}
function le(b,a){b.b=a;}
function me(b,a){b.c=a;}
function ne(a,b){a.d=b;}
function oe(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function de(){}
_=de.prototype=new mD();_.tS=oe;_.tN=EK+'AbstractArea';_.tI=20;_.a=0;_.b=0;_.c=0;_.d=0;function re(){return '('+this.kb()+', '+this.ob()+')';}
function pe(){}
_=pe.prototype=new mD();_.tS=re;_.tN=EK+'AbstractLocation';_.tI=21;function ue(b,a,c){b.a=a;b.b=c;return b;}
function we(){return this.a;}
function xe(){return this.b;}
function te(){}
_=te.prototype=new pe();_.kb=we;_.ob=xe;_.tN=EK+'CoordinateLocation';_.tI=22;_.a=0;_.b=0;function ze(){ze=BK;{cf=new yf();}}
function Ae(b,a){ze();return Af(cf,b,a);}
function Be(a,b,c){ze();a.style.left=b+'px';a.style.top=c+'px';}
function Ce(a){ze();return Df(cf,a);}
function De(a){ze();return Ef(cf,a);}
function Ee(a){ze();return Ff(cf,a);}
function Fe(a){ze();return ag(cf,a);}
function af(a){ze();return dg(cf,a);}
function bf(a){ze();return eg(cf,a);}
function df(){ze();bg(cf);}
var cf=null;function hf(a){var b;b=jg(a);return iE(b,fE(b,46)+1);}
function kf(e,g,c){var a,b,d,f;b=fz(g);f=gz(g);if(c!==null){b-=fz(c);b-=Ce(c.gb());f-=gz(c);f-=De(c.gb());}d=b+g.mb();a=f+g.lb();le(e,b);ne(e,f);me(e,d);ke(e,a);return e;}
function jf(){}
_=jf.prototype=new de();_.tN=EK+'WidgetArea';_.tI=23;function nf(b,c,a){rf(b,c);qf(b,a);sf(b);return b;}
function pf(e,c,d,a,b){e.a=FC(c,aD(e.a,a));e.d=FC(d,aD(e.d,b));}
function qf(b,a){if(a===null||a===Cw()){b.b=0;b.c=0;}else{b.b=fz(a)+Ce(a.gb());b.c=gz(a)+De(a.gb());}}
function rf(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=fz(b);a.f=gz(b);}}
function sf(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function tf(a,b){rf(a,b);sf(a);}
function uf(){return this.a;}
function vf(){return this.d;}
function wf(){return '('+this.a+', '+this.d+')';}
function mf(){}
_=mf.prototype=new pe();_.kb=uf;_.ob=vf;_.tS=wf;_.tN=EK+'WidgetLocation';_.tI=24;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function dg(a,b){return b.mb()-ag(a,b.gb());}
function eg(a,b){return b.lb()-Ff(a,b.gb());}
function xf(){}
_=xf.prototype=new mD();_.tN=FK+'DOMUtilImpl';_.tI=25;function Df(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function Ef(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function Ff(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function ag(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function bg(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function Bf(){}
_=Bf.prototype=new xf();_.tN=FK+'DOMUtilImplStandard';_.tI=26;function Af(c,b,a){return !(!(b.compareDocumentPosition(a)&16));}
function yf(){}
_=yf.prototype=new Bf();_.tN=FK+'DOMUtilImplMozilla';_.tI=27;function jg(a){return a==null?null:a.tN;}
function lg(a){kg=a;}
var kg=null;function og(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function pg(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function qg(){return ++rg;}
var rg=0;function uD(){uD=BK;kC();}
function sD(a){uD();iC(a);return a;}
function tD(b,a){uD();jC(b,a);return b;}
function rD(){}
_=rD.prototype=new hC();_.tN=hL+'RuntimeException';_.tI=28;function ug(){ug=BK;uD();}
function tg(c,b,a){ug();tD(c,'JavaScript '+b+' exception: '+a);return c;}
function sg(){}
_=sg.prototype=new rD();_.tN=aL+'JavaScriptException';_.tI=29;function xg(b,a){if(!rh(a,13)){return false;}return Bg(b,qh(a,13));}
function yg(a){return og(a);}
function zg(){return [];}
function Ag(){return {};}
function Cg(a){return xg(this,a);}
function Bg(a,b){return a===b;}
function Dg(){return yg(this);}
function Fg(){return Eg(this);}
function Eg(a){if(a.toString)return a.toString();return '[object]';}
function vg(){}
_=vg.prototype=new mD();_.eQ=Cg;_.hC=Dg;_.tS=Fg;_.tN=aL+'JavaScriptObject';_.tI=30;function bh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function dh(a,b,c){return a[b]=c;}
function fh(a,b){return eh(a,b);}
function eh(a,b){return bh(new ah(),b,a.tI,a.b,a.tN);}
function gh(b,a){return b[a];}
function ih(b,a){return b[a];}
function hh(a){return a.length;}
function kh(e,d,c,b,a){return jh(e,d,c,b,0,hh(b),a);}
function jh(j,i,g,c,e,a,b){var d,f,h;if((f=gh(c,e))<0){throw dD(new cD());}h=bh(new ah(),f,gh(i,e),gh(g,e),j);++e;if(e<a){j=iE(j,1);for(d=0;d<f;++d){dh(h,d,jh(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){dh(h,d,b);}}return h;}
function lh(f,e,c,g){var a,b,d;b=hh(g);d=bh(new ah(),b,e,c,f);for(a=0;a<b;++a){dh(d,a,ih(g,a));}return d;}
function mh(a,b,c){if(c!==null&&a.b!=0&& !rh(c,a.b)){throw vB(new uB());}return dh(a,b,c);}
function ah(){}
_=ah.prototype=new mD();_.tN=bL+'Array';_.tI=31;function ph(b,a){return !(!(b&&wh[b][a]));}
function qh(b,a){if(b!=null)ph(b.tI,a)||vh();return b;}
function rh(b,a){return b!=null&&ph(b.tI,a);}
function sh(a){return a&65535;}
function th(a){if(a>(xC(),yC))return xC(),yC;if(a<(xC(),zC))return xC(),zC;return a>=0?Math.floor(a):Math.ceil(a);}
function vh(){throw cC(new bC());}
function uh(a){if(a!==null){throw cC(new bC());}return a;}
function xh(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var wh;function Ah(a){if(rh(a,14)){return a;}return tg(new sg(),Ch(a),Bh(a));}
function Bh(a){return a.message;}
function Ch(a){return a.name;}
function Fh(){Fh=BK;uD();}
function Eh(b,a){Fh();sD(b);return b;}
function Dh(){}
_=Dh.prototype=new rD();_.tN=cL+'CommandCanceledException';_.tI=34;function ui(a){a.a=ci(new bi(),a);a.b=kH(new iH());a.d=gi(new fi(),a);a.f=ki(new ji(),a);}
function vi(a){ui(a);return a;}
function xi(c){var a,b,d;a=mi(c.f);pi(c.f);b=null;if(rh(a,15)){b=Eh(new Dh(),qh(a,15));}else{}if(b!==null){d=kg;if(d!==null){yO(d,b);}}Ai(c,false);zi(c);}
function yi(e,d){var a,b,c,f;f=false;try{Ai(e,true);qi(e.f,e.b.b);am(e.a,10000);while(ni(e.f)){b=oi(e.f);c=true;try{if(b===null){return;}if(rh(b,15)){a=qh(b,15);a.F();}else{}}finally{f=ri(e.f);if(f){return;}if(c){pi(e.f);}}if(Di(wE(),d)){return;}}}finally{if(!f){Cl(e.a);Ai(e,false);zi(e);}}}
function zi(a){if(!sH(a.b)&& !a.e&& !a.c){Bi(a,true);am(a.d,1);}}
function Ai(b,a){b.c=a;}
function Bi(b,a){b.e=a;}
function Ci(b,a){mH(b.b,a);zi(b);}
function Di(a,b){return EC(a-b)>=100;}
function ai(){}
_=ai.prototype=new mD();_.tN=cL+'CommandExecutor';_.tI=35;_.c=false;_.e=false;function Dl(){Dl=BK;gm=kH(new iH());{fm();}}
function Bl(a){Dl();return a;}
function Cl(a){if(a.b){bm(a.c);}else{cm(a.c);}uH(gm,a);}
function El(e,d){var a,c;try{Fl(e);}catch(a){a=Ah(a);if(rh(a,14)){c=a;yO(d,c);}else throw a;}}
function Fl(a){if(!a.b){uH(gm,a);}a.sc();}
function am(b,a){if(a<=0){throw mC(new lC(),'must be positive');}Cl(b);b.b=false;b.c=dm(b,a);mH(gm,b);}
function bm(a){Dl();$wnd.clearInterval(a);}
function cm(a){Dl();$wnd.clearTimeout(a);}
function dm(b,a){Dl();return $wnd.setTimeout(function(){b.ab();},a);}
function em(){var a;a=kg;if(a!==null){El(this,a);}else{Fl(this);}}
function fm(){Dl();km(new xl());}
function wl(){}
_=wl.prototype=new mD();_.ab=em;_.tN=cL+'Timer';_.tI=36;_.b=false;_.c=0;var gm;function di(){di=BK;Dl();}
function ci(b,a){di();b.a=a;Bl(b);return b;}
function ei(){if(!this.a.c){return;}xi(this.a);}
function bi(){}
_=bi.prototype=new wl();_.sc=ei;_.tN=cL+'CommandExecutor$1';_.tI=37;function hi(){hi=BK;Dl();}
function gi(b,a){hi();b.a=a;Bl(b);return b;}
function ii(){Bi(this.a,false);yi(this.a,wE());}
function fi(){}
_=fi.prototype=new wl();_.sc=ii;_.tN=cL+'CommandExecutor$2';_.tI=38;function ki(b,a){b.d=a;return b;}
function mi(a){return pH(a.d.b,a.b);}
function ni(a){return a.c<a.a;}
function oi(b){var a;b.b=b.c;a=pH(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function pi(a){tH(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function qi(b,a){b.a=a;}
function ri(a){return a.b==(-1);}
function si(){return ni(this);}
function ti(){return oi(this);}
function ji(){}
_=ji.prototype=new mD();_.tb=si;_.yb=ti;_.tN=cL+'CommandExecutor$CircularIterator';_.tI=39;_.a=0;_.b=(-1);_.c=0;function aj(){aj=BK;rk=kH(new iH());{jk=new Dm();en(jk);}}
function bj(a){aj();mH(rk,a);}
function cj(b,a){aj();yn(jk,b,a);}
function dj(a,b){aj();return Fm(jk,a,b);}
function ej(){aj();return An(jk,'A');}
function fj(){aj();return An(jk,'div');}
function gj(a){aj();return An(jk,a);}
function hj(){aj();return An(jk,'tbody');}
function ij(){aj();return An(jk,'td');}
function jj(){aj();return An(jk,'tr');}
function kj(){aj();return An(jk,'table');}
function oj(b,a,d){aj();var c;c=kg;if(c!==null){mj(b,a,d,c);}else{nj(b,a,d);}}
function mj(e,d,g,f){aj();var a,c;try{nj(e,d,g);}catch(a){a=Ah(a);if(rh(a,14)){c=a;yO(f,c);}else throw a;}}
function nj(b,a,c){aj();var d;if(a===qk){if(Bj(b)==8192){qk=null;}}d=lj;lj=b;try{c.Cb(b);}finally{lj=d;}}
function pj(b,a){aj();Bn(jk,b,a);}
function qj(a){aj();return Cn(jk,a);}
function rj(a){aj();return an(jk,a);}
function sj(a){aj();return Dn(jk,a);}
function tj(a){aj();return En(jk,a);}
function uj(a){aj();return Fn(jk,a);}
function vj(a){aj();return nn(jk,a);}
function wj(a){aj();return ao(jk,a);}
function xj(a){aj();return bo(jk,a);}
function yj(a){aj();return co(jk,a);}
function zj(a){aj();return on(jk,a);}
function Aj(a){aj();return pn(jk,a);}
function Bj(a){aj();return eo(jk,a);}
function Cj(a){aj();qn(jk,a);}
function Dj(a){aj();return rn(jk,a);}
function Ej(a){aj();return bn(jk,a);}
function Fj(a){aj();return cn(jk,a);}
function ak(b,a){aj();return fo(jk,b,a);}
function bk(a){aj();return go(jk,a);}
function dk(a,b){aj();return io(jk,a,b);}
function ck(a,b){aj();return ho(jk,a,b);}
function ek(a){aj();return jo(jk,a);}
function fk(a){aj();return sn(jk,a);}
function gk(a){aj();return ko(jk,a);}
function hk(a){aj();return tn(jk,a);}
function ik(b,a){aj();return lo(jk,b,a);}
function kk(c,a,b){aj();vn(jk,c,a,b);}
function lk(b,a){aj();return fn(jk,b,a);}
function mk(a){aj();var b,c;c=true;if(rk.b>0){b=qh(pH(rk,rk.b-1),16);if(!(c=b.bc(a))){pj(a,true);Cj(a);}}return c;}
function nk(a){aj();if(qk!==null&&dj(a,qk)){qk=null;}gn(jk,a);}
function ok(b,a){aj();mo(jk,b,a);}
function pk(a){aj();uH(rk,a);}
function sk(a){aj();qk=a;wn(jk,a);}
function tk(b,a,c){aj();no(jk,b,a,c);}
function vk(a,b,c){aj();po(jk,a,b,c);}
function uk(a,b,c){aj();oo(jk,a,b,c);}
function wk(a,b){aj();qo(jk,a,b);}
function xk(a,b){aj();ro(jk,a,b);}
function yk(a,b){aj();so(jk,a,b);}
function zk(b,a,c){aj();to(jk,b,a,c);}
function Ak(a,b){aj();jn(jk,a,b);}
function Bk(a){aj();return kn(jk,a);}
function Ck(){aj();return uo(jk);}
function Dk(){aj();return vo(jk);}
var lj=null,jk=null,qk=null,rk;function Fk(){Fk=BK;bl=vi(new ai());}
function al(a){Fk();if(a===null){throw gD(new fD(),'cmd can not be null');}Ci(bl,a);}
var bl;function el(a){if(rh(a,17)){return dj(this,qh(a,17));}return xg(xh(this,cl),a);}
function fl(){return yg(xh(this,cl));}
function gl(){return Bk(this);}
function cl(){}
_=cl.prototype=new vg();_.eQ=el;_.hC=fl;_.tS=gl;_.tN=cL+'Element';_.tI=40;function ll(a){return xg(xh(this,hl),a);}
function ml(){return yg(xh(this,hl));}
function nl(){return Dj(this);}
function hl(){}
_=hl.prototype=new vg();_.eQ=ll;_.hC=ml;_.tS=nl;_.tN=cL+'Event';_.tI=41;function pl(){pl=BK;sl=kH(new iH());{tl=new yo();if(!Do(tl)){tl=null;}}}
function ql(e,d){pl();var a,c;try{rl(e);}catch(a){a=Ah(a);if(rh(a,14)){c=a;yO(d,c);}else throw a;}}
function rl(a){pl();var b,c;for(b=vF(sl);oF(b);){c=uh(pF(b));null.Cc();}}
function ul(a){pl();if(tl!==null){Ao(tl,a);}}
function vl(b){pl();var a;a=kg;if(a!==null){ql(b,a);}else{rl(b);}}
var sl,tl=null;function zl(){while((Dl(),gm).b>0){Cl(qh(pH((Dl(),gm),0),18));}}
function Al(){return null;}
function xl(){}
_=xl.prototype=new mD();_.nc=zl;_.oc=Al;_.tN=cL+'Timer$1';_.tI=42;function jm(){jm=BK;lm=kH(new iH());Bm=kH(new iH());{wm();}}
function km(a){jm();mH(lm,a);}
function mm(d){jm();var a,c;try{nm();}catch(a){a=Ah(a);if(rh(a,14)){c=a;yO(d,c);}else throw a;}}
function nm(){jm();var a,b;for(a=vF(lm);oF(a);){b=qh(pF(a),19);b.nc();}}
function om(d){jm();var a,c;try{return pm();}catch(a){a=Ah(a);if(rh(a,14)){c=a;yO(d,c);return null;}else throw a;}}
function pm(){jm();var a,b,c,d;d=null;for(a=vF(lm);oF(a);){b=qh(pF(a),19);c=b.oc();{d=c;}}return d;}
function qm(d){jm();var a,c;try{rm();}catch(a){a=Ah(a);if(rh(a,14)){c=a;yO(d,c);}else throw a;}}
function rm(){jm();var a,b;for(a=vF(Bm);oF(a);){b=uh(pF(a));null.Cc();}}
function sm(){jm();return Ck();}
function tm(){jm();return Dk();}
function um(){jm();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function vm(){jm();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function wm(){jm();__gwt_initHandlers(function(){zm();},function(){return ym();},function(){xm();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function xm(){jm();var a;a=kg;if(a!==null){mm(a);}else{nm();}}
function ym(){jm();var a;a=kg;if(a!==null){return om(a);}else{return pm();}}
function zm(){jm();var a;a=kg;if(a!==null){qm(a);}else{rm();}}
function Am(c,b,a){jm();$wnd.open(c,b,a);}
var lm,Bm;function yn(c,b,a){b.appendChild(a);}
function An(b,a){return $doc.createElement(a);}
function Bn(c,b,a){b.cancelBubble=a;}
function Cn(b,a){return !(!a.altKey);}
function Dn(b,a){return a.clientX|| -1;}
function En(b,a){return a.clientY|| -1;}
function Fn(b,a){return !(!a.ctrlKey);}
function ao(b,a){return a.which||(a.keyCode|| -1);}
function bo(b,a){return !(!a.metaKey);}
function co(b,a){return !(!a.shiftKey);}
function eo(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function fo(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function go(c,b){var a=$doc.getElementById(b);return a||null;}
function io(d,a,b){var c=a[b];return c==null?null:String(c);}
function ho(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function jo(b,a){return a.__eventBits||0;}
function ko(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.ib(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function lo(d,b,a){var c=b.style[a];return c==null?null:c;}
function mo(c,b,a){b.removeChild(a);}
function no(c,b,a,d){b.setAttribute(a,d);}
function po(c,a,b,d){a[b]=d;}
function oo(c,a,b,d){a[b]=d;}
function qo(c,a,b){a.__listener=b;}
function ro(c,a,b){if(!b){b='';}a.innerHTML=b;}
function so(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function to(c,b,a,d){b.style[a]=d;}
function uo(a){return $doc.body.clientHeight;}
function vo(a){return $doc.body.clientWidth;}
function wo(a){return ko(this,a);}
function Cm(){}
_=Cm.prototype=new mD();_.ib=wo;_.tN=dL+'DOMImpl';_.tI=43;function nn(b,a){return a.relatedTarget?a.relatedTarget:null;}
function on(b,a){return a.target||null;}
function pn(b,a){return a.relatedTarget||null;}
function qn(b,a){a.preventDefault();}
function rn(b,a){return a.toString();}
function sn(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function tn(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function un(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){oj(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!mk(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)oj(b,a,c);};$wnd.__captureElem=null;}
function vn(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function wn(b,a){$wnd.__captureElem=a;}
function xn(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ln(){}
_=ln.prototype=new Cm();_.tN=dL+'DOMImplStandard';_.tI=44;function Fm(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function an(c,b){var a=b.button;if(a==0){return 1;}else if(a==1){return 4;}return a|| -1;}
function bn(b,a){return $doc.getBoxObjectFor(a).screenX-$doc.getBoxObjectFor($doc.documentElement).screenX;}
function cn(b,a){return $doc.getBoxObjectFor(a).screenY-$doc.getBoxObjectFor($doc.documentElement).screenY;}
function en(a){un(a);dn(a);}
function dn(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function fn(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function gn(b,a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function jn(c,b,a){xn(c,b,a);hn(c,b,a);}
function hn(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function kn(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function Dm(){}
_=Dm.prototype=new ln();_.tN=dL+'DOMImplMozilla';_.tI=45;function Fo(a){vl(a);}
function xo(){}
_=xo.prototype=new mD();_.tN=dL+'HistoryImpl';_.tI=46;function Do(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;Fo(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function Bo(){}
_=Bo.prototype=new xo();_.tN=dL+'HistoryImplStandard';_.tI=47;function Ao(d,a){if(a==null||a.length==0){var c=$wnd.location.href;var b=c.indexOf('#');if(b!= -1)c=c.substring(0,b);$wnd.location=c+'#';}else{$wnd.location.hash=encodeURIComponent(a);}}
function yo(){}
_=yo.prototype=new Bo();_.tN=dL+'HistoryImplMozilla';_.tI=48;function dz(b,a){wz(b.nb(),a,true);}
function fz(a){return Ej(a.gb());}
function gz(a){return Fj(a.gb());}
function hz(a){return ck(a.q,'offsetHeight');}
function iz(a){return ck(a.q,'offsetWidth');}
function jz(b,a){wz(b.nb(),a,false);}
function kz(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function lz(b,a){if(b.q!==null){kz(b,b.q,a);}b.q=a;}
function mz(b,c,a){if(c>=0){b.xc(c+'px');}if(a>=0){b.tc(a+'px');}}
function nz(b,a){vz(b.nb(),a);}
function oz(b,a){Ak(b.gb(),a|ek(b.gb()));}
function pz(){return this.q;}
function qz(){return hz(this);}
function rz(){return iz(this);}
function sz(){return this.q;}
function tz(a){return dk(a,'className');}
function uz(a){zk(this.q,'height',a);}
function vz(a,b){vk(a,'className',b);}
function wz(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw tD(new rD(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=kE(j);if(gE(j)==0){throw mC(new lC(),'Style names cannot be empty');}i=tz(c);e=dE(i,j);while(e!=(-1)){if(e==0||FD(i,e-1)==32){f=e+gE(j);g=gE(i);if(f==g||f<g&&FD(i,f)==32){break;}}e=eE(i,j,e+1);}if(a){if(e==(-1)){if(gE(i)>0){i+=' ';}vk(c,'className',i+j);}}else{if(e!=(-1)){b=kE(jE(i,0,e));d=kE(iE(i,e+gE(j)));if(gE(b)==0){h=d;}else if(gE(d)==0){h=b;}else{h=b+' '+d;}vk(c,'className',h);}}}
function xz(a,b){a.style.display=b?'':'none';}
function yz(a){xz(this.q,a);}
function zz(a){zk(this.q,'width',a);}
function Az(){if(this.q===null){return '(null handle)';}return Bk(this.q);}
function cz(){}
_=cz.prototype=new mD();_.gb=pz;_.lb=qz;_.mb=rz;_.nb=sz;_.tc=uz;_.vc=yz;_.xc=zz;_.tS=Az;_.tN=eL+'UIObject';_.tI=49;_.q=null;function uA(a){if(!a.ub()){throw qC(new oC(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.mc();}finally{a.D();wk(a.gb(),null);a.o=false;}}
function vA(a){if(rh(a.p,24)){qh(a.p,24).rc(a);}else if(a.p!==null){throw qC(new oC(),"This widget's parent does not implement HasWidgets");}}
function wA(b,a){if(b.ub()){wk(b.gb(),null);}lz(b,a);if(b.ub()){wk(a,b);}}
function xA(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.ub()){c.Eb();}c.p=null;}else{if(a!==null){throw qC(new oC(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.ub()){c.Ab();}}}
function yA(){}
function zA(){}
function AA(){return this.o;}
function BA(){if(this.ub()){throw qC(new oC(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;wk(this.gb(),this);this.C();this.dc();}
function CA(a){}
function DA(){uA(this);}
function EA(){}
function FA(){}
function dA(){}
_=dA.prototype=new cz();_.C=yA;_.D=zA;_.ub=AA;_.Ab=BA;_.Cb=CA;_.Eb=DA;_.dc=EA;_.mc=FA;_.tN=eL+'Widget';_.tI=50;_.o=false;_.p=null;function rv(b,a){xA(a,b);}
function tv(b,a){xA(a,null);}
function uv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Ab();}}
function vv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Eb();}}
function wv(){}
function xv(){}
function qv(){}
_=qv.prototype=new dA();_.C=uv;_.D=vv;_.dc=wv;_.mc=xv;_.tN=eL+'Panel';_.tI=51;function wp(a){a.f=kA(new eA(),a);}
function xp(a){wp(a);return a;}
function yp(c,a,b){vA(a);lA(c.f,a);cj(b,a.gb());rv(c,a);}
function zp(d,b,a){var c;Bp(d,a);if(b.p===d){c=Dp(d,b);if(c<a){a--;}}return a;}
function Ap(b,a){if(a<0||a>=b.f.b){throw tC(new sC());}}
function Bp(b,a){if(a<0||a>b.f.b){throw tC(new sC());}}
function Ep(b,a){return nA(b.f,a);}
function Dp(b,a){return oA(b.f,a);}
function Fp(e,b,c,a,d){a=zp(e,b,a);vA(b);pA(e.f,b,a);if(d){kk(c,b.gb(),a);}else{cj(c,b.gb());}rv(e,b);}
function aq(a){return qA(a.f);}
function bq(b,c){var a;if(c.p!==b){return false;}tv(b,c);a=c.gb();ok(hk(a),a);sA(b.f,c);return true;}
function cq(){return aq(this);}
function dq(a){return bq(this,a);}
function vp(){}
_=vp.prototype=new qv();_.vb=cq;_.rc=dq;_.tN=eL+'ComplexPanel';_.tI=52;function bp(a){xp(a);wA(a,fj());zk(a.gb(),'position','relative');zk(a.gb(),'overflow','hidden');return a;}
function cp(a,b){yp(a,b,a.gb());}
function dp(b,d,a,c){vA(d);gp(b,d,a,c);cp(b,d);}
function fp(b,c){var a;a=bq(b,c);if(a){hp(c.gb());}return a;}
function gp(c,e,b,d){var a;a=e.gb();if(b==(-1)&&d==(-1)){hp(a);}else{zk(a,'position','absolute');zk(a,'left',b+'px');zk(a,'top',d+'px');}}
function hp(a){zk(a,'left','');zk(a,'top','');zk(a,'position','');}
function ip(a){return fp(this,a);}
function ap(){}
_=ap.prototype=new vp();_.rc=ip;_.tN=eL+'AbsolutePanel';_.tI=53;function kp(a){xp(a);a.e=kj();a.d=hj();cj(a.e,a.d);wA(a,a.e);return a;}
function mp(c,d,a){var b;b=hk(d.gb());vk(b,'height',a);}
function np(c,b,a){vk(b,'align',a.a);}
function op(c,b,a){zk(b,'verticalAlign',a.a);}
function pp(b,c,d){var a;a=hk(c.gb());vk(a,'width',d);}
function jp(){}
_=jp.prototype=new vp();_.tN=eL+'CellPanel';_.tI=54;_.d=null;_.e=null;function fF(d,a,b){var c;while(a.tb()){c=a.yb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function hF(a){throw cF(new bF(),'add');}
function iF(b){var a;a=fF(this,this.vb(),b);return a!==null;}
function jF(){var a,b,c;c=xD(new wD());a=null;yD(c,'[');b=this.vb();while(b.tb()){if(a!==null){yD(c,a);}else{a=', ';}yD(c,tE(b.yb()));}yD(c,']');return CD(c);}
function eF(){}
_=eF.prototype=new mD();_.s=hF;_.z=iF;_.tS=jF;_.tN=iL+'AbstractCollection';_.tI=55;function uF(b,a){throw uC(new sC(),'Index: '+a+', Size: '+b.b);}
function vF(a){return mF(new lF(),a);}
function wF(b,a){throw cF(new bF(),'add');}
function xF(a){this.r(this.yc(),a);return true;}
function yF(e){var a,b,c,d,f;if(e===this){return true;}if(!rh(e,29)){return false;}f=qh(e,29);if(this.yc()!=f.yc()){return false;}c=vF(this);d=f.vb();while(oF(c)){a=pF(c);b=pF(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function zF(){var a,b,c,d;c=1;a=31;b=vF(this);while(oF(b)){d=pF(b);c=31*c+(d===null?0:d.hC());}return c;}
function AF(){return vF(this);}
function BF(a){throw cF(new bF(),'remove');}
function kF(){}
_=kF.prototype=new eF();_.r=wF;_.s=xF;_.eQ=yF;_.hC=zF;_.vb=AF;_.qc=BF;_.tN=iL+'AbstractList';_.tI=56;function jH(a){{nH(a);}}
function kH(a){jH(a);return a;}
function mH(b,a){aI(b.a,b.b++,a);return true;}
function lH(d,a){var b,c;c=a.vb();b=c.tb();while(c.tb()){aI(d.a,d.b++,c.yb());}return b;}
function nH(a){a.a=zg();a.b=0;}
function pH(b,a){if(a<0||a>=b.b){uF(b,a);}return CH(b.a,a);}
function qH(b,a){return rH(b,a,0);}
function rH(c,b,a){if(a<0){uF(c,a);}for(;a<c.b;++a){if(BH(b,CH(c.a,a))){return a;}}return (-1);}
function sH(a){return a.b==0;}
function tH(c,a){var b;b=pH(c,a);EH(c.a,a,1);--c.b;return b;}
function uH(c,b){var a;a=qH(c,b);if(a==(-1)){return false;}tH(c,a);return true;}
function vH(d,a,b){var c;c=pH(d,a);aI(d.a,a,b);return c;}
function wH(c,a){var b;if(a.a<c.b){a=fh(a,c.b);}for(b=0;b<c.b;++b){mh(a,b,CH(c.a,b));}if(a.a>c.b){mh(a,c.b,null);}return a;}
function yH(a,b){if(a<0||a>this.b){uF(this,a);}xH(this.a,a,b);++this.b;}
function zH(a){return mH(this,a);}
function xH(a,b,c){a.splice(b,0,c);}
function AH(a){return qH(this,a)!=(-1);}
function BH(a,b){return a===b||a!==null&&a.eQ(b);}
function DH(a){return pH(this,a);}
function CH(a,b){return a[b];}
function FH(a){return tH(this,a);}
function EH(a,c,b){a.splice(c,b);}
function aI(a,b,c){a[b]=c;}
function bI(){return this.b;}
function iH(){}
_=iH.prototype=new kF();_.r=yH;_.s=zH;_.z=AH;_.rb=DH;_.qc=FH;_.yc=bI;_.tN=iL+'ArrayList';_.tI=57;_.a=null;_.b=0;function rp(a){kH(a);return a;}
function tp(d,c){var a,b;for(a=vF(d);oF(a);){b=qh(pF(a),20);b.Db(c);}}
function qp(){}
_=qp.prototype=new iH();_.tN=eL+'ClickListenerCollection';_.tI=58;function gq(a,b){if(a.d!==null){throw qC(new oC(),'Composite.initWidget() may only be called once.');}vA(b);wA(a,b.gb());a.d=b;xA(b,a);}
function hq(){if(this.d===null){throw qC(new oC(),'initWidget() was never called in '+jg(this));}return this.q;}
function iq(){if(this.d!==null){return this.d.ub();}return false;}
function jq(){this.d.Ab();this.dc();}
function kq(){try{this.mc();}finally{this.d.Eb();}}
function eq(){}
_=eq.prototype=new dA();_.gb=hq;_.ub=iq;_.Ab=jq;_.Eb=kq;_.tN=eL+'Composite';_.tI=59;_.d=null;function mq(a){xp(a);wA(a,fj());return a;}
function oq(b,c){var a;a=c.gb();zk(a,'width','100%');zk(a,'height','100%');c.vc(false);}
function pq(b,c,a){Fp(b,c,b.gb(),a,true);oq(b,c);}
function qq(b,c){var a;a=bq(b,c);if(a){rq(b,c);if(b.b===c){b.b=null;}}return a;}
function rq(a,b){zk(b.gb(),'width','');zk(b.gb(),'height','');b.vc(true);}
function sq(b,a){Ap(b,a);if(b.b!==null){b.b.vc(false);}b.b=Ep(b,a);b.b.vc(true);}
function tq(a){return qq(this,a);}
function lq(){}
_=lq.prototype=new vp();_.rc=tq;_.tN=eL+'DeckPanel';_.tI=60;_.b=null;function hx(a){ix(a,fj());return a;}
function ix(b,a){wA(b,a);return b;}
function jx(a,b){if(a.n!==null){throw qC(new oC(),'SimplePanel can only contain one child widget');}a.wc(b);}
function lx(a,b){if(b===a.n){return;}if(b!==null){vA(b);}if(a.n!==null){a.rc(a.n);}a.n=b;if(b!==null){cj(a.db(),a.n.gb());rv(a,b);}}
function mx(){return this.gb();}
function nx(){return dx(new bx(),this);}
function ox(a){if(this.n!==a){return false;}tv(this,a);ok(this.db(),a.gb());this.n=null;return true;}
function px(a){lx(this,a);}
function ax(){}
_=ax.prototype=new qv();_.db=mx;_.vb=nx;_.rc=ox;_.wc=px;_.tN=eL+'SimplePanel';_.tI=61;_.n=null;function Ev(){Ev=BK;nw=gB(new bB());}
function zv(a){Ev();ix(a,iB(nw));ew(a,0,0);return a;}
function Av(b,a){Ev();zv(b);b.g=a;return b;}
function Bv(c,a,b){Ev();Av(c,a);c.k=b;return c;}
function Cv(b,a){if(a.blur){a.blur();}}
function Dv(c){var a,b,d;a=c.l;if(!a){fw(c,false);iw(c);}b=th((tm()-aw(c))/2);d=th((sm()-Fv(c))/2);ew(c,um()+b,vm()+d);if(!a){fw(c,true);}}
function Fv(a){return hz(a);}
function aw(a){return iz(a);}
function bw(b,a){if(!b.l){return;}b.l=false;fp(Cw(),b);b.gb();}
function cw(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.tc(a.h);}if(a.i!==null){b.xc(a.i);}}}
function dw(e,b){var a,c,d,f;d=zj(b);c=lk(e.gb(),d);f=Bj(b);switch(f){case 128:{a=(sh(wj(b)),Cu(b),true);return a&&(c|| !e.k);}case 512:{a=(sh(wj(b)),Cu(b),true);return a&&(c|| !e.k);}case 256:{a=(sh(wj(b)),Cu(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((aj(),qk)!==null){return true;}if(!c&&e.g&&f==4){bw(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){Cv(e,d);return false;}}}return !e.k||c;}
function ew(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.gb();zk(a,'left',b+'px');zk(a,'top',d+'px');}
function fw(a,b){zk(a.gb(),'visibility',b?'visible':'hidden');a.gb();}
function gw(a,b){lx(a,b);cw(a);}
function hw(a,b){a.i=b;cw(a);if(gE(b)==0){a.i=null;}}
function iw(a){if(a.l){return;}a.l=true;bj(a);zk(a.gb(),'position','absolute');if(a.m!=(-1)){ew(a,a.j,a.m);}cp(Cw(),a);a.gb();}
function jw(){return jB(nw,this.gb());}
function kw(){return Fv(this);}
function lw(){return aw(this);}
function mw(){return jB(nw,this.gb());}
function ow(){pk(this);uA(this);}
function pw(a){return dw(this,a);}
function qw(a){this.h=a;cw(this);if(gE(a)==0){this.h=null;}}
function rw(a){fw(this,a);}
function sw(a){gw(this,a);}
function tw(a){hw(this,a);}
function yv(){}
_=yv.prototype=new ax();_.db=jw;_.lb=kw;_.mb=lw;_.nb=mw;_.Eb=ow;_.bc=pw;_.tc=qw;_.vc=rw;_.wc=sw;_.xc=tw;_.tN=eL+'PopupPanel';_.tI=62;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var nw;function yq(){yq=BK;Ev();}
function vq(a){a.a=pt(new ur());a.f=hr(new dr());}
function wq(b,a){yq();xq(b,a,true);return b;}
function xq(c,a,b){yq();Bv(c,a,b);vq(c);lt(c.f,0,0,c.a);c.f.tc('100%');gt(c.f,0);it(c.f,0);jt(c.f,0);es(c.f.b,1,0,'100%');hs(c.f.b,1,0,'100%');ds(c.f.b,1,0,(zt(),At),(au(),cu));gw(c,c.f);nz(c,'gwt-DialogBox');nz(c.a,'Caption');bv(c.a,c);return c;}
function zq(b,a){tt(b.a,a);}
function Aq(a){if(Bj(a)==4){if(lk(this.a.gb(),zj(a))){Cj(a);}}return dw(this,a);}
function Bq(a,b,c){this.e=true;sk(this.a.gb());this.c=b;this.d=c;}
function Cq(a){}
function Dq(a){}
function Eq(c,d,e){var a,b;if(this.e){a=d+fz(this);b=e+gz(this);ew(this,a-this.c,b-this.d);}}
function Fq(a,b,c){this.e=false;nk(this.a.gb());}
function ar(a){if(this.b!==a){return false;}ft(this.f,a);return true;}
function br(a){if(this.b!==null){ft(this.f,this.b);}if(a!==null){lt(this.f,1,0,a);}this.b=a;}
function cr(a){hw(this,a);this.f.xc('100%');}
function uq(){}
_=uq.prototype=new yv();_.bc=Aq;_.ec=Bq;_.fc=Cq;_.gc=Dq;_.hc=Eq;_.ic=Fq;_.rc=ar;_.wc=br;_.xc=cr;_.tN=eL+'DialogBox';_.tI=63;_.b=null;_.c=0;_.d=0;_.e=false;function Bs(a){a.e=rs(new ms());}
function Cs(a){Bs(a);a.d=kj();a.a=hj();cj(a.d,a.a);wA(a,a.d);oz(a,1);return a;}
function Ds(c,a){var b;b=kr(c);if(a>=b||a<0){throw uC(new sC(),'Row index: '+a+', Row size: '+b);}}
function Es(e,c,b,a){var d;d=cs(e.b,c,b);et(e,d,a);return d;}
function at(c,b,a){return b.rows[a].cells.length;}
function bt(a){return ct(a,a.a);}
function ct(b,a){return a.rows.length;}
function dt(b,a){var c;if(a!=kr(b)){Ds(b,a);}c=jj();kk(b.a,c,a);return a;}
function et(d,c,a){var b,e;b=fk(c);e=null;if(b!==null){e=ts(d.e,b);}if(e!==null){ft(d,e);return true;}else{if(a){xk(c,'');}return false;}}
function ft(b,c){var a;if(c.p!==b){return false;}tv(b,c);a=c.gb();ok(hk(a),a);ws(b.e,a);return true;}
function gt(a,b){vk(a.d,'border',''+b);}
function ht(b,a){b.b=a;}
function it(b,a){uk(b.d,'cellPadding',a);}
function jt(b,a){uk(b.d,'cellSpacing',a);}
function kt(b,a){b.c=a;ls(b.c);}
function lt(d,b,a,e){var c;mr(d,b,a);if(e!==null){vA(e);c=Es(d,b,a,true);us(d.e,e);cj(c,e.gb());rv(d,e);}}
function mt(){return xs(this.e);}
function nt(a){switch(Bj(a)){case 1:{break;}default:}}
function ot(a){return ft(this,a);}
function vr(){}
_=vr.prototype=new qv();_.vb=mt;_.Cb=nt;_.rc=ot;_.tN=eL+'HTMLTable';_.tI=64;_.a=null;_.b=null;_.c=null;_.d=null;function hr(a){Cs(a);ht(a,fr(new er(),a));kt(a,js(new is(),a));return a;}
function jr(b,a){Ds(b,a);return at(b,b.a,a);}
function kr(a){return bt(a);}
function lr(b,a){return dt(b,a);}
function mr(e,d,b){var a,c;nr(e,d);if(b<0){throw uC(new sC(),'Cannot create a column with a negative index: '+b);}a=jr(e,d);c=b+1-a;if(c>0){or(e.a,d,c);}}
function nr(d,b){var a,c;if(b<0){throw uC(new sC(),'Cannot create a row with a negative index: '+b);}c=kr(d);for(a=c;a<=b;a++){lr(d,a);}}
function or(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function dr(){}
_=dr.prototype=new vr();_.tN=eL+'FlexTable';_.tI=65;function Fr(b,a){b.a=a;return b;}
function bs(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function cs(c,b,a){return bs(c,c.a.a,b,a);}
function ds(d,c,a,b,e){fs(d,c,a,b);gs(d,c,a,e);}
function es(e,d,a,c){var b;mr(e.a,d,a);b=bs(e,e.a.a,d,a);vk(b,'height',c);}
function fs(e,d,b,a){var c;mr(e.a,d,b);c=bs(e,e.a.a,d,b);vk(c,'align',a.a);}
function gs(d,c,b,a){mr(d.a,c,b);zk(bs(d,d.a.a,c,b),'verticalAlign',a.a);}
function hs(c,b,a,d){mr(c.a,b,a);vk(bs(c,c.a.a,b,a),'width',d);}
function Er(){}
_=Er.prototype=new mD();_.tN=eL+'HTMLTable$CellFormatter';_.tI=66;function fr(b,a){Fr(b,a);return b;}
function er(){}
_=er.prototype=new Er();_.tN=eL+'FlexTable$FlexCellFormatter';_.tI=67;function qr(a){xp(a);wA(a,fj());return a;}
function rr(a,b){yp(a,b,a.gb());}
function tr(b,c,a){Fp(b,c,b.gb(),a,true);}
function pr(){}
_=pr.prototype=new vp();_.tN=eL+'FlowPanel';_.tI=68;function Eu(a){wA(a,fj());oz(a,131197);nz(a,'gwt-Label');return a;}
function Fu(b,a){Eu(b);dv(b,a);return b;}
function av(b,a){if(b.a===null){b.a=rp(new qp());}mH(b.a,a);}
function bv(b,a){if(b.b===null){b.b=hv(new gv());}mH(b.b,a);}
function dv(b,a){yk(b.gb(),a);}
function ev(a,b){zk(a.gb(),'whiteSpace',b?'normal':'nowrap');}
function fv(a){switch(Bj(a)){case 1:if(this.a!==null){tp(this.a,this);}break;case 4:case 8:case 64:case 16:case 32:if(this.b!==null){lv(this.b,this,a);}break;case 131072:break;}}
function Du(){}
_=Du.prototype=new dA();_.Cb=fv;_.tN=eL+'Label';_.tI=69;_.a=null;_.b=null;function pt(a){Eu(a);wA(a,fj());oz(a,125);nz(a,'gwt-HTML');return a;}
function qt(b,a){pt(b);tt(b,a);return b;}
function rt(b,a,c){qt(b,a);ev(b,c);return b;}
function tt(b,a){xk(b.gb(),a);}
function ur(){}
_=ur.prototype=new Du();_.tN=eL+'HTML';_.tI=70;function xr(a){{Ar(a);}}
function yr(b,a){b.b=a;xr(b);return b;}
function Ar(a){while(++a.a<a.b.b.b){if(pH(a.b.b,a.a)!==null){return;}}}
function Br(a){return a.a<a.b.b.b;}
function Cr(){return Br(this);}
function Dr(){var a;if(!Br(this)){throw xK(new wK());}a=pH(this.b.b,this.a);Ar(this);return a;}
function wr(){}
_=wr.prototype=new mD();_.tb=Cr;_.yb=Dr;_.tN=eL+'HTMLTable$1';_.tI=71;_.a=(-1);function js(b,a){b.b=a;return b;}
function ls(a){if(a.a===null){a.a=gj('colgroup');kk(a.b.d,a.a,0);cj(a.a,gj('col'));}}
function is(){}
_=is.prototype=new mD();_.tN=eL+'HTMLTable$ColumnFormatter';_.tI=72;_.a=null;function qs(a){a.b=kH(new iH());}
function rs(a){qs(a);return a;}
function ts(c,a){var b;b=zs(a);if(b<0){return null;}return qh(pH(c.b,b),12);}
function us(b,c){var a;if(b.a===null){a=b.b.b;mH(b.b,c);}else{a=b.a.a;vH(b.b,a,c);b.a=b.a.b;}As(c.gb(),a);}
function vs(c,a,b){ys(a);vH(c.b,b,null);c.a=os(new ns(),b,c.a);}
function ws(c,a){var b;b=zs(a);vs(c,a,b);}
function xs(a){return yr(new wr(),a);}
function ys(a){a['__widgetID']=null;}
function zs(a){var b=a['__widgetID'];return b==null?-1:b;}
function As(a,b){a['__widgetID']=b;}
function ms(){}
_=ms.prototype=new mD();_.tN=eL+'HTMLTable$WidgetMapper';_.tI=73;_.a=null;function os(c,a,b){c.a=a;c.b=b;return c;}
function ns(){}
_=ns.prototype=new mD();_.tN=eL+'HTMLTable$WidgetMapper$FreeNode';_.tI=74;_.a=0;_.b=null;function zt(){zt=BK;At=xt(new wt(),'center');Bt=xt(new wt(),'left');xt(new wt(),'right');}
var At,Bt;function xt(b,a){b.a=a;return b;}
function wt(){}
_=wt.prototype=new mD();_.tN=eL+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=75;_.a=null;function au(){au=BK;bu=Et(new Dt(),'bottom');cu=Et(new Dt(),'middle');du=Et(new Dt(),'top');}
var bu,cu,du;function Et(a,b){a.a=b;return a;}
function Dt(){}
_=Dt.prototype=new mD();_.tN=eL+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=76;_.a=null;function hu(a){a.a=(zt(),Bt);a.c=(au(),du);}
function iu(a){kp(a);hu(a);a.b=jj();cj(a.d,a.b);vk(a.e,'cellSpacing','0');vk(a.e,'cellPadding','0');return a;}
function ju(b,c){var a;a=lu(b);cj(b.b,a);yp(b,c,a);}
function lu(b){var a;a=ij();np(b,a,b.a);op(b,a,b.c);return a;}
function mu(c,d,a){var b;Bp(c,a);b=lu(c);kk(c.b,b,a);Fp(c,d,b,a,false);}
function nu(c,d){var a,b;b=hk(d.gb());a=bq(c,d);if(a){ok(c.b,b);}return a;}
function ou(b,a){b.c=a;}
function pu(a){return nu(this,a);}
function gu(){}
_=gu.prototype=new jp();_.rc=pu;_.tN=eL+'HorizontalPanel';_.tI=77;_.b=null;function ru(a){wA(a,fj());cj(a.gb(),a.a=ej());oz(a,1);nz(a,'gwt-Hyperlink');return a;}
function su(c,b,a){ru(c);xu(c,b);wu(c,a);return c;}
function tu(b,a){if(b.b===null){b.b=rp(new qp());}mH(b.b,a);}
function vu(a){return gk(a.a);}
function wu(b,a){b.c=a;vk(b.a,'href','#'+a);}
function xu(b,a){yk(b.a,a);}
function yu(a){if(Bj(a)==1){if(this.b!==null){tp(this.b,this);}ul(this.c);Cj(a);}}
function qu(){}
_=qu.prototype=new dA();_.Cb=yu;_.tN=eL+'Hyperlink';_.tI=78;_.a=null;_.b=null;_.c=null;function Cu(a){return (yj(a)?1:0)|(xj(a)?8:0)|(uj(a)?2:0)|(qj(a)?4:0);}
function hv(a){kH(a);return a;}
function jv(d,c,e,f){var a,b;for(a=vF(d);oF(a);){b=qh(pF(a),21);b.ec(c,e,f);}}
function kv(d,c){var a,b;for(a=vF(d);oF(a);){b=qh(pF(a),21);b.fc(c);}}
function lv(e,c,a){var b,d,f,g,h;d=c.gb();g=sj(a)-Ej(d)+ck(d,'scrollLeft')+um();h=tj(a)-Fj(d)+ck(d,'scrollTop')+vm();switch(Bj(a)){case 4:jv(e,c,g,h);break;case 8:ov(e,c,g,h);break;case 64:nv(e,c,g,h);break;case 16:b=vj(a);if(!lk(d,b)){kv(e,c);}break;case 32:f=Aj(a);if(!lk(d,f)){mv(e,c);}break;}}
function mv(d,c){var a,b;for(a=vF(d);oF(a);){b=qh(pF(a),21);b.gc(c);}}
function nv(d,c,e,f){var a,b;for(a=vF(d);oF(a);){b=qh(pF(a),21);b.hc(c,e,f);}}
function ov(d,c,e,f){var a,b;for(a=vF(d);oF(a);){b=qh(pF(a),21);b.ic(c,e,f);}}
function gv(){}
_=gv.prototype=new iH();_.tN=eL+'MouseListenerCollection';_.tI=79;function Aw(){Aw=BK;Fw=pJ(new tI());}
function zw(b,a){Aw();bp(b);if(a===null){a=Bw();}wA(b,a);b.Ab();return b;}
function Cw(){Aw();return Dw(null);}
function Dw(c){Aw();var a,b;b=qh(vJ(Fw,c),22);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=bk(c))){return null;}}if(Fw.c==0){Ew();}wJ(Fw,c,b=zw(new uw(),a));return b;}
function Bw(){Aw();return $doc.body;}
function Ew(){Aw();km(new vw());}
function uw(){}
_=uw.prototype=new ap();_.tN=eL+'RootPanel';_.tI=80;var Fw;function xw(){var a,b;for(b=oG(CG((Aw(),Fw)));vG(b);){a=qh(wG(b),22);if(a.ub()){a.Eb();}}}
function yw(){return null;}
function vw(){}
_=vw.prototype=new mD();_.nc=xw;_.oc=yw;_.tN=eL+'RootPanel$1';_.tI=81;function cx(a){a.a=a.b.n!==null;}
function dx(b,a){b.b=a;cx(b);return b;}
function fx(){return this.a;}
function gx(){if(!this.a||this.b.n===null){throw xK(new wK());}this.a=false;return this.b.n;}
function bx(){}
_=bx.prototype=new mD();_.tb=fx;_.yb=gx;_.tN=eL+'SimplePanel$1';_.tI=82;function xx(a){a.a=iu(new gu());}
function yx(c){var a,b;xx(c);gq(c,c.a);oz(c,1);nz(c,'gwt-TabBar');ou(c.a,(au(),bu));a=rt(new ur(),'&nbsp;',true);b=rt(new ur(),'&nbsp;',true);nz(a,'gwt-TabBarFirst');nz(b,'gwt-TabBarRest');a.tc('100%');b.tc('100%');ju(c.a,a);ju(c.a,b);a.tc('100%');mp(c.a,a,'100%');pp(c.a,b,'100%');return c;}
function zx(b,a){if(b.c===null){b.c=ey(new dy());}mH(b.c,a);}
function Ax(b,a){if(a<0||a>Dx(b)){throw tC(new sC());}}
function Bx(b,a){if(a<(-1)||a>=Dx(b)){throw tC(new sC());}}
function Dx(a){return a.a.f.b-2;}
function Ex(e,d,a,b){var c;Ax(e,b);if(a){c=qt(new ur(),d);}else{c=Fu(new Du(),d);}ev(c,false);av(c,e);nz(c,'gwt-TabBarItem');mu(e.a,c,b+1);}
function Fx(b,a){var c;Bx(b,a);c=Ep(b.a,a+1);if(c===b.b){b.b=null;}nu(b.a,c);}
function ay(b,a){Bx(b,a);if(b.c!==null){if(!gy(b.c,b,a)){return false;}}by(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=Ep(b.a,a+1);by(b,b.b,true);if(b.c!==null){hy(b.c,b,a);}return true;}
function by(c,a,b){if(a!==null){if(b){dz(a,'gwt-TabBarItem-selected');}else{jz(a,'gwt-TabBarItem-selected');}}}
function cy(b){var a;for(a=1;a<this.a.f.b-1;++a){if(Ep(this.a,a)===b){ay(this,a-1);return;}}}
function wx(){}
_=wx.prototype=new eq();_.Db=cy;_.tN=eL+'TabBar';_.tI=83;_.b=null;_.c=null;function ey(a){kH(a);return a;}
function gy(e,c,d){var a,b;for(a=vF(e);oF(a);){b=qh(pF(a),23);if(!b.Bb(c,d)){return false;}}return true;}
function hy(e,c,d){var a,b;for(a=vF(e);oF(a);){b=qh(pF(a),23);b.lc(c,d);}}
function dy(){}
_=dy.prototype=new iH();_.tN=eL+'TabListenerCollection';_.tI=84;function vy(a){a.b=ry(new qy());a.a=ly(new ky(),a.b);}
function wy(b){var a;vy(b);a=Dz(new Bz());Ez(a,b.b);Ez(a,b.a);mp(a,b.a,'100%');b.b.xc('100%');zx(b.b,b);gq(b,a);nz(b,'gwt-TabPanel');nz(b.a,'gwt-TabPanelBottom');return b;}
function yy(b,c,a){By(b,c,a,b.a.f.b);}
function xy(b,a){if(b.c===null){b.c=ey(new dy());}mH(b.c,a);}
function Ay(b,a){return Ep(b.a,a);}
function Cy(d,e,c,a,b){ny(d.a,e,c,a,b);}
function By(c,d,b,a){Cy(c,d,b,false,a);}
function Dy(b,a){ay(b.b,a);}
function Ey(){return aq(this.a);}
function Fy(a,b){if(this.c!==null){return gy(this.c,this,b);}return true;}
function az(a,b){sq(this.a,b);if(this.c!==null){hy(this.c,this,b);}}
function bz(a){return oy(this.a,a);}
function jy(){}
_=jy.prototype=new eq();_.vb=Ey;_.Bb=Fy;_.lc=az;_.rc=bz;_.tN=eL+'TabPanel';_.tI=85;_.c=null;function ly(b,a){mq(b);b.a=a;return b;}
function ny(e,f,d,a,b){var c;c=Dp(e,f);if(c!=(-1)){oy(e,f);if(c<b){b--;}}ty(e.a,d,a,b);pq(e,f,b);}
function oy(b,c){var a;a=Dp(b,c);if(a!=(-1)){uy(b.a,a);return qq(b,c);}return false;}
function py(a){return oy(this,a);}
function ky(){}
_=ky.prototype=new lq();_.rc=py;_.tN=eL+'TabPanel$TabbedDeckPanel';_.tI=86;_.a=null;function ry(a){yx(a);return a;}
function ty(d,c,a,b){Ex(d,c,a,b);}
function uy(b,a){Fx(b,a);}
function qy(){}
_=qy.prototype=new wx();_.tN=eL+'TabPanel$UnmodifiableTabBar';_.tI=87;function Cz(a){a.a=(zt(),Bt);a.b=(au(),du);}
function Dz(a){kp(a);Cz(a);vk(a.e,'cellSpacing','0');vk(a.e,'cellPadding','0');return a;}
function Ez(b,d){var a,c;c=jj();a=aA(b);cj(c,a);cj(b.d,c);yp(b,d,a);}
function aA(b){var a;a=ij();np(b,a,b.a);op(b,a,b.b);return a;}
function bA(c,e,a){var b,d;Bp(c,a);d=jj();b=aA(c);cj(d,b);kk(c.d,d,a);Fp(c,e,b,a,false);}
function cA(c){var a,b;b=hk(c.gb());a=bq(this,c);if(a){ok(this.d,hk(b));}return a;}
function Bz(){}
_=Bz.prototype=new jp();_.rc=cA;_.tN=eL+'VerticalPanel';_.tI=88;function kA(b,a){b.a=kh('[Lcom.google.gwt.user.client.ui.Widget;',[154],[12],[4],null);return b;}
function lA(a,b){pA(a,b,a.b);}
function nA(b,a){if(a<0||a>=b.b){throw tC(new sC());}return b.a[a];}
function oA(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function pA(d,e,a){var b,c;if(a<0||a>d.b){throw tC(new sC());}if(d.b==d.a.a){c=kh('[Lcom.google.gwt.user.client.ui.Widget;',[154],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){mh(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){mh(d.a,b,d.a[b-1]);}mh(d.a,a,e);}
function qA(a){return gA(new fA(),a);}
function rA(c,b){var a;if(b<0||b>=c.b){throw tC(new sC());}--c.b;for(a=b;a<c.b;++a){mh(c.a,a,c.a[a+1]);}mh(c.a,c.b,null);}
function sA(b,c){var a;a=oA(b,c);if(a==(-1)){throw xK(new wK());}rA(b,a);}
function eA(){}
_=eA.prototype=new mD();_.tN=eL+'WidgetCollection';_.tI=89;_.a=null;_.b=0;function gA(b,a){b.b=a;return b;}
function iA(){return this.a<this.b.b-1;}
function jA(){if(this.a>=this.b.b){throw xK(new wK());}return this.b.a[++this.a];}
function fA(){}
_=fA.prototype=new mD();_.tb=iA;_.yb=jA;_.tN=eL+'WidgetCollection$WidgetIterator';_.tI=90;_.a=(-1);function aB(){}
_=aB.prototype=new mD();_.tN=fL+'PopupImpl';_.tI=91;function hB(){hB=BK;kB=lB();}
function gB(a){hB();return a;}
function iB(b){var a;a=fj();if(kB){xk(a,'<div><\/div>');al(dB(new cB(),b,a));}return a;}
function jB(b,a){return kB?fk(a):a;}
function lB(){hB();if(navigator.userAgent.indexOf('Macintosh')!= -1){return true;}return false;}
function bB(){}
_=bB.prototype=new aB();_.tN=fL+'PopupImplMozilla';_.tI=92;var kB;function dB(b,a,c){b.a=c;return b;}
function fB(){zk(this.a,'overflow','auto');}
function cB(){}
_=cB.prototype=new mD();_.F=fB;_.tN=fL+'PopupImplMozilla$1';_.tI=93;function qB(){}
_=qB.prototype=new mD();_.tN=gL+'OutputStream';_.tI=94;function oB(){}
_=oB.prototype=new qB();_.tN=gL+'FilterOutputStream';_.tI=95;function sB(){}
_=sB.prototype=new oB();_.tN=gL+'PrintStream';_.tI=96;function wB(){wB=BK;uD();}
function vB(a){wB();sD(a);return a;}
function uB(){}
_=uB.prototype=new rD();_.tN=hL+'ArrayStoreException';_.tI=97;function zB(){zB=BK;AB=yB(new xB(),false);BB=yB(new xB(),true);}
function yB(a,b){zB();a.a=b;return a;}
function CB(a){return rh(a,28)&&qh(a,28).a==this.a;}
function DB(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function EB(){return this.a?'true':'false';}
function FB(a){zB();return a?BB:AB;}
function xB(){}
_=xB.prototype=new mD();_.eQ=CB;_.hC=DB;_.tS=EB;_.tN=hL+'Boolean';_.tI=98;_.a=false;var AB,BB;function eC(){eC=BK;uD();}
function cC(a){eC();sD(a);return a;}
function dC(b,a){eC();tD(b,a);return b;}
function bC(){}
_=bC.prototype=new rD();_.tN=hL+'ClassCastException';_.tI=99;function nC(){nC=BK;uD();}
function mC(b,a){nC();tD(b,a);return b;}
function lC(){}
_=lC.prototype=new rD();_.tN=hL+'IllegalArgumentException';_.tI=100;function rC(){rC=BK;uD();}
function pC(a){rC();sD(a);return a;}
function qC(b,a){rC();tD(b,a);return b;}
function oC(){}
_=oC.prototype=new rD();_.tN=hL+'IllegalStateException';_.tI=101;function vC(){vC=BK;uD();}
function tC(a){vC();sD(a);return a;}
function uC(b,a){vC();tD(b,a);return b;}
function sC(){}
_=sC.prototype=new rD();_.tN=hL+'IndexOutOfBoundsException';_.tI=102;function jD(){jD=BK;{lD();}}
function lD(){jD();kD=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var kD=null;function xC(){xC=BK;jD();}
function AC(a){xC();return sE(a);}
var yC=2147483647,zC=(-2147483648);function DC(a){return a<0?-a:a;}
function EC(a){return a<0?-a:a;}
function FC(a,b){return a>b?a:b;}
function aD(a,b){return a<b?a:b;}
function bD(a){return Math.sqrt(a);}
function eD(){eD=BK;uD();}
function dD(a){eD();sD(a);return a;}
function cD(){}
_=cD.prototype=new rD();_.tN=hL+'NegativeArraySizeException';_.tI=103;function hD(){hD=BK;uD();}
function gD(b,a){hD();tD(b,a);return b;}
function fD(){}
_=fD.prototype=new rD();_.tN=hL+'NullPointerException';_.tI=104;function FD(b,a){return b.charCodeAt(a);}
function bE(f,c){var a,b,d,e,g,h;h=gE(f);e=gE(c);b=aD(h,e);for(a=0;a<b;a++){g=FD(f,a);d=FD(c,a);if(g!=d){return g-d;}}return h-e;}
function cE(b,a){if(!rh(a,1))return false;return lE(b,a);}
function dE(b,a){return b.indexOf(a);}
function eE(c,b,a){return c.indexOf(b,a);}
function fE(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function gE(a){return a.length;}
function hE(c,a,b){b=mE(b);return c.replace(RegExp(a,'g'),b);}
function iE(b,a){return b.substr(a,b.length-a);}
function jE(c,a,b){return c.substr(a,b-a);}
function kE(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function lE(a,b){return String(a)==b;}
function mE(b){var a;a=0;while(0<=(a=eE(b,'\\',a))){if(FD(b,a+1)==36){b=jE(b,0,a)+'$'+iE(b,++a);}else{b=jE(b,0,a)+iE(b,++a);}}return b;}
function nE(a){if(rh(a,1)){return bE(this,qh(a,1));}else{throw dC(new bC(),'Cannot compare '+a+" with String '"+this+"'");}}
function oE(a){return cE(this,a);}
function qE(){var a=pE;if(!a){a=pE={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function rE(){return this;}
function sE(a){return ''+a;}
function tE(a){return a!==null?a.tS():'null';}
_=String.prototype;_.u=nE;_.eQ=oE;_.hC=qE;_.tS=rE;_.tN=hL+'String';_.tI=2;var pE=null;function xD(a){zD(a);return a;}
function yD(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function zD(a){AD(a,'');}
function AD(b,a){b.js=[a];b.length=a.length;}
function CD(a){a.zb();return a.js[0];}
function DD(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function ED(){return CD(this);}
function wD(){}
_=wD.prototype=new mD();_.zb=DD;_.tS=ED;_.tN=hL+'StringBuffer';_.tI=105;function vE(){vE=BK;xE=new sB();}
function wE(){vE();return new Date().getTime();}
function yE(a){vE();return pg(a);}
var xE;function dF(){dF=BK;uD();}
function cF(b,a){dF();tD(b,a);return b;}
function bF(){}
_=bF.prototype=new rD();_.tN=hL+'UnsupportedOperationException';_.tI=106;function mF(b,a){b.c=a;return b;}
function oF(a){return a.a<a.c.yc();}
function pF(a){if(!oF(a)){throw xK(new wK());}return a.c.rb(a.b=a.a++);}
function qF(a){if(a.b<0){throw pC(new oC());}a.c.qc(a.b);a.a=a.b;a.b=(-1);}
function rF(){return oF(this);}
function sF(){return pF(this);}
function lF(){}
_=lF.prototype=new mD();_.tb=rF;_.yb=sF;_.tN=iL+'AbstractList$IteratorImpl';_.tI=107;_.a=0;_.b=(-1);function AG(f,d,e){var a,b,c;for(b=kJ(f.E());cJ(b);){a=dJ(b);c=a.jb();if(d===null?c===null:d.eQ(c)){if(e){eJ(b);}return a;}}return null;}
function BG(b){var a;a=b.E();return EF(new DF(),b,a);}
function CG(b){var a;a=uJ(b);return mG(new lG(),b,a);}
function DG(a){return AG(this,a,false)!==null;}
function EG(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!rh(d,30)){return false;}f=qh(d,30);c=BG(this);e=f.wb();if(!fH(c,e)){return false;}for(a=aG(c);hG(a);){b=iG(a);h=this.sb(b);g=f.sb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function FG(b){var a;a=AG(this,b,false);return a===null?null:a.pb();}
function aH(){var a,b,c;b=0;for(c=kJ(this.E());cJ(c);){a=dJ(c);b+=a.hC();}return b;}
function bH(){return BG(this);}
function cH(){var a,b,c,d;d='{';a=false;for(c=kJ(this.E());cJ(c);){b=dJ(c);if(a){d+=', ';}else{a=true;}d+=tE(b.jb());d+='=';d+=tE(b.pb());}return d+'}';}
function CF(){}
_=CF.prototype=new mD();_.y=DG;_.eQ=EG;_.sb=FG;_.hC=aH;_.wb=bH;_.tS=cH;_.tN=iL+'AbstractMap';_.tI=108;function fH(e,b){var a,c,d;if(b===e){return true;}if(!rh(b,31)){return false;}c=qh(b,31);if(c.yc()!=e.yc()){return false;}for(a=c.vb();a.tb();){d=a.yb();if(!e.z(d)){return false;}}return true;}
function gH(a){return fH(this,a);}
function hH(){var a,b,c;a=0;for(b=this.vb();b.tb();){c=b.yb();if(c!==null){a+=c.hC();}}return a;}
function dH(){}
_=dH.prototype=new eF();_.eQ=gH;_.hC=hH;_.tN=iL+'AbstractSet';_.tI=109;function EF(b,a,c){b.a=a;b.b=c;return b;}
function aG(b){var a;a=kJ(b.b);return fG(new eG(),b,a);}
function bG(a){return this.a.y(a);}
function cG(){return aG(this);}
function dG(){return this.b.a.c;}
function DF(){}
_=DF.prototype=new dH();_.z=bG;_.vb=cG;_.yc=dG;_.tN=iL+'AbstractMap$1';_.tI=110;function fG(b,a,c){b.a=c;return b;}
function hG(a){return a.a.tb();}
function iG(b){var a;a=b.a.yb();return a.jb();}
function jG(){return hG(this);}
function kG(){return iG(this);}
function eG(){}
_=eG.prototype=new mD();_.tb=jG;_.yb=kG;_.tN=iL+'AbstractMap$2';_.tI=111;function mG(b,a,c){b.a=a;b.b=c;return b;}
function oG(b){var a;a=kJ(b.b);return tG(new sG(),b,a);}
function pG(a){return tJ(this.a,a);}
function qG(){return oG(this);}
function rG(){return this.b.a.c;}
function lG(){}
_=lG.prototype=new eF();_.z=pG;_.vb=qG;_.yc=rG;_.tN=iL+'AbstractMap$3';_.tI=112;function tG(b,a,c){b.a=c;return b;}
function vG(a){return a.a.tb();}
function wG(a){var b;b=a.a.yb().pb();return b;}
function xG(){return vG(this);}
function yG(){return wG(this);}
function sG(){}
_=sG.prototype=new mD();_.tb=xG;_.yb=yG;_.tN=iL+'AbstractMap$4';_.tI=113;function eI(b){var a,c;a=kH(new iH());for(c=0;c<b.a;c++){mH(a,b[c]);}return a;}
function fI(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.v(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function gI(a){fI(a,a.a,(nI(),oI));}
function nI(){nI=BK;oI=new kI();}
var oI;function mI(a,b){return qh(a,36).u(b);}
function kI(){}
_=kI.prototype=new mD();_.v=mI;_.tN=iL+'Comparators$1';_.tI=114;function rJ(){rJ=BK;yJ=EJ();}
function oJ(a){{qJ(a);}}
function pJ(a){rJ();oJ(a);return a;}
function qJ(a){a.a=zg();a.d=Ag();a.b=xh(yJ,vg);a.c=0;}
function sJ(b,a){if(rh(a,1)){return cK(b.d,qh(a,1))!==yJ;}else if(a===null){return b.b!==yJ;}else{return bK(b.a,a,a.hC())!==yJ;}}
function tJ(a,b){if(a.b!==yJ&&aK(a.b,b)){return true;}else if(DJ(a.d,b)){return true;}else if(BJ(a.a,b)){return true;}return false;}
function uJ(a){return hJ(new EI(),a);}
function vJ(c,a){var b;if(rh(a,1)){b=cK(c.d,qh(a,1));}else if(a===null){b=c.b;}else{b=bK(c.a,a,a.hC());}return b===yJ?null:b;}
function wJ(c,a,d){var b;if(rh(a,1)){b=fK(c.d,qh(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=eK(c.a,a,d,a.hC());}if(b===yJ){++c.c;return null;}else{return b;}}
function xJ(c,a){var b;if(rh(a,1)){b=hK(c.d,qh(a,1));}else if(a===null){b=c.b;c.b=xh(yJ,vg);}else{b=gK(c.a,a,a.hC());}if(b===yJ){return null;}else{--c.c;return b;}}
function zJ(e,c){rJ();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function AJ(d,a){rJ();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=xI(c.substring(1),e);a.s(b);}}}
function BJ(f,h){rJ();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.pb();if(aK(h,d)){return true;}}}}return false;}
function CJ(a){return sJ(this,a);}
function DJ(c,d){rJ();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(aK(d,a)){return true;}}}return false;}
function EJ(){rJ();}
function FJ(){return uJ(this);}
function aK(a,b){rJ();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function dK(a){return vJ(this,a);}
function bK(f,h,e){rJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(aK(h,d)){return c.pb();}}}}
function cK(b,a){rJ();return b[':'+a];}
function eK(f,h,j,e){rJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(aK(h,d)){var i=c.pb();c.uc(j);return i;}}}else{a=f[e]=[];}var c=xI(h,j);a.push(c);}
function fK(c,a,d){rJ();a=':'+a;var b=c[a];c[a]=d;return b;}
function gK(f,h,e){rJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(aK(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.pb();}}}}
function hK(c,a){rJ();a=':'+a;var b=c[a];delete c[a];return b;}
function tI(){}
_=tI.prototype=new CF();_.y=CJ;_.E=FJ;_.sb=dK;_.tN=iL+'HashMap';_.tI=115;_.a=null;_.b=null;_.c=0;_.d=null;var yJ;function vI(b,a,c){b.a=a;b.b=c;return b;}
function xI(a,b){return vI(new uI(),a,b);}
function yI(b){var a;if(rh(b,37)){a=qh(b,37);if(aK(this.a,a.jb())&&aK(this.b,a.pb())){return true;}}return false;}
function zI(){return this.a;}
function AI(){return this.b;}
function BI(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function CI(a){var b;b=this.b;this.b=a;return b;}
function DI(){return this.a+'='+this.b;}
function uI(){}
_=uI.prototype=new mD();_.eQ=yI;_.jb=zI;_.pb=AI;_.hC=BI;_.uc=CI;_.tS=DI;_.tN=iL+'HashMap$EntryImpl';_.tI=116;_.a=null;_.b=null;function hJ(b,a){b.a=a;return b;}
function jJ(d,c){var a,b,e;if(rh(c,37)){a=qh(c,37);b=a.jb();if(sJ(d.a,b)){e=vJ(d.a,b);return aK(a.pb(),e);}}return false;}
function kJ(a){return aJ(new FI(),a.a);}
function lJ(a){return jJ(this,a);}
function mJ(){return kJ(this);}
function nJ(){return this.a.c;}
function EI(){}
_=EI.prototype=new dH();_.z=lJ;_.vb=mJ;_.yc=nJ;_.tN=iL+'HashMap$EntrySet';_.tI=117;function aJ(c,b){var a;c.c=b;a=kH(new iH());if(c.c.b!==(rJ(),yJ)){mH(a,vI(new uI(),null,c.c.b));}AJ(c.c.d,a);zJ(c.c.a,a);c.a=vF(a);return c;}
function cJ(a){return oF(a.a);}
function dJ(a){return a.b=qh(pF(a.a),37);}
function eJ(a){if(a.b===null){throw qC(new oC(),'Must call next() before remove().');}else{qF(a.a);xJ(a.c,a.b.jb());a.b=null;}}
function fJ(){return cJ(this);}
function gJ(){return dJ(this);}
function FI(){}
_=FI.prototype=new mD();_.tb=fJ;_.yb=gJ;_.tN=iL+'HashMap$EntrySetIterator';_.tI=118;_.a=null;_.b=null;function jK(a){a.a=pJ(new tI());return a;}
function kK(c,a){var b;b=wJ(c.a,a,FB(true));return b===null;}
function mK(a){return aG(BG(a.a));}
function nK(a){return kK(this,a);}
function oK(a){return sJ(this.a,a);}
function pK(){return mK(this);}
function qK(){return this.a.c;}
function rK(){return BG(this.a).tS();}
function iK(){}
_=iK.prototype=new dH();_.s=nK;_.z=oK;_.vb=pK;_.yc=qK;_.tS=rK;_.tN=iL+'HashSet';_.tI=119;_.a=null;function yK(){yK=BK;uD();}
function xK(a){yK();sD(a);return a;}
function wK(){}
_=wK.prototype=new rD();_.tN=iL+'NoSuchElementException';_.tI=120;function qL(){}
_=qL.prototype=new mD();_.tN=jL+'BezierCurve';_.tI=121;function sL(a){{xL(a);}}
function tL(a){sL(a);return a;}
function wL(i,d,e,a,b){var c,f,g,h,j;h=lN(new kN(),aD(d.a,e.a),aD(d.b,e.b));j=DC(d.a-e.a);c=DC(d.b-e.b);g=FC(j,c);g=FC(g,DC(d.a-a.a));g=FC(g,DC(d.b-a.b));g=FC(g,DC(e.a-b.a));g=FC(g,DC(e.b-b.b));f=lN(new kN(),h.a-g,h.b-g);zk(i.a,'left',AC(f.a));zk(i.a,'top',AC(f.b));tk(i.a,'width',AC(j+g*2));tk(i.a,'height',AC(c+g*2));zk(i.a,'width',AC(j+g*2));zk(i.a,'height',AC(c+g*2));vL(i,oN(d,qN(f)),oN(e,qN(f)),oN(a,qN(f)),oN(b,qN(f)),yL(i.a,'color'));}
function vL(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function xL(b){var a;b.a=gj('canvas');a=ak(b.a,'class');tk(b.a,'class',a+' gwt-diagrams-canvas');}
function yL(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function rL(){}
_=rL.prototype=new qL();_.tN=jL+'BezierCurveCanvas';_.tI=122;_.a=null;function BL(a){a.c=kH(new iH());}
function CL(c,d){var a,b;BL(c);lH(c.c,d);aM(c,c.A());for(b=vF(c.c);oF(b);){a=qh(pF(b),34);a.w(c);}return c;}
function DL(a,b){CL(a,eI(b));return a;}
function FL(a){return a.b.t(a.c);}
function aM(b,a){b.b=a;}
function bM(){this.Ac(FL(this));}
function AL(){}
_=AL.prototype=new dA();_.zc=bM;_.tN=kL+'AbstractConnection';_.tI=123;_.b=null;function dM(a){a.a=tL(new rL());}
function fM(a,b){DL(a,b);dM(a);if(b.a!=2){throw mC(new lC(),'Need exactly two connectors to connect');}wA(a,a.a.a);dz(a,'gwt-diagrams-connection');return a;}
function eM(c,a,b){fM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',152,34,[a,b]));return c;}
function hM(){return new sM();}
function iM(b){var a;if(!rh(b,38)){throw mC(new lC(),'Expected BezierConnectionData');}a=qh(b,38);if(a.b.b!=2){throw mC(new lC(),'Expected two connection points');}if(a.a.b!=2){throw mC(new lC(),'Expected two control points');}wL(this.a,qh(pH(a.b,0),32),qh(pH(a.b,1),32),qh(pH(a.a,0),32),qh(pH(a.a,1),32));}
function cM(){}
_=cM.prototype=new AL();_.A=hM;_.Ac=iM;_.tN=kL+'BezierTwoEndedConnection';_.tI=124;function lM(a){a.a=kH(new iH());}
function nM(a,b){DL(a,b);lM(a);if(b.a!=2){throw mC(new lC(),'Need exactly two connectors to connect');}wA(a,fj());dz(a,'gwt-diagrams-connection');return a;}
function mM(c,a,b){nM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',152,34,[a,b]));return c;}
function pM(d,a){var b,c;for(c=d.a.b;c<a;c++){b=fj();mH(d.a,xh(b,cl));cj(d.gb(),b);xk(b,'&nbsp;');}while(d.a.b>a){b=qh(pH(d.a,0),17);uH(d.a,xh(b,cl));ok(d.gb(),b);}}
function qM(){return new xM();}
function rM(a){var b,c,d,e,f;if(a.b.b<=1){throw mC(new lC(),'Too few connection points');}pM(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=qh(pH(this.a,d),17);e=qh(pH(a.b,d),32);c=qh(pH(a.b,d+1),32);f='gwt-diagrams-line';tk(b,'style','');vk(b,'className',f);zk(b,'height','1');zk(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';zk(b,'height',AC(DC(e.b-c.b)));}else if(e.b==c.b){zk(b,'width',AC(DC(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}zk(b,'left',AC(aD(e.a,c.a)));zk(b,'top',AC(aD(e.b,c.b)));vk(b,'className',f);}}
function kM(){}
_=kM.prototype=new AL();_.A=qM;_.Ac=rM;_.tN=kL+'RectilinearTwoEndedConnection';_.tI=125;function uM(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[151],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=nN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function vM(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw mC(new lC(),'Unsupported connectors count');}c=qh(pH(e,0),34);d=qh(pH(e,1),34);f=uM(this,c,d);h=c.pc(f[0]);i=d.pc(f[1]);a=pN(h,f[0],50);b=pN(i,f[1],50);g=dN(new aN(),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',149,32,[h,i]),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',149,32,[a,b]));return g;}
function sM(){}
_=sM.prototype=new mD();_.t=vM;_.tN=lL+'BezierConnectionCalculator';_.tI=126;function yM(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(EN(),bO);}if(c==1&&d>0){return a!==(EN(),cO);}if(c==0&&d<0){return a!==(EN(),cO);}if(c==1&&d<0){return a!==(EN(),bO);}}else{if(c==0&&d>0){return a!==(EN(),dO);}if(c==1&&d>0){return a!==(EN(),aO);}if(c==0&&d<0){return a!==(EN(),aO);}if(c==1&&d<0){return a!==(EN(),dO);}}return false;}
function AM(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[151],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=nN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function BM(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(EN(),cO);}if(c==1&&d>0){return a===(EN(),bO);}if(c==0&&d<0){return a===(EN(),bO);}if(c==1&&d<0){return a===(EN(),cO);}}else{if(c==0&&d>0){return a===(EN(),aO);}if(c==1&&d>0){return a===(EN(),dO);}if(c==0&&d<0){return a===(EN(),dO);}if(c==1&&d<0){return a===(EN(),aO);}}return false;}
function CM(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw mC(new lC(),'Unsupported connectors count');}a=qh(pH(c,0),34);b=qh(pH(c,1),34);d=hN(new fN());e=AM(this,a,b);i=a.pc(e[0]);j=pN(i,e[0],10);k=b.pc(e[1]);l=pN(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(BM(this,e[0],0,f,true)&&BM(this,e[1],1,f,true)){g=pN(j,e[0],DC(th(f/2)));h=lN(new kN(),g.a,l.b);}else if(BM(this,e[0],0,m,false)&&BM(this,e[1],1,m,false)){g=pN(j,e[0],DC(th(m/2)));h=lN(new kN(),l.a,g.b);}else if(BM(this,e[0],0,f,true)&&BM(this,e[1],1,m,false)){g=pN(j,e[0],DC(f));h=pN(l,e[1],DC(m));}else if(BM(this,e[0],0,m,false)&&BM(this,e[1],1,f,true)){g=pN(j,e[0],DC(m));h=pN(l,e[1],DC(f));}else if(BM(this,e[0],0,f,true)&&yM(this,e[1],1,f,true)){g=pN(j,e[0],DC(th(f/2)));h=lN(new kN(),g.a,l.b);}else if(yM(this,e[0],0,f,true)&&BM(this,e[1],1,f,true)){g=pN(j,e[0],DC(th(f/2)));h=lN(new kN(),g.a,l.b);}else if(BM(this,e[0],0,m,false)&&yM(this,e[1],1,m,false)){g=pN(j,e[0],DC(th(m/2)));h=lN(new kN(),l.a,g.b);}else if(yM(this,e[0],0,m,false)&&BM(this,e[1],1,m,false)){g=pN(j,e[0],DC(th(m/2)));h=lN(new kN(),l.a,g.b);}else if(yM(this,e[0],0,f,true)&&yM(this,e[1],1,f,true)){g=pN(j,(EN(),cO),th(f/2));h=lN(new kN(),g.a,l.b);}else if(yM(this,e[0],0,m,false)&&yM(this,e[1],1,m,false)){g=pN(j,(EN(),aO),th(m/2));h=lN(new kN(),l.a,g.b);}mH(d.b,i);mH(d.b,j);if(g!==null){mH(d.b,g);}if(h!==null){mH(d.b,h);}mH(d.b,l);mH(d.b,k);return d;}
function xM(){}
_=xM.prototype=new mD();_.t=CM;_.tN=lL+'FullRectilinearTwoEndedCalculator';_.tI=127;function FM(c){var a,b,d;if(c.b!=2){throw mC(new lC(),'Unsupported connectors count');}a=qh(pH(c,0),34);b=qh(pH(c,1),34);d=hN(new fN());mH(d.b,lN(new kN(),a.kb()+th(a.qb()/2),a.ob()+th(a.hb()/2)));mH(d.b,lN(new kN(),a.kb()+th(a.qb()/2),b.ob()+th(b.hb()/2)));mH(d.b,lN(new kN(),b.kb()+th(b.qb()/2),b.ob()+th(b.hb()/2)));return d;}
function DM(){}
_=DM.prototype=new mD();_.t=FM;_.tN=lL+'SimpleRectilinearTwoEndedCalculator';_.tI=128;function gN(a){a.b=kH(new iH());}
function hN(a){gN(a);return a;}
function iN(b,a){gN(b);lH(b.b,a);return b;}
function fN(){}
_=fN.prototype=new mD();_.tN=mL+'ConnectionData';_.tI=129;function bN(a){a.a=kH(new iH());}
function cN(c,b,a){iN(c,b);bN(c);lH(c.a,a);return c;}
function dN(c,b,a){cN(c,eI(b),eI(a));return c;}
function aN(){}
_=aN.prototype=new fN();_.tN=mL+'BezierConnectionData';_.tI=130;function lN(b,a,c){b.a=a;b.b=c;return b;}
function nN(b,a){return bD((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function pN(c,a,b){if(a===(EN(),aO)){return lN(new kN(),c.a,c.b+b);}else if(a===(EN(),dO)){return lN(new kN(),c.a,c.b-b);}else if(a===(EN(),bO)){return lN(new kN(),c.a-b,c.b);}else if(a===(EN(),cO)){return lN(new kN(),c.a+b,c.b);}else{throw pC(new oC());}}
function oN(a,b){return lN(new kN(),a.a+b.a,a.b+b.b);}
function qN(a){return lN(new kN(),-a.a,-a.b);}
function kN(){}
_=kN.prototype=new mD();_.tN=mL+'Point';_.tI=131;_.a=0;_.b=0;function sN(a){a.c=jK(new iK());}
function tN(a){sN(a);return a;}
function vN(b,a){return pN(lN(new kN(),b.kb()+th(b.qb()/2),b.ob()+th(b.hb()/2)),a,FN(a)?th(b.qb()/2):th(b.hb()/2));}
function wN(c){var a,b;for(b=mK(c.c);hG(b);){a=qh(iG(b),39);a.zc();}}
function xN(a){kK(this.c,a);}
function yN(a){return vN(this,a);}
function zN(){return eO();}
function AN(a){return vN(this,a);}
function rN(){}
_=rN.prototype=new mD();_.w=xN;_.bb=yN;_.eb=zN;_.pc=AN;_.tN=nL+'AbstractConnector';_.tI=132;function EN(){EN=BK;dO=DN(new CN(),'UP');aO=DN(new CN(),'DOWN');bO=DN(new CN(),'LEFT');cO=DN(new CN(),'RIGHT');}
function DN(b,a){EN();b.a=a;return b;}
function FN(a){return a===bO||a===cO;}
function eO(){EN();return lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',151,33,[dO,aO,bO,cO]);}
function fO(){return this.a;}
function CN(){}
_=CN.prototype=new mD();_.tS=fO;_.tN=nL+'Direction';_.tI=133;_.a=null;var aO,bO,cO,dO;function mO(){mO=BK;uO=pJ(new tI());}
function lO(a,b){mO();tN(a);a.b=b;return a;}
function nO(){return this.b.lb();}
function oO(){var a,b;a=0;b=hk(this.b.gb());while(b!==null){if(cE('relative',ik(b,'position'))){a=Ej(b);break;}b=hk(b);}return fz(this.b)-a;}
function pO(){var a,b;a=0;b=hk(this.b.gb());while(b!==null){if(cE('relative',ik(b,'position'))){a=Fj(b);break;}b=hk(b);}return gz(this.b)-a;}
function qO(){return this.b.mb();}
function rO(a){mO();return qh(vJ(uO,a),40);}
function sO(b){mO();var a;if(sJ(uO,b)){return qh(vJ(uO,b),40);}else{a=lO(new gO(),b);wJ(uO,b,a);return a;}}
function tO(c,b){mO();var a;if(sJ(uO,c)){return qh(vJ(uO,c),40);}else{a=iO(new hO(),c,b);wJ(uO,c,a);return a;}}
function gO(){}
_=gO.prototype=new rN();_.hb=nO;_.kb=oO;_.ob=pO;_.qb=qO;_.tN=nL+'UIObjectConnector';_.tI=134;_.b=null;var uO;function jO(){jO=BK;mO();}
function iO(b,a,c){jO();b.a=c;lO(b,a);return b;}
function kO(){return this.a;}
function hO(){}
_=hO.prototype=new gO();_.eb=kO;_.tN=nL+'UIObjectConnector$1';_.tI=135;function EO(a){lg(new wO());al(AO(new zO(),a));}
function vO(){}
_=vO.prototype=new mD();_.tN=oL+'BaseExamplesEntryPoint';_.tI=136;function yO(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=EE(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=wq(new uq(),true);zk(a.gb(),'backgroundColor','#ABCDEF');vE(),xE;d=hE(d,' ','&nbsp;');zq(a,'<pre>'+d+'<\/pre>');Dv(a);}
function wO(){}
_=wO.prototype=new mD();_.tN=oL+'BaseExamplesEntryPoint$1';_.tI=137;function AO(b,a){b.a=a;return b;}
function CO(){gP(this.a);}
function zO(){}
_=zO.prototype=new mD();_.F=CO;_.tN=oL+'BaseExamplesEntryPoint$2';_.tI=138;function gP(b){var a;a=wy(new jy());cp(Dw('tabs'),a);yy(a,iQ(new hQ()),'Rectilinear');yy(a,eQ(new dQ()),'Bezier');yy(a,mQ(new lQ()),'Simple rect.');xy(a,bP(new aP(),b,a));Dy(a,0);}
function FO(){}
_=FO.prototype=new vO();_.tN=oL+'GwtDiagramsExample';_.tI=139;function bP(b,a,c){b.a=c;return b;}
function dP(a,b){return true;}
function eP(b,c){var a;a=qh(Ay(this.a,c),41);CP(a);}
function aP(){}
_=aP.prototype=new mD();_.Bb=dP;_.lc=eP;_.tN=oL+'GwtDiagramsExample$1';_.tI=140;function FP(a){a.c=bp(new ap());}
function aQ(a){var b;hx(a);FP(a);dz(a,'gwt-diagrams-example');b=Dz(new Bz());jx(a,b);Ez(b,a.c);Ez(b,cQ(a,BP(a)));return a;}
function cQ(e,d){var a,b,c;a=qr(new pr());dz(a,'gwt-diagrams-sources-panel');for(b=vF(d);oF(b);){c=qh(pF(b),12);rr(a,c);}return a;}
function EP(){}
_=EP.prototype=new ax();_.tN=pL+'AbstractExample';_.tI=141;function vP(a){a.a=kH(new iH());}
function wP(a){aQ(a);vP(a);a.b=AP(a);zk(a.c.gb(),'width','450px');zk(a.c.gb(),'height','350px');a.B();return a;}
function xP(b,a){cp(b.c,a);mH(b.a,a);}
function zP(e,d,c,f,a){var b;b=Fu(new Du(),d);dz(b,'example-connector');dp(e.c,b,c,f);lP(e.b,b);if(a!==null){return tO(b,lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',151,33,[a]));}return sO(b);}
function AP(b){var a;a=jP(new iP(),b.c,true,b);return a;}
function BP(f){var a,b,c,d,e;e=kH(new iH());b=fE(jg(f),46);a=iE(jg(f),b+1);mH(e,su(new qu(),a+'.java',''));mH(e,su(new qu(),'AbstractExample.java',''));mH(e,su(new qu(),'AbstractConnectionsExample.java',''));for(d=vF(e);oF(d);){c=qh(pF(d),42);dz(c,'gwt-diagrams-source-link');tu(c,sP(new rP(),f,c));}return e;}
function CP(c){var a,b;for(b=vF(c.a);oF(b);){a=qh(pF(b),39);a.zc();}}
function DP(){var a,b,c,d,e,f,g,h;a=zP(this,'all',50,50,null);b=zP(this,'all',100,100,null);this.x(a,b);c=zP(this,'up',250,50,(EN(),dO));d=zP(this,'down',300,100,(EN(),aO));this.x(c,d);e=zP(this,'left',50,200,(EN(),bO));f=zP(this,'right',100,250,(EN(),cO));this.x(e,f);g=zP(this,'left',250,200,(EN(),bO));h=zP(this,'left',300,250,(EN(),bO));this.x(g,h);}
function hP(){}
_=hP.prototype=new EP();_.B=DP;_.tN=pL+'AbstractConnectionsExample';_.tI=142;_.b=null;function kP(){kP=BK;ic();}
function jP(d,a,b,c){kP();hc(d,a,b);return d;}
function lP(a,b){z(a,b);zk(b.gb(),'position','absolute');zk(b.gb(),'zIndex','100');}
function mP(c,b,a){return oP(new nP(),b,a,c);}
function iP(){}
_=iP.prototype=new gc();_.tN=pL+'AbstractConnectionsExample$1';_.tI=143;function pP(){pP=BK;vd();}
function oP(d,a,b,c){pP();ud(d,a,b);return d;}
function qP(d,c,b){var a;sc(this,d,c,b);a=rO(c);if(a!==null){wN(a);}}
function nP(){}
_=nP.prototype=new td();_.jc=qP;_.tN=pL+'AbstractConnectionsExample$2';_.tI=144;function sP(b,a,c){b.a=c;return b;}
function uP(a){Am('../source/'+vu(this.a),'','');}
function rP(){}
_=rP.prototype=new mD();_.Db=uP;_.tN=pL+'AbstractConnectionsExample$3';_.tI=145;function eQ(a){wP(a);return a;}
function gQ(a,b){xP(this,eM(new cM(),a,b));}
function dQ(){}
_=dQ.prototype=new hP();_.x=gQ;_.tN=pL+'BezierExample';_.tI=146;function iQ(a){wP(a);return a;}
function kQ(a,b){xP(this,mM(new kM(),a,b));}
function hQ(){}
_=hQ.prototype=new hP();_.x=kQ;_.tN=pL+'RectilinearExample';_.tI=147;function mQ(a){wP(a);return a;}
function oQ(d,a,b){var c;c=mM(new kM(),a,b);aM(c,new DM());xP(d,c);}
function pQ(a,b){oQ(this,a,b);}
function qQ(){var a,b;a=zP(this,'connector 1',50,50,(EN(),dO));b=zP(this,'connector 2',200,200,(EN(),aO));oQ(this,a,b);}
function lQ(){}
_=lQ.prototype=new hP();_.x=pQ;_.B=qQ;_.tN=pL+'SimpleRectilinearExample';_.tI=148;function nB(){EO(new FO());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{nB();}catch(a){b(d);}else{nB();}}
var wh=[{},{25:1},{1:1,25:1,36:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{9:1,25:1,36:1},{21:1,25:1},{25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{25:1},{14:1,25:1},{14:1,25:1},{11:1,14:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{13:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1},{18:1,25:1},{18:1,25:1},{18:1,25:1},{25:1},{13:1,17:1,25:1},{13:1,25:1},{19:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1,26:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{2:1,12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1,29:1},{25:1,29:1},{25:1,29:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,21:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{5:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{3:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1,42:1},{25:1,29:1},{2:1,12:1,22:1,24:1,25:1,26:1,27:1},{19:1,25:1},{25:1},{12:1,20:1,25:1,26:1,27:1},{25:1,29:1},{12:1,23:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,20:1,25:1,26:1,27:1},{4:1,12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1,28:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{10:1,14:1,25:1},{25:1},{25:1,30:1},{25:1,31:1},{25:1,31:1},{25:1},{25:1},{25:1},{25:1},{25:1,30:1},{25:1,37:1},{25:1,31:1},{25:1},{25:1,31:1},{10:1,14:1,25:1},{25:1},{25:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{25:1},{25:1},{25:1},{25:1},{25:1,38:1},{25:1,32:1},{25:1,34:1},{25:1,33:1},{25:1,34:1,40:1},{25:1,34:1,40:1},{25:1},{25:1},{15:1,25:1},{25:1},{23:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{7:1,25:1},{20:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{8:1,25:1},{25:1},{25:1},{25:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();