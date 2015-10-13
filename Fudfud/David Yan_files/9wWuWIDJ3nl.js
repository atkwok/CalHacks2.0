/*!CK:502225674!*//*1442824036,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["EWDOr"]); }

__d('TickerReadStateTracking',['Style','clickRefAction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=73,k='ticker_hover',l=[];function m(o){if(!o)return null;var p=JSON.parse(o.getAttribute('data-ft'));if(!p)return null;if(p.mf_story_key)return p.mf_story_key;if(p.fbid)return p.fbid;return null;}function n(o){var p=m(o);if(!p||p in l)return;l[p]=true;var q={evt:j};i(k,o,null,'FORCE',{ft:q});}f.exports.log=n;},null);