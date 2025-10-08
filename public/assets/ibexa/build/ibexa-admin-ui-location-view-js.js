(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-location-view-js"],{

/***/ "./vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.js ***!
  \**************************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  "use strict";

  function l(t) {
    for (var e, i, n = 1, o = arguments.length; n < o; n++) for (e in i = arguments[n]) t[e] = i[e];
    return t;
  }
  var R = Object.create || function (t) {
    return N.prototype = t, new N();
  };
  function N() {}
  function a(t, e) {
    var i,
      n = Array.prototype.slice;
    return t.bind ? t.bind.apply(t, n.call(arguments, 1)) : (i = n.call(arguments, 2), function () {
      return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments);
    });
  }
  var D = 0;
  function h(t) {
    return "_leaflet_id" in t || (t._leaflet_id = ++D), t._leaflet_id;
  }
  function j(t, e, i) {
    var n,
      o,
      s = function s() {
        n = !1, o && (r.apply(i, o), o = !1);
      },
      r = function r() {
        n ? o = arguments : (t.apply(i, arguments), setTimeout(s, e), n = !0);
      };
    return r;
  }
  function H(t, e, i) {
    var n = e[1],
      e = e[0],
      o = n - e;
    return t === n && i ? t : ((t - e) % o + o) % o + e;
  }
  function u() {
    return !1;
  }
  function i(t, e) {
    return !1 === e ? t : (e = Math.pow(10, void 0 === e ? 6 : e), Math.round(t * e) / e);
  }
  function W(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function F(t) {
    return W(t).split(/\s+/);
  }
  function c(t, e) {
    for (var i in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? R(t.options) : {}), e) t.options[i] = e[i];
    return t.options;
  }
  function U(t, e, i) {
    var n,
      o = [];
    for (n in t) o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
    return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&");
  }
  var V = /\{ *([\w_ -]+) *\}/g;
  function q(t, i) {
    return t.replace(V, function (t, e) {
      e = i[e];
      if (void 0 === e) throw new Error("No value provided for variable " + t);
      return e = "function" == typeof e ? e(i) : e;
    });
  }
  var d = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  };
  function G(t, e) {
    for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
    return -1;
  }
  var K = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  function Y(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }
  var X = 0;
  function J(t) {
    var e = +new Date(),
      i = Math.max(0, 16 - (e - X));
    return X = e + i, window.setTimeout(t, i);
  }
  var $ = window.requestAnimationFrame || Y("RequestAnimationFrame") || J,
    Q = window.cancelAnimationFrame || Y("CancelAnimationFrame") || Y("CancelRequestAnimationFrame") || function (t) {
      window.clearTimeout(t);
    };
  function x(t, e, i) {
    if (!i || $ !== J) return $.call(window, a(t, e));
    t.call(e);
  }
  function r(t) {
    t && Q.call(window, t);
  }
  var tt = {
    __proto__: null,
    extend: l,
    create: R,
    bind: a,
    get lastId() {
      return D;
    },
    stamp: h,
    throttle: j,
    wrapNum: H,
    falseFn: u,
    formatNum: i,
    trim: W,
    splitWords: F,
    setOptions: c,
    getParamString: U,
    template: q,
    isArray: d,
    indexOf: G,
    emptyImageUrl: K,
    requestFn: $,
    cancelFn: Q,
    requestAnimFrame: x,
    cancelAnimFrame: r
  };
  function et() {}
  et.extend = function (t) {
    function e() {
      c(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    }
    var i,
      n = e.__super__ = this.prototype,
      o = R(n);
    for (i in (o.constructor = e).prototype = o, this) Object.prototype.hasOwnProperty.call(this, i) && "prototype" !== i && "__super__" !== i && (e[i] = this[i]);
    if (t.statics && l(e, t.statics), t.includes) {
      var s = t.includes;
      if ("undefined" != typeof L && L && L.Mixin) {
        s = d(s) ? s : [s];
        for (var r = 0; r < s.length; r++) s[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
      l.apply(null, [o].concat(t.includes));
    }
    return l(o, t), delete o.statics, delete o.includes, o.options && (o.options = n.options ? R(n.options) : {}, l(o.options, t.options)), o._initHooks = [], o.callInitHooks = function () {
      if (!this._initHooksCalled) {
        n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
        for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this);
      }
    }, e;
  }, et.include = function (t) {
    var e = this.prototype.options;
    return l(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
  }, et.mergeOptions = function (t) {
    return l(this.prototype.options, t), this;
  }, et.addInitHook = function (t) {
    var e = Array.prototype.slice.call(arguments, 1),
      i = "function" == typeof t ? t : function () {
        this[t].apply(this, e);
      };
    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
  };
  var e = {
      on: function on(t, e, i) {
        if ("object" == _typeof(t)) for (var n in t) this._on(n, t[n], e);else for (var o = 0, s = (t = F(t)).length; o < s; o++) this._on(t[o], e, i);
        return this;
      },
      off: function off(t, e, i) {
        if (arguments.length) {
          if ("object" == _typeof(t)) for (var n in t) this._off(n, t[n], e);else {
            t = F(t);
            for (var o = 1 === arguments.length, s = 0, r = t.length; s < r; s++) o ? this._off(t[s]) : this._off(t[s], e, i);
          }
        } else delete this._events;
        return this;
      },
      _on: function _on(t, e, i, n) {
        "function" != typeof e ? console.warn("wrong listener type: " + _typeof(e)) : !1 === this._listens(t, e, i) && (e = {
          fn: e,
          ctx: i = i === this ? void 0 : i
        }, n && (e.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e));
      },
      _off: function _off(t, e, i) {
        var n, o, s;
        if (this._events && (n = this._events[t])) if (1 === arguments.length) {
          if (this._firingCount) for (o = 0, s = n.length; o < s; o++) n[o].fn = u;
          delete this._events[t];
        } else "function" != typeof e ? console.warn("wrong listener type: " + _typeof(e)) : !1 !== (e = this._listens(t, e, i)) && (i = n[e], this._firingCount && (i.fn = u, this._events[t] = n = n.slice()), n.splice(e, 1));
      },
      fire: function fire(t, e, i) {
        if (this.listens(t, i)) {
          var n = l({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });
          if (this._events) {
            var o = this._events[t];
            if (o) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var s = 0, r = o.length; s < r; s++) {
                var a = o[s],
                  h = a.fn;
                a.once && this.off(t, h, a.ctx), h.call(a.ctx || this, n);
              }
              this._firingCount--;
            }
          }
          i && this._propagateEvent(n);
        }
        return this;
      },
      listens: function listens(t, e, i, n) {
        "string" != typeof t && console.warn('"string" type argument expected');
        var o = e,
          s = ("function" != typeof e && (n = !!e, i = o = void 0), this._events && this._events[t]);
        if (s && s.length && !1 !== this._listens(t, o, i)) return !0;
        if (n) for (var r in this._eventParents) if (this._eventParents[r].listens(t, e, i, n)) return !0;
        return !1;
      },
      _listens: function _listens(t, e, i) {
        if (this._events) {
          var n = this._events[t] || [];
          if (!e) return !!n.length;
          i === this && (i = void 0);
          for (var o = 0, s = n.length; o < s; o++) if (n[o].fn === e && n[o].ctx === i) return o;
        }
        return !1;
      },
      once: function once(t, e, i) {
        if ("object" == _typeof(t)) for (var n in t) this._on(n, t[n], e, !0);else for (var o = 0, s = (t = F(t)).length; o < s; o++) this._on(t[o], e, i, !0);
        return this;
      },
      addEventParent: function addEventParent(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[h(t)] = t, this;
      },
      removeEventParent: function removeEventParent(t) {
        return this._eventParents && delete this._eventParents[h(t)], this;
      },
      _propagateEvent: function _propagateEvent(t) {
        for (var e in this._eventParents) this._eventParents[e].fire(t.type, l({
          layer: t.target,
          propagatedFrom: t.target
        }, t), !0);
      }
    },
    it = (e.addEventListener = e.on, e.removeEventListener = e.clearAllEventListeners = e.off, e.addOneTimeEventListener = e.once, e.fireEvent = e.fire, e.hasEventListeners = e.listens, et.extend(e));
  function p(t, e, i) {
    this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
  }
  var nt = Math.trunc || function (t) {
    return 0 < t ? Math.floor(t) : Math.ceil(t);
  };
  function m(t, e, i) {
    return t instanceof p ? t : d(t) ? new p(t[0], t[1]) : null == t ? t : "object" == _typeof(t) && "x" in t && "y" in t ? new p(t.x, t.y) : new p(t, e, i);
  }
  function f(t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
  }
  function _(t, e) {
    return !t || t instanceof f ? t : new f(t, e);
  }
  function s(t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
  }
  function g(t, e) {
    return t instanceof s ? t : new s(t, e);
  }
  function v(t, e, i) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
    this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i);
  }
  function w(t, e, i) {
    return t instanceof v ? t : d(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new v(t[0], t[1], t[2]) : 2 === t.length ? new v(t[0], t[1]) : null : null == t ? t : "object" == _typeof(t) && "lat" in t ? new v(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new v(t, e, i);
  }
  p.prototype = {
    clone: function clone() {
      return new p(this.x, this.y);
    },
    add: function add(t) {
      return this.clone()._add(m(t));
    },
    _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    },
    subtract: function subtract(t) {
      return this.clone()._subtract(m(t));
    },
    _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    },
    divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    },
    multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    },
    scaleBy: function scaleBy(t) {
      return new p(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function unscaleBy(t) {
      return new p(this.x / t.x, this.y / t.y);
    },
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    },
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    },
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    },
    trunc: function trunc() {
      return this.clone()._trunc();
    },
    _trunc: function _trunc() {
      return this.x = nt(this.x), this.y = nt(this.y), this;
    },
    distanceTo: function distanceTo(t) {
      var e = (t = m(t)).x - this.x,
        t = t.y - this.y;
      return Math.sqrt(e * e + t * t);
    },
    equals: function equals(t) {
      return (t = m(t)).x === this.x && t.y === this.y;
    },
    contains: function contains(t) {
      return t = m(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    },
    toString: function toString() {
      return "Point(" + i(this.x) + ", " + i(this.y) + ")";
    }
  }, f.prototype = {
    extend: function extend(t) {
      var e, i;
      if (t) {
        if (t instanceof p || "number" == typeof t[0] || "x" in t) e = i = m(t);else if (e = (t = _(t)).min, i = t.max, !e || !i) return this;
        this.min || this.max ? (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)) : (this.min = e.clone(), this.max = i.clone());
      }
      return this;
    },
    getCenter: function getCenter(t) {
      return m((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    },
    getBottomLeft: function getBottomLeft() {
      return m(this.min.x, this.max.y);
    },
    getTopRight: function getTopRight() {
      return m(this.max.x, this.min.y);
    },
    getTopLeft: function getTopLeft() {
      return this.min;
    },
    getBottomRight: function getBottomRight() {
      return this.max;
    },
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    contains: function contains(t) {
      var e, i;
      return (t = ("number" == typeof t[0] || t instanceof p ? m : _)(t)) instanceof f ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
    },
    intersects: function intersects(t) {
      t = _(t);
      var e = this.min,
        i = this.max,
        n = t.min,
        t = t.max,
        o = t.x >= e.x && n.x <= i.x,
        t = t.y >= e.y && n.y <= i.y;
      return o && t;
    },
    overlaps: function overlaps(t) {
      t = _(t);
      var e = this.min,
        i = this.max,
        n = t.min,
        t = t.max,
        o = t.x > e.x && n.x < i.x,
        t = t.y > e.y && n.y < i.y;
      return o && t;
    },
    isValid: function isValid() {
      return !(!this.min || !this.max);
    },
    pad: function pad(t) {
      var e = this.min,
        i = this.max,
        n = Math.abs(e.x - i.x) * t,
        t = Math.abs(e.y - i.y) * t;
      return _(m(e.x - n, e.y - t), m(i.x + n, i.y + t));
    },
    equals: function equals(t) {
      return !!t && (t = _(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()));
    }
  }, s.prototype = {
    extend: function extend(t) {
      var e,
        i,
        n = this._southWest,
        o = this._northEast;
      if (t instanceof v) i = e = t;else {
        if (!(t instanceof s)) return t ? this.extend(w(t) || g(t)) : this;
        if (e = t._southWest, i = t._northEast, !e || !i) return this;
      }
      return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new v(e.lat, e.lng), this._northEast = new v(i.lat, i.lng)), this;
    },
    pad: function pad(t) {
      var e = this._southWest,
        i = this._northEast,
        n = Math.abs(e.lat - i.lat) * t,
        t = Math.abs(e.lng - i.lng) * t;
      return new s(new v(e.lat - n, e.lng - t), new v(i.lat + n, i.lng + t));
    },
    getCenter: function getCenter() {
      return new v((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    getNorthWest: function getNorthWest() {
      return new v(this.getNorth(), this.getWest());
    },
    getSouthEast: function getSouthEast() {
      return new v(this.getSouth(), this.getEast());
    },
    getWest: function getWest() {
      return this._southWest.lng;
    },
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    getEast: function getEast() {
      return this._northEast.lng;
    },
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    contains: function contains(t) {
      t = ("number" == typeof t[0] || t instanceof v || "lat" in t ? w : g)(t);
      var e,
        i,
        n = this._southWest,
        o = this._northEast;
      return t instanceof s ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng;
    },
    intersects: function intersects(t) {
      t = g(t);
      var e = this._southWest,
        i = this._northEast,
        n = t.getSouthWest(),
        t = t.getNorthEast(),
        o = t.lat >= e.lat && n.lat <= i.lat,
        t = t.lng >= e.lng && n.lng <= i.lng;
      return o && t;
    },
    overlaps: function overlaps(t) {
      t = g(t);
      var e = this._southWest,
        i = this._northEast,
        n = t.getSouthWest(),
        t = t.getNorthEast(),
        o = t.lat > e.lat && n.lat < i.lat,
        t = t.lng > e.lng && n.lng < i.lng;
      return o && t;
    },
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    },
    equals: function equals(t, e) {
      return !!t && (t = g(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e));
    },
    isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    }
  };
  var ot = {
      latLngToPoint: function latLngToPoint(t, e) {
        t = this.projection.project(t), e = this.scale(e);
        return this.transformation._transform(t, e);
      },
      pointToLatLng: function pointToLatLng(t, e) {
        e = this.scale(e), t = this.transformation.untransform(t, e);
        return this.projection.unproject(t);
      },
      project: function project(t) {
        return this.projection.project(t);
      },
      unproject: function unproject(t) {
        return this.projection.unproject(t);
      },
      scale: function scale(t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function zoom(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function getProjectedBounds(t) {
        var e;
        return this.infinite ? null : (e = this.projection.bounds, t = this.scale(t), new f(this.transformation.transform(e.min, t), this.transformation.transform(e.max, t)));
      },
      infinite: !(v.prototype = {
        equals: function equals(t, e) {
          return !!t && (t = w(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e));
        },
        toString: function toString(t) {
          return "LatLng(" + i(this.lat, t) + ", " + i(this.lng, t) + ")";
        },
        distanceTo: function distanceTo(t) {
          return st.distance(this, w(t));
        },
        wrap: function wrap() {
          return st.wrapLatLng(this);
        },
        toBounds: function toBounds(t) {
          var t = 180 * t / 40075017,
            e = t / Math.cos(Math.PI / 180 * this.lat);
          return g([this.lat - t, this.lng - e], [this.lat + t, this.lng + e]);
        },
        clone: function clone() {
          return new v(this.lat, this.lng, this.alt);
        }
      }),
      wrapLatLng: function wrapLatLng(t) {
        var e = this.wrapLng ? H(t.lng, this.wrapLng, !0) : t.lng;
        return new v(this.wrapLat ? H(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
      },
      wrapLatLngBounds: function wrapLatLngBounds(t) {
        var e = t.getCenter(),
          i = this.wrapLatLng(e),
          n = e.lat - i.lat,
          e = e.lng - i.lng;
        return 0 == n && 0 == e ? t : (i = t.getSouthWest(), t = t.getNorthEast(), new s(new v(i.lat - n, i.lng - e), new v(t.lat - n, t.lng - e)));
      }
    },
    st = l({}, ot, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function distance(t, e) {
        var i = Math.PI / 180,
          n = t.lat * i,
          o = e.lat * i,
          s = Math.sin((e.lat - t.lat) * i / 2),
          e = Math.sin((e.lng - t.lng) * i / 2),
          t = s * s + Math.cos(n) * Math.cos(o) * e * e,
          i = 2 * Math.atan2(Math.sqrt(t), Math.sqrt(1 - t));
        return this.R * i;
      }
    }),
    rt = 6378137,
    rt = {
      R: rt,
      MAX_LATITUDE: 85.0511287798,
      project: function project(t) {
        var e = Math.PI / 180,
          i = this.MAX_LATITUDE,
          i = Math.max(Math.min(i, t.lat), -i),
          i = Math.sin(i * e);
        return new p(this.R * t.lng * e, this.R * Math.log((1 + i) / (1 - i)) / 2);
      },
      unproject: function unproject(t) {
        var e = 180 / Math.PI;
        return new v((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R);
      },
      bounds: new f([-(rt = rt * Math.PI), -rt], [rt, rt])
    };
  function at(t, e, i, n) {
    d(t) ? (this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3]) : (this._a = t, this._b = e, this._c = i, this._d = n);
  }
  function ht(t, e, i, n) {
    return new at(t, e, i, n);
  }
  at.prototype = {
    transform: function transform(t, e) {
      return this._transform(t.clone(), e);
    },
    _transform: function _transform(t, e) {
      return t.x = (e = e || 1) * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
    },
    untransform: function untransform(t, e) {
      return new p((t.x / (e = e || 1) - this._b) / this._a, (t.y / e - this._d) / this._c);
    }
  };
  var lt = l({}, st, {
      code: "EPSG:3857",
      projection: rt,
      transformation: ht(lt = .5 / (Math.PI * rt.R), .5, -lt, .5)
    }),
    ut = l({}, lt, {
      code: "EPSG:900913"
    });
  function ct(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function dt(t, e) {
    for (var i, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
      for (i = 0, n = (o = t[a]).length; i < n; i++) r += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
      r += e ? b.svg ? "z" : "x" : "";
    }
    return r || "M0 0";
  }
  var _t = document.documentElement.style,
    pt = "ActiveXObject" in window,
    mt = pt && !document.addEventListener,
    n = "msLaunchUri" in navigator && !("documentMode" in document),
    ft = y("webkit"),
    gt = y("android"),
    vt = y("android 2") || y("android 3"),
    yt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    yt = gt && y("Google") && yt < 537 && !("AudioNode" in window),
    xt = !!window.opera,
    wt = !n && y("chrome"),
    bt = y("gecko") && !ft && !xt && !pt,
    Pt = !wt && y("safari"),
    Lt = y("phantom"),
    o = "OTransition" in _t,
    Tt = 0 === navigator.platform.indexOf("Win"),
    Mt = pt && "transition" in _t,
    zt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !vt,
    _t = "MozPerspective" in _t,
    Ct = !window.L_DISABLE_3D && (Mt || zt || _t) && !o && !Lt,
    Zt = "undefined" != typeof orientation || y("mobile"),
    St = Zt && ft,
    Et = Zt && zt,
    kt = !window.PointerEvent && window.MSPointerEvent,
    Ot = !(!window.PointerEvent && !kt),
    At = "ontouchstart" in window || !!window.TouchEvent,
    Bt = !window.L_NO_TOUCH && (At || Ot),
    It = Zt && xt,
    Rt = Zt && bt,
    Nt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
    Dt = function () {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function get() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", u, e), window.removeEventListener("testPassiveEventSupport", u, e);
      } catch (t) {}
      return t;
    }(),
    jt = !!document.createElement("canvas").getContext,
    Ht = !(!document.createElementNS || !ct("svg").createSVGRect),
    Wt = !!Ht && ((Wt = document.createElement("div")).innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (Wt.firstChild && Wt.firstChild.namespaceURI));
  function y(t) {
    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
  }
  var b = {
      ie: pt,
      ielt9: mt,
      edge: n,
      webkit: ft,
      android: gt,
      android23: vt,
      androidStock: yt,
      opera: xt,
      chrome: wt,
      gecko: bt,
      safari: Pt,
      phantom: Lt,
      opera12: o,
      win: Tt,
      ie3d: Mt,
      webkit3d: zt,
      gecko3d: _t,
      any3d: Ct,
      mobile: Zt,
      mobileWebkit: St,
      mobileWebkit3d: Et,
      msPointer: kt,
      pointer: Ot,
      touch: Bt,
      touchNative: At,
      mobileOpera: It,
      mobileGecko: Rt,
      retina: Nt,
      passiveEvents: Dt,
      canvas: jt,
      svg: Ht,
      vml: !Ht && function () {
        try {
          var t = document.createElement("div"),
            e = (t.innerHTML = '<v:shape adj="1"/>', t.firstChild);
          return e.style.behavior = "url(#default#VML)", e && "object" == _typeof(e.adj);
        } catch (t) {
          return !1;
        }
      }(),
      inlineSvg: Wt,
      mac: 0 === navigator.platform.indexOf("Mac"),
      linux: 0 === navigator.platform.indexOf("Linux")
    },
    Ft = b.msPointer ? "MSPointerDown" : "pointerdown",
    Ut = b.msPointer ? "MSPointerMove" : "pointermove",
    Vt = b.msPointer ? "MSPointerUp" : "pointerup",
    qt = b.msPointer ? "MSPointerCancel" : "pointercancel",
    Gt = {
      touchstart: Ft,
      touchmove: Ut,
      touchend: Vt,
      touchcancel: qt
    },
    Kt = {
      touchstart: function touchstart(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && O(e);
        ee(t, e);
      },
      touchmove: ee,
      touchend: ee,
      touchcancel: ee
    },
    Yt = {},
    Xt = !1;
  function Jt(t, e, i) {
    return "touchstart" !== e || Xt || (document.addEventListener(Ft, $t, !0), document.addEventListener(Ut, Qt, !0), document.addEventListener(Vt, te, !0), document.addEventListener(qt, te, !0), Xt = !0), Kt[e] ? (i = Kt[e].bind(this, i), t.addEventListener(Gt[e], i, !1), i) : (console.warn("wrong event specified:", e), u);
  }
  function $t(t) {
    Yt[t.pointerId] = t;
  }
  function Qt(t) {
    Yt[t.pointerId] && (Yt[t.pointerId] = t);
  }
  function te(t) {
    delete Yt[t.pointerId];
  }
  function ee(t, e) {
    if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
      for (var i in e.touches = [], Yt) e.touches.push(Yt[i]);
      e.changedTouches = [e], t(e);
    }
  }
  var ie = 200;
  function ne(t, i) {
    t.addEventListener("dblclick", i);
    var n,
      o = 0;
    function e(t) {
      var e;
      1 !== t.detail ? n = t.detail : "mouse" === t.pointerType || t.sourceCapabilities && !t.sourceCapabilities.firesTouchEvents || (e = Ne(t)).some(function (t) {
        return t instanceof HTMLLabelElement && t.attributes["for"];
      }) && !e.some(function (t) {
        return t instanceof HTMLInputElement || t instanceof HTMLSelectElement;
      }) || ((e = Date.now()) - o <= ie ? 2 === ++n && i(function (t) {
        var e,
          i,
          n = {};
        for (i in t) e = t[i], n[i] = e && e.bind ? e.bind(t) : e;
        return (t = n).type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, n;
      }(t)) : n = 1, o = e);
    }
    return t.addEventListener("click", e), {
      dblclick: i,
      simDblclick: e
    };
  }
  var oe,
    se,
    re,
    ae,
    he,
    le,
    ue = we(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
    ce = we(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
    de = "webkitTransition" === ce || "OTransition" === ce ? ce + "End" : "transitionend";
  function _e(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }
  function pe(t, e) {
    var i = t.style[e] || t.currentStyle && t.currentStyle[e];
    return "auto" === (i = i && "auto" !== i || !document.defaultView ? i : (t = document.defaultView.getComputedStyle(t, null)) ? t[e] : null) ? null : i;
  }
  function P(t, e, i) {
    t = document.createElement(t);
    return t.className = e || "", i && i.appendChild(t), t;
  }
  function T(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function me(t) {
    for (; t.firstChild;) t.removeChild(t.firstChild);
  }
  function fe(t) {
    var e = t.parentNode;
    e && e.lastChild !== t && e.appendChild(t);
  }
  function ge(t) {
    var e = t.parentNode;
    e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
  }
  function ve(t, e) {
    return void 0 !== t.classList ? t.classList.contains(e) : 0 < (t = xe(t)).length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t);
  }
  function M(t, e) {
    var i;
    if (void 0 !== t.classList) for (var n = F(e), o = 0, s = n.length; o < s; o++) t.classList.add(n[o]);else ve(t, e) || ye(t, ((i = xe(t)) ? i + " " : "") + e);
  }
  function z(t, e) {
    void 0 !== t.classList ? t.classList.remove(e) : ye(t, W((" " + xe(t) + " ").replace(" " + e + " ", " ")));
  }
  function ye(t, e) {
    void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e;
  }
  function xe(t) {
    return void 0 === (t = t.correspondingElement ? t.correspondingElement : t).className.baseVal ? t.className : t.className.baseVal;
  }
  function C(t, e) {
    if ("opacity" in t.style) t.style.opacity = e;else if ("filter" in t.style) {
      var i = !1,
        n = "DXImageTransform.Microsoft.Alpha";
      try {
        i = t.filters.item(n);
      } catch (t) {
        if (1 === e) return;
      }
      e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
    }
  }
  function we(t) {
    for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
    return !1;
  }
  function be(t, e, i) {
    e = e || new p(0, 0);
    t.style[ue] = (b.ie3d ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") + (i ? " scale(" + i + ")" : "");
  }
  function Z(t, e) {
    t._leaflet_pos = e, b.any3d ? be(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
  }
  function Pe(t) {
    return t._leaflet_pos || new p(0, 0);
  }
  function Le() {
    S(window, "dragstart", O);
  }
  function Te() {
    k(window, "dragstart", O);
  }
  function Me(t) {
    for (; -1 === t.tabIndex;) t = t.parentNode;
    t.style && (ze(), le = (he = t).style.outlineStyle, t.style.outlineStyle = "none", S(window, "keydown", ze));
  }
  function ze() {
    he && (he.style.outlineStyle = le, le = he = void 0, k(window, "keydown", ze));
  }
  function Ce(t) {
    for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body););
    return t;
  }
  function Ze(t) {
    var e = t.getBoundingClientRect();
    return {
      x: e.width / t.offsetWidth || 1,
      y: e.height / t.offsetHeight || 1,
      boundingClientRect: e
    };
  }
  ae = "onselectstart" in document ? (re = function re() {
    S(window, "selectstart", O);
  }, function () {
    k(window, "selectstart", O);
  }) : (se = we(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), re = function re() {
    var t;
    se && (t = document.documentElement.style, oe = t[se], t[se] = "none");
  }, function () {
    se && (document.documentElement.style[se] = oe, oe = void 0);
  });
  pt = {
    __proto__: null,
    TRANSFORM: ue,
    TRANSITION: ce,
    TRANSITION_END: de,
    get: _e,
    getStyle: pe,
    create: P,
    remove: T,
    empty: me,
    toFront: fe,
    toBack: ge,
    hasClass: ve,
    addClass: M,
    removeClass: z,
    setClass: ye,
    getClass: xe,
    setOpacity: C,
    testProp: we,
    setTransform: be,
    setPosition: Z,
    getPosition: Pe,
    get disableTextSelection() {
      return re;
    },
    get enableTextSelection() {
      return ae;
    },
    disableImageDrag: Le,
    enableImageDrag: Te,
    preventOutline: Me,
    restoreOutline: ze,
    getSizedParentNode: Ce,
    getScale: Ze
  };
  function S(t, e, i, n) {
    if (e && "object" == _typeof(e)) for (var o in e) ke(t, o, e[o], i);else for (var s = 0, r = (e = F(e)).length; s < r; s++) ke(t, e[s], i, n);
    return this;
  }
  var E = "_leaflet_events";
  function k(t, e, i, n) {
    if (1 === arguments.length) Se(t), delete t[E];else if (e && "object" == _typeof(e)) for (var o in e) Oe(t, o, e[o], i);else if (e = F(e), 2 === arguments.length) Se(t, function (t) {
      return -1 !== G(e, t);
    });else for (var s = 0, r = e.length; s < r; s++) Oe(t, e[s], i, n);
    return this;
  }
  function Se(t, e) {
    for (var i in t[E]) {
      var n = i.split(/\d/)[0];
      e && !e(n) || Oe(t, n, null, null, i);
    }
  }
  var Ee = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    wheel: !("onwheel" in window) && "mousewheel"
  };
  function ke(e, t, i, n) {
    var o,
      s,
      r = t + h(i) + (n ? "_" + h(n) : "");
    e[E] && e[E][r] || (s = o = function o(t) {
      return i.call(n || e, t || window.event);
    }, !b.touchNative && b.pointer && 0 === t.indexOf("touch") ? o = Jt(e, t, o) : b.touch && "dblclick" === t ? o = ne(e, o) : "addEventListener" in e ? "touchstart" === t || "touchmove" === t || "wheel" === t || "mousewheel" === t ? e.addEventListener(Ee[t] || t, o, !!b.passiveEvents && {
      passive: !1
    }) : "mouseenter" === t || "mouseleave" === t ? e.addEventListener(Ee[t], o = function o(t) {
      t = t || window.event, We(e, t) && s(t);
    }, !1) : e.addEventListener(t, s, !1) : e.attachEvent("on" + t, o), e[E] = e[E] || {}, e[E][r] = o);
  }
  function Oe(t, e, i, n, o) {
    o = o || e + h(i) + (n ? "_" + h(n) : "");
    var s,
      r,
      i = t[E] && t[E][o];
    i && (!b.touchNative && b.pointer && 0 === e.indexOf("touch") ? (n = t, r = i, Gt[s = e] ? n.removeEventListener(Gt[s], r, !1) : console.warn("wrong event specified:", s)) : b.touch && "dblclick" === e ? (n = i, (r = t).removeEventListener("dblclick", n.dblclick), r.removeEventListener("click", n.simDblclick)) : "removeEventListener" in t ? t.removeEventListener(Ee[e] || e, i, !1) : t.detachEvent("on" + e, i), t[E][o] = null);
  }
  function Ae(t) {
    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
  }
  function Be(t) {
    return ke(t, "wheel", Ae), this;
  }
  function Ie(t) {
    return S(t, "mousedown touchstart dblclick contextmenu", Ae), t._leaflet_disable_click = !0, this;
  }
  function O(t) {
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
  }
  function Re(t) {
    return O(t), Ae(t), this;
  }
  function Ne(t) {
    if (t.composedPath) return t.composedPath();
    for (var e = [], i = t.target; i;) e.push(i), i = i.parentNode;
    return e;
  }
  function De(t, e) {
    var i, n;
    return e ? (n = (i = Ze(e)).boundingClientRect, new p((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)) : new p(t.clientX, t.clientY);
  }
  var je = b.linux && b.chrome ? window.devicePixelRatio : b.mac ? 3 * window.devicePixelRatio : 0 < window.devicePixelRatio ? 2 * window.devicePixelRatio : 1;
  function He(t) {
    return b.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / je : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
  }
  function We(t, e) {
    var i = e.relatedTarget;
    if (!i) return !0;
    try {
      for (; i && i !== t;) i = i.parentNode;
    } catch (t) {
      return !1;
    }
    return i !== t;
  }
  var mt = {
      __proto__: null,
      on: S,
      off: k,
      stopPropagation: Ae,
      disableScrollPropagation: Be,
      disableClickPropagation: Ie,
      preventDefault: O,
      stop: Re,
      getPropagationPath: Ne,
      getMousePosition: De,
      getWheelDelta: He,
      isExternalTarget: We,
      addListener: S,
      removeListener: k
    },
    Fe = it.extend({
      run: function run(t, e, i, n) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Pe(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
      },
      stop: function stop() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function _animate() {
        this._animId = x(this._animate, this), this._step();
      },
      _step: function _step(t) {
        var e = +new Date() - this._startTime,
          i = 1e3 * this._duration;
        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function _runFrame(t, e) {
        t = this._startPos.add(this._offset.multiplyBy(t));
        e && t._round(), Z(this._el, t), this.fire("step");
      },
      _complete: function _complete() {
        r(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function _easeOut(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }),
    A = it.extend({
      options: {
        crs: lt,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0
      },
      initialize: function initialize(t, e) {
        e = c(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(w(e.center), e.zoom, {
          reset: !0
        }), this.callInitHooks(), this._zoomAnimated = ce && b.any3d && !b.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), S(this._proxy, de, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      setView: function setView(t, e, i) {
        if ((e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(w(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i) && (void 0 !== i.animate && (i.zoom = l({
          animate: i.animate
        }, i.zoom), i.pan = l({
          animate: i.animate,
          duration: i.duration
        }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan))) return clearTimeout(this._sizeTimer), this;
        return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
      },
      setZoom: function setZoom(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, {
          zoom: e
        }) : (this._zoom = t, this);
      },
      zoomIn: function zoomIn(t, e) {
        return t = t || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      zoomOut: function zoomOut(t, e) {
        return t = t || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      setZoomAround: function setZoomAround(t, e, i) {
        var n = this.getZoomScale(e),
          o = this.getSize().divideBy(2),
          t = (t instanceof p ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
          n = this.containerPointToLatLng(o.add(t));
        return this.setView(n, e, {
          zoom: i
        });
      },
      _getBoundsCenterZoom: function _getBoundsCenterZoom(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : g(t);
        var i = m(e.paddingTopLeft || e.padding || [0, 0]),
          n = m(e.paddingBottomRight || e.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, i.add(n));
        return (o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0 ? {
          center: t.getCenter(),
          zoom: o
        } : (e = n.subtract(i).divideBy(2), n = this.project(t.getSouthWest(), o), i = this.project(t.getNorthEast(), o), {
          center: this.unproject(n.add(i).divideBy(2).add(e), o),
          zoom: o
        });
      },
      fitBounds: function fitBounds(t, e) {
        if ((t = g(t)).isValid()) return t = this._getBoundsCenterZoom(t, e), this.setView(t.center, t.zoom, e);
        throw new Error("Bounds are not valid.");
      },
      fitWorld: function fitWorld(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      panTo: function panTo(t, e) {
        return this.setView(t, this._zoom, {
          pan: e
        });
      },
      panBy: function panBy(t, e) {
        var i;
        return e = e || {}, (t = m(t).round()).x || t.y ? (!0 === e.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Fe(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate ? (M(this._mapPane, "leaflet-pan-anim"), i = this._getMapPanePos().subtract(t).round(), this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)) : (this._rawPanBy(t), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this) : this.fire("moveend");
      },
      flyTo: function flyTo(n, o, t) {
        if (!1 === (t = t || {}).animate || !b.any3d) return this.setView(n, o, t);
        this._stop();
        var s = this.project(this.getCenter()),
          r = this.project(n),
          e = this.getSize(),
          a = this._zoom,
          h = (n = w(n), o = void 0 === o ? a : o, Math.max(e.x, e.y)),
          i = h * this.getZoomScale(a, o),
          l = r.distanceTo(s) || 1,
          u = 1.42,
          c = u * u;
        function d(t) {
          t = (i * i - h * h + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? i : h) * c * l), t = Math.sqrt(t * t + 1) - t;
          return t < 1e-9 ? -18 : Math.log(t);
        }
        function _(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function p(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        var m = d(0);
        function f(t) {
          return h * (p(m) * (_(t = m + u * t) / p(t)) - _(m)) / c;
        }
        var g = Date.now(),
          v = (d(1) - m) / u,
          y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
        return this._moveStart(!0, t.noMoveStart), function t() {
          var e = (Date.now() - g) / y,
            i = (1 - Math.pow(1 - e, 1.5)) * v;
          e <= 1 ? (this._flyToFrame = x(t, this), this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i) / l)), a), this.getScaleZoom(h / (e = i, h * (p(m) / p(m + u * e))), a), {
            flyTo: !0
          })) : this._move(n, o)._moveEnd(!0);
        }.call(this), this;
      },
      flyToBounds: function flyToBounds(t, e) {
        t = this._getBoundsCenterZoom(t, e);
        return this.flyTo(t.center, t.zoom, e);
      },
      setMaxBounds: function setMaxBounds(t) {
        return t = g(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      setMinZoom: function setMinZoom(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      },
      setMaxZoom: function setMaxZoom(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      },
      panInsideBounds: function panInsideBounds(t, e) {
        this._enforcingBounds = !0;
        var i = this.getCenter(),
          t = this._limitCenter(i, this._zoom, g(t));
        return i.equals(t) || this.panTo(t, e), this._enforcingBounds = !1, this;
      },
      panInside: function panInside(t, e) {
        var i = m((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
          n = m(e.paddingBottomRight || e.padding || [0, 0]),
          o = this.project(this.getCenter()),
          t = this.project(t),
          s = this.getPixelBounds(),
          i = _([s.min.add(i), s.max.subtract(n)]),
          s = i.getSize();
        return i.contains(t) || (this._enforcingBounds = !0, n = t.subtract(i.getCenter()), i = i.extend(t).getSize().subtract(s), o.x += n.x < 0 ? -i.x : i.x, o.y += n.y < 0 ? -i.y : i.y, this.panTo(this.unproject(o), e), this._enforcingBounds = !1), this;
      },
      invalidateSize: function invalidateSize(t) {
        if (!this._loaded) return this;
        t = l({
          animate: !1,
          pan: !0
        }, !0 === t ? {
          animate: !0
        } : t);
        var e = this.getSize(),
          i = (this._sizeChanged = !0, this._lastCenter = null, this.getSize()),
          n = e.divideBy(2).round(),
          o = i.divideBy(2).round(),
          n = n.subtract(o);
        return n.x || n.y ? (t.animate && t.pan ? this.panBy(n) : (t.pan && this._rawPanBy(n), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: i
        })) : this;
      },
      stop: function stop() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      locate: function locate(t) {
        var e, i;
        return t = this._locateOptions = l({
          timeout: 1e4,
          watch: !1
        }, t), "geolocation" in navigator ? (e = a(this._handleGeolocationResponse, this), i = a(this._handleGeolocationError, this), t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t)) : this._handleGeolocationError({
          code: 0,
          message: "Geolocation not supported."
        }), this;
      },
      stopLocate: function stopLocate() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function _handleGeolocationError(t) {
        var e;
        this._container._leaflet_id && (e = t.code, t = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout"), this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
          code: e,
          message: "Geolocation error: " + t + "."
        }));
      },
      _handleGeolocationResponse: function _handleGeolocationResponse(t) {
        if (this._container._leaflet_id) {
          var e,
            i,
            n = new v(t.coords.latitude, t.coords.longitude),
            o = n.toBounds(2 * t.coords.accuracy),
            s = this._locateOptions,
            r = (s.setView && (e = this.getBoundsZoom(o), this.setView(n, s.maxZoom ? Math.min(e, s.maxZoom) : e)), {
              latlng: n,
              bounds: o,
              timestamp: t.timestamp
            });
          for (i in t.coords) "number" == typeof t.coords[i] && (r[i] = t.coords[i]);
          this.fire("locationfound", r);
        }
      },
      addHandler: function addHandler(t, e) {
        return e && (e = this[t] = new e(this), this._handlers.push(e), this.options[t] && e.enable()), this;
      },
      remove: function remove() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t) {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        for (var t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), T(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (r(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
        for (t in this._panes) T(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      createPane: function createPane(t, e) {
        e = P("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
        return t && (this._panes[t] = e), e;
      },
      getCenter: function getCenter() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      getZoom: function getZoom() {
        return this._zoom;
      },
      getBounds: function getBounds() {
        var t = this.getPixelBounds();
        return new s(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
      },
      getMinZoom: function getMinZoom() {
        return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      getMaxZoom: function getMaxZoom() {
        return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      getBoundsZoom: function getBoundsZoom(t, e, i) {
        t = g(t), i = m(i || [0, 0]);
        var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          t = t.getSouthEast(),
          i = this.getSize().subtract(i),
          t = _(this.project(t, n), this.project(r, n)).getSize(),
          r = b.any3d ? this.options.zoomSnap : 1,
          a = i.x / t.x,
          i = i.y / t.y,
          t = e ? Math.max(a, i) : Math.min(a, i),
          n = this.getScaleZoom(t, n);
        return r && (n = Math.round(n / (r / 100)) * (r / 100), n = e ? Math.ceil(n / r) * r : Math.floor(n / r) * r), Math.max(o, Math.min(s, n));
      },
      getSize: function getSize() {
        return this._size && !this._sizeChanged || (this._size = new p(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
      },
      getPixelBounds: function getPixelBounds(t, e) {
        t = this._getTopLeftPoint(t, e);
        return new f(t, t.add(this.getSize()));
      },
      getPixelOrigin: function getPixelOrigin() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function getPixelWorldBounds(t) {
        return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
      },
      getPane: function getPane(t) {
        return "string" == typeof t ? this._panes[t] : t;
      },
      getPanes: function getPanes() {
        return this._panes;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      getZoomScale: function getZoomScale(t, e) {
        var i = this.options.crs;
        return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e);
      },
      getScaleZoom: function getScaleZoom(t, e) {
        var i = this.options.crs,
          t = (e = void 0 === e ? this._zoom : e, i.zoom(t * i.scale(e)));
        return isNaN(t) ? 1 / 0 : t;
      },
      project: function project(t, e) {
        return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(w(t), e);
      },
      unproject: function unproject(t, e) {
        return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(m(t), e);
      },
      layerPointToLatLng: function layerPointToLatLng(t) {
        t = m(t).add(this.getPixelOrigin());
        return this.unproject(t);
      },
      latLngToLayerPoint: function latLngToLayerPoint(t) {
        return this.project(w(t))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function wrapLatLng(t) {
        return this.options.crs.wrapLatLng(w(t));
      },
      wrapLatLngBounds: function wrapLatLngBounds(t) {
        return this.options.crs.wrapLatLngBounds(g(t));
      },
      distance: function distance(t, e) {
        return this.options.crs.distance(w(t), w(e));
      },
      containerPointToLayerPoint: function containerPointToLayerPoint(t) {
        return m(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function layerPointToContainerPoint(t) {
        return m(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function containerPointToLatLng(t) {
        t = this.containerPointToLayerPoint(m(t));
        return this.layerPointToLatLng(t);
      },
      latLngToContainerPoint: function latLngToContainerPoint(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)));
      },
      mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
        return De(t, this._container);
      },
      mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      mouseEventToLatLng: function mouseEventToLatLng(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function _initContainer(t) {
        t = this._container = _e(t);
        if (!t) throw new Error("Map container not found.");
        if (t._leaflet_id) throw new Error("Map container is already initialized.");
        S(t, "scroll", this._onScroll, this), this._containerId = h(t);
      },
      _initLayout: function _initLayout() {
        var t = this._container,
          e = (this._fadeAnimated = this.options.fadeAnimation && b.any3d, M(t, "leaflet-container" + (b.touch ? " leaflet-touch" : "") + (b.retina ? " leaflet-retina" : "") + (b.ielt9 ? " leaflet-oldie" : "") + (b.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")), pe(t, "position"));
        "absolute" !== e && "relative" !== e && "fixed" !== e && "sticky" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function _initPanes() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Z(this._mapPane, new p(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (M(t.markerPane, "leaflet-zoom-hide"), M(t.shadowPane, "leaflet-zoom-hide"));
      },
      _resetView: function _resetView(t, e, i) {
        Z(this._mapPane, new p(0, 0));
        var n = !this._loaded,
          o = (this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset"), this._zoom !== e);
        this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
      },
      _moveStart: function _moveStart(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function _move(t, e, i, n) {
        void 0 === e && (e = this._zoom);
        var o = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
      },
      _moveEnd: function _moveEnd(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function _stop() {
        return r(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function _rawPanBy(t) {
        Z(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function _getZoomSpan() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function _panInsideMaxBounds() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function _checkIfLoaded() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      },
      _initEvents: function _initEvents(t) {
        this._targets = {};
        var e = t ? k : S;
        e((this._targets[h(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), b.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function _onResize() {
        r(this._resizeRequest), this._resizeRequest = x(function () {
          this.invalidateSize({
            debounceMoveend: !0
          });
        }, this);
      },
      _onScroll: function _onScroll() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function _onMoveEnd() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function _findEventTargets(t, e) {
        for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s;) {
          if ((i = this._targets[h(s)]) && ("click" === e || "preclick" === e) && this._draggableMoved(i)) {
            r = !0;
            break;
          }
          if (i && i.listens(e, !0)) {
            if (o && !We(s, t)) break;
            if (n.push(i), o) break;
          }
          if (s === this._container) break;
          s = s.parentNode;
        }
        return n = n.length || r || o || !this.listens(e, !0) ? n : [this];
      },
      _isClickDisabled: function _isClickDisabled(t) {
        for (; t && t !== this._container;) {
          if (t._leaflet_disable_click) return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function _handleDOMEvent(t) {
        var e,
          i = t.target || t.srcElement;
        !this._loaded || i._leaflet_disable_events || "click" === t.type && this._isClickDisabled(i) || ("mousedown" === (e = t.type) && Me(i), this._fireDOMEvent(t, e));
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function _fireDOMEvent(t, e, i) {
        "click" === t.type && ((a = l({}, t)).type = "preclick", this._fireDOMEvent(a, a.type, i));
        var n = this._findEventTargets(t, e);
        if (i) {
          for (var o = [], s = 0; s < i.length; s++) i[s].listens(e, !0) && o.push(i[s]);
          n = o.concat(n);
        }
        if (n.length) {
          "contextmenu" === e && O(t);
          var r,
            a = n[0],
            h = {
              originalEvent: t
            };
          for ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (r = a.getLatLng && (!a._radius || a._radius <= 10), h.containerPoint = r ? this.latLngToContainerPoint(a.getLatLng()) : this.mouseEventToContainerPoint(t), h.layerPoint = this.containerPointToLayerPoint(h.containerPoint), h.latlng = r ? a.getLatLng() : this.layerPointToLatLng(h.layerPoint)), s = 0; s < n.length; s++) if (n[s].fire(e, h, !0), h.originalEvent._stopped || !1 === n[s].options.bubblingMouseEvents && -1 !== G(this._mouseEvents, e)) return;
        }
      },
      _draggableMoved: function _draggableMoved(t) {
        return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function _clearHandlers() {
        for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
      },
      whenReady: function whenReady(t, e) {
        return this._loaded ? t.call(e || this, {
          target: this
        }) : this.on("load", t, e), this;
      },
      _getMapPanePos: function _getMapPanePos() {
        return Pe(this._mapPane) || new p(0, 0);
      },
      _moved: function _moved() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function _getTopLeftPoint(t, e) {
        return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function _getNewPixelOrigin(t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, e, i) {
        i = this._getNewPixelOrigin(i, e);
        return this.project(t, e)._subtract(i);
      },
      _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, e, i) {
        i = this._getNewPixelOrigin(i, e);
        return _([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)]);
      },
      _getCenterLayerPoint: function _getCenterLayerPoint() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function _getCenterOffset(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function _limitCenter(t, e, i) {
        var n, o;
        return !i || (n = this.project(t, e), o = this.getSize().divideBy(2), o = new f(n.subtract(o), n.add(o)), o = this._getBoundsOffset(o, i, e), Math.abs(o.x) <= 1 && Math.abs(o.y) <= 1) ? t : this.unproject(n.add(o), e);
      },
      _limitOffset: function _limitOffset(t, e) {
        var i;
        return e ? (i = new f((i = this.getPixelBounds()).min.add(t), i.max.add(t)), t.add(this._getBoundsOffset(i, e))) : t;
      },
      _getBoundsOffset: function _getBoundsOffset(t, e, i) {
        e = _(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)), i = e.min.subtract(t.min), e = e.max.subtract(t.max);
        return new p(this._rebound(i.x, -e.x), this._rebound(i.y, -e.y));
      },
      _rebound: function _rebound(t, e) {
        return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function _limitZoom(t) {
        var e = this.getMinZoom(),
          i = this.getMaxZoom(),
          n = b.any3d ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
      },
      _onPanTransitionStep: function _onPanTransitionStep() {
        this.fire("move");
      },
      _onPanTransitionEnd: function _onPanTransitionEnd() {
        z(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function _tryAnimatedPan(t, e) {
        t = this._getCenterOffset(t)._trunc();
        return !(!0 !== (e && e.animate) && !this.getSize().contains(t)) && (this.panBy(t, e), !0);
      },
      _createAnimProxy: function _createAnimProxy() {
        var t = this._proxy = P("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
          var e = ue,
            i = this._proxy.style[e];
          be(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function _destroyAnimProxy() {
        T(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function _animMoveEnd() {
        var t = this.getCenter(),
          e = this.getZoom();
        be(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      },
      _catchTransitionEnd: function _catchTransitionEnd(t) {
        this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function _nothingToAnimate() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function _tryAnimatedZoom(t, e, i) {
        if (!this._animatingZoom) {
          if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
          var n = this.getZoomScale(e),
            n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          if (!0 !== i.animate && !this.getSize().contains(n)) return !1;
          x(function () {
            this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
          }, this);
        }
        return !0;
      },
      _animateZoom: function _animateZoom(t, e, i, n) {
        this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, M(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: n
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(a(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function _onZoomTransitionEnd() {
        this._animatingZoom && (this._mapPane && z(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
  function Ue(t) {
    return new B(t);
  }
  var B = et.extend({
      options: {
        position: "topright"
      },
      initialize: function initialize(t) {
        c(this, t);
      },
      getPosition: function getPosition() {
        return this.options.position;
      },
      setPosition: function setPosition(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      addTo: function addTo(t) {
        this.remove(), this._map = t;
        var e = this._container = this.onAdd(t),
          i = this.getPosition(),
          t = t._controlCorners[i];
        return M(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? t.insertBefore(e, t.firstChild) : t.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      remove: function remove() {
        return this._map && (T(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
      },
      _refocusOnMap: function _refocusOnMap(t) {
        this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus();
      }
    }),
    Ve = (A.include({
      addControl: function addControl(t) {
        return t.addTo(this), this;
      },
      removeControl: function removeControl(t) {
        return t.remove(), this;
      },
      _initControlPos: function _initControlPos() {
        var i = this._controlCorners = {},
          n = "leaflet-",
          o = this._controlContainer = P("div", n + "control-container", this._container);
        function t(t, e) {
          i[t + e] = P("div", n + t + " " + n + e, o);
        }
        t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
      },
      _clearControlPos: function _clearControlPos() {
        for (var t in this._controlCorners) T(this._controlCorners[t]);
        T(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    }), B.extend({
      options: {
        collapsed: !0,
        position: "topright",
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function sortFunction(t, e, i, n) {
          return i < n ? -1 : n < i ? 1 : 0;
        }
      },
      initialize: function initialize(t, e, i) {
        for (var n in c(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1, t) this._addLayer(t[n], n);
        for (n in e) this._addLayer(e[n], n, !0);
      },
      onAdd: function onAdd(t) {
        this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function addTo(t) {
        return B.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function onRemove() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      addBaseLayer: function addBaseLayer(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      addOverlay: function addOverlay(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      removeLayer: function removeLayer(t) {
        t.off("add remove", this._onLayerChange, this);
        t = this._getLayer(h(t));
        return t && this._layers.splice(this._layers.indexOf(t), 1), this._map ? this._update() : this;
      },
      expand: function expand() {
        M(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (M(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : z(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      collapse: function collapse() {
        return z(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function _initLayout() {
        var t = "leaflet-control-layers",
          e = this._container = P("div", t),
          i = this.options.collapsed,
          n = (e.setAttribute("aria-haspopup", !0), Ie(e), Be(e), this._section = P("section", t + "-list")),
          o = (i && (this._map.on("click", this.collapse, this), S(e, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this)), this._layersLink = P("a", t + "-toggle", e));
        o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), S(o, {
          keydown: function keydown(t) {
            13 === t.keyCode && this._expandSafely();
          },
          click: function click(t) {
            O(t), this._expandSafely();
          }
        }, this), i || this.expand(), this._baseLayersList = P("div", t + "-base", n), this._separator = P("div", t + "-separator", n), this._overlaysList = P("div", t + "-overlays", n), e.appendChild(n);
      },
      _getLayer: function _getLayer(t) {
        for (var e = 0; e < this._layers.length; e++) if (this._layers[e] && h(this._layers[e].layer) === t) return this._layers[e];
      },
      _addLayer: function _addLayer(t, e, i) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: e,
          overlay: i
        }), this.options.sortLayers && this._layers.sort(a(function (t, e) {
          return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function _update() {
        if (this._container) {
          me(this._baseLayersList), me(this._overlaysList), this._layerControlInputs = [];
          for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++) i = this._layers[o], this._addItem(i), e = e || i.overlay, t = t || !i.overlay, n += i.overlay ? 0 : 1;
          this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && 1 < n) ? "" : "none"), this._separator.style.display = e && t ? "" : "none";
        }
        return this;
      },
      _onLayerChange: function _onLayerChange(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(h(t.target)),
          t = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
        t && this._map.fire(t, e);
      },
      _createRadioElement: function _createRadioElement(t, e) {
        t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", e = document.createElement("div");
        return e.innerHTML = t, e.firstChild;
      },
      _addItem: function _addItem(t) {
        var e,
          i = document.createElement("label"),
          n = this._map.hasLayer(t.layer),
          n = (t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + h(this), n), this._layerControlInputs.push(e), e.layerId = h(t.layer), S(e, "click", this._onInputClick, this), document.createElement("span")),
          o = (n.innerHTML = " " + t.name, document.createElement("span"));
        return i.appendChild(o), o.appendChild(e), o.appendChild(n), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i;
      },
      _onInputClick: function _onInputClick() {
        if (!this._preventClick) {
          var t,
            e,
            i = this._layerControlInputs,
            n = [],
            o = [];
          this._handlingClick = !0;
          for (var s = i.length - 1; 0 <= s; s--) t = i[s], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
          for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
          for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function _checkDisabledLayers() {
        for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom;
      },
      _expandIfNotCollapsed: function _expandIfNotCollapsed() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function _expandSafely() {
        var t = this._section,
          e = (this._preventClick = !0, S(t, "click", O), this.expand(), this);
        setTimeout(function () {
          k(t, "click", O), e._preventClick = !1;
        });
      }
    })),
    qe = B.extend({
      options: {
        position: "topleft",
        zoomInText: '<span aria-hidden="true">+</span>',
        zoomInTitle: "Zoom in",
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        zoomOutTitle: "Zoom out"
      },
      onAdd: function onAdd(t) {
        var e = "leaflet-control-zoom",
          i = P("div", e + " leaflet-bar"),
          n = this.options;
        return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
      },
      onRemove: function onRemove(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function disable() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function enable() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function _zoomIn(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function _zoomOut(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function _createButton(t, e, i, n, o) {
        i = P("a", i, n);
        return i.innerHTML = t, i.href = "#", i.title = e, i.setAttribute("role", "button"), i.setAttribute("aria-label", e), Ie(i), S(i, "click", Re), S(i, "click", o, this), S(i, "click", this._refocusOnMap, this), i;
      },
      _updateDisabled: function _updateDisabled() {
        var t = this._map,
          e = "leaflet-disabled";
        z(this._zoomInButton, e), z(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), !this._disabled && t._zoom !== t.getMinZoom() || (M(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), !this._disabled && t._zoom !== t.getMaxZoom() || (M(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    }),
    Ge = (A.mergeOptions({
      zoomControl: !0
    }), A.addInitHook(function () {
      this.options.zoomControl && (this.zoomControl = new qe(), this.addControl(this.zoomControl));
    }), B.extend({
      options: {
        position: "bottomleft",
        maxWidth: 100,
        metric: !0,
        imperial: !0
      },
      onAdd: function onAdd(t) {
        var e = "leaflet-control-scale",
          i = P("div", e),
          n = this.options;
        return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
      },
      onRemove: function onRemove(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function _addScales(t, e, i) {
        t.metric && (this._mScale = P("div", e, i)), t.imperial && (this._iScale = P("div", e, i));
      },
      _update: function _update() {
        var t = this._map,
          e = t.getSize().y / 2,
          t = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
        this._updateScales(t);
      },
      _updateScales: function _updateScales(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function _updateMetric(t) {
        var e = this._getRoundNum(t);
        this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t);
      },
      _updateImperial: function _updateImperial(t) {
        var e,
          i,
          t = 3.2808399 * t;
        5280 < t ? (i = this._getRoundNum(e = t / 5280), this._updateScale(this._iScale, i + " mi", i / e)) : (i = this._getRoundNum(t), this._updateScale(this._iScale, i + " ft", i / t));
      },
      _updateScale: function _updateScale(t, e, i) {
        t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
      },
      _getRoundNum: function _getRoundNum(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1),
          t = t / e;
        return e * (t = 10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1);
      }
    })),
    Ke = B.extend({
      options: {
        position: "bottomright",
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (b.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>"
      },
      initialize: function initialize(t) {
        c(this, t), this._attributions = {};
      },
      onAdd: function onAdd(t) {
        for (var e in (t.attributionControl = this)._container = P("div", "leaflet-control-attribution"), Ie(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function onRemove(t) {
        t.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function _addAttribution(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function () {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      },
      setPrefix: function setPrefix(t) {
        return this.options.prefix = t, this._update(), this;
      },
      addAttribution: function addAttribution(t) {
        return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this;
      },
      removeAttribution: function removeAttribution(t) {
        return t && this._attributions[t] && (this._attributions[t]--, this._update()), this;
      },
      _update: function _update() {
        if (this._map) {
          var t,
            e = [];
          for (t in this._attributions) this._attributions[t] && e.push(t);
          var i = [];
          this.options.prefix && i.push(this.options.prefix), e.length && i.push(e.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
        }
      }
    }),
    n = (A.mergeOptions({
      attributionControl: !0
    }), A.addInitHook(function () {
      this.options.attributionControl && new Ke().addTo(this);
    }), B.Layers = Ve, B.Zoom = qe, B.Scale = Ge, B.Attribution = Ke, Ue.layers = function (t, e, i) {
      return new Ve(t, e, i);
    }, Ue.zoom = function (t) {
      return new qe(t);
    }, Ue.scale = function (t) {
      return new Ge(t);
    }, Ue.attribution = function (t) {
      return new Ke(t);
    }, et.extend({
      initialize: function initialize(t) {
        this._map = t;
      },
      enable: function enable() {
        return this._enabled || (this._enabled = !0, this.addHooks()), this;
      },
      disable: function disable() {
        return this._enabled && (this._enabled = !1, this.removeHooks()), this;
      },
      enabled: function enabled() {
        return !!this._enabled;
      }
    })),
    ft = (n.addTo = function (t, e) {
      return t.addHandler(e, this), this;
    }, {
      Events: e
    }),
    Ye = b.touch ? "touchstart mousedown" : "mousedown",
    Xe = it.extend({
      options: {
        clickTolerance: 3
      },
      initialize: function initialize(t, e, i, n) {
        c(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
      },
      enable: function enable() {
        this._enabled || (S(this._dragStartTarget, Ye, this._onDown, this), this._enabled = !0);
      },
      disable: function disable() {
        this._enabled && (Xe._dragging === this && this.finishDrag(!0), k(this._dragStartTarget, Ye, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function _onDown(t) {
        var e, i;
        this._enabled && (this._moved = !1, ve(this._element, "leaflet-zoom-anim") || (t.touches && 1 !== t.touches.length ? Xe._dragging === this && this.finishDrag() : Xe._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((Xe._dragging = this)._preventOutline && Me(this._element), Le(), re(), this._moving || (this.fire("down"), i = t.touches ? t.touches[0] : t, e = Ce(this._element), this._startPoint = new p(i.clientX, i.clientY), this._startPos = Pe(this._element), this._parentScale = Ze(e), i = "mousedown" === t.type, S(document, i ? "mousemove" : "touchmove", this._onMove, this), S(document, i ? "mouseup" : "touchend touchcancel", this._onUp, this)))));
      },
      _onMove: function _onMove(t) {
        var e;
        this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : !(e = new p((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX, e.clientY)._subtract(this._startPoint)).x && !e.y || Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, O(t), this._moved || (this.fire("dragstart"), this._moved = !0, M(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), M(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, this._lastEvent = t, this._updatePosition()));
      },
      _updatePosition: function _updatePosition() {
        var t = {
          originalEvent: this._lastEvent
        };
        this.fire("predrag", t), Z(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function _onUp() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function finishDrag(t) {
        z(document.body, "leaflet-dragging"), this._lastTarget && (z(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), k(document, "mousemove touchmove", this._onMove, this), k(document, "mouseup touchend touchcancel", this._onUp, this), Te(), ae();
        var e = this._moved && this._moving;
        this._moving = !1, Xe._dragging = !1, e && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
  function Je(t, e, i) {
    for (var n, o, s, r, a, h, l, u = [1, 4, 2, 8], c = 0, d = t.length; c < d; c++) t[c]._code = si(t[c], e);
    for (s = 0; s < 4; s++) {
      for (h = u[s], n = [], c = 0, o = (d = t.length) - 1; c < d; o = c++) r = t[c], a = t[o], r._code & h ? a._code & h || ((l = oi(a, r, h, e, i))._code = si(l, e), n.push(l)) : (a._code & h && ((l = oi(a, r, h, e, i))._code = si(l, e), n.push(l)), n.push(r));
      t = n;
    }
    return t;
  }
  function $e(t, e) {
    var i, n, o, s, r, a, h;
    if (!t || 0 === t.length) throw new Error("latlngs not passed");
    I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
    for (var l = w([0, 0]), u = g(t), c = (u.getNorthWest().distanceTo(u.getSouthWest()) * u.getNorthEast().distanceTo(u.getNorthWest()) < 1700 && (l = Qe(t)), t.length), d = [], _ = 0; _ < c; _++) {
      var p = w(t[_]);
      d.push(e.project(w([p.lat - l.lat, p.lng - l.lng])));
    }
    for (_ = r = a = h = 0, i = c - 1; _ < c; i = _++) n = d[_], o = d[i], s = n.y * o.x - o.y * n.x, a += (n.x + o.x) * s, h += (n.y + o.y) * s, r += 3 * s;
    u = 0 === r ? d[0] : [a / r, h / r], u = e.unproject(m(u));
    return w([u.lat + l.lat, u.lng + l.lng]);
  }
  function Qe(t) {
    for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
      var s = w(t[o]);
      e += s.lat, i += s.lng, n++;
    }
    return w([e / n, i / n]);
  }
  var ti,
    gt = {
      __proto__: null,
      clipPolygon: Je,
      polygonCenter: $e,
      centroid: Qe
    };
  function ei(t, e) {
    if (e && t.length) {
      var i = t = function (t, e) {
          for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) (function (t, e) {
            var i = e.x - t.x,
              e = e.y - t.y;
            return i * i + e * e;
          })(t[n], t[o]) > e && (i.push(t[n]), o = n);
          o < s - 1 && i.push(t[s - 1]);
          return i;
        }(t, e = e * e),
        n = i.length,
        o = new ((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != void 0 + "" ? Uint8Array : Array)(n);
      o[0] = o[n - 1] = 1, function t(e, i, n, o, s) {
        var r,
          a,
          h,
          l = 0;
        for (a = o + 1; a <= s - 1; a++) h = ri(e[a], e[o], e[s], !0), l < h && (r = a, l = h);
        n < l && (i[r] = 1, t(e, i, n, o, r), t(e, i, n, r, s));
      }(i, o, e, 0, n - 1);
      var s,
        r = [];
      for (s = 0; s < n; s++) o[s] && r.push(i[s]);
      return r;
    }
    return t.slice();
  }
  function ii(t, e, i) {
    return Math.sqrt(ri(t, e, i, !0));
  }
  function ni(t, e, i, n, o) {
    var s,
      r,
      a,
      h = n ? ti : si(t, i),
      l = si(e, i);
    for (ti = l;;) {
      if (!(h | l)) return [t, e];
      if (h & l) return !1;
      a = si(r = oi(t, e, s = h || l, i, o), i), s === h ? (t = r, h = a) : (e = r, l = a);
    }
  }
  function oi(t, e, i, n, o) {
    var s,
      r,
      a = e.x - t.x,
      e = e.y - t.y,
      h = n.min,
      n = n.max;
    return 8 & i ? (s = t.x + a * (n.y - t.y) / e, r = n.y) : 4 & i ? (s = t.x + a * (h.y - t.y) / e, r = h.y) : 2 & i ? (s = n.x, r = t.y + e * (n.x - t.x) / a) : 1 & i && (s = h.x, r = t.y + e * (h.x - t.x) / a), new p(s, r, o);
  }
  function si(t, e) {
    var i = 0;
    return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
  }
  function ri(t, e, i, n) {
    var o = e.x,
      e = e.y,
      s = i.x - o,
      r = i.y - e,
      a = s * s + r * r;
    return 0 < a && (1 < (a = ((t.x - o) * s + (t.y - e) * r) / a) ? (o = i.x, e = i.y) : 0 < a && (o += s * a, e += r * a)), s = t.x - o, r = t.y - e, n ? s * s + r * r : new p(o, e);
  }
  function I(t) {
    return !d(t[0]) || "object" != _typeof(t[0][0]) && void 0 !== t[0][0];
  }
  function ai(t) {
    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), I(t);
  }
  function hi(t, e) {
    var i, n, o, s, r, a;
    if (!t || 0 === t.length) throw new Error("latlngs not passed");
    I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
    for (var h = w([0, 0]), l = g(t), u = (l.getNorthWest().distanceTo(l.getSouthWest()) * l.getNorthEast().distanceTo(l.getNorthWest()) < 1700 && (h = Qe(t)), t.length), c = [], d = 0; d < u; d++) {
      var _ = w(t[d]);
      c.push(e.project(w([_.lat - h.lat, _.lng - h.lng])));
    }
    for (i = d = 0; d < u - 1; d++) i += c[d].distanceTo(c[d + 1]) / 2;
    if (0 === i) a = c[0];else for (n = d = 0; d < u - 1; d++) if (o = c[d], s = c[d + 1], i < (n += r = o.distanceTo(s))) {
      a = [s.x - (r = (n - i) / r) * (s.x - o.x), s.y - r * (s.y - o.y)];
      break;
    }
    l = e.unproject(m(a));
    return w([l.lat + h.lat, l.lng + h.lng]);
  }
  var vt = {
      __proto__: null,
      simplify: ei,
      pointToSegmentDistance: ii,
      closestPointOnSegment: function closestPointOnSegment(t, e, i) {
        return ri(t, e, i);
      },
      clipSegment: ni,
      _getEdgeIntersection: oi,
      _getBitCode: si,
      _sqClosestPointOnSegment: ri,
      isFlat: I,
      _flat: ai,
      polylineCenter: hi
    },
    yt = {
      project: function project(t) {
        return new p(t.lng, t.lat);
      },
      unproject: function unproject(t) {
        return new v(t.y, t.x);
      },
      bounds: new f([-180, -90], [180, 90])
    },
    xt = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new f([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
      project: function project(t) {
        var e = Math.PI / 180,
          i = this.R,
          n = t.lat * e,
          o = this.R_MINOR / i,
          o = Math.sqrt(1 - o * o),
          s = o * Math.sin(n),
          s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), o / 2),
          n = -i * Math.log(Math.max(s, 1e-10));
        return new p(t.lng * e * i, n);
      },
      unproject: function unproject(t) {
        for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && 1e-7 < Math.abs(l); h++) e = s * Math.sin(a), e = Math.pow((1 - e) / (1 + e), s / 2), a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a;
        return new v(a * i, t.x * i / n);
      }
    },
    wt = {
      __proto__: null,
      LonLat: yt,
      Mercator: xt,
      SphericalMercator: rt
    },
    Pt = l({}, st, {
      code: "EPSG:3395",
      projection: xt,
      transformation: ht(bt = .5 / (Math.PI * xt.R), .5, -bt, .5)
    }),
    li = l({}, st, {
      code: "EPSG:4326",
      projection: yt,
      transformation: ht(1 / 180, 1, -1 / 180, .5)
    }),
    Lt = l({}, ot, {
      projection: yt,
      transformation: ht(1, 0, -1, 0),
      scale: function scale(t) {
        return Math.pow(2, t);
      },
      zoom: function zoom(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function distance(t, e) {
        var i = e.lng - t.lng,
          e = e.lat - t.lat;
        return Math.sqrt(i * i + e * e);
      },
      infinite: !0
    }),
    o = (ot.Earth = st, ot.EPSG3395 = Pt, ot.EPSG3857 = lt, ot.EPSG900913 = ut, ot.EPSG4326 = li, ot.Simple = Lt, it.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0
      },
      addTo: function addTo(t) {
        return t.addLayer(this), this;
      },
      remove: function remove() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function removeFrom(t) {
        return t && t.removeLayer(this), this;
      },
      getPane: function getPane(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function addInteractiveTarget(t) {
        return this._map._targets[h(t)] = this;
      },
      removeInteractiveTarget: function removeInteractiveTarget(t) {
        return delete this._map._targets[h(t)], this;
      },
      getAttribution: function getAttribution() {
        return this.options.attribution;
      },
      _layerAdd: function _layerAdd(t) {
        var e,
          i = t.target;
        i.hasLayer(this) && (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents && (e = this.getEvents(), i.on(e, this), this.once("remove", function () {
          i.off(e, this);
        }, this)), this.onAdd(i), this.fire("add"), i.fire("layeradd", {
          layer: this
        }));
      }
    })),
    ui = (A.include({
      addLayer: function addLayer(t) {
        var e;
        if (t._layerAdd) return e = h(t), this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
        throw new Error("The provided object is not a Layer.");
      },
      removeLayer: function removeLayer(t) {
        var e = h(t);
        return this._layers[e] && (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", {
          layer: t
        }), t.fire("remove")), t._map = t._mapToAdd = null), this;
      },
      hasLayer: function hasLayer(t) {
        return h(t) in this._layers;
      },
      eachLayer: function eachLayer(t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      _addLayers: function _addLayers(t) {
        for (var e = 0, i = (t = t ? d(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e]);
      },
      _addZoomLimit: function _addZoomLimit(t) {
        isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[h(t)] = t, this._updateZoomLevels());
      },
      _removeZoomLimit: function _removeZoomLimit(t) {
        t = h(t);
        this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t], this._updateZoomLevels());
      },
      _updateZoomLevels: function _updateZoomLevels() {
        var t,
          e = 1 / 0,
          i = -1 / 0,
          n = this._getZoomSpan();
        for (t in this._zoomBoundLayers) var o = this._zoomBoundLayers[t].options, e = void 0 === o.minZoom ? e : Math.min(e, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
        this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = e === 1 / 0 ? void 0 : e, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    }), o.extend({
      initialize: function initialize(t, e) {
        var i, n;
        if (c(this, e), this._layers = {}, t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
      },
      addLayer: function addLayer(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      },
      removeLayer: function removeLayer(t) {
        t = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[t] && this._map.removeLayer(this._layers[t]), delete this._layers[t], this;
      },
      hasLayer: function hasLayer(t) {
        return ("number" == typeof t ? t : this.getLayerId(t)) in this._layers;
      },
      clearLayers: function clearLayers() {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function invoke(t) {
        var e,
          i,
          n = Array.prototype.slice.call(arguments, 1);
        for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
        return this;
      },
      onAdd: function onAdd(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function onRemove(t) {
        this.eachLayer(t.removeLayer, t);
      },
      eachLayer: function eachLayer(t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      getLayer: function getLayer(t) {
        return this._layers[t];
      },
      getLayers: function getLayers() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      setZIndex: function setZIndex(t) {
        return this.invoke("setZIndex", t);
      },
      getLayerId: h
    })),
    ci = ui.extend({
      addLayer: function addLayer(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), ui.prototype.addLayer.call(this, t), this.fire("layeradd", {
          layer: t
        }));
      },
      removeLayer: function removeLayer(t) {
        return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this), ui.prototype.removeLayer.call(this, t), this.fire("layerremove", {
          layer: t
        })) : this;
      },
      setStyle: function setStyle(t) {
        return this.invoke("setStyle", t);
      },
      bringToFront: function bringToFront() {
        return this.invoke("bringToFront");
      },
      bringToBack: function bringToBack() {
        return this.invoke("bringToBack");
      },
      getBounds: function getBounds() {
        var t,
          e = new s();
        for (t in this._layers) {
          var i = this._layers[t];
          e.extend(i.getBounds ? i.getBounds() : i.getLatLng());
        }
        return e;
      }
    }),
    di = et.extend({
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        crossOrigin: !1
      },
      initialize: function initialize(t) {
        c(this, t);
      },
      createIcon: function createIcon(t) {
        return this._createIcon("icon", t);
      },
      createShadow: function createShadow(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function _createIcon(t, e) {
        var i = this._getIconUrl(t);
        if (i) return i = this._createImg(i, e && "IMG" === e.tagName ? e : null), this._setIconStyles(i, t), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), i;
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
        return null;
      },
      _setIconStyles: function _setIconStyles(t, e) {
        var i = this.options,
          n = i[e + "Size"],
          n = m(n = "number" == typeof n ? [n, n] : n),
          o = m("shadow" === e && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (i.className || ""), o && (t.style.marginLeft = -o.x + "px", t.style.marginTop = -o.y + "px"), n && (t.style.width = n.x + "px", t.style.height = n.y + "px");
      },
      _createImg: function _createImg(t, e) {
        return (e = e || document.createElement("img")).src = t, e;
      },
      _getIconUrl: function _getIconUrl(t) {
        return b.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
  var _i = di.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function _getIconUrl(t) {
        return "string" != typeof _i.imagePath && (_i.imagePath = this._detectIconPath()), (this.options.imagePath || _i.imagePath) + di.prototype._getIconUrl.call(this, t);
      },
      _stripUrl: function _stripUrl(t) {
        function e(t, e, i) {
          return (e = e.exec(t)) && e[i];
        }
        return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function _detectIconPath() {
        var t = P("div", "leaflet-default-icon-path", document.body),
          e = pe(t, "background-image") || pe(t, "backgroundImage");
        return document.body.removeChild(t), (e = this._stripUrl(e)) ? e : (t = document.querySelector('link[href$="leaflet.css"]')) ? t.href.substring(0, t.href.length - "leaflet.css".length - 1) : "";
      }
    }),
    pi = n.extend({
      initialize: function initialize(t) {
        this._marker = t;
      },
      addHooks: function addHooks() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new Xe(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), M(t, "leaflet-marker-draggable");
      },
      removeHooks: function removeHooks() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && z(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function moved() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function _adjustPan(t) {
        var e = this._marker,
          i = e._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = Pe(e._icon),
          r = i.getPixelBounds(),
          a = i.getPixelOrigin(),
          a = _(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
        a.contains(s) || (o = m((Math.max(a.max.x, s.x) - a.max.x) / (r.max.x - a.max.x) - (Math.min(a.min.x, s.x) - a.min.x) / (r.min.x - a.min.x), (Math.max(a.max.y, s.y) - a.max.y) / (r.max.y - a.max.y) - (Math.min(a.min.y, s.y) - a.min.y) / (r.min.y - a.min.y)).multiplyBy(n), i.panBy(o, {
          animate: !1
        }), this._draggable._newPos._add(o), this._draggable._startPos._add(o), Z(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = x(this._adjustPan.bind(this, t)));
      },
      _onDragStart: function _onDragStart() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function _onPreDrag(t) {
        this._marker.options.autoPan && (r(this._panRequest), this._panRequest = x(this._adjustPan.bind(this, t)));
      },
      _onDrag: function _onDrag(t) {
        var e = this._marker,
          i = e._shadow,
          n = Pe(e._icon),
          o = e._map.layerPointToLatLng(n);
        i && Z(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function _onDragEnd(t) {
        r(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }),
    mi = o.extend({
      options: {
        icon: new _i(),
        interactive: !0,
        keyboard: !0,
        title: "",
        alt: "Marker",
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: "markerPane",
        shadowPane: "shadowPane",
        bubblingMouseEvents: !1,
        autoPanOnFocus: !0,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10
      },
      initialize: function initialize(t, e) {
        c(this, e), this._latlng = w(t);
      },
      onAdd: function onAdd(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function onRemove(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function getEvents() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setLatLng: function setLatLng(t) {
        var e = this._latlng;
        return this._latlng = w(t), this.update(), this.fire("move", {
          oldLatLng: e,
          latlng: this._latlng
        });
      },
      setZIndexOffset: function setZIndexOffset(t) {
        return this.options.zIndexOffset = t, this.update();
      },
      getIcon: function getIcon() {
        return this.options.icon;
      },
      setIcon: function setIcon(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function getElement() {
        return this._icon;
      },
      update: function update() {
        var t;
        return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t)), this;
      },
      _initIcon: function _initIcon() {
        var t = this.options,
          e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          i = t.icon.createIcon(this._icon),
          n = !1,
          i = (i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")), M(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && S(i, "focus", this._panOnFocus, this), t.icon.createShadow(this._shadow)),
          o = !1;
        i !== this._shadow && (this._removeShadow(), o = !0), i && (M(i, e), i.alt = ""), this._shadow = i, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), i && o && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function _removeIcon() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && k(this._icon, "focus", this._panOnFocus, this), T(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function _removeShadow() {
        this._shadow && T(this._shadow), this._shadow = null;
      },
      _setPos: function _setPos(t) {
        this._icon && Z(this._icon, t), this._shadow && Z(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function _updateZIndex(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function _animateZoom(t) {
        t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(t);
      },
      _initInteraction: function _initInteraction() {
        var t;
        this.options.interactive && (M(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), pi && (t = this.options.draggable, this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new pi(this), t && this.dragging.enable()));
      },
      setOpacity: function setOpacity(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function _updateOpacity() {
        var t = this.options.opacity;
        this._icon && C(this._icon, t), this._shadow && C(this._shadow, t);
      },
      _bringToFront: function _bringToFront() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function _resetZIndex() {
        this._updateZIndex(0);
      },
      _panOnFocus: function _panOnFocus() {
        var t,
          e,
          i = this._map;
        i && (t = (e = this.options.icon.options).iconSize ? m(e.iconSize) : m(0, 0), e = e.iconAnchor ? m(e.iconAnchor) : m(0, 0), i.panInside(this._latlng, {
          paddingTopLeft: e,
          paddingBottomRight: t.subtract(e)
        }));
      },
      _getPopupAnchor: function _getPopupAnchor() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function _getTooltipAnchor() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
  var fi = o.extend({
      options: {
        stroke: !0,
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: .2,
        fillRule: "evenodd",
        interactive: !0,
        bubblingMouseEvents: !0
      },
      beforeAdd: function beforeAdd(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function onAdd() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function onRemove() {
        this._renderer._removePath(this);
      },
      redraw: function redraw() {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function setStyle(t) {
        return c(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      },
      bringToFront: function bringToFront() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function bringToBack() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function getElement() {
        return this._path;
      },
      _reset: function _reset() {
        this._project(), this._update();
      },
      _clickTolerance: function _clickTolerance() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }),
    gi = fi.extend({
      options: {
        fill: !0,
        radius: 10
      },
      initialize: function initialize(t, e) {
        c(this, e), this._latlng = w(t), this._radius = this.options.radius;
      },
      setLatLng: function setLatLng(t) {
        var e = this._latlng;
        return this._latlng = w(t), this.redraw(), this.fire("move", {
          oldLatLng: e,
          latlng: this._latlng
        });
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setRadius: function setRadius(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      getRadius: function getRadius() {
        return this._radius;
      },
      setStyle: function setStyle(t) {
        var e = t && t.radius || this._radius;
        return fi.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function _project() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function _updateBounds() {
        var t = this._radius,
          e = this._radiusY || t,
          i = this._clickTolerance(),
          t = [t + i, e + i];
        this._pxBounds = new f(this._point.subtract(t), this._point.add(t));
      },
      _update: function _update() {
        this._map && this._updatePath();
      },
      _updatePath: function _updatePath() {
        this._renderer._updateCircle(this);
      },
      _empty: function _empty() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      _containsPoint: function _containsPoint(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
  var vi = gi.extend({
    initialize: function initialize(t, e, i) {
      if (c(this, e = "number" == typeof e ? l({}, i, {
        radius: e
      }) : e), this._latlng = w(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._mRadius;
    },
    getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];
      return new s(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    },
    setStyle: fi.prototype.setStyle,
    _project: function _project() {
      var t,
        e,
        i,
        n,
        o,
        s = this._latlng.lng,
        r = this._latlng.lat,
        a = this._map,
        h = a.options.crs;
      h.distance === st.distance ? (n = Math.PI / 180, o = this._mRadius / st.R / n, t = a.project([r + o, s]), e = a.project([r - o, s]), e = t.add(e).divideBy(2), i = a.unproject(e).lat, n = Math.acos((Math.cos(o * n) - Math.sin(r * n) * Math.sin(i * n)) / (Math.cos(r * n) * Math.cos(i * n))) / n, !isNaN(n) && 0 !== n || (n = o / Math.cos(Math.PI / 180 * r)), this._point = e.subtract(a.getPixelOrigin()), this._radius = isNaN(n) ? 0 : e.x - a.project([i, s - n]).x, this._radiusY = e.y - t.y) : (o = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0])), this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(o).x), this._updateBounds();
    }
  });
  var yi = fi.extend({
    options: {
      smoothFactor: 1,
      noClip: !1
    },
    initialize: function initialize(t, e) {
      c(this, e), this._setLatLngs(t);
    },
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function closestLayerPoint(t) {
      for (var e = 1 / 0, i = null, n = ri, o = 0, s = this._parts.length; o < s; o++) for (var r = this._parts[o], a = 1, h = r.length; a < h; a++) {
        var l,
          u,
          c = n(t, l = r[a - 1], u = r[a], !0);
        c < e && (e = c, i = n(t, l, u));
      }
      return i && (i.distance = Math.sqrt(e)), i;
    },
    getCenter: function getCenter() {
      if (this._map) return hi(this._defaultShape(), this._map.options.crs);
      throw new Error("Must add layer to map before using getCenter()");
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    addLatLng: function addLatLng(t, e) {
      return e = e || this._defaultShape(), t = w(t), e.push(t), this._bounds.extend(t), this.redraw();
    },
    _setLatLngs: function _setLatLngs(t) {
      this._bounds = new s(), this._latlngs = this._convertLatLngs(t);
    },
    _defaultShape: function _defaultShape() {
      return I(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function _convertLatLngs(t) {
      for (var e = [], i = I(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = w(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
      return e;
    },
    _project: function _project() {
      var t = new f();
      this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
    },
    _updateBounds: function _updateBounds() {
      var t = this._clickTolerance(),
        t = new p(t, t);
      this._rawPxBounds && (this._pxBounds = new f([this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t)]));
    },
    _projectLatlngs: function _projectLatlngs(t, e, i) {
      var n,
        o,
        s = t[0] instanceof v,
        r = t.length;
      if (s) {
        for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
        e.push(o);
      } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i);
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var e, i, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++) for (e = 0, i = (o = this._rings[r]).length; e < i - 1; e++) (n = ni(o[e], o[e + 1], t, e, !0)) && (s[a] = s[a] || [], s[a].push(n[0]), n[1] === o[e + 1] && e !== i - 2 || (s[a].push(n[1]), a++));
    },
    _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = ei(t[i], e);
    },
    _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function _containsPoint(t, e) {
      var i,
        n,
        o,
        s,
        r,
        a,
        h = this._clickTolerance();
      if (this._pxBounds && this._pxBounds.contains(t)) for (i = 0, s = this._parts.length; i < s; i++) for (n = 0, o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++) if ((e || 0 !== n) && ii(t, a[o], a[n]) <= h) return !0;
      return !1;
    }
  });
  yi._flat = ai;
  var xi = yi.extend({
    options: {
      fill: !0
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      if (this._map) return $e(this._defaultShape(), this._map.options.crs);
      throw new Error("Must add layer to map before using getCenter()");
    },
    _convertLatLngs: function _convertLatLngs(t) {
      var t = yi.prototype._convertLatLngs.call(this, t),
        e = t.length;
      return 2 <= e && t[0] instanceof v && t[0].equals(t[e - 1]) && t.pop(), t;
    },
    _setLatLngs: function _setLatLngs(t) {
      yi.prototype._setLatLngs.call(this, t), I(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function _defaultShape() {
      return (I(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
        e = this.options.weight,
        e = new p(e, e),
        t = new f(t.min.subtract(e), t.max.add(e));
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var i, n = 0, o = this._rings.length; n < o; n++) (i = Je(this._rings[n], t, !0)).length && this._parts.push(i);
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function _containsPoint(t) {
      var e,
        i,
        n,
        o,
        s,
        r,
        a,
        h,
        l = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (o = 0, a = this._parts.length; o < a; o++) for (s = 0, r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++) i = e[s], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
      return l || yi.prototype._containsPoint.call(this, t, !0);
    }
  });
  var wi = ci.extend({
    initialize: function initialize(t, e) {
      c(this, e), this._layers = {}, t && this.addData(t);
    },
    addData: function addData(t) {
      var e,
        i,
        n,
        o = d(t) ? t : t.features;
      if (o) {
        for (e = 0, i = o.length; e < i; e++) ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        return this;
      }
      var s,
        r = this.options;
      return (!r.filter || r.filter(t)) && (s = bi(t, r)) ? (s.feature = Zi(t), s.defaultOptions = s.options, this.resetStyle(s), r.onEachFeature && r.onEachFeature(t, s), this.addLayer(s)) : this;
    },
    resetStyle: function resetStyle(t) {
      return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
    },
    setStyle: function setStyle(e) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, e);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(t, e) {
      t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e));
    }
  });
  function bi(t, e) {
    var i,
      n,
      o,
      s,
      r = "Feature" === t.type ? t.geometry : t,
      a = r ? r.coordinates : null,
      h = [],
      l = e && e.pointToLayer,
      u = e && e.coordsToLatLng || Li;
    if (!a && !r) return null;
    switch (r.type) {
      case "Point":
        return Pi(l, t, i = u(a), e);
      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++) i = u(a[o]), h.push(Pi(l, t, i, e));
        return new ci(h);
      case "LineString":
      case "MultiLineString":
        return n = Ti(a, "LineString" === r.type ? 0 : 1, u), new yi(n, e);
      case "Polygon":
      case "MultiPolygon":
        return n = Ti(a, "Polygon" === r.type ? 1 : 2, u), new xi(n, e);
      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = bi({
            geometry: r.geometries[o],
            type: "Feature",
            properties: t.properties
          }, e);
          c && h.push(c);
        }
        return new ci(h);
      case "FeatureCollection":
        for (o = 0, s = r.features.length; o < s; o++) {
          var d = bi(r.features[o], e);
          d && h.push(d);
        }
        return new ci(h);
      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }
  function Pi(t, e, i, n) {
    return t ? t(e, i) : new mi(i, n && n.markersInheritOptions && n);
  }
  function Li(t) {
    return new v(t[1], t[0], t[2]);
  }
  function Ti(t, e, i) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++) n = e ? Ti(t[s], e - 1, i) : (i || Li)(t[s]), o.push(n);
    return o;
  }
  function Mi(t, e) {
    return void 0 !== (t = w(t)).alt ? [i(t.lng, e), i(t.lat, e), i(t.alt, e)] : [i(t.lng, e), i(t.lat, e)];
  }
  function zi(t, e, i, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? zi(t[s], I(t[s]) ? 0 : e - 1, i, n) : Mi(t[s], n));
    return !e && i && 0 < o.length && o.push(o[0].slice()), o;
  }
  function Ci(t, e) {
    return t.feature ? l({}, t.feature, {
      geometry: e
    }) : Zi(e);
  }
  function Zi(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
      type: "Feature",
      properties: {},
      geometry: t
    };
  }
  Tt = {
    toGeoJSON: function toGeoJSON(t) {
      return Ci(this, {
        type: "Point",
        coordinates: Mi(this.getLatLng(), t)
      });
    }
  };
  function Si(t, e) {
    return new wi(t, e);
  }
  mi.include(Tt), vi.include(Tt), gi.include(Tt), yi.include({
    toGeoJSON: function toGeoJSON(t) {
      var e = !I(this._latlngs);
      return Ci(this, {
        type: (e ? "Multi" : "") + "LineString",
        coordinates: zi(this._latlngs, e ? 1 : 0, !1, t)
      });
    }
  }), xi.include({
    toGeoJSON: function toGeoJSON(t) {
      var e = !I(this._latlngs),
        i = e && !I(this._latlngs[0]),
        t = zi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
      return Ci(this, {
        type: (i ? "Multi" : "") + "Polygon",
        coordinates: t = e ? t : [t]
      });
    }
  }), ui.include({
    toMultiPoint: function toMultiPoint(e) {
      var i = [];
      return this.eachLayer(function (t) {
        i.push(t.toGeoJSON(e).geometry.coordinates);
      }), Ci(this, {
        type: "MultiPoint",
        coordinates: i
      });
    },
    toGeoJSON: function toGeoJSON(e) {
      var i,
        n,
        t = this.feature && this.feature.geometry && this.feature.geometry.type;
      return "MultiPoint" === t ? this.toMultiPoint(e) : (i = "GeometryCollection" === t, n = [], this.eachLayer(function (t) {
        t.toGeoJSON && (t = t.toGeoJSON(e), i ? n.push(t.geometry) : "FeatureCollection" === (t = Zi(t)).type ? n.push.apply(n, t.features) : n.push(t));
      }), i ? Ci(this, {
        geometries: n,
        type: "GeometryCollection"
      }) : {
        type: "FeatureCollection",
        features: n
      });
    }
  });
  var Mt = Si,
    Ei = o.extend({
      options: {
        opacity: 1,
        alt: "",
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: "",
        zIndex: 1,
        className: ""
      },
      initialize: function initialize(t, e, i) {
        this._url = t, this._bounds = g(e), c(this, i);
      },
      onAdd: function onAdd() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (M(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function onRemove() {
        T(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function setOpacity(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      },
      setStyle: function setStyle(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function bringToFront() {
        return this._map && fe(this._image), this;
      },
      bringToBack: function bringToBack() {
        return this._map && ge(this._image), this;
      },
      setUrl: function setUrl(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      setBounds: function setBounds(t) {
        return this._bounds = g(t), this._map && this._reset(), this;
      },
      getEvents: function getEvents() {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function setZIndex(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      getBounds: function getBounds() {
        return this._bounds;
      },
      getElement: function getElement() {
        return this._image;
      },
      _initImage: function _initImage() {
        var t = "IMG" === this._url.tagName,
          e = this._image = t ? this._url : P("img");
        M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), this.options.className && M(e, this.options.className), e.onselectstart = u, e.onmousemove = u, e.onload = a(this.fire, this, "load"), e.onerror = a(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt);
      },
      _animateZoom: function _animateZoom(t) {
        var e = this._map.getZoomScale(t.zoom),
          t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        be(this._image, t, e);
      },
      _reset: function _reset() {
        var t = this._image,
          e = new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          i = e.getSize();
        Z(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
      },
      _updateOpacity: function _updateOpacity() {
        C(this._image, this.options.opacity);
      },
      _updateZIndex: function _updateZIndex() {
        this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function _overlayOnError() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      },
      getCenter: function getCenter() {
        return this._bounds.getCenter();
      }
    }),
    ki = Ei.extend({
      options: {
        autoplay: !0,
        loop: !0,
        keepAspectRatio: !0,
        muted: !1,
        playsInline: !0
      },
      _initImage: function _initImage() {
        var t = "VIDEO" === this._url.tagName,
          e = this._image = t ? this._url : P("video");
        if (M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), this.options.className && M(e, this.options.className), e.onselectstart = u, e.onmousemove = u, e.onloadeddata = a(this.fire, this, "load"), t) {
          for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++) n.push(i[o].src);
          this._url = 0 < i.length ? n : [e.src];
        } else {
          d(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
          for (var s = 0; s < this._url.length; s++) {
            var r = P("source");
            r.src = this._url[s], e.appendChild(r);
          }
        }
      }
    });
  var Oi = Ei.extend({
    _initImage: function _initImage() {
      var t = this._image = this._url;
      M(t, "leaflet-image-layer"), this._zoomAnimated && M(t, "leaflet-zoom-animated"), this.options.className && M(t, this.options.className), t.onselectstart = u, t.onmousemove = u;
    }
  });
  var Ai = o.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: ""
      },
      initialize: function initialize(t, e) {
        t && (t instanceof v || d(t)) ? (this._latlng = w(t), c(this, e)) : (c(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      },
      openOn: function openOn(t) {
        return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this), this;
      },
      close: function close() {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function toggle(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      },
      onAdd: function onAdd(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && C(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && C(this._container, 1), this.bringToFront(), this.options.interactive && (M(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function onRemove(t) {
        t._fadeAnimated ? (C(this._container, 0), this._removeTimeout = setTimeout(a(T, void 0, this._container), 200)) : T(this._container), this.options.interactive && (z(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setLatLng: function setLatLng(t) {
        return this._latlng = w(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      getContent: function getContent() {
        return this._content;
      },
      setContent: function setContent(t) {
        return this._content = t, this.update(), this;
      },
      getElement: function getElement() {
        return this._container;
      },
      update: function update() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function getEvents() {
        var t = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function isOpen() {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function bringToFront() {
        return this._map && fe(this._container), this;
      },
      bringToBack: function bringToBack() {
        return this._map && ge(this._container), this;
      },
      _prepareOpen: function _prepareOpen(t) {
        if (!(i = this._source)._map) return !1;
        if (i instanceof ci) {
          var e,
            i = null,
            n = this._source._layers;
          for (e in n) if (n[e]._map) {
            i = n[e];
            break;
          }
          if (!i) return !1;
          this._source = i;
        }
        if (!t) if (i.getCenter) t = i.getCenter();else if (i.getLatLng) t = i.getLatLng();else {
          if (!i.getBounds) throw new Error("Unable to get source layer LatLng.");
          t = i.getBounds().getCenter();
        }
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function _updateContent() {
        if (this._content) {
          var t = this._contentNode,
            e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
          if ("string" == typeof e) t.innerHTML = e;else {
            for (; t.hasChildNodes();) t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function _updatePosition() {
        var t, e, i;
        this._map && (e = this._map.latLngToLayerPoint(this._latlng), t = m(this.options.offset), i = this._getAnchor(), this._zoomAnimated ? Z(this._container, e.add(i)) : t = t.add(e).add(i), e = this._containerBottom = -t.y, i = this._containerLeft = -Math.round(this._containerWidth / 2) + t.x, this._container.style.bottom = e + "px", this._container.style.left = i + "px");
      },
      _getAnchor: function _getAnchor() {
        return [0, 0];
      }
    }),
    Bi = (A.include({
      _initOverlay: function _initOverlay(t, e, i, n) {
        var o = e;
        return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
      }
    }), o.include({
      _initOverlay: function _initOverlay(t, e, i, n) {
        var o = i;
        return o instanceof t ? (c(o, n), o._source = this) : (o = e && !n ? e : new t(n, this)).setContent(i), o;
      }
    }), Ai.extend({
      options: {
        pane: "popupPane",
        offset: [0, 7],
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: ""
      },
      openOn: function openOn(t) {
        return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, Ai.prototype.openOn.call(this, t);
      },
      onAdd: function onAdd(t) {
        Ai.prototype.onAdd.call(this, t), t.fire("popupopen", {
          popup: this
        }), this._source && (this._source.fire("popupopen", {
          popup: this
        }, !0), this._source instanceof fi || this._source.on("preclick", Ae));
      },
      onRemove: function onRemove(t) {
        Ai.prototype.onRemove.call(this, t), t.fire("popupclose", {
          popup: this
        }), this._source && (this._source.fire("popupclose", {
          popup: this
        }, !0), this._source instanceof fi || this._source.off("preclick", Ae));
      },
      getEvents: function getEvents() {
        var t = Ai.prototype.getEvents.call(this);
        return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function _initLayout() {
        var t = "leaflet-popup",
          e = this._container = P("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
          i = this._wrapper = P("div", t + "-content-wrapper", e);
        this._contentNode = P("div", t + "-content", i), Ie(e), Be(this._contentNode), S(e, "contextmenu", Ae), this._tipContainer = P("div", t + "-tip-container", e), this._tip = P("div", t + "-tip", this._tipContainer), this.options.closeButton && ((i = this._closeButton = P("a", t + "-close-button", e)).setAttribute("role", "button"), i.setAttribute("aria-label", "Close popup"), i.href = "#close", i.innerHTML = '<span aria-hidden="true">&#215;</span>', S(i, "click", function (t) {
          O(t), this.close();
        }, this));
      },
      _updateLayout: function _updateLayout() {
        var t = this._contentNode,
          e = t.style,
          i = (e.width = "", e.whiteSpace = "nowrap", t.offsetWidth),
          i = Math.min(i, this.options.maxWidth),
          i = (i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "", t.offsetHeight),
          n = this.options.maxHeight,
          o = "leaflet-popup-scrolled";
        (n && n < i ? (e.height = n + "px", M) : z)(t, o), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function _animateZoom(t) {
        var t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          e = this._getAnchor();
        Z(this._container, t.add(e));
      },
      _adjustPan: function _adjustPan() {
        var t, e, i, n, o, s, r, a;
        this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), this._autopanning ? this._autopanning = !1 : (t = this._map, e = parseInt(pe(this._container, "marginBottom"), 10) || 0, e = this._container.offsetHeight + e, a = this._containerWidth, (i = new p(this._containerLeft, -e - this._containerBottom))._add(Pe(this._container)), i = t.layerPointToContainerPoint(i), o = m(this.options.autoPanPadding), n = m(this.options.autoPanPaddingTopLeft || o), o = m(this.options.autoPanPaddingBottomRight || o), s = t.getSize(), r = 0, i.x + a + o.x > s.x && (r = i.x + a - s.x + o.x), i.x - r - n.x < (a = 0) && (r = i.x - n.x), i.y + e + o.y > s.y && (a = i.y + e - s.y + o.y), i.y - a - n.y < 0 && (a = i.y - n.y), (r || a) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([r, a]))));
      },
      _getAnchor: function _getAnchor() {
        return m(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    })),
    Ii = (A.mergeOptions({
      closePopupOnClick: !0
    }), A.include({
      openPopup: function openPopup(t, e, i) {
        return this._initOverlay(Bi, t, e, i).openOn(this), this;
      },
      closePopup: function closePopup(t) {
        return (t = arguments.length ? t : this._popup) && t.close(), this;
      }
    }), o.include({
      bindPopup: function bindPopup(t, e) {
        return this._popup = this._initOverlay(Bi, this._popup, t, e), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      unbindPopup: function unbindPopup() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      openPopup: function openPopup(t) {
        return this._popup && (this instanceof ci || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      },
      closePopup: function closePopup() {
        return this._popup && this._popup.close(), this;
      },
      togglePopup: function togglePopup() {
        return this._popup && this._popup.toggle(this), this;
      },
      isPopupOpen: function isPopupOpen() {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function setPopupContent(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function getPopup() {
        return this._popup;
      },
      _openPopup: function _openPopup(t) {
        var e;
        this._popup && this._map && (Re(t), e = t.layer || t.target, this._popup._source !== e || e instanceof fi ? (this._popup._source = e, this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng));
      },
      _movePopup: function _movePopup(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function _onKeyPress(t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      }
    }), Ai.extend({
      options: {
        pane: "tooltipPane",
        offset: [0, 0],
        direction: "auto",
        permanent: !1,
        sticky: !1,
        opacity: .9
      },
      onAdd: function onAdd(t) {
        Ai.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
          tooltip: this
        }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", {
          tooltip: this
        }, !0));
      },
      onRemove: function onRemove(t) {
        Ai.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
          tooltip: this
        }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", {
          tooltip: this
        }, !0));
      },
      getEvents: function getEvents() {
        var t = Ai.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function _initLayout() {
        var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = P("div", t), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + h(this));
      },
      _updateLayout: function _updateLayout() {},
      _adjustPan: function _adjustPan() {},
      _setPosition: function _setPosition(t) {
        var e,
          i = this._map,
          n = this._container,
          o = i.latLngToContainerPoint(i.getCenter()),
          i = i.layerPointToContainerPoint(t),
          s = this.options.direction,
          r = n.offsetWidth,
          a = n.offsetHeight,
          h = m(this.options.offset),
          l = this._getAnchor(),
          i = "top" === s ? (e = r / 2, a) : "bottom" === s ? (e = r / 2, 0) : (e = "center" === s ? r / 2 : "right" === s ? 0 : "left" === s ? r : i.x < o.x ? (s = "right", 0) : (s = "left", r + 2 * (h.x + l.x)), a / 2);
        t = t.subtract(m(e, i, !0)).add(h).add(l), z(n, "leaflet-tooltip-right"), z(n, "leaflet-tooltip-left"), z(n, "leaflet-tooltip-top"), z(n, "leaflet-tooltip-bottom"), M(n, "leaflet-tooltip-" + s), Z(n, t);
      },
      _updatePosition: function _updatePosition() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function setOpacity(t) {
        this.options.opacity = t, this._container && C(this._container, t);
      },
      _animateZoom: function _animateZoom(t) {
        t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(t);
      },
      _getAnchor: function _getAnchor() {
        return m(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    })),
    Ri = (A.include({
      openTooltip: function openTooltip(t, e, i) {
        return this._initOverlay(Ii, t, e, i).openOn(this), this;
      },
      closeTooltip: function closeTooltip(t) {
        return t.close(), this;
      }
    }), o.include({
      bindTooltip: function bindTooltip(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ii, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      unbindTooltip: function unbindTooltip() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function _initTooltipInteractions(t) {
        var e, i;
        !t && this._tooltipHandlersAdded || (e = t ? "off" : "on", i = {
          remove: this.closeTooltip,
          move: this._moveTooltip
        }, this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t);
      },
      openTooltip: function openTooltip(t) {
        return this._tooltip && (this instanceof ci || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      closeTooltip: function closeTooltip() {
        if (this._tooltip) return this._tooltip.close();
      },
      toggleTooltip: function toggleTooltip() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      isTooltipOpen: function isTooltipOpen() {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function setTooltipContent(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function getTooltip() {
        return this._tooltip;
      },
      _addFocusListeners: function _addFocusListeners() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function _addFocusListenersOnLayer(t) {
        var e = "function" == typeof t.getElement && t.getElement();
        e && (S(e, "focus", function () {
          this._tooltip._source = t, this.openTooltip();
        }, this), S(e, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function _setAriaDescribedByOnLayer(t) {
        t = "function" == typeof t.getElement && t.getElement();
        t && t.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function _openTooltip(t) {
        var e;
        this._tooltip && this._map && (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag ? (this._openOnceFlag = !0, (e = this)._map.once("moveend", function () {
          e._openOnceFlag = !1, e._openTooltip(t);
        })) : (this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)));
      },
      _moveTooltip: function _moveTooltip(t) {
        var e = t.latlng;
        this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent), t = this._map.containerPointToLayerPoint(t), e = this._map.layerPointToLatLng(t)), this._tooltip.setLatLng(e);
      }
    }), di.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function createIcon(t) {
        var t = t && "DIV" === t.tagName ? t : document.createElement("div"),
          e = this.options;
        return e.html instanceof Element ? (me(t), t.appendChild(e.html)) : t.innerHTML = !1 !== e.html ? e.html : "", e.bgPos && (e = m(e.bgPos), t.style.backgroundPosition = -e.x + "px " + -e.y + "px"), this._setIconStyles(t, "icon"), t;
      },
      createShadow: function createShadow() {
        return null;
      }
    }));
  di.Default = _i;
  var Ni = o.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: b.mobile,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
    },
    beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    },
    onRemove: function onRemove(t) {
      this._removeAllTiles(), T(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
    },
    bringToFront: function bringToFront() {
      return this._map && (fe(this._container), this._setAutoZIndex(Math.max)), this;
    },
    bringToBack: function bringToBack() {
      return this._map && (ge(this._container), this._setAutoZIndex(Math.min)), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    isLoading: function isLoading() {
      return this._loading;
    },
    redraw: function redraw() {
      var t;
      return this._map && (this._removeAllTiles(), (t = this._clampZoom(this._map.getZoom())) !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update()), this;
    },
    getEvents: function getEvents() {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return this.options.updateWhenIdle || (this._onMove || (this._onMove = j(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    createTile: function createTile() {
      return document.createElement("div");
    },
    getTileSize: function getTileSize() {
      var t = this.options.tileSize;
      return t instanceof p ? t : new p(t, t);
    },
    _updateZIndex: function _updateZIndex() {
      this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function _setAutoZIndex(t) {
      for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
      isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    },
    _updateOpacity: function _updateOpacity() {
      if (this._map && !b.ielt9) {
        C(this._container, this.options.opacity);
        var t,
          e = +new Date(),
          i = !1,
          n = !1;
        for (t in this._tiles) {
          var o,
            s = this._tiles[t];
          s.current && s.loaded && (o = Math.min(1, (e - s.loaded) / 200), C(s.el, o), o < 1 ? i = !0 : (s.active ? n = !0 : this._onOpaqueTile(s), s.active = !0));
        }
        n && !this._noPrune && this._pruneTiles(), i && (r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this));
      }
    },
    _onOpaqueTile: u,
    _initContainer: function _initContainer() {
      this._container || (this._container = P("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    },
    _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
        e = this.options.maxZoom;
      if (void 0 !== t) {
        for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (T(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
        var n = this._levels[t],
          o = this._map;
        return n || ((n = this._levels[t] = {}).el = P("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), u(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n;
      }
    },
    _onUpdateLevel: u,
    _onRemoveLevel: u,
    _onCreateLevel: u,
    _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
          e,
          i,
          n = this._map.getZoom();
        if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();else {
          for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
          for (t in this._tiles) (i = this._tiles[t]).current && !i.active && (e = i.coords, this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) this._removeTile(t);
    },
    _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) T(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
      this._removeAllTiles(), this._tileZoom = void 0;
    },
    _retainParent: function _retainParent(t, e, i, n) {
      var t = Math.floor(t / 2),
        e = Math.floor(e / 2),
        i = i - 1,
        o = new p(+t, +e),
        o = (o.z = i, this._tileCoordsToKey(o)),
        o = this._tiles[o];
      return o && o.active ? o.retain = !0 : (o && o.loaded && (o.retain = !0), n < i && this._retainParent(t, e, i, n));
    },
    _retainChildren: function _retainChildren(t, e, i, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++) for (var s = 2 * e; s < 2 * e + 2; s++) {
        var r = new p(o, s),
          r = (r.z = i + 1, this._tileCoordsToKey(r)),
          r = this._tiles[r];
        r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n));
      }
    },
    _resetView: function _resetView(t) {
      t = t && (t.pinch || t.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), t, t);
    },
    _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function _clampZoom(t) {
      var e = this.options;
      return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t;
    },
    _setView: function _setView(t, e, i, n) {
      var o = Math.round(e),
        o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o),
        s = this.options.updateWhenZooming && o !== this._tileZoom;
      n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
    },
    _setZoomTransforms: function _setZoomTransforms(t, e) {
      for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
    },
    _setZoomTransform: function _setZoomTransform(t, e, i) {
      var n = this._map.getZoomScale(i, t.zoom),
        e = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
      b.any3d ? be(t.el, e, n) : Z(t.el, e);
    },
    _resetGrid: function _resetGrid() {
      var t = this._map,
        e = t.options.crs,
        i = this._tileSize = this.getTileSize(),
        n = this._tileZoom,
        o = this._map.getPixelWorldBounds(this._tileZoom);
      o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var e = this._map,
        i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
        i = e.getZoomScale(i, this._tileZoom),
        t = e.project(t, this._tileZoom).floor(),
        e = e.getSize().divideBy(2 * i);
      return new f(t.subtract(e), t.add(e));
    },
    _update: function _update(t) {
      var e = this._map;
      if (e) {
        var i = this._clampZoom(e.getZoom());
        if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
          var n,
            e = this._getTiledPixelBounds(t),
            o = this._pxBoundsToTileRange(e),
            s = o.getCenter(),
            r = [],
            e = this.options.keepBuffer,
            a = new f(o.getBottomLeft().subtract([e, -e]), o.getTopRight().add([e, -e]));
          if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
          for (n in this._tiles) {
            var h = this._tiles[n].coords;
            h.z === this._tileZoom && a.contains(new p(h.x, h.y)) || (this._tiles[n].current = !1);
          }
          if (1 < Math.abs(i - this._tileZoom)) this._setView(t, i);else {
            for (var l = o.min.y; l <= o.max.y; l++) for (var u = o.min.x; u <= o.max.x; u++) {
              var c,
                d = new p(u, l);
              d.z = this._tileZoom, this._isValidTile(d) && ((c = this._tiles[this._tileCoordsToKey(d)]) ? c.current = !0 : r.push(d));
            }
            if (r.sort(function (t, e) {
              return t.distanceTo(s) - e.distanceTo(s);
            }), 0 !== r.length) {
              this._loading || (this._loading = !0, this.fire("loading"));
              for (var _ = document.createDocumentFragment(), u = 0; u < r.length; u++) this._addTile(r[u], _);
              this._level.el.appendChild(_);
            }
          }
        }
      }
    },
    _isValidTile: function _isValidTile(t) {
      var e = this._map.options.crs;
      if (!e.infinite) {
        var i = this._globalTileRange;
        if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1;
      }
      return !this.options.bounds || (e = this._tileCoordsToBounds(t), g(this.options.bounds).overlaps(e));
    },
    _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function _tileCoordsToNwSe(t) {
      var e = this._map,
        i = this.getTileSize(),
        n = t.scaleBy(i),
        i = n.add(i);
      return [e.unproject(n, t.z), e.unproject(i, t.z)];
    },
    _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      t = this._tileCoordsToNwSe(t), t = new s(t[0], t[1]);
      return t = this.options.noWrap ? t : this._map.wrapLatLngBounds(t);
    },
    _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function _keyToTileCoords(t) {
      var t = t.split(":"),
        e = new p(+t[0], +t[1]);
      return e.z = +t[2], e;
    },
    _removeTile: function _removeTile(t) {
      var e = this._tiles[t];
      e && (T(e.el), delete this._tiles[t], this.fire("tileunload", {
        tile: e.el,
        coords: this._keyToTileCoords(t)
      }));
    },
    _initTile: function _initTile(t) {
      M(t, "leaflet-tile");
      var e = this.getTileSize();
      t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = u, t.onmousemove = u, b.ielt9 && this.options.opacity < 1 && C(t, this.options.opacity);
    },
    _addTile: function _addTile(t, e) {
      var i = this._getTilePos(t),
        n = this._tileCoordsToKey(t),
        o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));
      this._initTile(o), this.createTile.length < 2 && x(a(this._tileReady, this, t, null, o)), Z(o, i), this._tiles[n] = {
        el: o,
        coords: t,
        current: !0
      }, e.appendChild(o), this.fire("tileloadstart", {
        tile: o,
        coords: t
      });
    },
    _tileReady: function _tileReady(t, e, i) {
      e && this.fire("tileerror", {
        error: e,
        tile: i,
        coords: t
      });
      var n = this._tileCoordsToKey(t);
      (i = this._tiles[n]) && (i.loaded = +new Date(), this._map._fadeAnimated ? (C(i.el, 0), r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (M(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
        tile: i.el,
        coords: t
      })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), b.ielt9 || !this._map._fadeAnimated ? x(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
    },
    _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(t) {
      var e = new p(this._wrapX ? H(t.x, this._wrapX) : t.x, this._wrapY ? H(t.y, this._wrapY) : t.y);
      return e.z = t.z, e;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var e = this.getTileSize();
      return new f(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
      return !0;
    }
  });
  var Di = Ni.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1,
      referrerPolicy: !1
    },
    initialize: function initialize(t, e) {
      this._url = t, (e = c(this, e)).detectRetina && b.retina && 0 < e.maxZoom ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
    },
    setUrl: function setUrl(t, e) {
      return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this;
    },
    createTile: function createTile(t, e) {
      var i = document.createElement("img");
      return S(i, "load", a(this._tileOnLoad, this, e, i)), S(i, "error", a(this._tileOnError, this, e, i)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), "string" == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
    },
    getTileUrl: function getTileUrl(t) {
      var e = {
        r: b.retina ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };
      return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y, this.options.tms && (e.y = t), e["-y"] = t), q(this._url, l(e, this.options));
    },
    _tileOnLoad: function _tileOnLoad(t, e) {
      b.ielt9 ? setTimeout(a(t, this, null, e), 0) : t(null, e);
    },
    _tileOnError: function _tileOnError(t, e, i) {
      var n = this.options.errorTileUrl;
      n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
    },
    _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
        e = this.options.maxZoom;
      return (t = this.options.zoomReverse ? e - t : t) + this.options.zoomOffset;
    },
    _getSubdomain: function _getSubdomain(t) {
      t = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[t];
    },
    _abortLoading: function _abortLoading() {
      var t, e, i;
      for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = u, i.onerror = u, i.complete || (i.src = K, e = this._tiles[t].coords, T(i), delete this._tiles[t], this.fire("tileabort", {
        tile: i,
        coords: e
      })));
    },
    _removeTile: function _removeTile(t) {
      var e = this._tiles[t];
      if (e) return e.el.setAttribute("src", K), Ni.prototype._removeTile.call(this, t);
    },
    _tileReady: function _tileReady(t, e, i) {
      if (this._map && (!i || i.getAttribute("src") !== K)) return Ni.prototype._tileReady.call(this, t, e, i);
    }
  });
  function ji(t, e) {
    return new Di(t, e);
  }
  var Hi = Di.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: {
      crs: null,
      uppercase: !1
    },
    initialize: function initialize(t, e) {
      this._url = t;
      var i,
        n = l({}, this.defaultWmsParams);
      for (i in e) i in this.options || (n[i] = e[i]);
      var t = (e = c(this, e)).detectRetina && b.retina ? 2 : 1,
        o = this.getTileSize();
      n.width = o.x * t, n.height = o.y * t, this.wmsParams = n;
    },
    onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
      var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
      this.wmsParams[e] = this._crs.code, Di.prototype.onAdd.call(this, t);
    },
    getTileUrl: function getTileUrl(t) {
      var e = this._tileCoordsToNwSe(t),
        i = this._crs,
        i = _(i.project(e[0]), i.project(e[1])),
        e = i.min,
        i = i.max,
        e = (1.3 <= this._wmsVersion && this._crs === li ? [e.y, e.x, i.y, i.x] : [e.x, e.y, i.x, i.y]).join(","),
        i = Di.prototype.getTileUrl.call(this, t);
      return i + U(this.wmsParams, i, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e;
    },
    setParams: function setParams(t, e) {
      return l(this.wmsParams, t), e || this.redraw(), this;
    }
  });
  Di.WMS = Hi, ji.wms = function (t, e) {
    return new Hi(t, e);
  };
  var Wi = o.extend({
      options: {
        padding: .1
      },
      initialize: function initialize(t) {
        c(this, t), h(this), this._layers = this._layers || {};
      },
      onAdd: function onAdd() {
        this._container || (this._initContainer(), M(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function onRemove() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function getEvents() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function _onAnimZoom(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function _onZoom() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function _updateTransform(t, e) {
        var i = this._map.getZoomScale(e, this._zoom),
          n = this._map.getSize().multiplyBy(.5 + this.options.padding),
          o = this._map.project(this._center, e),
          n = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
        b.any3d ? be(this._container, n, i) : Z(this._container, n);
      },
      _reset: function _reset() {
        for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset();
      },
      _onZoomEnd: function _onZoomEnd() {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function _updatePaths() {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function _update() {
        var t = this.options.padding,
          e = this._map.getSize(),
          i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new f(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }),
    Fi = Wi.extend({
      options: {
        tolerance: 0
      },
      getEvents: function getEvents() {
        var t = Wi.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function _onViewPreReset() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function onAdd() {
        Wi.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function _initContainer() {
        var t = this._container = document.createElement("canvas");
        S(t, "mousemove", this._onMouseMove, this), S(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), S(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function _destroyContainer() {
        r(this._redrawRequest), delete this._ctx, T(this._container), k(this._container), delete this._container;
      },
      _updatePaths: function _updatePaths() {
        if (!this._postponeUpdatePaths) {
          for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
          this._redraw();
        }
      },
      _update: function _update() {
        var t, e, i, n;
        this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), t = this._bounds, e = this._container, i = t.getSize(), n = b.retina ? 2 : 1, Z(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", b.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update"));
      },
      _reset: function _reset() {
        Wi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function _initPath(t) {
        this._updateDashArray(t);
        t = (this._layers[h(t)] = t)._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = t), this._drawLast = t, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function _addPath(t) {
        this._requestRedraw(t);
      },
      _removePath: function _removePath(t) {
        var e = t._order,
          i = e.next,
          e = e.prev;
        i ? i.prev = e : this._drawLast = e, e ? e.next = i : this._drawFirst = i, delete t._order, delete this._layers[h(t)], this._requestRedraw(t);
      },
      _updatePath: function _updatePath(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function _updateStyle(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function _updateDashArray(t) {
        if ("string" == typeof t.options.dashArray) {
          for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < i.length; o++) {
            if (e = Number(i[o]), isNaN(e)) return;
            n.push(e);
          }
          t.options._dashArray = n;
        } else t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function _requestRedraw(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || x(this._redraw, this));
      },
      _extendRedrawBounds: function _extendRedrawBounds(t) {
        var e;
        t._pxBounds && (e = (t.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new f(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e])));
      },
      _redraw: function _redraw() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function _clear() {
        var t,
          e = this._redrawBounds;
        e ? (t = e.getSize(), this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
      },
      _draw: function _draw() {
        var t,
          e,
          i = this._redrawBounds;
        this._ctx.save(), i && (e = i.getSize(), this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()), this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function _updatePoly(t, e) {
        if (this._drawing) {
          var i,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;
          if (a) {
            for (h.beginPath(), i = 0; i < a; i++) {
              for (n = 0, o = r[i].length; n < o; n++) s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
              e && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      },
      _updateCircle: function _updateCircle(t) {
        var e, i, n, o;
        this._drawing && !t._empty() && (e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), 1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 != o && i.restore(), this._fillStroke(i, t));
      },
      _fillStroke: function _fillStroke(t, e) {
        var i = e.options;
        i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
      },
      _onClick: function _onClick(t) {
        for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) (e = o.layer).options.interactive && e._containsPoint(n) && (("click" === t.type || "preclick" === t.type) && this._map._draggableMoved(e) || (i = e));
        this._fireEvent(!!i && [i], t);
      },
      _onMouseMove: function _onMouseMove(t) {
        var e;
        !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t), this._handleMouseHover(t, e));
      },
      _handleMouseOut: function _handleMouseOut(t) {
        var e = this._hoveredLayer;
        e && (z(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function _handleMouseHover(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var i, n, o = this._drawFirst; o; o = o.next) (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
          n !== this._hoveredLayer && (this._handleMouseOut(t), n && (M(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(a(function () {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function _fireEvent(t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t);
      },
      _bringToFront: function _bringToFront(t) {
        var e,
          i,
          n = t._order;
        n && (e = n.next, i = n.prev, e && ((e.prev = i) ? i.next = e : e && (this._drawFirst = e), n.prev = this._drawLast, (this._drawLast.next = n).next = null, this._drawLast = n, this._requestRedraw(t)));
      },
      _bringToBack: function _bringToBack(t) {
        var e,
          i,
          n = t._order;
        n && (e = n.next, (i = n.prev) && ((i.next = e) ? e.prev = i : i && (this._drawLast = i), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t)));
      }
    });
  function Ui(t) {
    return b.canvas ? new Fi(t) : null;
  }
  var Vi = function () {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch (t) {}
      return function (t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(),
    zt = {
      _initContainer: function _initContainer() {
        this._container = P("div", "leaflet-vml-container");
      },
      _update: function _update() {
        this._map._animatingZoom || (Wi.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function _initPath(t) {
        var e = t._container = Vi("shape");
        M(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Vi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[h(t)] = t;
      },
      _addPath: function _addPath(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function _removePath(t) {
        var e = t._container;
        T(e), t.removeInteractiveTarget(e), delete this._layers[h(t)];
      },
      _updateStyle: function _updateStyle(t) {
        var e = t._stroke,
          i = t._fill,
          n = t.options,
          o = t._container;
        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e = e || (t._stroke = Vi("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = d(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i = i || (t._fill = Vi("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
      },
      _updateCircle: function _updateCircle(t) {
        var e = t._point.round(),
          i = Math.round(t._radius),
          n = Math.round(t._radiusY || i);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600");
      },
      _setPath: function _setPath(t, e) {
        t._path.v = e;
      },
      _bringToFront: function _bringToFront(t) {
        fe(t._container);
      },
      _bringToBack: function _bringToBack(t) {
        ge(t._container);
      }
    },
    qi = b.vml ? Vi : ct,
    Gi = Wi.extend({
      _initContainer: function _initContainer() {
        this._container = qi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = qi("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function _destroyContainer() {
        T(this._container), k(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function _update() {
        var t, e, i;
        this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), e = (t = this._bounds).getSize(), i = this._container, this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), Z(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update"));
      },
      _initPath: function _initPath(t) {
        var e = t._path = qi("path");
        t.options.className && M(e, t.options.className), t.options.interactive && M(e, "leaflet-interactive"), this._updateStyle(t), this._layers[h(t)] = t;
      },
      _addPath: function _addPath(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function _removePath(t) {
        T(t._path), t.removeInteractiveTarget(t._path), delete this._layers[h(t)];
      },
      _updatePath: function _updatePath(t) {
        t._project(), t._update();
      },
      _updateStyle: function _updateStyle(t) {
        var e = t._path,
          t = t.options;
        e && (t.stroke ? (e.setAttribute("stroke", t.color), e.setAttribute("stroke-opacity", t.opacity), e.setAttribute("stroke-width", t.weight), e.setAttribute("stroke-linecap", t.lineCap), e.setAttribute("stroke-linejoin", t.lineJoin), t.dashArray ? e.setAttribute("stroke-dasharray", t.dashArray) : e.removeAttribute("stroke-dasharray"), t.dashOffset ? e.setAttribute("stroke-dashoffset", t.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), t.fill ? (e.setAttribute("fill", t.fillColor || t.color), e.setAttribute("fill-opacity", t.fillOpacity), e.setAttribute("fill-rule", t.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function _updatePoly(t, e) {
        this._setPath(t, dt(t._parts, e));
      },
      _updateCircle: function _updateCircle(t) {
        var e = t._point,
          i = Math.max(Math.round(t._radius), 1),
          n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
          e = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
        this._setPath(t, e);
      },
      _setPath: function _setPath(t, e) {
        t._path.setAttribute("d", e);
      },
      _bringToFront: function _bringToFront(t) {
        fe(t._path);
      },
      _bringToBack: function _bringToBack(t) {
        ge(t._path);
      }
    });
  function Ki(t) {
    return b.svg || b.vml ? new Gi(t) : null;
  }
  b.vml && Gi.include(zt), A.include({
    getRenderer: function getRenderer(t) {
      t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
      return this.hasLayer(t) || this.addLayer(t), t;
    },
    _getPaneRenderer: function _getPaneRenderer(t) {
      var e;
      return "overlayPane" !== t && void 0 !== t && (void 0 === (e = this._paneRenderers[t]) && (e = this._createRenderer({
        pane: t
      }), this._paneRenderers[t] = e), e);
    },
    _createRenderer: function _createRenderer(t) {
      return this.options.preferCanvas && Ui(t) || Ki(t);
    }
  });
  var Yi = xi.extend({
    initialize: function initialize(t, e) {
      xi.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
    },
    setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function _boundsToLatLngs(t) {
      return [(t = g(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    }
  });
  Gi.create = qi, Gi.pointsToPath = dt, wi.geometryToLayer = bi, wi.coordsToLatLng = Li, wi.coordsToLatLngs = Ti, wi.latLngToCoords = Mi, wi.latLngsToCoords = zi, wi.getFeature = Ci, wi.asFeature = Zi, A.mergeOptions({
    boxZoom: !0
  });
  var _t = n.extend({
      initialize: function initialize(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function addHooks() {
        S(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function removeHooks() {
        k(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function moved() {
        return this._moved;
      },
      _destroy: function _destroy() {
        T(this._pane), delete this._pane;
      },
      _resetState: function _resetState() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function _clearDeferredResetState() {
        0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function _onMouseDown(t) {
        if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
        this._clearDeferredResetState(), this._resetState(), re(), Le(), this._startPoint = this._map.mouseEventToContainerPoint(t), S(document, {
          contextmenu: Re,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function _onMouseMove(t) {
        this._moved || (this._moved = !0, this._box = P("div", "leaflet-zoom-box", this._container), M(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var t = new f(this._point, this._startPoint),
          e = t.getSize();
        Z(this._box, t.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px";
      },
      _finish: function _finish() {
        this._moved && (T(this._box), z(this._container, "leaflet-crosshair")), ae(), Te(), k(document, {
          contextmenu: Re,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function _onMouseUp(t) {
        1 !== t.which && 1 !== t.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0), t = new s(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(t).fire("boxzoomend", {
          boxZoomBounds: t
        })));
      },
      _onKeyDown: function _onKeyDown(t) {
        27 === t.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    }),
    Ct = (A.addInitHook("addHandler", "boxZoom", _t), A.mergeOptions({
      doubleClickZoom: !0
    }), n.extend({
      addHooks: function addHooks() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function removeHooks() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function _onDoubleClick(t) {
        var e = this._map,
          i = e.getZoom(),
          n = e.options.zoomDelta,
          i = t.originalEvent.shiftKey ? i - n : i + n;
        "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i);
      }
    })),
    Zt = (A.addInitHook("addHandler", "doubleClickZoom", Ct), A.mergeOptions({
      dragging: !0,
      inertia: !0,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: .2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0
    }), n.extend({
      addHooks: function addHooks() {
        var t;
        this._draggable || (t = this._map, this._draggable = new Xe(t._mapPane, t._container), this._draggable.on({
          dragstart: this._onDragStart,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))), M(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function removeHooks() {
        z(this._map._container, "leaflet-grab"), z(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function moved() {
        return this._draggable && this._draggable._moved;
      },
      moving: function moving() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function _onDragStart() {
        var t,
          e = this._map;
        e._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = g(this._map.options.maxBounds), this._offsetLimit = _(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function _onDrag(t) {
        var e, i;
        this._map.options.inertia && (e = this._lastTime = +new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(i), this._times.push(e), this._prunePositions(e)), this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function _prunePositions(t) {
        for (; 1 < this._positions.length && 50 < t - this._times[0];) this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function _onZoomEnd() {
        var t = this._map.getSize().divideBy(2),
          e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function _viscousLimit(t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function _onPreDragLimit() {
        var t, e;
        this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit, t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t));
      },
      _onPreDragWrap: function _onPreDragWrap() {
        var t = this._worldWidth,
          e = Math.round(t / 2),
          i = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - e + i) % t + e - i,
          n = (n + e + i) % t - e - i,
          t = Math.abs(o + i) < Math.abs(n + i) ? o : n;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = t;
      },
      _onDragEnd: function _onDragEnd(t) {
        var e,
          i,
          n,
          o,
          s = this._map,
          r = s.options,
          a = !r.inertia || t.noInertia || this._times.length < 2;
        s.fire("dragend", t), !a && (this._prunePositions(+new Date()), t = this._lastPos.subtract(this._positions[0]), a = (this._lastTime - this._times[0]) / 1e3, e = r.easeLinearity, a = (t = t.multiplyBy(e / a)).distanceTo([0, 0]), i = Math.min(r.inertiaMaxSpeed, a), t = t.multiplyBy(i / a), n = i / (r.inertiaDeceleration * e), (o = t.multiplyBy(-n / 2).round()).x || o.y) ? (o = s._limitOffset(o, s.options.maxBounds), x(function () {
          s.panBy(o, {
            duration: n,
            easeLinearity: e,
            noMoveStart: !0,
            animate: !0
          });
        })) : s.fire("moveend");
      }
    })),
    St = (A.addInitHook("addHandler", "dragging", Zt), A.mergeOptions({
      keyboard: !0,
      keyboardPanDelta: 80
    }), n.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function initialize(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function addHooks() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), S(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function removeHooks() {
        this._removeHooks(), k(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function _onMouseDown() {
        var t, e, i;
        this._focused || (i = document.body, t = document.documentElement, e = i.scrollTop || t.scrollTop, i = i.scrollLeft || t.scrollLeft, this._map._container.focus(), window.scrollTo(i, e));
      },
      _onFocus: function _onFocus() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function _onBlur() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function _setPanDelta(t) {
        for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, o = i.left.length; n < o; n++) e[i.left[n]] = [-1 * t, 0];
        for (n = 0, o = i.right.length; n < o; n++) e[i.right[n]] = [t, 0];
        for (n = 0, o = i.down.length; n < o; n++) e[i.down[n]] = [0, t];
        for (n = 0, o = i.up.length; n < o; n++) e[i.up[n]] = [0, -1 * t];
      },
      _setZoomDelta: function _setZoomDelta(t) {
        for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
        for (n = 0, o = i.zoomOut.length; n < o; n++) e[i.zoomOut[n]] = -t;
      },
      _addHooks: function _addHooks() {
        S(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function _removeHooks() {
        k(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function _onKeyDown(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e,
            i,
            n = t.keyCode,
            o = this._map;
          if (n in this._panKeys) o._panAnim && o._panAnim._inProgress || (i = this._panKeys[n], t.shiftKey && (i = m(i).multiplyBy(3)), o.options.maxBounds && (i = o._limitOffset(m(i), o.options.maxBounds)), o.options.worldCopyJump ? (e = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))), o.panTo(e)) : o.panBy(i));else if (n in this._zoomKeys) o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);else {
            if (27 !== n || !o._popup || !o._popup.options.closeOnEscapeKey) return;
            o.closePopup();
          }
          Re(t);
        }
      }
    })),
    Et = (A.addInitHook("addHandler", "keyboard", St), A.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60
    }), n.extend({
      addHooks: function addHooks() {
        S(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function removeHooks() {
        k(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function _onWheelScroll(t) {
        var e = He(t),
          i = this._map.options.wheelDebounceTime,
          e = (this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date()), Math.max(i - (+new Date() - this._startTime), 0));
        clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), e), Re(t);
      },
      _performZoom: function _performZoom() {
        var t = this._map,
          e = t.getZoom(),
          i = this._map.options.zoomSnap || 0,
          n = (t._stop(), this._delta / (4 * this._map.options.wheelPxPerZoomLevel)),
          n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          i = i ? Math.ceil(n / i) * i : n,
          n = t._limitZoom(e + (0 < this._delta ? i : -i)) - e;
        this._delta = 0, this._startTime = null, n && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + n) : t.setZoomAround(this._lastMousePos, e + n));
      }
    })),
    kt = (A.addInitHook("addHandler", "scrollWheelZoom", Et), A.mergeOptions({
      tapHold: b.touchNative && b.safari && b.mobile,
      tapTolerance: 15
    }), n.extend({
      addHooks: function addHooks() {
        S(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function removeHooks() {
        k(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function _onDown(t) {
        var e;
        clearTimeout(this._holdTimeout), 1 === t.touches.length && (e = t.touches[0], this._startPos = this._newPos = new p(e.clientX, e.clientY), this._holdTimeout = setTimeout(a(function () {
          this._cancel(), this._isTapValid() && (S(document, "touchend", O), S(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
        }, this), 600), S(document, "touchend touchcancel contextmenu", this._cancel, this), S(document, "touchmove", this._onMove, this));
      },
      _cancelClickPrevent: function t() {
        k(document, "touchend", O), k(document, "touchend touchcancel", t);
      },
      _cancel: function _cancel() {
        clearTimeout(this._holdTimeout), k(document, "touchend touchcancel contextmenu", this._cancel, this), k(document, "touchmove", this._onMove, this);
      },
      _onMove: function _onMove(t) {
        t = t.touches[0];
        this._newPos = new p(t.clientX, t.clientY);
      },
      _isTapValid: function _isTapValid() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function _simulateEvent(t, e) {
        t = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY
        });
        t._simulated = !0, e.target.dispatchEvent(t);
      }
    })),
    Ot = (A.addInitHook("addHandler", "tapHold", kt), A.mergeOptions({
      touchZoom: b.touch,
      bounceAtZoomLimits: !0
    }), n.extend({
      addHooks: function addHooks() {
        M(this._map._container, "leaflet-touch-zoom"), S(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function removeHooks() {
        z(this._map._container, "leaflet-touch-zoom"), k(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function _onTouchStart(t) {
        var e,
          i,
          n = this._map;
        !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]), i = n.mouseEventToContainerPoint(t.touches[1]), this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))), this._startDist = e.distanceTo(i), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), S(document, "touchmove", this._onTouchMove, this), S(document, "touchend touchcancel", this._onTouchEnd, this), O(t));
      },
      _onTouchMove: function _onTouchMove(t) {
        if (t.touches && 2 === t.touches.length && this._zooming) {
          var e = this._map,
            i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]),
            o = i.distanceTo(n) / this._startDist;
          if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
            if (this._center = this._startLatLng, 1 == o) return;
          } else {
            i = i._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (1 == o && 0 === i.x && 0 === i.y) return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(i), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), r(this._animRequest);
          n = a(e._move, e, this._center, this._zoom, {
            pinch: !0,
            round: !1
          }, void 0);
          this._animRequest = x(n, this, !0), O(t);
        }
      },
      _onTouchEnd: function _onTouchEnd() {
        this._moved && this._zooming ? (this._zooming = !1, r(this._animRequest), k(document, "touchmove", this._onTouchMove, this), k(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
      }
    })),
    Xi = (A.addInitHook("addHandler", "touchZoom", Ot), A.BoxZoom = _t, A.DoubleClickZoom = Ct, A.Drag = Zt, A.Keyboard = St, A.ScrollWheelZoom = Et, A.TapHold = kt, A.TouchZoom = Ot, t.Bounds = f, t.Browser = b, t.CRS = ot, t.Canvas = Fi, t.Circle = vi, t.CircleMarker = gi, t.Class = et, t.Control = B, t.DivIcon = Ri, t.DivOverlay = Ai, t.DomEvent = mt, t.DomUtil = pt, t.Draggable = Xe, t.Evented = it, t.FeatureGroup = ci, t.GeoJSON = wi, t.GridLayer = Ni, t.Handler = n, t.Icon = di, t.ImageOverlay = Ei, t.LatLng = v, t.LatLngBounds = s, t.Layer = o, t.LayerGroup = ui, t.LineUtil = vt, t.Map = A, t.Marker = mi, t.Mixin = ft, t.Path = fi, t.Point = p, t.PolyUtil = gt, t.Polygon = xi, t.Polyline = yi, t.Popup = Bi, t.PosAnimation = Fe, t.Projection = wt, t.Rectangle = Yi, t.Renderer = Wi, t.SVG = Gi, t.SVGOverlay = Oi, t.TileLayer = Di, t.Tooltip = Ii, t.Transformation = at, t.Util = tt, t.VideoOverlay = ki, t.bind = a, t.bounds = _, t.canvas = Ui, t.circle = function (t, e, i) {
      return new vi(t, e, i);
    }, t.circleMarker = function (t, e) {
      return new gi(t, e);
    }, t.control = Ue, t.divIcon = function (t) {
      return new Ri(t);
    }, t.extend = l, t.featureGroup = function (t, e) {
      return new ci(t, e);
    }, t.geoJSON = Si, t.geoJson = Mt, t.gridLayer = function (t) {
      return new Ni(t);
    }, t.icon = function (t) {
      return new di(t);
    }, t.imageOverlay = function (t, e, i) {
      return new Ei(t, e, i);
    }, t.latLng = w, t.latLngBounds = g, t.layerGroup = function (t, e) {
      return new ui(t, e);
    }, t.map = function (t, e) {
      return new A(t, e);
    }, t.marker = function (t, e) {
      return new mi(t, e);
    }, t.point = m, t.polygon = function (t, e) {
      return new xi(t, e);
    }, t.polyline = function (t, e) {
      return new yi(t, e);
    }, t.popup = function (t, e) {
      return new Bi(t, e);
    }, t.rectangle = function (t, e) {
      return new Yi(t, e);
    }, t.setOptions = c, t.stamp = h, t.svg = Ki, t.svgOverlay = function (t, e, i) {
      return new Oi(t, e, i);
    }, t.tileLayer = ji, t.tooltip = function (t, e) {
      return new Ii(t, e);
    }, t.transformation = ht, t.version = "1.9.4", t.videoOverlay = function (t, e, i) {
      return new ki(t, e, i);
    }, window.L);
  t.noConflict = function () {
    return window.L = Xi, this;
  }, window.L = t;
});

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js ***!
  \********************************************************************************************/
/***/ (() => {

(function (global, doc, React, ReactDOM, ibexa) {
  var contentTreeContainer = doc.querySelector('.ibexa-content-tree-container');
  if (!contentTreeContainer) {
    return;
  }
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var contentTreeRootElement = doc.querySelector('.ibexa-content-tree-container__root');
  var _contentTreeContainer = contentTreeContainer.dataset,
    currentLocationPath = _contentTreeContainer.currentLocationPath,
    treeRootLocationId = _contentTreeContainer.treeRootLocationId;
  var userId = window.ibexa.helpers.user.getId();
  var removeContentTreeContainerWidth = function removeContentTreeContainerWidth(event) {
    if (event.detail.id !== 'ibexa-content-tree') {
      return;
    }
    contentTreeContainer.style.width = null;
  };
  var renderTree = function renderTree() {
    var contentTreeRoot = ReactDOM.createRoot(contentTreeRootElement);
    contentTreeRoot.render(React.createElement(ibexa.modules.ContentTree, {
      userId: userId,
      currentLocationPath: currentLocationPath,
      rootLocationId: parseInt(treeRootLocationId, 10),
      restInfo: {
        token: token,
        siteaccess: siteaccess
      }
    }));
  };
  doc.body.addEventListener('ibexa-tb-rendered', removeContentTreeContainerWidth);
  renderTree();
})(window, window.document, window.React, window.ReactDOM, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js ***!
  \*******************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var modal = doc.querySelector('#ibexa-modal--custom-url-alias');
  if (modal) {
    var discardBtns = modal.querySelectorAll('[data-bs-dismiss="modal"]');
    var submitBtn = modal.querySelector('#custom_url_add_add');
    var input = modal.querySelector('[required="required"]');
    var siteRootCheckbox = modal.querySelector('[name="custom_url_add[site_root]"]');
    var toggleButtonState = function toggleButtonState() {
      var hasValue = input.value.trim().length !== 0;
      var methodName = hasValue ? 'removeAttribute' : 'setAttribute';
      submitBtn[methodName]('disabled', true);
    };
    var clearValues = function clearValues() {
      input.value = '';
      toggleButtonState();
    };
    var toggleSiteAccessSelect = function toggleSiteAccessSelect(event) {
      var isChecked = event.target.checked;
      var siteAccessSelect = modal.querySelector('.ibexa-custom-url-from__item--siteacces .ibexa-dropdown');
      siteAccessSelect.classList.toggle('ibexa-dropdown--is-disabled', isChecked);
    };
    input.addEventListener('input', toggleButtonState, false);
    siteRootCheckbox.addEventListener('change', toggleSiteAccessSelect, false);
    discardBtns.forEach(function (btn) {
      return btn.addEventListener('click', clearValues, false);
    });
  }
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.bookmark.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.bookmark.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var ENDPOINT_BOOKMARK = '/api/ibexa/v2/bookmark';
  var SELECTOR_BOOKMARK_WRAPPER = '.ibexa-add-to-bookmarks';
  var CLASS_BOOKMARK_CHECKED = 'ibexa-add-to-bookmarks--checked';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var bookmarkWrapper = doc.querySelector(SELECTOR_BOOKMARK_WRAPPER);
  if (!bookmarkWrapper) {
    return;
  }
  var currentLocationId = parseInt(bookmarkWrapper.getAttribute('data-location-id'), 10);
  var handleUpdateError = ibexa.helpers.notification.showErrorNotification;
  var isUpdatingBookmark = false;
  var getResponseStatus = function getResponseStatus(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.status;
  };
  var handleBookmarkUpdated = function handleBookmarkUpdated(isBookmarked) {
    ibexa.helpers.tooltips.hideAll();
    isUpdatingBookmark = false;
    doc.body.dispatchEvent(new CustomEvent('ibexa-bookmark-change', {
      detail: {
        bookmarked: isBookmarked,
        locationId: currentLocationId
      }
    }));
  };
  var updateBookmark = function updateBookmark(addBookmark) {
    if (isUpdatingBookmark) {
      return;
    }
    isUpdatingBookmark = true;
    var method = addBookmark ? 'POST' : 'DELETE';
    var request = new Request("".concat(ENDPOINT_BOOKMARK, "/").concat(currentLocationId), {
      method: method,
      headers: {
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(getResponseStatus).then(handleBookmarkUpdated.bind(null, addBookmark))["catch"](handleUpdateError);
  };
  var isCurrentLocation = function isCurrentLocation(locationId) {
    return parseInt(locationId, 10) === currentLocationId;
  };
  var toggleBookmarkIconState = function toggleBookmarkIconState(isBookmarked) {
    bookmarkWrapper.classList.toggle(CLASS_BOOKMARK_CHECKED, isBookmarked);
  };
  var updateBookmarkIconState = function updateBookmarkIconState(_ref) {
    var detail = _ref.detail;
    var bookmarked = detail.bookmarked,
      locationId = detail.locationId;
    if (isCurrentLocation(locationId)) {
      toggleBookmarkIconState(bookmarked);
    }
  };
  var handleBookmarkClick = function handleBookmarkClick() {
    var isBookmarked = bookmarkWrapper.classList.contains(CLASS_BOOKMARK_CHECKED);
    updateBookmark(!isBookmarked);
  };
  doc.body.addEventListener('ibexa-bookmark-change', updateBookmarkIconState, false);
  if (bookmarkWrapper) {
    bookmarkWrapper.addEventListener('click', handleBookmarkClick, false);
  }
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js ***!
  \********************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var changeLocationLanguage = function changeLocationLanguage(event) {
    global.location = event.currentTarget.value;
  };
  var locationLanguageSwitchers = doc.querySelectorAll('.ibexa-location-language-change');
  locationLanguageSwitchers.forEach(function (locationLanguageSwitcher) {
    locationLanguageSwitcher.addEventListener('change', changeLocationLanguage, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.load.map.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.load.map.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc, Leaflet) {
  doc.querySelectorAll('.ibexa-gmaplocation__map').forEach(function (mapLocation) {
    var latitude = parseFloat(mapLocation.dataset.latitude);
    var longitude = parseFloat(mapLocation.dataset.longitude);
    var map = Leaflet.map(mapLocation, {
      zoom: 15,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: false,
      tap: false,
      center: [latitude, longitude]
    });
    Leaflet.marker([latitude, longitude], {
      icon: new Leaflet.Icon.Default({
        imagePath: '/bundles/ibexaadminuiassets/vendors/leaflet/dist/images/'
      })
    }).addTo(map);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  });
})(window, window.document, window.L);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tooglecontentpreview.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tooglecontentpreview.js ***!
  \*************************************************************************************************************/
/***/ (() => {

(function (global, doc, localStorage, bootstrap) {
  var CONTENT_PREVIEW_COLLAPSE_SELECTOR = '.ibexa-content-preview-collapse';
  var DEFAULT_CONTENT_PREVIEW_TOGGLE_STATE_KEY = 'ibexa-content-preview-collapsed';
  var getStateKey = function getStateKey(collapseTarget) {
    return collapseTarget.dataset.collapseStateKey || DEFAULT_CONTENT_PREVIEW_TOGGLE_STATE_KEY;
  };
  var getContentPreviewToggleState = function getContentPreviewToggleState(collapsable) {
    var stateKey = getStateKey(collapsable);
    var value = localStorage.getItem(stateKey);
    return !!JSON.parse(value);
  };
  var setContentPreviewToggleState = function setContentPreviewToggleState(event, value) {
    var stateKey = getStateKey(event.target);
    localStorage.setItem(stateKey, value);
  };
  doc.querySelectorAll(CONTENT_PREVIEW_COLLAPSE_SELECTOR).forEach(function (collapsable) {
    new bootstrap.Collapse(collapsable, {
      toggle: getContentPreviewToggleState(collapsable)
    });
    collapsable.addEventListener('hide.bs.collapse', function (event) {
      return setContentPreviewToggleState(event, true);
    });
    collapsable.addEventListener('show.bs.collapse', function (event) {
      return setContentPreviewToggleState(event, false);
    });
  });
})(window, window.document, window.localStorage, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.update.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.update.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var updateMainLocation = function updateMainLocation(event) {
    doc.querySelector('#content_main_location_update_location').value = event.target.value;
    doc.querySelector('form[name="content_main_location_update"]').submit();
  };
  doc.querySelectorAll('input[name="updateMainLocation"]').forEach(function (input) {
    return input.addEventListener('change', updateMainLocation, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.view.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.view.js ***!
  \*********************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, localStorage, bootstrap, React, ReactDOM, ibexa, Routing, Translator) {
  var SELECTOR_MODAL_BULK_ACTION_FAIL = '#bulk-action-failed-modal';
  var listContainers = doc.querySelectorAll('.ibexa-sil');
  var mfuContainer = doc.querySelector('#ibexa-mfu');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var emdedItemsUpdateChannel = new BroadcastChannel('ibexa-emded-item-live-update');
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var publishedContentId = urlParams.get('publishedContentId');
  var sendForm = function sendForm() {
    doc.querySelector('#form_subitems_content_edit_create').click();
  };
  var updateForm = function updateForm(contentId, languageCode) {
    doc.querySelector('#form_subitems_content_edit_content_info').value = contentId;
    doc.querySelector("#form_subitems_content_edit_language_".concat(languageCode)).checked = true;
  };
  var handleEditItem = function handleEditItem(content, location, isLanguageSelectorOpened) {
    var contentId = content._id;
    var locationId = location._id;
    var languageCode = content.mainLanguageCode;
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode,
      locationId: locationId
    });
    var addDraft = function addDraft() {
      updateForm(contentId, languageCode);
      sendForm();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
    };
    var attachModalListeners = function attachModalListeners(wrapper) {
      var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
      var conflictModal = doc.querySelector('#version-draft-conflict-modal');
      if (addDraftButton) {
        addDraftButton.addEventListener('click', addDraft, false);
      }
      wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
        return btn.addEventListener('click', function (event) {
          return event.preventDefault();
        }, false);
      });
      if (conflictModal) {
        bootstrap.Modal.getOrCreateInstance(conflictModal).show();
        conflictModal.addEventListener('shown.bs.modal', function () {
          return ibexa.helpers.tooltips.parse();
        });
        conflictModal.addEventListener('hide.bs.modal', function () {
          doc.body.dispatchEvent(new CustomEvent('ibexa:edit-content-reset-language-selector'));
        });
      }
    };
    var showModal = function showModal(modalHtml) {
      var wrapper = doc.querySelector('.ibexa-modal-wrapper');
      wrapper.innerHTML = modalHtml;
      attachModalListeners(wrapper);
    };
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: content.mainLanguageCode
    });
    var errorMessage = Translator.trans(/*@Desc("You don't have permission to edit this Content item")*/'content.edit.permission.error', {}, 'ibexa_content');
    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(checkVersionDraftLink, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
      throw new Error(errorMessage);
    };
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(function (response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 200) {
        updateForm(contentId, languageCode);
        if (!isLanguageSelectorOpened) {
          sendForm();
        }
      }
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var generateLink = function generateLink(locationId, contentId) {
    return Routing.generate('ibexa.content.view', {
      contentId: contentId,
      locationId: locationId
    });
  };
  var setModalTableTitle = function setModalTableTitle(title) {
    var modalTableTitleNode = doc.querySelector("".concat(SELECTOR_MODAL_BULK_ACTION_FAIL, " .ibexa-table-header__headline"));
    modalTableTitleNode.innerHTML = title;
    modalTableTitleNode.setAttribute('title', title);
    modalTableTitleNode.dataset.originalTitle = title;
  };
  var setModalTableBody = function setModalTableBody(failedItemsData) {
    var modal = doc.querySelector(SELECTOR_MODAL_BULK_ACTION_FAIL);
    var table = modal.querySelector('.ibexa-bulk-action-failed-modal__table');
    var tableBody = table.querySelector('.ibexa-bulk-action-failed-modal__table-body');
    var rowTemplate = table.dataset.rowTemplate;
    var fragment = doc.createDocumentFragment();
    failedItemsData.forEach(function (_ref) {
      var contentName = _ref.contentName,
        contentTypeName = _ref.contentTypeName;
      var container = doc.createElement('tbody');
      var renderedItem = rowTemplate.replace('{{ content_name }}', contentName).replace('{{ content_type_name }}', contentTypeName);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var tableRowNode = container.querySelector('tr');
      fragment.append(tableRowNode);
    });
    removeNodeChildren(tableBody);
    tableBody.append(fragment);
  };
  var removeNodeChildren = function removeNodeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };
  var showBulkActionFailedModal = function showBulkActionFailedModal(tableTitle, failedItemsData) {
    setModalTableBody(failedItemsData);
    setModalTableTitle(tableTitle);
    bootstrap.Modal.getOrCreateInstance(doc.querySelector(SELECTOR_MODAL_BULK_ACTION_FAIL)).show();
  };
  var getLocationActiveView = function getLocationActiveView(parentLocationId) {
    var mediaLocationId = ibexa.adminUiConfig.locations.media;
    var defaultActiveView = parentLocationId === mediaLocationId ? 'grid' : 'table';
    var activeView = localStorage.getItem("ibexa-subitems-active-view-location-".concat(parentLocationId));
    return activeView || defaultActiveView;
  };
  listContainers.forEach(function (container) {
    var sortField = container.getAttribute('data-sort-field');
    var sortOrder = container.getAttribute('data-sort-order');
    var subitemsRoot = ReactDOM.createRoot(container);
    var parentLocationId = parseInt(container.dataset.location, 10);
    var activeView = getLocationActiveView(parentLocationId);
    var subItemsList = JSON.parse(container.dataset.items).SubitemsList;
    var items = subItemsList.SubitemsRow.map(function (item) {
      return {
        content: item.Content,
        location: item.Location
      };
    });
    var contentTypes = JSON.parse(container.dataset.contentTypes).ContentTypeInfoList.ContentType;
    var contentTypesMap = contentTypes.reduce(function (total, item) {
      total[item._href] = item;
      return total;
    }, {});
    var udwConfigBulkMoveItems = JSON.parse(container.dataset.udwConfigBulkMoveItems);
    var udwConfigBulkAddLocation = JSON.parse(container.dataset.udwConfigBulkAddLocation);
    var mfuContentTypesMap = Object.values(ibexa.adminUiConfig.contentTypes).reduce(function (contentTypeDataMap, contentTypeGroup) {
      var _iterator = _createForOfIteratorHelper(contentTypeGroup),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var contentTypeData = _step.value;
          contentTypeDataMap[contentTypeData.href] = contentTypeData;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return contentTypeDataMap;
    }, {});
    var mfuAttrs = {
      adminUiConfig: _objectSpread(_objectSpread({}, ibexa.adminUiConfig), {}, {
        token: token,
        siteaccess: siteaccess
      }),
      parentInfo: {
        contentTypeIdentifier: mfuContainer.dataset.parentContentTypeIdentifier,
        locationPath: mfuContainer.dataset.parentLocationPath,
        name: mfuContainer.dataset.parentName,
        language: mfuContainer.dataset.parentContentLanguage
      },
      currentLanguage: mfuContainer.dataset.currentLanguage
    };
    subitemsRoot.render(React.createElement(ibexa.modules.SubItems, {
      handleEditItem: handleEditItem,
      generateLink: generateLink,
      activeView: activeView,
      parentLocationId: parentLocationId,
      sortClauses: _defineProperty({}, sortField, sortOrder),
      restInfo: {
        token: token,
        siteaccess: siteaccess
      },
      extraActions: [{
        component: ibexa.modules.MultiFileUpload,
        attrs: _objectSpread(_objectSpread({}, mfuAttrs), {}, {
          onPopupClose: function onPopupClose(itemsUploaded) {
            return itemsUploaded.length && global.location.reload(true);
          },
          contentCreatePermissionsConfig: JSON.parse(container.dataset.mfuCreatePermissionsConfig),
          contentTypesMap: mfuContentTypesMap
        })
      }],
      items: items,
      contentTypesMap: contentTypesMap,
      totalCount: subItemsList.ChildrenCount,
      udwConfigBulkMoveItems: udwConfigBulkMoveItems,
      udwConfigBulkAddLocation: udwConfigBulkAddLocation,
      showBulkActionFailedModal: showBulkActionFailedModal
    }));
  });
  doc.body.addEventListener('ibexa-sub-items:submit-version-edit-form', function () {
    sendForm();
  }, false);
  if (publishedContentId) {
    emdedItemsUpdateChannel.postMessage({
      contentId: publishedContentId
    });
  }
})(window, window.document, window.localStorage, window.bootstrap, window.React, window.ReactDOM, window.ibexa, window.Routing, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.visibility.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.visibility.js ***!
  \***************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var SELECTOR_VISIBILITY_CHECKBOXES = '#ibexa-tab-location-view-locations .ibexa-content-locations__visibility-checkbox';
  var SELECTOR_VISIBILITY_FORM = 'form[name="location_update_visibility_data"]';
  var form = doc.querySelector(SELECTOR_VISIBILITY_FORM);
  var visibilityCheckboxes = doc.querySelectorAll(SELECTOR_VISIBILITY_CHECKBOXES);
  var refreshContentTree = function refreshContentTree() {
    doc.body.dispatchEvent(new CustomEvent('ibexa-content-tree-refresh'));
  };
  var onVisibilityUpdated = function onVisibilityUpdated(_ref) {
    var target = _ref.target;
    var toggleLabel = target.closest('.ibexa-content-locations__visibility-toggler').querySelector('.ibexa-content-locations__visibility-toggler-label');
    toggleLabel.classList.toggle('ibexa-content-locations__visibility-toggler-label--hidden');
  };
  var handleUpdateError = ibexa.helpers.notification.showErrorNotification;
  var handleUpdateSuccess = function handleUpdateSuccess(event, _ref2) {
    var message = _ref2.message;
    onVisibilityUpdated(event);
    ibexa.helpers.notification.showSuccessNotification(message);
    refreshContentTree();
  };
  var handleUpdateResponse = function handleUpdateResponse(response) {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.json();
  };
  var updateVisibility = function updateVisibility(event) {
    form.querySelector('#location_update_visibility_data_location').value = event.target.value;
    form.querySelector('#location_update_visibility_data_hidden').checked = !event.target.checked;
    var request = new Request(form.action, {
      method: 'POST',
      body: new FormData(form),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(handleUpdateResponse).then(handleUpdateSuccess.bind(null, event))["catch"](handleUpdateError);
  };
  visibilityCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', updateVisibility, false);
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.main.translation.update.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.main.translation.update.js ***!
  \*******************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var updateMainTranslation = function updateMainTranslation(event) {
    doc.querySelector('#main_translation_update_language_code').value = event.target.value;
    doc.querySelector('form[name="main_translation_update"]').submit();
  };
  var inputs = doc.querySelectorAll('input[name="main_translation_update"]');
  inputs.forEach(function (input) {
    return input.addEventListener('change', updateMainTranslation, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, ibexa, Translator, Routing) {
  var editVersion = function editVersion(event) {
    var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
    var _event$currentTarget$ = event.currentTarget.dataset,
      contentDraftEditUrl = _event$currentTarget$.contentDraftEditUrl,
      versionHasConflictUrl = _event$currentTarget$.versionHasConflictUrl,
      contentId = _event$currentTarget$.contentId,
      languageCode = _event$currentTarget$.languageCode;
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(/*@Desc("You don't have permission to edit this Content item")*/'content.edit.permission.error', {}, 'ibexa_content');
    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(versionHasConflictUrl, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
      throw new Error(errorMessage);
    };
    var handleVersionDraftConflict = function handleVersionDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        doc.querySelector('#edit-conflicted-draft').href = contentDraftEditUrl;
        bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-conflict-modal')).show();
      }
      if (response.status === 403) {
        response.text().then(showErrorNotification);
      }
      if (response.status === 200) {
        global.location.href = contentDraftEditUrl;
      }
    };
    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleVersionDraftConflict)["catch"](showErrorNotification);
  };
  doc.querySelectorAll('.ibexa-btn--content-draft-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.bootstrap, window.ibexa, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, ibexa, Translator, Routing) {
  var FORM_EDIT = 'form.ibexa-edit-content-form';
  var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
  var editVersion = function editVersion(event) {
    var versionEditForm = doc.querySelector(FORM_EDIT);
    var versionEditFormName = versionEditForm.name;
    var _event$currentTarget$ = event.currentTarget.dataset,
      contentId = _event$currentTarget$.contentId,
      versionNo = _event$currentTarget$.versionNo,
      languageCode = _event$currentTarget$.languageCode,
      withConfirm = _event$currentTarget$.withConfirm;
    var contentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[content_info]\"]"));
    var versionInfoContentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][content_info]\"]"));
    var versionInfoVersionNoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][version_no]\"]"));
    var languageInput = versionEditForm.querySelector("#".concat(versionEditFormName, "_language_").concat(languageCode));
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode
    });
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(/*@Desc("You don't have permission to edit this Content item")*/'content.edit.permission.error', {}, 'ibexa_content');
    var submitVersionEditForm = function submitVersionEditForm() {
      contentInfoInput.value = contentId;
      versionInfoContentInfoInput.value = contentId;
      versionInfoVersionNoInput.value = versionNo !== undefined ? versionNo : null;
      languageInput.checked = true;
      versionEditForm.submit();
    };
    var addDraft = function addDraft() {
      submitVersionEditForm();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
    };
    var showModal = function showModal(modalHtml) {
      var wrapper = doc.querySelector('.ibexa-modal-wrapper');
      wrapper.innerHTML = modalHtml;
      var conflictModal = doc.querySelector('#version-draft-conflict-modal');
      var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
      if (addDraftButton) {
        addDraftButton.addEventListener('click', addDraft, false);
      }
      wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
        return btn.addEventListener('click', function (wrapperBtnEvent) {
          return wrapperBtnEvent.preventDefault();
        }, false);
      });
      bootstrap.Modal.getOrCreateInstance(conflictModal).show();
      conflictModal.addEventListener('hide.bs.modal', function () {
        doc.body.dispatchEvent(new CustomEvent('ibexa:edit-content-reset-language-selector'));
      });
    };
    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(checkVersionDraftLink, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
      throw new Error(errorMessage);
    };
    var handleDraftConflict = function handleDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 403) {
        response.text().then(showErrorNotification);
      } else if (response.status === 200) {
        if (!withConfirm) {
          submitVersionEditForm();
        }
      }
    };
    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleDraftConflict)["catch"](showErrorNotification);
  };
  doc.querySelectorAll('.ibexa-btn--content-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.bootstrap, window.ibexa, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \*********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ibexa-toggle-btn-state');
  toggleForms.forEach(function (toggleForm) {
    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ibexa-table__cell--has-checkbox .ibexa-input--checkbox'));
    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);
    if (!buttonRemove) {
      return;
    }
    var toggleButtonState = function toggleButtonState() {
      var isAnythingSelected = checkboxes.some(function (el) {
        return el.checked;
      });
      buttonRemove.disabled = !isAnythingSelected;
    };
    toggleButtonState();
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleButtonState, false);
    });
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isChrome: () => (/* binding */ isChrome),
/* harmony export */   isEdge: () => (/* binding */ isEdge),
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isSafari: () => (/* binding */ isSafari)
/* harmony export */ });
var userAgent = window.navigator.userAgent;
var isEdge = function isEdge() {
  return userAgent.includes('Edg');
}; // Edge previously had Edge but they changed to Edg
var isChrome = function isChrome() {
  return userAgent.includes('Chrome') && !isEdge();
};
var isFirefox = function isFirefox() {
  return userAgent.includes('Firefox');
};
var isSafari = function isSafari() {
  return userAgent.includes('Safari') && !isChrome() && !isEdge();
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentTypeDataMapByHref: () => (/* binding */ createContentTypeDataMapByHref),
/* harmony export */   getContentTypeData: () => (/* binding */ getContentTypeData),
/* harmony export */   getContentTypeDataByHref: () => (/* binding */ getContentTypeDataByHref),
/* harmony export */   getContentTypeDataMapByHref: () => (/* binding */ getContentTypeDataMapByHref),
/* harmony export */   getContentTypeIconUrl: () => (/* binding */ getContentTypeIconUrl),
/* harmony export */   getContentTypeIconUrlByHref: () => (/* binding */ getContentTypeIconUrlByHref),
/* harmony export */   getContentTypeIdentifierByHref: () => (/* binding */ getContentTypeIdentifierByHref),
/* harmony export */   getContentTypeName: () => (/* binding */ getContentTypeName),
/* harmony export */   getContentTypeNameByHref: () => (/* binding */ getContentTypeNameByHref)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var contentTypesDataMap = null;
var contentTypesDataMapByHref = null;

/**
 * Creates map with content types identifiers as keys for faster lookup
 *
 * @function createContentTypeDataMap
 * @returns {Object} contentTypesDataMap
 */
var createContentTypeDataMap = function createContentTypeDataMap() {
  return Object.values((0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().contentTypes).reduce(function (contentTypeDataMap, contentTypeGroup) {
    var _iterator = _createForOfIteratorHelper(contentTypeGroup),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var contentTypeData = _step.value;
        contentTypeDataMap[contentTypeData.identifier] = contentTypeData;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return contentTypeDataMap;
  }, {});
};
var createContentTypeDataMapByHref = function createContentTypeDataMapByHref() {
  return Object.values((0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().contentTypes).reduce(function (contentTypeDataMapByHref, contentTypeGroup) {
    var _iterator2 = _createForOfIteratorHelper(contentTypeGroup),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var contentTypeData = _step2.value;
        contentTypeDataMapByHref[contentTypeData.href] = contentTypeData;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return contentTypeDataMapByHref;
  }, {});
};
var getContentTypeDataMapByHref = function getContentTypeDataMapByHref() {
  if (!contentTypesDataMapByHref) {
    contentTypesDataMapByHref = createContentTypeDataMapByHref();
  }
  return contentTypesDataMapByHref;
};

/**
 * Returns an URL to a content type icon
 *
 * @function getContentTypeIcon
 * @param {String} contentTypeIdentifier
 * @returns {String|null} url to icon
 */
var getContentTypeIconUrl = function getContentTypeIconUrl(contentTypeIdentifier) {
  if (!contentTypesDataMap) {
    contentTypesDataMap = createContentTypeDataMap();
  }
  if (!contentTypeIdentifier || !contentTypesDataMap[contentTypeIdentifier]) {
    return null;
  }
  var iconUrl = contentTypesDataMap[contentTypeIdentifier].thumbnail;
  return iconUrl;
};

/**
 * Returns contentType name from contentType identifier
 *
 * @function getContentTypeName
 * @param {String} contentTypeIdentifier
 * @returns {String|null} contentType name
 */
var getContentTypeName = function getContentTypeName(contentTypeIdentifier) {
  if (!contentTypesDataMap) {
    contentTypesDataMap = createContentTypeDataMap();
  }
  if (!contentTypeIdentifier || !contentTypesDataMap[contentTypeIdentifier]) {
    return null;
  }
  return contentTypesDataMap[contentTypeIdentifier].name;
};
var getContentTypeData = function getContentTypeData(contentTypeIdentifier) {
  var _contentTypesDataMap$;
  if (!contentTypesDataMap) {
    contentTypesDataMap = createContentTypeDataMap();
  }
  return (_contentTypesDataMap$ = contentTypesDataMap[contentTypeIdentifier]) !== null && _contentTypesDataMap$ !== void 0 ? _contentTypesDataMap$ : null;
};
var getContentTypeIconUrlByHref = function getContentTypeIconUrlByHref(contentTypeHref) {
  if (!contentTypesDataMapByHref) {
    contentTypesDataMapByHref = createContentTypeDataMapByHref();
  }
  if (!contentTypeHref || !contentTypesDataMapByHref[contentTypeHref]) {
    return null;
  }
  var iconUrl = contentTypesDataMapByHref[contentTypeHref].thumbnail;
  return iconUrl;
};
var getContentTypeNameByHref = function getContentTypeNameByHref(contentTypeHref) {
  var _getContentTypeDataBy, _getContentTypeDataBy2;
  return (_getContentTypeDataBy = (_getContentTypeDataBy2 = getContentTypeDataByHref(contentTypeHref)) === null || _getContentTypeDataBy2 === void 0 ? void 0 : _getContentTypeDataBy2.name) !== null && _getContentTypeDataBy !== void 0 ? _getContentTypeDataBy : null;
};
var getContentTypeIdentifierByHref = function getContentTypeIdentifierByHref(contentTypeHref) {
  var _getContentTypeDataBy3, _getContentTypeDataBy4;
  return (_getContentTypeDataBy3 = (_getContentTypeDataBy4 = getContentTypeDataByHref(contentTypeHref)) === null || _getContentTypeDataBy4 === void 0 ? void 0 : _getContentTypeDataBy4.identifier) !== null && _getContentTypeDataBy3 !== void 0 ? _getContentTypeDataBy3 : null;
};
var getContentTypeDataByHref = function getContentTypeDataByHref(contentTypeHref) {
  if (!contentTypesDataMapByHref) {
    contentTypesDataMapByHref = createContentTypeDataMapByHref();
  }
  if (!contentTypeHref || !contentTypesDataMapByHref[contentTypeHref]) {
    return null;
  }
  return contentTypesDataMapByHref[contentTypeHref];
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SYSTEM_ROOT_LOCATION: () => (/* binding */ SYSTEM_ROOT_LOCATION),
/* harmony export */   SYSTEM_ROOT_LOCATION_ID: () => (/* binding */ SYSTEM_ROOT_LOCATION_ID),
/* harmony export */   SYSTEM_ROOT_LOCATION_PATH: () => (/* binding */ SYSTEM_ROOT_LOCATION_PATH),
/* harmony export */   getAdminUiConfig: () => (/* binding */ getAdminUiConfig),
/* harmony export */   getBootstrap: () => (/* binding */ getBootstrap),
/* harmony export */   getFlatpickr: () => (/* binding */ getFlatpickr),
/* harmony export */   getMoment: () => (/* binding */ getMoment),
/* harmony export */   getPopper: () => (/* binding */ getPopper),
/* harmony export */   getRestInfo: () => (/* binding */ getRestInfo),
/* harmony export */   getRootDOMElement: () => (/* binding */ getRootDOMElement),
/* harmony export */   getRouting: () => (/* binding */ getRouting),
/* harmony export */   getTranslator: () => (/* binding */ getTranslator),
/* harmony export */   isExternalInstance: () => (/* binding */ isExternalInstance),
/* harmony export */   setAdminUiConfig: () => (/* binding */ setAdminUiConfig),
/* harmony export */   setBootstrap: () => (/* binding */ setBootstrap),
/* harmony export */   setFlatpickr: () => (/* binding */ setFlatpickr),
/* harmony export */   setMoment: () => (/* binding */ setMoment),
/* harmony export */   setPopper: () => (/* binding */ setPopper),
/* harmony export */   setRestInfo: () => (/* binding */ setRestInfo),
/* harmony export */   setRootDOMElement: () => (/* binding */ setRootDOMElement),
/* harmony export */   setRouting: () => (/* binding */ setRouting),
/* harmony export */   setTranslator: () => (/* binding */ setTranslator)
/* harmony export */ });
var _window$ibexa, _document$querySelect, _document$querySelect2;
var _window = window,
  bootstrap = _window.bootstrap,
  flatpickr = _window.flatpickr,
  moment = _window.moment,
  Popper = _window.Popper,
  Routing = _window.Routing,
  Translator = _window.Translator;
var adminUiConfig = (_window$ibexa = window.ibexa) === null || _window$ibexa === void 0 ? void 0 : _window$ibexa.adminUiConfig;
var rootDOMElement = document.body;
var restInfo = {
  accessToken: null,
  instanceUrl: window.location.origin,
  token: (_document$querySelect = document.querySelector('meta[name="CSRF-Token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content,
  siteaccess: (_document$querySelect2 = document.querySelector('meta[name="SiteAccess"]')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.content
};
var SYSTEM_ROOT_LOCATION_ID = 1;
var SYSTEM_ROOT_LOCATION_PATH = "/".concat(SYSTEM_ROOT_LOCATION_ID, "/");
var SYSTEM_ROOT_LOCATION = {
  pathString: SYSTEM_ROOT_LOCATION_PATH
};
var setRestInfo = function setRestInfo(_ref) {
  var instanceUrl = _ref.instanceUrl,
    accessToken = _ref.accessToken,
    token = _ref.token,
    siteaccess = _ref.siteaccess;
  restInfo.instanceUrl = instanceUrl !== null && instanceUrl !== void 0 ? instanceUrl : restInfo.instanceUrl;
  restInfo.accessToken = accessToken !== null && accessToken !== void 0 ? accessToken : restInfo.accessToken;
  restInfo.token = token !== null && token !== void 0 ? token : restInfo.token;
  restInfo.siteaccess = siteaccess !== null && siteaccess !== void 0 ? siteaccess : restInfo.siteaccess;
};
var setAdminUiConfig = function setAdminUiConfig(loadedAdminUiConfig) {
  return adminUiConfig = loadedAdminUiConfig;
};
var setBootstrap = function setBootstrap(bootstrapInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!bootstrap || forceSet) {
    bootstrap = bootstrapInstance;
  }
};
var setFlatpickr = function setFlatpickr(flatpickrInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!flatpickr || forceSet) {
    flatpickr = flatpickrInstance;
  }
};
var setMoment = function setMoment(momentInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!moment || forceSet) {
    moment = momentInstance;
  }
};
var setPopper = function setPopper(PopperInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Popper || forceSet) {
    Popper = PopperInstance;
  }
};
var setRouting = function setRouting(RoutingInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Routing || forceSet) {
    Routing = RoutingInstance;
  }
};
var setTranslator = function setTranslator(TranslatorInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Translator || forceSet) {
    Translator = TranslatorInstance;
  }
};
var setRootDOMElement = function setRootDOMElement(rootDOMElementParam) {
  return rootDOMElement = rootDOMElementParam;
};
var getAdminUiConfig = function getAdminUiConfig() {
  return adminUiConfig;
};
var getBootstrap = function getBootstrap() {
  return bootstrap;
};
var getFlatpickr = function getFlatpickr() {
  return flatpickr;
};
var getMoment = function getMoment() {
  return moment;
};
var getPopper = function getPopper() {
  return Popper;
};
var getRouting = function getRouting() {
  return Routing;
};
var getTranslator = function getTranslator() {
  return Translator;
};
var getRestInfo = function getRestInfo() {
  return restInfo;
};
var getRootDOMElement = function getRootDOMElement() {
  return rootDOMElement;
};
var isExternalInstance = function isExternalInstance() {
  var instanceUrl = restInfo.instanceUrl;
  return window.origin !== instanceUrl;
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/cookies.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/cookies.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCookie: () => (/* binding */ getCookie),
/* harmony export */   setBackOfficeCookie: () => (/* binding */ setBackOfficeCookie),
/* harmony export */   setCookie: () => (/* binding */ setCookie)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var _window = window,
  doc = _window.document;
var setBackOfficeCookie = function setBackOfficeCookie(name, value) {
  var maxAgeDays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 356;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().backOfficePath;
  setCookie(name, value, maxAgeDays, path);
};
var setCookie = function setCookie(name, value) {
  var maxAgeDays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 356;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
  var maxAge = maxAgeDays * 24 * 60 * 60;
  doc.cookie = "".concat(name, "=").concat(value, ";max-age=").concat(maxAge, ";path=").concat(path);
};
var getCookie = function getCookie(name) {
  var decodedCookie = decodeURIComponent(doc.cookie);
  var cookiesArray = decodedCookie.split(';');
  var cookieValue = cookiesArray.find(function (cookie) {
    var cookieString = cookie.trim();
    var seachingString = "".concat(name, "=");
    return cookieString.indexOf(seachingString) === 0;
  });
  return cookieValue ? cookieValue.split('=')[1] : null;
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIconPath: () => (/* binding */ getIconPath)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var getIconPath = function getIconPath(path, iconSet) {
  var adminUiConfig = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)();
  if (!iconSet) {
    iconSet = adminUiConfig.iconPaths.defaultIconSet;
  }
  var iconSetPath = adminUiConfig.iconPaths.iconSets[iconSet];
  return "".concat(iconSetPath, "#").concat(path);
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showErrorNotification: () => (/* binding */ showErrorNotification),
/* harmony export */   showInfoNotification: () => (/* binding */ showInfoNotification),
/* harmony export */   showNotification: () => (/* binding */ showNotification),
/* harmony export */   showSuccessNotification: () => (/* binding */ showSuccessNotification),
/* harmony export */   showWarningNotification: () => (/* binding */ showWarningNotification)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var NOTIFICATION_INFO_LABEL = 'info';
var NOTIFICATION_SUCCESS_LABEL = 'success';
var NOTIFICATION_WARNING_LABEL = 'warning';
var NOTIFICATION_ERROR_LABEL = 'error';

/**
 * Dispatches notification event
 *
 * @function showNotification
 * @param {Object} detail
 * @param {String} detail.message
 * @param {String} detail.label
 * @param {Function} [detail.onShow] to be called after notification Node was added
 * @param {Object} detail.rawPlaceholdersMap
 */
var showNotification = function showNotification(detail) {
  var rootDOMElement = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRootDOMElement)();
  var event = new CustomEvent('ibexa-notify', {
    detail: detail
  });
  rootDOMElement.dispatchEvent(event);
};

/**
 * Dispatches info notification event
 *
 * @function showInfoNotification
 * @param {String} message
 * @param {Function} [onShow] to be called after notification Node was added
 * @param {Object} rawPlaceholdersMap
 */
var showInfoNotification = function showInfoNotification(message, onShow) {
  var rawPlaceholdersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return showNotification({
    message: message,
    label: NOTIFICATION_INFO_LABEL,
    onShow: onShow,
    rawPlaceholdersMap: rawPlaceholdersMap
  });
};

/**
 * Dispatches success notification event
 *
 * @function showSuccessNotification
 * @param {String} message
 * @param {Function} [onShow] to be called after notification Node was added
 * @param {Object} rawPlaceholdersMap
 */
var showSuccessNotification = function showSuccessNotification(message, onShow) {
  var rawPlaceholdersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return showNotification({
    message: message,
    label: NOTIFICATION_SUCCESS_LABEL,
    onShow: onShow,
    rawPlaceholdersMap: rawPlaceholdersMap
  });
};

/**
 * Dispatches warning notification event
 *
 * @function showWarningNotification
 * @param {String} message
 * @param {Function} [onShow] to be called after notification Node was added
 * @param {Object} rawPlaceholdersMap
 */
var showWarningNotification = function showWarningNotification(message, onShow) {
  var rawPlaceholdersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return showNotification({
    message: message,
    label: NOTIFICATION_WARNING_LABEL,
    onShow: onShow,
    rawPlaceholdersMap: rawPlaceholdersMap
  });
};

/**
 * Dispatches error notification event
 *
 * @function showErrorNotification
 * @param {(string | Error)} error
 * @param {Function} [onShow] to be called after notification Node was added
 * @param {Object} rawPlaceholdersMap
 */
var showErrorNotification = function showErrorNotification(error, onShow) {
  var rawPlaceholdersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var isErrorObj = error instanceof Error;
  var message = isErrorObj ? error.message : error;
  showNotification({
    message: message,
    label: NOTIFICATION_ERROR_LABEL,
    onShow: onShow,
    rawPlaceholdersMap: rawPlaceholdersMap
  });
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearInstance: () => (/* binding */ clearInstance),
/* harmony export */   getInstance: () => (/* binding */ getInstance),
/* harmony export */   setInstance: () => (/* binding */ setInstance)
/* harmony export */ });
var setInstance = function setInstance(domElement, instance) {
  if (domElement.ibexaInstance) {
    throw new Error('Instance for this DOM element already exists!');
  }
  domElement.ibexaInstance = instance;
};
var getInstance = function getInstance(domElement) {
  return domElement.ibexaInstance;
};
var clearInstance = function clearInstance(domElement) {
  delete domElement.ibexaInstance;
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getJsonFromResponse: () => (/* binding */ getJsonFromResponse),
/* harmony export */   getRequestHeaders: () => (/* binding */ getRequestHeaders),
/* harmony export */   getRequestMode: () => (/* binding */ getRequestMode),
/* harmony export */   getStatusFromResponse: () => (/* binding */ getStatusFromResponse),
/* harmony export */   getTextFromResponse: () => (/* binding */ getTextFromResponse)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var defaultGetErrorMessage = function defaultGetErrorMessage() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return error.errorMessage;
};
var getErrorMessageObject = function getErrorMessageObject(response) {
  var responseErrorMessage = response.json().then(function (jsonResponse) {
    var _jsonResponse$ErrorMe;
    return (_jsonResponse$ErrorMe = jsonResponse.ErrorMessage) !== null && _jsonResponse$ErrorMe !== void 0 ? _jsonResponse$ErrorMe : jsonResponse;
  });
  return responseErrorMessage;
};
var handleRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
    var getErrorMessage,
      Translator,
      responseErrorMessageObject,
      errorMessage,
      defaultErrorMsg,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          getErrorMessage = _args.length > 1 && _args[1] !== undefined ? _args[1] : defaultGetErrorMessage;
          if (response.ok) {
            _context.next = 9;
            break;
          }
          Translator = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
          _context.next = 5;
          return getErrorMessageObject(response);
        case 5:
          responseErrorMessageObject = _context.sent;
          errorMessage = getErrorMessage(responseErrorMessageObject) || response.statusText;
          defaultErrorMsg = Translator.trans(/*@Desc("Something went wrong. Try to refresh the page or contact your administrator.")*/'error.request.default_msg');
          throw Error(errorMessage || defaultErrorMsg);
        case 9:
          return _context.abrupt("return", response);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getJsonFromResponse = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response, getErrorMessage) {
    var parsedRequest;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return handleRequest(response, getErrorMessage);
        case 2:
          parsedRequest = _context2.sent;
          return _context2.abrupt("return", parsedRequest.json());
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getJsonFromResponse(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getTextFromResponse = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response) {
    var parsedRequest;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return handleRequest(response);
        case 2:
          parsedRequest = _context3.sent;
          return _context3.abrupt("return", parsedRequest.text());
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getTextFromResponse(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var getStatusFromResponse = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(response) {
    var parsedRequest;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return handleRequest(response);
        case 2:
          parsedRequest = _context4.sent;
          return _context4.abrupt("return", parsedRequest.status);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getStatusFromResponse(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var getRequestMode = function getRequestMode(_ref5) {
  var instanceUrl = _ref5.instanceUrl;
  return window.location.origin === instanceUrl ? 'same-origin' : 'cors';
};
var getRequestHeaders = function getRequestHeaders(_ref6) {
  var token = _ref6.token,
    siteaccess = _ref6.siteaccess,
    accessToken = _ref6.accessToken,
    extraHeaders = _ref6.extraHeaders;
  if (accessToken) {
    return _objectSpread(_objectSpread({
      Authorization: "Bearer ".concat(accessToken)
    }, siteaccess && {
      'X-Siteaccess': siteaccess
    }), extraHeaders);
  }
  return _objectSpread(_objectSpread(_objectSpread({}, token && {
    'X-CSRF-Token': token
  }), siteaccess && {
    'X-Siteaccess': siteaccess
  }), extraHeaders);
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideAll: () => (/* binding */ hideAll),
/* harmony export */   observe: () => (/* binding */ observe),
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _browser_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js");
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var _window = window,
  doc = _window.document;
var TOOLTIPS_SELECTOR = '[title], [data-tooltip-title]';
var observerConfig = {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['title', 'data-tooltip-title', 'data-tooltip-extra-class', 'data-tooltip-manual-reparsing']
};
var bootstrap = (0,_context_helper__WEBPACK_IMPORTED_MODULE_1__.getBootstrap)();
var resizeEllipsisObserver = new ResizeObserver(function (entries) {
  entries.forEach(function (entry) {
    parse(entry.target);
  });
});
var observer = new MutationObserver(function (mutationsList) {
  mutationsList.forEach(function (mutation) {
    var type = mutation.type,
      target = mutation.target,
      addedNodes = mutation.addedNodes,
      removedNodes = mutation.removedNodes;
    if (type === 'attributes') {
      var tooltipManualReparsing = target.dataset.tooltipManualReparsing;
      if (!tooltipManualReparsing) {
        parse(target.parentElement);
      }
    }
    addedNodes.forEach(function (addedNode) {
      if (addedNode instanceof Element && !(addedNode !== null && addedNode !== void 0 && addedNode.classList.contains('ibexa-tooltip'))) {
        parse(addedNode);
      }
    });
    removedNodes.forEach(function (removedNode) {
      if (removedNode.classList && !removedNode.classList.contains('ibexa-tooltip')) {
        var triggeredNodes = removedNode.querySelectorAll("[data-bs-original-title]");
        triggeredNodes.forEach(function (triggerBtn) {
          var _tooltipInstance$tip;
          var tooltipInstance = bootstrap.Tooltip.getOrCreateInstance(triggerBtn);
          tooltipInstance === null || tooltipInstance === void 0 || (_tooltipInstance$tip = tooltipInstance.tip) === null || _tooltipInstance$tip === void 0 || _tooltipInstance$tip.remove();
        });
      }
    });
  });
});
var modifyPopperConfig = function modifyPopperConfig(iframe, defaultBsPopperConfig) {
  if (!iframe) {
    return defaultBsPopperConfig;
  }
  var iframeDOMRect = iframe.getBoundingClientRect();
  var offsetX = iframeDOMRect.x;
  var offsetY = iframeDOMRect.y;
  var offsetModifier = {
    name: 'offset',
    options: {
      offset: function offset(_ref) {
        var placement = _ref.placement;
        var _placement$split = placement.split('-'),
          _placement$split2 = _slicedToArray(_placement$split, 1),
          basePlacement = _placement$split2[0];
        switch (basePlacement) {
          case 'top':
            return [offsetX, -offsetY];
          case 'bottom':
            return [offsetX, offsetY];
          case 'right':
            return [offsetY, offsetX];
          case 'left':
            return [offsetY, -offsetX];
          default:
            return [];
        }
      }
    }
  };
  var offsetModifierIndex = defaultBsPopperConfig.modifiers.findIndex(function (modifier) {
    return modifier.name == 'offset';
  });
  if (offsetModifierIndex != -1) {
    defaultBsPopperConfig.modifiers[offsetModifierIndex] = offsetModifier;
  } else {
    defaultBsPopperConfig.modifiers.push(offsetModifier);
  }
  return defaultBsPopperConfig;
};
var getTextHeight = function getTextHeight(text, styles) {
  var tag = doc.createElement('div');
  tag.innerText = text;
  for (var key in styles) {
    tag.style[key] = styles[key];
  }
  doc.body.appendChild(tag);
  var _tag$getBoundingClien = tag.getBoundingClientRect(),
    texHeight = _tag$getBoundingClien.height;
  doc.body.removeChild(tag);
  return texHeight;
};
var isTitleEllipsized = function isTitleEllipsized(node) {
  var title = node.dataset.originalTitle;
  var _node$getBoundingClie = node.getBoundingClientRect(),
    nodeWidth = _node$getBoundingClie.width,
    nodeHeight = _node$getBoundingClie.height;
  var computedNodeStyles = getComputedStyle(node);
  var styles = {
    width: "".concat(nodeWidth, "px"),
    padding: computedNodeStyles.getPropertyValue('padding'),
    'font-size': computedNodeStyles.getPropertyValue('font-size'),
    'font-family': computedNodeStyles.getPropertyValue('font-family'),
    'font-weight': computedNodeStyles.getPropertyValue('font-weight'),
    'font-style': computedNodeStyles.getPropertyValue('font-style'),
    'font-variant': computedNodeStyles.getPropertyValue('font-variant'),
    'line-height': computedNodeStyles.getPropertyValue('line-height'),
    'word-break': 'break-all'
  };
  var textHeight = getTextHeight(title, styles);
  return textHeight > nodeHeight;
};
var getContainer = function getContainer(tooltipNode) {
  var tooltipContainerSelector = tooltipNode.dataset.tooltipContainerSelector;
  var container = tooltipNode.closest(tooltipContainerSelector);
  return container !== null && container !== void 0 ? container : doc.body;
};
var initializeTooltip = function initializeTooltip(tooltipNode, hasEllipsisStyle) {
  var _tooltipNode$dataset$, _tooltipNode$dataset$2, _tooltipNode$dataset$3;
  var _tooltipNode$dataset = tooltipNode.dataset,
    delayShow = _tooltipNode$dataset.delayShow,
    delayHide = _tooltipNode$dataset.delayHide;
  var delay = {
    show: delayShow ? parseInt(delayShow, 10) : 150,
    hide: delayHide ? parseInt(delayHide, 10) : 75
  };
  var title = tooltipNode.title;
  var extraClass = (_tooltipNode$dataset$ = tooltipNode.dataset.tooltipExtraClass) !== null && _tooltipNode$dataset$ !== void 0 ? _tooltipNode$dataset$ : '';
  var placement = (_tooltipNode$dataset$2 = tooltipNode.dataset.tooltipPlacement) !== null && _tooltipNode$dataset$2 !== void 0 ? _tooltipNode$dataset$2 : 'bottom';
  var trigger = (_tooltipNode$dataset$3 = tooltipNode.dataset.tooltipTrigger) !== null && _tooltipNode$dataset$3 !== void 0 ? _tooltipNode$dataset$3 : 'hover';
  var useHtml = tooltipNode.dataset.tooltipUseHtml !== undefined;
  var container = getContainer(tooltipNode);
  var iframe = document.querySelector(tooltipNode.dataset.tooltipIframeSelector);
  new bootstrap.Tooltip(tooltipNode, {
    delay: delay,
    placement: placement,
    trigger: trigger,
    container: container,
    popperConfig: modifyPopperConfig.bind(null, iframe),
    html: useHtml,
    template: "<div class=\"tooltip ibexa-tooltip ".concat(extraClass, "\">\n                        <div class=\"tooltip-arrow ibexa-tooltip__arrow\"></div>\n                        <div class=\"tooltip-inner ibexa-tooltip__inner\"></div>\n                   </div>")
  });
  if ((0,_browser_helper__WEBPACK_IMPORTED_MODULE_0__.isSafari)()) {
    if (tooltipNode.children) {
      var childWithTitle = _toConsumableArray(tooltipNode.children).find(function (child) {
        return title === child.textContent;
      });
      var childHasEllipsisStyle = childWithTitle && getComputedStyle(childWithTitle).textOverflow === 'ellipsis';
      if (childWithTitle && childHasEllipsisStyle) {
        childWithTitle.classList.add('ibexa-safari-tooltip');
      }
    } else {
      if (hasEllipsisStyle) {
        tooltipNode.classList.add('ibexa-safari-tooltip');
      }
    }
  }
};
var parse = function parse() {
  var baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
  if (!baseElement) {
    return;
  }
  var tooltipNodes = _toConsumableArray(baseElement.querySelectorAll(TOOLTIPS_SELECTOR));
  if (baseElement instanceof Element) {
    tooltipNodes.push(baseElement);
  }
  var _iterator = _createForOfIteratorHelper(tooltipNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tooltipNode = _step.value;
      var hasEllipsisStyle = getComputedStyle(tooltipNode).textOverflow === 'ellipsis';
      var hasNewTitle = tooltipNode.hasAttribute('title');
      var tooltipInitialized = !!tooltipNode.dataset.originalTitle;
      var shouldHaveTooltip = !hasEllipsisStyle;
      if (!tooltipInitialized && hasNewTitle) {
        resizeEllipsisObserver.observe(tooltipNode);
        tooltipNode.dataset.originalTitle = tooltipNode.title;
        if (!shouldHaveTooltip) {
          shouldHaveTooltip = isTitleEllipsized(tooltipNode);
        }
        if (shouldHaveTooltip) {
          initializeTooltip(tooltipNode, hasEllipsisStyle);
        } else {
          tooltipNode.removeAttribute('title');
        }
      } else if (tooltipInitialized && (hasNewTitle || hasEllipsisStyle)) {
        if (hasNewTitle) {
          tooltipNode.dataset.originalTitle = tooltipNode.title;
        }
        var tooltipInstance = bootstrap.Tooltip.getInstance(tooltipNode);
        var hasTooltip = !!tooltipInstance;
        if (!shouldHaveTooltip) {
          shouldHaveTooltip = isTitleEllipsized(tooltipNode);
        }
        if (hasTooltip && (hasNewTitle && shouldHaveTooltip || !shouldHaveTooltip)) {
          tooltipInstance.dispose();
        }
        if (shouldHaveTooltip && (hasNewTitle || !hasTooltip)) {
          tooltipNode.title = tooltipNode.dataset.originalTitle;
          initializeTooltip(tooltipNode, hasEllipsisStyle);
        } else {
          tooltipNode.removeAttribute('title');
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var hideAll = function hideAll() {
  var baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
  if (!baseElement) {
    return;
  }
  var tooltipsNode = baseElement.querySelectorAll(TOOLTIPS_SELECTOR);
  var _iterator2 = _createForOfIteratorHelper(tooltipsNode),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var tooltipNode = _step2.value;
      bootstrap.Tooltip.getOrCreateInstance(tooltipNode).hide();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var observe = function observe() {
  var baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
  observer.observe(baseElement, observerConfig);
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var editButton = doc.querySelector('.ibexa-btn--edit');
  var languageRadioOption = doc.querySelector('.ibexa-content-menu-wrapper .ibexa-extra-actions--edit.ibexa-extra-actions--prevent-show .ibexa-input--radio');
  if (!languageRadioOption) {
    return;
  }
  editButton.addEventListener('click', function () {
    languageRadioOption.checked = true;
    languageRadioOption.dispatchEvent(new CustomEvent('change', {
      detail: {
        sendImmediately: true
      }
    }));
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.hide.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.hide.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var hideButton = doc.querySelector('.ibexa-btn--hide');
  var modal = doc.querySelector('#hide-content-modal');
  var form = doc.querySelector('form[name="content_visibility_update"]');
  var visiblity = doc.querySelector('#content_visibility_update_visible');
  if (!hideButton) {
    return;
  }
  if (modal) {
    modal.querySelector('.ibexa-btn--confirm').addEventListener('click', function () {
      visiblity.value = 0;
      form.submit();
    });
  }
  hideButton.addEventListener('click', function () {
    if (modal) {
      bootstrap.Modal.getOrCreateInstance(modal).show();
    } else {
      visiblity.value = 0;
      form.submit();
    }
  }, false);
})(window, window.document, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.reveal.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.reveal.js ***!
  \****************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var revealButton = doc.querySelector('.ibexa-btn--reveal');
  var form = doc.querySelector('form[name="content_visibility_update"]');
  var visiblity = doc.querySelector('#content_visibility_update_visible');
  if (!revealButton) {
    return;
  }
  revealButton.addEventListener('click', function () {
    visiblity.value = 1;
    form.submit();
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var createActions = doc.querySelectorAll('.ibexa-extra-actions--create');
  var bindCreateActionsEvents = function bindCreateActionsEvents(container) {
    var radioInputs = container.querySelectorAll('.form-check [type="radio"]');
    var submitBtn = container.querySelector('.ibexa-extra-actions__btn--confirm');
    radioInputs.forEach(function (radioInput) {
      return radioInput.addEventListener('change', function (event) {
        var selectedItems = container.querySelectorAll('.ibexa-instant-filter__group-item--selected');
        var itemToSelect = event.currentTarget.closest('.ibexa-instant-filter__group-item');
        selectedItems.forEach(function (selectedItem) {
          return selectedItem.classList.remove('ibexa-instant-filter__group-item--selected');
        });
        itemToSelect.classList.add('ibexa-instant-filter__group-item--selected');
        submitBtn.removeAttribute('disabled');
      }, false);
    });
  };
  doc.body.addEventListener('ibexa-instant-filters:add-group', function (event) {
    var createActionsContainer = event.detail.container.closest('.ibexa-extra-actions--create');
    bindCreateActionsEvents(createActionsContainer);
  });
  if (!createActions.length) {
    return;
  }
  createActions.forEach(bindCreateActionsEvents);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js ***!
  \***************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, bootstrap, Routing) {
  var editActions = doc.querySelectorAll('.ibexa-extra-actions--edit, .ibexa-extra-actions--edit-user');
  var resetRadioButtons = function resetRadioButtons(btns) {
    return btns.forEach(function (btn) {
      btn.checked = false;
    });
  };
  var addDraft = function addDraft(form) {
    form.submit();
    bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
  };
  var redirectToUserEdit = function redirectToUserEdit(languageCode, contentId, form) {
    var versionNo = form.querySelector('#user_edit_version_info_version_no').value;
    window.location.href = Routing.generate('ibexa.user.update', {
      contentId: contentId,
      versionNo: versionNo,
      language: languageCode
    });
  };
  var onModalHidden = function onModalHidden(btns) {
    resetRadioButtons(btns);
    var event = new CustomEvent('ibexa-draft-conflict-modal-hidden');
    doc.body.dispatchEvent(event);
  };
  var attachModalListeners = function attachModalListeners(wrapper, form, btns) {
    var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
    var conflictModal = doc.querySelector('#version-draft-conflict-modal');
    if (addDraftButton) {
      addDraftButton.addEventListener('click', addDraft.bind(null, form), false);
    }
    wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
      return btn.addEventListener('click', function (event) {
        return event.preventDefault();
      }, false);
    });
    if (conflictModal) {
      bootstrap.Modal.getOrCreateInstance(conflictModal).show();
      conflictModal.addEventListener('hidden.bs.modal', onModalHidden.bind(null, btns));
      conflictModal.addEventListener('shown.bs.modal', function () {
        return ibexa.helpers.tooltips.parse();
      });
    }
  };
  var showModal = function showModal(form, btns, modalHtml) {
    var wrapper = doc.querySelector('.ibexa-modal-wrapper');
    wrapper.innerHTML = modalHtml;
    attachModalListeners(wrapper, form, btns);
  };
  var changeHandler = function changeHandler(form, btns, event) {
    var _event$detail$sendImm, _event$detail, _event$target$closest;
    var sendImmediately = (_event$detail$sendImm = event === null || event === void 0 || (_event$detail = event.detail) === null || _event$detail === void 0 ? void 0 : _event$detail.sendImmediately) !== null && _event$detail$sendImm !== void 0 ? _event$detail$sendImm : false;
    var contentIdInput = form.querySelector('.ibexa-extra-actions__form-field--content-info');
    var locationInput = form.querySelector('.ibexa-extra-actions__form-field--location');
    var contentId = contentIdInput.value;
    var locationId = locationInput.value;
    var checkedBtn = event.currentTarget;
    var languageCode = checkedBtn.value;
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode,
      locationId: locationId
    });
    var activeLanguageItem = (_event$target$closest = event.target.closest('.ibexa-instant-filter__group-item')) === null || _event$target$closest === void 0 ? void 0 : _event$target$closest.querySelector('.ibexa-label');
    var allLanguageItems = form.querySelectorAll('.ibexa-instant-filter__group-item .ibexa-label');
    var submitBtn = form.querySelector('.ibexa-extra-actions__confirm-btn');
    allLanguageItems.forEach(function (item) {
      item.classList.remove('ibexa-label--active');
    });
    fetch(checkVersionDraftLink, {
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.status === 409) {
        response.text().then(showModal.bind(null, form, btns));
        submitBtn.disabled = true;
        return;
      } else if (response.status === 200) {
        if (form.querySelector('#user_edit_version_info')) {
          redirectToUserEdit(languageCode, contentId, form);
          return;
        }
        if (sendImmediately) {
          form.submit();
        }
      }
      submitBtn.disabled = false;
      activeLanguageItem === null || activeLanguageItem === void 0 || activeLanguageItem.classList.add('ibexa-label--active');
    });
  };
  var attachEventsToEditActionsWidget = function attachEventsToEditActionsWidget(container) {
    var btns = _toConsumableArray(container.querySelectorAll('.form-check [type="radio"]'));
    var form = container.querySelector('form');
    btns.forEach(function (btn) {
      return btn.addEventListener('change', changeHandler.bind(null, form, btns), false);
    });
  };
  _toConsumableArray(editActions).forEach(attachEventsToEditActionsWidget);
})(window, window.document, window.ibexa, window.bootstrap, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var editButton = doc.querySelector('.ibexa-btn--edit-user');
  var languageRadioOption = doc.querySelector('.ibexa-extra-actions--edit-user.ibexa-extra-actions--prevent-show .ibexa-input--radio');
  var editActions = doc.querySelector('.ibexa-extra-actions--edit-user');
  if (!editActions || !languageRadioOption) {
    return;
  }
  editButton.addEventListener('click', function () {
    languageRadioOption.checked = true;
    languageRadioOption.dispatchEvent(new CustomEvent('change', {
      detail: {
        sendImmediately: true
      }
    }));
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_object_instances__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

(function (global, doc, ibexa) {
  var CLASS_HIDDEN = 'ibexa-extra-actions--hidden';
  var CLASS_EXPANDED = 'ibexa-context-menu--expanded';
  var CLASS_PREVENT_SHOW = 'ibexa-extra-actions--prevent-show';
  var closeBtns = doc.querySelectorAll('.ibexa-extra-actions .ibexa-btn--close, .ibexa-extra-actions .ibexa-extra-actions__btn--cancel');
  var btns = _toConsumableArray(doc.querySelectorAll('.ibexa-btn--extra-actions'));
  var menu = doc.querySelector('.ibexa-context-menu');
  var backdrop = new ibexa.core.Backdrop();
  var formsInitialData = new Map();
  var saveInitialFormData = function saveInitialFormData(extraActionsContainer) {
    var extraActionsInputs = extraActionsContainer.querySelectorAll('input, select');
    extraActionsInputs.forEach(function (node) {
      var value = node.type === 'radio' || node.type === 'checkbox' ? node.checked : node.value;
      formsInitialData.set(node, value);
    });
  };
  var restoreInitialFormData = function restoreInitialFormData(extraActionsContainer) {
    if (formsInitialData.size === 0) {
      return;
    }
    var extraActionsInputs = extraActionsContainer.querySelectorAll('input, select');
    extraActionsInputs.forEach(function (node) {
      var value = formsInitialData.get(node);
      var prevValue = node.value;
      if (node.type === 'radio' || node.type === 'checkbox') {
        prevValue = node.checked;
        node.checked = value;
      } else if (node.tagName === 'SELECT') {
        var dropdownContainer = node.closest('.ibexa-dropdown');
        if (dropdownContainer) {
          var dropdownInstance = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_object_instances__WEBPACK_IMPORTED_MODULE_0__.getInstance)(dropdownContainer);
          dropdownInstance.selectOption(value);
        } else {
          node.value = value;
        }
      } else {
        node.value = value;
      }
      if (value !== prevValue) {
        node.dispatchEvent(new CustomEvent('change'));
      }
    });
    formsInitialData.clear();
  };
  var haveHiddenPart = function haveHiddenPart(element) {
    return element.classList.contains(CLASS_HIDDEN) && !element.classList.contains(CLASS_PREVENT_SHOW);
  };
  var removeBackdrop = function removeBackdrop() {
    backdrop.hide();
    doc.body.classList.remove('ibexa-scroll-disabled');
  };
  var closeExtraActions = function closeExtraActions(actions) {
    actions.classList.add(CLASS_HIDDEN);
    if (menu) {
      menu.classList.remove(CLASS_EXPANDED);
    }
    doc.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:after-close'));
    removeBackdrop();
    restoreInitialFormData(actions);
  };
  var toggleExtraActionsWidget = function toggleExtraActionsWidget(widgetData) {
    var actions = doc.querySelector(".ibexa-extra-actions[data-actions=\"".concat(widgetData.actions, "\"]"));
    if (widgetData.validate && !parseInt(widgetData.isFormValid, 10)) {
      return;
    }
    var isHidden = haveHiddenPart(actions);
    var focusElement = actions.querySelector(widgetData.focusElement);
    var _detectClickOutside = function detectClickOutside(event) {
      if (event.target.classList.contains('ibexa-backdrop')) {
        closeExtraActions(actions);
        doc.body.removeEventListener('click', _detectClickOutside, false);
      }
    };
    actions.classList.toggle(CLASS_HIDDEN, !isHidden);
    if (menu) {
      menu.classList.toggle(CLASS_EXPANDED, isHidden);
    }
    if (!actions.classList.contains(CLASS_HIDDEN)) {
      backdrop.show();
      doc.body.addEventListener('click', _detectClickOutside, false);
      doc.body.classList.add('ibexa-scroll-disabled');
      saveInitialFormData(actions);
    } else {
      doc.body.removeEventListener('click', _detectClickOutside);
      removeBackdrop();
      restoreInitialFormData(actions);
    }
    if (focusElement) {
      focusElement.focus();
    }
  };
  var initExtraActionsWidget = function initExtraActionsWidget(dataset) {
    var hashes = window.location.hash.split('#');
    if (hashes.includes(dataset.actions)) {
      toggleExtraActionsWidget(dataset);
    }
  };
  var hideMenu = function hideMenu(btn) {
    var menuBranch = btn.closest('.ibexa-multilevel-popup-menu__branch');
    if (!(menuBranch !== null && menuBranch !== void 0 && menuBranch.menuInstanceElement)) {
      return;
    }
    var menuInstance = ibexa.helpers.objectInstances.getInstance(menuBranch.menuInstanceElement);
    menuInstance.closeMenu();
  };
  btns.forEach(function (btn) {
    var dataset = btn.dataset;
    btn.addEventListener('click', function () {
      toggleExtraActionsWidget(dataset);
      hideMenu(btn);
    }, false);
    initExtraActionsWidget(dataset);
  });
  doc.body.addEventListener('ibexa-extra-actions:toggle-widget', function (event) {
    return toggleExtraActionsWidget(event.detail);
  }, false);
  closeBtns.forEach(function (closeBtn) {
    return closeBtn.addEventListener('click', function (event) {
      closeExtraActions(event.currentTarget.closest('.ibexa-extra-actions'));
    }, false);
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js ***!
  \************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var filterTimeout;
  var SELECTOR_ITEM = '.ibexa-instant-filter__group-item';
  var timeout = 200;
  var filters = doc.querySelectorAll('.ibexa-instant-filter');
  var toggleGroupDisplay = function toggleGroupDisplay(group) {
    var areChildrenHidden = _toConsumableArray(group.querySelectorAll(SELECTOR_ITEM)).every(function (item) {
      return item.hasAttribute('hidden');
    });
    group.toggleAttribute('hidden', areChildrenHidden);
  };
  var filterItems = function filterItems(itemsMap, groups, event) {
    window.clearTimeout(filterTimeout);
    filterTimeout = window.setTimeout(function () {
      var query = event.target.value.toLowerCase();
      var results = itemsMap.filter(function (item) {
        return item.label.includes(query);
      });
      itemsMap.forEach(function (item) {
        return item.element.setAttribute('hidden', true);
      });
      results.forEach(function (item) {
        return item.element.removeAttribute('hidden');
      });
      groups.forEach(toggleGroupDisplay);
    }, timeout);
  };
  var initFilter = function initFilter(filter) {
    var filterInput = filter.querySelector('.ibexa-instant-filter__input');
    var groups = _toConsumableArray(filter.querySelectorAll('.ibexa-instant-filter__group'));
    var items = _toConsumableArray(filter.querySelectorAll(SELECTOR_ITEM));
    var itemsMap = items.reduce(function (total, item) {
      return [].concat(_toConsumableArray(total), [{
        label: item.textContent.toLowerCase(),
        element: item
      }]);
    }, []);
    filterInput.addEventListener('change', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('blur', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keyup', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    }, false);
  };
  doc.body.addEventListener('ibexa-instant-filters:add-group', function (event) {
    var filterContainer = event.detail.container.closest('.ibexa-instant-filter');
    initFilter(filterContainer);
  });
  filters.forEach(initFilter);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy.js ***!
  \**********************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-copy');
  var form = doc.querySelector('form[name="location_copy"]');
  var input = form.querySelector('#location_copy_new_parent_location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select Location")*/'copy.title', {}, 'ibexa_universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false,
      containersOnly: true
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy_subtree.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy_subtree.js ***!
  \******************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-copy-subtree');
  var form = doc.querySelector('form[name="location_copy_subtree"]');
  var input = form.querySelector('#location_copy_subtree_new_parent_location');
  var udwContainer = doc.querySelector('#react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var title = Translator.trans(/*@Desc("Select Location")*/'subtree.title', {}, 'ibexa_universal_discovery_widget');
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false,
      containersOnly: true
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/locations.tab.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/locations.tab.js ***!
  \*******************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-add');
  var submitButton = doc.querySelector('#content_location_add_add');
  var form = doc.querySelector('form[name="content_location_add"]');
  if (!form) {
    return;
  }
  var input = form.querySelector('#content_location_add_new_locations');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    submitButton.click();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    event.stopPropagation();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select Location")*/'add_location.title', {}, 'ibexa_universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      containersOnly: true,
      title: title,
      multiple: false
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/move.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/move.js ***!
  \**********************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-move');
  var form = doc.querySelector('form[name="location_move"]');
  if (!form) {
    return;
  }
  var input = form.querySelector('#location_move_new_parent_location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select destination")*/'move.title', {}, 'ibexa_universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false,
      containersOnly: true
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/swap.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/swap.js ***!
  \**********************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-swap');
  var form = doc.querySelector('form[name="location_swap"]');
  if (!form) {
    return;
  }
  var input = form.querySelector('#location_swap_new_location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select Location to swap with")*/'swap.title', {}, 'ibexa_universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.group.invitation.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.group.invitation.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.invitation.modal */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

(function (global, doc) {
  var modal = doc.querySelector('.ibexa-user-group-invitation');
  if (!modal) {
    return;
  }
  var UserGroupInvitationModal = /*#__PURE__*/function (_UserInvitationModal) {
    function UserGroupInvitationModal() {
      _classCallCheck(this, UserGroupInvitationModal);
      return _callSuper(this, UserGroupInvitationModal, arguments);
    }
    _inherits(UserGroupInvitationModal, _UserInvitationModal);
    return _createClass(UserGroupInvitationModal, [{
      key: "processCSVInvitationFile",
      value: function processCSVInvitationFile(file) {
        return file.text().then(function (text) {
          var lineRegexp = /^([^;\r\n]+)$/gm;
          var matchedData = _toConsumableArray(text.matchAll(lineRegexp));
          var invitationsData = matchedData.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
              email = _ref2[0];
            return {
              email: email
            };
          });
          return invitationsData;
        });
      }
    }, {
      key: "resetEntry",
      value: function resetEntry(entry) {
        _superPropGet(UserGroupInvitationModal, "resetEntry", this, 3)([entry]);
        var emailInput = entry.querySelector('.ibexa-user-group-invitation__entry-email');
        emailInput.value = null;
      }
    }, {
      key: "isEntryEmpty",
      value: function isEntryEmpty(entry) {
        var emailInput = entry.querySelector('.ibexa-user-group-invitation__entry-email');
        return !emailInput.value;
      }
    }, {
      key: "addEntry",
      value: function addEntry() {
        var _invitationData$email;
        var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var addEntryData = _superPropGet(UserGroupInvitationModal, "addEntry", this, 3)([isFileRelated, invitationData]);
        var insertedEntry = addEntryData.insertedEntry;
        var email = (_invitationData$email = invitationData === null || invitationData === void 0 ? void 0 : invitationData.email) !== null && _invitationData$email !== void 0 ? _invitationData$email : null;
        var emailInput = insertedEntry.querySelector('.ibexa-user-group-invitation__entry-email');
        emailInput.value = email;
        return addEntryData;
      }
    }, {
      key: "checkEntryMatchesSearch",
      value: function checkEntryMatchesSearch(entry, searchText) {
        var emailInput = entry.querySelector('.ibexa-user-group-invitation__entry-email');
        var email = emailInput.value;
        return email.includes(searchText);
      }
    }, {
      key: "checkIsEntryDuplicate",
      value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
        var entryToCompareEmailInput = entryToCompare.querySelector('.ibexa-user-group-invitation__entry-email');
        return invitationData.email === entryToCompareEmailInput.value;
      }
    }]);
  }(_user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__.UserInvitationModal);
  var userInvitationModal = new UserGroupInvitationModal({
    modal: modal
  });
  userInvitationModal.init();
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserInvitationModal: () => (/* binding */ UserInvitationModal)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var UserInvitationModal = /*#__PURE__*/function () {
  function UserInvitationModal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, UserInvitationModal);
    if (!options.modal) {
      throw new Error('No valid modal option provided');
    }
    this.modal = options.modal;
    this.stickyTopContainer = this.modal.querySelector('.ibexa-user-invitation-modal__sticky-top');
    this.searchInput = this.modal.querySelector('.ibexa-user-invitation-modal__search-input');
    this.searchBtn = this.modal.querySelector('.ibexa-input-text-wrapper__action-btn--search');
    this.searchNoEntries = this.modal.querySelector('.ibexa-user-invitation-modal__search-no-entries');
    this.badFileAlert = this.modal.querySelector('.ibexa-user-invitation-modal__bad-file-alert');
    this.badFileAlertCloseBtn = this.badFileAlert.querySelector('.ibexa-alert__close-btn');
    this.issuesAlert = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert');
    this.issuesAlertIssuesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert-issues');
    this.issuesAlertCloseBtn = this.issuesAlert.querySelector('.ibexa-alert__close-btn');
    this.goToNextIssueBtn = this.issuesAlert.querySelector('.ibexa-user-invitation-modal__next-issue-btn');
    this.addNextBtn = this.modal.querySelector('.ibexa-user-invitation-modal__add-next-btn');
    this.entriesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__entries');
    this.entryPrototype = this.entriesContainer.dataset.prototype;
    this.fileUploadMessage = this.modal.querySelector('.ibexa-user-invitation-modal__upload-file-message');
    this.dropZone = this.modal.querySelector('.ibexa-user-invitation-modal__drop');
    this.uploadLocalFileBtn = this.modal.querySelector('.ibexa-user-invitation-modal__file-select');
    this.fileInput = this.modal.querySelector('.ibexa-user-invitation-modal__file-input');
    this.fakeSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__fake-submit-btn');
    this.realSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__real-submit-btn');
    this.form = this.modal.querySelector('.ibexa-user-invitation-modal__form');
    this.lastScrolledToEntryWithIssue = null;
    this.attachEntryListeners = this.attachEntryListeners.bind(this);
    this.preventDefaultAction = this.preventDefaultAction.bind(this);
    this.handleEntryAdd = this.handleEntryAdd.bind(this);
    this.handleEntryDelete = this.handleEntryDelete.bind(this);
    this.handleDropUpload = this.handleDropUpload.bind(this);
    this.handleInputUpload = this.handleInputUpload.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.scrollToNextIssue = this.scrollToNextIssue.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  return _createClass(UserInvitationModal, [{
    key: "processCSVInvitationFile",
    value: function processCSVInvitationFile(file) {
      throw new Error('processCSVInvitationFile should be overridden in subclass.');
    }
  }, {
    key: "countFilledLinesInFile",
    value: function countFilledLinesInFile(file) {
      return file.text().then(function (text) {
        var nonEmptyLineRegexp = /^([^\r\n]+)$/gm;
        var matchedData = _toConsumableArray(text.matchAll(nonEmptyLineRegexp));
        return matchedData.length;
      });
    }
  }, {
    key: "resetEntry",
    value: function resetEntry(entry) {
      this.toggleInvalidEmailState(entry, {
        isEmptyError: false,
        isInvalidFormatError: false
      });
      this.toggleDuplicateEntryState(entry, false);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "isEntryEmpty",
    value: function isEntryEmpty(entry) {
      throw new Error('isEntryEmpty should be overridden in subclass.');
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "checkEntryMatchesSearch",
    value: function checkEntryMatchesSearch(entry, searchText) {
      throw new Error('checkEntryMatchesSearch should be overridden in subclass.');
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "checkIsEntryDuplicate",
    value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
      throw new Error('checkIsEntryDuplicate should be overridden in subclass.');
    }
  }, {
    key: "checkHasEntryIssue",
    value: function checkHasEntryIssue(entry) {
      var hasEmptyEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var hasInvalidEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var hasDuplicateIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      return hasEmptyEmailIssue || hasInvalidEmailIssue || hasDuplicateIssue;
    }
  }, {
    key: "findDuplicateEntry",
    value: function findDuplicateEntry(invitationData, entriesToCompare) {
      var _iterator = _createForOfIteratorHelper(entriesToCompare),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entryToCompare = _step.value;
          if (this.checkIsEntryDuplicate(invitationData, entryToCompare)) {
            return entryToCompare;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "toggleIssueNode",
    value: function toggleIssueNode(entry, issueNode, show, position, template) {
      var entryIssuesContainer = entry.querySelector('.ibexa-user-invitation-modal__entry-issues');
      if (show) {
        if (!issueNode) {
          entryIssuesContainer.insertAdjacentHTML(position, template);
        }
      } else {
        if (issueNode) {
          issueNode.remove();
        }
      }
    }
  }, {
    key: "toggleDuplicateEntryState",
    value: function toggleDuplicateEntryState(entry, isDuplicate) {
      var duplicateEntryIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      var issueDuplicateInfoTemplate = this.entriesContainer.dataset.issueDuplicateInfoTemplate;
      this.toggleIssueNode(entry, duplicateEntryIssueNode, isDuplicate, 'beforeend', issueDuplicateInfoTemplate);
    }
  }, {
    key: "toggleInvalidEmailState",
    value: function toggleInvalidEmailState(entry, _ref) {
      var isEmptyError = _ref.isEmptyError,
        isInvalidFormatError = _ref.isInvalidFormatError;
      var emptyEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var invalidEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var _this$entriesContaine = this.entriesContainer.dataset,
        issueInvalidEmailTemplate = _this$entriesContaine.issueInvalidEmailTemplate,
        issueEmptyEmailTemplate = _this$entriesContaine.issueEmptyEmailTemplate;
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      emailInput.classList.toggle('is-invalid', isEmptyError || isInvalidFormatError);
      this.toggleIssueNode(entry, emptyEmailIssueNode, isEmptyError, 'afterbegin', issueEmptyEmailTemplate);
      this.toggleIssueNode(entry, invalidEmailIssueNode, isInvalidFormatError, 'afterbegin', issueInvalidEmailTemplate);
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(emailInput) {
      var isEmpty = !emailInput.value.trim();
      if (isEmpty) {
        return {
          isEmptyError: isEmpty,
          isInvalidFormatError: false
        };
      }
      var isValid = ibexa.errors.emailRegexp.test(emailInput.value);
      return {
        isEmptyError: false,
        isInvalidFormatError: !isValid
      };
    }
  }, {
    key: "validateEntryEmail",
    value: function validateEntryEmail(entry) {
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      var errors = this.validateEmail(emailInput);
      this.toggleInvalidEmailState(entry, errors);
      this.manageIssuesAlert();
      return errors.isEmptyError || errors.isInvalidFormatError;
    }
  }, {
    key: "handleEmailValidation",
    value: function handleEmailValidation(event) {
      var emailInput = event.currentTarget;
      var entry = emailInput.closest('.ibexa-user-invitation-modal__entry');
      this.validateEntryEmail(entry);
    }
  }, {
    key: "prepareIssuesAlert",
    value: function prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount) {
      var messages = [];
      if (emptyEmailsCount) {
        var emptyEmailsMessage = Translator.trans(/*@Desc("Empty emails (%count%)")*/'modal.entry_issues.alert.empty_emails', {
          count: emptyEmailsCount
        }, 'ibexa_user_invitation');
        messages.push(emptyEmailsMessage);
      }
      if (invalidEmailsCount) {
        var invalidEmailsMessage = Translator.trans(/*@Desc("Invalid emails (%count%)")*/'modal.entry_issues.alert.invalid_emails', {
          count: invalidEmailsCount
        }, 'ibexa_user_invitation');
        messages.push(invalidEmailsMessage);
      }
      if (duplicateEntryCount) {
        var duplicatedEmailsMessage = Translator.trans(/*@Desc("Duplicated emails (%count%)")*/'modal.entry_issues.alert.duplicate_emails', {
          count: duplicateEntryCount
        }, 'ibexa_user_invitation');
        messages.push(duplicatedEmailsMessage);
      }
      this.issuesAlertIssuesContainer.innerText = messages.join(' | ');
    }
  }, {
    key: "manageIssuesAlert",
    value: function manageIssuesAlert() {
      var emptyEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-empty').length;
      var invalidEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-invalid-format').length;
      var duplicateEntryCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-duplicate').length;
      var isAnyIssue = emptyEmailsCount || invalidEmailsCount || duplicateEntryCount;
      if (isAnyIssue) {
        this.prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount);
      }
      this.toggleIssuesAlert(isAnyIssue);
    }
  }, {
    key: "toggleIssuesAlert",
    value: function toggleIssuesAlert(show) {
      this.issuesAlert.classList.toggle('ibexa-user-invitation-modal__issues-alert--hidden', !show);
    }
  }, {
    key: "toggleBadFileAlert",
    value: function toggleBadFileAlert(show) {
      this.badFileAlert.classList.toggle('ibexa-user-invitation-modal__bad-file-alert--hidden', !show);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "addEntry",
    value: function addEntry() {
      var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var entryPrototypeRendered = this.entryPrototype.replaceAll('__name__', this.entryCounter);
      this.entryCounter = this.entryCounter + 1;
      this.entriesContainer.insertAdjacentHTML('beforeend', entryPrototypeRendered);
      var insertedEntry = this.entriesContainer.querySelector(':scope > :last-child');
      if (isFileRelated) {
        insertedEntry.classList.add('ibexa-user-invitation-modal__entry--file-related');
      }
      this.attachEntryListeners(insertedEntry);
      document.body.dispatchEvent(new CustomEvent('ibexa-inputs:added'));
      return {
        insertedEntry: insertedEntry
      };
    }
  }, {
    key: "deleteEntry",
    value: function deleteEntry(entry) {
      var isForceRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var entryNodes = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      var isLastEntry = entryNodes.length === 1;
      if (isLastEntry && !isForceRemove) {
        this.resetEntry(entry);
      } else {
        if (entry === this.lastScrolledToEntryWithIssue) {
          this.lastScrolledToEntryWithIssue = this.lastScrolledToEntryWithIssue.previousElementSibling;
        }
        entry.remove();
      }
    }
  }, {
    key: "deleteTrailingEntriesIfEmpty",
    value: function deleteTrailingEntriesIfEmpty() {
      var lastEntry = this.entriesContainer.querySelector(':scope > :last-child');
      if (!lastEntry) {
        return;
      }
      if (this.isEntryEmpty(lastEntry)) {
        this.deleteEntry(lastEntry, true);
        this.deleteTrailingEntriesIfEmpty();
        this.manageIssuesAlert();
        this.updateModalTitle();
      }
    }
  }, {
    key: "handleEntryAdd",
    value: function handleEntryAdd() {
      this.addEntry();
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "handleEntryDelete",
    value: function handleEntryDelete(event) {
      var deleteBtn = event.currentTarget;
      var entry = deleteBtn.closest('.ibexa-user-invitation-modal__entry');
      this.deleteEntry(entry);
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "attachEntryListeners",
    value: function attachEntryListeners(entry) {
      var deleteEntryBtn = entry.querySelector('.ibexa-user-invitation-modal__entry-delete-btn');
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      deleteEntryBtn.addEventListener('click', this.handleEntryDelete, false);
      emailInput.addEventListener('blur', this.handleEmailValidation, false);
    }
  }, {
    key: "getNextEntryWithIssue",
    value: function getNextEntryWithIssue() {
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      var firstEntryWithIssue = _toConsumableArray(entries).find(this.checkHasEntryIssue);
      if (!firstEntryWithIssue) {
        return;
      }
      var nextEntryWithIssue = null;
      if (!this.lastScrolledToEntryWithIssue) {
        nextEntryWithIssue = firstEntryWithIssue;
      } else {
        var currentlyCheckedEntry = this.lastScrolledToEntryWithIssue;
        while (currentlyCheckedEntry.nextElementSibling) {
          currentlyCheckedEntry = currentlyCheckedEntry.nextElementSibling;
          if (this.checkHasEntryIssue(currentlyCheckedEntry)) {
            nextEntryWithIssue = currentlyCheckedEntry;
            break;
          }
        }
        if (!nextEntryWithIssue) {
          nextEntryWithIssue = firstEntryWithIssue;
        }
      }
      return nextEntryWithIssue;
    }
  }, {
    key: "scrollToNextIssue",
    value: function scrollToNextIssue() {
      var nextEntryWithIssue = this.getNextEntryWithIssue();
      var scrollTopOffset = this.stickyTopContainer.offsetHeight;
      var entryScrollPosition = nextEntryWithIssue.getBoundingClientRect().top + window.pageYOffset - scrollTopOffset;
      this.modal.scrollTo({
        top: entryScrollPosition,
        behavior: 'smooth'
      });
      this.lastScrolledToEntryWithIssue = nextEntryWithIssue;
    }
  }, {
    key: "searchEntries",
    value: function searchEntries(searchText) {
      var _this = this;
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        var doesEntryMatchSearch = _this.checkEntryMatchesSearch(entry, searchText);
        entry.classList.toggle('ibexa-user-invitation-modal__entry--not-matching-search', !doesEntryMatchSearch);
      });
    }
  }, {
    key: "toggleSearchNoEntriesBasedOnSearch",
    value: function toggleSearchNoEntriesBasedOnSearch() {
      var isAnyEntryShowed = !!this.modal.querySelectorAll('.ibexa-user-invitation-modal__entry:not(.ibexa-user-invitation-modal__entry--not-matching-search)').length;
      this.searchNoEntries.classList.toggle('ibexa-user-invitation-modal__search-no-entries--hidden', isAnyEntryShowed);
    }
  }, {
    key: "toggleUpload",
    value: function toggleUpload(isForceHide) {
      this.fileUploadMessage.classList.toggle('ibexa-user-invitation-modal__upload-file-message--hidden', isForceHide);
      this.dropZone.classList.toggle('ibexa-user-invitation-modal__drop--hidden', isForceHide);
    }
  }, {
    key: "showUploadedFileNotification",
    value: function showUploadedFileNotification(fileName) {
      var message = Translator.trans(/*@Desc("File %fileName% was uploaded")*/'modal.file_uploaded.message', {
        fileName: fileName
      }, 'ibexa_user_invitation');
      ibexa.helpers.notification.showInfoNotification(message);
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      var _this2 = this;
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        return _this2.deleteEntry(entry);
      });
      this.manageIssuesAlert();
      this.updateModalTitle();
      this.toggleUpload(false);
    }
  }, {
    key: "preventDefaultAction",
    value: function preventDefaultAction(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "handleInvitationFile",
    value: function () {
      var _handleInvitationFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
        var _this3 = this;
        var numberOfNonEmptyLines, invitationsData, entriesBeforeFileAdded;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.toggleUpload(true);
              this.showUploadedFileNotification(file.name);
              _context.next = 4;
              return this.countFilledLinesInFile(file);
            case 4:
              numberOfNonEmptyLines = _context.sent;
              _context.next = 7;
              return this.processCSVInvitationFile(file);
            case 7:
              invitationsData = _context.sent;
              if (!(numberOfNonEmptyLines === 0 || numberOfNonEmptyLines !== invitationsData.length)) {
                _context.next = 12;
                break;
              }
              this.toggleBadFileAlert(true);
              this.toggleUpload(false);
              return _context.abrupt("return");
            case 12:
              this.toggleBadFileAlert(false);
              this.deleteTrailingEntriesIfEmpty();
              entriesBeforeFileAdded = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
              invitationsData.forEach(function (invitationData) {
                var duplicateEntry = _this3.findDuplicateEntry(invitationData, entriesBeforeFileAdded);
                if (duplicateEntry) {
                  _this3.toggleDuplicateEntryState(duplicateEntry, true);
                  _this3.manageIssuesAlert();
                } else {
                  var _this3$addEntry = _this3.addEntry(true, invitationData),
                    insertedEntry = _this3$addEntry.insertedEntry;
                  _this3.validateEntryEmail(insertedEntry);
                }
              });
              this.updateModalTitle();
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function handleInvitationFile(_x) {
        return _handleInvitationFile.apply(this, arguments);
      }
      return handleInvitationFile;
    }()
  }, {
    key: "handleInputUpload",
    value: function handleInputUpload(event) {
      this.preventDefaultAction(event);
      var file = this.fileInput.files[0];
      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleDropUpload",
    value: function handleDropUpload(event) {
      this.preventDefaultAction(event);
      var file = event.dataTransfer.files[0];
      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleSearch",
    value: function handleSearch() {
      this.searchEntries(this.searchInput.value);
      this.toggleSearchNoEntriesBasedOnSearch();
    }
  }, {
    key: "updateModalTitle",
    value: function updateModalTitle() {
      var titleNode = this.modal.querySelector('.modal-title');
      var invitationsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry').length;
      titleNode.innerText = Translator.trans(/*@Desc("Invite members (%invitations_count%)")*/'modal.title', {
        invitations_count: invitationsCount
      }, 'ibexa_user_invitation');
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;
      var ENTER_KEY_CODE = 13;
      this.initialEntries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      this.entryCounter = this.initialEntries.length;
      this.initialEntries.forEach(function (initialEntry) {
        _this4.attachEntryListeners(initialEntry);
        var emailInput = initialEntry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
        var isEmailEmpty = !emailInput.value;
        if (!isEmailEmpty) {
          _this4.validateEntryEmail(initialEntry);
        }
      });
      this.modal.addEventListener('shown.bs.modal', function () {
        window.addEventListener('drop', _this4.preventDefaultAction, false);
        window.addEventListener('dragover', _this4.preventDefaultAction, false);
      });
      this.modal.addEventListener('hidden.bs.modal', function () {
        window.removeEventListener('drop', _this4.preventDefaultAction, false);
        window.removeEventListener('dragover', _this4.preventDefaultAction, false);
        _this4.clearForm();
      });
      this.addNextBtn.addEventListener('click', this.handleEntryAdd, false);
      this.dropZone.addEventListener('drop', this.handleDropUpload, false);
      this.uploadLocalFileBtn.addEventListener('click', function (event) {
        event.preventDefault();
        _this4.fileInput.value = '';
        _this4.fileInput.click();
      }, false);
      this.fileInput.addEventListener('change', this.handleInputUpload, false);
      this.badFileAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleBadFileAlert(false);
      }, false);
      this.issuesAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleIssuesAlert(false);
      }, false);
      this.goToNextIssueBtn.addEventListener('click', this.scrollToNextIssue, false);
      this.searchInput.addEventListener('keyup', this.handleSearch, false);
      this.searchBtn.addEventListener('keyup', this.handleSearch, false);
      this.fakeSubmitBtn.addEventListener('click', function () {
        var allEntries = _toConsumableArray(_this4.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry'));
        var isFormValid = allEntries.map(function (entry) {
          return _this4.validateEntryEmail(entry);
        }).every(function (isError) {
          return !isError;
        });
        if (isFormValid) {
          _this4.realSubmitBtn.click();
        }
      }, false);
      this.updateModalTitle();
      this.form.addEventListener('keydown', function (event) {
        if (event.keyCode === ENTER_KEY_CODE) {
          event.preventDefault();
        }
      }, false);
    }
  }]);
}();

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCssClassNames: () => (/* binding */ createCssClassNames)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var createCssClassNames = function createCssClassNames(classes) {
  if (Object.prototype.toString.call(classes) !== '[object Object]') {
    return '';
  }
  return Object.entries(classes).reduce(function (total, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      condition = _ref2[1];
    if (condition) {
      return "".concat(total, " ").concat(name);
    }
    return total;
  }, '').trim();
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Clones any object. Faster alternative to `JSON.parse(JSON.stringify)`
 *
 * @function deepClone
 * @param {Any} data
 * @returns {Any} cloned data
 */
var _deepClone = function deepClone(data) {
  var clonedData;
  if (_typeof(data) !== 'object') {
    return data;
  }
  if (!data) {
    return data;
  }
  if (Object.prototype.toString.apply(data) === '[object Array]') {
    clonedData = [];
    for (var i = 0; i < data.length; i++) {
      clonedData[i] = _deepClone(data[i]);
    }
    return clonedData;
  }
  clonedData = {};
  for (var _i in data) {
    if (Object.prototype.hasOwnProperty.call(data, _i)) {
      clonedData[_i] = _deepClone(data[_i]);
    }
  }
  return clonedData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_deepClone);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBasicRequestInit: () => (/* binding */ getBasicRequestInit),
/* harmony export */   handleRequestError: () => (/* binding */ handleRequestError),
/* harmony export */   handleRequestResponse: () => (/* binding */ handleRequestResponse),
/* harmony export */   handleRequestResponseStatus: () => (/* binding */ handleRequestResponseStatus)
/* harmony export */ });
/**
 * Returns basic RequestInit object for Request
 *
 * @function getBasicRequestInit
 * @param {Object} restInfo REST config hash containing: token and siteaccess properties
 * @returns {RequestInit}
 */
var getBasicRequestInit = function getBasicRequestInit(_ref) {
  var token = _ref.token,
    siteaccess = _ref.siteaccess;
  return {
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  };
};

/**
 * Handles request error
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Response}
 */
var handleRequestError = function handleRequestError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/**
 * Handles request response
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Error|Promise}
 */
var handleRequestResponse = function handleRequestResponse(response) {
  return handleRequestError(response).json();
};

/**
 * Handles request response; returns status if response is OK
 *
 * @function handleRequestResponseStatus
 * @param {Response} response
 * @returns {number}
 */
var handleRequestResponseStatus = function handleRequestResponseStatus(response) {
  return handleRequestError(response).status;
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _urlIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlIcon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/urlIcon.js");
/* harmony import */ var _includedIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./includedIcon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/includedIcon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var Icon = function Icon(props) {
  var cssClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'ibexa-icon': true
  }, props.extraClasses, true));
  var isIconIncluded = props.useIncludedIcon || (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.isExternalInstance)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isIconIncluded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_includedIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cssClass: cssClass,
    name: props.name,
    defaultIconName: props.defaultIconName
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urlIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cssClass: cssClass,
    name: props.name,
    customPath: props.customPath
  }));
};
Icon.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  customPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  useIncludedIcon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  defaultIconName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Icon.defaultProps = {
  customPath: null,
  name: null,
  extraClasses: null,
  useIncludedIcon: false,
  defaultIconName: 'about-info'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/includedIcon.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/includedIcon.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/about.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_info_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/about-info.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_approved_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/approved.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_article_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/article.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_back_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/back.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/blog.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_post_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_up_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_circle_close_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_create_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/create.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_checkmark_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_content_tree_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_date_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/date.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_discard_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/discard.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_drag_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/drag.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_download_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/download.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_duplicate_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_edit_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/edit.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_expand_left_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_fields_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/fields.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_file_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/file.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_filters_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/filters.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_folder_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/folder.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_form_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/form.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_gallery_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/gallery.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_image_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/image.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_landing_page_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_notice_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/notice.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_options_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/options.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_place_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/place.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_product_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/product.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_qa_form_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_search_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/search.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/spinner.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_system_information_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/system-information.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_trash_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/trash.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_video_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/video.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/view.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_grid_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_list_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/view-list.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/user.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_group_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/user_group.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/upload.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_image_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_warning_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/warning.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg");
















































var iconsMap = {
  about: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_svg__WEBPACK_IMPORTED_MODULE_2__,
  'about-info': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_info_svg__WEBPACK_IMPORTED_MODULE_3__,
  approved: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_approved_svg__WEBPACK_IMPORTED_MODULE_4__,
  article: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_article_svg__WEBPACK_IMPORTED_MODULE_5__,
  back: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_back_svg__WEBPACK_IMPORTED_MODULE_6__,
  blog: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_svg__WEBPACK_IMPORTED_MODULE_7__,
  blog_post: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_post_svg__WEBPACK_IMPORTED_MODULE_8__,
  'caret-down': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_9__,
  'caret-up': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_up_svg__WEBPACK_IMPORTED_MODULE_10__,
  'circle-close': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_circle_close_svg__WEBPACK_IMPORTED_MODULE_11__,
  create: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_create_svg__WEBPACK_IMPORTED_MODULE_12__,
  checkmark: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_checkmark_svg__WEBPACK_IMPORTED_MODULE_13__,
  'content-tree': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_content_tree_svg__WEBPACK_IMPORTED_MODULE_14__,
  date: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_date_svg__WEBPACK_IMPORTED_MODULE_15__,
  discard: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_discard_svg__WEBPACK_IMPORTED_MODULE_16__,
  drag: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_drag_svg__WEBPACK_IMPORTED_MODULE_17__,
  download: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_download_svg__WEBPACK_IMPORTED_MODULE_18__,
  duplicate: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_duplicate_svg__WEBPACK_IMPORTED_MODULE_19__,
  'expand-left': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_expand_left_svg__WEBPACK_IMPORTED_MODULE_21__,
  edit: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_edit_svg__WEBPACK_IMPORTED_MODULE_20__,
  file: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_file_svg__WEBPACK_IMPORTED_MODULE_23__,
  filters: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_filters_svg__WEBPACK_IMPORTED_MODULE_24__,
  fields: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_fields_svg__WEBPACK_IMPORTED_MODULE_22__,
  folder: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_folder_svg__WEBPACK_IMPORTED_MODULE_25__,
  form: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_form_svg__WEBPACK_IMPORTED_MODULE_26__,
  gallery: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_gallery_svg__WEBPACK_IMPORTED_MODULE_27__,
  image: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_image_svg__WEBPACK_IMPORTED_MODULE_28__,
  landing_page: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_landing_page_svg__WEBPACK_IMPORTED_MODULE_29__,
  notice: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_notice_svg__WEBPACK_IMPORTED_MODULE_30__,
  options: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_options_svg__WEBPACK_IMPORTED_MODULE_31__,
  place: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_place_svg__WEBPACK_IMPORTED_MODULE_32__,
  product: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_product_svg__WEBPACK_IMPORTED_MODULE_33__,
  'qa-form': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_qa_form_svg__WEBPACK_IMPORTED_MODULE_34__,
  search: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_search_svg__WEBPACK_IMPORTED_MODULE_35__,
  spinner: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_36__,
  'system-information': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_system_information_svg__WEBPACK_IMPORTED_MODULE_37__,
  trash: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_trash_svg__WEBPACK_IMPORTED_MODULE_38__,
  video: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_video_svg__WEBPACK_IMPORTED_MODULE_39__,
  view: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_svg__WEBPACK_IMPORTED_MODULE_40__,
  'view-grid': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_grid_svg__WEBPACK_IMPORTED_MODULE_41__,
  'view-list': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_list_svg__WEBPACK_IMPORTED_MODULE_42__,
  user: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_svg__WEBPACK_IMPORTED_MODULE_43__,
  user_group: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_group_svg__WEBPACK_IMPORTED_MODULE_44__,
  upload: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_svg__WEBPACK_IMPORTED_MODULE_45__,
  'upload-image': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_image_svg__WEBPACK_IMPORTED_MODULE_46__,
  warning: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_warning_svg__WEBPACK_IMPORTED_MODULE_47__
};
var IncludedIcon = function IncludedIcon(props) {
  var _iconsMap$name;
  var name = props.name,
    cssClass = props.cssClass,
    defaultIconName = props.defaultIconName;
  var IconComponent = (_iconsMap$name = iconsMap[name]) !== null && _iconsMap$name !== void 0 ? _iconsMap$name : iconsMap[defaultIconName];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, {
    className: cssClass
  });
};
IncludedIcon.propTypes = {
  cssClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  defaultIconName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
IncludedIcon.defaultProps = {
  cssClass: '',
  name: 'about-info',
  defaultIconName: 'about-info'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IncludedIcon);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/urlIcon.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/urlIcon.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js");



var UrlIcon = function UrlIcon(props) {
  var _props$customPath;
  var linkHref = (_props$customPath = props.customPath) !== null && _props$customPath !== void 0 ? _props$customPath : (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_2__.getIconPath)(props.name);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: props.cssClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: linkHref
  }));
};
UrlIcon.propTypes = {
  cssClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  customPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
UrlIcon.defaultProps = {
  customPath: null,
  name: null,
  cssClass: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlIcon);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
var _excluded = ["className", "onClick", "disabled", "preventClose", "label"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var CLASS_NON_SCROLLABLE = 'ibexa-non-scrollable';
var CLASS_MODAL_OPEN = 'modal-open';
var MODAL_CONFIG = {
  backdrop: 'static',
  keyboard: true
};
var MODAL_SIZE_CLASS = {
  small: 'modal-sm',
  medium: '',
  large: 'modal-lg'
};
var Popup = function Popup(_ref) {
  var isVisible = _ref.isVisible,
    onClose = _ref.onClose,
    children = _ref.children,
    title = _ref.title,
    subtitle = _ref.subtitle,
    hasFocus = _ref.hasFocus,
    noKeyboard = _ref.noKeyboard,
    actionBtnsConfig = _ref.actionBtnsConfig,
    size = _ref.size,
    noHeader = _ref.noHeader,
    noFooter = _ref.noFooter,
    noCloseBtn = _ref.noCloseBtn,
    extraClasses = _ref.extraClasses,
    showTooltip = _ref.showTooltip,
    subheader = _ref.subheader;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getRootDOMElement)();
  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var latestBootstrapModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getTranslator)();
  var bootstrap = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getBootstrap)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    rootDOMElement.classList.toggle(CLASS_MODAL_OPEN, isVisible);
    rootDOMElement.classList.toggle(CLASS_NON_SCROLLABLE, isVisible);
    if (isVisible) {
      showPopup();
      modalRef.current.addEventListener('hidden.bs.modal', onClose);
    } else {
      if (latestBootstrapModal.current) {
        latestBootstrapModal.current.hide();
      }
    }
  }, [isVisible]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (latestBootstrapModal.current) {
        latestBootstrapModal.current.hide();
      }
    };
  }, []);
  if (!isVisible) {
    return null;
  }
  var modalClasses = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-popup modal fade': true,
    'c-popup--no-header': noHeader,
    'c-popup--has-subheader': !noHeader && subheader
  }, extraClasses, extraClasses));
  var closeBtnLabel = Translator.trans(/*@Desc("Close")*/'popup.close.label', {}, 'ibexa_universal_discovery_widget');
  var hidePopup = function hidePopup() {
    latestBootstrapModal.current.hide();
    rootDOMElement.classList.remove(CLASS_MODAL_OPEN, CLASS_NON_SCROLLABLE);
  };
  var showPopup = function showPopup() {
    var initializedBackdropRootElement = latestBootstrapModal.current._backdrop._config.rootElement;
    if (initializedBackdropRootElement !== rootDOMElement) {
      latestBootstrapModal.current._backdrop._config.rootElement = rootDOMElement;
    }
    latestBootstrapModal.current.show();
  };
  var handleOnClick = function handleOnClick(event, onClick, preventClose) {
    if (!preventClose) {
      hidePopup();
    }
    onClick(event, hidePopup);
  };
  var renderCloseBtn = function renderCloseBtn() {
    if (noCloseBtn) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "close c-popup__btn--close",
      "data-bs-dismiss": "modal",
      "aria-label": closeBtnLabel,
      onClick: hidePopup
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "discard",
      extraClasses: "ibexa-icon--small"
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: function ref(_ref3) {
      modalRef.current = _ref3;
      if (_ref3) {
        latestBootstrapModal.current = bootstrap.Modal.getOrCreateInstance(modalRef.current, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
          keyboard: !noKeyboard,
          focus: hasFocus
        }));
      }
    },
    className: modalClasses,
    tabIndex: hasFocus ? -1 : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-dialog c-popup__dialog ".concat(MODAL_SIZE_CLASS[size]),
    role: "dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-content c-popup__content"
  }, noHeader ? renderCloseBtn() : title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-header c-popup__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "modal-title c-popup__headline",
    title: showTooltip ? title : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-popup__title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-popup__subtitle"
  }, subtitle)), renderCloseBtn()), subheader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-popup__subheader"
  }, subheader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-body c-popup__body"
  }, children), !noFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-footer c-popup__footer"
  }, actionBtnsConfig.map(function (_ref2) {
    var className = _ref2.className,
      onClick = _ref2.onClick,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$preventClose = _ref2.preventClose,
      preventClose = _ref2$preventClose === void 0 ? false : _ref2$preventClose,
      label = _ref2.label,
      extraProps = _objectWithoutProperties(_ref2, _excluded);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
      key: label,
      type: "button",
      className: "btn ibexa-btn ".concat(className),
      onClick: onClick ? function (event) {
        return handleOnClick(event, onClick, preventClose);
      } : hidePopup,
      disabled: disabled
    }, extraProps), label);
  })))));
};
Popup.propTypes = {
  actionBtnsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    preventClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  })).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hasFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  noHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noFooter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noCloseBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noKeyboard: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  showTooltip: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  subheader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
Popup.defaultProps = {
  hasFocus: true,
  noKeyboard: false,
  onClose: null,
  size: 'large',
  noHeader: false,
  noFooter: false,
  noCloseBtn: false,
  extraClasses: '',
  title: null,
  subtitle: null,
  showTooltip: true,
  subheader: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_VARIANTS: () => (/* binding */ COLOR_VARIANTS),
/* harmony export */   SIZES: () => (/* binding */ SIZES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
var COLOR_VARIANTS = {
  PRIMARY: 'primary',
  LIGHT: 'light'
};
var Spinner = function Spinner(_ref) {
  var size = _ref.size,
    colorVariant = _ref.colorVariant;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty(_defineProperty({
    'c-spinner': true
  }, "c-spinner--".concat(size), true), "c-spinner--".concat(colorVariant), true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  });
};
Spinner.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.values(SIZES)),
  colorVariant: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.values(COLOR_VARIANTS))
};
Spinner.defaultProps = {
  size: SIZES.MEDIUM,
  colorVariant: COLOR_VARIANTS.PRIMARY
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/Resources/public/js/add.translation.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/Resources/public/js/add.translation.js ***!
  \*************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, bootstrap) {
  var _ibexa$helpers$text = ibexa.helpers.text,
    escapeHTML = _ibexa$helpers$text.escapeHTML,
    escapeHTMLAttribute = _ibexa$helpers$text.escapeHTMLAttribute;
  var dangerouslyInsertAdjacentHTML = ibexa.helpers.dom.dangerouslyInsertAdjacentHTML;
  var openTranslationModal = function openTranslationModal(event) {
    var _event$detail = event.detail,
      item = _event$detail.item,
      contentLanguages = _event$detail.contentLanguages,
      permissions = _event$detail.permissions;
    var restrictedLanguageCodes = permissions.restrictedLanguageCodesList.restrictedLanguageCodes;
    var existingLanguages = contentLanguages.map(function (_ref) {
      var languageCode = _ref.languageCode;
      return languageCode;
    });
    var contentFormContainer = doc.querySelector('.ibexa-content-tree-content-form-container--translation');
    var modal = contentFormContainer.querySelector('#content-tree-add-translation-modal');
    var locationInput = modal.querySelector('[name="content_tree_content_translation[location]"]');
    var baseLanguage = modal.querySelector('.ibexa-translation__language-wrapper--base-language');
    var targetLanguage = modal.querySelector('.ibexa-translation__language-wrapper--language');
    var modalWidget = bootstrap.Modal.getOrCreateInstance(modal);
    var noLanguageOption = baseLanguage.querySelector('[value=""]');
    locationInput.value = item.id;
    targetLanguage.innerHTML = '';
    baseLanguage.innerHTML = '';
    baseLanguage.append(noLanguageOption);
    Object.values(ibexa.adminUiConfig.languages.mappings).forEach(function (_ref2) {
      var languageCode = _ref2.languageCode,
        name = _ref2.name,
        enabled = _ref2.enabled;
      var hasPermissionToLanguage = restrictedLanguageCodes.length === 0 || restrictedLanguageCodes.includes(languageCode);
      if (!enabled || !hasPermissionToLanguage) {
        return;
      }
      var nameHtmlEscaped = escapeHTML(name);
      var languageCodeHtmlAttributeEscaped = escapeHTMLAttribute(languageCode);
      var optionRendered = "<option value=\"".concat(languageCodeHtmlAttributeEscaped, "\">").concat(nameHtmlEscaped, "</option>");
      var container = doc.createElement('select');
      dangerouslyInsertAdjacentHTML(container, 'beforeend', optionRendered);
      if (existingLanguages.includes(languageCode)) {
        baseLanguage.append(container.firstElementChild);
      } else {
        targetLanguage.append(container.firstElementChild);
      }
    });
    modalWidget.show();
  };
  doc.body.addEventListener('ibexa-content-tree:open-language-modal', openTranslationModal, false);
})(window, window.document, window.ibexa, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/Resources/public/js/create.content.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/Resources/public/js/create.content.js ***!
  \************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, Translator) {
  var contentFormContainer = doc.querySelector('.ibexa-content-tree-content-form-container--create');
  if (!contentFormContainer) {
    return;
  }
  var contentTypeItemsContainers = contentFormContainer.querySelector('.ibexa-instant-filter__items');
  var contentTypeGroups = _toConsumableArray(contentTypeItemsContainers.querySelectorAll('.ibexa-instant-filter__group'));
  var contentTypesMap = Object.values(ibexa.adminUiConfig.contentTypes).reduce(function (output, contentTypeGroup) {
    return contentTypeGroup.reduce(function (groupOutput, group) {
      return _objectSpread(_defineProperty({}, group.id, group), groupOutput);
    }, output);
  }, {});
  var prepareLanguageDropdown = function prepareLanguageDropdown() {
    var dropdownSource = contentFormContainer.querySelector('.ibexa-extra-actions__section-content .ibexa-dropdown__source .ibexa-input');
    dropdownSource.innerHTML = '';
    var configLanguages = ibexa.adminUiConfig.languages;
    var languages = configLanguages.priority.map(function (languageCode) {
      return configLanguages.mappings[languageCode];
    });
    Object.values(languages).forEach(function (_ref) {
      var languageCode = _ref.languageCode,
        name = _ref.name,
        enabled = _ref.enabled;
      if (!enabled) {
        return;
      }
      var optionRendered = "<option value=\"".concat(languageCode, "\">").concat(name, "</option>");
      var container = doc.createElement('select');
      container.insertAdjacentHTML('beforeend', optionRendered);
      dropdownSource.append(container.firstElementChild);
    });
    if (languages.length) {
      dropdownSource.value = languages[0].languageCode;
    }
  };
  var preparePermissionsWidget = function preparePermissionsWidget(permissions) {
    if (!permissions.restrictedContentTypeIdsList.restrictedContentTypeIds.length) {
      return;
    }
    var visibleTypes = permissions.restrictedContentTypeIdsList.restrictedContentTypeIds.map(function (contentTypeId) {
      return contentTypesMap[parseInt(contentTypeId, 10)].identifier;
    });
    contentTypeGroups.forEach(function (group) {
      var contentTypeGroupItems = _toConsumableArray(group.querySelectorAll('.ibexa-instant-filter__group-item'));
      var groupHiddenItemsCount = 0;
      contentTypeGroupItems.forEach(function (groupItem) {
        var groupItemInput = groupItem.querySelector('.ibexa-input--radio');
        var isElementHidden = !visibleTypes.includes(groupItemInput.value);
        groupItem.classList.toggle('ibexa-content-tree-content-form-container__hidden-element', isElementHidden);
        if (isElementHidden) {
          groupHiddenItemsCount++;
        }
      });
      group.classList.toggle('ibexa-content-tree-content-form-container__hidden-element', groupHiddenItemsCount === contentTypeGroupItems.length);
    });
  };
  var prepareSuggestionsWidget = function prepareSuggestionsWidget() {
    var suggestions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var existingSuggestionContainer = contentTypeItemsContainers.querySelector('.ibexa-instant-filter__group--suggestions');
    existingSuggestionContainer === null || existingSuggestionContainer === void 0 || existingSuggestionContainer.remove();
    if (!suggestions.length) {
      return;
    }
    var groupTemplate = contentTypeItemsContainers.dataset.groupTemplate;
    var suggestionsHeader = Translator.trans(/*@Desc("Suggestions")*/'content_type_suggestions', {}, 'ibexa_content_tree_ui');
    var suggestionsNewContainer = doc.createElement('div');
    var filledTemplate = groupTemplate.replace('{{ group_name }}', suggestionsHeader).replace('{{ group_options }}', '');
    var groupsParent = contentTypeItemsContainers.querySelector('.ibexa-instant-filter__group').parentNode;
    suggestionsNewContainer.insertAdjacentHTML('beforeend', filledTemplate);
    var suggestionsGroup = suggestionsNewContainer.querySelector('.ibexa-instant-filter__group');
    suggestionsGroup.classList.add('ibexa-instant-filter__group--suggestions');
    suggestions.forEach(function (_ref2) {
      var identifier = _ref2.identifier;
      var item = contentTypeItemsContainers.querySelector(".ibexa-instant-filter__group-item[data-identifier=\"".concat(identifier, "\"]"));
      var clonedItem = item.cloneNode(true);
      var clonedInput = clonedItem.querySelector('.ibexa-input');
      var clonedInputId = "".concat(clonedInput.id, "__ibexa_suggestion");
      clonedItem.querySelectorAll("label[for=\"".concat(clonedInput.id, "\"]")).forEach(function (labelNode) {
        return labelNode.setAttribute('for', clonedInputId);
      });
      clonedInput.setAttribute('id', clonedInputId);
      suggestionsGroup.append(clonedItem);
    });
    groupsParent.prepend(suggestionsGroup);
    doc.body.dispatchEvent(new CustomEvent('ibexa-instant-filters:add-group', {
      detail: {
        container: suggestionsGroup
      }
    }));
  };
  var openContentCreateWidget = function openContentCreateWidget(event) {
    var _event$detail = event.detail,
      permissions = _event$detail.permissions,
      item = _event$detail.item,
      suggestions = _event$detail.suggestions;
    var locationInput = contentFormContainer.querySelector('[name="content_tree_content_create[parent_location]"]');
    locationInput.value = item.id;
    preparePermissionsWidget(permissions);
    prepareLanguageDropdown();
    prepareSuggestionsWidget(suggestions);
    document.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:toggle-widget', {
      detail: {
        actions: 'content-tree-create'
      }
    }));
  };
  doc.body.addEventListener('ibexa-content-tree:open-create-widget', openContentCreateWidget, false);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/Resources/public/js/edit.content.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/Resources/public/js/edit.content.js ***!
  \**********************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var openContentEditWidget = function openContentEditWidget(event) {
    var MIN_ITEMS_WITH_SEARCH = 10;
    var _event$detail = event.detail,
      item = _event$detail.item,
      contentLanguages = _event$detail.contentLanguages,
      permissions = _event$detail.permissions;
    var restrictedLanguageCodes = permissions.restrictedLanguageCodesList.restrictedLanguageCodes;
    var contentFormContainer = doc.querySelector('.ibexa-content-tree-content-form-container--edit');
    var contentInput = contentFormContainer.querySelector('[name="content_tree_content_edit[content_info]"]');
    var locationInput = contentFormContainer.querySelector('[name="content_tree_content_edit[location]"]');
    var contentLanguagesCodes = contentLanguages.map(function (_ref) {
      var languageCode = _ref.languageCode;
      return languageCode;
    }).filter(function (languageCode) {
      return restrictedLanguageCodes.length === 0 || restrictedLanguageCodes.includes(languageCode);
    });
    var isSearchEnabled = contentLanguages.length >= MIN_ITEMS_WITH_SEARCH;
    var extraActionsContainer = contentFormContainer.querySelector('.ibexa-extra-actions');
    var instantFilterInput = extraActionsContainer.querySelector('.ibexa-instant-filter__input-wrapper');
    extraActionsContainer.classList.toggle('ibexa-extra-actions--has-search', isSearchEnabled);
    instantFilterInput.classList.toggle('ibexa-instant-filter__input-wrapper--hidden', !isSearchEnabled);
    contentInput.value = item.internalItem.contentId;
    locationInput.value = item.internalItem.locationId;
    if (contentLanguagesCodes.length !== 1) {
      var inputs = contentFormContainer.querySelectorAll('.ibexa-input--radio');
      _toConsumableArray(inputs).forEach(function (input) {
        var optionWrapper = input.closest('.form-check');
        optionWrapper.hidden = !contentLanguagesCodes.includes(input.value);
      });
      document.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:toggle-widget', {
        detail: {
          actions: 'content-tree-edit'
        }
      }));
    } else {
      var languageRadioOption = contentFormContainer.querySelector(".ibexa-input--radio[value=\"".concat(contentLanguagesCodes[0], "\"]"));
      if (!languageRadioOption) {
        return;
      }
      languageRadioOption.checked = true;
      languageRadioOption.dispatchEvent(new CustomEvent('change', {
        detail: {
          sendImmediately: true
        }
      }));
    }
  };
  doc.body.addEventListener('ibexa-content-tree:open-edit-widget', openContentEditWidget, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/Resources/public/js/hide.reveal.content.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/Resources/public/js/hide.reveal.content.js ***!
  \*****************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var contentFormContainer = doc.querySelector('.ibexa-content-tree-content-form-container--visibility');
  var hideRevealContent = function hideRevealContent(item, visible) {
    var form = contentFormContainer.querySelector('form');
    var contentInput = contentFormContainer.querySelector('[name="content_tree_content_visibility[contentInfo]"]');
    var locationInput = contentFormContainer.querySelector('[name="content_tree_content_visibility[location]"]');
    var visibilityInput = contentFormContainer.querySelector('[name="content_tree_content_visibility[visible]"]');
    contentInput.value = item.internalItem.contentId;
    locationInput.value = item.internalItem.locationId;
    visibilityInput.value = visible ? 1 : 0;
    form.submit();
  };
  var hideContent = function hideContent(event) {
    if (event.detail.item.internalItem.reverseRelationsCount) {
      var handleConfirm = function handleConfirm() {
        return hideRevealContent(event.detail.item, false);
      };
      var modal = contentFormContainer.querySelector('#content-tree-hide-content-modal');
      var confirmBtn = modal.querySelector('.ibexa-btn--confirm');
      doc.body.appendChild(modal); // move element on top of everything to avoid being nested in absolute element
      bootstrap.Modal.getOrCreateInstance(modal).show();
      confirmBtn.addEventListener('click', handleConfirm, false);
      modal.addEventListener('hidden.bs.modal', function () {
        contentFormContainer.append(modal);
        confirmBtn.removeEventListener('click', handleConfirm, false);
      });
    } else {
      hideRevealContent(event.detail.item, false);
    }
  };
  var revealContent = function revealContent(event) {
    hideRevealContent(event.detail.item, true);
  };
  doc.body.addEventListener('ibexa-content-tree:hide', hideContent, false);
  doc.body.addEventListener('ibexa-content-tree:reveal', revealContent, false);
})(window, window.document, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/content.type.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/content.type.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsContainer: () => (/* binding */ checkIsContainer)
/* harmony export */ });
var checkIsContainer = function checkIsContainer(item) {
  return item.internalItem && item.internalItem.isContainer;
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContentLink: () => (/* binding */ getContentLink),
/* harmony export */   getPermissions: () => (/* binding */ getPermissions),
/* harmony export */   isUser: () => (/* binding */ isUser)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var getContentLink = function getContentLink(item) {
  var locationHref = window.Routing.generate('ibexa.content.view', {
    contentId: item.contentId,
    locationId: item.locationId
  });
  return locationHref;
};
var isUser = function isUser(contentTypesInfoMap, _ref) {
  var ContentInfo = _ref.ContentInfo;
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)();
  var contentType = contentTypesInfoMap[ContentInfo.Content.ContentType._href];
  return adminUiConfig.userContentTypes.includes(contentType.identifier);
};
var getPermissions = function getPermissions() {
  var permissions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var permissionName = arguments.length > 1 ? arguments[1] : undefined;
  return permissions.find(function (_ref2) {
    var _name = _ref2._name;
    return _name === permissionName;
  });
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/notifications.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/notifications.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNotDeletedItemsData: () => (/* binding */ getNotDeletedItemsData)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var getNotDeletedItemsData = function getNotDeletedItemsData(notDeletedItems, deletedItems, isUser) {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
  var output = {
    message: null
  };
  var hadUserContentItemFailed = notDeletedItems.some(isUser);
  var hadNonUserContentItemFailed = notDeletedItems.some(function (item) {
    return !isUser(item);
  });
  if (hadUserContentItemFailed && hadNonUserContentItemFailed) {
    output.message = Translator.trans(/*@Desc("%notDeletedCount% of the %totalCount% selected item(s) could not be deleted or sent to Trash because you do not have proper user permissions. Contact your Administrator.")*/'bulk_delete.error.message.users_with_nonusers', {
      notDeletedCount: notDeletedItems.length,
      totalCount: deletedItems.length + notDeletedItems.length
    }, 'ibexa_content_tree_ui');
  } else if (hadUserContentItemFailed) {
    output.message = Translator.trans(/*@Desc("%notDeletedCount% of the %totalCount% selected item(s) could not be deleted because you do not have proper user permissions. Contact your Administrator.")*/'bulk_delete.error.message.users', {
      notDeletedCount: notDeletedItems.length,
      totalCount: deletedItems.length + notDeletedItems.length
    }, 'ibexa_content_tree_ui');
  } else {
    output.message = Translator.trans(/*@Desc("%notDeletedCount% of the %totalCount% selected item(s) could not be sent to Trash because you do not have proper user permissions. Contact your Administrator.")*/'bulk_delete.error.message.nonusers', {
      notDeletedCount: notDeletedItems.length,
      totalCount: deletedItems.length + notDeletedItems.length
    }, 'ibexa_content_tree_ui');
  }
  return output;
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/tree.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/tree.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemToSubtree: () => (/* binding */ addItemToSubtree),
/* harmony export */   clipTooDeepSubtreeBranches: () => (/* binding */ _clipTooDeepSubtreeBranches),
/* harmony export */   expandCurrentLocationInSubtree: () => (/* binding */ expandCurrentLocationInSubtree),
/* harmony export */   findItem: () => (/* binding */ _findItem),
/* harmony export */   generateInitialSubtree: () => (/* binding */ generateInitialSubtree),
/* harmony export */   generateSubtree: () => (/* binding */ _generateSubtree),
/* harmony export */   getLoadSubtreeParams: () => (/* binding */ getLoadSubtreeParams),
/* harmony export */   limitSubitemsInSubtree: () => (/* binding */ _limitSubitemsInSubtree),
/* harmony export */   removeItemFromSubtree: () => (/* binding */ removeItemFromSubtree),
/* harmony export */   updateItemInSubtree: () => (/* binding */ updateItemInSubtree)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _findItem = function findItem(items, originalPath) {
  var path = _toConsumableArray(originalPath);
  var isLeaf = path.length === 1;
  var item = items.find(function (element) {
    return element.locationId === parseInt(path[0], 10);
  });
  if (!item) {
    return null;
  }
  if (isLeaf) {
    return item;
  }
  if (!Array.isArray(item.subitems)) {
    return null;
  }
  path.shift();
  return _findItem(item.subitems, path);
};

var generateSubtreeNode = function generateSubtreeNode(_ref) {
  var locationId = _ref.locationId,
    limit = _ref.limit,
    offset = _ref.offset,
    children = _ref.children;
  return {
    '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
    locationId: locationId,
    limit: limit,
    offset: offset !== null && offset !== void 0 ? offset : 0,
    children: children !== null && children !== void 0 ? children : []
  };
};
var _expandPathInSubtree = function expandPathInSubtree(_ref2) {
  var subtree = _ref2.subtree,
    originalPath = _ref2.path,
    subitemsLimit = _ref2.subitemsLimit;
  var path = _toConsumableArray(originalPath);
  if (!path.length) {
    return;
  }
  var locationId = parseInt(path[0], 10);
  var nextSubtree = subtree.children.find(function (subtreeChild) {
    return subtreeChild.locationId === locationId;
  });
  if (!nextSubtree) {
    nextSubtree = generateSubtreeNode({
      locationId: locationId,
      limit: subitemsLimit
    });
    subtree.children.push(nextSubtree);
  }
  path.shift();
  _expandPathInSubtree({
    subtree: nextSubtree,
    path: path,
    subitemsLimit: subitemsLimit
  });
};
var findParentSubtree = function findParentSubtree(subtree, originalPath) {
  var path = _toConsumableArray(originalPath);
  if (path.length < 2) {
    return;
  }
  path.shift();
  path.pop();
  return path.reduce(function (subtreeChild, locationId) {
    return subtreeChild.children.find(function (element) {
      return element.locationId === parseInt(locationId, 10);
    });
  }, subtree);
};
var generateInitialSubtree = function generateInitialSubtree(_ref3) {
  var rootLocationId = _ref3.rootLocationId,
    subitemsLoadLimit = _ref3.subitemsLoadLimit;
  return [generateSubtreeNode({
    locationId: rootLocationId,
    limit: subitemsLoadLimit
  })];
};
var getLoadSubtreeParams = function getLoadSubtreeParams(_ref4) {
  var subtree = _ref4.subtree,
    restInfo = _ref4.restInfo,
    sort = _ref4.sort;
  return {
    token: restInfo.token,
    siteaccess: restInfo.siteaccess,
    accessToken: restInfo.accessToken,
    instanceUrl: restInfo.instanceUrl,
    subtree: subtree.current,
    sortClause: sort.sortClause,
    sortOrder: sort.sortOrder
  };
};
var expandCurrentLocationInSubtree = function expandCurrentLocationInSubtree(_ref5) {
  var subtree = _ref5.subtree,
    rootLocationId = _ref5.rootLocationId,
    currentLocationPath = _ref5.currentLocationPath,
    subitemsLimit = _ref5.subitemsLimit;
  var path = currentLocationPath.split('/').filter(function (id) {
    return !!id;
  });
  var rootLocationIdIndex = path.findIndex(function (element) {
    return parseInt(element, 10) === rootLocationId;
  });
  if (rootLocationIdIndex === -1) {
    return;
  }
  var pathStartingAfterRootLocation = path.slice(rootLocationIdIndex - path.length + 1);
  var pathWithoutLeaf = pathStartingAfterRootLocation.slice(0, pathStartingAfterRootLocation.length - 1);
  _expandPathInSubtree({
    subtree: subtree[0],
    path: pathWithoutLeaf,
    subitemsLimit: subitemsLimit
  });
};
var _clipTooDeepSubtreeBranches = function clipTooDeepSubtreeBranches(_ref6) {
  var subtree = _ref6.subtree,
    maxDepth = _ref6.maxDepth;
  if (maxDepth <= 0) {
    subtree.children = [];
    return;
  }
  subtree.children.forEach(function (subtreeChild) {
    return _clipTooDeepSubtreeBranches({
      subtree: subtreeChild,
      maxDepth: maxDepth - 1
    });
  });
};

var _limitSubitemsInSubtree = function limitSubitemsInSubtree(_ref7) {
  var subtree = _ref7.subtree,
    subitemsLimit = _ref7.subitemsLimit;
  subtree.limit = Math.min(subitemsLimit, subtree.limit);
  subtree.children.forEach(function (subtreeChild) {
    return _limitSubitemsInSubtree({
      subtree: subtreeChild,
      subitemsLimit: subitemsLimit
    });
  });
};

var _generateSubtree = function generateSubtree(_ref8) {
  var items = _ref8.items,
    isRoot = _ref8.isRoot,
    subitemsLoadLimit = _ref8.subitemsLoadLimit,
    subitemsLimit = _ref8.subitemsLimit;
  var itemsWithoutLeafs = [];
  var _iterator = _createForOfIteratorHelper(items),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var subitemsCount = item.subitems.length;
      var isLeaf = !subitemsCount;
      if (!isLeaf || isRoot) {
        var limit = subitemsCount ? Math.ceil(subitemsCount / subitemsLoadLimit) * subitemsLoadLimit : subitemsLoadLimit;
        itemsWithoutLeafs.push(generateSubtreeNode({
          locationId: item.locationId,
          limit: Math.min(subitemsLimit, limit),
          children: _generateSubtree({
            items: item.subitems,
            isRoot: false,
            subitemsLoadLimit: subitemsLoadLimit,
            subitemsLimit: subitemsLimit
          })
        }));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return itemsWithoutLeafs;
};

var addItemToSubtree = function addItemToSubtree(subtree, item, path, _ref9) {
  var subitemsLoadLimit = _ref9.subitemsLoadLimit,
    subitemsLimit = _ref9.subitemsLimit;
  var parentSubtree = findParentSubtree(subtree, path);
  if (!parentSubtree) {
    return;
  }
  var limit = Math.ceil(item.subitems.length / subitemsLoadLimit) * subitemsLoadLimit;
  parentSubtree.children.push(generateSubtreeNode({
    locationId: item.locationId,
    limit: Math.min(subitemsLimit, limit)
  }));
};
var removeItemFromSubtree = function removeItemFromSubtree(subtree, item, path) {
  var parentSubtree = findParentSubtree(subtree, path);
  if (!parentSubtree) {
    return;
  }
  var index = parentSubtree.children.findIndex(function (element) {
    return element.locationId === item.locationId;
  });
  if (index > -1) {
    parentSubtree.children.splice(index, 1);
  }
};
var updateItemInSubtree = function updateItemInSubtree(subtree, item, path) {
  var subitemsLoadLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var parentSubtree = findParentSubtree(subtree, path);
  if (!parentSubtree) {
    return;
  }
  var index = parentSubtree.children.findIndex(function (element) {
    return element.locationId === item.locationId;
  });
  if (index > -1) {
    parentSubtree.children[index].limit = Math.max(item.subitems.length, subitemsLoadLimit);
  }
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToBookmarks: () => (/* binding */ addToBookmarks),
/* harmony export */   buildBulkRequest: () => (/* binding */ buildBulkRequest),
/* harmony export */   copyElements: () => (/* binding */ copyElements),
/* harmony export */   deleteElements: () => (/* binding */ deleteElements),
/* harmony export */   findLocationsById: () => (/* binding */ findLocationsById),
/* harmony export */   findSuggestions: () => (/* binding */ findSuggestions),
/* harmony export */   loadContentTypes: () => (/* binding */ loadContentTypes),
/* harmony export */   loadLocationItemExtendedInfo: () => (/* binding */ loadLocationItemExtendedInfo),
/* harmony export */   loadLocationItems: () => (/* binding */ loadLocationItems),
/* harmony export */   loadLocationsWithPermissions: () => (/* binding */ loadLocationsWithPermissions),
/* harmony export */   loadSubtree: () => (/* binding */ loadSubtree),
/* harmony export */   moveElements: () => (/* binding */ moveElements),
/* harmony export */   removeFromBookmarks: () => (/* binding */ removeFromBookmarks)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var _window = window,
  currentLocation = _window.location;
var DEFAULT_INSTANCE_URL = currentLocation.origin;
var ENDPOINT_TRASH_FAKE_LOCATION = '/api/ibexa/v2/content/trash';
var ENDPOINT_CONTENT_TYPES = '/api/ibexa/v2/content/types';
var ENDPOINT_LOAD_SUBITEMS = '/api/ibexa/v2/location/tree/load-subitems';
var ENDPOINT_LOAD_SUBTREE = '/api/ibexa/v2/location/tree/load-subtree';
var ENDPOINT_LOAD_LOCATIONS_WITH_PERMISSIONS = '/api/ibexa/v2/module/universal-discovery/locations';
var ENDPOINT_LOCATION = '/api/ibexa/v2/content/locations';
var ENDPOINT_USER = '/api/ibexa/v2/user/users';
var ENDPOINT_CREATE_VIEW = '/api/ibexa/v2/views';
var ENDPOINT_BOOKMARK = '/api/ibexa/v2/bookmark';
var HEADERS_CREATE_VIEW = {
  Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
  'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1'
};
var ENDPOINT_BULK = '/api/ibexa/v2/bulk';
var HEADERS_BULK = {
  Accept: 'application/vnd.ibexa.api.BulkOperationResponse+json',
  'Content-Type': 'application/vnd.ibexa.api.BulkOperation+json'
};
var QUERY_LIMIT = 50;
var AGGREGATIONS_LIMIT = 4;
var getItemPath = function getItemPath(item, path) {
  var hasPreviousPath = path && path.length;
  var itemPath = "".concat(hasPreviousPath ? "".concat(path, "/") : '').concat(item.locationId);
  return itemPath;
};
var _mapChildrenToSubitemsDeep = function mapChildrenToSubitemsDeep(tree, path) {
  return tree.map(function (subtree) {
    subtree.path = getItemPath(subtree, path);
    mapChildrenToSubitems(subtree);
    subtree.subitems = _mapChildrenToSubitemsDeep(subtree.subitems, subtree.path);
    return subtree;
  });
};
var mapChildrenToSubitems = function mapChildrenToSubitems(location) {
  location.totalSubitemsCount = location.totalChildrenCount;
  location.subitems = location.children;
  delete location.totalChildrenCount;
  delete location.children;
  delete location.displayLimit;
  return location;
};
var loadContentTypes = function loadContentTypes(siteaccess) {
  var instanceUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_INSTANCE_URL;
  var path = "".concat(instanceUrl).concat(ENDPOINT_CONTENT_TYPES);
  var request = new Request(path, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json',
      'X-Siteaccess': siteaccess
    },
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse);
};
var findLocationsById = function findLocationsById(_ref) {
  var token = _ref.token,
    siteaccess = _ref.siteaccess,
    accessToken = _ref.accessToken,
    id = _ref.id,
    _ref$limit = _ref.limit,
    limit = _ref$limit === void 0 ? QUERY_LIMIT : _ref$limit,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0 : _ref$offset,
    _ref$instanceUrl = _ref.instanceUrl,
    instanceUrl = _ref$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref$instanceUrl;
  var path = "".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW);
  var body = JSON.stringify({
    ViewInput: {
      identifier: "tree-builder-locations-by-id-".concat(id),
      "public": false,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: {
          SectionIdentifier: 'ascending'
        },
        Filter: {
          LocationIdCriterion: id
        },
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(path, {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: body,
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include'
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (response) {
    return response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
  });
};
var loadLocationsWithPermissions = function loadLocationsWithPermissions(_ref2) {
  var siteaccess = _ref2.siteaccess,
    id = _ref2.id,
    _ref2$instanceUrl = _ref2.instanceUrl,
    instanceUrl = _ref2$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref2$instanceUrl;
  var path = "".concat(instanceUrl).concat(ENDPOINT_LOAD_LOCATIONS_WITH_PERMISSIONS, "?locationIds=").concat(id);
  var request = new Request(path, {
    method: 'GET',
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      siteaccess: siteaccess,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.LocationListData+json'
      }
    })
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (_ref3) {
    var LocationList = _ref3.LocationList;
    return LocationList.locations;
  });
};
var loadSubtree = function loadSubtree(_ref4) {
  var token = _ref4.token,
    siteaccess = _ref4.siteaccess,
    accessToken = _ref4.accessToken,
    subtree = _ref4.subtree,
    filter = _ref4.filter,
    sortClause = _ref4.sortClause,
    sortOrder = _ref4.sortOrder,
    _ref4$instanceUrl = _ref4.instanceUrl,
    instanceUrl = _ref4$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref4$instanceUrl;
  var path = "".concat(instanceUrl).concat(ENDPOINT_LOAD_SUBTREE);
  if (sortClause && sortOrder) {
    path += "?sortClause=".concat(sortClause, "&sortOrder=").concat(sortOrder);
  }
  var requestBody = {
    LoadSubtreeRequest: {
      '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequest',
      nodes: subtree
    }
  };
  if (filter) {
    requestBody.LoadSubtreeRequest.Filter = filter;
  }
  var request = new Request(path, {
    method: 'POST',
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include',
    body: JSON.stringify(requestBody),
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTreeRoot+json',
        'Content-Type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequest+json'
      }
    })
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (data) {
    var loadedSubtree = data.ContentTreeRoot.ContentTreeNodeList;
    return _mapChildrenToSubitemsDeep(loadedSubtree);
  });
};
var loadLocationItems = function loadLocationItems(_ref5) {
  var siteaccess = _ref5.siteaccess,
    accessToken = _ref5.accessToken,
    parentLocationId = _ref5.parentLocationId,
    _ref5$limit = _ref5.limit,
    limit = _ref5$limit === void 0 ? QUERY_LIMIT : _ref5$limit,
    _ref5$offset = _ref5.offset,
    offset = _ref5$offset === void 0 ? 0 : _ref5$offset,
    _ref5$instanceUrl = _ref5.instanceUrl,
    instanceUrl = _ref5$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref5$instanceUrl,
    contentTypeIdentifier = _ref5.contentTypeIdentifier;
  var queryParamsString = contentTypeIdentifier ? "?filter[ContentTypeIdentifierCriterion]=".concat(contentTypeIdentifier) : '';
  var path = "".concat(instanceUrl).concat(ENDPOINT_LOAD_SUBITEMS, "/").concat(parentLocationId, "/").concat(limit, "/").concat(offset).concat(queryParamsString);
  var request = new Request(path, {
    method: 'GET',
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTreeNode+json'
      }
    })
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (data) {
    var location = data.ContentTreeNode;
    location.children = location.children.map(mapChildrenToSubitems);
    return mapChildrenToSubitems(location);
  });
};
var getBulkDeleteUserRequestOperation = function getBulkDeleteUserRequestOperation(contentId) {
  var _getRestInfo = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getRestInfo)(),
    instanceUrl = _getRestInfo.instanceUrl;
  return {
    uri: "".concat(instanceUrl).concat(ENDPOINT_USER, "/").concat(contentId),
    method: 'DELETE'
  };
};
var getBulkMoveRequestOperation = function getBulkMoveRequestOperation(pathString, destination) {
  var _getRestInfo2 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getRestInfo)(),
    instanceUrl = _getRestInfo2.instanceUrl;
  return {
    uri: "".concat(instanceUrl).concat(ENDPOINT_LOCATION).concat(pathString.slice(0, -1)),
    method: 'MOVE',
    headers: {
      Destination: destination
    }
  };
};
var getBulkCopyRequestOperation = function getBulkCopyRequestOperation(pathString, destination) {
  var instanceUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_INSTANCE_URL;
  return {
    uri: "".concat(instanceUrl).concat(ENDPOINT_LOCATION).concat(pathString.slice(0, -1)),
    method: 'COPY',
    headers: {
      Destination: destination
    }
  };
};
var buildBulkRequest = function buildBulkRequest(requestBodyOperations, _ref6) {
  var token = _ref6.token,
    siteaccess = _ref6.siteaccess,
    accessToken = _ref6.accessToken,
    _ref6$instanceUrl = _ref6.instanceUrl,
    instanceUrl = _ref6$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref6$instanceUrl;
  var path = "".concat(instanceUrl).concat(ENDPOINT_BULK);
  var request = new Request(path, {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_BULK
    }),
    body: JSON.stringify({
      bulkOperations: {
        operations: requestBodyOperations
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include'
  });
  return request;
};
var processBulkResponse = function processBulkResponse(items, _ref7) {
  var BulkOperationResponse = _ref7.BulkOperationResponse;
  var operations = BulkOperationResponse.operations;
  var results = Object.entries(operations).reduce(function (itemsMatches, _ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      locationId = _ref9[0],
      response = _ref9[1];
    var respectiveItem = items.find(function (item) {
      return item.id === parseInt(locationId, 10);
    });
    var isSuccess = 200 <= response.statusCode && response.statusCode <= 299;
    if (isSuccess) {
      itemsMatches.success.push(respectiveItem);
    } else {
      itemsMatches.fail.push(respectiveItem);
    }
    return itemsMatches;
  }, {
    success: [],
    fail: []
  });
  return Promise.resolve(results);
};
var moveElements = function moveElements(items, destination, additionalProperties) {
  var operations = {};
  items.forEach(function (_ref10) {
    var id = _ref10.id,
      pathString = _ref10.pathString;
    operations[id] = getBulkMoveRequestOperation(pathString, "".concat(ENDPOINT_LOCATION).concat(destination));
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var copyElements = function copyElements(items, destination, additionalProperties) {
  var operations = {};
  items.forEach(function (_ref11) {
    var id = _ref11.id,
      pathString = _ref11.pathString;
    operations[id] = getBulkCopyRequestOperation(pathString, "".concat(ENDPOINT_LOCATION).concat(destination));
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var deleteElements = function deleteElements(items, additionalProperties) {
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getAdminUiConfig)();
  var contentTypes = additionalProperties.contentTypes;
  var operations = {};
  items.forEach(function (item) {
    var locationId = item.id,
      pathString = item.pathString,
      ContentInfo = item.ContentInfo;
    var contentType = contentTypes[ContentInfo.Content.ContentType._href];
    var isUserContentItem = adminUiConfig.userContentTypes.includes(contentType.identifier);
    if (isUserContentItem) {
      var contentId = ContentInfo.Content._id;
      operations[locationId] = getBulkDeleteUserRequestOperation(contentId);
    } else {
      operations[locationId] = getBulkMoveRequestOperation(pathString, ENDPOINT_TRASH_FAKE_LOCATION);
    }
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var getBulkBookmarkRequestOperation = function getBulkBookmarkRequestOperation(locationId, isAddAction) {
  var instanceUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_INSTANCE_URL;
  var method = isAddAction ? 'POST' : 'DELETE';
  return {
    uri: "".concat(instanceUrl).concat(ENDPOINT_BOOKMARK, "/").concat(locationId),
    method: method
  };
};
var addToBookmarks = function addToBookmarks(items, additionalProperties) {
  var instanceUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_INSTANCE_URL;
  var operations = {};
  items.forEach(function (_ref12) {
    var id = _ref12.id,
      locationId = _ref12.locationId;
    operations[id] = getBulkBookmarkRequestOperation(locationId, true, instanceUrl);
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var removeFromBookmarks = function removeFromBookmarks(items, additionalProperties) {
  var instanceUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_INSTANCE_URL;
  var operations = {};
  items.forEach(function (_ref13) {
    var id = _ref13.id,
      locationId = _ref13.locationId;
    operations[id] = getBulkBookmarkRequestOperation(locationId, false, instanceUrl);
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var findSuggestions = function findSuggestions(parentLocationId, _ref14) {
  var siteaccess = _ref14.siteaccess,
    token = _ref14.token,
    accessToken = _ref14.accessToken,
    _ref14$instanceUrl = _ref14.instanceUrl,
    instanceUrl = _ref14$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref14$instanceUrl;
  var body = JSON.stringify({
    ViewInput: {
      identifier: 'view_with_aggregation',
      LocationQuery: {
        limit: 0,
        offset: 0,
        Filter: {
          ParentLocationIdCriterion: parentLocationId
        },
        Aggregations: [{
          ContentTypeTermAggregation: {
            name: 'suggestions',
            limit: AGGREGATIONS_LIMIT
          }
        }]
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: _objectSpread({}, HEADERS_CREATE_VIEW)
    }),
    body: body,
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (response) {
    var _response$View;
    var suggestions = (_response$View = response.View) === null || _response$View === void 0 || (_response$View = _response$View.Result.aggregations[0]) === null || _response$View === void 0 ? void 0 : _response$View.entries.map(function (_ref15) {
      var identifier = _ref15.key.ContentType.identifier;
      return {
        identifier: identifier
      };
    });
    return suggestions;
  });
};
var loadLocationItemExtendedInfo = function loadLocationItemExtendedInfo(_ref16) {
  var internalItem = _ref16.internalItem;
  var _getRestInfo3 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getRestInfo)(),
    token = _getRestInfo3.token,
    siteaccess = _getRestInfo3.siteaccess,
    accessToken = _getRestInfo3.accessToken,
    instanceUrl = _getRestInfo3.instanceUrl;
  var extendedInfoPath = "".concat(instanceUrl, "/api/ibexa/v2/location/tree/").concat(internalItem.locationId, "/extended-info");
  var request = new Request(extendedInfoPath, {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTreeExtendedNodeInfo+json',
        'Content-Type': 'application/vnd.ibexa.api.ContentTreeLoadNodeExtendedInfoRequest+json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include'
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (_ref17) {
    var ContentTreeNodeExtendedInfo = _ref17.ContentTreeNodeExtendedInfo;
    return ContentTreeNodeExtendedInfo;
  });
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-remove-bookmarks/add.remove.bookmarks.js":
/*!**************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-remove-bookmarks/add.remove.bookmarks.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _remove_from_bookmarks_remove_from_bookmarks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../remove-from-bookmarks/remove.from.bookmarks */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/remove-from-bookmarks/remove.from.bookmarks.js");
/* harmony import */ var _add_to_bookmarks_add_to_bookmarks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-to-bookmarks/add.to.bookmarks */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-to-bookmarks/add.to.bookmarks.js");




var AddRemoveBookmarks = function AddRemoveBookmarks(_ref) {
  var _item$internalItem;
  var item = _ref.item;
  if ((_item$internalItem = item.internalItem) !== null && _item$internalItem !== void 0 && _item$internalItem.isBookmarked) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_remove_from_bookmarks_remove_from_bookmarks__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: item
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_add_to_bookmarks_add_to_bookmarks__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: item
  });
};
AddRemoveBookmarks.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
AddRemoveBookmarks.defaultProps = {
  item: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRemoveBookmarks);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-to-bookmarks/add.to.bookmarks.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-to-bookmarks/add.to.bookmarks.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








var _window = window,
  Translator = _window.Translator,
  document = _window.document,
  ibexa = _window.ibexa;
var AddToBookmarks = function AddToBookmarks(_ref) {
  var item = _ref.item;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_7__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__.SelectedContext),
    contextSelectedData = _useContext.selectedData,
    dispatchSelectedData = _useContext.dispatchSelectedData;
  var isMultiItemOperation = (0,_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__.isItemEmpty)(item);
  var selectedData = isMultiItemOperation ? contextSelectedData : [item];
  var selectedDataToBookmark = selectedData.filter(function (selectedItem) {
    var _selectedItem$interna;
    return !((_selectedItem$interna = selectedItem.internalItem) !== null && _selectedItem$interna !== void 0 && _selectedItem$interna.isBookmarked);
  });
  var isDisabled = selectedDataToBookmark.length === 0;
  var itemLabelWithoutCount = Translator.trans(/*@Desc("Add to bookmarks")*/'actions.add_to_bookmarks', {}, 'ibexa_content_tree_ui');
  var itemLabelWithCount = Translator.trans(/*@Desc("Add to bookmarks (%count%)")*/'actions.add_to_bookmarks.with_count', {
    count: selectedDataToBookmark.length
  }, 'ibexa_content_tree_ui');
  var isLabelWithCount = isMultiItemOperation && selectedDataToBookmark.length !== 0;
  var itemLabel = isLabelWithCount ? itemLabelWithCount : itemLabelWithoutCount;
  var addToBookmarks = function addToBookmarks() {
    var items = selectedDataToBookmark.map(function (_ref2) {
      var internalItem = _ref2.internalItem;
      return _objectSpread({
        id: internalItem.locationId
      }, internalItem);
    });
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_6__.addToBookmarks)(items, _objectSpread({}, restInfo)).then(function (response) {
      var bookmarkedItems = response.success,
        notBookmarkedItems = response.fail;
      if (notBookmarkedItems.length) {
        var totalCount = bookmarkedItems.length + notBookmarkedItems.length;
        var message;
        if (totalCount === 1) {
          message = Translator.trans(/*@Desc("Selected item could not be bookmarked.")*/'bulk_bookmark.error.message.single', {}, 'ibexa_content_tree_ui');
        } else {
          message = Translator.trans(/*@Desc("%notBookmarkedCount% of the %totalCount% selected item(s) could not be bookmarked.")*/'bulk_bookmark.error.message.multi', {
            notBookmarkedCount: notBookmarkedItems.length,
            totalCount: totalCount
          }, 'ibexa_content_tree_ui');
        }
        ibexa.helpers.notification.showWarningNotification(message);
      }
      if (bookmarkedItems.length) {
        var _message = Translator.trans(/*@Desc("Content item(s) bookmarked.")*/'bulk_bookmark.success.message', {}, 'ibexa_content_tree_ui');
        ibexa.helpers.notification.showSuccessNotification(_message);
        bookmarkedItems.forEach(function (_ref3) {
          var locationId = _ref3.locationId;
          document.body.dispatchEvent(new CustomEvent('ibexa-bookmark-change', {
            detail: {
              bookmarked: true,
              locationId: locationId
            }
          }));
        });
        document.body.dispatchEvent(new CustomEvent('ibexa-content-tree-refresh'));
      }
      dispatchSelectedData({
        type: _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_CLEAR
      });
      return Promise.resolve();
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isDisabled: isDisabled,
    onClick: addToBookmarks
  });
};
AddToBookmarks.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
AddToBookmarks.defaultProps = {
  item: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToBookmarks);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-translation/add.translation.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-translation/add.translation.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var _window = window,
  Translator = _window.Translator,
  document = _window.document;
var AddTranslation = function AddTranslation(_ref) {
  var _fetchedData$, _permissions$hasAcces;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_5__.RestInfoContext);
  var itemLabel = Translator.trans(/*@Desc("Add translation")*/'actions.add_translation', {}, 'ibexa_content_tree_ui');
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_4__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'create');
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var isDisabled = isLoading || !hasAccess;
  var addTranslation = function addTranslation() {
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.findLocationsById)(_objectSpread(_objectSpread({}, restInfo), {}, {
      id: item.id
    })).then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        response = _ref3[0];
      var contentLanguages = response.ContentInfo.Content.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language;
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:open-language-modal', {
        detail: {
          item: item,
          contentLanguages: contentLanguages,
          permissions: permissions
        }
      }));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: addTranslation
  });
};
AddTranslation.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
AddTranslation.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTranslation);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/collapse-all/collapse.all.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/collapse-all/collapse.all.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_collapse_all_collapse_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



var _removeFromSubtree = function removeFromSubtree(subtree, idsToRemove) {
  subtree.forEach(function (item) {
    if (idsToRemove.includes(item.locationId)) {
      item.children = [];
    } else {
      _removeFromSubtree(item.children, idsToRemove);
    }
  });
};
var CollapseAll = function CollapseAll(props) {
  var _useLocalStorage = (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"])('subtree'),
    getLocalStorageData = _useLocalStorage.getLocalStorageData,
    saveLocalStorageData = _useLocalStorage.saveLocalStorageData;
  var afterCollapseCallback = function afterCollapseCallback(items) {
    var subtree = getLocalStorageData();
    var idsToRemove = items.map(function (item) {
      return item.id;
    });
    _removeFromSubtree(subtree, idsToRemove);
    saveLocalStorageData(subtree);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_collapse_all_collapse_all__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    afterCollapseCallback: afterCollapseCallback
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapseAll);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/create-content/create.content.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/create-content/create.content.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var _window = window,
  Translator = _window.Translator,
  document = _window.document;
var CreateContent = function CreateContent(_ref) {
  var _fetchedData$, _permissions$hasAcces;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_5__.RestInfoContext);
  var itemLabel = Translator.trans(/*@Desc("Create")*/'actions.create_content', {}, 'ibexa_content_tree_ui');
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_3__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'create');
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var isDisabled = !item.internalItem.isContainer || isLoading || !hasAccess;
  var createContent = function createContent() {
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_4__.findSuggestions)(item.id, _objectSpread({}, restInfo)).then(function (suggestions) {
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:open-create-widget', {
        detail: {
          item: item,
          suggestions: suggestions,
          permissions: permissions
        }
      }));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: createContent
  });
};
CreateContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
CreateContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-content/delete.content.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-content/delete.content.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_delete_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js");
/* harmony import */ var _delete_modal_delete_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-modal/delete.modal */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal/delete.modal.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






var DeleteContent = function DeleteContent(props) {
  var _fetchedData$, _permissions$hasAcces;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getAdminUiConfig)();
  var item = props.item,
    isLoading = props.isLoading,
    fetchedData = props.fetchedData;
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_5__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'delete');
  var isDeletingUser = adminUiConfig.userContentTypes.includes(item.internalItem.contentTypeIdentifier);
  var deleteLabel = Translator.trans(/*@Desc("Delete")*/'actions.delete.label.delete', {}, 'ibexa_content_tree_ui');
  var trashLabel = Translator.trans(/*@Desc("Send to trash")*/'actions.delete.label.trash', {}, 'ibexa_content_tree_ui');
  var label = isDeletingUser || (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.isExternalInstance)() ? deleteLabel : trashLabel;
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var locationDepth = item.path.split('/').length;
  var checkIsDisabled = function checkIsDisabled() {
    return isLoading || !hasAccess || locationDepth === 1;
  };
  var renderModal = function renderModal(treeBuilderDeleteModalProps) {
    if (isLoading) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_delete_modal_delete_modal__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      confirmBtnLabel: label,
      item: item
    }, treeBuilderDeleteModalProps));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_delete_delete__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    label: label,
    isLoading: isLoading,
    checkIsDisabled: checkIsDisabled,
    renderModal: renderModal
  }, props));
};
DeleteContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
DeleteContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal-body/delete.modal.body.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal-body/delete.modal.body.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");



var DeleteBodyModal = function DeleteBodyModal(_ref) {
  var reverseRelationsCount = _ref.reverseRelationsCount,
    totalSubitemsCount = _ref.totalSubitemsCount,
    name = _ref.name,
    confirmationChecked = _ref.confirmationChecked,
    setConfirmationChecked = _ref.setConfirmationChecked,
    isDeletingUser = _ref.isDeletingUser;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var deleteDraftsWarningHeader = Translator.trans(/*@Desc("Drafts")*/'modal.delete.header.send_to_trash_draft_warning_header', {}, 'ibexa_content_tree_ui');
  var deleteDraftsWarning = Translator.trans(/*@Desc("Sending this content item to Trash will also delete all drafts of content items that haven’t been published yet, and belong to the trashed subtree.")*/'modal.delete.header.send_to_trash_draft_warning', {}, 'ibexa_content_tree_ui');
  var reverseRelationHeader = Translator.trans(/*@Desc("Conflict with reverse Relations")*/'modal.delete.reverse_relation.header', {}, 'ibexa_content_tree_ui');
  var reverseRelationMessage = Translator.trans(/*@Desc("'%name%' is in use by %reverseRelationsCount% Content item(s). You should remove all reverse Relations before deleting the Content item.")*/'modal.delete.reverse_relation.message', {
    name: name,
    reverseRelationsCount: reverseRelationsCount
  }, 'ibexa_content_tree_ui');
  var subitemsHeader = Translator.trans(/*@Desc("Sub-items")*/'modal.delete.subitems.header', {}, 'ibexa_content_tree_ui');
  var subitemsMessage = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.isExternalInstance)() ? Translator.trans(/*@Desc("Deleting '%name%' and its %totalSubitemsCount% Content item(s) will also delete the sub-items of this Location.")*/'modal.delete.subitems.message', {
    name: name,
    totalSubitemsCount: totalSubitemsCount
  }, 'ibexa_content_tree_ui') : Translator.trans(/*@Desc("Sending '%name%' and its %totalSubitemsCount% Content item(s) to Trash will also send the sub-items of this Location to Trash.")*/'modal.delete.subitems.trash_message', {
    name: name,
    totalSubitemsCount: totalSubitemsCount
  }, 'ibexa_content_tree_ui');
  var confirmMessage = Translator.trans(/*@Desc("I understand the consequences of this action.")*/'modal.delete.confirm.message', {}, 'ibexa_content_tree_ui');
  var changeConfirmBtnState = function changeConfirmBtnState() {
    setConfirmationChecked(function (prevState) {
      return !prevState;
    });
  };
  var renderHeader = function renderHeader() {
    if ((0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.isExternalInstance)() && !isDeletingUser) {
      return Translator.trans(/*@Desc("Are you sure you want to delete this Content?")*/'modal.delete.header.content', {}, 'ibexa_content_tree_ui');
    }
    if (isDeletingUser) {
      return Translator.trans(/*@Desc("Are you sure you want to delete this User?")*/'modal.delete.header.user', {}, 'ibexa_content_tree_ui');
    }
    return Translator.trans(/*@Desc("Are you sure you want to send this Content item to Trash?")*/'modal.delete.header.trash_content', {}, 'ibexa_content_tree_ui');
  };
  var renderDraftDeletionWarning = function renderDraftDeletionWarning() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-modal__trash-option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "ibexa-label form-label required"
    }, deleteDraftsWarningHeader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-description"
    }, deleteDraftsWarning));
  };
  var renderReverseRelationWarning = function renderReverseRelationWarning() {
    if (reverseRelationsCount === 0) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-modal__trash-option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "ibexa-label form-label required"
    }, reverseRelationHeader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-description"
    }, reverseRelationMessage));
  };
  var renderSubitemsWarning = function renderSubitemsWarning() {
    if (totalSubitemsCount === 0) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-modal__trash-option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "ibexa-label form-label required"
    }, subitemsHeader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-description"
    }, subitemsMessage));
  };
  var renderConfirmation = function renderConfirmation() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-check"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      onChange: changeConfirmBtnState,
      checked: confirmationChecked,
      type: "checkbox",
      id: "location_trash_confirm",
      className: "ibexa-input ibexa-input--checkbox  form-check-input"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "ibexa-label ibexa-label--checkbox-radio form-check-label",
      htmlFor: "location_trash_confirm"
    }, confirmMessage));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderHeader(), renderReverseRelationWarning(), renderSubitemsWarning(), renderDraftDeletionWarning(), renderConfirmation());
};
DeleteBodyModal.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  confirmationChecked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  setConfirmationChecked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isDeletingUser: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  reverseRelationsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  totalSubitemsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
DeleteBodyModal.defaultProps = {
  isDeletingUser: false,
  reverseRelationsCount: 0,
  totalSubitemsCount: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteBodyModal);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal/delete.modal.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal/delete.modal.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_modal_delete_modal_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete.js");
/* harmony import */ var _delete_modal_body_delete_modal_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-modal-body/delete.modal.body */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal-body/delete.modal.body.js");
var _excluded = ["confirmBtnLabel", "item"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }





var DeleteModal = function DeleteModal(_ref) {
  var confirmBtnLabel = _ref.confirmBtnLabel,
    item = _ref.item,
    props = _objectWithoutProperties(_ref, _excluded);
  var onConfirm = props.onConfirm;
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getAdminUiConfig)();
  var _item$internalItem = item.internalItem,
    reverseRelationsCount = _item$internalItem.reverseRelationsCount,
    totalSubitemsCount = _item$internalItem.totalSubitemsCount,
    name = _item$internalItem.name;
  var isDeletingUser = adminUiConfig.userContentTypes.includes(item.internalItem.contentTypeIdentifier);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    confirmationChecked = _useState2[0],
    setConfirmationChecked = _useState2[1];
  var renderModalBody = function renderModalBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_delete_modal_body_delete_modal_body__WEBPACK_IMPORTED_MODULE_4__["default"], {
      confirmationChecked: confirmationChecked,
      setConfirmationChecked: setConfirmationChecked,
      reverseRelationsCount: reverseRelationsCount,
      totalSubitemsCount: totalSubitemsCount,
      isDeletingUser: isDeletingUser,
      name: name
    });
  };
  var confirmBtnAttrs = {
    label: confirmBtnLabel,
    onClick: onConfirm,
    className: 'ibexa-btn--primary ibexa-btn--trigger',
    disabled: !confirmationChecked
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_modal_delete_modal_delete__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    confirmationBody: renderModalBody(),
    confirmBtnAttrs: confirmBtnAttrs
  }, props));
};
DeleteModal.propTypes = {
  confirmBtnLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteModal);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/edit-content/edit.content.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/edit-content/edit.content.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var _window = window,
  Translator = _window.Translator,
  document = _window.document;
var EditContent = function EditContent(_ref) {
  var _fetchedData$, _permissions$hasAcces;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_5__.RestInfoContext);
  var itemLabel = Translator.trans(/*@Desc("Edit")*/'actions.edit_content', {}, 'ibexa_content_tree_ui');
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_4__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'edit');
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var isDisabled = isLoading || !hasAccess;
  var editContent = function editContent() {
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.findLocationsById)(_objectSpread(_objectSpread({}, restInfo), {}, {
      id: item.id
    })).then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        response = _ref3[0];
      var contentLanguages = response.ContentInfo.Content.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language;
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:open-edit-widget', {
        detail: {
          item: item,
          contentLanguages: contentLanguages,
          permissions: permissions
        }
      }));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: editContent
  });
};
EditContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
EditContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/hide-content/hide.content.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/hide-content/hide.content.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");




var _window = window,
  Translator = _window.Translator,
  document = _window.document;
var HideContent = function HideContent(_ref) {
  var _fetchedData$, _permissions$hasAcces, _item$internalItem$is, _item$internalItem, _hideContentCallback$;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData,
    hideContentCallback = _ref.hideContentCallback;
  var itemHideLabel = Translator.trans(/*@Desc("Hide")*/'actions.hide_content', {}, 'ibexa_content_tree_ui');
  var itemRevealLabel = Translator.trans(/*@Desc("Reveal")*/'actions.reveal_content', {}, 'ibexa_content_tree_ui');
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_3__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'hide');
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var isDisabled = isLoading || !hasAccess;
  var isInvisible = (_item$internalItem$is = (_item$internalItem = item.internalItem) === null || _item$internalItem === void 0 ? void 0 : _item$internalItem.isInvisible) !== null && _item$internalItem$is !== void 0 ? _item$internalItem$is : false;
  var itemLabel = isInvisible ? itemRevealLabel : itemHideLabel;
  var defaultHideContent = function defaultHideContent() {
    if (isInvisible) {
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:reveal', {
        detail: {
          item: item
        }
      }));
    } else {
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:hide', {
        detail: {
          item: item
        }
      }));
    }
  };
  var hideContent = (_hideContentCallback$ = hideContentCallback === null || hideContentCallback === void 0 ? void 0 : hideContentCallback.bind(null, {
    isInvisible: isInvisible,
    item: item
  })) !== null && _hideContentCallback$ !== void 0 ? _hideContentCallback$ : defaultHideContent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: hideContent
  });
};
HideContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  hideContentCallback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
HideContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: [],
  hideContentCallback: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HideContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/preview-content/preview.content.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/preview-content/preview.content.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");



var _window = window,
  Translator = _window.Translator,
  Routing = _window.Routing;
var PreviewContent = function PreviewContent(_ref) {
  var _firstFetchedEntry$tr, _firstFetchedEntry$pr;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData;
  var _item$internalItem = item.internalItem,
    locationId = _item$internalItem.locationId,
    contentId = _item$internalItem.contentId,
    versionNo = _item$internalItem.versionNo;
  var firstFetchedEntry = fetchedData[0];
  var translations = (_firstFetchedEntry$tr = firstFetchedEntry === null || firstFetchedEntry === void 0 ? void 0 : firstFetchedEntry.translations.values) !== null && _firstFetchedEntry$tr !== void 0 ? _firstFetchedEntry$tr : [];
  var defaultTranslation = translations[0];
  var previewableTranslations = (_firstFetchedEntry$pr = firstFetchedEntry === null || firstFetchedEntry === void 0 ? void 0 : firstFetchedEntry.previewableTranslations.values) !== null && _firstFetchedEntry$pr !== void 0 ? _firstFetchedEntry$pr : [];
  var isDisabled = !previewableTranslations.includes(defaultTranslation) || isLoading;
  var itemLabel = Translator.trans(/*@Desc("Preview")*/'actions.preview_content', {}, 'ibexa_content_tree_ui');
  var getPreviewLink = function getPreviewLink(languageCode) {
    var _siteAccessContextSel;
    var siteAccessContextSelect = document.querySelector('.ibexa-change-siteaccess-context');
    var selectedSiteAccessContext = (_siteAccessContextSel = siteAccessContextSelect === null || siteAccessContextSelect === void 0 ? void 0 : siteAccessContextSelect.value) !== null && _siteAccessContextSel !== void 0 ? _siteAccessContextSel : null;
    var previewRouteParams = {
      locationId: locationId,
      contentId: contentId,
      versionNo: versionNo,
      languageCode: languageCode,
      referrer: 'content_view'
    };
    if (selectedSiteAccessContext) {
      previewRouteParams.preselectedSiteAccess = selectedSiteAccessContext;
    }
    return Routing.generate('ibexa.content.preview', previewRouteParams);
  };
  var openPreview = function openPreview() {
    window.location = getPreviewLink(defaultTranslation);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: openPreview
  });
};
PreviewContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
PreviewContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/remove-from-bookmarks/remove.from.bookmarks.js":
/*!****************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/remove-from-bookmarks/remove.from.bookmarks.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








var _window = window,
  Translator = _window.Translator,
  document = _window.document,
  ibexa = _window.ibexa;
var RemoveFromBookmarks = function RemoveFromBookmarks(_ref) {
  var item = _ref.item;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_7__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__.SelectedContext),
    contextSelectedData = _useContext.selectedData,
    dispatchSelectedData = _useContext.dispatchSelectedData;
  var isMultiItemOperation = (0,_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__.isItemEmpty)(item);
  var selectedData = isMultiItemOperation ? contextSelectedData : [item];
  var selectedDataToUnbookmark = selectedData.filter(function (selectedItem) {
    var _selectedItem$interna;
    return (_selectedItem$interna = selectedItem.internalItem) === null || _selectedItem$interna === void 0 ? void 0 : _selectedItem$interna.isBookmarked;
  });
  var isDisabled = selectedDataToUnbookmark.length === 0;
  var itemLabelWithoutCount = Translator.trans(/*@Desc("Remove from bookmarks")*/'actions.remove_from_bookmarks', {}, 'ibexa_content_tree_ui');
  var itemLabelWithCount = Translator.trans(/*@Desc("Remove from bookmarks (%count%)")*/'actions.remove_from_bookmarks.with_count', {
    count: selectedDataToUnbookmark.length
  }, 'ibexa_content_tree_ui');
  var isLabelWithCount = isMultiItemOperation && selectedDataToUnbookmark.length !== 0;
  var itemLabel = isLabelWithCount ? itemLabelWithCount : itemLabelWithoutCount;
  var removeFromBookmarks = function removeFromBookmarks() {
    var items = selectedDataToUnbookmark.map(function (_ref2) {
      var internalItem = _ref2.internalItem;
      return _objectSpread({
        id: internalItem.locationId
      }, internalItem);
    });
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_6__.removeFromBookmarks)(items, _objectSpread({}, restInfo)).then(function (response) {
      var bookmarkedItems = response.success,
        notBookmarkedItems = response.fail;
      if (notBookmarkedItems.length) {
        var totalCount = bookmarkedItems.length + notBookmarkedItems.length;
        var message;
        if (totalCount === 1) {
          message = Translator.trans(/*@Desc("Selected item could not be removed from bookmarks.")*/'bulk_unbookmark.error.message.single', {}, 'ibexa_content_tree_ui');
        } else {
          message = Translator.trans(/*@Desc("%notBookmarkedCount% of the %totalCount% selected item(s) could not be removed from bookmarks.")*/'bulk_unbookmark.error.message.multi', {
            notBookmarkedCount: notBookmarkedItems.length,
            totalCount: bookmarkedItems.length + notBookmarkedItems.length
          }, 'ibexa_content_tree_ui');
        }
        ibexa.helpers.notification.showWarningNotification(message);
      }
      if (bookmarkedItems.length) {
        var _message = Translator.trans(/*@Desc("Content item(s) removed from bookmarks.")*/'bulk_unbookmark.success.message', {}, 'ibexa_content_tree_ui');
        ibexa.helpers.notification.showSuccessNotification(_message);
        bookmarkedItems.forEach(function (_ref3) {
          var locationId = _ref3.locationId;
          document.body.dispatchEvent(new CustomEvent('ibexa-bookmark-change', {
            detail: {
              bookmarked: false,
              locationId: locationId
            }
          }));
        });
        document.body.dispatchEvent(new CustomEvent('ibexa-content-tree-refresh'));
      }
      dispatchSelectedData({
        type: _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_CLEAR
      });
      return Promise.resolve();
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isDisabled: isDisabled,
    onClick: removeFromBookmarks
  });
};
RemoveFromBookmarks.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
RemoveFromBookmarks.defaultProps = {
  item: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveFromBookmarks);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesInfoMapContext: () => (/* binding */ ContentTypesInfoMapContext),
/* harmony export */   MODULE_ID: () => (/* binding */ MODULE_ID),
/* harmony export */   RestInfoContext: () => (/* binding */ RestInfoContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   treeBuilderConfig: () => (/* binding */ treeBuilderConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _common_helpers_content_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/helpers/content.type */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/content.type.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_select_all_select_all__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_unselect_all_unselect_all__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all.js");
/* harmony import */ var _components_collapse_all_collapse_all_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/collapse-all/collapse.all.js */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/collapse-all/collapse.all.js");
/* harmony import */ var _components_add_remove_bookmarks_add_remove_bookmarks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-remove-bookmarks/add.remove.bookmarks */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-remove-bookmarks/add.remove.bookmarks.js");
/* harmony import */ var _components_add_translation_add_translation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-translation/add.translation */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-translation/add.translation.js");
/* harmony import */ var _components_create_content_create_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/create-content/create.content */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/create-content/create.content.js");
/* harmony import */ var _components_edit_content_edit_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/edit-content/edit.content */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/edit-content/edit.content.js");
/* harmony import */ var _components_hide_content_hide_content__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/hide-content/hide.content */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/hide-content/hide.content.js");
/* harmony import */ var _components_delete_content_delete_content__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/delete-content/delete.content */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-content/delete.content.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/helpers/tree */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/tree.js");
/* harmony import */ var _common_helpers_notifications__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/helpers/notifications */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/notifications.js");
/* harmony import */ var _components_preview_content_preview_content_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/preview-content/preview.content.js */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/preview-content/preview.content.js");
/* harmony import */ var _components_remove_from_bookmarks_remove_from_bookmarks_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/remove-from-bookmarks/remove.from.bookmarks.js */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/remove-from-bookmarks/remove.from.bookmarks.js");
/* harmony import */ var _components_add_to_bookmarks_add_to_bookmarks_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/add-to-bookmarks/add.to.bookmarks.js */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-to-bookmarks/add.to.bookmarks.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

























var RestInfoContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentTypesInfoMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var _window = window,
  ibexa = _window.ibexa,
  document = _window.document;
var MODULE_ID = 'ibexa-content-tree';
var SUBTREE_ID = 'subtree';
var ContentTreeModule = function ContentTreeModule(props) {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getTranslator)();
  var Routing = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getRouting)();
  var userId = props.userId,
    currentLocationPath = props.currentLocationPath,
    rootLocationId = props.rootLocationId,
    subitemsLimit = props.subitemsLimit,
    subitemsLoadLimit = props.subitemsLoadLimit,
    treeMaxDepth = props.treeMaxDepth;
  var treeBuilderModuleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var readSubtree = function readSubtree() {
    var customReadSubtree = props.readSubtree;
    if (typeof customReadSubtree === 'function') {
      return customReadSubtree();
    }
    return (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_6__.getData)({
      moduleId: MODULE_ID,
      userId: userId,
      subId: rootLocationId,
      dataId: SUBTREE_ID
    });
  };
  var saveSubtree = function saveSubtree() {
    var customSaveSubtree = props.saveSubtree;
    if (typeof customSaveSubtree === 'function') {
      customSaveSubtree();
      return;
    }
    (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_6__.saveData)({
      moduleId: MODULE_ID,
      userId: userId,
      subId: rootLocationId,
      dataId: SUBTREE_ID,
      data: subtree.current
    });
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoaded = _useState2[0],
    setIsLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.preloadedLocations),
    _useState4 = _slicedToArray(_useState3, 2),
    tree = _useState4[0],
    setTree = _useState4[1];
  var subtree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.generateInitialSubtree)({
    rootLocationId: rootLocationId,
    subitemsLoadLimit: subitemsLoadLimit
  })); // subtree is actually tree request data
  var contentTypesInfoMap = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_2__.getContentTypeDataMapByHref)();
  var getCurrentLocationId = function getCurrentLocationId() {
    var currentLocationIdString = props.currentLocationPath.split('/').filter(function (id) {
      return !!id;
    }).pop();
    return parseInt(currentLocationIdString, 10);
  };
  var setInitialItemsState = function setInitialItemsState(location) {
    subtree.current = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.generateSubtree)({
      items: [location],
      isRoot: true,
      subitemsLoadLimit: subitemsLoadLimit,
      subitemsLimit: subitemsLimit
    });
    setIsLoaded(true);
    setTree(location);
    saveSubtree();
  };
  var loadTreeToState = function loadTreeToState() {
    var restInfo = props.restInfo,
      sort = props.sort;
    setIsLoaded(false);
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.loadSubtree)((0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.getLoadSubtreeParams)({
      subtree: subtree,
      restInfo: restInfo,
      sort: sort
    })).then(function (loadedSubtree) {
      setInitialItemsState(loadedSubtree[0]);
      var path = currentLocationPath.split('/').filter(function (id) {
        return !!id;
      });
      var rootLocationIdIndex = path.findIndex(function (element) {
        return parseInt(element, 10) === rootLocationId;
      });
      if (rootLocationIdIndex !== -1) {
        var _treeBuilderModuleRef;
        var pathStartingOnRootLocation = path.slice(rootLocationIdIndex - path.length);
        var itemsToExpand = pathStartingOnRootLocation.map(function (locationId) {
          return {
            id: parseInt(locationId, 10)
          };
        });
        (_treeBuilderModuleRef = treeBuilderModuleRef.current) === null || _treeBuilderModuleRef === void 0 || _treeBuilderModuleRef.expandItems(itemsToExpand);
      }
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var findLocationsByIdWrapper = function findLocationsByIdWrapper(args) {
    return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.findLocationsById)(_objectSpread(_objectSpread({}, props.restInfo), {}, {
      limit: props.subitemsLoadLimit
    }, args));
  };
  var renderIcon = function renderIcon(item, otherProps) {
    var _item$internalItem = item.internalItem,
      contentTypeIdentifier = _item$internalItem.contentTypeIdentifier,
      locationId = _item$internalItem.locationId;
    var isLoading = otherProps.isLoading;
    var iconAttrs = {
      extraClasses: 'ibexa-icon--small'
    };
    if (!isLoading || item.subitems.length) {
      if (locationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.SYSTEM_ROOT_LOCATION_ID) {
        iconAttrs.customPath = ibexa.helpers.contentType.getContentTypeIconUrl('folder');
      } else {
        iconAttrs.customPath = ibexa.helpers.contentType.getContentTypeIconUrl(contentTypeIdentifier) || ibexa.helpers.contentType.getContentTypeIconUrl('file');
      }
    } else {
      iconAttrs.name = 'spinner';
      iconAttrs.extraClasses = "".concat(iconAttrs.extraClasses, " ibexa-spin");
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-ct-list-item__icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], iconAttrs));
  };
  var renderLabel = function renderLabel(item, otherProps) {
    var name = item.internalItem.name;
    var labelTruncatedCallbackRef = otherProps.labelTruncatedCallbackRef;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-tb-list-item-single__label-truncated",
      title: name,
      ref: labelTruncatedCallbackRef
    }, name);
  };
  var callbackToggleExpanded = function callbackToggleExpanded(item, _ref) {
    var isExpanded = _ref.isExpanded,
      loadMore = _ref.loadMore;
    if (isExpanded) {
      (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.addItemToSubtree)(subtree.current[0], item.internalItem, item.internalItem.path.split('/'), {
        subitemsLoadLimit: subitemsLoadLimit,
        subitemsLimit: subitemsLimit
      });
    } else {
      (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.removeItemFromSubtree)(subtree.current[0], item.internalItem, item.internalItem.path.split('/'));
    }
    saveSubtree();
    var subitems = item.subitems;
    var shouldLoadInitialItems = isExpanded && subitems && !subitems.length;
    if (shouldLoadInitialItems) {
      loadMore();
    }
  };
  var callbackMoveElements = function callbackMoveElements(item, _ref2) {
    var selectedData = _ref2.selectedData;
    var sourceIds = selectedData.map(function (selectedItem) {
      return selectedItem.id;
    }).join(',');
    return findLocationsByIdWrapper({
      id: sourceIds
    }).then(function (response) {
      var destination = "/".concat(item.nextParent.path);
      return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.moveElements)(response, destination, _objectSpread({}, props.restInfo));
    }).then(function (response) {
      var movedItems = response.success,
        notMovedItems = response.fail;
      if (notMovedItems.length) {
        var message = Translator.trans(/*@Desc("%notMovedCount% of the %totalCount% selected item(s) could not be moved because you do not have proper user permissions. Contact your Administrator.")*/'bulk_move.error.message', {
          notMovedCount: notMovedItems.length,
          totalCount: movedItems.length + notMovedItems.length
        }, 'ibexa_content_tree_ui');
        window.ibexa.helpers.notification.showWarningNotification(message);
      }
      if (movedItems.length) {
        var _item$nextParent$inte = item.nextParent.internalItem,
          name = _item$nextParent$inte.name,
          contentId = _item$nextParent$inte.contentId,
          locationId = _item$nextParent$inte.locationId;
        var _message = Translator.trans(/*@Desc("Content item(s) sent to {{ locationLink }}")*/
        'bulk_move.success.message', {}, 'ibexa_content_tree_ui');
        var rawPlaceholdersMap = {
          locationLink: Translator.trans(/*@Desc("<u><a href='%locationHref%'>%locationName%</a></u>")*/
          'bulk_action.success.link_to_location', {
            locationName: ibexa.helpers.text.escapeHTML(name),
            locationHref: Routing.generate('ibexa.content.view', {
              locationId: locationId,
              contentId: contentId
            })
          }, 'ibexa_content_tree_ui')
        };
        window.ibexa.helpers.notification.showSuccessNotification(_message, function () {}, rawPlaceholdersMap);
      }
      return Promise.resolve();
    }).then(loadTreeToState)["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var callbackCopyElements = function callbackCopyElements(item, _ref3) {
    var selectedData = _ref3.selectedData;
    var sourceIds = selectedData.map(function (selectedItem) {
      return selectedItem.id;
    }).join(',');
    return findLocationsByIdWrapper({
      id: sourceIds
    }).then(function (response) {
      var destination = "/".concat(item.path);
      return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.copyElements)(response, destination, _objectSpread({}, props.restInfo));
    }).then(function (response) {
      var copiedItems = response.success,
        notCopiedItems = response.fail;
      if (notCopiedItems.length) {
        var message = Translator.trans(/*@Desc("%notCopiedCount% of the %totalCount% selected item(s) could not be copied because you do not have proper user permissions. Contact your Administrator.")*/'bulk_copy.error.message', {
          notCopiedCount: notCopiedItems.length,
          totalCount: copiedItems.length + notCopiedItems.length
        }, 'ibexa_content_tree_ui');
        window.ibexa.helpers.notification.showWarningNotification(message);
      }
      if (copiedItems.length) {
        var _item$internalItem2 = item.internalItem,
          name = _item$internalItem2.name,
          contentId = _item$internalItem2.contentId,
          locationId = _item$internalItem2.locationId;
        var _message2 = Translator.trans(/*@Desc("Content item(s) copied to {{ locationLink }}")*/
        'bulk_copy.success.message', {}, 'ibexa_content_tree_ui');
        var rawPlaceholdersMap = {
          locationLink: Translator.trans(/*@Desc("<u><a href='%locationHref%'>%locationName%</a></u>")*/
          'bulk_action.success.link_to_location', {
            locationName: ibexa.helpers.text.escapeHTML(name),
            locationHref: Routing.generate('ibexa.content.view', {
              locationId: locationId,
              contentId: contentId
            })
          }, 'ibexa_content_tree_ui')
        };
        window.ibexa.helpers.notification.showSuccessNotification(_message2, function () {}, rawPlaceholdersMap);
      }
      return Promise.resolve();
    }).then(loadTreeToState)["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var findRedirectLocationId = function findRedirectLocationId(entries) {
    var pathIds = ibexa.helpers.location.removeRootFromPathString(currentLocationPath).map(function (id) {
      return parseInt(id, 10);
    });
    entries.forEach(function (entryId) {
      var entryIdIndex = pathIds.findIndex(function (id) {
        return id === entryId;
      });
      if (entryIdIndex !== -1) {
        pathIds = pathIds.slice(0, entryIdIndex);
      }
    });
    return pathIds[pathIds.length - 1];
  };
  var callbackDeleteElements = function callbackDeleteElements(_ref4) {
    var selectedData = _ref4.selectedData;
    var entries = selectedData.map(function (item) {
      return item.id;
    });
    var sourceIds = entries.join(',');
    return findLocationsByIdWrapper({
      id: sourceIds
    }).then(function (response) {
      return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.deleteElements)(response, _objectSpread(_objectSpread({}, props.restInfo), {}, {
        contentTypes: contentTypesInfoMap
      }));
    }).then(function (response) {
      var deletedItems = response.success,
        notDeletedItems = response.fail;
      if (notDeletedItems.length) {
        var _getNotDeletedItemsDa = (0,_common_helpers_notifications__WEBPACK_IMPORTED_MODULE_21__.getNotDeletedItemsData)(notDeletedItems, deletedItems, _common_helpers_getters__WEBPACK_IMPORTED_MODULE_19__.isUser.bind(null, contentTypesInfoMap)),
          message = _getNotDeletedItemsDa.message;
        window.ibexa.helpers.notification.showWarningNotification(message);
      } else {
        var anyUserContentItemDeleted = deletedItems.some(_common_helpers_getters__WEBPACK_IMPORTED_MODULE_19__.isUser.bind(null, contentTypesInfoMap));
        var anyNonUserContentItemDeleted = deletedItems.some(function (location) {
          return !(0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_19__.isUser)(contentTypesInfoMap, location);
        });
        var _message3 = null;
        if (anyUserContentItemDeleted && anyNonUserContentItemDeleted) {
          _message3 = Translator.trans(/*@Desc("Content item(s) sent to Trash. User(s) deleted.")*/'bulk_delete.success.message.users_with_nonusers', {}, 'ibexa_content_tree_ui');
        } else if (anyUserContentItemDeleted) {
          _message3 = Translator.trans(/*@Desc("User(s) deleted.")*/'bulk_delete.success.message.users', {}, 'ibexa_content_tree_ui');
        } else {
          _message3 = Translator.trans(/*@Desc("Content item(s) sent to Trash.")*/'bulk_delete.success.message.nonusers', {}, 'ibexa_content_tree_ui');
        }
        window.ibexa.helpers.notification.showSuccessNotification(_message3);
      }
      return Promise.resolve();
    }).then(function () {
      var pathIds = ibexa.helpers.location.removeRootFromPathString(currentLocationPath);
      var currentLocationId = parseInt(pathIds[pathIds.length - 1], 10);
      var redirectLocationId = findRedirectLocationId(entries);
      if (redirectLocationId !== currentLocationId) {
        findLocationsByIdWrapper({
          id: redirectLocationId
        }).then(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 1),
            nodeResponse = _ref6[0];
          window.location.href = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_19__.getContentLink)({
            contentId: nodeResponse.ContentInfo.Content._id,
            locationId: nodeResponse.id
          });
        });
      } else {
        window.location.reload(true);
      }
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var isActive = function isActive(item) {
    return item.internalItem.locationId === getCurrentLocationId();
  };
  var loadMoreSubitems = function loadMoreSubitems(item) {
    return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.loadLocationItems)(_objectSpread(_objectSpread({}, props.restInfo), {}, {
      parentLocationId: item.internalItem.locationId,
      limit: props.subitemsLoadLimit,
      offset: item.internalItem.subitems.length
    })).then(function (location) {
      setTree(function (prevTree) {
        var prevTreeParentItem = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.findItem)([prevTree], item.internalItem.path.split('/'));
        if (prevTreeParentItem) {
          var nextTree = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(prevTree);
          var nextTreeParentItem = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.findItem)([nextTree], item.internalItem.path.split('/'));
          nextTreeParentItem.subitems = [].concat(_toConsumableArray(nextTreeParentItem.subitems), _toConsumableArray(location.subitems)).map(function (subitem) {
            return _objectSpread(_objectSpread({}, subitem), {}, {
              path: "".concat(nextTreeParentItem.path, "/").concat(subitem.locationId)
            });
          });
          (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.updateItemInSubtree)(subtree.current[0], nextTreeParentItem, item.internalItem.path.split('/'));
          saveSubtree();
          return nextTree;
        }
        return prevTree;
      });
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var getCustomItemClass = function getCustomItemClass(item) {
    var children = item.children,
      total = item.total,
      isRootItem = item.isRootItem;
    var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
      'c-ct-list-item': true,
      'c-ct-list-item--can-load-more': children && children.length < total,
      'c-ct-list-item--is-root-item': isRootItem
    });
    return className;
  };
  var renderEmpty = function renderEmpty() {
    if (!isLoaded || (tree === null || tree === void 0 ? void 0 : tree.locationId) !== undefined) {
      return null;
    }
    var emptyBadge = Translator.trans(/*@Desc("1")*/'content.1', {}, 'ibexa_content_tree_ui');
    var emptyContent = Translator.trans(/*@Desc("Your tree is empty. Start creating your structure")*/'content.empty', {}, 'ibexa_content_tree_ui');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-empty"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-empty__badge"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-badge"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-badge__content"
    }, emptyBadge))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-empty__content"
    }, emptyContent));
  };
  var buildItem = function buildItem(item) {
    return item.internalItem ? item : {
      internalItem: item,
      name: item.name,
      id: item.locationId,
      href: (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_19__.getContentLink)(item),
      path: item.path,
      subitems: item.subitems,
      total: item.totalSubitemsCount,
      hidden: item.isInvisible,
      renderIcon: renderIcon,
      renderLabel: renderLabel,
      customItemClass: getCustomItemClass(item)
    };
  };
  var moduleName = Translator.trans(/*@Desc("Content tree")*/'content.tree_name', {}, 'ibexa_content_tree_ui');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var subtreeData = readSubtree();
    if (subtreeData) {
      subtree.current = subtreeData;
    }
    (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.expandCurrentLocationInSubtree)({
      subtree: subtree.current,
      rootLocationId: rootLocationId,
      currentLocationPath: currentLocationPath,
      subitemsLimit: subitemsLimit
    });
    (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.clipTooDeepSubtreeBranches)({
      subtree: subtree.current[0],
      maxDepth: treeMaxDepth - 1
    });
    subtree.current[0].children.forEach(function (subtreeChild) {
      return (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_20__.limitSubitemsInSubtree)({
        subtree: subtreeChild,
        subitemsLimit: subitemsLimit
      });
    });
    saveSubtree();
    loadTreeToState();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.body.addEventListener('ibexa-content-tree-refresh', loadTreeToState);
    document.body.addEventListener('ibexa-bookmark-change', loadTreeToState);
    return function () {
      document.body.removeEventListener('ibexa-content-tree-refresh', loadTreeToState);
      document.body.removeEventListener('ibexa-bookmark-change', loadTreeToState);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RestInfoContext.Provider, {
    value: props.restInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentTypesInfoMapContext.Provider, {
    value: contentTypesInfoMap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ibexa.modules.TreeBuilder, {
    ref: treeBuilderModuleRef,
    moduleId: MODULE_ID,
    moduleName: moduleName,
    userId: userId,
    subId: rootLocationId,
    tree: tree,
    buildItem: buildItem,
    isActive: isActive,
    loadMoreSubitems: loadMoreSubitems,
    callbackToggleExpanded: callbackToggleExpanded,
    callbackMoveElements: callbackMoveElements,
    callbackCopyElements: callbackCopyElements,
    callbackDeleteElements: callbackDeleteElements,
    subitemsLimit: subitemsLimit,
    treeDepthLimit: treeMaxDepth,
    actionsType: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_TYPE.CONTEXTUAL_MENU,
    dragDisabled: true,
    isLoading: !isLoaded,
    useTheme: true
  }, renderEmpty())));
};
ContentTreeModule.propTypes = {
  currentLocationPath: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  restInfo: PropTypes.shape({
    token: PropTypes.string.isRequired,
    siteaccess: PropTypes.string.isRequired
  }).isRequired,
  preloadedLocations: PropTypes.object,
  subitemsLimit: PropTypes.number,
  subitemsLoadLimit: PropTypes.number,
  rootLocationId: PropTypes.number,
  treeMaxDepth: PropTypes.number,
  readSubtree: PropTypes.func,
  saveSubtree: PropTypes.func,
  sort: PropTypes.shape({
    sortClause: PropTypes.string,
    sortOrder: PropTypes.string
  })
};
ContentTreeModule.defaultProps = {
  preloadedLocations: {},
  rootLocationId: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.treeRootLocationId,
  subitemsLimit: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.childrenLoadMaxLimit,
  subitemsLoadLimit: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.loadMoreLimit,
  treeMaxDepth: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.treeMaxDepth,
  readSubtree: undefined,
  saveSubtree: undefined,
  sort: {}
};
var treeBuilderConfig = _defineProperty({}, MODULE_ID, {
  menuActions: [{
    priority: 20,
    id: 'modifying',
    subitems: [{
      priority: 10,
      id: 'create',
      component: _components_create_content_create_content__WEBPACK_IMPORTED_MODULE_14__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.loadLocationItemExtendedInfo]
    }, {
      priority: 20,
      id: 'edit',
      component: _components_edit_content_edit_content__WEBPACK_IMPORTED_MODULE_15__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.loadLocationItemExtendedInfo]
    }, {
      priority: 20,
      id: 'preview',
      component: _components_preview_content_preview_content_js__WEBPACK_IMPORTED_MODULE_22__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.loadLocationItemExtendedInfo]
    }, {
      priority: 30,
      id: 'delete',
      component: _components_delete_content_delete_content__WEBPACK_IMPORTED_MODULE_17__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.loadLocationItemExtendedInfo]
    }, {
      priority: 40,
      id: 'addTranslation',
      component: _components_add_translation_add_translation__WEBPACK_IMPORTED_MODULE_13__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.loadLocationItemExtendedInfo]
    }, {
      priority: 50,
      id: 'hide',
      component: _components_hide_content_hide_content__WEBPACK_IMPORTED_MODULE_16__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_18__.loadLocationItemExtendedInfo]
    }]
  }, {
    priority: 25,
    id: 'bookmark',
    subitems: [{
      priority: 10,
      id: 'addRemoveBookmarks',
      component: _components_add_remove_bookmarks_add_remove_bookmarks__WEBPACK_IMPORTED_MODULE_12__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM]
    }, {
      priority: 100,
      id: 'addBookmarks',
      component: _components_add_to_bookmarks_add_to_bookmarks_js__WEBPACK_IMPORTED_MODULE_24__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU]
    }, {
      priority: 200,
      id: 'removeBookmarks',
      component: _components_remove_from_bookmarks_remove_from_bookmarks_js__WEBPACK_IMPORTED_MODULE_23__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU]
    }]
  }, {
    priority: 30,
    id: 'collapsible',
    subitems: [{
      priority: 20,
      id: 'collapse',
      component: _components_collapse_all_collapse_all_js__WEBPACK_IMPORTED_MODULE_11__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      checkIsContainer: _common_helpers_content_type__WEBPACK_IMPORTED_MODULE_8__.checkIsContainer
    }]
  }, {
    priority: 40,
    id: 'other',
    subitems: [{
      priority: 10,
      id: 'select',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_select_all_select_all__WEBPACK_IMPORTED_MODULE_9__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      checkIsContainer: _common_helpers_content_type__WEBPACK_IMPORTED_MODULE_8__.checkIsContainer
    }, {
      priority: 20,
      id: 'unselect',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_unselect_all_unselect_all__WEBPACK_IMPORTED_MODULE_10__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      checkIsContainer: _common_helpers_content_type__WEBPACK_IMPORTED_MODULE_8__.checkIsContainer
    }]
  }]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentTreeModule);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/content.schedule.hide.cancel.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/content.schedule.hide.cancel.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var cancelButton = doc.querySelector('.ibexa-btn--schedule-hide-cancel');
  var form = doc.querySelector('form[name="date_based_hide_cancel"]');
  var modal = doc.querySelector('.ibexa-modal--content-reveal-confirmation');
  if (!cancelButton) {
    return;
  }
  if (modal) {
    modal.querySelector('.ibexa-btn--confirm').addEventListener('click', function () {
      form.submit();
    });
  }
  cancelButton.addEventListener('click', function () {
    bootstrap.Modal.getOrCreateInstance(modal).show();
  }, false);
})(window, window.document, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/content.schedule.hide.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/content.schedule.hide.js ***!
  \****************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, ibexa) {
  var scheduleHideNodes = doc.querySelectorAll('.ibexa-extra-actions--schedule-hide');
  scheduleHideNodes.forEach(function (scheduleHideNode) {
    var confirmButton = scheduleHideNode.querySelector('.ibexa-btn--hide-confirm');
    var hideLaterRadio = scheduleHideNode.querySelector('#hide-later');
    var hideNowRadio = scheduleHideNode.querySelector('#hide-now');
    var pickerField = scheduleHideNode.querySelector('.ibexa-picker');
    var dateTimePickerWidget = ibexa.helpers.objectInstances.getInstance(pickerField);
    var form = scheduleHideNode.querySelector('form');
    var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
    var userTimezoneCurrentTime = convertDateToTimezone(new Date());
    var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var minDate = new Date(convertDateToTimezone(userTimezoneCurrentTime, browserTimezone, true));
    dateTimePickerWidget.flatpickrInstance.config.minDate = minDate;
    hideLaterRadio.addEventListener('change', function () {
      dateTimePickerWidget.inputField.removeAttribute('disabled');
      scheduleHideNode.classList.remove('ibexa-pb-schedule-hide--hidden-calendar');
      dateTimePickerWidget.flatpickrInstance.setDate(minDate.getTime(), true);
    });
    hideNowRadio.addEventListener('change', function () {
      dateTimePickerWidget.inputField.setAttribute('disabled', true);
      scheduleHideNode.classList.add('ibexa-pb-schedule-hide--hidden-calendar');
      dateTimePickerWidget.flatpickrInstance.setDate(null, true);
    });
    dateTimePickerWidget.inputField.disabled = !hideLaterRadio.hasAttribute('checked');
    confirmButton.addEventListener('click', function () {
      var modal = scheduleHideNode.dataset.modalSelector ? doc.querySelector(scheduleHideNode.dataset.modalSelector) : null;
      if (modal) {
        bootstrap.Modal.getOrCreateInstance(modal).show();
        modal.querySelector('.ibexa-btn--confirm').addEventListener('click', function () {
          form.submit();
        });
      } else {
        form.submit();
      }
    }, false);
  });
})(window, window.document, window.bootstrap, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/contentTree/contextual.actions.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/contentTree/contextual.actions.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_content_tree_src_bundle_ui_dev_src_modules_content_tree_content_tree_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
/* harmony import */ var _ibexa_scheduler_modules_content_tree_components_schedule_hide_content_schedule_hide_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-scheduler-modules/content-tree/components/schedule-hide-content/schedule.hide.content */ "./vendor/ibexa/scheduler/src/bundle/ui-dev/src/modules/content-tree/components/schedule-hide-content/schedule.hide.content.js");


(function (global, doc, ibexa) {
  var MODIFY_ACTION_ID = 'modifying';
  var HIDE_ACTION_ID = 'hide';
  var getMenuActions = function getMenuActions(actions) {
    var modifyingActions = actions.find(function (action) {
      return action.id === MODIFY_ACTION_ID;
    });
    if (!modifyingActions) {
      return actions;
    }
    var hideAction = modifyingActions.subitems.find(function (action) {
      return action.id === HIDE_ACTION_ID;
    });
    if (!hideAction) {
      return actions;
    }
    hideAction.component = _ibexa_scheduler_modules_content_tree_components_schedule_hide_content_schedule_hide_content__WEBPACK_IMPORTED_MODULE_1__["default"];
    return actions;
  };
  var openScheduleHideWidget = function openScheduleHideWidget(event) {
    var actions = doc.querySelector(".ibexa-extra-actions[data-actions=\"content-tree-hide-schedule\"]");
    var form = actions.querySelector('form[name="content-tree-schedule-hide"]');
    var locationField = form.querySelector('[name="content-tree-schedule-hide[location]"]');
    var contentField = form.querySelector('[name="content-tree-schedule-hide[versionInfo][content_info]"]');
    var versionField = form.querySelector('[name="content-tree-schedule-hide[versionInfo][version_no]"]');
    var internalItem = event.detail.item.internalItem;
    locationField.value = internalItem.locationId;
    contentField.value = internalItem.contentId;
    versionField.value = internalItem.versionNo;
    actions.dataset.modalSelector = internalItem.reverseRelationsCount > 0 ? '#content-tree-hide-content-modal' : '';
    doc.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:toggle-widget', {
      detail: {
        actions: 'content-tree-hide-schedule'
      }
    }));
  };
  doc.body.addEventListener('ibexa-content-tree:schedule-hide', openScheduleHideWidget, false);
  ibexa.addConfig("treeBuilder.".concat(_ibexa_content_tree_src_bundle_ui_dev_src_modules_content_tree_content_tree_module__WEBPACK_IMPORTED_MODULE_0__.MODULE_ID, ".getMenuActions"), [{
    priority: 200,
    callback: getMenuActions
  }], true);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/ui-dev/src/modules/content-tree/components/schedule-hide-content/schedule.hide.content.js":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/ui-dev/src/modules/content-tree/components/schedule-hide-content/schedule.hide.content.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_content_tree_src_bundle_ui_dev_src_modules_content_tree_components_hide_content_hide_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-content-tree/src/bundle/ui-dev/src/modules/content-tree/components/hide-content/hide.content */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/hide-content/hide.content.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


var ScheduleHideContent = function ScheduleHideContent(props) {
  var hideContentCallback = function hideContentCallback(_ref) {
    var isInvisible = _ref.isInvisible,
      item = _ref.item;
    var eventName = isInvisible ? 'ibexa-content-tree:reveal' : 'ibexa-content-tree:schedule-hide';
    document.body.dispatchEvent(new CustomEvent(eventName, {
      detail: {
        item: item
      }
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_content_tree_src_bundle_ui_dev_src_modules_content_tree_components_hide_content_hide_content__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    hideContentCallback: hideContentCallback
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleHideContent);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");








var _window = window,
  Translator = _window.Translator;
var CollapseAll = function CollapseAll(_ref) {
  var item = _ref.item,
    label = _ref.label,
    useIconAsLabel = _ref.useIconAsLabel,
    afterCollapseCallback = _ref.afterCollapseCallback,
    checkIsContainer = _ref.checkIsContainer;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_4__.BuildItemContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_3__.ExpandContext),
    dispatchExpandedData = _useContext.dispatchExpandedData;
  var tree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_4__.TreeContext);
  var isMultipleItemsAction = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_7__.isItemEmpty)(item);
  var isHidden = !isMultipleItemsAction && !checkIsContainer(item);
  if (isHidden) {
    return null;
  }
  var isDisabled = !isMultipleItemsAction ? item.internalItem.totalSubitemsCount === 0 : false;
  var itemLabel = label || Translator.trans(/*@Desc("Collapse all")*/
  'actions.collapse_all', {}, 'ibexa_tree_builder_ui');
  var data = isMultipleItemsAction ? tree : item;
  var canItemBeExpanded = function canItemBeExpanded(itemToCollapse) {
    return !!itemToCollapse.subitems && itemToCollapse.subitems.length;
  };
  var collapseAllNodes = function collapseAllNodes() {
    var items = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_6__.getAllChildren)({
      data: data,
      buildItem: buildItem,
      condition: canItemBeExpanded
    });
    dispatchExpandedData({
      items: items,
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_REMOVE
    });
    afterCollapseCallback(items);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    labelIcon: "caret-up",
    useIconAsLabel: useIconAsLabel,
    onClick: collapseAllNodes,
    isDisabled: isDisabled
  });
};
CollapseAll.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  afterCollapseCallback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  checkIsContainer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
CollapseAll.defaultProps = {
  item: {},
  label: null,
  useIconAsLabel: false,
  afterCollapseCallback: function afterCollapseCallback() {},
  checkIsContainer: function checkIsContainer() {
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapseAll);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _components_modal_delete_modal_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal-delete/modal.delete */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete.js");
/* harmony import */ var _components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _components_contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/contextual-menu/contextual.menu */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }











var ACTION_TIMEOUT = 250;
var _window = window,
  Translator = _window.Translator;
var Delete = function Delete(_ref) {
  var item = _ref.item,
    label = _ref.label,
    useIconAsLabel = _ref.useIconAsLabel,
    modalConfirmationBody = _ref.modalConfirmationBody,
    modalSize = _ref.modalSize,
    isLoading = _ref.isLoading,
    checkIsDisabled = _ref.checkIsDisabled,
    isModalDisabled = _ref.isModalDisabled,
    fetchedData = _ref.fetchedData,
    renderModal = _ref.renderModal;
  var actionTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.BuildItemContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_4__.ExpandContext),
    dispatchExpandedData = _useContext.dispatchExpandedData;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_6__.ContextualMenuContext),
    setIsClosable = _useContext2.setIsClosable,
    setIsExpanded = _useContext2.setIsExpanded;
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_5__.SelectedContext),
    contextSelectedData = _useContext3.selectedData,
    dispatchSelectedData = _useContext3.dispatchSelectedData;
  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.CallbackContext),
    callbackDeleteElements = _useContext4.callbackDeleteElements;
  var itemLabel = label || Translator.trans(/*@Desc("Delete")*/
  'actions.delete', {}, 'ibexa_tree_builder_ui');
  var selectedData = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_10__.isItemEmpty)(item) ? contextSelectedData : [item];
  var isDisabled = isLoading || selectedData.length === 0 || checkIsDisabled(selectedData, fetchedData);
  var hasSubitems = function hasSubitems(_ref2) {
    var subitems = _ref2.subitems;
    return !!subitems && subitems.length;
  };
  var showDeleteModal = function showDeleteModal() {
    setShowModal(true);
  };
  var deleteNodes = function deleteNodes() {
    clearTimeout(actionTimeout.current);
    actionTimeout.current = setTimeout(function () {
      setShowModal(false);
      setIsExpanded(false);
      callbackDeleteElements({
        selectedData: selectedData
      }).then(function () {
        var itemsToRemoveFromStorage = selectedData.reduce(function (storedData, _ref3) {
          var data = _ref3.internalItem;
          var childrenItems = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_9__.getAllChildren)({
            data: data,
            buildItem: buildItem,
            condition: hasSubitems
          });
          return [].concat(_toConsumableArray(storedData), _toConsumableArray(childrenItems));
        }, []);
        dispatchExpandedData({
          items: itemsToRemoveFromStorage,
          type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__.STORED_ITEMS_REMOVE
        });
        dispatchSelectedData({
          type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__.STORED_ITEMS_CLEAR
        });
      });
    }, ACTION_TIMEOUT);
  };
  var closeModal = function closeModal() {
    setShowModal(false);
  };
  var renderModalWrapper = function renderModalWrapper() {
    if (isModalDisabled) {
      return;
    }
    if (renderModal) {
      return renderModal({
        visible: showModal,
        onConfirm: deleteNodes,
        onClose: closeModal,
        size: modalSize
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_modal_delete_modal_delete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: showModal,
      onConfirm: deleteNodes,
      confirmationBody: modalConfirmationBody,
      onClose: closeModal,
      size: modalSize
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsClosable(!showModal);
  }, [showModal]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    labelIcon: "trash",
    useIconAsLabel: useIconAsLabel,
    onClick: isModalDisabled ? deleteNodes : showDeleteModal,
    isLoading: isLoading,
    isDisabled: isDisabled,
    isCustomClose: true
  }), renderModalWrapper());
};
Delete.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  checkIsDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  fetchedData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  isModalDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  modalConfirmationBody: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  modalSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  renderModal: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
Delete.defaultProps = {
  item: {},
  label: null,
  useIconAsLabel: false,
  isLoading: false,
  checkIsDisabled: function checkIsDisabled() {
    return false;
  },
  fetchedData: null,
  isModalDisabled: false,
  modalConfirmationBody: null,
  modalSize: 'large',
  renderModal: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Delete);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useDelayedChildrenSelectReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");










var _window = window,
  Translator = _window.Translator;
var SelectAll = function SelectAll(_ref) {
  var item = _ref.item,
    label = _ref.label,
    useIconAsLabel = _ref.useIconAsLabel,
    checkIsContainer = _ref.checkIsContainer;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.BuildItemContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__.SelectedContext),
    dispatchSelectedData = _useContext.dispatchSelectedData;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_7__.ExpandContext),
    dispatchExpandedData = _useContext2.dispatchExpandedData;
  var tree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.TreeContext);
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.DelayedChildrenSelectContext),
    dispatchDelayedChildrenSelectAction = _useContext3.dispatchDelayedChildrenSelectAction;
  var isMultipleItemsAction = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_6__.isItemEmpty)(item);
  var isHidden = !isMultipleItemsAction && !checkIsContainer(item);
  if (isHidden) {
    return null;
  }
  var isDisabled = !isMultipleItemsAction ? item.internalItem.totalSubitemsCount === 0 : tree === null;
  var getDefaultLabel = function getDefaultLabel() {
    if (isMultipleItemsAction) {
      return Translator.trans(/*@Desc("Select all elements")*/
      'actions.select.all.elements', {}, 'ibexa_tree_builder_ui');
    }
    return Translator.trans(/*@Desc("Select all children")*/
    'actions.select.all', {}, 'ibexa_tree_builder_ui');
  };
  var itemLabel = label || getDefaultLabel();
  if (isDisabled) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: itemLabel,
      labelIcon: "checkmark",
      useIconAsLabel: useIconAsLabel,
      isDisabled: true
    });
  }
  var data = isMultipleItemsAction ? buildItem(tree) : item;
  var selectAll = function selectAll() {
    var allSubitemsWithLoadedSubitems = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_9__.getAllChildren)({
      data: data,
      buildItem: buildItem,
      condition: function condition(subitem) {
        return subitem.subitems.length > 0 || subitem.id === item.id;
      }
    });
    var shouldSelectAlsoParent = isMultipleItemsAction;
    dispatchExpandedData({
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_ADD,
      items: allSubitemsWithLoadedSubitems
    });
    if (shouldSelectAlsoParent) {
      dispatchSelectedData({
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_ADD,
        items: [data]
      });
    }
    dispatchDelayedChildrenSelectAction({
      type: _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_8__.DELAYED_CHILDREN_SELECT_ADD,
      parentId: data.id
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    labelIcon: "checkmark",
    useIconAsLabel: useIconAsLabel,
    onClick: selectAll
  });
};
SelectAll.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  checkIsContainer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
SelectAll.defaultProps = {
  item: {},
  label: null,
  useIconAsLabel: false,
  checkIsContainer: function checkIsContainer() {
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectAll);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");








var _window = window,
  Translator = _window.Translator;
var UnselectAll = function UnselectAll(_ref) {
  var item = _ref.item,
    label = _ref.label,
    useIconAsLabel = _ref.useIconAsLabel,
    checkIsContainer = _ref.checkIsContainer;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.BuildItemContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__.SelectedContext),
    dispatchSelectedData = _useContext.dispatchSelectedData;
  var tree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.TreeContext);
  var isMultipleItemsAction = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_7__.isItemEmpty)(item);
  var isHidden = !isMultipleItemsAction && !checkIsContainer(item);
  if (isHidden) {
    return null;
  }
  var isDisabled = !isMultipleItemsAction ? item.internalItem.totalSubitemsCount === 0 : tree === null;
  var getDefaultLabel = function getDefaultLabel() {
    if ((0,_helpers_item__WEBPACK_IMPORTED_MODULE_7__.isItemEmpty)(item)) {
      return Translator.trans(/*@Desc("Unselect all elements")*/
      'actions.unselect.all.elements', {}, 'ibexa_tree_builder_ui');
    }
    return Translator.trans(/*@Desc("Unselect all children")*/
    'actions.unselect.all', {}, 'ibexa_tree_builder_ui');
  };
  var itemLabel = label || getDefaultLabel();
  if (isDisabled) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: itemLabel,
      labelIcon: "checkmark",
      useIconAsLabel: useIconAsLabel,
      isDisabled: true
    });
  }
  var data = isMultipleItemsAction ? tree : item;
  var unselectAll = function unselectAll() {
    var items = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_6__.getAllChildren)({
      data: data,
      buildItem: buildItem
    });
    dispatchSelectedData({
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_REMOVE,
      items: items
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    labelIcon: "checkmark",
    useIconAsLabel: useIconAsLabel,
    onClick: unselectAll
  });
};
UnselectAll.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  checkIsContainer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
UnselectAll.defaultProps = {
  item: {},
  label: null,
  useIconAsLabel: false,
  checkIsContainer: function checkIsContainer() {
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnselectAll);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _action_list_action_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-list/action.list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var getProps = function getProps(props) {
  var forcedProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.entries(props).reduce(function (output, _ref) {
    var _forcedProps$key;
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    output[key] = (_forcedProps$key = forcedProps[key]) !== null && _forcedProps$key !== void 0 ? _forcedProps$key : value;
    return output;
  }, {});
};
var ActionItem = function ActionItem(props) {
  var forcedProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_action_list_action_list__WEBPACK_IMPORTED_MODULE_6__.ForcedPropsContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_5__.IntermediateActionContext),
    intermediateAction = _useContext.intermediateAction;
  var _getProps = getProps(props, forcedProps),
    label = _getProps.label,
    labelIcon = _getProps.labelIcon,
    useIconAsLabel = _getProps.useIconAsLabel,
    isLoading = _getProps.isLoading,
    isDisabled = _getProps.isDisabled,
    extraClasses = _getProps.extraClasses,
    onClick = _getProps.onClick,
    isCustomClose = _getProps.isCustomClose;
  var getLabel = function getLabel() {
    if (useIconAsLabel && labelIcon) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: labelIcon,
        extraClasses: "ibexa-icon ibexa-icon--small"
      }));
    }
    return label;
  };
  var getLoader = function getLoader() {
    var loaderWrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'c-tb-action-list__item-loader-wrapper': true,
      'c-tb-action-list__item-loader-wrapper--hidden': !isLoading
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: loaderWrapperClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__.SIZES.SMALL
    }));
  };
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-tb-action-list__item': true,
    'c-tb-action-list__item--disabled': isDisabled || intermediateAction.isActive
  }, extraClasses, extraClasses !== ''));
  var attrs = {
    className: className
  };
  if (!isDisabled) {
    attrs.onClick = onClick;
  }
  if (isCustomClose) {
    attrs['data-custom-close'] = 1;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", attrs, getLabel(), getLoader());
};
ActionItem.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  labelIcon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isCustomClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ActionItem.defaultProps = {
  extraClasses: '',
  isDisabled: false,
  labelIcon: null,
  onClick: function onClick() {},
  useIconAsLabel: false,
  isCustomClose: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionItem);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.helpers.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.helpers.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   generateFetchActionsState: () => (/* binding */ generateFetchActionsState),
/* harmony export */   getUniqueFetchMethods: () => (/* binding */ getUniqueFetchMethods)
/* harmony export */ });
var cachedFetchMethodsMap = new Map();
var _getAllFetchMethods = function getAllFetchMethods(actions, zoneType) {
  return actions.flatMap(function (action) {
    var _action$visibleIn$inc, _action$visibleIn;
    if (action.subitems) {
      return _getAllFetchMethods(action.subitems, zoneType);
    } else if (action.fetchMethods && ((_action$visibleIn$inc = (_action$visibleIn = action.visibleIn) === null || _action$visibleIn === void 0 ? void 0 : _action$visibleIn.includes(zoneType)) !== null && _action$visibleIn$inc !== void 0 ? _action$visibleIn$inc : true)) {
      return action.fetchMethods;
    }
    return [];
  });
};
var getUniqueFetchMethods = function getUniqueFetchMethods(actions, zoneType) {
  var allFetchMethods = _getAllFetchMethods(actions, zoneType);
  var uniqueFetchMethods = allFetchMethods.filter(function (fetchMethod, index, originalFetchArray) {
    return originalFetchArray.indexOf(fetchMethod) === index;
  });
  return uniqueFetchMethods;
};
var fetchData = function fetchData(fetchMethods, item, callback) {
  fetchMethods.forEach(function (fetchMethod) {
    if (!cachedFetchMethodsMap.has(item.id)) {
      cachedFetchMethodsMap.set(item.id, new WeakMap());
    }
    var cachedItemMethods = cachedFetchMethodsMap.get(item.id);
    if (cachedItemMethods !== null && cachedItemMethods !== void 0 && cachedItemMethods.has(fetchMethod)) {
      var data = cachedItemMethods.get(fetchMethod);
      callback(data, fetchMethod, true);
    } else {
      fetchMethod(item).then(function (results) {
        cachedItemMethods.set(fetchMethod, results);
        callback(results, fetchMethod, false);
      });
    }
  });
};
var generateFetchActionsState = function generateFetchActionsState(fetchMethods, item) {
  return fetchMethods.map(function (fetchMethod) {
    var _cachedFetchMethodsMa;
    var data = (_cachedFetchMethodsMa = cachedFetchMethodsMap.get(item.id)) === null || _cachedFetchMethodsMa === void 0 ? void 0 : _cachedFetchMethodsMa.get(fetchMethod);
    return {
      fetchMethod: fetchMethod,
      isLoaded: !!data,
      data: data
    };
  });
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForcedPropsContext: () => (/* binding */ ForcedPropsContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _action_list_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.list.helpers */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.helpers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var ForcedPropsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ActionList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var item = _ref.item,
    extraClasses = _ref.extraClasses,
    useIconAsLabel = _ref.useIconAsLabel,
    parent = _ref.parent;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.MenuActionsContext),
    getMenuActions = _useContext.getMenuActions,
    allActions = _useContext.actions;
  var actions = getMenuActions({
    actions: allActions,
    item: item
  });
  var uniqueFetchMethods = (0,_action_list_helpers__WEBPACK_IMPORTED_MODULE_3__.getUniqueFetchMethods)(actions, parent);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_action_list_helpers__WEBPACK_IMPORTED_MODULE_3__.generateFetchActionsState)(uniqueFetchMethods, item)),
    _useState2 = _slicedToArray(_useState, 2),
    allFetchedData = _useState2[0],
    setAllFetchedData = _useState2[1];
  var getSortedActions = function getSortedActions(menu) {
    return _toConsumableArray(menu).sort(function (actionA, actionB) {
      return actionA.priority - actionB.priority;
    });
  };
  var _renderSubmenu = function renderSubmenu(menu) {
    return getSortedActions(menu).filter(function (menuItem) {
      var _menuItem$visibleIn;
      return menuItem.subitems || ((_menuItem$visibleIn = menuItem.visibleIn) === null || _menuItem$visibleIn === void 0 ? void 0 : _menuItem$visibleIn.includes(parent));
    }).map(function (menuItem) {
      var subitems = menuItem.subitems,
        component = menuItem.component,
        id = menuItem.id,
        forcedProps = menuItem.forcedProps,
        fetchMethods = menuItem.fetchMethods;
      if (subitems) {
        var hasAnyChildren = subitems.length;
        if (hasAnyChildren) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
            className: "c-tb-action-list__list",
            key: id
          }, _renderSubmenu(subitems));
        }
        return null;
      }
      var Component = component;
      var fetchedDataMap = allFetchedData.filter(function (_ref2) {
        var fetchMethod = _ref2.fetchMethod;
        return fetchMethods === null || fetchMethods === void 0 ? void 0 : fetchMethods.includes(fetchMethod);
      });
      var isLoading = fetchedDataMap.some(function (_ref3) {
        var isLoaded = _ref3.isLoaded;
        return !isLoaded;
      });
      var fetchedData = fetchedDataMap.map(function (_ref4) {
        var data = _ref4.data;
        return data;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ForcedPropsContext.Provider, {
        key: id,
        value: forcedProps
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({
        item: item,
        useIconAsLabel: useIconAsLabel,
        isLoading: isLoading,
        fetchedData: fetchedData
      }, menuItem)));
    });
  };
  var menu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return _renderSubmenu(actions);
  }, [actions, _renderSubmenu]);
  var onFetchLoaded = function onFetchLoaded(data, fetchMethodKey) {
    setAllFetchedData(function (state) {
      var newState = _toConsumableArray(state);
      var fetchDataEntryKey = newState.findIndex(function (_ref5) {
        var fetchMethod = _ref5.fetchMethod;
        return fetchMethod === fetchMethodKey;
      });
      newState[fetchDataEntryKey] = _objectSpread(_objectSpread({}, newState[fetchDataEntryKey]), {}, {
        isLoaded: true,
        data: data
      });
      return newState;
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_action_list_helpers__WEBPACK_IMPORTED_MODULE_3__.fetchData)(uniqueFetchMethods, item, onFetchLoaded);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref,
    className: "c-tb-action-list ".concat(extraClasses)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-tb-action-list__list"
  }, menu));
});
ActionList.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  parent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ActionList.defaultProps = {
  extraClasses: '',
  item: {},
  useIconAsLabel: false,
  parent: ''
};
ActionList.displayName = 'ActionList';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionList);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextualMenuContext: () => (/* binding */ ContextualMenuContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _action_list_action_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-list/action.list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js");
/* harmony import */ var _portal_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../portal/portal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/portal/portal.js");
/* harmony import */ var _components_width_container_width_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var ContextualMenuContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MENU_DIRECTION = {
  VERTICAL: {
    TOP: 'top',
    BOTTOM: 'bottom'
  },
  HORIZONTAL: {
    LEFT: 'left',
    RIGHT: 'right'
  }
};
var ContextualMenu = function ContextualMenu(_ref) {
  var item = _ref.item,
    isDisabled = _ref.isDisabled,
    parent = _ref.parent,
    isExpanded = _ref.isExpanded,
    setIsExpanded = _ref.setIsExpanded,
    scrollWrapperRef = _ref.scrollWrapperRef;
  var menuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var isClosableRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var portalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var menuPortalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isClosable = _useState2[0],
    setIsClosable = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      horizontal: null,
      vertical: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    menuDirection = _useState4[0],
    setMenuDirection = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isItemCovered = _useState6[0],
    setIsItemCovered = _useState6[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_width_container_width_container__WEBPACK_IMPORTED_MODULE_7__.WidthContainerContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    containerData = _useContext2[0];
  var toggleMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var isCustomClose = event.target.dataset.customClose === '1';
    if (isDisabled || !isClosableRef.current || isCustomClose) {
      return;
    }
    setIsExpanded(function (prevState) {
      return !prevState;
    });
  }, [isDisabled, isClosableRef, setIsExpanded]);
  var toggleMenuOnClickOutside = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (menuRef.current.contains(event.target)) {
      return;
    }
    toggleMenu(event);
  }, [menuRef, toggleMenu]);
  var wrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-contextual-menu': true,
    'c-tb-contextual-menu--burger': true,
    'c-tb-contextual-menu--expanded': isExpanded
  });
  var iconClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'ibexa-icon--small': true,
    'ibexa-icon--primary': !isDisabled && isExpanded
  });
  var togglerClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-contextual-menu__toggler': true,
    'c-tb-contextual-menu__toggler--disabled': isDisabled
  });
  var actionListClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-contextual-menu': true,
    'c-tb-contextual-menu--portal': true
  });
  var portalClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-portal--hidden': !menuDirection.vertical && !menuDirection.horizontal,
    'c-tb-portal--top': menuDirection.vertical === MENU_DIRECTION.VERTICAL.TOP,
    'c-tb-portal--left': menuDirection.horizontal === MENU_DIRECTION.HORIZONTAL.LEFT,
    'c-tb-element--use-theme': containerData.useTheme
  });
  var menuContextData = {
    setIsExpanded: setIsExpanded,
    setIsClosable: setIsClosable
  };
  var getPortalPosition = function getPortalPosition() {
    var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
    var _menuRef$current$getB = menuRef.current.getBoundingClientRect(),
      menuXPos = _menuRef$current$getB.x,
      menuYPos = _menuRef$current$getB.y;
    var _rootDOMElement$getBo = rootDOMElement.getBoundingClientRect(),
      rootDOMElementXPos = _rootDOMElement$getBo.x,
      rootDOMElementYPos = _rootDOMElement$getBo.y;
    return {
      x: parseInt(menuXPos - rootDOMElementXPos, 10),
      y: parseInt(menuYPos - rootDOMElementYPos, 10)
    };
  };
  var updateElementOverflow = function updateElementOverflow() {
    var itemElement = menuRef.current.closest('.c-tb-list-item-single__element');
    var _scrollWrapperRef$cur = scrollWrapperRef.current.getBoundingClientRect(),
      scrollTop = _scrollWrapperRef$cur.top,
      scrollBottom = _scrollWrapperRef$cur.bottom;
    var _itemElement$getBound = itemElement.getBoundingClientRect(),
      itemTop = _itemElement$getBound.top,
      itemBottom = _itemElement$getBound.bottom;
    var topGap = 10;
    var bottomGap = 15;
    if (scrollTop > itemBottom - topGap || scrollBottom < itemTop + bottomGap) {
      setIsItemCovered(true);
    } else if (scrollTop < itemBottom - topGap || scrollBottom > itemTop + bottomGap) {
      setIsItemCovered(false);
    }
  };
  var updateVerticalPosition = function updateVerticalPosition() {
    if (menuPortalRef.current) {
      var itemElement = parent === 'SINGLE_ITEM' ? menuRef.current.closest('.c-tb-list-item-single__element') : menuRef.current;
      var _menuPortalRef$curren = menuPortalRef.current.getBoundingClientRect(),
        menuPortalHeight = _menuPortalRef$curren.height;
      var _itemElement$getBound2 = itemElement.getBoundingClientRect(),
        itemYPosition = _itemElement$getBound2.y;
      if (itemYPosition + menuPortalHeight > window.innerHeight && itemYPosition >= menuPortalHeight) {
        setMenuDirection(function (prevPosition) {
          return _objectSpread(_objectSpread({}, prevPosition), {}, {
            vertical: MENU_DIRECTION.VERTICAL.TOP
          });
        });
      } else {
        setMenuDirection(function (prevPosition) {
          return _objectSpread(_objectSpread({}, prevPosition), {}, {
            vertical: MENU_DIRECTION.VERTICAL.BOTTOM
          });
        });
      }
    }
  };
  var updateHorizontalPosition = function updateHorizontalPosition() {
    if (menuPortalRef.current) {
      var itemElement = parent === 'SINGLE_ITEM' ? menuRef.current.closest('.c-tb-list-item-single__element') : menuRef.current;
      var _menuPortalRef$curren2 = menuPortalRef.current.getBoundingClientRect(),
        menuPortalWidth = _menuPortalRef$curren2.width;
      var _itemElement$getBound3 = itemElement.getBoundingClientRect(),
        itemRightPosition = _itemElement$getBound3.right;
      if (itemRightPosition + menuPortalWidth > window.innerWidth) {
        setMenuDirection(function (prevPosition) {
          return _objectSpread(_objectSpread({}, prevPosition), {}, {
            horizontal: MENU_DIRECTION.HORIZONTAL.LEFT
          });
        });
      } else {
        setMenuDirection(function (prevPosition) {
          return _objectSpread(_objectSpread({}, prevPosition), {}, {
            horizontal: MENU_DIRECTION.HORIZONTAL.RIGHT
          });
        });
      }
    }
  };
  var handleScroll = function handleScroll() {
    if (portalRef.current) {
      var portalPosition = getPortalPosition();
      portalRef.current.setPortalPosition(portalPosition);
    }
    updateElementOverflow();
    updateVerticalPosition();
  };
  var handlePortalRef = function handlePortalRef(portal) {
    if (portal !== portalRef.current && portal !== null) {
      var portalPosition = getPortalPosition();
      portal.setPortalPosition(portalPosition);
    }
    portalRef.current = portal;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isClosableRef.current = isClosable;
  }, [isClosable]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isExpanded) {
      window.document.addEventListener('click', toggleMenuOnClickOutside, false);
    }
    return function () {
      window.document.removeEventListener('click', toggleMenuOnClickOutside, false);
    };
  }, [isExpanded, toggleMenuOnClickOutside]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (scrollWrapperRef && isExpanded) {
      scrollWrapperRef.current.addEventListener('scroll', handleScroll);
      return function () {
        var _scrollWrapperRef$cur2;
        (_scrollWrapperRef$cur2 = scrollWrapperRef.current) === null || _scrollWrapperRef$cur2 === void 0 || _scrollWrapperRef$cur2.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isExpanded, scrollWrapperRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isExpanded) {
      updateVerticalPosition();
      updateHorizontalPosition();
    }
  }, [isExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: wrapperClassName,
    ref: menuRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: togglerClassName,
    onClick: toggleMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "options",
    extraClasses: iconClassName
  })), isExpanded && !isItemCovered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_portal_portal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: handlePortalRef,
    extraClasses: portalClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContextualMenuContext.Provider, {
    value: menuContextData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_list_action_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: menuPortalRef,
    item: item,
    parent: parent,
    extraClasses: actionListClassName
  }))));
};
ContextualMenu.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  parent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  setIsExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  scrollWrapperRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Element)
  })
};
ContextualMenu.defaultProps = {
  item: {},
  isDisabled: false,
  parent: '',
  scrollWrapperRef: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextualMenu);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DRAG_ID: () => (/* binding */ DRAG_ID),
/* harmony export */   DraggableContext: () => (/* binding */ DraggableContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/placeholder-provider/placeholder.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var DraggableContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DRAG_ID = 'DRAG';
var MOVED_INDICATOR_TIMEOUT = 1000;
var DRAGGED_ELEMENT_CENTER_POS = {
  x: 25,
  y: 16
};
var DndProvider = function DndProvider(_ref) {
  var children = _ref.children,
    callbackMoveElements = _ref.callbackMoveElements,
    treeRef = _ref.treeRef;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
  var dragDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.DraggableDisabledContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_4__.IntermediateActionContext),
    setIntermediateAction = _useContext.setIntermediateAction,
    intermediateAction = _useContext.intermediateAction,
    groupingItemId = _useContext.groupingItemId,
    clearIntermediateAction = _useContext.clearIntermediateAction;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_5__.PlaceholderContext),
    placeholderDataRef = _useContext2.placeholderDataRef,
    setActiveItemsData = _useContext2.setActiveItemsData,
    clearPlaceholder = _useContext2.clearPlaceholder;
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_6__.SelectedContext),
    contextSelectedData = _useContext3.selectedData,
    dispatchSelectedData = _useContext3.dispatchSelectedData;
  var portalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDragging = _useState2[0],
    setIsDragging = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    currentMousePosition = _useState4[0],
    setCurrentMousePosition = _useState4[1];
  var getMousePosition = function getMousePosition(event) {
    return {
      x: event.pageX - DRAGGED_ELEMENT_CENTER_POS.x,
      y: event.pageY - DRAGGED_ELEMENT_CENTER_POS.y
    };
  };
  var startDragging = function startDragging(event, _ref2) {
    var item = _ref2.item;
    var isModalOpen = rootDOMElement.classList.contains('modal-open');
    if (dragDisabled || isModalOpen) {
      return;
    }
    event.preventDefault();
    setIsDragging(true);
    var selectedData = contextSelectedData.length ? contextSelectedData : [item];
    groupingItemId.current = null;
    setCurrentMousePosition(getMousePosition(event));
    setActiveItemsData(selectedData);
    setIntermediateAction({
      isActive: true,
      id: DRAG_ID,
      isItemDisabled: function isItemDisabled(itemToDisable, extras) {
        return (0,_helpers_item__WEBPACK_IMPORTED_MODULE_7__.isItemDisabled)(itemToDisable, _objectSpread(_objectSpread({}, extras), {}, {
          selectedData: selectedData
        }));
      },
      listItems: selectedData
    });
  };
  var clearDragAction = function clearDragAction() {
    clearIntermediateAction();
    clearPlaceholder();
    setIsDragging(false);
  };
  var toggleDragging = function toggleDragging(disable) {
    var scrollableWrapper = document.querySelector('.c-tb-tree__scrollable-wrapper');
    scrollableWrapper === null || scrollableWrapper === void 0 || scrollableWrapper.classList.toggle('c-tb-tree__scrollable-wrapper--disabled', !disable);
  };
  var stopDragging = function stopDragging() {
    if (dragDisabled || !intermediateAction.isActive) {
      return;
    }
    groupingItemId.current = null;
    setIsDragging(false);
    callbackMoveElements(placeholderDataRef.current, {
      selectedData: intermediateAction.listItems
    }).then(function () {
      clearPlaceholder();
      setIntermediateAction(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          highlightDestination: true
        });
      });
      dispatchSelectedData({
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__.STORED_ITEMS_CLEAR
      });
      toggleDragging(false);
      setTimeout(function () {
        clearIntermediateAction();
        toggleDragging(true);
      }, MOVED_INDICATOR_TIMEOUT);
    });
  };
  var handleMouseUpOutsideTree = function handleMouseUpOutsideTree(event) {
    var treeList = treeRef.current.querySelector('.c-tb-list');
    if (treeList && !treeList.contains(event.target)) {
      clearDragAction();
    }
  };
  var handleMouseMove = function handleMouseMove(event) {
    setCurrentMousePosition(getMousePosition(event));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (intermediateAction.isActive) {
      rootDOMElement.addEventListener('mousemove', handleMouseMove);
      rootDOMElement.addEventListener('mouseup', handleMouseUpOutsideTree);
    }
    return function () {
      rootDOMElement.removeEventListener('mousemove', handleMouseMove);
      rootDOMElement.removeEventListener('mouseup', handleMouseUpOutsideTree);
    };
  }, [intermediateAction.isActive]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (portalRef.current) {
      portalRef.current.setPortalPosition(currentMousePosition);
    }
  }, [currentMousePosition.x, currentMousePosition.y]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DraggableContext.Provider, {
    value: {
      startDragging: startDragging,
      stopDragging: stopDragging,
      clearDragAction: clearDragAction,
      isDragging: isDragging,
      portalRef: portalRef
    }
  }, children);
};
DndProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  callbackMoveElements: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  treeRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
DndProvider.defaultProps = {
  callbackMoveElements: function callbackMoveElements() {
    return Promise.resolve();
  },
  treeRef: {
    current: null
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DndProvider);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/header/header.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/header/header.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contextual-menu/contextual.menu */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var COLLAPSED_WIDTH = 66;
var EXPANDED_WIDTH = 320;
var Header = function Header(_ref) {
  var _widthContainer$resiz;
  var name = _ref.name,
    renderContent = _ref.renderContent,
    renderActions = _ref.renderActions,
    renderToggleBtn = _ref.renderToggleBtn;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.MenuActionsContext),
    actionsVisible = _useContext.actionsVisible;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ResizableContext),
    isResizable = _useContext2.isResizable;
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_5__.WidthContainerContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    widthContainer = _useContext4[0],
    setWidthContainer = _useContext4[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var containerWidth = (_widthContainer$resiz = widthContainer.resizedContainerWidth) !== null && _widthContainer$resiz !== void 0 ? _widthContainer$resiz : widthContainer.containerWidth;
  var isCollapsed = (0,_width_container_width_container__WEBPACK_IMPORTED_MODULE_5__.checkIsTreeCollapsed)(containerWidth);
  var toggleWidthContainer = function toggleWidthContainer() {
    if (!isCollapsed) {
      setIsExpanded(false);
    }
    setWidthContainer(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        containerWidth: isCollapsed ? EXPANDED_WIDTH : COLLAPSED_WIDTH
      });
    });
  };
  var renderCollapseButton = function renderCollapseButton() {
    if (!isResizable) {
      return null;
    }
    if (renderToggleBtn) {
      return renderToggleBtn(isCollapsed, toggleWidthContainer);
    }
    var iconName = isCollapsed ? 'caret-next' : 'caret-back';
    var caretIconClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'ibexa-icon--tiny': isCollapsed,
      'ibexa-icon--small': !isCollapsed
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "ibexa-btn btn ibexa-btn--no-text ibexa-btn--tertiary c-tb-header__toggle-btn",
      onClick: toggleWidthContainer
    }, isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "content-tree",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconName,
      extraClasses: caretIconClassName
    }));
  };
  var renderHeaderContent = function renderHeaderContent() {
    if (renderContent) {
      return renderContent();
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-header__name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "content-tree",
      extraClasses: "ibexa-icon--small c-tb-header__tree-icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-tb-header__name-content"
    }, name));
  };
  var renderHeaderActions = function renderHeaderActions() {
    if (renderActions) {
      return renderActions();
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-header__options"
    }, actionsVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      parent: _tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.TOP_MENU,
      isExpanded: isExpanded,
      setIsExpanded: setIsExpanded
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-header"
  }, renderCollapseButton(), !isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderHeaderContent(), renderHeaderActions()));
};
Header.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  renderContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  renderActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  renderToggleBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
Header.defaultProps = {
  renderContent: null,
  renderActions: null,
  renderToggleBtn: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js":
/*!******************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");



var IndentationHorizontal = function IndentationHorizontal(_ref) {
  var itemDepth = _ref.itemDepth;
  var indentationClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-tb-list-item-single__indentation': true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: indentationClass,
    style: {
      '--indent': itemDepth
    }
  });
};
IndentationHorizontal.propTypes = {
  itemDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndentationHorizontal);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntermediateActionContext: () => (/* binding */ IntermediateActionContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var IntermediateActionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var IntermediateActionProvider = function IntermediateActionProvider(_ref) {
  var children = _ref.children;
  var groupingItemId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      isActive: false,
      listItems: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    intermediateAction = _useState2[0],
    setIntermediateAction = _useState2[1];
  var clearIntermediateAction = function clearIntermediateAction() {
    groupingItemId.current = null;
    setIntermediateAction({
      isActive: false,
      listItems: []
    });
  };
  var intermediateActionDataContextValues = {
    intermediateAction: intermediateAction,
    setIntermediateAction: setIntermediateAction,
    groupingItemId: groupingItemId,
    clearIntermediateAction: clearIntermediateAction
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntermediateActionContext.Provider, {
    value: intermediateActionDataContextValues
  }, children);
};
IntermediateActionProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntermediateActionProvider);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/limit/limit.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/limit/limit.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../indentation-horizontal/indentation.horizontal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");





var Limit = function Limit(_ref) {
  var isExpanded = _ref.isExpanded,
    subitems = _ref.subitems,
    itemDepth = _ref.itemDepth;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var subitemsLimit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_4__.SubitemsLimitContext);
  var subitemsLimitReached = subitems.length >= subitemsLimit;
  if (subitemsLimit === null || !isExpanded || !subitemsLimitReached) {
    return null;
  }
  var message = Translator.trans(/*@Desc("Loading limit reached")*/
  'show_more.limit_reached', {}, 'ibexa_tree_builder_ui');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-item-single__element c-tb-list-item-single__element--limit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    itemDepth: itemDepth
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tb-list-item-single__load-more-limit-info"
  }, message));
};
Limit.propTypes = {
  isExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  itemDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
Limit.defaultProps = {
  itemDepth: 0,
  subitems: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Limit);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item-single/list.item.single.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item-single/list.item.single.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list/list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list/list.js");
/* harmony import */ var _toggler_toggler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toggler/toggler */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/toggler/toggler.js");
/* harmony import */ var _load_more_load_more__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../load-more/load.more */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/load-more/load.more.js");
/* harmony import */ var _limit_limit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../limit/limit */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/limit/limit.js");
/* harmony import */ var _contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contextual-menu/contextual.menu */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js");
/* harmony import */ var _list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../list-menu/list.menu */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-menu/list.menu.js");
/* harmony import */ var _indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../indentation-horizontal/indentation.horizontal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js");
/* harmony import */ var _local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../placeholder-provider/placeholder.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js");
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _hooks_useDidUpdateEffect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/useDidUpdateEffect */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDidUpdateEffect.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../hooks/useDelayedChildrenSelectReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_notification_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



























var START_DRAG_TIMEOUT = 300;
var isSelectedLimitReached = function isSelectedLimitReached(selectedLimit, selectedData) {
  if (selectedLimit === null || selectedLimit === 1) {
    return false;
  }
  return selectedData.length >= selectedLimit;
};
var ListItemSingle = function ListItemSingle(_ref) {
  var _item$dragItemDisable, _item$actionsDisabled, _intermediateAction$c, _item$subitems2;
  var index = _ref.index,
    isRoot = _ref.isRoot,
    item = _ref.item,
    itemDepth = _ref.itemDepth,
    parents = _ref.parents,
    rootSelectionDisabled = _ref.rootSelectionDisabled,
    selectionDisabled = _ref.selectionDisabled,
    rootElementDisabled = _ref.rootElementDisabled,
    showHighlight = _ref.showHighlight,
    isLastItem = _ref.isLastItem;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_23__.getTranslator)();
  var bootstrap = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_23__.getBootstrap)();
  var isActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ActiveContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.CallbackContext),
    callbackToggleExpanded = _useContext.callbackToggleExpanded,
    callbackQuickEditElement = _useContext.callbackQuickEditElement,
    callbackQuickCreateElement = _useContext.callbackQuickCreateElement;
  var checkIsDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.DisabledItemContext);
  var checkIsInputDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.DisabledItemInputContext);
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_14__.DraggableContext),
    startDragging = _useContext2.startDragging,
    stopDragging = _useContext2.stopDragging,
    isDragging = _useContext2.isDragging;
  var dragDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.DraggableDisabledContext);
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_11__.ExpandContext),
    expandedData = _useContext3.expandedData,
    dispatchExpandedData = _useContext3.dispatchExpandedData;
  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_16__.IntermediateActionContext),
    intermediateAction = _useContext4.intermediateAction;
  var loadMoreSubitems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.LoadMoreSubitemsContext);
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.MenuActionsContext),
    actionsType = _useContext5.actionsType,
    actionsVisible = _useContext5.actionsVisible;
  var moduleId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ModuleIdContext);
  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_13__.PlaceholderContext),
    mouseMove = _useContext6.mouseMove;
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_12__.SelectedContext),
    selectedData = _useContext7.selectedData,
    dispatchSelectedData = _useContext7.dispatchSelectedData;
  var selectedLimit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.SelectedLimitContext);
  var treeDepthLimit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.TreeDepthLimitContext);
  var saveTreeFullWidth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_15__.TreeFullWidthContext);
  var _useContext8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_15__.WidthContainerContext),
    _useContext9 = _slicedToArray(_useContext8, 1),
    widthContainerData = _useContext9[0];
  var scrollWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ScrollWrapperContext);
  var _useContext10 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.DelayedChildrenSelectContext),
    delayedChildrenSelectParentsIds = _useContext10.delayedChildrenSelectParentsIds,
    dispatchDelayedChildrenSelectAction = _useContext10.dispatchDelayedChildrenSelectAction;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.BuildItemContext);
  var _useContext11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.QuickActionsContext),
    quickActionMode = _useContext11.quickActionMode,
    quickActionItemId = _useContext11.quickActionItemId,
    setQuickActionMode = _useContext11.setQuickActionMode,
    setQuickActionItemId = _useContext11.setQuickActionItemId;
  var isWaitingForDrag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var itemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var quickEditInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var quickCreateInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var rootElementHidden = rootElementDisabled && itemDepth === -1;
  var dragItemDisabled = dragDisabled || ((_item$dragItemDisable = item.dragItemDisabled) !== null && _item$dragItemDisable !== void 0 ? _item$dragItemDisable : false);
  var actionsDisabled = (_item$actionsDisabled = item.actionsDisabled) !== null && _item$actionsDisabled !== void 0 ? _item$actionsDisabled : false;
  var isItemActive = isActive(item);
  var scrollToElementRef = function scrollToElementRef(node) {
    if (isItemActive && scrollWrapperRef.current && node) {
      var scrollWrapperTop = scrollWrapperRef.current.getBoundingClientRect().top;
      var itemTop = node.getBoundingClientRect().top;
      var offset = itemTop - scrollWrapperTop;
      scrollWrapperRef.current.scrollTo(0, offset);
    }
  };
  var labelTruncatedCallbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    if (node) {
      var tooltipInstance = bootstrap.Tooltip.getInstance(node);
      if (!tooltipInstance) {
        return;
      }
      if (node.scrollWidth <= node.offsetWidth) {
        tooltipInstance.disable();
      } else {
        tooltipInstance.enable();
        saveTreeFullWidth(node.scrollWidth - node.offsetWidth);
      }
      (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_25__.parse)(node);
    }
  }, [widthContainerData.containerWidth]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(item.name),
    _useState4 = _slicedToArray(_useState3, 2),
    updatedName = _useState4[0],
    setUpdatedName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    createdName = _useState6[0],
    setCreatedName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isContextMenuOpened = _useState8[0],
    setIsContextMenuOpened = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];
  var isQuickEditModeEnabled = quickActionItemId === item.id && quickActionMode === _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.QUICK_ACTION_MODES.EDIT;
  var isQuickCreateModeEnabled = quickActionItemId === item.id && quickActionMode === _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.QUICK_ACTION_MODES.CREATE;
  var areActionsDisabled = intermediateAction.isActive;
  var isDisabled = ((_intermediateAction$c = intermediateAction.checkIsDisabled) === null || _intermediateAction$c === void 0 ? void 0 : _intermediateAction$c.call(intermediateAction, item, {
    parents: parents
  })) || checkIsDisabled(item, {
    intermediateAction: intermediateAction
  });
  var isExpanded = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_19__.isItemStored)(item, expandedData);
  var isSelected = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_19__.isItemStored)(item, selectedData);
  var isEqualItem = function isEqualItem(itemToCompare) {
    return itemToCompare.id === item.id;
  };
  var isDestination = intermediateAction.isActive && intermediateAction.highlightDestination && intermediateAction.listItems.some(isEqualItem);
  var parent = parents[parents.length - 1];
  var quickCreatePlaceholder = Translator.trans(/*@Desc("New item")*/'quick_actions.create.placeholder', {}, 'ibexa_tree_builder_ui');
  var getCheckboxTooltip = function getCheckboxTooltip() {
    if (!isSelectedLimitReached(selectedLimit, selectedData)) {
      return null;
    }
    return Translator.trans(/*@Desc("You cannot select more than %selectedLimit% items.")*/'checkbox.limit.message', {
      selectedLimit: selectedLimit
    }, 'ibexa_tree_builder_ui');
  };
  var hoverIn = function hoverIn() {
    setIsHovered(true);
    if (item.onItemHoverIn) {
      item.onItemHoverIn();
    }
  };
  var hoverOut = function hoverOut() {
    setIsHovered(false);
    if (item.onItemHoverOut) {
      item.onItemHoverOut();
    }
  };
  var loadMore = function loadMore() {
    if (!loadMoreSubitems) {
      return;
    }
    setIsLoading(true);
    return loadMoreSubitems(item).then(function (response) {
      setIsLoading(false);
      return response;
    });
  };
  var onLabelClick = function onLabelClick(event) {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    if (intermediateAction.isActive) {
      event.preventDefault();
      if (intermediateAction.callback) {
        intermediateAction.callback(item);
      }
      return;
    }
    if (item.onItemClick) {
      item.onItemClick();
    }
  };
  var renderActions = function renderActions() {
    switch (actionsType) {
      case _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ACTION_TYPE.LIST_MENU:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          isDisabled: areActionsDisabled,
          parent: _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ACTION_PARENT.SINGLE_ITEM
        });
      case _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ACTION_TYPE.CONTEXTUAL_MENU:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: item,
          isDisabled: areActionsDisabled,
          parent: _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ACTION_PARENT.SINGLE_ITEM,
          isExpanded: isContextMenuOpened,
          setIsExpanded: setIsContextMenuOpened,
          scrollWrapperRef: scrollWrapperRef
        });
      default:
        return null;
    }
  };
  var renderActionsWrapper = function renderActionsWrapper() {
    if (!actionsVisible || actionsDisabled) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__actions"
    }, renderActions());
  };
  var renderQuickEditAction = function renderQuickEditAction() {
    var triggerRename = function triggerRename() {
      callbackQuickEditElement(item, updatedName);
      setQuickActionMode(null);
      setQuickActionItemId(null);
    };
    var cancelRename = function cancelRename() {
      setUpdatedName(item.name);
      setQuickActionMode(null);
      setQuickActionItemId(null);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__quick-actions-wrapper c-tb-list-item-single__quick-actions-wrapper--edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__quick-action"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "folder",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      ref: quickEditInputRef,
      type: "text",
      className: "c-tb-list-item-single__quick-action-input c-tb-list-item-single__quick-action-input--edit form-control ibexa-input ibexa-input--text",
      value: updatedName,
      onChange: function onChange(event) {
        return setUpdatedName(event.currentTarget.value);
      },
      onKeyUp: function onKeyUp(event) {
        var code = event.code;
        if (code === 'Escape') {
          cancelRename();
        }
        if (code === 'Enter') {
          triggerRename();
        }
      },
      onBlur: function onBlur() {
        return triggerRename();
      }
    })));
  };
  var renderQuickCreateAction = function renderQuickCreateAction() {
    var triggerCreate = function triggerCreate() {
      callbackQuickCreateElement(item.internalItem, createdName);
      setCreatedName('');
      setQuickActionMode(null);
      setQuickActionItemId(null);
    };
    var cancelCreate = function cancelCreate() {
      setCreatedName('');
      setQuickActionMode(null);
      setQuickActionItemId(null);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__quick-actions-wrapper c-tb-list-item-single__quick-actions-wrapper--create"
    }, renderIndentationHorizontal(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__quick-action"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "folder",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      ref: quickCreateInputRef,
      type: "text",
      className: "c-tb-list-item-single__quick-action-input c-tb-list-item-single__quick-action-input--create form-control ibexa-input ibexa-input--text",
      placeholder: quickCreatePlaceholder,
      value: createdName,
      onChange: function onChange(event) {
        return setCreatedName(event.currentTarget.value);
      },
      onKeyUp: function onKeyUp(event) {
        var code = event.code;
        if (code === 'Escape') {
          cancelCreate();
        }
        if (code === 'Enter') {
          triggerCreate();
        }
      },
      onBlur: function onBlur() {
        return triggerCreate();
      }
    })));
  };
  var renderDragIcon = function renderDragIcon() {
    var dragIconClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'ibexa-icon--tiny-small': true,
      'c-tb-list-item-single__drag-icon': true,
      'c-tb-list-item-single__drag-icon--hidden': dragItemDisabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "drag",
      extraClasses: dragIconClass
    });
  };
  var renderIndentationVerticalLine = function renderIndentationVerticalLine() {
    var indentationClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'c-tb-list-item-single__indentation-line': true,
      'c-tb-list-item-single__indentation-line--vertical': true
    });
    if (!isExpanded || item.total === 0) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: indentationClass,
      style: {
        '--indent': itemDepth
      }
    });
  };
  var renderIndentationHorizontal = function renderIndentationHorizontal() {
    if (isRoot && rootSelectionDisabled) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      itemDepth: itemDepth
    });
  };
  var startDraggingItem = function startDraggingItem(event) {
    if (dragItemDisabled) {
      return;
    }
    dispatchExpandedData({
      items: [item],
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_REMOVE
    });
    startDragging(event, {
      item: item,
      parent: parent,
      index: index,
      target: itemRef.current
    });
  };
  var stopDraggingItem = function stopDraggingItem(event) {
    if (!isDragging) {
      return;
    }
    stopDragging(event);
  };
  var handleMouseMove = function handleMouseMove(event) {
    if (!isDragging) {
      return;
    }
    mouseMove(event, {
      item: item,
      parent: parent,
      index: index,
      isExpanded: isExpanded,
      isDisabled: isDisabled
    });
  };
  var handleMouseDown = function handleMouseDown(event) {
    var target = event.target;
    if (target.classList.contains('c-tb-list-item-single__quick-action-input--edit')) {
      return;
    }
    event.preventDefault();
    if (event.button !== 0) {
      return;
    }
    isWaitingForDrag.current = true;
    setTimeout(function () {
      if (isWaitingForDrag.current) {
        startDraggingItem(event);
      }
    }, START_DRAG_TIMEOUT);
  };
  var handleMouseUp = function handleMouseUp(event) {
    isWaitingForDrag.current = false;
    stopDraggingItem(event);
  };
  var handleMouseLeave = function handleMouseLeave(event) {
    if (isWaitingForDrag.current) {
      startDraggingItem(event);
      isWaitingForDrag.current = false;
      return;
    }
  };
  var getIconChoice = function getIconChoice() {
    if (item.renderIcon && !isHovered && !isSelected) {
      return item.renderIcon(item, {
        isLoading: isLoading,
        labelTruncatedCallbackRef: labelTruncatedCallbackRef
      });
    }
    return renderSelectInput();
  };
  var getLabel = function getLabel() {
    if (item.label) {
      return item.label;
    }
    if (item.renderLabel) {
      return item.renderLabel(item, {
        isLoading: isLoading,
        labelTruncatedCallbackRef: labelTruncatedCallbackRef
      });
    }
    return '';
  };
  var getHiddenInfo = function getHiddenInfo() {
    if (!item.hidden) {
      return null;
    }
    var hiddenIconClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'ibexa-icon--small': true,
      'c-tb-list-item-single__hidden-icon': true
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "view-hide",
      extraClasses: hiddenIconClass
    });
  };
  var renderLabel = function renderLabel() {
    var labelProps = {
      className: 'c-tb-list-item-single__label',
      onClick: onLabelClick
    };
    var label = getLabel();
    if (!item.href || isDisabled) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", labelProps, getIconChoice(), label, getHiddenInfo());
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", labelProps, getIconChoice(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "c-tb-list-item-single__link",
      href: item.href
    }, label, getHiddenInfo()));
  };
  var renderSelectInput = function renderSelectInput() {
    var inputType = selectedLimit === 1 ? 'radio' : 'checkbox';
    var isInputDisabled = !isSelected && (areActionsDisabled || isSelectedLimitReached(selectedLimit, selectedData) || checkIsInputDisabled(item));
    if (isRoot && rootSelectionDisabled || selectionDisabled) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: inputType,
      id: "ibexa-tb-row-selected-".concat(moduleId, "-").concat(item.id),
      className: "ibexa-input ibexa-input--".concat(inputType),
      onChange: toggleSelectInput,
      checked: isSelected,
      disabled: isInputDisabled,
      title: getCheckboxTooltip()
    });
  };
  var _updateIndentationLine = function updateIndentationLine(itemRefElement, indentHeight) {
    var childList = itemRefElement.querySelector(':scope > .c-tb-list');
    if (!childList || !childList.hasChildNodes()) {
      return indentHeight;
    }
    var lastChild = childList.lastElementChild.firstElementChild;
    var lastChildHasChildren = lastChild.classList.contains('c-tb-list-item-single--has-sub-items');
    indentHeight += lastChild.offsetTop;
    if (lastChildHasChildren) {
      indentHeight = _updateIndentationLine(lastChild, indentHeight);
    }
    return indentHeight;
  };
  var setIndentHeight = function setIndentHeight() {
    var newIndentHeight = itemRef.current.offsetTop;
    var itemHasChildren = itemRef.current.classList.contains('c-tb-list-item-single--has-sub-items');
    var parentElement = itemRef.current.parentElement.closest('.c-tb-list-item-single--has-sub-items');
    var indentationLine = parentElement === null || parentElement === void 0 ? void 0 : parentElement.querySelector('.c-tb-list-item-single__indentation-line--vertical');
    if (itemHasChildren) {
      newIndentHeight = _updateIndentationLine(itemRef.current, newIndentHeight);
    }
    if (indentationLine) {
      indentationLine.style.height = "".concat(newIndentHeight, "px");
    }
  };
  var toggleSelectInput = function toggleSelectInput() {
    var actionType = selectedLimit === 1 ? _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_SET : _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_TOGGLE;
    dispatchSelectedData({
      items: [item],
      type: actionType
    });
  };
  var toggleExpanded = function toggleExpanded() {
    if (treeDepthLimit !== null && itemDepth >= treeDepthLimit) {
      var notificationMessage = Translator.trans(/*@Desc("Cannot load sub-items for this Location because you reached max tree depth.")*/'expand_item.limit.message', {}, 'ibexa_tree_builder_ui');
      (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_notification_helper__WEBPACK_IMPORTED_MODULE_24__.showWarningNotification)(notificationMessage);
      return;
    }
    dispatchExpandedData({
      items: [item],
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_TOGGLE
    });
  };
  var itemAttrs = _objectSpread({}, item.customAttrs);
  (0,_hooks_useDidUpdateEffect__WEBPACK_IMPORTED_MODULE_18__["default"])(function () {
    callbackToggleExpanded(item, {
      isExpanded: isExpanded,
      loadMore: loadMore
    });
  }, [isExpanded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _item$subitems;
    if (((_item$subitems = item.subitems) === null || _item$subitems === void 0 ? void 0 : _item$subitems.length) === 0 && isExpanded) {
      dispatchExpandedData({
        items: [item],
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_REMOVE
      });
    }
  }, [(_item$subitems2 = item.subitems) === null || _item$subitems2 === void 0 ? void 0 : _item$subitems2.length]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatchSelectedData({
      items: [item],
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_REPLACE
    });
    if (itemRef.current) {
      scrollToElementRef(itemRef.current);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _item$subitems3;
    var shouldSelectChildren = delayedChildrenSelectParentsIds.includes(item.id);
    var areChildrenAlreadyLoaded = !!((_item$subitems3 = item.subitems) !== null && _item$subitems3 !== void 0 && _item$subitems3.length);
    if (shouldSelectChildren && areChildrenAlreadyLoaded) {
      var allItems = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_22__.getAllChildren)({
        data: item,
        buildItem: buildItem,
        condition: function condition(subitem) {
          return subitem.id !== item.id;
        }
      });
      var items = selectedLimit ? allItems.slice(0, selectedLimit) : allItems;
      dispatchDelayedChildrenSelectAction({
        type: _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_21__.DELAYED_CHILDREN_SELECT_REMOVE,
        parentId: item.id
      });
      dispatchSelectedData({
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_ADD,
        items: items
      });
    }
    if (isLastItem && !isRoot && !rootElementDisabled) {
      setIndentHeight();
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isQuickCreateModeEnabled) {
      quickCreateInputRef.current.focus();
      if (!isExpanded && item.total) {
        toggleExpanded();
      }
    }
    if (isQuickEditModeEnabled) {
      quickEditInputRef.current.focus();
    }
  }, [isQuickCreateModeEnabled, isQuickEditModeEnabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setUpdatedName(item.name);
  }, [item.name]);
  itemAttrs.className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-tb-list-item-single': true,
    'c-tb-list-item-single--has-sub-items': item.total,
    'c-tb-list-item-single--hovered': isHovered && !isDragging && !isQuickEditModeEnabled && !isQuickCreateModeEnabled && !(dragItemDisabled && actionsDisabled),
    'c-tb-list-item-single--highlighted': showHighlight,
    'c-tb-list-item-single--clickable': (item.href || item.onItemClick) && !isDisabled,
    'c-tb-list-item-single--disabled': isDisabled,
    'c-tb-list-item-single--expanded': isExpanded,
    'c-tb-list-item-single--active': isItemActive,
    'c-tb-list-item-single--hidden': item.hidden,
    'c-tb-list-item-single--destination': isDestination,
    'c-tb-list-item-single--context-menu-opened': isContextMenuOpened,
    'c-tb-list-item-single--draggable': !dragItemDisabled,
    'c-tb-list-item-single--action-and-drag-disabled': dragItemDisabled && actionsDisabled,
    'c-tb-list-item-single--quick-edit-mode': isQuickEditModeEnabled,
    'c-tb-list-item-single--quick-create-mode': isQuickCreateModeEnabled
  }, item.customItemClass, !!item.customItemClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, itemAttrs, {
    ref: itemRef
  }), !rootElementHidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderIndentationVerticalLine(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-item-single__element c-tb-list-item-single__element--main",
    onMouseEnter: hoverIn,
    onMouseMove: handleMouseMove,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseLeave: function onMouseLeave(event) {
      hoverOut();
      handleMouseLeave(event);
    }
  }, renderDragIcon(), renderIndentationHorizontal(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_toggler_toggler__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleExpanded,
    totalSubitemsCount: item.total
  }), renderLabel(), renderQuickEditAction(), renderActionsWrapper())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    parents: [].concat(_toConsumableArray(parents), [item]),
    isExpanded: isExpanded,
    subitems: item.subitems,
    depth: itemDepth,
    checkIsDisabled: checkIsDisabled,
    itemRef: itemRef,
    selectionDisabled: selectionDisabled
  }), renderQuickCreateAction(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_load_more_load_more__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isExpanded: isExpanded,
    isLoading: isLoading,
    loadMore: loadMore,
    subitems: item.subitems,
    totalSubitemsCount: item.total,
    itemDepth: itemDepth + 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_limit_limit__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isExpanded: isExpanded,
    subitems: item.subitems,
    itemDepth: itemDepth + 1
  }));
};
ListItemSingle.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  checkIsDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isRoot: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  itemDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  parents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  setParentIndentHeight: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  rootSelectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rootElementDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showHighlight: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLastItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  enableQuickEditMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  enableQuickCreateMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ListItemSingle.defaultProps = {
  checkIsDisabled: function checkIsDisabled() {
    return false;
  },
  isRoot: false,
  itemDepth: 0,
  parents: [],
  setParentIndentHeight: function setParentIndentHeight() {},
  rootSelectionDisabled: false,
  selectionDisabled: false,
  rootElementDisabled: false,
  showHighlight: false,
  isLastItem: false,
  enableQuickEditMode: false,
  enableQuickCreateMode: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemSingle);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item/list.item.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item/list.item.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_item_single_list_item_single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-item-single/list.item.single */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item-single/list.item.single.js");
/* harmony import */ var _placeholder_destination_placeholder_destination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../placeholder-destination/placeholder.destination */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-destination/placeholder.destination.js");
/* harmony import */ var _placeholder_source_placeholder_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../placeholder-source/placeholder.source */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-source/placeholder.source.js");
/* harmony import */ var _hooks_useBuildItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useBuildItem */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useBuildItem.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _portal_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portal/portal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/portal/portal.js");
var _excluded = ["showPlaceholder", "item"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }









var ListItem = function ListItem(props) {
  var showPlaceholder = props.showPlaceholder,
    originalItem = props.item,
    restProps = _objectWithoutProperties(props, _excluded);
  var item = (0,_hooks_useBuildItem__WEBPACK_IMPORTED_MODULE_5__["default"])(originalItem, restProps);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__.DraggableContext),
    portalRef = _useContext.portalRef;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_6__.IntermediateActionContext),
    intermediateAction = _useContext2.intermediateAction,
    groupingItemId = _useContext2.groupingItemId;
  var isEqualItem = function isEqualItem(itemToCompare) {
    return itemToCompare.id === item.id;
  };
  var isSource = intermediateAction.isActive && !intermediateAction.highlightDestination && intermediateAction.listItems.some(isEqualItem);
  if (isSource && groupingItemId.current === null) {
    groupingItemId.current = item.id;
  }
  var renderContent = function renderContent() {
    if (isSource && groupingItemId.current !== item.id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_placeholder_source_placeholder_source__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
    if (isSource && groupingItemId.current === item.id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_placeholder_source_placeholder_source__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_portal_portal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: portalRef,
        extraClasses: "c-tb-drag-and-drop-portal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-tb-list-item c-tb-list-item--grouped-source"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "c-tb-list-item__group"
      }, intermediateAction.listItems.map(function (listItem) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_item_single_list_item_single__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
          key: listItem.id,
          item: listItem
        }, restProps));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-tb-list-item__cover"
      }))));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_item_single_list_item_single__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      item: item
    }, restProps)), showPlaceholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_placeholder_destination_placeholder_destination__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, renderContent());
};
ListItem.propTypes = {
  showPlaceholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-menu/list.menu.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-menu/list.menu.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_list_action_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-list/action.list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js");



var ListMenu = function ListMenu(_ref) {
  var item = _ref.item,
    isDisabled = _ref.isDisabled,
    parent = _ref.parent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_list_action_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: item,
    isDisabled: isDisabled,
    parent: parent,
    useIconAsLabel: true
  }));
};
ListMenu.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  parent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ListMenu.defaultProps = {
  item: {},
  isDisabled: false,
  parent: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListMenu);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list/list.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list/list.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _list_item_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-item/list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item/list.item.js");
/* harmony import */ var _placeholder_destination_placeholder_destination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../placeholder-destination/placeholder.destination */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-destination/placeholder.destination.js");
/* harmony import */ var _placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../placeholder-provider/placeholder.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var List = function List(_ref) {
  var _widthContainer$resiz, _subitems$;
  var parents = _ref.parents,
    isExpanded = _ref.isExpanded,
    subitems = _ref.subitems,
    depth = _ref.depth,
    itemRef = _ref.itemRef,
    setParentIndentHeight = _ref.setParentIndentHeight,
    rootSelectionDisabled = _ref.rootSelectionDisabled,
    selectionDisabled = _ref.selectionDisabled,
    rootElementDisabled = _ref.rootElementDisabled;
  var prevIsExpanded = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isExpanded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_5__.PlaceholderContext),
    placeholderData = _useContext.placeholderData;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_6__.WidthContainerContext),
    _useContext3 = _slicedToArray(_useContext2, 1),
    widthContainer = _useContext3[0];
  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__.DraggableContext),
    isDragging = _useContext4.isDragging;
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_8__.IntermediateActionContext),
    intermediateAction = _useContext5.intermediateAction;
  var containerWidth = (_widthContainer$resiz = widthContainer.resizedContainerWidth) !== null && _widthContainer$resiz !== void 0 ? _widthContainer$resiz : widthContainer.containerWidth;
  var isCollapsed = (0,_width_container_width_container__WEBPACK_IMPORTED_MODULE_6__.checkIsTreeCollapsed)(containerWidth);
  var childrenDepth = depth + 1;
  var placeholderIndex = null;
  var isItemSource = function isItemSource(itemId) {
    var isEqualItem = function isEqualItem(itemToCompare) {
      return itemToCompare.id === itemId;
    };
    return intermediateAction.isActive && !intermediateAction.highlightDestination && intermediateAction.listItems.some(isEqualItem);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!subitems.length) {
      return;
    }
    if (isExpanded !== prevIsExpanded.current) {
      document.dispatchEvent(new CustomEvent('ibexa-tb-toggled-expand'));
    }
    prevIsExpanded.current = isExpanded;
  }, [isExpanded, subitems]);
  if (!subitems || !isExpanded || isCollapsed) {
    return null;
  }
  if (placeholderData.nextParent && parents.length && placeholderData.nextParent.id === parents[parents.length - 1].id) {
    placeholderIndex = placeholderData.nextIndex;
  }
  var listClasses = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-tb-list': true,
    'c-tb-list--dragging': isDragging
  });
  var isFirstSubitemSource = isItemSource((_subitems$ = subitems[0]) === null || _subitems$ === void 0 ? void 0 : _subitems$.id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: listClasses
  }, !isFirstSubitemSource && placeholderIndex === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_placeholder_destination_placeholder_destination__WEBPACK_IMPORTED_MODULE_4__["default"], null), subitems.map(function (subitem, index) {
    var _subitems, _subitem$id, _placeholderData$next;
    var nextSubitemId = (_subitems = subitems[index + 1]) === null || _subitems === void 0 ? void 0 : _subitems.id;
    var isNextSubitemSource = isItemSource(nextSubitemId);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: (_subitem$id = subitem.id) !== null && _subitem$id !== void 0 ? _subitem$id : "def-".concat(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_item_list_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      parents: parents,
      item: subitem,
      index: index,
      itemDepth: childrenDepth,
      isRoot: childrenDepth === 0,
      rootSelectionDisabled: rootSelectionDisabled,
      selectionDisabled: selectionDisabled,
      itemRef: itemRef,
      isLastItem: index === subitems.length - 1,
      setParentIndentHeight: setParentIndentHeight,
      showPlaceholder: !isNextSubitemSource && placeholderIndex === index + 1,
      showHighlight: (placeholderData === null || placeholderData === void 0 || (_placeholderData$next = placeholderData.nextParent) === null || _placeholderData$next === void 0 ? void 0 : _placeholderData$next.id) === subitem.id && (placeholderData === null || placeholderData === void 0 ? void 0 : placeholderData.nextIndex) === -1,
      rootElementDisabled: rootElementDisabled
    }));
  }));
};
List.propTypes = {
  isExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  parents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  itemRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  setParentIndentHeight: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  rootSelectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rootElementDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
List.defaultProps = {
  depth: 0,
  parents: [],
  subitems: [],
  itemRef: null,
  setParentIndentHeight: function setParentIndentHeight() {},
  rootSelectionDisabled: false,
  selectionDisabled: false,
  rootElementDisabled: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/load-more/load.more.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/load-more/load.more.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../indentation-horizontal/indentation.horizontal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");






var LoadMore = function LoadMore(_ref) {
  var isExpanded = _ref.isExpanded,
    isLoading = _ref.isLoading,
    subitems = _ref.subitems,
    loadMore = _ref.loadMore,
    totalSubitemsCount = _ref.totalSubitemsCount,
    itemDepth = _ref.itemDepth;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getTranslator)();
  var subitemsLimit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_4__.SubitemsLimitContext);
  var subitemsLimitReached = subitems.length >= subitemsLimit;
  var allSubitemsLoaded = subitems.length === totalSubitemsCount;
  if (!isExpanded || subitemsLimitReached || allSubitemsLoaded || !subitems.length) {
    return null;
  }
  var seeMoreLabel = Translator.trans(/*@Desc("See more")*/'see_more', {}, 'ibexa_tree_builder_ui');
  var loadingMoreLabel = Translator.trans(/*@Desc("Loading more...")*/'loading_more', {}, 'ibexa_tree_builder_ui');
  var btnLabel = isLoading ? loadingMoreLabel : seeMoreLabel;
  var loadingSpinner = null;
  if (isLoading) {
    loadingSpinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__.SIZES.SMALL
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-item-single__element c-tb-list-item-single__element--load-more"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    itemDepth: itemDepth
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "c-tb-list-item-single__load-more",
    onClick: loadMore
  }, loadingSpinner, " ", btnLabel));
};
LoadMore.propTypes = {
  isExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  loadMore: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  totalSubitemsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  itemDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
LoadMore.defaultProps = {
  itemDepth: 0,
  subitems: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadMore);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/loader/loader.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/loader/loader.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var Loader = function Loader() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_2__.WidthContainerContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    containerWidth = _useContext2[0].containerWidth;
  var isCollapsed = (0,_width_container_width_container__WEBPACK_IMPORTED_MODULE_2__.checkIsTreeCollapsed)(containerWidth);
  if (isCollapsed) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandContext: () => (/* binding */ ExpandContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLocalStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var ExpandContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var EXPAND_DATA_STORAGE_ID = 'expanded-nodes';
var LocalStorageExpandConnector = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    initiallyExpandedItems = _ref.initiallyExpandedItems,
    isLocalStorageActive = _ref.isLocalStorageActive;
  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(EXPAND_DATA_STORAGE_ID),
    getLocalStorageData = _useLocalStorage.getLocalStorageData,
    saveLocalStorageData = _useLocalStorage.saveLocalStorageData;
  var getInitialValues = function getInitialValues() {
    if (initiallyExpandedItems) {
      return initiallyExpandedItems;
    }
    return isLocalStorageActive && getLocalStorageData() || [];
  };
  var initialValues = getInitialValues();
  var _useStoredItemsReduce = (0,_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_2__["default"])(initialValues),
    _useStoredItemsReduce2 = _slicedToArray(_useStoredItemsReduce, 2),
    expandedData = _useStoredItemsReduce2[0],
    dispatchExpandedData = _useStoredItemsReduce2[1];
  var expandDataContextValues = {
    expandedData: expandedData,
    dispatchExpandedData: dispatchExpandedData
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      expandItems: function expandItems(items) {
        dispatchExpandedData({
          items: items,
          type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_2__.STORED_ITEMS_ADD
        });
      }
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLocalStorageActive) {
      saveLocalStorageData(expandedData, false);
    }
  }, [expandedData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExpandContext.Provider, {
    value: expandDataContextValues
  }, children);
});
LocalStorageExpandConnector.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  initiallyExpandedItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isLocalStorageActive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
LocalStorageExpandConnector.defaultProps = {
  initiallyExpandedItems: null
};
LocalStorageExpandConnector.displayName = 'LocalStorageExpandConnector';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorageExpandConnector);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js");





var ModalDelete = function ModalDelete(_ref) {
  var visible = _ref.visible,
    confirmationTitle = _ref.confirmationTitle,
    confirmationBody = _ref.confirmationBody,
    onConfirm = _ref.onConfirm,
    onClose = _ref.onClose,
    confirmBtnLabel = _ref.confirmBtnLabel,
    closeBtnLabel = _ref.closeBtnLabel,
    size = _ref.size,
    confirmBtnAttrs = _ref.confirmBtnAttrs;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getRootDOMElement)();
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
  var modalContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var actionBtnsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var defaultConfirmBtnAttrs = {
      label: confirmBtnLabel !== null && confirmBtnLabel !== void 0 ? confirmBtnLabel : Translator.trans(/*@Desc("Confirm")*/'modal.delete.confirm', {}, 'ibexa_tree_builder_ui'),
      onClick: onConfirm,
      className: 'ibexa-btn--primary ibexa-btn--trigger'
    };
    var closeBtnAttrs = {
      label: closeBtnLabel !== null && closeBtnLabel !== void 0 ? closeBtnLabel : Translator.trans(/*@Desc("Cancel")*/'modal.delete.cancel', {}, 'ibexa_tree_builder_ui'),
      'data-bs-dismiss': 'modal',
      className: 'ibexa-btn--secondary'
    };
    return [confirmBtnAttrs !== null && confirmBtnAttrs !== void 0 ? confirmBtnAttrs : defaultConfirmBtnAttrs, closeBtnAttrs];
  }, [onConfirm, onClose, confirmBtnAttrs]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!modalContainer.current) {
      modalContainer.current = document.createElement('div');
      modalContainer.current.classList.add('c-tb-modal-delete-container');
      rootDOMElement.appendChild(modalContainer.current);
    }
    return function () {
      if (modalContainer.current) {
        modalContainer.current.remove();
      }
    };
  }, []);
  if (!modalContainer.current) {
    return null;
  }
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClose: onClose,
    isVisible: visible,
    size: size,
    actionBtnsConfig: actionBtnsConfig,
    noHeader: !confirmationTitle,
    title: confirmationTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, confirmationBody)), modalContainer.current);
};
ModalDelete.propTypes = {
  confirmationTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  confirmationBody: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  confirmBtnLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  closeBtnLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  visible: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  confirmBtnAttrs: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
ModalDelete.defaultProps = {
  visible: false,
  confirmBtnAttrs: null,
  size: 'medium',
  confirmationTitle: null,
  confirmBtnLabel: null,
  closeBtnLabel: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalDelete);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-destination/placeholder.destination.js":
/*!********************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-destination/placeholder.destination.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");



var PlaceholderDestination = function PlaceholderDestination() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_1__.DraggableContext),
    stopDragging = _useContext.stopDragging;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_2__.IntermediateActionContext),
    intermediateAction = _useContext2.intermediateAction;
  var stopDraggingItem = function stopDraggingItem(event) {
    return stopDragging(event);
  };
  var stopIntermediateAction = function stopIntermediateAction(event) {
    if (intermediateAction.isActive) {
      event.preventDefault();
      if (intermediateAction.callback) {
        intermediateAction.callback();
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-item-single c-tb-list-placeholder-destination",
    onDragEnd: function onDragEnd(event) {
      return stopDragging(event);
    },
    onClick: stopIntermediateAction,
    onMouseUp: stopDraggingItem
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderDestination);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js":
/*!**************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DRAG_ID: () => (/* binding */ DRAG_ID),
/* harmony export */   PlaceholderContext: () => (/* binding */ PlaceholderContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var PlaceholderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DRAG_ID = 'DRAG';
var SIBLING_POSITION_PREV = 'prev';
var SIBLING_POSITION_NEXT = 'next';
var PlaceholderProvider = function PlaceholderProvider(_ref) {
  var children = _ref.children;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.BuildItemContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    activeItemsData = _useState2[0],
    setActiveItemsData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    placeholderData = _useState4[0],
    setPlaceholderData = _useState4[1];
  var placeholderDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var getInsertIndexAndParent = function getInsertIndexAndParent(_ref2) {
    var event = _ref2.event,
      index = _ref2.index,
      isExpanded = _ref2.isExpanded,
      parent = _ref2.parent,
      item = _ref2.item;
    var currentTarget = event.currentTarget,
      clientY = event.clientY;
    var _currentTarget$getBou = currentTarget.getBoundingClientRect(),
      top = _currentTarget$getBou.top,
      height = _currentTarget$getBou.height;
    var relativeMousePosition = clientY - top;
    var output = {};
    if (parent !== null && parent !== void 0 && parent.isContainer) {
      if (item.isContainer) {
        if (relativeMousePosition < height / 4) {
          output = {
            nextIndex: index,
            nextParent: parent,
            sibling: item,
            siblingPosition: SIBLING_POSITION_PREV
          };
        } else if (relativeMousePosition < height - height / 4) {
          if (isExpanded) {
            output = {
              nextIndex: 0,
              nextParent: item,
              sibling: buildItem(item.subitems[0]),
              siblingPosition: SIBLING_POSITION_PREV
            };
          } else {
            output = {
              nextIndex: -1,
              nextParent: item
            };
          }
        } else {
          if (isExpanded) {
            output = {
              nextIndex: 0,
              nextParent: item,
              sibling: buildItem(item.subitems[0]),
              siblingPosition: SIBLING_POSITION_PREV
            };
          } else {
            output = {
              nextIndex: index + 1,
              nextParent: parent,
              sibling: item,
              siblingPosition: SIBLING_POSITION_NEXT
            };
          }
        }
      } else {
        if (relativeMousePosition < height / 2) {
          output = {
            nextIndex: index,
            nextParent: parent,
            sibling: item,
            siblingPosition: SIBLING_POSITION_PREV
          };
        } else {
          output = {
            nextIndex: index + 1,
            nextParent: parent,
            sibling: item,
            siblingPosition: SIBLING_POSITION_NEXT
          };
        }
      }
    } else {
      if (item.isContainer) {
        if (isExpanded) {
          output = {
            nextIndex: 0,
            nextParent: item,
            sibling: buildItem(item.subitems[0]),
            siblingPosition: SIBLING_POSITION_PREV
          };
        } else {
          output = {
            nextIndex: -1,
            nextParent: item
          };
        }
      }
    }
    return output;
  };
  var mouseMove = function mouseMove(event, _ref3) {
    var item = _ref3.item,
      parent = _ref3.parent,
      index = _ref3.index,
      isExpanded = _ref3.isExpanded;
    var isMouseOverActiveItem = activeItemsData.some(function (activeItem) {
      return activeItem.id === item.id;
    });
    if (isMouseOverActiveItem || activeItemsData.length === 0) {
      return;
    }
    var nextState = getInsertIndexAndParent({
      event: event,
      index: index,
      item: item,
      parent: parent,
      isExpanded: isExpanded
    });
    setPlaceholderData(nextState);
    placeholderDataRef.current = nextState;
  };
  var clearPlaceholder = function clearPlaceholder() {
    placeholderDataRef.current = null;
    setActiveItemsData([]);
    setPlaceholderData({});
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PlaceholderContext.Provider, {
    value: {
      setActiveItemsData: setActiveItemsData,
      mouseMove: mouseMove,
      placeholderData: placeholderData,
      setPlaceholderData: setPlaceholderData,
      placeholderDataRef: placeholderDataRef,
      clearPlaceholder: clearPlaceholder
    }
  }, children);
};
PlaceholderProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderProvider);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-source/placeholder.source.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-source/placeholder.source.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");


var PlaceholderSource = function PlaceholderSource() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_1__.DraggableContext),
    clearDragAction = _useContext.clearDragAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onMouseUp: clearDragAction,
    className: "c-tb-list-item-single c-tb-list-placeholder-source"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderSource);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/portal/portal.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/portal/portal.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var Portal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    getPosition = _ref.getPosition,
    extraClasses = _ref.extraClasses;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getRootDOMElement)();
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-tb-portal c-tb-element': true
  }, extraClasses, extraClasses !== ''));
  var portalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var prevPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: null,
    y: null
  });
  var setPortalPosition = function setPortalPosition(portalPosition) {
    var _ref2 = portalPosition !== null && portalPosition !== void 0 ? portalPosition : getPosition(),
      x = _ref2.x,
      y = _ref2.y;
    if (x !== prevPosition.current.x || y !== prevPosition.current.y) {
      prevPosition.current = {
        x: x,
        y: y
      };
      portalRef.current.style.left = "".concat(x, "px");
      portalRef.current.style.top = "".concat(y, "px");
    }
  };
  if (!portalRef.current) {
    portalRef.current = document.createElement('div');
    rootDOMElement.insertAdjacentElement('beforeend', portalRef.current);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      setPortalPosition: setPortalPosition
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      portalRef.current.remove();
      portalRef.current = null;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _portalRef$current$cl;
    portalRef.current.className = '';
    (_portalRef$current$cl = portalRef.current.classList).add.apply(_portalRef$current$cl, _toConsumableArray(className.split(' ')));
  }, [extraClasses]);
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portalRef.current);
});
Portal.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired,
  getPosition: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
Portal.defaultProps = {
  extraClasses: '',
  getPosition: function getPosition() {
    return {};
  }
};
Portal.displayName = 'Portal';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/search/search.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/search/search.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var _window = window,
  Translator = _window.Translator;
var Search = function Search(_ref) {
  var _widthContainer$resiz;
  var onSearchInputChange = _ref.onSearchInputChange,
    initialValue = _ref.initialValue;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_3__.WidthContainerContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    widthContainer = _useContext2[0];
  var containerWidth = (_widthContainer$resiz = widthContainer.resizedContainerWidth) !== null && _widthContainer$resiz !== void 0 ? _widthContainer$resiz : widthContainer.containerWidth;
  var placeholder = Translator.trans(/*@Desc("Search...")*/'search.placeholder', {}, 'ibexa_tree_builder_ui');
  var clearSearch = function clearSearch() {
    setInputValue('');
  };
  var isCollapsed = (0,_width_container_width_container__WEBPACK_IMPORTED_MODULE_3__.checkIsTreeCollapsed)(containerWidth);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onSearchInputChange(inputValue);
  }, [inputValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-search"
  }, !isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-input-text-wrapper ibexa-input-text-wrapper--search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-input-text-wrapper__input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control ibexa-input ibexa-input--text ibexa-input--small",
    autoComplete: "on",
    tabIndex: "1",
    placeholder: placeholder,
    onChange: function onChange(event) {
      return setInputValue(event.target.value);
    },
    value: inputValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-input-text-wrapper__actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--no-text ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--clear",
    tabIndex: "-1",
    onClick: clearSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--tiny"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--no-text ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--search",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "search",
    extraClasses: "ibexa-icon ibexa-icon--small"
  }))))));
};
Search.propTypes = {
  onSearchInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  initialValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Search.defaultProps = {
  initialValue: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectedContext: () => (/* binding */ SelectedContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var SelectedContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var generateObjectHash = function generateObjectHash(obj) {
  var str = JSON.stringify(obj);
  var hash = 0;
  for (var i = 0, len = str.length; i < len; i++) {
    var chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};
var SelectedProvider = function SelectedProvider(_ref) {
  var children = _ref.children,
    initiallySelectedItemsIds = _ref.initiallySelectedItemsIds;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
  var prevSelectedDataHashRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(generateObjectHash([]));
  var prevInitialItemsIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  var moduleId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ModuleIdContext);
  var _useStoredItemsReduce = (0,_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    _useStoredItemsReduce2 = _slicedToArray(_useStoredItemsReduce, 2),
    selectedData = _useStoredItemsReduce2[0],
    dispatchSelectedData = _useStoredItemsReduce2[1];
  var selectedDataContextValues = {
    selectedData: selectedData,
    dispatchSelectedData: dispatchSelectedData
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var initialIds = initiallySelectedItemsIds.join(',');
    if (prevInitialItemsIds.current !== initialIds) {
      prevInitialItemsIds.current = initialIds;
      var initialValues = initiallySelectedItemsIds.map(function (id) {
        return {
          id: id
        };
      });
      dispatchSelectedData({
        items: initialValues,
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_4__.STORED_ITEMS_ADD
      });
    }
  }, [initiallySelectedItemsIds]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var currentSelectedDataHash = generateObjectHash(selectedData);
    var areSetsEqual = prevSelectedDataHashRef.current === currentSelectedDataHash;
    if (!areSetsEqual) {
      rootDOMElement.dispatchEvent(new CustomEvent('ibexa-tb-update-selected', {
        detail: {
          id: moduleId,
          items: selectedData
        }
      }));
      prevSelectedDataHashRef.current = currentSelectedDataHash;
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedContext.Provider, {
    value: selectedDataContextValues
  }, children);
};
SelectedProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  initiallySelectedItemsIds: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
SelectedProvider.defaultProps = {
  initiallySelectedItemsIds: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedProvider);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/toggler/toggler.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/toggler/toggler.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var Toggler = function Toggler(_ref) {
  var onClick = _ref.onClick,
    totalSubitemsCount = _ref.totalSubitemsCount;
  var togglerAttrs = {
    className: 'c-tb-toggler',
    tabIndex: -1
  };
  if (totalSubitemsCount > 0) {
    togglerAttrs.onClick = onClick;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", togglerAttrs);
};
Toggler.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  totalSubitemsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggler);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeFullWidthContext: () => (/* binding */ TreeFullWidthContext),
/* harmony export */   WidthContainerContext: () => (/* binding */ WidthContainerContext),
/* harmony export */   checkIsTreeCollapsed: () => (/* binding */ checkIsTreeCollapsed),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hasHorizontalScroll: () => (/* binding */ hasHorizontalScroll),
/* harmony export */   isContainerNarrow: () => (/* binding */ isContainerNarrow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_cookies_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/cookies.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/cookies.helper.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useLocalStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var CLASS_IS_TREE_RESIZING = 'ibexa-is-tree-resizing';
var CONTAINER_CONFIG_ID = 'width-container-state';
var MIN_CONTAINER_WIDTH = 200;
var NARROW_CONTAINER_WIDTH = MIN_CONTAINER_WIDTH + 24;
var FULL_WIDTH_PADDING = 5;
var DEFAULT_CONTAINER_WIDTH = 350;
var MAX_WIDTH_FOR_SCROLL = 308;
var WidthContainerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TreeFullWidthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var checkIsTreeCollapsed = function checkIsTreeCollapsed(width) {
  return width <= MIN_CONTAINER_WIDTH;
};
var isContainerNarrow = function isContainerNarrow(width) {
  return width <= NARROW_CONTAINER_WIDTH;
};
var hasHorizontalScroll = function hasHorizontalScroll(width) {
  return width <= MAX_WIDTH_FOR_SCROLL;
};
var WidthContainer = function WidthContainer(_ref) {
  var children = _ref.children,
    moduleId = _ref.moduleId,
    userId = _ref.userId,
    scrollWrapperRef = _ref.scrollWrapperRef,
    isLoaded = _ref.isLoaded,
    useTheme = _ref.useTheme;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var resizeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ResizableContext),
    isResizable = _useContext.isResizable;
  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__["default"])(CONTAINER_CONFIG_ID, 'common'),
    getLocalStorageData = _useLocalStorage.getLocalStorageData,
    saveLocalStorageData = _useLocalStorage.saveLocalStorageData;
  var saveWidth = function saveWidth(value) {
    var cookieName = "ibexa-tb_".concat(moduleId, "_").concat(userId, "_container-width");
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_cookies_helper__WEBPACK_IMPORTED_MODULE_4__.setCookie)(cookieName, value);
  };
  var saveConfig = function saveConfig(id, value) {
    var _getLocalStorageData;
    var data = (_getLocalStorageData = getLocalStorageData()) !== null && _getLocalStorageData !== void 0 ? _getLocalStorageData : {};
    data[id] = value;
    saveLocalStorageData(data);
  };
  var getConfig = function getConfig(id) {
    var _getLocalStorageData2;
    var data = (_getLocalStorageData2 = getLocalStorageData()) !== null && _getLocalStorageData2 !== void 0 ? _getLocalStorageData2 : {};
    return data[id];
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      containerWidth: getConfig('width') || DEFAULT_CONTAINER_WIDTH,
      useTheme: useTheme
    }),
    _useState2 = _slicedToArray(_useState, 2),
    containerData = _useState2[0],
    setContainerData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    treeFullWidth = _useState4[0],
    setTreeFullWidth = _useState4[1];
  var isResizing = containerData.isResizing,
    containerWidth = containerData.containerWidth,
    resizedContainerWidth = containerData.resizedContainerWidth;
  var width = isResizing ? resizedContainerWidth : containerWidth;
  var prevContainerWidthRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(width);
  var containerClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-width-container c-tb-element': true,
    'c-tb-element--use-theme': useTheme,
    'c-tb-width-container--narrow': isContainerNarrow(width),
    'c-tb-width-container--collapsed': checkIsTreeCollapsed(width),
    'c-tb-width-container--has-horizontal-scroll': hasHorizontalScroll(containerWidth)
  });
  var containerAttrs = {
    className: containerClassName,
    ref: containerRef
  };
  var clearDocumentResizingListeners = function clearDocumentResizingListeners() {
    rootDOMElement.removeEventListener('mousemove', changeContainerWidth);
    rootDOMElement.removeEventListener('mouseup', handleResizeEnd);
    rootDOMElement.classList.remove(CLASS_IS_TREE_RESIZING);
  };
  var handleResizeEnd = function handleResizeEnd() {
    clearDocumentResizingListeners();
    setContainerData(function (prevState) {
      if (prevContainerWidthRef.current !== prevState.resizedContainerWidth) {
        setTreeFullWidth(0);
      }
      prevContainerWidthRef.current = prevState.resizedContainerWidth;
      return {
        resizeStartPositionX: 0,
        containerWidth: prevState.resizedContainerWidth,
        isResizing: false
      };
    });
  };
  var changeContainerWidth = function changeContainerWidth(_ref2) {
    var clientX = _ref2.clientX;
    var currentPositionX = clientX;
    setContainerData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        resizedContainerWidth: prevState.containerWidth + (currentPositionX - prevState.resizeStartPositionX)
      });
    });
  };
  var addWidthChangeListener = function addWidthChangeListener(_ref3) {
    var nativeEvent = _ref3.nativeEvent;
    var resizeStartPositionX = nativeEvent.clientX;
    var currentContainerWidth = containerRef.current.getBoundingClientRect().width;
    rootDOMElement.addEventListener('mousemove', changeContainerWidth, false);
    rootDOMElement.addEventListener('mouseup', handleResizeEnd, false);
    rootDOMElement.classList.add(CLASS_IS_TREE_RESIZING);
    setContainerData({
      resizeStartPositionX: resizeStartPositionX,
      resizedContainerWidth: currentContainerWidth,
      containerWidth: currentContainerWidth,
      isResizing: true
    });
  };
  var saveTreeFullWidth = function saveTreeFullWidth(widthDiff) {
    setTreeFullWidth(function (prevState) {
      return Math.max(prevState, widthDiff);
    });
  };
  var expandTreeToFullWidth = function expandTreeToFullWidth() {
    if (treeFullWidth > 0) {
      setContainerData(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          containerWidth: prevState.containerWidth + treeFullWidth + FULL_WIDTH_PADDING
        });
      });
      setTreeFullWidth(0);
    }
  };
  var resizableWrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-width-container__resizable-wrapper': true,
    'c-tb-width-container__resizable-wrapper--active': isResizable
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    saveConfig('width', containerWidth);
    saveWidth(containerWidth);
    rootDOMElement.dispatchEvent(new CustomEvent('ibexa-content-resized', {
      detail: {
        id: moduleId
      }
    }));
  }, [containerWidth]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _scrollWrapperRef$cur;
    var scrollTimeout;
    var scrollListener = function scrollListener(event) {
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(function (scrollTop) {
        saveConfig('scrollTop', scrollTop);
      }, 50, event.currentTarget.scrollTop);
    };
    (_scrollWrapperRef$cur = scrollWrapperRef.current) === null || _scrollWrapperRef$cur === void 0 || _scrollWrapperRef$cur.addEventListener('scroll', scrollListener, false);
    return function () {
      var _scrollWrapperRef$cur2;
      clearDocumentResizingListeners();
      (_scrollWrapperRef$cur2 = scrollWrapperRef.current) === null || _scrollWrapperRef$cur2 === void 0 || _scrollWrapperRef$cur2.removeEventListener('scroll', scrollListener, false);
    };
  }, [scrollWrapperRef.current, isLoaded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    rootDOMElement.dispatchEvent(new CustomEvent('ibexa-tb-rendered', {
      detail: {
        id: moduleId
      }
    }));
  }, []);
  if (width && isResizable) {
    containerAttrs.style = {
      width: "".concat(width, "px")
    };
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WidthContainerContext.Provider, {
    value: [containerData, setContainerData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeFullWidthContext.Provider, {
    value: saveTreeFullWidth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", containerAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: resizableWrapperClassName,
    ref: resizeRef
  }, children), isResizable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-width-container__resize-handler",
    onMouseDown: addWidthChangeListener,
    onDoubleClick: expandTreeToFullWidth
  }))));
};
WidthContainer.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  moduleId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  isResizable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  scrollWrapperRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Element)
  }),
  isLoaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  useTheme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
WidthContainer.defaultProps = {
  isResizable: true,
  scrollWrapperRef: {
    current: null
  },
  isLoaded: false,
  useTheme: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidthContainer);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/array.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/array.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeDuplicates: () => (/* binding */ removeDuplicates)
/* harmony export */ });
var findFirstIndex = function findFirstIndex(items, originalItem) {
  return items.findIndex(function (item) {
    return item.id === originalItem.id;
  });
};
var removeDuplicates = function removeDuplicates(items) {
  var output = items.filter(function (item, index) {
    var firstIndex = findFirstIndex(items, item);
    return firstIndex === index;
  });
  return output;
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isItemDisabled: () => (/* binding */ isItemDisabled),
/* harmony export */   isItemEmpty: () => (/* binding */ isItemEmpty),
/* harmony export */   isItemStored: () => (/* binding */ isItemStored)
/* harmony export */ });
var isItemDisabled = function isItemDisabled(originalItem, _ref) {
  var parents = _ref.parents,
    selectedData = _ref.selectedData;
  var isDescendant = parents.some(function (parent) {
    return selectedData.some(function (item) {
      return item.id === parent.id;
    });
  });
  return isDescendant;
};
var isItemEmpty = function isItemEmpty(item) {
  return item === null || item === undefined || Object.keys(item).length === 0;
};
var isItemStored = function isItemStored(originalItem, items) {
  return items.some(function (item) {
    return item.id === originalItem.id;
  });
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SAVE_ITEM_EVENT: () => (/* binding */ SAVE_ITEM_EVENT),
/* harmony export */   getData: () => (/* binding */ getData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
var SAVE_ITEM_EVENT = 'ibexa-tree-builder:local-storage-save';
var LOCAL_STORAGE_ID = 'ibexa-tree-builder';
var getData = function getData(_ref) {
  var moduleId = _ref.moduleId,
    userId = _ref.userId,
    _ref$subId = _ref.subId,
    subId = _ref$subId === void 0 ? 'default' : _ref$subId,
    dataId = _ref.dataId;
  var dataStringified = localStorage.getItem(LOCAL_STORAGE_ID);
  var data = dataStringified ? JSON.parse(dataStringified) : {};
  if (!data[moduleId]) {
    data[moduleId] = {};
  }
  if (!data[moduleId][userId]) {
    data[moduleId][userId] = {};
  }
  if (!data[moduleId][userId][subId]) {
    data[moduleId][userId][subId] = {};
  }
  return data[moduleId][userId][subId][dataId];
};
var saveData = function saveData(_ref2) {
  var moduleId = _ref2.moduleId,
    userId = _ref2.userId,
    _ref2$subId = _ref2.subId,
    subId = _ref2$subId === void 0 ? 'default' : _ref2$subId,
    dataId = _ref2.dataId,
    dataToSave = _ref2.data;
  var shouldDispatchSaveEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dataStringified = localStorage.getItem(LOCAL_STORAGE_ID);
  var data = dataStringified ? JSON.parse(dataStringified) : {};
  if (!data[moduleId]) {
    data[moduleId] = {};
  }
  if (!data[moduleId][userId]) {
    data[moduleId][userId] = {};
  }
  if (!data[moduleId][userId][subId]) {
    data[moduleId][userId][subId] = {};
  }
  data[moduleId][userId][subId][dataId] = dataToSave;
  localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(data));
  if (shouldDispatchSaveEvent) {
    window.document.dispatchEvent(new CustomEvent(SAVE_ITEM_EVENT));
  }
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildGetMenuActionsList: () => (/* binding */ buildGetMenuActionsList),
/* harmony export */   getAllChildren: () => (/* binding */ getAllChildren),
/* harmony export */   getMenuActions: () => (/* binding */ _getMenuActions)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var EXCLUDED_ACTION_IDS = ['preview'];
var HIDE_REVEAL_ACTION_ID = 'hide';
var isActionExcluded = function isActionExcluded(_ref) {
  var action = _ref.action,
    item = _ref.item,
    previewExcludedItemPath = _ref.previewExcludedItemPath;
  var internalItem = item.internalItem;
  if (action.id === HIDE_REVEAL_ACTION_ID && item.internalItem && item.internalItem.isInvisible && !item.internalItem.isHidden) {
    return true;
  }
  if (!internalItem || !EXCLUDED_ACTION_IDS.includes(action.id)) {
    return false;
  }
  return previewExcludedItemPath.length && previewExcludedItemPath.some(function (excludedPath) {
    return internalItem.pathString.startsWith(excludedPath);
  });
};
var _getMenuActions = function getMenuActions(_ref2) {
  var _getAdminUiConfig$sit, _getAdminUiConfig$sit2;
  var actions = _ref2.actions,
    item = _ref2.item,
    _ref2$activeActionsId = _ref2.activeActionsIds,
    activeActionsIds = _ref2$activeActionsId === void 0 ? [] : _ref2$activeActionsId,
    _ref2$previewExcluded = _ref2.previewExcludedItemPath,
    previewExcludedItemPath = _ref2$previewExcluded === void 0 ? (_getAdminUiConfig$sit = (_getAdminUiConfig$sit2 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().siteContext) === null || _getAdminUiConfig$sit2 === void 0 ? void 0 : _getAdminUiConfig$sit2.excludedPaths) !== null && _getAdminUiConfig$sit !== void 0 ? _getAdminUiConfig$sit : [] : _ref2$previewExcluded;
  var filteredActions = item ? actions.filter(function (action) {
    return !isActionExcluded({
      action: action,
      item: item,
      previewExcludedItemPath: previewExcludedItemPath
    });
  }) : actions;
  return filteredActions.map(function (action) {
    var nextAction = _objectSpread({}, action);
    if (nextAction.component && activeActionsIds.length && !activeActionsIds.includes(nextAction.id)) {
      nextAction.forcedProps = {
        isDisabled: true
      };
    }
    if (nextAction.subitems) {
      nextAction.subitems = _getMenuActions({
        actions: nextAction.subitems,
        item: item,
        activeActionsIds: activeActionsIds
      });
    }
    return nextAction;
  });
};

var getAllChildren = function getAllChildren(_ref3) {
  var data = _ref3.data,
    buildItem = _ref3.buildItem,
    condition = _ref3.condition;
  var output = [];
  var _getAllChildrenHelper = function getAllChildrenHelper() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    items.forEach(function (originalItem) {
      var item = buildItem ? buildItem(originalItem) : originalItem;
      if (condition === undefined || condition(item)) {
        output.push(item);
      }
      _getAllChildrenHelper(item.subitems);
    });
  };
  _getAllChildrenHelper([data]);
  return output;
};
var buildGetMenuActionsList = function buildGetMenuActionsList(treeBuilderConfig, builtinGetMenuActions) {
  var _treeBuilderConfig$ge;
  var unorderedGetMenuActionsList = [{
    priority: 100,
    callback: builtinGetMenuActions
  }].concat(_toConsumableArray((_treeBuilderConfig$ge = treeBuilderConfig === null || treeBuilderConfig === void 0 ? void 0 : treeBuilderConfig.getMenuActions) !== null && _treeBuilderConfig$ge !== void 0 ? _treeBuilderConfig$ge : []));
  var orderedGetMenuActionsList = unorderedGetMenuActionsList.toSorted(function (_ref4, _ref5) {
    var priorityA = _ref4.priority;
    var priorityB = _ref5.priority;
    return priorityA - priorityB;
  });
  return function (menuActionArg) {
    var output = menuActionArg;
    orderedGetMenuActionsList.forEach(function (_ref6) {
      var callback = _ref6.callback;
      output = callback(output);
    });
    return output;
  };
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useBuildItem.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useBuildItem.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_1__.BuildItemContext);
  return buildItem.apply(void 0, arguments);
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DELAYED_CHILDREN_SELECT_ADD: () => (/* binding */ DELAYED_CHILDREN_SELECT_ADD),
/* harmony export */   DELAYED_CHILDREN_SELECT_REMOVE: () => (/* binding */ DELAYED_CHILDREN_SELECT_REMOVE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var initialState = [];
var DELAYED_CHILDREN_SELECT_ADD = 'DELAYED_CHILDREN_SELECT_ADD';
var DELAYED_CHILDREN_SELECT_REMOVE = 'DELAYED_CHILDREN_SELECT_REMOVE';
var delayedChildrenSelectReducer = function delayedChildrenSelectReducer(state, action) {
  switch (action.type) {
    case DELAYED_CHILDREN_SELECT_ADD:
      {
        var nextState = _toConsumableArray(state);
        var parentId = action.parentId;
        if (!nextState.includes(parentId)) {
          nextState.push(parentId);
        }
        return nextState;
      }
    case DELAYED_CHILDREN_SELECT_REMOVE:
      {
        var _nextState = _toConsumableArray(state);
        var parentIdIndex = _nextState.findIndex(function (parentId) {
          return parentId === action.parentId;
        });
        if (parentIdIndex < 0) {
          return _nextState;
        }
        _nextState.splice(parentIdIndex, 1);
        return _nextState;
      }
    default:
      throw new Error('useDelayedChildrenSelectReducer: no such action');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(delayedChildrenSelectReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    delayedChildrenSelectParentsIds = _useReducer2[0],
    dispatchDelayedChildrenSelectAction = _useReducer2[1];
  return [delayedChildrenSelectParentsIds, dispatchDelayedChildrenSelectAction];
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDidUpdateEffect.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDidUpdateEffect.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (callback, dependencyList) {
  var firstRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!firstRender.current) {
      callback();
    } else {
      firstRender.current = false;
    }
  }, dependencyList);
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/localStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (dataId, subIdOverride) {
  var moduleId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.ModuleIdContext);
  var userId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.UserIdContext);
  var subIdFromContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.SubIdContext);
  var subId = subIdOverride !== null && subIdOverride !== void 0 ? subIdOverride : subIdFromContext;
  var getLocalStorageData = function getLocalStorageData() {
    return (0,_helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__.getData)({
      moduleId: moduleId,
      userId: userId,
      subId: subId,
      dataId: dataId
    });
  };
  var saveLocalStorageData = function saveLocalStorageData(data) {
    var shouldDispatchSaveEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0,_helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveData)({
      moduleId: moduleId,
      userId: userId,
      subId: subId,
      dataId: dataId,
      data: data
    }, shouldDispatchSaveEvent);
  };
  return {
    getLocalStorageData: getLocalStorageData,
    saveLocalStorageData: saveLocalStorageData
  };
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORED_ITEMS_ADD: () => (/* binding */ STORED_ITEMS_ADD),
/* harmony export */   STORED_ITEMS_CLEAR: () => (/* binding */ STORED_ITEMS_CLEAR),
/* harmony export */   STORED_ITEMS_REMOVE: () => (/* binding */ STORED_ITEMS_REMOVE),
/* harmony export */   STORED_ITEMS_REPLACE: () => (/* binding */ STORED_ITEMS_REPLACE),
/* harmony export */   STORED_ITEMS_SET: () => (/* binding */ STORED_ITEMS_SET),
/* harmony export */   STORED_ITEMS_TOGGLE: () => (/* binding */ STORED_ITEMS_TOGGLE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _helpers_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/array */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/array.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var initialState = [];
var STORED_ITEMS_SET = 'STORED_ITEMS_SET';
var STORED_ITEMS_ADD = 'STORED_ITEMS_ADD';
var STORED_ITEMS_REMOVE = 'STORED_ITEMS_REMOVE';
var STORED_ITEMS_TOGGLE = 'STORED_ITEMS_TOGGLE';
var STORED_ITEMS_REPLACE = 'STORED_ITEMS_REPLACE';
var STORED_ITEMS_CLEAR = 'STORED_ITEMS_CLEAR';
var storedItemsReducer = function storedItemsReducer(state, action) {
  switch (action.type) {
    case STORED_ITEMS_SET:
      {
        var items = action.items;
        var nextState = (0,_helpers_array__WEBPACK_IMPORTED_MODULE_2__.removeDuplicates)(items);
        return nextState;
      }
    case STORED_ITEMS_ADD:
      {
        var _items = action.items;
        var itemsToAdd = _items.filter(function (item) {
          return !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_1__.isItemStored)(item, state);
        });
        var _nextState = [].concat(_toConsumableArray(state), _toConsumableArray(itemsToAdd));
        return _nextState;
      }
    case STORED_ITEMS_REMOVE:
      {
        var _items2 = action.items;
        var _nextState2 = state.filter(function (item) {
          return !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_1__.isItemStored)(item, _items2);
        });
        return _nextState2;
      }
    case STORED_ITEMS_REPLACE:
      {
        var _items3 = action.items;
        var _nextState3 = _toConsumableArray(state);
        var isModified = false;
        _items3.forEach(function (item) {
          var stateItemIndex = _nextState3.findIndex(function (stateItem) {
            return stateItem.id === item.id;
          });
          if (stateItemIndex >= 0) {
            _nextState3[stateItemIndex] = item;
            isModified = true;
          }
        });
        return isModified ? _nextState3 : state;
      }
    case STORED_ITEMS_TOGGLE:
      {
        var _items4 = action.items;
        var oldItems = state.filter(function (item) {
          return !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_1__.isItemStored)(item, _items4);
        });
        var newItems = _items4.filter(function (item) {
          return !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_1__.isItemStored)(item, state);
        });
        var _nextState4 = [].concat(_toConsumableArray(oldItems), _toConsumableArray(newItems));
        return _nextState4;
      }
    case STORED_ITEMS_CLEAR:
      {
        return [];
      }
    default:
      throw new Error();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(storedItemsReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    storedItems = _useReducer2[0],
    dispatchStoredItemsAction = _useReducer2[1];
  return [storedItems, dispatchStoredItemsAction];
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_PARENT: () => (/* binding */ ACTION_PARENT),
/* harmony export */   ACTION_TYPE: () => (/* binding */ ACTION_TYPE),
/* harmony export */   ActiveContext: () => (/* binding */ ActiveContext),
/* harmony export */   BuildItemContext: () => (/* binding */ BuildItemContext),
/* harmony export */   CallbackContext: () => (/* binding */ CallbackContext),
/* harmony export */   DelayedChildrenSelectContext: () => (/* binding */ DelayedChildrenSelectContext),
/* harmony export */   DisabledItemContext: () => (/* binding */ DisabledItemContext),
/* harmony export */   DisabledItemInputContext: () => (/* binding */ DisabledItemInputContext),
/* harmony export */   DraggableDisabledContext: () => (/* binding */ DraggableDisabledContext),
/* harmony export */   LoadMoreSubitemsContext: () => (/* binding */ LoadMoreSubitemsContext),
/* harmony export */   MenuActionsContext: () => (/* binding */ MenuActionsContext),
/* harmony export */   ModuleIdContext: () => (/* binding */ ModuleIdContext),
/* harmony export */   QUICK_ACTION_MODES: () => (/* binding */ QUICK_ACTION_MODES),
/* harmony export */   QuickActionsContext: () => (/* binding */ QuickActionsContext),
/* harmony export */   ResizableContext: () => (/* binding */ ResizableContext),
/* harmony export */   ScrollWrapperContext: () => (/* binding */ ScrollWrapperContext),
/* harmony export */   SelectedLimitContext: () => (/* binding */ SelectedLimitContext),
/* harmony export */   SubIdContext: () => (/* binding */ SubIdContext),
/* harmony export */   SubitemsLimitContext: () => (/* binding */ SubitemsLimitContext),
/* harmony export */   TreeContext: () => (/* binding */ TreeContext),
/* harmony export */   TreeDepthLimitContext: () => (/* binding */ TreeDepthLimitContext),
/* harmony export */   UserIdContext: () => (/* binding */ UserIdContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _components_width_container_width_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
/* harmony import */ var _components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/placeholder-provider/placeholder.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js");
/* harmony import */ var _components_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _components_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/header/header.js");
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search/search */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/search/search.js");
/* harmony import */ var _components_list_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/list/list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list/list.js");
/* harmony import */ var _components_loader_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/loader/loader */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/loader/loader.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hooks/useDelayedChildrenSelectReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

















var BuildItemContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MenuActionsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CallbackContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ResizableContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ActiveContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DraggableDisabledContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var LoadMoreSubitemsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SubitemsLimitContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedLimitContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TreeDepthLimitContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var UserIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ModuleIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TreeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DisabledItemContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DisabledItemInputContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SubIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ScrollWrapperContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DelayedChildrenSelectContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var QuickActionsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ACTION_TYPE = {
  LIST_MENU: 'LIST_MENU',
  CONTEXTUAL_MENU: 'CONTEXTUAL_MENU'
};
var ACTION_PARENT = {
  TOP_MENU: 'TOP_MENU',
  SINGLE_ITEM: 'SINGLE_ITEM'
};
var QUICK_ACTION_MODES = {
  CREATE: 'CREATE',
  EDIT: 'EDIT'
};
var _window = window,
  ibexa = _window.ibexa;
var TreeBuilderModule = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ibexa$treeBuilder, _ibexa$treeBuilder2;
  var actionsType = _ref.actionsType,
    actionsVisible = _ref.actionsVisible,
    callbackAddElement = _ref.callbackAddElement,
    callbackCopyElements = _ref.callbackCopyElements,
    callbackDeleteElements = _ref.callbackDeleteElements,
    callbackMoveElements = _ref.callbackMoveElements,
    callbackToggleExpanded = _ref.callbackToggleExpanded,
    callbackQuickEditElement = _ref.callbackQuickEditElement,
    callbackQuickCreateElement = _ref.callbackQuickCreateElement,
    children = _ref.children,
    dragDisabled = _ref.dragDisabled,
    getMenuActions = _ref.getMenuActions,
    headerVisible = _ref.headerVisible,
    searchVisible = _ref.searchVisible,
    isActive = _ref.isActive,
    checkIsDisabled = _ref.checkIsDisabled,
    checkIsInputDisabled = _ref.checkIsInputDisabled,
    isResizable = _ref.isResizable,
    loadMoreSubitems = _ref.loadMoreSubitems,
    moduleId = _ref.moduleId,
    moduleName = _ref.moduleName,
    selectedLimit = _ref.selectedLimit,
    subitemsLimit = _ref.subitemsLimit,
    tree = _ref.tree,
    treeDepthLimit = _ref.treeDepthLimit,
    userId = _ref.userId,
    initiallySelectedItemsIds = _ref.initiallySelectedItemsIds,
    initiallyExpandedItems = _ref.initiallyExpandedItems,
    buildItem = _ref.buildItem,
    subId = _ref.subId,
    renderHeaderContent = _ref.renderHeaderContent,
    renderHeaderActions = _ref.renderHeaderActions,
    renderHeaderToggleBtn = _ref.renderHeaderToggleBtn,
    isLocalStorageActive = _ref.isLocalStorageActive,
    onSearchInputChange = _ref.onSearchInputChange,
    initialSearchValue = _ref.initialSearchValue,
    extraClasses = _ref.extraClasses,
    isLoading = _ref.isLoading,
    rootSelectionDisabled = _ref.rootSelectionDisabled,
    selectionDisabled = _ref.selectionDisabled,
    extraBottomItems = _ref.extraBottomItems,
    rootElementDisabled = _ref.rootElementDisabled,
    useTheme = _ref.useTheme,
    moduleMenuActions = _ref.moduleMenuActions;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
  var treeNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var localStorageExpandConnectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    actionsHeight = _useState2[0],
    setActionsHeight = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    quickActionMode = _useState4[0],
    setQuickActionMode = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    quickActionItemId = _useState6[0],
    setQuickActionItemId = _useState6[1];
  var _useDelayedChildrenSe = (0,_hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_16__["default"])(),
    _useDelayedChildrenSe2 = _slicedToArray(_useDelayedChildrenSe, 2),
    delayedChildrenSelectParentsIds = _useDelayedChildrenSe2[0],
    dispatchDelayedChildrenSelectAction = _useDelayedChildrenSe2[1];
  var actionsCallbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    var _node$offsetHeight;
    var resizeObserver = new ResizeObserver(function (entries) {
      setActionsHeight(entries[0].target.offsetHeight);
    });
    if (!node) {
      return;
    }
    setActionsHeight((_node$offsetHeight = node.offsetHeight) !== null && _node$offsetHeight !== void 0 ? _node$offsetHeight : 0);
    resizeObserver.observe(node);
  }, []);
  var callbackContextData = {
    callbackAddElement: callbackAddElement,
    callbackCopyElements: callbackCopyElements,
    callbackDeleteElements: callbackDeleteElements,
    callbackMoveElements: callbackMoveElements,
    callbackToggleExpanded: callbackToggleExpanded,
    callbackQuickEditElement: callbackQuickEditElement,
    callbackQuickCreateElement: callbackQuickCreateElement
  };
  var menuActionsContextData = {
    actionsType: actionsType,
    actionsVisible: actionsVisible,
    getMenuActions: (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_15__.buildGetMenuActionsList)(ibexa === null || ibexa === void 0 || (_ibexa$treeBuilder = ibexa.treeBuilder) === null || _ibexa$treeBuilder === void 0 ? void 0 : _ibexa$treeBuilder[moduleId], getMenuActions),
    actions: moduleMenuActions || (ibexa === null || ibexa === void 0 || (_ibexa$treeBuilder2 = ibexa.treeBuilder) === null || _ibexa$treeBuilder2 === void 0 || (_ibexa$treeBuilder2 = _ibexa$treeBuilder2[moduleId]) === null || _ibexa$treeBuilder2 === void 0 ? void 0 : _ibexa$treeBuilder2.menuActions) || []
  };
  var treeClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-tb-tree': true,
    'c-tb-tree--draggable': !dragDisabled,
    'c-tb-tree--no-header': !headerVisible
  }, extraClasses, extraClasses !== ''));
  var renderHeader = function renderHeader() {
    if (!headerVisible) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: moduleName,
      renderContent: renderHeaderContent,
      renderActions: renderHeaderActions,
      renderToggleBtn: renderHeaderToggleBtn
    });
  };
  var renderSearch = function renderSearch() {
    if (!searchVisible) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_search_search__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onSearchInputChange: onSearchInputChange,
      initialValue: initialSearchValue
    });
  };
  var renderContent = function renderContent() {
    if (isLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_loader_loader__WEBPACK_IMPORTED_MODULE_13__["default"], null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: scrollWrapperRef,
      className: "c-tb-tree__scrollable-wrapper",
      style: {
        height: "calc(100% - ".concat(actionsHeight, "px)")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_list_list__WEBPACK_IMPORTED_MODULE_12__["default"], {
      rootSelectionDisabled: rootSelectionDisabled,
      rootElementDisabled: rootElementDisabled,
      selectionDisabled: selectionDisabled,
      isExpanded: true,
      subitems: !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_14__.isItemEmpty)(tree) ? [tree] : [],
      depth: rootElementDisabled ? -2 : -1
    }), extraBottomItems.map(function (extraItem) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_list_list__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: extraItem.id,
        selectionDisabled: true,
        isExpanded: true,
        subitems: [_objectSpread(_objectSpread({}, extraItem), {}, {
          subitems: [],
          total: 0
        })],
        depth: -1
      });
    }), children);
  };
  var triggerCreateAction = function triggerCreateAction(event) {
    var itemId = event.detail.itemId;
    setQuickActionMode(QUICK_ACTION_MODES.CREATE);
    setQuickActionItemId(itemId);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    rootDOMElement.addEventListener('ibexa-tb-trigger-quick-action-create', triggerCreateAction, false);
    return function () {
      rootDOMElement.removeEventListener('ibexa-tb-trigger-quick-action-create', triggerCreateAction, false);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      expandItems: function expandItems(items) {
        var _localStorageExpandCo;
        return (_localStorageExpandCo = localStorageExpandConnectorRef.current) === null || _localStorageExpandCo === void 0 ? void 0 : _localStorageExpandCo.expandItems(items);
      }
    };
  });

  /* eslint-disable max-len */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ModuleIdContext.Provider, {
    value: moduleId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserIdContext.Provider, {
    value: userId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubIdContext.Provider, {
    value: subId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResizableContext.Provider, {
    value: {
      isResizable: isResizable
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_width_container_width_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    moduleId: moduleId,
    userId: userId,
    scrollWrapperRef: scrollWrapperRef,
    isLoaded: !isLoading,
    useTheme: useTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BuildItemContext.Provider, {
    value: buildItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveContext.Provider, {
    value: isActive
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DraggableDisabledContext.Provider, {
    value: dragDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadMoreSubitemsContext.Provider, {
    value: loadMoreSubitems
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubitemsLimitContext.Provider, {
    value: subitemsLimit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedLimitContext.Provider, {
    value: selectedLimit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeDepthLimitContext.Provider, {
    value: treeDepthLimit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuActionsContext.Provider, {
    value: menuActionsContextData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CallbackContext.Provider, {
    value: callbackContextData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisabledItemContext.Provider, {
    value: checkIsDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisabledItemInputContext.Provider, {
    value: checkIsInputDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    initiallySelectedItemsIds: initiallySelectedItemsIds
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DelayedChildrenSelectContext.Provider, {
    value: {
      delayedChildrenSelectParentsIds: delayedChildrenSelectParentsIds,
      dispatchDelayedChildrenSelectAction: dispatchDelayedChildrenSelectAction
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    callbackMoveElements: callbackMoveElements,
    treeRef: treeNodeRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeContext.Provider, {
    value: tree
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScrollWrapperContext.Provider, {
    value: scrollWrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: localStorageExpandConnectorRef,
    initiallyExpandedItems: initiallyExpandedItems,
    isLocalStorageActive: isLocalStorageActive
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: treeClassName,
    ref: treeNodeRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-tree__actions",
    ref: actionsCallbackRef
  }, renderHeader(), renderSearch()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QuickActionsContext.Provider, {
    value: {
      quickActionMode: quickActionMode,
      quickActionItemId: quickActionItemId,
      setQuickActionMode: setQuickActionMode,
      setQuickActionItemId: setQuickActionItemId
    }
  }, renderContent()))))))))))))))))))))))))));
  /* eslint-enable max-len */
});
TreeBuilderModule.propTypes = {
  isActive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  moduleId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  loadMoreSubitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  moduleName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  callbackAddElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackCopyElements: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackDeleteElements: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackMoveElements: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackToggleExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackQuickEditElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackQuickCreateElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  actionsType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  actionsVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  buildItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  dragDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  getMenuActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  headerVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  searchVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  checkIsDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  checkIsInputDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isResizable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectedLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeDepthLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  tree: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    total: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    renderLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    dragItemDiasbled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    actionsDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }),
  initiallySelectedItemsIds: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  initiallyExpandedItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  subId: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  renderHeaderContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  renderHeaderActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  renderHeaderToggleBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isLocalStorageActive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onSearchInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  initialSearchValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rootSelectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  extraBottomItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  rootElementDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  useTheme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  moduleMenuActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
TreeBuilderModule.defaultProps = {
  actionsType: null,
  actionsVisible: true,
  children: null,
  buildItem: function buildItem(item) {
    return item;
  },
  callbackAddElement: function callbackAddElement() {},
  callbackCopyElements: function callbackCopyElements() {
    return Promise.resolve();
  },
  callbackDeleteElements: function callbackDeleteElements() {
    return Promise.resolve();
  },
  callbackMoveElements: function callbackMoveElements() {
    return Promise.resolve();
  },
  callbackQuickEditElement: function callbackQuickEditElement() {
    return Promise.resolve();
  },
  callbackQuickCreateElement: function callbackQuickCreateElement() {
    return Promise.resolve();
  },
  callbackToggleExpanded: function callbackToggleExpanded(item, _ref2) {
    var loadMore = _ref2.loadMore;
    return loadMore();
  },
  dragDisabled: false,
  getMenuActions: function getMenuActions(_ref3) {
    var actions = _ref3.actions,
      item = _ref3.item;
    return (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_15__.getMenuActions)({
      actions: actions,
      item: item
    });
  },
  headerVisible: true,
  searchVisible: false,
  checkIsDisabled: function checkIsDisabled() {
    return false;
  },
  checkIsInputDisabled: function checkIsInputDisabled() {
    return false;
  },
  isResizable: true,
  selectedLimit: null,
  subitemsLimit: null,
  treeDepthLimit: null,
  tree: null,
  initiallySelectedItemsIds: [],
  initiallyExpandedItems: null,
  subId: 'default',
  renderHeaderContent: null,
  renderHeaderActions: null,
  renderHeaderToggleBtn: null,
  isLocalStorageActive: true,
  onSearchInputChange: function onSearchInputChange() {},
  initialSearchValue: '',
  extraClasses: '',
  isLoading: false,
  rootSelectionDisabled: false,
  selectionDisabled: false,
  extraBottomItems: [],
  loadMoreSubitems: undefined,
  rootElementDisabled: false,
  moduleName: undefined,
  useTheme: false,
  moduleMenuActions: null
};
TreeBuilderModule.displayName = 'TreeBuilderModule';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeBuilderModule);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/about-info.31a3b8ee.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/about.d648fc1f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/approved.8dcddbcc.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/article.87d9802e.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/back.daf9f5e9.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/blog.1bbae791.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/blog_post.4509899b.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/caret-down.f72f2589.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/caret-up.c2ba7f03.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/checkmark.6bbaed08.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/circle-close.cf4e3719.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/content-tree.513377cf.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/create.948e3424.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/date.51e2752f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/discard.7ab1b667.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/download.40d98643.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/drag.9b430792.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/duplicate.4961d378.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/edit.4fa25121.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/expand-left.251d3a23.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fields.22fbf40a.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/file.f6e0bf0b.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/filters.59e95d7d.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/folder.977267fb.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/form.015bc963.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/gallery.7e496553.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/image.c05d71e7.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/landing_page.2e7e2424.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/notice.9e08cc1f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/options.15578e01.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/place.d190c3f6.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/product.aa6dd0a1.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/qa-form.9e25b46c.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/search.548ac5f3.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/spinner.ab67bf41.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/system-information.d0dbc17c.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/trash.d1555488.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/upload-image.09f70b0c.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/upload.2c5ac915.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/user.19743a46.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/user_group.82314755.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/video.c5fb6c8f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/view-grid.1b49c5a6.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/view-list.2752b827.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/view.6c174a86.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/warning.449e4631.svg";

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.view.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.visibility.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.update.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tooglecontentpreview.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/move.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/swap.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy_subtree.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/locations.tab.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js"), __webpack_exec__("./vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.load.map.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.hide.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.reveal.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.bookmark.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.main.translation.update.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.group.invitation.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/content.schedule.hide.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/content.schedule.hide.cancel.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/contentTree/contextual.actions.js"), __webpack_exec__("./vendor/ibexa/content-tree/src/bundle/Resources/public/js/add.translation.js"), __webpack_exec__("./vendor/ibexa/content-tree/src/bundle/Resources/public/js/create.content.js"), __webpack_exec__("./vendor/ibexa/content-tree/src/bundle/Resources/public/js/edit.content.js"), __webpack_exec__("./vendor/ibexa/content-tree/src/bundle/Resources/public/js/hide.reveal.content.js"));
/******/ }
]);