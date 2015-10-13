/*!CK:2674155582!*//*1444133090,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["rHPql"]); }

__d('ServiceWorkerLoginAndLogout',['ClientServiceWorkerMessage'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){new h(k,null).sendViaController();}var j={login:function(){i('login');},logout:function(){i('logout');}};f.exports=j;},null);
__d('ServiceWorkerLoginAndLogoutListener',['Event','ServiceWorkerLoginAndLogout'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={listen:function(k,l){var m=function(){if(l==='login'){i.login();}else if(l==='logout'){i.logout();}else throw new Error('bad login type given');};h.listen(k,{click:m,submit:m});}};f.exports=j;},null);