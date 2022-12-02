(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/rempro"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/RemoteProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/RemoteProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_StatusCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/StatusCard.vue */ "./resources/assets/js/components/partials/StatusCard.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['profile-id'],
  components: {
    StatusCard: _partials_StatusCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      id: [],
      ids: [],
      user: false,
      profile: {},
      feed: [],
      min_id: null,
      max_id: null,
      loading: true,
      owner: false,
      layoutType: true,
      relationship: null,
      warning: false,
      ctxMenuStatus: false,
      ctxMenuRelationship: false,
      fetchingRemotePosts: false,
      showMutualFollowers: false,
      loadingMore: false,
      showLoadMore: true,
      followers: [],
      followerCursor: 1,
      followerMore: true,
      followerLoading: true,
      following: [],
      followingCursor: 1,
      followingMore: true,
      followingLoading: true,
      followingModalSearch: null,
      followingModalSearchCache: null,
      followingModalTab: 'following'
    };
  },
  beforeMount: function beforeMount() {
    this.fetchRelationships();
    this.fetchProfile();
  },
  updated: function updated() {
    document.querySelectorAll('.hashtag').forEach(function (i, e) {
      i.href = App.util.format.rewriteLinks(i);
    });
  },
  methods: {
    fetchProfile: function fetchProfile() {
      var _this = this;

      axios.get('/api/pixelfed/v1/accounts/verify_credentials').then(function (res) {
        _this.user = res.data;
        window._sharedData.curUser = res.data;
        window.App.util.navatar();
      });
      axios.get('/api/pixelfed/v1/accounts/' + this.profileId).then(function (res) {
        _this.profile = res.data;

        _this.fetchPosts();
      });
    },
    fetchPosts: function fetchPosts() {
      var _this2 = this;

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
        _this2.ids = ids;
        _this2.min_id = Math.max.apply(Math, _toConsumableArray(ids));
        _this2.max_id = Math.min.apply(Math, _toConsumableArray(ids));
        _this2.feed = data;
        _this2.loading = false; //this.loadSponsor();
      })["catch"](function (err) {
        swal('Oops, something went wrong', 'Please release the page.', 'error');
      });
    },
    loadMorePosts: function loadMorePosts() {
      var _this3 = this;

      this.loadingMore = true;
      var apiUrl = '/api/pixelfed/v1/accounts/' + this.profileId + '/statuses';
      axios.get(apiUrl, {
        params: {
          only_media: true,
          max_id: this.max_id
        }
      }).then(function (res) {
        var _this3$ids, _this3$feed;

        var data = res.data.filter(function (status) {
          return _this3.ids.indexOf(status.id) === -1;
        }).filter(function (status) {
          return status.media_attachments.length > 0;
        }).map(function (status) {
          return {
            id: status.id,
            caption: {
              text: status.content_text,
              html: status.content
            },
            count: {
              likes: status.favourites_count,
              shares: status.reblogs_count,
              comments: status.reply_count
            },
            thumb: status.media_attachments[0].url,
            media: status.media_attachments,
            timestamp: status.created_at,
            type: status.pf_type,
            url: status.url,
            sensitive: status.sensitive,
            cw: status.sensitive,
            spoiler_text: status.spoiler_text
          };
        });
        var ids = data.map(function (status) {
          return status.id;
        });

        (_this3$ids = _this3.ids).push.apply(_this3$ids, _toConsumableArray(ids));

        _this3.max_id = Math.min.apply(Math, _toConsumableArray(ids));

        (_this3$feed = _this3.feed).push.apply(_this3$feed, _toConsumableArray(data));

        _this3.loadingMore = false;
      })["catch"](function (err) {
        _this3.loadingMore = false;
        _this3.showLoadMore = false;
      });
    },
    fetchRelationships: function fetchRelationships() {
      var _this4 = this;

      if (document.querySelectorAll('body')[0].classList.contains('loggedIn') == false) {
        return;
      }

      axios.get('/api/pixelfed/v1/accounts/relationships', {
        params: {
          'id[]': this.profileId
        }
      }).then(function (res) {
        if (res.data.length) {
          _this4.relationship = res.data[0];

          if (res.data[0].blocking == true) {
            _this4.loading = false;
            _this4.warning = true;
          }
        }
      });
    },
    postPreviewUrl: function postPreviewUrl(post) {
      return 'background: url("' + post.thumb + '");background-size:cover';
    },
    timestampFormat: function timestampFormat(timestamp) {
      var ts = new Date(timestamp);
      return ts.toDateString() + ' ' + ts.toLocaleTimeString();
    },
    remoteProfileUrl: function remoteProfileUrl(profile) {
      return '/i/web/profile/_/' + profile.id;
    },
    remotePostUrl: function remotePostUrl(status) {
      return '/i/web/post/_/' + this.profile.id + '/' + status.id;
    },
    followProfile: function followProfile() {
      var _this5 = this;

      axios.post('/i/follow', {
        item: this.profileId
      }).then(function (res) {
        swal('Followed', 'You are now following ' + _this5.profile.username + '!', 'success');
        _this5.relationship.following = true;
      })["catch"](function (err) {
        swal('Oops!', 'Something went wrong, please try again later.', 'error');
      });
    },
    unfollowProfile: function unfollowProfile() {
      var _this6 = this;

      axios.post('/i/follow', {
        item: this.profileId
      }).then(function (res) {
        swal('Unfollowed', 'You are no longer following ' + _this6.profile.username + '.', 'warning');
        _this6.relationship.following = false;
      })["catch"](function (err) {
        swal('Oops!', 'Something went wrong, please try again later.', 'error');
      });
    },
    showCtxMenu: function showCtxMenu() {
      this.$refs.visitorContextMenu.show();
    },
    copyProfileLink: function copyProfileLink() {
      navigator.clipboard.writeText(window.location.href);
      this.$refs.visitorContextMenu.hide();
    },
    muteProfile: function muteProfile() {
      var _this7 = this;

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
      this.$refs.visitorContextMenu.hide();
    },
    unmuteProfile: function unmuteProfile() {
      var _this8 = this;

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
      this.$refs.visitorContextMenu.hide();
    },
    blockProfile: function blockProfile() {
      var _this9 = this;

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
      this.$refs.visitorContextMenu.hide();
    },
    unblockProfile: function unblockProfile() {
      var _this10 = this;

      var id = this.profileId;
      axios.post('/i/unblock', {
        type: 'user',
        item: id
      }).then(function (res) {
        _this10.warning = false;

        _this10.fetchRelationships();

        _this10.$refs.visitorContextMenu.hide();

        swal('Success', 'You have successfully unblocked ' + _this10.profile.acct, 'success');
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
      this.$refs.visitorContextMenu.hide();
    },
    reportProfile: function reportProfile() {
      window.location.href = '/l/i/report?type=profile&id=' + this.profileId;
      this.$refs.visitorContextMenu.hide();
    },
    ctxMenu: function ctxMenu(status) {
      this.ctxMenuStatus = status;
      var self = this;
      axios.get('/api/pixelfed/v1/accounts/relationships', {
        params: {
          'id[]': self.profileId
        }
      }).then(function (res) {
        self.ctxMenuRelationship = res.data[0];
        self.$refs.ctxModal.show();
      });
    },
    closeCtxMenu: function closeCtxMenu() {
      this.ctxMenuStatus = false;
      this.ctxMenuRelationship = false;
      this.$refs.ctxModal.hide();
    },
    ctxMenuCopyLink: function ctxMenuCopyLink() {
      var status = this.ctxMenuStatus;
      navigator.clipboard.writeText(status.url);
      this.closeCtxMenu();
      return;
    },
    ctxMenuGoToPost: function ctxMenuGoToPost() {
      var status = this.ctxMenuStatus;
      window.location.href = this.statusUrl(status);
      this.closeCtxMenu();
      return;
    },
    statusUrl: function statusUrl(status) {
      return '/i/web/post/_/' + this.profile.id + '/' + status.id;
    },
    deletePost: function deletePost(status) {
      var _this11 = this;

      if (this.user.is_admin == false) {
        return;
      }

      if (window.confirm('Are you sure you want to delete this post?') == false) {
        return;
      }

      axios.post('/i/delete', {
        type: 'status',
        item: status.id
      }).then(function (res) {
        _this11.feed = _this11.feed.filter(function (s) {
          return s.id != status.id;
        });

        _this11.$refs.ctxModal.hide();
      })["catch"](function (err) {
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      });
    },
    manuallyFetchRemotePosts: function manuallyFetchRemotePosts($event) {
      this.fetchingRemotePosts = true;
      event.target.blur();
      swal('Fetching Remote Posts', 'Check back in a few minutes!', 'info');
    },
    timeAgo: function timeAgo(ts) {
      var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (ts == null) {
        return 'never';
      }

      suffix = suffix ? ' ' + suffix : '';
      return App.util.format.timeAgo(ts) + suffix;
    },
    urlRedirectHandler: function urlRedirectHandler(url) {
      var p = new URL(url);
      var path = '';

      if (p.hostname == window.location.hostname) {
        path = url;
      } else {
        path = '/i/redirect?url=';
        path += encodeURI(url);
      }

      window.location.href = path;
    },
    followingModal: function followingModal() {
      var _this12 = this;

      if (this.followingCursor > 1) {
        this.$refs.followingModal.show();
        return;
      } else {
        axios.get('/api/pixelfed/v1/accounts/' + this.profileId + '/following', {
          params: {
            page: this.followingCursor
          }
        }).then(function (res) {
          _this12.following = res.data;
          _this12.followingModalSearchCache = res.data;
          _this12.followingCursor++;

          if (res.data.length < 10) {
            _this12.followingMore = false;
          }

          _this12.followingLoading = false;
        });
        this.$refs.followingModal.show();
        return;
      }
    },
    followersModal: function followersModal() {
      var _this13 = this;

      if (this.followerCursor > 1) {
        this.$refs.followerModal.show();
        return;
      } else {
        axios.get('/api/pixelfed/v1/accounts/' + this.profileId + '/followers', {
          params: {
            page: this.followerCursor
          }
        }).then(function (res) {
          var _this13$followers;

          (_this13$followers = _this13.followers).push.apply(_this13$followers, _toConsumableArray(res.data));

          _this13.followerCursor++;

          if (res.data.length < 10) {
            _this13.followerMore = false;
          }

          _this13.followerLoading = false;
        });
        this.$refs.followerModal.show();
        return;
      }
    },
    followingLoadMore: function followingLoadMore() {
      var _this14 = this;

      axios.get('/api/pixelfed/v1/accounts/' + this.profile.id + '/following', {
        params: {
          page: this.followingCursor,
          fbu: this.followingModalSearch
        }
      }).then(function (res) {
        if (res.data.length > 0) {
          var _this14$following;

          (_this14$following = _this14.following).push.apply(_this14$following, _toConsumableArray(res.data));

          _this14.followingCursor++;
          _this14.followingModalSearchCache = _this14.following;
        }

        if (res.data.length < 10) {
          _this14.followingModalSearchCache = _this14.following;
          _this14.followingMore = false;
        }
      });
    },
    followersLoadMore: function followersLoadMore() {
      var _this15 = this;

      axios.get('/api/pixelfed/v1/accounts/' + this.profile.id + '/followers', {
        params: {
          page: this.followerCursor
        }
      }).then(function (res) {
        if (res.data.length > 0) {
          var _this15$followers;

          (_this15$followers = _this15.followers).push.apply(_this15$followers, _toConsumableArray(res.data));

          _this15.followerCursor++;
        }

        if (res.data.length < 10) {
          _this15.followerMore = false;
        }
      });
    },
    profileUrlRedirect: function profileUrlRedirect(profile) {
      if (profile.local == true) {
        return profile.url;
      }

      return '/i/web/profile/_/' + profile.id;
    },
    followingModalSearchHandler: function followingModalSearchHandler() {
      var _this16 = this;

      var self = this;
      var q = this.followingModalSearch;

      if (q.length == 0) {
        this.following = this.followingModalSearchCache;
        this.followingModalSearch = null;
      }

      if (q.length > 0) {
        var url = '/api/pixelfed/v1/accounts/' + self.profileId + '/following?page=1&fbu=' + q;
        axios.get(url).then(function (res) {
          _this16.following = res.data;
        })["catch"](function (err) {
          self.following = self.followingModalSearchCache;
          self.followingModalSearch = null;
        });
      }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 1200px) {\n.container[data-v-6095ac5c] {\n\t\tmax-width: 1050px;\n}\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/RemoteProfile.vue?vue&type=template&id=6095ac5c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/RemoteProfile.vue?vue&type=template&id=6095ac5c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      ? _c(
          "div",
          { staticClass: "container" },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-md-4 pt-5" }, [
                _c("div", { staticClass: "card shadow-none border" }, [
                  _c("div", { staticClass: "card-header p-0 m-0" }, [
                    _vm.profile.header_bg
                      ? _c("img", {
                          staticStyle: {
                            width: "100%",
                            height: "140px",
                            "object-fit": "cover"
                          },
                          attrs: { src: _vm.profile.header_bg }
                        })
                      : _c("div", {
                          staticClass: "bg-primary",
                          staticStyle: { width: "100%", height: "140px" }
                        })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body pb-0" }, [
                    _c("div", { staticClass: "mt-n5 mb-3" }, [
                      _c("img", {
                        staticClass:
                          "rounded-circle p-1 border mt-n4 bg-white shadow",
                        attrs: {
                          src: _vm.profile.avatar,
                          width: "90px",
                          height: "90px;"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "float-right mt-n1" }, [
                        _c("span", [
                          _vm.relationship &&
                          _vm.relationship.following == false
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-light py-0 px-3 mt-n1",
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-weight": "500"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.followProfile()
                                    }
                                  }
                                },
                                [_vm._v("Follow")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.relationship && _vm.relationship.following == true
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-light py-0 px-3 mt-n1",
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-weight": "500"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.unfollowProfile()
                                    }
                                  }
                                },
                                [_vm._v("Unfollow")]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "mx-2" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-outline-light btn-sm mt-n1",
                              staticStyle: {
                                "padding-top": "2px",
                                "padding-bottom": "1px"
                              },
                              attrs: {
                                href: "/account/direct/t/" + _vm.profile.id
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "far fa-comment-dots cursor-pointer",
                                staticStyle: { "font-size": "13px" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-light btn-sm mt-n1",
                              staticStyle: {
                                "padding-top": "2px",
                                "padding-bottom": "1px"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.showCtxMenu()
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-cog cursor-pointer",
                                staticStyle: { "font-size": "13px" }
                              })
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pl-2 h4 font-weight-bold mb-1" }, [
                      _vm._v(_vm._s(_vm.profile.display_name))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pl-2 font-weight-bold mb-2" }, [
                      _c(
                        "a",
                        {
                          staticClass: "text-muted",
                          attrs: { href: _vm.profile.url },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.urlRedirectHandler(_vm.profile.url)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.profile.acct))]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "pl-2 text-muted small d-flex justify-content-between"
                      },
                      [
                        _c("span", [
                          _c(
                            "span",
                            { staticClass: "font-weight-bold text-dark" },
                            [_vm._v(_vm._s(_vm.profile.statuses_count))]
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v("Posts")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "cursor-pointer",
                            on: {
                              click: function($event) {
                                return _vm.followingModal()
                              }
                            }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "font-weight-bold text-dark" },
                              [_vm._v(_vm._s(_vm.profile.following_count))]
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Following")])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "cursor-pointer",
                            on: {
                              click: function($event) {
                                return _vm.followersModal()
                              }
                            }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "font-weight-bold text-dark" },
                              [_vm._v(_vm._s(_vm.profile.followers_count))]
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Followers")])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", {
                      staticClass: "pl-2 text-muted small pt-2",
                      domProps: { innerHTML: _vm._s(_vm.profile.note) }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "small text-lighter p-2" }, [
                  _vm._v("Last updated: "),
                  _c(
                    "time",
                    { attrs: { datetime: _vm.profile.last_fetched_at } },
                    [
                      _vm._v(
                        _vm._s(_vm.timeAgo(_vm.profile.last_fetched_at, "ago"))
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "card border-left-primary card-body small py-2 text-muted font-weight-bold shadow-none border-top border-bottom border-right"
                  },
                  [
                    _vm._v(
                      "You are viewing a profile from a remote server, it may not contain up-to-date information."
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-8 pt-5" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _vm._l(_vm.feed, function(status, index) {
                      return _c(
                        "div",
                        { key: "remprop" + index, staticClass: "col-12" },
                        [
                          _c("status-card", {
                            class: { "border-top": index === 0 },
                            attrs: { status: status }
                          })
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _vm.feed.length == 0
                      ? _c("div", { staticClass: "col-12 mb-2" }, [_vm._m(0)])
                      : _c("div", { staticClass: "col-12 mt-4" }, [
                          _vm.showLoadMore
                            ? _c(
                                "p",
                                { staticClass: "text-center mb-0 px-0" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-block font-weight-bold",
                                      on: {
                                        click: function($event) {
                                          return _vm.loadMorePosts()
                                        }
                                      }
                                    },
                                    [
                                      !_vm.loadingMore
                                        ? _c("span", [_vm._v("Load More")])
                                        : _c("span", [_vm._m(1)])
                                    ]
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                  ],
                  2
                )
              ])
            ]),
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
                                        _c(
                                          "span",
                                          { staticClass: "text-dark" },
                                          [_vm._v(_vm._s(_vm.profileUsername))]
                                        ),
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
                                                      value:
                                                        _vm.followingModalSearch,
                                                      expression:
                                                        "followingModalSearch"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "form-control border-0 shadow-0 no-focus",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder:
                                                      "Search Following..."
                                                  },
                                                  domProps: {
                                                    value:
                                                      _vm.followingModalSearch
                                                  },
                                                  on: {
                                                    keyup:
                                                      _vm.followingModalSearchHandler,
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
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
                                    _vm._l(_vm.following, function(
                                      user,
                                      index
                                    ) {
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
                                                  href: _vm.profileUrlRedirect(
                                                    user
                                                  )
                                                }
                                              },
                                              [
                                                _c("img", {
                                                  staticClass:
                                                    "mr-3 rounded-circle box-shadow",
                                                  attrs: {
                                                    src: user.avatar,
                                                    alt:
                                                      user.username +
                                                      "’s avatar",
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
                                                          "\n\t\t\t\t\t\t\t\t\t\t" +
                                                            _vm._s(
                                                              user.username
                                                            ) +
                                                            "\n\t\t\t\t\t\t\t\t\t"
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
                                                          "data-toggle":
                                                            "dropdown",
                                                          "data-placement":
                                                            "bottom"
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
                                                          "\n\t\t\t\t\t\t\t\t\t" +
                                                            _vm._s(
                                                              user.display_name
                                                                ? user.display_name
                                                                : user.username
                                                            ) +
                                                            "\n\t\t\t\t\t\t\t\t"
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
                                                        click: function(
                                                          $event
                                                        ) {
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
                                          {
                                            staticClass:
                                              "list-group-item border-0"
                                          },
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
                                    _vm.following.length > 0 &&
                                    _vm.followingMore
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
                                    _vm._v(" has no followers yet")
                                  ]
                                )
                              ]
                            )
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
                                                alt:
                                                  user.username + "’s avatar",
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
                                                      "\n\t\t\t\t\t\t\t\t\t\t" +
                                                        _vm._s(user.username) +
                                                        "\n\t\t\t\t\t\t\t\t\t"
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
                                                      "\n\t\t\t\t\t\t\t\t\t" +
                                                        _vm._s(
                                                          user.display_name
                                                            ? user.display_name
                                                            : user.username
                                                        ) +
                                                        "\n\t\t\t\t\t\t\t\t"
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
                                        staticClass:
                                          "list-group-item text-center",
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
                        [_vm._v("\n\t\t\t\t\tCopy Link\n\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _vm.user && !_vm.owner && !_vm.relationship.muting
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "list-group-item cursor-pointer text-center rounded",
                              on: { click: _vm.muteProfile }
                            },
                            [_vm._v("\n\t\t\t\t\tMute\n\t\t\t\t")]
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
                            [_vm._v("\n\t\t\t\t\tUnmute\n\t\t\t\t")]
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
                            [_vm._v("\n\t\t\t\t\tReport User\n\t\t\t\t")]
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
                            [_vm._v("\n\t\t\t\t\tBlock\n\t\t\t\t")]
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
                            [_vm._v("\n\t\t\t\t\tUnblock\n\t\t\t\t")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "list-group-item cursor-pointer text-center rounded text-muted",
                          on: {
                            click: function($event) {
                              return _vm.$refs.visitorContextMenu.hide()
                            }
                          }
                        },
                        [_vm._v("\n\t\t\t\t\tClose\n\t\t\t\t")]
                      )
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
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
                  _vm.ctxMenuStatus && _vm.profile.id != _vm.profile.id
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "list-group-item rounded cursor-pointer font-weight-bold text-danger",
                          on: {
                            click: function($event) {
                              return _vm.ctxMenuReportPost()
                            }
                          }
                        },
                        [_vm._v("Report inappropriate")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.ctxMenuStatus &&
                  _vm.profile.id != _vm.profile.id &&
                  _vm.ctxMenuRelationship &&
                  _vm.ctxMenuRelationship.following
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "list-group-item rounded cursor-pointer font-weight-bold text-danger",
                          on: {
                            click: function($event) {
                              return _vm.ctxMenuUnfollow()
                            }
                          }
                        },
                        [_vm._v("Unfollow")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.ctxMenuStatus &&
                  _vm.profile.id != _vm.profile.id &&
                  _vm.ctxMenuRelationship &&
                  !_vm.ctxMenuRelationship.following
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "list-group-item rounded cursor-pointer font-weight-bold text-primary",
                          on: {
                            click: function($event) {
                              return _vm.ctxMenuFollow()
                            }
                          }
                        },
                        [_vm._v("Follow")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "list-group-item rounded cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.ctxMenuGoToPost()
                        }
                      }
                    },
                    [_vm._v("Go to post")]
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
                  _vm.profile && _vm.profile.is_admin == true
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
                  _vm.ctxMenuStatus &&
                  (_vm.profile.is_admin || _vm.profile.id == _vm.profile.id)
                    ? _c(
                        "div",
                        {
                          staticClass: "list-group-item rounded cursor-pointer",
                          on: {
                            click: function($event) {
                              return _vm.deletePost(_vm.ctxMenuStatus)
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
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "d-flex justify-content-center align-items-center bg-white border rounded",
        staticStyle: { height: "60vh" }
      },
      [
        _c("div", { staticClass: "text-center" }, [
          _c("p", { staticClass: "lead" }, [
            _vm._v("We haven't seen any posts from this account.")
          ])
        ])
      ]
    )
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
                      _c(
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
                      ),
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

/***/ "./resources/assets/js/components/RemoteProfile.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/RemoteProfile.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemoteProfile_vue_vue_type_template_id_6095ac5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoteProfile.vue?vue&type=template&id=6095ac5c&scoped=true& */ "./resources/assets/js/components/RemoteProfile.vue?vue&type=template&id=6095ac5c&scoped=true&");
/* harmony import */ var _RemoteProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoteProfile.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/RemoteProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RemoteProfile_vue_vue_type_style_index_0_id_6095ac5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css& */ "./resources/assets/js/components/RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RemoteProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RemoteProfile_vue_vue_type_template_id_6095ac5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RemoteProfile_vue_vue_type_template_id_6095ac5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6095ac5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/RemoteProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RemoteProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/RemoteProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoteProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/RemoteProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_style_index_0_id_6095ac5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/RemoteProfile.vue?vue&type=style&index=0&id=6095ac5c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_style_index_0_id_6095ac5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_style_index_0_id_6095ac5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_style_index_0_id_6095ac5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_style_index_0_id_6095ac5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/RemoteProfile.vue?vue&type=template&id=6095ac5c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/RemoteProfile.vue?vue&type=template&id=6095ac5c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_template_id_6095ac5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoteProfile.vue?vue&type=template&id=6095ac5c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/RemoteProfile.vue?vue&type=template&id=6095ac5c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_template_id_6095ac5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoteProfile_vue_vue_type_template_id_6095ac5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/rempro.js":
/*!***************************************!*\
  !*** ./resources/assets/js/rempro.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('photo-presenter', __webpack_require__(/*! ./components/presenter/PhotoPresenter.vue */ "./resources/assets/js/components/presenter/PhotoPresenter.vue")["default"]);
Vue.component('video-presenter', __webpack_require__(/*! ./components/presenter/VideoPresenter.vue */ "./resources/assets/js/components/presenter/VideoPresenter.vue")["default"]);
Vue.component('photo-album-presenter', __webpack_require__(/*! ./components/presenter/PhotoAlbumPresenter.vue */ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue")["default"]);
Vue.component('video-album-presenter', __webpack_require__(/*! ./components/presenter/VideoAlbumPresenter.vue */ "./resources/assets/js/components/presenter/VideoAlbumPresenter.vue")["default"]);
Vue.component('mixed-album-presenter', __webpack_require__(/*! ./components/presenter/MixedAlbumPresenter.vue */ "./resources/assets/js/components/presenter/MixedAlbumPresenter.vue")["default"]);
Vue.component('remote-profile', __webpack_require__(/*! ./components/RemoteProfile.vue */ "./resources/assets/js/components/RemoteProfile.vue")["default"]);

/***/ }),

/***/ 23:
/*!*********************************************!*\
  !*** multi ./resources/assets/js/rempro.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/johnmoe/pixelfed_0_11_1/resources/assets/js/rempro.js */"./resources/assets/js/rempro.js");


/***/ })

},[[23,"/js/manifest"]]]);