(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,mL='com.allen_sauer.gwt.dragdrop.client.',nL='com.allen_sauer.gwt.dragdrop.client.drop.',oL='com.allen_sauer.gwt.dragdrop.client.util.',pL='com.allen_sauer.gwt.dragdrop.client.util.impl.',qL='com.google.gwt.core.client.',rL='com.google.gwt.lang.',sL='com.google.gwt.user.client.',tL='com.google.gwt.user.client.impl.',uL='com.google.gwt.user.client.ui.',vL='com.google.gwt.user.client.ui.impl.',wL='java.io.',xL='java.lang.',yL='java.util.',zL='pl.balon.gwt.diagrams.client.common.bezier.',AL='pl.balon.gwt.diagrams.client.connection.',BL='pl.balon.gwt.diagrams.client.connection.calculator.',CL='pl.balon.gwt.diagrams.client.connection.data.',DL='pl.balon.gwt.diagrams.client.connector.',EL='pl.balon.gwt.diagramsexample.client.',FL='pl.balon.gwt.diagramsexample.client.examples.';function lL(){}
function ED(a){return this===a;}
function FD(){return iF(this);}
function aE(){return this.tN+'@'+this.hC();}
function CD(){}
_=CD.prototype={};_.eQ=ED;_.hC=FD;_.tS=aE;_.toString=function(){return this.tS();};_.tN=xL+'Object';_.tI=1;function bJ(b,a){b.d=a;return b;}
function aJ(){}
_=aJ.prototype=new CD();_.tN=yL+'EventObject';_.tI=3;_.d=null;function ib(c,b,a){bJ(c,b);c.c=a;return c;}
function kb(){var a;a=this.c!==null?'dropTarget='+hf(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+hf(this.d)+')';}
function hb(){}
_=hb.prototype=new aJ();_.tS=kb;_.tN=mL+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ib(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new hb();_.tS=q;_.tN=mL+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function u(){u=lL;F=FJ(new dJ());}
function s(a){a.g=x(a);}
function t(c,b,a){u();s(c);c.f=b!==null?b:bx();c.e=cQ(c,c.f,a);B(c,c.e);c.l=Bb(new zb(),c);return c;}
function v(c,a,b){oz(a,'dragdrop-dragging');}
function w(b,a){xb(b.g,b.f,a);iz(a,'dragdrop-dragging');}
function x(a){return sb(new lb());}
function y(b,c){var a;a=vb(b.g,c,b.f);return a!==null?a:b.e;}
function z(a,b){{A(a,b,b);}}
function A(c,b,a){Fb(c.l,b,a);iz(b,'dragdrop-draggable');iz(a,'dragdrop-handle');gK(F,b,a);}
function B(b,a){tb(b.g,a);}
function C(b,a){if(th(b.j,2)){ip(sh(b.j,2),a,b.k.a,b.k.d);}else if(th(b.j,3)){ru(sh(b.j,3),a,b.h);}else if(th(b.j,4)){gA(sh(b.j,4),a,b.h);}else if(th(b.j,5)){yr(sh(b.j,5),a,b.h);}else if(th(b.j,6)){sh(b.j,6).yc(a);}else{throw dE(new bE(),'Unable to handle initialDraggableParent '+lg(b.j));}}
function D(b,a){if(b.i!==null&&wE(b.i)!=0){Ck(a.ib(),'margin',b.i);}}
function E(b,a){b.j=a.p;if(th(b.j,2)){b.k=nf(new mf(),a,b.j);}else if(th(b.j,3)){b.h=cq(sh(b.j,3),a);}else if(th(b.j,4)){b.h=cq(sh(b.j,4),a);}else if(th(b.j,5)){b.h=cq(sh(b.j,5),a);}else if(th(b.j,6)){}else{throw dE(new bE(),"Unable to handle 'initialDraggableParent instanceof "+lg(b.j)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.i=lk(a.ib(),'margin');if(b.i!==null&&wE(b.i)!=0){Ck(a.ib(),'margin','0px');}}
function r(){}
_=r.prototype=new CD();_.tN=mL+'AbstractDragController';_.tI=6;_.e=null;_.f=null;_.h=0;_.i=null;_.j=null;_.k=null;_.l=null;var F;function bb(b,a){b.b=a;return b;}
function db(a){if(a.c==0){return;}Cb(a.b,a.d,a.e);a.a=gF()-a.c;a.c=0;}
function eb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=gF();}if(a.a>80){dl(a);}else{db(a);}}
function fb(){db(this);}
function ab(){}
_=ab.prototype=new CD();_.bb=fb;_.tN=mL+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function rb(a){a.a=AH(new yH());}
function sb(a){rb(a);return a;}
function tb(b,a){CH(b.a,a);}
function vb(g,h,a){var b,c,d,e,f,i,j,k;i=kf(new jf(),h,null);j=ge(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(je(f,i)){k=fe(f,j);if(k<=c){if(e===null|| !Ae(pb(b).ib(),pb(e).ib())){c=k;e=b;}}}}return e===null?null:e.a;}
function wb(a){return fG(a.a);}
function xb(h,b,d){var a,c,e,f,g;a=kf(new jf(),b,null);g=AH(new yH());for(f=wb(h);EF(f);){e=sh(FF(f),7);c=nb(new mb(),e);if(!Ae(d.ib(),pb(c).ib())){if(je(c.b,a)){CH(g,c);}}}h.b=sh(gI(g,nh('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',159,9,[])),8);wI(h.b);}
function lb(){}
_=lb.prototype=new CD();_.tN=mL+'DropControllerCollection';_.tI=8;_.b=null;function nb(c,a){var b;c.a=a;b=a.hb();if(!b.wb()){throw yC(new wC(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=kf(new jf(),b,null);return c;}
function pb(a){return a.a.hb();}
function qb(a){var b;b=sh(a,9);return Ae(pb(this).ib(),pb(b).ib())?1:(-1);}
function mb(){}
_=mb.prototype=new CD();_.u=qb;_.tN=mL+'DropControllerCollection$Candidate';_.tI=9;_.a=null;_.b=null;function Ab(a){a.d=bb(new ab(),a);a.f=FJ(new dJ());}
function Bb(b,a){Ab(b);b.e=a;b.a=a.f;return b;}
function Cb(e,f,g){var a,b,c,d;c=nf(new mf(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=jD(0,kD(a,e.l));b=jD(0,kD(b,e.m));}Be(e.o.ib(),a,b);d=y(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.ec(e.g,e.e);}e.i=d;if(e.i!==null){e.i.cc(e.o,e.g,e.e);}}if(e.i!==null){e.i.lc(e.o,e.g,e.e);}}
function Db(b){var a;qk(b.b.ib());b.h=false;if(b.i!==null){b.i.ec(b.g,b.e);}b.i=null;jc(b.e,b.g,null);a=ib(new hb(),b.g,null);}
function Fb(c,b,a){if(a!==null){gv(a,c);gK(c.f,a,b);}else{throw dE(new bE(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function ac(f){var a,c,d,e;f.g=sh(fK(f.f,f.b),12);kc(f.e,f.g);f.o=f.e.d;f.l=Fe(f.a.ib())-f.o.ob();f.m=Ee(f.a.ib())-f.o.nb();e=nf(new mf(),f.b,f.a);c=nf(new mf(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;vk(f.b.ib());f.h=true;try{Cb(f,f.j,f.k);}catch(a){a=Dh(a);if(th(a,10)){d=a;Db(f);throw d;}else throw a;}}
function bc(b,c,d){var a;this.b=b;a=uj((dj(),oj));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Fj((dj(),oj));df();this.j=c;this.k=d;}
function cc(a){}
function dc(a){}
function ec(d,e,f){var a,c;if(!this.h){if(this.n){ac(this);}if(!this.h){return;}}Fj((dj(),oj));try{eb(this.d,e,f);}catch(a){a=Dh(a);if(th(a,10)){c=a;Db(this);throw c;}else throw a;}}
function fc(g,h,i){var a,a,d,e,f;d=uj((dj(),oj));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{qk(this.b.ib());Cb(this,h,i);this.h=false;if(this.i===null){Db(this);return;}{this.i.hb();}try{this.i.mc(this.o,this.g,this.e);}catch(a){a=Dh(a);if(th(a,11)){a;Db(this);return;}else throw a;}jc(this.e,this.g,this.i.hb());e=this.i.bc(this.o,this.g,this.e);}catch(a){a=Dh(a);if(th(a,10)){f=a;Db(this);throw f;}else throw a;}finally{this.i=null;}}
function zb(){}
_=zb.prototype=new CD();_.gc=bc;_.hc=cc;_.ic=dc;_.jc=ec;_.kc=fc;_.tN=mL+'MouseDragHandler';_.tI=10;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ic(){ic=lL;u();}
function hc(c,b,a){ic();t(c,b,a);return c;}
function jc(c,a,b){v(c,a,b);if(c.a!==null){c.a=null;if(c.c!==null){AA(c.c);c.c=null;}else{if(b===null){C(c,a);}}D(c,a);AA(c.d);c.d=null;}}
function kc(d,a){var b,c;w(d,a);d.a=a;d.c=lc(d,a);E(d,a);c=nf(new mf(),a,d.f);d.d=mx(new fx());iz(d.d,'dragdrop-movable-panel');if(d.c===null){rz(d.d,a.ob(),a.nb());}ip(d.f,d.d,c.a,c.d);b=d.c!==null?d.c:d.a;d.d.yc(b);}
function lc(c,a){var b;if(c.b){b=vt(new zr(),'this is a Drag Proxy');iz(b,'dragdrop-proxy');rz(b,c.a.ob(),c.a.nb());return b;}else{return null;}}
function gc(){}
_=gc.prototype=new r();_.tN=mL+'PickupDragController';_.tI=11;_.a=null;_.b=false;_.c=null;_.d=null;function Bc(b,a){b.g=a;iz(a,'dragdrop-boundary');return b;}
function Dc(d,c,b,a){oz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.zb(c,b,a);}
function Ec(d,c,b,a){iz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Fc(c,b,a){oz(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function ad(){return this.g;}
function bd(c,b,a){return ib(new hb(),b,this.g);}
function cd(c,b,a){return Dc(this,c,b,a);}
function dd(c,b,a){Ec(this,c,b,a);}
function ed(b,a){Fc(this,b,a);}
function fd(c,b,a){}
function gd(c,b,a){}
function Ac(){}
_=Ac.prototype=new CD();_.hb=ad;_.zb=bd;_.bc=cd;_.cc=dd;_.ec=ed;_.lc=fd;_.mc=gd;_.tN=nL+'AbstractDropController';_.tI=12;_.g=null;function jd(){jd=lL;pd=ev(new cv(),'x');}
function id(b,a){jd();Bc(b,a);return b;}
function kd(f,e){var a,b,c,d;d=mx(new fx());iz(d,'dragdrop-positioner');ip(bx(),d,(-500),(-500));d.yc(pd);a=mx(new fx());c=e.ob()-af(d);b=e.nb()-bf(d);rz(a,c,b);d.yc(a);return d;}
function ld(e,d,b,a){var c;c=Dc(e,d,b,a);od(e);return c;}
function md(d,c,b,a){Ec(d,c,b,a);d.f=kd(d,b);}
function nd(c,b,a){Fc(c,b,a);od(c);}
function od(a){if(a.f!==null){AA(a.f);}}
function qd(c,b,a){return ld(this,c,b,a);}
function rd(c,b,a){md(this,c,b,a);}
function sd(b,a){nd(this,b,a);}
function hd(){}
_=hd.prototype=new Ac();_.bc=qd;_.cc=rd;_.ec=sd;_.tN=nL+'AbstractPositioningDropController';_.tI=13;_.f=null;var pd;function oc(){oc=lL;jd();}
function nc(b,a){oc();id(b,a);b.d=Bd(new Ad(),a);return b;}
function pc(d,c,a,e){var b;b=d.eb(c,a,e);if(b!==null){ip(d.d.b,e,b.a,b.d);}}
function qc(e,d,b,a){var c;ip(e.d.b,b,e.c.a,e.c.d);c=ld(e,d,b,a);e.e=null;return c;}
function rc(c,b,a){nd(c,b,a);Fd(c.d,null);c.e=null;}
function sc(d,c,b,a){pc(d,c,b,d.f);}
function tc(b,a,d){var c;c=kf(new jf(),b,this.d.a);if(this.e===null){this.e=nf(new mf(),b,this.d.b);}else{tf(this.e,b);}pf(this.e,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.e;}
function uc(e,b,a){var c,d;c=this.g;d=nf(new mf(),b,c);return o(new n(),b,c,d.a,d.d);}
function vc(c,b,a){return qc(this,c,b,a);}
function wc(c,b,a){md(this,c,b,a);Fd(this.d,a.f);}
function xc(b,a){rc(this,b,a);}
function yc(c,b,a){sc(this,c,b,a);}
function zc(c,b,a){this.c=this.eb(c,b,b);if(this.c===null){throw be(new ae());}}
function mc(){}
_=mc.prototype=new hd();_.eb=tc;_.zb=uc;_.bc=vc;_.cc=wc;_.ec=xc;_.lc=yc;_.mc=zc;_.tN=nL+'AbsolutePositionDropController';_.tI=14;_.c=null;_.d=null;_.e=null;function vd(){vd=lL;oc();}
function ud(c,b,a){vd();nc(c,b);c.a=a;return c;}
function wd(b,a,d){var c;if(this.a){c=kf(new jf(),b,this.d.a);if(this.b===null){this.b=nf(new mf(),b,this.d.b);}else{tf(this.b,b);}pf(this.b,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.b;}else{return null;}}
function xd(d,c,a){var b;b=qc(this,d,c,a);this.b=null;return b;}
function yd(b,a){rc(this,b,a);this.b=null;}
function td(){}
_=td.prototype=new mc();_.eb=wd;_.bc=xd;_.ec=yd;_.tN=nL+'BoundaryDropController';_.tI=15;_.a=false;_.b=null;function Bd(b,a){b.b=a;return b;}
function Dd(a){return Ee(a.b.ib());}
function Ed(a){return Fe(a.b.ib());}
function Fd(b,a){b.a=a;}
function Ad(){}
_=Ad.prototype=new CD();_.tN=nL+'DropTargetInfo';_.tI=16;_.a=null;_.b=null;function nF(){nF=lL;pF=mh('[Ljava.lang.StackTraceElement;',[156],[34],[0],null);}
function kF(a){a.c=pF;}
function lF(a){nF();kF(a);return a;}
function mF(b,a){nF();kF(b);b.b=a;return b;}
function oF(c){var a,b;a=lg(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function qF(){return oF(this);}
function jF(){}
_=jF.prototype=new CD();_.tS=qF;_.tN=xL+'Throwable';_.tI=17;_.a=null;_.b=null;var pF;function sC(){sC=lL;nF();}
function qC(a){sC();lF(a);return a;}
function rC(b,a){sC();mF(b,a);return b;}
function pC(){}
_=pC.prototype=new jF();_.tN=xL+'Exception';_.tI=18;function ce(){ce=lL;sC();}
function be(a){ce();qC(a);return a;}
function ae(){}
_=ae.prototype=new pC();_.tN=nL+'VetoDropException';_.tI=19;function fe(b,a){var c,d;c=jD(b.b-a.a,a.a-b.c);d=jD(b.d-a.b,a.b-b.a);return jD(c,d);}
function ge(a){return ue(new te(),a.b+wh(ie(a)/2),a.d+wh(he(a)/2));}
function he(a){return a.a-a.d;}
function ie(a){return a.c-a.b;}
function je(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function ke(b,a){b.a=a;}
function le(b,a){b.b=a;}
function me(b,a){b.c=a;}
function ne(a,b){a.d=b;}
function oe(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function de(){}
_=de.prototype=new CD();_.tS=oe;_.tN=oL+'AbstractArea';_.tI=20;_.a=0;_.b=0;_.c=0;_.d=0;function re(){return '('+this.mb()+', '+this.qb()+')';}
function pe(){}
_=pe.prototype=new CD();_.tS=re;_.tN=oL+'AbstractLocation';_.tI=21;function ue(b,a,c){b.a=a;b.b=c;return b;}
function we(){return this.a;}
function xe(){return this.b;}
function te(){}
_=te.prototype=new pe();_.mb=we;_.qb=xe;_.tN=oL+'CoordinateLocation';_.tI=22;_.a=0;_.b=0;function ze(){ze=lL;{cf=new zf();}}
function Ae(b,a){ze();return Cf(cf,b,a);}
function Be(a,b,c){ze();a.style.left=b+'px';a.style.top=c+'px';}
function Ce(a){ze();return Ff(cf,a);}
function De(a){ze();return ag(cf,a);}
function Ee(a){ze();return bg(cf,a);}
function Fe(a){ze();return cg(cf,a);}
function af(a){ze();return fg(cf,a);}
function bf(a){ze();return gg(cf,a);}
function df(){ze();dg(cf);}
var cf=null;function hf(a){var b;b=lg(a);return yE(b,vE(b,46)+1);}
function kf(e,g,c){var a,b,d,f;b=kz(g);f=lz(g);if(c!==null){b-=kz(c);b-=Ce(c.ib());f-=lz(c);f-=De(c.ib());}d=b+g.ob();a=f+g.nb();le(e,b);ne(e,f);me(e,d);ke(e,a);return e;}
function jf(){}
_=jf.prototype=new de();_.tN=oL+'WidgetArea';_.tI=23;function nf(b,c,a){rf(b,c);qf(b,a);sf(b);return b;}
function pf(e,c,d,a,b){e.a=jD(c,kD(e.a,a));e.d=jD(d,kD(e.d,b));}
function qf(b,a){if(a===null||a===bx()){b.b=0;b.c=0;}else{b.b=kz(a)+Ce(a.ib());b.c=lz(a)+De(a.ib());}}
function rf(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=kz(b);a.f=lz(b);}}
function sf(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function tf(a,b){rf(a,b);sf(a);}
function uf(){return this.a;}
function vf(){return this.d;}
function wf(){return '('+this.a+', '+this.d+')';}
function mf(){}
_=mf.prototype=new pe();_.mb=uf;_.qb=vf;_.tS=wf;_.tN=oL+'WidgetLocation';_.tI=24;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function fg(a,b){return b.ob()-cg(a,b.ib());}
function gg(a,b){return b.nb()-bg(a,b.ib());}
function xf(){}
_=xf.prototype=new CD();_.tN=pL+'DOMUtilImpl';_.tI=25;function Ff(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function ag(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function bg(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function cg(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function dg(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function Df(){}
_=Df.prototype=new xf();_.tN=pL+'DOMUtilImplStandard';_.tI=26;function Cf(c,b,a){return !(!(b.compareDocumentPosition(a)&16));}
function yf(){}
_=yf.prototype=new Df();_.tN=pL+'DOMUtilImplMozilla';_.tI=27;function zf(){}
_=zf.prototype=new yf();_.tN=pL+'DOMUtilImplMozillaOld';_.tI=28;function lg(a){return a==null?null:a.tN;}
function ng(a){mg=a;}
var mg=null;function qg(a){return a==null?0:a.$H?a.$H:(a.$H=sg());}
function rg(a){return a==null?0:a.$H?a.$H:(a.$H=sg());}
function sg(){return ++tg;}
var tg=0;function eE(){eE=lL;sC();}
function cE(a){eE();qC(a);return a;}
function dE(b,a){eE();rC(b,a);return b;}
function bE(){}
_=bE.prototype=new pC();_.tN=xL+'RuntimeException';_.tI=29;function wg(){wg=lL;eE();}
function vg(c,b,a){wg();dE(c,'JavaScript '+b+' exception: '+a);return c;}
function ug(){}
_=ug.prototype=new bE();_.tN=qL+'JavaScriptException';_.tI=30;function zg(b,a){if(!th(a,13)){return false;}return Dg(b,sh(a,13));}
function Ag(a){return qg(a);}
function Bg(){return [];}
function Cg(){return {};}
function Eg(a){return zg(this,a);}
function Dg(a,b){return a===b;}
function Fg(){return Ag(this);}
function bh(){return ah(this);}
function ah(a){if(a.toString)return a.toString();return '[object]';}
function xg(){}
_=xg.prototype=new CD();_.eQ=Eg;_.hC=Fg;_.tS=bh;_.tN=qL+'JavaScriptObject';_.tI=31;function dh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function fh(a,b,c){return a[b]=c;}
function hh(a,b){return gh(a,b);}
function gh(a,b){return dh(new ch(),b,a.tI,a.b,a.tN);}
function ih(b,a){return b[a];}
function kh(b,a){return b[a];}
function jh(a){return a.length;}
function mh(e,d,c,b,a){return lh(e,d,c,b,0,jh(b),a);}
function lh(j,i,g,c,e,a,b){var d,f,h;if((f=ih(c,e))<0){throw nD(new mD());}h=dh(new ch(),f,ih(i,e),ih(g,e),j);++e;if(e<a){j=yE(j,1);for(d=0;d<f;++d){fh(h,d,lh(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){fh(h,d,b);}}return h;}
function nh(f,e,c,g){var a,b,d;b=jh(g);d=dh(new ch(),b,e,c,f);for(a=0;a<b;++a){fh(d,a,kh(g,a));}return d;}
function oh(a,b,c){if(c!==null&&a.b!=0&& !th(c,a.b)){throw AB(new zB());}return fh(a,b,c);}
function ch(){}
_=ch.prototype=new CD();_.tN=rL+'Array';_.tI=32;function rh(b,a){return !(!(b&&zh[b][a]));}
function sh(b,a){if(b!=null)rh(b.tI,a)||yh();return b;}
function th(b,a){return b!=null&&rh(b.tI,a);}
function uh(a){return a&65535;}
function vh(a){return ~(~a);}
function wh(a){if(a>(FC(),aD))return FC(),aD;if(a<(FC(),bD))return FC(),bD;return a>=0?Math.floor(a):Math.ceil(a);}
function yh(){throw kC(new jC());}
function xh(a){if(a!==null){throw kC(new jC());}return a;}
function Ah(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var zh;function Dh(a){if(th(a,14)){return a;}return vg(new ug(),Fh(a),Eh(a));}
function Eh(a){return a.message;}
function Fh(a){return a.name;}
function ci(){ci=lL;eE();}
function bi(b,a){ci();cE(b);return b;}
function ai(){}
_=ai.prototype=new bE();_.tN=sL+'CommandCanceledException';_.tI=35;function xi(a){a.a=fi(new ei(),a);a.b=AH(new yH());a.d=ji(new ii(),a);a.f=ni(new mi(),a);}
function yi(a){xi(a);return a;}
function Ai(c){var a,b,d;a=pi(c.f);si(c.f);b=null;if(th(a,15)){b=bi(new ai(),sh(a,15));}else{}if(b!==null){d=mg;if(d!==null){nP(d,b);}}Di(c,false);Ci(c);}
function Bi(e,d){var a,b,c,f;f=false;try{Di(e,true);ti(e.f,e.b.b);dm(e.a,10000);while(qi(e.f)){b=ri(e.f);c=true;try{if(b===null){return;}if(th(b,15)){a=sh(b,15);a.bb();}else{}}finally{f=ui(e.f);if(f){return;}if(c){si(e.f);}}if(aj(gF(),d)){return;}}}finally{if(!f){Fl(e.a);Di(e,false);Ci(e);}}}
function Ci(a){if(!cI(a.b)&& !a.e&& !a.c){Ei(a,true);dm(a.d,1);}}
function Di(b,a){b.c=a;}
function Ei(b,a){b.e=a;}
function Fi(b,a){CH(b.b,a);Ci(b);}
function aj(a,b){return iD(a-b)>=100;}
function di(){}
_=di.prototype=new CD();_.tN=sL+'CommandExecutor';_.tI=36;_.c=false;_.e=false;function am(){am=lL;jm=AH(new yH());{im();}}
function El(a){am();return a;}
function Fl(a){if(a.b){em(a.c);}else{fm(a.c);}eI(jm,a);}
function bm(e,d){var a,c;try{cm(e);}catch(a){a=Dh(a);if(th(a,14)){c=a;nP(d,c);}else throw a;}}
function cm(a){if(!a.b){eI(jm,a);}a.uc();}
function dm(b,a){if(a<=0){throw uC(new tC(),'must be positive');}Fl(b);b.b=false;b.c=gm(b,a);CH(jm,b);}
function em(a){am();$wnd.clearInterval(a);}
function fm(a){am();$wnd.clearTimeout(a);}
function gm(b,a){am();return $wnd.setTimeout(function(){b.cb();},a);}
function hm(){var a;a=mg;if(a!==null){bm(this,a);}else{cm(this);}}
function im(){am();nm(new Al());}
function zl(){}
_=zl.prototype=new CD();_.cb=hm;_.tN=sL+'Timer';_.tI=37;_.b=false;_.c=0;var jm;function gi(){gi=lL;am();}
function fi(b,a){gi();b.a=a;El(b);return b;}
function hi(){if(!this.a.c){return;}Ai(this.a);}
function ei(){}
_=ei.prototype=new zl();_.uc=hi;_.tN=sL+'CommandExecutor$1';_.tI=38;function ki(){ki=lL;am();}
function ji(b,a){ki();b.a=a;El(b);return b;}
function li(){Ei(this.a,false);Bi(this.a,gF());}
function ii(){}
_=ii.prototype=new zl();_.uc=li;_.tN=sL+'CommandExecutor$2';_.tI=39;function ni(b,a){b.d=a;return b;}
function pi(a){return FH(a.d.b,a.b);}
function qi(a){return a.c<a.a;}
function ri(b){var a;b.b=b.c;a=FH(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function si(a){dI(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function ti(b,a){b.a=a;}
function ui(a){return a.b==(-1);}
function vi(){return qi(this);}
function wi(){return ri(this);}
function mi(){}
_=mi.prototype=new CD();_.vb=vi;_.Ab=wi;_.tN=sL+'CommandExecutor$CircularIterator';_.tI=40;_.a=0;_.b=(-1);_.c=0;function dj(){dj=lL;uk=AH(new yH());{mk=new bn();kn(mk);}}
function ej(a){dj();CH(uk,a);}
function fj(b,a){dj();Dn(mk,b,a);}
function gj(a,b){dj();return gn(mk,a,b);}
function hj(){dj();return Fn(mk,'A');}
function ij(){dj();return Fn(mk,'div');}
function jj(a){dj();return Fn(mk,a);}
function kj(){dj();return Fn(mk,'tbody');}
function lj(){dj();return Fn(mk,'td');}
function mj(){dj();return Fn(mk,'tr');}
function nj(){dj();return Fn(mk,'table');}
function rj(b,a,d){dj();var c;c=mg;if(c!==null){pj(b,a,d,c);}else{qj(b,a,d);}}
function pj(e,d,g,f){dj();var a,c;try{qj(e,d,g);}catch(a){a=Dh(a);if(th(a,14)){c=a;nP(f,c);}else throw a;}}
function qj(b,a,c){dj();var d;if(a===tk){if(Ej(b)==8192){tk=null;}}d=oj;oj=b;try{c.Eb(b);}finally{oj=d;}}
function sj(b,a){dj();ao(mk,b,a);}
function tj(a){dj();return bo(mk,a);}
function uj(a){dj();return hn(mk,a);}
function vj(a){dj();return co(mk,a);}
function wj(a){dj();return eo(mk,a);}
function xj(a){dj();return fo(mk,a);}
function yj(a){dj();return sn(mk,a);}
function zj(a){dj();return go(mk,a);}
function Aj(a){dj();return ho(mk,a);}
function Bj(a){dj();return io(mk,a);}
function Cj(a){dj();return tn(mk,a);}
function Dj(a){dj();return un(mk,a);}
function Ej(a){dj();return jo(mk,a);}
function Fj(a){dj();vn(mk,a);}
function ak(a){dj();return wn(mk,a);}
function bk(a){dj();return dn(mk,a);}
function ck(a){dj();return en(mk,a);}
function dk(b,a){dj();return ko(mk,b,a);}
function ek(a){dj();return lo(mk,a);}
function gk(a,b){dj();return no(mk,a,b);}
function fk(a,b){dj();return mo(mk,a,b);}
function hk(a){dj();return oo(mk,a);}
function ik(a){dj();return xn(mk,a);}
function jk(a){dj();return po(mk,a);}
function kk(a){dj();return yn(mk,a);}
function lk(b,a){dj();return qo(mk,b,a);}
function nk(c,a,b){dj();An(mk,c,a,b);}
function ok(b,a){dj();return ln(mk,b,a);}
function pk(a){dj();var b,c;c=true;if(uk.b>0){b=sh(FH(uk,uk.b-1),16);if(!(c=b.dc(a))){sj(a,true);Fj(a);}}return c;}
function qk(a){dj();if(tk!==null&&gj(a,tk)){tk=null;}mn(mk,a);}
function rk(b,a){dj();ro(mk,b,a);}
function sk(a){dj();eI(uk,a);}
function vk(a){dj();tk=a;Bn(mk,a);}
function wk(b,a,c){dj();so(mk,b,a,c);}
function yk(a,b,c){dj();uo(mk,a,b,c);}
function xk(a,b,c){dj();to(mk,a,b,c);}
function zk(a,b){dj();vo(mk,a,b);}
function Ak(a,b){dj();wo(mk,a,b);}
function Bk(a,b){dj();xo(mk,a,b);}
function Ck(b,a,c){dj();yo(mk,b,a,c);}
function Dk(a,b){dj();on(mk,a,b);}
function Ek(a){dj();return pn(mk,a);}
function Fk(){dj();return zo(mk);}
function al(){dj();return Ao(mk);}
var oj=null,mk=null,tk=null,uk;function cl(){cl=lL;el=yi(new di());}
function dl(a){cl();if(a===null){throw qD(new pD(),'cmd can not be null');}Fi(el,a);}
var el;function hl(a){if(th(a,17)){return gj(this,sh(a,17));}return zg(Ah(this,fl),a);}
function il(){return Ag(Ah(this,fl));}
function jl(){return Ek(this);}
function fl(){}
_=fl.prototype=new xg();_.eQ=hl;_.hC=il;_.tS=jl;_.tN=sL+'Element';_.tI=41;function ol(a){return zg(Ah(this,kl),a);}
function pl(){return Ag(Ah(this,kl));}
function ql(){return ak(this);}
function kl(){}
_=kl.prototype=new xg();_.eQ=ol;_.hC=pl;_.tS=ql;_.tN=sL+'Event';_.tI=42;function sl(){sl=lL;vl=AH(new yH());{wl=new Do();if(!cp(wl)){wl=null;}}}
function tl(e,d){sl();var a,c;try{ul(e);}catch(a){a=Dh(a);if(th(a,14)){c=a;nP(d,c);}else throw a;}}
function ul(a){sl();var b,c;for(b=fG(vl);EF(b);){c=xh(FF(b));null.Ec();}}
function xl(a){sl();if(wl!==null){Fo(wl,a);}}
function yl(b){sl();var a;a=mg;if(a!==null){tl(b,a);}else{ul(b);}}
var vl,wl=null;function Cl(){while((am(),jm).b>0){Fl(sh(FH((am(),jm),0),18));}}
function Dl(){return null;}
function Al(){}
_=Al.prototype=new CD();_.pc=Cl;_.qc=Dl;_.tN=sL+'Timer$1';_.tI=43;function mm(){mm=lL;om=AH(new yH());Em=AH(new yH());{zm();}}
function nm(a){mm();CH(om,a);}
function pm(d){mm();var a,c;try{qm();}catch(a){a=Dh(a);if(th(a,14)){c=a;nP(d,c);}else throw a;}}
function qm(){mm();var a,b;for(a=fG(om);EF(a);){b=sh(FF(a),19);b.pc();}}
function rm(d){mm();var a,c;try{return sm();}catch(a){a=Dh(a);if(th(a,14)){c=a;nP(d,c);return null;}else throw a;}}
function sm(){mm();var a,b,c,d;d=null;for(a=fG(om);EF(a);){b=sh(FF(a),19);c=b.qc();{d=c;}}return d;}
function tm(d){mm();var a,c;try{um();}catch(a){a=Dh(a);if(th(a,14)){c=a;nP(d,c);}else throw a;}}
function um(){mm();var a,b;for(a=fG(Em);EF(a);){b=xh(FF(a));null.Ec();}}
function vm(){mm();return Fk();}
function wm(){mm();return al();}
function xm(){mm();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function ym(){mm();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function zm(){mm();__gwt_initHandlers(function(){Cm();},function(){return Bm();},function(){Am();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Am(){mm();var a;a=mg;if(a!==null){pm(a);}else{qm();}}
function Bm(){mm();var a;a=mg;if(a!==null){return rm(a);}else{return sm();}}
function Cm(){mm();var a;a=mg;if(a!==null){tm(a);}else{um();}}
function Dm(c,b,a){mm();$wnd.open(c,b,a);}
var om,Em;function Dn(c,b,a){b.appendChild(a);}
function Fn(b,a){return $doc.createElement(a);}
function ao(c,b,a){b.cancelBubble=a;}
function bo(b,a){return !(!a.altKey);}
function co(b,a){return a.clientX|| -1;}
function eo(b,a){return a.clientY|| -1;}
function fo(b,a){return !(!a.ctrlKey);}
function go(b,a){return a.which||(a.keyCode|| -1);}
function ho(b,a){return !(!a.metaKey);}
function io(b,a){return !(!a.shiftKey);}
function jo(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ko(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function lo(c,b){var a=$doc.getElementById(b);return a||null;}
function no(d,a,b){var c=a[b];return c==null?null:String(c);}
function mo(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function oo(b,a){return a.__eventBits||0;}
function po(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.kb(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function qo(d,b,a){var c=b.style[a];return c==null?null:c;}
function ro(c,b,a){b.removeChild(a);}
function so(c,b,a,d){b.setAttribute(a,d);}
function uo(c,a,b,d){a[b]=d;}
function to(c,a,b,d){a[b]=d;}
function vo(c,a,b){a.__listener=b;}
function wo(c,a,b){if(!b){b='';}a.innerHTML=b;}
function xo(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function yo(c,b,a,d){b.style[a]=d;}
function zo(a){return $doc.body.clientHeight;}
function Ao(a){return $doc.body.clientWidth;}
function Bo(a){return po(this,a);}
function Fm(){}
_=Fm.prototype=new CD();_.kb=Bo;_.tN=tL+'DOMImpl';_.tI=44;function sn(b,a){return a.relatedTarget?a.relatedTarget:null;}
function tn(b,a){return a.target||null;}
function un(b,a){return a.relatedTarget||null;}
function vn(b,a){a.preventDefault();}
function wn(b,a){return a.toString();}
function xn(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function yn(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function zn(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){rj(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!pk(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)rj(b,a,c);};$wnd.__captureElem=null;}
function An(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function Bn(b,a){$wnd.__captureElem=a;}
function Cn(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function qn(){}
_=qn.prototype=new Fm();_.tN=tL+'DOMImplStandard';_.tI=45;function gn(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function hn(c,b){var a=b.button;if(a==0){return 1;}else if(a==1){return 4;}return a|| -1;}
function kn(a){zn(a);jn(a);}
function jn(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function ln(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function mn(b,a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function on(c,b,a){Cn(c,b,a);nn(c,b,a);}
function nn(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function pn(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function an(){}
_=an.prototype=new qn();_.tN=tL+'DOMImplMozilla';_.tI=46;function dn(e,a){var d=$doc.defaultView.getComputedStyle(a,null);var b=$doc.getBoxObjectFor(a).x-Math.round(d.getPropertyCSSValue('border-left-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var c=a.parentNode;while(c){if(c.scrollLeft>0){b-=c.scrollLeft;}c=c.parentNode;}return b+$doc.body.scrollLeft+$doc.documentElement.scrollLeft;}
function en(d,a){var c=$doc.defaultView.getComputedStyle(a,null);var e=$doc.getBoxObjectFor(a).y-Math.round(c.getPropertyCSSValue('border-top-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var b=a.parentNode;while(b){if(b.scrollTop>0){e-=b.scrollTop;}b=b.parentNode;}return e+$doc.body.scrollTop+$doc.documentElement.scrollTop;}
function bn(){}
_=bn.prototype=new an();_.tN=tL+'DOMImplMozillaOld';_.tI=47;function ep(a){yl(a);}
function Co(){}
_=Co.prototype=new CD();_.tN=tL+'HistoryImpl';_.tI=48;function cp(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;ep(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function ap(){}
_=ap.prototype=new Co();_.tN=tL+'HistoryImplStandard';_.tI=49;function Fo(d,a){if(a==null||a.length==0){var c=$wnd.location.href;var b=c.indexOf('#');if(b!= -1)c=c.substring(0,b);$wnd.location=c+'#';}else{$wnd.location.hash=encodeURIComponent(a);}}
function Do(){}
_=Do.prototype=new ap();_.tN=tL+'HistoryImplMozilla';_.tI=50;function iz(b,a){Bz(b.pb(),a,true);}
function kz(a){return bk(a.ib());}
function lz(a){return ck(a.ib());}
function mz(a){return fk(a.q,'offsetHeight');}
function nz(a){return fk(a.q,'offsetWidth');}
function oz(b,a){Bz(b.pb(),a,false);}
function pz(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function qz(b,a){if(b.q!==null){pz(b,b.q,a);}b.q=a;}
function rz(b,c,a){if(c>=0){b.zc(c+'px');}if(a>=0){b.vc(a+'px');}}
function sz(b,a){Az(b.pb(),a);}
function tz(b,a){Dk(b.ib(),a|hk(b.ib()));}
function uz(){return this.q;}
function vz(){return mz(this);}
function wz(){return nz(this);}
function xz(){return this.q;}
function yz(a){return gk(a,'className');}
function zz(a){Ck(this.q,'height',a);}
function Az(a,b){yk(a,'className',b);}
function Bz(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw dE(new bE(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=AE(j);if(wE(j)==0){throw uC(new tC(),'Style names cannot be empty');}i=yz(c);e=tE(i,j);while(e!=(-1)){if(e==0||pE(i,e-1)==32){f=e+wE(j);g=wE(i);if(f==g||f<g&&pE(i,f)==32){break;}}e=uE(i,j,e+1);}if(a){if(e==(-1)){if(wE(i)>0){i+=' ';}yk(c,'className',i+j);}}else{if(e!=(-1)){b=AE(zE(i,0,e));d=AE(yE(i,e+wE(j)));if(wE(b)==0){h=d;}else if(wE(d)==0){h=b;}else{h=b+' '+d;}yk(c,'className',h);}}}
function Cz(a,b){a.style.display=b?'':'none';}
function Dz(a){Cz(this.q,a);}
function Ez(a){Ck(this.q,'width',a);}
function Fz(){if(this.q===null){return '(null handle)';}return Ek(this.q);}
function hz(){}
_=hz.prototype=new CD();_.ib=uz;_.nb=vz;_.ob=wz;_.pb=xz;_.vc=zz;_.xc=Dz;_.zc=Ez;_.tS=Fz;_.tN=uL+'UIObject';_.tI=51;_.q=null;function zA(a){if(!a.wb()){throw yC(new wC(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.oc();}finally{a.F();zk(a.ib(),null);a.o=false;}}
function AA(a){if(th(a.p,24)){sh(a.p,24).tc(a);}else if(a.p!==null){throw yC(new wC(),"This widget's parent does not implement HasWidgets");}}
function BA(b,a){if(b.wb()){zk(b.ib(),null);}qz(b,a);if(b.wb()){zk(a,b);}}
function CA(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.wb()){c.ac();}c.p=null;}else{if(a!==null){throw yC(new wC(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.wb()){c.Cb();}}}
function DA(){}
function EA(){}
function FA(){return this.o;}
function aB(){if(this.wb()){throw yC(new wC(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;zk(this.ib(),this);this.E();this.fc();}
function bB(a){}
function cB(){zA(this);}
function dB(){}
function eB(){}
function iA(){}
_=iA.prototype=new hz();_.E=DA;_.F=EA;_.wb=FA;_.Cb=aB;_.Eb=bB;_.ac=cB;_.fc=dB;_.oc=eB;_.tN=uL+'Widget';_.tI=52;_.o=false;_.p=null;function wv(b,a){CA(a,b);}
function yv(b,a){CA(a,null);}
function zv(){var a,b;for(b=this.xb();b.vb();){a=sh(b.Ab(),12);a.Cb();}}
function Av(){var a,b;for(b=this.xb();b.vb();){a=sh(b.Ab(),12);a.ac();}}
function Bv(){}
function Cv(){}
function vv(){}
_=vv.prototype=new iA();_.E=zv;_.F=Av;_.fc=Bv;_.oc=Cv;_.tN=uL+'Panel';_.tI=53;function Bp(a){a.f=pA(new jA(),a);}
function Cp(a){Bp(a);return a;}
function Dp(c,a,b){AA(a);qA(c.f,a);fj(b,a.ib());wv(c,a);}
function Ep(d,b,a){var c;aq(d,a);if(b.p===d){c=cq(d,b);if(c<a){a--;}}return a;}
function Fp(b,a){if(a<0||a>=b.f.b){throw BC(new AC());}}
function aq(b,a){if(a<0||a>b.f.b){throw BC(new AC());}}
function dq(b,a){return sA(b.f,a);}
function cq(b,a){return tA(b.f,a);}
function eq(e,b,c,a,d){a=Ep(e,b,a);AA(b);uA(e.f,b,a);if(d){nk(c,b.ib(),a);}else{fj(c,b.ib());}wv(e,b);}
function fq(a){return vA(a.f);}
function gq(b,c){var a;if(c.p!==b){return false;}yv(b,c);a=c.ib();rk(kk(a),a);xA(b.f,c);return true;}
function hq(){return fq(this);}
function iq(a){return gq(this,a);}
function Ap(){}
_=Ap.prototype=new vv();_.xb=hq;_.tc=iq;_.tN=uL+'ComplexPanel';_.tI=54;function gp(a){Cp(a);BA(a,ij());Ck(a.ib(),'position','relative');Ck(a.ib(),'overflow','hidden');return a;}
function hp(a,b){Dp(a,b,a.ib());}
function ip(b,d,a,c){AA(d);lp(b,d,a,c);hp(b,d);}
function kp(b,c){var a;a=gq(b,c);if(a){mp(c.ib());}return a;}
function lp(c,e,b,d){var a;a=e.ib();if(b==(-1)&&d==(-1)){mp(a);}else{Ck(a,'position','absolute');Ck(a,'left',b+'px');Ck(a,'top',d+'px');}}
function mp(a){Ck(a,'left','');Ck(a,'top','');Ck(a,'position','');}
function np(a){return kp(this,a);}
function fp(){}
_=fp.prototype=new Ap();_.tc=np;_.tN=uL+'AbsolutePanel';_.tI=55;function pp(a){Cp(a);a.e=nj();a.d=kj();fj(a.e,a.d);BA(a,a.e);return a;}
function rp(c,d,a){var b;b=kk(d.ib());yk(b,'height',a);}
function sp(c,b,a){yk(b,'align',a.a);}
function tp(c,b,a){Ck(b,'verticalAlign',a.a);}
function up(b,c,d){var a;a=kk(c.ib());yk(a,'width',d);}
function op(){}
_=op.prototype=new Ap();_.tN=uL+'CellPanel';_.tI=56;_.d=null;_.e=null;function vF(d,a,b){var c;while(a.vb()){c=a.Ab();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function xF(a){throw sF(new rF(),'add');}
function yF(b){var a;a=vF(this,this.xb(),b);return a!==null;}
function zF(){var a,b,c;c=hE(new gE());a=null;iE(c,'[');b=this.xb();while(b.vb()){if(a!==null){iE(c,a);}else{a=', ';}iE(c,dF(b.Ab()));}iE(c,']');return mE(c);}
function uF(){}
_=uF.prototype=new CD();_.s=xF;_.B=yF;_.tS=zF;_.tN=yL+'AbstractCollection';_.tI=57;function eG(b,a){throw CC(new AC(),'Index: '+a+', Size: '+b.b);}
function fG(a){return CF(new BF(),a);}
function gG(b,a){throw sF(new rF(),'add');}
function hG(a){this.r(this.Ac(),a);return true;}
function iG(e){var a,b,c,d,f;if(e===this){return true;}if(!th(e,29)){return false;}f=sh(e,29);if(this.Ac()!=f.Ac()){return false;}c=fG(this);d=f.xb();while(EF(c)){a=FF(c);b=FF(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function jG(){var a,b,c,d;c=1;a=31;b=fG(this);while(EF(b)){d=FF(b);c=31*c+(d===null?0:d.hC());}return c;}
function kG(){return fG(this);}
function lG(a){throw sF(new rF(),'remove');}
function AF(){}
_=AF.prototype=new uF();_.r=gG;_.s=hG;_.eQ=iG;_.hC=jG;_.xb=kG;_.sc=lG;_.tN=yL+'AbstractList';_.tI=58;function zH(a){{DH(a);}}
function AH(a){zH(a);return a;}
function CH(b,a){qI(b.a,b.b++,a);return true;}
function BH(d,a){var b,c;c=a.xb();b=c.vb();while(c.vb()){qI(d.a,d.b++,c.Ab());}return b;}
function DH(a){a.a=Bg();a.b=0;}
function FH(b,a){if(a<0||a>=b.b){eG(b,a);}return mI(b.a,a);}
function aI(b,a){return bI(b,a,0);}
function bI(c,b,a){if(a<0){eG(c,a);}for(;a<c.b;++a){if(lI(b,mI(c.a,a))){return a;}}return (-1);}
function cI(a){return a.b==0;}
function dI(c,a){var b;b=FH(c,a);oI(c.a,a,1);--c.b;return b;}
function eI(c,b){var a;a=aI(c,b);if(a==(-1)){return false;}dI(c,a);return true;}
function fI(d,a,b){var c;c=FH(d,a);qI(d.a,a,b);return c;}
function gI(c,a){var b;if(a.a<c.b){a=hh(a,c.b);}for(b=0;b<c.b;++b){oh(a,b,mI(c.a,b));}if(a.a>c.b){oh(a,c.b,null);}return a;}
function iI(a,b){if(a<0||a>this.b){eG(this,a);}hI(this.a,a,b);++this.b;}
function jI(a){return CH(this,a);}
function hI(a,b,c){a.splice(b,0,c);}
function kI(a){return aI(this,a)!=(-1);}
function lI(a,b){return a===b||a!==null&&a.eQ(b);}
function nI(a){return FH(this,a);}
function mI(a,b){return a[b];}
function pI(a){return dI(this,a);}
function oI(a,c,b){a.splice(c,b);}
function qI(a,b,c){a[b]=c;}
function rI(){return this.b;}
function yH(){}
_=yH.prototype=new AF();_.r=iI;_.s=jI;_.B=kI;_.tb=nI;_.sc=pI;_.Ac=rI;_.tN=yL+'ArrayList';_.tI=59;_.a=null;_.b=0;function wp(a){AH(a);return a;}
function yp(d,c){var a,b;for(a=fG(d);EF(a);){b=sh(FF(a),20);b.Fb(c);}}
function vp(){}
_=vp.prototype=new yH();_.tN=uL+'ClickListenerCollection';_.tI=60;function lq(a,b){if(a.d!==null){throw yC(new wC(),'Composite.initWidget() may only be called once.');}AA(b);BA(a,b.ib());a.d=b;CA(b,a);}
function mq(){if(this.d===null){throw yC(new wC(),'initWidget() was never called in '+lg(this));}return this.q;}
function nq(){if(this.d!==null){return this.d.wb();}return false;}
function oq(){this.d.Cb();this.fc();}
function pq(){try{this.oc();}finally{this.d.ac();}}
function jq(){}
_=jq.prototype=new iA();_.ib=mq;_.wb=nq;_.Cb=oq;_.ac=pq;_.tN=uL+'Composite';_.tI=61;_.d=null;function rq(a){Cp(a);BA(a,ij());return a;}
function tq(b,c){var a;a=c.ib();Ck(a,'width','100%');Ck(a,'height','100%');c.xc(false);}
function uq(b,c,a){eq(b,c,b.ib(),a,true);tq(b,c);}
function vq(b,c){var a;a=gq(b,c);if(a){wq(b,c);if(b.b===c){b.b=null;}}return a;}
function wq(a,b){Ck(b.ib(),'width','');Ck(b.ib(),'height','');b.xc(true);}
function xq(b,a){Fp(b,a);if(b.b!==null){b.b.xc(false);}b.b=dq(b,a);b.b.xc(true);}
function yq(a){return vq(this,a);}
function qq(){}
_=qq.prototype=new Ap();_.tc=yq;_.tN=uL+'DeckPanel';_.tI=62;_.b=null;function mx(a){nx(a,ij());return a;}
function nx(b,a){BA(b,a);return b;}
function ox(a,b){if(a.n!==null){throw yC(new wC(),'SimplePanel can only contain one child widget');}a.yc(b);}
function qx(a,b){if(b===a.n){return;}if(b!==null){AA(b);}if(a.n!==null){a.tc(a.n);}a.n=b;if(b!==null){fj(a.fb(),a.n.ib());wv(a,b);}}
function rx(){return this.ib();}
function sx(){return ix(new gx(),this);}
function tx(a){if(this.n!==a){return false;}yv(this,a);rk(this.fb(),a.ib());this.n=null;return true;}
function ux(a){qx(this,a);}
function fx(){}
_=fx.prototype=new vv();_.fb=rx;_.xb=sx;_.tc=tx;_.yc=ux;_.tN=uL+'SimplePanel';_.tI=63;_.n=null;function dw(){dw=lL;sw=lB(new gB());}
function Ev(a){dw();nx(a,nB(sw));jw(a,0,0);return a;}
function Fv(b,a){dw();Ev(b);b.g=a;return b;}
function aw(c,a,b){dw();Fv(c,a);c.k=b;return c;}
function bw(b,a){if(a.blur){a.blur();}}
function cw(c){var a,b,d;a=c.l;if(!a){kw(c,false);nw(c);}b=wh((wm()-fw(c))/2);d=wh((vm()-ew(c))/2);jw(c,xm()+b,ym()+d);if(!a){kw(c,true);}}
function ew(a){return mz(a);}
function fw(a){return nz(a);}
function gw(b,a){if(!b.l){return;}b.l=false;kp(bx(),b);b.ib();}
function hw(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.vc(a.h);}if(a.i!==null){b.zc(a.i);}}}
function iw(e,b){var a,c,d,f;d=Cj(b);c=ok(e.ib(),d);f=Ej(b);switch(f){case 128:{a=(uh(zj(b)),bv(b),true);return a&&(c|| !e.k);}case 512:{a=(uh(zj(b)),bv(b),true);return a&&(c|| !e.k);}case 256:{a=(uh(zj(b)),bv(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((dj(),tk)!==null){return true;}if(!c&&e.g&&f==4){gw(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){bw(e,d);return false;}}}return !e.k||c;}
function jw(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.ib();Ck(a,'left',b+'px');Ck(a,'top',d+'px');}
function kw(a,b){Ck(a.ib(),'visibility',b?'visible':'hidden');a.ib();}
function lw(a,b){qx(a,b);hw(a);}
function mw(a,b){a.i=b;hw(a);if(wE(b)==0){a.i=null;}}
function nw(a){if(a.l){return;}a.l=true;ej(a);Ck(a.ib(),'position','absolute');if(a.m!=(-1)){jw(a,a.j,a.m);}hp(bx(),a);a.ib();}
function ow(){return oB(sw,this.ib());}
function pw(){return ew(this);}
function qw(){return fw(this);}
function rw(){return oB(sw,this.ib());}
function tw(){sk(this);zA(this);}
function uw(a){return iw(this,a);}
function vw(a){this.h=a;hw(this);if(wE(a)==0){this.h=null;}}
function ww(a){kw(this,a);}
function xw(a){lw(this,a);}
function yw(a){mw(this,a);}
function Dv(){}
_=Dv.prototype=new fx();_.fb=ow;_.nb=pw;_.ob=qw;_.pb=rw;_.ac=tw;_.dc=uw;_.vc=vw;_.xc=ww;_.yc=xw;_.zc=yw;_.tN=uL+'PopupPanel';_.tI=64;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var sw;function Dq(){Dq=lL;dw();}
function Aq(a){a.a=ut(new zr());a.f=mr(new ir());}
function Bq(b,a){Dq();Cq(b,a,true);return b;}
function Cq(c,a,b){Dq();aw(c,a,b);Aq(c);qt(c.f,0,0,c.a);c.f.vc('100%');lt(c.f,0);nt(c.f,0);ot(c.f,0);js(c.f.b,1,0,'100%');ms(c.f.b,1,0,'100%');is(c.f.b,1,0,(Et(),Ft),(fu(),hu));lw(c,c.f);sz(c,'gwt-DialogBox');sz(c.a,'Caption');gv(c.a,c);return c;}
function Eq(b,a){yt(b.a,a);}
function Fq(a){if(Ej(a)==4){if(ok(this.a.ib(),Cj(a))){Fj(a);}}return iw(this,a);}
function ar(a,b,c){this.e=true;vk(this.a.ib());this.c=b;this.d=c;}
function br(a){}
function cr(a){}
function dr(c,d,e){var a,b;if(this.e){a=d+kz(this);b=e+lz(this);jw(this,a-this.c,b-this.d);}}
function er(a,b,c){this.e=false;qk(this.a.ib());}
function fr(a){if(this.b!==a){return false;}kt(this.f,a);return true;}
function gr(a){if(this.b!==null){kt(this.f,this.b);}if(a!==null){qt(this.f,1,0,a);}this.b=a;}
function hr(a){mw(this,a);this.f.zc('100%');}
function zq(){}
_=zq.prototype=new Dv();_.dc=Fq;_.gc=ar;_.hc=br;_.ic=cr;_.jc=dr;_.kc=er;_.tc=fr;_.yc=gr;_.zc=hr;_.tN=uL+'DialogBox';_.tI=65;_.b=null;_.c=0;_.d=0;_.e=false;function at(a){a.e=ws(new rs());}
function bt(a){at(a);a.d=nj();a.a=kj();fj(a.d,a.a);BA(a,a.d);tz(a,1);return a;}
function ct(c,a){var b;b=pr(c);if(a>=b||a<0){throw CC(new AC(),'Row index: '+a+', Row size: '+b);}}
function dt(e,c,b,a){var d;d=hs(e.b,c,b);jt(e,d,a);return d;}
function ft(c,b,a){return b.rows[a].cells.length;}
function gt(a){return ht(a,a.a);}
function ht(b,a){return a.rows.length;}
function it(b,a){var c;if(a!=pr(b)){ct(b,a);}c=mj();nk(b.a,c,a);return a;}
function jt(d,c,a){var b,e;b=ik(c);e=null;if(b!==null){e=ys(d.e,b);}if(e!==null){kt(d,e);return true;}else{if(a){Ak(c,'');}return false;}}
function kt(b,c){var a;if(c.p!==b){return false;}yv(b,c);a=c.ib();rk(kk(a),a);Bs(b.e,a);return true;}
function lt(a,b){yk(a.d,'border',''+b);}
function mt(b,a){b.b=a;}
function nt(b,a){xk(b.d,'cellPadding',a);}
function ot(b,a){xk(b.d,'cellSpacing',a);}
function pt(b,a){b.c=a;qs(b.c);}
function qt(d,b,a,e){var c;rr(d,b,a);if(e!==null){AA(e);c=dt(d,b,a,true);zs(d.e,e);fj(c,e.ib());wv(d,e);}}
function rt(){return Cs(this.e);}
function st(a){switch(Ej(a)){case 1:{break;}default:}}
function tt(a){return kt(this,a);}
function Ar(){}
_=Ar.prototype=new vv();_.xb=rt;_.Eb=st;_.tc=tt;_.tN=uL+'HTMLTable';_.tI=66;_.a=null;_.b=null;_.c=null;_.d=null;function mr(a){bt(a);mt(a,kr(new jr(),a));pt(a,os(new ns(),a));return a;}
function or(b,a){ct(b,a);return ft(b,b.a,a);}
function pr(a){return gt(a);}
function qr(b,a){return it(b,a);}
function rr(e,d,b){var a,c;sr(e,d);if(b<0){throw CC(new AC(),'Cannot create a column with a negative index: '+b);}a=or(e,d);c=b+1-a;if(c>0){tr(e.a,d,c);}}
function sr(d,b){var a,c;if(b<0){throw CC(new AC(),'Cannot create a row with a negative index: '+b);}c=pr(d);for(a=c;a<=b;a++){qr(d,a);}}
function tr(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function ir(){}
_=ir.prototype=new Ar();_.tN=uL+'FlexTable';_.tI=67;function es(b,a){b.a=a;return b;}
function gs(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function hs(c,b,a){return gs(c,c.a.a,b,a);}
function is(d,c,a,b,e){ks(d,c,a,b);ls(d,c,a,e);}
function js(e,d,a,c){var b;rr(e.a,d,a);b=gs(e,e.a.a,d,a);yk(b,'height',c);}
function ks(e,d,b,a){var c;rr(e.a,d,b);c=gs(e,e.a.a,d,b);yk(c,'align',a.a);}
function ls(d,c,b,a){rr(d.a,c,b);Ck(gs(d,d.a.a,c,b),'verticalAlign',a.a);}
function ms(c,b,a,d){rr(c.a,b,a);yk(gs(c,c.a.a,b,a),'width',d);}
function ds(){}
_=ds.prototype=new CD();_.tN=uL+'HTMLTable$CellFormatter';_.tI=68;function kr(b,a){es(b,a);return b;}
function jr(){}
_=jr.prototype=new ds();_.tN=uL+'FlexTable$FlexCellFormatter';_.tI=69;function vr(a){Cp(a);BA(a,ij());return a;}
function wr(a,b){Dp(a,b,a.ib());}
function yr(b,c,a){eq(b,c,b.ib(),a,true);}
function ur(){}
_=ur.prototype=new Ap();_.tN=uL+'FlowPanel';_.tI=70;function dv(a){BA(a,ij());tz(a,131197);sz(a,'gwt-Label');return a;}
function ev(b,a){dv(b);iv(b,a);return b;}
function fv(b,a){if(b.a===null){b.a=wp(new vp());}CH(b.a,a);}
function gv(b,a){if(b.b===null){b.b=mv(new lv());}CH(b.b,a);}
function iv(b,a){Bk(b.ib(),a);}
function jv(a,b){Ck(a.ib(),'whiteSpace',b?'normal':'nowrap');}
function kv(a){switch(Ej(a)){case 1:if(this.a!==null){yp(this.a,this);}break;case 4:case 8:case 64:case 16:case 32:if(this.b!==null){qv(this.b,this,a);}break;case 131072:break;}}
function cv(){}
_=cv.prototype=new iA();_.Eb=kv;_.tN=uL+'Label';_.tI=71;_.a=null;_.b=null;function ut(a){dv(a);BA(a,ij());tz(a,125);sz(a,'gwt-HTML');return a;}
function vt(b,a){ut(b);yt(b,a);return b;}
function wt(b,a,c){vt(b,a);jv(b,c);return b;}
function yt(b,a){Ak(b.ib(),a);}
function zr(){}
_=zr.prototype=new cv();_.tN=uL+'HTML';_.tI=72;function Cr(a){{Fr(a);}}
function Dr(b,a){b.b=a;Cr(b);return b;}
function Fr(a){while(++a.a<a.b.b.b){if(FH(a.b.b,a.a)!==null){return;}}}
function as(a){return a.a<a.b.b.b;}
function bs(){return as(this);}
function cs(){var a;if(!as(this)){throw hL(new gL());}a=FH(this.b.b,this.a);Fr(this);return a;}
function Br(){}
_=Br.prototype=new CD();_.vb=bs;_.Ab=cs;_.tN=uL+'HTMLTable$1';_.tI=73;_.a=(-1);function os(b,a){b.b=a;return b;}
function qs(a){if(a.a===null){a.a=jj('colgroup');nk(a.b.d,a.a,0);fj(a.a,jj('col'));}}
function ns(){}
_=ns.prototype=new CD();_.tN=uL+'HTMLTable$ColumnFormatter';_.tI=74;_.a=null;function vs(a){a.b=AH(new yH());}
function ws(a){vs(a);return a;}
function ys(c,a){var b;b=Es(a);if(b<0){return null;}return sh(FH(c.b,b),12);}
function zs(b,c){var a;if(b.a===null){a=b.b.b;CH(b.b,c);}else{a=b.a.a;fI(b.b,a,c);b.a=b.a.b;}Fs(c.ib(),a);}
function As(c,a,b){Ds(a);fI(c.b,b,null);c.a=ts(new ss(),b,c.a);}
function Bs(c,a){var b;b=Es(a);As(c,a,b);}
function Cs(a){return Dr(new Br(),a);}
function Ds(a){a['__widgetID']=null;}
function Es(a){var b=a['__widgetID'];return b==null?-1:b;}
function Fs(a,b){a['__widgetID']=b;}
function rs(){}
_=rs.prototype=new CD();_.tN=uL+'HTMLTable$WidgetMapper';_.tI=75;_.a=null;function ts(c,a,b){c.a=a;c.b=b;return c;}
function ss(){}
_=ss.prototype=new CD();_.tN=uL+'HTMLTable$WidgetMapper$FreeNode';_.tI=76;_.a=0;_.b=null;function Et(){Et=lL;Ft=Ct(new Bt(),'center');au=Ct(new Bt(),'left');Ct(new Bt(),'right');}
var Ft,au;function Ct(b,a){b.a=a;return b;}
function Bt(){}
_=Bt.prototype=new CD();_.tN=uL+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=77;_.a=null;function fu(){fu=lL;gu=du(new cu(),'bottom');hu=du(new cu(),'middle');iu=du(new cu(),'top');}
var gu,hu,iu;function du(a,b){a.a=b;return a;}
function cu(){}
_=cu.prototype=new CD();_.tN=uL+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=78;_.a=null;function mu(a){a.a=(Et(),au);a.c=(fu(),iu);}
function nu(a){pp(a);mu(a);a.b=mj();fj(a.d,a.b);yk(a.e,'cellSpacing','0');yk(a.e,'cellPadding','0');return a;}
function ou(b,c){var a;a=qu(b);fj(b.b,a);Dp(b,c,a);}
function qu(b){var a;a=lj();sp(b,a,b.a);tp(b,a,b.c);return a;}
function ru(c,d,a){var b;aq(c,a);b=qu(c);nk(c.b,b,a);eq(c,d,b,a,false);}
function su(c,d){var a,b;b=kk(d.ib());a=gq(c,d);if(a){rk(c.b,b);}return a;}
function tu(b,a){b.c=a;}
function uu(a){return su(this,a);}
function lu(){}
_=lu.prototype=new op();_.tc=uu;_.tN=uL+'HorizontalPanel';_.tI=79;_.b=null;function wu(a){BA(a,ij());fj(a.ib(),a.a=hj());tz(a,1);sz(a,'gwt-Hyperlink');return a;}
function xu(c,b,a){wu(c);Cu(c,b);Bu(c,a);return c;}
function yu(b,a){if(b.b===null){b.b=wp(new vp());}CH(b.b,a);}
function Au(a){return jk(a.a);}
function Bu(b,a){b.c=a;yk(b.a,'href','#'+a);}
function Cu(b,a){Bk(b.a,a);}
function Du(a){if(Ej(a)==1){if(this.b!==null){yp(this.b,this);}xl(this.c);Fj(a);}}
function vu(){}
_=vu.prototype=new iA();_.Eb=Du;_.tN=uL+'Hyperlink';_.tI=80;_.a=null;_.b=null;_.c=null;function bv(a){return (Bj(a)?1:0)|(Aj(a)?8:0)|(xj(a)?2:0)|(tj(a)?4:0);}
function mv(a){AH(a);return a;}
function ov(d,c,e,f){var a,b;for(a=fG(d);EF(a);){b=sh(FF(a),21);b.gc(c,e,f);}}
function pv(d,c){var a,b;for(a=fG(d);EF(a);){b=sh(FF(a),21);b.hc(c);}}
function qv(e,c,a){var b,d,f,g,h;d=c.ib();g=vj(a)-bk(d)+fk(d,'scrollLeft')+xm();h=wj(a)-ck(d)+fk(d,'scrollTop')+ym();switch(Ej(a)){case 4:ov(e,c,g,h);break;case 8:tv(e,c,g,h);break;case 64:sv(e,c,g,h);break;case 16:b=yj(a);if(!ok(d,b)){pv(e,c);}break;case 32:f=Dj(a);if(!ok(d,f)){rv(e,c);}break;}}
function rv(d,c){var a,b;for(a=fG(d);EF(a);){b=sh(FF(a),21);b.ic(c);}}
function sv(d,c,e,f){var a,b;for(a=fG(d);EF(a);){b=sh(FF(a),21);b.jc(c,e,f);}}
function tv(d,c,e,f){var a,b;for(a=fG(d);EF(a);){b=sh(FF(a),21);b.kc(c,e,f);}}
function lv(){}
_=lv.prototype=new yH();_.tN=uL+'MouseListenerCollection';_.tI=81;function Fw(){Fw=lL;ex=FJ(new dJ());}
function Ew(b,a){Fw();gp(b);if(a===null){a=ax();}BA(b,a);b.Cb();return b;}
function bx(){Fw();return cx(null);}
function cx(c){Fw();var a,b;b=sh(fK(ex,c),22);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=ek(c))){return null;}}if(ex.c==0){dx();}gK(ex,c,b=Ew(new zw(),a));return b;}
function ax(){Fw();return $doc.body;}
function dx(){Fw();nm(new Aw());}
function zw(){}
_=zw.prototype=new fp();_.tN=uL+'RootPanel';_.tI=82;var ex;function Cw(){var a,b;for(b=EG(mH((Fw(),ex)));fH(b);){a=sh(gH(b),22);if(a.wb()){a.ac();}}}
function Dw(){return null;}
function Aw(){}
_=Aw.prototype=new CD();_.pc=Cw;_.qc=Dw;_.tN=uL+'RootPanel$1';_.tI=83;function hx(a){a.a=a.b.n!==null;}
function ix(b,a){b.b=a;hx(b);return b;}
function kx(){return this.a;}
function lx(){if(!this.a||this.b.n===null){throw hL(new gL());}this.a=false;return this.b.n;}
function gx(){}
_=gx.prototype=new CD();_.vb=kx;_.Ab=lx;_.tN=uL+'SimplePanel$1';_.tI=84;function Cx(a){a.a=nu(new lu());}
function Dx(c){var a,b;Cx(c);lq(c,c.a);tz(c,1);sz(c,'gwt-TabBar');tu(c.a,(fu(),gu));a=wt(new zr(),'&nbsp;',true);b=wt(new zr(),'&nbsp;',true);sz(a,'gwt-TabBarFirst');sz(b,'gwt-TabBarRest');a.vc('100%');b.vc('100%');ou(c.a,a);ou(c.a,b);a.vc('100%');rp(c.a,a,'100%');up(c.a,b,'100%');return c;}
function Ex(b,a){if(b.c===null){b.c=jy(new iy());}CH(b.c,a);}
function Fx(b,a){if(a<0||a>cy(b)){throw BC(new AC());}}
function ay(b,a){if(a<(-1)||a>=cy(b)){throw BC(new AC());}}
function cy(a){return a.a.f.b-2;}
function dy(e,d,a,b){var c;Fx(e,b);if(a){c=vt(new zr(),d);}else{c=ev(new cv(),d);}jv(c,false);fv(c,e);sz(c,'gwt-TabBarItem');ru(e.a,c,b+1);}
function ey(b,a){var c;ay(b,a);c=dq(b.a,a+1);if(c===b.b){b.b=null;}su(b.a,c);}
function fy(b,a){ay(b,a);if(b.c!==null){if(!ly(b.c,b,a)){return false;}}gy(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=dq(b.a,a+1);gy(b,b.b,true);if(b.c!==null){my(b.c,b,a);}return true;}
function gy(c,a,b){if(a!==null){if(b){iz(a,'gwt-TabBarItem-selected');}else{oz(a,'gwt-TabBarItem-selected');}}}
function hy(b){var a;for(a=1;a<this.a.f.b-1;++a){if(dq(this.a,a)===b){fy(this,a-1);return;}}}
function Bx(){}
_=Bx.prototype=new jq();_.Fb=hy;_.tN=uL+'TabBar';_.tI=85;_.b=null;_.c=null;function jy(a){AH(a);return a;}
function ly(e,c,d){var a,b;for(a=fG(e);EF(a);){b=sh(FF(a),23);if(!b.Db(c,d)){return false;}}return true;}
function my(e,c,d){var a,b;for(a=fG(e);EF(a);){b=sh(FF(a),23);b.nc(c,d);}}
function iy(){}
_=iy.prototype=new yH();_.tN=uL+'TabListenerCollection';_.tI=86;function Ay(a){a.b=wy(new vy());a.a=qy(new py(),a.b);}
function By(b){var a;Ay(b);a=cA(new aA());dA(a,b.b);dA(a,b.a);rp(a,b.a,'100%');b.b.zc('100%');Ex(b.b,b);lq(b,a);sz(b,'gwt-TabPanel');sz(b.a,'gwt-TabPanelBottom');return b;}
function Dy(b,c,a){az(b,c,a,b.a.f.b);}
function Cy(b,a){if(b.c===null){b.c=jy(new iy());}CH(b.c,a);}
function Fy(b,a){return dq(b.a,a);}
function bz(d,e,c,a,b){sy(d.a,e,c,a,b);}
function az(c,d,b,a){bz(c,d,b,false,a);}
function cz(b,a){fy(b.b,a);}
function dz(){return fq(this.a);}
function ez(a,b){if(this.c!==null){return ly(this.c,this,b);}return true;}
function fz(a,b){xq(this.a,b);if(this.c!==null){my(this.c,this,b);}}
function gz(a){return ty(this.a,a);}
function oy(){}
_=oy.prototype=new jq();_.xb=dz;_.Db=ez;_.nc=fz;_.tc=gz;_.tN=uL+'TabPanel';_.tI=87;_.c=null;function qy(b,a){rq(b);b.a=a;return b;}
function sy(e,f,d,a,b){var c;c=cq(e,f);if(c!=(-1)){ty(e,f);if(c<b){b--;}}yy(e.a,d,a,b);uq(e,f,b);}
function ty(b,c){var a;a=cq(b,c);if(a!=(-1)){zy(b.a,a);return vq(b,c);}return false;}
function uy(a){return ty(this,a);}
function py(){}
_=py.prototype=new qq();_.tc=uy;_.tN=uL+'TabPanel$TabbedDeckPanel';_.tI=88;_.a=null;function wy(a){Dx(a);return a;}
function yy(d,c,a,b){dy(d,c,a,b);}
function zy(b,a){ey(b,a);}
function vy(){}
_=vy.prototype=new Bx();_.tN=uL+'TabPanel$UnmodifiableTabBar';_.tI=89;function bA(a){a.a=(Et(),au);a.b=(fu(),iu);}
function cA(a){pp(a);bA(a);yk(a.e,'cellSpacing','0');yk(a.e,'cellPadding','0');return a;}
function dA(b,d){var a,c;c=mj();a=fA(b);fj(c,a);fj(b.d,c);Dp(b,d,a);}
function fA(b){var a;a=lj();sp(b,a,b.a);tp(b,a,b.b);return a;}
function gA(c,e,a){var b,d;aq(c,a);d=mj();b=fA(c);fj(d,b);nk(c.d,d,a);eq(c,e,b,a,false);}
function hA(c){var a,b;b=kk(c.ib());a=gq(this,c);if(a){rk(this.d,kk(b));}return a;}
function aA(){}
_=aA.prototype=new op();_.tc=hA;_.tN=uL+'VerticalPanel';_.tI=90;function pA(b,a){b.a=mh('[Lcom.google.gwt.user.client.ui.Widget;',[158],[12],[4],null);return b;}
function qA(a,b){uA(a,b,a.b);}
function sA(b,a){if(a<0||a>=b.b){throw BC(new AC());}return b.a[a];}
function tA(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function uA(d,e,a){var b,c;if(a<0||a>d.b){throw BC(new AC());}if(d.b==d.a.a){c=mh('[Lcom.google.gwt.user.client.ui.Widget;',[158],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){oh(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){oh(d.a,b,d.a[b-1]);}oh(d.a,a,e);}
function vA(a){return lA(new kA(),a);}
function wA(c,b){var a;if(b<0||b>=c.b){throw BC(new AC());}--c.b;for(a=b;a<c.b;++a){oh(c.a,a,c.a[a+1]);}oh(c.a,c.b,null);}
function xA(b,c){var a;a=tA(b,c);if(a==(-1)){throw hL(new gL());}wA(b,a);}
function jA(){}
_=jA.prototype=new CD();_.tN=uL+'WidgetCollection';_.tI=91;_.a=null;_.b=0;function lA(b,a){b.b=a;return b;}
function nA(){return this.a<this.b.b-1;}
function oA(){if(this.a>=this.b.b){throw hL(new gL());}return this.b.a[++this.a];}
function kA(){}
_=kA.prototype=new CD();_.vb=nA;_.Ab=oA;_.tN=uL+'WidgetCollection$WidgetIterator';_.tI=92;_.a=(-1);function fB(){}
_=fB.prototype=new CD();_.tN=vL+'PopupImpl';_.tI=93;function mB(){mB=lL;pB=qB();}
function lB(a){mB();return a;}
function nB(b){var a;a=ij();if(pB){Ak(a,'<div><\/div>');dl(iB(new hB(),b,a));}return a;}
function oB(b,a){return pB?ik(a):a;}
function qB(){mB();if(navigator.userAgent.indexOf('Macintosh')!= -1){return true;}return false;}
function gB(){}
_=gB.prototype=new fB();_.tN=vL+'PopupImplMozilla';_.tI=94;var pB;function iB(b,a,c){b.a=c;return b;}
function kB(){Ck(this.a,'overflow','auto');}
function hB(){}
_=hB.prototype=new CD();_.bb=kB;_.tN=vL+'PopupImplMozilla$1';_.tI=95;function vB(){}
_=vB.prototype=new CD();_.tN=wL+'OutputStream';_.tI=96;function tB(){}
_=tB.prototype=new vB();_.tN=wL+'FilterOutputStream';_.tI=97;function xB(){}
_=xB.prototype=new tB();_.tN=wL+'PrintStream';_.tI=98;function BB(){BB=lL;eE();}
function AB(a){BB();cE(a);return a;}
function zB(){}
_=zB.prototype=new bE();_.tN=xL+'ArrayStoreException';_.tI=99;function EB(){EB=lL;FB=DB(new CB(),false);aC=DB(new CB(),true);}
function DB(a,b){EB();a.a=b;return a;}
function bC(a){return th(a,28)&&sh(a,28).a==this.a;}
function cC(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function dC(){return this.a?'true':'false';}
function eC(a){EB();return a?aC:FB;}
function CB(){}
_=CB.prototype=new CD();_.eQ=bC;_.hC=cC;_.tS=dC;_.tN=xL+'Boolean';_.tI=100;_.a=false;var FB,aC;function iC(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+kD(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function mC(){mC=lL;eE();}
function kC(a){mC();cE(a);return a;}
function lC(b,a){mC();dE(b,a);return b;}
function jC(){}
_=jC.prototype=new bE();_.tN=xL+'ClassCastException';_.tI=101;function vC(){vC=lL;eE();}
function uC(b,a){vC();dE(b,a);return b;}
function tC(){}
_=tC.prototype=new bE();_.tN=xL+'IllegalArgumentException';_.tI=102;function zC(){zC=lL;eE();}
function xC(a){zC();cE(a);return a;}
function yC(b,a){zC();dE(b,a);return b;}
function wC(){}
_=wC.prototype=new bE();_.tN=xL+'IllegalStateException';_.tI=103;function DC(){DC=lL;eE();}
function BC(a){DC();cE(a);return a;}
function CC(b,a){DC();dE(b,a);return b;}
function AC(){}
_=AC.prototype=new bE();_.tN=xL+'IndexOutOfBoundsException';_.tI=104;function wD(){wD=lL;{BD();}}
function xD(a){wD();return isNaN(a);}
function yD(e,d,c,h){wD();var a,b,f,g;if(e===null){throw uD(new tD(),'Unable to parse null');}b=wE(e);f=b>0&&pE(e,0)==45?1:0;for(a=f;a<b;a++){if(iC(pE(e,a),d)==(-1)){throw uD(new tD(),'Could not parse '+e+' in radix '+d);}}g=zD(e,d);if(xD(g)){throw uD(new tD(),'Unable to parse '+e);}else if(g<c||g>h){throw uD(new tD(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function zD(b,a){wD();return parseInt(b,a);}
function BD(){wD();AD=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var AD=null;function FC(){FC=lL;wD();}
function cD(a){FC();return dD(a,10);}
function dD(b,a){FC();return vh(yD(b,a,(-2147483648),2147483647));}
function eD(a){FC();return cF(a);}
var aD=2147483647,bD=(-2147483648);function hD(a){return a<0?-a:a;}
function iD(a){return a<0?-a:a;}
function jD(a,b){return a>b?a:b;}
function kD(a,b){return a<b?a:b;}
function lD(a){return Math.sqrt(a);}
function oD(){oD=lL;eE();}
function nD(a){oD();cE(a);return a;}
function mD(){}
_=mD.prototype=new bE();_.tN=xL+'NegativeArraySizeException';_.tI=105;function rD(){rD=lL;eE();}
function qD(b,a){rD();dE(b,a);return b;}
function pD(){}
_=pD.prototype=new bE();_.tN=xL+'NullPointerException';_.tI=106;function vD(){vD=lL;vC();}
function uD(b,a){vD();uC(b,a);return b;}
function tD(){}
_=tD.prototype=new tC();_.tN=xL+'NumberFormatException';_.tI=107;function pE(b,a){return b.charCodeAt(a);}
function rE(f,c){var a,b,d,e,g,h;h=wE(f);e=wE(c);b=kD(h,e);for(a=0;a<b;a++){g=pE(f,a);d=pE(c,a);if(g!=d){return g-d;}}return h-e;}
function sE(b,a){if(!th(a,1))return false;return BE(b,a);}
function tE(b,a){return b.indexOf(a);}
function uE(c,b,a){return c.indexOf(b,a);}
function vE(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function wE(a){return a.length;}
function xE(c,a,b){b=CE(b);return c.replace(RegExp(a,'g'),b);}
function yE(b,a){return b.substr(a,b.length-a);}
function zE(c,a,b){return c.substr(a,b-a);}
function AE(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function BE(a,b){return String(a)==b;}
function CE(b){var a;a=0;while(0<=(a=uE(b,'\\',a))){if(pE(b,a+1)==36){b=zE(b,0,a)+'$'+yE(b,++a);}else{b=zE(b,0,a)+yE(b,++a);}}return b;}
function DE(a){if(th(a,1)){return rE(this,sh(a,1));}else{throw lC(new jC(),'Cannot compare '+a+" with String '"+this+"'");}}
function EE(a){return sE(this,a);}
function aF(){var a=FE;if(!a){a=FE={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function bF(){return this;}
function cF(a){return ''+a;}
function dF(a){return a!==null?a.tS():'null';}
_=String.prototype;_.u=DE;_.eQ=EE;_.hC=aF;_.tS=bF;_.tN=xL+'String';_.tI=2;var FE=null;function hE(a){jE(a);return a;}
function iE(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function jE(a){kE(a,'');}
function kE(b,a){b.js=[a];b.length=a.length;}
function mE(a){a.Bb();return a.js[0];}
function nE(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function oE(){return mE(this);}
function gE(){}
_=gE.prototype=new CD();_.Bb=nE;_.tS=oE;_.tN=xL+'StringBuffer';_.tI=108;function fF(){fF=lL;hF=new xB();}
function gF(){fF();return new Date().getTime();}
function iF(a){fF();return rg(a);}
var hF;function tF(){tF=lL;eE();}
function sF(b,a){tF();dE(b,a);return b;}
function rF(){}
_=rF.prototype=new bE();_.tN=xL+'UnsupportedOperationException';_.tI=109;function CF(b,a){b.c=a;return b;}
function EF(a){return a.a<a.c.Ac();}
function FF(a){if(!EF(a)){throw hL(new gL());}return a.c.tb(a.b=a.a++);}
function aG(a){if(a.b<0){throw xC(new wC());}a.c.sc(a.b);a.a=a.b;a.b=(-1);}
function bG(){return EF(this);}
function cG(){return FF(this);}
function BF(){}
_=BF.prototype=new CD();_.vb=bG;_.Ab=cG;_.tN=yL+'AbstractList$IteratorImpl';_.tI=110;_.a=0;_.b=(-1);function kH(f,d,e){var a,b,c;for(b=AJ(f.ab());sJ(b);){a=tJ(b);c=a.lb();if(d===null?c===null:d.eQ(c)){if(e){uJ(b);}return a;}}return null;}
function lH(b){var a;a=b.ab();return oG(new nG(),b,a);}
function mH(b){var a;a=eK(b);return CG(new BG(),b,a);}
function nH(a){return kH(this,a,false)!==null;}
function oH(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!th(d,30)){return false;}f=sh(d,30);c=lH(this);e=f.yb();if(!vH(c,e)){return false;}for(a=qG(c);xG(a);){b=yG(a);h=this.ub(b);g=f.ub(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function pH(b){var a;a=kH(this,b,false);return a===null?null:a.rb();}
function qH(){var a,b,c;b=0;for(c=AJ(this.ab());sJ(c);){a=tJ(c);b+=a.hC();}return b;}
function rH(){return lH(this);}
function sH(){var a,b,c,d;d='{';a=false;for(c=AJ(this.ab());sJ(c);){b=tJ(c);if(a){d+=', ';}else{a=true;}d+=dF(b.lb());d+='=';d+=dF(b.rb());}return d+'}';}
function mG(){}
_=mG.prototype=new CD();_.A=nH;_.eQ=oH;_.ub=pH;_.hC=qH;_.yb=rH;_.tS=sH;_.tN=yL+'AbstractMap';_.tI=111;function vH(e,b){var a,c,d;if(b===e){return true;}if(!th(b,31)){return false;}c=sh(b,31);if(c.Ac()!=e.Ac()){return false;}for(a=c.xb();a.vb();){d=a.Ab();if(!e.B(d)){return false;}}return true;}
function wH(a){return vH(this,a);}
function xH(){var a,b,c;a=0;for(b=this.xb();b.vb();){c=b.Ab();if(c!==null){a+=c.hC();}}return a;}
function tH(){}
_=tH.prototype=new uF();_.eQ=wH;_.hC=xH;_.tN=yL+'AbstractSet';_.tI=112;function oG(b,a,c){b.a=a;b.b=c;return b;}
function qG(b){var a;a=AJ(b.b);return vG(new uG(),b,a);}
function rG(a){return this.a.A(a);}
function sG(){return qG(this);}
function tG(){return this.b.a.c;}
function nG(){}
_=nG.prototype=new tH();_.B=rG;_.xb=sG;_.Ac=tG;_.tN=yL+'AbstractMap$1';_.tI=113;function vG(b,a,c){b.a=c;return b;}
function xG(a){return a.a.vb();}
function yG(b){var a;a=b.a.Ab();return a.lb();}
function zG(){return xG(this);}
function AG(){return yG(this);}
function uG(){}
_=uG.prototype=new CD();_.vb=zG;_.Ab=AG;_.tN=yL+'AbstractMap$2';_.tI=114;function CG(b,a,c){b.a=a;b.b=c;return b;}
function EG(b){var a;a=AJ(b.b);return dH(new cH(),b,a);}
function FG(a){return dK(this.a,a);}
function aH(){return EG(this);}
function bH(){return this.b.a.c;}
function BG(){}
_=BG.prototype=new uF();_.B=FG;_.xb=aH;_.Ac=bH;_.tN=yL+'AbstractMap$3';_.tI=115;function dH(b,a,c){b.a=c;return b;}
function fH(a){return a.a.vb();}
function gH(a){var b;b=a.a.Ab().rb();return b;}
function hH(){return fH(this);}
function iH(){return gH(this);}
function cH(){}
_=cH.prototype=new CD();_.vb=hH;_.Ab=iH;_.tN=yL+'AbstractMap$4';_.tI=116;function uI(b){var a,c;a=AH(new yH());for(c=0;c<b.a;c++){CH(a,b[c]);}return a;}
function vI(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.v(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function wI(a){vI(a,a.a,(DI(),EI));}
function DI(){DI=lL;EI=new AI();}
var EI;function CI(a,b){return sh(a,36).u(b);}
function AI(){}
_=AI.prototype=new CD();_.v=CI;_.tN=yL+'Comparators$1';_.tI=117;function bK(){bK=lL;iK=oK();}
function EJ(a){{aK(a);}}
function FJ(a){bK();EJ(a);return a;}
function aK(a){a.a=Bg();a.d=Cg();a.b=Ah(iK,xg);a.c=0;}
function cK(b,a){if(th(a,1)){return sK(b.d,sh(a,1))!==iK;}else if(a===null){return b.b!==iK;}else{return rK(b.a,a,a.hC())!==iK;}}
function dK(a,b){if(a.b!==iK&&qK(a.b,b)){return true;}else if(nK(a.d,b)){return true;}else if(lK(a.a,b)){return true;}return false;}
function eK(a){return xJ(new oJ(),a);}
function fK(c,a){var b;if(th(a,1)){b=sK(c.d,sh(a,1));}else if(a===null){b=c.b;}else{b=rK(c.a,a,a.hC());}return b===iK?null:b;}
function gK(c,a,d){var b;if(th(a,1)){b=vK(c.d,sh(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=uK(c.a,a,d,a.hC());}if(b===iK){++c.c;return null;}else{return b;}}
function hK(c,a){var b;if(th(a,1)){b=xK(c.d,sh(a,1));}else if(a===null){b=c.b;c.b=Ah(iK,xg);}else{b=wK(c.a,a,a.hC());}if(b===iK){return null;}else{--c.c;return b;}}
function jK(e,c){bK();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function kK(d,a){bK();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=hJ(c.substring(1),e);a.s(b);}}}
function lK(f,h){bK();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.rb();if(qK(h,d)){return true;}}}}return false;}
function mK(a){return cK(this,a);}
function nK(c,d){bK();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(qK(d,a)){return true;}}}return false;}
function oK(){bK();}
function pK(){return eK(this);}
function qK(a,b){bK();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function tK(a){return fK(this,a);}
function rK(f,h,e){bK();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(qK(h,d)){return c.rb();}}}}
function sK(b,a){bK();return b[':'+a];}
function uK(f,h,j,e){bK();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(qK(h,d)){var i=c.rb();c.wc(j);return i;}}}else{a=f[e]=[];}var c=hJ(h,j);a.push(c);}
function vK(c,a,d){bK();a=':'+a;var b=c[a];c[a]=d;return b;}
function wK(f,h,e){bK();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(qK(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.rb();}}}}
function xK(c,a){bK();a=':'+a;var b=c[a];delete c[a];return b;}
function dJ(){}
_=dJ.prototype=new mG();_.A=mK;_.ab=pK;_.ub=tK;_.tN=yL+'HashMap';_.tI=118;_.a=null;_.b=null;_.c=0;_.d=null;var iK;function fJ(b,a,c){b.a=a;b.b=c;return b;}
function hJ(a,b){return fJ(new eJ(),a,b);}
function iJ(b){var a;if(th(b,37)){a=sh(b,37);if(qK(this.a,a.lb())&&qK(this.b,a.rb())){return true;}}return false;}
function jJ(){return this.a;}
function kJ(){return this.b;}
function lJ(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function mJ(a){var b;b=this.b;this.b=a;return b;}
function nJ(){return this.a+'='+this.b;}
function eJ(){}
_=eJ.prototype=new CD();_.eQ=iJ;_.lb=jJ;_.rb=kJ;_.hC=lJ;_.wc=mJ;_.tS=nJ;_.tN=yL+'HashMap$EntryImpl';_.tI=119;_.a=null;_.b=null;function xJ(b,a){b.a=a;return b;}
function zJ(d,c){var a,b,e;if(th(c,37)){a=sh(c,37);b=a.lb();if(cK(d.a,b)){e=fK(d.a,b);return qK(a.rb(),e);}}return false;}
function AJ(a){return qJ(new pJ(),a.a);}
function BJ(a){return zJ(this,a);}
function CJ(){return AJ(this);}
function DJ(){return this.a.c;}
function oJ(){}
_=oJ.prototype=new tH();_.B=BJ;_.xb=CJ;_.Ac=DJ;_.tN=yL+'HashMap$EntrySet';_.tI=120;function qJ(c,b){var a;c.c=b;a=AH(new yH());if(c.c.b!==(bK(),iK)){CH(a,fJ(new eJ(),null,c.c.b));}kK(c.c.d,a);jK(c.c.a,a);c.a=fG(a);return c;}
function sJ(a){return EF(a.a);}
function tJ(a){return a.b=sh(FF(a.a),37);}
function uJ(a){if(a.b===null){throw yC(new wC(),'Must call next() before remove().');}else{aG(a.a);hK(a.c,a.b.lb());a.b=null;}}
function vJ(){return sJ(this);}
function wJ(){return tJ(this);}
function pJ(){}
_=pJ.prototype=new CD();_.vb=vJ;_.Ab=wJ;_.tN=yL+'HashMap$EntrySetIterator';_.tI=121;_.a=null;_.b=null;function zK(a){a.a=FJ(new dJ());return a;}
function AK(c,a){var b;b=gK(c.a,a,eC(true));return b===null;}
function CK(a){return qG(lH(a.a));}
function DK(a){return AK(this,a);}
function EK(a){return cK(this.a,a);}
function FK(){return CK(this);}
function aL(){return this.a.c;}
function bL(){return lH(this.a).tS();}
function yK(){}
_=yK.prototype=new tH();_.s=DK;_.B=EK;_.xb=FK;_.Ac=aL;_.tS=bL;_.tN=yL+'HashSet';_.tI=122;_.a=null;function iL(){iL=lL;eE();}
function hL(a){iL();cE(a);return a;}
function gL(){}
_=gL.prototype=new bE();_.tN=yL+'NoSuchElementException';_.tI=123;function aM(){}
_=aM.prototype=new CD();_.tN=zL+'BezierCurve';_.tI=124;function cM(a){{hM(a);}}
function dM(a){cM(a);return a;}
function gM(i,d,e,a,b){var c,f,g,h,j;h=aO(new FN(),kD(d.a,e.a),kD(d.b,e.b));j=hD(d.a-e.a);c=hD(d.b-e.b);g=jD(j,c);g=jD(g,hD(d.a-a.a));g=jD(g,hD(d.b-a.b));g=jD(g,hD(e.a-b.a));g=jD(g,hD(e.b-b.b));f=aO(new FN(),h.a-g,h.b-g);Ck(i.a,'left',eD(f.a));Ck(i.a,'top',eD(f.b));wk(i.a,'width',eD(j+g*2));wk(i.a,'height',eD(c+g*2));Ck(i.a,'width',eD(j+g*2));Ck(i.a,'height',eD(c+g*2));fM(i,dO(d,fO(f)),dO(e,fO(f)),dO(a,fO(f)),dO(b,fO(f)),iM(i.a,'color'));}
function fM(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function hM(b){var a;b.a=jj('canvas');a=dk(b.a,'class');wk(b.a,'class',a+' gwt-diagrams-canvas');}
function iM(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function bM(){}
_=bM.prototype=new aM();_.tN=zL+'BezierCurveCanvas';_.tI=125;_.a=null;function lM(a){a.c=AH(new yH());}
function mM(c,d){var a,b;lM(c);BH(c.c,d);qM(c,c.C());for(b=fG(c.c);EF(b);){a=sh(FF(b),35);a.w(c);}return c;}
function nM(a,b){mM(a,uI(b));return a;}
function pM(a){return a.b.t(a.c);}
function qM(b,a){b.b=a;}
function rM(){this.Cc(pM(this));}
function kM(){}
_=kM.prototype=new iA();_.Bc=rM;_.tN=AL+'AbstractConnection';_.tI=126;_.b=null;function tM(a){a.a=dM(new bM());}
function vM(a,b){nM(a,b);tM(a);if(b.a!=2){throw uC(new tC(),'Need exactly two connectors to connect');}BA(a,a.a.a);iz(a,'gwt-diagrams-connection');return a;}
function uM(c,a,b){vM(c,nh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',157,35,[a,b]));return c;}
function xM(){return new hN();}
function yM(b){var a;if(!th(b,38)){throw uC(new tC(),'Expected BezierConnectionData');}a=sh(b,38);if(a.b.b!=2){throw uC(new tC(),'Expected two connection points');}if(a.a.b!=2){throw uC(new tC(),'Expected two control points');}gM(this.a,sh(FH(a.b,0),32),sh(FH(a.b,1),32),sh(FH(a.a,0),32),sh(FH(a.a,1),32));}
function sM(){}
_=sM.prototype=new kM();_.C=xM;_.Cc=yM;_.tN=AL+'BezierTwoEndedConnection';_.tI=127;function BM(a){a.a=AH(new yH());}
function DM(a,b){nM(a,b);BM(a);if(b.a!=2){throw uC(new tC(),'Need exactly two connectors to connect');}BA(a,ij());iz(a,'gwt-diagrams-connection');return a;}
function CM(c,a,b){DM(c,nh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',157,35,[a,b]));return c;}
function FM(d,a){var b,c;for(c=d.a.b;c<a;c++){b=ij();CH(d.a,Ah(b,fl));fj(d.ib(),b);Ak(b,'&nbsp;');}while(d.a.b>a){b=sh(FH(d.a,0),17);eI(d.a,Ah(b,fl));rk(d.ib(),b);}}
function aN(){return new mN();}
function bN(a){var b,c,d,e,f;if(a.b.b<=1){throw uC(new tC(),'Too few connection points');}FM(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=sh(FH(this.a,d),17);e=sh(FH(a.b,d),32);c=sh(FH(a.b,d+1),32);f='gwt-diagrams-line';wk(b,'style','');yk(b,'className',f);Ck(b,'height','1');Ck(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Ck(b,'height',eD(hD(e.b-c.b)));}else if(e.b==c.b){Ck(b,'width',eD(hD(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Ck(b,'left',eD(kD(e.a,c.a)));Ck(b,'top',eD(kD(e.b,c.b)));yk(b,'className',f);}}
function AM(){}
_=AM.prototype=new kM();_.C=aN;_.Cc=bN;_.tN=AL+'RectilinearTwoEndedConnection';_.tI=128;function dN(c,a,b){uM(c,a,b);return c;}
function fN(){return new sN();}
function gN(a){if(a.b.b!=2){throw uC(new tC(),'Expected two connection points');}gM(this.a,sh(FH(a.b,0),32),sh(FH(a.b,1),32),sh(FH(a.b,1),32),sh(FH(a.b,0),32));}
function cN(){}
_=cN.prototype=new sM();_.C=fN;_.Cc=gN;_.tN=AL+'StraightTwoEndedConnection';_.tI=129;function jN(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=mh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[154],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=cO(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function kN(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw uC(new tC(),'Unsupported connectors count');}c=sh(FH(e,0),35);d=sh(FH(e,1),35);f=jN(this,c,d);h=c.rc(f[0]);i=d.rc(f[1]);a=eO(h,f[0],50);b=eO(i,f[1],50);g=yN(new vN(),nh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',153,32,[h,i]),nh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',153,32,[a,b]));return g;}
function hN(){}
_=hN.prototype=new CD();_.t=kN;_.tN=BL+'BezierConnectionCalculator';_.tI=130;function nN(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(tO(),wO);}if(c==1&&d>0){return a!==(tO(),xO);}if(c==0&&d<0){return a!==(tO(),xO);}if(c==1&&d<0){return a!==(tO(),wO);}}else{if(c==0&&d>0){return a!==(tO(),yO);}if(c==1&&d>0){return a!==(tO(),vO);}if(c==0&&d<0){return a!==(tO(),vO);}if(c==1&&d<0){return a!==(tO(),yO);}}return false;}
function pN(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=mh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[154],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=cO(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function qN(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(tO(),xO);}if(c==1&&d>0){return a===(tO(),wO);}if(c==0&&d<0){return a===(tO(),wO);}if(c==1&&d<0){return a===(tO(),xO);}}else{if(c==0&&d>0){return a===(tO(),vO);}if(c==1&&d>0){return a===(tO(),yO);}if(c==0&&d<0){return a===(tO(),yO);}if(c==1&&d<0){return a===(tO(),vO);}}return false;}
function rN(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw uC(new tC(),'Unsupported connectors count');}a=sh(FH(c,0),35);b=sh(FH(c,1),35);d=CN(new AN());e=pN(this,a,b);i=a.rc(e[0]);j=eO(i,e[0],10);k=b.rc(e[1]);l=eO(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(qN(this,e[0],0,f,true)&&qN(this,e[1],1,f,true)){g=eO(j,e[0],hD(wh(f/2)));h=aO(new FN(),g.a,l.b);}else if(qN(this,e[0],0,m,false)&&qN(this,e[1],1,m,false)){g=eO(j,e[0],hD(wh(m/2)));h=aO(new FN(),l.a,g.b);}else if(qN(this,e[0],0,f,true)&&qN(this,e[1],1,m,false)){g=eO(j,e[0],hD(f));h=eO(l,e[1],hD(m));}else if(qN(this,e[0],0,m,false)&&qN(this,e[1],1,f,true)){g=eO(j,e[0],hD(m));h=eO(l,e[1],hD(f));}else if(qN(this,e[0],0,f,true)&&nN(this,e[1],1,f,true)){g=eO(j,e[0],hD(wh(f/2)));h=aO(new FN(),g.a,l.b);}else if(nN(this,e[0],0,f,true)&&qN(this,e[1],1,f,true)){g=eO(j,e[0],hD(wh(f/2)));h=aO(new FN(),g.a,l.b);}else if(qN(this,e[0],0,m,false)&&nN(this,e[1],1,m,false)){g=eO(j,e[0],hD(wh(m/2)));h=aO(new FN(),l.a,g.b);}else if(nN(this,e[0],0,m,false)&&qN(this,e[1],1,m,false)){g=eO(j,e[0],hD(wh(m/2)));h=aO(new FN(),l.a,g.b);}else if(nN(this,e[0],0,f,true)&&nN(this,e[1],1,f,true)){g=eO(j,(tO(),xO),wh(f/2));h=aO(new FN(),g.a,l.b);}else if(nN(this,e[0],0,m,false)&&nN(this,e[1],1,m,false)){g=eO(j,(tO(),vO),wh(m/2));h=aO(new FN(),l.a,g.b);}CH(d.b,i);CH(d.b,j);if(g!==null){CH(d.b,g);}if(h!==null){CH(d.b,h);}CH(d.b,l);CH(d.b,k);return d;}
function mN(){}
_=mN.prototype=new CD();_.t=rN;_.tN=BL+'FullRectilinearTwoEndedCalculator';_.tI=131;function uN(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw uC(new tC(),'Unsupported connectors count');}a=sh(FH(e,0),35);b=sh(FH(e,1),35);f=CN(new AN());c=aO(new FN(),a.mb()+wh(a.sb()/2),a.qb()+wh(a.jb()/2));d=aO(new FN(),b.mb()+wh(b.sb()/2),b.qb()+wh(b.jb()/2));g=aO(new FN(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=wh(a.jb()/2);h=g.b!=0?wh(j*g.a/hD(g.b)):2147483647;j*= -k;if(hD(h)>wh(a.sb()/2)){h=wh(a.sb()/2);j=g.a!=0?wh(h*g.b/hD(g.a)):2147483647;h*= -i;}CH(f.b,aO(new FN(),c.a+h,c.b+j));j=wh(b.jb()/2);h=g.b!=0?wh(j*g.a/hD(g.b)):2147483647;j*=k;h= -h;if(hD(h)>wh(b.sb()/2)){h=wh(b.sb()/2);j=g.a!=0?wh(h*g.b/hD(g.a)):2147483647;h*=i;j= -j;}CH(f.b,aO(new FN(),d.a+h,d.b+j));return f;}
function sN(){}
_=sN.prototype=new CD();_.t=uN;_.tN=BL+'StraightCenterConnectionDataCalculator';_.tI=132;function BN(a){a.b=AH(new yH());}
function CN(a){BN(a);return a;}
function DN(b,a){BN(b);BH(b.b,a);return b;}
function AN(){}
_=AN.prototype=new CD();_.tN=CL+'ConnectionData';_.tI=133;function wN(a){a.a=AH(new yH());}
function xN(c,b,a){DN(c,b);wN(c);BH(c.a,a);return c;}
function yN(c,b,a){xN(c,uI(b),uI(a));return c;}
function vN(){}
_=vN.prototype=new AN();_.tN=CL+'BezierConnectionData';_.tI=134;function aO(b,a,c){b.a=a;b.b=c;return b;}
function cO(b,a){return lD((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function eO(c,a,b){if(a===(tO(),vO)){return aO(new FN(),c.a,c.b+b);}else if(a===(tO(),yO)){return aO(new FN(),c.a,c.b-b);}else if(a===(tO(),wO)){return aO(new FN(),c.a-b,c.b);}else if(a===(tO(),xO)){return aO(new FN(),c.a+b,c.b);}else{throw xC(new wC());}}
function dO(a,b){return aO(new FN(),a.a+b.a,a.b+b.b);}
function fO(a){return aO(new FN(),-a.a,-a.b);}
function FN(){}
_=FN.prototype=new CD();_.tN=CL+'Point';_.tI=135;_.a=0;_.b=0;function hO(a){a.c=zK(new yK());}
function iO(a){hO(a);return a;}
function kO(b,a){return eO(aO(new FN(),b.mb()+wh(b.sb()/2),b.qb()+wh(b.jb()/2)),a,uO(a)?wh(b.sb()/2):wh(b.jb()/2));}
function lO(c){var a,b;for(b=CK(c.c);xG(b);){a=sh(yG(b),39);a.Bc();}}
function mO(a){AK(this.c,a);}
function nO(a){return kO(this,a);}
function oO(){return zO();}
function pO(a){return kO(this,a);}
function gO(){}
_=gO.prototype=new CD();_.w=mO;_.db=nO;_.gb=oO;_.rc=pO;_.tN=DL+'AbstractConnector';_.tI=136;function tO(){tO=lL;yO=sO(new rO(),'UP');vO=sO(new rO(),'DOWN');wO=sO(new rO(),'LEFT');xO=sO(new rO(),'RIGHT');}
function sO(b,a){tO();b.a=a;return b;}
function uO(a){return a===wO||a===xO;}
function zO(){tO();return nh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',154,33,[yO,vO,wO,xO]);}
function AO(){return this.a;}
function rO(){}
_=rO.prototype=new CD();_.tS=AO;_.tN=DL+'Direction';_.tI=137;_.a=null;var vO,wO,xO,yO;function bP(){bP=lL;jP=FJ(new dJ());}
function aP(a,b){bP();iO(a);a.b=b;return a;}
function cP(){return this.b.nb();}
function dP(){var a,b;a=0;b=kk(this.b.ib());while(b!==null){if(sE('relative',lk(b,'position'))){a=bk(b);break;}b=kk(b);}return kz(this.b)-a;}
function eP(){var a,b;a=0;b=kk(this.b.ib());while(b!==null){if(sE('relative',lk(b,'position'))){a=ck(b);break;}b=kk(b);}return lz(this.b)-a;}
function fP(){return this.b.ob();}
function gP(a){bP();return sh(fK(jP,a),40);}
function hP(b){bP();var a;if(cK(jP,b)){return sh(fK(jP,b),40);}else{a=aP(new BO(),b);gK(jP,b,a);return a;}}
function iP(c,b){bP();var a;if(cK(jP,c)){return sh(fK(jP,c),40);}else{a=DO(new CO(),c,b);gK(jP,c,a);return a;}}
function BO(){}
_=BO.prototype=new gO();_.jb=cP;_.mb=dP;_.qb=eP;_.sb=fP;_.tN=DL+'UIObjectConnector';_.tI=138;_.b=null;var jP;function EO(){EO=lL;bP();}
function DO(b,a,c){EO();b.a=c;aP(b,a);return b;}
function FO(){return this.a;}
function CO(){}
_=CO.prototype=new BO();_.gb=FO;_.tN=DL+'UIObjectConnector$1';_.tI=139;function tP(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function uP(a){ng(new lP());dl(pP(new oP(),a));}
function kP(){}
_=kP.prototype=new CD();_.tN=EL+'BaseExamplesEntryPoint';_.tI=140;function nP(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=oF(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=Bq(new zq(),true);Ck(a.ib(),'backgroundColor','#ABCDEF');fF(),hF;d=xE(d,' ','&nbsp;');Eq(a,'<pre>'+d+'<\/pre>');cw(a);}
function lP(){}
_=lP.prototype=new CD();_.tN=EL+'BaseExamplesEntryPoint$1';_.tI=141;function pP(b,a){b.a=a;return b;}
function rP(){CP(this.a);}
function oP(){}
_=oP.prototype=new CD();_.bb=rP;_.tN=EL+'BaseExamplesEntryPoint$2';_.tI=142;function CP(c){var a,b;b=By(new oy());hp(cx('tabs'),b);Dy(b,EQ(new DQ()),'Rectilinear');Dy(b,AQ(new zQ()),'Bezier');Dy(b,cR(new bR()),'Straight');Cy(b,xP(new wP(),c,b));a=tP(c,'tab');if(a===null||sE('',a)){a='0';}cz(b,cD(a));}
function vP(){}
_=vP.prototype=new kP();_.tN=EL+'GwtDiagramsExample';_.tI=143;function xP(b,a,c){b.a=c;return b;}
function zP(a,b){return true;}
function AP(b,c){var a;a=sh(Fy(this.a,c),41);sQ(a);}
function wP(){}
_=wP.prototype=new CD();_.Db=zP;_.nc=AP;_.tN=EL+'GwtDiagramsExample$1';_.tI=144;function vQ(a){a.c=gp(new fp());}
function wQ(a){var b;mx(a);vQ(a);iz(a,'gwt-diagrams-example');b=cA(new aA());ox(a,b);dA(b,a.c);dA(b,yQ(a,rQ(a)));return a;}
function yQ(e,d){var a,b,c;a=vr(new ur());iz(a,'gwt-diagrams-sources-panel');for(b=fG(d);EF(b);){c=sh(FF(b),12);wr(a,c);}return a;}
function uQ(){}
_=uQ.prototype=new fx();_.tN=FL+'AbstractExample';_.tI=145;function lQ(a){a.a=AH(new yH());}
function mQ(a){wQ(a);lQ(a);a.b=qQ(a);Ck(a.c.ib(),'width','450px');Ck(a.c.ib(),'height','350px');a.D();return a;}
function nQ(b,a){hp(b.c,a);CH(b.a,a);}
function pQ(e,d,c,f,a){var b;b=ev(new cv(),d);iz(b,'example-connector');ip(e.c,b,c,f);bQ(e.b,b);if(a!==null){return iP(b,nh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',154,33,[a]));}return hP(b);}
function qQ(b){var a;a=FP(new EP(),b.c,true,b);return a;}
function rQ(f){var a,b,c,d,e;e=AH(new yH());b=vE(lg(f),46);a=yE(lg(f),b+1);CH(e,xu(new vu(),a+'.java',''));CH(e,xu(new vu(),'AbstractExample.java',''));CH(e,xu(new vu(),'AbstractConnectionsExample.java',''));for(d=fG(e);EF(d);){c=sh(FF(d),42);iz(c,'gwt-diagrams-source-link');yu(c,iQ(new hQ(),f,c));}return e;}
function sQ(c){var a,b;for(b=fG(c.a);EF(b);){a=sh(FF(b),39);a.Bc();}}
function tQ(){var a,b,c,d,e,f,g,h;a=pQ(this,'all',50,50,null);b=pQ(this,'all',100,100,null);this.z(a,b);c=pQ(this,'up',250,50,(tO(),yO));d=pQ(this,'down',300,100,(tO(),vO));this.z(c,d);e=pQ(this,'left',50,200,(tO(),wO));f=pQ(this,'right',100,250,(tO(),xO));this.z(e,f);g=pQ(this,'left',250,200,(tO(),wO));h=pQ(this,'left',300,250,(tO(),wO));this.z(g,h);}
function DP(){}
_=DP.prototype=new uQ();_.D=tQ;_.tN=FL+'AbstractConnectionsExample';_.tI=146;_.b=null;function aQ(){aQ=lL;ic();}
function FP(d,a,b,c){aQ();hc(d,a,b);return d;}
function bQ(a,b){z(a,b);Ck(b.ib(),'position','absolute');Ck(b.ib(),'zIndex','100');}
function cQ(c,b,a){return eQ(new dQ(),b,a,c);}
function EP(){}
_=EP.prototype=new gc();_.tN=FL+'AbstractConnectionsExample$1';_.tI=147;function fQ(){fQ=lL;vd();}
function eQ(d,a,b,c){fQ();ud(d,a,b);return d;}
function gQ(d,c,b){var a;sc(this,d,c,b);a=gP(c);if(a!==null){lO(a);}}
function dQ(){}
_=dQ.prototype=new td();_.lc=gQ;_.tN=FL+'AbstractConnectionsExample$2';_.tI=148;function iQ(b,a,c){b.a=c;return b;}
function kQ(a){Dm('../source/'+Au(this.a),'','');}
function hQ(){}
_=hQ.prototype=new CD();_.Fb=kQ;_.tN=FL+'AbstractConnectionsExample$3';_.tI=149;function AQ(a){mQ(a);return a;}
function CQ(a,b){nQ(this,uM(new sM(),a,b));}
function zQ(){}
_=zQ.prototype=new DP();_.z=CQ;_.tN=FL+'BezierExample';_.tI=150;function EQ(a){mQ(a);return a;}
function aR(a,b){nQ(this,CM(new AM(),a,b));}
function DQ(){}
_=DQ.prototype=new DP();_.z=aR;_.tN=FL+'RectilinearExample';_.tI=151;function cR(a){mQ(a);return a;}
function eR(c,a,b){nQ(c,dN(new cN(),a,b));}
function fR(a,b){eR(this,a,b);}
function gR(){var a,b;a=pQ(this,'connector 1',50,50,(tO(),yO));b=pQ(this,'connector 2',200,200,(tO(),vO));eR(this,a,b);}
function bR(){}
_=bR.prototype=new DP();_.z=fR;_.D=gR;_.tN=FL+'StraightConnectionsExample';_.tI=152;function sB(){uP(new vP());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{sB();}catch(a){b(d);}else{sB();}}
var zh=[{},{25:1},{1:1,25:1,36:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{9:1,25:1,36:1},{21:1,25:1},{25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{25:1},{14:1,25:1},{14:1,25:1},{11:1,14:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{13:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1},{18:1,25:1},{18:1,25:1},{18:1,25:1},{25:1},{13:1,17:1,25:1},{13:1,25:1},{19:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1,26:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{2:1,12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1,29:1},{25:1,29:1},{25:1,29:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,21:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{5:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{3:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1,42:1},{25:1,29:1},{2:1,12:1,22:1,24:1,25:1,26:1,27:1},{19:1,25:1},{25:1},{12:1,20:1,25:1,26:1,27:1},{25:1,29:1},{12:1,23:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,20:1,25:1,26:1,27:1},{4:1,12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1,28:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{10:1,14:1,25:1},{25:1},{25:1,30:1},{25:1,31:1},{25:1,31:1},{25:1},{25:1},{25:1},{25:1},{25:1,30:1},{25:1,37:1},{25:1,31:1},{25:1},{25:1,31:1},{10:1,14:1,25:1},{25:1},{25:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{25:1},{25:1},{25:1},{25:1},{25:1,38:1},{25:1,32:1},{25:1,35:1},{25:1,33:1},{25:1,35:1,40:1},{25:1,35:1,40:1},{25:1},{25:1},{15:1,25:1},{25:1},{23:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{7:1,25:1},{20:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{8:1,25:1},{25:1},{25:1},{25:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();