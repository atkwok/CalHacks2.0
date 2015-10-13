/*!CK:2876318281!*//*1444172835,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["lF0FY"]); }

__d("CreditCardFormParam",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance"};},null,{});
__d('TreeMap',['Map','nullthrows'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();function j(x,y,z){this.key=x;this.value=y;this.time=z;}function k(x){this.$TreeMap1=function(y,z){var aa=x(y,z);return aa!==0?aa:y.time-z.time;};this.$TreeMap2=new h();this.$TreeMap3=null;this.$TreeMap4=0;this.size=this.$TreeMap2.size;}k.prototype.clear=function(){this.$TreeMap2=new h();this.$TreeMap3=null;this.size=this.$TreeMap2.size;};k.prototype.has=function(x){return this.$TreeMap2.has(x);};k.prototype.set=function(x,y){if(this.has(x))this['delete'](x);var z=new j(x,y,this.$TreeMap4++);this.$TreeMap2.set(x,z);this.$TreeMap3=r(this.$TreeMap3,z,this.$TreeMap1);this.size=this.$TreeMap2.size;return this;};k.prototype.get=function(x){return this.has(x)?this.$TreeMap2.get(x).value:undefined;};k.prototype['delete']=function(x){if(!this.has(x))return false;var y=this.$TreeMap2.get(x);this.$TreeMap3=s(this.$TreeMap3,y,this.$TreeMap1);this.$TreeMap2['delete'](x);this.size=this.$TreeMap2.size;return true;};k.prototype.keys=function(){var x=[];w(this.$TreeMap3,x,function(y){return y.key;});return x;};k.prototype.values=function(){var x=[];w(this.$TreeMap3,x,function(y){return y.value;});return x;};k.prototype.entries=function(){var x=[];w(this.$TreeMap3,x,function(y){return {key:y.key,value:y.value};});return x;};k.prototype.range=function(x,y){var z=[],aa=null;if(x)aa=new j(x.key,x.value,-1);var ba=null;if(y)ba=new j(y.key,y.value,this.$TreeMap4);w(this.$TreeMap3,z,function(ca){return {key:ca.key,value:ca.value};},this.$TreeMap1,aa,ba);return z;};k.prototype.min=function(){if(!this.$TreeMap3)return undefined;var x=t(i(this.$TreeMap3)),y=x.key,z=x.value;return {key:y,value:z};};k.prototype.max=function(){if(!this.$TreeMap3)return undefined;var x=u(i(this.$TreeMap3)),y=x.key,z=x.value;return {key:y,value:z};};k.prototype.__testRoot=function(){};function l(x){if(!x)return x;q(x);if(x.balanceFactor<-1){if(x.right&&x.right.balanceFactor<=0){return m(x);}else return n(x);}else if(x.balanceFactor>1){if(x.left&&x.left.balanceFactor>=0){return o(x);}else return p(x);}else return x;}function m(x){var y=x,z=i(y.right),aa=z.left;y.right=aa;q(y);i(z).left=y;q(z);return z;}function n(x){var y=x,z=i(y.right),aa=i(z.left),ba=aa.left,ca=aa.right;y.right=ba;q(y);z.left=ca;q(z);aa=i(aa);aa.left=y;aa.right=z;q(aa);return aa;}function o(x){var y=x,z=i(y.left),aa=z.right;y.left=aa;q(y);z.right=y;q(z);return z;}function p(x){var y=x,z=i(y.left),aa=i(z.right),ba=aa.left,ca=aa.right;z.right=ba;q(z);y.left=ca;q(y);aa.left=z;aa.right=y;q(aa);return aa;}function q(x){var y=x.left?x.left.height:-1,z=x.right?x.right.height:-1;x.height=Math.max(y,z)+1;x.balanceFactor=y-z;}function r(x,y,z){if(x==null)return l(y);var aa=z(y,x);if(aa<0){x.left=r(x.left,y,z);return l(x);}else{x.right=r(x.right,y,z);return l(x);}}function s(x,y,z){if(x==null)return null;if(x===y)if(x.left&&x.right){var aa=u(x.left);x.left=v(x.left);aa.left=x.left;aa.right=x.right;return l(aa);}else if(x.left){return l(x.left);}else if(x.right){return l(x.right);}else return null;var ba=z(y,x);if(ba<0){x.left=s(x.left,y,z);return l(x);}else{x.right=s(x.right,y,z);return l(x);}}function t(x){while(x.left)x=x.left;return x;}function u(x){while(x.right)x=x.right;return x;}function v(x){if(!x)return null;if(x.right==null)return l(x.left||null);x.right=v(x.right);return l(x);}function w(x,y,z,aa,ba,ca){if(x==null)return;var da=!aa||!ba||aa(x,ba)>=0,ea=!aa||!ca||aa(x,ca)<=0;if(da)w(x.left,y,z,aa,ba,ca);if(da&&ea)y.push(z(x));if(ea)w(x.right,y,z,aa,ba,ca);}f.exports=k;},null);
__d('Cache',['DateConsts','Map','TreeMap'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(){this.$Cache1=new i();}k.prototype.has=function(l){return this.$Cache1.has(l);};k.prototype.get=function(l,m){var n=this.__getRaw(l);if(!n)return m;return n.$Cache2;};k.prototype.getAll=function(l,m){var n=new i();l.forEach((function(o){return n.set(o,this.get(o,m));}).bind(this));return n;};k.prototype['delete']=function(l){var m=this.__getRaw(l);if(m&&m.$Cache3)clearTimeout(m.$Cache3);return this.$Cache1['delete'](l);};k.prototype.clear=function(){this.$Cache1.forEach(function(l){if(l&&l.$Cache3)clearTimeout(l.$Cache3);});this.$Cache1.clear();};k.prototype.set=function(l,m,n,o){if(!this.shouldUpdate(l,n))return false;var p=this.__getRaw(l);if(!p)p=this.__getNewRawObject();delete p.$Cache2;delete p.$Cache4;if(p.$Cache3)clearTimeout(p.$Cache3);delete p.$Cache3;p.$Cache2=m;if(n!=null)p.$Cache4=n;if(o!=null&&o>=0)p.$Cache3=setTimeout(this['delete'].bind(this,l),o*h.MS_PER_SEC*h.SEC_PER_MIN);this.__setRaw(l,p);return true;};k.prototype.shouldUpdate=function(l,m){var n=this.__getRaw(l);return (n==null||n.$Cache4==null||m==null||m>n.$Cache4);};k.prototype.size=function(){return this.$Cache1.size;};k.prototype.__getRaw=function(l){return this.$Cache1.get(l);};k.prototype.__setRaw=function(l,m){this.$Cache1.set(l,m);};k.prototype.__getNewRawObject=function(){return {$Cache2:null,$Cache3:null,$Cache4:null,$Cache5:null,$Cache6:null};};k.prototype.__keys=function(){return this.$Cache1.keys();};f.exports=k;},null);
__d('md5',['str2rstr'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(v,w){var x=v[0],y=v[1],z=v[2],aa=v[3];x=k(x,y,z,aa,w[0],7,-680876936);aa=k(aa,x,y,z,w[1],12,-389564586);z=k(z,aa,x,y,w[2],17,606105819);y=k(y,z,aa,x,w[3],22,-1044525330);x=k(x,y,z,aa,w[4],7,-176418897);aa=k(aa,x,y,z,w[5],12,1200080426);z=k(z,aa,x,y,w[6],17,-1473231341);y=k(y,z,aa,x,w[7],22,-45705983);x=k(x,y,z,aa,w[8],7,1770035416);aa=k(aa,x,y,z,w[9],12,-1958414417);z=k(z,aa,x,y,w[10],17,-42063);y=k(y,z,aa,x,w[11],22,-1990404162);x=k(x,y,z,aa,w[12],7,1804603682);aa=k(aa,x,y,z,w[13],12,-40341101);z=k(z,aa,x,y,w[14],17,-1502002290);y=k(y,z,aa,x,w[15],22,1236535329);x=l(x,y,z,aa,w[1],5,-165796510);aa=l(aa,x,y,z,w[6],9,-1069501632);z=l(z,aa,x,y,w[11],14,643717713);y=l(y,z,aa,x,w[0],20,-373897302);x=l(x,y,z,aa,w[5],5,-701558691);aa=l(aa,x,y,z,w[10],9,38016083);z=l(z,aa,x,y,w[15],14,-660478335);y=l(y,z,aa,x,w[4],20,-405537848);x=l(x,y,z,aa,w[9],5,568446438);aa=l(aa,x,y,z,w[14],9,-1019803690);z=l(z,aa,x,y,w[3],14,-187363961);y=l(y,z,aa,x,w[8],20,1163531501);x=l(x,y,z,aa,w[13],5,-1444681467);aa=l(aa,x,y,z,w[2],9,-51403784);z=l(z,aa,x,y,w[7],14,1735328473);y=l(y,z,aa,x,w[12],20,-1926607734);x=m(x,y,z,aa,w[5],4,-378558);aa=m(aa,x,y,z,w[8],11,-2022574463);z=m(z,aa,x,y,w[11],16,1839030562);y=m(y,z,aa,x,w[14],23,-35309556);x=m(x,y,z,aa,w[1],4,-1530992060);aa=m(aa,x,y,z,w[4],11,1272893353);z=m(z,aa,x,y,w[7],16,-155497632);y=m(y,z,aa,x,w[10],23,-1094730640);x=m(x,y,z,aa,w[13],4,681279174);aa=m(aa,x,y,z,w[0],11,-358537222);z=m(z,aa,x,y,w[3],16,-722521979);y=m(y,z,aa,x,w[6],23,76029189);x=m(x,y,z,aa,w[9],4,-640364487);aa=m(aa,x,y,z,w[12],11,-421815835);z=m(z,aa,x,y,w[15],16,530742520);y=m(y,z,aa,x,w[2],23,-995338651);x=n(x,y,z,aa,w[0],6,-198630844);aa=n(aa,x,y,z,w[7],10,1126891415);z=n(z,aa,x,y,w[14],15,-1416354905);y=n(y,z,aa,x,w[5],21,-57434055);x=n(x,y,z,aa,w[12],6,1700485571);aa=n(aa,x,y,z,w[3],10,-1894986606);z=n(z,aa,x,y,w[10],15,-1051523);y=n(y,z,aa,x,w[1],21,-2054922799);x=n(x,y,z,aa,w[8],6,1873313359);aa=n(aa,x,y,z,w[15],10,-30611744);z=n(z,aa,x,y,w[6],15,-1560198380);y=n(y,z,aa,x,w[13],21,1309151649);x=n(x,y,z,aa,w[4],6,-145523070);aa=n(aa,x,y,z,w[11],10,-1120210379);z=n(z,aa,x,y,w[2],15,718787259);y=n(y,z,aa,x,w[9],21,-343485551);v[0]=t(x,v[0]);v[1]=t(y,v[1]);v[2]=t(z,v[2]);v[3]=t(aa,v[3]);}function j(v,w,x,y,z,aa){w=t(t(w,v),t(y,aa));return t(w<<z|w>>>32-z,x);}function k(v,w,x,y,z,aa,ba){return j(w&x|~w&y,v,w,z,aa,ba);}function l(v,w,x,y,z,aa,ba){return j(w&y|x&~y,v,w,z,aa,ba);}function m(v,w,x,y,z,aa,ba){return j(w^x^y,v,w,z,aa,ba);}function n(v,w,x,y,z,aa,ba){return j(x^(w|~y),v,w,z,aa,ba);}function o(v){var w=v.length,x=[1732584193,-271733879,-1732584194,271733878],y;for(y=64;y<=v.length;y+=64)i(x,p(v.substring(y-64,y)));v=v.substring(y-64);var z=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(y=0;y<v.length;y++)z[y>>2]|=v.charCodeAt(y)<<((y&3)<<3);z[y>>2]|=128<<((y&3)<<3);if(y>55){i(x,z);for(y=0;y<16;y++)z[y]=0;}z[14]=w*8;i(x,z);return x;}function p(v){var w=[],x=0;while(x<64)w[x>>2]=v.charCodeAt(x++)|v.charCodeAt(x++)<<8|v.charCodeAt(x++)<<16|v.charCodeAt(x++)<<24;return w;}var q='0123456789abcdef'.split('');function r(v){var w='',x=0;for(;x<4;x++)w+=q[v>>(x<<3)+4&15]+q[v>>(x<<3)&15];return w;}function s(v){for(var w=0;w<v.length;w++)v[w]=r(v[w]);return v.join('');}var t=function(v,w){return v+w&4294967295;};function u(v){if(null===v||undefined===v){return null;}else{for(var w=0;w<v.length;w++)if(v[w]>"\u007F"){v=h(v);break;}return s(o(v));}}if(u('hello')!='5d41402abc4b2a76b9719d911017c592')t=function(v,w){var x=(v&65535)+(w&65535),y=(v>>16)+(w>>16)+(x>>16);return y<<16|x&65535;};f.exports=u;},null);
__d('StoreAndPropBasedStateMixin',['StoreBasedStateMixinHelper','invariant','setImmediate'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=(function(){for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];return {getInitialState:function(){return this.constructor.calculateState(this.props);},componentWillMount:function(){!this.constructor.calculateState?i(0):undefined;this._recalculateStateID=null;var o=(function(){if(this.isMounted())this.setState(this.constructor.calculateState(this.props));this._recalculateStateID=null;}).bind(this);this._mixin=new h(m);this._mixin.subscribeCallback((function(){if(this._recalculateStateID===null)this._recalculateStateID=j(o);}).bind(this));},componentWillReceiveProps:function(o){this.setState(this.constructor.calculateState(o));},componentWillUnmount:function(){this._mixin.release();this._mixin=null;}};}).bind(this);f.exports=k;},null);
__d('PaymentTokenProxyUtils',['URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getURI:function(j){var k=new h('/ajax/payment/token_proxy.php').setDomain(window.location.hostname).setProtocol('https').addQueryData(j),l=k.getDomain().split('.');if(l.indexOf('secure')<0){l.splice(1,0,'secure');k.setDomain(l.join('.'));}return k;}};f.exports=i;},null);
__d('WaterfallIDGenerator',['CurrentUser','md5'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(){var m=2147483647;return Math.random()*m;}function k(){return Math.floor(Date.now()/1000);}var l={generate:function(){return i([h.getID(),k(),j()].join(':'));}};f.exports=l;},null);
__d('FBRTCCallabilityActions',['keyMirror'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h({CALLABILITY_FETCHED:null,CALLABILITY_FETCH_ERROR:null});function j(k){this.$FBRTCCallabilityActions1=k;}j.prototype.callabilityFetched=function(k,l){this.$FBRTCCallabilityActions1.dispatch({type:i.CALLABILITY_FETCHED,userID:k,callability:l});};j.prototype.callabilityFetchError=function(k){this.$FBRTCCallabilityActions1.dispatch({type:i.CALLABILITY_FETCH_ERROR,userID:k});};j.Types=i;f.exports=j;},null);
__d("XRTCCallabilityController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/rtc\/callability\/",{user_id:{type:"Int",required:true}});},null,{});
__d('FBRTCCallabilityDataManager',['AsyncRequest','FBRTCCallabilityActions','XRTCCallabilityController'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(l){this.$FBRTCCallabilityDataManager1=new i(l);}k.prototype.fetchCallability=function(l){var m=j.getURIBuilder().setInt('user_id',parseInt(l,10)).getURI(),n=this.$FBRTCCallabilityDataManager2.bind(this,l),o=this.$FBRTCCallabilityDataManager3.bind(this,l);new h().setURI(m).setHandler(n).setErrorHandler(o).setAllowCrossPageTransition(true).send();};k.prototype.$FBRTCCallabilityDataManager2=function(l,m){this.$FBRTCCallabilityDataManager1.callabilityFetched(l,m.payload);};k.prototype.$FBRTCCallabilityDataManager3=function(l,m){this.$FBRTCCallabilityDataManager1.callabilityFetchError(l);};f.exports=k;},null);
__d('RTCCallabilityStore',['Cache','FBRTCAvailability','FluxStore','FBRTCCallabilityActions','FBRTCCallabilityDataManager','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n,o;'use strict';var p=.5,q=5;n=babelHelpers.inherits(r,j);o=n&&n.prototype;function r(s){o.constructor.call(this,s);this.$RTCCallabilityStore1=new l(s);this.$RTCCallabilityStore2=new h();}r.prototype.__onDispatch=function(s){var t=s.type;switch(t){case k.Types.CALLABILITY_FETCHED:var u=s.userID,v=s.callability;this.$RTCCallabilityStore2.set(u,v.is_callable,null,v.is_callable?q:p);this.__emitChange();break;case k.Types.CALLABILITY_FETCH_ERROR:this.$RTCCallabilityStore2.set(s.userID,false,null,p);this.__emitChange();break;}};r.prototype.isCallable=function(s){if(i.isCallable(s))return true;if(!this.$RTCCallabilityStore2.has(s)){this.$RTCCallabilityStore1.fetchCallability(s);this.$RTCCallabilityStore2.set(s,false,null,p);}return !!this.$RTCCallabilityStore2.get(s);};r.prototype.callButtonTooltip=function(s,t){if(this.isCallable(s))return m._("Start a video call with {shortname}",[m.param('shortname',t)]);return m._("{shortname} is currently unavailable for video calling",[m.param('shortname',t)]);};r.prototype.voiceCallButtonTooltip=function(s,t){if(this.isCallable(s))return m._("Start a voice call with {shortname}",[m.param('shortname',t)]);return m._("{shortname} is currently unavailable for voice calling",[m.param('shortname',t)]);};f.exports=r;},null);
__d('FBRTCCallabilityStore',['FBRTCDispatcher','RTCCallabilityStore'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=new i(h);},null);