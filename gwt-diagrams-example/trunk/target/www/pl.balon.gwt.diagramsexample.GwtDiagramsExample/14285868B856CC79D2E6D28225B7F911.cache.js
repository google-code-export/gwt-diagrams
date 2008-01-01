(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,DN='com.allen_sauer.gwt.dragdrop.client.',EN='com.allen_sauer.gwt.dragdrop.client.drop.',FN='com.allen_sauer.gwt.dragdrop.client.util.',aO='com.allen_sauer.gwt.dragdrop.client.util.impl.',bO='com.google.gwt.core.client.',cO='com.google.gwt.lang.',dO='com.google.gwt.user.client.',eO='com.google.gwt.user.client.impl.',fO='com.google.gwt.user.client.ui.',gO='com.google.gwt.user.client.ui.impl.',hO='java.io.',iO='java.lang.',jO='java.util.',kO='pl.balon.gwt.diagrams.client.common.bezier.',lO='pl.balon.gwt.diagrams.client.connection.',mO='pl.balon.gwt.diagrams.client.connection.calculator.',nO='pl.balon.gwt.diagrams.client.connection.data.',oO='pl.balon.gwt.diagrams.client.connector.',pO='pl.balon.gwt.diagramsexample.client.',qO='pl.balon.gwt.diagramsexample.client.examples.';function CN(){}
function gG(a){return this===a;}
function hG(){return qH(this);}
function iG(){return this.tN+'@'+this.hC();}
function eG(){}
_=eG.prototype={};_.eQ=gG;_.hC=hG;_.tS=iG;_.toString=function(){return this.tS();};_.tN=iO+'Object';_.tI=1;function qL(b,a){b.d=a;return b;}
function pL(){}
_=pL.prototype=new eG();_.tN=jO+'EventObject';_.tI=3;_.d=null;function ob(c,b,a){qL(c,b);c.c=a;return c;}
function qb(){var a;a=this.c!==null?'dropTarget='+gg(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+gg(this.d)+')';}
function nb(){}
_=nb.prototype=new pL();_.tS=qb;_.tN=DN+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ob(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new nb();_.tS=q;_.tN=DN+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function v(){v=CN;db=oM(new sL());}
function s(a){a.j=y(a);}
function t(c,b,a){v();s(c);c.h=b!==null?b:bz();c.g=c.Db(c.h,a);F(c,c.g);c.o=tc(new rc(),c);return c;}
function u(b,a){if(b.i===null){b.i=yb(new xb());}jK(b.i,a);}
function w(c,a,b){qB(a,'dragdrop-dragging');}
function x(b,a){pc(b.j,b.h,a);if(b.i!==null){Bb(b.i,a);}kB(a,'dragdrop-dragging');}
function y(a){return kc(new dc());}
function z(b,c){var a;a=nc(b.j,c,b.h);return a!==null?a:b.g;}
function A(a,b){{B(a,b,b);}}
function B(c,b,a){xc(c.o,b,a);kB(b,'dragdrop-draggable');kB(a,'dragdrop-handle');vM(db,b,a);}
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
_=r.prototype=new eG();_.Bb=eb;_.Db=fb;_.tN=DN+'AbstractDragController';_.tI=6;_.g=null;_.h=null;_.i=null;_.k=0;_.l=null;_.m=null;_.n=null;_.o=null;var db;function hb(b,a){b.b=a;return b;}
function jb(a){if(a.c==0){return;}uc(a.b,a.d,a.e);a.a=oH()-a.c;a.c=0;}
function kb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=oH();}if(a.a>80){em(a);}else{jb(a);}}
function lb(){jb(this);}
function gb(){}
_=gb.prototype=new eG();_.bb=lb;_.tN=DN+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function tb(a){}
function ub(a){}
function vb(a){}
function wb(a){}
function rb(){}
_=rb.prototype=new eG();_.fc=tb;_.gc=ub;_.sc=vb;_.tc=wb;_.tN=DN+'DragHandlerAdapter';_.tI=8;function DH(d,a,b){var c;while(a.wb()){c=a.Eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function FH(a){throw AH(new zH(),'add');}
function aI(b){var a;a=DH(this,this.yb(),b);return a!==null;}
function bI(){var a,b,c;c=pG(new oG());a=null;qG(c,'[');b=this.yb();while(b.wb()){if(a!==null){qG(c,a);}else{a=', ';}qG(c,lH(b.Eb()));}qG(c,']');return uG(c);}
function CH(){}
_=CH.prototype=new eG();_.s=FH;_.A=aI;_.tS=bI;_.tN=jO+'AbstractCollection';_.tI=9;function qI(b,a){throw eF(new cF(),'Index: '+a+', Size: '+b.b);}
function rI(a){return eI(new dI(),a);}
function sI(a){return nI(new mI(),a);}
function tI(b,a){throw AH(new zH(),'add');}
function uI(a){this.r(this.ed(),a);return true;}
function vI(e){var a,b,c,d,f;if(e===this){return true;}if(!pi(e,31)){return false;}f=oi(e,31);if(this.ed()!=f.ed()){return false;}c=rI(this);d=f.yb();while(gI(c)){a=hI(c);b=hI(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function wI(){var a,b,c,d;c=1;a=31;b=rI(this);while(gI(b)){d=hI(b);c=31*c+(d===null?0:d.hC());}return c;}
function xI(){return rI(this);}
function yI(a){throw AH(new zH(),'remove');}
function cI(){}
_=cI.prototype=new CH();_.r=tI;_.s=uI;_.eQ=vI;_.hC=wI;_.yb=xI;_.Bc=yI;_.tN=jO+'AbstractList';_.tI=10;function gK(a){{kK(a);}}
function hK(a){gK(a);return a;}
function jK(b,a){FK(b.a,b.b++,a);return true;}
function iK(d,a){var b,c;c=a.yb();b=c.wb();while(c.wb()){FK(d.a,d.b++,c.Eb());}return b;}
function lK(a){kK(a);}
function kK(a){a.a=xh();a.b=0;}
function nK(b,a){return pK(b,a)!=(-1);}
function oK(b,a){if(a<0||a>=b.b){qI(b,a);}return BK(b.a,a);}
function pK(b,a){return qK(b,a,0);}
function qK(c,b,a){if(a<0){qI(c,a);}for(;a<c.b;++a){if(AK(b,BK(c.a,a))){return a;}}return (-1);}
function rK(a){return a.b==0;}
function sK(c,a){var b;b=oK(c,a);DK(c.a,a,1);--c.b;return b;}
function tK(c,b){var a;a=pK(c,b);if(a==(-1)){return false;}sK(c,a);return true;}
function uK(d,a,b){var c;c=oK(d,a);FK(d.a,a,b);return c;}
function vK(c,a){var b;if(a.a<c.b){a=di(a,c.b);}for(b=0;b<c.b;++b){ki(a,b,BK(c.a,b));}if(a.a>c.b){ki(a,c.b,null);}return a;}
function xK(a,b){if(a<0||a>this.b){qI(this,a);}wK(this.a,a,b);++this.b;}
function yK(a){return jK(this,a);}
function wK(a,b,c){a.splice(b,0,c);}
function zK(a){return nK(this,a);}
function AK(a,b){return a===b||a!==null&&a.eQ(b);}
function CK(a){return oK(this,a);}
function BK(a,b){return a[b];}
function EK(a){return sK(this,a);}
function DK(a,c,b){a.splice(c,b);}
function FK(a,b,c){a[b]=c;}
function aL(){return this.b;}
function fK(){}
_=fK.prototype=new cI();_.r=xK;_.s=yK;_.A=zK;_.ub=CK;_.Bc=EK;_.ed=aL;_.tN=jO+'ArrayList';_.tI=11;_.a=null;_.b=0;function yb(a){hK(a);return a;}
function Ab(d,a){var b,c;for(c=rI(d);gI(c);){b=oi(hI(c),7);b.fc(a);}}
function Bb(e,d){var a,b,c;a=ac(new Fb(),d);for(c=rI(e);gI(c);){b=oi(hI(c),7);b.gc(a);}}
function Cb(f,e,a){var b,c,d;b=ob(new nb(),e,a);for(d=rI(f);gI(d);){c=oi(hI(d),7);c.sc(b);}}
function Db(e,d){var a,b,c;a=ac(new Fb(),d);for(c=rI(e);gI(c);){b=oi(hI(c),7);b.tc(a);}}
function xb(){}
_=xb.prototype=new fK();_.tN=DN+'DragHandlerCollection';_.tI=12;function ac(b,a){qL(b,a);return b;}
function cc(){return 'DragStartEvent(source='+gg(this.d)+')';}
function Fb(){}
_=Fb.prototype=new pL();_.tS=cc;_.tN=DN+'DragStartEvent';_.tI=13;function jc(a){a.a=hK(new fK());}
function kc(a){jc(a);return a;}
function lc(b,a){jK(b.a,a);}
function nc(g,h,a){var b,c,d,e,f,i,j,k;i=ig(new hg(),h,null);j=ef(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(hf(f,i)){k=df(f,j);if(k<=c){if(e===null|| !zf(hc(b).jb(),hc(e).jb())){c=k;e=b;}}}}return e===null?null:e.a;}
function oc(a){return rI(a.a);}
function pc(h,b,d){var a,c,e,f,g;a=ig(new hg(),b,null);g=hK(new fK());for(f=oc(h);gI(f);){e=oi(hI(f),8);c=fc(new ec(),e);if(!zf(d.jb(),hc(c).jb())){if(hf(c.b,a)){jK(g,c);}}}h.b=oi(vK(g,ji('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',173,10,[])),9);fL(h.b);}
function dc(){}
_=dc.prototype=new eG();_.tN=DN+'DropControllerCollection';_.tI=14;_.b=null;function fc(c,a){var b;c.a=a;b=a.ib();if(!b.xb()){throw aF(new EE(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=ig(new hg(),b,null);return c;}
function hc(a){return a.a.ib();}
function ic(a){var b;b=oi(a,10);return zf(hc(this).jb(),hc(b).jb())?1:(-1);}
function ec(){}
_=ec.prototype=new eG();_.v=ic;_.tN=DN+'DropControllerCollection$Candidate';_.tI=15;_.a=null;_.b=null;function sc(a){a.d=hb(new gb(),a);a.f=oM(new sL());}
function tc(b,a){sc(b);b.e=a;b.a=a.h;return b;}
function uc(e,f,g){var a,b,c,d;c=lg(new kg(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=rF(0,sF(a,e.l));b=rF(0,sF(b,e.m));}Af(e.o.jb(),a,b);d=z(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.kc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ic(e.o,e.g,e.e);}}if(e.i!==null){e.i.rc(e.o,e.g,e.e);}}
function vc(b){var a;ql(b.b.jb());b.h=false;if(b.i!==null){b.i.kc(b.g,b.e);}b.i=null;bd(b.e,b.g,null);a=ob(new nb(),b.g,null);C(b.e,a);}
function xc(c,b,a){if(a!==null){ax(a,c);vM(c.f,a,b);}else{throw lG(new jG(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function yc(f){var a,c,d,e;f.g=oi(uM(f.f,f.b),14);try{E(f.e,f.g);}catch(a){a=zi(a);if(pi(a,12)){a;return;}else throw a;}cd(f.e,f.g);f.o=f.e.f;f.l=Ef(f.a.jb())-f.o.pb();f.m=Df(f.a.jb())-f.o.ob();e=lg(new kg(),f.b,f.a);c=lg(new kg(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;vl(f.b.jb());f.h=true;try{uc(f,f.j,f.k);}catch(a){a=zi(a);if(pi(a,11)){d=a;vc(f);throw d;}else throw a;}}
function zc(b,c,d){var a;this.b=b;a=tk((Fj(),nk));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Ek((Fj(),nk));cg();this.j=c;this.k=d;}
function Ac(a){}
function Bc(a){}
function Cc(d,e,f){var a,c;if(!this.h){if(this.n){yc(this);}if(!this.h){return;}}Ek((Fj(),nk));try{kb(this.d,e,f);}catch(a){a=zi(a);if(pi(a,11)){c=a;vc(this);throw c;}else throw a;}}
function Dc(g,h,i){var a,a,d,e,f;d=tk((Fj(),nk));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{ql(this.b.jb());uc(this,h,i);this.h=false;if(this.i===null){vc(this);return;}try{D(this.e,this.g,this.i.ib());}catch(a){a=zi(a);if(pi(a,12)){a;vc(this);return;}else throw a;}try{this.i.uc(this.o,this.g,this.e);}catch(a){a=zi(a);if(pi(a,13)){a;vc(this);return;}else throw a;}bd(this.e,this.g,this.i.ib());e=this.i.hc(this.o,this.g,this.e);C(this.e,e);}catch(a){a=zi(a);if(pi(a,11)){f=a;vc(this);throw f;}else throw a;}finally{this.i=null;}}
function rc(){}
_=rc.prototype=new eG();_.mc=zc;_.nc=Ac;_.oc=Bc;_.pc=Cc;_.qc=Dc;_.tN=DN+'MouseDragHandler';_.tI=16;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ad(){ad=CN;v();}
function Fc(c,b,a){ad();t(c,b,a);return c;}
function bd(c,a,b){w(c,a,b);if(c.c!==null){c.c=null;if(c.e!==null){CC(c.e);c.e=null;}else{if(b===null){ab(c,a);}}bb(c,a);CC(c.f);c.f=null;}}
function cd(d,a){var b,c;x(d,a);d.c=a;d.e=d.Cb(a);cb(d,a);c=lg(new kg(),a,d.h);d.f=mz(new fz());kB(d.f,'dragdrop-movable-panel');if(d.e===null){tB(d.f,a.pb(),a.ob());}nq(d.h,d.f,c.a,c.d);b=d.e!==null?d.e:d.c;d.f.cd(b);}
function dd(b,a){b.d=a;}
function ed(a){var b;if(this.d){b=nv(new rt(),'this is a Drag Proxy');kB(b,'dragdrop-proxy');tB(b,this.c.pb(),this.c.ob());return b;}else{return null;}}
function Ec(){}
_=Ec.prototype=new r();_.Cb=ed;_.tN=DN+'PickupDragController';_.tI=17;_.c=null;_.d=false;_.e=null;_.f=null;function vH(){vH=CN;xH=ii('[Ljava.lang.StackTraceElement;',[170],[36],[0],null);}
function sH(a){a.c=xH;}
function tH(a){vH();sH(a);return a;}
function uH(b,a){vH();sH(b);b.b=a;return b;}
function wH(c){var a,b;a=hh(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function yH(){return wH(this);}
function rH(){}
_=rH.prototype=new eG();_.tS=yH;_.tN=iO+'Throwable';_.tI=18;_.a=null;_.b=null;var xH;function AE(){AE=CN;vH();}
function yE(a){AE();tH(a);return a;}
function zE(b,a){AE();uH(b,a);return b;}
function xE(){}
_=xE.prototype=new rH();_.tN=iO+'Exception';_.tI=19;function hd(){hd=CN;AE();}
function gd(a){hd();yE(a);return a;}
function fd(){}
_=fd.prototype=new xE();_.tN=DN+'VetoDragException';_.tI=20;function yd(b,a){b.g=a;kB(a,b.hb());return b;}
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
_=xd.prototype=new eG();_.ib=Dd;_.Ab=Ed;_.hc=Fd;_.ic=ae;_.kc=be;_.rc=ce;_.uc=de;_.tN=EN+'AbstractDropController';_.tI=21;_.g=null;function ge(){ge=CN;me=Ew(new Cw(),'x');}
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
_=ee.prototype=new xd();_.hc=ne;_.ic=oe;_.kc=pe;_.tN=EN+'AbstractPositioningDropController';_.tI=22;_.f=null;var me;function kd(){kd=CN;ge();}
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
_=id.prototype=new ee();_.eb=pd;_.hb=qd;_.Ab=rd;_.hc=sd;_.ic=td;_.kc=ud;_.rc=vd;_.uc=wd;_.tN=EN+'AbsolutePositionDropController';_.tI=23;_.c=null;_.d=null;_.e=null;function se(){se=CN;kd();}
function re(c,b,a){se();jd(c,b);c.a=a;return c;}
function te(b,a,d){var c;if(this.a){c=ig(new hg(),b,this.d.a);if(this.b===null){this.b=lg(new kg(),b,this.d.b);}else{rg(this.b,b);}ng(this.b,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.b;}else{return null;}}
function ue(){return 'dragdrop-boundary';}
function ve(d,c,a){var b;b=md(this,d,c,a);this.b=null;return b;}
function we(b,a){nd(this,b,a);this.b=null;}
function qe(){}
_=qe.prototype=new id();_.eb=te;_.hb=ue;_.hc=ve;_.kc=we;_.tN=EN+'BoundaryDropController';_.tI=24;_.a=false;_.b=null;function ze(b,a){b.b=a;return b;}
function Be(a){return Df(a.b.jb());}
function Ce(a){return Ef(a.b.jb());}
function De(b,a){b.a=a;}
function ye(){}
_=ye.prototype=new eG();_.tN=EN+'DropTargetInfo';_.tI=25;_.a=null;_.b=null;function af(){af=CN;AE();}
function Fe(a){af();yE(a);return a;}
function Ee(){}
_=Ee.prototype=new xE();_.tN=EN+'VetoDropException';_.tI=26;function df(b,a){var c,d;c=rF(b.b-a.a,a.a-b.c);d=rF(b.d-a.b,a.b-b.a);return rF(c,d);}
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
_=bf.prototype=new eG();_.tS=nf;_.tN=FN+'AbstractArea';_.tI=27;_.a=0;_.b=0;_.c=0;_.d=0;function qf(){return '('+this.nb()+', '+this.rb()+')';}
function of(){}
_=of.prototype=new eG();_.tS=qf;_.tN=FN+'AbstractLocation';_.tI=28;function tf(b,a,c){b.a=a;b.b=c;return b;}
function vf(){return this.a;}
function wf(){return this.b;}
function sf(){}
_=sf.prototype=new of();_.nb=vf;_.rb=wf;_.tN=FN+'CoordinateLocation';_.tI=29;_.a=0;_.b=0;function yf(){yf=CN;{bg=new wg();}}
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
_=hg.prototype=new bf();_.tN=FN+'WidgetArea';_.tI=30;function lg(b,c,a){pg(b,c);og(b,a);qg(b);return b;}
function ng(e,c,d,a,b){e.a=rF(c,sF(e.a,a));e.d=rF(d,sF(e.d,b));}
function og(b,a){if(a===null||a===bz()){b.b=0;b.c=0;}else{b.b=mB(a)+Bf(a.jb());b.c=nB(a)+Cf(a.jb());}}
function pg(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=mB(b);a.f=nB(b);}}
function qg(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function rg(a,b){pg(a,b);qg(a);}
function sg(){return this.a;}
function tg(){return this.d;}
function ug(){return '('+this.a+', '+this.d+')';}
function kg(){}
_=kg.prototype=new of();_.nb=sg;_.rb=tg;_.tS=ug;_.tN=FN+'WidgetLocation';_.tI=31;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function ah(c,b,a){return b.contains(a);}
function bh(a,b){return b.pb()-Bg(a,b.jb());}
function ch(a,b){return b.ob()-Ag(a,b.jb());}
function vg(){}
_=vg.prototype=new eG();_.tN=aO+'DOMUtilImpl';_.tI=32;function Dg(){}
_=Dg.prototype=new vg();_.tN=aO+'DOMUtilImplStandard';_.tI=33;function yg(d,c){var b=$doc.defaultView.getComputedStyle(c,null);if(b!=null){var a=b.getPropertyValue('border-left-width');return a.indexOf('px')== -1?0:parseInt(a.substr(0,a.length-2));}else{return 0;}}
function zg(d,c){var b=$doc.defaultView.getComputedStyle(c,null);if(b!=null){var a=b.getPropertyValue('border-top-width');return a.indexOf('px')== -1?0:parseInt(a.substr(0,a.length-2));}else{return 0;}}
function Ag(b,a){return a.clientHeight||0;}
function Bg(b,a){return a.clientWidth||0;}
function Cg(b){var a=$wnd.getSelection();if(a.removeAllRanges){a.removeAllRanges();}else{a.collapse();}}
function wg(){}
_=wg.prototype=new Dg();_.tN=aO+'DOMUtilImplSafari';_.tI=34;function hh(a){return a==null?null:a.tN;}
function jh(a){ih=a;}
var ih=null;function mh(a){return a==null?0:a.$H?a.$H:(a.$H=oh());}
function nh(a){return a==null?0:a.$H?a.$H:(a.$H=oh());}
function oh(){return ++ph;}
var ph=0;function mG(){mG=CN;AE();}
function kG(a){mG();yE(a);return a;}
function lG(b,a){mG();zE(b,a);return b;}
function jG(){}
_=jG.prototype=new xE();_.tN=iO+'RuntimeException';_.tI=35;function sh(){sh=CN;mG();}
function rh(c,b,a){sh();lG(c,'JavaScript '+b+' exception: '+a);return c;}
function qh(){}
_=qh.prototype=new jG();_.tN=bO+'JavaScriptException';_.tI=36;function vh(b,a){if(!pi(a,15)){return false;}return zh(b,oi(a,15));}
function wh(a){return mh(a);}
function xh(){return [];}
function yh(){return {};}
function Ah(a){return vh(this,a);}
function zh(a,b){return a===b;}
function Bh(){return wh(this);}
function Dh(){return Ch(this);}
function Ch(a){if(a.toString)return a.toString();return '[object]';}
function th(){}
_=th.prototype=new eG();_.eQ=Ah;_.hC=Bh;_.tS=Dh;_.tN=bO+'JavaScriptObject';_.tI=37;function Fh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
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
_=Eh.prototype=new eG();_.tN=cO+'Array';_.tI=38;function ni(b,a){return !(!(b&&vi[b][a]));}
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
function Ei(){Ei=CN;mG();}
function Di(b,a){Ei();kG(b);return b;}
function Ci(){}
_=Ci.prototype=new jG();_.tN=dO+'CommandCanceledException';_.tI=41;function tj(a){a.a=bj(new aj(),a);a.b=hK(new fK());a.d=fj(new ej(),a);a.f=jj(new ij(),a);}
function uj(a){tj(a);return a;}
function wj(c){var a,b,d;a=lj(c.f);oj(c.f);b=null;if(pi(a,17)){b=Di(new Ci(),oi(a,17));}else{}if(b!==null){d=ih;if(d!==null){gS(d,b);}}zj(c,false);yj(c);}
function xj(e,d){var a,b,c,f;f=false;try{zj(e,true);pj(e.f,e.b.b);en(e.a,10000);while(mj(e.f)){b=nj(e.f);c=true;try{if(b===null){return;}if(pi(b,17)){a=oi(b,17);a.bb();}else{}}finally{f=qj(e.f);if(f){return;}if(c){oj(e.f);}}if(Cj(oH(),d)){return;}}}finally{if(!f){an(e.a);zj(e,false);yj(e);}}}
function yj(a){if(!rK(a.b)&& !a.e&& !a.c){Aj(a,true);en(a.d,1);}}
function zj(b,a){b.c=a;}
function Aj(b,a){b.e=a;}
function Bj(b,a){jK(b.b,a);yj(b);}
function Cj(a,b){return qF(a-b)>=100;}
function Fi(){}
_=Fi.prototype=new eG();_.tN=dO+'CommandExecutor';_.tI=42;_.c=false;_.e=false;function bn(){bn=CN;ln=hK(new fK());{kn();}}
function Fm(a){bn();return a;}
function an(a){if(a.b){fn(a.c);}else{gn(a.c);}tK(ln,a);}
function cn(e,d){var a,c;try{dn(e);}catch(a){a=zi(a);if(pi(a,16)){c=a;gS(d,c);}else throw a;}}
function dn(a){if(!a.b){tK(ln,a);}a.Dc();}
function en(b,a){if(a<=0){throw CE(new BE(),'must be positive');}an(b);b.b=false;b.c=hn(b,a);jK(ln,b);}
function fn(a){bn();$wnd.clearInterval(a);}
function gn(a){bn();$wnd.clearTimeout(a);}
function hn(b,a){bn();return $wnd.setTimeout(function(){b.cb();},a);}
function jn(){var a;a=ih;if(a!==null){cn(this,a);}else{dn(this);}}
function kn(){bn();pn(new Bm());}
function Am(){}
_=Am.prototype=new eG();_.cb=jn;_.tN=dO+'Timer';_.tI=43;_.b=false;_.c=0;var ln;function cj(){cj=CN;bn();}
function bj(b,a){cj();b.a=a;Fm(b);return b;}
function dj(){if(!this.a.c){return;}wj(this.a);}
function aj(){}
_=aj.prototype=new Am();_.Dc=dj;_.tN=dO+'CommandExecutor$1';_.tI=44;function gj(){gj=CN;bn();}
function fj(b,a){gj();b.a=a;Fm(b);return b;}
function hj(){Aj(this.a,false);xj(this.a,oH());}
function ej(){}
_=ej.prototype=new Am();_.Dc=hj;_.tN=dO+'CommandExecutor$2';_.tI=45;function jj(b,a){b.d=a;return b;}
function lj(a){return oK(a.d.b,a.b);}
function mj(a){return a.c<a.a;}
function nj(b){var a;b.b=b.c;a=oK(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function oj(a){sK(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function pj(b,a){b.a=a;}
function qj(a){return a.b==(-1);}
function rj(){return mj(this);}
function sj(){return nj(this);}
function ij(){}
_=ij.prototype=new eG();_.wb=rj;_.Eb=sj;_.tN=dO+'CommandExecutor$CircularIterator';_.tI=46;_.a=0;_.b=(-1);_.c=0;function Fj(){Fj=CN;ul=hK(new fK());{ml=new co();wo(ml);}}
function ak(a){Fj();jK(ul,a);}
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
function ok(e,d,g,f){Fj();var a,c;try{pk(e,d,g);}catch(a){a=zi(a);if(pi(a,16)){c=a;gS(f,c);}else throw a;}}
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
function pl(a){Fj();var b,c;c=true;if(ul.b>0){b=oi(oK(ul,ul.b-1),18);if(!(c=b.jc(a))){rk(a,true);Ek(a);}}return c;}
function ql(a){Fj();if(tl!==null&&ck(a,tl)){tl=null;}zo(ml,a);}
function rl(b,a){Fj();pp(ml,b,a);}
function sl(a){Fj();tK(ul,a);}
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
var nk=null,ml=null,tl=null,ul;function dm(){dm=CN;fm=uj(new Fi());}
function em(a){dm();if(a===null){throw yF(new xF(),'cmd can not be null');}Bj(fm,a);}
var fm;function im(a){if(pi(a,19)){return ck(this,oi(a,19));}return vh(wi(this,gm),a);}
function jm(){return wh(wi(this,gm));}
function km(){return Fl(this);}
function gm(){}
_=gm.prototype=new th();_.eQ=im;_.hC=jm;_.tS=km;_.tN=dO+'Element';_.tI=47;function pm(a){return vh(wi(this,lm),a);}
function qm(){return wh(wi(this,lm));}
function rm(){return Fk(this);}
function lm(){}
_=lm.prototype=new th();_.eQ=pm;_.hC=qm;_.tS=rm;_.tN=dO+'Event';_.tI=48;function tm(){tm=CN;wm=hK(new fK());{xm=Cp(new Bp());if(!Fp(xm)){xm=null;}}}
function um(e,d){tm();var a,c;try{vm(e);}catch(a){a=zi(a);if(pi(a,16)){c=a;gS(d,c);}else throw a;}}
function vm(a){tm();var b,c;for(b=rI(wm);gI(b);){c=ti(hI(b));null.id();}}
function ym(a){tm();if(xm!==null){bq(xm,a);}}
function zm(b){tm();var a;a=ih;if(a!==null){um(b,a);}else{vm(b);}}
var wm,xm=null;function Dm(){while((bn(),ln).b>0){an(oi(oK((bn(),ln),0),20));}}
function Em(){return null;}
function Bm(){}
_=Bm.prototype=new eG();_.xc=Dm;_.yc=Em;_.tN=dO+'Timer$1';_.tI=49;function on(){on=CN;qn=hK(new fK());ao=hK(new fK());{Bn();}}
function pn(a){on();jK(qn,a);}
function rn(d){on();var a,c;try{sn();}catch(a){a=zi(a);if(pi(a,16)){c=a;gS(d,c);}else throw a;}}
function sn(){on();var a,b;for(a=rI(qn);gI(a);){b=oi(hI(a),21);b.xc();}}
function tn(d){on();var a,c;try{return un();}catch(a){a=zi(a);if(pi(a,16)){c=a;gS(d,c);return null;}else throw a;}}
function un(){on();var a,b,c,d;d=null;for(a=rI(qn);gI(a);){b=oi(hI(a),21);c=b.yc();{d=c;}}return d;}
function vn(d){on();var a,c;try{wn();}catch(a){a=zi(a);if(pi(a,16)){c=a;gS(d,c);}else throw a;}}
function wn(){on();var a,b;for(a=rI(ao);gI(a);){b=ti(hI(a));null.id();}}
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
_=bo.prototype=new eG();_.lb=zp;_.tN=eO+'DOMImpl';_.tI=50;function no(c,a,b){return a==b;}
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
_=lo.prototype=new bo();_.tN=eO+'DOMImplStandard';_.tI=51;function fo(b,a){return a.pageX-$doc.body.scrollLeft|| -1;}
function go(b,a){return a.pageY-$doc.body.scrollTop|| -1;}
function ho(e,b){if(b.offsetLeft==null){return 0;}var c=0;var a=b.parentNode;if(a){while(a.offsetParent){c-=a.scrollLeft;a=a.parentNode;}}while(b){c+=b.offsetLeft;var d=b.offsetParent;if(d&&(d.tagName=='BODY'&&b.style.position=='absolute')){break;}b=d;}return c;}
function io(d,b){if(b.offsetTop==null){return 0;}var e=0;var a=b.parentNode;if(a){while(a.offsetParent){e-=a.scrollTop;a=a.parentNode;}}while(b){e+=b.offsetTop;var c=b.offsetParent;if(c&&(c.tagName=='BODY'&&b.style.position=='absolute')){break;}b=c;}return e;}
function jo(a){return $wnd.innerHeight;}
function ko(a){return $wnd.innerWidth;}
function co(){}
_=co.prototype=new lo();_.tN=eO+'DOMImplSafari';_.tI=52;function jq(a){zm(a);}
function Ap(){}
_=Ap.prototype=new eG();_.tN=eO+'HistoryImpl';_.tI=53;function gq(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;jq(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function hq(b,a){if(a==null){a='';}$wnd.location.hash=encodeURIComponent(a);}
function eq(){}
_=eq.prototype=new Ap();_.tN=eO+'HistoryImplStandard';_.tI=54;function Dp(){Dp=CN;dq=cq();}
function Cp(a){Dp();return a;}
function Fp(a){if(dq){Ep(a);return true;}return gq(a);}
function Ep(b){$wnd.__gwt_historyToken='';var a=$wnd.location.hash;if(a.length>0)$wnd.__gwt_historyToken=decodeURIComponent(a.substring(1));jq($wnd.__gwt_historyToken);}
function bq(b,a){if(dq){aq(b,a);return;}hq(b,a);}
function aq(d,a){var b=$doc.createElement('meta');b.setAttribute('http-equiv','refresh');var c=$wnd.location.href.split('#')[0]+'#'+encodeURIComponent(a);b.setAttribute('content','0.01;url='+c);$doc.body.appendChild(b);window.setTimeout(function(){$doc.body.removeChild(b);},1);$wnd.__gwt_historyToken=a;jq($wnd.__gwt_historyToken);}
function cq(){Dp();var a=/ AppleWebKit\/([\d]+)/;var b=a.exec(navigator.userAgent);if(b){if(parseInt(b[1])>=522){return false;}}if(navigator.userAgent.indexOf('iPhone')!= -1){return false;}return true;}
function Bp(){}
_=Bp.prototype=new eq();_.tN=eO+'HistoryImplSafari';_.tI=55;var dq;function kB(b,a){DB(b.qb(),a,true);}
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
_=jB.prototype=new eG();_.jb=wB;_.ob=xB;_.pb=yB;_.qb=zB;_.Fc=BB;_.bd=FB;_.dd=aC;_.tS=bC;_.tN=fO+'UIObject';_.tI=56;_.q=null;function BC(a){if(!a.xb()){throw aF(new EE(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.wc();}finally{a.F();Al(a.jb(),null);a.o=false;}}
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
_=kC.prototype=new jB();_.E=FC;_.F=aD;_.xb=bD;_.ac=cD;_.cc=dD;_.ec=eD;_.lc=fD;_.wc=gD;_.Ec=hD;_.tN=fO+'Widget';_.tI=57;_.o=false;_.p=null;function sx(b,a){EC(a,b);}
function ux(b,a){EC(a,null);}
function vx(){var a,b;for(b=this.yb();b.wb();){a=oi(b.Eb(),14);a.ac();}}
function wx(){var a,b;for(b=this.yb();b.wb();){a=oi(b.Eb(),14);a.ec();}}
function xx(){}
function yx(){}
function rx(){}
_=rx.prototype=new kC();_.E=vx;_.F=wx;_.lc=xx;_.wc=yx;_.tN=fO+'Panel';_.tI=58;function mr(a){a.f=rC(new lC(),a);}
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
_=lr.prototype=new rx();_.yb=yr;_.Cc=zr;_.tN=fO+'ComplexPanel';_.tI=59;function lq(a){nr(a);a.Ec(ek());Dl(a.jb(),'position','relative');Dl(a.jb(),'overflow','hidden');return a;}
function mq(a,b){or(a,b,a.jb());}
function nq(b,d,a,c){CC(d);qq(b,d,a,c);mq(b,d);}
function pq(b,c){var a;a=xr(b,c);if(a){rq(c.jb());}return a;}
function qq(c,e,b,d){var a;a=e.jb();if(b==(-1)&&d==(-1)){rq(a);}else{Dl(a,'position','absolute');Dl(a,'left',b+'px');Dl(a,'top',d+'px');}}
function rq(a){Dl(a,'left','');Dl(a,'top','');Dl(a,'position','');}
function sq(a){return pq(this,a);}
function kq(){}
_=kq.prototype=new lr();_.Cc=sq;_.tN=fO+'AbsolutePanel';_.tI=60;function nt(){nt=CN;uD(),wD;}
function lt(b,a){uD(),wD;ot(b,a);return b;}
function mt(b,a){if(b.c===null){b.c=hr(new gr());}jK(b.c,a);}
function ot(b,a){DC(b,a);vB(b,7041);}
function pt(a){switch(Dk(a)){case 1:if(this.c!==null){jr(this.c,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function qt(a){ot(this,a);}
function kt(){}
_=kt.prototype=new kC();_.cc=pt;_.Ec=qt;_.tN=fO+'FocusWidget';_.tI=61;_.c=null;function vq(){vq=CN;uD(),wD;}
function uq(b,a){uD(),wD;lt(b,a);return b;}
function tq(){}
_=tq.prototype=new kt();_.tN=fO+'ButtonBase';_.tI=62;function xq(a){nr(a);a.e=mk();a.d=jk();bk(a.e,a.d);a.Ec(a.e);return a;}
function zq(c,d,a){var b;b=kl(d.jb());zl(b,'height',a);}
function Aq(c,b,a){zl(b,'align',a.a);}
function Bq(c,b,a){Dl(b,'verticalAlign',a.a);}
function Cq(b,c,d){var a;a=kl(c.jb());zl(a,'width',d);}
function wq(){}
_=wq.prototype=new lr();_.tN=fO+'CellPanel';_.tI=63;_.d=null;_.e=null;function Fq(){Fq=CN;uD(),wD;}
function Eq(b,a){var c;uD(),wD;uq(b,ik());b.a=a;b.b=hk();El(b.a,hl(b.jb()));El(b.jb(),0);bk(b.jb(),b.a);bk(b.jb(),b.b);c='check'+ ++fr;zl(b.a,'id',c);zl(b.b,'htmlFor',c);return b;}
function ar(b){var a;a=b.xb()?'checked':'defaultChecked';return el(b.a,a);}
function br(b,a){xl(b.a,'checked',a);xl(b.a,'defaultChecked',a);}
function cr(b,a){Cl(b.b,a);}
function dr(){Al(this.a,this);}
function er(){Al(this.a,null);br(this,ar(this));}
function Dq(){}
_=Dq.prototype=new tq();_.lc=dr;_.wc=er;_.tN=fO+'CheckBox';_.tI=64;_.a=null;_.b=null;var fr=0;function hr(a){hK(a);return a;}
function jr(d,c){var a,b;for(a=rI(d);gI(a);){b=oi(hI(a),22);b.dc(c);}}
function gr(){}
_=gr.prototype=new fK();_.tN=fO+'ClickListenerCollection';_.tI=65;function Cr(a,b){if(a.d!==null){throw aF(new EE(),'Composite.initWidget() may only be called once.');}CC(b);a.Ec(b.jb());a.d=b;EC(b,a);}
function Dr(){if(this.d===null){throw aF(new EE(),'initWidget() was never called in '+hh(this));}return this.q;}
function Er(){if(this.d!==null){return this.d.xb();}return false;}
function Fr(){this.d.ac();this.lc();}
function as(){try{this.wc();}finally{this.d.ec();}}
function Ar(){}
_=Ar.prototype=new kC();_.jb=Dr;_.xb=Er;_.ac=Fr;_.ec=as;_.tN=fO+'Composite';_.tI=66;_.d=null;function cs(a){nr(a);a.Ec(ek());return a;}
function es(b,c){var a;a=c.jb();Dl(a,'width','100%');Dl(a,'height','100%');c.bd(false);}
function fs(b,c,a){vr(b,c,b.jb(),a,true);es(b,c);}
function gs(b,c){var a;a=xr(b,c);if(a){hs(b,c);if(b.b===c){b.b=null;}}return a;}
function hs(a,b){Dl(b.jb(),'width','');Dl(b.jb(),'height','');b.bd(true);}
function is(b,a){qr(b,a);if(b.b!==null){b.b.bd(false);}b.b=ur(b,a);b.b.bd(true);}
function js(a){return gs(this,a);}
function bs(){}
_=bs.prototype=new lr();_.Cc=js;_.tN=fO+'DeckPanel';_.tI=67;_.b=null;function mz(a){nz(a,ek());return a;}
function nz(b,a){b.Ec(a);return b;}
function oz(a,b){if(a.n!==null){throw aF(new EE(),'SimplePanel can only contain one child widget');}a.cd(b);}
function qz(a,b){if(b===a.n){return;}if(b!==null){CC(b);}if(a.n!==null){a.Cc(a.n);}a.n=b;if(b!==null){bk(a.fb(),a.n.jb());sx(a,b);}}
function rz(){return this.jb();}
function sz(){return iz(new gz(),this);}
function tz(a){if(this.n!==a){return false;}ux(this,a);rl(this.fb(),a.jb());this.n=null;return true;}
function uz(a){qz(this,a);}
function fz(){}
_=fz.prototype=new rx();_.fb=rz;_.yb=sz;_.Cc=tz;_.cd=uz;_.tN=fO+'SimplePanel';_.tI=68;_.n=null;function Fx(){Fx=CN;oy=new xD();}
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
_=zx.prototype=new fz();_.fb=ky;_.ob=ly;_.pb=my;_.qb=ny;_.ec=py;_.jc=qy;_.Fc=ry;_.bd=sy;_.cd=ty;_.dd=uy;_.tN=fO+'PopupPanel';_.tI=69;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var oy;function os(){os=CN;Fx();}
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
_=ks.prototype=new zx();_.jc=qs;_.mc=rs;_.nc=ss;_.oc=ts;_.pc=us;_.qc=vs;_.Cc=ws;_.cd=xs;_.dd=ys;_.tN=fO+'DialogBox';_.tI=70;_.b=null;_.c=0;_.d=0;_.e=false;function yu(a){a.e=ou(new ju());}
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
_=st.prototype=new rx();_.yb=jv;_.cc=kv;_.Cc=lv;_.tN=fO+'HTMLTable';_.tI=71;_.a=null;_.b=null;_.c=null;_.d=null;function Ds(a){zu(a);ev(a,Bs(new As(),a));hv(a,gu(new fu(),a));return a;}
function Fs(b,a){Au(b,a);return Du(b,b.a,a);}
function at(a){return Eu(a);}
function bt(b,a){return av(b,a);}
function ct(e,d,b){var a,c;dt(e,d);if(b<0){throw eF(new cF(),'Cannot create a column with a negative index: '+b);}a=Fs(e,d);c=b+1-a;if(c>0){et(e.a,d,c);}}
function dt(d,b){var a,c;if(b<0){throw eF(new cF(),'Cannot create a row with a negative index: '+b);}c=at(d);for(a=c;a<=b;a++){bt(d,a);}}
function et(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function zs(){}
_=zs.prototype=new st();_.tN=fO+'FlexTable';_.tI=72;function Ct(b,a){b.a=a;return b;}
function Et(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function Ft(c,b,a){return Et(c,c.a.a,b,a);}
function au(d,c,a,b,e){cu(d,c,a,b);du(d,c,a,e);}
function bu(e,d,a,c){var b;ct(e.a,d,a);b=Et(e,e.a.a,d,a);zl(b,'height',c);}
function cu(e,d,b,a){var c;ct(e.a,d,b);c=Et(e,e.a.a,d,b);zl(c,'align',a.a);}
function du(d,c,b,a){ct(d.a,c,b);Dl(Et(d,d.a.a,c,b),'verticalAlign',a.a);}
function eu(c,b,a,d){ct(c.a,b,a);zl(Et(c,c.a.a,b,a),'width',d);}
function Bt(){}
_=Bt.prototype=new eG();_.tN=fO+'HTMLTable$CellFormatter';_.tI=73;function Bs(b,a){Ct(b,a);return b;}
function As(){}
_=As.prototype=new Bt();_.tN=fO+'FlexTable$FlexCellFormatter';_.tI=74;function gt(a){nr(a);a.Ec(ek());return a;}
function ht(a,b){or(a,b,a.jb());}
function jt(b,c,a){vr(b,c,b.jb(),a,true);}
function ft(){}
_=ft.prototype=new lr();_.tN=fO+'FlowPanel';_.tI=75;function Dw(a){a.Ec(ek());vB(a,131197);uB(a,'gwt-Label');return a;}
function Ew(b,a){Dw(b);ex(b,a);return b;}
function Fw(b,a){if(b.b===null){b.b=hr(new gr());}jK(b.b,a);}
function ax(b,a){if(b.c===null){b.c=ix(new hx());}jK(b.c,a);}
function cx(a){return jl(a.jb());}
function dx(b,a){switch(Dk(a)){case 1:if(b.b!==null){jr(b.b,b);}break;case 4:case 8:case 64:case 16:case 32:if(b.c!==null){mx(b.c,b,a);}break;case 131072:break;}}
function ex(b,a){Cl(b.jb(),a);}
function fx(a,b){Dl(a.jb(),'whiteSpace',b?'normal':'nowrap');}
function gx(a){dx(this,a);}
function Cw(){}
_=Cw.prototype=new kC();_.cc=gx;_.tN=fO+'Label';_.tI=76;_.b=null;_.c=null;function mv(a){Dw(a);a.Ec(ek());vB(a,125);uB(a,'gwt-HTML');return a;}
function nv(b,a){mv(b);qv(b,a);return b;}
function ov(b,a,c){nv(b,a);fx(b,c);return b;}
function qv(b,a){Bl(b.jb(),a);}
function rt(){}
_=rt.prototype=new Cw();_.tN=fO+'HTML';_.tI=77;function ut(a){{xt(a);}}
function vt(b,a){b.b=a;ut(b);return b;}
function xt(a){while(++a.a<a.b.b.b){if(oK(a.b.b,a.a)!==null){return;}}}
function yt(a){return a.a<a.b.b.b;}
function zt(){return yt(this);}
function At(){var a;if(!yt(this)){throw yN(new xN());}a=oK(this.b.b,this.a);xt(this);return a;}
function tt(){}
_=tt.prototype=new eG();_.wb=zt;_.Eb=At;_.tN=fO+'HTMLTable$1';_.tI=78;_.a=(-1);function gu(b,a){b.b=a;return b;}
function iu(a){if(a.a===null){a.a=fk('colgroup');nl(a.b.d,a.a,0);bk(a.a,fk('col'));}}
function fu(){}
_=fu.prototype=new eG();_.tN=fO+'HTMLTable$ColumnFormatter';_.tI=79;_.a=null;function nu(a){a.b=hK(new fK());}
function ou(a){nu(a);return a;}
function qu(c,a){var b;b=wu(a);if(b<0){return null;}return oi(oK(c.b,b),14);}
function ru(b,c){var a;if(b.a===null){a=b.b.b;jK(b.b,c);}else{a=b.a.a;uK(b.b,a,c);b.a=b.a.b;}xu(c.jb(),a);}
function su(c,a,b){vu(a);uK(c.b,b,null);c.a=lu(new ku(),b,c.a);}
function tu(c,a){var b;b=wu(a);su(c,a,b);}
function uu(a){return vt(new tt(),a);}
function vu(a){a['__widgetID']=null;}
function wu(a){var b=a['__widgetID'];return b==null?-1:b;}
function xu(a,b){a['__widgetID']=b;}
function ju(){}
_=ju.prototype=new eG();_.tN=fO+'HTMLTable$WidgetMapper';_.tI=80;_.a=null;function lu(c,a,b){c.a=a;c.b=b;return c;}
function ku(){}
_=ku.prototype=new eG();_.tN=fO+'HTMLTable$WidgetMapper$FreeNode';_.tI=81;_.a=0;_.b=null;function xv(){xv=CN;yv=vv(new uv(),'center');zv=vv(new uv(),'left');vv(new uv(),'right');}
var yv,zv;function vv(b,a){b.a=a;return b;}
function uv(){}
_=uv.prototype=new eG();_.tN=fO+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=82;_.a=null;function Fv(){Fv=CN;aw=Dv(new Cv(),'bottom');bw=Dv(new Cv(),'middle');cw=Dv(new Cv(),'top');}
var aw,bw,cw;function Dv(a,b){a.a=b;return a;}
function Cv(){}
_=Cv.prototype=new eG();_.tN=fO+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=83;_.a=null;function gw(a){a.a=(xv(),zv);a.c=(Fv(),cw);}
function hw(a){xq(a);gw(a);a.b=lk();bk(a.d,a.b);zl(a.e,'cellSpacing','0');zl(a.e,'cellPadding','0');return a;}
function iw(b,c){var a;a=kw(b);bk(b.b,a);or(b,c,a);}
function kw(b){var a;a=kk();Aq(b,a,b.a);Bq(b,a,b.c);return a;}
function lw(c,d,a){var b;rr(c,a);b=kw(c);nl(c.b,b,a);vr(c,d,b,a,false);}
function mw(c,d){var a,b;b=kl(d.jb());a=xr(c,d);if(a){rl(c.b,b);}return a;}
function nw(b,a){b.c=a;}
function ow(a){return mw(this,a);}
function fw(){}
_=fw.prototype=new wq();_.Cc=ow;_.tN=fO+'HorizontalPanel';_.tI=84;_.b=null;function qw(a){a.Ec(ek());bk(a.jb(),a.a=dk());vB(a,1);uB(a,'gwt-Hyperlink');return a;}
function rw(c,b,a){qw(c);ww(c,b);vw(c,a);return c;}
function sw(b,a){if(b.b===null){b.b=hr(new gr());}jK(b.b,a);}
function uw(a){return jl(a.a);}
function vw(b,a){b.c=a;zl(b.a,'href','#'+a);}
function ww(b,a){Cl(b.a,a);}
function xw(a){if(Dk(a)==1){if(this.b!==null){jr(this.b,this);}ym(this.c);Ek(a);}}
function pw(){}
_=pw.prototype=new kC();_.cc=xw;_.tN=fO+'Hyperlink';_.tI=85;_.a=null;_.b=null;_.c=null;function Bw(a){return (Ak(a)?1:0)|(zk(a)?8:0)|(wk(a)?2:0)|(sk(a)?4:0);}
function ix(a){hK(a);return a;}
function kx(d,c,e,f){var a,b;for(a=rI(d);gI(a);){b=oi(hI(a),23);b.mc(c,e,f);}}
function lx(d,c){var a,b;for(a=rI(d);gI(a);){b=oi(hI(a),23);b.nc(c);}}
function mx(e,c,a){var b,d,f,g,h;d=c.jb();g=uk(a)-al(d)+fl(d,'scrollLeft')+zn();h=vk(a)-bl(d)+fl(d,'scrollTop')+An();switch(Dk(a)){case 4:kx(e,c,g,h);break;case 8:px(e,c,g,h);break;case 64:ox(e,c,g,h);break;case 16:b=xk(a);if(!ol(d,b)){lx(e,c);}break;case 32:f=Ck(a);if(!ol(d,f)){nx(e,c);}break;}}
function nx(d,c){var a,b;for(a=rI(d);gI(a);){b=oi(hI(a),23);b.oc(c);}}
function ox(d,c,e,f){var a,b;for(a=rI(d);gI(a);){b=oi(hI(a),23);b.pc(c,e,f);}}
function px(d,c,e,f){var a,b;for(a=rI(d);gI(a);){b=oi(hI(a),23);b.qc(c,e,f);}}
function hx(){}
_=hx.prototype=new fK();_.tN=fO+'MouseListenerCollection';_.tI=86;function yy(){yy=CN;uD(),wD;}
function wy(b,a){uD(),wD;Eq(b,gk(a));uB(b,'gwt-RadioButton');return b;}
function xy(c,b,a){uD(),wD;wy(c,b);cr(c,a);return c;}
function vy(){}
_=vy.prototype=new Dq();_.tN=fO+'RadioButton';_.tI=87;function Fy(){Fy=CN;ez=oM(new sL());}
function Ey(b,a){Fy();lq(b);if(a===null){a=az();}b.Ec(a);b.ac();return b;}
function bz(){Fy();return cz(null);}
function cz(c){Fy();var a,b;b=oi(uM(ez,c),24);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=dl(c))){return null;}}if(ez.c==0){dz();}vM(ez,c,b=Ey(new zy(),a));return b;}
function az(){Fy();return $doc.body;}
function dz(){Fy();pn(new Ay());}
function zy(){}
_=zy.prototype=new kq();_.tN=fO+'RootPanel';_.tI=88;var ez;function Cy(){var a,b;for(b=lJ(zJ((Fy(),ez)));sJ(b);){a=oi(tJ(b),24);if(a.xb()){a.ec();}}}
function Dy(){return null;}
function Ay(){}
_=Ay.prototype=new eG();_.xc=Cy;_.yc=Dy;_.tN=fO+'RootPanel$1';_.tI=89;function hz(a){a.a=a.b.n!==null;}
function iz(b,a){b.b=a;hz(b);return b;}
function kz(){return this.a;}
function lz(){if(!this.a||this.b.n===null){throw yN(new xN());}this.a=false;return this.b.n;}
function gz(){}
_=gz.prototype=new eG();_.wb=kz;_.Eb=lz;_.tN=fO+'SimplePanel$1';_.tI=90;function Ez(a){a.a=hw(new fw());}
function Fz(c){var a,b;Ez(c);Cr(c,c.a);vB(c,1);uB(c,'gwt-TabBar');nw(c.a,(Fv(),aw));a=ov(new rt(),'&nbsp;',true);b=ov(new rt(),'&nbsp;',true);uB(a,'gwt-TabBarFirst');uB(b,'gwt-TabBarRest');a.Fc('100%');b.Fc('100%');iw(c.a,a);iw(c.a,b);a.Fc('100%');zq(c.a,a,'100%');Cq(c.a,b,'100%');return c;}
function aA(b,a){if(b.c===null){b.c=lA(new kA());}jK(b.c,a);}
function bA(b,a){if(a<0||a>eA(b)){throw dF(new cF());}}
function cA(b,a){if(a<(-1)||a>=eA(b)){throw dF(new cF());}}
function eA(a){return a.a.f.b-2;}
function fA(e,d,a,b){var c;bA(e,b);if(a){c=nv(new rt(),d);}else{c=Ew(new Cw(),d);}fx(c,false);Fw(c,e);uB(c,'gwt-TabBarItem');lw(e.a,c,b+1);}
function gA(b,a){var c;cA(b,a);c=ur(b.a,a+1);if(c===b.b){b.b=null;}mw(b.a,c);}
function hA(b,a){cA(b,a);if(b.c!==null){if(!nA(b.c,b,a)){return false;}}iA(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=ur(b.a,a+1);iA(b,b.b,true);if(b.c!==null){oA(b.c,b,a);}return true;}
function iA(c,a,b){if(a!==null){if(b){kB(a,'gwt-TabBarItem-selected');}else{qB(a,'gwt-TabBarItem-selected');}}}
function jA(b){var a;for(a=1;a<this.a.f.b-1;++a){if(ur(this.a,a)===b){hA(this,a-1);return;}}}
function Dz(){}
_=Dz.prototype=new Ar();_.dc=jA;_.tN=fO+'TabBar';_.tI=91;_.b=null;_.c=null;function lA(a){hK(a);return a;}
function nA(e,c,d){var a,b;for(a=rI(e);gI(a);){b=oi(hI(a),25);if(!b.bc(c,d)){return false;}}return true;}
function oA(e,c,d){var a,b;for(a=rI(e);gI(a);){b=oi(hI(a),25);b.vc(c,d);}}
function kA(){}
_=kA.prototype=new fK();_.tN=fO+'TabListenerCollection';_.tI=92;function CA(a){a.b=yA(new xA());a.a=sA(new rA(),a.b);}
function DA(b){var a;CA(b);a=eC(new cC());fC(a,b.b);fC(a,b.a);zq(a,b.a,'100%');b.b.dd('100%');aA(b.b,b);Cr(b,a);uB(b,'gwt-TabPanel');uB(b.a,'gwt-TabPanelBottom');return b;}
function FA(b,c,a){cB(b,c,a,b.a.f.b);}
function EA(b,a){if(b.c===null){b.c=lA(new kA());}jK(b.c,a);}
function bB(b,a){return ur(b.a,a);}
function dB(d,e,c,a,b){uA(d.a,e,c,a,b);}
function cB(c,d,b,a){dB(c,d,b,false,a);}
function eB(b,a){hA(b.b,a);}
function fB(){return wr(this.a);}
function gB(a,b){if(this.c!==null){return nA(this.c,this,b);}return true;}
function hB(a,b){is(this.a,b);if(this.c!==null){oA(this.c,this,b);}}
function iB(a){return vA(this.a,a);}
function qA(){}
_=qA.prototype=new Ar();_.yb=fB;_.bc=gB;_.vc=hB;_.Cc=iB;_.tN=fO+'TabPanel';_.tI=93;_.c=null;function sA(b,a){cs(b);b.a=a;return b;}
function uA(e,f,d,a,b){var c;c=tr(e,f);if(c!=(-1)){vA(e,f);if(c<b){b--;}}AA(e.a,d,a,b);fs(e,f,b);}
function vA(b,c){var a;a=tr(b,c);if(a!=(-1)){BA(b.a,a);return gs(b,c);}return false;}
function wA(a){return vA(this,a);}
function rA(){}
_=rA.prototype=new bs();_.Cc=wA;_.tN=fO+'TabPanel$TabbedDeckPanel';_.tI=94;_.a=null;function yA(a){Fz(a);return a;}
function AA(d,c,a,b){fA(d,c,a,b);}
function BA(b,a){gA(b,a);}
function xA(){}
_=xA.prototype=new Dz();_.tN=fO+'TabPanel$UnmodifiableTabBar';_.tI=95;function dC(a){a.a=(xv(),zv);a.b=(Fv(),cw);}
function eC(a){xq(a);dC(a);zl(a.e,'cellSpacing','0');zl(a.e,'cellPadding','0');return a;}
function fC(b,d){var a,c;c=lk();a=hC(b);bk(c,a);bk(b.d,c);or(b,d,a);}
function hC(b){var a;a=kk();Aq(b,a,b.a);Bq(b,a,b.b);return a;}
function iC(c,e,a){var b,d;rr(c,a);d=lk();b=hC(c);bk(d,b);nl(c.d,d,a);vr(c,e,b,a,false);}
function jC(c){var a,b;b=kl(c.jb());a=xr(this,c);if(a){rl(this.d,kl(b));}return a;}
function cC(){}
_=cC.prototype=new wq();_.Cc=jC;_.tN=fO+'VerticalPanel';_.tI=96;function rC(b,a){b.a=ii('[Lcom.google.gwt.user.client.ui.Widget;',[172],[14],[4],null);return b;}
function sC(a,b){wC(a,b,a.b);}
function uC(b,a){if(a<0||a>=b.b){throw dF(new cF());}return b.a[a];}
function vC(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function wC(d,e,a){var b,c;if(a<0||a>d.b){throw dF(new cF());}if(d.b==d.a.a){c=ii('[Lcom.google.gwt.user.client.ui.Widget;',[172],[14],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ki(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ki(d.a,b,d.a[b-1]);}ki(d.a,a,e);}
function xC(a){return nC(new mC(),a);}
function yC(c,b){var a;if(b<0||b>=c.b){throw dF(new cF());}--c.b;for(a=b;a<c.b;++a){ki(c.a,a,c.a[a+1]);}ki(c.a,c.b,null);}
function zC(b,c){var a;a=vC(b,c);if(a==(-1)){throw yN(new xN());}yC(b,a);}
function lC(){}
_=lC.prototype=new eG();_.tN=fO+'WidgetCollection';_.tI=97;_.a=null;_.b=0;function nC(b,a){b.b=a;return b;}
function pC(){return this.a<this.b.b-1;}
function qC(){if(this.a>=this.b.b){throw yN(new xN());}return this.b.a[++this.a];}
function mC(){}
_=mC.prototype=new eG();_.wb=pC;_.Eb=qC;_.tN=fO+'WidgetCollection$WidgetIterator';_.tI=98;_.a=(-1);function uD(){uD=CN;vD=qD(new pD());wD=vD!==null?tD(new iD()):vD;}
function tD(a){uD();return a;}
function iD(){}
_=iD.prototype=new eG();_.tN=gO+'FocusImpl';_.tI=99;var vD,wD;function mD(){mD=CN;uD();}
function kD(a){nD(a);oD(a);sD(a);}
function lD(a){mD();tD(a);kD(a);return a;}
function nD(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function oD(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function jD(){}
_=jD.prototype=new iD();_.tN=gO+'FocusImplOld';_.tI=100;function rD(){rD=CN;mD();}
function qD(a){rD();lD(a);return a;}
function sD(b){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus();},0);};}
function pD(){}
_=pD.prototype=new jD();_.tN=gO+'FocusImplSafari';_.tI=101;function zD(a){return ek();}
function xD(){}
_=xD.prototype=new eG();_.tN=gO+'PopupImpl';_.tI=102;function DD(){}
_=DD.prototype=new eG();_.tN=hO+'OutputStream';_.tI=103;function BD(){}
_=BD.prototype=new DD();_.tN=hO+'FilterOutputStream';_.tI=104;function FD(){}
_=FD.prototype=new BD();_.tN=hO+'PrintStream';_.tI=105;function dE(){dE=CN;mG();}
function cE(a){dE();kG(a);return a;}
function bE(){}
_=bE.prototype=new jG();_.tN=iO+'ArrayStoreException';_.tI=106;function gE(){gE=CN;hE=fE(new eE(),false);iE=fE(new eE(),true);}
function fE(a,b){gE();a.a=b;return a;}
function jE(a){return pi(a,30)&&oi(a,30).a==this.a;}
function kE(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function lE(){return this.a?'true':'false';}
function mE(a){gE();return a?iE:hE;}
function eE(){}
_=eE.prototype=new eG();_.eQ=jE;_.hC=kE;_.tS=lE;_.tN=iO+'Boolean';_.tI=107;_.a=false;var hE,iE;function qE(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+sF(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function uE(){uE=CN;mG();}
function sE(a){uE();kG(a);return a;}
function tE(b,a){uE();lG(b,a);return b;}
function rE(){}
_=rE.prototype=new jG();_.tN=iO+'ClassCastException';_.tI=108;function DE(){DE=CN;mG();}
function CE(b,a){DE();lG(b,a);return b;}
function BE(){}
_=BE.prototype=new jG();_.tN=iO+'IllegalArgumentException';_.tI=109;function bF(){bF=CN;mG();}
function FE(a){bF();kG(a);return a;}
function aF(b,a){bF();lG(b,a);return b;}
function EE(){}
_=EE.prototype=new jG();_.tN=iO+'IllegalStateException';_.tI=110;function fF(){fF=CN;mG();}
function dF(a){fF();kG(a);return a;}
function eF(b,a){fF();lG(b,a);return b;}
function cF(){}
_=cF.prototype=new jG();_.tN=iO+'IndexOutOfBoundsException';_.tI=111;function EF(){EF=CN;{dG();}}
function FF(a){EF();return isNaN(a);}
function aG(e,d,c,h){EF();var a,b,f,g;if(e===null){throw CF(new BF(),'Unable to parse null');}b=EG(e);f=b>0&&xG(e,0)==45?1:0;for(a=f;a<b;a++){if(qE(xG(e,a),d)==(-1)){throw CF(new BF(),'Could not parse '+e+' in radix '+d);}}g=bG(e,d);if(FF(g)){throw CF(new BF(),'Unable to parse '+e);}else if(g<c||g>h){throw CF(new BF(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function bG(b,a){EF();return parseInt(b,a);}
function dG(){EF();cG=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var cG=null;function hF(){hF=CN;EF();}
function kF(a){hF();return lF(a,10);}
function lF(b,a){hF();return ri(aG(b,a,(-2147483648),2147483647));}
function mF(a){hF();return kH(a);}
var iF=2147483647,jF=(-2147483648);function pF(a){return a<0?-a:a;}
function qF(a){return a<0?-a:a;}
function rF(a,b){return a>b?a:b;}
function sF(a,b){return a<b?a:b;}
function tF(a){return Math.sqrt(a);}
function wF(){wF=CN;mG();}
function vF(a){wF();kG(a);return a;}
function uF(){}
_=uF.prototype=new jG();_.tN=iO+'NegativeArraySizeException';_.tI=112;function zF(){zF=CN;mG();}
function yF(b,a){zF();lG(b,a);return b;}
function xF(){}
_=xF.prototype=new jG();_.tN=iO+'NullPointerException';_.tI=113;function DF(){DF=CN;DE();}
function CF(b,a){DF();CE(b,a);return b;}
function BF(){}
_=BF.prototype=new BE();_.tN=iO+'NumberFormatException';_.tI=114;function xG(b,a){return b.charCodeAt(a);}
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
_=String.prototype;_.v=fH;_.eQ=gH;_.hC=iH;_.tS=jH;_.tN=iO+'String';_.tI=2;var hH=null;function pG(a){rG(a);return a;}
function qG(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function rG(a){sG(a,'');}
function sG(b,a){b.js=[a];b.length=a.length;}
function uG(a){a.Fb();return a.js[0];}
function vG(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function wG(){return uG(this);}
function oG(){}
_=oG.prototype=new eG();_.Fb=vG;_.tS=wG;_.tN=iO+'StringBuffer';_.tI=115;function nH(){nH=CN;pH=new FD();}
function oH(){nH();return new Date().getTime();}
function qH(a){nH();return nh(a);}
var pH;function BH(){BH=CN;mG();}
function AH(b,a){BH();lG(b,a);return b;}
function zH(){}
_=zH.prototype=new jG();_.tN=iO+'UnsupportedOperationException';_.tI=116;function eI(b,a){b.c=a;return b;}
function gI(a){return a.a<a.c.ed();}
function hI(a){if(!gI(a)){throw yN(new xN());}return a.c.ub(a.b=a.a++);}
function iI(a){if(a.b<0){throw FE(new EE());}a.c.Bc(a.b);a.a=a.b;a.b=(-1);}
function jI(){return gI(this);}
function kI(){return hI(this);}
function lI(){iI(this);}
function dI(){}
_=dI.prototype=new eG();_.wb=jI;_.Eb=kI;_.Ac=lI;_.tN=jO+'AbstractList$IteratorImpl';_.tI=117;_.a=0;_.b=(-1);function nI(b,a){eI(b,a);return b;}
function mI(){}
_=mI.prototype=new dI();_.tN=jO+'AbstractList$ListIteratorImpl';_.tI=118;function xJ(f,d,e){var a,b,c;for(b=jM(f.ab());bM(b);){a=cM(b);c=a.mb();if(d===null?c===null:d.eQ(c)){if(e){dM(b);}return a;}}return null;}
function yJ(b){var a;a=b.ab();return BI(new AI(),b,a);}
function zJ(b){var a;a=tM(b);return jJ(new iJ(),b,a);}
function AJ(a){return xJ(this,a,false)!==null;}
function BJ(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!pi(d,32)){return false;}f=oi(d,32);c=yJ(this);e=f.zb();if(!cK(c,e)){return false;}for(a=DI(c);eJ(a);){b=fJ(a);h=this.vb(b);g=f.vb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function CJ(b){var a;a=xJ(this,b,false);return a===null?null:a.sb();}
function DJ(){var a,b,c;b=0;for(c=jM(this.ab());bM(c);){a=cM(c);b+=a.hC();}return b;}
function EJ(){return yJ(this);}
function FJ(){var a,b,c,d;d='{';a=false;for(c=jM(this.ab());bM(c);){b=cM(c);if(a){d+=', ';}else{a=true;}d+=lH(b.mb());d+='=';d+=lH(b.sb());}return d+'}';}
function zI(){}
_=zI.prototype=new eG();_.z=AJ;_.eQ=BJ;_.vb=CJ;_.hC=DJ;_.zb=EJ;_.tS=FJ;_.tN=jO+'AbstractMap';_.tI=119;function cK(e,b){var a,c,d;if(b===e){return true;}if(!pi(b,33)){return false;}c=oi(b,33);if(c.ed()!=e.ed()){return false;}for(a=c.yb();a.wb();){d=a.Eb();if(!e.A(d)){return false;}}return true;}
function dK(a){return cK(this,a);}
function eK(){var a,b,c;a=0;for(b=this.yb();b.wb();){c=b.Eb();if(c!==null){a+=c.hC();}}return a;}
function aK(){}
_=aK.prototype=new CH();_.eQ=dK;_.hC=eK;_.tN=jO+'AbstractSet';_.tI=120;function BI(b,a,c){b.a=a;b.b=c;return b;}
function DI(b){var a;a=jM(b.b);return cJ(new bJ(),b,a);}
function EI(a){return this.a.z(a);}
function FI(){return DI(this);}
function aJ(){return this.b.a.c;}
function AI(){}
_=AI.prototype=new aK();_.A=EI;_.yb=FI;_.ed=aJ;_.tN=jO+'AbstractMap$1';_.tI=121;function cJ(b,a,c){b.a=c;return b;}
function eJ(a){return a.a.wb();}
function fJ(b){var a;a=b.a.Eb();return a.mb();}
function gJ(){return eJ(this);}
function hJ(){return fJ(this);}
function bJ(){}
_=bJ.prototype=new eG();_.wb=gJ;_.Eb=hJ;_.tN=jO+'AbstractMap$2';_.tI=122;function jJ(b,a,c){b.a=a;b.b=c;return b;}
function lJ(b){var a;a=jM(b.b);return qJ(new pJ(),b,a);}
function mJ(a){return sM(this.a,a);}
function nJ(){return lJ(this);}
function oJ(){return this.b.a.c;}
function iJ(){}
_=iJ.prototype=new CH();_.A=mJ;_.yb=nJ;_.ed=oJ;_.tN=jO+'AbstractMap$3';_.tI=123;function qJ(b,a,c){b.a=c;return b;}
function sJ(a){return a.a.wb();}
function tJ(a){var b;b=a.a.Eb().sb();return b;}
function uJ(){return sJ(this);}
function vJ(){return tJ(this);}
function pJ(){}
_=pJ.prototype=new eG();_.wb=uJ;_.Eb=vJ;_.tN=jO+'AbstractMap$4';_.tI=124;function dL(b){var a,c;a=hK(new fK());for(c=0;c<b.a;c++){jK(a,b[c]);}return a;}
function eL(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.w(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function fL(a){eL(a,a.a,(mL(),nL));}
function mL(){mL=CN;nL=new jL();}
var nL;function lL(a,b){return oi(a,38).v(b);}
function jL(){}
_=jL.prototype=new eG();_.w=lL;_.tN=jO+'Comparators$1';_.tI=125;function qM(){qM=CN;xM=DM();}
function nM(a){{pM(a);}}
function oM(a){qM();nM(a);return a;}
function pM(a){a.a=xh();a.d=yh();a.b=wi(xM,th);a.c=0;}
function rM(b,a){if(pi(a,1)){return bN(b.d,oi(a,1))!==xM;}else if(a===null){return b.b!==xM;}else{return aN(b.a,a,a.hC())!==xM;}}
function sM(a,b){if(a.b!==xM&&FM(a.b,b)){return true;}else if(CM(a.d,b)){return true;}else if(AM(a.a,b)){return true;}return false;}
function tM(a){return gM(new DL(),a);}
function uM(c,a){var b;if(pi(a,1)){b=bN(c.d,oi(a,1));}else if(a===null){b=c.b;}else{b=aN(c.a,a,a.hC());}return b===xM?null:b;}
function vM(c,a,d){var b;if(pi(a,1)){b=eN(c.d,oi(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=dN(c.a,a,d,a.hC());}if(b===xM){++c.c;return null;}else{return b;}}
function wM(c,a){var b;if(pi(a,1)){b=gN(c.d,oi(a,1));}else if(a===null){b=c.b;c.b=wi(xM,th);}else{b=fN(c.a,a,a.hC());}if(b===xM){return null;}else{--c.c;return b;}}
function yM(e,c){qM();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function zM(d,a){qM();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=wL(c.substring(1),e);a.s(b);}}}
function AM(f,h){qM();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.sb();if(FM(h,d)){return true;}}}}return false;}
function BM(a){return rM(this,a);}
function CM(c,d){qM();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(FM(d,a)){return true;}}}return false;}
function DM(){qM();}
function EM(){return tM(this);}
function FM(a,b){qM();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function cN(a){return uM(this,a);}
function aN(f,h,e){qM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(FM(h,d)){return c.sb();}}}}
function bN(b,a){qM();return b[':'+a];}
function dN(f,h,j,e){qM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(FM(h,d)){var i=c.sb();c.ad(j);return i;}}}else{a=f[e]=[];}var c=wL(h,j);a.push(c);}
function eN(c,a,d){qM();a=':'+a;var b=c[a];c[a]=d;return b;}
function fN(f,h,e){qM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(FM(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.sb();}}}}
function gN(c,a){qM();a=':'+a;var b=c[a];delete c[a];return b;}
function sL(){}
_=sL.prototype=new zI();_.z=BM;_.ab=EM;_.vb=cN;_.tN=jO+'HashMap';_.tI=126;_.a=null;_.b=null;_.c=0;_.d=null;var xM;function uL(b,a,c){b.a=a;b.b=c;return b;}
function wL(a,b){return uL(new tL(),a,b);}
function xL(b){var a;if(pi(b,39)){a=oi(b,39);if(FM(this.a,a.mb())&&FM(this.b,a.sb())){return true;}}return false;}
function yL(){return this.a;}
function zL(){return this.b;}
function AL(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function BL(a){var b;b=this.b;this.b=a;return b;}
function CL(){return this.a+'='+this.b;}
function tL(){}
_=tL.prototype=new eG();_.eQ=xL;_.mb=yL;_.sb=zL;_.hC=AL;_.ad=BL;_.tS=CL;_.tN=jO+'HashMap$EntryImpl';_.tI=127;_.a=null;_.b=null;function gM(b,a){b.a=a;return b;}
function iM(d,c){var a,b,e;if(pi(c,39)){a=oi(c,39);b=a.mb();if(rM(d.a,b)){e=uM(d.a,b);return FM(a.sb(),e);}}return false;}
function jM(a){return FL(new EL(),a.a);}
function kM(a){return iM(this,a);}
function lM(){return jM(this);}
function mM(){return this.a.c;}
function DL(){}
_=DL.prototype=new aK();_.A=kM;_.yb=lM;_.ed=mM;_.tN=jO+'HashMap$EntrySet';_.tI=128;function FL(c,b){var a;c.c=b;a=hK(new fK());if(c.c.b!==(qM(),xM)){jK(a,uL(new tL(),null,c.c.b));}zM(c.c.d,a);yM(c.c.a,a);c.a=rI(a);return c;}
function bM(a){return gI(a.a);}
function cM(a){return a.b=oi(hI(a.a),39);}
function dM(a){if(a.b===null){throw aF(new EE(),'Must call next() before remove().');}else{iI(a.a);wM(a.c,a.b.mb());a.b=null;}}
function eM(){return bM(this);}
function fM(){return cM(this);}
function EL(){}
_=EL.prototype=new eG();_.wb=eM;_.Eb=fM;_.tN=jO+'HashMap$EntrySetIterator';_.tI=129;_.a=null;_.b=null;function iN(a){a.a=oM(new sL());return a;}
function jN(c,a){var b;b=vM(c.a,a,mE(true));return b===null;}
function lN(a){return DI(yJ(a.a));}
function mN(b,a){return wM(b.a,a)!==null;}
function nN(a){return jN(this,a);}
function oN(a){return rM(this.a,a);}
function pN(){return lN(this);}
function qN(){return this.a.c;}
function rN(){return yJ(this.a).tS();}
function hN(){}
_=hN.prototype=new aK();_.s=nN;_.A=oN;_.yb=pN;_.ed=qN;_.tS=rN;_.tN=jO+'HashSet';_.tI=130;_.a=null;function zN(){zN=CN;mG();}
function yN(a){zN();kG(a);return a;}
function xN(){}
_=xN.prototype=new jG();_.tN=jO+'NoSuchElementException';_.tI=131;function rO(){}
_=rO.prototype=new eG();_.tN=kO+'BezierCurve';_.tI=132;function tO(a){{yO(a);}}
function uO(a){tO(a);return a;}
function xO(i,d,e,a,b){var c,f,g,h,j;h=xQ(new wQ(),sF(d.a,e.a),sF(d.b,e.b));j=pF(d.a-e.a);c=pF(d.b-e.b);g=rF(j,c);g=rF(g,pF(d.a-a.a));g=rF(g,pF(d.b-a.b));g=rF(g,pF(e.a-b.a));g=rF(g,pF(e.b-b.b));f=xQ(new wQ(),h.a-g,h.b-g);Dl(i.a,'left',mF(f.a));Dl(i.a,'top',mF(f.b));wl(i.a,'width',mF(j+g*2));wl(i.a,'height',mF(c+g*2));Dl(i.a,'width',mF(j+g*2));Dl(i.a,'height',mF(c+g*2));wO(i,AQ(d,CQ(f)),AQ(e,CQ(f)),AQ(a,CQ(f)),AQ(b,CQ(f)),zO(i.a,'color'));}
function wO(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function yO(b){var a;b.a=fk('canvas');a=cl(b.a,'class');wl(b.a,'class',a+' gwt-diagrams-canvas');}
function zO(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function sO(){}
_=sO.prototype=new rO();_.tN=kO+'BezierCurveCanvas';_.tI=133;_.a=null;function CO(a){a.c=hK(new fK());}
function DO(c,d){var a,b;CO(c);iK(c.c,d);dP(c,c.B());for(b=rI(c.c);gI(b);){a=oi(hI(b),35);a.x(c);}return c;}
function EO(a,b){DO(a,dL(b));return a;}
function aP(a){return a.b.u(a.c);}
function bP(c,a){var b;b=pK(c.c,a);if(b>(-1)){tK(c.c,a);bR(a,c);}}
function cP(c){var a,b;for(b=sI(c.c);b.wb();){a=oi(b.Eb(),35);b.Ac();a.D(c);}CC(c);}
function dP(b,a){b.b=a;}
function eP(a){a.gd(aP(a));}
function fP(){cP(this);}
function gP(){eP(this);}
function BO(){}
_=BO.prototype=new kC();_.Ac=fP;_.fd=gP;_.tN=lO+'AbstractConnection';_.tI=134;_.b=null;function iP(a){a.a=uO(new sO());}
function kP(a,b){EO(a,b);iP(a);if(b.a!=2){throw CE(new BE(),'Need exactly two connectors to connect');}a.Ec(a.a.a);kB(a,'gwt-diagrams-connection');return a;}
function jP(c,a,b){kP(c,ji('[Lpl.balon.gwt.diagrams.client.connector.Connector;',169,35,[a,b]));return c;}
function mP(){return new EP();}
function nP(){return this.a.a;}
function oP(){cP(this);}
function pP(b){var a;if(!pi(b,40)){throw CE(new BE(),'Expected BezierConnectionData');}a=oi(b,40);if(a.b.b!=2){throw CE(new BE(),'Expected two connection points');}if(a.a.b!=2){throw CE(new BE(),'Expected two control points');}xO(this.a,oi(oK(a.b,0),34),oi(oK(a.b,1),34),oi(oK(a.a,0),34),oi(oK(a.a,1),34));}
function hP(){}
_=hP.prototype=new BO();_.B=mP;_.jb=nP;_.Ac=oP;_.gd=pP;_.tN=lO+'BezierTwoEndedConnection';_.tI=135;function sP(a){a.a=hK(new fK());}
function uP(a,b){EO(a,b);sP(a);if(b.a!=2){throw CE(new BE(),'Need exactly two connectors to connect');}a.Ec(ek());kB(a,'gwt-diagrams-connection');return a;}
function tP(c,a,b){uP(c,ji('[Lpl.balon.gwt.diagrams.client.connector.Connector;',169,35,[a,b]));return c;}
function wP(d,a){var b,c;for(c=d.a.b;c<a;c++){b=ek();jK(d.a,wi(b,gm));bk(d.jb(),b);Bl(b,'&nbsp;');}while(d.a.b>a){b=oi(oK(d.a,0),19);tK(d.a,wi(b,gm));rl(d.jb(),b);}}
function xP(){return new dQ();}
function yP(a){var b,c,d,e,f;if(a.b.b<=1){throw CE(new BE(),'Too few connection points');}wP(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=oi(oK(this.a,d),19);e=oi(oK(a.b,d),34);c=oi(oK(a.b,d+1),34);f='gwt-diagrams-line';wl(b,'style','');zl(b,'className',f);Dl(b,'height','1');Dl(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Dl(b,'height',mF(pF(e.b-c.b)));}else if(e.b==c.b){Dl(b,'width',mF(pF(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Dl(b,'left',mF(sF(e.a,c.a)));Dl(b,'top',mF(sF(e.b,c.b)));zl(b,'className',f);}}
function rP(){}
_=rP.prototype=new BO();_.B=xP;_.gd=yP;_.tN=lO+'RectilinearTwoEndedConnection';_.tI=136;function AP(c,a,b){jP(c,a,b);return c;}
function CP(){return new jQ();}
function DP(a){if(a.b.b!=2){throw CE(new BE(),'Expected two connection points');}xO(this.a,oi(oK(a.b,0),34),oi(oK(a.b,1),34),oi(oK(a.b,1),34),oi(oK(a.b,0),34));}
function zP(){}
_=zP.prototype=new hP();_.B=CP;_.gd=DP;_.tN=lO+'StraightTwoEndedConnection';_.tI=137;function aQ(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=ii('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[171],[37],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=zQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function bQ(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw CE(new BE(),'Unsupported connectors count');}c=oi(oK(e,0),35);d=oi(oK(e,1),35);f=aQ(this,c,d);h=c.zc(f[0]);i=d.zc(f[1]);a=BQ(h,f[0],50);b=BQ(i,f[1],50);g=pQ(new mQ(),ji('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',167,34,[h,i]),ji('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',167,34,[a,b]));return g;}
function EP(){}
_=EP.prototype=new eG();_.u=bQ;_.tN=mO+'BezierConnectionCalculator';_.tI=138;function eQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(mR(),pR);}if(c==1&&d>0){return a!==(mR(),qR);}if(c==0&&d<0){return a!==(mR(),qR);}if(c==1&&d<0){return a!==(mR(),pR);}}else{if(c==0&&d>0){return a!==(mR(),rR);}if(c==1&&d>0){return a!==(mR(),oR);}if(c==0&&d<0){return a!==(mR(),oR);}if(c==1&&d<0){return a!==(mR(),rR);}}return false;}
function gQ(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=ii('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[171],[37],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=zQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function hQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(mR(),qR);}if(c==1&&d>0){return a===(mR(),pR);}if(c==0&&d<0){return a===(mR(),pR);}if(c==1&&d<0){return a===(mR(),qR);}}else{if(c==0&&d>0){return a===(mR(),oR);}if(c==1&&d>0){return a===(mR(),rR);}if(c==0&&d<0){return a===(mR(),rR);}if(c==1&&d<0){return a===(mR(),oR);}}return false;}
function iQ(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw CE(new BE(),'Unsupported connectors count');}a=oi(oK(c,0),35);b=oi(oK(c,1),35);d=tQ(new rQ());e=gQ(this,a,b);i=a.zc(e[0]);j=BQ(i,e[0],10);k=b.zc(e[1]);l=BQ(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(hQ(this,e[0],0,f,true)&&hQ(this,e[1],1,f,true)){g=BQ(j,e[0],pF(si(f/2)));h=xQ(new wQ(),g.a,l.b);}else if(hQ(this,e[0],0,m,false)&&hQ(this,e[1],1,m,false)){g=BQ(j,e[0],pF(si(m/2)));h=xQ(new wQ(),l.a,g.b);}else if(hQ(this,e[0],0,f,true)&&hQ(this,e[1],1,m,false)){g=BQ(j,e[0],pF(f));h=BQ(l,e[1],pF(m));}else if(hQ(this,e[0],0,m,false)&&hQ(this,e[1],1,f,true)){g=BQ(j,e[0],pF(m));h=BQ(l,e[1],pF(f));}else if(hQ(this,e[0],0,f,true)&&eQ(this,e[1],1,f,true)){g=BQ(j,e[0],pF(si(f/2)));h=xQ(new wQ(),g.a,l.b);}else if(eQ(this,e[0],0,f,true)&&hQ(this,e[1],1,f,true)){h=BQ(l,e[1],pF(si(f/2)));g=xQ(new wQ(),h.a,j.b);}else if(hQ(this,e[0],0,m,false)&&eQ(this,e[1],1,m,false)){g=BQ(j,e[0],pF(si(m/2)));h=xQ(new wQ(),l.a,g.b);}else if(eQ(this,e[0],0,m,false)&&hQ(this,e[1],1,m,false)){h=BQ(l,e[1],pF(si(m/2)));g=xQ(new wQ(),j.a,h.b);}else if(eQ(this,e[0],0,f,true)&&eQ(this,e[1],1,f,true)){g=BQ(j,(mR(),qR),si(f/2));h=xQ(new wQ(),g.a,l.b);}else if(eQ(this,e[0],0,m,false)&&eQ(this,e[1],1,m,false)){g=BQ(j,(mR(),oR),si(m/2));h=xQ(new wQ(),l.a,g.b);}else if(eQ(this,e[0],0,f,true)&&eQ(this,e[1],1,m,false)){g=BQ(j,(mR(),qR),f);}else if(eQ(this,e[0],0,m,false)&&eQ(this,e[1],1,f,true)){g=BQ(j,(mR(),oR),m);}jK(d.b,i);jK(d.b,j);if(g!==null){jK(d.b,g);}if(h!==null){jK(d.b,h);}jK(d.b,l);jK(d.b,k);return d;}
function dQ(){}
_=dQ.prototype=new eG();_.u=iQ;_.tN=mO+'FullRectilinearTwoEndedCalculator';_.tI=139;function lQ(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw CE(new BE(),'Unsupported connectors count');}a=oi(oK(e,0),35);b=oi(oK(e,1),35);f=tQ(new rQ());c=xQ(new wQ(),a.nb()+si(a.tb()/2),a.rb()+si(a.kb()/2));d=xQ(new wQ(),b.nb()+si(b.tb()/2),b.rb()+si(b.kb()/2));g=xQ(new wQ(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=si(a.kb()/2);h=g.b!=0?si(j*g.a/pF(g.b)):2147483647;j*= -k;if(pF(h)>si(a.tb()/2)){h=si(a.tb()/2);j=g.a!=0?si(h*g.b/pF(g.a)):2147483647;h*= -i;}jK(f.b,xQ(new wQ(),c.a+h,c.b+j));j=si(b.kb()/2);h=g.b!=0?si(j*g.a/pF(g.b)):2147483647;j*=k;h= -h;if(pF(h)>si(b.tb()/2)){h=si(b.tb()/2);j=g.a!=0?si(h*g.b/pF(g.a)):2147483647;h*=i;j= -j;}jK(f.b,xQ(new wQ(),d.a+h,d.b+j));return f;}
function jQ(){}
_=jQ.prototype=new eG();_.u=lQ;_.tN=mO+'StraightCenterConnectionDataCalculator';_.tI=140;function sQ(a){a.b=hK(new fK());}
function tQ(a){sQ(a);return a;}
function uQ(b,a){sQ(b);iK(b.b,a);return b;}
function rQ(){}
_=rQ.prototype=new eG();_.tN=nO+'ConnectionData';_.tI=141;function nQ(a){a.a=hK(new fK());}
function oQ(c,b,a){uQ(c,b);nQ(c);iK(c.a,a);return c;}
function pQ(c,b,a){oQ(c,dL(b),dL(a));return c;}
function mQ(){}
_=mQ.prototype=new rQ();_.tN=nO+'BezierConnectionData';_.tI=142;function xQ(b,a,c){b.a=a;b.b=c;return b;}
function zQ(b,a){return tF((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function BQ(c,a,b){if(a===(mR(),oR)){return xQ(new wQ(),c.a,c.b+b);}else if(a===(mR(),rR)){return xQ(new wQ(),c.a,c.b-b);}else if(a===(mR(),pR)){return xQ(new wQ(),c.a-b,c.b);}else if(a===(mR(),qR)){return xQ(new wQ(),c.a+b,c.b);}else{throw FE(new EE());}}
function AQ(a,b){return xQ(new wQ(),a.a+b.a,a.b+b.b);}
function CQ(a){return xQ(new wQ(),-a.a,-a.b);}
function wQ(){}
_=wQ.prototype=new eG();_.tN=nO+'Point';_.tI=143;_.a=0;_.b=0;function EQ(a){a.c=iN(new hN());}
function FQ(a){EQ(a);return a;}
function bR(b,a){if(mN(b.c,a)){bP(a,b);}}
function cR(b,a){return BQ(xQ(new wQ(),b.nb()+si(b.tb()/2),b.rb()+si(b.kb()/2)),a,nR(a)?si(b.tb()/2):si(b.kb()/2));}
function dR(c){var a,b;for(b=lN(c.c);eJ(b);){a=oi(fJ(b),41);a.fd();}}
function eR(a){jN(this.c,a);}
function fR(a){bR(this,a);}
function gR(a){return cR(this,a);}
function hR(){return sR();}
function iR(a){return cR(this,a);}
function DQ(){}
_=DQ.prototype=new eG();_.x=eR;_.D=fR;_.db=gR;_.gb=hR;_.zc=iR;_.tN=oO+'AbstractConnector';_.tI=144;function mR(){mR=CN;rR=lR(new kR(),'UP');oR=lR(new kR(),'DOWN');pR=lR(new kR(),'LEFT');qR=lR(new kR(),'RIGHT');}
function lR(b,a){mR();b.a=a;return b;}
function nR(a){return a===pR||a===qR;}
function sR(){mR();return ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',171,37,[rR,oR,pR,qR]);}
function tR(){return this.a;}
function kR(){}
_=kR.prototype=new eG();_.tS=tR;_.tN=oO+'Direction';_.tI=145;_.a=null;var oR,pR,qR,rR;function AR(){AR=CN;cS=oM(new sL());}
function zR(a,b){AR();FQ(a);a.b=b;return a;}
function BR(){return this.b.ob();}
function CR(){var a,b;a=0;b=kl(this.b.jb());while(b!==null){if(AG('relative',ll(b,'position'))){a=al(b);break;}b=kl(b);}return mB(this.b)-a;}
function DR(){var a,b;a=0;b=kl(this.b.jb());while(b!==null){if(AG('relative',ll(b,'position'))){a=bl(b);break;}b=kl(b);}return nB(this.b)-a;}
function ER(){return this.b.pb();}
function FR(a){AR();return oi(uM(cS,a),42);}
function aS(b){AR();var a;if(rM(cS,b)){return oi(uM(cS,b),42);}else{a=zR(new uR(),b);vM(cS,b,a);return a;}}
function bS(c,b){AR();var a;if(rM(cS,c)){return oi(uM(cS,c),42);}else{a=wR(new vR(),c,b);vM(cS,c,a);return a;}}
function uR(){}
_=uR.prototype=new DQ();_.kb=BR;_.nb=CR;_.rb=DR;_.tb=ER;_.tN=oO+'UIObjectConnector';_.tI=146;_.b=null;var cS;function xR(){xR=CN;AR();}
function wR(b,a,c){xR();b.a=c;zR(b,a);return b;}
function yR(){return this.a;}
function vR(){}
_=vR.prototype=new uR();_.gb=yR;_.tN=oO+'UIObjectConnector$1';_.tI=147;function mS(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function nS(a){jh(new eS());em(iS(new hS(),a));}
function dS(){}
_=dS.prototype=new eG();_.tN=pO+'BaseExamplesEntryPoint';_.tI=148;function gS(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=wH(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=ms(new ks(),true);Dl(a.jb(),'backgroundColor','#ABCDEF');nH(),pH;d=FG(d,' ','&nbsp;');ps(a,'<pre>'+d+'<\/pre>');Ex(a);}
function eS(){}
_=eS.prototype=new eG();_.tN=pO+'BaseExamplesEntryPoint$1';_.tI=149;function iS(b,a){b.a=a;return b;}
function kS(){vS(this.a);}
function hS(){}
_=hS.prototype=new eG();_.bb=kS;_.tN=pO+'BaseExamplesEntryPoint$2';_.tI=150;function vS(c){var a,b;b=DA(new qA());mq(cz('tabs'),b);FA(b,EU(new DU()),'Rectilinear');FA(b,wT(new vT()),'Bezier');FA(b,cV(new bV()),'Straight');FA(b,qU(new zT()),'Diagram builder');EA(b,qS(new pS(),c,b));a=mS(c,'tab');if(a===null||AG('',a)){a='0';}eB(b,kF(a));}
function oS(){}
_=oS.prototype=new dS();_.tN=pO+'GwtDiagramsExample';_.tI=151;function qS(b,a,c){b.a=c;return b;}
function sS(a,b){return true;}
function tS(b,c){var a;a=oi(bB(this.a,c),43);nT(a);}
function pS(){}
_=pS.prototype=new eG();_.bc=sS;_.vc=tS;_.tN=pO+'GwtDiagramsExample$1';_.tI=152;function rT(a){a.i=lq(new kq());}
function sT(a){var b;mz(a);rT(a);kB(a,'gwt-diagrams-example');b=eC(new cC());oz(a,b);fC(b,a.i);fC(b,uT(a,mT(a)));return a;}
function uT(e,d){var a,b,c;a=gt(new ft());kB(a,'gwt-diagrams-sources-panel');for(b=rI(d);gI(b);){c=oi(hI(b),14);ht(a,c);}return a;}
function qT(){}
_=qT.prototype=new fz();_.tN=qO+'AbstractExample';_.tI=153;function fT(a){a.g=hK(new fK());}
function gT(a){sT(a);fT(a);a.h=kT(a);Dl(a.i.jb(),'width','450px');Dl(a.i.jb(),'height','350px');a.C();return a;}
function hT(b,a){mq(b.i,a);jK(b.g,a);}
function jT(e,d,c,f,a){var b;b=Ew(new Cw(),d);kB(b,'example-connector');nq(e.i,b,c,f);AS(e.h,b);if(a!==null){return bS(b,ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',171,37,[a]));}return aS(b);}
function kT(b){var a;a=yS(new xS(),b.i,true,b);return a;}
function lT(b,a){tK(b.g,a);}
function mT(f){var a,b,c,d,e;e=hK(new fK());b=DG(hh(f),46);a=aH(hh(f),b+1);jK(e,rw(new pw(),a+'.java',''));jK(e,rw(new pw(),'AbstractExample.java',''));jK(e,rw(new pw(),'AbstractConnectionsExample.java',''));for(d=rI(e);gI(d);){c=oi(hI(d),44);kB(c,'gwt-diagrams-source-link');sw(c,cT(new bT(),f,c));}return e;}
function nT(c){var a,b;for(b=rI(c.g);gI(b);){a=oi(hI(b),41);a.fd();}}
function oT(a){hT(this,a);}
function pT(){var a,b,c,d,e,f,g,h;a=jT(this,'all',50,50,null);b=jT(this,'all',100,100,null);this.y(a,b);c=jT(this,'up',250,50,(mR(),rR));d=jT(this,'down',300,100,(mR(),oR));this.y(c,d);e=jT(this,'left',50,200,(mR(),pR));f=jT(this,'right',100,250,(mR(),qR));this.y(e,f);g=jT(this,'left',250,200,(mR(),pR));h=jT(this,'left',300,250,(mR(),pR));this.y(g,h);}
function wS(){}
_=wS.prototype=new qT();_.t=oT;_.C=pT;_.tN=qO+'AbstractConnectionsExample';_.tI=154;_.h=null;function zS(){zS=CN;ad();}
function yS(d,a,b,c){zS();Fc(d,a,b);return d;}
function AS(a,b){A(a,b);Dl(b.jb(),'position','absolute');Dl(b.jb(),'zIndex','100');}
function BS(a){AS(this,a);}
function CS(b,a){return ES(new DS(),b,a,this);}
function xS(){}
_=xS.prototype=new Ec();_.Bb=BS;_.Db=CS;_.tN=qO+'AbstractConnectionsExample$1';_.tI=155;function FS(){FS=CN;se();}
function ES(d,a,b,c){FS();re(d,a,b);return d;}
function aT(d,c,b){var a;od(this,d,c,b);a=FR(c);if(a!==null){dR(a);}}
function DS(){}
_=DS.prototype=new qe();_.rc=aT;_.tN=qO+'AbstractConnectionsExample$2';_.tI=156;function cT(b,a,c){b.a=c;return b;}
function eT(a){Fn('../source/'+uw(this.a),'','');}
function bT(){}
_=bT.prototype=new eG();_.dc=eT;_.tN=qO+'AbstractConnectionsExample$3';_.tI=157;function wT(a){gT(a);return a;}
function yT(a,b){this.t(jP(new hP(),a,b));}
function vT(){}
_=vT.prototype=new wS();_.y=yT;_.tN=qO+'BezierExample';_.tI=158;function pU(a){a.c=hK(new fK());}
function qU(a){gT(a);pU(a);return a;}
function rU(b,a){hT(b,a);eP(a);}
function tU(c,a,b){if(AG('rectilinear',c.d)){rU(c,tP(new rP(),a,b));}else if(AG('bezier',c.d)){rU(c,jP(new hP(),a,b));}else if(AG('straight',c.d)){rU(c,AP(new zP(),a,b));}}
function uU(e,d,c){var a,b;b=hU(new gU(),cx(d),e);tB(b,d.pb(),d.ob());kB(b,'example-connector');nq(c,b,mB(d)-mB(c),nB(d)-nB(c));AS(e.h,b);a=null;if(AG('T',cx(b))){a=(mR(),rR);}else if(AG('L',cx(b))){a=(mR(),pR);}else if(AG('B',cx(b))){a=(mR(),oR);}else if(AG('R',cx(b))){a=(mR(),qR);}if(a!==null){return bS(b,ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',171,37,[a]));}return aS(b);}
function vU(c,a){var b;b=Ew(new Cw(),a);kB(b,'helpEntry');iw(c.a,b);}
function wU(d,c,a){var b;b=xy(new vy(),'style',c);kB(b,'style-option');br(b,a);if(a){zU(d,c);}iw(d.e,b);mt(b,dU(new cU(),d,c));return b;}
function xU(d,a,c){var b;b=Ew(new Cw(),a);uB(b,'toolbox-node');kB(b,c);iw(d.e,b);d.f.Bb(b);return b;}
function yU(d,e){var a,b,c,f;if(rK(d.c)){kB(e,'selected-connector');b=FR(e).c;for(c=lN(b);eJ(c);){a=oi(fJ(c),41);a.Ac();lT(d,a);}jK(d.c,e);}else if(nK(d.c,e)){qB(e,'selected-connector');tK(d.c,e);}else if(d.c.b==1){f=oi(oK(d.c,0),14);qB(e,'selected-connector');qB(f,'selected-connector');b=FR(e).c;for(c=lN(b);eJ(c);){a=oi(fJ(c),41);a.Ac();lT(d,a);}tU(d,FR(f),FR(e));lK(d.c);}}
function zU(b,a){b.d=a;}
function AU(a){rU(this,a);}
function BU(a,b){tU(this,a,b);}
function CU(){var a,b,c;a=Fc(new Ec(),this.i,true);b=jd(new id(),this.i);this.f=mU(new kU(),b,a,this);this.e=hw(new fw());uB(this.e,'toolbox');this.b=lq(new kq());this.a=hw(new fw());uB(this.a,'helpPanel');c=eC(new cC());uB(c,'builder');fC(c,this.a);fC(c,this.e);fC(c,this.b);mq(this.i,c);xU(this,'A','all');xU(this,'L','left');xU(this,'R','right');xU(this,'T','top');xU(this,'B','bottom');wU(this,'rectilinear',true);wU(this,'bezier',false);wU(this,'straight',false);vU(this,'drag&drop from toolbar to add');vU(this,'CTRL+click to select/connect');vU(this,'DEL to delete selected');ak(FT(new ET(),this));}
function zT(){}
_=zT.prototype=new wS();_.t=AU;_.y=BU;_.C=CU;_.tN=qO+'DiagramBuilderExample';_.tI=159;_.a=null;_.b=null;_.d=null;_.e=null;_.f=null;function BT(b,a,c){b.a=a;b.b=c;return b;}
function DT(a){var b,c,d;b=a.d;d=oi(uM(this.a.a,b),14);c=this.b.g;uU(this.a.b,oi(d,45),c);throw gd(new fd());}
function AT(){}
_=AT.prototype=new rb();_.sc=DT;_.tN=qO+'DiagramBuilderExample$1';_.tI=160;function FT(b,a){b.a=a;return b;}
function bU(a){var b,c;if(128==Dk(a)&&46==yk(a)&& !rK(this.a.c)){for(b=sI(this.a.c);gI(b);){c=oi(hI(b),14);iI(b);CC(c);}return false;}return true;}
function ET(){}
_=ET.prototype=new eG();_.jc=bU;_.tN=qO+'DiagramBuilderExample$2';_.tI=161;function dU(b,a,c){b.a=a;b.b=c;return b;}
function fU(a){zU(this.a,this.b);}
function cU(){}
_=cU.prototype=new eG();_.dc=fU;_.tN=qO+'DiagramBuilderExample$3';_.tI=162;function hU(c,a,b){c.a=b;Ew(c,a);return c;}
function jU(a){if(Dk(a)==1&&wk(a)){yU(this.a,this);}dx(this,a);}
function gU(){}
_=gU.prototype=new Cw();_.cc=jU;_.tN=qO+'DiagramBuilderExample$4';_.tI=163;function nU(){nU=CN;ad();}
function lU(a){a.a=oM(new sL());}
function mU(d,a,b,c){nU();d.b=c;Fc(d,d.b.i,false);lU(d);dd(d,true);F(d,a);u(d,BT(new AT(),d,a));return d;}
function oU(a){var b,c;b=oi(a,45);c=Ew(new Cw(),cx(b));kB(c,'dragdrop-proxy');kB(c,'toolbox-node-proxy');tB(c,b.pb(),b.ob());vM(this.a,b,c);return c;}
function kU(){}
_=kU.prototype=new Ec();_.Cb=oU;_.tN=qO+'DiagramBuilderExample$ToolboxDragController';_.tI=164;function EU(a){gT(a);return a;}
function aV(a,b){this.t(tP(new rP(),a,b));}
function DU(){}
_=DU.prototype=new wS();_.y=aV;_.tN=qO+'RectilinearExample';_.tI=165;function cV(a){gT(a);return a;}
function eV(c,a,b){c.t(AP(new zP(),a,b));}
function fV(a,b){eV(this,a,b);}
function gV(){var a,b;a=jT(this,'connector 1',50,50,(mR(),rR));b=jT(this,'connector 2',200,200,(mR(),oR));eV(this,a,b);}
function bV(){}
_=bV.prototype=new wS();_.y=fV;_.C=gV;_.tN=qO+'StraightConnectionsExample';_.tI=166;function AD(){nS(new oS());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{AD();}catch(a){b(d);}else{AD();}}
var vi=[{},{27:1},{1:1,27:1,38:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{7:1,27:1},{27:1},{27:1,31:1},{27:1,31:1},{27:1,31:1},{27:1},{27:1},{10:1,27:1,38:1},{23:1,27:1},{27:1},{16:1,27:1},{16:1,27:1},{12:1,16:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{27:1},{13:1,16:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{15:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1},{20:1,27:1},{20:1,27:1},{20:1,27:1},{27:1},{15:1,19:1,27:1},{15:1,27:1},{21:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1,28:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{2:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,23:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{5:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,45:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{3:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,44:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{2:1,14:1,24:1,26:1,27:1,28:1,29:1},{21:1,27:1},{27:1},{14:1,22:1,27:1,28:1,29:1},{27:1,31:1},{14:1,25:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,22:1,27:1,28:1,29:1},{4:1,14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1,30:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{27:1},{11:1,16:1,27:1},{27:1},{27:1},{27:1,32:1},{27:1,33:1},{27:1,33:1},{27:1},{27:1},{27:1},{27:1},{27:1,32:1},{27:1,39:1},{27:1,33:1},{27:1},{27:1,33:1},{11:1,16:1,27:1},{27:1},{27:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{27:1},{27:1},{27:1},{27:1},{27:1,40:1},{27:1,34:1},{27:1,35:1},{27:1,37:1},{27:1,35:1,42:1},{27:1,35:1,42:1},{27:1},{27:1},{17:1,27:1},{27:1},{25:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{8:1,27:1},{22:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{7:1,27:1},{18:1,27:1},{22:1,27:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{9:1,27:1},{27:1},{27:1},{27:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();