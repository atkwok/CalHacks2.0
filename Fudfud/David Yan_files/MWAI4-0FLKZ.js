/*!CK:2803261544!*//*1443027786,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["f8a07"]); }

__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/events\/",{});},null,{});
__d('EntstreamAttachmentRelatedShare',['Arbiter','AsyncRequest','AttachmentRelatedShareConstants','csx','cx','CSS','DOM','Event','ge','tidyEvent','XPubcontentInlinePhotoPivotsEventsController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=2,t=3,u={loadRelatedAttachment:function(v,w,x){var y=null;if(typeof v==="string"){y=p(v);}else y=v;if(!y)return;var z=o.listen(y,'click',function(){z.remove();h.inform(j.ARTICLE_CLICK,{attachment:y,global_share_id:w,is_right_click:false,share_id:x});}),aa=o.listen(y,'mousedown',function(event){if(event.which===t||event.button===s){aa.remove();h.inform(j.ARTICLE_CLICK,{attachment:y,global_share_id:w,is_right_click:true});}});},loadInlineStoryPivotAttachment:function(v,w){var x=p(v);if(!x)return;var y=o.listen(x,'click',function(){y.remove();h.inform(j.PHOTO_CLICK,{attachment:x,storyid:w});});},loadRelatedGameAttachment:function(v,w){var x=null;if(typeof v==="string"){x=p(v);}else x=v;if(!x)return;q(o.listen(x,'click',function(){h.inform(j.GAME_CLICK,{attachment:x,global_share_id:w});}));q(o.listen(x,'mousedown',function(event){if(event.which===t||event.button===s)h.inform(j.GAME_CLICK,{attachment:x,global_share_id:w});}));},loadRelatedLSCVideoAttachment:function(v,w){var x=null;if(typeof v==='string'){x=p(v);}else x=v;if(!x)return;var y="^div._4-u2",z=n.scry(x,y),aa=o.listen(x,'click',function(){aa.remove();h.inform(j.VIDEO_CLICK,{attachment:x,global_share_id:w});});},loadRelatedLSCInlineVideoAttachment:function(v,w){var x=null;if(typeof v==='string'){x=p(v);}else x=v;if(!x)return;o.listen(x,'click',function(){var y="^div._4-u2",z="_1d8v",aa=n.scry(x,y),ba=aa.length===1?aa[0]:null,ca=ba.parentNode,da=ca.previousSibling;while(!da){ca=ca.parentNode;da=ca.previousSibling;}if(!m.hasClass(da,z)){var ea=n.create('div',{className:z}),fa=n.insertBefore(ba.parentNode,ea),ga=fa.length>=1?fa[0]:null;}else ga=da;var ha=n.getID(ga);new i().setURI('/ajax/flash/expand_inline.php').setData({share_id:w,target_div:ha,max_width:470,max_height:264,replace_target_div:true}).setMethod('GET').setReadOnly(true).setRelativeTo(x.parentNode).send();});},loadRelatedEventsPivotAttachment:function(v,w){var x=null;if(typeof v==="string"){x=p(v);}else x=v;if(!x)return;q(o.listen(x,'click',function(){h.inform(j.EVENT_JOIN,{attachment:x,event_id:w});}));},closeButton:function(v,w){o.listen(v,'click',function(){n.remove(w);});},closeButtonPhotoPivots:function(v,w,x,y){o.listen(v,'click',function(){var z=r.getURIBuilder(),aa={story_id:x,search_query_type:y,event:'hide'};new i().setMethod('POST').setURI(z.getURI()).setData(aa).send();n.remove(w);});},seeAllLinkPhotoPivots:function(v,w,x){o.listen(v,'click',function(){var y=r.getURIBuilder(),z={story_id:w,search_query_type:x,event:'see_all'};new i().setMethod('POST').setURI(y.getURI()).setData(z).send();});},removeOldSuggestions:function(v){var w=p(v);if(!w)return;var x=n.scry(w.parentNode,"._5d73");for(var y=1;y<x.length;y++)n.remove(x[y]);setTimeout(function(){m.show(x[0]);},1000);},showHiddenSuggestions:function(v){var w=o.listen(v,'click',function(){w.remove();var x="^._1ui8",y=n.scry(v,x);if(!y)return;m.hide(y[0]);var z=y[0].previousSibling;while(z){m.show(z);z=z.previousSibling;}});}};f.exports=u;},null);