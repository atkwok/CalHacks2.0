/*!CK:1768263778!*//*1444258367,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["wdoQm"]); }

__d('ComposerXEmptyAttachment',['ComposerXAttachment'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this);this._root=l;if(m)this.attachmentClassName=m;}k.prototype.getRoot=function(){'use strict';return this._root;};f.exports=k;},null);
__d('TimelineUnitSelector',['DOMQuery','csx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={getUnitsWithTime:function(k){return h.scry(k,"._5jmm[data-time]");}};f.exports=j;},null);
__d('TimelineComposerUtilities',['Event','Arbiter','Bootloader','CSS','DOM','DOMQuery','Parent','TimelineUnitSelector','Vector','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=86400*31,s=86400000,t={listenToSetEstimatedDate:function(u,v){return i.subscribe('ComposerXTimelineTagger/init',function(w,x){if(m.contains(u,x.datePickerElement)){t.setEstimatedDate(x.datePickerInstance,v());x.composerTimelineTagger.switchToTagger('date');}});},listenToPublish:function(u,v){if(u.root)u=u.root;return i.subscribe('composer/publish',function(event,w){if(w.composer_id===u.id)j.loadModules(["TimelineStoryPublisher"],function(x){x.publish(w);v&&v();});});},listenToAnotherComposerOpen:function(u,v){return i.subscribe('composer/mutate',function(w,x){if(x!==u)v();});},listenToCancel:function(u,v){return h.listen(u,'click',function(event){if(n.byClass(event.getTarget(),"_306"))v();});},setEstimatedDate:function(u,v){var w,x;if(v&&k.hasClass(v,'fbTimelineCapsule')){w=v.getAttribute('data-start');x=v.getAttribute('data-end');if(w&&x){var y=new Date(x*1000),z=new Date();if(y>z){u.setDate(z.getFullYear(),z.getMonth()+1,z.getDate());}else if(x-w>2*r){u.setDate(y.getFullYear());}else u.setDate(y.getFullYear(),y.getMonth()+1);}return;}var aa=n.byClass(v,'fbTimelineCapsule');if(aa){w=aa.getAttribute('data-start');x=aa.getAttribute('data-end');var ba=p.getElementPosition(v).y,ca=[x,null],da=[w,null],ea=o.getUnitsWithTime(aa);for(var fa=0;fa<ea.length;fa++){var ga=ea[fa],ha=l.scry(ga.parentNode,'.spinePointer')[0];if(!ha)continue;var ia=p.getElementPosition(ha).y;if(ia<=ba){if(!ca[1]||ia>ca[1])ca=[ga.getAttribute('data-time'),ia];}else if(!da[1]||ia<da[1])da=[ga.getAttribute('data-time'),ia];}if(ca[0]!==null&&da[0]!==null){var ja=Math.round((parseInt(ca[0],10)+parseInt(da[0],10))/2)*1000;ja=Math.min(new Date()-s,ja);u.setDateWithTimestamp(ja);}}}};f.exports=t;},null);
__d('TimelineStickyHeaderComposerX',['Arbiter','Bootloader','ComposerXController','CSS','DOMQuery','Event','Parent','Run','TimelineComposerUtilities','TimelineContentLoader','TimelineStickyHeader','Vector','csx','cx','getElementText','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x=800;function y(aa){return aa&&aa.getContext&&n.byClass(aa.getContext(),"_2wp");}function z(aa){'use strict';this._composerRoot=aa;this._tokens=[p.listenToSetEstimatedDate(this._composerRoot,q.capsuleForCurrentSection),p.listenToPublish(this._composerRoot,this._close.bind(this)),h.subscribe('PhotoSnowlift.OPEN',this._close.bind(this)),h.subscribe('TimelineMLE/mleFlyoutShown',(function(ba,ca){if(y(ca)===this._composerRoot)j.reset(this._composerRoot);}).bind(this)),h.subscribe('composer/initializedAttachment',(function(ba,ca){if(ca.composerRoot===this._composerRoot){this._registerClickToDismiss();if(!ca.isInitial)this._closeMLE();}else this._close();}).bind(this)),h.subscribe(r.ADJUST_WIDTH,this._toggleNarrowMode.bind(this))];this._clickCancelToken=p.listenToCancel(this._composerRoot,this._close.bind(this));o.onLeave((function(){while(this._tokens.length)this._tokens.pop().unsubscribe();this._clearClickDismissToken();if(this._clickCancelToken){this._clickCancelToken.remove();this._clickCancelToken=null;}}).bind(this));}z.prototype._toggleNarrowMode=function(event,aa){'use strict';if(this._isNarrowMode)return;i.loadModules(["Tooltip"],(function(ba){w((function(){this._isNarrowMode=s.getElementDimensions(aa).x+s.getElementDimensions(this._composerRoot).x>x;}).bind(this),(function(){if(!this._isNarrowMode)return;k.addClass(this._composerRoot,"_2wq");var ca=l.scry(this._composerRoot,"._9lb");for(var da=0;da<ca.length;da++){var ea=ca[da],fa=v(ea);ba.set(ea,fa);}}).bind(this));}).bind(this));return false;};z.prototype._registerClickToDismiss=function(){'use strict';var aa=k.hasClass(l.find(this._composerRoot,"._yq"),"_519b");if(!aa){this._clearClickDismissToken();return;}this._clickDismissToken=m.listen(document.body,'click',(function(ba){var ca=n.byClass(ba.getTarget(),"_2wp");if(!ca){this._close();this._clearClickDismissToken();}}).bind(this));};z.prototype._clearClickDismissToken=function(){'use strict';if(this._clickDismissToken){this._clickDismissToken.remove();this._clickDismissToken=null;}};z.prototype._close=function(){'use strict';this._clearClickDismissToken();this._closeMLE();j.reset(this._composerRoot);};z.prototype._closeMLE=function(){'use strict';i.loadModules(["TimelineMLE"],(function(aa){var ba=aa.getFlyout();if(y(ba)===this._composerRoot)aa.hideFlyout();}).bind(this));};f.exports=z;},null);