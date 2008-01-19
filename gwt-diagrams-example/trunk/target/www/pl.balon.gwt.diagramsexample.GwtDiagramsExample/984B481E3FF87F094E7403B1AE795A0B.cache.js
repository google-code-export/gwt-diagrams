(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,FN='com.allen_sauer.gwt.dragdrop.client.',aO='com.allen_sauer.gwt.dragdrop.client.drop.',bO='com.allen_sauer.gwt.dragdrop.client.util.',cO='com.allen_sauer.gwt.dragdrop.client.util.impl.',dO='com.google.gwt.core.client.',eO='com.google.gwt.lang.',fO='com.google.gwt.user.client.',gO='com.google.gwt.user.client.impl.',hO='com.google.gwt.user.client.ui.',iO='com.google.gwt.user.client.ui.impl.',jO='java.io.',kO='java.lang.',lO='java.util.',mO='pl.balon.gwt.diagrams.client.common.bezier.',nO='pl.balon.gwt.diagrams.client.connection.',oO='pl.balon.gwt.diagrams.client.connection.calculator.',pO='pl.balon.gwt.diagrams.client.connection.data.',qO='pl.balon.gwt.diagrams.client.connector.',rO='pl.balon.gwt.diagramsexample.client.',sO='pl.balon.gwt.diagramsexample.client.examples.';function EN(){}
function hG(a){return this===a;}
function iG(){return rH(this);}
function jG(){return this.tN+'@'+this.hC();}
function fG(){}
_=fG.prototype={};_.eQ=hG;_.hC=iG;_.tS=jG;_.toString=function(){return this.tS();};_.tN=kO+'Object';_.tI=1;function sL(b,a){b.d=a;return b;}
function rL(){}
_=rL.prototype=new fG();_.tN=lO+'EventObject';_.tI=3;_.d=null;function ob(c,b,a){sL(c,b);c.c=a;return c;}
function qb(){var a;a=this.c!==null?'dropTarget='+gg(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+gg(this.d)+')';}
function nb(){}
_=nb.prototype=new rL();_.tS=qb;_.tN=FN+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ob(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new nb();_.tS=q;_.tN=FN+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function v(){v=EN;db=qM(new uL());}
function s(a){a.j=y(a);}
function t(c,b,a){v();s(c);c.h=b!==null?b:ez();c.g=c.Cb(c.h,a);F(c,c.g);c.o=tc(new rc(),c);return c;}
function u(b,a){if(b.i===null){b.i=yb(new xb());}lK(b.i,a);}
function w(c,a,b){tB(a,'dragdrop-dragging');}
function x(b,a){pc(b.j,b.h,a);if(b.i!==null){Bb(b.i,a);}nB(a,'dragdrop-dragging');}
function y(a){return kc(new dc());}
function z(b,c){var a;a=nc(b.j,c,b.h);return a!==null?a:b.g;}
function A(a,b){{B(a,b,b);}}
function B(c,b,a){xc(c.o,b,a);nB(b,'dragdrop-draggable');nB(a,'dragdrop-handle');xM(db,b,a);}
function C(b,a){if(b.i!==null){Ab(b.i,a);}}
function D(c,a,b){if(c.i!==null){Cb(c.i,a,b);}}
function E(b,a){if(b.i!==null){Db(b.i,a);}}
function F(b,a){lc(b.j,a);}
function ab(b,a){if(ni(b.m,2)){qq(mi(b.m,2),a,b.n.a,b.n.d);}else if(ni(b.m,3)){ow(mi(b.m,3),a,b.k);}else if(ni(b.m,4)){lC(mi(b.m,4),a,b.k);}else if(ni(b.m,5)){mt(mi(b.m,5),a,b.k);}else if(ni(b.m,6)){mi(b.m,6).cd(a);}else{throw mG(new kG(),'Unable to handle initialDraggableParent '+fh(b.m));}}
function bb(b,a){if(b.l!==null&&FG(b.l)!=0){Bl(a.jb(),'margin',b.l);}}
function cb(b,a){b.m=a.p;if(ni(b.m,2)){b.n=lg(new kg(),a,b.m);}else if(ni(b.m,3)){b.k=wr(mi(b.m,3),a);}else if(ni(b.m,4)){b.k=wr(mi(b.m,4),a);}else if(ni(b.m,5)){b.k=wr(mi(b.m,5),a);}else if(ni(b.m,6)){}else{throw mG(new kG(),"Unable to handle 'initialDraggableParent instanceof "+fh(b.m)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.l=jl(a.jb(),'margin');if(b.l!==null&&FG(b.l)!=0){Bl(a.jb(),'margin','0px');}}
function eb(a){A(this,a);}
function fb(b,a){return re(new qe(),b,a);}
function r(){}
_=r.prototype=new fG();_.Ab=eb;_.Cb=fb;_.tN=FN+'AbstractDragController';_.tI=6;_.g=null;_.h=null;_.i=null;_.k=0;_.l=null;_.m=null;_.n=null;_.o=null;var db;function hb(b,a){b.b=a;return b;}
function jb(a){if(a.c==0){return;}uc(a.b,a.d,a.e);a.a=pH()-a.c;a.c=0;}
function kb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=pH();}if(a.a>80){cm(a);}else{jb(a);}}
function lb(){jb(this);}
function gb(){}
_=gb.prototype=new fG();_.bb=lb;_.tN=FN+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function tb(a){}
function ub(a){}
function vb(a){}
function wb(a){}
function rb(){}
_=rb.prototype=new fG();_.fc=tb;_.gc=ub;_.sc=vb;_.tc=wb;_.tN=FN+'DragHandlerAdapter';_.tI=8;function FH(d,a,b){var c;while(a.vb()){c=a.Eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function bI(a){throw CH(new AH(),'add');}
function cI(b){var a;a=FH(this,this.xb(),b);return a!==null;}
function dI(){var a,b,c;c=qG(new pG());a=null;rG(c,'[');b=this.xb();while(b.vb()){if(a!==null){rG(c,a);}else{a=', ';}rG(c,mH(b.Eb()));}rG(c,']');return vG(c);}
function EH(){}
_=EH.prototype=new fG();_.s=bI;_.A=cI;_.tS=dI;_.tN=lO+'AbstractCollection';_.tI=9;function sI(b,a){throw fF(new dF(),'Index: '+a+', Size: '+b.b);}
function tI(a){return gI(new fI(),a);}
function uI(a){return pI(new oI(),a);}
function vI(b,a){throw CH(new AH(),'add');}
function wI(a){this.r(this.ed(),a);return true;}
function xI(e){var a,b,c,d,f;if(e===this){return true;}if(!ni(e,31)){return false;}f=mi(e,31);if(this.ed()!=f.ed()){return false;}c=tI(this);d=f.xb();while(iI(c)){a=jI(c);b=jI(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function yI(){var a,b,c,d;c=1;a=31;b=tI(this);while(iI(b)){d=jI(b);c=31*c+(d===null?0:d.hC());}return c;}
function zI(){return tI(this);}
function AI(a){throw CH(new AH(),'remove');}
function eI(){}
_=eI.prototype=new EH();_.r=vI;_.s=wI;_.eQ=xI;_.hC=yI;_.xb=zI;_.Bc=AI;_.tN=lO+'AbstractList';_.tI=10;function iK(a){{mK(a);}}
function jK(a){iK(a);return a;}
function lK(b,a){bL(b.a,b.b++,a);return true;}
function kK(d,a){var b,c;c=tI(a);b=c.vb();while(c.vb()){bL(d.a,d.b++,c.Eb());}return b;}
function nK(a){mK(a);}
function mK(a){a.a=vh();a.b=0;}
function pK(b,a){return rK(b,a)!=(-1);}
function qK(b,a){if(a<0||a>=b.b){sI(b,a);}return DK(b.a,a);}
function rK(b,a){return sK(b,a,0);}
function sK(c,b,a){if(a<0){sI(c,a);}for(;a<c.b;++a){if(CK(b,DK(c.a,a))){return a;}}return (-1);}
function tK(a){return a.b==0;}
function uK(c,a){var b;b=qK(c,a);FK(c.a,a,1);--c.b;return b;}
function vK(c,b){var a;a=rK(c,b);if(a==(-1)){return false;}uK(c,a);return true;}
function wK(d,a,b){var c;c=qK(d,a);bL(d.a,a,b);return c;}
function xK(c,a){var b;if(a.a<c.b){a=bi(a,c.b);}for(b=0;b<c.b;++b){ii(a,b,DK(c.a,b));}if(a.a>c.b){ii(a,c.b,null);}return a;}
function zK(a,b){if(a<0||a>this.b){sI(this,a);}yK(this.a,a,b);++this.b;}
function AK(a){return lK(this,a);}
function yK(a,b,c){a.splice(b,0,c);}
function BK(a){return pK(this,a);}
function CK(a,b){return a===b||a!==null&&a.eQ(b);}
function EK(a){return qK(this,a);}
function DK(a,b){return a[b];}
function aL(a){return uK(this,a);}
function FK(a,c,b){a.splice(c,b);}
function bL(a,b,c){a[b]=c;}
function cL(){return this.b;}
function hK(){}
_=hK.prototype=new eI();_.r=zK;_.s=AK;_.A=BK;_.tb=EK;_.Bc=aL;_.ed=cL;_.tN=lO+'ArrayList';_.tI=11;_.a=null;_.b=0;function yb(a){jK(a);return a;}
function Ab(d,a){var b,c;for(c=tI(d);iI(c);){b=mi(jI(c),7);b.fc(a);}}
function Bb(e,d){var a,b,c;a=ac(new Fb(),d);for(c=tI(e);iI(c);){b=mi(jI(c),7);b.gc(a);}}
function Cb(f,e,a){var b,c,d;b=ob(new nb(),e,a);for(d=tI(f);iI(d);){c=mi(jI(d),7);c.sc(b);}}
function Db(e,d){var a,b,c;a=ac(new Fb(),d);for(c=tI(e);iI(c);){b=mi(jI(c),7);b.tc(a);}}
function xb(){}
_=xb.prototype=new hK();_.tN=FN+'DragHandlerCollection';_.tI=12;function ac(b,a){sL(b,a);return b;}
function cc(){return 'DragStartEvent(source='+gg(this.d)+')';}
function Fb(){}
_=Fb.prototype=new rL();_.tS=cc;_.tN=FN+'DragStartEvent';_.tI=13;function jc(a){a.a=jK(new hK());}
function kc(a){jc(a);return a;}
function lc(b,a){lK(b.a,a);}
function nc(g,h,a){var b,c,d,e,f,i,j,k;i=ig(new hg(),h,null);j=ef(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(hf(f,i)){k=df(f,j);if(k<=c){if(e===null|| !zf(hc(b).jb(),hc(e).jb())){c=k;e=b;}}}}return e===null?null:e.a;}
function oc(a){return tI(a.a);}
function pc(h,b,d){var a,c,e,f,g;a=ig(new hg(),b,null);g=jK(new hK());for(f=oc(h);iI(f);){e=mi(jI(f),8);c=fc(new ec(),e);if(!zf(d.jb(),hc(c).jb())){if(hf(c.b,a)){lK(g,c);}}}h.b=mi(xK(g,hi('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',168,10,[])),9);hL(h.b);}
function dc(){}
_=dc.prototype=new fG();_.tN=FN+'DropControllerCollection';_.tI=14;_.b=null;function fc(c,a){var b;c.a=a;b=a.ib();if(!b.wb()){throw bF(new FE(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=ig(new hg(),b,null);return c;}
function hc(a){return a.a.ib();}
function ic(a){var b;b=mi(a,10);return zf(hc(this).jb(),hc(b).jb())?1:(-1);}
function ec(){}
_=ec.prototype=new fG();_.v=ic;_.tN=FN+'DropControllerCollection$Candidate';_.tI=15;_.a=null;_.b=null;function sc(a){a.d=hb(new gb(),a);a.f=qM(new uL());}
function tc(b,a){sc(b);b.e=a;b.a=a.h;return b;}
function uc(e,f,g){var a,b,c,d;c=lg(new kg(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=sF(0,tF(a,e.l));b=sF(0,tF(b,e.m));}Af(e.o.jb(),a,b);d=z(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.kc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ic(e.o,e.g,e.e);}}if(e.i!==null){e.i.rc(e.o,e.g,e.e);}}
function vc(b){var a;ol(b.b.jb());b.h=false;if(b.i!==null){b.i.kc(b.g,b.e);}b.i=null;bd(b.e,b.g,null);a=ob(new nb(),b.g,null);C(b.e,a);}
function xc(c,b,a){if(a!==null){dx(a,c);xM(c.f,a,b);}else{throw mG(new kG(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function yc(f){var a,c,d,e;f.g=mi(wM(f.f,f.b),14);try{E(f.e,f.g);}catch(a){a=xi(a);if(ni(a,12)){a;return;}else throw a;}cd(f.e,f.g);f.o=f.e.f;f.l=Ef(f.a.jb())-f.o.ob();f.m=Df(f.a.jb())-f.o.nb();e=lg(new kg(),f.b,f.a);c=lg(new kg(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;tl(f.b.jb());f.h=true;try{uc(f,f.j,f.k);}catch(a){a=xi(a);if(ni(a,11)){d=a;vc(f);throw d;}else throw a;}}
function zc(b,c,d){var a;this.b=b;a=rk((Dj(),lk));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Ck((Dj(),lk));cg();this.j=c;this.k=d;}
function Ac(a){}
function Bc(a){}
function Cc(d,e,f){var a,c;if(!this.h){if(this.n){yc(this);}if(!this.h){return;}}Ck((Dj(),lk));try{kb(this.d,e,f);}catch(a){a=xi(a);if(ni(a,11)){c=a;vc(this);throw c;}else throw a;}}
function Dc(g,h,i){var a,a,d,e,f;d=rk((Dj(),lk));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{ol(this.b.jb());uc(this,h,i);this.h=false;if(this.i===null){vc(this);return;}try{D(this.e,this.g,this.i.ib());}catch(a){a=xi(a);if(ni(a,12)){a;vc(this);return;}else throw a;}try{this.i.uc(this.o,this.g,this.e);}catch(a){a=xi(a);if(ni(a,13)){a;vc(this);return;}else throw a;}bd(this.e,this.g,this.i.ib());e=this.i.hc(this.o,this.g,this.e);C(this.e,e);}catch(a){a=xi(a);if(ni(a,11)){f=a;vc(this);throw f;}else throw a;}finally{this.i=null;}}
function rc(){}
_=rc.prototype=new fG();_.mc=zc;_.nc=Ac;_.oc=Bc;_.pc=Cc;_.qc=Dc;_.tN=FN+'MouseDragHandler';_.tI=16;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ad(){ad=EN;v();}
function Fc(c,b,a){ad();t(c,b,a);return c;}
function bd(c,a,b){w(c,a,b);if(c.c!==null){c.c=null;if(c.e!==null){FC(c.e);c.e=null;}else{if(b===null){ab(c,a);}}bb(c,a);FC(c.f);c.f=null;}}
function cd(d,a){var b,c;x(d,a);d.c=a;d.e=d.Bb(a);cb(d,a);c=lg(new kg(),a,d.h);d.f=pz(new iz());nB(d.f,'dragdrop-movable-panel');if(d.e===null){wB(d.f,a.ob(),a.nb());}qq(d.h,d.f,c.a,c.d);b=d.e!==null?d.e:d.c;d.f.cd(b);}
function dd(b,a){b.d=a;}
function ed(a){var b;if(this.d){b=qv(new ut(),'this is a Drag Proxy');nB(b,'dragdrop-proxy');wB(b,this.c.ob(),this.c.nb());return b;}else{return null;}}
function Ec(){}
_=Ec.prototype=new r();_.Bb=ed;_.tN=FN+'PickupDragController';_.tI=17;_.c=null;_.d=false;_.e=null;_.f=null;function wH(){wH=EN;yH=gi('[Ljava.lang.StackTraceElement;',[170],[36],[0],null);}
function tH(a){a.c=yH;}
function uH(a){wH();tH(a);return a;}
function vH(b,a){wH();tH(b);b.b=a;return b;}
function xH(c){var a,b;a=fh(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function zH(){return xH(this);}
function sH(){}
_=sH.prototype=new fG();_.tS=zH;_.tN=kO+'Throwable';_.tI=18;_.a=null;_.b=null;var yH;function BE(){BE=EN;wH();}
function zE(a){BE();uH(a);return a;}
function AE(b,a){BE();vH(b,a);return b;}
function yE(){}
_=yE.prototype=new sH();_.tN=kO+'Exception';_.tI=19;function hd(){hd=EN;BE();}
function gd(a){hd();zE(a);return a;}
function fd(){}
_=fd.prototype=new yE();_.tN=FN+'VetoDragException';_.tI=20;function yd(b,a){b.g=a;nB(a,b.hb());return b;}
function Ad(d,c,b,a){tB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.zb(c,b,a);}
function Bd(d,c,b,a){nB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Cd(c,b,a){tB(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Dd(){return this.g;}
function Ed(c,b,a){return ob(new nb(),b,this.g);}
function Fd(c,b,a){return Ad(this,c,b,a);}
function ae(c,b,a){Bd(this,c,b,a);}
function be(b,a){Cd(this,b,a);}
function ce(c,b,a){}
function de(c,b,a){}
function xd(){}
_=xd.prototype=new fG();_.ib=Dd;_.zb=Ed;_.hc=Fd;_.ic=ae;_.kc=be;_.rc=ce;_.uc=de;_.tN=aO+'AbstractDropController';_.tI=21;_.g=null;function ge(){ge=EN;me=bx(new Fw(),'x');}
function fe(b,a){ge();yd(b,a);return b;}
function he(f,e){var a,b,c,d;d=pz(new iz());nB(d,'dragdrop-positioner');qq(ez(),d,(-500),(-500));d.cd(me);a=pz(new iz());c=e.ob()-Ff(d);b=e.nb()-ag(d);wB(a,c,b);d.cd(a);return d;}
function ie(e,d,b,a){var c;c=Ad(e,d,b,a);le(e);return c;}
function je(d,c,b,a){Bd(d,c,b,a);d.f=he(d,b);}
function ke(c,b,a){Cd(c,b,a);le(c);}
function le(a){if(a.f!==null){FC(a.f);}}
function ne(c,b,a){return ie(this,c,b,a);}
function oe(c,b,a){je(this,c,b,a);}
function pe(b,a){ke(this,b,a);}
function ee(){}
_=ee.prototype=new xd();_.hc=ne;_.ic=oe;_.kc=pe;_.tN=aO+'AbstractPositioningDropController';_.tI=22;_.f=null;var me;function kd(){kd=EN;ge();}
function jd(b,a){kd();fe(b,a);b.d=ze(new ye(),a);return b;}
function ld(d,c,a,e){var b;b=d.eb(c,a,e);if(b!==null){qq(d.d.b,e,b.a,b.d);}}
function md(e,d,b,a){var c;qq(e.d.b,b,e.c.a,e.c.d);c=ie(e,d,b,a);e.e=null;return c;}
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
_=id.prototype=new ee();_.eb=pd;_.hb=qd;_.zb=rd;_.hc=sd;_.ic=td;_.kc=ud;_.rc=vd;_.uc=wd;_.tN=aO+'AbsolutePositionDropController';_.tI=23;_.c=null;_.d=null;_.e=null;function se(){se=EN;kd();}
function re(c,b,a){se();jd(c,b);c.a=a;return c;}
function te(b,a,d){var c;if(this.a){c=ig(new hg(),b,this.d.a);if(this.b===null){this.b=lg(new kg(),b,this.d.b);}else{rg(this.b,b);}ng(this.b,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.b;}else{return null;}}
function ue(){return 'dragdrop-boundary';}
function ve(d,c,a){var b;b=md(this,d,c,a);this.b=null;return b;}
function we(b,a){nd(this,b,a);this.b=null;}
function qe(){}
_=qe.prototype=new id();_.eb=te;_.hb=ue;_.hc=ve;_.kc=we;_.tN=aO+'BoundaryDropController';_.tI=24;_.a=false;_.b=null;function ze(b,a){b.b=a;return b;}
function Be(a){return Df(a.b.jb());}
function Ce(a){return Ef(a.b.jb());}
function De(b,a){b.a=a;}
function ye(){}
_=ye.prototype=new fG();_.tN=aO+'DropTargetInfo';_.tI=25;_.a=null;_.b=null;function af(){af=EN;BE();}
function Fe(a){af();zE(a);return a;}
function Ee(){}
_=Ee.prototype=new yE();_.tN=aO+'VetoDropException';_.tI=26;function df(b,a){var c,d;c=sF(b.b-a.a,a.a-b.c);d=sF(b.d-a.b,a.b-b.a);return sF(c,d);}
function ef(a){return tf(new sf(),a.b+qi(gf(a)/2),a.d+qi(ff(a)/2));}
function ff(a){return a.a-a.d;}
function gf(a){return a.c-a.b;}
function hf(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function jf(b,a){b.a=a;}
function kf(b,a){b.b=a;}
function lf(b,a){b.c=a;}
function mf(a,b){a.d=b;}
function nf(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function bf(){}
_=bf.prototype=new fG();_.tS=nf;_.tN=bO+'AbstractArea';_.tI=27;_.a=0;_.b=0;_.c=0;_.d=0;function qf(){return '('+this.mb()+', '+this.qb()+')';}
function of(){}
_=of.prototype=new fG();_.tS=qf;_.tN=bO+'AbstractLocation';_.tI=28;function tf(b,a,c){b.a=a;b.b=c;return b;}
function vf(){return this.a;}
function wf(){return this.b;}
function sf(){}
_=sf.prototype=new of();_.mb=vf;_.qb=wf;_.tN=bO+'CoordinateLocation';_.tI=29;_.a=0;_.b=0;function yf(){yf=EN;{bg=new wg();}}
function zf(b,a){yf();return Fg(bg,b,a);}
function Af(a,b,c){yf();a.style.left=b+'px';a.style.top=c+'px';}
function Bf(a){yf();return yg(bg,a);}
function Cf(a){yf();return zg(bg,a);}
function Df(a){yf();return Ag(bg,a);}
function Ef(a){yf();return Bg(bg,a);}
function Ff(a){yf();return Cg(bg,a);}
function ag(a){yf();return ah(bg,a);}
function cg(){yf();Dg(bg);}
var bg=null;function gg(a){var b;b=fh(a);return bH(b,EG(b,46)+1);}
function ig(e,g,c){var a,b,d,f;b=pB(g);f=qB(g);if(c!==null){b-=pB(c);b-=Bf(c.jb());f-=qB(c);f-=Cf(c.jb());}d=b+g.ob();a=f+g.nb();kf(e,b);mf(e,f);lf(e,d);jf(e,a);return e;}
function hg(){}
_=hg.prototype=new bf();_.tN=bO+'WidgetArea';_.tI=30;function lg(b,c,a){pg(b,c);og(b,a);qg(b);return b;}
function ng(e,c,d,a,b){e.a=sF(c,tF(e.a,a));e.d=sF(d,tF(e.d,b));}
function og(b,a){if(a===null||a===ez()){b.b=0;b.c=0;}else{b.b=pB(a)+Bf(a.jb());b.c=qB(a)+Cf(a.jb());}}
function pg(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=pB(b);a.f=qB(b);}}
function qg(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function rg(a,b){pg(a,b);qg(a);}
function sg(){return this.a;}
function tg(){return this.d;}
function ug(){return '('+this.a+', '+this.d+')';}
function kg(){}
_=kg.prototype=new of();_.mb=sg;_.qb=tg;_.tS=ug;_.tN=bO+'WidgetLocation';_.tI=31;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function Fg(c,b,a){return b.contains(a);}
function ah(a,b){return b.nb()-Ag(a,b.jb());}
function vg(){}
_=vg.prototype=new fG();_.tN=cO+'DOMUtilImpl';_.tI=32;function yg(b,a){return a.clientLeft;}
function zg(b,a){return a.clientTop;}
function Ag(b,a){return a.clientHeight;}
function Bg(b,a){return a.clientWidth;}
function Cg(a,b){return b.ob()-Bg(a,b.jb());}
function Dg(a){$doc.selection.empty();}
function wg(){}
_=wg.prototype=new vg();_.tN=cO+'DOMUtilImplIE6';_.tI=33;function fh(a){return a==null?null:a.tN;}
function hh(a){gh=a;}
var gh=null;function kh(a){return a==null?0:a.$H?a.$H:(a.$H=mh());}
function lh(a){return a==null?0:a.$H?a.$H:(a.$H=mh());}
function mh(){return ++nh;}
var nh=0;function nG(){nG=EN;BE();}
function lG(a){nG();zE(a);return a;}
function mG(b,a){nG();AE(b,a);return b;}
function kG(){}
_=kG.prototype=new yE();_.tN=kO+'RuntimeException';_.tI=34;function qh(){qh=EN;nG();}
function ph(c,b,a){qh();mG(c,'JavaScript '+b+' exception: '+a);return c;}
function oh(){}
_=oh.prototype=new kG();_.tN=dO+'JavaScriptException';_.tI=35;function th(b,a){if(!ni(a,15)){return false;}return xh(b,mi(a,15));}
function uh(a){return kh(a);}
function vh(){return [];}
function wh(){return {};}
function yh(a){return th(this,a);}
function xh(a,b){return a===b;}
function zh(){return uh(this);}
function Bh(){return Ah(this);}
function Ah(a){if(a.toString)return a.toString();return '[object]';}
function rh(){}
_=rh.prototype=new fG();_.eQ=yh;_.hC=zh;_.tS=Bh;_.tN=dO+'JavaScriptObject';_.tI=36;function Dh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function Fh(a,b,c){return a[b]=c;}
function bi(a,b){return ai(a,b);}
function ai(a,b){return Dh(new Ch(),b,a.tI,a.b,a.tN);}
function ci(b,a){return b[a];}
function ei(b,a){return b[a];}
function di(a){return a.length;}
function gi(e,d,c,b,a){return fi(e,d,c,b,0,di(b),a);}
function fi(j,i,g,c,e,a,b){var d,f,h;if((f=ci(c,e))<0){throw wF(new vF());}h=Dh(new Ch(),f,ci(i,e),ci(g,e),j);++e;if(e<a){j=bH(j,1);for(d=0;d<f;++d){Fh(h,d,fi(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Fh(h,d,b);}}return h;}
function hi(f,e,c,g){var a,b,d;b=di(g);d=Dh(new Ch(),b,e,c,f);for(a=0;a<b;++a){Fh(d,a,ei(g,a));}return d;}
function ii(a,b,c){if(c!==null&&a.b!=0&& !ni(c,a.b)){throw dE(new cE());}return Fh(a,b,c);}
function Ch(){}
_=Ch.prototype=new fG();_.tN=eO+'Array';_.tI=37;function li(b,a){return !(!(b&&ti[b][a]));}
function mi(b,a){if(b!=null)li(b.tI,a)||si();return b;}
function ni(b,a){return b!=null&&li(b.tI,a);}
function oi(a){return a&65535;}
function pi(a){return ~(~a);}
function qi(a){if(a>(iF(),jF))return iF(),jF;if(a<(iF(),kF))return iF(),kF;return a>=0?Math.floor(a):Math.ceil(a);}
function si(){throw tE(new sE());}
function ri(a){if(a!==null){throw tE(new sE());}return a;}
function ui(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ti;function xi(a){if(ni(a,16)){return a;}return ph(new oh(),zi(a),yi(a));}
function yi(a){return a.message;}
function zi(a){return a.name;}
function Ci(){Ci=EN;nG();}
function Bi(b,a){Ci();lG(b);return b;}
function Ai(){}
_=Ai.prototype=new kG();_.tN=fO+'CommandCanceledException';_.tI=40;function rj(a){a.a=Fi(new Ei(),a);a.b=jK(new hK());a.d=dj(new cj(),a);a.f=hj(new gj(),a);}
function sj(a){rj(a);return a;}
function uj(c){var a,b,d;a=jj(c.f);mj(c.f);b=null;if(ni(a,17)){b=Bi(new Ai(),mi(a,17));}else{}if(b!==null){d=gh;if(d!==null){nS(d,b);}}xj(c,false);wj(c);}
function vj(e,d){var a,b,c,f;f=false;try{xj(e,true);nj(e.f,e.b.b);cn(e.a,10000);while(kj(e.f)){b=lj(e.f);c=true;try{if(b===null){return;}if(ni(b,17)){a=mi(b,17);a.bb();}else{}}finally{f=oj(e.f);if(f){return;}if(c){mj(e.f);}}if(Aj(pH(),d)){return;}}}finally{if(!f){Em(e.a);xj(e,false);wj(e);}}}
function wj(a){if(!tK(a.b)&& !a.e&& !a.c){yj(a,true);cn(a.d,1);}}
function xj(b,a){b.c=a;}
function yj(b,a){b.e=a;}
function zj(b,a){lK(b.b,a);wj(b);}
function Aj(a,b){return rF(a-b)>=100;}
function Di(){}
_=Di.prototype=new fG();_.tN=fO+'CommandExecutor';_.tI=41;_.c=false;_.e=false;function Fm(){Fm=EN;jn=jK(new hK());{hn();}}
function Dm(a){Fm();return a;}
function Em(a){if(a.b){dn(a.c);}else{en(a.c);}vK(jn,a);}
function an(e,d){var a,c;try{bn(e);}catch(a){a=xi(a);if(ni(a,16)){c=a;nS(d,c);}else throw a;}}
function bn(a){if(!a.b){vK(jn,a);}a.Dc();}
function cn(b,a){if(a<=0){throw DE(new CE(),'must be positive');}Em(b);b.b=false;b.c=fn(b,a);lK(jn,b);}
function dn(a){Fm();$wnd.clearInterval(a);}
function en(a){Fm();$wnd.clearTimeout(a);}
function fn(b,a){Fm();return $wnd.setTimeout(function(){b.cb();},a);}
function gn(){var a;a=gh;if(a!==null){an(this,a);}else{bn(this);}}
function hn(){Fm();nn(new zm());}
function ym(){}
_=ym.prototype=new fG();_.cb=gn;_.tN=fO+'Timer';_.tI=42;_.b=false;_.c=0;var jn;function aj(){aj=EN;Fm();}
function Fi(b,a){aj();b.a=a;Dm(b);return b;}
function bj(){if(!this.a.c){return;}uj(this.a);}
function Ei(){}
_=Ei.prototype=new ym();_.Dc=bj;_.tN=fO+'CommandExecutor$1';_.tI=43;function ej(){ej=EN;Fm();}
function dj(b,a){ej();b.a=a;Dm(b);return b;}
function fj(){yj(this.a,false);vj(this.a,pH());}
function cj(){}
_=cj.prototype=new ym();_.Dc=fj;_.tN=fO+'CommandExecutor$2';_.tI=44;function hj(b,a){b.d=a;return b;}
function jj(a){return qK(a.d.b,a.b);}
function kj(a){return a.c<a.a;}
function lj(b){var a;b.b=b.c;a=qK(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function mj(a){uK(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function nj(b,a){b.a=a;}
function oj(a){return a.b==(-1);}
function pj(){return kj(this);}
function qj(){return lj(this);}
function gj(){}
_=gj.prototype=new fG();_.vb=pj;_.Eb=qj;_.tN=fO+'CommandExecutor$CircularIterator';_.tI=45;_.a=0;_.b=(-1);_.c=0;function Dj(){Dj=EN;sl=jK(new hK());{kl=new ao();ro(kl);}}
function Ej(a){Dj();lK(sl,a);}
function Fj(b,a){Dj();Bo(kl,b,a);}
function ak(a,b){Dj();return co(kl,a,b);}
function bk(){Dj();return Do(kl,'A');}
function ck(){Dj();return Do(kl,'div');}
function dk(a){Dj();return Do(kl,a);}
function ek(a){Dj();return eo(kl,a);}
function fk(){Dj();return Do(kl,'label');}
function gk(){Dj();return Do(kl,'span');}
function hk(){Dj();return Do(kl,'tbody');}
function ik(){Dj();return Do(kl,'td');}
function jk(){Dj();return Do(kl,'tr');}
function kk(){Dj();return Do(kl,'table');}
function ok(b,a,d){Dj();var c;c=gh;if(c!==null){mk(b,a,d,c);}else{nk(b,a,d);}}
function mk(e,d,g,f){Dj();var a,c;try{nk(e,d,g);}catch(a){a=xi(a);if(ni(a,16)){c=a;nS(f,c);}else throw a;}}
function nk(b,a,c){Dj();var d;if(a===rl){if(Bk(b)==8192){rl=null;}}d=lk;lk=b;try{c.cc(b);}finally{lk=d;}}
function pk(b,a){Dj();Eo(kl,b,a);}
function qk(a){Dj();return Fo(kl,a);}
function rk(a){Dj();return ap(kl,a);}
function sk(a){Dj();return fo(kl,a);}
function tk(a){Dj();return go(kl,a);}
function uk(a){Dj();return bp(kl,a);}
function vk(a){Dj();return ho(kl,a);}
function wk(a){Dj();return cp(kl,a);}
function xk(a){Dj();return dp(kl,a);}
function yk(a){Dj();return ep(kl,a);}
function zk(a){Dj();return io(kl,a);}
function Ak(a){Dj();return jo(kl,a);}
function Bk(a){Dj();return fp(kl,a);}
function Ck(a){Dj();ko(kl,a);}
function Dk(a){Dj();return lo(kl,a);}
function Ek(a){Dj();return mo(kl,a);}
function Fk(a){Dj();return no(kl,a);}
function al(a){Dj();return gp(kl,a);}
function dl(a,b){Dj();return jp(kl,a,b);}
function bl(a,b){Dj();return hp(kl,a,b);}
function cl(a,b){Dj();return ip(kl,a,b);}
function el(a){Dj();return kp(kl,a);}
function fl(a){Dj();return oo(kl,a);}
function gl(a){Dj();return lp(kl,a);}
function hl(a){Dj();return po(kl,a);}
function il(a){Dj();return qo(kl,a);}
function jl(b,a){Dj();return mp(kl,b,a);}
function ll(c,a,b){Dj();so(kl,c,a,b);}
function ml(b,a){Dj();return to(kl,b,a);}
function nl(a){Dj();var b,c;c=true;if(sl.b>0){b=mi(qK(sl,sl.b-1),18);if(!(c=b.jc(a))){pk(a,true);Ck(a);}}return c;}
function ol(a){Dj();if(rl!==null&&ak(a,rl)){rl=null;}uo(kl,a);}
function pl(b,a){Dj();np(kl,b,a);}
function ql(a){Dj();vK(sl,a);}
function tl(a){Dj();rl=a;vo(kl,a);}
function ul(b,a,c){Dj();op(kl,b,a,c);}
function xl(a,b,c){Dj();rp(kl,a,b,c);}
function vl(a,b,c){Dj();pp(kl,a,b,c);}
function wl(a,b,c){Dj();qp(kl,a,b,c);}
function yl(a,b){Dj();sp(kl,a,b);}
function zl(a,b){Dj();tp(kl,a,b);}
function Al(a,b){Dj();wo(kl,a,b);}
function Bl(b,a,c){Dj();up(kl,b,a,c);}
function Cl(a,b){Dj();xo(kl,a,b);}
function Dl(a){Dj();return vp(kl,a);}
function El(){Dj();return wp(kl);}
function Fl(){Dj();return xp(kl);}
var lk=null,kl=null,rl=null,sl;function bm(){bm=EN;dm=sj(new Di());}
function cm(a){bm();if(a===null){throw zF(new yF(),'cmd can not be null');}zj(dm,a);}
var dm;function gm(a){if(ni(a,19)){return ak(this,mi(a,19));}return th(ui(this,em),a);}
function hm(){return uh(ui(this,em));}
function im(){return Dl(this);}
function em(){}
_=em.prototype=new rh();_.eQ=gm;_.hC=hm;_.tS=im;_.tN=fO+'Element';_.tI=46;function nm(a){return th(ui(this,jm),a);}
function om(){return uh(ui(this,jm));}
function pm(){return Dk(this);}
function jm(){}
_=jm.prototype=new rh();_.eQ=nm;_.hC=om;_.tS=pm;_.tN=fO+'Event';_.tI=47;function rm(){rm=EN;um=jK(new hK());{vm=new Fp();if(!dq(vm)){vm=null;}}}
function sm(e,d){rm();var a,c;try{tm(e);}catch(a){a=xi(a);if(ni(a,16)){c=a;nS(d,c);}else throw a;}}
function tm(a){rm();var b,c;for(b=tI(um);iI(b);){c=ri(jI(b));null.id();}}
function wm(a){rm();if(vm!==null){Cp(vm,a);}}
function xm(b){rm();var a;a=gh;if(a!==null){sm(b,a);}else{tm(b);}}
var um,vm=null;function Bm(){while((Fm(),jn).b>0){Em(mi(qK((Fm(),jn),0),20));}}
function Cm(){return null;}
function zm(){}
_=zm.prototype=new fG();_.xc=Bm;_.yc=Cm;_.tN=fO+'Timer$1';_.tI=48;function mn(){mn=EN;on=jK(new hK());En=jK(new hK());{zn();}}
function nn(a){mn();lK(on,a);}
function pn(d){mn();var a,c;try{qn();}catch(a){a=xi(a);if(ni(a,16)){c=a;nS(d,c);}else throw a;}}
function qn(){mn();var a,b;for(a=tI(on);iI(a);){b=mi(jI(a),21);b.xc();}}
function rn(d){mn();var a,c;try{return sn();}catch(a){a=xi(a);if(ni(a,16)){c=a;nS(d,c);return null;}else throw a;}}
function sn(){mn();var a,b,c,d;d=null;for(a=tI(on);iI(a);){b=mi(jI(a),21);c=b.yc();{d=c;}}return d;}
function tn(d){mn();var a,c;try{un();}catch(a){a=xi(a);if(ni(a,16)){c=a;nS(d,c);}else throw a;}}
function un(){mn();var a,b;for(a=tI(En);iI(a);){b=ri(jI(a));null.id();}}
function vn(){mn();return El();}
function wn(){mn();return Fl();}
function xn(){mn();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function yn(){mn();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function zn(){mn();__gwt_initHandlers(function(){Cn();},function(){return Bn();},function(){An();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function An(){mn();var a;a=gh;if(a!==null){pn(a);}else{qn();}}
function Bn(){mn();var a;a=gh;if(a!==null){return rn(a);}else{return sn();}}
function Cn(){mn();var a;a=gh;if(a!==null){tn(a);}else{un();}}
function Dn(c,b,a){mn();$wnd.open(c,b,a);}
var on,En;function Bo(c,b,a){b.appendChild(a);}
function Do(b,a){return $doc.createElement(a);}
function Eo(c,b,a){b.cancelBubble=a;}
function Fo(b,a){return !(!a.altKey);}
function ap(b,a){return a.button|| -1;}
function bp(b,a){return !(!a.ctrlKey);}
function cp(b,a){return a.which||(a.keyCode|| -1);}
function dp(b,a){return !(!a.metaKey);}
function ep(b,a){return !(!a.shiftKey);}
function fp(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function gp(c,b){var a=$doc.getElementById(b);return a||null;}
function jp(d,a,b){var c=a[b];return c==null?null:String(c);}
function hp(c,a,b){return !(!a[b]);}
function ip(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function kp(b,a){return a.__eventBits||0;}
function lp(c,a){var b=a.innerHTML;return b==null?null:b;}
function mp(d,b,a){var c=b.style[a];return c==null?null:c;}
function np(c,b,a){b.removeChild(a);}
function op(c,b,a,d){b.setAttribute(a,d);}
function rp(c,a,b,d){a[b]=d;}
function pp(c,a,b,d){a[b]=d;}
function qp(c,a,b,d){a[b]=d;}
function sp(c,a,b){a.__listener=b;}
function tp(c,a,b){if(!b){b='';}a.innerHTML=b;}
function up(c,b,a,d){b.style[a]=d;}
function vp(b,a){return a.outerHTML;}
function wp(a){return $doc.body.clientHeight;}
function xp(a){return $doc.body.clientWidth;}
function Fn(){}
_=Fn.prototype=new fG();_.tN=gO+'DOMImpl';_.tI=49;function co(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function eo(b,a){return $doc.createElement("<INPUT type='RADIO' name='"+a+"'>");}
function fo(b,a){return a.clientX-zo();}
function go(b,a){return a.clientY-Ao();}
function ho(b,a){return a.fromElement?a.fromElement:null;}
function io(b,a){return a.srcElement||null;}
function jo(b,a){return a.toElement||null;}
function ko(b,a){a.returnValue=false;}
function lo(b,a){if(a.toString)return a.toString();return '[object Event]';}
function mo(c,a){var b=$doc.documentElement.scrollLeft||$doc.body.scrollLeft;return a.getBoundingClientRect().left+b-zo();}
function no(c,a){var b=$doc.documentElement.scrollTop||$doc.body.scrollTop;return a.getBoundingClientRect().top+b-Ao();}
function oo(c,b){var a=b.firstChild;return a||null;}
function po(c,a){var b=a.innerText;return b==null?null:b;}
function qo(c,a){var b=a.parentElement;return b||null;}
function ro(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=yo;yo=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!nl($wnd.event)){yo=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)ok($wnd.event,a,b);yo=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function so(d,c,a,b){if(b>=c.children.length)c.appendChild(a);else c.insertBefore(a,c.children[b]);}
function to(c,b,a){while(a){if(b.uniqueID==a.uniqueID)return true;a=a.parentElement;}return false;}
function uo(b,a){a.releaseCapture();}
function vo(b,a){a.setCapture();}
function wo(c,a,b){if(!b)b='';a.innerText=b;}
function xo(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function zo(){return $doc.documentElement.clientLeft||$doc.body.clientLeft;}
function Ao(){return $doc.documentElement.clientTop||$doc.body.clientTop;}
function ao(){}
_=ao.prototype=new Fn();_.tN=gO+'DOMImplIE6';_.tI=50;var yo=null;function kq(a){return $wnd.__gwt_historyToken;}
function lq(a,b){$wnd.__gwt_historyToken=b;}
function mq(a){xm(a);}
function yp(){}
_=yp.prototype=new fG();_.tN=gO+'HistoryImpl';_.tI=51;function Bp(a){var b;a.a=Dp();if(a.a===null){return false;}cq(a);b=Ep(a.a);if(b!==null){lq(a,bq(a,b));}else{fq(a,a.a,kq(a),true);}eq(a);return true;}
function Cp(b,a){b.Db(b.a,a,false);}
function Dp(){var a=$doc.getElementById('__gwt_historyFrame');return a||null;}
function Ep(b){var c=null;if(b.contentWindow){var a=b.contentWindow.document;c=a.getElementById('__gwt_historyToken')||null;}return c;}
function zp(){}
_=zp.prototype=new yp();_.tN=gO+'HistoryImplFrame';_.tI=52;_.a=null;function bq(a,b){return b.innerText;}
function dq(a){if(!Bp(a)){return false;}hq();return true;}
function cq(c){var b=$wnd.location.hash;if(b.length>0){try{$wnd.__gwt_historyToken=decodeURIComponent(b.substring(1));}catch(a){$wnd.location.hash='';$wnd.__gwt_historyToken='';}return;}$wnd.__gwt_historyToken='';}
function eq(b){$wnd.__gwt_onHistoryLoad=function(a){if(a!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=a;$wnd.location.hash=encodeURIComponent(a);mq(a);}};}
function fq(e,c,d,b){d=gq(d||'');if(b||$wnd.__gwt_historyToken!=d){var a=c.contentWindow.document;a.open();a.write('<html><body onload="if(parent.__gwt_onHistoryLoad)parent.__gwt_onHistoryLoad(__gwt_historyToken.innerText)"><div id="__gwt_historyToken">'+d+'<\/div><\/body><\/html>');a.close();}}
function gq(b){var a;a=ck();Al(a,b);return gl(a);}
function hq(){var d=function(){var b=$wnd.location.hash;if(b.length>0){var c='';try{c=decodeURIComponent(b.substring(1));}catch(a){$wnd.location.reload();}if($wnd.__gwt_historyToken&&c!=$wnd.__gwt_historyToken){$wnd.location.reload();}}$wnd.setTimeout(d,250);};d();}
function iq(b,c,a){fq(this,b,c,a);}
function Fp(){}
_=Fp.prototype=new zp();_.Db=iq;_.tN=gO+'HistoryImplIE6';_.tI=53;function nB(b,a){aC(b.pb(),a,true);}
function pB(a){return Ek(a.jb());}
function qB(a){return Fk(a.jb());}
function rB(a){return cl(a.q,'offsetHeight');}
function sB(a){return cl(a.q,'offsetWidth');}
function tB(b,a){aC(b.pb(),a,false);}
function uB(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function vB(b,a){if(b.q!==null){uB(b,b.q,a);}b.q=a;}
function wB(b,c,a){if(c>=0){b.dd(c+'px');}if(a>=0){b.Fc(a+'px');}}
function xB(b,a){FB(b.pb(),a);}
function yB(b,a){Cl(b.jb(),a|el(b.jb()));}
function zB(){return this.q;}
function AB(){return rB(this);}
function BB(){return sB(this);}
function CB(){return this.q;}
function DB(a){return dl(a,'className');}
function EB(a){Bl(this.q,'height',a);}
function FB(a,b){xl(a,'className',b);}
function aC(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw mG(new kG(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=dH(j);if(FG(j)==0){throw DE(new CE(),'Style names cannot be empty');}i=DB(c);e=CG(i,j);while(e!=(-1)){if(e==0||yG(i,e-1)==32){f=e+FG(j);g=FG(i);if(f==g||f<g&&yG(i,f)==32){break;}}e=DG(i,j,e+1);}if(a){if(e==(-1)){if(FG(i)>0){i+=' ';}xl(c,'className',i+j);}}else{if(e!=(-1)){b=dH(cH(i,0,e));d=dH(bH(i,e+FG(j)));if(FG(b)==0){h=d;}else if(FG(d)==0){h=b;}else{h=b+' '+d;}xl(c,'className',h);}}}
function bC(a,b){a.style.display=b?'':'none';}
function cC(a){bC(this.q,a);}
function dC(a){Bl(this.q,'width',a);}
function eC(){if(this.q===null){return '(null handle)';}return Dl(this.q);}
function mB(){}
_=mB.prototype=new fG();_.jb=zB;_.nb=AB;_.ob=BB;_.pb=CB;_.Fc=EB;_.bd=cC;_.dd=dC;_.tS=eC;_.tN=hO+'UIObject';_.tI=54;_.q=null;function EC(a){if(!a.wb()){throw bF(new FE(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.wc();}finally{a.F();yl(a.jb(),null);a.o=false;}}
function FC(a){if(ni(a.p,26)){mi(a.p,26).Cc(a);}else if(a.p!==null){throw bF(new FE(),"This widget's parent does not implement HasWidgets");}}
function aD(b,a){if(b.wb()){yl(b.jb(),null);}vB(b,a);if(b.wb()){yl(a,b);}}
function bD(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.wb()){c.ec();}c.p=null;}else{if(a!==null){throw bF(new FE(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.wb()){c.ac();}}}
function cD(){}
function dD(){}
function eD(){return this.o;}
function fD(){if(this.wb()){throw bF(new FE(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;yl(this.jb(),this);this.E();this.lc();}
function gD(a){}
function hD(){EC(this);}
function iD(){}
function jD(){}
function kD(a){aD(this,a);}
function nC(){}
_=nC.prototype=new mB();_.E=cD;_.F=dD;_.wb=eD;_.ac=fD;_.cc=gD;_.ec=hD;_.lc=iD;_.wc=jD;_.Ec=kD;_.tN=hO+'Widget';_.tI=55;_.o=false;_.p=null;function vx(b,a){bD(a,b);}
function xx(b,a){bD(a,null);}
function yx(){var a,b;for(b=this.xb();b.vb();){a=mi(b.Eb(),14);a.ac();}}
function zx(){var a,b;for(b=this.xb();b.vb();){a=mi(b.Eb(),14);a.ec();}}
function Ax(){}
function Bx(){}
function ux(){}
_=ux.prototype=new nC();_.E=yx;_.F=zx;_.lc=Ax;_.wc=Bx;_.tN=hO+'Panel';_.tI=56;function pr(a){a.f=uC(new oC(),a);}
function qr(a){pr(a);return a;}
function rr(c,a,b){FC(a);vC(c.f,a);Fj(b,a.jb());vx(c,a);}
function sr(d,b,a){var c;ur(d,a);if(b.p===d){c=wr(d,b);if(c<a){a--;}}return a;}
function tr(b,a){if(a<0||a>=b.f.b){throw eF(new dF());}}
function ur(b,a){if(a<0||a>b.f.b){throw eF(new dF());}}
function xr(b,a){return xC(b.f,a);}
function wr(b,a){return yC(b.f,a);}
function yr(e,b,c,a,d){a=sr(e,b,a);FC(b);zC(e.f,b,a);if(d){ll(c,b.jb(),a);}else{Fj(c,b.jb());}vx(e,b);}
function zr(a){return AC(a.f);}
function Ar(b,c){var a;if(c.p!==b){return false;}xx(b,c);a=c.jb();pl(il(a),a);CC(b.f,c);return true;}
function Br(){return zr(this);}
function Cr(a){return Ar(this,a);}
function or(){}
_=or.prototype=new ux();_.xb=Br;_.Cc=Cr;_.tN=hO+'ComplexPanel';_.tI=57;function oq(a){qr(a);a.Ec(ck());Bl(a.jb(),'position','relative');Bl(a.jb(),'overflow','hidden');return a;}
function pq(a,b){rr(a,b,a.jb());}
function qq(b,d,a,c){FC(d);tq(b,d,a,c);pq(b,d);}
function sq(b,c){var a;a=Ar(b,c);if(a){uq(c.jb());}return a;}
function tq(c,e,b,d){var a;a=e.jb();if(b==(-1)&&d==(-1)){uq(a);}else{Bl(a,'position','absolute');Bl(a,'left',b+'px');Bl(a,'top',d+'px');}}
function uq(a){Bl(a,'left','');Bl(a,'top','');Bl(a,'position','');}
function vq(a){return sq(this,a);}
function nq(){}
_=nq.prototype=new or();_.Cc=vq;_.tN=hO+'AbsolutePanel';_.tI=58;function qt(){qt=EN;qD(),sD;}
function ot(b,a){qD(),sD;rt(b,a);return b;}
function pt(b,a){if(b.c===null){b.c=kr(new jr());}lK(b.c,a);}
function rt(b,a){aD(b,a);yB(b,7041);}
function st(a){switch(Bk(a)){case 1:if(this.c!==null){mr(this.c,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function tt(a){rt(this,a);}
function nt(){}
_=nt.prototype=new nC();_.cc=st;_.Ec=tt;_.tN=hO+'FocusWidget';_.tI=59;_.c=null;function yq(){yq=EN;qD(),sD;}
function xq(b,a){qD(),sD;ot(b,a);return b;}
function wq(){}
_=wq.prototype=new nt();_.tN=hO+'ButtonBase';_.tI=60;function Aq(a){qr(a);a.e=kk();a.d=hk();Fj(a.e,a.d);a.Ec(a.e);return a;}
function Cq(c,d,a){var b;b=il(d.jb());xl(b,'height',a);}
function Dq(c,b,a){xl(b,'align',a.a);}
function Eq(c,b,a){Bl(b,'verticalAlign',a.a);}
function Fq(b,c,d){var a;a=il(c.jb());xl(a,'width',d);}
function zq(){}
_=zq.prototype=new or();_.tN=hO+'CellPanel';_.tI=61;_.d=null;_.e=null;function cr(){cr=EN;qD(),sD;}
function br(b,a){var c;qD(),sD;xq(b,gk());b.a=a;b.b=fk();Cl(b.a,el(b.jb()));Cl(b.jb(),0);Fj(b.jb(),b.a);Fj(b.jb(),b.b);c='check'+ ++ir;xl(b.a,'id',c);xl(b.b,'htmlFor',c);return b;}
function dr(b){var a;a=b.wb()?'checked':'defaultChecked';return bl(b.a,a);}
function er(b,a){vl(b.a,'checked',a);vl(b.a,'defaultChecked',a);}
function fr(b,a){Al(b.b,a);}
function gr(){yl(this.a,this);}
function hr(){yl(this.a,null);er(this,dr(this));}
function ar(){}
_=ar.prototype=new wq();_.lc=gr;_.wc=hr;_.tN=hO+'CheckBox';_.tI=62;_.a=null;_.b=null;var ir=0;function kr(a){jK(a);return a;}
function mr(d,c){var a,b;for(a=tI(d);iI(a);){b=mi(jI(a),22);b.dc(c);}}
function jr(){}
_=jr.prototype=new hK();_.tN=hO+'ClickListenerCollection';_.tI=63;function Fr(a,b){if(a.d!==null){throw bF(new FE(),'Composite.initWidget() may only be called once.');}FC(b);a.Ec(b.jb());a.d=b;bD(b,a);}
function as(){if(this.d===null){throw bF(new FE(),'initWidget() was never called in '+fh(this));}return this.q;}
function bs(){if(this.d!==null){return this.d.wb();}return false;}
function cs(){this.d.ac();this.lc();}
function ds(){try{this.wc();}finally{this.d.ec();}}
function Dr(){}
_=Dr.prototype=new nC();_.jb=as;_.wb=bs;_.ac=cs;_.ec=ds;_.tN=hO+'Composite';_.tI=64;_.d=null;function fs(a){qr(a);a.Ec(ck());return a;}
function hs(b,c){var a;a=c.jb();Bl(a,'width','100%');Bl(a,'height','100%');c.bd(false);}
function is(b,c,a){yr(b,c,b.jb(),a,true);hs(b,c);}
function js(b,c){var a;a=Ar(b,c);if(a){ks(b,c);if(b.b===c){b.b=null;}}return a;}
function ks(a,b){Bl(b.jb(),'width','');Bl(b.jb(),'height','');b.bd(true);}
function ls(b,a){tr(b,a);if(b.b!==null){b.b.bd(false);}b.b=xr(b,a);b.b.bd(true);}
function ms(a){return js(this,a);}
function es(){}
_=es.prototype=new or();_.Cc=ms;_.tN=hO+'DeckPanel';_.tI=65;_.b=null;function pz(a){qz(a,ck());return a;}
function qz(b,a){b.Ec(a);return b;}
function rz(a,b){if(a.n!==null){throw bF(new FE(),'SimplePanel can only contain one child widget');}a.cd(b);}
function tz(a,b){if(b===a.n){return;}if(b!==null){FC(b);}if(a.n!==null){a.Cc(a.n);}a.n=b;if(b!==null){Fj(a.fb(),a.n.jb());vx(a,b);}}
function uz(){return this.jb();}
function vz(){return lz(new jz(),this);}
function wz(a){if(this.n!==a){return false;}xx(this,a);pl(this.fb(),a.jb());this.n=null;return true;}
function xz(a){tz(this,a);}
function iz(){}
_=iz.prototype=new ux();_.fb=uz;_.xb=vz;_.Cc=wz;_.cd=xz;_.tN=hO+'SimplePanel';_.tI=66;_.n=null;function cy(){cy=EN;ry=new uD();}
function Dx(a){cy();qz(a,AD(ry));iy(a,0,0);return a;}
function Ex(b,a){cy();Dx(b);b.g=a;return b;}
function Fx(c,a,b){cy();Ex(c,a);c.k=b;return c;}
function ay(b,a){if(a.blur){a.blur();}}
function by(c){var a,b,d;a=c.l;if(!a){jy(c,false);my(c);}b=qi((wn()-ey(c))/2);d=qi((vn()-dy(c))/2);iy(c,xn()+b,yn()+d);if(!a){jy(c,true);}}
function dy(a){return rB(a);}
function ey(a){return sB(a);}
function fy(b,a){if(!b.l){return;}b.l=false;sq(ez(),b);wD(ry,b.jb());}
function gy(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.Fc(a.h);}if(a.i!==null){b.dd(a.i);}}}
function hy(e,b){var a,c,d,f;d=zk(b);c=ml(e.jb(),d);f=Bk(b);switch(f){case 128:{a=(oi(wk(b)),Ew(b),true);return a&&(c|| !e.k);}case 512:{a=(oi(wk(b)),Ew(b),true);return a&&(c|| !e.k);}case 256:{a=(oi(wk(b)),Ew(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((Dj(),rl)!==null){return true;}if(!c&&e.g&&f==4){fy(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){ay(e,d);return false;}}}return !e.k||c;}
function iy(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.jb();Bl(a,'left',b+'px');Bl(a,'top',d+'px');}
function jy(a,b){Bl(a.jb(),'visibility',b?'visible':'hidden');yD(ry,a.jb(),b);}
function ky(a,b){tz(a,b);gy(a);}
function ly(a,b){a.i=b;gy(a);if(FG(b)==0){a.i=null;}}
function my(a){if(a.l){return;}a.l=true;Ej(a);Bl(a.jb(),'position','absolute');if(a.m!=(-1)){iy(a,a.j,a.m);}pq(ez(),a);xD(ry,a.jb());}
function ny(){return this.jb();}
function oy(){return dy(this);}
function py(){return ey(this);}
function qy(){return this.jb();}
function sy(){ql(this);EC(this);}
function ty(a){return hy(this,a);}
function uy(a){this.h=a;gy(this);if(FG(a)==0){this.h=null;}}
function vy(a){jy(this,a);}
function wy(a){ky(this,a);}
function xy(a){ly(this,a);}
function Cx(){}
_=Cx.prototype=new iz();_.fb=ny;_.nb=oy;_.ob=py;_.pb=qy;_.ec=sy;_.jc=ty;_.Fc=uy;_.bd=vy;_.cd=wy;_.dd=xy;_.tN=hO+'PopupPanel';_.tI=67;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var ry;function rs(){rs=EN;cy();}
function os(a){a.a=pv(new ut());a.f=at(new Cs());}
function ps(b,a){rs();qs(b,a,true);return b;}
function qs(c,a,b){rs();Fx(c,a,b);os(c);lv(c.f,0,0,c.a);c.f.Fc('100%');gv(c.f,0);iv(c.f,0);jv(c.f,0);eu(c.f.b,1,0,'100%');hu(c.f.b,1,0,'100%');du(c.f.b,1,0,(Av(),Bv),(cw(),ew));ky(c,c.f);xB(c,'gwt-DialogBox');xB(c.a,'Caption');dx(c.a,c);return c;}
function ss(b,a){tv(b.a,a);}
function ts(a){if(Bk(a)==4){if(ml(this.a.jb(),zk(a))){Ck(a);}}return hy(this,a);}
function us(a,b,c){this.e=true;tl(this.a.jb());this.c=b;this.d=c;}
function vs(a){}
function ws(a){}
function xs(c,d,e){var a,b;if(this.e){a=d+pB(this);b=e+qB(this);iy(this,a-this.c,b-this.d);}}
function ys(a,b,c){this.e=false;ol(this.a.jb());}
function zs(a){if(this.b!==a){return false;}fv(this.f,a);return true;}
function As(a){if(this.b!==null){fv(this.f,this.b);}if(a!==null){lv(this.f,1,0,a);}this.b=a;}
function Bs(a){ly(this,a);this.f.dd('100%');}
function ns(){}
_=ns.prototype=new Cx();_.jc=ts;_.mc=us;_.nc=vs;_.oc=ws;_.pc=xs;_.qc=ys;_.Cc=zs;_.cd=As;_.dd=Bs;_.tN=hO+'DialogBox';_.tI=68;_.b=null;_.c=0;_.d=0;_.e=false;function Bu(a){a.e=ru(new mu());}
function Cu(a){Bu(a);a.d=kk();a.a=hk();Fj(a.d,a.a);a.Ec(a.d);yB(a,1);return a;}
function Du(c,a){var b;b=dt(c);if(a>=b||a<0){throw fF(new dF(),'Row index: '+a+', Row size: '+b);}}
function Eu(e,c,b,a){var d;d=cu(e.b,c,b);ev(e,d,a);return d;}
function av(c,b,a){return b.rows[a].cells.length;}
function bv(a){return cv(a,a.a);}
function cv(b,a){return a.rows.length;}
function dv(b,a){var c;if(a!=dt(b)){Du(b,a);}c=jk();ll(b.a,c,a);return a;}
function ev(d,c,a){var b,e;b=fl(c);e=null;if(b!==null){e=tu(d.e,b);}if(e!==null){fv(d,e);return true;}else{if(a){zl(c,'');}return false;}}
function fv(b,c){var a;if(c.p!==b){return false;}xx(b,c);a=c.jb();pl(il(a),a);wu(b.e,a);return true;}
function gv(a,b){xl(a.d,'border',''+b);}
function hv(b,a){b.b=a;}
function iv(b,a){wl(b.d,'cellPadding',a);}
function jv(b,a){wl(b.d,'cellSpacing',a);}
function kv(b,a){b.c=a;lu(b.c);}
function lv(d,b,a,e){var c;ft(d,b,a);if(e!==null){FC(e);c=Eu(d,b,a,true);uu(d.e,e);Fj(c,e.jb());vx(d,e);}}
function mv(){return xu(this.e);}
function nv(a){switch(Bk(a)){case 1:{break;}default:}}
function ov(a){return fv(this,a);}
function vt(){}
_=vt.prototype=new ux();_.xb=mv;_.cc=nv;_.Cc=ov;_.tN=hO+'HTMLTable';_.tI=69;_.a=null;_.b=null;_.c=null;_.d=null;function at(a){Cu(a);hv(a,Es(new Ds(),a));kv(a,ju(new iu(),a));return a;}
function ct(b,a){Du(b,a);return av(b,b.a,a);}
function dt(a){return bv(a);}
function et(b,a){return dv(b,a);}
function ft(e,d,b){var a,c;gt(e,d);if(b<0){throw fF(new dF(),'Cannot create a column with a negative index: '+b);}a=ct(e,d);c=b+1-a;if(c>0){ht(e.a,d,c);}}
function gt(d,b){var a,c;if(b<0){throw fF(new dF(),'Cannot create a row with a negative index: '+b);}c=dt(d);for(a=c;a<=b;a++){et(d,a);}}
function ht(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function Cs(){}
_=Cs.prototype=new vt();_.tN=hO+'FlexTable';_.tI=70;function Ft(b,a){b.a=a;return b;}
function bu(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function cu(c,b,a){return bu(c,c.a.a,b,a);}
function du(d,c,a,b,e){fu(d,c,a,b);gu(d,c,a,e);}
function eu(e,d,a,c){var b;ft(e.a,d,a);b=bu(e,e.a.a,d,a);xl(b,'height',c);}
function fu(e,d,b,a){var c;ft(e.a,d,b);c=bu(e,e.a.a,d,b);xl(c,'align',a.a);}
function gu(d,c,b,a){ft(d.a,c,b);Bl(bu(d,d.a.a,c,b),'verticalAlign',a.a);}
function hu(c,b,a,d){ft(c.a,b,a);xl(bu(c,c.a.a,b,a),'width',d);}
function Et(){}
_=Et.prototype=new fG();_.tN=hO+'HTMLTable$CellFormatter';_.tI=71;function Es(b,a){Ft(b,a);return b;}
function Ds(){}
_=Ds.prototype=new Et();_.tN=hO+'FlexTable$FlexCellFormatter';_.tI=72;function jt(a){qr(a);a.Ec(ck());return a;}
function kt(a,b){rr(a,b,a.jb());}
function mt(b,c,a){yr(b,c,b.jb(),a,true);}
function it(){}
_=it.prototype=new or();_.tN=hO+'FlowPanel';_.tI=73;function ax(a){a.Ec(ck());yB(a,131197);xB(a,'gwt-Label');return a;}
function bx(b,a){ax(b);hx(b,a);return b;}
function cx(b,a){if(b.b===null){b.b=kr(new jr());}lK(b.b,a);}
function dx(b,a){if(b.c===null){b.c=lx(new kx());}lK(b.c,a);}
function fx(a){return hl(a.jb());}
function gx(b,a){switch(Bk(a)){case 1:if(b.b!==null){mr(b.b,b);}break;case 4:case 8:case 64:case 16:case 32:if(b.c!==null){px(b.c,b,a);}break;case 131072:break;}}
function hx(b,a){Al(b.jb(),a);}
function ix(a,b){Bl(a.jb(),'whiteSpace',b?'normal':'nowrap');}
function jx(a){gx(this,a);}
function Fw(){}
_=Fw.prototype=new nC();_.cc=jx;_.tN=hO+'Label';_.tI=74;_.b=null;_.c=null;function pv(a){ax(a);a.Ec(ck());yB(a,125);xB(a,'gwt-HTML');return a;}
function qv(b,a){pv(b);tv(b,a);return b;}
function rv(b,a,c){qv(b,a);ix(b,c);return b;}
function tv(b,a){zl(b.jb(),a);}
function ut(){}
_=ut.prototype=new Fw();_.tN=hO+'HTML';_.tI=75;function xt(a){{At(a);}}
function yt(b,a){b.b=a;xt(b);return b;}
function At(a){while(++a.a<a.b.b.b){if(qK(a.b.b,a.a)!==null){return;}}}
function Bt(a){return a.a<a.b.b.b;}
function Ct(){return Bt(this);}
function Dt(){var a;if(!Bt(this)){throw AN(new zN());}a=qK(this.b.b,this.a);At(this);return a;}
function wt(){}
_=wt.prototype=new fG();_.vb=Ct;_.Eb=Dt;_.tN=hO+'HTMLTable$1';_.tI=76;_.a=(-1);function ju(b,a){b.b=a;return b;}
function lu(a){if(a.a===null){a.a=dk('colgroup');ll(a.b.d,a.a,0);Fj(a.a,dk('col'));}}
function iu(){}
_=iu.prototype=new fG();_.tN=hO+'HTMLTable$ColumnFormatter';_.tI=77;_.a=null;function qu(a){a.b=jK(new hK());}
function ru(a){qu(a);return a;}
function tu(c,a){var b;b=zu(a);if(b<0){return null;}return mi(qK(c.b,b),14);}
function uu(b,c){var a;if(b.a===null){a=b.b.b;lK(b.b,c);}else{a=b.a.a;wK(b.b,a,c);b.a=b.a.b;}Au(c.jb(),a);}
function vu(c,a,b){yu(a);wK(c.b,b,null);c.a=ou(new nu(),b,c.a);}
function wu(c,a){var b;b=zu(a);vu(c,a,b);}
function xu(a){return yt(new wt(),a);}
function yu(a){a['__widgetID']=null;}
function zu(a){var b=a['__widgetID'];return b==null?-1:b;}
function Au(a,b){a['__widgetID']=b;}
function mu(){}
_=mu.prototype=new fG();_.tN=hO+'HTMLTable$WidgetMapper';_.tI=78;_.a=null;function ou(c,a,b){c.a=a;c.b=b;return c;}
function nu(){}
_=nu.prototype=new fG();_.tN=hO+'HTMLTable$WidgetMapper$FreeNode';_.tI=79;_.a=0;_.b=null;function Av(){Av=EN;Bv=yv(new xv(),'center');Cv=yv(new xv(),'left');yv(new xv(),'right');}
var Bv,Cv;function yv(b,a){b.a=a;return b;}
function xv(){}
_=xv.prototype=new fG();_.tN=hO+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=80;_.a=null;function cw(){cw=EN;dw=aw(new Fv(),'bottom');ew=aw(new Fv(),'middle');fw=aw(new Fv(),'top');}
var dw,ew,fw;function aw(a,b){a.a=b;return a;}
function Fv(){}
_=Fv.prototype=new fG();_.tN=hO+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=81;_.a=null;function jw(a){a.a=(Av(),Cv);a.c=(cw(),fw);}
function kw(a){Aq(a);jw(a);a.b=jk();Fj(a.d,a.b);xl(a.e,'cellSpacing','0');xl(a.e,'cellPadding','0');return a;}
function lw(b,c){var a;a=nw(b);Fj(b.b,a);rr(b,c,a);}
function nw(b){var a;a=ik();Dq(b,a,b.a);Eq(b,a,b.c);return a;}
function ow(c,d,a){var b;ur(c,a);b=nw(c);ll(c.b,b,a);yr(c,d,b,a,false);}
function pw(c,d){var a,b;b=il(d.jb());a=Ar(c,d);if(a){pl(c.b,b);}return a;}
function qw(b,a){b.c=a;}
function rw(a){return pw(this,a);}
function iw(){}
_=iw.prototype=new zq();_.Cc=rw;_.tN=hO+'HorizontalPanel';_.tI=82;_.b=null;function tw(a){a.Ec(ck());Fj(a.jb(),a.a=bk());yB(a,1);xB(a,'gwt-Hyperlink');return a;}
function uw(c,b,a){tw(c);zw(c,b);yw(c,a);return c;}
function vw(b,a){if(b.b===null){b.b=kr(new jr());}lK(b.b,a);}
function xw(a){return hl(a.a);}
function yw(b,a){b.c=a;xl(b.a,'href','#'+a);}
function zw(b,a){Al(b.a,a);}
function Aw(a){if(Bk(a)==1){if(this.b!==null){mr(this.b,this);}wm(this.c);Ck(a);}}
function sw(){}
_=sw.prototype=new nC();_.cc=Aw;_.tN=hO+'Hyperlink';_.tI=83;_.a=null;_.b=null;_.c=null;function Ew(a){return (yk(a)?1:0)|(xk(a)?8:0)|(uk(a)?2:0)|(qk(a)?4:0);}
function lx(a){jK(a);return a;}
function nx(d,c,e,f){var a,b;for(a=tI(d);iI(a);){b=mi(jI(a),23);b.mc(c,e,f);}}
function ox(d,c){var a,b;for(a=tI(d);iI(a);){b=mi(jI(a),23);b.nc(c);}}
function px(e,c,a){var b,d,f,g,h;d=c.jb();g=sk(a)-Ek(d)+cl(d,'scrollLeft')+xn();h=tk(a)-Fk(d)+cl(d,'scrollTop')+yn();switch(Bk(a)){case 4:nx(e,c,g,h);break;case 8:sx(e,c,g,h);break;case 64:rx(e,c,g,h);break;case 16:b=vk(a);if(!ml(d,b)){ox(e,c);}break;case 32:f=Ak(a);if(!ml(d,f)){qx(e,c);}break;}}
function qx(d,c){var a,b;for(a=tI(d);iI(a);){b=mi(jI(a),23);b.oc(c);}}
function rx(d,c,e,f){var a,b;for(a=tI(d);iI(a);){b=mi(jI(a),23);b.pc(c,e,f);}}
function sx(d,c,e,f){var a,b;for(a=tI(d);iI(a);){b=mi(jI(a),23);b.qc(c,e,f);}}
function kx(){}
_=kx.prototype=new hK();_.tN=hO+'MouseListenerCollection';_.tI=84;function By(){By=EN;qD(),sD;}
function zy(b,a){qD(),sD;br(b,ek(a));xB(b,'gwt-RadioButton');return b;}
function Ay(c,b,a){qD(),sD;zy(c,b);fr(c,a);return c;}
function yy(){}
_=yy.prototype=new ar();_.tN=hO+'RadioButton';_.tI=85;function cz(){cz=EN;hz=qM(new uL());}
function bz(b,a){cz();oq(b);if(a===null){a=dz();}b.Ec(a);b.ac();return b;}
function ez(){cz();return fz(null);}
function fz(c){cz();var a,b;b=mi(wM(hz,c),24);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=al(c))){return null;}}if(hz.c==0){gz();}xM(hz,c,b=bz(new Cy(),a));return b;}
function dz(){cz();return $doc.body;}
function gz(){cz();nn(new Dy());}
function Cy(){}
_=Cy.prototype=new nq();_.tN=hO+'RootPanel';_.tI=86;var hz;function Fy(){var a,b;for(b=nJ(BJ((cz(),hz)));uJ(b);){a=mi(vJ(b),24);if(a.wb()){a.ec();}}}
function az(){return null;}
function Dy(){}
_=Dy.prototype=new fG();_.xc=Fy;_.yc=az;_.tN=hO+'RootPanel$1';_.tI=87;function kz(a){a.a=a.b.n!==null;}
function lz(b,a){b.b=a;kz(b);return b;}
function nz(){return this.a;}
function oz(){if(!this.a||this.b.n===null){throw AN(new zN());}this.a=false;return this.b.n;}
function jz(){}
_=jz.prototype=new fG();_.vb=nz;_.Eb=oz;_.tN=hO+'SimplePanel$1';_.tI=88;function bA(a){a.a=kw(new iw());}
function cA(c){var a,b;bA(c);Fr(c,c.a);yB(c,1);xB(c,'gwt-TabBar');qw(c.a,(cw(),dw));a=rv(new ut(),'&nbsp;',true);b=rv(new ut(),'&nbsp;',true);xB(a,'gwt-TabBarFirst');xB(b,'gwt-TabBarRest');a.Fc('100%');b.Fc('100%');lw(c.a,a);lw(c.a,b);a.Fc('100%');Cq(c.a,a,'100%');Fq(c.a,b,'100%');return c;}
function dA(b,a){if(b.c===null){b.c=oA(new nA());}lK(b.c,a);}
function eA(b,a){if(a<0||a>hA(b)){throw eF(new dF());}}
function fA(b,a){if(a<(-1)||a>=hA(b)){throw eF(new dF());}}
function hA(a){return a.a.f.b-2;}
function iA(e,d,a,b){var c;eA(e,b);if(a){c=qv(new ut(),d);}else{c=bx(new Fw(),d);}ix(c,false);cx(c,e);xB(c,'gwt-TabBarItem');ow(e.a,c,b+1);}
function jA(b,a){var c;fA(b,a);c=xr(b.a,a+1);if(c===b.b){b.b=null;}pw(b.a,c);}
function kA(b,a){fA(b,a);if(b.c!==null){if(!qA(b.c,b,a)){return false;}}lA(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=xr(b.a,a+1);lA(b,b.b,true);if(b.c!==null){rA(b.c,b,a);}return true;}
function lA(c,a,b){if(a!==null){if(b){nB(a,'gwt-TabBarItem-selected');}else{tB(a,'gwt-TabBarItem-selected');}}}
function mA(b){var a;for(a=1;a<this.a.f.b-1;++a){if(xr(this.a,a)===b){kA(this,a-1);return;}}}
function aA(){}
_=aA.prototype=new Dr();_.dc=mA;_.tN=hO+'TabBar';_.tI=89;_.b=null;_.c=null;function oA(a){jK(a);return a;}
function qA(e,c,d){var a,b;for(a=tI(e);iI(a);){b=mi(jI(a),25);if(!b.bc(c,d)){return false;}}return true;}
function rA(e,c,d){var a,b;for(a=tI(e);iI(a);){b=mi(jI(a),25);b.vc(c,d);}}
function nA(){}
_=nA.prototype=new hK();_.tN=hO+'TabListenerCollection';_.tI=90;function FA(a){a.b=BA(new AA());a.a=vA(new uA(),a.b);}
function aB(b){var a;FA(b);a=hC(new fC());iC(a,b.b);iC(a,b.a);Cq(a,b.a,'100%');b.b.dd('100%');dA(b.b,b);Fr(b,a);xB(b,'gwt-TabPanel');xB(b.a,'gwt-TabPanelBottom');return b;}
function cB(b,c,a){fB(b,c,a,b.a.f.b);}
function bB(b,a){if(b.c===null){b.c=oA(new nA());}lK(b.c,a);}
function eB(b,a){return xr(b.a,a);}
function gB(d,e,c,a,b){xA(d.a,e,c,a,b);}
function fB(c,d,b,a){gB(c,d,b,false,a);}
function hB(b,a){kA(b.b,a);}
function iB(){return zr(this.a);}
function jB(a,b){if(this.c!==null){return qA(this.c,this,b);}return true;}
function kB(a,b){ls(this.a,b);if(this.c!==null){rA(this.c,this,b);}}
function lB(a){return yA(this.a,a);}
function tA(){}
_=tA.prototype=new Dr();_.xb=iB;_.bc=jB;_.vc=kB;_.Cc=lB;_.tN=hO+'TabPanel';_.tI=91;_.c=null;function vA(b,a){fs(b);b.a=a;return b;}
function xA(e,f,d,a,b){var c;c=wr(e,f);if(c!=(-1)){yA(e,f);if(c<b){b--;}}DA(e.a,d,a,b);is(e,f,b);}
function yA(b,c){var a;a=wr(b,c);if(a!=(-1)){EA(b.a,a);return js(b,c);}return false;}
function zA(a){return yA(this,a);}
function uA(){}
_=uA.prototype=new es();_.Cc=zA;_.tN=hO+'TabPanel$TabbedDeckPanel';_.tI=92;_.a=null;function BA(a){cA(a);return a;}
function DA(d,c,a,b){iA(d,c,a,b);}
function EA(b,a){jA(b,a);}
function AA(){}
_=AA.prototype=new aA();_.tN=hO+'TabPanel$UnmodifiableTabBar';_.tI=93;function gC(a){a.a=(Av(),Cv);a.b=(cw(),fw);}
function hC(a){Aq(a);gC(a);xl(a.e,'cellSpacing','0');xl(a.e,'cellPadding','0');return a;}
function iC(b,d){var a,c;c=jk();a=kC(b);Fj(c,a);Fj(b.d,c);rr(b,d,a);}
function kC(b){var a;a=ik();Dq(b,a,b.a);Eq(b,a,b.b);return a;}
function lC(c,e,a){var b,d;ur(c,a);d=jk();b=kC(c);Fj(d,b);ll(c.d,d,a);yr(c,e,b,a,false);}
function mC(c){var a,b;b=il(c.jb());a=Ar(this,c);if(a){pl(this.d,il(b));}return a;}
function fC(){}
_=fC.prototype=new zq();_.Cc=mC;_.tN=hO+'VerticalPanel';_.tI=94;function uC(b,a){b.a=gi('[Lcom.google.gwt.user.client.ui.Widget;',[171],[14],[4],null);return b;}
function vC(a,b){zC(a,b,a.b);}
function xC(b,a){if(a<0||a>=b.b){throw eF(new dF());}return b.a[a];}
function yC(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function zC(d,e,a){var b,c;if(a<0||a>d.b){throw eF(new dF());}if(d.b==d.a.a){c=gi('[Lcom.google.gwt.user.client.ui.Widget;',[171],[14],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ii(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ii(d.a,b,d.a[b-1]);}ii(d.a,a,e);}
function AC(a){return qC(new pC(),a);}
function BC(c,b){var a;if(b<0||b>=c.b){throw eF(new dF());}--c.b;for(a=b;a<c.b;++a){ii(c.a,a,c.a[a+1]);}ii(c.a,c.b,null);}
function CC(b,c){var a;a=yC(b,c);if(a==(-1)){throw AN(new zN());}BC(b,a);}
function oC(){}
_=oC.prototype=new fG();_.tN=hO+'WidgetCollection';_.tI=95;_.a=null;_.b=0;function qC(b,a){b.b=a;return b;}
function sC(){return this.a<this.b.b-1;}
function tC(){if(this.a>=this.b.b){throw AN(new zN());}return this.b.a[++this.a];}
function pC(){}
_=pC.prototype=new fG();_.vb=sC;_.Eb=tC;_.tN=hO+'WidgetCollection$WidgetIterator';_.tI=96;_.a=(-1);function qD(){qD=EN;rD=nD(new mD());sD=rD;}
function pD(a){qD();return a;}
function lD(){}
_=lD.prototype=new fG();_.tN=iO+'FocusImpl';_.tI=97;var rD,sD;function oD(){oD=EN;qD();}
function nD(a){oD();pD(a);return a;}
function mD(){}
_=mD.prototype=new lD();_.tN=iO+'FocusImplIE6';_.tI=98;function AD(a){return ck();}
function tD(){}
_=tD.prototype=new fG();_.tN=iO+'PopupImpl';_.tI=99;function wD(c,b){var a=b.__frame;a.parentElement.removeChild(a);b.__frame=null;a.__popup=null;}
function xD(d,b){var a=$doc.createElement('iframe');a.src="javascript:''";a.scrolling='no';a.frameBorder=0;b.__frame=a;a.__popup=b;var c=a.style;c.position='absolute';c.filter='alpha(opacity=0)';c.visibility=b.style.visibility;c.left=b.offsetLeft;c.top=b.offsetTop;c.width=b.offsetWidth;c.height=b.offsetHeight;c.setExpression('left','this.__popup.offsetLeft');c.setExpression('top','this.__popup.offsetTop');c.setExpression('width','this.__popup.offsetWidth');c.setExpression('height','this.__popup.offsetHeight');b.parentElement.insertBefore(a,b);}
function yD(b,a,c){if(a.__frame){a.__frame.style.visibility=c?'visible':'hidden';}}
function uD(){}
_=uD.prototype=new tD();_.tN=iO+'PopupImplIE6';_.tI=100;function ED(){}
_=ED.prototype=new fG();_.tN=jO+'OutputStream';_.tI=101;function CD(){}
_=CD.prototype=new ED();_.tN=jO+'FilterOutputStream';_.tI=102;function aE(){}
_=aE.prototype=new CD();_.tN=jO+'PrintStream';_.tI=103;function eE(){eE=EN;nG();}
function dE(a){eE();lG(a);return a;}
function cE(){}
_=cE.prototype=new kG();_.tN=kO+'ArrayStoreException';_.tI=104;function hE(){hE=EN;iE=gE(new fE(),false);jE=gE(new fE(),true);}
function gE(a,b){hE();a.a=b;return a;}
function kE(a){return ni(a,30)&&mi(a,30).a==this.a;}
function lE(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function mE(){return this.a?'true':'false';}
function nE(a){hE();return a?jE:iE;}
function fE(){}
_=fE.prototype=new fG();_.eQ=kE;_.hC=lE;_.tS=mE;_.tN=kO+'Boolean';_.tI=105;_.a=false;var iE,jE;function rE(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+tF(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function vE(){vE=EN;nG();}
function tE(a){vE();lG(a);return a;}
function uE(b,a){vE();mG(b,a);return b;}
function sE(){}
_=sE.prototype=new kG();_.tN=kO+'ClassCastException';_.tI=106;function EE(){EE=EN;nG();}
function DE(b,a){EE();mG(b,a);return b;}
function CE(){}
_=CE.prototype=new kG();_.tN=kO+'IllegalArgumentException';_.tI=107;function cF(){cF=EN;nG();}
function aF(a){cF();lG(a);return a;}
function bF(b,a){cF();mG(b,a);return b;}
function FE(){}
_=FE.prototype=new kG();_.tN=kO+'IllegalStateException';_.tI=108;function gF(){gF=EN;nG();}
function eF(a){gF();lG(a);return a;}
function fF(b,a){gF();mG(b,a);return b;}
function dF(){}
_=dF.prototype=new kG();_.tN=kO+'IndexOutOfBoundsException';_.tI=109;function FF(){FF=EN;{eG();}}
function aG(a){FF();return isNaN(a);}
function bG(e,d,c,h){FF();var a,b,f,g;if(e===null){throw DF(new CF(),'Unable to parse null');}b=FG(e);f=b>0&&yG(e,0)==45?1:0;for(a=f;a<b;a++){if(rE(yG(e,a),d)==(-1)){throw DF(new CF(),'Could not parse '+e+' in radix '+d);}}g=cG(e,d);if(aG(g)){throw DF(new CF(),'Unable to parse '+e);}else if(g<c||g>h){throw DF(new CF(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function cG(b,a){FF();return parseInt(b,a);}
function eG(){FF();dG=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var dG=null;function iF(){iF=EN;FF();}
function lF(a){iF();return mF(a,10);}
function mF(b,a){iF();return pi(bG(b,a,(-2147483648),2147483647));}
function nF(a){iF();return lH(a);}
var jF=2147483647,kF=(-2147483648);function qF(a){return a<0?-a:a;}
function rF(a){return a<0?-a:a;}
function sF(a,b){return a>b?a:b;}
function tF(a,b){return a<b?a:b;}
function uF(a){return Math.sqrt(a);}
function xF(){xF=EN;nG();}
function wF(a){xF();lG(a);return a;}
function vF(){}
_=vF.prototype=new kG();_.tN=kO+'NegativeArraySizeException';_.tI=110;function AF(){AF=EN;nG();}
function zF(b,a){AF();mG(b,a);return b;}
function yF(){}
_=yF.prototype=new kG();_.tN=kO+'NullPointerException';_.tI=111;function EF(){EF=EN;EE();}
function DF(b,a){EF();DE(b,a);return b;}
function CF(){}
_=CF.prototype=new CE();_.tN=kO+'NumberFormatException';_.tI=112;function yG(b,a){return b.charCodeAt(a);}
function AG(f,c){var a,b,d,e,g,h;h=FG(f);e=FG(c);b=tF(h,e);for(a=0;a<b;a++){g=yG(f,a);d=yG(c,a);if(g!=d){return g-d;}}return h-e;}
function BG(b,a){if(!ni(a,1))return false;return eH(b,a);}
function CG(b,a){return b.indexOf(a);}
function DG(c,b,a){return c.indexOf(b,a);}
function EG(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function FG(a){return a.length;}
function aH(c,a,b){b=fH(b);return c.replace(RegExp(a,'g'),b);}
function bH(b,a){return b.substr(a,b.length-a);}
function cH(c,a,b){return c.substr(a,b-a);}
function dH(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function eH(a,b){return String(a)==b;}
function fH(b){var a;a=0;while(0<=(a=DG(b,'\\',a))){if(yG(b,a+1)==36){b=cH(b,0,a)+'$'+bH(b,++a);}else{b=cH(b,0,a)+bH(b,++a);}}return b;}
function gH(a){if(ni(a,1)){return AG(this,mi(a,1));}else{throw uE(new sE(),'Cannot compare '+a+" with String '"+this+"'");}}
function hH(a){return BG(this,a);}
function jH(){var a=iH;if(!a){a=iH={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function kH(){return this;}
function lH(a){return ''+a;}
function mH(a){return a!==null?a.tS():'null';}
_=String.prototype;_.v=gH;_.eQ=hH;_.hC=jH;_.tS=kH;_.tN=kO+'String';_.tI=2;var iH=null;function qG(a){sG(a);return a;}
function rG(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function sG(a){tG(a,'');}
function tG(b,a){b.js=[a];b.length=a.length;}
function vG(a){a.Fb();return a.js[0];}
function wG(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function xG(){return vG(this);}
function pG(){}
_=pG.prototype=new fG();_.Fb=wG;_.tS=xG;_.tN=kO+'StringBuffer';_.tI=113;function oH(){oH=EN;qH=new aE();}
function pH(){oH();return new Date().getTime();}
function rH(a){oH();return lh(a);}
var qH;function DH(){DH=EN;nG();}
function BH(a){DH();lG(a);return a;}
function CH(b,a){DH();mG(b,a);return b;}
function AH(){}
_=AH.prototype=new kG();_.tN=kO+'UnsupportedOperationException';_.tI=114;function gI(b,a){b.c=a;return b;}
function iI(a){return a.a<a.c.ed();}
function jI(a){if(!iI(a)){throw AN(new zN());}return a.c.tb(a.b=a.a++);}
function kI(a){if(a.b<0){throw aF(new FE());}a.c.Bc(a.b);a.a=a.b;a.b=(-1);}
function lI(){return iI(this);}
function mI(){return jI(this);}
function nI(){kI(this);}
function fI(){}
_=fI.prototype=new fG();_.vb=lI;_.Eb=mI;_.Ac=nI;_.tN=lO+'AbstractList$IteratorImpl';_.tI=115;_.a=0;_.b=(-1);function pI(b,a){gI(b,a);return b;}
function oI(){}
_=oI.prototype=new fI();_.tN=lO+'AbstractList$ListIteratorImpl';_.tI=116;function zJ(f,d,e){var a,b,c;for(b=lM(f.ab());dM(b);){a=eM(b);c=a.lb();if(d===null?c===null:d.eQ(c)){if(e){fM(b);}return a;}}return null;}
function AJ(b){var a;a=b.ab();return DI(new CI(),b,a);}
function BJ(b){var a;a=vM(b);return lJ(new kJ(),b,a);}
function CJ(a){return zJ(this,a,false)!==null;}
function DJ(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ni(d,32)){return false;}f=mi(d,32);c=AJ(this);e=f.yb();if(!eK(c,e)){return false;}for(a=FI(c);gJ(a);){b=hJ(a);h=this.ub(b);g=f.ub(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function EJ(b){var a;a=zJ(this,b,false);return a===null?null:a.rb();}
function FJ(){var a,b,c;b=0;for(c=lM(this.ab());dM(c);){a=eM(c);b+=a.hC();}return b;}
function aK(){return AJ(this);}
function bK(){var a,b,c,d;d='{';a=false;for(c=lM(this.ab());dM(c);){b=eM(c);if(a){d+=', ';}else{a=true;}d+=mH(b.lb());d+='=';d+=mH(b.rb());}return d+'}';}
function BI(){}
_=BI.prototype=new fG();_.z=CJ;_.eQ=DJ;_.ub=EJ;_.hC=FJ;_.yb=aK;_.tS=bK;_.tN=lO+'AbstractMap';_.tI=117;function eK(e,b){var a,c,d;if(b===e){return true;}if(!ni(b,33)){return false;}c=mi(b,33);if(c.ed()!=e.ed()){return false;}for(a=c.xb();a.vb();){d=a.Eb();if(!e.A(d)){return false;}}return true;}
function fK(a){return eK(this,a);}
function gK(){var a,b,c;a=0;for(b=this.xb();b.vb();){c=b.Eb();if(c!==null){a+=c.hC();}}return a;}
function cK(){}
_=cK.prototype=new EH();_.eQ=fK;_.hC=gK;_.tN=lO+'AbstractSet';_.tI=118;function DI(b,a,c){b.a=a;b.b=c;return b;}
function FI(b){var a;a=lM(b.b);return eJ(new dJ(),b,a);}
function aJ(a){return this.a.z(a);}
function bJ(){return FI(this);}
function cJ(){return this.b.a.c;}
function CI(){}
_=CI.prototype=new cK();_.A=aJ;_.xb=bJ;_.ed=cJ;_.tN=lO+'AbstractMap$1';_.tI=119;function eJ(b,a,c){b.a=c;return b;}
function gJ(a){return dM(a.a);}
function hJ(b){var a;a=eM(b.a);return a.lb();}
function iJ(){return gJ(this);}
function jJ(){return hJ(this);}
function dJ(){}
_=dJ.prototype=new fG();_.vb=iJ;_.Eb=jJ;_.tN=lO+'AbstractMap$2';_.tI=120;function lJ(b,a,c){b.a=a;b.b=c;return b;}
function nJ(b){var a;a=lM(b.b);return sJ(new rJ(),b,a);}
function oJ(a){return uM(this.a,a);}
function pJ(){return nJ(this);}
function qJ(){return this.b.a.c;}
function kJ(){}
_=kJ.prototype=new EH();_.A=oJ;_.xb=pJ;_.ed=qJ;_.tN=lO+'AbstractMap$3';_.tI=121;function sJ(b,a,c){b.a=c;return b;}
function uJ(a){return dM(a.a);}
function vJ(a){var b;b=eM(a.a).rb();return b;}
function wJ(){return uJ(this);}
function xJ(){return vJ(this);}
function rJ(){}
_=rJ.prototype=new fG();_.vb=wJ;_.Eb=xJ;_.tN=lO+'AbstractMap$4';_.tI=122;function fL(b){var a,c;a=jK(new hK());for(c=0;c<b.a;c++){lK(a,b[c]);}return a;}
function gL(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.w(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function hL(a){gL(a,a.a,(oL(),pL));}
function oL(){oL=EN;pL=new lL();}
var pL;function nL(a,b){return mi(a,38).v(b);}
function lL(){}
_=lL.prototype=new fG();_.w=nL;_.tN=lO+'Comparators$1';_.tI=123;function sM(){sM=EN;zM=FM();}
function pM(a){{rM(a);}}
function qM(a){sM();pM(a);return a;}
function rM(a){a.a=vh();a.d=wh();a.b=ui(zM,rh);a.c=0;}
function tM(b,a){if(ni(a,1)){return dN(b.d,mi(a,1))!==zM;}else if(a===null){return b.b!==zM;}else{return cN(b.a,a,a.hC())!==zM;}}
function uM(a,b){if(a.b!==zM&&bN(a.b,b)){return true;}else if(EM(a.d,b)){return true;}else if(CM(a.a,b)){return true;}return false;}
function vM(a){return iM(new FL(),a);}
function wM(c,a){var b;if(ni(a,1)){b=dN(c.d,mi(a,1));}else if(a===null){b=c.b;}else{b=cN(c.a,a,a.hC());}return b===zM?null:b;}
function xM(c,a,d){var b;if(ni(a,1)){b=gN(c.d,mi(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=fN(c.a,a,d,a.hC());}if(b===zM){++c.c;return null;}else{return b;}}
function yM(c,a){var b;if(ni(a,1)){b=iN(c.d,mi(a,1));}else if(a===null){b=c.b;c.b=ui(zM,rh);}else{b=hN(c.a,a,a.hC());}if(b===zM){return null;}else{--c.c;return b;}}
function AM(e,c){sM();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function BM(d,a){sM();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=yL(c.substring(1),e);a.s(b);}}}
function CM(f,h){sM();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.rb();if(bN(h,d)){return true;}}}}return false;}
function DM(a){return tM(this,a);}
function EM(c,d){sM();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(bN(d,a)){return true;}}}return false;}
function FM(){sM();}
function aN(){return vM(this);}
function bN(a,b){sM();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function eN(a){return wM(this,a);}
function cN(f,h,e){sM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(bN(h,d)){return c.rb();}}}}
function dN(b,a){sM();return b[':'+a];}
function fN(f,h,j,e){sM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(bN(h,d)){var i=c.rb();c.ad(j);return i;}}}else{a=f[e]=[];}var c=yL(h,j);a.push(c);}
function gN(c,a,d){sM();a=':'+a;var b=c[a];c[a]=d;return b;}
function hN(f,h,e){sM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(bN(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.rb();}}}}
function iN(c,a){sM();a=':'+a;var b=c[a];delete c[a];return b;}
function uL(){}
_=uL.prototype=new BI();_.z=DM;_.ab=aN;_.ub=eN;_.tN=lO+'HashMap';_.tI=124;_.a=null;_.b=null;_.c=0;_.d=null;var zM;function wL(b,a,c){b.a=a;b.b=c;return b;}
function yL(a,b){return wL(new vL(),a,b);}
function zL(b){var a;if(ni(b,39)){a=mi(b,39);if(bN(this.a,a.lb())&&bN(this.b,a.rb())){return true;}}return false;}
function AL(){return this.a;}
function BL(){return this.b;}
function CL(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function DL(a){var b;b=this.b;this.b=a;return b;}
function EL(){return this.a+'='+this.b;}
function vL(){}
_=vL.prototype=new fG();_.eQ=zL;_.lb=AL;_.rb=BL;_.hC=CL;_.ad=DL;_.tS=EL;_.tN=lO+'HashMap$EntryImpl';_.tI=125;_.a=null;_.b=null;function iM(b,a){b.a=a;return b;}
function kM(d,c){var a,b,e;if(ni(c,39)){a=mi(c,39);b=a.lb();if(tM(d.a,b)){e=wM(d.a,b);return bN(a.rb(),e);}}return false;}
function lM(a){return bM(new aM(),a.a);}
function mM(a){return kM(this,a);}
function nM(){return lM(this);}
function oM(){return this.a.c;}
function FL(){}
_=FL.prototype=new cK();_.A=mM;_.xb=nM;_.ed=oM;_.tN=lO+'HashMap$EntrySet';_.tI=126;function bM(c,b){var a;c.c=b;a=jK(new hK());if(c.c.b!==(sM(),zM)){lK(a,wL(new vL(),null,c.c.b));}BM(c.c.d,a);AM(c.c.a,a);c.a=tI(a);return c;}
function dM(a){return iI(a.a);}
function eM(a){return a.b=mi(jI(a.a),39);}
function fM(a){if(a.b===null){throw bF(new FE(),'Must call next() before remove().');}else{kI(a.a);yM(a.c,a.b.lb());a.b=null;}}
function gM(){return dM(this);}
function hM(){return eM(this);}
function aM(){}
_=aM.prototype=new fG();_.vb=gM;_.Eb=hM;_.tN=lO+'HashMap$EntrySetIterator';_.tI=127;_.a=null;_.b=null;function kN(a){a.a=qM(new uL());return a;}
function lN(c,a){var b;b=xM(c.a,a,nE(true));return b===null;}
function nN(a){return FI(AJ(a.a));}
function oN(b,a){return yM(b.a,a)!==null;}
function pN(a){return lN(this,a);}
function qN(a){return tM(this.a,a);}
function rN(){return nN(this);}
function sN(){return this.a.c;}
function tN(){return AJ(this.a).tS();}
function jN(){}
_=jN.prototype=new cK();_.s=pN;_.A=qN;_.xb=rN;_.ed=sN;_.tS=tN;_.tN=lO+'HashSet';_.tI=128;_.a=null;function BN(){BN=EN;nG();}
function AN(a){BN();lG(a);return a;}
function zN(){}
_=zN.prototype=new kG();_.tN=lO+'NoSuchElementException';_.tI=129;function tO(){}
_=tO.prototype=new fG();_.tN=mO+'BezierCurve';_.tI=130;function vO(a){a.b=ck();a.c=ck();{if(!DO){DO=BO(a);}a.e=dk('g_vml_:group');a.d=dk('g_vml_:curve');Fj(a.e,a.d);ul(a.e,'class','gwt-diagrams-vml-group');ul(a.d,'class','gwt-diagrams-vml-curve');Fj(ez().jb(),a.e);Fj(ez().jb(),a.c);xl(a.c,'className','gwt-diagrams-vml-curve');ul(a.d,'strokecolor',EO(a.c,'color'));ul(a.d,'strokeweight',EO(a.c,'width'));ul(a.d,'filled','false');Bl(a.e,'width','100px');Bl(a.e,'height','100px');Bl(a.e,'position','absolute');ul(a.e,'coordsize','100,100');}}
function wO(a){vO(a);return a;}
function zO(f,c,d,a,b){var e;if(!f.a){Fj(il(f.b),f.e);pl(il(f.b),f.b);f.b=null;f.a=true;}ul(f.d,'strokecolor',EO(f.c,'color'));ul(f.d,'strokeweight',EO(f.c,'width'));e=CQ(new BQ(),tF(c.a,d.a),tF(c.b,d.b));Bl(f.e,'left',nF(e.a));Bl(f.e,'top',nF(e.b));yO(f,FQ(c,bR(e)),FQ(d,bR(e)),FQ(a,bR(e)),FQ(b,bR(e)));}
function yO(e,c,d,a,b){ul(e.d,'from',c.a+','+c.b);ul(e.d,'to',d.a+','+d.b);ul(e.d,'control1',a.a+','+a.b);ul(e.d,'control2',b.a+','+b.b);}
function AO(a){if(a.a){return a.d;}else{return a.b;}}
function BO(b){if(!$doc.namespaces['g_vml_']){$doc.namespaces.add('g_vml_','urn:schemas-microsoft-com:vml');}var a=$doc.createStyleSheet();a.cssText='g_vml_\\:*{behavior:url(#default#VML)}';return true;}
function CO(a){pl(ez().jb(),a.c);}
function EO(b,a){if(b.currentStyle){return b.currentStyle[a];}else{return null;}}
function uO(){}
_=uO.prototype=new tO();_.tN=mO+'BezierCurveVml';_.tI=131;_.a=false;_.d=null;_.e=null;var DO=false;function bP(a){a.c=jK(new hK());}
function cP(c,d){var a,b;bP(c);kK(c.c,d);iP(c,c.B());for(b=tI(c.c);iI(b);){a=mi(jI(b),35);a.x(c);}return c;}
function dP(a,b){cP(a,fL(b));return a;}
function fP(a){return a.b.u(a.c);}
function gP(c,a){var b;b=rK(c.c,a);if(b>(-1)){vK(c.c,a);gR(a,c);}}
function hP(c){var a,b;for(b=uI(c.c);b.vb();){a=mi(b.Eb(),35);b.Ac();a.D(c);}FC(c);}
function iP(b,a){b.b=a;}
function jP(a){a.gd(fP(a));}
function kP(){hP(this);}
function lP(){jP(this);}
function aP(){}
_=aP.prototype=new nC();_.Ac=kP;_.fd=lP;_.tN=nO+'AbstractConnection';_.tI=132;_.b=null;function nP(a){a.a=wO(new uO());}
function pP(a,b){dP(a,b);nP(a);if(b.a!=2){throw DE(new CE(),'Need exactly two connectors to connect');}a.Ec(AO(a.a));nB(a,'gwt-diagrams-connection');return a;}
function oP(c,a,b){pP(c,hi('[Lpl.balon.gwt.diagrams.client.connector.Connector;',167,35,[a,b]));return c;}
function rP(){return new dQ();}
function sP(){return AO(this.a);}
function tP(){CO(this.a);hP(this);}
function uP(b){var a;if(!ni(b,40)){throw DE(new CE(),'Expected BezierConnectionData');}a=mi(b,40);if(a.b.b!=2){throw DE(new CE(),'Expected two connection points');}if(a.a.b!=2){throw DE(new CE(),'Expected two control points');}zO(this.a,mi(qK(a.b,0),37),mi(qK(a.b,1),37),mi(qK(a.a,0),37),mi(qK(a.a,1),37));}
function mP(){}
_=mP.prototype=new aP();_.B=rP;_.jb=sP;_.Ac=tP;_.gd=uP;_.tN=nO+'BezierTwoEndedConnection';_.tI=133;function xP(a){a.a=jK(new hK());}
function zP(a,b){dP(a,b);xP(a);if(b.a!=2){throw DE(new CE(),'Need exactly two connectors to connect');}a.Ec(ck());nB(a,'gwt-diagrams-connection');return a;}
function yP(c,a,b){zP(c,hi('[Lpl.balon.gwt.diagrams.client.connector.Connector;',167,35,[a,b]));return c;}
function BP(d,a){var b,c;for(c=d.a.b;c<a;c++){b=ck();lK(d.a,ui(b,em));Fj(d.jb(),b);zl(b,'&nbsp;');}while(d.a.b>a){b=mi(qK(d.a,0),19);vK(d.a,ui(b,em));pl(d.jb(),b);}}
function CP(){return new iQ();}
function DP(a){var b,c,d,e,f;if(a.b.b<=1){throw DE(new CE(),'Too few connection points');}BP(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=mi(qK(this.a,d),19);e=mi(qK(a.b,d),37);c=mi(qK(a.b,d+1),37);f='gwt-diagrams-line';ul(b,'style','');xl(b,'className',f);Bl(b,'height','1');Bl(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Bl(b,'height',nF(qF(e.b-c.b)));}else if(e.b==c.b){Bl(b,'width',nF(qF(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Bl(b,'left',nF(tF(e.a,c.a)));Bl(b,'top',nF(tF(e.b,c.b)));xl(b,'className',f);}}
function wP(){}
_=wP.prototype=new aP();_.B=CP;_.gd=DP;_.tN=nO+'RectilinearTwoEndedConnection';_.tI=134;function FP(c,a,b){oP(c,a,b);return c;}
function bQ(){return new oQ();}
function cQ(a){if(a.b.b!=2){throw DE(new CE(),'Expected two connection points');}zO(this.a,mi(qK(a.b,0),37),mi(qK(a.b,1),37),mi(qK(a.b,1),37),mi(qK(a.b,0),37));}
function EP(){}
_=EP.prototype=new mP();_.B=bQ;_.gd=cQ;_.tN=nO+'StraightTwoEndedConnection';_.tI=135;function fQ(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=gi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[166],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=EQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function gQ(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw DE(new CE(),'Unsupported connectors count');}c=mi(qK(e,0),35);d=mi(qK(e,1),35);f=fQ(this,c,d);h=c.zc(f[0]);i=d.zc(f[1]);a=aR(h,f[0],50);b=aR(i,f[1],50);g=uQ(new rQ(),hi('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',172,37,[h,i]),hi('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',172,37,[a,b]));return g;}
function dQ(){}
_=dQ.prototype=new fG();_.u=gQ;_.tN=oO+'BezierConnectionCalculator';_.tI=136;function jQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(rR(),uR);}if(c==1&&d>0){return a!==(rR(),vR);}if(c==0&&d<0){return a!==(rR(),vR);}if(c==1&&d<0){return a!==(rR(),uR);}}else{if(c==0&&d>0){return a!==(rR(),wR);}if(c==1&&d>0){return a!==(rR(),tR);}if(c==0&&d<0){return a!==(rR(),tR);}if(c==1&&d<0){return a!==(rR(),wR);}}return false;}
function lQ(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=gi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[166],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=EQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function mQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(rR(),vR);}if(c==1&&d>0){return a===(rR(),uR);}if(c==0&&d<0){return a===(rR(),uR);}if(c==1&&d<0){return a===(rR(),vR);}}else{if(c==0&&d>0){return a===(rR(),tR);}if(c==1&&d>0){return a===(rR(),wR);}if(c==0&&d<0){return a===(rR(),wR);}if(c==1&&d<0){return a===(rR(),tR);}}return false;}
function nQ(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw DE(new CE(),'Unsupported connectors count');}a=mi(qK(c,0),35);b=mi(qK(c,1),35);d=yQ(new wQ());e=lQ(this,a,b);i=a.zc(e[0]);j=aR(i,e[0],10);k=b.zc(e[1]);l=aR(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(mQ(this,e[0],0,f,true)&&mQ(this,e[1],1,f,true)){g=aR(j,e[0],qF(qi(f/2)));h=CQ(new BQ(),g.a,l.b);}else if(mQ(this,e[0],0,m,false)&&mQ(this,e[1],1,m,false)){g=aR(j,e[0],qF(qi(m/2)));h=CQ(new BQ(),l.a,g.b);}else if(mQ(this,e[0],0,f,true)&&mQ(this,e[1],1,m,false)){g=aR(j,e[0],qF(f));h=aR(l,e[1],qF(m));}else if(mQ(this,e[0],0,m,false)&&mQ(this,e[1],1,f,true)){g=aR(j,e[0],qF(m));h=aR(l,e[1],qF(f));}else if(mQ(this,e[0],0,f,true)&&jQ(this,e[1],1,f,true)){g=aR(j,e[0],qF(qi(f/2)));h=CQ(new BQ(),g.a,l.b);}else if(jQ(this,e[0],0,f,true)&&mQ(this,e[1],1,f,true)){h=aR(l,e[1],qF(qi(f/2)));g=CQ(new BQ(),h.a,j.b);}else if(mQ(this,e[0],0,m,false)&&jQ(this,e[1],1,m,false)){g=aR(j,e[0],qF(qi(m/2)));h=CQ(new BQ(),l.a,g.b);}else if(jQ(this,e[0],0,m,false)&&mQ(this,e[1],1,m,false)){h=aR(l,e[1],qF(qi(m/2)));g=CQ(new BQ(),j.a,h.b);}else if(jQ(this,e[0],0,f,true)&&jQ(this,e[1],1,f,true)){g=aR(j,(rR(),vR),qi(f/2));h=CQ(new BQ(),g.a,l.b);}else if(jQ(this,e[0],0,m,false)&&jQ(this,e[1],1,m,false)){g=aR(j,(rR(),tR),qi(m/2));h=CQ(new BQ(),l.a,g.b);}else if(jQ(this,e[0],0,f,true)&&jQ(this,e[1],1,m,false)){g=aR(j,(rR(),vR),f);}else if(jQ(this,e[0],0,m,false)&&jQ(this,e[1],1,f,true)){g=aR(j,(rR(),tR),m);}lK(d.b,i);lK(d.b,j);if(g!==null){lK(d.b,g);}if(h!==null){lK(d.b,h);}lK(d.b,l);lK(d.b,k);return d;}
function iQ(){}
_=iQ.prototype=new fG();_.u=nQ;_.tN=oO+'FullRectilinearTwoEndedCalculator';_.tI=137;function qQ(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw DE(new CE(),'Unsupported connectors count');}a=mi(qK(e,0),35);b=mi(qK(e,1),35);f=yQ(new wQ());c=CQ(new BQ(),a.mb()+qi(a.sb()/2),a.qb()+qi(a.kb()/2));d=CQ(new BQ(),b.mb()+qi(b.sb()/2),b.qb()+qi(b.kb()/2));g=CQ(new BQ(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=qi(a.kb()/2);h=g.b!=0?qi(j*g.a/qF(g.b)):2147483647;j*= -k;if(qF(h)>qi(a.sb()/2)){h=qi(a.sb()/2);j=g.a!=0?qi(h*g.b/qF(g.a)):2147483647;h*= -i;}lK(f.b,CQ(new BQ(),c.a+h,c.b+j));j=qi(b.kb()/2);h=g.b!=0?qi(j*g.a/qF(g.b)):2147483647;j*=k;h= -h;if(qF(h)>qi(b.sb()/2)){h=qi(b.sb()/2);j=g.a!=0?qi(h*g.b/qF(g.a)):2147483647;h*=i;j= -j;}lK(f.b,CQ(new BQ(),d.a+h,d.b+j));return f;}
function oQ(){}
_=oQ.prototype=new fG();_.u=qQ;_.tN=oO+'StraightCenterConnectionDataCalculator';_.tI=138;function xQ(a){a.b=jK(new hK());}
function yQ(a){xQ(a);return a;}
function zQ(b,a){xQ(b);kK(b.b,a);return b;}
function wQ(){}
_=wQ.prototype=new fG();_.tN=pO+'ConnectionData';_.tI=139;function sQ(a){a.a=jK(new hK());}
function tQ(c,b,a){zQ(c,b);sQ(c);kK(c.a,a);return c;}
function uQ(c,b,a){tQ(c,fL(b),fL(a));return c;}
function rQ(){}
_=rQ.prototype=new wQ();_.tN=pO+'BezierConnectionData';_.tI=140;function CQ(b,a,c){b.a=a;b.b=c;return b;}
function EQ(b,a){return uF((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function aR(c,a,b){if(a===(rR(),tR)){return CQ(new BQ(),c.a,c.b+b);}else if(a===(rR(),wR)){return CQ(new BQ(),c.a,c.b-b);}else if(a===(rR(),uR)){return CQ(new BQ(),c.a-b,c.b);}else if(a===(rR(),vR)){return CQ(new BQ(),c.a+b,c.b);}else{throw aF(new FE());}}
function FQ(a,b){return CQ(new BQ(),a.a+b.a,a.b+b.b);}
function bR(a){return CQ(new BQ(),-a.a,-a.b);}
function BQ(){}
_=BQ.prototype=new fG();_.tN=pO+'Point';_.tI=141;_.a=0;_.b=0;function dR(a){a.c=kN(new jN());}
function eR(a){dR(a);return a;}
function gR(b,a){if(oN(b.c,a)){gP(a,b);}}
function hR(b,a){return aR(CQ(new BQ(),b.mb()+qi(b.sb()/2),b.qb()+qi(b.kb()/2)),a,sR(a)?qi(b.sb()/2):qi(b.kb()/2));}
function iR(c){var a,b;for(b=nN(c.c);gJ(b);){a=mi(hJ(b),41);a.fd();}}
function jR(a){lN(this.c,a);}
function kR(a){gR(this,a);}
function lR(a){return hR(this,a);}
function mR(){return xR();}
function nR(a){return hR(this,a);}
function cR(){}
_=cR.prototype=new fG();_.x=jR;_.D=kR;_.db=lR;_.gb=mR;_.zc=nR;_.tN=qO+'AbstractConnector';_.tI=142;function rR(){rR=EN;wR=qR(new pR(),'UP');tR=qR(new pR(),'DOWN');uR=qR(new pR(),'LEFT');vR=qR(new pR(),'RIGHT');}
function qR(b,a){rR();b.a=a;return b;}
function sR(a){return a===uR||a===vR;}
function xR(){rR();return hi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',166,34,[wR,tR,uR,vR]);}
function yR(){return this.a;}
function pR(){}
_=pR.prototype=new fG();_.tS=yR;_.tN=qO+'Direction';_.tI=143;_.a=null;var tR,uR,vR,wR;function FR(){FR=EN;jS=qM(new uL());}
function ER(a,b){FR();eR(a);a.b=b;return a;}
function aS(a){yM(jS,a.b);a.b=null;}
function bS(){if(this.b===null){throw bF(new FE(),'Wrapped object is null.');}return this.b.nb();}
function cS(){var a,b;if(this.b===null){throw bF(new FE(),'Wrapped object is null.');}a=0;b=il(this.b.jb());while(b!==null){if(BG('relative',jl(b,'position'))){a=Ek(b);break;}b=il(b);}return pB(this.b)-a;}
function dS(){var a,b;if(this.b===null){throw bF(new FE(),'Wrapped object is null.');}a=0;b=il(this.b.jb());while(b!==null){if(BG('relative',jl(b,'position'))){a=Fk(b);break;}b=il(b);}return qB(this.b)-a;}
function eS(){if(this.b===null){throw bF(new FE(),'Wrapped object is null.');}return this.b.ob();}
function fS(a){FR();return mi(wM(jS,a),42);}
function gS(a){FR();if(tM(jS,a)){aS(fS(a));}}
function hS(b){FR();var a;if(tM(jS,b)){return mi(wM(jS,b),42);}else{a=ER(new zR(),b);xM(jS,b,a);return a;}}
function iS(c,b){FR();var a;if(tM(jS,c)){return mi(wM(jS,c),42);}else{a=BR(new AR(),c,b);xM(jS,c,a);return a;}}
function zR(){}
_=zR.prototype=new cR();_.kb=bS;_.mb=cS;_.qb=dS;_.sb=eS;_.tN=qO+'UIObjectConnector';_.tI=144;_.b=null;var jS;function CR(){CR=EN;FR();}
function BR(b,a,c){CR();b.a=c;ER(b,a);return b;}
function DR(){return this.a;}
function AR(){}
_=AR.prototype=new zR();_.gb=DR;_.tN=qO+'UIObjectConnector$1';_.tI=145;function tS(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function uS(a){hh(new lS());cm(pS(new oS(),a));}
function kS(){}
_=kS.prototype=new fG();_.tN=rO+'BaseExamplesEntryPoint';_.tI=146;function nS(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=xH(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=ps(new ns(),true);Bl(a.jb(),'backgroundColor','#ABCDEF');oH(),qH;d=aH(d,' ','&nbsp;');ss(a,'<pre>'+d+'<\/pre>');by(a);}
function lS(){}
_=lS.prototype=new fG();_.tN=rO+'BaseExamplesEntryPoint$1';_.tI=147;function pS(b,a){b.a=a;return b;}
function rS(){CS(this.a);}
function oS(){}
_=oS.prototype=new fG();_.bb=rS;_.tN=rO+'BaseExamplesEntryPoint$2';_.tI=148;function CS(c){var a,b;b=aB(new tA());pq(fz('tabs'),b);cB(b,kV(new jV()),'Rectilinear');cB(b,DT(new CT()),'Bezier');cB(b,oV(new nV()),'Straight');cB(b,xU(new aU()),'Diagram builder');cB(b,fV(new eV()),'Multi');bB(b,xS(new wS(),c,b));a=tS(c,'tab');if(a===null||BG('',a)){a='0';}hB(b,lF(a));}
function vS(){}
_=vS.prototype=new kS();_.tN=rO+'GwtDiagramsExample';_.tI=149;function xS(b,a,c){b.a=c;return b;}
function zS(a,b){return true;}
function AS(b,c){var a;a=mi(eB(this.a,c),43);uT(a);}
function wS(){}
_=wS.prototype=new fG();_.bc=zS;_.vc=AS;_.tN=rO+'GwtDiagramsExample$1';_.tI=150;function yT(a){a.i=oq(new nq());}
function zT(a){var b;pz(a);yT(a);nB(a,'gwt-diagrams-example');b=hC(new fC());rz(a,b);iC(b,a.i);iC(b,BT(a,tT(a)));return a;}
function BT(e,d){var a,b,c;a=jt(new it());nB(a,'gwt-diagrams-sources-panel');for(b=tI(d);iI(b);){c=mi(jI(b),14);kt(a,c);}return a;}
function xT(){}
_=xT.prototype=new iz();_.tN=sO+'AbstractExample';_.tI=151;function mT(a){a.g=jK(new hK());}
function nT(a){zT(a);mT(a);a.h=rT(a);Bl(a.i.jb(),'width','450px');Bl(a.i.jb(),'height','350px');a.C();return a;}
function oT(b,a){pq(b.i,a);lK(b.g,a);}
function qT(e,d,c,f,a){var b;b=bx(new Fw(),d);nB(b,'example-connector');qq(e.i,b,c,f);bT(e.h,b);if(a!==null){return iS(b,hi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',166,34,[a]));}return hS(b);}
function rT(b){var a;a=FS(new ES(),b.i,true,b);return a;}
function sT(b,a){vK(b.g,a);}
function tT(f){var a,b,c,d,e;e=jK(new hK());b=EG(fh(f),46);a=bH(fh(f),b+1);lK(e,uw(new sw(),a+'.java',''));lK(e,uw(new sw(),'AbstractExample.java',''));lK(e,uw(new sw(),'AbstractConnectionsExample.java',''));for(d=tI(e);iI(d);){c=mi(jI(d),44);nB(c,'gwt-diagrams-source-link');vw(c,jT(new iT(),f,c));}return e;}
function uT(c){var a,b;for(b=tI(c.g);iI(b);){a=mi(jI(b),41);a.fd();}}
function vT(a){oT(this,a);}
function wT(){var a,b,c,d,e,f,g,h;a=qT(this,'all',50,50,null);b=qT(this,'all',100,100,null);this.y(a,b);c=qT(this,'up',250,50,(rR(),wR));d=qT(this,'down',300,100,(rR(),tR));this.y(c,d);e=qT(this,'left',50,200,(rR(),uR));f=qT(this,'right',100,250,(rR(),vR));this.y(e,f);g=qT(this,'left',250,200,(rR(),uR));h=qT(this,'left',300,250,(rR(),uR));this.y(g,h);}
function DS(){}
_=DS.prototype=new xT();_.t=vT;_.C=wT;_.tN=sO+'AbstractConnectionsExample';_.tI=152;_.h=null;function aT(){aT=EN;ad();}
function FS(d,a,b,c){aT();Fc(d,a,b);return d;}
function bT(a,b){A(a,b);Bl(b.jb(),'position','absolute');Bl(b.jb(),'zIndex','100');}
function cT(a){bT(this,a);}
function dT(b,a){return fT(new eT(),b,a,this);}
function ES(){}
_=ES.prototype=new Ec();_.Ab=cT;_.Cb=dT;_.tN=sO+'AbstractConnectionsExample$1';_.tI=153;function gT(){gT=EN;se();}
function fT(d,a,b,c){gT();re(d,a,b);return d;}
function hT(d,c,b){var a;od(this,d,c,b);a=fS(c);if(a!==null){iR(a);}}
function eT(){}
_=eT.prototype=new qe();_.rc=hT;_.tN=sO+'AbstractConnectionsExample$2';_.tI=154;function jT(b,a,c){b.a=c;return b;}
function lT(a){Dn('../source/'+xw(this.a),'','');}
function iT(){}
_=iT.prototype=new fG();_.dc=lT;_.tN=sO+'AbstractConnectionsExample$3';_.tI=155;function DT(a){nT(a);return a;}
function FT(a,b){this.t(oP(new mP(),a,b));}
function CT(){}
_=CT.prototype=new DS();_.y=FT;_.tN=sO+'BezierExample';_.tI=156;function wU(a){a.c=jK(new hK());}
function xU(a){nT(a);wU(a);return a;}
function yU(b,a){oT(b,a);jP(a);}
function AU(c,a,b){if(BG('rectilinear',c.d)){yU(c,yP(new wP(),a,b));}else if(BG('bezier',c.d)){yU(c,oP(new mP(),a,b));}else if(BG('straight',c.d)){yU(c,FP(new EP(),a,b));}}
function BU(e,d,c){var a,b;b=oU(new nU(),fx(d),e);wB(b,d.ob(),d.nb());nB(b,'example-connector');qq(c,b,pB(d)-pB(c),qB(d)-qB(c));bT(e.h,b);a=null;if(BG('T',fx(b))){a=(rR(),wR);}else if(BG('L',fx(b))){a=(rR(),uR);}else if(BG('B',fx(b))){a=(rR(),tR);}else if(BG('R',fx(b))){a=(rR(),vR);}if(a!==null){return iS(b,hi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',166,34,[a]));}return hS(b);}
function CU(c,a){var b;b=bx(new Fw(),a);nB(b,'helpEntry');lw(c.a,b);}
function DU(d,c,a){var b;b=Ay(new yy(),'style',c);nB(b,'style-option');er(b,a);if(a){aV(d,c);}lw(d.e,b);pt(b,kU(new jU(),d,c));return b;}
function EU(d,a,c){var b;b=bx(new Fw(),a);xB(b,'toolbox-node');nB(b,c);lw(d.e,b);d.f.Ab(b);return b;}
function FU(d,e){var a,b,c,f;if(tK(d.c)){nB(e,'selected-connector');b=fS(e).c;for(c=nN(b);gJ(c);){a=mi(hJ(c),41);a.Ac();sT(d,a);}lK(d.c,e);}else if(pK(d.c,e)){tB(e,'selected-connector');vK(d.c,e);}else if(d.c.b==1){f=mi(qK(d.c,0),14);tB(e,'selected-connector');tB(f,'selected-connector');b=fS(e).c;for(c=nN(b);gJ(c);){a=mi(hJ(c),41);a.Ac();sT(d,a);}AU(d,fS(f),fS(e));nK(d.c);}}
function aV(b,a){b.d=a;}
function bV(a){yU(this,a);}
function cV(a,b){AU(this,a,b);}
function dV(){var a,b,c;a=Fc(new Ec(),this.i,true);b=jd(new id(),this.i);this.f=tU(new rU(),b,a,this);this.e=kw(new iw());xB(this.e,'toolbox');this.b=oq(new nq());this.a=kw(new iw());xB(this.a,'helpPanel');c=hC(new fC());xB(c,'builder');iC(c,this.a);iC(c,this.e);iC(c,this.b);pq(this.i,c);EU(this,'A','all');EU(this,'L','left');EU(this,'R','right');EU(this,'T','top');EU(this,'B','bottom');DU(this,'rectilinear',true);DU(this,'bezier',false);DU(this,'straight',false);CU(this,'drag&drop from toolbar to add');CU(this,'CTRL+click to select/connect');CU(this,'DEL to delete selected');Ej(gU(new fU(),this));}
function aU(){}
_=aU.prototype=new DS();_.t=bV;_.y=cV;_.C=dV;_.tN=sO+'DiagramBuilderExample';_.tI=157;_.a=null;_.b=null;_.d=null;_.e=null;_.f=null;function cU(b,a,c){b.a=a;b.b=c;return b;}
function eU(a){var b,c,d;b=a.d;d=mi(wM(this.a.a,b),14);c=this.b.g;BU(this.a.b,mi(d,45),c);throw gd(new fd());}
function bU(){}
_=bU.prototype=new rb();_.sc=eU;_.tN=sO+'DiagramBuilderExample$1';_.tI=158;function gU(b,a){b.a=a;return b;}
function iU(a){var b,c;if(128==Bk(a)&&46==wk(a)&& !tK(this.a.c)){for(b=uI(this.a.c);iI(b);){c=mi(jI(b),14);gS(c);kI(b);FC(c);}return false;}return true;}
function fU(){}
_=fU.prototype=new fG();_.jc=iU;_.tN=sO+'DiagramBuilderExample$2';_.tI=159;function kU(b,a,c){b.a=a;b.b=c;return b;}
function mU(a){aV(this.a,this.b);}
function jU(){}
_=jU.prototype=new fG();_.dc=mU;_.tN=sO+'DiagramBuilderExample$3';_.tI=160;function oU(c,a,b){c.a=b;bx(c,a);return c;}
function qU(a){if(Bk(a)==1&&uk(a)){FU(this.a,this);}gx(this,a);}
function nU(){}
_=nU.prototype=new Fw();_.cc=qU;_.tN=sO+'DiagramBuilderExample$4';_.tI=161;function uU(){uU=EN;ad();}
function sU(a){a.a=qM(new uL());}
function tU(d,a,b,c){uU();d.b=c;Fc(d,d.b.i,false);sU(d);dd(d,true);F(d,a);u(d,cU(new bU(),d,a));return d;}
function vU(a){var b,c;b=mi(a,45);c=bx(new Fw(),fx(b));nB(c,'dragdrop-proxy');nB(c,'toolbox-node-proxy');wB(c,b.ob(),b.nb());xM(this.a,b,c);return c;}
function rU(){}
_=rU.prototype=new Ec();_.Bb=vU;_.tN=sO+'DiagramBuilderExample$ToolboxDragController';_.tI=162;function fV(a){nT(a);return a;}
function hV(a,b){throw BH(new AH());}
function iV(){var a,b,c,d,e,f,g;e=qT(this,'X',50,100,null);f=qT(this,'Y',150,50,null);g=qT(this,'Z',250,25,null);c=qT(this,'U',125,125,null);d=qT(this,'W',250,100,null);this.t(yP(new wP(),e,f));this.t(yP(new wP(),f,g));this.t(yP(new wP(),f,c));this.t(yP(new wP(),c,d));a=qT(this,'A',50,200,null);b=qT(this,'B',150,250,null);this.t(yP(new wP(),a,b));this.t(oP(new mP(),a,b));this.t(FP(new EP(),a,b));}
function eV(){}
_=eV.prototype=new DS();_.y=hV;_.C=iV;_.tN=sO+'MultiConnectionsExample';_.tI=163;function kV(a){nT(a);return a;}
function mV(a,b){this.t(yP(new wP(),a,b));}
function jV(){}
_=jV.prototype=new DS();_.y=mV;_.tN=sO+'RectilinearExample';_.tI=164;function oV(a){nT(a);return a;}
function qV(c,a,b){c.t(FP(new EP(),a,b));}
function rV(a,b){qV(this,a,b);}
function sV(){var a,b;a=qT(this,'connector 1',50,50,(rR(),wR));b=qT(this,'connector 2',200,200,(rR(),tR));qV(this,a,b);}
function nV(){}
_=nV.prototype=new DS();_.y=rV;_.C=sV;_.tN=sO+'StraightConnectionsExample';_.tI=165;function BD(){uS(new vS());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{BD();}catch(a){b(d);}else{BD();}}
var ti=[{},{27:1},{1:1,27:1,38:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{7:1,27:1},{27:1},{27:1,31:1},{27:1,31:1},{27:1,31:1},{27:1},{27:1},{10:1,27:1,38:1},{23:1,27:1},{27:1},{16:1,27:1},{16:1,27:1},{12:1,16:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{27:1},{13:1,16:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{15:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1},{20:1,27:1},{20:1,27:1},{20:1,27:1},{27:1},{15:1,19:1,27:1},{15:1,27:1},{21:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1,28:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{2:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,23:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{5:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,45:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{3:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,44:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{2:1,14:1,24:1,26:1,27:1,28:1,29:1},{21:1,27:1},{27:1},{14:1,22:1,27:1,28:1,29:1},{27:1,31:1},{14:1,25:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,22:1,27:1,28:1,29:1},{4:1,14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1,30:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{27:1},{11:1,16:1,27:1},{27:1},{27:1},{27:1,32:1},{27:1,33:1},{27:1,33:1},{27:1},{27:1},{27:1},{27:1},{27:1,32:1},{27:1,39:1},{27:1,33:1},{27:1},{27:1,33:1},{11:1,16:1,27:1},{27:1},{27:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{27:1},{27:1},{27:1},{27:1},{27:1,40:1},{27:1,37:1},{27:1,35:1},{27:1,34:1},{27:1,35:1,42:1},{27:1,35:1,42:1},{27:1},{27:1},{17:1,27:1},{27:1},{25:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{8:1,27:1},{22:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{7:1,27:1},{18:1,27:1},{22:1,27:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{27:1},{9:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();