webpackJsonp([0], [, function (t, e, i) {
  function s(t) {
    i(66)
  }
  var n = i(0)(null, i(42), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(60)
  }
  var n = i(0)(null, i(36), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(69)
  }
  var n = i(0)(null, i(45), s, null, null);
  t.exports = n.exports
}, , , , function (t, e, i) {
  function s(t) {
    i(63)
  }
  var n = i(0)(i(88), i(39), s, null, null);
  t.exports = n.exports
}, function (t, e) {}, , function (t, e, i) {
  "use strict";
  (function () {
    var t, e, i, s, n, o, a, r, d, l;
    t = window.device, window.device = {}, i = window.document.documentElement, l = window.navigator.userAgent.toLowerCase(), device.ios = function () {
      return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function () {
      return s("iphone")
    }, device.ipod = function () {
      return s("ipod")
    }, device.ipad = function () {
      return s("ipad")
    }, device.android = function () {
      return s("android")
    }, device.androidPhone = function () {
      return device.android() && s("mobile")
    }, device.androidTablet = function () {
      return device.android() && !s("mobile")
    }, device.blackberry = function () {
      return s("blackberry") || s("bb10") || s("rim")
    }, device.blackberryPhone = function () {
      return device.blackberry() && !s("tablet")
    }, device.blackberryTablet = function () {
      return device.blackberry() && s("tablet")
    }, device.windows = function () {
      return s("windows")
    }, device.windowsPhone = function () {
      return device.windows() && s("phone")
    }, device.windowsTablet = function () {
      return device.windows() && s("touch")
    }, device.fxos = function () {
      return (s("(mobile;") || s("(tablet;")) && s("; rv:")
    }, device.fxosPhone = function () {
      return device.fxos() && s("mobile")
    }, device.fxosTablet = function () {
      return device.fxos() && s("tablet")
    }, device.meego = function () {
      return s("meego")
    }, device.mobile = function () {
      return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego()
    }, device.tablet = function () {
      return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.portrait = function () {
      return 90 !== Math.abs(window.orientation)
    }, device.landscape = function () {
      return 90 === Math.abs(window.orientation)
    }, device.noConflict = function () {
      return window.device = t, this
    }, s = function (t) {
      return -1 !== l.indexOf(t)
    }, o = function (t) {
      var e;
      return e = new RegExp(t, "i"), i.className.match(e)
    }, e = function (t) {
      if (!o(t)) return i.className += " " + t
    }, r = function (t) {
      if (o(t)) return i.className = i.className.replace(t, "")
    }, device.ios() ? device.ipad() ? e("ios ipad tablet") : device.iphone() ? e("ios iphone mobile") : device.ipod() && e("ios ipod mobile") : e(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : "desktop"), n = function () {
      return device.landscape() ? (r("portrait"), e("landscape")) : (r("landscape"), e("portrait"))
    }, d = "onorientationchange" in window, a = d ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, n, !1) : window.attachEvent ? window.attachEvent(a, n) : window[a] = n, n()
  }).call(this), e.a = {
    install: function (t) {
      t.prototype.statistics = function (t, e, i) {
        function s() {
          var t = navigator.userAgent,
            e = "Win32" == navigator.platform || "Windows" == navigator.platform,
            i = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
          if (i) return "Mac";
          if ("X11" == navigator.platform && !e && !i) return "Unix";
          if (String(navigator.platform).indexOf("Linux") > -1) return "Linux";
          if (e) {
            if (t.indexOf("Windows NT 5.0") > -1 || t.indexOf("Windows 2000") > -1) return "Win2000";
            if (t.indexOf("Windows NT 5.1") > -1 || t.indexOf("Windows XP") > -1) return "WinXP";
            if (t.indexOf("Windows NT 5.2") > -1 || t.indexOf("Windows 2003") > -1) return "Win2003";
            if (t.indexOf("Windows NT 6.0") > -1 || t.indexOf("Windows Vista") > -1) return "WinVista";
            if (t.indexOf("Windows NT 6.1") > -1 || t.indexOf("Windows 7") > -1) return "Win7"
          }
          return "other"
        }
        var n = returnCitySN.cip,
          o = returnCitySN.cname,
          a = window.location.href,
          r = a.split("/"),
          d = r[r.length - 1],
          l = d.substring(0, 3),
          c = d.substring(3, 7),
          u = d.substring(7, 11),
          m = t,
          h = "",
          v = "",
          g = document.referrer,
          e = e,
          i = i,
          f = "",
          p = device.mobile(),
          w = device.tablet();
        return p || w ? device.android() ? (h = "瀹夊崜", v = "瀹夊崜") : device.ipad() ? (h = "iOS骞虫澘", v = "iOS") : device.iphone() && (h = "iOS鎵嬫満", v = "iOS") : (device.windows(), h = "PC绔�", v = s()), f = function () {
          var t = "",
            e = localStorage.getItem("ZULONGADUSERCODE"),
            i = (new Date).getTime();
          return void 0 === e || null === e ? (t = l + c + u + m + i, localStorage.setItem("ZULONGADUSERCODE", t)) : t = e, e
        }(), "|" + l + "|" + c + "|" + u + "|" + m + "|" + h + "|" + v + "|" + g + "|" + a + "|" + e + "|" + i + "|" + n + "|" + o + "|" + f
      }
    }
  }
}, function (t, e, i) {
  "use strict";
  var s = i(4),
    n = i(83),
    o = i(32),
    a = i.n(o);
  s.a.use(n.a);
  var r = [{
    path: "/media/:id",
    component: a.a
  }, {
    path: "/",
    redirect: "/media"
  }];
  e.a = new n.a({
    routes: r
  })
}, , function (t, e, i) {
  t.exports = i.p + "static/img/w_bg.1456072.jpg"
}, function (t, e, i) {
  var s = i(0)(i(86), i(35), null, null, null);
  t.exports = s.exports
}, function (t, e, i) {
  var s = i(0)(i(87), i(49), null, null, null);
  t.exports = s.exports
}, function (t, e, i) {
  function s(t) {
    i(72)
  }
  var n = i(0)(i(89), i(47), s, "data-v-4178dffc", null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(70), i(71)
  }
  var n = i(0)(i(96), i(46), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(77)
  }
  var n = i(0)(i(90), i(54), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(64)
  }
  var n = i(0)(null, i(40), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(82)
  }
  var n = i(0)(i(91), i(59), s, "data-v-fe43a386", null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(79)
  }
  var n = i(0)(i(97), i(56), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(68)
  }
  var n = i(0)(i(98), i(44), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(76)
  }
  var n = i(0)(i(92), i(53), s, "data-v-791f7945", null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(62)
  }
  var n = i(0)(i(99), i(38), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(74)
  }
  var n = i(0)(i(100), i(50), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(78)
  }
  var n = i(0)(i(93), i(55), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(80)
  }
  var n = i(0)(null, i(57), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(75)
  }
  var n = i(0)(null, i(52), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(61)
  }
  var n = i(0)(i(94), i(37), s, "data-v-0c028113", null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(73)
  }
  var n = i(0)(i(101), i(48), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(67)
  }
  var n = i(0)(null, i(43), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  var s = i(0)(i(95), i(51), null, null, null);
  t.exports = s.exports
}, function (t, e, i) {
  function s(t) {
    i(81)
  }
  var n = i(0)(i(102), i(58), s, null, null);
  t.exports = n.exports
}, function (t, e, i) {
  function s(t) {
    i(65)
  }
  var n = i(0)(i(103), i(41), s, null, null);
  t.exports = n.exports
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement;
      return (t._self._c || e)("div", {
        class: t.slideClass
      }, [t._t("default")], 2)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement;
      t._self._c;
      return t._m(0)
    },
    staticRenderFns: [function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "footer1"
      }, [i("img", {
        attrs: {
          src: "https://res.zulong.com/cms/media/img/zulongLogo.png",
          alt: "绁栭緳logo"
        }
      }), t._v(" "), i("p", [t._v("ICP璇侊細鑻廈2-20170293 鑻廔CP澶�16056124鍙� \n        "), i("br"), t._v("鑻忕綉鏂嘯2017]3391-077鍙穃n        "), i("br"), t._v("鏂囩綉娓稿瀛椼€�2016銆曪辑-CSG 6101 鍙穃n        "), i("br"), t._v("娣畨绁栭緳绉戞妧鏈夐檺鍏徃 鐗堟潈鎵€鏈塡n        ")])])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "banner"
      }, [i("div", {
        staticClass: "swiper-inner"
      }, [i("swiper", {
        attrs: {
          options: t.swiperOption
        }
      }, [t._l(t.swipeData, function (t, e) {
        return i("swiper-slide", {
          key: e,
          style: {
            backgroundImage: t
          }
        })
      }), t._v(" "), i("div", {
        staticClass: "swiper-pagination",
        slot: "pagination"
      }), t._v(" "), i("div", {
        staticClass: "swiper-button-prev",
        slot: "button-prev"
      }), t._v(" "), i("div", {
        staticClass: "swiper-button-next",
        slot: "button-next"
      })], 2)], 1)])
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "flightLong"
      }, [i("div", {
        staticClass: "top"
      }, [i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("div", {
        staticClass: "mid"
      }, [i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("div", {
        staticClass: "bottom"
      }, [i("img", {
        attrs: {
          src: "https://res.zulong.com/cms/media/img/flightLong/title2.png",
          alt: "鏍囬"
        }
      }), t._v(" "), i("v-banner")], 1), t._v(" "), i("v-footer", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer,
          expression: "footer"
        }]
      }), t._v(" "), i("v-footer2", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer2,
          expression: "footer2"
        }]
      })], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        attrs: {
          id: "app"
        }
      }, [i("router-view")], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement;
      t._self._c;
      return t._m(0)
    },
    staticRenderFns: [function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "introduce"
      }, [i("div", {
        staticClass: "speak1"
      }, [i("img", {
        staticClass: "icon",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/icon.jpg",
          alt: "icon"
        }
      }), t._v(" "), i("div", {
        staticClass: "title"
      }, [i("p", {
        staticClass: "name"
      }, [t._v("涔濆窞澶╃┖鍩庢墜娓�")]), t._v(" "), i("div", [i("img", {
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/start.png",
          alt: "鏄熸槦"
        }
      }), t._v(" "), i("span", [t._v("锛�91221锛�")])]), t._v(" "), i("p", {
        staticClass: "downNumber"
      }, [t._v("2,513,114娆′笅杞�")])]), t._v(" "), i("div", {
        staticClass: "left"
      }, [i("p", [t._v("璇勫垎")]), t._v(" "), i("p", [t._v("9.8")])])]), t._v(" "), i("div", {
        staticClass: "speak2"
      })])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "threeLife"
      }, [i("div", {
        staticClass: "main"
      }, [i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("v-share", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.shareShow,
          expression: "shareShow"
        }]
      }), t._v(" "), i("v-footer", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer,
          expression: "footer"
        }]
      }), t._v(" "), i("v-footer2", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer2,
          expression: "footer2"
        }]
      })], 1)
    },
    staticRenderFns: []
  }
}, function (t, e, i) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement;
      t._self._c;
      return t._m(0)
    },
    staticRenderFns: [function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("div", {
        staticClass: "share"
      }, [s("div", {
        staticClass: "weixin-tip "
      }, [s("p", [s("img", {
        attrs: {
          src: i(13),
          alt: "寰俊鎵撳紑 "
        }
      })])])])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement;
      t._self._c;
      return t._m(0)
    },
    staticRenderFns: [function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "spinner"
      }, [i("div", {
        staticClass: "spinner-container container1"
      }, [i("div", {
        staticClass: "circle1"
      }), t._v(" "), i("div", {
        staticClass: "circle2"
      }), t._v(" "), i("div", {
        staticClass: "circle3"
      }), t._v(" "), i("div", {
        staticClass: "circle4"
      })]), t._v(" "), i("div", {
        staticClass: "spinner-container container2"
      }, [i("div", {
        staticClass: "circle1"
      }), t._v(" "), i("div", {
        staticClass: "circle2"
      }), t._v(" "), i("div", {
        staticClass: "circle3"
      }), t._v(" "), i("div", {
        staticClass: "circle4"
      })]), t._v(" "), i("div", {
        staticClass: "spinner-container container3"
      }, [i("div", {
        staticClass: "circle1"
      }), t._v(" "), i("div", {
        staticClass: "circle2"
      }), t._v(" "), i("div", {
        staticClass: "circle3"
      }), t._v(" "), i("div", {
        staticClass: "circle4"
      })])])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "fierce"
      }, [i("div", {
        staticClass: "main"
      }, [i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("v-share", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.shareShow,
          expression: "shareShow"
        }]
      }), t._v(" "), i("v-footer", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer,
          expression: "footer"
        }]
      }), t._v(" "), i("v-footer2", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer2,
          expression: "footer2"
        }]
      })], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement;
      t._self._c;
      return t._m(0)
    },
    staticRenderFns: [function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "footer"
      }, [i("img", {
        attrs: {
          src: "https://res.zulong.com/cms/media/img/zulongLogo.png",
          alt: "绁栭緳logo"
        }
      }), t._v(" "), i("p", [t._v("ICP璇侊細娲2-20160001 娲CP澶�15004259鍙�-2"), i("br"), t._v("鏂囩綉娓稿瀛椼€�2016銆曪辑-CSG 6101 鍙�"), i("br"), t._v("绁栭緳锛堝ぉ娲ワ級绉戞妧鏈夐檺鍏徃 鐗堟潈鎵€鏈塡n        ")])])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "comment"
      }, [i("v-share", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.shareShow,
          expression: "shareShow"
        }]
      }), t._v(" "), i("v-banner"), t._v(" "), i("v-introduce"), t._v(" "), i("v-discuss"), t._v(" "), i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      }, [t._v("\n\t\t鍏嶈垂涓嬭浇\n\t")]), t._v(" "), i("v-footer", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer2,
          expression: "footer2"
        }]
      }), t._v(" "), i("v-footer2", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer2,
          expression: "footer2"
        }]
      })], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "banner"
      }, [i("div", {
        staticClass: "swiper-inner"
      }, [i("swiper", {
        attrs: {
          options: t.swiperOption
        }
      }, [t._l(t.swipeData, function (t, e) {
        return i("swiper-slide", {
          key: e,
          style: {
            backgroundImage: t
          }
        })
      }), t._v(" "), i("div", {
        staticClass: "swiper-pagination",
        slot: "pagination"
      })], 2)], 1)])
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "lifeLong"
      }, [i("div", {
        staticClass: "top"
      }, [i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("div", {
        staticClass: "mid"
      }, [i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("div", {
        staticClass: "bottom"
      }, [i("img", {
        attrs: {
          src: "https://res.zulong.com/cms/media/img/flightLong/title2.png",
          alt: "鏍囬"
        }
      }), t._v(" "), i("v-banner")], 1), t._v(" "), i("v-footer", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer,
          expression: "footer"
        }]
      }), t._v(" "), i("v-footer2", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer2,
          expression: "footer2"
        }]
      })], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "swiper-container"
      }, [t._t("parallax-bg"), t._v(" "), i("div", {
        class: t.defaultSwiperClasses.wrapperClass
      }, [t._t("default")], 2), t._v(" "), t._t("pagination"), t._v(" "), t._t("button-prev"), t._v(" "), t._t("button-next"), t._v(" "), t._t("scrollbar")], 2)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "flight"
      }, [i("div", {
        staticClass: "main"
      }, [i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("v-share", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.shareShow,
          expression: "shareShow"
        }]
      }), t._v(" "), i("v-footer", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer,
          expression: "footer"
        }]
      }), t._v(" "), i("v-footer2", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer2,
          expression: "footer2"
        }]
      })], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "main"
      }, [t.m14 ? i("v-icondownload", {
        attrs: {
          ios: t.ios,
          and: t.and
        }
      }) : t._e(), t._v(" "), t.m13 ? i("v-lifelong", {
        attrs: {
          ios: t.ios,
          and: t.and
        }
      }) : t._e(), t._v(" "), t.m11 ? i("v-fiercelong", {
        attrs: {
          ios: t.ios,
          and: t.and
        }
      }) : t._e(), t._v(" "), t.m9 ? i("v-filghtlong", {
        attrs: {
          ios: t.ios,
          and: t.and
        }
      }) : t._e(), t._v(" "), t.m10 ? i("v-fierce", {
        attrs: {
          ios: t.ios,
          and: t.and
        }
      }) : t._e(), t._v(" "), t.m8 ? i("v-flight", {
        attrs: {
          ios: t.ios,
          and: t.and
        }
      }) : t._e(), t._v(" "), t.m12 ? i("v-threelife", {
        attrs: {
          ios: t.ios,
          and: t.and
        }
      }) : t._e(), t._v(" "), t.m7 ? i("v-comment", {
        attrs: {
          ios: t.ios,
          and: t.and
        }
      }) : t._e(), t._v(" "), t.err ? i("v-person") : t._e(), t._v(" "), i("v-load", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.loadShow,
          expression: "loadShow"
        }]
      })], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement;
      t._self._c;
      return t._m(0)
    },
    staticRenderFns: [function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "iconPC"
      }, [i("img", {
        staticClass: "icon",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/icon.jpg",
          alt: "icon"
        }
      }), t._v(" "), i("div", {
        staticClass: "divider2"
      }), t._v(" "), i("p", {
        staticClass: "text"
      }, [t._v("姝ｅ湪杞悜涓嬭浇锛岃绋嶇瓑......")])])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "banner"
      }, [i("div", {
        staticClass: "swiper-inner"
      }, [i("swiper", {
        attrs: {
          options: t.swiperOption
        }
      }, [t._l(t.swipeData, function (t, e) {
        return i("swiper-slide", {
          key: e,
          style: {
            backgroundImage: t
          }
        })
      }), t._v(" "), i("div", {
        staticClass: "swiper-pagination",
        slot: "pagination"
      }), t._v(" "), i("div", {
        staticClass: "swiper-button-prev",
        slot: "button-prev"
      }), t._v(" "), i("div", {
        staticClass: "swiper-button-next",
        slot: "button-next"
      })], 2)], 1)])
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "discuss"
      }, [t._m(0), t._v(" "), i("div", {
        staticClass: "discuss1"
      }, [i("div", {
        staticClass: "top"
      }, [t._m(1), t._v(" "), i("div", {
        staticClass: "right"
      }, [i("span", {
        staticClass: "number"
      }, [t._v("125375")]), t._v(" "), i("vue-star", {
        attrs: {
          animate: "animated bounceIn",
          color: "#F05654"
        }
      }, [i("i", {
        staticClass: "fa fa-thumbs-up fa-2x",
        slot: "icon"
      })])], 1)]), t._v(" "), i("p", {
        staticClass: "bottom"
      }, [t._v("\n\t\t\t鍦ㄧ敾闈笂锛岀収椤惧湴闈炲父鍏ㄩ潰銆備笉绠℃槸浜虹墿缁嗚妭锛岃繕鏄笘鐣岀幆澧冪粏鑺傞兘鏄浉褰撻珮銆俓n\t\t")])]), t._v(" "), i("div", {
        staticClass: "discuss1"
      }, [i("div", {
        staticClass: "top"
      }, [t._m(2), t._v(" "), i("div", {
        staticClass: "right"
      }, [i("span", {
        staticClass: "number"
      }, [t._v("560033")]), t._v(" "), i("vue-star", {
        attrs: {
          animate: "animated bounceIn",
          color: "#F05654"
        }
      }, [i("i", {
        staticClass: "fa fa-thumbs-up fa-2x",
        slot: "icon"
      })])], 1)]), t._v(" "), i("p", {
        staticClass: "bottom"
      }, [t._v("\n\t\t\t娓告垙涔熸槸鐢熸椿锛屼節宸炲ぉ绌哄煄涓嶄粎鑳界珯鐨勭埥蹇紝浼戦棽鐜╂硶涔熷緢澶氥€傚府浼氬湪涓€璧峰氨鍍忎釜澶у搴€俓n\t\t")])]), t._v(" "), i("div", {
        staticClass: "discuss1"
      }, [i("div", {
        staticClass: "top"
      }, [t._m(3), t._v(" "), i("div", {
        staticClass: "right"
      }, [i("span", {
        staticClass: "number"
      }, [t._v("445693")]), t._v(" "), i("vue-star", {
        attrs: {
          animate: "animated bounceIn",
          color: "#F05654"
        }
      }, [i("i", {
        staticClass: "fa fa-thumbs-up fa-2x",
        slot: "icon"
      })])], 1)]), t._v(" "), i("p", {
        staticClass: "bottom"
      }, [t._v("\n\t\t\t涓婄彮璺笂鍒锋柊闂荤湅鍒扮殑锛岀‘瀹炵帺寰楃壒鍒垝蹇冿紝涓€姝ユ鐪嬬潃鑷繁鐜╃殑涓昏鎴愰暱璧锋潵杩樻槸鎸烘湁鑷豹鎰熺殑锛乗n\t\t")])]), t._v(" "), i("div", {
        staticClass: "discuss1"
      }, [i("div", {
        staticClass: "top"
      }, [t._m(4), t._v(" "), i("div", {
        staticClass: "right"
      }, [i("span", {
        staticClass: "number"
      }, [t._v("75462")]), t._v(" "), i("vue-star", {
        attrs: {
          animate: "animated bounceIn",
          color: "#F05654"
        }
      }, [i("i", {
        staticClass: "fa fa-thumbs-up fa-2x",
        slot: "icon"
      })])], 1)]), t._v(" "), i("p", {
        staticClass: "bottom"
      }, [t._v("\n\t\t\t杩欎釜娓告垙闈炲父涓嶉敊锛孭K璧锋潵杩樻槸闇€瑕佷竴瀹氱殑鎶€宸х殑锛屾瘡涓鑹茬殑鎬ф牸鍜岃嚜宸辩殑澶栬閮藉鐨勪笂锛岃鑹插埢鐢荤殑闈炲父涓版弧锛屾垬鏂楃殑鏃跺€欒繕鏄潪甯哥埥鐨勩€俓n\t\t")])])])
    },
    staticRenderFns: [function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "title"
      }, [i("span"), t._v(" "), i("span", [t._v("鐑棬璇勮")])])
    }, function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "left"
      }, [i("img", {
        staticClass: "icon",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/icon_1.png",
          height: "38",
          width: "38",
          alt: "icon"
        }
      }), t._v(" "), i("span", [t._v("\n\t\t\t\t\t鎴樻枟鐙傞瓟\n\t\t\t\t")]), t._v(" "), i("img", {
        staticClass: "star",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/start.png",
          height: "8",
          width: "55",
          alt: "鏄熸槦"
        }
      })])
    }, function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "left"
      }, [i("img", {
        staticClass: "icon",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/icon_2.png",
          height: "38",
          width: "38",
          alt: "icon"
        }
      }), t._v(" "), i("span", [t._v("\n\t\t\t\t\t绫冲叞鐨勫皬閾佸尃\n\t\t\t\t")]), t._v(" "), i("img", {
        staticClass: "star",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/start.png",
          height: "8",
          width: "55",
          alt: "鏄熸槦"
        }
      })])
    }, function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "left"
      }, [i("img", {
        staticClass: "icon",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/icon_3.png",
          height: "38",
          width: "38",
          alt: "icon"
        }
      }), t._v(" "), i("span", [t._v("\n\t\t\t\t\t璇峰彨鎴戝厜鏉嗗府涓籠n\t\t\t\t")]), t._v(" "), i("img", {
        staticClass: "star",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/start.png",
          height: "8",
          width: "55",
          alt: "鏄熸槦"
        }
      })])
    }, function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "left"
      }, [i("img", {
        staticClass: "icon",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/icon_4.png",
          height: "38",
          width: "38",
          alt: "icon"
        }
      }), t._v(" "), i("span", [t._v("\n\t\t\t\t\t绫冲叞鐨勫皬閾佸尃\n\t\t\t\t")]), t._v(" "), i("img", {
        staticClass: "star",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/start.png",
          height: "8",
          width: "55",
          alt: "鏄熸槦"
        }
      })])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "iconDownLoad"
      }, [i("v-iconpc", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.pc,
          expression: "pc"
        }]
      }), t._v(" "), i("v-iconmobile", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.mobile,
          expression: "mobile"
        }]
      }), t._v(" "), i("v-share", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.shareShow,
          expression: "shareShow"
        }]
      })], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "fierceLong"
      }, [i("div", {
        staticClass: "top"
      }, [i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("div", {
        staticClass: "mid"
      }, [i("a", {
        staticClass: "download",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("div", {
        staticClass: "bottom"
      }, [i("v-banner")], 1), t._v(" "), i("v-footer", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer,
          expression: "footer"
        }]
      }), t._v(" "), i("v-footer2", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.footer2,
          expression: "footer2"
        }]
      })], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement;
      t._self._c;
      return t._m(0)
    },
    staticRenderFns: [function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "iconMobile"
      }, [i("img", {
        staticClass: "icon",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/comment/icon.jpg",
          alt: "icon"
        }
      }), t._v(" "), i("div", {
        staticClass: "divider2"
      }), t._v(" "), i("p", {
        staticClass: "text"
      }, [t._v("姝ｅ湪杞悜涓嬭浇锛岃绋嶇瓑......")])])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "person"
      }, [i("a", {
        staticClass: "link",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      }), t._v(" "), i("div", {
        staticClass: "top"
      }, [i("a", {
        staticClass: "link2",
        attrs: {
          href: t.link,
          target: "_blank"
        },
        on: {
          click: t.downLink
        }
      })]), t._v(" "), i("img", {
        staticClass: "bgTop",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/person/bg3_01.jpg",
          height: "780",
          width: "640",
          alt: "鑳屾櫙鍥�1"
        }
      }), t._v(" "), i("img", {
        staticClass: "bgMid",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/person/bg3_02.jpg",
          alt: "鑳屾櫙鍥�2"
        }
      }), t._v(" "), i("img", {
        staticClass: "bgBot",
        attrs: {
          src: "https://res.zulong.com/cms/media/img/person/bg3_03.jpg",
          alt: "鑳屾櫙鍥�3"
        }
      }), t._v(" "), i("v-share", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.shareShow,
          expression: "shareShow"
        }]
      }), t._v(" "), i("v-footer")], 1)
    },
    staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", {
        staticClass: "banner"
      }, [i("div", {
        staticClass: "swiper-inner"
      }, [i("swiper", {
        attrs: {
          options: t.swiperOption
        }
      }, [t._l(t.swipeData, function (t, e) {
        return i("swiper-slide", {
          key: e,
          style: {
            backgroundImage: t
          }
        })
      }), t._v(" "), i("div", {
        staticClass: "swiper-button-prev",
        slot: "button-prev"
      }), t._v(" "), i("div", {
        staticClass: "swiper-button-next",
        slot: "button-next"
      })], 2)], 1)])
    },
    staticRenderFns: []
  }
}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, , , , function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = {
    name: "swiper-slide",
    data: function () {
      return {
        slideClass: "swiper-slide"
      }
    },
    ready: function () {
      this.update()
    },
    mounted: function () {
      this.update(), this.$parent.options.slideClass && (this.slideClass = this.$parent.options.slideClass)
    },
    updated: function () {
      this.update()
    },
    attached: function () {
      this.update()
    },
    methods: {
      update: function () {
        this.$parent && this.$parent.swiper && this.$parent.swiper.update && (this.$parent.swiper.update(!0), this.$parent.options.loop && this.$parent.swiper.reLoop())
      }
    }
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = "undefined" != typeof window;
  s && (window.Swiper = i(5)), e.default = {
    name: "swiper",
    props: {
      options: {
        type: Object,
        default: function () {
          return {
            autoplay: 3500
          }
        }
      },
      notNextTick: {
        type: Boolean,
        default: function () {
          return !1
        }
      }
    },
    data: function () {
      return {
        defaultSwiperClasses: {
          wrapperClass: "swiper-wrapper"
        }
      }
    },
    ready: function () {
      !this.swiper && s && (this.swiper = new Swiper(this.$el, this.options))
    },
    mounted: function () {
      var t = this,
        e = function () {
          if (!t.swiper && s) {
            delete t.options.notNextTick;
            var e = !1;
            for (var i in t.defaultSwiperClasses) t.defaultSwiperClasses.hasOwnProperty(i) && t.options[i] && (e = !0, t.defaultSwiperClasses[i] = t.options[i]);
            var n = function () {
              t.swiper = new Swiper(t.$el, t.options)
            };
            e ? t.$nextTick(n) : n()
          }
        }(this.options.notNextTick || this.notNextTick) ? e() : this.$nextTick(e)
    },
    updated: function () {
      this.swiper && this.swiper.update()
    },
    beforeDestroy: function () {
      this.swiper && (this.swiper.destroy(), delete this.swiper)
    }
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = {
    name: "app",
    data: function () {
      return {}
    },
    components: {},
    methods: {},
    mounted: function () {}
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = {
    data: function () {
      return {
        swipeData: ["url(https://res.zulong.com/cms/media/img/comment/banner01.jpg)", "url(https://res.zulong.com/cms/media/img/comment/banner02.jpg)", "url(https://res.zulong.com/cms/media/img/comment/banner03.jpg)", "url(https://res.zulong.com/cms/media/img/comment/banner04.jpg)", "url(https://res.zulong.com/cms/media/img/comment/banner05.jpg)"],
        swiperOption: {
          pagination: ".swiper-pagination",
          effect: "coverflow",
          grabCursor: !0,
          centeredSlides: !0,
          slidesPerView: "auto",
          paginationClickable: !0,
          initialSlide: 2,
          loop: !0,
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        }
      }
    },
    mounted: function () {}
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(12),
    n = i.n(s);
  e.default = {
    data: function () {
      return {}
    },
    methods: {},
    components: {
      VueStar: n.a
    },
    mounted: function () {}
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = {
    data: function () {
      return {
        swipeData: ["url(https://res.zulong.com/cms/media/img/flightLong/banner1.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner2.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner3.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner4.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner5.jpg)"],
        swiperOption: {
          pagination: ".swiper-pagination",
          effect: "coverflow",
          grabCursor: !0,
          centeredSlides: !0,
          slidesPerView: "auto",
          paginationClickable: !0,
          initialSlide: 2,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          loop: !0,
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        }
      }
    },
    mounted: function () {}
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = {
    data: function () {
      return {
        swipeData: ["url(https://res.zulong.com/cms/media/img/flightLong/banner1.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner2.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner3.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner4.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner5.jpg)"],
        swiperOption: {
          pagination: ".swiper-pagination",
          effect: "coverflow",
          grabCursor: !0,
          centeredSlides: !0,
          slidesPerView: "auto",
          paginationClickable: !0,
          initialSlide: 2,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          loop: !0,
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        }
      }
    },
    mounted: function () {}
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(28),
    n = i.n(s),
    o = i(27),
    a = i.n(o),
    r = i(1),
    d = i.n(r);
  e.default = {
    data: function () {
      return {
        moduleId: 14,
        gameId: "",
        loadTime: 0,
        loadRate: 0,
        link: "",
        shareShow: !1,
        pc: !1,
        mobile: !1
      }
    },
    components: {
      "v-share": d.a,
      "v-iconmobile": a.a,
      "v-iconpc": n.a
    },
    methods: {
      is_weixin: function () {
        return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (this.link = "javascript:void(0)", !0)
      },
      downLink: function () {
        var t = device.mobile(),
          e = device.tablet();
        t || e ? (this.mobile = !0, !1 === this.is_weixin() && 1 == browser.versions.android ? window.location.href = this.and : !0 === this.is_weixin() && 1 == browser.versions.android ? this.shareShow = !0 : 1 == browser.versions.iPhone || 1 == browser.versions.iPad ? window.location.href = this.ios : (alert("鏆傛棤璇ヨ澶囨帹浠嬫偍浣跨敤瀹夊崜鍖咃紒"), window.location.href = this.and)) : (device.windows(), this.pc = !0, window.location.href = this.and);
        var i = this;
        this.initPost({
          gameId: this.gameId,
          msg: "click" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
        }), setTimeout(i.initPost({
          gameId: i.gameId,
          msg: "download" + i.statistics(i.moduleId, i.loadTime, i.loadRate)
        }), 3e3)
      },
      initPost: function (t) {
        console.log(t);
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/zlggBiLog", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0
        }).catch(function (t) {
          console.log(JSON.stringify(t))
        })
      },
      pageTime: function () {
        function t() {
          s = new Date, e.loadTime = s.getTime() - i.getTime(), e.loadRate = 1, e.initPost({
            gameId: e.gameId,
            msg: "load" + e.statistics(e.moduleId, e.loadTime, e.loadRate)
          }), clearInterval(n)
        }
        var e = this,
          i = new Date,
          s = "",
          n = setInterval(function () {
            "complete" == document.readyState && t()
          }, 500)
      }
    },
    mounted: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.initPost({
        gameId: this.gameId,
        msg: "load" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
      }), this.pageTime(), this.downLink()
    },
    props: ["ios", "and"]
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = {
    data: function () {
      return {
        swipeData: ["url(https://res.zulong.com/cms/media/img/flightLong/banner1.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner2.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner3.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner4.jpg)", "url(https://res.zulong.com/cms/media/img/flightLong/banner5.jpg)"],
        swiperOption: {
          pagination: ".swiper-pagination",
          effect: "coverflow",
          grabCursor: !0,
          centeredSlides: !0,
          slidesPerView: "auto",
          paginationClickable: !0,
          initialSlide: 2,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          loop: !0,
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        }
      }
    },
    mounted: function () {}
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(26),
    n = i.n(s),
    o = i(30),
    a = i.n(o),
    r = i(21),
    d = i.n(r),
    l = i(24),
    c = i.n(l),
    u = i(22),
    m = i.n(u),
    h = i(25),
    v = i.n(h),
    g = i(34),
    f = i.n(g),
    p = i(17),
    w = i.n(p),
    _ = i(33),
    b = i.n(_),
    I = i(31),
    k = i.n(I);
  e.default = {
    data: function () {
      return {
        gameId: "",
        mediaId: "",
        pageId: "",
        m7: !1,
        m8: !1,
        m9: !1,
        m10: !1,
        m11: !1,
        m12: !1,
        m13: !1,
        m14: !1,
        err: !1,
        ios: "",
        and: "",
        loadShow: !0
      }
    },
    methods: {
      getData: function (t) {
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/getZLggModule.do", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0, this.loadShow = !1
        }).catch(function (t) {
          this.loadShow = !1, console.log(JSON.stringify(t))
        })
      }
    },
    components: {
      "v-lifelong": a.a,
      "v-fiercelong": d.a,
      "v-filghtlong": c.a,
      "v-threelife": f.a,
      "v-flight": v.a,
      "v-comment": w.a,
      "v-person": b.a,
      "v-fierce": m.a,
      "v-load": k.a,
      "v-icondownload": n.a
    },
    mounted: function () {},
    created: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.mediaId = t.substring(3, 7), this.pageId = t.substring(7, 11), this.getData({
        gameId: this.gameId,
        mediaId: this.mediaId,
        pageId: this.pageId
      })
    }
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(16),
    n = i.n(s),
    o = i(19),
    a = i.n(o),
    r = i(18),
    d = i.n(r),
    l = i(1),
    c = i.n(l),
    u = i(2),
    m = i.n(u),
    h = i(3),
    v = i.n(h);
  e.default = {
    data: function () {
      return {
        moduleId: 7,
        gameId: "",
        loadTime: 0,
        loadRate: 0,
        link: "",
        shareShow: !1,
        footer: !1,
        footer2: !1
      }
    },
    components: {
      "v-banner": n.a,
      "v-introduce": a.a,
      "v-discuss": d.a,
      "v-share": c.a,
      "v-footer": m.a,
      "v-footer2": v.a
    },
    methods: {
      is_weixin: function () {
        return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (this.link = "javascript:void(0)", !0)
      },
      downLink: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : !0 === this.is_weixin() && 1 == browser.versions.android ? this.shareShow = !0 : 1 == browser.versions.iPhone || 1 == browser.versions.iPad ? this.link = this.ios : (alert("鏆傛棤璇ヨ澶囨帹浠嬫偍浣跨敤瀹夊崜鍖咃紒"), this.link = this.and);
        var t = this;
        this.initPost({
          gameId: this.gameId,
          msg: "click" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
        }), setTimeout(t.initPost({
          gameId: t.gameId,
          msg: "download" + t.statistics(t.moduleId, t.loadTime, t.loadRate)
        }), 3e3)
      },
      linkHref: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : 1 != browser.versions.iPhone && 1 != browser.versions.iPad || (this.link = this.ios)
      },
      initPost: function (t) {
        console.log(t);
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/zlggBiLog", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0
        }).catch(function (t) {
          console.log(JSON.stringify(t))
        })
      },
      pageTime: function () {
        function t() {
          s = new Date, e.loadTime = s.getTime() - i.getTime(), e.loadRate = 1, e.initPost({
            gameId: e.gameId,
            msg: "load" + e.statistics(e.moduleId, e.loadTime, e.loadRate)
          }), clearInterval(n)
        }
        var e = this,
          i = new Date,
          s = "",
          n = setInterval(function () {
            "complete" == document.readyState && t()
          }, 500)
      },
      judgeCity: function () {
        var t = this.$route.params.id,
          e = t.substring(t.length - 1, t.length);
        "h" === e ? this.footer = !0 : "t" === e && (this.footer2 = !0)
      }
    },
    mounted: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.initPost({
        gameId: this.gameId,
        msg: "load" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
      }), this.pageTime(), this.judgeCity()
    },
    props: ["ios", "and"]
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(20),
    n = i.n(s),
    o = i(1),
    a = i.n(o),
    r = i(2),
    d = i.n(r),
    l = i(3),
    c = i.n(l);
  e.default = {
    data: function () {
      return {
        moduleId: 11,
        gameId: "",
        loadTime: 0,
        loadRate: 0,
        link: "",
        shareShow: !1,
        footer: !1,
        footer2: !1
      }
    },
    components: {
      "v-banner": n.a,
      "v-share": a.a,
      "v-footer": d.a,
      "v-footer2": c.a
    },
    methods: {
      is_weixin: function () {
        return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (this.link = "javascript:void(0)", !0)
      },
      downLink: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : !0 === this.is_weixin() && 1 == browser.versions.android ? this.shareShow = !0 : 1 == browser.versions.iPhone || 1 == browser.versions.iPad ? this.link = this.ios : (alert("鏆傛棤璇ヨ澶囨帹浠嬫偍浣跨敤瀹夊崜鍖咃紒"), this.link = this.and);
        var t = this;
        this.initPost({
          gameId: this.gameId,
          msg: "click" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
        }), setTimeout(t.initPost({
          gameId: t.gameId,
          msg: "download" + t.statistics(t.moduleId, t.loadTime, t.loadRate)
        }), 3e3)
      },
      linkHref: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : 1 != browser.versions.iPhone && 1 != browser.versions.iPad || (this.link = this.ios)
      },
      initPost: function (t) {
        console.log(t);
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/zlggBiLog", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0
        }).catch(function (t) {
          console.log(JSON.stringify(t))
        })
      },
      pageTime: function () {
        function t() {
          s = new Date, e.loadTime = s.getTime() - i.getTime(), e.loadRate = 1, e.initPost({
            gameId: e.gameId,
            msg: "load" + e.statistics(e.moduleId, e.loadTime, e.loadRate)
          }), clearInterval(n)
        }
        var e = this,
          i = new Date,
          s = "",
          n = setInterval(function () {
            "complete" == document.readyState && t()
          }, 500)
      },
      judgeCity: function () {
        var t = this.$route.params.id,
          e = t.substring(t.length - 1, t.length);
        "h" === e ? this.footer = !0 : "t" === e && (this.footer2 = !0)
      }
    },
    mounted: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.initPost({
        gameId: this.gameId,
        msg: "load" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
      }), this.pageTime(), this.judgeCity()
    },
    props: ["ios", "and"]
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(1),
    n = i.n(s),
    o = i(2),
    a = i.n(o),
    r = i(3),
    d = i.n(r);
  e.default = {
    data: function () {
      return {
        moduleId: 10,
        gameId: "",
        loadTime: 0,
        loadRate: 0,
        link: "",
        shareShow: !1,
        footer: !1,
        footer2: !1
      }
    },
    components: {
      "v-share": n.a,
      "v-footer": a.a,
      "v-footer2": d.a
    },
    methods: {
      is_weixin: function () {
        return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (this.link = "javascript:void(0)", !0)
      },
      downLink: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : !0 === this.is_weixin() && 1 == browser.versions.android ? this.shareShow = !0 : 1 == browser.versions.iPhone || 1 == browser.versions.iPad ? this.link = this.ios : (alert("鏆傛棤璇ヨ澶囨帹浠嬫偍浣跨敤瀹夊崜鍖咃紒"), this.link = this.and);
        var t = this;
        this.initPost({
          gameId: this.gameId,
          msg: "click" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
        }), setTimeout(t.initPost({
          gameId: t.gameId,
          msg: "download" + t.statistics(t.moduleId, t.loadTime, t.loadRate)
        }), 3e3)
      },
      linkHref: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : 1 != browser.versions.iPhone && 1 != browser.versions.iPad || (this.link = this.ios)
      },
      initPost: function (t) {
        console.log(t);
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/zlggBiLog", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0
        }).catch(function (t) {
          console.log(JSON.stringify(t))
        })
      },
      pageTime: function () {
        function t() {
          s = new Date, e.loadTime = s.getTime() - i.getTime(), e.loadRate = 1, e.initPost({
            gameId: e.gameId,
            msg: "load" + e.statistics(e.moduleId, e.loadTime, e.loadRate)
          }), clearInterval(n)
        }
        var e = this,
          i = new Date,
          s = "",
          n = setInterval(function () {
            "complete" == document.readyState && t()
          }, 500)
      },
      judgeCity: function () {
        var t = this.$route.params.id,
          e = t.substring(t.length - 1, t.length);
        "h" === e ? this.footer = !0 : "t" === e && (this.footer2 = !0)
      }
    },
    mounted: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.initPost({
        gameId: this.gameId,
        msg: "load" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
      }), this.pageTime(), this.judgeCity()
    },
    props: ["ios", "and"]
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(23),
    n = i.n(s),
    o = i(1),
    a = i.n(o),
    r = i(2),
    d = i.n(r),
    l = i(3),
    c = i.n(l);
  e.default = {
    data: function () {
      return {
        moduleId: 9,
        gameId: "",
        loadTime: 0,
        loadRate: 0,
        link: "",
        shareShow: !1,
        footer: !1,
        footer2: !1
      }
    },
    components: {
      "v-banner": n.a,
      "v-share": a.a,
      "v-footer": d.a,
      "v-footer2": c.a
    },
    methods: {
      is_weixin: function () {
        return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (this.link = "javascript:void(0)", !0)
      },
      downLink: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : !0 === this.is_weixin() && 1 == browser.versions.android ? this.shareShow = !0 : 1 == browser.versions.iPhone || 1 == browser.versions.iPad ? this.link = this.ios : (alert("鏆傛棤璇ヨ澶囨帹浠嬫偍浣跨敤瀹夊崜鍖咃紒"), this.link = this.and);
        var t = this;
        this.initPost({
          gameId: this.gameId,
          msg: "click" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
        }), setTimeout(t.initPost({
          gameId: t.gameId,
          msg: "download" + t.statistics(t.moduleId, t.loadTime, t.loadRate)
        }), 3e3)
      },
      linkHref: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : 1 != browser.versions.iPhone && 1 != browser.versions.iPad || (this.link = this.ios)
      },
      initPost: function (t) {
        console.log(t);
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/zlggBiLog", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0
        }).catch(function (t) {
          console.log(JSON.stringify(t))
        })
      },
      pageTime: function () {
        function t() {
          s = new Date, e.loadTime = s.getTime() - i.getTime(), e.loadRate = 1, e.initPost({
            gameId: e.gameId,
            msg: "load" + e.statistics(e.moduleId, e.loadTime, e.loadRate)
          }), clearInterval(n)
        }
        var e = this,
          i = new Date,
          s = "",
          n = setInterval(function () {
            "complete" == document.readyState && t()
          }, 500)
      },
      judgeCity: function () {
        var t = this.$route.params.id,
          e = t.substring(t.length - 1, t.length);
        "h" === e ? this.footer = !0 : "t" === e && (this.footer2 = !0)
      }
    },
    mounted: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.initPost({
        gameId: this.gameId,
        msg: "load" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
      }), this.pageTime(), this.judgeCity()
    },
    props: ["ios", "and"]
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(1),
    n = i.n(s),
    o = i(2),
    a = i.n(o),
    r = i(3),
    d = i.n(r);
  e.default = {
    data: function () {
      return {
        moduleId: 8,
        gameId: "",
        loadTime: 0,
        loadRate: 0,
        link: "",
        shareShow: !1,
        footer: !1,
        footer2: !1
      }
    },
    components: {
      "v-share": n.a,
      "v-footer": a.a,
      "v-footer2": d.a
    },
    methods: {
      is_weixin: function () {
        return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (this.link = "javascript:void(0)", !0)
      },
      downLink: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : !0 === this.is_weixin() && 1 == browser.versions.android ? this.shareShow = !0 : 1 == browser.versions.iPhone || 1 == browser.versions.iPad ? this.link = this.ios : (alert("鏆傛棤璇ヨ澶囨帹浠嬫偍浣跨敤瀹夊崜鍖咃紒"), this.link = this.and);
        var t = this;
        this.initPost({
          gameId: this.gameId,
          msg: "click" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
        }), setTimeout(t.initPost({
          gameId: t.gameId,
          msg: "download" + t.statistics(t.moduleId, t.loadTime, t.loadRate)
        }), 3e3)
      },
      linkHref: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : 1 != browser.versions.iPhone && 1 != browser.versions.iPad || (this.link = this.ios)
      },
      initPost: function (t) {
        console.log(t);
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/zlggBiLog", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0
        }).catch(function (t) {
          console.log(JSON.stringify(t))
        })
      },
      pageTime: function () {
        function t() {
          s = new Date, e.loadTime = s.getTime() - i.getTime(), e.loadRate = 1, e.initPost({
            gameId: e.gameId,
            msg: "load" + e.statistics(e.moduleId, e.loadTime, e.loadRate)
          }), clearInterval(n)
        }
        var e = this,
          i = new Date,
          s = "",
          n = setInterval(function () {
            "complete" == document.readyState && t()
          }, 500)
      },
      judgeCity: function () {
        var t = this.$route.params.id,
          e = t.substring(t.length - 1, t.length);
        "h" === e ? this.footer = !0 : "t" === e && (this.footer2 = !0)
      }
    },
    mounted: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.initPost({
        gameId: this.gameId,
        msg: "load" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
      }), this.pageTime(), this.judgeCity()
    },
    props: ["ios", "and"]
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(29),
    n = i.n(s),
    o = i(1),
    a = i.n(o),
    r = i(2),
    d = i.n(r),
    l = i(3),
    c = i.n(l);
  e.default = {
    data: function () {
      return {
        moduleId: 13,
        gameId: "",
        loadTime: 0,
        loadRate: 0,
        link: "",
        shareShow: !1,
        footer: !1,
        footer2: !1
      }
    },
    components: {
      "v-banner": n.a,
      "v-share": a.a,
      "v-footer": d.a,
      "v-footer2": c.a
    },
    methods: {
      is_weixin: function () {
        return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (this.link = "javascript:void(0)", !0)
      },
      downLink: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : !0 === this.is_weixin() && 1 == browser.versions.android ? this.shareShow = !0 : 1 == browser.versions.iPhone || 1 == browser.versions.iPad ? this.link = this.ios : (alert("鏆傛棤璇ヨ澶囨帹浠嬫偍浣跨敤瀹夊崜鍖咃紒"), this.link = this.and);
        var t = this;
        this.initPost({
          gameId: this.gameId,
          msg: "click" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
        }), setTimeout(t.initPost({
          gameId: t.gameId,
          msg: "download" + t.statistics(t.moduleId, t.loadTime, t.loadRate)
        }), 3e3)
      },
      linkHref: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : 1 != browser.versions.iPhone && 1 != browser.versions.iPad || (this.link = this.ios)
      },
      initPost: function (t) {
        console.log(t);
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/zlggBiLog", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0
        }).catch(function (t) {
          console.log(JSON.stringify(t))
        })
      },
      pageTime: function () {
        function t() {
          s = new Date, e.loadTime = s.getTime() - i.getTime(), e.loadRate = 1, e.initPost({
            gameId: e.gameId,
            msg: "load" + e.statistics(e.moduleId, e.loadTime, e.loadRate)
          }), clearInterval(n)
        }
        var e = this,
          i = new Date,
          s = "",
          n = setInterval(function () {
            "complete" == document.readyState && t()
          }, 500)
      },
      judgeCity: function () {
        var t = this.$route.params.id,
          e = t.substring(t.length - 1, t.length);
        "h" === e ? this.footer = !0 : "t" === e && (this.footer2 = !0)
      }
    },
    mounted: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.initPost({
        gameId: this.gameId,
        msg: "load" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
      }), this.pageTime(), this.judgeCity()
    },
    props: ["ios", "and"]
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(1),
    n = i.n(s),
    o = i(2),
    a = i.n(o);
  e.default = {
    data: function () {
      return {
        moduleId: "error",
        gameId: "",
        loadTime: 0,
        loadRate: 0,
        ios: "https://itunes.apple.com/cn/app/id1211518199",
        and: "http://autopatch-jz-tc.zulong.com/jzgame/zulongcps/jztkc17081601zulong.apk",
        link: "",
        shareShow: !1
      }
    },
    components: {
      "v-share": n.a,
      "v-footer": a.a
    },
    methods: {
      is_weixin: function () {
        return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (this.link = "javascript:void(0)", !0)
      },
      downLink: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : !0 === this.is_weixin() && 1 == browser.versions.android ? this.shareShow = !0 : 1 == browser.versions.iPhone || 1 == browser.versions.iPad ? this.link = this.ios : (alert("鏆傛棤璇ヨ澶囨帹浠嬫偍浣跨敤瀹夊崜鍖咃紒"), this.link = this.and);
        var t = this;
        this.initPost({
          gameId: this.gameId,
          msg: "click" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
        }), setTimeout(t.initPost({
          gameId: t.gameId,
          msg: "download" + t.statistics(t.moduleId, t.loadTime, t.loadRate)
        }), 3e3)
      },
      linkHref: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : 1 != browser.versions.iPhone && 1 != browser.versions.iPad || (this.link = this.ios)
      },
      initPost: function (t) {
        console.log(t);
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/zlggBiLog", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0
        }).catch(function (t) {
          console.log(JSON.stringify(t))
        })
      },
      pageTime: function () {
        function t() {
          s = new Date, e.loadTime = s.getTime() - i.getTime(), e.loadRate = 1, e.initPost({
            gameId: e.gameId,
            msg: "load" + e.statistics(e.moduleId, e.loadTime, e.loadRate)
          }), clearInterval(n)
        }
        var e = this,
          i = new Date,
          s = "",
          n = setInterval(function () {
            "complete" == document.readyState && t()
          }, 500)
      }
    },
    mounted: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.initPost({
        gameId: this.gameId,
        msg: "load" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
      }), this.pageTime()
    }
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(1),
    n = i.n(s),
    o = i(2),
    a = i.n(o),
    r = i(3),
    d = i.n(r);
  e.default = {
    data: function () {
      return {
        moduleId: 12,
        gameId: "",
        loadTime: 0,
        loadRate: 0,
        link: "",
        shareShow: !1,
        footer: !1,
        footer2: !1
      }
    },
    components: {
      "v-share": n.a,
      "v-footer": a.a,
      "v-footer2": d.a
    },
    methods: {
      is_weixin: function () {
        return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (this.link = "javascript:void(0)", !0)
      },
      downLink: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : !0 === this.is_weixin() && 1 == browser.versions.android ? this.shareShow = !0 : 1 == browser.versions.iPhone || 1 == browser.versions.iPad ? this.link = this.ios : (alert("鏆傛棤璇ヨ澶囨帹浠嬫偍浣跨敤瀹夊崜鍖咃紒"), this.link = this.and);
        var t = this;
        this.initPost({
          gameId: this.gameId,
          msg: "click" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
        }), setTimeout(t.initPost({
          gameId: t.gameId,
          msg: "download" + t.statistics(t.moduleId, t.loadTime, t.loadRate)
        }), 3e3)
      },
      linkHref: function () {
        !1 === this.is_weixin() && 1 == browser.versions.android ? this.link = this.and : 1 != browser.versions.iPhone && 1 != browser.versions.iPad || (this.link = this.ios)
      },
      initPost: function (t) {
        console.log(t);
        this.$http.jsonp("https://zlgg.zulong.com/zlgg/zlggBiLog", {
          params: t
        }).then(function (t) {
          var e = JSON.parse(t.body);
          e = JSON.parse(e.replace(/\"\{\"/g, '{"').replace(/\"\}\"/g, '"}')), 0 === parseInt(e.res) ? (this["m" + e.moduleId] = !0, this.ios = e.ioslink, this.and = e.androidlink) : this.err = !0
        }).catch(function (t) {
          console.log(JSON.stringify(t))
        })
      },
      pageTime: function () {
        function t() {
          s = new Date, e.loadTime = s.getTime() - i.getTime(), e.loadRate = 1, e.initPost({
            gameId: e.gameId,
            msg: "load" + e.statistics(e.moduleId, e.loadTime, e.loadRate)
          }), clearInterval(n)
        }
        var e = this,
          i = new Date,
          s = "",
          n = setInterval(function () {
            "complete" == document.readyState && t()
          }, 500)
      },
      judgeCity: function () {
        var t = this.$route.params.id,
          e = t.substring(t.length - 1, t.length);
        "h" === e ? this.footer = !0 : "t" === e && (this.footer2 = !0)
      }
    },
    mounted: function () {
      var t = this.$route.params.id;
      this.gameId = t.substring(0, 3), this.initPost({
        gameId: this.gameId,
        msg: "load" + this.statistics(this.moduleId, this.loadTime, this.loadRate)
      }), this.pageTime(), this.judgeCity()
    },
    props: ["ios", "and"]
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(4),
    n = i(6),
    o = i(9),
    a = i.n(o),
    r = i(10),
    d = i(11),
    l = i(7),
    c = i.n(l);
  i(8), s.a.use(n.a), s.a.use(a.a), s.a.use(r.a), new s.a({
    router: d.a,
    el: "#app",
    render: function (t) {
      return t(c.a)
    }
  })
}, function (t, e) {
  t.exports = jQuery
}, function (t, e) {}], [104]);
//# sourceMappingURL=app.1444b75bca7468fc0485.js.map