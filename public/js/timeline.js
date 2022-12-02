(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/timeline"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      announcements: [],
      announcement: {},
      cursor: 0,
      showNext: true,
      showPrev: false
    };
  },
  mounted: function mounted() {
    this.fetchAnnouncements();
  },
  updated: function updated() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  methods: {
    fetchAnnouncements: function fetchAnnouncements() {
      var self = this;
      var key = 'metro-tips-closed';
      var cached = JSON.parse(window.localStorage.getItem(key));
      axios.get('/api/pixelfed/v1/newsroom/timeline').then(function (res) {
        self.announcements = res.data.filter(function (p) {
          if (cached) {
            return cached.indexOf(p.id) == -1;
          } else {
            return true;
          }
        });
        self.announcement = self.announcements[0];

        if (self.announcements.length == 1) {
          self.showNext = false;
        }
      });
    },
    loadNext: function loadNext() {
      if (!this.showNext) {
        return;
      }

      this.cursor += 1;
      this.announcement = this.announcements[this.cursor];

      if (this.cursor + 1 == this.announcements.length) {
        this.showNext = false;
      }

      if (this.cursor >= 1) {
        this.showPrev = true;
      }
    },
    loadPrev: function loadPrev() {
      if (!this.showPrev) {
        return;
      }

      this.cursor -= 1;
      this.announcement = this.announcements[this.cursor];

      if (this.cursor == 0) {
        this.showPrev = false;
      }

      if (this.cursor < this.announcements.length) {
        this.showNext = true;
      }
    },
    closeNewsroomPost: function closeNewsroomPost(id, index) {
      var key = 'metro-tips-closed';
      var ctx = [];
      var cached = window.localStorage.getItem(key);

      if (cached) {
        ctx = JSON.parse(cached);
      }

      ctx.push(id);
      window.localStorage.setItem(key, JSON.stringify(ctx));
      this.newsroomPosts = this.newsroomPosts.filter(function (res) {
        return res.id !== id;
      });

      if (this.newsroomPosts.length == 0) {
        this.showTips = false;
      } else {
        this.newsroomPost = [this.newsroomPosts[0]];
      }
    },
    close: function close() {
      window.localStorage.setItem('metro-tips', false);
      this.$emit('show-tips', false);
    },
    markAsRead: function markAsRead() {
      var vm = this;
      axios.post('/api/pixelfed/v1/newsroom/markasread', {
        id: this.announcement.id
      }).then(function (res) {
        var cur = vm.cursor;
        vm.announcements.splice(cur, 1);
        vm.announcement = vm.announcements[0];
        vm.cursor = 0;
        vm.showPrev = false;
        vm.showNext = vm.announcements.length > 1;
      })["catch"](function (err) {
        swal('Oops, Something went wrong', 'There was a problem with your request, please try again later.', 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NotificationCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NotificationCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      notifications: {},
      notificationCursor: 2,
      notificationMaxId: 0,
      profile: {
        locked: false
      },
      followRequests: null,
      showRefresh: false,
      attemptedRefresh: false
    };
  },
  mounted: function mounted() {
    var self = this;
    this.fetchNotifications();
    setTimeout(function () {
      self.profile = window._sharedData.curUser;
      self.fetchFollowRequests();
    }, 1500);
  },
  updated: function updated() {},
  methods: _defineProperty({
    fetchNotifications: function fetchNotifications() {
      var _this = this;

      axios.get('/api/pixelfed/v1/notifications?pg=true').then(function (res) {
        var data = res.data.filter(function (n) {
          if (n.type == 'share' && !n.status) {
            return false;
          }

          if (n.type == 'comment' && !n.status) {
            return false;
          }

          if (n.type == 'mention' && !n.status) {
            return false;
          }

          if (n.type == 'favourite' && !n.status) {
            return false;
          }

          if (n.type == 'follow' && !n.account) {
            return false;
          }

          return true;
        });
        var ids = data.map(function (n) {
          return n.id;
        });
        _this.notificationMaxId = Math.min.apply(Math, _toConsumableArray(ids));
        _this.notifications = data;
        _this.loading = false;

        if (data.length == 0 && !_this.attemptedRefresh) {
          _this.showRefresh = true;
        } //this.notificationPoll();

      });
    },
    infiniteNotifications: function infiniteNotifications($state) {
      var _this2 = this;

      if (this.notificationCursor > 5) {
        $state.complete();
        return;
      }

      axios.get('/api/pixelfed/v1/notifications', {
        params: {
          max_id: this.notificationMaxId
        }
      }).then(function (res) {
        if (res.data.length) {
          var _this2$notifications;

          var data = res.data.filter(function (n) {
            if (n.type == 'share' && !n.status) {
              return false;
            }

            if (n.type == 'comment' && !n.status) {
              return false;
            }

            if (n.type == 'mention' && !n.status) {
              return false;
            }

            if (n.type == 'favourite' && !n.status) {
              return false;
            }

            if (n.type == 'follow' && !n.account) {
              return false;
            }

            if (_.find(_this2.notifications, {
              id: n.id
            })) {
              return false;
            }

            return true;
          });
          var ids = data.map(function (n) {
            return n.id;
          });
          _this2.notificationMaxId = Math.min.apply(Math, _toConsumableArray(ids));

          (_this2$notifications = _this2.notifications).push.apply(_this2$notifications, _toConsumableArray(data));

          _this2.notificationCursor++;
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    truncate: function truncate(text) {
      if (text.length <= 15) {
        return text;
      }

      return text.slice(0, 15) + '...';
    },
    timeAgo: function timeAgo(ts) {
      return window.App.util.format.timeAgo(ts);
    },
    mentionUrl: function mentionUrl(status) {
      var username = status.account.username;
      var id = status.id;
      return '/p/' + username + '/' + id;
    },
    notificationPoll: function notificationPoll() {
      var interval = this.notifications.length > 5 ? 15000 : 120000;
      var self = this;
      setInterval(function () {
        axios.get('/api/pixelfed/v1/notifications').then(function (res) {
          var data = res.data.filter(function (n) {
            if (n.type == 'share' || self.notificationMaxId >= n.id) {
              return false;
            }

            return true;
          });

          if (data.length) {
            var _self$notifications;

            var ids = data.map(function (n) {
              return n.id;
            });
            self.notificationMaxId = Math.max.apply(Math, _toConsumableArray(ids));

            (_self$notifications = self.notifications).unshift.apply(_self$notifications, _toConsumableArray(data));

            var beep = new Audio('/static/beep.mp3');
            beep.volume = 0.7;
            beep.play();
            $('.notification-card .far.fa-bell').addClass('fas text-danger').removeClass('far text-muted');
          }
        });
      }, interval);
    },
    refreshNotifications: function refreshNotifications() {
      var self = this;
      axios.get('/api/pixelfed/v1/notifications').then(function (res) {
        var data = res.data.filter(function (n) {
          if (n.type == 'share' || self.notificationMaxId >= n.id) {
            return false;
          }

          return true;
        });

        if (data.length > 0) {
          var ids = data.map(function (n) {
            return n.id;
          });
          var max = Math.max(ids);

          if (max <= self.notificationMaxId) {
            return;
          } else {
            self.notificationMaxId = max;
            self.notifications = data;
            var beep = new Audio('/static/beep.mp3');
            beep.volume = 0.7;
            beep.play();
          }
        }
      });
    },
    fetchFollowRequests: function fetchFollowRequests() {
      var _this3 = this;

      if (window._sharedData.curUser.locked == true) {
        axios.get('/account/follow-requests.json').then(function (res) {
          _this3.followRequests = res.data;
        });
      }
    },
    redirect: function redirect(url) {
      window.location.href = url;
    },
    notificationPreview: function notificationPreview(n) {
      if (!n.status || !n.status.hasOwnProperty('media_attachments') || !n.status.media_attachments.length) {
        return '/storage/no-preview.png';
      }

      return n.status.media_attachments[0].preview_url;
    },
    getProfileUrl: function getProfileUrl(account) {
      if (account.local == true) {
        return account.url;
      }

      return '/i/web/profile/_/' + account.id;
    },
    getPostUrl: function getPostUrl(status) {
      if (!status) {
        return;
      }

      if (!status.hasOwnProperty('local') || status.local == true) {
        return status.url;
      }

      return '/i/web/post/_/' + status.account.id + '/' + status.id;
    }
  }, "refreshNotifications", function refreshNotifications() {
    this.loading = true;
    this.attemptedRefresh = true;
    this.fetchNotifications();
  })
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['list', 'scope'],
  data: function data() {
    return {
      loading: true,
      show: true,
      stories: {}
    };
  },
  mounted: function mounted() {
    this.fetchStories();
  },
  methods: {
    fetchStories: function fetchStories() {
      var _this = this;

      axios.get('/api/web/stories/v1/recent').then(function (res) {
        var data = res.data;

        if (!res.data.length) {
          _this.show = false;
          return;
        }

        _this.stories = res.data;
        _this.loading = false;
      })["catch"](function (err) {
        _this.loading = false;

        _this.$bvToast.toast('Cannot load stories. Please try again later.', {
          title: 'Error',
          variant: 'danger',
          autoHideDelay: 5000
        });

        _this.show = false;
      });
    },
    showStory: function showStory(index) {
      var suffix;

      switch (this.scope) {
        case 'home':
          suffix = '/?t=1';
          break;

        case 'local':
          suffix = '/?t=2';
          break;

        case 'network':
          suffix = '/?t=3';
          break;
      }

      window.location.href = this.stories[index].url + suffix;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Timeline.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Timeline.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_tribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-tribute */ "./node_modules/vue-tribute/dist/vue-tribute.es.js");
/* harmony import */ var _partials_StatusCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/StatusCard.vue */ "./resources/assets/js/components/partials/StatusCard.vue");
/* harmony import */ var _partials_CommentCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/CommentCard.vue */ "./resources/assets/js/components/partials/CommentCard.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['scope', 'layout'],
  components: {
    VueTribute: vue_tribute__WEBPACK_IMPORTED_MODULE_0__["default"],
    StatusCard: _partials_StatusCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CommentCard: _partials_CommentCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      ids: [],
      config: window.App.config,
      page: 2,
      feed: [],
      profile: {},
      min_id: 0,
      max_id: 0,
      suggestions: {},
      loading: true,
      replies: [],
      replyId: null,
      modes: {
        'mod': false,
        'dark': false,
        'notify': true,
        'distractionFree': false
      },
      followers: [],
      followerCursor: 1,
      followerMore: true,
      following: [],
      followingCursor: 1,
      followingMore: true,
      lightboxMedia: false,
      showSuggestions: true,
      showReadMore: true,
      replyStatus: {},
      replyText: '',
      replyNsfw: false,
      emoji: window.App.util.emoji,
      showHashtagPosts: false,
      hashtagPosts: [],
      hashtagPostsName: '',
      copiedEmbed: false,
      showTips: true,
      userStory: false,
      replySending: false,
      morePostsAvailable: false,
      mpCount: 0,
      mpData: false,
      mpInterval: 15000,
      mpEnabled: false,
      mpPoller: null,
      confirmModalTitle: 'Are you sure?',
      confirmModalIdentifer: null,
      confirmModalType: false,
      currentLayout: 'feed',
      pagination: {},
      tributeSettings: {
        collection: [{
          trigger: '@',
          menuShowMinLength: 2,
          values: function values(text, cb) {
            var url = '/api/compose/v0/search/mention';
            axios.get(url, {
              params: {
                q: text
              }
            }).then(function (res) {
              cb(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }, {
          trigger: '#',
          menuShowMinLength: 2,
          values: function values(text, cb) {
            var url = '/api/compose/v0/search/hashtag';
            axios.get(url, {
              params: {
                q: text
              }
            }).then(function (res) {
              cb(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }]
      },
      discover_min_id: 0,
      discover_max_id: 0,
      discover_feed: [],
      recentFeed: false,
      recentFeedMin: null,
      recentFeedMax: null,
      reactionBar: true,
      emptyFeed: false
    };
  },
  beforeMount: function beforeMount() {
    // let avop = window.localStorage.getItem('pf.feed:avop') === 'always';
    // let u = new URLSearchParams(window.location.search);
    // if(u.has('a')) {
    // 	switch(u.get('a')) {
    // 		case 'recent_feed':
    // 			if(this.scope === 'home') {
    // 				this.recentFeed = true;
    // 			}
    // 		break;
    // 		case 'vop':
    // 			this.recentFeed = false;
    // 		break;
    // 	}
    // }
    // this.recentFeed = avop ? false : this.recentFeed;
    this.fetchProfile();
  },
  mounted: function mounted() {
    var _this = this;

    // todo: release after dark mode updates

    /* if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches || $('link[data-stylesheet="dark"]').length != 0) {
    	this.modes.dark = true;
    		let el = document.querySelector('link[data-stylesheet="light"]');
    	el.setAttribute('href', '/css/appdark.css?id=' + Date.now());
    	el.setAttribute('data-stylesheet', 'dark');
    }*/
    if (localStorage.getItem('pf_metro_ui.exp.rec') == 'false') {
      this.showSuggestions = false;
    } else {
      this.showSuggestions = true;
    }

    if (localStorage.getItem('pf_metro_ui.exp.rm') == 'false') {
      this.showReadMore = false;
    } else {
      this.showReadMore = true;
    }

    if (localStorage.getItem('metro-tips') == 'false') {
      this.showTips = false;
    }

    this.$nextTick(function () {
      $('[data-toggle="tooltip"]').tooltip();
      var u = new URLSearchParams(window.location.search);

      if (u.has('a')) {
        switch (u.get('a')) {
          case 'co':
            $('#composeModal').modal('show');
            break;
        }
      }

      _this.fetchTimelineApi();
    });
  },
  updated: function updated() {
    if (this.showReadMore == true) {
      pixelfed.readmore();
    }
  },
  methods: {
    fetchProfile: function fetchProfile() {
      var _this2 = this;

      axios.get('/api/pixelfed/v1/accounts/verify_credentials').then(function (res) {
        _this2.profile = res.data;

        if (_this2.profile.is_admin == true) {
          _this2.modes.mod = true;
        }

        window._sharedData.curUser = res.data;
        window.App.util.navatar(); // this.$nextTick(() => {
        // 	this.hasStory();
        // });
        // this.expRec();
      })["catch"](function (err) {
        swal('Oops, something went wrong', 'Please reload the page.', 'error');
      });
    },
    fetchTimelineApi: function fetchTimelineApi() {
      var _this3 = this;

      var apiUrl = false;

      switch (this.scope) {
        case 'home':
          apiUrl = '/api/pixelfed/v1/timelines/home';
          break;

        case 'local':
          apiUrl = '/api/pixelfed/v1/timelines/public';
          break;

        case 'network':
          apiUrl = '/api/pixelfed/v1/timelines/network';
          break;
      }

      axios.get(apiUrl, {
        params: {
          max_id: this.max_id,
          limit: 12,
          recent_feed: this.recentFeed
        }
      }).then(function (res) {
        var _this3$feed;

        var data = res.data;

        if (!data.length) {
          _this3.loading = false;
          _this3.emptyFeed = true;
          return;
        }

        (_this3$feed = _this3.feed).push.apply(_this3$feed, _toConsumableArray(data));

        var ids = data.map(function (status) {
          return status.id;
        });
        _this3.ids = ids;
        _this3.min_id = Math.max.apply(Math, _toConsumableArray(ids)).toString();
        _this3.max_id = Math.min.apply(Math, _toConsumableArray(ids)).toString();
        _this3.loading = false; // $('.timeline .pagination').removeClass('d-none');
        // if(this.hashtagPosts.length == 0) {
        // 	this.fetchHashtagPosts();
        // }

        _this3.$nextTick(function () {
          _this3.hasStory();
        }); // this.fetchStories();
        // this.rtw();


        setTimeout(function () {
          document.querySelectorAll('.timeline .card-body .comments .comment-body a').forEach(function (i, e) {
            i.href = App.util.format.rewriteLinks(i);
          });
        }, 500); // axios.get('/api/pixelfed/v2/discover/posts/trending', {
        // 	params: {
        // 		range: 'daily'
        // 	}
        // }).then(res => {
        // 	let data = res.data.filter(post => this.ids.indexOf(post.id) === -1);
        // 	this.discover_feed = data;
        // });
      })["catch"](function (err) {
        swal('Oops, something went wrong', 'Please reload the page.', 'error');
      });
    },
    infiniteTimeline: function infiniteTimeline($state) {
      var _this4 = this;

      if (this.loading) {
        $state.complete();
        return;
      }

      if (this.page > 40) {
        this.loading = false;
        $state.complete();
      }

      var apiUrl = false;

      switch (this.scope) {
        case 'home':
          apiUrl = '/api/pixelfed/v1/timelines/home';
          break;

        case 'local':
          apiUrl = '/api/pixelfed/v1/timelines/public';
          break;

        case 'network':
          apiUrl = '/api/pixelfed/v1/timelines/network';
          break;
      }

      axios.get(apiUrl, {
        params: {
          max_id: this.max_id,
          limit: 6,
          recent_feed: this.recentFeed
        }
      }).then(function (res) {
        if (res.data.length && _this4.loading == false) {
          var data = res.data;
          var self = _this4;
          var vids = [];

          if (self.recentFeed && self.ids.indexOf(data[0].id) != -1) {
            _this4.loading = false;
            $state.complete();
            return;
          }

          data.forEach(function (d, index) {
            if (self.ids.indexOf(d.id) == -1) {
              self.feed.push(d);
              self.ids.push(d.id); // vids.push({
              // 	sid: d.id,
              // 	pid: d.account.id
              // });
            }
          });
          _this4.min_id = Math.max.apply(Math, _toConsumableArray(_this4.ids)).toString();
          _this4.max_id = Math.min.apply(Math, _toConsumableArray(_this4.ids)).toString();
          _this4.page += 1;
          $state.loaded();
          _this4.loading = false; // axios.post('/api/status/view', {
          // 	'_v': vids,
          // });
        } else {
          $state.complete();
        }
      })["catch"](function (err) {
        _this4.loading = false;
        $state.complete();
      });
    },
    redirect: function redirect(url) {
      window.location.href = url;
      return;
    },
    expRec: function expRec() {
      var _this5 = this;

      //return;
      if (this.config.ab.rec == false) {
        return;
      }

      axios.get('/api/local/exp/rec').then(function (res) {
        _this5.suggestions = res.data;
      });
    },
    expRecFollow: function expRecFollow(id, index) {
      var _this6 = this;

      return;

      if (this.config.ab.rec == false) {
        return;
      }

      axios.post('/i/follow', {
        item: id
      }).then(function (res) {
        _this6.suggestions.splice(index, 1);
      })["catch"](function (err) {
        if (err.response.data.message) {
          swal('Error', err.response.data.message, 'error');
        }
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
    hideSuggestions: function hideSuggestions() {
      localStorage.setItem('pf_metro_ui.exp.rec', false);
      this.showSuggestions = false;
    },
    emojiReaction: function emojiReaction(status) {
      var em = event.target.innerText;

      if (this.replyText.length == 0) {
        this.replyText = em + ' ';
        $('textarea[name="comment"]').focus();
      } else {
        this.replyText += em + ' ';
        $('textarea[name="comment"]').focus();
      }
    },
    refreshSuggestions: function refreshSuggestions() {
      var _this7 = this;

      return;
      var el = event.target.parentNode;

      if (el.classList.contains('disabled') == true) {
        return;
      }

      axios.get('/api/local/exp/rec', {
        params: {
          refresh: true
        }
      }).then(function (res) {
        _this7.suggestions = res.data;

        if (el.classList) {
          el.classList.add('disabled');
          el.classList.add('text-light');
        } else {
          el.className += ' ' + 'disabled text-light';
        }

        setTimeout(function () {
          el.setAttribute('href', '#');

          if (el.classList) {
            el.classList.remove('disabled');
            el.classList.remove('text-light');
          } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), 'disabled text-light');
          }
        }, 10000);
      });
    },
    fetchHashtagPosts: function fetchHashtagPosts() {
      var _this8 = this;

      axios.get('/api/local/discover/tag/list').then(function (res) {
        var tags = res.data;

        if (tags.length == 0) {
          return;
        }

        var hashtag = tags[Math.floor(Math.random(), tags.length)];
        _this8.hashtagPostsName = hashtag;
        axios.get('/api/v2/discover/tag', {
          params: {
            hashtag: hashtag
          }
        }).then(function (res) {
          if (res.data.tags.length > 3) {
            _this8.showHashtagPosts = true;
            _this8.hashtagPosts = res.data.tags.splice(0, 9);
          }
        });
      });
    },
    commentFocus: function commentFocus(status, $event) {
      if (status.comments_disabled) {
        return;
      } // if(this.status && this.status.id == status.id) {
      //  this.$refs.replyModal.show();
      //  return;
      // }


      this.status = status;
      this.replies = {};
      this.replyStatus = {};
      this.replyText = '';
      this.replyId = status.id;
      this.replyStatus = status; // this.$refs.replyModal.show();

      this.fetchStatusComments(status, '');
      $('nav').hide();
      $('footer').hide();
      $('.mobile-footer-spacer').attr('style', 'display:none !important');
      $('.mobile-footer').attr('style', 'display:none !important');
      this.currentLayout = 'comments';
      window.history.pushState({}, '', this.statusUrl(status));
      return;
    },
    fetchStatusComments: function fetchStatusComments(status, card) {
      var _this9 = this;

      var url = '/api/v2/comments/' + status.account.id + '/status/' + status.id;
      axios.get(url).then(function (response) {
        var self = _this9;
        _this9.replies = _.reverse(response.data.data);
        _this9.pagination = response.data.meta.pagination;

        if (_this9.replies.length > 0) {
          $('.load-more-link').removeClass('d-none');
        }

        $('.postCommentsLoader').addClass('d-none');
        $('.postCommentsContainer').removeClass('d-none'); // setTimeout(function() {
        // 	document.querySelectorAll('.status-comment .postCommentsContainer .comment-body a').forEach(function(i, e) {
        // 		i.href = App.util.format.rewriteLinks(i);
        // 	});
        // }, 500);
      })["catch"](function (error) {
        if (!error.response) {
          $('.postCommentsLoader .lds-ring').attr('style', 'width:100%').addClass('pt-4 font-weight-bold text-muted').text('An error occurred, cannot fetch comments. Please try again later.');
        } else {
          switch (error.response.status) {
            case 401:
              $('.postCommentsLoader .lds-ring').attr('style', 'width:100%').addClass('pt-4 font-weight-bold text-muted').text('Please login to view.');
              break;

            default:
              $('.postCommentsLoader .lds-ring').attr('style', 'width:100%').addClass('pt-4 font-weight-bold text-muted').text('An error occurred, cannot fetch comments. Please try again later.');
              break;
          }
        }
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
    formatCount: function formatCount(count) {
      return App.util.format.count(count);
    },
    hasStory: function hasStory() {
      var _this10 = this;

      axios.get('/api/web/stories/v1/exists/' + this.profile.id).then(function (res) {
        _this10.userStory = res.data;
      });
    },
    // real time watcher
    rtw: function rtw() {
      var _this11 = this;

      this.mpPoller = setInterval(function () {
        var apiUrl = false;
        _this11.mpCount++;

        if (_this11.mpCount > 10) {
          _this11.mpInterval = 30000;
        }

        if (_this11.mpCount > 50) {
          _this11.mpInterval = 5 * 60 * 1000;
        }

        switch (_this11.scope) {
          case 'home':
            apiUrl = '/api/pixelfed/v1/timelines/home';
            break;

          case 'local':
            apiUrl = '/api/pixelfed/v1/timelines/public';
            break;

          case 'network':
            apiUrl = '/api/pixelfed/v1/timelines/network';
            break;
        }

        axios.get(apiUrl, {
          params: {
            max_id: 0,
            limit: 20,
            recent_feed: _this11.recentFeed
          }
        }).then(function (res) {
          var self = _this11;

          var tids = _this11.feed.map(function (status) {
            return status.id;
          });

          var data = res.data.filter(function (d) {
            return d.id > self.min_id && tids.indexOf(d.id) == -1;
          });
          var ids = data.map(function (status) {
            return status.id;
          });
          var max = Math.max.apply(Math, _toConsumableArray(ids)).toString();
          var newer = max > _this11.min_id;

          if (newer) {
            _this11.morePostsAvailable = true;
            _this11.mpData = data;
          }
        });
      }, this.mpInterval);
    },
    syncNewPosts: function syncNewPosts() {
      var _this$feed;

      var self = this;
      var data = this.mpData;
      var ids = data.map(function (s) {
        return s.id;
      });
      this.min_id = Math.max.apply(Math, _toConsumableArray(ids)).toString();
      this.max_id = Math.min.apply(Math, _toConsumableArray(ids)).toString();

      (_this$feed = this.feed).unshift.apply(_this$feed, _toConsumableArray(data));

      this.morePostsAvailable = false;
      this.mpData = null;
    },
    toggleReplies: function toggleReplies(reply) {
      if (reply.thread) {
        reply.thread = false;
      } else {
        if (reply.replies.length > 0) {
          reply.thread = true;
          return;
        }

        var url = '/api/v2/comments/' + reply.account.id + '/status/' + reply.id;
        axios.get(url).then(function (response) {
          reply.replies = _.reverse(response.data.data);
          reply.thread = true;
        });
      }
    },
    replyFocus: function replyFocus(e, index) {
      var prependUsername = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if ($('body').hasClass('loggedIn') == false) {
        this.redirect('/login?next=' + encodeURIComponent(window.location.pathname));
        return;
      }

      if (this.status.comments_disabled) {
        return;
      }

      this.replyToIndex = index;
      this.replyingToId = e.id;
      this.replyingToUsername = e.account.username;
      this.reply_to_profile_id = e.account.id;
      var username = e.account.local ? '@' + e.account.username + ' ' : '@' + e.account.acct + ' ';

      if (prependUsername == true) {
        this.replyText = username;
      }

      this.$refs.replyModal.show();
      setTimeout(function () {
        $('.replyModalTextarea').focus();
      }, 500);
    },
    alwaysViewOlderPosts: function alwaysViewOlderPosts() {
      // Set Feed:Always View Older Posts
      window.localStorage.setItem('pf.feed:avop', 'always');
      window.location.href = '/';
    },
    setCurrentLayout: function setCurrentLayout(layout) {
      this.currentLayout = layout;
    },
    deleteStatus: function deleteStatus(status) {
      this.feed = this.feed.filter(function (s) {
        return s.id != status;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.mpInterval);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/CommentCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/CommentCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'status': {
      type: Object
    },
    'profile': {
      type: Object
    },
    'backToStatus': {
      type: Boolean,
      "default": false
    }
  },
  components: {
    "context-menu": _ContextMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      ids: [],
      config: window.App.config,
      tributeSettings: {
        collection: [{
          trigger: '@',
          menuShowMinLength: 2,
          values: function values(text, cb) {
            var url = '/api/compose/v0/search/mention';
            axios.get(url, {
              params: {
                q: text
              }
            }).then(function (res) {
              cb(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }, {
          trigger: '#',
          menuShowMinLength: 2,
          values: function values(text, cb) {
            var url = '/api/compose/v0/search/hashtag';
            axios.get(url, {
              params: {
                q: text
              }
            }).then(function (res) {
              cb(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }]
      },
      replies: [],
      replyId: null,
      replyText: '',
      replyNsfw: false,
      replySending: false,
      pagination: {},
      ctxMenuStatus: false,
      emoji: window.App.util.emoji
    };
  },
  beforeMount: function beforeMount() {
    this.fetchComments();
  },
  methods: {
    commentNavigateBack: function commentNavigateBack(id) {
      if (this.backToStatus) {
        window.location.href = this.statusUrl(this.status);
        return;
      }

      $('nav').show();
      $('footer').show();
      $('.mobile-footer-spacer').attr('style', 'display:block');
      $('.mobile-footer').attr('style', 'display:block');
      this.$emit('current-layout', 'feed');
      var path = '/';
      window.history.pushState({}, '', path);
    },
    trimCaption: function trimCaption(caption) {
      var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
      return _.truncate(caption, {
        length: len
      });
    },
    replyFocus: function replyFocus(e, index) {
      var prependUsername = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if ($('body').hasClass('loggedIn') == false) {
        this.redirect('/login?next=' + encodeURIComponent(window.location.pathname));
        return;
      }

      if (this.status.comments_disabled) {
        return;
      }

      this.replyToIndex = index;
      this.replyingToId = e.id;
      this.replyingToUsername = e.account.username;
      this.reply_to_profile_id = e.account.id;
      var username = e.account.local ? '@' + e.account.username + ' ' : '@' + e.account.acct + ' ';

      if (prependUsername == true) {
        this.replyText = username;
      }

      this.$refs.replyModal.show();
      setTimeout(function () {
        $('.replyModalTextarea').focus();
      }, 500);
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
    timeAgo: function timeAgo(ts) {
      return App.util.format.timeAgo(ts);
    },
    fetchComments: function fetchComments() {
      var _this2 = this;

      console.log('Fetching comments...');
      var url = '/api/v2/comments/' + this.status.account.id + '/status/' + this.status.id;
      axios.get(url).then(function (res) {
        _this2.replies = res.data.data;
        _this2.pagination = res.data.meta.pagination;
      })["catch"](function (error) {
        if (!error.response) {
          $('.postCommentsLoader .lds-ring').attr('style', 'width:100%').addClass('pt-4 font-weight-bold text-muted').text('An error occurred, cannot fetch comments. Please try again later.');
        } else {
          switch (error.response.status) {
            case 401:
              $('.postCommentsLoader .lds-ring').attr('style', 'width:100%').addClass('pt-4 font-weight-bold text-muted').text('Please login to view.');
              break;

            default:
              $('.postCommentsLoader .lds-ring').attr('style', 'width:100%').addClass('pt-4 font-weight-bold text-muted').text('An error occurred, cannot fetch comments. Please try again later.');
              break;
          }
        }
      });
    },
    loadMoreComments: function loadMoreComments() {
      var _this3 = this;

      if (this.pagination.total_pages == 1 || this.pagination.current_page == this.pagination.total_pages) {
        $('.load-more-link').addClass('d-none');
        return;
      }

      $('.load-more-link').addClass('d-none');
      $('.postCommentsLoader').removeClass('d-none');
      var next = this.pagination.links.next;
      axios.get(next).then(function (response) {
        var self = _this3;
        var res = response.data.data;
        $('.postCommentsLoader').addClass('d-none');

        for (var i = 0; i < res.length; i++) {
          _this3.replies.unshift(res[i]);
        }

        _this3.pagination = response.data.meta.pagination;
        $('.load-more-link').removeClass('d-none');
      });
    },
    likeReply: function likeReply(status, $event) {
      if ($('body').hasClass('loggedIn') == false) {
        swal('Login', 'Please login to perform this action.', 'info');
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
    ctxMenu: function ctxMenu(status) {
      this.ctxMenuStatus = status;
      this.$refs.cMenu.open();
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/sass-loader/dist/cjs.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card[data-v-3ffb4cbe] {\n  height: 122px;\n}\n.ring[data-v-3ffb4cbe] {\n  display: block;\n  width: 66px;\n  height: 66px;\n  border-radius: 50%;\n  padding: 3px;\n  background: radial-gradient(ellipse at 70% 70%, #ee583f 8%, #d92d77 42%, #bd3381 58%);\n}\n.ring.remote[data-v-3ffb4cbe] {\n  background: radial-gradient(ellipse at 70% 70%, #f64f59 8%, #c471ed 42%, #12c2e9 58%);\n}\n.ring.not-seen[data-v-3ffb4cbe] {\n  opacity: 0.55;\n  background: #ccc;\n}\n.ring img[data-v-3ffb4cbe] {\n  background: #fff;\n  padding: 3px;\n}\n.scrolly[data-v-3ffb4cbe] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  overflow-y: scroll;\n}\n.scrolly[data-v-3ffb4cbe]::-webkit-scrollbar {\n  display: none;\n}", ""]);

// exports


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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-043c5615], .fade-leave-active[data-v-043c5615] {\n  transition: opacity .5s;\n}\n.fade-enter[data-v-043c5615], .fade-leave-to[data-v-043c5615] {\n  opacity: 0;\n}\n", ""]);

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.postPresenterContainer[data-v-40ef44f8] {\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: #fff;\n}\n.word-break[data-v-40ef44f8] {\n\tword-break: break-all;\n}\n.small .custom-control-label[data-v-40ef44f8] {\n\tpadding-top: 3px;\n}\n/*.reply-btn {\n\tposition: absolute;\n\tbottom: 30px;\n\tright: 20px;\n\twidth: 60px;\n\ttext-align: center;\n\tfont-size: 13px;\n\tborder-radius: 0 3px 3px 0;\n}*/\n.reply-btn[disabled][data-v-40ef44f8] {\n\topacity: .3;\n\tcolor: #3897f0;\n}\n.replyModalTextarea[data-v-40ef44f8] {\n\tborder: none;\n\tfont-size: 18px;\n\tresize: none;\n\twhite-space: pre-wrap;\n\toutline: none;\n}\n.has-story[data-v-40ef44f8] {\n\twidth: 64px;\n\theight: 64px;\n\tborder-radius: 50%;\n\tpadding: 2px;\n\tbackground: radial-gradient(ellipse at 70% 70%, #ee583f 8%, #d92d77 42%, #bd3381 58%);\n}\n.has-story img[data-v-40ef44f8] {\n\twidth: 60px;\n\theight: 60px;\n\tborder-radius: 50%;\n\tpadding: 3px;\n\tbackground: #fff;\n}\n.has-story.has-story-sm[data-v-40ef44f8] {\n\twidth: 32px;\n\theight: 32px;\n\tborder-radius: 50%;\n\tpadding: 2px;\n\tbackground: radial-gradient(ellipse at 70% 70%, #ee583f 8%, #d92d77 42%, #bd3381 58%);\n}\n.has-story.has-story-sm img[data-v-40ef44f8] {\n\twidth: 28px;\n\theight: 28px;\n\tborder-radius: 50%;\n\tpadding: 3px;\n\tbackground: #fff;\n}\n#ctx-reply-modal .form-control[data-v-40ef44f8]:focus {\n\tborder: none;\n\toutline: 0;\n\tbox-shadow: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.emoji-reactions .nav-item[data-v-4c9a67ee] {\n\tfont-size: 1.2rem;\n\tpadding: 9px;\n\tcursor: pointer;\n}\n.emoji-reactions[data-v-4c9a67ee]::-webkit-scrollbar {\n\twidth: 0px;\n\theight: 0px;\n\tbackground: transparent;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/sass-loader/dist/cjs.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css&");

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

/***/ "./node_modules/tributejs/dist/tribute.min.js":
/*!****************************************************!*\
  !*** ./node_modules/tributejs/dist/tribute.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(i=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}if(Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),i=n.length>>>0,r=arguments[1],o=0;o<i;o++)if(t=n[o],e.call(r,t,o,n))return t}),window&&"function"!=typeof window.CustomEvent){var r=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};void 0!==window.Event&&(r.prototype=window.Event.prototype),window.CustomEvent=r}var o=function(){function t(n){e(this,t),this.tribute=n,this.tribute.events=this}return n(t,[{key:"bind",value:function(e){e.boundKeydown=this.keydown.bind(e,this),e.boundKeyup=this.keyup.bind(e,this),e.boundInput=this.input.bind(e,this),e.addEventListener("keydown",e.boundKeydown,!1),e.addEventListener("keyup",e.boundKeyup,!1),e.addEventListener("input",e.boundInput,!1)}},{key:"unbind",value:function(e){e.removeEventListener("keydown",e.boundKeydown,!1),e.removeEventListener("keyup",e.boundKeyup,!1),e.removeEventListener("input",e.boundInput,!1),delete e.boundKeydown,delete e.boundKeyup,delete e.boundInput}},{key:"keydown",value:function(e,n){e.shouldDeactivate(n)&&(e.tribute.isActive=!1,e.tribute.hideMenu());var i=this;e.commandEvent=!1,t.keys().forEach((function(t){t.key===n.keyCode&&(e.commandEvent=!0,e.callbacks()[t.value.toLowerCase()](n,i))}))}},{key:"input",value:function(e,t){e.inputEvent=!0,e.keyup.call(this,e,t)}},{key:"click",value:function(e,t){var n=e.tribute;if(n.menu&&n.menu.contains(t.target)){var i=t.target;for(t.preventDefault(),t.stopPropagation();"li"!==i.nodeName.toLowerCase();)if(!(i=i.parentNode)||i===n.menu)throw new Error("cannot find the <li> container for the click");n.selectItemAtIndex(i.getAttribute("data-index"),t),n.hideMenu()}else n.current.element&&!n.current.externalTrigger&&(n.current.externalTrigger=!1,setTimeout((function(){return n.hideMenu()})))}},{key:"keyup",value:function(e,t){if(e.inputEvent&&(e.inputEvent=!1),e.updateSelection(this),27!==t.keyCode){if(!e.tribute.allowSpaces&&e.tribute.hasTrailingSpace)return e.tribute.hasTrailingSpace=!1,e.commandEvent=!0,void e.callbacks().space(t,this);if(!e.tribute.isActive)if(e.tribute.autocompleteMode)e.callbacks().triggerChar(t,this,"");else{var n=e.getKeyCode(e,this,t);if(isNaN(n)||!n)return;var i=e.tribute.triggers().find((function(e){return e.charCodeAt(0)===n}));void 0!==i&&e.callbacks().triggerChar(t,this,i)}e.tribute.current.mentionText.length<e.tribute.current.collection.menuShowMinLength||((e.tribute.current.trigger||e.tribute.autocompleteMode)&&!1===e.commandEvent||e.tribute.isActive&&8===t.keyCode)&&e.tribute.showMenuFor(this,!0)}}},{key:"shouldDeactivate",value:function(e){if(!this.tribute.isActive)return!1;if(0===this.tribute.current.mentionText.length){var n=!1;return t.keys().forEach((function(t){e.keyCode===t.key&&(n=!0)})),!n}return!1}},{key:"getKeyCode",value:function(e,t,n){var i=e.tribute,r=i.range.getTriggerInfo(!1,i.hasTrailingSpace,!0,i.allowSpaces,i.autocompleteMode);return!!r&&r.mentionTriggerChar.charCodeAt(0)}},{key:"updateSelection",value:function(e){this.tribute.current.element=e;var t=this.tribute.range.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);t&&(this.tribute.current.selectedPath=t.mentionSelectedPath,this.tribute.current.mentionText=t.mentionText,this.tribute.current.selectedOffset=t.mentionSelectedOffset)}},{key:"callbacks",value:function(){var e=this;return{triggerChar:function(t,n,i){var r=e.tribute;r.current.trigger=i;var o=r.collection.find((function(e){return e.trigger===i}));r.current.collection=o,r.current.mentionText.length>=r.current.collection.menuShowMinLength&&r.inputEvent&&r.showMenuFor(n,!0)},enter:function(t,n){e.tribute.isActive&&e.tribute.current.filteredItems&&(t.preventDefault(),t.stopPropagation(),setTimeout((function(){e.tribute.selectItemAtIndex(e.tribute.menuSelected,t),e.tribute.hideMenu()}),0))},escape:function(t,n){e.tribute.isActive&&(t.preventDefault(),t.stopPropagation(),e.tribute.isActive=!1,e.tribute.hideMenu())},tab:function(t,n){e.callbacks().enter(t,n)},space:function(t,n){e.tribute.isActive&&(e.tribute.spaceSelectsMatch?e.callbacks().enter(t,n):e.tribute.allowSpaces||(t.stopPropagation(),setTimeout((function(){e.tribute.hideMenu(),e.tribute.isActive=!1}),0)))},up:function(t,n){if(e.tribute.isActive&&e.tribute.current.filteredItems){t.preventDefault(),t.stopPropagation();var i=e.tribute.current.filteredItems.length,r=e.tribute.menuSelected;i>r&&r>0?(e.tribute.menuSelected--,e.setActiveLi()):0===r&&(e.tribute.menuSelected=i-1,e.setActiveLi(),e.tribute.menu.scrollTop=e.tribute.menu.scrollHeight)}},down:function(t,n){if(e.tribute.isActive&&e.tribute.current.filteredItems){t.preventDefault(),t.stopPropagation();var i=e.tribute.current.filteredItems.length-1,r=e.tribute.menuSelected;i>r?(e.tribute.menuSelected++,e.setActiveLi()):i===r&&(e.tribute.menuSelected=0,e.setActiveLi(),e.tribute.menu.scrollTop=0)}},delete:function(t,n){e.tribute.isActive&&e.tribute.current.mentionText.length<1?e.tribute.hideMenu():e.tribute.isActive&&e.tribute.showMenuFor(n)}}}},{key:"setActiveLi",value:function(e){var t=this.tribute.menu.querySelectorAll("li"),n=t.length>>>0;e&&(this.tribute.menuSelected=parseInt(e));for(var i=0;i<n;i++){var r=t[i];if(i===this.tribute.menuSelected){r.classList.add(this.tribute.current.collection.selectClass);var o=r.getBoundingClientRect(),u=this.tribute.menu.getBoundingClientRect();if(o.bottom>u.bottom){var l=o.bottom-u.bottom;this.tribute.menu.scrollTop+=l}else if(o.top<u.top){var s=u.top-o.top;this.tribute.menu.scrollTop-=s}}else r.classList.remove(this.tribute.current.collection.selectClass)}}},{key:"getFullHeight",value:function(e,t){var n=e.getBoundingClientRect().height;if(t){var i=e.currentStyle||window.getComputedStyle(e);return n+parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}}],[{key:"keys",value:function(){return[{key:9,value:"TAB"},{key:8,value:"DELETE"},{key:13,value:"ENTER"},{key:27,value:"ESCAPE"},{key:32,value:"SPACE"},{key:38,value:"UP"},{key:40,value:"DOWN"}]}}]),t}(),u=function(){function t(n){e(this,t),this.tribute=n,this.tribute.menuEvents=this,this.menu=this.tribute.menu}return n(t,[{key:"bind",value:function(e){var t=this;this.menuClickEvent=this.tribute.events.click.bind(null,this),this.menuContainerScrollEvent=this.debounce((function(){t.tribute.isActive&&t.tribute.showMenuFor(t.tribute.current.element,!1)}),300,!1),this.windowResizeEvent=this.debounce((function(){t.tribute.isActive&&t.tribute.range.positionMenuAtCaret(!0)}),300,!1),this.tribute.range.getDocument().addEventListener("MSPointerDown",this.menuClickEvent,!1),this.tribute.range.getDocument().addEventListener("mousedown",this.menuClickEvent,!1),window.addEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.addEventListener("scroll",this.menuContainerScrollEvent,!1):window.addEventListener("scroll",this.menuContainerScrollEvent)}},{key:"unbind",value:function(e){this.tribute.range.getDocument().removeEventListener("mousedown",this.menuClickEvent,!1),this.tribute.range.getDocument().removeEventListener("MSPointerDown",this.menuClickEvent,!1),window.removeEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.removeEventListener("scroll",this.menuContainerScrollEvent,!1):window.removeEventListener("scroll",this.menuContainerScrollEvent)}},{key:"debounce",value:function(e,t,n){var i,r=arguments,o=this;return function(){var u=o,l=r,s=n&&!i;clearTimeout(i),i=setTimeout((function(){i=null,n||e.apply(u,l)}),t),s&&e.apply(u,l)}}}]),t}(),l=function(){function t(n){e(this,t),this.tribute=n,this.tribute.range=this}return n(t,[{key:"getDocument",value:function(){var e;return this.tribute.current.collection&&(e=this.tribute.current.collection.iframe),e?e.contentWindow.document:document}},{key:"positionMenuAtCaret",value:function(e){var t,n=this,i=this.tribute.current,r=this.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);if(void 0!==r){if(!this.tribute.positionMenu)return void(this.tribute.menu.style.cssText="display: block;");t=this.isContentEditable(i.element)?this.getContentEditableCaretPosition(r.mentionPosition):this.getTextAreaOrInputUnderlinePosition(this.tribute.current.element,r.mentionPosition),this.tribute.menu.style.cssText="top: ".concat(t.top,"px;\n                                     left: ").concat(t.left,"px;\n                                     right: ").concat(t.right,"px;\n                                     bottom: ").concat(t.bottom,"px;\n                                     position: absolute;\n                                     display: block;"),"auto"===t.left&&(this.tribute.menu.style.left="auto"),"auto"===t.top&&(this.tribute.menu.style.top="auto"),e&&this.scrollIntoView(),window.setTimeout((function(){var i={width:n.tribute.menu.offsetWidth,height:n.tribute.menu.offsetHeight},r=n.isMenuOffScreen(t,i),o=window.innerWidth>i.width&&(r.left||r.right),u=window.innerHeight>i.height&&(r.top||r.bottom);(o||u)&&(n.tribute.menu.style.cssText="display: none",n.positionMenuAtCaret(e))}),0)}else this.tribute.menu.style.cssText="display: none"}},{key:"selectElement",value:function(e,t,n){var i,r=e;if(t)for(var o=0;o<t.length;o++){if(void 0===(r=r.childNodes[t[o]]))return;for(;r.length<n;)n-=r.length,r=r.nextSibling;0!==r.childNodes.length||r.length||(r=r.previousSibling)}var u=this.getWindowSelection();(i=this.getDocument().createRange()).setStart(r,n),i.setEnd(r,n),i.collapse(!0);try{u.removeAllRanges()}catch(e){}u.addRange(i),e.focus()}},{key:"replaceTriggerText",value:function(e,t,n,i,r){var o=this.getTriggerInfo(!0,n,t,this.tribute.allowSpaces,this.tribute.autocompleteMode);if(void 0!==o){var u=this.tribute.current,l=new CustomEvent("tribute-replaced",{detail:{item:r,instance:u,context:o,event:i}});if(this.isContentEditable(u.element)){e+="string"==typeof this.tribute.replaceTextSuffix?this.tribute.replaceTextSuffix:" ";var s=o.mentionPosition+o.mentionText.length;this.tribute.autocompleteMode||(s+=o.mentionTriggerChar.length),this.pasteHtml(e,o.mentionPosition,s)}else{var a=this.tribute.current.element,c="string"==typeof this.tribute.replaceTextSuffix?this.tribute.replaceTextSuffix:" ";e+=c;var h=o.mentionPosition,d=o.mentionPosition+o.mentionText.length+c.length;this.tribute.autocompleteMode||(d+=o.mentionTriggerChar.length-1),a.value=a.value.substring(0,h)+e+a.value.substring(d,a.value.length),a.selectionStart=h+e.length,a.selectionEnd=h+e.length}u.element.dispatchEvent(new CustomEvent("input",{bubbles:!0})),u.element.dispatchEvent(l)}}},{key:"pasteHtml",value:function(e,t,n){var i,r;r=this.getWindowSelection(),(i=this.getDocument().createRange()).setStart(r.anchorNode,t),i.setEnd(r.anchorNode,n),i.deleteContents();var o=this.getDocument().createElement("div");o.innerHTML=e;for(var u,l,s=this.getDocument().createDocumentFragment();u=o.firstChild;)l=s.appendChild(u);i.insertNode(s),l&&((i=i.cloneRange()).setStartAfter(l),i.collapse(!0),r.removeAllRanges(),r.addRange(i))}},{key:"getWindowSelection",value:function(){return this.tribute.collection.iframe?this.tribute.collection.iframe.contentWindow.getSelection():window.getSelection()}},{key:"getNodePositionInParent",value:function(e){if(null===e.parentNode)return 0;for(var t=0;t<e.parentNode.childNodes.length;t++){if(e.parentNode.childNodes[t]===e)return t}}},{key:"getContentEditableSelectedPath",value:function(e){var t=this.getWindowSelection(),n=t.anchorNode,i=[];if(null!=n){for(var r,o=n.contentEditable;null!==n&&"true"!==o;)r=this.getNodePositionInParent(n),i.push(r),null!==(n=n.parentNode)&&(o=n.contentEditable);return i.reverse(),{selected:n,path:i,offset:t.getRangeAt(0).startOffset}}}},{key:"getTextPrecedingCurrentSelection",value:function(){var e=this.tribute.current,t="";if(this.isContentEditable(e.element)){var n=this.getWindowSelection().anchorNode;if(null!=n){var i=n.textContent,r=this.getWindowSelection().getRangeAt(0).startOffset;i&&r>=0&&(t=i.substring(0,r))}}else{var o=this.tribute.current.element;if(o){var u=o.selectionStart;o.value&&u>=0&&(t=o.value.substring(0,u))}}return t}},{key:"getLastWordInText",value:function(e){var t=(e=e.replace(/\u00A0/g," ")).split(/\s+/);return t[t.length-1].trim()}},{key:"getTriggerInfo",value:function(e,t,n,i,r){var o,u,l,s=this,a=this.tribute.current;if(this.isContentEditable(a.element)){var c=this.getContentEditableSelectedPath(a);c&&(o=c.selected,u=c.path,l=c.offset)}else o=this.tribute.current.element;var h=this.getTextPrecedingCurrentSelection(),d=this.getLastWordInText(h);if(r)return{mentionPosition:h.length-d.length,mentionText:d,mentionSelectedElement:o,mentionSelectedPath:u,mentionSelectedOffset:l};if(null!=h){var f,m=-1;if(this.tribute.collection.forEach((function(e){var t=e.trigger,i=e.requireLeadingSpace?s.lastIndexWithLeadingSpace(h,t):h.lastIndexOf(t);i>m&&(m=i,f=t,n=e.requireLeadingSpace)})),m>=0&&(0===m||!n||/[\xA0\s]/g.test(h.substring(m-1,m)))){var p=h.substring(m+f.length,h.length);f=h.substring(m,m+f.length);var v=p.substring(0,1),g=p.length>0&&(" "===v||" "===v);t&&(p=p.trim());var b=i?/[^\S ]/g:/[\xA0\s]/g;if(this.tribute.hasTrailingSpace=b.test(p),!g&&(e||!b.test(p)))return{mentionPosition:m,mentionText:p,mentionSelectedElement:o,mentionSelectedPath:u,mentionSelectedOffset:l,mentionTriggerChar:f}}}}},{key:"lastIndexWithLeadingSpace",value:function(e,t){for(var n=e.split("").reverse().join(""),i=-1,r=0,o=e.length;r<o;r++){for(var u=r===e.length-1,l=/\s/.test(n[r+1]),s=!0,a=t.length-1;a>=0;a--)if(t[a]!==n[r-a]){s=!1;break}if(s&&(u||l)){i=e.length-1-r;break}}return i}},{key:"isContentEditable",value:function(e){return"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName}},{key:"isMenuOffScreen",value:function(e,t){var n=window.innerWidth,i=window.innerHeight,r=document.documentElement,o=(window.pageXOffset||r.scrollLeft)-(r.clientLeft||0),u=(window.pageYOffset||r.scrollTop)-(r.clientTop||0),l="number"==typeof e.top?e.top:u+i-e.bottom-t.height,s="number"==typeof e.right?e.right:e.left+t.width,a="number"==typeof e.bottom?e.bottom:e.top+t.height,c="number"==typeof e.left?e.left:o+n-e.right-t.width;return{top:l<Math.floor(u),right:s>Math.ceil(o+n),bottom:a>Math.ceil(u+i),left:c<Math.floor(o)}}},{key:"getMenuDimensions",value:function(){var e={width:null,height:null};return this.tribute.menu.style.cssText="top: 0px;\n                                 left: 0px;\n                                 position: fixed;\n                                 display: block;\n                                 visibility; hidden;",e.width=this.tribute.menu.offsetWidth,e.height=this.tribute.menu.offsetHeight,this.tribute.menu.style.cssText="display: none;",e}},{key:"getTextAreaOrInputUnderlinePosition",value:function(e,t,n){var i=null!==window.mozInnerScreenX,r=this.getDocument().createElement("div");r.id="input-textarea-caret-position-mirror-div",this.getDocument().body.appendChild(r);var o=r.style,u=window.getComputedStyle?getComputedStyle(e):e.currentStyle;o.whiteSpace="pre-wrap","INPUT"!==e.nodeName&&(o.wordWrap="break-word"),o.position="absolute",o.visibility="hidden",["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing"].forEach((function(e){o[e]=u[e]})),i?(o.width="".concat(parseInt(u.width)-2,"px"),e.scrollHeight>parseInt(u.height)&&(o.overflowY="scroll")):o.overflow="hidden",r.textContent=e.value.substring(0,t),"INPUT"===e.nodeName&&(r.textContent=r.textContent.replace(/\s/g," "));var l=this.getDocument().createElement("span");l.textContent=e.value.substring(t)||".",r.appendChild(l);var s=e.getBoundingClientRect(),a=document.documentElement,c=(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0),h=(window.pageYOffset||a.scrollTop)-(a.clientTop||0),d=0,f=0;this.menuContainerIsBody&&(d=s.top,f=s.left);var m={top:d+h+l.offsetTop+parseInt(u.borderTopWidth)+parseInt(u.fontSize)-e.scrollTop,left:f+c+l.offsetLeft+parseInt(u.borderLeftWidth)},p=window.innerWidth,v=window.innerHeight,g=this.getMenuDimensions(),b=this.isMenuOffScreen(m,g);b.right&&(m.right=p-m.left,m.left="auto");var y=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(b.bottom){var w=y-(v-(this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect()).top);m.bottom=w+(v-s.top-l.offsetTop),m.top="auto"}return(b=this.isMenuOffScreen(m,g)).left&&(m.left=p>g.width?c+p-g.width:c,delete m.right),b.top&&(m.top=v>g.height?h+v-g.height:h,delete m.bottom),this.getDocument().body.removeChild(r),m}},{key:"getContentEditableCaretPosition",value:function(e){var t,n=this.getWindowSelection();(t=this.getDocument().createRange()).setStart(n.anchorNode,e),t.setEnd(n.anchorNode,e),t.collapse(!1);var i=t.getBoundingClientRect(),r=document.documentElement,o=(window.pageXOffset||r.scrollLeft)-(r.clientLeft||0),u=(window.pageYOffset||r.scrollTop)-(r.clientTop||0),l={left:i.left+o,top:i.top+i.height+u},s=window.innerWidth,a=window.innerHeight,c=this.getMenuDimensions(),h=this.isMenuOffScreen(l,c);h.right&&(l.left="auto",l.right=s-i.left-o);var d=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(h.bottom){var f=d-(a-(this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect()).top);l.top="auto",l.bottom=f+(a-i.top)}return(h=this.isMenuOffScreen(l,c)).left&&(l.left=s>c.width?o+s-c.width:o,delete l.right),h.top&&(l.top=a>c.height?u+a-c.height:u,delete l.bottom),this.menuContainerIsBody||(l.left=l.left?l.left-this.tribute.menuContainer.offsetLeft:l.left,l.top=l.top?l.top-this.tribute.menuContainer.offsetTop:l.top),l}},{key:"scrollIntoView",value:function(e){var t,n=this.menu;if(void 0!==n){for(;void 0===t||0===t.height;)if(0===(t=n.getBoundingClientRect()).height&&(void 0===(n=n.childNodes[0])||!n.getBoundingClientRect))return;var i=t.top,r=i+t.height;if(i<0)window.scrollTo(0,window.pageYOffset+t.top-20);else if(r>window.innerHeight){var o=window.pageYOffset+t.top-20;o-window.pageYOffset>100&&(o=window.pageYOffset+100);var u=window.pageYOffset-(window.innerHeight-r);u>o&&(u=o),window.scrollTo(0,u)}}}},{key:"menuContainerIsBody",get:function(){return this.tribute.menuContainer===document.body||!this.tribute.menuContainer}}]),t}(),s=function(){function t(n){e(this,t),this.tribute=n,this.tribute.search=this}return n(t,[{key:"simpleFilter",value:function(e,t){var n=this;return t.filter((function(t){return n.test(e,t)}))}},{key:"test",value:function(e,t){return null!==this.match(e,t)}},{key:"match",value:function(e,t,n){n=n||{};t.length;var i=n.pre||"",r=n.post||"",o=n.caseSensitive&&t||t.toLowerCase();if(n.skip)return{rendered:t,score:0};e=n.caseSensitive&&e||e.toLowerCase();var u=this.traverse(o,e,0,0,[]);return u?{rendered:this.render(t,u.cache,i,r),score:u.score}:null}},{key:"traverse",value:function(e,t,n,i,r){if(t.length===i)return{score:this.calculateScore(r),cache:r.slice()};if(!(e.length===n||t.length-i>e.length-n)){for(var o,u,l=t[i],s=e.indexOf(l,n);s>-1;){if(r.push(s),u=this.traverse(e,t,s+1,i+1,r),r.pop(),!u)return o;(!o||o.score<u.score)&&(o=u),s=e.indexOf(l,s+1)}return o}}},{key:"calculateScore",value:function(e){var t=0,n=1;return e.forEach((function(i,r){r>0&&(e[r-1]+1===i?n+=n+1:n=1),t+=n})),t}},{key:"render",value:function(e,t,n,i){var r=e.substring(0,t[0]);return t.forEach((function(o,u){r+=n+e[o]+i+e.substring(o+1,t[u+1]?t[u+1]:e.length)})),r}},{key:"filter",value:function(e,t,n){var i=this;return n=n||{},t.reduce((function(t,r,o,u){var l=r;n.extract&&((l=n.extract(r))||(l=""));var s=i.match(e,l,n);return null!=s&&(t[t.length]={string:s.rendered,score:s.score,index:o,original:r}),t}),[]).sort((function(e,t){var n=t.score-e.score;return n||e.index-t.index}))}}]),t}();return function(){function t(n){var i,r=this,a=n.values,c=void 0===a?null:a,h=n.iframe,d=void 0===h?null:h,f=n.selectClass,m=void 0===f?"highlight":f,p=n.containerClass,v=void 0===p?"tribute-container":p,g=n.itemClass,b=void 0===g?"":g,y=n.trigger,w=void 0===y?"@":y,T=n.autocompleteMode,C=void 0!==T&&T,S=n.selectTemplate,E=void 0===S?null:S,k=n.menuItemTemplate,x=void 0===k?null:k,M=n.lookup,A=void 0===M?"key":M,L=n.fillAttr,I=void 0===L?"value":L,N=n.collection,O=void 0===N?null:N,D=n.menuContainer,P=void 0===D?null:D,R=n.noMatchTemplate,W=void 0===R?null:R,H=n.requireLeadingSpace,B=void 0===H||H,F=n.allowSpaces,_=void 0!==F&&F,j=n.replaceTextSuffix,Y=void 0===j?null:j,z=n.positionMenu,K=void 0===z||z,q=n.spaceSelectsMatch,U=void 0!==q&&q,X=n.searchOpts,Q=void 0===X?{}:X,V=n.menuItemLimit,G=void 0===V?null:V,J=n.menuShowMinLength,Z=void 0===J?0:J;if(e(this,t),this.autocompleteMode=C,this.menuSelected=0,this.current={},this.inputEvent=!1,this.isActive=!1,this.menuContainer=P,this.allowSpaces=_,this.replaceTextSuffix=Y,this.positionMenu=K,this.hasTrailingSpace=!1,this.spaceSelectsMatch=U,this.autocompleteMode&&(w="",_=!1),c)this.collection=[{trigger:w,iframe:d,selectClass:m,containerClass:v,itemClass:b,selectTemplate:(E||t.defaultSelectTemplate).bind(this),menuItemTemplate:(x||t.defaultMenuItemTemplate).bind(this),noMatchTemplate:(i=W,"string"==typeof i?""===i.trim()?null:i:"function"==typeof i?i.bind(r):W||function(){return"<li>No Match Found!</li>"}.bind(r)),lookup:A,fillAttr:I,values:c,requireLeadingSpace:B,searchOpts:Q,menuItemLimit:G,menuShowMinLength:Z}];else{if(!O)throw new Error("[Tribute] No collection specified.");this.autocompleteMode&&console.warn("Tribute in autocomplete mode does not work for collections"),this.collection=O.map((function(e){return{trigger:e.trigger||w,iframe:e.iframe||d,selectClass:e.selectClass||m,containerClass:e.containerClass||v,itemClass:e.itemClass||b,selectTemplate:(e.selectTemplate||t.defaultSelectTemplate).bind(r),menuItemTemplate:(e.menuItemTemplate||t.defaultMenuItemTemplate).bind(r),noMatchTemplate:function(e){return"string"==typeof e?""===e.trim()?null:e:"function"==typeof e?e.bind(r):W||function(){return"<li>No Match Found!</li>"}.bind(r)}(W),lookup:e.lookup||A,fillAttr:e.fillAttr||I,values:e.values,requireLeadingSpace:e.requireLeadingSpace,searchOpts:e.searchOpts||Q,menuItemLimit:e.menuItemLimit||G,menuShowMinLength:e.menuShowMinLength||Z}}))}new l(this),new o(this),new u(this),new s(this)}return n(t,[{key:"triggers",value:function(){return this.collection.map((function(e){return e.trigger}))}},{key:"attach",value:function(e){if(!e)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if("undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get()),e.constructor===NodeList||e.constructor===HTMLCollection||e.constructor===Array)for(var t=e.length,n=0;n<t;++n)this._attach(e[n]);else this._attach(e)}},{key:"_attach",value:function(e){e.hasAttribute("data-tribute")&&console.warn("Tribute was already bound to "+e.nodeName),this.ensureEditable(e),this.events.bind(e),e.setAttribute("data-tribute",!0)}},{key:"ensureEditable",value:function(e){if(-1===t.inputTypes().indexOf(e.nodeName)){if(!e.contentEditable)throw new Error("[Tribute] Cannot bind to "+e.nodeName);e.contentEditable=!0}}},{key:"createMenu",value:function(e){var t=this.range.getDocument().createElement("div"),n=this.range.getDocument().createElement("ul");return t.className=e,t.appendChild(n),this.menuContainer?this.menuContainer.appendChild(t):this.range.getDocument().body.appendChild(t)}},{key:"showMenuFor",value:function(e,t){var n=this;if(!this.isActive||this.current.element!==e||this.current.mentionText!==this.currentMentionTextSnapshot){this.currentMentionTextSnapshot=this.current.mentionText,this.menu||(this.menu=this.createMenu(this.current.collection.containerClass),e.tributeMenu=this.menu,this.menuEvents.bind(this.menu)),this.isActive=!0,this.menuSelected=0,this.current.mentionText||(this.current.mentionText="");var r=function(e){if(n.isActive){var r=n.search.filter(n.current.mentionText,e,{pre:n.current.collection.searchOpts.pre||"<span>",post:n.current.collection.searchOpts.post||"</span>",skip:n.current.collection.searchOpts.skip,extract:function(e){if("string"==typeof n.current.collection.lookup)return e[n.current.collection.lookup];if("function"==typeof n.current.collection.lookup)return n.current.collection.lookup(e,n.current.mentionText);throw new Error("Invalid lookup attribute, lookup must be string or function.")}});n.current.collection.menuItemLimit&&(r=r.slice(0,n.current.collection.menuItemLimit)),n.current.filteredItems=r;var o=n.menu.querySelector("ul");if(n.range.positionMenuAtCaret(t),!r.length){var u=new CustomEvent("tribute-no-match",{detail:n.menu});return n.current.element.dispatchEvent(u),void("function"==typeof n.current.collection.noMatchTemplate&&!n.current.collection.noMatchTemplate()||!n.current.collection.noMatchTemplate?n.hideMenu():"function"==typeof n.current.collection.noMatchTemplate?o.innerHTML=n.current.collection.noMatchTemplate():o.innerHTML=n.current.collection.noMatchTemplate)}o.innerHTML="";var l=n.range.getDocument().createDocumentFragment();r.forEach((function(e,t){var r=n.range.getDocument().createElement("li");r.setAttribute("data-index",t),r.className=n.current.collection.itemClass,r.addEventListener("mousemove",(function(e){var t=i(n._findLiTarget(e.target),2),r=(t[0],t[1]);0!==e.movementY&&n.events.setActiveLi(r)})),n.menuSelected===t&&r.classList.add(n.current.collection.selectClass),r.innerHTML=n.current.collection.menuItemTemplate(e),l.appendChild(r)})),o.appendChild(l)}};"function"==typeof this.current.collection.values?this.current.collection.values(this.current.mentionText,r):r(this.current.collection.values)}}},{key:"_findLiTarget",value:function(e){if(!e)return[];var t=e.getAttribute("data-index");return t?[e,t]:this._findLiTarget(e.parentNode)}},{key:"showMenuForCollection",value:function(e,t){e!==document.activeElement&&this.placeCaretAtEnd(e),this.current.collection=this.collection[t||0],this.current.externalTrigger=!0,this.current.element=e,e.isContentEditable?this.insertTextAtCursor(this.current.collection.trigger):this.insertAtCaret(e,this.current.collection.trigger),this.showMenuFor(e)}},{key:"placeCaretAtEnd",value:function(e){if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if(void 0!==document.body.createTextRange){var i=document.body.createTextRange();i.moveToElementText(e),i.collapse(!1),i.select()}}},{key:"insertTextAtCursor",value:function(e){var t,n;(n=(t=window.getSelection()).getRangeAt(0)).deleteContents();var i=document.createTextNode(e);n.insertNode(i),n.selectNodeContents(i),n.collapse(!1),t.removeAllRanges(),t.addRange(n)}},{key:"insertAtCaret",value:function(e,t){var n=e.scrollTop,i=e.selectionStart,r=e.value.substring(0,i),o=e.value.substring(e.selectionEnd,e.value.length);e.value=r+t+o,i+=t.length,e.selectionStart=i,e.selectionEnd=i,e.focus(),e.scrollTop=n}},{key:"hideMenu",value:function(){this.menu&&(this.menu.style.cssText="display: none;",this.isActive=!1,this.menuSelected=0,this.current={})}},{key:"selectItemAtIndex",value:function(e,t){if("number"==typeof(e=parseInt(e))&&!isNaN(e)){var n=this.current.filteredItems[e],i=this.current.collection.selectTemplate(n);null!==i&&this.replaceText(i,t,n)}}},{key:"replaceText",value:function(e,t,n){this.range.replaceTriggerText(e,!0,!0,t,n)}},{key:"_append",value:function(e,t,n){if("function"==typeof e.values)throw new Error("Unable to append to values, as it is a function.");e.values=n?t:e.values.concat(t)}},{key:"append",value:function(e,t,n){var i=parseInt(e);if("number"!=typeof i)throw new Error("please provide an index for the collection to update.");var r=this.collection[i];this._append(r,t,n)}},{key:"appendCurrent",value:function(e,t){if(!this.isActive)throw new Error("No active state. Please use append instead and pass an index.");this._append(this.current.collection,e,t)}},{key:"detach",value:function(e){if(!e)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if("undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get()),e.constructor===NodeList||e.constructor===HTMLCollection||e.constructor===Array)for(var t=e.length,n=0;n<t;++n)this._detach(e[n]);else this._detach(e)}},{key:"_detach",value:function(e){var t=this;this.events.unbind(e),e.tributeMenu&&this.menuEvents.unbind(e.tributeMenu),setTimeout((function(){e.removeAttribute("data-tribute"),t.isActive=!1,e.tributeMenu&&e.tributeMenu.remove()}))}},{key:"isActive",get:function(){return this._isActive},set:function(e){if(this._isActive!=e&&(this._isActive=e,this.current.element)){var t=new CustomEvent("tribute-active-".concat(e));this.current.element.dispatchEvent(t)}}}],[{key:"defaultSelectTemplate",value:function(e){return void 0===e?"".concat(this.current.collection.trigger).concat(this.current.mentionText):this.range.isContentEditable(this.current.element)?'<span class="tribute-mention">'+(this.current.collection.trigger+e.original[this.current.collection.fillAttr])+"</span>":this.current.collection.trigger+e.original[this.current.collection.fillAttr]}},{key:"defaultMenuItemTemplate",value:function(e){return e.string}},{key:"inputTypes",value:function(){return["TEXTAREA","INPUT"]}}]),t}()}));
//# sourceMappingURL=tribute.min.js.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=template&id=043c5615&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=template&id=043c5615&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.announcements.length
          ? _c("div", { staticClass: "card border shadow-none mb-3" }, [
              _c("div", { staticClass: "card-header text-muted bg-white" }, [
                _c("i", { staticClass: "fas fa-bullhorn mr-2" }),
                _vm._v(" "),
                _c("span", { staticClass: "text-weight-light" }, [
                  _vm._v("ANNOUNCEMENTS")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "float-right cursor-pointer",
                    attrs: { title: "Close" },
                    on: { click: _vm.close }
                  },
                  [_c("i", { staticClass: "fas fa-times text-lighter" })]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "card-title mb-0" }, [
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.announcement.title))
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _c("span", { staticStyle: { "font-size": "13px" } }, [
                    _vm._v(_vm._s(_vm.announcement.summary))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "d-flex align-items-center justify-content-between mb-0"
                  },
                  [
                    _vm.announcement.url
                      ? _c(
                          "a",
                          {
                            staticClass: "small font-weight-bold mb-0",
                            attrs: { href: _vm.announcement.url }
                          },
                          [_vm._v("Read more")]
                        )
                      : _c("span"),
                    _vm._v(" "),
                    _c("span", [
                      _c(
                        "span",
                        {
                          class: [
                            _vm.showPrev
                              ? "btn btn-outline-secondary btn-sm py-0"
                              : "btn btn-outline-secondary btn-sm py-0 disabled"
                          ],
                          attrs: { disabled: _vm.showPrev == false },
                          on: {
                            click: function($event) {
                              return _vm.loadPrev()
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-chevron-left fa-sm" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "btn btn-outline-success btn-sm py-0 mx-1",
                          attrs: {
                            title: "Mark as Read",
                            "data-toggle": "tooltip",
                            "data-placement": "bottom"
                          },
                          on: {
                            click: function($event) {
                              return _vm.markAsRead()
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-check fa-sm" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          class: [
                            _vm.showNext
                              ? "btn btn-outline-secondary btn-sm py-0"
                              : "btn btn-outline-secondary btn-sm py-0 disabled"
                          ],
                          attrs: { disabled: _vm.showNext == false },
                          on: {
                            click: function($event) {
                              return _vm.loadNext()
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-chevron-right fa-sm" })]
                      )
                    ])
                  ]
                )
              ])
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NotificationCard.vue?vue&type=template&id=0b80af52&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NotificationCard.vue?vue&type=template&id=0b80af52&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          { staticClass: "card notification-card shadow-none border" },
          [
            _vm.loading
              ? _c(
                  "div",
                  {
                    staticClass: "card-body loader text-center",
                    staticStyle: { height: "240px" }
                  },
                  [
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
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.loading && _vm.notifications.length > 0
              ? _c(
                  "div",
                  {
                    staticClass: "card-body px-0 py-0 contents",
                    staticStyle: { height: "240px", "overflow-y": "scroll" }
                  },
                  [
                    _vm.profile.locked
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "media align-items-center mt-n2 px-3 py-2 border-bottom border-lighter bg-light cursor-pointer",
                            on: {
                              click: function($event) {
                                return _vm.redirect("/account/follow-requests")
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "media-body font-weight-light pt-2 small d-flex align-items-center justify-content-between"
                              },
                              [
                                _c("p", { staticClass: "mb-0 text-lighter" }, [
                                  _c("i", {
                                    staticClass: "fas fa-cog text-light"
                                  })
                                ]),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-center pt-1 mb-1 text-dark font-weight-bold"
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.followRequests.count))
                                    ]),
                                    _vm._v(" Follow Requests")
                                  ]
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-0 text-lighter" }, [
                                  _c("i", {
                                    staticClass: "fas fa-chevron-right"
                                  })
                                ])
                              ]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.notifications, function(n, index) {
                      return _vm.notifications.length > 0
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "media align-items-center px-3 py-2 border-bottom border-light"
                            },
                            [
                              _c("img", {
                                staticClass: "mr-2 rounded-circle",
                                staticStyle: { border: "1px solid #ccc" },
                                attrs: {
                                  src: n.account.avatar,
                                  alt: "",
                                  width: "32px",
                                  height: "32px",
                                  onerror:
                                    "this.onerror=null;this.src='/storage/avatars/default.png';"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "media-body font-weight-light small"
                                },
                                [
                                  n.type == "favourite"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            " liked your\n\t\t\t\t\t\t\t\t"
                                          ),
                                          n.status &&
                                          n.status.hasOwnProperty(
                                            "media_attachments"
                                          )
                                            ? _c(
                                                "span",
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold",
                                                      attrs: {
                                                        href: _vm.getPostUrl(
                                                          n.status
                                                        ),
                                                        id: "fvn-" + n.id
                                                      }
                                                    },
                                                    [_vm._v("post")]
                                                  ),
                                                  _vm._v(
                                                    ".\n\t\t\t\t\t\t\t\t\t"
                                                  ),
                                                  _c(
                                                    "b-popover",
                                                    {
                                                      attrs: {
                                                        target: "fvn-" + n.id,
                                                        title: "",
                                                        triggers: "hover",
                                                        placement: "top",
                                                        boundary: "window"
                                                      }
                                                    },
                                                    [
                                                      _c("img", {
                                                        staticStyle: {
                                                          "object-fit": "cover"
                                                        },
                                                        attrs: {
                                                          src: _vm.notificationPreview(
                                                            n
                                                          ),
                                                          width: "100px",
                                                          height: "100px"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            : _c("span", [
                                                _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                    attrs: {
                                                      href: _vm.getPostUrl(
                                                        n.status
                                                      )
                                                    }
                                                  },
                                                  [_vm._v("post")]
                                                ),
                                                _vm._v(".\n\t\t\t\t\t\t\t\t")
                                              ])
                                        ])
                                      ])
                                    : n.type == "comment"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" commented on your "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "font-weight-bold",
                                              attrs: {
                                                href: _vm.getPostUrl(n.status)
                                              }
                                            },
                                            [_vm._v("post")]
                                          ),
                                          _vm._v(".\n\t\t\t\t\t\t\t")
                                        ])
                                      ])
                                    : n.type == "group:comment"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" commented on your "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "font-weight-bold",
                                              attrs: { href: n.group_post_url }
                                            },
                                            [_vm._v("group post")]
                                          ),
                                          _vm._v(".\n\t\t\t\t\t\t\t")
                                        ])
                                      ])
                                    : n.type == "story:react"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" reacted to your "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "font-weight-bold",
                                              attrs: {
                                                href:
                                                  "/account/direct/t/" +
                                                  n.account.id
                                              }
                                            },
                                            [_vm._v("story")]
                                          ),
                                          _vm._v(".\n\t\t\t\t\t\t\t")
                                        ])
                                      ])
                                    : n.type == "story:comment"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" commented on your "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "font-weight-bold",
                                              attrs: {
                                                href:
                                                  "/account/direct/t/" +
                                                  n.account.id
                                              }
                                            },
                                            [_vm._v("story")]
                                          ),
                                          _vm._v(".\n\t\t\t\t\t\t\t")
                                        ])
                                      ])
                                    : n.type == "mention"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "font-weight-bold",
                                              attrs: {
                                                href: _vm.mentionUrl(n.status)
                                              }
                                            },
                                            [_vm._v("mentioned")]
                                          ),
                                          _vm._v(" you.\n\t\t\t\t\t\t\t")
                                        ])
                                      ])
                                    : n.type == "follow"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            " followed you.\n\t\t\t\t\t\t\t"
                                          )
                                        ])
                                      ])
                                    : n.type == "share"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" shared your "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "font-weight-bold",
                                              attrs: {
                                                href: _vm.getPostUrl(n.status)
                                              }
                                            },
                                            [_vm._v("post")]
                                          ),
                                          _vm._v(".\n\t\t\t\t\t\t\t")
                                        ])
                                      ])
                                    : n.type == "modlog"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.truncate(
                                                    n.account.username
                                                  )
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" updated a "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "font-weight-bold",
                                              attrs: { href: n.modlog.url }
                                            },
                                            [_vm._v("modlog")]
                                          ),
                                          _vm._v(".\n\t\t\t\t\t\t\t")
                                        ])
                                      ])
                                    : n.type == "tagged"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" tagged you in a "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "font-weight-bold",
                                              attrs: { href: n.tagged.post_url }
                                            },
                                            [_vm._v("post")]
                                          ),
                                          _vm._v(".\n\t\t\t\t\t\t\t")
                                        ])
                                      ])
                                    : n.type == "direct"
                                    ? _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-dark word-break",
                                              attrs: {
                                                href: _vm.getProfileUrl(
                                                  n.account
                                                ),
                                                title: n.account.username
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  n.account.local == false
                                                    ? "@"
                                                    : ""
                                                ) +
                                                  _vm._s(
                                                    _vm.truncate(
                                                      n.account.username
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" sent a "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "font-weight-bold",
                                              attrs: {
                                                href:
                                                  "/account/direct/t/" +
                                                  n.account.id
                                              }
                                            },
                                            [_vm._v("dm")]
                                          ),
                                          _vm._v(".\n\t\t\t\t\t\t\t")
                                        ])
                                      ])
                                    : _c("div", [
                                        _c("p", { staticClass: "my-0" }, [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\tWe cannot display this notification at this time.\n\t\t\t\t\t\t\t"
                                          )
                                        ])
                                      ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "small text-muted font-weight-bold",
                                  attrs: { title: n.created_at }
                                },
                                [_vm._v(_vm._s(_vm.timeAgo(n.created_at)))]
                              )
                            ]
                          )
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _vm.notifications.length
                      ? _c(
                          "div",
                          [
                            _c(
                              "infinite-loading",
                              { on: { infinite: _vm.infiniteNotifications } },
                              [
                                _c("div", {
                                  staticClass: "font-weight-bold",
                                  attrs: { slot: "no-results" },
                                  slot: "no-results"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "font-weight-bold",
                                  attrs: { slot: "no-more" },
                                  slot: "no-more"
                                })
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.notifications.length == 0
                      ? _c(
                          "div",
                          { staticClass: "text-lighter text-center py-3" },
                          [
                            _c("p", { staticClass: "mb-0" }, [
                              _c("i", { staticClass: "fas fa-inbox fa-3x" })
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "mb-0 small font-weight-bold" },
                              [_vm._v("0 Notifications!")]
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.loading && !_vm.notifications.length
              ? _c(
                  "div",
                  {
                    staticClass: "card-body px-0 py-0",
                    staticStyle: { height: "240px" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "text-lighter text-center py-3" },
                      [
                        _c("p", { staticClass: "mb-0" }, [
                          _c("i", { staticClass: "fas fa-inbox fa-3x" })
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "mb-0 small font-weight-bold" },
                          [_vm._v("No notifications yet")]
                        ),
                        _vm._v(" "),
                        _vm.showRefresh && !_vm.attemptedRefresh
                          ? _c(
                              "p",
                              {
                                staticClass:
                                  "mt-2 small font-weight-bold text-primary cursor-pointer",
                                on: { click: _vm.refreshNotifications }
                              },
                              [
                                _c("i", { staticClass: "fas fa-redo" }),
                                _vm._v(" Refresh")
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ]
                )
              : _vm._e()
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=template&id=3ffb4cbe&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=template&id=3ffb4cbe&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    _vm.show
      ? _c(
          "div",
          {
            staticClass: "card card-body p-0 border mt-md-4 mb-md-3 shadow-none"
          },
          [
            _vm.loading
              ? _c(
                  "div",
                  {
                    staticClass:
                      "w-100 h-100 d-flex align-items-center justify-content-center"
                  },
                  [_vm._m(0)]
                )
              : _c(
                  "div",
                  {
                    staticClass:
                      "d-flex align-items-center justify-content-start scrolly"
                  },
                  _vm._l(_vm.stories, function(story, index) {
                    return _c(
                      "div",
                      {
                        staticClass: "px-3 pt-3 text-center cursor-pointer",
                        class: { seen: story.seen },
                        on: {
                          click: function($event) {
                            return _vm.showStory(index)
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "mb-1 ring",
                            class: [
                              story.seen ? "not-seen" : "",
                              story.local ? "" : "remote"
                            ]
                          },
                          [
                            _c("img", {
                              staticClass: "rounded-circle border",
                              attrs: {
                                src: story.avatar,
                                width: "60",
                                height: "60",
                                onerror:
                                  "this.onerror=null;this.src='/storage/avatars/default.png?v=2'"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "small font-weight-bold text-truncate",
                            class: { "text-lighter": story.seen },
                            staticStyle: { "max-width": "69px" },
                            attrs: { title: story.username }
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t" +
                                _vm._s(story.username) +
                                "\n\t\t\t\t"
                            )
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
          ]
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
        staticClass: "spinner-border spinner-border-sm text-lighter",
        attrs: { role: "status" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Timeline.vue?vue&type=template&id=40ef44f8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Timeline.vue?vue&type=template&id=40ef44f8&scoped=true& ***!
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
    [
      _vm.currentLayout === "feed"
        ? _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _vm.morePostsAvailable == true
                ? _c(
                    "div",
                    { staticClass: "col-12 mt-5 pt-3 mb-3 fixed-top" },
                    [
                      _c("p", { staticClass: "text-center" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-dark px-4 rounded-pill font-weight-bold shadow",
                            on: { click: _vm.syncNewPosts }
                          },
                          [_vm._v("Load New Posts")]
                        )
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-md-8 col-lg-8 px-0 mb-sm-3 timeline order-2 order-md-1"
                },
                [
                  _c(
                    "div",
                    { staticStyle: { "margin-top": "-2px" } },
                    [
                      _vm.config.features.stories
                        ? _c("story-component", { attrs: { scope: _vm.scope } })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm.loading
                        ? _c(
                            "div",
                            {
                              staticClass: "text-center",
                              staticStyle: { "padding-top": "10px" }
                            },
                            [_vm._m(0)]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.feed, function(status, index) {
                        return _c(
                          "div",
                          {
                            key: "feed-" + index + "-" + status.id,
                            attrs: { "data-status-id": status.id }
                          },
                          [
                            _c("status-card", {
                              class: { "border-top": index === 0 },
                              attrs: {
                                status: status,
                                "reaction-bar": _vm.reactionBar,
                                size: "small"
                              },
                              on: {
                                "status-delete": _vm.deleteStatus,
                                "comment-focus": _vm.commentFocus
                              }
                            })
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      !_vm.loading && _vm.feed.length
                        ? _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card rounded-0 border-top-0 status-card rounded-0 shadow-none border"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "card-body py-5 my-5" },
                                  [
                                    _c(
                                      "infinite-loading",
                                      {
                                        attrs: { distance: 800 },
                                        on: { infinite: _vm.infiniteTimeline }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            attrs: { slot: "no-more" },
                                            slot: "no-more"
                                          },
                                          [
                                            _vm.recentFeed
                                              ? _c("div", [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "far fa-check-circle fa-8x text-lighter"
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center h3 font-weight-light"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "You're All Caught Up!"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center text-muted font-weight-light"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "You've seen all the new posts from the accounts you follow."
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center mb-0"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "btn btn-link font-weight-bold px-4",
                                                          attrs: {
                                                            href: "/?a=vop"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "View Older Posts"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center mb-0"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "btn btn-link font-weight-bold px-4",
                                                          attrs: { href: "/" },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.alwaysViewOlderPosts()
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Always show older posts on this device"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ])
                                              : _c("div", [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center h3 font-weight-light"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "You've reached the end of this feed"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center mb-0"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "btn btn-link font-weight-bold px-4",
                                                          attrs: {
                                                            href: "/discover"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Discover new posts and people"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            attrs: { slot: "no-results" },
                                            slot: "no-results"
                                          },
                                          [
                                            _vm.recentFeed
                                              ? _c("div", [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "far fa-check-circle fa-8x text-lighter"
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center h3 font-weight-light"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "You're All Caught Up!"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center text-muted font-weight-light"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "You've seen all the new posts from the accounts you follow."
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center mb-0"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "btn btn-link font-weight-bold px-4",
                                                          attrs: {
                                                            href: "/?a=vop"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "View Older Posts"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center mb-0"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "btn btn-link font-weight-bold px-4",
                                                          attrs: { href: "/" },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.alwaysViewOlderPosts()
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Always show older posts on this device"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ])
                                              : _c("div", [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center h3 font-weight-light"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "You've reached the end of this feed"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center mb-0"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "btn btn-link font-weight-bold px-4",
                                                          attrs: {
                                                            href: "/discover"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Discover new posts and people"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ])
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.loading &&
                      _vm.scope == "home" &&
                      _vm.feed.length == 0
                        ? _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card rounded-0 mt-4 status-card rounded-0 shadow-none border"
                              },
                              [
                                _vm.profile.following_count != "0"
                                  ? _c(
                                      "div",
                                      { staticClass: "card-body py-5 my-5" },
                                      [
                                        _vm._m(1),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "text-center h3 font-weight-light"
                                          },
                                          [_vm._v("You're All Caught Up!")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "text-center text-muted font-weight-light"
                                          },
                                          [
                                            _vm._v(
                                              "You've seen all the new posts from the accounts you follow."
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._m(2),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "text-center mb-0" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-link font-weight-bold px-4",
                                                attrs: { href: "/" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.alwaysViewOlderPosts()
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "Always show older posts on this device"
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "card-body py-5 my-5" },
                                      [
                                        _vm._m(3),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "text-center h3 font-weight-light"
                                          },
                                          [
                                            _vm._v(
                                              "Hello " +
                                                _vm._s(_vm.profile.username)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "text-center text-muted font-weight-light"
                                          },
                                          [
                                            _vm._v(
                                              "Accounts you follow will appear in this feed."
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._m(4)
                                      ]
                                    )
                              ]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.loading &&
                      _vm.scope == "home" &&
                      _vm.recentFeed &&
                      _vm.discover_feed.length
                        ? _c("div", { staticClass: "pt-3" }, [_vm._m(5)])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.discover_feed, function(status, index) {
                        return !_vm.loading &&
                          _vm.scope == "home" &&
                          _vm.recentFeed &&
                          _vm.discover_feed.length
                          ? _c(
                              "div",
                              {
                                key: "discover_feed-" + index + "-" + status.id,
                                attrs: { "data-status-id": status.id }
                              },
                              [
                                _c("status-card", {
                                  class: { "border-top": index === 0 },
                                  attrs: { status: status, recommended: true }
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      !_vm.loading && _vm.emptyFeed && _vm.scope !== "home"
                        ? _c("div", [_vm._m(6)])
                        : _vm._e()
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-md-4 col-lg-4 my-4 order-1 order-md-2 d-none d-md-block"
                },
                [
                  _c("div", [
                    _c("div", { staticClass: "mb-4" }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.loading,
                              expression: "!loading"
                            }
                          ]
                        },
                        [
                          _c("div", { staticClass: "pb-2" }, [
                            _c(
                              "div",
                              {
                                staticClass: "media d-flex align-items-center"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "mr-3",
                                    attrs: {
                                      href: !_vm.userStory
                                        ? _vm.profile.url
                                        : "/stories/" + _vm.profile.acct
                                    }
                                  },
                                  [
                                    _vm.userStory
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
                                                "rounded-circle box-shadow",
                                              attrs: {
                                                src: _vm.profile.avatar,
                                                width: "64px",
                                                height: "64px",
                                                onerror:
                                                  "this.onerror=null;this.src='/storage/avatars/default.png?v=2'",
                                                alt: "avatar"
                                              }
                                            })
                                          ]
                                        )
                                      : _c("div", [
                                          _c("img", {
                                            staticClass:
                                              "rounded-circle box-shadow",
                                            attrs: {
                                              src: _vm.profile.avatar,
                                              width: "64px",
                                              height: "64px",
                                              onerror:
                                                "this.onerror=null;this.src='/storage/avatars/default.png?v=2'",
                                              alt: "avatar"
                                            }
                                          })
                                        ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "media-body d-flex justify-content-between word-break"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "mb-0 px-0 font-weight-bold"
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "text-dark",
                                              attrs: { href: _vm.profile.url }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.profile.username ||
                                                    "loading..."
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "my-0 text-muted pb-0" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.profile.display_name ||
                                                "loading..."
                                            )
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(7)
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "card-footer bg-transparent border-0 pt-0 pb-1"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between text-center"
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.redirect(_vm.profile.url)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "p",
                                    { staticClass: "mb-0 font-weight-bold" },
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
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "mb-0 small text-muted" },
                                    [_vm._v("Posts")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.redirect(
                                        _vm.profile.url + "?md=followers"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "p",
                                    { staticClass: "mb-0 font-weight-bold" },
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
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "mb-0 small text-muted" },
                                    [_vm._v("Followers")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.redirect(
                                        _vm.profile.url + "?md=following"
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "p",
                                    { staticClass: "mb-0 font-weight-bold" },
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
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "mb-0 small text-muted" },
                                    [_vm._v("Following")]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.modes.notify == true && !_vm.loading,
                            expression: "modes.notify == true && !loading"
                          }
                        ],
                        staticClass: "mb-4"
                      },
                      [_c("notification-card")],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.showSuggestions == true &&
                              _vm.suggestions.length &&
                              _vm.config.ab &&
                              _vm.config.ab.rec == true,
                            expression:
                              "showSuggestions == true && suggestions.length && config.ab && config.ab.rec == true"
                          }
                        ],
                        staticClass: "mb-4"
                      },
                      [
                        _c("div", { staticClass: "card shadow-none border" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "card-header bg-white d-flex align-items-center justify-content-between"
                            },
                            [
                              _c(
                                "a",
                                {
                                  ref: "suggestionRefresh",
                                  staticClass:
                                    "small text-muted cursor-pointer",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.refreshSuggestions($event)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-sync-alt" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "small text-dark text-uppercase font-weight-bold"
                                },
                                [_vm._v("Suggestions")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "small text-muted cursor-pointer",
                                  on: { click: _vm.hideSuggestions }
                                },
                                [_c("i", { staticClass: "fas fa-times" })]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "card-body pt-0" },
                            _vm._l(_vm.suggestions, function(rec, index) {
                              return _c(
                                "div",
                                {
                                  staticClass: "media align-items-center mt-3"
                                },
                                [
                                  _c(
                                    "a",
                                    { attrs: { href: "/" + rec.username } },
                                    [
                                      _c("img", {
                                        staticClass: "rounded-circle mr-3",
                                        attrs: {
                                          src: rec.avatar,
                                          width: "32px",
                                          height: "32px",
                                          onerror:
                                            "this.onerror=null;this.src='/storage/avatars/default.png?v=2'",
                                          alt: "avatar"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "media-body" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "mb-0 font-weight-bold small"
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "text-decoration-none text-dark",
                                            attrs: { href: "/" + rec.username }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(rec.username) +
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 small text-muted" },
                                      [_vm._v(_vm._s(rec.message))]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "font-weight-bold small",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.expRecFollow(rec.id, index)
                                        }
                                      }
                                    },
                                    [_vm._v("Follow")]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(8)
                  ])
                ]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.replyStatus && _vm.replyStatus.hasOwnProperty("id")
        ? _c("comment-card", {
            attrs: { status: _vm.replyStatus, profile: _vm.profile },
            on: { "current-layout": _vm.setCurrentLayout }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal-stack" },
        [
          _c(
            "b-modal",
            {
              ref: "replyModal",
              attrs: {
                id: "ctx-reply-modal",
                "hide-footer": "",
                centered: "",
                rounded: "",
                "title-html": _vm.replyStatus.account
                  ? "Reply to <span class=text-dark>" +
                    _vm.replyStatus.account.username +
                    "</span>"
                  : "",
                "title-tag": "p",
                "title-class": "font-weight-bold text-muted",
                size: "md",
                "body-class": "p-2 rounded"
              }
            },
            [
              _c(
                "div",
                [
                  _c(
                    "vue-tribute",
                    { attrs: { options: _vm.tributeSettings } },
                    [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.replyText,
                            expression: "replyText"
                          }
                        ],
                        staticClass: "form-control replyModalTextarea",
                        attrs: { rows: "4" },
                        domProps: { value: _vm.replyText },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.replyText = $event.target.value
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "border-top border-bottom my-2" }, [
                    _c(
                      "ul",
                      {
                        staticClass: "nav align-items-center emoji-reactions",
                        staticStyle: {
                          "overflow-x": "scroll",
                          "flex-wrap": "unset"
                        }
                      },
                      _vm._l(_vm.emoji, function(e) {
                        return _c(
                          "li",
                          {
                            staticClass: "nav-item",
                            on: {
                              click: function($event) {
                                return _vm.emojiReaction(_vm.status)
                              }
                            }
                          },
                          [_vm._v(_vm._s(e))]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "pl-2 small text-muted font-weight-bold text-monospace"
                          },
                          [
                            _c(
                              "span",
                              {
                                class: [
                                  _vm.replyText.length >
                                  _vm.config.uploader.max_caption_length
                                    ? "text-danger"
                                    : "text-dark"
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.replyText.length >
                                      _vm.config.uploader.max_caption_length
                                      ? _vm.config.uploader.max_caption_length -
                                          _vm.replyText.length
                                      : _vm.replyText.length
                                  )
                                )
                              ]
                            ),
                            _vm._v(
                              "/" +
                                _vm._s(_vm.config.uploader.max_caption_length) +
                                "\n\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c(
                          "div",
                          { staticClass: "custom-control custom-switch mr-3" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.replyNsfw,
                                  expression: "replyNsfw"
                                }
                              ],
                              staticClass: "custom-control-input",
                              attrs: {
                                type: "checkbox",
                                id: "replyModalCWSwitch"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.replyNsfw)
                                  ? _vm._i(_vm.replyNsfw, null) > -1
                                  : _vm.replyNsfw
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.replyNsfw,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.replyNsfw = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.replyNsfw = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.replyNsfw = $$c
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                class: [
                                  _vm.replyNsfw
                                    ? "custom-control-label font-weight-bold text-dark"
                                    : "custom-control-label text-lighter"
                                ],
                                attrs: { for: "replyModalCWSwitch" }
                              },
                              [_vm._v("Mark as NSFW")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-primary btn-sm py-2 px-4 lead text-uppercase font-weight-bold",
                            attrs: { disabled: _vm.replyText.length == 0 },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.commentSubmit(_vm.status, $event)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t" +
                                _vm._s(
                                  _vm.replySending == true ? "POSTING" : "POST"
                                ) +
                                "\n\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("b-modal", {
            ref: "ctxStatusModal",
            attrs: {
              id: "ctx-status-modal",
              "hide-header": "",
              "hide-footer": "",
              centered: "",
              rounded: "",
              size: "xl",
              "body-class": "list-group-flush p-0 m-0 rounded"
            }
          })
        ],
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
    return _c(
      "div",
      { staticClass: "spinner-border", attrs: { role: "status" } },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center" }, [
      _c("i", { staticClass: "far fa-check-circle fa-8x text-lighter" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center mb-0" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-link font-weight-bold px-4",
          attrs: { href: "/?a=vop" }
        },
        [_vm._v("View Older Posts")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center" }, [
      _c("i", { staticClass: "far fa-smile fa-8x text-lighter" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center mb-0" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-link font-weight-bold px-4",
          attrs: { href: "/discover" }
        },
        [_vm._v("Discover new posts and people")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "h5 font-weight-bold py-3 d-flex justify-content-between align-items-center"
      },
      [
        _c("span", [_vm._v("Suggested Posts")]),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "small font-weight-bold", attrs: { href: "/?a=vop" } },
          [_vm._v("Older Posts")]
        )
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
        staticClass:
          "card rounded-0 mt-3 status-card rounded-0 shadow-none border"
      },
      [
        _c("div", { staticClass: "card-body py-5 my-5" }, [
          _c("p", { staticClass: "text-center" }, [
            _c("i", { staticClass: "fas fa-battery-empty fa-8x text-lighter" })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-center h3 font-weight-light" }, [
            _vm._v("empty_timeline.jpg")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-center text-muted font-weight-light" }, [
            _vm._v("We cannot find any posts for this timeline.")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-center mb-0" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-link font-weight-bold px-4",
                attrs: { href: "/discover" }
              },
              [_vm._v("Discover new posts and people")]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-2" }, [
      _c(
        "a",
        { staticClass: "text-muted", attrs: { href: "/settings/home" } },
        [
          _c("i", { staticClass: "fas fa-cog fa-lg" }),
          _vm._v(" "),
          _c("span", { staticClass: "sr-only" }, [_vm._v("User Settings")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("div", { staticClass: "container px-0 pb-5" }, [
        _c("p", { staticClass: "mb-2 small text-justify" }, [
          _c(
            "a",
            {
              staticClass: "text-lighter pr-2",
              attrs: { href: "/site/about" }
            },
            [_vm._v("About")]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "text-lighter pr-2", attrs: { href: "/site/help" } },
            [_vm._v("Help")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "text-lighter pr-2",
              attrs: { href: "/site/language" }
            },
            [_vm._v("Language")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "text-lighter pr-2",
              attrs: { href: "/discover/places" }
            },
            [_vm._v("Places")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "text-lighter pr-2",
              attrs: { href: "/site/privacy" }
            },
            [_vm._v("Privacy")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "text-lighter pr-2",
              attrs: { href: "/site/terms" }
            },
            [_vm._v("Terms")]
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-0 text-uppercase text-muted small" }, [
          _c(
            "a",
            {
              staticClass: "text-lighter",
              attrs: {
                href: "http://pixelfed.org",
                rel: "noopener",
                title: "",
                "data-toggle": "tooltip"
              }
            },
            [_vm._v("Powered by Pixelfed")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/CommentCard.vue?vue&type=template&id=4c9a67ee&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/CommentCard.vue?vue&type=template&id=4c9a67ee&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "container p-0 overflow-hidden" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-md-6 offset-md-3" }, [
            _c(
              "div",
              {
                staticClass: "card shadow-none border",
                staticStyle: { height: "100vh" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header d-flex justify-content-between align-items-center"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "cursor-pointer",
                        on: {
                          click: function($event) {
                            return _vm.commentNavigateBack(_vm.status.id)
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-chevron-left fa-lg px-2"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._m(1)
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    staticStyle: { "overflow-y": "auto !important" }
                  },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "rounded-circle border mr-3",
                        attrs: {
                          src: _vm.status.account.avatar,
                          width: "32px",
                          height: "32px"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "d-flex justify-content-between align-items-top mb-0",
                            staticStyle: { "overflow-y": "hidden" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "mr-2",
                                staticStyle: { "font-size": "13px" }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "text-dark font-weight-bold mr-1 text-break",
                                    attrs: {
                                      href: _vm.profileUrl(_vm.status),
                                      title: _vm.status.account.username
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.trimCaption(
                                          _vm.status.account.username,
                                          15
                                        )
                                      )
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass: "text-break comment-body",
                                  staticStyle: { "word-break": "break-all" },
                                  domProps: {
                                    innerHTML: _vm._s(_vm.status.content)
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "postCommentsContainer d-none" },
                      [
                        _vm.replies.length
                          ? _c(
                              "p",
                              {
                                staticClass:
                                  "mb-1 text-center load-more-link my-4"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "text-dark",
                                    attrs: {
                                      href: "#",
                                      title: "Load more comments"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.loadMoreComments($event)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "bi bi-plus-circle",
                                        staticStyle: { "font-size": "2em" },
                                        attrs: {
                                          width: "1em",
                                          height: "1em",
                                          viewBox: "0 0 16 16",
                                          fill: "currentColor",
                                          xmlns: "http://www.w3.org/2000/svg"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            "fill-rule": "evenodd",
                                            d:
                                              "M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z",
                                            "clip-rule": "evenodd"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            "fill-rule": "evenodd",
                                            d:
                                              "M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z",
                                            "clip-rule": "evenodd"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            "fill-rule": "evenodd",
                                            d:
                                              "M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z",
                                            "clip-rule": "evenodd"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.replies, function(reply, index) {
                          return _vm.replies.length
                            ? _c(
                                "div",
                                {
                                  key: "tl" + reply.id + "_" + index,
                                  staticClass: "pb-3 media"
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle border mr-3",
                                    attrs: {
                                      src: reply.account.avatar,
                                      width: "32px",
                                      height: "32px"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "media-body" }, [
                                    reply.sensitive == true
                                      ? _c("div", [
                                          _c("span", { staticClass: "py-3" }, [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "text-dark font-weight-bold mr-3",
                                                staticStyle: {
                                                  "font-size": "13px"
                                                },
                                                attrs: {
                                                  href: _vm.profileUrl(reply),
                                                  title: reply.account.username
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.trimCaption(
                                                      reply.account.username,
                                                      15
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "text-break",
                                                staticStyle: {
                                                  "font-size": "13px"
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-italic text-muted"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "This comment may contain sensitive material"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-primary cursor-pointer pl-1",
                                                    on: {
                                                      click: function($event) {
                                                        reply.sensitive = false
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Show")]
                                                )
                                              ]
                                            )
                                          ])
                                        ])
                                      : _c("div", [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "d-flex justify-content-between align-items-top read-more mb-0",
                                              staticStyle: {
                                                "overflow-y": "hidden"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass: "mr-3",
                                                  staticStyle: {
                                                    "font-size": "13px"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "text-dark font-weight-bold mr-1 text-break",
                                                      attrs: {
                                                        href: _vm.profileUrl(
                                                          reply
                                                        ),
                                                        title:
                                                          reply.account.username
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.trimCaption(
                                                            reply.account
                                                              .username,
                                                            15
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("span", {
                                                    staticClass:
                                                      "text-break comment-body",
                                                    staticStyle: {
                                                      "word-break": "break-all"
                                                    },
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        reply.content
                                                      )
                                                    }
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass: "text-right",
                                                  staticStyle: {
                                                    "min-width": "30px"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.likeReply(
                                                            reply,
                                                            $event
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        class: [
                                                          reply.favourited
                                                            ? "fas fa-heart fa-sm text-danger"
                                                            : "far fa-heart fa-sm text-lighter"
                                                        ]
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "pl-2 text-lighter cursor-pointer",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.ctxMenu(
                                                            reply
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("span", {
                                                        staticClass:
                                                          "fas fa-ellipsis-v text-lighter"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-0" }, [
                                            _vm._o(
                                              _c("a", {
                                                staticClass:
                                                  "text-muted mr-3 text-decoration-none small",
                                                staticStyle: { width: "20px" },
                                                attrs: {
                                                  href: _vm.statusUrl(reply)
                                                },
                                                domProps: {
                                                  textContent: _vm._s(
                                                    _vm.timeAgo(
                                                      reply.created_at
                                                    )
                                                  )
                                                }
                                              }),
                                              0,
                                              "tl" + reply.id + "_" + index
                                            ),
                                            _vm._v(" "),
                                            reply.favourites_count
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-muted comment-reaction font-weight-bold mr-3 small"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        reply.favourites_count ==
                                                          1
                                                          ? "1 like"
                                                          : reply.favourites_count +
                                                              " likes"
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "small text-muted comment-reaction font-weight-bold cursor-pointer",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.replyFocus(
                                                      reply,
                                                      index,
                                                      true
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Reply")]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          reply.reply_count > 0
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "cursor-pointer pb-2",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.toggleReplies(
                                                        reply
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("span", {
                                                    staticClass:
                                                      "show-reply-bar"
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "comment-reaction small font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          reply.thread
                                                            ? "Hide"
                                                            : "View"
                                                        ) +
                                                          " Replies (" +
                                                          _vm._s(
                                                            reply.reply_count
                                                          ) +
                                                          ")"
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          reply.thread == true
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass: "comment-thread"
                                                },
                                                _vm._l(reply.replies, function(
                                                  s,
                                                  sindex
                                                ) {
                                                  return _c(
                                                    "div",
                                                    {
                                                      key:
                                                        "cr" +
                                                        s.id +
                                                        "_" +
                                                        index,
                                                      staticClass: "py-1 media"
                                                    },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "rounded-circle border mr-3",
                                                        attrs: {
                                                          src: s.account.avatar,
                                                          width: "25px",
                                                          height: "25px"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "media-body"
                                                        },
                                                        [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "d-flex justify-content-between align-items-top read-more mb-0",
                                                              staticStyle: {
                                                                "overflow-y":
                                                                  "hidden"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "mr-2",
                                                                  staticStyle: {
                                                                    "font-size":
                                                                      "13px"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "text-dark font-weight-bold mr-1",
                                                                      attrs: {
                                                                        href: _vm.profileUrl(
                                                                          s
                                                                        ),
                                                                        title:
                                                                          s
                                                                            .account
                                                                            .username
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          s
                                                                            .account
                                                                            .username
                                                                        )
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "text-break comment-body",
                                                                    staticStyle: {
                                                                      "word-break":
                                                                        "break-all"
                                                                    },
                                                                    domProps: {
                                                                      innerHTML: _vm._s(
                                                                        s.content
                                                                      )
                                                                    }
                                                                  })
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("span", [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.likeReply(
                                                                          s,
                                                                          $event
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      class: [
                                                                        s.favourited
                                                                          ? "fas fa-heart fa-sm text-danger"
                                                                          : "far fa-heart fa-sm text-lighter"
                                                                      ]
                                                                    })
                                                                  ]
                                                                )
                                                              ])
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "mb-0"
                                                            },
                                                            [
                                                              _vm._o(
                                                                _c("a", {
                                                                  staticClass:
                                                                    "text-muted mr-3 text-decoration-none small",
                                                                  staticStyle: {
                                                                    width:
                                                                      "20px"
                                                                  },
                                                                  attrs: {
                                                                    href: _vm.statusUrl(
                                                                      s
                                                                    )
                                                                  },
                                                                  domProps: {
                                                                    textContent: _vm._s(
                                                                      _vm.timeAgo(
                                                                        s.created_at
                                                                      )
                                                                    )
                                                                  }
                                                                }),
                                                                1,
                                                                "cr" +
                                                                  s.id +
                                                                  "_" +
                                                                  index
                                                              ),
                                                              _vm._v(" "),
                                                              s.favourites_count
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "text-muted comment-reaction font-weight-bold mr-3"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          s.favourites_count ==
                                                                            1
                                                                            ? "1 like"
                                                                            : s.favourites_count +
                                                                                " likes"
                                                                        )
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
                                                }),
                                                0
                                              )
                                            : _vm._e()
                                        ])
                                  ])
                                ]
                              )
                            : _vm._e()
                        }),
                        _vm._v(" "),
                        !_vm.replies.length
                          ? _c("div", [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-center text-muted font-weight-bold small"
                                },
                                [_vm._v("No comments yet")]
                              )
                            ])
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-footer mb-3" }, [
                  _c("div", { staticClass: "align-middle d-flex" }, [
                    _c("img", {
                      staticClass: "rounded-circle border mr-3",
                      attrs: {
                        src: _vm.profile.avatar,
                        width: "36",
                        height: "36"
                      }
                    }),
                    _vm._v(" "),
                    _c("textarea", {
                      staticClass: "form-control rounded-pill",
                      staticStyle: { resize: "none", "overflow-y": "hidden" },
                      attrs: {
                        name: "comment",
                        placeholder: "Add a comment…",
                        autocomplete: "off",
                        autocorrect: "off",
                        rows: "1",
                        maxlength: "0"
                      },
                      on: {
                        click: function($event) {
                          return _vm.replyFocus(_vm.status)
                        }
                      }
                    })
                  ])
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("context-menu", {
        ref: "cMenu",
        attrs: { status: _vm.ctxMenuStatus, profile: _vm.profile }
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "replyModal",
          attrs: {
            id: "ctx-reply-modal",
            "hide-footer": "",
            centered: "",
            rounded: "",
            "title-html": _vm.status.account
              ? "Reply to <span class=text-dark>" +
                _vm.status.account.username +
                "</span>"
              : "",
            "title-tag": "p",
            "title-class": "font-weight-bold text-muted",
            size: "md",
            "body-class": "p-2 rounded"
          }
        },
        [
          _c(
            "div",
            [
              _c("vue-tribute", { attrs: { options: _vm.tributeSettings } }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.replyText,
                      expression: "replyText"
                    }
                  ],
                  staticClass: "form-control replyModalTextarea",
                  attrs: { rows: "4" },
                  domProps: { value: _vm.replyText },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.replyText = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "border-top border-bottom my-2" }, [
                _c(
                  "ul",
                  {
                    staticClass: "nav align-items-center emoji-reactions",
                    staticStyle: {
                      "overflow-x": "scroll",
                      "flex-wrap": "unset"
                    }
                  },
                  _vm._l(_vm.emoji, function(e) {
                    return _c(
                      "li",
                      {
                        staticClass: "nav-item",
                        on: {
                          click: function($event) {
                            return _vm.emojiReaction(_vm.status)
                          }
                        }
                      },
                      [_vm._v(_vm._s(e))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-between align-items-center"
                },
                [
                  _c("div", [
                    _c(
                      "span",
                      {
                        staticClass:
                          "pl-2 small text-muted font-weight-bold text-monospace"
                      },
                      [
                        _c(
                          "span",
                          {
                            class: [
                              _vm.replyText.length >
                              _vm.config.uploader.max_caption_length
                                ? "text-danger"
                                : "text-dark"
                            ]
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.replyText.length >
                                  _vm.config.uploader.max_caption_length
                                  ? _vm.config.uploader.max_caption_length -
                                      _vm.replyText.length
                                  : _vm.replyText.length
                              )
                            )
                          ]
                        ),
                        _vm._v(
                          "/" +
                            _vm._s(_vm.config.uploader.max_caption_length) +
                            "\n\t\t\t\t\t"
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex align-items-center" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-switch mr-3" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.replyNsfw,
                              expression: "replyNsfw"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "replyModalCWSwitch" },
                          domProps: {
                            checked: Array.isArray(_vm.replyNsfw)
                              ? _vm._i(_vm.replyNsfw, null) > -1
                              : _vm.replyNsfw
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.replyNsfw,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 && (_vm.replyNsfw = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.replyNsfw = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.replyNsfw = $$c
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            class: [
                              _vm.replyNsfw
                                ? "custom-control-label font-weight-bold text-dark"
                                : "custom-control-label text-lighter"
                            ],
                            attrs: { for: "replyModalCWSwitch" }
                          },
                          [_vm._v("Mark as NSFW")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-primary btn-sm py-2 px-4 lead text-uppercase font-weight-bold",
                        attrs: { disabled: _vm.replyText.length == 0 },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.commentSubmit(_vm.status, $event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(
                              _vm.replySending == true ? "POSTING" : "POST"
                            ) +
                            "\n\t\t\t\t\t"
                        )
                      ]
                    )
                  ])
                ]
              )
            ],
            1
          )
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
    return _c("div", [
      _c("p", { staticClass: "font-weight-bold mb-0 h5" }, [_vm._v("Comments")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("i", { staticClass: "fas fa-cog fa-lg text-white" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "postCommentsLoader text-center py-2" }, [
      _c("div", { staticClass: "spinner-border", attrs: { role: "status" } }, [
        _c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])
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

/***/ "./node_modules/vue-tribute/dist/vue-tribute.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-tribute/dist/vue-tribute.es.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tributejs */ "./node_modules/tributejs/dist/tribute.min.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_0__);


var VueTribute = {
  name: "vue-tribute",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  watch: {
    options: {
      immediate: false,
      deep: true,
      handler: function handler() {
        var _this = this;

        if (this.tribute) {
          setTimeout(function () {
            var $el = _this.$slots.default[0].elm;

            _this.tribute.detach($el);

            setTimeout(function () {
              $el = _this.$slots.default[0].elm;
              _this.tribute = new tributejs__WEBPACK_IMPORTED_MODULE_0___default.a(_this.options);

              _this.tribute.attach($el);

              $el.tributeInstance = _this.tribute;
            }, 0);
          }, 0);
        }
      }
    }
  },
  mounted: function mounted() {
    if (typeof tributejs__WEBPACK_IMPORTED_MODULE_0___default.a === "undefined") {
      throw new Error("[vue-tribute] cannot locate tributejs!");
    }

    var $el = this.$slots.default[0].elm;
    this.tribute = new tributejs__WEBPACK_IMPORTED_MODULE_0___default.a(this.options);
    this.tribute.attach($el);
    $el.tributeInstance = this.tribute;
    $el.addEventListener("tribute-replaced", function (e) {
      e.target.dispatchEvent(new Event("input", {
        bubbles: true
      }));
    });
  },
  beforeDestroy: function beforeDestroy() {
    var $el = this.$slots.default[0].elm;

    if (this.tribute) {
      this.tribute.detach($el);
    }
  },
  render: function render(h) {
    return h("div", {
      staticClass: "v-tribute"
    }, this.$slots.default);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(VueTribute.name, VueTribute);
}

/* harmony default export */ __webpack_exports__["default"] = (VueTribute);


/***/ }),

/***/ "./resources/assets/js/components/AnnouncementsCard.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/AnnouncementsCard.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnnouncementsCard_vue_vue_type_template_id_043c5615_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnnouncementsCard.vue?vue&type=template&id=043c5615&scoped=true& */ "./resources/assets/js/components/AnnouncementsCard.vue?vue&type=template&id=043c5615&scoped=true&");
/* harmony import */ var _AnnouncementsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnouncementsCard.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/AnnouncementsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AnnouncementsCard_vue_vue_type_style_index_0_id_043c5615_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css& */ "./resources/assets/js/components/AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AnnouncementsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnnouncementsCard_vue_vue_type_template_id_043c5615_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnnouncementsCard_vue_vue_type_template_id_043c5615_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "043c5615",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/AnnouncementsCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/AnnouncementsCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/AnnouncementsCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AnnouncementsCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_style_index_0_id_043c5615_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=style&index=0&id=043c5615&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_style_index_0_id_043c5615_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_style_index_0_id_043c5615_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_style_index_0_id_043c5615_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_style_index_0_id_043c5615_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/AnnouncementsCard.vue?vue&type=template&id=043c5615&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/AnnouncementsCard.vue?vue&type=template&id=043c5615&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_template_id_043c5615_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AnnouncementsCard.vue?vue&type=template&id=043c5615&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AnnouncementsCard.vue?vue&type=template&id=043c5615&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_template_id_043c5615_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementsCard_vue_vue_type_template_id_043c5615_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/NotificationCard.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/NotificationCard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationCard_vue_vue_type_template_id_0b80af52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationCard.vue?vue&type=template&id=0b80af52&scoped=true& */ "./resources/assets/js/components/NotificationCard.vue?vue&type=template&id=0b80af52&scoped=true&");
/* harmony import */ var _NotificationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationCard.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/NotificationCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationCard_vue_vue_type_template_id_0b80af52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationCard_vue_vue_type_template_id_0b80af52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b80af52",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/NotificationCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/NotificationCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/NotificationCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NotificationCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/NotificationCard.vue?vue&type=template&id=0b80af52&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/NotificationCard.vue?vue&type=template&id=0b80af52&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCard_vue_vue_type_template_id_0b80af52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationCard.vue?vue&type=template&id=0b80af52&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NotificationCard.vue?vue&type=template&id=0b80af52&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCard_vue_vue_type_template_id_0b80af52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCard_vue_vue_type_template_id_0b80af52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/components/StoryTimelineComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/StoryTimelineComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StoryTimelineComponent_vue_vue_type_template_id_3ffb4cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoryTimelineComponent.vue?vue&type=template&id=3ffb4cbe&scoped=true& */ "./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=template&id=3ffb4cbe&scoped=true&");
/* harmony import */ var _StoryTimelineComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoryTimelineComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StoryTimelineComponent_vue_vue_type_style_index_0_id_3ffb4cbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true& */ "./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StoryTimelineComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StoryTimelineComponent_vue_vue_type_template_id_3ffb4cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StoryTimelineComponent_vue_vue_type_template_id_3ffb4cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ffb4cbe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/StoryTimelineComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StoryTimelineComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_style_index_0_id_3ffb4cbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=style&index=0&id=3ffb4cbe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_style_index_0_id_3ffb4cbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_style_index_0_id_3ffb4cbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_style_index_0_id_3ffb4cbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_sass_loader_dist_cjs_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_style_index_0_id_3ffb4cbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=template&id=3ffb4cbe&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=template&id=3ffb4cbe&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_template_id_3ffb4cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StoryTimelineComponent.vue?vue&type=template&id=3ffb4cbe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StoryTimelineComponent.vue?vue&type=template&id=3ffb4cbe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_template_id_3ffb4cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoryTimelineComponent_vue_vue_type_template_id_3ffb4cbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Timeline.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/Timeline.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timeline_vue_vue_type_template_id_40ef44f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline.vue?vue&type=template&id=40ef44f8&scoped=true& */ "./resources/assets/js/components/Timeline.vue?vue&type=template&id=40ef44f8&scoped=true&");
/* harmony import */ var _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Timeline_vue_vue_type_style_index_0_id_40ef44f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css& */ "./resources/assets/js/components/Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timeline_vue_vue_type_template_id_40ef44f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Timeline_vue_vue_type_template_id_40ef44f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40ef44f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Timeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Timeline.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/Timeline.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_40ef44f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Timeline.vue?vue&type=style&index=0&id=40ef44f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_40ef44f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_40ef44f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_40ef44f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_40ef44f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/Timeline.vue?vue&type=template&id=40ef44f8&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Timeline.vue?vue&type=template&id=40ef44f8&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_40ef44f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=template&id=40ef44f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Timeline.vue?vue&type=template&id=40ef44f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_40ef44f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_40ef44f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/partials/CommentCard.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/partials/CommentCard.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentCard_vue_vue_type_template_id_4c9a67ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentCard.vue?vue&type=template&id=4c9a67ee&scoped=true& */ "./resources/assets/js/components/partials/CommentCard.vue?vue&type=template&id=4c9a67ee&scoped=true&");
/* harmony import */ var _CommentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentCard.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/partials/CommentCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CommentCard_vue_vue_type_style_index_0_id_4c9a67ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css& */ "./resources/assets/js/components/partials/CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CommentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentCard_vue_vue_type_template_id_4c9a67ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CommentCard_vue_vue_type_template_id_4c9a67ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c9a67ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/partials/CommentCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/partials/CommentCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/CommentCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/CommentCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/partials/CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_style_index_0_id_4c9a67ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/CommentCard.vue?vue&type=style&index=0&id=4c9a67ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_style_index_0_id_4c9a67ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_style_index_0_id_4c9a67ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_style_index_0_id_4c9a67ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_style_index_0_id_4c9a67ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/partials/CommentCard.vue?vue&type=template&id=4c9a67ee&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/CommentCard.vue?vue&type=template&id=4c9a67ee&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_template_id_4c9a67ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentCard.vue?vue&type=template&id=4c9a67ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/CommentCard.vue?vue&type=template&id=4c9a67ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_template_id_4c9a67ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentCard_vue_vue_type_template_id_4c9a67ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/timeline.js":
/*!*****************************************!*\
  !*** ./resources/assets/js/timeline.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('notification-card', __webpack_require__(/*! ./components/NotificationCard.vue */ "./resources/assets/js/components/NotificationCard.vue")["default"]);
Vue.component('photo-presenter', __webpack_require__(/*! ./components/presenter/PhotoPresenter.vue */ "./resources/assets/js/components/presenter/PhotoPresenter.vue")["default"]);
Vue.component('video-presenter', __webpack_require__(/*! ./components/presenter/VideoPresenter.vue */ "./resources/assets/js/components/presenter/VideoPresenter.vue")["default"]);
Vue.component('photo-album-presenter', __webpack_require__(/*! ./components/presenter/PhotoAlbumPresenter.vue */ "./resources/assets/js/components/presenter/PhotoAlbumPresenter.vue")["default"]);
Vue.component('video-album-presenter', __webpack_require__(/*! ./components/presenter/VideoAlbumPresenter.vue */ "./resources/assets/js/components/presenter/VideoAlbumPresenter.vue")["default"]);
Vue.component('mixed-album-presenter', __webpack_require__(/*! ./components/presenter/MixedAlbumPresenter.vue */ "./resources/assets/js/components/presenter/MixedAlbumPresenter.vue")["default"]);
Vue.component('post-menu', __webpack_require__(/*! ./components/PostMenu.vue */ "./resources/assets/js/components/PostMenu.vue")["default"]);
Vue.component('timeline', __webpack_require__(/*! ./components/Timeline.vue */ "./resources/assets/js/components/Timeline.vue")["default"]);
Vue.component('announcements-card', __webpack_require__(/*! ./components/AnnouncementsCard.vue */ "./resources/assets/js/components/AnnouncementsCard.vue")["default"]);
Vue.component('story-component', __webpack_require__(/*! ./components/StoryTimelineComponent.vue */ "./resources/assets/js/components/StoryTimelineComponent.vue")["default"]);

/***/ }),

/***/ 6:
/*!***********************************************!*\
  !*** multi ./resources/assets/js/timeline.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/johnmoe/pixelfed_0_11_1/resources/assets/js/timeline.js */"./resources/assets/js/timeline.js");


/***/ })

},[[6,"/js/manifest"]]]);