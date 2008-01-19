(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,EN='com.allen_sauer.gwt.dragdrop.client.',FN='com.allen_sauer.gwt.dragdrop.client.drop.',aO='com.allen_sauer.gwt.dragdrop.client.util.',bO='com.allen_sauer.gwt.dragdrop.client.util.impl.',cO='com.google.gwt.core.client.',dO='com.google.gwt.lang.',eO='com.google.gwt.user.client.',fO='com.google.gwt.user.client.impl.',gO='com.google.gwt.user.client.ui.',hO='com.google.gwt.user.client.ui.impl.',iO='java.io.',jO='java.lang.',kO='java.util.',lO='pl.balon.gwt.diagrams.client.common.bezier.',mO='pl.balon.gwt.diagrams.client.connection.',nO='pl.balon.gwt.diagrams.client.connection.calculator.',oO='pl.balon.gwt.diagrams.client.connection.data.',pO='pl.balon.gwt.diagrams.client.connector.',qO='pl.balon.gwt.diagramsexample.client.',rO='pl.balon.gwt.diagramsexample.client.examples.';function DN(){}
function gG(a){return this===a;}
function hG(){return qH(this);}
function iG(){return this.tN+'@'+this.hC();}
function eG(){}
_=eG.prototype={};_.eQ=gG;_.hC=hG;_.tS=iG;_.toString=function(){return this.tS();};_.tN=jO+'Object';_.tI=1;function rL(b,a){b.d=a;return b;}
function qL(){}
_=qL.prototype=new eG();_.tN=kO+'EventObject';_.tI=3;_.d=null;function ob(c,b,a){rL(c,b);c.c=a;return c;}
function qb(){var a;a=this.c!==null?'dropTarget='+gg(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+gg(this.d)+')';}
function nb(){}
_=nb.prototype=new qL();_.tS=qb;_.tN=EN+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ob(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new nb();_.tS=q;_.tN=EN+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function v(){v=DN;db=pM(new tL());}
function s(a){a.j=y(a);}
function t(c,b,a){v();s(c);c.h=b!==null?b:bz();c.g=c.Db(c.h,a);F(c,c.g);c.o=tc(new rc(),c);return c;}
function u(b,a){if(b.i===null){b.i=yb(new xb());}kK(b.i,a);}
function w(c,a,b){qB(a,'dragdrop-dragging');}
function x(b,a){pc(b.j,b.h,a);if(b.i!==null){Bb(b.i,a);}kB(a,'dragdrop-dragging');}
function y(a){return kc(new dc());}
function z(b,c){var a;a=nc(b.j,c,b.h);return a!==null?a:b.g;}
function A(a,b){{B(a,b,b);}}
function B(c,b,a){xc(c.o,b,a);kB(b,'dragdrop-draggable');kB(a,'dragdrop-handle');wM(db,b,a);}
function C(b,a){if(b.i!==null){Ab(b.i,a);}}
function D(c,a,b){if(c.i!==null){Cb(c.i,a,b);}}
function E(b,a){if(b.i!==null){Db(b.i,a);}}
function F(b,a){lc(b.j,a);}
function ab(b,a){if(pi(b.m,2)){nq(oi(b.m,2),a,b.n.a,b.n.d);}else if(pi(b.m,3)){lw(oi(b.m,3),a,b.k);}else if(pi(b.m,4)){iC(oi(b.m,4),a,b.k);}else if(pi(b.m,5)){jt(oi(b.m,5),a,b.k);}else if(pi(b.m,6)){oi(b.m,6).cd(a);}else{throw lG(new jG(),'Unable to handle initialDraggableParent '+hh(b.m));}}
function bb(b,a){if(b.l!==null&&EG(b.l)!=0){Dl(a.jb(),'margin',b.l);}}
function cb(b,a){b.m=a.p;if(pi(b.m,2)){b.n=lg(new kg(),a,b.m);}else if(pi(b.m,3)){b.k=tr(oi(b.m,3),a);}else if(pi(b.m,4)){b.k=tr(oi(b.m,4),a);}else if(pi(b.m,5)){b.k=tr(oi(b.m,5),a);}else if(pi(b.m,6)){}else{throw lG(new jG(),"Unable to handle 'initialDraggableParent instanceof "+hh(b.m)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.l=ll(a.jb(),'margin');if(b.l!==null&&EG(b.l)!=0){Dl(a.jb(),'margin','0px');}}
function eb(a){A(this,a);}
function fb(b,a){return re(new qe(),b,a);}
function r(){}
_=r.prototype=new eG();_.Bb=eb;_.Db=fb;_.tN=EN+'AbstractDragController';_.tI=6;_.g=null;_.h=null;_.i=null;_.k=0;_.l=null;_.m=null;_.n=null;_.o=null;var db;function hb(b,a){b.b=a;return b;}
function jb(a){if(a.c==0){return;}uc(a.b,a.d,a.e);a.a=oH()-a.c;a.c=0;}
function kb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=oH();}if(a.a>80){em(a);}else{jb(a);}}
function lb(){jb(this);}
function gb(){}
_=gb.prototype=new eG();_.bb=lb;_.tN=EN+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function tb(a){}
function ub(a){}
function vb(a){}
function wb(a){}
function rb(){}
_=rb.prototype=new eG();_.fc=tb;_.gc=ub;_.sc=vb;_.tc=wb;_.tN=EN+'DragHandlerAdapter';_.tI=8;function EH(d,a,b){var c;while(a.wb()){c=a.Eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function aI(a){throw BH(new zH(),'add');}
function bI(b){var a;a=EH(this,this.yb(),b);return a!==null;}
function cI(){var a,b,c;c=pG(new oG());a=null;qG(c,'[');b=this.yb();while(b.wb()){if(a!==null){qG(c,a);}else{a=', ';}qG(c,lH(b.Eb()));}qG(c,']');return uG(c);}
function DH(){}
_=DH.prototype=new eG();_.s=aI;_.A=bI;_.tS=cI;_.tN=kO+'AbstractCollection';_.tI=9;function rI(b,a){throw eF(new cF(),'Index: '+a+', Size: '+b.b);}
function sI(a){return fI(new eI(),a);}
function tI(a){return oI(new nI(),a);}
function uI(b,a){throw BH(new zH(),'add');}
function vI(a){this.r(this.ed(),a);return true;}
function wI(e){var a,b,c,d,f;if(e===this){return true;}if(!pi(e,31)){return false;}f=oi(e,31);if(this.ed()!=f.ed()){return false;}c=sI(this);d=f.yb();while(hI(c)){a=iI(c);b=iI(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function xI(){var a,b,c,d;c=1;a=31;b=sI(this);while(hI(b)){d=iI(b);c=31*c+(d===null?0:d.hC());}return c;}
function yI(){return sI(this);}
function zI(a){throw BH(new zH(),'remove');}
function dI(){}
_=dI.prototype=new DH();_.r=uI;_.s=vI;_.eQ=wI;_.hC=xI;_.yb=yI;_.Bc=zI;_.tN=kO+'AbstractList';_.tI=10;function hK(a){{lK(a);}}
function iK(a){hK(a);return a;}
function kK(b,a){aL(b.a,b.b++,a);return true;}
function jK(d,a){var b,c;c=a.yb();b=c.wb();while(c.wb()){aL(d.a,d.b++,c.Eb());}return b;}
function mK(a){lK(a);}
function lK(a){a.a=xh();a.b=0;}
function oK(b,a){return qK(b,a)!=(-1);}
function pK(b,a){if(a<0||a>=b.b){rI(b,a);}return CK(b.a,a);}
function qK(b,a){return rK(b,a,0);}
function rK(c,b,a){if(a<0){rI(c,a);}for(;a<c.b;++a){if(BK(b,CK(c.a,a))){return a;}}return (-1);}
function sK(a){return a.b==0;}
function tK(c,a){var b;b=pK(c,a);EK(c.a,a,1);--c.b;return b;}
function uK(c,b){var a;a=qK(c,b);if(a==(-1)){return false;}tK(c,a);return true;}
function vK(d,a,b){var c;c=pK(d,a);aL(d.a,a,b);return c;}
function wK(c,a){var b;if(a.a<c.b){a=di(a,c.b);}for(b=0;b<c.b;++b){ki(a,b,CK(c.a,b));}if(a.a>c.b){ki(a,c.b,null);}return a;}
function yK(a,b){if(a<0||a>this.b){rI(this,a);}xK(this.a,a,b);++this.b;}
function zK(a){return kK(this,a);}
function xK(a,b,c){a.splice(b,0,c);}
function AK(a){return oK(this,a);}
function BK(a,b){return a===b||a!==null&&a.eQ(b);}
function DK(a){return pK(this,a);}
function CK(a,b){return a[b];}
function FK(a){return tK(this,a);}
function EK(a,c,b){a.splice(c,b);}
function aL(a,b,c){a[b]=c;}
function bL(){return this.b;}
function gK(){}
_=gK.prototype=new dI();_.r=yK;_.s=zK;_.A=AK;_.ub=DK;_.Bc=FK;_.ed=bL;_.tN=kO+'ArrayList';_.tI=11;_.a=null;_.b=0;function yb(a){iK(a);return a;}
function Ab(d,a){var b,c;for(c=sI(d);hI(c);){b=oi(iI(c),7);b.fc(a);}}
function Bb(e,d){var a,b,c;a=ac(new Fb(),d);for(c=sI(e);hI(c);){b=oi(iI(c),7);b.gc(a);}}
function Cb(f,e,a){var b,c,d;b=ob(new nb(),e,a);for(d=sI(f);hI(d);){c=oi(iI(d),7);c.sc(b);}}
function Db(e,d){var a,b,c;a=ac(new Fb(),d);for(c=sI(e);hI(c);){b=oi(iI(c),7);b.tc(a);}}
function xb(){}
_=xb.prototype=new gK();_.tN=EN+'DragHandlerCollection';_.tI=12;function ac(b,a){rL(b,a);return b;}
function cc(){return 'DragStartEvent(source='+gg(this.d)+')';}
function Fb(){}
_=Fb.prototype=new qL();_.tS=cc;_.tN=EN+'DragStartEvent';_.tI=13;function jc(a){a.a=iK(new gK());}
function kc(a){jc(a);return a;}
function lc(b,a){kK(b.a,a);}
function nc(g,h,a){var b,c,d,e,f,i,j,k;i=ig(new hg(),h,null);j=ef(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(hf(f,i)){k=df(f,j);if(k<=c){if(e===null|| !zf(hc(b).jb(),hc(e).jb())){c=k;e=b;}}}}return e===null?null:e.a;}
function oc(a){return sI(a.a);}
function pc(h,b,d){var a,c,e,f,g;a=ig(new hg(),b,null);g=iK(new gK());for(f=oc(h);hI(f);){e=oi(iI(f),8);c=fc(new ec(),e);if(!zf(d.jb(),hc(c).jb())){if(hf(c.b,a)){kK(g,c);}}}h.b=oi(wK(g,ji('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',170,10,[])),9);gL(h.b);}
function dc(){}
_=dc.prototype=new eG();_.tN=EN+'DropControllerCollection';_.tI=14;_.b=null;function fc(c,a){var b;c.a=a;b=a.ib();if(!b.xb()){throw aF(new EE(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=ig(new hg(),b,null);return c;}
function hc(a){return a.a.ib();}
function ic(a){var b;b=oi(a,10);return zf(hc(this).jb(),hc(b).jb())?1:(-1);}
function ec(){}
_=ec.prototype=new eG();_.v=ic;_.tN=EN+'DropControllerCollection$Candidate';_.tI=15;_.a=null;_.b=null;function sc(a){a.d=hb(new gb(),a);a.f=pM(new tL());}
function tc(b,a){sc(b);b.e=a;b.a=a.h;return b;}
function uc(e,f,g){var a,b,c,d;c=lg(new kg(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=rF(0,sF(a,e.l));b=rF(0,sF(b,e.m));}Af(e.o.jb(),a,b);d=z(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.kc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ic(e.o,e.g,e.e);}}if(e.i!==null){e.i.rc(e.o,e.g,e.e);}}
function vc(b){var a;ql(b.b.jb());b.h=false;if(b.i!==null){b.i.kc(b.g,b.e);}b.i=null;bd(b.e,b.g,null);a=ob(new nb(),b.g,null);C(b.e,a);}
function xc(c,b,a){if(a!==null){ax(a,c);wM(c.f,a,b);}else{throw lG(new jG(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function yc(f){var a,c,d,e;f.g=oi(vM(f.f,f.b),14);try{E(f.e,f.g);}catch(a){a=zi(a);if(pi(a,12)){a;return;}else throw a;}cd(f.e,f.g);f.o=f.e.f;f.l=Ef(f.a.jb())-f.o.pb();f.m=Df(f.a.jb())-f.o.ob();e=lg(new kg(),f.b,f.a);c=lg(new kg(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;vl(f.b.jb());f.h=true;try{uc(f,f.j,f.k);}catch(a){a=zi(a);if(pi(a,11)){d=a;vc(f);throw d;}else throw a;}}
function zc(b,c,d){var a;this.b=b;a=tk((Fj(),nk));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Ek((Fj(),nk));cg();this.j=c;this.k=d;}
function Ac(a){}
function Bc(a){}
function Cc(d,e,f){var a,c;if(!this.h){if(this.n){yc(this);}if(!this.h){return;}}Ek((Fj(),nk));try{kb(this.d,e,f);}catch(a){a=zi(a);if(pi(a,11)){c=a;vc(this);throw c;}else throw a;}}
function Dc(g,h,i){var a,a,d,e,f;d=tk((Fj(),nk));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{ql(this.b.jb());uc(this,h,i);this.h=false;if(this.i===null){vc(this);return;}try{D(this.e,this.g,this.i.ib());}catch(a){a=zi(a);if(pi(a,12)){a;vc(this);return;}else throw a;}try{this.i.uc(this.o,this.g,this.e);}catch(a){a=zi(a);if(pi(a,13)){a;vc(this);return;}else throw a;}bd(this.e,this.g,this.i.ib());e=this.i.hc(this.o,this.g,this.e);C(this.e,e);}catch(a){a=zi(a);if(pi(a,11)){f=a;vc(this);throw f;}else throw a;}finally{this.i=null;}}
function rc(){}
_=rc.prototype=new eG();_.mc=zc;_.nc=Ac;_.oc=Bc;_.pc=Cc;_.qc=Dc;_.tN=EN+'MouseDragHandler';_.tI=16;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ad(){ad=DN;v();}
function Fc(c,b,a){ad();t(c,b,a);return c;}
function bd(c,a,b){w(c,a,b);if(c.c!==null){c.c=null;if(c.e!==null){CC(c.e);c.e=null;}else{if(b===null){ab(c,a);}}bb(c,a);CC(c.f);c.f=null;}}
function cd(d,a){var b,c;x(d,a);d.c=a;d.e=d.Cb(a);cb(d,a);c=lg(new kg(),a,d.h);d.f=mz(new fz());kB(d.f,'dragdrop-movable-panel');if(d.e===null){tB(d.f,a.pb(),a.ob());}nq(d.h,d.f,c.a,c.d);b=d.e!==null?d.e:d.c;d.f.cd(b);}
function dd(b,a){b.d=a;}
function ed(a){var b;if(this.d){b=nv(new rt(),'this is a Drag Proxy');kB(b,'dragdrop-proxy');tB(b,this.c.pb(),this.c.ob());return b;}else{return null;}}
function Ec(){}
_=Ec.prototype=new r();_.Cb=ed;_.tN=EN+'PickupDragController';_.tI=17;_.c=null;_.d=false;_.e=null;_.f=null;function vH(){vH=DN;xH=ii('[Ljava.lang.StackTraceElement;',[172],[36],[0],null);}
function sH(a){a.c=xH;}
function tH(a){vH();sH(a);return a;}
function uH(b,a){vH();sH(b);b.b=a;return b;}
function wH(c){var a,b;a=hh(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function yH(){return wH(this);}
function rH(){}
_=rH.prototype=new eG();_.tS=yH;_.tN=jO+'Throwable';_.tI=18;_.a=null;_.b=null;var xH;function AE(){AE=DN;vH();}
function yE(a){AE();tH(a);return a;}
function zE(b,a){AE();uH(b,a);return b;}
function xE(){}
_=xE.prototype=new rH();_.tN=jO+'Exception';_.tI=19;function hd(){hd=DN;AE();}
function gd(a){hd();yE(a);return a;}
function fd(){}
_=fd.prototype=new xE();_.tN=EN+'VetoDragException';_.tI=20;function yd(b,a){b.g=a;kB(a,b.hb());return b;}
function Ad(d,c,b,a){qB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.Ab(c,b,a);}
function Bd(d,c,b,a){kB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Cd(c,b,a){qB(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Dd(){return this.g;}
function Ed(c,b,a){return ob(new nb(),b,this.g);}
function Fd(c,b,a){return Ad(this,c,b,a);}
function ae(c,b,a){Bd(this,c,b,a);}
function be(b,a){Cd(this,b,a);}
function ce(c,b,a){}
function de(c,b,a){}
function xd(){}
_=xd.prototype=new eG();_.ib=Dd;_.Ab=Ed;_.hc=Fd;_.ic=ae;_.kc=be;_.rc=ce;_.uc=de;_.tN=FN+'AbstractDropController';_.tI=21;_.g=null;function ge(){ge=DN;me=Ew(new Cw(),'x');}
function fe(b,a){ge();yd(b,a);return b;}
function he(f,e){var a,b,c,d;d=mz(new fz());kB(d,'dragdrop-positioner');nq(bz(),d,(-500),(-500));d.cd(me);a=mz(new fz());c=e.pb()-Ff(d);b=e.ob()-ag(d);tB(a,c,b);d.cd(a);return d;}
function ie(e,d,b,a){var c;c=Ad(e,d,b,a);le(e);return c;}
function je(d,c,b,a){Bd(d,c,b,a);d.f=he(d,b);}
function ke(c,b,a){Cd(c,b,a);le(c);}
function le(a){if(a.f!==null){CC(a.f);}}
function ne(c,b,a){return ie(this,c,b,a);}
function oe(c,b,a){je(this,c,b,a);}
function pe(b,a){ke(this,b,a);}
function ee(){}
_=ee.prototype=new xd();_.hc=ne;_.ic=oe;_.kc=pe;_.tN=FN+'AbstractPositioningDropController';_.tI=22;_.f=null;var me;function kd(){kd=DN;ge();}
function jd(b,a){kd();fe(b,a);b.d=ze(new ye(),a);return b;}
function ld(d,c,a,e){var b;b=d.eb(c,a,e);if(b!==null){nq(d.d.b,e,b.a,b.d);}}
function md(e,d,b,a){var c;nq(e.d.b,b,e.c.a,e.c.d);c=ie(e,d,b,a);e.e=null;return c;}
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
_=id.prototype=new ee();_.eb=pd;_.hb=qd;_.Ab=rd;_.hc=sd;_.ic=td;_.kc=ud;_.rc=vd;_.uc=wd;_.tN=FN+'AbsolutePositionDropController';_.tI=23;_.c=null;_.d=null;_.e=null;function se(){se=DN;kd();}
function re(c,b,a){se();jd(c,b);c.a=a;return c;}
function te(b,a,d){var c;if(this.a){c=ig(new hg(),b,this.d.a);if(this.b===null){this.b=lg(new kg(),b,this.d.b);}else{rg(this.b,b);}ng(this.b,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.b;}else{return null;}}
function ue(){return 'dragdrop-boundary';}
function ve(d,c,a){var b;b=md(this,d,c,a);this.b=null;return b;}
function we(b,a){nd(this,b,a);this.b=null;}
function qe(){}
_=qe.prototype=new id();_.eb=te;_.hb=ue;_.hc=ve;_.kc=we;_.tN=FN+'BoundaryDropController';_.tI=24;_.a=false;_.b=null;function ze(b,a){b.b=a;return b;}
function Be(a){return Df(a.b.jb());}
function Ce(a){return Ef(a.b.jb());}
function De(b,a){b.a=a;}
function ye(){}
_=ye.prototype=new eG();_.tN=FN+'DropTargetInfo';_.tI=25;_.a=null;_.b=null;function af(){af=DN;AE();}
function Fe(a){af();yE(a);return a;}
function Ee(){}
_=Ee.prototype=new xE();_.tN=FN+'VetoDropException';_.tI=26;function df(b,a){var c,d;c=rF(b.b-a.a,a.a-b.c);d=rF(b.d-a.b,a.b-b.a);return rF(c,d);}
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
_=bf.prototype=new eG();_.tS=nf;_.tN=aO+'AbstractArea';_.tI=27;_.a=0;_.b=0;_.c=0;_.d=0;function qf(){return '('+this.nb()+', '+this.rb()+')';}
function of(){}
_=of.prototype=new eG();_.tS=qf;_.tN=aO+'AbstractLocation';_.tI=28;function tf(b,a,c){b.a=a;b.b=c;return b;}
function vf(){return this.a;}
function wf(){return this.b;}
function sf(){}
_=sf.prototype=new of();_.nb=vf;_.rb=wf;_.tN=aO+'CoordinateLocation';_.tI=29;_.a=0;_.b=0;function yf(){yf=DN;{bg=new wg();}}
function zf(b,a){yf();return ah(bg,b,a);}
function Af(a,b,c){yf();a.style.left=b+'px';a.style.top=c+'px';}
function Bf(a){yf();return yg(bg,a);}
function Cf(a){yf();return zg(bg,a);}
function Df(a){yf();return Ag(bg,a);}
function Ef(a){yf();return Bg(bg,a);}
function Ff(a){yf();return bh(bg,a);}
function ag(a){yf();return ch(bg,a);}
function cg(){yf();Cg(bg);}
var bg=null;function gg(a){var b;b=hh(a);return aH(b,DG(b,46)+1);}
function ig(e,g,c){var a,b,d,f;b=mB(g);f=nB(g);if(c!==null){b-=mB(c);b-=Bf(c.jb());f-=nB(c);f-=Cf(c.jb());}d=b+g.pb();a=f+g.ob();kf(e,b);mf(e,f);lf(e,d);jf(e,a);return e;}
function hg(){}
_=hg.prototype=new bf();_.tN=aO+'WidgetArea';_.tI=30;function lg(b,c,a){pg(b,c);og(b,a);qg(b);return b;}
function ng(e,c,d,a,b){e.a=rF(c,sF(e.a,a));e.d=rF(d,sF(e.d,b));}
function og(b,a){if(a===null||a===bz()){b.b=0;b.c=0;}else{b.b=mB(a)+Bf(a.jb());b.c=nB(a)+Cf(a.jb());}}
function pg(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=mB(b);a.f=nB(b);}}
function qg(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function rg(a,b){pg(a,b);qg(a);}
function sg(){return this.a;}
function tg(){return this.d;}
function ug(){return '('+this.a+', '+this.d+')';}
function kg(){}
_=kg.prototype=new of();_.nb=sg;_.rb=tg;_.tS=ug;_.tN=aO+'WidgetLocation';_.tI=31;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function ah(c,b,a){return b.contains(a);}
function bh(a,b){return b.pb()-Bg(a,b.jb());}
function ch(a,b){return b.ob()-Ag(a,b.jb());}
function vg(){}
_=vg.prototype=new eG();_.tN=bO+'DOMUtilImpl';_.tI=32;function Dg(){}
_=Dg.prototype=new vg();_.tN=bO+'DOMUtilImplStandard';_.tI=33;function yg(d,c){var b=$doc.defaultView.getComputedStyle(c,null);if(b!=null){var a=b.getPropertyValue('border-left-width');return a.indexOf('px')== -1?0:parseInt(a.substr(0,a.length-2));}else{return 0;}}
function zg(d,c){var b=$doc.defaultView.getComputedStyle(c,null);if(b!=null){var a=b.getPropertyValue('border-top-width');return a.indexOf('px')== -1?0:parseInt(a.substr(0,a.length-2));}else{return 0;}}
function Ag(b,a){return a.clientHeight||0;}
function Bg(b,a){return a.clientWidth||0;}
function Cg(b){var a=$wnd.getSelection();if(a.removeAllRanges){a.removeAllRanges();}else{a.collapse();}}
function wg(){}
_=wg.prototype=new Dg();_.tN=bO+'DOMUtilImplSafari';_.tI=34;function hh(a){return a==null?null:a.tN;}
function jh(a){ih=a;}
var ih=null;function mh(a){return a==null?0:a.$H?a.$H:(a.$H=oh());}
function nh(a){return a==null?0:a.$H?a.$H:(a.$H=oh());}
function oh(){return ++ph;}
var ph=0;function mG(){mG=DN;AE();}
function kG(a){mG();yE(a);return a;}
function lG(b,a){mG();zE(b,a);return b;}
function jG(){}
_=jG.prototype=new xE();_.tN=jO+'RuntimeException';_.tI=35;function sh(){sh=DN;mG();}
function rh(c,b,a){sh();lG(c,'JavaScript '+b+' exception: '+a);return c;}
function qh(){}
_=qh.prototype=new jG();_.tN=cO+'JavaScriptException';_.tI=36;function vh(b,a){if(!pi(a,15)){return false;}return zh(b,oi(a,15));}
function wh(a){return mh(a);}
function xh(){return [];}
function yh(){return {};}
function Ah(a){return vh(this,a);}
function zh(a,b){return a===b;}
function Bh(){return wh(this);}
function Dh(){return Ch(this);}
function Ch(a){if(a.toString)return a.toString();return '[object]';}
function th(){}
_=th.prototype=new eG();_.eQ=Ah;_.hC=Bh;_.tS=Dh;_.tN=cO+'JavaScriptObject';_.tI=37;function Fh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function bi(a,b,c){return a[b]=c;}
function di(a,b){return ci(a,b);}
function ci(a,b){return Fh(new Eh(),b,a.tI,a.b,a.tN);}
function ei(b,a){return b[a];}
function gi(b,a){return b[a];}
function fi(a){return a.length;}
function ii(e,d,c,b,a){return hi(e,d,c,b,0,fi(b),a);}
function hi(j,i,g,c,e,a,b){var d,f,h;if((f=ei(c,e))<0){throw vF(new uF());}h=Fh(new Eh(),f,ei(i,e),ei(g,e),j);++e;if(e<a){j=aH(j,1);for(d=0;d<f;++d){bi(h,d,hi(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){bi(h,d,b);}}return h;}
function ji(f,e,c,g){var a,b,d;b=fi(g);d=Fh(new Eh(),b,e,c,f);for(a=0;a<b;++a){bi(d,a,gi(g,a));}return d;}
function ki(a,b,c){if(c!==null&&a.b!=0&& !pi(c,a.b)){throw cE(new bE());}return bi(a,b,c);}
function Eh(){}
_=Eh.prototype=new eG();_.tN=dO+'Array';_.tI=38;function ni(b,a){return !(!(b&&vi[b][a]));}
function oi(b,a){if(b!=null)ni(b.tI,a)||ui();return b;}
function pi(b,a){return b!=null&&ni(b.tI,a);}
function qi(a){return a&65535;}
function ri(a){return ~(~a);}
function si(a){if(a>(hF(),iF))return hF(),iF;if(a<(hF(),jF))return hF(),jF;return a>=0?Math.floor(a):Math.ceil(a);}
function ui(){throw sE(new rE());}
function ti(a){if(a!==null){throw sE(new rE());}return a;}
function wi(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var vi;function zi(a){if(pi(a,16)){return a;}return rh(new qh(),Bi(a),Ai(a));}
function Ai(a){return a.message;}
function Bi(a){return a.name;}
function Ei(){Ei=DN;mG();}
function Di(b,a){Ei();kG(b);return b;}
function Ci(){}
_=Ci.prototype=new jG();_.tN=eO+'CommandCanceledException';_.tI=41;function tj(a){a.a=bj(new aj(),a);a.b=iK(new gK());a.d=fj(new ej(),a);a.f=jj(new ij(),a);}
function uj(a){tj(a);return a;}
function wj(c){var a,b,d;a=lj(c.f);oj(c.f);b=null;if(pi(a,17)){b=Di(new Ci(),oi(a,17));}else{}if(b!==null){d=ih;if(d!==null){jS(d,b);}}zj(c,false);yj(c);}
function xj(e,d){var a,b,c,f;f=false;try{zj(e,true);pj(e.f,e.b.b);en(e.a,10000);while(mj(e.f)){b=nj(e.f);c=true;try{if(b===null){return;}if(pi(b,17)){a=oi(b,17);a.bb();}else{}}finally{f=qj(e.f);if(f){return;}if(c){oj(e.f);}}if(Cj(oH(),d)){return;}}}finally{if(!f){an(e.a);zj(e,false);yj(e);}}}
function yj(a){if(!sK(a.b)&& !a.e&& !a.c){Aj(a,true);en(a.d,1);}}
function zj(b,a){b.c=a;}
function Aj(b,a){b.e=a;}
function Bj(b,a){kK(b.b,a);yj(b);}
function Cj(a,b){return qF(a-b)>=100;}
function Fi(){}
_=Fi.prototype=new eG();_.tN=eO+'CommandExecutor';_.tI=42;_.c=false;_.e=false;function bn(){bn=DN;ln=iK(new gK());{kn();}}
function Fm(a){bn();return a;}
function an(a){if(a.b){fn(a.c);}else{gn(a.c);}uK(ln,a);}
function cn(e,d){var a,c;try{dn(e);}catch(a){a=zi(a);if(pi(a,16)){c=a;jS(d,c);}else throw a;}}
function dn(a){if(!a.b){uK(ln,a);}a.Dc();}
function en(b,a){if(a<=0){throw CE(new BE(),'must be positive');}an(b);b.b=false;b.c=hn(b,a);kK(ln,b);}
function fn(a){bn();$wnd.clearInterval(a);}
function gn(a){bn();$wnd.clearTimeout(a);}
function hn(b,a){bn();return $wnd.setTimeout(function(){b.cb();},a);}
function jn(){var a;a=ih;if(a!==null){cn(this,a);}else{dn(this);}}
function kn(){bn();pn(new Bm());}
function Am(){}
_=Am.prototype=new eG();_.cb=jn;_.tN=eO+'Timer';_.tI=43;_.b=false;_.c=0;var ln;function cj(){cj=DN;bn();}
function bj(b,a){cj();b.a=a;Fm(b);return b;}
function dj(){if(!this.a.c){return;}wj(this.a);}
function aj(){}
_=aj.prototype=new Am();_.Dc=dj;_.tN=eO+'CommandExecutor$1';_.tI=44;function gj(){gj=DN;bn();}
function fj(b,a){gj();b.a=a;Fm(b);return b;}
function hj(){Aj(this.a,false);xj(this.a,oH());}
function ej(){}
_=ej.prototype=new Am();_.Dc=hj;_.tN=eO+'CommandExecutor$2';_.tI=45;function jj(b,a){b.d=a;return b;}
function lj(a){return pK(a.d.b,a.b);}
function mj(a){return a.c<a.a;}
function nj(b){var a;b.b=b.c;a=pK(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function oj(a){tK(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function pj(b,a){b.a=a;}
function qj(a){return a.b==(-1);}
function rj(){return mj(this);}
function sj(){return nj(this);}
function ij(){}
_=ij.prototype=new eG();_.wb=rj;_.Eb=sj;_.tN=eO+'CommandExecutor$CircularIterator';_.tI=46;_.a=0;_.b=(-1);_.c=0;function Fj(){Fj=DN;ul=iK(new gK());{ml=new co();wo(ml);}}
function ak(a){Fj();kK(ul,a);}
function bk(b,a){Fj();Co(ml,b,a);}
function ck(a,b){Fj();return no(ml,a,b);}
function dk(){Fj();return Eo(ml,'A');}
function ek(){Fj();return Eo(ml,'div');}
function fk(a){Fj();return Eo(ml,a);}
function gk(a){Fj();return oo(ml,a);}
function hk(){Fj();return Eo(ml,'label');}
function ik(){Fj();return Eo(ml,'span');}
function jk(){Fj();return Eo(ml,'tbody');}
function kk(){Fj();return Eo(ml,'td');}
function lk(){Fj();return Eo(ml,'tr');}
function mk(){Fj();return Eo(ml,'table');}
function qk(b,a,d){Fj();var c;c=ih;if(c!==null){ok(b,a,d,c);}else{pk(b,a,d);}}
function ok(e,d,g,f){Fj();var a,c;try{pk(e,d,g);}catch(a){a=zi(a);if(pi(a,16)){c=a;jS(f,c);}else throw a;}}
function pk(b,a,c){Fj();var d;if(a===tl){if(Dk(b)==8192){tl=null;}}d=nk;nk=b;try{c.cc(b);}finally{nk=d;}}
function rk(b,a){Fj();Fo(ml,b,a);}
function sk(a){Fj();return ap(ml,a);}
function tk(a){Fj();return bp(ml,a);}
function uk(a){Fj();return fo(ml,a);}
function vk(a){Fj();return go(ml,a);}
function wk(a){Fj();return cp(ml,a);}
function xk(a){Fj();return po(ml,a);}
function yk(a){Fj();return dp(ml,a);}
function zk(a){Fj();return ep(ml,a);}
function Ak(a){Fj();return fp(ml,a);}
function Bk(a){Fj();return qo(ml,a);}
function Ck(a){Fj();return ro(ml,a);}
function Dk(a){Fj();return gp(ml,a);}
function Ek(a){Fj();so(ml,a);}
function Fk(a){Fj();return to(ml,a);}
function al(a){Fj();return ho(ml,a);}
function bl(a){Fj();return io(ml,a);}
function cl(b,a){Fj();return hp(ml,b,a);}
function dl(a){Fj();return ip(ml,a);}
function gl(a,b){Fj();return lp(ml,a,b);}
function el(a,b){Fj();return jp(ml,a,b);}
function fl(a,b){Fj();return kp(ml,a,b);}
function hl(a){Fj();return mp(ml,a);}
function il(a){Fj();return uo(ml,a);}
function jl(a){Fj();return np(ml,a);}
function kl(a){Fj();return vo(ml,a);}
function ll(b,a){Fj();return op(ml,b,a);}
function nl(c,a,b){Fj();xo(ml,c,a,b);}
function ol(b,a){Fj();return yo(ml,b,a);}
function pl(a){Fj();var b,c;c=true;if(ul.b>0){b=oi(pK(ul,ul.b-1),18);if(!(c=b.jc(a))){rk(a,true);Ek(a);}}return c;}
function ql(a){Fj();if(tl!==null&&ck(a,tl)){tl=null;}zo(ml,a);}
function rl(b,a){Fj();pp(ml,b,a);}
function sl(a){Fj();uK(ul,a);}
function vl(a){Fj();tl=a;Ao(ml,a);}
function wl(b,a,c){Fj();qp(ml,b,a,c);}
function zl(a,b,c){Fj();tp(ml,a,b,c);}
function xl(a,b,c){Fj();rp(ml,a,b,c);}
function yl(a,b,c){Fj();sp(ml,a,b,c);}
function Al(a,b){Fj();up(ml,a,b);}
function Bl(a,b){Fj();vp(ml,a,b);}
function Cl(a,b){Fj();wp(ml,a,b);}
function Dl(b,a,c){Fj();xp(ml,b,a,c);}
function El(a,b){Fj();Bo(ml,a,b);}
function Fl(a){Fj();return yp(ml,a);}
function am(){Fj();return jo(ml);}
function bm(){Fj();return ko(ml);}
var nk=null,ml=null,tl=null,ul;function dm(){dm=DN;fm=uj(new Fi());}
function em(a){dm();if(a===null){throw yF(new xF(),'cmd can not be null');}Bj(fm,a);}
var fm;function im(a){if(pi(a,19)){return ck(this,oi(a,19));}return vh(wi(this,gm),a);}
function jm(){return wh(wi(this,gm));}
function km(){return Fl(this);}
function gm(){}
_=gm.prototype=new th();_.eQ=im;_.hC=jm;_.tS=km;_.tN=eO+'Element';_.tI=47;function pm(a){return vh(wi(this,lm),a);}
function qm(){return wh(wi(this,lm));}
function rm(){return Fk(this);}
function lm(){}
_=lm.prototype=new th();_.eQ=pm;_.hC=qm;_.tS=rm;_.tN=eO+'Event';_.tI=48;function tm(){tm=DN;wm=iK(new gK());{xm=Cp(new Bp());if(!Fp(xm)){xm=null;}}}
function um(e,d){tm();var a,c;try{vm(e);}catch(a){a=zi(a);if(pi(a,16)){c=a;jS(d,c);}else throw a;}}
function vm(a){tm();var b,c;for(b=sI(wm);hI(b);){c=ti(iI(b));null.id();}}
function ym(a){tm();if(xm!==null){bq(xm,a);}}
function zm(b){tm();var a;a=ih;if(a!==null){um(b,a);}else{vm(b);}}
var wm,xm=null;function Dm(){while((bn(),ln).b>0){an(oi(pK((bn(),ln),0),20));}}
function Em(){return null;}
function Bm(){}
_=Bm.prototype=new eG();_.xc=Dm;_.yc=Em;_.tN=eO+'Timer$1';_.tI=49;function on(){on=DN;qn=iK(new gK());ao=iK(new gK());{Bn();}}
function pn(a){on();kK(qn,a);}
function rn(d){on();var a,c;try{sn();}catch(a){a=zi(a);if(pi(a,16)){c=a;jS(d,c);}else throw a;}}
function sn(){on();var a,b;for(a=sI(qn);hI(a);){b=oi(iI(a),21);b.xc();}}
function tn(d){on();var a,c;try{return un();}catch(a){a=zi(a);if(pi(a,16)){c=a;jS(d,c);return null;}else throw a;}}
function un(){on();var a,b,c,d;d=null;for(a=sI(qn);hI(a);){b=oi(iI(a),21);c=b.yc();{d=c;}}return d;}
function vn(d){on();var a,c;try{wn();}catch(a){a=zi(a);if(pi(a,16)){c=a;jS(d,c);}else throw a;}}
function wn(){on();var a,b;for(a=sI(ao);hI(a);){b=ti(iI(a));null.id();}}
function xn(){on();return am();}
function yn(){on();return bm();}
function zn(){on();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function An(){on();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function Bn(){on();__gwt_initHandlers(function(){En();},function(){return Dn();},function(){Cn();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Cn(){on();var a;a=ih;if(a!==null){rn(a);}else{sn();}}
function Dn(){on();var a;a=ih;if(a!==null){return tn(a);}else{return un();}}
function En(){on();var a;a=ih;if(a!==null){vn(a);}else{wn();}}
function Fn(c,b,a){on();$wnd.open(c,b,a);}
var qn,ao;function Co(c,b,a){b.appendChild(a);}
function Eo(b,a){return $doc.createElement(a);}
function Fo(c,b,a){b.cancelBubble=a;}
function ap(b,a){return !(!a.altKey);}
function bp(b,a){return a.button|| -1;}
function cp(b,a){return !(!a.ctrlKey);}
function dp(b,a){return a.which||(a.keyCode|| -1);}
function ep(b,a){return !(!a.metaKey);}
function fp(b,a){return !(!a.shiftKey);}
function gp(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function hp(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function ip(c,b){var a=$doc.getElementById(b);return a||null;}
function lp(d,a,b){var c=a[b];return c==null?null:String(c);}
function jp(c,a,b){return !(!a[b]);}
function kp(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function mp(b,a){return a.__eventBits||0;}
function np(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.lb(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function op(d,b,a){var c=b.style[a];return c==null?null:c;}
function pp(c,b,a){b.removeChild(a);}
function qp(c,b,a,d){b.setAttribute(a,d);}
function tp(c,a,b,d){a[b]=d;}
function rp(c,a,b,d){a[b]=d;}
function sp(c,a,b,d){a[b]=d;}
function up(c,a,b){a.__listener=b;}
function vp(c,a,b){if(!b){b='';}a.innerHTML=b;}
function wp(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function xp(c,b,a,d){b.style[a]=d;}
function yp(b,a){return a.outerHTML;}
function zp(a){return np(this,a);}
function bo(){}
_=bo.prototype=new eG();_.lb=zp;_.tN=fO+'DOMImpl';_.tI=50;function no(c,a,b){return a==b;}
function oo(c,b){var a=$doc.createElement('INPUT');a.type='radio';a.name=b;return a;}
function po(b,a){return a.relatedTarget?a.relatedTarget:null;}
function qo(b,a){return a.target||null;}
function ro(b,a){return a.relatedTarget||null;}
function so(b,a){a.preventDefault();}
function to(b,a){return a.toString();}
function uo(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function vo(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function wo(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){qk(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!pl(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)qk(b,a,c);};$wnd.__captureElem=null;}
function xo(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function yo(c,b,a){while(a){if(b==a){return true;}a=a.parentNode;if(a&&a.nodeType!=1){a=null;}}return false;}
function zo(b,a){if(a==$wnd.__captureElem)$wnd.__captureElem=null;}
function Ao(b,a){$wnd.__captureElem=a;}
function Bo(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function lo(){}
_=lo.prototype=new bo();_.tN=fO+'DOMImplStandard';_.tI=51;function fo(b,a){return a.pageX-$doc.body.scrollLeft|| -1;}
function go(b,a){return a.pageY-$doc.body.scrollTop|| -1;}
function ho(e,b){if(b.offsetLeft==null){return 0;}var c=0;var a=b.parentNode;if(a){while(a.offsetParent){c-=a.scrollLeft;a=a.parentNode;}}while(b){c+=b.offsetLeft;var d=b.offsetParent;if(d&&(d.tagName=='BODY'&&b.style.position=='absolute')){break;}b=d;}return c;}
function io(d,b){if(b.offsetTop==null){return 0;}var e=0;var a=b.parentNode;if(a){while(a.offsetParent){e-=a.scrollTop;a=a.parentNode;}}while(b){e+=b.offsetTop;var c=b.offsetParent;if(c&&(c.tagName=='BODY'&&b.style.position=='absolute')){break;}b=c;}return e;}
function jo(a){return $wnd.innerHeight;}
function ko(a){return $wnd.innerWidth;}
function co(){}
_=co.prototype=new lo();_.tN=fO+'DOMImplSafari';_.tI=52;function jq(a){zm(a);}
function Ap(){}
_=Ap.prototype=new eG();_.tN=fO+'HistoryImpl';_.tI=53;function gq(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;jq(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function hq(b,a){if(a==null){a='';}$wnd.location.hash=encodeURIComponent(a);}
function eq(){}
_=eq.prototype=new Ap();_.tN=fO+'HistoryImplStandard';_.tI=54;function Dp(){Dp=DN;dq=cq();}
function Cp(a){Dp();return a;}
function Fp(a){if(dq){Ep(a);return true;}return gq(a);}
function Ep(b){$wnd.__gwt_historyToken='';var a=$wnd.location.hash;if(a.length>0)$wnd.__gwt_historyToken=decodeURIComponent(a.substring(1));jq($wnd.__gwt_historyToken);}
function bq(b,a){if(dq){aq(b,a);return;}hq(b,a);}
function aq(d,a){var b=$doc.createElement('meta');b.setAttribute('http-equiv','refresh');var c=$wnd.location.href.split('#')[0]+'#'+encodeURIComponent(a);b.setAttribute('content','0.01;url='+c);$doc.body.appendChild(b);window.setTimeout(function(){$doc.body.removeChild(b);},1);$wnd.__gwt_historyToken=a;jq($wnd.__gwt_historyToken);}
function cq(){Dp();var a=/ AppleWebKit\/([\d]+)/;var b=a.exec(navigator.userAgent);if(b){if(parseInt(b[1])>=522){return false;}}if(navigator.userAgent.indexOf('iPhone')!= -1){return false;}return true;}
function Bp(){}
_=Bp.prototype=new eq();_.tN=fO+'HistoryImplSafari';_.tI=55;var dq;function kB(b,a){DB(b.qb(),a,true);}
function mB(a){return al(a.jb());}
function nB(a){return bl(a.jb());}
function oB(a){return fl(a.q,'offsetHeight');}
function pB(a){return fl(a.q,'offsetWidth');}
function qB(b,a){DB(b.qb(),a,false);}
function rB(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function sB(b,a){if(b.q!==null){rB(b,b.q,a);}b.q=a;}
function tB(b,c,a){if(c>=0){b.dd(c+'px');}if(a>=0){b.Fc(a+'px');}}
function uB(b,a){CB(b.qb(),a);}
function vB(b,a){El(b.jb(),a|hl(b.jb()));}
function wB(){return this.q;}
function xB(){return oB(this);}
function yB(){return pB(this);}
function zB(){return this.q;}
function AB(a){return gl(a,'className');}
function BB(a){Dl(this.q,'height',a);}
function CB(a,b){zl(a,'className',b);}
function DB(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw lG(new jG(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=cH(j);if(EG(j)==0){throw CE(new BE(),'Style names cannot be empty');}i=AB(c);e=BG(i,j);while(e!=(-1)){if(e==0||xG(i,e-1)==32){f=e+EG(j);g=EG(i);if(f==g||f<g&&xG(i,f)==32){break;}}e=CG(i,j,e+1);}if(a){if(e==(-1)){if(EG(i)>0){i+=' ';}zl(c,'className',i+j);}}else{if(e!=(-1)){b=cH(bH(i,0,e));d=cH(aH(i,e+EG(j)));if(EG(b)==0){h=d;}else if(EG(d)==0){h=b;}else{h=b+' '+d;}zl(c,'className',h);}}}
function EB(a,b){a.style.display=b?'':'none';}
function FB(a){EB(this.q,a);}
function aC(a){Dl(this.q,'width',a);}
function bC(){if(this.q===null){return '(null handle)';}return Fl(this.q);}
function jB(){}
_=jB.prototype=new eG();_.jb=wB;_.ob=xB;_.pb=yB;_.qb=zB;_.Fc=BB;_.bd=FB;_.dd=aC;_.tS=bC;_.tN=gO+'UIObject';_.tI=56;_.q=null;function BC(a){if(!a.xb()){throw aF(new EE(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.wc();}finally{a.F();Al(a.jb(),null);a.o=false;}}
function CC(a){if(pi(a.p,26)){oi(a.p,26).Cc(a);}else if(a.p!==null){throw aF(new EE(),"This widget's parent does not implement HasWidgets");}}
function DC(b,a){if(b.xb()){Al(b.jb(),null);}sB(b,a);if(b.xb()){Al(a,b);}}
function EC(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.xb()){c.ec();}c.p=null;}else{if(a!==null){throw aF(new EE(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.xb()){c.ac();}}}
function FC(){}
function aD(){}
function bD(){return this.o;}
function cD(){if(this.xb()){throw aF(new EE(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;Al(this.jb(),this);this.E();this.lc();}
function dD(a){}
function eD(){BC(this);}
function fD(){}
function gD(){}
function hD(a){DC(this,a);}
function kC(){}
_=kC.prototype=new jB();_.E=FC;_.F=aD;_.xb=bD;_.ac=cD;_.cc=dD;_.ec=eD;_.lc=fD;_.wc=gD;_.Ec=hD;_.tN=gO+'Widget';_.tI=57;_.o=false;_.p=null;function sx(b,a){EC(a,b);}
function ux(b,a){EC(a,null);}
function vx(){var a,b;for(b=this.yb();b.wb();){a=oi(b.Eb(),14);a.ac();}}
function wx(){var a,b;for(b=this.yb();b.wb();){a=oi(b.Eb(),14);a.ec();}}
function xx(){}
function yx(){}
function rx(){}
_=rx.prototype=new kC();_.E=vx;_.F=wx;_.lc=xx;_.wc=yx;_.tN=gO+'Panel';_.tI=58;function mr(a){a.f=rC(new lC(),a);}
function nr(a){mr(a);return a;}
function or(c,a,b){CC(a);sC(c.f,a);bk(b,a.jb());sx(c,a);}
function pr(d,b,a){var c;rr(d,a);if(b.p===d){c=tr(d,b);if(c<a){a--;}}return a;}
function qr(b,a){if(a<0||a>=b.f.b){throw dF(new cF());}}
function rr(b,a){if(a<0||a>b.f.b){throw dF(new cF());}}
function ur(b,a){return uC(b.f,a);}
function tr(b,a){return vC(b.f,a);}
function vr(e,b,c,a,d){a=pr(e,b,a);CC(b);wC(e.f,b,a);if(d){nl(c,b.jb(),a);}else{bk(c,b.jb());}sx(e,b);}
function wr(a){return xC(a.f);}
function xr(b,c){var a;if(c.p!==b){return false;}ux(b,c);a=c.jb();rl(kl(a),a);zC(b.f,c);return true;}
function yr(){return wr(this);}
function zr(a){return xr(this,a);}
function lr(){}
_=lr.prototype=new rx();_.yb=yr;_.Cc=zr;_.tN=gO+'ComplexPanel';_.tI=59;function lq(a){nr(a);a.Ec(ek());Dl(a.jb(),'position','relative');Dl(a.jb(),'overflow','hidden');return a;}
function mq(a,b){or(a,b,a.jb());}
function nq(b,d,a,c){CC(d);qq(b,d,a,c);mq(b,d);}
function pq(b,c){var a;a=xr(b,c);if(a){rq(c.jb());}return a;}
function qq(c,e,b,d){var a;a=e.jb();if(b==(-1)&&d==(-1)){rq(a);}else{Dl(a,'position','absolute');Dl(a,'left',b+'px');Dl(a,'top',d+'px');}}
function rq(a){Dl(a,'left','');Dl(a,'top','');Dl(a,'position','');}
function sq(a){return pq(this,a);}
function kq(){}
_=kq.prototype=new lr();_.Cc=sq;_.tN=gO+'AbsolutePanel';_.tI=60;function nt(){nt=DN;uD(),wD;}
function lt(b,a){uD(),wD;ot(b,a);return b;}
function mt(b,a){if(b.c===null){b.c=hr(new gr());}kK(b.c,a);}
function ot(b,a){DC(b,a);vB(b,7041);}
function pt(a){switch(Dk(a)){case 1:if(this.c!==null){jr(this.c,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function qt(a){ot(this,a);}
function kt(){}
_=kt.prototype=new kC();_.cc=pt;_.Ec=qt;_.tN=gO+'FocusWidget';_.tI=61;_.c=null;function vq(){vq=DN;uD(),wD;}
function uq(b,a){uD(),wD;lt(b,a);return b;}
function tq(){}
_=tq.prototype=new kt();_.tN=gO+'ButtonBase';_.tI=62;function xq(a){nr(a);a.e=mk();a.d=jk();bk(a.e,a.d);a.Ec(a.e);return a;}
function zq(c,d,a){var b;b=kl(d.jb());zl(b,'height',a);}
function Aq(c,b,a){zl(b,'align',a.a);}
function Bq(c,b,a){Dl(b,'verticalAlign',a.a);}
function Cq(b,c,d){var a;a=kl(c.jb());zl(a,'width',d);}
function wq(){}
_=wq.prototype=new lr();_.tN=gO+'CellPanel';_.tI=63;_.d=null;_.e=null;function Fq(){Fq=DN;uD(),wD;}
function Eq(b,a){var c;uD(),wD;uq(b,ik());b.a=a;b.b=hk();El(b.a,hl(b.jb()));El(b.jb(),0);bk(b.jb(),b.a);bk(b.jb(),b.b);c='check'+ ++fr;zl(b.a,'id',c);zl(b.b,'htmlFor',c);return b;}
function ar(b){var a;a=b.xb()?'checked':'defaultChecked';return el(b.a,a);}
function br(b,a){xl(b.a,'checked',a);xl(b.a,'defaultChecked',a);}
function cr(b,a){Cl(b.b,a);}
function dr(){Al(this.a,this);}
function er(){Al(this.a,null);br(this,ar(this));}
function Dq(){}
_=Dq.prototype=new tq();_.lc=dr;_.wc=er;_.tN=gO+'CheckBox';_.tI=64;_.a=null;_.b=null;var fr=0;function hr(a){iK(a);return a;}
function jr(d,c){var a,b;for(a=sI(d);hI(a);){b=oi(iI(a),22);b.dc(c);}}
function gr(){}
_=gr.prototype=new gK();_.tN=gO+'ClickListenerCollection';_.tI=65;function Cr(a,b){if(a.d!==null){throw aF(new EE(),'Composite.initWidget() may only be called once.');}CC(b);a.Ec(b.jb());a.d=b;EC(b,a);}
function Dr(){if(this.d===null){throw aF(new EE(),'initWidget() was never called in '+hh(this));}return this.q;}
function Er(){if(this.d!==null){return this.d.xb();}return false;}
function Fr(){this.d.ac();this.lc();}
function as(){try{this.wc();}finally{this.d.ec();}}
function Ar(){}
_=Ar.prototype=new kC();_.jb=Dr;_.xb=Er;_.ac=Fr;_.ec=as;_.tN=gO+'Composite';_.tI=66;_.d=null;function cs(a){nr(a);a.Ec(ek());return a;}
function es(b,c){var a;a=c.jb();Dl(a,'width','100%');Dl(a,'height','100%');c.bd(false);}
function fs(b,c,a){vr(b,c,b.jb(),a,true);es(b,c);}
function gs(b,c){var a;a=xr(b,c);if(a){hs(b,c);if(b.b===c){b.b=null;}}return a;}
function hs(a,b){Dl(b.jb(),'width','');Dl(b.jb(),'height','');b.bd(true);}
function is(b,a){qr(b,a);if(b.b!==null){b.b.bd(false);}b.b=ur(b,a);b.b.bd(true);}
function js(a){return gs(this,a);}
function bs(){}
_=bs.prototype=new lr();_.Cc=js;_.tN=gO+'DeckPanel';_.tI=67;_.b=null;function mz(a){nz(a,ek());return a;}
function nz(b,a){b.Ec(a);return b;}
function oz(a,b){if(a.n!==null){throw aF(new EE(),'SimplePanel can only contain one child widget');}a.cd(b);}
function qz(a,b){if(b===a.n){return;}if(b!==null){CC(b);}if(a.n!==null){a.Cc(a.n);}a.n=b;if(b!==null){bk(a.fb(),a.n.jb());sx(a,b);}}
function rz(){return this.jb();}
function sz(){return iz(new gz(),this);}
function tz(a){if(this.n!==a){return false;}ux(this,a);rl(this.fb(),a.jb());this.n=null;return true;}
function uz(a){qz(this,a);}
function fz(){}
_=fz.prototype=new rx();_.fb=rz;_.yb=sz;_.Cc=tz;_.cd=uz;_.tN=gO+'SimplePanel';_.tI=68;_.n=null;function Fx(){Fx=DN;oy=new xD();}
function Ax(a){Fx();nz(a,zD(oy));fy(a,0,0);return a;}
function Bx(b,a){Fx();Ax(b);b.g=a;return b;}
function Cx(c,a,b){Fx();Bx(c,a);c.k=b;return c;}
function Dx(b,a){if(a.blur){a.blur();}}
function Ex(c){var a,b,d;a=c.l;if(!a){gy(c,false);jy(c);}b=si((yn()-by(c))/2);d=si((xn()-ay(c))/2);fy(c,zn()+b,An()+d);if(!a){gy(c,true);}}
function ay(a){return oB(a);}
function by(a){return pB(a);}
function cy(b,a){if(!b.l){return;}b.l=false;pq(bz(),b);b.jb();}
function dy(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.Fc(a.h);}if(a.i!==null){b.dd(a.i);}}}
function ey(e,b){var a,c,d,f;d=Bk(b);c=ol(e.jb(),d);f=Dk(b);switch(f){case 128:{a=(qi(yk(b)),Bw(b),true);return a&&(c|| !e.k);}case 512:{a=(qi(yk(b)),Bw(b),true);return a&&(c|| !e.k);}case 256:{a=(qi(yk(b)),Bw(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((Fj(),tl)!==null){return true;}if(!c&&e.g&&f==4){cy(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){Dx(e,d);return false;}}}return !e.k||c;}
function fy(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.jb();Dl(a,'left',b+'px');Dl(a,'top',d+'px');}
function gy(a,b){Dl(a.jb(),'visibility',b?'visible':'hidden');a.jb();}
function hy(a,b){qz(a,b);dy(a);}
function iy(a,b){a.i=b;dy(a);if(EG(b)==0){a.i=null;}}
function jy(a){if(a.l){return;}a.l=true;ak(a);Dl(a.jb(),'position','absolute');if(a.m!=(-1)){fy(a,a.j,a.m);}mq(bz(),a);a.jb();}
function ky(){return this.jb();}
function ly(){return ay(this);}
function my(){return by(this);}
function ny(){return this.jb();}
function py(){sl(this);BC(this);}
function qy(a){return ey(this,a);}
function ry(a){this.h=a;dy(this);if(EG(a)==0){this.h=null;}}
function sy(a){gy(this,a);}
function ty(a){hy(this,a);}
function uy(a){iy(this,a);}
function zx(){}
_=zx.prototype=new fz();_.fb=ky;_.ob=ly;_.pb=my;_.qb=ny;_.ec=py;_.jc=qy;_.Fc=ry;_.bd=sy;_.cd=ty;_.dd=uy;_.tN=gO+'PopupPanel';_.tI=69;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var oy;function os(){os=DN;Fx();}
function ls(a){a.a=mv(new rt());a.f=Ds(new zs());}
function ms(b,a){os();ns(b,a,true);return b;}
function ns(c,a,b){os();Cx(c,a,b);ls(c);iv(c.f,0,0,c.a);c.f.Fc('100%');dv(c.f,0);fv(c.f,0);gv(c.f,0);bu(c.f.b,1,0,'100%');eu(c.f.b,1,0,'100%');au(c.f.b,1,0,(xv(),yv),(Fv(),bw));hy(c,c.f);uB(c,'gwt-DialogBox');uB(c.a,'Caption');ax(c.a,c);return c;}
function ps(b,a){qv(b.a,a);}
function qs(a){if(Dk(a)==4){if(ol(this.a.jb(),Bk(a))){Ek(a);}}return ey(this,a);}
function rs(a,b,c){this.e=true;vl(this.a.jb());this.c=b;this.d=c;}
function ss(a){}
function ts(a){}
function us(c,d,e){var a,b;if(this.e){a=d+mB(this);b=e+nB(this);fy(this,a-this.c,b-this.d);}}
function vs(a,b,c){this.e=false;ql(this.a.jb());}
function ws(a){if(this.b!==a){return false;}cv(this.f,a);return true;}
function xs(a){if(this.b!==null){cv(this.f,this.b);}if(a!==null){iv(this.f,1,0,a);}this.b=a;}
function ys(a){iy(this,a);this.f.dd('100%');}
function ks(){}
_=ks.prototype=new zx();_.jc=qs;_.mc=rs;_.nc=ss;_.oc=ts;_.pc=us;_.qc=vs;_.Cc=ws;_.cd=xs;_.dd=ys;_.tN=gO+'DialogBox';_.tI=70;_.b=null;_.c=0;_.d=0;_.e=false;function yu(a){a.e=ou(new ju());}
function zu(a){yu(a);a.d=mk();a.a=jk();bk(a.d,a.a);a.Ec(a.d);vB(a,1);return a;}
function Au(c,a){var b;b=at(c);if(a>=b||a<0){throw eF(new cF(),'Row index: '+a+', Row size: '+b);}}
function Bu(e,c,b,a){var d;d=Ft(e.b,c,b);bv(e,d,a);return d;}
function Du(c,b,a){return b.rows[a].cells.length;}
function Eu(a){return Fu(a,a.a);}
function Fu(b,a){return a.rows.length;}
function av(b,a){var c;if(a!=at(b)){Au(b,a);}c=lk();nl(b.a,c,a);return a;}
function bv(d,c,a){var b,e;b=il(c);e=null;if(b!==null){e=qu(d.e,b);}if(e!==null){cv(d,e);return true;}else{if(a){Bl(c,'');}return false;}}
function cv(b,c){var a;if(c.p!==b){return false;}ux(b,c);a=c.jb();rl(kl(a),a);tu(b.e,a);return true;}
function dv(a,b){zl(a.d,'border',''+b);}
function ev(b,a){b.b=a;}
function fv(b,a){yl(b.d,'cellPadding',a);}
function gv(b,a){yl(b.d,'cellSpacing',a);}
function hv(b,a){b.c=a;iu(b.c);}
function iv(d,b,a,e){var c;ct(d,b,a);if(e!==null){CC(e);c=Bu(d,b,a,true);ru(d.e,e);bk(c,e.jb());sx(d,e);}}
function jv(){return uu(this.e);}
function kv(a){switch(Dk(a)){case 1:{break;}default:}}
function lv(a){return cv(this,a);}
function st(){}
_=st.prototype=new rx();_.yb=jv;_.cc=kv;_.Cc=lv;_.tN=gO+'HTMLTable';_.tI=71;_.a=null;_.b=null;_.c=null;_.d=null;function Ds(a){zu(a);ev(a,Bs(new As(),a));hv(a,gu(new fu(),a));return a;}
function Fs(b,a){Au(b,a);return Du(b,b.a,a);}
function at(a){return Eu(a);}
function bt(b,a){return av(b,a);}
function ct(e,d,b){var a,c;dt(e,d);if(b<0){throw eF(new cF(),'Cannot create a column with a negative index: '+b);}a=Fs(e,d);c=b+1-a;if(c>0){et(e.a,d,c);}}
function dt(d,b){var a,c;if(b<0){throw eF(new cF(),'Cannot create a row with a negative index: '+b);}c=at(d);for(a=c;a<=b;a++){bt(d,a);}}
function et(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function zs(){}
_=zs.prototype=new st();_.tN=gO+'FlexTable';_.tI=72;function Ct(b,a){b.a=a;return b;}
function Et(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function Ft(c,b,a){return Et(c,c.a.a,b,a);}
function au(d,c,a,b,e){cu(d,c,a,b);du(d,c,a,e);}
function bu(e,d,a,c){var b;ct(e.a,d,a);b=Et(e,e.a.a,d,a);zl(b,'height',c);}
function cu(e,d,b,a){var c;ct(e.a,d,b);c=Et(e,e.a.a,d,b);zl(c,'align',a.a);}
function du(d,c,b,a){ct(d.a,c,b);Dl(Et(d,d.a.a,c,b),'verticalAlign',a.a);}
function eu(c,b,a,d){ct(c.a,b,a);zl(Et(c,c.a.a,b,a),'width',d);}
function Bt(){}
_=Bt.prototype=new eG();_.tN=gO+'HTMLTable$CellFormatter';_.tI=73;function Bs(b,a){Ct(b,a);return b;}
function As(){}
_=As.prototype=new Bt();_.tN=gO+'FlexTable$FlexCellFormatter';_.tI=74;function gt(a){nr(a);a.Ec(ek());return a;}
function ht(a,b){or(a,b,a.jb());}
function jt(b,c,a){vr(b,c,b.jb(),a,true);}
function ft(){}
_=ft.prototype=new lr();_.tN=gO+'FlowPanel';_.tI=75;function Dw(a){a.Ec(ek());vB(a,131197);uB(a,'gwt-Label');return a;}
function Ew(b,a){Dw(b);ex(b,a);return b;}
function Fw(b,a){if(b.b===null){b.b=hr(new gr());}kK(b.b,a);}
function ax(b,a){if(b.c===null){b.c=ix(new hx());}kK(b.c,a);}
function cx(a){return jl(a.jb());}
function dx(b,a){switch(Dk(a)){case 1:if(b.b!==null){jr(b.b,b);}break;case 4:case 8:case 64:case 16:case 32:if(b.c!==null){mx(b.c,b,a);}break;case 131072:break;}}
function ex(b,a){Cl(b.jb(),a);}
function fx(a,b){Dl(a.jb(),'whiteSpace',b?'normal':'nowrap');}
function gx(a){dx(this,a);}
function Cw(){}
_=Cw.prototype=new kC();_.cc=gx;_.tN=gO+'Label';_.tI=76;_.b=null;_.c=null;function mv(a){Dw(a);a.Ec(ek());vB(a,125);uB(a,'gwt-HTML');return a;}
function nv(b,a){mv(b);qv(b,a);return b;}
function ov(b,a,c){nv(b,a);fx(b,c);return b;}
function qv(b,a){Bl(b.jb(),a);}
function rt(){}
_=rt.prototype=new Cw();_.tN=gO+'HTML';_.tI=77;function ut(a){{xt(a);}}
function vt(b,a){b.b=a;ut(b);return b;}
function xt(a){while(++a.a<a.b.b.b){if(pK(a.b.b,a.a)!==null){return;}}}
function yt(a){return a.a<a.b.b.b;}
function zt(){return yt(this);}
function At(){var a;if(!yt(this)){throw zN(new yN());}a=pK(this.b.b,this.a);xt(this);return a;}
function tt(){}
_=tt.prototype=new eG();_.wb=zt;_.Eb=At;_.tN=gO+'HTMLTable$1';_.tI=78;_.a=(-1);function gu(b,a){b.b=a;return b;}
function iu(a){if(a.a===null){a.a=fk('colgroup');nl(a.b.d,a.a,0);bk(a.a,fk('col'));}}
function fu(){}
_=fu.prototype=new eG();_.tN=gO+'HTMLTable$ColumnFormatter';_.tI=79;_.a=null;function nu(a){a.b=iK(new gK());}
function ou(a){nu(a);return a;}
function qu(c,a){var b;b=wu(a);if(b<0){return null;}return oi(pK(c.b,b),14);}
function ru(b,c){var a;if(b.a===null){a=b.b.b;kK(b.b,c);}else{a=b.a.a;vK(b.b,a,c);b.a=b.a.b;}xu(c.jb(),a);}
function su(c,a,b){vu(a);vK(c.b,b,null);c.a=lu(new ku(),b,c.a);}
function tu(c,a){var b;b=wu(a);su(c,a,b);}
function uu(a){return vt(new tt(),a);}
function vu(a){a['__widgetID']=null;}
function wu(a){var b=a['__widgetID'];return b==null?-1:b;}
function xu(a,b){a['__widgetID']=b;}
function ju(){}
_=ju.prototype=new eG();_.tN=gO+'HTMLTable$WidgetMapper';_.tI=80;_.a=null;function lu(c,a,b){c.a=a;c.b=b;return c;}
function ku(){}
_=ku.prototype=new eG();_.tN=gO+'HTMLTable$WidgetMapper$FreeNode';_.tI=81;_.a=0;_.b=null;function xv(){xv=DN;yv=vv(new uv(),'center');zv=vv(new uv(),'left');vv(new uv(),'right');}
var yv,zv;function vv(b,a){b.a=a;return b;}
function uv(){}
_=uv.prototype=new eG();_.tN=gO+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=82;_.a=null;function Fv(){Fv=DN;aw=Dv(new Cv(),'bottom');bw=Dv(new Cv(),'middle');cw=Dv(new Cv(),'top');}
var aw,bw,cw;function Dv(a,b){a.a=b;return a;}
function Cv(){}
_=Cv.prototype=new eG();_.tN=gO+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=83;_.a=null;function gw(a){a.a=(xv(),zv);a.c=(Fv(),cw);}
function hw(a){xq(a);gw(a);a.b=lk();bk(a.d,a.b);zl(a.e,'cellSpacing','0');zl(a.e,'cellPadding','0');return a;}
function iw(b,c){var a;a=kw(b);bk(b.b,a);or(b,c,a);}
function kw(b){var a;a=kk();Aq(b,a,b.a);Bq(b,a,b.c);return a;}
function lw(c,d,a){var b;rr(c,a);b=kw(c);nl(c.b,b,a);vr(c,d,b,a,false);}
function mw(c,d){var a,b;b=kl(d.jb());a=xr(c,d);if(a){rl(c.b,b);}return a;}
function nw(b,a){b.c=a;}
function ow(a){return mw(this,a);}
function fw(){}
_=fw.prototype=new wq();_.Cc=ow;_.tN=gO+'HorizontalPanel';_.tI=84;_.b=null;function qw(a){a.Ec(ek());bk(a.jb(),a.a=dk());vB(a,1);uB(a,'gwt-Hyperlink');return a;}
function rw(c,b,a){qw(c);ww(c,b);vw(c,a);return c;}
function sw(b,a){if(b.b===null){b.b=hr(new gr());}kK(b.b,a);}
function uw(a){return jl(a.a);}
function vw(b,a){b.c=a;zl(b.a,'href','#'+a);}
function ww(b,a){Cl(b.a,a);}
function xw(a){if(Dk(a)==1){if(this.b!==null){jr(this.b,this);}ym(this.c);Ek(a);}}
function pw(){}
_=pw.prototype=new kC();_.cc=xw;_.tN=gO+'Hyperlink';_.tI=85;_.a=null;_.b=null;_.c=null;function Bw(a){return (Ak(a)?1:0)|(zk(a)?8:0)|(wk(a)?2:0)|(sk(a)?4:0);}
function ix(a){iK(a);return a;}
function kx(d,c,e,f){var a,b;for(a=sI(d);hI(a);){b=oi(iI(a),23);b.mc(c,e,f);}}
function lx(d,c){var a,b;for(a=sI(d);hI(a);){b=oi(iI(a),23);b.nc(c);}}
function mx(e,c,a){var b,d,f,g,h;d=c.jb();g=uk(a)-al(d)+fl(d,'scrollLeft')+zn();h=vk(a)-bl(d)+fl(d,'scrollTop')+An();switch(Dk(a)){case 4:kx(e,c,g,h);break;case 8:px(e,c,g,h);break;case 64:ox(e,c,g,h);break;case 16:b=xk(a);if(!ol(d,b)){lx(e,c);}break;case 32:f=Ck(a);if(!ol(d,f)){nx(e,c);}break;}}
function nx(d,c){var a,b;for(a=sI(d);hI(a);){b=oi(iI(a),23);b.oc(c);}}
function ox(d,c,e,f){var a,b;for(a=sI(d);hI(a);){b=oi(iI(a),23);b.pc(c,e,f);}}
function px(d,c,e,f){var a,b;for(a=sI(d);hI(a);){b=oi(iI(a),23);b.qc(c,e,f);}}
function hx(){}
_=hx.prototype=new gK();_.tN=gO+'MouseListenerCollection';_.tI=86;function yy(){yy=DN;uD(),wD;}
function wy(b,a){uD(),wD;Eq(b,gk(a));uB(b,'gwt-RadioButton');return b;}
function xy(c,b,a){uD(),wD;wy(c,b);cr(c,a);return c;}
function vy(){}
_=vy.prototype=new Dq();_.tN=gO+'RadioButton';_.tI=87;function Fy(){Fy=DN;ez=pM(new tL());}
function Ey(b,a){Fy();lq(b);if(a===null){a=az();}b.Ec(a);b.ac();return b;}
function bz(){Fy();return cz(null);}
function cz(c){Fy();var a,b;b=oi(vM(ez,c),24);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=dl(c))){return null;}}if(ez.c==0){dz();}wM(ez,c,b=Ey(new zy(),a));return b;}
function az(){Fy();return $doc.body;}
function dz(){Fy();pn(new Ay());}
function zy(){}
_=zy.prototype=new kq();_.tN=gO+'RootPanel';_.tI=88;var ez;function Cy(){var a,b;for(b=mJ(AJ((Fy(),ez)));tJ(b);){a=oi(uJ(b),24);if(a.xb()){a.ec();}}}
function Dy(){return null;}
function Ay(){}
_=Ay.prototype=new eG();_.xc=Cy;_.yc=Dy;_.tN=gO+'RootPanel$1';_.tI=89;function hz(a){a.a=a.b.n!==null;}
function iz(b,a){b.b=a;hz(b);return b;}
function kz(){return this.a;}
function lz(){if(!this.a||this.b.n===null){throw zN(new yN());}this.a=false;return this.b.n;}
function gz(){}
_=gz.prototype=new eG();_.wb=kz;_.Eb=lz;_.tN=gO+'SimplePanel$1';_.tI=90;function Ez(a){a.a=hw(new fw());}
function Fz(c){var a,b;Ez(c);Cr(c,c.a);vB(c,1);uB(c,'gwt-TabBar');nw(c.a,(Fv(),aw));a=ov(new rt(),'&nbsp;',true);b=ov(new rt(),'&nbsp;',true);uB(a,'gwt-TabBarFirst');uB(b,'gwt-TabBarRest');a.Fc('100%');b.Fc('100%');iw(c.a,a);iw(c.a,b);a.Fc('100%');zq(c.a,a,'100%');Cq(c.a,b,'100%');return c;}
function aA(b,a){if(b.c===null){b.c=lA(new kA());}kK(b.c,a);}
function bA(b,a){if(a<0||a>eA(b)){throw dF(new cF());}}
function cA(b,a){if(a<(-1)||a>=eA(b)){throw dF(new cF());}}
function eA(a){return a.a.f.b-2;}
function fA(e,d,a,b){var c;bA(e,b);if(a){c=nv(new rt(),d);}else{c=Ew(new Cw(),d);}fx(c,false);Fw(c,e);uB(c,'gwt-TabBarItem');lw(e.a,c,b+1);}
function gA(b,a){var c;cA(b,a);c=ur(b.a,a+1);if(c===b.b){b.b=null;}mw(b.a,c);}
function hA(b,a){cA(b,a);if(b.c!==null){if(!nA(b.c,b,a)){return false;}}iA(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=ur(b.a,a+1);iA(b,b.b,true);if(b.c!==null){oA(b.c,b,a);}return true;}
function iA(c,a,b){if(a!==null){if(b){kB(a,'gwt-TabBarItem-selected');}else{qB(a,'gwt-TabBarItem-selected');}}}
function jA(b){var a;for(a=1;a<this.a.f.b-1;++a){if(ur(this.a,a)===b){hA(this,a-1);return;}}}
function Dz(){}
_=Dz.prototype=new Ar();_.dc=jA;_.tN=gO+'TabBar';_.tI=91;_.b=null;_.c=null;function lA(a){iK(a);return a;}
function nA(e,c,d){var a,b;for(a=sI(e);hI(a);){b=oi(iI(a),25);if(!b.bc(c,d)){return false;}}return true;}
function oA(e,c,d){var a,b;for(a=sI(e);hI(a);){b=oi(iI(a),25);b.vc(c,d);}}
function kA(){}
_=kA.prototype=new gK();_.tN=gO+'TabListenerCollection';_.tI=92;function CA(a){a.b=yA(new xA());a.a=sA(new rA(),a.b);}
function DA(b){var a;CA(b);a=eC(new cC());fC(a,b.b);fC(a,b.a);zq(a,b.a,'100%');b.b.dd('100%');aA(b.b,b);Cr(b,a);uB(b,'gwt-TabPanel');uB(b.a,'gwt-TabPanelBottom');return b;}
function FA(b,c,a){cB(b,c,a,b.a.f.b);}
function EA(b,a){if(b.c===null){b.c=lA(new kA());}kK(b.c,a);}
function bB(b,a){return ur(b.a,a);}
function dB(d,e,c,a,b){uA(d.a,e,c,a,b);}
function cB(c,d,b,a){dB(c,d,b,false,a);}
function eB(b,a){hA(b.b,a);}
function fB(){return wr(this.a);}
function gB(a,b){if(this.c!==null){return nA(this.c,this,b);}return true;}
function hB(a,b){is(this.a,b);if(this.c!==null){oA(this.c,this,b);}}
function iB(a){return vA(this.a,a);}
function qA(){}
_=qA.prototype=new Ar();_.yb=fB;_.bc=gB;_.vc=hB;_.Cc=iB;_.tN=gO+'TabPanel';_.tI=93;_.c=null;function sA(b,a){cs(b);b.a=a;return b;}
function uA(e,f,d,a,b){var c;c=tr(e,f);if(c!=(-1)){vA(e,f);if(c<b){b--;}}AA(e.a,d,a,b);fs(e,f,b);}
function vA(b,c){var a;a=tr(b,c);if(a!=(-1)){BA(b.a,a);return gs(b,c);}return false;}
function wA(a){return vA(this,a);}
function rA(){}
_=rA.prototype=new bs();_.Cc=wA;_.tN=gO+'TabPanel$TabbedDeckPanel';_.tI=94;_.a=null;function yA(a){Fz(a);return a;}
function AA(d,c,a,b){fA(d,c,a,b);}
function BA(b,a){gA(b,a);}
function xA(){}
_=xA.prototype=new Dz();_.tN=gO+'TabPanel$UnmodifiableTabBar';_.tI=95;function dC(a){a.a=(xv(),zv);a.b=(Fv(),cw);}
function eC(a){xq(a);dC(a);zl(a.e,'cellSpacing','0');zl(a.e,'cellPadding','0');return a;}
function fC(b,d){var a,c;c=lk();a=hC(b);bk(c,a);bk(b.d,c);or(b,d,a);}
function hC(b){var a;a=kk();Aq(b,a,b.a);Bq(b,a,b.b);return a;}
function iC(c,e,a){var b,d;rr(c,a);d=lk();b=hC(c);bk(d,b);nl(c.d,d,a);vr(c,e,b,a,false);}
function jC(c){var a,b;b=kl(c.jb());a=xr(this,c);if(a){rl(this.d,kl(b));}return a;}
function cC(){}
_=cC.prototype=new wq();_.Cc=jC;_.tN=gO+'VerticalPanel';_.tI=96;function rC(b,a){b.a=ii('[Lcom.google.gwt.user.client.ui.Widget;',[173],[14],[4],null);return b;}
function sC(a,b){wC(a,b,a.b);}
function uC(b,a){if(a<0||a>=b.b){throw dF(new cF());}return b.a[a];}
function vC(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function wC(d,e,a){var b,c;if(a<0||a>d.b){throw dF(new cF());}if(d.b==d.a.a){c=ii('[Lcom.google.gwt.user.client.ui.Widget;',[173],[14],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ki(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ki(d.a,b,d.a[b-1]);}ki(d.a,a,e);}
function xC(a){return nC(new mC(),a);}
function yC(c,b){var a;if(b<0||b>=c.b){throw dF(new cF());}--c.b;for(a=b;a<c.b;++a){ki(c.a,a,c.a[a+1]);}ki(c.a,c.b,null);}
function zC(b,c){var a;a=vC(b,c);if(a==(-1)){throw zN(new yN());}yC(b,a);}
function lC(){}
_=lC.prototype=new eG();_.tN=gO+'WidgetCollection';_.tI=97;_.a=null;_.b=0;function nC(b,a){b.b=a;return b;}
function pC(){return this.a<this.b.b-1;}
function qC(){if(this.a>=this.b.b){throw zN(new yN());}return this.b.a[++this.a];}
function mC(){}
_=mC.prototype=new eG();_.wb=pC;_.Eb=qC;_.tN=gO+'WidgetCollection$WidgetIterator';_.tI=98;_.a=(-1);function uD(){uD=DN;vD=qD(new pD());wD=vD!==null?tD(new iD()):vD;}
function tD(a){uD();return a;}
function iD(){}
_=iD.prototype=new eG();_.tN=hO+'FocusImpl';_.tI=99;var vD,wD;function mD(){mD=DN;uD();}
function kD(a){nD(a);oD(a);sD(a);}
function lD(a){mD();tD(a);kD(a);return a;}
function nD(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function oD(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function jD(){}
_=jD.prototype=new iD();_.tN=hO+'FocusImplOld';_.tI=100;function rD(){rD=DN;mD();}
function qD(a){rD();lD(a);return a;}
function sD(b){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus();},0);};}
function pD(){}
_=pD.prototype=new jD();_.tN=hO+'FocusImplSafari';_.tI=101;function zD(a){return ek();}
function xD(){}
_=xD.prototype=new eG();_.tN=hO+'PopupImpl';_.tI=102;function DD(){}
_=DD.prototype=new eG();_.tN=iO+'OutputStream';_.tI=103;function BD(){}
_=BD.prototype=new DD();_.tN=iO+'FilterOutputStream';_.tI=104;function FD(){}
_=FD.prototype=new BD();_.tN=iO+'PrintStream';_.tI=105;function dE(){dE=DN;mG();}
function cE(a){dE();kG(a);return a;}
function bE(){}
_=bE.prototype=new jG();_.tN=jO+'ArrayStoreException';_.tI=106;function gE(){gE=DN;hE=fE(new eE(),false);iE=fE(new eE(),true);}
function fE(a,b){gE();a.a=b;return a;}
function jE(a){return pi(a,30)&&oi(a,30).a==this.a;}
function kE(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function lE(){return this.a?'true':'false';}
function mE(a){gE();return a?iE:hE;}
function eE(){}
_=eE.prototype=new eG();_.eQ=jE;_.hC=kE;_.tS=lE;_.tN=jO+'Boolean';_.tI=107;_.a=false;var hE,iE;function qE(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+sF(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function uE(){uE=DN;mG();}
function sE(a){uE();kG(a);return a;}
function tE(b,a){uE();lG(b,a);return b;}
function rE(){}
_=rE.prototype=new jG();_.tN=jO+'ClassCastException';_.tI=108;function DE(){DE=DN;mG();}
function CE(b,a){DE();lG(b,a);return b;}
function BE(){}
_=BE.prototype=new jG();_.tN=jO+'IllegalArgumentException';_.tI=109;function bF(){bF=DN;mG();}
function FE(a){bF();kG(a);return a;}
function aF(b,a){bF();lG(b,a);return b;}
function EE(){}
_=EE.prototype=new jG();_.tN=jO+'IllegalStateException';_.tI=110;function fF(){fF=DN;mG();}
function dF(a){fF();kG(a);return a;}
function eF(b,a){fF();lG(b,a);return b;}
function cF(){}
_=cF.prototype=new jG();_.tN=jO+'IndexOutOfBoundsException';_.tI=111;function EF(){EF=DN;{dG();}}
function FF(a){EF();return isNaN(a);}
function aG(e,d,c,h){EF();var a,b,f,g;if(e===null){throw CF(new BF(),'Unable to parse null');}b=EG(e);f=b>0&&xG(e,0)==45?1:0;for(a=f;a<b;a++){if(qE(xG(e,a),d)==(-1)){throw CF(new BF(),'Could not parse '+e+' in radix '+d);}}g=bG(e,d);if(FF(g)){throw CF(new BF(),'Unable to parse '+e);}else if(g<c||g>h){throw CF(new BF(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function bG(b,a){EF();return parseInt(b,a);}
function dG(){EF();cG=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var cG=null;function hF(){hF=DN;EF();}
function kF(a){hF();return lF(a,10);}
function lF(b,a){hF();return ri(aG(b,a,(-2147483648),2147483647));}
function mF(a){hF();return kH(a);}
var iF=2147483647,jF=(-2147483648);function pF(a){return a<0?-a:a;}
function qF(a){return a<0?-a:a;}
function rF(a,b){return a>b?a:b;}
function sF(a,b){return a<b?a:b;}
function tF(a){return Math.sqrt(a);}
function wF(){wF=DN;mG();}
function vF(a){wF();kG(a);return a;}
function uF(){}
_=uF.prototype=new jG();_.tN=jO+'NegativeArraySizeException';_.tI=112;function zF(){zF=DN;mG();}
function yF(b,a){zF();lG(b,a);return b;}
function xF(){}
_=xF.prototype=new jG();_.tN=jO+'NullPointerException';_.tI=113;function DF(){DF=DN;DE();}
function CF(b,a){DF();CE(b,a);return b;}
function BF(){}
_=BF.prototype=new BE();_.tN=jO+'NumberFormatException';_.tI=114;function xG(b,a){return b.charCodeAt(a);}
function zG(f,c){var a,b,d,e,g,h;h=EG(f);e=EG(c);b=sF(h,e);for(a=0;a<b;a++){g=xG(f,a);d=xG(c,a);if(g!=d){return g-d;}}return h-e;}
function AG(b,a){if(!pi(a,1))return false;return dH(b,a);}
function BG(b,a){return b.indexOf(a);}
function CG(c,b,a){return c.indexOf(b,a);}
function DG(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function EG(a){return a.length;}
function FG(c,a,b){b=eH(b);return c.replace(RegExp(a,'g'),b);}
function aH(b,a){return b.substr(a,b.length-a);}
function bH(c,a,b){return c.substr(a,b-a);}
function cH(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function dH(a,b){return String(a)==b;}
function eH(b){var a;a=0;while(0<=(a=CG(b,'\\',a))){if(xG(b,a+1)==36){b=bH(b,0,a)+'$'+aH(b,++a);}else{b=bH(b,0,a)+aH(b,++a);}}return b;}
function fH(a){if(pi(a,1)){return zG(this,oi(a,1));}else{throw tE(new rE(),'Cannot compare '+a+" with String '"+this+"'");}}
function gH(a){return AG(this,a);}
function iH(){var a=hH;if(!a){a=hH={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function jH(){return this;}
function kH(a){return ''+a;}
function lH(a){return a!==null?a.tS():'null';}
_=String.prototype;_.v=fH;_.eQ=gH;_.hC=iH;_.tS=jH;_.tN=jO+'String';_.tI=2;var hH=null;function pG(a){rG(a);return a;}
function qG(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function rG(a){sG(a,'');}
function sG(b,a){b.js=[a];b.length=a.length;}
function uG(a){a.Fb();return a.js[0];}
function vG(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function wG(){return uG(this);}
function oG(){}
_=oG.prototype=new eG();_.Fb=vG;_.tS=wG;_.tN=jO+'StringBuffer';_.tI=115;function nH(){nH=DN;pH=new FD();}
function oH(){nH();return new Date().getTime();}
function qH(a){nH();return nh(a);}
var pH;function CH(){CH=DN;mG();}
function AH(a){CH();kG(a);return a;}
function BH(b,a){CH();lG(b,a);return b;}
function zH(){}
_=zH.prototype=new jG();_.tN=jO+'UnsupportedOperationException';_.tI=116;function fI(b,a){b.c=a;return b;}
function hI(a){return a.a<a.c.ed();}
function iI(a){if(!hI(a)){throw zN(new yN());}return a.c.ub(a.b=a.a++);}
function jI(a){if(a.b<0){throw FE(new EE());}a.c.Bc(a.b);a.a=a.b;a.b=(-1);}
function kI(){return hI(this);}
function lI(){return iI(this);}
function mI(){jI(this);}
function eI(){}
_=eI.prototype=new eG();_.wb=kI;_.Eb=lI;_.Ac=mI;_.tN=kO+'AbstractList$IteratorImpl';_.tI=117;_.a=0;_.b=(-1);function oI(b,a){fI(b,a);return b;}
function nI(){}
_=nI.prototype=new eI();_.tN=kO+'AbstractList$ListIteratorImpl';_.tI=118;function yJ(f,d,e){var a,b,c;for(b=kM(f.ab());cM(b);){a=dM(b);c=a.mb();if(d===null?c===null:d.eQ(c)){if(e){eM(b);}return a;}}return null;}
function zJ(b){var a;a=b.ab();return CI(new BI(),b,a);}
function AJ(b){var a;a=uM(b);return kJ(new jJ(),b,a);}
function BJ(a){return yJ(this,a,false)!==null;}
function CJ(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!pi(d,32)){return false;}f=oi(d,32);c=zJ(this);e=f.zb();if(!dK(c,e)){return false;}for(a=EI(c);fJ(a);){b=gJ(a);h=this.vb(b);g=f.vb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function DJ(b){var a;a=yJ(this,b,false);return a===null?null:a.sb();}
function EJ(){var a,b,c;b=0;for(c=kM(this.ab());cM(c);){a=dM(c);b+=a.hC();}return b;}
function FJ(){return zJ(this);}
function aK(){var a,b,c,d;d='{';a=false;for(c=kM(this.ab());cM(c);){b=dM(c);if(a){d+=', ';}else{a=true;}d+=lH(b.mb());d+='=';d+=lH(b.sb());}return d+'}';}
function AI(){}
_=AI.prototype=new eG();_.z=BJ;_.eQ=CJ;_.vb=DJ;_.hC=EJ;_.zb=FJ;_.tS=aK;_.tN=kO+'AbstractMap';_.tI=119;function dK(e,b){var a,c,d;if(b===e){return true;}if(!pi(b,33)){return false;}c=oi(b,33);if(c.ed()!=e.ed()){return false;}for(a=c.yb();a.wb();){d=a.Eb();if(!e.A(d)){return false;}}return true;}
function eK(a){return dK(this,a);}
function fK(){var a,b,c;a=0;for(b=this.yb();b.wb();){c=b.Eb();if(c!==null){a+=c.hC();}}return a;}
function bK(){}
_=bK.prototype=new DH();_.eQ=eK;_.hC=fK;_.tN=kO+'AbstractSet';_.tI=120;function CI(b,a,c){b.a=a;b.b=c;return b;}
function EI(b){var a;a=kM(b.b);return dJ(new cJ(),b,a);}
function FI(a){return this.a.z(a);}
function aJ(){return EI(this);}
function bJ(){return this.b.a.c;}
function BI(){}
_=BI.prototype=new bK();_.A=FI;_.yb=aJ;_.ed=bJ;_.tN=kO+'AbstractMap$1';_.tI=121;function dJ(b,a,c){b.a=c;return b;}
function fJ(a){return a.a.wb();}
function gJ(b){var a;a=b.a.Eb();return a.mb();}
function hJ(){return fJ(this);}
function iJ(){return gJ(this);}
function cJ(){}
_=cJ.prototype=new eG();_.wb=hJ;_.Eb=iJ;_.tN=kO+'AbstractMap$2';_.tI=122;function kJ(b,a,c){b.a=a;b.b=c;return b;}
function mJ(b){var a;a=kM(b.b);return rJ(new qJ(),b,a);}
function nJ(a){return tM(this.a,a);}
function oJ(){return mJ(this);}
function pJ(){return this.b.a.c;}
function jJ(){}
_=jJ.prototype=new DH();_.A=nJ;_.yb=oJ;_.ed=pJ;_.tN=kO+'AbstractMap$3';_.tI=123;function rJ(b,a,c){b.a=c;return b;}
function tJ(a){return a.a.wb();}
function uJ(a){var b;b=a.a.Eb().sb();return b;}
function vJ(){return tJ(this);}
function wJ(){return uJ(this);}
function qJ(){}
_=qJ.prototype=new eG();_.wb=vJ;_.Eb=wJ;_.tN=kO+'AbstractMap$4';_.tI=124;function eL(b){var a,c;a=iK(new gK());for(c=0;c<b.a;c++){kK(a,b[c]);}return a;}
function fL(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.w(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function gL(a){fL(a,a.a,(nL(),oL));}
function nL(){nL=DN;oL=new kL();}
var oL;function mL(a,b){return oi(a,38).v(b);}
function kL(){}
_=kL.prototype=new eG();_.w=mL;_.tN=kO+'Comparators$1';_.tI=125;function rM(){rM=DN;yM=EM();}
function oM(a){{qM(a);}}
function pM(a){rM();oM(a);return a;}
function qM(a){a.a=xh();a.d=yh();a.b=wi(yM,th);a.c=0;}
function sM(b,a){if(pi(a,1)){return cN(b.d,oi(a,1))!==yM;}else if(a===null){return b.b!==yM;}else{return bN(b.a,a,a.hC())!==yM;}}
function tM(a,b){if(a.b!==yM&&aN(a.b,b)){return true;}else if(DM(a.d,b)){return true;}else if(BM(a.a,b)){return true;}return false;}
function uM(a){return hM(new EL(),a);}
function vM(c,a){var b;if(pi(a,1)){b=cN(c.d,oi(a,1));}else if(a===null){b=c.b;}else{b=bN(c.a,a,a.hC());}return b===yM?null:b;}
function wM(c,a,d){var b;if(pi(a,1)){b=fN(c.d,oi(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=eN(c.a,a,d,a.hC());}if(b===yM){++c.c;return null;}else{return b;}}
function xM(c,a){var b;if(pi(a,1)){b=hN(c.d,oi(a,1));}else if(a===null){b=c.b;c.b=wi(yM,th);}else{b=gN(c.a,a,a.hC());}if(b===yM){return null;}else{--c.c;return b;}}
function zM(e,c){rM();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function AM(d,a){rM();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=xL(c.substring(1),e);a.s(b);}}}
function BM(f,h){rM();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.sb();if(aN(h,d)){return true;}}}}return false;}
function CM(a){return sM(this,a);}
function DM(c,d){rM();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(aN(d,a)){return true;}}}return false;}
function EM(){rM();}
function FM(){return uM(this);}
function aN(a,b){rM();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function dN(a){return vM(this,a);}
function bN(f,h,e){rM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(aN(h,d)){return c.sb();}}}}
function cN(b,a){rM();return b[':'+a];}
function eN(f,h,j,e){rM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(aN(h,d)){var i=c.sb();c.ad(j);return i;}}}else{a=f[e]=[];}var c=xL(h,j);a.push(c);}
function fN(c,a,d){rM();a=':'+a;var b=c[a];c[a]=d;return b;}
function gN(f,h,e){rM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(aN(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.sb();}}}}
function hN(c,a){rM();a=':'+a;var b=c[a];delete c[a];return b;}
function tL(){}
_=tL.prototype=new AI();_.z=CM;_.ab=FM;_.vb=dN;_.tN=kO+'HashMap';_.tI=126;_.a=null;_.b=null;_.c=0;_.d=null;var yM;function vL(b,a,c){b.a=a;b.b=c;return b;}
function xL(a,b){return vL(new uL(),a,b);}
function yL(b){var a;if(pi(b,39)){a=oi(b,39);if(aN(this.a,a.mb())&&aN(this.b,a.sb())){return true;}}return false;}
function zL(){return this.a;}
function AL(){return this.b;}
function BL(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function CL(a){var b;b=this.b;this.b=a;return b;}
function DL(){return this.a+'='+this.b;}
function uL(){}
_=uL.prototype=new eG();_.eQ=yL;_.mb=zL;_.sb=AL;_.hC=BL;_.ad=CL;_.tS=DL;_.tN=kO+'HashMap$EntryImpl';_.tI=127;_.a=null;_.b=null;function hM(b,a){b.a=a;return b;}
function jM(d,c){var a,b,e;if(pi(c,39)){a=oi(c,39);b=a.mb();if(sM(d.a,b)){e=vM(d.a,b);return aN(a.sb(),e);}}return false;}
function kM(a){return aM(new FL(),a.a);}
function lM(a){return jM(this,a);}
function mM(){return kM(this);}
function nM(){return this.a.c;}
function EL(){}
_=EL.prototype=new bK();_.A=lM;_.yb=mM;_.ed=nM;_.tN=kO+'HashMap$EntrySet';_.tI=128;function aM(c,b){var a;c.c=b;a=iK(new gK());if(c.c.b!==(rM(),yM)){kK(a,vL(new uL(),null,c.c.b));}AM(c.c.d,a);zM(c.c.a,a);c.a=sI(a);return c;}
function cM(a){return hI(a.a);}
function dM(a){return a.b=oi(iI(a.a),39);}
function eM(a){if(a.b===null){throw aF(new EE(),'Must call next() before remove().');}else{jI(a.a);xM(a.c,a.b.mb());a.b=null;}}
function fM(){return cM(this);}
function gM(){return dM(this);}
function FL(){}
_=FL.prototype=new eG();_.wb=fM;_.Eb=gM;_.tN=kO+'HashMap$EntrySetIterator';_.tI=129;_.a=null;_.b=null;function jN(a){a.a=pM(new tL());return a;}
function kN(c,a){var b;b=wM(c.a,a,mE(true));return b===null;}
function mN(a){return EI(zJ(a.a));}
function nN(b,a){return xM(b.a,a)!==null;}
function oN(a){return kN(this,a);}
function pN(a){return sM(this.a,a);}
function qN(){return mN(this);}
function rN(){return this.a.c;}
function sN(){return zJ(this.a).tS();}
function iN(){}
_=iN.prototype=new bK();_.s=oN;_.A=pN;_.yb=qN;_.ed=rN;_.tS=sN;_.tN=kO+'HashSet';_.tI=130;_.a=null;function AN(){AN=DN;mG();}
function zN(a){AN();kG(a);return a;}
function yN(){}
_=yN.prototype=new jG();_.tN=kO+'NoSuchElementException';_.tI=131;function sO(){}
_=sO.prototype=new eG();_.tN=lO+'BezierCurve';_.tI=132;function uO(a){{zO(a);}}
function vO(a){uO(a);return a;}
function yO(i,d,e,a,b){var c,f,g,h,j;h=yQ(new xQ(),sF(d.a,e.a),sF(d.b,e.b));j=pF(d.a-e.a);c=pF(d.b-e.b);g=rF(j,c);g=rF(g,pF(d.a-a.a));g=rF(g,pF(d.b-a.b));g=rF(g,pF(e.a-b.a));g=rF(g,pF(e.b-b.b));f=yQ(new xQ(),h.a-g,h.b-g);Dl(i.a,'left',mF(f.a));Dl(i.a,'top',mF(f.b));wl(i.a,'width',mF(j+g*2));wl(i.a,'height',mF(c+g*2));Dl(i.a,'width',mF(j+g*2));Dl(i.a,'height',mF(c+g*2));xO(i,BQ(d,DQ(f)),BQ(e,DQ(f)),BQ(a,DQ(f)),BQ(b,DQ(f)),AO(i.a,'color'));}
function xO(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function zO(b){var a;b.a=fk('canvas');a=cl(b.a,'class');wl(b.a,'class',a+' gwt-diagrams-canvas');}
function AO(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function tO(){}
_=tO.prototype=new sO();_.tN=lO+'BezierCurveCanvas';_.tI=133;_.a=null;function DO(a){a.c=iK(new gK());}
function EO(c,d){var a,b;DO(c);jK(c.c,d);eP(c,c.B());for(b=sI(c.c);hI(b);){a=oi(iI(b),35);a.x(c);}return c;}
function FO(a,b){EO(a,eL(b));return a;}
function bP(a){return a.b.u(a.c);}
function cP(c,a){var b;b=qK(c.c,a);if(b>(-1)){uK(c.c,a);cR(a,c);}}
function dP(c){var a,b;for(b=tI(c.c);b.wb();){a=oi(b.Eb(),35);b.Ac();a.D(c);}CC(c);}
function eP(b,a){b.b=a;}
function fP(a){a.gd(bP(a));}
function gP(){dP(this);}
function hP(){fP(this);}
function CO(){}
_=CO.prototype=new kC();_.Ac=gP;_.fd=hP;_.tN=mO+'AbstractConnection';_.tI=134;_.b=null;function jP(a){a.a=vO(new tO());}
function lP(a,b){FO(a,b);jP(a);if(b.a!=2){throw CE(new BE(),'Need exactly two connectors to connect');}a.Ec(a.a.a);kB(a,'gwt-diagrams-connection');return a;}
function kP(c,a,b){lP(c,ji('[Lpl.balon.gwt.diagrams.client.connector.Connector;',169,35,[a,b]));return c;}
function nP(){return new FP();}
function oP(){return this.a.a;}
function pP(){dP(this);}
function qP(b){var a;if(!pi(b,40)){throw CE(new BE(),'Expected BezierConnectionData');}a=oi(b,40);if(a.b.b!=2){throw CE(new BE(),'Expected two connection points');}if(a.a.b!=2){throw CE(new BE(),'Expected two control points');}yO(this.a,oi(pK(a.b,0),37),oi(pK(a.b,1),37),oi(pK(a.a,0),37),oi(pK(a.a,1),37));}
function iP(){}
_=iP.prototype=new CO();_.B=nP;_.jb=oP;_.Ac=pP;_.gd=qP;_.tN=mO+'BezierTwoEndedConnection';_.tI=135;function tP(a){a.a=iK(new gK());}
function vP(a,b){FO(a,b);tP(a);if(b.a!=2){throw CE(new BE(),'Need exactly two connectors to connect');}a.Ec(ek());kB(a,'gwt-diagrams-connection');return a;}
function uP(c,a,b){vP(c,ji('[Lpl.balon.gwt.diagrams.client.connector.Connector;',169,35,[a,b]));return c;}
function xP(d,a){var b,c;for(c=d.a.b;c<a;c++){b=ek();kK(d.a,wi(b,gm));bk(d.jb(),b);Bl(b,'&nbsp;');}while(d.a.b>a){b=oi(pK(d.a,0),19);uK(d.a,wi(b,gm));rl(d.jb(),b);}}
function yP(){return new eQ();}
function zP(a){var b,c,d,e,f;if(a.b.b<=1){throw CE(new BE(),'Too few connection points');}xP(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=oi(pK(this.a,d),19);e=oi(pK(a.b,d),37);c=oi(pK(a.b,d+1),37);f='gwt-diagrams-line';wl(b,'style','');zl(b,'className',f);Dl(b,'height','1');Dl(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Dl(b,'height',mF(pF(e.b-c.b)));}else if(e.b==c.b){Dl(b,'width',mF(pF(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Dl(b,'left',mF(sF(e.a,c.a)));Dl(b,'top',mF(sF(e.b,c.b)));zl(b,'className',f);}}
function sP(){}
_=sP.prototype=new CO();_.B=yP;_.gd=zP;_.tN=mO+'RectilinearTwoEndedConnection';_.tI=136;function BP(c,a,b){kP(c,a,b);return c;}
function DP(){return new kQ();}
function EP(a){if(a.b.b!=2){throw CE(new BE(),'Expected two connection points');}yO(this.a,oi(pK(a.b,0),37),oi(pK(a.b,1),37),oi(pK(a.b,1),37),oi(pK(a.b,0),37));}
function AP(){}
_=AP.prototype=new iP();_.B=DP;_.gd=EP;_.tN=mO+'StraightTwoEndedConnection';_.tI=137;function bQ(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=ii('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[168],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=AQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function cQ(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw CE(new BE(),'Unsupported connectors count');}c=oi(pK(e,0),35);d=oi(pK(e,1),35);f=bQ(this,c,d);h=c.zc(f[0]);i=d.zc(f[1]);a=CQ(h,f[0],50);b=CQ(i,f[1],50);g=qQ(new nQ(),ji('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',174,37,[h,i]),ji('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',174,37,[a,b]));return g;}
function FP(){}
_=FP.prototype=new eG();_.u=cQ;_.tN=nO+'BezierConnectionCalculator';_.tI=138;function fQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(nR(),qR);}if(c==1&&d>0){return a!==(nR(),rR);}if(c==0&&d<0){return a!==(nR(),rR);}if(c==1&&d<0){return a!==(nR(),qR);}}else{if(c==0&&d>0){return a!==(nR(),sR);}if(c==1&&d>0){return a!==(nR(),pR);}if(c==0&&d<0){return a!==(nR(),pR);}if(c==1&&d<0){return a!==(nR(),sR);}}return false;}
function hQ(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=ii('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[168],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=AQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function iQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(nR(),rR);}if(c==1&&d>0){return a===(nR(),qR);}if(c==0&&d<0){return a===(nR(),qR);}if(c==1&&d<0){return a===(nR(),rR);}}else{if(c==0&&d>0){return a===(nR(),pR);}if(c==1&&d>0){return a===(nR(),sR);}if(c==0&&d<0){return a===(nR(),sR);}if(c==1&&d<0){return a===(nR(),pR);}}return false;}
function jQ(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw CE(new BE(),'Unsupported connectors count');}a=oi(pK(c,0),35);b=oi(pK(c,1),35);d=uQ(new sQ());e=hQ(this,a,b);i=a.zc(e[0]);j=CQ(i,e[0],10);k=b.zc(e[1]);l=CQ(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(iQ(this,e[0],0,f,true)&&iQ(this,e[1],1,f,true)){g=CQ(j,e[0],pF(si(f/2)));h=yQ(new xQ(),g.a,l.b);}else if(iQ(this,e[0],0,m,false)&&iQ(this,e[1],1,m,false)){g=CQ(j,e[0],pF(si(m/2)));h=yQ(new xQ(),l.a,g.b);}else if(iQ(this,e[0],0,f,true)&&iQ(this,e[1],1,m,false)){g=CQ(j,e[0],pF(f));h=CQ(l,e[1],pF(m));}else if(iQ(this,e[0],0,m,false)&&iQ(this,e[1],1,f,true)){g=CQ(j,e[0],pF(m));h=CQ(l,e[1],pF(f));}else if(iQ(this,e[0],0,f,true)&&fQ(this,e[1],1,f,true)){g=CQ(j,e[0],pF(si(f/2)));h=yQ(new xQ(),g.a,l.b);}else if(fQ(this,e[0],0,f,true)&&iQ(this,e[1],1,f,true)){h=CQ(l,e[1],pF(si(f/2)));g=yQ(new xQ(),h.a,j.b);}else if(iQ(this,e[0],0,m,false)&&fQ(this,e[1],1,m,false)){g=CQ(j,e[0],pF(si(m/2)));h=yQ(new xQ(),l.a,g.b);}else if(fQ(this,e[0],0,m,false)&&iQ(this,e[1],1,m,false)){h=CQ(l,e[1],pF(si(m/2)));g=yQ(new xQ(),j.a,h.b);}else if(fQ(this,e[0],0,f,true)&&fQ(this,e[1],1,f,true)){g=CQ(j,(nR(),rR),si(f/2));h=yQ(new xQ(),g.a,l.b);}else if(fQ(this,e[0],0,m,false)&&fQ(this,e[1],1,m,false)){g=CQ(j,(nR(),pR),si(m/2));h=yQ(new xQ(),l.a,g.b);}else if(fQ(this,e[0],0,f,true)&&fQ(this,e[1],1,m,false)){g=CQ(j,(nR(),rR),f);}else if(fQ(this,e[0],0,m,false)&&fQ(this,e[1],1,f,true)){g=CQ(j,(nR(),pR),m);}kK(d.b,i);kK(d.b,j);if(g!==null){kK(d.b,g);}if(h!==null){kK(d.b,h);}kK(d.b,l);kK(d.b,k);return d;}
function eQ(){}
_=eQ.prototype=new eG();_.u=jQ;_.tN=nO+'FullRectilinearTwoEndedCalculator';_.tI=139;function mQ(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw CE(new BE(),'Unsupported connectors count');}a=oi(pK(e,0),35);b=oi(pK(e,1),35);f=uQ(new sQ());c=yQ(new xQ(),a.nb()+si(a.tb()/2),a.rb()+si(a.kb()/2));d=yQ(new xQ(),b.nb()+si(b.tb()/2),b.rb()+si(b.kb()/2));g=yQ(new xQ(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=si(a.kb()/2);h=g.b!=0?si(j*g.a/pF(g.b)):2147483647;j*= -k;if(pF(h)>si(a.tb()/2)){h=si(a.tb()/2);j=g.a!=0?si(h*g.b/pF(g.a)):2147483647;h*= -i;}kK(f.b,yQ(new xQ(),c.a+h,c.b+j));j=si(b.kb()/2);h=g.b!=0?si(j*g.a/pF(g.b)):2147483647;j*=k;h= -h;if(pF(h)>si(b.tb()/2)){h=si(b.tb()/2);j=g.a!=0?si(h*g.b/pF(g.a)):2147483647;h*=i;j= -j;}kK(f.b,yQ(new xQ(),d.a+h,d.b+j));return f;}
function kQ(){}
_=kQ.prototype=new eG();_.u=mQ;_.tN=nO+'StraightCenterConnectionDataCalculator';_.tI=140;function tQ(a){a.b=iK(new gK());}
function uQ(a){tQ(a);return a;}
function vQ(b,a){tQ(b);jK(b.b,a);return b;}
function sQ(){}
_=sQ.prototype=new eG();_.tN=oO+'ConnectionData';_.tI=141;function oQ(a){a.a=iK(new gK());}
function pQ(c,b,a){vQ(c,b);oQ(c);jK(c.a,a);return c;}
function qQ(c,b,a){pQ(c,eL(b),eL(a));return c;}
function nQ(){}
_=nQ.prototype=new sQ();_.tN=oO+'BezierConnectionData';_.tI=142;function yQ(b,a,c){b.a=a;b.b=c;return b;}
function AQ(b,a){return tF((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function CQ(c,a,b){if(a===(nR(),pR)){return yQ(new xQ(),c.a,c.b+b);}else if(a===(nR(),sR)){return yQ(new xQ(),c.a,c.b-b);}else if(a===(nR(),qR)){return yQ(new xQ(),c.a-b,c.b);}else if(a===(nR(),rR)){return yQ(new xQ(),c.a+b,c.b);}else{throw FE(new EE());}}
function BQ(a,b){return yQ(new xQ(),a.a+b.a,a.b+b.b);}
function DQ(a){return yQ(new xQ(),-a.a,-a.b);}
function xQ(){}
_=xQ.prototype=new eG();_.tN=oO+'Point';_.tI=143;_.a=0;_.b=0;function FQ(a){a.c=jN(new iN());}
function aR(a){FQ(a);return a;}
function cR(b,a){if(nN(b.c,a)){cP(a,b);}}
function dR(b,a){return CQ(yQ(new xQ(),b.nb()+si(b.tb()/2),b.rb()+si(b.kb()/2)),a,oR(a)?si(b.tb()/2):si(b.kb()/2));}
function eR(c){var a,b;for(b=mN(c.c);fJ(b);){a=oi(gJ(b),41);a.fd();}}
function fR(a){kN(this.c,a);}
function gR(a){cR(this,a);}
function hR(a){return dR(this,a);}
function iR(){return tR();}
function jR(a){return dR(this,a);}
function EQ(){}
_=EQ.prototype=new eG();_.x=fR;_.D=gR;_.db=hR;_.gb=iR;_.zc=jR;_.tN=pO+'AbstractConnector';_.tI=144;function nR(){nR=DN;sR=mR(new lR(),'UP');pR=mR(new lR(),'DOWN');qR=mR(new lR(),'LEFT');rR=mR(new lR(),'RIGHT');}
function mR(b,a){nR();b.a=a;return b;}
function oR(a){return a===qR||a===rR;}
function tR(){nR();return ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',168,34,[sR,pR,qR,rR]);}
function uR(){return this.a;}
function lR(){}
_=lR.prototype=new eG();_.tS=uR;_.tN=pO+'Direction';_.tI=145;_.a=null;var pR,qR,rR,sR;function BR(){BR=DN;fS=pM(new tL());}
function AR(a,b){BR();aR(a);a.b=b;return a;}
function CR(a){xM(fS,a.b);a.b=null;}
function DR(){if(this.b===null){throw aF(new EE(),'Wrapped object is null.');}return this.b.ob();}
function ER(){var a,b;if(this.b===null){throw aF(new EE(),'Wrapped object is null.');}a=0;b=kl(this.b.jb());while(b!==null){if(AG('relative',ll(b,'position'))){a=al(b);break;}b=kl(b);}return mB(this.b)-a;}
function FR(){var a,b;if(this.b===null){throw aF(new EE(),'Wrapped object is null.');}a=0;b=kl(this.b.jb());while(b!==null){if(AG('relative',ll(b,'position'))){a=bl(b);break;}b=kl(b);}return nB(this.b)-a;}
function aS(){if(this.b===null){throw aF(new EE(),'Wrapped object is null.');}return this.b.pb();}
function bS(a){BR();return oi(vM(fS,a),42);}
function cS(a){BR();if(sM(fS,a)){CR(bS(a));}}
function dS(b){BR();var a;if(sM(fS,b)){return oi(vM(fS,b),42);}else{a=AR(new vR(),b);wM(fS,b,a);return a;}}
function eS(c,b){BR();var a;if(sM(fS,c)){return oi(vM(fS,c),42);}else{a=xR(new wR(),c,b);wM(fS,c,a);return a;}}
function vR(){}
_=vR.prototype=new EQ();_.kb=DR;_.nb=ER;_.rb=FR;_.tb=aS;_.tN=pO+'UIObjectConnector';_.tI=146;_.b=null;var fS;function yR(){yR=DN;BR();}
function xR(b,a,c){yR();b.a=c;AR(b,a);return b;}
function zR(){return this.a;}
function wR(){}
_=wR.prototype=new vR();_.gb=zR;_.tN=pO+'UIObjectConnector$1';_.tI=147;function pS(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function qS(a){jh(new hS());em(lS(new kS(),a));}
function gS(){}
_=gS.prototype=new eG();_.tN=qO+'BaseExamplesEntryPoint';_.tI=148;function jS(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=wH(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=ms(new ks(),true);Dl(a.jb(),'backgroundColor','#ABCDEF');nH(),pH;d=FG(d,' ','&nbsp;');ps(a,'<pre>'+d+'<\/pre>');Ex(a);}
function hS(){}
_=hS.prototype=new eG();_.tN=qO+'BaseExamplesEntryPoint$1';_.tI=149;function lS(b,a){b.a=a;return b;}
function nS(){yS(this.a);}
function kS(){}
_=kS.prototype=new eG();_.bb=nS;_.tN=qO+'BaseExamplesEntryPoint$2';_.tI=150;function yS(c){var a,b;b=DA(new qA());mq(cz('tabs'),b);FA(b,gV(new fV()),'Rectilinear');FA(b,zT(new yT()),'Bezier');FA(b,kV(new jV()),'Straight');FA(b,tU(new CT()),'Diagram builder');FA(b,bV(new aV()),'Multi');EA(b,tS(new sS(),c,b));a=pS(c,'tab');if(a===null||AG('',a)){a='0';}eB(b,kF(a));}
function rS(){}
_=rS.prototype=new gS();_.tN=qO+'GwtDiagramsExample';_.tI=151;function tS(b,a,c){b.a=c;return b;}
function vS(a,b){return true;}
function wS(b,c){var a;a=oi(bB(this.a,c),43);qT(a);}
function sS(){}
_=sS.prototype=new eG();_.bc=vS;_.vc=wS;_.tN=qO+'GwtDiagramsExample$1';_.tI=152;function uT(a){a.i=lq(new kq());}
function vT(a){var b;mz(a);uT(a);kB(a,'gwt-diagrams-example');b=eC(new cC());oz(a,b);fC(b,a.i);fC(b,xT(a,pT(a)));return a;}
function xT(e,d){var a,b,c;a=gt(new ft());kB(a,'gwt-diagrams-sources-panel');for(b=sI(d);hI(b);){c=oi(iI(b),14);ht(a,c);}return a;}
function tT(){}
_=tT.prototype=new fz();_.tN=rO+'AbstractExample';_.tI=153;function iT(a){a.g=iK(new gK());}
function jT(a){vT(a);iT(a);a.h=nT(a);Dl(a.i.jb(),'width','450px');Dl(a.i.jb(),'height','350px');a.C();return a;}
function kT(b,a){mq(b.i,a);kK(b.g,a);}
function mT(e,d,c,f,a){var b;b=Ew(new Cw(),d);kB(b,'example-connector');nq(e.i,b,c,f);DS(e.h,b);if(a!==null){return eS(b,ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',168,34,[a]));}return dS(b);}
function nT(b){var a;a=BS(new AS(),b.i,true,b);return a;}
function oT(b,a){uK(b.g,a);}
function pT(f){var a,b,c,d,e;e=iK(new gK());b=DG(hh(f),46);a=aH(hh(f),b+1);kK(e,rw(new pw(),a+'.java',''));kK(e,rw(new pw(),'AbstractExample.java',''));kK(e,rw(new pw(),'AbstractConnectionsExample.java',''));for(d=sI(e);hI(d);){c=oi(iI(d),44);kB(c,'gwt-diagrams-source-link');sw(c,fT(new eT(),f,c));}return e;}
function qT(c){var a,b;for(b=sI(c.g);hI(b);){a=oi(iI(b),41);a.fd();}}
function rT(a){kT(this,a);}
function sT(){var a,b,c,d,e,f,g,h;a=mT(this,'all',50,50,null);b=mT(this,'all',100,100,null);this.y(a,b);c=mT(this,'up',250,50,(nR(),sR));d=mT(this,'down',300,100,(nR(),pR));this.y(c,d);e=mT(this,'left',50,200,(nR(),qR));f=mT(this,'right',100,250,(nR(),rR));this.y(e,f);g=mT(this,'left',250,200,(nR(),qR));h=mT(this,'left',300,250,(nR(),qR));this.y(g,h);}
function zS(){}
_=zS.prototype=new tT();_.t=rT;_.C=sT;_.tN=rO+'AbstractConnectionsExample';_.tI=154;_.h=null;function CS(){CS=DN;ad();}
function BS(d,a,b,c){CS();Fc(d,a,b);return d;}
function DS(a,b){A(a,b);Dl(b.jb(),'position','absolute');Dl(b.jb(),'zIndex','100');}
function ES(a){DS(this,a);}
function FS(b,a){return bT(new aT(),b,a,this);}
function AS(){}
_=AS.prototype=new Ec();_.Bb=ES;_.Db=FS;_.tN=rO+'AbstractConnectionsExample$1';_.tI=155;function cT(){cT=DN;se();}
function bT(d,a,b,c){cT();re(d,a,b);return d;}
function dT(d,c,b){var a;od(this,d,c,b);a=bS(c);if(a!==null){eR(a);}}
function aT(){}
_=aT.prototype=new qe();_.rc=dT;_.tN=rO+'AbstractConnectionsExample$2';_.tI=156;function fT(b,a,c){b.a=c;return b;}
function hT(a){Fn('../source/'+uw(this.a),'','');}
function eT(){}
_=eT.prototype=new eG();_.dc=hT;_.tN=rO+'AbstractConnectionsExample$3';_.tI=157;function zT(a){jT(a);return a;}
function BT(a,b){this.t(kP(new iP(),a,b));}
function yT(){}
_=yT.prototype=new zS();_.y=BT;_.tN=rO+'BezierExample';_.tI=158;function sU(a){a.c=iK(new gK());}
function tU(a){jT(a);sU(a);return a;}
function uU(b,a){kT(b,a);fP(a);}
function wU(c,a,b){if(AG('rectilinear',c.d)){uU(c,uP(new sP(),a,b));}else if(AG('bezier',c.d)){uU(c,kP(new iP(),a,b));}else if(AG('straight',c.d)){uU(c,BP(new AP(),a,b));}}
function xU(e,d,c){var a,b;b=kU(new jU(),cx(d),e);tB(b,d.pb(),d.ob());kB(b,'example-connector');nq(c,b,mB(d)-mB(c),nB(d)-nB(c));DS(e.h,b);a=null;if(AG('T',cx(b))){a=(nR(),sR);}else if(AG('L',cx(b))){a=(nR(),qR);}else if(AG('B',cx(b))){a=(nR(),pR);}else if(AG('R',cx(b))){a=(nR(),rR);}if(a!==null){return eS(b,ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',168,34,[a]));}return dS(b);}
function yU(c,a){var b;b=Ew(new Cw(),a);kB(b,'helpEntry');iw(c.a,b);}
function zU(d,c,a){var b;b=xy(new vy(),'style',c);kB(b,'style-option');br(b,a);if(a){CU(d,c);}iw(d.e,b);mt(b,gU(new fU(),d,c));return b;}
function AU(d,a,c){var b;b=Ew(new Cw(),a);uB(b,'toolbox-node');kB(b,c);iw(d.e,b);d.f.Bb(b);return b;}
function BU(d,e){var a,b,c,f;if(sK(d.c)){kB(e,'selected-connector');b=bS(e).c;for(c=mN(b);fJ(c);){a=oi(gJ(c),41);a.Ac();oT(d,a);}kK(d.c,e);}else if(oK(d.c,e)){qB(e,'selected-connector');uK(d.c,e);}else if(d.c.b==1){f=oi(pK(d.c,0),14);qB(e,'selected-connector');qB(f,'selected-connector');b=bS(e).c;for(c=mN(b);fJ(c);){a=oi(gJ(c),41);a.Ac();oT(d,a);}wU(d,bS(f),bS(e));mK(d.c);}}
function CU(b,a){b.d=a;}
function DU(a){uU(this,a);}
function EU(a,b){wU(this,a,b);}
function FU(){var a,b,c;a=Fc(new Ec(),this.i,true);b=jd(new id(),this.i);this.f=pU(new nU(),b,a,this);this.e=hw(new fw());uB(this.e,'toolbox');this.b=lq(new kq());this.a=hw(new fw());uB(this.a,'helpPanel');c=eC(new cC());uB(c,'builder');fC(c,this.a);fC(c,this.e);fC(c,this.b);mq(this.i,c);AU(this,'A','all');AU(this,'L','left');AU(this,'R','right');AU(this,'T','top');AU(this,'B','bottom');zU(this,'rectilinear',true);zU(this,'bezier',false);zU(this,'straight',false);yU(this,'drag&drop from toolbar to add');yU(this,'CTRL+click to select/connect');yU(this,'DEL to delete selected');ak(cU(new bU(),this));}
function CT(){}
_=CT.prototype=new zS();_.t=DU;_.y=EU;_.C=FU;_.tN=rO+'DiagramBuilderExample';_.tI=159;_.a=null;_.b=null;_.d=null;_.e=null;_.f=null;function ET(b,a,c){b.a=a;b.b=c;return b;}
function aU(a){var b,c,d;b=a.d;d=oi(vM(this.a.a,b),14);c=this.b.g;xU(this.a.b,oi(d,45),c);throw gd(new fd());}
function DT(){}
_=DT.prototype=new rb();_.sc=aU;_.tN=rO+'DiagramBuilderExample$1';_.tI=160;function cU(b,a){b.a=a;return b;}
function eU(a){var b,c;if(128==Dk(a)&&46==yk(a)&& !sK(this.a.c)){for(b=tI(this.a.c);hI(b);){c=oi(iI(b),14);cS(c);jI(b);CC(c);}return false;}return true;}
function bU(){}
_=bU.prototype=new eG();_.jc=eU;_.tN=rO+'DiagramBuilderExample$2';_.tI=161;function gU(b,a,c){b.a=a;b.b=c;return b;}
function iU(a){CU(this.a,this.b);}
function fU(){}
_=fU.prototype=new eG();_.dc=iU;_.tN=rO+'DiagramBuilderExample$3';_.tI=162;function kU(c,a,b){c.a=b;Ew(c,a);return c;}
function mU(a){if(Dk(a)==1&&wk(a)){BU(this.a,this);}dx(this,a);}
function jU(){}
_=jU.prototype=new Cw();_.cc=mU;_.tN=rO+'DiagramBuilderExample$4';_.tI=163;function qU(){qU=DN;ad();}
function oU(a){a.a=pM(new tL());}
function pU(d,a,b,c){qU();d.b=c;Fc(d,d.b.i,false);oU(d);dd(d,true);F(d,a);u(d,ET(new DT(),d,a));return d;}
function rU(a){var b,c;b=oi(a,45);c=Ew(new Cw(),cx(b));kB(c,'dragdrop-proxy');kB(c,'toolbox-node-proxy');tB(c,b.pb(),b.ob());wM(this.a,b,c);return c;}
function nU(){}
_=nU.prototype=new Ec();_.Cb=rU;_.tN=rO+'DiagramBuilderExample$ToolboxDragController';_.tI=164;function bV(a){jT(a);return a;}
function dV(a,b){throw AH(new zH());}
function eV(){var a,b,c,d,e,f,g;e=mT(this,'X',50,100,null);f=mT(this,'Y',150,50,null);g=mT(this,'Z',250,25,null);c=mT(this,'U',125,125,null);d=mT(this,'W',250,100,null);this.t(uP(new sP(),e,f));this.t(uP(new sP(),f,g));this.t(uP(new sP(),f,c));this.t(uP(new sP(),c,d));a=mT(this,'A',50,200,null);b=mT(this,'B',150,250,null);this.t(uP(new sP(),a,b));this.t(kP(new iP(),a,b));this.t(BP(new AP(),a,b));}
function aV(){}
_=aV.prototype=new zS();_.y=dV;_.C=eV;_.tN=rO+'MultiConnectionsExample';_.tI=165;function gV(a){jT(a);return a;}
function iV(a,b){this.t(uP(new sP(),a,b));}
function fV(){}
_=fV.prototype=new zS();_.y=iV;_.tN=rO+'RectilinearExample';_.tI=166;function kV(a){jT(a);return a;}
function mV(c,a,b){c.t(BP(new AP(),a,b));}
function nV(a,b){mV(this,a,b);}
function oV(){var a,b;a=mT(this,'connector 1',50,50,(nR(),sR));b=mT(this,'connector 2',200,200,(nR(),pR));mV(this,a,b);}
function jV(){}
_=jV.prototype=new zS();_.y=nV;_.C=oV;_.tN=rO+'StraightConnectionsExample';_.tI=167;function AD(){qS(new rS());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{AD();}catch(a){b(d);}else{AD();}}
var vi=[{},{27:1},{1:1,27:1,38:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{7:1,27:1},{27:1},{27:1,31:1},{27:1,31:1},{27:1,31:1},{27:1},{27:1},{10:1,27:1,38:1},{23:1,27:1},{27:1},{16:1,27:1},{16:1,27:1},{12:1,16:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{27:1},{13:1,16:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{15:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1},{20:1,27:1},{20:1,27:1},{20:1,27:1},{27:1},{15:1,19:1,27:1},{15:1,27:1},{21:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1,28:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{2:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,23:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{5:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,45:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{3:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,44:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{2:1,14:1,24:1,26:1,27:1,28:1,29:1},{21:1,27:1},{27:1},{14:1,22:1,27:1,28:1,29:1},{27:1,31:1},{14:1,25:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,22:1,27:1,28:1,29:1},{4:1,14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1,30:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{27:1},{11:1,16:1,27:1},{27:1},{27:1},{27:1,32:1},{27:1,33:1},{27:1,33:1},{27:1},{27:1},{27:1},{27:1},{27:1,32:1},{27:1,39:1},{27:1,33:1},{27:1},{27:1,33:1},{11:1,16:1,27:1},{27:1},{27:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{27:1},{27:1},{27:1},{27:1},{27:1,40:1},{27:1,37:1},{27:1,35:1},{27:1,34:1},{27:1,35:1,42:1},{27:1,35:1,42:1},{27:1},{27:1},{17:1,27:1},{27:1},{25:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{8:1,27:1},{22:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{7:1,27:1},{18:1,27:1},{22:1,27:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{27:1},{9:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();