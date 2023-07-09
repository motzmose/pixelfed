(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[7364],{8787:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var a=i(19755);const s={data:function(){return{config:window.App.config,profile:{},composeText:"",composeTextLength:0,nsfw:!1,filters:[],ids:[],media:[],carouselCursor:0,visibility:"public",mediaDrawer:!1,composeState:"publish",uploading:!1,uploadProgress:0,composeType:!1}},beforeMount:function(){this.fetchProfile()},mounted:function(){this.mediaWatcher(),this.filters=[["1977","filter-1977"],["Aden","filter-aden"],["Amaro","filter-amaro"],["Ashby","filter-ashby"],["Brannan","filter-brannan"],["Brooklyn","filter-brooklyn"],["Charmes","filter-charmes"],["Clarendon","filter-clarendon"],["Crema","filter-crema"],["Dogpatch","filter-dogpatch"],["Earlybird","filter-earlybird"],["Gingham","filter-gingham"],["Ginza","filter-ginza"],["Hefe","filter-hefe"],["Helena","filter-helena"],["Hudson","filter-hudson"],["Inkwell","filter-inkwell"],["Kelvin","filter-kelvin"],["Kuno","filter-juno"],["Lark","filter-lark"],["Lo-Fi","filter-lofi"],["Ludwig","filter-ludwig"],["Maven","filter-maven"],["Mayfair","filter-mayfair"],["Moon","filter-moon"],["Nashville","filter-nashville"],["Perpetua","filter-perpetua"],["Poprocket","filter-poprocket"],["Reyes","filter-reyes"],["Rise","filter-rise"],["Sierra","filter-sierra"],["Skyline","filter-skyline"],["Slumber","filter-slumber"],["Stinson","filter-stinson"],["Sutro","filter-sutro"],["Toaster","filter-toaster"],["Valencia","filter-valencia"],["Vesper","filter-vesper"],["Walden","filter-walden"],["Willow","filter-willow"],["X-Pro II","filter-xpro-ii"]]},methods:{fetchProfile:function(){var t=this;axios.get("/api/pixelfed/v1/accounts/verify_credentials").then((function(e){t.profile=e.data,1==e.data.locked&&(t.visibility="private")})).catch((function(t){}))},addMedia:function(t){var e=a(t.target);e.attr("disabled",""),a('.file-input[name="media"]').trigger("click"),e.blur(),e.removeAttr("disabled")},mediaWatcher:function(){var t=this;a(document).on("change",".file-input",(function(e){var i=document.querySelector(".file-input");Array.prototype.forEach.call(i.files,(function(e,i){if(t.uploading=!0,t.media&&t.media.length+i>=t.config.uploader.album_limit)swal("Error","You can only upload "+t.config.uploader.album_limit+" photos per album","error");else{var s=e.type,o=t.config.uploader.media_types.split(",");if(-1!=a.inArray(s,o)){var r=new FormData;r.append("file",e);var l={onUploadProgress:function(e){var i=Math.round(100*e.loaded/e.total);t.uploadProgress=i}};axios.post("/api/pixelfed/v1/media",r,l).then((function(e){t.uploadProgress=100,t.ids.push(e.data.id),t.media.push(e.data),setTimeout((function(){t.uploading=!1}),1e3)})).catch((function(i){t.uploading=!1,e.value=null,swal("Oops, something went wrong!","An unexpected error occurred.","error")})),e.value=null,t.uploadProgress=0}else swal("Invalid File Type","The file you are trying to add is not a valid mime type. Please upload a "+t.config.uploader.media_types+" only.","error")}}))}))},toggleFilter:function(t,e){this.media[this.carouselCursor].filter_class=e},updateMedia:function(){this.mediaDrawer=!1},deleteMedia:function(){var t=this;if(0!=window.confirm("Are you sure you want to delete this media?")){var e=this.media[this.carouselCursor].id;axios.delete("/api/pixelfed/v1/media",{params:{id:e}}).then((function(e){1==t.media.length&&(t.mediaDrawer=!1,t.ids=[],t.media=[],t.carouselCursor=0),t.ids.splice(t.carouselCursor,1),t.media.splice(t.carouselCursor,1)})).catch((function(t){swal("Whoops!","An error occured when attempting to delete this, please try again","error")}))}},mediaAltText:function(){},mediaLicense:function(){},compose:function(){var t=this.composeState;if(100==this.uploadProgress&&0!=this.ids.length)if(this.composeText.length>this.config.uploader.max_caption_length)swal("Error","Caption is too long","error");else switch(t){case"publish":if(0==this.media.length)return void swal("Whoops!","You need to add media before you can save this!","warning");"Add optional caption..."==this.composeText&&(this.composeText="");var e={media:this.media,caption:this.composeText,visibility:this.visibility,cw:this.nsfw};return void axios.post("/api/local/status/compose",e).then((function(t){var e=t.data;window.location.href=e})).catch((function(t){var e=t.response.data.message?t.response.data.message:"An unexpected error occured.";swal("Oops, something went wrong!",e,"error")}));case"delete":return this.mediaDrawer=!1,this.ids=[],this.media=[],this.carouselCursor=0,this.composeText="",this.composeTextLength=0,void a("#composeModal").modal("hide")}},about:function(){var t=document.createElement("div");t.innerHTML='\n\t\t\t\t<p class="small font-weight-bold">Please visit the <a href="/site/kb/sharing-media">Sharing Media</a> page for more info.</p>\n\t\t\t',swal({title:"Compose UI v3",content:t,icon:"info"})},closeModal:function(){this.composeType="",a("#composeModal").modal("hide")},composeMessage:function(){var t=this.config;this.composeType;return t.uploader.media_types.includes("video/mp4")?"Click here to add photos or videos":"Click here to add photos"},createCollection:function(){window.location.href="/i/collections/create"},maxSize:function(){return this.config.uploader.max_photo_size/1e3+" MB"},acceptedFormats:function(){return this.config.uploader.media_types.split(",").map((function(t){return" "+t.split("/")[1]})).toString()}}}},18178:(t,e,i)=>{"use strict";i.r(e),i.d(e,{render:()=>a,staticRenderFns:()=>s});var a=function(){var t=this,e=t._self._c;return e("div",[e("input",{staticClass:"d-none file-input",attrs:{type:"file",name:"media",multiple:"",accept:t.config.uploader.media_types}}),t._v(" "),e("div",{staticClass:"timeline"},[e("div",{staticClass:"card status-card card-md-rounded-0"},[e("div",{staticClass:"card-header d-inline-flex align-items-center bg-white"},[e("img",{staticClass:"box-shadow",staticStyle:{"border-radius":"32px"},attrs:{src:t.profile.avatar,width:"32px",height:"32px"}}),t._v(" "),e("a",{staticClass:"username font-weight-bold pl-2 text-dark",attrs:{href:t.profile.url}},[t._v("\r\n\t\t\t\t\t"+t._s(t.profile.username)+"\r\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"text-right",staticStyle:{"flex-grow":"1"}},[e("div",{staticClass:"dropdown"},[t._m(0),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("div",{staticClass:"dropdown-item small font-weight-bold",on:{click:t.createCollection}},[t._v("Create Collection")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("div",{staticClass:"dropdown-item small font-weight-bold",on:{click:t.about}},[t._v("About")]),t._v(" "),e("div",{staticClass:"dropdown-item small font-weight-bold",on:{click:t.closeModal}},[t._v("Close")])])])])]),t._v(" "),e("div",{staticClass:"postPresenterContainer"},[t.uploading?e("div",[e("div",{staticClass:"w-100 h-100 bg-light py-5",staticStyle:{"border-bottom":"1px solid #f1f1f1"}},[e("div",{staticClass:"p-5"},[e("b-progress",{attrs:{value:t.uploadProgress,max:100,striped:"",animated:!0}}),t._v(" "),e("p",{staticClass:"text-center mb-0 font-weight-bold"},[t._v("Uploading ... ("+t._s(t.uploadProgress)+"%)")])],1)])]):e("div",[t.ids.length>0&&t.ids.length!=t.config.uploader.album_limit?e("div",{staticClass:"card-header py-2 bg-primary m-2 rounded cursor-pointer",on:{click:function(e){return t.addMedia(e)}}},[t._m(1)]):t._e(),t._v(" "),0==t.ids.length?e("div",{staticClass:"w-100 h-100 bg-light py-5 cursor-pointer",staticStyle:{"border-bottom":"1px solid #f1f1f1"},on:{click:function(e){return t.addMedia(e)}}},[e("div",{staticClass:"p-5"},[e("p",{staticClass:"text-center font-weight-bold"},[t._v(t._s(t.composeMessage()))]),t._v(" "),e("p",{staticClass:"text-muted mb-0 small text-center"},[t._v("Accepted Formats: "),e("b",[t._v(t._s(t.acceptedFormats()))])]),t._v(" "),e("p",{staticClass:"text-muted mb-0 small text-center"},[t._v("Max File Size: "),e("b",[t._v(t._s(t.maxSize()))])]),t._v(" "),e("p",{staticClass:"text-muted mb-0 small text-center"},[t._v("Albums can contain up to "),e("b",[t._v(t._s(t.config.uploader.album_limit))]),t._v(" photos or videos")])])]):t._e(),t._v(" "),t.ids.length>0?e("div",[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"p-carousel",controls:"",indicators:"",background:"#ffffff",interval:0},model:{value:t.carouselCursor,callback:function(e){t.carouselCursor=e},expression:"carouselCursor"}},t._l(t.media,(function(i,a){return t.ids.length>0?e("b-carousel-slide",{key:"preview_media_"+a},[e("div",{class:[t.media[a].filter_class?t.media[a].filter_class:""],staticStyle:{display:"flex","min-height":"320px","align-items":"center"},attrs:{slot:"img"},slot:"img"},[e("img",{staticClass:"d-block img-fluid w-100",attrs:{src:i.url,alt:i.description,title:i.description}})])]):t._e()})),1)],1):t._e(),t._v(" "),t.ids.length>0&&"image"==t.media[t.carouselCursor].type?e("div",{staticClass:"bg-dark align-items-center"},[e("ul",{staticClass:"nav media-drawer-filters text-center"},[e("li",{staticClass:"nav-item"},[e("div",{staticClass:"p-1 pt-3"},[e("img",{staticClass:"cursor-pointer",attrs:{src:t.media[t.carouselCursor].url,width:"100px",height:"60px"},on:{click:function(e){return e.preventDefault(),t.toggleFilter(e,null)}}})]),t._v(" "),e("a",{class:[null==t.media[t.carouselCursor].filter_class?"nav-link text-white active":"nav-link text-muted"],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleFilter(e,null)}}},[t._v("No Filter")])]),t._v(" "),t._l(t.filters,(function(i,a){return e("li",{staticClass:"nav-item"},[e("div",{staticClass:"p-1 pt-3"},[e("img",{class:i[1],attrs:{src:t.media[t.carouselCursor].url,width:"100px",height:"60px"},on:{click:function(e){return e.preventDefault(),t.toggleFilter(e,i[1])}}})]),t._v(" "),e("a",{class:[t.media[t.carouselCursor].filter_class==i[1]?"nav-link text-white active":"nav-link text-muted"],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleFilter(e,i[1])}}},[t._v(t._s(i[0]))])])}))],2)]):t._e()]),t._v(" "),t.ids.length>0&&-1!=["image","video"].indexOf(t.media[t.carouselCursor].type)?e("div",{staticClass:"bg-lighter p-2 row"},["Image"==t.media[t.carouselCursor].type?e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.media[t.carouselCursor].alt,expression:"media[carouselCursor].alt"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Optional image description"},domProps:{value:t.media[t.carouselCursor].alt},on:{input:function(e){e.target.composing||t.$set(t.media[t.carouselCursor],"alt",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.media[t.carouselCursor].license,expression:"media[carouselCursor].license"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Optional media license"},domProps:{value:t.media[t.carouselCursor].license},on:{input:function(e){e.target.composing||t.$set(t.media[t.carouselCursor],"license",e.target.value)}}})])]):t._e(),t._v(" "),e("div",{staticClass:"col-12 text-right pt-2"},[e("button",{staticClass:"btn btn-outline-danger btn-sm font-weight-bold mr-1",on:{click:function(e){return t.deleteMedia()}}},[t._v("Delete Media")])])]):t._e()]),t._v(" "),e("div",{staticClass:"card-body p-0 border-top"},[e("div",{staticClass:"caption"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.composeText,expression:"composeText"}],staticClass:"form-control mb-0 border-0 rounded-0",attrs:{rows:"3",placeholder:"Add an optional caption"},domProps:{value:t.composeText},on:{input:function(e){e.target.composing||(t.composeText=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",[e("div",{staticClass:"custom-control custom-switch d-inline mr-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.nsfw,expression:"nsfw"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"nsfwToggle"},domProps:{checked:Array.isArray(t.nsfw)?t._i(t.nsfw,null)>-1:t.nsfw},on:{change:function(e){var i=t.nsfw,a=e.target,s=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.nsfw=i.concat([null])):o>-1&&(t.nsfw=i.slice(0,o).concat(i.slice(o+1)))}else t.nsfw=s}}}),t._v(" "),e("label",{staticClass:"custom-control-label small font-weight-bold text-muted pt-1",attrs:{for:"nsfwToggle"}},[t._v("NSFW")])]),t._v(" "),e("div",{staticClass:"dropdown d-inline"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm py-0 dropdown-toggle",attrs:{type:"button",id:"visibility","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\r\n\t\t\t\t\t\t\t\t"+t._s(t.visibility[0].toUpperCase()+t.visibility.slice(1))+"\r\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"dropdown-menu",staticStyle:{width:"200px"},attrs:{"aria-labelledby":"visibility"}},[e("a",{class:["public"==t.visibility?"dropdown-item active":"dropdown-item"],attrs:{href:"#","data-id":"public","data-title":"Public"},on:{click:function(e){e.preventDefault(),t.visibility="public"}}},[t._m(2)]),t._v(" "),e("a",{class:["private"==t.visibility?"dropdown-item active":"dropdown-item"],attrs:{href:"#","data-id":"private","data-title":"Followers Only"},on:{click:function(e){e.preventDefault(),t.visibility="private"}}},[t._m(3)]),t._v(" "),e("a",{class:["unlisted"==t.visibility?"dropdown-item active":"dropdown-item"],attrs:{href:"#","data-id":"private","data-title":"Unlisted"},on:{click:function(e){e.preventDefault(),t.visibility="unlisted"}}},[t._m(4)])])])]),t._v(" "),e("div",{staticClass:"small text-muted font-weight-bold"},[t._v("\r\n\t\t\t\t\t\t"+t._s(t.composeText.length)+" / "+t._s(t.config.uploader.max_caption_length)+"\r\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"pl-md-5"},[e("button",{staticClass:"btn btn-primary btn-sm font-weight-bold px-3",on:{click:function(e){return t.compose()}}},[t._v("Publish")])])])])])])])},s=[function(){var t=this._self._c;return t("button",{staticClass:"btn btn-link text-dark no-caret dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",title:"Post options"}},[t("span",{staticClass:"fas fa-ellipsis-v fa-lg text-muted"})])},function(){var t=this._self._c;return t("p",{staticClass:"text-center mb-0 font-weight-bold text-white"},[t("i",{staticClass:"fas fa-plus mr-1"}),this._v(" Add Photo")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"d-none d-block-sm col-sm-2 px-0 text-center"},[e("i",{staticClass:"fas fa-globe"})]),t._v(" "),e("div",{staticClass:"col-12 col-sm-10 pl-2"},[e("p",{staticClass:"font-weight-bold mb-0"},[t._v("Public")]),t._v(" "),e("p",{staticClass:"small mb-0"},[t._v("Anyone can see")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"d-none d-block-sm col-sm-2 px-0 text-center"},[e("i",{staticClass:"fas fa-lock"})]),t._v(" "),e("div",{staticClass:"col-12 col-sm-10 pl-2"},[e("p",{staticClass:"font-weight-bold mb-0"},[t._v("Followers Only")]),t._v(" "),e("p",{staticClass:"small mb-0"},[t._v("Only followers can see")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"d-none d-block-sm col-sm-2 px-0 text-center"},[e("i",{staticClass:"fas fa-lock"})]),t._v(" "),e("div",{staticClass:"col-12 col-sm-10 pl-2"},[e("p",{staticClass:"font-weight-bold mb-0"},[t._v("Unlisted")]),t._v(" "),e("p",{staticClass:"small mb-0"},[t._v("Not listed on public timelines")])])])}]},41432:(t,e,i)=>{Vue.component("compose-classic",i(64144).default)},5389:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(1519),s=i.n(a)()((function(t){return t[1]}));s.push([t.id,".media-drawer-filters[data-v-52c4a7c6]{flex-wrap:unset;overflow-x:scroll}.media-drawer-filters .nav-link[data-v-52c4a7c6]{min-width:100px;padding-bottom:1rem;padding-top:1rem}.media-drawer-filters .active[data-v-52c4a7c6]{color:#fff;font-weight:700}@media (hover:none) and (pointer:coarse){.media-drawer-filters[data-v-52c4a7c6]::-webkit-scrollbar{display:none}}",""]);const o=s},24260:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var a=i(93379),s=i.n(a),o=i(5389),r={insert:"head",singleton:!1};s()(o.default,r);const l=o.default.locals||{}},64144:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var a=i(22972),s=i(24613),o={};for(const t in s)"default"!==t&&(o[t]=()=>s[t]);i.d(e,o);i(17589);const r=(0,i(51900).default)(s.default,a.render,a.staticRenderFns,!1,null,"52c4a7c6",null).exports},24613:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(8787),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s);const o=a.default},22972:(t,e,i)=>{"use strict";i.r(e);var a=i(18178),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s)},17589:(t,e,i)=>{"use strict";i.r(e);var a=i(24260),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s)}},t=>{t.O(0,[8898],(()=>{return e=41432,t(t.s=e);var e}));t.O()}]);