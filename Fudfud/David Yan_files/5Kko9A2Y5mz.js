/*!CK:1153863879!*//*1444225500,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["IZJAP"]); }

__d('legacy:locale-selector',['setLocaleRegion'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.setLocaleRegion=c('setLocaleRegion');},3);
__d('PhotoViewerInitPagelet',['ge','DOM','PhotoSnowlift','PhotoTags','PhotoTagger','PhotoTagApproval'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o){'use strict';j.attachTagger(o.tagging,o.tokenizer);var p=j.getInstance(),q=p.getRoot();new k([h('fbPhotoSnowliftAuthorName'),i.find(q,'span.fbPhotoTagList'),i.find(q,'div.fbPhotoPagesTagList')],h('fbPhotoSnowliftTagBoxes'),o.version);if(o.setupPhotoTagger){var r=new l(p);r.initSnowlift(o.tagging,o.tokenizer,o.userId);r.setQueueName(o.queueName);}new m(p);}f.exports=n;},null);