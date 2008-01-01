(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,fO='com.allen_sauer.gwt.dragdrop.client.',gO='com.allen_sauer.gwt.dragdrop.client.drop.',hO='com.allen_sauer.gwt.dragdrop.client.util.',iO='com.allen_sauer.gwt.dragdrop.client.util.impl.',jO='com.google.gwt.core.client.',kO='com.google.gwt.lang.',lO='com.google.gwt.user.client.',mO='com.google.gwt.user.client.impl.',nO='com.google.gwt.user.client.ui.',oO='com.google.gwt.user.client.ui.impl.',pO='java.io.',qO='java.lang.',rO='java.util.',sO='pl.balon.gwt.diagrams.client.common.bezier.',tO='pl.balon.gwt.diagrams.client.connection.',uO='pl.balon.gwt.diagrams.client.connection.calculator.',vO='pl.balon.gwt.diagrams.client.connection.data.',wO='pl.balon.gwt.diagrams.client.connector.',xO='pl.balon.gwt.diagramsexample.client.',yO='pl.balon.gwt.diagramsexample.client.examples.';function eO(){}
function oG(a){return this===a;}
function pG(){return yH(this);}
function qG(){return this.tN+'@'+this.hC();}
function mG(){}
_=mG.prototype={};_.eQ=oG;_.hC=pG;_.tS=qG;_.toString=function(){return this.tS();};_.tN=qO+'Object';_.tI=1;function yL(b,a){b.d=a;return b;}
function xL(){}
_=xL.prototype=new mG();_.tN=rO+'EventObject';_.tI=3;_.d=null;function ob(c,b,a){yL(c,b);c.c=a;return c;}
function qb(){var a;a=this.c!==null?'dropTarget='+gg(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+gg(this.d)+')';}
function nb(){}
_=nb.prototype=new xL();_.tS=qb;_.tN=fO+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ob(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new nb();_.tS=q;_.tN=fO+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function v(){v=eO;db=wM(new AL());}
function s(a){a.j=y(a);}
function t(c,b,a){v();s(c);c.h=b!==null?b:cz();c.g=c.Fb(c.h,a);F(c,c.g);c.o=tc(new rc(),c);return c;}
function u(b,a){if(b.i===null){b.i=yb(new xb());}rK(b.i,a);}
function w(c,a,b){rB(a,'dragdrop-dragging');}
function x(b,a){pc(b.j,b.h,a);if(b.i!==null){Bb(b.i,a);}lB(a,'dragdrop-dragging');}
function y(a){return kc(new dc());}
function z(b,c){var a;a=nc(b.j,c,b.h);return a!==null?a:b.g;}
function A(a,b){{B(a,b,b);}}
function B(c,b,a){xc(c.o,b,a);lB(b,'dragdrop-draggable');lB(a,'dragdrop-handle');DM(db,b,a);}
function C(b,a){if(b.i!==null){Ab(b.i,a);}}
function D(c,a,b){if(c.i!==null){Cb(c.i,a,b);}}
function E(b,a){if(b.i!==null){Db(b.i,a);}}
function F(b,a){lc(b.j,a);}
function ab(b,a){if(ri(b.m,2)){oq(qi(b.m,2),a,b.n.a,b.n.d);}else if(ri(b.m,3)){mw(qi(b.m,3),a,b.k);}else if(ri(b.m,4)){jC(qi(b.m,4),a,b.k);}else if(ri(b.m,5)){kt(qi(b.m,5),a,b.k);}else if(ri(b.m,6)){qi(b.m,6).ed(a);}else{throw tG(new rG(),'Unable to handle initialDraggableParent '+jh(b.m));}}
function bb(b,a){if(b.l!==null&&gH(b.l)!=0){Fl(a.lb(),'margin',b.l);}}
function cb(b,a){b.m=a.p;if(ri(b.m,2)){b.n=lg(new kg(),a,b.m);}else if(ri(b.m,3)){b.k=ur(qi(b.m,3),a);}else if(ri(b.m,4)){b.k=ur(qi(b.m,4),a);}else if(ri(b.m,5)){b.k=ur(qi(b.m,5),a);}else if(ri(b.m,6)){}else{throw tG(new rG(),"Unable to handle 'initialDraggableParent instanceof "+jh(b.m)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.l=nl(a.lb(),'margin');if(b.l!==null&&gH(b.l)!=0){Fl(a.lb(),'margin','0px');}}
function eb(a){A(this,a);}
function fb(b,a){return re(new qe(),b,a);}
function r(){}
_=r.prototype=new mG();_.Db=eb;_.Fb=fb;_.tN=fO+'AbstractDragController';_.tI=6;_.g=null;_.h=null;_.i=null;_.k=0;_.l=null;_.m=null;_.n=null;_.o=null;var db;function hb(b,a){b.b=a;return b;}
function jb(a){if(a.c==0){return;}uc(a.b,a.d,a.e);a.a=wH()-a.c;a.c=0;}
function kb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=wH();}if(a.a>80){gm(a);}else{jb(a);}}
function lb(){jb(this);}
function gb(){}
_=gb.prototype=new mG();_.db=lb;_.tN=fO+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function tb(a){}
function ub(a){}
function vb(a){}
function wb(a){}
function rb(){}
_=rb.prototype=new mG();_.hc=tb;_.ic=ub;_.uc=vb;_.vc=wb;_.tN=fO+'DragHandlerAdapter';_.tI=8;function fI(d,a,b){var c;while(a.yb()){c=a.ac();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function hI(a){throw cI(new bI(),'add');}
function iI(b){var a;a=fI(this,this.Ab(),b);return a!==null;}
function jI(){var a,b,c;c=xG(new wG());a=null;yG(c,'[');b=this.Ab();while(b.yb()){if(a!==null){yG(c,a);}else{a=', ';}yG(c,tH(b.ac()));}yG(c,']');return CG(c);}
function eI(){}
_=eI.prototype=new mG();_.s=hI;_.C=iI;_.tS=jI;_.tN=rO+'AbstractCollection';_.tI=9;function yI(b,a){throw mF(new kF(),'Index: '+a+', Size: '+b.b);}
function zI(a){return mI(new lI(),a);}
function AI(a){return vI(new uI(),a);}
function BI(b,a){throw cI(new bI(),'add');}
function CI(a){this.r(this.gd(),a);return true;}
function DI(e){var a,b,c,d,f;if(e===this){return true;}if(!ri(e,31)){return false;}f=qi(e,31);if(this.gd()!=f.gd()){return false;}c=zI(this);d=f.Ab();while(oI(c)){a=pI(c);b=pI(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function EI(){var a,b,c,d;c=1;a=31;b=zI(this);while(oI(b)){d=pI(b);c=31*c+(d===null?0:d.hC());}return c;}
function FI(){return zI(this);}
function aJ(a){throw cI(new bI(),'remove');}
function kI(){}
_=kI.prototype=new eI();_.r=BI;_.s=CI;_.eQ=DI;_.hC=EI;_.Ab=FI;_.Dc=aJ;_.tN=rO+'AbstractList';_.tI=10;function oK(a){{sK(a);}}
function pK(a){oK(a);return a;}
function rK(b,a){hL(b.a,b.b++,a);return true;}
function qK(d,a){var b,c;c=a.Ab();b=c.yb();while(c.yb()){hL(d.a,d.b++,c.ac());}return b;}
function tK(a){sK(a);}
function sK(a){a.a=zh();a.b=0;}
function vK(b,a){return xK(b,a)!=(-1);}
function wK(b,a){if(a<0||a>=b.b){yI(b,a);}return dL(b.a,a);}
function xK(b,a){return yK(b,a,0);}
function yK(c,b,a){if(a<0){yI(c,a);}for(;a<c.b;++a){if(cL(b,dL(c.a,a))){return a;}}return (-1);}
function zK(a){return a.b==0;}
function AK(c,a){var b;b=wK(c,a);fL(c.a,a,1);--c.b;return b;}
function BK(c,b){var a;a=xK(c,b);if(a==(-1)){return false;}AK(c,a);return true;}
function CK(d,a,b){var c;c=wK(d,a);hL(d.a,a,b);return c;}
function DK(c,a){var b;if(a.a<c.b){a=fi(a,c.b);}for(b=0;b<c.b;++b){mi(a,b,dL(c.a,b));}if(a.a>c.b){mi(a,c.b,null);}return a;}
function FK(a,b){if(a<0||a>this.b){yI(this,a);}EK(this.a,a,b);++this.b;}
function aL(a){return rK(this,a);}
function EK(a,b,c){a.splice(b,0,c);}
function bL(a){return vK(this,a);}
function cL(a,b){return a===b||a!==null&&a.eQ(b);}
function eL(a){return wK(this,a);}
function dL(a,b){return a[b];}
function gL(a){return AK(this,a);}
function fL(a,c,b){a.splice(c,b);}
function hL(a,b,c){a[b]=c;}
function iL(){return this.b;}
function nK(){}
_=nK.prototype=new kI();_.r=FK;_.s=aL;_.C=bL;_.wb=eL;_.Dc=gL;_.gd=iL;_.tN=rO+'ArrayList';_.tI=11;_.a=null;_.b=0;function yb(a){pK(a);return a;}
function Ab(d,a){var b,c;for(c=zI(d);oI(c);){b=qi(pI(c),7);b.hc(a);}}
function Bb(e,d){var a,b,c;a=ac(new Fb(),d);for(c=zI(e);oI(c);){b=qi(pI(c),7);b.ic(a);}}
function Cb(f,e,a){var b,c,d;b=ob(new nb(),e,a);for(d=zI(f);oI(d);){c=qi(pI(d),7);c.uc(b);}}
function Db(e,d){var a,b,c;a=ac(new Fb(),d);for(c=zI(e);oI(c);){b=qi(pI(c),7);b.vc(a);}}
function xb(){}
_=xb.prototype=new nK();_.tN=fO+'DragHandlerCollection';_.tI=12;function ac(b,a){yL(b,a);return b;}
function cc(){return 'DragStartEvent(source='+gg(this.d)+')';}
function Fb(){}
_=Fb.prototype=new xL();_.tS=cc;_.tN=fO+'DragStartEvent';_.tI=13;function jc(a){a.a=pK(new nK());}
function kc(a){jc(a);return a;}
function lc(b,a){rK(b.a,a);}
function nc(g,h,a){var b,c,d,e,f,i,j,k;i=ig(new hg(),h,null);j=ef(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(hf(f,i)){k=df(f,j);if(k<=c){if(e===null|| !zf(hc(b).lb(),hc(e).lb())){c=k;e=b;}}}}return e===null?null:e.a;}
function oc(a){return zI(a.a);}
function pc(h,b,d){var a,c,e,f,g;a=ig(new hg(),b,null);g=pK(new nK());for(f=oc(h);oI(f);){e=qi(pI(f),8);c=fc(new ec(),e);if(!zf(d.lb(),hc(c).lb())){if(hf(c.b,a)){rK(g,c);}}}h.b=qi(DK(g,li('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',176,10,[])),9);nL(h.b);}
function dc(){}
_=dc.prototype=new mG();_.tN=fO+'DropControllerCollection';_.tI=14;_.b=null;function fc(c,a){var b;c.a=a;b=a.kb();if(!b.zb()){throw iF(new gF(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=ig(new hg(),b,null);return c;}
function hc(a){return a.a.kb();}
function ic(a){var b;b=qi(a,10);return zf(hc(this).lb(),hc(b).lb())?1:(-1);}
function ec(){}
_=ec.prototype=new mG();_.v=ic;_.tN=fO+'DropControllerCollection$Candidate';_.tI=15;_.a=null;_.b=null;function sc(a){a.d=hb(new gb(),a);a.f=wM(new AL());}
function tc(b,a){sc(b);b.e=a;b.a=a.h;return b;}
function uc(e,f,g){var a,b,c,d;c=lg(new kg(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=zF(0,AF(a,e.l));b=zF(0,AF(b,e.m));}Af(e.o.lb(),a,b);d=z(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.mc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.kc(e.o,e.g,e.e);}}if(e.i!==null){e.i.tc(e.o,e.g,e.e);}}
function vc(b){var a;sl(b.b.lb());b.h=false;if(b.i!==null){b.i.mc(b.g,b.e);}b.i=null;bd(b.e,b.g,null);a=ob(new nb(),b.g,null);C(b.e,a);}
function xc(c,b,a){if(a!==null){bx(a,c);DM(c.f,a,b);}else{throw tG(new rG(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function yc(f){var a,c,d,e;f.g=qi(CM(f.f,f.b),14);try{E(f.e,f.g);}catch(a){a=Bi(a);if(ri(a,12)){a;return;}else throw a;}cd(f.e,f.g);f.o=f.e.f;f.l=Ef(f.a.lb())-f.o.rb();f.m=Df(f.a.lb())-f.o.qb();e=lg(new kg(),f.b,f.a);c=lg(new kg(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;xl(f.b.lb());f.h=true;try{uc(f,f.j,f.k);}catch(a){a=Bi(a);if(ri(a,11)){d=a;vc(f);throw d;}else throw a;}}
function zc(b,c,d){var a;this.b=b;a=vk((bk(),pk));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}al((bk(),pk));cg();this.j=c;this.k=d;}
function Ac(a){}
function Bc(a){}
function Cc(d,e,f){var a,c;if(!this.h){if(this.n){yc(this);}if(!this.h){return;}}al((bk(),pk));try{kb(this.d,e,f);}catch(a){a=Bi(a);if(ri(a,11)){c=a;vc(this);throw c;}else throw a;}}
function Dc(g,h,i){var a,a,d,e,f;d=vk((bk(),pk));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{sl(this.b.lb());uc(this,h,i);this.h=false;if(this.i===null){vc(this);return;}try{D(this.e,this.g,this.i.kb());}catch(a){a=Bi(a);if(ri(a,12)){a;vc(this);return;}else throw a;}try{this.i.wc(this.o,this.g,this.e);}catch(a){a=Bi(a);if(ri(a,13)){a;vc(this);return;}else throw a;}bd(this.e,this.g,this.i.kb());e=this.i.jc(this.o,this.g,this.e);C(this.e,e);}catch(a){a=Bi(a);if(ri(a,11)){f=a;vc(this);throw f;}else throw a;}finally{this.i=null;}}
function rc(){}
_=rc.prototype=new mG();_.oc=zc;_.pc=Ac;_.qc=Bc;_.rc=Cc;_.sc=Dc;_.tN=fO+'MouseDragHandler';_.tI=16;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ad(){ad=eO;v();}
function Fc(c,b,a){ad();t(c,b,a);return c;}
function bd(c,a,b){w(c,a,b);if(c.c!==null){c.c=null;if(c.e!==null){DC(c.e);c.e=null;}else{if(b===null){ab(c,a);}}bb(c,a);DC(c.f);c.f=null;}}
function cd(d,a){var b,c;x(d,a);d.c=a;d.e=d.Eb(a);cb(d,a);c=lg(new kg(),a,d.h);d.f=nz(new gz());lB(d.f,'dragdrop-movable-panel');if(d.e===null){uB(d.f,a.rb(),a.qb());}oq(d.h,d.f,c.a,c.d);b=d.e!==null?d.e:d.c;d.f.ed(b);}
function dd(b,a){b.d=a;}
function ed(a){var b;if(this.d){b=ov(new st(),'this is a Drag Proxy');lB(b,'dragdrop-proxy');uB(b,this.c.rb(),this.c.qb());return b;}else{return null;}}
function Ec(){}
_=Ec.prototype=new r();_.Eb=ed;_.tN=fO+'PickupDragController';_.tI=17;_.c=null;_.d=false;_.e=null;_.f=null;function DH(){DH=eO;FH=ki('[Ljava.lang.StackTraceElement;',[173],[36],[0],null);}
function AH(a){a.c=FH;}
function BH(a){DH();AH(a);return a;}
function CH(b,a){DH();AH(b);b.b=a;return b;}
function EH(c){var a,b;a=jh(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function aI(){return EH(this);}
function zH(){}
_=zH.prototype=new mG();_.tS=aI;_.tN=qO+'Throwable';_.tI=18;_.a=null;_.b=null;var FH;function cF(){cF=eO;DH();}
function aF(a){cF();BH(a);return a;}
function bF(b,a){cF();CH(b,a);return b;}
function FE(){}
_=FE.prototype=new zH();_.tN=qO+'Exception';_.tI=19;function hd(){hd=eO;cF();}
function gd(a){hd();aF(a);return a;}
function fd(){}
_=fd.prototype=new FE();_.tN=fO+'VetoDragException';_.tI=20;function yd(b,a){b.g=a;lB(a,b.jb());return b;}
function Ad(d,c,b,a){rB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.Cb(c,b,a);}
function Bd(d,c,b,a){lB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Cd(c,b,a){rB(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Dd(){return this.g;}
function Ed(c,b,a){return ob(new nb(),b,this.g);}
function Fd(c,b,a){return Ad(this,c,b,a);}
function ae(c,b,a){Bd(this,c,b,a);}
function be(b,a){Cd(this,b,a);}
function ce(c,b,a){}
function de(c,b,a){}
function xd(){}
_=xd.prototype=new mG();_.kb=Dd;_.Cb=Ed;_.jc=Fd;_.kc=ae;_.mc=be;_.tc=ce;_.wc=de;_.tN=gO+'AbstractDropController';_.tI=21;_.g=null;function ge(){ge=eO;me=Fw(new Dw(),'x');}
function fe(b,a){ge();yd(b,a);return b;}
function he(f,e){var a,b,c,d;d=nz(new gz());lB(d,'dragdrop-positioner');oq(cz(),d,(-500),(-500));d.ed(me);a=nz(new gz());c=e.rb()-Ff(d);b=e.qb()-ag(d);uB(a,c,b);d.ed(a);return d;}
function ie(e,d,b,a){var c;c=Ad(e,d,b,a);le(e);return c;}
function je(d,c,b,a){Bd(d,c,b,a);d.f=he(d,b);}
function ke(c,b,a){Cd(c,b,a);le(c);}
function le(a){if(a.f!==null){DC(a.f);}}
function ne(c,b,a){return ie(this,c,b,a);}
function oe(c,b,a){je(this,c,b,a);}
function pe(b,a){ke(this,b,a);}
function ee(){}
_=ee.prototype=new xd();_.jc=ne;_.kc=oe;_.mc=pe;_.tN=gO+'AbstractPositioningDropController';_.tI=22;_.f=null;var me;function kd(){kd=eO;ge();}
function jd(b,a){kd();fe(b,a);b.d=ze(new ye(),a);return b;}
function ld(d,c,a,e){var b;b=d.gb(c,a,e);if(b!==null){oq(d.d.b,e,b.a,b.d);}}
function md(e,d,b,a){var c;oq(e.d.b,b,e.c.a,e.c.d);c=ie(e,d,b,a);e.e=null;return c;}
function nd(c,b,a){ke(c,b,a);De(c.d,null);c.e=null;}
function od(d,c,b,a){ld(d,c,b,d.f);}
function pd(b,a,d){var c;c=ig(new hg(),b,this.d.a);if(this.e===null){this.e=lg(new kg(),b,this.d.b);}else{rg(this.e,b);}ng(this.e,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.e;}
function qd(){return 'dragdrop-dropTarget dragdrop-absolute-positioning-drop-target';}
function rd(e,b,a){var c,d;c=this.g;d=lg(new kg(),b,c);return o(new n(),b,c,d.a,d.d);}
function sd(c,b,a){return md(this,c,b,a);}
function td(c,b,a){je(this,c,b,a);De(this.d,a.h);}
function ud(b,a){nd(this,b,a);}
function vd(c,b,a){od(this,c,b,a);}
function wd(c,b,a){this.c=this.gb(c,b,b);if(this.c===null){throw Fe(new Ee());}}
function id(){}
_=id.prototype=new ee();_.gb=pd;_.jb=qd;_.Cb=rd;_.jc=sd;_.kc=td;_.mc=ud;_.tc=vd;_.wc=wd;_.tN=gO+'AbsolutePositionDropController';_.tI=23;_.c=null;_.d=null;_.e=null;function se(){se=eO;kd();}
function re(c,b,a){se();jd(c,b);c.a=a;return c;}
function te(b,a,d){var c;if(this.a){c=ig(new hg(),b,this.d.a);if(this.b===null){this.b=lg(new kg(),b,this.d.b);}else{rg(this.b,b);}ng(this.b,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.b;}else{return null;}}
function ue(){return 'dragdrop-boundary';}
function ve(d,c,a){var b;b=md(this,d,c,a);this.b=null;return b;}
function we(b,a){nd(this,b,a);this.b=null;}
function qe(){}
_=qe.prototype=new id();_.gb=te;_.jb=ue;_.jc=ve;_.mc=we;_.tN=gO+'BoundaryDropController';_.tI=24;_.a=false;_.b=null;function ze(b,a){b.b=a;return b;}
function Be(a){return Df(a.b.lb());}
function Ce(a){return Ef(a.b.lb());}
function De(b,a){b.a=a;}
function ye(){}
_=ye.prototype=new mG();_.tN=gO+'DropTargetInfo';_.tI=25;_.a=null;_.b=null;function af(){af=eO;cF();}
function Fe(a){af();aF(a);return a;}
function Ee(){}
_=Ee.prototype=new FE();_.tN=gO+'VetoDropException';_.tI=26;function df(b,a){var c,d;c=zF(b.b-a.a,a.a-b.c);d=zF(b.d-a.b,a.b-b.a);return zF(c,d);}
function ef(a){return tf(new sf(),a.b+ui(gf(a)/2),a.d+ui(ff(a)/2));}
function ff(a){return a.a-a.d;}
function gf(a){return a.c-a.b;}
function hf(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function jf(b,a){b.a=a;}
function kf(b,a){b.b=a;}
function lf(b,a){b.c=a;}
function mf(a,b){a.d=b;}
function nf(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function bf(){}
_=bf.prototype=new mG();_.tS=nf;_.tN=hO+'AbstractArea';_.tI=27;_.a=0;_.b=0;_.c=0;_.d=0;function qf(){return '('+this.pb()+', '+this.tb()+')';}
function of(){}
_=of.prototype=new mG();_.tS=qf;_.tN=hO+'AbstractLocation';_.tI=28;function tf(b,a,c){b.a=a;b.b=c;return b;}
function vf(){return this.a;}
function wf(){return this.b;}
function sf(){}
_=sf.prototype=new of();_.pb=vf;_.tb=wf;_.tN=hO+'CoordinateLocation';_.tI=29;_.a=0;_.b=0;function yf(){yf=eO;{bg=new xg();}}
function zf(b,a){yf();return Ag(bg,b,a);}
function Af(a,b,c){yf();a.style.left=b+'px';a.style.top=c+'px';}
function Bf(a){yf();return Dg(bg,a);}
function Cf(a){yf();return Eg(bg,a);}
function Df(a){yf();return Fg(bg,a);}
function Ef(a){yf();return ah(bg,a);}
function Ff(a){yf();return dh(bg,a);}
function ag(a){yf();return eh(bg,a);}
function cg(){yf();bh(bg);}
var bg=null;function gg(a){var b;b=jh(a);return iH(b,fH(b,46)+1);}
function ig(e,g,c){var a,b,d,f;b=nB(g);f=oB(g);if(c!==null){b-=nB(c);b-=Bf(c.lb());f-=oB(c);f-=Cf(c.lb());}d=b+g.rb();a=f+g.qb();kf(e,b);mf(e,f);lf(e,d);jf(e,a);return e;}
function hg(){}
_=hg.prototype=new bf();_.tN=hO+'WidgetArea';_.tI=30;function lg(b,c,a){pg(b,c);og(b,a);qg(b);return b;}
function ng(e,c,d,a,b){e.a=zF(c,AF(e.a,a));e.d=zF(d,AF(e.d,b));}
function og(b,a){if(a===null||a===cz()){b.b=0;b.c=0;}else{b.b=nB(a)+Bf(a.lb());b.c=oB(a)+Cf(a.lb());}}
function pg(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=nB(b);a.f=oB(b);}}
function qg(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function rg(a,b){pg(a,b);qg(a);}
function sg(){return this.a;}
function tg(){return this.d;}
function ug(){return '('+this.a+', '+this.d+')';}
function kg(){}
_=kg.prototype=new of();_.pb=sg;_.tb=tg;_.tS=ug;_.tN=hO+'WidgetLocation';_.tI=31;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function dh(a,b){return b.rb()-ah(a,b.lb());}
function eh(a,b){return b.qb()-Fg(a,b.lb());}
function vg(){}
_=vg.prototype=new mG();_.tN=iO+'DOMUtilImpl';_.tI=32;function Dg(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function Eg(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function Fg(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function ah(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function bh(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function Bg(){}
_=Bg.prototype=new vg();_.tN=iO+'DOMUtilImplStandard';_.tI=33;function Ag(c,b,a){return !(!(b.compareDocumentPosition(a)&16));}
function wg(){}
_=wg.prototype=new Bg();_.tN=iO+'DOMUtilImplMozilla';_.tI=34;function xg(){}
_=xg.prototype=new wg();_.tN=iO+'DOMUtilImplMozillaOld';_.tI=35;function jh(a){return a==null?null:a.tN;}
function lh(a){kh=a;}
var kh=null;function oh(a){return a==null?0:a.$H?a.$H:(a.$H=qh());}
function ph(a){return a==null?0:a.$H?a.$H:(a.$H=qh());}
function qh(){return ++rh;}
var rh=0;function uG(){uG=eO;cF();}
function sG(a){uG();aF(a);return a;}
function tG(b,a){uG();bF(b,a);return b;}
function rG(){}
_=rG.prototype=new FE();_.tN=qO+'RuntimeException';_.tI=36;function uh(){uh=eO;uG();}
function th(c,b,a){uh();tG(c,'JavaScript '+b+' exception: '+a);return c;}
function sh(){}
_=sh.prototype=new rG();_.tN=jO+'JavaScriptException';_.tI=37;function xh(b,a){if(!ri(a,15)){return false;}return Bh(b,qi(a,15));}
function yh(a){return oh(a);}
function zh(){return [];}
function Ah(){return {};}
function Ch(a){return xh(this,a);}
function Bh(a,b){return a===b;}
function Dh(){return yh(this);}
function Fh(){return Eh(this);}
function Eh(a){if(a.toString)return a.toString();return '[object]';}
function vh(){}
_=vh.prototype=new mG();_.eQ=Ch;_.hC=Dh;_.tS=Fh;_.tN=jO+'JavaScriptObject';_.tI=38;function bi(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function di(a,b,c){return a[b]=c;}
function fi(a,b){return ei(a,b);}
function ei(a,b){return bi(new ai(),b,a.tI,a.b,a.tN);}
function gi(b,a){return b[a];}
function ii(b,a){return b[a];}
function hi(a){return a.length;}
function ki(e,d,c,b,a){return ji(e,d,c,b,0,hi(b),a);}
function ji(j,i,g,c,e,a,b){var d,f,h;if((f=gi(c,e))<0){throw DF(new CF());}h=bi(new ai(),f,gi(i,e),gi(g,e),j);++e;if(e<a){j=iH(j,1);for(d=0;d<f;++d){di(h,d,ji(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){di(h,d,b);}}return h;}
function li(f,e,c,g){var a,b,d;b=hi(g);d=bi(new ai(),b,e,c,f);for(a=0;a<b;++a){di(d,a,ii(g,a));}return d;}
function mi(a,b,c){if(c!==null&&a.b!=0&& !ri(c,a.b)){throw kE(new jE());}return di(a,b,c);}
function ai(){}
_=ai.prototype=new mG();_.tN=kO+'Array';_.tI=39;function pi(b,a){return !(!(b&&xi[b][a]));}
function qi(b,a){if(b!=null)pi(b.tI,a)||wi();return b;}
function ri(b,a){return b!=null&&pi(b.tI,a);}
function si(a){return a&65535;}
function ti(a){return ~(~a);}
function ui(a){if(a>(pF(),qF))return pF(),qF;if(a<(pF(),rF))return pF(),rF;return a>=0?Math.floor(a):Math.ceil(a);}
function wi(){throw AE(new zE());}
function vi(a){if(a!==null){throw AE(new zE());}return a;}
function yi(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var xi;function Bi(a){if(ri(a,16)){return a;}return th(new sh(),Di(a),Ci(a));}
function Ci(a){return a.message;}
function Di(a){return a.name;}
function aj(){aj=eO;uG();}
function Fi(b,a){aj();sG(b);return b;}
function Ei(){}
_=Ei.prototype=new rG();_.tN=lO+'CommandCanceledException';_.tI=42;function vj(a){a.a=dj(new cj(),a);a.b=pK(new nK());a.d=hj(new gj(),a);a.f=lj(new kj(),a);}
function wj(a){vj(a);return a;}
function yj(c){var a,b,d;a=nj(c.f);qj(c.f);b=null;if(ri(a,17)){b=Fi(new Ei(),qi(a,17));}else{}if(b!==null){d=kh;if(d!==null){oS(d,b);}}Bj(c,false);Aj(c);}
function zj(e,d){var a,b,c,f;f=false;try{Bj(e,true);rj(e.f,e.b.b);gn(e.a,10000);while(oj(e.f)){b=pj(e.f);c=true;try{if(b===null){return;}if(ri(b,17)){a=qi(b,17);a.db();}else{}}finally{f=sj(e.f);if(f){return;}if(c){qj(e.f);}}if(Ej(wH(),d)){return;}}}finally{if(!f){cn(e.a);Bj(e,false);Aj(e);}}}
function Aj(a){if(!zK(a.b)&& !a.e&& !a.c){Cj(a,true);gn(a.d,1);}}
function Bj(b,a){b.c=a;}
function Cj(b,a){b.e=a;}
function Dj(b,a){rK(b.b,a);Aj(b);}
function Ej(a,b){return yF(a-b)>=100;}
function bj(){}
_=bj.prototype=new mG();_.tN=lO+'CommandExecutor';_.tI=43;_.c=false;_.e=false;function dn(){dn=eO;nn=pK(new nK());{mn();}}
function bn(a){dn();return a;}
function cn(a){if(a.b){hn(a.c);}else{jn(a.c);}BK(nn,a);}
function en(e,d){var a,c;try{fn(e);}catch(a){a=Bi(a);if(ri(a,16)){c=a;oS(d,c);}else throw a;}}
function fn(a){if(!a.b){BK(nn,a);}a.Fc();}
function gn(b,a){if(a<=0){throw eF(new dF(),'must be positive');}cn(b);b.b=false;b.c=kn(b,a);rK(nn,b);}
function hn(a){dn();$wnd.clearInterval(a);}
function jn(a){dn();$wnd.clearTimeout(a);}
function kn(b,a){dn();return $wnd.setTimeout(function(){b.eb();},a);}
function ln(){var a;a=kh;if(a!==null){en(this,a);}else{fn(this);}}
function mn(){dn();rn(new Dm());}
function Cm(){}
_=Cm.prototype=new mG();_.eb=ln;_.tN=lO+'Timer';_.tI=44;_.b=false;_.c=0;var nn;function ej(){ej=eO;dn();}
function dj(b,a){ej();b.a=a;bn(b);return b;}
function fj(){if(!this.a.c){return;}yj(this.a);}
function cj(){}
_=cj.prototype=new Cm();_.Fc=fj;_.tN=lO+'CommandExecutor$1';_.tI=45;function ij(){ij=eO;dn();}
function hj(b,a){ij();b.a=a;bn(b);return b;}
function jj(){Cj(this.a,false);zj(this.a,wH());}
function gj(){}
_=gj.prototype=new Cm();_.Fc=jj;_.tN=lO+'CommandExecutor$2';_.tI=46;function lj(b,a){b.d=a;return b;}
function nj(a){return wK(a.d.b,a.b);}
function oj(a){return a.c<a.a;}
function pj(b){var a;b.b=b.c;a=wK(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function qj(a){AK(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function rj(b,a){b.a=a;}
function sj(a){return a.b==(-1);}
function tj(){return oj(this);}
function uj(){return pj(this);}
function kj(){}
_=kj.prototype=new mG();_.yb=tj;_.ac=uj;_.tN=lO+'CommandExecutor$CircularIterator';_.tI=47;_.a=0;_.b=(-1);_.c=0;function bk(){bk=eO;wl=pK(new nK());{ol=new go();oo(ol);}}
function ck(a){bk();rK(wl,a);}
function dk(b,a){bk();cp(ol,b,a);}
function ek(a,b){bk();return lo(ol,a,b);}
function fk(){bk();return ep(ol,'A');}
function gk(){bk();return ep(ol,'div');}
function hk(a){bk();return ep(ol,a);}
function ik(a){bk();return wo(ol,a);}
function jk(){bk();return ep(ol,'label');}
function kk(){bk();return ep(ol,'span');}
function lk(){bk();return ep(ol,'tbody');}
function mk(){bk();return ep(ol,'td');}
function nk(){bk();return ep(ol,'tr');}
function ok(){bk();return ep(ol,'table');}
function sk(b,a,d){bk();var c;c=kh;if(c!==null){qk(b,a,d,c);}else{rk(b,a,d);}}
function qk(e,d,g,f){bk();var a,c;try{rk(e,d,g);}catch(a){a=Bi(a);if(ri(a,16)){c=a;oS(f,c);}else throw a;}}
function rk(b,a,c){bk();var d;if(a===vl){if(Fk(b)==8192){vl=null;}}d=pk;pk=b;try{c.ec(b);}finally{pk=d;}}
function tk(b,a){bk();fp(ol,b,a);}
function uk(a){bk();return gp(ol,a);}
function vk(a){bk();return mo(ol,a);}
function wk(a){bk();return hp(ol,a);}
function xk(a){bk();return ip(ol,a);}
function yk(a){bk();return jp(ol,a);}
function zk(a){bk();return xo(ol,a);}
function Ak(a){bk();return kp(ol,a);}
function Bk(a){bk();return lp(ol,a);}
function Ck(a){bk();return mp(ol,a);}
function Dk(a){bk();return yo(ol,a);}
function Ek(a){bk();return zo(ol,a);}
function Fk(a){bk();return np(ol,a);}
function al(a){bk();Ao(ol,a);}
function bl(a){bk();return Bo(ol,a);}
function cl(a){bk();return io(ol,a);}
function dl(a){bk();return jo(ol,a);}
function el(b,a){bk();return op(ol,b,a);}
function fl(a){bk();return pp(ol,a);}
function il(a,b){bk();return sp(ol,a,b);}
function gl(a,b){bk();return qp(ol,a,b);}
function hl(a,b){bk();return rp(ol,a,b);}
function jl(a){bk();return tp(ol,a);}
function kl(a){bk();return Co(ol,a);}
function ll(a){bk();return up(ol,a);}
function ml(a){bk();return Do(ol,a);}
function nl(b,a){bk();return vp(ol,b,a);}
function pl(c,a,b){bk();Fo(ol,c,a,b);}
function ql(b,a){bk();return po(ol,b,a);}
function rl(a){bk();var b,c;c=true;if(wl.b>0){b=qi(wK(wl,wl.b-1),18);if(!(c=b.lc(a))){tk(a,true);al(a);}}return c;}
function sl(a){bk();if(vl!==null&&ek(a,vl)){vl=null;}qo(ol,a);}
function tl(b,a){bk();wp(ol,b,a);}
function ul(a){bk();BK(wl,a);}
function xl(a){bk();vl=a;ap(ol,a);}
function yl(b,a,c){bk();xp(ol,b,a,c);}
function Bl(a,b,c){bk();Ap(ol,a,b,c);}
function zl(a,b,c){bk();yp(ol,a,b,c);}
function Al(a,b,c){bk();zp(ol,a,b,c);}
function Cl(a,b){bk();Bp(ol,a,b);}
function Dl(a,b){bk();Cp(ol,a,b);}
function El(a,b){bk();Dp(ol,a,b);}
function Fl(b,a,c){bk();Ep(ol,b,a,c);}
function am(a,b){bk();so(ol,a,b);}
function bm(a){bk();return to(ol,a);}
function cm(){bk();return Fp(ol);}
function dm(){bk();return aq(ol);}
var pk=null,ol=null,vl=null,wl;function fm(){fm=eO;hm=wj(new bj());}
function gm(a){fm();if(a===null){throw aG(new FF(),'cmd can not be null');}Dj(hm,a);}
var hm;function km(a){if(ri(a,19)){return ek(this,qi(a,19));}return xh(yi(this,im),a);}
function lm(){return yh(yi(this,im));}
function mm(){return bm(this);}
function im(){}
_=im.prototype=new vh();_.eQ=km;_.hC=lm;_.tS=mm;_.tN=lO+'Element';_.tI=48;function rm(a){return xh(yi(this,nm),a);}
function sm(){return yh(yi(this,nm));}
function tm(){return bl(this);}
function nm(){}
_=nm.prototype=new vh();_.eQ=rm;_.hC=sm;_.tS=tm;_.tN=lO+'Event';_.tI=49;function vm(){vm=eO;ym=pK(new nK());{zm=new dq();if(!iq(zm)){zm=null;}}}
function wm(e,d){vm();var a,c;try{xm(e);}catch(a){a=Bi(a);if(ri(a,16)){c=a;oS(d,c);}else throw a;}}
function xm(a){vm();var b,c;for(b=zI(ym);oI(b);){c=vi(pI(b));null.kd();}}
function Am(a){vm();if(zm!==null){fq(zm,a);}}
function Bm(b){vm();var a;a=kh;if(a!==null){wm(b,a);}else{xm(b);}}
var ym,zm=null;function Fm(){while((dn(),nn).b>0){cn(qi(wK((dn(),nn),0),20));}}
function an(){return null;}
function Dm(){}
_=Dm.prototype=new mG();_.zc=Fm;_.Ac=an;_.tN=lO+'Timer$1';_.tI=50;function qn(){qn=eO;sn=pK(new nK());co=pK(new nK());{Dn();}}
function rn(a){qn();rK(sn,a);}
function tn(d){qn();var a,c;try{un();}catch(a){a=Bi(a);if(ri(a,16)){c=a;oS(d,c);}else throw a;}}
function un(){qn();var a,b;for(a=zI(sn);oI(a);){b=qi(pI(a),21);b.zc();}}
function vn(d){qn();var a,c;try{return wn();}catch(a){a=Bi(a);if(ri(a,16)){c=a;oS(d,c);return null;}else throw a;}}
function wn(){qn();var a,b,c,d;d=null;for(a=zI(sn);oI(a);){b=qi(pI(a),21);c=b.Ac();{d=c;}}return d;}
function xn(d){qn();var a,c;try{yn();}catch(a){a=Bi(a);if(ri(a,16)){c=a;oS(d,c);}else throw a;}}
function yn(){qn();var a,b;for(a=zI(co);oI(a);){b=vi(pI(a));null.kd();}}
function zn(){qn();return cm();}
function An(){qn();return dm();}
function Bn(){qn();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function Cn(){qn();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function Dn(){qn();__gwt_initHandlers(function(){ao();},function(){return Fn();},function(){En();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function En(){qn();var a;a=kh;if(a!==null){tn(a);}else{un();}}
function Fn(){qn();var a;a=kh;if(a!==null){return vn(a);}else{return wn();}}
function ao(){qn();var a;a=kh;if(a!==null){xn(a);}else{yn();}}
function bo(c,b,a){qn();$wnd.open(c,b,a);}
var sn,co;function cp(c,b,a){b.appendChild(a);}
function ep(b,a){return $doc.createElement(a);}
function fp(c,b,a){b.cancelBubble=a;}
function gp(b,a){return !(!a.altKey);}
function hp(b,a){return a.clientX|| -1;}
function ip(b,a){return a.clientY|| -1;}
function jp(b,a){return !(!a.ctrlKey);}
function kp(b,a){return a.which||(a.keyCode|| -1);}
function lp(b,a){return !(!a.metaKey);}
function mp(b,a){return !(!a.shiftKey);}
function np(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function op(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function pp(c,b){var a=$doc.getElementById(b);return a||null;}
function sp(d,a,b){var c=a[b];return c==null?null:String(c);}
function qp(c,a,b){return !(!a[b]);}
function rp(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function tp(b,a){return a.__eventBits||0;}
function up(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.nb(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function vp(d,b,a){var c=b.style[a];return c==null?null:c;}
function wp(c,b,a){b.removeChild(a);}
function xp(c,b,a,d){b.setAttribute(a,d);}
function Ap(c,a,b,d){a[b]=d;}
function yp(c,a,b,d){a[b]=d;}
function zp(c,a,b,d){a[b]=d;}
function Bp(c,a,b){a.__listener=b;}
function Cp(c,a,b){if(!b){b='';}a.innerHTML=b;}
function Dp(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Ep(c,b,a,d){b.style[a]=d;}
function Fp(a){return $doc.body.clientHeight;}
function aq(a){return $doc.body.clientWidth;}
function bq(a){return up(this,a);}
function eo(){}
_=eo.prototype=new mG();_.nb=bq;_.tN=mO+'DOMImpl';_.tI=51;function wo(c,b){var a=$doc.createElement('INPUT');a.type='radio';a.name=b;return a;}
function xo(b,a){return a.relatedTarget?a.relatedTarget:null;}
function yo(b,a){return a.target||null;}
function zo(b,a){return a.relatedTarget||null;}
function Ao(b,a){a.preventDefault();}
function Bo(b,a){return a.toString();}
function Co(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function Do(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function Eo(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){sk(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!rl(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)sk(b,a,c);};$wnd.__captureElem=null;}
function Fo(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function ap(b,a){$wnd.__captureElem=a;}
function bp(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function uo(){}
_=uo.prototype=new eo();_.tN=mO+'DOMImplStandard';_.tI=52;function lo(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function mo(c,b){var a=b.button;if(a==0){return 1;}else if(a==1){return 4;}return a|| -1;}
function oo(a){Eo(a);no(a);}
function no(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function po(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function qo(b,a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function so(c,b,a){bp(c,b,a);ro(c,b,a);}
function ro(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function to(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function fo(){}
_=fo.prototype=new uo();_.tN=mO+'DOMImplMozilla';_.tI=53;function io(e,a){var d=$doc.defaultView.getComputedStyle(a,null);var b=$doc.getBoxObjectFor(a).x-Math.round(d.getPropertyCSSValue('border-left-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var c=a.parentNode;while(c){if(c.scrollLeft>0){b-=c.scrollLeft;}c=c.parentNode;}return b+$doc.body.scrollLeft+$doc.documentElement.scrollLeft;}
function jo(d,a){var c=$doc.defaultView.getComputedStyle(a,null);var e=$doc.getBoxObjectFor(a).y-Math.round(c.getPropertyCSSValue('border-top-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var b=a.parentNode;while(b){if(b.scrollTop>0){e-=b.scrollTop;}b=b.parentNode;}return e+$doc.body.scrollTop+$doc.documentElement.scrollTop;}
function go(){}
_=go.prototype=new fo();_.tN=mO+'DOMImplMozillaOld';_.tI=54;function kq(a){Bm(a);}
function cq(){}
_=cq.prototype=new mG();_.tN=mO+'HistoryImpl';_.tI=55;function iq(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;kq(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function gq(){}
_=gq.prototype=new cq();_.tN=mO+'HistoryImplStandard';_.tI=56;function fq(d,a){if(a==null||a.length==0){var c=$wnd.location.href;var b=c.indexOf('#');if(b!= -1)c=c.substring(0,b);$wnd.location=c+'#';}else{$wnd.location.hash=encodeURIComponent(a);}}
function dq(){}
_=dq.prototype=new gq();_.tN=mO+'HistoryImplMozilla';_.tI=57;function lB(b,a){EB(b.sb(),a,true);}
function nB(a){return cl(a.lb());}
function oB(a){return dl(a.lb());}
function pB(a){return hl(a.q,'offsetHeight');}
function qB(a){return hl(a.q,'offsetWidth');}
function rB(b,a){EB(b.sb(),a,false);}
function sB(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function tB(b,a){if(b.q!==null){sB(b,b.q,a);}b.q=a;}
function uB(b,c,a){if(c>=0){b.fd(c+'px');}if(a>=0){b.bd(a+'px');}}
function vB(b,a){DB(b.sb(),a);}
function wB(b,a){am(b.lb(),a|jl(b.lb()));}
function xB(){return this.q;}
function yB(){return pB(this);}
function zB(){return qB(this);}
function AB(){return this.q;}
function BB(a){return il(a,'className');}
function CB(a){Fl(this.q,'height',a);}
function DB(a,b){Bl(a,'className',b);}
function EB(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw tG(new rG(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=kH(j);if(gH(j)==0){throw eF(new dF(),'Style names cannot be empty');}i=BB(c);e=dH(i,j);while(e!=(-1)){if(e==0||FG(i,e-1)==32){f=e+gH(j);g=gH(i);if(f==g||f<g&&FG(i,f)==32){break;}}e=eH(i,j,e+1);}if(a){if(e==(-1)){if(gH(i)>0){i+=' ';}Bl(c,'className',i+j);}}else{if(e!=(-1)){b=kH(jH(i,0,e));d=kH(iH(i,e+gH(j)));if(gH(b)==0){h=d;}else if(gH(d)==0){h=b;}else{h=b+' '+d;}Bl(c,'className',h);}}}
function FB(a,b){a.style.display=b?'':'none';}
function aC(a){FB(this.q,a);}
function bC(a){Fl(this.q,'width',a);}
function cC(){if(this.q===null){return '(null handle)';}return bm(this.q);}
function kB(){}
_=kB.prototype=new mG();_.lb=xB;_.qb=yB;_.rb=zB;_.sb=AB;_.bd=CB;_.dd=aC;_.fd=bC;_.tS=cC;_.tN=nO+'UIObject';_.tI=58;_.q=null;function CC(a){if(!a.zb()){throw iF(new gF(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.yc();}finally{a.bb();Cl(a.lb(),null);a.o=false;}}
function DC(a){if(ri(a.p,26)){qi(a.p,26).Ec(a);}else if(a.p!==null){throw iF(new gF(),"This widget's parent does not implement HasWidgets");}}
function EC(b,a){if(b.zb()){Cl(b.lb(),null);}tB(b,a);if(b.zb()){Cl(a,b);}}
function FC(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.zb()){c.gc();}c.p=null;}else{if(a!==null){throw iF(new gF(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.zb()){c.cc();}}}
function aD(){}
function bD(){}
function cD(){return this.o;}
function dD(){if(this.zb()){throw iF(new gF(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;Cl(this.lb(),this);this.ab();this.nc();}
function eD(a){}
function fD(){CC(this);}
function gD(){}
function hD(){}
function iD(a){EC(this,a);}
function lC(){}
_=lC.prototype=new kB();_.ab=aD;_.bb=bD;_.zb=cD;_.cc=dD;_.ec=eD;_.gc=fD;_.nc=gD;_.yc=hD;_.ad=iD;_.tN=nO+'Widget';_.tI=59;_.o=false;_.p=null;function tx(b,a){FC(a,b);}
function vx(b,a){FC(a,null);}
function wx(){var a,b;for(b=this.Ab();b.yb();){a=qi(b.ac(),14);a.cc();}}
function xx(){var a,b;for(b=this.Ab();b.yb();){a=qi(b.ac(),14);a.gc();}}
function yx(){}
function zx(){}
function sx(){}
_=sx.prototype=new lC();_.ab=wx;_.bb=xx;_.nc=yx;_.yc=zx;_.tN=nO+'Panel';_.tI=60;function nr(a){a.f=sC(new mC(),a);}
function or(a){nr(a);return a;}
function pr(c,a,b){DC(a);tC(c.f,a);dk(b,a.lb());tx(c,a);}
function qr(d,b,a){var c;sr(d,a);if(b.p===d){c=ur(d,b);if(c<a){a--;}}return a;}
function rr(b,a){if(a<0||a>=b.f.b){throw lF(new kF());}}
function sr(b,a){if(a<0||a>b.f.b){throw lF(new kF());}}
function vr(b,a){return vC(b.f,a);}
function ur(b,a){return wC(b.f,a);}
function wr(e,b,c,a,d){a=qr(e,b,a);DC(b);xC(e.f,b,a);if(d){pl(c,b.lb(),a);}else{dk(c,b.lb());}tx(e,b);}
function xr(a){return yC(a.f);}
function yr(b,c){var a;if(c.p!==b){return false;}vx(b,c);a=c.lb();tl(ml(a),a);AC(b.f,c);return true;}
function zr(){return xr(this);}
function Ar(a){return yr(this,a);}
function mr(){}
_=mr.prototype=new sx();_.Ab=zr;_.Ec=Ar;_.tN=nO+'ComplexPanel';_.tI=61;function mq(a){or(a);a.ad(gk());Fl(a.lb(),'position','relative');Fl(a.lb(),'overflow','hidden');return a;}
function nq(a,b){pr(a,b,a.lb());}
function oq(b,d,a,c){DC(d);rq(b,d,a,c);nq(b,d);}
function qq(b,c){var a;a=yr(b,c);if(a){sq(c.lb());}return a;}
function rq(c,e,b,d){var a;a=e.lb();if(b==(-1)&&d==(-1)){sq(a);}else{Fl(a,'position','absolute');Fl(a,'left',b+'px');Fl(a,'top',d+'px');}}
function sq(a){Fl(a,'left','');Fl(a,'top','');Fl(a,'position','');}
function tq(a){return qq(this,a);}
function lq(){}
_=lq.prototype=new mr();_.Ec=tq;_.tN=nO+'AbsolutePanel';_.tI=62;function ot(){ot=eO;sD(),uD;}
function mt(b,a){sD(),uD;pt(b,a);return b;}
function nt(b,a){if(b.c===null){b.c=ir(new hr());}rK(b.c,a);}
function pt(b,a){EC(b,a);wB(b,7041);}
function qt(a){switch(Fk(a)){case 1:if(this.c!==null){kr(this.c,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function rt(a){pt(this,a);}
function lt(){}
_=lt.prototype=new lC();_.ec=qt;_.ad=rt;_.tN=nO+'FocusWidget';_.tI=63;_.c=null;function wq(){wq=eO;sD(),uD;}
function vq(b,a){sD(),uD;mt(b,a);return b;}
function uq(){}
_=uq.prototype=new lt();_.tN=nO+'ButtonBase';_.tI=64;function yq(a){or(a);a.e=ok();a.d=lk();dk(a.e,a.d);a.ad(a.e);return a;}
function Aq(c,d,a){var b;b=ml(d.lb());Bl(b,'height',a);}
function Bq(c,b,a){Bl(b,'align',a.a);}
function Cq(c,b,a){Fl(b,'verticalAlign',a.a);}
function Dq(b,c,d){var a;a=ml(c.lb());Bl(a,'width',d);}
function xq(){}
_=xq.prototype=new mr();_.tN=nO+'CellPanel';_.tI=65;_.d=null;_.e=null;function ar(){ar=eO;sD(),uD;}
function Fq(b,a){var c;sD(),uD;vq(b,kk());b.a=a;b.b=jk();am(b.a,jl(b.lb()));am(b.lb(),0);dk(b.lb(),b.a);dk(b.lb(),b.b);c='check'+ ++gr;Bl(b.a,'id',c);Bl(b.b,'htmlFor',c);return b;}
function br(b){var a;a=b.zb()?'checked':'defaultChecked';return gl(b.a,a);}
function cr(b,a){zl(b.a,'checked',a);zl(b.a,'defaultChecked',a);}
function dr(b,a){El(b.b,a);}
function er(){Cl(this.a,this);}
function fr(){Cl(this.a,null);cr(this,br(this));}
function Eq(){}
_=Eq.prototype=new uq();_.nc=er;_.yc=fr;_.tN=nO+'CheckBox';_.tI=66;_.a=null;_.b=null;var gr=0;function ir(a){pK(a);return a;}
function kr(d,c){var a,b;for(a=zI(d);oI(a);){b=qi(pI(a),22);b.fc(c);}}
function hr(){}
_=hr.prototype=new nK();_.tN=nO+'ClickListenerCollection';_.tI=67;function Dr(a,b){if(a.d!==null){throw iF(new gF(),'Composite.initWidget() may only be called once.');}DC(b);a.ad(b.lb());a.d=b;FC(b,a);}
function Er(){if(this.d===null){throw iF(new gF(),'initWidget() was never called in '+jh(this));}return this.q;}
function Fr(){if(this.d!==null){return this.d.zb();}return false;}
function as(){this.d.cc();this.nc();}
function bs(){try{this.yc();}finally{this.d.gc();}}
function Br(){}
_=Br.prototype=new lC();_.lb=Er;_.zb=Fr;_.cc=as;_.gc=bs;_.tN=nO+'Composite';_.tI=68;_.d=null;function ds(a){or(a);a.ad(gk());return a;}
function fs(b,c){var a;a=c.lb();Fl(a,'width','100%');Fl(a,'height','100%');c.dd(false);}
function gs(b,c,a){wr(b,c,b.lb(),a,true);fs(b,c);}
function hs(b,c){var a;a=yr(b,c);if(a){is(b,c);if(b.b===c){b.b=null;}}return a;}
function is(a,b){Fl(b.lb(),'width','');Fl(b.lb(),'height','');b.dd(true);}
function js(b,a){rr(b,a);if(b.b!==null){b.b.dd(false);}b.b=vr(b,a);b.b.dd(true);}
function ks(a){return hs(this,a);}
function cs(){}
_=cs.prototype=new mr();_.Ec=ks;_.tN=nO+'DeckPanel';_.tI=69;_.b=null;function nz(a){oz(a,gk());return a;}
function oz(b,a){b.ad(a);return b;}
function pz(a,b){if(a.n!==null){throw iF(new gF(),'SimplePanel can only contain one child widget');}a.ed(b);}
function rz(a,b){if(b===a.n){return;}if(b!==null){DC(b);}if(a.n!==null){a.Ec(a.n);}a.n=b;if(b!==null){dk(a.hb(),a.n.lb());tx(a,b);}}
function sz(){return this.lb();}
function tz(){return jz(new hz(),this);}
function uz(a){if(this.n!==a){return false;}vx(this,a);tl(this.hb(),a.lb());this.n=null;return true;}
function vz(a){rz(this,a);}
function gz(){}
_=gz.prototype=new sx();_.hb=sz;_.Ab=tz;_.Ec=uz;_.ed=vz;_.tN=nO+'SimplePanel';_.tI=70;_.n=null;function ay(){ay=eO;py=BD(new wD());}
function Bx(a){ay();oz(a,DD(py));gy(a,0,0);return a;}
function Cx(b,a){ay();Bx(b);b.g=a;return b;}
function Dx(c,a,b){ay();Cx(c,a);c.k=b;return c;}
function Ex(b,a){if(a.blur){a.blur();}}
function Fx(c){var a,b,d;a=c.l;if(!a){hy(c,false);ky(c);}b=ui((An()-cy(c))/2);d=ui((zn()-by(c))/2);gy(c,Bn()+b,Cn()+d);if(!a){hy(c,true);}}
function by(a){return pB(a);}
function cy(a){return qB(a);}
function dy(b,a){if(!b.l){return;}b.l=false;qq(cz(),b);b.lb();}
function ey(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.bd(a.h);}if(a.i!==null){b.fd(a.i);}}}
function fy(e,b){var a,c,d,f;d=Dk(b);c=ql(e.lb(),d);f=Fk(b);switch(f){case 128:{a=(si(Ak(b)),Cw(b),true);return a&&(c|| !e.k);}case 512:{a=(si(Ak(b)),Cw(b),true);return a&&(c|| !e.k);}case 256:{a=(si(Ak(b)),Cw(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((bk(),vl)!==null){return true;}if(!c&&e.g&&f==4){dy(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){Ex(e,d);return false;}}}return !e.k||c;}
function gy(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.lb();Fl(a,'left',b+'px');Fl(a,'top',d+'px');}
function hy(a,b){Fl(a.lb(),'visibility',b?'visible':'hidden');a.lb();}
function iy(a,b){rz(a,b);ey(a);}
function jy(a,b){a.i=b;ey(a);if(gH(b)==0){a.i=null;}}
function ky(a){if(a.l){return;}a.l=true;ck(a);Fl(a.lb(),'position','absolute');if(a.m!=(-1)){gy(a,a.j,a.m);}nq(cz(),a);a.lb();}
function ly(){return ED(py,this.lb());}
function my(){return by(this);}
function ny(){return cy(this);}
function oy(){return ED(py,this.lb());}
function qy(){ul(this);CC(this);}
function ry(a){return fy(this,a);}
function sy(a){this.h=a;ey(this);if(gH(a)==0){this.h=null;}}
function ty(a){hy(this,a);}
function uy(a){iy(this,a);}
function vy(a){jy(this,a);}
function Ax(){}
_=Ax.prototype=new gz();_.hb=ly;_.qb=my;_.rb=ny;_.sb=oy;_.gc=qy;_.lc=ry;_.bd=sy;_.dd=ty;_.ed=uy;_.fd=vy;_.tN=nO+'PopupPanel';_.tI=71;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var py;function ps(){ps=eO;ay();}
function ms(a){a.a=nv(new st());a.f=Es(new As());}
function ns(b,a){ps();os(b,a,true);return b;}
function os(c,a,b){ps();Dx(c,a,b);ms(c);jv(c.f,0,0,c.a);c.f.bd('100%');ev(c.f,0);gv(c.f,0);hv(c.f,0);cu(c.f.b,1,0,'100%');fu(c.f.b,1,0,'100%');bu(c.f.b,1,0,(yv(),zv),(aw(),cw));iy(c,c.f);vB(c,'gwt-DialogBox');vB(c.a,'Caption');bx(c.a,c);return c;}
function qs(b,a){rv(b.a,a);}
function rs(a){if(Fk(a)==4){if(ql(this.a.lb(),Dk(a))){al(a);}}return fy(this,a);}
function ss(a,b,c){this.e=true;xl(this.a.lb());this.c=b;this.d=c;}
function ts(a){}
function us(a){}
function vs(c,d,e){var a,b;if(this.e){a=d+nB(this);b=e+oB(this);gy(this,a-this.c,b-this.d);}}
function ws(a,b,c){this.e=false;sl(this.a.lb());}
function xs(a){if(this.b!==a){return false;}dv(this.f,a);return true;}
function ys(a){if(this.b!==null){dv(this.f,this.b);}if(a!==null){jv(this.f,1,0,a);}this.b=a;}
function zs(a){jy(this,a);this.f.fd('100%');}
function ls(){}
_=ls.prototype=new Ax();_.lc=rs;_.oc=ss;_.pc=ts;_.qc=us;_.rc=vs;_.sc=ws;_.Ec=xs;_.ed=ys;_.fd=zs;_.tN=nO+'DialogBox';_.tI=72;_.b=null;_.c=0;_.d=0;_.e=false;function zu(a){a.e=pu(new ku());}
function Au(a){zu(a);a.d=ok();a.a=lk();dk(a.d,a.a);a.ad(a.d);wB(a,1);return a;}
function Bu(c,a){var b;b=bt(c);if(a>=b||a<0){throw mF(new kF(),'Row index: '+a+', Row size: '+b);}}
function Cu(e,c,b,a){var d;d=au(e.b,c,b);cv(e,d,a);return d;}
function Eu(c,b,a){return b.rows[a].cells.length;}
function Fu(a){return av(a,a.a);}
function av(b,a){return a.rows.length;}
function bv(b,a){var c;if(a!=bt(b)){Bu(b,a);}c=nk();pl(b.a,c,a);return a;}
function cv(d,c,a){var b,e;b=kl(c);e=null;if(b!==null){e=ru(d.e,b);}if(e!==null){dv(d,e);return true;}else{if(a){Dl(c,'');}return false;}}
function dv(b,c){var a;if(c.p!==b){return false;}vx(b,c);a=c.lb();tl(ml(a),a);uu(b.e,a);return true;}
function ev(a,b){Bl(a.d,'border',''+b);}
function fv(b,a){b.b=a;}
function gv(b,a){Al(b.d,'cellPadding',a);}
function hv(b,a){Al(b.d,'cellSpacing',a);}
function iv(b,a){b.c=a;ju(b.c);}
function jv(d,b,a,e){var c;dt(d,b,a);if(e!==null){DC(e);c=Cu(d,b,a,true);su(d.e,e);dk(c,e.lb());tx(d,e);}}
function kv(){return vu(this.e);}
function lv(a){switch(Fk(a)){case 1:{break;}default:}}
function mv(a){return dv(this,a);}
function tt(){}
_=tt.prototype=new sx();_.Ab=kv;_.ec=lv;_.Ec=mv;_.tN=nO+'HTMLTable';_.tI=73;_.a=null;_.b=null;_.c=null;_.d=null;function Es(a){Au(a);fv(a,Cs(new Bs(),a));iv(a,hu(new gu(),a));return a;}
function at(b,a){Bu(b,a);return Eu(b,b.a,a);}
function bt(a){return Fu(a);}
function ct(b,a){return bv(b,a);}
function dt(e,d,b){var a,c;et(e,d);if(b<0){throw mF(new kF(),'Cannot create a column with a negative index: '+b);}a=at(e,d);c=b+1-a;if(c>0){ft(e.a,d,c);}}
function et(d,b){var a,c;if(b<0){throw mF(new kF(),'Cannot create a row with a negative index: '+b);}c=bt(d);for(a=c;a<=b;a++){ct(d,a);}}
function ft(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function As(){}
_=As.prototype=new tt();_.tN=nO+'FlexTable';_.tI=74;function Dt(b,a){b.a=a;return b;}
function Ft(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function au(c,b,a){return Ft(c,c.a.a,b,a);}
function bu(d,c,a,b,e){du(d,c,a,b);eu(d,c,a,e);}
function cu(e,d,a,c){var b;dt(e.a,d,a);b=Ft(e,e.a.a,d,a);Bl(b,'height',c);}
function du(e,d,b,a){var c;dt(e.a,d,b);c=Ft(e,e.a.a,d,b);Bl(c,'align',a.a);}
function eu(d,c,b,a){dt(d.a,c,b);Fl(Ft(d,d.a.a,c,b),'verticalAlign',a.a);}
function fu(c,b,a,d){dt(c.a,b,a);Bl(Ft(c,c.a.a,b,a),'width',d);}
function Ct(){}
_=Ct.prototype=new mG();_.tN=nO+'HTMLTable$CellFormatter';_.tI=75;function Cs(b,a){Dt(b,a);return b;}
function Bs(){}
_=Bs.prototype=new Ct();_.tN=nO+'FlexTable$FlexCellFormatter';_.tI=76;function ht(a){or(a);a.ad(gk());return a;}
function it(a,b){pr(a,b,a.lb());}
function kt(b,c,a){wr(b,c,b.lb(),a,true);}
function gt(){}
_=gt.prototype=new mr();_.tN=nO+'FlowPanel';_.tI=77;function Ew(a){a.ad(gk());wB(a,131197);vB(a,'gwt-Label');return a;}
function Fw(b,a){Ew(b);fx(b,a);return b;}
function ax(b,a){if(b.b===null){b.b=ir(new hr());}rK(b.b,a);}
function bx(b,a){if(b.c===null){b.c=jx(new ix());}rK(b.c,a);}
function dx(a){return ll(a.lb());}
function ex(b,a){switch(Fk(a)){case 1:if(b.b!==null){kr(b.b,b);}break;case 4:case 8:case 64:case 16:case 32:if(b.c!==null){nx(b.c,b,a);}break;case 131072:break;}}
function fx(b,a){El(b.lb(),a);}
function gx(a,b){Fl(a.lb(),'whiteSpace',b?'normal':'nowrap');}
function hx(a){ex(this,a);}
function Dw(){}
_=Dw.prototype=new lC();_.ec=hx;_.tN=nO+'Label';_.tI=78;_.b=null;_.c=null;function nv(a){Ew(a);a.ad(gk());wB(a,125);vB(a,'gwt-HTML');return a;}
function ov(b,a){nv(b);rv(b,a);return b;}
function pv(b,a,c){ov(b,a);gx(b,c);return b;}
function rv(b,a){Dl(b.lb(),a);}
function st(){}
_=st.prototype=new Dw();_.tN=nO+'HTML';_.tI=79;function vt(a){{yt(a);}}
function wt(b,a){b.b=a;vt(b);return b;}
function yt(a){while(++a.a<a.b.b.b){if(wK(a.b.b,a.a)!==null){return;}}}
function zt(a){return a.a<a.b.b.b;}
function At(){return zt(this);}
function Bt(){var a;if(!zt(this)){throw aO(new FN());}a=wK(this.b.b,this.a);yt(this);return a;}
function ut(){}
_=ut.prototype=new mG();_.yb=At;_.ac=Bt;_.tN=nO+'HTMLTable$1';_.tI=80;_.a=(-1);function hu(b,a){b.b=a;return b;}
function ju(a){if(a.a===null){a.a=hk('colgroup');pl(a.b.d,a.a,0);dk(a.a,hk('col'));}}
function gu(){}
_=gu.prototype=new mG();_.tN=nO+'HTMLTable$ColumnFormatter';_.tI=81;_.a=null;function ou(a){a.b=pK(new nK());}
function pu(a){ou(a);return a;}
function ru(c,a){var b;b=xu(a);if(b<0){return null;}return qi(wK(c.b,b),14);}
function su(b,c){var a;if(b.a===null){a=b.b.b;rK(b.b,c);}else{a=b.a.a;CK(b.b,a,c);b.a=b.a.b;}yu(c.lb(),a);}
function tu(c,a,b){wu(a);CK(c.b,b,null);c.a=mu(new lu(),b,c.a);}
function uu(c,a){var b;b=xu(a);tu(c,a,b);}
function vu(a){return wt(new ut(),a);}
function wu(a){a['__widgetID']=null;}
function xu(a){var b=a['__widgetID'];return b==null?-1:b;}
function yu(a,b){a['__widgetID']=b;}
function ku(){}
_=ku.prototype=new mG();_.tN=nO+'HTMLTable$WidgetMapper';_.tI=82;_.a=null;function mu(c,a,b){c.a=a;c.b=b;return c;}
function lu(){}
_=lu.prototype=new mG();_.tN=nO+'HTMLTable$WidgetMapper$FreeNode';_.tI=83;_.a=0;_.b=null;function yv(){yv=eO;zv=wv(new vv(),'center');Av=wv(new vv(),'left');wv(new vv(),'right');}
var zv,Av;function wv(b,a){b.a=a;return b;}
function vv(){}
_=vv.prototype=new mG();_.tN=nO+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=84;_.a=null;function aw(){aw=eO;bw=Ev(new Dv(),'bottom');cw=Ev(new Dv(),'middle');dw=Ev(new Dv(),'top');}
var bw,cw,dw;function Ev(a,b){a.a=b;return a;}
function Dv(){}
_=Dv.prototype=new mG();_.tN=nO+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=85;_.a=null;function hw(a){a.a=(yv(),Av);a.c=(aw(),dw);}
function iw(a){yq(a);hw(a);a.b=nk();dk(a.d,a.b);Bl(a.e,'cellSpacing','0');Bl(a.e,'cellPadding','0');return a;}
function jw(b,c){var a;a=lw(b);dk(b.b,a);pr(b,c,a);}
function lw(b){var a;a=mk();Bq(b,a,b.a);Cq(b,a,b.c);return a;}
function mw(c,d,a){var b;sr(c,a);b=lw(c);pl(c.b,b,a);wr(c,d,b,a,false);}
function nw(c,d){var a,b;b=ml(d.lb());a=yr(c,d);if(a){tl(c.b,b);}return a;}
function ow(b,a){b.c=a;}
function pw(a){return nw(this,a);}
function gw(){}
_=gw.prototype=new xq();_.Ec=pw;_.tN=nO+'HorizontalPanel';_.tI=86;_.b=null;function rw(a){a.ad(gk());dk(a.lb(),a.a=fk());wB(a,1);vB(a,'gwt-Hyperlink');return a;}
function sw(c,b,a){rw(c);xw(c,b);ww(c,a);return c;}
function tw(b,a){if(b.b===null){b.b=ir(new hr());}rK(b.b,a);}
function vw(a){return ll(a.a);}
function ww(b,a){b.c=a;Bl(b.a,'href','#'+a);}
function xw(b,a){El(b.a,a);}
function yw(a){if(Fk(a)==1){if(this.b!==null){kr(this.b,this);}Am(this.c);al(a);}}
function qw(){}
_=qw.prototype=new lC();_.ec=yw;_.tN=nO+'Hyperlink';_.tI=87;_.a=null;_.b=null;_.c=null;function Cw(a){return (Ck(a)?1:0)|(Bk(a)?8:0)|(yk(a)?2:0)|(uk(a)?4:0);}
function jx(a){pK(a);return a;}
function lx(d,c,e,f){var a,b;for(a=zI(d);oI(a);){b=qi(pI(a),23);b.oc(c,e,f);}}
function mx(d,c){var a,b;for(a=zI(d);oI(a);){b=qi(pI(a),23);b.pc(c);}}
function nx(e,c,a){var b,d,f,g,h;d=c.lb();g=wk(a)-cl(d)+hl(d,'scrollLeft')+Bn();h=xk(a)-dl(d)+hl(d,'scrollTop')+Cn();switch(Fk(a)){case 4:lx(e,c,g,h);break;case 8:qx(e,c,g,h);break;case 64:px(e,c,g,h);break;case 16:b=zk(a);if(!ql(d,b)){mx(e,c);}break;case 32:f=Ek(a);if(!ql(d,f)){ox(e,c);}break;}}
function ox(d,c){var a,b;for(a=zI(d);oI(a);){b=qi(pI(a),23);b.qc(c);}}
function px(d,c,e,f){var a,b;for(a=zI(d);oI(a);){b=qi(pI(a),23);b.rc(c,e,f);}}
function qx(d,c,e,f){var a,b;for(a=zI(d);oI(a);){b=qi(pI(a),23);b.sc(c,e,f);}}
function ix(){}
_=ix.prototype=new nK();_.tN=nO+'MouseListenerCollection';_.tI=88;function zy(){zy=eO;sD(),uD;}
function xy(b,a){sD(),uD;Fq(b,ik(a));vB(b,'gwt-RadioButton');return b;}
function yy(c,b,a){sD(),uD;xy(c,b);dr(c,a);return c;}
function wy(){}
_=wy.prototype=new Eq();_.tN=nO+'RadioButton';_.tI=89;function az(){az=eO;fz=wM(new AL());}
function Fy(b,a){az();mq(b);if(a===null){a=bz();}b.ad(a);b.cc();return b;}
function cz(){az();return dz(null);}
function dz(c){az();var a,b;b=qi(CM(fz,c),24);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=fl(c))){return null;}}if(fz.c==0){ez();}DM(fz,c,b=Fy(new Ay(),a));return b;}
function bz(){az();return $doc.body;}
function ez(){az();rn(new By());}
function Ay(){}
_=Ay.prototype=new lq();_.tN=nO+'RootPanel';_.tI=90;var fz;function Dy(){var a,b;for(b=tJ(bK((az(),fz)));AJ(b);){a=qi(BJ(b),24);if(a.zb()){a.gc();}}}
function Ey(){return null;}
function By(){}
_=By.prototype=new mG();_.zc=Dy;_.Ac=Ey;_.tN=nO+'RootPanel$1';_.tI=91;function iz(a){a.a=a.b.n!==null;}
function jz(b,a){b.b=a;iz(b);return b;}
function lz(){return this.a;}
function mz(){if(!this.a||this.b.n===null){throw aO(new FN());}this.a=false;return this.b.n;}
function hz(){}
_=hz.prototype=new mG();_.yb=lz;_.ac=mz;_.tN=nO+'SimplePanel$1';_.tI=92;function Fz(a){a.a=iw(new gw());}
function aA(c){var a,b;Fz(c);Dr(c,c.a);wB(c,1);vB(c,'gwt-TabBar');ow(c.a,(aw(),bw));a=pv(new st(),'&nbsp;',true);b=pv(new st(),'&nbsp;',true);vB(a,'gwt-TabBarFirst');vB(b,'gwt-TabBarRest');a.bd('100%');b.bd('100%');jw(c.a,a);jw(c.a,b);a.bd('100%');Aq(c.a,a,'100%');Dq(c.a,b,'100%');return c;}
function bA(b,a){if(b.c===null){b.c=mA(new lA());}rK(b.c,a);}
function cA(b,a){if(a<0||a>fA(b)){throw lF(new kF());}}
function dA(b,a){if(a<(-1)||a>=fA(b)){throw lF(new kF());}}
function fA(a){return a.a.f.b-2;}
function gA(e,d,a,b){var c;cA(e,b);if(a){c=ov(new st(),d);}else{c=Fw(new Dw(),d);}gx(c,false);ax(c,e);vB(c,'gwt-TabBarItem');mw(e.a,c,b+1);}
function hA(b,a){var c;dA(b,a);c=vr(b.a,a+1);if(c===b.b){b.b=null;}nw(b.a,c);}
function iA(b,a){dA(b,a);if(b.c!==null){if(!oA(b.c,b,a)){return false;}}jA(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=vr(b.a,a+1);jA(b,b.b,true);if(b.c!==null){pA(b.c,b,a);}return true;}
function jA(c,a,b){if(a!==null){if(b){lB(a,'gwt-TabBarItem-selected');}else{rB(a,'gwt-TabBarItem-selected');}}}
function kA(b){var a;for(a=1;a<this.a.f.b-1;++a){if(vr(this.a,a)===b){iA(this,a-1);return;}}}
function Ez(){}
_=Ez.prototype=new Br();_.fc=kA;_.tN=nO+'TabBar';_.tI=93;_.b=null;_.c=null;function mA(a){pK(a);return a;}
function oA(e,c,d){var a,b;for(a=zI(e);oI(a);){b=qi(pI(a),25);if(!b.dc(c,d)){return false;}}return true;}
function pA(e,c,d){var a,b;for(a=zI(e);oI(a);){b=qi(pI(a),25);b.xc(c,d);}}
function lA(){}
_=lA.prototype=new nK();_.tN=nO+'TabListenerCollection';_.tI=94;function DA(a){a.b=zA(new yA());a.a=tA(new sA(),a.b);}
function EA(b){var a;DA(b);a=fC(new dC());gC(a,b.b);gC(a,b.a);Aq(a,b.a,'100%');b.b.fd('100%');bA(b.b,b);Dr(b,a);vB(b,'gwt-TabPanel');vB(b.a,'gwt-TabPanelBottom');return b;}
function aB(b,c,a){dB(b,c,a,b.a.f.b);}
function FA(b,a){if(b.c===null){b.c=mA(new lA());}rK(b.c,a);}
function cB(b,a){return vr(b.a,a);}
function eB(d,e,c,a,b){vA(d.a,e,c,a,b);}
function dB(c,d,b,a){eB(c,d,b,false,a);}
function fB(b,a){iA(b.b,a);}
function gB(){return xr(this.a);}
function hB(a,b){if(this.c!==null){return oA(this.c,this,b);}return true;}
function iB(a,b){js(this.a,b);if(this.c!==null){pA(this.c,this,b);}}
function jB(a){return wA(this.a,a);}
function rA(){}
_=rA.prototype=new Br();_.Ab=gB;_.dc=hB;_.xc=iB;_.Ec=jB;_.tN=nO+'TabPanel';_.tI=95;_.c=null;function tA(b,a){ds(b);b.a=a;return b;}
function vA(e,f,d,a,b){var c;c=ur(e,f);if(c!=(-1)){wA(e,f);if(c<b){b--;}}BA(e.a,d,a,b);gs(e,f,b);}
function wA(b,c){var a;a=ur(b,c);if(a!=(-1)){CA(b.a,a);return hs(b,c);}return false;}
function xA(a){return wA(this,a);}
function sA(){}
_=sA.prototype=new cs();_.Ec=xA;_.tN=nO+'TabPanel$TabbedDeckPanel';_.tI=96;_.a=null;function zA(a){aA(a);return a;}
function BA(d,c,a,b){gA(d,c,a,b);}
function CA(b,a){hA(b,a);}
function yA(){}
_=yA.prototype=new Ez();_.tN=nO+'TabPanel$UnmodifiableTabBar';_.tI=97;function eC(a){a.a=(yv(),Av);a.b=(aw(),dw);}
function fC(a){yq(a);eC(a);Bl(a.e,'cellSpacing','0');Bl(a.e,'cellPadding','0');return a;}
function gC(b,d){var a,c;c=nk();a=iC(b);dk(c,a);dk(b.d,c);pr(b,d,a);}
function iC(b){var a;a=mk();Bq(b,a,b.a);Cq(b,a,b.b);return a;}
function jC(c,e,a){var b,d;sr(c,a);d=nk();b=iC(c);dk(d,b);pl(c.d,d,a);wr(c,e,b,a,false);}
function kC(c){var a,b;b=ml(c.lb());a=yr(this,c);if(a){tl(this.d,ml(b));}return a;}
function dC(){}
_=dC.prototype=new xq();_.Ec=kC;_.tN=nO+'VerticalPanel';_.tI=98;function sC(b,a){b.a=ki('[Lcom.google.gwt.user.client.ui.Widget;',[175],[14],[4],null);return b;}
function tC(a,b){xC(a,b,a.b);}
function vC(b,a){if(a<0||a>=b.b){throw lF(new kF());}return b.a[a];}
function wC(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function xC(d,e,a){var b,c;if(a<0||a>d.b){throw lF(new kF());}if(d.b==d.a.a){c=ki('[Lcom.google.gwt.user.client.ui.Widget;',[175],[14],[d.a.a*2],null);for(b=0;b<d.a.a;++b){mi(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){mi(d.a,b,d.a[b-1]);}mi(d.a,a,e);}
function yC(a){return oC(new nC(),a);}
function zC(c,b){var a;if(b<0||b>=c.b){throw lF(new kF());}--c.b;for(a=b;a<c.b;++a){mi(c.a,a,c.a[a+1]);}mi(c.a,c.b,null);}
function AC(b,c){var a;a=wC(b,c);if(a==(-1)){throw aO(new FN());}zC(b,a);}
function mC(){}
_=mC.prototype=new mG();_.tN=nO+'WidgetCollection';_.tI=99;_.a=null;_.b=0;function oC(b,a){b.b=a;return b;}
function qC(){return this.a<this.b.b-1;}
function rC(){if(this.a>=this.b.b){throw aO(new FN());}return this.b.a[++this.a];}
function nC(){}
_=nC.prototype=new mG();_.yb=qC;_.ac=rC;_.tN=nO+'WidgetCollection$WidgetIterator';_.tI=100;_.a=(-1);function sD(){sD=eO;tD=mD(new kD());uD=tD!==null?rD(new jD()):tD;}
function rD(a){sD();return a;}
function jD(){}
_=jD.prototype=new mG();_.tN=oO+'FocusImpl';_.tI=101;var tD,uD;function nD(){nD=eO;sD();}
function lD(a){oD(a);pD(a);qD(a);}
function mD(a){nD();rD(a);lD(a);return a;}
function oD(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function pD(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function qD(a){return function(){this.firstChild.focus();};}
function kD(){}
_=kD.prototype=new jD();_.tN=oO+'FocusImplOld';_.tI=102;function vD(){}
_=vD.prototype=new mG();_.tN=oO+'PopupImpl';_.tI=103;function CD(){CD=eO;FD=aE();}
function BD(a){CD();return a;}
function DD(b){var a;a=gk();if(FD){Dl(a,'<div><\/div>');gm(yD(new xD(),b,a));}return a;}
function ED(b,a){return FD?kl(a):a;}
function aE(){CD();if(navigator.userAgent.indexOf('Macintosh')!= -1){return true;}return false;}
function wD(){}
_=wD.prototype=new vD();_.tN=oO+'PopupImplMozilla';_.tI=104;var FD;function yD(b,a,c){b.a=c;return b;}
function AD(){Fl(this.a,'overflow','auto');}
function xD(){}
_=xD.prototype=new mG();_.db=AD;_.tN=oO+'PopupImplMozilla$1';_.tI=105;function fE(){}
_=fE.prototype=new mG();_.tN=pO+'OutputStream';_.tI=106;function dE(){}
_=dE.prototype=new fE();_.tN=pO+'FilterOutputStream';_.tI=107;function hE(){}
_=hE.prototype=new dE();_.tN=pO+'PrintStream';_.tI=108;function lE(){lE=eO;uG();}
function kE(a){lE();sG(a);return a;}
function jE(){}
_=jE.prototype=new rG();_.tN=qO+'ArrayStoreException';_.tI=109;function oE(){oE=eO;pE=nE(new mE(),false);qE=nE(new mE(),true);}
function nE(a,b){oE();a.a=b;return a;}
function rE(a){return ri(a,30)&&qi(a,30).a==this.a;}
function sE(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function tE(){return this.a?'true':'false';}
function uE(a){oE();return a?qE:pE;}
function mE(){}
_=mE.prototype=new mG();_.eQ=rE;_.hC=sE;_.tS=tE;_.tN=qO+'Boolean';_.tI=110;_.a=false;var pE,qE;function yE(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+AF(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function CE(){CE=eO;uG();}
function AE(a){CE();sG(a);return a;}
function BE(b,a){CE();tG(b,a);return b;}
function zE(){}
_=zE.prototype=new rG();_.tN=qO+'ClassCastException';_.tI=111;function fF(){fF=eO;uG();}
function eF(b,a){fF();tG(b,a);return b;}
function dF(){}
_=dF.prototype=new rG();_.tN=qO+'IllegalArgumentException';_.tI=112;function jF(){jF=eO;uG();}
function hF(a){jF();sG(a);return a;}
function iF(b,a){jF();tG(b,a);return b;}
function gF(){}
_=gF.prototype=new rG();_.tN=qO+'IllegalStateException';_.tI=113;function nF(){nF=eO;uG();}
function lF(a){nF();sG(a);return a;}
function mF(b,a){nF();tG(b,a);return b;}
function kF(){}
_=kF.prototype=new rG();_.tN=qO+'IndexOutOfBoundsException';_.tI=114;function gG(){gG=eO;{lG();}}
function hG(a){gG();return isNaN(a);}
function iG(e,d,c,h){gG();var a,b,f,g;if(e===null){throw eG(new dG(),'Unable to parse null');}b=gH(e);f=b>0&&FG(e,0)==45?1:0;for(a=f;a<b;a++){if(yE(FG(e,a),d)==(-1)){throw eG(new dG(),'Could not parse '+e+' in radix '+d);}}g=jG(e,d);if(hG(g)){throw eG(new dG(),'Unable to parse '+e);}else if(g<c||g>h){throw eG(new dG(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function jG(b,a){gG();return parseInt(b,a);}
function lG(){gG();kG=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var kG=null;function pF(){pF=eO;gG();}
function sF(a){pF();return tF(a,10);}
function tF(b,a){pF();return ti(iG(b,a,(-2147483648),2147483647));}
function uF(a){pF();return sH(a);}
var qF=2147483647,rF=(-2147483648);function xF(a){return a<0?-a:a;}
function yF(a){return a<0?-a:a;}
function zF(a,b){return a>b?a:b;}
function AF(a,b){return a<b?a:b;}
function BF(a){return Math.sqrt(a);}
function EF(){EF=eO;uG();}
function DF(a){EF();sG(a);return a;}
function CF(){}
_=CF.prototype=new rG();_.tN=qO+'NegativeArraySizeException';_.tI=115;function bG(){bG=eO;uG();}
function aG(b,a){bG();tG(b,a);return b;}
function FF(){}
_=FF.prototype=new rG();_.tN=qO+'NullPointerException';_.tI=116;function fG(){fG=eO;fF();}
function eG(b,a){fG();eF(b,a);return b;}
function dG(){}
_=dG.prototype=new dF();_.tN=qO+'NumberFormatException';_.tI=117;function FG(b,a){return b.charCodeAt(a);}
function bH(f,c){var a,b,d,e,g,h;h=gH(f);e=gH(c);b=AF(h,e);for(a=0;a<b;a++){g=FG(f,a);d=FG(c,a);if(g!=d){return g-d;}}return h-e;}
function cH(b,a){if(!ri(a,1))return false;return lH(b,a);}
function dH(b,a){return b.indexOf(a);}
function eH(c,b,a){return c.indexOf(b,a);}
function fH(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function gH(a){return a.length;}
function hH(c,a,b){b=mH(b);return c.replace(RegExp(a,'g'),b);}
function iH(b,a){return b.substr(a,b.length-a);}
function jH(c,a,b){return c.substr(a,b-a);}
function kH(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function lH(a,b){return String(a)==b;}
function mH(b){var a;a=0;while(0<=(a=eH(b,'\\',a))){if(FG(b,a+1)==36){b=jH(b,0,a)+'$'+iH(b,++a);}else{b=jH(b,0,a)+iH(b,++a);}}return b;}
function nH(a){if(ri(a,1)){return bH(this,qi(a,1));}else{throw BE(new zE(),'Cannot compare '+a+" with String '"+this+"'");}}
function oH(a){return cH(this,a);}
function qH(){var a=pH;if(!a){a=pH={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function rH(){return this;}
function sH(a){return ''+a;}
function tH(a){return a!==null?a.tS():'null';}
_=String.prototype;_.v=nH;_.eQ=oH;_.hC=qH;_.tS=rH;_.tN=qO+'String';_.tI=2;var pH=null;function xG(a){zG(a);return a;}
function yG(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function zG(a){AG(a,'');}
function AG(b,a){b.js=[a];b.length=a.length;}
function CG(a){a.bc();return a.js[0];}
function DG(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function EG(){return CG(this);}
function wG(){}
_=wG.prototype=new mG();_.bc=DG;_.tS=EG;_.tN=qO+'StringBuffer';_.tI=118;function vH(){vH=eO;xH=new hE();}
function wH(){vH();return new Date().getTime();}
function yH(a){vH();return ph(a);}
var xH;function dI(){dI=eO;uG();}
function cI(b,a){dI();tG(b,a);return b;}
function bI(){}
_=bI.prototype=new rG();_.tN=qO+'UnsupportedOperationException';_.tI=119;function mI(b,a){b.c=a;return b;}
function oI(a){return a.a<a.c.gd();}
function pI(a){if(!oI(a)){throw aO(new FN());}return a.c.wb(a.b=a.a++);}
function qI(a){if(a.b<0){throw hF(new gF());}a.c.Dc(a.b);a.a=a.b;a.b=(-1);}
function rI(){return oI(this);}
function sI(){return pI(this);}
function tI(){qI(this);}
function lI(){}
_=lI.prototype=new mG();_.yb=rI;_.ac=sI;_.Cc=tI;_.tN=rO+'AbstractList$IteratorImpl';_.tI=120;_.a=0;_.b=(-1);function vI(b,a){mI(b,a);return b;}
function uI(){}
_=uI.prototype=new lI();_.tN=rO+'AbstractList$ListIteratorImpl';_.tI=121;function FJ(f,d,e){var a,b,c;for(b=rM(f.cb());jM(b);){a=kM(b);c=a.ob();if(d===null?c===null:d.eQ(c)){if(e){lM(b);}return a;}}return null;}
function aK(b){var a;a=b.cb();return dJ(new cJ(),b,a);}
function bK(b){var a;a=BM(b);return rJ(new qJ(),b,a);}
function cK(a){return FJ(this,a,false)!==null;}
function dK(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ri(d,32)){return false;}f=qi(d,32);c=aK(this);e=f.Bb();if(!kK(c,e)){return false;}for(a=fJ(c);mJ(a);){b=nJ(a);h=this.xb(b);g=f.xb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function eK(b){var a;a=FJ(this,b,false);return a===null?null:a.ub();}
function fK(){var a,b,c;b=0;for(c=rM(this.cb());jM(c);){a=kM(c);b+=a.hC();}return b;}
function gK(){return aK(this);}
function hK(){var a,b,c,d;d='{';a=false;for(c=rM(this.cb());jM(c);){b=kM(c);if(a){d+=', ';}else{a=true;}d+=tH(b.ob());d+='=';d+=tH(b.ub());}return d+'}';}
function bJ(){}
_=bJ.prototype=new mG();_.B=cK;_.eQ=dK;_.xb=eK;_.hC=fK;_.Bb=gK;_.tS=hK;_.tN=rO+'AbstractMap';_.tI=122;function kK(e,b){var a,c,d;if(b===e){return true;}if(!ri(b,33)){return false;}c=qi(b,33);if(c.gd()!=e.gd()){return false;}for(a=c.Ab();a.yb();){d=a.ac();if(!e.C(d)){return false;}}return true;}
function lK(a){return kK(this,a);}
function mK(){var a,b,c;a=0;for(b=this.Ab();b.yb();){c=b.ac();if(c!==null){a+=c.hC();}}return a;}
function iK(){}
_=iK.prototype=new eI();_.eQ=lK;_.hC=mK;_.tN=rO+'AbstractSet';_.tI=123;function dJ(b,a,c){b.a=a;b.b=c;return b;}
function fJ(b){var a;a=rM(b.b);return kJ(new jJ(),b,a);}
function gJ(a){return this.a.B(a);}
function hJ(){return fJ(this);}
function iJ(){return this.b.a.c;}
function cJ(){}
_=cJ.prototype=new iK();_.C=gJ;_.Ab=hJ;_.gd=iJ;_.tN=rO+'AbstractMap$1';_.tI=124;function kJ(b,a,c){b.a=c;return b;}
function mJ(a){return a.a.yb();}
function nJ(b){var a;a=b.a.ac();return a.ob();}
function oJ(){return mJ(this);}
function pJ(){return nJ(this);}
function jJ(){}
_=jJ.prototype=new mG();_.yb=oJ;_.ac=pJ;_.tN=rO+'AbstractMap$2';_.tI=125;function rJ(b,a,c){b.a=a;b.b=c;return b;}
function tJ(b){var a;a=rM(b.b);return yJ(new xJ(),b,a);}
function uJ(a){return AM(this.a,a);}
function vJ(){return tJ(this);}
function wJ(){return this.b.a.c;}
function qJ(){}
_=qJ.prototype=new eI();_.C=uJ;_.Ab=vJ;_.gd=wJ;_.tN=rO+'AbstractMap$3';_.tI=126;function yJ(b,a,c){b.a=c;return b;}
function AJ(a){return a.a.yb();}
function BJ(a){var b;b=a.a.ac().ub();return b;}
function CJ(){return AJ(this);}
function DJ(){return BJ(this);}
function xJ(){}
_=xJ.prototype=new mG();_.yb=CJ;_.ac=DJ;_.tN=rO+'AbstractMap$4';_.tI=127;function lL(b){var a,c;a=pK(new nK());for(c=0;c<b.a;c++){rK(a,b[c]);}return a;}
function mL(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.w(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function nL(a){mL(a,a.a,(uL(),vL));}
function uL(){uL=eO;vL=new rL();}
var vL;function tL(a,b){return qi(a,38).v(b);}
function rL(){}
_=rL.prototype=new mG();_.w=tL;_.tN=rO+'Comparators$1';_.tI=128;function yM(){yM=eO;FM=fN();}
function vM(a){{xM(a);}}
function wM(a){yM();vM(a);return a;}
function xM(a){a.a=zh();a.d=Ah();a.b=yi(FM,vh);a.c=0;}
function zM(b,a){if(ri(a,1)){return jN(b.d,qi(a,1))!==FM;}else if(a===null){return b.b!==FM;}else{return iN(b.a,a,a.hC())!==FM;}}
function AM(a,b){if(a.b!==FM&&hN(a.b,b)){return true;}else if(eN(a.d,b)){return true;}else if(cN(a.a,b)){return true;}return false;}
function BM(a){return oM(new fM(),a);}
function CM(c,a){var b;if(ri(a,1)){b=jN(c.d,qi(a,1));}else if(a===null){b=c.b;}else{b=iN(c.a,a,a.hC());}return b===FM?null:b;}
function DM(c,a,d){var b;if(ri(a,1)){b=mN(c.d,qi(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=lN(c.a,a,d,a.hC());}if(b===FM){++c.c;return null;}else{return b;}}
function EM(c,a){var b;if(ri(a,1)){b=oN(c.d,qi(a,1));}else if(a===null){b=c.b;c.b=yi(FM,vh);}else{b=nN(c.a,a,a.hC());}if(b===FM){return null;}else{--c.c;return b;}}
function aN(e,c){yM();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function bN(d,a){yM();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=EL(c.substring(1),e);a.s(b);}}}
function cN(f,h){yM();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ub();if(hN(h,d)){return true;}}}}return false;}
function dN(a){return zM(this,a);}
function eN(c,d){yM();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(hN(d,a)){return true;}}}return false;}
function fN(){yM();}
function gN(){return BM(this);}
function hN(a,b){yM();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function kN(a){return CM(this,a);}
function iN(f,h,e){yM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ob();if(hN(h,d)){return c.ub();}}}}
function jN(b,a){yM();return b[':'+a];}
function lN(f,h,j,e){yM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ob();if(hN(h,d)){var i=c.ub();c.cd(j);return i;}}}else{a=f[e]=[];}var c=EL(h,j);a.push(c);}
function mN(c,a,d){yM();a=':'+a;var b=c[a];c[a]=d;return b;}
function nN(f,h,e){yM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ob();if(hN(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.ub();}}}}
function oN(c,a){yM();a=':'+a;var b=c[a];delete c[a];return b;}
function AL(){}
_=AL.prototype=new bJ();_.B=dN;_.cb=gN;_.xb=kN;_.tN=rO+'HashMap';_.tI=129;_.a=null;_.b=null;_.c=0;_.d=null;var FM;function CL(b,a,c){b.a=a;b.b=c;return b;}
function EL(a,b){return CL(new BL(),a,b);}
function FL(b){var a;if(ri(b,39)){a=qi(b,39);if(hN(this.a,a.ob())&&hN(this.b,a.ub())){return true;}}return false;}
function aM(){return this.a;}
function bM(){return this.b;}
function cM(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function dM(a){var b;b=this.b;this.b=a;return b;}
function eM(){return this.a+'='+this.b;}
function BL(){}
_=BL.prototype=new mG();_.eQ=FL;_.ob=aM;_.ub=bM;_.hC=cM;_.cd=dM;_.tS=eM;_.tN=rO+'HashMap$EntryImpl';_.tI=130;_.a=null;_.b=null;function oM(b,a){b.a=a;return b;}
function qM(d,c){var a,b,e;if(ri(c,39)){a=qi(c,39);b=a.ob();if(zM(d.a,b)){e=CM(d.a,b);return hN(a.ub(),e);}}return false;}
function rM(a){return hM(new gM(),a.a);}
function sM(a){return qM(this,a);}
function tM(){return rM(this);}
function uM(){return this.a.c;}
function fM(){}
_=fM.prototype=new iK();_.C=sM;_.Ab=tM;_.gd=uM;_.tN=rO+'HashMap$EntrySet';_.tI=131;function hM(c,b){var a;c.c=b;a=pK(new nK());if(c.c.b!==(yM(),FM)){rK(a,CL(new BL(),null,c.c.b));}bN(c.c.d,a);aN(c.c.a,a);c.a=zI(a);return c;}
function jM(a){return oI(a.a);}
function kM(a){return a.b=qi(pI(a.a),39);}
function lM(a){if(a.b===null){throw iF(new gF(),'Must call next() before remove().');}else{qI(a.a);EM(a.c,a.b.ob());a.b=null;}}
function mM(){return jM(this);}
function nM(){return kM(this);}
function gM(){}
_=gM.prototype=new mG();_.yb=mM;_.ac=nM;_.tN=rO+'HashMap$EntrySetIterator';_.tI=132;_.a=null;_.b=null;function qN(a){a.a=wM(new AL());return a;}
function rN(c,a){var b;b=DM(c.a,a,uE(true));return b===null;}
function tN(a){return fJ(aK(a.a));}
function uN(b,a){return EM(b.a,a)!==null;}
function vN(a){return rN(this,a);}
function wN(a){return zM(this.a,a);}
function xN(){return tN(this);}
function yN(){return this.a.c;}
function zN(){return aK(this.a).tS();}
function pN(){}
_=pN.prototype=new iK();_.s=vN;_.C=wN;_.Ab=xN;_.gd=yN;_.tS=zN;_.tN=rO+'HashSet';_.tI=133;_.a=null;function bO(){bO=eO;uG();}
function aO(a){bO();sG(a);return a;}
function FN(){}
_=FN.prototype=new rG();_.tN=rO+'NoSuchElementException';_.tI=134;function zO(){}
_=zO.prototype=new mG();_.tN=sO+'BezierCurve';_.tI=135;function BO(a){{aP(a);}}
function CO(a){BO(a);return a;}
function FO(i,d,e,a,b){var c,f,g,h,j;h=FQ(new EQ(),AF(d.a,e.a),AF(d.b,e.b));j=xF(d.a-e.a);c=xF(d.b-e.b);g=zF(j,c);g=zF(g,xF(d.a-a.a));g=zF(g,xF(d.b-a.b));g=zF(g,xF(e.a-b.a));g=zF(g,xF(e.b-b.b));f=FQ(new EQ(),h.a-g,h.b-g);Fl(i.a,'left',uF(f.a));Fl(i.a,'top',uF(f.b));yl(i.a,'width',uF(j+g*2));yl(i.a,'height',uF(c+g*2));Fl(i.a,'width',uF(j+g*2));Fl(i.a,'height',uF(c+g*2));EO(i,cR(d,eR(f)),cR(e,eR(f)),cR(a,eR(f)),cR(b,eR(f)),bP(i.a,'color'));}
function EO(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function aP(b){var a;b.a=hk('canvas');a=el(b.a,'class');yl(b.a,'class',a+' gwt-diagrams-canvas');}
function bP(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function AO(){}
_=AO.prototype=new zO();_.tN=sO+'BezierCurveCanvas';_.tI=136;_.a=null;function eP(a){a.c=pK(new nK());}
function fP(c,d){var a,b;eP(c);qK(c.c,d);lP(c,c.D());for(b=zI(c.c);oI(b);){a=qi(pI(b),35);a.z(c);}return c;}
function gP(a,b){fP(a,lL(b));return a;}
function iP(a){return a.b.u(a.c);}
function jP(c,a){var b;b=xK(c.c,a);if(b>(-1)){BK(c.c,a);jR(a,c);}}
function kP(c){var a,b;for(b=AI(c.c);b.yb();){a=qi(b.ac(),35);b.Cc();a.F(c);}DC(c);}
function lP(b,a){b.b=a;}
function mP(a){a.id(iP(a));}
function nP(){kP(this);}
function oP(){mP(this);}
function dP(){}
_=dP.prototype=new lC();_.Cc=nP;_.hd=oP;_.tN=tO+'AbstractConnection';_.tI=137;_.b=null;function qP(a){a.a=CO(new AO());}
function sP(a,b){gP(a,b);qP(a);if(b.a!=2){throw eF(new dF(),'Need exactly two connectors to connect');}a.ad(a.a.a);lB(a,'gwt-diagrams-connection');return a;}
function rP(c,a,b){sP(c,li('[Lpl.balon.gwt.diagrams.client.connector.Connector;',172,35,[a,b]));return c;}
function uP(){return new gQ();}
function vP(){return this.a.a;}
function wP(){kP(this);}
function xP(b){var a;if(!ri(b,40)){throw eF(new dF(),'Expected BezierConnectionData');}a=qi(b,40);if(a.b.b!=2){throw eF(new dF(),'Expected two connection points');}if(a.a.b!=2){throw eF(new dF(),'Expected two control points');}FO(this.a,qi(wK(a.b,0),34),qi(wK(a.b,1),34),qi(wK(a.a,0),34),qi(wK(a.a,1),34));}
function pP(){}
_=pP.prototype=new dP();_.D=uP;_.lb=vP;_.Cc=wP;_.id=xP;_.tN=tO+'BezierTwoEndedConnection';_.tI=138;function AP(a){a.a=pK(new nK());}
function CP(a,b){gP(a,b);AP(a);if(b.a!=2){throw eF(new dF(),'Need exactly two connectors to connect');}a.ad(gk());lB(a,'gwt-diagrams-connection');return a;}
function BP(c,a,b){CP(c,li('[Lpl.balon.gwt.diagrams.client.connector.Connector;',172,35,[a,b]));return c;}
function EP(d,a){var b,c;for(c=d.a.b;c<a;c++){b=gk();rK(d.a,yi(b,im));dk(d.lb(),b);Dl(b,'&nbsp;');}while(d.a.b>a){b=qi(wK(d.a,0),19);BK(d.a,yi(b,im));tl(d.lb(),b);}}
function FP(){return new lQ();}
function aQ(a){var b,c,d,e,f;if(a.b.b<=1){throw eF(new dF(),'Too few connection points');}EP(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=qi(wK(this.a,d),19);e=qi(wK(a.b,d),34);c=qi(wK(a.b,d+1),34);f='gwt-diagrams-line';yl(b,'style','');Bl(b,'className',f);Fl(b,'height','1');Fl(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Fl(b,'height',uF(xF(e.b-c.b)));}else if(e.b==c.b){Fl(b,'width',uF(xF(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Fl(b,'left',uF(AF(e.a,c.a)));Fl(b,'top',uF(AF(e.b,c.b)));Bl(b,'className',f);}}
function zP(){}
_=zP.prototype=new dP();_.D=FP;_.id=aQ;_.tN=tO+'RectilinearTwoEndedConnection';_.tI=139;function cQ(c,a,b){rP(c,a,b);return c;}
function eQ(){return new rQ();}
function fQ(a){if(a.b.b!=2){throw eF(new dF(),'Expected two connection points');}FO(this.a,qi(wK(a.b,0),34),qi(wK(a.b,1),34),qi(wK(a.b,1),34),qi(wK(a.b,0),34));}
function bQ(){}
_=bQ.prototype=new pP();_.D=eQ;_.id=fQ;_.tN=tO+'StraightTwoEndedConnection';_.tI=140;function iQ(j,d,e){var a,b,c,f,g,h,i;f=d.ib();g=e.ib();c=ki('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[174],[37],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=bR(d.fb(f[h]),e.fb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function jQ(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw eF(new dF(),'Unsupported connectors count');}c=qi(wK(e,0),35);d=qi(wK(e,1),35);f=iQ(this,c,d);h=c.Bc(f[0]);i=d.Bc(f[1]);a=dR(h,f[0],50);b=dR(i,f[1],50);g=xQ(new uQ(),li('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',170,34,[h,i]),li('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',170,34,[a,b]));return g;}
function gQ(){}
_=gQ.prototype=new mG();_.u=jQ;_.tN=uO+'BezierConnectionCalculator';_.tI=141;function mQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(uR(),xR);}if(c==1&&d>0){return a!==(uR(),yR);}if(c==0&&d<0){return a!==(uR(),yR);}if(c==1&&d<0){return a!==(uR(),xR);}}else{if(c==0&&d>0){return a!==(uR(),zR);}if(c==1&&d>0){return a!==(uR(),wR);}if(c==0&&d<0){return a!==(uR(),wR);}if(c==1&&d<0){return a!==(uR(),zR);}}return false;}
function oQ(j,d,e){var a,b,c,f,g,h,i;f=d.ib();g=e.ib();c=ki('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[174],[37],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=bR(d.fb(f[h]),e.fb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function pQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(uR(),yR);}if(c==1&&d>0){return a===(uR(),xR);}if(c==0&&d<0){return a===(uR(),xR);}if(c==1&&d<0){return a===(uR(),yR);}}else{if(c==0&&d>0){return a===(uR(),wR);}if(c==1&&d>0){return a===(uR(),zR);}if(c==0&&d<0){return a===(uR(),zR);}if(c==1&&d<0){return a===(uR(),wR);}}return false;}
function qQ(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw eF(new dF(),'Unsupported connectors count');}a=qi(wK(c,0),35);b=qi(wK(c,1),35);d=BQ(new zQ());e=oQ(this,a,b);i=a.Bc(e[0]);j=dR(i,e[0],10);k=b.Bc(e[1]);l=dR(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(pQ(this,e[0],0,f,true)&&pQ(this,e[1],1,f,true)){g=dR(j,e[0],xF(ui(f/2)));h=FQ(new EQ(),g.a,l.b);}else if(pQ(this,e[0],0,m,false)&&pQ(this,e[1],1,m,false)){g=dR(j,e[0],xF(ui(m/2)));h=FQ(new EQ(),l.a,g.b);}else if(pQ(this,e[0],0,f,true)&&pQ(this,e[1],1,m,false)){g=dR(j,e[0],xF(f));h=dR(l,e[1],xF(m));}else if(pQ(this,e[0],0,m,false)&&pQ(this,e[1],1,f,true)){g=dR(j,e[0],xF(m));h=dR(l,e[1],xF(f));}else if(pQ(this,e[0],0,f,true)&&mQ(this,e[1],1,f,true)){g=dR(j,e[0],xF(ui(f/2)));h=FQ(new EQ(),g.a,l.b);}else if(mQ(this,e[0],0,f,true)&&pQ(this,e[1],1,f,true)){h=dR(l,e[1],xF(ui(f/2)));g=FQ(new EQ(),h.a,j.b);}else if(pQ(this,e[0],0,m,false)&&mQ(this,e[1],1,m,false)){g=dR(j,e[0],xF(ui(m/2)));h=FQ(new EQ(),l.a,g.b);}else if(mQ(this,e[0],0,m,false)&&pQ(this,e[1],1,m,false)){h=dR(l,e[1],xF(ui(m/2)));g=FQ(new EQ(),j.a,h.b);}else if(mQ(this,e[0],0,f,true)&&mQ(this,e[1],1,f,true)){g=dR(j,(uR(),yR),ui(f/2));h=FQ(new EQ(),g.a,l.b);}else if(mQ(this,e[0],0,m,false)&&mQ(this,e[1],1,m,false)){g=dR(j,(uR(),wR),ui(m/2));h=FQ(new EQ(),l.a,g.b);}else if(mQ(this,e[0],0,f,true)&&mQ(this,e[1],1,m,false)){g=dR(j,(uR(),yR),f);}else if(mQ(this,e[0],0,m,false)&&mQ(this,e[1],1,f,true)){g=dR(j,(uR(),wR),m);}rK(d.b,i);rK(d.b,j);if(g!==null){rK(d.b,g);}if(h!==null){rK(d.b,h);}rK(d.b,l);rK(d.b,k);return d;}
function lQ(){}
_=lQ.prototype=new mG();_.u=qQ;_.tN=uO+'FullRectilinearTwoEndedCalculator';_.tI=142;function tQ(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw eF(new dF(),'Unsupported connectors count');}a=qi(wK(e,0),35);b=qi(wK(e,1),35);f=BQ(new zQ());c=FQ(new EQ(),a.pb()+ui(a.vb()/2),a.tb()+ui(a.mb()/2));d=FQ(new EQ(),b.pb()+ui(b.vb()/2),b.tb()+ui(b.mb()/2));g=FQ(new EQ(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=ui(a.mb()/2);h=g.b!=0?ui(j*g.a/xF(g.b)):2147483647;j*= -k;if(xF(h)>ui(a.vb()/2)){h=ui(a.vb()/2);j=g.a!=0?ui(h*g.b/xF(g.a)):2147483647;h*= -i;}rK(f.b,FQ(new EQ(),c.a+h,c.b+j));j=ui(b.mb()/2);h=g.b!=0?ui(j*g.a/xF(g.b)):2147483647;j*=k;h= -h;if(xF(h)>ui(b.vb()/2)){h=ui(b.vb()/2);j=g.a!=0?ui(h*g.b/xF(g.a)):2147483647;h*=i;j= -j;}rK(f.b,FQ(new EQ(),d.a+h,d.b+j));return f;}
function rQ(){}
_=rQ.prototype=new mG();_.u=tQ;_.tN=uO+'StraightCenterConnectionDataCalculator';_.tI=143;function AQ(a){a.b=pK(new nK());}
function BQ(a){AQ(a);return a;}
function CQ(b,a){AQ(b);qK(b.b,a);return b;}
function zQ(){}
_=zQ.prototype=new mG();_.tN=vO+'ConnectionData';_.tI=144;function vQ(a){a.a=pK(new nK());}
function wQ(c,b,a){CQ(c,b);vQ(c);qK(c.a,a);return c;}
function xQ(c,b,a){wQ(c,lL(b),lL(a));return c;}
function uQ(){}
_=uQ.prototype=new zQ();_.tN=vO+'BezierConnectionData';_.tI=145;function FQ(b,a,c){b.a=a;b.b=c;return b;}
function bR(b,a){return BF((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function dR(c,a,b){if(a===(uR(),wR)){return FQ(new EQ(),c.a,c.b+b);}else if(a===(uR(),zR)){return FQ(new EQ(),c.a,c.b-b);}else if(a===(uR(),xR)){return FQ(new EQ(),c.a-b,c.b);}else if(a===(uR(),yR)){return FQ(new EQ(),c.a+b,c.b);}else{throw hF(new gF());}}
function cR(a,b){return FQ(new EQ(),a.a+b.a,a.b+b.b);}
function eR(a){return FQ(new EQ(),-a.a,-a.b);}
function EQ(){}
_=EQ.prototype=new mG();_.tN=vO+'Point';_.tI=146;_.a=0;_.b=0;function gR(a){a.c=qN(new pN());}
function hR(a){gR(a);return a;}
function jR(b,a){if(uN(b.c,a)){jP(a,b);}}
function kR(b,a){return dR(FQ(new EQ(),b.pb()+ui(b.vb()/2),b.tb()+ui(b.mb()/2)),a,vR(a)?ui(b.vb()/2):ui(b.mb()/2));}
function lR(c){var a,b;for(b=tN(c.c);mJ(b);){a=qi(nJ(b),41);a.hd();}}
function mR(a){rN(this.c,a);}
function nR(a){jR(this,a);}
function oR(a){return kR(this,a);}
function pR(){return AR();}
function qR(a){return kR(this,a);}
function fR(){}
_=fR.prototype=new mG();_.z=mR;_.F=nR;_.fb=oR;_.ib=pR;_.Bc=qR;_.tN=wO+'AbstractConnector';_.tI=147;function uR(){uR=eO;zR=tR(new sR(),'UP');wR=tR(new sR(),'DOWN');xR=tR(new sR(),'LEFT');yR=tR(new sR(),'RIGHT');}
function tR(b,a){uR();b.a=a;return b;}
function vR(a){return a===xR||a===yR;}
function AR(){uR();return li('[Lpl.balon.gwt.diagrams.client.connector.Direction;',174,37,[zR,wR,xR,yR]);}
function BR(){return this.a;}
function sR(){}
_=sR.prototype=new mG();_.tS=BR;_.tN=wO+'Direction';_.tI=148;_.a=null;var wR,xR,yR,zR;function cS(){cS=eO;kS=wM(new AL());}
function bS(a,b){cS();hR(a);a.b=b;return a;}
function dS(){return this.b.qb();}
function eS(){var a,b;a=0;b=ml(this.b.lb());while(b!==null){if(cH('relative',nl(b,'position'))){a=cl(b);break;}b=ml(b);}return nB(this.b)-a;}
function fS(){var a,b;a=0;b=ml(this.b.lb());while(b!==null){if(cH('relative',nl(b,'position'))){a=dl(b);break;}b=ml(b);}return oB(this.b)-a;}
function gS(){return this.b.rb();}
function hS(a){cS();return qi(CM(kS,a),42);}
function iS(b){cS();var a;if(zM(kS,b)){return qi(CM(kS,b),42);}else{a=bS(new CR(),b);DM(kS,b,a);return a;}}
function jS(c,b){cS();var a;if(zM(kS,c)){return qi(CM(kS,c),42);}else{a=ER(new DR(),c,b);DM(kS,c,a);return a;}}
function CR(){}
_=CR.prototype=new fR();_.mb=dS;_.pb=eS;_.tb=fS;_.vb=gS;_.tN=wO+'UIObjectConnector';_.tI=149;_.b=null;var kS;function FR(){FR=eO;cS();}
function ER(b,a,c){FR();b.a=c;bS(b,a);return b;}
function aS(){return this.a;}
function DR(){}
_=DR.prototype=new CR();_.ib=aS;_.tN=wO+'UIObjectConnector$1';_.tI=150;function uS(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function vS(a){lh(new mS());gm(qS(new pS(),a));}
function lS(){}
_=lS.prototype=new mG();_.tN=xO+'BaseExamplesEntryPoint';_.tI=151;function oS(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=EH(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=ns(new ls(),true);Fl(a.lb(),'backgroundColor','#ABCDEF');vH(),xH;d=hH(d,' ','&nbsp;');qs(a,'<pre>'+d+'<\/pre>');Fx(a);}
function mS(){}
_=mS.prototype=new mG();_.tN=xO+'BaseExamplesEntryPoint$1';_.tI=152;function qS(b,a){b.a=a;return b;}
function sS(){DS(this.a);}
function pS(){}
_=pS.prototype=new mG();_.db=sS;_.tN=xO+'BaseExamplesEntryPoint$2';_.tI=153;function DS(c){var a,b;b=EA(new rA());nq(dz('tabs'),b);aB(b,gV(new fV()),'Rectilinear');aB(b,ET(new DT()),'Bezier');aB(b,kV(new jV()),'Straight');aB(b,yU(new bU()),'Diagram builder');FA(b,yS(new xS(),c,b));a=uS(c,'tab');if(a===null||cH('',a)){a='0';}fB(b,sF(a));}
function wS(){}
_=wS.prototype=new lS();_.tN=xO+'GwtDiagramsExample';_.tI=154;function yS(b,a,c){b.a=c;return b;}
function AS(a,b){return true;}
function BS(b,c){var a;a=qi(cB(this.a,c),43);vT(a);}
function xS(){}
_=xS.prototype=new mG();_.dc=AS;_.xc=BS;_.tN=xO+'GwtDiagramsExample$1';_.tI=155;function zT(a){a.i=mq(new lq());}
function AT(a){var b;nz(a);zT(a);lB(a,'gwt-diagrams-example');b=fC(new dC());pz(a,b);gC(b,a.i);gC(b,CT(a,uT(a)));return a;}
function CT(e,d){var a,b,c;a=ht(new gt());lB(a,'gwt-diagrams-sources-panel');for(b=zI(d);oI(b);){c=qi(pI(b),14);it(a,c);}return a;}
function yT(){}
_=yT.prototype=new gz();_.tN=yO+'AbstractExample';_.tI=156;function nT(a){a.g=pK(new nK());}
function oT(a){AT(a);nT(a);a.h=sT(a);Fl(a.i.lb(),'width','450px');Fl(a.i.lb(),'height','350px');a.E();return a;}
function pT(b,a){nq(b.i,a);rK(b.g,a);}
function rT(e,d,c,f,a){var b;b=Fw(new Dw(),d);lB(b,'example-connector');oq(e.i,b,c,f);cT(e.h,b);if(a!==null){return jS(b,li('[Lpl.balon.gwt.diagrams.client.connector.Direction;',174,37,[a]));}return iS(b);}
function sT(b){var a;a=aT(new FS(),b.i,true,b);return a;}
function tT(b,a){BK(b.g,a);}
function uT(f){var a,b,c,d,e;e=pK(new nK());b=fH(jh(f),46);a=iH(jh(f),b+1);rK(e,sw(new qw(),a+'.java',''));rK(e,sw(new qw(),'AbstractExample.java',''));rK(e,sw(new qw(),'AbstractConnectionsExample.java',''));for(d=zI(e);oI(d);){c=qi(pI(d),44);lB(c,'gwt-diagrams-source-link');tw(c,kT(new jT(),f,c));}return e;}
function vT(c){var a,b;for(b=zI(c.g);oI(b);){a=qi(pI(b),41);a.hd();}}
function wT(a){pT(this,a);}
function xT(){var a,b,c,d,e,f,g,h;a=rT(this,'all',50,50,null);b=rT(this,'all',100,100,null);this.A(a,b);c=rT(this,'up',250,50,(uR(),zR));d=rT(this,'down',300,100,(uR(),wR));this.A(c,d);e=rT(this,'left',50,200,(uR(),xR));f=rT(this,'right',100,250,(uR(),yR));this.A(e,f);g=rT(this,'left',250,200,(uR(),xR));h=rT(this,'left',300,250,(uR(),xR));this.A(g,h);}
function ES(){}
_=ES.prototype=new yT();_.t=wT;_.E=xT;_.tN=yO+'AbstractConnectionsExample';_.tI=157;_.h=null;function bT(){bT=eO;ad();}
function aT(d,a,b,c){bT();Fc(d,a,b);return d;}
function cT(a,b){A(a,b);Fl(b.lb(),'position','absolute');Fl(b.lb(),'zIndex','100');}
function dT(a){cT(this,a);}
function eT(b,a){return gT(new fT(),b,a,this);}
function FS(){}
_=FS.prototype=new Ec();_.Db=dT;_.Fb=eT;_.tN=yO+'AbstractConnectionsExample$1';_.tI=158;function hT(){hT=eO;se();}
function gT(d,a,b,c){hT();re(d,a,b);return d;}
function iT(d,c,b){var a;od(this,d,c,b);a=hS(c);if(a!==null){lR(a);}}
function fT(){}
_=fT.prototype=new qe();_.tc=iT;_.tN=yO+'AbstractConnectionsExample$2';_.tI=159;function kT(b,a,c){b.a=c;return b;}
function mT(a){bo('../source/'+vw(this.a),'','');}
function jT(){}
_=jT.prototype=new mG();_.fc=mT;_.tN=yO+'AbstractConnectionsExample$3';_.tI=160;function ET(a){oT(a);return a;}
function aU(a,b){this.t(rP(new pP(),a,b));}
function DT(){}
_=DT.prototype=new ES();_.A=aU;_.tN=yO+'BezierExample';_.tI=161;function xU(a){a.c=pK(new nK());}
function yU(a){oT(a);xU(a);return a;}
function zU(b,a){pT(b,a);mP(a);}
function BU(c,a,b){if(cH('rectilinear',c.d)){zU(c,BP(new zP(),a,b));}else if(cH('bezier',c.d)){zU(c,rP(new pP(),a,b));}else if(cH('straight',c.d)){zU(c,cQ(new bQ(),a,b));}}
function CU(e,d,c){var a,b;b=pU(new oU(),dx(d),e);uB(b,d.rb(),d.qb());lB(b,'example-connector');oq(c,b,nB(d)-nB(c),oB(d)-oB(c));cT(e.h,b);a=null;if(cH('T',dx(b))){a=(uR(),zR);}else if(cH('L',dx(b))){a=(uR(),xR);}else if(cH('B',dx(b))){a=(uR(),wR);}else if(cH('R',dx(b))){a=(uR(),yR);}if(a!==null){return jS(b,li('[Lpl.balon.gwt.diagrams.client.connector.Direction;',174,37,[a]));}return iS(b);}
function DU(c,a){var b;b=Fw(new Dw(),a);lB(b,'helpEntry');jw(c.a,b);}
function EU(d,c,a){var b;b=yy(new wy(),'style',c);lB(b,'style-option');cr(b,a);if(a){bV(d,c);}jw(d.e,b);nt(b,lU(new kU(),d,c));return b;}
function FU(d,a,c){var b;b=Fw(new Dw(),a);vB(b,'toolbox-node');lB(b,c);jw(d.e,b);d.f.Db(b);return b;}
function aV(d,e){var a,b,c,f;if(zK(d.c)){lB(e,'selected-connector');b=hS(e).c;for(c=tN(b);mJ(c);){a=qi(nJ(c),41);a.Cc();tT(d,a);}rK(d.c,e);}else if(vK(d.c,e)){rB(e,'selected-connector');BK(d.c,e);}else if(d.c.b==1){f=qi(wK(d.c,0),14);rB(e,'selected-connector');rB(f,'selected-connector');b=hS(e).c;for(c=tN(b);mJ(c);){a=qi(nJ(c),41);a.Cc();tT(d,a);}BU(d,hS(f),hS(e));tK(d.c);}}
function bV(b,a){b.d=a;}
function cV(a){zU(this,a);}
function dV(a,b){BU(this,a,b);}
function eV(){var a,b,c;a=Fc(new Ec(),this.i,true);b=jd(new id(),this.i);this.f=uU(new sU(),b,a,this);this.e=iw(new gw());vB(this.e,'toolbox');this.b=mq(new lq());this.a=iw(new gw());vB(this.a,'helpPanel');c=fC(new dC());vB(c,'builder');gC(c,this.a);gC(c,this.e);gC(c,this.b);nq(this.i,c);FU(this,'A','all');FU(this,'L','left');FU(this,'R','right');FU(this,'T','top');FU(this,'B','bottom');EU(this,'rectilinear',true);EU(this,'bezier',false);EU(this,'straight',false);DU(this,'drag&drop from toolbar to add');DU(this,'CTRL+click to select/connect');DU(this,'DEL to delete selected');ck(hU(new gU(),this));}
function bU(){}
_=bU.prototype=new ES();_.t=cV;_.A=dV;_.E=eV;_.tN=yO+'DiagramBuilderExample';_.tI=162;_.a=null;_.b=null;_.d=null;_.e=null;_.f=null;function dU(b,a,c){b.a=a;b.b=c;return b;}
function fU(a){var b,c,d;b=a.d;d=qi(CM(this.a.a,b),14);c=this.b.g;CU(this.a.b,qi(d,45),c);throw gd(new fd());}
function cU(){}
_=cU.prototype=new rb();_.uc=fU;_.tN=yO+'DiagramBuilderExample$1';_.tI=163;function hU(b,a){b.a=a;return b;}
function jU(a){var b,c;if(128==Fk(a)&&46==Ak(a)&& !zK(this.a.c)){for(b=AI(this.a.c);oI(b);){c=qi(pI(b),14);qI(b);DC(c);}return false;}return true;}
function gU(){}
_=gU.prototype=new mG();_.lc=jU;_.tN=yO+'DiagramBuilderExample$2';_.tI=164;function lU(b,a,c){b.a=a;b.b=c;return b;}
function nU(a){bV(this.a,this.b);}
function kU(){}
_=kU.prototype=new mG();_.fc=nU;_.tN=yO+'DiagramBuilderExample$3';_.tI=165;function pU(c,a,b){c.a=b;Fw(c,a);return c;}
function rU(a){if(Fk(a)==1&&yk(a)){aV(this.a,this);}ex(this,a);}
function oU(){}
_=oU.prototype=new Dw();_.ec=rU;_.tN=yO+'DiagramBuilderExample$4';_.tI=166;function vU(){vU=eO;ad();}
function tU(a){a.a=wM(new AL());}
function uU(d,a,b,c){vU();d.b=c;Fc(d,d.b.i,false);tU(d);dd(d,true);F(d,a);u(d,dU(new cU(),d,a));return d;}
function wU(a){var b,c;b=qi(a,45);c=Fw(new Dw(),dx(b));lB(c,'dragdrop-proxy');lB(c,'toolbox-node-proxy');uB(c,b.rb(),b.qb());DM(this.a,b,c);return c;}
function sU(){}
_=sU.prototype=new Ec();_.Eb=wU;_.tN=yO+'DiagramBuilderExample$ToolboxDragController';_.tI=167;function gV(a){oT(a);return a;}
function iV(a,b){this.t(BP(new zP(),a,b));}
function fV(){}
_=fV.prototype=new ES();_.A=iV;_.tN=yO+'RectilinearExample';_.tI=168;function kV(a){oT(a);return a;}
function mV(c,a,b){c.t(cQ(new bQ(),a,b));}
function nV(a,b){mV(this,a,b);}
function oV(){var a,b;a=rT(this,'connector 1',50,50,(uR(),zR));b=rT(this,'connector 2',200,200,(uR(),wR));mV(this,a,b);}
function jV(){}
_=jV.prototype=new ES();_.A=nV;_.E=oV;_.tN=yO+'StraightConnectionsExample';_.tI=169;function cE(){vS(new wS());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{cE();}catch(a){b(d);}else{cE();}}
var xi=[{},{27:1},{1:1,27:1,38:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{7:1,27:1},{27:1},{27:1,31:1},{27:1,31:1},{27:1,31:1},{27:1},{27:1},{10:1,27:1,38:1},{23:1,27:1},{27:1},{16:1,27:1},{16:1,27:1},{12:1,16:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{27:1},{13:1,16:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{15:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1},{20:1,27:1},{20:1,27:1},{20:1,27:1},{27:1},{15:1,19:1,27:1},{15:1,27:1},{21:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1,28:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{2:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,23:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{5:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,45:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{3:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,44:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{2:1,14:1,24:1,26:1,27:1,28:1,29:1},{21:1,27:1},{27:1},{14:1,22:1,27:1,28:1,29:1},{27:1,31:1},{14:1,25:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,22:1,27:1,28:1,29:1},{4:1,14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1,30:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{27:1},{11:1,16:1,27:1},{27:1},{27:1},{27:1,32:1},{27:1,33:1},{27:1,33:1},{27:1},{27:1},{27:1},{27:1},{27:1,32:1},{27:1,39:1},{27:1,33:1},{27:1},{27:1,33:1},{11:1,16:1,27:1},{27:1},{27:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{27:1},{27:1},{27:1},{27:1},{27:1,40:1},{27:1,34:1},{27:1,35:1},{27:1,37:1},{27:1,35:1,42:1},{27:1,35:1,42:1},{27:1},{27:1},{17:1,27:1},{27:1},{25:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{8:1,27:1},{22:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{7:1,27:1},{18:1,27:1},{22:1,27:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{9:1,27:1},{27:1},{27:1},{27:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();