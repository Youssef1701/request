!(function () {
  let e = document.querySelector("html"),
    o =
      (!!window.opr && !!opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(" OPR/") >= 0;
  o && e.classList.add("browser-opera"),
    "undefined" != typeof InstallTrigger && e.classList.add("browser-firefox"),
    (/constructor/i.test(window.HTMLElement) ||
      "[object SafariRemoteNotification]" ===
        (!window.safari || safari.pushNotification).toString()) &&
      e.classList.add("browser-safari"),
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !window.MSStream &&
      e.classList.add("browser-iOS");
  let i = !!document.documentMode;
  i && e.classList.add("browser-ie"),
    !i && window.StyleMedia && e.classList.add("browser-edge");
  let s = !!window.chrome;
  s && e.classList.add("browser-chrome"),
    (s || o) && window.CSS && e.classList.add("browser-blinkengine");
  let x = navigator.userAgent.match(
    /SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[A|N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i
  );
  x && e.classList.add("browser-samsung");
})();
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((t = t || self).barba = n());
})(this, function () {
  function t(t, n) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        "value" in e && (e.writable = !0),
        Object.defineProperty(t, e.key, e);
    }
  }
  function n(n, r, e) {
    return r && t(n.prototype, r), e && t(n, e), n;
  }
  function r() {
    return (r =
      Object.assign ||
      function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var r = arguments[n];
          for (var e in r)
            Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
        }
        return t;
      }).apply(this, arguments);
  }
  function e(t, n) {
    (t.prototype = Object.create(n.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = n);
  }
  function i(t) {
    return (i = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function o(t, n) {
    return (o =
      Object.setPrototypeOf ||
      function (t, n) {
        return (t.__proto__ = n), t;
      })(t, n);
  }
  function u(t, n, r) {
    return (u = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Reflect.construct
      : function (t, n, r) {
          var e = [null];
          e.push.apply(e, n);
          var i = new (Function.bind.apply(t, e))();
          return r && o(i, r.prototype), i;
        }).apply(null, arguments);
  }
  function f(t) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return (f = function (t) {
      if (
        null === t ||
        -1 === Function.toString.call(t).indexOf("[native code]")
      )
        return t;
      if ("function" != typeof t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== n) {
        if (n.has(t)) return n.get(t);
        n.set(t, r);
      }
      function r() {
        return u(t, arguments, i(this).constructor);
      }
      return (
        (r.prototype = Object.create(t.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        o(r, t)
      );
    })(t);
  }
  function s(t, n) {
    try {
      var r = t();
    } catch (t) {
      return n(t);
    }
    return r && r.then ? r.then(void 0, n) : r;
  }
  "undefined" != typeof Symbol &&
    (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
    "undefined" != typeof Symbol &&
      (Symbol.asyncIterator ||
        (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
  var c,
    a = "2.9.7",
    h = function () {};
  !(function (t) {
    (t[(t.off = 0)] = "off"),
      (t[(t.error = 1)] = "error"),
      (t[(t.warning = 2)] = "warning"),
      (t[(t.info = 3)] = "info"),
      (t[(t.debug = 4)] = "debug");
  })(c || (c = {}));
  var v = c.off,
    l = (function () {
      function t(t) {
        this.t = t;
      }
      (t.getLevel = function () {
        return v;
      }),
        (t.setLevel = function (t) {
          return (v = c[t]);
        });
      var n = t.prototype;
      return (
        (n.error = function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          this.i(console.error, c.error, n);
        }),
        (n.warn = function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          this.i(console.warn, c.warning, n);
        }),
        (n.info = function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          this.i(console.info, c.info, n);
        }),
        (n.debug = function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          this.i(console.log, c.debug, n);
        }),
        (n.i = function (n, r, e) {
          r <= t.getLevel() &&
            n.apply(console, ["[" + this.t + "] "].concat(e));
        }),
        t
      );
    })(),
    d = O,
    m = E,
    p = g,
    w = x,
    b = T,
    y = "/",
    P = new RegExp(
      [
        "(\\\\.)",
        "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
      ].join("|"),
      "g"
    );
  function g(t, n) {
    for (
      var r,
        e = [],
        i = 0,
        o = 0,
        u = "",
        f = (n && n.delimiter) || y,
        s = (n && n.whitelist) || void 0,
        c = !1;
      null !== (r = P.exec(t));

    ) {
      var a = r[0],
        h = r[1],
        v = r.index;
      if (((u += t.slice(o, v)), (o = v + a.length), h)) (u += h[1]), (c = !0);
      else {
        var l = "",
          d = r[2],
          m = r[3],
          p = r[4],
          w = r[5];
        if (!c && u.length) {
          var b = u.length - 1,
            g = u[b];
          (!s || s.indexOf(g) > -1) && ((l = g), (u = u.slice(0, b)));
        }
        u && (e.push(u), (u = ""), (c = !1));
        var E = m || p,
          x = l || f;
        e.push({
          name: d || i++,
          prefix: l,
          delimiter: x,
          optional: "?" === w || "*" === w,
          repeat: "+" === w || "*" === w,
          pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?",
        });
      }
    }
    return (u || o < t.length) && e.push(u + t.substr(o)), e;
  }
  function E(t, n) {
    return function (r, e) {
      var i = t.exec(r);
      if (!i) return !1;
      for (
        var o = i[0],
          u = i.index,
          f = {},
          s = (e && e.decode) || decodeURIComponent,
          c = 1;
        c < i.length;
        c++
      )
        if (void 0 !== i[c]) {
          var a = n[c - 1];
          f[a.name] = a.repeat
            ? i[c].split(a.delimiter).map(function (t) {
                return s(t, a);
              })
            : s(i[c], a);
        }
      return { path: o, index: u, params: f };
    };
  }
  function x(t, n) {
    for (var r = new Array(t.length), e = 0; e < t.length; e++)
      "object" == typeof t[e] &&
        (r[e] = new RegExp("^(?:" + t[e].pattern + ")$", R(n)));
    return function (n, e) {
      for (
        var i = "",
          o = (e && e.encode) || encodeURIComponent,
          u = !e || !1 !== e.validate,
          f = 0;
        f < t.length;
        f++
      ) {
        var s = t[f];
        if ("string" != typeof s) {
          var c,
            a = n ? n[s.name] : void 0;
          if (Array.isArray(a)) {
            if (!s.repeat)
              throw new TypeError(
                'Expected "' + s.name + '" to not repeat, but got array'
              );
            if (0 === a.length) {
              if (s.optional) continue;
              throw new TypeError('Expected "' + s.name + '" to not be empty');
            }
            for (var h = 0; h < a.length; h++) {
              if (((c = o(a[h], s)), u && !r[f].test(c)))
                throw new TypeError(
                  'Expected all "' + s.name + '" to match "' + s.pattern + '"'
                );
              i += (0 === h ? s.prefix : s.delimiter) + c;
            }
          } else if (
            "string" != typeof a &&
            "number" != typeof a &&
            "boolean" != typeof a
          ) {
            if (!s.optional)
              throw new TypeError(
                'Expected "' +
                  s.name +
                  '" to be ' +
                  (s.repeat ? "an array" : "a string")
              );
          } else {
            if (((c = o(String(a), s)), u && !r[f].test(c)))
              throw new TypeError(
                'Expected "' +
                  s.name +
                  '" to match "' +
                  s.pattern +
                  '", but got "' +
                  c +
                  '"'
              );
            i += s.prefix + c;
          }
        } else i += s;
      }
      return i;
    };
  }
  function k(t) {
    return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function A(t) {
    return t.replace(/([=!:$/()])/g, "\\$1");
  }
  function R(t) {
    return t && t.sensitive ? "" : "i";
  }
  function T(t, n, r) {
    for (
      var e = (r = r || {}).strict,
        i = !1 !== r.start,
        o = !1 !== r.end,
        u = r.delimiter || y,
        f = []
          .concat(r.endsWith || [])
          .map(k)
          .concat("$")
          .join("|"),
        s = i ? "^" : "",
        c = 0;
      c < t.length;
      c++
    ) {
      var a = t[c];
      if ("string" == typeof a) s += k(a);
      else {
        var h = a.repeat
          ? "(?:" +
            a.pattern +
            ")(?:" +
            k(a.delimiter) +
            "(?:" +
            a.pattern +
            "))*"
          : a.pattern;
        n && n.push(a),
          (s += a.optional
            ? a.prefix
              ? "(?:" + k(a.prefix) + "(" + h + "))?"
              : "(" + h + ")?"
            : k(a.prefix) + "(" + h + ")");
      }
    }
    if (o)
      e || (s += "(?:" + k(u) + ")?"), (s += "$" === f ? "$" : "(?=" + f + ")");
    else {
      var v = t[t.length - 1],
        l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
      e || (s += "(?:" + k(u) + "(?=" + f + "))?"),
        l || (s += "(?=" + k(u) + "|" + f + ")");
    }
    return new RegExp(s, R(r));
  }
  function O(t, n, r) {
    return t instanceof RegExp
      ? (function (t, n) {
          if (!n) return t;
          var r = t.source.match(/\((?!\?)/g);
          if (r)
            for (var e = 0; e < r.length; e++)
              n.push({
                name: e,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                pattern: null,
              });
          return t;
        })(t, n)
      : Array.isArray(t)
      ? (function (t, n, r) {
          for (var e = [], i = 0; i < t.length; i++)
            e.push(O(t[i], n, r).source);
          return new RegExp("(?:" + e.join("|") + ")", R(r));
        })(t, n, r)
      : (function (t, n, r) {
          return T(g(t, r), n, r);
        })(t, n, r);
  }
  (d.match = function (t, n) {
    var r = [];
    return E(O(t, r, n), r);
  }),
    (d.regexpToFunction = m),
    (d.parse = p),
    (d.compile = function (t, n) {
      return x(g(t, n), n);
    }),
    (d.tokensToFunction = w),
    (d.tokensToRegExp = b);
  var S = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    j = new ((function () {
      function t() {
        (this.o = S), (this.u = new DOMParser());
      }
      var n = t.prototype;
      return (
        (n.toString = function (t) {
          return t.outerHTML;
        }),
        (n.toDocument = function (t) {
          return this.u.parseFromString(t, "text/html");
        }),
        (n.toElement = function (t) {
          var n = document.createElement("div");
          return (n.innerHTML = t), n;
        }),
        (n.getHtml = function (t) {
          return (
            void 0 === t && (t = document), this.toString(t.documentElement)
          );
        }),
        (n.getWrapper = function (t) {
          return (
            void 0 === t && (t = document),
            t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
          );
        }),
        (n.getContainer = function (t) {
          return (
            void 0 === t && (t = document),
            t.querySelector(
              "[" + this.o.prefix + '="' + this.o.container + '"]'
            )
          );
        }),
        (n.removeContainer = function (t) {
          document.body.contains(t) && t.parentNode.removeChild(t);
        }),
        (n.addContainer = function (t, n) {
          var r = this.getContainer();
          r ? this.s(t, r) : n.appendChild(t);
        }),
        (n.getNamespace = function (t) {
          void 0 === t && (t = document);
          var n = t.querySelector(
            "[" + this.o.prefix + "-" + this.o.namespace + "]"
          );
          return n
            ? n.getAttribute(this.o.prefix + "-" + this.o.namespace)
            : null;
        }),
        (n.getHref = function (t) {
          if (t.tagName && "a" === t.tagName.toLowerCase()) {
            if ("string" == typeof t.href) return t.href;
            var n = t.getAttribute("href") || t.getAttribute("xlink:href");
            if (n) return this.resolveUrl(n.baseVal || n);
          }
          return null;
        }),
        (n.resolveUrl = function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          var e = n.length;
          if (0 === e)
            throw new Error(
              "resolveUrl requires at least one argument; got none."
            );
          var i = document.createElement("base");
          if (((i.href = arguments[0]), 1 === e)) return i.href;
          var o = document.getElementsByTagName("head")[0];
          o.insertBefore(i, o.firstChild);
          for (var u, f = document.createElement("a"), s = 1; s < e; s++)
            (f.href = arguments[s]), (i.href = u = f.href);
          return o.removeChild(i), u;
        }),
        (n.s = function (t, n) {
          n.parentNode.insertBefore(t, n.nextSibling);
        }),
        t
      );
    })())(),
    M = new ((function () {
      function t() {
        (this.h = []), (this.v = -1);
      }
      var e = t.prototype;
      return (
        (e.init = function (t, n) {
          this.l = "barba";
          var r = {
            ns: n,
            scroll: { x: window.scrollX, y: window.scrollY },
            url: t,
          };
          this.h.push(r), (this.v = 0);
          var e = { from: this.l, index: 0, states: [].concat(this.h) };
          window.history && window.history.replaceState(e, "", t);
        }),
        (e.change = function (t, n, r) {
          if (r && r.state) {
            var e = r.state,
              i = e.index;
            (n = this.m(this.v - i)), this.replace(e.states), (this.v = i);
          } else this.add(t, n);
          return n;
        }),
        (e.add = function (t, n) {
          var r = this.size,
            e = this.p(n),
            i = {
              ns: "tmp",
              scroll: { x: window.scrollX, y: window.scrollY },
              url: t,
            };
          this.h.push(i), (this.v = r);
          var o = { from: this.l, index: r, states: [].concat(this.h) };
          switch (e) {
            case "push":
              window.history && window.history.pushState(o, "", t);
              break;
            case "replace":
              window.history && window.history.replaceState(o, "", t);
          }
        }),
        (e.update = function (t, n) {
          var e = n || this.v,
            i = r({}, this.get(e), {}, t);
          this.set(e, i);
        }),
        (e.remove = function (t) {
          t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
        }),
        (e.clear = function () {
          (this.h = []), (this.v = -1);
        }),
        (e.replace = function (t) {
          this.h = t;
        }),
        (e.get = function (t) {
          return this.h[t];
        }),
        (e.set = function (t, n) {
          return (this.h[t] = n);
        }),
        (e.p = function (t) {
          var n = "push",
            r = t,
            e = S.prefix + "-" + S.history;
          return (
            r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n
          );
        }),
        (e.m = function (t) {
          return Math.abs(t) > 1
            ? t > 0
              ? "forward"
              : "back"
            : 0 === t
            ? "popstate"
            : t > 0
            ? "back"
            : "forward";
        }),
        n(t, [
          {
            key: "current",
            get: function () {
              return this.h[this.v];
            },
          },
          {
            key: "state",
            get: function () {
              return this.h[this.h.length - 1];
            },
          },
          {
            key: "previous",
            get: function () {
              return this.v < 1 ? null : this.h[this.v - 1];
            },
          },
          {
            key: "size",
            get: function () {
              return this.h.length;
            },
          },
        ]),
        t
      );
    })())(),
    L = function (t, n) {
      try {
        var r = (function () {
          if (!n.next.html)
            return Promise.resolve(t).then(function (t) {
              var r = n.next;
              if (t) {
                var e = j.toElement(t);
                (r.namespace = j.getNamespace(e)),
                  (r.container = j.getContainer(e)),
                  (r.html = t),
                  M.update({ ns: r.namespace });
                var i = j.toDocument(t);
                document.title = i.title;
              }
            });
        })();
        return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
      } catch (t) {
        return Promise.reject(t);
      }
    },
    $ = d,
    _ = {
      __proto__: null,
      update: L,
      nextTick: function () {
        return new Promise(function (t) {
          window.requestAnimationFrame(t);
        });
      },
      pathToRegexp: $,
    },
    q = function () {
      return window.location.origin;
    },
    B = function (t) {
      return void 0 === t && (t = window.location.href), U(t).port;
    },
    U = function (t) {
      var n,
        r = t.match(/:\d+/);
      if (null === r)
        /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);
      else {
        var e = r[0].substring(1);
        n = parseInt(e, 10);
      }
      var i,
        o = t.replace(q(), ""),
        u = {},
        f = o.indexOf("#");
      f >= 0 && ((i = o.slice(f + 1)), (o = o.slice(0, f)));
      var s = o.indexOf("?");
      return (
        s >= 0 && ((u = D(o.slice(s + 1))), (o = o.slice(0, s))),
        { hash: i, path: o, port: n, query: u }
      );
    },
    D = function (t) {
      return t.split("&").reduce(function (t, n) {
        var r = n.split("=");
        return (t[r[0]] = r[1]), t;
      }, {});
    },
    F = function (t) {
      return (
        void 0 === t && (t = window.location.href),
        t.replace(/(\/#.*|\/|#.*)$/, "")
      );
    },
    H = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getOrigin: q,
      getPort: B,
      getPath: function (t) {
        return void 0 === t && (t = window.location.href), U(t).path;
      },
      parse: U,
      parseQuery: D,
      clean: F,
    };
  function I(t, n, r) {
    return (
      void 0 === n && (n = 2e3),
      new Promise(function (e, i) {
        var o = new XMLHttpRequest();
        (o.onreadystatechange = function () {
          if (o.readyState === XMLHttpRequest.DONE)
            if (200 === o.status) e(o.responseText);
            else if (o.status) {
              var n = { status: o.status, statusText: o.statusText };
              r(t, n), i(n);
            }
        }),
          (o.ontimeout = function () {
            var e = new Error("Timeout error [" + n + "]");
            r(t, e), i(e);
          }),
          (o.onerror = function () {
            var n = new Error("Fetch error");
            r(t, n), i(n);
          }),
          o.open("GET", t),
          (o.timeout = n),
          o.setRequestHeader(
            "Accept",
            "text/html,application/xhtml+xml,application/xml"
          ),
          o.setRequestHeader("x-barba", "yes"),
          o.send();
      })
    );
  }
  var C = function (t) {
    return (
      !!t &&
      ("object" == typeof t || "function" == typeof t) &&
      "function" == typeof t.then
    );
  };
  function N(t, n) {
    return (
      void 0 === n && (n = {}),
      function () {
        for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++)
          e[i] = arguments[i];
        var o = !1,
          u = new Promise(function (r, i) {
            n.async = function () {
              return (
                (o = !0),
                function (t, n) {
                  t ? i(t) : r(n);
                }
              );
            };
            var u = t.apply(n, e);
            o || (C(u) ? u.then(r, i) : r(u));
          });
        return u;
      }
    );
  }
  var X = new ((function (t) {
      function n() {
        var n;
        return (
          ((n = t.call(this) || this).logger = new l("@barba/core")),
          (n.all = [
            "ready",
            "page",
            "reset",
            "currentAdded",
            "currentRemoved",
            "nextAdded",
            "nextRemoved",
            "beforeOnce",
            "once",
            "afterOnce",
            "before",
            "beforeLeave",
            "leave",
            "afterLeave",
            "beforeEnter",
            "enter",
            "afterEnter",
            "after",
          ]),
          (n.registered = new Map()),
          n.init(),
          n
        );
      }
      e(n, t);
      var r = n.prototype;
      return (
        (r.init = function () {
          var t = this;
          this.registered.clear(),
            this.all.forEach(function (n) {
              t[n] ||
                (t[n] = function (r, e) {
                  t.registered.has(n) || t.registered.set(n, new Set()),
                    t.registered.get(n).add({ ctx: e || {}, fn: r });
                });
            });
        }),
        (r.do = function (t) {
          for (
            var n = this,
              r = arguments.length,
              e = new Array(r > 1 ? r - 1 : 0),
              i = 1;
            i < r;
            i++
          )
            e[i - 1] = arguments[i];
          if (this.registered.has(t)) {
            var o = Promise.resolve();
            return (
              this.registered.get(t).forEach(function (t) {
                o = o.then(function () {
                  return N(t.fn, t.ctx).apply(void 0, e);
                });
              }),
              o.catch(function (r) {
                n.logger.debug("Hook error [" + t + "]"), n.logger.error(r);
              })
            );
          }
          return Promise.resolve();
        }),
        (r.clear = function () {
          var t = this;
          this.all.forEach(function (n) {
            delete t[n];
          }),
            this.init();
        }),
        (r.help = function () {
          this.logger.info("Available hooks: " + this.all.join(","));
          var t = [];
          this.registered.forEach(function (n, r) {
            return t.push(r);
          }),
            this.logger.info("Registered hooks: " + t.join(","));
        }),
        n
      );
    })(h))(),
    z = (function () {
      function t(t) {
        if (((this.P = []), "boolean" == typeof t)) this.g = t;
        else {
          var n = Array.isArray(t) ? t : [t];
          this.P = n.map(function (t) {
            return $(t);
          });
        }
      }
      return (
        (t.prototype.checkHref = function (t) {
          if ("boolean" == typeof this.g) return this.g;
          var n = U(t).path;
          return this.P.some(function (t) {
            return null !== t.exec(n);
          });
        }),
        t
      );
    })(),
    G = (function (t) {
      function n(n) {
        var r;
        return ((r = t.call(this, n) || this).k = new Map()), r;
      }
      e(n, t);
      var i = n.prototype;
      return (
        (i.set = function (t, n, r) {
          return (
            this.k.set(t, { action: r, request: n }), { action: r, request: n }
          );
        }),
        (i.get = function (t) {
          return this.k.get(t);
        }),
        (i.getRequest = function (t) {
          return this.k.get(t).request;
        }),
        (i.getAction = function (t) {
          return this.k.get(t).action;
        }),
        (i.has = function (t) {
          return !this.checkHref(t) && this.k.has(t);
        }),
        (i.delete = function (t) {
          return this.k.delete(t);
        }),
        (i.update = function (t, n) {
          var e = r({}, this.k.get(t), {}, n);
          return this.k.set(t, e), e;
        }),
        n
      );
    })(z),
    Q = function () {
      return !window.history.pushState;
    },
    W = function (t) {
      return !t.el || !t.href;
    },
    J = function (t) {
      var n = t.event;
      return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
    },
    K = function (t) {
      var n = t.el;
      return n.hasAttribute("target") && "_blank" === n.target;
    },
    V = function (t) {
      var n = t.el;
      return (
        (void 0 !== n.protocol && window.location.protocol !== n.protocol) ||
        (void 0 !== n.hostname && window.location.hostname !== n.hostname)
      );
    },
    Y = function (t) {
      var n = t.el;
      return void 0 !== n.port && B() !== B(n.href);
    },
    Z = function (t) {
      var n = t.el;
      return n.getAttribute && "string" == typeof n.getAttribute("download");
    },
    tt = function (t) {
      return t.el.hasAttribute(S.prefix + "-" + S.prevent);
    },
    nt = function (t) {
      return Boolean(
        t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]')
      );
    },
    rt = function (t) {
      var n = t.href;
      return F(n) === F() && B(n) === B();
    },
    et = (function (t) {
      function n(n) {
        var r;
        return (
          ((r = t.call(this, n) || this).suite = []),
          (r.tests = new Map()),
          r.init(),
          r
        );
      }
      e(n, t);
      var r = n.prototype;
      return (
        (r.init = function () {
          this.add("pushState", Q),
            this.add("exists", W),
            this.add("newTab", J),
            this.add("blank", K),
            this.add("corsDomain", V),
            this.add("corsPort", Y),
            this.add("download", Z),
            this.add("preventSelf", tt),
            this.add("preventAll", nt),
            this.add("sameUrl", rt, !1);
        }),
        (r.add = function (t, n, r) {
          void 0 === r && (r = !0),
            this.tests.set(t, n),
            r && this.suite.push(t);
        }),
        (r.run = function (t, n, r, e) {
          return this.tests.get(t)({ el: n, event: r, href: e });
        }),
        (r.checkLink = function (t, n, r) {
          var e = this;
          return this.suite.some(function (i) {
            return e.run(i, t, n, r);
          });
        }),
        n
      );
    })(z),
    it = (function (t) {
      function n(r, e) {
        var i;
        void 0 === e && (e = "Barba error");
        for (
          var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2;
          f < o;
          f++
        )
          u[f - 2] = arguments[f];
        return (
          ((i = t.call.apply(t, [this].concat(u)) || this).error = r),
          (i.label = e),
          Error.captureStackTrace &&
            Error.captureStackTrace(
              (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(i),
              n
            ),
          (i.name = "BarbaError"),
          i
        );
      }
      return e(n, t), n;
    })(f(Error)),
    ot = (function () {
      function t(t) {
        void 0 === t && (t = []),
          (this.logger = new l("@barba/core")),
          (this.all = []),
          (this.page = []),
          (this.once = []),
          (this.A = [
            { name: "namespace", type: "strings" },
            { name: "custom", type: "function" },
          ]),
          t && (this.all = this.all.concat(t)),
          this.update();
      }
      var n = t.prototype;
      return (
        (n.add = function (t, n) {
          switch (t) {
            case "rule":
              this.A.splice(n.position || 0, 0, n.value);
              break;
            case "transition":
            default:
              this.all.push(n);
          }
          this.update();
        }),
        (n.resolve = function (t, n) {
          var r = this;
          void 0 === n && (n = {});
          var e = n.once ? this.once : this.page;
          e = e.filter(
            n.self
              ? function (t) {
                  return t.name && "self" === t.name;
                }
              : function (t) {
                  return !t.name || "self" !== t.name;
                }
          );
          var i = new Map(),
            o = e.find(function (e) {
              var o = !0,
                u = {};
              return (
                !(!n.self || "self" !== e.name) ||
                (r.A.reverse().forEach(function (n) {
                  o &&
                    ((o = r.R(e, n, t, u)),
                    e.from &&
                      e.to &&
                      (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")),
                    e.from && !e.to && (o = r.R(e, n, t, u, "from")),
                    !e.from && e.to && (o = r.R(e, n, t, u, "to")));
                }),
                i.set(e, u),
                o)
              );
            }),
            u = i.get(o),
            f = [];
          if ((f.push(n.once ? "once" : "page"), n.self && f.push("self"), u)) {
            var s,
              c = [o];
            Object.keys(u).length > 0 && c.push(u),
              (s = this.logger).info.apply(
                s,
                ["Transition found [" + f.join(",") + "]"].concat(c)
              );
          } else this.logger.info("No transition found [" + f.join(",") + "]");
          return o;
        }),
        (n.update = function () {
          var t = this;
          (this.all = this.all
            .map(function (n) {
              return t.T(n);
            })
            .sort(function (t, n) {
              return t.priority - n.priority;
            })
            .reverse()
            .map(function (t) {
              return delete t.priority, t;
            })),
            (this.page = this.all.filter(function (t) {
              return void 0 !== t.leave || void 0 !== t.enter;
            })),
            (this.once = this.all.filter(function (t) {
              return void 0 !== t.once;
            }));
        }),
        (n.R = function (t, n, r, e, i) {
          var o = !0,
            u = !1,
            f = t,
            s = n.name,
            c = s,
            a = s,
            h = s,
            v = i ? f[i] : f,
            l = "to" === i ? r.next : r.current;
          if (i ? v && v[s] : v[s]) {
            switch (n.type) {
              case "strings":
              default:
                var d = Array.isArray(v[c]) ? v[c] : [v[c]];
                l[c] && -1 !== d.indexOf(l[c]) && (u = !0),
                  -1 === d.indexOf(l[c]) && (o = !1);
                break;
              case "object":
                var m = Array.isArray(v[a]) ? v[a] : [v[a]];
                l[a]
                  ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0),
                    -1 === m.indexOf(l[a].name) && (o = !1))
                  : (o = !1);
                break;
              case "function":
                v[h](r) ? (u = !0) : (o = !1);
            }
            u &&
              (i ? ((e[i] = e[i] || {}), (e[i][s] = f[i][s])) : (e[s] = f[s]));
          }
          return o;
        }),
        (n.O = function (t, n, r) {
          var e = 0;
          return (
            (t[n] || (t.from && t.from[n]) || (t.to && t.to[n])) &&
              ((e += Math.pow(10, r)),
              t.from && t.from[n] && (e += 1),
              t.to && t.to[n] && (e += 2)),
            e
          );
        }),
        (n.T = function (t) {
          var n = this;
          t.priority = 0;
          var r = 0;
          return (
            this.A.forEach(function (e, i) {
              r += n.O(t, e.name, i + 1);
            }),
            (t.priority = r),
            t
          );
        }),
        t
      );
    })(),
    ut = (function () {
      function t(t) {
        void 0 === t && (t = []),
          (this.logger = new l("@barba/core")),
          (this.S = !1),
          (this.store = new ot(t));
      }
      var r = t.prototype;
      return (
        (r.get = function (t, n) {
          return this.store.resolve(t, n);
        }),
        (r.doOnce = function (t) {
          var n = t.data,
            r = t.transition;
          try {
            var e = function () {
                i.S = !1;
              },
              i = this,
              o = r || {};
            i.S = !0;
            var u = s(
              function () {
                return Promise.resolve(i.j("beforeOnce", n, o)).then(
                  function () {
                    return Promise.resolve(i.once(n, o)).then(function () {
                      return Promise.resolve(i.j("afterOnce", n, o)).then(
                        function () {}
                      );
                    });
                  }
                );
              },
              function (t) {
                (i.S = !1),
                  i.logger.debug("Transition error [before/after/once]"),
                  i.logger.error(t);
              }
            );
            return Promise.resolve(u && u.then ? u.then(e) : e());
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (r.doPage = function (t) {
          var n = t.data,
            r = t.transition,
            e = t.page,
            i = t.wrapper;
          try {
            var o = function (t) {
                if (u) return t;
                f.S = !1;
              },
              u = !1,
              f = this,
              c = r || {},
              a = !0 === c.sync || !1;
            f.S = !0;
            var h = s(
              function () {
                function t() {
                  return Promise.resolve(f.j("before", n, c)).then(function () {
                    var t = !1;
                    function r(r) {
                      return t
                        ? r
                        : Promise.resolve(f.remove(n)).then(function () {
                            return Promise.resolve(f.j("after", n, c)).then(
                              function () {}
                            );
                          });
                    }
                    var o = (function () {
                      if (a)
                        return s(
                          function () {
                            return Promise.resolve(f.add(n, i)).then(
                              function () {
                                return Promise.resolve(
                                  f.j("beforeLeave", n, c)
                                ).then(function () {
                                  return Promise.resolve(
                                    f.j("beforeEnter", n, c)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        f.leave(n, c),
                                        f.enter(n, c),
                                      ])
                                    ).then(function () {
                                      return Promise.resolve(
                                        f.j("afterLeave", n, c)
                                      ).then(function () {
                                        return Promise.resolve(
                                          f.j("afterEnter", n, c)
                                        ).then(function () {});
                                      });
                                    });
                                  });
                                });
                              }
                            );
                          },
                          function (t) {
                            if (f.M(t))
                              throw new it(t, "Transition error [sync]");
                          }
                        );
                      var r = function (r) {
                          return t
                            ? r
                            : s(
                                function () {
                                  var t = (function () {
                                    if (!1 !== o)
                                      return Promise.resolve(f.add(n, i)).then(
                                        function () {
                                          return Promise.resolve(
                                            f.j("beforeEnter", n, c)
                                          ).then(function () {
                                            return Promise.resolve(
                                              f.enter(n, c, o)
                                            ).then(function () {
                                              return Promise.resolve(
                                                f.j("afterEnter", n, c)
                                              ).then(function () {});
                                            });
                                          });
                                        }
                                      );
                                  })();
                                  if (t && t.then)
                                    return t.then(function () {});
                                },
                                function (t) {
                                  if (f.M(t))
                                    throw new it(
                                      t,
                                      "Transition error [before/after/enter]"
                                    );
                                }
                              );
                        },
                        o = !1,
                        u = s(
                          function () {
                            return Promise.resolve(
                              f.j("beforeLeave", n, c)
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([f.leave(n, c), L(e, n)]).then(
                                  function (t) {
                                    return t[0];
                                  }
                                )
                              ).then(function (t) {
                                return (
                                  (o = t),
                                  Promise.resolve(f.j("afterLeave", n, c)).then(
                                    function () {}
                                  )
                                );
                              });
                            });
                          },
                          function (t) {
                            if (f.M(t))
                              throw new it(
                                t,
                                "Transition error [before/after/leave]"
                              );
                          }
                        );
                      return u && u.then ? u.then(r) : r(u);
                    })();
                    return o && o.then ? o.then(r) : r(o);
                  });
                }
                var r = (function () {
                  if (a) return Promise.resolve(L(e, n)).then(function () {});
                })();
                return r && r.then ? r.then(t) : t();
              },
              function (t) {
                if (((f.S = !1), t.name && "BarbaError" === t.name))
                  throw (f.logger.debug(t.label), f.logger.error(t.error), t);
                throw (
                  (f.logger.debug("Transition error [page]"),
                  f.logger.error(t),
                  t)
                );
              }
            );
            return Promise.resolve(h && h.then ? h.then(o) : o(h));
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (r.once = function (t, n) {
          try {
            return Promise.resolve(X.do("once", t, n)).then(function () {
              return n.once ? N(n.once, n)(t) : Promise.resolve();
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (r.leave = function (t, n) {
          try {
            return Promise.resolve(X.do("leave", t, n)).then(function () {
              return n.leave ? N(n.leave, n)(t) : Promise.resolve();
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (r.enter = function (t, n, r) {
          try {
            return Promise.resolve(X.do("enter", t, n)).then(function () {
              return n.enter ? N(n.enter, n)(t, r) : Promise.resolve();
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (r.add = function (t, n) {
          try {
            return (
              j.addContainer(t.next.container, n),
              X.do("nextAdded", t),
              Promise.resolve()
            );
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (r.remove = function (t) {
          try {
            return (
              j.removeContainer(t.current.container),
              X.do("currentRemoved", t),
              Promise.resolve()
            );
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (r.M = function (t) {
          return t.message
            ? !/Timeout error|Fetch error/.test(t.message)
            : !t.status;
        }),
        (r.j = function (t, n, r) {
          try {
            return Promise.resolve(X.do(t, n, r)).then(function () {
              return r[t] ? N(r[t], r)(n) : Promise.resolve();
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        n(t, [
          {
            key: "isRunning",
            get: function () {
              return this.S;
            },
            set: function (t) {
              this.S = t;
            },
          },
          {
            key: "hasOnce",
            get: function () {
              return this.store.once.length > 0;
            },
          },
          {
            key: "hasSelf",
            get: function () {
              return this.store.all.some(function (t) {
                return "self" === t.name;
              });
            },
          },
          {
            key: "shouldWait",
            get: function () {
              return this.store.all.some(function (t) {
                return (t.to && !t.to.route) || t.sync;
              });
            },
          },
        ]),
        t
      );
    })(),
    ft = (function () {
      function t(t) {
        var n = this;
        (this.names = [
          "beforeLeave",
          "afterLeave",
          "beforeEnter",
          "afterEnter",
        ]),
          (this.byNamespace = new Map()),
          0 !== t.length &&
            (t.forEach(function (t) {
              n.byNamespace.set(t.namespace, t);
            }),
            this.names.forEach(function (t) {
              X[t](n.L(t));
            }));
      }
      return (
        (t.prototype.L = function (t) {
          var n = this;
          return function (r) {
            var e = t.match(/enter/i) ? r.next : r.current,
              i = n.byNamespace.get(e.namespace);
            return i && i[t] ? N(i[t], i)(r) : Promise.resolve();
          };
        }),
        t
      );
    })();
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (t) {
        var n = this;
        do {
          if (n.matches(t)) return n;
          n = n.parentElement || n.parentNode;
        } while (null !== n && 1 === n.nodeType);
        return null;
      });
  var st = {
    container: null,
    html: "",
    namespace: "",
    url: { hash: "", href: "", path: "", port: null, query: {} },
  };
  return new ((function () {
    function t() {
      (this.version = a),
        (this.schemaPage = st),
        (this.Logger = l),
        (this.logger = new l("@barba/core")),
        (this.plugins = []),
        (this.hooks = X),
        (this.dom = j),
        (this.helpers = _),
        (this.history = M),
        (this.request = I),
        (this.url = H);
    }
    var e = t.prototype;
    return (
      (e.use = function (t, n) {
        var r = this.plugins;
        r.indexOf(t) > -1
          ? this.logger.warn("Plugin [" + t.name + "] already installed.")
          : "function" == typeof t.install
          ? (t.install(this, n), r.push(t))
          : this.logger.warn(
              "Plugin [" + t.name + '] has no "install" method.'
            );
      }),
      (e.init = function (t) {
        var n = void 0 === t ? {} : t,
          e = n.transitions,
          i = void 0 === e ? [] : e,
          o = n.views,
          u = void 0 === o ? [] : o,
          f = n.schema,
          s = void 0 === f ? S : f,
          c = n.requestError,
          a = n.timeout,
          h = void 0 === a ? 2e3 : a,
          v = n.cacheIgnore,
          d = void 0 !== v && v,
          m = n.prefetchIgnore,
          p = void 0 !== m && m,
          w = n.preventRunning,
          b = void 0 !== w && w,
          y = n.prevent,
          P = void 0 === y ? null : y,
          g = n.debug,
          E = n.logLevel;
        if (
          (l.setLevel(
            !0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E
          ),
          this.logger.info(this.version),
          Object.keys(s).forEach(function (t) {
            S[t] && (S[t] = s[t]);
          }),
          (this.$ = c),
          (this.timeout = h),
          (this.cacheIgnore = d),
          (this.prefetchIgnore = p),
          (this.preventRunning = b),
          (this._ = this.dom.getWrapper()),
          !this._)
        )
          throw new Error("[@barba/core] No Barba wrapper found");
        this._.setAttribute("aria-live", "polite"), this.q();
        var x = this.data.current;
        if (!x.container)
          throw new Error("[@barba/core] No Barba container found");
        if (
          ((this.cache = new G(d)),
          (this.prevent = new et(p)),
          (this.transitions = new ut(i)),
          (this.views = new ft(u)),
          null !== P)
        ) {
          if ("function" != typeof P)
            throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", P);
        }
        this.history.init(x.url.href, x.namespace),
          (this.B = this.B.bind(this)),
          (this.U = this.U.bind(this)),
          (this.D = this.D.bind(this)),
          this.F(),
          this.plugins.forEach(function (t) {
            return t.init();
          });
        var k = this.data;
        (k.trigger = "barba"),
          (k.next = k.current),
          (k.current = r({}, this.schemaPage)),
          this.hooks.do("ready", k),
          this.once(k),
          this.q();
      }),
      (e.destroy = function () {
        this.q(),
          this.H(),
          this.history.clear(),
          this.hooks.clear(),
          (this.plugins = []);
      }),
      (e.force = function (t) {
        window.location.assign(t);
      }),
      (e.go = function (t, n, r) {
        var e;
        if ((void 0 === n && (n = "barba"), this.transitions.isRunning))
          this.force(t);
        else if (
          !(e =
            "popstate" === n
              ? this.history.current &&
                this.url.getPath(this.history.current.url) ===
                  this.url.getPath(t)
              : this.prevent.run("sameUrl", null, null, t)) ||
          this.transitions.hasSelf
        )
          return (
            (n = this.history.change(t, n, r)),
            r && (r.stopPropagation(), r.preventDefault()),
            this.page(t, n, e)
          );
      }),
      (e.once = function (t) {
        try {
          var n = this;
          return Promise.resolve(n.hooks.do("beforeEnter", t)).then(
            function () {
              function r() {
                return Promise.resolve(n.hooks.do("afterEnter", t)).then(
                  function () {}
                );
              }
              var e = (function () {
                if (n.transitions.hasOnce) {
                  var r = n.transitions.get(t, { once: !0 });
                  return Promise.resolve(
                    n.transitions.doOnce({ transition: r, data: t })
                  ).then(function () {});
                }
              })();
              return e && e.then ? e.then(r) : r();
            }
          );
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      (e.page = function (t, n, e) {
        try {
          var i = function () {
              var t = o.data;
              return Promise.resolve(o.hooks.do("page", t)).then(function () {
                var n = s(
                  function () {
                    var n = o.transitions.get(t, { once: !1, self: e });
                    return Promise.resolve(
                      o.transitions.doPage({
                        data: t,
                        page: u,
                        transition: n,
                        wrapper: o._,
                      })
                    ).then(function () {
                      o.q();
                    });
                  },
                  function () {
                    0 === l.getLevel() && o.force(t.current.url.href);
                  }
                );
                if (n && n.then) return n.then(function () {});
              });
            },
            o = this;
          (o.data.next.url = r({ href: t }, o.url.parse(t))),
            (o.data.trigger = n);
          var u = o.cache.has(t)
              ? o.cache.update(t, { action: "click" }).request
              : o.cache.set(
                  t,
                  o.request(t, o.timeout, o.onRequestError.bind(o, n)),
                  "click"
                ).request,
            f = (function () {
              if (o.transitions.shouldWait)
                return Promise.resolve(L(u, o.data)).then(function () {});
            })();
          return Promise.resolve(f && f.then ? f.then(i) : i());
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      (e.onRequestError = function (t) {
        this.transitions.isRunning = !1;
        for (
          var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1;
          e < n;
          e++
        )
          r[e - 1] = arguments[e];
        var i = r[0],
          o = r[1],
          u = this.cache.getAction(i);
        return (
          this.cache.delete(i),
          !(
            (this.$ && !1 === this.$(t, u, i, o)) ||
            ("click" === u && this.force(i), 1)
          )
        );
      }),
      (e.prefetch = function (t) {
        var n = this;
        this.cache.has(t) ||
          this.cache.set(
            t,
            this.request(
              t,
              this.timeout,
              this.onRequestError.bind(this, "barba")
            ).catch(function (t) {
              n.logger.error(t);
            }),
            "prefetch"
          );
      }),
      (e.F = function () {
        !0 !== this.prefetchIgnore &&
          (document.addEventListener("mouseover", this.B),
          document.addEventListener("touchstart", this.B)),
          document.addEventListener("click", this.U),
          window.addEventListener("popstate", this.D);
      }),
      (e.H = function () {
        !0 !== this.prefetchIgnore &&
          (document.removeEventListener("mouseover", this.B),
          document.removeEventListener("touchstart", this.B)),
          document.removeEventListener("click", this.U),
          window.removeEventListener("popstate", this.D);
      }),
      (e.B = function (t) {
        var n = this,
          r = this.I(t);
        if (r) {
          var e = this.dom.getHref(r);
          this.prevent.checkHref(e) ||
            this.cache.has(e) ||
            this.cache.set(
              e,
              this.request(
                e,
                this.timeout,
                this.onRequestError.bind(this, r)
              ).catch(function (t) {
                n.logger.error(t);
              }),
              "enter"
            );
        }
      }),
      (e.U = function (t) {
        var n = this.I(t);
        if (n)
          return this.transitions.isRunning && this.preventRunning
            ? (t.preventDefault(), void t.stopPropagation())
            : void this.go(this.dom.getHref(n), n, t);
      }),
      (e.D = function (t) {
        this.go(this.url.getHref(), "popstate", t);
      }),
      (e.I = function (t) {
        for (var n = t.target; n && !this.dom.getHref(n); ) n = n.parentNode;
        if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
      }),
      (e.q = function () {
        var t = this.url.getHref(),
          n = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: r({ href: t }, this.url.parse(t)),
          };
        (this.C = {
          current: n,
          next: r({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data);
      }),
      n(t, [
        {
          key: "data",
          get: function () {
            return this.C;
          },
        },
        {
          key: "wrapper",
          get: function () {
            return this._;
          },
        },
      ]),
      t
    );
  })())();
});
//# sourceMappingURL=barba.umd.js.map
/*!
 * GSAP 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function r(t) {
    return "string" == typeof t;
  }
  function s(t) {
    return "function" == typeof t;
  }
  function t(t) {
    return "number" == typeof t;
  }
  function u(t) {
    return void 0 === t;
  }
  function v(t) {
    return "object" == typeof t;
  }
  function w(t) {
    return !1 !== t;
  }
  function x() {
    return "undefined" != typeof window;
  }
  function y(t) {
    return s(t) || r(t);
  }
  function P(t) {
    return (i = yt(t, ot)) && Ce;
  }
  function Q(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function R(t, e) {
    return !e && console.warn(t);
  }
  function S(t, e) {
    return (t && (ot[t] = e) && i && (i[t] = e)) || ot;
  }
  function T() {
    return 0;
  }
  function ea(t) {
    var e,
      r,
      i = t[0];
    if ((v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = gt.length; r-- && !gt[r].targetTest(i); );
      e = gt[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new jt(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  }
  function fa(t) {
    return t._gsap || ea(Ot(t))[0]._gsap;
  }
  function ga(t, e, r) {
    return (r = t[e]) && s(r)
      ? t[e]()
      : (u(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function ha(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function ia(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ja(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function ka(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    );
  }
  function la(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ma() {
    var t,
      e,
      r = ct.length,
      i = ct.slice(0);
    for (dt = {}, t = ct.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function na(t, e, r, i) {
    ct.length && ma(),
      t.render(e, r, i || (B && e < 0 && (t._initted || t._startAt))),
      ct.length && ma();
  }
  function oa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2
      ? e
      : r(t)
      ? t.trim()
      : t;
  }
  function pa(t) {
    return t;
  }
  function qa(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ta(t, e) {
    for (var r in e)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function ua(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function va(t) {
    var e = t.parent || L,
      r = t.keyframes
        ? (function _setKeyframeDefaults(i) {
            return function (t, e) {
              for (var r in e)
                r in t ||
                  ("duration" === r && i) ||
                  "ease" === r ||
                  (t[r] = e[r]);
            };
          })($(t.keyframes))
        : qa;
    if (w(t.inherit))
      for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function xa(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
      s = t[i];
    if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)),
      e._next ? (e._next._prev = e) : (t[i] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  }
  function ya(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  }
  function za(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0);
  }
  function Aa(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function Ca(t, e, r, i) {
    return (
      t._startAt &&
      (B
        ? t._startAt.revert(ht)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, i))
    );
  }
  function Ea(t) {
    return t._repeat ? Tt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function Ga(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function Ha(t) {
    return (t._end = ja(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0)
    ));
  }
  function Ia(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = ja(
          r._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Ha(t),
        r._dirty || Aa(r, t)),
      t
    );
  }
  function Ja(t, e) {
    var r;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((r = Ga(t.rawTime(), e)),
        (!e._dur || kt(0, e.totalDuration(), r) - e._tTime > V) &&
          e.render(r, !0)),
      Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -V;
    }
  }
  function Ka(e, r, i, n) {
    return (
      r.parent && za(r),
      (r._start = ja(
        (t(i) ? i : i || e !== L ? xt(e, i, r) : e._time) + r._delay
      )),
      (r._end = ja(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      xa(e, r, "_first", "_last", e._sort ? "_start" : 0),
      bt(r) || (e._recent = r),
      n || Ja(e, r),
      e._ts < 0 && Ia(e, e._tTime),
      e
    );
  }
  function La(t, e) {
    return (
      (ot.ScrollTrigger || Q("scrollTrigger", e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  }
  function Ma(t, e, r, i, n) {
    return (
      Ht(t, e, n),
      t._initted
        ? !r &&
          t._pt &&
          !B &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          f !== Et.frame
          ? (ct.push(t), (t._lazy = [n, i]), 1)
          : void 0
        : 1
    );
  }
  function Ra(t, e, r, i) {
    var n = t._repeat,
      a = ja(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !i && (t._time *= a / t._dur),
      (t._dur = a),
      (t._tDur = n ? (n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n)) : a),
      0 < s && !i && Ia(t, (t._tTime = t._tDur * s)),
      t.parent && Ha(t),
      r || Aa(t.parent, t),
      t
    );
  }
  function Sa(t) {
    return t instanceof Ut ? Aa(t) : Ra(t, t._dur);
  }
  function Va(e, r, i) {
    var n,
      a,
      s = t(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if ((s && (u.duration = r[1]), (u.parent = i), e)) {
      for (n = u, a = i; a && !("immediateRender" in n); )
        (n = a.vars.defaults || {}), (a = w(a.vars.inherit) && a.parent);
      (u.immediateRender = w(n.immediateRender)),
        e < 2 ? (u.runBackwards = 1) : (u.startAt = r[o - 1]);
    }
    return new Gt(r[0], u, r[1 + o]);
  }
  function Wa(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Ya(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : "";
  }
  function _a(t, e) {
    return (
      t &&
      v(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && v(t[0]))) &&
      !t.nodeType &&
      t !== h
    );
  }
  function cb(r) {
    return (
      (r = Ot(r)[0] || R("Invalid scope") || {}),
      function (t) {
        var e = r.current || r.nativeElement || r;
        return Ot(
          t,
          e.querySelectorAll
            ? e
            : e === r
            ? R("Invalid scope") || a.createElement("div")
            : r
        );
      }
    );
  }
  function db(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function eb(t) {
    if (s(t)) return t;
    var p = v(t) ? t : { each: t },
      _ = Yt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      y = {},
      e = 0 < m && m < 1,
      T = isNaN(m) || e,
      b = p.axis,
      w = m,
      x = m;
    return (
      r(m)
        ? (w = x = { center: 0.5, edges: 0.5, end: 1 }[m] || 0)
        : !e && T && ((w = m[0]), (x = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c = (r || p).length,
          d = y[c];
        if (!d) {
          if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
            for (
              h = -U;
              h < (h = r[f++].getBoundingClientRect().left) && f < c;

            );
            f--;
          }
          for (
            d = y[c] = [],
              i = T ? Math.min(f, c) * w - 0.5 : m % f,
              n = f === U ? 0 : T ? (c * x) / f - 0.5 : (m / f) | 0,
              l = U,
              u = h = 0;
            u < c;
            u++
          )
            (a = (u % f) - i),
              (s = n - ((u / f) | 0)),
              (d[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          "random" === m && db(d),
            (d.max = h - l),
            (d.min = l),
            (d.v = c =
              (parseFloat(p.amount) ||
                parseFloat(p.each) *
                  (c < f
                    ? c - 1
                    : b
                    ? "y" === b
                      ? c / f
                      : f
                    : Math.max(f, c / f)) ||
                0) * ("edges" === m ? -1 : 1)),
            (d.b = c < 0 ? g - c : g),
            (d.u = Ya(p.amount || p.each) || 0),
            (_ = _ && c < 0 ? Lt(_) : _);
        }
        return (
          (c = (d[t] - d.min) / d.max || 0),
          ja(d.b + (_ ? _(c) : c) * d.v) + d.u
        );
      }
    );
  }
  function fb(i) {
    var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function (e) {
      var r = ja(Math.round(parseFloat(e) / i) * i * n);
      return (r - (r % 1)) / n + (t(e) ? 0 : Ya(e));
    };
  }
  function gb(h, e) {
    var l,
      f,
      r = $(h);
    return (
      !r &&
        v(h) &&
        ((l = r = h.radius || U),
        h.values
          ? ((h = Ot(h.values)), (f = !t(h[0])) && (l *= l))
          : (h = fb(h.increment))),
      Wa(
        e,
        r
          ? s(h)
            ? function (t) {
                return (f = h(t)), Math.abs(f - t) <= l ? f : t;
              }
            : function (e) {
                for (
                  var r,
                    i,
                    n = parseFloat(f ? e.x : e),
                    a = parseFloat(f ? e.y : 0),
                    s = U,
                    o = 0,
                    u = h.length;
                  u--;

                )
                  (r = f
                    ? (r = h[u].x - n) * r + (i = h[u].y - a) * i
                    : Math.abs(h[u] - n)) < s && ((s = r), (o = u));
                return (
                  (o = !l || s <= l ? h[o] : e),
                  f || o === e || t(e) ? o : o + Ya(e)
                );
              }
          : fb(h)
      )
    );
  }
  function hb(t, e, r, i) {
    return Wa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return $(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) *
                r *
                i
            ) / i;
    });
  }
  function lb(e, r, t) {
    return Wa(t, function (t) {
      return e[~~r(t)];
    });
  }
  function ob(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? at : tt)),
        (s +=
          t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function rb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = U;
    for (i in s)
      (n = s[i] - e) < 0 == !!r &&
        n &&
        o > (n = Math.abs(n)) &&
        ((a = i), (o = n));
    return a;
  }
  function tb(t) {
    return (
      za(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!B),
      t.progress() < 1 && Ct(t, "onInterrupt"),
      t
    );
  }
  function yb(t, e, r) {
    return (
      ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        At +
        0.5) |
      0
    );
  }
  function zb(e, r, i) {
    var n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p = e ? (t(e) ? [e >> 16, (e >> 8) & At, e & At] : 0) : St.black;
    if (!p) {
      if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), St[e]))
        p = St[e];
      else if ("#" === e.charAt(0)) {
        if (
          (e.length < 6 &&
            (e =
              "#" +
              (n = e.charAt(1)) +
              n +
              (a = e.charAt(2)) +
              a +
              (s = e.charAt(3)) +
              s +
              (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
          9 === e.length)
        )
          return [
            (p = parseInt(e.substr(1, 6), 16)) >> 16,
            (p >> 8) & At,
            p & At,
            parseInt(e.substr(7), 16) / 255,
          ];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & At, e & At];
      } else if ("hsl" === e.substr(0, 3))
        if (((p = d = e.match(tt)), r)) {
          if (~e.indexOf("="))
            return (p = e.match(et)), i && p.length < 4 && (p[3] = 1), p;
        } else
          (o = (+p[0] % 360) / 360),
            (u = p[1] / 100),
            (n =
              2 * (h = p[2] / 100) -
              (a = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
            3 < p.length && (p[3] *= 1),
            (p[0] = yb(o + 1 / 3, n, a)),
            (p[1] = yb(o, n, a)),
            (p[2] = yb(o - 1 / 3, n, a));
      else p = e.match(tt) || St.transparent;
      p = p.map(Number);
    }
    return (
      r &&
        !d &&
        ((n = p[0] / At),
        (a = p[1] / At),
        (s = p[2] / At),
        (h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2),
        l === f
          ? (o = u = 0)
          : ((c = l - f),
            (u = 0.5 < h ? c / (2 - l - f) : c / (l + f)),
            (o =
              l === n
                ? (a - s) / c + (a < s ? 6 : 0)
                : l === a
                ? (s - n) / c + 2
                : (n - a) / c + 4),
            (o *= 60)),
        (p[0] = ~~(o + 0.5)),
        (p[1] = ~~(100 * u + 0.5)),
        (p[2] = ~~(100 * h + 0.5))),
      i && p.length < 4 && (p[3] = 1),
      p
    );
  }
  function Ab(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(Rt).forEach(function (t) {
        var e = t.match(rt) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function Bb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(Rt),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = zb(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      r && ((a = Ab(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(Rt, "1").split(rt)).length - 1; l < s; l++)
        o +=
          n[l] +
          (~i.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Rt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function Eb(t) {
    var e,
      r = t.join(" ");
    if (((Rt.lastIndex = 0), Rt.test(r)))
      return (
        (e = Dt.test(r)),
        (t[1] = Bb(t[1], e)),
        (t[0] = Bb(t[0], e, Ab(t[1]))),
        !0
      );
  }
  function Nb(t) {
    var e = (t + "").split("("),
      r = Ft[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      i,
                      n = {},
                      a = t.substr(1, t.length - 3).split(":"),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (i = r.substr(0, e)),
                      (n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i),
                      (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : (function _valueInParentheses(t) {
                var e = t.indexOf("(") + 1,
                  r = t.indexOf(")"),
                  i = t.indexOf("(", e);
                return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
              })(t)
                .split(",")
                .map(oa)
        )
      : Ft._CE && It.test(t)
      ? Ft._CE("", t)
      : r;
  }
  function Pb(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Ut
        ? Pb(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline
            ? Pb(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  }
  function Rb(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      ha(t, function (t) {
        for (var e in ((Ft[t] = ot[t] = a), (Ft[(n = t.toLowerCase())] = r), a))
          Ft[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Ft[t + "." + e] = a[e];
      }),
      a
    );
  }
  function Sb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Tb(r, t, e) {
    function Hm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * G((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / W) * (Math.asin(1 / i) || 0),
      s =
        "out" === r
          ? Hm
          : "in" === r
          ? function (t) {
              return 1 - Hm(1 - t);
            }
          : Sb(Hm);
    return (
      (n = W / n),
      (s.config = function (t, e) {
        return Tb(r, t, e);
      }),
      s
    );
  }
  function Ub(e, r) {
    function Pm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Pm
        : "in" === e
        ? function (t) {
            return 1 - Pm(1 - t);
          }
        : Sb(Pm);
    return (
      (t.config = function (t) {
        return Ub(e, t);
      }),
      t
    );
  }
  var I,
    B,
    l,
    L,
    h,
    n,
    a,
    i,
    o,
    f,
    c,
    d,
    p,
    _,
    m,
    g,
    b,
    k,
    M,
    O,
    C,
    A,
    D,
    E,
    z,
    F,
    Y,
    N,
    j = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    q = { duration: 0.5, overwrite: !1, delay: 0 },
    U = 1e8,
    V = 1 / U,
    W = 2 * Math.PI,
    X = W / 4,
    H = 0,
    K = Math.sqrt,
    Z = Math.cos,
    G = Math.sin,
    J =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    $ = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = { suppressEvents: !0, isStart: !0, kill: !1 },
    ht = { suppressEvents: !0, kill: !1 },
    lt = { suppressEvents: !0 },
    ft = {},
    ct = [],
    dt = {},
    pt = {},
    _t = {},
    mt = 30,
    gt = [],
    vt = "",
    yt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Tt = function _animationCycle(t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    bt = function _isFromOrFromStart(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    wt = { _start: 0, endTime: T, totalDuration: T },
    xt = function _parsePosition(t, e, i) {
      var n,
        a,
        s,
        o = t.labels,
        u = t._recent || wt,
        h = t.duration() >= U ? u.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in o)
        ? ((a = e.charAt(0)),
          (s = "%" === e.substr(-1)),
          (n = e.indexOf("=")),
          "<" === a || ">" === a
            ? (0 <= n && (e = e.replace(/=/, "")),
              ("<" === a ? u._start : u.endTime(0 <= u._repeat)) +
                (parseFloat(e.substr(1)) || 0) *
                  (s ? (n < 0 ? u : i).totalDuration() / 100 : 1))
            : n < 0
            ? (e in o || (o[e] = h), o[e])
            : ((a = parseFloat(e.charAt(n - 1) + e.substr(n + 1))),
              s && i && (a = (a / 100) * ($(i) ? i[0] : i).totalDuration()),
              1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a))
        : null == e
        ? h
        : +e;
    },
    kt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    Mt = [].slice,
    Ot = function toArray(t, e, i) {
      return l && !e && l.selector
        ? l.selector(t)
        : !r(t) || i || (!n && zt())
        ? $(t)
          ? (function _flatten(t, e, i) {
              return (
                void 0 === i && (i = []),
                t.forEach(function (t) {
                  return (r(t) && !e) || _a(t, 1)
                    ? i.push.apply(i, Ot(t))
                    : i.push(t);
                }) || i
              );
            })(t, i)
          : _a(t)
          ? Mt.call(t, 0)
          : t
          ? [t]
          : []
        : Mt.call((e || a).querySelectorAll(t), 0);
    },
    Pt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Wa(n, function (t) {
        return r + (((t - e) / a) * s || 0);
      });
    },
    Ct = function _callback(t, e, r) {
      var i,
        n,
        a,
        s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
      if (o)
        return (
          (i = s[e + "Params"]),
          (n = s.callbackScope || t),
          r && ct.length && ma(),
          h && (l = h),
          (a = i ? o.apply(n, i) : o.call(n)),
          (l = u),
          a
        );
    },
    At = 255,
    St = {
      aqua: [0, At, At],
      lime: [0, At, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, At],
      navy: [0, 0, 128],
      white: [At, At, At],
      olive: [128, 128, 0],
      yellow: [At, At, 0],
      orange: [At, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [At, 0, 0],
      pink: [At, 192, 203],
      cyan: [0, At, At],
      transparent: [At, At, At, 0],
    },
    Rt = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in St) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Dt = /hsl[a]?\(/,
    Et =
      ((M = Date.now),
      (O = 500),
      (C = 33),
      (A = M()),
      (D = A),
      (z = E = 1e3 / 240),
      (g = {
        time: 0,
        frame: 0,
        tick: function tick() {
          wl(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return b / (1e3 / (t || 60));
        },
        wake: function wake() {
          o &&
            (!n &&
              x() &&
              ((h = n = window),
              (a = h.document || {}),
              (ot.gsap = Ce),
              (h.gsapVersions || (h.gsapVersions = [])).push(Ce.version),
              P(i || h.GreenSockGlobals || (!h.gsap && h) || {}),
              (m = h.requestAnimationFrame)),
            p && g.sleep(),
            (_ =
              m ||
              function (t) {
                return setTimeout(t, (z - 1e3 * g.time + 1) | 0);
              }),
            (d = 1),
            wl(2));
        },
        sleep: function sleep() {
          (m ? h.cancelAnimationFrame : clearTimeout)(p), (d = 0), (_ = T);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (O = t || 1e8), (C = Math.min(e, O, 0));
        },
        fps: function fps(t) {
          (E = 1e3 / (t || 240)), (z = 1e3 * g.time + E);
        },
        add: function add(n, t, e) {
          var a = t
            ? function (t, e, r, i) {
                n(t, e, r, i), g.remove(a);
              }
            : n;
          return g.remove(n), F[e ? "unshift" : "push"](a), zt(), a;
        },
        remove: function remove(t, e) {
          ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= k && k--;
        },
        _listeners: (F = []),
      })),
    zt = function _wake() {
      return !d && Et.wake();
    },
    Ft = {},
    It = /^[\d.\-M][\d.\-,\s]/,
    Bt = /["']/g,
    Lt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Yt = function _parseEase(t, e) {
      return (t && (s(t) ? t : Ft[t] || Nb(t))) || e;
    };
  function wl(t) {
    var e,
      r,
      i,
      n,
      a = M() - D,
      s = !0 === t;
    if (
      (O < a && (A += a - C),
      (0 < (e = (i = (D += a) - A) - z) || s) &&
        ((n = ++g.frame),
        (b = i - 1e3 * g.time),
        (g.time = i /= 1e3),
        (z += e + (E <= e ? 4 : E - e)),
        (r = 1)),
      s || (p = _(wl)),
      r)
    )
      for (k = 0; k < F.length; k++) F[k](i, b, n, t);
  }
  function en(t) {
    return t < N
      ? Y * t * t
      : t < 0.7272727272727273
      ? Y * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? Y * (t -= 2.25 / 2.75) * t + 0.9375
      : Y * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  ha("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Rb(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Ft.Linear.easeNone = Ft.none = Ft.Linear.easeIn),
    Rb("Elastic", Tb("in"), Tb("out"), Tb()),
    (Y = 7.5625),
    (N = 1 / 2.75),
    Rb(
      "Bounce",
      function (t) {
        return 1 - en(1 - t);
      },
      en
    ),
    Rb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Rb("Circ", function (t) {
      return -(K(1 - t * t) - 1);
    }),
    Rb("Sine", function (t) {
      return 1 === t ? 1 : 1 - Z(t * X);
    }),
    Rb("Back", Ub("in"), Ub("out"), Ub()),
    (Ft.SteppedEase =
      Ft.steps =
      ot.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * kt(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (q.ease = Ft["quad.out"]),
    ha(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (vt += t + "," + t + "Params,");
      }
    );
  var Nt,
    jt = function GSCache(t, e) {
      (this.id = H++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : ga),
        (this.set = e ? e.getSetter : re);
    },
    qt =
      (((Nt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (Nt.duration = function duration(t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (Nt.totalDuration = function totalDuration(t) {
        return arguments.length
          ? ((this._dirty = 0),
            Ra(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (Nt.totalTime = function totalTime(t, e) {
        if ((zt(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            Ka(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === V) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), na(this, t, e)),
          this
        );
      }),
      (Nt.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Ea(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (Nt.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (Nt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                Ea(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (Nt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? Tt(this._tTime, r) + 1
          : 1;
      }),
      (Nt.timeScale = function timeScale(t) {
        if (!arguments.length) return this._rts === -V ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -V ? 0 : this._rts),
          this.totalTime(kt(-this._delay, this._tDur, e), !0),
          Ha(this),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this)
        );
      }),
      (Nt.paused = function paused(t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (zt(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== V &&
                      (this._tTime -= V)
                  ))),
            this)
          : this._ps;
      }),
      (Nt.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            !e || (!e._sort && this.parent) || Ka(e, this, t - this._delay),
            this
          );
        }
        return this._start;
      }),
      (Nt.endTime = function endTime(t) {
        return (
          this._start +
          (w(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (Nt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ga(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (Nt.revert = function revert(t) {
        void 0 === t && (t = lt);
        var e = B;
        return (
          (B = t),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          "nested" !== this.data && !1 !== t.kill && this.kill(),
          (B = e),
          this
        );
      }),
      (Nt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (e._ts || 1)), (e = e._dp);
        return !this.parent && this.vars.immediateRender ? -1 : r;
      }),
      (Nt.repeat = function repeat(t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Sa(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (Nt.repeatDelay = function repeatDelay(t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), Sa(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (Nt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (Nt.seek = function seek(t, e) {
        return this.totalTime(xt(this, t), w(e));
      }),
      (Nt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, w(e));
      }),
      (Nt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (Nt.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (Nt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (Nt.resume = function resume() {
        return this.paused(!1);
      }),
      (Nt.reversed = function reversed(t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -V : 0)),
            this)
          : this._rts < 0;
      }),
      (Nt.invalidate = function invalidate() {
        return (this._initted = this._act = 0), (this._zTime = -V), this;
      }),
      (Nt.isActive = function isActive() {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - V
          )
        );
      }),
      (Nt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((i[t] = e),
                r && (i[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete i[t],
            this)
          : i[t];
      }),
      (Nt.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function zo() {
            var t = i.then;
            (i.then = null),
              s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
              e(r),
              (i.then = t);
          }
          var r = s(t) ? t : pa;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
          (!i._tTime && i._ts < 0)
            ? zo()
            : (i._prom = zo);
        });
      }),
      (Nt.kill = function kill() {
        tb(this);
      }),
      Animation);
  function Animation(t) {
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Ra(this, +t.duration, 1, 1),
      (this.data = t.data),
      l && (this._ctx = l).data.push(this),
      d || Et.wake();
  }
  qa(qt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -V,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ut = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = w(t.sortChildren)),
        L && Ka(t.parent || L, _assertThisInitialized(r), e),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var e = Timeline.prototype;
    return (
      (e.to = function to(t, e, r) {
        return Va(0, arguments, this), this;
      }),
      (e.from = function from(t, e, r) {
        return Va(1, arguments, this), this;
      }),
      (e.fromTo = function fromTo(t, e, r, i) {
        return Va(2, arguments, this), this;
      }),
      (e.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          va(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Gt(t, e, xt(this, r), 1),
          this
        );
      }),
      (e.call = function call(t, e, r) {
        return Ka(this, Gt.delayedCall(0, t, e), r);
      }),
      (e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new Gt(t, r, xt(this, n)),
          this
        );
      }),
      (e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
        return (
          (r.runBackwards = 1),
          (va(r).immediateRender = w(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, a, s)
        );
      }),
      (e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
        return (
          (i.startAt = r),
          (va(i).immediateRender = w(i.immediateRender)),
          this.staggerTo(t, e, i, n, a, s, o)
        );
      }),
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : ja(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (
          (this !== L && m < v && 0 <= t && (v = m),
          v !== this._tTime || r || y)
        ) {
          if (
            (_ !== this._time &&
              g &&
              ((v += this._time - _), (t += this._time - _)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (_ = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((d = this._yoyo),
              (o = g + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * o + t, e, r);
            if (
              ((i = ja(v % o)),
              v === m
                ? ((s = this._repeat), (i = g))
                : ((s = ~~(v / o)) && s === v / o && ((i = g), s--),
                  g < i && (i = g)),
              (c = Tt(this._tTime, o)),
              !_ && this._tTime && c !== s && (c = s),
              d && 1 & s && ((i = g - i), (p = 1)),
              s !== c && !this._lock)
            ) {
              var T = d && 1 & c,
                b = T === (d && 1 & s);
              if (
                (s < c && (T = !T),
                (_ = T ? 0 : g),
                (this._lock = 1),
                (this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0),
                (this._tTime = v),
                !e && this.parent && Ct(this, "onRepeat"),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                (_ && _ !== this._time) ||
                  u != !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((g = this._dur),
                (m = this._tDur),
                b &&
                  ((this._lock = 2),
                  (_ = T ? g : -1e-4),
                  this.render(_, !0),
                  this.vars.repeatRefresh && !p && this.invalidate()),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              Pb(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if ("isPause" === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, ja(_), ja(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (_ = 0)),
            !_ && i && !e && (Ct(this, "onStart"), this._tTime !== v))
          )
            return this;
          if (_ <= i && 0 <= t)
            for (n = this._first; n; ) {
              if (
                ((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = -V);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (
                ((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (w - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (w - n._start) * n._ts,
                    e,
                    r || (B && (n._initted || n._startAt))
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = w ? -V : V);
                  break;
                }
              }
              n = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(_ <= i ? 0 : -V)._zTime = _ <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = f), Ha(this), this.render(t, e, r);
          this._onUpdate && !e && Ct(this, "onUpdate", !0),
            ((v === m && this._tTime >= this.totalDuration()) || (!v && _)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) ||
                  !((v === m && 0 < this._ts) || (!v && this._ts < 0)) ||
                  za(this, 1),
                e ||
                  (t < 0 && !_) ||
                  (!v && !_ && m) ||
                  (Ct(
                    this,
                    v === m && 0 <= t ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  !this._prom ||
                    (v < m && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (e.add = function add(e, i) {
        var n = this;
        if ((t(i) || (i = xt(this, i, e)), !(e instanceof qt))) {
          if ($(e))
            return (
              e.forEach(function (t) {
                return n.add(t, i);
              }),
              this
            );
          if (r(e)) return this.addLabel(e, i);
          if (!s(e)) return this;
          e = Gt.delayedCall(0, e);
        }
        return this !== e ? Ka(this, e, i) : this;
      }),
      (e.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -U);
        for (var n = [], a = this._first; a; )
          a._start >= i &&
            (a instanceof Gt
              ? e && n.push(a)
              : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
            (a = a._next);
        return n;
      }),
      (e.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (e.remove = function remove(t) {
        return r(t)
          ? this.removeLabel(t)
          : s(t)
          ? this.killTweensOf(t)
          : (ya(this, t),
            t === this._recent && (this._recent = this._last),
            Aa(this));
      }),
      (e.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ja(
                Et.time -
                  (0 < this._ts
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function addLabel(t, e) {
        return (this.labels[t] = xt(this, e)), this;
      }),
      (e.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (e.addPause = function addPause(t, e, r) {
        var i = Gt.delayedCall(0, e || T, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Ka(this, i, xt(this, t))
        );
      }),
      (e.removePause = function removePause(t) {
        var e = this._first;
        for (t = xt(this, t); e; )
          e._start === t && "isPause" === e.data && za(e), (e = e._next);
      }),
      (e.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          Vt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (e.getTweensOf = function getTweensOf(e, r) {
        for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s; )
          s instanceof Gt
            ? la(s._targets, a) &&
              (o
                ? (!Vt || (s._initted && s._ts)) &&
                  s.globalTime(0) <= r &&
                  s.globalTime(s.totalDuration()) > r
                : !r || s.isActive()) &&
              n.push(s)
            : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i),
            (s = s._next);
        return n;
      }),
      (e.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r,
          i = this,
          n = xt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = Gt.to(
            i,
            qa(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (a && "time" in a ? a.time : i._time)) / i.timeScale()
                  ) ||
                  V,
                onStart: function onStart() {
                  if ((i.pause(), !r)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (n - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      );
                    h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0),
                      (r = 1);
                  }
                  s && s.apply(h, o || []);
                },
              },
              e
            )
          );
        return u ? h.render(0) : h;
      }),
      (e.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, qa({ startAt: { time: xt(this, t) } }, r));
      }),
      (e.recent = function recent() {
        return this._recent;
      }),
      (e.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t));
      }),
      (e.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t), 1);
      }),
      (e.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + V);
      }),
      (e.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return Aa(this);
      }),
      (e.invalidate = function invalidate(t) {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(t), (e = e._next);
        return i.prototype.invalidate.call(this, t);
      }),
      (e.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          Aa(this)
        );
      }),
      (e.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = U;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -t : t)
          );
        if (a._dirty) {
          for (i = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              o < (r = s._start) && a._sort && s._ts && !a._lock
                ? ((a._lock = 1), (Ka(a, s, r - s._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                s._ts &&
                ((n -= r),
                ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                  ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)),
                a.shiftChildren(-r, !1, -Infinity),
                (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          Ra(a, a === L && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((L._ts && (na(L, Ga(t, L)), (f = Et.frame)), Et.frame >= mt)) {
          mt += j.autoSleep || 120;
          var e = L._first;
          if ((!e || !e._ts) && j.autoSleep && Et._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Et.sleep();
          }
        }
      }),
      Timeline
    );
  })(qt);
  qa(Ut.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function _b(t, e, i, n, a, o) {
    var u, h, l, f;
    if (
      pt[t] &&
      !1 !==
        (u = new pt[t]()).init(
          a,
          u.rawVars
            ? e[t]
            : (function _processVars(t, e, i, n, a) {
                if (
                  (s(t) && (t = Qt(t, a, e, i, n)),
                  !v(t) || (t.style && t.nodeType) || $(t) || J(t))
                )
                  return r(t) ? Qt(t, a, e, i, n) : t;
                var o,
                  u = {};
                for (o in t) u[o] = Qt(t[o], a, e, i, n);
                return u;
              })(e[t], n, a, o, i),
          i,
          n,
          o
        ) &&
      ((i._pt = h = new pe(i._pt, a, t, 0, 1, u.render, u, 0, u.priority)),
      i !== c)
    )
      for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--; )
        l[u._props[f]] = h;
    return u;
  }
  function fc(t, r, e, i) {
    var n,
      a,
      s = r.ease || i || "power1.inOut";
    if ($(r))
      (a = e[t] || (e[t] = [])),
        r.forEach(function (t, e) {
          return a.push({ t: (e / (r.length - 1)) * 100, v: t, e: s });
        });
    else
      for (n in r)
        (a = e[n] || (e[n] = [])),
          "ease" === n || a.push({ t: parseFloat(t), v: r[n], e: s });
  }
  var Vt,
    Wt,
    Xt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
      s(n) && (n = n(a || 0, t, o));
      var c,
        d = t[e],
        p =
          "get" !== i
            ? i
            : s(d)
            ? l
              ? t[
                  e.indexOf("set") || !s(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : d,
        _ = s(d) ? (l ? ee : $t) : Jt;
      if (
        (r(n) &&
          (~n.indexOf("random(") && (n = ob(n)),
          "=" === n.charAt(1) &&
            ((!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c) || (n = c))),
        !f || p !== n || Wt)
      )
        return isNaN(p * n) || "" === n
          ? (d || e in t || Q(e, n),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                c,
                d,
                p,
                _ = new pe(this._pt, t, e, 0, 1, se, null, n),
                m = 0,
                g = 0;
              for (
                _.b = r,
                  _.e = i,
                  r += "",
                  (d = ~(i += "").indexOf("random(")) && (i = ob(i)),
                  a && (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
                  u = r.match(it) || [];
                (o = it.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((c = parseFloat(u[g - 1]) || 0),
                    (_._pt = {
                      _next: _._pt,
                      p: f || 1 === g ? f : ",",
                      s: c,
                      c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = it.lastIndex));
              return (
                (_.c = m < i.length ? i.substring(m, i.length) : ""),
                (_.fp = s),
                (nt.test(i) || d) && (_.e = 0),
                (this._pt = _)
              );
            }.call(this, t, e, p, n, _, h || j.stringFilter, l))
          : ((c = new pe(
              this._pt,
              t,
              e,
              +p || 0,
              n - (p || 0),
              "boolean" == typeof d ? ae : ne,
              0,
              _
            )),
            l && (c.fp = l),
            u && c.modifier(u, this, t),
            (this._pt = c));
    },
    Ht = function _initTween(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        x = m.onUpdateParams,
        k = m.callbackScope,
        M = m.runBackwards,
        O = m.yoyoEase,
        P = m.keyframes,
        C = m.autoRevert,
        A = t._dur,
        S = t._startAt,
        R = t._targets,
        D = t.parent,
        E = D && "nested" === D.data ? D.vars.targets : R,
        z = "auto" === t._overwrite && !I,
        F = t.timeline;
      if (
        (!F || (P && g) || (g = "none"),
        (t._ease = Yt(g, q.ease)),
        (t._yEase = O ? Lt(Yt(!0 === O ? g : O, q.ease)) : 0),
        O &&
          t._yoyo &&
          !t._repeat &&
          ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
        (t._from = !F && !!m.runBackwards),
        !F || (P && !m.stagger))
      ) {
        if (
          ((p = (l = R[0] ? fa(R[0]).harness : 0) && m[l.prop]),
          (i = ua(m, ft)),
          S &&
            (S._zTime < 0 && S.progress(1),
            e < 0 && M && y && !C
              ? S.render(-1, !0)
              : S.revert(M && A ? ht : ut),
            (S._lazy = 0)),
          v)
        ) {
          if (
            (za(
              (t._startAt = Gt.set(
                R,
                qa(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: w(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: x,
                    callbackScope: k,
                    stagger: 0,
                  },
                  v
                )
              ))
            ),
            e < 0 && (B || (!y && !C)) && t._startAt.revert(ht),
            y && A && e <= 0 && r <= 0)
          )
            return void (e && (t._zTime = e));
        } else if (M && A && !S)
          if (
            (e && (y = !1),
            (a = qa(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: y && w(T),
                immediateRender: y,
                stagger: 0,
                parent: D,
              },
              i
            )),
            p && (a[l.prop] = p),
            za((t._startAt = Gt.set(R, a))),
            e < 0 && (B ? t._startAt.revert(ht) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            y)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, V, V);
        for (
          t._pt = t._ptCache = 0, T = (A && w(T)) || (T && !A), n = 0;
          n < R.length;
          n++
        ) {
          if (
            ((h = (o = R[n])._gsap || ea(R)[n]._gsap),
            (t._ptLookup[n] = c = {}),
            dt[h.id] && ct.length && ma(),
            (d = E === R ? n : E.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, p || i, t, d, E) &&
              ((t._pt = s =
                new pe(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                c[t] = s;
              }),
              f.priority && (u = 1)),
            !l || p)
          )
            for (a in i)
              pt[a] && (f = _b(a, i, t, d, o, E))
                ? f.priority && (u = 1)
                : (c[a] = s =
                    Xt.call(t, o, a, "get", i[a], d, E, 0, m.stringFilter));
          t._op && t._op[n] && t.kill(o, t._op[n]),
            z &&
              t._pt &&
              ((Vt = t),
              L.killTweensOf(o, c, t.globalTime(e)),
              (_ = !t.parent),
              (Vt = 0)),
            t._pt && T && (dt[h.id] = 1);
        }
        u && de(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = b),
        (t._initted = (!t._op || t._pt) && !_),
        P && e <= 0 && F.render(U, !0, !0);
    },
    Qt = function _parseFuncOrString(t, e, i, n, a) {
      return s(t)
        ? t.call(e, i, n, a)
        : r(t) && ~t.indexOf("random(")
        ? ob(t)
        : t;
    },
    Kt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Zt = {};
  ha(Kt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (Zt[t] = 1);
  });
  var Gt = (function (z) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && ((i.duration = r), (r = i), (i = null));
      var s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p = (a = z.call(this, n ? r : va(r)) || this).vars,
        _ = p.duration,
        m = p.delay,
        g = p.immediateRender,
        T = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        k = p.defaults,
        M = p.scrollTrigger,
        O = p.yoyoEase,
        P = r.parent || L,
        C = ($(e) || J(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
      if (
        ((a._targets = C.length
          ? ea(C)
          : R(
              "GSAP target " + e + " not found. https://greensock.com",
              !j.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = b),
        x || T || y(_) || y(m))
      ) {
        if (
          ((r = a.vars),
          (s = a.timeline =
            new Ut({
              data: "nested",
              defaults: k || {},
              targets: P && "nested" === P.data ? P.vars.targets : C,
            })).kill(),
          (s.parent = s._dp = _assertThisInitialized(a)),
          (s._start = 0),
          T || y(_) || y(m))
        ) {
          if (((h = C.length), (c = T && eb(T)), v(T)))
            for (l in T) ~Kt.indexOf(l) && ((d = d || {})[l] = T[l]);
          for (o = 0; o < h; o++)
            ((u = ua(r, Zt)).stagger = 0),
              O && (u.yoyoEase = O),
              d && yt(u, d),
              (f = C[o]),
              (u.duration = +Qt(_, _assertThisInitialized(a), o, f, C)),
              (u.delay =
                (+Qt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay),
              !T &&
                1 === h &&
                u.delay &&
                ((a._delay = m = u.delay), (a._start += m), (u.delay = 0)),
              s.to(f, u, c ? c(o, f, C) : 0),
              (s._ease = Ft.none);
          s.duration() ? (_ = m = 0) : (a.timeline = 0);
        } else if (x) {
          va(qa(s.vars.defaults, { ease: "none" })),
            (s._ease = Yt(x.ease || r.ease || "none"));
          var A,
            S,
            D,
            E = 0;
          if ($(x))
            x.forEach(function (t) {
              return s.to(C, t, ">");
            }),
              s.duration();
          else {
            for (l in ((u = {}), x))
              "ease" === l || "easeEach" === l || fc(l, x[l], u, x.easeEach);
            for (l in u)
              for (
                A = u[l].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  o = E = 0;
                o < A.length;
                o++
              )
                ((D = {
                  ease: (S = A[o]).e,
                  duration: ((S.t - (o ? A[o - 1].t : 0)) / 100) * _,
                })[l] = S.v),
                  s.to(C, D, E),
                  (E += D.duration);
            s.duration() < _ && s.to({}, { duration: _ - s.duration() });
          }
        }
        _ || a.duration((_ = s.duration()));
      } else a.timeline = 0;
      return (
        !0 !== b ||
          I ||
          ((Vt = _assertThisInitialized(a)), L.killTweensOf(C), (Vt = 0)),
        Ka(P, _assertThisInitialized(a), i),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (g ||
          (!_ &&
            !x &&
            a._start === ja(P._time) &&
            w(g) &&
            (function _hasNoPausedAncestors(t) {
              return !t || (t._ts && _hasNoPausedAncestors(t.parent));
            })(_assertThisInitialized(a)) &&
            "nested" !== P.data)) &&
          ((a._tTime = -V), a.render(Math.max(0, -m) || 0)),
        M && La(_assertThisInitialized(a), M),
        a
      );
    }
    _inheritsLoose(Tween, z);
    var e = Tween.prototype;
    return (
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c = this._time,
          d = this._tDur,
          p = this._dur,
          _ = t < 0,
          m = d - V < t && !_ ? d : t < V ? 0 : t;
        if (p) {
          if (
            m !== this._tTime ||
            !t ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != _)
          ) {
            if (((i = m), (l = this.timeline), this._repeat)) {
              if (((s = p + this._rDelay), this._repeat < -1 && _))
                return this.totalTime(100 * s + t, e, r);
              if (
                ((i = ja(m % s)),
                m === d
                  ? ((a = this._repeat), (i = p))
                  : ((a = ~~(m / s)) && a === m / s && ((i = p), a--),
                    p < i && (i = p)),
                (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = p - i)),
                (o = Tt(this._tTime, s)),
                i === c && !r && this._initted)
              )
                return (this._tTime = m), this;
              a !== o &&
                (l && this._yEase && Pb(l, u),
                !this.vars.repeatRefresh ||
                  u ||
                  this._lock ||
                  ((this._lock = r = 1),
                  (this.render(ja(s * a), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Ma(this, _ ? t : i, r, e, m)) return (this._tTime = 0), this;
              if (c !== this._time) return this;
              if (p !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = m),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = h = (f || this._ease)(i / p)),
              this._from && (this.ratio = h = 1 - h),
              i && !c && !e && (Ct(this, "onStart"), this._tTime !== m))
            )
              return this;
            for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
            (l &&
              l.render(
                t < 0 ? t : !i && u ? -V : l._dur * l._ease(i / this._dur),
                e,
                r
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (_ && Ca(this, t, 0, r), Ct(this, "onUpdate")),
              this._repeat &&
                a !== o &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                Ct(this, "onRepeat"),
              (m !== this._tDur && m) ||
                this._tTime !== m ||
                (_ && !this._onUpdate && Ca(this, t, 0, !0),
                (!t && p) ||
                  !(
                    (m === this._tDur && 0 < this._ts) ||
                    (!m && this._ts < 0)
                  ) ||
                  za(this, 1),
                e ||
                  (_ && !c) ||
                  !(m || c || u) ||
                  (Ct(this, m === d ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (m < d && 0 < this.timeScale()) ||
                    this._prom()));
          }
        } else
          !(function _renderZeroDurationTween(t, e, r, i) {
            var n,
              a,
              s,
              o = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start &&
                    (function _parentPlayheadIsBeforeStart(t) {
                      var e = t.parent;
                      return (
                        e &&
                        e._ts &&
                        e._initted &&
                        !e._lock &&
                        (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                      );
                    })(t) &&
                    (t._initted || !bt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !bt(t))))
                  ? 0
                  : 1,
              h = t._rDelay,
              l = 0;
            if (
              (h &&
                t._repeat &&
                ((l = kt(0, t._tDur, e)),
                (a = Tt(l, h)),
                t._yoyo && 1 & a && (u = 1 - u),
                a !== Tt(t._tTime, h) &&
                  ((o = 1 - u),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== o || B || i || t._zTime === V || (!e && t._zTime))
            ) {
              if (!t._initted && Ma(t, e, i, r, l)) return;
              for (
                s = t._zTime,
                  t._zTime = e || (r ? V : 0),
                  r = r || (e && !s),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = l,
                  n = t._pt;
                n;

              )
                n.r(u, n.d), (n = n._next);
              e < 0 && Ca(t, e, 0, !0),
                t._onUpdate && !r && Ct(t, "onUpdate"),
                l && t._repeat && !r && t.parent && Ct(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && za(t, 1),
                  r ||
                    B ||
                    (Ct(t, u ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (e.targets = function targets() {
        return this._targets;
      }),
      (e.invalidate = function invalidate(t) {
        return (
          (t && this.vars.runBackwards) || (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          z.prototype.invalidate.call(this, t)
        );
      }),
      (e.resetTo = function resetTo(t, e, r, i) {
        d || Et.wake(), this._ts || this.play();
        var n,
          a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Ht(this, a),
          (n = this._ease(a / this._dur)),
          (function _updatePropTweens(t, e, r, i, n, a, s) {
            var o,
              u,
              h,
              l,
              f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!f)
              for (
                f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length;
                l--;

              ) {
                if ((o = h[l][e]) && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== e && o.fp !== e; ) o = o._next;
                if (!o)
                  return (Wt = 1), (t.vars[e] = "+=0"), Ht(t, s), (Wt = 0), 1;
                f.push(o);
              }
            for (l = f.length; l--; )
              ((o = (u = f[l])._pt || u).s =
                (!i && 0 !== i) || n ? o.s + (i || 0) + a * o.c : i),
                (o.c = r - o.s),
                u.e && (u.e = ia(r) + Ya(u.e)),
                u.b && (u.b = o.s + Ya(u.b));
          })(this, t, e, r, i, n, a)
            ? this.resetTo(t, e, r, i)
            : (Ia(this, 0),
              this.parent ||
                xa(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (e.kill = function kill(t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? tb(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Vt && !0 !== Vt.vars.overwrite)
              ._first || tb(this),
            this.parent &&
              i !== this.timeline.totalDuration() &&
              Ra(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var n,
          a,
          s,
          o,
          u,
          h,
          l,
          f = this._targets,
          c = t ? Ot(t) : f,
          d = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function _arraysMatch(t, e) {
            for (
              var r = t.length, i = r === e.length;
              i && r-- && t[r] === e[r];

            );
            return r < 0;
          })(f, c)
        )
          return "all" === e && (this._pt = 0), tb(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (r(e) &&
                ((u = {}),
                ha(e, function (t) {
                  return (u[t] = 1);
                }),
                (e = u)),
              (e = (function _addAliasesToVars(t, e) {
                var r,
                  i,
                  n,
                  a,
                  s = t[0] ? fa(t[0]).harness : 0,
                  o = s && s.aliases;
                if (!o) return e;
                for (i in ((r = yt({}, e)), o))
                  if ((i in r))
                    for (n = (a = o[i].split(",")).length; n--; )
                      r[a[n]] = r[i];
                return r;
              })(f, e))),
            l = f.length;
          l--;

        )
          if (~c.indexOf(f[l]))
            for (u in ((a = d[l]),
            "all" === e
              ? ((n[l] = e), (o = a), (s = {}))
              : ((s = n[l] = n[l] || {}), (o = e)),
            o))
              (h = a && a[u]) &&
                (("kill" in h.d && !0 !== h.d.kill(u)) || ya(this, h, "_pt"),
                delete a[u]),
                "all" !== s && (s[u] = 1);
        return this._initted && !this._pt && p && tb(this), this;
      }),
      (Tween.to = function to(t, e, r) {
        return new Tween(t, e, r);
      }),
      (Tween.from = function from(t, e) {
        return Va(1, arguments);
      }),
      (Tween.delayedCall = function delayedCall(t, e, r, i) {
        return new Tween(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i,
        });
      }),
      (Tween.fromTo = function fromTo(t, e, r) {
        return Va(2, arguments);
      }),
      (Tween.set = function set(t, e) {
        return (
          (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        );
      }),
      (Tween.killTweensOf = function killTweensOf(t, e, r) {
        return L.killTweensOf(t, e, r);
      }),
      Tween
    );
  })(qt);
  qa(Gt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ha("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Gt[r] = function () {
        var t = new Ut(),
          e = Mt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function nc(t, e, r) {
    return t.setAttribute(e, r);
  }
  function vc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Jt = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    $t = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    ee = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    re = function _getSetter(t, e) {
      return s(t[e]) ? $t : u(t[e]) && t.setAttribute ? nc : Jt;
    },
    ne = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    ae = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    se = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    oe = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    le = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; )
        (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    fe = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? ya(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    de = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a),
          (a._next = r) ? (r._prev = a) : (n = a),
          (a = e);
      }
      t._pt = i;
    },
    pe =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = vc),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = a || ne),
      (this.d = s || this),
      (this.set = o || Jt),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  ha(
    vt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ft[t] = 1);
    }
  ),
    (ot.TweenMax = ot.TweenLite = Gt),
    (ot.TimelineLite = ot.TimelineMax = Ut),
    (L = new Ut({
      sortChildren: !1,
      defaults: q,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (j.stringFilter = Eb);
  function Cc(t) {
    return (Te[t] || we).map(function (t) {
      return t();
    });
  }
  function Dc() {
    var t = Date.now(),
      o = [];
    2 < t - xe &&
      (Cc("matchMediaInit"),
      ye.forEach(function (t) {
        var e,
          r,
          i,
          n,
          a = t.queries,
          s = t.conditions;
        for (r in a)
          (e = h.matchMedia(a[r]).matches) && (i = 1),
            e !== s[r] && ((s[r] = e), (n = 1));
        n && (t.revert(), i && o.push(t));
      }),
      Cc("matchMediaRevert"),
      o.forEach(function (t) {
        return t.onMatch(t);
      }),
      (xe = t),
      Cc("matchMedia"));
  }
  var _e,
    ye = [],
    Te = {},
    we = [],
    xe = 0,
    ke =
      (((_e = Context.prototype).add = function add(t, i, n) {
        function Cw() {
          var t,
            e = l,
            r = a.selector;
          return (
            e && e !== a && e.data.push(a),
            n && (a.selector = cb(n)),
            (l = a),
            (t = i.apply(a, arguments)),
            s(t) && a._r.push(t),
            (l = e),
            (a.selector = r),
            (a.isReverted = !1),
            t
          );
        }
        s(t) && ((n = i), (i = t), (t = s));
        var a = this;
        return (a.last = Cw), t === s ? Cw(a) : t ? (a[t] = Cw) : Cw;
      }),
      (_e.ignore = function ignore(t) {
        var e = l;
        (l = null), t(this), (l = e);
      }),
      (_e.getTweens = function getTweens() {
        var e = [];
        return (
          this.data.forEach(function (t) {
            return t instanceof Context
              ? e.push.apply(e, t.getTweens())
              : t instanceof Gt &&
                  !(t.parent && "nested" === t.parent.data) &&
                  e.push(t);
          }),
          e
        );
      }),
      (_e.clear = function clear() {
        this._r.length = this.data.length = 0;
      }),
      (_e.kill = function kill(e, t) {
        var r = this;
        if (e) {
          var i = this.getTweens();
          this.data.forEach(function (t) {
            "isFlip" === t.data &&
              (t.revert(),
              t.getChildren(!0, !0, !1).forEach(function (t) {
                return i.splice(i.indexOf(t), 1);
              }));
          }),
            i
              .map(function (t) {
                return { g: t.globalTime(0), t: t };
              })
              .sort(function (t, e) {
                return e.g - t.g || -1;
              })
              .forEach(function (t) {
                return t.t.revert(e);
              }),
            this.data.forEach(function (t) {
              return !(t instanceof qt) && t.revert && t.revert(e);
            }),
            this._r.forEach(function (t) {
              return t(e, r);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (t) {
            return t.kill && t.kill();
          });
        if ((this.clear(), t)) {
          var n = ye.indexOf(this);
          ~n && ye.splice(n, 1);
        }
      }),
      (_e.revert = function revert(t) {
        this.kill(t || {});
      }),
      Context);
  function Context(t, e) {
    (this.selector = e && cb(e)),
      (this.data = []),
      (this._r = []),
      (this.isReverted = !1),
      t && this.add(t);
  }
  var Me,
    Oe =
      (((Me = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = { matches: t });
        var i,
          n,
          a,
          s = new ke(0, r || this.scope),
          o = (s.conditions = {});
        for (n in (this.contexts.push(s),
        (e = s.add("onMatch", e)),
        (s.queries = t)))
          "all" === n
            ? (a = 1)
            : (i = h.matchMedia(t[n])) &&
              (ye.indexOf(s) < 0 && ye.push(s),
              (o[n] = i.matches) && (a = 1),
              i.addListener
                ? i.addListener(Dc)
                : i.addEventListener("change", Dc));
        return a && e(s), this;
      }),
      (Me.revert = function revert(t) {
        this.kill(t || {});
      }),
      (Me.kill = function kill(e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      MatchMedia);
  function MatchMedia(t) {
    (this.contexts = []), (this.scope = t);
  }
  var Pe = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return (function _createPlugin(t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = s(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: T,
              render: oe,
              add: Xt,
              kill: fe,
              modifier: le,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: re,
              aliases: {},
              register: 0,
            };
          if ((zt(), t !== i)) {
            if (pt[e]) return;
            qa(i, qa(ua(t, n), a)),
              yt(i.prototype, yt(n, ua(t, a))),
              (pt[(i.prop = e)] = i),
              t.targetTest && (gt.push(i), (ft[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          S(e, i), t.register && t.register(Ce, i, pe);
        })(t);
      });
    },
    timeline: function timeline(t) {
      return new Ut(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return L.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Ot(i)[0]);
      var a = fa(i || {}).get,
        s = e ? pa : oa;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((pt[t] && pt[t].get) || a)(i, t, e, n))
            : function (t, e, r) {
                return s(((pt[t] && pt[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Ot(r)).length) {
        var n = r.map(function (t) {
            return Ce.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = pt[e],
        o = fa(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s();
              (c._pt = 0),
                e.init(r, i ? t + i : t, c, 0, [r]),
                e.render(1, e),
                c._pt && oe(1, c);
            }
          : o.set(r, u);
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1);
          };
    },
    quickTo: function quickTo(t, i, e) {
      function Ux(t, e, r) {
        return n.resetTo(i, t, e, r);
      }
      var r,
        n = Ce.to(
          t,
          yt((((r = {})[i] = "+=0.1"), (r.paused = !0), r), e || {})
        );
      return (Ux.tween = n), Ux;
    },
    isTweening: function isTweening(t) {
      return 0 < L.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Yt(t.ease, q.ease)), ta(q, t || {});
    },
    config: function config(t) {
      return ta(j, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return (
          t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
        );
      }),
        (_t[i] = function (t, e, r) {
          return n(Ot(t), qa(e || {}, a), r);
        }),
        r &&
          (Ut.prototype[i] = function (t, e, r) {
            return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r);
          });
    },
    registerEase: function registerEase(t, e) {
      Ft[t] = Yt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Yt(t, e) : Ft;
    },
    getById: function getById(t) {
      return L.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Ut(t);
      for (
        n.smoothChildTiming = w(t.smoothChildTiming),
          L.remove(n),
          n._dp = 0,
          n._time = n._tTime = L._time,
          r = L._first;
        r;

      )
        (i = r._next),
          (!e &&
            !r._dur &&
            r instanceof Gt &&
            r.vars.onComplete === r._targets[0]) ||
            Ka(n, r, r._start - r._delay),
          (r = i);
      return Ka(L, n, 0), n;
    },
    context: function context(t, e) {
      return t ? new ke(t, e) : l;
    },
    matchMedia: function matchMedia(t) {
      return new Oe(t);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return (
        ye.forEach(function (t) {
          var e,
            r,
            i = t.conditions;
          for (r in i) i[r] && ((i[r] = !1), (e = 1));
          e && t.revert();
        }) || Dc()
      );
    },
    addEventListener: function addEventListener(t, e) {
      var r = Te[t] || (Te[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = Te[t],
        i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return $(e)
          ? lb(e, wrap(0, e.length), t)
          : Wa(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return $(e)
          ? lb(e, wrapYoyo(0, e.length - 1), t)
          : Wa(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t);
            });
      },
      distribute: eb,
      random: hb,
      snap: gb,
      normalize: function normalize(t, e, r) {
        return Pt(t, e, 0, 1, r);
      },
      getUnit: Ya,
      clamp: function clamp(e, r, t) {
        return Wa(t, function (t) {
          return kt(e, r, t);
        });
      },
      splitColor: zb,
      toArray: Ot,
      selector: cb,
      mapRange: Pt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ya(t));
        };
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i)
          ? 0
          : function (t) {
              return (1 - t) * e + t * i;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = r(e),
            c = {};
          if ((!0 === t && (n = 1) && (t = null), f))
            (e = { p: e }), (i = { p: i });
          else if ($(e) && !$(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = i);
          } else n || (e = yt($(e) ? [] : {}, e));
          if (!u) {
            for (s in i) Xt.call(c, e, s, "get", i[s]);
            a = function func(t) {
              return oe(t, c) || (f ? e.p : e);
            };
          }
        }
        return Wa(t, a);
      },
      shuffle: db,
    },
    install: P,
    effects: _t,
    ticker: Et,
    updateRoot: Ut.updateRoot,
    plugins: pt,
    globalTimeline: L,
    core: {
      PropTween: pe,
      globals: S,
      Tween: Gt,
      Timeline: Ut,
      Animation: qt,
      getCache: fa,
      _removeLinkedListItem: ya,
      reverting: function reverting() {
        return B;
      },
      context: function context(t) {
        return t && l && (l.data.push(t), (t._ctx = l)), l;
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return (I = t);
      },
    },
  };
  ha("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Pe[t] = Gt[t]);
  }),
    Et.add(Ut.updateRoot),
    (c = Pe.to({}, { duration: 0 }));
  function Hc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function Jc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;
          if (
            (r(n) &&
              ((e = {}),
              ha(n, function (t) {
                return (e[t] = 1);
              }),
              (n = e)),
            a)
          ) {
            for (i in ((e = {}), n)) e[i] = a(n[i]);
            n = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e)
              for (i = a.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = Hc(n, r)),
                  n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, n);
        };
      },
    };
  }
  var Ce =
    Pe.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, i, n) {
          var a, s, o;
          for (a in ((this.tween = r), e))
            (o = t.getAttribute(a) || ""),
              ((s = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[a],
                i,
                n,
                0,
                0,
                a
              )).op = a),
              (s.b = o),
              this._props.push(a);
        },
        render: function render(t, e) {
          for (var r = e._pt; r; )
            B ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; )
            this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Jc("roundProps", fb),
      Jc("modifiers"),
      Jc("snap", gb)
    ) || Pe;
  (Gt.version = Ut.version = Ce.version = "3.11.2"), (o = 1), x() && zt();
  function td(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function ud(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function vd(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function wd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function xd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function yd(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function zd(t, e, r) {
    return (t.style[e] = r);
  }
  function Ad(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Bd(t, e, r) {
    return (t._gsap[e] = r);
  }
  function Cd(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Dd(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function Ed(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function Hd(t, e) {
    var r = this,
      i = this.target,
      n = i.style;
    if (t in rr) {
      if (
        ((this.tfm = this.tfm || {}),
        "transform" !== t &&
          (~(t = hr[t] || t).indexOf(",")
            ? t.split(",").forEach(function (t) {
                return (r.tfm[t] = mr(i, t));
              })
            : (this.tfm[t] = i._gsap.x ? i._gsap[t] : mr(i, t))),
        0 <= this.props.indexOf(lr))
      )
        return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(fr, e, "")),
        (t = lr);
    }
    (n || e) && this.props.push(t, e, n[t]);
  }
  function Id(t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  }
  function Jd() {
    var t,
      e,
      r = this.props,
      i = this.target,
      n = i.style,
      a = i._gsap;
    for (t = 0; t < r.length; t += 3)
      r[t + 1]
        ? (i[r[t]] = r[t + 2])
        : r[t + 2]
        ? (n[r[t]] = r[t + 2])
        : n.removeProperty(r[t].replace(sr, "-$1").toLowerCase());
    if (this.tfm) {
      for (e in this.tfm) a[e] = this.tfm[e];
      a.svg &&
        (a.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        !(t = Fe()) || t.isStart || n[lr] || (Id(n), (a.uncache = 1));
    }
  }
  function Kd(t, e) {
    var r = { target: t, props: [], revert: Jd, save: Hd };
    return (
      e &&
        e.split(",").forEach(function (t) {
          return r.save(t);
        }),
      r
    );
  }
  function Md(t, e) {
    var r = Se.createElementNS
      ? Se.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : Se.createElement(t);
    return r.style ? r : Se.createElement(t);
  }
  function Nd(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(sr, "-$1").toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && Nd(t, dr(e) || e, 1)) ||
      ""
    );
  }
  function Qd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() &&
      window.document &&
      ((Ae = window),
      (Se = Ae.document),
      (Re = Se.documentElement),
      (Ee = Md("div") || { style: {} }),
      Md("div"),
      (lr = dr(lr)),
      (fr = lr + "Origin"),
      (Ee.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ie = !!dr("perspective")),
      (Fe = Ce.core.reverting),
      (De = 1));
  }
  function Rd(t) {
    var e,
      r = Md(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (
      (Re.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = Rd);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      Re.removeChild(r),
      (this.style.cssText = a),
      e
    );
  }
  function Sd(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Td(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = Rd.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === Rd || (r = Rd.call(e, !0)),
      !r || r.width || r.x || r.y
        ? r
        : {
            x: +Sd(e, ["x", "cx", "x1"]) || 0,
            y: +Sd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function Ud(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Td(t));
  }
  function Vd(t, e) {
    if (e) {
      var r = t.style;
      e in rr && e !== fr && (e = lr),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(sr, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function Wd(t, e, r, i, n, a) {
    var s = new pe(t._pt, e, r, 0, 1, a ? yd : xd);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function Zd(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = Ee.style,
      f = or.test(e),
      c = "svg" === t.tagName.toLowerCase(),
      d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    return i === h || !u || pr[i] || pr[h]
      ? u
      : ("px" === h || p || (u = Zd(t, e, r, "px")),
        (o = t.getCTM && Ud(t)),
        (!_ && "%" !== h) || (!rr[e] && !~e.indexOf("adius"))
          ? ((l[f ? "width" : "height"] = 100 + (p ? h : i)),
            (a =
              ~e.indexOf("adius") || ("em" === i && t.appendChild && !c)
                ? t
                : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== Se && a.appendChild) || (a = Se.body),
            (s = a._gsap) &&
            _ &&
            s.width &&
            f &&
            s.time === Et.time &&
            !s.uncache
              ? ia((u / s.width) * 100)
              : ((!_ && "%" !== h) ||
                  _r[Nd(a, "display")] ||
                  (l.position = Nd(t, "position")),
                a === t && (l.position = "static"),
                a.appendChild(Ee),
                (n = Ee[d]),
                a.removeChild(Ee),
                (l.position = "absolute"),
                f && _ && (((s = fa(a)).time = Et.time), (s.width = a[d])),
                ia(p ? (n * u) / 100 : n && u ? (100 / n) * u : 0)))
          : ((n = o ? t.getBBox()[f ? "width" : "height"] : t[d]),
            ia(_ ? (u / n) * 100 : (u / 100) * n)));
  }
  function _d(t, e, r, i) {
    if (!r || "none" === r) {
      var n = dr(e, t, 1),
        a = n && Nd(t, n, 1);
      a && a !== r
        ? ((e = n), (r = a))
        : "borderColor" === e && (r = Nd(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p,
      _,
      m,
      g = new pe(this._pt, t.style, e, 0, 1, se),
      v = 0,
      y = 0;
    if (
      ((g.b = r),
      (g.e = i),
      (r += ""),
      "auto" === (i += "") &&
        ((t.style[e] = i), (i = Nd(t, e) || i), (t.style[e] = r)),
      Eb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(rt) || []),
      (i.match(rt) || []).length)
    ) {
      for (; (o = rt.exec(i)); )
        (c = o[0]),
          (p = i.substring(v, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (l = 1),
          c !== (f = u[y++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            "=" === c.charAt(1) && (c = ka(h, c) + m),
            (d = parseFloat(c)),
            (_ = c.substr((d + "").length)),
            (v = rt.lastIndex - _.length),
            _ ||
              ((_ = _ || j.units[e] || m),
              v === i.length && ((i += _), (g.e += _))),
            m !== _ && (h = Zd(t, e, f, _) || 0),
            (g._pt = {
              _next: g._pt,
              p: p || 1 === y ? p : ",",
              s: h,
              c: d - h,
              m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
            }));
      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? yd : xd;
    return nt.test(i) && (g.e = 0), (this._pt = g);
  }
  function be(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) ||
        ((t = r), (r = i), (i = t)),
      (e[0] = gr[r] || r),
      (e[1] = gr[i] || i),
      e.join(" ")
    );
  }
  function ce(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
      else
        for (n = (o = o.split(",")).length; -1 < --n; )
          (r = o[n]),
            rr[r] && ((i = 1), (r = "transformOrigin" === r ? fr : lr)),
            Vd(a, r);
      i &&
        (Vd(a, lr),
        u &&
          (u.svg && a.removeAttribute("transform"),
          br(a, 1),
          (u.uncache = 1),
          Id(s)));
    }
  }
  function ge(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function he(t) {
    var e = Nd(t, lr);
    return ge(e) ? yr : e.substr(7).match(et).map(ia);
  }
  function ie(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || fa(t),
      o = t.style,
      u = he(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(",")
        ? yr
        : u
      : (u !== yr ||
          t.offsetParent ||
          t === Re ||
          s.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (i = t.nextElementSibling), Re.appendChild(t)),
          (u = he(t)),
          n ? (o.display = n) : Vd(t, "display"),
          a &&
            (i
              ? r.insertBefore(t, i)
              : r
              ? r.appendChild(t)
              : Re.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function je(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || ie(t, !0),
      f = h.xOrigin || 0,
      c = h.yOrigin || 0,
      d = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r
      ? l !== yr &&
        (o = _ * v - m * g) &&
        ((u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o),
        (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o),
        (x = u))
      : ((w = (s = Td(t)).x + (~b[0].indexOf("%") ? (w / 100) * s.width : w)),
        (x = s.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth)
        ? ((y = w - f),
          (T = x - c),
          (h.xOffset = d + (y * _ + T * g) - y),
          (h.yOffset = p + (y * m + T * v) - T))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[fr] = "0px 0px"),
      a &&
        (Wd(a, h, "xOrigin", f, w),
        Wd(a, h, "yOrigin", c, x),
        Wd(a, h, "xOffset", d, h.xOffset),
        Wd(a, h, "yOffset", p, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + x);
  }
  function me(t, e, r) {
    var i = Ya(e);
    return ia(parseFloat(e) + parseFloat(Zd(t, "x", r + "px", i))) + i;
  }
  function te(t, e, i, n, a) {
    var s,
      o,
      u = 360,
      h = r(a),
      l = parseFloat(a) * (h && ~a.indexOf("rad") ? ir : 1) - n,
      f = n + l + "deg";
    return (
      h &&
        ("short" === (s = a.split("_")[1]) &&
          (l %= u) !== l % 180 &&
          (l += l < 0 ? u : -u),
        "cw" === s && l < 0
          ? (l = ((l + 36e9) % u) - ~~(l / u) * u)
          : "ccw" === s && 0 < l && (l = ((l - 36e9) % u) - ~~(l / u) * u)),
      (t._pt = o = new pe(t._pt, e, i, n, l, ud)),
      (o.e = f),
      (o.u = "deg"),
      t._props.push(i),
      o
    );
  }
  function ue(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function ve(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = ue({}, r._gsap),
      f = r.style;
    for (n in (l.svg
      ? ((a = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (f[lr] = e),
        (i = br(r, 1)),
        Vd(r, lr),
        r.setAttribute("transform", a))
      : ((a = getComputedStyle(r)[lr]),
        (f[lr] = e),
        (i = br(r, 1)),
        (f[lr] = a)),
    rr))
      (a = l[n]) !== (s = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = Ya(a) !== (h = Ya(s)) ? Zd(r, n, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new pe(t._pt, i, n, o, u - o, td)),
        (t._pt.u = h || 0),
        t._props.push(n));
    ue(i, l);
  }
  var Ae,
    Se,
    Re,
    De,
    Ee,
    ze,
    Fe,
    Ie,
    Be = Ft.Power0,
    Le = Ft.Power1,
    Ye = Ft.Power2,
    Ne = Ft.Power3,
    qe = Ft.Power4,
    Ue = Ft.Linear,
    Ve = Ft.Quad,
    We = Ft.Cubic,
    Xe = Ft.Quart,
    He = Ft.Quint,
    Qe = Ft.Strong,
    Ke = Ft.Elastic,
    Ze = Ft.Back,
    Ge = Ft.SteppedEase,
    Je = Ft.Bounce,
    $e = Ft.Sine,
    tr = Ft.Expo,
    er = Ft.Circ,
    rr = {},
    ir = 180 / Math.PI,
    nr = Math.PI / 180,
    ar = Math.atan2,
    sr = /([A-Z])/g,
    or = /(left|right|width|margin|padding|x)/i,
    ur = /[\s,\(]\S/,
    hr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    lr = "transform",
    fr = lr + "Origin",
    cr = "O,Moz,ms,Ms,Webkit".split(","),
    dr = function _checkPropPrefix(t, e, r) {
      var i = (e || Ee).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(cr[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? cr[n] : "") + t;
    },
    pr = { deg: 1, rad: 1, turn: 1 },
    _r = { grid: 1, flex: 1 },
    mr = function _get(t, e, r, i) {
      var n;
      return (
        De || Qd(),
        e in hr &&
          "transform" !== e &&
          ~(e = hr[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        rr[e] && "transform" !== e
          ? ((n = br(t, i)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : n.svg
                ? n.origin
                : wr(Nd(t, fr)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]) &&
              "auto" !== n &&
              !i &&
              !~(n + "").indexOf("calc(")) ||
            (n =
              (vr[e] && vr[e](t, e, r)) ||
              Nd(t, e) ||
              ga(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? Zd(t, e, n, r) + r : n
      );
    },
    gr = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    vr = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = (t._pt = new pe(t._pt, e, r, 0, 0, ce));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    yr = [1, 0, 0, 1, 0, 0],
    Tr = {},
    br = function _parseTransform(t, e) {
      var r = t._gsap || new jt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        M,
        O,
        P,
        C,
        A,
        S,
        R,
        D,
        E,
        z,
        F = t.style,
        I = r.scaleX < 0,
        B = "deg",
        L = getComputedStyle(t),
        Y = Nd(t, fr) || "0";
      return (
        (i = n = a = u = h = l = f = c = d = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !Ud(t))),
        L.translate &&
          (("none" === L.translate &&
            "none" === L.scale &&
            "none" === L.rotate) ||
            (F[lr] =
              ("none" !== L.translate
                ? "translate3d(" +
                  (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") +
              ("none" !== L.scale
                ? "scale(" + L.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== L[lr] ? L[lr] : "")),
          (F.scale = F.rotate = F.translate = "none")),
        (m = ie(t, r.svg)),
        r.svg &&
          ((O = r.uncache
            ? ((P = t.getBBox()),
              (Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px"),
              "")
            : !e && t.getAttribute("data-svg-origin")),
          je(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)),
        (p = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== yr &&
          ((T = m[0]),
          (b = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = k = m[4]),
          (n = M = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(T * T + b * b)),
              (o = Math.sqrt(x * x + w * w)),
              (u = T || b ? ar(b, T) * ir : 0),
              (f = w || x ? ar(w, x) * ir + u : 0) &&
                (o *= Math.abs(Math.cos(f * nr))),
              r.svg && ((i -= p - (p * T + _ * w)), (n -= _ - (p * b + _ * x))))
            : ((z = m[6]),
              (D = m[7]),
              (A = m[8]),
              (S = m[9]),
              (R = m[10]),
              (E = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = ar(z, R)) * ir),
              g &&
                ((O = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g))),
                (P = M * v + S * y),
                (C = z * v + R * y),
                (A = k * -y + A * v),
                (S = M * -y + S * v),
                (R = z * -y + R * v),
                (E = D * -y + E * v),
                (k = O),
                (M = P),
                (z = C)),
              (l = (g = ar(-w, R)) * ir),
              g &&
                ((v = Math.cos(-g)),
                (E = x * (y = Math.sin(-g)) + E * v),
                (T = O = T * v - A * y),
                (b = P = b * v - S * y),
                (w = C = w * v - R * y)),
              (u = (g = ar(b, T)) * ir),
              g &&
                ((O = T * (v = Math.cos(g)) + b * (y = Math.sin(g))),
                (P = k * v + M * y),
                (b = b * v - T * y),
                (M = M * v - k * y),
                (T = O),
                (k = P)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = ia(Math.sqrt(T * T + b * b + w * w))),
              (o = ia(Math.sqrt(M * M + z * z))),
              (g = ar(k, M)),
              (f = 2e-4 < Math.abs(g) ? g * ir : 0),
              (d = E ? 1 / (E < 0 ? -E : E) : 0)),
          r.svg &&
            ((O = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !ge(Nd(t, lr))),
            O && t.setAttribute("transform", O))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (I
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          "px"),
        (r.y =
          n -
          ((r.yPercent =
            n &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          "px"),
        (r.z = a + "px"),
        (r.scaleX = ia(s)),
        (r.scaleY = ia(o)),
        (r.rotation = ia(u) + B),
        (r.rotationX = ia(h) + B),
        (r.rotationY = ia(l) + B),
        (r.skewX = f + B),
        (r.skewY = c + B),
        (r.transformPerspective = d + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[fr] = wr(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = j.force3D),
        (r.renderTransform = r.svg ? Cr : Ie ? Pr : xr),
        (r.uncache = 0),
        r
      );
    },
    wr = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    xr = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Pr(t, e);
    },
    kr = "0deg",
    Mr = "0px",
    Or = ") ",
    Pr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        c = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== kr || h !== kr)) {
        var b,
          w = parseFloat(h) * nr,
          x = Math.sin(w),
          k = Math.cos(w);
        (w = parseFloat(l) * nr),
          (b = Math.cos(w)),
          (a = me(g, a, x * b * -v)),
          (s = me(g, s, -Math.sin(w) * -v)),
          (o = me(g, o, k * b * -v + v));
      }
      _ !== Mr && (y += "perspective(" + _ + Or),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!T && a === Mr && s === Mr && o === Mr) ||
          (y +=
            o !== Mr || T
              ? "translate3d(" + a + ", " + s + ", " + o + ") "
              : "translate(" + a + ", " + s + Or),
        u !== kr && (y += "rotate(" + u + Or),
        h !== kr && (y += "rotateY(" + h + Or),
        l !== kr && (y += "rotateX(" + l + Or),
        (f === kr && c === kr) || (y += "skew(" + f + ", " + c + Or),
        (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + Or),
        (g.style[lr] = y || "translate(0, 0)");
    },
    Cr = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        c = o.rotation,
        d = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
      (c = parseFloat(c)),
        (d = parseFloat(d)),
        (p = parseFloat(p)) && ((d += p = parseFloat(p)), (c += p)),
        c || d
          ? ((c *= nr),
            (d *= nr),
            (r = Math.cos(c) * _),
            (i = Math.sin(c) * _),
            (n = Math.sin(c - d) * -m),
            (a = Math.cos(c - d) * m),
            d &&
              ((p *= nr),
              (s = Math.tan(d - p)),
              (n *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              p &&
                ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = ia(r)),
            (i = ia(i)),
            (n = ia(n)),
            (a = ia(a)))
          : ((r = _), (a = m), (i = n = 0)),
        ((x && !~(l + "").indexOf("px")) || (k && !~(f + "").indexOf("px"))) &&
          ((x = Zd(g, "x", l, "px")), (k = Zd(g, "y", f, "px"))),
        (v || y || T || b) &&
          ((x = ia(x + v - (v * r + y * n) + T)),
          (k = ia(k + y - (v * i + y * a) + b))),
        (u || h) &&
          ((s = g.getBBox()),
          (x = ia(x + (u / 100) * s.width)),
          (k = ia(k + (h / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          a +
          "," +
          x +
          "," +
          k +
          ")"),
        g.setAttribute("transform", s),
        w && (g.style[lr] = s);
    };
  ha("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(
        function (t) {
          return r < 2 ? e + t : "border" + t + e;
        }
      );
    vr[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return mr(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (i + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var Ar,
    Sr,
    Rr,
    Dr = {
      name: "css",
      register: Qd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, i, n, a) {
        var s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w = this._props,
          x = t.style,
          k = i.vars.startAt;
        for (c in (De || Qd(),
        (this.styles = this.styles || Kd(t)),
        (b = this.styles.props),
        (this.tween = i),
        e))
          if (
            "autoRound" !== c &&
            ((o = e[c]), !pt[c] || !_b(c, e, i, n, t, a))
          )
            if (
              ((l = typeof o),
              (f = vr[c]),
              "function" === l && (l = typeof (o = o.call(i, n, t, a))),
              "string" === l && ~o.indexOf("random(") && (o = ob(o)),
              f)
            )
              f(this, t, c, o, i) && (T = 1);
            else if ("--" === c.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                (o += ""),
                (Rt.lastIndex = 0),
                Rt.test(s) || ((d = Ya(s)), (p = Ya(o))),
                p ? d !== p && (s = Zd(t, c, s, p) + p) : d && (o += d),
                this.add(x, "setProperty", s, o, n, a, 0, 0, c),
                w.push(c),
                b.push(c, 0, x[c]);
            else if ("undefined" !== l) {
              if (
                (k && c in k
                  ? ((s =
                      "function" == typeof k[c] ? k[c].call(i, n, t, a) : k[c]),
                    r(s) && ~s.indexOf("random(") && (s = ob(s)),
                    Ya(s + "") || (s += j.units[c] || Ya(mr(t, c)) || ""),
                    "=" === (s + "").charAt(1) && (s = mr(t, c)))
                  : (s = mr(t, c)),
                (h = parseFloat(s)),
                (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (u = parseFloat(o)),
                c in hr &&
                  ("autoAlpha" === c &&
                    (1 === h &&
                      "hidden" === mr(t, "visibility") &&
                      u &&
                      (h = 0),
                    b.push("visibility", 0, x.visibility),
                    Wd(
                      this,
                      x,
                      "visibility",
                      h ? "inherit" : "hidden",
                      u ? "inherit" : "hidden",
                      !u
                    )),
                  "scale" !== c &&
                    "transform" !== c &&
                    ~(c = hr[c]).indexOf(",") &&
                    (c = c.split(",")[0])),
                (m = c in rr))
              )
                if (
                  (this.styles.save(c),
                  g ||
                    (((v = t._gsap).renderTransform && !e.parseTransform) ||
                      br(t, e.parseTransform),
                    (y = !1 !== e.smoothOrigin && v.smooth),
                    ((g = this._pt =
                      new pe(
                        this._pt,
                        x,
                        lr,
                        0,
                        1,
                        v.renderTransform,
                        v,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === c)
                )
                  (this._pt = new pe(
                    this._pt,
                    v,
                    "scaleY",
                    h,
                    (_ ? ka(h, _ + u) : u) - h || 0,
                    td
                  )),
                    (this._pt.u = 0),
                    w.push("scaleY", c),
                    (c += "X");
                else {
                  if ("transformOrigin" === c) {
                    b.push(fr, 0, x[fr]),
                      (o = be(o)),
                      v.svg
                        ? je(t, o, 0, y, 0, this)
                        : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                            v.zOrigin && Wd(this, v, "zOrigin", v.zOrigin, p),
                          Wd(this, x, c, wr(s), wr(o)));
                    continue;
                  }
                  if ("svgOrigin" === c) {
                    je(t, o, 1, y, 0, this);
                    continue;
                  }
                  if (c in Tr) {
                    te(this, v, c, h, _ ? ka(h, _ + o) : o);
                    continue;
                  }
                  if ("smoothOrigin" === c) {
                    Wd(this, v, "smooth", v.smooth, o);
                    continue;
                  }
                  if ("force3D" === c) {
                    v[c] = o;
                    continue;
                  }
                  if ("transform" === c) {
                    ve(this, o, t);
                    continue;
                  }
                }
              else c in x || (c = dr(c) || c);
              if (
                m ||
                ((u || 0 === u) && (h || 0 === h) && !ur.test(o) && c in x)
              )
                (u = u || 0),
                  (d = (s + "").substr((h + "").length)) !==
                    (p = Ya(o) || (c in j.units ? j.units[c] : d)) &&
                    (h = Zd(t, c, s, p)),
                  (this._pt = new pe(
                    this._pt,
                    m ? v : x,
                    c,
                    h,
                    (_ ? ka(h, _ + u) : u) - h,
                    m || ("px" !== p && "zIndex" !== c) || !1 === e.autoRound
                      ? td
                      : wd
                  )),
                  (this._pt.u = p || 0),
                  d !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = vd));
              else if (c in x) _d.call(this, t, c, s, _ ? _ + o : o);
              else {
                if (!(c in t)) {
                  Q(c, o);
                  continue;
                }
                this.add(t, c, s || t[c], _ ? _ + o : o, n, a);
              }
              m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])),
                w.push(c);
            }
        T && de(this);
      },
      render: function render(t, e) {
        if (e.tween._time || !Fe())
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        else e.styles.revert();
      },
      get: mr,
      aliases: hr,
      getSetter: function getSetter(t, e, r) {
        var i = hr[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in rr && e !== fr && (t._gsap.x || mr(t, "x"))
            ? r && ze === r
              ? "scale" === e
                ? Cd
                : Bd
              : (ze = r || {}) && ("scale" === e ? Dd : Ed)
            : t.style && !u(t.style[e])
            ? zd
            : ~e.indexOf("-")
            ? Ad
            : re(t, e)
        );
      },
      core: { _removeProperty: Vd, _getMatrix: ie },
    };
  (Ce.utils.checkPrefix = dr),
    (Ce.core.getStyleSaver = Kd),
    (Rr = ha(
      (Ar = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (Sr = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        rr[t] = 1;
      }
    )),
    ha(Sr, function (t) {
      (j.units[t] = "deg"), (Tr[t] = 1);
    }),
    (hr[Rr[13]] = Ar + "," + Sr),
    ha(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        hr[e[1]] = Rr[e[0]];
      }
    ),
    ha(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        j.units[t] = "px";
      }
    ),
    Ce.registerPlugin(Dr);
  var Er = Ce.registerPlugin(Dr) || Ce,
    zr = Er.core.Tween;
  (e.Back = Ze),
    (e.Bounce = Je),
    (e.CSSPlugin = Dr),
    (e.Circ = er),
    (e.Cubic = We),
    (e.Elastic = Ke),
    (e.Expo = tr),
    (e.Linear = Ue),
    (e.Power0 = Be),
    (e.Power1 = Le),
    (e.Power2 = Ye),
    (e.Power3 = Ne),
    (e.Power4 = qe),
    (e.Quad = Ve),
    (e.Quart = Xe),
    (e.Quint = He),
    (e.Sine = $e),
    (e.SteppedEase = Ge),
    (e.Strong = Qe),
    (e.TimelineLite = Ut),
    (e.TimelineMax = Ut),
    (e.TweenLite = Gt),
    (e.TweenMax = zr),
    (e.default = Er),
    (e.gsap = Er);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/*!
 * ScrollSmoother 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */ !(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function t(e, t) {
    for (var r = 0; r < t.length; r++) {
      var _ = t[r];
      (_.enumerable = _.enumerable || !1),
        (_.configurable = !0),
        "value" in _ && (_.writable = !0),
        Object.defineProperty(e, _.key, _);
    }
  }
  function r() {
    return "undefined" != typeof window;
  }
  function _() {
    return a || (r() && (a = window.gsap) && a.registerPlugin && a);
  }
  function n() {
    return String.fromCharCode.apply(null, arguments);
  }
  var o,
    i,
    s,
    a,
    $,
    l,
    c,
    u,
    f,
    d,
    g,
    h,
    p,
    v,
    m,
    y,
    w,
    b,
    S = n(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    T =
      ((function (e) {
        var t = "undefined" != typeof window,
          r =
            (0 ===
              (t ? window.location.href : "").indexOf(
                n(102, 105, 108, 101, 58, 47, 47)
              ) ||
              -1 !== e.indexOf(n(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
              e.indexOf(n(49, 50, 55, 46, 48, 32, 48, 46, 49)),
            [
              S,
              n(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
              n(
                99,
                111,
                100,
                101,
                112,
                101,
                110,
                46,
                112,
                108,
                117,
                109,
                98,
                105,
                110,
                103
              ),
              n(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
              n(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
              n(
                99,
                111,
                100,
                101,
                112,
                101,
                110,
                46,
                119,
                101,
                98,
                115,
                105,
                116,
                101
              ),
              n(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
              n(
                99,
                115,
                115,
                45,
                116,
                114,
                105,
                99,
                107,
                115,
                46,
                99,
                111,
                109
              ),
              n(99, 100, 112, 110, 46, 105, 111),
              n(112, 101, 110, 115, 46, 105, 111),
              n(103, 97, 110, 110, 111, 110, 46, 116, 118),
              n(
                99,
                111,
                100,
                101,
                99,
                97,
                110,
                121,
                111,
                110,
                46,
                110,
                101,
                116
              ),
              n(
                116,
                104,
                101,
                109,
                101,
                102,
                111,
                114,
                101,
                115,
                116,
                46,
                110,
                101,
                116
              ),
              n(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
              n(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
              n(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
              n(112, 108, 110, 107, 114, 46, 99, 111),
              n(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
              n(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
              n(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
              n(
                99,
                111,
                100,
                101,
                115,
                97,
                110,
                100,
                98,
                111,
                120,
                46,
                105,
                111
              ),
              n(99, 115, 98, 46, 97, 112, 112),
              n(
                115,
                116,
                97,
                99,
                107,
                98,
                108,
                105,
                116,
                122,
                46,
                99,
                111,
                109
              ),
              n(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
              n(99, 111, 100, 105, 101, 114, 46, 105, 111),
              n(
                109,
                111,
                116,
                105,
                111,
                110,
                116,
                114,
                105,
                99,
                107,
                115,
                46,
                99,
                111,
                109
              ),
              n(
                115,
                116,
                97,
                99,
                107,
                111,
                118,
                101,
                114,
                102,
                108,
                111,
                119,
                46,
                99,
                111,
                109
              ),
              n(
                115,
                116,
                97,
                99,
                107,
                101,
                120,
                99,
                104,
                97,
                110,
                103,
                101,
                46,
                99,
                111,
                109
              ),
              n(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
            ]),
          _ = r.length;
        for (
          setTimeout(function e() {
            t &&
              ("loading" === document.readyState ||
              "interactive" === document.readyState
                ? document.addEventListener("readystatechange", e)
                : (document.removeEventListener("readystatechange", e),
                  t &&
                    window.console &&
                    !window._gsapWarned &&
                    "object" == typeof window.gsap &&
                    window.gsap.config().trialWarn));
          }, 50);
          -1 < --_;

        )
          if (-1 !== e.indexOf(r[_])) return;
      })("undefined" != typeof window ? window.location.host : ""),
      (x.register = function e(t) {
        return (
          $ ||
            ((a = t || _()),
            r() &&
              window.document &&
              ((l = window),
              (u = (c = document).documentElement),
              (f = c.body)),
            a &&
              ((d = a.utils.toArray),
              (g = a.utils.clamp),
              (v = a.parseEase("expo")),
              (w = a.core.context || function () {}),
              (b = a
                .delayedCall(0.2, function () {
                  return h.isRefreshing || (p && p.refresh());
                })
                .pause()),
              (h = a.core.globals().ScrollTrigger),
              a.core.globals("ScrollSmoother", x),
              f &&
                h &&
                ((m = h.core._getVelocityProp),
                (y = h.core._inputObserver),
                (x.refresh = h.refresh),
                ($ = 1)))),
          $
        );
      }),
      (o = x),
      (i = [
        {
          key: "progress",
          get: function e() {
            return this.scrollTrigger
              ? this.scrollTrigger.animation._time / 100
              : 0;
          },
        },
      ]),
      t(o.prototype, i),
      s && t(o, s),
      x);
  function x(e) {
    var t = this;
    function r() {
      return ei.update(-e_);
    }
    function _() {
      return (A.style.overflow = "visible");
    }
    function n(e) {
      e.update();
      var t = e.getTween();
      t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
        (j = !1),
        e.animation.progress(e.progress, !0);
    }
    function o(e, t) {
      ((e !== e_ && !D) || t) &&
        (er &&
          ((A.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"),
          (A._gsap.y = e + "px")),
        (en = e - e_),
        (e_ = e),
        h.isUpdating || h.update());
    }
    function i(e) {
      return arguments.length
        ? (e < 0 && (e = 0),
          (es.y = -e),
          (j = !0),
          D ? (e_ = -e) : o(-e),
          h.isRefreshing ? B.update() : et(e),
          this)
        : -e_;
    }
    function s(e) {
      (L.scrollTop = 0),
        (e.target.contains && e.target.contains(L)) ||
          (J && !1 === J(t, e)) ||
          (h.isInViewport(e.target) ||
            e.target === q ||
            t.scrollTo(e.target, !1, "center center"),
          (q = e.target));
    }
    function S(e) {
      var t, r, _, n;
      O.forEach(function (o) {
        (t = o.pins),
          (n = o.markers),
          e.forEach(function (e) {
            o.trigger &&
              e.trigger &&
              o !== e &&
              (e.trigger === o.trigger ||
                e.pinnedContainer === o.trigger ||
                o.trigger.contains(e.trigger)) &&
              ((_ =
                ((r = e.start) - o.start - o.offset) / o.ratio - (r - o.start)),
              t.forEach(function (e) {
                return (_ -= e.distance / o.ratio - e.distance);
              }),
              e.setPositions(r + _, e.end + _),
              e.markerStart &&
                n.push(a.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
              e.pin &&
                0 < e.end &&
                ((_ = e.end - e.start),
                t.push({ start: e.start, end: e.end, distance: _, trig: e }),
                o.setPositions(o.start, o.end + _),
                o.vars.onRefresh(o)));
          });
      });
    }
    function T() {
      _(),
        requestAnimationFrame(_),
        O &&
          (O.forEach(function (e) {
            var t = e.start,
              r = e.auto
                ? Math.min(h.maxScroll(e.scroller), e.end)
                : t + (e.end - t) / e.ratio,
              _ = (r - e.end) / 2;
            (t -= _),
              (r -= _),
              (e.offset = _ || 1e-4),
              (e.pins.length = 0),
              e.setPositions(Math.min(t, r), Math.max(t, r)),
              e.vars.onRefresh(e);
          }),
          S(h.sort())),
        ei.reset();
    }
    function E() {
      return h.addEventListener("refresh", T);
    }
    function k() {
      return (
        O &&
        O.forEach(function (e) {
          return e.vars.onRefresh(e);
        })
      );
    }
    function P() {
      return (
        O &&
          O.forEach(function (e) {
            return e.vars.onRefreshInit(e);
          }),
        k
      );
    }
    function C(e, t, r, _) {
      return function () {
        var n = "function" == typeof t ? t(r, _) : t;
        return (
          n ||
            0 === n ||
            (n = _.getAttribute("data-" + ee + e) || ("speed" === e ? 1 : 0)),
          _.setAttribute("data-" + ee + e, n),
          "auto" === n ? n : parseFloat(n)
        );
      };
    }
    function R(e, t, r, _) {
      function n() {
        (t = m()),
          (r = y()),
          (s = parseFloat(t) || 1),
          (d = (c = "auto" === t) ? 0 : 0.5),
          f && f.kill(),
          (f = r && a.to(e, { ease: v, overwrite: !1, y: "+=0", duration: r })),
          $ && (($.ratio = s), ($.autoSpeed = c));
      }
      function o() {
        (b.y = w + "px"), b.renderTransform(1), n();
      }
      function i(t) {
        if (c) {
          o();
          var r,
            _,
            n,
            i,
            a,
            $,
            d,
            h,
            v,
            m,
            y,
            w =
              ((r = e),
              (_ = g(0, 1, -t.start / (t.end - t.start))),
              (a = r.parentNode || u),
              ($ = r.getBoundingClientRect()),
              (h = (d = a.getBoundingClientRect()).top - $.top),
              (y =
                -(m =
                  (Math.abs(h) > Math.abs((v = d.bottom - $.bottom)) ? h : v) /
                  (1 - _)) * _),
              0 < m &&
                ((i =
                  0.5 == (n = d.height / (l.innerHeight + d.height))
                    ? 2 * d.height
                    : 2 *
                      Math.min(d.height, (-m * n) / (2 * n - 1)) *
                      (_ || 1)),
                (y += _ ? -i * _ : -i / 2),
                (m += i)),
              { change: m, offset: y });
          (x = w.change), (p = w.offset);
        } else (x = (t.end - t.start) * (1 - s)), (p = 0);
        S.forEach(function (e) {
          return (x -= e.distance * (1 - s));
        }),
          t.vars.onUpdate(t),
          f && f.progress(1);
      }
      var s,
        $,
        c,
        f,
        d,
        p,
        m = C("speed", t, _, e),
        y = C("lag", r, _, e),
        w = a.getProperty(e, "y"),
        b = e._gsap,
        S = [],
        T = [],
        x = 0;
      return (
        n(),
        (1 !== s || c || f) &&
          (i(
            ($ = h.create({
              trigger: c ? e.parentNode : e,
              scroller: L,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: o,
              onRefresh: i,
              onKill: function e(t) {
                var r = O.indexOf(t);
                0 <= r && O.splice(r, 1), o();
              },
              onUpdate: function e(t) {
                var r,
                  _,
                  n,
                  o,
                  i = w + x * (t.progress - d),
                  s = S.length,
                  $ = 0;
                if (t.offset) {
                  if (s) {
                    for (n = -e_, o = t.end; s--; ) {
                      if (
                        (_ = S[s]).trig.isActive ||
                        (n >= _.start && n <= _.end)
                      )
                        return void (
                          f &&
                          ((_.trig.progress +=
                            _.trig.direction < 0 ? 0.001 : -0.001),
                          _.trig.update(0, 0, 1),
                          f.resetTo("y", parseFloat(b.y), -en, !0),
                          eo && f.progress(1))
                        );
                      n > _.end && ($ += _.distance), (o -= _.distance);
                    }
                    i =
                      w +
                      $ +
                      x *
                        ((a.utils.clamp(t.start, t.end, n) - t.start - $) /
                          (o - t.start) -
                          d);
                  }
                  (i = Math.round(1e5 * (r = i + p)) / 1e5 || 0),
                    T.length &&
                      !c &&
                      T.forEach(function (e) {
                        return e(i - $);
                      }),
                    f
                      ? (f.resetTo("y", i, -en, !0), eo && f.progress(1))
                      : ((b.y = i + "px"), b.renderTransform(1));
                }
              },
            }))
          ),
          (a.core.getCache($.trigger).stRevert = P),
          ($.startY = w),
          ($.pins = S),
          ($.markers = T),
          ($.ratio = s),
          ($.autoSpeed = c),
          (e.style.willChange = "transform")),
        $
      );
    }
    $ ||
      x.register(a) ||
      console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
      (e = this.vars = e || {}),
      p && p.kill(),
      w((p = this));
    var A,
      L,
      z,
      B,
      O,
      H,
      I,
      U,
      V,
      D,
      M,
      N,
      W,
      j,
      q,
      F = e.smoothTouch,
      Y = e.onUpdate,
      K = e.onStop,
      G = e.smooth,
      J = e.onFocusIn,
      Q = e.normalizeScroll,
      X = this,
      Z =
        "undefined" != typeof ResizeObserver &&
        !1 !== e.autoResize &&
        new ResizeObserver(function () {
          return h.isRefreshing || b.restart(!0);
        }),
      ee = e.effectsPrefix || "",
      et = h.getScrollFunc(l),
      er =
        1 === h.isTouch
          ? !0 === F
            ? 0.8
            : parseFloat(F) || 0
          : 0 === G || !1 === G
          ? 0
          : parseFloat(G) || 0.8,
      e_ = 0,
      en = 0,
      eo = 1,
      ei = m(0),
      es = { y: 0 };
    function ea() {
      return (
        (z = A.clientHeight),
        (A.style.overflow = "visible"),
        (f.style.height = z + "px"),
        z - l.innerHeight
      );
    }
    E(),
      h.addEventListener("killAll", E),
      a.delayedCall(0.5, function () {
        return (eo = 0);
      }),
      (this.scrollTop = i),
      (this.scrollTo = function (e, r, _) {
        var n = a.utils.clamp(
          0,
          h.maxScroll(l),
          isNaN(e) ? t.offset(e, _) : +e
        );
        r
          ? D
            ? a.to(t, {
                duration: er,
                scrollTop: n,
                overwrite: "auto",
                ease: v,
              })
            : et(n)
          : i(n);
      }),
      (this.offset = function (e, t) {
        var r,
          _ = (e = d(e)[0]).style.cssText,
          n = h.create({ trigger: e, start: t || "top top" });
        return (
          O && S([n]),
          (r = n.start),
          n.kill(!1),
          (e.style.cssText = _),
          (a.core.getCache(e).uncache = 1),
          r
        );
      }),
      (this.content = function (e) {
        if (arguments.length) {
          var t =
            d(e || "#smooth-content")[0] ||
            console.warn("ScrollSmoother needs a valid content element.") ||
            f.children[0];
          return (
            t !== A &&
              ((V = (A = t).getAttribute("style") || ""),
              Z && Z.observe(A),
              a.set(A, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0",
              }),
              er || a.set(A, { clearProps: "transform" })),
            this
          );
        }
        return A;
      }),
      (this.wrapper = function (e) {
        var t, r;
        return arguments.length
          ? ((U =
              (L =
                d(e || "#smooth-wrapper")[0] ||
                ((t = A),
                (r = c.querySelector(".ScrollSmoother-wrapper")) ||
                  ((r = c.createElement("div")).classList.add(
                    "ScrollSmoother-wrapper"
                  ),
                  t.parentNode.insertBefore(r, t),
                  r.appendChild(t)),
                r)).getAttribute("style") || ""),
            ea(),
            a.set(
              L,
              er
                ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto",
                  }
            ),
            this)
          : L;
      }),
      (this.effects = function (e, t) {
        if (((O = O || []), !e)) return O.slice(0);
        (e = d(e)).forEach(function (e) {
          for (var t = O.length; t--; ) O[t].trigger === e && O[t].kill();
        });
        var r,
          _,
          n = (t = t || {}).speed,
          o = t.lag,
          i = [];
        for (r = 0; r < e.length; r++) (_ = R(e[r], n, o, r)) && i.push(_);
        return O.push.apply(O, i), i;
      }),
      (this.sections = function (e, t) {
        if (((H = H || []), !e)) return H.slice(0);
        var r = d(e).map(function (e) {
          return h.create({
            trigger: e,
            start: "top 120%",
            end: "bottom -20%",
            onToggle: function t(r) {
              (e.style.opacity = r.isActive ? "1" : "0"),
                (e.style.pointerEvents = r.isActive ? "all" : "none");
            },
          });
        });
        return t && t.add ? H.push.apply(H, r) : (H = r.slice(0)), r;
      }),
      this.content(e.content),
      this.wrapper(e.wrapper),
      (this.render = function (e) {
        return o(e || 0 === e ? e : e_);
      }),
      (this.getVelocity = function () {
        return ei.getVelocity(-e_);
      }),
      h.scrollerProxy(L, {
        scrollTop: i,
        scrollHeight: function e() {
          return ea() && f.scrollHeight;
        },
        fixedMarkers: !1 !== e.fixedMarkers && !!er,
        content: A,
        getBoundingClientRect: function e() {
          return {
            top: 0,
            left: 0,
            width: l.innerWidth,
            height: l.innerHeight,
          };
        },
      }),
      h.defaults({ scroller: L });
    var e$ = h.getAll().filter(function (e) {
      return e.scroller === l || e.scroller === L;
    });
    e$.forEach(function (e) {
      return e.revert(!0);
    }),
      (B = h.create({
        animation: a.fromTo(
          es,
          { y: 0 },
          {
            y: function e() {
              return -ea();
            },
            immediateRender: !1,
            ease: "none",
            data: "ScrollSmoother",
            duration: 100,
            onUpdate: function e() {
              if (this._dur) {
                var t = j;
                t && (n(B), (es.y = e_)), o(es.y, t), r(), Y && !D && Y(X);
              }
            },
          }
        ),
        onRefreshInit: function e(t) {
          if (O) {
            var r = h.getAll().filter(function (e) {
              return !!e.pin;
            });
            O.forEach(function (e) {
              e.vars.pinnedContainer ||
                r.forEach(function (t) {
                  if (t.pin.contains(e.trigger)) {
                    var r = e.vars;
                    (r.pinnedContainer = t.pin),
                      (e.vars = null),
                      e.init(r, e.animation);
                  }
                });
            });
          }
          var _ = t.getTween();
          (W = _ && _._end > _._dp._time),
            (N = e_),
            (es.y = 0),
            er &&
              ((L.style.pointerEvents = "none"),
              (L.scrollTop = 0),
              setTimeout(function () {
                return L.style.removeProperty("pointer-events");
              }, 50));
        },
        onRefresh: function e(t) {
          t.animation.invalidate(),
            t.setPositions(t.start, ea()),
            W || n(t),
            (es.y = -et()),
            o(es.y),
            eo || t.animation.progress(a.utils.clamp(0, 1, -(N / t.end))),
            W && ((t.progress -= 0.001), t.update());
        },
        id: "ScrollSmoother",
        scroller: l,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: ea,
        onScrubComplete: function e() {
          ei.reset(), K && K(t);
        },
        scrub: er || !0,
      })),
      (this.smooth = function (e) {
        return (
          arguments.length && (er = e || 0),
          arguments.length
            ? B.scrubDuration(e)
            : B.getTween()
            ? B.getTween().duration()
            : 0
        );
      }),
      B.getTween() && (B.getTween().vars.ease = e.ease || v),
      (this.scrollTrigger = B),
      e.effects &&
        this.effects(
          !0 === e.effects
            ? "[data-" + ee + "speed], [data-" + ee + "lag]"
            : e.effects,
          {}
        ),
      e.sections &&
        this.sections(!0 === e.sections ? "[data-section]" : e.sections),
      e$.forEach(function (e) {
        (e.vars.scroller = L), e.init(e.vars, e.animation);
      }),
      (this.paused = function (e, t) {
        return arguments.length
          ? (!!D !== e &&
              (e
                ? (B.getTween() && B.getTween().pause(),
                  et(-e_),
                  ei.reset(),
                  (M = h.normalizeScroll()) && M.disable(),
                  ((D = h.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function e() {
                      return i(-e_);
                    },
                  })).nested = y(u, "wheel,touch,scroll", !0, !1 !== t)))
                : (D.nested.kill(),
                  D.kill(),
                  (D = 0),
                  M && M.enable(),
                  (B.progress = (-e_ - B.start) / (B.end - B.start)),
                  n(B))),
            this)
          : !!D;
      }),
      (this.kill = this.revert =
        function () {
          t.paused(!1), n(B), B.kill();
          for (var e = (O || []).concat(H || []), r = e.length; r--; )
            e[r].kill();
          h.scrollerProxy(L),
            h.removeEventListener("killAll", E),
            h.removeEventListener("refresh", T),
            (L.style.cssText = U),
            (A.style.cssText = V);
          var _ = h.defaults({});
          _ && _.scroller === L && h.defaults({ scroller: l }),
            t.normalizer && h.normalizeScroll(!1),
            clearInterval(I),
            (p = null),
            Z && Z.disconnect(),
            f.style.removeProperty("height"),
            l.removeEventListener("focusin", s);
        }),
      (this.refresh = function (e, t) {
        return B.refresh(e, t);
      }),
      Q &&
        (this.normalizer = h.normalizeScroll(
          !0 === Q ? { debounce: !0, content: !er && A } : Q
        )),
      h.config(e),
      "overscrollBehavior" in l.getComputedStyle(f) &&
        a.set([f, u], { overscrollBehavior: "none" }),
      "scrollBehavior" in l.getComputedStyle(f) &&
        a.set([f, u], { scrollBehavior: "auto" }),
      l.addEventListener("focusin", s),
      (I = setInterval(r, 250)),
      "loading" === c.readyState ||
        requestAnimationFrame(function () {
          return h.refresh();
        });
  }
  (T.version = "3.11.3"),
    (T.create = function (e) {
      return p && e && p.content() === d(e.content)[0] ? p : new T(e);
    }),
    (T.get = function () {
      return p;
    }),
    _() && a.registerPlugin(T),
    (e.ScrollSmoother = T),
    (e.default = T),
    "undefined" == typeof window || window !== e
      ? Object.defineProperty(e, "__esModule", { value: !0 })
      : delete e.default;
});
/*!
 * ScrollTrigger 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function q() {
    return (
      we ||
      ("undefined" != typeof window &&
        (we = window.gsap) &&
        we.registerPlugin &&
        we)
    );
  }
  function y(e, t) {
    return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
  }
  function z(e) {
    return !!~t.indexOf(e);
  }
  function A(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function B(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function E() {
    return (Be && Be.isPressed) || k.cache++;
  }
  function F(r, n) {
    function Qc(e) {
      if (e || 0 === e) {
        o && (Ae.history.scrollRestoration = "manual");
        var t = Be && Be.isPressed;
        (e = Qc.v = Math.round(e) || (Be && Be.iOS ? 1 : 0)),
          r(e),
          (Qc.cacheID = k.cache),
          t && i("ss", e);
      } else (n || k.cache !== Qc.cacheID || i("ref")) && ((Qc.cacheID = k.cache), (Qc.v = r()));
      return Qc.v + Qc.offset;
    }
    return (Qc.offset = 0), r && Qc;
  }
  function I(e) {
    return (
      we.utils.toArray(e)[0] ||
      ("string" == typeof e && !1 !== we.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function J(t, e) {
    var r = e.s,
      n = e.sc;
    z(t) && (t = Ee.scrollingElement || Me);
    var o = k.indexOf(t),
      i = n === Je.sc ? 1 : 2;
    ~o || (o = k.push(t) - 1), k[o + i] || t.addEventListener("scroll", E);
    var a = k[o + i],
      s =
        a ||
        (k[o + i] =
          F(y(t, r), !0) ||
          (z(t)
            ? n
            : F(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")),
      s
    );
  }
  function K(e, t, o) {
    function md(e, t) {
      var r = Ke();
      t || n < r - s
        ? ((a = i), (i = e), (l = s), (s = r))
        : o
        ? (i += e)
        : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = Ke(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: md,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Ke();
        return (
          (!e && 0 !== e) || e === i || md(e),
          s === l || c < n - l
            ? 0
            : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function L(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function M(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function N() {
    (De = we.core.globals().ScrollTrigger) &&
      De.core &&
      (function _integrate() {
        var e = De.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, k),
          n.push.apply(n, Fe),
          (k = t),
          (Fe = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function O(e) {
    return (
      (we = e || q()) &&
        "undefined" != typeof document &&
        document.body &&
        ((Ae = window),
        (Me = (Ee = document).documentElement),
        (Ce = Ee.body),
        (t = [Ae, Ee, Me, Ce]),
        we.utils.clamp,
        (Ie = "onpointerenter" in Ce ? "pointer" : "mouse"),
        (Pe = C.isTouch =
          Ae.matchMedia &&
          Ae.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ae ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (ze = C.eventTypes =
          (
            "ontouchstart" in Me
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Me
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        N(),
        (ke = 1)),
      ke
    );
  }
  var we,
    ke,
    Ae,
    Ee,
    Me,
    Ce,
    Pe,
    Ie,
    De,
    t,
    Be,
    ze,
    o = 1,
    Le = [],
    k = [],
    Fe = [],
    Ke = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    r = "scrollLeft",
    n = "scrollTop",
    He = {
      s: r,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: F(function (e) {
        return arguments.length
          ? Ae.scrollTo(e, Je.sc())
          : Ae.pageXOffset || Ee[r] || Me[r] || Ce[r] || 0;
      }),
    },
    Je = {
      s: n,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: He,
      sc: F(function (e) {
        return arguments.length
          ? Ae.scrollTo(He.sc(), e)
          : Ae.pageYOffset || Ee[n] || Me[n] || Ce[n] || 0;
      }),
    };
  (He.op = Je), (k.cache = 0);
  var C =
    ((Observer.prototype.init = function init(e) {
      ke || O(we) || console.warn("Please gsap.registerPlugin(Observer)"),
        De || N();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        n = e.target,
        r = e.lineHeight,
        i = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        _ = e.onChangeX,
        S = e.onChangeY,
        T = e.onChange,
        k = e.onToggleX,
        C = e.onToggleY,
        P = e.onHover,
        D = e.onHoverEnd,
        R = e.onMove,
        Y = e.ignoreCheck,
        F = e.isNormalizer,
        X = e.onGestureStart,
        H = e.onGestureEnd,
        V = e.onWheel,
        W = e.onEnable,
        q = e.onDisable,
        j = e.onClick,
        Q = e.scrollSpeed,
        G = e.capture,
        U = e.allowClicks,
        Z = e.lockAxis,
        $ = e.onLockAxis;
      function Ne() {
        return (ye = Ke());
      }
      function Oe(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && ge && "touch" !== e.pointerType) ||
          (Y && Y(e, t))
        );
      }
      function Qe() {
        var e = (se.deltaX = M(be)),
          t = (se.deltaY = M(me)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        T && (r || n) && T(se, e, t, be, me),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            _ && _(se),
            k && se.deltaX < 0 != le < 0 && k(se),
            (le = se.deltaX),
            (be[0] = be[1] = be[2] = 0)),
          n &&
            (w && 0 < se.deltaY && w(se),
            x && se.deltaY < 0 && x(se),
            S && S(se),
            C && se.deltaY < 0 != ce < 0 && C(se),
            (ce = se.deltaY),
            (me[0] = me[1] = me[2] = 0)),
          (ne || re) && (R && R(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && $ && $(se),
          oe && (V(se), (oe = !1)),
          (ee = 0);
      }
      function Re(e, t, r) {
        (be[r] += e),
          (me[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          i ? (ee = ee || requestAnimationFrame(Qe)) : Qe();
      }
      function Se(e, t) {
        Z &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ae && ((be[2] += e), se._vx.update(e, !0)),
          "x" !== ae && ((me[2] += t), se._vy.update(t, !0)),
          i ? (ee = ee || requestAnimationFrame(Qe)) : Qe();
      }
      function Te(e) {
        if (!Oe(e, 1)) {
          var t = (e = L(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = r),
            (i ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              i || (se.isDragging = !0),
              Se(n, o),
              i || (p && p(se)));
        }
      }
      function Ve(t) {
        if (!Oe(t, 1)) {
          B(F ? n : ve, ze[1], Te, !0);
          var e =
              se.isDragging &&
              (3 < Math.abs(se.x - se.startX) ||
                3 < Math.abs(se.y - se.startY)),
            r = L(t);
          e ||
            (se._vx.reset(),
            se._vy.reset(),
            s &&
              U &&
              we.delayedCall(0.08, function () {
                if (300 < Ke() - ye && !t.defaultPrevented)
                  if (t.target.click) t.target.click();
                  else if (ve.createEvent) {
                    var e = ve.createEvent("MouseEvents");
                    e.initMouseEvent(
                      "click",
                      !0,
                      !0,
                      Ae,
                      1,
                      r.screenX,
                      r.screenY,
                      r.clientX,
                      r.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      t.target.dispatchEvent(e);
                  }
              })),
            (se.isDragging = se.isGesturing = se.isPressed = !1),
            l && !F && te.restart(!0),
            g && e && g(se),
            b && b(se, e);
        }
      }
      function We(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          X(e, se.isDragging)
        );
      }
      function Xe() {
        return (se.isGesturing = !1) || H(se);
      }
      function Ye(e) {
        if (!Oe(e)) {
          var t = ue(),
            r = fe();
          Re((t - de) * Q, (r - pe) * Q, 1),
            (de = t),
            (pe = r),
            l && te.restart(!0);
        }
      }
      function Ze(e) {
        if (!Oe(e)) {
          (e = L(e, s)), V && (oe = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Ae.innerHeight : 1) *
            f;
          Re(e.deltaX * t, e.deltaY * t, 0), l && !F && te.restart(!0);
        }
      }
      function $e(e) {
        if (!Oe(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), (n || o) && Se(n, o);
        }
      }
      function _e(e) {
        (se.event = e), P(se);
      }
      function af(e) {
        (se.event = e), D(se);
      }
      function bf(e) {
        return Oe(e) || (L(e, s) && j(se));
      }
      (this.target = n = I(n) || Me),
        (this.vars = e),
        (u = u && we.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (Q = Q || 1),
        (t = t || "wheel,touch,pointer"),
        (i = !1 !== i),
        (r = r || parseFloat(Ae.getComputedStyle(Ce).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = J(n, He),
        fe = J(n, Je),
        de = ue(),
        pe = fe(),
        ge =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === ze[0],
        he = z(n),
        ve = n.ownerDocument || Ee,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = (se.onPress = function (e) {
          Oe(e, 1) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = L(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            A(F ? n : ve, ze[1], Te, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        });
      (te = se._dc =
        we
          .delayedCall(c || 0.25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
          })
          .pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = K(0, 50, !0)),
        (se._vy = K(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (A(he ? ve : n, "scroll", E),
              0 <= t.indexOf("scroll") && A(he ? ve : n, "scroll", Ye, s, G),
              0 <= t.indexOf("wheel") && A(n, "wheel", Ze, s, G),
              ((0 <= t.indexOf("touch") && Pe) || 0 <= t.indexOf("pointer")) &&
                (A(n, ze[0], xe, s, G),
                A(ve, ze[2], Ve),
                A(ve, ze[3], Ve),
                U && A(n, "click", Ne, !1, !0),
                j && A(n, "click", bf),
                X && A(ve, "gesturestart", We),
                H && A(ve, "gestureend", Xe),
                P && A(n, Ie + "enter", _e),
                D && A(n, Ie + "leave", af),
                R && A(n, Ie + "move", $e)),
              (se.isEnabled = !0),
              e && e.type && xe(e),
              W && W(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Le.filter(function (e) {
              return e !== se && z(e.target);
            }).length || B(he ? ve : n, "scroll", E),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), B(F ? n : ve, ze[1], Te, !0)),
            B(he ? ve : n, "scroll", Ye, G),
            B(n, "wheel", Ze, G),
            B(n, ze[0], xe, G),
            B(ve, ze[2], Ve),
            B(ve, ze[3], Ve),
            B(n, "click", Ne, !0),
            B(n, "click", bf),
            B(ve, "gesturestart", We),
            B(ve, "gestureend", Xe),
            B(n, Ie + "enter", _e),
            B(n, Ie + "leave", af),
            B(n, Ie + "move", $e),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            q && q(se));
        }),
        (se.kill = function () {
          se.disable();
          var e = Le.indexOf(se);
          0 <= e && Le.splice(e, 1), Be === se && (Be = 0);
        }),
        Le.push(se),
        F && z(n) && (Be = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (C.version = "3.11.2"),
    (C.create = function (e) {
      return new C(e);
    }),
    (C.register = O),
    (C.getAll = function () {
      return Le.slice();
    }),
    (C.getById = function (t) {
      return Le.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    q() && we.registerPlugin(C);
  function xa() {
    return (it = 1);
  }
  function ya() {
    return (it = 0);
  }
  function za(e) {
    return e;
  }
  function Aa(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ba() {
    return "undefined" != typeof window;
  }
  function Ca() {
    return qe || (Ba() && (qe = window.gsap) && qe.registerPlugin && qe);
  }
  function Da(e) {
    return !!~s.indexOf(e);
  }
  function Ea(e) {
    return (
      y(e, "getBoundingClientRect") ||
      (Da(e)
        ? function () {
            return (zt.width = je.innerWidth), (zt.height = je.innerHeight), zt;
          }
        : function () {
            return Mt(e);
          })
    );
  }
  function Ha(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return (r = "scroll" + n) && (i = y(e, r))
      ? i() - Ea(e)()[o]
      : Da(e)
      ? (Ue[r] || et[r]) -
        (je["inner" + n] || Ue["client" + n] || et["client" + n])
      : e[r] - e["offset" + n];
  }
  function Ia(e, t) {
    for (var r = 0; r < p.length; r += 3)
      (t && !~t.indexOf(p[r + 1])) || e(p[r], p[r + 1], p[r + 2]);
  }
  function Ja(e) {
    return "string" == typeof e;
  }
  function Ka(e) {
    return "function" == typeof e;
  }
  function La(e) {
    return "number" == typeof e;
  }
  function Ma(e) {
    return "object" == typeof e;
  }
  function Na(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Oa(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function db(e) {
    return je.getComputedStyle(e);
  }
  function fb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function hb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function ib(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function kb(o) {
    var i = qe.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : i(t < 0 ? e - o : e + o);
        };
  }
  function mb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function nb(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function ob(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function pb(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r);
  }
  function tb(e, t) {
    if (Ja(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in R
            ? R[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function ub(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = Ge.createElement("div"),
      g = Da(r) || "fixed" === y(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? et : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      x =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (x += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (x += (n === Je ? S : T) + ":" + (i + parseFloat(f)) + "px;"),
      a &&
        (x +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = b),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = x),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      Y(p, 0, n, b),
      p
    );
  }
  function zb() {
    return 34 < gt() - ht && U();
  }
  function Ab() {
    (h && h.isPressed && !(h.startX > et.clientWidth)) ||
      (k.cache++,
      (w = w || requestAnimationFrame(U)),
      ht || V("scrollStart"),
      (ht = gt()));
  }
  function Bb() {
    (m = je.innerWidth), (b = je.innerHeight);
  }
  function Cb() {
    k.cache++,
      ot ||
        g ||
        Ge.fullscreenElement ||
        Ge.webkitFullscreenElement ||
        (v &&
          m === je.innerWidth &&
          !(Math.abs(je.innerHeight - b) > 0.25 * je.innerHeight)) ||
        l.restart(!0);
  }
  function Fb() {
    return ob(re, "scrollEnd", Fb) || Q(!0);
  }
  function Ib(e) {
    for (var t = 0; t < W.length; t += 5)
      (!e || (W[t + 4] && W[t + 4].query === e)) &&
        ((W[t].style.cssText = W[t + 1]),
        W[t].getBBox && W[t].setAttribute("transform", W[t + 2] || ""),
        (W[t + 3].uncache = 1));
  }
  function Jb(e, t) {
    var r;
    for (at = 0; at < Pt.length; at++)
      !(r = Pt[at]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    t && Ib(t), t || V("revert");
  }
  function Kb(e, t) {
    k.cache++,
      (!t && ft) ||
        k.forEach(function (e) {
          return Ka(e) && e.cacheID++ && (e.rec = 0);
        }),
      Ja(e) && (je.history.scrollRestoration = x = e);
  }
  function Vb(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = Z.length, a = t.style, s = e.style; i--; )
        a[(o = Z[i])] = r[o];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[T] = s[S] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[mt] = hb(e, He) + Et),
        (a[yt] = hb(e, Je) + Et),
        (a[Tt] = s[kt] = s.top = s.left = "0"),
        Bt(n),
        (s[mt] = s.maxWidth = r[mt]),
        (s[yt] = s.maxHeight = r[yt]),
        (s[Tt] = r[Tt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function Yb(e) {
    for (var t = $.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push($[o], r[$[o]]);
    return (n.t = e), n;
  }
  function _b(e, t, r, n, o, i, a, s, l, c, u, f, d) {
    Ka(e) && (e = e(s)),
      Ja(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? tb("0" + e.substr(3), r) : 0));
    var p,
      g,
      h,
      v = d ? d.time() : 0;
    if ((d && d.seek(0), La(e))) a && Y(a, r, n, !0);
    else {
      Ka(t) && (t = t(s));
      var b,
        m,
        y,
        x,
        w = (e || "0").split(" ");
      (h = I(t) || et),
        ((b = Mt(h) || {}) && (b.left || b.top)) ||
          "none" !== db(h).display ||
          ((x = h.style.display),
          (h.style.display = "block"),
          (b = Mt(h)),
          x ? (h.style.display = x) : h.style.removeProperty("display")),
        (m = tb(w[0], b[n.d])),
        (y = tb(w[1] || "0", r)),
        (e = b[n.p] - l[n.p] - c + m + o - y),
        a && Y(a, y, n, r - y < 20 || (a._isStart && 20 < y)),
        (r -= r - y);
    }
    if (i) {
      var _ = e + r,
        S = i._isStart;
      (p = "scroll" + n.d2),
        Y(
          i,
          _,
          n,
          (S && 20 < _) ||
            (!S && (u ? Math.max(et[p], Ue[p]) : i.parentNode[p]) <= _ + 1)
        ),
        u &&
          ((l = Mt(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + Et));
    }
    return (
      d &&
        h &&
        ((p = Mt(h)),
        d.seek(f),
        (g = Mt(h)),
        (d._caScrollDist = p[n.p] - g[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(v),
      d ? e : Math.round(e)
    );
  }
  function bc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === et) {
        for (o in ((e._stOrig = a.cssText), (i = db(e))))
          +o ||
            te.test(o) ||
            !i[o] ||
            "string" != typeof a[o] ||
            "0" === o ||
            (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (qe.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function cc(l, e) {
    function Kj(e, t, r, n, o) {
      var i = Kj.tween,
        a = t.onComplete,
        s = {};
      return (
        (r = r || f()),
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (c = Math.round(r)),
        (t[d] = e),
        ((t.modifiers = s)[d] = function (e) {
          return (
            (e = Math.round(f())) !== c &&
            e !== u &&
            3 < Math.abs(e - c) &&
            3 < Math.abs(e - u)
              ? (i.kill(), (Kj.tween = 0))
              : (e = r + n * i.ratio + o * i.ratio * i.ratio),
            (u = c),
            (c = Math.round(e))
          );
        }),
        (t.onComplete = function () {
          (Kj.tween = 0), a && a.call(i);
        }),
        (i = Kj.tween = qe.to(l, t))
      );
    }
    var c,
      u,
      f = J(l, e),
      d = "_scroll" + e.p2;
    return (
      ((l[d] = f).wheelHandler = function () {
        return Kj.tween && Kj.tween.kill() && (Kj.tween = 0);
      }),
      nb(l, "wheel", f.wheelHandler),
      Kj
    );
  }
  var qe,
    a,
    je,
    Ge,
    Ue,
    et,
    s,
    l,
    tt,
    rt,
    nt,
    c,
    ot,
    it,
    u,
    at,
    f,
    d,
    p,
    st,
    lt,
    g,
    h,
    v,
    b,
    m,
    P,
    ct,
    x,
    ut,
    w,
    ft,
    dt,
    pt = 1,
    gt = Date.now,
    _ = gt(),
    ht = 0,
    vt = 0,
    bt = Math.abs,
    S = "right",
    T = "bottom",
    mt = "width",
    yt = "height",
    xt = "Right",
    wt = "Left",
    _t = "Top",
    St = "Bottom",
    Tt = "padding",
    kt = "margin",
    At = "Width",
    D = "Height",
    Et = "px",
    Mt = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== db(e)[u] &&
          qe
            .to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    Ot = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ct = { toggleActions: "play", anticipatePin: 0 },
    R = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Y = function _positionMarker(e, t, r, n) {
      var o = { display: "block" },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (o[r.a + "Percent"] = n ? -100 : 0),
        (o[r.a] = n ? "1px" : 0),
        (o["border" + i + At] = 1),
        (o["border" + a + At] = 0),
        (o[r.p] = t + "px"),
        qe.set(e, o);
    },
    Pt = [],
    It = {},
    X = {},
    H = [],
    V = function _dispatch(e) {
      return (
        (X[e] &&
          X[e].map(function (e) {
            return e();
          })) ||
        H
      );
    },
    W = [],
    j = 0,
    Q = function _refreshAll(e, t) {
      if (!ht || e) {
        (ft = re.isRefreshing = !0),
          k.forEach(function (e) {
            return Ka(e) && e.cacheID++ && (e.rec = e());
          });
        var r = V("refreshInit");
        st && re.sort(),
          t || Jb(),
          k.forEach(function (e) {
            Ka(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          Pt.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          Pt.forEach(function (e) {
            return (
              "max" === e.vars.end &&
              e.setPositions(
                e.start,
                Math.max(e.start + 1, Ha(e.scroller, e._dir))
              )
            );
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          k.forEach(function (e) {
            Ka(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Kb(x, 1),
          l.pause(),
          j++,
          U(2),
          (ft = re.isRefreshing = !1),
          V("refresh");
      } else nb(re, "scrollEnd", Fb);
    },
    G = 0,
    Dt = 1,
    U = function _updateAll(e) {
      if (!ft || 2 === e) {
        (re.isUpdating = !0), dt && dt.update(0);
        var t = Pt.length,
          r = gt(),
          n = 50 <= r - _,
          o = t && Pt[0].scroll();
        if (
          ((Dt = o < G ? -1 : 1),
          (G = o),
          n &&
            (ht && !it && 200 < r - ht && ((ht = 0), V("scrollEnd")),
            (nt = _),
            (_ = r)),
          Dt < 0)
        ) {
          for (at = t; 0 < at--; ) Pt[at] && Pt[at].update(0, n);
          Dt = 1;
        } else for (at = 0; at < t; at++) Pt[at] && Pt[at].update(0, n);
        re.isUpdating = !1;
      }
      w = 0;
    },
    Z = [
      "left",
      "top",
      T,
      S,
      kt + St,
      kt + xt,
      kt + _t,
      kt + wt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    $ = Z.concat([
      mt,
      yt,
      "boxSizing",
      "max" + At,
      "max" + D,
      "position",
      kt,
      Tt,
      Tt + _t,
      Tt + xt,
      Tt + St,
      Tt + wt,
    ]),
    ee = /([A-Z])/g,
    Bt = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || qe.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(ee, "-$1").toLowerCase());
      }
    },
    zt = { left: 0, top: 0 },
    te = /(webkit|moz|length|cssText|inset)/i,
    re =
      ((ScrollTrigger.prototype.init = function init(S, T) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), vt)
        ) {
          var k,
            n,
            p,
            A,
            E,
            M,
            O,
            C,
            P,
            D,
            B,
            e,
            z,
            R,
            Y,
            L,
            F,
            t,
            X,
            b,
            K,
            N,
            m,
            H,
            x,
            w,
            r,
            _,
            V,
            W,
            o,
            g,
            q,
            j,
            Q,
            G,
            U,
            i,
            Z = (S = fb(Ja(S) || La(S) || S.nodeType ? { trigger: S } : S, Ct))
              .onUpdate,
            $ = S.toggleClass,
            a = S.id,
            ee = S.onToggle,
            te = S.onRefresh,
            re = S.scrub,
            ne = S.trigger,
            oe = S.pin,
            ie = S.pinSpacing,
            ae = S.invalidateOnRefresh,
            se = S.anticipatePin,
            s = S.onScrubComplete,
            h = S.onSnapComplete,
            le = S.once,
            ce = S.snap,
            ue = S.pinReparent,
            l = S.pinSpacer,
            fe = S.containerAnimation,
            de = S.fastScrollEnd,
            pe = S.preventOverlaps,
            ge =
              S.horizontal || (S.containerAnimation && !1 !== S.horizontal)
                ? He
                : Je,
            he = !re && 0 !== re,
            ve = I(S.scroller || je),
            c = qe.core.getCache(ve),
            be = Da(ve),
            me =
              "fixed" ===
              ("pinType" in S
                ? S.pinType
                : y(ve, "pinType") || (be && "fixed")),
            ye = [S.onEnter, S.onLeave, S.onEnterBack, S.onLeaveBack],
            xe = he && S.toggleActions.split(" "),
            u = "markers" in S ? S.markers : Ct.markers,
            we = be ? 0 : parseFloat(db(ve)["border" + ge.p2 + At]) || 0,
            _e = this,
            Se =
              S.onRefreshInit &&
              function () {
                return S.onRefreshInit(_e);
              },
            Te = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = y(e, "getBoundingClientRect"))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? je["inner" + o] : e["client" + o]) || 0;
                  };
            })(ve, be, ge),
            ke = (function _getOffsetsFunc(e, t) {
              return !t || ~Fe.indexOf(e)
                ? Ea(e)
                : function () {
                    return zt;
                  };
            })(ve, be),
            Ae = 0,
            Ee = 0,
            Me = J(ve, ge);
          if (
            (ct(_e),
            (_e._dir = ge),
            (se *= 45),
            (_e.scroller = ve),
            (_e.scroll = fe ? fe.time.bind(fe) : Me),
            (A = Me()),
            (_e.vars = S),
            (T = T || S.animation),
            "refreshPriority" in S &&
              ((st = 1), -9999 === S.refreshPriority && (dt = _e)),
            (c.tweenScroll = c.tweenScroll || {
              top: cc(ve, Je),
              left: cc(ve, He),
            }),
            (_e.tweenTo = k = c.tweenScroll[ge.p]),
            (_e.scrubDuration = function (e) {
              (o = La(e) && e)
                ? W
                  ? W.duration(e)
                  : (W = qe.to(T, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(_e);
                      },
                    }))
                : (W && W.progress(1).kill(), (W = 0));
            }),
            T &&
              ((T.vars.lazy = !1),
              T._initted ||
                (!1 !== T.vars.immediateRender &&
                  !1 !== S.immediateRender &&
                  T.duration() &&
                  T.render(0, !0, !0)),
              (_e.animation = T.pause()),
              (T.scrollTrigger = _e).scrubDuration(re),
              (_ = 0),
              (a = a || T.vars.id)),
            Pt.push(_e),
            ce &&
              ((Ma(ce) && !ce.push) || (ce = { snapTo: ce }),
              "scrollBehavior" in et.style &&
                qe.set(be ? [et, Ue] : ve, { scrollBehavior: "auto" }),
              (p = Ka(ce.snapTo)
                ? ce.snapTo
                : "labels" === ce.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return qe.utils.snap(ib(t), e);
                    };
                  })(T)
                : "labelsDirectional" === ce.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return kb(ib(r))(e, t.direction);
                    };
                  })(T)
                : !1 !== ce.directional
                ? function (e, t) {
                    return kb(ce.snapTo)(e, gt() - Ee < 500 ? 0 : t.direction);
                  }
                : qe.utils.snap(ce.snapTo)),
              (g = ce.duration || { min: 0.1, max: 2 }),
              (g = Ma(g) ? rt(g.min, g.max) : rt(g, g)),
              (q = qe
                .delayedCall(ce.delay || o / 2 || 0.1, function () {
                  var e = Me(),
                    t = gt() - Ee < 500,
                    r = k.tween;
                  if (
                    !(t || Math.abs(_e.getVelocity()) < 10) ||
                    r ||
                    it ||
                    Ae === e
                  )
                    _e.isActive && Ae !== e && q.restart(!0);
                  else {
                    var n = (e - M) / z,
                      o = T && !he ? T.totalProgress() : n,
                      i = t ? 0 : ((o - V) / (gt() - nt)) * 1e3 || 0,
                      a = qe.utils.clamp(-n, 1 - n, (bt(i / 2) * i) / 0.185),
                      s = n + (!1 === ce.inertia ? 0 : a),
                      l = rt(0, 1, p(s, _e)),
                      c = Math.round(M + l * z),
                      u = ce.onStart,
                      f = ce.onInterrupt,
                      d = ce.onComplete;
                    if (e <= O && M <= e && c !== e) {
                      if (r && !r._initted && r.data <= bt(c - e)) return;
                      !1 === ce.inertia && (a = l - n),
                        k(
                          c,
                          {
                            duration: g(
                              bt(
                                (0.185 * Math.max(bt(s - o), bt(l - o))) /
                                  i /
                                  0.05 || 0
                              )
                            ),
                            ease: ce.ease || "power3",
                            data: bt(c - e),
                            onInterrupt: function onInterrupt() {
                              return q.restart(!0) && f && f(_e);
                            },
                            onComplete: function onComplete() {
                              _e.update(),
                                (Ae = Me()),
                                (_ = V =
                                  T && !he ? T.totalProgress() : _e.progress),
                                h && h(_e),
                                d && d(_e);
                            },
                          },
                          e,
                          a * z,
                          c - e - a * z
                        ),
                        u && u(_e, k.tween);
                    }
                  }
                })
                .pause())),
            a && (It[a] = _e),
            (i =
              (i =
                (ne = _e.trigger = I(ne || oe)) &&
                ne._gsap &&
                ne._gsap.stRevert) && i(_e)),
            (oe = !0 === oe ? ne : I(oe)),
            Ja($) && ($ = { targets: ne, className: $ }),
            oe &&
              (!1 === ie ||
                ie === kt ||
                (ie = !(!ie && "flex" === db(oe.parentNode).display) && Tt),
              (_e.pin = oe),
              (n = qe.core.getCache(oe)).spacer
                ? (R = n.pinState)
                : (l &&
                    ((l = I(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = Yb(l))),
                  (n.spacer = F = l || Ge.createElement("div")),
                  F.classList.add("pin-spacer"),
                  a && F.classList.add("pin-spacer-" + a),
                  (n.pinState = R = Yb(oe))),
              !1 !== S.force3D && qe.set(oe, { force3D: !0 }),
              (_e.spacer = F = n.spacer),
              (r = db(oe)),
              (m = r[ie + ge.os2]),
              (X = qe.getProperty(oe)),
              (b = qe.quickSetter(oe, ge.a, Et)),
              Vb(oe, F, r),
              (L = Yb(oe))),
            u)
          ) {
            (e = Ma(u) ? fb(u, Ot) : Ot),
              (D = ub("scroller-start", a, ve, ge, e, 0)),
              (B = ub("scroller-end", a, ve, ge, e, 0, D)),
              (t = D["offset" + ge.op.d2]);
            var f = I(y(ve, "content") || ve);
            (C = this.markerStart = ub("start", a, f, ge, e, t, 0, fe)),
              (P = this.markerEnd = ub("end", a, f, ge, e, t, 0, fe)),
              fe && (U = qe.quickSetter([C, P], ge.a, Et)),
              me ||
                (Fe.length && !0 === y(ve, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = db(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(be ? et : ve),
                qe.set([D, B], { force3D: !0 }),
                (x = qe.quickSetter(D, ge.a, Et)),
                (w = qe.quickSetter(B, ge.a, Et)));
          }
          if (fe) {
            var d = fe.vars.onUpdate,
              v = fe.vars.onUpdateParams;
            fe.eventCallback("onUpdate", function () {
              _e.update(0, 0, 1), d && d.apply(v || []);
            });
          }
          (_e.previous = function () {
            return Pt[Pt.indexOf(_e) - 1];
          }),
            (_e.next = function () {
              return Pt[Pt.indexOf(_e) + 1];
            }),
            (_e.revert = function (e, t) {
              if (!t) return _e.kill(!0);
              var r = !1 !== e || !_e.enabled,
                n = ot;
              r !== _e.isReverted &&
                (r &&
                  ((Q = Math.max(Me(), _e.scroll.rec || 0)),
                  (j = _e.progress),
                  (G = T && T.progress())),
                C &&
                  [C, P, D, B].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && (ot = 1),
                _e.update(r),
                (ot = n),
                oe &&
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Bt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Bt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(oe, F, R)
                    : (ue && _e.isActive) || Vb(oe, F, db(oe), H)),
                (_e.isReverted = r));
            }),
            (_e.refresh = function (e, t) {
              if ((!ot && _e.enabled) || t)
                if (oe && e && ht) nb(ScrollTrigger, "scrollEnd", Fb);
                else {
                  !ft && Se && Se(_e),
                    (ot = 1),
                    (Ee = gt()),
                    k.tween && (k.tween.kill(), (k.tween = 0)),
                    W && W.pause(),
                    ae && T && T.revert({ kill: !1 }).invalidate(),
                    _e.isReverted || _e.revert(!0, !0);
                  for (
                    var r,
                      n,
                      o,
                      i,
                      a,
                      s,
                      l,
                      c,
                      u,
                      f,
                      d = Te(),
                      p = ke(),
                      g = fe ? fe.duration() : Ha(ve, ge),
                      h = 0,
                      v = 0,
                      b = S.end,
                      m = S.endTrigger || ne,
                      y =
                        S.start ||
                        (0 !== S.start && ne ? (oe ? "0 0" : "0 100%") : 0),
                      x = (_e.pinnedContainer =
                        S.pinnedContainer && I(S.pinnedContainer)),
                      w = (ne && Math.max(0, Pt.indexOf(_e))) || 0,
                      _ = w;
                    _--;

                  )
                    (s = Pt[_]).end || s.refresh(0, 1) || (ot = 1),
                      !(l = s.pin) ||
                        (l !== ne && l !== oe) ||
                        s.isReverted ||
                        ((f = f || []).unshift(s), s.revert(!0, !0)),
                      s !== Pt[_] && (w--, _--);
                  for (
                    Ka(y) && (y = y(_e)),
                      M =
                        _b(y, ne, d, ge, Me(), C, D, _e, p, we, me, g, fe) ||
                        (oe ? -0.001 : 0),
                      Ka(b) && (b = b(_e)),
                      Ja(b) &&
                        !b.indexOf("+=") &&
                        (~b.indexOf(" ")
                          ? (b = (Ja(y) ? y.split(" ")[0] : "") + b)
                          : ((h = tb(b.substr(2), d)),
                            (b = Ja(y) ? y : M + h),
                            (m = ne))),
                      O =
                        Math.max(
                          M,
                          _b(
                            b || (m ? "100% 0" : g),
                            m,
                            d,
                            ge,
                            Me() + h,
                            P,
                            B,
                            _e,
                            p,
                            we,
                            me,
                            g,
                            fe
                          )
                        ) || -0.001,
                      z = O - M || ((M -= 0.01) && 0.001),
                      h = 0,
                      _ = w;
                    _--;

                  )
                    (l = (s = Pt[_]).pin) &&
                      s.start - s._pinPush < M &&
                      !fe &&
                      0 < s.end &&
                      ((r = s.end - s.start),
                      (l !== ne && l !== x) ||
                        La(y) ||
                        (h += r * (1 - s.progress)),
                      l === oe && (v += r));
                  if (
                    ((M += h),
                    (O += h),
                    (_e._pinPush = v),
                    C &&
                      h &&
                      (((r = {})[ge.a] = "+=" + h),
                      x && (r[ge.p] = "-=" + Me()),
                      qe.set([C, P], r)),
                    oe)
                  )
                    (r = db(oe)),
                      (i = ge === Je),
                      (o = Me()),
                      (K = parseFloat(X(ge.a)) + v),
                      !g &&
                        1 < O &&
                        ((be ? et : ve).style["overflow-" + ge.a] = "scroll"),
                      Vb(oe, F, r),
                      (L = Yb(oe)),
                      (n = Mt(oe, !0)),
                      (c = me && J(ve, i ? He : Je)()),
                      ie &&
                        (((H = [ie + ge.os2, z + v + Et]).t = F),
                        (_ = ie === Tt ? hb(oe, ge) + z + v : 0) &&
                          H.push(ge.d, _ + Et),
                        Bt(H),
                        me && Me(Q)),
                      me &&
                        (((a = {
                          top: n.top + (i ? o - M : c) + Et,
                          left: n.left + (i ? c : o - M) + Et,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[mt] = a.maxWidth =
                          Math.ceil(n.width) + Et),
                        (a[yt] = a.maxHeight = Math.ceil(n.height) + Et),
                        (a[kt] =
                          a[kt + _t] =
                          a[kt + xt] =
                          a[kt + St] =
                          a[kt + wt] =
                            "0"),
                        (a[Tt] = r[Tt]),
                        (a[Tt + _t] = r[Tt + _t]),
                        (a[Tt + xt] = r[Tt + xt]),
                        (a[Tt + St] = r[Tt + St]),
                        (a[Tt + wt] = r[Tt + wt]),
                        (Y = (function _copyState(e, t, r) {
                          for (
                            var n, o = [], i = e.length, a = r ? 8 : 0;
                            a < i;
                            a += 2
                          )
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(R, a, ue)),
                        ft && Me(0)),
                      T
                        ? ((u = T._initted),
                          lt(1),
                          T.render(T.duration(), !0, !0),
                          (N = X(ge.a) - K + z + v),
                          z !== N && me && Y.splice(Y.length - 2, 2),
                          T.render(0, !0, !0),
                          u || T.invalidate(!0),
                          T.parent || T.totalTime(T.totalTime()),
                          lt(0))
                        : (N = z);
                  else if (ne && Me() && !fe)
                    for (n = ne.parentNode; n && n !== et; )
                      n._pinOffset &&
                        ((M -= n._pinOffset), (O -= n._pinOffset)),
                        (n = n.parentNode);
                  f &&
                    f.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (_e.start = M),
                    (_e.end = O),
                    (A = E = ft ? Q : Me()),
                    fe || ft || (A < Q && Me(Q), (_e.scroll.rec = 0)),
                    _e.revert(!1, !0),
                    q &&
                      ((Ae = -1), _e.isActive && Me(M + z * j), q.restart(!0)),
                    (ot = 0),
                    T &&
                      he &&
                      (T._initted || G) &&
                      T.progress() !== G &&
                      T.progress(G, !0).render(T.time(), !0, !0),
                    (j === _e.progress && !fe) ||
                      (T && !he && T.totalProgress(j, !0),
                      (_e.progress = (A - M) / z === j ? 0 : j)),
                    oe && ie && (F._pinOffset = Math.round(_e.progress * N)),
                    te && te(_e);
                }
            }),
            (_e.getVelocity = function () {
              return ((Me() - E) / (gt() - nt)) * 1e3 || 0;
            }),
            (_e.endAnimation = function () {
              Na(_e.callbackAnimation),
                T &&
                  (W
                    ? W.progress(1)
                    : T.paused()
                    ? he || Na(T, _e.direction < 0, 1)
                    : Na(T, T.reversed()));
            }),
            (_e.labelToScroll = function (e) {
              return (
                (T &&
                  T.labels &&
                  (M || _e.refresh() || M) +
                    (T.labels[e] / T.duration()) * z) ||
                0
              );
            }),
            (_e.getTrailing = function (t) {
              var e = Pt.indexOf(_e),
                r =
                  0 < _e.direction ? Pt.slice(0, e).reverse() : Pt.slice(e + 1);
              return (
                Ja(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < _e.direction ? e.end <= M : e.start >= O;
              });
            }),
            (_e.update = function (e, t, r) {
              if (!fe || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = ft ? Q : _e.scroll(),
                  f = e ? 0 : (u - M) / z,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = _e.progress;
                if (
                  (t &&
                    ((E = A),
                    (A = fe ? Me() : u),
                    ce && ((V = _), (_ = T && !he ? T.totalProgress() : d))),
                  se &&
                    !d &&
                    oe &&
                    !ot &&
                    !pt &&
                    ht &&
                    M < u + ((u - E) / (gt() - nt)) * se &&
                    (d = 1e-4),
                  d !== p && _e.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = _e.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (_e.direction = p < d ? 1 : -1),
                    (_e.progress = d),
                    a &&
                      !ot &&
                      ((o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      he &&
                        ((i =
                          (!s && "none" !== xe[o + 1] && xe[o + 1]) || xe[o]),
                        (c =
                          T && ("complete" === i || "reset" === i || i in T)))),
                    pe &&
                      (s || c) &&
                      (c || re || !T) &&
                      (Ka(pe)
                        ? pe(_e)
                        : _e.getTrailing(pe).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    he ||
                      (!W || ot || pt
                        ? T && T.totalProgress(d, !!ot)
                        : ((fe || (dt && dt !== _e)) &&
                            W.render(W._dp._time - W._start),
                          W.resetTo
                            ? W.resetTo("totalProgress", d, T._tTime / T._tDur)
                            : ((W.vars.totalProgress = d),
                              W.invalidate().restart()))),
                    oe)
                  )
                    if ((e && ie && (F.style[ie + ge.os2] = m), me)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < O + 1 && u + 1 >= Ha(ve, ge)),
                          ue)
                        )
                          if (e || (!n && !l)) bc(oe, F);
                          else {
                            var g = Mt(oe, !0),
                              h = u - M;
                            bc(
                              oe,
                              et,
                              g.top + (ge === Je ? h : 0) + Et,
                              g.left + (ge === Je ? 0 : h) + Et
                            );
                          }
                        Bt(n || l ? Y : L),
                          (N !== z && d < 1 && n) ||
                            b(K + (1 !== d || l ? 0 : N));
                      }
                    } else b(Aa(K + N * d));
                  !ce || k.tween || ot || pt || q.restart(!0),
                    $ &&
                      (s || (le && d && (d < 1 || !ut))) &&
                      tt($.targets).forEach(function (e) {
                        return e.classList[n || le ? "add" : "remove"](
                          $.className
                        );
                      }),
                    !Z || he || e || Z(_e),
                    a && !ot
                      ? (he &&
                          (c &&
                            ("complete" === i
                              ? T.pause().totalProgress(1)
                              : "reset" === i
                              ? T.restart(!0).pause()
                              : "restart" === i
                              ? T.restart(!0)
                              : T[i]()),
                          Z && Z(_e)),
                        (!s && ut) ||
                          (ee && s && Oa(_e, ee),
                          ye[o] && Oa(_e, ye[o]),
                          le && (1 === d ? _e.kill(!1, 1) : (ye[o] = 0)),
                          s || (ye[(o = 1 === d ? 1 : 3)] && Oa(_e, ye[o]))),
                        de &&
                          !n &&
                          Math.abs(_e.getVelocity()) > (La(de) ? de : 2500) &&
                          (Na(_e.callbackAnimation),
                          W
                            ? W.progress(1)
                            : Na(T, "reverse" === i ? 1 : !d, 1)))
                      : he && Z && !ot && Z(_e);
                }
                if (w) {
                  var v = fe
                    ? (u / fe.duration()) * (fe._caScrollDist || 0)
                    : u;
                  x(v + (D._isFlipped ? 1 : 0)), w(v);
                }
                U && U((-u / fe.duration()) * (fe._caScrollDist || 0));
              }
            }),
            (_e.enable = function (e, t) {
              _e.enabled ||
                ((_e.enabled = !0),
                nb(ve, "resize", Cb),
                nb(be ? Ge : ve, "scroll", Ab),
                Se && nb(ScrollTrigger, "refreshInit", Se),
                !1 !== e && ((_e.progress = j = 0), (A = E = Ae = Me())),
                !1 !== t && _e.refresh());
            }),
            (_e.getTween = function (e) {
              return e && k ? k.tween : W;
            }),
            (_e.setPositions = function (e, t) {
              oe && ((K += e - M), (N += t - e - z)),
                (_e.start = M = e),
                (_e.end = O = t),
                (z = t - e),
                _e.update();
            }),
            (_e.disable = function (e, t) {
              if (
                _e.enabled &&
                (!1 !== e && _e.revert(!0, !0),
                (_e.enabled = _e.isActive = !1),
                t || (W && W.pause()),
                (Q = 0),
                n && (n.uncache = 1),
                Se && ob(ScrollTrigger, "refreshInit", Se),
                q && (q.pause(), k.tween && k.tween.kill() && (k.tween = 0)),
                !be)
              ) {
                for (var r = Pt.length; r--; )
                  if (Pt[r].scroller === ve && Pt[r] !== _e) return;
                ob(ve, "resize", Cb), ob(ve, "scroll", Ab);
              }
            }),
            (_e.kill = function (e, t) {
              _e.disable(e, t), W && !t && W.kill(), a && delete It[a];
              var r = Pt.indexOf(_e);
              0 <= r && Pt.splice(r, 1),
                r === at && 0 < Dt && at--,
                (r = 0),
                Pt.forEach(function (e) {
                  return e.scroller === _e.scroller && (r = 1);
                }),
                r || ft || (_e.scroll.rec = 0),
                T &&
                  ((T.scrollTrigger = null),
                  e && T.revert({ kill: !1 }),
                  t || T.kill()),
                C &&
                  [C, P, D, B].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                dt === _e && (dt = 0),
                oe &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Pt.forEach(function (e) {
                    return e.pin === oe && r++;
                  }),
                  r || (n.spacer = 0)),
                S.onKill && S.onKill(_e);
            }),
            _e.enable(!1, !1),
            i && i(_e),
            T && T.add && !z
              ? qe.delayedCall(0.01, function () {
                  return M || O || _e.refresh();
                }) &&
                (z = 0.01) &&
                (M = O = 0)
              : _e.refresh();
        } else this.update = this.refresh = this.kill = za;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          a ||
            ((qe = e || Ca()),
            Ba() && window.document && ScrollTrigger.enable(),
            (a = vt)),
          a
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Ct[t] = e[t];
        return Ct;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (vt = 0),
          Pt.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          ob(je, "wheel", Ab),
          ob(Ge, "scroll", Ab),
          clearInterval(c),
          ob(Ge, "touchcancel", za),
          ob(et, "touchstart", za),
          mb(ob, Ge, "pointerdown,touchstart,mousedown", xa),
          mb(ob, Ge, "pointerup,touchend,mouseup", ya),
          l.kill(),
          Ia(ob);
        for (var e = 0; e < k.length; e += 3)
          pb(ob, k[e], k[e + 1]), pb(ob, k[e], k[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((je = window),
          (Ge = document),
          (Ue = Ge.documentElement),
          (et = Ge.body),
          qe &&
            ((tt = qe.utils.toArray),
            (rt = qe.utils.clamp),
            (ct = qe.core.context || za),
            (lt = qe.core.suppressOverwrites || za),
            (x = je.history.scrollRestoration || "auto"),
            qe.core.globals("ScrollTrigger", ScrollTrigger),
            et))
        ) {
          (vt = 1),
            C.register(qe),
            (ScrollTrigger.isTouch = C.isTouch),
            (P =
              C.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            nb(je, "wheel", Ab),
            (s = [je, Ge, Ue, et]),
            qe.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = qe.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                qe.addEventListener("matchMediaInit", function () {
                  return Jb();
                }),
                qe.addEventListener("matchMediaRevert", function () {
                  return Ib();
                }),
                qe.addEventListener("matchMedia", function () {
                  Q(0, 1), V("matchMedia");
                }),
                qe.matchMedia("(orientation: portrait)", function () {
                  return Bb(), Bb;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Bb(),
            nb(Ge, "scroll", Ab);
          var e,
            t,
            r = et.style,
            n = r.borderTopStyle,
            o = qe.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              e = Mt(et),
              Je.m = Math.round(e.top + Je.sc()) || 0,
              He.m = Math.round(e.left + He.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              c = setInterval(zb, 250),
              qe.delayedCall(0.5, function () {
                return (pt = 0);
              }),
              nb(Ge, "touchcancel", za),
              nb(et, "touchstart", za),
              mb(nb, Ge, "pointerdown,touchstart,mousedown", xa),
              mb(nb, Ge, "pointerup,touchend,mouseup", ya),
              u = qe.utils.checkPrefix("transform"),
              $.push(u),
              a = gt(),
              l = qe.delayedCall(0.2, Q).pause(),
              p = [
                Ge,
                "visibilitychange",
                function () {
                  var e = je.innerWidth,
                    t = je.innerHeight;
                  Ge.hidden ? ((f = e), (d = t)) : (f === e && d === t) || Cb();
                },
                Ge,
                "DOMContentLoaded",
                Q,
                je,
                "load",
                Q,
                je,
                "resize",
                Cb,
              ],
              Ia(nb),
              Pt.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < k.length;
            t += 3
          )
            pb(ob, k[t], k[t + 1]), pb(ob, k[t], k[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (ut = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(c)) || ((c = t) && setInterval(zb, t)),
          "ignoreMobileResize" in e &&
            (v = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Ia(ob) || Ia(nb, e.autoRefreshEvents || "none"),
            (g = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = I(e),
          n = k.indexOf(r),
          o = Da(r);
        ~n && k.splice(n, o ? 6 : 2),
          t && (o ? Fe.unshift(je, t, et, t, Ue, t) : Fe.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        Pt.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Ja(e) ? I(e) : e).getBoundingClientRect(),
          o = n[r ? mt : yt] * t || 0;
        return r
          ? 0 < n.right - o && n.left + o < je.innerWidth
          : 0 < n.bottom - o && n.top + o < je.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Ja(e) && (e = I(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? mt : yt],
          i =
            null == t
              ? o / 2
              : t in R
              ? R[t] * o
              : ~t.indexOf("%")
              ? (parseFloat(t) * o) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + i) / je.innerWidth : (n.top + i) / je.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (Pt.forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = X.killAll || [];
          (X = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    a ||
      ScrollTrigger.register(qe) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  (re.version = "3.11.2"),
    (re.saveStyles = function (e) {
      return e
        ? tt(e).forEach(function (e) {
            if (e && e.style) {
              var t = W.indexOf(e);
              0 <= t && W.splice(t, 5),
                W.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  qe.core.getCache(e),
                  ct()
                );
            }
          })
        : W;
    }),
    (re.revert = function (e, t) {
      return Jb(!e, t);
    }),
    (re.create = function (e, t) {
      return new re(e, t);
    }),
    (re.refresh = function (e) {
      return e ? Cb() : (a || re.register()) && Q(!0);
    }),
    (re.update = U),
    (re.clearScrollMemory = Kb),
    (re.maxScroll = function (e, t) {
      return Ha(e, t ? He : Je);
    }),
    (re.getScrollFunc = function (e, t) {
      return J(I(e), t ? He : Je);
    }),
    (re.getById = function (e) {
      return It[e];
    }),
    (re.getAll = function () {
      return Pt.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (re.isScrolling = function () {
      return !!ht;
    }),
    (re.snapDirectional = kb),
    (re.addEventListener = function (e, t) {
      var r = X[e] || (X[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (re.removeEventListener = function (e, t) {
      var r = X[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (re.batch = function (e, t) {
      function ro(e, t) {
        var r = [],
          n = [],
          o = qe
            .delayedCall(i, function () {
              t(r, n), (r = []), (n = []);
            })
            .pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          "on" === r.substr(0, 2) && Ka(t[r]) && "onRefreshInit" !== r
            ? ro(0, t[r])
            : t[r];
      return (
        Ka(a) &&
          ((a = a()),
          nb(re, "refresh", function () {
            return (a = t.batchMax());
          })),
        tt(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(re.create(t));
        }),
        n
      );
    });
  function ec(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function fc(e, t) {
    !0 === t
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === t
            ? "auto"
            : t
            ? "pan-" + t + (C.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Ue && fc(et, t);
  }
  function hc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || qe.core.getCache(i),
      s = gt();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (; i && i.scrollHeight <= i.clientHeight; ) i = i.parentNode;
      (a._isScroll =
        i &&
        !Da(i) &&
        i !== n &&
        (oe[(t = db(i)).overflowY] || oe[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && "x" !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function ic(e, t, r, n) {
    return C.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && hc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && nb(Ge, C.eventTypes[0], ae, !1, !0);
      },
      onDisable: function onDisable() {
        return ob(Ge, C.eventTypes[0], ae, !0);
      },
    });
  }
  function mc(e) {
    function np() {
      return (o = !1);
    }
    function qp() {
      (i = Ha(d, Je)),
        (T = rt(P ? 1 : 0, i)),
        f && (S = rt(0, Ha(d, He))),
        (l = j);
    }
    function rp() {
      (h._gsap.y = Aa(parseFloat(h._gsap.y) + v.offset) + "px"),
        (h.style.transform =
          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
          parseFloat(h._gsap.y) +
          ", 0, 1)"),
        (v.offset = v.cacheID = 0);
    }
    function xp() {
      qp(),
        a.isActive() &&
          a.vars.scrollY > i &&
          (v() > i ? a.progress(1) && v(i) : a.resetTo("scrollY", i));
    }
    Ma(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = I(e.target) || Ue,
      p = qe.core.globals().ScrollSmoother,
      g = p && p.get(),
      h =
        P &&
        ((e.content && I(e.content)) ||
          (g && !1 !== e.content && !g.smooth() && g.content())),
      v = J(d, Je),
      b = J(d, He),
      m = 1,
      y =
        (C.isTouch && je.visualViewport
          ? je.visualViewport.scale * je.visualViewport.width
          : je.outerWidth) / je.innerWidth,
      x = 0,
      w = Ka(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      _ = ic(d, e.type, !0, r),
      S = za,
      T = za;
    return (
      h && qe.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (P &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(np);
                var e = Aa(n.deltaY / 2),
                  t = T(v.v - e);
                if (h && t !== v.v + v.offset) {
                  v.offset = t - v.v;
                  var r = Aa((parseFloat(h && h._gsap.y) || 0) - v.offset);
                  (h.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    r +
                    ", 0, 1)"),
                    (h._gsap.y = r + "px"),
                    (v.cacheID = k.cache),
                    U();
                }
                return !0;
              }
              v.offset && rp(), (o = !0);
            })()) ||
          (1.05 < m && "touchstart" !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        var e = m;
        (m = Aa(((je.visualViewport && je.visualViewport.scale) || 1) / y)),
          a.pause(),
          e !== m && fc(d, 1.01 < m || (!f && "x")),
          (c = b()),
          (u = v()),
          qp(),
          (l = j);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((v.offset && rp(), t)) {
            k.cache++;
            var r,
              n,
              o = w();
            f &&
              ((n = (r = b()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= ec(b, r, n, Ha(d, He))),
              (a.vars.scrollX = S(n))),
              (n = (r = v()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= ec(v, r, n, Ha(d, Je))),
              (a.vars.scrollY = T(n)),
              a.invalidate().duration(o).play(0.01),
              ((P && a.vars.scrollY >= i) || i - 1 <= r) &&
                qe.to({}, { onUpdate: xp, duration: o });
          } else s.restart(!0);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < gt() - x && ((l = 0), (x = gt()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if (
          (j !== l && qp(),
          t && f && b(S(n[2] === t ? c + (e.startX - e.x) : b() + t - n[1])),
          r)
        ) {
          v.offset && rp();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : v() + r - o[1],
            s = T(a);
          i && a !== s && (u += s - a), v(s);
        }
        (r || t) && U();
      }),
      (e.onEnable = function () {
        fc(d, !f && "x"),
          re.addEventListener("refresh", xp),
          nb(je, "resize", xp),
          v.smooth &&
            ((v.target.style.scrollBehavior = "auto"),
            (v.smooth = b.smooth = !1)),
          _.enable();
      }),
      (e.onDisable = function () {
        fc(d, !0),
          ob(je, "resize", xp),
          re.removeEventListener("refresh", xp),
          _.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new C(e)).iOS = P) && !v() && v(1),
      P && qe.ticker.add(za),
      (s = n._dc),
      (a = qe.to(n, {
        ease: "power4",
        paused: !0,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var ne,
    oe = { auto: 1, scroll: 1 },
    ie = /(input|label|select|textarea)/i,
    ae = function _captureInputs(e) {
      var t = ie.test(e.target.tagName);
      (t || ne) && ((e._gsapAllow = !0), (ne = t));
    };
  (re.sort = function (e) {
    return Pt.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (re.observe = function (e) {
      return new C(e);
    }),
    (re.normalizeScroll = function (e) {
      if (void 0 === e) return h;
      if (!0 === e && h) return h.enable();
      if (!1 === e) return h && h.kill();
      var t = e instanceof C ? e : mc(e);
      return h && h.target === t.target && h.kill(), Da(t.target) && (h = t), t;
    }),
    (re.core = {
      _getVelocityProp: K,
      _inputObserver: ic,
      _scrollers: k,
      _proxies: Fe,
      bridge: {
        ss: function ss() {
          ht || V("scrollStart"), (ht = gt());
        },
        ref: function ref() {
          return ot;
        },
      },
    }),
    Ca() && qe.registerPlugin(re),
    (e.ScrollTrigger = re),
    (e.default = re);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* GENERAL VARIABLES & FUNCTIONS */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let $doc = document;
let UID;
let $html;
let $body;
let LANG;
let winWidth;
let winHeight;
const winChange = 1024;
let isBrowserIE;
let rootFontSize;
var qsa = function (s, o) {
    return (o || $doc).querySelectorAll(s);
  },
  qs = function (s, o) {
    return (o || $doc).querySelector(s);
  };

const initVariables = function () {
  setWindowSizes();
  $html = qs("html");
  $body = qs("body");
  UID = $body.getAttribute("id").replace("uid", "");
  LANG = $html.getAttribute("lang");
  isBrowserIE = $html.classList.contains("browser-ie");
  rootFontSize = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("font-size")
    .replace("px", "");
};

const setWindowSizes = function () {
  winWidth = innerWidth;
  winHeight = innerHeight;
};

const isMobile = function () {
  return winWidth < winChange;
};

/* URL GET PARAMETER */
const getUrlParameter = function getUrlParameter(sParam) {
  let sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

/* SCROLL HELPERS */
let scrollPositionHelper = null;

function scrollBlock() {
  scrollPositionHelper = isBrowserIE ? pageYOffset : scrollY;
  setTimeout(function () {
    $body.classList.add("scroll-block");
  }, 500);
}

function scrollUnblock() {
  if ($body.classList.contains("scroll-block")) {
    $body.classList.remove("scroll-block");
    scrollTo(0, scrollPositionHelper);
    scrollPositionHelper = null;
  }
}

function unsmoothScroll(top) {
  scroll(0, top);
}

function smoothScroll(top) {
  if ($html.classList.contains("browser-edge") || isBrowserIE) {
    unsmoothScroll(top);
    return;
  }
  scroll({
    top: top,
    left: 0,
    behavior: "smooth",
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* DOM FUNCTIONS */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOM is ready
const DOMloaded = function () {
  initVariables();
  addEventListener("scroll", PAGEscroll);
  PAGEscroll();
  openCookieSettings();
};

// all content is loaded
const FULLYloaded = function () {
  $body.classList.add("fully-loaded");
};

// window is resized
const PAGEresize = function () {
  setWindowSizes();
};

const openCookieSettings = function () {
  if (document.querySelector(".openCookieSettings", $body)) {
    document
      .querySelector(".openCookieSettings", $body)
      .addEventListener("click", function () {
        document.querySelector(".cc-window", $body).classList.remove("cc-hide");
        document.querySelector(".cc-window", $body).style = "display: block;";
        document.querySelector("body").classList.add("dp--cookie-consent");
        let ccbuttons = document.querySelectorAll(".cc-btn");

        if (getCookie("dp_cookieconsent_status")) {
          let cookie = getCookie("dp_cookieconsent_status");
          cookie = cookie.replace(/\{/g, "");
          cookie = cookie.replace(/\}/g, "");
          cookie = cookie.replace(/\"/g, "");

          let cookieArray = cookie.split(",");

          for (let index = 0; index < cookieArray.length; index++) {
            let splitted = cookieArray[index].split(":");
            if (
              splitted[0] == "dp--cookie-statistics" &&
              splitted[1] == "true"
            ) {
              document.querySelector("#dp--cookie-statistics").checked = true;
            }
            if (
              splitted[0] == "dp--cookie-marketing" &&
              splitted[1] == "true"
            ) {
              document.querySelector("#dp--cookie-marketing").checked = true;
            }
          }
        }

        for (let index = 0; index < ccbuttons.length; index++) {
          ccbuttons[index].addEventListener("click", function () {
            document
              .querySelector(".cc-window", $body)
              .classList.add("cc-invisible");
            document.querySelector(".cc-window", $body).style = "display: none";
          });
        }
      });
  }
};

let lastScrollTop;

function PAGEscroll() {
  const scrollTop = isBrowserIE ? pageYOffset : scrollY;

  //down
  if (
    lastScrollTop === undefined ||
    (lastScrollTop > 0 && scrollTop > lastScrollTop)
  ) {
    if (scrollTop) $body.classList.add("scrolled");
  }
  //up
  else {
    if (!scrollTop) $body.classList.remove("scrolled");
  }
  lastScrollTop = scrollTop;
}

$doc.addEventListener("DOMContentLoaded", DOMloaded);
addEventListener("load", FULLYloaded);
addEventListener("resize", PAGEresize);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Scroll */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// easing functions http://goo.gl/5HLl8
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * t * t + b;
  }
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

Math.easeInCubic = function (t, b, c, d) {
  var tc = (t /= d) * t * t;
  return b + c * tc;
};

Math.inOutQuintic = function (t, b, c, d) {
  var ts = (t /= d) * t,
    tc = ts * t;
  return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function scrollToAnimated(to, duration, callback) {
  // because it's so fucking difficult to detect the scrolling element, just move them all
  function move(amount) {
    document.querySelector(".imageOverlay").scrollTop = amount;
  }

  function position() {
    return document.querySelector(".imageOverlay").scrollTop;
  }
  var start = position(),
    change = to - start,
    currentTime = 0,
    increment = 20;
  duration = typeof duration === "undefined" ? 500 : duration;
  var animateScroll = function () {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    // move the document.body
    move(val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof callback === "function") {
        // the animation is done so lets callback
        callback();
      }
    }
  };
  animateScroll();
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Check if item is in View */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isInView(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function isInViewPice(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >=
      -(window.innerHeight || document.documentElement.clientHeight) ||
    rect.bottom >= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* SERVICE WORKER */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("./plugins/sw_cached_pages.js")
//       .then(reg => console.log("Service Worker: Registered (Pages)"))
//       .catch(err => console.log(`Service Worker: Error: ${err}`));
//   });
// }

let scroll;
let languageArray = [];
let journalScriptAdded = false;
(function () {
  // DOM is ready
  const DOMloaded = async function () {
    window.onunload = function () {
      window.scrollTo(0, 0);
    };

    if (LANG == "de") {
      languageArray["from"] = "ab";
      languageArray["for"] = "für";
      languageArray["persons"] = "Personen";
      languageArray["showDetail"] = "Details anzeigen";
      languageArray["request"] = "Anfragen";
      languageArray["booking"] = "Buchen";
      languageArray["perRoom"] = "pro Apartment";
      languageArray["availability"] = "Verfügbarkeit prüfen";
      languageArray["equipment"] = "Ausstattung";
      languageArray["perPerson"] = "pro Person";
      languageArray["untilMax"] = "bis max.";
      languageArray["includedServices"] = "Inklusivleistungen";
      languageArray["forto"] = "für bis zu ";
      languageArray["personnight"] = " Personen </br> / Nacht";
      languageArray["paketpreis"] = "Paketpreis";
      languageArray["offerrequest"] = "Angebot Anfragen";
      languageArray["offerbooking"] = "Angebot Buchen";
      languageArray["packagePerPerson"] = "pro Person und Tag";
    } else if (LANG == "it") {
      languageArray["from"] = "da";
      languageArray["for"] = "per";
      languageArray["persons"] = "persone";
      languageArray["showDetail"] = "mostra dettagli";
      languageArray["request"] = "richiesta";
      languageArray["booking"] = "prenota";
      languageArray["perRoom"] = "per appartamento";
      languageArray["availability"] = "Verifica la disponibilità";
      languageArray["equipment"] = "Attrezzatura";
      languageArray["perPerson"] = "a persona";
      languageArray["untilMax"] = "fino a";
      languageArray["includedServices"] = "servizi inclusi";
      languageArray["forto"] = "per ";
      languageArray["personnight"] = " persone </br> / notte";
      languageArray["paketpreis"] = "Prezzo del pacchetto";
      languageArray["offerrequest"] = "richiedi offerta";
      languageArray["offerbooking"] = "prenota offerta";
      languageArray["packagePerPerson"] = "per persona e giorno";
    } else {
      languageArray["from"] = "from";
      languageArray["for"] = "for";
      languageArray["persons"] = "persons";
      languageArray["showDetail"] = "show detail";
      languageArray["request"] = "request";
      languageArray["booking"] = "book";
      languageArray["perRoom"] = "per apartment";
      languageArray["availability"] = "Check availability";
      languageArray["equipment"] = "Equipment";
      languageArray["perPerson"] = "per person";
      languageArray["untilMax"] = "up to";
      languageArray["includedServices"] = "included services";
      languageArray["forto"] = "for up to ";
      languageArray["personnight"] = " persons </br> / night";
      languageArray["paketpreis"] = "Package price";
      languageArray["offerrequest"] = "request offer";
      languageArray["offerbooking"] = "book offer";
      languageArray["packagePerPerson"] = "per person per day";
    }
    await doBarbaSettings();
    let circle = document.querySelector(".pageChangeCircle");
    document.addEventListener("mousemove", function (e) {
      let left = e.clientX;
      let top = e.clientY;
      circle.style.left = left - circle.clientWidth / 2 + "px";
      circle.style.top = top - circle.clientHeight / 2 + "px";
    });

    async function doBarbaSettings() {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      if (document.querySelector(".browser-safari, .browser-iOS")) {
        gsap.config({
          force3D: "false",
        });
      }
      window.scrollTo(0, 0);
      await init();
      barba.init({
        debug: false,
        preventRunning: true,
        timeout: 3000,
        transitions: [
          {
            name: "opacity-transition",
            async leave(data) {
              //OutAnimation
              gsap
                .timeline()
                .to(circle, {
                  opacity: 1,
                  duration: 0.1,
                })
                .to(circle, {
                  scale: 90,
                  duration: 0.6,
                  ease: "power1.in",
                });
              await delay(700);
            },
            async afterLeave() {
              document.querySelector("body").classList.remove("pageBeige");
              ScrollTrigger.killAll();
            },
            async after() {
              triggerPageColor();
              gsap
                .timeline()
                .to(circle, {
                  scale: 1,
                  duration: 0.8,
                  ease: "power1.out",
                })
                .to(circle, {
                  opacity: 0,
                  duration: 0.1,
                });
              setTimeout(() => {
                document.querySelector("body").classList.remove("menuOpen");
              }, 1000);
              //InAnimation
              document
                .querySelector("body")
                .setAttribute(
                  "id",
                  "uid" +
                    document.querySelector(".body-inner").getAttribute("pageid")
                );
              init();
              doInitHeader();
              doInitImgText();
              doInitColor();
              doInitTextteaser();
              initRoomlistView();
              initRoomDetailview();
              initGallery();
              doInitText();
              doInitFullscreenMedia();
              initSlider();
              initAdditiveOfferList();
              initAdditiveOfferDetail();
              initAdditiveOfferSlider();
              initAdditiveTreatments();
              initAccordions();
              initMobileCtas();
              doInitInfobalken();
              try {
                ga("send", "pageview");
              } catch (error) {}
              if (!sessionStorage.getItem("animationTriggered")) {
                startAnimation();
              } else {
                document
                  .querySelector(".loadingAnimation")
                  .classList.add("hide");
              }
            },
            once() {
              triggerPageColor();
              if (!sessionStorage.getItem("animationTriggered")) {
                startAnimation();
              } else {
                document
                  .querySelector(".loadingAnimation")
                  .classList.add("hide");
              }
            },
          },
        ],
        views: [
          {
            namespace: "anfrage",
            beforeEnter(data) {
              if (!document.querySelector(".powermail-script")) {
                let myScript = document.createElement("script");
                myScript.src =
                  "/fileadmin/templates/hantha_modules/spc_select/select.customized.compiled.js";
                myScript.className = "powermail-script";
                document.head.append(myScript);
                myScript = document.createElement("script");
                myScript.src =
                  "/fileadmin/templates/hantha_modules/spc_select/module.js";
                myScript.className = "powermail-script";
                document.head.append(myScript);
                myScript = document.createElement("script");
                myScript.src =
                  "/fileadmin/templates/hantha_modules/spc_powermailforms/Scripts/autosize.min.js";
                myScript.className = "powermail-script";
                document.head.append(myScript);
                myScript = document.createElement("script");
                myScript.src =
                  "/fileadmin/templates/hantha_modules/spc_powermailforms/base.js";
                myScript.className = "powermail-script";
                document.head.append(myScript);
                myScript = document.createElement("script");
                myScript.src =
                  "/fileadmin/templates/hantha_modules/spc_powermailforms/request.js";
                myScript.className = "powermail-script";
                document.head.append(myScript);
              }
              let int = setInterval(() => {
                try {
                  initBookingWidget();
                  clearInterval(int);
                } catch (error) {}
              }, 300);
            },
          },
          {
            namespace: "booking",
            beforeEnter() {
              if (!document.querySelector(".booking-script")) {
                let myScript = document.createElement("script");
                myScript.src =
                  "https://widget.bookingsuedtirol.com/v2/bundle.js";
                myScript.className = "booking-script";
                myScript.async = true;
                document.head.append(myScript);
              }
              let int = setInterval(() => {
                try {
                  initBookingWidget();
                  clearInterval(int);
                } catch (error) {}
              }, 300);
            },
            after() {
              scroll.scrollTop();
            },
          },
          {
            namespace: "newsletter",
            beforeEnter(data) {
              let myScript = document.createElement("script");
              myScript.src =
                "https://newsletter.additive-apps.tech/silena-com/widgets/2302259a-1966-41bb-9e6a-124f24141f5a/" +
                LANG;
              myScript.className = "newsletter-script";
              myScript.async = true;
              if (document.querySelector(".newsletter-script")) {
                document.querySelector(".newsletter-script").remove();
              }
              document.head.append(myScript);
              if (!isLoaded) {
                window.addEventListener(
                  "additiveNLSubscription",
                  function (event) {
                    if (event.detail.status == "success") {
                      if (typeof ddtv === "function") {
                        ddtv(
                          "send",
                          "conversion",
                          "LeadConversion",
                          "additive-newsletter",
                          event.detail.data.email
                        );
                      }
                    }
                  }
                );
                isLoaded = true;
              }
            },
          },
          {
            namespace: "voucher",
            beforeEnter(data) {
              let myScript = document.createElement("script");
              myScript.src =
                "https://voucher.additive-apps.tech/silena-com/widgets/6c3a2edf-0aa0-4fbe-a2fa-e7006d3f7237/" +
                LANG;
              myScript.className = "voucher-script";
              myScript.async = true;
              if (document.querySelector(".voucher-script")) {
                document.querySelector(".voucher-script").remove();
              }
              document.head.append(myScript);
            },
          },
          {
            namespace: "journal",
            beforeEnter(data) {
              if (window.Ember) {
                delete window.Ember;
              }

              (function (w, d, u, f, s, fs) {
                w["t17JournalWidgetObject"] = f;
                (w[f] =
                  w[f] ||
                  function () {
                    (w[f].q = w[f].q || []).push(arguments);
                  }),
                  (s = d.createElement("script")),
                  (fs = d.getElementsByTagName("script")[0]);
                s.async = 1;
                s.src = u;
                fs.parentNode.insertBefore(s, fs);
              })(
                window,
                document,
                "https://cdn-apps.s3.amazonaws.com/journal/widget/files/load.js",
                "t17Journal"
              );
              journalScriptAdded = true;

              t17Journal("create", "silena-com", LANG, "1.0");
            },
          },
        ],
        prevent: ({ el }) => {
          return (
            (!el.classList.contains("barba") &&
              !el.classList.contains("ht-button")) ||
            el.classList.contains("current")
          );
        },
      });
    }
    async function init() {
      if (scroll) {
        window.scrollTo(0, 0);
        scroll.scrollTop(0);
      } else {
        window.scrollTo(0, 0);
      }

      scroll = ScrollSmoother.create({
        smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.05, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      });
      scroll.scrollTop(0);
      if (isMobile()) {
        initMobileCtas();
      }
    }

    function delay(n) {
      n = n || 2000;
      return new Promise((done) => {
        setTimeout(() => {
          done();
        }, n);
      });
    }

    function startAnimation() {
      sessionStorage.setItem("animationTriggered", true);
      var tl = gsap.timeline();
      tl.to(".loadingAnimation .text1", {
        opacity: 1,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.in",
      });
      tl.to(".loadingAnimation .text2", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.in",
      });
      tl.to(".loadingAnimation .rightPattern", {
        opacity: 1,
        duration: 1,
        ease: "power2.in",
      });
      tl.to(
        ".loadingAnimation .leftPattern",
        {
          opacity: 1,
          duration: 1,
          ease: "power2.in",
        },
        "-=1"
      );
      tl.to(".loadingAnimation .rightPattern", {
        opacity: 0,
        delay: 1.5,
        duration: 0.4,
        ease: "power2.in",
      });
      tl.to(
        ".loadingAnimation .leftPattern",
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.4"
      );
      tl.to(
        ".loadingAnimation .textContent",
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.2"
      );
      tl.to(
        ".loadingAnimation ",
        {
          scale: 0,
          duration: 1.4,
          ease: "power2.in",
        },
        "-=0.6"
      );
    }

    function initBookingWidget() {
      try {
        tracking();
      } catch (error) {}
      BookingSüdtirol.Widgets.Booking("#Bs-BookingWidget", {
        accommodationId: 11924,
        lang: LANG,
        promotion: [
          sessionStorage.getItem("utm_medium"),
          sessionStorage.getItem("utm_source"),
          sessionStorage.getItem("utm_campaign"),
        ],
        onBookingSuccess: (reservation) => {
          //    gtag('event', 'conversion', {
          //       'send_to': 'AW-711619988/kDYKCIje26kBEJTrqdMC',
          //       'transaction_id': reservation.bookingId,
          //       'value': reservation.price,
          //       'currency': 'EUR'
          //   });
        },
        onEnquirySuccess: (reservation) => {
          // Called after successful enquiry
        },
      });
    }
  };

  $doc.addEventListener("DOMContentLoaded", DOMloaded);
})();

function triggerPageColor() {
  if (document.querySelector(".roomdetail")) {
    let backgroundcolor = document
      .querySelector(".roomdetail")
      .getAttribute("data-color");
    if (backgroundcolor == "#EAE3D1") {
      document.querySelector("body").classList.add("pageBeige");
    }
  }
}

function initMobileCtas() {
  if (isMobile()) {
    if (document.querySelector(".roomdetail .linkContainer")) {
      document.querySelector(".mobileCtas").innerHTML = document.querySelector(
        ".roomdetail .linkContainer"
      ).innerHTML;
      document.querySelector(".mobileCtas").style.display = "flex";
    }
    if (
      document.querySelector(
        ".mask_additiveofferdetail .textContent .buttonWrapper"
      )
    ) {
      document.querySelector(".mobileCtas").innerHTML = document.querySelector(
        ".mask_additiveofferdetail .textContent .buttonWrapper"
      ).innerHTML;
      document.querySelector(".mobileCtas").style.display = "flex";
    }
    if (document.querySelector(".mask_additivetreatments .categoryWrapper")) {
      document.querySelector(".innerFilterWrapper").innerHTML =
        document.querySelector(
          ".mask_additivetreatments .categoryWrapper"
        ).innerHTML;
      document.querySelector(".mobileFilterWrapper").style.display = "flex";
      let categorys = document.querySelectorAll(".category");
      if (isMobile() && categorys.length > 0) {
        let containerWidth = 0;
        setTimeout(() => {
          categorys.forEach((category) => {
            containerWidth += category.getBoundingClientRect().width + 10;
          });
          document.querySelector(".innerFilterWrapper").style.width =
            containerWidth + "px";
        }, 200);
      }
    }
    if (document.querySelector(".mask_gallery .categorys")) {
      document.querySelector(".innerFilterWrapper").innerHTML =
        document.querySelector(".mask_gallery .categorys").innerHTML;
      document.querySelector(".mobileFilterWrapper").style.display = "flex";
      let categorys = document.querySelectorAll(".category");
      if (isMobile() && categorys.length > 0) {
        let containerWidth = 0;
        setTimeout(() => {
          categorys.forEach((category) => {
            containerWidth += category.getBoundingClientRect().width + 10;
          });
          document.querySelector(".innerFilterWrapper").style.width =
            containerWidth + "px";
        }, 200);
      }
    }
    if (document.querySelector(".roomlistview .categoryContainer")) {
      document.querySelector(".innerFilterWrapper").innerHTML =
        document.querySelector(".roomlistview .categoryContainer").innerHTML;
      document.querySelector(".mobileFilterWrapper").style.display = "flex";
      let categorys = document.querySelectorAll(".category");
      if (isMobile() && categorys.length > 0) {
        let containerWidth = 0;
        setTimeout(() => {
          categorys.forEach((category) => {
            containerWidth += category.getBoundingClientRect().width + 10;
          });
          document.querySelector(".innerFilterWrapper").style.width =
            containerWidth + "px";
        }, 200);
      }
    }
  }
}
(function () {
  const DOMloaded = function () {
    let hovertext = document.querySelector(".hoverText");
    let signet = document.querySelector(".hanthaSignet");
    let hanthaSignet = document.querySelector(".signetContainer");
    if (document.querySelector(".browser-ie")) {
      hovertext.style.width = hovertext.clientWidth + "px";
    }
    hovertext.addEventListener("webkitAnimationEnd", hovertextFade, false);
    hovertext.addEventListener("animationend", hovertextFade, false);
    hovertext.addEventListener("oanimationend", hovertextFade, false);
    hanthaSignet.addEventListener("mouseleave", fadeOutTransition, false);

    function hovertextFade() {
      hovertext.classList.add("visible");
      signet.classList.add("signetVisible");
    }
    function fadeOutTransition() {
      if (hovertext.classList.contains("visible")) {
        setTimeout(function () {
          hovertext.classList.remove("visible");
        }, 100);
        setTimeout(function () {
          signet.classList.remove("signetVisible");
        }, 550);
      }
    }
  };

  document.addEventListener("DOMContentLoaded", DOMloaded);
})();
(function () {
  const DOMloaded = function () {
    doInitHeader();
  };

  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function doInitHeader() {
  let shortClicked = false;
  let header = document.querySelector("#hea_003");
  let toggle = header.querySelector("#hamburger-toggle");
  let innerCircleColor;
  ScrollTrigger.create({
    trigger: document.querySelector("main"),
    start: "top top",
    end: "+=" + window.innerHeight / 3,
    scrub: true,
    onToggle: ({ progress, direction, isActive }) => {
      if (Math.round(progress) == 0) {
        document.querySelector(".logo").style.pointerEvents = "auto";
      } else {
        document.querySelector(".logo").style.pointerEvents = "none";
      }
    },
    animation: gsap.to(document.querySelector(".logo"), {
      opacity: 0,
      scale: 0.5,
    }),
  });

  toggle.addEventListener("click", function () {
    if (header.classList.contains("showMenu")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  function openMenu() {
    if (!isMobile()) {
      scroll.paused(true);
    }
    header.classList.add("showMenu");
    document.querySelector("body").classList.add("menuOpen");

    const timelineHeader = gsap.timeline();
    innerCircleColor =
      toggle.querySelector(".innerCircle").style.backgroundColor;
    if (isMobile()) {
      timelineHeader
        .to(toggle.querySelector(".smallHeaderLogo"), {
          opacity: 0,
          duration: 0.01,
        })
        .to(toggle.querySelector(".circle"), {
          opacity: 1,
          duration: 0.01,
          ease: "power1.in",
        });
    }
    timelineHeader
      .to(toggle.querySelector(".innerCircle"), {
        scale: 5,
        duration: 0.01,
      })
      .to(toggle.querySelector(".circle"), {
        opacity: 1,
        duration: 0.01,
        ease: "power1.in",
      })
      .to(toggle.querySelector(".circle"), {
        scale: 300,
        duration: 1.3,
        ease: "power1.in",
      })
      .to(
        toggle.querySelector(".innerCircle"),
        {
          backgroundColor: "#655B50",
          duration: 0.1,
          ease: "power1.in",
        },
        "-=1.3"
      )
      .to(
        toggle.querySelector(".innerCircle"),
        {
          opacity: 1,
          duration: 0.1,
          ease: "power1.in",
        },
        "-=1.5"
      )
      .to(
        toggle.querySelector(".text"),
        {
          opacity: 0,
          duration: 0.4,
        },
        "-=1"
      )
      .to(
        header.querySelectorAll(".links a"),
        {
          color: "#D5C7A3",
          duration: 0.4,
        },
        "-=1"
      )
      .to(
        toggle.querySelector(".xClose"),
        {
          opacity: 1,
          duration: 0.4,
        },
        "-=0.2"
      )
      .to(
        "#menu>.ul>.li",
        {
          opacity: 1,
          y: 0,
          delay: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power1.out",
        },
        "-=2"
      )
      .fromTo(
        header.querySelector(".leftPattern"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 5,
        },
        "-=1"
      );
  }

  function closeMenu() {
    if (!isMobile()) {
      scroll.paused(false);
    }
    document.querySelector("body").classList.remove("menuOpen");
    const timelineHeader = gsap.timeline({
      onComplete: () => {
        header.classList.remove("showMenu");
      },
    });

    timelineHeader
      .fromTo(
        header.querySelector(".leftPattern"),
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.3,
        }
      )
      .to(
        "#menu>.ul>.li",
        {
          opacity: 0,
          y: 50,
          duration: 0.4,
          stagger: -0.1,
          ease: "power1.in",
        },
        "-=0.2"
      )
      .to(
        toggle.querySelector(".text"),
        {
          opacity: 1,
          duration: 0.4,
        },
        "-=1"
      )
      .to(
        header.querySelectorAll(".links a"),
        {
          color: innerCircleColor,
          duration: 0.4,
        },
        "-=1"
      )
      .to(
        toggle.querySelector(".xClose"),
        {
          opacity: 0,
          duration: 0.4,
        },
        "-=0.2"
      )
      .to(
        toggle.querySelector(".circle"),
        {
          scale: 1,
          opacity: 0.4,
          duration: 1.3,
          ease: "power1.out",
        },
        "-=1"
      )
      .to(toggle.querySelector(".innerCircle"), {
        backgroundColor: innerCircleColor,
        scale: 1,
        duration: 0.01,
        ease: "power1.out",
      });

    if (isMobile()) {
      setTimeout(() => {
        timelineHeader
          .to(toggle.querySelector(".smallHeaderLogo"), {
            opacity: 1,
            duration: 0.01,
          })
          .to(toggle.querySelector(".circle"), {
            opacity: 0,
            duration: 0.01,
            ease: "power1.in",
          });
      }, 1300);
    }
  }

  let menuitems = [...header.querySelectorAll(".li.hassub")];
  menuitems.forEach((menuitem) => {
    menuitem.querySelector(":scope > .innerWrapper > a").onclick = (e) => {
      e.preventDefault();
      if (!shortClicked) {
        shortClicked = true;
        toggleMenu(menuitem);
      }
    };
    if (!isMobile()) {
      menuitem.querySelector(":scope > .innerWrapper > a").onmouseenter =
        function (e) {
          hoverStart(menuitem);
        };
    }
    if (isMobile()) {
      menuitem.style.height =
        menuitem.querySelector(":scope > .innerWrapper > a").clientHeight +
        "px";
    }
  });

  checkActiveMenus();

  function toggleMenu(menuitem) {
    if (header.querySelector(".hassub.open")) {
      if (header.querySelector(".hassub.open") != menuitem) {
        let tempItem = header.querySelector(".hassub.open");
        gsap.to(tempItem.querySelectorAll(".submenu .li"), {
          opacity: 0,
          y: menuitems.indexOf(tempItem) > 2 ? -50 : 50,
          delay: 0.3,
          duration: 1,
          stagger: menuitems.indexOf(tempItem) > 2 ? 0.15 : -0.15,
          ease: "power1.out",
        });

        tempItem.classList.remove("open");
        menuitems.forEach((temp) => {
          temp.classList.remove("notActiveSubOpen");
        });
        if (isMobile()) {
          tempItem.style.height =
            tempItem.querySelector(":scope > .innerWrapper > a").clientHeight +
            "px";
        }
      }
    }
    if (menuitem.classList.contains("open")) {
      gsap.to(menuitem.querySelectorAll(".submenu .li"), {
        opacity: 0,
        y: menuitems.indexOf(menuitem) > 2 ? -50 : 50,
        delay: 0.3,
        duration: 1,
        stagger: menuitems.indexOf(menuitem) > 2 ? 0.15 : -0.15,
        ease: "power1.out",
      });

      menuitem.classList.remove("open");
      menuitems.forEach((temp) => {
        temp.classList.remove("notActiveSubOpen");
      });
      if (isMobile()) {
        menuitem.style.height =
          menuitem.querySelector(":scope > .innerWrapper > a").clientHeight +
          "px";
      }
    } else {
      let counter = 0;
      menuitems.forEach((temp) => {
        if (temp != menuitem) {
          counter++;
          temp.classList.add("notActiveSubOpen");
          gsap.to(temp.querySelectorAll(".submenu .li"), {
            opacity: 0,
            y: menuitems.indexOf(temp) > 2 && !isMobile() ? -50 : 50,
            delay: 0.3,
            duration: 1,
            stagger: menuitems.indexOf(temp) > 2 && !isMobile() ? 0.15 : -0.15,
            ease: "power1.out",
          });
          temp.classList.remove("open");
          if (isMobile()) {
            temp.style.height =
              temp.querySelector(":scope > .innerWrapper > a").clientHeight +
              "px";
          }
        }
      });
      setTimeout(() => {
        if (isMobile()) {
          menuitem.style.height =
            menuitem.querySelector(":scope > .innerWrapper > a").clientHeight +
            menuitem.querySelector(".heightWrapper").clientHeight +
            "px";
        }
        gsap.to(menuitem.querySelectorAll(".submenu .li"), {
          opacity: 1,
          y: 0,
          delay: 0.3,
          duration: 0.7,
          stagger:
            menuitems.indexOf(menuitem) > 2 && !isMobile() ? -0.15 : 0.15,
          ease: "power1.out",
        });
        menuitem.classList.add("open");
      }, 100);
    }
    setTimeout(() => {
      shortClicked = false;
    }, 1800);
  }

  function hoverStart(submenu) {
    let trigger = submenu.querySelector(":scope > .innerWrapper > a");
    trigger.onmouseenter = "";
    menuitems.forEach((temp) => {
      if (temp != submenu) {
        temp.classList.add("notActive");
      }
    });
    submenu.onmouseleave = function () {
      hoverEnd();
      submenu.onmouseleave = "";
      trigger.onmouseenter = function (e) {
        hoverStart(submenu);
      };
    };
  }

  function hoverEnd() {
    menuitems.forEach((temp) => {
      temp.classList.remove("notActive");
    });
  }

  let submenuLi = [...header.querySelectorAll(".li.hassub .li")];
  submenuLi.forEach((li) => {
    li.onmouseenter = function (e) {
      hoverStartSubmenu(li);
    };
  });

  function hoverStartSubmenu(submenu) {
    submenu.onmouseenter = "";
    submenuLi.forEach((temp) => {
      if (temp != submenu) {
        temp.classList.add("notActive");
      }
    });
    submenu.onmouseleave = function () {
      hoverEndSubmenu();
      submenu.onmouseleave = "";
      submenu.onmouseenter = function (e) {
        hoverStartSubmenu(submenu);
      };
    };
  }

  function hoverEndSubmenu() {
    submenuLi.forEach((temp) => {
      temp.classList.remove("notActive");
    });
  }

  function checkActiveMenus() {
    if (header.querySelector(".li.hassub.current")) {
      header.querySelectorAll(".li.hassub").forEach((sub) => {
        if (sub != header.querySelector(".li.hassub.current")) {
          sub.classList.add("notActive");
        } else {
          toggleMenu(sub);
          sub.querySelectorAll(".submenu .li a").forEach((element) => {
            if (
              !element.classList.contains("current") ||
              window.location.pathname.split("/").reverse()[1] !=
                element.getAttribute("href").split("/").reverse()[1]
            ) {
              element.closest(".li").classList.add("notActive");
            }
          });
        }
      });
    }
  }
}
(function () {
  const DOMloaded = function () {
    doInitImgText();
    // barba.hooks.after(() => {
    //     doInitImgText()
    // })
  };
  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function doInitImgText() {
  let masks = document.querySelectorAll(".mask_imgtext");
  if (masks.length > 0) {
    masks.forEach((mask) => {
      mask.style.height =
        mask.querySelector(".lowerSection").clientHeight + "px";
      if (!isMobile()) {
        mask.querySelector(".rightSide").style.marginTop =
          mask.querySelector("h1,h2").clientHeight + "px";
      }
      if (mask.classList.contains("mainAnimation")) {
        mainAnimation(mask);
      } else {
        standardAnimation(mask);
      }
    });

    function mainAnimation(mask) {
      const timelineHeader = gsap.timeline();
      if (isMobile()) {
        timelineHeader
          .fromTo(
            mask.querySelector(".upperSection"),
            {
              clipPath: "circle(100% at 50% 25%)",
              y: 0,
            },
            {
              clipPath: "circle(25% at 50% 32%)",
              duration: 1,
              ease: "power1.out",
            }
          )
          .to(
            mask.querySelector(".image"),
            {
              y: (window.innerHeight / 4) * -1,
              duration: 1,
              ease: "power2.out",
            },
            "-=1"
          )
          .to(
            mask.querySelector(".leftSide"),
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.in",
            },
            "-=0.5"
          )
          .to(
            mask.querySelector(".rightSide"),
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.in",
            },
            "-=0.2"
          )
          .to(
            mask.querySelector(".rightPattern"),
            {
              opacity: 1,
              duration: 0.2,
              ease: "power2.in",
            },
            "-=0.6"
          );

        ScrollTrigger.create({
          trigger: mask,
          start: "top",
          end: "bottom+=20%",
          scrub: true,
          pin: true,
          animation: timelineHeader,
        });
      } else {
        timelineHeader
          .fromTo(
            mask.querySelector(".upperSection"),
            {
              clipPath: "circle(100% at 50% 51%)",
              duration: 2,
            },
            {
              clipPath: "circle(15.4% at 50% 51%)",
              duration: 2,
              ease: "power1.out",
            }
          )
          .to(
            document.querySelectorAll(
              "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
            ),
            {
              color: mask
                .querySelector(".lowerSection")
                .classList.contains("colorBeige")
                ? "#655B50"
                : "#D5C7A3",
              duration: 1.5,
              ease: "power2.out",
            },
            "-=2"
          )
          .to(
            document.querySelectorAll("#hea_003 .circle .innerCircle"),
            {
              backgroundColor: mask
                .querySelector(".lowerSection")
                .classList.contains("colorBeige")
                ? "#655B50"
                : "#D5C7A3",
              duration: 1.5,
              ease: "power2.out",
            },
            "-=2"
          )
          .to(
            mask.querySelector(".leftSide"),
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.8"
          )
          .to(
            mask.querySelector(".rightSide"),
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.in",
            },
            "-=1"
          )
          .to(
            mask.querySelector(".rightPattern"),
            {
              opacity: 1,
              duration: 0.6,
              ease: "power2.in",
            },
            "-=0.7"
          );

        ScrollTrigger.create({
          trigger: mask,
          start: "top-=10%",
          end: "bottom",
          scrub: true,
          animation: timelineHeader,
        });
        ScrollTrigger.create({
          trigger: mask,
          start: "top",
          end: "bottom-=20%",
          scrub: true,
          pin: true,
        });
      }
    }

    function standardAnimation(mask) {
      const timelineHeader = gsap.timeline();
      if (!isMobile()) {
        timelineHeader
          .fromTo(
            mask.querySelector(".upperSection"),
            {
              clipPath: "circle(90% at 50% 51%)",
              duration: 2,
            },
            {
              clipPath: "circle(15.4% at 50% 51%)",
              duration: 2,
              ease: "power1.out",
            }
          )
          .fromTo(
            document.querySelectorAll(
              "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
            ),
            {
              color: mask
                .querySelector(".lowerSection")
                .classList.contains("colorBeige")
                ? "#D5C7A3"
                : "#655B50",
              duration: 1.5,
              ease: "power2.out",
            },
            {
              color: mask
                .querySelector(".lowerSection")
                .classList.contains("colorBeige")
                ? "#655B50"
                : "#D5C7A3",
              duration: 1.5,
              ease: "power2.out",
            },
            "-=2"
          )
          .fromTo(
            document.querySelectorAll("#hea_003 .circle .innerCircle"),
            {
              backgroundColor: mask
                .querySelector(".lowerSection")
                .classList.contains("colorBeige")
                ? "#D5C7A3"
                : "#655B50",
              duration: 1.5,
              ease: "power2.out",
            },
            {
              backgroundColor: mask
                .querySelector(".lowerSection")
                .classList.contains("colorBeige")
                ? "#655B50"
                : "#D5C7A3",
              duration: 1.5,
              ease: "power2.out",
            },
            "-=2"
          )
          .to(
            mask.querySelector(".leftSide"),
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.8"
          )
          .to(
            mask.querySelector(".rightSide"),
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.in",
            },
            "-=1"
          )
          .to(
            mask.querySelector(".rightPattern"),
            {
              opacity: 1,
              duration: 0.6,
              ease: "power2.in",
            },
            "-=0.7"
          );
        // .to(mask.querySelector(".leftPattern"), {
        //     opacity: 0.5,
        //     duration: 0.6,
        //     ease: "power2.in"
        // }, "-=0.8")

        ScrollTrigger.create({
          trigger: mask,
          start: "top-=10%",
          end: "bottom",
          scrub: true,
          animation: timelineHeader,
        });
        ScrollTrigger.create({
          trigger: mask,
          start: "top",
          end: "bottom-=20%",
          scrub: true,
          pin: true,
        });
      } else {
        timelineHeader
          .fromTo(
            mask.querySelector(".upperSection"),
            {
              clipPath: "circle(60% at 50% 25%)",
              y: 0,
            },
            {
              clipPath: "circle(25% at 50% 32%)",
              duration: 0.3,
            }
          )
          .to(
            mask.querySelector(".leftSide"),
            {
              y: 0,
              duration: 0.3,
              ease: "power2.in",
            },
            "-=0.4"
          )
          .to(
            mask.querySelector(".rightSide"),
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.in",
            },
            "-=0.4"
          )
          .to(
            mask.querySelector(".rightPattern"),
            {
              opacity: 1,
              duration: 0.1,
              ease: "power2.in",
            },
            "-=0.1"
          );

        ScrollTrigger.create({
          trigger: mask,
          start: "top-=30%",
          end: "bottom-=10%",
          scrub: true,
          animation: timelineHeader,
        });
        ScrollTrigger.create({
          trigger: mask,
          start: "top",
          end: "bottom-=40%",
          scrub: true,
          pin: true,
        });
      }
    }
  }
  if (!document.querySelector("#uid1")) {
    document
      .querySelectorAll("header#hea_003 .fixedContainer a")
      .forEach((element) => {
        element.style.color = "#D5C7A3";
      });
    document.querySelector("header#hea_003 .fixedContainer").style.color =
      "#D5C7A3";
    document.querySelector(
      "header#hea_003 #hamburger-toggle .circle .innerCircle"
    ).style.backgroundColor = "#D5C7A3";
  } else {
    document
      .querySelectorAll("header#hea_003 .fixedContainer a")
      .forEach((element) => {
        element.style.color = "#655B50";
      });
    document.querySelector("header#hea_003 .fixedContainer").style.color =
      "#655B50";
    document.querySelector(
      "header#hea_003 #hamburger-toggle .circle .innerCircle"
    ).style.backgroundColor = "#655B50";
  }
}
(function () {
  const DOMloaded = function () {
    doInitColor();
  };

  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function doInitColor() {
  let masks = document.querySelectorAll(".mask_colorelement");
  if (masks.length > 0) {
    masks.forEach((mask) => {
      if (mask.querySelector(".lowerSection.hasText")) {
        mask.style.height =
          mask.querySelector(".lowerSection.hasText").clientHeight + "px";
      }
      if (isMobile()) {
        mask.style.height =
          mask.querySelector(".lowerSection").clientHeight + "px";
      }
      ScrollTrigger.create({
        trigger: mask,
        start: "top",
        onEnter: () => {
          gsap.to(
            document.querySelectorAll(
              "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
            ),
            {
              color: "#655B50",
              duration: 0.2,
              ease: "power2.out",
            }
          );
        },
      });
      if (isMobile()) {
        let lowerSection = mask.querySelector(".lowerSection.hasText");
        if (lowerSection) {
          lowerSection.style.height =
            lowerSection.querySelector(".image").clientHeight +
            320 +
            lowerSection.querySelector(".infos").clientHeight +
            "px";
        }
      }
      const timelineHeader = gsap.timeline();

      timelineHeader
        .fromTo(
          mask.querySelector("svg"),
          {
            scale: 1,
            duration: 2,
          },
          {
            scale: 100,
            duration: 2,
            ease: "power2.in",
          }
        )
        .to(
          mask.querySelector(".upperSection h2"),
          {
            color: "#D5C7A3",
            duration: 1.5,
            ease: "power2.out",
          },
          "-=2"
        )
        .to(
          document.querySelectorAll(
            "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
          ),
          {
            color: "#D5C7A3",
            duration: 1.5,
            ease: "power2.out",
          },
          "-=2"
        )
        .to(
          document.querySelectorAll("#hea_003 .circle .innerCircle"),
          {
            backgroundColor: "#D5C7A3",
            duration: 1.5,
            ease: "power2.out",
          },
          "-=2"
        )
        .fromTo(
          mask.querySelector(".lowerSection"),
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.1,
          }
        )
        .fromTo(
          mask.querySelector(".lowerSection .image"),
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          }
        )
        .fromTo(
          mask.querySelector(".lefttitle"),
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=1"
        )
        .fromTo(
          mask.querySelector(".righttitle"),
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.5"
        )
        .fromTo(
          mask.querySelector(".infos"),
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=1"
        );

      ScrollTrigger.create({
        trigger: mask,
        start: "top",
        end: "bottom+=100%",
        scrub: true,
        pin: true,
        animation: timelineHeader,
      });
    });
  }
  if (!document.querySelector("#uid1")) {
    document
      .querySelectorAll("header#hea_003 .fixedContainer a")
      .forEach((element) => {
        element.style.color = "#D5C7A3";
      });
    document.querySelector("header#hea_003 .fixedContainer").style.color =
      "#D5C7A3";
    document.querySelector(
      "header#hea_003 #hamburger-toggle .circle .innerCircle"
    ).style.backgroundColor = "#D5C7A3";
  } else {
    document
      .querySelectorAll("header#hea_003 .fixedContainer a")
      .forEach((element) => {
        element.style.color = "#655B50";
      });
    document.querySelector("header#hea_003 .fixedContainer").style.color =
      "#655B50";
    document.querySelector(
      "header#hea_003 #hamburger-toggle .circle .innerCircle"
    ).style.backgroundColor = "#655B50";
  }
}
(function () {
  const DOMloaded = function () {
    doInitFullscreenMedia();
  };
  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function doInitFullscreenMedia() {
  let masks = document.querySelectorAll(".mask_fullscreenmedia");
  if (masks.length < 0) {
    return;
  }
  masks.forEach((mask) => {
    if (!isMobile()) {
      ScrollTrigger.create({
        trigger: mask,
        start: "top",
        end: "bottom center",
        scrub: true,
        pin: mask,
        ease: "power1.out",
      });
      ScrollTrigger.create({
        trigger: mask,
        start: "center bottom-=40%",
        end: "bottom+=20%",
        scrub: true,
        animation: gsap.fromTo(
          mask.querySelector("img"),
          {
            clipPath: "circle(25% at 50% 50%)",
          },
          {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.out",
          }
        ),
      });
    } else {
      const timelineHeader = gsap.timeline();

      timelineHeader
        .fromTo(
          mask.querySelector("img"),
          {
            clipPath: "circle(25% at 50% 50%)",
          },
          {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.out",
            duration: 2,
          }
        )
        .to(
          mask.querySelector("img"),
          {
            y: 0,
            duration: 1.6,
            ease: "power2.out",
          },
          "-=2"
        );

      ScrollTrigger.create({
        trigger: mask,
        start: "center bottom",
        end: "bottom+=10%",
        scrub: true,
        animation: timelineHeader,
      });
    }
  });
}
(function () {
  const DOMloaded = function () {
    doInitTextteaser();
  };
  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function doInitTextteaser() {
  let mask = document.querySelector(".mask_textteaser");
  if (!mask) {
    return;
  }
  let svg = mask.querySelector(".svgWrapper");
  if (!isMobile()) {
    svg.style.top =
      mask.querySelector(".text1").offsetTop -
      svg.clientHeight -
      parseInt(6 * rootFontSize) +
      "px";
  }
  ScrollTrigger.create({
    trigger: mask,
    start: "top",
    end: "bottom+=100%",
    scrub: true,
    pin: true,
    animation: gsap.to(mask.querySelector(".secondSection"), {
      y: 0,
    }),
  });
  mask.querySelectorAll(".dot").forEach((dot) => {
    ScrollTrigger.create({
      trigger: dot,
      start: "top+=50%",
      endTrigger: ".mask_textteaser .secondSection",
      end: "bottom",
      scrub: true,
      animation: gsap.to(dot, {
        fill: "#655B50",
      }),
    });
  });
  ScrollTrigger.create({
    trigger: mask.querySelector(".r"),
    start: "top",
    endTrigger: ".mask_textteaser .secondSection",
    end: "top+=10%",
    scrub: true,
    animation: gsap.to(mask.querySelector(".r"), {
      opacity: 0,
    }),
  });
  ScrollTrigger.create({
    trigger: mask.querySelector(".secondSection"),
    start: "top+=45%",
    end: "bottom+=100%",
    scrub: true,
    onEnter: () => {
      gsap.to(
        document.querySelectorAll(
          "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
        ),
        {
          color: "#655B50",
          ease: "power2.out",
        }
      );
      gsap.to(document.querySelectorAll("#hea_003 .circle .innerCircle"), {
        backgroundColor: "#655B50",
        ease: "power2.out",
      });
    },
    onEnterBack: () => {
      gsap.to(
        document.querySelectorAll(
          "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
        ),
        {
          color: "#655B50",
          ease: "power2.out",
        }
      );
      gsap.to(document.querySelectorAll("#hea_003 .circle .innerCircle"), {
        backgroundColor: "#655B50",
        ease: "power2.out",
      });
    },
    onLeave: () => {
      gsap.to(
        document.querySelectorAll(
          "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
        ),
        {
          color: "#D5C7A3",
          ease: "power2.out",
        }
      );
      gsap.to(document.querySelectorAll("#hea_003 .circle .innerCircle"), {
        backgroundColor: "#D5C7A3",
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(
        document.querySelectorAll(
          "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
        ),
        {
          color: "#D5C7A3",
          ease: "power2.out",
        }
      );
      gsap.to(document.querySelectorAll("#hea_003 .circle .innerCircle"), {
        backgroundColor: "#D5C7A3",
        ease: "power2.out",
      });
    },
  });
}
(function () {
  // DOM is ready
  const DOMloaded = function () {
    initSlider();
  };

  document.addEventListener("DOMContentLoaded", DOMloaded);
})();
function initSlider() {
  let isAnimating = false;
  let mask = document.querySelector(".mask_slider");
  if (!mask) {
    return;
  }
  let paginationItems = mask.querySelectorAll(".pag");
  let slides = mask.querySelectorAll(".image");
  let sliderWrapper = mask.querySelector(".sliderWrapper");
  paginationItems[0].classList.add("active");
  slides[0].classList.add("active");
  slides[0].querySelector(".blackOverlay").style.opacity = 0;
  paginationItems.forEach((pag) => {
    pag.addEventListener("click", function () {
      toggleActive(pag);
    });
  });

  function toggleActive(pag) {
    paginationItems.forEach((temppag) => {
      temppag.classList.add("lock");
      temppag.classList.remove("active");
    });
    pag.classList.add("active");
    slides.forEach((slide) => {
      if (slide.getAttribute("data-item") == pag.getAttribute("data-item")) {
        let currentActive = mask.querySelector(".image.active");
        slide.classList.add("tempActive");
        gsap.to(currentActive, {
          clipPath: "circle(0% at 50% 50%)",
          duration: 1.4,
          ease: "power2.out",
          onComplete: () => {
            setTimeout(() => {
              isAnimating = false;
            }, 100);
          },
        });
        gsap.to(slide.querySelector(".blackOverlay"), {
          opacity: 0,
          duration: 3,
          ease: "power2.out",
        });
        setTimeout(() => {
          currentActive.classList.remove("active");
          slide.classList.add("active");
          slide.classList.remove("tempActive");
          currentActive;
          slides.forEach((tempslide) => {
            if (!tempslide.classList.contains("active")) {
              tempslide.style.clipPath = "circle(75% at 50% 50%)";
            }
          });
          paginationItems.forEach((temppag) => {
            temppag.classList.remove("lock");
          });
        }, 1500);
      }
    });
  }
  sliderWrapper.addEventListener("touchstart", handleTouchStart, false);
  sliderWrapper.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        if (!isAnimating) {
          toggleSwipe("right");
        }
      } else {
        if (!isAnimating) {
          toggleSwipe("left");
        }
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  function toggleSwipe(direction) {
    let gallery = mask;
    isAnimating = true;
    let tempActive = gallery.querySelector(".pag.active");

    paginationItems.forEach((temppag) => {
      temppag.classList.add("lock");
      temppag.classList.remove("active");
    });
    let newPag = tempActive;
    if (direction == "right") {
      if (tempActive.nextElementSibling) {
        newPag = tempActive.nextElementSibling;
      } else {
        newPag = paginationItems[0];
      }
    } else {
      if (tempActive.previousElementSibling) {
        newPag = tempActive.previousElementSibling;
      } else {
        newPag = paginationItems[paginationItems.length - 1];
      }
    }
    newPag.classList.add("active");
    slides.forEach((slide) => {
      if (slide.getAttribute("data-item") == newPag.getAttribute("data-item")) {
        let currentActive = gallery.querySelector(".image.active");
        slide.classList.add("tempActive");
        gsap.to(currentActive, {
          clipPath: "circle(0% at 50% 50%)",
          duration: 1.4,
          ease: "power2.out",
          onComplete: () => {
            setTimeout(() => {
              isAnimating = false;
            }, 100);
          },
        });
        gsap.to(slide.querySelector(".blackOverlay"), {
          opacity: 0,
          duration: 3,
          ease: "power2.out",
        });

        setTimeout(() => {
          currentActive.querySelector(".blackOverlay").style.opacity = 1;
          currentActive.classList.remove("active");
          slide.classList.add("active");
          slide.classList.remove("tempActive");
          currentActive;
          slides.forEach((tempslide) => {
            if (!tempslide.classList.contains("active")) {
              tempslide.style.clipPath = "circle(75% at 50% 50%)";
            }
          });
          paginationItems.forEach((temppag) => {
            temppag.classList.remove("lock");
          });
        }, 1500);
      }
    });
  }
}
(function () {
  const DOMloaded = function () {
    doInitText();
  };
  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function doInitText() {
  let masks = document.querySelectorAll(".mask_text");
  if (masks.length < 0) {
    return;
  }
  masks.forEach((mask) => {
    if (!isMobile()) {
      ScrollTrigger.create({
        trigger: mask,
        start: "top-=20% center",
        end: "bottom center",
        scrub: true,

        animation: gsap.fromTo(
          mask,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
          }
        ),
      });
    } else {
      ScrollTrigger.create({
        trigger: mask,
        start: "top-=80% center",
        end: "bottom center",
        scrub: true,

        animation: gsap.fromTo(
          mask,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
          }
        ),
      });
    }
  });
}

(function () {
  let mask;

  // DOM is ready
  const DOMloaded = function () {
    initAdditiveOfferList();
  };

  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function initAdditiveOfferList() {
  var url = "https://api.content.additive-apps.tech/silena-com/offers";
  var timestamps = [];
  if (document.querySelector(".mask_additiveofferlist .offerWrapper")) {
    if (
      !sessionStorage.getItem("offers") ||
      sessionStorage.getItem("apilang") != LANG
    ) {
      var req = new XMLHttpRequest();
      req.responseType = "json";
      req.open("GET", url, true);
      req.setRequestHeader(
        "Accept",
        "application/vnd.additive+json; version=2"
      );
      req.setRequestHeader("Accept-Language", LANG);
      req.onload = function () {
        var jsonResponse = req.response;
        let index = 0;
        jsonResponse.offers.forEach((offer) => {
          let timestampUrl =
            "https://api.content.additive-apps.tech/silena-com/offers/" +
            offer.id +
            "/timespans";
          var req2 = new XMLHttpRequest();
          req2.responseType = "json";
          req2.open("GET", timestampUrl, true);
          req2.setRequestHeader(
            "Accept",
            "application/vnd.additive+json; version=2"
          );
          req2.setRequestHeader("Accept-Language", LANG);
          req2.onload = function () {
            var jsonResponse2 = req2.response;
            timestamps.splice(
              jsonResponse.offers.findIndex((object) => {
                return object.id === jsonResponse2.timespans[0].offerId;
              }),
              0,
              jsonResponse2.timespans[0]
            );
            index++;
          };
          req2.send(null);
        });
        let int = setInterval(() => {
          if (index == jsonResponse.offers.length) {
            clearInterval(int);
            timestamps.sort(function (a, b) {
              // Turn your strings into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return new Date(a.startsAt) - new Date(b.startsAt);
            });
            let newOffer = [];
            jsonResponse.offers.forEach((offer) => {
              newOffer.splice(
                timestamps.find((x) => x.offerId === offer.id),
                0,
                offer
              );
            });
            sessionStorage.setItem("offers", JSON.stringify(newOffer));
            sessionStorage.setItem("offerTimes", JSON.stringify(timestamps));
            sessionStorage.setItem("apilang", LANG);
            initOfferList();
          }
        }, 200);
      };
      req.send(null);
    }

    if (
      sessionStorage.getItem("offers") &&
      sessionStorage.getItem("apilang") == LANG
    ) {
      initOfferList();
    }

    function initOfferList() {
      let offers = JSON.parse(sessionStorage.getItem("offers"));
      let times = JSON.parse(sessionStorage.getItem("offerTimes"));
      let htmlString = ``;
      let index = 0;
      offers.forEach((offer) => {
        // const index = offers.findIndex(tempoffer => {
        //    return tempoffer.id === offer.id;
        //  });
        function padTo2Digits(num) {
          return num.toString().padStart(2, "0");
        }

        function formatDate(date) {
          return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
          ].join(".");
        }
        let detailUrl = window.location.pathname + offer.slug + "/";
        htmlString += `
                  <div class="offer">
                     <div class="upperSection">
                        <div class="image">
                           <picture>
                              <source srcset="${
                                offer.images[0].url
                              }&t=1920x1080" media="(min-width: 1024px)">
                              <source srcset="${
                                offer.images[0].url
                              }&t=687x691" media="(min-width: 0)">
                              <img src="${offer.images[0].url}&t=2000" />
                           </picture>
                        </div>
                     </div>
                     <div class="lowerSection">
                        <div class="rightSide">
                           <div class="textInformaiton">
                              <div class="upper">
                                 <div class="upperinfo">
                                    <div class="time">${formatDate(
                                      new Date(
                                        times.find(
                                          (x) => x.offerId === offer.id
                                        ).startsAt
                                      )
                                    )}&nbsp;-&nbsp;${formatDate(
          new Date(times.find((x) => x.offerId === offer.id).endsAt)
        )}</div>
                                 </div>
                                 <div class="price">
                                 ${
                                   offer.id ==
                                   "0f0b6827-b73f-478c-8026-e36d48f1791a"
                                     ? languageArray["packagePerPerson"]
                                     : languageArray["paketpreis"]
                                 } ${offer.maxAmount.toString().slice(0, -2)} €
                                 </div>
                              </div>
                              <h2>${offer.name}</h2>
                              <a href="${detailUrl}" class="bigLink barba">${
          languageArray["showDetail"]
        }</a>
                           </div>
                        </div>
                     </div>
                  </div>
               `;
        index++;
      });
      document
        .querySelector(".mask_additiveofferlist .offerWrapper")
        .insertAdjacentHTML("beforeend", htmlString);

      let offerWrapper = document.querySelector(
        ".mask_additiveofferlist .offerWrapper"
      );
      let counter = 1;
      offerWrapper.querySelectorAll(".offer").forEach((offer) => {
        if (counter % 2 == 0) {
          offer.querySelector(".lowerSection").classList.add("colorBeige");
        }
        counter++;
      });
      offerWrapper.querySelectorAll(".offer").forEach((offer) => {
        if (isMobile()) {
          offer.style.height =
            offer.querySelector(".lowerSection").clientHeight + "px";
        }
        standardAnimation(offer);
      });

      function standardAnimation(element) {
        const timelineHeader = gsap.timeline();
        if (!isMobile()) {
          timelineHeader
            .fromTo(
              element.querySelector(".upperSection"),
              {
                clipPath: "circle(100% at 50% 51%)",
                duration: 3,
              },
              {
                clipPath: "circle(30% at 50% 50%)",
                duration: 3,
                ease: "power1.out",
              }
            )
            .to(
              document.querySelectorAll(
                "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
              ),
              {
                color: element
                  .querySelector(".lowerSection")
                  .classList.contains("colorBeige")
                  ? "#655B50"
                  : "#D5C7A3",
                duration: 1.5,
                ease: "power2.out",
              },
              "-=2"
            )
            .to(
              element.querySelector(".textInformaiton"),
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=1"
            );

          ScrollTrigger.create({
            trigger: element,
            start: "top",
            end: "bottom+=100%",
            scrub: true,
            pin: true,
            animation: timelineHeader,
          });

          setTimeout(() => {
            document
              .querySelectorAll(".room .upperSection")
              .forEach((section) => {
                ScrollTrigger.create({
                  trigger: section,
                  start: "top center",
                  end: "bottom+=200% center",
                  scrub: true,
                  toggleClass: {
                    targets: section.parentElement,
                    className: "activeSection",
                  },
                  onEnter: () => {
                    if (!section.classList.contains("colorBeige")) {
                      if (document.querySelector(".categoryContainer")) {
                        document
                          .querySelector(".categoryContainer")
                          .classList.remove("changeColor");
                      }
                    } else {
                      if (document.querySelector(".categoryContainer")) {
                        document
                          .querySelector(".categoryContainer")
                          .classList.add("changeColor");
                      }
                    }
                  },
                  onEnterBack: () => {
                    if (!section.classList.contains("colorBeige")) {
                      if (document.querySelector(".categoryContainer")) {
                        document
                          .querySelector(".categoryContainer")
                          .classList.remove("changeColor");
                      }
                    } else {
                      if (document.querySelector(".categoryContainer")) {
                        document
                          .querySelector(".categoryContainer")
                          .classList.add("changeColor");
                      }
                    }
                  },
                });
              });
          }, 100);
        } else {
          timelineHeader
            .fromTo(
              element.querySelector(".upperSection"),
              {
                clipPath: "circle(80% at 50% 51%)",
                duration: 0.3,
              },
              {
                clipPath: "circle(29% at 50% 32%)",
                duration: 0.3,
                ease: "power1.out",
              }
            )
            .to(
              document.querySelectorAll(
                "#hea_003 .fixedContainer, #hea_003 .fixedContainer a"
              ),
              {
                color: element
                  .querySelector(".lowerSection")
                  .classList.contains("colorBeige")
                  ? "#655B50"
                  : "#D5C7A3",
                duration: 0.2,
                ease: "power2.out",
              },
              "-=0.1"
            )
            .to(
              document.querySelectorAll("#hea_003 .circle .innerCircle"),
              {
                backgroundColor: element
                  .querySelector(".lowerSection")
                  .classList.contains("colorBeige")
                  ? "#655B50"
                  : "#D5C7A3",
                duration: 0.2,
                ease: "power2.out",
              },
              "-=0.1"
            )
            // .to(element.querySelector(".textInformaiton"), {
            //    opacity: 1,
            //    y: 0,
            //    duration: 0.8,
            //    ease: "power2.out"
            // }, "-=1")
            .to(
              element.querySelector(".textInformaiton"),
              {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              },
              "-=0.3"
            );

          ScrollTrigger.create({
            trigger: element,
            start: "top",
            end: "bottom+=100%",
            scrub: true,
            pin: true,
            animation: timelineHeader,
          });
        }
      }
    }
  }
}
(function () {
  let mask;

  // DOM is ready
  const DOMloaded = function () {
    initAdditiveOfferDetail();
  };

  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function initAdditiveOfferDetail() {
  var url = "https://api.content.additive-apps.tech/silena-com/offers";
  var timestamps = [];
  if (document.querySelector(".mask_additiveofferdetail")) {
    if (
      !sessionStorage.getItem("offers") ||
      sessionStorage.getItem("apilang") != LANG
    ) {
      var req = new XMLHttpRequest();
      req.responseType = "json";
      req.open("GET", url, true);
      req.setRequestHeader(
        "Accept",
        "application/vnd.additive+json; version=2"
      );
      req.setRequestHeader("Accept-Language", LANG);
      req.onload = function () {
        var jsonResponse = req.response;
        let index = 0;
        jsonResponse.offers.forEach((offer) => {
          let timestampUrl =
            "https://api.content.additive-apps.tech/silena-com/offers/" +
            offer.id +
            "/timespans";
          var req2 = new XMLHttpRequest();
          req2.responseType = "json";
          req2.open("GET", timestampUrl, true);
          req2.setRequestHeader(
            "Accept",
            "application/vnd.additive+json; version=2"
          );
          req2.setRequestHeader("Accept-Language", LANG);
          req2.onload = function () {
            var jsonResponse2 = req2.response;
            timestamps.push(jsonResponse2.timespans[0]);
            index++;
          };
          req2.send(null);
        });
        let int = setInterval(() => {
          if (index == jsonResponse.offers.length) {
            clearInterval(int);
            sessionStorage.setItem("offerTimes", JSON.stringify(timestamps));
            sessionStorage.setItem(
              "offers",
              JSON.stringify(jsonResponse.offers)
            );
            sessionStorage.setItem("apilang", LANG);
            initOfferDetail();
          }
        }, 500);
      };
      req.send(null);
    }
    if (
      sessionStorage.getItem("offers") &&
      sessionStorage.getItem("apilang") == LANG
    ) {
      initOfferDetail();
    }
    function initOfferDetail() {
      let offers = JSON.parse(sessionStorage.getItem("offers"));
      let times = JSON.parse(sessionStorage.getItem("offerTimes"));
      let htmlString = ``;
      let collage = ``;
      let includedServices = ``;
      let slider = ``;
      let priceHtmlString = ``;
      offers.forEach((offer) => {
        if (
          window.location.pathname.split("/")[
            window.location.pathname.split("/").length - 2
          ] == offer.slug
        ) {
          const index = offers.findIndex((tempoffer) => {
            return tempoffer.id === offer.id;
          });
          function padTo2Digits(num) {
            return num.toString().padStart(2, "0");
          }

          function formatDate(date) {
            return [
              padTo2Digits(date.getDate()),
              padTo2Digits(date.getMonth() + 1),
              date.getFullYear(),
            ].join(".");
          }
          htmlString += `
                  <div class="textContent">
                     <h2>${offer.name}</h2>
                     <div class="lowerSection">
                        <div class="leftWrapper">
                           <div class="time">${formatDate(
                             new Date(
                               times.find(
                                 (x) => x.offerId === offer.id
                               ).startsAt
                             )
                           )}&nbsp;-&nbsp;${formatDate(
            new Date(times.find((x) => x.offerId === offer.id).endsAt)
          )}</div>
                           <div class="price">
                              ${
                                offer.id ==
                                "0f0b6827-b73f-478c-8026-e36d48f1791a"
                                  ? languageArray["packagePerPerson"]
                                  : languageArray["paketpreis"]
                              } ${offer.maxAmount.toString().slice(0, -2)} €
                           </div>
                        </div>
                        <div class="buttonWrapper">
                           <a href="${sessionStorage.getItem(
                             "request"
                           )}?offername=${
            offer.code ? offer.code.replace(/ /g, "") : ""
          }" class="bigLink anfrage">${languageArray["offerrequest"]}</a>
                           <a href="${sessionStorage.getItem(
                             "booking"
                           )}?offername=${
            offer.code
          }" class="bigLink booking">${languageArray["offerbooking"]}</a>
                        </div>
                     </div>
                  </div>
                  <div class="image">
                     <picture>
                        <source srcset="${
                          offer.images[0].url
                        }&t=1920x1080" media="(min-width: 1024px)">
                        <source srcset="${
                          offer.images[0].url
                        }&t=1134x638" media="(min-width: 0)">
                        <img src="${offer.images[0].url}&t=1920x1080" />
                     </picture>
                  </div>
                  <div class="additionalInfo">
                     <div class="description">${offer.description}</div>
                  </div>
                  <div class="inclusiveservices">
                     <h2>
                        ${languageArray["includedServices"]}
                     </h2>
                     ${offer.includedServices}
                  </div>
                  <div class="priceWrapper">
                     <div class="priceBadge">
                        <div class="type">${
                          offer.id == "0f0b6827-b73f-478c-8026-e36d48f1791a"
                            ? languageArray["packagePerPerson"]
                            : languageArray["paketpreis"]
                        }</div>
                        <span class="price"> ${offer.maxAmount
                          .toString()
                          .slice(0, -2)} €</span>
                     </div>
                     <div class="buttonContainer">
                        <a href="${sessionStorage.getItem(
                          "request"
                        )}?offername=${offer.code}" class="bigLink anfrage">${
            languageArray["request"]
          }</a>
                        <a href="${sessionStorage.getItem(
                          "booking"
                        )}?offername=${offer.code}" class="bigLink booking">${
            languageArray["booking"]
          }</a>
                     </div>
                  </div>
               `;
          document
            .querySelector(".mask_additiveofferdetail .grid-container")
            .insertAdjacentHTML("beforeend", htmlString);

          if (isMobile()) {
            initMobileCtas();
          }
        }
      });
    }
  }
}
(function () {
  let mask;

  // DOM is ready
  const DOMloaded = function () {
    initAdditiveOfferSlider();
  };

  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function initAdditiveOfferSlider() {
  var url = "https://api.content.additive-apps.tech/silena-com/offers";
  var timestamps = [];
  if (document.querySelector(".mask_additiveofferslider")) {
    if (
      !sessionStorage.getItem("offers") ||
      sessionStorage.getItem("apilang") != LANG
    ) {
      var req = new XMLHttpRequest();
      req.responseType = "json";
      req.open("GET", url, true);
      req.setRequestHeader(
        "Accept",
        "application/vnd.additive+json; version=2"
      );
      req.setRequestHeader("Accept-Language", LANG);
      req.onload = function () {
        var jsonResponse = req.response;
        let index = 0;
        jsonResponse.offers.forEach((offer) => {
          let timestampUrl =
            "https://api.content.additive-apps.tech/silena-com/offers/" +
            offer.id +
            "/timespans";
          var req2 = new XMLHttpRequest();
          req2.responseType = "json";
          req2.open("GET", timestampUrl, true);
          req2.setRequestHeader(
            "Accept",
            "application/vnd.additive+json; version=2"
          );
          req2.setRequestHeader("Accept-Language", LANG);
          req2.onload = function () {
            var jsonResponse2 = req2.response;
            timestamps.splice(
              jsonResponse.offers.findIndex((object) => {
                return object.id === jsonResponse2.timespans[0].offerId;
              }),
              0,
              jsonResponse2.timespans[0]
            );
            index++;
          };
          req2.send(null);
        });
        let int = setInterval(() => {
          if (index == jsonResponse.offers.length) {
            clearInterval(int);
            timestamps.sort(function (a, b) {
              // Turn your strings into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return new Date(a.startsAt) - new Date(b.startsAt);
            });
            let newOffer = [];
            jsonResponse.offers.forEach((offer) => {
              newOffer.splice(
                timestamps.find((x) => x.offerId === offer.id),
                0,
                offer
              );
            });
            sessionStorage.setItem("offers", JSON.stringify(newOffer));
            sessionStorage.setItem("offerTimes", JSON.stringify(timestamps));
            sessionStorage.setItem("apilang", LANG);
            initOfferSlider();
          }
        }, 200);
      };
      req.send(null);
    }

    if (
      sessionStorage.getItem("offers") &&
      sessionStorage.getItem("apilang") == LANG
    ) {
      initOfferSlider();
    }

    function initOfferSlider() {
      let offers = JSON.parse(sessionStorage.getItem("offers"));
      let times = JSON.parse(sessionStorage.getItem("offerTimes"));
      let listpage = sessionStorage.getItem("list");
      let htmlString = ``;
      let index = 0;
      let offercounter = 1;
      offers.forEach((offer) => {
        function padTo2Digits(num) {
          return num.toString().padStart(2, "0");
        }

        function formatDate(date) {
          return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
          ].join(".");
        }
        if (
          !window.location.pathname.includes(
            offer.slug.replaceAll(" ", "-").toLowerCase()
          )
        ) {
          let detailUrl = listpage + offer.slug + "/";
          htmlString += `
                     <div class="offer" data-item="${offercounter}">
                        <div class="upperSection">
                           <div class="image">
                              <picture>
                                 <source srcset="${
                                   offer.images[0].url
                                 }&t=800x800" media="(min-width: 1024px)">
                                 <source srcset="${
                                   offer.images[0].url
                                 }&t=687x691" media="(min-width: 0)">
                                 <img src="${
                                   offer.images[0].url
                                 }&t=800x800" alt="${offer.name}"/>
                              </picture>
                           </div>
                        </div>
                        <div class="lowerSection">
                           <div class="rightSide">
                              <div class="textInformaiton">
                                 <h2>${offer.name}</h2>
                                 <div class="upper">
                                    <div class="upperinfo">
                                       <div class="time">${formatDate(
                                         new Date(
                                           times.find(
                                             (x) => x.offerId === offer.id
                                           ).startsAt
                                         )
                                       )}&nbsp;-&nbsp;${formatDate(
            new Date(times.find((x) => x.offerId === offer.id).endsAt)
          )}</div>
                                    </div>
                                    <div class="price">
                                    ${
                                      offer.id ==
                                      "0f0b6827-b73f-478c-8026-e36d48f1791a"
                                        ? languageArray["packagePerPerson"]
                                        : languageArray["paketpreis"]
                                    } ${offer.maxAmount
            .toString()
            .slice(0, -2)} €
                                    </div>
                                 </div>
                                 <a href="${detailUrl}" class="bigLink barba">${
            languageArray["showDetail"]
          }</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  `;
          offercounter++;
          index++;
        }
      });
      let counter = 1;
      let pagination = ` 
            <div class="pagination">`;
      offers.forEach((offer) => {
        if (
          !window.location.pathname.includes(
            offer.slug.replaceAll(" ", "-").toLowerCase()
          )
        ) {
          pagination += `
               <div class="pag" data-item="${counter}"></div>
               `;
          counter++;
        }
      });
      pagination += ` 
            </div>
         `;
      document
        .querySelector(".mask_additiveofferslider .sliderContainer")
        .insertAdjacentHTML("beforeend", htmlString);
      document
        .querySelector(".mask_additiveofferslider .offerSlider")
        .insertAdjacentHTML("beforeend", pagination);

      shuffleNodeList(
        document.querySelectorAll(".mask_additiveofferslider .offer")
      );

      var imgs = document.querySelectorAll(
        ".mask_additiveofferslider .sliderContainer img"
      );
      var img = imgs[imgs.length - 1];

      function loaded() {
        alert("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
        img.addEventListener("error", function () {
          alert("error");
        });
      }

      function loaded() {
        let isAnimating = false;
        let mask = document.querySelector(".mask_additiveofferslider");
        let paginationItems = mask.querySelectorAll(".pag");
        let slides = mask.querySelectorAll(".offer");

        let height = 0;
        slides.forEach((slide) => {
          if (height < slide.clientHeight) {
            height = slide.clientHeight;
          }
        });
        mask.querySelector(".sliderContainer").style.height = height + "px";
        paginationItems[0].classList.add("active");
        slides[0].classList.add("active");
        let temp = gsap.timeline();
        let sldierContainer = mask.querySelector(".sliderContainer");
        temp
          .to(slides[0].querySelector("img"), {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          })
          .to(
            slides[0].querySelector("img"),
            {
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.6"
          )
          .to(
            slides[0].querySelector(".lowerSection"),
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              onComplete: () => {
                isAnimating = false;
              },
            },
            "-=0.6"
          );
        paginationItems.forEach((pag) => {
          pag.addEventListener("click", function () {
            toggleActive(pag);
          });
        });

        function toggleActive(pag) {
          isAnimating = true;
          paginationItems.forEach((temppag) => {
            temppag.classList.add("lock");
            temppag.classList.remove("active");
          });
          pag.classList.add("active");
          slides.forEach((slide) => {
            if (
              slide.getAttribute("data-item") == pag.getAttribute("data-item")
            ) {
              let currentActive = mask.querySelector(".offer.active");
              slide.classList.add("tempActive");
              let timeline = gsap.timeline();
              timeline
                .to(currentActive.querySelector(".image img"), {
                  scale: 0,
                  duration: 0.6,
                  ease: "power2.out",
                })
                .to(
                  currentActive.querySelector(".image img"),
                  {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.out",
                  },
                  "-=0.4"
                )
                .to(
                  currentActive.querySelector(".lowerSection"),
                  {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                  },
                  "-=0.6"
                );

              setTimeout(() => {
                currentActive.classList.remove("active");
                slide.classList.add("active");
                slide.classList.remove("tempActive");
                let secondTimeline = gsap.timeline();
                secondTimeline
                  .to(document.querySelector(".offer.active img"), {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                  })
                  .to(
                    document.querySelector(".offer.active img"),
                    {
                      scale: 1,
                      duration: 0.8,
                      ease: "power2.out",
                    },
                    "-=0.6"
                  )
                  .to(
                    document.querySelector(".offer.active .lowerSection"),
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 0.8,
                      ease: "power2.out",
                      onComplete: () => {
                        isAnimating = false;
                      },
                    },
                    "-=0.6"
                  );

                slides.forEach((tempslide) => {
                  if (!tempslide.classList.contains("active")) {
                    tempslide.style.clipPath = "circle(75% at 50% 50%)";
                  }
                });
                paginationItems.forEach((temppag) => {
                  temppag.classList.remove("lock");
                });
              }, 1000);
            }
          });
        }

        sldierContainer.addEventListener("touchstart", handleTouchStart, false);
        sldierContainer.addEventListener("touchmove", handleTouchMove, false);

        var xDown = null;
        var yDown = null;

        function getTouches(evt) {
          return (
            evt.touches || // browser API
            evt.originalEvent.touches
          ); // jQuery
        }

        function handleTouchStart(evt) {
          const firstTouch = getTouches(evt)[0];
          xDown = firstTouch.clientX;
          yDown = firstTouch.clientY;
        }

        function handleTouchMove(evt) {
          if (!xDown || !yDown) {
            return;
          }

          var xUp = evt.touches[0].clientX;
          var yUp = evt.touches[0].clientY;

          var xDiff = xDown - xUp;
          var yDiff = yDown - yUp;

          if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
              if (!isAnimating) {
                toggleSwipe("right", paginationItems, slides, mask);
              }
            } else {
              if (!isAnimating) {
                toggleSwipe("left", paginationItems, slides, mask);
              }
            }
          }
          /* reset values */
          xDown = null;
          yDown = null;
        }
      }

      function toggleSwipe(direction, paginationItems, slides, mask) {
        isAnimating = true;
        let tempActive = mask.querySelector(".pag.active");

        paginationItems.forEach((temppag) => {
          temppag.classList.add("lock");
          temppag.classList.remove("active");
        });
        let newPag = tempActive;
        if (direction == "right") {
          if (tempActive.nextElementSibling) {
            newPag = tempActive.nextElementSibling;
          } else {
            newPag = paginationItems[0];
          }
        } else {
          if (tempActive.previousElementSibling) {
            newPag = tempActive.previousElementSibling;
          } else {
            newPag = paginationItems[paginationItems.length - 1];
          }
        }
        newPag.classList.add("active");
        slides.forEach((slide) => {
          if (
            slide.getAttribute("data-item") == newPag.getAttribute("data-item")
          ) {
            let currentActive = mask.querySelector(".offer.active");
            slide.classList.add("tempActive");
            let timeline = gsap.timeline();
            timeline
              .to(currentActive.querySelector(".image img"), {
                scale: 0,
                duration: 0.6,
                ease: "power2.out",
              })
              .to(
                currentActive.querySelector(".image img"),
                {
                  opacity: 0,
                  duration: 0.4,
                  ease: "power2.out",
                },
                "-=0.4"
              )
              .to(
                currentActive.querySelector(".lowerSection"),
                {
                  scale: 0.9,
                  opacity: 0,
                  duration: 0.8,
                  ease: "power2.out",
                },
                "-=0.6"
              );

            setTimeout(() => {
              currentActive.classList.remove("active");
              slide.classList.add("active");
              slide.classList.remove("tempActive");
              let secondTimeline = gsap.timeline();
              secondTimeline
                .to(document.querySelector(".offer.active img"), {
                  opacity: 1,
                  duration: 0.8,
                  ease: "power2.out",
                })
                .to(
                  document.querySelector(".offer.active img"),
                  {
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out",
                  },
                  "-=0.6"
                )
                .to(
                  document.querySelector(".offer.active .lowerSection"),
                  {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    onComplete: () => {
                      isAnimating = false;
                    },
                  },
                  "-=0.6"
                );

              slides.forEach((tempslide) => {
                if (!tempslide.classList.contains("active")) {
                  tempslide.style.clipPath = "circle(75% at 50% 50%)";
                }
              });
              paginationItems.forEach((temppag) => {
                temppag.classList.remove("lock");
              });
            }, 1000);
          }
        });
      }
    }

    function shuffleNodeList(elementsArray) {
      elementsArray = turnObjToArray(elementsArray);
      elementsArray = shuffleArray(elementsArray);
      elementsArray.forEach(function (element) {
        const parent = element.parentNode;
        parent.appendChild(element);
      });

      function turnObjToArray(obj) {
        return [].map.call(obj, function (element) {
          return element;
        });
      }

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      return elementsArray;
    }
  }
}
(function () {
  let mask;

  // DOM is ready
  const DOMloaded = function () {
    initAdditiveTreatments();
  };

  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function initAdditiveTreatments() {
  var url =
    "https://api.content.additive-apps.tech/silena-com/treatments?per_page=100";
  var urlCat =
    "https://api.content.additive-apps.tech/silena-com/categories?categorizable_type=treatment";
  var timestamps = [];
  if (document.querySelector(".mask_additivetreatments")) {
    if (
      !sessionStorage.getItem("treatments") ||
      sessionStorage.getItem("apilang") != LANG
    ) {
      var req = new XMLHttpRequest();
      req.responseType = "json";
      req.open("GET", url, true);
      req.setRequestHeader(
        "Accept",
        "application/vnd.additive+json; version=2"
      );
      req.setRequestHeader("Accept-Language", LANG);
      req.onload = function () {
        var jsonResponse = req.response;
        sessionStorage.setItem(
          "treatments",
          JSON.stringify(jsonResponse.treatments)
        );
        sessionStorage.setItem("apilang", LANG);
        var req2 = new XMLHttpRequest();
        req2.responseType = "json";
        req2.open("GET", urlCat, true);
        req2.setRequestHeader(
          "Accept",
          "application/vnd.additive+json; version=2"
        );
        req2.setRequestHeader("Accept-Language", LANG);
        req2.onload = function () {
          var jsonResponse2 = req2.response;
          sessionStorage.setItem(
            "cattreatments",
            JSON.stringify(jsonResponse2.categories)
          );
          initTreatments();
        };
        req2.send(null);
      };
      req.send(null);
    }

    if (
      sessionStorage.getItem("treatments") &&
      sessionStorage.getItem("apilang") == LANG
    ) {
      initTreatments();
    }

    function initTreatments() {
      let mask = document.querySelector(".mask_additivetreatments");
      let treatments = JSON.parse(sessionStorage.getItem("treatments"));
      let cattreatments = JSON.parse(sessionStorage.getItem("cattreatments"));

      function compareTreatments(a, b) {
        if (a.categoryIds[0] < b.categoryIds[0]) {
          return -1;
        }
        if (a.categoryIds[0] > b.categoryIds[0]) {
          return 1;
        }
        return 0;
      }

      function compareCatTreatments(a, b) {
        if (a.position < b.position) {
          return -1;
        }
        if (a.position > b.position) {
          return 1;
        }
        return 0;
      }

      let sortetTreatments = treatments.sort(compareTreatments);
      let sortetCatTreatments = cattreatments.sort(compareCatTreatments);

      // let times = JSON.parse(sessionStorage.getItem("offerTimes"))
      let htmlString = `
         `;
      var arr = {};

      [].forEach.call(sortetTreatments, function (inst) {
        var x = inst.categoryIds[0];

        // Check if arr already has an index x, if yes then push
        if (arr.hasOwnProperty(x)) arr[x].push(inst);
        // Or else create a new one with inst as the first element.
        else arr[x] = [inst];
      });

      orderArray = [];
      sortetCatTreatments.forEach((cat) => {
        orderArray.push(cat.id);
      });
      sortetArray = Object.entries(arr).sort(
        (a, b) => orderArray.indexOf(a[0]) - orderArray.indexOf(b[0])
      );
      let counter = 0;
      sortetArray.forEach((section) => {
        htmlString += `
            <div class="treatmentSection" data-id="${section[0]}">`;
        if (sortetCatTreatments[counter].image) {
          htmlString += `
                  <div class="image">
                     <picture>
                        <source srcset="${sortetCatTreatments[counter].image.url}&t=800x800" media="(min-width: 1024px)">
                        <source srcset="${sortetCatTreatments[counter].image.url}&t=687x687" media="(min-width: 0)">
                        <img src="${sortetCatTreatments[counter].image.url}&t=800x800" />
                     </picture>
                  </div>`;
        }
        section[1].forEach((treatment) => {
          htmlString += `<div class="accordion">
                  <div class="accordionTitle">
                     <div class="title">
                        ${treatment.name}
                     </div>
                  </div>
                  <div class="accordionContent">
                     <div class="heightGiver">
                        <div class="upper">
                           <span>${treatment.duration} min</span>
                           <span class="spacer"></span>
                           <span>${treatment.amount
                             .toString()
                             .slice(0, -2)} €</span>
                        </div>
                        <div class="description">
                           ${treatment.description}
                        </div>
                     </div>
                  </div>
               </div>`;
        });

        htmlString += `</div>`;
        counter++;
      });

      let catString = ``;
      sortetCatTreatments.forEach((cat) => {
        catString += `
               <div class="category" data-id="${cat.id}">
                  ${cat.name}
               </div>
            `;
      });

      document
        .querySelector(".mask_additivetreatments .treatmentWrapper")
        .insertAdjacentHTML("beforeend", htmlString);
      document
        .querySelector(".mask_additivetreatments .categoryWrapper")
        .insertAdjacentHTML("beforeend", catString);

      if (isMobile()) {
        initMobileCtas();
      }

      var imgs = mask.querySelectorAll("img");
      var img = imgs[imgs.length - 1];

      function loaded() {
        alert("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
        img.addEventListener("error", function () {
          alert("error");
        });
      }

      function loaded() {
        let categorys;
        if (isMobile()) {
          categorys = document.querySelectorAll(
            ".mobileFilterWrapper .category"
          );
        } else {
          categorys = mask.querySelectorAll(".category");
        }
        categorys[0].classList.add("active");

        ScrollTrigger.create({
          trigger: ".mask_additivetreatments",
          start: "top top+=20%",
          end: "bottom bottom",
          scrub: true,
          pin: ".categoryWrapper",
        });

        if (isMobile()) {
          ScrollTrigger.create({
            trigger: mask,
            start: "top",
            end: "bottom bottom",
            scrub: true,
            onEnter: () => {
              document.querySelector(".mobileFilterWrapper").style.opacity =
                "1";
            },
            onEnterBack: () => {
              document.querySelector(".mobileFilterWrapper").style.opacity =
                "1";
            },
            onLeave: () => {
              document.querySelector(".mobileFilterWrapper").style.opacity =
                "0";
            },
            onLeaveBack: () => {
              document.querySelector(".mobileFilterWrapper").style.opacity =
                "0";
            },
          });
        }

        let treatmentSections = mask.querySelectorAll(".treatmentSection");
        treatmentSections.forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top top+=200",
            scrub: true,
            onEnter: () => {
              changeCategory(section);
            },
            onEnterBack: () => {
              changeCategory(section);
            },
          });
        });

        categorys.forEach((cat) => {
          cat.addEventListener("click", function () {
            scrollToSection(cat);
          });
        });

        let accordions = mask.querySelectorAll(".accordion");

        accordions.forEach((accordion) => {
          accordion.addEventListener("click", () => {
            toggleAccordion(accordion);
          });
        });

        function changeCategory(section) {
          categorys.forEach((temp) => {
            if (
              temp.getAttribute("data-id") == section.getAttribute("data-id")
            ) {
              temp.classList.add("active");
            } else {
              temp.classList.remove("active");
            }
          });
        }

        function scrollToSection(cat) {
          treatmentSections.forEach((temp) => {
            if (temp.getAttribute("data-id") == cat.getAttribute("data-id")) {
              scroll.scrollTo(temp, true);
            }
          });
        }

        function toggleAccordion(accordion) {
          if (accordion.classList.contains("openAcc")) {
            mask.querySelector(".openAcc .accordionContent").style.height =
              "0px";
            mask.querySelector(".openAcc").classList.remove("openAcc");
          } else {
            if (mask.querySelector(".openAcc")) {
              mask.querySelector(".openAcc .accordionContent").style.height =
                "0px";
              mask.querySelector(".openAcc").classList.remove("openAcc");
            }
            accordion.querySelector(".accordionContent").style.height =
              accordion.querySelector(".heightGiver").clientHeight + "px";
            accordion.classList.add("openAcc");
          }
        }
      }
    }
  }
}
/*!
 *
 *     Litepicker v1.5.7 (https://github.com/wakirin/Litepicker)
 *     Package: litepicker (https://www.npmjs.com/package/litepicker)
 *     License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 *     Copyright 2019-2020 Rinat G.
 *
 *     Hash: 6c5abdc252d9f485c1dc
 *     Generated on: 1592979309772
 *
 */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("Litepicker", [], e)
    : "object" == typeof exports
    ? (exports.Litepicker = e())
    : (t.Litepicker = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function i(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (i.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            i.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = 4))
    );
  })([
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = (function () {
        function t(e, i, n) {
          void 0 === e && (e = null),
            void 0 === i && (i = null),
            void 0 === n && (n = "en-US"),
            (this.dateInstance = i
              ? t.parseDateTime(e, i, n)
              : e
              ? t.parseDateTime(e)
              : t.parseDateTime(new Date())),
            (this.lang = n);
        }
        return (
          (t.parseDateTime = function (e, i, n) {
            if (
              (void 0 === i && (i = "YYYY-MM-DD"),
              void 0 === n && (n = "en-US"),
              !e)
            )
              return new Date(NaN);
            if (e instanceof Date) return new Date(e);
            if (e instanceof t) return e.clone().getDateInstance();
            if (/^-?\d{10,}$/.test(e))
              return t.getDateZeroTime(new Date(Number(e)));
            if ("string" == typeof e) {
              for (var o = [], s = null; null != (s = t.regex.exec(i)); )
                "\\" !== s[1] && o.push(s);
              if (o.length) {
                var a = {
                  year: null,
                  month: null,
                  shortMonth: null,
                  longMonth: null,
                  day: null,
                  value: "",
                };
                o[0].index > 0 && (a.value += ".*?");
                for (var r = 0, l = Object.entries(o); r < l.length; r++) {
                  var h = l[r],
                    p = h[0],
                    d = h[1],
                    c = Number(p),
                    u = t.formatPatterns(d[0], n),
                    m = u.group,
                    g = u.pattern;
                  (a[m] = c + 1), (a.value += g), (a.value += ".*?");
                }
                var f = new RegExp("^" + a.value + "$");
                if (f.test(e)) {
                  var y = f.exec(e),
                    D = Number(y[a.year]),
                    k = null;
                  a.month
                    ? (k = Number(y[a.month]) - 1)
                    : a.shortMonth
                    ? (k = t.shortMonths(n).indexOf(y[a.shortMonth]))
                    : a.longMonth &&
                      (k = t.longMonths(n).indexOf(y[a.longMonth]));
                  var v = Number(y[a.day]) || 1;
                  return new Date(D, k, v, 0, 0, 0, 0);
                }
              }
            }
            return t.getDateZeroTime(new Date(e));
          }),
          (t.convertArray = function (e, i) {
            return e.map(function (e) {
              return e instanceof Array
                ? e.map(function (e) {
                    return new t(e, i);
                  })
                : new t(e, i);
            });
          }),
          (t.getDateZeroTime = function (t) {
            return new Date(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              0,
              0,
              0,
              0
            );
          }),
          (t.shortMonths = function (e) {
            return t.MONTH_JS.map(function (t) {
              return new Date(2019, t).toLocaleString(e, { month: "short" });
            });
          }),
          (t.longMonths = function (e) {
            return t.MONTH_JS.map(function (t) {
              return new Date(2019, t).toLocaleString(e, { month: "long" });
            });
          }),
          (t.formatPatterns = function (e, i) {
            switch (e) {
              case "YY":
              case "YYYY":
                return { group: "year", pattern: "(\\d{" + e.length + "})" };
              case "M":
                return { group: "month", pattern: "(\\d{1,2})" };
              case "MM":
                return { group: "month", pattern: "(\\d{2})" };
              case "MMM":
                return {
                  group: "shortMonth",
                  pattern: "(" + t.shortMonths(i).join("|") + ")",
                };
              case "MMMM":
                return {
                  group: "longMonth",
                  pattern: "(" + t.longMonths(i).join("|") + ")",
                };
              case "D":
                return { group: "day", pattern: "(\\d{1,2})" };
              case "DD":
                return { group: "day", pattern: "(\\d{2})" };
            }
          }),
          (t.prototype.getDateInstance = function () {
            return this.dateInstance;
          }),
          (t.prototype.toLocaleString = function (t, e) {
            return this.dateInstance.toLocaleString(t, e);
          }),
          (t.prototype.toDateString = function () {
            return this.dateInstance.toDateString();
          }),
          (t.prototype.getSeconds = function () {
            return this.dateInstance.getSeconds();
          }),
          (t.prototype.getDay = function () {
            return this.dateInstance.getDay();
          }),
          (t.prototype.getTime = function () {
            return this.dateInstance.getTime();
          }),
          (t.prototype.getDate = function () {
            return this.dateInstance.getDate();
          }),
          (t.prototype.getMonth = function () {
            return this.dateInstance.getMonth();
          }),
          (t.prototype.getFullYear = function () {
            return this.dateInstance.getFullYear();
          }),
          (t.prototype.setMonth = function (t) {
            return this.dateInstance.setMonth(t);
          }),
          (t.prototype.setHours = function (t, e, i, n) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === i && (i = 0),
              void 0 === n && (n = 0),
              this.dateInstance.setHours(t, e, i, n);
          }),
          (t.prototype.setSeconds = function (t) {
            return this.dateInstance.setSeconds(t);
          }),
          (t.prototype.setDate = function (t) {
            return this.dateInstance.setDate(t);
          }),
          (t.prototype.setFullYear = function (t) {
            return this.dateInstance.setFullYear(t);
          }),
          (t.prototype.getWeek = function (t) {
            var e = new Date(this.timestamp()),
              i = (this.getDay() + (7 - t)) % 7;
            e.setDate(e.getDate() - i);
            var n = e.getTime();
            return (
              e.setMonth(0, 1),
              e.getDay() !== t && e.setMonth(0, 1 + ((4 - e.getDay() + 7) % 7)),
              1 + Math.ceil((n - e.getTime()) / 6048e5)
            );
          }),
          (t.prototype.clone = function () {
            return new t(this.getDateInstance());
          }),
          (t.prototype.isBetween = function (t, e, i) {
            switch ((void 0 === i && (i = "()"), i)) {
              default:
              case "()":
                return (
                  this.timestamp() > t.getTime() &&
                  this.timestamp() < e.getTime()
                );
              case "[)":
                return (
                  this.timestamp() >= t.getTime() &&
                  this.timestamp() < e.getTime()
                );
              case "(]":
                return (
                  this.timestamp() > t.getTime() &&
                  this.timestamp() <= e.getTime()
                );
              case "[]":
                return (
                  this.timestamp() >= t.getTime() &&
                  this.timestamp() <= e.getTime()
                );
            }
          }),
          (t.prototype.isBefore = function (t, e) {
            switch ((void 0 === e && (e = "seconds"), e)) {
              case "second":
              case "seconds":
                return t.getTime() > this.getTime();
              case "day":
              case "days":
                return (
                  new Date(
                    t.getFullYear(),
                    t.getMonth(),
                    t.getDate()
                  ).getTime() >
                  new Date(
                    this.getFullYear(),
                    this.getMonth(),
                    this.getDate()
                  ).getTime()
                );
              case "month":
              case "months":
                return (
                  new Date(t.getFullYear(), t.getMonth(), 1).getTime() >
                  new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                );
              case "year":
              case "years":
                return t.getFullYear() > this.getFullYear();
            }
            throw new Error("isBefore: Invalid unit!");
          }),
          (t.prototype.isSameOrBefore = function (t, e) {
            switch ((void 0 === e && (e = "seconds"), e)) {
              case "second":
              case "seconds":
                return t.getTime() >= this.getTime();
              case "day":
              case "days":
                return (
                  new Date(
                    t.getFullYear(),
                    t.getMonth(),
                    t.getDate()
                  ).getTime() >=
                  new Date(
                    this.getFullYear(),
                    this.getMonth(),
                    this.getDate()
                  ).getTime()
                );
              case "month":
              case "months":
                return (
                  new Date(t.getFullYear(), t.getMonth(), 1).getTime() >=
                  new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                );
            }
            throw new Error("isSameOrBefore: Invalid unit!");
          }),
          (t.prototype.isAfter = function (t, e) {
            switch ((void 0 === e && (e = "seconds"), e)) {
              case "second":
              case "seconds":
                return this.getTime() > t.getTime();
              case "day":
              case "days":
                return (
                  new Date(
                    this.getFullYear(),
                    this.getMonth(),
                    this.getDate()
                  ).getTime() >
                  new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
                );
              case "month":
              case "months":
                return (
                  new Date(this.getFullYear(), this.getMonth(), 1).getTime() >
                  new Date(t.getFullYear(), t.getMonth(), 1).getTime()
                );
              case "year":
              case "years":
                return this.getFullYear() > t.getFullYear();
            }
            throw new Error("isAfter: Invalid unit!");
          }),
          (t.prototype.isSameOrAfter = function (t, e) {
            switch ((void 0 === e && (e = "seconds"), e)) {
              case "second":
              case "seconds":
                return this.getTime() >= t.getTime();
              case "day":
              case "days":
                return (
                  new Date(
                    this.getFullYear(),
                    this.getMonth(),
                    this.getDate()
                  ).getTime() >=
                  new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
                );
              case "month":
              case "months":
                return (
                  new Date(this.getFullYear(), this.getMonth(), 1).getTime() >=
                  new Date(t.getFullYear(), t.getMonth(), 1).getTime()
                );
            }
            throw new Error("isSameOrAfter: Invalid unit!");
          }),
          (t.prototype.isSame = function (t, e) {
            switch ((void 0 === e && (e = "seconds"), e)) {
              case "second":
              case "seconds":
                return this.getTime() === t.getTime();
              case "day":
              case "days":
                return (
                  new Date(
                    this.getFullYear(),
                    this.getMonth(),
                    this.getDate()
                  ).getTime() ===
                  new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
                );
              case "month":
              case "months":
                return (
                  new Date(this.getFullYear(), this.getMonth(), 1).getTime() ===
                  new Date(t.getFullYear(), t.getMonth(), 1).getTime()
                );
            }
            throw new Error("isSame: Invalid unit!");
          }),
          (t.prototype.add = function (t, e) {
            switch ((void 0 === e && (e = "seconds"), e)) {
              case "second":
              case "seconds":
                this.setSeconds(this.getSeconds() + t);
                break;
              case "day":
              case "days":
                this.setDate(this.getDate() + t);
                break;
              case "month":
              case "months":
                this.setMonth(this.getMonth() + t);
            }
            return this;
          }),
          (t.prototype.subtract = function (t, e) {
            switch ((void 0 === e && (e = "seconds"), e)) {
              case "second":
              case "seconds":
                this.setSeconds(this.getSeconds() - t);
                break;
              case "day":
              case "days":
                this.setDate(this.getDate() - t);
                break;
              case "month":
              case "months":
                this.setMonth(this.getMonth() - t);
            }
            return this;
          }),
          (t.prototype.diff = function (t, e) {
            void 0 === e && (e = "seconds");
            switch (e) {
              default:
              case "second":
              case "seconds":
                return this.getTime() - t.getTime();
              case "day":
              case "days":
                return Math.round((this.timestamp() - t.getTime()) / 864e5);
              case "month":
              case "months":
            }
          }),
          (t.prototype.format = function (e, i) {
            void 0 === i && (i = "en-US");
            for (var n = "", o = [], s = null; null != (s = t.regex.exec(e)); )
              "\\" !== s[1] && o.push(s);
            if (o.length) {
              o[0].index > 0 && (n += e.substring(0, o[0].index));
              for (var a = 0, r = Object.entries(o); a < r.length; a++) {
                var l = r[a],
                  h = l[0],
                  p = l[1],
                  d = Number(h);
                (n += this.formatTokens(p[0], i)),
                  o[d + 1] &&
                    (n += e.substring(p.index + p[0].length, o[d + 1].index)),
                  d === o.length - 1 &&
                    (n += e.substring(p.index + p[0].length));
              }
            }
            return n.replace(/\\/g, "");
          }),
          (t.prototype.timestamp = function () {
            return new Date(
              this.getFullYear(),
              this.getMonth(),
              this.getDate(),
              0,
              0,
              0,
              0
            ).getTime();
          }),
          (t.prototype.formatTokens = function (e, i) {
            switch (e) {
              case "YY":
                return String(this.getFullYear()).slice(-2);
              case "YYYY":
                return String(this.getFullYear());
              case "M":
                return String(this.getMonth() + 1);
              case "MM":
                return ("0" + (this.getMonth() + 1)).slice(-2);
              case "MMM":
                return t.shortMonths(i)[this.getMonth()];
              case "MMMM":
                return t.longMonths(i)[this.getMonth()];
              case "D":
                return String(this.getDate());
              case "DD":
                return ("0" + this.getDate()).slice(-2);
              default:
                return "";
            }
          }),
          (t.regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|d{1,4})/g),
          (t.MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
          t
        );
      })();
      e.DateTime = n;
    },
    function (t, e, i) {
      t.exports = {
        showWeekNumbers: "show-week-numbers",
        litepicker: "litepicker",
        containerMain: "container__main",
        containerMonths: "container__months",
        columns2: "columns-2",
        columns3: "columns-3",
        columns4: "columns-4",
        splitView: "split-view",
        monthItemHeader: "month-item-header",
        buttonPreviousMonth: "button-previous-month",
        buttonNextMonth: "button-next-month",
        monthItem: "month-item",
        monthItemName: "month-item-name",
        monthItemYear: "month-item-year",
        resetButton: "reset-button",
        monthItemWeekdaysRow: "month-item-weekdays-row",
        noPreviousMonth: "no-previous-month",
        noNextMonth: "no-next-month",
        containerDays: "container__days",
        dayItem: "day-item",
        isToday: "is-today",
        isLocked: "is-locked",
        isBooked: "is-booked",
        isInRange: "is-in-range",
        isStartDate: "is-start-date",
        isFlipped: "is-flipped",
        isEndDate: "is-end-date",
        isHighlighted: "is-highlighted",
        weekNumber: "week-number",
        containerFooter: "container__footer",
        previewDateRange: "preview-date-range",
        buttonCancel: "button-cancel",
        buttonApply: "button-apply",
        containerTooltip: "container__tooltip",
        litepickerOpen: "litepicker-open",
        litepickerBackdrop: "litepicker-backdrop",
      };
    },
    function (t, e, i) {
      "use strict";
      function n() {
        return window.matchMedia("(orientation: portrait)").matches
          ? "portrait"
          : "landscape";
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isMobile = function () {
          var t = "portrait" === n();
          return window.matchMedia(
            "(max-device-" + (t ? "width" : "height") + ": 480px)"
          ).matches;
        }),
        (e.getOrientation = n),
        (e.findNestedMonthItem = function (t) {
          for (var e = t.parentNode.childNodes, i = 0; i < e.length; i += 1) {
            if (e.item(i) === t) return i;
          }
          return 0;
        });
    },
    function (t, e, i) {
      "use strict";
      var n,
        o =
          (this && this.__extends) ||
          ((n = function (t, e) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
              })(t, e);
          }),
          function (t, e) {
            function i() {
              this.constructor = t;
            }
            n(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((i.prototype = e.prototype), new i()));
          }),
        s =
          (this && this.__assign) ||
          function () {
            return (s =
              Object.assign ||
              function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                  for (var o in (e = arguments[i]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          },
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t)
                Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return (e.default = t), e;
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = i(5),
        l = i(0),
        h = a(i(1)),
        p = i(2),
        d = (function (t) {
          function e(e) {
            var i = t.call(this) || this;
            (i.options = s(s({}, i.options), e.element.dataset)),
              Object.keys(i.options).forEach(function (t) {
                ("true" !== i.options[t] && "false" !== i.options[t]) ||
                  (i.options[t] = "true" === i.options[t]);
              });
            var n = s(s({}, i.options.dropdowns), e.dropdowns),
              o = s(s({}, i.options.buttonText), e.buttonText),
              a = s(s({}, i.options.tooltipText), e.tooltipText);
            (i.options = s(s({}, i.options), e)),
              (i.options.dropdowns = s({}, n)),
              (i.options.buttonText = s({}, o)),
              (i.options.tooltipText = s({}, a)),
              i.options.elementEnd || (i.options.allowRepick = !1),
              i.options.lockDays.length &&
                (i.options.lockDays = l.DateTime.convertArray(
                  i.options.lockDays,
                  i.options.lockDaysFormat
                )),
              i.options.bookedDays.length &&
                (i.options.bookedDays = l.DateTime.convertArray(
                  i.options.bookedDays,
                  i.options.bookedDaysFormat
                )),
              i.options.highlightedDays.length &&
                (i.options.highlightedDays = l.DateTime.convertArray(
                  i.options.highlightedDays,
                  i.options.highlightedDaysFormat
                )),
              !i.options.hotelMode ||
                "bookedDaysInclusivity" in e ||
                (i.options.bookedDaysInclusivity = "[)"),
              !i.options.hotelMode ||
                "disallowBookedDaysInRange" in e ||
                (i.options.disallowBookedDaysInRange = !0),
              !i.options.hotelMode ||
                "selectForward" in e ||
                (i.options.selectForward = !0);
            var r = i.parseInput(),
              h = r[0],
              p = r[1];
            i.options.startDate &&
              (i.options.singleMode || i.options.endDate) &&
              (h = new l.DateTime(
                i.options.startDate,
                i.options.format,
                i.options.lang
              )),
              h &&
                i.options.endDate &&
                (p = new l.DateTime(
                  i.options.endDate,
                  i.options.format,
                  i.options.lang
                )),
              h instanceof l.DateTime &&
                !isNaN(h.getTime()) &&
                (i.options.startDate = h),
              i.options.startDate &&
                p instanceof l.DateTime &&
                !isNaN(p.getTime()) &&
                (i.options.endDate = p),
              !i.options.singleMode ||
                i.options.startDate instanceof l.DateTime ||
                (i.options.startDate = null),
              i.options.singleMode ||
                (i.options.startDate instanceof l.DateTime &&
                  i.options.endDate instanceof l.DateTime) ||
                ((i.options.startDate = null), (i.options.endDate = null));
            for (var d = 0; d < i.options.numberOfMonths; d += 1) {
              var c =
                i.options.startDate instanceof l.DateTime
                  ? i.options.startDate.clone()
                  : new l.DateTime();
              c.setDate(1), c.setMonth(c.getMonth() + d), (i.calendars[d] = c);
            }
            if (i.options.showTooltip)
              if (i.options.tooltipPluralSelector)
                i.pluralSelector = i.options.tooltipPluralSelector;
              else
                try {
                  var u = new Intl.PluralRules(i.options.lang);
                  i.pluralSelector = u.select.bind(u);
                } catch (t) {
                  i.pluralSelector = function (t) {
                    return 0 === Math.abs(t) ? "one" : "other";
                  };
                }
            return i.loadPolyfillsForIE11(), i.onInit(), i;
          }
          return (
            o(e, t),
            (e.prototype.onInit = function () {
              var t = this;
              if (
                (document.addEventListener(
                  "click",
                  function (e) {
                    return t.onClick(e);
                  },
                  !0
                ),
                (this.picker = document.createElement("div")),
                (this.picker.className = h.litepicker),
                (this.picker.style.display = "none"),
                this.picker.addEventListener(
                  "mouseenter",
                  function (e) {
                    return t.onMouseEnter(e);
                  },
                  !0
                ),
                this.picker.addEventListener(
                  "mouseleave",
                  function (e) {
                    return t.onMouseLeave(e);
                  },
                  !1
                ),
                this.options.autoRefresh
                  ? (this.options.element instanceof HTMLElement &&
                      this.options.element.addEventListener(
                        "keyup",
                        function (e) {
                          return t.onInput(e);
                        },
                        !0
                      ),
                    this.options.elementEnd instanceof HTMLElement &&
                      this.options.elementEnd.addEventListener(
                        "keyup",
                        function (e) {
                          return t.onInput(e);
                        },
                        !0
                      ))
                  : (this.options.element instanceof HTMLElement &&
                      this.options.element.addEventListener(
                        "change",
                        function (e) {
                          return t.onInput(e);
                        },
                        !0
                      ),
                    this.options.elementEnd instanceof HTMLElement &&
                      this.options.elementEnd.addEventListener(
                        "change",
                        function (e) {
                          return t.onInput(e);
                        },
                        !0
                      )),
                this.options.moduleNavKeyboard)
              ) {
                if ("function" != typeof this.enableModuleNavKeyboard)
                  throw new Error(
                    "moduleNavKeyboard is on but library does not included. See https://github.com/wakirin/litepicker-module-navkeyboard."
                  );
                this.enableModuleNavKeyboard.call(this, this);
              }
              this.render(),
                this.options.parentEl
                  ? this.options.parentEl instanceof HTMLElement
                    ? this.options.parentEl.appendChild(this.picker)
                    : document
                        .querySelector(this.options.parentEl)
                        .appendChild(this.picker)
                  : this.options.inlineMode
                  ? this.options.element instanceof HTMLInputElement
                    ? this.options.element.parentNode.appendChild(this.picker)
                    : this.options.element.appendChild(this.picker)
                  : document.body.appendChild(this.picker),
                this.options.mobileFriendly &&
                  ((this.backdrop = document.createElement("div")),
                  (this.backdrop.className = h.litepickerBackdrop),
                  this.backdrop.addEventListener("click", this.hide()),
                  this.options.element &&
                    this.options.element.parentNode &&
                    this.options.element.parentNode.appendChild(this.backdrop),
                  window.addEventListener("orientationchange", function (e) {
                    var i = function () {
                      if (p.isMobile() && t.isShowning()) {
                        switch (p.getOrientation()) {
                          case "landscape":
                            (t.options.numberOfMonths = 2),
                              (t.options.numberOfColumns = 2);
                            break;
                          default:
                            (t.options.numberOfMonths = 1),
                              (t.options.numberOfColumns = 1);
                        }
                        if ((t.render(), !t.options.inlineMode)) {
                          var e = t.picker.getBoundingClientRect();
                          (t.picker.style.top =
                            "calc(50% - " + e.height / 2 + "px)"),
                            (t.picker.style.left =
                              "calc(50% - " + e.width / 2 + "px)");
                        }
                      }
                      window.removeEventListener("resize", i);
                    };
                    window.addEventListener("resize", i);
                  })),
                this.options.inlineMode &&
                  (this.show(),
                  this.options.mobileFriendly &&
                    p.isMobile() &&
                    (window.dispatchEvent(new Event("orientationchange")),
                    window.dispatchEvent(new Event("resize")))),
                this.updateInput();
            }),
            (e.prototype.parseInput = function () {
              var t = this.options.delimiter,
                e = new RegExp("" + t),
                i =
                  this.options.element instanceof HTMLInputElement
                    ? this.options.element.value.split(t)
                    : [];
              if (this.options.elementEnd) {
                if (
                  this.options.element instanceof HTMLInputElement &&
                  this.options.element.value.length &&
                  this.options.elementEnd instanceof HTMLInputElement &&
                  this.options.elementEnd.value.length
                )
                  return [
                    new l.DateTime(
                      this.options.element.value,
                      this.options.format
                    ),
                    new l.DateTime(
                      this.options.elementEnd.value,
                      this.options.format
                    ),
                  ];
              } else if (this.options.singleMode) {
                if (
                  this.options.element instanceof HTMLInputElement &&
                  this.options.element.value.length
                )
                  return [
                    new l.DateTime(
                      this.options.element.value,
                      this.options.format
                    ),
                  ];
              } else if (
                this.options.element instanceof HTMLInputElement &&
                e.test(this.options.element.value) &&
                i.length &&
                i.length % 2 == 0
              ) {
                var n = i.slice(0, i.length / 2).join(t),
                  o = i.slice(i.length / 2).join(t);
                return [
                  new l.DateTime(n, this.options.format),
                  new l.DateTime(o, this.options.format),
                ];
              }
              return [];
            }),
            (e.prototype.updateInput = function () {
              if (this.options.element instanceof HTMLInputElement) {
                if (this.options.singleMode && this.options.startDate)
                  this.options.element.value = this.options.startDate.format(
                    this.options.format,
                    this.options.lang
                  );
                else if (
                  !this.options.singleMode &&
                  this.options.startDate &&
                  this.options.endDate
                ) {
                  var t = this.options.startDate.format(
                      this.options.format,
                      this.options.lang
                    ),
                    e = this.options.endDate.format(
                      this.options.format,
                      this.options.lang
                    );
                  this.options.elementEnd
                    ? ((this.options.element.value = t),
                      (this.options.elementEnd.value = e))
                    : (this.options.element.value =
                        "" + t + this.options.delimiter + e);
                }
                this.options.startDate ||
                  this.options.endDate ||
                  ((this.options.element.value = ""),
                  this.options.elementEnd &&
                    (this.options.elementEnd.value = ""));
              }
            }),
            (e.prototype.isSamePicker = function (t) {
              return t.closest("." + h.litepicker) === this.picker;
            }),
            (e.prototype.shouldShown = function (t) {
              return (
                t === this.options.element ||
                (this.options.elementEnd && t === this.options.elementEnd)
              );
            }),
            (e.prototype.shouldResetDatePicked = function () {
              return this.options.singleMode || 2 === this.datePicked.length;
            }),
            (e.prototype.shouldSwapDatePicked = function () {
              return (
                2 === this.datePicked.length &&
                this.datePicked[0].getTime() > this.datePicked[1].getTime()
              );
            }),
            (e.prototype.shouldCheckLockDays = function () {
              return (
                this.options.disallowLockDaysInRange &&
                this.options.lockDays.length &&
                2 === this.datePicked.length
              );
            }),
            (e.prototype.shouldCheckBookedDays = function () {
              return (
                this.options.disallowBookedDaysInRange &&
                this.options.bookedDays.length &&
                2 === this.datePicked.length
              );
            }),
            (e.prototype.onClick = function (t) {
              var e = this,
                i = t.target;
              if (i && this.picker)
                if (this.shouldShown(i)) this.show(i);
                else if (i.closest("." + h.litepicker)) {
                  if (i.classList.contains(h.dayItem)) {
                    if ((t.preventDefault(), !this.isSamePicker(i))) return;
                    if (i.classList.contains(h.isLocked)) return;
                    if (i.classList.contains(h.isBooked)) return;
                    if (
                      (this.shouldResetDatePicked() &&
                        (this.datePicked.length = 0),
                      (this.datePicked[this.datePicked.length] = new l.DateTime(
                        i.dataset.time
                      )),
                      this.shouldSwapDatePicked())
                    ) {
                      var n = this.datePicked[1].clone();
                      (this.datePicked[1] = this.datePicked[0].clone()),
                        (this.datePicked[0] = n.clone());
                    }
                    if (this.shouldCheckLockDays()) {
                      var o = this.options.lockDaysInclusivity;
                      this.options.lockDays.filter(function (t) {
                        return t instanceof Array
                          ? t[0].isBetween(
                              e.datePicked[0],
                              e.datePicked[1],
                              o
                            ) ||
                              t[1].isBetween(
                                e.datePicked[0],
                                e.datePicked[1],
                                o
                              )
                          : t.isBetween(e.datePicked[0], e.datePicked[1], o);
                      }).length &&
                        ((this.datePicked.length = 0),
                        "function" == typeof this.options.onError &&
                          this.options.onError.call(this, "INVALID_RANGE"));
                    }
                    if (this.shouldCheckBookedDays()) {
                      var s = this.options.bookedDaysInclusivity;
                      this.options.hotelMode &&
                        2 === this.datePicked.length &&
                        (s = "()");
                      var a = this.options.bookedDays.filter(function (t) {
                          return t instanceof Array
                            ? t[0].isBetween(
                                e.datePicked[0],
                                e.datePicked[1],
                                s
                              ) ||
                                t[1].isBetween(
                                  e.datePicked[0],
                                  e.datePicked[1],
                                  s
                                )
                            : t.isBetween(e.datePicked[0], e.datePicked[1]);
                        }).length,
                        r =
                          this.options.anyBookedDaysAsCheckout &&
                          1 === this.datePicked.length;
                      a &&
                        !r &&
                        ((this.datePicked.length = 0),
                        "function" == typeof this.options.onError &&
                          this.options.onError.call(this, "INVALID_RANGE"));
                    }
                    return (
                      this.render(),
                      void (
                        this.options.autoApply &&
                        (this.options.singleMode && this.datePicked.length
                          ? (this.setDate(this.datePicked[0]), this.hide())
                          : this.options.singleMode ||
                            2 !== this.datePicked.length ||
                            (this.setDateRange(
                              this.datePicked[0],
                              this.datePicked[1]
                            ),
                            this.hide()))
                      )
                    );
                  }
                  if (i.classList.contains(h.buttonPreviousMonth)) {
                    if ((t.preventDefault(), !this.isSamePicker(i))) return;
                    var d = 0,
                      c = this.options.moveByOneMonth
                        ? 1
                        : this.options.numberOfMonths;
                    if (this.options.splitView) {
                      var u = i.closest("." + h.monthItem);
                      (d = p.findNestedMonthItem(u)), (c = 1);
                    }
                    return (
                      this.calendars[d].setMonth(
                        this.calendars[d].getMonth() - c
                      ),
                      this.gotoDate(this.calendars[d], d),
                      void (
                        "function" == typeof this.options.onChangeMonth &&
                        this.options.onChangeMonth.call(
                          this,
                          this.calendars[d],
                          d
                        )
                      )
                    );
                  }
                  if (i.classList.contains(h.buttonNextMonth)) {
                    if ((t.preventDefault(), !this.isSamePicker(i))) return;
                    (d = 0),
                      (c = this.options.moveByOneMonth
                        ? 1
                        : this.options.numberOfMonths);
                    if (this.options.splitView) {
                      u = i.closest("." + h.monthItem);
                      (d = p.findNestedMonthItem(u)), (c = 1);
                    }
                    return (
                      this.calendars[d].setMonth(
                        this.calendars[d].getMonth() + c
                      ),
                      this.gotoDate(this.calendars[d], d),
                      void (
                        "function" == typeof this.options.onChangeMonth &&
                        this.options.onChangeMonth.call(
                          this,
                          this.calendars[d],
                          d
                        )
                      )
                    );
                  }
                  if (i.classList.contains(h.buttonCancel)) {
                    if ((t.preventDefault(), !this.isSamePicker(i))) return;
                    this.hide();
                  }
                  if (i.classList.contains(h.buttonApply)) {
                    if ((t.preventDefault(), !this.isSamePicker(i))) return;
                    this.options.singleMode && this.datePicked.length
                      ? this.setDate(this.datePicked[0])
                      : this.options.singleMode ||
                        2 !== this.datePicked.length ||
                        this.setDateRange(
                          this.datePicked[0],
                          this.datePicked[1]
                        ),
                      this.hide();
                  }
                } else this.hide();
            }),
            (e.prototype.showTooltip = function (t, e) {
              var i = this.picker.querySelector("." + h.containerTooltip);
              (i.style.visibility = "visible"), (i.innerHTML = e);
              var n = this.picker.getBoundingClientRect(),
                o = i.getBoundingClientRect(),
                s = t.getBoundingClientRect(),
                a = s.top,
                r = s.left;
              if (this.options.inlineMode && this.options.parentEl) {
                var l = this.picker.parentNode.getBoundingClientRect();
                (a -= l.top), (r -= l.left);
              } else (a -= n.top), (r -= n.left);
              (a -= o.height),
                (r -= o.width / 2),
                (r += s.width / 2),
                (i.style.top = a + "px"),
                (i.style.left = r + "px"),
                "function" == typeof this.options.onShowTooltip &&
                  this.options.onShowTooltip.call(this, i, t);
            }),
            (e.prototype.hideTooltip = function () {
              this.picker.querySelector(
                "." + h.containerTooltip
              ).style.visibility = "hidden";
            }),
            (e.prototype.shouldAllowMouseEnter = function (t) {
              return (
                !this.options.singleMode &&
                !t.classList.contains(h.isLocked) &&
                !t.classList.contains(h.isBooked)
              );
            }),
            (e.prototype.shouldAllowRepick = function () {
              return (
                this.options.elementEnd &&
                this.options.allowRepick &&
                this.options.startDate &&
                this.options.endDate
              );
            }),
            (e.prototype.isDayItem = function (t) {
              return t.classList.contains(h.dayItem);
            }),
            (e.prototype.onMouseEnter = function (t) {
              var e = this,
                i = t.target;
              if (
                this.isDayItem(i) &&
                ("function" == typeof this.options.onDayHover &&
                  this.options.onDayHover.call(
                    this,
                    l.DateTime.parseDateTime(i.dataset.time),
                    i.classList.toString().split(/\s/),
                    i
                  ),
                this.shouldAllowMouseEnter(i))
              ) {
                if (
                  (this.shouldAllowRepick() &&
                    (this.triggerElement === this.options.element
                      ? (this.datePicked[0] = this.options.endDate.clone())
                      : this.triggerElement === this.options.elementEnd &&
                        (this.datePicked[0] = this.options.startDate.clone())),
                  1 !== this.datePicked.length)
                )
                  return;
                var n = this.picker.querySelector(
                    "." +
                      h.dayItem +
                      '[data-time="' +
                      this.datePicked[0].getTime() +
                      '"]'
                  ),
                  o = this.datePicked[0].clone(),
                  s = new l.DateTime(i.dataset.time),
                  a = !1;
                if (o.getTime() > s.getTime()) {
                  var r = o.clone();
                  (o = s.clone()), (s = r.clone()), (a = !0);
                }
                if (
                  (Array.prototype.slice
                    .call(this.picker.querySelectorAll("." + h.dayItem))
                    .forEach(function (t) {
                      var i = new l.DateTime(t.dataset.time),
                        n = e.renderDay(i);
                      i.isBetween(o, s) && n.classList.add(h.isInRange),
                        (t.className = n.className);
                    }),
                  i.classList.add(h.isEndDate),
                  a
                    ? (n && n.classList.add(h.isFlipped),
                      i.classList.add(h.isFlipped))
                    : (n && n.classList.remove(h.isFlipped),
                      i.classList.remove(h.isFlipped)),
                  this.options.showTooltip)
                ) {
                  var p = s.diff(o, "day");
                  if ((this.options.hotelMode || (p += 1), p > 0)) {
                    var d = this.pluralSelector(p),
                      c =
                        p +
                        " " +
                        (this.options.tooltipText[d]
                          ? this.options.tooltipText[d]
                          : "[" + d + "]");
                    this.showTooltip(i, c);
                  } else this.hideTooltip();
                }
              }
            }),
            (e.prototype.onMouseLeave = function (t) {
              t.target;
              this.options.allowRepick &&
                (!this.options.allowRepick ||
                  this.options.startDate ||
                  this.options.endDate) &&
                ((this.datePicked.length = 0), this.render());
            }),
            (e.prototype.onInput = function (t) {
              var e = this.parseInput(),
                i = e[0],
                n = e[1],
                o = this.options.format;
              if (
                this.options.elementEnd
                  ? i instanceof l.DateTime &&
                    n instanceof l.DateTime &&
                    i.format(o) === this.options.element.value &&
                    n.format(o) === this.options.elementEnd.value
                  : this.options.singleMode
                  ? i instanceof l.DateTime &&
                    i.format(o) === this.options.element.value
                  : i instanceof l.DateTime &&
                    n instanceof l.DateTime &&
                    "" + i.format(o) + this.options.delimiter + n.format(o) ===
                      this.options.element.value
              ) {
                if (n && i.getTime() > n.getTime()) {
                  var s = i.clone();
                  (i = n.clone()), (n = s.clone());
                }
                (this.options.startDate = new l.DateTime(
                  i,
                  this.options.format,
                  this.options.lang
                )),
                  n &&
                    (this.options.endDate = new l.DateTime(
                      n,
                      this.options.format,
                      this.options.lang
                    )),
                  this.updateInput(),
                  this.render();
                var a = i.clone(),
                  r = 0;
                (this.options.elementEnd
                  ? i.format(o) === t.target.value
                  : t.target.value.startsWith(i.format(o))) ||
                  ((a = n.clone()), (r = this.options.numberOfMonths - 1)),
                  "function" == typeof this.options.onSelect &&
                    this.options.onSelect.call(
                      this,
                      this.getStartDate(),
                      this.getEndDate()
                    ),
                  this.gotoDate(a, r);
              }
            }),
            (e.prototype.isShowning = function () {
              return this.picker && "none" !== this.picker.style.display;
            }),
            (e.prototype.loadPolyfillsForIE11 = function () {
              Object.entries ||
                (Object.entries = function (t) {
                  for (
                    var e = Object.keys(t), i = e.length, n = new Array(i);
                    i;

                  )
                    n[(i -= 1)] = [e[i], t[e[i]]];
                  return n;
                }),
                Element.prototype.matches ||
                  (Element.prototype.matches =
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector),
                Element.prototype.closest ||
                  (Element.prototype.closest = function (t) {
                    var e = this;
                    do {
                      if (e.matches(t)) return e;
                      e = e.parentElement || e.parentNode;
                    } while (null !== e && 1 === e.nodeType);
                    return null;
                  });
            }),
            e
          );
        })(r.Calendar);
      e.Litepicker = d;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(3);
      (e.Litepicker = n.Litepicker),
        i(6),
        i(7),
        (window.Litepicker = n.Litepicker),
        (e.default = n.Litepicker);
    },
    function (t, e, i) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return (e.default = t), e;
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(0),
        s = n(i(1)),
        a = i(2),
        r = (function () {
          function t() {
            (this.options = {
              element: null,
              elementEnd: null,
              parentEl: null,
              firstDay: 1,
              format: "YYYY-MM-DD",
              lang: "en-US",
              delimiter: " - ",
              numberOfMonths: 1,
              numberOfColumns: 1,
              startDate: null,
              endDate: null,
              zIndex: 9999,
              minDate: null,
              maxDate: null,
              minDays: null,
              maxDays: null,
              selectForward: !1,
              selectBackward: !1,
              splitView: !1,
              inlineMode: !1,
              singleMode: !0,
              autoApply: !0,
              allowRepick: !1,
              showWeekNumbers: !1,
              showTooltip: !0,
              hotelMode: !1,
              disableWeekends: !1,
              scrollToDate: !0,
              mobileFriendly: !0,
              useResetBtn: !1,
              autoRefresh: !1,
              moveByOneMonth: !1,
              lockDaysFormat: "YYYY-MM-DD",
              lockDays: [],
              disallowLockDaysInRange: !1,
              lockDaysInclusivity: "[]",
              bookedDaysFormat: "YYYY-MM-DD",
              bookedDays: [],
              disallowBookedDaysInRange: !1,
              bookedDaysInclusivity: "[]",
              anyBookedDaysAsCheckout: !1,
              highlightedDaysFormat: "YYYY-MM-DD",
              highlightedDays: [],
              dropdowns: {
                minYear: 1990,
                maxYear: null,
                months: !1,
                years: !1,
              },
              buttonText: {
                apply: "Apply",
                cancel: "Cancel",
                previousMonth:
                  '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
                nextMonth:
                  '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
                reset:
                  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n        <path d="M0 0h24v24H0z" fill="none"/>\n        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>\n      </svg>',
              },
              tooltipText: { one: "day", other: "days" },
              tooltipPluralSelector: null,
              onShow: null,
              onHide: null,
              onSelect: null,
              onError: null,
              onRender: null,
              onRenderDay: null,
              onChangeMonth: null,
              onChangeYear: null,
              onDayHover: null,
              onShowTooltip: null,
              resetBtnCallback: null,
              moduleRanges: null,
              moduleNavKeyboard: null,
            }),
              (this.calendars = []),
              (this.datePicked = []);
          }
          return (
            (t.prototype.render = function () {
              var t = this,
                e = document.createElement("div");
              e.className = s.containerMain;
              var i = document.createElement("div");
              (i.className = s.containerMonths),
                s["columns" + this.options.numberOfColumns] &&
                  (i.classList.remove(s.columns2, s.columns3, s.columns4),
                  i.classList.add(s["columns" + this.options.numberOfColumns])),
                this.options.splitView && i.classList.add(s.splitView),
                this.options.showWeekNumbers &&
                  i.classList.add(s.showWeekNumbers);
              for (
                var n = this.calendars[0].clone(),
                  o = n.getMonth(),
                  a = n.getMonth() + this.options.numberOfMonths,
                  r = 0,
                  l = o;
                l < a;
                l += 1
              ) {
                var h = n.clone();
                h.setDate(1),
                  this.options.splitView
                    ? (h = this.calendars[r].clone())
                    : h.setMonth(l),
                  i.appendChild(this.renderMonth(h)),
                  (r += 1);
              }
              if (
                ((this.picker.innerHTML = ""),
                e.appendChild(i),
                this.options.useResetBtn)
              ) {
                var p = document.createElement("a");
                (p.href = "#"),
                  (p.className = s.resetButton),
                  (p.innerHTML = this.options.buttonText.reset),
                  p.addEventListener("click", function (e) {
                    e.preventDefault(),
                      t.clearSelection(),
                      "function" == typeof t.options.resetBtnCallback &&
                        t.options.resetBtnCallback.call(t);
                  }),
                  e
                    .querySelector("." + s.monthItem + ":last-child")
                    .querySelector("." + s.monthItemHeader)
                    .appendChild(p);
              }
              if (
                (this.picker.appendChild(e),
                (this.options.autoApply && !this.options.footerHTML) ||
                  this.picker.appendChild(this.renderFooter()),
                this.options.showTooltip &&
                  this.picker.appendChild(this.renderTooltip()),
                this.options.moduleRanges)
              ) {
                if ("function" != typeof this.enableModuleRanges)
                  throw new Error(
                    "moduleRanges is on but library does not included. See https://github.com/wakirin/litepicker-module-ranges."
                  );
                this.enableModuleRanges.call(this, this);
              }
              "function" == typeof this.options.onRender &&
                this.options.onRender.call(this, this.picker);
            }),
            (t.prototype.renderMonth = function (t) {
              var e = this,
                i = t.clone(),
                n = 32 - new Date(i.getFullYear(), i.getMonth(), 32).getDate(),
                r = document.createElement("div");
              r.className = s.monthItem;
              var l = document.createElement("div");
              l.className = s.monthItemHeader;
              var h = document.createElement("div");
              if (this.options.dropdowns.months) {
                var p = document.createElement("select");
                p.className = s.monthItemName;
                for (var d = 0; d < 12; d += 1) {
                  var c = document.createElement("option"),
                    u = new o.DateTime(
                      new Date(t.getFullYear(), d, 1, 0, 0, 0)
                    );
                  (c.value = String(d)),
                    (c.text = u.toLocaleString(this.options.lang, {
                      month: "long",
                    })),
                    (c.disabled =
                      (this.options.minDate &&
                        u.isBefore(
                          new o.DateTime(this.options.minDate),
                          "month"
                        )) ||
                      (this.options.maxDate &&
                        u.isAfter(
                          new o.DateTime(this.options.maxDate),
                          "month"
                        ))),
                    (c.selected = u.getMonth() === t.getMonth()),
                    p.appendChild(c);
                }
                p.addEventListener("change", function (t) {
                  var i = t.target,
                    n = 0;
                  if (e.options.splitView) {
                    var o = i.closest("." + s.monthItem);
                    n = a.findNestedMonthItem(o);
                  }
                  e.calendars[n].setMonth(Number(i.value)),
                    e.render(),
                    "function" == typeof e.options.onChangeMonth &&
                      e.options.onChangeMonth.call(e, e.calendars[n], n);
                }),
                  h.appendChild(p);
              } else {
                var m = document.createElement("strong");
                (m.className = s.monthItemName),
                  (m.innerHTML = t.toLocaleString(this.options.lang, {
                    month: "long",
                  })),
                  h.appendChild(m);
              }
              if (this.options.dropdowns.years) {
                var g = document.createElement("select");
                g.className = s.monthItemYear;
                var f = this.options.dropdowns.minYear,
                  y = this.options.dropdowns.maxYear
                    ? this.options.dropdowns.maxYear
                    : new Date().getFullYear();
                if (t.getFullYear() > y)
                  ((c = document.createElement("option")).value = String(
                    t.getFullYear()
                  )),
                    (c.text = String(t.getFullYear())),
                    (c.selected = !0),
                    (c.disabled = !0),
                    g.appendChild(c);
                for (d = y; d >= f; d -= 1) {
                  var c = document.createElement("option"),
                    D = new o.DateTime(new Date(d, 0, 1, 0, 0, 0));
                  (c.value = d),
                    (c.text = d),
                    (c.disabled =
                      (this.options.minDate &&
                        D.isBefore(
                          new o.DateTime(this.options.minDate),
                          "year"
                        )) ||
                      (this.options.maxDate &&
                        D.isAfter(
                          new o.DateTime(this.options.maxDate),
                          "year"
                        ))),
                    (c.selected = t.getFullYear() === d),
                    g.appendChild(c);
                }
                if (t.getFullYear() < f)
                  ((c = document.createElement("option")).value = String(
                    t.getFullYear()
                  )),
                    (c.text = String(t.getFullYear())),
                    (c.selected = !0),
                    (c.disabled = !0),
                    g.appendChild(c);
                if ("asc" === this.options.dropdowns.years) {
                  var k = Array.prototype.slice.call(g.childNodes).reverse();
                  (g.innerHTML = ""),
                    k.forEach(function (t) {
                      (t.innerHTML = t.value), g.appendChild(t);
                    });
                }
                g.addEventListener("change", function (t) {
                  var i = t.target,
                    n = 0;
                  if (e.options.splitView) {
                    var o = i.closest("." + s.monthItem);
                    n = a.findNestedMonthItem(o);
                  }
                  e.calendars[n].setFullYear(Number(i.value)),
                    e.render(),
                    "function" == typeof e.options.onChangeYear &&
                      e.options.onChangeYear.call(e, e.calendars[n], n);
                }),
                  h.appendChild(g);
              } else {
                var v = document.createElement("span");
                (v.className = s.monthItemYear),
                  (v.innerHTML = String(t.getFullYear())),
                  h.appendChild(v);
              }
              var w = document.createElement("a");
              (w.href = "#"),
                (w.className = s.buttonPreviousMonth),
                (w.innerHTML = this.options.buttonText.previousMonth);
              var M = document.createElement("a");
              (M.href = "#"),
                (M.className = s.buttonNextMonth),
                (M.innerHTML = this.options.buttonText.nextMonth),
                l.appendChild(w),
                l.appendChild(h),
                l.appendChild(M),
                this.options.minDate &&
                  i.isSameOrBefore(
                    new o.DateTime(this.options.minDate),
                    "month"
                  ) &&
                  r.classList.add(s.noPreviousMonth),
                this.options.maxDate &&
                  i.isSameOrAfter(
                    new o.DateTime(this.options.maxDate),
                    "month"
                  ) &&
                  r.classList.add(s.noNextMonth);
              var b = document.createElement("div");
              (b.className = s.monthItemWeekdaysRow),
                this.options.showWeekNumbers && (b.innerHTML = "<div>W</div>");
              for (var T = 1; T <= 7; T += 1) {
                var L = 3 + this.options.firstDay + T,
                  E = document.createElement("div");
                (E.innerHTML = this.weekdayName(L)),
                  (E.title = this.weekdayName(L, "long")),
                  b.appendChild(E);
              }
              var S = document.createElement("div");
              S.className = s.containerDays;
              var P = this.calcSkipDays(i);
              this.options.showWeekNumbers &&
                P &&
                S.appendChild(this.renderWeekNumber(i));
              for (var I = 0; I < P; I += 1) {
                var x = document.createElement("div");
                S.appendChild(x);
              }
              for (I = 1; I <= n; I += 1)
                i.setDate(I),
                  this.options.showWeekNumbers &&
                    i.getDay() === this.options.firstDay &&
                    S.appendChild(this.renderWeekNumber(i)),
                  S.appendChild(this.renderDay(i));
              return r.appendChild(l), r.appendChild(b), r.appendChild(S), r;
            }),
            (t.prototype.renderDay = function (t) {
              var e = this;
              t.setHours();
              var i = document.createElement("a");
              if (
                ((i.href = "#"),
                (i.className = s.dayItem),
                (i.innerHTML = String(t.getDate())),
                (i.dataset.time = String(t.getTime())),
                t.toDateString() === new Date().toDateString() &&
                  i.classList.add(s.isToday),
                this.datePicked.length
                  ? (this.datePicked[0].toDateString() === t.toDateString() &&
                      (i.classList.add(s.isStartDate),
                      this.options.singleMode && i.classList.add(s.isEndDate)),
                    2 === this.datePicked.length &&
                      this.datePicked[1].toDateString() === t.toDateString() &&
                      i.classList.add(s.isEndDate),
                    2 === this.datePicked.length &&
                      t.isBetween(this.datePicked[0], this.datePicked[1]) &&
                      i.classList.add(s.isInRange))
                  : this.options.startDate &&
                    (this.options.startDate.toDateString() ===
                      t.toDateString() &&
                      (i.classList.add(s.isStartDate),
                      this.options.singleMode && i.classList.add(s.isEndDate)),
                    this.options.endDate &&
                      this.options.endDate.toDateString() ===
                        t.toDateString() &&
                      i.classList.add(s.isEndDate),
                    this.options.startDate &&
                      this.options.endDate &&
                      t.isBetween(
                        this.options.startDate,
                        this.options.endDate
                      ) &&
                      i.classList.add(s.isInRange)),
                this.options.minDate &&
                  t.isBefore(new o.DateTime(this.options.minDate)) &&
                  i.classList.add(s.isLocked),
                this.options.maxDate &&
                  t.isAfter(new o.DateTime(this.options.maxDate)) &&
                  i.classList.add(s.isLocked),
                this.options.minDays && 1 === this.datePicked.length)
              ) {
                var n = Number(!this.options.hotelMode),
                  a = this.datePicked[0]
                    .clone()
                    .subtract(this.options.minDays - n, "day"),
                  r = this.datePicked[0]
                    .clone()
                    .add(this.options.minDays - n, "day");
                t.isBetween(a, this.datePicked[0], "(]") &&
                  i.classList.add(s.isLocked),
                  t.isBetween(this.datePicked[0], r, "[)") &&
                    i.classList.add(s.isLocked);
              }
              if (this.options.maxDays && 1 === this.datePicked.length) {
                (n = Number(this.options.hotelMode)),
                  (a = this.datePicked[0]
                    .clone()
                    .subtract(this.options.maxDays + n, "day")),
                  (r = this.datePicked[0]
                    .clone()
                    .add(this.options.maxDays + n, "day"));
                t.isSameOrBefore(a) && i.classList.add(s.isLocked),
                  t.isSameOrAfter(r) && i.classList.add(s.isLocked);
              }
              (this.options.selectForward &&
                1 === this.datePicked.length &&
                t.isBefore(this.datePicked[0]) &&
                i.classList.add(s.isLocked),
              this.options.selectBackward &&
                1 === this.datePicked.length &&
                t.isAfter(this.datePicked[0]) &&
                i.classList.add(s.isLocked),
              this.options.lockDays.length) &&
                this.options.lockDays.filter(function (i) {
                  return i instanceof Array
                    ? t.isBetween(i[0], i[1], e.options.lockDaysInclusivity)
                    : i.isSame(t, "day");
                }).length &&
                i.classList.add(s.isLocked);
              this.options.highlightedDays.length &&
                this.options.highlightedDays.filter(function (e) {
                  return e instanceof Array
                    ? t.isBetween(e[0], e[1], "[]")
                    : e.isSame(t, "day");
                }).length &&
                i.classList.add(s.isHighlighted);
              if (
                this.datePicked.length <= 1 &&
                this.options.bookedDays.length
              ) {
                var l = this.options.bookedDaysInclusivity;
                this.options.hotelMode &&
                  1 === this.datePicked.length &&
                  (l = "()");
                var h = t.clone();
                h.subtract(1, "day"), t.clone().add(1, "day");
                var p = this.dateIsBooked(t, l),
                  d = this.dateIsBooked(h, "[]"),
                  c = this.dateIsBooked(t, "(]"),
                  u =
                    (0 === this.datePicked.length && p) ||
                    (1 === this.datePicked.length && d && p) ||
                    (1 === this.datePicked.length && d && c),
                  m =
                    this.options.anyBookedDaysAsCheckout &&
                    1 === this.datePicked.length;
                u && !m && i.classList.add(s.isBooked);
              }
              return (
                !this.options.disableWeekends ||
                  (6 !== t.getDay() && 0 !== t.getDay()) ||
                  i.classList.add(s.isLocked),
                "function" == typeof this.options.onRenderDay &&
                  this.options.onRenderDay.call(this, i),
                i
              );
            }),
            (t.prototype.renderFooter = function () {
              var t = document.createElement("div");
              if (
                ((t.className = s.containerFooter),
                this.options.footerHTML
                  ? (t.innerHTML = this.options.footerHTML)
                  : (t.innerHTML =
                      '\n      <span class="' +
                      s.previewDateRange +
                      '"></span>\n      <button type="button" class="' +
                      s.buttonCancel +
                      '">' +
                      this.options.buttonText.cancel +
                      '</button>\n      <button type="button" class="' +
                      s.buttonApply +
                      '">' +
                      this.options.buttonText.apply +
                      "</button>\n      "),
                this.options.singleMode)
              ) {
                if (1 === this.datePicked.length) {
                  var e = this.datePicked[0].format(
                    this.options.format,
                    this.options.lang
                  );
                  t.querySelector("." + s.previewDateRange).innerHTML = e;
                }
              } else if (
                (1 === this.datePicked.length &&
                  t
                    .querySelector("." + s.buttonApply)
                    .setAttribute("disabled", ""),
                2 === this.datePicked.length)
              ) {
                e = this.datePicked[0].format(
                  this.options.format,
                  this.options.lang
                );
                var i = this.datePicked[1].format(
                  this.options.format,
                  this.options.lang
                );
                t.querySelector("." + s.previewDateRange).innerHTML =
                  "" + e + this.options.delimiter + i;
              }
              return t;
            }),
            (t.prototype.renderWeekNumber = function (t) {
              var e = document.createElement("div"),
                i = t.getWeek(this.options.firstDay);
              return (
                (e.className = s.weekNumber),
                (e.innerHTML = 53 === i && 0 === t.getMonth() ? "53 / 1" : i),
                e
              );
            }),
            (t.prototype.renderTooltip = function () {
              var t = document.createElement("div");
              return (t.className = s.containerTooltip), t;
            }),
            (t.prototype.dateIsBooked = function (t, e) {
              return this.options.bookedDays.filter(function (i) {
                return i instanceof Array
                  ? t.isBetween(i[0], i[1], e)
                  : i.isSame(t, "day");
              }).length;
            }),
            (t.prototype.weekdayName = function (t, e) {
              return (
                void 0 === e && (e = "short"),
                new Date(1970, 0, t, 12, 0, 0, 0).toLocaleString(
                  this.options.lang,
                  { weekday: e }
                )
              );
            }),
            (t.prototype.calcSkipDays = function (t) {
              var e = t.getDay() - this.options.firstDay;
              return e < 0 && (e += 7), e;
            }),
            t
          );
        })();
      e.Calendar = r;
    },
    function (t, e, i) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                  for (var o in (e = arguments[i]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t)
                Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return (e.default = t), e;
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = i(0),
        a = i(3),
        r = o(i(1)),
        l = i(2);
      (a.Litepicker.prototype.show = function (t) {
        void 0 === t && (t = null);
        var e = t || this.options.element;
        if (((this.triggerElement = e), this.options.inlineMode))
          return (
            (this.picker.style.position = "static"),
            (this.picker.style.display = "inline-block"),
            (this.picker.style.top = null),
            (this.picker.style.left = null),
            (this.picker.style.bottom = null),
            void (this.picker.style.right = null)
          );
        if (this.options.scrollToDate)
          if (!this.options.startDate || (t && t !== this.options.element)) {
            if (t && this.options.endDate && t === this.options.elementEnd) {
              var i = this.options.endDate.clone();
              i.setDate(1),
                this.options.numberOfMonths > 1 &&
                  i.setMonth(i.getMonth() - (this.options.numberOfMonths - 1)),
                (this.calendars[0] = i.clone());
            }
          } else {
            var n = this.options.startDate.clone();
            n.setDate(1), (this.calendars[0] = n.clone());
          }
        if (this.options.mobileFriendly && l.isMobile()) {
          (this.picker.style.position = "fixed"),
            (this.picker.style.display = "block"),
            "portrait" === l.getOrientation()
              ? ((this.options.numberOfMonths = 1),
                (this.options.numberOfColumns = 1))
              : ((this.options.numberOfMonths = 2),
                (this.options.numberOfColumns = 2)),
            this.render();
          var o = this.picker.getBoundingClientRect();
          return (
            (this.picker.style.top = "calc(50% - " + o.height / 2 + "px)"),
            (this.picker.style.left = "calc(50% - " + o.width / 2 + "px)"),
            (this.picker.style.right = null),
            (this.picker.style.bottom = null),
            (this.picker.style.zIndex = this.options.zIndex),
            (this.backdrop.style.display = "block"),
            (this.backdrop.style.zIndex = this.options.zIndex - 1),
            document.body.classList.add(r.litepickerOpen),
            "function" == typeof this.options.onShow &&
              this.options.onShow.call(this),
            void (t ? t.blur() : this.options.element.blur())
          );
        }
        this.render(),
          (this.picker.style.position = "absolute"),
          (this.picker.style.display = "block"),
          (this.picker.style.zIndex = this.options.zIndex);
        var s = e.getBoundingClientRect(),
          a = this.picker.getBoundingClientRect(),
          h = s.bottom,
          p = s.left,
          d = 0,
          c = 0,
          u = 0,
          m = 0;
        if (this.options.parentEl) {
          var g = this.picker.parentNode.getBoundingClientRect();
          (h -= g.bottom),
            (h += s.height) + a.height > window.innerHeight &&
              s.top - g.top - s.height > 0 &&
              (u = s.top - g.top - s.height),
            (p -= g.left) + a.width > window.innerWidth &&
              s.right - g.right - a.width > 0 &&
              (m = s.right - g.right - a.width);
        } else
          (d = window.scrollX || window.pageXOffset),
            (c = window.scrollY || window.pageYOffset),
            h + a.height > window.innerHeight &&
              s.top - a.height > 0 &&
              (u = s.top - a.height),
            p + a.width > window.innerWidth &&
              s.right - a.width > 0 &&
              (m = s.right - a.width);
        (this.picker.style.top = (u || h) + c + "px"),
          (this.picker.style.left = (m || p) + d + "px"),
          (this.picker.style.right = null),
          (this.picker.style.bottom = null),
          "function" == typeof this.options.onShow &&
            this.options.onShow.call(this);
      }),
        (a.Litepicker.prototype.hide = function () {
          this.isShowning() &&
            ((this.datePicked.length = 0),
            this.updateInput(),
            this.options.inlineMode
              ? this.render()
              : ((this.picker.style.display = "none"),
                "function" == typeof this.options.onHide &&
                  this.options.onHide.call(this),
                this.options.mobileFriendly &&
                  (document.body.classList.remove(r.litepickerOpen),
                  (this.backdrop.style.display = "none"))));
        }),
        (a.Litepicker.prototype.getDate = function () {
          return this.getStartDate();
        }),
        (a.Litepicker.prototype.getStartDate = function () {
          return this.options.startDate
            ? this.options.startDate.clone().getDateInstance()
            : null;
        }),
        (a.Litepicker.prototype.getEndDate = function () {
          return this.options.endDate
            ? this.options.endDate.clone().getDateInstance()
            : null;
        }),
        (a.Litepicker.prototype.setDate = function (t) {
          this.setStartDate(t),
            "function" == typeof this.options.onSelect &&
              this.options.onSelect.call(this, this.getDate());
        }),
        (a.Litepicker.prototype.setStartDate = function (t) {
          t &&
            ((this.options.startDate = new s.DateTime(
              t,
              this.options.format,
              this.options.lang
            )),
            this.updateInput());
        }),
        (a.Litepicker.prototype.setEndDate = function (t) {
          t &&
            ((this.options.endDate = new s.DateTime(
              t,
              this.options.format,
              this.options.lang
            )),
            this.options.startDate.getTime() > this.options.endDate.getTime() &&
              ((this.options.endDate = this.options.startDate.clone()),
              (this.options.startDate = new s.DateTime(
                t,
                this.options.format,
                this.options.lang
              ))),
            this.updateInput());
        }),
        (a.Litepicker.prototype.setDateRange = function (t, e) {
          (this.triggerElement = void 0),
            this.setStartDate(t),
            this.setEndDate(e),
            this.updateInput(),
            "function" == typeof this.options.onSelect &&
              this.options.onSelect.call(
                this,
                this.getStartDate(),
                this.getEndDate()
              );
        }),
        (a.Litepicker.prototype.gotoDate = function (t, e) {
          void 0 === e && (e = 0);
          var i = new s.DateTime(t);
          i.setDate(1), (this.calendars[e] = i.clone()), this.render();
        }),
        (a.Litepicker.prototype.setLockDays = function (t) {
          (this.options.lockDays = s.DateTime.convertArray(
            t,
            this.options.lockDaysFormat
          )),
            this.render();
        }),
        (a.Litepicker.prototype.setBookedDays = function (t) {
          (this.options.bookedDays = s.DateTime.convertArray(
            t,
            this.options.bookedDaysFormat
          )),
            this.render();
        }),
        (a.Litepicker.prototype.setHighlightedDays = function (t) {
          (this.options.highlightedDays = s.DateTime.convertArray(
            t,
            this.options.highlightedDaysFormat
          )),
            this.render();
        }),
        (a.Litepicker.prototype.setOptions = function (t) {
          delete t.element,
            delete t.elementEnd,
            delete t.parentEl,
            t.startDate &&
              (t.startDate = new s.DateTime(
                t.startDate,
                this.options.format,
                this.options.lang
              )),
            t.endDate &&
              (t.endDate = new s.DateTime(
                t.endDate,
                this.options.format,
                this.options.lang
              ));
          var e = n(n({}, this.options.dropdowns), t.dropdowns),
            i = n(n({}, this.options.buttonText), t.buttonText),
            o = n(n({}, this.options.tooltipText), t.tooltipText);
          (this.options = n(n({}, this.options), t)),
            (this.options.dropdowns = n({}, e)),
            (this.options.buttonText = n({}, i)),
            (this.options.tooltipText = n({}, o)),
            !this.options.singleMode ||
              this.options.startDate instanceof s.DateTime ||
              ((this.options.startDate = null), (this.options.endDate = null)),
            this.options.singleMode ||
              (this.options.startDate instanceof s.DateTime &&
                this.options.endDate instanceof s.DateTime) ||
              ((this.options.startDate = null), (this.options.endDate = null));
          for (var a = 0; a < this.options.numberOfMonths; a += 1) {
            var r = this.options.startDate
              ? this.options.startDate.clone()
              : new s.DateTime();
            r.setDate(1), r.setMonth(r.getMonth() + a), (this.calendars[a] = r);
          }
          this.options.lockDays.length &&
            (this.options.lockDays = s.DateTime.convertArray(
              this.options.lockDays,
              this.options.lockDaysFormat
            )),
            this.options.bookedDays.length &&
              (this.options.bookedDays = s.DateTime.convertArray(
                this.options.bookedDays,
                this.options.bookedDaysFormat
              )),
            this.options.highlightedDays.length &&
              (this.options.highlightedDays = s.DateTime.convertArray(
                this.options.highlightedDays,
                this.options.highlightedDaysFormat
              )),
            this.render(),
            this.options.inlineMode && this.show(),
            this.updateInput();
        }),
        (a.Litepicker.prototype.clearSelection = function () {
          (this.options.startDate = null),
            (this.options.endDate = null),
            (this.datePicked.length = 0),
            this.updateInput(),
            this.isShowning() && this.render();
        }),
        (a.Litepicker.prototype.destroy = function () {
          this.picker &&
            this.picker.parentNode &&
            (this.picker.parentNode.removeChild(this.picker),
            (this.picker = null)),
            this.backdrop &&
              this.backdrop.parentNode &&
              this.backdrop.parentNode.removeChild(this.backdrop);
        });
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
  ]).Litepicker;
});
(function () {
  // DOM is ready
  const DOMloaded = function () {
    initGallery();
  };

  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function initGallery() {
  let isAnimating = false;
  let mask = document.querySelector(".mask_gallery");
  if (mask) {
    if (isMobile()) {
      initMobileCtas();
    }
    let galleries = mask.querySelectorAll(".section");
    galleries.forEach((gallery) => {
      let paginationItems = gallery.querySelectorAll(".pag");
      let slides = gallery.querySelectorAll(".image");

      paginationItems[0].classList.add("active");
      slides[0].classList.add("active");
      slides[0].querySelector(".blackOverlay").style.opacity = 0;
      paginationItems.forEach((pag) => {
        pag.addEventListener("click", function () {
          toggleActive(pag);
        });
      });

      function toggleActive(pag) {
        isAnimating = true;
        paginationItems.forEach((temppag) => {
          temppag.classList.add("lock");
          temppag.classList.remove("active");
        });
        pag.classList.add("active");
        slides.forEach((slide) => {
          if (
            slide.getAttribute("data-item") == pag.getAttribute("data-item")
          ) {
            let currentActive = gallery.querySelector(".image.active");
            slide.classList.add("tempActive");
            gsap.to(currentActive, {
              clipPath: "circle(0% at 50% 50%)",
              duration: 1.4,
              ease: "power2.out",
              onComplete: () => {
                setTimeout(() => {
                  isAnimating = false;
                }, 100);
              },
            });
            gsap.to(slide.querySelector(".blackOverlay"), {
              opacity: 0,
              duration: 3,
              ease: "power2.out",
            });

            setTimeout(() => {
              currentActive.querySelector(".blackOverlay").style.opacity = 1;
              currentActive.classList.remove("active");
              slide.classList.add("active");
              slide.classList.remove("tempActive");

              slides.forEach((tempslide) => {
                if (!tempslide.classList.contains("active")) {
                  tempslide.style.clipPath = "circle(75% at 50% 50%)";
                }
              });
              paginationItems.forEach((temppag) => {
                temppag.classList.remove("lock");
              });
            }, 1500);
          }
        });
      }
      gallery.onclick = () => {
        gallery.querySelector(".pagination").style.pointerEvents = "all";
        gsap.to(gallery.querySelector(".linkContainer"), {
          opacity: 0,
          duration: 1.5,
          ease: "power1.out",
        });
        gsap.to(gallery.querySelector(".sliderContainer"), {
          clipPath: "circle(100% at 50% 50%)",
          duration: 2,
          ease: "power1.out",
        });
        gsap.to(gallery.querySelector(".pagination"), {
          opacity: 1,
          duration: 2,
          ease: "power1.out",
        });
        scroll.scrollTo(gallery, true);
        gallery.onclick = null;
      };

      gallery.addEventListener("touchstart", handleTouchStart, false);
      gallery.addEventListener("touchmove", handleTouchMove, false);

      var xDown = null;
      var yDown = null;

      function getTouches(evt) {
        return (
          evt.touches || // browser API
          evt.originalEvent.touches
        ); // jQuery
      }

      function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      }

      function handleTouchMove(evt) {
        if (!xDown || !yDown) {
          return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /*most significant*/
          if (xDiff > 0) {
            if (!isAnimating) {
              toggleSwipe("right", paginationItems, slides, gallery);
            }
          } else {
            if (!isAnimating) {
              toggleSwipe("left", paginationItems, slides, gallery);
            }
          }
        }
        /* reset values */
        xDown = null;
        yDown = null;
      }
    });

    ScrollTrigger.create({
      trigger: ".sectionWrapper",
      start: "top",
      end: "bottom bottom",
      scrub: true,
      pin: ".categorys",
    });

    let categorys;
    if (isMobile()) {
      categorys = document.querySelectorAll(".mobileFilterWrapper .category");
    } else {
      categorys = mask.querySelectorAll(".category");
    }
    categorys[0].classList.add("active");

    galleries.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top-=10% top",
        scrub: true,
        onEnter: () => {
          changeCategory(section);
        },
        onEnterBack: () => {
          changeCategory(section);
        },
      });
    });
    if (isMobile()) {
      ScrollTrigger.create({
        trigger: mask,
        start: "top",
        end: "bottom",
        scrub: true,
        onEnter: () => {
          document.querySelector(".mobileFilterWrapper").style.opacity = "1";
        },
      });
    }

    categorys.forEach((cat) => {
      cat.addEventListener("click", function () {
        scrollToSection(cat);
      });
    });

    let accordions = mask.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
      accordion.addEventListener("click", () => {
        toggleAccordion(accordion);
      });
    });

    function changeCategory(section) {
      categorys.forEach((temp) => {
        if (temp.getAttribute("data-id") == section.getAttribute("data-id")) {
          temp.classList.add("active");
        } else {
          temp.classList.remove("active");
        }
      });
    }

    function scrollToSection(cat) {
      galleries.forEach((temp) => {
        if (temp.getAttribute("data-id") == cat.getAttribute("data-id")) {
          scroll.scrollTo(temp, true);
        }
      });
    }

    function toggleSwipe(direction, paginationItems, slides, gallery) {
      isAnimating = true;
      let tempActive = gallery.querySelector(".pag.active");

      paginationItems.forEach((temppag) => {
        temppag.classList.add("lock");
        temppag.classList.remove("active");
      });
      let newPag = tempActive;
      if (direction == "right") {
        if (tempActive.nextElementSibling) {
          newPag = tempActive.nextElementSibling;
        } else {
          newPag = paginationItems[0];
        }
      } else {
        if (tempActive.previousElementSibling) {
          newPag = tempActive.previousElementSibling;
        } else {
          newPag = paginationItems[paginationItems.length - 1];
        }
      }
      newPag.classList.add("active");
      let currentActive = gallery.querySelector(".image.active");
      slides.forEach((slide) => {
        if (
          slide.getAttribute("data-item") == newPag.getAttribute("data-item")
        ) {
          slide.classList.add("tempActive");
          gsap.to(currentActive, {
            clipPath: "circle(0% at 50% 50%)",
            duration: 1.4,
            ease: "power2.out",
            onComplete: () => {
              currentActive.querySelector(".blackOverlay").style.opacity = 1;
              currentActive.classList.remove("active");
              slide.classList.add("active");
              slide.classList.remove("tempActive");
              currentActive;
              slides.forEach((tempslide) => {
                if (!tempslide.classList.contains("active")) {
                  tempslide.style.clipPath = "circle(75% at 50% 50%)";
                }
              });
              paginationItems.forEach((temppag) => {
                temppag.classList.remove("lock");
              });
              setTimeout(() => {
                isAnimating = false;
              }, 100);
            },
          });
          gsap.to(slide.querySelector(".blackOverlay"), {
            opacity: 0,
            duration: 3,
            ease: "power2.out",
          });
        }
      });
    }
  }
}
let mapsVars;
(function () {
  // DOM is ready
  const DOMloaded = function () {
    doInitMap();
    barba.hooks.after(() => {
      if (doInitMap()) initGoogleMap();
    });
  };
  function doInitMap() {
    if (!document.getElementById("maps-json")) return false;
    if (!mapsVars) {
      mapsVars = JSON.parse(document.getElementById("maps-json").innerHTML);
    }
    if (!document.getElementById("Script")) {
      let script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=" +
        mapsVars.apiKey +
        "&callback=initGoogleMap";
      script.id = "Script";
      document.head.appendChild(script);
    }
    return true;
  }
  document.addEventListener("DOMContentLoaded", DOMloaded);
})();
function initGoogleMap() {
  let imagePath = "/fileadmin/" + mapsVars.imgUrl;
  const MAP_STYLE = [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#333333",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#edebe4",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#d1ecc7",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#bddddd",
        },
        {
          lightness: 17,
        },
      ],
    },
  ];
  const MAP_CENTER = {
    lat: parseFloat(mapsVars.latValue),
    lng: parseFloat(mapsVars.lngValue),
  };
  const LOCATION = {
    lat: parseFloat(mapsVars.latValue),
    lng: parseFloat(mapsVars.lngValue),
  };
  const map = new google.maps.Map(document.querySelector(".map"), {
    center: MAP_CENTER,
    zoom: 17,
    styles: MAP_STYLE,
  });

  const marker = new google.maps.Marker({
    position: LOCATION,
    map: map,
    icon: imagePath,
  });
  marker.addListener("click", function () {
    window.open(markerLink);
  });
}

(function () {
  const DOMloaded = function () {
    doInitInfobalken();
  };
  document.addEventListener("DOMContentLoaded", DOMloaded);
})();

function doInitInfobalken() {
  let mask = document.querySelector(".mask_infobalken");
  if (!mask) {
    return;
  }
  if (isMobile()) {
    setTimeout(() => {
      mask.style.top = window.innerHeight - mask.clientHeight + "px";
    }, 100);
    mask.style.opacity = 1;
  }
}
