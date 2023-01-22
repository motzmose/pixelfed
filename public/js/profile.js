(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PostMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PostMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['feed', 'status', 'profile', 'size', 'modal'],
  data: function data() {
    return {
      activeSession: false
    };
  },
  mounted: function mounted() {
    var el = document.querySelector('body');
    this.activeSession = el.classList.contains('loggedIn') ? true : false;
  },
  methods: {
    reportUrl: function reportUrl(status) {
      var type = status.in_reply_to ? 'comment' : 'post';
      var id = status.id;
      return '/i/report?type=' + type + '&id=' + id;
    },
    timestampFormat: function timestampFormat(timestamp) {
      var ts = new Date(timestamp);
      return ts.toDateString() + ' ' + ts.toLocaleTimeString();
    },
    editUrl: function editUrl(status) {
      return status.url + '/edit';
    },
    redirect: function redirect(url) {
      window.location.href = url;
      return;
    },
    replyUrl: function replyUrl(status) {
      var username = this.profile.username;
      var id = status.account.id == this.profile.id ? status.id : status.in_reply_to_id;
      return '/p/' + username + '/' + id;
    },
    mentionUrl: function mentionUrl(status) {
      var username = status.account.username;
      var id = status.id;
      return '/p/' + username + '/' + id;
    },
    statusOwner: function statusOwner(status) {
      var sid = parseInt(status.account.id);
      var uid = parseInt(this.profile.id);

      if (sid == uid) {
        return true;
      } else {
        return false;
      }
    },
    deletePost: function deletePost() {
      this.$emit('deletePost');
      $('#mt_pid_' + this.status.id).modal('hide');
    },
    hidePost: function hidePost(status) {
      status.sensitive = true;
      $('#mt_pid_' + status.id).modal('hide');
    },
    moderatePost: function moderatePost(status, action, $event) {
      var username = status.account.username;

      switch (action) {
        case 'autocw':
          var msg = 'Are you sure you want to enforce CW for ' + username + ' ?';
          swal({
            title: 'Confirm',
            text: msg,
            icon: 'warning',
            buttons: true,
            dangerMode: true
          });
          break;

        case 'suspend':
          msg = 'Are you sure you want to suspend the account of ' + username + ' ?';
          swal({
            title: 'Confirm',
            text: msg,
            icon: 'warning',
            buttons: true,
            dangerMode: true
          });
          break;
      }
    },
    muteProfile: function muteProfile(status) {
      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      axios.post('/i/mute', {
        type: 'user',
        item: status.account.id
      }).then(function (res) {
        swal('Success', 'You have successfully muted ' + status.account.acct, 'success');
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
    },
    blockProfile: function blockProfile(status) {
      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      axios.post('/i/block', {
        type: 'user',
        item: status.account.id
      }).then(function (res) {
        swal('Success', 'You have successfully blocked ' + status.account.acct, 'success');
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
    },
    statusUrl: function statusUrl(status) {
      if (status.local == true) {
        return status.url;
      }

      return '/i/web/post/_/' + status.account.id + '/' + status.id;
    },
    profileUrl: function profileUrl(status) {
      if (status.local == true) {
        return status.account.url;
      }

      return '/i/web/profile/_/' + status.account.id;
    },
    closeModal: function closeModal() {
      $('#mt_pid_' + this.status.id).modal('hide');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_masonry_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-masonry-css */ "./node_modules/vue-masonry-css/dist/vue-masonry.es2015.js");
/* harmony import */ var _partials_StatusCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/StatusCard.vue */ "./resources/assets/js/components/partials/StatusCard.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['profile-id', 'profile-layout', 'profile-settings', 'profile-username'],
  components: {
    StatusCard: _partials_StatusCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      ids: [],
      profile: {},
      user: false,
      timeline: [],
      timelinePage: 2,
      min_id: 0,
      max_id: 0,
      loading: true,
      owner: false,
      layout: 'metro',
      mode: 'grid',
      modes: ['grid', 'collections', 'bookmarks', 'archives'],
      modalStatus: false,
      relationship: {},
      followers: [],
      followerCursor: 1,
      followerMore: true,
      followerLoading: true,
      following: [],
      followingCursor: 1,
      followingMore: true,
      followingLoading: true,
      warning: false,
      sponsorList: [],
      bookmarks: [],
      bookmarksPage: 2,
      collections: [],
      collectionsLoaded: false,
      collectionsPage: 2,
      isMobile: false,
      ctxEmbedPayload: null,
      copiedEmbed: false,
      hasStory: null,
      followingModalSearch: null,
      followingModalSearchCache: null,
      followingModalTab: 'following',
      bookmarksLoading: true,
      archives: [],
      archivesPage: 2
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    this.fetchProfile();
    var u = new URLSearchParams(window.location.search);
    var forceMetro = localStorage.getItem('pf_metro_ui.exp.forceMetro') == 'true';

    if (u.has('ui') && u.get('ui') == 'moment' && this.layout != 'moment') {
      this.layout = 'moment';
    }

    if (forceMetro == true || u.has('ui') && u.get('ui') == 'metro' && this.layout != 'metro') {
      this.layout = 'metro';
    }

    if (this.layout == 'metro' && u.has('t')) {
      if (this.modes.indexOf(u.get('t')) != -1) {
        if (u.get('t') == 'bookmarks') {
          return;
        }

        this.mode = u.get('t');
      }
    }

    if (u.has('m') && this.modes.includes(u.get('m'))) {
      this.mode = u.get('m');

      if (this.mode == 'bookmarks') {
        axios.get('/api/local/bookmarks').then(function (res) {
          _this.bookmarks = res.data;
          _this.bookmarksLoading = false;
        })["catch"](function (err) {
          _this.mode = 'grid';
        });
      }

      if (this.mode == 'collections') {
        axios.get('/api/local/profile/collections/' + this.profileId).then(function (res) {
          _this.collections = res.data;
          _this.collectionsLoaded = true;
        })["catch"](function (err) {
          _this.mode = 'grid';
        });
      }

      if (this.mode == 'archives') {
        axios.get('/api/pixelfed/v2/statuses/archives').then(function (res) {
          _this.archives = res.data;
        })["catch"](function (err) {
          _this.mode = 'grid';
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var u = new URLSearchParams(window.location.search);

    if (u.has('md') && u.get('md') == 'followers') {
      this.followersModal();
    }

    if (u.has('md') && u.get('md') == 'following') {
      this.followingModal();
    }

    if (document.querySelectorAll('body')[0].classList.contains('loggedIn') == true) {
      axios.get('/api/pixelfed/v1/accounts/verify_credentials').then(function (res) {
        _this2.user = res.data;
        window._sharedData.curUser = res.data;
        window.App.util.navatar();

        _this2.fetchRelationships();
      });
    }
  },
  updated: function updated() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  methods: {
    fetchProfile: function fetchProfile() {
      var _this3 = this;

      axios.get('/api/pixelfed/v1/accounts/' + this.profileId).then(function (res) {
        _this3.profile = res.data;
        console.log(_this3.profile);
      }).then(function (res) {
        _this3.fetchPosts();
      });
    },
    fetchPosts: function fetchPosts() {
      var _this4 = this;

      var apiUrl = '/api/pixelfed/v1/accounts/' + this.profileId + '/statuses';
      axios.get(apiUrl, {
        params: {
          only_media: true,
          min_id: 1
        }
      }).then(function (res) {
        var data = res.data.filter(function (status) {
          return status.media_attachments.length > 0;
        });
        var ids = data.map(function (status) {
          return status.id;
        });
        _this4.ids = ids;
        _this4.min_id = Math.max.apply(Math, _toConsumableArray(ids));
        _this4.max_id = Math.min.apply(Math, _toConsumableArray(ids));
        _this4.modalStatus = _.first(res.data);
        _this4.timeline = data;

        _this4.ownerCheck();

        _this4.loading = false; //this.loadSponsor();
      })["catch"](function (err) {
        swal('Oops, something went wrong', 'Please release the page.', 'error');
      });
    },
    ownerCheck: function ownerCheck() {
      if ($('body').hasClass('loggedIn') == false) {
        this.owner = false;
        return;
      }

      this.owner = this.profile.id === this.user.id;
    },
    infiniteTimeline: function infiniteTimeline($state) {
      var _this5 = this;

      if (this.loading || this.timeline.length < 9) {
        $state.complete();
        return;
      }

      var apiUrl = '/api/pixelfed/v1/accounts/' + this.profileId + '/statuses';
      axios.get(apiUrl, {
        params: {
          only_media: true,
          max_id: this.max_id
        }
      }).then(function (res) {
        if (res.data.length && _this5.loading == false) {
          var data = res.data;
          var self = _this5;
          data.forEach(function (d) {
            if (self.ids.indexOf(d.id) == -1) {
              self.timeline.push(d);
              self.ids.push(d.id);
            }
          });
          var max = Math.min.apply(Math, _toConsumableArray(_this5.ids));

          if (max == _this5.max_id) {
            $state.complete();
            return;
          }

          _this5.min_id = Math.max.apply(Math, _toConsumableArray(_this5.ids));
          _this5.max_id = max;
          $state.loaded();
          _this5.loading = false;
        } else {
          $state.complete();
        }
      });
    },
    previewUrl: function previewUrl(status) {
      return status.sensitive ? '/storage/no-preview.png?v=' + new Date().getTime() : status.media_attachments[0].preview_url;
    },
    previewBackground: function previewBackground(status) {
      var preview = this.previewUrl(status);
      return 'background-image: url(' + preview + ');';
    },
    blurhHashMedia: function blurhHashMedia(status) {
      return status.sensitive ? null : status.media_attachments[0].preview_url;
    },
    switchMode: function switchMode(mode) {
      if (mode == 'grid') {
        this.mode = mode;
      } else if (mode == 'bookmarks' && this.bookmarks.length) {
        this.mode = 'bookmarks';
      } else if (mode == 'collections' && this.collections.length) {
        this.mode = 'collections';
      } else {
        window.location.href = '/' + this.profileUsername + '?m=' + mode;
        return;
      }
    },
    reportProfile: function reportProfile() {
      var id = this.profile.id;
      window.location.href = '/i/report?type=user&id=' + id;
    },
    reportUrl: function reportUrl(status) {
      var type = status.in_reply_to ? 'comment' : 'post';
      var id = status.id;
      return '/i/report?type=' + type + '&id=' + id;
    },
    commentFocus: function commentFocus(status, $event) {
      var el = event.target;
      var card = el.parentElement.parentElement.parentElement;
      var comments = card.getElementsByClassName('comments')[0];

      if (comments.children.length == 0) {
        comments.classList.add('mb-2');
        this.fetchStatusComments(status, card);
      }

      var footer = card.querySelectorAll('.card-footer')[0];
      var input = card.querySelectorAll('.status-reply-input')[0];

      if (footer.classList.contains('d-none') == true) {
        footer.classList.remove('d-none');
        input.focus();
      } else {
        footer.classList.add('d-none');
        input.blur();
      }
    },
    likeStatus: function likeStatus(status, $event) {
      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      axios.post('/i/like', {
        item: status.id
      }).then(function (res) {
        status.favourites_count = res.data.count;

        if (status.favourited == true) {
          status.favourited = false;
        } else {
          status.favourited = true;
        }
      })["catch"](function (err) {
        swal('Error', 'Something went wrong, please try again later.', 'error');
      });
    },
    shareStatus: function shareStatus(status, $event) {
      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      axios.post('/i/share', {
        item: status.id
      }).then(function (res) {
        status.reblogs_count = res.data.count;

        if (status.reblogged == true) {
          status.reblogged = false;
        } else {
          status.reblogged = true;
        }
      })["catch"](function (err) {
        swal('Error', 'Something went wrong, please try again later.', 'error');
      });
    },
    timestampFormat: function timestampFormat(timestamp) {
      var ts = new Date(timestamp);
      return ts.toDateString() + ' ' + ts.toLocaleTimeString();
    },
    editUrl: function editUrl(status) {
      return status.url + '/edit';
    },
    redirect: function redirect(url) {
      window.location.href = url;
      return;
    },
    remoteRedirect: function remoteRedirect(url) {
      window.location.href = window.App.config.site.url + '/i/redirect?url=' + encodeURIComponent(url);
      return;
    },
    replyUrl: function replyUrl(status) {
      var username = this.profile.username;
      var id = status.account.id == this.profile.id ? status.id : status.in_reply_to_id;
      return '/p/' + username + '/' + id;
    },
    mentionUrl: function mentionUrl(status) {
      var username = status.account.username;
      var id = status.id;
      return '/p/' + username + '/' + id;
    },
    statusOwner: function statusOwner(status) {
      var sid = status.account.id;
      var uid = this.profile.id;

      if (sid == uid) {
        return true;
      } else {
        return false;
      }
    },
    fetchRelationships: function fetchRelationships() {
      var _this6 = this;

      if (document.querySelectorAll('body')[0].classList.contains('loggedIn') == false) {
        return;
      }

      axios.get('/api/pixelfed/v1/accounts/relationships', {
        params: {
          'id[]': this.profileId
        }
      }).then(function (res) {
        if (res.data.length) {
          _this6.relationship = res.data[0];

          if (res.data[0].blocking == true) {
            _this6.warning = true;
          }
        }

        if (_this6.user.id == _this6.profileId || _this6.relationship.following == true) {
          axios.get('/api/web/stories/v1/exists/' + _this6.profileId).then(function (res) {
            _this6.hasStory = res.data == true;
          });
        }
      });
    },
    muteProfile: function muteProfile() {
      var _this7 = this;

      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      var id = this.profileId;
      axios.post('/i/mute', {
        type: 'user',
        item: id
      }).then(function (res) {
        _this7.fetchRelationships();

        _this7.$refs.visitorContextMenu.hide();

        swal('Success', 'You have successfully muted ' + _this7.profile.acct, 'success');
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
    },
    unmuteProfile: function unmuteProfile() {
      var _this8 = this;

      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      var id = this.profileId;
      axios.post('/i/unmute', {
        type: 'user',
        item: id
      }).then(function (res) {
        _this8.fetchRelationships();

        _this8.$refs.visitorContextMenu.hide();

        swal('Success', 'You have successfully unmuted ' + _this8.profile.acct, 'success');
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
    },
    blockProfile: function blockProfile() {
      var _this9 = this;

      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      var id = this.profileId;
      axios.post('/i/block', {
        type: 'user',
        item: id
      }).then(function (res) {
        _this9.warning = true;

        _this9.fetchRelationships();

        _this9.$refs.visitorContextMenu.hide();

        swal('Success', 'You have successfully blocked ' + _this9.profile.acct, 'success');
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
    },
    unblockProfile: function unblockProfile() {
      var _this10 = this;

      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      var id = this.profileId;
      axios.post('/i/unblock', {
        type: 'user',
        item: id
      }).then(function (res) {
        _this10.fetchRelationships();

        _this10.$refs.visitorContextMenu.hide();

        swal('Success', 'You have successfully unblocked ' + _this10.profile.acct, 'success');
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
    },
    deletePost: function deletePost(status, index) {
      var _this11 = this;

      if ($('body').hasClass('loggedIn') == false || status.account.id !== this.profile.id) {
        return;
      }

      axios.post('/i/delete', {
        type: 'status',
        item: status.id
      }).then(function (res) {
        _this11.timeline.splice(index, 1);

        swal('Success', 'You have successfully deleted this post', 'success');
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
    },
    followProfile: function followProfile() {
      var _this12 = this;

      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      axios.post('/i/follow', {
        item: this.profileId
      }).then(function (res) {
        _this12.$refs.visitorContextMenu.hide();

        if (_this12.relationship.following) {
          _this12.profile.followers_count--;

          if (_this12.profile.locked == true) {
            window.location.href = '/';
          }
        } else {
          _this12.profile.followers_count++;
        }

        _this12.relationship.following = !_this12.relationship.following;
      })["catch"](function (err) {
        if (err.response.data.message) {
          swal('Error', err.response.data.message, 'error');
        }
      });
    },
    followingModal: function followingModal() {
      var _this13 = this;

      if ($('body').hasClass('loggedIn') == false) {
        window.location.href = encodeURI('/login?next=/' + this.profileUsername + '/');
        return;
      }

      if (this.profileSettings.following.list == false) {
        return;
      }

      if (this.followingCursor > 1) {
        this.$refs.followingModal.show();
        return;
      } else {
        axios.get('/api/pixelfed/v1/accounts/' + this.profileId + '/following', {
          params: {
            page: this.followingCursor
          }
        }).then(function (res) {
          _this13.following = res.data;
          _this13.followingModalSearchCache = res.data;
          _this13.followingCursor++;

          if (res.data.length < 10) {
            _this13.followingMore = false;
          }

          _this13.followingLoading = false;
        });
        this.$refs.followingModal.show();
        return;
      }
    },
    followersModal: function followersModal() {
      var _this14 = this;

      if ($('body').hasClass('loggedIn') == false) {
        window.location.href = encodeURI('/login?next=/' + this.profileUsername + '/');
        return;
      }

      if (this.profileSettings.followers.list == false) {
        return;
      }

      if (this.followerCursor > 1) {
        this.$refs.followerModal.show();
        return;
      } else {
        axios.get('/api/pixelfed/v1/accounts/' + this.profileId + '/followers', {
          params: {
            page: this.followerCursor
          }
        }).then(function (res) {
          var _this14$followers;

          (_this14$followers = _this14.followers).push.apply(_this14$followers, _toConsumableArray(res.data));

          _this14.followerCursor++;

          if (res.data.length < 10) {
            _this14.followerMore = false;
          }

          _this14.followerLoading = false;
        });
        this.$refs.followerModal.show();
        return;
      }
    },
    followingLoadMore: function followingLoadMore() {
      var _this15 = this;

      if ($('body').hasClass('loggedIn') == false) {
        window.location.href = encodeURI('/login?next=/' + this.profile.username + '/');
        return;
      }

      axios.get('/api/pixelfed/v1/accounts/' + this.profile.id + '/following', {
        params: {
          page: this.followingCursor,
          fbu: this.followingModalSearch
        }
      }).then(function (res) {
        if (res.data.length > 0) {
          var _this15$following;

          (_this15$following = _this15.following).push.apply(_this15$following, _toConsumableArray(res.data));

          _this15.followingCursor++;
          _this15.followingModalSearchCache = _this15.following;
        }

        if (res.data.length < 10) {
          _this15.followingModalSearchCache = _this15.following;
          _this15.followingMore = false;
        }
      });
    },
    followersLoadMore: function followersLoadMore() {
      var _this16 = this;

      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      axios.get('/api/pixelfed/v1/accounts/' + this.profile.id + '/followers', {
        params: {
          page: this.followerCursor
        }
      }).then(function (res) {
        if (res.data.length > 0) {
          var _this16$followers;

          (_this16$followers = _this16.followers).push.apply(_this16$followers, _toConsumableArray(res.data));

          _this16.followerCursor++;
        }

        if (res.data.length < 10) {
          _this16.followerMore = false;
        }
      });
    },
    visitorMenu: function visitorMenu() {
      this.$refs.visitorContextMenu.show();
    },
    followModalAction: function followModalAction(id, index) {
      var _this17 = this;

      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'following';
      axios.post('/i/follow', {
        item: id
      }).then(function (res) {
        if (type == 'following') {
          _this17.following.splice(index, 1);

          _this17.profile.following_count--;
        }
      })["catch"](function (err) {
        if (err.response.data.message) {
          swal('Error', err.response.data.message, 'error');
        }
      });
    },
    momentBackground: function momentBackground() {
      var c = 'w-100 h-100 mt-n3 ';

      if (this.profile.header_bg) {
        c += this.profile.header_bg == 'default' ? 'bg-pixelfed' : 'bg-moment-' + this.profile.header_bg;
      } else {
        c += 'bg-pixelfed';
      }

      return c;
    },
    loadSponsor: function loadSponsor() {
      var _this18 = this;

      axios.get('/api/local/profile/sponsor/' + this.profileId).then(function (res) {
        _this18.sponsorList = res.data;
      });
    },
    showSponsorModal: function showSponsorModal() {
      this.$refs.sponsorModal.show();
    },
    goBack: function goBack() {
      if (window.history.length > 2) {
        window.history.back();
        return;
      } else {
        window.location.href = '/';
        return;
      }
    },
    copyProfileLink: function copyProfileLink() {
      navigator.clipboard.writeText(window.location.href);
      this.$refs.visitorContextMenu.hide();
    },
    formatCount: function formatCount(count) {
      return App.util.format.count(count);
    },
    statusUrl: function statusUrl(status) {
      return status.url;

      if (status.local == true) {
        return status.url;
      }

      return '/i/web/post/_/' + status.account.id + '/' + status.id;
    },
    profileUrl: function profileUrl(status) {
      return status.url;

      if (status.local == true) {
        return status.account.url;
      }

      return '/i/web/profile/_/' + status.account.id;
    },
    profileUrlRedirect: function profileUrlRedirect(profile) {
      if (profile.local == true) {
        return profile.url;
      }

      return '/i/web/profile/_/' + profile.id;
    },
    showEmbedProfileModal: function showEmbedProfileModal() {
      this.ctxEmbedPayload = window.App.util.embed.profile(this.profile.url);
      this.$refs.visitorContextMenu.hide();
      this.$refs.embedModal.show();
    },
    ctxCopyEmbed: function ctxCopyEmbed() {
      navigator.clipboard.writeText(this.ctxEmbedPayload);
      this.$refs.embedModal.hide();
      this.$refs.visitorContextMenu.hide();
    },
    storyRedirect: function storyRedirect() {
      window.location.href = '/stories/' + this.profileUsername + '?t=4';
    },
    followingModalSearchHandler: function followingModalSearchHandler() {
      var _this19 = this;

      var self = this;
      var q = this.followingModalSearch;

      if (q.length == 0) {
        this.following = this.followingModalSearchCache;
        this.followingModalSearch = null;
      }

      if (q.length > 0) {
        var url = '/api/pixelfed/v1/accounts/' + self.profileId + '/following?page=1&fbu=' + q;
        axios.get(url).then(function (res) {
          _this19.following = res.data;
        })["catch"](function (err) {
          self.following = self.followingModalSearchCache;
          self.followingModalSearch = null;
        });
      }
    },
    truncate: function truncate(str, len) {
      return _.truncate(str, {
        length: len
      });
    },
    formatWebsite: function formatWebsite(site) {
      if (site.slice(0, 8) === 'https://') {
        site = site.substr(8);
      } else if (site.slice(0, 7) === 'http://') {
        site = site.substr(7);
      } else {
        this.profile.website = null;
        return;
      }

      return this.truncate(site, 60);
    },
    joinedAtFormat: function joinedAtFormat(created) {
      var d = new Date(created);
      return d.toDateString();
    },
    archivesInfiniteLoader: function archivesInfiniteLoader($state) {
      var _this20 = this;

      axios.get('/api/pixelfed/v2/statuses/archives', {
        params: {
          page: this.archivesPage
        }
      }).then(function (res) {
        if (res.data.length) {
          var _this20$archives;

          (_this20$archives = _this20.archives).push.apply(_this20$archives, _toConsumableArray(res.data));

          _this20.archivesPage++;
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/ContextMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/ContextMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['status', 'profile'],
  data: function data() {
    return {
      ctxMenuStatus: false,
      ctxMenuRelationship: false,
      ctxEmbedPayload: false,
      copiedEmbed: false,
      replySending: false,
      ctxEmbedShowCaption: true,
      ctxEmbedShowLikes: false,
      ctxEmbedCompactMode: false,
      confirmModalTitle: 'Are you sure?',
      confirmModalIdentifer: null,
      confirmModalType: false
    };
  },
  watch: {
    ctxEmbedShowCaption: function ctxEmbedShowCaption(n, o) {
      if (n == true) {
        this.ctxEmbedCompactMode = false;
      }

      var mode = this.ctxEmbedCompactMode ? 'compact' : 'full';
      this.ctxEmbedPayload = window.App.util.embed.post(this.ctxMenuStatus.url, this.ctxEmbedShowCaption, this.ctxEmbedShowLikes, mode);
    },
    ctxEmbedShowLikes: function ctxEmbedShowLikes(n, o) {
      if (n == true) {
        this.ctxEmbedCompactMode = false;
      }

      var mode = this.ctxEmbedCompactMode ? 'compact' : 'full';
      this.ctxEmbedPayload = window.App.util.embed.post(this.ctxMenuStatus.url, this.ctxEmbedShowCaption, this.ctxEmbedShowLikes, mode);
    },
    ctxEmbedCompactMode: function ctxEmbedCompactMode(n, o) {
      if (n == true) {
        this.ctxEmbedShowCaption = false;
        this.ctxEmbedShowLikes = false;
      }

      var mode = this.ctxEmbedCompactMode ? 'compact' : 'full';
      this.ctxEmbedPayload = window.App.util.embed.post(this.ctxMenuStatus.url, this.ctxEmbedShowCaption, this.ctxEmbedShowLikes, mode);
    }
  },
  methods: {
    open: function open() {
      this.ctxMenu();
    },
    ctxMenu: function ctxMenu() {
      var _this = this;

      this.ctxMenuStatus = this.status;
      this.ctxEmbedPayload = window.App.util.embed.post(this.status.url);

      if (this.status.account.id == this.profile.id) {
        this.ctxMenuRelationship = false;
        this.$refs.ctxModal.show();
      } else {
        axios.get('/api/pixelfed/v1/accounts/relationships', {
          params: {
            'id[]': this.status.account.id
          }
        }).then(function (res) {
          _this.ctxMenuRelationship = res.data[0];

          _this.$refs.ctxModal.show();
        });
      }
    },
    closeCtxMenu: function closeCtxMenu() {
      this.copiedEmbed = false;
      this.ctxMenuStatus = false;
      this.ctxMenuRelationship = false;
      this.$refs.ctxModal.hide();
      this.$refs.ctxReport.hide();
      this.$refs.ctxReportOther.hide();
      this.closeModals();
    },
    ctxMenuCopyLink: function ctxMenuCopyLink() {
      var status = this.ctxMenuStatus;
      navigator.clipboard.writeText(status.url);
      this.closeModals();
      return;
    },
    ctxMenuGoToPost: function ctxMenuGoToPost() {
      var status = this.ctxMenuStatus;
      window.location.href = this.statusUrl(status);
      this.closeCtxMenu();
      return;
    },
    ctxMenuGoToProfile: function ctxMenuGoToProfile() {
      var status = this.ctxMenuStatus;
      window.location.href = this.profileUrl(status);
      this.closeCtxMenu();
      return;
    },
    ctxMenuFollow: function ctxMenuFollow() {
      var _this2 = this;

      var id = this.ctxMenuStatus.account.id;
      axios.post('/i/follow', {
        item: id
      }).then(function (res) {
        var username = _this2.ctxMenuStatus.account.acct;

        _this2.closeCtxMenu();

        setTimeout(function () {
          swal('Follow successful!', 'You are now following ' + username, 'success');
        }, 500);
      });
    },
    ctxMenuUnfollow: function ctxMenuUnfollow() {
      var _this3 = this;

      var id = this.ctxMenuStatus.account.id;
      axios.post('/i/follow', {
        item: id
      }).then(function (res) {
        var username = _this3.ctxMenuStatus.account.acct;

        if (_this3.scope == 'home') {
          _this3.feed = _this3.feed.filter(function (s) {
            return s.account.id != _this3.ctxMenuStatus.account.id;
          });
        }

        _this3.closeCtxMenu();

        setTimeout(function () {
          swal('Unfollow successful!', 'You are no longer following ' + username, 'success');
        }, 500);
      });
    },
    ctxMenuReportPost: function ctxMenuReportPost() {
      this.$refs.ctxModal.hide();
      this.$refs.ctxReport.show();
      return;
    },
    ctxMenuEmbed: function ctxMenuEmbed() {
      this.closeModals();
      this.$refs.ctxEmbedModal.show();
    },
    ctxMenuShare: function ctxMenuShare() {
      this.$refs.ctxModal.hide();
      this.$refs.ctxShareModal.show();
    },
    closeCtxShareMenu: function closeCtxShareMenu() {
      this.$refs.ctxShareModal.hide();
      this.$refs.ctxModal.show();
    },
    ctxCopyEmbed: function ctxCopyEmbed() {
      navigator.clipboard.writeText(this.ctxEmbedPayload);
      this.ctxEmbedShowCaption = true;
      this.ctxEmbedShowLikes = false;
      this.ctxEmbedCompactMode = false;
      this.$refs.ctxEmbedModal.hide();
    },
    ctxModMenuShow: function ctxModMenuShow() {
      this.$refs.ctxModal.hide();
      this.$refs.ctxModModal.show();
    },
    ctxModOtherMenuShow: function ctxModOtherMenuShow() {
      this.$refs.ctxModal.hide();
      this.$refs.ctxModModal.hide();
      this.$refs.ctxModOtherModal.show();
    },
    ctxModMenu: function ctxModMenu() {
      this.$refs.ctxModal.hide();
    },
    ctxModMenuClose: function ctxModMenuClose() {
      this.closeModals();
    },
    ctxModOtherMenuClose: function ctxModOtherMenuClose() {
      this.closeModals();
      this.$refs.ctxModModal.show();
    },
    formatCount: function formatCount(count) {
      return App.util.format.count(count);
    },
    openCtxReportOtherMenu: function openCtxReportOtherMenu() {
      var s = this.ctxMenuStatus;
      this.closeCtxMenu();
      this.ctxMenuStatus = s;
      this.$refs.ctxReportOther.show();
    },
    ctxReportMenuGoBack: function ctxReportMenuGoBack() {
      this.$refs.ctxReportOther.hide();
      this.$refs.ctxReport.hide();
      this.$refs.ctxModal.show();
    },
    ctxReportOtherMenuGoBack: function ctxReportOtherMenuGoBack() {
      this.$refs.ctxReportOther.hide();
      this.$refs.ctxModal.hide();
      this.$refs.ctxReport.show();
    },
    sendReport: function sendReport(type) {
      var _this4 = this;

      var id = this.ctxMenuStatus.id;
      swal({
        'title': 'Confirm Report',
        'text': 'Are you sure you want to report this post?',
        'icon': 'warning',
        'buttons': true,
        'dangerMode': true
      }).then(function (res) {
        if (res) {
          axios.post('/i/report/', {
            'report': type,
            'type': 'post',
            'id': id
          }).then(function (res) {
            _this4.closeCtxMenu();

            swal('Report Sent!', 'We have successfully received your report.', 'success');
          })["catch"](function (err) {
            swal('Oops!', 'There was an issue reporting this post.', 'error');
          });
        } else {
          _this4.closeCtxMenu();
        }
      });
    },
    closeModals: function closeModals() {
      this.$refs.ctxModal.hide();
      this.$refs.ctxModModal.hide();
      this.$refs.ctxModOtherModal.hide();
      this.$refs.ctxShareModal.hide();
      this.$refs.ctxEmbedModal.hide();
      this.$refs.ctxReport.hide();
      this.$refs.ctxReportOther.hide();
      this.$refs.ctxConfirm.hide();
    },
    openCtxStatusModal: function openCtxStatusModal() {
      this.closeModals();
      this.$refs.ctxStatusModal.show();
    },
    openConfirmModal: function openConfirmModal() {
      this.closeModals();
      this.$refs.ctxConfirm.show();
    },
    closeConfirmModal: function closeConfirmModal() {
      this.closeModals();
      this.confirmModalTitle = 'Are you sure?';
      this.confirmModalType = false;
      this.confirmModalIdentifer = null;
    },
    confirmModalConfirm: function confirmModalConfirm() {
      var _this5 = this;

      switch (this.confirmModalType) {
        case 'post.delete':
          axios.post('/i/delete', {
            type: 'status',
            item: this.confirmModalIdentifer
          }).then(function (res) {
            _this5.feed = _this5.feed.filter(function (s) {
              return s.id != _this5.confirmModalIdentifer;
            });

            _this5.closeConfirmModal();
          })["catch"](function (err) {
            _this5.closeConfirmModal();

            swal('Error', 'Something went wrong. Please try again later.', 'error');
          });
          break;
      }

      this.closeConfirmModal();
    },
    confirmModalCancel: function confirmModalCancel() {
      this.closeConfirmModal();
    },
    moderatePost: function moderatePost(status, action, $event) {
      var _this6 = this;

      var username = status.account.username;
      var pid = status.id;
      var msg = '';
      var self = this;

      switch (action) {
        case 'addcw':
          msg = 'Are you sure you want to add a content warning to this post?';
          swal({
            title: 'Confirm',
            text: msg,
            icon: 'warning',
            buttons: true,
            dangerMode: true
          }).then(function (res) {
            if (res) {
              axios.post('/api/v2/moderator/action', {
                action: action,
                item_id: status.id,
                item_type: 'status'
              }).then(function (res) {
                swal('Success', 'Successfully added content warning', 'success');
                status.sensitive = true;
                self.closeModals();
                self.ctxModMenuClose();
              })["catch"](function (err) {
                swal('Error', 'Something went wrong, please try again later.', 'error');
                self.closeModals();
                self.ctxModMenuClose();
              });
            }
          });
          break;

        case 'remcw':
          msg = 'Are you sure you want to remove the content warning on this post?';
          swal({
            title: 'Confirm',
            text: msg,
            icon: 'warning',
            buttons: true,
            dangerMode: true
          }).then(function (res) {
            if (res) {
              axios.post('/api/v2/moderator/action', {
                action: action,
                item_id: status.id,
                item_type: 'status'
              }).then(function (res) {
                swal('Success', 'Successfully added content warning', 'success');
                status.sensitive = false;
                self.closeModals();
                self.ctxModMenuClose();
              })["catch"](function (err) {
                swal('Error', 'Something went wrong, please try again later.', 'error');
                self.closeModals();
                self.ctxModMenuClose();
              });
            }
          });
          break;

        case 'unlist':
          msg = 'Are you sure you want to unlist this post?';
          swal({
            title: 'Confirm',
            text: msg,
            icon: 'warning',
            buttons: true,
            dangerMode: true
          }).then(function (res) {
            if (res) {
              axios.post('/api/v2/moderator/action', {
                action: action,
                item_id: status.id,
                item_type: 'status'
              }).then(function (res) {
                _this6.feed = _this6.feed.filter(function (f) {
                  return f.id != status.id;
                });
                swal('Success', 'Successfully unlisted post', 'success');
                self.closeModals();
                self.ctxModMenuClose();
              })["catch"](function (err) {
                self.closeModals();
                self.ctxModMenuClose();
                swal('Error', 'Something went wrong, please try again later.', 'error');
              });
            }
          });
          break;

        case 'spammer':
          msg = 'Are you sure you want to mark this user as a spammer? All existing and future posts will be unlisted on timelines and a content warning will be applied.';
          swal({
            title: 'Confirm',
            text: msg,
            icon: 'warning',
            buttons: true,
            dangerMode: true
          }).then(function (res) {
            if (res) {
              axios.post('/api/v2/moderator/action', {
                action: action,
                item_id: status.id,
                item_type: 'status'
              }).then(function (res) {
                swal('Success', 'Successfully marked account as spammer', 'success');
                self.closeModals();
                self.ctxModMenuClose();
              })["catch"](function (err) {
                self.closeModals();
                self.ctxModMenuClose();
                swal('Error', 'Something went wrong, please try again later.', 'error');
              });
            }
          });
          break;
      }
    },
    shareStatus: function shareStatus(status, $event) {
      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      this.closeModals();
      axios.post('/i/share', {
        item: status.id
      }).then(function (res) {
        status.reblogs_count = res.data.count;
        status.reblogged = !status.reblogged;

        if (status.reblogged) {
          swal('Success', 'You shared this post', 'success');
        } else {
          swal('Success', 'You unshared this post', 'success');
        }
      })["catch"](function (err) {
        swal('Error', 'Something went wrong, please try again later.', 'error');
      });
    },
    statusUrl: function statusUrl(status) {
      if (status.local == true) {
        return status.url;
      }

      return '/i/web/post/_/' + status.account.id + '/' + status.id;
    },
    profileUrl: function profileUrl(status) {
      if (status.local == true) {
        return status.account.url;
      }

      return '/i/web/profile/_/' + status.account.id;
    },
    deletePost: function deletePost(status) {
      var _this7 = this;

      if ($('body').hasClass('loggedIn') == false || this.ownerOrAdmin(status) == false) {
        return;
      }

      if (window.confirm('Are you sure you want to delete this post?') == false) {
        return;
      }

      axios.post('/i/delete', {
        type: 'status',
        item: status.id
      }).then(function (res) {
        _this7.$emit('status-delete', status.id);

        _this7.closeModals();
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
    },
    owner: function owner(status) {
      return this.profile.id === status.account.id;
    },
    admin: function admin() {
      return this.profile.is_admin == true;
    },
    ownerOrAdmin: function ownerOrAdmin(status) {
      return this.owner(status) || this.admin();
    },
    archivePost: function archivePost(status) {
      var _this8 = this;

      if (window.confirm('Are you sure you want to archive this post?') == false) {
        return;
      }

      axios.post('/api/pixelfed/v2/status/' + status.id + '/archive').then(function (res) {
        _this8.$emit('status-delete', status.id);

        _this8.closeModals();
      });
    },
    unarchivePost: function unarchivePost(status) {
      var _this9 = this;

      if (window.confirm('Are you sure you want to unarchive this post?') == false) {
        return;
      }

      axios.post('/api/pixelfed/v2/status/' + status.id + '/unarchive').then(function (res) {
        _this9.closeModals();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/PollCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/PollCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu.vue */ "./resources/assets/js/components/partials/ContextMenu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    reactions: {
      type: Object
    },
    status: {
      type: Object
    },
    profile: {
      type: Object
    },
    showBorderTop: {
      type: Boolean,
      "default": false
    },
    fetchState: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    "context-menu": _ContextMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      authenticated: false,
      tab: 'vote',
      selectedIndex: null,
      refreshTimeout: undefined,
      activeRefreshTimeout: false,
      refreshingResults: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.fetchState) {
      axios.get('/api/v1/polls/' + this.status.poll.id).then(function (res) {
        _this.status.poll = res.data;

        if (res.data.voted) {
          _this.selectedIndex = res.data.own_votes[0];
          _this.tab = 'voted';
        }

        _this.status.poll.expired = new Date(_this.status.poll.expires_at) < new Date();

        if (_this.status.poll.expired) {
          _this.tab = _this.status.poll.voted ? 'voted' : 'results';
        }
      });
    } else {
      if (this.status.poll.voted) {
        this.tab = 'voted';
      }

      this.status.poll.expired = new Date(this.status.poll.expires_at) < new Date();

      if (this.status.poll.expired) {
        this.tab = this.status.poll.voted ? 'voted' : 'results';
      }

      if (this.status.poll.own_votes.length) {
        this.selectedIndex = this.status.poll.own_votes[0];
      }
    }

    this.authenticated = $('body').hasClass('loggedIn');
  },
  methods: {
    selectOption: function selectOption(index) {
      event.currentTarget.blur();
      this.selectedIndex = index; // if(this.options[index].selected) {
      // 	this.selectedIndex = null;
      // 	this.options[index].selected = false;
      // 	return;
      // }
      // this.options = this.options.map(o => {
      // 	o.selected = false;
      // 	return o;
      // });
      // this.options[index].selected = true;
      // this.selectedIndex = index;
      // this.options[index].score = 100;
    },
    submitVote: function submitVote() {
      var _this2 = this;

      // todo: send vote
      axios.post('/api/v1/polls/' + this.status.poll.id + '/votes', {
        'choices': [this.selectedIndex]
      }).then(function (res) {
        console.log(res.data);
        _this2.status.poll = res.data;
      });
      this.tab = 'voted';
    },
    viewResultsTab: function viewResultsTab() {
      this.tab = 'results';
    },
    viewPollTab: function viewPollTab() {
      this.tab = this.selectedIndex != null ? 'voted' : 'vote';
    },
    formatCount: function formatCount(count) {
      return App.util.format.count(count);
    },
    statusUrl: function statusUrl(status) {
      if (status.local == true) {
        return status.url;
      }

      return '/i/web/post/_/' + status.account.id + '/' + status.id;
    },
    profileUrl: function profileUrl(status) {
      if (status.local == true) {
        return status.account.url;
      }

      return '/i/web/profile/_/' + status.account.id;
    },
    timestampFormat: function timestampFormat(timestamp) {
      var ts = new Date(timestamp);
      return ts.toDateString() + ' ' + ts.toLocaleTimeString();
    },
    shortTimestamp: function shortTimestamp(ts) {
      return window.App.util.format.timeAgo(ts);
    },
    shortTimestampAhead: function shortTimestampAhead(ts) {
      return window.App.util.format.timeAhead(ts);
    },
    refreshResults: function refreshResults() {
      var _this3 = this;

      this.activeRefreshTimeout = true;
      this.refreshingResults = true;
      axios.get('/api/v1/polls/' + this.status.poll.id).then(function (res) {
        _this3.status.poll = res.data;

        if (_this3.status.poll.voted) {
          _this3.selectedIndex = _this3.status.poll.own_votes[0];
          _this3.tab = 'voted';

          _this3.setActiveRefreshTimeout();

          _this3.refreshingResults = false;
        }
      })["catch"](function (err) {
        swal('Oops!', 'An error occured while fetching the latest poll results. Please try again later.', 'error');

        _this3.setActiveRefreshTimeout();

        _this3.refreshingResults = false;
      });
    },
    setActiveRefreshTimeout: function setActiveRefreshTimeout() {
      var self = this;
      this.refreshTimeout = setTimeout(function () {
        self.activeRefreshTimeout = false;
      }, 30000);
    },
    statusDeleted: function statusDeleted(status) {
      this.$emit('status-delete', status);
    },
    ctxMenu: function ctxMenu() {
      this.$refs.contextMenu.open();
    },
    likeStatus: function likeStatus() {
      this.$emit('likeStatus', this.status);
    },
    calculatePercentage: function calculatePercentage(option) {
      var status = this.status;
      return status.poll.votes_count == 0 ? 0 : Math.round(option.votes_count / status.poll.votes_count * 100);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/StatusCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/StatusCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu.vue */ "./resources/assets/js/components/partials/ContextMenu.vue");
/* harmony import */ var _PollCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PollCard.vue */ "./resources/assets/js/components/partials/PollCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    status: {
      type: Object
    },
    recommended: {
      type: Boolean,
      "default": false
    },
    reactionBar: {
      type: Boolean,
      "default": true
    },
    hasTopBorder: {
      type: Boolean,
      "default": false
    },
    size: {
      type: String,
      validator: function validator(val) {
        return ['regular', 'small'].includes(val);
      },
      "default": 'regular'
    }
  },
  components: {
    "context-menu": _ContextMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "poll-card": _PollCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      config: window.App.config,
      profile: {},
      loading: true,
      replies: [],
      replyId: null,
      lightboxMedia: false,
      showSuggestions: true,
      showReadMore: true,
      replyStatus: {},
      replyText: '',
      replyNsfw: false,
      emoji: window.App.util.emoji
    };
  },
  mounted: function mounted() {
    this.profile = window._sharedData.curUser;
  },
  methods: {
    formatCount: function formatCount(count) {
      return App.util.format.count(count);
    },
    statusUrl: function statusUrl(status) {
      if (status.local == true) {
        return status.url;
      }

      return '/i/web/post/_/' + status.account.id + '/' + status.id;
    },
    profileUrl: function profileUrl(status) {
      if (status.local == true) {
        return status.account.url;
      }

      return '/i/web/profile/_/' + status.account.id;
    },
    timestampFormat: function timestampFormat(timestamp) {
      var ts = new Date(timestamp);
      return ts.toDateString() + ' ' + ts.toLocaleTimeString();
    },
    shortTimestamp: function shortTimestamp(ts) {
      return window.App.util.format.timeAgo(ts);
    },
    statusCardUsernameFormat: function statusCardUsernameFormat(status) {
      if (status.account.local == true) {
        return status.account.username;
      }

      var fmt = window.App.config.username.remote.format;
      var txt = window.App.config.username.remote.custom;
      var usr = status.account.username;
      var dom = document.createElement('a');
      dom.href = status.account.url;
      dom = dom.hostname;

      switch (fmt) {
        case '@':
          return usr + '<span class="text-lighter font-weight-bold">@' + dom + '</span>';
          break;

        case 'from':
          return usr + '<span class="text-lighter font-weight-bold"> <span class="font-weight-normal">from</span> ' + dom + '</span>';
          break;

        case 'custom':
          return usr + '<span class="text-lighter font-weight-bold"> ' + txt + ' ' + dom + '</span>';
          break;

        default:
          return usr + '<span class="text-lighter font-weight-bold">@' + dom + '</span>';
          break;
      }
    },
    lightbox: function lightbox(status) {
      window.location.href = status.media_attachments[0].url;
    },
    labelRedirect: function labelRedirect(type) {
      var url = '/i/redirect?url=' + encodeURI(this.config.features.label.covid.url);
      window.location.href = url;
    },
    likeStatus: function likeStatus(status, event) {
      if ($('body').hasClass('loggedIn') == false) {
        return;
      }

      var count = status.favourites_count;
      status.favourited = !status.favourited;
      axios.post('/i/like', {
        item: status.id
      }).then(function (res) {
        status.favourites_count = res.data.count;
        status.favourited = !!status.favourited;
      })["catch"](function (err) {
        status.favourited = !!status.favourited;
        status.favourites_count = count;
        swal('Error', 'Something went wrong, please try again later.', 'error');
      });
      window.navigator.vibrate(200);

      if (status.favourited) {
        setTimeout(function () {
          event.target.classList.add('animate__animated', 'animate__bounce');
        }, 100);
        status.liked_by.count++;
      } else {
        status.liked_by.count--;
      }
    },
    commentFocus: function commentFocus(status, $event) {
      this.$emit('comment-focus', status);
    },
    commentSubmit: function commentSubmit(status, $event) {
      var _this = this;

      this.replySending = true;
      var id = status.id;
      var comment = this.replyText;
      var limit = this.config.uploader.max_caption_length;

      if (comment.length > limit) {
        this.replySending = false;
        swal('Comment Too Long', 'Please make sure your comment is ' + limit + ' characters or less.', 'error');
        return;
      }

      axios.post('/i/comment', {
        item: id,
        comment: comment,
        sensitive: this.replyNsfw
      }).then(function (res) {
        _this.replyText = '';

        _this.replies.push(res.data.entity);

        _this.$refs.replyModal.hide();
      });
      this.replySending = false;
    },
    owner: function owner(status) {
      return this.profile.id === status.account.id;
    },
    admin: function admin() {
      return this.profile.is_admin == true;
    },
    ownerOrAdmin: function ownerOrAdmin(status) {
      return this.owner(status) || this.admin();
    },
    ctxMenu: function ctxMenu() {
      this.$refs.contextMenu.open();
    },
    timeAgo: function timeAgo(ts) {
      return App.util.format.timeAgo(ts);
    },
    statusDeleted: function statusDeleted(status) {
      this.$emit('status-delete', status);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['status']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['status'],
  data: function data() {
    return {
      sensitive: this.status.sensitive,
      cursor: 0
    };
  },
  created: function created() {// window.addEventListener("keydown", this.keypressNavigation);
  },
  beforeDestroy: function beforeDestroy() {// window.removeEventListener("keydown", this.keypressNavigation);
  },
  methods: {
    toggleContentWarning: function toggleContentWarning(status) {
      this.$emit('togglecw');
    },
    altText: function altText(img) {
      var desc = img.description;

      if (desc) {
        return desc;
      }

      return 'Photo was not tagged with any alt text.';
    },
    keypressNavigation: function keypressNavigation(e) {
      var ref = this.$refs.carousel;

      if (e.keyCode == "37") {
        e.preventDefault();
        var direction = "backward";
        ref.advancePage(direction);
        ref.$emit("navigation-click", direction);
      }

      if (e.keyCode == "39") {
        e.preventDefault();
        var _direction = "forward";
        ref.advancePage(_direction);
        ref.$emit("navigation-click", _direction);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['status'],
  data: function data() {
    return {
      sensitive: this.status.sensitive
    };
  },
  methods: {
    altText: function altText(status) {
      var desc = status.media_attachments[0].description;

      if (desc) {
        return desc;
      }

      return 'Photo was not tagged with any alt text.';
    },
    toggleContentWarning: function toggleContentWarning(status) {
      this.$emit('togglecw');
    },
    width: function width() {
      if (!this.status.media_attachments[0].meta || !this.status.media_attachments[0].meta.original || !this.status.media_attachments[0].meta.original.width) {
        return;
      }

      return this.status.media_attachments[0].meta.original.width;
    },
    height: function height() {
      if (!this.status.media_attachments[0].meta || !this.status.media_attachments[0].meta.original || !this.status.media_attachments[0].meta.original.height) {
        return;
      }

      return this.status.media_attachments[0].meta.original.height;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['status']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['status'],
  methods: {
    altText: function altText(status) {
      var desc = status.media_attachments[0].description;

      if (desc) {
        return desc;
      }

      return 'Video was not tagged with any alt text.';
    },
    playOrPause: function playOrPause(e) {
      var el = e.target;

      if (el.getAttribute('playing') == 1) {
        el.removeAttribute('playing');
        el.pause();
      } else {
        el.setAttribute('playing', 1);
        el.play();
      }
    },
    toggleContentWarning: function toggleContentWarning(status) {
      this.$emit('togglecw');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/StatusCard.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/sass-loader/dist/cjs.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/StatusCard.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".status-card-component .status-content {\n  font-size: 17px;\n}\n.status-card-component.status-card-sm .status-content {\n  font-size: 14px;\n}\n.status-card-component.status-card-sm .fa-lg {\n  font-size: unset;\n  line-height: unset;\n  vertical-align: unset;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.text-lighter[data-v-bb77b854] {\n\tcolor:#B8C2CC !important;\n}\n.modal-body[data-v-bb77b854] {\n\tpadding: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.o-square[data-v-4bdda942] {\n\tmax-width: 320px;\n}\n.o-portrait[data-v-4bdda942] {\n\tmax-width: 320px;\n}\n.o-landscape[data-v-4bdda942] {\n\tmax-width: 320px;\n}\n.post-icon[data-v-4bdda942] {\n\tcolor: #fff;\n\tposition:relative;\n\tmargin-top: 10px;\n\tz-index: 9;\n\topacity: 0.6;\n\ttext-shadow: 3px 3px 16px #272634;\n}\n.font-size-16px[data-v-4bdda942] {\n\tfont-size: 16px;\n}\n.profile-website[data-v-4bdda942] {\n\tcolor: #003569;\n\ttext-decoration: none;\n\tfont-weight: 600;\n}\n.nav-topbar .nav-link[data-v-4bdda942] {\n\tcolor: #999;\n}\n.nav-topbar .nav-link .small[data-v-4bdda942] {\n\tfont-weight: 600;\n}\n.has-story[data-v-4bdda942] {\n\twidth: 84px;\n\theight: 84px;\n\tborder-radius: 50%;\n\tpadding: 4px;\n\tbackground: radial-gradient(ellipse at 70% 70%, #ee583f 8%, #d92d77 42%, #bd3381 58%);\n}\n.has-story img[data-v-4bdda942] {\n\twidth: 76px;\n\theight: 76px;\n\tborder-radius: 50%;\n\tpadding: 6px;\n\tbackground: #fff;\n}\n.has-story-lg[data-v-4bdda942] {\n\twidth: 159px;\n\theight: 159px;\n\tborder-radius: 50%;\n\tpadding: 4px;\n\tbackground: radial-gradient(ellipse at 70% 70%, #ee583f 8%, #d92d77 42%, #bd3381 58%);\n}\n.has-story-lg img[data-v-4bdda942] {\n\twidth: 150px;\n\theight: 150px;\n\tborder-radius: 50%;\n\tpadding: 6px;\n\tbackground:#fff;\n}\n.no-focus[data-v-4bdda942] {\n\tborder-color: none;\n\toutline: 0;\n\tbox-shadow: none;\n}\n.modal-tab-active[data-v-4bdda942] {\n\tborder-bottom: 1px solid #08d;\n}\n.btn-sec-alt[data-v-4bdda942]:hover {\n\tcolor: #ccc;\n\topacity: .7;\n\tbackground-color: transparent;\n\tborder-color: #6c757d;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-img-top[data-v-1c78113d] {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.content-label-wrapper[data-v-1c78113d] {\n\tposition: relative;\n}\n.content-label[data-v-1c78113d] {\n\tmargin: 0;\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 2;\n\tbackground: rgba(0, 0, 0, 0.2)\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-img-top[data-v-88c038d8] {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.content-label-wrapper[data-v-88c038d8] {\n\tposition: relative;\n}\n.content-label[data-v-88c038d8] {\n\tmargin: 0;\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 2;\n\tbackground: rgba(0, 0, 0, 0.2)\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content-label-wrapper[data-v-9ad5682a] {\n\tposition: relative;\n}\n.content-label[data-v-9ad5682a] {\n\tmargin: 0;\n\tposition: absolute;\n\ttop:50%;\n\tleft:50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 2;\n\tbackground: rgba(0, 0, 0, 0.2)\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/StatusCard.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/sass-loader/dist/cjs.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/StatusCard.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--11-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatusCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/StatusCard.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PostMenu.vue?vue&type=template&id=bb77b854&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PostMenu.vue?vue&type=template&id=bb77b854&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.modal != "true"
      ? _c("div", { staticClass: "dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-link text-dark no-caret dropdown-toggle py-0",
              attrs: {
                type: "button",
                "data-toggle": "dropdown",
                "aria-haspopup": "true",
                "aria-expanded": "false",
                title: "Post options"
              }
            },
            [
              _c("span", {
                class: [
                  _vm.size == "lg"
                    ? "fas fa-ellipsis-v fa-lg text-muted"
                    : "fas fa-ellipsis-v fa-sm text-lighter"
                ]
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c(
              "a",
              {
                staticClass:
                  "dropdown-item font-weight-bold text-decoration-none",
                attrs: { href: _vm.status.url }
              },
              [_vm._v("Go to post")]
            ),
            _vm._v(" "),
            _vm.activeSession == true && _vm.statusOwner(_vm.status) == false
              ? _c("span", [
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-item font-weight-bold",
                      attrs: { href: _vm.reportUrl(_vm.status) }
                    },
                    [_vm._v("Report")]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.activeSession == true && _vm.statusOwner(_vm.status) == true
              ? _c("span", [
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item font-weight-bold text-decoration-none",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.muteProfile(_vm.status)
                        }
                      }
                    },
                    [_vm._v("Mute Profile")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item font-weight-bold text-decoration-none",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.blockProfile(_vm.status)
                        }
                      }
                    },
                    [_vm._v("Block Profile")]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.activeSession == true && _vm.profile.is_admin == true
              ? _c("span", [
                  _c("div", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item font-weight-bold text-danger text-decoration-none",
                      on: {
                        click: function($event) {
                          return _vm.deletePost(_vm.status)
                        }
                      }
                    },
                    [_vm._v("Delete")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v("Mod Tools")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item font-weight-bold text-decoration-none",
                      on: {
                        click: function($event) {
                          return _vm.moderatePost(_vm.status, "autocw")
                        }
                      }
                    },
                    [
                      _c("p", { staticClass: "mb-0" }, [_vm._v("Enforce CW")]),
                      _vm._v(" "),
                      _vm._m(0)
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item font-weight-bold text-decoration-none",
                      on: {
                        click: function($event) {
                          return _vm.moderatePost(_vm.status, "noautolink")
                        }
                      }
                    },
                    [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("No Autolinking")
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item font-weight-bold text-decoration-none",
                      on: {
                        click: function($event) {
                          return _vm.moderatePost(_vm.status, "unlisted")
                        }
                      }
                    },
                    [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("Unlisted Posts")
                      ]),
                      _vm._v(" "),
                      _vm._m(2)
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item font-weight-bold text-decoration-none",
                      on: {
                        click: function($event) {
                          return _vm.moderatePost(_vm.status, "disable")
                        }
                      }
                    },
                    [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("Disable Account")
                      ]),
                      _vm._v(" "),
                      _vm._m(3)
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item font-weight-bold text-decoration-none",
                      on: {
                        click: function($event) {
                          return _vm.moderatePost(_vm.status, "suspend")
                        }
                      }
                    },
                    [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("Suspend Account")
                      ]),
                      _vm._v(" "),
                      _vm._m(4)
                    ]
                  )
                ])
              : _vm._e()
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.modal == "true"
      ? _c("div", [
          _c(
            "span",
            {
              attrs: {
                "data-toggle": "modal",
                "data-target": "#mt_pid_" + _vm.status.id
              }
            },
            [
              _c("span", {
                class: [
                  _vm.size == "lg"
                    ? "fas fa-ellipsis-v fa-lg text-muted"
                    : "fas fa-ellipsis-v fa-sm text-lighter"
                ]
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal",
              attrs: {
                tabindex: "-1",
                role: "dialog",
                id: "mt_pid_" + _vm.status.id
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "modal-dialog modal-sm modal-dialog-centered",
                  attrs: { role: "document" }
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-body text-center" }, [
                      _c("div", { staticClass: "list-group" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "list-group-item text-dark text-decoration-none",
                            attrs: { href: _vm.statusUrl(_vm.status) }
                          },
                          [_vm._v("Go to post")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "list-group-item text-dark text-decoration-none",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.hidePost(_vm.status)
                              }
                            }
                          },
                          [_vm._v("Hide")]
                        ),
                        _vm._v(" "),
                        _vm.activeSession == true &&
                        !_vm.statusOwner(_vm.status)
                          ? _c(
                              "a",
                              {
                                staticClass:
                                  "list-group-item text-danger font-weight-bold text-decoration-none",
                                attrs: { href: _vm.reportUrl(_vm.status) }
                              },
                              [_vm._v("Report")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        (_vm.activeSession == true &&
                          _vm.statusOwner(_vm.status) == true) ||
                        _vm.profile.is_admin == true
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "list-group-item text-danger font-weight-bold cursor-pointer",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.deletePost($event)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "list-group-item text-lighter text-decoration-none",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.closeModal()
                              }
                            }
                          },
                          [_vm._v("Close")]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0  small text-muted" }, [
      _vm._v("Adds a CW to every post "),
      _c("br"),
      _vm._v(" made by this account.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0 small text-muted" }, [
      _vm._v("Do not transform mentions, "),
      _c("br"),
      _vm._v(" hashtags or urls into HTML.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0 small text-muted" }, [
      _vm._v("Removes account from "),
      _c("br"),
      _vm._v(" public/network timelines.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0 small text-muted" }, [
      _vm._v("Temporarily disable account "),
      _c("br"),
      _vm._v(" until next time user log in.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0 small text-muted" }, [
      _vm._v("This prevents any new interactions, "),
      _c("br"),
      _vm._v(" without deleting existing data.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Profile.vue?vue&type=template&id=4bdda942&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Profile.vue?vue&type=template&id=4bdda942&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-100 h-100" },
    [
      _vm.owner && _vm.layout == "moment" ? _c("div", [_vm._m(0)]) : _vm._e(),
      _vm._v(" "),
      _vm.isMobile
        ? _c("div", { staticClass: "bg-white p-3 border-bottom" }, [
            _c(
              "div",
              {
                staticClass: "d-flex justify-content-between align-items-center"
              },
              [
                _c(
                  "div",
                  { staticClass: "cursor-pointer", on: { click: _vm.goBack } },
                  [_c("i", { staticClass: "fas fa-chevron-left fa-lg" })]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "font-weight-bold" }, [
                  _vm._v(
                    "\n\t\t\t\t" + _vm._s(this.profileUsername) + "\n\n\t\t\t"
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("a", {
                    staticClass:
                      "fas fa-ellipsis-v fa-lg text-muted text-decoration-none",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.visitorMenu($event)
                      }
                    }
                  })
                ])
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.relationship && _vm.relationship.blocking && _vm.warning
        ? _c("div", { staticClass: "bg-white pt-3 border-bottom" }, [
            _c("div", { staticClass: "container" }, [
              _c("p", { staticClass: "text-center font-weight-bold" }, [
                _vm._v("You are blocking this account")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-center font-weight-bold" }, [
                _vm._v("Click "),
                _c(
                  "a",
                  {
                    staticClass: "cursor-pointer",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.warning = false
                      }
                    }
                  },
                  [_vm._v("here")]
                ),
                _vm._v(" to view profile")
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.loading
        ? _c(
            "div",
            {
              staticClass: "d-flex justify-content-center align-items-center",
              staticStyle: { height: "80vh" }
            },
            [_c("img", { attrs: { src: "/img/pixelfed-icon-grey.svg" } })]
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && !_vm.warning
        ? _c("div", [
            _vm.layout == "metro"
              ? _c("div", { staticClass: "container" }, [
                  _c(
                    "div",
                    { class: _vm.isMobile ? "pt-5" : "pt-5 border-bottom" },
                    [
                      _c("div", { staticClass: "container px-0" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-4 d-md-flex" },
                            [
                              _c(
                                "div",
                                { staticClass: "profile-avatar mx-md-auto" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-block d-md-none mt-n3 mb-3"
                                    },
                                    [
                                      _c("div", { staticClass: "row" }, [
                                        _c("div", { staticClass: "col-4" }, [
                                          _vm.hasStory
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-story cursor-pointer shadow-sm",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.storyRedirect()
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "rounded-circle",
                                                    attrs: {
                                                      alt:
                                                        _vm.profileUsername +
                                                        "'s profile picture",
                                                      src: _vm.profile.avatar,
                                                      width: "77px",
                                                      height: "77px",
                                                      onerror:
                                                        "this.onerror=null;this.src='/storage/avatars/default.png?v=0';"
                                                    }
                                                  })
                                                ]
                                              )
                                            : _c("div", [
                                                _c("img", {
                                                  staticClass:
                                                    "rounded-circle border",
                                                  attrs: {
                                                    alt:
                                                      _vm.profileUsername +
                                                      "'s profile picture",
                                                    src: _vm.profile.avatar,
                                                    width: "77px",
                                                    height: "77px",
                                                    onerror:
                                                      "this.onerror=null;this.src='/storage/avatars/default.png?v=0';"
                                                  }
                                                })
                                              ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-8" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-block d-md-none mt-3 py-2"
                                            },
                                            [
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "nav d-flex justify-content-between"
                                                },
                                                [
                                                  _c(
                                                    "li",
                                                    { staticClass: "nav-item" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "font-weight-light"
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "text-dark text-center"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "font-weight-bold mb-0"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.formatCount(
                                                                        _vm
                                                                          .profile
                                                                          .statuses_count
                                                                      )
                                                                    )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "text-muted mb-0 small"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Posts"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "li",
                                                    { staticClass: "nav-item" },
                                                    [
                                                      _vm.profileSettings
                                                        .followers.count
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "font-weight-light"
                                                            },
                                                            [
                                                              _c(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "text-dark cursor-pointer text-center",
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.followersModal()
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "font-weight-bold mb-0"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm.formatCount(
                                                                            _vm
                                                                              .profile
                                                                              .followers_count
                                                                          )
                                                                        )
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "text-muted mb-0 small"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Followers"
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "li",
                                                    { staticClass: "nav-item" },
                                                    [
                                                      _vm.profileSettings
                                                        .following.count
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "font-weight-light"
                                                            },
                                                            [
                                                              _c(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "text-dark cursor-pointer text-center",
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.followingModal()
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "font-weight-bold mb-0"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm.formatCount(
                                                                            _vm
                                                                              .profile
                                                                              .following_count
                                                                          )
                                                                        )
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "text-muted mb-0 small"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Following"
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "d-none d-md-block pb-3" },
                                    [
                                      _vm.hasStory
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "has-story-lg cursor-pointer shadow-sm",
                                              on: {
                                                click: function($event) {
                                                  return _vm.storyRedirect()
                                                }
                                              }
                                            },
                                            [
                                              _c("img", {
                                                staticClass:
                                                  "rounded-circle box-shadow cursor-pointer",
                                                attrs: {
                                                  alt:
                                                    _vm.profileUsername +
                                                    "'s profile picture",
                                                  src: _vm.profile.avatar,
                                                  width: "150px",
                                                  height: "150px",
                                                  onerror:
                                                    "this.onerror=null;this.src='/storage/avatars/default.png?v=0';"
                                                }
                                              })
                                            ]
                                          )
                                        : _c("div", [
                                            _c("img", {
                                              staticClass:
                                                "rounded-circle box-shadow",
                                              attrs: {
                                                alt:
                                                  _vm.profileUsername +
                                                  "'s profile picture",
                                                src: _vm.profile.avatar,
                                                width: "150px",
                                                height: "150px",
                                                onerror:
                                                  "this.onerror=null;this.src='/storage/avatars/default.png?v=0';"
                                              }
                                            })
                                          ]),
                                      _vm._v(" "),
                                      _vm.sponsorList.patreon ||
                                      _vm.sponsorList.liberapay ||
                                      _vm.sponsorList.opencollective
                                        ? _c(
                                            "p",
                                            { staticClass: "text-center mt-3" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-outline-secondary font-weight-bold py-0",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: _vm.showSponsorModal
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-heart text-danger"
                                                  }),
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t\tDonate\n\t\t\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-12 col-md-8 d-flex align-items-center"
                            },
                            [
                              _c("div", { staticClass: "profile-details" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-none d-md-flex username-bar pb-3 align-items-center"
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-weight-ultralight h3 mb-0"
                                      },
                                      [_vm._v(_vm._s(_vm.profile.username))]
                                    ),
                                    _vm._v(" "),
                                    _vm.profile.id != _vm.user.id &&
                                    _vm.user.hasOwnProperty("id")
                                      ? _c("span", [
                                          _vm.relationship.following == true
                                            ? _c(
                                                "span",
                                                { staticClass: "pl-4" },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-outline-secondary font-weight-bold btn-sm py-1 text-dark mr-2 px-3 btn-sec-alt",
                                                      staticStyle: {
                                                        border:
                                                          "1px solid #dbdbdb"
                                                      },
                                                      attrs: {
                                                        href:
                                                          "/account/direct/t/" +
                                                          _vm.profile.id,
                                                        "data-toggle":
                                                          "tooltip",
                                                        title: "Message"
                                                      }
                                                    },
                                                    [_vm._v("Message")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-outline-secondary font-weight-bold btn-sm py-1 text-dark btn-sec-alt",
                                                      staticStyle: {
                                                        border:
                                                          "1px solid #dbdbdb"
                                                      },
                                                      attrs: {
                                                        type: "button",
                                                        "data-toggle":
                                                          "tooltip",
                                                        title: "Unfollow"
                                                      },
                                                      on: {
                                                        click: _vm.followProfile
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-user-check mx-3"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          !_vm.relationship.following
                                            ? _c(
                                                "span",
                                                { staticClass: "pl-4" },
                                                [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary font-weight-bold btn-sm py-1 px-3",
                                                      attrs: {
                                                        type: "button",
                                                        "data-toggle":
                                                          "tooltip",
                                                        title: "Follow"
                                                      },
                                                      on: {
                                                        click: _vm.followProfile
                                                      }
                                                    },
                                                    [_vm._v("Follow")]
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.owner && _vm.user.hasOwnProperty("id")
                                      ? _c("span", { staticClass: "pl-4" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-outline-secondary btn-sm",
                                              staticStyle: {
                                                "font-weight": "600"
                                              },
                                              attrs: { href: "/settings/home" }
                                            },
                                            [_vm._v("Edit Profile")]
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "pl-4" }, [
                                      _c("a", {
                                        staticClass:
                                          "fas fa-ellipsis-h fa-lg text-dark text-decoration-none",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.visitorMenu($event)
                                          }
                                        }
                                      })
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "font-size-16px" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-none d-md-inline-flex profile-stats pb-3"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "font-weight-light pr-5"
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "text-dark" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-bold"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.formatCount(
                                                        _vm.profile
                                                          .statuses_count
                                                      )
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tPosts\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.profileSettings.followers.count
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "font-weight-light pr-5"
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "text-dark cursor-pointer",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.followersModal()
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.formatCount(
                                                            _vm.profile
                                                              .followers_count
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tFollowers\n\t\t\t\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.profileSettings.following.count
                                        ? _c(
                                            "div",
                                            {
                                              staticClass: "font-weight-light"
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "text-dark cursor-pointer",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.followingModal()
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.formatCount(
                                                            _vm.profile
                                                              .following_count
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tFollowing\n\t\t\t\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "d-flex align-items-center mb-1"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "font-weight-bold mr-1"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.profile.display_name)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.profile.pronouns
                                        ? _c(
                                            "span",
                                            { staticClass: "text-muted small" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.profile.pronouns.join("/")
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.profile.note
                                    ? _c("p", {
                                        staticClass: "mb-0",
                                        domProps: {
                                          innerHTML: _vm._s(_vm.profile.note)
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.profile.website
                                    ? _c("p", [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "profile-website small",
                                            attrs: {
                                              href: _vm.profile.website,
                                              rel:
                                                "me external nofollow noopener",
                                              target: "_blank"
                                            },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.remoteRedirect(
                                                  _vm.profile.website
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.formatWebsite(
                                                  _vm.profile.website
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "d-flex small text-muted align-items-center"
                                    },
                                    [
                                      _vm.profile.is_admin
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn btn-outline-danger btn-sm py-0 mr-3",
                                              attrs: {
                                                title: "Admin Account",
                                                "data-toggle": "tooltip"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\tAdmin\n\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.profile.is_company
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn btn-outline-danger btn-sm py-0 mr-3",
                                              attrs: {
                                                title: "Company Account",
                                                "data-toggle": "tooltip"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\tCompany\n\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.relationship &&
                                      _vm.relationship.followed_by
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn btn-outline-muted btn-sm py-0 mr-3"
                                            },
                                            [_vm._v("Follows You")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\tJoined " +
                                            _vm._s(
                                              _vm.joinedAtFormat(
                                                _vm.profile.created_at
                                              )
                                            ) +
                                            "\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-block d-md-none my-0 pt-3 border-bottom"
                    },
                    [
                      _vm.user && _vm.user.hasOwnProperty("id")
                        ? _c("p", { staticClass: "pt-3" }, [
                            _vm.owner
                              ? _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-secondary bg-white btn-sm py-1 btn-block text-center font-weight-bold text-dark border border-lighter",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.redirect("/settings/home")
                                      }
                                    }
                                  },
                                  [_vm._v("Edit Profile")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.owner && _vm.relationship.following
                              ? _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-secondary bg-white btn-sm py-1 px-5 font-weight-bold text-dark border border-lighter",
                                    on: { click: _vm.followProfile }
                                  },
                                  [_vm._v("   Unfollow   ")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.owner && !_vm.relationship.following
                              ? _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-primary btn-sm py-1 px-5 font-weight-bold",
                                    on: { click: _vm.followProfile }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.relationship.followed_by
                                          ? "Follow Back"
                                          : "     Follow     "
                                      )
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", {}, [
                    _c(
                      "ul",
                      {
                        staticClass:
                          "nav nav-topbar d-flex justify-content-center border-0"
                      },
                      [
                        _c("li", { staticClass: "nav-item border-top" }, [
                          _c(
                            "a",
                            {
                              class:
                                this.mode == "grid"
                                  ? "nav-link text-dark"
                                  : "nav-link",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.switchMode("grid")
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-th" }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "d-none d-md-inline-block small pl-1"
                                },
                                [_vm._v("POSTS")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item px-0 border-top" }, [
                          _c(
                            "a",
                            {
                              class:
                                this.mode == "collections"
                                  ? "nav-link text-dark"
                                  : "nav-link",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.switchMode("collections")
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-images" }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "d-none d-md-inline-block small pl-1"
                                },
                                [_vm._v("COLLECTIONS")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.owner
                          ? _c("li", { staticClass: "nav-item border-top" }, [
                              _c(
                                "a",
                                {
                                  class:
                                    this.mode == "bookmarks"
                                      ? "nav-link text-dark"
                                      : "nav-link",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.switchMode("bookmarks")
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-bookmark" }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "d-none d-md-inline-block small pl-1"
                                    },
                                    [_vm._v("SAVED")]
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.owner
                          ? _c("li", { staticClass: "nav-item border-top" }, [
                              _c(
                                "a",
                                {
                                  class:
                                    this.mode == "archives"
                                      ? "nav-link text-dark"
                                      : "nav-link",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.switchMode("archives")
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "far fa-folder-open"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "d-none d-md-inline-block small pl-1"
                                    },
                                    [_vm._v("ARCHIVES")]
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "container px-0" }, [
                    _c("div", { staticClass: "profile-timeline mt-md-4" }, [
                      _vm.mode == "grid"
                        ? _c("div", [
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _vm._l(_vm.timeline, function(s, index) {
                                  return _c(
                                    "div",
                                    {
                                      key: "tlob:" + index,
                                      staticClass: "col-4 p-1 p-md-3"
                                    },
                                    [
                                      _vm._o(
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "card info-overlay card-md-border-0",
                                            attrs: { href: _vm.statusUrl(s) }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "square" },
                                              [
                                                s.sensitive
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "square-content"
                                                      },
                                                      [
                                                        _vm._m(1, true),
                                                        _vm._v(" "),
                                                        _c("blur-hash-canvas", {
                                                          attrs: {
                                                            width: "32",
                                                            height: "32",
                                                            hash:
                                                              s
                                                                .media_attachments[0]
                                                                .blurhash
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "square-content"
                                                      },
                                                      [
                                                        _c("blur-hash-image", {
                                                          attrs: {
                                                            width: "32",
                                                            height: "32",
                                                            hash:
                                                              s
                                                                .media_attachments[0]
                                                                .blurhash,
                                                            src:
                                                              s
                                                                .media_attachments[0]
                                                                .preview_url
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                _vm._v(" "),
                                                s.pf_type == "photo:album"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "float-right mr-3 post-icon"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-images fa-2x"
                                                        })
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                s.pf_type == "video"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "float-right mr-3 post-icon"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-video fa-2x"
                                                        })
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                s.pf_type == "video:album"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "float-right mr-3 post-icon"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-film fa-2x"
                                                        })
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "info-overlay-text"
                                                  },
                                                  [
                                                    _c(
                                                      "h5",
                                                      {
                                                        staticClass:
                                                          "text-white m-auto font-weight-bold"
                                                      },
                                                      [
                                                        _c("span", [
                                                          _c("span", {
                                                            staticClass:
                                                              "far fa-comment fa-lg p-2 d-flex-inline"
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "d-flex-inline"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.formatCount(
                                                                    s.reply_count
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        0,
                                        "tlob:" + index
                                      )
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                _vm.timeline.length == 0
                                  ? _c("div", { staticClass: "col-12" }, [
                                      _vm._m(2)
                                    ])
                                  : _vm._e()
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _vm.timeline.length
                              ? _c(
                                  "div",
                                  [
                                    _c(
                                      "infinite-loading",
                                      {
                                        on: { infinite: _vm.infiniteTimeline }
                                      },
                                      [
                                        _c("div", {
                                          attrs: { slot: "no-more" },
                                          slot: "no-more"
                                        }),
                                        _vm._v(" "),
                                        _c("div", {
                                          attrs: { slot: "no-results" },
                                          slot: "no-results"
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.mode == "bookmarks"
                        ? _c("div", [
                            _vm.bookmarksLoading
                              ? _c("div", [_vm._m(3)])
                              : _c("div", [
                                  _vm.bookmarks.length
                                    ? _c(
                                        "div",
                                        { staticClass: "row" },
                                        _vm._l(_vm.bookmarks, function(
                                          s,
                                          index
                                        ) {
                                          return _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-4 p-1 p-sm-2 p-md-3"
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "card info-overlay card-md-border-0",
                                                  attrs: { href: s.url }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "square" },
                                                    [
                                                      s.pf_type == "photo:album"
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "float-right mr-3 post-icon"
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-images fa-2x"
                                                              })
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      s.pf_type == "video"
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "float-right mr-3 post-icon"
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-video fa-2x"
                                                              })
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      s.pf_type == "video:album"
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "float-right mr-3 post-icon"
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-film fa-2x"
                                                              })
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c("div", {
                                                        staticClass:
                                                          "square-content",
                                                        style: _vm.previewBackground(
                                                          s
                                                        )
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "info-overlay-text"
                                                        },
                                                        [
                                                          _c(
                                                            "h5",
                                                            {
                                                              staticClass:
                                                                "text-white m-auto font-weight-bold"
                                                            },
                                                            [
                                                              _c("span", [
                                                                _c("span", {
                                                                  staticClass:
                                                                    "fas fa-retweet fa-lg p-2 d-flex-inline"
                                                                }),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "d-flex-inline"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        s.reblogs_count
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    : _c("div", { staticClass: "col-12" }, [
                                        _vm._m(4)
                                      ])
                                ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.mode == "collections"
                        ? _c("div", [
                            _vm.collections.length && _vm.collectionsLoaded
                              ? _c(
                                  "div",
                                  { staticClass: "row" },
                                  _vm._l(_vm.collections, function(c, index) {
                                    return _c(
                                      "div",
                                      {
                                        staticClass: "col-4 p-1 p-sm-2 p-md-3"
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "card info-overlay card-md-border-0",
                                            attrs: { href: c.url }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "square" },
                                              [
                                                _c("div", {
                                                  staticClass: "square-content",
                                                  style:
                                                    "background-image: url(" +
                                                    c.thumb +
                                                    ");"
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _c("div", [_vm._m(5)])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.mode == "archives"
                        ? _c("div", [
                            _vm.archives.length
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-12 col-md-8 offset-md-2 px-0 mb-sm-3 timeline mt-5"
                                  },
                                  [
                                    _vm._m(6),
                                    _vm._v(" "),
                                    _vm._l(_vm.archives, function(
                                      status,
                                      index
                                    ) {
                                      return _c(
                                        "div",
                                        [
                                          _c("status-card", {
                                            class: {
                                              "border-top": index === 0
                                            },
                                            attrs: {
                                              status: status,
                                              "reaction-bar": false
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "infinite-loading",
                                      {
                                        on: {
                                          infinite: _vm.archivesInfiniteLoader
                                        }
                                      },
                                      [
                                        _c("div", {
                                          attrs: { slot: "no-more" },
                                          slot: "no-more"
                                        }),
                                        _vm._v(" "),
                                        _c("div", {
                                          attrs: { slot: "no-results" },
                                          slot: "no-results"
                                        })
                                      ]
                                    )
                                  ],
                                  2
                                )
                              : _vm._e()
                          ])
                        : _vm._e()
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.layout == "moment"
              ? _c("div", { staticClass: "mt-3" }, [
                  _c("div", {
                    class: _vm.momentBackground(),
                    staticStyle: { width: "100%", "min-height": "274px" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg-white border-bottom" }, [
                    _c("div", { staticClass: "container" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12 row mx-0" }, [
                          _c("div", { staticClass: "col-4 text-left mt-2" }, [
                            _vm.relationship && _vm.relationship.followed_by
                              ? _c("span", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "bg-light border border-secondary font-weight-bold small py-1 px-2 text-muted rounded"
                                    },
                                    [_vm._v("FOLLOWS YOU")]
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.profile.is_admin
                              ? _c("span", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "bg-light border border-danger font-weight-bold small py-1 px-2 text-danger rounded"
                                    },
                                    [_vm._v("ADMIN")]
                                  )
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-4 text-center" }, [
                            _c("div", { staticClass: "d-block d-md-none" }, [
                              _c("img", {
                                staticClass: "rounded-circle box-shadow",
                                staticStyle: {
                                  "margin-top": "-60px",
                                  border: "5px solid #fff"
                                },
                                attrs: {
                                  src: _vm.profile.avatar,
                                  width: "110px",
                                  height: "110px"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "d-none d-md-block" }, [
                              _c("img", {
                                staticClass: "rounded-circle box-shadow",
                                staticStyle: {
                                  "margin-top": "-90px",
                                  border: "5px solid #fff"
                                },
                                attrs: {
                                  src: _vm.profile.avatar,
                                  width: "172px",
                                  height: "172px"
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-4 text-right mt-2" }, [
                            _c(
                              "span",
                              { staticClass: "d-none d-md-inline-block pl-4" },
                              [
                                _c("a", {
                                  staticClass:
                                    "fas fa-rss fa-lg text-muted text-decoration-none",
                                  attrs: {
                                    href:
                                      "/users/" + _vm.profile.username + ".atom"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _vm.owner
                              ? _c("span", { staticClass: "pl-md-4 pl-sm-2" }, [
                                  _c("a", {
                                    staticClass:
                                      "fas fa-cog fa-lg text-muted text-decoration-none",
                                    attrs: { href: "/settings/home" }
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.profile.id != _vm.user.id &&
                            _vm.user.hasOwnProperty("id")
                              ? _c("span", { staticClass: "pl-md-4 pl-sm-2" }, [
                                  _c("a", {
                                    staticClass:
                                      "fas fa-cog fa-lg text-muted text-decoration-none",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.visitorMenu($event)
                                      }
                                    }
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.profile.id != _vm.user.id &&
                            _vm.user.hasOwnProperty("id")
                              ? _c("span", [
                                  _vm.relationship.following == true
                                    ? _c(
                                        "span",
                                        { staticClass: "pl-md-4 pl-sm-2" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-secondary font-weight-bold btn-sm",
                                              attrs: { type: "button" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.followProfile()
                                                }
                                              }
                                            },
                                            [_vm._v("Unfollow")]
                                          )
                                        ]
                                      )
                                    : _c(
                                        "span",
                                        { staticClass: "pl-md-4 pl-sm-2" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary font-weight-bold btn-sm",
                                              attrs: { type: "button" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.followProfile()
                                                }
                                              }
                                            },
                                            [_vm._v("Follow")]
                                          )
                                        ]
                                      )
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 text-center" }, [
                          _c("div", { staticClass: "profile-details my-3" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-weight-ultralight h2 text-center"
                              },
                              [_vm._v(_vm._s(_vm.profile.username))]
                            ),
                            _vm._v(" "),
                            _vm.profile.note
                              ? _c("div", {
                                  staticClass: "text-center text-muted p-3",
                                  domProps: {
                                    innerHTML: _vm._s(_vm.profile.note)
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "pb-3 text-muted text-center" },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "text-lighter",
                                    attrs: { href: _vm.profile.url }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.formatCount(
                                              _vm.profile.statuses_count
                                            )
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\tPosts\n\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.profileSettings.followers.count
                                  ? _c(
                                      "a",
                                      {
                                        staticClass:
                                          "text-lighter cursor-pointer px-3",
                                        on: {
                                          click: function($event) {
                                            return _vm.followersModal()
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.formatCount(
                                                  _vm.profile.followers_count
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\tFollowers\n\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.profileSettings.following.count
                                  ? _c(
                                      "a",
                                      {
                                        staticClass:
                                          "text-lighter cursor-pointer",
                                        on: {
                                          click: function($event) {
                                            return _vm.followingModal()
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.formatCount(
                                                  _vm.profile.following_count
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\tFollowing\n\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "container-fluid" }, [
                    _c("div", { staticClass: "profile-timeline mt-md-4" }, [
                      _vm.mode == "grid"
                        ? _c(
                            "div",
                            {},
                            [
                              _c(
                                "masonry",
                                {
                                  attrs: {
                                    cols: { default: 3, 700: 2, 400: 1 },
                                    gutter: { default: "5px" }
                                  }
                                },
                                _vm._l(_vm.timeline, function(s, index) {
                                  return _c("div", { staticClass: "p-1" }, [
                                    _c(
                                      "a",
                                      {
                                        class: [
                                          s.sensitive
                                            ? "card info-overlay card-md-border-0"
                                            : s.media_attachments[0]
                                                .filter_class +
                                              " card info-overlay card-md-border-0"
                                        ],
                                        attrs: { href: _vm.statusUrl(s) }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "img-fluid w-100",
                                          attrs: { src: _vm.previewUrl(s) }
                                        })
                                      ]
                                    )
                                  ])
                                }),
                                0
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.timeline.length
                        ? _c(
                            "div",
                            [
                              _c(
                                "infinite-loading",
                                { on: { infinite: _vm.infiniteTimeline } },
                                [
                                  _c("div", {
                                    attrs: { slot: "no-more" },
                                    slot: "no-more"
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    attrs: { slot: "no-results" },
                                    slot: "no-results"
                                  })
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.profile && _vm.following
        ? _c(
            "b-modal",
            {
              ref: "followingModal",
              attrs: {
                id: "following-modal",
                "hide-footer": "",
                centered: "",
                scrollable: "",
                title: "Following",
                "body-class": "list-group-flush py-3 px-0",
                "dialog-class": "follow-modal"
              }
            },
            [
              !_vm.followingLoading
                ? _c(
                    "div",
                    {
                      staticClass: "list-group",
                      staticStyle: { "max-height": "60vh" }
                    },
                    [
                      !_vm.following.length
                        ? _c(
                            "div",
                            { staticClass: "list-group-item border-0" },
                            [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-center mb-0 font-weight-bold text-muted py-5"
                                },
                                [
                                  _c("span", { staticClass: "text-dark" }, [
                                    _vm._v(_vm._s(_vm.profileUsername))
                                  ]),
                                  _vm._v(" is not following yet")
                                ]
                              )
                            ]
                          )
                        : _c(
                            "div",
                            [
                              _vm.owner == true
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "list-group-item border-0 pt-0 px-0 mt-n2 mb-3"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "d-flex px-4 pb-0 align-items-center"
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-search text-lighter"
                                          }),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.followingModalSearch,
                                                expression:
                                                  "followingModalSearch"
                                              }
                                            ],
                                            staticClass:
                                              "form-control border-0 shadow-0 no-focus",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Search Following..."
                                            },
                                            domProps: {
                                              value: _vm.followingModalSearch
                                            },
                                            on: {
                                              keyup:
                                                _vm.followingModalSearchHandler,
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.followingModalSearch =
                                                  $event.target.value
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(_vm.following, function(user, index) {
                                return _c(
                                  "div",
                                  {
                                    key: "following_" + index,
                                    staticClass:
                                      "list-group-item border-0 py-1 mb-1"
                                  },
                                  [
                                    _c("div", { staticClass: "media" }, [
                                      _c(
                                        "a",
                                        {
                                          attrs: {
                                            href: _vm.profileUrlRedirect(user)
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass:
                                              "mr-3 rounded-circle box-shadow",
                                            attrs: {
                                              src: user.avatar,
                                              alt: user.username + "’s avatar",
                                              width: "30px",
                                              loading: "lazy",
                                              onerror:
                                                "this.onerror=null;this.src='/storage/avatars/default.png?v=0'"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "media-body text-truncate"
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass: "mb-0",
                                              staticStyle: {
                                                "font-size": "14px"
                                              }
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "font-weight-bold text-dark",
                                                  attrs: {
                                                    href: _vm.profileUrlRedirect(
                                                      user
                                                    )
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t" +
                                                      _vm._s(user.username) +
                                                      "\n\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          !user.local
                                            ? _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "text-muted mb-0 text-break mr-3",
                                                  staticStyle: {
                                                    "font-size": "14px"
                                                  },
                                                  attrs: {
                                                    title: user.acct,
                                                    "data-toggle": "dropdown",
                                                    "data-placement": "bottom"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          user.acct.split(
                                                            "@"
                                                          )[0]
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-lighter"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "@" +
                                                          _vm._s(
                                                            user.acct.split(
                                                              "@"
                                                            )[1]
                                                          )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "text-muted mb-0 text-truncate",
                                                  staticStyle: {
                                                    "font-size": "14px"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t" +
                                                      _vm._s(
                                                        user.display_name
                                                          ? user.display_name
                                                          : user.username
                                                      ) +
                                                      "\n\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.owner
                                        ? _c("div", [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-outline-dark btn-sm font-weight-bold",
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.followModalAction(
                                                      user.id,
                                                      index,
                                                      "following"
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Following")]
                                            )
                                          ])
                                        : _vm._e()
                                    ])
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _vm.followingModalSearch &&
                              _vm.following.length == 0
                                ? _c(
                                    "div",
                                    { staticClass: "list-group-item border-0" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group-item border-0 pt-5"
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "p-3 text-center mb-0 lead"
                                            },
                                            [_vm._v("No Results Found")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.following.length > 0 && _vm.followingMore
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "list-group-item text-center",
                                      on: {
                                        click: function($event) {
                                          return _vm.followingLoadMore()
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "mb-0 small text-muted font-weight-light cursor-pointer"
                                        },
                                        [_vm._v("Load more")]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            2
                          )
                    ]
                  )
                : _c("div", { staticClass: "text-center py-5" }, [
                    _c(
                      "div",
                      {
                        staticClass: "spinner-border",
                        attrs: { role: "status" }
                      },
                      [
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("Loading...")
                        ])
                      ]
                    )
                  ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "followerModal",
          attrs: {
            id: "follower-modal",
            "hide-footer": "",
            centered: "",
            scrollable: "",
            title: "Followers",
            "body-class": "list-group-flush py-3 px-0",
            "dialog-class": "follow-modal"
          }
        },
        [
          !_vm.followerLoading
            ? _c(
                "div",
                {
                  staticClass: "list-group",
                  staticStyle: { "max-height": "60vh" }
                },
                [
                  !_vm.followers.length
                    ? _c("div", { staticClass: "list-group-item border-0" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-center mb-0 font-weight-bold text-muted py-5"
                          },
                          [
                            _c("span", { staticClass: "text-dark" }, [
                              _vm._v(_vm._s(_vm.profileUsername))
                            ]),
                            _vm._v(" has no followers yet")
                          ]
                        )
                      ])
                    : _c(
                        "div",
                        [
                          _vm._l(_vm.followers, function(user, index) {
                            return _c(
                              "div",
                              {
                                key: "follower_" + index,
                                staticClass:
                                  "list-group-item border-0 py-1 mb-1"
                              },
                              [
                                _c("div", { staticClass: "media mb-0" }, [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: _vm.profileUrlRedirect(user)
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "mr-3 rounded-circle box-shadow",
                                        attrs: {
                                          src: user.avatar,
                                          alt: user.username + "’s avatar",
                                          width: "30px",
                                          height: "30px",
                                          loading: "lazy",
                                          onerror:
                                            "this.onerror=null;this.src='/storage/avatars/default.png?v=0'"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "media-body mb-0" },
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass: "mb-0",
                                          staticStyle: { "font-size": "14px" }
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark",
                                              attrs: {
                                                href: _vm.profileUrlRedirect(
                                                  user
                                                )
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(user.username) +
                                                  "\n\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      !user.local
                                        ? _c(
                                            "p",
                                            {
                                              staticClass:
                                                "text-muted mb-0 text-break mr-3",
                                              staticStyle: {
                                                "font-size": "14px"
                                              },
                                              attrs: {
                                                title: user.acct,
                                                "data-toggle": "dropdown",
                                                "data-placement": "bottom"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-bold"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      user.acct.split("@")[0]
                                                    )
                                                  )
                                                ]
                                              ),
                                              _c(
                                                "span",
                                                { staticClass: "text-lighter" },
                                                [
                                                  _vm._v(
                                                    "@" +
                                                      _vm._s(
                                                        user.acct.split("@")[1]
                                                      )
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _c(
                                            "p",
                                            {
                                              staticClass:
                                                "text-muted mb-0 text-truncate",
                                              staticStyle: {
                                                "font-size": "14px"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    user.display_name
                                                      ? user.display_name
                                                      : user.username
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                    ]
                                  )
                                ])
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _vm.followers.length && _vm.followerMore
                            ? _c(
                                "div",
                                {
                                  staticClass: "list-group-item text-center",
                                  on: {
                                    click: function($event) {
                                      return _vm.followersLoadMore()
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "mb-0 small text-muted font-weight-light cursor-pointer"
                                    },
                                    [_vm._v("Load more")]
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        2
                      )
                ]
              )
            : _c("div", { staticClass: "text-center py-5" }, [
                _c(
                  "div",
                  { staticClass: "spinner-border", attrs: { role: "status" } },
                  [
                    _c("span", { staticClass: "sr-only" }, [
                      _vm._v("Loading...")
                    ])
                  ]
                )
              ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "visitorContextMenu",
          attrs: {
            id: "visitor-context-menu",
            "hide-footer": "",
            "hide-header": "",
            centered: "",
            size: "sm",
            "body-class": "list-group-flush p-0"
          }
        },
        [
          _vm.relationship
            ? _c("div", { staticClass: "list-group" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "list-group-item cursor-pointer text-center rounded text-dark",
                    on: { click: _vm.copyProfileLink }
                  },
                  [_vm._v("\n\t\t\t\tCopy Link\n\t\t\t")]
                ),
                _vm._v(" "),
                _vm.profile.locked == false
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "list-group-item cursor-pointer text-center rounded text-dark",
                        on: { click: _vm.showEmbedProfileModal }
                      },
                      [_vm._v("\n\t\t\t\tEmbed\n\t\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.user && !_vm.owner && !_vm.relationship.following
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "list-group-item cursor-pointer text-center rounded text-dark",
                        on: { click: _vm.followProfile }
                      },
                      [_vm._v("\n\t\t\t\tFollow\n\t\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.user && !_vm.owner && _vm.relationship.following
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "list-group-item cursor-pointer text-center rounded",
                        on: { click: _vm.followProfile }
                      },
                      [_vm._v("\n\t\t\t\tUnfollow\n\t\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.user && !_vm.owner && !_vm.relationship.muting
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "list-group-item cursor-pointer text-center rounded",
                        on: { click: _vm.muteProfile }
                      },
                      [_vm._v("\n\t\t\t\tMute\n\t\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.user && !_vm.owner && _vm.relationship.muting
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "list-group-item cursor-pointer text-center rounded",
                        on: { click: _vm.unmuteProfile }
                      },
                      [_vm._v("\n\t\t\t\tUnmute\n\t\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.user && !_vm.owner
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "list-group-item cursor-pointer text-center rounded text-dark",
                        on: { click: _vm.reportProfile }
                      },
                      [_vm._v("\n\t\t\t\tReport User\n\t\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.user && !_vm.owner && !_vm.relationship.blocking
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "list-group-item cursor-pointer text-center rounded text-dark",
                        on: { click: _vm.blockProfile }
                      },
                      [_vm._v("\n\t\t\t\tBlock\n\t\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.user && !_vm.owner && _vm.relationship.blocking
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "list-group-item cursor-pointer text-center rounded text-dark",
                        on: { click: _vm.unblockProfile }
                      },
                      [_vm._v("\n\t\t\t\tUnblock\n\t\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.user && _vm.owner
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "list-group-item cursor-pointer text-center rounded text-dark",
                        on: {
                          click: function($event) {
                            return _vm.redirect("/settings/home")
                          }
                        }
                      },
                      [_vm._v("\n\t\t\t\tSettings\n\t\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "list-group-item cursor-pointer text-center rounded text-dark",
                    on: {
                      click: function($event) {
                        return _vm.redirect(
                          "/users/" + _vm.profileUsername + ".atom"
                        )
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\tAtom Feed\n\t\t\t")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "list-group-item cursor-pointer text-center rounded text-muted font-weight-bold",
                    on: {
                      click: function($event) {
                        return _vm.$refs.visitorContextMenu.hide()
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\tClose\n\t\t\t")]
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "sponsorModal",
          attrs: {
            id: "sponsor-modal",
            "hide-footer": "",
            title: "Sponsor " + _vm.profileUsername,
            centered: "",
            size: "md",
            "body-class": "px-5"
          }
        },
        [
          _c("div", [
            _c("p", { staticClass: "font-weight-bold" }, [
              _vm._v("External Links")
            ]),
            _vm._v(" "),
            _vm.sponsorList.patreon
              ? _c("p", { staticClass: "pt-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "font-weight-bold",
                      attrs: {
                        href: "https://" + _vm.sponsorList.patreon,
                        rel: "nofollow"
                      }
                    },
                    [_vm._v(_vm._s(_vm.sponsorList.patreon))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.sponsorList.liberapay
              ? _c("p", { staticClass: "pt-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "font-weight-bold",
                      attrs: {
                        href: "https://" + _vm.sponsorList.liberapay,
                        rel: "nofollow"
                      }
                    },
                    [_vm._v(_vm._s(_vm.sponsorList.liberapay))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.sponsorList.opencollective
              ? _c("p", { staticClass: "pt-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "font-weight-bold",
                      attrs: {
                        href: "https://" + _vm.sponsorList.opencollective,
                        rel: "nofollow"
                      }
                    },
                    [_vm._v(_vm._s(_vm.sponsorList.opencollective))]
                  )
                ])
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "embedModal",
          attrs: {
            id: "ctx-embed-modal",
            "hide-header": "",
            "hide-footer": "",
            centered: "",
            rounded: "",
            size: "md",
            "body-class": "p-2 rounded"
          }
        },
        [
          _c("div", [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.ctxEmbedPayload,
                  expression: "ctxEmbedPayload"
                }
              ],
              staticClass: "form-control disabled text-monospace",
              staticStyle: {
                "overflow-y": "hidden",
                border: "1px solid #efefef",
                "font-size": "12px",
                "line-height": "18px",
                margin: "0 0 7px",
                resize: "none"
              },
              attrs: { rows: "6", disabled: "" },
              domProps: { value: _vm.ctxEmbedPayload },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.ctxEmbedPayload = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "button",
              {
                class: _vm.copiedEmbed
                  ? "btn btn-primary btn-block btn-sm py-1 font-weight-bold disabed"
                  : "btn btn-primary btn-block btn-sm py-1 font-weight-bold",
                attrs: { disabled: _vm.copiedEmbed },
                on: { click: _vm.ctxCopyEmbed }
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.copiedEmbed ? "Embed Code Copied!" : "Copy Embed Code"
                  )
                )
              ]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "mb-0 px-2 small text-muted" }, [
              _vm._v("By using this embed, you agree to our "),
              _c("a", { attrs: { href: "/site/terms" } }, [
                _vm._v("Terms of Use")
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-primary shadow" }, [
      _c(
        "p",
        {
          staticClass:
            "text-center text-white mb-0 py-3 font-weight-bold border-bottom border-info"
        },
        [
          _c("i", { staticClass: "fas fa-exclamation-triangle fa-lg mr-2" }),
          _vm._v(
            " The Moment UI layout has been deprecated and will be removed in a future release.\n\t\t\t"
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info-overlay-text-label" }, [
      _c("h5", { staticClass: "text-white m-auto font-weight-bold" }, [
        _c("span", [
          _c("span", {
            staticClass: "far fa-eye-slash fa-lg p-2 d-flex-inline"
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-5 text-center text-muted" }, [
      _c("p", [_c("i", { staticClass: "fas fa-camera-retro fa-2x" })]),
      _vm._v(" "),
      _c("p", { staticClass: "h2 font-weight-light pt-3" }, [
        _vm._v("No posts yet")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "div",
          {
            staticClass:
              "p-1 p-sm-2 p-md-3 d-flex justify-content-center align-items-center",
            staticStyle: { height: "30vh" }
          },
          [_c("img", { attrs: { src: "/img/pixelfed-icon-grey.svg" } })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-5 text-center text-muted" }, [
      _c("p", [_c("i", { staticClass: "fas fa-bookmark fa-2x" })]),
      _vm._v(" "),
      _c("p", { staticClass: "h2 font-weight-light pt-3" }, [
        _vm._v("No saved bookmarks")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-5 text-center text-muted" }, [
      _c("p", [_c("i", { staticClass: "fas fa-images fa-2x" })]),
      _vm._v(" "),
      _c("p", { staticClass: "h2 font-weight-light pt-3" }, [
        _vm._v("No collections yet")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("p", { staticClass: "mb-0" }, [
        _vm._v("Posts you archive can only be seen by you.")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mb-0" }, [
        _vm._v("For more information see the "),
        _c("a", { attrs: { href: "/site/kb/sharing-media" } }, [
          _vm._v("Sharing Media")
        ]),
        _vm._v(" help center page.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/ContextMenu.vue?vue&type=template&id=65709e28&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/ContextMenu.vue?vue&type=template&id=65709e28& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "modal-stack" },
    [
      _c(
        "b-modal",
        {
          ref: "ctxModal",
          attrs: {
            id: "ctx-modal",
            "hide-header": "",
            "hide-footer": "",
            centered: "",
            rounded: "",
            size: "sm",
            "body-class": "list-group-flush p-0 rounded"
          }
        },
        [
          _c("div", { staticClass: "list-group text-center" }, [
            _vm.status.visibility !== "archived"
              ? _c(
                  "div",
                  {
                    staticClass: "list-group-item rounded cursor-pointer",
                    on: {
                      click: function($event) {
                        return _vm.ctxMenuGoToPost()
                      }
                    }
                  },
                  [_vm._v("View Post")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.status.visibility !== "archived"
              ? _c(
                  "div",
                  {
                    staticClass: "list-group-item rounded cursor-pointer",
                    on: {
                      click: function($event) {
                        return _vm.ctxMenuGoToProfile()
                      }
                    }
                  },
                  [_vm._v("View Profile")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.status.visibility !== "archived"
              ? _c(
                  "div",
                  {
                    staticClass: "list-group-item rounded cursor-pointer",
                    on: {
                      click: function($event) {
                        return _vm.ctxMenuShare()
                      }
                    }
                  },
                  [_vm._v("Share")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.status &&
            _vm.profile &&
            _vm.profile.is_admin == true &&
            _vm.status.visibility !== "archived"
              ? _c(
                  "div",
                  {
                    staticClass: "list-group-item rounded cursor-pointer",
                    on: {
                      click: function($event) {
                        return _vm.ctxModMenuShow()
                      }
                    }
                  },
                  [_vm._v("Moderation Tools")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.status && _vm.status.account.id != _vm.profile.id
              ? _c(
                  "div",
                  {
                    staticClass:
                      "list-group-item rounded cursor-pointer text-danger",
                    on: {
                      click: function($event) {
                        return _vm.ctxMenuReportPost()
                      }
                    }
                  },
                  [_vm._v("Report")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.status &&
            _vm.profile.id == _vm.status.account.id &&
            _vm.status.visibility !== "archived"
              ? _c(
                  "div",
                  {
                    staticClass:
                      "list-group-item rounded cursor-pointer text-danger",
                    on: {
                      click: function($event) {
                        return _vm.archivePost(_vm.status)
                      }
                    }
                  },
                  [_vm._v("Archive")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.status &&
            _vm.profile.id == _vm.status.account.id &&
            _vm.status.visibility == "archived"
              ? _c(
                  "div",
                  {
                    staticClass:
                      "list-group-item rounded cursor-pointer text-danger",
                    on: {
                      click: function($event) {
                        return _vm.unarchivePost(_vm.status)
                      }
                    }
                  },
                  [_vm._v("Unarchive")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.status &&
            (_vm.profile.is_admin || _vm.profile.id == _vm.status.account.id) &&
            _vm.status.visibility !== "archived"
              ? _c(
                  "div",
                  {
                    staticClass:
                      "list-group-item rounded cursor-pointer text-danger",
                    on: {
                      click: function($event) {
                        return _vm.deletePost(_vm.status)
                      }
                    }
                  },
                  [_vm._v("Delete")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer text-lighter",
                on: {
                  click: function($event) {
                    return _vm.closeCtxMenu()
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "ctxModModal",
          attrs: {
            id: "ctx-mod-modal",
            "hide-header": "",
            "hide-footer": "",
            centered: "",
            rounded: "",
            size: "sm",
            "body-class": "list-group-flush p-0 rounded"
          }
        },
        [
          _c("div", { staticClass: "list-group text-center" }, [
            _c("p", { staticClass: "py-2 px-3 mb-0" }),
            _c(
              "div",
              { staticClass: "text-center font-weight-bold text-danger" },
              [_vm._v("Moderation Tools")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "small text-center text-muted" }, [
              _vm._v("Select one of the following options")
            ]),
            _vm._v(" "),
            _c("p"),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "list-group-item rounded cursor-pointer",
                on: {
                  click: function($event) {
                    return _vm.moderatePost(_vm.status, "unlist")
                  }
                }
              },
              [_vm._v("Unlist from Timelines")]
            ),
            _vm._v(" "),
            _vm.status.sensitive
              ? _c(
                  "div",
                  {
                    staticClass: "list-group-item rounded cursor-pointer",
                    on: {
                      click: function($event) {
                        return _vm.moderatePost(_vm.status, "remcw")
                      }
                    }
                  },
                  [_vm._v("Remove Content Warning")]
                )
              : _c(
                  "div",
                  {
                    staticClass: "list-group-item rounded cursor-pointer",
                    on: {
                      click: function($event) {
                        return _vm.moderatePost(_vm.status, "addcw")
                      }
                    }
                  },
                  [_vm._v("Add Content Warning")]
                ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "list-group-item rounded cursor-pointer",
                on: {
                  click: function($event) {
                    return _vm.moderatePost(_vm.status, "spammer")
                  }
                }
              },
              [
                _vm._v("\n\t\t\t\tMark as Spammer"),
                _c("br"),
                _vm._v(" "),
                _c("span", { staticClass: "small" }, [
                  _vm._v("Unlist + CW existing and future posts")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer text-lighter",
                on: {
                  click: function($event) {
                    return _vm.ctxModMenuClose()
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "ctxModOtherModal",
          attrs: {
            id: "ctx-mod-other-modal",
            "hide-header": "",
            "hide-footer": "",
            centered: "",
            rounded: "",
            size: "sm",
            "body-class": "list-group-flush p-0 rounded"
          }
        },
        [
          _c("div", { staticClass: "list-group text-center" }, [
            _c("p", { staticClass: "py-2 px-3 mb-0" }),
            _c(
              "div",
              { staticClass: "text-center font-weight-bold text-danger" },
              [_vm._v("Moderation Tools")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "small text-center text-muted" }, [
              _vm._v("Select one of the following options")
            ]),
            _vm._v(" "),
            _c("p"),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.confirmModal()
                  }
                }
              },
              [_vm._v("Unlist Posts")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.confirmModal()
                  }
                }
              },
              [_vm._v("Moderation Log")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer text-lighter",
                on: {
                  click: function($event) {
                    return _vm.ctxModOtherMenuClose()
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "ctxShareModal",
          attrs: {
            id: "ctx-share-modal",
            title: "Share",
            "hide-footer": "",
            "hide-header": "",
            centered: "",
            rounded: "",
            size: "sm",
            "body-class": "list-group-flush p-0 rounded text-center"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "list-group-item rounded cursor-pointer",
              on: {
                click: function($event) {
                  return _vm.shareStatus(_vm.status, $event)
                }
              }
            },
            [
              _vm._v(
                _vm._s(_vm.status.reblogged ? "Unshare" : "Share") +
                  " to Followers"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "list-group-item rounded cursor-pointer",
              on: {
                click: function($event) {
                  return _vm.ctxMenuCopyLink()
                }
              }
            },
            [_vm._v("Copy Link")]
          ),
          _vm._v(" "),
          _vm.status && _vm.status.local == true && !_vm.status.in_reply_to_id
            ? _c(
                "div",
                {
                  staticClass: "list-group-item rounded cursor-pointer",
                  on: {
                    click: function($event) {
                      return _vm.ctxMenuEmbed()
                    }
                  }
                },
                [_vm._v("Embed")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "list-group-item rounded cursor-pointer text-lighter",
              on: {
                click: function($event) {
                  return _vm.closeCtxShareMenu()
                }
              }
            },
            [_vm._v("Cancel")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "ctxEmbedModal",
          attrs: {
            id: "ctx-embed-modal",
            "hide-header": "",
            "hide-footer": "",
            centered: "",
            rounded: "",
            size: "md",
            "body-class": "p-2 rounded"
          }
        },
        [
          _c("div", [
            _c("div", { staticClass: "form-group" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.ctxEmbedPayload,
                    expression: "ctxEmbedPayload"
                  }
                ],
                staticClass: "form-control disabled text-monospace",
                staticStyle: {
                  "overflow-y": "hidden",
                  border: "1px solid #efefef",
                  "font-size": "12px",
                  "line-height": "18px",
                  margin: "0 0 7px",
                  resize: "none"
                },
                attrs: { rows: "8", disabled: "" },
                domProps: { value: _vm.ctxEmbedPayload },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.ctxEmbedPayload = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group pl-2 d-flex justify-content-center" },
              [
                _c("div", { staticClass: "form-check mr-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.ctxEmbedShowCaption,
                        expression: "ctxEmbedShowCaption"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "checkbox",
                      disabled: _vm.ctxEmbedCompactMode == true
                    },
                    domProps: {
                      checked: Array.isArray(_vm.ctxEmbedShowCaption)
                        ? _vm._i(_vm.ctxEmbedShowCaption, null) > -1
                        : _vm.ctxEmbedShowCaption
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.ctxEmbedShowCaption,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.ctxEmbedShowCaption = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.ctxEmbedShowCaption = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.ctxEmbedShowCaption = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "form-check-label font-weight-light" },
                    [_vm._v("\n\t\t\t\t\t\tShow Caption\n\t\t\t\t\t")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check mr-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.ctxEmbedShowLikes,
                        expression: "ctxEmbedShowLikes"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "checkbox",
                      disabled: _vm.ctxEmbedCompactMode == true
                    },
                    domProps: {
                      checked: Array.isArray(_vm.ctxEmbedShowLikes)
                        ? _vm._i(_vm.ctxEmbedShowLikes, null) > -1
                        : _vm.ctxEmbedShowLikes
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.ctxEmbedShowLikes,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.ctxEmbedShowLikes = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.ctxEmbedShowLikes = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.ctxEmbedShowLikes = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "form-check-label font-weight-light" },
                    [_vm._v("\n\t\t\t\t\t\tShow Likes\n\t\t\t\t\t")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.ctxEmbedCompactMode,
                        expression: "ctxEmbedCompactMode"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.ctxEmbedCompactMode)
                        ? _vm._i(_vm.ctxEmbedCompactMode, null) > -1
                        : _vm.ctxEmbedCompactMode
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.ctxEmbedCompactMode,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.ctxEmbedCompactMode = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.ctxEmbedCompactMode = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.ctxEmbedCompactMode = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "form-check-label font-weight-light" },
                    [_vm._v("\n\t\t\t\t\t\tCompact Mode\n\t\t\t\t\t")]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "button",
              {
                class: _vm.copiedEmbed
                  ? "btn btn-primary btn-block btn-sm py-1 font-weight-bold disabed"
                  : "btn btn-primary btn-block btn-sm py-1 font-weight-bold",
                attrs: { disabled: _vm.copiedEmbed },
                on: { click: _vm.ctxCopyEmbed }
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.copiedEmbed ? "Embed Code Copied!" : "Copy Embed Code"
                  )
                )
              ]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "mb-0 px-2 small text-muted" }, [
              _vm._v("By using this embed, you agree to our "),
              _c("a", { attrs: { href: "/site/terms" } }, [
                _vm._v("Terms of Use")
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "ctxReport",
          attrs: {
            id: "ctx-report",
            "hide-header": "",
            "hide-footer": "",
            centered: "",
            rounded: "",
            size: "sm",
            "body-class": "list-group-flush p-0 rounded"
          }
        },
        [
          _c("p", { staticClass: "py-2 px-3 mb-0" }),
          _c(
            "div",
            { staticClass: "text-center font-weight-bold text-danger" },
            [_vm._v("Report")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "small text-center text-muted" }, [
            _vm._v("Select one of the following options")
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("div", { staticClass: "list-group text-center" }, [
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.sendReport("spam")
                  }
                }
              },
              [_vm._v("Spam")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.sendReport("sensitive")
                  }
                }
              },
              [_vm._v("Sensitive Content")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.sendReport("abusive")
                  }
                }
              },
              [_vm._v("Abusive or Harmful")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.openCtxReportOtherMenu()
                  }
                }
              },
              [_vm._v("Other")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer text-lighter",
                on: {
                  click: function($event) {
                    return _vm.ctxReportMenuGoBack()
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "ctxReportOther",
          attrs: {
            id: "ctx-report-other",
            "hide-header": "",
            "hide-footer": "",
            centered: "",
            rounded: "",
            size: "sm",
            "body-class": "list-group-flush p-0 rounded"
          }
        },
        [
          _c("p", { staticClass: "py-2 px-3 mb-0" }),
          _c(
            "div",
            { staticClass: "text-center font-weight-bold text-danger" },
            [_vm._v("Report")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "small text-center text-muted" }, [
            _vm._v("Select one of the following options")
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("div", { staticClass: "list-group text-center" }, [
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.sendReport("underage")
                  }
                }
              },
              [_vm._v("Underage Account")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.sendReport("copyright")
                  }
                }
              },
              [_vm._v("Copyright Infringement")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.sendReport("impersonation")
                  }
                }
              },
              [_vm._v("Impersonation")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.sendReport("scam")
                  }
                }
              },
              [_vm._v("Scam or Fraud")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "list-group-item rounded cursor-pointer text-lighter",
                on: {
                  click: function($event) {
                    return _vm.ctxReportOtherMenuGoBack()
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "ctxConfirm",
          attrs: {
            id: "ctx-confirm",
            "hide-header": "",
            "hide-footer": "",
            centered: "",
            rounded: "",
            size: "sm",
            "body-class": "list-group-flush p-0 rounded"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "d-flex align-items-center justify-content-center py-3"
            },
            [_c("div", [_vm._v(_vm._s(this.confirmModalTitle))])]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-flex border-top btn-group btn-group-block rounded-0",
              attrs: { role: "group" }
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "btn btn-outline-lighter border-left-0 border-top-0 border-bottom-0 border-right py-2",
                  staticStyle: { color: "rgb(0,122,255) !important" },
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.confirmModalCancel()
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-lighter border-0",
                  staticStyle: { color: "rgb(0,122,255) !important" },
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.confirmModalConfirm()
                    }
                  }
                },
                [_vm._v("Confirm")]
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/PollCard.vue?vue&type=template&id=64818ae5&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/PollCard.vue?vue&type=template&id=64818ae5& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass: "card shadow-none border rounded-0",
          class: { "border-top-0": !_vm.showBorderTop }
        },
        [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "media" }, [
              _c("img", {
                staticClass: "rounded-circle box-shadow mr-2",
                attrs: {
                  src: _vm.status.account.avatar,
                  width: "32px",
                  height: "32px",
                  alt: "avatar"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "media-body" }, [
                _c("div", { staticClass: "pl-2 d-flex align-items-top" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "username font-weight-bold text-dark text-decoration-none text-break",
                      attrs: { href: "#" }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t" +
                          _vm._s(_vm.status.account.acct) +
                          "\n\t\t\t\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "px-1 text-lighter" }, [
                    _vm._v("\n\t\t\t\t\t\t\t·\n\t\t\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "font-weight-bold text-lighter",
                      attrs: { href: _vm.statusUrl(_vm.status) }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t" +
                          _vm._s(_vm.shortTimestamp(_vm.status.created_at)) +
                          "\n\t\t\t\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "d-none d-md-block px-1 text-lighter" },
                    [_vm._v("\n\t\t\t\t\t\t\t·\n\t\t\t\t\t\t")]
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "d-none d-md-block px-1 text-lighter" },
                    [_vm._v("\n\t\t\t\t\t\t\t·\n\t\t\t\t\t\t")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "d-none d-md-block px-1 text-lighter font-weight-bold"
                    },
                    [
                      _vm.status.poll.expired
                        ? _c("span", [
                            _vm._v("\n\t\t\t\t\t\t\t\tClosed\n\t\t\t\t\t\t\t")
                          ])
                        : _c("span", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\tCloses in " +
                                _vm._s(
                                  _vm.shortTimestampAhead(
                                    _vm.status.poll.expires_at
                                  )
                                ) +
                                "\n\t\t\t\t\t\t\t"
                            )
                          ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "text-right",
                      staticStyle: { "flex-grow": "1" }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-link text-dark py-0",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.ctxMenu()
                            }
                          }
                        },
                        [
                          _c("span", {
                            staticClass: "fas fa-ellipsis-h text-lighter"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v("Post Menu")
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pl-2" }, [
                  _c("div", { staticClass: "poll py-3" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "pt-2 text-break d-flex align-items-center mb-3",
                        staticStyle: { "font-size": "17px" }
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "font-weight-bold ml-3",
                          domProps: { innerHTML: _vm._s(_vm.status.content) }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-2" }, [
                      _vm.tab === "vote"
                        ? _c(
                            "div",
                            [
                              _vm._l(_vm.status.poll.options, function(
                                option,
                                index
                              ) {
                                return _c("p", [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-block lead rounded-pill",
                                      class: [
                                        index == _vm.selectedIndex
                                          ? "btn-primary"
                                          : "btn-outline-primary"
                                      ],
                                      attrs: { disabled: !_vm.authenticated },
                                      on: {
                                        click: function($event) {
                                          return _vm.selectOption(index)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(option.title) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                ])
                              }),
                              _vm._v(" "),
                              _vm.selectedIndex != null
                                ? _c("p", { staticClass: "text-right" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary btn-sm font-weight-bold px-3",
                                        on: {
                                          click: function($event) {
                                            return _vm.submitVote()
                                          }
                                        }
                                      },
                                      [_vm._v("Vote")]
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          )
                        : _vm.tab === "voted"
                        ? _c(
                            "div",
                            _vm._l(_vm.status.poll.options, function(
                              option,
                              index
                            ) {
                              return _c("div", { staticClass: "mb-3" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-block lead rounded-pill",
                                    class: [
                                      index == _vm.selectedIndex
                                        ? "btn-primary"
                                        : "btn-outline-secondary"
                                    ],
                                    attrs: { disabled: "" }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(option.title) +
                                        "\n\t\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "font-weight-bold" }, [
                                  _c("span", { staticClass: "text-muted" }, [
                                    _vm._v(
                                      _vm._s(_vm.calculatePercentage(option)) +
                                        "%"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "small text-lighter" },
                                    [
                                      _vm._v(
                                        "(" +
                                          _vm._s(option.votes_count) +
                                          " " +
                                          _vm._s(
                                            option.votes_count == 1
                                              ? "vote"
                                              : "votes"
                                          ) +
                                          ")"
                                      )
                                    ]
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        : _vm.tab === "results"
                        ? _c(
                            "div",
                            _vm._l(_vm.status.poll.options, function(
                              option,
                              index
                            ) {
                              return _c("div", { staticClass: "mb-3" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-secondary btn-block lead rounded-pill",
                                    attrs: { disabled: "" }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(option.title) +
                                        "\n\t\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "font-weight-bold" }, [
                                  _c("span", { staticClass: "text-muted" }, [
                                    _vm._v(
                                      _vm._s(_vm.calculatePercentage(option)) +
                                        "%"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "small text-lighter" },
                                    [
                                      _vm._v(
                                        "(" +
                                          _vm._s(option.votes_count) +
                                          " " +
                                          _vm._s(
                                            option.votes_count == 1
                                              ? "vote"
                                              : "votes"
                                          ) +
                                          ")"
                                      )
                                    ]
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "p",
                        {
                          staticClass:
                            "mb-0 small text-lighter font-weight-bold d-flex justify-content-between"
                        },
                        [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.status.poll.votes_count) + " votes"
                            )
                          ]),
                          _vm._v(" "),
                          _vm.tab != "results" &&
                          _vm.authenticated &&
                          !_vm.activeRefreshTimeout &
                            (_vm.status.poll.expired != true) &&
                          _vm.status.poll.voted
                            ? _c(
                                "a",
                                {
                                  staticClass: "text-lighter",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.refreshResults()
                                    }
                                  }
                                },
                                [_vm._v("Refresh Results")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.tab != "results" &&
                          _vm.authenticated &&
                          _vm.refreshingResults
                            ? _c("span", { staticClass: "text-lighter" }, [
                                _vm._m(2)
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block d-md-none small text-lighter font-weight-bold"
                        },
                        [
                          _vm.status.poll.expired
                            ? _c("span", [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tClosed\n\t\t\t\t\t\t\t\t\t"
                                )
                              ])
                            : _c("span", [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tCloses in " +
                                    _vm._s(
                                      _vm.shortTimestampAhead(
                                        _vm.status.poll.expires_at
                                      )
                                    ) +
                                    "\n\t\t\t\t\t\t\t\t\t"
                                )
                              ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("context-menu", {
        ref: "contextMenu",
        attrs: { status: _vm.status, profile: _vm.profile },
        on: { "status-delete": _vm.statusDeleted }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticClass: "d-none d-md-block px-1 text-primary font-weight-bold" },
      [
        _c("i", { staticClass: "fas fa-poll-h" }),
        _vm._v(" Poll "),
        _c("sup", { staticClass: "text-lighter" }, [_vm._v("BETA")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn btn-primary px-2 py-1" }, [
      _c("i", { staticClass: "fas fa-poll-h fa-lg" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "spinner-border spinner-border-sm",
        attrs: { role: "status" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/StatusCard.vue?vue&type=template&id=5fff7ed0&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/StatusCard.vue?vue&type=template&id=5fff7ed0& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "status-card-component",
      class: { "status-card-sm": _vm.size === "small" }
    },
    [
      _vm.status.pf_type === "text"
        ? _c(
            "div",
            {
              staticClass: "card shadow-none border rounded-0",
              class: { "border-top-0": !_vm.hasTopBorder }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "media" }, [
                  _c("img", {
                    staticClass: "rounded-circle box-shadow mr-2",
                    attrs: {
                      src: _vm.status.account.avatar,
                      width: "32px",
                      height: "32px",
                      onerror:
                        "this.onerror=null;this.src='/storage/avatars/default.png?v=2'",
                      alt: "avatar"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("div", { staticClass: "pl-2 d-flex align-items-top" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "username font-weight-bold text-dark text-decoration-none text-break",
                          attrs: { href: _vm.profileUrl(_vm.status) },
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.statusCardUsernameFormat(_vm.status)
                            )
                          }
                        },
                        [_vm._v("\n\t\t\t\t\t\t\tLoading...\n\t\t\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "px-1 text-lighter" }, [
                        _vm._v("\n\t\t\t\t\t\t\t·\n\t\t\t\t\t\t")
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "font-weight-bold text-lighter",
                          attrs: { href: _vm.statusUrl(_vm.status) }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(
                                _vm.shortTimestamp(_vm.status.created_at)
                              ) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "text-right",
                          staticStyle: { "flex-grow": "1" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-link text-dark py-0",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.ctxMenu()
                                }
                              }
                            },
                            [
                              _c("span", {
                                staticClass: "fas fa-ellipsis-h text-lighter"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Post Menu")
                              ])
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pl-2" }, [
                      _vm.status.sensitive
                        ? _c("details", [
                            _c(
                              "summary",
                              {
                                staticClass: "mb-2 font-weight-bold text-muted"
                              },
                              [_vm._v("Content Warning")]
                            ),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "pt-2 text-break status-content",
                              domProps: {
                                innerHTML: _vm._s(_vm.status.content)
                              }
                            })
                          ])
                        : _c("p", {
                            staticClass: "pt-2 text-break status-content",
                            domProps: { innerHTML: _vm._s(_vm.status.content) }
                          }),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0" }, [
                        _c("i", {
                          staticClass: "fa-heart fa-lg cursor-pointer mr-3",
                          class: {
                            "far text-muted": !_vm.status.favourited,
                            "fas text-danger": _vm.status.favourited
                          },
                          on: {
                            click: function($event) {
                              return _vm.likeStatus(_vm.status, $event)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass:
                            "far fa-comment cursor-pointer text-muted fa-lg mr-3",
                          on: {
                            click: function($event) {
                              return _vm.commentFocus(_vm.status, $event)
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
        : _vm.status.pf_type === "poll"
        ? _c(
            "div",
            [
              _c("poll-card", {
                attrs: { status: _vm.status, profile: _vm.profile },
                on: { "status-delete": _vm.statusDeleted }
              })
            ],
            1
          )
        : _c(
            "div",
            {
              staticClass:
                "card rounded-0 border-top-0 status-card card-md-rounded-0 shadow-none border"
            },
            [
              _vm.status
                ? _c(
                    "div",
                    {
                      staticClass:
                        "card-header d-inline-flex align-items-center bg-white"
                    },
                    [
                      _c("div", [
                        _c("img", {
                          staticClass: "rounded-circle box-shadow",
                          attrs: {
                            src: _vm.status.account.avatar,
                            width: "32px",
                            height: "32px",
                            onerror:
                              "this.onerror=null;this.src='/storage/avatars/default.png?v=2'",
                            alt: "avatar"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "pl-2" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "username font-weight-bold text-dark text-decoration-none text-break",
                            attrs: { href: _vm.profileUrl(_vm.status) },
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.statusCardUsernameFormat(_vm.status)
                              )
                            }
                          },
                          [_vm._v("\n\t\t\t\t\tLoading...\n\t\t\t\t")]
                        ),
                        _vm._v(" "),
                        _vm.status.account.is_admin
                          ? _c(
                              "span",
                              {
                                staticClass: "fa-stack",
                                staticStyle: {
                                  height: "1em",
                                  "line-height": "1em",
                                  "max-width": "19px"
                                },
                                attrs: {
                                  title: "Admin Account",
                                  "data-toggle": "tooltip"
                                }
                              },
                              [
                                _c("i", {
                                  staticClass:
                                    "fas fa-certificate text-danger fa-stack-1x"
                                }),
                                _vm._v(" "),
                                _c("i", {
                                  staticClass:
                                    "fas fa-crown text-white fa-sm fa-stack-1x",
                                  staticStyle: { "font-size": "7px" }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.status.account.is_company
                          ? _c(
                              "span",
                              {
                                staticClass: "fa-stack",
                                staticStyle: {
                                  height: "1em",
                                  "line-height": "1em",
                                  "max-width": "19px"
                                },
                                attrs: {
                                  title: "Company Account",
                                  "data-toggle": "tooltip"
                                }
                              },
                              [
                                _c("i", {
                                  staticClass:
                                    "fas fa-certificate text-blue fa-stack-1x"
                                }),
                                _vm._v(" "),
                                _c("i", {
                                  staticClass:
                                    "fas fa-building text-white fa-sm fa-stack-1x",
                                  staticStyle: { "font-size": "7px" }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _vm.status.place
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "small text-decoration-none text-muted",
                                    attrs: {
                                      href:
                                        "/discover/places/" +
                                        _vm.status.place.id +
                                        "/" +
                                        _vm.status.place.slug,
                                      title: "Location",
                                      "data-toggle": "tooltip"
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-map-marked-alt"
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.status.place.name) +
                                        ", " +
                                        _vm._s(_vm.status.place.country)
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "text-right",
                          staticStyle: { "flex-grow": "1" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-link text-dark py-0",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.ctxMenu()
                                }
                              }
                            },
                            [
                              _c("span", {
                                staticClass: "fas fa-ellipsis-h text-lighter"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Post Menu")
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "postPresenterContainer",
                  staticStyle: { background: "#000" }
                },
                [
                  _vm.status.pf_type === "photo"
                    ? _c(
                        "div",
                        { staticClass: "w-100" },
                        [
                          _c("photo-presenter", {
                            attrs: { status: _vm.status },
                            on: {
                              lightbox: _vm.lightbox,
                              togglecw: function($event) {
                                _vm.status.sensitive = false
                              }
                            }
                          })
                        ],
                        1
                      )
                    : _vm.status.pf_type === "video"
                    ? _c(
                        "div",
                        { staticClass: "w-100" },
                        [
                          _c("video-presenter", {
                            attrs: { status: _vm.status },
                            on: {
                              togglecw: function($event) {
                                _vm.status.sensitive = false
                              }
                            }
                          })
                        ],
                        1
                      )
                    : _vm.status.pf_type === "photo:album"
                    ? _c(
                        "div",
                        { staticClass: "w-100" },
                        [
                          _c("photo-album-presenter", {
                            attrs: { status: _vm.status },
                            on: {
                              lightbox: _vm.lightbox,
                              togglecw: function($event) {
                                _vm.status.sensitive = false
                              }
                            }
                          })
                        ],
                        1
                      )
                    : _vm.status.pf_type === "video:album"
                    ? _c(
                        "div",
                        { staticClass: "w-100" },
                        [
                          _c("video-album-presenter", {
                            attrs: { status: _vm.status },
                            on: {
                              togglecw: function($event) {
                                _vm.status.sensitive = false
                              }
                            }
                          })
                        ],
                        1
                      )
                    : _vm.status.pf_type === "photo:video:album"
                    ? _c(
                        "div",
                        { staticClass: "w-100" },
                        [
                          _c("mixed-album-presenter", {
                            attrs: { status: _vm.status },
                            on: {
                              lightbox: _vm.lightbox,
                              togglecw: function($event) {
                                _vm.status.sensitive = false
                              }
                            }
                          })
                        ],
                        1
                      )
                    : _c("div", { staticClass: "w-100" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-center p-0 font-weight-bold text-white"
                          },
                          [_vm._v("Error: Problem rendering preview.")]
                        )
                      ])
                ]
              ),
              _vm._v(" "),
              _vm.config.features.label.covid.enabled &&
              _vm.status.label &&
              _vm.status.label.covid == true
                ? _c(
                    "div",
                    {
                      staticClass:
                        "card-body border-top border-bottom py-2 cursor-pointer pr-2",
                      on: {
                        click: function($event) {
                          return _vm.labelRedirect()
                        }
                      }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass:
                            "font-weight-bold d-flex justify-content-between align-items-center mb-0"
                        },
                        [
                          _c("span", [
                            _c("i", { staticClass: "fas fa-info-circle mr-2" }),
                            _vm._v(
                              "\n\t\t\t\t\tFor information about COVID-19, " +
                                _vm._s(_vm.config.features.label.covid.org) +
                                "\n\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(0)
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm.reactionBar
                  ? _c("div", { staticClass: "reactions my-1 pb-2" }, [
                      _vm.status.liked_by.count && _vm.status.favourited
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-light btn-outline-dark btn-sm px-3 py-1 shadow rounded-pill align-items-center",
                              on: {
                                click: function($event) {
                                  return _vm.likeStatus(_vm.status, $event)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "fas fa-heart text-danger pr-3 m-0 cursor-pointer",
                                attrs: { title: "Like" }
                              }),
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(_vm.status.liked_by.count) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          )
                        : _vm.status.liked_by.count
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-light lead btn-outline-dark btn-sm px-3 py-1 shadow rounded-pill align-items-center",
                              on: {
                                click: function($event) {
                                  return _vm.likeStatus(_vm.status, $event)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "fas fa-heart pr-3 m-0 like-btn cursor-pointer",
                                attrs: { title: "Like" }
                              }),
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(_vm.status.liked_by.count) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          )
                        : _vm.status.favourited
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-light lead btn-outline-dark btn-sm px-3 py-1 shadow rounded-pill align-items-center",
                              on: {
                                click: function($event) {
                                  return _vm.likeStatus(_vm.status, $event)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "fas fa-heart text-danger pr-3 m-0 like-btn cursor-pointer",
                                attrs: { title: "Like" }
                              }),
                              _vm._v("\n\t\t\t\t\t1\n\t\t\t\t")
                            ]
                          )
                        : _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-light lead btn-outline-dark btn-sm px-3 py-1 shadow rounded-pill align-items-center",
                              on: {
                                click: function($event) {
                                  return _vm.likeStatus(_vm.status, $event)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "fas fa-heart pr-3 m-0 like-btn cursor-pointer",
                                attrs: { title: "Like" }
                              })
                            ]
                          ),
                      _vm._v(" "),
                      !_vm.status.comments_disabled
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-light lead btn-outline-dark btn-sm px-3 py-1 shadow rounded-pill align-items-center",
                              on: {
                                click: function($event) {
                                  return _vm.commentFocus(_vm.status, $event)
                                }
                              }
                            },
                            [
                              !_vm.status.comments_disabled
                                ? _c("i", {
                                    staticClass:
                                      "fas fa-comment pr-3 m-0 cursor-pointer",
                                    attrs: { title: "Comment" }
                                  })
                                : _vm._e()
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.status.taggedPeople.length
                        ? _c("span", { staticClass: "float-right" }, [
                            _c(
                              "span",
                              {
                                staticClass: "font-weight-light small",
                                staticStyle: { color: "#718096" }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-user",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    title: "Tagged People"
                                  }
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.status.taggedPeople, function(
                                  tag,
                                  index
                                ) {
                                  return _c("span", { staticClass: "mr-n2" }, [
                                    _c(
                                      "a",
                                      { attrs: { href: "/" + tag.username } },
                                      [
                                        _c("img", {
                                          staticClass: "border rounded-circle",
                                          attrs: {
                                            src: tag.avatar,
                                            width: "20px",
                                            height: "20px",
                                            "data-toggle": "tooltip",
                                            title: "@" + tag.username,
                                            alt: "Avatar"
                                          }
                                        })
                                      ]
                                    )
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        : _vm._e()
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.status.liked_by.username &&
                _vm.status.liked_by.username !== _vm.profile.username
                  ? _c("div", { staticClass: "likes mb-1" }, [
                      _c("span", { staticClass: "like-count" }, [
                        _vm._v("Liked by\n\t\t\t\t\t"),
                        _c(
                          "a",
                          {
                            staticClass: "font-weight-bold text-dark",
                            attrs: { href: _vm.status.liked_by.url }
                          },
                          [_vm._v(_vm._s(_vm.status.liked_by.username))]
                        ),
                        _vm._v(" "),
                        _vm.status.liked_by.others == true
                          ? _c("span", [
                              _vm._v("\n\t\t\t\t\t\tand "),
                              _vm.status.liked_by.total_count_pretty
                                ? _c(
                                    "span",
                                    { staticClass: "font-weight-bold" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.status.liked_by.total_count_pretty
                                        )
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { staticClass: "font-weight-bold" }, [
                                _vm._v("others")
                              ])
                            ])
                          : _vm._e()
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.status.pf_type != "text"
                  ? _c("div", { staticClass: "caption" }, [
                      !_vm.status.sensitive
                        ? _c(
                            "p",
                            {
                              staticClass: "mb-2 read-more",
                              staticStyle: { overflow: "hidden" }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "username font-weight-bold" },
                                [
                                  _c("bdi", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "text-dark",
                                        attrs: {
                                          href: _vm.profileUrl(_vm.status)
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.status.account.username)
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "status-content",
                                domProps: {
                                  innerHTML: _vm._s(_vm.status.content)
                                }
                              })
                            ]
                          )
                        : _vm._e()
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "timestamp mt-2" }, [
                  _c("p", { staticClass: "small mb-0" }, [
                    _vm.status.visibility != "archived"
                      ? _c(
                          "a",
                          {
                            staticClass: "text-muted text-uppercase",
                            attrs: { href: _vm.statusUrl(_vm.status) }
                          },
                          [
                            _c("timeago", {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover.bottom",
                                  modifiers: { hover: true, bottom: true }
                                }
                              ],
                              attrs: {
                                datetime: _vm.status.created_at,
                                "auto-update": 60,
                                "converter-options": { includeSeconds: true },
                                title: _vm.timestampFormat(
                                  _vm.status.created_at
                                )
                              }
                            })
                          ],
                          1
                        )
                      : _c(
                          "span",
                          { staticClass: "text-muted text-uppercase" },
                          [
                            _vm._v("\n\t\t\t\t\t\tPosted "),
                            _c("timeago", {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover.bottom",
                                  modifiers: { hover: true, bottom: true }
                                }
                              ],
                              attrs: {
                                datetime: _vm.status.created_at,
                                "auto-update": 60,
                                "converter-options": { includeSeconds: true },
                                title: _vm.timestampFormat(
                                  _vm.status.created_at
                                )
                              }
                            })
                          ],
                          1
                        ),
                    _vm._v(" "),
                    _vm.recommended
                      ? _c("span", [
                          _c("span", { staticClass: "px-1" }, [_vm._v("·")]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("Based on popular and trending content")
                          ])
                        ])
                      : _vm._e()
                  ])
                ])
              ])
            ]
          ),
      _vm._v(" "),
      _c("context-menu", {
        ref: "contextMenu",
        attrs: { status: _vm.status, profile: _vm.profile },
        on: { "status-delete": _vm.statusDeleted }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chevron-right text-lighter" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=template&id=66084274&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=template&id=66084274& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.status.sensitive == true
    ? _c("div", [
        _c(
          "details",
          { staticClass: "details-animated" },
          [
            _c("summary", [
              _c("p", { staticClass: "mb-0 lead font-weight-bold" }, [
                _vm._v(
                  _vm._s(
                    _vm.status.spoiler_text
                      ? _vm.status.spoiler_text
                      : "CW / NSFW / Hidden Media"
                  )
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "font-weight-light" }, [
                _vm._v("(click to show)")
              ])
            ]),
            _vm._v(" "),
            _c(
              "b-carousel",
              {
                staticStyle: {
                  "text-shadow": "1px 1px 2px #333",
                  "background-color": "#000"
                },
                attrs: {
                  id: _vm.status.id + "-carousel",
                  controls: "",
                  "img-blank": "",
                  background: "#ffffff",
                  interval: 0
                }
              },
              _vm._l(_vm.status.media_attachments, function(media, index) {
                return _c("b-carousel-slide", { key: media.id + "-media" }, [
                  media.type == "Video"
                    ? _c(
                        "video",
                        {
                          staticClass: "embed-responsive-item",
                          attrs: {
                            slot: "img",
                            preload: "none",
                            controls: "",
                            loop: "",
                            alt: media.description,
                            width: "100%",
                            height: "100%",
                            poster: media.preview_url
                          },
                          slot: "img"
                        },
                        [
                          _c("source", {
                            attrs: { src: media.url, type: media.mime }
                          })
                        ]
                      )
                    : media.type == "Image"
                    ? _c(
                        "div",
                        {
                          attrs: { slot: "img", title: media.description },
                          slot: "img"
                        },
                        [
                          _c("img", {
                            class:
                              media.filter_class + " d-block img-fluid w-100",
                            attrs: {
                              src: media.url,
                              alt: media.description,
                              loading: "lazy",
                              onerror:
                                "this.onerror=null;this.src='/storage/no-preview.png'"
                            }
                          })
                        ]
                      )
                    : _c(
                        "p",
                        {
                          staticClass:
                            "text-center p-0 font-weight-bold text-white"
                        },
                        [_vm._v("Error: Problem rendering preview.")]
                      )
                ])
              }),
              1
            )
          ],
          1
        )
      ])
    : _c(
        "div",
        { staticClass: "w-100 h-100 p-0" },
        [
          _c(
            "carousel",
            {
              ref: "carousel",
              staticClass: "p-0 m-0",
              attrs: {
                centerMode: true,
                loop: false,
                "per-page": 1,
                paginationPosition: "bottom-overlay",
                paginationActiveColor: "#3897f0",
                paginationColor: "#dbdbdb"
              }
            },
            _vm._l(_vm.status.media_attachments, function(media, index) {
              return _c(
                "slide",
                {
                  key: "px-carousel-" + media.id + "-" + index,
                  staticClass: "w-100 h-100 d-block mx-auto text-center",
                  staticStyle: {
                    background: "#000",
                    display: "flex",
                    "align-items": "center"
                  }
                },
                [
                  media.type == "Video"
                    ? _c(
                        "video",
                        {
                          staticClass: "embed-responsive-item",
                          attrs: {
                            preload: "none",
                            controls: "",
                            loop: "",
                            title: media.description,
                            width: "100%",
                            height: "100%",
                            poster: media.preview_url
                          }
                        },
                        [
                          _c("source", {
                            attrs: { src: media.url, type: media.mime }
                          })
                        ]
                      )
                    : media.type == "Image"
                    ? _c("div", { attrs: { title: media.description } }, [
                        _c("img", {
                          class: media.filter_class + " img-fluid w-100",
                          attrs: {
                            src: media.url,
                            alt: media.description,
                            loading: "lazy",
                            onerror:
                              "this.onerror=null;this.src='/storage/no-preview.png'"
                          }
                        })
                      ])
                    : _c(
                        "p",
                        {
                          staticClass:
                            "text-center p-0 font-weight-bold text-white"
                        },
                        [_vm._v("Error: Problem rendering preview.")]
                      )
                ]
              )
            }),
            1
          )
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=template&id=1c78113d&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=template&id=1c78113d&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.status.sensitive == true
    ? _c(
        "div",
        { staticClass: "content-label-wrapper" },
        [
          _c("div", { staticClass: "text-light content-label" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("p", { staticClass: "h4 font-weight-bold text-center" }, [
              _vm._v("\n\t\t\tSensitive Content\n\t\t")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-center py-2" }, [
              _vm._v(
                "\n\t\t\t" +
                  _vm._s(
                    _vm.status.spoiler_text
                      ? _vm.status.spoiler_text
                      : "This album may contain sensitive content."
                  ) +
                  "\n\t\t"
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-0" }, [
              _c(
                "button",
                {
                  staticClass:
                    "btn btn-outline-light btn-block btn-sm font-weight-bold",
                  on: {
                    click: function($event) {
                      return _vm.toggleContentWarning()
                    }
                  }
                },
                [_vm._v("See Post")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("blur-hash-image", {
            attrs: {
              width: "32",
              height: "32",
              punch: 1,
              hash: _vm.status.media_attachments[0].blurhash,
              alt: _vm.altText(_vm.status)
            }
          })
        ],
        1
      )
    : _c(
        "div",
        { staticClass: "w-100 h-100 p-0" },
        [
          _c(
            "carousel",
            {
              ref: "carousel",
              staticClass: "p-0 m-0",
              attrs: {
                centerMode: true,
                loop: false,
                "per-page": 1,
                paginationPosition: "bottom-overlay",
                paginationActiveColor: "#3897f0",
                paginationColor: "#dbdbdb"
              }
            },
            _vm._l(_vm.status.media_attachments, function(img, index) {
              return _c(
                "slide",
                {
                  key: "px-carousel-" + img.id + "-" + index,
                  staticStyle: {
                    background: "#000",
                    display: "flex",
                    "align-items": "center"
                  },
                  attrs: { title: img.description }
                },
                [
                  _c("img", {
                    class: img.filter_class + " img-fluid w-100 p-0",
                    attrs: {
                      src: img.url,
                      alt: _vm.altText(img),
                      onerror:
                        "this.onerror=null;this.src='/storage/no-preview.png'"
                    }
                  }),
                  _vm._v(" "),
                  !_vm.status.sensitive && _vm.sensitive
                    ? _c(
                        "p",
                        {
                          staticStyle: {
                            "margin-top": "0",
                            padding: "10px",
                            color: "#fff",
                            "font-size": "10px",
                            "text-align": "right",
                            position: "absolute",
                            top: "0",
                            right: "0",
                            "border-top-left-radius": "5px",
                            cursor: "pointer",
                            background:
                              "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))"
                          },
                          on: {
                            click: function($event) {
                              _vm.status.sensitive = true
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-eye-slash fa-lg" })]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.status.media_attachments[0].license
                    ? _c(
                        "p",
                        {
                          staticStyle: {
                            "margin-bottom": "0",
                            padding: "0 5px",
                            color: "#fff",
                            "font-size": "10px",
                            "text-align": "right",
                            position: "absolute",
                            bottom: "0",
                            right: "0",
                            "border-top-left-radius": "5px",
                            background:
                              "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))"
                          }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "font-weight-bold text-light",
                              attrs: { href: _vm.status.url }
                            },
                            [_vm._v("Photo")]
                          ),
                          _vm._v(" by "),
                          _c(
                            "a",
                            {
                              staticClass: "font-weight-bold text-light",
                              attrs: { href: _vm.status.account.url }
                            },
                            [_vm._v("@" + _vm._s(_vm.status.account.username))]
                          ),
                          _vm._v(" licensed under "),
                          _c(
                            "a",
                            {
                              staticClass: "font-weight-bold text-light",
                              attrs: {
                                href:
                                  _vm.status.media_attachments[0].license.url
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.status.media_attachments[0].license.title
                                )
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e()
                ]
              )
            }),
            1
          )
        ],
        1
      )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center" }, [
      _c("i", { staticClass: "far fa-eye-slash fa-2x" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=template&id=88c038d8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=template&id=88c038d8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.status.sensitive == true
    ? _c(
        "div",
        { staticClass: "content-label-wrapper" },
        [
          _c("div", { staticClass: "text-light content-label" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("p", { staticClass: "h4 font-weight-bold text-center" }, [
              _vm._v("\n\t\t\tSensitive Content\n\t\t")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-center py-2" }, [
              _vm._v(
                "\n\t\t\t" +
                  _vm._s(
                    _vm.status.spoiler_text
                      ? _vm.status.spoiler_text
                      : "This post may contain sensitive content."
                  ) +
                  "\n\t\t"
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-0" }, [
              _c(
                "button",
                {
                  staticClass:
                    "btn btn-outline-light btn-block btn-sm font-weight-bold",
                  on: {
                    click: function($event) {
                      return _vm.toggleContentWarning()
                    }
                  }
                },
                [_vm._v("See Post")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("blur-hash-image", {
            attrs: {
              width: "32",
              height: "32",
              punch: 1,
              hash: _vm.status.media_attachments[0].blurhash,
              alt: _vm.altText(_vm.status)
            }
          })
        ],
        1
      )
    : _c("div", [
        _c(
          "div",
          {
            staticStyle: { position: "relative" },
            attrs: { title: _vm.status.media_attachments[0].description }
          },
          [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src: _vm.status.media_attachments[0].url,
                loading: "lazy",
                alt: _vm.altText(_vm.status),
                width: _vm.width(),
                height: _vm.height(),
                onerror: "this.onerror=null;this.src='/storage/no-preview.png'"
              }
            }),
            _vm._v(" "),
            !_vm.status.sensitive && _vm.sensitive
              ? _c(
                  "p",
                  {
                    staticStyle: {
                      "margin-top": "0",
                      padding: "10px",
                      color: "#fff",
                      "font-size": "10px",
                      "text-align": "right",
                      position: "absolute",
                      top: "0",
                      right: "0",
                      "border-top-left-radius": "5px",
                      cursor: "pointer",
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))"
                    },
                    on: {
                      click: function($event) {
                        _vm.status.sensitive = true
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-eye-slash fa-lg" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.status.media_attachments[0].license
              ? _c(
                  "p",
                  {
                    staticStyle: {
                      "margin-bottom": "0",
                      padding: "0 5px",
                      color: "#fff",
                      "font-size": "10px",
                      "text-align": "right",
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      "border-top-left-radius": "5px",
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "font-weight-bold text-light",
                        attrs: { href: _vm.status.url }
                      },
                      [_vm._v("Photo")]
                    ),
                    _vm._v(" by "),
                    _c(
                      "a",
                      {
                        staticClass: "font-weight-bold text-light",
                        attrs: { href: _vm.status.account.url }
                      },
                      [_vm._v("@" + _vm._s(_vm.status.account.username))]
                    ),
                    _vm._v(" licensed under "),
                    _c(
                      "a",
                      {
                        staticClass: "font-weight-bold text-light",
                        attrs: {
                          href: _vm.status.media_attachments[0].license.url
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.status.media_attachments[0].license.title)
                        )
                      ]
                    )
                  ]
                )
              : _vm._e()
          ]
        )
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center" }, [
      _c("i", { staticClass: "far fa-eye-slash fa-2x" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=template&id=43194746&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=template&id=43194746& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.status.sensitive == true
    ? _c("div", [
        _c(
          "details",
          { staticClass: "details-animated" },
          [
            _c("summary", [
              _c("p", { staticClass: "mb-0 lead font-weight-bold" }, [
                _vm._v(
                  _vm._s(
                    _vm.status.spoiler_text ? _vm.status.spoiler_text : "CW"
                  )
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "font-weight-light" }, [
                _vm._v("(click to show)")
              ])
            ]),
            _vm._v(" "),
            _c(
              "b-carousel",
              {
                staticStyle: {
                  "text-shadow": "1px 1px 2px #333",
                  "background-color": "#000"
                },
                attrs: {
                  id: _vm.status.id + "-carousel",
                  controls: "",
                  "img-blank": "",
                  background: "#ffffff",
                  interval: 0
                }
              },
              _vm._l(_vm.status.media_attachments, function(vid, index) {
                return _c("b-carousel-slide", { key: vid.id + "-media" }, [
                  _c(
                    "video",
                    {
                      staticClass: "embed-responsive-item",
                      attrs: {
                        slot: "img",
                        preload: "none",
                        controls: "",
                        loop: "",
                        alt: vid.description,
                        width: "100%",
                        height: "100%",
                        poster: vid.preview_url
                      },
                      slot: "img"
                    },
                    [_c("source", { attrs: { src: vid.url, type: vid.mime } })]
                  )
                ])
              }),
              1
            )
          ],
          1
        )
      ])
    : _c(
        "div",
        [
          _c(
            "b-carousel",
            {
              staticStyle: {
                "text-shadow": "1px 1px 2px #333",
                "background-color": "#000"
              },
              attrs: {
                id: _vm.status.id + "-carousel",
                controls: "",
                "img-blank": "",
                background: "#ffffff",
                interval: 0
              }
            },
            _vm._l(_vm.status.media_attachments, function(vid, index) {
              return _c("b-carousel-slide", { key: vid.id + "-media" }, [
                _c(
                  "video",
                  {
                    staticClass: "embed-responsive-item",
                    attrs: {
                      slot: "img",
                      preload: "none",
                      controls: "",
                      loop: "",
                      alt: vid.description,
                      width: "100%",
                      height: "100%",
                      poster: vid.preview_url
                    },
                    slot: "img"
                  },
                  [_c("source", { attrs: { src: vid.url, type: vid.mime } })]
                )
              ])
            }),
            1
          )
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=template&id=9ad5682a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=template&id=9ad5682a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.status.sensitive == true
    ? _c(
        "div",
        { staticClass: "content-label-wrapper" },
        [
          _c("div", { staticClass: "text-light content-label" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("p", { staticClass: "h4 font-weight-bold text-center" }, [
              _vm._v("\n\t\t\tSensitive Content\n\t\t")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-center py-2" }, [
              _vm._v(
                "\n\t\t\t" +
                  _vm._s(
                    _vm.status.spoiler_text
                      ? _vm.status.spoiler_text
                      : "This post may contain sensitive content."
                  ) +
                  "\n\t\t"
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-0" }, [
              _c(
                "button",
                {
                  staticClass:
                    "btn btn-outline-light btn-block btn-sm font-weight-bold",
                  on: {
                    click: function($event) {
                      return _vm.toggleContentWarning()
                    }
                  }
                },
                [_vm._v("See Post")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("blur-hash-image", {
            attrs: {
              width: "32",
              height: "32",
              punch: 1,
              hash: _vm.status.media_attachments[0].blurhash,
              alt: _vm.altText(_vm.status)
            }
          })
        ],
        1
      )
    : _c("div", { staticClass: "embed-responsive embed-responsive-16by9" }, [
        _c(
          "video",
          {
            staticClass: "video",
            attrs: {
              controls: "",
              preload: "metadata",
              loop: "",
              poster: _vm.status.media_attachments[0].preview_url,
              "data-id": _vm.status.id
            }
          },
          [
            _c("source", {
              attrs: {
                src: _vm.status.media_attachments[0].url,
                type: _vm.status.media_attachments[0].mime
              }
            })
          ]
        )
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center" }, [
      _c("i", { staticClass: "far fa-eye-slash fa-2x" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-masonry-css/dist/vue-masonry.es2015.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-masonry-css/dist/vue-masonry.es2015.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-masonry-css v1.0.3
 * https://github.com/paulcollett/vue-masonry-css
 * Released under the MIT License.
 */

// the component name `<masonry />`
// can be overridden with `Vue.use(Masonry, { name: 'the-masonry' });`
var componentName = 'masonry';

var props = {
  tag: {
    type: [String],
    default: 'div'
  },
  cols: {
    type: [Object, Number, String],
    default: 2
  },
  gutter: {
    type: [Object, Number, String],
    default: 0
  },
  css: {
    type: [Boolean],
    default: true
  },
  columnTag: {
    type: [String],
    default: 'div'
  },
  columnClass: {
    type: [String, Array, Object],
    default: function () { return []; }
  },
  columnAttr: {
    type: [Object],
    default: function () { return ({}); }
  }
};

// Get the resulting value from  `:col=` prop
// based on the window width
var breakpointValue = function (mixed, windowWidth) {
  var valueAsNum = parseInt(mixed);

  if(valueAsNum > -1) {
    return mixed;
  }else if(typeof mixed !== 'object') {
    return 0;
  }

  var matchedBreakpoint = Infinity;
  var matchedValue = mixed.default || 0;

  for(var k in mixed) {
    var breakpoint = parseInt(k);
    var breakpointValRaw = mixed[breakpoint];
    var breakpointVal = parseInt(breakpointValRaw);

    if(isNaN(breakpoint) || isNaN(breakpointVal)) {
      continue;
    }

    var isNewBreakpoint = windowWidth <= breakpoint && breakpoint < matchedBreakpoint;

    if(isNewBreakpoint) {
      matchedBreakpoint = breakpoint;
      matchedValue = breakpointValRaw;
    }
  }

  return matchedValue;
};

var component = {
  props: props,

  data: function data() {
    return {
      displayColumns: 2,
      displayGutter: 0
    }
  },

  mounted: function mounted() {
    var this$1 = this;

    this.$nextTick(function () {
      this$1.reCalculate();
    });

    // Bind resize handler to page
    if(window) {
      window.addEventListener('resize', this.reCalculate);
    }
  },

  updated: function updated() {
    var this$1 = this;

    this.$nextTick(function () {
      this$1.reCalculate();
    });
  },

  beforeDestroy: function beforeDestroy() {
    if(window) {
      window.removeEventListener('resize', this.reCalculate);
    }
  },

  methods: {
    // Recalculate how many columns to display based on window width
    // and the value of the passed `:cols=` prop
    reCalculate: function reCalculate() {
      var previousWindowWidth = this.windowWidth;

      this.windowWidth = (window ? window.innerWidth : null) || Infinity;

      // Window resize events get triggered on page height
      // change which when loading the page can result in multiple
      // needless calculations. We prevent this here.
      if(previousWindowWidth === this.windowWidth) {
        return;
      }

      this._reCalculateColumnCount(this.windowWidth);

      this._reCalculateGutterSize(this.windowWidth);
    },

    _reCalculateGutterSize: function _reCalculateGutterSize(windowWidth) {
      this.displayGutter = breakpointValue(this.gutter, windowWidth);
    },

    _reCalculateColumnCount: function _reCalculateColumnCount(windowWidth) {
      var newColumns = breakpointValue(this.cols, windowWidth);

      // Make sure we can return a valid value
      newColumns = Math.max(1, Number(newColumns) || 0);

      this.displayColumns = newColumns;
    },

    _getChildItemsInColumnsArray: function _getChildItemsInColumnsArray() {
      var this$1 = this;

      var columns = [];
      var childItems = this.$slots.default || [];

      // This component does not work with a child <transition-group /> ..yet,
      // so for now we think it may be helpful to ignore until we can find a way for support
      if(childItems.length === 1 && childItems[0].componentOptions && childItems[0].componentOptions.tag == 'transition-group') {
        childItems = childItems[0].componentOptions.children;
      }

      // Loop through child elements
      for (var i = 0, visibleItemI = 0; i < childItems.length; i++, visibleItemI++) {
        // skip Vue elements without tags, which includes
        // whitespace elements and also plain text
        if(!childItems[i].tag) {
          visibleItemI--;

          continue;
        }

        // Get the column index the child item will end up in
        var columnIndex = visibleItemI % this$1.displayColumns;

        if(!columns[columnIndex]) {
          columns[columnIndex] = [];
        }

        columns[columnIndex].push(childItems[i]);
      }

      return columns;
    }
  },

  render: function render(createElement) {
    var this$1 = this;

    var columnsContainingChildren = this._getChildItemsInColumnsArray();
    var isGutterSizeUnitless = parseInt(this.displayGutter) === this.displayGutter * 1;
    var gutterSizeWithUnit =  isGutterSizeUnitless ? ((this.displayGutter) + "px") : this.displayGutter;

    var columnStyle = {
      boxSizing: 'border-box',
      backgroundClip: 'padding-box',
      width: ((100 / this.displayColumns) + "%"),
      border: '0 solid transparent',
      borderLeftWidth: gutterSizeWithUnit
    };

    var columns = columnsContainingChildren.map(function (children, index) {
      /// Create column element and inject the children
      return createElement(this$1.columnTag, {
        key: index + '-' + columnsContainingChildren.length,
        style: this$1.css ? columnStyle : null,
        class: this$1.columnClass,
        attrs: this$1.columnAttr
      }, children); // specify child items here
    });

    var containerStyle = {
      display: ['-webkit-box', '-ms-flexbox', 'flex'],
      marginLeft: ("-" + gutterSizeWithUnit)
    };

    // Return wrapper with columns
    return createElement(
      this.tag, // tag name
      this.css ? { style: containerStyle } : null, // element options
      columns // column vue elements
    );
  }
};

var Plugin = function () {};

Plugin.install = function (Vue, options) {
  if (Plugin.installed) {
    return;
  }

  if(options && options.name) {
    Vue.component(options.name, component);
  } else {
    Vue.component(componentName, component);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (Plugin);


/***/ }),

/***/ "./resources/assets/js/components/PostMenu.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/PostMenu.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostMenu_vue_vue_type_template_id_bb77b854_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostMenu.vue?vue&type=template&id=bb77b854&scoped=true& */ "./resources/assets/js/components/PostMenu.vue?vue&type=template&id=bb77b854&scoped=true&");
/* harmony import */ var _PostMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostMenu.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/PostMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostMenu_vue_vue_type_style_index_0_id_bb77b854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css& */ "./resources/assets/js/components/PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostMenu_vue_vue_type_template_id_bb77b854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostMenu_vue_vue_type_template_id_bb77b854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bb77b854",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/PostMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/PostMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/PostMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PostMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_style_index_0_id_bb77b854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PostMenu.vue?vue&type=style&index=0&id=bb77b854&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_style_index_0_id_bb77b854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_style_index_0_id_bb77b854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_style_index_0_id_bb77b854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_style_index_0_id_bb77b854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/PostMenu.vue?vue&type=template&id=bb77b854&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/PostMenu.vue?vue&type=template&id=bb77b854&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_template_id_bb77b854_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostMenu.vue?vue&type=template&id=bb77b854&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PostMenu.vue?vue&type=template&id=bb77b854&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_template_id_bb77b854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostMenu_vue_vue_type_template_id_bb77b854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Profile.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/components/Profile.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_4bdda942_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=4bdda942&scoped=true& */ "./resources/assets/js/components/Profile.vue?vue&type=template&id=4bdda942&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_id_4bdda942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css& */ "./resources/assets/js/components/Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_4bdda942_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_4bdda942_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4bdda942",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_4bdda942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Profile.vue?vue&type=style&index=0&id=4bdda942&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_4bdda942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_4bdda942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_4bdda942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_4bdda942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/Profile.vue?vue&type=template&id=4bdda942&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Profile.vue?vue&type=template&id=4bdda942&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_4bdda942_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=4bdda942&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Profile.vue?vue&type=template&id=4bdda942&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_4bdda942_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_4bdda942_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/partials/ContextMenu.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/partials/ContextMenu.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_65709e28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=template&id=65709e28& */ "./resources/assets/js/components/partials/ContextMenu.vue?vue&type=template&id=65709e28&");
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/partials/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContextMenu_vue_vue_type_template_id_65709e28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContextMenu_vue_vue_type_template_id_65709e28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/partials/ContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/partials/ContextMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/ContextMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/partials/ContextMenu.vue?vue&type=template&id=65709e28&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/ContextMenu.vue?vue&type=template&id=65709e28& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_65709e28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=template&id=65709e28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/ContextMenu.vue?vue&type=template&id=65709e28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_65709e28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_65709e28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/partials/PollCard.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/partials/PollCard.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PollCard_vue_vue_type_template_id_64818ae5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PollCard.vue?vue&type=template&id=64818ae5& */ "./resources/assets/js/components/partials/PollCard.vue?vue&type=template&id=64818ae5&");
/* harmony import */ var _PollCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PollCard.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/partials/PollCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PollCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PollCard_vue_vue_type_template_id_64818ae5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PollCard_vue_vue_type_template_id_64818ae5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/partials/PollCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/partials/PollCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/PollCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PollCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PollCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/PollCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PollCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/partials/PollCard.vue?vue&type=template&id=64818ae5&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/PollCard.vue?vue&type=template&id=64818ae5& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PollCard_vue_vue_type_template_id_64818ae5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PollCard.vue?vue&type=template&id=64818ae5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/PollCard.vue?vue&type=template&id=64818ae5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PollCard_vue_vue_type_template_id_64818ae5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PollCard_vue_vue_type_template_id_64818ae5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/partials/StatusCard.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/partials/StatusCard.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatusCard_vue_vue_type_template_id_5fff7ed0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusCard.vue?vue&type=template&id=5fff7ed0& */ "./resources/assets/js/components/partials/StatusCard.vue?vue&type=template&id=5fff7ed0&");
/* harmony import */ var _StatusCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusCard.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/partials/StatusCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StatusCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatusCard.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/js/components/partials/StatusCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StatusCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatusCard_vue_vue_type_template_id_5fff7ed0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatusCard_vue_vue_type_template_id_5fff7ed0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/partials/StatusCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/partials/StatusCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/StatusCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatusCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/StatusCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/partials/StatusCard.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/StatusCard.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--11-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatusCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/StatusCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/partials/StatusCard.vue?vue&type=template&id=5fff7ed0&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/StatusCard.vue?vue&type=template&id=5fff7ed0& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_template_id_5fff7ed0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatusCard.vue?vue&type=template&id=5fff7ed0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/StatusCard.vue?vue&type=template&id=5fff7ed0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_template_id_5fff7ed0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusCard_vue_vue_type_template_id_5fff7ed0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/presenter/MixedAlbumPresenter.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/MixedAlbumPresenter.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MixedAlbumPresenter_vue_vue_type_template_id_66084274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MixedAlbumPresenter.vue?vue&type=template&id=66084274& */ "./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=template&id=66084274&");
/* harmony import */ var _MixedAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MixedAlbumPresenter.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MixedAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MixedAlbumPresenter_vue_vue_type_template_id_66084274___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MixedAlbumPresenter_vue_vue_type_template_id_66084274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/presenter/MixedAlbumPresenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MixedAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MixedAlbumPresenter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MixedAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=template&id=66084274&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=template&id=66084274& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MixedAlbumPresenter_vue_vue_type_template_id_66084274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MixedAlbumPresenter.vue?vue&type=template&id=66084274& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/MixedAlbumPresenter.vue?vue&type=template&id=66084274&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MixedAlbumPresenter_vue_vue_type_template_id_66084274___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MixedAlbumPresenter_vue_vue_type_template_id_66084274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoAlbumPresenter_vue_vue_type_template_id_1c78113d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoAlbumPresenter.vue?vue&type=template&id=1c78113d&scoped=true& */ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=template&id=1c78113d&scoped=true&");
/* harmony import */ var _PhotoAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoAlbumPresenter.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PhotoAlbumPresenter_vue_vue_type_style_index_0_id_1c78113d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css& */ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhotoAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoAlbumPresenter_vue_vue_type_template_id_1c78113d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotoAlbumPresenter_vue_vue_type_template_id_1c78113d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c78113d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/presenter/PhotoAlbumPresenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoAlbumPresenter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_style_index_0_id_1c78113d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=style&index=0&id=1c78113d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_style_index_0_id_1c78113d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_style_index_0_id_1c78113d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_style_index_0_id_1c78113d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_style_index_0_id_1c78113d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=template&id=1c78113d&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=template&id=1c78113d&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_template_id_1c78113d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoAlbumPresenter.vue?vue&type=template&id=1c78113d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue?vue&type=template&id=1c78113d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_template_id_1c78113d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoAlbumPresenter_vue_vue_type_template_id_1c78113d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/presenter/PhotoPresenter.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/presenter/PhotoPresenter.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoPresenter_vue_vue_type_template_id_88c038d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoPresenter.vue?vue&type=template&id=88c038d8&scoped=true& */ "./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=template&id=88c038d8&scoped=true&");
/* harmony import */ var _PhotoPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoPresenter.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PhotoPresenter_vue_vue_type_style_index_0_id_88c038d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css& */ "./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhotoPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoPresenter_vue_vue_type_template_id_88c038d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotoPresenter_vue_vue_type_template_id_88c038d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "88c038d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/presenter/PhotoPresenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoPresenter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_style_index_0_id_88c038d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=style&index=0&id=88c038d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_style_index_0_id_88c038d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_style_index_0_id_88c038d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_style_index_0_id_88c038d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_style_index_0_id_88c038d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=template&id=88c038d8&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=template&id=88c038d8&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_template_id_88c038d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoPresenter.vue?vue&type=template&id=88c038d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/PhotoPresenter.vue?vue&type=template&id=88c038d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_template_id_88c038d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoPresenter_vue_vue_type_template_id_88c038d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/presenter/VideoAlbumPresenter.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/VideoAlbumPresenter.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoAlbumPresenter_vue_vue_type_template_id_43194746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoAlbumPresenter.vue?vue&type=template&id=43194746& */ "./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=template&id=43194746&");
/* harmony import */ var _VideoAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoAlbumPresenter.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideoAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoAlbumPresenter_vue_vue_type_template_id_43194746___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoAlbumPresenter_vue_vue_type_template_id_43194746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/presenter/VideoAlbumPresenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoAlbumPresenter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAlbumPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=template&id=43194746&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=template&id=43194746& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAlbumPresenter_vue_vue_type_template_id_43194746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoAlbumPresenter.vue?vue&type=template&id=43194746& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoAlbumPresenter.vue?vue&type=template&id=43194746&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAlbumPresenter_vue_vue_type_template_id_43194746___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAlbumPresenter_vue_vue_type_template_id_43194746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/presenter/VideoPresenter.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/presenter/VideoPresenter.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPresenter_vue_vue_type_template_id_9ad5682a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPresenter.vue?vue&type=template&id=9ad5682a&scoped=true& */ "./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=template&id=9ad5682a&scoped=true&");
/* harmony import */ var _VideoPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPresenter.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VideoPresenter_vue_vue_type_style_index_0_id_9ad5682a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css& */ "./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VideoPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoPresenter_vue_vue_type_template_id_9ad5682a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoPresenter_vue_vue_type_template_id_9ad5682a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9ad5682a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/presenter/VideoPresenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPresenter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_style_index_0_id_9ad5682a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=style&index=0&id=9ad5682a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_style_index_0_id_9ad5682a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_style_index_0_id_9ad5682a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_style_index_0_id_9ad5682a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_style_index_0_id_9ad5682a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=template&id=9ad5682a&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=template&id=9ad5682a&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_template_id_9ad5682a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPresenter.vue?vue&type=template&id=9ad5682a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/presenter/VideoPresenter.vue?vue&type=template&id=9ad5682a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_template_id_9ad5682a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPresenter_vue_vue_type_template_id_9ad5682a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile.js":
/*!****************************************!*\
  !*** ./resources/assets/js/profile.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('photo-presenter', __webpack_require__(/*! ./components/presenter/PhotoPresenter.vue */ "./resources/assets/js/components/presenter/PhotoPresenter.vue")["default"]);
Vue.component('video-presenter', __webpack_require__(/*! ./components/presenter/VideoPresenter.vue */ "./resources/assets/js/components/presenter/VideoPresenter.vue")["default"]);
Vue.component('photo-album-presenter', __webpack_require__(/*! ./components/presenter/PhotoAlbumPresenter.vue */ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue")["default"]);
Vue.component('video-album-presenter', __webpack_require__(/*! ./components/presenter/VideoAlbumPresenter.vue */ "./resources/assets/js/components/presenter/VideoAlbumPresenter.vue")["default"]);
Vue.component('mixed-album-presenter', __webpack_require__(/*! ./components/presenter/MixedAlbumPresenter.vue */ "./resources/assets/js/components/presenter/MixedAlbumPresenter.vue")["default"]);
Vue.component('post-menu', __webpack_require__(/*! ./components/PostMenu.vue */ "./resources/assets/js/components/PostMenu.vue")["default"]);
Vue.component('profile', __webpack_require__(/*! ./components/Profile.vue */ "./resources/assets/js/components/Profile.vue")["default"]);

/***/ }),

/***/ 4:
/*!**********************************************!*\
  !*** multi ./resources/assets/js/profile.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kaimann/Docker/girlsinnovationclub/pixelfed/resources/assets/js/profile.js */"./resources/assets/js/profile.js");


/***/ })

},[[4,"/js/manifest"]]]);