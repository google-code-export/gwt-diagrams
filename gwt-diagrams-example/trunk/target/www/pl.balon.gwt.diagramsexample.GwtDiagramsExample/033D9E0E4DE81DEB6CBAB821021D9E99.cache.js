(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,yK='com.allen_sauer.gwt.dragdrop.client.',zK='com.allen_sauer.gwt.dragdrop.client.drop.',AK='com.allen_sauer.gwt.dragdrop.client.util.',BK='com.allen_sauer.gwt.dragdrop.client.util.impl.',CK='com.google.gwt.core.client.',DK='com.google.gwt.lang.',EK='com.google.gwt.user.client.',FK='com.google.gwt.user.client.impl.',aL='com.google.gwt.user.client.ui.',bL='com.google.gwt.user.client.ui.impl.',cL='java.io.',dL='java.lang.',eL='java.util.',fL='pl.balon.gwt.diagrams.client.common.bezier.',gL='pl.balon.gwt.diagrams.client.connection.',hL='pl.balon.gwt.diagrams.client.connection.calculator.',iL='pl.balon.gwt.diagrams.client.connection.data.',jL='pl.balon.gwt.diagrams.client.connector.',kL='pl.balon.gwt.diagramsexample.client.',lL='pl.balon.gwt.diagramsexample.client.examples.';function xK(){}
function kD(a){return this===a;}
function lD(){return uE(this);}
function mD(){return this.tN+'@'+this.hC();}
function iD(){}
_=iD.prototype={};_.eQ=kD;_.hC=lD;_.tS=mD;_.toString=function(){return this.tS();};_.tN=dL+'Object';_.tI=1;function nI(b,a){b.d=a;return b;}
function mI(){}
_=mI.prototype=new iD();_.tN=eL+'EventObject';_.tI=3;_.d=null;function ib(c,b,a){nI(c,b);c.c=a;return c;}
function kb(){var a;a=this.c!==null?'dropTarget='+hf(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+hf(this.d)+')';}
function hb(){}
_=hb.prototype=new mI();_.tS=kb;_.tN=yK+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ib(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new hb();_.tS=q;_.tN=yK+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function u(){u=xK;F=lJ(new pI());}
function s(a){a.g=x(a);}
function t(c,b,a){u();s(c);c.f=b!==null?b:xw();c.e=sP(c,c.f,a);B(c,c.e);c.l=Bb(new zb(),c);return c;}
function v(c,a,b){ez(a,'dragdrop-dragging');}
function w(b,a){xb(b.g,b.f,a);Ey(a,'dragdrop-dragging');}
function x(a){return sb(new lb());}
function y(b,c){var a;a=vb(b.g,c,b.f);return a!==null?a:b.e;}
function z(a,b){{A(a,b,b);}}
function A(c,b,a){Fb(c.l,b,a);Ey(b,'dragdrop-draggable');Ey(a,'dragdrop-handle');sJ(F,b,a);}
function B(b,a){tb(b.g,a);}
function C(b,a){if(rh(b.j,2)){Eo(qh(b.j,2),a,b.k.a,b.k.d);}else if(rh(b.j,3)){hu(qh(b.j,3),a,b.h);}else if(rh(b.j,4)){Cz(qh(b.j,4),a,b.h);}else if(rh(b.j,5)){or(qh(b.j,5),a,b.h);}else if(rh(b.j,6)){qh(b.j,6).wc(a);}else{throw pD(new nD(),'Unable to handle initialDraggableParent '+jg(b.j));}}
function D(b,a){if(b.i!==null&&cE(b.i)!=0){Ak(a.gb(),'margin',b.i);}}
function E(b,a){b.j=a.p;if(rh(b.j,2)){b.k=nf(new mf(),a,b.j);}else if(rh(b.j,3)){b.h=yp(qh(b.j,3),a);}else if(rh(b.j,4)){b.h=yp(qh(b.j,4),a);}else if(rh(b.j,5)){b.h=yp(qh(b.j,5),a);}else if(rh(b.j,6)){}else{throw pD(new nD(),"Unable to handle 'initialDraggableParent instanceof "+jg(b.j)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.i=jk(a.gb(),'margin');if(b.i!==null&&cE(b.i)!=0){Ak(a.gb(),'margin','0px');}}
function r(){}
_=r.prototype=new iD();_.tN=yK+'AbstractDragController';_.tI=6;_.e=null;_.f=null;_.h=0;_.i=null;_.j=null;_.k=null;_.l=null;var F;function bb(b,a){b.b=a;return b;}
function db(a){if(a.c==0){return;}Cb(a.b,a.d,a.e);a.a=sE()-a.c;a.c=0;}
function eb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=sE();}if(a.a>80){bl(a);}else{db(a);}}
function fb(){db(this);}
function ab(){}
_=ab.prototype=new iD();_.F=fb;_.tN=yK+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function rb(a){a.a=gH(new eH());}
function sb(a){rb(a);return a;}
function tb(b,a){iH(b.a,a);}
function vb(g,h,a){var b,c,d,e,f,i,j,k;i=kf(new jf(),h,null);j=ge(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(je(f,i)){k=fe(f,j);if(k<=c){if(e===null|| !Ae(pb(b).gb(),pb(e).gb())){c=k;e=b;}}}}return e===null?null:e.a;}
function wb(a){return rF(a.a);}
function xb(h,b,d){var a,c,e,f,g;a=kf(new jf(),b,null);g=gH(new eH());for(f=wb(h);kF(f);){e=qh(lF(f),7);c=nb(new mb(),e);if(!Ae(d.gb(),pb(c).gb())){if(je(c.b,a)){iH(g,c);}}}h.b=qh(sH(g,lh('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',155,9,[])),8);cI(h.b);}
function lb(){}
_=lb.prototype=new iD();_.tN=yK+'DropControllerCollection';_.tI=8;_.b=null;function nb(c,a){var b;c.a=a;b=a.fb();if(!b.ub()){throw eC(new cC(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=kf(new jf(),b,null);return c;}
function pb(a){return a.a.fb();}
function qb(a){var b;b=qh(a,9);return Ae(pb(this).gb(),pb(b).gb())?1:(-1);}
function mb(){}
_=mb.prototype=new iD();_.u=qb;_.tN=yK+'DropControllerCollection$Candidate';_.tI=9;_.a=null;_.b=null;function Ab(a){a.d=bb(new ab(),a);a.f=lJ(new pI());}
function Bb(b,a){Ab(b);b.e=a;b.a=a.f;return b;}
function Cb(e,f,g){var a,b,c,d;c=nf(new mf(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=vC(0,wC(a,e.l));b=vC(0,wC(b,e.m));}Be(e.o.gb(),a,b);d=y(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.cc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ac(e.o,e.g,e.e);}}if(e.i!==null){e.i.jc(e.o,e.g,e.e);}}
function Db(b){var a;ok(b.b.gb());b.h=false;if(b.i!==null){b.i.cc(b.g,b.e);}b.i=null;jc(b.e,b.g,null);a=ib(new hb(),b.g,null);}
function Fb(c,b,a){if(a!==null){Cu(a,c);sJ(c.f,a,b);}else{throw pD(new nD(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function ac(f){var a,c,d,e;f.g=qh(rJ(f.f,f.b),12);kc(f.e,f.g);f.o=f.e.d;f.l=Fe(f.a.gb())-f.o.mb();f.m=Ee(f.a.gb())-f.o.lb();e=nf(new mf(),f.b,f.a);c=nf(new mf(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;tk(f.b.gb());f.h=true;try{Cb(f,f.j,f.k);}catch(a){a=Bh(a);if(rh(a,10)){d=a;Db(f);throw d;}else throw a;}}
function bc(b,c,d){var a;this.b=b;a=sj((bj(),mj));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Dj((bj(),mj));df();this.j=c;this.k=d;}
function cc(a){}
function dc(a){}
function ec(d,e,f){var a,c;if(!this.h){if(this.n){ac(this);}if(!this.h){return;}}Dj((bj(),mj));try{eb(this.d,e,f);}catch(a){a=Bh(a);if(rh(a,10)){c=a;Db(this);throw c;}else throw a;}}
function fc(g,h,i){var a,a,d,e,f;d=sj((bj(),mj));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{ok(this.b.gb());Cb(this,h,i);this.h=false;if(this.i===null){Db(this);return;}{this.i.fb();}try{this.i.kc(this.o,this.g,this.e);}catch(a){a=Bh(a);if(rh(a,11)){a;Db(this);return;}else throw a;}jc(this.e,this.g,this.i.fb());e=this.i.Fb(this.o,this.g,this.e);}catch(a){a=Bh(a);if(rh(a,10)){f=a;Db(this);throw f;}else throw a;}finally{this.i=null;}}
function zb(){}
_=zb.prototype=new iD();_.ec=bc;_.fc=cc;_.gc=dc;_.hc=ec;_.ic=fc;_.tN=yK+'MouseDragHandler';_.tI=10;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ic(){ic=xK;u();}
function hc(c,b,a){ic();t(c,b,a);return c;}
function jc(c,a,b){v(c,a,b);if(c.a!==null){c.a=null;if(c.c!==null){qA(c.c);c.c=null;}else{if(b===null){C(c,a);}}D(c,a);qA(c.d);c.d=null;}}
function kc(d,a){var b,c;w(d,a);d.a=a;d.c=lc(d,a);E(d,a);c=nf(new mf(),a,d.f);d.d=cx(new Bw());Ey(d.d,'dragdrop-movable-panel');if(d.c===null){hz(d.d,a.mb(),a.lb());}Eo(d.f,d.d,c.a,c.d);b=d.c!==null?d.c:d.a;d.d.wc(b);}
function lc(c,a){var b;if(c.b){b=lt(new pr(),'this is a Drag Proxy');Ey(b,'dragdrop-proxy');hz(b,c.a.mb(),c.a.lb());return b;}else{return null;}}
function gc(){}
_=gc.prototype=new r();_.tN=yK+'PickupDragController';_.tI=11;_.a=null;_.b=false;_.c=null;_.d=null;function Bc(b,a){b.g=a;Ey(a,'dragdrop-boundary');return b;}
function Dc(d,c,b,a){ez(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.xb(c,b,a);}
function Ec(d,c,b,a){Ey(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Fc(c,b,a){ez(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function ad(){return this.g;}
function bd(c,b,a){return ib(new hb(),b,this.g);}
function cd(c,b,a){return Dc(this,c,b,a);}
function dd(c,b,a){Ec(this,c,b,a);}
function ed(b,a){Fc(this,b,a);}
function fd(c,b,a){}
function gd(c,b,a){}
function Ac(){}
_=Ac.prototype=new iD();_.fb=ad;_.xb=bd;_.Fb=cd;_.ac=dd;_.cc=ed;_.jc=fd;_.kc=gd;_.tN=zK+'AbstractDropController';_.tI=12;_.g=null;function jd(){jd=xK;pd=Au(new yu(),'x');}
function id(b,a){jd();Bc(b,a);return b;}
function kd(f,e){var a,b,c,d;d=cx(new Bw());Ey(d,'dragdrop-positioner');Eo(xw(),d,(-500),(-500));d.wc(pd);a=cx(new Bw());c=e.mb()-af(d);b=e.lb()-bf(d);hz(a,c,b);d.wc(a);return d;}
function ld(e,d,b,a){var c;c=Dc(e,d,b,a);od(e);return c;}
function md(d,c,b,a){Ec(d,c,b,a);d.f=kd(d,b);}
function nd(c,b,a){Fc(c,b,a);od(c);}
function od(a){if(a.f!==null){qA(a.f);}}
function qd(c,b,a){return ld(this,c,b,a);}
function rd(c,b,a){md(this,c,b,a);}
function sd(b,a){nd(this,b,a);}
function hd(){}
_=hd.prototype=new Ac();_.Fb=qd;_.ac=rd;_.cc=sd;_.tN=zK+'AbstractPositioningDropController';_.tI=13;_.f=null;var pd;function oc(){oc=xK;jd();}
function nc(b,a){oc();id(b,a);b.d=Bd(new Ad(),a);return b;}
function pc(d,c,a,e){var b;b=d.cb(c,a,e);if(b!==null){Eo(d.d.b,e,b.a,b.d);}}
function qc(e,d,b,a){var c;Eo(e.d.b,b,e.c.a,e.c.d);c=ld(e,d,b,a);e.e=null;return c;}
function rc(c,b,a){nd(c,b,a);Fd(c.d,null);c.e=null;}
function sc(d,c,b,a){pc(d,c,b,d.f);}
function tc(b,a,d){var c;c=kf(new jf(),b,this.d.a);if(this.e===null){this.e=nf(new mf(),b,this.d.b);}else{tf(this.e,b);}pf(this.e,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.e;}
function uc(e,b,a){var c,d;c=this.g;d=nf(new mf(),b,c);return o(new n(),b,c,d.a,d.d);}
function vc(c,b,a){return qc(this,c,b,a);}
function wc(c,b,a){md(this,c,b,a);Fd(this.d,a.f);}
function xc(b,a){rc(this,b,a);}
function yc(c,b,a){sc(this,c,b,a);}
function zc(c,b,a){this.c=this.cb(c,b,b);if(this.c===null){throw be(new ae());}}
function mc(){}
_=mc.prototype=new hd();_.cb=tc;_.xb=uc;_.Fb=vc;_.ac=wc;_.cc=xc;_.jc=yc;_.kc=zc;_.tN=zK+'AbsolutePositionDropController';_.tI=14;_.c=null;_.d=null;_.e=null;function vd(){vd=xK;oc();}
function ud(c,b,a){vd();nc(c,b);c.a=a;return c;}
function wd(b,a,d){var c;if(this.a){c=kf(new jf(),b,this.d.a);if(this.b===null){this.b=nf(new mf(),b,this.d.b);}else{tf(this.b,b);}pf(this.b,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.b;}else{return null;}}
function xd(d,c,a){var b;b=qc(this,d,c,a);this.b=null;return b;}
function yd(b,a){rc(this,b,a);this.b=null;}
function td(){}
_=td.prototype=new mc();_.cb=wd;_.Fb=xd;_.cc=yd;_.tN=zK+'BoundaryDropController';_.tI=15;_.a=false;_.b=null;function Bd(b,a){b.b=a;return b;}
function Dd(a){return Ee(a.b.gb());}
function Ed(a){return Fe(a.b.gb());}
function Fd(b,a){b.a=a;}
function Ad(){}
_=Ad.prototype=new iD();_.tN=zK+'DropTargetInfo';_.tI=16;_.a=null;_.b=null;function zE(){zE=xK;BE=kh('[Ljava.lang.StackTraceElement;',[152],[34],[0],null);}
function wE(a){a.c=BE;}
function xE(a){zE();wE(a);return a;}
function yE(b,a){zE();wE(b);b.b=a;return b;}
function AE(c){var a,b;a=jg(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function CE(){return AE(this);}
function vE(){}
_=vE.prototype=new iD();_.tS=CE;_.tN=dL+'Throwable';_.tI=17;_.a=null;_.b=null;var BE;function EB(){EB=xK;zE();}
function CB(a){EB();xE(a);return a;}
function DB(b,a){EB();yE(b,a);return b;}
function BB(){}
_=BB.prototype=new vE();_.tN=dL+'Exception';_.tI=18;function ce(){ce=xK;EB();}
function be(a){ce();CB(a);return a;}
function ae(){}
_=ae.prototype=new BB();_.tN=zK+'VetoDropException';_.tI=19;function fe(b,a){var c,d;c=vC(b.b-a.a,a.a-b.c);d=vC(b.d-a.b,a.b-b.a);return vC(c,d);}
function ge(a){return ue(new te(),a.b+uh(ie(a)/2),a.d+uh(he(a)/2));}
function he(a){return a.a-a.d;}
function ie(a){return a.c-a.b;}
function je(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function ke(b,a){b.a=a;}
function le(b,a){b.b=a;}
function me(b,a){b.c=a;}
function ne(a,b){a.d=b;}
function oe(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function de(){}
_=de.prototype=new iD();_.tS=oe;_.tN=AK+'AbstractArea';_.tI=20;_.a=0;_.b=0;_.c=0;_.d=0;function re(){return '('+this.kb()+', '+this.ob()+')';}
function pe(){}
_=pe.prototype=new iD();_.tS=re;_.tN=AK+'AbstractLocation';_.tI=21;function ue(b,a,c){b.a=a;b.b=c;return b;}
function we(){return this.a;}
function xe(){return this.b;}
function te(){}
_=te.prototype=new pe();_.kb=we;_.ob=xe;_.tN=AK+'CoordinateLocation';_.tI=22;_.a=0;_.b=0;function ze(){ze=xK;{cf=new yf();}}
function Ae(b,a){ze();return cg(cf,b,a);}
function Be(a,b,c){ze();a.style.left=b+'px';a.style.top=c+'px';}
function Ce(a){ze();return Cf(cf,a);}
function De(a){ze();return Df(cf,a);}
function Ee(a){ze();return Ef(cf,a);}
function Fe(a){ze();return Ff(cf,a);}
function af(a){ze();return dg(cf,a);}
function bf(a){ze();return eg(cf,a);}
function df(){ze();ag(cf);}
var cf=null;function hf(a){var b;b=jg(a);return eE(b,bE(b,46)+1);}
function kf(e,g,c){var a,b,d,f;b=az(g);f=bz(g);if(c!==null){b-=az(c);b-=Ce(c.gb());f-=bz(c);f-=De(c.gb());}d=b+g.mb();a=f+g.lb();le(e,b);ne(e,f);me(e,d);ke(e,a);return e;}
function jf(){}
_=jf.prototype=new de();_.tN=AK+'WidgetArea';_.tI=23;function nf(b,c,a){rf(b,c);qf(b,a);sf(b);return b;}
function pf(e,c,d,a,b){e.a=vC(c,wC(e.a,a));e.d=vC(d,wC(e.d,b));}
function qf(b,a){if(a===null||a===xw()){b.b=0;b.c=0;}else{b.b=az(a)+Ce(a.gb());b.c=bz(a)+De(a.gb());}}
function rf(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=az(b);a.f=bz(b);}}
function sf(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function tf(a,b){rf(a,b);sf(a);}
function uf(){return this.a;}
function vf(){return this.d;}
function wf(){return '('+this.a+', '+this.d+')';}
function mf(){}
_=mf.prototype=new pe();_.kb=uf;_.ob=vf;_.tS=wf;_.tN=AK+'WidgetLocation';_.tI=24;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function cg(c,b,a){return b.contains(a);}
function dg(a,b){return b.mb()-Ff(a,b.gb());}
function eg(a,b){return b.lb()-Ef(a,b.gb());}
function xf(){}
_=xf.prototype=new iD();_.tN=BK+'DOMUtilImpl';_.tI=25;function Cf(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function Df(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function Ef(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function Ff(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function ag(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function Af(){}
_=Af.prototype=new xf();_.tN=BK+'DOMUtilImplStandard';_.tI=26;function yf(){}
_=yf.prototype=new Af();_.tN=BK+'DOMUtilImplOpera';_.tI=27;function jg(a){return a==null?null:a.tN;}
function lg(a){kg=a;}
var kg=null;function og(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function pg(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function qg(){return ++rg;}
var rg=0;function qD(){qD=xK;EB();}
function oD(a){qD();CB(a);return a;}
function pD(b,a){qD();DB(b,a);return b;}
function nD(){}
_=nD.prototype=new BB();_.tN=dL+'RuntimeException';_.tI=28;function ug(){ug=xK;qD();}
function tg(c,b,a){ug();pD(c,'JavaScript '+b+' exception: '+a);return c;}
function sg(){}
_=sg.prototype=new nD();_.tN=CK+'JavaScriptException';_.tI=29;function xg(b,a){if(!rh(a,13)){return false;}return Bg(b,qh(a,13));}
function yg(a){return og(a);}
function zg(){return [];}
function Ag(){return {};}
function Cg(a){return xg(this,a);}
function Bg(a,b){return a===b;}
function Dg(){return yg(this);}
function Fg(){return Eg(this);}
function Eg(a){if(a.toString)return a.toString();return '[object]';}
function vg(){}
_=vg.prototype=new iD();_.eQ=Cg;_.hC=Dg;_.tS=Fg;_.tN=CK+'JavaScriptObject';_.tI=30;function bh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function dh(a,b,c){return a[b]=c;}
function fh(a,b){return eh(a,b);}
function eh(a,b){return bh(new ah(),b,a.tI,a.b,a.tN);}
function gh(b,a){return b[a];}
function ih(b,a){return b[a];}
function hh(a){return a.length;}
function kh(e,d,c,b,a){return jh(e,d,c,b,0,hh(b),a);}
function jh(j,i,g,c,e,a,b){var d,f,h;if((f=gh(c,e))<0){throw zC(new yC());}h=bh(new ah(),f,gh(i,e),gh(g,e),j);++e;if(e<a){j=eE(j,1);for(d=0;d<f;++d){dh(h,d,jh(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){dh(h,d,b);}}return h;}
function lh(f,e,c,g){var a,b,d;b=hh(g);d=bh(new ah(),b,e,c,f);for(a=0;a<b;++a){dh(d,a,ih(g,a));}return d;}
function mh(a,b,c){if(c!==null&&a.b!=0&& !rh(c,a.b)){throw gB(new fB());}return dh(a,b,c);}
function ah(){}
_=ah.prototype=new iD();_.tN=DK+'Array';_.tI=31;function ph(b,a){return !(!(b&&xh[b][a]));}
function qh(b,a){if(b!=null)ph(b.tI,a)||wh();return b;}
function rh(b,a){return b!=null&&ph(b.tI,a);}
function sh(a){return a&65535;}
function th(a){return ~(~a);}
function uh(a){if(a>(lC(),mC))return lC(),mC;if(a<(lC(),nC))return lC(),nC;return a>=0?Math.floor(a):Math.ceil(a);}
function wh(){throw wB(new vB());}
function vh(a){if(a!==null){throw wB(new vB());}return a;}
function yh(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var xh;function Bh(a){if(rh(a,14)){return a;}return tg(new sg(),Dh(a),Ch(a));}
function Ch(a){return a.message;}
function Dh(a){return a.name;}
function ai(){ai=xK;qD();}
function Fh(b,a){ai();oD(b);return b;}
function Eh(){}
_=Eh.prototype=new nD();_.tN=EK+'CommandCanceledException';_.tI=34;function vi(a){a.a=di(new ci(),a);a.b=gH(new eH());a.d=hi(new gi(),a);a.f=li(new ki(),a);}
function wi(a){vi(a);return a;}
function yi(c){var a,b,d;a=ni(c.f);qi(c.f);b=null;if(rh(a,15)){b=Fh(new Eh(),qh(a,15));}else{}if(b!==null){d=kg;if(d!==null){DO(d,b);}}Bi(c,false);Ai(c);}
function zi(e,d){var a,b,c,f;f=false;try{Bi(e,true);ri(e.f,e.b.b);bm(e.a,10000);while(oi(e.f)){b=pi(e.f);c=true;try{if(b===null){return;}if(rh(b,15)){a=qh(b,15);a.F();}else{}}finally{f=si(e.f);if(f){return;}if(c){qi(e.f);}}if(Ei(sE(),d)){return;}}}finally{if(!f){Dl(e.a);Bi(e,false);Ai(e);}}}
function Ai(a){if(!oH(a.b)&& !a.e&& !a.c){Ci(a,true);bm(a.d,1);}}
function Bi(b,a){b.c=a;}
function Ci(b,a){b.e=a;}
function Di(b,a){iH(b.b,a);Ai(b);}
function Ei(a,b){return uC(a-b)>=100;}
function bi(){}
_=bi.prototype=new iD();_.tN=EK+'CommandExecutor';_.tI=35;_.c=false;_.e=false;function El(){El=xK;hm=gH(new eH());{gm();}}
function Cl(a){El();return a;}
function Dl(a){if(a.b){cm(a.c);}else{dm(a.c);}qH(hm,a);}
function Fl(e,d){var a,c;try{am(e);}catch(a){a=Bh(a);if(rh(a,14)){c=a;DO(d,c);}else throw a;}}
function am(a){if(!a.b){qH(hm,a);}a.sc();}
function bm(b,a){if(a<=0){throw aC(new FB(),'must be positive');}Dl(b);b.b=false;b.c=em(b,a);iH(hm,b);}
function cm(a){El();$wnd.clearInterval(a);}
function dm(a){El();$wnd.clearTimeout(a);}
function em(b,a){El();return $wnd.setTimeout(function(){b.ab();},a);}
function fm(){var a;a=kg;if(a!==null){Fl(this,a);}else{am(this);}}
function gm(){El();lm(new yl());}
function xl(){}
_=xl.prototype=new iD();_.ab=fm;_.tN=EK+'Timer';_.tI=36;_.b=false;_.c=0;var hm;function ei(){ei=xK;El();}
function di(b,a){ei();b.a=a;Cl(b);return b;}
function fi(){if(!this.a.c){return;}yi(this.a);}
function ci(){}
_=ci.prototype=new xl();_.sc=fi;_.tN=EK+'CommandExecutor$1';_.tI=37;function ii(){ii=xK;El();}
function hi(b,a){ii();b.a=a;Cl(b);return b;}
function ji(){Ci(this.a,false);zi(this.a,sE());}
function gi(){}
_=gi.prototype=new xl();_.sc=ji;_.tN=EK+'CommandExecutor$2';_.tI=38;function li(b,a){b.d=a;return b;}
function ni(a){return lH(a.d.b,a.b);}
function oi(a){return a.c<a.a;}
function pi(b){var a;b.b=b.c;a=lH(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function qi(a){pH(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function ri(b,a){b.a=a;}
function si(a){return a.b==(-1);}
function ti(){return oi(this);}
function ui(){return pi(this);}
function ki(){}
_=ki.prototype=new iD();_.tb=ti;_.yb=ui;_.tN=EK+'CommandExecutor$CircularIterator';_.tI=39;_.a=0;_.b=(-1);_.c=0;function bj(){bj=xK;sk=gH(new eH());{kk=new Em();on(kk);}}
function cj(a){bj();iH(sk,a);}
function dj(b,a){bj();un(kk,b,a);}
function ej(a,b){bj();return fn(kk,a,b);}
function fj(){bj();return wn(kk,'A');}
function gj(){bj();return wn(kk,'div');}
function hj(a){bj();return wn(kk,a);}
function ij(){bj();return wn(kk,'tbody');}
function jj(){bj();return wn(kk,'td');}
function kj(){bj();return wn(kk,'tr');}
function lj(){bj();return wn(kk,'table');}
function pj(b,a,d){bj();var c;c=kg;if(c!==null){nj(b,a,d,c);}else{oj(b,a,d);}}
function nj(e,d,g,f){bj();var a,c;try{oj(e,d,g);}catch(a){a=Bh(a);if(rh(a,14)){c=a;DO(f,c);}else throw a;}}
function oj(b,a,c){bj();var d;if(a===rk){if(Cj(b)==8192){rk=null;}}d=mj;mj=b;try{c.Cb(b);}finally{mj=d;}}
function qj(b,a){bj();xn(kk,b,a);}
function rj(a){bj();return yn(kk,a);}
function sj(a){bj();return an(kk,a);}
function tj(a){bj();return zn(kk,a);}
function uj(a){bj();return An(kk,a);}
function vj(a){bj();return Bn(kk,a);}
function wj(a){bj();return gn(kk,a);}
function xj(a){bj();return Cn(kk,a);}
function yj(a){bj();return Dn(kk,a);}
function zj(a){bj();return En(kk,a);}
function Aj(a){bj();return hn(kk,a);}
function Bj(a){bj();return jn(kk,a);}
function Cj(a){bj();return Fn(kk,a);}
function Dj(a){bj();kn(kk,a);}
function Ej(a){bj();return ln(kk,a);}
function Fj(a){bj();return bn(kk,a);}
function ak(a){bj();return cn(kk,a);}
function bk(b,a){bj();return ao(kk,b,a);}
function ck(a){bj();return bo(kk,a);}
function ek(a,b){bj();return eo(kk,a,b);}
function dk(a,b){bj();return co(kk,a,b);}
function fk(a){bj();return fo(kk,a);}
function gk(a){bj();return mn(kk,a);}
function hk(a){bj();return go(kk,a);}
function ik(a){bj();return nn(kk,a);}
function jk(b,a){bj();return ho(kk,b,a);}
function lk(c,a,b){bj();pn(kk,c,a,b);}
function mk(b,a){bj();return qn(kk,b,a);}
function nk(a){bj();var b,c;c=true;if(sk.b>0){b=qh(lH(sk,sk.b-1),16);if(!(c=b.bc(a))){qj(a,true);Dj(a);}}return c;}
function ok(a){bj();if(rk!==null&&ej(a,rk)){rk=null;}rn(kk,a);}
function pk(b,a){bj();io(kk,b,a);}
function qk(a){bj();qH(sk,a);}
function tk(a){bj();rk=a;sn(kk,a);}
function uk(b,a,c){bj();jo(kk,b,a,c);}
function wk(a,b,c){bj();lo(kk,a,b,c);}
function vk(a,b,c){bj();ko(kk,a,b,c);}
function xk(a,b){bj();mo(kk,a,b);}
function yk(a,b){bj();no(kk,a,b);}
function zk(a,b){bj();oo(kk,a,b);}
function Ak(b,a,c){bj();po(kk,b,a,c);}
function Bk(a,b){bj();tn(kk,a,b);}
function Ck(a){bj();return qo(kk,a);}
function Dk(){bj();return ro(kk);}
function Ek(){bj();return so(kk);}
var mj=null,kk=null,rk=null,sk;function al(){al=xK;cl=wi(new bi());}
function bl(a){al();if(a===null){throw CC(new BC(),'cmd can not be null');}Di(cl,a);}
var cl;function fl(a){if(rh(a,17)){return ej(this,qh(a,17));}return xg(yh(this,dl),a);}
function gl(){return yg(yh(this,dl));}
function hl(){return Ck(this);}
function dl(){}
_=dl.prototype=new vg();_.eQ=fl;_.hC=gl;_.tS=hl;_.tN=EK+'Element';_.tI=40;function ml(a){return xg(yh(this,il),a);}
function nl(){return yg(yh(this,il));}
function ol(){return Ej(this);}
function il(){}
_=il.prototype=new vg();_.eQ=ml;_.hC=nl;_.tS=ol;_.tN=EK+'Event';_.tI=41;function ql(){ql=xK;tl=gH(new eH());{ul=new vo();if(!xo(ul)){ul=null;}}}
function rl(e,d){ql();var a,c;try{sl(e);}catch(a){a=Bh(a);if(rh(a,14)){c=a;DO(d,c);}else throw a;}}
function sl(a){ql();var b,c;for(b=rF(tl);kF(b);){c=vh(lF(b));null.Cc();}}
function vl(a){ql();if(ul!==null){yo(ul,a);}}
function wl(b){ql();var a;a=kg;if(a!==null){rl(b,a);}else{sl(b);}}
var tl,ul=null;function Al(){while((El(),hm).b>0){Dl(qh(lH((El(),hm),0),18));}}
function Bl(){return null;}
function yl(){}
_=yl.prototype=new iD();_.nc=Al;_.oc=Bl;_.tN=EK+'Timer$1';_.tI=42;function km(){km=xK;mm=gH(new eH());Cm=gH(new eH());{xm();}}
function lm(a){km();iH(mm,a);}
function nm(d){km();var a,c;try{om();}catch(a){a=Bh(a);if(rh(a,14)){c=a;DO(d,c);}else throw a;}}
function om(){km();var a,b;for(a=rF(mm);kF(a);){b=qh(lF(a),19);b.nc();}}
function pm(d){km();var a,c;try{return qm();}catch(a){a=Bh(a);if(rh(a,14)){c=a;DO(d,c);return null;}else throw a;}}
function qm(){km();var a,b,c,d;d=null;for(a=rF(mm);kF(a);){b=qh(lF(a),19);c=b.oc();{d=c;}}return d;}
function rm(d){km();var a,c;try{sm();}catch(a){a=Bh(a);if(rh(a,14)){c=a;DO(d,c);}else throw a;}}
function sm(){km();var a,b;for(a=rF(Cm);kF(a);){b=vh(lF(a));null.Cc();}}
function tm(){km();return Dk();}
function um(){km();return Ek();}
function vm(){km();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function wm(){km();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function xm(){km();__gwt_initHandlers(function(){Am();},function(){return zm();},function(){ym();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ym(){km();var a;a=kg;if(a!==null){nm(a);}else{om();}}
function zm(){km();var a;a=kg;if(a!==null){return pm(a);}else{return qm();}}
function Am(){km();var a;a=kg;if(a!==null){rm(a);}else{sm();}}
function Bm(c,b,a){km();$wnd.open(c,b,a);}
var mm,Cm;function un(c,b,a){b.appendChild(a);}
function wn(b,a){return $doc.createElement(a);}
function xn(c,b,a){b.cancelBubble=a;}
function yn(b,a){return !(!a.altKey);}
function zn(b,a){return a.clientX|| -1;}
function An(b,a){return a.clientY|| -1;}
function Bn(b,a){return !(!a.ctrlKey);}
function Cn(b,a){return a.which||(a.keyCode|| -1);}
function Dn(b,a){return !(!a.metaKey);}
function En(b,a){return !(!a.shiftKey);}
function Fn(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ao(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function bo(c,b){var a=$doc.getElementById(b);return a||null;}
function eo(d,a,b){var c=a[b];return c==null?null:String(c);}
function co(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function fo(b,a){return a.__eventBits||0;}
function go(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.ib(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function ho(d,b,a){var c=b.style[a];return c==null?null:c;}
function io(c,b,a){b.removeChild(a);}
function jo(c,b,a,d){b.setAttribute(a,d);}
function lo(c,a,b,d){a[b]=d;}
function ko(c,a,b,d){a[b]=d;}
function mo(c,a,b){a.__listener=b;}
function no(c,a,b){if(!b){b='';}a.innerHTML=b;}
function oo(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function po(c,b,a,d){b.style[a]=d;}
function qo(b,a){return a.outerHTML;}
function ro(a){return $doc.body.clientHeight;}
function so(a){return $doc.body.clientWidth;}
function to(a){return go(this,a);}
function Dm(){}
_=Dm.prototype=new iD();_.ib=to;_.tN=FK+'DOMImpl';_.tI=43;function fn(c,a,b){return a==b;}
function gn(b,a){return a.relatedTarget?a.relatedTarget:null;}
function hn(b,a){return a.target||null;}
function jn(b,a){return a.relatedTarget||null;}
function kn(b,a){a.preventDefault();}
function ln(b,a){return a.toString();}
function mn(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function nn(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function on(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){pj(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!nk(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)pj(b,a,c);};$wnd.__captureElem=null;}
function pn(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function qn(c,b,a){while(a){if(b==a){return true;}a=a.parentNode;if(a&&a.nodeType!=1){a=null;}}return false;}
function rn(b,a){if(a==$wnd.__captureElem)$wnd.__captureElem=null;}
function sn(b,a){$wnd.__captureElem=a;}
function tn(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function dn(){}
_=dn.prototype=new Dm();_.tN=FK+'DOMImplStandard';_.tI=44;function an(c,b){var a=b.button;if(a==0){return 1;}else{return a|| -1;}}
function bn(d,b){var c=0;var a=b.parentNode;while(a!=$doc.body){if(a.tagName!='TR'&&a.tagName!='TBODY'){c-=a.scrollLeft;}a=a.parentNode;}while(b){c+=b.offsetLeft;b=b.offsetParent;}return c;}
function cn(c,b){var d=0;var a=b.parentNode;while(a!=$doc.body){if(a.tagName!='TR'&&a.tagName!='TBODY'){d-=a.scrollTop;}a=a.parentNode;}while(b){d+=b.offsetTop;b=b.offsetParent;}return d;}
function Em(){}
_=Em.prototype=new dn();_.tN=FK+'DOMImplOpera';_.tI=45;function Ao(a){wl(a);}
function uo(){}
_=uo.prototype=new iD();_.tN=FK+'HistoryImpl';_.tI=46;function xo(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;Ao(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function yo(b,a){if(a==null){a='';}$wnd.location.hash=encodeURIComponent(a);}
function vo(){}
_=vo.prototype=new uo();_.tN=FK+'HistoryImplStandard';_.tI=47;function Ey(b,a){rz(b.nb(),a,true);}
function az(a){return Fj(a.gb());}
function bz(a){return ak(a.gb());}
function cz(a){return dk(a.q,'offsetHeight');}
function dz(a){return dk(a.q,'offsetWidth');}
function ez(b,a){rz(b.nb(),a,false);}
function fz(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function gz(b,a){if(b.q!==null){fz(b,b.q,a);}b.q=a;}
function hz(b,c,a){if(c>=0){b.xc(c+'px');}if(a>=0){b.tc(a+'px');}}
function iz(b,a){qz(b.nb(),a);}
function jz(b,a){Bk(b.gb(),a|fk(b.gb()));}
function kz(){return this.q;}
function lz(){return cz(this);}
function mz(){return dz(this);}
function nz(){return this.q;}
function oz(a){return ek(a,'className');}
function pz(a){Ak(this.q,'height',a);}
function qz(a,b){wk(a,'className',b);}
function rz(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw pD(new nD(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=gE(j);if(cE(j)==0){throw aC(new FB(),'Style names cannot be empty');}i=oz(c);e=FD(i,j);while(e!=(-1)){if(e==0||BD(i,e-1)==32){f=e+cE(j);g=cE(i);if(f==g||f<g&&BD(i,f)==32){break;}}e=aE(i,j,e+1);}if(a){if(e==(-1)){if(cE(i)>0){i+=' ';}wk(c,'className',i+j);}}else{if(e!=(-1)){b=gE(fE(i,0,e));d=gE(eE(i,e+cE(j)));if(cE(b)==0){h=d;}else if(cE(d)==0){h=b;}else{h=b+' '+d;}wk(c,'className',h);}}}
function sz(a,b){a.style.display=b?'':'none';}
function tz(a){sz(this.q,a);}
function uz(a){Ak(this.q,'width',a);}
function vz(){if(this.q===null){return '(null handle)';}return Ck(this.q);}
function Dy(){}
_=Dy.prototype=new iD();_.gb=kz;_.lb=lz;_.mb=mz;_.nb=nz;_.tc=pz;_.vc=tz;_.xc=uz;_.tS=vz;_.tN=aL+'UIObject';_.tI=48;_.q=null;function pA(a){if(!a.ub()){throw eC(new cC(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.mc();}finally{a.D();xk(a.gb(),null);a.o=false;}}
function qA(a){if(rh(a.p,24)){qh(a.p,24).rc(a);}else if(a.p!==null){throw eC(new cC(),"This widget's parent does not implement HasWidgets");}}
function rA(b,a){if(b.ub()){xk(b.gb(),null);}gz(b,a);if(b.ub()){xk(a,b);}}
function sA(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.ub()){c.Eb();}c.p=null;}else{if(a!==null){throw eC(new cC(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.ub()){c.Ab();}}}
function tA(){}
function uA(){}
function vA(){return this.o;}
function wA(){if(this.ub()){throw eC(new cC(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;xk(this.gb(),this);this.C();this.dc();}
function xA(a){}
function yA(){pA(this);}
function zA(){}
function AA(){}
function Ez(){}
_=Ez.prototype=new Dy();_.C=tA;_.D=uA;_.ub=vA;_.Ab=wA;_.Cb=xA;_.Eb=yA;_.dc=zA;_.mc=AA;_.tN=aL+'Widget';_.tI=49;_.o=false;_.p=null;function mv(b,a){sA(a,b);}
function ov(b,a){sA(a,null);}
function pv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Ab();}}
function qv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Eb();}}
function rv(){}
function sv(){}
function lv(){}
_=lv.prototype=new Ez();_.C=pv;_.D=qv;_.dc=rv;_.mc=sv;_.tN=aL+'Panel';_.tI=50;function rp(a){a.f=fA(new Fz(),a);}
function sp(a){rp(a);return a;}
function tp(c,a,b){qA(a);gA(c.f,a);dj(b,a.gb());mv(c,a);}
function up(d,b,a){var c;wp(d,a);if(b.p===d){c=yp(d,b);if(c<a){a--;}}return a;}
function vp(b,a){if(a<0||a>=b.f.b){throw hC(new gC());}}
function wp(b,a){if(a<0||a>b.f.b){throw hC(new gC());}}
function zp(b,a){return iA(b.f,a);}
function yp(b,a){return jA(b.f,a);}
function Ap(e,b,c,a,d){a=up(e,b,a);qA(b);kA(e.f,b,a);if(d){lk(c,b.gb(),a);}else{dj(c,b.gb());}mv(e,b);}
function Bp(a){return lA(a.f);}
function Cp(b,c){var a;if(c.p!==b){return false;}ov(b,c);a=c.gb();pk(ik(a),a);nA(b.f,c);return true;}
function Dp(){return Bp(this);}
function Ep(a){return Cp(this,a);}
function qp(){}
_=qp.prototype=new lv();_.vb=Dp;_.rc=Ep;_.tN=aL+'ComplexPanel';_.tI=51;function Co(a){sp(a);rA(a,gj());Ak(a.gb(),'position','relative');Ak(a.gb(),'overflow','hidden');return a;}
function Do(a,b){tp(a,b,a.gb());}
function Eo(b,d,a,c){qA(d);bp(b,d,a,c);Do(b,d);}
function ap(b,c){var a;a=Cp(b,c);if(a){cp(c.gb());}return a;}
function bp(c,e,b,d){var a;a=e.gb();if(b==(-1)&&d==(-1)){cp(a);}else{Ak(a,'position','absolute');Ak(a,'left',b+'px');Ak(a,'top',d+'px');}}
function cp(a){Ak(a,'left','');Ak(a,'top','');Ak(a,'position','');}
function dp(a){return ap(this,a);}
function Bo(){}
_=Bo.prototype=new qp();_.rc=dp;_.tN=aL+'AbsolutePanel';_.tI=52;function fp(a){sp(a);a.e=lj();a.d=ij();dj(a.e,a.d);rA(a,a.e);return a;}
function hp(c,d,a){var b;b=ik(d.gb());wk(b,'height',a);}
function ip(c,b,a){wk(b,'align',a.a);}
function jp(c,b,a){Ak(b,'verticalAlign',a.a);}
function kp(b,c,d){var a;a=ik(c.gb());wk(a,'width',d);}
function ep(){}
_=ep.prototype=new qp();_.tN=aL+'CellPanel';_.tI=53;_.d=null;_.e=null;function bF(d,a,b){var c;while(a.tb()){c=a.yb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function dF(a){throw EE(new DE(),'add');}
function eF(b){var a;a=bF(this,this.vb(),b);return a!==null;}
function fF(){var a,b,c;c=tD(new sD());a=null;uD(c,'[');b=this.vb();while(b.tb()){if(a!==null){uD(c,a);}else{a=', ';}uD(c,pE(b.yb()));}uD(c,']');return yD(c);}
function aF(){}
_=aF.prototype=new iD();_.s=dF;_.z=eF;_.tS=fF;_.tN=eL+'AbstractCollection';_.tI=54;function qF(b,a){throw iC(new gC(),'Index: '+a+', Size: '+b.b);}
function rF(a){return iF(new hF(),a);}
function sF(b,a){throw EE(new DE(),'add');}
function tF(a){this.r(this.yc(),a);return true;}
function uF(e){var a,b,c,d,f;if(e===this){return true;}if(!rh(e,29)){return false;}f=qh(e,29);if(this.yc()!=f.yc()){return false;}c=rF(this);d=f.vb();while(kF(c)){a=lF(c);b=lF(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function vF(){var a,b,c,d;c=1;a=31;b=rF(this);while(kF(b)){d=lF(b);c=31*c+(d===null?0:d.hC());}return c;}
function wF(){return rF(this);}
function xF(a){throw EE(new DE(),'remove');}
function gF(){}
_=gF.prototype=new aF();_.r=sF;_.s=tF;_.eQ=uF;_.hC=vF;_.vb=wF;_.qc=xF;_.tN=eL+'AbstractList';_.tI=55;function fH(a){{jH(a);}}
function gH(a){fH(a);return a;}
function iH(b,a){CH(b.a,b.b++,a);return true;}
function hH(d,a){var b,c;c=a.vb();b=c.tb();while(c.tb()){CH(d.a,d.b++,c.yb());}return b;}
function jH(a){a.a=zg();a.b=0;}
function lH(b,a){if(a<0||a>=b.b){qF(b,a);}return yH(b.a,a);}
function mH(b,a){return nH(b,a,0);}
function nH(c,b,a){if(a<0){qF(c,a);}for(;a<c.b;++a){if(xH(b,yH(c.a,a))){return a;}}return (-1);}
function oH(a){return a.b==0;}
function pH(c,a){var b;b=lH(c,a);AH(c.a,a,1);--c.b;return b;}
function qH(c,b){var a;a=mH(c,b);if(a==(-1)){return false;}pH(c,a);return true;}
function rH(d,a,b){var c;c=lH(d,a);CH(d.a,a,b);return c;}
function sH(c,a){var b;if(a.a<c.b){a=fh(a,c.b);}for(b=0;b<c.b;++b){mh(a,b,yH(c.a,b));}if(a.a>c.b){mh(a,c.b,null);}return a;}
function uH(a,b){if(a<0||a>this.b){qF(this,a);}tH(this.a,a,b);++this.b;}
function vH(a){return iH(this,a);}
function tH(a,b,c){a.splice(b,0,c);}
function wH(a){return mH(this,a)!=(-1);}
function xH(a,b){return a===b||a!==null&&a.eQ(b);}
function zH(a){return lH(this,a);}
function yH(a,b){return a[b];}
function BH(a){return pH(this,a);}
function AH(a,c,b){a.splice(c,b);}
function CH(a,b,c){a[b]=c;}
function DH(){return this.b;}
function eH(){}
_=eH.prototype=new gF();_.r=uH;_.s=vH;_.z=wH;_.rb=zH;_.qc=BH;_.yc=DH;_.tN=eL+'ArrayList';_.tI=56;_.a=null;_.b=0;function mp(a){gH(a);return a;}
function op(d,c){var a,b;for(a=rF(d);kF(a);){b=qh(lF(a),20);b.Db(c);}}
function lp(){}
_=lp.prototype=new eH();_.tN=aL+'ClickListenerCollection';_.tI=57;function bq(a,b){if(a.d!==null){throw eC(new cC(),'Composite.initWidget() may only be called once.');}qA(b);rA(a,b.gb());a.d=b;sA(b,a);}
function cq(){if(this.d===null){throw eC(new cC(),'initWidget() was never called in '+jg(this));}return this.q;}
function dq(){if(this.d!==null){return this.d.ub();}return false;}
function eq(){this.d.Ab();this.dc();}
function fq(){try{this.mc();}finally{this.d.Eb();}}
function Fp(){}
_=Fp.prototype=new Ez();_.gb=cq;_.ub=dq;_.Ab=eq;_.Eb=fq;_.tN=aL+'Composite';_.tI=58;_.d=null;function hq(a){sp(a);rA(a,gj());return a;}
function jq(b,c){var a;a=c.gb();Ak(a,'width','100%');Ak(a,'height','100%');c.vc(false);}
function kq(b,c,a){Ap(b,c,b.gb(),a,true);jq(b,c);}
function lq(b,c){var a;a=Cp(b,c);if(a){mq(b,c);if(b.b===c){b.b=null;}}return a;}
function mq(a,b){Ak(b.gb(),'width','');Ak(b.gb(),'height','');b.vc(true);}
function nq(b,a){vp(b,a);if(b.b!==null){b.b.vc(false);}b.b=zp(b,a);b.b.vc(true);}
function oq(a){return lq(this,a);}
function gq(){}
_=gq.prototype=new qp();_.rc=oq;_.tN=aL+'DeckPanel';_.tI=59;_.b=null;function cx(a){dx(a,gj());return a;}
function dx(b,a){rA(b,a);return b;}
function ex(a,b){if(a.n!==null){throw eC(new cC(),'SimplePanel can only contain one child widget');}a.wc(b);}
function gx(a,b){if(b===a.n){return;}if(b!==null){qA(b);}if(a.n!==null){a.rc(a.n);}a.n=b;if(b!==null){dj(a.db(),a.n.gb());mv(a,b);}}
function hx(){return this.gb();}
function ix(){return Ew(new Cw(),this);}
function jx(a){if(this.n!==a){return false;}ov(this,a);pk(this.db(),a.gb());this.n=null;return true;}
function kx(a){gx(this,a);}
function Bw(){}
_=Bw.prototype=new lv();_.db=hx;_.vb=ix;_.rc=jx;_.wc=kx;_.tN=aL+'SimplePanel';_.tI=60;_.n=null;function zv(){zv=xK;iw=new BA();}
function uv(a){zv();dx(a,DA(iw));Fv(a,0,0);return a;}
function vv(b,a){zv();uv(b);b.g=a;return b;}
function wv(c,a,b){zv();vv(c,a);c.k=b;return c;}
function xv(b,a){if(a.blur){a.blur();}}
function yv(c){var a,b,d;a=c.l;if(!a){aw(c,false);dw(c);}b=uh((um()-Bv(c))/2);d=uh((tm()-Av(c))/2);Fv(c,vm()+b,wm()+d);if(!a){aw(c,true);}}
function Av(a){return cz(a);}
function Bv(a){return dz(a);}
function Cv(b,a){if(!b.l){return;}b.l=false;ap(xw(),b);b.gb();}
function Dv(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.tc(a.h);}if(a.i!==null){b.xc(a.i);}}}
function Ev(e,b){var a,c,d,f;d=Aj(b);c=mk(e.gb(),d);f=Cj(b);switch(f){case 128:{a=(sh(xj(b)),xu(b),true);return a&&(c|| !e.k);}case 512:{a=(sh(xj(b)),xu(b),true);return a&&(c|| !e.k);}case 256:{a=(sh(xj(b)),xu(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((bj(),rk)!==null){return true;}if(!c&&e.g&&f==4){Cv(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){xv(e,d);return false;}}}return !e.k||c;}
function Fv(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.gb();Ak(a,'left',b+'px');Ak(a,'top',d+'px');}
function aw(a,b){Ak(a.gb(),'visibility',b?'visible':'hidden');a.gb();}
function bw(a,b){gx(a,b);Dv(a);}
function cw(a,b){a.i=b;Dv(a);if(cE(b)==0){a.i=null;}}
function dw(a){if(a.l){return;}a.l=true;cj(a);Ak(a.gb(),'position','absolute');if(a.m!=(-1)){Fv(a,a.j,a.m);}Do(xw(),a);a.gb();}
function ew(){return this.gb();}
function fw(){return Av(this);}
function gw(){return Bv(this);}
function hw(){return this.gb();}
function jw(){qk(this);pA(this);}
function kw(a){return Ev(this,a);}
function lw(a){this.h=a;Dv(this);if(cE(a)==0){this.h=null;}}
function mw(a){aw(this,a);}
function nw(a){bw(this,a);}
function ow(a){cw(this,a);}
function tv(){}
_=tv.prototype=new Bw();_.db=ew;_.lb=fw;_.mb=gw;_.nb=hw;_.Eb=jw;_.bc=kw;_.tc=lw;_.vc=mw;_.wc=nw;_.xc=ow;_.tN=aL+'PopupPanel';_.tI=61;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var iw;function tq(){tq=xK;zv();}
function qq(a){a.a=kt(new pr());a.f=cr(new Eq());}
function rq(b,a){tq();sq(b,a,true);return b;}
function sq(c,a,b){tq();wv(c,a,b);qq(c);gt(c.f,0,0,c.a);c.f.tc('100%');bt(c.f,0);dt(c.f,0);et(c.f,0);Fr(c.f.b,1,0,'100%');cs(c.f.b,1,0,'100%');Er(c.f.b,1,0,(ut(),vt),(Bt(),Dt));bw(c,c.f);iz(c,'gwt-DialogBox');iz(c.a,'Caption');Cu(c.a,c);return c;}
function uq(b,a){ot(b.a,a);}
function vq(a){if(Cj(a)==4){if(mk(this.a.gb(),Aj(a))){Dj(a);}}return Ev(this,a);}
function wq(a,b,c){this.e=true;tk(this.a.gb());this.c=b;this.d=c;}
function xq(a){}
function yq(a){}
function zq(c,d,e){var a,b;if(this.e){a=d+az(this);b=e+bz(this);Fv(this,a-this.c,b-this.d);}}
function Aq(a,b,c){this.e=false;ok(this.a.gb());}
function Bq(a){if(this.b!==a){return false;}at(this.f,a);return true;}
function Cq(a){if(this.b!==null){at(this.f,this.b);}if(a!==null){gt(this.f,1,0,a);}this.b=a;}
function Dq(a){cw(this,a);this.f.xc('100%');}
function pq(){}
_=pq.prototype=new tv();_.bc=vq;_.ec=wq;_.fc=xq;_.gc=yq;_.hc=zq;_.ic=Aq;_.rc=Bq;_.wc=Cq;_.xc=Dq;_.tN=aL+'DialogBox';_.tI=62;_.b=null;_.c=0;_.d=0;_.e=false;function ws(a){a.e=ms(new hs());}
function xs(a){ws(a);a.d=lj();a.a=ij();dj(a.d,a.a);rA(a,a.d);jz(a,1);return a;}
function ys(c,a){var b;b=fr(c);if(a>=b||a<0){throw iC(new gC(),'Row index: '+a+', Row size: '+b);}}
function zs(e,c,b,a){var d;d=Dr(e.b,c,b);Fs(e,d,a);return d;}
function Bs(c,b,a){return b.rows[a].cells.length;}
function Cs(a){return Ds(a,a.a);}
function Ds(b,a){return a.rows.length;}
function Es(b,a){var c;if(a!=fr(b)){ys(b,a);}c=kj();lk(b.a,c,a);return a;}
function Fs(d,c,a){var b,e;b=gk(c);e=null;if(b!==null){e=os(d.e,b);}if(e!==null){at(d,e);return true;}else{if(a){yk(c,'');}return false;}}
function at(b,c){var a;if(c.p!==b){return false;}ov(b,c);a=c.gb();pk(ik(a),a);rs(b.e,a);return true;}
function bt(a,b){wk(a.d,'border',''+b);}
function ct(b,a){b.b=a;}
function dt(b,a){vk(b.d,'cellPadding',a);}
function et(b,a){vk(b.d,'cellSpacing',a);}
function ft(b,a){b.c=a;gs(b.c);}
function gt(d,b,a,e){var c;hr(d,b,a);if(e!==null){qA(e);c=zs(d,b,a,true);ps(d.e,e);dj(c,e.gb());mv(d,e);}}
function ht(){return ss(this.e);}
function it(a){switch(Cj(a)){case 1:{break;}default:}}
function jt(a){return at(this,a);}
function qr(){}
_=qr.prototype=new lv();_.vb=ht;_.Cb=it;_.rc=jt;_.tN=aL+'HTMLTable';_.tI=63;_.a=null;_.b=null;_.c=null;_.d=null;function cr(a){xs(a);ct(a,ar(new Fq(),a));ft(a,es(new ds(),a));return a;}
function er(b,a){ys(b,a);return Bs(b,b.a,a);}
function fr(a){return Cs(a);}
function gr(b,a){return Es(b,a);}
function hr(e,d,b){var a,c;ir(e,d);if(b<0){throw iC(new gC(),'Cannot create a column with a negative index: '+b);}a=er(e,d);c=b+1-a;if(c>0){jr(e.a,d,c);}}
function ir(d,b){var a,c;if(b<0){throw iC(new gC(),'Cannot create a row with a negative index: '+b);}c=fr(d);for(a=c;a<=b;a++){gr(d,a);}}
function jr(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function Eq(){}
_=Eq.prototype=new qr();_.tN=aL+'FlexTable';_.tI=64;function Ar(b,a){b.a=a;return b;}
function Cr(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function Dr(c,b,a){return Cr(c,c.a.a,b,a);}
function Er(d,c,a,b,e){as(d,c,a,b);bs(d,c,a,e);}
function Fr(e,d,a,c){var b;hr(e.a,d,a);b=Cr(e,e.a.a,d,a);wk(b,'height',c);}
function as(e,d,b,a){var c;hr(e.a,d,b);c=Cr(e,e.a.a,d,b);wk(c,'align',a.a);}
function bs(d,c,b,a){hr(d.a,c,b);Ak(Cr(d,d.a.a,c,b),'verticalAlign',a.a);}
function cs(c,b,a,d){hr(c.a,b,a);wk(Cr(c,c.a.a,b,a),'width',d);}
function zr(){}
_=zr.prototype=new iD();_.tN=aL+'HTMLTable$CellFormatter';_.tI=65;function ar(b,a){Ar(b,a);return b;}
function Fq(){}
_=Fq.prototype=new zr();_.tN=aL+'FlexTable$FlexCellFormatter';_.tI=66;function lr(a){sp(a);rA(a,gj());return a;}
function mr(a,b){tp(a,b,a.gb());}
function or(b,c,a){Ap(b,c,b.gb(),a,true);}
function kr(){}
_=kr.prototype=new qp();_.tN=aL+'FlowPanel';_.tI=67;function zu(a){rA(a,gj());jz(a,131197);iz(a,'gwt-Label');return a;}
function Au(b,a){zu(b);Eu(b,a);return b;}
function Bu(b,a){if(b.a===null){b.a=mp(new lp());}iH(b.a,a);}
function Cu(b,a){if(b.b===null){b.b=cv(new bv());}iH(b.b,a);}
function Eu(b,a){zk(b.gb(),a);}
function Fu(a,b){Ak(a.gb(),'whiteSpace',b?'normal':'nowrap');}
function av(a){switch(Cj(a)){case 1:if(this.a!==null){op(this.a,this);}break;case 4:case 8:case 64:case 16:case 32:if(this.b!==null){gv(this.b,this,a);}break;case 131072:break;}}
function yu(){}
_=yu.prototype=new Ez();_.Cb=av;_.tN=aL+'Label';_.tI=68;_.a=null;_.b=null;function kt(a){zu(a);rA(a,gj());jz(a,125);iz(a,'gwt-HTML');return a;}
function lt(b,a){kt(b);ot(b,a);return b;}
function mt(b,a,c){lt(b,a);Fu(b,c);return b;}
function ot(b,a){yk(b.gb(),a);}
function pr(){}
_=pr.prototype=new yu();_.tN=aL+'HTML';_.tI=69;function sr(a){{vr(a);}}
function tr(b,a){b.b=a;sr(b);return b;}
function vr(a){while(++a.a<a.b.b.b){if(lH(a.b.b,a.a)!==null){return;}}}
function wr(a){return a.a<a.b.b.b;}
function xr(){return wr(this);}
function yr(){var a;if(!wr(this)){throw tK(new sK());}a=lH(this.b.b,this.a);vr(this);return a;}
function rr(){}
_=rr.prototype=new iD();_.tb=xr;_.yb=yr;_.tN=aL+'HTMLTable$1';_.tI=70;_.a=(-1);function es(b,a){b.b=a;return b;}
function gs(a){if(a.a===null){a.a=hj('colgroup');lk(a.b.d,a.a,0);dj(a.a,hj('col'));}}
function ds(){}
_=ds.prototype=new iD();_.tN=aL+'HTMLTable$ColumnFormatter';_.tI=71;_.a=null;function ls(a){a.b=gH(new eH());}
function ms(a){ls(a);return a;}
function os(c,a){var b;b=us(a);if(b<0){return null;}return qh(lH(c.b,b),12);}
function ps(b,c){var a;if(b.a===null){a=b.b.b;iH(b.b,c);}else{a=b.a.a;rH(b.b,a,c);b.a=b.a.b;}vs(c.gb(),a);}
function qs(c,a,b){ts(a);rH(c.b,b,null);c.a=js(new is(),b,c.a);}
function rs(c,a){var b;b=us(a);qs(c,a,b);}
function ss(a){return tr(new rr(),a);}
function ts(a){a['__widgetID']=null;}
function us(a){var b=a['__widgetID'];return b==null?-1:b;}
function vs(a,b){a['__widgetID']=b;}
function hs(){}
_=hs.prototype=new iD();_.tN=aL+'HTMLTable$WidgetMapper';_.tI=72;_.a=null;function js(c,a,b){c.a=a;c.b=b;return c;}
function is(){}
_=is.prototype=new iD();_.tN=aL+'HTMLTable$WidgetMapper$FreeNode';_.tI=73;_.a=0;_.b=null;function ut(){ut=xK;vt=st(new rt(),'center');wt=st(new rt(),'left');st(new rt(),'right');}
var vt,wt;function st(b,a){b.a=a;return b;}
function rt(){}
_=rt.prototype=new iD();_.tN=aL+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=74;_.a=null;function Bt(){Bt=xK;Ct=zt(new yt(),'bottom');Dt=zt(new yt(),'middle');Et=zt(new yt(),'top');}
var Ct,Dt,Et;function zt(a,b){a.a=b;return a;}
function yt(){}
_=yt.prototype=new iD();_.tN=aL+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=75;_.a=null;function cu(a){a.a=(ut(),wt);a.c=(Bt(),Et);}
function du(a){fp(a);cu(a);a.b=kj();dj(a.d,a.b);wk(a.e,'cellSpacing','0');wk(a.e,'cellPadding','0');return a;}
function eu(b,c){var a;a=gu(b);dj(b.b,a);tp(b,c,a);}
function gu(b){var a;a=jj();ip(b,a,b.a);jp(b,a,b.c);return a;}
function hu(c,d,a){var b;wp(c,a);b=gu(c);lk(c.b,b,a);Ap(c,d,b,a,false);}
function iu(c,d){var a,b;b=ik(d.gb());a=Cp(c,d);if(a){pk(c.b,b);}return a;}
function ju(b,a){b.c=a;}
function ku(a){return iu(this,a);}
function bu(){}
_=bu.prototype=new ep();_.rc=ku;_.tN=aL+'HorizontalPanel';_.tI=76;_.b=null;function mu(a){rA(a,gj());dj(a.gb(),a.a=fj());jz(a,1);iz(a,'gwt-Hyperlink');return a;}
function nu(c,b,a){mu(c);su(c,b);ru(c,a);return c;}
function ou(b,a){if(b.b===null){b.b=mp(new lp());}iH(b.b,a);}
function qu(a){return hk(a.a);}
function ru(b,a){b.c=a;wk(b.a,'href','#'+a);}
function su(b,a){zk(b.a,a);}
function tu(a){if(Cj(a)==1){if(this.b!==null){op(this.b,this);}vl(this.c);Dj(a);}}
function lu(){}
_=lu.prototype=new Ez();_.Cb=tu;_.tN=aL+'Hyperlink';_.tI=77;_.a=null;_.b=null;_.c=null;function xu(a){return (zj(a)?1:0)|(yj(a)?8:0)|(vj(a)?2:0)|(rj(a)?4:0);}
function cv(a){gH(a);return a;}
function ev(d,c,e,f){var a,b;for(a=rF(d);kF(a);){b=qh(lF(a),21);b.ec(c,e,f);}}
function fv(d,c){var a,b;for(a=rF(d);kF(a);){b=qh(lF(a),21);b.fc(c);}}
function gv(e,c,a){var b,d,f,g,h;d=c.gb();g=tj(a)-Fj(d)+dk(d,'scrollLeft')+vm();h=uj(a)-ak(d)+dk(d,'scrollTop')+wm();switch(Cj(a)){case 4:ev(e,c,g,h);break;case 8:jv(e,c,g,h);break;case 64:iv(e,c,g,h);break;case 16:b=wj(a);if(!mk(d,b)){fv(e,c);}break;case 32:f=Bj(a);if(!mk(d,f)){hv(e,c);}break;}}
function hv(d,c){var a,b;for(a=rF(d);kF(a);){b=qh(lF(a),21);b.gc(c);}}
function iv(d,c,e,f){var a,b;for(a=rF(d);kF(a);){b=qh(lF(a),21);b.hc(c,e,f);}}
function jv(d,c,e,f){var a,b;for(a=rF(d);kF(a);){b=qh(lF(a),21);b.ic(c,e,f);}}
function bv(){}
_=bv.prototype=new eH();_.tN=aL+'MouseListenerCollection';_.tI=78;function vw(){vw=xK;Aw=lJ(new pI());}
function uw(b,a){vw();Co(b);if(a===null){a=ww();}rA(b,a);b.Ab();return b;}
function xw(){vw();return yw(null);}
function yw(c){vw();var a,b;b=qh(rJ(Aw,c),22);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=ck(c))){return null;}}if(Aw.c==0){zw();}sJ(Aw,c,b=uw(new pw(),a));return b;}
function ww(){vw();return $doc.body;}
function zw(){vw();lm(new qw());}
function pw(){}
_=pw.prototype=new Bo();_.tN=aL+'RootPanel';_.tI=79;var Aw;function sw(){var a,b;for(b=kG(yG((vw(),Aw)));rG(b);){a=qh(sG(b),22);if(a.ub()){a.Eb();}}}
function tw(){return null;}
function qw(){}
_=qw.prototype=new iD();_.nc=sw;_.oc=tw;_.tN=aL+'RootPanel$1';_.tI=80;function Dw(a){a.a=a.b.n!==null;}
function Ew(b,a){b.b=a;Dw(b);return b;}
function ax(){return this.a;}
function bx(){if(!this.a||this.b.n===null){throw tK(new sK());}this.a=false;return this.b.n;}
function Cw(){}
_=Cw.prototype=new iD();_.tb=ax;_.yb=bx;_.tN=aL+'SimplePanel$1';_.tI=81;function sx(a){a.a=du(new bu());}
function tx(c){var a,b;sx(c);bq(c,c.a);jz(c,1);iz(c,'gwt-TabBar');ju(c.a,(Bt(),Ct));a=mt(new pr(),'&nbsp;',true);b=mt(new pr(),'&nbsp;',true);iz(a,'gwt-TabBarFirst');iz(b,'gwt-TabBarRest');a.tc('100%');b.tc('100%');eu(c.a,a);eu(c.a,b);a.tc('100%');hp(c.a,a,'100%');kp(c.a,b,'100%');return c;}
function ux(b,a){if(b.c===null){b.c=Fx(new Ex());}iH(b.c,a);}
function vx(b,a){if(a<0||a>yx(b)){throw hC(new gC());}}
function wx(b,a){if(a<(-1)||a>=yx(b)){throw hC(new gC());}}
function yx(a){return a.a.f.b-2;}
function zx(e,d,a,b){var c;vx(e,b);if(a){c=lt(new pr(),d);}else{c=Au(new yu(),d);}Fu(c,false);Bu(c,e);iz(c,'gwt-TabBarItem');hu(e.a,c,b+1);}
function Ax(b,a){var c;wx(b,a);c=zp(b.a,a+1);if(c===b.b){b.b=null;}iu(b.a,c);}
function Bx(b,a){wx(b,a);if(b.c!==null){if(!by(b.c,b,a)){return false;}}Cx(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=zp(b.a,a+1);Cx(b,b.b,true);if(b.c!==null){cy(b.c,b,a);}return true;}
function Cx(c,a,b){if(a!==null){if(b){Ey(a,'gwt-TabBarItem-selected');}else{ez(a,'gwt-TabBarItem-selected');}}}
function Dx(b){var a;for(a=1;a<this.a.f.b-1;++a){if(zp(this.a,a)===b){Bx(this,a-1);return;}}}
function rx(){}
_=rx.prototype=new Fp();_.Db=Dx;_.tN=aL+'TabBar';_.tI=82;_.b=null;_.c=null;function Fx(a){gH(a);return a;}
function by(e,c,d){var a,b;for(a=rF(e);kF(a);){b=qh(lF(a),23);if(!b.Bb(c,d)){return false;}}return true;}
function cy(e,c,d){var a,b;for(a=rF(e);kF(a);){b=qh(lF(a),23);b.lc(c,d);}}
function Ex(){}
_=Ex.prototype=new eH();_.tN=aL+'TabListenerCollection';_.tI=83;function qy(a){a.b=my(new ly());a.a=gy(new fy(),a.b);}
function ry(b){var a;qy(b);a=yz(new wz());zz(a,b.b);zz(a,b.a);hp(a,b.a,'100%');b.b.xc('100%');ux(b.b,b);bq(b,a);iz(b,'gwt-TabPanel');iz(b.a,'gwt-TabPanelBottom');return b;}
function ty(b,c,a){wy(b,c,a,b.a.f.b);}
function sy(b,a){if(b.c===null){b.c=Fx(new Ex());}iH(b.c,a);}
function vy(b,a){return zp(b.a,a);}
function xy(d,e,c,a,b){iy(d.a,e,c,a,b);}
function wy(c,d,b,a){xy(c,d,b,false,a);}
function yy(b,a){Bx(b.b,a);}
function zy(){return Bp(this.a);}
function Ay(a,b){if(this.c!==null){return by(this.c,this,b);}return true;}
function By(a,b){nq(this.a,b);if(this.c!==null){cy(this.c,this,b);}}
function Cy(a){return jy(this.a,a);}
function ey(){}
_=ey.prototype=new Fp();_.vb=zy;_.Bb=Ay;_.lc=By;_.rc=Cy;_.tN=aL+'TabPanel';_.tI=84;_.c=null;function gy(b,a){hq(b);b.a=a;return b;}
function iy(e,f,d,a,b){var c;c=yp(e,f);if(c!=(-1)){jy(e,f);if(c<b){b--;}}oy(e.a,d,a,b);kq(e,f,b);}
function jy(b,c){var a;a=yp(b,c);if(a!=(-1)){py(b.a,a);return lq(b,c);}return false;}
function ky(a){return jy(this,a);}
function fy(){}
_=fy.prototype=new gq();_.rc=ky;_.tN=aL+'TabPanel$TabbedDeckPanel';_.tI=85;_.a=null;function my(a){tx(a);return a;}
function oy(d,c,a,b){zx(d,c,a,b);}
function py(b,a){Ax(b,a);}
function ly(){}
_=ly.prototype=new rx();_.tN=aL+'TabPanel$UnmodifiableTabBar';_.tI=86;function xz(a){a.a=(ut(),wt);a.b=(Bt(),Et);}
function yz(a){fp(a);xz(a);wk(a.e,'cellSpacing','0');wk(a.e,'cellPadding','0');return a;}
function zz(b,d){var a,c;c=kj();a=Bz(b);dj(c,a);dj(b.d,c);tp(b,d,a);}
function Bz(b){var a;a=jj();ip(b,a,b.a);jp(b,a,b.b);return a;}
function Cz(c,e,a){var b,d;wp(c,a);d=kj();b=Bz(c);dj(d,b);lk(c.d,d,a);Ap(c,e,b,a,false);}
function Dz(c){var a,b;b=ik(c.gb());a=Cp(this,c);if(a){pk(this.d,ik(b));}return a;}
function wz(){}
_=wz.prototype=new ep();_.rc=Dz;_.tN=aL+'VerticalPanel';_.tI=87;function fA(b,a){b.a=kh('[Lcom.google.gwt.user.client.ui.Widget;',[154],[12],[4],null);return b;}
function gA(a,b){kA(a,b,a.b);}
function iA(b,a){if(a<0||a>=b.b){throw hC(new gC());}return b.a[a];}
function jA(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function kA(d,e,a){var b,c;if(a<0||a>d.b){throw hC(new gC());}if(d.b==d.a.a){c=kh('[Lcom.google.gwt.user.client.ui.Widget;',[154],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){mh(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){mh(d.a,b,d.a[b-1]);}mh(d.a,a,e);}
function lA(a){return bA(new aA(),a);}
function mA(c,b){var a;if(b<0||b>=c.b){throw hC(new gC());}--c.b;for(a=b;a<c.b;++a){mh(c.a,a,c.a[a+1]);}mh(c.a,c.b,null);}
function nA(b,c){var a;a=jA(b,c);if(a==(-1)){throw tK(new sK());}mA(b,a);}
function Fz(){}
_=Fz.prototype=new iD();_.tN=aL+'WidgetCollection';_.tI=88;_.a=null;_.b=0;function bA(b,a){b.b=a;return b;}
function dA(){return this.a<this.b.b-1;}
function eA(){if(this.a>=this.b.b){throw tK(new sK());}return this.b.a[++this.a];}
function aA(){}
_=aA.prototype=new iD();_.tb=dA;_.yb=eA;_.tN=aL+'WidgetCollection$WidgetIterator';_.tI=89;_.a=(-1);function DA(a){return gj();}
function BA(){}
_=BA.prototype=new iD();_.tN=bL+'PopupImpl';_.tI=90;function bB(){}
_=bB.prototype=new iD();_.tN=cL+'OutputStream';_.tI=91;function FA(){}
_=FA.prototype=new bB();_.tN=cL+'FilterOutputStream';_.tI=92;function dB(){}
_=dB.prototype=new FA();_.tN=cL+'PrintStream';_.tI=93;function hB(){hB=xK;qD();}
function gB(a){hB();oD(a);return a;}
function fB(){}
_=fB.prototype=new nD();_.tN=dL+'ArrayStoreException';_.tI=94;function kB(){kB=xK;lB=jB(new iB(),false);mB=jB(new iB(),true);}
function jB(a,b){kB();a.a=b;return a;}
function nB(a){return rh(a,28)&&qh(a,28).a==this.a;}
function oB(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function pB(){return this.a?'true':'false';}
function qB(a){kB();return a?mB:lB;}
function iB(){}
_=iB.prototype=new iD();_.eQ=nB;_.hC=oB;_.tS=pB;_.tN=dL+'Boolean';_.tI=95;_.a=false;var lB,mB;function uB(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+wC(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function yB(){yB=xK;qD();}
function wB(a){yB();oD(a);return a;}
function xB(b,a){yB();pD(b,a);return b;}
function vB(){}
_=vB.prototype=new nD();_.tN=dL+'ClassCastException';_.tI=96;function bC(){bC=xK;qD();}
function aC(b,a){bC();pD(b,a);return b;}
function FB(){}
_=FB.prototype=new nD();_.tN=dL+'IllegalArgumentException';_.tI=97;function fC(){fC=xK;qD();}
function dC(a){fC();oD(a);return a;}
function eC(b,a){fC();pD(b,a);return b;}
function cC(){}
_=cC.prototype=new nD();_.tN=dL+'IllegalStateException';_.tI=98;function jC(){jC=xK;qD();}
function hC(a){jC();oD(a);return a;}
function iC(b,a){jC();pD(b,a);return b;}
function gC(){}
_=gC.prototype=new nD();_.tN=dL+'IndexOutOfBoundsException';_.tI=99;function cD(){cD=xK;{hD();}}
function dD(a){cD();return isNaN(a);}
function eD(e,d,c,h){cD();var a,b,f,g;if(e===null){throw aD(new FC(),'Unable to parse null');}b=cE(e);f=b>0&&BD(e,0)==45?1:0;for(a=f;a<b;a++){if(uB(BD(e,a),d)==(-1)){throw aD(new FC(),'Could not parse '+e+' in radix '+d);}}g=fD(e,d);if(dD(g)){throw aD(new FC(),'Unable to parse '+e);}else if(g<c||g>h){throw aD(new FC(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function fD(b,a){cD();return parseInt(b,a);}
function hD(){cD();gD=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var gD=null;function lC(){lC=xK;cD();}
function oC(a){lC();return pC(a,10);}
function pC(b,a){lC();return th(eD(b,a,(-2147483648),2147483647));}
function qC(a){lC();return oE(a);}
var mC=2147483647,nC=(-2147483648);function tC(a){return a<0?-a:a;}
function uC(a){return a<0?-a:a;}
function vC(a,b){return a>b?a:b;}
function wC(a,b){return a<b?a:b;}
function xC(a){return Math.sqrt(a);}
function AC(){AC=xK;qD();}
function zC(a){AC();oD(a);return a;}
function yC(){}
_=yC.prototype=new nD();_.tN=dL+'NegativeArraySizeException';_.tI=100;function DC(){DC=xK;qD();}
function CC(b,a){DC();pD(b,a);return b;}
function BC(){}
_=BC.prototype=new nD();_.tN=dL+'NullPointerException';_.tI=101;function bD(){bD=xK;bC();}
function aD(b,a){bD();aC(b,a);return b;}
function FC(){}
_=FC.prototype=new FB();_.tN=dL+'NumberFormatException';_.tI=102;function BD(b,a){return b.charCodeAt(a);}
function DD(f,c){var a,b,d,e,g,h;h=cE(f);e=cE(c);b=wC(h,e);for(a=0;a<b;a++){g=BD(f,a);d=BD(c,a);if(g!=d){return g-d;}}return h-e;}
function ED(b,a){if(!rh(a,1))return false;return hE(b,a);}
function FD(b,a){return b.indexOf(a);}
function aE(c,b,a){return c.indexOf(b,a);}
function bE(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function cE(a){return a.length;}
function dE(c,a,b){b=iE(b);return c.replace(RegExp(a,'g'),b);}
function eE(b,a){return b.substr(a,b.length-a);}
function fE(c,a,b){return c.substr(a,b-a);}
function gE(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function hE(a,b){return String(a)==b;}
function iE(b){var a;a=0;while(0<=(a=aE(b,'\\',a))){if(BD(b,a+1)==36){b=fE(b,0,a)+'$'+eE(b,++a);}else{b=fE(b,0,a)+eE(b,++a);}}return b;}
function jE(a){if(rh(a,1)){return DD(this,qh(a,1));}else{throw xB(new vB(),'Cannot compare '+a+" with String '"+this+"'");}}
function kE(a){return ED(this,a);}
function mE(){var a=lE;if(!a){a=lE={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function nE(){return this;}
function oE(a){return ''+a;}
function pE(a){return a!==null?a.tS():'null';}
_=String.prototype;_.u=jE;_.eQ=kE;_.hC=mE;_.tS=nE;_.tN=dL+'String';_.tI=2;var lE=null;function tD(a){vD(a);return a;}
function uD(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function vD(a){wD(a,'');}
function wD(b,a){b.js=[a];b.length=a.length;}
function yD(a){a.zb();return a.js[0];}
function zD(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function AD(){return yD(this);}
function sD(){}
_=sD.prototype=new iD();_.zb=zD;_.tS=AD;_.tN=dL+'StringBuffer';_.tI=103;function rE(){rE=xK;tE=new dB();}
function sE(){rE();return new Date().getTime();}
function uE(a){rE();return pg(a);}
var tE;function FE(){FE=xK;qD();}
function EE(b,a){FE();pD(b,a);return b;}
function DE(){}
_=DE.prototype=new nD();_.tN=dL+'UnsupportedOperationException';_.tI=104;function iF(b,a){b.c=a;return b;}
function kF(a){return a.a<a.c.yc();}
function lF(a){if(!kF(a)){throw tK(new sK());}return a.c.rb(a.b=a.a++);}
function mF(a){if(a.b<0){throw dC(new cC());}a.c.qc(a.b);a.a=a.b;a.b=(-1);}
function nF(){return kF(this);}
function oF(){return lF(this);}
function hF(){}
_=hF.prototype=new iD();_.tb=nF;_.yb=oF;_.tN=eL+'AbstractList$IteratorImpl';_.tI=105;_.a=0;_.b=(-1);function wG(f,d,e){var a,b,c;for(b=gJ(f.E());EI(b);){a=FI(b);c=a.jb();if(d===null?c===null:d.eQ(c)){if(e){aJ(b);}return a;}}return null;}
function xG(b){var a;a=b.E();return AF(new zF(),b,a);}
function yG(b){var a;a=qJ(b);return iG(new hG(),b,a);}
function zG(a){return wG(this,a,false)!==null;}
function AG(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!rh(d,30)){return false;}f=qh(d,30);c=xG(this);e=f.wb();if(!bH(c,e)){return false;}for(a=CF(c);dG(a);){b=eG(a);h=this.sb(b);g=f.sb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function BG(b){var a;a=wG(this,b,false);return a===null?null:a.pb();}
function CG(){var a,b,c;b=0;for(c=gJ(this.E());EI(c);){a=FI(c);b+=a.hC();}return b;}
function DG(){return xG(this);}
function EG(){var a,b,c,d;d='{';a=false;for(c=gJ(this.E());EI(c);){b=FI(c);if(a){d+=', ';}else{a=true;}d+=pE(b.jb());d+='=';d+=pE(b.pb());}return d+'}';}
function yF(){}
_=yF.prototype=new iD();_.y=zG;_.eQ=AG;_.sb=BG;_.hC=CG;_.wb=DG;_.tS=EG;_.tN=eL+'AbstractMap';_.tI=106;function bH(e,b){var a,c,d;if(b===e){return true;}if(!rh(b,31)){return false;}c=qh(b,31);if(c.yc()!=e.yc()){return false;}for(a=c.vb();a.tb();){d=a.yb();if(!e.z(d)){return false;}}return true;}
function cH(a){return bH(this,a);}
function dH(){var a,b,c;a=0;for(b=this.vb();b.tb();){c=b.yb();if(c!==null){a+=c.hC();}}return a;}
function FG(){}
_=FG.prototype=new aF();_.eQ=cH;_.hC=dH;_.tN=eL+'AbstractSet';_.tI=107;function AF(b,a,c){b.a=a;b.b=c;return b;}
function CF(b){var a;a=gJ(b.b);return bG(new aG(),b,a);}
function DF(a){return this.a.y(a);}
function EF(){return CF(this);}
function FF(){return this.b.a.c;}
function zF(){}
_=zF.prototype=new FG();_.z=DF;_.vb=EF;_.yc=FF;_.tN=eL+'AbstractMap$1';_.tI=108;function bG(b,a,c){b.a=c;return b;}
function dG(a){return a.a.tb();}
function eG(b){var a;a=b.a.yb();return a.jb();}
function fG(){return dG(this);}
function gG(){return eG(this);}
function aG(){}
_=aG.prototype=new iD();_.tb=fG;_.yb=gG;_.tN=eL+'AbstractMap$2';_.tI=109;function iG(b,a,c){b.a=a;b.b=c;return b;}
function kG(b){var a;a=gJ(b.b);return pG(new oG(),b,a);}
function lG(a){return pJ(this.a,a);}
function mG(){return kG(this);}
function nG(){return this.b.a.c;}
function hG(){}
_=hG.prototype=new aF();_.z=lG;_.vb=mG;_.yc=nG;_.tN=eL+'AbstractMap$3';_.tI=110;function pG(b,a,c){b.a=c;return b;}
function rG(a){return a.a.tb();}
function sG(a){var b;b=a.a.yb().pb();return b;}
function tG(){return rG(this);}
function uG(){return sG(this);}
function oG(){}
_=oG.prototype=new iD();_.tb=tG;_.yb=uG;_.tN=eL+'AbstractMap$4';_.tI=111;function aI(b){var a,c;a=gH(new eH());for(c=0;c<b.a;c++){iH(a,b[c]);}return a;}
function bI(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.v(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function cI(a){bI(a,a.a,(jI(),kI));}
function jI(){jI=xK;kI=new gI();}
var kI;function iI(a,b){return qh(a,36).u(b);}
function gI(){}
_=gI.prototype=new iD();_.v=iI;_.tN=eL+'Comparators$1';_.tI=112;function nJ(){nJ=xK;uJ=AJ();}
function kJ(a){{mJ(a);}}
function lJ(a){nJ();kJ(a);return a;}
function mJ(a){a.a=zg();a.d=Ag();a.b=yh(uJ,vg);a.c=0;}
function oJ(b,a){if(rh(a,1)){return EJ(b.d,qh(a,1))!==uJ;}else if(a===null){return b.b!==uJ;}else{return DJ(b.a,a,a.hC())!==uJ;}}
function pJ(a,b){if(a.b!==uJ&&CJ(a.b,b)){return true;}else if(zJ(a.d,b)){return true;}else if(xJ(a.a,b)){return true;}return false;}
function qJ(a){return dJ(new AI(),a);}
function rJ(c,a){var b;if(rh(a,1)){b=EJ(c.d,qh(a,1));}else if(a===null){b=c.b;}else{b=DJ(c.a,a,a.hC());}return b===uJ?null:b;}
function sJ(c,a,d){var b;if(rh(a,1)){b=bK(c.d,qh(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=aK(c.a,a,d,a.hC());}if(b===uJ){++c.c;return null;}else{return b;}}
function tJ(c,a){var b;if(rh(a,1)){b=dK(c.d,qh(a,1));}else if(a===null){b=c.b;c.b=yh(uJ,vg);}else{b=cK(c.a,a,a.hC());}if(b===uJ){return null;}else{--c.c;return b;}}
function vJ(e,c){nJ();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function wJ(d,a){nJ();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=tI(c.substring(1),e);a.s(b);}}}
function xJ(f,h){nJ();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.pb();if(CJ(h,d)){return true;}}}}return false;}
function yJ(a){return oJ(this,a);}
function zJ(c,d){nJ();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(CJ(d,a)){return true;}}}return false;}
function AJ(){nJ();}
function BJ(){return qJ(this);}
function CJ(a,b){nJ();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function FJ(a){return rJ(this,a);}
function DJ(f,h,e){nJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(CJ(h,d)){return c.pb();}}}}
function EJ(b,a){nJ();return b[':'+a];}
function aK(f,h,j,e){nJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(CJ(h,d)){var i=c.pb();c.uc(j);return i;}}}else{a=f[e]=[];}var c=tI(h,j);a.push(c);}
function bK(c,a,d){nJ();a=':'+a;var b=c[a];c[a]=d;return b;}
function cK(f,h,e){nJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(CJ(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.pb();}}}}
function dK(c,a){nJ();a=':'+a;var b=c[a];delete c[a];return b;}
function pI(){}
_=pI.prototype=new yF();_.y=yJ;_.E=BJ;_.sb=FJ;_.tN=eL+'HashMap';_.tI=113;_.a=null;_.b=null;_.c=0;_.d=null;var uJ;function rI(b,a,c){b.a=a;b.b=c;return b;}
function tI(a,b){return rI(new qI(),a,b);}
function uI(b){var a;if(rh(b,37)){a=qh(b,37);if(CJ(this.a,a.jb())&&CJ(this.b,a.pb())){return true;}}return false;}
function vI(){return this.a;}
function wI(){return this.b;}
function xI(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function yI(a){var b;b=this.b;this.b=a;return b;}
function zI(){return this.a+'='+this.b;}
function qI(){}
_=qI.prototype=new iD();_.eQ=uI;_.jb=vI;_.pb=wI;_.hC=xI;_.uc=yI;_.tS=zI;_.tN=eL+'HashMap$EntryImpl';_.tI=114;_.a=null;_.b=null;function dJ(b,a){b.a=a;return b;}
function fJ(d,c){var a,b,e;if(rh(c,37)){a=qh(c,37);b=a.jb();if(oJ(d.a,b)){e=rJ(d.a,b);return CJ(a.pb(),e);}}return false;}
function gJ(a){return CI(new BI(),a.a);}
function hJ(a){return fJ(this,a);}
function iJ(){return gJ(this);}
function jJ(){return this.a.c;}
function AI(){}
_=AI.prototype=new FG();_.z=hJ;_.vb=iJ;_.yc=jJ;_.tN=eL+'HashMap$EntrySet';_.tI=115;function CI(c,b){var a;c.c=b;a=gH(new eH());if(c.c.b!==(nJ(),uJ)){iH(a,rI(new qI(),null,c.c.b));}wJ(c.c.d,a);vJ(c.c.a,a);c.a=rF(a);return c;}
function EI(a){return kF(a.a);}
function FI(a){return a.b=qh(lF(a.a),37);}
function aJ(a){if(a.b===null){throw eC(new cC(),'Must call next() before remove().');}else{mF(a.a);tJ(a.c,a.b.jb());a.b=null;}}
function bJ(){return EI(this);}
function cJ(){return FI(this);}
function BI(){}
_=BI.prototype=new iD();_.tb=bJ;_.yb=cJ;_.tN=eL+'HashMap$EntrySetIterator';_.tI=116;_.a=null;_.b=null;function fK(a){a.a=lJ(new pI());return a;}
function gK(c,a){var b;b=sJ(c.a,a,qB(true));return b===null;}
function iK(a){return CF(xG(a.a));}
function jK(a){return gK(this,a);}
function kK(a){return oJ(this.a,a);}
function lK(){return iK(this);}
function mK(){return this.a.c;}
function nK(){return xG(this.a).tS();}
function eK(){}
_=eK.prototype=new FG();_.s=jK;_.z=kK;_.vb=lK;_.yc=mK;_.tS=nK;_.tN=eL+'HashSet';_.tI=117;_.a=null;function uK(){uK=xK;qD();}
function tK(a){uK();oD(a);return a;}
function sK(){}
_=sK.prototype=new nD();_.tN=eL+'NoSuchElementException';_.tI=118;function mL(){}
_=mL.prototype=new iD();_.tN=fL+'BezierCurve';_.tI=119;function sL(a){{xL(a);}}
function tL(a){sL(a);return a;}
function wL(i,d,e,a,b){var c,f,g,h,j;h=qN(new pN(),wC(d.a,e.a),wC(d.b,e.b));j=tC(d.a-e.a);c=tC(d.b-e.b);g=vC(j,c);g=vC(g,tC(d.a-a.a));g=vC(g,tC(d.b-a.b));g=vC(g,tC(e.a-b.a));g=vC(g,tC(e.b-b.b));f=qN(new pN(),h.a-g,h.b-g);Ak(i.a,'left',qC(f.a));Ak(i.a,'top',qC(f.b));uk(i.a,'width',qC(j+g*2));uk(i.a,'height',qC(c+g*2));Ak(i.a,'width',qC(j+g*2));Ak(i.a,'height',qC(c+g*2));vL(i,tN(d,vN(f)),tN(e,vN(f)),tN(a,vN(f)),tN(b,vN(f)),yL(i.a,'color'));}
function vL(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function xL(b){var a;b.a=hj('canvas');a=bk(b.a,'class');uk(b.a,'class',a+' gwt-diagrams-canvas');}
function yL(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function nL(){}
_=nL.prototype=new mL();_.tN=fL+'BezierCurveCanvas';_.tI=120;_.a=null;function pL(a){tL(a);return a;}
function rL(f,c,d,a,b){var e;e=ik(f.a);if(e!==null){pk(e,f.a);xL(f);dj(e,f.a);}wL(f,c,d,a,b);}
function oL(){}
_=oL.prototype=new nL();_.tN=fL+'BezierCurveCanvasOpera';_.tI=121;function BL(a){a.c=gH(new eH());}
function CL(c,d){var a,b;BL(c);hH(c.c,d);aM(c,c.A());for(b=rF(c.c);kF(b);){a=qh(lF(b),35);a.w(c);}return c;}
function DL(a,b){CL(a,aI(b));return a;}
function FL(a){return a.b.t(a.c);}
function aM(b,a){b.b=a;}
function bM(){this.Ac(FL(this));}
function AL(){}
_=AL.prototype=new Ez();_.zc=bM;_.tN=gL+'AbstractConnection';_.tI=122;_.b=null;function dM(a){a.a=pL(new oL());}
function fM(a,b){DL(a,b);dM(a);if(b.a!=2){throw aC(new FB(),'Need exactly two connectors to connect');}rA(a,a.a.a);Ey(a,'gwt-diagrams-connection');return a;}
function eM(c,a,b){fM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',153,35,[a,b]));return c;}
function hM(){return new xM();}
function iM(b){var a;if(!rh(b,38)){throw aC(new FB(),'Expected BezierConnectionData');}a=qh(b,38);if(a.b.b!=2){throw aC(new FB(),'Expected two connection points');}if(a.a.b!=2){throw aC(new FB(),'Expected two control points');}rL(this.a,qh(lH(a.b,0),32),qh(lH(a.b,1),32),qh(lH(a.a,0),32),qh(lH(a.a,1),32));}
function cM(){}
_=cM.prototype=new AL();_.A=hM;_.Ac=iM;_.tN=gL+'BezierTwoEndedConnection';_.tI=123;function lM(a){a.a=gH(new eH());}
function nM(a,b){DL(a,b);lM(a);if(b.a!=2){throw aC(new FB(),'Need exactly two connectors to connect');}rA(a,gj());Ey(a,'gwt-diagrams-connection');return a;}
function mM(c,a,b){nM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',153,35,[a,b]));return c;}
function pM(d,a){var b,c;for(c=d.a.b;c<a;c++){b=gj();iH(d.a,yh(b,dl));dj(d.gb(),b);yk(b,'&nbsp;');}while(d.a.b>a){b=qh(lH(d.a,0),17);qH(d.a,yh(b,dl));pk(d.gb(),b);}}
function qM(){return new CM();}
function rM(a){var b,c,d,e,f;if(a.b.b<=1){throw aC(new FB(),'Too few connection points');}pM(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=qh(lH(this.a,d),17);e=qh(lH(a.b,d),32);c=qh(lH(a.b,d+1),32);f='gwt-diagrams-line';uk(b,'style','');wk(b,'className',f);Ak(b,'height','1');Ak(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Ak(b,'height',qC(tC(e.b-c.b)));}else if(e.b==c.b){Ak(b,'width',qC(tC(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Ak(b,'left',qC(wC(e.a,c.a)));Ak(b,'top',qC(wC(e.b,c.b)));wk(b,'className',f);}}
function kM(){}
_=kM.prototype=new AL();_.A=qM;_.Ac=rM;_.tN=gL+'RectilinearTwoEndedConnection';_.tI=124;function tM(c,a,b){eM(c,a,b);return c;}
function vM(){return new cN();}
function wM(a){if(a.b.b!=2){throw aC(new FB(),'Expected two connection points');}rL(this.a,qh(lH(a.b,0),32),qh(lH(a.b,1),32),qh(lH(a.b,1),32),qh(lH(a.b,0),32));}
function sM(){}
_=sM.prototype=new cM();_.A=vM;_.Ac=wM;_.tN=gL+'StraightTwoEndedConnection';_.tI=125;function zM(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[150],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=sN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function AM(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw aC(new FB(),'Unsupported connectors count');}c=qh(lH(e,0),35);d=qh(lH(e,1),35);f=zM(this,c,d);h=c.pc(f[0]);i=d.pc(f[1]);a=uN(h,f[0],50);b=uN(i,f[1],50);g=iN(new fN(),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',149,32,[h,i]),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',149,32,[a,b]));return g;}
function xM(){}
_=xM.prototype=new iD();_.t=AM;_.tN=hL+'BezierConnectionCalculator';_.tI=126;function DM(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(dO(),gO);}if(c==1&&d>0){return a!==(dO(),hO);}if(c==0&&d<0){return a!==(dO(),hO);}if(c==1&&d<0){return a!==(dO(),gO);}}else{if(c==0&&d>0){return a!==(dO(),iO);}if(c==1&&d>0){return a!==(dO(),fO);}if(c==0&&d<0){return a!==(dO(),fO);}if(c==1&&d<0){return a!==(dO(),iO);}}return false;}
function FM(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[150],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=sN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function aN(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(dO(),hO);}if(c==1&&d>0){return a===(dO(),gO);}if(c==0&&d<0){return a===(dO(),gO);}if(c==1&&d<0){return a===(dO(),hO);}}else{if(c==0&&d>0){return a===(dO(),fO);}if(c==1&&d>0){return a===(dO(),iO);}if(c==0&&d<0){return a===(dO(),iO);}if(c==1&&d<0){return a===(dO(),fO);}}return false;}
function bN(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw aC(new FB(),'Unsupported connectors count');}a=qh(lH(c,0),35);b=qh(lH(c,1),35);d=mN(new kN());e=FM(this,a,b);i=a.pc(e[0]);j=uN(i,e[0],10);k=b.pc(e[1]);l=uN(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(aN(this,e[0],0,f,true)&&aN(this,e[1],1,f,true)){g=uN(j,e[0],tC(uh(f/2)));h=qN(new pN(),g.a,l.b);}else if(aN(this,e[0],0,m,false)&&aN(this,e[1],1,m,false)){g=uN(j,e[0],tC(uh(m/2)));h=qN(new pN(),l.a,g.b);}else if(aN(this,e[0],0,f,true)&&aN(this,e[1],1,m,false)){g=uN(j,e[0],tC(f));h=uN(l,e[1],tC(m));}else if(aN(this,e[0],0,m,false)&&aN(this,e[1],1,f,true)){g=uN(j,e[0],tC(m));h=uN(l,e[1],tC(f));}else if(aN(this,e[0],0,f,true)&&DM(this,e[1],1,f,true)){g=uN(j,e[0],tC(uh(f/2)));h=qN(new pN(),g.a,l.b);}else if(DM(this,e[0],0,f,true)&&aN(this,e[1],1,f,true)){g=uN(j,e[0],tC(uh(f/2)));h=qN(new pN(),g.a,l.b);}else if(aN(this,e[0],0,m,false)&&DM(this,e[1],1,m,false)){g=uN(j,e[0],tC(uh(m/2)));h=qN(new pN(),l.a,g.b);}else if(DM(this,e[0],0,m,false)&&aN(this,e[1],1,m,false)){g=uN(j,e[0],tC(uh(m/2)));h=qN(new pN(),l.a,g.b);}else if(DM(this,e[0],0,f,true)&&DM(this,e[1],1,f,true)){g=uN(j,(dO(),hO),uh(f/2));h=qN(new pN(),g.a,l.b);}else if(DM(this,e[0],0,m,false)&&DM(this,e[1],1,m,false)){g=uN(j,(dO(),fO),uh(m/2));h=qN(new pN(),l.a,g.b);}iH(d.b,i);iH(d.b,j);if(g!==null){iH(d.b,g);}if(h!==null){iH(d.b,h);}iH(d.b,l);iH(d.b,k);return d;}
function CM(){}
_=CM.prototype=new iD();_.t=bN;_.tN=hL+'FullRectilinearTwoEndedCalculator';_.tI=127;function eN(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw aC(new FB(),'Unsupported connectors count');}a=qh(lH(e,0),35);b=qh(lH(e,1),35);f=mN(new kN());c=qN(new pN(),a.kb()+uh(a.qb()/2),a.ob()+uh(a.hb()/2));d=qN(new pN(),b.kb()+uh(b.qb()/2),b.ob()+uh(b.hb()/2));g=qN(new pN(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=uh(a.hb()/2);h=g.b!=0?uh(j*g.a/tC(g.b)):2147483647;j*= -k;if(tC(h)>uh(a.qb()/2)){h=uh(a.qb()/2);j=g.a!=0?uh(h*g.b/tC(g.a)):2147483647;h*= -i;}iH(f.b,qN(new pN(),c.a+h,c.b+j));j=uh(b.hb()/2);h=g.b!=0?uh(j*g.a/tC(g.b)):2147483647;j*=k;h= -h;if(tC(h)>uh(b.qb()/2)){h=uh(b.qb()/2);j=g.a!=0?uh(h*g.b/tC(g.a)):2147483647;h*=i;j= -j;}iH(f.b,qN(new pN(),d.a+h,d.b+j));return f;}
function cN(){}
_=cN.prototype=new iD();_.t=eN;_.tN=hL+'StraightCenterConnectionDataCalculator';_.tI=128;function lN(a){a.b=gH(new eH());}
function mN(a){lN(a);return a;}
function nN(b,a){lN(b);hH(b.b,a);return b;}
function kN(){}
_=kN.prototype=new iD();_.tN=iL+'ConnectionData';_.tI=129;function gN(a){a.a=gH(new eH());}
function hN(c,b,a){nN(c,b);gN(c);hH(c.a,a);return c;}
function iN(c,b,a){hN(c,aI(b),aI(a));return c;}
function fN(){}
_=fN.prototype=new kN();_.tN=iL+'BezierConnectionData';_.tI=130;function qN(b,a,c){b.a=a;b.b=c;return b;}
function sN(b,a){return xC((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function uN(c,a,b){if(a===(dO(),fO)){return qN(new pN(),c.a,c.b+b);}else if(a===(dO(),iO)){return qN(new pN(),c.a,c.b-b);}else if(a===(dO(),gO)){return qN(new pN(),c.a-b,c.b);}else if(a===(dO(),hO)){return qN(new pN(),c.a+b,c.b);}else{throw dC(new cC());}}
function tN(a,b){return qN(new pN(),a.a+b.a,a.b+b.b);}
function vN(a){return qN(new pN(),-a.a,-a.b);}
function pN(){}
_=pN.prototype=new iD();_.tN=iL+'Point';_.tI=131;_.a=0;_.b=0;function xN(a){a.c=fK(new eK());}
function yN(a){xN(a);return a;}
function AN(b,a){return uN(qN(new pN(),b.kb()+uh(b.qb()/2),b.ob()+uh(b.hb()/2)),a,eO(a)?uh(b.qb()/2):uh(b.hb()/2));}
function BN(c){var a,b;for(b=iK(c.c);dG(b);){a=qh(eG(b),39);a.zc();}}
function CN(a){gK(this.c,a);}
function DN(a){return AN(this,a);}
function EN(){return jO();}
function FN(a){return AN(this,a);}
function wN(){}
_=wN.prototype=new iD();_.w=CN;_.bb=DN;_.eb=EN;_.pc=FN;_.tN=jL+'AbstractConnector';_.tI=132;function dO(){dO=xK;iO=cO(new bO(),'UP');fO=cO(new bO(),'DOWN');gO=cO(new bO(),'LEFT');hO=cO(new bO(),'RIGHT');}
function cO(b,a){dO();b.a=a;return b;}
function eO(a){return a===gO||a===hO;}
function jO(){dO();return lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',150,33,[iO,fO,gO,hO]);}
function kO(){return this.a;}
function bO(){}
_=bO.prototype=new iD();_.tS=kO;_.tN=jL+'Direction';_.tI=133;_.a=null;var fO,gO,hO,iO;function rO(){rO=xK;zO=lJ(new pI());}
function qO(a,b){rO();yN(a);a.b=b;return a;}
function sO(){return this.b.lb();}
function tO(){var a,b;a=0;b=ik(this.b.gb());while(b!==null){if(ED('relative',jk(b,'position'))){a=Fj(b);break;}b=ik(b);}return az(this.b)-a;}
function uO(){var a,b;a=0;b=ik(this.b.gb());while(b!==null){if(ED('relative',jk(b,'position'))){a=ak(b);break;}b=ik(b);}return bz(this.b)-a;}
function vO(){return this.b.mb();}
function wO(a){rO();return qh(rJ(zO,a),40);}
function xO(b){rO();var a;if(oJ(zO,b)){return qh(rJ(zO,b),40);}else{a=qO(new lO(),b);sJ(zO,b,a);return a;}}
function yO(c,b){rO();var a;if(oJ(zO,c)){return qh(rJ(zO,c),40);}else{a=nO(new mO(),c,b);sJ(zO,c,a);return a;}}
function lO(){}
_=lO.prototype=new wN();_.hb=sO;_.kb=tO;_.ob=uO;_.qb=vO;_.tN=jL+'UIObjectConnector';_.tI=134;_.b=null;var zO;function oO(){oO=xK;rO();}
function nO(b,a,c){oO();b.a=c;qO(b,a);return b;}
function pO(){return this.a;}
function mO(){}
_=mO.prototype=new lO();_.eb=pO;_.tN=jL+'UIObjectConnector$1';_.tI=135;function dP(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function eP(a){lg(new BO());bl(FO(new EO(),a));}
function AO(){}
_=AO.prototype=new iD();_.tN=kL+'BaseExamplesEntryPoint';_.tI=136;function DO(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=AE(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=rq(new pq(),true);Ak(a.gb(),'backgroundColor','#ABCDEF');rE(),tE;d=dE(d,' ','&nbsp;');uq(a,'<pre>'+d+'<\/pre>');yv(a);}
function BO(){}
_=BO.prototype=new iD();_.tN=kL+'BaseExamplesEntryPoint$1';_.tI=137;function FO(b,a){b.a=a;return b;}
function bP(){mP(this.a);}
function EO(){}
_=EO.prototype=new iD();_.F=bP;_.tN=kL+'BaseExamplesEntryPoint$2';_.tI=138;function mP(c){var a,b;b=ry(new ey());Do(yw('tabs'),b);ty(b,oQ(new nQ()),'Rectilinear');ty(b,kQ(new jQ()),'Bezier');ty(b,sQ(new rQ()),'Straight');sy(b,hP(new gP(),c,b));a=dP(c,'tab');if(a===null||ED('',a)){a='0';}yy(b,oC(a));}
function fP(){}
_=fP.prototype=new AO();_.tN=kL+'GwtDiagramsExample';_.tI=139;function hP(b,a,c){b.a=c;return b;}
function jP(a,b){return true;}
function kP(b,c){var a;a=qh(vy(this.a,c),41);cQ(a);}
function gP(){}
_=gP.prototype=new iD();_.Bb=jP;_.lc=kP;_.tN=kL+'GwtDiagramsExample$1';_.tI=140;function fQ(a){a.c=Co(new Bo());}
function gQ(a){var b;cx(a);fQ(a);Ey(a,'gwt-diagrams-example');b=yz(new wz());ex(a,b);zz(b,a.c);zz(b,iQ(a,bQ(a)));return a;}
function iQ(e,d){var a,b,c;a=lr(new kr());Ey(a,'gwt-diagrams-sources-panel');for(b=rF(d);kF(b);){c=qh(lF(b),12);mr(a,c);}return a;}
function eQ(){}
_=eQ.prototype=new Bw();_.tN=lL+'AbstractExample';_.tI=141;function BP(a){a.a=gH(new eH());}
function CP(a){gQ(a);BP(a);a.b=aQ(a);Ak(a.c.gb(),'width','450px');Ak(a.c.gb(),'height','350px');a.B();return a;}
function DP(b,a){Do(b.c,a);iH(b.a,a);}
function FP(e,d,c,f,a){var b;b=Au(new yu(),d);Ey(b,'example-connector');Eo(e.c,b,c,f);rP(e.b,b);if(a!==null){return yO(b,lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',150,33,[a]));}return xO(b);}
function aQ(b){var a;a=pP(new oP(),b.c,true,b);return a;}
function bQ(f){var a,b,c,d,e;e=gH(new eH());b=bE(jg(f),46);a=eE(jg(f),b+1);iH(e,nu(new lu(),a+'.java',''));iH(e,nu(new lu(),'AbstractExample.java',''));iH(e,nu(new lu(),'AbstractConnectionsExample.java',''));for(d=rF(e);kF(d);){c=qh(lF(d),42);Ey(c,'gwt-diagrams-source-link');ou(c,yP(new xP(),f,c));}return e;}
function cQ(c){var a,b;for(b=rF(c.a);kF(b);){a=qh(lF(b),39);a.zc();}}
function dQ(){var a,b,c,d,e,f,g,h;a=FP(this,'all',50,50,null);b=FP(this,'all',100,100,null);this.x(a,b);c=FP(this,'up',250,50,(dO(),iO));d=FP(this,'down',300,100,(dO(),fO));this.x(c,d);e=FP(this,'left',50,200,(dO(),gO));f=FP(this,'right',100,250,(dO(),hO));this.x(e,f);g=FP(this,'left',250,200,(dO(),gO));h=FP(this,'left',300,250,(dO(),gO));this.x(g,h);}
function nP(){}
_=nP.prototype=new eQ();_.B=dQ;_.tN=lL+'AbstractConnectionsExample';_.tI=142;_.b=null;function qP(){qP=xK;ic();}
function pP(d,a,b,c){qP();hc(d,a,b);return d;}
function rP(a,b){z(a,b);Ak(b.gb(),'position','absolute');Ak(b.gb(),'zIndex','100');}
function sP(c,b,a){return uP(new tP(),b,a,c);}
function oP(){}
_=oP.prototype=new gc();_.tN=lL+'AbstractConnectionsExample$1';_.tI=143;function vP(){vP=xK;vd();}
function uP(d,a,b,c){vP();ud(d,a,b);return d;}
function wP(d,c,b){var a;sc(this,d,c,b);a=wO(c);if(a!==null){BN(a);}}
function tP(){}
_=tP.prototype=new td();_.jc=wP;_.tN=lL+'AbstractConnectionsExample$2';_.tI=144;function yP(b,a,c){b.a=c;return b;}
function AP(a){Bm('../source/'+qu(this.a),'','');}
function xP(){}
_=xP.prototype=new iD();_.Db=AP;_.tN=lL+'AbstractConnectionsExample$3';_.tI=145;function kQ(a){CP(a);return a;}
function mQ(a,b){DP(this,eM(new cM(),a,b));}
function jQ(){}
_=jQ.prototype=new nP();_.x=mQ;_.tN=lL+'BezierExample';_.tI=146;function oQ(a){CP(a);return a;}
function qQ(a,b){DP(this,mM(new kM(),a,b));}
function nQ(){}
_=nQ.prototype=new nP();_.x=qQ;_.tN=lL+'RectilinearExample';_.tI=147;function sQ(a){CP(a);return a;}
function uQ(c,a,b){DP(c,tM(new sM(),a,b));}
function vQ(a,b){uQ(this,a,b);}
function wQ(){var a,b;a=FP(this,'connector 1',50,50,(dO(),iO));b=FP(this,'connector 2',200,200,(dO(),fO));uQ(this,a,b);}
function rQ(){}
_=rQ.prototype=new nP();_.x=vQ;_.B=wQ;_.tN=lL+'StraightConnectionsExample';_.tI=148;function EA(){eP(new fP());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{EA();}catch(a){b(d);}else{EA();}}
var xh=[{},{25:1},{1:1,25:1,36:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{9:1,25:1,36:1},{21:1,25:1},{25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{25:1},{14:1,25:1},{14:1,25:1},{11:1,14:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{13:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1},{18:1,25:1},{18:1,25:1},{18:1,25:1},{25:1},{13:1,17:1,25:1},{13:1,25:1},{19:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1,26:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{2:1,12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1,29:1},{25:1,29:1},{25:1,29:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,21:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{5:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{3:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1,42:1},{25:1,29:1},{2:1,12:1,22:1,24:1,25:1,26:1,27:1},{19:1,25:1},{25:1},{12:1,20:1,25:1,26:1,27:1},{25:1,29:1},{12:1,23:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,20:1,25:1,26:1,27:1},{4:1,12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1,28:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{10:1,14:1,25:1},{25:1},{25:1,30:1},{25:1,31:1},{25:1,31:1},{25:1},{25:1},{25:1},{25:1},{25:1,30:1},{25:1,37:1},{25:1,31:1},{25:1},{25:1,31:1},{10:1,14:1,25:1},{25:1},{25:1},{25:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{25:1},{25:1},{25:1},{25:1},{25:1,38:1},{25:1,32:1},{25:1,35:1},{25:1,33:1},{25:1,35:1,40:1},{25:1,35:1,40:1},{25:1},{25:1},{15:1,25:1},{25:1},{23:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{7:1,25:1},{20:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{8:1,25:1},{25:1},{25:1},{25:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();