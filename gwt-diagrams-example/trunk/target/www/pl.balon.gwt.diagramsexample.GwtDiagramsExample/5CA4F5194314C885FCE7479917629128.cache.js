(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,dL='com.allen_sauer.gwt.dragdrop.client.',eL='com.allen_sauer.gwt.dragdrop.client.drop.',fL='com.allen_sauer.gwt.dragdrop.client.util.',gL='com.allen_sauer.gwt.dragdrop.client.util.impl.',hL='com.google.gwt.core.client.',iL='com.google.gwt.lang.',jL='com.google.gwt.user.client.',kL='com.google.gwt.user.client.impl.',lL='com.google.gwt.user.client.ui.',mL='com.google.gwt.user.client.ui.impl.',nL='java.io.',oL='java.lang.',pL='java.util.',qL='pl.balon.gwt.diagrams.client.common.bezier.',rL='pl.balon.gwt.diagrams.client.connection.',sL='pl.balon.gwt.diagrams.client.connection.calculator.',tL='pl.balon.gwt.diagrams.client.connection.data.',uL='pl.balon.gwt.diagrams.client.connector.',vL='pl.balon.gwt.diagramsexample.client.',wL='pl.balon.gwt.diagramsexample.client.examples.';function cL(){}
function vD(a){return this===a;}
function wD(){return FE(this);}
function xD(){return this.tN+'@'+this.hC();}
function tD(){}
_=tD.prototype={};_.eQ=vD;_.hC=wD;_.tS=xD;_.toString=function(){return this.tS();};_.tN=oL+'Object';_.tI=1;function yI(b,a){b.d=a;return b;}
function xI(){}
_=xI.prototype=new tD();_.tN=pL+'EventObject';_.tI=3;_.d=null;function ib(c,b,a){yI(c,b);c.c=a;return c;}
function kb(){var a;a=this.c!==null?'dropTarget='+jf(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+jf(this.d)+')';}
function hb(){}
_=hb.prototype=new xI();_.tS=kb;_.tN=dL+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ib(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new hb();_.tS=q;_.tN=dL+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function u(){u=cL;F=wJ(new AI());}
function s(a){a.g=x(a);}
function t(c,b,a){u();s(c);c.f=b!==null?b:Cw();c.e=tP(c,c.f,a);B(c,c.e);c.l=Cb(new Ab(),c);return c;}
function v(c,a,b){jz(a,'dragdrop-dragging');}
function w(b,a){yb(b.g,b.f,a);dz(a,'dragdrop-dragging');}
function x(a){return tb(new lb());}
function y(b,c){var a;a=wb(b.g,c,b.f);return a!==null?a:b.e;}
function z(a,b){{A(a,b,b);}}
function A(c,b,a){ac(c.l,b,a);dz(b,'dragdrop-draggable');dz(a,'dragdrop-handle');DJ(F,b,a);}
function B(b,a){ub(b.g,a);}
function C(b,a){if(rh(b.j,2)){dp(qh(b.j,2),a,b.k.a,b.k.d);}else if(rh(b.j,3)){mu(qh(b.j,3),a,b.h);}else if(rh(b.j,4)){bA(qh(b.j,4),a,b.h);}else if(rh(b.j,5)){tr(qh(b.j,5),a,b.h);}else if(rh(b.j,6)){qh(b.j,6).wc(a);}else{throw AD(new yD(),'Unable to handle initialDraggableParent '+jg(b.j));}}
function D(b,a){if(b.i!==null&&nE(b.i)!=0){zk(a.gb(),'margin',b.i);}}
function E(b,a){b.j=a.p;if(rh(b.j,2)){b.k=of(new nf(),a,b.j);}else if(rh(b.j,3)){b.h=Dp(qh(b.j,3),a);}else if(rh(b.j,4)){b.h=Dp(qh(b.j,4),a);}else if(rh(b.j,5)){b.h=Dp(qh(b.j,5),a);}else if(rh(b.j,6)){}else{throw AD(new yD(),"Unable to handle 'initialDraggableParent instanceof "+jg(b.j)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.i=ik(a.gb(),'margin');if(b.i!==null&&nE(b.i)!=0){zk(a.gb(),'margin','0px');}}
function r(){}
_=r.prototype=new tD();_.tN=dL+'AbstractDragController';_.tI=6;_.e=null;_.f=null;_.h=0;_.i=null;_.j=null;_.k=null;_.l=null;var F;function bb(b,a){b.b=a;return b;}
function db(a){if(a.c==0){return;}Db(a.b,a.d,a.e);a.a=DE()-a.c;a.c=0;}
function eb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=DE();}if(a.a>80){al(a);}else{db(a);}}
function fb(){db(this);}
function ab(){}
_=ab.prototype=new tD();_.F=fb;_.tN=dL+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function sb(a){a.a=rH(new pH());}
function tb(a){sb(a);return a;}
function ub(b,a){tH(b.a,a);}
function wb(g,h,a){var b,c,d,e,f,i,j,k;i=lf(new kf(),h,null);j=he(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.c;if(le(f,i)){k=ge(f,j);if(k<=c){if(e===null|| !lk(pb(b).gb(),pb(e).gb())){c=k;e=b;}}}}return e===null?null:e.a;}
function xb(a){return CF(a.a);}
function yb(h,b,d){var a,c,e,f,g;a=lf(new kf(),b,null);g=rH(new pH());for(f=xb(h);vF(f);){e=qh(wF(f),7);c=nb(new mb(),e);if(!lk(d.gb(),pb(c).gb())){if(le(c.c,a)){tH(g,c);}}}h.b=qh(DH(g,lh('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',156,9,[])),8);nI(h.b);}
function lb(){}
_=lb.prototype=new tD();_.tN=dL+'DropControllerCollection';_.tI=8;_.b=null;function nb(c,a){var b;c.a=a;b=a.fb();if(!b.ub()){throw qC(new oC(),'Unattached drop target; please call dragController#unregisterDropController');}c.c=lf(new kf(),b,null);return c;}
function pb(a){return a.a.fb();}
function qb(a){if(a.b===null){a.b=xC(new wC(),je(a.c));}return a.b;}
function rb(a){var b;b=qh(a,9);return zC(qb(this),qb(b));}
function mb(){}
_=mb.prototype=new tD();_.u=rb;_.tN=dL+'DropControllerCollection$Candidate';_.tI=9;_.a=null;_.b=null;_.c=null;function Bb(a){a.c=bb(new ab(),a);a.e=wJ(new AI());}
function Cb(b,a){Bb(b);b.d=a;b.a=a.f;return b;}
function Db(e,f,g){var a,b,c,d;c=of(new nf(),e.b,e.a);a=c.a+e.m+f-e.i;b=c.d+e.n+g-e.j;Ce(e.l.gb(),a,b);d=y(e.d,e.l);if(e.h!==d){if(e.h!==null){e.h.cc(e.f,e.d);}e.h=d;if(e.h!==null){e.h.ac(e.l,e.f,e.d);}}if(e.h!==null){e.h.jc(e.l,e.f,e.d);}}
function Eb(b){var a;nk(b.b.gb());b.g=false;if(b.h!==null){b.h.cc(b.f,b.d);}b.h=null;kc(b.d,b.f,null);a=ib(new hb(),b.f,null);}
function ac(c,b,a){if(a!==null){bv(a,c);DJ(c.e,a,b);}else{throw AD(new yD(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function bc(f,g){var a,c,d,e;f.b=g;f.f=qh(CJ(f.e,f.b),12);lc(f.d,f.f);f.l=f.d.d;e=of(new nf(),f.b,f.a);c=of(new nf(),f.l,f.a);f.m=c.a-e.a;f.n=c.d-e.d;sk(f.b.gb());f.g=true;try{Db(f,f.i,f.j);}catch(a){a=Ah(a);if(rh(a,10)){d=a;Eb(f);throw d;}else throw a;}}
function cc(b,c,d){var a;a=rj((aj(),lj));if(a!=1&&a!=(-1)){return;}this.k=true;if(this.g){return;}Cj((aj(),lj));ef();this.i=c;this.j=d;}
function dc(a){}
function ec(a){}
function fc(d,e,f){var a,c;if(!this.g){if(this.k){bc(this,d);}if(!this.g){return;}}Cj((aj(),lj));try{eb(this.c,e,f);}catch(a){a=Ah(a);if(rh(a,10)){c=a;Eb(this);throw c;}else throw a;}}
function gc(g,h,i){var a,a,d,e,f;d=rj((aj(),lj));if(d!=1&&d!=(-1)){return;}this.k=false;if(!this.g){return;}try{nk(this.b.gb());Db(this,h,i);this.g=false;if(this.h===null){Eb(this);return;}{this.h.fb();}try{this.h.kc(this.l,this.f,this.d);}catch(a){a=Ah(a);if(rh(a,11)){a;Eb(this);return;}else throw a;}kc(this.d,this.f,this.h.fb());e=this.h.Fb(this.l,this.f,this.d);}catch(a){a=Ah(a);if(rh(a,10)){f=a;Eb(this);throw f;}else throw a;}finally{this.h=null;}}
function Ab(){}
_=Ab.prototype=new tD();_.ec=cc;_.fc=dc;_.gc=ec;_.hc=fc;_.ic=gc;_.tN=dL+'MouseDragHandler';_.tI=10;_.a=null;_.b=null;_.d=null;_.f=null;_.g=false;_.h=null;_.i=0;_.j=0;_.k=false;_.l=null;_.m=0;_.n=0;function jc(){jc=cL;u();}
function ic(c,b,a){jc();t(c,b,a);return c;}
function kc(c,a,b){v(c,a,b);if(c.a!==null){c.a=null;if(c.c!==null){vA(c.c);c.c=null;}else{if(b===null){C(c,a);}}D(c,a);vA(c.d);c.d=null;}}
function lc(d,a){var b,c;w(d,a);d.a=a;d.c=mc(d,a);E(d,a);c=of(new nf(),a,d.f);d.d=hx(new ax());dz(d.d,'dragdrop-movable-panel');if(d.c===null){mz(d.d,a.mb(),a.lb());}dp(d.f,d.d,c.a,c.d);b=d.c!==null?d.c:d.a;d.d.wc(b);}
function mc(c,a){var b;if(c.b){b=qt(new ur(),'this is a Drag Proxy');dz(b,'dragdrop-proxy');mz(b,c.a.mb(),c.a.lb());return b;}else{return null;}}
function hc(){}
_=hc.prototype=new r();_.tN=dL+'PickupDragController';_.tI=11;_.a=null;_.b=false;_.c=null;_.d=null;function Cc(b,a){b.g=a;dz(a,'dragdrop-boundary');return b;}
function Ec(d,c,b,a){jz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.xb(c,b,a);}
function Fc(d,c,b,a){dz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function ad(c,b,a){jz(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function bd(){return this.g;}
function cd(c,b,a){return ib(new hb(),b,this.g);}
function dd(c,b,a){return Ec(this,c,b,a);}
function ed(c,b,a){Fc(this,c,b,a);}
function fd(b,a){ad(this,b,a);}
function gd(c,b,a){}
function hd(c,b,a){}
function Bc(){}
_=Bc.prototype=new tD();_.fb=bd;_.xb=cd;_.Fb=dd;_.ac=ed;_.cc=fd;_.jc=gd;_.kc=hd;_.tN=eL+'AbstractDropController';_.tI=12;_.g=null;function kd(){kd=cL;qd=Fu(new Du(),'x');}
function jd(b,a){kd();Cc(b,a);return b;}
function ld(f,e){var a,b,c,d;d=hx(new ax());dz(d,'dragdrop-positioner');dp(Cw(),d,(-500),(-500));d.wc(qd);a=hx(new ax());c=e.mb()-bf(d);b=e.lb()-cf(d);mz(a,c,b);d.wc(a);return d;}
function md(e,d,b,a){var c;c=Ec(e,d,b,a);pd(e);return c;}
function nd(d,c,b,a){Fc(d,c,b,a);d.f=ld(d,b);}
function od(c,b,a){ad(c,b,a);pd(c);}
function pd(a){if(a.f!==null){vA(a.f);}}
function rd(c,b,a){return md(this,c,b,a);}
function sd(c,b,a){nd(this,c,b,a);}
function td(b,a){od(this,b,a);}
function id(){}
_=id.prototype=new Bc();_.Fb=rd;_.ac=sd;_.cc=td;_.tN=eL+'AbstractPositioningDropController';_.tI=13;_.f=null;var qd;function pc(){pc=cL;kd();}
function oc(b,a){pc();jd(b,a);b.d=Cd(new Bd(),a);return b;}
function qc(d,c,a,e){var b;b=d.cb(c,a,e);if(b!==null){dp(d.d.b,e,b.a,b.d);}}
function rc(e,d,b,a){var c;dp(e.d.b,b,e.c.a,e.c.d);c=md(e,d,b,a);e.e=null;return c;}
function sc(c,b,a){od(c,b,a);ae(c.d,null);c.e=null;}
function tc(d,c,b,a){qc(d,c,b,d.f);}
function uc(b,a,d){var c;c=lf(new kf(),b,this.d.a);if(this.e===null){this.e=of(new nf(),b,this.d.b);}else{uf(this.e,b);}qf(this.e,0,0,Fd(this.d)-ke(c),Ed(this.d)-ie(c));return this.e;}
function vc(e,b,a){var c,d;c=this.g;d=of(new nf(),b,c);return o(new n(),b,c,d.a,d.d);}
function wc(c,b,a){return rc(this,c,b,a);}
function xc(c,b,a){nd(this,c,b,a);ae(this.d,a.f);}
function yc(b,a){sc(this,b,a);}
function zc(c,b,a){tc(this,c,b,a);}
function Ac(c,b,a){this.c=this.cb(c,b,b);if(this.c===null){throw ce(new be());}}
function nc(){}
_=nc.prototype=new id();_.cb=uc;_.xb=vc;_.Fb=wc;_.ac=xc;_.cc=yc;_.jc=zc;_.kc=Ac;_.tN=eL+'AbsolutePositionDropController';_.tI=14;_.c=null;_.d=null;_.e=null;function wd(){wd=cL;pc();}
function vd(c,b,a){wd();oc(c,b);c.a=a;return c;}
function xd(b,a,d){var c;if(this.a){c=lf(new kf(),b,this.d.a);if(this.b===null){this.b=of(new nf(),b,this.d.b);}else{uf(this.b,b);}qf(this.b,0,0,Fd(this.d)-ke(c),Ed(this.d)-ie(c));return this.b;}else{return null;}}
function yd(d,c,a){var b;b=rc(this,d,c,a);this.b=null;return b;}
function zd(b,a){sc(this,b,a);this.b=null;}
function ud(){}
_=ud.prototype=new nc();_.cb=xd;_.Fb=yd;_.cc=zd;_.tN=eL+'BoundaryDropController';_.tI=15;_.a=false;_.b=null;function Cd(b,a){b.b=a;return b;}
function Ed(a){return Fe(a.b.gb());}
function Fd(a){return af(a.b.gb());}
function ae(b,a){b.a=a;}
function Bd(){}
_=Bd.prototype=new tD();_.tN=eL+'DropTargetInfo';_.tI=16;_.a=null;_.b=null;function eF(){eF=cL;gF=kh('[Ljava.lang.StackTraceElement;',[153],[34],[0],null);}
function bF(a){a.c=gF;}
function cF(a){eF();bF(a);return a;}
function dF(b,a){eF();bF(b);b.b=a;return b;}
function fF(c){var a,b;a=jg(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function hF(){return fF(this);}
function aF(){}
_=aF.prototype=new tD();_.tS=hF;_.tN=oL+'Throwable';_.tI=17;_.a=null;_.b=null;var gF;function kC(){kC=cL;eF();}
function iC(a){kC();cF(a);return a;}
function jC(b,a){kC();dF(b,a);return b;}
function hC(){}
_=hC.prototype=new aF();_.tN=oL+'Exception';_.tI=18;function de(){de=cL;kC();}
function ce(a){de();iC(a);return a;}
function be(){}
_=be.prototype=new hC();_.tN=eL+'VetoDropException';_.tI=19;function ge(b,a){var c,d;c=fD(b.b-a.a,a.a-b.c);d=fD(b.d-a.b,a.b-b.a);return fD(c,d);}
function he(a){return we(new ve(),a.b+th(ke(a)/2),a.d+th(ie(a)/2));}
function ie(a){return a.a-a.d;}
function je(a){return ke(a)*ie(a);}
function ke(a){return a.c-a.b;}
function le(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function me(b,a){b.a=a;}
function ne(b,a){b.b=a;}
function oe(b,a){b.c=a;}
function pe(a,b){a.d=b;}
function qe(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function ee(){}
_=ee.prototype=new tD();_.tS=qe;_.tN=fL+'AbstractArea';_.tI=20;_.a=0;_.b=0;_.c=0;_.d=0;function te(){return '('+this.kb()+', '+this.ob()+')';}
function re(){}
_=re.prototype=new tD();_.tS=te;_.tN=fL+'AbstractLocation';_.tI=21;function we(b,a,c){b.a=a;b.b=c;return b;}
function ye(){return this.a;}
function ze(){return this.b;}
function ve(){}
_=ve.prototype=new re();_.kb=ye;_.ob=ze;_.tN=fL+'CoordinateLocation';_.tI=22;_.a=0;_.b=0;function Be(){Be=cL;{df=new zf();}}
function Ce(a,b,c){Be();a.style.left=b+'px';a.style.top=c+'px';}
function De(a){Be();return Df(df,a);}
function Ee(a){Be();return Ef(df,a);}
function Fe(a){Be();return Ff(df,a);}
function af(a){Be();return ag(df,a);}
function bf(a){Be();return dg(df,a);}
function cf(a){Be();return eg(df,a);}
function ef(){Be();bg(df);}
var df=null;function jf(a){var b;b=jg(a);return pE(b,mE(b,46)+1);}
function lf(e,g,c){var a,b,d,f;b=fz(g);f=gz(g);if(c!==null){b-=fz(c);b-=De(c.gb());f-=gz(c);f-=Ee(c.gb());}d=b+g.mb();a=f+g.lb();ne(e,b);pe(e,f);oe(e,d);me(e,a);return e;}
function kf(){}
_=kf.prototype=new ee();_.tN=fL+'WidgetArea';_.tI=23;function of(b,c,a){sf(b,c);rf(b,a);tf(b);return b;}
function qf(e,c,d,a,b){e.a=fD(c,gD(e.a,a));e.d=fD(d,gD(e.d,b));}
function rf(b,a){if(a===null||a===Cw()){b.b=0;b.c=0;}else{b.b=fz(a)+De(a.gb());b.c=gz(a)+Ee(a.gb());}}
function sf(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=fz(b);a.f=gz(b);}}
function tf(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function uf(a,b){sf(a,b);tf(a);}
function vf(){return this.a;}
function wf(){return this.d;}
function xf(){return '('+this.a+', '+this.d+')';}
function nf(){}
_=nf.prototype=new re();_.kb=vf;_.ob=wf;_.tS=xf;_.tN=fL+'WidgetLocation';_.tI=24;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function dg(a,b){return b.mb()-ag(a,b.gb());}
function eg(a,b){return b.lb()-Ff(a,b.gb());}
function yf(){}
_=yf.prototype=new tD();_.tN=gL+'DOMUtilImpl';_.tI=25;function Df(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function Ef(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function Ff(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function ag(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function bg(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function Bf(){}
_=Bf.prototype=new yf();_.tN=gL+'DOMUtilImplStandard';_.tI=26;function zf(){}
_=zf.prototype=new Bf();_.tN=gL+'DOMUtilImplMozilla';_.tI=27;function jg(a){return a==null?null:a.tN;}
function lg(a){kg=a;}
var kg=null;function og(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function pg(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function qg(){return ++rg;}
var rg=0;function BD(){BD=cL;kC();}
function zD(a){BD();iC(a);return a;}
function AD(b,a){BD();jC(b,a);return b;}
function yD(){}
_=yD.prototype=new hC();_.tN=oL+'RuntimeException';_.tI=28;function ug(){ug=cL;BD();}
function tg(c,b,a){ug();AD(c,'JavaScript '+b+' exception: '+a);return c;}
function sg(){}
_=sg.prototype=new yD();_.tN=hL+'JavaScriptException';_.tI=29;function xg(b,a){if(!rh(a,13)){return false;}return Bg(b,qh(a,13));}
function yg(a){return og(a);}
function zg(){return [];}
function Ag(){return {};}
function Cg(a){return xg(this,a);}
function Bg(a,b){return a===b;}
function Dg(){return yg(this);}
function Fg(){return Eg(this);}
function Eg(a){if(a.toString)return a.toString();return '[object]';}
function vg(){}
_=vg.prototype=new tD();_.eQ=Cg;_.hC=Dg;_.tS=Fg;_.tN=hL+'JavaScriptObject';_.tI=30;function bh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function dh(a,b,c){return a[b]=c;}
function fh(a,b){return eh(a,b);}
function eh(a,b){return bh(new ah(),b,a.tI,a.b,a.tN);}
function gh(b,a){return b[a];}
function ih(b,a){return b[a];}
function hh(a){return a.length;}
function kh(e,d,c,b,a){return jh(e,d,c,b,0,hh(b),a);}
function jh(j,i,g,c,e,a,b){var d,f,h;if((f=gh(c,e))<0){throw jD(new iD());}h=bh(new ah(),f,gh(i,e),gh(g,e),j);++e;if(e<a){j=pE(j,1);for(d=0;d<f;++d){dh(h,d,jh(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){dh(h,d,b);}}return h;}
function lh(f,e,c,g){var a,b,d;b=hh(g);d=bh(new ah(),b,e,c,f);for(a=0;a<b;++a){dh(d,a,ih(g,a));}return d;}
function mh(a,b,c){if(c!==null&&a.b!=0&& !rh(c,a.b)){throw vB(new uB());}return dh(a,b,c);}
function ah(){}
_=ah.prototype=new tD();_.tN=iL+'Array';_.tI=31;function ph(b,a){return !(!(b&&wh[b][a]));}
function qh(b,a){if(b!=null)ph(b.tI,a)||vh();return b;}
function rh(b,a){return b!=null&&ph(b.tI,a);}
function sh(a){return a&65535;}
function th(a){if(a>(yC(),AC))return yC(),AC;if(a<(yC(),BC))return yC(),BC;return a>=0?Math.floor(a):Math.ceil(a);}
function vh(){throw cC(new bC());}
function uh(a){if(a!==null){throw cC(new bC());}return a;}
function xh(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var wh;function Ah(a){if(rh(a,14)){return a;}return tg(new sg(),Ch(a),Bh(a));}
function Bh(a){return a.message;}
function Ch(a){return a.name;}
function Fh(){Fh=cL;BD();}
function Eh(b,a){Fh();zD(b);return b;}
function Dh(){}
_=Dh.prototype=new yD();_.tN=jL+'CommandCanceledException';_.tI=34;function ui(a){a.a=ci(new bi(),a);a.b=rH(new pH());a.d=gi(new fi(),a);a.f=ki(new ji(),a);}
function vi(a){ui(a);return a;}
function xi(c){var a,b,d;a=mi(c.f);pi(c.f);b=null;if(rh(a,15)){b=Eh(new Dh(),qh(a,15));}else{}if(b!==null){d=kg;if(d!==null){FO(d,b);}}Ai(c,false);zi(c);}
function yi(e,d){var a,b,c,f;f=false;try{Ai(e,true);qi(e.f,e.b.b);am(e.a,10000);while(ni(e.f)){b=oi(e.f);c=true;try{if(b===null){return;}if(rh(b,15)){a=qh(b,15);a.F();}else{}}finally{f=ri(e.f);if(f){return;}if(c){pi(e.f);}}if(Di(DE(),d)){return;}}}finally{if(!f){Cl(e.a);Ai(e,false);zi(e);}}}
function zi(a){if(!zH(a.b)&& !a.e&& !a.c){Bi(a,true);am(a.d,1);}}
function Ai(b,a){b.c=a;}
function Bi(b,a){b.e=a;}
function Ci(b,a){tH(b.b,a);zi(b);}
function Di(a,b){return eD(a-b)>=100;}
function ai(){}
_=ai.prototype=new tD();_.tN=jL+'CommandExecutor';_.tI=35;_.c=false;_.e=false;function Dl(){Dl=cL;gm=rH(new pH());{fm();}}
function Bl(a){Dl();return a;}
function Cl(a){if(a.b){bm(a.c);}else{cm(a.c);}BH(gm,a);}
function El(e,d){var a,c;try{Fl(e);}catch(a){a=Ah(a);if(rh(a,14)){c=a;FO(d,c);}else throw a;}}
function Fl(a){if(!a.b){BH(gm,a);}a.sc();}
function am(b,a){if(a<=0){throw mC(new lC(),'must be positive');}Cl(b);b.b=false;b.c=dm(b,a);tH(gm,b);}
function bm(a){Dl();$wnd.clearInterval(a);}
function cm(a){Dl();$wnd.clearTimeout(a);}
function dm(b,a){Dl();return $wnd.setTimeout(function(){b.ab();},a);}
function em(){var a;a=kg;if(a!==null){El(this,a);}else{Fl(this);}}
function fm(){Dl();km(new xl());}
function wl(){}
_=wl.prototype=new tD();_.ab=em;_.tN=jL+'Timer';_.tI=36;_.b=false;_.c=0;var gm;function di(){di=cL;Dl();}
function ci(b,a){di();b.a=a;Bl(b);return b;}
function ei(){if(!this.a.c){return;}xi(this.a);}
function bi(){}
_=bi.prototype=new wl();_.sc=ei;_.tN=jL+'CommandExecutor$1';_.tI=37;function hi(){hi=cL;Dl();}
function gi(b,a){hi();b.a=a;Bl(b);return b;}
function ii(){Bi(this.a,false);yi(this.a,DE());}
function fi(){}
_=fi.prototype=new wl();_.sc=ii;_.tN=jL+'CommandExecutor$2';_.tI=38;function ki(b,a){b.d=a;return b;}
function mi(a){return wH(a.d.b,a.b);}
function ni(a){return a.c<a.a;}
function oi(b){var a;b.b=b.c;a=wH(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function pi(a){AH(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function qi(b,a){b.a=a;}
function ri(a){return a.b==(-1);}
function si(){return ni(this);}
function ti(){return oi(this);}
function ji(){}
_=ji.prototype=new tD();_.tb=si;_.yb=ti;_.tN=jL+'CommandExecutor$CircularIterator';_.tI=39;_.a=0;_.b=(-1);_.c=0;function aj(){aj=cL;rk=rH(new pH());{jk=new Dm();en(jk);}}
function bj(a){aj();tH(rk,a);}
function cj(b,a){aj();yn(jk,b,a);}
function dj(a,b){aj();return Fm(jk,a,b);}
function ej(){aj();return An(jk,'A');}
function fj(){aj();return An(jk,'div');}
function gj(a){aj();return An(jk,a);}
function hj(){aj();return An(jk,'tbody');}
function ij(){aj();return An(jk,'td');}
function jj(){aj();return An(jk,'tr');}
function kj(){aj();return An(jk,'table');}
function oj(b,a,d){aj();var c;c=kg;if(c!==null){mj(b,a,d,c);}else{nj(b,a,d);}}
function mj(e,d,g,f){aj();var a,c;try{nj(e,d,g);}catch(a){a=Ah(a);if(rh(a,14)){c=a;FO(f,c);}else throw a;}}
function nj(b,a,c){aj();var d;if(a===qk){if(Bj(b)==8192){qk=null;}}d=lj;lj=b;try{c.Cb(b);}finally{lj=d;}}
function pj(b,a){aj();Bn(jk,b,a);}
function qj(a){aj();return Cn(jk,a);}
function rj(a){aj();return an(jk,a);}
function sj(a){aj();return Dn(jk,a);}
function tj(a){aj();return En(jk,a);}
function uj(a){aj();return Fn(jk,a);}
function vj(a){aj();return nn(jk,a);}
function wj(a){aj();return ao(jk,a);}
function xj(a){aj();return bo(jk,a);}
function yj(a){aj();return co(jk,a);}
function zj(a){aj();return on(jk,a);}
function Aj(a){aj();return pn(jk,a);}
function Bj(a){aj();return eo(jk,a);}
function Cj(a){aj();qn(jk,a);}
function Dj(a){aj();return rn(jk,a);}
function Ej(a){aj();return bn(jk,a);}
function Fj(a){aj();return cn(jk,a);}
function ak(b,a){aj();return fo(jk,b,a);}
function bk(a){aj();return go(jk,a);}
function dk(a,b){aj();return io(jk,a,b);}
function ck(a,b){aj();return ho(jk,a,b);}
function ek(a){aj();return jo(jk,a);}
function fk(a){aj();return sn(jk,a);}
function gk(a){aj();return ko(jk,a);}
function hk(a){aj();return tn(jk,a);}
function ik(b,a){aj();return lo(jk,b,a);}
function kk(c,a,b){aj();vn(jk,c,a,b);}
function lk(b,a){aj();return fn(jk,b,a);}
function mk(a){aj();var b,c;c=true;if(rk.b>0){b=qh(wH(rk,rk.b-1),16);if(!(c=b.bc(a))){pj(a,true);Cj(a);}}return c;}
function nk(a){aj();if(qk!==null&&dj(a,qk)){qk=null;}gn(jk,a);}
function ok(b,a){aj();mo(jk,b,a);}
function pk(a){aj();BH(rk,a);}
function sk(a){aj();qk=a;wn(jk,a);}
function tk(b,a,c){aj();no(jk,b,a,c);}
function vk(a,b,c){aj();po(jk,a,b,c);}
function uk(a,b,c){aj();oo(jk,a,b,c);}
function wk(a,b){aj();qo(jk,a,b);}
function xk(a,b){aj();ro(jk,a,b);}
function yk(a,b){aj();so(jk,a,b);}
function zk(b,a,c){aj();to(jk,b,a,c);}
function Ak(a,b){aj();jn(jk,a,b);}
function Bk(a){aj();return kn(jk,a);}
function Ck(){aj();return uo(jk);}
function Dk(){aj();return vo(jk);}
var lj=null,jk=null,qk=null,rk;function Fk(){Fk=cL;bl=vi(new ai());}
function al(a){Fk();if(a===null){throw mD(new lD(),'cmd can not be null');}Ci(bl,a);}
var bl;function el(a){if(rh(a,17)){return dj(this,qh(a,17));}return xg(xh(this,cl),a);}
function fl(){return yg(xh(this,cl));}
function gl(){return Bk(this);}
function cl(){}
_=cl.prototype=new vg();_.eQ=el;_.hC=fl;_.tS=gl;_.tN=jL+'Element';_.tI=40;function ll(a){return xg(xh(this,hl),a);}
function ml(){return yg(xh(this,hl));}
function nl(){return Dj(this);}
function hl(){}
_=hl.prototype=new vg();_.eQ=ll;_.hC=ml;_.tS=nl;_.tN=jL+'Event';_.tI=41;function pl(){pl=cL;sl=rH(new pH());{tl=new yo();if(!Do(tl)){tl=null;}}}
function ql(e,d){pl();var a,c;try{rl(e);}catch(a){a=Ah(a);if(rh(a,14)){c=a;FO(d,c);}else throw a;}}
function rl(a){pl();var b,c;for(b=CF(sl);vF(b);){c=uh(wF(b));null.Cc();}}
function ul(a){pl();if(tl!==null){Ao(tl,a);}}
function vl(b){pl();var a;a=kg;if(a!==null){ql(b,a);}else{rl(b);}}
var sl,tl=null;function zl(){while((Dl(),gm).b>0){Cl(qh(wH((Dl(),gm),0),18));}}
function Al(){return null;}
function xl(){}
_=xl.prototype=new tD();_.nc=zl;_.oc=Al;_.tN=jL+'Timer$1';_.tI=42;function jm(){jm=cL;lm=rH(new pH());Bm=rH(new pH());{wm();}}
function km(a){jm();tH(lm,a);}
function mm(d){jm();var a,c;try{nm();}catch(a){a=Ah(a);if(rh(a,14)){c=a;FO(d,c);}else throw a;}}
function nm(){jm();var a,b;for(a=CF(lm);vF(a);){b=qh(wF(a),19);b.nc();}}
function om(d){jm();var a,c;try{return pm();}catch(a){a=Ah(a);if(rh(a,14)){c=a;FO(d,c);return null;}else throw a;}}
function pm(){jm();var a,b,c,d;d=null;for(a=CF(lm);vF(a);){b=qh(wF(a),19);c=b.oc();{d=c;}}return d;}
function qm(d){jm();var a,c;try{rm();}catch(a){a=Ah(a);if(rh(a,14)){c=a;FO(d,c);}else throw a;}}
function rm(){jm();var a,b;for(a=CF(Bm);vF(a);){b=uh(wF(a));null.Cc();}}
function sm(){jm();return Ck();}
function tm(){jm();return Dk();}
function um(){jm();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function vm(){jm();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function wm(){jm();__gwt_initHandlers(function(){zm();},function(){return ym();},function(){xm();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function xm(){jm();var a;a=kg;if(a!==null){mm(a);}else{nm();}}
function ym(){jm();var a;a=kg;if(a!==null){return om(a);}else{return pm();}}
function zm(){jm();var a;a=kg;if(a!==null){qm(a);}else{rm();}}
function Am(c,b,a){jm();$wnd.open(c,b,a);}
var lm,Bm;function yn(c,b,a){b.appendChild(a);}
function An(b,a){return $doc.createElement(a);}
function Bn(c,b,a){b.cancelBubble=a;}
function Cn(b,a){return !(!a.altKey);}
function Dn(b,a){return a.clientX|| -1;}
function En(b,a){return a.clientY|| -1;}
function Fn(b,a){return !(!a.ctrlKey);}
function ao(b,a){return a.which||(a.keyCode|| -1);}
function bo(b,a){return !(!a.metaKey);}
function co(b,a){return !(!a.shiftKey);}
function eo(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function fo(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function go(c,b){var a=$doc.getElementById(b);return a||null;}
function io(d,a,b){var c=a[b];return c==null?null:String(c);}
function ho(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function jo(b,a){return a.__eventBits||0;}
function ko(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.ib(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function lo(d,b,a){var c=b.style[a];return c==null?null:c;}
function mo(c,b,a){b.removeChild(a);}
function no(c,b,a,d){b.setAttribute(a,d);}
function po(c,a,b,d){a[b]=d;}
function oo(c,a,b,d){a[b]=d;}
function qo(c,a,b){a.__listener=b;}
function ro(c,a,b){if(!b){b='';}a.innerHTML=b;}
function so(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function to(c,b,a,d){b.style[a]=d;}
function uo(a){return $doc.body.clientHeight;}
function vo(a){return $doc.body.clientWidth;}
function wo(a){return ko(this,a);}
function Cm(){}
_=Cm.prototype=new tD();_.ib=wo;_.tN=kL+'DOMImpl';_.tI=43;function nn(b,a){return a.relatedTarget?a.relatedTarget:null;}
function on(b,a){return a.target||null;}
function pn(b,a){return a.relatedTarget||null;}
function qn(b,a){a.preventDefault();}
function rn(b,a){return a.toString();}
function sn(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function tn(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function un(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){oj(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!mk(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)oj(b,a,c);};$wnd.__captureElem=null;}
function vn(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function wn(b,a){$wnd.__captureElem=a;}
function xn(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ln(){}
_=ln.prototype=new Cm();_.tN=kL+'DOMImplStandard';_.tI=44;function Fm(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function an(c,b){var a=b.button;if(a==0){return 1;}else if(a==1){return 4;}return a|| -1;}
function bn(b,a){return $doc.getBoxObjectFor(a).screenX-$doc.getBoxObjectFor($doc.documentElement).screenX;}
function cn(b,a){return $doc.getBoxObjectFor(a).screenY-$doc.getBoxObjectFor($doc.documentElement).screenY;}
function en(a){un(a);dn(a);}
function dn(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function fn(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function gn(b,a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function jn(c,b,a){xn(c,b,a);hn(c,b,a);}
function hn(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function kn(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function Dm(){}
_=Dm.prototype=new ln();_.tN=kL+'DOMImplMozilla';_.tI=45;function Fo(a){vl(a);}
function xo(){}
_=xo.prototype=new tD();_.tN=kL+'HistoryImpl';_.tI=46;function Do(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;Fo(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function Bo(){}
_=Bo.prototype=new xo();_.tN=kL+'HistoryImplStandard';_.tI=47;function Ao(d,a){if(a==null||a.length==0){var c=$wnd.location.href;var b=c.indexOf('#');if(b!= -1)c=c.substring(0,b);$wnd.location=c+'#';}else{$wnd.location.hash=encodeURIComponent(a);}}
function yo(){}
_=yo.prototype=new Bo();_.tN=kL+'HistoryImplMozilla';_.tI=48;function dz(b,a){wz(b.nb(),a,true);}
function fz(a){return Ej(a.gb());}
function gz(a){return Fj(a.gb());}
function hz(a){return ck(a.q,'offsetHeight');}
function iz(a){return ck(a.q,'offsetWidth');}
function jz(b,a){wz(b.nb(),a,false);}
function kz(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function lz(b,a){if(b.q!==null){kz(b,b.q,a);}b.q=a;}
function mz(b,c,a){if(c>=0){b.xc(c+'px');}if(a>=0){b.tc(a+'px');}}
function nz(b,a){vz(b.nb(),a);}
function oz(b,a){Ak(b.gb(),a|ek(b.gb()));}
function pz(){return this.q;}
function qz(){return hz(this);}
function rz(){return iz(this);}
function sz(){return this.q;}
function tz(a){return dk(a,'className');}
function uz(a){zk(this.q,'height',a);}
function vz(a,b){vk(a,'className',b);}
function wz(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw AD(new yD(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=rE(j);if(nE(j)==0){throw mC(new lC(),'Style names cannot be empty');}i=tz(c);e=kE(i,j);while(e!=(-1)){if(e==0||gE(i,e-1)==32){f=e+nE(j);g=nE(i);if(f==g||f<g&&gE(i,f)==32){break;}}e=lE(i,j,e+1);}if(a){if(e==(-1)){if(nE(i)>0){i+=' ';}vk(c,'className',i+j);}}else{if(e!=(-1)){b=rE(qE(i,0,e));d=rE(pE(i,e+nE(j)));if(nE(b)==0){h=d;}else if(nE(d)==0){h=b;}else{h=b+' '+d;}vk(c,'className',h);}}}
function xz(a,b){a.style.display=b?'':'none';}
function yz(a){xz(this.q,a);}
function zz(a){zk(this.q,'width',a);}
function Az(){if(this.q===null){return '(null handle)';}return Bk(this.q);}
function cz(){}
_=cz.prototype=new tD();_.gb=pz;_.lb=qz;_.mb=rz;_.nb=sz;_.tc=uz;_.vc=yz;_.xc=zz;_.tS=Az;_.tN=lL+'UIObject';_.tI=49;_.q=null;function uA(a){if(!a.ub()){throw qC(new oC(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.mc();}finally{a.D();wk(a.gb(),null);a.o=false;}}
function vA(a){if(rh(a.p,24)){qh(a.p,24).rc(a);}else if(a.p!==null){throw qC(new oC(),"This widget's parent does not implement HasWidgets");}}
function wA(b,a){if(b.ub()){wk(b.gb(),null);}lz(b,a);if(b.ub()){wk(a,b);}}
function xA(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.ub()){c.Eb();}c.p=null;}else{if(a!==null){throw qC(new oC(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.ub()){c.Ab();}}}
function yA(){}
function zA(){}
function AA(){return this.o;}
function BA(){if(this.ub()){throw qC(new oC(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;wk(this.gb(),this);this.C();this.dc();}
function CA(a){}
function DA(){uA(this);}
function EA(){}
function FA(){}
function dA(){}
_=dA.prototype=new cz();_.C=yA;_.D=zA;_.ub=AA;_.Ab=BA;_.Cb=CA;_.Eb=DA;_.dc=EA;_.mc=FA;_.tN=lL+'Widget';_.tI=50;_.o=false;_.p=null;function rv(b,a){xA(a,b);}
function tv(b,a){xA(a,null);}
function uv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Ab();}}
function vv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Eb();}}
function wv(){}
function xv(){}
function qv(){}
_=qv.prototype=new dA();_.C=uv;_.D=vv;_.dc=wv;_.mc=xv;_.tN=lL+'Panel';_.tI=51;function wp(a){a.f=kA(new eA(),a);}
function xp(a){wp(a);return a;}
function yp(c,a,b){vA(a);lA(c.f,a);cj(b,a.gb());rv(c,a);}
function zp(d,b,a){var c;Bp(d,a);if(b.p===d){c=Dp(d,b);if(c<a){a--;}}return a;}
function Ap(b,a){if(a<0||a>=b.f.b){throw tC(new sC());}}
function Bp(b,a){if(a<0||a>b.f.b){throw tC(new sC());}}
function Ep(b,a){return nA(b.f,a);}
function Dp(b,a){return oA(b.f,a);}
function Fp(e,b,c,a,d){a=zp(e,b,a);vA(b);pA(e.f,b,a);if(d){kk(c,b.gb(),a);}else{cj(c,b.gb());}rv(e,b);}
function aq(a){return qA(a.f);}
function bq(b,c){var a;if(c.p!==b){return false;}tv(b,c);a=c.gb();ok(hk(a),a);sA(b.f,c);return true;}
function cq(){return aq(this);}
function dq(a){return bq(this,a);}
function vp(){}
_=vp.prototype=new qv();_.vb=cq;_.rc=dq;_.tN=lL+'ComplexPanel';_.tI=52;function bp(a){xp(a);wA(a,fj());zk(a.gb(),'position','relative');zk(a.gb(),'overflow','hidden');return a;}
function cp(a,b){yp(a,b,a.gb());}
function dp(b,d,a,c){vA(d);gp(b,d,a,c);cp(b,d);}
function fp(b,c){var a;a=bq(b,c);if(a){hp(c.gb());}return a;}
function gp(c,e,b,d){var a;a=e.gb();if(b==(-1)&&d==(-1)){hp(a);}else{zk(a,'position','absolute');zk(a,'left',b+'px');zk(a,'top',d+'px');}}
function hp(a){zk(a,'left','');zk(a,'top','');zk(a,'position','');}
function ip(a){return fp(this,a);}
function ap(){}
_=ap.prototype=new vp();_.rc=ip;_.tN=lL+'AbsolutePanel';_.tI=53;function kp(a){xp(a);a.e=kj();a.d=hj();cj(a.e,a.d);wA(a,a.e);return a;}
function mp(c,d,a){var b;b=hk(d.gb());vk(b,'height',a);}
function np(c,b,a){vk(b,'align',a.a);}
function op(c,b,a){zk(b,'verticalAlign',a.a);}
function pp(b,c,d){var a;a=hk(c.gb());vk(a,'width',d);}
function jp(){}
_=jp.prototype=new vp();_.tN=lL+'CellPanel';_.tI=54;_.d=null;_.e=null;function mF(d,a,b){var c;while(a.tb()){c=a.yb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function oF(a){throw jF(new iF(),'add');}
function pF(b){var a;a=mF(this,this.vb(),b);return a!==null;}
function qF(){var a,b,c;c=ED(new DD());a=null;FD(c,'[');b=this.vb();while(b.tb()){if(a!==null){FD(c,a);}else{a=', ';}FD(c,AE(b.yb()));}FD(c,']');return dE(c);}
function lF(){}
_=lF.prototype=new tD();_.s=oF;_.z=pF;_.tS=qF;_.tN=pL+'AbstractCollection';_.tI=55;function BF(b,a){throw uC(new sC(),'Index: '+a+', Size: '+b.b);}
function CF(a){return tF(new sF(),a);}
function DF(b,a){throw jF(new iF(),'add');}
function EF(a){this.r(this.yc(),a);return true;}
function FF(e){var a,b,c,d,f;if(e===this){return true;}if(!rh(e,30)){return false;}f=qh(e,30);if(this.yc()!=f.yc()){return false;}c=CF(this);d=f.vb();while(vF(c)){a=wF(c);b=wF(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function aG(){var a,b,c,d;c=1;a=31;b=CF(this);while(vF(b)){d=wF(b);c=31*c+(d===null?0:d.hC());}return c;}
function bG(){return CF(this);}
function cG(a){throw jF(new iF(),'remove');}
function rF(){}
_=rF.prototype=new lF();_.r=DF;_.s=EF;_.eQ=FF;_.hC=aG;_.vb=bG;_.qc=cG;_.tN=pL+'AbstractList';_.tI=56;function qH(a){{uH(a);}}
function rH(a){qH(a);return a;}
function tH(b,a){hI(b.a,b.b++,a);return true;}
function sH(d,a){var b,c;c=a.vb();b=c.tb();while(c.tb()){hI(d.a,d.b++,c.yb());}return b;}
function uH(a){a.a=zg();a.b=0;}
function wH(b,a){if(a<0||a>=b.b){BF(b,a);}return dI(b.a,a);}
function xH(b,a){return yH(b,a,0);}
function yH(c,b,a){if(a<0){BF(c,a);}for(;a<c.b;++a){if(cI(b,dI(c.a,a))){return a;}}return (-1);}
function zH(a){return a.b==0;}
function AH(c,a){var b;b=wH(c,a);fI(c.a,a,1);--c.b;return b;}
function BH(c,b){var a;a=xH(c,b);if(a==(-1)){return false;}AH(c,a);return true;}
function CH(d,a,b){var c;c=wH(d,a);hI(d.a,a,b);return c;}
function DH(c,a){var b;if(a.a<c.b){a=fh(a,c.b);}for(b=0;b<c.b;++b){mh(a,b,dI(c.a,b));}if(a.a>c.b){mh(a,c.b,null);}return a;}
function FH(a,b){if(a<0||a>this.b){BF(this,a);}EH(this.a,a,b);++this.b;}
function aI(a){return tH(this,a);}
function EH(a,b,c){a.splice(b,0,c);}
function bI(a){return xH(this,a)!=(-1);}
function cI(a,b){return a===b||a!==null&&a.eQ(b);}
function eI(a){return wH(this,a);}
function dI(a,b){return a[b];}
function gI(a){return AH(this,a);}
function fI(a,c,b){a.splice(c,b);}
function hI(a,b,c){a[b]=c;}
function iI(){return this.b;}
function pH(){}
_=pH.prototype=new rF();_.r=FH;_.s=aI;_.z=bI;_.rb=eI;_.qc=gI;_.yc=iI;_.tN=pL+'ArrayList';_.tI=57;_.a=null;_.b=0;function rp(a){rH(a);return a;}
function tp(d,c){var a,b;for(a=CF(d);vF(a);){b=qh(wF(a),20);b.Db(c);}}
function qp(){}
_=qp.prototype=new pH();_.tN=lL+'ClickListenerCollection';_.tI=58;function gq(a,b){if(a.d!==null){throw qC(new oC(),'Composite.initWidget() may only be called once.');}vA(b);wA(a,b.gb());a.d=b;xA(b,a);}
function hq(){if(this.d===null){throw qC(new oC(),'initWidget() was never called in '+jg(this));}return this.q;}
function iq(){if(this.d!==null){return this.d.ub();}return false;}
function jq(){this.d.Ab();this.dc();}
function kq(){try{this.mc();}finally{this.d.Eb();}}
function eq(){}
_=eq.prototype=new dA();_.gb=hq;_.ub=iq;_.Ab=jq;_.Eb=kq;_.tN=lL+'Composite';_.tI=59;_.d=null;function mq(a){xp(a);wA(a,fj());return a;}
function oq(b,c){var a;a=c.gb();zk(a,'width','100%');zk(a,'height','100%');c.vc(false);}
function pq(b,c,a){Fp(b,c,b.gb(),a,true);oq(b,c);}
function qq(b,c){var a;a=bq(b,c);if(a){rq(b,c);if(b.b===c){b.b=null;}}return a;}
function rq(a,b){zk(b.gb(),'width','');zk(b.gb(),'height','');b.vc(true);}
function sq(b,a){Ap(b,a);if(b.b!==null){b.b.vc(false);}b.b=Ep(b,a);b.b.vc(true);}
function tq(a){return qq(this,a);}
function lq(){}
_=lq.prototype=new vp();_.rc=tq;_.tN=lL+'DeckPanel';_.tI=60;_.b=null;function hx(a){ix(a,fj());return a;}
function ix(b,a){wA(b,a);return b;}
function jx(a,b){if(a.n!==null){throw qC(new oC(),'SimplePanel can only contain one child widget');}a.wc(b);}
function lx(a,b){if(b===a.n){return;}if(b!==null){vA(b);}if(a.n!==null){a.rc(a.n);}a.n=b;if(b!==null){cj(a.db(),a.n.gb());rv(a,b);}}
function mx(){return this.gb();}
function nx(){return dx(new bx(),this);}
function ox(a){if(this.n!==a){return false;}tv(this,a);ok(this.db(),a.gb());this.n=null;return true;}
function px(a){lx(this,a);}
function ax(){}
_=ax.prototype=new qv();_.db=mx;_.vb=nx;_.rc=ox;_.wc=px;_.tN=lL+'SimplePanel';_.tI=61;_.n=null;function Ev(){Ev=cL;nw=gB(new bB());}
function zv(a){Ev();ix(a,iB(nw));ew(a,0,0);return a;}
function Av(b,a){Ev();zv(b);b.g=a;return b;}
function Bv(c,a,b){Ev();Av(c,a);c.k=b;return c;}
function Cv(b,a){if(a.blur){a.blur();}}
function Dv(c){var a,b,d;a=c.l;if(!a){fw(c,false);iw(c);}b=th((tm()-aw(c))/2);d=th((sm()-Fv(c))/2);ew(c,um()+b,vm()+d);if(!a){fw(c,true);}}
function Fv(a){return hz(a);}
function aw(a){return iz(a);}
function bw(b,a){if(!b.l){return;}b.l=false;fp(Cw(),b);b.gb();}
function cw(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.tc(a.h);}if(a.i!==null){b.xc(a.i);}}}
function dw(e,b){var a,c,d,f;d=zj(b);c=lk(e.gb(),d);f=Bj(b);switch(f){case 128:{a=(sh(wj(b)),Cu(b),true);return a&&(c|| !e.k);}case 512:{a=(sh(wj(b)),Cu(b),true);return a&&(c|| !e.k);}case 256:{a=(sh(wj(b)),Cu(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((aj(),qk)!==null){return true;}if(!c&&e.g&&f==4){bw(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){Cv(e,d);return false;}}}return !e.k||c;}
function ew(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.gb();zk(a,'left',b+'px');zk(a,'top',d+'px');}
function fw(a,b){zk(a.gb(),'visibility',b?'visible':'hidden');a.gb();}
function gw(a,b){lx(a,b);cw(a);}
function hw(a,b){a.i=b;cw(a);if(nE(b)==0){a.i=null;}}
function iw(a){if(a.l){return;}a.l=true;bj(a);zk(a.gb(),'position','absolute');if(a.m!=(-1)){ew(a,a.j,a.m);}cp(Cw(),a);a.gb();}
function jw(){return jB(nw,this.gb());}
function kw(){return Fv(this);}
function lw(){return aw(this);}
function mw(){return jB(nw,this.gb());}
function ow(){pk(this);uA(this);}
function pw(a){return dw(this,a);}
function qw(a){this.h=a;cw(this);if(nE(a)==0){this.h=null;}}
function rw(a){fw(this,a);}
function sw(a){gw(this,a);}
function tw(a){hw(this,a);}
function yv(){}
_=yv.prototype=new ax();_.db=jw;_.lb=kw;_.mb=lw;_.nb=mw;_.Eb=ow;_.bc=pw;_.tc=qw;_.vc=rw;_.wc=sw;_.xc=tw;_.tN=lL+'PopupPanel';_.tI=62;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var nw;function yq(){yq=cL;Ev();}
function vq(a){a.a=pt(new ur());a.f=hr(new dr());}
function wq(b,a){yq();xq(b,a,true);return b;}
function xq(c,a,b){yq();Bv(c,a,b);vq(c);lt(c.f,0,0,c.a);c.f.tc('100%');gt(c.f,0);it(c.f,0);jt(c.f,0);es(c.f.b,1,0,'100%');hs(c.f.b,1,0,'100%');ds(c.f.b,1,0,(zt(),At),(au(),cu));gw(c,c.f);nz(c,'gwt-DialogBox');nz(c.a,'Caption');bv(c.a,c);return c;}
function zq(b,a){tt(b.a,a);}
function Aq(a){if(Bj(a)==4){if(lk(this.a.gb(),zj(a))){Cj(a);}}return dw(this,a);}
function Bq(a,b,c){this.e=true;sk(this.a.gb());this.c=b;this.d=c;}
function Cq(a){}
function Dq(a){}
function Eq(c,d,e){var a,b;if(this.e){a=d+fz(this);b=e+gz(this);ew(this,a-this.c,b-this.d);}}
function Fq(a,b,c){this.e=false;nk(this.a.gb());}
function ar(a){if(this.b!==a){return false;}ft(this.f,a);return true;}
function br(a){if(this.b!==null){ft(this.f,this.b);}if(a!==null){lt(this.f,1,0,a);}this.b=a;}
function cr(a){hw(this,a);this.f.xc('100%');}
function uq(){}
_=uq.prototype=new yv();_.bc=Aq;_.ec=Bq;_.fc=Cq;_.gc=Dq;_.hc=Eq;_.ic=Fq;_.rc=ar;_.wc=br;_.xc=cr;_.tN=lL+'DialogBox';_.tI=63;_.b=null;_.c=0;_.d=0;_.e=false;function Bs(a){a.e=rs(new ms());}
function Cs(a){Bs(a);a.d=kj();a.a=hj();cj(a.d,a.a);wA(a,a.d);oz(a,1);return a;}
function Ds(c,a){var b;b=kr(c);if(a>=b||a<0){throw uC(new sC(),'Row index: '+a+', Row size: '+b);}}
function Es(e,c,b,a){var d;d=cs(e.b,c,b);et(e,d,a);return d;}
function at(c,b,a){return b.rows[a].cells.length;}
function bt(a){return ct(a,a.a);}
function ct(b,a){return a.rows.length;}
function dt(b,a){var c;if(a!=kr(b)){Ds(b,a);}c=jj();kk(b.a,c,a);return a;}
function et(d,c,a){var b,e;b=fk(c);e=null;if(b!==null){e=ts(d.e,b);}if(e!==null){ft(d,e);return true;}else{if(a){xk(c,'');}return false;}}
function ft(b,c){var a;if(c.p!==b){return false;}tv(b,c);a=c.gb();ok(hk(a),a);ws(b.e,a);return true;}
function gt(a,b){vk(a.d,'border',''+b);}
function ht(b,a){b.b=a;}
function it(b,a){uk(b.d,'cellPadding',a);}
function jt(b,a){uk(b.d,'cellSpacing',a);}
function kt(b,a){b.c=a;ls(b.c);}
function lt(d,b,a,e){var c;mr(d,b,a);if(e!==null){vA(e);c=Es(d,b,a,true);us(d.e,e);cj(c,e.gb());rv(d,e);}}
function mt(){return xs(this.e);}
function nt(a){switch(Bj(a)){case 1:{break;}default:}}
function ot(a){return ft(this,a);}
function vr(){}
_=vr.prototype=new qv();_.vb=mt;_.Cb=nt;_.rc=ot;_.tN=lL+'HTMLTable';_.tI=64;_.a=null;_.b=null;_.c=null;_.d=null;function hr(a){Cs(a);ht(a,fr(new er(),a));kt(a,js(new is(),a));return a;}
function jr(b,a){Ds(b,a);return at(b,b.a,a);}
function kr(a){return bt(a);}
function lr(b,a){return dt(b,a);}
function mr(e,d,b){var a,c;nr(e,d);if(b<0){throw uC(new sC(),'Cannot create a column with a negative index: '+b);}a=jr(e,d);c=b+1-a;if(c>0){or(e.a,d,c);}}
function nr(d,b){var a,c;if(b<0){throw uC(new sC(),'Cannot create a row with a negative index: '+b);}c=kr(d);for(a=c;a<=b;a++){lr(d,a);}}
function or(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function dr(){}
_=dr.prototype=new vr();_.tN=lL+'FlexTable';_.tI=65;function Fr(b,a){b.a=a;return b;}
function bs(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function cs(c,b,a){return bs(c,c.a.a,b,a);}
function ds(d,c,a,b,e){fs(d,c,a,b);gs(d,c,a,e);}
function es(e,d,a,c){var b;mr(e.a,d,a);b=bs(e,e.a.a,d,a);vk(b,'height',c);}
function fs(e,d,b,a){var c;mr(e.a,d,b);c=bs(e,e.a.a,d,b);vk(c,'align',a.a);}
function gs(d,c,b,a){mr(d.a,c,b);zk(bs(d,d.a.a,c,b),'verticalAlign',a.a);}
function hs(c,b,a,d){mr(c.a,b,a);vk(bs(c,c.a.a,b,a),'width',d);}
function Er(){}
_=Er.prototype=new tD();_.tN=lL+'HTMLTable$CellFormatter';_.tI=66;function fr(b,a){Fr(b,a);return b;}
function er(){}
_=er.prototype=new Er();_.tN=lL+'FlexTable$FlexCellFormatter';_.tI=67;function qr(a){xp(a);wA(a,fj());return a;}
function rr(a,b){yp(a,b,a.gb());}
function tr(b,c,a){Fp(b,c,b.gb(),a,true);}
function pr(){}
_=pr.prototype=new vp();_.tN=lL+'FlowPanel';_.tI=68;function Eu(a){wA(a,fj());oz(a,131197);nz(a,'gwt-Label');return a;}
function Fu(b,a){Eu(b);dv(b,a);return b;}
function av(b,a){if(b.a===null){b.a=rp(new qp());}tH(b.a,a);}
function bv(b,a){if(b.b===null){b.b=hv(new gv());}tH(b.b,a);}
function dv(b,a){yk(b.gb(),a);}
function ev(a,b){zk(a.gb(),'whiteSpace',b?'normal':'nowrap');}
function fv(a){switch(Bj(a)){case 1:if(this.a!==null){tp(this.a,this);}break;case 4:case 8:case 64:case 16:case 32:if(this.b!==null){lv(this.b,this,a);}break;case 131072:break;}}
function Du(){}
_=Du.prototype=new dA();_.Cb=fv;_.tN=lL+'Label';_.tI=69;_.a=null;_.b=null;function pt(a){Eu(a);wA(a,fj());oz(a,125);nz(a,'gwt-HTML');return a;}
function qt(b,a){pt(b);tt(b,a);return b;}
function rt(b,a,c){qt(b,a);ev(b,c);return b;}
function tt(b,a){xk(b.gb(),a);}
function ur(){}
_=ur.prototype=new Du();_.tN=lL+'HTML';_.tI=70;function xr(a){{Ar(a);}}
function yr(b,a){b.b=a;xr(b);return b;}
function Ar(a){while(++a.a<a.b.b.b){if(wH(a.b.b,a.a)!==null){return;}}}
function Br(a){return a.a<a.b.b.b;}
function Cr(){return Br(this);}
function Dr(){var a;if(!Br(this)){throw EK(new DK());}a=wH(this.b.b,this.a);Ar(this);return a;}
function wr(){}
_=wr.prototype=new tD();_.tb=Cr;_.yb=Dr;_.tN=lL+'HTMLTable$1';_.tI=71;_.a=(-1);function js(b,a){b.b=a;return b;}
function ls(a){if(a.a===null){a.a=gj('colgroup');kk(a.b.d,a.a,0);cj(a.a,gj('col'));}}
function is(){}
_=is.prototype=new tD();_.tN=lL+'HTMLTable$ColumnFormatter';_.tI=72;_.a=null;function qs(a){a.b=rH(new pH());}
function rs(a){qs(a);return a;}
function ts(c,a){var b;b=zs(a);if(b<0){return null;}return qh(wH(c.b,b),12);}
function us(b,c){var a;if(b.a===null){a=b.b.b;tH(b.b,c);}else{a=b.a.a;CH(b.b,a,c);b.a=b.a.b;}As(c.gb(),a);}
function vs(c,a,b){ys(a);CH(c.b,b,null);c.a=os(new ns(),b,c.a);}
function ws(c,a){var b;b=zs(a);vs(c,a,b);}
function xs(a){return yr(new wr(),a);}
function ys(a){a['__widgetID']=null;}
function zs(a){var b=a['__widgetID'];return b==null?-1:b;}
function As(a,b){a['__widgetID']=b;}
function ms(){}
_=ms.prototype=new tD();_.tN=lL+'HTMLTable$WidgetMapper';_.tI=73;_.a=null;function os(c,a,b){c.a=a;c.b=b;return c;}
function ns(){}
_=ns.prototype=new tD();_.tN=lL+'HTMLTable$WidgetMapper$FreeNode';_.tI=74;_.a=0;_.b=null;function zt(){zt=cL;At=xt(new wt(),'center');Bt=xt(new wt(),'left');xt(new wt(),'right');}
var At,Bt;function xt(b,a){b.a=a;return b;}
function wt(){}
_=wt.prototype=new tD();_.tN=lL+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=75;_.a=null;function au(){au=cL;bu=Et(new Dt(),'bottom');cu=Et(new Dt(),'middle');du=Et(new Dt(),'top');}
var bu,cu,du;function Et(a,b){a.a=b;return a;}
function Dt(){}
_=Dt.prototype=new tD();_.tN=lL+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=76;_.a=null;function hu(a){a.a=(zt(),Bt);a.c=(au(),du);}
function iu(a){kp(a);hu(a);a.b=jj();cj(a.d,a.b);vk(a.e,'cellSpacing','0');vk(a.e,'cellPadding','0');return a;}
function ju(b,c){var a;a=lu(b);cj(b.b,a);yp(b,c,a);}
function lu(b){var a;a=ij();np(b,a,b.a);op(b,a,b.c);return a;}
function mu(c,d,a){var b;Bp(c,a);b=lu(c);kk(c.b,b,a);Fp(c,d,b,a,false);}
function nu(c,d){var a,b;b=hk(d.gb());a=bq(c,d);if(a){ok(c.b,b);}return a;}
function ou(b,a){b.c=a;}
function pu(a){return nu(this,a);}
function gu(){}
_=gu.prototype=new jp();_.rc=pu;_.tN=lL+'HorizontalPanel';_.tI=77;_.b=null;function ru(a){wA(a,fj());cj(a.gb(),a.a=ej());oz(a,1);nz(a,'gwt-Hyperlink');return a;}
function su(c,b,a){ru(c);xu(c,b);wu(c,a);return c;}
function tu(b,a){if(b.b===null){b.b=rp(new qp());}tH(b.b,a);}
function vu(a){return gk(a.a);}
function wu(b,a){b.c=a;vk(b.a,'href','#'+a);}
function xu(b,a){yk(b.a,a);}
function yu(a){if(Bj(a)==1){if(this.b!==null){tp(this.b,this);}ul(this.c);Cj(a);}}
function qu(){}
_=qu.prototype=new dA();_.Cb=yu;_.tN=lL+'Hyperlink';_.tI=78;_.a=null;_.b=null;_.c=null;function Cu(a){return (yj(a)?1:0)|(xj(a)?8:0)|(uj(a)?2:0)|(qj(a)?4:0);}
function hv(a){rH(a);return a;}
function jv(d,c,e,f){var a,b;for(a=CF(d);vF(a);){b=qh(wF(a),21);b.ec(c,e,f);}}
function kv(d,c){var a,b;for(a=CF(d);vF(a);){b=qh(wF(a),21);b.fc(c);}}
function lv(e,c,a){var b,d,f,g,h;d=c.gb();g=sj(a)-Ej(d)+ck(d,'scrollLeft')+um();h=tj(a)-Fj(d)+ck(d,'scrollTop')+vm();switch(Bj(a)){case 4:jv(e,c,g,h);break;case 8:ov(e,c,g,h);break;case 64:nv(e,c,g,h);break;case 16:b=vj(a);if(!lk(d,b)){kv(e,c);}break;case 32:f=Aj(a);if(!lk(d,f)){mv(e,c);}break;}}
function mv(d,c){var a,b;for(a=CF(d);vF(a);){b=qh(wF(a),21);b.gc(c);}}
function nv(d,c,e,f){var a,b;for(a=CF(d);vF(a);){b=qh(wF(a),21);b.hc(c,e,f);}}
function ov(d,c,e,f){var a,b;for(a=CF(d);vF(a);){b=qh(wF(a),21);b.ic(c,e,f);}}
function gv(){}
_=gv.prototype=new pH();_.tN=lL+'MouseListenerCollection';_.tI=79;function Aw(){Aw=cL;Fw=wJ(new AI());}
function zw(b,a){Aw();bp(b);if(a===null){a=Bw();}wA(b,a);b.Ab();return b;}
function Cw(){Aw();return Dw(null);}
function Dw(c){Aw();var a,b;b=qh(CJ(Fw,c),22);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=bk(c))){return null;}}if(Fw.c==0){Ew();}DJ(Fw,c,b=zw(new uw(),a));return b;}
function Bw(){Aw();return $doc.body;}
function Ew(){Aw();km(new vw());}
function uw(){}
_=uw.prototype=new ap();_.tN=lL+'RootPanel';_.tI=80;var Fw;function xw(){var a,b;for(b=vG(dH((Aw(),Fw)));CG(b);){a=qh(DG(b),22);if(a.ub()){a.Eb();}}}
function yw(){return null;}
function vw(){}
_=vw.prototype=new tD();_.nc=xw;_.oc=yw;_.tN=lL+'RootPanel$1';_.tI=81;function cx(a){a.a=a.b.n!==null;}
function dx(b,a){b.b=a;cx(b);return b;}
function fx(){return this.a;}
function gx(){if(!this.a||this.b.n===null){throw EK(new DK());}this.a=false;return this.b.n;}
function bx(){}
_=bx.prototype=new tD();_.tb=fx;_.yb=gx;_.tN=lL+'SimplePanel$1';_.tI=82;function xx(a){a.a=iu(new gu());}
function yx(c){var a,b;xx(c);gq(c,c.a);oz(c,1);nz(c,'gwt-TabBar');ou(c.a,(au(),bu));a=rt(new ur(),'&nbsp;',true);b=rt(new ur(),'&nbsp;',true);nz(a,'gwt-TabBarFirst');nz(b,'gwt-TabBarRest');a.tc('100%');b.tc('100%');ju(c.a,a);ju(c.a,b);a.tc('100%');mp(c.a,a,'100%');pp(c.a,b,'100%');return c;}
function zx(b,a){if(b.c===null){b.c=ey(new dy());}tH(b.c,a);}
function Ax(b,a){if(a<0||a>Dx(b)){throw tC(new sC());}}
function Bx(b,a){if(a<(-1)||a>=Dx(b)){throw tC(new sC());}}
function Dx(a){return a.a.f.b-2;}
function Ex(e,d,a,b){var c;Ax(e,b);if(a){c=qt(new ur(),d);}else{c=Fu(new Du(),d);}ev(c,false);av(c,e);nz(c,'gwt-TabBarItem');mu(e.a,c,b+1);}
function Fx(b,a){var c;Bx(b,a);c=Ep(b.a,a+1);if(c===b.b){b.b=null;}nu(b.a,c);}
function ay(b,a){Bx(b,a);if(b.c!==null){if(!gy(b.c,b,a)){return false;}}by(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=Ep(b.a,a+1);by(b,b.b,true);if(b.c!==null){hy(b.c,b,a);}return true;}
function by(c,a,b){if(a!==null){if(b){dz(a,'gwt-TabBarItem-selected');}else{jz(a,'gwt-TabBarItem-selected');}}}
function cy(b){var a;for(a=1;a<this.a.f.b-1;++a){if(Ep(this.a,a)===b){ay(this,a-1);return;}}}
function wx(){}
_=wx.prototype=new eq();_.Db=cy;_.tN=lL+'TabBar';_.tI=83;_.b=null;_.c=null;function ey(a){rH(a);return a;}
function gy(e,c,d){var a,b;for(a=CF(e);vF(a);){b=qh(wF(a),23);if(!b.Bb(c,d)){return false;}}return true;}
function hy(e,c,d){var a,b;for(a=CF(e);vF(a);){b=qh(wF(a),23);b.lc(c,d);}}
function dy(){}
_=dy.prototype=new pH();_.tN=lL+'TabListenerCollection';_.tI=84;function vy(a){a.b=ry(new qy());a.a=ly(new ky(),a.b);}
function wy(b){var a;vy(b);a=Dz(new Bz());Ez(a,b.b);Ez(a,b.a);mp(a,b.a,'100%');b.b.xc('100%');zx(b.b,b);gq(b,a);nz(b,'gwt-TabPanel');nz(b.a,'gwt-TabPanelBottom');return b;}
function yy(b,c,a){By(b,c,a,b.a.f.b);}
function xy(b,a){if(b.c===null){b.c=ey(new dy());}tH(b.c,a);}
function Ay(b,a){return Ep(b.a,a);}
function Cy(d,e,c,a,b){ny(d.a,e,c,a,b);}
function By(c,d,b,a){Cy(c,d,b,false,a);}
function Dy(b,a){ay(b.b,a);}
function Ey(){return aq(this.a);}
function Fy(a,b){if(this.c!==null){return gy(this.c,this,b);}return true;}
function az(a,b){sq(this.a,b);if(this.c!==null){hy(this.c,this,b);}}
function bz(a){return oy(this.a,a);}
function jy(){}
_=jy.prototype=new eq();_.vb=Ey;_.Bb=Fy;_.lc=az;_.rc=bz;_.tN=lL+'TabPanel';_.tI=85;_.c=null;function ly(b,a){mq(b);b.a=a;return b;}
function ny(e,f,d,a,b){var c;c=Dp(e,f);if(c!=(-1)){oy(e,f);if(c<b){b--;}}ty(e.a,d,a,b);pq(e,f,b);}
function oy(b,c){var a;a=Dp(b,c);if(a!=(-1)){uy(b.a,a);return qq(b,c);}return false;}
function py(a){return oy(this,a);}
function ky(){}
_=ky.prototype=new lq();_.rc=py;_.tN=lL+'TabPanel$TabbedDeckPanel';_.tI=86;_.a=null;function ry(a){yx(a);return a;}
function ty(d,c,a,b){Ex(d,c,a,b);}
function uy(b,a){Fx(b,a);}
function qy(){}
_=qy.prototype=new wx();_.tN=lL+'TabPanel$UnmodifiableTabBar';_.tI=87;function Cz(a){a.a=(zt(),Bt);a.b=(au(),du);}
function Dz(a){kp(a);Cz(a);vk(a.e,'cellSpacing','0');vk(a.e,'cellPadding','0');return a;}
function Ez(b,d){var a,c;c=jj();a=aA(b);cj(c,a);cj(b.d,c);yp(b,d,a);}
function aA(b){var a;a=ij();np(b,a,b.a);op(b,a,b.b);return a;}
function bA(c,e,a){var b,d;Bp(c,a);d=jj();b=aA(c);cj(d,b);kk(c.d,d,a);Fp(c,e,b,a,false);}
function cA(c){var a,b;b=hk(c.gb());a=bq(this,c);if(a){ok(this.d,hk(b));}return a;}
function Bz(){}
_=Bz.prototype=new jp();_.rc=cA;_.tN=lL+'VerticalPanel';_.tI=88;function kA(b,a){b.a=kh('[Lcom.google.gwt.user.client.ui.Widget;',[157],[12],[4],null);return b;}
function lA(a,b){pA(a,b,a.b);}
function nA(b,a){if(a<0||a>=b.b){throw tC(new sC());}return b.a[a];}
function oA(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function pA(d,e,a){var b,c;if(a<0||a>d.b){throw tC(new sC());}if(d.b==d.a.a){c=kh('[Lcom.google.gwt.user.client.ui.Widget;',[157],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){mh(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){mh(d.a,b,d.a[b-1]);}mh(d.a,a,e);}
function qA(a){return gA(new fA(),a);}
function rA(c,b){var a;if(b<0||b>=c.b){throw tC(new sC());}--c.b;for(a=b;a<c.b;++a){mh(c.a,a,c.a[a+1]);}mh(c.a,c.b,null);}
function sA(b,c){var a;a=oA(b,c);if(a==(-1)){throw EK(new DK());}rA(b,a);}
function eA(){}
_=eA.prototype=new tD();_.tN=lL+'WidgetCollection';_.tI=89;_.a=null;_.b=0;function gA(b,a){b.b=a;return b;}
function iA(){return this.a<this.b.b-1;}
function jA(){if(this.a>=this.b.b){throw EK(new DK());}return this.b.a[++this.a];}
function fA(){}
_=fA.prototype=new tD();_.tb=iA;_.yb=jA;_.tN=lL+'WidgetCollection$WidgetIterator';_.tI=90;_.a=(-1);function aB(){}
_=aB.prototype=new tD();_.tN=mL+'PopupImpl';_.tI=91;function hB(){hB=cL;kB=lB();}
function gB(a){hB();return a;}
function iB(b){var a;a=fj();if(kB){xk(a,'<div><\/div>');al(dB(new cB(),b,a));}return a;}
function jB(b,a){return kB?fk(a):a;}
function lB(){hB();if(navigator.userAgent.indexOf('Macintosh')!= -1){return true;}return false;}
function bB(){}
_=bB.prototype=new aB();_.tN=mL+'PopupImplMozilla';_.tI=92;var kB;function dB(b,a,c){b.a=c;return b;}
function fB(){zk(this.a,'overflow','auto');}
function cB(){}
_=cB.prototype=new tD();_.F=fB;_.tN=mL+'PopupImplMozilla$1';_.tI=93;function qB(){}
_=qB.prototype=new tD();_.tN=nL+'OutputStream';_.tI=94;function oB(){}
_=oB.prototype=new qB();_.tN=nL+'FilterOutputStream';_.tI=95;function sB(){}
_=sB.prototype=new oB();_.tN=nL+'PrintStream';_.tI=96;function wB(){wB=cL;BD();}
function vB(a){wB();zD(a);return a;}
function uB(){}
_=uB.prototype=new yD();_.tN=oL+'ArrayStoreException';_.tI=97;function zB(){zB=cL;AB=yB(new xB(),false);BB=yB(new xB(),true);}
function yB(a,b){zB();a.a=b;return a;}
function CB(a){return rh(a,28)&&qh(a,28).a==this.a;}
function DB(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function EB(){return this.a?'true':'false';}
function FB(a){zB();return a?BB:AB;}
function xB(){}
_=xB.prototype=new tD();_.eQ=CB;_.hC=DB;_.tS=EB;_.tN=oL+'Boolean';_.tI=98;_.a=false;var AB,BB;function eC(){eC=cL;BD();}
function cC(a){eC();zD(a);return a;}
function dC(b,a){eC();AD(b,a);return b;}
function bC(){}
_=bC.prototype=new yD();_.tN=oL+'ClassCastException';_.tI=99;function nC(){nC=cL;BD();}
function mC(b,a){nC();AD(b,a);return b;}
function lC(){}
_=lC.prototype=new yD();_.tN=oL+'IllegalArgumentException';_.tI=100;function rC(){rC=cL;BD();}
function pC(a){rC();zD(a);return a;}
function qC(b,a){rC();AD(b,a);return b;}
function oC(){}
_=oC.prototype=new yD();_.tN=oL+'IllegalStateException';_.tI=101;function vC(){vC=cL;BD();}
function tC(a){vC();zD(a);return a;}
function uC(b,a){vC();AD(b,a);return b;}
function sC(){}
_=sC.prototype=new yD();_.tN=oL+'IndexOutOfBoundsException';_.tI=102;function qD(){qD=cL;{sD();}}
function pD(a){qD();return a;}
function sD(){qD();rD=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
function oD(){}
_=oD.prototype=new tD();_.tN=oL+'Number';_.tI=103;var rD=null;function yC(){yC=cL;qD();}
function xC(a,b){yC();pD(a);a.a=b;return a;}
function zC(b,a){if(b.a<a.a){return (-1);}else if(b.a>a.a){return 1;}else{return 0;}}
function CC(a){return zC(this,qh(a,29));}
function DC(a){return rh(a,29)&&qh(a,29).a==this.a;}
function EC(){return this.a;}
function aD(a){yC();return zE(a);}
function FC(){return aD(this.a);}
function wC(){}
_=wC.prototype=new oD();_.u=CC;_.eQ=DC;_.hC=EC;_.tS=FC;_.tN=oL+'Integer';_.tI=104;_.a=0;var AC=2147483647,BC=(-2147483648);function dD(a){return a<0?-a:a;}
function eD(a){return a<0?-a:a;}
function fD(a,b){return a>b?a:b;}
function gD(a,b){return a<b?a:b;}
function hD(a){return Math.sqrt(a);}
function kD(){kD=cL;BD();}
function jD(a){kD();zD(a);return a;}
function iD(){}
_=iD.prototype=new yD();_.tN=oL+'NegativeArraySizeException';_.tI=105;function nD(){nD=cL;BD();}
function mD(b,a){nD();AD(b,a);return b;}
function lD(){}
_=lD.prototype=new yD();_.tN=oL+'NullPointerException';_.tI=106;function gE(b,a){return b.charCodeAt(a);}
function iE(f,c){var a,b,d,e,g,h;h=nE(f);e=nE(c);b=gD(h,e);for(a=0;a<b;a++){g=gE(f,a);d=gE(c,a);if(g!=d){return g-d;}}return h-e;}
function jE(b,a){if(!rh(a,1))return false;return sE(b,a);}
function kE(b,a){return b.indexOf(a);}
function lE(c,b,a){return c.indexOf(b,a);}
function mE(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function nE(a){return a.length;}
function oE(c,a,b){b=tE(b);return c.replace(RegExp(a,'g'),b);}
function pE(b,a){return b.substr(a,b.length-a);}
function qE(c,a,b){return c.substr(a,b-a);}
function rE(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function sE(a,b){return String(a)==b;}
function tE(b){var a;a=0;while(0<=(a=lE(b,'\\',a))){if(gE(b,a+1)==36){b=qE(b,0,a)+'$'+pE(b,++a);}else{b=qE(b,0,a)+pE(b,++a);}}return b;}
function uE(a){if(rh(a,1)){return iE(this,qh(a,1));}else{throw dC(new bC(),'Cannot compare '+a+" with String '"+this+"'");}}
function vE(a){return jE(this,a);}
function xE(){var a=wE;if(!a){a=wE={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function yE(){return this;}
function zE(a){return ''+a;}
function AE(a){return a!==null?a.tS():'null';}
_=String.prototype;_.u=uE;_.eQ=vE;_.hC=xE;_.tS=yE;_.tN=oL+'String';_.tI=2;var wE=null;function ED(a){aE(a);return a;}
function FD(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function aE(a){bE(a,'');}
function bE(b,a){b.js=[a];b.length=a.length;}
function dE(a){a.zb();return a.js[0];}
function eE(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function fE(){return dE(this);}
function DD(){}
_=DD.prototype=new tD();_.zb=eE;_.tS=fE;_.tN=oL+'StringBuffer';_.tI=107;function CE(){CE=cL;EE=new sB();}
function DE(){CE();return new Date().getTime();}
function FE(a){CE();return pg(a);}
var EE;function kF(){kF=cL;BD();}
function jF(b,a){kF();AD(b,a);return b;}
function iF(){}
_=iF.prototype=new yD();_.tN=oL+'UnsupportedOperationException';_.tI=108;function tF(b,a){b.c=a;return b;}
function vF(a){return a.a<a.c.yc();}
function wF(a){if(!vF(a)){throw EK(new DK());}return a.c.rb(a.b=a.a++);}
function xF(a){if(a.b<0){throw pC(new oC());}a.c.qc(a.b);a.a=a.b;a.b=(-1);}
function yF(){return vF(this);}
function zF(){return wF(this);}
function sF(){}
_=sF.prototype=new tD();_.tb=yF;_.yb=zF;_.tN=pL+'AbstractList$IteratorImpl';_.tI=109;_.a=0;_.b=(-1);function bH(f,d,e){var a,b,c;for(b=rJ(f.E());jJ(b);){a=kJ(b);c=a.jb();if(d===null?c===null:d.eQ(c)){if(e){lJ(b);}return a;}}return null;}
function cH(b){var a;a=b.E();return fG(new eG(),b,a);}
function dH(b){var a;a=BJ(b);return tG(new sG(),b,a);}
function eH(a){return bH(this,a,false)!==null;}
function fH(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!rh(d,31)){return false;}f=qh(d,31);c=cH(this);e=f.wb();if(!mH(c,e)){return false;}for(a=hG(c);oG(a);){b=pG(a);h=this.sb(b);g=f.sb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function gH(b){var a;a=bH(this,b,false);return a===null?null:a.pb();}
function hH(){var a,b,c;b=0;for(c=rJ(this.E());jJ(c);){a=kJ(c);b+=a.hC();}return b;}
function iH(){return cH(this);}
function jH(){var a,b,c,d;d='{';a=false;for(c=rJ(this.E());jJ(c);){b=kJ(c);if(a){d+=', ';}else{a=true;}d+=AE(b.jb());d+='=';d+=AE(b.pb());}return d+'}';}
function dG(){}
_=dG.prototype=new tD();_.y=eH;_.eQ=fH;_.sb=gH;_.hC=hH;_.wb=iH;_.tS=jH;_.tN=pL+'AbstractMap';_.tI=110;function mH(e,b){var a,c,d;if(b===e){return true;}if(!rh(b,32)){return false;}c=qh(b,32);if(c.yc()!=e.yc()){return false;}for(a=c.vb();a.tb();){d=a.yb();if(!e.z(d)){return false;}}return true;}
function nH(a){return mH(this,a);}
function oH(){var a,b,c;a=0;for(b=this.vb();b.tb();){c=b.yb();if(c!==null){a+=c.hC();}}return a;}
function kH(){}
_=kH.prototype=new lF();_.eQ=nH;_.hC=oH;_.tN=pL+'AbstractSet';_.tI=111;function fG(b,a,c){b.a=a;b.b=c;return b;}
function hG(b){var a;a=rJ(b.b);return mG(new lG(),b,a);}
function iG(a){return this.a.y(a);}
function jG(){return hG(this);}
function kG(){return this.b.a.c;}
function eG(){}
_=eG.prototype=new kH();_.z=iG;_.vb=jG;_.yc=kG;_.tN=pL+'AbstractMap$1';_.tI=112;function mG(b,a,c){b.a=c;return b;}
function oG(a){return a.a.tb();}
function pG(b){var a;a=b.a.yb();return a.jb();}
function qG(){return oG(this);}
function rG(){return pG(this);}
function lG(){}
_=lG.prototype=new tD();_.tb=qG;_.yb=rG;_.tN=pL+'AbstractMap$2';_.tI=113;function tG(b,a,c){b.a=a;b.b=c;return b;}
function vG(b){var a;a=rJ(b.b);return AG(new zG(),b,a);}
function wG(a){return AJ(this.a,a);}
function xG(){return vG(this);}
function yG(){return this.b.a.c;}
function sG(){}
_=sG.prototype=new lF();_.z=wG;_.vb=xG;_.yc=yG;_.tN=pL+'AbstractMap$3';_.tI=114;function AG(b,a,c){b.a=c;return b;}
function CG(a){return a.a.tb();}
function DG(a){var b;b=a.a.yb().pb();return b;}
function EG(){return CG(this);}
function FG(){return DG(this);}
function zG(){}
_=zG.prototype=new tD();_.tb=EG;_.yb=FG;_.tN=pL+'AbstractMap$4';_.tI=115;function lI(b){var a,c;a=rH(new pH());for(c=0;c<b.a;c++){tH(a,b[c]);}return a;}
function mI(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.v(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function nI(a){mI(a,a.a,(uI(),vI));}
function uI(){uI=cL;vI=new rI();}
var vI;function tI(a,b){return qh(a,37).u(b);}
function rI(){}
_=rI.prototype=new tD();_.v=tI;_.tN=pL+'Comparators$1';_.tI=116;function yJ(){yJ=cL;FJ=fK();}
function vJ(a){{xJ(a);}}
function wJ(a){yJ();vJ(a);return a;}
function xJ(a){a.a=zg();a.d=Ag();a.b=xh(FJ,vg);a.c=0;}
function zJ(b,a){if(rh(a,1)){return jK(b.d,qh(a,1))!==FJ;}else if(a===null){return b.b!==FJ;}else{return iK(b.a,a,a.hC())!==FJ;}}
function AJ(a,b){if(a.b!==FJ&&hK(a.b,b)){return true;}else if(eK(a.d,b)){return true;}else if(cK(a.a,b)){return true;}return false;}
function BJ(a){return oJ(new fJ(),a);}
function CJ(c,a){var b;if(rh(a,1)){b=jK(c.d,qh(a,1));}else if(a===null){b=c.b;}else{b=iK(c.a,a,a.hC());}return b===FJ?null:b;}
function DJ(c,a,d){var b;if(rh(a,1)){b=mK(c.d,qh(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=lK(c.a,a,d,a.hC());}if(b===FJ){++c.c;return null;}else{return b;}}
function EJ(c,a){var b;if(rh(a,1)){b=oK(c.d,qh(a,1));}else if(a===null){b=c.b;c.b=xh(FJ,vg);}else{b=nK(c.a,a,a.hC());}if(b===FJ){return null;}else{--c.c;return b;}}
function aK(e,c){yJ();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function bK(d,a){yJ();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=EI(c.substring(1),e);a.s(b);}}}
function cK(f,h){yJ();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.pb();if(hK(h,d)){return true;}}}}return false;}
function dK(a){return zJ(this,a);}
function eK(c,d){yJ();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(hK(d,a)){return true;}}}return false;}
function fK(){yJ();}
function gK(){return BJ(this);}
function hK(a,b){yJ();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function kK(a){return CJ(this,a);}
function iK(f,h,e){yJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(hK(h,d)){return c.pb();}}}}
function jK(b,a){yJ();return b[':'+a];}
function lK(f,h,j,e){yJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(hK(h,d)){var i=c.pb();c.uc(j);return i;}}}else{a=f[e]=[];}var c=EI(h,j);a.push(c);}
function mK(c,a,d){yJ();a=':'+a;var b=c[a];c[a]=d;return b;}
function nK(f,h,e){yJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(hK(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.pb();}}}}
function oK(c,a){yJ();a=':'+a;var b=c[a];delete c[a];return b;}
function AI(){}
_=AI.prototype=new dG();_.y=dK;_.E=gK;_.sb=kK;_.tN=pL+'HashMap';_.tI=117;_.a=null;_.b=null;_.c=0;_.d=null;var FJ;function CI(b,a,c){b.a=a;b.b=c;return b;}
function EI(a,b){return CI(new BI(),a,b);}
function FI(b){var a;if(rh(b,38)){a=qh(b,38);if(hK(this.a,a.jb())&&hK(this.b,a.pb())){return true;}}return false;}
function aJ(){return this.a;}
function bJ(){return this.b;}
function cJ(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function dJ(a){var b;b=this.b;this.b=a;return b;}
function eJ(){return this.a+'='+this.b;}
function BI(){}
_=BI.prototype=new tD();_.eQ=FI;_.jb=aJ;_.pb=bJ;_.hC=cJ;_.uc=dJ;_.tS=eJ;_.tN=pL+'HashMap$EntryImpl';_.tI=118;_.a=null;_.b=null;function oJ(b,a){b.a=a;return b;}
function qJ(d,c){var a,b,e;if(rh(c,38)){a=qh(c,38);b=a.jb();if(zJ(d.a,b)){e=CJ(d.a,b);return hK(a.pb(),e);}}return false;}
function rJ(a){return hJ(new gJ(),a.a);}
function sJ(a){return qJ(this,a);}
function tJ(){return rJ(this);}
function uJ(){return this.a.c;}
function fJ(){}
_=fJ.prototype=new kH();_.z=sJ;_.vb=tJ;_.yc=uJ;_.tN=pL+'HashMap$EntrySet';_.tI=119;function hJ(c,b){var a;c.c=b;a=rH(new pH());if(c.c.b!==(yJ(),FJ)){tH(a,CI(new BI(),null,c.c.b));}bK(c.c.d,a);aK(c.c.a,a);c.a=CF(a);return c;}
function jJ(a){return vF(a.a);}
function kJ(a){return a.b=qh(wF(a.a),38);}
function lJ(a){if(a.b===null){throw qC(new oC(),'Must call next() before remove().');}else{xF(a.a);EJ(a.c,a.b.jb());a.b=null;}}
function mJ(){return jJ(this);}
function nJ(){return kJ(this);}
function gJ(){}
_=gJ.prototype=new tD();_.tb=mJ;_.yb=nJ;_.tN=pL+'HashMap$EntrySetIterator';_.tI=120;_.a=null;_.b=null;function qK(a){a.a=wJ(new AI());return a;}
function rK(c,a){var b;b=DJ(c.a,a,FB(true));return b===null;}
function tK(a){return hG(cH(a.a));}
function uK(a){return rK(this,a);}
function vK(a){return zJ(this.a,a);}
function wK(){return tK(this);}
function xK(){return this.a.c;}
function yK(){return cH(this.a).tS();}
function pK(){}
_=pK.prototype=new kH();_.s=uK;_.z=vK;_.vb=wK;_.yc=xK;_.tS=yK;_.tN=pL+'HashSet';_.tI=121;_.a=null;function FK(){FK=cL;BD();}
function EK(a){FK();zD(a);return a;}
function DK(){}
_=DK.prototype=new yD();_.tN=pL+'NoSuchElementException';_.tI=122;function xL(){}
_=xL.prototype=new tD();_.tN=qL+'BezierCurve';_.tI=123;function zL(b){var a;b.a=gj('canvas');{a=ak(b.a,'class');tk(b.a,'class',a+' gwt-diagrams-canvas');}}
function AL(a){zL(a);return a;}
function DL(i,d,e,a,b){var c,f,g,h,j;h=sN(new rN(),gD(d.a,e.a),gD(d.b,e.b));j=dD(d.a-e.a);c=dD(d.b-e.b);g=fD(j,c);g=fD(g,dD(d.a-a.a));g=fD(g,dD(d.b-a.b));g=fD(g,dD(e.a-b.a));g=fD(g,dD(e.b-b.b));f=sN(new rN(),h.a-g,h.b-g);zk(i.a,'left',aD(f.a));zk(i.a,'top',aD(f.b));tk(i.a,'width',aD(j+g*2));tk(i.a,'height',aD(c+g*2));CL(i,vN(d,xN(f)),vN(e,xN(f)),vN(a,xN(f)),vN(b,xN(f)),EL(i.a,'color'));}
function CL(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function EL(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function yL(){}
_=yL.prototype=new xL();_.tN=qL+'BezierCurveCanvas';_.tI=124;function bM(a){a.c=rH(new pH());}
function cM(c,d){var a,b;bM(c);sH(c.c,d);gM(c,c.A());for(b=CF(c.c);vF(b);){a=qh(wF(b),35);a.w(c);}return c;}
function dM(a,b){cM(a,lI(b));return a;}
function fM(a){return a.b.t(a.c);}
function gM(b,a){b.b=a;}
function hM(a){a.Ac(fM(a));}
function iM(){hM(this);}
function aM(){}
_=aM.prototype=new dA();_.zc=iM;_.tN=rL+'AbstractConnection';_.tI=125;_.b=null;function kM(a){a.a=AL(new yL());}
function mM(a,b){dM(a,b);kM(a);if(b.a!=2){throw mC(new lC(),'Need exactly two connectors to connect');}wA(a,a.a.a);dz(a,'gwt-diagrams-connection');return a;}
function lM(c,a,b){mM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',154,35,[a,b]));return c;}
function oM(){return new zM();}
function pM(b){var a;if(!rh(b,39)){throw mC(new lC(),'Expected BezierConnectionData');}a=qh(b,39);if(a.b.b!=2){throw mC(new lC(),'Expected two connection points');}if(a.a.b!=2){throw mC(new lC(),'Expected two control points');}DL(this.a,qh(wH(a.b,0),36),qh(wH(a.b,1),36),qh(wH(a.a,0),36),qh(wH(a.a,1),36));}
function jM(){}
_=jM.prototype=new aM();_.A=oM;_.Ac=pM;_.tN=rL+'BezierTwoEndedConnection';_.tI=126;function sM(a){a.a=rH(new pH());}
function uM(a,b){dM(a,b);sM(a);if(b.a!=2){throw mC(new lC(),'Need exactly two connectors to connect');}wA(a,fj());dz(a,'gwt-diagrams-connection');hM(a);return a;}
function tM(c,a,b){uM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',154,35,[a,b]));return c;}
function wM(d,a){var b,c;for(c=d.a.b;c<a;c++){b=fj();tH(d.a,xh(b,cl));cj(d.gb(),b);xk(b,'&nbsp;');}while(d.a.b>a){b=qh(wH(d.a,0),17);BH(d.a,xh(b,cl));ok(d.gb(),b);}}
function xM(){return new EM();}
function yM(a){var b,c,d,e,f;if(a.b.b<=1){throw mC(new lC(),'Too few connection points');}wM(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=qh(wH(this.a,d),17);e=qh(wH(a.b,d),36);c=qh(wH(a.b,d+1),36);f='gwt-diagrams-line';tk(b,'style','');vk(b,'className',f);zk(b,'height','1');zk(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';zk(b,'height',aD(dD(e.b-c.b)));}else if(e.b==c.b){zk(b,'width',aD(dD(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}else{throw qC(new oC(),'Illegal state for right angeled connection');}zk(b,'left',aD(gD(e.a,c.a)));zk(b,'top',aD(gD(e.b,c.b)));vk(b,'className',f);}}
function rM(){}
_=rM.prototype=new aM();_.A=xM;_.Ac=yM;_.tN=rL+'RectilinearTwoEndedConnection';_.tI=127;function BM(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[151],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=uN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function CM(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw mC(new lC(),'Unsupported connectors count');}c=qh(wH(e,0),35);d=qh(wH(e,1),35);f=BM(this,c,d);h=c.pc(f[0]);i=d.pc(f[1]);a=wN(h,f[0],50);b=wN(i,f[1],50);g=kN(new hN(),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',155,36,[h,i]),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',155,36,[a,b]));return g;}
function zM(){}
_=zM.prototype=new tD();_.t=CM;_.tN=sL+'BezierConnectionCalculator';_.tI=128;function FM(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(fO(),iO);}if(c==1&&d>0){return a!==(fO(),jO);}if(c==0&&d<0){return a!==(fO(),jO);}if(c==1&&d<0){return a!==(fO(),iO);}}else{if(c==0&&d>0){return a!==(fO(),kO);}if(c==1&&d>0){return a!==(fO(),hO);}if(c==0&&d<0){return a!==(fO(),hO);}if(c==1&&d<0){return a!==(fO(),kO);}}return false;}
function bN(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[151],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=uN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function cN(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(fO(),jO);}if(c==1&&d>0){return a===(fO(),iO);}if(c==0&&d<0){return a===(fO(),iO);}if(c==1&&d<0){return a===(fO(),jO);}}else{if(c==0&&d>0){return a===(fO(),hO);}if(c==1&&d>0){return a===(fO(),kO);}if(c==0&&d<0){return a===(fO(),kO);}if(c==1&&d<0){return a===(fO(),hO);}}return false;}
function dN(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw mC(new lC(),'Unsupported connectors count');}a=qh(wH(c,0),35);b=qh(wH(c,1),35);d=oN(new mN());e=bN(this,a,b);i=a.pc(e[0]);j=wN(i,e[0],10);k=b.pc(e[1]);l=wN(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(cN(this,e[0],0,f,true)&&cN(this,e[1],1,f,true)){g=wN(j,e[0],dD(th(f/2)));h=sN(new rN(),g.a,l.b);}else if(cN(this,e[0],0,m,false)&&cN(this,e[1],1,m,false)){g=wN(j,e[0],dD(th(m/2)));h=sN(new rN(),l.a,g.b);}else if(cN(this,e[0],0,f,true)&&cN(this,e[1],1,m,false)){g=wN(j,e[0],dD(f));h=wN(l,e[1],dD(m));}else if(cN(this,e[0],0,m,false)&&cN(this,e[1],1,f,true)){g=wN(j,e[0],dD(m));h=wN(l,e[1],dD(f));}else if(cN(this,e[0],0,f,true)&&FM(this,e[1],1,f,true)){g=wN(j,e[0],dD(th(f/2)));h=sN(new rN(),g.a,l.b);}else if(FM(this,e[0],0,f,true)&&cN(this,e[1],1,f,true)){g=wN(j,e[0],dD(th(f/2)));h=sN(new rN(),g.a,l.b);}else if(cN(this,e[0],0,m,false)&&FM(this,e[1],1,m,false)){g=wN(j,e[0],dD(th(m/2)));h=sN(new rN(),l.a,g.b);}else if(FM(this,e[0],0,m,false)&&cN(this,e[1],1,m,false)){g=wN(j,e[0],dD(th(m/2)));h=sN(new rN(),l.a,g.b);}else if(FM(this,e[0],0,f,true)&&FM(this,e[1],1,f,true)){g=wN(j,(fO(),jO),th(f/2));h=sN(new rN(),g.a,l.b);}else if(FM(this,e[0],0,m,false)&&FM(this,e[1],1,m,false)){g=wN(j,(fO(),hO),th(m/2));h=sN(new rN(),l.a,g.b);}else{}tH(d.b,i);tH(d.b,j);if(g!==null){tH(d.b,g);}if(h!==null){tH(d.b,h);}tH(d.b,l);tH(d.b,k);return d;}
function EM(){}
_=EM.prototype=new tD();_.t=dN;_.tN=sL+'FullRectilinearTwoEndedCalculator';_.tI=129;function gN(c){var a,b,d;if(c.b!=2){throw mC(new lC(),'Unsupported connectors count');}a=qh(wH(c,0),35);b=qh(wH(c,1),35);d=oN(new mN());tH(d.b,sN(new rN(),a.kb()+th(a.qb()/2),a.ob()+th(a.hb()/2)));tH(d.b,sN(new rN(),a.kb()+th(a.qb()/2),b.ob()+th(b.hb()/2)));tH(d.b,sN(new rN(),b.kb()+th(b.qb()/2),b.ob()+th(b.hb()/2)));return d;}
function eN(){}
_=eN.prototype=new tD();_.t=gN;_.tN=sL+'SimpleRectilinearTwoEndedCalculator';_.tI=130;function nN(a){a.b=rH(new pH());}
function oN(a){nN(a);return a;}
function pN(b,a){nN(b);sH(b.b,a);return b;}
function mN(){}
_=mN.prototype=new tD();_.tN=tL+'ConnectionData';_.tI=131;function iN(a){a.a=rH(new pH());}
function jN(c,b,a){pN(c,b);iN(c);sH(c.a,a);return c;}
function kN(c,b,a){jN(c,lI(b),lI(a));return c;}
function hN(){}
_=hN.prototype=new mN();_.tN=tL+'BezierConnectionData';_.tI=132;function sN(b,a,c){b.a=a;b.b=c;return b;}
function uN(b,a){return hD((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function wN(c,a,b){if(a===(fO(),hO)){return sN(new rN(),c.a,c.b+b);}else if(a===(fO(),kO)){return sN(new rN(),c.a,c.b-b);}else if(a===(fO(),iO)){return sN(new rN(),c.a-b,c.b);}else if(a===(fO(),jO)){return sN(new rN(),c.a+b,c.b);}else{throw pC(new oC());}}
function vN(a,b){return sN(new rN(),a.a+b.a,a.b+b.b);}
function xN(a){return sN(new rN(),-a.a,-a.b);}
function rN(){}
_=rN.prototype=new tD();_.tN=tL+'Point';_.tI=133;_.a=0;_.b=0;function zN(a){a.c=qK(new pK());}
function AN(a){zN(a);return a;}
function CN(b,a){return wN(sN(new rN(),b.kb()+th(b.qb()/2),b.ob()+th(b.hb()/2)),a,gO(a)?th(b.qb()/2):th(b.hb()/2));}
function DN(c){var a,b;for(b=tK(c.c);oG(b);){a=qh(pG(b),40);a.zc();}}
function EN(a){rK(this.c,a);}
function FN(a){return CN(this,a);}
function aO(){return lO();}
function bO(a){return CN(this,a);}
function yN(){}
_=yN.prototype=new tD();_.w=EN;_.bb=FN;_.eb=aO;_.pc=bO;_.tN=uL+'AbstractConnector';_.tI=134;function fO(){fO=cL;kO=eO(new dO(),'UP');hO=eO(new dO(),'DOWN');iO=eO(new dO(),'LEFT');jO=eO(new dO(),'RIGHT');}
function eO(b,a){fO();b.a=a;return b;}
function gO(a){return a===iO||a===jO;}
function lO(){fO();return lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',151,33,[kO,hO,iO,jO]);}
function mO(){return this.a;}
function dO(){}
_=dO.prototype=new tD();_.tS=mO;_.tN=uL+'Direction';_.tI=135;_.a=null;var hO,iO,jO,kO;function tO(){tO=cL;BO=wJ(new AI());}
function sO(a,b){tO();AN(a);a.b=b;return a;}
function uO(){return this.b.lb();}
function vO(){var a,b;a=0;b=hk(this.b.gb());while(b!==null){if(jE('relative',ik(b,'position'))){a=Ej(b);break;}b=hk(b);}return fz(this.b)-a;}
function wO(){var a,b;a=0;b=hk(this.b.gb());while(b!==null){if(jE('relative',ik(b,'position'))){a=Fj(b);break;}b=hk(b);}return gz(this.b)-a;}
function xO(){return this.b.mb();}
function yO(a){tO();return qh(CJ(BO,a),41);}
function zO(b){tO();var a;if(zJ(BO,b)){return qh(CJ(BO,b),41);}else{a=sO(new nO(),b);DJ(BO,b,a);return a;}}
function AO(c,b){tO();var a;if(zJ(BO,c)){return qh(CJ(BO,c),41);}else{a=pO(new oO(),c,b);DJ(BO,c,a);return a;}}
function nO(){}
_=nO.prototype=new yN();_.hb=uO;_.kb=vO;_.ob=wO;_.qb=xO;_.tN=uL+'UIObjectConnector';_.tI=136;_.b=null;var BO;function qO(){qO=cL;tO();}
function pO(b,a,c){qO();b.a=c;sO(b,a);return b;}
function rO(){return this.a;}
function oO(){}
_=oO.prototype=new nO();_.eb=rO;_.tN=uL+'UIObjectConnector$1';_.tI=137;function fP(a){lg(new DO());al(bP(new aP(),a));}
function CO(){}
_=CO.prototype=new tD();_.tN=vL+'BaseExamplesEntryPoint';_.tI=138;function FO(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=fF(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=wq(new uq(),true);zk(a.gb(),'backgroundColor','#ABCDEF');CE(),EE;d=oE(d,' ','&nbsp;');zq(a,'<pre>'+d+'<\/pre>');Dv(a);}
function DO(){}
_=DO.prototype=new tD();_.tN=vL+'BaseExamplesEntryPoint$1';_.tI=139;function bP(b,a){b.a=a;return b;}
function dP(){nP(this.a);}
function aP(){}
_=aP.prototype=new tD();_.F=dP;_.tN=vL+'BaseExamplesEntryPoint$2';_.tI=140;function nP(b){var a;a=wy(new jy());cp(Dw('tabs'),a);yy(a,pQ(new oQ()),'Rectilinear');yy(a,lQ(new kQ()),'Bezier');yy(a,tQ(new sQ()),'Simple rect.');xy(a,iP(new hP(),b,a));Dy(a,0);}
function gP(){}
_=gP.prototype=new CO();_.tN=vL+'GwtDiagramsExample';_.tI=141;function iP(b,a,c){b.a=c;return b;}
function kP(a,b){return true;}
function lP(b,c){var a;a=qh(Ay(this.a,c),42);dQ(a);}
function hP(){}
_=hP.prototype=new tD();_.Bb=kP;_.lc=lP;_.tN=vL+'GwtDiagramsExample$1';_.tI=142;function gQ(a){a.c=bp(new ap());}
function hQ(a){var b;hx(a);gQ(a);dz(a,'gwt-diagrams-example');b=Dz(new Bz());jx(a,b);Ez(b,a.c);Ez(b,jQ(a,cQ(a)));return a;}
function jQ(e,d){var a,b,c;a=qr(new pr());dz(a,'gwt-diagrams-sources-panel');for(b=CF(d);vF(b);){c=qh(wF(b),12);rr(a,c);}return a;}
function fQ(){}
_=fQ.prototype=new ax();_.tN=wL+'AbstractExample';_.tI=143;function CP(a){a.a=rH(new pH());}
function DP(a){hQ(a);CP(a);a.b=bQ(a);zk(a.c.gb(),'width','450px');zk(a.c.gb(),'height','350px');a.B();return a;}
function EP(b,a){cp(b.c,a);tH(b.a,a);}
function aQ(e,d,c,f,a){var b;b=Fu(new Du(),d);dz(b,'example-connector');dp(e.c,b,c,f);sP(e.b,b);if(a!==null){return AO(b,lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',151,33,[a]));}return zO(b);}
function bQ(b){var a;a=qP(new pP(),b.c,true,b);return a;}
function cQ(f){var a,b,c,d,e;e=rH(new pH());b=mE(jg(f),46);a=pE(jg(f),b+1);tH(e,su(new qu(),a+'.java',''));tH(e,su(new qu(),'AbstractExample.java',''));tH(e,su(new qu(),'AbstractConnectionsExample.java',''));for(d=CF(e);vF(d);){c=qh(wF(d),43);dz(c,'gwt-diagrams-source-link');tu(c,zP(new yP(),f,c));}return e;}
function dQ(c){var a,b;for(b=CF(c.a);vF(b);){a=qh(wF(b),40);a.zc();}}
function eQ(){var a,b,c,d,e,f,g,h;a=aQ(this,'all',50,50,null);b=aQ(this,'all',100,100,null);this.x(a,b);c=aQ(this,'up',250,50,(fO(),kO));d=aQ(this,'down',300,100,(fO(),hO));this.x(c,d);e=aQ(this,'left',50,200,(fO(),iO));f=aQ(this,'right',100,250,(fO(),jO));this.x(e,f);g=aQ(this,'left',250,200,(fO(),iO));h=aQ(this,'left',300,250,(fO(),iO));this.x(g,h);}
function oP(){}
_=oP.prototype=new fQ();_.B=eQ;_.tN=wL+'AbstractConnectionsExample';_.tI=144;_.b=null;function rP(){rP=cL;jc();}
function qP(d,a,b,c){rP();ic(d,a,b);return d;}
function sP(a,b){z(a,b);zk(b.gb(),'position','absolute');zk(b.gb(),'zIndex','100');}
function tP(c,b,a){return vP(new uP(),b,a,c);}
function pP(){}
_=pP.prototype=new hc();_.tN=wL+'AbstractConnectionsExample$1';_.tI=145;function wP(){wP=cL;wd();}
function vP(d,a,b,c){wP();vd(d,a,b);return d;}
function xP(d,c,b){var a;tc(this,d,c,b);a=yO(c);if(a!==null){DN(a);}}
function uP(){}
_=uP.prototype=new ud();_.jc=xP;_.tN=wL+'AbstractConnectionsExample$2';_.tI=146;function zP(b,a,c){b.a=c;return b;}
function BP(a){Am('../source/'+vu(this.a),'','');}
function yP(){}
_=yP.prototype=new tD();_.Db=BP;_.tN=wL+'AbstractConnectionsExample$3';_.tI=147;function lQ(a){DP(a);return a;}
function nQ(a,b){EP(this,lM(new jM(),a,b));}
function kQ(){}
_=kQ.prototype=new oP();_.x=nQ;_.tN=wL+'BezierExample';_.tI=148;function pQ(a){DP(a);return a;}
function rQ(a,b){EP(this,tM(new rM(),a,b));}
function oQ(){}
_=oQ.prototype=new oP();_.x=rQ;_.tN=wL+'RectilinearExample';_.tI=149;function tQ(a){DP(a);return a;}
function vQ(d,a,b){var c;c=tM(new rM(),a,b);gM(c,new eN());EP(d,c);}
function wQ(a,b){vQ(this,a,b);}
function xQ(){var a,b;a=aQ(this,'connector 1',50,50,(fO(),kO));b=aQ(this,'connector 2',200,200,(fO(),hO));vQ(this,a,b);}
function sQ(){}
_=sQ.prototype=new oP();_.x=wQ;_.B=xQ;_.tN=wL+'SimpleRectilinearExample';_.tI=150;function nB(){fP(new gP());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{nB();}catch(a){b(d);}else{nB();}}
var wh=[{},{25:1},{1:1,25:1,37:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{9:1,25:1,37:1},{21:1,25:1},{25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{25:1},{14:1,25:1},{14:1,25:1},{11:1,14:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{13:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1},{18:1,25:1},{18:1,25:1},{18:1,25:1},{25:1},{13:1,17:1,25:1},{13:1,25:1},{19:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1,26:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{2:1,12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1,30:1},{25:1,30:1},{25:1,30:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,21:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{5:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{3:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1,43:1},{25:1,30:1},{2:1,12:1,22:1,24:1,25:1,26:1,27:1},{19:1,25:1},{25:1},{12:1,20:1,25:1,26:1,27:1},{25:1,30:1},{12:1,23:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,20:1,25:1,26:1,27:1},{4:1,12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1,28:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{25:1,29:1,37:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{10:1,14:1,25:1},{25:1},{25:1,31:1},{25:1,32:1},{25:1,32:1},{25:1},{25:1},{25:1},{25:1},{25:1,31:1},{25:1,38:1},{25:1,32:1},{25:1},{25:1,32:1},{10:1,14:1,25:1},{25:1},{25:1},{12:1,25:1,26:1,27:1,40:1},{12:1,25:1,26:1,27:1,40:1},{12:1,25:1,26:1,27:1,40:1},{25:1},{25:1},{25:1},{25:1},{25:1,39:1},{25:1,36:1},{25:1,35:1},{25:1,33:1},{25:1,35:1,41:1},{25:1,35:1,41:1},{25:1},{25:1},{15:1,25:1},{25:1},{23:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1,42:1},{25:1},{7:1,25:1},{20:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1,42:1},{6:1,12:1,24:1,25:1,26:1,27:1,42:1},{6:1,12:1,24:1,25:1,26:1,27:1,42:1},{25:1},{25:1},{25:1},{25:1},{25:1},{8:1,25:1},{25:1},{25:1},{25:1},{25:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();