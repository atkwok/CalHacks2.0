/*!CK:883867121!*//*1443074904,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FcoK9"]); }

__d('P2PSeviperJewelBanner.react',['P2PActions','P2PAPI','P2PAddCardForIncentivesDialog.react','P2PBannerType','P2PJewelBanner.react','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){'use strict';if(c.__markCompiled)c.__markCompiled();var r=o.UI_FLOW_FINANCIAL_INCENTIVES_ZERO_INDEX_JEWEL,s='$3',t=p.createClass({displayName:'P2PSeviperJewelBanner',componentDidMount:function(){i.incrementBannerViews(k.SEVIPER);this.log(n.UI_ACTN_FI_BANNER_IMPRESSION);},log:function(u,v){m.log(u,babelHelpers._extends({www_event_flow:r},v));},handleClick:function(){h.showDialog(j,{amount:s,eventFlow:r,onClose:this.handleClose,onCancel:this.hideDialog});},handleClose:function(){this.hideDialog();this.dismissBanner();},dismissBanner:function(){i.incrementBannerDismissals(k.SEVIPER);},hideDialog:function(){h.hideDialog();},handleDismissClick:function(){this.dismissBanner();this.log(n.UI_ACTN_FI_BANNER_DISMISSED);},render:function(){return (p.createElement(l,{actionText:q._("Add Debit Card"),bodyText:q._("Just add a debit card to get started."),icon:'coin',isDismissable:true,onClick:this.handleClick,onClose:this.handleDismissClick,titleText:q._("Send {Amount user will receive} to a friend on us!",[q.param('Amount user will receive',s)])}));}});f.exports=t;},null);