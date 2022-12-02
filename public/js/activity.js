(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/activity"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Activity.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Activity.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notifications: {},
      notificationCursor: 2,
      notificationMaxId: 0
    };
  },
  mounted: function mounted() {
    this.fetchNotifications();
  },
  updated: function updated() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  methods: {
    fetchNotifications: function fetchNotifications() {
      var _this = this;

      axios.get('/api/pixelfed/v1/accounts/verify_credentials').then(function (res) {
        window._sharedData.curUser = res.data;
        window.App.util.navatar();
      });
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
        var ids = res.data.map(function (n) {
          return n.id;
        });
        _this.notificationMaxId = Math.max.apply(Math, _toConsumableArray(ids));
        _this.notifications = data;
        $('.notification-card .loader').addClass('d-none');
        $('.notification-card .contents').removeClass('d-none');
      });
    },
    infiniteNotifications: function infiniteNotifications($state) {
      var _this2 = this;

      if (this.notificationCursor > 10) {
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
      var date = Date.parse(ts);
      var seconds = Math.floor((new Date() - date) / 1000);
      var interval = Math.floor(seconds / 31536000);

      if (interval >= 1) {
        return interval + "y";
      }

      interval = Math.floor(seconds / 604800);

      if (interval >= 1) {
        return interval + "w";
      }

      interval = Math.floor(seconds / 86400);

      if (interval >= 1) {
        return interval + "d";
      }

      interval = Math.floor(seconds / 3600);

      if (interval >= 1) {
        return interval + "h";
      }

      interval = Math.floor(seconds / 60);

      if (interval >= 1) {
        return interval + "m";
      }

      return Math.floor(seconds) + "s";
    },
    mentionUrl: function mentionUrl(status) {
      var username = status.account.username;
      var id = status.id;
      return '/p/' + username + '/' + id;
    },
    followProfile: function followProfile(n) {
      var self = this;
      var id = n.account.id;
      axios.post('/i/follow', {
        item: id
      }).then(function (res) {
        self.notifications.map(function (notification) {
          if (notification.account.id === id) {
            notification.relationship.following = true;
          }
        });
      })["catch"](function (err) {
        if (err.response.data.message) {
          swal('Error', err.response.data.message, 'error');
        }
      });
    },
    viewContext: function viewContext(n) {
      switch (n.type) {
        case 'follow':
          return n.account.url;
          break;

        case 'mention':
          return n.status.url;
          break;

        case 'like':
        case 'favourite':
        case 'comment':
          return n.status.url;
          break;

        case 'tagged':
          return n.tagged.post_url;
          break;

        case 'direct':
          return '/account/direct/t/' + n.account.id;
          break;
      }

      return '/';
    },
    getProfileUrl: function getProfileUrl(account) {
      if (account.local == true) {
        return account.url;
      }

      return '/i/web/profile/_/' + account.id;
    },
    getPostUrl: function getPostUrl(status) {
      if (status.local == true) {
        return status.url;
      }

      return '/i/web/post/_/' + status.account.id + '/' + status.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row my-5" }, [
        _c(
          "div",
          { staticClass: "col-12 col-md-8 offset-md-2" },
          [
            _vm._l(_vm.notifications, function(n, index) {
              return _vm.notifications.length > 0
                ? _c(
                    "div",
                    {
                      staticClass:
                        "media mb-3 align-items-center px-3 border-bottom pb-3"
                    },
                    [
                      _c("img", {
                        staticClass: "mr-2 rounded-circle",
                        staticStyle: { border: "1px solid #ccc" },
                        attrs: {
                          src: n.account.avatar,
                          alt: "",
                          width: "32px",
                          height: "32px"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "media-body font-weight-light" },
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
                                        href: _vm.getProfileUrl(n.account),
                                        "data-placement": "bottom",
                                        "data-toggle": "tooltip",
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
                                          )
                                      )
                                    ]
                                  ),
                                  _vm._v(" liked your "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { href: _vm.getPostUrl(n.status) }
                                    },
                                    [_vm._v("post")]
                                  ),
                                  _vm._v(".\n\t\t\t\t\t\t\t")
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
                                        href: _vm.getProfileUrl(n.account),
                                        "data-placement": "bottom",
                                        "data-toggle": "tooltip",
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
                                          )
                                      )
                                    ]
                                  ),
                                  _vm._v(" commented on your "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { href: _vm.getPostUrl(n.status) }
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
                                        href: _vm.getProfileUrl(n.account),
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
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
                                        href: _vm.getProfileUrl(n.account),
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
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
                                          "/account/direct/t/" + n.account.id
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
                                        href: _vm.getProfileUrl(n.account),
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
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
                                          "/account/direct/t/" + n.account.id
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
                                        href: _vm.getProfileUrl(n.account),
                                        "data-placement": "bottom",
                                        "data-toggle": "tooltip",
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
                                          )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { href: _vm.mentionUrl(n.status) }
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
                                        href: _vm.getProfileUrl(n.account),
                                        "data-placement": "bottom",
                                        "data-toggle": "tooltip",
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
                                          )
                                      )
                                    ]
                                  ),
                                  _vm._v(" followed you.\n\t\t\t\t\t\t\t")
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
                                        href: _vm.getProfileUrl(n.account),
                                        "data-placement": "bottom",
                                        "data-toggle": "tooltip",
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
                                          )
                                      )
                                    ]
                                  ),
                                  _vm._v(" shared your "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { href: _vm.getPostUrl(n.status) }
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
                                        href: _vm.getProfileUrl(n.account),
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.truncate(n.account.username))
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
                                        href: _vm.getProfileUrl(n.account),
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
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
                                        href: _vm.getProfileUrl(n.account),
                                        title: n.account.username
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          n.account.local == false ? "@" : ""
                                        ) +
                                          _vm._s(
                                            _vm.truncate(n.account.username)
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
                                          "/account/direct/t/" + n.account.id
                                      }
                                    },
                                    [_vm._v("dm")]
                                  ),
                                  _vm._v(".\n\t\t\t\t\t\t")
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "align-items-center" }, [
                            _c(
                              "span",
                              {
                                staticClass: "small text-muted",
                                attrs: {
                                  "data-toggle": "tooltip",
                                  "data-placement": "bottom",
                                  title: n.created_at
                                }
                              },
                              [_vm._v(_vm._s(_vm.timeAgo(n.created_at)))]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", [
                        n.status &&
                        n.status &&
                        n.status.media_attachments &&
                        n.status.media_attachments.length
                          ? _c("div", [
                              _c(
                                "a",
                                { attrs: { href: _vm.getPostUrl(n.status) } },
                                [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        n.status.media_attachments[0]
                                          .preview_url,
                                      width: "32px",
                                      height: "32px"
                                    }
                                  })
                                ]
                              )
                            ])
                          : n.status &&
                            n.status.parent &&
                            n.status.parent.media_attachments &&
                            n.status.parent.media_attachments.length
                          ? _c("div", [
                              _c(
                                "a",
                                { attrs: { href: n.status.parent.url } },
                                [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        n.status.parent.media_attachments[0]
                                          .preview_url,
                                      width: "32px",
                                      height: "32px"
                                    }
                                  })
                                ]
                              )
                            ])
                          : _c("div", [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-outline-primary py-0 font-weight-bold",
                                  attrs: { href: _vm.viewContext(n) }
                                },
                                [_vm._v("View")]
                              )
                            ])
                      ])
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
              ? _c("div", { staticClass: "text-lighter text-center py-3" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0 small font-weight-bold" }, [
                    _vm._v("0 Notifications!")
                  ])
                ])
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("i", { staticClass: "fas fa-inbox fa-3x" })
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

/***/ "./resources/assets/js/activity.js":
/*!*****************************************!*\
  !*** ./resources/assets/js/activity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('activity-component', __webpack_require__(/*! ./components/Activity.vue */ "./resources/assets/js/components/Activity.vue")["default"]);

/***/ }),

/***/ "./resources/assets/js/components/Activity.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/Activity.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Activity_vue_vue_type_template_id_4a9a4cc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Activity.vue?vue&type=template&id=4a9a4cc6& */ "./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6&");
/* harmony import */ var _Activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Activity.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Activity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Activity_vue_vue_type_template_id_4a9a4cc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Activity_vue_vue_type_template_id_4a9a4cc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Activity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Activity.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/Activity.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Activity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Activity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_template_id_4a9a4cc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Activity.vue?vue&type=template&id=4a9a4cc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Activity.vue?vue&type=template&id=4a9a4cc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_template_id_4a9a4cc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Activity_vue_vue_type_template_id_4a9a4cc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!***********************************************!*\
  !*** multi ./resources/assets/js/activity.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/johnmoe/pixelfed_0_11_1/resources/assets/js/activity.js */"./resources/assets/js/activity.js");


/***/ })

},[[1,"/js/manifest"]]]);