(this["webpackJsonpff14-party-helper-fe"]=this["webpackJsonpff14-party-helper-fe"]||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var o,c=n(0),r=n.n(c),a=n(23),s=Object(a.b)({name:"layout",initialState:{navigatedJustBefore:0},reducers:{navigated:function(e){e.navigatedJustBefore=e.navigatedJustBefore+1}}}),i=n(3),l=n(43);!function(e){e.EN="EN",e.KO="KO",e.JA="JA",e.ZH="ZH"}(o||(o={})),Object(l.a)("http://127.0.0.1");var d,u="ff14-party-helper:auth",j=localStorage.getItem(u),b=Object.assign({token:null,expiryAt:null},j?JSON.parse(j):{});Object(l.b)(Object.assign({Authorization:b.token,Lang:o.KO},d||{}));var O=Object(a.b)({name:"session",initialState:b,reducers:{signIn:function(e,t){e.token=t.payload.authToken.token,e.expiryAt=t.payload.authToken.expiryAt,localStorage.setItem(u,JSON.stringify(Object(i.a)(Object(i.a)({},e),{},{redirectTo:void 0}))),t.payload.redirectTo?document.location.href=t.payload.redirectTo:document.location.reload()},signOut:function(e){e.token=null,e.expiryAt=null,localStorage.removeItem(u),document.location.href="/"}}}),h=Object(a.a)({reducer:{layout:s.reducer,session:O.reducer}}),p=n(11),f=n.n(p),g=n(22),m=n(30),x=n(66),v=n(4),y=n(67),k=n(1),N=["session","authorizedOnly","denyRedirectTo","render","component"];function A(e){var t=e.session,n=e.authorizedOnly,o=e.denyRedirectTo,c=e.render,r=e.component,a=Object(m.a)(e,N),s=r,l=Object(g.b)(),d=!!(!0===n&&t&&t.token||!1===n&&(!t||!t.token)||void 0===n&&t&&t.token);return console.log("available :",d),console.log("render :",c),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(v.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return d?c?c(e):Object(k.jsxs)(k.Fragment,{children:[t&&t.token&&Object(k.jsx)(y.a,{api:Object(i.a)({},x.a.getUserInfo),loading:function(){return Object(k.jsx)("div",{className:"app-spinner"})},error:function(e){return"CREDENTIAL-INVALID"===(null===e||void 0===e?void 0:e.code)?(l(O.actions.signOut()),Object(k.jsx)(k.Fragment,{children:"\xa0"})):Object(k.jsxs)(k.Fragment,{children:["[",(null===e||void 0===e?void 0:e.code)||"UNKNOWN","] ",(null===e||void 0===e?void 0:e.message)||"An error has occurred."]})},render:function(e){return console.log(e),Object(k.jsx)(s,{})}},"static"),(!t||!t.token)&&Object(k.jsx)(s,{})]}):Object(k.jsx)(v.a,{to:{pathname:o,state:{from:e.location}}})}}))})}var I=n(24);function S(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"app-layout",children:Object(k.jsx)("div",{className:"app-fullpage",children:Object(k.jsxs)("div",{className:"app-content message",children:[Object(k.jsx)("i",{children:"sick"}),Object(k.jsx)("p",{children:"Page Not Found"}),Object(k.jsx)(I.b,{to:"/",children:"Go Home"})]})})})})}var T=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,154))})),w=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,153))}));var J=function(){var e=Object(g.c)().getState().session;return console.log("session :",e),Object(k.jsx)(I.a,{children:Object(k.jsx)("div",{className:"app-wrapper",children:Object(k.jsx)(c.Suspense,{fallback:Object(k.jsx)("div",{className:"suspense-loading",children:Object(k.jsx)("div",{className:"loading",children:Object(k.jsx)("div",{className:"loader"})})}),children:Object(k.jsxs)(v.d,{children:[Object(k.jsx)(v.b,{exact:!0,path:"/404",component:S}),Object(k.jsx)(A,{session:e,authorizedOnly:!1,path:"/auth",component:T}),Object(k.jsx)(A,{session:e,authorizedOnly:!0,denyRedirectTo:"/auth",path:"/",component:w}),Object(k.jsx)(v.a,{from:"*",to:"/404"})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(151);f.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(g.a,{store:h,children:Object(k.jsx)(J,{})})}),document.getElementById("root")),console&&console.log&&console.log("> ".concat("local")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o={getUserInfo:{method:"GET",url:"/user",reducer:function(e){return e},errReducer:function(e){return e}}}}},[[152,1,2]]]);
//# sourceMappingURL=main.8fba3e73.chunk.js.map