(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,bL='com.allen_sauer.gwt.dragdrop.client.',cL='com.allen_sauer.gwt.dragdrop.client.drop.',dL='com.allen_sauer.gwt.dragdrop.client.util.',eL='com.allen_sauer.gwt.dragdrop.client.util.impl.',fL='com.google.gwt.core.client.',gL='com.google.gwt.lang.',hL='com.google.gwt.user.client.',iL='com.google.gwt.user.client.impl.',jL='com.google.gwt.user.client.ui.',kL='com.google.gwt.user.client.ui.impl.',lL='java.io.',mL='java.lang.',nL='java.util.',oL='pl.balon.gwt.diagrams.client.common.bezier.',pL='pl.balon.gwt.diagrams.client.connection.',qL='pl.balon.gwt.diagrams.client.connection.calculator.',rL='pl.balon.gwt.diagrams.client.connection.data.',sL='pl.balon.gwt.diagrams.client.connector.',tL='pl.balon.gwt.diagramsexample.client.',uL='pl.balon.gwt.diagramsexample.client.examples.';function aL(){}
function tD(a){return this===a;}
function uD(){return DE(this);}
function vD(){return this.tN+'@'+this.hC();}
function rD(){}
_=rD.prototype={};_.eQ=tD;_.hC=uD;_.tS=vD;_.toString=function(){return this.tS();};_.tN=mL+'Object';_.tI=1;function wI(b,a){b.d=a;return b;}
function vI(){}
_=vI.prototype=new rD();_.tN=nL+'EventObject';_.tI=3;_.d=null;function ib(c,b,a){wI(c,b);c.c=a;return c;}
function kb(){var a;a=this.c!==null?'dropTarget='+hf(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+hf(this.d)+')';}
function hb(){}
_=hb.prototype=new vI();_.tS=kb;_.tN=bL+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ib(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new hb();_.tS=q;_.tN=bL+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function u(){u=aL;F=uJ(new yI());}
function s(a){a.g=x(a);}
function t(c,b,a){u();s(c);c.f=b!==null?b:ax();c.e=xP(c,c.f,a);B(c,c.e);c.l=Bb(new zb(),c);return c;}
function v(c,a,b){nz(a,'dragdrop-dragging');}
function w(b,a){xb(b.g,b.f,a);hz(a,'dragdrop-dragging');}
function x(a){return sb(new lb());}
function y(b,c){var a;a=vb(b.g,c,b.f);return a!==null?a:b.e;}
function z(a,b){{A(a,b,b);}}
function A(c,b,a){Fb(c.l,b,a);hz(b,'dragdrop-draggable');hz(a,'dragdrop-handle');BJ(F,b,a);}
function B(b,a){tb(b.g,a);}
function C(b,a){if(rh(b.j,2)){hp(qh(b.j,2),a,b.k.a,b.k.d);}else if(rh(b.j,3)){qu(qh(b.j,3),a,b.h);}else if(rh(b.j,4)){fA(qh(b.j,4),a,b.h);}else if(rh(b.j,5)){xr(qh(b.j,5),a,b.h);}else if(rh(b.j,6)){qh(b.j,6).wc(a);}else{throw yD(new wD(),'Unable to handle initialDraggableParent '+jg(b.j));}}
function D(b,a){if(b.i!==null&&lE(b.i)!=0){Ak(a.gb(),'margin',b.i);}}
function E(b,a){b.j=a.p;if(rh(b.j,2)){b.k=nf(new mf(),a,b.j);}else if(rh(b.j,3)){b.h=bq(qh(b.j,3),a);}else if(rh(b.j,4)){b.h=bq(qh(b.j,4),a);}else if(rh(b.j,5)){b.h=bq(qh(b.j,5),a);}else if(rh(b.j,6)){}else{throw yD(new wD(),"Unable to handle 'initialDraggableParent instanceof "+jg(b.j)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.i=jk(a.gb(),'margin');if(b.i!==null&&lE(b.i)!=0){Ak(a.gb(),'margin','0px');}}
function r(){}
_=r.prototype=new rD();_.tN=bL+'AbstractDragController';_.tI=6;_.e=null;_.f=null;_.h=0;_.i=null;_.j=null;_.k=null;_.l=null;var F;function bb(b,a){b.b=a;return b;}
function db(a){if(a.c==0){return;}Cb(a.b,a.d,a.e);a.a=BE()-a.c;a.c=0;}
function eb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=BE();}if(a.a>80){bl(a);}else{db(a);}}
function fb(){db(this);}
function ab(){}
_=ab.prototype=new rD();_.F=fb;_.tN=bL+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function rb(a){a.a=pH(new nH());}
function sb(a){rb(a);return a;}
function tb(b,a){rH(b.a,a);}
function vb(g,h,a){var b,c,d,e,f,i,j,k;i=kf(new jf(),h,null);j=ge(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(je(f,i)){k=fe(f,j);if(k<=c){if(e===null|| !Ae(pb(b).gb(),pb(e).gb())){c=k;e=b;}}}}return e===null?null:e.a;}
function wb(a){return AF(a.a);}
function xb(h,b,d){var a,c,e,f,g;a=kf(new jf(),b,null);g=pH(new nH());for(f=wb(h);tF(f);){e=qh(uF(f),7);c=nb(new mb(),e);if(!Ae(d.gb(),pb(c).gb())){if(je(c.b,a)){rH(g,c);}}}h.b=qh(BH(g,lh('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',155,9,[])),8);lI(h.b);}
function lb(){}
_=lb.prototype=new rD();_.tN=bL+'DropControllerCollection';_.tI=8;_.b=null;function nb(c,a){var b;c.a=a;b=a.fb();if(!b.ub()){throw nC(new lC(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=kf(new jf(),b,null);return c;}
function pb(a){return a.a.fb();}
function qb(a){var b;b=qh(a,9);return Ae(pb(this).gb(),pb(b).gb())?1:(-1);}
function mb(){}
_=mb.prototype=new rD();_.u=qb;_.tN=bL+'DropControllerCollection$Candidate';_.tI=9;_.a=null;_.b=null;function Ab(a){a.d=bb(new ab(),a);a.f=uJ(new yI());}
function Bb(b,a){Ab(b);b.e=a;b.a=a.f;return b;}
function Cb(e,f,g){var a,b,c,d;c=nf(new mf(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=EC(0,FC(a,e.l));b=EC(0,FC(b,e.m));}Be(e.o.gb(),a,b);d=y(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.cc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ac(e.o,e.g,e.e);}}if(e.i!==null){e.i.jc(e.o,e.g,e.e);}}
function Db(b){var a;ok(b.b.gb());b.h=false;if(b.i!==null){b.i.cc(b.g,b.e);}b.i=null;jc(b.e,b.g,null);a=ib(new hb(),b.g,null);}
function Fb(c,b,a){if(a!==null){fv(a,c);BJ(c.f,a,b);}else{throw yD(new wD(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function ac(f){var a,c,d,e;f.g=qh(AJ(f.f,f.b),12);kc(f.e,f.g);f.o=f.e.d;f.l=Fe(f.a.gb())-f.o.mb();f.m=Ee(f.a.gb())-f.o.lb();e=nf(new mf(),f.b,f.a);c=nf(new mf(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;tk(f.b.gb());f.h=true;try{Cb(f,f.j,f.k);}catch(a){a=Bh(a);if(rh(a,10)){d=a;Db(f);throw d;}else throw a;}}
function bc(b,c,d){var a;this.b=b;a=sj((bj(),mj));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Dj((bj(),mj));df();this.j=c;this.k=d;}
function cc(a){}
function dc(a){}
function ec(d,e,f){var a,c;if(!this.h){if(this.n){ac(this);}if(!this.h){return;}}Dj((bj(),mj));try{eb(this.d,e,f);}catch(a){a=Bh(a);if(rh(a,10)){c=a;Db(this);throw c;}else throw a;}}
function fc(g,h,i){var a,a,d,e,f;d=sj((bj(),mj));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{ok(this.b.gb());Cb(this,h,i);this.h=false;if(this.i===null){Db(this);return;}{this.i.fb();}try{this.i.kc(this.o,this.g,this.e);}catch(a){a=Bh(a);if(rh(a,11)){a;Db(this);return;}else throw a;}jc(this.e,this.g,this.i.fb());e=this.i.Fb(this.o,this.g,this.e);}catch(a){a=Bh(a);if(rh(a,10)){f=a;Db(this);throw f;}else throw a;}finally{this.i=null;}}
function zb(){}
_=zb.prototype=new rD();_.ec=bc;_.fc=cc;_.gc=dc;_.hc=ec;_.ic=fc;_.tN=bL+'MouseDragHandler';_.tI=10;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ic(){ic=aL;u();}
function hc(c,b,a){ic();t(c,b,a);return c;}
function jc(c,a,b){v(c,a,b);if(c.a!==null){c.a=null;if(c.c!==null){zA(c.c);c.c=null;}else{if(b===null){C(c,a);}}D(c,a);zA(c.d);c.d=null;}}
function kc(d,a){var b,c;w(d,a);d.a=a;d.c=lc(d,a);E(d,a);c=nf(new mf(),a,d.f);d.d=lx(new ex());hz(d.d,'dragdrop-movable-panel');if(d.c===null){qz(d.d,a.mb(),a.lb());}hp(d.f,d.d,c.a,c.d);b=d.c!==null?d.c:d.a;d.d.wc(b);}
function lc(c,a){var b;if(c.b){b=ut(new yr(),'this is a Drag Proxy');hz(b,'dragdrop-proxy');qz(b,c.a.mb(),c.a.lb());return b;}else{return null;}}
function gc(){}
_=gc.prototype=new r();_.tN=bL+'PickupDragController';_.tI=11;_.a=null;_.b=false;_.c=null;_.d=null;function Bc(b,a){b.g=a;hz(a,'dragdrop-boundary');return b;}
function Dc(d,c,b,a){nz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.xb(c,b,a);}
function Ec(d,c,b,a){hz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Fc(c,b,a){nz(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function ad(){return this.g;}
function bd(c,b,a){return ib(new hb(),b,this.g);}
function cd(c,b,a){return Dc(this,c,b,a);}
function dd(c,b,a){Ec(this,c,b,a);}
function ed(b,a){Fc(this,b,a);}
function fd(c,b,a){}
function gd(c,b,a){}
function Ac(){}
_=Ac.prototype=new rD();_.fb=ad;_.xb=bd;_.Fb=cd;_.ac=dd;_.cc=ed;_.jc=fd;_.kc=gd;_.tN=cL+'AbstractDropController';_.tI=12;_.g=null;function jd(){jd=aL;pd=dv(new bv(),'x');}
function id(b,a){jd();Bc(b,a);return b;}
function kd(f,e){var a,b,c,d;d=lx(new ex());hz(d,'dragdrop-positioner');hp(ax(),d,(-500),(-500));d.wc(pd);a=lx(new ex());c=e.mb()-af(d);b=e.lb()-bf(d);qz(a,c,b);d.wc(a);return d;}
function ld(e,d,b,a){var c;c=Dc(e,d,b,a);od(e);return c;}
function md(d,c,b,a){Ec(d,c,b,a);d.f=kd(d,b);}
function nd(c,b,a){Fc(c,b,a);od(c);}
function od(a){if(a.f!==null){zA(a.f);}}
function qd(c,b,a){return ld(this,c,b,a);}
function rd(c,b,a){md(this,c,b,a);}
function sd(b,a){nd(this,b,a);}
function hd(){}
_=hd.prototype=new Ac();_.Fb=qd;_.ac=rd;_.cc=sd;_.tN=cL+'AbstractPositioningDropController';_.tI=13;_.f=null;var pd;function oc(){oc=aL;jd();}
function nc(b,a){oc();id(b,a);b.d=Bd(new Ad(),a);return b;}
function pc(d,c,a,e){var b;b=d.cb(c,a,e);if(b!==null){hp(d.d.b,e,b.a,b.d);}}
function qc(e,d,b,a){var c;hp(e.d.b,b,e.c.a,e.c.d);c=ld(e,d,b,a);e.e=null;return c;}
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
_=mc.prototype=new hd();_.cb=tc;_.xb=uc;_.Fb=vc;_.ac=wc;_.cc=xc;_.jc=yc;_.kc=zc;_.tN=cL+'AbsolutePositionDropController';_.tI=14;_.c=null;_.d=null;_.e=null;function vd(){vd=aL;oc();}
function ud(c,b,a){vd();nc(c,b);c.a=a;return c;}
function wd(b,a,d){var c;if(this.a){c=kf(new jf(),b,this.d.a);if(this.b===null){this.b=nf(new mf(),b,this.d.b);}else{tf(this.b,b);}pf(this.b,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.b;}else{return null;}}
function xd(d,c,a){var b;b=qc(this,d,c,a);this.b=null;return b;}
function yd(b,a){rc(this,b,a);this.b=null;}
function td(){}
_=td.prototype=new mc();_.cb=wd;_.Fb=xd;_.cc=yd;_.tN=cL+'BoundaryDropController';_.tI=15;_.a=false;_.b=null;function Bd(b,a){b.b=a;return b;}
function Dd(a){return Ee(a.b.gb());}
function Ed(a){return Fe(a.b.gb());}
function Fd(b,a){b.a=a;}
function Ad(){}
_=Ad.prototype=new rD();_.tN=cL+'DropTargetInfo';_.tI=16;_.a=null;_.b=null;function cF(){cF=aL;eF=kh('[Ljava.lang.StackTraceElement;',[152],[34],[0],null);}
function FE(a){a.c=eF;}
function aF(a){cF();FE(a);return a;}
function bF(b,a){cF();FE(b);b.b=a;return b;}
function dF(c){var a,b;a=jg(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function fF(){return dF(this);}
function EE(){}
_=EE.prototype=new rD();_.tS=fF;_.tN=mL+'Throwable';_.tI=17;_.a=null;_.b=null;var eF;function hC(){hC=aL;cF();}
function fC(a){hC();aF(a);return a;}
function gC(b,a){hC();bF(b,a);return b;}
function eC(){}
_=eC.prototype=new EE();_.tN=mL+'Exception';_.tI=18;function ce(){ce=aL;hC();}
function be(a){ce();fC(a);return a;}
function ae(){}
_=ae.prototype=new eC();_.tN=cL+'VetoDropException';_.tI=19;function fe(b,a){var c,d;c=EC(b.b-a.a,a.a-b.c);d=EC(b.d-a.b,a.b-b.a);return EC(c,d);}
function ge(a){return ue(new te(),a.b+uh(ie(a)/2),a.d+uh(he(a)/2));}
function he(a){return a.a-a.d;}
function ie(a){return a.c-a.b;}
function je(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function ke(b,a){b.a=a;}
function le(b,a){b.b=a;}
function me(b,a){b.c=a;}
function ne(a,b){a.d=b;}
function oe(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function de(){}
_=de.prototype=new rD();_.tS=oe;_.tN=dL+'AbstractArea';_.tI=20;_.a=0;_.b=0;_.c=0;_.d=0;function re(){return '('+this.kb()+', '+this.ob()+')';}
function pe(){}
_=pe.prototype=new rD();_.tS=re;_.tN=dL+'AbstractLocation';_.tI=21;function ue(b,a,c){b.a=a;b.b=c;return b;}
function we(){return this.a;}
function xe(){return this.b;}
function te(){}
_=te.prototype=new pe();_.kb=we;_.ob=xe;_.tN=dL+'CoordinateLocation';_.tI=22;_.a=0;_.b=0;function ze(){ze=aL;{cf=new yf();}}
function Ae(b,a){ze();return cg(cf,b,a);}
function Be(a,b,c){ze();a.style.left=b+'px';a.style.top=c+'px';}
function Ce(a){ze();return Af(cf,a);}
function De(a){ze();return Bf(cf,a);}
function Ee(a){ze();return Cf(cf,a);}
function Fe(a){ze();return Df(cf,a);}
function af(a){ze();return dg(cf,a);}
function bf(a){ze();return eg(cf,a);}
function df(){ze();Ef(cf);}
var cf=null;function hf(a){var b;b=jg(a);return nE(b,kE(b,46)+1);}
function kf(e,g,c){var a,b,d,f;b=jz(g);f=kz(g);if(c!==null){b-=jz(c);b-=Ce(c.gb());f-=kz(c);f-=De(c.gb());}d=b+g.mb();a=f+g.lb();le(e,b);ne(e,f);me(e,d);ke(e,a);return e;}
function jf(){}
_=jf.prototype=new de();_.tN=dL+'WidgetArea';_.tI=23;function nf(b,c,a){rf(b,c);qf(b,a);sf(b);return b;}
function pf(e,c,d,a,b){e.a=EC(c,FC(e.a,a));e.d=EC(d,FC(e.d,b));}
function qf(b,a){if(a===null||a===ax()){b.b=0;b.c=0;}else{b.b=jz(a)+Ce(a.gb());b.c=kz(a)+De(a.gb());}}
function rf(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=jz(b);a.f=kz(b);}}
function sf(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function tf(a,b){rf(a,b);sf(a);}
function uf(){return this.a;}
function vf(){return this.d;}
function wf(){return '('+this.a+', '+this.d+')';}
function mf(){}
_=mf.prototype=new pe();_.kb=uf;_.ob=vf;_.tS=wf;_.tN=dL+'WidgetLocation';_.tI=24;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function cg(c,b,a){return b.contains(a);}
function dg(a,b){return b.mb()-Df(a,b.gb());}
function eg(a,b){return b.lb()-Cf(a,b.gb());}
function xf(){}
_=xf.prototype=new rD();_.tN=eL+'DOMUtilImpl';_.tI=25;function Ff(){}
_=Ff.prototype=new xf();_.tN=eL+'DOMUtilImplStandard';_.tI=26;function Af(d,c){var b=$doc.defaultView.getComputedStyle(c,null);if(b!=null){var a=b.getPropertyValue('border-left-width');return a.indexOf('px')== -1?0:parseInt(a.substr(0,a.length-2));}else{return 0;}}
function Bf(d,c){var b=$doc.defaultView.getComputedStyle(c,null);if(b!=null){var a=b.getPropertyValue('border-top-width');return a.indexOf('px')== -1?0:parseInt(a.substr(0,a.length-2));}else{return 0;}}
function Cf(b,a){return a.clientHeight||0;}
function Df(b,a){return a.clientWidth||0;}
function Ef(b){var a=$wnd.getSelection();if(a.removeAllRanges){a.removeAllRanges();}else{a.collapse();}}
function yf(){}
_=yf.prototype=new Ff();_.tN=eL+'DOMUtilImplSafari';_.tI=27;function jg(a){return a==null?null:a.tN;}
function lg(a){kg=a;}
var kg=null;function og(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function pg(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function qg(){return ++rg;}
var rg=0;function zD(){zD=aL;hC();}
function xD(a){zD();fC(a);return a;}
function yD(b,a){zD();gC(b,a);return b;}
function wD(){}
_=wD.prototype=new eC();_.tN=mL+'RuntimeException';_.tI=28;function ug(){ug=aL;zD();}
function tg(c,b,a){ug();yD(c,'JavaScript '+b+' exception: '+a);return c;}
function sg(){}
_=sg.prototype=new wD();_.tN=fL+'JavaScriptException';_.tI=29;function xg(b,a){if(!rh(a,13)){return false;}return Bg(b,qh(a,13));}
function yg(a){return og(a);}
function zg(){return [];}
function Ag(){return {};}
function Cg(a){return xg(this,a);}
function Bg(a,b){return a===b;}
function Dg(){return yg(this);}
function Fg(){return Eg(this);}
function Eg(a){if(a.toString)return a.toString();return '[object]';}
function vg(){}
_=vg.prototype=new rD();_.eQ=Cg;_.hC=Dg;_.tS=Fg;_.tN=fL+'JavaScriptObject';_.tI=30;function bh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function dh(a,b,c){return a[b]=c;}
function fh(a,b){return eh(a,b);}
function eh(a,b){return bh(new ah(),b,a.tI,a.b,a.tN);}
function gh(b,a){return b[a];}
function ih(b,a){return b[a];}
function hh(a){return a.length;}
function kh(e,d,c,b,a){return jh(e,d,c,b,0,hh(b),a);}
function jh(j,i,g,c,e,a,b){var d,f,h;if((f=gh(c,e))<0){throw cD(new bD());}h=bh(new ah(),f,gh(i,e),gh(g,e),j);++e;if(e<a){j=nE(j,1);for(d=0;d<f;++d){dh(h,d,jh(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){dh(h,d,b);}}return h;}
function lh(f,e,c,g){var a,b,d;b=hh(g);d=bh(new ah(),b,e,c,f);for(a=0;a<b;++a){dh(d,a,ih(g,a));}return d;}
function mh(a,b,c){if(c!==null&&a.b!=0&& !rh(c,a.b)){throw pB(new oB());}return dh(a,b,c);}
function ah(){}
_=ah.prototype=new rD();_.tN=gL+'Array';_.tI=31;function ph(b,a){return !(!(b&&xh[b][a]));}
function qh(b,a){if(b!=null)ph(b.tI,a)||wh();return b;}
function rh(b,a){return b!=null&&ph(b.tI,a);}
function sh(a){return a&65535;}
function th(a){return ~(~a);}
function uh(a){if(a>(uC(),vC))return uC(),vC;if(a<(uC(),wC))return uC(),wC;return a>=0?Math.floor(a):Math.ceil(a);}
function wh(){throw FB(new EB());}
function vh(a){if(a!==null){throw FB(new EB());}return a;}
function yh(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var xh;function Bh(a){if(rh(a,14)){return a;}return tg(new sg(),Dh(a),Ch(a));}
function Ch(a){return a.message;}
function Dh(a){return a.name;}
function ai(){ai=aL;zD();}
function Fh(b,a){ai();xD(b);return b;}
function Eh(){}
_=Eh.prototype=new wD();_.tN=hL+'CommandCanceledException';_.tI=34;function vi(a){a.a=di(new ci(),a);a.b=pH(new nH());a.d=hi(new gi(),a);a.f=li(new ki(),a);}
function wi(a){vi(a);return a;}
function yi(c){var a,b,d;a=ni(c.f);qi(c.f);b=null;if(rh(a,15)){b=Fh(new Eh(),qh(a,15));}else{}if(b!==null){d=kg;if(d!==null){cP(d,b);}}Bi(c,false);Ai(c);}
function zi(e,d){var a,b,c,f;f=false;try{Bi(e,true);ri(e.f,e.b.b);bm(e.a,10000);while(oi(e.f)){b=pi(e.f);c=true;try{if(b===null){return;}if(rh(b,15)){a=qh(b,15);a.F();}else{}}finally{f=si(e.f);if(f){return;}if(c){qi(e.f);}}if(Ei(BE(),d)){return;}}}finally{if(!f){Dl(e.a);Bi(e,false);Ai(e);}}}
function Ai(a){if(!xH(a.b)&& !a.e&& !a.c){Ci(a,true);bm(a.d,1);}}
function Bi(b,a){b.c=a;}
function Ci(b,a){b.e=a;}
function Di(b,a){rH(b.b,a);Ai(b);}
function Ei(a,b){return DC(a-b)>=100;}
function bi(){}
_=bi.prototype=new rD();_.tN=hL+'CommandExecutor';_.tI=35;_.c=false;_.e=false;function El(){El=aL;hm=pH(new nH());{gm();}}
function Cl(a){El();return a;}
function Dl(a){if(a.b){cm(a.c);}else{dm(a.c);}zH(hm,a);}
function Fl(e,d){var a,c;try{am(e);}catch(a){a=Bh(a);if(rh(a,14)){c=a;cP(d,c);}else throw a;}}
function am(a){if(!a.b){zH(hm,a);}a.sc();}
function bm(b,a){if(a<=0){throw jC(new iC(),'must be positive');}Dl(b);b.b=false;b.c=em(b,a);rH(hm,b);}
function cm(a){El();$wnd.clearInterval(a);}
function dm(a){El();$wnd.clearTimeout(a);}
function em(b,a){El();return $wnd.setTimeout(function(){b.ab();},a);}
function fm(){var a;a=kg;if(a!==null){Fl(this,a);}else{am(this);}}
function gm(){El();lm(new yl());}
function xl(){}
_=xl.prototype=new rD();_.ab=fm;_.tN=hL+'Timer';_.tI=36;_.b=false;_.c=0;var hm;function ei(){ei=aL;El();}
function di(b,a){ei();b.a=a;Cl(b);return b;}
function fi(){if(!this.a.c){return;}yi(this.a);}
function ci(){}
_=ci.prototype=new xl();_.sc=fi;_.tN=hL+'CommandExecutor$1';_.tI=37;function ii(){ii=aL;El();}
function hi(b,a){ii();b.a=a;Cl(b);return b;}
function ji(){Ci(this.a,false);zi(this.a,BE());}
function gi(){}
_=gi.prototype=new xl();_.sc=ji;_.tN=hL+'CommandExecutor$2';_.tI=38;function li(b,a){b.d=a;return b;}
function ni(a){return uH(a.d.b,a.b);}
function oi(a){return a.c<a.a;}
function pi(b){var a;b.b=b.c;a=uH(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function qi(a){yH(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function ri(b,a){b.a=a;}
function si(a){return a.b==(-1);}
function ti(){return oi(this);}
function ui(){return pi(this);}
function ki(){}
_=ki.prototype=new rD();_.tb=ti;_.yb=ui;_.tN=hL+'CommandExecutor$CircularIterator';_.tI=39;_.a=0;_.b=(-1);_.c=0;function bj(){bj=aL;sk=pH(new nH());{kk=new Em();rn(kk);}}
function cj(a){bj();rH(sk,a);}
function dj(b,a){bj();xn(kk,b,a);}
function ej(a,b){bj();return jn(kk,a,b);}
function fj(){bj();return zn(kk,'A');}
function gj(){bj();return zn(kk,'div');}
function hj(a){bj();return zn(kk,a);}
function ij(){bj();return zn(kk,'tbody');}
function jj(){bj();return zn(kk,'td');}
function kj(){bj();return zn(kk,'tr');}
function lj(){bj();return zn(kk,'table');}
function pj(b,a,d){bj();var c;c=kg;if(c!==null){nj(b,a,d,c);}else{oj(b,a,d);}}
function nj(e,d,g,f){bj();var a,c;try{oj(e,d,g);}catch(a){a=Bh(a);if(rh(a,14)){c=a;cP(f,c);}else throw a;}}
function oj(b,a,c){bj();var d;if(a===rk){if(Cj(b)==8192){rk=null;}}d=mj;mj=b;try{c.Cb(b);}finally{mj=d;}}
function qj(b,a){bj();An(kk,b,a);}
function rj(a){bj();return Bn(kk,a);}
function sj(a){bj();return Cn(kk,a);}
function tj(a){bj();return an(kk,a);}
function uj(a){bj();return bn(kk,a);}
function vj(a){bj();return Dn(kk,a);}
function wj(a){bj();return kn(kk,a);}
function xj(a){bj();return En(kk,a);}
function yj(a){bj();return Fn(kk,a);}
function zj(a){bj();return ao(kk,a);}
function Aj(a){bj();return ln(kk,a);}
function Bj(a){bj();return mn(kk,a);}
function Cj(a){bj();return bo(kk,a);}
function Dj(a){bj();nn(kk,a);}
function Ej(a){bj();return on(kk,a);}
function Fj(a){bj();return cn(kk,a);}
function ak(a){bj();return dn(kk,a);}
function bk(b,a){bj();return co(kk,b,a);}
function ck(a){bj();return eo(kk,a);}
function ek(a,b){bj();return go(kk,a,b);}
function dk(a,b){bj();return fo(kk,a,b);}
function fk(a){bj();return ho(kk,a);}
function gk(a){bj();return pn(kk,a);}
function hk(a){bj();return io(kk,a);}
function ik(a){bj();return qn(kk,a);}
function jk(b,a){bj();return jo(kk,b,a);}
function lk(c,a,b){bj();sn(kk,c,a,b);}
function mk(b,a){bj();return tn(kk,b,a);}
function nk(a){bj();var b,c;c=true;if(sk.b>0){b=qh(uH(sk,sk.b-1),16);if(!(c=b.bc(a))){qj(a,true);Dj(a);}}return c;}
function ok(a){bj();if(rk!==null&&ej(a,rk)){rk=null;}un(kk,a);}
function pk(b,a){bj();ko(kk,b,a);}
function qk(a){bj();zH(sk,a);}
function tk(a){bj();rk=a;vn(kk,a);}
function uk(b,a,c){bj();lo(kk,b,a,c);}
function wk(a,b,c){bj();no(kk,a,b,c);}
function vk(a,b,c){bj();mo(kk,a,b,c);}
function xk(a,b){bj();oo(kk,a,b);}
function yk(a,b){bj();po(kk,a,b);}
function zk(a,b){bj();qo(kk,a,b);}
function Ak(b,a,c){bj();ro(kk,b,a,c);}
function Bk(a,b){bj();wn(kk,a,b);}
function Ck(a){bj();return so(kk,a);}
function Dk(){bj();return en(kk);}
function Ek(){bj();return fn(kk);}
var mj=null,kk=null,rk=null,sk;function al(){al=aL;cl=wi(new bi());}
function bl(a){al();if(a===null){throw fD(new eD(),'cmd can not be null');}Di(cl,a);}
var cl;function fl(a){if(rh(a,17)){return ej(this,qh(a,17));}return xg(yh(this,dl),a);}
function gl(){return yg(yh(this,dl));}
function hl(){return Ck(this);}
function dl(){}
_=dl.prototype=new vg();_.eQ=fl;_.hC=gl;_.tS=hl;_.tN=hL+'Element';_.tI=40;function ml(a){return xg(yh(this,il),a);}
function nl(){return yg(yh(this,il));}
function ol(){return Ej(this);}
function il(){}
_=il.prototype=new vg();_.eQ=ml;_.hC=nl;_.tS=ol;_.tN=hL+'Event';_.tI=41;function ql(){ql=aL;tl=pH(new nH());{ul=wo(new vo());if(!zo(ul)){ul=null;}}}
function rl(e,d){ql();var a,c;try{sl(e);}catch(a){a=Bh(a);if(rh(a,14)){c=a;cP(d,c);}else throw a;}}
function sl(a){ql();var b,c;for(b=AF(tl);tF(b);){c=vh(uF(b));null.Cc();}}
function vl(a){ql();if(ul!==null){Bo(ul,a);}}
function wl(b){ql();var a;a=kg;if(a!==null){rl(b,a);}else{sl(b);}}
var tl,ul=null;function Al(){while((El(),hm).b>0){Dl(qh(uH((El(),hm),0),18));}}
function Bl(){return null;}
function yl(){}
_=yl.prototype=new rD();_.nc=Al;_.oc=Bl;_.tN=hL+'Timer$1';_.tI=42;function km(){km=aL;mm=pH(new nH());Cm=pH(new nH());{xm();}}
function lm(a){km();rH(mm,a);}
function nm(d){km();var a,c;try{om();}catch(a){a=Bh(a);if(rh(a,14)){c=a;cP(d,c);}else throw a;}}
function om(){km();var a,b;for(a=AF(mm);tF(a);){b=qh(uF(a),19);b.nc();}}
function pm(d){km();var a,c;try{return qm();}catch(a){a=Bh(a);if(rh(a,14)){c=a;cP(d,c);return null;}else throw a;}}
function qm(){km();var a,b,c,d;d=null;for(a=AF(mm);tF(a);){b=qh(uF(a),19);c=b.oc();{d=c;}}return d;}
function rm(d){km();var a,c;try{sm();}catch(a){a=Bh(a);if(rh(a,14)){c=a;cP(d,c);}else throw a;}}
function sm(){km();var a,b;for(a=AF(Cm);tF(a);){b=vh(uF(a));null.Cc();}}
function tm(){km();return Dk();}
function um(){km();return Ek();}
function vm(){km();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function wm(){km();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function xm(){km();__gwt_initHandlers(function(){Am();},function(){return zm();},function(){ym();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ym(){km();var a;a=kg;if(a!==null){nm(a);}else{om();}}
function zm(){km();var a;a=kg;if(a!==null){return pm(a);}else{return qm();}}
function Am(){km();var a;a=kg;if(a!==null){rm(a);}else{sm();}}
function Bm(c,b,a){km();$wnd.open(c,b,a);}
var mm,Cm;function xn(c,b,a){b.appendChild(a);}
function zn(b,a){return $doc.createElement(a);}
function An(c,b,a){b.cancelBubble=a;}
function Bn(b,a){return !(!a.altKey);}
function Cn(b,a){return a.button|| -1;}
function Dn(b,a){return !(!a.ctrlKey);}
function En(b,a){return a.which||(a.keyCode|| -1);}
function Fn(b,a){return !(!a.metaKey);}
function ao(b,a){return !(!a.shiftKey);}
function bo(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function co(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function eo(c,b){var a=$doc.getElementById(b);return a||null;}
function go(d,a,b){var c=a[b];return c==null?null:String(c);}
function fo(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function ho(b,a){return a.__eventBits||0;}
function io(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.ib(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function jo(d,b,a){var c=b.style[a];return c==null?null:c;}
function ko(c,b,a){b.removeChild(a);}
function lo(c,b,a,d){b.setAttribute(a,d);}
function no(c,a,b,d){a[b]=d;}
function mo(c,a,b,d){a[b]=d;}
function oo(c,a,b){a.__listener=b;}
function po(c,a,b){if(!b){b='';}a.innerHTML=b;}
function qo(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function ro(c,b,a,d){b.style[a]=d;}
function so(b,a){return a.outerHTML;}
function to(a){return io(this,a);}
function Dm(){}
_=Dm.prototype=new rD();_.ib=to;_.tN=iL+'DOMImpl';_.tI=43;function jn(c,a,b){return a==b;}
function kn(b,a){return a.relatedTarget?a.relatedTarget:null;}
function ln(b,a){return a.target||null;}
function mn(b,a){return a.relatedTarget||null;}
function nn(b,a){a.preventDefault();}
function on(b,a){return a.toString();}
function pn(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function qn(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function rn(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){pj(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!nk(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)pj(b,a,c);};$wnd.__captureElem=null;}
function sn(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function tn(c,b,a){while(a){if(b==a){return true;}a=a.parentNode;if(a&&a.nodeType!=1){a=null;}}return false;}
function un(b,a){if(a==$wnd.__captureElem)$wnd.__captureElem=null;}
function vn(b,a){$wnd.__captureElem=a;}
function wn(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function gn(){}
_=gn.prototype=new Dm();_.tN=iL+'DOMImplStandard';_.tI=44;function an(b,a){return a.pageX-$doc.body.scrollLeft|| -1;}
function bn(b,a){return a.pageY-$doc.body.scrollTop|| -1;}
function cn(e,b){if(b.offsetLeft==null){return 0;}var c=0;var a=b.parentNode;if(a){while(a.offsetParent){c-=a.scrollLeft;a=a.parentNode;}}while(b){c+=b.offsetLeft;var d=b.offsetParent;if(d&&(d.tagName=='BODY'&&b.style.position=='absolute')){break;}b=d;}return c;}
function dn(d,b){if(b.offsetTop==null){return 0;}var e=0;var a=b.parentNode;if(a){while(a.offsetParent){e-=a.scrollTop;a=a.parentNode;}}while(b){e+=b.offsetTop;var c=b.offsetParent;if(c&&(c.tagName=='BODY'&&b.style.position=='absolute')){break;}b=c;}return e;}
function en(a){return $wnd.innerHeight;}
function fn(a){return $wnd.innerWidth;}
function Em(){}
_=Em.prototype=new gn();_.tN=iL+'DOMImplSafari';_.tI=45;function dp(a){wl(a);}
function uo(){}
_=uo.prototype=new rD();_.tN=iL+'HistoryImpl';_.tI=46;function ap(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;dp(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function bp(b,a){if(a==null){a='';}$wnd.location.hash=encodeURIComponent(a);}
function Eo(){}
_=Eo.prototype=new uo();_.tN=iL+'HistoryImplStandard';_.tI=47;function xo(){xo=aL;Do=Co();}
function wo(a){xo();return a;}
function zo(a){if(Do){yo(a);return true;}return ap(a);}
function yo(b){$wnd.__gwt_historyToken='';var a=$wnd.location.hash;if(a.length>0)$wnd.__gwt_historyToken=decodeURIComponent(a.substring(1));dp($wnd.__gwt_historyToken);}
function Bo(b,a){if(Do){Ao(b,a);return;}bp(b,a);}
function Ao(d,a){var b=$doc.createElement('meta');b.setAttribute('http-equiv','refresh');var c=$wnd.location.href.split('#')[0]+'#'+encodeURIComponent(a);b.setAttribute('content','0.01;url='+c);$doc.body.appendChild(b);window.setTimeout(function(){$doc.body.removeChild(b);},1);$wnd.__gwt_historyToken=a;dp($wnd.__gwt_historyToken);}
function Co(){xo();var a=/ AppleWebKit\/([\d]+)/;var b=a.exec(navigator.userAgent);if(b){if(parseInt(b[1])>=522){return false;}}if(navigator.userAgent.indexOf('iPhone')!= -1){return false;}return true;}
function vo(){}
_=vo.prototype=new Eo();_.tN=iL+'HistoryImplSafari';_.tI=48;var Do;function hz(b,a){Az(b.nb(),a,true);}
function jz(a){return Fj(a.gb());}
function kz(a){return ak(a.gb());}
function lz(a){return dk(a.q,'offsetHeight');}
function mz(a){return dk(a.q,'offsetWidth');}
function nz(b,a){Az(b.nb(),a,false);}
function oz(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function pz(b,a){if(b.q!==null){oz(b,b.q,a);}b.q=a;}
function qz(b,c,a){if(c>=0){b.xc(c+'px');}if(a>=0){b.tc(a+'px');}}
function rz(b,a){zz(b.nb(),a);}
function sz(b,a){Bk(b.gb(),a|fk(b.gb()));}
function tz(){return this.q;}
function uz(){return lz(this);}
function vz(){return mz(this);}
function wz(){return this.q;}
function xz(a){return ek(a,'className');}
function yz(a){Ak(this.q,'height',a);}
function zz(a,b){wk(a,'className',b);}
function Az(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw yD(new wD(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=pE(j);if(lE(j)==0){throw jC(new iC(),'Style names cannot be empty');}i=xz(c);e=iE(i,j);while(e!=(-1)){if(e==0||eE(i,e-1)==32){f=e+lE(j);g=lE(i);if(f==g||f<g&&eE(i,f)==32){break;}}e=jE(i,j,e+1);}if(a){if(e==(-1)){if(lE(i)>0){i+=' ';}wk(c,'className',i+j);}}else{if(e!=(-1)){b=pE(oE(i,0,e));d=pE(nE(i,e+lE(j)));if(lE(b)==0){h=d;}else if(lE(d)==0){h=b;}else{h=b+' '+d;}wk(c,'className',h);}}}
function Bz(a,b){a.style.display=b?'':'none';}
function Cz(a){Bz(this.q,a);}
function Dz(a){Ak(this.q,'width',a);}
function Ez(){if(this.q===null){return '(null handle)';}return Ck(this.q);}
function gz(){}
_=gz.prototype=new rD();_.gb=tz;_.lb=uz;_.mb=vz;_.nb=wz;_.tc=yz;_.vc=Cz;_.xc=Dz;_.tS=Ez;_.tN=jL+'UIObject';_.tI=49;_.q=null;function yA(a){if(!a.ub()){throw nC(new lC(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.mc();}finally{a.D();xk(a.gb(),null);a.o=false;}}
function zA(a){if(rh(a.p,24)){qh(a.p,24).rc(a);}else if(a.p!==null){throw nC(new lC(),"This widget's parent does not implement HasWidgets");}}
function AA(b,a){if(b.ub()){xk(b.gb(),null);}pz(b,a);if(b.ub()){xk(a,b);}}
function BA(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.ub()){c.Eb();}c.p=null;}else{if(a!==null){throw nC(new lC(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.ub()){c.Ab();}}}
function CA(){}
function DA(){}
function EA(){return this.o;}
function FA(){if(this.ub()){throw nC(new lC(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;xk(this.gb(),this);this.C();this.dc();}
function aB(a){}
function bB(){yA(this);}
function cB(){}
function dB(){}
function hA(){}
_=hA.prototype=new gz();_.C=CA;_.D=DA;_.ub=EA;_.Ab=FA;_.Cb=aB;_.Eb=bB;_.dc=cB;_.mc=dB;_.tN=jL+'Widget';_.tI=50;_.o=false;_.p=null;function vv(b,a){BA(a,b);}
function xv(b,a){BA(a,null);}
function yv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Ab();}}
function zv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Eb();}}
function Av(){}
function Bv(){}
function uv(){}
_=uv.prototype=new hA();_.C=yv;_.D=zv;_.dc=Av;_.mc=Bv;_.tN=jL+'Panel';_.tI=51;function Ap(a){a.f=oA(new iA(),a);}
function Bp(a){Ap(a);return a;}
function Cp(c,a,b){zA(a);pA(c.f,a);dj(b,a.gb());vv(c,a);}
function Dp(d,b,a){var c;Fp(d,a);if(b.p===d){c=bq(d,b);if(c<a){a--;}}return a;}
function Ep(b,a){if(a<0||a>=b.f.b){throw qC(new pC());}}
function Fp(b,a){if(a<0||a>b.f.b){throw qC(new pC());}}
function cq(b,a){return rA(b.f,a);}
function bq(b,a){return sA(b.f,a);}
function dq(e,b,c,a,d){a=Dp(e,b,a);zA(b);tA(e.f,b,a);if(d){lk(c,b.gb(),a);}else{dj(c,b.gb());}vv(e,b);}
function eq(a){return uA(a.f);}
function fq(b,c){var a;if(c.p!==b){return false;}xv(b,c);a=c.gb();pk(ik(a),a);wA(b.f,c);return true;}
function gq(){return eq(this);}
function hq(a){return fq(this,a);}
function zp(){}
_=zp.prototype=new uv();_.vb=gq;_.rc=hq;_.tN=jL+'ComplexPanel';_.tI=52;function fp(a){Bp(a);AA(a,gj());Ak(a.gb(),'position','relative');Ak(a.gb(),'overflow','hidden');return a;}
function gp(a,b){Cp(a,b,a.gb());}
function hp(b,d,a,c){zA(d);kp(b,d,a,c);gp(b,d);}
function jp(b,c){var a;a=fq(b,c);if(a){lp(c.gb());}return a;}
function kp(c,e,b,d){var a;a=e.gb();if(b==(-1)&&d==(-1)){lp(a);}else{Ak(a,'position','absolute');Ak(a,'left',b+'px');Ak(a,'top',d+'px');}}
function lp(a){Ak(a,'left','');Ak(a,'top','');Ak(a,'position','');}
function mp(a){return jp(this,a);}
function ep(){}
_=ep.prototype=new zp();_.rc=mp;_.tN=jL+'AbsolutePanel';_.tI=53;function op(a){Bp(a);a.e=lj();a.d=ij();dj(a.e,a.d);AA(a,a.e);return a;}
function qp(c,d,a){var b;b=ik(d.gb());wk(b,'height',a);}
function rp(c,b,a){wk(b,'align',a.a);}
function sp(c,b,a){Ak(b,'verticalAlign',a.a);}
function tp(b,c,d){var a;a=ik(c.gb());wk(a,'width',d);}
function np(){}
_=np.prototype=new zp();_.tN=jL+'CellPanel';_.tI=54;_.d=null;_.e=null;function kF(d,a,b){var c;while(a.tb()){c=a.yb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function mF(a){throw hF(new gF(),'add');}
function nF(b){var a;a=kF(this,this.vb(),b);return a!==null;}
function oF(){var a,b,c;c=CD(new BD());a=null;DD(c,'[');b=this.vb();while(b.tb()){if(a!==null){DD(c,a);}else{a=', ';}DD(c,yE(b.yb()));}DD(c,']');return bE(c);}
function jF(){}
_=jF.prototype=new rD();_.s=mF;_.z=nF;_.tS=oF;_.tN=nL+'AbstractCollection';_.tI=55;function zF(b,a){throw rC(new pC(),'Index: '+a+', Size: '+b.b);}
function AF(a){return rF(new qF(),a);}
function BF(b,a){throw hF(new gF(),'add');}
function CF(a){this.r(this.yc(),a);return true;}
function DF(e){var a,b,c,d,f;if(e===this){return true;}if(!rh(e,29)){return false;}f=qh(e,29);if(this.yc()!=f.yc()){return false;}c=AF(this);d=f.vb();while(tF(c)){a=uF(c);b=uF(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function EF(){var a,b,c,d;c=1;a=31;b=AF(this);while(tF(b)){d=uF(b);c=31*c+(d===null?0:d.hC());}return c;}
function FF(){return AF(this);}
function aG(a){throw hF(new gF(),'remove');}
function pF(){}
_=pF.prototype=new jF();_.r=BF;_.s=CF;_.eQ=DF;_.hC=EF;_.vb=FF;_.qc=aG;_.tN=nL+'AbstractList';_.tI=56;function oH(a){{sH(a);}}
function pH(a){oH(a);return a;}
function rH(b,a){fI(b.a,b.b++,a);return true;}
function qH(d,a){var b,c;c=a.vb();b=c.tb();while(c.tb()){fI(d.a,d.b++,c.yb());}return b;}
function sH(a){a.a=zg();a.b=0;}
function uH(b,a){if(a<0||a>=b.b){zF(b,a);}return bI(b.a,a);}
function vH(b,a){return wH(b,a,0);}
function wH(c,b,a){if(a<0){zF(c,a);}for(;a<c.b;++a){if(aI(b,bI(c.a,a))){return a;}}return (-1);}
function xH(a){return a.b==0;}
function yH(c,a){var b;b=uH(c,a);dI(c.a,a,1);--c.b;return b;}
function zH(c,b){var a;a=vH(c,b);if(a==(-1)){return false;}yH(c,a);return true;}
function AH(d,a,b){var c;c=uH(d,a);fI(d.a,a,b);return c;}
function BH(c,a){var b;if(a.a<c.b){a=fh(a,c.b);}for(b=0;b<c.b;++b){mh(a,b,bI(c.a,b));}if(a.a>c.b){mh(a,c.b,null);}return a;}
function DH(a,b){if(a<0||a>this.b){zF(this,a);}CH(this.a,a,b);++this.b;}
function EH(a){return rH(this,a);}
function CH(a,b,c){a.splice(b,0,c);}
function FH(a){return vH(this,a)!=(-1);}
function aI(a,b){return a===b||a!==null&&a.eQ(b);}
function cI(a){return uH(this,a);}
function bI(a,b){return a[b];}
function eI(a){return yH(this,a);}
function dI(a,c,b){a.splice(c,b);}
function fI(a,b,c){a[b]=c;}
function gI(){return this.b;}
function nH(){}
_=nH.prototype=new pF();_.r=DH;_.s=EH;_.z=FH;_.rb=cI;_.qc=eI;_.yc=gI;_.tN=nL+'ArrayList';_.tI=57;_.a=null;_.b=0;function vp(a){pH(a);return a;}
function xp(d,c){var a,b;for(a=AF(d);tF(a);){b=qh(uF(a),20);b.Db(c);}}
function up(){}
_=up.prototype=new nH();_.tN=jL+'ClickListenerCollection';_.tI=58;function kq(a,b){if(a.d!==null){throw nC(new lC(),'Composite.initWidget() may only be called once.');}zA(b);AA(a,b.gb());a.d=b;BA(b,a);}
function lq(){if(this.d===null){throw nC(new lC(),'initWidget() was never called in '+jg(this));}return this.q;}
function mq(){if(this.d!==null){return this.d.ub();}return false;}
function nq(){this.d.Ab();this.dc();}
function oq(){try{this.mc();}finally{this.d.Eb();}}
function iq(){}
_=iq.prototype=new hA();_.gb=lq;_.ub=mq;_.Ab=nq;_.Eb=oq;_.tN=jL+'Composite';_.tI=59;_.d=null;function qq(a){Bp(a);AA(a,gj());return a;}
function sq(b,c){var a;a=c.gb();Ak(a,'width','100%');Ak(a,'height','100%');c.vc(false);}
function tq(b,c,a){dq(b,c,b.gb(),a,true);sq(b,c);}
function uq(b,c){var a;a=fq(b,c);if(a){vq(b,c);if(b.b===c){b.b=null;}}return a;}
function vq(a,b){Ak(b.gb(),'width','');Ak(b.gb(),'height','');b.vc(true);}
function wq(b,a){Ep(b,a);if(b.b!==null){b.b.vc(false);}b.b=cq(b,a);b.b.vc(true);}
function xq(a){return uq(this,a);}
function pq(){}
_=pq.prototype=new zp();_.rc=xq;_.tN=jL+'DeckPanel';_.tI=60;_.b=null;function lx(a){mx(a,gj());return a;}
function mx(b,a){AA(b,a);return b;}
function nx(a,b){if(a.n!==null){throw nC(new lC(),'SimplePanel can only contain one child widget');}a.wc(b);}
function px(a,b){if(b===a.n){return;}if(b!==null){zA(b);}if(a.n!==null){a.rc(a.n);}a.n=b;if(b!==null){dj(a.db(),a.n.gb());vv(a,b);}}
function qx(){return this.gb();}
function rx(){return hx(new fx(),this);}
function sx(a){if(this.n!==a){return false;}xv(this,a);pk(this.db(),a.gb());this.n=null;return true;}
function tx(a){px(this,a);}
function ex(){}
_=ex.prototype=new uv();_.db=qx;_.vb=rx;_.rc=sx;_.wc=tx;_.tN=jL+'SimplePanel';_.tI=61;_.n=null;function cw(){cw=aL;rw=new eB();}
function Dv(a){cw();mx(a,gB(rw));iw(a,0,0);return a;}
function Ev(b,a){cw();Dv(b);b.g=a;return b;}
function Fv(c,a,b){cw();Ev(c,a);c.k=b;return c;}
function aw(b,a){if(a.blur){a.blur();}}
function bw(c){var a,b,d;a=c.l;if(!a){jw(c,false);mw(c);}b=uh((um()-ew(c))/2);d=uh((tm()-dw(c))/2);iw(c,vm()+b,wm()+d);if(!a){jw(c,true);}}
function dw(a){return lz(a);}
function ew(a){return mz(a);}
function fw(b,a){if(!b.l){return;}b.l=false;jp(ax(),b);b.gb();}
function gw(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.tc(a.h);}if(a.i!==null){b.xc(a.i);}}}
function hw(e,b){var a,c,d,f;d=Aj(b);c=mk(e.gb(),d);f=Cj(b);switch(f){case 128:{a=(sh(xj(b)),av(b),true);return a&&(c|| !e.k);}case 512:{a=(sh(xj(b)),av(b),true);return a&&(c|| !e.k);}case 256:{a=(sh(xj(b)),av(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((bj(),rk)!==null){return true;}if(!c&&e.g&&f==4){fw(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){aw(e,d);return false;}}}return !e.k||c;}
function iw(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.gb();Ak(a,'left',b+'px');Ak(a,'top',d+'px');}
function jw(a,b){Ak(a.gb(),'visibility',b?'visible':'hidden');a.gb();}
function kw(a,b){px(a,b);gw(a);}
function lw(a,b){a.i=b;gw(a);if(lE(b)==0){a.i=null;}}
function mw(a){if(a.l){return;}a.l=true;cj(a);Ak(a.gb(),'position','absolute');if(a.m!=(-1)){iw(a,a.j,a.m);}gp(ax(),a);a.gb();}
function nw(){return this.gb();}
function ow(){return dw(this);}
function pw(){return ew(this);}
function qw(){return this.gb();}
function sw(){qk(this);yA(this);}
function tw(a){return hw(this,a);}
function uw(a){this.h=a;gw(this);if(lE(a)==0){this.h=null;}}
function vw(a){jw(this,a);}
function ww(a){kw(this,a);}
function xw(a){lw(this,a);}
function Cv(){}
_=Cv.prototype=new ex();_.db=nw;_.lb=ow;_.mb=pw;_.nb=qw;_.Eb=sw;_.bc=tw;_.tc=uw;_.vc=vw;_.wc=ww;_.xc=xw;_.tN=jL+'PopupPanel';_.tI=62;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var rw;function Cq(){Cq=aL;cw();}
function zq(a){a.a=tt(new yr());a.f=lr(new hr());}
function Aq(b,a){Cq();Bq(b,a,true);return b;}
function Bq(c,a,b){Cq();Fv(c,a,b);zq(c);pt(c.f,0,0,c.a);c.f.tc('100%');kt(c.f,0);mt(c.f,0);nt(c.f,0);is(c.f.b,1,0,'100%');ls(c.f.b,1,0,'100%');hs(c.f.b,1,0,(Dt(),Et),(eu(),gu));kw(c,c.f);rz(c,'gwt-DialogBox');rz(c.a,'Caption');fv(c.a,c);return c;}
function Dq(b,a){xt(b.a,a);}
function Eq(a){if(Cj(a)==4){if(mk(this.a.gb(),Aj(a))){Dj(a);}}return hw(this,a);}
function Fq(a,b,c){this.e=true;tk(this.a.gb());this.c=b;this.d=c;}
function ar(a){}
function br(a){}
function cr(c,d,e){var a,b;if(this.e){a=d+jz(this);b=e+kz(this);iw(this,a-this.c,b-this.d);}}
function dr(a,b,c){this.e=false;ok(this.a.gb());}
function er(a){if(this.b!==a){return false;}jt(this.f,a);return true;}
function fr(a){if(this.b!==null){jt(this.f,this.b);}if(a!==null){pt(this.f,1,0,a);}this.b=a;}
function gr(a){lw(this,a);this.f.xc('100%');}
function yq(){}
_=yq.prototype=new Cv();_.bc=Eq;_.ec=Fq;_.fc=ar;_.gc=br;_.hc=cr;_.ic=dr;_.rc=er;_.wc=fr;_.xc=gr;_.tN=jL+'DialogBox';_.tI=63;_.b=null;_.c=0;_.d=0;_.e=false;function Fs(a){a.e=vs(new qs());}
function at(a){Fs(a);a.d=lj();a.a=ij();dj(a.d,a.a);AA(a,a.d);sz(a,1);return a;}
function bt(c,a){var b;b=or(c);if(a>=b||a<0){throw rC(new pC(),'Row index: '+a+', Row size: '+b);}}
function ct(e,c,b,a){var d;d=gs(e.b,c,b);it(e,d,a);return d;}
function et(c,b,a){return b.rows[a].cells.length;}
function ft(a){return gt(a,a.a);}
function gt(b,a){return a.rows.length;}
function ht(b,a){var c;if(a!=or(b)){bt(b,a);}c=kj();lk(b.a,c,a);return a;}
function it(d,c,a){var b,e;b=gk(c);e=null;if(b!==null){e=xs(d.e,b);}if(e!==null){jt(d,e);return true;}else{if(a){yk(c,'');}return false;}}
function jt(b,c){var a;if(c.p!==b){return false;}xv(b,c);a=c.gb();pk(ik(a),a);As(b.e,a);return true;}
function kt(a,b){wk(a.d,'border',''+b);}
function lt(b,a){b.b=a;}
function mt(b,a){vk(b.d,'cellPadding',a);}
function nt(b,a){vk(b.d,'cellSpacing',a);}
function ot(b,a){b.c=a;ps(b.c);}
function pt(d,b,a,e){var c;qr(d,b,a);if(e!==null){zA(e);c=ct(d,b,a,true);ys(d.e,e);dj(c,e.gb());vv(d,e);}}
function qt(){return Bs(this.e);}
function rt(a){switch(Cj(a)){case 1:{break;}default:}}
function st(a){return jt(this,a);}
function zr(){}
_=zr.prototype=new uv();_.vb=qt;_.Cb=rt;_.rc=st;_.tN=jL+'HTMLTable';_.tI=64;_.a=null;_.b=null;_.c=null;_.d=null;function lr(a){at(a);lt(a,jr(new ir(),a));ot(a,ns(new ms(),a));return a;}
function nr(b,a){bt(b,a);return et(b,b.a,a);}
function or(a){return ft(a);}
function pr(b,a){return ht(b,a);}
function qr(e,d,b){var a,c;rr(e,d);if(b<0){throw rC(new pC(),'Cannot create a column with a negative index: '+b);}a=nr(e,d);c=b+1-a;if(c>0){sr(e.a,d,c);}}
function rr(d,b){var a,c;if(b<0){throw rC(new pC(),'Cannot create a row with a negative index: '+b);}c=or(d);for(a=c;a<=b;a++){pr(d,a);}}
function sr(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function hr(){}
_=hr.prototype=new zr();_.tN=jL+'FlexTable';_.tI=65;function ds(b,a){b.a=a;return b;}
function fs(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function gs(c,b,a){return fs(c,c.a.a,b,a);}
function hs(d,c,a,b,e){js(d,c,a,b);ks(d,c,a,e);}
function is(e,d,a,c){var b;qr(e.a,d,a);b=fs(e,e.a.a,d,a);wk(b,'height',c);}
function js(e,d,b,a){var c;qr(e.a,d,b);c=fs(e,e.a.a,d,b);wk(c,'align',a.a);}
function ks(d,c,b,a){qr(d.a,c,b);Ak(fs(d,d.a.a,c,b),'verticalAlign',a.a);}
function ls(c,b,a,d){qr(c.a,b,a);wk(fs(c,c.a.a,b,a),'width',d);}
function cs(){}
_=cs.prototype=new rD();_.tN=jL+'HTMLTable$CellFormatter';_.tI=66;function jr(b,a){ds(b,a);return b;}
function ir(){}
_=ir.prototype=new cs();_.tN=jL+'FlexTable$FlexCellFormatter';_.tI=67;function ur(a){Bp(a);AA(a,gj());return a;}
function vr(a,b){Cp(a,b,a.gb());}
function xr(b,c,a){dq(b,c,b.gb(),a,true);}
function tr(){}
_=tr.prototype=new zp();_.tN=jL+'FlowPanel';_.tI=68;function cv(a){AA(a,gj());sz(a,131197);rz(a,'gwt-Label');return a;}
function dv(b,a){cv(b);hv(b,a);return b;}
function ev(b,a){if(b.a===null){b.a=vp(new up());}rH(b.a,a);}
function fv(b,a){if(b.b===null){b.b=lv(new kv());}rH(b.b,a);}
function hv(b,a){zk(b.gb(),a);}
function iv(a,b){Ak(a.gb(),'whiteSpace',b?'normal':'nowrap');}
function jv(a){switch(Cj(a)){case 1:if(this.a!==null){xp(this.a,this);}break;case 4:case 8:case 64:case 16:case 32:if(this.b!==null){pv(this.b,this,a);}break;case 131072:break;}}
function bv(){}
_=bv.prototype=new hA();_.Cb=jv;_.tN=jL+'Label';_.tI=69;_.a=null;_.b=null;function tt(a){cv(a);AA(a,gj());sz(a,125);rz(a,'gwt-HTML');return a;}
function ut(b,a){tt(b);xt(b,a);return b;}
function vt(b,a,c){ut(b,a);iv(b,c);return b;}
function xt(b,a){yk(b.gb(),a);}
function yr(){}
_=yr.prototype=new bv();_.tN=jL+'HTML';_.tI=70;function Br(a){{Er(a);}}
function Cr(b,a){b.b=a;Br(b);return b;}
function Er(a){while(++a.a<a.b.b.b){if(uH(a.b.b,a.a)!==null){return;}}}
function Fr(a){return a.a<a.b.b.b;}
function as(){return Fr(this);}
function bs(){var a;if(!Fr(this)){throw CK(new BK());}a=uH(this.b.b,this.a);Er(this);return a;}
function Ar(){}
_=Ar.prototype=new rD();_.tb=as;_.yb=bs;_.tN=jL+'HTMLTable$1';_.tI=71;_.a=(-1);function ns(b,a){b.b=a;return b;}
function ps(a){if(a.a===null){a.a=hj('colgroup');lk(a.b.d,a.a,0);dj(a.a,hj('col'));}}
function ms(){}
_=ms.prototype=new rD();_.tN=jL+'HTMLTable$ColumnFormatter';_.tI=72;_.a=null;function us(a){a.b=pH(new nH());}
function vs(a){us(a);return a;}
function xs(c,a){var b;b=Ds(a);if(b<0){return null;}return qh(uH(c.b,b),12);}
function ys(b,c){var a;if(b.a===null){a=b.b.b;rH(b.b,c);}else{a=b.a.a;AH(b.b,a,c);b.a=b.a.b;}Es(c.gb(),a);}
function zs(c,a,b){Cs(a);AH(c.b,b,null);c.a=ss(new rs(),b,c.a);}
function As(c,a){var b;b=Ds(a);zs(c,a,b);}
function Bs(a){return Cr(new Ar(),a);}
function Cs(a){a['__widgetID']=null;}
function Ds(a){var b=a['__widgetID'];return b==null?-1:b;}
function Es(a,b){a['__widgetID']=b;}
function qs(){}
_=qs.prototype=new rD();_.tN=jL+'HTMLTable$WidgetMapper';_.tI=73;_.a=null;function ss(c,a,b){c.a=a;c.b=b;return c;}
function rs(){}
_=rs.prototype=new rD();_.tN=jL+'HTMLTable$WidgetMapper$FreeNode';_.tI=74;_.a=0;_.b=null;function Dt(){Dt=aL;Et=Bt(new At(),'center');Ft=Bt(new At(),'left');Bt(new At(),'right');}
var Et,Ft;function Bt(b,a){b.a=a;return b;}
function At(){}
_=At.prototype=new rD();_.tN=jL+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=75;_.a=null;function eu(){eu=aL;fu=cu(new bu(),'bottom');gu=cu(new bu(),'middle');hu=cu(new bu(),'top');}
var fu,gu,hu;function cu(a,b){a.a=b;return a;}
function bu(){}
_=bu.prototype=new rD();_.tN=jL+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=76;_.a=null;function lu(a){a.a=(Dt(),Ft);a.c=(eu(),hu);}
function mu(a){op(a);lu(a);a.b=kj();dj(a.d,a.b);wk(a.e,'cellSpacing','0');wk(a.e,'cellPadding','0');return a;}
function nu(b,c){var a;a=pu(b);dj(b.b,a);Cp(b,c,a);}
function pu(b){var a;a=jj();rp(b,a,b.a);sp(b,a,b.c);return a;}
function qu(c,d,a){var b;Fp(c,a);b=pu(c);lk(c.b,b,a);dq(c,d,b,a,false);}
function ru(c,d){var a,b;b=ik(d.gb());a=fq(c,d);if(a){pk(c.b,b);}return a;}
function su(b,a){b.c=a;}
function tu(a){return ru(this,a);}
function ku(){}
_=ku.prototype=new np();_.rc=tu;_.tN=jL+'HorizontalPanel';_.tI=77;_.b=null;function vu(a){AA(a,gj());dj(a.gb(),a.a=fj());sz(a,1);rz(a,'gwt-Hyperlink');return a;}
function wu(c,b,a){vu(c);Bu(c,b);Au(c,a);return c;}
function xu(b,a){if(b.b===null){b.b=vp(new up());}rH(b.b,a);}
function zu(a){return hk(a.a);}
function Au(b,a){b.c=a;wk(b.a,'href','#'+a);}
function Bu(b,a){zk(b.a,a);}
function Cu(a){if(Cj(a)==1){if(this.b!==null){xp(this.b,this);}vl(this.c);Dj(a);}}
function uu(){}
_=uu.prototype=new hA();_.Cb=Cu;_.tN=jL+'Hyperlink';_.tI=78;_.a=null;_.b=null;_.c=null;function av(a){return (zj(a)?1:0)|(yj(a)?8:0)|(vj(a)?2:0)|(rj(a)?4:0);}
function lv(a){pH(a);return a;}
function nv(d,c,e,f){var a,b;for(a=AF(d);tF(a);){b=qh(uF(a),21);b.ec(c,e,f);}}
function ov(d,c){var a,b;for(a=AF(d);tF(a);){b=qh(uF(a),21);b.fc(c);}}
function pv(e,c,a){var b,d,f,g,h;d=c.gb();g=tj(a)-Fj(d)+dk(d,'scrollLeft')+vm();h=uj(a)-ak(d)+dk(d,'scrollTop')+wm();switch(Cj(a)){case 4:nv(e,c,g,h);break;case 8:sv(e,c,g,h);break;case 64:rv(e,c,g,h);break;case 16:b=wj(a);if(!mk(d,b)){ov(e,c);}break;case 32:f=Bj(a);if(!mk(d,f)){qv(e,c);}break;}}
function qv(d,c){var a,b;for(a=AF(d);tF(a);){b=qh(uF(a),21);b.gc(c);}}
function rv(d,c,e,f){var a,b;for(a=AF(d);tF(a);){b=qh(uF(a),21);b.hc(c,e,f);}}
function sv(d,c,e,f){var a,b;for(a=AF(d);tF(a);){b=qh(uF(a),21);b.ic(c,e,f);}}
function kv(){}
_=kv.prototype=new nH();_.tN=jL+'MouseListenerCollection';_.tI=79;function Ew(){Ew=aL;dx=uJ(new yI());}
function Dw(b,a){Ew();fp(b);if(a===null){a=Fw();}AA(b,a);b.Ab();return b;}
function ax(){Ew();return bx(null);}
function bx(c){Ew();var a,b;b=qh(AJ(dx,c),22);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=ck(c))){return null;}}if(dx.c==0){cx();}BJ(dx,c,b=Dw(new yw(),a));return b;}
function Fw(){Ew();return $doc.body;}
function cx(){Ew();lm(new zw());}
function yw(){}
_=yw.prototype=new ep();_.tN=jL+'RootPanel';_.tI=80;var dx;function Bw(){var a,b;for(b=tG(bH((Ew(),dx)));AG(b);){a=qh(BG(b),22);if(a.ub()){a.Eb();}}}
function Cw(){return null;}
function zw(){}
_=zw.prototype=new rD();_.nc=Bw;_.oc=Cw;_.tN=jL+'RootPanel$1';_.tI=81;function gx(a){a.a=a.b.n!==null;}
function hx(b,a){b.b=a;gx(b);return b;}
function jx(){return this.a;}
function kx(){if(!this.a||this.b.n===null){throw CK(new BK());}this.a=false;return this.b.n;}
function fx(){}
_=fx.prototype=new rD();_.tb=jx;_.yb=kx;_.tN=jL+'SimplePanel$1';_.tI=82;function Bx(a){a.a=mu(new ku());}
function Cx(c){var a,b;Bx(c);kq(c,c.a);sz(c,1);rz(c,'gwt-TabBar');su(c.a,(eu(),fu));a=vt(new yr(),'&nbsp;',true);b=vt(new yr(),'&nbsp;',true);rz(a,'gwt-TabBarFirst');rz(b,'gwt-TabBarRest');a.tc('100%');b.tc('100%');nu(c.a,a);nu(c.a,b);a.tc('100%');qp(c.a,a,'100%');tp(c.a,b,'100%');return c;}
function Dx(b,a){if(b.c===null){b.c=iy(new hy());}rH(b.c,a);}
function Ex(b,a){if(a<0||a>by(b)){throw qC(new pC());}}
function Fx(b,a){if(a<(-1)||a>=by(b)){throw qC(new pC());}}
function by(a){return a.a.f.b-2;}
function cy(e,d,a,b){var c;Ex(e,b);if(a){c=ut(new yr(),d);}else{c=dv(new bv(),d);}iv(c,false);ev(c,e);rz(c,'gwt-TabBarItem');qu(e.a,c,b+1);}
function dy(b,a){var c;Fx(b,a);c=cq(b.a,a+1);if(c===b.b){b.b=null;}ru(b.a,c);}
function ey(b,a){Fx(b,a);if(b.c!==null){if(!ky(b.c,b,a)){return false;}}fy(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=cq(b.a,a+1);fy(b,b.b,true);if(b.c!==null){ly(b.c,b,a);}return true;}
function fy(c,a,b){if(a!==null){if(b){hz(a,'gwt-TabBarItem-selected');}else{nz(a,'gwt-TabBarItem-selected');}}}
function gy(b){var a;for(a=1;a<this.a.f.b-1;++a){if(cq(this.a,a)===b){ey(this,a-1);return;}}}
function Ax(){}
_=Ax.prototype=new iq();_.Db=gy;_.tN=jL+'TabBar';_.tI=83;_.b=null;_.c=null;function iy(a){pH(a);return a;}
function ky(e,c,d){var a,b;for(a=AF(e);tF(a);){b=qh(uF(a),23);if(!b.Bb(c,d)){return false;}}return true;}
function ly(e,c,d){var a,b;for(a=AF(e);tF(a);){b=qh(uF(a),23);b.lc(c,d);}}
function hy(){}
_=hy.prototype=new nH();_.tN=jL+'TabListenerCollection';_.tI=84;function zy(a){a.b=vy(new uy());a.a=py(new oy(),a.b);}
function Ay(b){var a;zy(b);a=bA(new Fz());cA(a,b.b);cA(a,b.a);qp(a,b.a,'100%');b.b.xc('100%');Dx(b.b,b);kq(b,a);rz(b,'gwt-TabPanel');rz(b.a,'gwt-TabPanelBottom');return b;}
function Cy(b,c,a){Fy(b,c,a,b.a.f.b);}
function By(b,a){if(b.c===null){b.c=iy(new hy());}rH(b.c,a);}
function Ey(b,a){return cq(b.a,a);}
function az(d,e,c,a,b){ry(d.a,e,c,a,b);}
function Fy(c,d,b,a){az(c,d,b,false,a);}
function bz(b,a){ey(b.b,a);}
function cz(){return eq(this.a);}
function dz(a,b){if(this.c!==null){return ky(this.c,this,b);}return true;}
function ez(a,b){wq(this.a,b);if(this.c!==null){ly(this.c,this,b);}}
function fz(a){return sy(this.a,a);}
function ny(){}
_=ny.prototype=new iq();_.vb=cz;_.Bb=dz;_.lc=ez;_.rc=fz;_.tN=jL+'TabPanel';_.tI=85;_.c=null;function py(b,a){qq(b);b.a=a;return b;}
function ry(e,f,d,a,b){var c;c=bq(e,f);if(c!=(-1)){sy(e,f);if(c<b){b--;}}xy(e.a,d,a,b);tq(e,f,b);}
function sy(b,c){var a;a=bq(b,c);if(a!=(-1)){yy(b.a,a);return uq(b,c);}return false;}
function ty(a){return sy(this,a);}
function oy(){}
_=oy.prototype=new pq();_.rc=ty;_.tN=jL+'TabPanel$TabbedDeckPanel';_.tI=86;_.a=null;function vy(a){Cx(a);return a;}
function xy(d,c,a,b){cy(d,c,a,b);}
function yy(b,a){dy(b,a);}
function uy(){}
_=uy.prototype=new Ax();_.tN=jL+'TabPanel$UnmodifiableTabBar';_.tI=87;function aA(a){a.a=(Dt(),Ft);a.b=(eu(),hu);}
function bA(a){op(a);aA(a);wk(a.e,'cellSpacing','0');wk(a.e,'cellPadding','0');return a;}
function cA(b,d){var a,c;c=kj();a=eA(b);dj(c,a);dj(b.d,c);Cp(b,d,a);}
function eA(b){var a;a=jj();rp(b,a,b.a);sp(b,a,b.b);return a;}
function fA(c,e,a){var b,d;Fp(c,a);d=kj();b=eA(c);dj(d,b);lk(c.d,d,a);dq(c,e,b,a,false);}
function gA(c){var a,b;b=ik(c.gb());a=fq(this,c);if(a){pk(this.d,ik(b));}return a;}
function Fz(){}
_=Fz.prototype=new np();_.rc=gA;_.tN=jL+'VerticalPanel';_.tI=88;function oA(b,a){b.a=kh('[Lcom.google.gwt.user.client.ui.Widget;',[154],[12],[4],null);return b;}
function pA(a,b){tA(a,b,a.b);}
function rA(b,a){if(a<0||a>=b.b){throw qC(new pC());}return b.a[a];}
function sA(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function tA(d,e,a){var b,c;if(a<0||a>d.b){throw qC(new pC());}if(d.b==d.a.a){c=kh('[Lcom.google.gwt.user.client.ui.Widget;',[154],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){mh(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){mh(d.a,b,d.a[b-1]);}mh(d.a,a,e);}
function uA(a){return kA(new jA(),a);}
function vA(c,b){var a;if(b<0||b>=c.b){throw qC(new pC());}--c.b;for(a=b;a<c.b;++a){mh(c.a,a,c.a[a+1]);}mh(c.a,c.b,null);}
function wA(b,c){var a;a=sA(b,c);if(a==(-1)){throw CK(new BK());}vA(b,a);}
function iA(){}
_=iA.prototype=new rD();_.tN=jL+'WidgetCollection';_.tI=89;_.a=null;_.b=0;function kA(b,a){b.b=a;return b;}
function mA(){return this.a<this.b.b-1;}
function nA(){if(this.a>=this.b.b){throw CK(new BK());}return this.b.a[++this.a];}
function jA(){}
_=jA.prototype=new rD();_.tb=mA;_.yb=nA;_.tN=jL+'WidgetCollection$WidgetIterator';_.tI=90;_.a=(-1);function gB(a){return gj();}
function eB(){}
_=eB.prototype=new rD();_.tN=kL+'PopupImpl';_.tI=91;function kB(){}
_=kB.prototype=new rD();_.tN=lL+'OutputStream';_.tI=92;function iB(){}
_=iB.prototype=new kB();_.tN=lL+'FilterOutputStream';_.tI=93;function mB(){}
_=mB.prototype=new iB();_.tN=lL+'PrintStream';_.tI=94;function qB(){qB=aL;zD();}
function pB(a){qB();xD(a);return a;}
function oB(){}
_=oB.prototype=new wD();_.tN=mL+'ArrayStoreException';_.tI=95;function tB(){tB=aL;uB=sB(new rB(),false);vB=sB(new rB(),true);}
function sB(a,b){tB();a.a=b;return a;}
function wB(a){return rh(a,28)&&qh(a,28).a==this.a;}
function xB(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function yB(){return this.a?'true':'false';}
function zB(a){tB();return a?vB:uB;}
function rB(){}
_=rB.prototype=new rD();_.eQ=wB;_.hC=xB;_.tS=yB;_.tN=mL+'Boolean';_.tI=96;_.a=false;var uB,vB;function DB(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+FC(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function bC(){bC=aL;zD();}
function FB(a){bC();xD(a);return a;}
function aC(b,a){bC();yD(b,a);return b;}
function EB(){}
_=EB.prototype=new wD();_.tN=mL+'ClassCastException';_.tI=97;function kC(){kC=aL;zD();}
function jC(b,a){kC();yD(b,a);return b;}
function iC(){}
_=iC.prototype=new wD();_.tN=mL+'IllegalArgumentException';_.tI=98;function oC(){oC=aL;zD();}
function mC(a){oC();xD(a);return a;}
function nC(b,a){oC();yD(b,a);return b;}
function lC(){}
_=lC.prototype=new wD();_.tN=mL+'IllegalStateException';_.tI=99;function sC(){sC=aL;zD();}
function qC(a){sC();xD(a);return a;}
function rC(b,a){sC();yD(b,a);return b;}
function pC(){}
_=pC.prototype=new wD();_.tN=mL+'IndexOutOfBoundsException';_.tI=100;function lD(){lD=aL;{qD();}}
function mD(a){lD();return isNaN(a);}
function nD(e,d,c,h){lD();var a,b,f,g;if(e===null){throw jD(new iD(),'Unable to parse null');}b=lE(e);f=b>0&&eE(e,0)==45?1:0;for(a=f;a<b;a++){if(DB(eE(e,a),d)==(-1)){throw jD(new iD(),'Could not parse '+e+' in radix '+d);}}g=oD(e,d);if(mD(g)){throw jD(new iD(),'Unable to parse '+e);}else if(g<c||g>h){throw jD(new iD(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function oD(b,a){lD();return parseInt(b,a);}
function qD(){lD();pD=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var pD=null;function uC(){uC=aL;lD();}
function xC(a){uC();return yC(a,10);}
function yC(b,a){uC();return th(nD(b,a,(-2147483648),2147483647));}
function zC(a){uC();return xE(a);}
var vC=2147483647,wC=(-2147483648);function CC(a){return a<0?-a:a;}
function DC(a){return a<0?-a:a;}
function EC(a,b){return a>b?a:b;}
function FC(a,b){return a<b?a:b;}
function aD(a){return Math.sqrt(a);}
function dD(){dD=aL;zD();}
function cD(a){dD();xD(a);return a;}
function bD(){}
_=bD.prototype=new wD();_.tN=mL+'NegativeArraySizeException';_.tI=101;function gD(){gD=aL;zD();}
function fD(b,a){gD();yD(b,a);return b;}
function eD(){}
_=eD.prototype=new wD();_.tN=mL+'NullPointerException';_.tI=102;function kD(){kD=aL;kC();}
function jD(b,a){kD();jC(b,a);return b;}
function iD(){}
_=iD.prototype=new iC();_.tN=mL+'NumberFormatException';_.tI=103;function eE(b,a){return b.charCodeAt(a);}
function gE(f,c){var a,b,d,e,g,h;h=lE(f);e=lE(c);b=FC(h,e);for(a=0;a<b;a++){g=eE(f,a);d=eE(c,a);if(g!=d){return g-d;}}return h-e;}
function hE(b,a){if(!rh(a,1))return false;return qE(b,a);}
function iE(b,a){return b.indexOf(a);}
function jE(c,b,a){return c.indexOf(b,a);}
function kE(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function lE(a){return a.length;}
function mE(c,a,b){b=rE(b);return c.replace(RegExp(a,'g'),b);}
function nE(b,a){return b.substr(a,b.length-a);}
function oE(c,a,b){return c.substr(a,b-a);}
function pE(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function qE(a,b){return String(a)==b;}
function rE(b){var a;a=0;while(0<=(a=jE(b,'\\',a))){if(eE(b,a+1)==36){b=oE(b,0,a)+'$'+nE(b,++a);}else{b=oE(b,0,a)+nE(b,++a);}}return b;}
function sE(a){if(rh(a,1)){return gE(this,qh(a,1));}else{throw aC(new EB(),'Cannot compare '+a+" with String '"+this+"'");}}
function tE(a){return hE(this,a);}
function vE(){var a=uE;if(!a){a=uE={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function wE(){return this;}
function xE(a){return ''+a;}
function yE(a){return a!==null?a.tS():'null';}
_=String.prototype;_.u=sE;_.eQ=tE;_.hC=vE;_.tS=wE;_.tN=mL+'String';_.tI=2;var uE=null;function CD(a){ED(a);return a;}
function DD(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function ED(a){FD(a,'');}
function FD(b,a){b.js=[a];b.length=a.length;}
function bE(a){a.zb();return a.js[0];}
function cE(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function dE(){return bE(this);}
function BD(){}
_=BD.prototype=new rD();_.zb=cE;_.tS=dE;_.tN=mL+'StringBuffer';_.tI=104;function AE(){AE=aL;CE=new mB();}
function BE(){AE();return new Date().getTime();}
function DE(a){AE();return pg(a);}
var CE;function iF(){iF=aL;zD();}
function hF(b,a){iF();yD(b,a);return b;}
function gF(){}
_=gF.prototype=new wD();_.tN=mL+'UnsupportedOperationException';_.tI=105;function rF(b,a){b.c=a;return b;}
function tF(a){return a.a<a.c.yc();}
function uF(a){if(!tF(a)){throw CK(new BK());}return a.c.rb(a.b=a.a++);}
function vF(a){if(a.b<0){throw mC(new lC());}a.c.qc(a.b);a.a=a.b;a.b=(-1);}
function wF(){return tF(this);}
function xF(){return uF(this);}
function qF(){}
_=qF.prototype=new rD();_.tb=wF;_.yb=xF;_.tN=nL+'AbstractList$IteratorImpl';_.tI=106;_.a=0;_.b=(-1);function FG(f,d,e){var a,b,c;for(b=pJ(f.E());hJ(b);){a=iJ(b);c=a.jb();if(d===null?c===null:d.eQ(c)){if(e){jJ(b);}return a;}}return null;}
function aH(b){var a;a=b.E();return dG(new cG(),b,a);}
function bH(b){var a;a=zJ(b);return rG(new qG(),b,a);}
function cH(a){return FG(this,a,false)!==null;}
function dH(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!rh(d,30)){return false;}f=qh(d,30);c=aH(this);e=f.wb();if(!kH(c,e)){return false;}for(a=fG(c);mG(a);){b=nG(a);h=this.sb(b);g=f.sb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function eH(b){var a;a=FG(this,b,false);return a===null?null:a.pb();}
function fH(){var a,b,c;b=0;for(c=pJ(this.E());hJ(c);){a=iJ(c);b+=a.hC();}return b;}
function gH(){return aH(this);}
function hH(){var a,b,c,d;d='{';a=false;for(c=pJ(this.E());hJ(c);){b=iJ(c);if(a){d+=', ';}else{a=true;}d+=yE(b.jb());d+='=';d+=yE(b.pb());}return d+'}';}
function bG(){}
_=bG.prototype=new rD();_.y=cH;_.eQ=dH;_.sb=eH;_.hC=fH;_.wb=gH;_.tS=hH;_.tN=nL+'AbstractMap';_.tI=107;function kH(e,b){var a,c,d;if(b===e){return true;}if(!rh(b,31)){return false;}c=qh(b,31);if(c.yc()!=e.yc()){return false;}for(a=c.vb();a.tb();){d=a.yb();if(!e.z(d)){return false;}}return true;}
function lH(a){return kH(this,a);}
function mH(){var a,b,c;a=0;for(b=this.vb();b.tb();){c=b.yb();if(c!==null){a+=c.hC();}}return a;}
function iH(){}
_=iH.prototype=new jF();_.eQ=lH;_.hC=mH;_.tN=nL+'AbstractSet';_.tI=108;function dG(b,a,c){b.a=a;b.b=c;return b;}
function fG(b){var a;a=pJ(b.b);return kG(new jG(),b,a);}
function gG(a){return this.a.y(a);}
function hG(){return fG(this);}
function iG(){return this.b.a.c;}
function cG(){}
_=cG.prototype=new iH();_.z=gG;_.vb=hG;_.yc=iG;_.tN=nL+'AbstractMap$1';_.tI=109;function kG(b,a,c){b.a=c;return b;}
function mG(a){return a.a.tb();}
function nG(b){var a;a=b.a.yb();return a.jb();}
function oG(){return mG(this);}
function pG(){return nG(this);}
function jG(){}
_=jG.prototype=new rD();_.tb=oG;_.yb=pG;_.tN=nL+'AbstractMap$2';_.tI=110;function rG(b,a,c){b.a=a;b.b=c;return b;}
function tG(b){var a;a=pJ(b.b);return yG(new xG(),b,a);}
function uG(a){return yJ(this.a,a);}
function vG(){return tG(this);}
function wG(){return this.b.a.c;}
function qG(){}
_=qG.prototype=new jF();_.z=uG;_.vb=vG;_.yc=wG;_.tN=nL+'AbstractMap$3';_.tI=111;function yG(b,a,c){b.a=c;return b;}
function AG(a){return a.a.tb();}
function BG(a){var b;b=a.a.yb().pb();return b;}
function CG(){return AG(this);}
function DG(){return BG(this);}
function xG(){}
_=xG.prototype=new rD();_.tb=CG;_.yb=DG;_.tN=nL+'AbstractMap$4';_.tI=112;function jI(b){var a,c;a=pH(new nH());for(c=0;c<b.a;c++){rH(a,b[c]);}return a;}
function kI(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.v(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function lI(a){kI(a,a.a,(sI(),tI));}
function sI(){sI=aL;tI=new pI();}
var tI;function rI(a,b){return qh(a,36).u(b);}
function pI(){}
_=pI.prototype=new rD();_.v=rI;_.tN=nL+'Comparators$1';_.tI=113;function wJ(){wJ=aL;DJ=dK();}
function tJ(a){{vJ(a);}}
function uJ(a){wJ();tJ(a);return a;}
function vJ(a){a.a=zg();a.d=Ag();a.b=yh(DJ,vg);a.c=0;}
function xJ(b,a){if(rh(a,1)){return hK(b.d,qh(a,1))!==DJ;}else if(a===null){return b.b!==DJ;}else{return gK(b.a,a,a.hC())!==DJ;}}
function yJ(a,b){if(a.b!==DJ&&fK(a.b,b)){return true;}else if(cK(a.d,b)){return true;}else if(aK(a.a,b)){return true;}return false;}
function zJ(a){return mJ(new dJ(),a);}
function AJ(c,a){var b;if(rh(a,1)){b=hK(c.d,qh(a,1));}else if(a===null){b=c.b;}else{b=gK(c.a,a,a.hC());}return b===DJ?null:b;}
function BJ(c,a,d){var b;if(rh(a,1)){b=kK(c.d,qh(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=jK(c.a,a,d,a.hC());}if(b===DJ){++c.c;return null;}else{return b;}}
function CJ(c,a){var b;if(rh(a,1)){b=mK(c.d,qh(a,1));}else if(a===null){b=c.b;c.b=yh(DJ,vg);}else{b=lK(c.a,a,a.hC());}if(b===DJ){return null;}else{--c.c;return b;}}
function EJ(e,c){wJ();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function FJ(d,a){wJ();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=CI(c.substring(1),e);a.s(b);}}}
function aK(f,h){wJ();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.pb();if(fK(h,d)){return true;}}}}return false;}
function bK(a){return xJ(this,a);}
function cK(c,d){wJ();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(fK(d,a)){return true;}}}return false;}
function dK(){wJ();}
function eK(){return zJ(this);}
function fK(a,b){wJ();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function iK(a){return AJ(this,a);}
function gK(f,h,e){wJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(fK(h,d)){return c.pb();}}}}
function hK(b,a){wJ();return b[':'+a];}
function jK(f,h,j,e){wJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(fK(h,d)){var i=c.pb();c.uc(j);return i;}}}else{a=f[e]=[];}var c=CI(h,j);a.push(c);}
function kK(c,a,d){wJ();a=':'+a;var b=c[a];c[a]=d;return b;}
function lK(f,h,e){wJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(fK(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.pb();}}}}
function mK(c,a){wJ();a=':'+a;var b=c[a];delete c[a];return b;}
function yI(){}
_=yI.prototype=new bG();_.y=bK;_.E=eK;_.sb=iK;_.tN=nL+'HashMap';_.tI=114;_.a=null;_.b=null;_.c=0;_.d=null;var DJ;function AI(b,a,c){b.a=a;b.b=c;return b;}
function CI(a,b){return AI(new zI(),a,b);}
function DI(b){var a;if(rh(b,37)){a=qh(b,37);if(fK(this.a,a.jb())&&fK(this.b,a.pb())){return true;}}return false;}
function EI(){return this.a;}
function FI(){return this.b;}
function aJ(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function bJ(a){var b;b=this.b;this.b=a;return b;}
function cJ(){return this.a+'='+this.b;}
function zI(){}
_=zI.prototype=new rD();_.eQ=DI;_.jb=EI;_.pb=FI;_.hC=aJ;_.uc=bJ;_.tS=cJ;_.tN=nL+'HashMap$EntryImpl';_.tI=115;_.a=null;_.b=null;function mJ(b,a){b.a=a;return b;}
function oJ(d,c){var a,b,e;if(rh(c,37)){a=qh(c,37);b=a.jb();if(xJ(d.a,b)){e=AJ(d.a,b);return fK(a.pb(),e);}}return false;}
function pJ(a){return fJ(new eJ(),a.a);}
function qJ(a){return oJ(this,a);}
function rJ(){return pJ(this);}
function sJ(){return this.a.c;}
function dJ(){}
_=dJ.prototype=new iH();_.z=qJ;_.vb=rJ;_.yc=sJ;_.tN=nL+'HashMap$EntrySet';_.tI=116;function fJ(c,b){var a;c.c=b;a=pH(new nH());if(c.c.b!==(wJ(),DJ)){rH(a,AI(new zI(),null,c.c.b));}FJ(c.c.d,a);EJ(c.c.a,a);c.a=AF(a);return c;}
function hJ(a){return tF(a.a);}
function iJ(a){return a.b=qh(uF(a.a),37);}
function jJ(a){if(a.b===null){throw nC(new lC(),'Must call next() before remove().');}else{vF(a.a);CJ(a.c,a.b.jb());a.b=null;}}
function kJ(){return hJ(this);}
function lJ(){return iJ(this);}
function eJ(){}
_=eJ.prototype=new rD();_.tb=kJ;_.yb=lJ;_.tN=nL+'HashMap$EntrySetIterator';_.tI=117;_.a=null;_.b=null;function oK(a){a.a=uJ(new yI());return a;}
function pK(c,a){var b;b=BJ(c.a,a,zB(true));return b===null;}
function rK(a){return fG(aH(a.a));}
function sK(a){return pK(this,a);}
function tK(a){return xJ(this.a,a);}
function uK(){return rK(this);}
function vK(){return this.a.c;}
function wK(){return aH(this.a).tS();}
function nK(){}
_=nK.prototype=new iH();_.s=sK;_.z=tK;_.vb=uK;_.yc=vK;_.tS=wK;_.tN=nL+'HashSet';_.tI=118;_.a=null;function DK(){DK=aL;zD();}
function CK(a){DK();xD(a);return a;}
function BK(){}
_=BK.prototype=new wD();_.tN=nL+'NoSuchElementException';_.tI=119;function vL(){}
_=vL.prototype=new rD();_.tN=oL+'BezierCurve';_.tI=120;function xL(a){{CL(a);}}
function yL(a){xL(a);return a;}
function BL(i,d,e,a,b){var c,f,g,h,j;h=vN(new uN(),FC(d.a,e.a),FC(d.b,e.b));j=CC(d.a-e.a);c=CC(d.b-e.b);g=EC(j,c);g=EC(g,CC(d.a-a.a));g=EC(g,CC(d.b-a.b));g=EC(g,CC(e.a-b.a));g=EC(g,CC(e.b-b.b));f=vN(new uN(),h.a-g,h.b-g);Ak(i.a,'left',zC(f.a));Ak(i.a,'top',zC(f.b));uk(i.a,'width',zC(j+g*2));uk(i.a,'height',zC(c+g*2));Ak(i.a,'width',zC(j+g*2));Ak(i.a,'height',zC(c+g*2));AL(i,yN(d,AN(f)),yN(e,AN(f)),yN(a,AN(f)),yN(b,AN(f)),DL(i.a,'color'));}
function AL(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function CL(b){var a;b.a=hj('canvas');a=bk(b.a,'class');uk(b.a,'class',a+' gwt-diagrams-canvas');}
function DL(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function wL(){}
_=wL.prototype=new vL();_.tN=oL+'BezierCurveCanvas';_.tI=121;_.a=null;function aM(a){a.c=pH(new nH());}
function bM(c,d){var a,b;aM(c);qH(c.c,d);fM(c,c.A());for(b=AF(c.c);tF(b);){a=qh(uF(b),35);a.w(c);}return c;}
function cM(a,b){bM(a,jI(b));return a;}
function eM(a){return a.b.t(a.c);}
function fM(b,a){b.b=a;}
function gM(){this.Ac(eM(this));}
function FL(){}
_=FL.prototype=new hA();_.zc=gM;_.tN=pL+'AbstractConnection';_.tI=122;_.b=null;function iM(a){a.a=yL(new wL());}
function kM(a,b){cM(a,b);iM(a);if(b.a!=2){throw jC(new iC(),'Need exactly two connectors to connect');}AA(a,a.a.a);hz(a,'gwt-diagrams-connection');return a;}
function jM(c,a,b){kM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',153,35,[a,b]));return c;}
function mM(){return new CM();}
function nM(b){var a;if(!rh(b,38)){throw jC(new iC(),'Expected BezierConnectionData');}a=qh(b,38);if(a.b.b!=2){throw jC(new iC(),'Expected two connection points');}if(a.a.b!=2){throw jC(new iC(),'Expected two control points');}BL(this.a,qh(uH(a.b,0),32),qh(uH(a.b,1),32),qh(uH(a.a,0),32),qh(uH(a.a,1),32));}
function hM(){}
_=hM.prototype=new FL();_.A=mM;_.Ac=nM;_.tN=pL+'BezierTwoEndedConnection';_.tI=123;function qM(a){a.a=pH(new nH());}
function sM(a,b){cM(a,b);qM(a);if(b.a!=2){throw jC(new iC(),'Need exactly two connectors to connect');}AA(a,gj());hz(a,'gwt-diagrams-connection');return a;}
function rM(c,a,b){sM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',153,35,[a,b]));return c;}
function uM(d,a){var b,c;for(c=d.a.b;c<a;c++){b=gj();rH(d.a,yh(b,dl));dj(d.gb(),b);yk(b,'&nbsp;');}while(d.a.b>a){b=qh(uH(d.a,0),17);zH(d.a,yh(b,dl));pk(d.gb(),b);}}
function vM(){return new bN();}
function wM(a){var b,c,d,e,f;if(a.b.b<=1){throw jC(new iC(),'Too few connection points');}uM(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=qh(uH(this.a,d),17);e=qh(uH(a.b,d),32);c=qh(uH(a.b,d+1),32);f='gwt-diagrams-line';uk(b,'style','');wk(b,'className',f);Ak(b,'height','1');Ak(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Ak(b,'height',zC(CC(e.b-c.b)));}else if(e.b==c.b){Ak(b,'width',zC(CC(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Ak(b,'left',zC(FC(e.a,c.a)));Ak(b,'top',zC(FC(e.b,c.b)));wk(b,'className',f);}}
function pM(){}
_=pM.prototype=new FL();_.A=vM;_.Ac=wM;_.tN=pL+'RectilinearTwoEndedConnection';_.tI=124;function yM(c,a,b){jM(c,a,b);return c;}
function AM(){return new hN();}
function BM(a){if(a.b.b!=2){throw jC(new iC(),'Expected two connection points');}BL(this.a,qh(uH(a.b,0),32),qh(uH(a.b,1),32),qh(uH(a.b,1),32),qh(uH(a.b,0),32));}
function xM(){}
_=xM.prototype=new hM();_.A=AM;_.Ac=BM;_.tN=pL+'StraightTwoEndedConnection';_.tI=125;function EM(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[150],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=xN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function FM(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw jC(new iC(),'Unsupported connectors count');}c=qh(uH(e,0),35);d=qh(uH(e,1),35);f=EM(this,c,d);h=c.pc(f[0]);i=d.pc(f[1]);a=zN(h,f[0],50);b=zN(i,f[1],50);g=nN(new kN(),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',149,32,[h,i]),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',149,32,[a,b]));return g;}
function CM(){}
_=CM.prototype=new rD();_.t=FM;_.tN=qL+'BezierConnectionCalculator';_.tI=126;function cN(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(iO(),lO);}if(c==1&&d>0){return a!==(iO(),mO);}if(c==0&&d<0){return a!==(iO(),mO);}if(c==1&&d<0){return a!==(iO(),lO);}}else{if(c==0&&d>0){return a!==(iO(),nO);}if(c==1&&d>0){return a!==(iO(),kO);}if(c==0&&d<0){return a!==(iO(),kO);}if(c==1&&d<0){return a!==(iO(),nO);}}return false;}
function eN(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[150],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=xN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function fN(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(iO(),mO);}if(c==1&&d>0){return a===(iO(),lO);}if(c==0&&d<0){return a===(iO(),lO);}if(c==1&&d<0){return a===(iO(),mO);}}else{if(c==0&&d>0){return a===(iO(),kO);}if(c==1&&d>0){return a===(iO(),nO);}if(c==0&&d<0){return a===(iO(),nO);}if(c==1&&d<0){return a===(iO(),kO);}}return false;}
function gN(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw jC(new iC(),'Unsupported connectors count');}a=qh(uH(c,0),35);b=qh(uH(c,1),35);d=rN(new pN());e=eN(this,a,b);i=a.pc(e[0]);j=zN(i,e[0],10);k=b.pc(e[1]);l=zN(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(fN(this,e[0],0,f,true)&&fN(this,e[1],1,f,true)){g=zN(j,e[0],CC(uh(f/2)));h=vN(new uN(),g.a,l.b);}else if(fN(this,e[0],0,m,false)&&fN(this,e[1],1,m,false)){g=zN(j,e[0],CC(uh(m/2)));h=vN(new uN(),l.a,g.b);}else if(fN(this,e[0],0,f,true)&&fN(this,e[1],1,m,false)){g=zN(j,e[0],CC(f));h=zN(l,e[1],CC(m));}else if(fN(this,e[0],0,m,false)&&fN(this,e[1],1,f,true)){g=zN(j,e[0],CC(m));h=zN(l,e[1],CC(f));}else if(fN(this,e[0],0,f,true)&&cN(this,e[1],1,f,true)){g=zN(j,e[0],CC(uh(f/2)));h=vN(new uN(),g.a,l.b);}else if(cN(this,e[0],0,f,true)&&fN(this,e[1],1,f,true)){g=zN(j,e[0],CC(uh(f/2)));h=vN(new uN(),g.a,l.b);}else if(fN(this,e[0],0,m,false)&&cN(this,e[1],1,m,false)){g=zN(j,e[0],CC(uh(m/2)));h=vN(new uN(),l.a,g.b);}else if(cN(this,e[0],0,m,false)&&fN(this,e[1],1,m,false)){g=zN(j,e[0],CC(uh(m/2)));h=vN(new uN(),l.a,g.b);}else if(cN(this,e[0],0,f,true)&&cN(this,e[1],1,f,true)){g=zN(j,(iO(),mO),uh(f/2));h=vN(new uN(),g.a,l.b);}else if(cN(this,e[0],0,m,false)&&cN(this,e[1],1,m,false)){g=zN(j,(iO(),kO),uh(m/2));h=vN(new uN(),l.a,g.b);}rH(d.b,i);rH(d.b,j);if(g!==null){rH(d.b,g);}if(h!==null){rH(d.b,h);}rH(d.b,l);rH(d.b,k);return d;}
function bN(){}
_=bN.prototype=new rD();_.t=gN;_.tN=qL+'FullRectilinearTwoEndedCalculator';_.tI=127;function jN(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw jC(new iC(),'Unsupported connectors count');}a=qh(uH(e,0),35);b=qh(uH(e,1),35);f=rN(new pN());c=vN(new uN(),a.kb()+uh(a.qb()/2),a.ob()+uh(a.hb()/2));d=vN(new uN(),b.kb()+uh(b.qb()/2),b.ob()+uh(b.hb()/2));g=vN(new uN(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=uh(a.hb()/2);h=g.b!=0?uh(j*g.a/CC(g.b)):2147483647;j*= -k;if(CC(h)>uh(a.qb()/2)){h=uh(a.qb()/2);j=g.a!=0?uh(h*g.b/CC(g.a)):2147483647;h*= -i;}rH(f.b,vN(new uN(),c.a+h,c.b+j));j=uh(b.hb()/2);h=g.b!=0?uh(j*g.a/CC(g.b)):2147483647;j*=k;h= -h;if(CC(h)>uh(b.qb()/2)){h=uh(b.qb()/2);j=g.a!=0?uh(h*g.b/CC(g.a)):2147483647;h*=i;j= -j;}rH(f.b,vN(new uN(),d.a+h,d.b+j));return f;}
function hN(){}
_=hN.prototype=new rD();_.t=jN;_.tN=qL+'StraightCenterConnectionDataCalculator';_.tI=128;function qN(a){a.b=pH(new nH());}
function rN(a){qN(a);return a;}
function sN(b,a){qN(b);qH(b.b,a);return b;}
function pN(){}
_=pN.prototype=new rD();_.tN=rL+'ConnectionData';_.tI=129;function lN(a){a.a=pH(new nH());}
function mN(c,b,a){sN(c,b);lN(c);qH(c.a,a);return c;}
function nN(c,b,a){mN(c,jI(b),jI(a));return c;}
function kN(){}
_=kN.prototype=new pN();_.tN=rL+'BezierConnectionData';_.tI=130;function vN(b,a,c){b.a=a;b.b=c;return b;}
function xN(b,a){return aD((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function zN(c,a,b){if(a===(iO(),kO)){return vN(new uN(),c.a,c.b+b);}else if(a===(iO(),nO)){return vN(new uN(),c.a,c.b-b);}else if(a===(iO(),lO)){return vN(new uN(),c.a-b,c.b);}else if(a===(iO(),mO)){return vN(new uN(),c.a+b,c.b);}else{throw mC(new lC());}}
function yN(a,b){return vN(new uN(),a.a+b.a,a.b+b.b);}
function AN(a){return vN(new uN(),-a.a,-a.b);}
function uN(){}
_=uN.prototype=new rD();_.tN=rL+'Point';_.tI=131;_.a=0;_.b=0;function CN(a){a.c=oK(new nK());}
function DN(a){CN(a);return a;}
function FN(b,a){return zN(vN(new uN(),b.kb()+uh(b.qb()/2),b.ob()+uh(b.hb()/2)),a,jO(a)?uh(b.qb()/2):uh(b.hb()/2));}
function aO(c){var a,b;for(b=rK(c.c);mG(b);){a=qh(nG(b),39);a.zc();}}
function bO(a){pK(this.c,a);}
function cO(a){return FN(this,a);}
function dO(){return oO();}
function eO(a){return FN(this,a);}
function BN(){}
_=BN.prototype=new rD();_.w=bO;_.bb=cO;_.eb=dO;_.pc=eO;_.tN=sL+'AbstractConnector';_.tI=132;function iO(){iO=aL;nO=hO(new gO(),'UP');kO=hO(new gO(),'DOWN');lO=hO(new gO(),'LEFT');mO=hO(new gO(),'RIGHT');}
function hO(b,a){iO();b.a=a;return b;}
function jO(a){return a===lO||a===mO;}
function oO(){iO();return lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',150,33,[nO,kO,lO,mO]);}
function pO(){return this.a;}
function gO(){}
_=gO.prototype=new rD();_.tS=pO;_.tN=sL+'Direction';_.tI=133;_.a=null;var kO,lO,mO,nO;function wO(){wO=aL;EO=uJ(new yI());}
function vO(a,b){wO();DN(a);a.b=b;return a;}
function xO(){return this.b.lb();}
function yO(){var a,b;a=0;b=ik(this.b.gb());while(b!==null){if(hE('relative',jk(b,'position'))){a=Fj(b);break;}b=ik(b);}return jz(this.b)-a;}
function zO(){var a,b;a=0;b=ik(this.b.gb());while(b!==null){if(hE('relative',jk(b,'position'))){a=ak(b);break;}b=ik(b);}return kz(this.b)-a;}
function AO(){return this.b.mb();}
function BO(a){wO();return qh(AJ(EO,a),40);}
function CO(b){wO();var a;if(xJ(EO,b)){return qh(AJ(EO,b),40);}else{a=vO(new qO(),b);BJ(EO,b,a);return a;}}
function DO(c,b){wO();var a;if(xJ(EO,c)){return qh(AJ(EO,c),40);}else{a=sO(new rO(),c,b);BJ(EO,c,a);return a;}}
function qO(){}
_=qO.prototype=new BN();_.hb=xO;_.kb=yO;_.ob=zO;_.qb=AO;_.tN=sL+'UIObjectConnector';_.tI=134;_.b=null;var EO;function tO(){tO=aL;wO();}
function sO(b,a,c){tO();b.a=c;vO(b,a);return b;}
function uO(){return this.a;}
function rO(){}
_=rO.prototype=new qO();_.eb=uO;_.tN=sL+'UIObjectConnector$1';_.tI=135;function iP(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function jP(a){lg(new aP());bl(eP(new dP(),a));}
function FO(){}
_=FO.prototype=new rD();_.tN=tL+'BaseExamplesEntryPoint';_.tI=136;function cP(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=dF(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=Aq(new yq(),true);Ak(a.gb(),'backgroundColor','#ABCDEF');AE(),CE;d=mE(d,' ','&nbsp;');Dq(a,'<pre>'+d+'<\/pre>');bw(a);}
function aP(){}
_=aP.prototype=new rD();_.tN=tL+'BaseExamplesEntryPoint$1';_.tI=137;function eP(b,a){b.a=a;return b;}
function gP(){rP(this.a);}
function dP(){}
_=dP.prototype=new rD();_.F=gP;_.tN=tL+'BaseExamplesEntryPoint$2';_.tI=138;function rP(c){var a,b;b=Ay(new ny());gp(bx('tabs'),b);Cy(b,tQ(new sQ()),'Rectilinear');Cy(b,pQ(new oQ()),'Bezier');Cy(b,xQ(new wQ()),'Straight');By(b,mP(new lP(),c,b));a=iP(c,'tab');if(a===null||hE('',a)){a='0';}bz(b,xC(a));}
function kP(){}
_=kP.prototype=new FO();_.tN=tL+'GwtDiagramsExample';_.tI=139;function mP(b,a,c){b.a=c;return b;}
function oP(a,b){return true;}
function pP(b,c){var a;a=qh(Ey(this.a,c),41);hQ(a);}
function lP(){}
_=lP.prototype=new rD();_.Bb=oP;_.lc=pP;_.tN=tL+'GwtDiagramsExample$1';_.tI=140;function kQ(a){a.c=fp(new ep());}
function lQ(a){var b;lx(a);kQ(a);hz(a,'gwt-diagrams-example');b=bA(new Fz());nx(a,b);cA(b,a.c);cA(b,nQ(a,gQ(a)));return a;}
function nQ(e,d){var a,b,c;a=ur(new tr());hz(a,'gwt-diagrams-sources-panel');for(b=AF(d);tF(b);){c=qh(uF(b),12);vr(a,c);}return a;}
function jQ(){}
_=jQ.prototype=new ex();_.tN=uL+'AbstractExample';_.tI=141;function aQ(a){a.a=pH(new nH());}
function bQ(a){lQ(a);aQ(a);a.b=fQ(a);Ak(a.c.gb(),'width','450px');Ak(a.c.gb(),'height','350px');a.B();return a;}
function cQ(b,a){gp(b.c,a);rH(b.a,a);}
function eQ(e,d,c,f,a){var b;b=dv(new bv(),d);hz(b,'example-connector');hp(e.c,b,c,f);wP(e.b,b);if(a!==null){return DO(b,lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',150,33,[a]));}return CO(b);}
function fQ(b){var a;a=uP(new tP(),b.c,true,b);return a;}
function gQ(f){var a,b,c,d,e;e=pH(new nH());b=kE(jg(f),46);a=nE(jg(f),b+1);rH(e,wu(new uu(),a+'.java',''));rH(e,wu(new uu(),'AbstractExample.java',''));rH(e,wu(new uu(),'AbstractConnectionsExample.java',''));for(d=AF(e);tF(d);){c=qh(uF(d),42);hz(c,'gwt-diagrams-source-link');xu(c,DP(new CP(),f,c));}return e;}
function hQ(c){var a,b;for(b=AF(c.a);tF(b);){a=qh(uF(b),39);a.zc();}}
function iQ(){var a,b,c,d,e,f,g,h;a=eQ(this,'all',50,50,null);b=eQ(this,'all',100,100,null);this.x(a,b);c=eQ(this,'up',250,50,(iO(),nO));d=eQ(this,'down',300,100,(iO(),kO));this.x(c,d);e=eQ(this,'left',50,200,(iO(),lO));f=eQ(this,'right',100,250,(iO(),mO));this.x(e,f);g=eQ(this,'left',250,200,(iO(),lO));h=eQ(this,'left',300,250,(iO(),lO));this.x(g,h);}
function sP(){}
_=sP.prototype=new jQ();_.B=iQ;_.tN=uL+'AbstractConnectionsExample';_.tI=142;_.b=null;function vP(){vP=aL;ic();}
function uP(d,a,b,c){vP();hc(d,a,b);return d;}
function wP(a,b){z(a,b);Ak(b.gb(),'position','absolute');Ak(b.gb(),'zIndex','100');}
function xP(c,b,a){return zP(new yP(),b,a,c);}
function tP(){}
_=tP.prototype=new gc();_.tN=uL+'AbstractConnectionsExample$1';_.tI=143;function AP(){AP=aL;vd();}
function zP(d,a,b,c){AP();ud(d,a,b);return d;}
function BP(d,c,b){var a;sc(this,d,c,b);a=BO(c);if(a!==null){aO(a);}}
function yP(){}
_=yP.prototype=new td();_.jc=BP;_.tN=uL+'AbstractConnectionsExample$2';_.tI=144;function DP(b,a,c){b.a=c;return b;}
function FP(a){Bm('../source/'+zu(this.a),'','');}
function CP(){}
_=CP.prototype=new rD();_.Db=FP;_.tN=uL+'AbstractConnectionsExample$3';_.tI=145;function pQ(a){bQ(a);return a;}
function rQ(a,b){cQ(this,jM(new hM(),a,b));}
function oQ(){}
_=oQ.prototype=new sP();_.x=rQ;_.tN=uL+'BezierExample';_.tI=146;function tQ(a){bQ(a);return a;}
function vQ(a,b){cQ(this,rM(new pM(),a,b));}
function sQ(){}
_=sQ.prototype=new sP();_.x=vQ;_.tN=uL+'RectilinearExample';_.tI=147;function xQ(a){bQ(a);return a;}
function zQ(c,a,b){cQ(c,yM(new xM(),a,b));}
function AQ(a,b){zQ(this,a,b);}
function BQ(){var a,b;a=eQ(this,'connector 1',50,50,(iO(),nO));b=eQ(this,'connector 2',200,200,(iO(),kO));zQ(this,a,b);}
function wQ(){}
_=wQ.prototype=new sP();_.x=AQ;_.B=BQ;_.tN=uL+'StraightConnectionsExample';_.tI=148;function hB(){jP(new kP());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{hB();}catch(a){b(d);}else{hB();}}
var xh=[{},{25:1},{1:1,25:1,36:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{9:1,25:1,36:1},{21:1,25:1},{25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{25:1},{14:1,25:1},{14:1,25:1},{11:1,14:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{13:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1},{18:1,25:1},{18:1,25:1},{18:1,25:1},{25:1},{13:1,17:1,25:1},{13:1,25:1},{19:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1,26:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{2:1,12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1,29:1},{25:1,29:1},{25:1,29:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,21:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{5:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{3:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1,42:1},{25:1,29:1},{2:1,12:1,22:1,24:1,25:1,26:1,27:1},{19:1,25:1},{25:1},{12:1,20:1,25:1,26:1,27:1},{25:1,29:1},{12:1,23:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,20:1,25:1,26:1,27:1},{4:1,12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1,28:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{10:1,14:1,25:1},{25:1},{25:1,30:1},{25:1,31:1},{25:1,31:1},{25:1},{25:1},{25:1},{25:1},{25:1,30:1},{25:1,37:1},{25:1,31:1},{25:1},{25:1,31:1},{10:1,14:1,25:1},{25:1},{25:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{25:1},{25:1},{25:1},{25:1},{25:1,38:1},{25:1,32:1},{25:1,35:1},{25:1,33:1},{25:1,35:1,40:1},{25:1,35:1,40:1},{25:1},{25:1},{15:1,25:1},{25:1},{23:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{7:1,25:1},{20:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{8:1,25:1},{25:1},{25:1},{25:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();