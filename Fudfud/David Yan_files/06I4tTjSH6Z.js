/*!CK:852433119!*//*1444192880,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8vpVP"]); }

__d('EntStreamGroupMall',['DOM','$','ge'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={replacePager:function(l){h.setContent(i('pagelet_group_pager'),l);},replaceFilesPager:function(l,m){h.setContent(i('group_files_pager_'+m),l);},replacePostApprovalSection:function(l){var m=j('pagelet_consolidate_posts');if(m!==null)h.setContent(m,l);}};f.exports=k;},null);
__d('GroupViewportTracking',['DOM','csx','ViewportTracking','Banzai','$'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;m=babelHelpers.inherits(o,j);n=m&&m.prototype;o.prototype.getDataFromConfig=function(p){'use strict';this.timeout=p.record_delay;};o.prototype.getTimeout=function(){'use strict';return this.timeout;};o.prototype.getAllStories=function(){'use strict';return h.scry(l('pagelet_group_mall'),"._5pat");};o.prototype.getStoryID=function(p){'use strict';var q=JSON.parse(p.getAttribute('data-ft'));return q.mf_story_key;};o.prototype.getDataToLog=function(p){'use strict';return JSON.parse(p.getAttribute('data-ft'));};o.prototype.sendDataToLog=function(p,q){'use strict';if(this.useBanzai)k.post('group_feed_tracking',q);};function o(){'use strict';m.apply(this,arguments);}f.exports.init=function(p){o.instance=new o();o.instance.init(p);};f.exports.getInstance=function(){return o.instance;};},null);
__d('ReactComposerFileAttachmentSelector.react',['ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComponentWithPureRenderMixin','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'ReactComposerFileAttachmentSelector',mixins:[j],propTypes:{label:n.string},getDefaultProps:function(){return {label:l._("Add File")};},render:function(){return (k.createElement(h,{attachmentID:i.FILE,label:this.props.label,icon:m('/images/litestand/composer/icons/addfile.png')}));}});f.exports=o;},null);
__d("XReactComposerFileAttachmentBootstrapController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/file\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});},null,{});
__d('ReactComposerFileLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','XReactComposerFileAttachmentBootstrapController','ActorURI','Bootloader','React'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=m.createClass({displayName:'ReactComposerFileLazyAttachment',mixins:[i],statics:{attachmentID:h.FILE},bootload:function(o){if(this.props.bootload){this.props.bootload(o);}else l.loadModules(["ReactComposerFileAttachment.react"],o);},getBootstrapURI:function(){return k.create(j.getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setInt('target_id',this.context.targetID).getURI(),this.context.actorID);}});f.exports=n;},null);
__d('ReactComposerQuestionAttachmentSelector.react',['ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComponentWithPureRenderMixin','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'ReactComposerQuestionAttachmentSelector',mixins:[j],propTypes:{label:n.string},getDefaultProps:function(){return {label:l._("Ask Question")};},render:function(){return (k.createElement(h,{attachmentID:i.QUESTION,label:this.props.label,icon:m('/images/litestand/composer/icons/questions.png')}));}});f.exports=o;},null);
__d("XReactComposerQuestionAttachmentBootstrapController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/question\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true}});},null,{});
__d('ReactComposerQuestionLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','XReactComposerQuestionAttachmentBootstrapController','ActorURI','Bootloader','React'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=m.createClass({displayName:'ReactComposerQuestionLazyAttachment',mixins:[i],statics:{attachmentID:h.QUESTION},bootload:function(o){if(this.props.bootload){this.props.bootload(o);}else l.loadModules(["ReactComposerQuestionAttachmentContainer.react"],o);},getBootstrapURI:function(){return k.create(j.getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setString('target_id',this.context.targetID).getURI(),this.context.actorID);}});f.exports=n;},null);
__d('ReactComposerSellActionType',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h({CLEAR_LOCATION:null,POST_BUTTON_ENABLED:null,SAVE_CATEGORY:null,SAVE_LOCATION:null,SAVE_PICKUP_NOTE:null,SAVE_PRICE:null,SAVE_TITLE:null,SET_SELL_CONFIG:null,REGISTER_COMPOSER:null,TOGGLE_NEARBY_LOCATION_CHECKED:null,POST_TO_MARKETPLACE_SEEN:null});},null);
__d('ReactComposerSellStore',['ReactComposerSellActionType','ReactComposerStoreBase','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l,m=100,n=9;k=babelHelpers.inherits(o,i);l=k&&k.prototype;function o(){'use strict';var p;l.constructor.call(this,function(){return {categories:[],locationID:'',nearbyLocationChecked:false,nearbyLocationName:'',savedCategoryID:null,savedCategoryText:j._("Select a Category"),showPostNearby:false,showSelectableLocation:false,hideLocationField:false,title:'',pickupNote:'',price:''};},function(q){switch(q.type){case h.CLEAR_LOCATION:p&&p.$ReactComposerSellStore1(q);break;case h.SAVE_CATEGORY:p&&p.$ReactComposerSellStore2(q);break;case h.SAVE_LOCATION:p&&p.$ReactComposerSellStore3(q);break;case h.SAVE_PICKUP_NOTE:p&&p.$ReactComposerSellStore4(q);break;case h.SAVE_PRICE:p&&p.$ReactComposerSellStore5(q);break;case h.SAVE_TITLE:p&&p.$ReactComposerSellStore6(q);break;case h.SET_SELL_CONFIG:p&&p.$ReactComposerSellStore7(q);break;case h.TOGGLE_NEARBY_LOCATION_CHECKED:p&&p.$ReactComposerSellStore8(q);break;}});p=this;}o.prototype.isPostButtonEnabled=function(p){'use strict';var q=this.getComposerData(p);return !!(q.title.length&&q.price.length&&(!q.categories.length||q.savedCategoryID));};o.prototype.getCategories=function(p){'use strict';return this.getComposerData(p).categories;};o.prototype.getCategoryID=function(p){'use strict';return this.getComposerData(p).savedCategoryID;};o.prototype.getCategoryText=function(p){'use strict';return this.getComposerData(p).savedCategoryText;};o.prototype.getCurrencySymbol=function(p){'use strict';return this.getComposerData(p).currency;};o.prototype.getLocationID=function(p){'use strict';return this.getComposerData(p).locationID;};o.prototype.getNearbyLocationName=function(p){'use strict';return this.getComposerData(p).nearbyLocationName;};o.prototype.getMaxCharactersForPrice=function(p){'use strict';return n;};o.prototype.getMaxCharactersForPickupNote=function(p){'use strict';return m;};o.prototype.getMaxCharactersForTitle=function(p){'use strict';return m;};o.prototype.getPickupNoteText=function(p){'use strict';return this.getComposerData(p).pickupNote;};o.prototype.getPrice=function(p){'use strict';return this.getComposerData(p).price;};o.prototype.getTitleText=function(p){'use strict';return this.getComposerData(p).title;};o.prototype.isCategorySelected=function(p){'use strict';return !!this.getComposerData(p).savedCategoryID;};o.prototype.isNearbyLocationChecked=function(p){'use strict';return this.getComposerData(p).nearbyLocationChecked;};o.prototype.isPostNearbyEnabled=function(p){'use strict';return !!this.getComposerData(p).showPostNearby;};o.prototype.isSelectableLocationEnabled=function(p){'use strict';return this.getComposerData(p).showSelectableLocation;};o.prototype.isLocationFieldHidden=function(p){'use strict';return this.getComposerData(p).hideLocationField;};o.prototype.$ReactComposerSellStore1=function(p){'use strict';var q=this.validateAction(p,'composerID'),r=this.getComposerData(q);r.locationID=r.pickupNote='';this.emitChange(q);};o.prototype.$ReactComposerSellStore2=function(p){'use strict';var q=this.validateAction(p,['composerID','categoryID','categoryText']),r=q[0],s=q[1],t=q[2],u=this.getComposerData(r);u.savedCategoryID=s;u.savedCategoryText=t;this.emitChange(r);};o.prototype.$ReactComposerSellStore3=function(p){'use strict';var q=this.validateAction(p,['composerID','locationID','locationText']),r=q[0],s=q[1],t=q[2],u=this.getComposerData(r);u.locationID=s;u.pickupNote=t;this.emitChange(r);};o.prototype.$ReactComposerSellStore4=function(p){'use strict';var q=this.validateAction(p,['composerID','pickupNote']),r=q[0],s=q[1],t=this.getComposerData(r);t.pickupNote=s.substring(0,m);this.emitChange(r);};o.prototype.$ReactComposerSellStore5=function(p){'use strict';var q=this.validateAction(p,['composerID','price']),r=q[0],s=q[1];if(!isNaN(s)&&/^\d*$/.test(s)&&s.length<=n){var t=this.getComposerData(r);t.price=s;this.emitChange(r);}};o.prototype.$ReactComposerSellStore6=function(p){'use strict';var q=this.validateAction(p,['composerID','title']),r=q[0],s=q[1],t=this.getComposerData(r);t.title=s.substring(0,m);this.emitChange(r);};o.prototype.$ReactComposerSellStore7=function(p){'use strict';var q=this.validateAction(p,['composerID','config']),r=q[0],s=q[1],t=s.nearbyLocationConfig,u=this.getComposerData(r);u.categories=s.categories;u.currency=s.currency;u.locationID=s.locationID;u.nearbyLocationChecked=t.nearbyLocationChecked;u.nearbyLocationName=t.nearbyLocationName;u.showPostNearby=t.showPostNearby;u.pickupNote=s.pickupNote;u.showSelectableLocation=s.showSelectableLocation;u.hideLocationField=s.hideLocationField;this.emitChange(r);};o.prototype.$ReactComposerSellStore8=function(p){'use strict';var q=this.validateAction(p,['composerID','isNearbyLocationChecked']),r=q[0],s=q[1],t=this.getComposerData(r);t.nearbyLocationChecked=s;this.emitChange(r);};f.exports=new o();},null);
__d('ReactComposerSellActions',['ReactComposerSellActionType','ReactComposerDispatcher','ReactComposerSellStore'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();c('ReactComposerSellStore');j.prototype.clearLocation=function(k){'use strict';i.dispatch({composerID:k,type:h.CLEAR_LOCATION});};j.prototype.saveCategory=function(k,l,m){'use strict';i.dispatch({composerID:k,type:h.SAVE_CATEGORY,categoryID:l,categoryText:m});};j.prototype.saveLocation=function(k,l,m){'use strict';i.dispatch({composerID:k,type:h.SAVE_LOCATION,locationID:l,locationText:m});};j.prototype.savePickupNote=function(k,l){'use strict';i.dispatch({composerID:k,type:h.SAVE_PICKUP_NOTE,pickupNote:l});};j.prototype.savePrice=function(k,l){'use strict';i.dispatch({composerID:k,type:h.SAVE_PRICE,price:l});};j.prototype.saveTitle=function(k,l){'use strict';i.dispatch({composerID:k,type:h.SAVE_TITLE,title:l});};j.prototype.setConfig=function(k,l){'use strict';i.dispatch({composerID:k,type:h.SET_SELL_CONFIG,config:l});};j.prototype.registerComposer=function(k,l){'use strict';i.dispatch({composerID:k,type:h.REGISTER_COMPOSER,groupID:l});};j.prototype.toggleNearbyLocationChecked=function(k,l){'use strict';i.dispatch({composerID:k,type:h.TOGGLE_NEARBY_LOCATION_CHECKED,isNearbyLocationChecked:l});};j.prototype.postButtonEnabled=function(k){'use strict';i.dispatch({composerID:k,type:h.POST_BUTTON_ENABLED});};j.prototype.postToMarketplaceSeen=function(k){'use strict';i.dispatch({composerID:k,type:h.POST_TO_MARKETPLACE_SEEN});};function j(){'use strict';}f.exports=new j();},null);
__d('ReactComposerSellAttachmentTextCounter.react',['InputSelection','Layout.react','ReactComponentWithPureRenderMixin','React','XUIText.react','XUITextInput.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=i.Column,q=i.FillColumn,r=k.PropTypes,s=k.createClass({displayName:'ReactComposerSellAttachmentTextCounter',mixins:[j],propTypes:{focusOnMount:r.bool.isRequired,maxLength:r.number.isRequired,onFocus:r.func,onChange:r.func,placeholder:r.string.isRequired,text:r.string.isRequired},getInitialState:function(){return {inputSelection:{},numCharsRemaining:this.props.maxLength,selected:this.props.focusOnMount};},componentDidUpdate:function(t,u){if(this.state.selected&&this.state.inputSelection.start)h.set(this.refs.textInput.refs.textInput.getTextFieldDOM(),this.state.inputSelection.start);},render:function(){var t=o(this.props.className,"_2t_e");return (k.createElement(i,{className:t},k.createElement(q,null,this._getTextInput()),k.createElement(p,null,this.state.selected&&this._getCounter())));},focusInput:function(){this.refs.textInput.focusInput();},_getTextInput:function(){return (k.createElement(m,{className:"_2t_f",maxLength:this.props.maxLength,onBlur:this._onBlur,onFocus:this._onFocus,onChange:this._onChange,onClick:this._onClick,placeholder:this.props.placeholder,ref:'textInput',value:this.props.text}));},_getCounter:function(){return (k.createElement(l,{className:"_2t_g",size:'small'},this.state.numCharsRemaining));},_onBlur:function(){this.setState({selected:false});},_onFocus:function(event){this.props.onFocus&&this.props.onFocus(event);},_onChange:function(event){this.setState({inputSelection:h.get(this.refs.textInput.refs.textInput.getTextFieldDOM()),numCharsRemaining:this.props.maxLength-event.target.value.length});this.props.onChange&&this.props.onChange(event);},_onClick:function(){this.setState({selected:true});}});f.exports=s;},null);
__d('ReactComposerSellAttachmentTitleContainer.react',['ReactComposerContextMixin','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerSellActions','ReactComposerSellAttachmentTextCounter.react','ReactComposerSellStore','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=m.PropTypes,p=m.createClass({displayName:'ReactComposerSellAttachmentTitleContainer',mixins:[h,i(l)],PropTypes:{focusOnMount:o.bool},statics:{calculateState:function(q){return {titleText:l.getTitleText(q)};}},getDefaultProps:function(){return {focusOnMount:false};},componentDidMount:function(){if(this.props.focusOnMount)this.refs.title.focusInput();},render:function(){return (m.createElement(k,{onFocus:this._onFocus,onChange:this._onChange,className:this.props.className,focusOnMount:this.props.focusOnMount,placeholder:n._("What are you selling?"),text:this.state.titleText,ref:'title',maxLength:l.getMaxCharactersForTitle(this.context.composerID)}));},_onFocus:function(event){event.target.value=this.props.titleText;},_onChange:function(event){j.saveTitle(this.context.composerID,event.target.value);}});f.exports=p;},null);
__d('ReactComposerSellAttachmentPlaceholder.react',['ReactComposerAttachmentActions','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerSellAttachmentTitleContainer.react','ReactComponentWithPureRenderMixin','React','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=m.PropTypes,p=m.createClass({displayName:'ReactComposerSellAttachmentPlaceholder',mixins:[j,l],propTypes:{init:o.func},render:function(){return (m.createElement('div',{onClick:this._onClick,onFocus:this.props.init,onMouseOver:this.props.init},m.createElement(k,{className:"_ox2"})));},_onClick:function(){this.props.init&&this.props.init();h.selectAttachment(this.context.composerID,i.SELL);}});f.exports=p;},null);
__d('ReactComposerSellAttachmentSelector.react',['ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComponentWithPureRenderMixin','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'ReactComposerSellAttachmentSelector',mixins:[j],propTypes:{label:n.string},getDefaultProps:function(){return {label:l._("Sell Something")};},render:function(){return (k.createElement(h,{attachmentID:i.SELL,label:this.props.label,icon:m('/images/litestand/composer/icons/sell.png')}));}});f.exports=o;},null);
__d("XReactComposerSellAttachmentBootstrapController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/sell\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});},null,{});
__d('ReactComposerSellLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','ReactComposerSellAttachmentPlaceholder.react','XReactComposerSellAttachmentBootstrapController','ActorURI','Bootloader','React'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=n.createClass({displayName:'ReactComposerSellLazyAttachment',mixins:[i],statics:{attachmentID:h.SELL},getInitialState:function(){return {shouldInitialize:false};},getPlaceholderModule:function(){return j;},shouldInitialize:function(){return this.state.shouldInitialize;},bootload:function(p){if(this.props.bootload){this.props.bootload(p);}else m.loadModules(["ReactComposerSellAttachmentContainer.react"],p);},getBootstrapURI:function(){return l.create(k.getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setInt('target_id',this.context.targetID).getURI(),this.context.actorID);},init:function(){this.setState({shouldInitialize:true});}});f.exports=o;},null);
__d('ReactComposerGroupishPeopleTaggerPresenter.react',['GroupMentionsTypeaheadView.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports={ViewRenderer:h,useLayer:true};},null);
__d('ReactGroupComposer.react',['ReactComposer.react','ReactComposerAttachmentType','ReactComposerBodyContainer.react','ReactComposerConfig','ReactComposerContextConfig','ReactComposerContextProviderMixin','ReactComposerFileAttachmentSelector.react','ReactComposerFileLazyAttachment.react','ReactComposerLazyHeader.react','ReactComposerMediaAttachmentSelector.react','ReactComposerMediaLazyAttachment.react','ReactComposerQuestionAttachmentSelector.react','ReactComposerQuestionLazyAttachment.react','ReactComposerStatusAttachmentSelector.react','ReactComposerStatusLazyAttachment.react','Bootloader','LitestandComposer','React','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){if(c.__markCompiled)c.__markCompiled();var ba=y.createClass({displayName:'ReactGroupComposer',mixins:[m],propTypes:{contextConfig:l.isRequired,config:k.isRequired},componentDidMount:function(){x.initComposer(this.props.contextConfig.composerID);},render:function(){var ca=this._getAttachmentComponents(),da=ca[0],ea=ca[1];return (y.createElement(h,{className:"_4lmd",loggingConfig:this.props.config.loggingConfig},y.createElement(p,null,da),y.createElement(j,{hasMinHeight:false},ea)));},_getAttachmentComponents:function(){var ca=[],da=[],ea=this.props.config.attachmentsConfig[i.SELL].enabled,fa=this.props.config.attachmentsConfig[i.MEDIA].showSelector,ga=this.props.config.attachmentsConfig[i.FILE].enabled;if(ea){var ha=this.props.config.attachmentsConfig[i.SELL],ia=ha.attachmentSelector,ja=ha.lazyAttachment;ca.push(y.createElement(ia,{key:'sell'}));da.push(y.createElement(ja,{config:this.props.config,key:'sell',selected:true,bootload:function(sa){return w.loadModules(["ReactComposerSellAttachmentContainer.react","ReactComposerGroupSellPostButtonContainer.react"],sa);}}));}var ka=aa._("Write Post"),la=this.props.config.attachmentsConfig[i.STATUS];if(ea){ka=aa._("Start Discussion");}else if(la.showShortSelectorLabel)ka=aa._("Post");ca.push(y.createElement(u,{key:'status',label:ka}));da.push(y.createElement(v,{config:this.props.config,key:'status',placeholder:aa._("Write something..."),selected:!ea,bootload:function(sa){return w.loadModules(["ReactComposerStatusAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],sa);}}));if(fa){var ma=this.props.config.attachmentsConfig[i.MEDIA],na=aa._("Add Photo \/ Video");if(ma.showShortSelectorLabel)na=aa._("Photo \/ Video");ca.push(y.createElement(q,{key:'media',label:na}));}da.push(y.createElement(r,{config:this.props.config,key:'media',bootload:function(sa){return w.loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerGroupMediaPostButtonContainer.react"],sa);}}));var oa=this.props.config.attachmentsConfig[i.QUESTION],pa=aa._("Ask Question");if(oa.showShortSelectorLabel)pa=aa._("Question");ca.push(y.createElement(s,{key:'question',label:pa}));da.push(y.createElement(t,{config:this.props.config,key:'question',bootload:function(sa){return w.loadModules(["ReactComposerQuestionAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],sa);}}));if(ga){var qa=this.props.config.attachmentsConfig[i.FILE],ra=aa._("Add File");if(qa.showShortSelectorLabel)ra=aa._("File");ca.push(y.createElement(n,{key:'file',label:ra}));da.push(y.createElement(o,{config:this.props.config,key:'file',bootload:function(sa){return w.loadModules(["ReactComposerFileAttachment.react","ReactComposerGroupFilePostButtonContainer.react"],sa);}}));}return [ca,da];}});f.exports=ba;},null);