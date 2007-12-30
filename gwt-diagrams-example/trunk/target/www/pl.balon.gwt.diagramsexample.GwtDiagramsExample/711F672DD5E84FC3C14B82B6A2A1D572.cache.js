(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,AN='com.allen_sauer.gwt.dragdrop.client.',BN='com.allen_sauer.gwt.dragdrop.client.drop.',CN='com.allen_sauer.gwt.dragdrop.client.util.',DN='com.allen_sauer.gwt.dragdrop.client.util.impl.',EN='com.google.gwt.core.client.',FN='com.google.gwt.lang.',aO='com.google.gwt.user.client.',bO='com.google.gwt.user.client.impl.',cO='com.google.gwt.user.client.ui.',dO='com.google.gwt.user.client.ui.impl.',eO='java.io.',fO='java.lang.',gO='java.util.',hO='pl.balon.gwt.diagrams.client.common.bezier.',iO='pl.balon.gwt.diagrams.client.connection.',jO='pl.balon.gwt.diagrams.client.connection.calculator.',kO='pl.balon.gwt.diagrams.client.connection.data.',lO='pl.balon.gwt.diagrams.client.connector.',mO='pl.balon.gwt.diagramsexample.client.',nO='pl.balon.gwt.diagramsexample.client.examples.';function zN(){}
function dG(a){return this===a;}
function eG(){return nH(this);}
function fG(){return this.tN+'@'+this.hC();}
function bG(){}
_=bG.prototype={};_.eQ=dG;_.hC=eG;_.tS=fG;_.toString=function(){return this.tS();};_.tN=fO+'Object';_.tI=1;function nL(b,a){b.d=a;return b;}
function mL(){}
_=mL.prototype=new bG();_.tN=gO+'EventObject';_.tI=3;_.d=null;function ob(c,b,a){nL(c,b);c.c=a;return c;}
function qb(){var a;a=this.c!==null?'dropTarget='+gg(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+gg(this.d)+')';}
function nb(){}
_=nb.prototype=new mL();_.tS=qb;_.tN=AN+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ob(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new nb();_.tS=q;_.tN=AN+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function v(){v=zN;db=lM(new pL());}
function s(a){a.j=y(a);}
function t(c,b,a){v();s(c);c.h=b!==null?b:Ey();c.g=c.Db(c.h,a);F(c,c.g);c.o=tc(new rc(),c);return c;}
function u(b,a){if(b.i===null){b.i=yb(new xb());}gK(b.i,a);}
function w(c,a,b){nB(a,'dragdrop-dragging');}
function x(b,a){pc(b.j,b.h,a);if(b.i!==null){Bb(b.i,a);}hB(a,'dragdrop-dragging');}
function y(a){return kc(new dc());}
function z(b,c){var a;a=nc(b.j,c,b.h);return a!==null?a:b.g;}
function A(a,b){{B(a,b,b);}}
function B(c,b,a){xc(c.o,b,a);hB(b,'dragdrop-draggable');hB(a,'dragdrop-handle');sM(db,b,a);}
function C(b,a){if(b.i!==null){Ab(b.i,a);}}
function D(c,a,b){if(c.i!==null){Cb(c.i,a,b);}}
function E(b,a){if(b.i!==null){Db(b.i,a);}}
function F(b,a){lc(b.j,a);}
function ab(b,a){if(pi(b.m,2)){kq(oi(b.m,2),a,b.n.a,b.n.d);}else if(pi(b.m,3)){iw(oi(b.m,3),a,b.k);}else if(pi(b.m,4)){fC(oi(b.m,4),a,b.k);}else if(pi(b.m,5)){gt(oi(b.m,5),a,b.k);}else if(pi(b.m,6)){oi(b.m,6).cd(a);}else{throw iG(new gG(),'Unable to handle initialDraggableParent '+hh(b.m));}}
function bb(b,a){if(b.l!==null&&BG(b.l)!=0){Dl(a.jb(),'margin',b.l);}}
function cb(b,a){b.m=a.p;if(pi(b.m,2)){b.n=lg(new kg(),a,b.m);}else if(pi(b.m,3)){b.k=qr(oi(b.m,3),a);}else if(pi(b.m,4)){b.k=qr(oi(b.m,4),a);}else if(pi(b.m,5)){b.k=qr(oi(b.m,5),a);}else if(pi(b.m,6)){}else{throw iG(new gG(),"Unable to handle 'initialDraggableParent instanceof "+hh(b.m)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.l=ll(a.jb(),'margin');if(b.l!==null&&BG(b.l)!=0){Dl(a.jb(),'margin','0px');}}
function eb(a){A(this,a);}
function fb(b,a){return re(new qe(),b,a);}
function r(){}
_=r.prototype=new bG();_.Bb=eb;_.Db=fb;_.tN=AN+'AbstractDragController';_.tI=6;_.g=null;_.h=null;_.i=null;_.k=0;_.l=null;_.m=null;_.n=null;_.o=null;var db;function hb(b,a){b.b=a;return b;}
function jb(a){if(a.c==0){return;}uc(a.b,a.d,a.e);a.a=lH()-a.c;a.c=0;}
function kb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=lH();}if(a.a>80){em(a);}else{jb(a);}}
function lb(){jb(this);}
function gb(){}
_=gb.prototype=new bG();_.bb=lb;_.tN=AN+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function tb(a){}
function ub(a){}
function vb(a){}
function wb(a){}
function rb(){}
_=rb.prototype=new bG();_.fc=tb;_.gc=ub;_.sc=vb;_.tc=wb;_.tN=AN+'DragHandlerAdapter';_.tI=8;function AH(d,a,b){var c;while(a.wb()){c=a.Eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function CH(a){throw xH(new wH(),'add');}
function DH(b){var a;a=AH(this,this.yb(),b);return a!==null;}
function EH(){var a,b,c;c=mG(new lG());a=null;nG(c,'[');b=this.yb();while(b.wb()){if(a!==null){nG(c,a);}else{a=', ';}nG(c,iH(b.Eb()));}nG(c,']');return rG(c);}
function zH(){}
_=zH.prototype=new bG();_.s=CH;_.A=DH;_.tS=EH;_.tN=gO+'AbstractCollection';_.tI=9;function nI(b,a){throw bF(new FE(),'Index: '+a+', Size: '+b.b);}
function oI(a){return bI(new aI(),a);}
function pI(a){return kI(new jI(),a);}
function qI(b,a){throw xH(new wH(),'add');}
function rI(a){this.r(this.ed(),a);return true;}
function sI(e){var a,b,c,d,f;if(e===this){return true;}if(!pi(e,31)){return false;}f=oi(e,31);if(this.ed()!=f.ed()){return false;}c=oI(this);d=f.yb();while(dI(c)){a=eI(c);b=eI(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function tI(){var a,b,c,d;c=1;a=31;b=oI(this);while(dI(b)){d=eI(b);c=31*c+(d===null?0:d.hC());}return c;}
function uI(){return oI(this);}
function vI(a){throw xH(new wH(),'remove');}
function FH(){}
_=FH.prototype=new zH();_.r=qI;_.s=rI;_.eQ=sI;_.hC=tI;_.yb=uI;_.Bc=vI;_.tN=gO+'AbstractList';_.tI=10;function dK(a){{hK(a);}}
function eK(a){dK(a);return a;}
function gK(b,a){CK(b.a,b.b++,a);return true;}
function fK(d,a){var b,c;c=a.yb();b=c.wb();while(c.wb()){CK(d.a,d.b++,c.Eb());}return b;}
function iK(a){hK(a);}
function hK(a){a.a=xh();a.b=0;}
function kK(b,a){return mK(b,a)!=(-1);}
function lK(b,a){if(a<0||a>=b.b){nI(b,a);}return yK(b.a,a);}
function mK(b,a){return nK(b,a,0);}
function nK(c,b,a){if(a<0){nI(c,a);}for(;a<c.b;++a){if(xK(b,yK(c.a,a))){return a;}}return (-1);}
function oK(a){return a.b==0;}
function pK(c,a){var b;b=lK(c,a);AK(c.a,a,1);--c.b;return b;}
function qK(c,b){var a;a=mK(c,b);if(a==(-1)){return false;}pK(c,a);return true;}
function rK(d,a,b){var c;c=lK(d,a);CK(d.a,a,b);return c;}
function sK(c,a){var b;if(a.a<c.b){a=di(a,c.b);}for(b=0;b<c.b;++b){ki(a,b,yK(c.a,b));}if(a.a>c.b){ki(a,c.b,null);}return a;}
function uK(a,b){if(a<0||a>this.b){nI(this,a);}tK(this.a,a,b);++this.b;}
function vK(a){return gK(this,a);}
function tK(a,b,c){a.splice(b,0,c);}
function wK(a){return kK(this,a);}
function xK(a,b){return a===b||a!==null&&a.eQ(b);}
function zK(a){return lK(this,a);}
function yK(a,b){return a[b];}
function BK(a){return pK(this,a);}
function AK(a,c,b){a.splice(c,b);}
function CK(a,b,c){a[b]=c;}
function DK(){return this.b;}
function cK(){}
_=cK.prototype=new FH();_.r=uK;_.s=vK;_.A=wK;_.ub=zK;_.Bc=BK;_.ed=DK;_.tN=gO+'ArrayList';_.tI=11;_.a=null;_.b=0;function yb(a){eK(a);return a;}
function Ab(d,a){var b,c;for(c=oI(d);dI(c);){b=oi(eI(c),7);b.fc(a);}}
function Bb(e,d){var a,b,c;a=ac(new Fb(),d);for(c=oI(e);dI(c);){b=oi(eI(c),7);b.gc(a);}}
function Cb(f,e,a){var b,c,d;b=ob(new nb(),e,a);for(d=oI(f);dI(d);){c=oi(eI(d),7);c.sc(b);}}
function Db(e,d){var a,b,c;a=ac(new Fb(),d);for(c=oI(e);dI(c);){b=oi(eI(c),7);b.tc(a);}}
function xb(){}
_=xb.prototype=new cK();_.tN=AN+'DragHandlerCollection';_.tI=12;function ac(b,a){nL(b,a);return b;}
function cc(){return 'DragStartEvent(source='+gg(this.d)+')';}
function Fb(){}
_=Fb.prototype=new mL();_.tS=cc;_.tN=AN+'DragStartEvent';_.tI=13;function jc(a){a.a=eK(new cK());}
function kc(a){jc(a);return a;}
function lc(b,a){gK(b.a,a);}
function nc(g,h,a){var b,c,d,e,f,i,j,k;i=ig(new hg(),h,null);j=ef(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(hf(f,i)){k=df(f,j);if(k<=c){if(e===null|| !zf(hc(b).jb(),hc(e).jb())){c=k;e=b;}}}}return e===null?null:e.a;}
function oc(a){return oI(a.a);}
function pc(h,b,d){var a,c,e,f,g;a=ig(new hg(),b,null);g=eK(new cK());for(f=oc(h);dI(f);){e=oi(eI(f),8);c=fc(new ec(),e);if(!zf(d.jb(),hc(c).jb())){if(hf(c.b,a)){gK(g,c);}}}h.b=oi(sK(g,ji('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',173,10,[])),9);cL(h.b);}
function dc(){}
_=dc.prototype=new bG();_.tN=AN+'DropControllerCollection';_.tI=14;_.b=null;function fc(c,a){var b;c.a=a;b=a.ib();if(!b.xb()){throw DE(new BE(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=ig(new hg(),b,null);return c;}
function hc(a){return a.a.ib();}
function ic(a){var b;b=oi(a,10);return zf(hc(this).jb(),hc(b).jb())?1:(-1);}
function ec(){}
_=ec.prototype=new bG();_.v=ic;_.tN=AN+'DropControllerCollection$Candidate';_.tI=15;_.a=null;_.b=null;function sc(a){a.d=hb(new gb(),a);a.f=lM(new pL());}
function tc(b,a){sc(b);b.e=a;b.a=a.h;return b;}
function uc(e,f,g){var a,b,c,d;c=lg(new kg(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=oF(0,pF(a,e.l));b=oF(0,pF(b,e.m));}Af(e.o.jb(),a,b);d=z(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.kc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ic(e.o,e.g,e.e);}}if(e.i!==null){e.i.rc(e.o,e.g,e.e);}}
function vc(b){var a;ql(b.b.jb());b.h=false;if(b.i!==null){b.i.kc(b.g,b.e);}b.i=null;bd(b.e,b.g,null);a=ob(new nb(),b.g,null);C(b.e,a);}
function xc(c,b,a){if(a!==null){Dw(a,c);sM(c.f,a,b);}else{throw iG(new gG(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function yc(f){var a,c,d,e;f.g=oi(rM(f.f,f.b),14);try{E(f.e,f.g);}catch(a){a=zi(a);if(pi(a,12)){a;return;}else throw a;}cd(f.e,f.g);f.o=f.e.f;f.l=Ef(f.a.jb())-f.o.pb();f.m=Df(f.a.jb())-f.o.ob();e=lg(new kg(),f.b,f.a);c=lg(new kg(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;vl(f.b.jb());f.h=true;try{uc(f,f.j,f.k);}catch(a){a=zi(a);if(pi(a,11)){d=a;vc(f);throw d;}else throw a;}}
function zc(b,c,d){var a;this.b=b;a=tk((Fj(),nk));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Ek((Fj(),nk));cg();this.j=c;this.k=d;}
function Ac(a){}
function Bc(a){}
function Cc(d,e,f){var a,c;if(!this.h){if(this.n){yc(this);}if(!this.h){return;}}Ek((Fj(),nk));try{kb(this.d,e,f);}catch(a){a=zi(a);if(pi(a,11)){c=a;vc(this);throw c;}else throw a;}}
function Dc(g,h,i){var a,a,d,e,f;d=tk((Fj(),nk));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{ql(this.b.jb());uc(this,h,i);this.h=false;if(this.i===null){vc(this);return;}try{D(this.e,this.g,this.i.ib());}catch(a){a=zi(a);if(pi(a,12)){a;vc(this);return;}else throw a;}try{this.i.uc(this.o,this.g,this.e);}catch(a){a=zi(a);if(pi(a,13)){a;vc(this);return;}else throw a;}bd(this.e,this.g,this.i.ib());e=this.i.hc(this.o,this.g,this.e);C(this.e,e);}catch(a){a=zi(a);if(pi(a,11)){f=a;vc(this);throw f;}else throw a;}finally{this.i=null;}}
function rc(){}
_=rc.prototype=new bG();_.mc=zc;_.nc=Ac;_.oc=Bc;_.pc=Cc;_.qc=Dc;_.tN=AN+'MouseDragHandler';_.tI=16;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ad(){ad=zN;v();}
function Fc(c,b,a){ad();t(c,b,a);return c;}
function bd(c,a,b){w(c,a,b);if(c.c!==null){c.c=null;if(c.e!==null){zC(c.e);c.e=null;}else{if(b===null){ab(c,a);}}bb(c,a);zC(c.f);c.f=null;}}
function cd(d,a){var b,c;x(d,a);d.c=a;d.e=d.Cb(a);cb(d,a);c=lg(new kg(),a,d.h);d.f=jz(new cz());hB(d.f,'dragdrop-movable-panel');if(d.e===null){qB(d.f,a.pb(),a.ob());}kq(d.h,d.f,c.a,c.d);b=d.e!==null?d.e:d.c;d.f.cd(b);}
function dd(b,a){b.d=a;}
function ed(a){var b;if(this.d){b=kv(new ot(),'this is a Drag Proxy');hB(b,'dragdrop-proxy');qB(b,this.c.pb(),this.c.ob());return b;}else{return null;}}
function Ec(){}
_=Ec.prototype=new r();_.Cb=ed;_.tN=AN+'PickupDragController';_.tI=17;_.c=null;_.d=false;_.e=null;_.f=null;function sH(){sH=zN;uH=ii('[Ljava.lang.StackTraceElement;',[170],[36],[0],null);}
function pH(a){a.c=uH;}
function qH(a){sH();pH(a);return a;}
function rH(b,a){sH();pH(b);b.b=a;return b;}
function tH(c){var a,b;a=hh(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function vH(){return tH(this);}
function oH(){}
_=oH.prototype=new bG();_.tS=vH;_.tN=fO+'Throwable';_.tI=18;_.a=null;_.b=null;var uH;function xE(){xE=zN;sH();}
function vE(a){xE();qH(a);return a;}
function wE(b,a){xE();rH(b,a);return b;}
function uE(){}
_=uE.prototype=new oH();_.tN=fO+'Exception';_.tI=19;function hd(){hd=zN;xE();}
function gd(a){hd();vE(a);return a;}
function fd(){}
_=fd.prototype=new uE();_.tN=AN+'VetoDragException';_.tI=20;function yd(b,a){b.g=a;hB(a,b.hb());return b;}
function Ad(d,c,b,a){nB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.Ab(c,b,a);}
function Bd(d,c,b,a){hB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Cd(c,b,a){nB(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Dd(){return this.g;}
function Ed(c,b,a){return ob(new nb(),b,this.g);}
function Fd(c,b,a){return Ad(this,c,b,a);}
function ae(c,b,a){Bd(this,c,b,a);}
function be(b,a){Cd(this,b,a);}
function ce(c,b,a){}
function de(c,b,a){}
function xd(){}
_=xd.prototype=new bG();_.ib=Dd;_.Ab=Ed;_.hc=Fd;_.ic=ae;_.kc=be;_.rc=ce;_.uc=de;_.tN=BN+'AbstractDropController';_.tI=21;_.g=null;function ge(){ge=zN;me=Bw(new zw(),'x');}
function fe(b,a){ge();yd(b,a);return b;}
function he(f,e){var a,b,c,d;d=jz(new cz());hB(d,'dragdrop-positioner');kq(Ey(),d,(-500),(-500));d.cd(me);a=jz(new cz());c=e.pb()-Ff(d);b=e.ob()-ag(d);qB(a,c,b);d.cd(a);return d;}
function ie(e,d,b,a){var c;c=Ad(e,d,b,a);le(e);return c;}
function je(d,c,b,a){Bd(d,c,b,a);d.f=he(d,b);}
function ke(c,b,a){Cd(c,b,a);le(c);}
function le(a){if(a.f!==null){zC(a.f);}}
function ne(c,b,a){return ie(this,c,b,a);}
function oe(c,b,a){je(this,c,b,a);}
function pe(b,a){ke(this,b,a);}
function ee(){}
_=ee.prototype=new xd();_.hc=ne;_.ic=oe;_.kc=pe;_.tN=BN+'AbstractPositioningDropController';_.tI=22;_.f=null;var me;function kd(){kd=zN;ge();}
function jd(b,a){kd();fe(b,a);b.d=ze(new ye(),a);return b;}
function ld(d,c,a,e){var b;b=d.eb(c,a,e);if(b!==null){kq(d.d.b,e,b.a,b.d);}}
function md(e,d,b,a){var c;kq(e.d.b,b,e.c.a,e.c.d);c=ie(e,d,b,a);e.e=null;return c;}
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
_=id.prototype=new ee();_.eb=pd;_.hb=qd;_.Ab=rd;_.hc=sd;_.ic=td;_.kc=ud;_.rc=vd;_.uc=wd;_.tN=BN+'AbsolutePositionDropController';_.tI=23;_.c=null;_.d=null;_.e=null;function se(){se=zN;kd();}
function re(c,b,a){se();jd(c,b);c.a=a;return c;}
function te(b,a,d){var c;if(this.a){c=ig(new hg(),b,this.d.a);if(this.b===null){this.b=lg(new kg(),b,this.d.b);}else{rg(this.b,b);}ng(this.b,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.b;}else{return null;}}
function ue(){return 'dragdrop-boundary';}
function ve(d,c,a){var b;b=md(this,d,c,a);this.b=null;return b;}
function we(b,a){nd(this,b,a);this.b=null;}
function qe(){}
_=qe.prototype=new id();_.eb=te;_.hb=ue;_.hc=ve;_.kc=we;_.tN=BN+'BoundaryDropController';_.tI=24;_.a=false;_.b=null;function ze(b,a){b.b=a;return b;}
function Be(a){return Df(a.b.jb());}
function Ce(a){return Ef(a.b.jb());}
function De(b,a){b.a=a;}
function ye(){}
_=ye.prototype=new bG();_.tN=BN+'DropTargetInfo';_.tI=25;_.a=null;_.b=null;function af(){af=zN;xE();}
function Fe(a){af();vE(a);return a;}
function Ee(){}
_=Ee.prototype=new uE();_.tN=BN+'VetoDropException';_.tI=26;function df(b,a){var c,d;c=oF(b.b-a.a,a.a-b.c);d=oF(b.d-a.b,a.b-b.a);return oF(c,d);}
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
_=bf.prototype=new bG();_.tS=nf;_.tN=CN+'AbstractArea';_.tI=27;_.a=0;_.b=0;_.c=0;_.d=0;function qf(){return '('+this.nb()+', '+this.rb()+')';}
function of(){}
_=of.prototype=new bG();_.tS=qf;_.tN=CN+'AbstractLocation';_.tI=28;function tf(b,a,c){b.a=a;b.b=c;return b;}
function vf(){return this.a;}
function wf(){return this.b;}
function sf(){}
_=sf.prototype=new of();_.nb=vf;_.rb=wf;_.tN=CN+'CoordinateLocation';_.tI=29;_.a=0;_.b=0;function yf(){yf=zN;{bg=new wg();}}
function zf(b,a){yf();return yg(bg,b,a);}
function Af(a,b,c){yf();a.style.left=b+'px';a.style.top=c+'px';}
function Bf(a){yf();return Bg(bg,a);}
function Cf(a){yf();return Cg(bg,a);}
function Df(a){yf();return Dg(bg,a);}
function Ef(a){yf();return Eg(bg,a);}
function Ff(a){yf();return bh(bg,a);}
function ag(a){yf();return ch(bg,a);}
function cg(){yf();Fg(bg);}
var bg=null;function gg(a){var b;b=hh(a);return DG(b,AG(b,46)+1);}
function ig(e,g,c){var a,b,d,f;b=jB(g);f=kB(g);if(c!==null){b-=jB(c);b-=Bf(c.jb());f-=kB(c);f-=Cf(c.jb());}d=b+g.pb();a=f+g.ob();kf(e,b);mf(e,f);lf(e,d);jf(e,a);return e;}
function hg(){}
_=hg.prototype=new bf();_.tN=CN+'WidgetArea';_.tI=30;function lg(b,c,a){pg(b,c);og(b,a);qg(b);return b;}
function ng(e,c,d,a,b){e.a=oF(c,pF(e.a,a));e.d=oF(d,pF(e.d,b));}
function og(b,a){if(a===null||a===Ey()){b.b=0;b.c=0;}else{b.b=jB(a)+Bf(a.jb());b.c=kB(a)+Cf(a.jb());}}
function pg(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=jB(b);a.f=kB(b);}}
function qg(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function rg(a,b){pg(a,b);qg(a);}
function sg(){return this.a;}
function tg(){return this.d;}
function ug(){return '('+this.a+', '+this.d+')';}
function kg(){}
_=kg.prototype=new of();_.nb=sg;_.rb=tg;_.tS=ug;_.tN=CN+'WidgetLocation';_.tI=31;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function bh(a,b){return b.pb()-Eg(a,b.jb());}
function ch(a,b){return b.ob()-Dg(a,b.jb());}
function vg(){}
_=vg.prototype=new bG();_.tN=DN+'DOMUtilImpl';_.tI=32;function Bg(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function Cg(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function Dg(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function Eg(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function Fg(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function zg(){}
_=zg.prototype=new vg();_.tN=DN+'DOMUtilImplStandard';_.tI=33;function yg(c,b,a){return !(!(b.compareDocumentPosition(a)&16));}
function wg(){}
_=wg.prototype=new zg();_.tN=DN+'DOMUtilImplMozilla';_.tI=34;function hh(a){return a==null?null:a.tN;}
function jh(a){ih=a;}
var ih=null;function mh(a){return a==null?0:a.$H?a.$H:(a.$H=oh());}
function nh(a){return a==null?0:a.$H?a.$H:(a.$H=oh());}
function oh(){return ++ph;}
var ph=0;function jG(){jG=zN;xE();}
function hG(a){jG();vE(a);return a;}
function iG(b,a){jG();wE(b,a);return b;}
function gG(){}
_=gG.prototype=new uE();_.tN=fO+'RuntimeException';_.tI=35;function sh(){sh=zN;jG();}
function rh(c,b,a){sh();iG(c,'JavaScript '+b+' exception: '+a);return c;}
function qh(){}
_=qh.prototype=new gG();_.tN=EN+'JavaScriptException';_.tI=36;function vh(b,a){if(!pi(a,15)){return false;}return zh(b,oi(a,15));}
function wh(a){return mh(a);}
function xh(){return [];}
function yh(){return {};}
function Ah(a){return vh(this,a);}
function zh(a,b){return a===b;}
function Bh(){return wh(this);}
function Dh(){return Ch(this);}
function Ch(a){if(a.toString)return a.toString();return '[object]';}
function th(){}
_=th.prototype=new bG();_.eQ=Ah;_.hC=Bh;_.tS=Dh;_.tN=EN+'JavaScriptObject';_.tI=37;function Fh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function bi(a,b,c){return a[b]=c;}
function di(a,b){return ci(a,b);}
function ci(a,b){return Fh(new Eh(),b,a.tI,a.b,a.tN);}
function ei(b,a){return b[a];}
function gi(b,a){return b[a];}
function fi(a){return a.length;}
function ii(e,d,c,b,a){return hi(e,d,c,b,0,fi(b),a);}
function hi(j,i,g,c,e,a,b){var d,f,h;if((f=ei(c,e))<0){throw sF(new rF());}h=Fh(new Eh(),f,ei(i,e),ei(g,e),j);++e;if(e<a){j=DG(j,1);for(d=0;d<f;++d){bi(h,d,hi(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){bi(h,d,b);}}return h;}
function ji(f,e,c,g){var a,b,d;b=fi(g);d=Fh(new Eh(),b,e,c,f);for(a=0;a<b;++a){bi(d,a,gi(g,a));}return d;}
function ki(a,b,c){if(c!==null&&a.b!=0&& !pi(c,a.b)){throw FD(new ED());}return bi(a,b,c);}
function Eh(){}
_=Eh.prototype=new bG();_.tN=FN+'Array';_.tI=38;function ni(b,a){return !(!(b&&vi[b][a]));}
function oi(b,a){if(b!=null)ni(b.tI,a)||ui();return b;}
function pi(b,a){return b!=null&&ni(b.tI,a);}
function qi(a){return a&65535;}
function ri(a){return ~(~a);}
function si(a){if(a>(eF(),fF))return eF(),fF;if(a<(eF(),gF))return eF(),gF;return a>=0?Math.floor(a):Math.ceil(a);}
function ui(){throw pE(new oE());}
function ti(a){if(a!==null){throw pE(new oE());}return a;}
function wi(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var vi;function zi(a){if(pi(a,16)){return a;}return rh(new qh(),Bi(a),Ai(a));}
function Ai(a){return a.message;}
function Bi(a){return a.name;}
function Ei(){Ei=zN;jG();}
function Di(b,a){Ei();hG(b);return b;}
function Ci(){}
_=Ci.prototype=new gG();_.tN=aO+'CommandCanceledException';_.tI=41;function tj(a){a.a=bj(new aj(),a);a.b=eK(new cK());a.d=fj(new ej(),a);a.f=jj(new ij(),a);}
function uj(a){tj(a);return a;}
function wj(c){var a,b,d;a=lj(c.f);oj(c.f);b=null;if(pi(a,17)){b=Di(new Ci(),oi(a,17));}else{}if(b!==null){d=ih;if(d!==null){bS(d,b);}}zj(c,false);yj(c);}
function xj(e,d){var a,b,c,f;f=false;try{zj(e,true);pj(e.f,e.b.b);en(e.a,10000);while(mj(e.f)){b=nj(e.f);c=true;try{if(b===null){return;}if(pi(b,17)){a=oi(b,17);a.bb();}else{}}finally{f=qj(e.f);if(f){return;}if(c){oj(e.f);}}if(Cj(lH(),d)){return;}}}finally{if(!f){an(e.a);zj(e,false);yj(e);}}}
function yj(a){if(!oK(a.b)&& !a.e&& !a.c){Aj(a,true);en(a.d,1);}}
function zj(b,a){b.c=a;}
function Aj(b,a){b.e=a;}
function Bj(b,a){gK(b.b,a);yj(b);}
function Cj(a,b){return nF(a-b)>=100;}
function Fi(){}
_=Fi.prototype=new bG();_.tN=aO+'CommandExecutor';_.tI=42;_.c=false;_.e=false;function bn(){bn=zN;ln=eK(new cK());{kn();}}
function Fm(a){bn();return a;}
function an(a){if(a.b){fn(a.c);}else{gn(a.c);}qK(ln,a);}
function cn(e,d){var a,c;try{dn(e);}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);}else throw a;}}
function dn(a){if(!a.b){qK(ln,a);}a.Dc();}
function en(b,a){if(a<=0){throw zE(new yE(),'must be positive');}an(b);b.b=false;b.c=hn(b,a);gK(ln,b);}
function fn(a){bn();$wnd.clearInterval(a);}
function gn(a){bn();$wnd.clearTimeout(a);}
function hn(b,a){bn();return $wnd.setTimeout(function(){b.cb();},a);}
function jn(){var a;a=ih;if(a!==null){cn(this,a);}else{dn(this);}}
function kn(){bn();pn(new Bm());}
function Am(){}
_=Am.prototype=new bG();_.cb=jn;_.tN=aO+'Timer';_.tI=43;_.b=false;_.c=0;var ln;function cj(){cj=zN;bn();}
function bj(b,a){cj();b.a=a;Fm(b);return b;}
function dj(){if(!this.a.c){return;}wj(this.a);}
function aj(){}
_=aj.prototype=new Am();_.Dc=dj;_.tN=aO+'CommandExecutor$1';_.tI=44;function gj(){gj=zN;bn();}
function fj(b,a){gj();b.a=a;Fm(b);return b;}
function hj(){Aj(this.a,false);xj(this.a,lH());}
function ej(){}
_=ej.prototype=new Am();_.Dc=hj;_.tN=aO+'CommandExecutor$2';_.tI=45;function jj(b,a){b.d=a;return b;}
function lj(a){return lK(a.d.b,a.b);}
function mj(a){return a.c<a.a;}
function nj(b){var a;b.b=b.c;a=lK(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function oj(a){pK(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function pj(b,a){b.a=a;}
function qj(a){return a.b==(-1);}
function rj(){return mj(this);}
function sj(){return nj(this);}
function ij(){}
_=ij.prototype=new bG();_.wb=rj;_.Eb=sj;_.tN=aO+'CommandExecutor$CircularIterator';_.tI=46;_.a=0;_.b=(-1);_.c=0;function Fj(){Fj=zN;ul=eK(new cK());{ml=new co();ko(ml);}}
function ak(a){Fj();gK(ul,a);}
function bk(b,a){Fj();Eo(ml,b,a);}
function ck(a,b){Fj();return fo(ml,a,b);}
function dk(){Fj();return ap(ml,'A');}
function ek(){Fj();return ap(ml,'div');}
function fk(a){Fj();return ap(ml,a);}
function gk(a){Fj();return so(ml,a);}
function hk(){Fj();return ap(ml,'label');}
function ik(){Fj();return ap(ml,'span');}
function jk(){Fj();return ap(ml,'tbody');}
function kk(){Fj();return ap(ml,'td');}
function lk(){Fj();return ap(ml,'tr');}
function mk(){Fj();return ap(ml,'table');}
function qk(b,a,d){Fj();var c;c=ih;if(c!==null){ok(b,a,d,c);}else{pk(b,a,d);}}
function ok(e,d,g,f){Fj();var a,c;try{pk(e,d,g);}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(f,c);}else throw a;}}
function pk(b,a,c){Fj();var d;if(a===tl){if(Dk(b)==8192){tl=null;}}d=nk;nk=b;try{c.cc(b);}finally{nk=d;}}
function rk(b,a){Fj();bp(ml,b,a);}
function sk(a){Fj();return cp(ml,a);}
function tk(a){Fj();return go(ml,a);}
function uk(a){Fj();return dp(ml,a);}
function vk(a){Fj();return ep(ml,a);}
function wk(a){Fj();return fp(ml,a);}
function xk(a){Fj();return to(ml,a);}
function yk(a){Fj();return gp(ml,a);}
function zk(a){Fj();return hp(ml,a);}
function Ak(a){Fj();return ip(ml,a);}
function Bk(a){Fj();return uo(ml,a);}
function Ck(a){Fj();return vo(ml,a);}
function Dk(a){Fj();return jp(ml,a);}
function Ek(a){Fj();wo(ml,a);}
function Fk(a){Fj();return xo(ml,a);}
function al(a){Fj();return ho(ml,a);}
function bl(a){Fj();return io(ml,a);}
function cl(b,a){Fj();return kp(ml,b,a);}
function dl(a){Fj();return lp(ml,a);}
function gl(a,b){Fj();return op(ml,a,b);}
function el(a,b){Fj();return mp(ml,a,b);}
function fl(a,b){Fj();return np(ml,a,b);}
function hl(a){Fj();return pp(ml,a);}
function il(a){Fj();return yo(ml,a);}
function jl(a){Fj();return qp(ml,a);}
function kl(a){Fj();return zo(ml,a);}
function ll(b,a){Fj();return rp(ml,b,a);}
function nl(c,a,b){Fj();Bo(ml,c,a,b);}
function ol(b,a){Fj();return lo(ml,b,a);}
function pl(a){Fj();var b,c;c=true;if(ul.b>0){b=oi(lK(ul,ul.b-1),18);if(!(c=b.jc(a))){rk(a,true);Ek(a);}}return c;}
function ql(a){Fj();if(tl!==null&&ck(a,tl)){tl=null;}mo(ml,a);}
function rl(b,a){Fj();sp(ml,b,a);}
function sl(a){Fj();qK(ul,a);}
function vl(a){Fj();tl=a;Co(ml,a);}
function wl(b,a,c){Fj();tp(ml,b,a,c);}
function zl(a,b,c){Fj();wp(ml,a,b,c);}
function xl(a,b,c){Fj();up(ml,a,b,c);}
function yl(a,b,c){Fj();vp(ml,a,b,c);}
function Al(a,b){Fj();xp(ml,a,b);}
function Bl(a,b){Fj();yp(ml,a,b);}
function Cl(a,b){Fj();zp(ml,a,b);}
function Dl(b,a,c){Fj();Ap(ml,b,a,c);}
function El(a,b){Fj();oo(ml,a,b);}
function Fl(a){Fj();return po(ml,a);}
function am(){Fj();return Bp(ml);}
function bm(){Fj();return Cp(ml);}
var nk=null,ml=null,tl=null,ul;function dm(){dm=zN;fm=uj(new Fi());}
function em(a){dm();if(a===null){throw vF(new uF(),'cmd can not be null');}Bj(fm,a);}
var fm;function im(a){if(pi(a,19)){return ck(this,oi(a,19));}return vh(wi(this,gm),a);}
function jm(){return wh(wi(this,gm));}
function km(){return Fl(this);}
function gm(){}
_=gm.prototype=new th();_.eQ=im;_.hC=jm;_.tS=km;_.tN=aO+'Element';_.tI=47;function pm(a){return vh(wi(this,lm),a);}
function qm(){return wh(wi(this,lm));}
function rm(){return Fk(this);}
function lm(){}
_=lm.prototype=new th();_.eQ=pm;_.hC=qm;_.tS=rm;_.tN=aO+'Event';_.tI=48;function tm(){tm=zN;wm=eK(new cK());{xm=new Fp();if(!eq(xm)){xm=null;}}}
function um(e,d){tm();var a,c;try{vm(e);}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);}else throw a;}}
function vm(a){tm();var b,c;for(b=oI(wm);dI(b);){c=ti(eI(b));null.id();}}
function ym(a){tm();if(xm!==null){bq(xm,a);}}
function zm(b){tm();var a;a=ih;if(a!==null){um(b,a);}else{vm(b);}}
var wm,xm=null;function Dm(){while((bn(),ln).b>0){an(oi(lK((bn(),ln),0),20));}}
function Em(){return null;}
function Bm(){}
_=Bm.prototype=new bG();_.xc=Dm;_.yc=Em;_.tN=aO+'Timer$1';_.tI=49;function on(){on=zN;qn=eK(new cK());ao=eK(new cK());{Bn();}}
function pn(a){on();gK(qn,a);}
function rn(d){on();var a,c;try{sn();}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);}else throw a;}}
function sn(){on();var a,b;for(a=oI(qn);dI(a);){b=oi(eI(a),21);b.xc();}}
function tn(d){on();var a,c;try{return un();}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);return null;}else throw a;}}
function un(){on();var a,b,c,d;d=null;for(a=oI(qn);dI(a);){b=oi(eI(a),21);c=b.yc();{d=c;}}return d;}
function vn(d){on();var a,c;try{wn();}catch(a){a=zi(a);if(pi(a,16)){c=a;bS(d,c);}else throw a;}}
function wn(){on();var a,b;for(a=oI(ao);dI(a);){b=ti(eI(a));null.id();}}
function xn(){on();return am();}
function yn(){on();return bm();}
function zn(){on();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function An(){on();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function Bn(){on();__gwt_initHandlers(function(){En();},function(){return Dn();},function(){Cn();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Cn(){on();var a;a=ih;if(a!==null){rn(a);}else{sn();}}
function Dn(){on();var a;a=ih;if(a!==null){return tn(a);}else{return un();}}
function En(){on();var a;a=ih;if(a!==null){vn(a);}else{wn();}}
function Fn(c,b,a){on();$wnd.open(c,b,a);}
var qn,ao;function Eo(c,b,a){b.appendChild(a);}
function ap(b,a){return $doc.createElement(a);}
function bp(c,b,a){b.cancelBubble=a;}
function cp(b,a){return !(!a.altKey);}
function dp(b,a){return a.clientX|| -1;}
function ep(b,a){return a.clientY|| -1;}
function fp(b,a){return !(!a.ctrlKey);}
function gp(b,a){return a.which||(a.keyCode|| -1);}
function hp(b,a){return !(!a.metaKey);}
function ip(b,a){return !(!a.shiftKey);}
function jp(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function kp(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function lp(c,b){var a=$doc.getElementById(b);return a||null;}
function op(d,a,b){var c=a[b];return c==null?null:String(c);}
function mp(c,a,b){return !(!a[b]);}
function np(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function pp(b,a){return a.__eventBits||0;}
function qp(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.lb(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function rp(d,b,a){var c=b.style[a];return c==null?null:c;}
function sp(c,b,a){b.removeChild(a);}
function tp(c,b,a,d){b.setAttribute(a,d);}
function wp(c,a,b,d){a[b]=d;}
function up(c,a,b,d){a[b]=d;}
function vp(c,a,b,d){a[b]=d;}
function xp(c,a,b){a.__listener=b;}
function yp(c,a,b){if(!b){b='';}a.innerHTML=b;}
function zp(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Ap(c,b,a,d){b.style[a]=d;}
function Bp(a){return $doc.body.clientHeight;}
function Cp(a){return $doc.body.clientWidth;}
function Dp(a){return qp(this,a);}
function bo(){}
_=bo.prototype=new bG();_.lb=Dp;_.tN=bO+'DOMImpl';_.tI=50;function so(c,b){var a=$doc.createElement('INPUT');a.type='radio';a.name=b;return a;}
function to(b,a){return a.relatedTarget?a.relatedTarget:null;}
function uo(b,a){return a.target||null;}
function vo(b,a){return a.relatedTarget||null;}
function wo(b,a){a.preventDefault();}
function xo(b,a){return a.toString();}
function yo(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function zo(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function Ao(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){qk(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!pl(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)qk(b,a,c);};$wnd.__captureElem=null;}
function Bo(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function Co(b,a){$wnd.__captureElem=a;}
function Do(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function qo(){}
_=qo.prototype=new bo();_.tN=bO+'DOMImplStandard';_.tI=51;function fo(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function go(c,b){var a=b.button;if(a==0){return 1;}else if(a==1){return 4;}return a|| -1;}
function ho(b,a){return $doc.getBoxObjectFor(a).screenX-$doc.getBoxObjectFor($doc.documentElement).screenX;}
function io(b,a){return $doc.getBoxObjectFor(a).screenY-$doc.getBoxObjectFor($doc.documentElement).screenY;}
function ko(a){Ao(a);jo(a);}
function jo(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function lo(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function mo(b,a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function oo(c,b,a){Do(c,b,a);no(c,b,a);}
function no(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function po(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function co(){}
_=co.prototype=new qo();_.tN=bO+'DOMImplMozilla';_.tI=52;function gq(a){zm(a);}
function Ep(){}
_=Ep.prototype=new bG();_.tN=bO+'HistoryImpl';_.tI=53;function eq(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;gq(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function cq(){}
_=cq.prototype=new Ep();_.tN=bO+'HistoryImplStandard';_.tI=54;function bq(d,a){if(a==null||a.length==0){var c=$wnd.location.href;var b=c.indexOf('#');if(b!= -1)c=c.substring(0,b);$wnd.location=c+'#';}else{$wnd.location.hash=encodeURIComponent(a);}}
function Fp(){}
_=Fp.prototype=new cq();_.tN=bO+'HistoryImplMozilla';_.tI=55;function hB(b,a){AB(b.qb(),a,true);}
function jB(a){return al(a.jb());}
function kB(a){return bl(a.jb());}
function lB(a){return fl(a.q,'offsetHeight');}
function mB(a){return fl(a.q,'offsetWidth');}
function nB(b,a){AB(b.qb(),a,false);}
function oB(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function pB(b,a){if(b.q!==null){oB(b,b.q,a);}b.q=a;}
function qB(b,c,a){if(c>=0){b.dd(c+'px');}if(a>=0){b.Fc(a+'px');}}
function rB(b,a){zB(b.qb(),a);}
function sB(b,a){El(b.jb(),a|hl(b.jb()));}
function tB(){return this.q;}
function uB(){return lB(this);}
function vB(){return mB(this);}
function wB(){return this.q;}
function xB(a){return gl(a,'className');}
function yB(a){Dl(this.q,'height',a);}
function zB(a,b){zl(a,'className',b);}
function AB(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw iG(new gG(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=FG(j);if(BG(j)==0){throw zE(new yE(),'Style names cannot be empty');}i=xB(c);e=yG(i,j);while(e!=(-1)){if(e==0||uG(i,e-1)==32){f=e+BG(j);g=BG(i);if(f==g||f<g&&uG(i,f)==32){break;}}e=zG(i,j,e+1);}if(a){if(e==(-1)){if(BG(i)>0){i+=' ';}zl(c,'className',i+j);}}else{if(e!=(-1)){b=FG(EG(i,0,e));d=FG(DG(i,e+BG(j)));if(BG(b)==0){h=d;}else if(BG(d)==0){h=b;}else{h=b+' '+d;}zl(c,'className',h);}}}
function BB(a,b){a.style.display=b?'':'none';}
function CB(a){BB(this.q,a);}
function DB(a){Dl(this.q,'width',a);}
function EB(){if(this.q===null){return '(null handle)';}return Fl(this.q);}
function gB(){}
_=gB.prototype=new bG();_.jb=tB;_.ob=uB;_.pb=vB;_.qb=wB;_.Fc=yB;_.bd=CB;_.dd=DB;_.tS=EB;_.tN=cO+'UIObject';_.tI=56;_.q=null;function yC(a){if(!a.xb()){throw DE(new BE(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.wc();}finally{a.F();Al(a.jb(),null);a.o=false;}}
function zC(a){if(pi(a.p,26)){oi(a.p,26).Cc(a);}else if(a.p!==null){throw DE(new BE(),"This widget's parent does not implement HasWidgets");}}
function AC(b,a){if(b.xb()){Al(b.jb(),null);}pB(b,a);if(b.xb()){Al(a,b);}}
function BC(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.xb()){c.ec();}c.p=null;}else{if(a!==null){throw DE(new BE(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.xb()){c.ac();}}}
function CC(){}
function DC(){}
function EC(){return this.o;}
function FC(){if(this.xb()){throw DE(new BE(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;Al(this.jb(),this);this.E();this.lc();}
function aD(a){}
function bD(){yC(this);}
function cD(){}
function dD(){}
function eD(a){AC(this,a);}
function hC(){}
_=hC.prototype=new gB();_.E=CC;_.F=DC;_.xb=EC;_.ac=FC;_.cc=aD;_.ec=bD;_.lc=cD;_.wc=dD;_.Ec=eD;_.tN=cO+'Widget';_.tI=57;_.o=false;_.p=null;function px(b,a){BC(a,b);}
function rx(b,a){BC(a,null);}
function sx(){var a,b;for(b=this.yb();b.wb();){a=oi(b.Eb(),14);a.ac();}}
function tx(){var a,b;for(b=this.yb();b.wb();){a=oi(b.Eb(),14);a.ec();}}
function ux(){}
function vx(){}
function ox(){}
_=ox.prototype=new hC();_.E=sx;_.F=tx;_.lc=ux;_.wc=vx;_.tN=cO+'Panel';_.tI=58;function jr(a){a.f=oC(new iC(),a);}
function kr(a){jr(a);return a;}
function lr(c,a,b){zC(a);pC(c.f,a);bk(b,a.jb());px(c,a);}
function mr(d,b,a){var c;or(d,a);if(b.p===d){c=qr(d,b);if(c<a){a--;}}return a;}
function nr(b,a){if(a<0||a>=b.f.b){throw aF(new FE());}}
function or(b,a){if(a<0||a>b.f.b){throw aF(new FE());}}
function rr(b,a){return rC(b.f,a);}
function qr(b,a){return sC(b.f,a);}
function sr(e,b,c,a,d){a=mr(e,b,a);zC(b);tC(e.f,b,a);if(d){nl(c,b.jb(),a);}else{bk(c,b.jb());}px(e,b);}
function tr(a){return uC(a.f);}
function ur(b,c){var a;if(c.p!==b){return false;}rx(b,c);a=c.jb();rl(kl(a),a);wC(b.f,c);return true;}
function vr(){return tr(this);}
function wr(a){return ur(this,a);}
function ir(){}
_=ir.prototype=new ox();_.yb=vr;_.Cc=wr;_.tN=cO+'ComplexPanel';_.tI=59;function iq(a){kr(a);a.Ec(ek());Dl(a.jb(),'position','relative');Dl(a.jb(),'overflow','hidden');return a;}
function jq(a,b){lr(a,b,a.jb());}
function kq(b,d,a,c){zC(d);nq(b,d,a,c);jq(b,d);}
function mq(b,c){var a;a=ur(b,c);if(a){oq(c.jb());}return a;}
function nq(c,e,b,d){var a;a=e.jb();if(b==(-1)&&d==(-1)){oq(a);}else{Dl(a,'position','absolute');Dl(a,'left',b+'px');Dl(a,'top',d+'px');}}
function oq(a){Dl(a,'left','');Dl(a,'top','');Dl(a,'position','');}
function pq(a){return mq(this,a);}
function hq(){}
_=hq.prototype=new ir();_.Cc=pq;_.tN=cO+'AbsolutePanel';_.tI=60;function kt(){kt=zN;hD(),jD;}
function it(b,a){hD(),jD;lt(b,a);return b;}
function jt(b,a){if(b.c===null){b.c=er(new dr());}gK(b.c,a);}
function lt(b,a){AC(b,a);sB(b,7041);}
function mt(a){switch(Dk(a)){case 1:if(this.c!==null){gr(this.c,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function nt(a){lt(this,a);}
function ht(){}
_=ht.prototype=new hC();_.cc=mt;_.Ec=nt;_.tN=cO+'FocusWidget';_.tI=61;_.c=null;function sq(){sq=zN;hD(),jD;}
function rq(b,a){hD(),jD;it(b,a);return b;}
function qq(){}
_=qq.prototype=new ht();_.tN=cO+'ButtonBase';_.tI=62;function uq(a){kr(a);a.e=mk();a.d=jk();bk(a.e,a.d);a.Ec(a.e);return a;}
function wq(c,d,a){var b;b=kl(d.jb());zl(b,'height',a);}
function xq(c,b,a){zl(b,'align',a.a);}
function yq(c,b,a){Dl(b,'verticalAlign',a.a);}
function zq(b,c,d){var a;a=kl(c.jb());zl(a,'width',d);}
function tq(){}
_=tq.prototype=new ir();_.tN=cO+'CellPanel';_.tI=63;_.d=null;_.e=null;function Cq(){Cq=zN;hD(),jD;}
function Bq(b,a){var c;hD(),jD;rq(b,ik());b.a=a;b.b=hk();El(b.a,hl(b.jb()));El(b.jb(),0);bk(b.jb(),b.a);bk(b.jb(),b.b);c='check'+ ++cr;zl(b.a,'id',c);zl(b.b,'htmlFor',c);return b;}
function Dq(b){var a;a=b.xb()?'checked':'defaultChecked';return el(b.a,a);}
function Eq(b,a){xl(b.a,'checked',a);xl(b.a,'defaultChecked',a);}
function Fq(b,a){Cl(b.b,a);}
function ar(){Al(this.a,this);}
function br(){Al(this.a,null);Eq(this,Dq(this));}
function Aq(){}
_=Aq.prototype=new qq();_.lc=ar;_.wc=br;_.tN=cO+'CheckBox';_.tI=64;_.a=null;_.b=null;var cr=0;function er(a){eK(a);return a;}
function gr(d,c){var a,b;for(a=oI(d);dI(a);){b=oi(eI(a),22);b.dc(c);}}
function dr(){}
_=dr.prototype=new cK();_.tN=cO+'ClickListenerCollection';_.tI=65;function zr(a,b){if(a.d!==null){throw DE(new BE(),'Composite.initWidget() may only be called once.');}zC(b);a.Ec(b.jb());a.d=b;BC(b,a);}
function Ar(){if(this.d===null){throw DE(new BE(),'initWidget() was never called in '+hh(this));}return this.q;}
function Br(){if(this.d!==null){return this.d.xb();}return false;}
function Cr(){this.d.ac();this.lc();}
function Dr(){try{this.wc();}finally{this.d.ec();}}
function xr(){}
_=xr.prototype=new hC();_.jb=Ar;_.xb=Br;_.ac=Cr;_.ec=Dr;_.tN=cO+'Composite';_.tI=66;_.d=null;function Fr(a){kr(a);a.Ec(ek());return a;}
function bs(b,c){var a;a=c.jb();Dl(a,'width','100%');Dl(a,'height','100%');c.bd(false);}
function cs(b,c,a){sr(b,c,b.jb(),a,true);bs(b,c);}
function ds(b,c){var a;a=ur(b,c);if(a){es(b,c);if(b.b===c){b.b=null;}}return a;}
function es(a,b){Dl(b.jb(),'width','');Dl(b.jb(),'height','');b.bd(true);}
function fs(b,a){nr(b,a);if(b.b!==null){b.b.bd(false);}b.b=rr(b,a);b.b.bd(true);}
function gs(a){return ds(this,a);}
function Er(){}
_=Er.prototype=new ir();_.Cc=gs;_.tN=cO+'DeckPanel';_.tI=67;_.b=null;function jz(a){kz(a,ek());return a;}
function kz(b,a){b.Ec(a);return b;}
function lz(a,b){if(a.n!==null){throw DE(new BE(),'SimplePanel can only contain one child widget');}a.cd(b);}
function nz(a,b){if(b===a.n){return;}if(b!==null){zC(b);}if(a.n!==null){a.Cc(a.n);}a.n=b;if(b!==null){bk(a.fb(),a.n.jb());px(a,b);}}
function oz(){return this.jb();}
function pz(){return fz(new dz(),this);}
function qz(a){if(this.n!==a){return false;}rx(this,a);rl(this.fb(),a.jb());this.n=null;return true;}
function rz(a){nz(this,a);}
function cz(){}
_=cz.prototype=new ox();_.fb=oz;_.yb=pz;_.Cc=qz;_.cd=rz;_.tN=cO+'SimplePanel';_.tI=68;_.n=null;function Cx(){Cx=zN;ly=qD(new lD());}
function xx(a){Cx();kz(a,sD(ly));cy(a,0,0);return a;}
function yx(b,a){Cx();xx(b);b.g=a;return b;}
function zx(c,a,b){Cx();yx(c,a);c.k=b;return c;}
function Ax(b,a){if(a.blur){a.blur();}}
function Bx(c){var a,b,d;a=c.l;if(!a){dy(c,false);gy(c);}b=si((yn()-Ex(c))/2);d=si((xn()-Dx(c))/2);cy(c,zn()+b,An()+d);if(!a){dy(c,true);}}
function Dx(a){return lB(a);}
function Ex(a){return mB(a);}
function Fx(b,a){if(!b.l){return;}b.l=false;mq(Ey(),b);b.jb();}
function ay(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.Fc(a.h);}if(a.i!==null){b.dd(a.i);}}}
function by(e,b){var a,c,d,f;d=Bk(b);c=ol(e.jb(),d);f=Dk(b);switch(f){case 128:{a=(qi(yk(b)),yw(b),true);return a&&(c|| !e.k);}case 512:{a=(qi(yk(b)),yw(b),true);return a&&(c|| !e.k);}case 256:{a=(qi(yk(b)),yw(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((Fj(),tl)!==null){return true;}if(!c&&e.g&&f==4){Fx(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){Ax(e,d);return false;}}}return !e.k||c;}
function cy(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.jb();Dl(a,'left',b+'px');Dl(a,'top',d+'px');}
function dy(a,b){Dl(a.jb(),'visibility',b?'visible':'hidden');a.jb();}
function ey(a,b){nz(a,b);ay(a);}
function fy(a,b){a.i=b;ay(a);if(BG(b)==0){a.i=null;}}
function gy(a){if(a.l){return;}a.l=true;ak(a);Dl(a.jb(),'position','absolute');if(a.m!=(-1)){cy(a,a.j,a.m);}jq(Ey(),a);a.jb();}
function hy(){return tD(ly,this.jb());}
function iy(){return Dx(this);}
function jy(){return Ex(this);}
function ky(){return tD(ly,this.jb());}
function my(){sl(this);yC(this);}
function ny(a){return by(this,a);}
function oy(a){this.h=a;ay(this);if(BG(a)==0){this.h=null;}}
function py(a){dy(this,a);}
function qy(a){ey(this,a);}
function ry(a){fy(this,a);}
function wx(){}
_=wx.prototype=new cz();_.fb=hy;_.ob=iy;_.pb=jy;_.qb=ky;_.ec=my;_.jc=ny;_.Fc=oy;_.bd=py;_.cd=qy;_.dd=ry;_.tN=cO+'PopupPanel';_.tI=69;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var ly;function ls(){ls=zN;Cx();}
function is(a){a.a=jv(new ot());a.f=As(new ws());}
function js(b,a){ls();ks(b,a,true);return b;}
function ks(c,a,b){ls();zx(c,a,b);is(c);fv(c.f,0,0,c.a);c.f.Fc('100%');av(c.f,0);cv(c.f,0);dv(c.f,0);Et(c.f.b,1,0,'100%');bu(c.f.b,1,0,'100%');Dt(c.f.b,1,0,(uv(),vv),(Cv(),Ev));ey(c,c.f);rB(c,'gwt-DialogBox');rB(c.a,'Caption');Dw(c.a,c);return c;}
function ms(b,a){nv(b.a,a);}
function ns(a){if(Dk(a)==4){if(ol(this.a.jb(),Bk(a))){Ek(a);}}return by(this,a);}
function os(a,b,c){this.e=true;vl(this.a.jb());this.c=b;this.d=c;}
function ps(a){}
function qs(a){}
function rs(c,d,e){var a,b;if(this.e){a=d+jB(this);b=e+kB(this);cy(this,a-this.c,b-this.d);}}
function ss(a,b,c){this.e=false;ql(this.a.jb());}
function ts(a){if(this.b!==a){return false;}Fu(this.f,a);return true;}
function us(a){if(this.b!==null){Fu(this.f,this.b);}if(a!==null){fv(this.f,1,0,a);}this.b=a;}
function vs(a){fy(this,a);this.f.dd('100%');}
function hs(){}
_=hs.prototype=new wx();_.jc=ns;_.mc=os;_.nc=ps;_.oc=qs;_.pc=rs;_.qc=ss;_.Cc=ts;_.cd=us;_.dd=vs;_.tN=cO+'DialogBox';_.tI=70;_.b=null;_.c=0;_.d=0;_.e=false;function vu(a){a.e=lu(new gu());}
function wu(a){vu(a);a.d=mk();a.a=jk();bk(a.d,a.a);a.Ec(a.d);sB(a,1);return a;}
function xu(c,a){var b;b=Ds(c);if(a>=b||a<0){throw bF(new FE(),'Row index: '+a+', Row size: '+b);}}
function yu(e,c,b,a){var d;d=Ct(e.b,c,b);Eu(e,d,a);return d;}
function Au(c,b,a){return b.rows[a].cells.length;}
function Bu(a){return Cu(a,a.a);}
function Cu(b,a){return a.rows.length;}
function Du(b,a){var c;if(a!=Ds(b)){xu(b,a);}c=lk();nl(b.a,c,a);return a;}
function Eu(d,c,a){var b,e;b=il(c);e=null;if(b!==null){e=nu(d.e,b);}if(e!==null){Fu(d,e);return true;}else{if(a){Bl(c,'');}return false;}}
function Fu(b,c){var a;if(c.p!==b){return false;}rx(b,c);a=c.jb();rl(kl(a),a);qu(b.e,a);return true;}
function av(a,b){zl(a.d,'border',''+b);}
function bv(b,a){b.b=a;}
function cv(b,a){yl(b.d,'cellPadding',a);}
function dv(b,a){yl(b.d,'cellSpacing',a);}
function ev(b,a){b.c=a;fu(b.c);}
function fv(d,b,a,e){var c;Fs(d,b,a);if(e!==null){zC(e);c=yu(d,b,a,true);ou(d.e,e);bk(c,e.jb());px(d,e);}}
function gv(){return ru(this.e);}
function hv(a){switch(Dk(a)){case 1:{break;}default:}}
function iv(a){return Fu(this,a);}
function pt(){}
_=pt.prototype=new ox();_.yb=gv;_.cc=hv;_.Cc=iv;_.tN=cO+'HTMLTable';_.tI=71;_.a=null;_.b=null;_.c=null;_.d=null;function As(a){wu(a);bv(a,ys(new xs(),a));ev(a,du(new cu(),a));return a;}
function Cs(b,a){xu(b,a);return Au(b,b.a,a);}
function Ds(a){return Bu(a);}
function Es(b,a){return Du(b,a);}
function Fs(e,d,b){var a,c;at(e,d);if(b<0){throw bF(new FE(),'Cannot create a column with a negative index: '+b);}a=Cs(e,d);c=b+1-a;if(c>0){bt(e.a,d,c);}}
function at(d,b){var a,c;if(b<0){throw bF(new FE(),'Cannot create a row with a negative index: '+b);}c=Ds(d);for(a=c;a<=b;a++){Es(d,a);}}
function bt(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function ws(){}
_=ws.prototype=new pt();_.tN=cO+'FlexTable';_.tI=72;function zt(b,a){b.a=a;return b;}
function Bt(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function Ct(c,b,a){return Bt(c,c.a.a,b,a);}
function Dt(d,c,a,b,e){Ft(d,c,a,b);au(d,c,a,e);}
function Et(e,d,a,c){var b;Fs(e.a,d,a);b=Bt(e,e.a.a,d,a);zl(b,'height',c);}
function Ft(e,d,b,a){var c;Fs(e.a,d,b);c=Bt(e,e.a.a,d,b);zl(c,'align',a.a);}
function au(d,c,b,a){Fs(d.a,c,b);Dl(Bt(d,d.a.a,c,b),'verticalAlign',a.a);}
function bu(c,b,a,d){Fs(c.a,b,a);zl(Bt(c,c.a.a,b,a),'width',d);}
function yt(){}
_=yt.prototype=new bG();_.tN=cO+'HTMLTable$CellFormatter';_.tI=73;function ys(b,a){zt(b,a);return b;}
function xs(){}
_=xs.prototype=new yt();_.tN=cO+'FlexTable$FlexCellFormatter';_.tI=74;function dt(a){kr(a);a.Ec(ek());return a;}
function et(a,b){lr(a,b,a.jb());}
function gt(b,c,a){sr(b,c,b.jb(),a,true);}
function ct(){}
_=ct.prototype=new ir();_.tN=cO+'FlowPanel';_.tI=75;function Aw(a){a.Ec(ek());sB(a,131197);rB(a,'gwt-Label');return a;}
function Bw(b,a){Aw(b);bx(b,a);return b;}
function Cw(b,a){if(b.b===null){b.b=er(new dr());}gK(b.b,a);}
function Dw(b,a){if(b.c===null){b.c=fx(new ex());}gK(b.c,a);}
function Fw(a){return jl(a.jb());}
function ax(b,a){switch(Dk(a)){case 1:if(b.b!==null){gr(b.b,b);}break;case 4:case 8:case 64:case 16:case 32:if(b.c!==null){jx(b.c,b,a);}break;case 131072:break;}}
function bx(b,a){Cl(b.jb(),a);}
function cx(a,b){Dl(a.jb(),'whiteSpace',b?'normal':'nowrap');}
function dx(a){ax(this,a);}
function zw(){}
_=zw.prototype=new hC();_.cc=dx;_.tN=cO+'Label';_.tI=76;_.b=null;_.c=null;function jv(a){Aw(a);a.Ec(ek());sB(a,125);rB(a,'gwt-HTML');return a;}
function kv(b,a){jv(b);nv(b,a);return b;}
function lv(b,a,c){kv(b,a);cx(b,c);return b;}
function nv(b,a){Bl(b.jb(),a);}
function ot(){}
_=ot.prototype=new zw();_.tN=cO+'HTML';_.tI=77;function rt(a){{ut(a);}}
function st(b,a){b.b=a;rt(b);return b;}
function ut(a){while(++a.a<a.b.b.b){if(lK(a.b.b,a.a)!==null){return;}}}
function vt(a){return a.a<a.b.b.b;}
function wt(){return vt(this);}
function xt(){var a;if(!vt(this)){throw vN(new uN());}a=lK(this.b.b,this.a);ut(this);return a;}
function qt(){}
_=qt.prototype=new bG();_.wb=wt;_.Eb=xt;_.tN=cO+'HTMLTable$1';_.tI=78;_.a=(-1);function du(b,a){b.b=a;return b;}
function fu(a){if(a.a===null){a.a=fk('colgroup');nl(a.b.d,a.a,0);bk(a.a,fk('col'));}}
function cu(){}
_=cu.prototype=new bG();_.tN=cO+'HTMLTable$ColumnFormatter';_.tI=79;_.a=null;function ku(a){a.b=eK(new cK());}
function lu(a){ku(a);return a;}
function nu(c,a){var b;b=tu(a);if(b<0){return null;}return oi(lK(c.b,b),14);}
function ou(b,c){var a;if(b.a===null){a=b.b.b;gK(b.b,c);}else{a=b.a.a;rK(b.b,a,c);b.a=b.a.b;}uu(c.jb(),a);}
function pu(c,a,b){su(a);rK(c.b,b,null);c.a=iu(new hu(),b,c.a);}
function qu(c,a){var b;b=tu(a);pu(c,a,b);}
function ru(a){return st(new qt(),a);}
function su(a){a['__widgetID']=null;}
function tu(a){var b=a['__widgetID'];return b==null?-1:b;}
function uu(a,b){a['__widgetID']=b;}
function gu(){}
_=gu.prototype=new bG();_.tN=cO+'HTMLTable$WidgetMapper';_.tI=80;_.a=null;function iu(c,a,b){c.a=a;c.b=b;return c;}
function hu(){}
_=hu.prototype=new bG();_.tN=cO+'HTMLTable$WidgetMapper$FreeNode';_.tI=81;_.a=0;_.b=null;function uv(){uv=zN;vv=sv(new rv(),'center');wv=sv(new rv(),'left');sv(new rv(),'right');}
var vv,wv;function sv(b,a){b.a=a;return b;}
function rv(){}
_=rv.prototype=new bG();_.tN=cO+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=82;_.a=null;function Cv(){Cv=zN;Dv=Av(new zv(),'bottom');Ev=Av(new zv(),'middle');Fv=Av(new zv(),'top');}
var Dv,Ev,Fv;function Av(a,b){a.a=b;return a;}
function zv(){}
_=zv.prototype=new bG();_.tN=cO+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=83;_.a=null;function dw(a){a.a=(uv(),wv);a.c=(Cv(),Fv);}
function ew(a){uq(a);dw(a);a.b=lk();bk(a.d,a.b);zl(a.e,'cellSpacing','0');zl(a.e,'cellPadding','0');return a;}
function fw(b,c){var a;a=hw(b);bk(b.b,a);lr(b,c,a);}
function hw(b){var a;a=kk();xq(b,a,b.a);yq(b,a,b.c);return a;}
function iw(c,d,a){var b;or(c,a);b=hw(c);nl(c.b,b,a);sr(c,d,b,a,false);}
function jw(c,d){var a,b;b=kl(d.jb());a=ur(c,d);if(a){rl(c.b,b);}return a;}
function kw(b,a){b.c=a;}
function lw(a){return jw(this,a);}
function cw(){}
_=cw.prototype=new tq();_.Cc=lw;_.tN=cO+'HorizontalPanel';_.tI=84;_.b=null;function nw(a){a.Ec(ek());bk(a.jb(),a.a=dk());sB(a,1);rB(a,'gwt-Hyperlink');return a;}
function ow(c,b,a){nw(c);tw(c,b);sw(c,a);return c;}
function pw(b,a){if(b.b===null){b.b=er(new dr());}gK(b.b,a);}
function rw(a){return jl(a.a);}
function sw(b,a){b.c=a;zl(b.a,'href','#'+a);}
function tw(b,a){Cl(b.a,a);}
function uw(a){if(Dk(a)==1){if(this.b!==null){gr(this.b,this);}ym(this.c);Ek(a);}}
function mw(){}
_=mw.prototype=new hC();_.cc=uw;_.tN=cO+'Hyperlink';_.tI=85;_.a=null;_.b=null;_.c=null;function yw(a){return (Ak(a)?1:0)|(zk(a)?8:0)|(wk(a)?2:0)|(sk(a)?4:0);}
function fx(a){eK(a);return a;}
function hx(d,c,e,f){var a,b;for(a=oI(d);dI(a);){b=oi(eI(a),23);b.mc(c,e,f);}}
function ix(d,c){var a,b;for(a=oI(d);dI(a);){b=oi(eI(a),23);b.nc(c);}}
function jx(e,c,a){var b,d,f,g,h;d=c.jb();g=uk(a)-al(d)+fl(d,'scrollLeft')+zn();h=vk(a)-bl(d)+fl(d,'scrollTop')+An();switch(Dk(a)){case 4:hx(e,c,g,h);break;case 8:mx(e,c,g,h);break;case 64:lx(e,c,g,h);break;case 16:b=xk(a);if(!ol(d,b)){ix(e,c);}break;case 32:f=Ck(a);if(!ol(d,f)){kx(e,c);}break;}}
function kx(d,c){var a,b;for(a=oI(d);dI(a);){b=oi(eI(a),23);b.oc(c);}}
function lx(d,c,e,f){var a,b;for(a=oI(d);dI(a);){b=oi(eI(a),23);b.pc(c,e,f);}}
function mx(d,c,e,f){var a,b;for(a=oI(d);dI(a);){b=oi(eI(a),23);b.qc(c,e,f);}}
function ex(){}
_=ex.prototype=new cK();_.tN=cO+'MouseListenerCollection';_.tI=86;function vy(){vy=zN;hD(),jD;}
function ty(b,a){hD(),jD;Bq(b,gk(a));rB(b,'gwt-RadioButton');return b;}
function uy(c,b,a){hD(),jD;ty(c,b);Fq(c,a);return c;}
function sy(){}
_=sy.prototype=new Aq();_.tN=cO+'RadioButton';_.tI=87;function Cy(){Cy=zN;bz=lM(new pL());}
function By(b,a){Cy();iq(b);if(a===null){a=Dy();}b.Ec(a);b.ac();return b;}
function Ey(){Cy();return Fy(null);}
function Fy(c){Cy();var a,b;b=oi(rM(bz,c),24);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=dl(c))){return null;}}if(bz.c==0){az();}sM(bz,c,b=By(new wy(),a));return b;}
function Dy(){Cy();return $doc.body;}
function az(){Cy();pn(new xy());}
function wy(){}
_=wy.prototype=new hq();_.tN=cO+'RootPanel';_.tI=88;var bz;function zy(){var a,b;for(b=iJ(wJ((Cy(),bz)));pJ(b);){a=oi(qJ(b),24);if(a.xb()){a.ec();}}}
function Ay(){return null;}
function xy(){}
_=xy.prototype=new bG();_.xc=zy;_.yc=Ay;_.tN=cO+'RootPanel$1';_.tI=89;function ez(a){a.a=a.b.n!==null;}
function fz(b,a){b.b=a;ez(b);return b;}
function hz(){return this.a;}
function iz(){if(!this.a||this.b.n===null){throw vN(new uN());}this.a=false;return this.b.n;}
function dz(){}
_=dz.prototype=new bG();_.wb=hz;_.Eb=iz;_.tN=cO+'SimplePanel$1';_.tI=90;function Bz(a){a.a=ew(new cw());}
function Cz(c){var a,b;Bz(c);zr(c,c.a);sB(c,1);rB(c,'gwt-TabBar');kw(c.a,(Cv(),Dv));a=lv(new ot(),'&nbsp;',true);b=lv(new ot(),'&nbsp;',true);rB(a,'gwt-TabBarFirst');rB(b,'gwt-TabBarRest');a.Fc('100%');b.Fc('100%');fw(c.a,a);fw(c.a,b);a.Fc('100%');wq(c.a,a,'100%');zq(c.a,b,'100%');return c;}
function Dz(b,a){if(b.c===null){b.c=iA(new hA());}gK(b.c,a);}
function Ez(b,a){if(a<0||a>bA(b)){throw aF(new FE());}}
function Fz(b,a){if(a<(-1)||a>=bA(b)){throw aF(new FE());}}
function bA(a){return a.a.f.b-2;}
function cA(e,d,a,b){var c;Ez(e,b);if(a){c=kv(new ot(),d);}else{c=Bw(new zw(),d);}cx(c,false);Cw(c,e);rB(c,'gwt-TabBarItem');iw(e.a,c,b+1);}
function dA(b,a){var c;Fz(b,a);c=rr(b.a,a+1);if(c===b.b){b.b=null;}jw(b.a,c);}
function eA(b,a){Fz(b,a);if(b.c!==null){if(!kA(b.c,b,a)){return false;}}fA(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=rr(b.a,a+1);fA(b,b.b,true);if(b.c!==null){lA(b.c,b,a);}return true;}
function fA(c,a,b){if(a!==null){if(b){hB(a,'gwt-TabBarItem-selected');}else{nB(a,'gwt-TabBarItem-selected');}}}
function gA(b){var a;for(a=1;a<this.a.f.b-1;++a){if(rr(this.a,a)===b){eA(this,a-1);return;}}}
function Az(){}
_=Az.prototype=new xr();_.dc=gA;_.tN=cO+'TabBar';_.tI=91;_.b=null;_.c=null;function iA(a){eK(a);return a;}
function kA(e,c,d){var a,b;for(a=oI(e);dI(a);){b=oi(eI(a),25);if(!b.bc(c,d)){return false;}}return true;}
function lA(e,c,d){var a,b;for(a=oI(e);dI(a);){b=oi(eI(a),25);b.vc(c,d);}}
function hA(){}
_=hA.prototype=new cK();_.tN=cO+'TabListenerCollection';_.tI=92;function zA(a){a.b=vA(new uA());a.a=pA(new oA(),a.b);}
function AA(b){var a;zA(b);a=bC(new FB());cC(a,b.b);cC(a,b.a);wq(a,b.a,'100%');b.b.dd('100%');Dz(b.b,b);zr(b,a);rB(b,'gwt-TabPanel');rB(b.a,'gwt-TabPanelBottom');return b;}
function CA(b,c,a){FA(b,c,a,b.a.f.b);}
function BA(b,a){if(b.c===null){b.c=iA(new hA());}gK(b.c,a);}
function EA(b,a){return rr(b.a,a);}
function aB(d,e,c,a,b){rA(d.a,e,c,a,b);}
function FA(c,d,b,a){aB(c,d,b,false,a);}
function bB(b,a){eA(b.b,a);}
function cB(){return tr(this.a);}
function dB(a,b){if(this.c!==null){return kA(this.c,this,b);}return true;}
function eB(a,b){fs(this.a,b);if(this.c!==null){lA(this.c,this,b);}}
function fB(a){return sA(this.a,a);}
function nA(){}
_=nA.prototype=new xr();_.yb=cB;_.bc=dB;_.vc=eB;_.Cc=fB;_.tN=cO+'TabPanel';_.tI=93;_.c=null;function pA(b,a){Fr(b);b.a=a;return b;}
function rA(e,f,d,a,b){var c;c=qr(e,f);if(c!=(-1)){sA(e,f);if(c<b){b--;}}xA(e.a,d,a,b);cs(e,f,b);}
function sA(b,c){var a;a=qr(b,c);if(a!=(-1)){yA(b.a,a);return ds(b,c);}return false;}
function tA(a){return sA(this,a);}
function oA(){}
_=oA.prototype=new Er();_.Cc=tA;_.tN=cO+'TabPanel$TabbedDeckPanel';_.tI=94;_.a=null;function vA(a){Cz(a);return a;}
function xA(d,c,a,b){cA(d,c,a,b);}
function yA(b,a){dA(b,a);}
function uA(){}
_=uA.prototype=new Az();_.tN=cO+'TabPanel$UnmodifiableTabBar';_.tI=95;function aC(a){a.a=(uv(),wv);a.b=(Cv(),Fv);}
function bC(a){uq(a);aC(a);zl(a.e,'cellSpacing','0');zl(a.e,'cellPadding','0');return a;}
function cC(b,d){var a,c;c=lk();a=eC(b);bk(c,a);bk(b.d,c);lr(b,d,a);}
function eC(b){var a;a=kk();xq(b,a,b.a);yq(b,a,b.b);return a;}
function fC(c,e,a){var b,d;or(c,a);d=lk();b=eC(c);bk(d,b);nl(c.d,d,a);sr(c,e,b,a,false);}
function gC(c){var a,b;b=kl(c.jb());a=ur(this,c);if(a){rl(this.d,kl(b));}return a;}
function FB(){}
_=FB.prototype=new tq();_.Cc=gC;_.tN=cO+'VerticalPanel';_.tI=96;function oC(b,a){b.a=ii('[Lcom.google.gwt.user.client.ui.Widget;',[172],[14],[4],null);return b;}
function pC(a,b){tC(a,b,a.b);}
function rC(b,a){if(a<0||a>=b.b){throw aF(new FE());}return b.a[a];}
function sC(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function tC(d,e,a){var b,c;if(a<0||a>d.b){throw aF(new FE());}if(d.b==d.a.a){c=ii('[Lcom.google.gwt.user.client.ui.Widget;',[172],[14],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ki(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ki(d.a,b,d.a[b-1]);}ki(d.a,a,e);}
function uC(a){return kC(new jC(),a);}
function vC(c,b){var a;if(b<0||b>=c.b){throw aF(new FE());}--c.b;for(a=b;a<c.b;++a){ki(c.a,a,c.a[a+1]);}ki(c.a,c.b,null);}
function wC(b,c){var a;a=sC(b,c);if(a==(-1)){throw vN(new uN());}vC(b,a);}
function iC(){}
_=iC.prototype=new bG();_.tN=cO+'WidgetCollection';_.tI=97;_.a=null;_.b=0;function kC(b,a){b.b=a;return b;}
function mC(){return this.a<this.b.b-1;}
function nC(){if(this.a>=this.b.b){throw vN(new uN());}return this.b.a[++this.a];}
function jC(){}
_=jC.prototype=new bG();_.wb=mC;_.Eb=nC;_.tN=cO+'WidgetCollection$WidgetIterator';_.tI=98;_.a=(-1);function hD(){hD=zN;iD=gD(new fD());jD=iD;}
function gD(a){hD();return a;}
function fD(){}
_=fD.prototype=new bG();_.tN=dO+'FocusImpl';_.tI=99;var iD,jD;function kD(){}
_=kD.prototype=new bG();_.tN=dO+'PopupImpl';_.tI=100;function rD(){rD=zN;uD=vD();}
function qD(a){rD();return a;}
function sD(b){var a;a=ek();if(uD){Bl(a,'<div><\/div>');em(nD(new mD(),b,a));}return a;}
function tD(b,a){return uD?il(a):a;}
function vD(){rD();if(navigator.userAgent.indexOf('Macintosh')!= -1){return true;}return false;}
function lD(){}
_=lD.prototype=new kD();_.tN=dO+'PopupImplMozilla';_.tI=101;var uD;function nD(b,a,c){b.a=c;return b;}
function pD(){Dl(this.a,'overflow','auto');}
function mD(){}
_=mD.prototype=new bG();_.bb=pD;_.tN=dO+'PopupImplMozilla$1';_.tI=102;function AD(){}
_=AD.prototype=new bG();_.tN=eO+'OutputStream';_.tI=103;function yD(){}
_=yD.prototype=new AD();_.tN=eO+'FilterOutputStream';_.tI=104;function CD(){}
_=CD.prototype=new yD();_.tN=eO+'PrintStream';_.tI=105;function aE(){aE=zN;jG();}
function FD(a){aE();hG(a);return a;}
function ED(){}
_=ED.prototype=new gG();_.tN=fO+'ArrayStoreException';_.tI=106;function dE(){dE=zN;eE=cE(new bE(),false);fE=cE(new bE(),true);}
function cE(a,b){dE();a.a=b;return a;}
function gE(a){return pi(a,30)&&oi(a,30).a==this.a;}
function hE(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function iE(){return this.a?'true':'false';}
function jE(a){dE();return a?fE:eE;}
function bE(){}
_=bE.prototype=new bG();_.eQ=gE;_.hC=hE;_.tS=iE;_.tN=fO+'Boolean';_.tI=107;_.a=false;var eE,fE;function nE(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+pF(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function rE(){rE=zN;jG();}
function pE(a){rE();hG(a);return a;}
function qE(b,a){rE();iG(b,a);return b;}
function oE(){}
_=oE.prototype=new gG();_.tN=fO+'ClassCastException';_.tI=108;function AE(){AE=zN;jG();}
function zE(b,a){AE();iG(b,a);return b;}
function yE(){}
_=yE.prototype=new gG();_.tN=fO+'IllegalArgumentException';_.tI=109;function EE(){EE=zN;jG();}
function CE(a){EE();hG(a);return a;}
function DE(b,a){EE();iG(b,a);return b;}
function BE(){}
_=BE.prototype=new gG();_.tN=fO+'IllegalStateException';_.tI=110;function cF(){cF=zN;jG();}
function aF(a){cF();hG(a);return a;}
function bF(b,a){cF();iG(b,a);return b;}
function FE(){}
_=FE.prototype=new gG();_.tN=fO+'IndexOutOfBoundsException';_.tI=111;function BF(){BF=zN;{aG();}}
function CF(a){BF();return isNaN(a);}
function DF(e,d,c,h){BF();var a,b,f,g;if(e===null){throw zF(new yF(),'Unable to parse null');}b=BG(e);f=b>0&&uG(e,0)==45?1:0;for(a=f;a<b;a++){if(nE(uG(e,a),d)==(-1)){throw zF(new yF(),'Could not parse '+e+' in radix '+d);}}g=EF(e,d);if(CF(g)){throw zF(new yF(),'Unable to parse '+e);}else if(g<c||g>h){throw zF(new yF(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function EF(b,a){BF();return parseInt(b,a);}
function aG(){BF();FF=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var FF=null;function eF(){eF=zN;BF();}
function hF(a){eF();return iF(a,10);}
function iF(b,a){eF();return ri(DF(b,a,(-2147483648),2147483647));}
function jF(a){eF();return hH(a);}
var fF=2147483647,gF=(-2147483648);function mF(a){return a<0?-a:a;}
function nF(a){return a<0?-a:a;}
function oF(a,b){return a>b?a:b;}
function pF(a,b){return a<b?a:b;}
function qF(a){return Math.sqrt(a);}
function tF(){tF=zN;jG();}
function sF(a){tF();hG(a);return a;}
function rF(){}
_=rF.prototype=new gG();_.tN=fO+'NegativeArraySizeException';_.tI=112;function wF(){wF=zN;jG();}
function vF(b,a){wF();iG(b,a);return b;}
function uF(){}
_=uF.prototype=new gG();_.tN=fO+'NullPointerException';_.tI=113;function AF(){AF=zN;AE();}
function zF(b,a){AF();zE(b,a);return b;}
function yF(){}
_=yF.prototype=new yE();_.tN=fO+'NumberFormatException';_.tI=114;function uG(b,a){return b.charCodeAt(a);}
function wG(f,c){var a,b,d,e,g,h;h=BG(f);e=BG(c);b=pF(h,e);for(a=0;a<b;a++){g=uG(f,a);d=uG(c,a);if(g!=d){return g-d;}}return h-e;}
function xG(b,a){if(!pi(a,1))return false;return aH(b,a);}
function yG(b,a){return b.indexOf(a);}
function zG(c,b,a){return c.indexOf(b,a);}
function AG(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function BG(a){return a.length;}
function CG(c,a,b){b=bH(b);return c.replace(RegExp(a,'g'),b);}
function DG(b,a){return b.substr(a,b.length-a);}
function EG(c,a,b){return c.substr(a,b-a);}
function FG(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function aH(a,b){return String(a)==b;}
function bH(b){var a;a=0;while(0<=(a=zG(b,'\\',a))){if(uG(b,a+1)==36){b=EG(b,0,a)+'$'+DG(b,++a);}else{b=EG(b,0,a)+DG(b,++a);}}return b;}
function cH(a){if(pi(a,1)){return wG(this,oi(a,1));}else{throw qE(new oE(),'Cannot compare '+a+" with String '"+this+"'");}}
function dH(a){return xG(this,a);}
function fH(){var a=eH;if(!a){a=eH={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function gH(){return this;}
function hH(a){return ''+a;}
function iH(a){return a!==null?a.tS():'null';}
_=String.prototype;_.v=cH;_.eQ=dH;_.hC=fH;_.tS=gH;_.tN=fO+'String';_.tI=2;var eH=null;function mG(a){oG(a);return a;}
function nG(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function oG(a){pG(a,'');}
function pG(b,a){b.js=[a];b.length=a.length;}
function rG(a){a.Fb();return a.js[0];}
function sG(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function tG(){return rG(this);}
function lG(){}
_=lG.prototype=new bG();_.Fb=sG;_.tS=tG;_.tN=fO+'StringBuffer';_.tI=115;function kH(){kH=zN;mH=new CD();}
function lH(){kH();return new Date().getTime();}
function nH(a){kH();return nh(a);}
var mH;function yH(){yH=zN;jG();}
function xH(b,a){yH();iG(b,a);return b;}
function wH(){}
_=wH.prototype=new gG();_.tN=fO+'UnsupportedOperationException';_.tI=116;function bI(b,a){b.c=a;return b;}
function dI(a){return a.a<a.c.ed();}
function eI(a){if(!dI(a)){throw vN(new uN());}return a.c.ub(a.b=a.a++);}
function fI(a){if(a.b<0){throw CE(new BE());}a.c.Bc(a.b);a.a=a.b;a.b=(-1);}
function gI(){return dI(this);}
function hI(){return eI(this);}
function iI(){fI(this);}
function aI(){}
_=aI.prototype=new bG();_.wb=gI;_.Eb=hI;_.Ac=iI;_.tN=gO+'AbstractList$IteratorImpl';_.tI=117;_.a=0;_.b=(-1);function kI(b,a){bI(b,a);return b;}
function jI(){}
_=jI.prototype=new aI();_.tN=gO+'AbstractList$ListIteratorImpl';_.tI=118;function uJ(f,d,e){var a,b,c;for(b=gM(f.ab());EL(b);){a=FL(b);c=a.mb();if(d===null?c===null:d.eQ(c)){if(e){aM(b);}return a;}}return null;}
function vJ(b){var a;a=b.ab();return yI(new xI(),b,a);}
function wJ(b){var a;a=qM(b);return gJ(new fJ(),b,a);}
function xJ(a){return uJ(this,a,false)!==null;}
function yJ(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!pi(d,32)){return false;}f=oi(d,32);c=vJ(this);e=f.zb();if(!FJ(c,e)){return false;}for(a=AI(c);bJ(a);){b=cJ(a);h=this.vb(b);g=f.vb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function zJ(b){var a;a=uJ(this,b,false);return a===null?null:a.sb();}
function AJ(){var a,b,c;b=0;for(c=gM(this.ab());EL(c);){a=FL(c);b+=a.hC();}return b;}
function BJ(){return vJ(this);}
function CJ(){var a,b,c,d;d='{';a=false;for(c=gM(this.ab());EL(c);){b=FL(c);if(a){d+=', ';}else{a=true;}d+=iH(b.mb());d+='=';d+=iH(b.sb());}return d+'}';}
function wI(){}
_=wI.prototype=new bG();_.z=xJ;_.eQ=yJ;_.vb=zJ;_.hC=AJ;_.zb=BJ;_.tS=CJ;_.tN=gO+'AbstractMap';_.tI=119;function FJ(e,b){var a,c,d;if(b===e){return true;}if(!pi(b,33)){return false;}c=oi(b,33);if(c.ed()!=e.ed()){return false;}for(a=c.yb();a.wb();){d=a.Eb();if(!e.A(d)){return false;}}return true;}
function aK(a){return FJ(this,a);}
function bK(){var a,b,c;a=0;for(b=this.yb();b.wb();){c=b.Eb();if(c!==null){a+=c.hC();}}return a;}
function DJ(){}
_=DJ.prototype=new zH();_.eQ=aK;_.hC=bK;_.tN=gO+'AbstractSet';_.tI=120;function yI(b,a,c){b.a=a;b.b=c;return b;}
function AI(b){var a;a=gM(b.b);return FI(new EI(),b,a);}
function BI(a){return this.a.z(a);}
function CI(){return AI(this);}
function DI(){return this.b.a.c;}
function xI(){}
_=xI.prototype=new DJ();_.A=BI;_.yb=CI;_.ed=DI;_.tN=gO+'AbstractMap$1';_.tI=121;function FI(b,a,c){b.a=c;return b;}
function bJ(a){return a.a.wb();}
function cJ(b){var a;a=b.a.Eb();return a.mb();}
function dJ(){return bJ(this);}
function eJ(){return cJ(this);}
function EI(){}
_=EI.prototype=new bG();_.wb=dJ;_.Eb=eJ;_.tN=gO+'AbstractMap$2';_.tI=122;function gJ(b,a,c){b.a=a;b.b=c;return b;}
function iJ(b){var a;a=gM(b.b);return nJ(new mJ(),b,a);}
function jJ(a){return pM(this.a,a);}
function kJ(){return iJ(this);}
function lJ(){return this.b.a.c;}
function fJ(){}
_=fJ.prototype=new zH();_.A=jJ;_.yb=kJ;_.ed=lJ;_.tN=gO+'AbstractMap$3';_.tI=123;function nJ(b,a,c){b.a=c;return b;}
function pJ(a){return a.a.wb();}
function qJ(a){var b;b=a.a.Eb().sb();return b;}
function rJ(){return pJ(this);}
function sJ(){return qJ(this);}
function mJ(){}
_=mJ.prototype=new bG();_.wb=rJ;_.Eb=sJ;_.tN=gO+'AbstractMap$4';_.tI=124;function aL(b){var a,c;a=eK(new cK());for(c=0;c<b.a;c++){gK(a,b[c]);}return a;}
function bL(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.w(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function cL(a){bL(a,a.a,(jL(),kL));}
function jL(){jL=zN;kL=new gL();}
var kL;function iL(a,b){return oi(a,38).v(b);}
function gL(){}
_=gL.prototype=new bG();_.w=iL;_.tN=gO+'Comparators$1';_.tI=125;function nM(){nM=zN;uM=AM();}
function kM(a){{mM(a);}}
function lM(a){nM();kM(a);return a;}
function mM(a){a.a=xh();a.d=yh();a.b=wi(uM,th);a.c=0;}
function oM(b,a){if(pi(a,1)){return EM(b.d,oi(a,1))!==uM;}else if(a===null){return b.b!==uM;}else{return DM(b.a,a,a.hC())!==uM;}}
function pM(a,b){if(a.b!==uM&&CM(a.b,b)){return true;}else if(zM(a.d,b)){return true;}else if(xM(a.a,b)){return true;}return false;}
function qM(a){return dM(new AL(),a);}
function rM(c,a){var b;if(pi(a,1)){b=EM(c.d,oi(a,1));}else if(a===null){b=c.b;}else{b=DM(c.a,a,a.hC());}return b===uM?null:b;}
function sM(c,a,d){var b;if(pi(a,1)){b=bN(c.d,oi(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=aN(c.a,a,d,a.hC());}if(b===uM){++c.c;return null;}else{return b;}}
function tM(c,a){var b;if(pi(a,1)){b=dN(c.d,oi(a,1));}else if(a===null){b=c.b;c.b=wi(uM,th);}else{b=cN(c.a,a,a.hC());}if(b===uM){return null;}else{--c.c;return b;}}
function vM(e,c){nM();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function wM(d,a){nM();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=tL(c.substring(1),e);a.s(b);}}}
function xM(f,h){nM();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.sb();if(CM(h,d)){return true;}}}}return false;}
function yM(a){return oM(this,a);}
function zM(c,d){nM();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(CM(d,a)){return true;}}}return false;}
function AM(){nM();}
function BM(){return qM(this);}
function CM(a,b){nM();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function FM(a){return rM(this,a);}
function DM(f,h,e){nM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(CM(h,d)){return c.sb();}}}}
function EM(b,a){nM();return b[':'+a];}
function aN(f,h,j,e){nM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(CM(h,d)){var i=c.sb();c.ad(j);return i;}}}else{a=f[e]=[];}var c=tL(h,j);a.push(c);}
function bN(c,a,d){nM();a=':'+a;var b=c[a];c[a]=d;return b;}
function cN(f,h,e){nM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.mb();if(CM(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.sb();}}}}
function dN(c,a){nM();a=':'+a;var b=c[a];delete c[a];return b;}
function pL(){}
_=pL.prototype=new wI();_.z=yM;_.ab=BM;_.vb=FM;_.tN=gO+'HashMap';_.tI=126;_.a=null;_.b=null;_.c=0;_.d=null;var uM;function rL(b,a,c){b.a=a;b.b=c;return b;}
function tL(a,b){return rL(new qL(),a,b);}
function uL(b){var a;if(pi(b,39)){a=oi(b,39);if(CM(this.a,a.mb())&&CM(this.b,a.sb())){return true;}}return false;}
function vL(){return this.a;}
function wL(){return this.b;}
function xL(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function yL(a){var b;b=this.b;this.b=a;return b;}
function zL(){return this.a+'='+this.b;}
function qL(){}
_=qL.prototype=new bG();_.eQ=uL;_.mb=vL;_.sb=wL;_.hC=xL;_.ad=yL;_.tS=zL;_.tN=gO+'HashMap$EntryImpl';_.tI=127;_.a=null;_.b=null;function dM(b,a){b.a=a;return b;}
function fM(d,c){var a,b,e;if(pi(c,39)){a=oi(c,39);b=a.mb();if(oM(d.a,b)){e=rM(d.a,b);return CM(a.sb(),e);}}return false;}
function gM(a){return CL(new BL(),a.a);}
function hM(a){return fM(this,a);}
function iM(){return gM(this);}
function jM(){return this.a.c;}
function AL(){}
_=AL.prototype=new DJ();_.A=hM;_.yb=iM;_.ed=jM;_.tN=gO+'HashMap$EntrySet';_.tI=128;function CL(c,b){var a;c.c=b;a=eK(new cK());if(c.c.b!==(nM(),uM)){gK(a,rL(new qL(),null,c.c.b));}wM(c.c.d,a);vM(c.c.a,a);c.a=oI(a);return c;}
function EL(a){return dI(a.a);}
function FL(a){return a.b=oi(eI(a.a),39);}
function aM(a){if(a.b===null){throw DE(new BE(),'Must call next() before remove().');}else{fI(a.a);tM(a.c,a.b.mb());a.b=null;}}
function bM(){return EL(this);}
function cM(){return FL(this);}
function BL(){}
_=BL.prototype=new bG();_.wb=bM;_.Eb=cM;_.tN=gO+'HashMap$EntrySetIterator';_.tI=129;_.a=null;_.b=null;function fN(a){a.a=lM(new pL());return a;}
function gN(c,a){var b;b=sM(c.a,a,jE(true));return b===null;}
function iN(a){return AI(vJ(a.a));}
function jN(b,a){return tM(b.a,a)!==null;}
function kN(a){return gN(this,a);}
function lN(a){return oM(this.a,a);}
function mN(){return iN(this);}
function nN(){return this.a.c;}
function oN(){return vJ(this.a).tS();}
function eN(){}
_=eN.prototype=new DJ();_.s=kN;_.A=lN;_.yb=mN;_.ed=nN;_.tS=oN;_.tN=gO+'HashSet';_.tI=130;_.a=null;function wN(){wN=zN;jG();}
function vN(a){wN();hG(a);return a;}
function uN(){}
_=uN.prototype=new gG();_.tN=gO+'NoSuchElementException';_.tI=131;function oO(){}
_=oO.prototype=new bG();_.tN=hO+'BezierCurve';_.tI=132;function qO(a){{vO(a);}}
function rO(a){qO(a);return a;}
function uO(i,d,e,a,b){var c,f,g,h,j;h=sQ(new rQ(),pF(d.a,e.a),pF(d.b,e.b));j=mF(d.a-e.a);c=mF(d.b-e.b);g=oF(j,c);g=oF(g,mF(d.a-a.a));g=oF(g,mF(d.b-a.b));g=oF(g,mF(e.a-b.a));g=oF(g,mF(e.b-b.b));f=sQ(new rQ(),h.a-g,h.b-g);Dl(i.a,'left',jF(f.a));Dl(i.a,'top',jF(f.b));wl(i.a,'width',jF(j+g*2));wl(i.a,'height',jF(c+g*2));Dl(i.a,'width',jF(j+g*2));Dl(i.a,'height',jF(c+g*2));tO(i,vQ(d,xQ(f)),vQ(e,xQ(f)),vQ(a,xQ(f)),vQ(b,xQ(f)),wO(i.a,'color'));}
function tO(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function vO(b){var a;b.a=fk('canvas');a=cl(b.a,'class');wl(b.a,'class',a+' gwt-diagrams-canvas');}
function wO(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function pO(){}
_=pO.prototype=new oO();_.tN=hO+'BezierCurveCanvas';_.tI=133;_.a=null;function zO(a){a.c=eK(new cK());}
function AO(c,d){var a,b;zO(c);fK(c.c,d);FO(c,c.B());for(b=oI(c.c);dI(b);){a=oi(eI(b),35);a.x(c);}return c;}
function BO(a,b){AO(a,aL(b));return a;}
function DO(a){return a.b.u(a.c);}
function EO(c,a){var b;b=mK(c.c,a);if(b>(-1)){qK(c.c,a);CQ(a,c);}}
function FO(b,a){b.b=a;}
function aP(a){a.gd(DO(a));}
function bP(){var a,b;for(b=pI(this.c);b.wb();){a=oi(b.Eb(),35);b.Ac();a.D(this);}zC(this);}
function cP(){aP(this);}
function yO(){}
_=yO.prototype=new hC();_.Ac=bP;_.fd=cP;_.tN=iO+'AbstractConnection';_.tI=134;_.b=null;function eP(a){a.a=rO(new pO());}
function gP(a,b){BO(a,b);eP(a);if(b.a!=2){throw zE(new yE(),'Need exactly two connectors to connect');}a.Ec(a.a.a);hB(a,'gwt-diagrams-connection');return a;}
function fP(c,a,b){gP(c,ji('[Lpl.balon.gwt.diagrams.client.connector.Connector;',169,35,[a,b]));return c;}
function iP(){return new zP();}
function jP(){return this.a.a;}
function kP(b){var a;if(!pi(b,40)){throw zE(new yE(),'Expected BezierConnectionData');}a=oi(b,40);if(a.b.b!=2){throw zE(new yE(),'Expected two connection points');}if(a.a.b!=2){throw zE(new yE(),'Expected two control points');}uO(this.a,oi(lK(a.b,0),34),oi(lK(a.b,1),34),oi(lK(a.a,0),34),oi(lK(a.a,1),34));}
function dP(){}
_=dP.prototype=new yO();_.B=iP;_.jb=jP;_.gd=kP;_.tN=iO+'BezierTwoEndedConnection';_.tI=135;function nP(a){a.a=eK(new cK());}
function pP(a,b){BO(a,b);nP(a);if(b.a!=2){throw zE(new yE(),'Need exactly two connectors to connect');}a.Ec(ek());hB(a,'gwt-diagrams-connection');return a;}
function oP(c,a,b){pP(c,ji('[Lpl.balon.gwt.diagrams.client.connector.Connector;',169,35,[a,b]));return c;}
function rP(d,a){var b,c;for(c=d.a.b;c<a;c++){b=ek();gK(d.a,wi(b,gm));bk(d.jb(),b);Bl(b,'&nbsp;');}while(d.a.b>a){b=oi(lK(d.a,0),19);qK(d.a,wi(b,gm));rl(d.jb(),b);}}
function sP(){return new EP();}
function tP(a){var b,c,d,e,f;if(a.b.b<=1){throw zE(new yE(),'Too few connection points');}rP(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=oi(lK(this.a,d),19);e=oi(lK(a.b,d),34);c=oi(lK(a.b,d+1),34);f='gwt-diagrams-line';wl(b,'style','');zl(b,'className',f);Dl(b,'height','1');Dl(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Dl(b,'height',jF(mF(e.b-c.b)));}else if(e.b==c.b){Dl(b,'width',jF(mF(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Dl(b,'left',jF(pF(e.a,c.a)));Dl(b,'top',jF(pF(e.b,c.b)));zl(b,'className',f);}}
function mP(){}
_=mP.prototype=new yO();_.B=sP;_.gd=tP;_.tN=iO+'RectilinearTwoEndedConnection';_.tI=136;function vP(c,a,b){fP(c,a,b);return c;}
function xP(){return new eQ();}
function yP(a){if(a.b.b!=2){throw zE(new yE(),'Expected two connection points');}uO(this.a,oi(lK(a.b,0),34),oi(lK(a.b,1),34),oi(lK(a.b,1),34),oi(lK(a.b,0),34));}
function uP(){}
_=uP.prototype=new dP();_.B=xP;_.gd=yP;_.tN=iO+'StraightTwoEndedConnection';_.tI=137;function BP(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=ii('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[171],[37],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=uQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function CP(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw zE(new yE(),'Unsupported connectors count');}c=oi(lK(e,0),35);d=oi(lK(e,1),35);f=BP(this,c,d);h=c.zc(f[0]);i=d.zc(f[1]);a=wQ(h,f[0],50);b=wQ(i,f[1],50);g=kQ(new hQ(),ji('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',167,34,[h,i]),ji('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',167,34,[a,b]));return g;}
function zP(){}
_=zP.prototype=new bG();_.u=CP;_.tN=jO+'BezierConnectionCalculator';_.tI=138;function FP(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(hR(),kR);}if(c==1&&d>0){return a!==(hR(),lR);}if(c==0&&d<0){return a!==(hR(),lR);}if(c==1&&d<0){return a!==(hR(),kR);}}else{if(c==0&&d>0){return a!==(hR(),mR);}if(c==1&&d>0){return a!==(hR(),jR);}if(c==0&&d<0){return a!==(hR(),jR);}if(c==1&&d<0){return a!==(hR(),mR);}}return false;}
function bQ(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=ii('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[171],[37],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=uQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function cQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(hR(),lR);}if(c==1&&d>0){return a===(hR(),kR);}if(c==0&&d<0){return a===(hR(),kR);}if(c==1&&d<0){return a===(hR(),lR);}}else{if(c==0&&d>0){return a===(hR(),jR);}if(c==1&&d>0){return a===(hR(),mR);}if(c==0&&d<0){return a===(hR(),mR);}if(c==1&&d<0){return a===(hR(),jR);}}return false;}
function dQ(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw zE(new yE(),'Unsupported connectors count');}a=oi(lK(c,0),35);b=oi(lK(c,1),35);d=oQ(new mQ());e=bQ(this,a,b);i=a.zc(e[0]);j=wQ(i,e[0],10);k=b.zc(e[1]);l=wQ(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(cQ(this,e[0],0,f,true)&&cQ(this,e[1],1,f,true)){g=wQ(j,e[0],mF(si(f/2)));h=sQ(new rQ(),g.a,l.b);}else if(cQ(this,e[0],0,m,false)&&cQ(this,e[1],1,m,false)){g=wQ(j,e[0],mF(si(m/2)));h=sQ(new rQ(),l.a,g.b);}else if(cQ(this,e[0],0,f,true)&&cQ(this,e[1],1,m,false)){g=wQ(j,e[0],mF(f));h=wQ(l,e[1],mF(m));}else if(cQ(this,e[0],0,m,false)&&cQ(this,e[1],1,f,true)){g=wQ(j,e[0],mF(m));h=wQ(l,e[1],mF(f));}else if(cQ(this,e[0],0,f,true)&&FP(this,e[1],1,f,true)){g=wQ(j,e[0],mF(si(f/2)));h=sQ(new rQ(),g.a,l.b);}else if(FP(this,e[0],0,f,true)&&cQ(this,e[1],1,f,true)){h=wQ(l,e[1],mF(si(f/2)));g=sQ(new rQ(),h.a,j.b);}else if(cQ(this,e[0],0,m,false)&&FP(this,e[1],1,m,false)){g=wQ(j,e[0],mF(si(m/2)));h=sQ(new rQ(),l.a,g.b);}else if(FP(this,e[0],0,m,false)&&cQ(this,e[1],1,m,false)){h=wQ(l,e[1],mF(si(m/2)));g=sQ(new rQ(),j.a,h.b);}else if(FP(this,e[0],0,f,true)&&FP(this,e[1],1,f,true)){g=wQ(j,(hR(),lR),si(f/2));h=sQ(new rQ(),g.a,l.b);}else if(FP(this,e[0],0,m,false)&&FP(this,e[1],1,m,false)){g=wQ(j,(hR(),jR),si(m/2));h=sQ(new rQ(),l.a,g.b);}else if(FP(this,e[0],0,f,true)&&FP(this,e[1],1,m,false)){g=wQ(j,(hR(),lR),f);}else if(FP(this,e[0],0,m,false)&&FP(this,e[1],1,f,true)){g=wQ(j,(hR(),jR),m);}gK(d.b,i);gK(d.b,j);if(g!==null){gK(d.b,g);}if(h!==null){gK(d.b,h);}gK(d.b,l);gK(d.b,k);return d;}
function EP(){}
_=EP.prototype=new bG();_.u=dQ;_.tN=jO+'FullRectilinearTwoEndedCalculator';_.tI=139;function gQ(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw zE(new yE(),'Unsupported connectors count');}a=oi(lK(e,0),35);b=oi(lK(e,1),35);f=oQ(new mQ());c=sQ(new rQ(),a.nb()+si(a.tb()/2),a.rb()+si(a.kb()/2));d=sQ(new rQ(),b.nb()+si(b.tb()/2),b.rb()+si(b.kb()/2));g=sQ(new rQ(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=si(a.kb()/2);h=g.b!=0?si(j*g.a/mF(g.b)):2147483647;j*= -k;if(mF(h)>si(a.tb()/2)){h=si(a.tb()/2);j=g.a!=0?si(h*g.b/mF(g.a)):2147483647;h*= -i;}gK(f.b,sQ(new rQ(),c.a+h,c.b+j));j=si(b.kb()/2);h=g.b!=0?si(j*g.a/mF(g.b)):2147483647;j*=k;h= -h;if(mF(h)>si(b.tb()/2)){h=si(b.tb()/2);j=g.a!=0?si(h*g.b/mF(g.a)):2147483647;h*=i;j= -j;}gK(f.b,sQ(new rQ(),d.a+h,d.b+j));return f;}
function eQ(){}
_=eQ.prototype=new bG();_.u=gQ;_.tN=jO+'StraightCenterConnectionDataCalculator';_.tI=140;function nQ(a){a.b=eK(new cK());}
function oQ(a){nQ(a);return a;}
function pQ(b,a){nQ(b);fK(b.b,a);return b;}
function mQ(){}
_=mQ.prototype=new bG();_.tN=kO+'ConnectionData';_.tI=141;function iQ(a){a.a=eK(new cK());}
function jQ(c,b,a){pQ(c,b);iQ(c);fK(c.a,a);return c;}
function kQ(c,b,a){jQ(c,aL(b),aL(a));return c;}
function hQ(){}
_=hQ.prototype=new mQ();_.tN=kO+'BezierConnectionData';_.tI=142;function sQ(b,a,c){b.a=a;b.b=c;return b;}
function uQ(b,a){return qF((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function wQ(c,a,b){if(a===(hR(),jR)){return sQ(new rQ(),c.a,c.b+b);}else if(a===(hR(),mR)){return sQ(new rQ(),c.a,c.b-b);}else if(a===(hR(),kR)){return sQ(new rQ(),c.a-b,c.b);}else if(a===(hR(),lR)){return sQ(new rQ(),c.a+b,c.b);}else{throw CE(new BE());}}
function vQ(a,b){return sQ(new rQ(),a.a+b.a,a.b+b.b);}
function xQ(a){return sQ(new rQ(),-a.a,-a.b);}
function rQ(){}
_=rQ.prototype=new bG();_.tN=kO+'Point';_.tI=143;_.a=0;_.b=0;function zQ(a){a.c=fN(new eN());}
function AQ(a){zQ(a);return a;}
function CQ(b,a){if(jN(b.c,a)){EO(a,b);}}
function DQ(b,a){return wQ(sQ(new rQ(),b.nb()+si(b.tb()/2),b.rb()+si(b.kb()/2)),a,iR(a)?si(b.tb()/2):si(b.kb()/2));}
function EQ(c){var a,b;for(b=iN(c.c);bJ(b);){a=oi(cJ(b),41);a.fd();}}
function FQ(a){gN(this.c,a);}
function aR(a){CQ(this,a);}
function bR(a){return DQ(this,a);}
function cR(){return nR();}
function dR(a){return DQ(this,a);}
function yQ(){}
_=yQ.prototype=new bG();_.x=FQ;_.D=aR;_.db=bR;_.gb=cR;_.zc=dR;_.tN=lO+'AbstractConnector';_.tI=144;function hR(){hR=zN;mR=gR(new fR(),'UP');jR=gR(new fR(),'DOWN');kR=gR(new fR(),'LEFT');lR=gR(new fR(),'RIGHT');}
function gR(b,a){hR();b.a=a;return b;}
function iR(a){return a===kR||a===lR;}
function nR(){hR();return ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',171,37,[mR,jR,kR,lR]);}
function oR(){return this.a;}
function fR(){}
_=fR.prototype=new bG();_.tS=oR;_.tN=lO+'Direction';_.tI=145;_.a=null;var jR,kR,lR,mR;function vR(){vR=zN;DR=lM(new pL());}
function uR(a,b){vR();AQ(a);a.b=b;return a;}
function wR(){return this.b.ob();}
function xR(){var a,b;a=0;b=kl(this.b.jb());while(b!==null){if(xG('relative',ll(b,'position'))){a=al(b);break;}b=kl(b);}return jB(this.b)-a;}
function yR(){var a,b;a=0;b=kl(this.b.jb());while(b!==null){if(xG('relative',ll(b,'position'))){a=bl(b);break;}b=kl(b);}return kB(this.b)-a;}
function zR(){return this.b.pb();}
function AR(a){vR();return oi(rM(DR,a),42);}
function BR(b){vR();var a;if(oM(DR,b)){return oi(rM(DR,b),42);}else{a=uR(new pR(),b);sM(DR,b,a);return a;}}
function CR(c,b){vR();var a;if(oM(DR,c)){return oi(rM(DR,c),42);}else{a=rR(new qR(),c,b);sM(DR,c,a);return a;}}
function pR(){}
_=pR.prototype=new yQ();_.kb=wR;_.nb=xR;_.rb=yR;_.tb=zR;_.tN=lO+'UIObjectConnector';_.tI=146;_.b=null;var DR;function sR(){sR=zN;vR();}
function rR(b,a,c){sR();b.a=c;uR(b,a);return b;}
function tR(){return this.a;}
function qR(){}
_=qR.prototype=new pR();_.gb=tR;_.tN=lO+'UIObjectConnector$1';_.tI=147;function hS(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function iS(a){jh(new FR());em(dS(new cS(),a));}
function ER(){}
_=ER.prototype=new bG();_.tN=mO+'BaseExamplesEntryPoint';_.tI=148;function bS(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=tH(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=js(new hs(),true);Dl(a.jb(),'backgroundColor','#ABCDEF');kH(),mH;d=CG(d,' ','&nbsp;');ms(a,'<pre>'+d+'<\/pre>');Bx(a);}
function FR(){}
_=FR.prototype=new bG();_.tN=mO+'BaseExamplesEntryPoint$1';_.tI=149;function dS(b,a){b.a=a;return b;}
function fS(){qS(this.a);}
function cS(){}
_=cS.prototype=new bG();_.bb=fS;_.tN=mO+'BaseExamplesEntryPoint$2';_.tI=150;function qS(c){var a,b;b=AA(new nA());jq(Fy('tabs'),b);CA(b,zU(new yU()),'Rectilinear');CA(b,rT(new qT()),'Bezier');CA(b,DU(new CU()),'Straight');CA(b,lU(new uT()),'Diagram builder');BA(b,lS(new kS(),c,b));a=hS(c,'tab');if(a===null||xG('',a)){a='0';}bB(b,hF(a));}
function jS(){}
_=jS.prototype=new ER();_.tN=mO+'GwtDiagramsExample';_.tI=151;function lS(b,a,c){b.a=c;return b;}
function nS(a,b){return true;}
function oS(b,c){var a;a=oi(EA(this.a,c),43);iT(a);}
function kS(){}
_=kS.prototype=new bG();_.bc=nS;_.vc=oS;_.tN=mO+'GwtDiagramsExample$1';_.tI=152;function mT(a){a.i=iq(new hq());}
function nT(a){var b;jz(a);mT(a);hB(a,'gwt-diagrams-example');b=bC(new FB());lz(a,b);cC(b,a.i);cC(b,pT(a,hT(a)));return a;}
function pT(e,d){var a,b,c;a=dt(new ct());hB(a,'gwt-diagrams-sources-panel');for(b=oI(d);dI(b);){c=oi(eI(b),14);et(a,c);}return a;}
function lT(){}
_=lT.prototype=new cz();_.tN=nO+'AbstractExample';_.tI=153;function aT(a){a.g=eK(new cK());}
function bT(a){nT(a);aT(a);a.h=fT(a);Dl(a.i.jb(),'width','450px');Dl(a.i.jb(),'height','350px');a.C();return a;}
function cT(b,a){jq(b.i,a);gK(b.g,a);}
function eT(e,d,c,f,a){var b;b=Bw(new zw(),d);hB(b,'example-connector');kq(e.i,b,c,f);vS(e.h,b);if(a!==null){return CR(b,ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',171,37,[a]));}return BR(b);}
function fT(b){var a;a=tS(new sS(),b.i,true,b);return a;}
function gT(b,a){qK(b.g,a);}
function hT(f){var a,b,c,d,e;e=eK(new cK());b=AG(hh(f),46);a=DG(hh(f),b+1);gK(e,ow(new mw(),a+'.java',''));gK(e,ow(new mw(),'AbstractExample.java',''));gK(e,ow(new mw(),'AbstractConnectionsExample.java',''));for(d=oI(e);dI(d);){c=oi(eI(d),44);hB(c,'gwt-diagrams-source-link');pw(c,DS(new CS(),f,c));}return e;}
function iT(c){var a,b;for(b=oI(c.g);dI(b);){a=oi(eI(b),41);a.fd();}}
function jT(a){cT(this,a);}
function kT(){var a,b,c,d,e,f,g,h;a=eT(this,'all',50,50,null);b=eT(this,'all',100,100,null);this.y(a,b);c=eT(this,'up',250,50,(hR(),mR));d=eT(this,'down',300,100,(hR(),jR));this.y(c,d);e=eT(this,'left',50,200,(hR(),kR));f=eT(this,'right',100,250,(hR(),lR));this.y(e,f);g=eT(this,'left',250,200,(hR(),kR));h=eT(this,'left',300,250,(hR(),kR));this.y(g,h);}
function rS(){}
_=rS.prototype=new lT();_.t=jT;_.C=kT;_.tN=nO+'AbstractConnectionsExample';_.tI=154;_.h=null;function uS(){uS=zN;ad();}
function tS(d,a,b,c){uS();Fc(d,a,b);return d;}
function vS(a,b){A(a,b);Dl(b.jb(),'position','absolute');Dl(b.jb(),'zIndex','100');}
function wS(a){vS(this,a);}
function xS(b,a){return zS(new yS(),b,a,this);}
function sS(){}
_=sS.prototype=new Ec();_.Bb=wS;_.Db=xS;_.tN=nO+'AbstractConnectionsExample$1';_.tI=155;function AS(){AS=zN;se();}
function zS(d,a,b,c){AS();re(d,a,b);return d;}
function BS(d,c,b){var a;od(this,d,c,b);a=AR(c);if(a!==null){EQ(a);}}
function yS(){}
_=yS.prototype=new qe();_.rc=BS;_.tN=nO+'AbstractConnectionsExample$2';_.tI=156;function DS(b,a,c){b.a=c;return b;}
function FS(a){Fn('../source/'+rw(this.a),'','');}
function CS(){}
_=CS.prototype=new bG();_.dc=FS;_.tN=nO+'AbstractConnectionsExample$3';_.tI=157;function rT(a){bT(a);return a;}
function tT(a,b){this.t(fP(new dP(),a,b));}
function qT(){}
_=qT.prototype=new rS();_.y=tT;_.tN=nO+'BezierExample';_.tI=158;function kU(a){a.c=eK(new cK());}
function lU(a){bT(a);kU(a);return a;}
function mU(b,a){cT(b,a);aP(a);}
function oU(c,a,b){if(xG('rectilinear',c.d)){mU(c,oP(new mP(),a,b));}else if(xG('bezier',c.d)){mU(c,fP(new dP(),a,b));}else if(xG('straight',c.d)){mU(c,vP(new uP(),a,b));}}
function pU(e,d,c){var a,b;b=cU(new bU(),Fw(d),e);qB(b,d.pb(),d.ob());hB(b,'example-connector');kq(c,b,jB(d)-jB(c),kB(d)-kB(c));vS(e.h,b);a=null;if(xG('T',Fw(b))){a=(hR(),mR);}else if(xG('L',Fw(b))){a=(hR(),kR);}else if(xG('B',Fw(b))){a=(hR(),jR);}else if(xG('R',Fw(b))){a=(hR(),lR);}if(a!==null){return CR(b,ji('[Lpl.balon.gwt.diagrams.client.connector.Direction;',171,37,[a]));}return BR(b);}
function qU(c,a){var b;b=Bw(new zw(),a);hB(b,'helpEntry');fw(c.a,b);}
function rU(d,c,a){var b;b=uy(new sy(),'style',c);hB(b,'style-option');Eq(b,a);if(a){uU(d,c);}fw(d.e,b);jt(b,ET(new DT(),d,c));return b;}
function sU(d,a,c){var b;b=Bw(new zw(),a);rB(b,'toolbox-node');hB(b,c);fw(d.e,b);d.f.Bb(b);return b;}
function tU(d,e){var a,b,c,f;if(oK(d.c)){hB(e,'selected-connector');b=AR(e).c;for(c=iN(b);bJ(c);){a=oi(cJ(c),41);a.Ac();gT(d,a);}gK(d.c,e);}else if(kK(d.c,e)){nB(e,'selected-connector');qK(d.c,e);}else if(d.c.b==1){f=oi(lK(d.c,0),14);nB(e,'selected-connector');nB(f,'selected-connector');b=AR(e).c;for(c=iN(b);bJ(c);){a=oi(cJ(c),41);a.Ac();gT(d,a);}oU(d,AR(f),AR(e));iK(d.c);}}
function uU(b,a){b.d=a;}
function vU(a){mU(this,a);}
function wU(a,b){oU(this,a,b);}
function xU(){var a,b,c;a=Fc(new Ec(),this.i,true);b=jd(new id(),this.i);this.f=hU(new fU(),b,a,this);this.e=ew(new cw());rB(this.e,'toolbox');this.b=iq(new hq());this.a=ew(new cw());rB(this.a,'helpPanel');c=bC(new FB());rB(c,'builder');cC(c,this.a);cC(c,this.e);cC(c,this.b);jq(this.i,c);sU(this,'A','all');sU(this,'L','left');sU(this,'R','right');sU(this,'T','top');sU(this,'B','bottom');rU(this,'rectilinear',true);rU(this,'bezier',false);rU(this,'straight',false);qU(this,'drag&drop from toolbar to add');qU(this,'CTRL+click to select/connect');qU(this,'DEL to delete selected');ak(AT(new zT(),this));}
function uT(){}
_=uT.prototype=new rS();_.t=vU;_.y=wU;_.C=xU;_.tN=nO+'DiagramBuilderExample';_.tI=159;_.a=null;_.b=null;_.d=null;_.e=null;_.f=null;function wT(b,a,c){b.a=a;b.b=c;return b;}
function yT(a){var b,c,d;b=a.d;d=oi(rM(this.a.a,b),14);c=this.b.g;pU(this.a.b,oi(d,45),c);throw gd(new fd());}
function vT(){}
_=vT.prototype=new rb();_.sc=yT;_.tN=nO+'DiagramBuilderExample$1';_.tI=160;function AT(b,a){b.a=a;return b;}
function CT(a){var b,c;if(128==Dk(a)&&46==yk(a)&& !oK(this.a.c)){for(b=pI(this.a.c);dI(b);){c=oi(eI(b),14);fI(b);zC(c);}return false;}return true;}
function zT(){}
_=zT.prototype=new bG();_.jc=CT;_.tN=nO+'DiagramBuilderExample$2';_.tI=161;function ET(b,a,c){b.a=a;b.b=c;return b;}
function aU(a){uU(this.a,this.b);}
function DT(){}
_=DT.prototype=new bG();_.dc=aU;_.tN=nO+'DiagramBuilderExample$3';_.tI=162;function cU(c,a,b){c.a=b;Bw(c,a);return c;}
function eU(a){if(Dk(a)==1&&wk(a)){tU(this.a,this);}ax(this,a);}
function bU(){}
_=bU.prototype=new zw();_.cc=eU;_.tN=nO+'DiagramBuilderExample$4';_.tI=163;function iU(){iU=zN;ad();}
function gU(a){a.a=lM(new pL());}
function hU(d,a,b,c){iU();d.b=c;Fc(d,d.b.i,false);gU(d);dd(d,true);F(d,a);u(d,wT(new vT(),d,a));return d;}
function jU(a){var b,c;b=oi(a,45);c=Bw(new zw(),Fw(b));hB(c,'dragdrop-proxy');hB(c,'toolbox-node-proxy');qB(c,b.pb(),b.ob());sM(this.a,b,c);return c;}
function fU(){}
_=fU.prototype=new Ec();_.Cb=jU;_.tN=nO+'DiagramBuilderExample$ToolboxDragController';_.tI=164;function zU(a){bT(a);return a;}
function BU(a,b){this.t(oP(new mP(),a,b));}
function yU(){}
_=yU.prototype=new rS();_.y=BU;_.tN=nO+'RectilinearExample';_.tI=165;function DU(a){bT(a);return a;}
function FU(c,a,b){c.t(vP(new uP(),a,b));}
function aV(a,b){FU(this,a,b);}
function bV(){var a,b;a=eT(this,'connector 1',50,50,(hR(),mR));b=eT(this,'connector 2',200,200,(hR(),jR));FU(this,a,b);}
function CU(){}
_=CU.prototype=new rS();_.y=aV;_.C=bV;_.tN=nO+'StraightConnectionsExample';_.tI=166;function xD(){iS(new jS());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{xD();}catch(a){b(d);}else{xD();}}
var vi=[{},{27:1},{1:1,27:1,38:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{7:1,27:1},{27:1},{27:1,31:1},{27:1,31:1},{27:1,31:1},{27:1},{27:1},{10:1,27:1,38:1},{23:1,27:1},{27:1},{16:1,27:1},{16:1,27:1},{12:1,16:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{27:1},{13:1,16:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{15:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1},{20:1,27:1},{20:1,27:1},{20:1,27:1},{27:1},{15:1,19:1,27:1},{15:1,27:1},{21:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1,28:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{2:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,23:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{5:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,45:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{3:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,44:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{2:1,14:1,24:1,26:1,27:1,28:1,29:1},{21:1,27:1},{27:1},{14:1,22:1,27:1,28:1,29:1},{27:1,31:1},{14:1,25:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,22:1,27:1,28:1,29:1},{4:1,14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1,30:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{27:1},{11:1,16:1,27:1},{27:1},{27:1},{27:1,32:1},{27:1,33:1},{27:1,33:1},{27:1},{27:1},{27:1},{27:1},{27:1,32:1},{27:1,39:1},{27:1,33:1},{27:1},{27:1,33:1},{11:1,16:1,27:1},{27:1},{27:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{27:1},{27:1},{27:1},{27:1},{27:1,40:1},{27:1,34:1},{27:1,35:1},{27:1,37:1},{27:1,35:1,42:1},{27:1,35:1,42:1},{27:1},{27:1},{17:1,27:1},{27:1},{25:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{8:1,27:1},{22:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{7:1,27:1},{18:1,27:1},{22:1,27:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{9:1,27:1},{27:1},{27:1},{27:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();