function packet_AppWidgetSet(){var U='',R=' top: -1000px;',pb='" for "gwt:onLoadErrorFn"',nb='" for "gwt:onPropertyErrorFn"',$='");',qb='#',Ub='.cache.js',sb='/',yb='//',Nb='3D77DE335C747A9863AE1966B3E3F5F1',Ob='3E4FF0A010AD5BCAC888EDADAC45BF61',Pb='668DE103759A4B73351C00662938CA8C',Tb=':',hb='::',T='<!doctype html>',V='<html><head><\/head><body><\/body><\/html>',kb='=',rb='?',mb='Bad handler "',Qb='C500164DF4A6452421852EFBEE07BEA8',Rb='CC3C4B6DCE672645E088588B46537B74',S='CSS1Compat',Y='Chrome',Sb='DACF1E4E80B1F11487508E99EDC26D2C',X='DOMContentLoaded',M='DUMMY',xb='base',vb='baseUrl',H='begin',N='body',G='bootstrap',ub='clear.cache.gif',jb='content',Wb='end',Z='eval("',Ib='gecko',Jb='gecko1_8',I='gwt.codesvr.packet.AppWidgetSet=',J='gwt.codesvr=',ob='gwt:onLoadErrorFn',lb='gwt:onPropertyErrorFn',ib='gwt:property',db='head',Eb='ie10',Hb='ie6',Gb='ie8',Fb='ie9',O='iframe',tb='img',ab='javascript',P='javascript:""',Vb='loadExternalRefs',eb='meta',cb='moduleRequested',bb='moduleStartup',Db='msie',fb='name',Ab='opera',K='packet.AppWidgetSet',Mb='packet.AppWidgetSet.devmode.js',wb='packet.AppWidgetSet.nocache.js',gb='packet.AppWidgetSet::',Q='position:absolute; width:0; height:0; border:none; left: -1000px;',Cb='safari',_='script',Lb='selectingPermutation',L='startup',W='undefined',Kb='unknown',zb='user.agent',Bb='webkit';var o=window;var p=document;r(G,H);function q(){var a=o.location.search;return a.indexOf(I)!=-1||a.indexOf(J)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:K,sessionId:o.__gwtStatsSessionId,subSystem:L,evtGroup:a,millis:(new Date).getTime(),type:b})}}
packet_AppWidgetSet.__sendStats=r;packet_AppWidgetSet.__moduleName=K;packet_AppWidgetSet.__errFn=null;packet_AppWidgetSet.__moduleBase=M;packet_AppWidgetSet.__softPermutationId=0;packet_AppWidgetSet.__computePropValue=null;packet_AppWidgetSet.__getPropMap=null;packet_AppWidgetSet.__gwtInstallCode=function(){};packet_AppWidgetSet.__gwtStartLoadingFragment=function(){return null};var s=function(){return false};var t=function(){return null};__propertyErrorFunction=null;var u=o.__gwt_activeModules=o.__gwt_activeModules||{};u[K]={moduleName:K};var v;function w(){y();return v}
function x(){y();return v.getElementsByTagName(N)[0]}
function y(){if(v){return}var a=p.createElement(O);a.src=P;a.id=K;a.style.cssText=Q+R;a.tabIndex=-1;p.body.appendChild(a);v=a.contentDocument;if(!v){v=a.contentWindow.document}v.open();var b=document.compatMode==S?T:U;v.write(b+V);v.close()}
function z(k){function l(a){function b(){if(typeof p.readyState==W){return typeof p.body!=W&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(X,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(X,d,false)}var e=setInterval(function(){if(b()){d()}},50)}
function m(c){function d(a,b){a.removeChild(b)}
var e=x();var f=w();var g;if(navigator.userAgent.indexOf(Y)>-1&&window.JSON){var h=f.createDocumentFragment();h.appendChild(f.createTextNode(Z));for(var i=0;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(f.createTextNode(j.substring(1,j.length-1)))}h.appendChild(f.createTextNode($));g=f.createElement(_);g.language=ab;g.appendChild(h);e.appendChild(g);d(e,g)}else{for(var i=0;i<c.length;i++){g=f.createElement(_);g.language=ab;g.text=c[i];e.appendChild(g);d(e,g)}}}
packet_AppWidgetSet.onScriptDownloaded=function(a){l(function(){m(a)})};r(bb,cb);var n=p.createElement(_);n.src=k;p.getElementsByTagName(db)[0].appendChild(n)}
packet_AppWidgetSet.__startLoadingFragment=function(a){return C(a)};packet_AppWidgetSet.__installRunAsyncCode=function(a){var b=x();var c=w().createElement(_);c.language=ab;c.text=a;b.appendChild(c);b.removeChild(c)};function A(){var c={};var d;var e;var f=p.getElementsByTagName(eb);for(var g=0,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(fb),k;if(j){j=j.replace(gb,U);if(j.indexOf(hb)>=0){continue}if(j==ib){k=i.getAttribute(jb);if(k){var l,m=k.indexOf(kb);if(m>=0){j=k.substring(0,m);l=k.substring(m+1)}else{j=k;l=U}c[j]=l}}else if(j==lb){k=i.getAttribute(jb);if(k){try{d=eval(k)}catch(a){alert(mb+k+nb)}}}else if(j==ob){k=i.getAttribute(jb);if(k){try{e=eval(k)}catch(a){alert(mb+k+pb)}}}}}t=function(a){var b=c[a];return b==null?null:b};__propertyErrorFunction=d;packet_AppWidgetSet.__errFn=e}
function B(){function e(a){var b=a.lastIndexOf(qb);if(b==-1){b=a.length}var c=a.indexOf(rb);if(c==-1){c=a.length}var d=a.lastIndexOf(sb,Math.min(c,b));return d>=0?a.substring(0,d+1):U}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(tb);b.src=a+ub;a=e(b.src)}return a}
function g(){var a=t(vb);if(a!=null){return a}return U}
function h(){var a=p.getElementsByTagName(_);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(wb)!=-1){return e(a[b].src)}}return U}
function i(){var a=p.getElementsByTagName(xb);if(a.length>0){return a[a.length-1].href}return U}
function j(){var a=p.location;return a.href==a.protocol+yb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==U){k=h()}if(k==U){k=i()}if(k==U&&j()){k=e(p.location.href)}k=f(k);return k}
function C(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return packet_AppWidgetSet.__moduleBase+a}
function D(){var f=[];var g;function h(a,b){var c=f;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(__propertyErrorFunc){__propertyErrorFunc(a,d,b)}throw null}
j[zb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Ab)!=-1}())return Ab;if(function(){return b.indexOf(Bb)!=-1}())return Cb;if(function(){return b.indexOf(Db)!=-1&&p.documentMode>=10}())return Eb;if(function(){return b.indexOf(Db)!=-1&&p.documentMode>=9}())return Fb;if(function(){return b.indexOf(Db)!=-1&&p.documentMode>=8}())return Gb;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(a&&a.length==3)return c(a)>=6000}())return Hb;if(function(){return b.indexOf(Ib)!=-1}())return Jb;return Kb};i[zb]={gecko1_8:0,ie10:1,ie6:2,ie8:3,ie9:4,opera:5,safari:6};s=function(a,b){return b in i[a]};packet_AppWidgetSet.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};packet_AppWidgetSet.__computePropValue=k;o.__gwt_activeModules[K].bindings=packet_AppWidgetSet.__getPropMap;r(G,Lb);if(q()){return C(Mb)}var l;try{h([Cb],Nb);h([Ab],Ob);h([Gb],Pb);h([Eb],Qb);h([Jb],Rb);h([Fb],Sb);l=f[k(zb)];var m=l.indexOf(Tb);if(m!=-1){g=parseInt(l.substring(m+1),10);l=l.substring(0,m)}}catch(a){}packet_AppWidgetSet.__softPermutationId=g;return C(l+Ub)}
function E(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(Vb,H);r(Vb,Wb)}
A();packet_AppWidgetSet.__moduleBase=B();u[K].moduleBase=packet_AppWidgetSet.__moduleBase;var F=D();E();r(G,Wb);z(F);return true}
packet_AppWidgetSet.succeeded=packet_AppWidgetSet();