(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,sN='com.allen_sauer.gwt.dragdrop.client.',tN='com.allen_sauer.gwt.dragdrop.client.drop.',uN='com.allen_sauer.gwt.dragdrop.client.util.',vN='com.allen_sauer.gwt.dragdrop.client.util.impl.',wN='com.google.gwt.core.client.',xN='com.google.gwt.lang.',yN='com.google.gwt.user.client.',zN='com.google.gwt.user.client.impl.',AN='com.google.gwt.user.client.ui.',BN='com.google.gwt.user.client.ui.impl.',CN='java.io.',DN='java.lang.',EN='java.util.',FN='pl.balon.gwt.diagrams.client.common.bezier.',aO='pl.balon.gwt.diagrams.client.connection.',bO='pl.balon.gwt.diagrams.client.connection.calculator.',cO='pl.balon.gwt.diagrams.client.connection.data.',dO='pl.balon.gwt.diagrams.client.connector.',eO='pl.balon.gwt.diagramsexample.client.',fO='pl.balon.gwt.diagramsexample.client.examples.';function rN(){}
function AF(a){return this===a;}
function BF(){return eH(this);}
function CF(){return this.tN+'@'+this.hC();}
function yF(){}
_=yF.prototype={};_.eQ=AF;_.hC=BF;_.tS=CF;_.toString=function(){return this.tS();};_.tN=DN+'Object';_.tI=1;function fL(b,a){b.d=a;return b;}
function eL(){}
_=eL.prototype=new yF();_.tN=EN+'EventObject';_.tI=3;_.d=null;function ob(c,b,a){fL(c,b);c.c=a;return c;}
function qb(){var a;a=this.c!==null?'dropTarget='+gg(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+gg(this.d)+')';}
function nb(){}
_=nb.prototype=new eL();_.tS=qb;_.tN=sN+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ob(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new nb();_.tS=q;_.tN=sN+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function v(){v=rN;db=dM(new hL());}
function s(a){a.j=y(a);}
function t(c,b,a){v();s(c);c.h=b!==null?b:yy();c.g=c.Db(c.h,a);F(c,c.g);c.o=tc(new rc(),c);return c;}
function u(b,a){if(b.i===null){b.i=yb(new xb());}EJ(b.i,a);}
function w(c,a,b){hB(a,'dragdrop-dragging');}
function x(b,a){pc(b.j,b.h,a);if(b.i!==null){Bb(b.i,a);}bB(a,'dragdrop-dragging');}
function y(a){return kc(new dc());}
function z(b,c){var a;a=nc(b.j,c,b.h);return a!==null?a:b.g;}
function A(a,b){{B(a,b,b);}}
function B(c,b,a){xc(c.o,b,a);bB(b,'dragdrop-draggable');bB(a,'dragdrop-handle');kM(db,b,a);}
function C(b,a){if(b.i!==null){Ab(b.i,a);}}
function D(c,a,b){if(c.i!==null){Cb(c.i,a,b);}}
function E(b,a){if(b.i!==null){Db(b.i,a);}}
function F(b,a){lc(b.j,a);}
function ab(b,a){if(pi(b.m,2)){eq(oi(b.m,2),a,b.n.a,b.n.d);}else if(pi(b.m,3)){cw(oi(b.m,3),a,b.k);}else if(pi(b.m,4)){FB(oi(b.m,4),a,b.k);}else if(pi(b.m,5)){at(oi(b.m,5),a,b.k);}else if(pi(b.m,6)){oi(b.m,6).cd(a);}else{throw FF(new DF(),'Unable to handle initialDraggableParent '+hh(b.m));}}
function bb(b,a){if(b.l!==null&&sG(b.l)!=0){Dl(a.jb(),'margin',b.l);}}
function cb(b,a){b.m=a.p;if(pi(b.m,2)){b.n=lg(new kg(),a,b.m);}else if(pi(b.m,3)){b.k=kr(oi(b.m,3),a);}else if(pi(b.m,4)){b.k=kr(oi(b.m,4),a);}else if(pi(b.m,5)){b.k=kr(oi(b.m,5),a);}else if(pi(b.m,6)){}else{throw FF(new DF(),"Unable to handle 'initialDraggableParent instanceof "+hh(b.m)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.l=ll(a.jb(),'margin');if(b.l!==null&&sG(b.l)!=0){Dl(a.jb(),'margin','0px');}}
function eb(a){A(this,a);}
function fb(b,a){return re(new qe(),b,a);}
function r(){}
_=r.prototype=new yF();_.Bb=eb;_.Db=fb;_.tN=sN+'AbstractDragController';_.tI=6;_.g=null;_.h=null;_.i=null;_.k=0;_.l=null;_.m=null;_.n=null;_.o=null;var db;function hb(b,a){b.b=a;return b;}
function jb(a){if(a.c==0){return;}uc(a.b,a.d,a.e);a.a=cH()-a.c;a.c=0;}
function kb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=cH();}if(a.a>80){em(a);}else{jb(a);}}
function lb(){jb(this);}
function gb(){}
_=gb.prototype=new yF();_.bb=lb;_.tN=sN+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function tb(a){}
function ub(a){}
function vb(a){}
function wb(a){}
function rb(){}
_=rb.prototype=new yF();_.fc=tb;_.gc=ub;_.sc=vb;_.tc=wb;_.tN=sN+'DragHandlerAdapter';_.tI=8;function sH(d,a,b){var c;while(a.wb()){c=a.Eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function uH(a){throw pH(new nH(),'add');}
function vH(b){var a;a=sH(this,this.yb(),b);return a!==null;}
function wH(){var a,b,c;c=dG(new cG());a=null;eG(c,'[');b=this.yb();while(b.wb()){if(a!==null){eG(c,a);}else{a=', ';}eG(c,FG(b.Eb()));}eG(c,']');return iG(c);}
function rH(){}
_=rH.prototype=new yF();_.s=uH;_.A=vH;_.tS=wH;_.tN=EN+'AbstractCollection';_.tI=9;function fI(b,a){throw yE(new wE(),'Index: '+a+', Size: '+b.b);}
function gI(a){return zH(new yH(),a);}
function hI(a){return cI(new bI(),a);}
function iI(b,a){throw pH(new nH(),'add');}
function jI(a){this.r(this.ed(),a);return true;}
function kI(e){var a,b,c,d,f;if(e===this){return true;}if(!pi(e,31)){return false;}f=oi(e,31);if(this.ed()!=f.ed()){return false;}c=gI(this);d=f.yb();while(BH(c)){a=CH(c);b=CH(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function lI(){var a,b,c,d;c=1;a=31;b=gI(this);while(BH(b)){d=CH(b);c=31*c+(d===null?0:d.hC());}return c;}
function mI(){return gI(this);}
function nI(a){throw pH(new nH(),'remove');}
function xH(){}
_=xH.prototype=new rH();_.r=iI;_.s=jI;_.eQ=kI;_.hC=lI;_.yb=mI;_.Bc=nI;_.tN=EN+'AbstractList';_.tI=10;function BJ(a){{FJ(a);}}
function CJ(a){BJ(a);return a;}
function EJ(b,a){uK(b.a,b.b++,a);return true;}
function DJ(d,a){var b,c;c=a.yb();b=c.wb();while(c.wb()){uK(d.a,d.b++,c.Eb());}return b;}
function aK(a){FJ(a);}
function FJ(a){a.a=xh();a.b=0;}
function cK(b,a){return eK(b,a)!=(-1);}
function dK(b,a){if(a<0||a>=b.b){fI(b,a);}return qK(b.a,a);}
function eK(b,a){return fK(b,a,0);}
function fK(c,b,a){if(a<0){fI(c,a);}for(;a<c.b;++a){if(pK(b,qK(c.a,a))){return a;}}return (-1);}
function gK(a){return a.b==0;}
function hK(c,a){var b;b=dK(c,a);sK(c.a,a,1);--c.b;return b;}
function iK(c,b){var a;a=eK(c,b);if(a==(-1)){return false;}hK(c,a);return true;}
function jK(d,a,b){var c;c=dK(d,a);uK(d.a,a,b);return c;}
function kK(c,a){var b;if(a.a<c.b){a=di(a,c.b);}for(b=0;b<c.b;++b){ki(a,b,qK(c.a,b));}if(a.a>c.b){ki(a,c.b,null);}return a;}
function mK(a,b){if(a<0||a>this.b){fI(this,a);}lK(this.a,a,b);++this.b;}
function nK(a){return EJ(this,a);}
function lK(a,b,c){a.splice(b,0,c);}
function oK(a){return cK(this,a);}
function pK(a,b){return a===b||a!==null&&a.eQ(b);}
function rK(a){return dK(this,a);}
function qK(a,b){return a[b];}
function tK(a){return hK(this,a);}
function sK(a,c,b){a.splice(c,b);}
function uK(a,b,c){a[b]=c;}
function vK(){return this.b;}
function AJ(){}
_=AJ.prototype=new xH();_.r=mK;_.s=nK;_.A=oK;_.ub=rK;_.Bc=tK;_.ed=vK;_.tN=EN+'ArrayList';_.tI=11;_.a=null;_.b=0;function yb(a){CJ(a);return a;}
function Ab(d,a){var b,c;for(c=gI(d);BH(c);){b=oi(CH(c),7);b.fc(a);}}
function Bb(e,d){var a,b,c;a=ac(new Fb(),d);for(c=gI(e);BH(c);){b=oi(CH(c),7);b.gc(a);}}
function Cb(f,e,a){var b,c,d;b=ob(new nb(),e,a);for(d=gI(f);BH(d);){c=oi(CH(d),7);c.sc(b);}}
function Db(e,d){var a,b,c;a=ac(new Fb(),d);for(c=gI(e);BH(c);){b=oi(CH(c),7);b.tc(a);}}
function xb(){}
_=xb.prototype=new AJ();_.tN=sN+'DragHandlerCollection';_.tI=12;function ac(b,a){fL(b,a);return b;}
function cc(){return 'DragStartEvent(source='+gg(this.d)+')';}
function Fb(){}
_=Fb.prototype=new eL();_.tS=cc;_.tN=sN+'DragStartEvent';_.tI=13;function jc(a){a.a=CJ(new AJ());}
function kc(a){jc(a);return a;}
function lc(b,a){EJ(b.a,a);}
function nc(g,h,a){var b,c,d,e,f,i,j,k;i=ig(new hg(),h,null);j=ef(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(hf(f,i)){k=df(f,j);if(k<=c){if(e===null|| !zf(hc(b).jb(),hc(e).jb())){c=k;e=b;}}}}return e===null?null:e.a;}
function oc(a){return gI(a.a);}
function pc(h,b,d){var a,c,e,f,g;a=ig(new hg(),b,null);g=CJ(new AJ());for(f=oc(h);BH(f);){e=oi(CH(f),8);c=fc(new ec(),e);if(!zf(d.jb(),hc(c).jb())){if(hf(c.b,a)){EJ(g,c);}}}h.b=oi(kK(g,ji('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',169,10,[])),9);AK(h.b);}
function dc(){}
_=dc.prototype=new yF();_.tN=sN+'DropControllerCollection';_.tI=14;_.b=null;function fc(c,a){var b;c.a=a;b=a.ib();if(!b.xb()){throw uE(new sE(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=ig(new hg(),b,null);return c;}
function hc(a){return a.a.ib();}
function ic(a){var b;b=oi(a,10);return zf(hc(this).jb(),hc(b).jb())?1:(-1);}
function ec(){}
_=ec.prototype=new yF();_.v=ic;_.tN=sN+'DropControllerCollection$Candidate';_.tI=15;_.a=null;_.b=null;function sc(a){a.d=hb(new gb(),a);a.f=dM(new hL());}
function tc(b,a){sc(b);b.e=a;b.a=a.h;return b;}
function uc(e,f,g){var a,b,c,d;c=lg(new kg(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=fF(0,gF(a,e.l));b=fF(0,gF(b,e.m));}Af(e.o.jb(),a,b);d=z(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.kc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ic(e.o,e.g,e.e);}}if(e.i!==null){e.i.rc(e.o,e.g,e.e);}}
function vc(b){var a;ql(b.b.jb());b.h=false;if(b.i!==null){b.i.kc(b.g,b.e);}b.i=null;bd(b.e,b.g,null);a=ob(new nb(),b.g,null);C(b.e,a);}
function xc(c,b,a){if(a!==null){xw(a,c);kM(c.f,a,b);}else{throw FF(new DF(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function yc(f){var a,c,d,e;f.g=oi(jM(f.f,f.b),14);try{E(f.e,f.g);}catch(a){a=zi(a);if(pi(a,12)){a;return;}else throw a;}cd(f.e,f.g);f.o=f.e.f;f.l=Ef(f.a.jb())-f.o.pb();f.m=Df(f.a.jb())-f.o.ob();e=lg(new kg(),f.b,f.a);c=lg(new kg(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;vl(f.b.jb());f.h=true;try{uc(f,f.j,f.k);}catch(a){a=zi(a);if(pi(a,11)){d=a;vc(f);throw d;}else throw a;}}
function zc(b,c,d){var a;this.b=b;a=tk((Fj(),nk));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Ek((Fj(),nk));cg();this.j=c;this.k=d;}
function Ac(a){}
function Bc(a){}
function Cc(d,e,f){var a,c;if(!this.h){if(this.n){yc(this);}if(!this.h){return;}}Ek((Fj(),nk));try{kb(this.d,e,f);}catch(a){a=zi(a);if(pi(a,11)){c=a;vc(this);throw c;}else throw a;}}
function Dc(g,h,i){var a,a,d,e,f;d=tk((Fj(),nk));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{ql(this.b.jb());uc(this,h,i);this.h=false;if(this.i===null){vc(this);return;}try{D(this.e,this.g,this.i.ib());}catch(a){a=zi(a);if(pi(a,12)){a;vc(this);return;}else throw a;}try{this.i.uc(this.o,this.g,this.e);}catch(a){a=zi(a);if(pi(a,13)){a;vc(this);return;}else throw a;}bd(this.e,this.g,this.i.ib());e=this.i.hc(this.o,this.g,this.e);C(this.e,e);}catch(a){a=zi(a);if(pi(a,11)){f=a;vc(this);throw f;}else throw a;}finally{this.i=null;}}
function rc(){}
_=rc.prototype=new yF();_.mc=zc;_.nc=Ac;_.oc=Bc;_.pc=Cc;_.qc=Dc;_.tN=sN+'MouseDragHandler';_.tI=16;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ad(){ad=rN;v();}
function Fc(c,b,a){ad();t(c,b,a);return c;}
function bd(c,a,b){w(c,a,b);if(c.c!==null){c.c=null;if(c.e!==null){tC(c.e);c.e=null;}else{if(b===null){ab(c,a);}}bb(c,a);tC(c.f);c.f=null;}}
function cd(d,a){var b,c;x(d,a);d.c=a;d.e=d.Cb(a);cb(d,a);c=lg(new kg(),a,d.h);d.f=dz(new Cy());bB(d.f,'dragdrop-movable-panel');if(d.e===null){kB(d.f,a.pb(),a.ob());}eq(d.h,d.f,c.a,c.d);b=d.e!==null?d.e:d.c;d.f.cd(b);}
function dd(b,a){b.d=a;}
function ed(a){var b;if(this.d){b=ev(new it(),'this is a Drag Proxy');bB(b,'dragdrop-proxy');kB(b,this.c.pb(),this.c.ob());return b;}else{return null;}}
function Ec(){}
_=Ec.prototype=new r();_.Cb=ed;_.tN=sN+'PickupDragController';_.tI=17;_.c=null;_.d=false;_.e=null;_.f=null;function jH(){jH=rN;lH=ii('[Ljava.lang.StackTraceElement;',[171],[36],[0],null);}
function gH(a){a.c=lH;}
function hH(a){jH();gH(a);return a;}
function iH(b,a){jH();gH(b);b.b=a;return b;}
function kH(c){var a,b;a=hh(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function mH(){return kH(this);}
function fH(){}
_=fH.prototype=new yF();_.tS=mH;_.tN=DN+'Throwable';_.tI=18;_.a=null;_.b=null;var lH;function oE(){oE=rN;jH();}
function mE(a){oE();hH(a);return a;}
function nE(b,a){oE();iH(b,a);return b;}
function lE(){}
_=lE.prototype=new fH();_.tN=DN+'Exception';_.tI=19;function hd(){hd=rN;oE();}
function gd(a){hd();mE(a);return a;}
function fd(){}
_=fd.prototype=new lE();_.tN=sN+'VetoDragException';_.tI=20;function yd(b,a){b.g=a;bB(a,b.hb());return b;}
function Ad(d,c,b,a){hB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.Ab(c,b,a);}
function Bd(d,c,b,a){bB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Cd(c,b,a){hB(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Dd(){return this.g;}
function Ed(c,b,a){return ob(new nb(),b,this.g);}
function Fd(c,b,a){return Ad(this,c,b,a);}
function ae(c,b,a){Bd(this,c,b,a);}
function be(b,a){Cd(this,b,a);}
function ce(c,b,a){}
function de(c,b,a){}
function xd(){}
_=xd.prototype=new yF();_.ib=Dd;_.Ab=Ed;_.hc=Fd;_.ic=ae;_.kc=be;_.rc=ce;_.uc=de;_.tN=tN+'AbstractDropController';_.tI=21;_.g=null;function ge(){ge=rN;me=vw(new tw(),'x');}
function fe(b,a){ge();yd(b,a);return b;}
function he(f,e){var a,b,c,d;d=dz(new Cy());bB(d,'dragdrop-positioner');eq(yy(),d,(-500),(-500));d.cd(me);a=dz(new Cy());c=e.pb()-Ff(d);b=e.ob()-ag(d);kB(a,c,b);d.cd(a);return d;}
function ie(e,d,b,a){var c;c=Ad(e,d,b,a);le(e);return c;}
function je(d,c,b,a){Bd(d,c,b,a);d.f=he(d,b);}
function ke(c,b,a){Cd(c,b,a);le(c);}
function le(a){if(a.f!==null){tC(a.f);}}
function ne(c,b,a){return ie(this,c,b,a);}
function oe(c,b,a){je(this,c,b,a);}
function pe(b,a){ke(this,b,a);}
function ee(){}
_=ee.prototype=new xd();_.hc=ne;_.ic=oe;_.kc=pe;_.tN=tN+'AbstractPositioningDropController';_.tI=22;_.f=null;var me;function kd(){kd=rN;ge();}
function jd(b,a){kd();fe(b,a);b.d=ze(new ye(),a);return b;}
function ld(d,c,a,e){var b;b=d.eb(c,a,e);if(b!==null){eq(d.d.b,e,b.a,b.d);}}
function md(e,d,b,a){var c;eq(e.d.b,b,e.c.a,e.c.d);c=ie(e,d,b,a);e.e=null;return c;}
function nd(c,b,a){ke(c,b,a);De(c.d,null);c.e=null;}
function od(d,c,b,a){ld(d,c,b,d.f);}
function pd(b,a,d){var c;c=ig(new hg(),b,this.d.a);if(this.e===null){this.e=lg(new kg(),b,this.d.b);}else{rg(this.e,b);}ng(this.e,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.e;}
function qd(){return 'dragdrop-dropTarget dragdrop-absolute-positioning-drop-target';}
function rd(e,b,a){var c,d;c=this.g;d=lg(new kg(),b,c);return o(new n(),b,c,d.a,d.d);}
function sd(c,b,a){return md(this,c,b,a);}
function td(c,b,a){je(this,c,b,a);De(this.d,a.h);}
function ud(b,a){nd(this,b,a);}
function vd(c,b,a){od(this,c,b,a);}
function wd(c,b,a){this.c=this.eb(c,b,b);if(this.c===null){throw Fe(new Ee());}}
function id(){}
_=id.prototype=new ee();_.eb=pd;_.hb=qd;_.Ab=rd;_.hc=sd;_.ic=td;_.kc=ud;_.rc=vd;_.uc=wd;_.tN=tN+'AbsolutePositionDropController';_.tI=23;_.c=null;_.d=null;_.e=null;function se(){se=rN;kd();}
function re(c,b,a){se();jd(c,b);c.a=a;return c;}
function te(b,a,d){var c;if(this.a){c=ig(new hg(),b,this.d.a);if(this.b===null){this.b=lg(new kg(),b,this.d.b);}else{rg(this.b,b);}ng(this.b,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.b;}else{return null;}}
function ue(){return 'dragdrop-boundary';}
function ve(d,c,a){var b;b=md(this,d,c,a);this.b=null;return b;}
function we(b,a){nd(this,b,a);this.b=null;}
function qe(){}
_=qe.prototype=new id();_.eb=te;_.hb=ue;_.hc=ve;_.kc=we;_.tN=tN+'BoundaryDropController';_.tI=24;_.a=false;_.b=null;function ze(b,a){b.b=a;return b;}
function Be(a){return Df(a.b.jb());}
function Ce(a){return Ef(a.b.jb());}
function De(b,a){b.a=a;}
function ye(){}
_=ye.prototype=new yF();_.tN=tN+'DropTargetInfo';_.tI=25;_.a=null;_.b=null;function af(){af=rN;oE();}
function Fe(a){af();mE(a);return a;}
function Ee(){}
_=Ee.prototype=new lE();_.tN=tN+'VetoDropException';_.tI=26;function df(b,a){var c,d;c=fF(b.b-a.a,a.a-b.c);d=fF(b.d-a.b,a.b-b.a);return fF(c,d);}
function ef(a){return tf(new sf(),a.b+si(gf(a)/2),a.d+si(ff(a)/2));}
function ff(a){return a.a-a.d;}
function gf(a){return a.c-a.b;}
function hf(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function jf(b,a){b.a=a;}
function kf(b,a){b.b=a;}
function lf(b,a){b.c=a;}
function mf(a,b){a.d=b;}
function nf(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function bf(){}
_=bf.prototype=new yF();_.tS=nf;_.tN=uN+'AbstractArea';_.tI=27;_.a=0;_.b=0;_.c=0;_.d=0;function qf(){return '('+this.nb()+', '+this.rb()+')';}
function of(){}
_=of.prototype=new yF();_.tS=qf;_.tN=uN+'AbstractLocation';_.tI=28;function tf(b,a,c){b.a=a;b.b=c;return b;}
function vf(){return this.a;}
function wf(){return this.b;}
function sf(){}
_=sf.prototype=new of();_.nb=vf;_.rb=wf;_.tN=uN+'CoordinateLocation';_.tI=29;_.a=0;_.b=0;function yf(){yf=rN;{bg=new wg();}}
function zf(b,a){yf();return ah(bg,b,a);}
function Af(a,b,c){yf();a.style.left=b+'px';a.style.top=c+'px';}
function Bf(a){yf();return Ag(bg,a);}
function Cf(a){yf();return Bg(bg,a);}
function Df(a){yf();return Cg(bg,a);}
function Ef(a){yf();return Dg(bg,a);}
function Ff(a){yf();return bh(bg,a);}
function ag(a){yf();return ch(bg,a);}
function cg(){yf();Eg(bg);}
var bg=null;function gg(a){var b;b=hh(a);return uG(b,rG(b,46)+1);}
function ig(e,g,c){var a,b,d,f;b=dB(g);f=eB(g);if(c!==null){b-=dB(c);b-=Bf(c.jb());f-=eB(c);f-=Cf(c.jb());}d=b+g.pb();a=f+g.ob();kf(e,b);mf(e,f);lf(e,d);jf(e,a);return e;}
function hg(){}
_=hg.prototype=new bf();_.tN=uN+'WidgetArea';_.tI=30;function lg(b,c,a){pg(b,c);og(b,a);qg(b);return b;}
function ng(e,c,d,a,b){e.a=fF(c,gF(e.a,a));e.d=fF(d,gF(e.d,b));}
function og(b,a){if(a===null||a===yy()){b.b=0;b.c=0;}else{b.b=dB(a)+Bf(a.jb());b.c=eB(a)+Cf(a.jb());}}
function pg(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=dB(b);a.f=eB(b);}}
function qg(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function rg(a,b){pg(a,b);qg(a);}
function sg(){return this.a;}
function tg(){return this.d;}
function ug(){return '('+this.a+', '+this.d+')';}
function kg(){}
_=kg.prototype=new of();_.nb=sg;_.rb=tg;_.tS=ug;_.tN=uN+'WidgetLocation';_.tI=31;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function ah(c,b,a){return b.contains(a);}
function bh(a,b){return b.pb()-Dg(a,b.jb());}
function ch(a,b){return b.ob()-Cg(a,b.jb());}
function vg(){}
_=vg.prototype=new yF();_.tN=vN+'DOMUtilImpl';_.tI=32;function Ag(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function Bg(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function Cg(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function Dg(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function Eg(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function yg(){}
_=yg.prototype=new vg();_.tN=vN+'DOMUtilImplStandard';_.tI=33;function wg(){}
_=wg.prototype=new yg();_.tN=vN+'DOMUtilImplOpera';_.tI=34;function hh(a){return a==null?null:a.tN;}
function jh(a){ih=a;}
var ih=null;function mh(a){return a==null?0:a.$H?a.$H:(a.$H=oh());}
function nh(a){return a==null?0:a.$H?a.$H:(a.$H=oh());}
function oh(){return ++ph;}
var ph=0;function aG(){aG=rN;oE();}
function EF(a){aG();mE(a);return a;}
function FF(b,a){aG();nE(b,a);return b;}
function DF(){}
_=DF.prototype=new lE();_.tN=DN+'RuntimeException';_.tI=35;function sh(){sh=rN;aG();}
function rh(c,b,a){sh();FF(c,'JavaScript '+b+' exception: '+a);return c;}
function qh(){}
_=qh.prototype=new DF();_.tN=wN+'JavaScriptException';_.tI=36;function vh(b,a){if(!pi(a,15)){return false;}return zh(b,oi(a,15));}
function wh(a){return mh(a);}
function xh(){return [];}
function yh(){return {};}
function Ah(a){return vh(this,a);}
function zh(a,b){return a===b;}
function Bh(){return wh(this);}
function Dh(){return Ch(this);}
function Ch(a){if(a.toString)return a.toString();return '[object]';}
function th(){}
_=th.prototype=new yF();_.eQ=Ah;_.hC=Bh;_.tS=Dh;_.tN=wN+'JavaScriptObject';_.tI=37;function Fh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function bi(a,b,c){return a[b]=c;}
function di(a,b){return ci(a,b);}
function ci(a,b){return Fh(new Eh(),b,a.tI,a.b,a.tN);}
function ei(b,a){return b[a];}
function gi(b,a){return b[a];}
function fi(a){return a.length;}
function ii(e,d,c,b,a){return hi(e,d,c,b,0,fi(b),a);}
function hi(j,i,g,c,e,a,b){var d,f,h;if((f=ei(c,e))<0){throw jF(new iF());}h=Fh(new Eh(),f,ei(i,e),ei(g,e),j);++e;if(e<a){j=uG(j,1);for(d=0;d<f;++d){bi(h,d,hi(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){bi(h,d,b);}}return h;}
function ji(f,e,c,g){var a,b,d;b=fi(g);d=Fh(new Eh(),b,e,c,f);for(a=0;a<b;++a){bi(d,a,gi(g,a));}return d;}
function ki(a,b,c){if(c!==null&&a.b!=0&& !pi(c,a.b)){throw wD(new vD());}return bi(a,b,c);}
function Eh(){}
_=Eh.prototype=new yF();_.tN=xN+'Array';_.tI=38;function ni(b,a){return !(!(b&&vi[b][a]));}
function oi(b,a){if(b!=null)ni(b.tI,a)||ui();return b;}
function pi(b,a){return b!=null&&ni(b.tI,a);}
function qi(a){return a&65535;}
function ri(a){return ~(~a);}
function si(a){if(a>(BE(),CE))return BE(),CE;if(a<(BE(),DE))return BE(),DE;return a>=0?Math.floor(a):Math.ceil(a);}
function ui(){throw gE(new fE());}
function ti(a){if(a!==null){throw gE(new fE());}return a;}
function wi(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var vi;function zi(a){if(pi(a,16)){return a;}return rh(new qh(),Bi(a),Ai(a));}
function Ai(a){return a.message;}
function Bi(a){return a.name;}
function Ei(){Ei=rN;aG();}
function Di(b,a){Ei();EF(b);return b;}
function Ci(){}
_=Ci.prototype=new DF();_.tN=yN+'CommandCanceledException';_.tI=41;function tj(a){a.a=bj(new aj(),a);a.b=CJ(new AJ());a.d=fj(new ej(),a);a.f=jj(new ij(),a);}
function uj(a){tj(a);return a;}
function wj(c){var a,b,d;a=lj(c.f);oj(c.f);b=null;if(pi(a,17)){b=Di(new Ci(),oi(a,17));}else{}if(b!==null){d=ih;if(d!==null){bS(d,b);}}zj(c,false);yj(c);}
function xj(e,d){var a,b,c,f;f=false;try{zj(e,true);pj(e.f,e.b.b);en(e.a,10000);while(mj(e.f)){b=nj(e.f);c=true;try{if(b===null){return;}if(pi(b,17)){a=oi(b,17);a.bb();}else{}}finally{f=qj(e.f);if(f){return;}if(c){oj(e.f);}}if(Cj(cH(),d)){return;}}}finally{if(!f){an(e.a);zj(e,false);yj(e);}}}
function yj(a){if(!gK(a.b)&& !a.e&& !a.c){Aj(a,true);en(a.d,1);}}
function zj(b,a){b.c=a;}
function Aj(b,a){b.e=a;}
function Bj(b,a){EJ(b.b,a);yj(b);}
function Cj(a,b){return eF(a-b)>=100;}
function Fi(){}
_=Fi.prototype=new yF();_.tN=yN+'CommandExecutor';_.tI=42;_.c=false;_.e=false;function bn(){bn=rN;ln=CJ(new AJ());{kn();}}
function Fm(a){bn();return a;}
function an(a){if(a.b){fn(a.c);}else{gn(a.c);}iK(ln,a);}
function cn(e,d){var a,c;try{dn(e);}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);}else throw a;}}
function dn(a){if(!a.b){iK(ln,a);}a.Dc();}
function en(b,a){if(a<=0){throw qE(new pE(),'must be positive');}an(b);b.b=false;b.c=hn(b,a);EJ(ln,b);}
function fn(a){bn();$wnd.clearInterval(a);}
function gn(a){bn();$wnd.clearTimeout(a);}
function hn(b,a){bn();return $wnd.setTimeout(function(){b.cb();},a);}
function jn(){var a;a=ih;if(a!==null){cn(this,a);}else{dn(this);}}
function kn(){bn();pn(new Bm());}
function Am(){}
_=Am.prototype=new yF();_.cb=jn;_.tN=yN+'Timer';_.tI=43;_.b=false;_.c=0;var ln;function cj(){cj=rN;bn();}
function bj(b,a){cj();b.a=a;Fm(b);return b;}
function dj(){if(!this.a.c){return;}wj(this.a);}
function aj(){}
_=aj.prototype=new Am();_.Dc=dj;_.tN=yN+'CommandExecutor$1';_.tI=44;function gj(){gj=rN;bn();}
function fj(b,a){gj();b.a=a;Fm(b);return b;}
function hj(){Aj(this.a,false);xj(this.a,cH());}
function ej(){}
_=ej.prototype=new Am();_.Dc=hj;_.tN=yN+'CommandExecutor$2';_.tI=45;function jj(b,a){b.d=a;return b;}
function lj(a){return dK(a.d.b,a.b);}
function mj(a){return a.c<a.a;}
function nj(b){var a;b.b=b.c;a=dK(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function oj(a){hK(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function pj(b,a){b.a=a;}
function qj(a){return a.b==(-1);}
function rj(){return mj(this);}
function sj(){return nj(this);}
function ij(){}
_=ij.prototype=new yF();_.wb=rj;_.Eb=sj;_.tN=yN+'CommandExecutor$CircularIterator';_.tI=46;_.a=0;_.b=(-1);_.c=0;function Fj(){Fj=rN;ul=CJ(new AJ());{ml=new co();to(ml);}}
function ak(a){Fj();EJ(ul,a);}
function bk(b,a){Fj();zo(ml,b,a);}
function ck(a,b){Fj();return ko(ml,a,b);}
function dk(){Fj();return Bo(ml,'A');}
function ek(){Fj();return Bo(ml,'div');}
function fk(a){Fj();return Bo(ml,a);}
function gk(a){Fj();return lo(ml,a);}
function hk(){Fj();return Bo(ml,'label');}
function ik(){Fj();return Bo(ml,'span');}
function jk(){Fj();return Bo(ml,'tbody');}
function kk(){Fj();return Bo(ml,'td');}
function lk(){Fj();return Bo(ml,'tr');}
function mk(){Fj();return Bo(ml,'table');}
function qk(b,a,d){Fj();var c;c=ih;if(c!==null){ok(b,a,d,c);}else{pk(b,a,d);}}
function ok(e,d,g,f){Fj();var a,c;try{pk(e,d,g);}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(f,c);}else throw a;}}
function pk(b,a,c){Fj();var d;if(a===tl){if(Dk(b)==8192){tl=null;}}d=nk;nk=b;try{c.cc(b);}finally{nk=d;}}
function rk(b,a){Fj();Co(ml,b,a);}
function sk(a){Fj();return Do(ml,a);}
function tk(a){Fj();return fo(ml,a);}
function uk(a){Fj();return Eo(ml,a);}
function vk(a){Fj();return Fo(ml,a);}
function wk(a){Fj();return ap(ml,a);}
function xk(a){Fj();return mo(ml,a);}
function yk(a){Fj();return bp(ml,a);}
function zk(a){Fj();return cp(ml,a);}
function Ak(a){Fj();return dp(ml,a);}
function Bk(a){Fj();return no(ml,a);}
function Ck(a){Fj();return oo(ml,a);}
function Dk(a){Fj();return ep(ml,a);}
function Ek(a){Fj();po(ml,a);}
function Fk(a){Fj();return qo(ml,a);}
function al(a){Fj();return go(ml,a);}
function bl(a){Fj();return ho(ml,a);}
function cl(b,a){Fj();return fp(ml,b,a);}
function dl(a){Fj();return gp(ml,a);}
function gl(a,b){Fj();return jp(ml,a,b);}
function el(a,b){Fj();return hp(ml,a,b);}
function fl(a,b){Fj();return ip(ml,a,b);}
function hl(a){Fj();return kp(ml,a);}
function il(a){Fj();return ro(ml,a);}
function jl(a){Fj();return lp(ml,a);}
function kl(a){Fj();return so(ml,a);}
function ll(b,a){Fj();return mp(ml,b,a);}
function nl(c,a,b){Fj();uo(ml,c,a,b);}
function ol(b,a){Fj();return vo(ml,b,a);}
function pl(a){Fj();var b,c;c=true;if(ul.b>0){b=oi(dK(ul,ul.b-1),18);if(!(c=b.jc(a))){rk(a,true);Ek(a);}}return c;}
function ql(a){Fj();if(tl!==null&&ck(a,tl)){tl=null;}wo(ml,a);}
function rl(b,a){Fj();np(ml,b,a);}
function sl(a){Fj();iK(ul,a);}
function vl(a){Fj();tl=a;xo(ml,a);}
function wl(b,a,c){Fj();op(ml,b,a,c);}
function zl(a,b,c){Fj();rp(ml,a,b,c);}
function xl(a,b,c){Fj();pp(ml,a,b,c);}
function yl(a,b,c){Fj();qp(ml,a,b,c);}
function Al(a,b){Fj();sp(ml,a,b);}
function Bl(a,b){Fj();tp(ml,a,b);}
function Cl(a,b){Fj();up(ml,a,b);}
function Dl(b,a,c){Fj();vp(ml,b,a,c);}
function El(a,b){Fj();yo(ml,a,b);}
function Fl(a){Fj();return wp(ml,a);}
function am(){Fj();return xp(ml);}
function bm(){Fj();return yp(ml);}
var nk=null,ml=null,tl=null,ul;function dm(){dm=rN;fm=uj(new Fi());}
function em(a){dm();if(a===null){throw mF(new lF(),'cmd can not be null');}Bj(fm,a);}
var fm;function im(a){if(pi(a,19)){return ck(this,oi(a,19));}return vh(wi(this,gm),a);}
function jm(){return wh(wi(this,gm));}
function km(){return Fl(this);}
function gm(){}
_=gm.prototype=new th();_.eQ=im;_.hC=jm;_.tS=km;_.tN=yN+'Element';_.tI=47;function pm(a){return vh(wi(this,lm),a);}
function qm(){return wh(wi(this,lm));}
function rm(){return Fk(this);}
function lm(){}
_=lm.prototype=new th();_.eQ=pm;_.hC=qm;_.tS=rm;_.tN=yN+'Event';_.tI=48;function tm(){tm=rN;wm=CJ(new AJ());{xm=new Bp();if(!Dp(xm)){xm=null;}}}
function um(e,d){tm();var a,c;try{vm(e);}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);}else throw a;}}
function vm(a){tm();var b,c;for(b=gI(wm);BH(b);){c=ti(CH(b));null.id();}}
function ym(a){tm();if(xm!==null){Ep(xm,a);}}
function zm(b){tm();var a;a=ih;if(a!==null){um(b,a);}else{vm(b);}}
var wm,xm=null;function Dm(){while((bn(),ln).b>0){an(oi(dK((bn(),ln),0),20));}}
function Em(){return null;}
function Bm(){}
_=Bm.prototype=new yF();_.xc=Dm;_.yc=Em;_.tN=yN+'Timer$1';_.tI=49;function on(){on=rN;qn=CJ(new AJ());ao=CJ(new AJ());{Bn();}}
function pn(a){on();EJ(qn,a);}
function rn(d){on();var a,c;try{sn();}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);}else throw a;}}
function sn(){on();var a,b;for(a=gI(qn);BH(a);){b=oi(CH(a),21);b.xc();}}
function tn(d){on();var a,c;try{return un();}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);return null;}else throw a;}}
function un(){on();var a,b,c,d;d=null;for(a=gI(qn);BH(a);){b=oi(CH(a),21);c=b.yc();{d=c;}}return d;}
function vn(d){on();var a,c;try{wn();}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);}else throw a;}}
function wn(){on();var a,b;for(a=gI(ao);BH(a);){b=ti(CH(a));null.id();}}
function xn(){on();return am();}
function yn(){on();return bm();}
function zn(){on();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function An(){on();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function Bn(){on();__gwt_initHandlers(function(){En();},function(){return Dn();},function(){Cn();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Cn(){on();var a;a=ih;if(a!==null){rn(a);}else{sn();}}
function Dn(){on();var a;a=ih;if(a!==null){return tn(a);}else{return un();}}
function En(){on();var a;a=ih;if(a!==null){vn(a);}else{wn();}}
function Fn(c,b,a){on();$wnd.open(c,b,a);}
var qn,ao;function zo(c,b,a){b.appendChild(a);}
function Bo(b,a){return $doc.createElement(a);}
function Co(c,b,a){b.cancelBubble=a;}
function Do(b,a){return !(!a.altKey);}
function Eo(b,a){return a.clientX|| -1;}
function Fo(b,a){return a.clientY|| -1;}
function ap(b,a){return !(!a.ctrlKey);}
function bp(b,a){return a.which||(a.keyCode|| -1);}
function cp(b,a){return !(!a.metaKey);}
function dp(b,a){return !(!a.shiftKey);}
function ep(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function fp(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function gp(c,b){var a=$doc.getElementById(b);return a||null;}
function jp(d,a,b){var c=a[b];return c==null?null:String(c);}
function hp(c,a,b){return !(!a[b]);}
function ip(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function kp(b,a){return a.__eventBits||0;}
function lp(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.lb(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function mp(d,b,a){var c=b.style[a];return c==null?null:c;}
function np(c,b,a){b.removeChild(a);}
function op(c,b,a,d){b.setAttribute(a,d);}
function rp(c,a,b,d){a[b]=d;}
function pp(c,a,b,d){a[b]=d;}
function qp(c,a,b,d){a[b]=d;}
function sp(c,a,b){a.__listener=b;}
function tp(c,a,b){if(!b){b='';}a.innerHTML=b;}
function up(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function vp(c,b,a,d){b.style[a]=d;}
function wp(b,a){return a.outerHTML;}
function xp(a){return $doc.body.clientHeight;}
function yp(a){return $doc.body.clientWidth;}
function zp(a){return lp(this,a);}
function bo(){}
_=bo.prototype=new yF();_.lb=zp;_.tN=zN+'DOMImpl';_.tI=50;function ko(c,a,b){return a==b;}
function lo(c,b){var a=$doc.createElement('INPUT');a.type='radio';a.name=b;return a;}
function mo(b,a){return a.relatedTarget?a.relatedTarget:null;}
function no(b,a){return a.target||null;}
function oo(b,a){return a.relatedTarget||null;}
function po(b,a){a.preventDefault();}
function qo(b,a){return a.toString();}
function ro(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function so(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function to(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){qk(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!pl(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)qk(b,a,c);};$wnd.__captureElem=null;}
function uo(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function vo(c,b,a){while(a){if(b==a){return true;}a=a.parentNode;if(a&&a.nodeType!=1){a=null;}}return false;}
function wo(b,a){if(a==$wnd.__captureElem)$wnd.__captureElem=null;}
function xo(b,a){$wnd.__captureElem=a;}
function yo(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function io(){}
_=io.prototype=new bo();_.tN=zN+'DOMImplStandard';_.tI=51;function fo(c,b){var a=b.button;if(a==0){return 1;}else{return a|| -1;}}
function go(d,b){var c=0;var a=b.parentNode;while(a!=$doc.body){if(a.tagName!='TR'&&a.tagName!='TBODY'){c-=a.scrollLeft;}a=a.parentNode;}while(b){c+=b.offsetLeft;b=b.offsetParent;}return c;}
function ho(c,b){var d=0;var a=b.parentNode;while(a!=$doc.body){if(a.tagName!='TR'&&a.tagName!='TBODY'){d-=a.scrollTop;}a=a.parentNode;}while(b){d+=b.offsetTop;b=b.offsetParent;}return d;}
function co(){}
_=co.prototype=new io();_.tN=zN+'DOMImplOpera';_.tI=52;function aq(a){zm(a);}
function Ap(){}
_=Ap.prototype=new yF();_.tN=zN+'HistoryImpl';_.tI=53;function Dp(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;aq(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function Ep(b,a){if(a==null){a='';}$wnd.location.hash=encodeURIComponent(a);}
function Bp(){}
_=Bp.prototype=new Ap();_.tN=zN+'HistoryImplStandard';_.tI=54;function bB(b,a){uB(b.qb(),a,true);}
function dB(a){return al(a.jb());}
function eB(a){return bl(a.jb());}
function fB(a){return fl(a.q,'offsetHeight');}
function gB(a){return fl(a.q,'offsetWidth');}
function hB(b,a){uB(b.qb(),a,false);}
function iB(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function jB(b,a){if(b.q!==null){iB(b,b.q,a);}b.q=a;}
function kB(b,c,a){if(c>=0){b.dd(c+'px');}if(a>=0){b.Fc(a+'px');}}
function lB(b,a){tB(b.qb(),a);}
function mB(b,a){El(b.jb(),a|hl(b.jb()));}
function nB(){return this.q;}
function oB(){return fB(this);}
function pB(){return gB(this);}
function qB(){return this.q;}
function rB(a){return gl(a,'className');}
function sB(a){Dl(this.q,'height',a);}
function tB(a,b){zl(a,'className',b);}
function uB(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw FF(new DF(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=wG(j);if(sG(j)==0){throw qE(new pE(),'Style names cannot be empty');}i=rB(c);e=pG(i,j);while(e!=(-1)){if(e==0||lG(i,e-1)==32){f=e+sG(j);g=sG(i);if(f==g||f<g&&lG(i,f)==32){break;}}e=qG(i,j,e+1);}if(a){if(e==(-1)){if(sG(i)>0){i+=' ';}zl(c,'className',i+j);}}else{if(e!=(-1)){b=wG(vG(i,0,e));d=wG(uG(i,e+sG(j)));if(sG(b)==0){h=d;}else if(sG(d)==0){h=b;}else{h=b+' '+d;}zl(c,'className',h);}}}
function vB(a,b){a.style.display=b?'':'none';}
function wB(a){vB(this.q,a);}
function xB(a){Dl(this.q,'width',a);}
function yB(){if(this.q===null){return '(null handle)';}return Fl(this.q);}
function aB(){}
_=aB.prototype=new yF();_.jb=nB;_.ob=oB;_.pb=pB;_.qb=qB;_.Fc=sB;_.bd=wB;_.dd=xB;_.tS=yB;_.tN=AN+'UIObject';_.tI=55;_.q=null;function sC(a){if(!a.xb()){throw uE(new sE(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.wc();}finally{a.F();Al(a.jb(),null);a.o=false;}}
function tC(a){if(pi(a.p,26)){oi(a.p,26).Cc(a);}else if(a.p!==null){throw uE(new sE(),"This widget's parent does not implement HasWidgets");}}
function uC(b,a){if(b.xb()){Al(b.jb(),null);}jB(b,a);if(b.xb()){Al(a,b);}}
function vC(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.xb()){c.ec();}c.p=null;}else{if(a!==null){throw uE(new sE(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.xb()){c.ac();}}}
function wC(){}
function xC(){}
function yC(){return this.o;}
function zC(){if(this.xb()){throw uE(new sE(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;Al(this.jb(),this);this.E();this.lc();}
function AC(a){}
function BC(){sC(this);}
function CC(){}
function DC(){}
function EC(a){uC(this,a);}
function bC(){}
_=bC.prototype=new aB();_.E=wC;_.F=xC;_.xb=yC;_.ac=zC;_.cc=AC;_.ec=BC;_.lc=CC;_.wc=DC;_.Ec=EC;_.tN=AN+'Widget';_.tI=56;_.o=false;_.p=null;function jx(b,a){vC(a,b);}
function lx(b,a){vC(a,null);}
function mx(){var a,b;for(b=this.yb();b.wb();){a=oi(b.Eb(),14);a.ac();}}
function nx(){var a,b;for(b=this.yb();b.wb();){a=oi(b.Eb(),14);a.ec();}}
function ox(){}
function px(){}
function ix(){}
_=ix.prototype=new bC();_.E=mx;_.F=nx;_.lc=ox;_.wc=px;_.tN=AN+'Panel';_.tI=57;function dr(a){a.f=iC(new cC(),a);}
function er(a){dr(a);return a;}
function fr(c,a,b){tC(a);jC(c.f,a);bk(b,a.jb());jx(c,a);}
function gr(d,b,a){var c;ir(d,a);if(b.p===d){c=kr(d,b);if(c<a){a--;}}return a;}
function hr(b,a){if(a<0||a>=b.f.b){throw xE(new wE());}}
function ir(b,a){if(a<0||a>b.f.b){throw xE(new wE());}}
function lr(b,a){return lC(b.f,a);}
function kr(b,a){return mC(b.f,a);}
function mr(e,b,c,a,d){a=gr(e,b,a);tC(b);nC(e.f,b,a);if(d){nl(c,b.jb(),a);}else{bk(c,b.jb());}jx(e,b);}
function nr(a){return oC(a.f);}
function or(b,c){var a;if(c.p!==b){return false;}lx(b,c);a=c.jb();rl(kl(a),a);qC(b.f,c);return true;}
function pr(){return nr(this);}
function qr(a){return or(this,a);}
function cr(){}
_=cr.prototype=new ix();_.yb=pr;_.Cc=qr;_.tN=AN+'ComplexPanel';_.tI=58;function cq(a){er(a);a.Ec(ek());Dl(a.jb(),'position','relative');Dl(a.jb(),'overflow','hidden');return a;}
function dq(a,b){fr(a,b,a.jb());}
function eq(b,d,a,c){tC(d);hq(b,d,a,c);dq(b,d);}
function gq(b,c){var a;a=or(b,c);if(a){iq(c.jb());}return a;}
function hq(c,e,b,d){var a;a=e.jb();if(b==(-1)&&d==(-1)){iq(a);}else{Dl(a,'position','absolute');Dl(a,'left',b+'px');Dl(a,'top',d+'px');}}
function iq(a){Dl(a,'left','');Dl(a,'top','');Dl(a,'position','');}
function jq(a){return gq(this,a);}
function bq(){}
_=bq.prototype=new cr();_.Cc=jq;_.tN=AN+'AbsolutePanel';_.tI=59;function et(){et=rN;iD(),kD;}
function ct(b,a){iD(),kD;ft(b,a);return b;}
function dt(b,a){if(b.c===null){b.c=Eq(new Dq());}EJ(b.c,a);}
function ft(b,a){uC(b,a);mB(b,7041);}
function gt(a){switch(Dk(a)){case 1:if(this.c!==null){ar(this.c,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function ht(a){ft(this,a);}
function bt(){}
_=bt.prototype=new bC();_.cc=gt;_.Ec=ht;_.tN=AN+'FocusWidget';_.tI=60;_.c=null;function mq(){mq=rN;iD(),kD;}
function lq(b,a){iD(),kD;ct(b,a);return b;}
function kq(){}
_=kq.prototype=new bt();_.tN=AN+'ButtonBase';_.tI=61;function oq(a){er(a);a.e=mk();a.d=jk();bk(a.e,a.d);a.Ec(a.e);return a;}
function qq(c,d,a){var b;b=kl(d.jb());zl(b,'height',a);}
function rq(c,b,a){zl(b,'align',a.a);}
function sq(c,b,a){Dl(b,'verticalAlign',a.a);}
function tq(b,c,d){var a;a=kl(c.jb());zl(a,'width',d);}
function nq(){}
_=nq.prototype=new cr();_.tN=AN+'CellPanel';_.tI=62;_.d=null;_.e=null;function wq(){wq=rN;iD(),kD;}
function vq(b,a){var c;iD(),kD;lq(b,ik());b.a=a;b.b=hk();El(b.a,hl(b.jb()));El(b.jb(),0);bk(b.jb(),b.a);bk(b.jb(),b.b);c='check'+ ++Cq;zl(b.a,'id',c);zl(b.b,'htmlFor',c);return b;}
function xq(b){var a;a=b.xb()?'checked':'defaultChecked';return el(b.a,a);}
function yq(b,a){xl(b.a,'checked',a);xl(b.a,'defaultChecked',a);}
function zq(b,a){Cl(b.b,a);}
function Aq(){Al(this.a,this);}
function Bq(){Al(this.a,null);yq(this,xq(this));}
function uq(){}
_=uq.prototype=new kq();_.lc=Aq;_.wc=Bq;_.tN=AN+'CheckBox';_.tI=63;_.a=null;_.b=null;var Cq=0;function Eq(a){CJ(a);return a;}
function ar(d,c){var a,b;for(a=gI(d);BH(a);){b=oi(CH(a),22);b.dc(c);}}
function Dq(){}
_=Dq.prototype=new AJ();_.tN=AN+'ClickListenerCollection';_.tI=64;function tr(a,b){if(a.d!==null){throw uE(new sE(),'Composite.initWidget() may only be called once.');}tC(b);a.Ec(b.jb());a.d=b;vC(b,a);}
function ur(){if(this.d===null){throw uE(new sE(),'initWidget() was never called in '+hh(this));}return this.q;}
function vr(){if(this.d!==null){return this.d.xb();}return false;}
function wr(){this.d.ac();this.lc();}
function xr(){try{this.wc();}finally{this.d.ec();}}
function rr(){}
_=rr.prototype=new bC();_.jb=ur;_.xb=vr;_.ac=wr;_.ec=xr;_.tN=AN+'Composite';_.tI=65;_.d=null;function zr(a){er(a);a.Ec(ek());return a;}
function Br(b,c){var a;a=c.jb();Dl(a,'width','100%');Dl(a,'height','100%');c.bd(false);}
function Cr(b,c,a){mr(b,c,b.jb(),a,true);Br(b,c);}
function Dr(b,c){var a;a=or(b,c);if(a){Er(b,c);if(b.b===c){b.b=null;}}return a;}
function Er(a,b){Dl(b.jb(),'width','');Dl(b.jb(),'height','');b.bd(true);}
function Fr(b,a){hr(b,a);if(b.b!==null){b.b.bd(false);}b.b=lr(b,a);b.b.bd(true);}
function as(a){return Dr(this,a);}
function yr(){}
_=yr.prototype=new cr();_.Cc=as;_.tN=AN+'DeckPanel';_.tI=66;_.b=null;function dz(a){ez(a,ek());return a;}
function ez(b,a){b.Ec(a);return b;}
function fz(a,b){if(a.n!==null){throw uE(new sE(),'SimplePanel can only contain one child widget');}a.cd(b);}
function hz(a,b){if(b===a.n){return;}if(b!==null){tC(b);}if(a.n!==null){a.Cc(a.n);}a.n=b;if(b!==null){bk(a.fb(),a.n.jb());jx(a,b);}}
function iz(){return this.jb();}
function jz(){return Fy(new Dy(),this);}
function kz(a){if(this.n!==a){return false;}lx(this,a);rl(this.fb(),a.jb());this.n=null;return true;}
function lz(a){hz(this,a);}
function Cy(){}
_=Cy.prototype=new ix();_.fb=iz;_.yb=jz;_.Cc=kz;_.cd=lz;_.tN=AN+'SimplePanel';_.tI=67;_.n=null;function wx(){wx=rN;fy=new lD();}
function rx(a){wx();ez(a,nD(fy));Cx(a,0,0);return a;}
function sx(b,a){wx();rx(b);b.g=a;return b;}
function tx(c,a,b){wx();sx(c,a);c.k=b;return c;}
function ux(b,a){if(a.blur){a.blur();}}
function vx(c){var a,b,d;a=c.l;if(!a){Dx(c,false);ay(c);}b=si((yn()-yx(c))/2);d=si((xn()-xx(c))/2);Cx(c,zn()+b,An()+d);if(!a){Dx(c,true);}}
function xx(a){return fB(a);}
function yx(a){return gB(a);}
function zx(b,a){if(!b.l){return;}b.l=false;gq(yy(),b);b.jb();}
function Ax(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.Fc(a.h);}if(a.i!==null){b.dd(a.i);}}}
function Bx(e,b){var a,c,d,f;d=Bk(b);c=ol(e.jb(),d);f=Dk(b);switch(f){case 128:{a=(qi(yk(b)),sw(b),true);return a&&(c|| !e.k);}case 512:{a=(qi(yk(b)),sw(b),true);return a&&(c|| !e.k);}case 256:{a=(qi(yk(b)),sw(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((Fj(),tl)!==null){return true;}if(!c&&e.g&&f==4){zx(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){ux(e,d);return false;}}}return !e.k||c;}
function Cx(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.jb();Dl(a,'left',b+'px');Dl(a,'top',d+'px');}
function Dx(a,b){Dl(a.jb(),'visibility',b?'visible':'hidden');a.jb();}
function Ex(a,b){hz(a,b);Ax(a);}
function Fx(a,b){a.i=b;Ax(a);if(sG(b)==0){a.i=null;}}
function ay(a){if(a.l){return;}a.l=true;ak(a);Dl(a.jb(),'position','absolute');if(a.m!=(-1)){Cx(a,a.j,a.m);}dq(yy(),a);a.jb();}
function by(){return this.jb();}
function cy(){return xx(this);}
function dy(){return yx(this);}
function ey(){return this.jb();}
function gy(){sl(this);sC(this);}
function hy(a){return Bx(this,a);}
function iy(a){this.h=a;Ax(this);if(sG(a)==0){this.h=null;}}
function jy(a){Dx(this,a);}
function ky(a){Ex(this,a);}
function ly(a){Fx(this,a);}
function qx(){}
_=qx.prototype=new Cy();_.fb=by;_.ob=cy;_.pb=dy;_.qb=ey;_.ec=gy;_.jc=hy;_.Fc=iy;_.bd=jy;_.cd=ky;_.dd=ly;_.tN=AN+'PopupPanel';_.tI=68;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var fy;function fs(){fs=rN;wx();}
function cs(a){a.a=dv(new it());a.f=us(new qs());}
function ds(b,a){fs();es(b,a,true);return b;}
function es(c,a,b){fs();tx(c,a,b);cs(c);Fu(c.f,0,0,c.a);c.f.Fc('100%');Au(c.f,0);Cu(c.f,0);Du(c.f,0);yt(c.f.b,1,0,'100%');Bt(c.f.b,1,0,'100%');xt(c.f.b,1,0,(ov(),pv),(wv(),yv));Ex(c,c.f);lB(c,'gwt-DialogBox');lB(c.a,'Caption');xw(c.a,c);return c;}
function gs(b,a){hv(b.a,a);}
function hs(a){if(Dk(a)==4){if(ol(this.a.jb(),Bk(a))){Ek(a);}}return Bx(this,a);}
function is(a,b,c){this.e=true;vl(this.a.jb());this.c=b;this.d=c;}
function js(a){}
function ks(a){}
function ls(c,d,e){var a,b;if(this.e){a=d+dB(this);b=e+eB(this);Cx(this,a-this.c,b-this.d);}}
function ms(a,b,c){this.e=false;ql(this.a.jb());}
function ns(a){if(this.b!==a){return false;}zu(this.f,a);return true;}
function os(a){if(this.b!==null){zu(this.f,this.b);}if(a!==null){Fu(this.f,1,0,a);}this.b=a;}
function ps(a){Fx(this,a);this.f.dd('100%');}
function bs(){}
_=bs.prototype=new qx();_.jc=hs;_.mc=is;_.nc=js;_.oc=ks;_.pc=ls;_.qc=ms;_.Cc=ns;_.cd=os;_.dd=ps;_.tN=AN+'DialogBox';_.tI=69;_.b=null;_.c=0;_.d=0;_.e=false;function pu(a){a.e=fu(new au());}
function qu(a){pu(a);a.d=mk();a.a=jk();bk(a.d,a.a);a.Ec(a.d);mB(a,1);return a;}
function ru(c,a){var b;b=xs(c);if(a>=b||a<0){throw yE(new wE(),'Row index: '+a+', Row size: '+b);}}
function su(e,c,b,a){var d;d=wt(e.b,c,b);yu(e,d,a);return d;}
function uu(c,b,a){return b.rows[a].cells.length;}
function vu(a){return wu(a,a.a);}
function wu(b,a){return a.rows.length;}
function xu(b,a){var c;if(a!=xs(b)){ru(b,a);}c=lk();nl(b.a,c,a);return a;}
function yu(d,c,a){var b,e;b=il(c);e=null;if(b!==null){e=hu(d.e,b);}if(e!==null){zu(d,e);return true;}else{if(a){Bl(c,'');}return false;}}
function zu(b,c){var a;if(c.p!==b){return false;}lx(b,c);a=c.jb();rl(kl(a),a);ku(b.e,a);return true;}
function Au(a,b){zl(a.d,'border',''+b);}
function Bu(b,a){b.b=a;}
function Cu(b,a){yl(b.d,'cellPadding',a);}
function Du(b,a){yl(b.d,'cellSpacing',a);}
function Eu(b,a){b.c=a;Ft(b.c);}
function Fu(d,b,a,e){var c;zs(d,b,a);if(e!==null){tC(e);c=su(d,b,a,true);iu(d.e,e);bk(c,e.jb());jx(d,e);}}
function av(){return lu(this.e);}
function bv(a){switch(Dk(a)){case 1:{break;}default:}}
function cv(a){return zu(this,a);}
function jt(){}
_=jt.prototype=new ix();_.yb=av;_.cc=bv;_.Cc=cv;_.tN=AN+'HTMLTable';_.tI=70;_.a=null;_.b=null;_.c=null;_.d=null;function us(a){qu(a);Bu(a,ss(new rs(),a));Eu(a,Dt(new Ct(),a));return a;}
function ws(b,a){ru(b,a);return uu(b,b.a,a);}
function xs(a){return vu(a);}
function ys(b,a){return xu(b,a);}
function zs(e,d,b){var a,c;As(e,d);if(b<0){throw yE(new wE(),'Cannot create a column with a negative index: '+b);}a=ws(e,d);c=b+1-a;if(c>0){Bs(e.a,d,c);}}
function As(d,b){var a,c;if(b<0){throw yE(new wE(),'Cannot create a row with a negative index: '+b);}c=xs(d);for(a=c;a<=b;a++){ys(d,a);}}
function Bs(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function qs(){}
_=qs.prototype=new jt();_.tN=AN+'FlexTable';_.tI=71;function tt(b,a){b.a=a;return b;}
function vt(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function wt(c,b,a){return vt(c,c.a.a,b,a);}
function xt(d,c,a,b,e){zt(d,c,a,b);At(d,c,a,e);}
function yt(e,d,a,c){var b;zs(e.a,d,a);b=vt(e,e.a.a,d,a);zl(b,'height',c);}
function zt(e,d,b,a){var c;zs(e.a,d,b);c=vt(e,e.a.a,d,b);zl(c,'align',a.a);}
function At(d,c,b,a){zs(d.a,c,b);Dl(vt(d,d.a.a,c,b),'verticalAlign',a.a);}
function Bt(c,b,a,d){zs(c.a,b,a);zl(vt(c,c.a.a,b,a),'width',d);}
function st(){}
_=st.prototype=new yF();_.tN=AN+'HTMLTable$CellFormatter';_.tI=72;function ss(b,a){tt(b,a);return b;}
function rs(){}
_=rs.prototype=new st();_.tN=AN+'FlexTable$FlexCellFormatter';_.tI=73;function Ds(a){er(a);a.Ec(ek());return a;}
function Es(a,b){fr(a,b,a.jb());}
function at(b,c,a){mr(b,c,b.jb(),a,true);}
function Cs(){}
_=Cs.prototype=new cr();_.tN=AN+'FlowPanel';_.tI=74;function uw(a){a.Ec(ek());mB(a,131197);lB(a,'gwt-Label');return a;}
function vw(b,a){uw(b);Bw(b,a);return b;}
function ww(b,a){if(b.b===null){b.b=Eq(new Dq());}EJ(b.b,a);}
function xw(b,a){if(b.c===null){b.c=Fw(new Ew());}EJ(b.c,a);}
function zw(a){return jl(a.jb());}
function Aw(b,a){switch(Dk(a)){case 1:if(b.b!==null){ar(b.b,b);}break;case 4:case 8:case 64:case 16:case 32:if(b.c!==null){dx(b.c,b,a);}break;case 131072:break;}}
function Bw(b,a){Cl(b.jb(),a);}
function Cw(a,b){Dl(a.jb(),'whiteSpace',b?'normal':'nowrap');}
function Dw(a){Aw(this,a);}
function tw(){}
_=tw.prototype=new bC();_.cc=Dw;_.tN=AN+'Label';_.tI=75;_.b=null;_.c=null;function dv(a){uw(a);a.Ec(ek());mB(a,125);lB(a,'gwt-HTML');return a;}
function ev(b,a){dv(b);hv(b,a);return b;}
function fv(b,a,c){ev(b,a);Cw(b,c);return b;}
function hv(b,a){Bl(b.jb(),a);}
function it(){}
_=it.prototype=new tw();_.tN=AN+'HTML';_.tI=76;function lt(a){{ot(a);}}
function mt(b,a){b.b=a;lt(b);return b;}
function ot(a){while(++a.a<a.b.b.b){if(dK(a.b.b,a.a)!==null){return;}}}
function pt(a){return a.a<a.b.b.b;}
function qt(){return pt(this);}
function rt(){var a;if(!pt(this)){throw nN(new mN());}a=dK(this.b.b,this.a);ot(this);return a;}
function kt(){}
_=kt.prototype=new yF();_.wb=qt;_.Eb=rt;_.tN=AN+'HTMLTable$1';_.tI=77;_.a=(-1);function Dt(b,a){b.b=a;return b;}
function Ft(a){if(a.a===null){a.a=fk('colgroup');nl(a.b.d,a.a,0);bk(a.a,fk('col'));}}
function Ct(){}
_=Ct.prototype=new yF();_.tN=AN+'HTMLTable$ColumnFormatter';_.tI=78;_.a=null;function eu(a){a.b=CJ(new AJ());}
function fu(a){eu(a);return a;}
function hu(c,a){var b;b=nu(a);if(b<0){return null;}return oi(dK(c.b,b),14);}
function iu(b,c){var a;if(b.a===null){a=b.b.b;EJ(b.b,c);}else{a=b.a.a;jK(b.b,a,c);b.a=b.a.b;}ou(c.jb(),a);}
function ju(c,a,b){mu(a);jK(c.b,b,null);c.a=cu(new bu(),b,c.a);}
function ku(c,a){var b;b=nu(a);ju(c,a,b);}
function lu(a){return mt(new kt(),a);}
function mu(a){a['__widgetID']=null;}
function nu(a){var b=a['__widgetID'];return b==null?-1:b;}
function ou(a,b){a['__widgetID']=b;}
function au(){}
_=au.prototype=new yF();_.tN=AN+'HTMLTable$WidgetMapper';_.tI=79;_.a=null;function cu(c,a,b){c.a=a;c.b=b;return c;}
function bu(){}
_=bu.prototype=new yF();_.tN=AN+'HTMLTable$WidgetMapper$FreeNode';_.tI=80;_.a=0;_.b=null;function ov(){ov=rN;pv=mv(new lv(),'center');qv=mv(new lv(),'left');mv(new lv(),'right');}
var pv,qv;function mv(b,a){b.a=a;return b;}
function lv(){}
_=lv.prototype=new yF();_.tN=AN+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=81;_.a=null;function wv(){wv=rN;xv=uv(new tv(),'bottom');yv=uv(new tv(),'middle');zv=uv(new tv(),'top');}
var xv,yv,zv;function uv(a,b){a.a=b;return a;}
function tv(){}
_=tv.prototype=new yF();_.tN=AN+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=82;_.a=null;function Dv(a){a.a=(ov(),qv);a.c=(wv(),zv);}
function Ev(a){oq(a);Dv(a);a.b=lk();bk(a.d,a.b);zl(a.e,'cellSpacing','0');zl(a.e,'cellPadding','0');return a;}
function Fv(b,c){var a;a=bw(b);bk(b.b,a);fr(b,c,a);}
function bw(b){var a;a=kk();rq(b,a,b.a);sq(b,a,b.c);return a;}
function cw(c,d,a){var b;ir(c,a);b=bw(c);nl(c.b,b,a);mr(c,d,b,a,false);}
function dw(c,d){var a,b;b=kl(d.jb());a=or(c,d);if(a){rl(c.b,b);}return a;}
function ew(b,a){b.c=a;}
function fw(a){return dw(this,a);}
function Cv(){}
_=Cv.prototype=new nq();_.Cc=fw;_.tN=AN+'HorizontalPanel';_.tI=83;_.b=null;function hw(a){a.Ec(ek());bk(a.jb(),a.a=dk());mB(a,1);lB(a,'gwt-Hyperlink');return a;}
function iw(c,b,a){hw(c);nw(c,b);mw(c,a);return c;}
function jw(b,a){if(b.b===null){b.b=Eq(new Dq());}EJ(b.b,a);}
function lw(a){return jl(a.a);}
function mw(b,a){b.c=a;zl(b.a,'href','#'+a);}
function nw(b,a){Cl(b.a,a);}
function ow(a){if(Dk(a)==1){if(this.b!==null){ar(this.b,this);}ym(this.c);Ek(a);}}
function gw(){}
_=gw.prototype=new bC();_.cc=ow;_.tN=AN+'Hyperlink';_.tI=84;_.a=null;_.b=null;_.c=null;function sw(a){return (Ak(a)?1:0)|(zk(a)?8:0)|(wk(a)?2:0)|(sk(a)?4:0);}
function Fw(a){CJ(a);return a;}
function bx(d,c,e,f){var a,b;for(a=gI(d);BH(a);){b=oi(CH(a),23);b.mc(c,e,f);}}
function cx(d,c){var a,b;for(a=gI(d);BH(a);){b=oi(CH(a),23);b.nc(c);}}
function dx(e,c,a){var b,d,f,g,h;d=c.jb();g=uk(a)-al(d)+fl(d,'scrollLeft')+zn();h=vk(a)-bl(d)+fl(d,'scrollTop')+An();switch(Dk(a)){case 4:bx(e,c,g,h);break;case 8:gx(e,c,g,h);break;case 64:fx(e,c,g,h);break;case 16:b=xk(a);if(!ol(d,b)){cx(e,c);}break;case 32:f=Ck(a);if(!ol(d,f)){ex(e,c);}break;}}
function ex(d,c){var a,b;for(a=gI(d);BH(a);){b=oi(CH(a),23);b.oc(c);}}
function fx(d,c,e,f){var a,b;for(a=gI(d);BH(a);){b=oi(CH(a),23);b.pc(c,e,f);}}
function gx(d,c,e,f){var a,b;for(a=gI(d);BH(a);){b=oi(CH(a),23);b.qc(c,e,f);}}
function Ew(){}
_=Ew.prototype=new AJ();_.tN=AN+'MouseListenerCollection';_.tI=85;function py(){py=rN;iD(),kD;}
function ny(b,a){iD(),kD;vq(b,gk(a));lB(b,'gwt-RadioButton');return b;}
function oy(c,b,a){iD(),kD;ny(c,b);zq(c,a);return c;}
function my(){}
_=my.prototype=new uq();_.tN=AN+'RadioButton';_.tI=86;function wy(){wy=rN;By=dM(new hL());}
function vy(b,a){wy();cq(b);if(a===null){a=xy();}b.Ec(a);b.ac();return b;}
function yy(){wy();return zy(null);}
function zy(c){wy();var a,b;b=oi(jM(By,c),24);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=dl(c))){return null;}}if(By.c==0){Ay();}kM(By,c,b=vy(new qy(),a));return b;}
function xy(){wy();return $doc.body;}
function Ay(){wy();pn(new ry());}
function qy(){}
_=qy.prototype=new bq();_.tN=AN+'RootPanel';_.tI=87;var By;function ty(){var a,b;for(b=aJ(oJ((wy(),By)));hJ(b);){a=oi(iJ(b),24);if(a.xb()){a.ec();}}}
function uy(){return null;}
function ry(){}
_=ry.prototype=new yF();_.xc=ty;_.yc=uy;_.tN=AN+'RootPanel$1';_.tI=88;function Ey(a){a.a=a.b.n!==null;}
function Fy(b,a){b.b=a;Ey(b);return b;}
function bz(){return this.a;}
function cz(){if(!this.a||this.b.n===null){throw nN(new mN());}this.a=false;return this.b.n;}
function Dy(){}
_=Dy.prototype=new yF();_.wb=bz;_.Eb=cz;_.tN=AN+'SimplePanel$1';_.tI=89;function vz(a){a.a=Ev(new Cv());}
function wz(c){var a,b;vz(c);tr(c,c.a);mB(c,1);lB(c,'gwt-TabBar');ew(c.a,(wv(),xv));a=fv(new it(),'&nbsp;',true);b=fv(new it(),'&nbsp;',true);lB(a,'gwt-TabBarFirst');lB(b,'gwt-TabBarRest');a.Fc('100%');b.Fc('100%');Fv(c.a,a);Fv(c.a,b);a.Fc('100%');qq(c.a,a,'100%');tq(c.a,b,'100%');return c;}
function xz(b,a){if(b.c===null){b.c=cA(new bA());}EJ(b.c,a);}
function yz(b,a){if(a<0||a>Bz(b)){throw xE(new wE());}}
function zz(b,a){if(a<(-1)||a>=Bz(b)){throw xE(new wE());}}
function Bz(a){return a.a.f.b-2;}
function Cz(e,d,a,b){var c;yz(e,b);if(a){c=ev(new it(),d);}else{c=vw(new tw(),d);}Cw(c,false);ww(c,e);lB(c,'gwt-TabBarItem');cw(e.a,c,b+1);}
function Dz(b,a){var c;zz(b,a);c=lr(b.a,a+1);if(c===b.b){b.b=null;}dw(b.a,c);}
function Ez(b,a){zz(b,a);if(b.c!==null){if(!eA(b.c,b,a)){return false;}}Fz(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=lr(b.a,a+1);Fz(b,b.b,true);if(b.c!==null){fA(b.c,b,a);}return true;}
function Fz(c,a,b){if(a!==null){if(b){bB(a,'gwt-TabBarItem-selected');}else{hB(a,'gwt-TabBarItem-selected');}}}
function aA(b){var a;for(a=1;a<this.a.f.b-1;++a){if(lr(this.a,a)===b){Ez(this,a-1);return;}}}
function uz(){}
_=uz.prototype=new rr();_.dc=aA;_.tN=AN+'TabBar';_.tI=90;_.b=null;_.c=null;function cA(a){CJ(a);return a;}
function eA(e,c,d){var a,b;for(a=gI(e);BH(a);){b=oi(CH(a),25);if(!b.bc(c,d)){return false;}}return true;}
function fA(e,c,d){var a,b;for(a=gI(e);BH(a);){b=oi(CH(a),25);b.vc(c,d);}}
function bA(){}
_=bA.prototype=new AJ();_.tN=AN+'TabListenerCollection';_.tI=91;function tA(a){a.b=pA(new oA());a.a=jA(new iA(),a.b);}
function uA(b){var a;tA(b);a=BB(new zB());CB(a,b.b);CB(a,b.a);qq(a,b.a,'100%');b.b.dd('100%');xz(b.b,b);tr(b,a);lB(b,'gwt-TabPanel');lB(b.a,'gwt-TabPanelBottom');return b;}
function wA(b,c,a){zA(b,c,a,b.a.f.b);}
function vA(b,a){if(b.c===null){b.c=cA(new bA());}EJ(b.c,a);}
function yA(b,a){return lr(b.a,a);}
function AA(d,e,c,a,b){lA(d.a,e,c,a,b);}
function zA(c,d,b,a){AA(c,d,b,false,a);}
function BA(b,a){Ez(b.b,a);}
function CA(){return nr(this.a);}
function DA(a,b){if(this.c!==null){return eA(this.c,this,b);}return true;}
function EA(a,b){Fr(this.a,b);if(this.c!==null){fA(this.c,this,b);}}
function FA(a){return mA(this.a,a);}
function hA(){}
_=hA.prototype=new rr();_.yb=CA;_.bc=DA;_.vc=EA;_.Cc=FA;_.tN=AN+'TabPanel';_.tI=92;_.c=null;function jA(b,a){zr(b);b.a=a;return b;}
function lA(e,f,d,a,b){var c;c=kr(e,f);if(c!=(-1)){mA(e,f);if(c<b){b--;}}rA(e.a,d,a,b);Cr(e,f,b);}
function mA(b,c){var a;a=kr(b,c);if(a!=(-1)){sA(b.a,a);return Dr(b,c);}return false;}
function nA(a){return mA(this,a);}
function iA(){}
_=iA.prototype=new yr();_.Cc=nA;_.tN=AN+'TabPanel$TabbedDeckPanel';_.tI=93;_.a=null;function pA(a){wz(a);return a;}
function rA(d,c,a,b){Cz(d,c,a,b);}
function sA(b,a){Dz(b,a);}
function oA(){}
_=oA.prototype=new uz();_.tN=AN+'TabPanel$UnmodifiableTabBar';_.tI=94;function AB(a){a.a=(ov(),qv);a.b=(wv(),zv);}
function BB(a){oq(a);AB(a);zl(a.e,'cellSpacing','0');zl(a.e,'cellPadding','0');return a;}
function CB(b,d){var a,c;c=lk();a=EB(b);bk(c,a);bk(b.d,c);fr(b,d,a);}
function EB(b){var a;a=kk();rq(b,a,b.a);sq(b,a,b.b);return a;}
function FB(c,e,a){var b,d;ir(c,a);d=lk();b=EB(c);bk(d,b);nl(c.d,d,a);mr(c,e,b,a,false);}
function aC(c){var a,b;b=kl(c.jb());a=or(this,c);if(a){rl(this.d,kl(b));}return a;}
function zB(){}
_=zB.prototype=new nq();_.Cc=aC;_.tN=AN+'VerticalPanel';_.tI=95;function iC(b,a){b.a=ii('[Lcom.google.gwt.user.client.ui.Widget;',[172],[14],[4],null);return b;}
function jC(a,b){nC(a,b,a.b);}
function lC(b,a){if(a<0||a>=b.b){throw xE(new wE());}return b.a[a];}
function mC(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function nC(d,e,a){var b,c;if(a<0||a>d.b){throw xE(new wE());}if(d.b==d.a.a){c=ii('[Lcom.google.gwt.user.client.ui.Widget;',[172],[14],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ki(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ki(d.a,b,d.a[b-1]);}ki(d.a,a,e);}
function oC(a){return eC(new dC(),a);}
function pC(c,b){var a;if(b<0||b>=c.b){throw xE(new wE());}--c.b;for(a=b;a<c.b;++a){ki(c.a,a,c.a[a+1]);}ki(c.a,c.b,null);}
function qC(b,c){var a;a=mC(b,c);if(a==(-1)){throw nN(new mN());}pC(b,a);}
function cC(){}
_=cC.prototype=new yF();_.tN=AN+'WidgetCollection';_.tI=96;_.a=null;_.b=0;function eC(b,a){b.b=a;return b;}
function gC(){return this.a<this.b.b-1;}
function hC(){if(this.a>=this.b.b){throw nN(new mN());}return this.b.a[++this.a];}
function dC(){}
_=dC.prototype=new yF();_.wb=gC;_.Eb=hC;_.tN=AN+'WidgetCollection$WidgetIterator';_.tI=97;_.a=(-1);function iD(){iD=rN;jD=cD(new aD());kD=jD!==null?hD(new FC()):jD;}
function hD(a){iD();return a;}
function FC(){}
_=FC.prototype=new yF();_.tN=BN+'FocusImpl';_.tI=98;var jD,kD;function dD(){dD=rN;iD();}
function bD(a){eD(a);fD(a);gD(a);}
function cD(a){dD();hD(a);bD(a);return a;}
function eD(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function fD(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function gD(a){return function(){this.firstChild.focus();};}
function aD(){}
_=aD.prototype=new FC();_.tN=BN+'FocusImplOld';_.tI=99;function nD(a){return ek();}
function lD(){}
_=lD.prototype=new yF();_.tN=BN+'PopupImpl';_.tI=100;function rD(){}
_=rD.prototype=new yF();_.tN=CN+'OutputStream';_.tI=101;function pD(){}
_=pD.prototype=new rD();_.tN=CN+'FilterOutputStream';_.tI=102;function tD(){}
_=tD.prototype=new pD();_.tN=CN+'PrintStream';_.tI=103;function xD(){xD=rN;aG();}
function wD(a){xD();EF(a);return a;}
function vD(){}
_=vD.prototype=new DF();_.tN=DN+'ArrayStoreException';_.tI=104;function AD(){AD=rN;BD=zD(new yD(),false);CD=zD(new yD(),true);}
function zD(a,b){AD();a.a=b;return a;}
function DD(a){return pi(a,30)&&oi(a,30).a==this.a;}
function ED(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function FD(){return this.a?'true':'false';}
function aE(a){AD();return a?CD:BD;}
function yD(){}
_=yD.prototype=new yF();_.eQ=DD;_.hC=ED;_.tS=FD;_.tN=DN+'Boolean';_.tI=105;_.a=false;var BD,CD;function eE(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+gF(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function iE(){iE=rN;aG();}
function gE(a){iE();EF(a);return a;}
function hE(b,a){iE();FF(b,a);return b;}
function fE(){}
_=fE.prototype=new DF();_.tN=DN+'ClassCastException';_.tI=106;function rE(){rE=rN;aG();}
function qE(b,a){rE();FF(b,a);return b;}
function pE(){}
_=pE.prototype=new DF();_.tN=DN+'IllegalArgumentException';_.tI=107;function vE(){vE=rN;aG();}
function tE(a){vE();EF(a);return a;}
function uE(b,a){vE();FF(b,a);return b;}
function sE(){}
_=sE.prototype=new DF();_.tN=DN+'IllegalStateException';_.tI=108;function zE(){zE=rN;aG();}
function xE(a){zE();EF(a);return a;}
function yE(b,a){zE();FF(b,a);return b;}
function wE(){}
_=wE.prototype=new DF();_.tN=DN+'IndexOutOfBoundsException';_.tI=109;function sF(){sF=rN;{xF();}}
function tF(a){sF();return isNaN(a);}
function uF(e,d,c,h){sF();var a,b,f,g;if(e===null){throw qF(new pF(),'Unable to parse null');}b=sG(e);f=b>0&&lG(e,0)==45?1:0;for(a=f;a<b;a++){if(eE(lG(e,a),d)==(-1)){throw qF(new pF(),'Could not parse '+e+' in radix '+d);}}g=vF(e,d);if(tF(g)){throw qF(new pF(),'Unable to parse '+e);}else if(g<c||g>h){throw qF(new pF(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function vF(b,a){sF();return parseInt(b,a);}
function xF(){sF();wF=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var wF=null;function BE(){BE=rN;sF();}
function EE(a){BE();return FE(a,10);}
function FE(b,a){BE();return ri(uF(b,a,(-2147483648),2147483647));}
function aF(a){BE();return EG(a);}
var CE=2147483647,DE=(-2147483648);function dF(a){return a<0?-a:a;}
function eF(a){return a<0?-a:a;}
function fF(a,b){return a>b?a:b;}
function gF(a,b){return a<b?a:b;}
function hF(a){return Math.sqrt(a);}
function kF(){kF=rN;aG();}
function jF(a){kF();EF(a);return a;}
function iF(){}
_=iF.prototype=new DF();_.tN=DN+'NegativeArraySizeException';_.tI=110;function nF(){nF=rN;aG();}
function mF(b,a){nF();FF(b,a);return b;}
function lF(){}
_=lF.prototype=new DF();_.tN=DN+'NullPointerException';_.tI=111;function rF(){rF=rN;rE();}
function qF(b,a){rF();qE(b,a);return b;}
function pF(){}
_=pF.prototype=new pE();_.tN=DN+'NumberFormatException';_.tI=112;function lG(b,a){return b.charCodeAt(a);}
function nG(f,c){var a,b,d,e,g,h;h=sG(f);e=sG(c);b=gF(h,e);for(a=0;a<b;a++){g=lG(f,a);d=lG(c,a);if(g!=d){return g-d;}}return h-e;}
function oG(b,a){if(!pi(a,1))return false;return xG(b,a);}
function pG(b,a){return b.indexOf(a);}
function qG(c,b,a){return c.indexOf(b,a);}
function rG(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function sG(a){return a.length;}
function tG(c,a,b){b=yG(b);return c.replace(RegExp(a,'g'),b);}
function uG(b,a){return b.substr(a,b.length-a);}
function vG(c,a,b){return c.substr(a,b-a);}
function wG(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function xG(a,b){return String(a)==b;}
function yG(b){var a;a=0;while(0<=(a=qG(b,'\\',a))){if(lG(b,a+1)==36){b=vG(b,0,a)+'$'+uG(b,++a);}else{b=vG(b,0,a)+uG(b,++a);}}return b;}
function zG(a){if(pi(a,1)){return nG(this,oi(a,1));}else{throw hE(new fE(),'Cannot compare '+a+" with String '"+this+"'");}}
function AG(a){return oG(this,a);}
function CG(){var a=BG;if(!a){a=BG={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function DG(){return this;}
function EG(a){return ''+a;}
function FG(a){return a!==null?a.tS():'null';}
_=String.prototype;_.v=zG;_.eQ=AG;_.hC=CG;_.tS=DG;_.tN=DN+'String';_.tI=2;var BG=null;function dG(a){fG(a);return a;}
function eG(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function fG(a){gG(a,'');}
function gG(b,a){b.js=[a];b.length=a.length;}
function iG(a){a.Fb();return a.js[0];}
function jG(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function kG(){return iG(this);}
function cG(){}
_=cG.prototype=new yF();_.Fb=jG;_.tS=kG;_.tN=DN+'StringBuffer';_.tI=113;function bH(){bH=rN;dH=new tD();}
function cH(){bH();return new Date().getTime();}
function eH(a){bH();return nh(a);}
var dH;function qH(){qH=rN;aG();}
function oH(a){qH();EF(a);return a;}
function pH(b,a){qH();FF(b,a);return b;}
function nH(){}
_=nH.prototype=new DF();_.tN=DN+'UnsupportedOperationException';_.tI=114;function zH(b,a){b.c=a;return b;}
function BH(a){return a.a<a.c.ed();}
function CH(a){if(!BH(a)){throw nN(new mN());}return a.c.ub(a.b=a.a++);}
function DH(a){if(a.b<0){throw tE(new sE());}a.c.Bc(a.b);a.a=a.b;a.b=(-1);}
function EH(){return BH(this);}
function FH(){return CH(this);}
function aI(){DH(this);}
function yH(){}
_=yH.prototype=new yF();_.wb=EH;_.Eb=FH;_.Ac=aI;_.tN=EN+'AbstractList$IteratorImpl';_.tI=115;_.a=0;_.b=(-1);function cI(b,a){zH(b,a);return b;}
function bI(){}
_=bI.prototype=new yH();_.tN=EN+'AbstractList$ListIteratorImpl';_.tI=116;function mJ(f,d,e){var a,b,c;for(b=EL(f.ab());wL(b);){a=xL(b);c=a.mb();if(d===null?c===null:d.eQ(c)){if(e){yL(b);}return a;}}return null;}
function nJ(b){var a;a=b.ab();return qI(new pI(),b,a);}
function oJ(b){var a;a=iM(b);return EI(new DI(),b,a);}
function pJ(a){return mJ(this,a,false)!==null;}
function qJ(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!pi(d,32)){return false;}f=oi(d,32);c=nJ(this);e=f.zb();if(!xJ(c,e)){return false;}for(a=sI(c);zI(a);){b=AI(a);h=this.vb(b);g=f.vb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function rJ(b){var a;a=mJ(this,b,false);return a===null?null:a.sb();}
function sJ(){var a,b,c;b=0;for(c=EL(this.ab());wL(c);){a=xL(c);b+=a.hC();}return b;}
function tJ(){return nJ(this);}
function uJ(){var a,b,c,d;d='{';a=false;for(c=EL(this.ab());wL(c);){b=xL(c);if(a){d+=', ';}else{a=true;}d+=FG(b.mb());d+='=';d+=FG(b.sb());}return d+'}';}
function oI(){}
_=oI.prototype=new yF();_.z=pJ;_.eQ=qJ;_.vb=rJ;_.hC=sJ;_.zb=tJ;_.tS=uJ;_.tN=EN+'AbstractMap';_.tI=117;function xJ(e,b){var a,c,d;if(b===e){return true;}if(!pi(b,33)){return false;}c=oi(b,33);if(c.ed()!=e.ed()){return false;}for(a=c.yb();a.wb();){d=a.Eb();if(!e.A(d)){return false;}}return true;}
function yJ(a){return xJ(this,a);}
function zJ(){var a,b,c;a=0;for(b=this.yb();b.wb();){c=b.Eb();if(c!==null){a+=c.hC();}}return a;}
function vJ(){}
_=vJ.prototype=new rH();_.eQ=yJ;_.hC=zJ;_.tN=EN+'AbstractSet';_.tI=118;function qI(b,a,c){b.a=a;b.b=c;return b;}
function sI(b){var a;a=EL(b.b);return xI(new wI(),b,a);}
function tI(a){return this.a.z(a);}
function uI(){return sI(this);}
function vI(){return this.b.a.c;}
function pI(){}
_=pI.prototype=new vJ();_.A=tI;_.yb=uI;_.ed=vI;_.tN=EN+'AbstractMap$1';_.tI=119;function xI(b,a,c){b.a=c;return b;}
function zI(a){return a.a.wb();}
function AI(b){var a;a=b.a.Eb();return a.mb();}
function BI(){return zI(this);}
function CI(){return AI(this);}
function wI(){}
_=wI.prototype=new yF();_.wb=BI;_.Eb=CI;_.tN=EN+'AbstractMap$2';_.tI=120;function EI(b,a,c){b.a=a;b.b=c;return b;}
function aJ(b){var a;a=EL(b.b);return fJ(new eJ(),b,a);}
function bJ(a){return hM(this.a,a);}
function cJ(){return aJ(this);}
function dJ(){return this.b.a.c;}
function DI(){}
_=DI.prototype=new rH();_.A=bJ;_.yb=cJ;_.ed=dJ;_.tN=EN+'AbstractMap$3';_.tI=121;function fJ(b,a,c){b.a=c;return b;}
function hJ(a){return a.a.wb();}
function iJ(a){var b;b=a.a.Eb().sb();return b;}
function jJ(){return hJ(this);}
function kJ(){return iJ(this);}
function eJ(){}
_=eJ.prototype=new yF();_.wb=jJ;_.Eb=kJ;_.tN=EN+'AbstractMap$4';_.tI=122;function yK(b){var a,c;a=CJ(new AJ());for(c=0;c<b.a;c++){EJ(a,b[c]);}return a;}
function zK(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.w(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function AK(a){zK(a,a.a,(bL(),cL));}
function bL(){bL=rN;cL=new EK();}
var cL;function aL(a,b){return oi(a,38).v(b);}
function EK(){}
_=EK.prototype=new yF();_.w=aL;_.tN=EN+'Comparators$1';_.tI=123;function fM(){fM=rN;mM=sM();}
function cM(a){{eM(a);}}
function dM(a){fM();cM(a);return a;}
function eM(a){a.a=xh();a.d=yh();a.b=wi(mM,th);a.c=0;}
function gM(b,a){if(pi(a,1)){return wM(b.d,oi(a,1))!==mM;}else if(a===null){return b.b!==mM;}else{return vM(b.a,a,a.hC())!==mM;}}
function hM(a,b){if(a.b!==mM&&uM(a.b,b)){return true;}else if(rM(a.d,b)){return true;}else if(pM(a.a,b)){return true;}return false;}
function iM(a){return BL(new sL(),a);}
function jM(c,a){var b;if(pi(a,1)){b=wM(c.d,oi(a,1));}else if(a===null){b=c.b;}else{b=vM(c.a,a,a.hC());}return b===mM?null:b;}
function kM(c,a,d){var b;if(pi(a,1)){b=zM(c.d,oi(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=yM(c.a,a,d,a.hC());}if(b===mM){++c.c;return null;}else{return b;}}
function lM(c,a){var b;if(pi(a,1)){b=BM(c.d,oi(a,1));}else if(a===null){b=c.b;c.b=wi(mM,th);}else{b=AM(c.a,a,a.hC());}if(b===mM){return null;}else{--c.c;return b;}}
function nM(e,c){fM();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function oM(d,a){fM();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=lL(c.substring(1),e);a.s(b);}}}
function pM(f,h){fM();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.sb();if(uM(h,d)){return true;}}}}return false;}
function qM(a){return gM(this,a);}
function rM(c,d){fM();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(uM(d,a)){return true;}}}return false;}
function sM(){fM();}
function tM(){return iM(this);}
function uM(a,b){fM();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function xM(a){return jM(this,a);}
function vM(f,h,e){fM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(uM(h,d)){return c.sb();}}}}
function wM(b,a){fM();return b[':'+a];}
function yM(f,h,j,e){fM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(uM(h,d)){var i=c.sb();c.ad(j);return i;}}}else{a=f[e]=[];}var c=lL(h,j);a.push(c);}
function zM(c,a,d){fM();a=':'+a;var b=c[a];c[a]=d;return b;}
function AM(f,h,e){fM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(uM(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.sb();}}}}
function BM(c,a){fM();a=':'+a;var b=c[a];delete c[a];return b;}
function hL(){}
_=hL.prototype=new oI();_.z=qM;_.ab=tM;_.vb=xM;_.tN=EN+'HashMap';_.tI=124;_.a=null;_.b=null;_.c=0;_.d=null;var mM;function jL(b,a,c){b.a=a;b.b=c;return b;}
function lL(a,b){return jL(new iL(),a,b);}
function mL(b){var a;if(pi(b,39)){a=oi(b,39);if(uM(this.a,a.mb())&&uM(this.b,a.sb())){return true;}}return false;}
function nL(){return this.a;}
function oL(){return this.b;}
function pL(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function qL(a){var b;b=this.b;this.b=a;return b;}
function rL(){return this.a+'='+this.b;}
function iL(){}
_=iL.prototype=new yF();_.eQ=mL;_.mb=nL;_.sb=oL;_.hC=pL;_.ad=qL;_.tS=rL;_.tN=EN+'HashMap$EntryImpl';_.tI=125;_.a=null;_.b=null;function BL(b,a){b.a=a;return b;}
function DL(d,c){var a,b,e;if(pi(c,39)){a=oi(c,39);b=a.mb();if(gM(d.a,b)){e=jM(d.a,b);return uM(a.sb(),e);}}return false;}
function EL(a){return uL(new tL(),a.a);}
function FL(a){return DL(this,a);}
function aM(){return EL(this);}
function bM(){return this.a.c;}
function sL(){}
_=sL.prototype=new vJ();_.A=FL;_.yb=aM;_.ed=bM;_.tN=EN+'HashMap$EntrySet';_.tI=126;function uL(c,b){var a;c.c=b;a=CJ(new AJ());if(c.c.b!==(fM(),mM)){EJ(a,jL(new iL(),null,c.c.b));}oM(c.c.d,a);nM(c.c.a,a);c.a=gI(a);return c;}
function wL(a){return BH(a.a);}
function xL(a){return a.b=oi(CH(a.a),39);}
function yL(a){if(a.b===null){throw uE(new sE(),'Must call next() before remove().');}else{DH(a.a);lM(a.c,a.b.mb());a.b=null;}}
function zL(){return wL(this);}
function AL(){return xL(this);}
function tL(){}
_=tL.prototype=new yF();_.wb=zL;_.Eb=AL;_.tN=EN+'HashMap$EntrySetIterator';_.tI=127;_.a=null;_.b=null;function DM(a){a.a=dM(new hL());return a;}
function EM(c,a){var b;b=kM(c.a,a,aE(true));return b===null;}
function aN(a){return sI(nJ(a.a));}
function bN(b,a){return lM(b.a,a)!==null;}
function cN(a){return EM(this,a);}
function dN(a){return gM(this.a,a);}
function eN(){return aN(this);}
function fN(){return this.a.c;}
function gN(){return nJ(this.a).tS();}
function CM(){}
_=CM.prototype=new vJ();_.s=cN;_.A=dN;_.yb=eN;_.ed=fN;_.tS=gN;_.tN=EN+'HashSet';_.tI=128;_.a=null;function oN(){oN=rN;aG();}
function nN(a){oN();EF(a);return a;}
function mN(){}
_=mN.prototype=new DF();_.tN=EN+'NoSuchElementException';_.tI=129;function gO(){}
_=gO.prototype=new yF();_.tN=FN+'BezierCurve';_.tI=130;function mO(a){{rO(a);}}
function nO(a){mO(a);return a;}
function qO(i,d,e,a,b){var c,f,g,h,j;h=qQ(new pQ(),gF(d.a,e.a),gF(d.b,e.b));j=dF(d.a-e.a);c=dF(d.b-e.b);g=fF(j,c);g=fF(g,dF(d.a-a.a));g=fF(g,dF(d.b-a.b));g=fF(g,dF(e.a-b.a));g=fF(g,dF(e.b-b.b));f=qQ(new pQ(),h.a-g,h.b-g);Dl(i.a,'left',aF(f.a));Dl(i.a,'top',aF(f.b));wl(i.a,'width',aF(j+g*2));wl(i.a,'height',aF(c+g*2));Dl(i.a,'width',aF(j+g*2));Dl(i.a,'height',aF(c+g*2));pO(i,tQ(d,vQ(f)),tQ(e,vQ(f)),tQ(a,vQ(f)),tQ(b,vQ(f)),sO(i.a,'color'));}
function pO(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function rO(b){var a;b.a=fk('canvas');a=cl(b.a,'class');wl(b.a,'class',a+' gwt-diagrams-canvas');}
function sO(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function hO(){}
_=hO.prototype=new gO();_.tN=FN+'BezierCurveCanvas';_.tI=131;_.a=null;function jO(a){nO(a);return a;}
function lO(f,c,d,a,b){var e;e=kl(f.a);if(e!==null){rl(e,f.a);rO(f);bk(e,f.a);}qO(f,c,d,a,b);}
function iO(){}
_=iO.prototype=new hO();_.tN=FN+'BezierCurveCanvasOpera';_.tI=132;function vO(a){a.c=CJ(new AJ());}
function wO(c,d){var a,b;vO(c);DJ(c.c,d);CO(c,c.B());for(b=gI(c.c);BH(b);){a=oi(CH(b),35);a.x(c);}return c;}
function xO(a,b){wO(a,yK(b));return a;}
function zO(a){return a.b.u(a.c);}
function AO(c,a){var b;b=eK(c.c,a);if(b>(-1)){iK(c.c,a);AQ(a,c);}}
function BO(c){var a,b;for(b=hI(c.c);b.wb();){a=oi(b.Eb(),35);b.Ac();a.D(c);}tC(c);}
function CO(b,a){b.b=a;}
function DO(a){a.gd(zO(a));}
function EO(){BO(this);}
function FO(){DO(this);}
function uO(){}
_=uO.prototype=new bC();_.Ac=EO;_.fd=FO;_.tN=aO+'AbstractConnection';_.tI=133;_.b=null;function bP(a){a.a=jO(new iO());}
function dP(a,b){xO(a,b);bP(a);if(b.a!=2){throw qE(new pE(),'Need exactly two connectors to connect');}a.Ec(a.a.a);bB(a,'gwt-diagrams-connection');return a;}
function cP(c,a,b){dP(c,ji('[Lpl.balon.gwt.diagrams.client.connector.Connector;',168,35,[a,b]));return c;}
function fP(){return new xP();}
function gP(){return this.a.a;}
function hP(){BO(this);}
function iP(b){var a;if(!pi(b,40)){throw qE(new pE(),'Expected BezierConnectionData');}a=oi(b,40);if(a.b.b!=2){throw qE(new pE(),'Expected two connection points');}if(a.a.b!=2){throw qE(new pE(),'Expected two control points');}lO(this.a,oi(dK(a.b,0),37),oi(dK(a.b,1),37),oi(dK(a.a,0),37),oi(dK(a.a,1),37));}
function aP(){}
_=aP.prototype=new uO();_.B=fP;_.jb=gP;_.Ac=hP;_.gd=iP;_.tN=aO+'BezierTwoEndedConnection';_.tI=134;function lP(a){a.a=CJ(new AJ());}
function nP(a,b){xO(a,b);lP(a);if(b.a!=2){throw qE(new pE(),'Need exactly two connectors to connect');}a.Ec(ek());bB(a,'gwt-diagrams-connection');return a;}
function mP(c,a,b){nP(c,ji('[Lpl.balon.gwt.diagrams.client.connector.Connector;',168,35,[a,b]));return c;}
function pP(d,a){var b,c;for(c=d.a.b;c<a;c++){b=ek();EJ(d.a,wi(b,gm));bk(d.jb(),b);Bl(b,'&nbsp;');}while(d.a.b>a){b=oi(dK(d.a,0),19);iK(d.a,wi(b,gm));rl(d.jb(),b);}}
function qP(){return new CP();}
function rP(a){var b,c,d,e,f;if(a.b.b<=1){throw qE(new pE(),'Too few connection points');}pP(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=oi(dK(this.a,d),19);e=oi(dK(a.b,d),37);c=oi(dK(a.b,d+1),37);f='gwt-diagrams-line';wl(b,'style','');zl(b,'className',f);Dl(b,'height','1');Dl(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Dl(b,'height',aF(dF(e.b-c.b)));}else if(e.b==c.b){Dl(b,'width',aF(dF(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Dl(b,'left',aF(gF(e.a,c.a)));Dl(b,'top',aF(gF(e.b,c.b)));zl(b,'className',f);}}
function kP(){}
_=kP.prototype=new uO();_.B=qP;_.gd=rP;_.tN=aO+'RectilinearTwoEndedConnection';_.tI=135;function tP(c,a,b){cP(c,a,b);return c;}
function vP(){return new cQ();}
function wP(a){if(a.b.b!=2){throw qE(new pE(),'Expected two connection points');}lO(this.a,oi(dK(a.b,0),37),oi(dK(a.b,1),37),oi(dK(a.b,1),37),oi(dK(a.b,0),37));}
function sP(){}
_=sP.prototype=new aP();_.B=vP;_.gd=wP;_.tN=aO+'StraightTwoEndedConnection';_.tI=136;function zP(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=ii('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[167],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=sQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function AP(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw qE(new pE(),'Unsupported connectors count');}c=oi(dK(e,0),35);d=oi(dK(e,1),35);f=zP(this,c,d);h=c.zc(f[0]);i=d.zc(f[1]);a=uQ(h,f[0],50);b=uQ(i,f[1],50);g=iQ(new fQ(),ji('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',173,37,[h,i]),ji('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',173,37,[a,b]));return g;}
function xP(){}
_=xP.prototype=new yF();_.u=AP;_.tN=bO+'BezierConnectionCalculator';_.tI=137;function DP(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(fR(),iR);}if(c==1&&d>0){return a!==(fR(),jR);}if(c==0&&d<0){return a!==(fR(),jR);}if(c==1&&d<0){return a!==(fR(),iR);}}else{if(c==0&&d>0){return a!==(fR(),kR);}if(c==1&&d>0){return a!==(fR(),hR);}if(c==0&&d<0){return a!==(fR(),hR);}if(c==1&&d<0){return a!==(fR(),kR);}}return false;}
function FP(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=ii('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[167],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=sQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function aQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(fR(),jR);}if(c==1&&d>0){return a===(fR(),iR);}if(c==0&&d<0){return a===(fR(),iR);}if(c==1&&d<0){return a===(fR(),jR);}}else{if(c==0&&d>0){return a===(fR(),hR);}if(c==1&&d>0){return a===(fR(),kR);}if(c==0&&d<0){return a===(fR(),kR);}if(c==1&&d<0){return a===(fR(),hR);}}return false;}
function bQ(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw qE(new pE(),'Unsupported connectors count');}a=oi(dK(c,0),35);b=oi(dK(c,1),35);d=mQ(new kQ());e=FP(this,a,b);i=a.zc(e[0]);j=uQ(i,e[0],10);k=b.zc(e[1]);l=uQ(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(aQ(this,e[0],0,f,true)&&aQ(this,e[1],1,f,true)){g=uQ(j,e[0],dF(si(f/2)));h=qQ(new pQ(),g.a,l.b);}else if(aQ(this,e[0],0,m,false)&&aQ(this,e[1],1,m,false)){g=uQ(j,e[0],dF(si(m/2)));h=qQ(new pQ(),l.a,g.b);}else if(aQ(this,e[0],0,f,true)&&aQ(this,e[1],1,m,false)){g=uQ(j,e[0],dF(f));h=uQ(l,e[1],dF(m));}else if(aQ(this,e[0],0,m,false)&&aQ(this,e[1],1,f,true)){g=uQ(j,e[0],dF(m));h=uQ(l,e[1],dF(f));}else if(aQ(this,e[0],0,f,true)&&DP(this,e[1],1,f,true)){g=uQ(j,e[0],dF(si(f/2)));h=qQ(new pQ(),g.a,l.b);}else if(DP(this,e[0],0,f,true)&&aQ(this,e[1],1,f,true)){h=uQ(l,e[1],dF(si(f/2)));g=qQ(new pQ(),h.a,j.b);}else if(aQ(this,e[0],0,m,false)&&DP(this,e[1],1,m,false)){g=uQ(j,e[0],dF(si(m/2)));h=qQ(new pQ(),l.a,g.b);}else if(DP(this,e[0],0,m,false)&&aQ(this,e[1],1,m,false)){h=uQ(l,e[1],dF(si(m/2)));g=qQ(new pQ(),j.a,h.b);}else if(DP(this,e[0],0,f,true)&&DP(this,e[1],1,f,true)){g=uQ(j,(fR(),jR),si(f/2));h=qQ(new pQ(),g.a,l.b);}else if(DP(this,e[0],0,m,false)&&DP(this,e[1],1,m,false)){g=uQ(j,(fR(),hR),si(m/2));h=qQ(new pQ(),l.a,g.b);}else if(DP(this,e[0],0,f,true)&&DP(this,e[1],1,m,false)){g=uQ(j,(fR(),jR),f);}else if(DP(this,e[0],0,m,false)&&DP(this,e[1],1,f,true)){g=uQ(j,(fR(),hR),m);}EJ(d.b,i);EJ(d.b,j);if(g!==null){EJ(d.b,g);}if(h!==null){EJ(d.b,h);}EJ(d.b,l);EJ(d.b,k);return d;}
function CP(){}
_=CP.prototype=new yF();_.u=bQ;_.tN=bO+'FullRectilinearTwoEndedCalculator';_.tI=138;function eQ(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw qE(new pE(),'Unsupported connectors count');}a=oi(dK(e,0),35);b=oi(dK(e,1),35);f=mQ(new kQ());c=qQ(new pQ(),a.nb()+si(a.tb()/2),a.rb()+si(a.kb()/2));d=qQ(new pQ(),b.nb()+si(b.tb()/2),b.rb()+si(b.kb()/2));g=qQ(new pQ(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=si(a.kb()/2);h=g.b!=0?si(j*g.a/dF(g.b)):2147483647;j*= -k;if(dF(h)>si(a.tb()/2)){h=si(a.tb()/2);j=g.a!=0?si(h*g.b/dF(g.a)):2147483647;h*= -i;}EJ(f.b,qQ(new pQ(),c.a+h,c.b+j));j=si(b.kb()/2);h=g.b!=0?si(j*g.a/dF(g.b)):2147483647;j*=k;h= -h;if(dF(h)>si(b.tb()/2)){h=si(b.tb()/2);j=g.a!=0?si(h*g.b/dF(g.a)):2147483647;h*=i;j= -j;}EJ(f.b,qQ(new pQ(),d.a+h,d.b+j));return f;}
function cQ(){}
_=cQ.prototype=new yF();_.u=eQ;_.tN=bO+'StraightCenterConnectionDataCalculator';_.tI=139;function lQ(a){a.b=CJ(new AJ());}
function mQ(a){lQ(a);return a;}
function nQ(b,a){lQ(b);DJ(b.b,a);return b;}
function kQ(){}
_=kQ.prototype=new yF();_.tN=cO+'ConnectionData';_.tI=140;function gQ(a){a.a=CJ(new AJ());}
function hQ(c,b,a){nQ(c,b);gQ(c);DJ(c.a,a);return c;}
function iQ(c,b,a){hQ(c,yK(b),yK(a));return c;}
function fQ(){}
_=fQ.prototype=new kQ();_.tN=cO+'BezierConnectionData';_.tI=141;function qQ(b,a,c){b.a=a;b.b=c;return b;}
function sQ(b,a){return hF((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function uQ(c,a,b){if(a===(fR(),hR)){return qQ(new pQ(),c.a,c.b+b);}else if(a===(fR(),kR)){return qQ(new pQ(),c.a,c.b-b);}else if(a===(fR(),iR)){return qQ(new pQ(),c.a-b,c.b);}else if(a===(fR(),jR)){return qQ(new pQ(),c.a+b,c.b);}else{throw tE(new sE());}}
function tQ(a,b){return qQ(new pQ(),a.a+b.a,a.b+b.b);}
function vQ(a){return qQ(new pQ(),-a.a,-a.b);}
function pQ(){}
_=pQ.prototype=new yF();_.tN=cO+'Point';_.tI=142;_.a=0;_.b=0;function xQ(a){a.c=DM(new CM());}
function yQ(a){xQ(a);return a;}
function AQ(b,a){if(bN(b.c,a)){AO(a,b);}}
function BQ(b,a){return uQ(qQ(new pQ(),b.nb()+si(b.tb()/2),b.rb()+si(b.kb()/2)),a,gR(a)?si(b.tb()/2):si(b.kb()/2));}
function CQ(c){var a,b;for(b=aN(c.c);zI(b);){a=oi(AI(b),41);a.fd();}}
function DQ(a){EM(this.c,a);}
function EQ(a){AQ(this,a);}
function FQ(a){return BQ(this,a);}
function aR(){return lR();}
function bR(a){return BQ(this,a);}
function wQ(){}
_=wQ.prototype=new yF();_.x=DQ;_.D=EQ;_.db=FQ;_.gb=aR;_.zc=bR;_.tN=dO+'AbstractConnector';_.tI=143;function fR(){fR=rN;kR=eR(new dR(),'UP');hR=eR(new dR(),'DOWN');iR=eR(new dR(),'LEFT');jR=eR(new dR(),'RIGHT');}
function eR(b,a){fR();b.a=a;return b;}
function gR(a){return a===iR||a===jR;}
function lR(){fR();return ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',167,34,[kR,hR,iR,jR]);}
function mR(){return this.a;}
function dR(){}
_=dR.prototype=new yF();_.tS=mR;_.tN=dO+'Direction';_.tI=144;_.a=null;var hR,iR,jR,kR;function tR(){tR=rN;DR=dM(new hL());}
function sR(a,b){tR();yQ(a);a.b=b;return a;}
function uR(a){lM(DR,a.b);a.b=null;}
function vR(){if(this.b===null){throw uE(new sE(),'Wrapped object is null.');}return this.b.ob();}
function wR(){var a,b;if(this.b===null){throw uE(new sE(),'Wrapped object is null.');}a=0;b=kl(this.b.jb());while(b!==null){if(oG('relative',ll(b,'position'))){a=al(b);break;}b=kl(b);}return dB(this.b)-a;}
function xR(){var a,b;if(this.b===null){throw uE(new sE(),'Wrapped object is null.');}a=0;b=kl(this.b.jb());while(b!==null){if(oG('relative',ll(b,'position'))){a=bl(b);break;}b=kl(b);}return eB(this.b)-a;}
function yR(){if(this.b===null){throw uE(new sE(),'Wrapped object is null.');}return this.b.pb();}
function zR(a){tR();return oi(jM(DR,a),42);}
function AR(a){tR();if(gM(DR,a)){uR(zR(a));}}
function BR(b){tR();var a;if(gM(DR,b)){return oi(jM(DR,b),42);}else{a=sR(new nR(),b);kM(DR,b,a);return a;}}
function CR(c,b){tR();var a;if(gM(DR,c)){return oi(jM(DR,c),42);}else{a=pR(new oR(),c,b);kM(DR,c,a);return a;}}
function nR(){}
_=nR.prototype=new wQ();_.kb=vR;_.nb=wR;_.rb=xR;_.tb=yR;_.tN=dO+'UIObjectConnector';_.tI=145;_.b=null;var DR;function qR(){qR=rN;tR();}
function pR(b,a,c){qR();b.a=c;sR(b,a);return b;}
function rR(){return this.a;}
function oR(){}
_=oR.prototype=new nR();_.gb=rR;_.tN=dO+'UIObjectConnector$1';_.tI=146;function hS(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function iS(a){jh(new FR());em(dS(new cS(),a));}
function ER(){}
_=ER.prototype=new yF();_.tN=eO+'BaseExamplesEntryPoint';_.tI=147;function bS(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=kH(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=ds(new bs(),true);Dl(a.jb(),'backgroundColor','#ABCDEF');bH(),dH;d=tG(d,' ','&nbsp;');gs(a,'<pre>'+d+'<\/pre>');vx(a);}
function FR(){}
_=FR.prototype=new yF();_.tN=eO+'BaseExamplesEntryPoint$1';_.tI=148;function dS(b,a){b.a=a;return b;}
function fS(){qS(this.a);}
function cS(){}
_=cS.prototype=new yF();_.bb=fS;_.tN=eO+'BaseExamplesEntryPoint$2';_.tI=149;function qS(c){var a,b;b=uA(new hA());dq(zy('tabs'),b);wA(b,EU(new DU()),'Rectilinear');wA(b,rT(new qT()),'Bezier');wA(b,cV(new bV()),'Straight');wA(b,lU(new uT()),'Diagram builder');wA(b,zU(new yU()),'Multi');vA(b,lS(new kS(),c,b));a=hS(c,'tab');if(a===null||oG('',a)){a='0';}BA(b,EE(a));}
function jS(){}
_=jS.prototype=new ER();_.tN=eO+'GwtDiagramsExample';_.tI=150;function lS(b,a,c){b.a=c;return b;}
function nS(a,b){return true;}
function oS(b,c){var a;a=oi(yA(this.a,c),43);iT(a);}
function kS(){}
_=kS.prototype=new yF();_.bc=nS;_.vc=oS;_.tN=eO+'GwtDiagramsExample$1';_.tI=151;function mT(a){a.i=cq(new bq());}
function nT(a){var b;dz(a);mT(a);bB(a,'gwt-diagrams-example');b=BB(new zB());fz(a,b);CB(b,a.i);CB(b,pT(a,hT(a)));return a;}
function pT(e,d){var a,b,c;a=Ds(new Cs());bB(a,'gwt-diagrams-sources-panel');for(b=gI(d);BH(b);){c=oi(CH(b),14);Es(a,c);}return a;}
function lT(){}
_=lT.prototype=new Cy();_.tN=fO+'AbstractExample';_.tI=152;function aT(a){a.g=CJ(new AJ());}
function bT(a){nT(a);aT(a);a.h=fT(a);Dl(a.i.jb(),'width','450px');Dl(a.i.jb(),'height','350px');a.C();return a;}
function cT(b,a){dq(b.i,a);EJ(b.g,a);}
function eT(e,d,c,f,a){var b;b=vw(new tw(),d);bB(b,'example-connector');eq(e.i,b,c,f);vS(e.h,b);if(a!==null){return CR(b,ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',167,34,[a]));}return BR(b);}
function fT(b){var a;a=tS(new sS(),b.i,true,b);return a;}
function gT(b,a){iK(b.g,a);}
function hT(f){var a,b,c,d,e;e=CJ(new AJ());b=rG(hh(f),46);a=uG(hh(f),b+1);EJ(e,iw(new gw(),a+'.java',''));EJ(e,iw(new gw(),'AbstractExample.java',''));EJ(e,iw(new gw(),'AbstractConnectionsExample.java',''));for(d=gI(e);BH(d);){c=oi(CH(d),44);bB(c,'gwt-diagrams-source-link');jw(c,DS(new CS(),f,c));}return e;}
function iT(c){var a,b;for(b=gI(c.g);BH(b);){a=oi(CH(b),41);a.fd();}}
function jT(a){cT(this,a);}
function kT(){var a,b,c,d,e,f,g,h;a=eT(this,'all',50,50,null);b=eT(this,'all',100,100,null);this.y(a,b);c=eT(this,'up',250,50,(fR(),kR));d=eT(this,'down',300,100,(fR(),hR));this.y(c,d);e=eT(this,'left',50,200,(fR(),iR));f=eT(this,'right',100,250,(fR(),jR));this.y(e,f);g=eT(this,'left',250,200,(fR(),iR));h=eT(this,'left',300,250,(fR(),iR));this.y(g,h);}
function rS(){}
_=rS.prototype=new lT();_.t=jT;_.C=kT;_.tN=fO+'AbstractConnectionsExample';_.tI=153;_.h=null;function uS(){uS=rN;ad();}
function tS(d,a,b,c){uS();Fc(d,a,b);return d;}
function vS(a,b){A(a,b);Dl(b.jb(),'position','absolute');Dl(b.jb(),'zIndex','100');}
function wS(a){vS(this,a);}
function xS(b,a){return zS(new yS(),b,a,this);}
function sS(){}
_=sS.prototype=new Ec();_.Bb=wS;_.Db=xS;_.tN=fO+'AbstractConnectionsExample$1';_.tI=154;function AS(){AS=rN;se();}
function zS(d,a,b,c){AS();re(d,a,b);return d;}
function BS(d,c,b){var a;od(this,d,c,b);a=zR(c);if(a!==null){CQ(a);}}
function yS(){}
_=yS.prototype=new qe();_.rc=BS;_.tN=fO+'AbstractConnectionsExample$2';_.tI=155;function DS(b,a,c){b.a=c;return b;}
function FS(a){Fn('../source/'+lw(this.a),'','');}
function CS(){}
_=CS.prototype=new yF();_.dc=FS;_.tN=fO+'AbstractConnectionsExample$3';_.tI=156;function rT(a){bT(a);return a;}
function tT(a,b){this.t(cP(new aP(),a,b));}
function qT(){}
_=qT.prototype=new rS();_.y=tT;_.tN=fO+'BezierExample';_.tI=157;function kU(a){a.c=CJ(new AJ());}
function lU(a){bT(a);kU(a);return a;}
function mU(b,a){cT(b,a);DO(a);}
function oU(c,a,b){if(oG('rectilinear',c.d)){mU(c,mP(new kP(),a,b));}else if(oG('bezier',c.d)){mU(c,cP(new aP(),a,b));}else if(oG('straight',c.d)){mU(c,tP(new sP(),a,b));}}
function pU(e,d,c){var a,b;b=cU(new bU(),zw(d),e);kB(b,d.pb(),d.ob());bB(b,'example-connector');eq(c,b,dB(d)-dB(c),eB(d)-eB(c));vS(e.h,b);a=null;if(oG('T',zw(b))){a=(fR(),kR);}else if(oG('L',zw(b))){a=(fR(),iR);}else if(oG('B',zw(b))){a=(fR(),hR);}else if(oG('R',zw(b))){a=(fR(),jR);}if(a!==null){return CR(b,ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',167,34,[a]));}return BR(b);}
function qU(c,a){var b;b=vw(new tw(),a);bB(b,'helpEntry');Fv(c.a,b);}
function rU(d,c,a){var b;b=oy(new my(),'style',c);bB(b,'style-option');yq(b,a);if(a){uU(d,c);}Fv(d.e,b);dt(b,ET(new DT(),d,c));return b;}
function sU(d,a,c){var b;b=vw(new tw(),a);lB(b,'toolbox-node');bB(b,c);Fv(d.e,b);d.f.Bb(b);return b;}
function tU(d,e){var a,b,c,f;if(gK(d.c)){bB(e,'selected-connector');b=zR(e).c;for(c=aN(b);zI(c);){a=oi(AI(c),41);a.Ac();gT(d,a);}EJ(d.c,e);}else if(cK(d.c,e)){hB(e,'selected-connector');iK(d.c,e);}else if(d.c.b==1){f=oi(dK(d.c,0),14);hB(e,'selected-connector');hB(f,'selected-connector');b=zR(e).c;for(c=aN(b);zI(c);){a=oi(AI(c),41);a.Ac();gT(d,a);}oU(d,zR(f),zR(e));aK(d.c);}}
function uU(b,a){b.d=a;}
function vU(a){mU(this,a);}
function wU(a,b){oU(this,a,b);}
function xU(){var a,b,c;a=Fc(new Ec(),this.i,true);b=jd(new id(),this.i);this.f=hU(new fU(),b,a,this);this.e=Ev(new Cv());lB(this.e,'toolbox');this.b=cq(new bq());this.a=Ev(new Cv());lB(this.a,'helpPanel');c=BB(new zB());lB(c,'builder');CB(c,this.a);CB(c,this.e);CB(c,this.b);dq(this.i,c);sU(this,'A','all');sU(this,'L','left');sU(this,'R','right');sU(this,'T','top');sU(this,'B','bottom');rU(this,'rectilinear',true);rU(this,'bezier',false);rU(this,'straight',false);qU(this,'drag&drop from toolbar to add');qU(this,'CTRL+click to select/connect');qU(this,'DEL to delete selected');ak(AT(new zT(),this));}
function uT(){}
_=uT.prototype=new rS();_.t=vU;_.y=wU;_.C=xU;_.tN=fO+'DiagramBuilderExample';_.tI=158;_.a=null;_.b=null;_.d=null;_.e=null;_.f=null;function wT(b,a,c){b.a=a;b.b=c;return b;}
function yT(a){var b,c,d;b=a.d;d=oi(jM(this.a.a,b),14);c=this.b.g;pU(this.a.b,oi(d,45),c);throw gd(new fd());}
function vT(){}
_=vT.prototype=new rb();_.sc=yT;_.tN=fO+'DiagramBuilderExample$1';_.tI=159;function AT(b,a){b.a=a;return b;}
function CT(a){var b,c;if(128==Dk(a)&&46==yk(a)&& !gK(this.a.c)){for(b=hI(this.a.c);BH(b);){c=oi(CH(b),14);AR(c);DH(b);tC(c);}return false;}return true;}
function zT(){}
_=zT.prototype=new yF();_.jc=CT;_.tN=fO+'DiagramBuilderExample$2';_.tI=160;function ET(b,a,c){b.a=a;b.b=c;return b;}
function aU(a){uU(this.a,this.b);}
function DT(){}
_=DT.prototype=new yF();_.dc=aU;_.tN=fO+'DiagramBuilderExample$3';_.tI=161;function cU(c,a,b){c.a=b;vw(c,a);return c;}
function eU(a){if(Dk(a)==1&&wk(a)){tU(this.a,this);}Aw(this,a);}
function bU(){}
_=bU.prototype=new tw();_.cc=eU;_.tN=fO+'DiagramBuilderExample$4';_.tI=162;function iU(){iU=rN;ad();}
function gU(a){a.a=dM(new hL());}
function hU(d,a,b,c){iU();d.b=c;Fc(d,d.b.i,false);gU(d);dd(d,true);F(d,a);u(d,wT(new vT(),d,a));return d;}
function jU(a){var b,c;b=oi(a,45);c=vw(new tw(),zw(b));bB(c,'dragdrop-proxy');bB(c,'toolbox-node-proxy');kB(c,b.pb(),b.ob());kM(this.a,b,c);return c;}
function fU(){}
_=fU.prototype=new Ec();_.Cb=jU;_.tN=fO+'DiagramBuilderExample$ToolboxDragController';_.tI=163;function zU(a){bT(a);return a;}
function BU(a,b){throw oH(new nH());}
function CU(){var a,b,c,d,e,f,g;e=eT(this,'X',50,100,null);f=eT(this,'Y',150,50,null);g=eT(this,'Z',250,25,null);c=eT(this,'U',125,125,null);d=eT(this,'W',250,100,null);this.t(mP(new kP(),e,f));this.t(mP(new kP(),f,g));this.t(mP(new kP(),f,c));this.t(mP(new kP(),c,d));a=eT(this,'A',50,200,null);b=eT(this,'B',150,250,null);this.t(mP(new kP(),a,b));this.t(cP(new aP(),a,b));this.t(tP(new sP(),a,b));}
function yU(){}
_=yU.prototype=new rS();_.y=BU;_.C=CU;_.tN=fO+'MultiConnectionsExample';_.tI=164;function EU(a){bT(a);return a;}
function aV(a,b){this.t(mP(new kP(),a,b));}
function DU(){}
_=DU.prototype=new rS();_.y=aV;_.tN=fO+'RectilinearExample';_.tI=165;function cV(a){bT(a);return a;}
function eV(c,a,b){c.t(tP(new sP(),a,b));}
function fV(a,b){eV(this,a,b);}
function gV(){var a,b;a=eT(this,'connector 1',50,50,(fR(),kR));b=eT(this,'connector 2',200,200,(fR(),hR));eV(this,a,b);}
function bV(){}
_=bV.prototype=new rS();_.y=fV;_.C=gV;_.tN=fO+'StraightConnectionsExample';_.tI=166;function oD(){iS(new jS());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{oD();}catch(a){b(d);}else{oD();}}
var vi=[{},{27:1},{1:1,27:1,38:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{7:1,27:1},{27:1},{27:1,31:1},{27:1,31:1},{27:1,31:1},{27:1},{27:1},{10:1,27:1,38:1},{23:1,27:1},{27:1},{16:1,27:1},{16:1,27:1},{12:1,16:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{27:1},{13:1,16:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{15:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1},{20:1,27:1},{20:1,27:1},{20:1,27:1},{27:1},{15:1,19:1,27:1},{15:1,27:1},{21:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1,28:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{2:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,23:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{5:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,45:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{3:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,44:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{2:1,14:1,24:1,26:1,27:1,28:1,29:1},{21:1,27:1},{27:1},{14:1,22:1,27:1,28:1,29:1},{27:1,31:1},{14:1,25:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,22:1,27:1,28:1,29:1},{4:1,14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1,30:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{27:1},{11:1,16:1,27:1},{27:1},{27:1},{27:1,32:1},{27:1,33:1},{27:1,33:1},{27:1},{27:1},{27:1},{27:1},{27:1,32:1},{27:1,39:1},{27:1,33:1},{27:1},{27:1,33:1},{11:1,16:1,27:1},{27:1},{27:1},{27:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{27:1},{27:1},{27:1},{27:1},{27:1,40:1},{27:1,37:1},{27:1,35:1},{27:1,34:1},{27:1,35:1,42:1},{27:1,35:1,42:1},{27:1},{27:1},{17:1,27:1},{27:1},{25:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{8:1,27:1},{22:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{7:1,27:1},{18:1,27:1},{22:1,27:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{27:1},{9:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();