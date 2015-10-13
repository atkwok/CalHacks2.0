/*!CK:2628943877!*//*1443409764,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["UwafM"]); }

__d('P2PSuccessDialog.react',['CurrentEnvironment','Image.react','LayerSlowlyFadeOnShow','P2PConfirmationDialog.react','React','emptyFunction','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=l.PropTypes,q=l.createClass({displayName:'P2PSuccessDialog',propTypes:{buttonLabel:p.node,buttonUse:p.string,onOKClick:p.func,onSecondaryClick:p.func,showCloseButton:p.bool,showSecondaryButton:p.bool,secondaryButtonLabel:p.node,secondaryButtonUse:p.string,title:p.string.isRequired},getDefaultProps:function(){return {allowBack:false,buttonLabel:n._("OK"),buttonUse:'default',onOKClick:m,showCloseButton:false,width:h.messengerdotcom?350:300};},getImage:function(){if(h.messengerdotcom){return (l.createElement(i,{height:62,width:62,src:o('/images/p2p/checkmark-messenger.png')}));}else return (l.createElement(i,{height:56,width:56,src:o('/images/p2p/check_mark-sm.png')}));},render:function(){var r=this.getImage();return (l.createElement(k,{behaviors:babelHelpers._extends({LayerSlowlyFadeOnShow:j},this.props.behaviors),allowBack:this.props.allowBack,buttonLabel:this.props.buttonLabel,buttonUse:this.props.buttonUse,centered:this.props.centered,image:r,onOKClick:this.props.onOKClick,onSecondaryClick:this.props.onSecondaryClick,showCloseButton:this.props.showCloseButton,showSecondaryButton:this.props.showSecondaryButton,secondaryButtonLabel:this.props.secondaryButtonLabel,secondaryButtonUse:this.props.secondaryButtonUse,title:this.props.title,width:this.props.width},this.props.children));}});f.exports=q;},null);
__d('P2PAddCardForIncentivesSuccessDialog.react',['React','P2PSuccessDialog.react','P2PText.react','XUIText.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=h.PropTypes,o=h.createClass({displayName:'P2PAddCardForIncentivesSuccessDialog',propTypes:{amount:n.string.isRequired,onClose:n.func.isRequired,onOKClick:n.func.isRequired},renderBoldAmountText:function(){return (h.createElement(k,{weight:'bold'},m._("We sent {Amount user will receive} to your bank account.",[m.param('Amount user will receive',this.props.amount)])));},render:function(){return (h.createElement(i,{buttonLabel:m._("Send to a Friend"),buttonUse:'confirm',onOKClick:this.props.onOKClick,onSecondaryClick:this.props.onClose,showCloseButton:true,showSecondaryButton:true,secondaryButtonLabel:m._("Keep It"),title:'Card Added'},h.createElement(j,{type:'primary'},m._("{Reminder we sent money to the user's bank account} Your bank might take 2-3 days to make it available.",[m.param('Reminder we sent money to the user\'s bank account',this.renderBoldAmountText())])),h.createElement(j,{className:"_j_9",type:'primary'},m._("What will you do with your {Amount user will receive}?",[m.param('Amount user will receive',this.props.amount)]))));}});f.exports=o;},null);
__d('P2PCreditCardExpDateFormField.react',['Image.react','P2PFormField.react','P2PFormFieldUtils','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'P2PCreditCardExpDateFormField',propTypes:{initiallyFocused:n.bool,name:n.string.isRequired,onChange:n.func.isRequired},getLimit:function(){return 5;},formatValue:function(p,q,r){var s=String.fromCharCode(r);p=p.replace(/[^0-9\/]+/g,'');var t=p.split('/'),u=t[0],v=t[1];if(v&&v.length===4)p=u+'/'+v.substr(-2);if(!/^\d+$/.test(s)&&r!==191&&r!==111)return p;p=j.stripNonDigits(p);if(/^\d$/.test(p)&&(p!=='0'&&p!=='1')){p='0'+p+'/';}else if(p.length>=2&&p.indexOf('/')===-1)p=p.substr(0,2)+'/'+p.substr(2,2);return p;},validate:function(p){var q=p.split('/'),r=new Date(),s=parseInt(r.getFullYear().toString().substring(2),10),t=r.getMonth()+1,u=parseInt(q[0],10),v=parseInt(q[1],10);if(p.length!==5||!u||!v||isNaN(u)||isNaN(v)||u<1||u>12)return false;if(v<s||v===s&&u<t||u>12||u<1)return false;return true;},render:function(){return (k.createElement(i,babelHelpers._extends({autoCompleteName:'cc-exp',formatValue:this.formatValue,icon:{normal:k.createElement(h,{height:12,src:m('/images/p2p/events-grey_s.png'),width:12}),focused:k.createElement(h,{height:12,src:m('/images/p2p/events-blue_s.png'),width:12})},limit:this.getLimit(),placeholder:l._("MM\/YY"),ref:'input',validate:this.validate},this.props)));}});f.exports=o;},null);
__d('P2PCreditCardNumberFormFieldHelper',['Keys','P2PFormFieldUtils'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j={formatCardNumber:function(k,l,m,n,o){if(m===h.BACKSPACE||m===h.DELETE){var p=l.split(o).length-1,q=k.split(o).length-1;if(q!==p)return k;}k=i.stripNonDigits(k);k=k.substr(0,n[n.length-1]);var r='';for(var s=1;s<n.length;s++){if(n[s]>k.length||s===n.length-1){r+=k.slice(n[s-1]);break;}r+=k.slice(n[s-1],n[s])+o;}return r;},getUpdatedCursorPosition:function(k,l,m,n){var o=0,p=0;while(o<m&&o<l.length&&p<k.length)if(l[o]===k[p]){o++;p++;}else if(!/^\d+$/.test(l[o])){o++;}else p++;if(k.substr(p,1)===n)p++;return p;}};f.exports=j;},null);
__d('P2PCreditCardNumberFormField.react',['Image.react','MessengerPaymentProductType','P2PAPI','P2PAPIUtils','P2PFormField.react','P2PCreditCardNumberFormFieldHelper','PaymentMethodUtils','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){'use strict';if(c.__markCompiled)c.__markCompiled();var r=o.PropTypes,s=o.createClass({displayName:'P2PCreditCardNumberFormField',propTypes:{disabled:r.bool,shouldValidateBIN:r.bool,initiallyFocused:r.bool,name:r.string.isRequired,onChange:r.func.isRequired,productType:r.string,value:r.string},getInitialState:function(){return {binError:'',errorMessage:null};},componentWillReceiveProps:function(t){var u=t.asyncRequestState,v=u?u[this.state.validateBINRequestID]:null;if(v){this.setState({validateBINRequestID:''});if(v.error){this.handleValidateBINNumberError(v.error);}else this.handleValidateBINNumberSuccess();}},handleValidateBINNumberSuccess:function(){this.setState({binError:''});this.props.onBinErrorCleared();},handleValidateBINNumberError:function(t){var u=t.message;this.setState({binError:u});this.props.onBinError(u);},validateBIN:function(t){var u,v;t=t.replace(/ /g,'');u=t.substr(0,6);if(u!==this.state.previousBINNumber&&u.length>=6){v=k.genRequestID();this.setState({validateBINRequestID:v});j.validateBINNumber({binNumber:u,requestID:v});}else if(u.length<6){this.setState({binError:'',validateBINRequestID:''});this.props.onBinErrorCleared();}this.setState({previousBINNumber:u});},calculateLimit:function(t){return (n.getCardType(t).digits+(this.getGrouping(t).length-2));},getGrouping:function(t){var u=[0,4,8,12,16],v=u;switch(n.getCardType(t).name){case 'visa':case 'mc':case 'disc':v=u;break;case 'amex':v=[0,4,10,15];break;case 'diners':v=[0,4,10,14];break;default:v=u;break;}return v;},formatValue:function(t,u,v){return m.formatCardNumber(t,u,v,this.getGrouping(t),' ');},validate:function(t){var u=this.isValidCardType(t),v;if(this.props.productType===i.P2P){v=p._("Please enter a debit card. Credit cards can't be used.");if(this.props.shouldValidateBIN)this.validateBIN(t);}else v=p._("Please enter a valid debit or credit card number.");this.setState({errorMessage:!u?v:null});return !!(n.isValidCCNumber(t)&&u&&!this.state.binError);},isValidCardType:function(t){var u=['mc','visa','unknown'];if(this.props.productType===i.MESSENGER_COMMERCE)u.push('diners','disc','jcb','amex');var v=n.getCardType(t),w=v?v.name:'',x=u.indexOf(w)>=0;return x;},getSaveError:function(){return this.state.binError||this.props.saveError;},render:function(){return (o.createElement(l,babelHelpers._extends({autoCompleteName:'cc-number',cursorPositionUpdater:m.getUpdatedCursorPosition,errorMessage:this.state.errorMessage,formatValue:this.formatValue,icon:{normal:o.createElement(h,{height:12,src:q('/images/p2p/card-grey_s.png'),width:12}),focused:o.createElement(h,{height:12,src:q('/images/p2p/card-blue_s.png'),width:12})},limit:this.calculateLimit,placeholder:p._("Card Number"),ref:'input',validate:this.validate,value:this.props.value},this.props,{saveError:this.getSaveError()})));}});f.exports=s;},null);
__d('P2PCreditCardForm.react',['CreditCardFormParam','KappaWrapper','MessengerPaymentProductType','P2PCreditCardCVCFormField.react','P2PCreditCardExpDateFormField.react','P2PCreditCardNumberFormField.react','P2PCreditCardZipCodeFormField.react','P2PErrorNotice.react','P2PForm.react','React','emptyFunction','fbt','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){'use strict';if(c.__markCompiled)c.__markCompiled();var u=q.PropTypes,v=q.createClass({displayName:'P2PCreditCardForm',propTypes:{asyncRequestState:u.object,cscMaxLength:u.number,editMode:u.bool,onErrorDialogOKClick:u.func,onValidation:u.func,prefilledFormData:u.object,productType:u.oneOf(t(j)),rendersErrorDialog:u.bool,saveErrors:u.object},getDefaultProps:function(){return {cscMaxLength:null,editMode:false,onErrorDialogOKClick:r,onValidation:r,prefilledFormData:{},productType:j.P2P,rendersErrorDialog:false,saveErrors:null};},getInitialState:function(){return {binError:'',formData:{},isValid:false};},componentWillMount:function(){i.start(6,3,0);},handleValidation:function(w,x){this.setState({formData:x,isValid:w});this.props.onValidation(w,x);},isCreditCardNumberMasked:function(){return this.props.editMode;},isCreditCardNumberFocused:function(){return !this.props.editMode;},isExpFocused:function(){return this.props.editMode;},renderBINError:function(){if(this.state.binError)return (q.createElement(o,{error:{message:this.state.binError}}));},handleBINErrorCleared:function(){this.setState({binError:''});},handleBINError:function(w){this.setState({binError:w});},render:function(){return (q.createElement('div',null,this.renderBINError(),q.createElement(p,{errorTitle:s._("Problem Saving Card"),prefilledFormData:this.props.prefilledFormData,onValidation:this.handleValidation,saveErrors:this.props.saveErrors},q.createElement(m,{asyncRequestState:this.props.asyncRequestState,disabled:this.isCreditCardNumberMasked(),initiallyFocused:this.isCreditCardNumberFocused(),productType:this.props.productType,name:h.CARD_NUMBER,shouldValidateBIN:!this.props.editMode,onBinError:this.handleBINError,onBinErrorCleared:this.handleBINErrorCleared,required:true,width:100}),q.createElement(l,{initiallyFocused:this.isExpFocused(),name:h.CARD_EXPIRATION,required:true,width:50}),q.createElement(k,{creditCardNumber:this.state.formData[h.CARD_NUMBER],cscMaxLength:this.props.cscMaxLength,name:h.CSC,required:true,width:50}),q.createElement(n,{name:h.ZIP,required:true,width:100}))));}});f.exports=v;},null);
__d('P2PAddCreditCardDialog.react',['CurrentEnvironment','Link.react','MessengerPaymentProductType','P2PAPI','P2PAPIUtils','P2PCreditCardStore','P2PCreditCardForm.react','P2PLoadingMask.react','P2PLogger','P2PPaymentLoggerEvent','P2PLinkConstants','React','P2PButton.react','P2PDialog.react','P2PDialogTitle.react','P2PDialogBody.react','P2PDialogFooter.react','P2PText.react','cx','emptyFunction','fbt','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){'use strict';if(c.__markCompiled)c.__markCompiled();var da=s.PropTypes,ea='fbP2PAddCreditCardDialog_learnMoreSentenceID',fa=s.createClass({displayName:'P2PAddCreditCardDialog',propTypes:{cancelButtonText:da.string,eventFlow:da.string.isRequired,loggingData:da.object,loggingObjectID:da.string,onCancel:da.func,onSuccess:da.func,productType:da.oneOf(ca(j)),saveButtonText:da.string,showCancelButton:da.bool,text:da.string,title:da.string},getDefaultProps:function(){return {cancelButtonText:ba._("Cancel"),loggingData:{},onCancel:aa,onSuccess:aa,productType:j.P2P,saveButtonText:ba._("Save"),showCancelButton:true,text:ba._("Please enter a debit card. Credit cards can't be used."),title:ba._("Add Debit Card"),width:h.messengerdotcom?350:288};},getInitialState:function(){return {isValid:false,formData:{},loading:false,requestID:'',saveErrors:null};},onCreditCardStoreChange:function(){var ga=m.getAsyncRequestState(),ha=ga[this.state.requestID];this.setState({asyncRequestState:ga});if(ha){this.setState({requestID:''});if(ha.error){this.handleOnSaveError(ha.error);}else this.handleOnSaveSuccess(ha);}},componentDidMount:function(){this.log(q.UI_ACTN_INITIATE_ADD_CARD);this.creditCardStoreSub=m.addListener('change',this.onCreditCardStoreChange);},componentWillUnmount:function(){if(this.creditCardStoreSub){this.creditCardStoreSub.remove();this.creditCardStoreSub=null;}},log:function(ga,ha){p.log(ga,babelHelpers._extends({www_event_flow:this.props.eventFlow,object_id:this.props.loggingObjectID},this.props.loggingData,ha));},onSaveClick:function(){var ga=l.genRequestID();this.setState({loading:true,requestID:ga,saveErrors:null});this.log(q.UI_ACTN_CONFIRM_CARD_DETAILS);k.addCreditCard(babelHelpers._extends({requestID:ga,product_type:this.props.productType},this.state.formData));},handleOnSaveSuccess:function(ga){this.props.onSuccess(ga);this.log(q.UI_ACTN_ADD_CARD_SUCCESS);},handleOnSaveError:function(ga){this.setState({loading:false,saveErrors:ga});this.log(q.UI_ACTN_ADD_CARD_FAIL,{message:ga&&ga.general?ga.general.message:''});},handleValidation:function(ga,ha){this.setState({isValid:ga,formData:ha});},isSaveButtonDisabled:function(){return this.state.loading||!this.state.isValid;},onToggle:function(ga){if(!ga){this.props.onCancel();this.log(q.UI_ACTN_CANCEL_ADD_CARD);}},onCancelClicked:function(){this.onToggle(false);},renderAddCardForm:function(){var ga,ha=this.props.title;if(this.props.showCancelButton)ga=s.createElement(t,{use:'default',size:'medium',label:this.props.cancelButtonText,disabled:this.state.loading,onClick:this.onCancelClicked});return (s.createElement('div',null,s.createElement(v,null,ha),s.createElement(w,null,s.createElement(y,{type:'primary',className:"_3-96"},this.props.text),s.createElement(n,{asyncRequestState:this.state.asyncRequestState,onValidation:this.handleValidation,saveErrors:this.state.saveErrors,productType:this.props.productType}),s.createElement(y,{className:"_3-8y",id:ea,type:'secondary'},ba._("Your payment info is stored securely."),s.createElement('div',null,s.createElement(i,{'aria-describedby':ea,href:r.addDebitCardHelpURI,target:'_blank'},ba._("Learn More"))))),s.createElement(x,{leftContent:this.props.leftContent},ga,s.createElement(t,{use:'confirm',size:'medium',label:this.props.saveButtonText,disabled:this.isSaveButtonDisabled(),onClick:this.onSaveClick}))));},render:function(){return (s.createElement(u,{behaviors:this.props.behaviors,layerHideOnBlur:false,ref:'dialog',onToggle:this.onToggle,repositionOnUpdate:true,shown:true,width:this.props.width},this.renderAddCardForm(),s.createElement(o,{visible:this.state.loading})));}});f.exports=fa;},null);
__d('P2PFriendsListStore',['P2PActionConstants','EventEmitter','P2PAPI','P2PDispatcher'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;'use strict';var n=[],o,p,q=100;l=babelHelpers.inherits(r,i);m=l&&l.prototype;function r(){m.constructor.call(this);p=false;o=k.register(this.onEventDispatched.bind(this));}r.prototype.onEventDispatched=function(s){var t=s.data,u=s.type;switch(u){case h.FRIENDS_LIST_UPDATED:this.handleFriendsListUpdated(t);this.emit('change');break;}};r.prototype.handleFriendsListUpdated=function(s){n=s;};r.prototype.getAllFriends=function(){if(!p){p=true;this.fetchFriends();}return n;};r.prototype.searchFriends=function(s){this.fetchFriends(s);};r.prototype.fetchFriends=function(s){j.getFriendsList(q,s);};f.exports=new r();},null);
__d('P2PFriendPickerDialog.react',['debounce','Image.react','MercuryIDs','P2PActions','P2PDialog.react','P2PDialogBody.react','P2PDialogTitle.react','P2PFriendsListStore','P2PLoadingMask.react','P2PLogger','P2PPaymentLoggerEvent','P2PText.react','React','ScrollableArea.react','XUITextInput.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){'use strict';if(c.__markCompiled)c.__markCompiled();var y=t.PropTypes,z=t.createClass({displayName:'P2PFriendPickerDialog',propTypes:{amount:y.string,eventFlow:y.string.isRequired,onClose:y.func.isRequired,subTitle:y.node.isRequired,title:y.node.isRequired},getDefaultProps:function(){return {amount:'',title:x._("Select Friend"),subTitle:x._("These are your friends who are able to receive money.")};},getInitialState:function(){return {friends:o.getAllFriends(),showLoader:true};},log:function(aa,ba){q.log(aa,babelHelpers._extends({www_event_flow:this.props.eventFlow},ba));},loggedSearch:null,friendPickerStoreSub:null,componentDidMount:function(){this.friendPickerStoreSub=o.addListener('change',this.updateFriendsList);},componentWillUnmount:function(){if(this.friendPickerStoreSub){this.friendPickerStoreSub.remove();this.friendPickerStoreSub=null;}},updateFriendsList:function(){this.setState({friends:o.getAllFriends(),showLoader:false});},onFriendSelect:function(aa){this.log(r.UI_ACTN_FRIEND_PICKER_SELECT,{object_id:aa.id});k.chatSendViewOpened({amount:this.props.amount,threadID:j.getThreadIDFromUserID(aa.id)});this.props.onClose();},getQuery:function(){return (this.refs.input_ref&&this.refs.input_ref.refs.textInput.refs.textField.value);},handleToggle:function(aa){if(!aa)this.props.onClose();},onSearchInputChange:function(){if(!this.loggedSearch){this.log(r.UI_ACTN_FRIEND_PICKER_SEARCH);this.loggedSearch=true;}var aa=this.getQuery();if(!aa)this.setState({showLoader:true});o.searchFriends(aa);},renderTagLineRow:function(){if(this.state.showLoader)return null;return (t.createElement('li',{className:"_4ro"},t.createElement('div',{className:"_4ia_"},this.props.subTitle)));},renderfriendRow:function(aa){return (t.createElement('li',{className:"_4iat",key:aa.id,onClick:this.onFriendSelect.bind(this,aa)},t.createElement('div',{className:"_4iau"},t.createElement(i,{className:"_4iav",height:50,src:aa.image_src,width:50})),t.createElement('div',{className:"_4iaw"},t.createElement(s,{className:"_4iax",type:'primary'},aa.full_name))));},renderFriendList:function(){var aa=this.getQuery();if(!this.state.showLoader&&this.state.friends.length===0)if(aa&&aa.length){return (t.createElement('div',{className:"_4iay"},x._("No results.")));}else return (t.createElement('div',{className:"_4iay"},x._("You do not have any friends who are able to receive money.")));return (t.createElement('div',{className:"_4iaz"},t.createElement(p,{visible:this.state.showLoader}),t.createElement(u,{height:350},t.createElement('ul',null,this.state.friends.map(this.renderfriendRow),this.renderTagLineRow()))));},render:function(){return (t.createElement(l,{onToggle:this.handleToggle,width:445},t.createElement(n,null,t.createElement('div',{className:"_4ia-"},this.props.title)),t.createElement(m,{className:"_4ib0"},t.createElement('div',{className:"_3ybc"},t.createElement(v,{className:"_4ib1",onChange:h(this.onSearchInputChange,150),placeholder:'Search friends',ref:'input_ref'})),this.renderFriendList())));}});f.exports=z;},null);
__d('P2PPasswordProtectionNUXDialog.react',['CurrentEnvironment','Link.react','P2PAPI','P2PErrorDialog.react','P2PLinkConstants','P2PLoadingMask.react','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PPasswordProtectionParam','P2PPasswordProtectionStatusTypes','React','P2PButton.react','P2PDialog.react','P2PDialogTitle.react','P2PDialogBody.react','P2PDialogFooter.react','P2PText.react','cx','emptyFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){'use strict';if(c.__markCompiled)c.__markCompiled();var ca=s.PropTypes,da=s.createClass({displayName:'P2PPasswordProtectionNUXDialog',propTypes:{onComplete:ca.func},getDefaultProps:function(){return {onComplete:aa,width:h.messengerdotcom?320:300};},getInitialState:function(){return {saveErrorObject:null,loading:false};},componentWillMount:function(){this.log(o.UI_ACTN_INITIATE_PASSWORD_PROTECTION_NUX);},log:function(ea,fa){n.log(ea,babelHelpers._extends({www_event_flow:p.UI_FLOW_P2P_SETTINGS},fa));},onSaveClick:function(){this.setState({loading:true,saveErrorObject:null});this.setPasswordProtection(r.ENABLED);this.log(o.UI_ACTN_OPT_IN_PASSWORD_PROTECTION_NUX);},setPasswordProtection:function(ea){var fa={};fa[q.STATUS]=ea;j.setPasswordProtectionSetting({formData:fa,success:this.handleOnSaveSuccess,error:this.handleOnSaveError});},handleOnSaveSuccess:function(){this.setState({loading:false});this.props.onComplete();},handleOnSaveError:function(ea){this.setState({loading:false,saveErrorObject:ea});},isSaveButtonDisabled:function(){return this.state.loading;},isCancelButtonDisabled:function(){return this.state.loading;},onCancelClick:function(){this.setState({loading:true,saveErrorObject:null});this.setPasswordProtection(r.DISABLED);this.log(o.UI_ACTN_OPT_OUT_PASSWORD_PROTECTION_NUX);},handleErrorBackClick:function(){this.setState({saveErrorObject:null});},handleErrorOKClick:function(){this.setState({saveErrorObject:null});this.props.onComplete();},render:function(){if(this.state.saveErrorObject)return (s.createElement(k,{allowBack:true,title:ba._("Problem Saving"),onBackClick:this.handleErrorBackClick,onOKClick:this.handleErrorOKClick,error:this.state.saveErrorObject}));return (s.createElement(u,{className:h.messengerdotcom?"_-el":'',behaviors:{LayerFadeOnShow:false},layerHideOnBlur:false,shown:true,width:this.props.width},s.createElement(v,{showCloseButton:false},ba._("Use Password?")),s.createElement(w,null,s.createElement(y,{className:"_5sor",type:'primary'},ba._("For additional security, you can enter your Facebook password to send money. You can always update this in {link}.",[ba.param('link',s.createElement(i,{href:l.settingsWWWURI,target:'_blank'},ba._("Settings")))]))),s.createElement(x,null,s.createElement(t,{className:"_5sov",disabled:this.isCancelButtonDisabled(),label:ba._("Not Now"),onClick:this.onCancelClick,size:'medium',use:'default'}),s.createElement(t,{className:"_5sox",disabled:this.isSaveButtonDisabled(),label:ba._("Use Password"),onClick:this.onSaveClick,size:'medium',use:'confirm'})),s.createElement(m,{visible:this.state.loading})));}});f.exports=da;},null);
__d('P2PAddCardForIncentivesDialog.react',['P2PAddCardForIncentivesSuccessDialog.react','P2PAddCreditCardDialog.react','P2PAPI','P2PFriendPickerDialog.react','P2PLogger','P2PPasswordProtectionNUXDialog.react','P2PPasswordProtectionStatusTypes','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','React','emptyFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){'use strict';if(c.__markCompiled)c.__markCompiled();var t=q.PropTypes,u=q.createClass({displayName:'P2PAddCardForIncentivesDialog',propTypes:{amount:t.string.isRequired,eventFlow:t.string,onClose:t.func.isRequired,onCancel:t.func.isRequired,onSuccess:t.func},getDefaultProps:function(){return {eventFlow:p.UI_FLOW_FINANCIAL_INCENTIVES,onCancel:r,onSuccess:r};},getInitialState:function(){return {passwordProtectionNUXDialogShown:false,showConfirmation:false,showFriendPicker:false};},log:function(v,w){l.log(v,babelHelpers._extends({www_event_flow:this.props.eventFlow},w));},handleAddCardSuccess:function(v){if(this.props.onSuccess)this.props.onSuccess();v.success=this.handleIncentivesTransferSuccess;v.error=this.handleIncentivesTransferFailure;j.createFinancialIncentivesTransfer(v);this.setState({showConfirmation:true,passwordProtectionNUXDialogShown:v.passwordProtection===n.NOT_SET});},handleIncentivesTransferSuccess:function(){this.log(o.UI_ACTN_INCENTIVE_TRANSFER_SUCCESS);},handleIncentivesTransferFailure:function(v){this.log(o.UI_ACTN_INCENTIVE_TRANSFER_FAILURE,v.message);},handleAddCardCancelled:function(){this.props.onCancel();},handleConfirmationClosed:function(){this.handleClose();this.log(o.UI_ACTN_FI_CANCEL);},handleConfirmationNext:function(){this.log(o.UI_ACTN_FI_SUCCESS_DIALOG_NEXT);this.setState({showConfirmation:false,showFriendPicker:true});},handleClose:function(){this.props.onClose();},handlePasswordProtectionNUXComplete:function(){this.setState({passwordProtectionNUXDialogShown:false,showConfirmation:true});},render:function(){if(this.state.passwordProtectionNUXDialogShown){return (q.createElement(m,{onComplete:this.handlePasswordProtectionNUXComplete}));}else if(this.state.showConfirmation){return (q.createElement(h,{amount:this.props.amount,onClose:this.handleConfirmationClosed,onOKClick:this.handleConfirmationNext}));}else if(this.state.showFriendPicker){return (q.createElement(k,{amount:this.props.amount,eventFlow:this.props.eventFlow,onClose:this.handleClose}));}else return (q.createElement(i,{eventFlow:this.props.eventFlow,onCancel:this.handleAddCardCancelled,onSuccess:this.handleAddCardSuccess,text:s._("We'll send {Amount you will receive} to your bank account when you add a debit card. Credit cards can't be used.",[s.param('Amount you will receive',this.props.amount)])}));}});f.exports=u;},null);
__d("XP2PFinancialIncentivesImpressionsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/p2p_financial_incentives\/impressions\/",{});},null,{});
__d("XP2PFinancialIncentivesXOutController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/p2p_financial_incentives\/xout\/",{});},null,{});
__d('P2PFinancialIncentivesUpsell.react',['Arbiter','AsyncRequest','Image.react','P2PActions','P2PAddCardForIncentivesDialog.react','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','React','XP2PFinancialIncentivesImpressionsController','XP2PFinancialIncentivesXOutController','XUIButton.react','XUICloseButton.react','cx','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x='$3',y=p.createClass({displayName:'P2PFinancialIncentivesUpsell',_arbiterToken:null,log:function(z,aa){m.log(z,babelHelpers._extends({www_event_flow:o.UI_FLOW_FINANCIAL_INCENTIVES},aa));},getInitialState:function(){return {hidden:false};},componentDidMount:function(){this._arbiterToken=h.subscribeOnce('mercury-jewel/opened',this.trackImpression);},componentWillUnmount:function(){if(this._arbiterToken){h.unsubscribe(this._arbiterToken);this._arbiterToken=null;}},doUpsell:function(){k.showDialog(l,{amount:x,onClose:this.handleOnDialogClose,onCancel:k.hideDialog,onSuccess:this.xOut});},handleOnDialogClose:function(){k.hideDialog();this.xOut();},handleBannerDismissed:function(){this.log(n.UI_ACTN_FI_BANNER_DISMISSED);this.xOut();},xOut:function(){var z=r.getURIBuilder().getURI();new i().setURI(z).setMethod('post').send();this.setState({hidden:true});},trackImpression:function(){this.log(n.UI_ACTN_FI_BANNER_IMPRESSION);var z=q.getURIBuilder().getURI();new i().setURI(z).setMethod('post').send();},render:function(){if(this.state.hidden)return null;return (p.createElement('div',{className:"_2-hh"},p.createElement('span',{className:"_2-hi"},p.createElement(j,{src:w('/images/p2p/enter-financial-incentives-www.png')})),p.createElement('span',{className:"_2-hk"},p.createElement('span',{className:"_2-hl"},v._("Send {Amount user will receive} to a friend on us!",[v.param('Amount user will receive',x)]),' '),p.createElement('span',{className:"_3imh"},v._("Just add a debit card to get started."))),p.createElement('span',{className:"_2-hm"},p.createElement(s,{label:v._("Add Card"),use:'confirm',onClick:this.doUpsell})),p.createElement(t,{className:"_2-hn",onClick:this.handleBannerDismissed})));}});f.exports=y;},null);