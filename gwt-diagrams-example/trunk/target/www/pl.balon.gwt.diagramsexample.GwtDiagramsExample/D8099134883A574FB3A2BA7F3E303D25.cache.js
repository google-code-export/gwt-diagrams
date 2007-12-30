(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,EN='com.allen_sauer.gwt.dragdrop.client.',FN='com.allen_sauer.gwt.dragdrop.client.drop.',aO='com.allen_sauer.gwt.dragdrop.client.util.',bO='com.allen_sauer.gwt.dragdrop.client.util.impl.',cO='com.google.gwt.core.client.',dO='com.google.gwt.lang.',eO='com.google.gwt.user.client.',fO='com.google.gwt.user.client.impl.',gO='com.google.gwt.user.client.ui.',hO='com.google.gwt.user.client.ui.impl.',iO='java.io.',jO='java.lang.',kO='java.util.',lO='pl.balon.gwt.diagrams.client.common.bezier.',mO='pl.balon.gwt.diagrams.client.connection.',nO='pl.balon.gwt.diagrams.client.connection.calculator.',oO='pl.balon.gwt.diagrams.client.connection.data.',pO='pl.balon.gwt.diagrams.client.connector.',qO='pl.balon.gwt.diagramsexample.client.',rO='pl.balon.gwt.diagramsexample.client.examples.';function DN(){}
function hG(a){return this===a;}
function iG(){return rH(this);}
function jG(){return this.tN+'@'+this.hC();}
function fG(){}
_=fG.prototype={};_.eQ=hG;_.hC=iG;_.tS=jG;_.toString=function(){return this.tS();};_.tN=jO+'Object';_.tI=1;function rL(b,a){b.d=a;return b;}
function qL(){}
_=qL.prototype=new fG();_.tN=kO+'EventObject';_.tI=3;_.d=null;function ob(c,b,a){rL(c,b);c.c=a;return c;}
function qb(){var a;a=this.c!==null?'dropTarget='+gg(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+gg(this.d)+')';}
function nb(){}
_=nb.prototype=new qL();_.tS=qb;_.tN=EN+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ob(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new nb();_.tS=q;_.tN=EN+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function v(){v=DN;db=pM(new tL());}
function s(a){a.j=y(a);}
function t(c,b,a){v();s(c);c.h=b!==null?b:ez();c.g=c.Cb(c.h,a);F(c,c.g);c.o=tc(new rc(),c);return c;}
function u(b,a){if(b.i===null){b.i=yb(new xb());}kK(b.i,a);}
function w(c,a,b){tB(a,'dragdrop-dragging');}
function x(b,a){pc(b.j,b.h,a);if(b.i!==null){Bb(b.i,a);}nB(a,'dragdrop-dragging');}
function y(a){return kc(new dc());}
function z(b,c){var a;a=nc(b.j,c,b.h);return a!==null?a:b.g;}
function A(a,b){{B(a,b,b);}}
function B(c,b,a){xc(c.o,b,a);nB(b,'dragdrop-draggable');nB(a,'dragdrop-handle');wM(db,b,a);}
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
_=r.prototype=new fG();_.Ab=eb;_.Cb=fb;_.tN=EN+'AbstractDragController';_.tI=6;_.g=null;_.h=null;_.i=null;_.k=0;_.l=null;_.m=null;_.n=null;_.o=null;var db;function hb(b,a){b.b=a;return b;}
function jb(a){if(a.c==0){return;}uc(a.b,a.d,a.e);a.a=pH()-a.c;a.c=0;}
function kb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=pH();}if(a.a>80){cm(a);}else{jb(a);}}
function lb(){jb(this);}
function gb(){}
_=gb.prototype=new fG();_.bb=lb;_.tN=EN+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function tb(a){}
function ub(a){}
function vb(a){}
function wb(a){}
function rb(){}
_=rb.prototype=new fG();_.fc=tb;_.gc=ub;_.sc=vb;_.tc=wb;_.tN=EN+'DragHandlerAdapter';_.tI=8;function EH(d,a,b){var c;while(a.vb()){c=a.Eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function aI(a){throw BH(new AH(),'add');}
function bI(b){var a;a=EH(this,this.xb(),b);return a!==null;}
function cI(){var a,b,c;c=qG(new pG());a=null;rG(c,'[');b=this.xb();while(b.vb()){if(a!==null){rG(c,a);}else{a=', ';}rG(c,mH(b.Eb()));}rG(c,']');return vG(c);}
function DH(){}
_=DH.prototype=new fG();_.s=aI;_.A=bI;_.tS=cI;_.tN=kO+'AbstractCollection';_.tI=9;function rI(b,a){throw fF(new dF(),'Index: '+a+', Size: '+b.b);}
function sI(a){return fI(new eI(),a);}
function tI(a){return oI(new nI(),a);}
function uI(b,a){throw BH(new AH(),'add');}
function vI(a){this.r(this.ed(),a);return true;}
function wI(e){var a,b,c,d,f;if(e===this){return true;}if(!ni(e,31)){return false;}f=mi(e,31);if(this.ed()!=f.ed()){return false;}c=sI(this);d=f.xb();while(hI(c)){a=iI(c);b=iI(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function xI(){var a,b,c,d;c=1;a=31;b=sI(this);while(hI(b)){d=iI(b);c=31*c+(d===null?0:d.hC());}return c;}
function yI(){return sI(this);}
function zI(a){throw BH(new AH(),'remove');}
function dI(){}
_=dI.prototype=new DH();_.r=uI;_.s=vI;_.eQ=wI;_.hC=xI;_.xb=yI;_.Bc=zI;_.tN=kO+'AbstractList';_.tI=10;function hK(a){{lK(a);}}
function iK(a){hK(a);return a;}
function kK(b,a){aL(b.a,b.b++,a);return true;}
function jK(d,a){var b,c;c=sI(a);b=c.vb();while(c.vb()){aL(d.a,d.b++,c.Eb());}return b;}
function mK(a){lK(a);}
function lK(a){a.a=vh();a.b=0;}
function oK(b,a){return qK(b,a)!=(-1);}
function pK(b,a){if(a<0||a>=b.b){rI(b,a);}return CK(b.a,a);}
function qK(b,a){return rK(b,a,0);}
function rK(c,b,a){if(a<0){rI(c,a);}for(;a<c.b;++a){if(BK(b,CK(c.a,a))){return a;}}return (-1);}
function sK(a){return a.b==0;}
function tK(c,a){var b;b=pK(c,a);EK(c.a,a,1);--c.b;return b;}
function uK(c,b){var a;a=qK(c,b);if(a==(-1)){return false;}tK(c,a);return true;}
function vK(d,a,b){var c;c=pK(d,a);aL(d.a,a,b);return c;}
function wK(c,a){var b;if(a.a<c.b){a=bi(a,c.b);}for(b=0;b<c.b;++b){ii(a,b,CK(c.a,b));}if(a.a>c.b){ii(a,c.b,null);}return a;}
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
_=gK.prototype=new dI();_.r=yK;_.s=zK;_.A=AK;_.tb=DK;_.Bc=FK;_.ed=bL;_.tN=kO+'ArrayList';_.tI=11;_.a=null;_.b=0;function yb(a){iK(a);return a;}
function Ab(d,a){var b,c;for(c=sI(d);hI(c);){b=mi(iI(c),7);b.fc(a);}}
function Bb(e,d){var a,b,c;a=ac(new Fb(),d);for(c=sI(e);hI(c);){b=mi(iI(c),7);b.gc(a);}}
function Cb(f,e,a){var b,c,d;b=ob(new nb(),e,a);for(d=sI(f);hI(d);){c=mi(iI(d),7);c.sc(b);}}
function Db(e,d){var a,b,c;a=ac(new Fb(),d);for(c=sI(e);hI(c);){b=mi(iI(c),7);b.tc(a);}}
function xb(){}
_=xb.prototype=new gK();_.tN=EN+'DragHandlerCollection';_.tI=12;function ac(b,a){rL(b,a);return b;}
function cc(){return 'DragStartEvent(source='+gg(this.d)+')';}
function Fb(){}
_=Fb.prototype=new qL();_.tS=cc;_.tN=EN+'DragStartEvent';_.tI=13;function jc(a){a.a=iK(new gK());}
function kc(a){jc(a);return a;}
function lc(b,a){kK(b.a,a);}
function nc(g,h,a){var b,c,d,e,f,i,j,k;i=ig(new hg(),h,null);j=ef(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(hf(f,i)){k=df(f,j);if(k<=c){if(e===null|| !zf(hc(b).jb(),hc(e).jb())){c=k;e=b;}}}}return e===null?null:e.a;}
function oc(a){return sI(a.a);}
function pc(h,b,d){var a,c,e,f,g;a=ig(new hg(),b,null);g=iK(new gK());for(f=oc(h);hI(f);){e=mi(iI(f),8);c=fc(new ec(),e);if(!zf(d.jb(),hc(c).jb())){if(hf(c.b,a)){kK(g,c);}}}h.b=mi(wK(g,hi('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',171,10,[])),9);gL(h.b);}
function dc(){}
_=dc.prototype=new fG();_.tN=EN+'DropControllerCollection';_.tI=14;_.b=null;function fc(c,a){var b;c.a=a;b=a.ib();if(!b.wb()){throw bF(new FE(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=ig(new hg(),b,null);return c;}
function hc(a){return a.a.ib();}
function ic(a){var b;b=mi(a,10);return zf(hc(this).jb(),hc(b).jb())?1:(-1);}
function ec(){}
_=ec.prototype=new fG();_.v=ic;_.tN=EN+'DropControllerCollection$Candidate';_.tI=15;_.a=null;_.b=null;function sc(a){a.d=hb(new gb(),a);a.f=pM(new tL());}
function tc(b,a){sc(b);b.e=a;b.a=a.h;return b;}
function uc(e,f,g){var a,b,c,d;c=lg(new kg(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=sF(0,tF(a,e.l));b=sF(0,tF(b,e.m));}Af(e.o.jb(),a,b);d=z(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.kc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ic(e.o,e.g,e.e);}}if(e.i!==null){e.i.rc(e.o,e.g,e.e);}}
function vc(b){var a;ol(b.b.jb());b.h=false;if(b.i!==null){b.i.kc(b.g,b.e);}b.i=null;bd(b.e,b.g,null);a=ob(new nb(),b.g,null);C(b.e,a);}
function xc(c,b,a){if(a!==null){dx(a,c);wM(c.f,a,b);}else{throw mG(new kG(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function yc(f){var a,c,d,e;f.g=mi(vM(f.f,f.b),14);try{E(f.e,f.g);}catch(a){a=xi(a);if(ni(a,12)){a;return;}else throw a;}cd(f.e,f.g);f.o=f.e.f;f.l=Ef(f.a.jb())-f.o.ob();f.m=Df(f.a.jb())-f.o.nb();e=lg(new kg(),f.b,f.a);c=lg(new kg(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;tl(f.b.jb());f.h=true;try{uc(f,f.j,f.k);}catch(a){a=xi(a);if(ni(a,11)){d=a;vc(f);throw d;}else throw a;}}
function zc(b,c,d){var a;this.b=b;a=rk((Dj(),lk));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Ck((Dj(),lk));cg();this.j=c;this.k=d;}
function Ac(a){}
function Bc(a){}
function Cc(d,e,f){var a,c;if(!this.h){if(this.n){yc(this);}if(!this.h){return;}}Ck((Dj(),lk));try{kb(this.d,e,f);}catch(a){a=xi(a);if(ni(a,11)){c=a;vc(this);throw c;}else throw a;}}
function Dc(g,h,i){var a,a,d,e,f;d=rk((Dj(),lk));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{ol(this.b.jb());uc(this,h,i);this.h=false;if(this.i===null){vc(this);return;}try{D(this.e,this.g,this.i.ib());}catch(a){a=xi(a);if(ni(a,12)){a;vc(this);return;}else throw a;}try{this.i.uc(this.o,this.g,this.e);}catch(a){a=xi(a);if(ni(a,13)){a;vc(this);return;}else throw a;}bd(this.e,this.g,this.i.ib());e=this.i.hc(this.o,this.g,this.e);C(this.e,e);}catch(a){a=xi(a);if(ni(a,11)){f=a;vc(this);throw f;}else throw a;}finally{this.i=null;}}
function rc(){}
_=rc.prototype=new fG();_.mc=zc;_.nc=Ac;_.oc=Bc;_.pc=Cc;_.qc=Dc;_.tN=EN+'MouseDragHandler';_.tI=16;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ad(){ad=DN;v();}
function Fc(c,b,a){ad();t(c,b,a);return c;}
function bd(c,a,b){w(c,a,b);if(c.c!==null){c.c=null;if(c.e!==null){FC(c.e);c.e=null;}else{if(b===null){ab(c,a);}}bb(c,a);FC(c.f);c.f=null;}}
function cd(d,a){var b,c;x(d,a);d.c=a;d.e=d.Bb(a);cb(d,a);c=lg(new kg(),a,d.h);d.f=pz(new iz());nB(d.f,'dragdrop-movable-panel');if(d.e===null){wB(d.f,a.ob(),a.nb());}qq(d.h,d.f,c.a,c.d);b=d.e!==null?d.e:d.c;d.f.cd(b);}
function dd(b,a){b.d=a;}
function ed(a){var b;if(this.d){b=qv(new ut(),'this is a Drag Proxy');nB(b,'dragdrop-proxy');wB(b,this.c.ob(),this.c.nb());return b;}else{return null;}}
function Ec(){}
_=Ec.prototype=new r();_.Bb=ed;_.tN=EN+'PickupDragController';_.tI=17;_.c=null;_.d=false;_.e=null;_.f=null;function wH(){wH=DN;yH=gi('[Ljava.lang.StackTraceElement;',[168],[36],[0],null);}
function tH(a){a.c=yH;}
function uH(a){wH();tH(a);return a;}
function vH(b,a){wH();tH(b);b.b=a;return b;}
function xH(c){var a,b;a=fh(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function zH(){return xH(this);}
function sH(){}
_=sH.prototype=new fG();_.tS=zH;_.tN=jO+'Throwable';_.tI=18;_.a=null;_.b=null;var yH;function BE(){BE=DN;wH();}
function zE(a){BE();uH(a);return a;}
function AE(b,a){BE();vH(b,a);return b;}
function yE(){}
_=yE.prototype=new sH();_.tN=jO+'Exception';_.tI=19;function hd(){hd=DN;BE();}
function gd(a){hd();zE(a);return a;}
function fd(){}
_=fd.prototype=new yE();_.tN=EN+'VetoDragException';_.tI=20;function yd(b,a){b.g=a;nB(a,b.hb());return b;}
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
_=xd.prototype=new fG();_.ib=Dd;_.zb=Ed;_.hc=Fd;_.ic=ae;_.kc=be;_.rc=ce;_.uc=de;_.tN=FN+'AbstractDropController';_.tI=21;_.g=null;function ge(){ge=DN;me=bx(new Fw(),'x');}
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
_=ee.prototype=new xd();_.hc=ne;_.ic=oe;_.kc=pe;_.tN=FN+'AbstractPositioningDropController';_.tI=22;_.f=null;var me;function kd(){kd=DN;ge();}
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
_=id.prototype=new ee();_.eb=pd;_.hb=qd;_.zb=rd;_.hc=sd;_.ic=td;_.kc=ud;_.rc=vd;_.uc=wd;_.tN=FN+'AbsolutePositionDropController';_.tI=23;_.c=null;_.d=null;_.e=null;function se(){se=DN;kd();}
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
_=ye.prototype=new fG();_.tN=FN+'DropTargetInfo';_.tI=25;_.a=null;_.b=null;function af(){af=DN;BE();}
function Fe(a){af();zE(a);return a;}
function Ee(){}
_=Ee.prototype=new yE();_.tN=FN+'VetoDropException';_.tI=26;function df(b,a){var c,d;c=sF(b.b-a.a,a.a-b.c);d=sF(b.d-a.b,a.b-b.a);return sF(c,d);}
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
_=bf.prototype=new fG();_.tS=nf;_.tN=aO+'AbstractArea';_.tI=27;_.a=0;_.b=0;_.c=0;_.d=0;function qf(){return '('+this.mb()+', '+this.qb()+')';}
function of(){}
_=of.prototype=new fG();_.tS=qf;_.tN=aO+'AbstractLocation';_.tI=28;function tf(b,a,c){b.a=a;b.b=c;return b;}
function vf(){return this.a;}
function wf(){return this.b;}
function sf(){}
_=sf.prototype=new of();_.mb=vf;_.qb=wf;_.tN=aO+'CoordinateLocation';_.tI=29;_.a=0;_.b=0;function yf(){yf=DN;{bg=new wg();}}
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
_=hg.prototype=new bf();_.tN=aO+'WidgetArea';_.tI=30;function lg(b,c,a){pg(b,c);og(b,a);qg(b);return b;}
function ng(e,c,d,a,b){e.a=sF(c,tF(e.a,a));e.d=sF(d,tF(e.d,b));}
function og(b,a){if(a===null||a===ez()){b.b=0;b.c=0;}else{b.b=pB(a)+Bf(a.jb());b.c=qB(a)+Cf(a.jb());}}
function pg(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=pB(b);a.f=qB(b);}}
function qg(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function rg(a,b){pg(a,b);qg(a);}
function sg(){return this.a;}
function tg(){return this.d;}
function ug(){return '('+this.a+', '+this.d+')';}
function kg(){}
_=kg.prototype=new of();_.mb=sg;_.qb=tg;_.tS=ug;_.tN=aO+'WidgetLocation';_.tI=31;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function Fg(c,b,a){return b.contains(a);}
function ah(a,b){return b.nb()-Ag(a,b.jb());}
function vg(){}
_=vg.prototype=new fG();_.tN=bO+'DOMUtilImpl';_.tI=32;function yg(b,a){return a.clientLeft;}
function zg(b,a){return a.clientTop;}
function Ag(b,a){return a.clientHeight;}
function Bg(b,a){return a.clientWidth;}
function Cg(a,b){return b.ob()-Bg(a,b.jb());}
function Dg(a){$doc.selection.empty();}
function wg(){}
_=wg.prototype=new vg();_.tN=bO+'DOMUtilImplIE6';_.tI=33;function fh(a){return a==null?null:a.tN;}
function hh(a){gh=a;}
var gh=null;function kh(a){return a==null?0:a.$H?a.$H:(a.$H=mh());}
function lh(a){return a==null?0:a.$H?a.$H:(a.$H=mh());}
function mh(){return ++nh;}
var nh=0;function nG(){nG=DN;BE();}
function lG(a){nG();zE(a);return a;}
function mG(b,a){nG();AE(b,a);return b;}
function kG(){}
_=kG.prototype=new yE();_.tN=jO+'RuntimeException';_.tI=34;function qh(){qh=DN;nG();}
function ph(c,b,a){qh();mG(c,'JavaScript '+b+' exception: '+a);return c;}
function oh(){}
_=oh.prototype=new kG();_.tN=cO+'JavaScriptException';_.tI=35;function th(b,a){if(!ni(a,15)){return false;}return xh(b,mi(a,15));}
function uh(a){return kh(a);}
function vh(){return [];}
function wh(){return {};}
function yh(a){return th(this,a);}
function xh(a,b){return a===b;}
function zh(){return uh(this);}
function Bh(){return Ah(this);}
function Ah(a){if(a.toString)return a.toString();return '[object]';}
function rh(){}
_=rh.prototype=new fG();_.eQ=yh;_.hC=zh;_.tS=Bh;_.tN=cO+'JavaScriptObject';_.tI=36;function Dh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
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
_=Ch.prototype=new fG();_.tN=dO+'Array';_.tI=37;function li(b,a){return !(!(b&&ti[b][a]));}
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
function Ci(){Ci=DN;nG();}
function Bi(b,a){Ci();lG(b);return b;}
function Ai(){}
_=Ai.prototype=new kG();_.tN=eO+'CommandCanceledException';_.tI=40;function rj(a){a.a=Fi(new Ei(),a);a.b=iK(new gK());a.d=dj(new cj(),a);a.f=hj(new gj(),a);}
function sj(a){rj(a);return a;}
function uj(c){var a,b,d;a=jj(c.f);mj(c.f);b=null;if(ni(a,17)){b=Bi(new Ai(),mi(a,17));}else{}if(b!==null){d=gh;if(d!==null){hS(d,b);}}xj(c,false);wj(c);}
function vj(e,d){var a,b,c,f;f=false;try{xj(e,true);nj(e.f,e.b.b);cn(e.a,10000);while(kj(e.f)){b=lj(e.f);c=true;try{if(b===null){return;}if(ni(b,17)){a=mi(b,17);a.bb();}else{}}finally{f=oj(e.f);if(f){return;}if(c){mj(e.f);}}if(Aj(pH(),d)){return;}}}finally{if(!f){Em(e.a);xj(e,false);wj(e);}}}
function wj(a){if(!sK(a.b)&& !a.e&& !a.c){yj(a,true);cn(a.d,1);}}
function xj(b,a){b.c=a;}
function yj(b,a){b.e=a;}
function zj(b,a){kK(b.b,a);wj(b);}
function Aj(a,b){return rF(a-b)>=100;}
function Di(){}
_=Di.prototype=new fG();_.tN=eO+'CommandExecutor';_.tI=41;_.c=false;_.e=false;function Fm(){Fm=DN;jn=iK(new gK());{hn();}}
function Dm(a){Fm();return a;}
function Em(a){if(a.b){dn(a.c);}else{en(a.c);}uK(jn,a);}
function an(e,d){var a,c;try{bn(e);}catch(a){a=xi(a);if(ni(a,16)){c=a;hS(d,c);}else throw a;}}
function bn(a){if(!a.b){uK(jn,a);}a.Dc();}
function cn(b,a){if(a<=0){throw DE(new CE(),'must be positive');}Em(b);b.b=false;b.c=fn(b,a);kK(jn,b);}
function dn(a){Fm();$wnd.clearInterval(a);}
function en(a){Fm();$wnd.clearTimeout(a);}
function fn(b,a){Fm();return $wnd.setTimeout(function(){b.cb();},a);}
function gn(){var a;a=gh;if(a!==null){an(this,a);}else{bn(this);}}
function hn(){Fm();nn(new zm());}
function ym(){}
_=ym.prototype=new fG();_.cb=gn;_.tN=eO+'Timer';_.tI=42;_.b=false;_.c=0;var jn;function aj(){aj=DN;Fm();}
function Fi(b,a){aj();b.a=a;Dm(b);return b;}
function bj(){if(!this.a.c){return;}uj(this.a);}
function Ei(){}
_=Ei.prototype=new ym();_.Dc=bj;_.tN=eO+'CommandExecutor$1';_.tI=43;function ej(){ej=DN;Fm();}
function dj(b,a){ej();b.a=a;Dm(b);return b;}
function fj(){yj(this.a,false);vj(this.a,pH());}
function cj(){}
_=cj.prototype=new ym();_.Dc=fj;_.tN=eO+'CommandExecutor$2';_.tI=44;function hj(b,a){b.d=a;return b;}
function jj(a){return pK(a.d.b,a.b);}
function kj(a){return a.c<a.a;}
function lj(b){var a;b.b=b.c;a=pK(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function mj(a){tK(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function nj(b,a){b.a=a;}
function oj(a){return a.b==(-1);}
function pj(){return kj(this);}
function qj(){return lj(this);}
function gj(){}
_=gj.prototype=new fG();_.vb=pj;_.Eb=qj;_.tN=eO+'CommandExecutor$CircularIterator';_.tI=45;_.a=0;_.b=(-1);_.c=0;function Dj(){Dj=DN;sl=iK(new gK());{kl=new ao();ro(kl);}}
function Ej(a){Dj();kK(sl,a);}
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
function mk(e,d,g,f){Dj();var a,c;try{nk(e,d,g);}catch(a){a=xi(a);if(ni(a,16)){c=a;hS(f,c);}else throw a;}}
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
function nl(a){Dj();var b,c;c=true;if(sl.b>0){b=mi(pK(sl,sl.b-1),18);if(!(c=b.jc(a))){pk(a,true);Ck(a);}}return c;}
function ol(a){Dj();if(rl!==null&&ak(a,rl)){rl=null;}uo(kl,a);}
function pl(b,a){Dj();np(kl,b,a);}
function ql(a){Dj();uK(sl,a);}
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
var lk=null,kl=null,rl=null,sl;function bm(){bm=DN;dm=sj(new Di());}
function cm(a){bm();if(a===null){throw zF(new yF(),'cmd can not be null');}zj(dm,a);}
var dm;function gm(a){if(ni(a,19)){return ak(this,mi(a,19));}return th(ui(this,em),a);}
function hm(){return uh(ui(this,em));}
function im(){return Dl(this);}
function em(){}
_=em.prototype=new rh();_.eQ=gm;_.hC=hm;_.tS=im;_.tN=eO+'Element';_.tI=46;function nm(a){return th(ui(this,jm),a);}
function om(){return uh(ui(this,jm));}
function pm(){return Dk(this);}
function jm(){}
_=jm.prototype=new rh();_.eQ=nm;_.hC=om;_.tS=pm;_.tN=eO+'Event';_.tI=47;function rm(){rm=DN;um=iK(new gK());{vm=new Fp();if(!dq(vm)){vm=null;}}}
function sm(e,d){rm();var a,c;try{tm(e);}catch(a){a=xi(a);if(ni(a,16)){c=a;hS(d,c);}else throw a;}}
function tm(a){rm();var b,c;for(b=sI(um);hI(b);){c=ri(iI(b));null.id();}}
function wm(a){rm();if(vm!==null){Cp(vm,a);}}
function xm(b){rm();var a;a=gh;if(a!==null){sm(b,a);}else{tm(b);}}
var um,vm=null;function Bm(){while((Fm(),jn).b>0){Em(mi(pK((Fm(),jn),0),20));}}
function Cm(){return null;}
function zm(){}
_=zm.prototype=new fG();_.xc=Bm;_.yc=Cm;_.tN=eO+'Timer$1';_.tI=48;function mn(){mn=DN;on=iK(new gK());En=iK(new gK());{zn();}}
function nn(a){mn();kK(on,a);}
function pn(d){mn();var a,c;try{qn();}catch(a){a=xi(a);if(ni(a,16)){c=a;hS(d,c);}else throw a;}}
function qn(){mn();var a,b;for(a=sI(on);hI(a);){b=mi(iI(a),21);b.xc();}}
function rn(d){mn();var a,c;try{return sn();}catch(a){a=xi(a);if(ni(a,16)){c=a;hS(d,c);return null;}else throw a;}}
function sn(){mn();var a,b,c,d;d=null;for(a=sI(on);hI(a);){b=mi(iI(a),21);c=b.yc();{d=c;}}return d;}
function tn(d){mn();var a,c;try{un();}catch(a){a=xi(a);if(ni(a,16)){c=a;hS(d,c);}else throw a;}}
function un(){mn();var a,b;for(a=sI(En);hI(a);){b=ri(iI(a));null.id();}}
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
_=Fn.prototype=new fG();_.tN=fO+'DOMImpl';_.tI=49;function co(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
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
_=ao.prototype=new Fn();_.tN=fO+'DOMImplIE6';_.tI=50;var yo=null;function kq(a){return $wnd.__gwt_historyToken;}
function lq(a,b){$wnd.__gwt_historyToken=b;}
function mq(a){xm(a);}
function yp(){}
_=yp.prototype=new fG();_.tN=fO+'HistoryImpl';_.tI=51;function Bp(a){var b;a.a=Dp();if(a.a===null){return false;}cq(a);b=Ep(a.a);if(b!==null){lq(a,bq(a,b));}else{fq(a,a.a,kq(a),true);}eq(a);return true;}
function Cp(b,a){b.Db(b.a,a,false);}
function Dp(){var a=$doc.getElementById('__gwt_historyFrame');return a||null;}
function Ep(b){var c=null;if(b.contentWindow){var a=b.contentWindow.document;c=a.getElementById('__gwt_historyToken')||null;}return c;}
function zp(){}
_=zp.prototype=new yp();_.tN=fO+'HistoryImplFrame';_.tI=52;_.a=null;function bq(a,b){return b.innerText;}
function dq(a){if(!Bp(a)){return false;}hq();return true;}
function cq(c){var b=$wnd.location.hash;if(b.length>0){try{$wnd.__gwt_historyToken=decodeURIComponent(b.substring(1));}catch(a){$wnd.location.hash='';$wnd.__gwt_historyToken='';}return;}$wnd.__gwt_historyToken='';}
function eq(b){$wnd.__gwt_onHistoryLoad=function(a){if(a!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=a;$wnd.location.hash=encodeURIComponent(a);mq(a);}};}
function fq(e,c,d,b){d=gq(d||'');if(b||$wnd.__gwt_historyToken!=d){var a=c.contentWindow.document;a.open();a.write('<html><body onload="if(parent.__gwt_onHistoryLoad)parent.__gwt_onHistoryLoad(__gwt_historyToken.innerText)"><div id="__gwt_historyToken">'+d+'<\/div><\/body><\/html>');a.close();}}
function gq(b){var a;a=ck();Al(a,b);return gl(a);}
function hq(){var d=function(){var b=$wnd.location.hash;if(b.length>0){var c='';try{c=decodeURIComponent(b.substring(1));}catch(a){$wnd.location.reload();}if($wnd.__gwt_historyToken&&c!=$wnd.__gwt_historyToken){$wnd.location.reload();}}$wnd.setTimeout(d,250);};d();}
function iq(b,c,a){fq(this,b,c,a);}
function Fp(){}
_=Fp.prototype=new zp();_.Db=iq;_.tN=fO+'HistoryImplIE6';_.tI=53;function nB(b,a){aC(b.pb(),a,true);}
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
_=mB.prototype=new fG();_.jb=zB;_.nb=AB;_.ob=BB;_.pb=CB;_.Fc=EB;_.bd=cC;_.dd=dC;_.tS=eC;_.tN=gO+'UIObject';_.tI=54;_.q=null;function EC(a){if(!a.wb()){throw bF(new FE(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.wc();}finally{a.F();yl(a.jb(),null);a.o=false;}}
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
_=nC.prototype=new mB();_.E=cD;_.F=dD;_.wb=eD;_.ac=fD;_.cc=gD;_.ec=hD;_.lc=iD;_.wc=jD;_.Ec=kD;_.tN=gO+'Widget';_.tI=55;_.o=false;_.p=null;function vx(b,a){bD(a,b);}
function xx(b,a){bD(a,null);}
function yx(){var a,b;for(b=this.xb();b.vb();){a=mi(b.Eb(),14);a.ac();}}
function zx(){var a,b;for(b=this.xb();b.vb();){a=mi(b.Eb(),14);a.ec();}}
function Ax(){}
function Bx(){}
function ux(){}
_=ux.prototype=new nC();_.E=yx;_.F=zx;_.lc=Ax;_.wc=Bx;_.tN=gO+'Panel';_.tI=56;function pr(a){a.f=uC(new oC(),a);}
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
_=or.prototype=new ux();_.xb=Br;_.Cc=Cr;_.tN=gO+'ComplexPanel';_.tI=57;function oq(a){qr(a);a.Ec(ck());Bl(a.jb(),'position','relative');Bl(a.jb(),'overflow','hidden');return a;}
function pq(a,b){rr(a,b,a.jb());}
function qq(b,d,a,c){FC(d);tq(b,d,a,c);pq(b,d);}
function sq(b,c){var a;a=Ar(b,c);if(a){uq(c.jb());}return a;}
function tq(c,e,b,d){var a;a=e.jb();if(b==(-1)&&d==(-1)){uq(a);}else{Bl(a,'position','absolute');Bl(a,'left',b+'px');Bl(a,'top',d+'px');}}
function uq(a){Bl(a,'left','');Bl(a,'top','');Bl(a,'position','');}
function vq(a){return sq(this,a);}
function nq(){}
_=nq.prototype=new or();_.Cc=vq;_.tN=gO+'AbsolutePanel';_.tI=58;function qt(){qt=DN;qD(),sD;}
function ot(b,a){qD(),sD;rt(b,a);return b;}
function pt(b,a){if(b.c===null){b.c=kr(new jr());}kK(b.c,a);}
function rt(b,a){aD(b,a);yB(b,7041);}
function st(a){switch(Bk(a)){case 1:if(this.c!==null){mr(this.c,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function tt(a){rt(this,a);}
function nt(){}
_=nt.prototype=new nC();_.cc=st;_.Ec=tt;_.tN=gO+'FocusWidget';_.tI=59;_.c=null;function yq(){yq=DN;qD(),sD;}
function xq(b,a){qD(),sD;ot(b,a);return b;}
function wq(){}
_=wq.prototype=new nt();_.tN=gO+'ButtonBase';_.tI=60;function Aq(a){qr(a);a.e=kk();a.d=hk();Fj(a.e,a.d);a.Ec(a.e);return a;}
function Cq(c,d,a){var b;b=il(d.jb());xl(b,'height',a);}
function Dq(c,b,a){xl(b,'align',a.a);}
function Eq(c,b,a){Bl(b,'verticalAlign',a.a);}
function Fq(b,c,d){var a;a=il(c.jb());xl(a,'width',d);}
function zq(){}
_=zq.prototype=new or();_.tN=gO+'CellPanel';_.tI=61;_.d=null;_.e=null;function cr(){cr=DN;qD(),sD;}
function br(b,a){var c;qD(),sD;xq(b,gk());b.a=a;b.b=fk();Cl(b.a,el(b.jb()));Cl(b.jb(),0);Fj(b.jb(),b.a);Fj(b.jb(),b.b);c='check'+ ++ir;xl(b.a,'id',c);xl(b.b,'htmlFor',c);return b;}
function dr(b){var a;a=b.wb()?'checked':'defaultChecked';return bl(b.a,a);}
function er(b,a){vl(b.a,'checked',a);vl(b.a,'defaultChecked',a);}
function fr(b,a){Al(b.b,a);}
function gr(){yl(this.a,this);}
function hr(){yl(this.a,null);er(this,dr(this));}
function ar(){}
_=ar.prototype=new wq();_.lc=gr;_.wc=hr;_.tN=gO+'CheckBox';_.tI=62;_.a=null;_.b=null;var ir=0;function kr(a){iK(a);return a;}
function mr(d,c){var a,b;for(a=sI(d);hI(a);){b=mi(iI(a),22);b.dc(c);}}
function jr(){}
_=jr.prototype=new gK();_.tN=gO+'ClickListenerCollection';_.tI=63;function Fr(a,b){if(a.d!==null){throw bF(new FE(),'Composite.initWidget() may only be called once.');}FC(b);a.Ec(b.jb());a.d=b;bD(b,a);}
function as(){if(this.d===null){throw bF(new FE(),'initWidget() was never called in '+fh(this));}return this.q;}
function bs(){if(this.d!==null){return this.d.wb();}return false;}
function cs(){this.d.ac();this.lc();}
function ds(){try{this.wc();}finally{this.d.ec();}}
function Dr(){}
_=Dr.prototype=new nC();_.jb=as;_.wb=bs;_.ac=cs;_.ec=ds;_.tN=gO+'Composite';_.tI=64;_.d=null;function fs(a){qr(a);a.Ec(ck());return a;}
function hs(b,c){var a;a=c.jb();Bl(a,'width','100%');Bl(a,'height','100%');c.bd(false);}
function is(b,c,a){yr(b,c,b.jb(),a,true);hs(b,c);}
function js(b,c){var a;a=Ar(b,c);if(a){ks(b,c);if(b.b===c){b.b=null;}}return a;}
function ks(a,b){Bl(b.jb(),'width','');Bl(b.jb(),'height','');b.bd(true);}
function ls(b,a){tr(b,a);if(b.b!==null){b.b.bd(false);}b.b=xr(b,a);b.b.bd(true);}
function ms(a){return js(this,a);}
function es(){}
_=es.prototype=new or();_.Cc=ms;_.tN=gO+'DeckPanel';_.tI=65;_.b=null;function pz(a){qz(a,ck());return a;}
function qz(b,a){b.Ec(a);return b;}
function rz(a,b){if(a.n!==null){throw bF(new FE(),'SimplePanel can only contain one child widget');}a.cd(b);}
function tz(a,b){if(b===a.n){return;}if(b!==null){FC(b);}if(a.n!==null){a.Cc(a.n);}a.n=b;if(b!==null){Fj(a.fb(),a.n.jb());vx(a,b);}}
function uz(){return this.jb();}
function vz(){return lz(new jz(),this);}
function wz(a){if(this.n!==a){return false;}xx(this,a);pl(this.fb(),a.jb());this.n=null;return true;}
function xz(a){tz(this,a);}
function iz(){}
_=iz.prototype=new ux();_.fb=uz;_.xb=vz;_.Cc=wz;_.cd=xz;_.tN=gO+'SimplePanel';_.tI=66;_.n=null;function cy(){cy=DN;ry=new uD();}
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
_=Cx.prototype=new iz();_.fb=ny;_.nb=oy;_.ob=py;_.pb=qy;_.ec=sy;_.jc=ty;_.Fc=uy;_.bd=vy;_.cd=wy;_.dd=xy;_.tN=gO+'PopupPanel';_.tI=67;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var ry;function rs(){rs=DN;cy();}
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
_=ns.prototype=new Cx();_.jc=ts;_.mc=us;_.nc=vs;_.oc=ws;_.pc=xs;_.qc=ys;_.Cc=zs;_.cd=As;_.dd=Bs;_.tN=gO+'DialogBox';_.tI=68;_.b=null;_.c=0;_.d=0;_.e=false;function Bu(a){a.e=ru(new mu());}
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
_=vt.prototype=new ux();_.xb=mv;_.cc=nv;_.Cc=ov;_.tN=gO+'HTMLTable';_.tI=69;_.a=null;_.b=null;_.c=null;_.d=null;function at(a){Cu(a);hv(a,Es(new Ds(),a));kv(a,ju(new iu(),a));return a;}
function ct(b,a){Du(b,a);return av(b,b.a,a);}
function dt(a){return bv(a);}
function et(b,a){return dv(b,a);}
function ft(e,d,b){var a,c;gt(e,d);if(b<0){throw fF(new dF(),'Cannot create a column with a negative index: '+b);}a=ct(e,d);c=b+1-a;if(c>0){ht(e.a,d,c);}}
function gt(d,b){var a,c;if(b<0){throw fF(new dF(),'Cannot create a row with a negative index: '+b);}c=dt(d);for(a=c;a<=b;a++){et(d,a);}}
function ht(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function Cs(){}
_=Cs.prototype=new vt();_.tN=gO+'FlexTable';_.tI=70;function Ft(b,a){b.a=a;return b;}
function bu(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function cu(c,b,a){return bu(c,c.a.a,b,a);}
function du(d,c,a,b,e){fu(d,c,a,b);gu(d,c,a,e);}
function eu(e,d,a,c){var b;ft(e.a,d,a);b=bu(e,e.a.a,d,a);xl(b,'height',c);}
function fu(e,d,b,a){var c;ft(e.a,d,b);c=bu(e,e.a.a,d,b);xl(c,'align',a.a);}
function gu(d,c,b,a){ft(d.a,c,b);Bl(bu(d,d.a.a,c,b),'verticalAlign',a.a);}
function hu(c,b,a,d){ft(c.a,b,a);xl(bu(c,c.a.a,b,a),'width',d);}
function Et(){}
_=Et.prototype=new fG();_.tN=gO+'HTMLTable$CellFormatter';_.tI=71;function Es(b,a){Ft(b,a);return b;}
function Ds(){}
_=Ds.prototype=new Et();_.tN=gO+'FlexTable$FlexCellFormatter';_.tI=72;function jt(a){qr(a);a.Ec(ck());return a;}
function kt(a,b){rr(a,b,a.jb());}
function mt(b,c,a){yr(b,c,b.jb(),a,true);}
function it(){}
_=it.prototype=new or();_.tN=gO+'FlowPanel';_.tI=73;function ax(a){a.Ec(ck());yB(a,131197);xB(a,'gwt-Label');return a;}
function bx(b,a){ax(b);hx(b,a);return b;}
function cx(b,a){if(b.b===null){b.b=kr(new jr());}kK(b.b,a);}
function dx(b,a){if(b.c===null){b.c=lx(new kx());}kK(b.c,a);}
function fx(a){return hl(a.jb());}
function gx(b,a){switch(Bk(a)){case 1:if(b.b!==null){mr(b.b,b);}break;case 4:case 8:case 64:case 16:case 32:if(b.c!==null){px(b.c,b,a);}break;case 131072:break;}}
function hx(b,a){Al(b.jb(),a);}
function ix(a,b){Bl(a.jb(),'whiteSpace',b?'normal':'nowrap');}
function jx(a){gx(this,a);}
function Fw(){}
_=Fw.prototype=new nC();_.cc=jx;_.tN=gO+'Label';_.tI=74;_.b=null;_.c=null;function pv(a){ax(a);a.Ec(ck());yB(a,125);xB(a,'gwt-HTML');return a;}
function qv(b,a){pv(b);tv(b,a);return b;}
function rv(b,a,c){qv(b,a);ix(b,c);return b;}
function tv(b,a){zl(b.jb(),a);}
function ut(){}
_=ut.prototype=new Fw();_.tN=gO+'HTML';_.tI=75;function xt(a){{At(a);}}
function yt(b,a){b.b=a;xt(b);return b;}
function At(a){while(++a.a<a.b.b.b){if(pK(a.b.b,a.a)!==null){return;}}}
function Bt(a){return a.a<a.b.b.b;}
function Ct(){return Bt(this);}
function Dt(){var a;if(!Bt(this)){throw zN(new yN());}a=pK(this.b.b,this.a);At(this);return a;}
function wt(){}
_=wt.prototype=new fG();_.vb=Ct;_.Eb=Dt;_.tN=gO+'HTMLTable$1';_.tI=76;_.a=(-1);function ju(b,a){b.b=a;return b;}
function lu(a){if(a.a===null){a.a=dk('colgroup');ll(a.b.d,a.a,0);Fj(a.a,dk('col'));}}
function iu(){}
_=iu.prototype=new fG();_.tN=gO+'HTMLTable$ColumnFormatter';_.tI=77;_.a=null;function qu(a){a.b=iK(new gK());}
function ru(a){qu(a);return a;}
function tu(c,a){var b;b=zu(a);if(b<0){return null;}return mi(pK(c.b,b),14);}
function uu(b,c){var a;if(b.a===null){a=b.b.b;kK(b.b,c);}else{a=b.a.a;vK(b.b,a,c);b.a=b.a.b;}Au(c.jb(),a);}
function vu(c,a,b){yu(a);vK(c.b,b,null);c.a=ou(new nu(),b,c.a);}
function wu(c,a){var b;b=zu(a);vu(c,a,b);}
function xu(a){return yt(new wt(),a);}
function yu(a){a['__widgetID']=null;}
function zu(a){var b=a['__widgetID'];return b==null?-1:b;}
function Au(a,b){a['__widgetID']=b;}
function mu(){}
_=mu.prototype=new fG();_.tN=gO+'HTMLTable$WidgetMapper';_.tI=78;_.a=null;function ou(c,a,b){c.a=a;c.b=b;return c;}
function nu(){}
_=nu.prototype=new fG();_.tN=gO+'HTMLTable$WidgetMapper$FreeNode';_.tI=79;_.a=0;_.b=null;function Av(){Av=DN;Bv=yv(new xv(),'center');Cv=yv(new xv(),'left');yv(new xv(),'right');}
var Bv,Cv;function yv(b,a){b.a=a;return b;}
function xv(){}
_=xv.prototype=new fG();_.tN=gO+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=80;_.a=null;function cw(){cw=DN;dw=aw(new Fv(),'bottom');ew=aw(new Fv(),'middle');fw=aw(new Fv(),'top');}
var dw,ew,fw;function aw(a,b){a.a=b;return a;}
function Fv(){}
_=Fv.prototype=new fG();_.tN=gO+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=81;_.a=null;function jw(a){a.a=(Av(),Cv);a.c=(cw(),fw);}
function kw(a){Aq(a);jw(a);a.b=jk();Fj(a.d,a.b);xl(a.e,'cellSpacing','0');xl(a.e,'cellPadding','0');return a;}
function lw(b,c){var a;a=nw(b);Fj(b.b,a);rr(b,c,a);}
function nw(b){var a;a=ik();Dq(b,a,b.a);Eq(b,a,b.c);return a;}
function ow(c,d,a){var b;ur(c,a);b=nw(c);ll(c.b,b,a);yr(c,d,b,a,false);}
function pw(c,d){var a,b;b=il(d.jb());a=Ar(c,d);if(a){pl(c.b,b);}return a;}
function qw(b,a){b.c=a;}
function rw(a){return pw(this,a);}
function iw(){}
_=iw.prototype=new zq();_.Cc=rw;_.tN=gO+'HorizontalPanel';_.tI=82;_.b=null;function tw(a){a.Ec(ck());Fj(a.jb(),a.a=bk());yB(a,1);xB(a,'gwt-Hyperlink');return a;}
function uw(c,b,a){tw(c);zw(c,b);yw(c,a);return c;}
function vw(b,a){if(b.b===null){b.b=kr(new jr());}kK(b.b,a);}
function xw(a){return hl(a.a);}
function yw(b,a){b.c=a;xl(b.a,'href','#'+a);}
function zw(b,a){Al(b.a,a);}
function Aw(a){if(Bk(a)==1){if(this.b!==null){mr(this.b,this);}wm(this.c);Ck(a);}}
function sw(){}
_=sw.prototype=new nC();_.cc=Aw;_.tN=gO+'Hyperlink';_.tI=83;_.a=null;_.b=null;_.c=null;function Ew(a){return (yk(a)?1:0)|(xk(a)?8:0)|(uk(a)?2:0)|(qk(a)?4:0);}
function lx(a){iK(a);return a;}
function nx(d,c,e,f){var a,b;for(a=sI(d);hI(a);){b=mi(iI(a),23);b.mc(c,e,f);}}
function ox(d,c){var a,b;for(a=sI(d);hI(a);){b=mi(iI(a),23);b.nc(c);}}
function px(e,c,a){var b,d,f,g,h;d=c.jb();g=sk(a)-Ek(d)+cl(d,'scrollLeft')+xn();h=tk(a)-Fk(d)+cl(d,'scrollTop')+yn();switch(Bk(a)){case 4:nx(e,c,g,h);break;case 8:sx(e,c,g,h);break;case 64:rx(e,c,g,h);break;case 16:b=vk(a);if(!ml(d,b)){ox(e,c);}break;case 32:f=Ak(a);if(!ml(d,f)){qx(e,c);}break;}}
function qx(d,c){var a,b;for(a=sI(d);hI(a);){b=mi(iI(a),23);b.oc(c);}}
function rx(d,c,e,f){var a,b;for(a=sI(d);hI(a);){b=mi(iI(a),23);b.pc(c,e,f);}}
function sx(d,c,e,f){var a,b;for(a=sI(d);hI(a);){b=mi(iI(a),23);b.qc(c,e,f);}}
function kx(){}
_=kx.prototype=new gK();_.tN=gO+'MouseListenerCollection';_.tI=84;function By(){By=DN;qD(),sD;}
function zy(b,a){qD(),sD;br(b,ek(a));xB(b,'gwt-RadioButton');return b;}
function Ay(c,b,a){qD(),sD;zy(c,b);fr(c,a);return c;}
function yy(){}
_=yy.prototype=new ar();_.tN=gO+'RadioButton';_.tI=85;function cz(){cz=DN;hz=pM(new tL());}
function bz(b,a){cz();oq(b);if(a===null){a=dz();}b.Ec(a);b.ac();return b;}
function ez(){cz();return fz(null);}
function fz(c){cz();var a,b;b=mi(vM(hz,c),24);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=al(c))){return null;}}if(hz.c==0){gz();}wM(hz,c,b=bz(new Cy(),a));return b;}
function dz(){cz();return $doc.body;}
function gz(){cz();nn(new Dy());}
function Cy(){}
_=Cy.prototype=new nq();_.tN=gO+'RootPanel';_.tI=86;var hz;function Fy(){var a,b;for(b=mJ(AJ((cz(),hz)));tJ(b);){a=mi(uJ(b),24);if(a.wb()){a.ec();}}}
function az(){return null;}
function Dy(){}
_=Dy.prototype=new fG();_.xc=Fy;_.yc=az;_.tN=gO+'RootPanel$1';_.tI=87;function kz(a){a.a=a.b.n!==null;}
function lz(b,a){b.b=a;kz(b);return b;}
function nz(){return this.a;}
function oz(){if(!this.a||this.b.n===null){throw zN(new yN());}this.a=false;return this.b.n;}
function jz(){}
_=jz.prototype=new fG();_.vb=nz;_.Eb=oz;_.tN=gO+'SimplePanel$1';_.tI=88;function bA(a){a.a=kw(new iw());}
function cA(c){var a,b;bA(c);Fr(c,c.a);yB(c,1);xB(c,'gwt-TabBar');qw(c.a,(cw(),dw));a=rv(new ut(),'&nbsp;',true);b=rv(new ut(),'&nbsp;',true);xB(a,'gwt-TabBarFirst');xB(b,'gwt-TabBarRest');a.Fc('100%');b.Fc('100%');lw(c.a,a);lw(c.a,b);a.Fc('100%');Cq(c.a,a,'100%');Fq(c.a,b,'100%');return c;}
function dA(b,a){if(b.c===null){b.c=oA(new nA());}kK(b.c,a);}
function eA(b,a){if(a<0||a>hA(b)){throw eF(new dF());}}
function fA(b,a){if(a<(-1)||a>=hA(b)){throw eF(new dF());}}
function hA(a){return a.a.f.b-2;}
function iA(e,d,a,b){var c;eA(e,b);if(a){c=qv(new ut(),d);}else{c=bx(new Fw(),d);}ix(c,false);cx(c,e);xB(c,'gwt-TabBarItem');ow(e.a,c,b+1);}
function jA(b,a){var c;fA(b,a);c=xr(b.a,a+1);if(c===b.b){b.b=null;}pw(b.a,c);}
function kA(b,a){fA(b,a);if(b.c!==null){if(!qA(b.c,b,a)){return false;}}lA(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=xr(b.a,a+1);lA(b,b.b,true);if(b.c!==null){rA(b.c,b,a);}return true;}
function lA(c,a,b){if(a!==null){if(b){nB(a,'gwt-TabBarItem-selected');}else{tB(a,'gwt-TabBarItem-selected');}}}
function mA(b){var a;for(a=1;a<this.a.f.b-1;++a){if(xr(this.a,a)===b){kA(this,a-1);return;}}}
function aA(){}
_=aA.prototype=new Dr();_.dc=mA;_.tN=gO+'TabBar';_.tI=89;_.b=null;_.c=null;function oA(a){iK(a);return a;}
function qA(e,c,d){var a,b;for(a=sI(e);hI(a);){b=mi(iI(a),25);if(!b.bc(c,d)){return false;}}return true;}
function rA(e,c,d){var a,b;for(a=sI(e);hI(a);){b=mi(iI(a),25);b.vc(c,d);}}
function nA(){}
_=nA.prototype=new gK();_.tN=gO+'TabListenerCollection';_.tI=90;function FA(a){a.b=BA(new AA());a.a=vA(new uA(),a.b);}
function aB(b){var a;FA(b);a=hC(new fC());iC(a,b.b);iC(a,b.a);Cq(a,b.a,'100%');b.b.dd('100%');dA(b.b,b);Fr(b,a);xB(b,'gwt-TabPanel');xB(b.a,'gwt-TabPanelBottom');return b;}
function cB(b,c,a){fB(b,c,a,b.a.f.b);}
function bB(b,a){if(b.c===null){b.c=oA(new nA());}kK(b.c,a);}
function eB(b,a){return xr(b.a,a);}
function gB(d,e,c,a,b){xA(d.a,e,c,a,b);}
function fB(c,d,b,a){gB(c,d,b,false,a);}
function hB(b,a){kA(b.b,a);}
function iB(){return zr(this.a);}
function jB(a,b){if(this.c!==null){return qA(this.c,this,b);}return true;}
function kB(a,b){ls(this.a,b);if(this.c!==null){rA(this.c,this,b);}}
function lB(a){return yA(this.a,a);}
function tA(){}
_=tA.prototype=new Dr();_.xb=iB;_.bc=jB;_.vc=kB;_.Cc=lB;_.tN=gO+'TabPanel';_.tI=91;_.c=null;function vA(b,a){fs(b);b.a=a;return b;}
function xA(e,f,d,a,b){var c;c=wr(e,f);if(c!=(-1)){yA(e,f);if(c<b){b--;}}DA(e.a,d,a,b);is(e,f,b);}
function yA(b,c){var a;a=wr(b,c);if(a!=(-1)){EA(b.a,a);return js(b,c);}return false;}
function zA(a){return yA(this,a);}
function uA(){}
_=uA.prototype=new es();_.Cc=zA;_.tN=gO+'TabPanel$TabbedDeckPanel';_.tI=92;_.a=null;function BA(a){cA(a);return a;}
function DA(d,c,a,b){iA(d,c,a,b);}
function EA(b,a){jA(b,a);}
function AA(){}
_=AA.prototype=new aA();_.tN=gO+'TabPanel$UnmodifiableTabBar';_.tI=93;function gC(a){a.a=(Av(),Cv);a.b=(cw(),fw);}
function hC(a){Aq(a);gC(a);xl(a.e,'cellSpacing','0');xl(a.e,'cellPadding','0');return a;}
function iC(b,d){var a,c;c=jk();a=kC(b);Fj(c,a);Fj(b.d,c);rr(b,d,a);}
function kC(b){var a;a=ik();Dq(b,a,b.a);Eq(b,a,b.b);return a;}
function lC(c,e,a){var b,d;ur(c,a);d=jk();b=kC(c);Fj(d,b);ll(c.d,d,a);yr(c,e,b,a,false);}
function mC(c){var a,b;b=il(c.jb());a=Ar(this,c);if(a){pl(this.d,il(b));}return a;}
function fC(){}
_=fC.prototype=new zq();_.Cc=mC;_.tN=gO+'VerticalPanel';_.tI=94;function uC(b,a){b.a=gi('[Lcom.google.gwt.user.client.ui.Widget;',[170],[14],[4],null);return b;}
function vC(a,b){zC(a,b,a.b);}
function xC(b,a){if(a<0||a>=b.b){throw eF(new dF());}return b.a[a];}
function yC(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function zC(d,e,a){var b,c;if(a<0||a>d.b){throw eF(new dF());}if(d.b==d.a.a){c=gi('[Lcom.google.gwt.user.client.ui.Widget;',[170],[14],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ii(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ii(d.a,b,d.a[b-1]);}ii(d.a,a,e);}
function AC(a){return qC(new pC(),a);}
function BC(c,b){var a;if(b<0||b>=c.b){throw eF(new dF());}--c.b;for(a=b;a<c.b;++a){ii(c.a,a,c.a[a+1]);}ii(c.a,c.b,null);}
function CC(b,c){var a;a=yC(b,c);if(a==(-1)){throw zN(new yN());}BC(b,a);}
function oC(){}
_=oC.prototype=new fG();_.tN=gO+'WidgetCollection';_.tI=95;_.a=null;_.b=0;function qC(b,a){b.b=a;return b;}
function sC(){return this.a<this.b.b-1;}
function tC(){if(this.a>=this.b.b){throw zN(new yN());}return this.b.a[++this.a];}
function pC(){}
_=pC.prototype=new fG();_.vb=sC;_.Eb=tC;_.tN=gO+'WidgetCollection$WidgetIterator';_.tI=96;_.a=(-1);function qD(){qD=DN;rD=nD(new mD());sD=rD;}
function pD(a){qD();return a;}
function lD(){}
_=lD.prototype=new fG();_.tN=hO+'FocusImpl';_.tI=97;var rD,sD;function oD(){oD=DN;qD();}
function nD(a){oD();pD(a);return a;}
function mD(){}
_=mD.prototype=new lD();_.tN=hO+'FocusImplIE6';_.tI=98;function AD(a){return ck();}
function tD(){}
_=tD.prototype=new fG();_.tN=hO+'PopupImpl';_.tI=99;function wD(c,b){var a=b.__frame;a.parentElement.removeChild(a);b.__frame=null;a.__popup=null;}
function xD(d,b){var a=$doc.createElement('iframe');a.src="javascript:''";a.scrolling='no';a.frameBorder=0;b.__frame=a;a.__popup=b;var c=a.style;c.position='absolute';c.filter='alpha(opacity=0)';c.visibility=b.style.visibility;c.left=b.offsetLeft;c.top=b.offsetTop;c.width=b.offsetWidth;c.height=b.offsetHeight;c.setExpression('left','this.__popup.offsetLeft');c.setExpression('top','this.__popup.offsetTop');c.setExpression('width','this.__popup.offsetWidth');c.setExpression('height','this.__popup.offsetHeight');b.parentElement.insertBefore(a,b);}
function yD(b,a,c){if(a.__frame){a.__frame.style.visibility=c?'visible':'hidden';}}
function uD(){}
_=uD.prototype=new tD();_.tN=hO+'PopupImplIE6';_.tI=100;function ED(){}
_=ED.prototype=new fG();_.tN=iO+'OutputStream';_.tI=101;function CD(){}
_=CD.prototype=new ED();_.tN=iO+'FilterOutputStream';_.tI=102;function aE(){}
_=aE.prototype=new CD();_.tN=iO+'PrintStream';_.tI=103;function eE(){eE=DN;nG();}
function dE(a){eE();lG(a);return a;}
function cE(){}
_=cE.prototype=new kG();_.tN=jO+'ArrayStoreException';_.tI=104;function hE(){hE=DN;iE=gE(new fE(),false);jE=gE(new fE(),true);}
function gE(a,b){hE();a.a=b;return a;}
function kE(a){return ni(a,30)&&mi(a,30).a==this.a;}
function lE(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function mE(){return this.a?'true':'false';}
function nE(a){hE();return a?jE:iE;}
function fE(){}
_=fE.prototype=new fG();_.eQ=kE;_.hC=lE;_.tS=mE;_.tN=jO+'Boolean';_.tI=105;_.a=false;var iE,jE;function rE(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+tF(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function vE(){vE=DN;nG();}
function tE(a){vE();lG(a);return a;}
function uE(b,a){vE();mG(b,a);return b;}
function sE(){}
_=sE.prototype=new kG();_.tN=jO+'ClassCastException';_.tI=106;function EE(){EE=DN;nG();}
function DE(b,a){EE();mG(b,a);return b;}
function CE(){}
_=CE.prototype=new kG();_.tN=jO+'IllegalArgumentException';_.tI=107;function cF(){cF=DN;nG();}
function aF(a){cF();lG(a);return a;}
function bF(b,a){cF();mG(b,a);return b;}
function FE(){}
_=FE.prototype=new kG();_.tN=jO+'IllegalStateException';_.tI=108;function gF(){gF=DN;nG();}
function eF(a){gF();lG(a);return a;}
function fF(b,a){gF();mG(b,a);return b;}
function dF(){}
_=dF.prototype=new kG();_.tN=jO+'IndexOutOfBoundsException';_.tI=109;function FF(){FF=DN;{eG();}}
function aG(a){FF();return isNaN(a);}
function bG(e,d,c,h){FF();var a,b,f,g;if(e===null){throw DF(new CF(),'Unable to parse null');}b=FG(e);f=b>0&&yG(e,0)==45?1:0;for(a=f;a<b;a++){if(rE(yG(e,a),d)==(-1)){throw DF(new CF(),'Could not parse '+e+' in radix '+d);}}g=cG(e,d);if(aG(g)){throw DF(new CF(),'Unable to parse '+e);}else if(g<c||g>h){throw DF(new CF(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function cG(b,a){FF();return parseInt(b,a);}
function eG(){FF();dG=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var dG=null;function iF(){iF=DN;FF();}
function lF(a){iF();return mF(a,10);}
function mF(b,a){iF();return pi(bG(b,a,(-2147483648),2147483647));}
function nF(a){iF();return lH(a);}
var jF=2147483647,kF=(-2147483648);function qF(a){return a<0?-a:a;}
function rF(a){return a<0?-a:a;}
function sF(a,b){return a>b?a:b;}
function tF(a,b){return a<b?a:b;}
function uF(a){return Math.sqrt(a);}
function xF(){xF=DN;nG();}
function wF(a){xF();lG(a);return a;}
function vF(){}
_=vF.prototype=new kG();_.tN=jO+'NegativeArraySizeException';_.tI=110;function AF(){AF=DN;nG();}
function zF(b,a){AF();mG(b,a);return b;}
function yF(){}
_=yF.prototype=new kG();_.tN=jO+'NullPointerException';_.tI=111;function EF(){EF=DN;EE();}
function DF(b,a){EF();DE(b,a);return b;}
function CF(){}
_=CF.prototype=new CE();_.tN=jO+'NumberFormatException';_.tI=112;function yG(b,a){return b.charCodeAt(a);}
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
_=String.prototype;_.v=gH;_.eQ=hH;_.hC=jH;_.tS=kH;_.tN=jO+'String';_.tI=2;var iH=null;function qG(a){sG(a);return a;}
function rG(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function sG(a){tG(a,'');}
function tG(b,a){b.js=[a];b.length=a.length;}
function vG(a){a.Fb();return a.js[0];}
function wG(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function xG(){return vG(this);}
function pG(){}
_=pG.prototype=new fG();_.Fb=wG;_.tS=xG;_.tN=jO+'StringBuffer';_.tI=113;function oH(){oH=DN;qH=new aE();}
function pH(){oH();return new Date().getTime();}
function rH(a){oH();return lh(a);}
var qH;function CH(){CH=DN;nG();}
function BH(b,a){CH();mG(b,a);return b;}
function AH(){}
_=AH.prototype=new kG();_.tN=jO+'UnsupportedOperationException';_.tI=114;function fI(b,a){b.c=a;return b;}
function hI(a){return a.a<a.c.ed();}
function iI(a){if(!hI(a)){throw zN(new yN());}return a.c.tb(a.b=a.a++);}
function jI(a){if(a.b<0){throw aF(new FE());}a.c.Bc(a.b);a.a=a.b;a.b=(-1);}
function kI(){return hI(this);}
function lI(){return iI(this);}
function mI(){jI(this);}
function eI(){}
_=eI.prototype=new fG();_.vb=kI;_.Eb=lI;_.Ac=mI;_.tN=kO+'AbstractList$IteratorImpl';_.tI=115;_.a=0;_.b=(-1);function oI(b,a){fI(b,a);return b;}
function nI(){}
_=nI.prototype=new eI();_.tN=kO+'AbstractList$ListIteratorImpl';_.tI=116;function yJ(f,d,e){var a,b,c;for(b=kM(f.ab());cM(b);){a=dM(b);c=a.lb();if(d===null?c===null:d.eQ(c)){if(e){eM(b);}return a;}}return null;}
function zJ(b){var a;a=b.ab();return CI(new BI(),b,a);}
function AJ(b){var a;a=uM(b);return kJ(new jJ(),b,a);}
function BJ(a){return yJ(this,a,false)!==null;}
function CJ(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ni(d,32)){return false;}f=mi(d,32);c=zJ(this);e=f.yb();if(!dK(c,e)){return false;}for(a=EI(c);fJ(a);){b=gJ(a);h=this.ub(b);g=f.ub(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function DJ(b){var a;a=yJ(this,b,false);return a===null?null:a.rb();}
function EJ(){var a,b,c;b=0;for(c=kM(this.ab());cM(c);){a=dM(c);b+=a.hC();}return b;}
function FJ(){return zJ(this);}
function aK(){var a,b,c,d;d='{';a=false;for(c=kM(this.ab());cM(c);){b=dM(c);if(a){d+=', ';}else{a=true;}d+=mH(b.lb());d+='=';d+=mH(b.rb());}return d+'}';}
function AI(){}
_=AI.prototype=new fG();_.z=BJ;_.eQ=CJ;_.ub=DJ;_.hC=EJ;_.yb=FJ;_.tS=aK;_.tN=kO+'AbstractMap';_.tI=117;function dK(e,b){var a,c,d;if(b===e){return true;}if(!ni(b,33)){return false;}c=mi(b,33);if(c.ed()!=e.ed()){return false;}for(a=c.xb();a.vb();){d=a.Eb();if(!e.A(d)){return false;}}return true;}
function eK(a){return dK(this,a);}
function fK(){var a,b,c;a=0;for(b=this.xb();b.vb();){c=b.Eb();if(c!==null){a+=c.hC();}}return a;}
function bK(){}
_=bK.prototype=new DH();_.eQ=eK;_.hC=fK;_.tN=kO+'AbstractSet';_.tI=118;function CI(b,a,c){b.a=a;b.b=c;return b;}
function EI(b){var a;a=kM(b.b);return dJ(new cJ(),b,a);}
function FI(a){return this.a.z(a);}
function aJ(){return EI(this);}
function bJ(){return this.b.a.c;}
function BI(){}
_=BI.prototype=new bK();_.A=FI;_.xb=aJ;_.ed=bJ;_.tN=kO+'AbstractMap$1';_.tI=119;function dJ(b,a,c){b.a=c;return b;}
function fJ(a){return cM(a.a);}
function gJ(b){var a;a=dM(b.a);return a.lb();}
function hJ(){return fJ(this);}
function iJ(){return gJ(this);}
function cJ(){}
_=cJ.prototype=new fG();_.vb=hJ;_.Eb=iJ;_.tN=kO+'AbstractMap$2';_.tI=120;function kJ(b,a,c){b.a=a;b.b=c;return b;}
function mJ(b){var a;a=kM(b.b);return rJ(new qJ(),b,a);}
function nJ(a){return tM(this.a,a);}
function oJ(){return mJ(this);}
function pJ(){return this.b.a.c;}
function jJ(){}
_=jJ.prototype=new DH();_.A=nJ;_.xb=oJ;_.ed=pJ;_.tN=kO+'AbstractMap$3';_.tI=121;function rJ(b,a,c){b.a=c;return b;}
function tJ(a){return cM(a.a);}
function uJ(a){var b;b=dM(a.a).rb();return b;}
function vJ(){return tJ(this);}
function wJ(){return uJ(this);}
function qJ(){}
_=qJ.prototype=new fG();_.vb=vJ;_.Eb=wJ;_.tN=kO+'AbstractMap$4';_.tI=122;function eL(b){var a,c;a=iK(new gK());for(c=0;c<b.a;c++){kK(a,b[c]);}return a;}
function fL(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.w(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function gL(a){fL(a,a.a,(nL(),oL));}
function nL(){nL=DN;oL=new kL();}
var oL;function mL(a,b){return mi(a,38).v(b);}
function kL(){}
_=kL.prototype=new fG();_.w=mL;_.tN=kO+'Comparators$1';_.tI=123;function rM(){rM=DN;yM=EM();}
function oM(a){{qM(a);}}
function pM(a){rM();oM(a);return a;}
function qM(a){a.a=vh();a.d=wh();a.b=ui(yM,rh);a.c=0;}
function sM(b,a){if(ni(a,1)){return cN(b.d,mi(a,1))!==yM;}else if(a===null){return b.b!==yM;}else{return bN(b.a,a,a.hC())!==yM;}}
function tM(a,b){if(a.b!==yM&&aN(a.b,b)){return true;}else if(DM(a.d,b)){return true;}else if(BM(a.a,b)){return true;}return false;}
function uM(a){return hM(new EL(),a);}
function vM(c,a){var b;if(ni(a,1)){b=cN(c.d,mi(a,1));}else if(a===null){b=c.b;}else{b=bN(c.a,a,a.hC());}return b===yM?null:b;}
function wM(c,a,d){var b;if(ni(a,1)){b=fN(c.d,mi(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=eN(c.a,a,d,a.hC());}if(b===yM){++c.c;return null;}else{return b;}}
function xM(c,a){var b;if(ni(a,1)){b=hN(c.d,mi(a,1));}else if(a===null){b=c.b;c.b=ui(yM,rh);}else{b=gN(c.a,a,a.hC());}if(b===yM){return null;}else{--c.c;return b;}}
function zM(e,c){rM();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function AM(d,a){rM();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=xL(c.substring(1),e);a.s(b);}}}
function BM(f,h){rM();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.rb();if(aN(h,d)){return true;}}}}return false;}
function CM(a){return sM(this,a);}
function DM(c,d){rM();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(aN(d,a)){return true;}}}return false;}
function EM(){rM();}
function FM(){return uM(this);}
function aN(a,b){rM();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function dN(a){return vM(this,a);}
function bN(f,h,e){rM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(aN(h,d)){return c.rb();}}}}
function cN(b,a){rM();return b[':'+a];}
function eN(f,h,j,e){rM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(aN(h,d)){var i=c.rb();c.ad(j);return i;}}}else{a=f[e]=[];}var c=xL(h,j);a.push(c);}
function fN(c,a,d){rM();a=':'+a;var b=c[a];c[a]=d;return b;}
function gN(f,h,e){rM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.lb();if(aN(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.rb();}}}}
function hN(c,a){rM();a=':'+a;var b=c[a];delete c[a];return b;}
function tL(){}
_=tL.prototype=new AI();_.z=CM;_.ab=FM;_.ub=dN;_.tN=kO+'HashMap';_.tI=124;_.a=null;_.b=null;_.c=0;_.d=null;var yM;function vL(b,a,c){b.a=a;b.b=c;return b;}
function xL(a,b){return vL(new uL(),a,b);}
function yL(b){var a;if(ni(b,39)){a=mi(b,39);if(aN(this.a,a.lb())&&aN(this.b,a.rb())){return true;}}return false;}
function zL(){return this.a;}
function AL(){return this.b;}
function BL(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function CL(a){var b;b=this.b;this.b=a;return b;}
function DL(){return this.a+'='+this.b;}
function uL(){}
_=uL.prototype=new fG();_.eQ=yL;_.lb=zL;_.rb=AL;_.hC=BL;_.ad=CL;_.tS=DL;_.tN=kO+'HashMap$EntryImpl';_.tI=125;_.a=null;_.b=null;function hM(b,a){b.a=a;return b;}
function jM(d,c){var a,b,e;if(ni(c,39)){a=mi(c,39);b=a.lb();if(sM(d.a,b)){e=vM(d.a,b);return aN(a.rb(),e);}}return false;}
function kM(a){return aM(new FL(),a.a);}
function lM(a){return jM(this,a);}
function mM(){return kM(this);}
function nM(){return this.a.c;}
function EL(){}
_=EL.prototype=new bK();_.A=lM;_.xb=mM;_.ed=nM;_.tN=kO+'HashMap$EntrySet';_.tI=126;function aM(c,b){var a;c.c=b;a=iK(new gK());if(c.c.b!==(rM(),yM)){kK(a,vL(new uL(),null,c.c.b));}AM(c.c.d,a);zM(c.c.a,a);c.a=sI(a);return c;}
function cM(a){return hI(a.a);}
function dM(a){return a.b=mi(iI(a.a),39);}
function eM(a){if(a.b===null){throw bF(new FE(),'Must call next() before remove().');}else{jI(a.a);xM(a.c,a.b.lb());a.b=null;}}
function fM(){return cM(this);}
function gM(){return dM(this);}
function FL(){}
_=FL.prototype=new fG();_.vb=fM;_.Eb=gM;_.tN=kO+'HashMap$EntrySetIterator';_.tI=127;_.a=null;_.b=null;function jN(a){a.a=pM(new tL());return a;}
function kN(c,a){var b;b=wM(c.a,a,nE(true));return b===null;}
function mN(a){return EI(zJ(a.a));}
function nN(b,a){return xM(b.a,a)!==null;}
function oN(a){return kN(this,a);}
function pN(a){return sM(this.a,a);}
function qN(){return mN(this);}
function rN(){return this.a.c;}
function sN(){return zJ(this.a).tS();}
function iN(){}
_=iN.prototype=new bK();_.s=oN;_.A=pN;_.xb=qN;_.ed=rN;_.tS=sN;_.tN=kO+'HashSet';_.tI=128;_.a=null;function AN(){AN=DN;nG();}
function zN(a){AN();lG(a);return a;}
function yN(){}
_=yN.prototype=new kG();_.tN=kO+'NoSuchElementException';_.tI=129;function sO(){}
_=sO.prototype=new fG();_.tN=lO+'BezierCurve';_.tI=130;function uO(a){a.b=ck();a.c=ck();{if(!BO){BO=AO(a);}a.e=dk('g_vml_:group');a.d=dk('g_vml_:curve');Fj(a.e,a.d);ul(a.e,'class','gwt-diagrams-vml-group');ul(a.d,'class','gwt-diagrams-vml-curve');Fj(ez().jb(),a.e);Fj(ez().jb(),a.c);Bl(a.c,'display','none');xl(a.c,'className','gwt-diagrams-vml-curve');ul(a.d,'strokecolor',CO(a.c,'color'));ul(a.d,'strokeweight',CO(a.c,'width'));ul(a.d,'filled','false');Bl(a.e,'width','100px');Bl(a.e,'height','100px');Bl(a.e,'position','absolute');ul(a.e,'coordsize','100,100');}}
function vO(a){uO(a);return a;}
function yO(f,c,d,a,b){var e;if(!f.a){Fj(il(f.b),f.e);pl(il(f.b),f.b);f.b=null;f.a=true;}ul(f.d,'strokecolor',CO(f.c,'color'));ul(f.d,'strokeweight',CO(f.c,'width'));e=yQ(new xQ(),tF(c.a,d.a),tF(c.b,d.b));Bl(f.e,'left',nF(e.a));Bl(f.e,'top',nF(e.b));xO(f,BQ(c,DQ(e)),BQ(d,DQ(e)),BQ(a,DQ(e)),BQ(b,DQ(e)));}
function xO(e,c,d,a,b){ul(e.d,'from',c.a+','+c.b);ul(e.d,'to',d.a+','+d.b);ul(e.d,'control1',a.a+','+a.b);ul(e.d,'control2',b.a+','+b.b);}
function zO(a){if(a.a){return a.d;}else{return a.b;}}
function AO(b){if(!$doc.namespaces['g_vml_']){$doc.namespaces.add('g_vml_','urn:schemas-microsoft-com:vml');}var a=$doc.createStyleSheet();a.cssText='g_vml_\\:*{behavior:url(#default#VML)}';return true;}
function CO(b,a){if(b.currentStyle){return b.currentStyle[a];}else{return null;}}
function tO(){}
_=tO.prototype=new sO();_.tN=lO+'BezierCurveVml';_.tI=131;_.a=false;_.d=null;_.e=null;var BO=false;function FO(a){a.c=iK(new gK());}
function aP(c,d){var a,b;FO(c);jK(c.c,d);fP(c,c.B());for(b=sI(c.c);hI(b);){a=mi(iI(b),35);a.x(c);}return c;}
function bP(a,b){aP(a,eL(b));return a;}
function dP(a){return a.b.u(a.c);}
function eP(c,a){var b;b=qK(c.c,a);if(b>(-1)){uK(c.c,a);cR(a,c);}}
function fP(b,a){b.b=a;}
function gP(a){a.gd(dP(a));}
function hP(){var a,b;for(b=tI(this.c);b.vb();){a=mi(b.Eb(),35);b.Ac();a.D(this);}FC(this);}
function iP(){gP(this);}
function EO(){}
_=EO.prototype=new nC();_.Ac=hP;_.fd=iP;_.tN=mO+'AbstractConnection';_.tI=132;_.b=null;function kP(a){a.a=vO(new tO());}
function mP(a,b){bP(a,b);kP(a);if(b.a!=2){throw DE(new CE(),'Need exactly two connectors to connect');}a.Ec(zO(a.a));nB(a,'gwt-diagrams-connection');return a;}
function lP(c,a,b){mP(c,hi('[Lpl.balon.gwt.diagrams.client.connector.Connector;',167,35,[a,b]));return c;}
function oP(){return new FP();}
function pP(){return zO(this.a);}
function qP(b){var a;if(!ni(b,40)){throw DE(new CE(),'Expected BezierConnectionData');}a=mi(b,40);if(a.b.b!=2){throw DE(new CE(),'Expected two connection points');}if(a.a.b!=2){throw DE(new CE(),'Expected two control points');}yO(this.a,mi(pK(a.b,0),34),mi(pK(a.b,1),34),mi(pK(a.a,0),34),mi(pK(a.a,1),34));}
function jP(){}
_=jP.prototype=new EO();_.B=oP;_.jb=pP;_.gd=qP;_.tN=mO+'BezierTwoEndedConnection';_.tI=133;function tP(a){a.a=iK(new gK());}
function vP(a,b){bP(a,b);tP(a);if(b.a!=2){throw DE(new CE(),'Need exactly two connectors to connect');}a.Ec(ck());nB(a,'gwt-diagrams-connection');return a;}
function uP(c,a,b){vP(c,hi('[Lpl.balon.gwt.diagrams.client.connector.Connector;',167,35,[a,b]));return c;}
function xP(d,a){var b,c;for(c=d.a.b;c<a;c++){b=ck();kK(d.a,ui(b,em));Fj(d.jb(),b);zl(b,'&nbsp;');}while(d.a.b>a){b=mi(pK(d.a,0),19);uK(d.a,ui(b,em));pl(d.jb(),b);}}
function yP(){return new eQ();}
function zP(a){var b,c,d,e,f;if(a.b.b<=1){throw DE(new CE(),'Too few connection points');}xP(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=mi(pK(this.a,d),19);e=mi(pK(a.b,d),34);c=mi(pK(a.b,d+1),34);f='gwt-diagrams-line';ul(b,'style','');xl(b,'className',f);Bl(b,'height','1');Bl(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Bl(b,'height',nF(qF(e.b-c.b)));}else if(e.b==c.b){Bl(b,'width',nF(qF(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Bl(b,'left',nF(tF(e.a,c.a)));Bl(b,'top',nF(tF(e.b,c.b)));xl(b,'className',f);}}
function sP(){}
_=sP.prototype=new EO();_.B=yP;_.gd=zP;_.tN=mO+'RectilinearTwoEndedConnection';_.tI=134;function BP(c,a,b){lP(c,a,b);return c;}
function DP(){return new kQ();}
function EP(a){if(a.b.b!=2){throw DE(new CE(),'Expected two connection points');}yO(this.a,mi(pK(a.b,0),34),mi(pK(a.b,1),34),mi(pK(a.b,1),34),mi(pK(a.b,0),34));}
function AP(){}
_=AP.prototype=new jP();_.B=DP;_.gd=EP;_.tN=mO+'StraightTwoEndedConnection';_.tI=135;function bQ(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=gi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[169],[37],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=AQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function cQ(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw DE(new CE(),'Unsupported connectors count');}c=mi(pK(e,0),35);d=mi(pK(e,1),35);f=bQ(this,c,d);h=c.zc(f[0]);i=d.zc(f[1]);a=CQ(h,f[0],50);b=CQ(i,f[1],50);g=qQ(new nQ(),hi('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',165,34,[h,i]),hi('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',165,34,[a,b]));return g;}
function FP(){}
_=FP.prototype=new fG();_.u=cQ;_.tN=nO+'BezierConnectionCalculator';_.tI=136;function fQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(nR(),qR);}if(c==1&&d>0){return a!==(nR(),rR);}if(c==0&&d<0){return a!==(nR(),rR);}if(c==1&&d<0){return a!==(nR(),qR);}}else{if(c==0&&d>0){return a!==(nR(),sR);}if(c==1&&d>0){return a!==(nR(),pR);}if(c==0&&d<0){return a!==(nR(),pR);}if(c==1&&d<0){return a!==(nR(),sR);}}return false;}
function hQ(j,d,e){var a,b,c,f,g,h,i;f=d.gb();g=e.gb();c=gi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[169],[37],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=AQ(d.db(f[h]),e.db(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function iQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(nR(),rR);}if(c==1&&d>0){return a===(nR(),qR);}if(c==0&&d<0){return a===(nR(),qR);}if(c==1&&d<0){return a===(nR(),rR);}}else{if(c==0&&d>0){return a===(nR(),pR);}if(c==1&&d>0){return a===(nR(),sR);}if(c==0&&d<0){return a===(nR(),sR);}if(c==1&&d<0){return a===(nR(),pR);}}return false;}
function jQ(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw DE(new CE(),'Unsupported connectors count');}a=mi(pK(c,0),35);b=mi(pK(c,1),35);d=uQ(new sQ());e=hQ(this,a,b);i=a.zc(e[0]);j=CQ(i,e[0],10);k=b.zc(e[1]);l=CQ(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(iQ(this,e[0],0,f,true)&&iQ(this,e[1],1,f,true)){g=CQ(j,e[0],qF(qi(f/2)));h=yQ(new xQ(),g.a,l.b);}else if(iQ(this,e[0],0,m,false)&&iQ(this,e[1],1,m,false)){g=CQ(j,e[0],qF(qi(m/2)));h=yQ(new xQ(),l.a,g.b);}else if(iQ(this,e[0],0,f,true)&&iQ(this,e[1],1,m,false)){g=CQ(j,e[0],qF(f));h=CQ(l,e[1],qF(m));}else if(iQ(this,e[0],0,m,false)&&iQ(this,e[1],1,f,true)){g=CQ(j,e[0],qF(m));h=CQ(l,e[1],qF(f));}else if(iQ(this,e[0],0,f,true)&&fQ(this,e[1],1,f,true)){g=CQ(j,e[0],qF(qi(f/2)));h=yQ(new xQ(),g.a,l.b);}else if(fQ(this,e[0],0,f,true)&&iQ(this,e[1],1,f,true)){h=CQ(l,e[1],qF(qi(f/2)));g=yQ(new xQ(),h.a,j.b);}else if(iQ(this,e[0],0,m,false)&&fQ(this,e[1],1,m,false)){g=CQ(j,e[0],qF(qi(m/2)));h=yQ(new xQ(),l.a,g.b);}else if(fQ(this,e[0],0,m,false)&&iQ(this,e[1],1,m,false)){h=CQ(l,e[1],qF(qi(m/2)));g=yQ(new xQ(),j.a,h.b);}else if(fQ(this,e[0],0,f,true)&&fQ(this,e[1],1,f,true)){g=CQ(j,(nR(),rR),qi(f/2));h=yQ(new xQ(),g.a,l.b);}else if(fQ(this,e[0],0,m,false)&&fQ(this,e[1],1,m,false)){g=CQ(j,(nR(),pR),qi(m/2));h=yQ(new xQ(),l.a,g.b);}else if(fQ(this,e[0],0,f,true)&&fQ(this,e[1],1,m,false)){g=CQ(j,(nR(),rR),f);}else if(fQ(this,e[0],0,m,false)&&fQ(this,e[1],1,f,true)){g=CQ(j,(nR(),pR),m);}kK(d.b,i);kK(d.b,j);if(g!==null){kK(d.b,g);}if(h!==null){kK(d.b,h);}kK(d.b,l);kK(d.b,k);return d;}
function eQ(){}
_=eQ.prototype=new fG();_.u=jQ;_.tN=nO+'FullRectilinearTwoEndedCalculator';_.tI=137;function mQ(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw DE(new CE(),'Unsupported connectors count');}a=mi(pK(e,0),35);b=mi(pK(e,1),35);f=uQ(new sQ());c=yQ(new xQ(),a.mb()+qi(a.sb()/2),a.qb()+qi(a.kb()/2));d=yQ(new xQ(),b.mb()+qi(b.sb()/2),b.qb()+qi(b.kb()/2));g=yQ(new xQ(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=qi(a.kb()/2);h=g.b!=0?qi(j*g.a/qF(g.b)):2147483647;j*= -k;if(qF(h)>qi(a.sb()/2)){h=qi(a.sb()/2);j=g.a!=0?qi(h*g.b/qF(g.a)):2147483647;h*= -i;}kK(f.b,yQ(new xQ(),c.a+h,c.b+j));j=qi(b.kb()/2);h=g.b!=0?qi(j*g.a/qF(g.b)):2147483647;j*=k;h= -h;if(qF(h)>qi(b.sb()/2)){h=qi(b.sb()/2);j=g.a!=0?qi(h*g.b/qF(g.a)):2147483647;h*=i;j= -j;}kK(f.b,yQ(new xQ(),d.a+h,d.b+j));return f;}
function kQ(){}
_=kQ.prototype=new fG();_.u=mQ;_.tN=nO+'StraightCenterConnectionDataCalculator';_.tI=138;function tQ(a){a.b=iK(new gK());}
function uQ(a){tQ(a);return a;}
function vQ(b,a){tQ(b);jK(b.b,a);return b;}
function sQ(){}
_=sQ.prototype=new fG();_.tN=oO+'ConnectionData';_.tI=139;function oQ(a){a.a=iK(new gK());}
function pQ(c,b,a){vQ(c,b);oQ(c);jK(c.a,a);return c;}
function qQ(c,b,a){pQ(c,eL(b),eL(a));return c;}
function nQ(){}
_=nQ.prototype=new sQ();_.tN=oO+'BezierConnectionData';_.tI=140;function yQ(b,a,c){b.a=a;b.b=c;return b;}
function AQ(b,a){return uF((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function CQ(c,a,b){if(a===(nR(),pR)){return yQ(new xQ(),c.a,c.b+b);}else if(a===(nR(),sR)){return yQ(new xQ(),c.a,c.b-b);}else if(a===(nR(),qR)){return yQ(new xQ(),c.a-b,c.b);}else if(a===(nR(),rR)){return yQ(new xQ(),c.a+b,c.b);}else{throw aF(new FE());}}
function BQ(a,b){return yQ(new xQ(),a.a+b.a,a.b+b.b);}
function DQ(a){return yQ(new xQ(),-a.a,-a.b);}
function xQ(){}
_=xQ.prototype=new fG();_.tN=oO+'Point';_.tI=141;_.a=0;_.b=0;function FQ(a){a.c=jN(new iN());}
function aR(a){FQ(a);return a;}
function cR(b,a){if(nN(b.c,a)){eP(a,b);}}
function dR(b,a){return CQ(yQ(new xQ(),b.mb()+qi(b.sb()/2),b.qb()+qi(b.kb()/2)),a,oR(a)?qi(b.sb()/2):qi(b.kb()/2));}
function eR(c){var a,b;for(b=mN(c.c);fJ(b);){a=mi(gJ(b),41);a.fd();}}
function fR(a){kN(this.c,a);}
function gR(a){cR(this,a);}
function hR(a){return dR(this,a);}
function iR(){return tR();}
function jR(a){return dR(this,a);}
function EQ(){}
_=EQ.prototype=new fG();_.x=fR;_.D=gR;_.db=hR;_.gb=iR;_.zc=jR;_.tN=pO+'AbstractConnector';_.tI=142;function nR(){nR=DN;sR=mR(new lR(),'UP');pR=mR(new lR(),'DOWN');qR=mR(new lR(),'LEFT');rR=mR(new lR(),'RIGHT');}
function mR(b,a){nR();b.a=a;return b;}
function oR(a){return a===qR||a===rR;}
function tR(){nR();return hi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',169,37,[sR,pR,qR,rR]);}
function uR(){return this.a;}
function lR(){}
_=lR.prototype=new fG();_.tS=uR;_.tN=pO+'Direction';_.tI=143;_.a=null;var pR,qR,rR,sR;function BR(){BR=DN;dS=pM(new tL());}
function AR(a,b){BR();aR(a);a.b=b;return a;}
function CR(){return this.b.nb();}
function DR(){var a,b;a=0;b=il(this.b.jb());while(b!==null){if(BG('relative',jl(b,'position'))){a=Ek(b);break;}b=il(b);}return pB(this.b)-a;}
function ER(){var a,b;a=0;b=il(this.b.jb());while(b!==null){if(BG('relative',jl(b,'position'))){a=Fk(b);break;}b=il(b);}return qB(this.b)-a;}
function FR(){return this.b.ob();}
function aS(a){BR();return mi(vM(dS,a),42);}
function bS(b){BR();var a;if(sM(dS,b)){return mi(vM(dS,b),42);}else{a=AR(new vR(),b);wM(dS,b,a);return a;}}
function cS(c,b){BR();var a;if(sM(dS,c)){return mi(vM(dS,c),42);}else{a=xR(new wR(),c,b);wM(dS,c,a);return a;}}
function vR(){}
_=vR.prototype=new EQ();_.kb=CR;_.mb=DR;_.qb=ER;_.sb=FR;_.tN=pO+'UIObjectConnector';_.tI=144;_.b=null;var dS;function yR(){yR=DN;BR();}
function xR(b,a,c){yR();b.a=c;AR(b,a);return b;}
function zR(){return this.a;}
function wR(){}
_=wR.prototype=new vR();_.gb=zR;_.tN=pO+'UIObjectConnector$1';_.tI=145;function nS(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function oS(a){hh(new fS());cm(jS(new iS(),a));}
function eS(){}
_=eS.prototype=new fG();_.tN=qO+'BaseExamplesEntryPoint';_.tI=146;function hS(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=xH(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=ps(new ns(),true);Bl(a.jb(),'backgroundColor','#ABCDEF');oH(),qH;d=aH(d,' ','&nbsp;');ss(a,'<pre>'+d+'<\/pre>');by(a);}
function fS(){}
_=fS.prototype=new fG();_.tN=qO+'BaseExamplesEntryPoint$1';_.tI=147;function jS(b,a){b.a=a;return b;}
function lS(){wS(this.a);}
function iS(){}
_=iS.prototype=new fG();_.bb=lS;_.tN=qO+'BaseExamplesEntryPoint$2';_.tI=148;function wS(c){var a,b;b=aB(new tA());pq(fz('tabs'),b);cB(b,FU(new EU()),'Rectilinear');cB(b,xT(new wT()),'Bezier');cB(b,dV(new cV()),'Straight');cB(b,rU(new AT()),'Diagram builder');bB(b,rS(new qS(),c,b));a=nS(c,'tab');if(a===null||BG('',a)){a='0';}hB(b,lF(a));}
function pS(){}
_=pS.prototype=new eS();_.tN=qO+'GwtDiagramsExample';_.tI=149;function rS(b,a,c){b.a=c;return b;}
function tS(a,b){return true;}
function uS(b,c){var a;a=mi(eB(this.a,c),43);oT(a);}
function qS(){}
_=qS.prototype=new fG();_.bc=tS;_.vc=uS;_.tN=qO+'GwtDiagramsExample$1';_.tI=150;function sT(a){a.i=oq(new nq());}
function tT(a){var b;pz(a);sT(a);nB(a,'gwt-diagrams-example');b=hC(new fC());rz(a,b);iC(b,a.i);iC(b,vT(a,nT(a)));return a;}
function vT(e,d){var a,b,c;a=jt(new it());nB(a,'gwt-diagrams-sources-panel');for(b=sI(d);hI(b);){c=mi(iI(b),14);kt(a,c);}return a;}
function rT(){}
_=rT.prototype=new iz();_.tN=rO+'AbstractExample';_.tI=151;function gT(a){a.g=iK(new gK());}
function hT(a){tT(a);gT(a);a.h=lT(a);Bl(a.i.jb(),'width','450px');Bl(a.i.jb(),'height','350px');a.C();return a;}
function iT(b,a){pq(b.i,a);kK(b.g,a);}
function kT(e,d,c,f,a){var b;b=bx(new Fw(),d);nB(b,'example-connector');qq(e.i,b,c,f);BS(e.h,b);if(a!==null){return cS(b,hi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',169,37,[a]));}return bS(b);}
function lT(b){var a;a=zS(new yS(),b.i,true,b);return a;}
function mT(b,a){uK(b.g,a);}
function nT(f){var a,b,c,d,e;e=iK(new gK());b=EG(fh(f),46);a=bH(fh(f),b+1);kK(e,uw(new sw(),a+'.java',''));kK(e,uw(new sw(),'AbstractExample.java',''));kK(e,uw(new sw(),'AbstractConnectionsExample.java',''));for(d=sI(e);hI(d);){c=mi(iI(d),44);nB(c,'gwt-diagrams-source-link');vw(c,dT(new cT(),f,c));}return e;}
function oT(c){var a,b;for(b=sI(c.g);hI(b);){a=mi(iI(b),41);a.fd();}}
function pT(a){iT(this,a);}
function qT(){var a,b,c,d,e,f,g,h;a=kT(this,'all',50,50,null);b=kT(this,'all',100,100,null);this.y(a,b);c=kT(this,'up',250,50,(nR(),sR));d=kT(this,'down',300,100,(nR(),pR));this.y(c,d);e=kT(this,'left',50,200,(nR(),qR));f=kT(this,'right',100,250,(nR(),rR));this.y(e,f);g=kT(this,'left',250,200,(nR(),qR));h=kT(this,'left',300,250,(nR(),qR));this.y(g,h);}
function xS(){}
_=xS.prototype=new rT();_.t=pT;_.C=qT;_.tN=rO+'AbstractConnectionsExample';_.tI=152;_.h=null;function AS(){AS=DN;ad();}
function zS(d,a,b,c){AS();Fc(d,a,b);return d;}
function BS(a,b){A(a,b);Bl(b.jb(),'position','absolute');Bl(b.jb(),'zIndex','100');}
function CS(a){BS(this,a);}
function DS(b,a){return FS(new ES(),b,a,this);}
function yS(){}
_=yS.prototype=new Ec();_.Ab=CS;_.Cb=DS;_.tN=rO+'AbstractConnectionsExample$1';_.tI=153;function aT(){aT=DN;se();}
function FS(d,a,b,c){aT();re(d,a,b);return d;}
function bT(d,c,b){var a;od(this,d,c,b);a=aS(c);if(a!==null){eR(a);}}
function ES(){}
_=ES.prototype=new qe();_.rc=bT;_.tN=rO+'AbstractConnectionsExample$2';_.tI=154;function dT(b,a,c){b.a=c;return b;}
function fT(a){Dn('../source/'+xw(this.a),'','');}
function cT(){}
_=cT.prototype=new fG();_.dc=fT;_.tN=rO+'AbstractConnectionsExample$3';_.tI=155;function xT(a){hT(a);return a;}
function zT(a,b){this.t(lP(new jP(),a,b));}
function wT(){}
_=wT.prototype=new xS();_.y=zT;_.tN=rO+'BezierExample';_.tI=156;function qU(a){a.c=iK(new gK());}
function rU(a){hT(a);qU(a);return a;}
function sU(b,a){iT(b,a);gP(a);}
function uU(c,a,b){if(BG('rectilinear',c.d)){sU(c,uP(new sP(),a,b));}else if(BG('bezier',c.d)){sU(c,lP(new jP(),a,b));}else if(BG('straight',c.d)){sU(c,BP(new AP(),a,b));}}
function vU(e,d,c){var a,b;b=iU(new hU(),fx(d),e);wB(b,d.ob(),d.nb());nB(b,'example-connector');qq(c,b,pB(d)-pB(c),qB(d)-qB(c));BS(e.h,b);a=null;if(BG('T',fx(b))){a=(nR(),sR);}else if(BG('L',fx(b))){a=(nR(),qR);}else if(BG('B',fx(b))){a=(nR(),pR);}else if(BG('R',fx(b))){a=(nR(),rR);}if(a!==null){return cS(b,hi('[Lpl.balon.gwt.diagrams.client.connector.Direction;',169,37,[a]));}return bS(b);}
function wU(c,a){var b;b=bx(new Fw(),a);nB(b,'helpEntry');lw(c.a,b);}
function xU(d,c,a){var b;b=Ay(new yy(),'style',c);nB(b,'style-option');er(b,a);if(a){AU(d,c);}lw(d.e,b);pt(b,eU(new dU(),d,c));return b;}
function yU(d,a,c){var b;b=bx(new Fw(),a);xB(b,'toolbox-node');nB(b,c);lw(d.e,b);d.f.Ab(b);return b;}
function zU(d,e){var a,b,c,f;if(sK(d.c)){nB(e,'selected-connector');b=aS(e).c;for(c=mN(b);fJ(c);){a=mi(gJ(c),41);a.Ac();mT(d,a);}kK(d.c,e);}else if(oK(d.c,e)){tB(e,'selected-connector');uK(d.c,e);}else if(d.c.b==1){f=mi(pK(d.c,0),14);tB(e,'selected-connector');tB(f,'selected-connector');b=aS(e).c;for(c=mN(b);fJ(c);){a=mi(gJ(c),41);a.Ac();mT(d,a);}uU(d,aS(f),aS(e));mK(d.c);}}
function AU(b,a){b.d=a;}
function BU(a){sU(this,a);}
function CU(a,b){uU(this,a,b);}
function DU(){var a,b,c;a=Fc(new Ec(),this.i,true);b=jd(new id(),this.i);this.f=nU(new lU(),b,a,this);this.e=kw(new iw());xB(this.e,'toolbox');this.b=oq(new nq());this.a=kw(new iw());xB(this.a,'helpPanel');c=hC(new fC());xB(c,'builder');iC(c,this.a);iC(c,this.e);iC(c,this.b);pq(this.i,c);yU(this,'A','all');yU(this,'L','left');yU(this,'R','right');yU(this,'T','top');yU(this,'B','bottom');xU(this,'rectilinear',true);xU(this,'bezier',false);xU(this,'straight',false);wU(this,'drag&drop from toolbar to add');wU(this,'CTRL+click to select/connect');wU(this,'DEL to delete selected');Ej(aU(new FT(),this));}
function AT(){}
_=AT.prototype=new xS();_.t=BU;_.y=CU;_.C=DU;_.tN=rO+'DiagramBuilderExample';_.tI=157;_.a=null;_.b=null;_.d=null;_.e=null;_.f=null;function CT(b,a,c){b.a=a;b.b=c;return b;}
function ET(a){var b,c,d;b=a.d;d=mi(vM(this.a.a,b),14);c=this.b.g;vU(this.a.b,mi(d,45),c);throw gd(new fd());}
function BT(){}
_=BT.prototype=new rb();_.sc=ET;_.tN=rO+'DiagramBuilderExample$1';_.tI=158;function aU(b,a){b.a=a;return b;}
function cU(a){var b,c;if(128==Bk(a)&&46==wk(a)&& !sK(this.a.c)){for(b=tI(this.a.c);hI(b);){c=mi(iI(b),14);jI(b);FC(c);}return false;}return true;}
function FT(){}
_=FT.prototype=new fG();_.jc=cU;_.tN=rO+'DiagramBuilderExample$2';_.tI=159;function eU(b,a,c){b.a=a;b.b=c;return b;}
function gU(a){AU(this.a,this.b);}
function dU(){}
_=dU.prototype=new fG();_.dc=gU;_.tN=rO+'DiagramBuilderExample$3';_.tI=160;function iU(c,a,b){c.a=b;bx(c,a);return c;}
function kU(a){if(Bk(a)==1&&uk(a)){zU(this.a,this);}gx(this,a);}
function hU(){}
_=hU.prototype=new Fw();_.cc=kU;_.tN=rO+'DiagramBuilderExample$4';_.tI=161;function oU(){oU=DN;ad();}
function mU(a){a.a=pM(new tL());}
function nU(d,a,b,c){oU();d.b=c;Fc(d,d.b.i,false);mU(d);dd(d,true);F(d,a);u(d,CT(new BT(),d,a));return d;}
function pU(a){var b,c;b=mi(a,45);c=bx(new Fw(),fx(b));nB(c,'dragdrop-proxy');nB(c,'toolbox-node-proxy');wB(c,b.ob(),b.nb());wM(this.a,b,c);return c;}
function lU(){}
_=lU.prototype=new Ec();_.Bb=pU;_.tN=rO+'DiagramBuilderExample$ToolboxDragController';_.tI=162;function FU(a){hT(a);return a;}
function bV(a,b){this.t(uP(new sP(),a,b));}
function EU(){}
_=EU.prototype=new xS();_.y=bV;_.tN=rO+'RectilinearExample';_.tI=163;function dV(a){hT(a);return a;}
function fV(c,a,b){c.t(BP(new AP(),a,b));}
function gV(a,b){fV(this,a,b);}
function hV(){var a,b;a=kT(this,'connector 1',50,50,(nR(),sR));b=kT(this,'connector 2',200,200,(nR(),pR));fV(this,a,b);}
function cV(){}
_=cV.prototype=new xS();_.y=gV;_.C=hV;_.tN=rO+'StraightConnectionsExample';_.tI=164;function BD(){oS(new pS());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{BD();}catch(a){b(d);}else{BD();}}
var ti=[{},{27:1},{1:1,27:1,38:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{7:1,27:1},{27:1},{27:1,31:1},{27:1,31:1},{27:1,31:1},{27:1},{27:1},{10:1,27:1,38:1},{23:1,27:1},{27:1},{16:1,27:1},{16:1,27:1},{12:1,16:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{27:1},{13:1,16:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{15:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1},{20:1,27:1},{20:1,27:1},{20:1,27:1},{27:1},{15:1,19:1,27:1},{15:1,27:1},{21:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1,28:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{2:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,23:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{5:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,45:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{3:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,44:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{2:1,14:1,24:1,26:1,27:1,28:1,29:1},{21:1,27:1},{27:1},{14:1,22:1,27:1,28:1,29:1},{27:1,31:1},{14:1,25:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,22:1,27:1,28:1,29:1},{4:1,14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1,30:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{27:1},{11:1,16:1,27:1},{27:1},{27:1},{27:1,32:1},{27:1,33:1},{27:1,33:1},{27:1},{27:1},{27:1},{27:1},{27:1,32:1},{27:1,39:1},{27:1,33:1},{27:1},{27:1,33:1},{11:1,16:1,27:1},{27:1},{27:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{27:1},{27:1},{27:1},{27:1},{27:1,40:1},{27:1,34:1},{27:1,35:1},{27:1,37:1},{27:1,35:1,42:1},{27:1,35:1,42:1},{27:1},{27:1},{17:1,27:1},{27:1},{25:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{8:1,27:1},{22:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{7:1,27:1},{18:1,27:1},{22:1,27:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{9:1,27:1},{27:1},{27:1},{27:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();