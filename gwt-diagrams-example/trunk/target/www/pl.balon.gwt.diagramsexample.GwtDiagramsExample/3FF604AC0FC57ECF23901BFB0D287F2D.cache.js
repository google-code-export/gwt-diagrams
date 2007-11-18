(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,aL='com.allen_sauer.gwt.dragdrop.client.',bL='com.allen_sauer.gwt.dragdrop.client.drop.',cL='com.allen_sauer.gwt.dragdrop.client.util.',dL='com.allen_sauer.gwt.dragdrop.client.util.impl.',eL='com.google.gwt.core.client.',fL='com.google.gwt.lang.',gL='com.google.gwt.user.client.',hL='com.google.gwt.user.client.impl.',iL='com.google.gwt.user.client.ui.',jL='com.google.gwt.user.client.ui.impl.',kL='java.io.',lL='java.lang.',mL='java.util.',nL='pl.balon.gwt.diagrams.client.common.bezier.',oL='pl.balon.gwt.diagrams.client.connection.',pL='pl.balon.gwt.diagrams.client.connection.calculator.',qL='pl.balon.gwt.diagrams.client.connection.data.',rL='pl.balon.gwt.diagrams.client.connector.',sL='pl.balon.gwt.diagramsexample.client.',tL='pl.balon.gwt.diagramsexample.client.examples.';function FK(){}
function sD(a){return this===a;}
function tD(){return CE(this);}
function uD(){return this.tN+'@'+this.hC();}
function qD(){}
_=qD.prototype={};_.eQ=sD;_.hC=tD;_.tS=uD;_.toString=function(){return this.tS();};_.tN=lL+'Object';_.tI=1;function vI(b,a){b.d=a;return b;}
function uI(){}
_=uI.prototype=new qD();_.tN=mL+'EventObject';_.tI=3;_.d=null;function ib(c,b,a){vI(c,b);c.c=a;return c;}
function kb(){var a;a=this.c!==null?'dropTarget='+hf(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+hf(this.d)+')';}
function hb(){}
_=hb.prototype=new uI();_.tS=kb;_.tN=aL+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ib(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new hb();_.tS=q;_.tN=aL+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function u(){u=FK;F=tJ(new xI());}
function s(a){a.g=x(a);}
function t(c,b,a){u();s(c);c.f=b!==null?b:ax();c.e=qP(c,c.f,a);B(c,c.e);c.l=Bb(new zb(),c);return c;}
function v(c,a,b){nz(a,'dragdrop-dragging');}
function w(b,a){xb(b.g,b.f,a);hz(a,'dragdrop-dragging');}
function x(a){return sb(new lb());}
function y(b,c){var a;a=vb(b.g,c,b.f);return a!==null?a:b.e;}
function z(a,b){{A(a,b,b);}}
function A(c,b,a){Fb(c.l,b,a);hz(b,'dragdrop-draggable');hz(a,'dragdrop-handle');AJ(F,b,a);}
function B(b,a){tb(b.g,a);}
function C(b,a){if(th(b.j,2)){hp(sh(b.j,2),a,b.k.a,b.k.d);}else if(th(b.j,3)){qu(sh(b.j,3),a,b.h);}else if(th(b.j,4)){fA(sh(b.j,4),a,b.h);}else if(th(b.j,5)){xr(sh(b.j,5),a,b.h);}else if(th(b.j,6)){sh(b.j,6).yc(a);}else{throw xD(new vD(),'Unable to handle initialDraggableParent '+lg(b.j));}}
function D(b,a){if(b.i!==null&&kE(b.i)!=0){Bk(a.ib(),'margin',b.i);}}
function E(b,a){b.j=a.p;if(th(b.j,2)){b.k=nf(new mf(),a,b.j);}else if(th(b.j,3)){b.h=bq(sh(b.j,3),a);}else if(th(b.j,4)){b.h=bq(sh(b.j,4),a);}else if(th(b.j,5)){b.h=bq(sh(b.j,5),a);}else if(th(b.j,6)){}else{throw xD(new vD(),"Unable to handle 'initialDraggableParent instanceof "+lg(b.j)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.i=kk(a.ib(),'margin');if(b.i!==null&&kE(b.i)!=0){Bk(a.ib(),'margin','0px');}}
function r(){}
_=r.prototype=new qD();_.tN=aL+'AbstractDragController';_.tI=6;_.e=null;_.f=null;_.h=0;_.i=null;_.j=null;_.k=null;_.l=null;var F;function bb(b,a){b.b=a;return b;}
function db(a){if(a.c==0){return;}Cb(a.b,a.d,a.e);a.a=AE()-a.c;a.c=0;}
function eb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=AE();}if(a.a>80){cl(a);}else{db(a);}}
function fb(){db(this);}
function ab(){}
_=ab.prototype=new qD();_.bb=fb;_.tN=aL+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function rb(a){a.a=oH(new mH());}
function sb(a){rb(a);return a;}
function tb(b,a){qH(b.a,a);}
function vb(g,h,a){var b,c,d,e,f,i,j,k;i=kf(new jf(),h,null);j=ge(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(je(f,i)){k=fe(f,j);if(k<=c){if(e===null|| !Ae(pb(b).ib(),pb(e).ib())){c=k;e=b;}}}}return e===null?null:e.a;}
function wb(a){return zF(a.a);}
function xb(h,b,d){var a,c,e,f,g;a=kf(new jf(),b,null);g=oH(new mH());for(f=wb(h);sF(f);){e=sh(tF(f),7);c=nb(new mb(),e);if(!Ae(d.ib(),pb(c).ib())){if(je(c.b,a)){qH(g,c);}}}h.b=sh(AH(g,nh('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',157,9,[])),8);kI(h.b);}
function lb(){}
_=lb.prototype=new qD();_.tN=aL+'DropControllerCollection';_.tI=8;_.b=null;function nb(c,a){var b;c.a=a;b=a.hb();if(!b.wb()){throw uC(new sC(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=kf(new jf(),b,null);return c;}
function pb(a){return a.a.hb();}
function qb(a){var b;b=sh(a,9);return Ae(pb(this).ib(),pb(b).ib())?1:(-1);}
function mb(){}
_=mb.prototype=new qD();_.u=qb;_.tN=aL+'DropControllerCollection$Candidate';_.tI=9;_.a=null;_.b=null;function Ab(a){a.d=bb(new ab(),a);a.f=tJ(new xI());}
function Bb(b,a){Ab(b);b.e=a;b.a=a.f;return b;}
function Cb(e,f,g){var a,b,c,d;c=nf(new mf(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=dD(0,eD(a,e.l));b=dD(0,eD(b,e.m));}Be(e.o.ib(),a,b);d=y(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.ec(e.g,e.e);}e.i=d;if(e.i!==null){e.i.cc(e.o,e.g,e.e);}}if(e.i!==null){e.i.lc(e.o,e.g,e.e);}}
function Db(b){var a;pk(b.b.ib());b.h=false;if(b.i!==null){b.i.ec(b.g,b.e);}b.i=null;jc(b.e,b.g,null);a=ib(new hb(),b.g,null);}
function Fb(c,b,a){if(a!==null){fv(a,c);AJ(c.f,a,b);}else{throw xD(new vD(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function ac(f){var a,c,d,e;f.g=sh(zJ(f.f,f.b),12);kc(f.e,f.g);f.o=f.e.d;f.l=Fe(f.a.ib())-f.o.ob();f.m=Ee(f.a.ib())-f.o.nb();e=nf(new mf(),f.b,f.a);c=nf(new mf(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;uk(f.b.ib());f.h=true;try{Cb(f,f.j,f.k);}catch(a){a=Ch(a);if(th(a,10)){d=a;Db(f);throw d;}else throw a;}}
function bc(b,c,d){var a;this.b=b;a=tj((cj(),nj));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Ej((cj(),nj));df();this.j=c;this.k=d;}
function cc(a){}
function dc(a){}
function ec(d,e,f){var a,c;if(!this.h){if(this.n){ac(this);}if(!this.h){return;}}Ej((cj(),nj));try{eb(this.d,e,f);}catch(a){a=Ch(a);if(th(a,10)){c=a;Db(this);throw c;}else throw a;}}
function fc(g,h,i){var a,a,d,e,f;d=tj((cj(),nj));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{pk(this.b.ib());Cb(this,h,i);this.h=false;if(this.i===null){Db(this);return;}{this.i.hb();}try{this.i.mc(this.o,this.g,this.e);}catch(a){a=Ch(a);if(th(a,11)){a;Db(this);return;}else throw a;}jc(this.e,this.g,this.i.hb());e=this.i.bc(this.o,this.g,this.e);}catch(a){a=Ch(a);if(th(a,10)){f=a;Db(this);throw f;}else throw a;}finally{this.i=null;}}
function zb(){}
_=zb.prototype=new qD();_.gc=bc;_.hc=cc;_.ic=dc;_.jc=ec;_.kc=fc;_.tN=aL+'MouseDragHandler';_.tI=10;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ic(){ic=FK;u();}
function hc(c,b,a){ic();t(c,b,a);return c;}
function jc(c,a,b){v(c,a,b);if(c.a!==null){c.a=null;if(c.c!==null){zA(c.c);c.c=null;}else{if(b===null){C(c,a);}}D(c,a);zA(c.d);c.d=null;}}
function kc(d,a){var b,c;w(d,a);d.a=a;d.c=lc(d,a);E(d,a);c=nf(new mf(),a,d.f);d.d=lx(new ex());hz(d.d,'dragdrop-movable-panel');if(d.c===null){qz(d.d,a.ob(),a.nb());}hp(d.f,d.d,c.a,c.d);b=d.c!==null?d.c:d.a;d.d.yc(b);}
function lc(c,a){var b;if(c.b){b=ut(new yr(),'this is a Drag Proxy');hz(b,'dragdrop-proxy');qz(b,c.a.ob(),c.a.nb());return b;}else{return null;}}
function gc(){}
_=gc.prototype=new r();_.tN=aL+'PickupDragController';_.tI=11;_.a=null;_.b=false;_.c=null;_.d=null;function Bc(b,a){b.g=a;hz(a,'dragdrop-boundary');return b;}
function Dc(d,c,b,a){nz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.zb(c,b,a);}
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
_=Ac.prototype=new qD();_.hb=ad;_.zb=bd;_.bc=cd;_.cc=dd;_.ec=ed;_.lc=fd;_.mc=gd;_.tN=bL+'AbstractDropController';_.tI=12;_.g=null;function jd(){jd=FK;pd=dv(new bv(),'x');}
function id(b,a){jd();Bc(b,a);return b;}
function kd(f,e){var a,b,c,d;d=lx(new ex());hz(d,'dragdrop-positioner');hp(ax(),d,(-500),(-500));d.yc(pd);a=lx(new ex());c=e.ob()-af(d);b=e.nb()-bf(d);qz(a,c,b);d.yc(a);return d;}
function ld(e,d,b,a){var c;c=Dc(e,d,b,a);od(e);return c;}
function md(d,c,b,a){Ec(d,c,b,a);d.f=kd(d,b);}
function nd(c,b,a){Fc(c,b,a);od(c);}
function od(a){if(a.f!==null){zA(a.f);}}
function qd(c,b,a){return ld(this,c,b,a);}
function rd(c,b,a){md(this,c,b,a);}
function sd(b,a){nd(this,b,a);}
function hd(){}
_=hd.prototype=new Ac();_.bc=qd;_.cc=rd;_.ec=sd;_.tN=bL+'AbstractPositioningDropController';_.tI=13;_.f=null;var pd;function oc(){oc=FK;jd();}
function nc(b,a){oc();id(b,a);b.d=Bd(new Ad(),a);return b;}
function pc(d,c,a,e){var b;b=d.eb(c,a,e);if(b!==null){hp(d.d.b,e,b.a,b.d);}}
function qc(e,d,b,a){var c;hp(e.d.b,b,e.c.a,e.c.d);c=ld(e,d,b,a);e.e=null;return c;}
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
_=mc.prototype=new hd();_.eb=tc;_.zb=uc;_.bc=vc;_.cc=wc;_.ec=xc;_.lc=yc;_.mc=zc;_.tN=bL+'AbsolutePositionDropController';_.tI=14;_.c=null;_.d=null;_.e=null;function vd(){vd=FK;oc();}
function ud(c,b,a){vd();nc(c,b);c.a=a;return c;}
function wd(b,a,d){var c;if(this.a){c=kf(new jf(),b,this.d.a);if(this.b===null){this.b=nf(new mf(),b,this.d.b);}else{tf(this.b,b);}pf(this.b,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.b;}else{return null;}}
function xd(d,c,a){var b;b=qc(this,d,c,a);this.b=null;return b;}
function yd(b,a){rc(this,b,a);this.b=null;}
function td(){}
_=td.prototype=new mc();_.eb=wd;_.bc=xd;_.ec=yd;_.tN=bL+'BoundaryDropController';_.tI=15;_.a=false;_.b=null;function Bd(b,a){b.b=a;return b;}
function Dd(a){return Ee(a.b.ib());}
function Ed(a){return Fe(a.b.ib());}
function Fd(b,a){b.a=a;}
function Ad(){}
_=Ad.prototype=new qD();_.tN=bL+'DropTargetInfo';_.tI=16;_.a=null;_.b=null;function bF(){bF=FK;dF=mh('[Ljava.lang.StackTraceElement;',[155],[35],[0],null);}
function EE(a){a.c=dF;}
function FE(a){bF();EE(a);return a;}
function aF(b,a){bF();EE(b);b.b=a;return b;}
function cF(c){var a,b;a=lg(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function eF(){return cF(this);}
function DE(){}
_=DE.prototype=new qD();_.tS=eF;_.tN=lL+'Throwable';_.tI=17;_.a=null;_.b=null;var dF;function oC(){oC=FK;bF();}
function mC(a){oC();FE(a);return a;}
function nC(b,a){oC();aF(b,a);return b;}
function lC(){}
_=lC.prototype=new DE();_.tN=lL+'Exception';_.tI=18;function ce(){ce=FK;oC();}
function be(a){ce();mC(a);return a;}
function ae(){}
_=ae.prototype=new lC();_.tN=bL+'VetoDropException';_.tI=19;function fe(b,a){var c,d;c=dD(b.b-a.a,a.a-b.c);d=dD(b.d-a.b,a.b-b.a);return dD(c,d);}
function ge(a){return ue(new te(),a.b+vh(ie(a)/2),a.d+vh(he(a)/2));}
function he(a){return a.a-a.d;}
function ie(a){return a.c-a.b;}
function je(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function ke(b,a){b.a=a;}
function le(b,a){b.b=a;}
function me(b,a){b.c=a;}
function ne(a,b){a.d=b;}
function oe(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function de(){}
_=de.prototype=new qD();_.tS=oe;_.tN=cL+'AbstractArea';_.tI=20;_.a=0;_.b=0;_.c=0;_.d=0;function re(){return '('+this.mb()+', '+this.qb()+')';}
function pe(){}
_=pe.prototype=new qD();_.tS=re;_.tN=cL+'AbstractLocation';_.tI=21;function ue(b,a,c){b.a=a;b.b=c;return b;}
function we(){return this.a;}
function xe(){return this.b;}
function te(){}
_=te.prototype=new pe();_.mb=we;_.qb=xe;_.tN=cL+'CoordinateLocation';_.tI=22;_.a=0;_.b=0;function ze(){ze=FK;{cf=new zf();}}
function Ae(b,a){ze();return Cf(cf,b,a);}
function Be(a,b,c){ze();a.style.left=b+'px';a.style.top=c+'px';}
function Ce(a){ze();return Ff(cf,a);}
function De(a){ze();return ag(cf,a);}
function Ee(a){ze();return bg(cf,a);}
function Fe(a){ze();return cg(cf,a);}
function af(a){ze();return fg(cf,a);}
function bf(a){ze();return gg(cf,a);}
function df(){ze();dg(cf);}
var cf=null;function hf(a){var b;b=lg(a);return mE(b,jE(b,46)+1);}
function kf(e,g,c){var a,b,d,f;b=jz(g);f=kz(g);if(c!==null){b-=jz(c);b-=Ce(c.ib());f-=kz(c);f-=De(c.ib());}d=b+g.ob();a=f+g.nb();le(e,b);ne(e,f);me(e,d);ke(e,a);return e;}
function jf(){}
_=jf.prototype=new de();_.tN=cL+'WidgetArea';_.tI=23;function nf(b,c,a){rf(b,c);qf(b,a);sf(b);return b;}
function pf(e,c,d,a,b){e.a=dD(c,eD(e.a,a));e.d=dD(d,eD(e.d,b));}
function qf(b,a){if(a===null||a===ax()){b.b=0;b.c=0;}else{b.b=jz(a)+Ce(a.ib());b.c=kz(a)+De(a.ib());}}
function rf(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=jz(b);a.f=kz(b);}}
function sf(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function tf(a,b){rf(a,b);sf(a);}
function uf(){return this.a;}
function vf(){return this.d;}
function wf(){return '('+this.a+', '+this.d+')';}
function mf(){}
_=mf.prototype=new pe();_.mb=uf;_.qb=vf;_.tS=wf;_.tN=cL+'WidgetLocation';_.tI=24;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function fg(a,b){return b.ob()-cg(a,b.ib());}
function gg(a,b){return b.nb()-bg(a,b.ib());}
function xf(){}
_=xf.prototype=new qD();_.tN=dL+'DOMUtilImpl';_.tI=25;function Ff(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function ag(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function bg(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function cg(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function dg(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function Df(){}
_=Df.prototype=new xf();_.tN=dL+'DOMUtilImplStandard';_.tI=26;function Cf(c,b,a){return !(!(b.compareDocumentPosition(a)&16));}
function yf(){}
_=yf.prototype=new Df();_.tN=dL+'DOMUtilImplMozilla';_.tI=27;function zf(){}
_=zf.prototype=new yf();_.tN=dL+'DOMUtilImplMozillaOld';_.tI=28;function lg(a){return a==null?null:a.tN;}
function ng(a){mg=a;}
var mg=null;function qg(a){return a==null?0:a.$H?a.$H:(a.$H=sg());}
function rg(a){return a==null?0:a.$H?a.$H:(a.$H=sg());}
function sg(){return ++tg;}
var tg=0;function yD(){yD=FK;oC();}
function wD(a){yD();mC(a);return a;}
function xD(b,a){yD();nC(b,a);return b;}
function vD(){}
_=vD.prototype=new lC();_.tN=lL+'RuntimeException';_.tI=29;function wg(){wg=FK;yD();}
function vg(c,b,a){wg();xD(c,'JavaScript '+b+' exception: '+a);return c;}
function ug(){}
_=ug.prototype=new vD();_.tN=eL+'JavaScriptException';_.tI=30;function zg(b,a){if(!th(a,13)){return false;}return Dg(b,sh(a,13));}
function Ag(a){return qg(a);}
function Bg(){return [];}
function Cg(){return {};}
function Eg(a){return zg(this,a);}
function Dg(a,b){return a===b;}
function Fg(){return Ag(this);}
function bh(){return ah(this);}
function ah(a){if(a.toString)return a.toString();return '[object]';}
function xg(){}
_=xg.prototype=new qD();_.eQ=Eg;_.hC=Fg;_.tS=bh;_.tN=eL+'JavaScriptObject';_.tI=31;function dh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function fh(a,b,c){return a[b]=c;}
function hh(a,b){return gh(a,b);}
function gh(a,b){return dh(new ch(),b,a.tI,a.b,a.tN);}
function ih(b,a){return b[a];}
function kh(b,a){return b[a];}
function jh(a){return a.length;}
function mh(e,d,c,b,a){return lh(e,d,c,b,0,jh(b),a);}
function lh(j,i,g,c,e,a,b){var d,f,h;if((f=ih(c,e))<0){throw hD(new gD());}h=dh(new ch(),f,ih(i,e),ih(g,e),j);++e;if(e<a){j=mE(j,1);for(d=0;d<f;++d){fh(h,d,lh(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){fh(h,d,b);}}return h;}
function nh(f,e,c,g){var a,b,d;b=jh(g);d=dh(new ch(),b,e,c,f);for(a=0;a<b;++a){fh(d,a,kh(g,a));}return d;}
function oh(a,b,c){if(c!==null&&a.b!=0&& !th(c,a.b)){throw zB(new yB());}return fh(a,b,c);}
function ch(){}
_=ch.prototype=new qD();_.tN=fL+'Array';_.tI=32;function rh(b,a){return !(!(b&&yh[b][a]));}
function sh(b,a){if(b!=null)rh(b.tI,a)||xh();return b;}
function th(b,a){return b!=null&&rh(b.tI,a);}
function uh(a){return a&65535;}
function vh(a){if(a>(BC(),CC))return BC(),CC;if(a<(BC(),DC))return BC(),DC;return a>=0?Math.floor(a):Math.ceil(a);}
function xh(){throw gC(new fC());}
function wh(a){if(a!==null){throw gC(new fC());}return a;}
function zh(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var yh;function Ch(a){if(th(a,14)){return a;}return vg(new ug(),Eh(a),Dh(a));}
function Dh(a){return a.message;}
function Eh(a){return a.name;}
function bi(){bi=FK;yD();}
function ai(b,a){bi();wD(b);return b;}
function Fh(){}
_=Fh.prototype=new vD();_.tN=gL+'CommandCanceledException';_.tI=35;function wi(a){a.a=ei(new di(),a);a.b=oH(new mH());a.d=ii(new hi(),a);a.f=mi(new li(),a);}
function xi(a){wi(a);return a;}
function zi(c){var a,b,d;a=oi(c.f);ri(c.f);b=null;if(th(a,15)){b=ai(new Fh(),sh(a,15));}else{}if(b!==null){d=mg;if(d!==null){CO(d,b);}}Ci(c,false);Bi(c);}
function Ai(e,d){var a,b,c,f;f=false;try{Ci(e,true);si(e.f,e.b.b);cm(e.a,10000);while(pi(e.f)){b=qi(e.f);c=true;try{if(b===null){return;}if(th(b,15)){a=sh(b,15);a.bb();}else{}}finally{f=ti(e.f);if(f){return;}if(c){ri(e.f);}}if(Fi(AE(),d)){return;}}}finally{if(!f){El(e.a);Ci(e,false);Bi(e);}}}
function Bi(a){if(!wH(a.b)&& !a.e&& !a.c){Di(a,true);cm(a.d,1);}}
function Ci(b,a){b.c=a;}
function Di(b,a){b.e=a;}
function Ei(b,a){qH(b.b,a);Bi(b);}
function Fi(a,b){return cD(a-b)>=100;}
function ci(){}
_=ci.prototype=new qD();_.tN=gL+'CommandExecutor';_.tI=36;_.c=false;_.e=false;function Fl(){Fl=FK;im=oH(new mH());{hm();}}
function Dl(a){Fl();return a;}
function El(a){if(a.b){dm(a.c);}else{em(a.c);}yH(im,a);}
function am(e,d){var a,c;try{bm(e);}catch(a){a=Ch(a);if(th(a,14)){c=a;CO(d,c);}else throw a;}}
function bm(a){if(!a.b){yH(im,a);}a.uc();}
function cm(b,a){if(a<=0){throw qC(new pC(),'must be positive');}El(b);b.b=false;b.c=fm(b,a);qH(im,b);}
function dm(a){Fl();$wnd.clearInterval(a);}
function em(a){Fl();$wnd.clearTimeout(a);}
function fm(b,a){Fl();return $wnd.setTimeout(function(){b.cb();},a);}
function gm(){var a;a=mg;if(a!==null){am(this,a);}else{bm(this);}}
function hm(){Fl();mm(new zl());}
function yl(){}
_=yl.prototype=new qD();_.cb=gm;_.tN=gL+'Timer';_.tI=37;_.b=false;_.c=0;var im;function fi(){fi=FK;Fl();}
function ei(b,a){fi();b.a=a;Dl(b);return b;}
function gi(){if(!this.a.c){return;}zi(this.a);}
function di(){}
_=di.prototype=new yl();_.uc=gi;_.tN=gL+'CommandExecutor$1';_.tI=38;function ji(){ji=FK;Fl();}
function ii(b,a){ji();b.a=a;Dl(b);return b;}
function ki(){Di(this.a,false);Ai(this.a,AE());}
function hi(){}
_=hi.prototype=new yl();_.uc=ki;_.tN=gL+'CommandExecutor$2';_.tI=39;function mi(b,a){b.d=a;return b;}
function oi(a){return tH(a.d.b,a.b);}
function pi(a){return a.c<a.a;}
function qi(b){var a;b.b=b.c;a=tH(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function ri(a){xH(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function si(b,a){b.a=a;}
function ti(a){return a.b==(-1);}
function ui(){return pi(this);}
function vi(){return qi(this);}
function li(){}
_=li.prototype=new qD();_.vb=ui;_.Ab=vi;_.tN=gL+'CommandExecutor$CircularIterator';_.tI=40;_.a=0;_.b=(-1);_.c=0;function cj(){cj=FK;tk=oH(new mH());{lk=new an();jn(lk);}}
function dj(a){cj();qH(tk,a);}
function ej(b,a){cj();Cn(lk,b,a);}
function fj(a,b){cj();return fn(lk,a,b);}
function gj(){cj();return En(lk,'A');}
function hj(){cj();return En(lk,'div');}
function ij(a){cj();return En(lk,a);}
function jj(){cj();return En(lk,'tbody');}
function kj(){cj();return En(lk,'td');}
function lj(){cj();return En(lk,'tr');}
function mj(){cj();return En(lk,'table');}
function qj(b,a,d){cj();var c;c=mg;if(c!==null){oj(b,a,d,c);}else{pj(b,a,d);}}
function oj(e,d,g,f){cj();var a,c;try{pj(e,d,g);}catch(a){a=Ch(a);if(th(a,14)){c=a;CO(f,c);}else throw a;}}
function pj(b,a,c){cj();var d;if(a===sk){if(Dj(b)==8192){sk=null;}}d=nj;nj=b;try{c.Eb(b);}finally{nj=d;}}
function rj(b,a){cj();Fn(lk,b,a);}
function sj(a){cj();return ao(lk,a);}
function tj(a){cj();return gn(lk,a);}
function uj(a){cj();return bo(lk,a);}
function vj(a){cj();return co(lk,a);}
function wj(a){cj();return eo(lk,a);}
function xj(a){cj();return rn(lk,a);}
function yj(a){cj();return fo(lk,a);}
function zj(a){cj();return go(lk,a);}
function Aj(a){cj();return ho(lk,a);}
function Bj(a){cj();return sn(lk,a);}
function Cj(a){cj();return tn(lk,a);}
function Dj(a){cj();return io(lk,a);}
function Ej(a){cj();un(lk,a);}
function Fj(a){cj();return vn(lk,a);}
function ak(a){cj();return cn(lk,a);}
function bk(a){cj();return dn(lk,a);}
function ck(b,a){cj();return jo(lk,b,a);}
function dk(a){cj();return ko(lk,a);}
function fk(a,b){cj();return mo(lk,a,b);}
function ek(a,b){cj();return lo(lk,a,b);}
function gk(a){cj();return no(lk,a);}
function hk(a){cj();return wn(lk,a);}
function ik(a){cj();return oo(lk,a);}
function jk(a){cj();return xn(lk,a);}
function kk(b,a){cj();return po(lk,b,a);}
function mk(c,a,b){cj();zn(lk,c,a,b);}
function nk(b,a){cj();return kn(lk,b,a);}
function ok(a){cj();var b,c;c=true;if(tk.b>0){b=sh(tH(tk,tk.b-1),16);if(!(c=b.dc(a))){rj(a,true);Ej(a);}}return c;}
function pk(a){cj();if(sk!==null&&fj(a,sk)){sk=null;}ln(lk,a);}
function qk(b,a){cj();qo(lk,b,a);}
function rk(a){cj();yH(tk,a);}
function uk(a){cj();sk=a;An(lk,a);}
function vk(b,a,c){cj();ro(lk,b,a,c);}
function xk(a,b,c){cj();to(lk,a,b,c);}
function wk(a,b,c){cj();so(lk,a,b,c);}
function yk(a,b){cj();uo(lk,a,b);}
function zk(a,b){cj();vo(lk,a,b);}
function Ak(a,b){cj();wo(lk,a,b);}
function Bk(b,a,c){cj();xo(lk,b,a,c);}
function Ck(a,b){cj();nn(lk,a,b);}
function Dk(a){cj();return on(lk,a);}
function Ek(){cj();return yo(lk);}
function Fk(){cj();return zo(lk);}
var nj=null,lk=null,sk=null,tk;function bl(){bl=FK;dl=xi(new ci());}
function cl(a){bl();if(a===null){throw kD(new jD(),'cmd can not be null');}Ei(dl,a);}
var dl;function gl(a){if(th(a,17)){return fj(this,sh(a,17));}return zg(zh(this,el),a);}
function hl(){return Ag(zh(this,el));}
function il(){return Dk(this);}
function el(){}
_=el.prototype=new xg();_.eQ=gl;_.hC=hl;_.tS=il;_.tN=gL+'Element';_.tI=41;function nl(a){return zg(zh(this,jl),a);}
function ol(){return Ag(zh(this,jl));}
function pl(){return Fj(this);}
function jl(){}
_=jl.prototype=new xg();_.eQ=nl;_.hC=ol;_.tS=pl;_.tN=gL+'Event';_.tI=42;function rl(){rl=FK;ul=oH(new mH());{vl=new Co();if(!bp(vl)){vl=null;}}}
function sl(e,d){rl();var a,c;try{tl(e);}catch(a){a=Ch(a);if(th(a,14)){c=a;CO(d,c);}else throw a;}}
function tl(a){rl();var b,c;for(b=zF(ul);sF(b);){c=wh(tF(b));null.Ec();}}
function wl(a){rl();if(vl!==null){Eo(vl,a);}}
function xl(b){rl();var a;a=mg;if(a!==null){sl(b,a);}else{tl(b);}}
var ul,vl=null;function Bl(){while((Fl(),im).b>0){El(sh(tH((Fl(),im),0),18));}}
function Cl(){return null;}
function zl(){}
_=zl.prototype=new qD();_.pc=Bl;_.qc=Cl;_.tN=gL+'Timer$1';_.tI=43;function lm(){lm=FK;nm=oH(new mH());Dm=oH(new mH());{ym();}}
function mm(a){lm();qH(nm,a);}
function om(d){lm();var a,c;try{pm();}catch(a){a=Ch(a);if(th(a,14)){c=a;CO(d,c);}else throw a;}}
function pm(){lm();var a,b;for(a=zF(nm);sF(a);){b=sh(tF(a),19);b.pc();}}
function qm(d){lm();var a,c;try{return rm();}catch(a){a=Ch(a);if(th(a,14)){c=a;CO(d,c);return null;}else throw a;}}
function rm(){lm();var a,b,c,d;d=null;for(a=zF(nm);sF(a);){b=sh(tF(a),19);c=b.qc();{d=c;}}return d;}
function sm(d){lm();var a,c;try{tm();}catch(a){a=Ch(a);if(th(a,14)){c=a;CO(d,c);}else throw a;}}
function tm(){lm();var a,b;for(a=zF(Dm);sF(a);){b=wh(tF(a));null.Ec();}}
function um(){lm();return Ek();}
function vm(){lm();return Fk();}
function wm(){lm();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function xm(){lm();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function ym(){lm();__gwt_initHandlers(function(){Bm();},function(){return Am();},function(){zm();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function zm(){lm();var a;a=mg;if(a!==null){om(a);}else{pm();}}
function Am(){lm();var a;a=mg;if(a!==null){return qm(a);}else{return rm();}}
function Bm(){lm();var a;a=mg;if(a!==null){sm(a);}else{tm();}}
function Cm(c,b,a){lm();$wnd.open(c,b,a);}
var nm,Dm;function Cn(c,b,a){b.appendChild(a);}
function En(b,a){return $doc.createElement(a);}
function Fn(c,b,a){b.cancelBubble=a;}
function ao(b,a){return !(!a.altKey);}
function bo(b,a){return a.clientX|| -1;}
function co(b,a){return a.clientY|| -1;}
function eo(b,a){return !(!a.ctrlKey);}
function fo(b,a){return a.which||(a.keyCode|| -1);}
function go(b,a){return !(!a.metaKey);}
function ho(b,a){return !(!a.shiftKey);}
function io(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function jo(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function ko(c,b){var a=$doc.getElementById(b);return a||null;}
function mo(d,a,b){var c=a[b];return c==null?null:String(c);}
function lo(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function no(b,a){return a.__eventBits||0;}
function oo(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.kb(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function po(d,b,a){var c=b.style[a];return c==null?null:c;}
function qo(c,b,a){b.removeChild(a);}
function ro(c,b,a,d){b.setAttribute(a,d);}
function to(c,a,b,d){a[b]=d;}
function so(c,a,b,d){a[b]=d;}
function uo(c,a,b){a.__listener=b;}
function vo(c,a,b){if(!b){b='';}a.innerHTML=b;}
function wo(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function xo(c,b,a,d){b.style[a]=d;}
function yo(a){return $doc.body.clientHeight;}
function zo(a){return $doc.body.clientWidth;}
function Ao(a){return oo(this,a);}
function Em(){}
_=Em.prototype=new qD();_.kb=Ao;_.tN=hL+'DOMImpl';_.tI=44;function rn(b,a){return a.relatedTarget?a.relatedTarget:null;}
function sn(b,a){return a.target||null;}
function tn(b,a){return a.relatedTarget||null;}
function un(b,a){a.preventDefault();}
function vn(b,a){return a.toString();}
function wn(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function xn(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function yn(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){qj(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!ok(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)qj(b,a,c);};$wnd.__captureElem=null;}
function zn(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function An(b,a){$wnd.__captureElem=a;}
function Bn(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function pn(){}
_=pn.prototype=new Em();_.tN=hL+'DOMImplStandard';_.tI=45;function fn(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function gn(c,b){var a=b.button;if(a==0){return 1;}else if(a==1){return 4;}return a|| -1;}
function jn(a){yn(a);hn(a);}
function hn(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function kn(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function ln(b,a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function nn(c,b,a){Bn(c,b,a);mn(c,b,a);}
function mn(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function on(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function Fm(){}
_=Fm.prototype=new pn();_.tN=hL+'DOMImplMozilla';_.tI=46;function cn(e,a){var d=$doc.defaultView.getComputedStyle(a,null);var b=$doc.getBoxObjectFor(a).x-Math.round(d.getPropertyCSSValue('border-left-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var c=a.parentNode;while(c){if(c.scrollLeft>0){b-=c.scrollLeft;}c=c.parentNode;}return b+$doc.body.scrollLeft+$doc.documentElement.scrollLeft;}
function dn(d,a){var c=$doc.defaultView.getComputedStyle(a,null);var e=$doc.getBoxObjectFor(a).y-Math.round(c.getPropertyCSSValue('border-top-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var b=a.parentNode;while(b){if(b.scrollTop>0){e-=b.scrollTop;}b=b.parentNode;}return e+$doc.body.scrollTop+$doc.documentElement.scrollTop;}
function an(){}
_=an.prototype=new Fm();_.tN=hL+'DOMImplMozillaOld';_.tI=47;function dp(a){xl(a);}
function Bo(){}
_=Bo.prototype=new qD();_.tN=hL+'HistoryImpl';_.tI=48;function bp(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;dp(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function Fo(){}
_=Fo.prototype=new Bo();_.tN=hL+'HistoryImplStandard';_.tI=49;function Eo(d,a){if(a==null||a.length==0){var c=$wnd.location.href;var b=c.indexOf('#');if(b!= -1)c=c.substring(0,b);$wnd.location=c+'#';}else{$wnd.location.hash=encodeURIComponent(a);}}
function Co(){}
_=Co.prototype=new Fo();_.tN=hL+'HistoryImplMozilla';_.tI=50;function hz(b,a){Az(b.pb(),a,true);}
function jz(a){return ak(a.ib());}
function kz(a){return bk(a.ib());}
function lz(a){return ek(a.q,'offsetHeight');}
function mz(a){return ek(a.q,'offsetWidth');}
function nz(b,a){Az(b.pb(),a,false);}
function oz(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function pz(b,a){if(b.q!==null){oz(b,b.q,a);}b.q=a;}
function qz(b,c,a){if(c>=0){b.zc(c+'px');}if(a>=0){b.vc(a+'px');}}
function rz(b,a){zz(b.pb(),a);}
function sz(b,a){Ck(b.ib(),a|gk(b.ib()));}
function tz(){return this.q;}
function uz(){return lz(this);}
function vz(){return mz(this);}
function wz(){return this.q;}
function xz(a){return fk(a,'className');}
function yz(a){Bk(this.q,'height',a);}
function zz(a,b){xk(a,'className',b);}
function Az(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw xD(new vD(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=oE(j);if(kE(j)==0){throw qC(new pC(),'Style names cannot be empty');}i=xz(c);e=hE(i,j);while(e!=(-1)){if(e==0||dE(i,e-1)==32){f=e+kE(j);g=kE(i);if(f==g||f<g&&dE(i,f)==32){break;}}e=iE(i,j,e+1);}if(a){if(e==(-1)){if(kE(i)>0){i+=' ';}xk(c,'className',i+j);}}else{if(e!=(-1)){b=oE(nE(i,0,e));d=oE(mE(i,e+kE(j)));if(kE(b)==0){h=d;}else if(kE(d)==0){h=b;}else{h=b+' '+d;}xk(c,'className',h);}}}
function Bz(a,b){a.style.display=b?'':'none';}
function Cz(a){Bz(this.q,a);}
function Dz(a){Bk(this.q,'width',a);}
function Ez(){if(this.q===null){return '(null handle)';}return Dk(this.q);}
function gz(){}
_=gz.prototype=new qD();_.ib=tz;_.nb=uz;_.ob=vz;_.pb=wz;_.vc=yz;_.xc=Cz;_.zc=Dz;_.tS=Ez;_.tN=iL+'UIObject';_.tI=51;_.q=null;function yA(a){if(!a.wb()){throw uC(new sC(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.oc();}finally{a.F();yk(a.ib(),null);a.o=false;}}
function zA(a){if(th(a.p,24)){sh(a.p,24).tc(a);}else if(a.p!==null){throw uC(new sC(),"This widget's parent does not implement HasWidgets");}}
function AA(b,a){if(b.wb()){yk(b.ib(),null);}pz(b,a);if(b.wb()){yk(a,b);}}
function BA(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.wb()){c.ac();}c.p=null;}else{if(a!==null){throw uC(new sC(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.wb()){c.Cb();}}}
function CA(){}
function DA(){}
function EA(){return this.o;}
function FA(){if(this.wb()){throw uC(new sC(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;yk(this.ib(),this);this.E();this.fc();}
function aB(a){}
function bB(){yA(this);}
function cB(){}
function dB(){}
function hA(){}
_=hA.prototype=new gz();_.E=CA;_.F=DA;_.wb=EA;_.Cb=FA;_.Eb=aB;_.ac=bB;_.fc=cB;_.oc=dB;_.tN=iL+'Widget';_.tI=52;_.o=false;_.p=null;function vv(b,a){BA(a,b);}
function xv(b,a){BA(a,null);}
function yv(){var a,b;for(b=this.xb();b.vb();){a=sh(b.Ab(),12);a.Cb();}}
function zv(){var a,b;for(b=this.xb();b.vb();){a=sh(b.Ab(),12);a.ac();}}
function Av(){}
function Bv(){}
function uv(){}
_=uv.prototype=new hA();_.E=yv;_.F=zv;_.fc=Av;_.oc=Bv;_.tN=iL+'Panel';_.tI=53;function Ap(a){a.f=oA(new iA(),a);}
function Bp(a){Ap(a);return a;}
function Cp(c,a,b){zA(a);pA(c.f,a);ej(b,a.ib());vv(c,a);}
function Dp(d,b,a){var c;Fp(d,a);if(b.p===d){c=bq(d,b);if(c<a){a--;}}return a;}
function Ep(b,a){if(a<0||a>=b.f.b){throw xC(new wC());}}
function Fp(b,a){if(a<0||a>b.f.b){throw xC(new wC());}}
function cq(b,a){return rA(b.f,a);}
function bq(b,a){return sA(b.f,a);}
function dq(e,b,c,a,d){a=Dp(e,b,a);zA(b);tA(e.f,b,a);if(d){mk(c,b.ib(),a);}else{ej(c,b.ib());}vv(e,b);}
function eq(a){return uA(a.f);}
function fq(b,c){var a;if(c.p!==b){return false;}xv(b,c);a=c.ib();qk(jk(a),a);wA(b.f,c);return true;}
function gq(){return eq(this);}
function hq(a){return fq(this,a);}
function zp(){}
_=zp.prototype=new uv();_.xb=gq;_.tc=hq;_.tN=iL+'ComplexPanel';_.tI=54;function fp(a){Bp(a);AA(a,hj());Bk(a.ib(),'position','relative');Bk(a.ib(),'overflow','hidden');return a;}
function gp(a,b){Cp(a,b,a.ib());}
function hp(b,d,a,c){zA(d);kp(b,d,a,c);gp(b,d);}
function jp(b,c){var a;a=fq(b,c);if(a){lp(c.ib());}return a;}
function kp(c,e,b,d){var a;a=e.ib();if(b==(-1)&&d==(-1)){lp(a);}else{Bk(a,'position','absolute');Bk(a,'left',b+'px');Bk(a,'top',d+'px');}}
function lp(a){Bk(a,'left','');Bk(a,'top','');Bk(a,'position','');}
function mp(a){return jp(this,a);}
function ep(){}
_=ep.prototype=new zp();_.tc=mp;_.tN=iL+'AbsolutePanel';_.tI=55;function op(a){Bp(a);a.e=mj();a.d=jj();ej(a.e,a.d);AA(a,a.e);return a;}
function qp(c,d,a){var b;b=jk(d.ib());xk(b,'height',a);}
function rp(c,b,a){xk(b,'align',a.a);}
function sp(c,b,a){Bk(b,'verticalAlign',a.a);}
function tp(b,c,d){var a;a=jk(c.ib());xk(a,'width',d);}
function np(){}
_=np.prototype=new zp();_.tN=iL+'CellPanel';_.tI=56;_.d=null;_.e=null;function jF(d,a,b){var c;while(a.vb()){c=a.Ab();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function lF(a){throw gF(new fF(),'add');}
function mF(b){var a;a=jF(this,this.xb(),b);return a!==null;}
function nF(){var a,b,c;c=BD(new AD());a=null;CD(c,'[');b=this.xb();while(b.vb()){if(a!==null){CD(c,a);}else{a=', ';}CD(c,xE(b.Ab()));}CD(c,']');return aE(c);}
function iF(){}
_=iF.prototype=new qD();_.s=lF;_.B=mF;_.tS=nF;_.tN=mL+'AbstractCollection';_.tI=57;function yF(b,a){throw yC(new wC(),'Index: '+a+', Size: '+b.b);}
function zF(a){return qF(new pF(),a);}
function AF(b,a){throw gF(new fF(),'add');}
function BF(a){this.r(this.Ac(),a);return true;}
function CF(e){var a,b,c,d,f;if(e===this){return true;}if(!th(e,29)){return false;}f=sh(e,29);if(this.Ac()!=f.Ac()){return false;}c=zF(this);d=f.xb();while(sF(c)){a=tF(c);b=tF(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function DF(){var a,b,c,d;c=1;a=31;b=zF(this);while(sF(b)){d=tF(b);c=31*c+(d===null?0:d.hC());}return c;}
function EF(){return zF(this);}
function FF(a){throw gF(new fF(),'remove');}
function oF(){}
_=oF.prototype=new iF();_.r=AF;_.s=BF;_.eQ=CF;_.hC=DF;_.xb=EF;_.sc=FF;_.tN=mL+'AbstractList';_.tI=58;function nH(a){{rH(a);}}
function oH(a){nH(a);return a;}
function qH(b,a){eI(b.a,b.b++,a);return true;}
function pH(d,a){var b,c;c=a.xb();b=c.vb();while(c.vb()){eI(d.a,d.b++,c.Ab());}return b;}
function rH(a){a.a=Bg();a.b=0;}
function tH(b,a){if(a<0||a>=b.b){yF(b,a);}return aI(b.a,a);}
function uH(b,a){return vH(b,a,0);}
function vH(c,b,a){if(a<0){yF(c,a);}for(;a<c.b;++a){if(FH(b,aI(c.a,a))){return a;}}return (-1);}
function wH(a){return a.b==0;}
function xH(c,a){var b;b=tH(c,a);cI(c.a,a,1);--c.b;return b;}
function yH(c,b){var a;a=uH(c,b);if(a==(-1)){return false;}xH(c,a);return true;}
function zH(d,a,b){var c;c=tH(d,a);eI(d.a,a,b);return c;}
function AH(c,a){var b;if(a.a<c.b){a=hh(a,c.b);}for(b=0;b<c.b;++b){oh(a,b,aI(c.a,b));}if(a.a>c.b){oh(a,c.b,null);}return a;}
function CH(a,b){if(a<0||a>this.b){yF(this,a);}BH(this.a,a,b);++this.b;}
function DH(a){return qH(this,a);}
function BH(a,b,c){a.splice(b,0,c);}
function EH(a){return uH(this,a)!=(-1);}
function FH(a,b){return a===b||a!==null&&a.eQ(b);}
function bI(a){return tH(this,a);}
function aI(a,b){return a[b];}
function dI(a){return xH(this,a);}
function cI(a,c,b){a.splice(c,b);}
function eI(a,b,c){a[b]=c;}
function fI(){return this.b;}
function mH(){}
_=mH.prototype=new oF();_.r=CH;_.s=DH;_.B=EH;_.tb=bI;_.sc=dI;_.Ac=fI;_.tN=mL+'ArrayList';_.tI=59;_.a=null;_.b=0;function vp(a){oH(a);return a;}
function xp(d,c){var a,b;for(a=zF(d);sF(a);){b=sh(tF(a),20);b.Fb(c);}}
function up(){}
_=up.prototype=new mH();_.tN=iL+'ClickListenerCollection';_.tI=60;function kq(a,b){if(a.d!==null){throw uC(new sC(),'Composite.initWidget() may only be called once.');}zA(b);AA(a,b.ib());a.d=b;BA(b,a);}
function lq(){if(this.d===null){throw uC(new sC(),'initWidget() was never called in '+lg(this));}return this.q;}
function mq(){if(this.d!==null){return this.d.wb();}return false;}
function nq(){this.d.Cb();this.fc();}
function oq(){try{this.oc();}finally{this.d.ac();}}
function iq(){}
_=iq.prototype=new hA();_.ib=lq;_.wb=mq;_.Cb=nq;_.ac=oq;_.tN=iL+'Composite';_.tI=61;_.d=null;function qq(a){Bp(a);AA(a,hj());return a;}
function sq(b,c){var a;a=c.ib();Bk(a,'width','100%');Bk(a,'height','100%');c.xc(false);}
function tq(b,c,a){dq(b,c,b.ib(),a,true);sq(b,c);}
function uq(b,c){var a;a=fq(b,c);if(a){vq(b,c);if(b.b===c){b.b=null;}}return a;}
function vq(a,b){Bk(b.ib(),'width','');Bk(b.ib(),'height','');b.xc(true);}
function wq(b,a){Ep(b,a);if(b.b!==null){b.b.xc(false);}b.b=cq(b,a);b.b.xc(true);}
function xq(a){return uq(this,a);}
function pq(){}
_=pq.prototype=new zp();_.tc=xq;_.tN=iL+'DeckPanel';_.tI=62;_.b=null;function lx(a){mx(a,hj());return a;}
function mx(b,a){AA(b,a);return b;}
function nx(a,b){if(a.n!==null){throw uC(new sC(),'SimplePanel can only contain one child widget');}a.yc(b);}
function px(a,b){if(b===a.n){return;}if(b!==null){zA(b);}if(a.n!==null){a.tc(a.n);}a.n=b;if(b!==null){ej(a.fb(),a.n.ib());vv(a,b);}}
function qx(){return this.ib();}
function rx(){return hx(new fx(),this);}
function sx(a){if(this.n!==a){return false;}xv(this,a);qk(this.fb(),a.ib());this.n=null;return true;}
function tx(a){px(this,a);}
function ex(){}
_=ex.prototype=new uv();_.fb=qx;_.xb=rx;_.tc=sx;_.yc=tx;_.tN=iL+'SimplePanel';_.tI=63;_.n=null;function cw(){cw=FK;rw=kB(new fB());}
function Dv(a){cw();mx(a,mB(rw));iw(a,0,0);return a;}
function Ev(b,a){cw();Dv(b);b.g=a;return b;}
function Fv(c,a,b){cw();Ev(c,a);c.k=b;return c;}
function aw(b,a){if(a.blur){a.blur();}}
function bw(c){var a,b,d;a=c.l;if(!a){jw(c,false);mw(c);}b=vh((vm()-ew(c))/2);d=vh((um()-dw(c))/2);iw(c,wm()+b,xm()+d);if(!a){jw(c,true);}}
function dw(a){return lz(a);}
function ew(a){return mz(a);}
function fw(b,a){if(!b.l){return;}b.l=false;jp(ax(),b);b.ib();}
function gw(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.vc(a.h);}if(a.i!==null){b.zc(a.i);}}}
function hw(e,b){var a,c,d,f;d=Bj(b);c=nk(e.ib(),d);f=Dj(b);switch(f){case 128:{a=(uh(yj(b)),av(b),true);return a&&(c|| !e.k);}case 512:{a=(uh(yj(b)),av(b),true);return a&&(c|| !e.k);}case 256:{a=(uh(yj(b)),av(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((cj(),sk)!==null){return true;}if(!c&&e.g&&f==4){fw(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){aw(e,d);return false;}}}return !e.k||c;}
function iw(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.ib();Bk(a,'left',b+'px');Bk(a,'top',d+'px');}
function jw(a,b){Bk(a.ib(),'visibility',b?'visible':'hidden');a.ib();}
function kw(a,b){px(a,b);gw(a);}
function lw(a,b){a.i=b;gw(a);if(kE(b)==0){a.i=null;}}
function mw(a){if(a.l){return;}a.l=true;dj(a);Bk(a.ib(),'position','absolute');if(a.m!=(-1)){iw(a,a.j,a.m);}gp(ax(),a);a.ib();}
function nw(){return nB(rw,this.ib());}
function ow(){return dw(this);}
function pw(){return ew(this);}
function qw(){return nB(rw,this.ib());}
function sw(){rk(this);yA(this);}
function tw(a){return hw(this,a);}
function uw(a){this.h=a;gw(this);if(kE(a)==0){this.h=null;}}
function vw(a){jw(this,a);}
function ww(a){kw(this,a);}
function xw(a){lw(this,a);}
function Cv(){}
_=Cv.prototype=new ex();_.fb=nw;_.nb=ow;_.ob=pw;_.pb=qw;_.ac=sw;_.dc=tw;_.vc=uw;_.xc=vw;_.yc=ww;_.zc=xw;_.tN=iL+'PopupPanel';_.tI=64;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var rw;function Cq(){Cq=FK;cw();}
function zq(a){a.a=tt(new yr());a.f=lr(new hr());}
function Aq(b,a){Cq();Bq(b,a,true);return b;}
function Bq(c,a,b){Cq();Fv(c,a,b);zq(c);pt(c.f,0,0,c.a);c.f.vc('100%');kt(c.f,0);mt(c.f,0);nt(c.f,0);is(c.f.b,1,0,'100%');ls(c.f.b,1,0,'100%');hs(c.f.b,1,0,(Dt(),Et),(eu(),gu));kw(c,c.f);rz(c,'gwt-DialogBox');rz(c.a,'Caption');fv(c.a,c);return c;}
function Dq(b,a){xt(b.a,a);}
function Eq(a){if(Dj(a)==4){if(nk(this.a.ib(),Bj(a))){Ej(a);}}return hw(this,a);}
function Fq(a,b,c){this.e=true;uk(this.a.ib());this.c=b;this.d=c;}
function ar(a){}
function br(a){}
function cr(c,d,e){var a,b;if(this.e){a=d+jz(this);b=e+kz(this);iw(this,a-this.c,b-this.d);}}
function dr(a,b,c){this.e=false;pk(this.a.ib());}
function er(a){if(this.b!==a){return false;}jt(this.f,a);return true;}
function fr(a){if(this.b!==null){jt(this.f,this.b);}if(a!==null){pt(this.f,1,0,a);}this.b=a;}
function gr(a){lw(this,a);this.f.zc('100%');}
function yq(){}
_=yq.prototype=new Cv();_.dc=Eq;_.gc=Fq;_.hc=ar;_.ic=br;_.jc=cr;_.kc=dr;_.tc=er;_.yc=fr;_.zc=gr;_.tN=iL+'DialogBox';_.tI=65;_.b=null;_.c=0;_.d=0;_.e=false;function Fs(a){a.e=vs(new qs());}
function at(a){Fs(a);a.d=mj();a.a=jj();ej(a.d,a.a);AA(a,a.d);sz(a,1);return a;}
function bt(c,a){var b;b=or(c);if(a>=b||a<0){throw yC(new wC(),'Row index: '+a+', Row size: '+b);}}
function ct(e,c,b,a){var d;d=gs(e.b,c,b);it(e,d,a);return d;}
function et(c,b,a){return b.rows[a].cells.length;}
function ft(a){return gt(a,a.a);}
function gt(b,a){return a.rows.length;}
function ht(b,a){var c;if(a!=or(b)){bt(b,a);}c=lj();mk(b.a,c,a);return a;}
function it(d,c,a){var b,e;b=hk(c);e=null;if(b!==null){e=xs(d.e,b);}if(e!==null){jt(d,e);return true;}else{if(a){zk(c,'');}return false;}}
function jt(b,c){var a;if(c.p!==b){return false;}xv(b,c);a=c.ib();qk(jk(a),a);As(b.e,a);return true;}
function kt(a,b){xk(a.d,'border',''+b);}
function lt(b,a){b.b=a;}
function mt(b,a){wk(b.d,'cellPadding',a);}
function nt(b,a){wk(b.d,'cellSpacing',a);}
function ot(b,a){b.c=a;ps(b.c);}
function pt(d,b,a,e){var c;qr(d,b,a);if(e!==null){zA(e);c=ct(d,b,a,true);ys(d.e,e);ej(c,e.ib());vv(d,e);}}
function qt(){return Bs(this.e);}
function rt(a){switch(Dj(a)){case 1:{break;}default:}}
function st(a){return jt(this,a);}
function zr(){}
_=zr.prototype=new uv();_.xb=qt;_.Eb=rt;_.tc=st;_.tN=iL+'HTMLTable';_.tI=66;_.a=null;_.b=null;_.c=null;_.d=null;function lr(a){at(a);lt(a,jr(new ir(),a));ot(a,ns(new ms(),a));return a;}
function nr(b,a){bt(b,a);return et(b,b.a,a);}
function or(a){return ft(a);}
function pr(b,a){return ht(b,a);}
function qr(e,d,b){var a,c;rr(e,d);if(b<0){throw yC(new wC(),'Cannot create a column with a negative index: '+b);}a=nr(e,d);c=b+1-a;if(c>0){sr(e.a,d,c);}}
function rr(d,b){var a,c;if(b<0){throw yC(new wC(),'Cannot create a row with a negative index: '+b);}c=or(d);for(a=c;a<=b;a++){pr(d,a);}}
function sr(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function hr(){}
_=hr.prototype=new zr();_.tN=iL+'FlexTable';_.tI=67;function ds(b,a){b.a=a;return b;}
function fs(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function gs(c,b,a){return fs(c,c.a.a,b,a);}
function hs(d,c,a,b,e){js(d,c,a,b);ks(d,c,a,e);}
function is(e,d,a,c){var b;qr(e.a,d,a);b=fs(e,e.a.a,d,a);xk(b,'height',c);}
function js(e,d,b,a){var c;qr(e.a,d,b);c=fs(e,e.a.a,d,b);xk(c,'align',a.a);}
function ks(d,c,b,a){qr(d.a,c,b);Bk(fs(d,d.a.a,c,b),'verticalAlign',a.a);}
function ls(c,b,a,d){qr(c.a,b,a);xk(fs(c,c.a.a,b,a),'width',d);}
function cs(){}
_=cs.prototype=new qD();_.tN=iL+'HTMLTable$CellFormatter';_.tI=68;function jr(b,a){ds(b,a);return b;}
function ir(){}
_=ir.prototype=new cs();_.tN=iL+'FlexTable$FlexCellFormatter';_.tI=69;function ur(a){Bp(a);AA(a,hj());return a;}
function vr(a,b){Cp(a,b,a.ib());}
function xr(b,c,a){dq(b,c,b.ib(),a,true);}
function tr(){}
_=tr.prototype=new zp();_.tN=iL+'FlowPanel';_.tI=70;function cv(a){AA(a,hj());sz(a,131197);rz(a,'gwt-Label');return a;}
function dv(b,a){cv(b);hv(b,a);return b;}
function ev(b,a){if(b.a===null){b.a=vp(new up());}qH(b.a,a);}
function fv(b,a){if(b.b===null){b.b=lv(new kv());}qH(b.b,a);}
function hv(b,a){Ak(b.ib(),a);}
function iv(a,b){Bk(a.ib(),'whiteSpace',b?'normal':'nowrap');}
function jv(a){switch(Dj(a)){case 1:if(this.a!==null){xp(this.a,this);}break;case 4:case 8:case 64:case 16:case 32:if(this.b!==null){pv(this.b,this,a);}break;case 131072:break;}}
function bv(){}
_=bv.prototype=new hA();_.Eb=jv;_.tN=iL+'Label';_.tI=71;_.a=null;_.b=null;function tt(a){cv(a);AA(a,hj());sz(a,125);rz(a,'gwt-HTML');return a;}
function ut(b,a){tt(b);xt(b,a);return b;}
function vt(b,a,c){ut(b,a);iv(b,c);return b;}
function xt(b,a){zk(b.ib(),a);}
function yr(){}
_=yr.prototype=new bv();_.tN=iL+'HTML';_.tI=72;function Br(a){{Er(a);}}
function Cr(b,a){b.b=a;Br(b);return b;}
function Er(a){while(++a.a<a.b.b.b){if(tH(a.b.b,a.a)!==null){return;}}}
function Fr(a){return a.a<a.b.b.b;}
function as(){return Fr(this);}
function bs(){var a;if(!Fr(this)){throw BK(new AK());}a=tH(this.b.b,this.a);Er(this);return a;}
function Ar(){}
_=Ar.prototype=new qD();_.vb=as;_.Ab=bs;_.tN=iL+'HTMLTable$1';_.tI=73;_.a=(-1);function ns(b,a){b.b=a;return b;}
function ps(a){if(a.a===null){a.a=ij('colgroup');mk(a.b.d,a.a,0);ej(a.a,ij('col'));}}
function ms(){}
_=ms.prototype=new qD();_.tN=iL+'HTMLTable$ColumnFormatter';_.tI=74;_.a=null;function us(a){a.b=oH(new mH());}
function vs(a){us(a);return a;}
function xs(c,a){var b;b=Ds(a);if(b<0){return null;}return sh(tH(c.b,b),12);}
function ys(b,c){var a;if(b.a===null){a=b.b.b;qH(b.b,c);}else{a=b.a.a;zH(b.b,a,c);b.a=b.a.b;}Es(c.ib(),a);}
function zs(c,a,b){Cs(a);zH(c.b,b,null);c.a=ss(new rs(),b,c.a);}
function As(c,a){var b;b=Ds(a);zs(c,a,b);}
function Bs(a){return Cr(new Ar(),a);}
function Cs(a){a['__widgetID']=null;}
function Ds(a){var b=a['__widgetID'];return b==null?-1:b;}
function Es(a,b){a['__widgetID']=b;}
function qs(){}
_=qs.prototype=new qD();_.tN=iL+'HTMLTable$WidgetMapper';_.tI=75;_.a=null;function ss(c,a,b){c.a=a;c.b=b;return c;}
function rs(){}
_=rs.prototype=new qD();_.tN=iL+'HTMLTable$WidgetMapper$FreeNode';_.tI=76;_.a=0;_.b=null;function Dt(){Dt=FK;Et=Bt(new At(),'center');Ft=Bt(new At(),'left');Bt(new At(),'right');}
var Et,Ft;function Bt(b,a){b.a=a;return b;}
function At(){}
_=At.prototype=new qD();_.tN=iL+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=77;_.a=null;function eu(){eu=FK;fu=cu(new bu(),'bottom');gu=cu(new bu(),'middle');hu=cu(new bu(),'top');}
var fu,gu,hu;function cu(a,b){a.a=b;return a;}
function bu(){}
_=bu.prototype=new qD();_.tN=iL+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=78;_.a=null;function lu(a){a.a=(Dt(),Ft);a.c=(eu(),hu);}
function mu(a){op(a);lu(a);a.b=lj();ej(a.d,a.b);xk(a.e,'cellSpacing','0');xk(a.e,'cellPadding','0');return a;}
function nu(b,c){var a;a=pu(b);ej(b.b,a);Cp(b,c,a);}
function pu(b){var a;a=kj();rp(b,a,b.a);sp(b,a,b.c);return a;}
function qu(c,d,a){var b;Fp(c,a);b=pu(c);mk(c.b,b,a);dq(c,d,b,a,false);}
function ru(c,d){var a,b;b=jk(d.ib());a=fq(c,d);if(a){qk(c.b,b);}return a;}
function su(b,a){b.c=a;}
function tu(a){return ru(this,a);}
function ku(){}
_=ku.prototype=new np();_.tc=tu;_.tN=iL+'HorizontalPanel';_.tI=79;_.b=null;function vu(a){AA(a,hj());ej(a.ib(),a.a=gj());sz(a,1);rz(a,'gwt-Hyperlink');return a;}
function wu(c,b,a){vu(c);Bu(c,b);Au(c,a);return c;}
function xu(b,a){if(b.b===null){b.b=vp(new up());}qH(b.b,a);}
function zu(a){return ik(a.a);}
function Au(b,a){b.c=a;xk(b.a,'href','#'+a);}
function Bu(b,a){Ak(b.a,a);}
function Cu(a){if(Dj(a)==1){if(this.b!==null){xp(this.b,this);}wl(this.c);Ej(a);}}
function uu(){}
_=uu.prototype=new hA();_.Eb=Cu;_.tN=iL+'Hyperlink';_.tI=80;_.a=null;_.b=null;_.c=null;function av(a){return (Aj(a)?1:0)|(zj(a)?8:0)|(wj(a)?2:0)|(sj(a)?4:0);}
function lv(a){oH(a);return a;}
function nv(d,c,e,f){var a,b;for(a=zF(d);sF(a);){b=sh(tF(a),21);b.gc(c,e,f);}}
function ov(d,c){var a,b;for(a=zF(d);sF(a);){b=sh(tF(a),21);b.hc(c);}}
function pv(e,c,a){var b,d,f,g,h;d=c.ib();g=uj(a)-ak(d)+ek(d,'scrollLeft')+wm();h=vj(a)-bk(d)+ek(d,'scrollTop')+xm();switch(Dj(a)){case 4:nv(e,c,g,h);break;case 8:sv(e,c,g,h);break;case 64:rv(e,c,g,h);break;case 16:b=xj(a);if(!nk(d,b)){ov(e,c);}break;case 32:f=Cj(a);if(!nk(d,f)){qv(e,c);}break;}}
function qv(d,c){var a,b;for(a=zF(d);sF(a);){b=sh(tF(a),21);b.ic(c);}}
function rv(d,c,e,f){var a,b;for(a=zF(d);sF(a);){b=sh(tF(a),21);b.jc(c,e,f);}}
function sv(d,c,e,f){var a,b;for(a=zF(d);sF(a);){b=sh(tF(a),21);b.kc(c,e,f);}}
function kv(){}
_=kv.prototype=new mH();_.tN=iL+'MouseListenerCollection';_.tI=81;function Ew(){Ew=FK;dx=tJ(new xI());}
function Dw(b,a){Ew();fp(b);if(a===null){a=Fw();}AA(b,a);b.Cb();return b;}
function ax(){Ew();return bx(null);}
function bx(c){Ew();var a,b;b=sh(zJ(dx,c),22);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=dk(c))){return null;}}if(dx.c==0){cx();}AJ(dx,c,b=Dw(new yw(),a));return b;}
function Fw(){Ew();return $doc.body;}
function cx(){Ew();mm(new zw());}
function yw(){}
_=yw.prototype=new ep();_.tN=iL+'RootPanel';_.tI=82;var dx;function Bw(){var a,b;for(b=sG(aH((Ew(),dx)));zG(b);){a=sh(AG(b),22);if(a.wb()){a.ac();}}}
function Cw(){return null;}
function zw(){}
_=zw.prototype=new qD();_.pc=Bw;_.qc=Cw;_.tN=iL+'RootPanel$1';_.tI=83;function gx(a){a.a=a.b.n!==null;}
function hx(b,a){b.b=a;gx(b);return b;}
function jx(){return this.a;}
function kx(){if(!this.a||this.b.n===null){throw BK(new AK());}this.a=false;return this.b.n;}
function fx(){}
_=fx.prototype=new qD();_.vb=jx;_.Ab=kx;_.tN=iL+'SimplePanel$1';_.tI=84;function Bx(a){a.a=mu(new ku());}
function Cx(c){var a,b;Bx(c);kq(c,c.a);sz(c,1);rz(c,'gwt-TabBar');su(c.a,(eu(),fu));a=vt(new yr(),'&nbsp;',true);b=vt(new yr(),'&nbsp;',true);rz(a,'gwt-TabBarFirst');rz(b,'gwt-TabBarRest');a.vc('100%');b.vc('100%');nu(c.a,a);nu(c.a,b);a.vc('100%');qp(c.a,a,'100%');tp(c.a,b,'100%');return c;}
function Dx(b,a){if(b.c===null){b.c=iy(new hy());}qH(b.c,a);}
function Ex(b,a){if(a<0||a>by(b)){throw xC(new wC());}}
function Fx(b,a){if(a<(-1)||a>=by(b)){throw xC(new wC());}}
function by(a){return a.a.f.b-2;}
function cy(e,d,a,b){var c;Ex(e,b);if(a){c=ut(new yr(),d);}else{c=dv(new bv(),d);}iv(c,false);ev(c,e);rz(c,'gwt-TabBarItem');qu(e.a,c,b+1);}
function dy(b,a){var c;Fx(b,a);c=cq(b.a,a+1);if(c===b.b){b.b=null;}ru(b.a,c);}
function ey(b,a){Fx(b,a);if(b.c!==null){if(!ky(b.c,b,a)){return false;}}fy(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=cq(b.a,a+1);fy(b,b.b,true);if(b.c!==null){ly(b.c,b,a);}return true;}
function fy(c,a,b){if(a!==null){if(b){hz(a,'gwt-TabBarItem-selected');}else{nz(a,'gwt-TabBarItem-selected');}}}
function gy(b){var a;for(a=1;a<this.a.f.b-1;++a){if(cq(this.a,a)===b){ey(this,a-1);return;}}}
function Ax(){}
_=Ax.prototype=new iq();_.Fb=gy;_.tN=iL+'TabBar';_.tI=85;_.b=null;_.c=null;function iy(a){oH(a);return a;}
function ky(e,c,d){var a,b;for(a=zF(e);sF(a);){b=sh(tF(a),23);if(!b.Db(c,d)){return false;}}return true;}
function ly(e,c,d){var a,b;for(a=zF(e);sF(a);){b=sh(tF(a),23);b.nc(c,d);}}
function hy(){}
_=hy.prototype=new mH();_.tN=iL+'TabListenerCollection';_.tI=86;function zy(a){a.b=vy(new uy());a.a=py(new oy(),a.b);}
function Ay(b){var a;zy(b);a=bA(new Fz());cA(a,b.b);cA(a,b.a);qp(a,b.a,'100%');b.b.zc('100%');Dx(b.b,b);kq(b,a);rz(b,'gwt-TabPanel');rz(b.a,'gwt-TabPanelBottom');return b;}
function Cy(b,c,a){Fy(b,c,a,b.a.f.b);}
function By(b,a){if(b.c===null){b.c=iy(new hy());}qH(b.c,a);}
function Ey(b,a){return cq(b.a,a);}
function az(d,e,c,a,b){ry(d.a,e,c,a,b);}
function Fy(c,d,b,a){az(c,d,b,false,a);}
function bz(b,a){ey(b.b,a);}
function cz(){return eq(this.a);}
function dz(a,b){if(this.c!==null){return ky(this.c,this,b);}return true;}
function ez(a,b){wq(this.a,b);if(this.c!==null){ly(this.c,this,b);}}
function fz(a){return sy(this.a,a);}
function ny(){}
_=ny.prototype=new iq();_.xb=cz;_.Db=dz;_.nc=ez;_.tc=fz;_.tN=iL+'TabPanel';_.tI=87;_.c=null;function py(b,a){qq(b);b.a=a;return b;}
function ry(e,f,d,a,b){var c;c=bq(e,f);if(c!=(-1)){sy(e,f);if(c<b){b--;}}xy(e.a,d,a,b);tq(e,f,b);}
function sy(b,c){var a;a=bq(b,c);if(a!=(-1)){yy(b.a,a);return uq(b,c);}return false;}
function ty(a){return sy(this,a);}
function oy(){}
_=oy.prototype=new pq();_.tc=ty;_.tN=iL+'TabPanel$TabbedDeckPanel';_.tI=88;_.a=null;function vy(a){Cx(a);return a;}
function xy(d,c,a,b){cy(d,c,a,b);}
function yy(b,a){dy(b,a);}
function uy(){}
_=uy.prototype=new Ax();_.tN=iL+'TabPanel$UnmodifiableTabBar';_.tI=89;function aA(a){a.a=(Dt(),Ft);a.b=(eu(),hu);}
function bA(a){op(a);aA(a);xk(a.e,'cellSpacing','0');xk(a.e,'cellPadding','0');return a;}
function cA(b,d){var a,c;c=lj();a=eA(b);ej(c,a);ej(b.d,c);Cp(b,d,a);}
function eA(b){var a;a=kj();rp(b,a,b.a);sp(b,a,b.b);return a;}
function fA(c,e,a){var b,d;Fp(c,a);d=lj();b=eA(c);ej(d,b);mk(c.d,d,a);dq(c,e,b,a,false);}
function gA(c){var a,b;b=jk(c.ib());a=fq(this,c);if(a){qk(this.d,jk(b));}return a;}
function Fz(){}
_=Fz.prototype=new np();_.tc=gA;_.tN=iL+'VerticalPanel';_.tI=90;function oA(b,a){b.a=mh('[Lcom.google.gwt.user.client.ui.Widget;',[156],[12],[4],null);return b;}
function pA(a,b){tA(a,b,a.b);}
function rA(b,a){if(a<0||a>=b.b){throw xC(new wC());}return b.a[a];}
function sA(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function tA(d,e,a){var b,c;if(a<0||a>d.b){throw xC(new wC());}if(d.b==d.a.a){c=mh('[Lcom.google.gwt.user.client.ui.Widget;',[156],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){oh(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){oh(d.a,b,d.a[b-1]);}oh(d.a,a,e);}
function uA(a){return kA(new jA(),a);}
function vA(c,b){var a;if(b<0||b>=c.b){throw xC(new wC());}--c.b;for(a=b;a<c.b;++a){oh(c.a,a,c.a[a+1]);}oh(c.a,c.b,null);}
function wA(b,c){var a;a=sA(b,c);if(a==(-1)){throw BK(new AK());}vA(b,a);}
function iA(){}
_=iA.prototype=new qD();_.tN=iL+'WidgetCollection';_.tI=91;_.a=null;_.b=0;function kA(b,a){b.b=a;return b;}
function mA(){return this.a<this.b.b-1;}
function nA(){if(this.a>=this.b.b){throw BK(new AK());}return this.b.a[++this.a];}
function jA(){}
_=jA.prototype=new qD();_.vb=mA;_.Ab=nA;_.tN=iL+'WidgetCollection$WidgetIterator';_.tI=92;_.a=(-1);function eB(){}
_=eB.prototype=new qD();_.tN=jL+'PopupImpl';_.tI=93;function lB(){lB=FK;oB=pB();}
function kB(a){lB();return a;}
function mB(b){var a;a=hj();if(oB){zk(a,'<div><\/div>');cl(hB(new gB(),b,a));}return a;}
function nB(b,a){return oB?hk(a):a;}
function pB(){lB();if(navigator.userAgent.indexOf('Macintosh')!= -1){return true;}return false;}
function fB(){}
_=fB.prototype=new eB();_.tN=jL+'PopupImplMozilla';_.tI=94;var oB;function hB(b,a,c){b.a=c;return b;}
function jB(){Bk(this.a,'overflow','auto');}
function gB(){}
_=gB.prototype=new qD();_.bb=jB;_.tN=jL+'PopupImplMozilla$1';_.tI=95;function uB(){}
_=uB.prototype=new qD();_.tN=kL+'OutputStream';_.tI=96;function sB(){}
_=sB.prototype=new uB();_.tN=kL+'FilterOutputStream';_.tI=97;function wB(){}
_=wB.prototype=new sB();_.tN=kL+'PrintStream';_.tI=98;function AB(){AB=FK;yD();}
function zB(a){AB();wD(a);return a;}
function yB(){}
_=yB.prototype=new vD();_.tN=lL+'ArrayStoreException';_.tI=99;function DB(){DB=FK;EB=CB(new BB(),false);FB=CB(new BB(),true);}
function CB(a,b){DB();a.a=b;return a;}
function aC(a){return th(a,28)&&sh(a,28).a==this.a;}
function bC(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function cC(){return this.a?'true':'false';}
function dC(a){DB();return a?FB:EB;}
function BB(){}
_=BB.prototype=new qD();_.eQ=aC;_.hC=bC;_.tS=cC;_.tN=lL+'Boolean';_.tI=100;_.a=false;var EB,FB;function iC(){iC=FK;yD();}
function gC(a){iC();wD(a);return a;}
function hC(b,a){iC();xD(b,a);return b;}
function fC(){}
_=fC.prototype=new vD();_.tN=lL+'ClassCastException';_.tI=101;function rC(){rC=FK;yD();}
function qC(b,a){rC();xD(b,a);return b;}
function pC(){}
_=pC.prototype=new vD();_.tN=lL+'IllegalArgumentException';_.tI=102;function vC(){vC=FK;yD();}
function tC(a){vC();wD(a);return a;}
function uC(b,a){vC();xD(b,a);return b;}
function sC(){}
_=sC.prototype=new vD();_.tN=lL+'IllegalStateException';_.tI=103;function zC(){zC=FK;yD();}
function xC(a){zC();wD(a);return a;}
function yC(b,a){zC();xD(b,a);return b;}
function wC(){}
_=wC.prototype=new vD();_.tN=lL+'IndexOutOfBoundsException';_.tI=104;function nD(){nD=FK;{pD();}}
function pD(){nD();oD=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var oD=null;function BC(){BC=FK;nD();}
function EC(a){BC();return wE(a);}
var CC=2147483647,DC=(-2147483648);function bD(a){return a<0?-a:a;}
function cD(a){return a<0?-a:a;}
function dD(a,b){return a>b?a:b;}
function eD(a,b){return a<b?a:b;}
function fD(a){return Math.sqrt(a);}
function iD(){iD=FK;yD();}
function hD(a){iD();wD(a);return a;}
function gD(){}
_=gD.prototype=new vD();_.tN=lL+'NegativeArraySizeException';_.tI=105;function lD(){lD=FK;yD();}
function kD(b,a){lD();xD(b,a);return b;}
function jD(){}
_=jD.prototype=new vD();_.tN=lL+'NullPointerException';_.tI=106;function dE(b,a){return b.charCodeAt(a);}
function fE(f,c){var a,b,d,e,g,h;h=kE(f);e=kE(c);b=eD(h,e);for(a=0;a<b;a++){g=dE(f,a);d=dE(c,a);if(g!=d){return g-d;}}return h-e;}
function gE(b,a){if(!th(a,1))return false;return pE(b,a);}
function hE(b,a){return b.indexOf(a);}
function iE(c,b,a){return c.indexOf(b,a);}
function jE(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function kE(a){return a.length;}
function lE(c,a,b){b=qE(b);return c.replace(RegExp(a,'g'),b);}
function mE(b,a){return b.substr(a,b.length-a);}
function nE(c,a,b){return c.substr(a,b-a);}
function oE(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function pE(a,b){return String(a)==b;}
function qE(b){var a;a=0;while(0<=(a=iE(b,'\\',a))){if(dE(b,a+1)==36){b=nE(b,0,a)+'$'+mE(b,++a);}else{b=nE(b,0,a)+mE(b,++a);}}return b;}
function rE(a){if(th(a,1)){return fE(this,sh(a,1));}else{throw hC(new fC(),'Cannot compare '+a+" with String '"+this+"'");}}
function sE(a){return gE(this,a);}
function uE(){var a=tE;if(!a){a=tE={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function vE(){return this;}
function wE(a){return ''+a;}
function xE(a){return a!==null?a.tS():'null';}
_=String.prototype;_.u=rE;_.eQ=sE;_.hC=uE;_.tS=vE;_.tN=lL+'String';_.tI=2;var tE=null;function BD(a){DD(a);return a;}
function CD(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function DD(a){ED(a,'');}
function ED(b,a){b.js=[a];b.length=a.length;}
function aE(a){a.Bb();return a.js[0];}
function bE(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function cE(){return aE(this);}
function AD(){}
_=AD.prototype=new qD();_.Bb=bE;_.tS=cE;_.tN=lL+'StringBuffer';_.tI=107;function zE(){zE=FK;BE=new wB();}
function AE(){zE();return new Date().getTime();}
function CE(a){zE();return rg(a);}
var BE;function hF(){hF=FK;yD();}
function gF(b,a){hF();xD(b,a);return b;}
function fF(){}
_=fF.prototype=new vD();_.tN=lL+'UnsupportedOperationException';_.tI=108;function qF(b,a){b.c=a;return b;}
function sF(a){return a.a<a.c.Ac();}
function tF(a){if(!sF(a)){throw BK(new AK());}return a.c.tb(a.b=a.a++);}
function uF(a){if(a.b<0){throw tC(new sC());}a.c.sc(a.b);a.a=a.b;a.b=(-1);}
function vF(){return sF(this);}
function wF(){return tF(this);}
function pF(){}
_=pF.prototype=new qD();_.vb=vF;_.Ab=wF;_.tN=mL+'AbstractList$IteratorImpl';_.tI=109;_.a=0;_.b=(-1);function EG(f,d,e){var a,b,c;for(b=oJ(f.ab());gJ(b);){a=hJ(b);c=a.lb();if(d===null?c===null:d.eQ(c)){if(e){iJ(b);}return a;}}return null;}
function FG(b){var a;a=b.ab();return cG(new bG(),b,a);}
function aH(b){var a;a=yJ(b);return qG(new pG(),b,a);}
function bH(a){return EG(this,a,false)!==null;}
function cH(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!th(d,30)){return false;}f=sh(d,30);c=FG(this);e=f.yb();if(!jH(c,e)){return false;}for(a=eG(c);lG(a);){b=mG(a);h=this.ub(b);g=f.ub(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function dH(b){var a;a=EG(this,b,false);return a===null?null:a.rb();}
function eH(){var a,b,c;b=0;for(c=oJ(this.ab());gJ(c);){a=hJ(c);b+=a.hC();}return b;}
function fH(){return FG(this);}
function gH(){var a,b,c,d;d='{';a=false;for(c=oJ(this.ab());gJ(c);){b=hJ(c);if(a){d+=', ';}else{a=true;}d+=xE(b.lb());d+='=';d+=xE(b.rb());}return d+'}';}
function aG(){}
_=aG.prototype=new qD();_.A=bH;_.eQ=cH;_.ub=dH;_.hC=eH;_.yb=fH;_.tS=gH;_.tN=mL+'AbstractMap';_.tI=110;function jH(e,b){var a,c,d;if(b===e){return true;}if(!th(b,31)){return false;}c=sh(b,31);if(c.Ac()!=e.Ac()){return false;}for(a=c.xb();a.vb();){d=a.Ab();if(!e.B(d)){return false;}}return true;}
function kH(a){return jH(this,a);}
function lH(){var a,b,c;a=0;for(b=this.xb();b.vb();){c=b.Ab();if(c!==null){a+=c.hC();}}return a;}
function hH(){}
_=hH.prototype=new iF();_.eQ=kH;_.hC=lH;_.tN=mL+'AbstractSet';_.tI=111;function cG(b,a,c){b.a=a;b.b=c;return b;}
function eG(b){var a;a=oJ(b.b);return jG(new iG(),b,a);}
function fG(a){return this.a.A(a);}
function gG(){return eG(this);}
function hG(){return this.b.a.c;}
function bG(){}
_=bG.prototype=new hH();_.B=fG;_.xb=gG;_.Ac=hG;_.tN=mL+'AbstractMap$1';_.tI=112;function jG(b,a,c){b.a=c;return b;}
function lG(a){return a.a.vb();}
function mG(b){var a;a=b.a.Ab();return a.lb();}
function nG(){return lG(this);}
function oG(){return mG(this);}
function iG(){}
_=iG.prototype=new qD();_.vb=nG;_.Ab=oG;_.tN=mL+'AbstractMap$2';_.tI=113;function qG(b,a,c){b.a=a;b.b=c;return b;}
function sG(b){var a;a=oJ(b.b);return xG(new wG(),b,a);}
function tG(a){return xJ(this.a,a);}
function uG(){return sG(this);}
function vG(){return this.b.a.c;}
function pG(){}
_=pG.prototype=new iF();_.B=tG;_.xb=uG;_.Ac=vG;_.tN=mL+'AbstractMap$3';_.tI=114;function xG(b,a,c){b.a=c;return b;}
function zG(a){return a.a.vb();}
function AG(a){var b;b=a.a.Ab().rb();return b;}
function BG(){return zG(this);}
function CG(){return AG(this);}
function wG(){}
_=wG.prototype=new qD();_.vb=BG;_.Ab=CG;_.tN=mL+'AbstractMap$4';_.tI=115;function iI(b){var a,c;a=oH(new mH());for(c=0;c<b.a;c++){qH(a,b[c]);}return a;}
function jI(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.v(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function kI(a){jI(a,a.a,(rI(),sI));}
function rI(){rI=FK;sI=new oI();}
var sI;function qI(a,b){return sh(a,36).u(b);}
function oI(){}
_=oI.prototype=new qD();_.v=qI;_.tN=mL+'Comparators$1';_.tI=116;function vJ(){vJ=FK;CJ=cK();}
function sJ(a){{uJ(a);}}
function tJ(a){vJ();sJ(a);return a;}
function uJ(a){a.a=Bg();a.d=Cg();a.b=zh(CJ,xg);a.c=0;}
function wJ(b,a){if(th(a,1)){return gK(b.d,sh(a,1))!==CJ;}else if(a===null){return b.b!==CJ;}else{return fK(b.a,a,a.hC())!==CJ;}}
function xJ(a,b){if(a.b!==CJ&&eK(a.b,b)){return true;}else if(bK(a.d,b)){return true;}else if(FJ(a.a,b)){return true;}return false;}
function yJ(a){return lJ(new cJ(),a);}
function zJ(c,a){var b;if(th(a,1)){b=gK(c.d,sh(a,1));}else if(a===null){b=c.b;}else{b=fK(c.a,a,a.hC());}return b===CJ?null:b;}
function AJ(c,a,d){var b;if(th(a,1)){b=jK(c.d,sh(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=iK(c.a,a,d,a.hC());}if(b===CJ){++c.c;return null;}else{return b;}}
function BJ(c,a){var b;if(th(a,1)){b=lK(c.d,sh(a,1));}else if(a===null){b=c.b;c.b=zh(CJ,xg);}else{b=kK(c.a,a,a.hC());}if(b===CJ){return null;}else{--c.c;return b;}}
function DJ(e,c){vJ();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function EJ(d,a){vJ();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=BI(c.substring(1),e);a.s(b);}}}
function FJ(f,h){vJ();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.rb();if(eK(h,d)){return true;}}}}return false;}
function aK(a){return wJ(this,a);}
function bK(c,d){vJ();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(eK(d,a)){return true;}}}return false;}
function cK(){vJ();}
function dK(){return yJ(this);}
function eK(a,b){vJ();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function hK(a){return zJ(this,a);}
function fK(f,h,e){vJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(eK(h,d)){return c.rb();}}}}
function gK(b,a){vJ();return b[':'+a];}
function iK(f,h,j,e){vJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(eK(h,d)){var i=c.rb();c.wc(j);return i;}}}else{a=f[e]=[];}var c=BI(h,j);a.push(c);}
function jK(c,a,d){vJ();a=':'+a;var b=c[a];c[a]=d;return b;}
function kK(f,h,e){vJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(eK(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.rb();}}}}
function lK(c,a){vJ();a=':'+a;var b=c[a];delete c[a];return b;}
function xI(){}
_=xI.prototype=new aG();_.A=aK;_.ab=dK;_.ub=hK;_.tN=mL+'HashMap';_.tI=117;_.a=null;_.b=null;_.c=0;_.d=null;var CJ;function zI(b,a,c){b.a=a;b.b=c;return b;}
function BI(a,b){return zI(new yI(),a,b);}
function CI(b){var a;if(th(b,37)){a=sh(b,37);if(eK(this.a,a.lb())&&eK(this.b,a.rb())){return true;}}return false;}
function DI(){return this.a;}
function EI(){return this.b;}
function FI(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function aJ(a){var b;b=this.b;this.b=a;return b;}
function bJ(){return this.a+'='+this.b;}
function yI(){}
_=yI.prototype=new qD();_.eQ=CI;_.lb=DI;_.rb=EI;_.hC=FI;_.wc=aJ;_.tS=bJ;_.tN=mL+'HashMap$EntryImpl';_.tI=118;_.a=null;_.b=null;function lJ(b,a){b.a=a;return b;}
function nJ(d,c){var a,b,e;if(th(c,37)){a=sh(c,37);b=a.lb();if(wJ(d.a,b)){e=zJ(d.a,b);return eK(a.rb(),e);}}return false;}
function oJ(a){return eJ(new dJ(),a.a);}
function pJ(a){return nJ(this,a);}
function qJ(){return oJ(this);}
function rJ(){return this.a.c;}
function cJ(){}
_=cJ.prototype=new hH();_.B=pJ;_.xb=qJ;_.Ac=rJ;_.tN=mL+'HashMap$EntrySet';_.tI=119;function eJ(c,b){var a;c.c=b;a=oH(new mH());if(c.c.b!==(vJ(),CJ)){qH(a,zI(new yI(),null,c.c.b));}EJ(c.c.d,a);DJ(c.c.a,a);c.a=zF(a);return c;}
function gJ(a){return sF(a.a);}
function hJ(a){return a.b=sh(tF(a.a),37);}
function iJ(a){if(a.b===null){throw uC(new sC(),'Must call next() before remove().');}else{uF(a.a);BJ(a.c,a.b.lb());a.b=null;}}
function jJ(){return gJ(this);}
function kJ(){return hJ(this);}
function dJ(){}
_=dJ.prototype=new qD();_.vb=jJ;_.Ab=kJ;_.tN=mL+'HashMap$EntrySetIterator';_.tI=120;_.a=null;_.b=null;function nK(a){a.a=tJ(new xI());return a;}
function oK(c,a){var b;b=AJ(c.a,a,dC(true));return b===null;}
function qK(a){return eG(FG(a.a));}
function rK(a){return oK(this,a);}
function sK(a){return wJ(this.a,a);}
function tK(){return qK(this);}
function uK(){return this.a.c;}
function vK(){return FG(this.a).tS();}
function mK(){}
_=mK.prototype=new hH();_.s=rK;_.B=sK;_.xb=tK;_.Ac=uK;_.tS=vK;_.tN=mL+'HashSet';_.tI=121;_.a=null;function CK(){CK=FK;yD();}
function BK(a){CK();wD(a);return a;}
function AK(){}
_=AK.prototype=new vD();_.tN=mL+'NoSuchElementException';_.tI=122;function uL(){}
_=uL.prototype=new qD();_.tN=nL+'BezierCurve';_.tI=123;function wL(a){{BL(a);}}
function xL(a){wL(a);return a;}
function AL(i,d,e,a,b){var c,f,g,h,j;h=pN(new oN(),eD(d.a,e.a),eD(d.b,e.b));j=bD(d.a-e.a);c=bD(d.b-e.b);g=dD(j,c);g=dD(g,bD(d.a-a.a));g=dD(g,bD(d.b-a.b));g=dD(g,bD(e.a-b.a));g=dD(g,bD(e.b-b.b));f=pN(new oN(),h.a-g,h.b-g);Bk(i.a,'left',EC(f.a));Bk(i.a,'top',EC(f.b));vk(i.a,'width',EC(j+g*2));vk(i.a,'height',EC(c+g*2));Bk(i.a,'width',EC(j+g*2));Bk(i.a,'height',EC(c+g*2));zL(i,sN(d,uN(f)),sN(e,uN(f)),sN(a,uN(f)),sN(b,uN(f)),CL(i.a,'color'));}
function zL(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function BL(b){var a;b.a=ij('canvas');a=ck(b.a,'class');vk(b.a,'class',a+' gwt-diagrams-canvas');}
function CL(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function vL(){}
_=vL.prototype=new uL();_.tN=nL+'BezierCurveCanvas';_.tI=124;_.a=null;function FL(a){a.c=oH(new mH());}
function aM(c,d){var a,b;FL(c);pH(c.c,d);eM(c,c.C());for(b=zF(c.c);sF(b);){a=sh(tF(b),34);a.w(c);}return c;}
function bM(a,b){aM(a,iI(b));return a;}
function dM(a){return a.b.t(a.c);}
function eM(b,a){b.b=a;}
function fM(){this.Cc(dM(this));}
function EL(){}
_=EL.prototype=new hA();_.Bc=fM;_.tN=oL+'AbstractConnection';_.tI=125;_.b=null;function hM(a){a.a=xL(new vL());}
function jM(a,b){bM(a,b);hM(a);if(b.a!=2){throw qC(new pC(),'Need exactly two connectors to connect');}AA(a,a.a.a);hz(a,'gwt-diagrams-connection');return a;}
function iM(c,a,b){jM(c,nh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',154,34,[a,b]));return c;}
function lM(){return new wM();}
function mM(b){var a;if(!th(b,38)){throw qC(new pC(),'Expected BezierConnectionData');}a=sh(b,38);if(a.b.b!=2){throw qC(new pC(),'Expected two connection points');}if(a.a.b!=2){throw qC(new pC(),'Expected two control points');}AL(this.a,sh(tH(a.b,0),32),sh(tH(a.b,1),32),sh(tH(a.a,0),32),sh(tH(a.a,1),32));}
function gM(){}
_=gM.prototype=new EL();_.C=lM;_.Cc=mM;_.tN=oL+'BezierTwoEndedConnection';_.tI=126;function pM(a){a.a=oH(new mH());}
function rM(a,b){bM(a,b);pM(a);if(b.a!=2){throw qC(new pC(),'Need exactly two connectors to connect');}AA(a,hj());hz(a,'gwt-diagrams-connection');return a;}
function qM(c,a,b){rM(c,nh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',154,34,[a,b]));return c;}
function tM(d,a){var b,c;for(c=d.a.b;c<a;c++){b=hj();qH(d.a,zh(b,el));ej(d.ib(),b);zk(b,'&nbsp;');}while(d.a.b>a){b=sh(tH(d.a,0),17);yH(d.a,zh(b,el));qk(d.ib(),b);}}
function uM(){return new BM();}
function vM(a){var b,c,d,e,f;if(a.b.b<=1){throw qC(new pC(),'Too few connection points');}tM(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=sh(tH(this.a,d),17);e=sh(tH(a.b,d),32);c=sh(tH(a.b,d+1),32);f='gwt-diagrams-line';vk(b,'style','');xk(b,'className',f);Bk(b,'height','1');Bk(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Bk(b,'height',EC(bD(e.b-c.b)));}else if(e.b==c.b){Bk(b,'width',EC(bD(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Bk(b,'left',EC(eD(e.a,c.a)));Bk(b,'top',EC(eD(e.b,c.b)));xk(b,'className',f);}}
function oM(){}
_=oM.prototype=new EL();_.C=uM;_.Cc=vM;_.tN=oL+'RectilinearTwoEndedConnection';_.tI=127;function yM(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=mh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[153],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=rN(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function zM(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw qC(new pC(),'Unsupported connectors count');}c=sh(tH(e,0),34);d=sh(tH(e,1),34);f=yM(this,c,d);h=c.rc(f[0]);i=d.rc(f[1]);a=tN(h,f[0],50);b=tN(i,f[1],50);g=hN(new eN(),nh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',151,32,[h,i]),nh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',151,32,[a,b]));return g;}
function wM(){}
_=wM.prototype=new qD();_.t=zM;_.tN=pL+'BezierConnectionCalculator';_.tI=128;function CM(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(cO(),fO);}if(c==1&&d>0){return a!==(cO(),gO);}if(c==0&&d<0){return a!==(cO(),gO);}if(c==1&&d<0){return a!==(cO(),fO);}}else{if(c==0&&d>0){return a!==(cO(),hO);}if(c==1&&d>0){return a!==(cO(),eO);}if(c==0&&d<0){return a!==(cO(),eO);}if(c==1&&d<0){return a!==(cO(),hO);}}return false;}
function EM(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=mh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[153],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=rN(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function FM(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(cO(),gO);}if(c==1&&d>0){return a===(cO(),fO);}if(c==0&&d<0){return a===(cO(),fO);}if(c==1&&d<0){return a===(cO(),gO);}}else{if(c==0&&d>0){return a===(cO(),eO);}if(c==1&&d>0){return a===(cO(),hO);}if(c==0&&d<0){return a===(cO(),hO);}if(c==1&&d<0){return a===(cO(),eO);}}return false;}
function aN(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw qC(new pC(),'Unsupported connectors count');}a=sh(tH(c,0),34);b=sh(tH(c,1),34);d=lN(new jN());e=EM(this,a,b);i=a.rc(e[0]);j=tN(i,e[0],10);k=b.rc(e[1]);l=tN(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(FM(this,e[0],0,f,true)&&FM(this,e[1],1,f,true)){g=tN(j,e[0],bD(vh(f/2)));h=pN(new oN(),g.a,l.b);}else if(FM(this,e[0],0,m,false)&&FM(this,e[1],1,m,false)){g=tN(j,e[0],bD(vh(m/2)));h=pN(new oN(),l.a,g.b);}else if(FM(this,e[0],0,f,true)&&FM(this,e[1],1,m,false)){g=tN(j,e[0],bD(f));h=tN(l,e[1],bD(m));}else if(FM(this,e[0],0,m,false)&&FM(this,e[1],1,f,true)){g=tN(j,e[0],bD(m));h=tN(l,e[1],bD(f));}else if(FM(this,e[0],0,f,true)&&CM(this,e[1],1,f,true)){g=tN(j,e[0],bD(vh(f/2)));h=pN(new oN(),g.a,l.b);}else if(CM(this,e[0],0,f,true)&&FM(this,e[1],1,f,true)){g=tN(j,e[0],bD(vh(f/2)));h=pN(new oN(),g.a,l.b);}else if(FM(this,e[0],0,m,false)&&CM(this,e[1],1,m,false)){g=tN(j,e[0],bD(vh(m/2)));h=pN(new oN(),l.a,g.b);}else if(CM(this,e[0],0,m,false)&&FM(this,e[1],1,m,false)){g=tN(j,e[0],bD(vh(m/2)));h=pN(new oN(),l.a,g.b);}else if(CM(this,e[0],0,f,true)&&CM(this,e[1],1,f,true)){g=tN(j,(cO(),gO),vh(f/2));h=pN(new oN(),g.a,l.b);}else if(CM(this,e[0],0,m,false)&&CM(this,e[1],1,m,false)){g=tN(j,(cO(),eO),vh(m/2));h=pN(new oN(),l.a,g.b);}qH(d.b,i);qH(d.b,j);if(g!==null){qH(d.b,g);}if(h!==null){qH(d.b,h);}qH(d.b,l);qH(d.b,k);return d;}
function BM(){}
_=BM.prototype=new qD();_.t=aN;_.tN=pL+'FullRectilinearTwoEndedCalculator';_.tI=129;function dN(c){var a,b,d;if(c.b!=2){throw qC(new pC(),'Unsupported connectors count');}a=sh(tH(c,0),34);b=sh(tH(c,1),34);d=lN(new jN());qH(d.b,pN(new oN(),a.mb()+vh(a.sb()/2),a.qb()+vh(a.jb()/2)));qH(d.b,pN(new oN(),a.mb()+vh(a.sb()/2),b.qb()+vh(b.jb()/2)));qH(d.b,pN(new oN(),b.mb()+vh(b.sb()/2),b.qb()+vh(b.jb()/2)));return d;}
function bN(){}
_=bN.prototype=new qD();_.t=dN;_.tN=pL+'SimpleRectilinearTwoEndedCalculator';_.tI=130;function kN(a){a.b=oH(new mH());}
function lN(a){kN(a);return a;}
function mN(b,a){kN(b);pH(b.b,a);return b;}
function jN(){}
_=jN.prototype=new qD();_.tN=qL+'ConnectionData';_.tI=131;function fN(a){a.a=oH(new mH());}
function gN(c,b,a){mN(c,b);fN(c);pH(c.a,a);return c;}
function hN(c,b,a){gN(c,iI(b),iI(a));return c;}
function eN(){}
_=eN.prototype=new jN();_.tN=qL+'BezierConnectionData';_.tI=132;function pN(b,a,c){b.a=a;b.b=c;return b;}
function rN(b,a){return fD((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function tN(c,a,b){if(a===(cO(),eO)){return pN(new oN(),c.a,c.b+b);}else if(a===(cO(),hO)){return pN(new oN(),c.a,c.b-b);}else if(a===(cO(),fO)){return pN(new oN(),c.a-b,c.b);}else if(a===(cO(),gO)){return pN(new oN(),c.a+b,c.b);}else{throw tC(new sC());}}
function sN(a,b){return pN(new oN(),a.a+b.a,a.b+b.b);}
function uN(a){return pN(new oN(),-a.a,-a.b);}
function oN(){}
_=oN.prototype=new qD();_.tN=qL+'Point';_.tI=133;_.a=0;_.b=0;function wN(a){a.c=nK(new mK());}
function xN(a){wN(a);return a;}
function zN(b,a){return tN(pN(new oN(),b.mb()+vh(b.sb()/2),b.qb()+vh(b.jb()/2)),a,dO(a)?vh(b.sb()/2):vh(b.jb()/2));}
function AN(c){var a,b;for(b=qK(c.c);lG(b);){a=sh(mG(b),39);a.Bc();}}
function BN(a){oK(this.c,a);}
function CN(a){return zN(this,a);}
function DN(){return iO();}
function EN(a){return zN(this,a);}
function vN(){}
_=vN.prototype=new qD();_.w=BN;_.db=CN;_.gb=DN;_.rc=EN;_.tN=rL+'AbstractConnector';_.tI=134;function cO(){cO=FK;hO=bO(new aO(),'UP');eO=bO(new aO(),'DOWN');fO=bO(new aO(),'LEFT');gO=bO(new aO(),'RIGHT');}
function bO(b,a){cO();b.a=a;return b;}
function dO(a){return a===fO||a===gO;}
function iO(){cO();return nh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',153,33,[hO,eO,fO,gO]);}
function jO(){return this.a;}
function aO(){}
_=aO.prototype=new qD();_.tS=jO;_.tN=rL+'Direction';_.tI=135;_.a=null;var eO,fO,gO,hO;function qO(){qO=FK;yO=tJ(new xI());}
function pO(a,b){qO();xN(a);a.b=b;return a;}
function rO(){return this.b.nb();}
function sO(){var a,b;a=0;b=jk(this.b.ib());while(b!==null){if(gE('relative',kk(b,'position'))){a=ak(b);break;}b=jk(b);}return jz(this.b)-a;}
function tO(){var a,b;a=0;b=jk(this.b.ib());while(b!==null){if(gE('relative',kk(b,'position'))){a=bk(b);break;}b=jk(b);}return kz(this.b)-a;}
function uO(){return this.b.ob();}
function vO(a){qO();return sh(zJ(yO,a),40);}
function wO(b){qO();var a;if(wJ(yO,b)){return sh(zJ(yO,b),40);}else{a=pO(new kO(),b);AJ(yO,b,a);return a;}}
function xO(c,b){qO();var a;if(wJ(yO,c)){return sh(zJ(yO,c),40);}else{a=mO(new lO(),c,b);AJ(yO,c,a);return a;}}
function kO(){}
_=kO.prototype=new vN();_.jb=rO;_.mb=sO;_.qb=tO;_.sb=uO;_.tN=rL+'UIObjectConnector';_.tI=136;_.b=null;var yO;function nO(){nO=FK;qO();}
function mO(b,a,c){nO();b.a=c;pO(b,a);return b;}
function oO(){return this.a;}
function lO(){}
_=lO.prototype=new kO();_.gb=oO;_.tN=rL+'UIObjectConnector$1';_.tI=137;function cP(a){ng(new AO());cl(EO(new DO(),a));}
function zO(){}
_=zO.prototype=new qD();_.tN=sL+'BaseExamplesEntryPoint';_.tI=138;function CO(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=cF(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=Aq(new yq(),true);Bk(a.ib(),'backgroundColor','#ABCDEF');zE(),BE;d=lE(d,' ','&nbsp;');Dq(a,'<pre>'+d+'<\/pre>');bw(a);}
function AO(){}
_=AO.prototype=new qD();_.tN=sL+'BaseExamplesEntryPoint$1';_.tI=139;function EO(b,a){b.a=a;return b;}
function aP(){kP(this.a);}
function DO(){}
_=DO.prototype=new qD();_.bb=aP;_.tN=sL+'BaseExamplesEntryPoint$2';_.tI=140;function kP(b){var a;a=Ay(new ny());gp(bx('tabs'),a);Cy(a,mQ(new lQ()),'Rectilinear');Cy(a,iQ(new hQ()),'Bezier');Cy(a,qQ(new pQ()),'Simple rect.');By(a,fP(new eP(),b,a));bz(a,0);}
function dP(){}
_=dP.prototype=new zO();_.tN=sL+'GwtDiagramsExample';_.tI=141;function fP(b,a,c){b.a=c;return b;}
function hP(a,b){return true;}
function iP(b,c){var a;a=sh(Ey(this.a,c),41);aQ(a);}
function eP(){}
_=eP.prototype=new qD();_.Db=hP;_.nc=iP;_.tN=sL+'GwtDiagramsExample$1';_.tI=142;function dQ(a){a.c=fp(new ep());}
function eQ(a){var b;lx(a);dQ(a);hz(a,'gwt-diagrams-example');b=bA(new Fz());nx(a,b);cA(b,a.c);cA(b,gQ(a,FP(a)));return a;}
function gQ(e,d){var a,b,c;a=ur(new tr());hz(a,'gwt-diagrams-sources-panel');for(b=zF(d);sF(b);){c=sh(tF(b),12);vr(a,c);}return a;}
function cQ(){}
_=cQ.prototype=new ex();_.tN=tL+'AbstractExample';_.tI=143;function zP(a){a.a=oH(new mH());}
function AP(a){eQ(a);zP(a);a.b=EP(a);Bk(a.c.ib(),'width','450px');Bk(a.c.ib(),'height','350px');a.D();return a;}
function BP(b,a){gp(b.c,a);qH(b.a,a);}
function DP(e,d,c,f,a){var b;b=dv(new bv(),d);hz(b,'example-connector');hp(e.c,b,c,f);pP(e.b,b);if(a!==null){return xO(b,nh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',153,33,[a]));}return wO(b);}
function EP(b){var a;a=nP(new mP(),b.c,true,b);return a;}
function FP(f){var a,b,c,d,e;e=oH(new mH());b=jE(lg(f),46);a=mE(lg(f),b+1);qH(e,wu(new uu(),a+'.java',''));qH(e,wu(new uu(),'AbstractExample.java',''));qH(e,wu(new uu(),'AbstractConnectionsExample.java',''));for(d=zF(e);sF(d);){c=sh(tF(d),42);hz(c,'gwt-diagrams-source-link');xu(c,wP(new vP(),f,c));}return e;}
function aQ(c){var a,b;for(b=zF(c.a);sF(b);){a=sh(tF(b),39);a.Bc();}}
function bQ(){var a,b,c,d,e,f,g,h;a=DP(this,'all',50,50,null);b=DP(this,'all',100,100,null);this.z(a,b);c=DP(this,'up',250,50,(cO(),hO));d=DP(this,'down',300,100,(cO(),eO));this.z(c,d);e=DP(this,'left',50,200,(cO(),fO));f=DP(this,'right',100,250,(cO(),gO));this.z(e,f);g=DP(this,'left',250,200,(cO(),fO));h=DP(this,'left',300,250,(cO(),fO));this.z(g,h);}
function lP(){}
_=lP.prototype=new cQ();_.D=bQ;_.tN=tL+'AbstractConnectionsExample';_.tI=144;_.b=null;function oP(){oP=FK;ic();}
function nP(d,a,b,c){oP();hc(d,a,b);return d;}
function pP(a,b){z(a,b);Bk(b.ib(),'position','absolute');Bk(b.ib(),'zIndex','100');}
function qP(c,b,a){return sP(new rP(),b,a,c);}
function mP(){}
_=mP.prototype=new gc();_.tN=tL+'AbstractConnectionsExample$1';_.tI=145;function tP(){tP=FK;vd();}
function sP(d,a,b,c){tP();ud(d,a,b);return d;}
function uP(d,c,b){var a;sc(this,d,c,b);a=vO(c);if(a!==null){AN(a);}}
function rP(){}
_=rP.prototype=new td();_.lc=uP;_.tN=tL+'AbstractConnectionsExample$2';_.tI=146;function wP(b,a,c){b.a=c;return b;}
function yP(a){Cm('../source/'+zu(this.a),'','');}
function vP(){}
_=vP.prototype=new qD();_.Fb=yP;_.tN=tL+'AbstractConnectionsExample$3';_.tI=147;function iQ(a){AP(a);return a;}
function kQ(a,b){BP(this,iM(new gM(),a,b));}
function hQ(){}
_=hQ.prototype=new lP();_.z=kQ;_.tN=tL+'BezierExample';_.tI=148;function mQ(a){AP(a);return a;}
function oQ(a,b){BP(this,qM(new oM(),a,b));}
function lQ(){}
_=lQ.prototype=new lP();_.z=oQ;_.tN=tL+'RectilinearExample';_.tI=149;function qQ(a){AP(a);return a;}
function sQ(d,a,b){var c;c=qM(new oM(),a,b);eM(c,new bN());BP(d,c);}
function tQ(a,b){sQ(this,a,b);}
function uQ(){var a,b;a=DP(this,'connector 1',50,50,(cO(),hO));b=DP(this,'connector 2',200,200,(cO(),eO));sQ(this,a,b);}
function pQ(){}
_=pQ.prototype=new lP();_.z=tQ;_.D=uQ;_.tN=tL+'SimpleRectilinearExample';_.tI=150;function rB(){cP(new dP());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{rB();}catch(a){b(d);}else{rB();}}
var yh=[{},{25:1},{1:1,25:1,36:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{9:1,25:1,36:1},{21:1,25:1},{25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{25:1},{14:1,25:1},{14:1,25:1},{11:1,14:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{13:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1},{18:1,25:1},{18:1,25:1},{18:1,25:1},{25:1},{13:1,17:1,25:1},{13:1,25:1},{19:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1,26:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{2:1,12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1,29:1},{25:1,29:1},{25:1,29:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,21:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{5:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{3:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1,42:1},{25:1,29:1},{2:1,12:1,22:1,24:1,25:1,26:1,27:1},{19:1,25:1},{25:1},{12:1,20:1,25:1,26:1,27:1},{25:1,29:1},{12:1,23:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,20:1,25:1,26:1,27:1},{4:1,12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1,28:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{10:1,14:1,25:1},{25:1},{25:1,30:1},{25:1,31:1},{25:1,31:1},{25:1},{25:1},{25:1},{25:1},{25:1,30:1},{25:1,37:1},{25:1,31:1},{25:1},{25:1,31:1},{10:1,14:1,25:1},{25:1},{25:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{25:1},{25:1},{25:1},{25:1},{25:1,38:1},{25:1,32:1},{25:1,34:1},{25:1,33:1},{25:1,34:1,40:1},{25:1,34:1,40:1},{25:1},{25:1},{15:1,25:1},{25:1},{23:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{7:1,25:1},{20:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{8:1,25:1},{25:1},{25:1},{25:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();