/*!CK:2614223067!*//*1444194450,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["1btoD"]); }

__d('ModuleErrorLogger',['Bootloader','ErrorUtils','ModuleDependencies','BanzaiScuba'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(o){if(!o||!o.length)return 0;return o.reduce(function(p,q){return p+q;})/o.length;}function m(o){if(!o)return [];var p=[];for(var q in o)p.push(o[q]);return p;}var n={init:function(){i.addListener(function(o){if(o.name!=='ModuleError')return;var p=j.getNotLoadedModules(),q=Object.keys(p.loading),r=m(h.getLoadingUrls()),s=m(h.getLoadedUrlTimes()),t={};p.missing.forEach(function(w){t[w]=1;});var u={};q.forEach(function(w){u[w]=1;});var v=new k('module_errors',null,{addAsnFields:true,addPredictedGeographyFields:true,addBrowserFields:true,addMobileDeviceFields:true,addPageFields:true,addUserFields:true});v.addInteger('missing_count',p.missing.length).addInteger('loading_count',q.length).addInteger('error_url_count',h.getErrorUrls().length).addTagset('missing_modules',t).addTagset('loading_modules',u).addInteger('mean_url_loading_time',Math.floor(l(r))).addInteger('mean_url_loaded_time',Math.floor(l(s))).post();},true);}};f.exports=n;},null);
__d('ScriptPathLogger',['Banzai','Map','ScriptPath','isInIframe'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='script_path_change',m={scriptPath:null,categoryToken:null,extraData:{}},n=false;function o(u,v,w){if(!n||k())return;var x=h.isEnabled('vital_navigations')?h.VITAL:h.BASIC,y={source_path:u.scriptPath,source_token:u.categoryToken,dest_path:v.scriptPath,dest_token:v.categoryToken,impression_id:v.extraData.imp_id,cause:w};if(u.scriptPath===null)y.referrer=document.referrer;var z=j.getClickPointInfo();if(z)y.click_point_info=z;if(u.extraData)for(var aa in u.extraData)y['source_'+aa]=u.extraData[aa];if(v.extraData)for(var ba in v.extraData)y['dest_'+ba]=v.extraData[ba];if(u.topViewEndpoint)y.source_endpoint=u.topViewEndpoint;if(v.topViewEndpoint)y.dest_endpoint=v.topViewEndpoint;if(u.restored)y.source_restored=true;h.post(l,y,x);j.setClickPointInfo(null);}function p(){o(j.getSourcePageInfo()||m,j.getPageInfo(),j.CAUSE.PAGE_LOAD);}function q(u,v){o(u,v,j.CAUSE.TRANSITION);}function r(){o(j.getPageInfo(),m,j.CAUSE.PAGE_UNLOAD);j.shutdown();}var s=j.subscribe(function(u){if(n){var v=u.source,w=u.dest,x=u.cause;if(x){o(v||m,w||m,x);}else if(v){q(v,w);}else p();}});h.subscribe(h.SHUTDOWN,r);var t={startLogging:function(){n=true;if(j.getPageInfo())p();},stopLogging:function(){n=false;j.unsubscribe(s);}};t.BANZAI_LOGGING_ROUTE=l;f.exports=t;},null);
__d('replaceNativeTimer',['clearInterval','clearTimeout','setInterval','setTimeout'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=false;function m(){if(!l){l=true;k.nativeBackup=b.setTimeout;i.nativeBackup=b.clearTimeout;j.nativeBackup=b.setInterval;h.nativeBackup=b.clearInterval;b.setTimeout=k;b.clearTimeout=i;b.setInterval=j;b.clearInterval=h;}}f.exports=m;},null);
__d('TimeSpentArray',['Banzai','pageID','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=2,l=k*32,m,n,o,p,q,r,s,t,u,v={},w;function x(){return {timeoutDelayMap:v,nextDelay:w,timeoutInSeconds:o};}function y(){if(m){var ga=Date.now();if(ga>q)s=Math.min(l,Math.ceil(ga/1000-p));var ha=da();if(ha)m(ha,w);}ca();}function z(){aa();n=j(y,o*1000);}function aa(){if(n){clearTimeout(n);n=null;}}function ba(ga){p=ga;q=p*1000;r=[1];for(var ha=1;ha<k;ha++)r.push(0);s=1;t+=1;u+=1;var ia=u.toString()+'_delay';w=v[ia];if(typeof w=='undefined')w=v.delay;var ja=u.toString()+'_timeout',ka=v[ja];if(typeof ka=='undefined')ka=v.timeout;ka=Math.min(ka,l);o=ka||l;z();}function ca(){aa();r=null;}function da(){if(!r)return null;return {tos_id:i,start_time:p,tos_array:r.slice(0),tos_len:s,tos_seq:u,tos_cum:t};}function ea(ga){if(ga>=q&&ga-q<1000)return;fa(Math.floor(ga/1000));}function fa(ga){var ha=ga-p;if(ha<0||ha>=l)y();if(!r){ba(ga);}else{r[ha>>5]|=1<<(ha&31);s=ha+1;t+=1;q=ga*1000;}}f.exports={init:function(ga,ha,ia){t=0;u=-1;m=ga;if(typeof ha=='object'&&ha!==null){v=ha;}else v={};if(!ia)ia=Date.now();ba(Math.floor(ia/1000));h.subscribe(h.SHUTDOWN,y);},update:function(ga){ea(ga);},get:function(){return da();},ship:function(){y();},reset:function(){ca();},testState:function(){return x();}};},null);
__d('TimeSpentImmediateActiveSecondsLogger',['Banzai','ImmediateActiveSecondsConfig','ScriptPath'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k='immediate_active_seconds',l={signal:true,retry:true},m=i.sampling_rate,n=i.ias_bucket,o=0;function p(t){if(m<=0)return false;var u=Math.floor(t/1000)%m;return u===n;}function q(t){if(t>=o&&t-o<1000)return;if(p(t)){var u={activity_time_ms:t,last_activity_time_ms:o,script_path:j.getTopViewEndpoint()};try{h.post(k,u,l);}catch(v){}}o=Math.floor(t/1000)*1000;}function r(event,t,u){if(v<0||w<0||v>w)return;var v=Math.floor(t/1000),w=Math.floor(u/1000);if(!s(v,w))return;var x={event:event,start_time_ms:t,end_time_ms:u};h.post(k,x,l);}function s(t,u){if(m<=0)return false;if(u-t>=m)return true;var v=t+(n-t%m+m)%m;return v<=u;}f.exports={maybeReportActiveSecond:q,maybeReportActiveInterval:r};},null);
__d('QuicklingAugmenter',['URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=[],j={addHandler:function(k){i.push(k);},augmentURI:function(k){var l=[],m=new h(k);i.forEach(function(n){var o=n(m);if(!o)return m;l.push(n);m=m.addQueryData(o);});i=l;return m;}};f.exports=j;},null);
__d('Quickling',['AjaxPipeRequest','Arbiter','CSSClassTransition','DocumentTitle','DOM','HTML','PageHooks','PageEvents','PageTransitionsRegistrar','QuicklingAugmenter','QuicklingConfig','Run','URI','UserAgent_DEPRECATED','PHPQuerySerializer','TimerStorage','cancelAnimationFrame','clearImmediate','clearInterval','clearTimeout','goOrReplace','isEmpty','replaceNativeTimer','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){if(c.__markCompiled)c.__markCompiled();var fa,ga,ha;ea('PageTransitions',function(ua){ha=ua;});var ia=r.version,ja=r.sessionLength,ka=new RegExp(r.inactivePageRegex),la=0,ma,na='',oa={isActive:function(){return true;},isPageActive:function(ua){if(ua=='#')return false;ua=new t(ua);if(ua.getDomain()&&ua.getDomain()!=new t(window.location.href).getDomain())return false;if(ua.getPath()=='/l.php'){var va=ua.getQueryData().u;if(va){va=new t(unescape(va)).getDomain();if(va&&va!=new t(window.location.href).getDomain())return false;}}var wa=ua.getPath(),xa=ua.getQueryData();if(!ca(xa))wa+='?'+v.serialize(xa);return !ka.test(wa);},getLoadCount:function(){return la;}};function pa(ua){ua=ua||'Facebook';k.set(ua);if(u.ie()){na=ua;if(!ma)ma=window.setInterval(function(){var va=na,wa=k.get();if(va!=wa)k.set(va);},5000,false);}}function qa(ua){var va=document.getElementsByTagName('link');for(var wa=0;wa<va.length;++wa){if(va[wa].rel!='alternate')continue;l.remove(va[wa]);}if(ua.length){var xa=l.find(document,'head');xa&&l.appendContent(xa,m(ua[0]));}}fa=babelHelpers.inherits(ra,h);ga=fa&&fa.prototype;function ra(ua){'use strict';var va={version:ia};ga.constructor.call(this,ua,{quickling:va});this._isQuickling=true;}ra.prototype._preBootloadFirstResponse=function(ua){'use strict';return true;};ra.prototype._fireDomContentCallback=function(){'use strict';this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');if(ha)ha.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);ga._fireDomContentCallback.call(this);};ra.prototype._fireOnloadCallback=function(){'use strict';if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}ga._fireOnloadCallback.call(this);};ra.prototype.isPageActive=function(ua){'use strict';return oa.isPageActive(ua);};ra.prototype._versionCheck=function(ua){'use strict';if(ua.version==ia)return true;var va=['quickling','ajaxpipe','ajaxpipe_token'];ba(window.location,new t(ua.uri).removeQueryData(va),true);return false;};ra.prototype._processFirstResponse=function(ua){'use strict';var va=ua.getPayload();pa(va.title);qa(va.syndication||[]);window.scrollTo(0,0);j.go(document.body,va.body_class||'',ha.getMostRecentURI(),ua.getRequest().getURI());i.inform('quickling/response');};ra.prototype.getSanitizedParameters=function(){'use strict';return ['quickling'];};function sa(){la++;return la>=ja;}function ta(ua){h.setCurrentRequest(null);if(sa())return false;ua=q.augmentURI(ua);if(!oa.isPageActive(ua))return false;w.popAll(w.TIMEOUT,aa);w.popAll(w.INTERVAL,z);w.popAll(w.IMMEDIATE,y);w.popAll(w.ANIMATION_FRAME,x);window.ExitTime=Date.now();s.__removeHook(n.ONLOAD_HOOK);s.__removeHook(n.DOMREADY_HOOK);n.runHooks('onleavehooks');i.inform(o.AJAXPIPE_ONUNLOAD,true);new ra(ua).setCanvasId('content').send();var va=window.__bodyWrapper;if(va.getCodeUsage)va.clearCodeUsage();return true;}da();s.onAfterLoad(function ua(){p.registerHandler(ta,1);});f.exports=b.Quickling=oa;},null);
__d('StringTransformations',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={unicodeEscape:function(h){return h.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(i){var j=i.charCodeAt().toString(16);return '\\u'+('0000'+j.toUpperCase()).slice(-4);});},unicodeUnescape:function(h){return h.replace(/(\\u[0-9A-Fa-f]{4})/g,function(i){return String.fromCharCode(parseInt(i.slice(2),16));});}};},null);
__d('NavigationClickPointHandler',['Event','ScriptPath','collectDataAttributes'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={getClickPointInfo:function(m){var n=null,o=j(m,['ft'],['href','data-click']),p=o.normal.href;if(!p||p==='#')return false;var q=o.normal['data-click'];if(n===null&&q)n={click:q};var r=o.ft.tn;if(n===null&&r)n={tn:r};if(n===null&&m.getAttribute){var s=m.getAttribute('class');if(s)n={'class':s};}return n;}};function l(event){var m=event.target||event.srcElement,n=k.getClickPointInfo(m);if(n!==false)i.setClickPointInfo(n);}h.listen(document.documentElement,{click:l});f.exports=k;},null);
__d("XWebStorageLoggingAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/webstorage\/process_keys\/",{});},null,{});
__d('WebStorageMonster',['Event','AsyncRequest','UserActivity','StringTransformations','WebStorage','XWebStorageLoggingAsyncController','arrayContains','isEmpty','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=300000,r=false;function s(x){var y={};for(var z in x){var aa=x.getItem(z),ba=k.unicodeEscape(z);if(typeof aa==='string')y[ba]=aa.length;}return y;}function t(x){var y=l.getLocalStorage();if(!y||!x.keys)return;w._getLocalStorageKeys().forEach(function(z){if(n(x.keys,z))y.removeItem(z);});}function u(x){var y=l.getLocalStorage();if(y)w._getLocalStorageKeys().forEach(function(aa){if(!x.some(function(ba){return new RegExp(ba).test(aa);}))y.removeItem(aa);});var z=l.getSessionStorage();if(z)z.clear();}function v(x){if(j.isActive(q)){p(v.bind(null,x),q);}else w.cleanNow(x);}var w={registerLogoutForm:function(x,y){h.listen(x,'submit',function(z){w.cleanOnLogout(y);});},schedule:function(x){if(r)return;r=true;v(x);},cleanNow:function(x){var y=Date.now(),z={},aa=l.getLocalStorage();if(aa)z.local_storage=s(aa);var ba=l.getSessionStorage();if(ba)z.session_storage=s(ba);var ca=!o(z),da=Date.now();z.logtime=da-y;if(ca){var ea=m.getURIBuilder().getURI();new i(ea).setData(z).setHandler((function(fa){if(!x){var ga=fa.getPayload();if(ga.keys)ga.keys=ga.keys.map(k.unicodeUnescape);t(ga);}}).bind(this)).send();}},cleanOnLogout:function(x){if(x)u(x);var y=l.getSessionStorage();if(y)y.clear();},_getLocalStorageKeys:function(){var x=l.getLocalStorage();return x?Object.keys(x):[];}};f.exports=w;},null);