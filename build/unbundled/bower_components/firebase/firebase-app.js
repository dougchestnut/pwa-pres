var firebase=null;!function(){function t(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function e(t,e,n,o){var r,i=arguments.length,c=3>i?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if(r=S.Reflect,"object"==typeof r&&"function"==typeof r.decorate)c=r.decorate(t,e,n,o);else for(var a=t.length-1;0<=a;a--)(r=t[a])&&(c=(3>i?r(c):3<i?r(e,n,c):r(e,n))||c);return 3<i&&c&&Object.defineProperty(e,n,c),c}function n(t,e){var n=S.Reflect;if("object"==typeof n&&"function"==typeof n.metadata)return n.metadata(t,e)}function o(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(var n in e)e.hasOwnProperty(n)&&(t[n]=o(t[n],e[n]));return t}function r(t,e){return t=new jt(t,e),t.subscribe.bind(t)}function i(t){if("object"!=typeof t||null===t)return!1;for(var e=b(["next","error","complete"]),n=e.next();!n.done;n=e.next())if(n=n.value,n in t&&"function"==typeof t[n])return!0;return!1}function c(){}function a(){function t(t){t=t||"[DEFAULT]";var e=i[t];return void 0===e&&u("noApp",{name:t}),e}function e(t,e){Object.keys(c).forEach(function(o){o=n(t,o),null!==o&&s[o]&&s[o](e,t)})}function n(t,e){if("serverAuth"===e)return null;var n=e;return t=t.options,"auth"===e&&(t.serviceAccount||t.credential)&&(n="serverAuth","serverAuth"in c||u("serverAuthMissing")),n}var i={},c={},s={},l={__esModule:!0,initializeApp:function(t,n){return void 0===n?n="[DEFAULT]":"string"==typeof n&&""!==n||u("bad-app-name",{name:n+""}),void 0!==i[n]&&u("dupApp",{name:n}),t=new Nt(t,n,l),i[n]=t,e(t,"create"),void 0!=t.INTERNAL&&void 0!=t.INTERNAL.getToken||o(t,{INTERNAL:{getToken:function(){return It.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}}),t},app:t,apps:null,Promise:It,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(e,n,r,i){return c[e]&&u("dupService",{name:e}),c[e]=n,i&&(s[e]=i),n=function(n){return void 0===n&&(n=t()),n[e]()},void 0!==r&&o(n,r),l[e]=n},createFirebaseNamespace:a,extendNamespace:function(t){o(l,t)},createSubscribe:r,ErrorFactory:kt,removeApp:function(t){e(i[t],"delete"),delete i[t]},factories:c,useAsService:n,Promise:ct,deepExtend:o}};return l.default=l,Object.defineProperty(l,"apps",{get:function(){return Object.keys(i).map(function(t){return i[t]})}}),t.App=Nt,l}function u(t,e){throw Error(s(t,e))}function s(t,e){return e=e||{},e={noApp:"No Firebase App '"+e.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+e.name+"'.",dupApp:"Firebase App named '"+e.name+"' already exists.",deleted:"Firebase App named '"+e.name+"' already deleted.",dupService:"Firebase Service named '"+e.name+"' already registered.",serverAuthMissing:"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."}[t],void 0===e?"Application Error: ("+t+")":e}for(var l="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},f="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,p=function(){p=function(){},f.Symbol||(f.Symbol=d)},h=0,d=function(t){return"jscomp_symbol_"+(t||"")+h++},y=function(){p();var t=f.Symbol.iterator;t||(t=f.Symbol.iterator=f.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&l(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return v(this)}}),y=function(){}},v=function(t){var e=0;return m(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},m=function(t){return y(),t={next:t},t[f.Symbol.iterator]=function(){return this},t},b=function(t){y();var e=t[Symbol.iterator];return e?e.call(t):v(t)},g=f,w=["Promise"],A=0;A<w.length-1;A++){var E=w[A];E in g||(g[E]={}),g=g[E]}var j=w[w.length-1],x=g[j],O=function(){function t(){this.c=null}if(x)return x;t.prototype.L=function(t){null==this.c&&(this.c=[],this.W()),this.c.push(t)},t.prototype.W=function(){var t=this;this.M(function(){t.$()})};var e=f.setTimeout;t.prototype.M=function(t){e(t,0)},t.prototype.$=function(){for(;this.c&&this.c.length;){var t=this.c;this.c=[];for(var e=0;e<t.length;++e){var n=t[e];delete t[e];try{n()}catch(t){this.X(t)}}}this.c=null},t.prototype.X=function(t){this.M(function(){throw t})};var n=function(t){this.a=0,this.j=void 0,this.m=[];var e=this.F();try{t(e.resolve,e.reject)}catch(t){e.reject(t)}};n.prototype.F=function(){function t(t){return function(o){n||(n=!0,t.call(e,o))}}var e=this,n=!1;return{resolve:t(this.ia),reject:t(this.K)}},n.prototype.ia=function(t){if(t===this)this.K(new TypeError("A Promise cannot resolve to itself"));else if(t instanceof n)this.la(t);else{var e;t:switch(typeof t){case"object":e=null!=t;break t;case"function":e=!0;break t;default:e=!1}e?this.ha(t):this.R(t)}},n.prototype.ha=function(t){var e=void 0;try{e=t.then}catch(t){return void this.K(t)}"function"==typeof e?this.ma(e,t):this.R(t)},n.prototype.K=function(t){this.U(2,t)},n.prototype.R=function(t){this.U(1,t)},n.prototype.U=function(t,e){if(0!=this.a)throw Error("Cannot settle("+t+", "+e|"): Promise already settled in state"+this.a);this.a=t,this.j=e,this.ba()},n.prototype.ba=function(){if(null!=this.m){for(var t=this.m,e=0;e<t.length;++e)t[e].call(),t[e]=null;this.m=null}};var o=new t;return n.prototype.la=function(t){var e=this.F();t.o(e.resolve,e.reject)},n.prototype.ma=function(t,e){var n=this.F();try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},n.prototype.then=function(t,e){function o(t,e){return"function"==typeof t?function(e){try{r(t(e))}catch(t){i(t)}}:e}var r,i,c=new n(function(t,e){r=t,i=e});return this.o(o(t,r),o(e,i)),c},n.prototype.catch=function(t){return this.then(void 0,t)},n.prototype.o=function(t,e){function n(){switch(r.a){case 1:t(r.j);break;case 2:e(r.j);break;default:throw Error("Unexpected state: "+r.a)}}var r=this;null==this.m?o.L(n):this.m.push(function(){o.L(n)})},n.resolve=function(t){return t instanceof n?t:new n(function(e){e(t)})},n.reject=function(t){return new n(function(e,n){n(t)})},n.race=function(t){return new n(function(e,o){for(var r=b(t),i=r.next();!i.done;i=r.next())n.resolve(i.value).o(e,o)})},n.all=function(t){var e=b(t),o=e.next();return o.done?n.resolve([]):new n(function(t,r){function i(e){return function(n){c[e]=n,a--,0==a&&t(c)}}var c=[],a=0;do c.push(void 0),a++,n.resolve(o.value).o(i(c.length-1),r),o=e.next();while(!o.done)})},n.$jscomp$new$AsyncExecutor=function(){return new t},n}();O!=x&&null!=O&&l(g,j,{configurable:!0,writable:!0,value:O});var S,T=this,k=function(){},I=function(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&"undefined"!=typeof t.splice&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||"undefined"!=typeof t.call&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&"undefined"==typeof t.call)return"object";return e},N=function(t){return"function"==I(t)},P=function(t,e,n){return t.call.apply(t.bind,arguments)},_=function(t,e,n){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,o),t.apply(e,n)}}return function(){return t.apply(e,arguments)}},F=function(t,e,n){return F=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?P:_,F.apply(null,arguments)},R=function(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}},L=function(t,e){function n(){}n.prototype=e.prototype,t.sa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ra=function(t,n,o){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}};S="undefined"!=typeof window?window:"undefined"!=typeof self?self:global;var D=function(t,e){return function(n,o){e(n,o,t)}},M=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function c(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(c,a)}u((o=o.apply(t,e)).next())})};"undefined"!=typeof S.V&&S.V||(S.__extends=t,S.__decorate=e,S.__metadata=n,S.__param=D,S.__awaiter=M);var C=function(t){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var e=Error().stack;e&&(this.stack=e)}t&&(this.message=String(t))};L(C,Error),C.prototype.name="CustomError";var K=function(t,e){for(var n=t.split("%s"),o="",r=Array.prototype.slice.call(arguments,1);r.length&&1<n.length;)o+=n.shift()+r.shift();return o+n.join("%s")},$=function(t,e){e.unshift(t),C.call(this,K.apply(null,e)),e.shift()};L($,C),$.prototype.name="AssertionError";var W=function(t,e,n,o){var r="Assertion failed";if(n)var r=r+(": "+n),i=o;else t&&(r+=": "+t,i=e);throw new $(""+r,i||[])},U=function(t,e,n){t||W("",null,e,Array.prototype.slice.call(arguments,2))},B=function(t,e,n){N(t)||W("Expected function but got %s: %s.",[I(t),t],e,Array.prototype.slice.call(arguments,2))},z=function(t,e,n){this.ea=n,this.Y=t,this.ga=e,this.A=0,this.w=null};z.prototype.get=function(){var t;return 0<this.A?(this.A--,t=this.w,this.w=t.next,t.next=null):t=this.Y(),t},z.prototype.put=function(t){this.ga(t),this.A<this.ea&&(this.A++,t.next=this.w,this.w=t)};var G;t:{var H=T.navigator;if(H){var J=H.userAgent;if(J){G=J;break t}}G=""}var V,q=function(t){T.setTimeout(function(){throw t},0)},X=function(){var t=T.MessageChannel;if("undefined"==typeof t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&-1==G.indexOf("Presto")&&(t=function(){var t=document.createElement("IFRAME");t.style.display="none",t.src="",document.documentElement.appendChild(t);var e=t.contentWindow,t=e.document;t.open(),t.write(""),t.close();var n="callImmediate"+Math.random(),o="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host,t=F(function(t){"*"!=o&&t.origin!=o||t.data!=n||this.port1.onmessage()},this);e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,o)}}}),"undefined"!=typeof t&&-1==G.indexOf("Trident")&&-1==G.indexOf("MSIE")){var e=new t,n={},o=n;return e.port1.onmessage=function(){if(void 0!==n.next){n=n.next;var t=n.N;n.N=null,t()}},function(t){o.next={N:t},o=o.next,e.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(t){var e=document.createElement("SCRIPT");e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){T.setTimeout(t,0)}},Y=function(){this.C=this.g=null},Z=new z(function(){return new Q},function(t){t.reset()},100);Y.prototype.add=function(t,e){var n=Z.get();n.set(t,e),this.C?this.C.next=n:(U(!this.g),this.g=n),this.C=n},Y.prototype.remove=function(){var t=null;return this.g&&(t=this.g,this.g=this.g.next,this.g||(this.C=null),t.next=null),t};var Q=function(){this.next=this.scope=this.H=null};Q.prototype.set=function(t,e){this.H=t,this.scope=e,this.next=null},Q.prototype.reset=function(){this.next=this.scope=this.H=null};var tt,et=function(t,e){tt||nt(),ot||(tt(),ot=!0),rt.add(t,e)},nt=function(){var t=T.Promise;if(-1!=String(t).indexOf("[native code]")){var e=t.resolve(void 0);tt=function(){e.then(it)}}else tt=function(){var t,e=it;!(t=!N(T.setImmediate))&&(t=T.Window&&T.Window.prototype)&&(t=-1==G.indexOf("Edge")&&T.Window.prototype.setImmediate==T.setImmediate),t?(V||(V=X()),V(e)):T.setImmediate(e)}},ot=!1,rt=new Y,it=function(){for(var t;t=rt.remove();){try{t.H.call(t.scope)}catch(t){q(t)}Z.put(t)}ot=!1},ct=function(t,e){if(this.a=0,this.j=void 0,this.s=this.h=this.B=null,this.v=this.G=!1,t!=k)try{var n=this;t.call(e,function(t){ht(n,2,t)},function(t){try{if(t instanceof Error)throw t;throw Error("Promise rejected.")}catch(t){}ht(n,3,t)})}catch(t){ht(this,3,t)}},at=function(){this.next=this.context=this.i=this.f=this.child=null,this.D=!1};at.prototype.reset=function(){this.context=this.i=this.f=this.child=null,this.D=!1};var ut=new z(function(){return new at},function(t){t.reset()},100),st=function(t,e,n){var o=ut.get();return o.f=t,o.i=e,o.context=n,o},lt=function(t,e,n){dt(t,e,n,null)||et(R(e,t))};ct.prototype.then=function(t,e,n){return null!=t&&B(t,"opt_onFulfilled should be a function."),null!=e&&B(e,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),pt(this,N(t)?t:null,N(e)?e:null,n)},ct.prototype.then=ct.prototype.then,ct.prototype.$goog_Thenable=!0,ct.prototype.na=function(t,e){return pt(this,null,t,e)};var ft=function(t,e){t.h||2!=t.a&&3!=t.a||vt(t),U(null!=e.f),t.s?t.s.next=e:t.h=e,t.s=e},pt=function(t,e,n,o){var r=st(null,null,null);return r.child=new ct(function(t,i){r.f=e?function(n){try{var r=e.call(o,n);t(r)}catch(t){i(t)}}:t,r.i=n?function(e){try{var r=n.call(o,e);t(r)}catch(t){i(t)}}:i}),r.child.B=t,ft(t,r),r.child};ct.prototype.oa=function(t){U(1==this.a),this.a=0,ht(this,2,t)},ct.prototype.pa=function(t){U(1==this.a),this.a=0,ht(this,3,t)};var ht=function(t,e,n){0==t.a&&(t===n&&(e=3,n=new TypeError("Promise cannot resolve to itself")),t.a=1,dt(n,t.oa,t.pa,t)||(t.j=n,t.a=e,t.B=null,vt(t),3!=e||gt(t,n)))},dt=function(t,e,n,o){if(t instanceof ct)return null!=e&&B(e,"opt_onFulfilled should be a function."),null!=n&&B(n,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),ft(t,st(e||k,n||null,o)),!0;var r;if(t)try{r=!!t.$goog_Thenable}catch(t){r=!1}else r=!1;if(r)return t.then(e,n,o),!0;if(r=typeof t,"object"==r&&null!=t||"function"==r)try{var i=t.then;if(N(i))return yt(t,i,e,n,o),!0}catch(t){return n.call(o,t),!0}return!1},yt=function(t,e,n,o,r){var i=!1,c=function(t){i||(i=!0,n.call(r,t))},a=function(t){i||(i=!0,o.call(r,t))};try{e.call(t,c,a)}catch(t){a(t)}},vt=function(t){t.G||(t.G=!0,et(t.aa,t))},mt=function(t){var e=null;return t.h&&(e=t.h,t.h=e.next,e.next=null),t.h||(t.s=null),null!=e&&U(null!=e.f),e};ct.prototype.aa=function(){for(var t;t=mt(this);){var e=this.a,n=this.j;if(3==e&&t.i&&!t.D){var o;for(o=this;o&&o.v;o=o.B)o.v=!1}if(t.child)t.child.B=null,bt(t,e,n);else try{t.D?t.f.call(t.context):bt(t,e,n)}catch(t){wt.call(null,t)}ut.put(t)}this.G=!1};var bt=function(t,e,n){2==e?t.f.call(t.context,n):t.i&&t.i.call(t.context,n)},gt=function(t,e){t.v=!0,et(function(){t.v&&wt.call(null,e)})},wt=q;ct.all=function(t){return new ct(function(e,n){var o=t.length,r=[];if(o)for(var i,c=function(t,n){o--,r[t]=n,0==o&&e(r)},a=function(t){n(t)},u=0;u<t.length;u++)i=t[u],lt(i,R(c,u),a);else e(r)})},ct.resolve=function(t){if(t instanceof ct)return t;var e=new ct(k);return ht(e,2,t),e},ct.reject=function(t){return new ct(function(e,n){n(t)})},ct.prototype.catch=ct.prototype.na;var At=ct;"undefined"!=typeof Promise&&(At=Promise);var Et=At,jt=function(t,e){var n=this;this.b=[],this.T=0,this.task=Et.resolve(),this.u=!1,this.J=e,this.task.then(function(){t(n)}).catch(function(t){n.error(t)})};jt.prototype.next=function(t){xt(this,function(e){e.next(t)})},jt.prototype.error=function(t){xt(this,function(e){e.error(t)}),this.close(t)},jt.prototype.complete=function(){xt(this,function(t){t.complete()}),this.close()},jt.prototype.subscribe=function(t,e,n){var o,r=this;if(void 0===t&&void 0===e&&void 0===n)throw Error("Missing Observer.");return o=i(t)?t:{next:t,error:e,complete:n},void 0===o.next&&(o.next=c),void 0===o.error&&(o.error=c),void 0===o.complete&&(o.complete=c),t=this.qa.bind(this,this.b.length),this.u&&this.task.then(function(){try{r.O?o.error(r.O):o.complete()}catch(t){}}),this.b.push(o),t},jt.prototype.qa=function(t){void 0!==this.b&&void 0!==this.b[t]&&(delete this.b[t],--this.T,0===this.T&&void 0!==this.J&&this.J(this))};var xt=function(t,e){if(!t.u)for(var n=0;n<t.b.length;n++)Ot(t,n,e)},Ot=function(t,e,n){t.task.then(function(){if(void 0!==t.b&&void 0!==t.b[e])try{n(t.b[e])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})};jt.prototype.close=function(t){var e=this;this.u||(this.u=!0,void 0!==t&&(this.O=t),this.task.then(function(){e.b=void 0,e.J=void 0}))};var St=Error.captureStackTrace,Tt=function(t,e){if(this.code=t,this.message=e,St)St(this,kt.prototype.create);else{var n=Error.apply(this,arguments);this.name="FirebaseError",Object.defineProperty(this,"stack",{get:function(){return n.stack}})}};Tt.prototype=Object.create(Error.prototype),Tt.prototype.constructor=Tt,Tt.prototype.name="FirebaseError";var kt=function(t,e,n){this.ja=t,this.ka=e,this.Z=n,this.pattern=/\{\$([^}]+)}/g};kt.prototype.create=function(t,e){void 0===e&&(e={});var n=this.Z[t];t=this.ja+"/"+t;var o,n=void 0===n?"Error":n.replace(this.pattern,function(t,n){return t=e[n],void 0!==t?t.toString():"<"+n+"?>"}),n=this.ka+": "+n+" ("+t+").",n=new Tt(t,n);for(o in e)e.hasOwnProperty(o)&&"_"!==o.slice(-1)&&(n[o]=e[o]);return n};var It=At,Nt=function(t,e,n){var r=this;this.P=n,this.S=!1,this.l={},this.I=e,this.fa=o(void 0,t),Object.keys(n.INTERNAL.factories).forEach(function(t){var e=n.INTERNAL.useAsService(r,t);null!==e&&(e=r.da.bind(r,e),r[t]=e)})};Nt.prototype.delete=function(){var t=this;return new It(function(e){Pt(t),e()}).then(function(){return t.P.INTERNAL.removeApp(t.I),It.all(Object.keys(t.l).map(function(e){return t.l[e].INTERNAL.delete()}))}).then(function(){t.S=!0,t.l={}})},Nt.prototype.da=function(t){return Pt(this),void 0===this.l[t]&&(this.l[t]=this.P.INTERNAL.factories[t](this,this.ca.bind(this))),this.l[t]},Nt.prototype.ca=function(t){o(this,t)};var Pt=function(t){t.S&&u(s("deleted",{name:t.I}))};f.Object.defineProperties(Nt.prototype,{name:{configurable:!0,enumerable:!0,get:function(){return Pt(this),this.I}},options:{configurable:!0,enumerable:!0,get:function(){return Pt(this),this.fa}}}),Nt.prototype.name&&Nt.prototype.options||Nt.prototype.delete||console.log("dc"),"undefined"!=typeof firebase&&(firebase=a())}(),firebase.SDK_VERSION="3.5.2";