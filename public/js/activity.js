(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([["/js/activity"],{"./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Activity.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Activity.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(/*! jquery */"./node_modules/jquery/dist/jquery.js");function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}const r={data:function(){return{notifications:{},notificationCursor:2,notificationMaxId:0}},mounted:function(){this.fetchNotifications()},updated:function(){s('[data-toggle="tooltip"]').tooltip()},methods:{fetchNotifications:function(){var t=this;axios.get("/api/pixelfed/v1/accounts/verify_credentials").then((function(t){window._sharedData.curUser=t.data,window.App.util.navatar()})),axios.get("/api/pixelfed/v1/notifications?pg=true").then((function(e){var a=e.data.filter((function(t){return!("share"==t.type&&!t.status)&&(!("comment"==t.type&&!t.status)&&(!("mention"==t.type&&!t.status)&&(!("favourite"==t.type&&!t.status)&&!("follow"==t.type&&!t.account))))})),n=e.data.map((function(t){return t.id}));t.notificationMaxId=Math.max.apply(Math,o(n)),t.notifications=a,s(".notification-card .loader").addClass("d-none"),s(".notification-card .contents").removeClass("d-none")}))},infiniteNotifications:function(t){var e=this;this.notificationCursor>10?t.complete():axios.get("/api/pixelfed/v1/notifications",{params:{max_id:this.notificationMaxId}}).then((function(a){if(a.data.length){var s,n=a.data.filter((function(t){return!("share"==t.type&&!t.status)&&(!("comment"==t.type&&!t.status)&&(!("mention"==t.type&&!t.status)&&(!("favourite"==t.type&&!t.status)&&(!("follow"==t.type&&!t.account)&&!_.find(e.notifications,{id:t.id})))))})),r=n.map((function(t){return t.id}));e.notificationMaxId=Math.max.apply(Math,o(r)),(s=e.notifications).push.apply(s,o(n)),e.notificationCursor++,t.loaded()}else t.complete()}))},truncate:function(t){return t.length<=15?t:t.slice(0,15)+"..."},timeAgo:function(t){var e=Date.parse(t),a=Math.floor((new Date-e)/1e3),s=Math.floor(a/31536e3);return s>=1?s+"y":(s=Math.floor(a/604800))>=1?s+"w":(s=Math.floor(a/86400))>=1?s+"d":(s=Math.floor(a/3600))>=1?s+"h":(s=Math.floor(a/60))>=1?s+"m":Math.floor(a)+"s"},mentionUrl:function(t){return"/p/"+t.account.username+"/"+t.id},viewContext:function(t){switch(t.type){case"follow":return t.account.url;case"mention":case"like":case"favourite":case"comment":return t.status.url;case"tagged":return t.tagged.post_url;case"direct":return"/account/direct/t/"+t.account.id}return"/"},getProfileUrl:function(t){return 1==t.local?t.url:"/i/web/profile/_/"+t.id},getPostUrl:function(t){return 1==t.local?t.url:"/i/web/post/_/"+t.account.id+"/"+t.id}}}},"./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/(t,e,a)=>{"use strict";a.r(e),a.d(e,{render:()=>s,staticRenderFns:()=>o});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row my-5"},[e("div",{staticClass:"col-12 col-md-8 offset-md-2"},[t._l(t.notifications,(function(a,s){return t.notifications.length>0?e("div",{staticClass:"media mb-3 align-items-center px-3 border-bottom pb-3"},[e("img",{staticClass:"mr-2 rounded-circle",staticStyle:{border:"1px solid #ccc"},attrs:{src:a.account.avatar,alt:"",width:"32px",height:"32px"}}),t._v(" "),e("div",{staticClass:"media-body font-weight-light"},["favourite"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" liked your "),e("a",{staticClass:"font-weight-bold",attrs:{href:t.getPostUrl(a.status)}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t")])]):"comment"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" commented on your "),e("a",{staticClass:"font-weight-bold",attrs:{href:t.getPostUrl(a.status)}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t")])]):"group:comment"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" commented on your "),e("a",{staticClass:"font-weight-bold",attrs:{href:a.group_post_url}},[t._v("group post")]),t._v(".\n\t\t\t\t\t\t\t")])]):"story:react"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" reacted to your "),e("a",{staticClass:"font-weight-bold",attrs:{href:"/account/direct/t/"+a.account.id}},[t._v("story")]),t._v(".\n\t\t\t\t\t\t\t")])]):"story:comment"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" commented on your "),e("a",{staticClass:"font-weight-bold",attrs:{href:"/account/direct/t/"+a.account.id}},[t._v("story")]),t._v(".\n\t\t\t\t\t\t\t")])]):"mention"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" "),e("a",{staticClass:"font-weight-bold",attrs:{href:t.mentionUrl(a.status)}},[t._v("mentioned")]),t._v(" you.\n\t\t\t\t\t\t\t")])]):"follow"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" followed you.\n\t\t\t\t\t\t\t")])]):"share"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),"data-placement":"bottom","data-toggle":"tooltip",title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" shared your "),e("a",{staticClass:"font-weight-bold",attrs:{href:t.getPostUrl(a.status)}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t")])]):"modlog"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),title:a.account.username}},[t._v(t._s(t.truncate(a.account.username)))]),t._v(" updated a "),e("a",{staticClass:"font-weight-bold",attrs:{href:a.modlog.url}},[t._v("modlog")]),t._v(".\n\t\t\t\t\t\t\t")])]):"tagged"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" tagged you in a "),e("a",{staticClass:"font-weight-bold",attrs:{href:a.tagged.post_url}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t")])]):"direct"==a.type||"direct"==a.type?e("div",[e("p",{staticClass:"my-0"},[e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:t.getProfileUrl(a.account),title:a.account.username}},[t._v(t._s(0==a.account.local?"@":"")+t._s(t.truncate(a.account.username)))]),t._v(" sent a "),e("a",{staticClass:"font-weight-bold",attrs:{href:"/account/direct/t/"+a.account.id}},[t._v("dm")]),t._v(".\n\t\t\t\t\t\t\t")])]):"group.join.approved"==a.type?e("div",[e("p",{staticClass:"my-0"},[t._v("\n\t\t\t\t\t\t\t\tYour application to join "),e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:a.group.url,title:a.group.name}},[t._v(t._s(t.truncate(a.group.name)))]),t._v(" was approved!\n\t\t\t\t\t\t\t")])]):"group.join.rejected"==a.type?e("div",[e("p",{staticClass:"my-0"},[t._v("\n\t\t\t\t\t\t\t\tYour application to join "),e("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:a.group.url,title:a.group.name}},[t._v(t._s(t.truncate(a.group.name)))]),t._v(" was rejected. You can re-apply to join in 6 months.\n\t\t\t\t\t\t\t")])]):t._e(),t._v(" "),e("div",{staticClass:"align-items-center"},[e("span",{staticClass:"small text-muted",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:a.created_at}},[t._v(t._s(t.timeAgo(a.created_at)))])])]),t._v(" "),e("div",[a.status&&a.status&&a.status.media_attachments&&a.status.media_attachments.length?e("div",[e("a",{attrs:{href:t.getPostUrl(a.status)}},[e("img",{attrs:{src:a.status.media_attachments[0].preview_url,width:"32px",height:"32px"}})])]):a.status&&a.status.parent&&a.status.parent.media_attachments&&a.status.parent.media_attachments.length?e("div",[e("a",{attrs:{href:a.status.parent.url}},[e("img",{attrs:{src:a.status.parent.media_attachments[0].preview_url,width:"32px",height:"32px"}})])]):e("div",["/"!=t.viewContext(a)?e("a",{staticClass:"btn btn-outline-primary py-0 font-weight-bold",attrs:{href:t.viewContext(a)}},[t._v("View")]):t._e()])])]):t._e()})),t._v(" "),t.notifications.length?e("div",[e("infinite-loading",{on:{infinite:t.infiniteNotifications}},[e("div",{staticClass:"font-weight-bold",attrs:{slot:"no-results"},slot:"no-results"}),t._v(" "),e("div",{staticClass:"font-weight-bold",attrs:{slot:"no-more"},slot:"no-more"})])],1):t._e(),t._v(" "),0==t.notifications.length?e("div",{staticClass:"text-lighter text-center py-3"},[t._m(0),t._v(" "),e("p",{staticClass:"mb-0 small font-weight-bold"},[t._v("0 Notifications!")])]):t._e()],2)])])])},o=[function(){var t=this._self._c;return t("p",{staticClass:"mb-0"},[t("i",{staticClass:"fas fa-inbox fa-3x"})])}];s._withStripped=!0},"./resources/assets/js/activity.js":
/*!*****************************************!*\
  !*** ./resources/assets/js/activity.js ***!
  \*****************************************/(t,e,a)=>{Vue.component("activity-component",a(/*! ./components/Activity.vue */"./resources/assets/js/components/Activity.vue").default)},"./resources/assets/js/components/Activity.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/Activity.vue ***!
  \*****************************************************/(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(/*! ./Activity.vue?vue&type=template&id=4a9a4cc6& */"./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6&"),o=a(/*! ./Activity.vue?vue&type=script&lang=js& */"./resources/assets/js/components/Activity.vue?vue&type=script&lang=js&"),n={};for(const t in o)"default"!==t&&(n[t]=()=>o[t]);a.d(e,n);var r=(0,a(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js").default)(o.default,s.render,s.staticRenderFns,!1,null,null,null);r.options.__file="resources/assets/js/components/Activity.vue";const i=r.exports},"./resources/assets/js/components/Activity.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/Activity.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Activity.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Activity.vue?vue&type=script&lang=js&"),o={};for(const t in s)"default"!==t&&(o[t]=()=>s[t]);a.d(e,o);const n=s.default},"./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6& ***!
  \************************************************************************************/(t,e,a)=>{"use strict";a.r(e);var s=a(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Activity.vue?vue&type=template&id=4a9a4cc6& */"./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6&"),o={};for(const t in s)"default"!==t&&(o[t]=()=>s[t]);a.d(e,o)}},t=>{t.O(0,["/js/vendor"],(()=>{return e="./resources/assets/js/activity.js",t(t.s=e);var e}));t.O()}]);