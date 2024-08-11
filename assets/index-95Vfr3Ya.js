function a2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Hu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ku = { exports: {} },
  Ii = {},
  Gu = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oo = Symbol.for("react.element"),
  s2 = Symbol.for("react.portal"),
  c2 = Symbol.for("react.fragment"),
  u2 = Symbol.for("react.strict_mode"),
  d2 = Symbol.for("react.profiler"),
  f2 = Symbol.for("react.provider"),
  p2 = Symbol.for("react.context"),
  m2 = Symbol.for("react.forward_ref"),
  h2 = Symbol.for("react.suspense"),
  v2 = Symbol.for("react.memo"),
  g2 = Symbol.for("react.lazy"),
  ac = Symbol.iterator;
function y2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ac && e[ac]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Zu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qu = Object.assign,
  Yu = {};
function ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yu),
    (this.updater = n || Zu);
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xu() {}
Xu.prototype = ir.prototype;
function Wa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yu),
    (this.updater = n || Zu);
}
var Ha = (Wa.prototype = new Xu());
Ha.constructor = Wa;
Qu(Ha, ir.prototype);
Ha.isPureReactComponent = !0;
var sc = Array.isArray,
  Ju = Object.prototype.hasOwnProperty,
  Ka = { current: null },
  qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function e1(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ju.call(t, r) && !qu.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: oo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Ka.current,
  };
}
function w2(e, t) {
  return {
    $$typeof: oo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ga(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oo;
}
function x2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cc = /\/+/g;
function rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? x2("" + e.key)
    : t.toString(36);
}
function Bo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case oo:
          case s2:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + rl(l, 0) : r),
      sc(o)
        ? ((n = ""),
          e != null && (n = e.replace(cc, "$&/") + "/"),
          Bo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ga(o) &&
            (o = w2(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(cc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), sc(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + rl(i, a);
      l += Bo(i, t, n, s, o);
    }
  else if (((s = y2(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + rl(i, a++)), (l += Bo(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function yo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Bo(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function $2(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null },
  Wo = { transition: null },
  C2 = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Wo,
    ReactCurrentOwner: Ka,
  };
V.Children = {
  map: yo,
  forEach: function (e, t, n) {
    yo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ga(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = ir;
V.Fragment = c2;
V.Profiler = d2;
V.PureComponent = Wa;
V.StrictMode = u2;
V.Suspense = h2;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C2;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Qu({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Ka.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Ju.call(t, s) &&
        !qu.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: oo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: p2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: f2, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = e1;
V.createFactory = function (e) {
  var t = e1.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: m2, render: e };
};
V.isValidElement = Ga;
V.lazy = function (e) {
  return { $$typeof: g2, _payload: { _status: -1, _result: e }, _init: $2 };
};
V.memo = function (e, t) {
  return { $$typeof: v2, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Wo.transition;
  Wo.transition = {};
  try {
    e();
  } finally {
    Wo.transition = t;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Se.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
V.useId = function () {
  return Se.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Se.current.useRef(e);
};
V.useState = function (e) {
  return Se.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Se.current.useTransition();
};
V.version = "18.2.0";
Gu.exports = V;
var c = Gu.exports;
const Be = Hu(c),
  E2 = a2({ __proto__: null, default: Be }, [c]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var S2 = c,
  k2 = Symbol.for("react.element"),
  b2 = Symbol.for("react.fragment"),
  _2 = Object.prototype.hasOwnProperty,
  N2 = S2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  M2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function t1(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) _2.call(t, r) && !M2.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: k2,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: N2.current,
  };
}
Ii.Fragment = b2;
Ii.jsx = t1;
Ii.jsxs = t1;
Ku.exports = Ii;
var x = Ku.exports,
  Ll = {},
  n1 = { exports: {} },
  Ue = {},
  r1 = { exports: {} },
  o1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, N) {
    var O = M.length;
    M.push(N);
    e: for (; 0 < O; ) {
      var L = (O - 1) >>> 1,
        B = M[L];
      if (0 < o(B, N)) (M[L] = N), (M[O] = B), (O = L);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var N = M[0],
      O = M.pop();
    if (O !== N) {
      M[0] = O;
      e: for (var L = 0, B = M.length, Te = B >>> 1; L < Te; ) {
        var Ae = 2 * (L + 1) - 1,
          qe = M[Ae],
          ce = Ae + 1,
          Oe = M[ce];
        if (0 > o(qe, O))
          ce < B && 0 > o(Oe, qe)
            ? ((M[L] = Oe), (M[ce] = O), (L = ce))
            : ((M[L] = qe), (M[Ae] = O), (L = Ae));
        else if (ce < B && 0 > o(Oe, O)) (M[L] = Oe), (M[ce] = O), (L = ce);
        else break e;
      }
    }
    return N;
  }
  function o(M, N) {
    var O = M.sortIndex - N.sortIndex;
    return O !== 0 ? O : M.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    f = 1,
    d = null,
    h = 3,
    g = !1,
    w = !1,
    y = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(M) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= M)
        r(u), (N.sortIndex = N.expirationTime), t(s, N);
      else break;
      N = n(u);
    }
  }
  function $(M) {
    if (((y = !1), v(M), !w))
      if (n(s) !== null) (w = !0), z(C);
      else {
        var N = n(u);
        N !== null && Y($, N.startTime - M);
      }
  }
  function C(M, N) {
    (w = !1), y && ((y = !1), m(b), (b = -1)), (g = !0);
    var O = h;
    try {
      for (
        v(N), d = n(s);
        d !== null && (!(d.expirationTime > N) || (M && !F()));

      ) {
        var L = d.callback;
        if (typeof L == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var B = L(d.expirationTime <= N);
          (N = e.unstable_now()),
            typeof B == "function" ? (d.callback = B) : d === n(s) && r(s),
            v(N);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var Te = !0;
      else {
        var Ae = n(u);
        Ae !== null && Y($, Ae.startTime - N), (Te = !1);
      }
      return Te;
    } finally {
      (d = null), (h = O), (g = !1);
    }
  }
  var S = !1,
    k = null,
    b = -1,
    R = 5,
    P = -1;
  function F() {
    return !(e.unstable_now() - P < R);
  }
  function I() {
    if (k !== null) {
      var M = e.unstable_now();
      P = M;
      var N = !0;
      try {
        N = k(!0, M);
      } finally {
        N ? te() : ((S = !1), (k = null));
      }
    } else S = !1;
  }
  var te;
  if (typeof p == "function")
    te = function () {
      p(I);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      H = j.port2;
    (j.port1.onmessage = I),
      (te = function () {
        H.postMessage(null);
      });
  } else
    te = function () {
      E(I, 0);
    };
  function z(M) {
    (k = M), S || ((S = !0), te());
  }
  function Y(M, N) {
    b = E(function () {
      M(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), z(C));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (M) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var O = h;
      h = N;
      try {
        return M();
      } finally {
        h = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, N) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var O = h;
      h = M;
      try {
        return N();
      } finally {
        h = O;
      }
    }),
    (e.unstable_scheduleCallback = function (M, N, O) {
      var L = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? L + O : L))
          : (O = L),
        M)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = O + B),
        (M = {
          id: f++,
          callback: N,
          priorityLevel: M,
          startTime: O,
          expirationTime: B,
          sortIndex: -1,
        }),
        O > L
          ? ((M.sortIndex = O),
            t(u, M),
            n(s) === null &&
              M === n(u) &&
              (y ? (m(b), (b = -1)) : (y = !0), Y($, O - L)))
          : ((M.sortIndex = B), t(s, M), w || g || ((w = !0), z(C))),
        M
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (M) {
      var N = h;
      return function () {
        var O = h;
        h = N;
        try {
          return M.apply(this, arguments);
        } finally {
          h = O;
        }
      };
    });
})(o1);
r1.exports = o1;
var R2 = r1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i1 = c,
  ze = R2;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var l1 = new Set(),
  Ir = {};
function En(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Ir[e] = t, e = 0; e < t.length; e++) l1.add(t[e]);
}
var Et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  jl = Object.prototype.hasOwnProperty,
  P2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uc = {},
  dc = {};
function T2(e) {
  return jl.call(dc, e)
    ? !0
    : jl.call(uc, e)
    ? !1
    : P2.test(e)
    ? (dc[e] = !0)
    : ((uc[e] = !0), !1);
}
function A2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function O2(e, t, n, r) {
  if (t === null || typeof t > "u" || A2(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ke(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Za = /[\-:]([a-z])/g;
function Qa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Za, Qa);
    ge[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Za, Qa);
    ge[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Za, Qa);
  ge[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ya(e, t, n, r) {
  var o = ge.hasOwnProperty(t) ? ge[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (O2(t, n, o, r) && (n = null),
    r || o === null
      ? T2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wo = Symbol.for("react.element"),
  Tn = Symbol.for("react.portal"),
  An = Symbol.for("react.fragment"),
  Xa = Symbol.for("react.strict_mode"),
  Fl = Symbol.for("react.profiler"),
  a1 = Symbol.for("react.provider"),
  s1 = Symbol.for("react.context"),
  Ja = Symbol.for("react.forward_ref"),
  zl = Symbol.for("react.suspense"),
  Ul = Symbol.for("react.suspense_list"),
  qa = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  c1 = Symbol.for("react.offscreen"),
  fc = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fc && e[fc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  ol;
function Cr(e) {
  if (ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ol = (t && t[1]) || "";
    }
  return (
    `
` +
    ol +
    e
  );
}
var il = !1;
function ll(e, t) {
  if (!e || il) return "";
  il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function I2(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ll(e.type, !1)), e;
    case 11:
      return (e = ll(e.type.render, !1)), e;
    case 1:
      return (e = ll(e.type, !0)), e;
    default:
      return "";
  }
}
function Vl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case An:
      return "Fragment";
    case Tn:
      return "Portal";
    case Fl:
      return "Profiler";
    case Xa:
      return "StrictMode";
    case zl:
      return "Suspense";
    case Ul:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case s1:
        return (e.displayName || "Context") + ".Consumer";
      case a1:
        return (e._context.displayName || "Context") + ".Provider";
      case Ja:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qa:
        return (
          (t = e.displayName || null), t !== null ? t : Vl(e.type) || "Memo"
        );
      case jt:
        (t = e._payload), (e = e._init);
        try {
          return Vl(e(t));
        } catch {}
    }
  return null;
}
function D2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Vl(t);
    case 8:
      return t === Xa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function qt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function u1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function L2(e) {
  var t = u1(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xo(e) {
  e._valueTracker || (e._valueTracker = L2(e));
}
function d1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = u1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ii(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bl(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function f1(e, t) {
  (t = t.checked), t != null && Ya(e, "checked", t, !1);
}
function Wl(e, t) {
  f1(e, t);
  var n = qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Hl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hl(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Hl(e, t, n) {
  (t !== "number" || ii(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Kl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Er(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: qt(n) };
}
function p1(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function m1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? m1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var $o,
  h1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        $o = $o || document.createElement("div"),
          $o.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = $o.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var br = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  j2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(br).forEach(function (e) {
  j2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (br[t] = br[e]);
  });
});
function v1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (br.hasOwnProperty(e) && br[e])
    ? ("" + t).trim()
    : t + "px";
}
function g1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = v1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var F2 = oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Zl(e, t) {
  if (t) {
    if (F2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Ql(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Yl = null;
function es(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xl = null,
  Hn = null,
  Kn = null;
function gc(e) {
  if ((e = ao(e))) {
    if (typeof Xl != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = zi(t)), Xl(e.stateNode, e.type, t));
  }
}
function y1(e) {
  Hn ? (Kn ? Kn.push(e) : (Kn = [e])) : (Hn = e);
}
function w1() {
  if (Hn) {
    var e = Hn,
      t = Kn;
    if (((Kn = Hn = null), gc(e), t)) for (e = 0; e < t.length; e++) gc(t[e]);
  }
}
function x1(e, t) {
  return e(t);
}
function $1() {}
var al = !1;
function C1(e, t, n) {
  if (al) return e(t, n);
  al = !0;
  try {
    return x1(e, t, n);
  } finally {
    (al = !1), (Hn !== null || Kn !== null) && ($1(), w1());
  }
}
function Lr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Jl = !1;
if (Et)
  try {
    var pr = {};
    Object.defineProperty(pr, "passive", {
      get: function () {
        Jl = !0;
      },
    }),
      window.addEventListener("test", pr, pr),
      window.removeEventListener("test", pr, pr);
  } catch {
    Jl = !1;
  }
function z2(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var _r = !1,
  li = null,
  ai = !1,
  ql = null,
  U2 = {
    onError: function (e) {
      (_r = !0), (li = e);
    },
  };
function V2(e, t, n, r, o, i, l, a, s) {
  (_r = !1), (li = null), z2.apply(U2, arguments);
}
function B2(e, t, n, r, o, i, l, a, s) {
  if ((V2.apply(this, arguments), _r)) {
    if (_r) {
      var u = li;
      (_r = !1), (li = null);
    } else throw Error(_(198));
    ai || ((ai = !0), (ql = u));
  }
}
function Sn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function E1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function yc(e) {
  if (Sn(e) !== e) throw Error(_(188));
}
function W2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Sn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return yc(o), e;
        if (i === r) return yc(o), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function S1(e) {
  return (e = W2(e)), e !== null ? k1(e) : null;
}
function k1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = k1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var b1 = ze.unstable_scheduleCallback,
  wc = ze.unstable_cancelCallback,
  H2 = ze.unstable_shouldYield,
  K2 = ze.unstable_requestPaint,
  le = ze.unstable_now,
  G2 = ze.unstable_getCurrentPriorityLevel,
  ts = ze.unstable_ImmediatePriority,
  _1 = ze.unstable_UserBlockingPriority,
  si = ze.unstable_NormalPriority,
  Z2 = ze.unstable_LowPriority,
  N1 = ze.unstable_IdlePriority,
  Di = null,
  ht = null;
function Q2(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(Di, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : J2,
  Y2 = Math.log,
  X2 = Math.LN2;
function J2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Y2(e) / X2) | 0)) | 0;
}
var Co = 64,
  Eo = 4194304;
function Sr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ci(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = Sr(a)) : ((i &= l), i !== 0 && (r = Sr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Sr(l)) : i !== 0 && (r = Sr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function q2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ep(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - it(i),
      a = 1 << l,
      s = o[l];
    s === -1
      ? (!(a & n) || a & r) && (o[l] = q2(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function ea(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function M1() {
  var e = Co;
  return (Co <<= 1), !(Co & 4194240) && (Co = 64), e;
}
function sl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function io(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function tp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - it(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ns(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var K = 0;
function R1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var P1,
  rs,
  T1,
  A1,
  O1,
  ta = !1,
  So = [],
  Wt = null,
  Ht = null,
  Kt = null,
  jr = new Map(),
  Fr = new Map(),
  zt = [],
  np =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ht = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function mr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ao(t)), t !== null && rs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function rp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Wt = mr(Wt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Ht = mr(Ht, e, t, n, r, o)), !0;
    case "mouseover":
      return (Kt = mr(Kt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return jr.set(i, mr(jr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Fr.set(i, mr(Fr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function I1(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = Sn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = E1(n)), t !== null)) {
          (e.blockedOn = t),
            O1(e.priority, function () {
              T1(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ho(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Yl = r), n.target.dispatchEvent(r), (Yl = null);
    } else return (t = ao(n)), t !== null && rs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $c(e, t, n) {
  Ho(e) && n.delete(t);
}
function op() {
  (ta = !1),
    Wt !== null && Ho(Wt) && (Wt = null),
    Ht !== null && Ho(Ht) && (Ht = null),
    Kt !== null && Ho(Kt) && (Kt = null),
    jr.forEach($c),
    Fr.forEach($c);
}
function hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ta ||
      ((ta = !0),
      ze.unstable_scheduleCallback(ze.unstable_NormalPriority, op)));
}
function zr(e) {
  function t(o) {
    return hr(o, e);
  }
  if (0 < So.length) {
    hr(So[0], e);
    for (var n = 1; n < So.length; n++) {
      var r = So[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && hr(Wt, e),
      Ht !== null && hr(Ht, e),
      Kt !== null && hr(Kt, e),
      jr.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    I1(n), n.blockedOn === null && zt.shift();
}
var Gn = Pt.ReactCurrentBatchConfig,
  ui = !0;
function ip(e, t, n, r) {
  var o = K,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (K = 1), os(e, t, n, r);
  } finally {
    (K = o), (Gn.transition = i);
  }
}
function lp(e, t, n, r) {
  var o = K,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (K = 4), os(e, t, n, r);
  } finally {
    (K = o), (Gn.transition = i);
  }
}
function os(e, t, n, r) {
  if (ui) {
    var o = na(e, t, n, r);
    if (o === null) yl(e, t, r, di, n), xc(e, r);
    else if (rp(o, e, t, n, r)) r.stopPropagation();
    else if ((xc(e, r), t & 4 && -1 < np.indexOf(e))) {
      for (; o !== null; ) {
        var i = ao(o);
        if (
          (i !== null && P1(i),
          (i = na(e, t, n, r)),
          i === null && yl(e, t, r, di, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else yl(e, t, r, null, n);
  }
}
var di = null;
function na(e, t, n, r) {
  if (((di = null), (e = es(r)), (e = un(e)), e !== null))
    if (((t = Sn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = E1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (di = e), null;
}
function D1(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (G2()) {
        case ts:
          return 1;
        case _1:
          return 4;
        case si:
        case Z2:
          return 16;
        case N1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null,
  is = null,
  Ko = null;
function L1() {
  if (Ko) return Ko;
  var e,
    t = is,
    n = t.length,
    r,
    o = "value" in Vt ? Vt.value : Vt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Ko = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Go(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ko() {
  return !0;
}
function Cc() {
  return !1;
}
function Ve(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ko
        : Cc),
      (this.isPropagationStopped = Cc),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ko));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ko));
      },
      persist: function () {},
      isPersistent: ko,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ls = Ve(lr),
  lo = oe({}, lr, { view: 0, detail: 0 }),
  ap = Ve(lo),
  cl,
  ul,
  vr,
  Li = oe({}, lo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: as,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vr &&
            (vr && e.type === "mousemove"
              ? ((cl = e.screenX - vr.screenX), (ul = e.screenY - vr.screenY))
              : (ul = cl = 0),
            (vr = e)),
          cl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ul;
    },
  }),
  Ec = Ve(Li),
  sp = oe({}, Li, { dataTransfer: 0 }),
  cp = Ve(sp),
  up = oe({}, lo, { relatedTarget: 0 }),
  dl = Ve(up),
  dp = oe({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fp = Ve(dp),
  pp = oe({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mp = Ve(pp),
  hp = oe({}, lr, { data: 0 }),
  Sc = Ve(hp),
  vp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  gp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  yp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yp[e]) ? !!t[e] : !1;
}
function as() {
  return wp;
}
var xp = oe({}, lo, {
    key: function (e) {
      if (e.key) {
        var t = vp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Go(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? gp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: as,
    charCode: function (e) {
      return e.type === "keypress" ? Go(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Go(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  $p = Ve(xp),
  Cp = oe({}, Li, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  kc = Ve(Cp),
  Ep = oe({}, lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: as,
  }),
  Sp = Ve(Ep),
  kp = oe({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bp = Ve(kp),
  _p = oe({}, Li, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Np = Ve(_p),
  Mp = [9, 13, 27, 32],
  ss = Et && "CompositionEvent" in window,
  Nr = null;
Et && "documentMode" in document && (Nr = document.documentMode);
var Rp = Et && "TextEvent" in window && !Nr,
  j1 = Et && (!ss || (Nr && 8 < Nr && 11 >= Nr)),
  bc = " ",
  _c = !1;
function F1(e, t) {
  switch (e) {
    case "keyup":
      return Mp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function z1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function Pp(e, t) {
  switch (e) {
    case "compositionend":
      return z1(t);
    case "keypress":
      return t.which !== 32 ? null : ((_c = !0), bc);
    case "textInput":
      return (e = t.data), e === bc && _c ? null : e;
    default:
      return null;
  }
}
function Tp(e, t) {
  if (On)
    return e === "compositionend" || (!ss && F1(e, t))
      ? ((e = L1()), (Ko = is = Vt = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return j1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ap = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Nc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ap[e.type] : t === "textarea";
}
function U1(e, t, n, r) {
  y1(r),
    (t = fi(t, "onChange")),
    0 < t.length &&
      ((n = new ls("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Mr = null,
  Ur = null;
function Op(e) {
  J1(e, 0);
}
function ji(e) {
  var t = Ln(e);
  if (d1(t)) return e;
}
function Ip(e, t) {
  if (e === "change") return t;
}
var V1 = !1;
if (Et) {
  var fl;
  if (Et) {
    var pl = "oninput" in document;
    if (!pl) {
      var Mc = document.createElement("div");
      Mc.setAttribute("oninput", "return;"),
        (pl = typeof Mc.oninput == "function");
    }
    fl = pl;
  } else fl = !1;
  V1 = fl && (!document.documentMode || 9 < document.documentMode);
}
function Rc() {
  Mr && (Mr.detachEvent("onpropertychange", B1), (Ur = Mr = null));
}
function B1(e) {
  if (e.propertyName === "value" && ji(Ur)) {
    var t = [];
    U1(t, Ur, e, es(e)), C1(Op, t);
  }
}
function Dp(e, t, n) {
  e === "focusin"
    ? (Rc(), (Mr = t), (Ur = n), Mr.attachEvent("onpropertychange", B1))
    : e === "focusout" && Rc();
}
function Lp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ji(Ur);
}
function jp(e, t) {
  if (e === "click") return ji(t);
}
function Fp(e, t) {
  if (e === "input" || e === "change") return ji(t);
}
function zp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : zp;
function Vr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!jl.call(t, o) || !st(e[o], t[o])) return !1;
  }
  return !0;
}
function Pc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tc(e, t) {
  var n = Pc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pc(n);
  }
}
function W1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? W1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function H1() {
  for (var e = window, t = ii(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ii(e.document);
  }
  return t;
}
function cs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Up(e) {
  var t = H1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    W1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && cs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Tc(n, i));
        var l = Tc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Vp = Et && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  ra = null,
  Rr = null,
  oa = !1;
function Ac(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oa ||
    In == null ||
    In !== ii(r) ||
    ((r = In),
    "selectionStart" in r && cs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Rr && Vr(Rr, r)) ||
      ((Rr = r),
      (r = fi(ra, "onSelect")),
      0 < r.length &&
        ((t = new ls("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = In))));
}
function bo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dn = {
    animationend: bo("Animation", "AnimationEnd"),
    animationiteration: bo("Animation", "AnimationIteration"),
    animationstart: bo("Animation", "AnimationStart"),
    transitionend: bo("Transition", "TransitionEnd"),
  },
  ml = {},
  K1 = {};
Et &&
  ((K1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dn.animationend.animation,
    delete Dn.animationiteration.animation,
    delete Dn.animationstart.animation),
  "TransitionEvent" in window || delete Dn.transitionend.transition);
function Fi(e) {
  if (ml[e]) return ml[e];
  if (!Dn[e]) return e;
  var t = Dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in K1) return (ml[e] = t[n]);
  return e;
}
var G1 = Fi("animationend"),
  Z1 = Fi("animationiteration"),
  Q1 = Fi("animationstart"),
  Y1 = Fi("transitionend"),
  X1 = new Map(),
  Oc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function on(e, t) {
  X1.set(e, t), En(t, [e]);
}
for (var hl = 0; hl < Oc.length; hl++) {
  var vl = Oc[hl],
    Bp = vl.toLowerCase(),
    Wp = vl[0].toUpperCase() + vl.slice(1);
  on(Bp, "on" + Wp);
}
on(G1, "onAnimationEnd");
on(Z1, "onAnimationIteration");
on(Q1, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(Y1, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Hp = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function Ic(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), B2(r, t, void 0, e), (e.currentTarget = null);
}
function J1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          Ic(o, a, u), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Ic(o, a, u), (i = s);
        }
    }
  }
  if (ai) throw ((e = ql), (ai = !1), (ql = null), e);
}
function J(e, t) {
  var n = t[ca];
  n === void 0 && (n = t[ca] = new Set());
  var r = e + "__bubble";
  n.has(r) || (q1(t, e, 2, !1), n.add(r));
}
function gl(e, t, n) {
  var r = 0;
  t && (r |= 4), q1(n, e, r, t);
}
var _o = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) {
  if (!e[_o]) {
    (e[_o] = !0),
      l1.forEach(function (n) {
        n !== "selectionchange" && (Hp.has(n) || gl(n, !1, e), gl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_o] || ((t[_o] = !0), gl("selectionchange", !1, t));
  }
}
function q1(e, t, n, r) {
  switch (D1(t)) {
    case 1:
      var o = ip;
      break;
    case 4:
      o = lp;
      break;
    default:
      o = os;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Jl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function yl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = un(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  C1(function () {
    var u = i,
      f = es(n),
      d = [];
    e: {
      var h = X1.get(e);
      if (h !== void 0) {
        var g = ls,
          w = e;
        switch (e) {
          case "keypress":
            if (Go(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = $p;
            break;
          case "focusin":
            (w = "focus"), (g = dl);
            break;
          case "focusout":
            (w = "blur"), (g = dl);
            break;
          case "beforeblur":
          case "afterblur":
            g = dl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ec;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = cp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Sp;
            break;
          case G1:
          case Z1:
          case Q1:
            g = fp;
            break;
          case Y1:
            g = bp;
            break;
          case "scroll":
            g = ap;
            break;
          case "wheel":
            g = Np;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = mp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = kc;
        }
        var y = (t & 4) !== 0,
          E = !y && e === "scroll",
          m = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var $ = v.stateNode;
          if (
            (v.tag === 5 &&
              $ !== null &&
              ((v = $),
              m !== null && (($ = Lr(p, m)), $ != null && y.push(Wr(p, $, v)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((h = new g(h, w, null, n, f)), d.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Yl &&
            (w = n.relatedTarget || n.fromElement) &&
            (un(w) || w[St]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? un(w) : null),
              w !== null &&
                ((E = Sn(w)), w !== E || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((y = Ec),
            ($ = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = kc),
              ($ = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (E = g == null ? h : Ln(g)),
            (v = w == null ? h : Ln(w)),
            (h = new y($, p + "leave", g, n, f)),
            (h.target = E),
            (h.relatedTarget = v),
            ($ = null),
            un(f) === u &&
              ((y = new y(m, p + "enter", w, n, f)),
              (y.target = v),
              (y.relatedTarget = E),
              ($ = y)),
            (E = $),
            g && w)
          )
            t: {
              for (y = g, m = w, p = 0, v = y; v; v = Nn(v)) p++;
              for (v = 0, $ = m; $; $ = Nn($)) v++;
              for (; 0 < p - v; ) (y = Nn(y)), p--;
              for (; 0 < v - p; ) (m = Nn(m)), v--;
              for (; p--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Nn(y)), (m = Nn(m));
              }
              y = null;
            }
          else y = null;
          g !== null && Dc(d, h, g, y, !1),
            w !== null && E !== null && Dc(d, E, w, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? Ln(u) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var C = Ip;
        else if (Nc(h))
          if (V1) C = Fp;
          else {
            C = Lp;
            var S = Dp;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = jp);
        if (C && (C = C(e, u))) {
          U1(d, C, n, f);
          break e;
        }
        S && S(e, h, u),
          e === "focusout" &&
            (S = h._wrapperState) &&
            S.controlled &&
            h.type === "number" &&
            Hl(h, "number", h.value);
      }
      switch (((S = u ? Ln(u) : window), e)) {
        case "focusin":
          (Nc(S) || S.contentEditable === "true") &&
            ((In = S), (ra = u), (Rr = null));
          break;
        case "focusout":
          Rr = ra = In = null;
          break;
        case "mousedown":
          oa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (oa = !1), Ac(d, n, f);
          break;
        case "selectionchange":
          if (Vp) break;
        case "keydown":
        case "keyup":
          Ac(d, n, f);
      }
      var k;
      if (ss)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        On
          ? F1(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (j1 &&
          n.locale !== "ko" &&
          (On || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && On && (k = L1())
            : ((Vt = f),
              (is = "value" in Vt ? Vt.value : Vt.textContent),
              (On = !0))),
        (S = fi(u, b)),
        0 < S.length &&
          ((b = new Sc(b, e, null, n, f)),
          d.push({ event: b, listeners: S }),
          k ? (b.data = k) : ((k = z1(n)), k !== null && (b.data = k)))),
        (k = Rp ? Pp(e, n) : Tp(e, n)) &&
          ((u = fi(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Sc("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = k)));
    }
    J1(d, t);
  });
}
function Wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Lr(e, n)),
      i != null && r.unshift(Wr(e, i, o)),
      (i = Lr(e, t)),
      i != null && r.push(Wr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Dc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = Lr(n, i)), s != null && l.unshift(Wr(n, s, a)))
        : o || ((s = Lr(n, i)), s != null && l.push(Wr(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Kp = /\r\n?/g,
  Gp = /\u0000|\uFFFD/g;
function Lc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kp,
      `
`
    )
    .replace(Gp, "");
}
function No(e, t, n) {
  if (((t = Lc(t)), Lc(e) !== t && n)) throw Error(_(425));
}
function pi() {}
var ia = null,
  la = null;
function aa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sa = typeof setTimeout == "function" ? setTimeout : void 0,
  Zp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  jc = typeof Promise == "function" ? Promise : void 0,
  Qp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof jc < "u"
      ? function (e) {
          return jc.resolve(null).then(e).catch(Yp);
        }
      : sa;
function Yp(e) {
  setTimeout(function () {
    throw e;
  });
}
function wl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), zr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  zr(t);
}
function Gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Fc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ar = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + ar,
  Hr = "__reactProps$" + ar,
  St = "__reactContainer$" + ar,
  ca = "__reactEvents$" + ar,
  Xp = "__reactListeners$" + ar,
  Jp = "__reactHandles$" + ar;
function un(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fc(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = Fc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ao(e) {
  return (
    (e = e[pt] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function zi(e) {
  return e[Hr] || null;
}
var ua = [],
  jn = -1;
function ln(e) {
  return { current: e };
}
function q(e) {
  0 > jn || ((e.current = ua[jn]), (ua[jn] = null), jn--);
}
function Q(e, t) {
  jn++, (ua[jn] = e.current), (e.current = t);
}
var en = {},
  $e = ln(en),
  Me = ln(!1),
  vn = en;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Re(e) {
  return (e = e.childContextTypes), e != null;
}
function mi() {
  q(Me), q($e);
}
function zc(e, t, n) {
  if ($e.current !== en) throw Error(_(168));
  Q($e, t), Q(Me, n);
}
function ed(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, D2(e) || "Unknown", o));
  return oe({}, n, r);
}
function hi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
    (vn = $e.current),
    Q($e, e),
    Q(Me, Me.current),
    !0
  );
}
function Uc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = ed(e, t, vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Me),
      q($e),
      Q($e, e))
    : q(Me),
    Q(Me, n);
}
var wt = null,
  Ui = !1,
  xl = !1;
function td(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function qp(e) {
  (Ui = !0), td(e);
}
function an() {
  if (!xl && wt !== null) {
    xl = !0;
    var e = 0,
      t = K;
    try {
      var n = wt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (Ui = !1);
    } catch (o) {
      throw (wt !== null && (wt = wt.slice(e + 1)), b1(ts, an), o);
    } finally {
      (K = t), (xl = !1);
    }
  }
  return null;
}
var Fn = [],
  zn = 0,
  vi = null,
  gi = 0,
  We = [],
  He = 0,
  gn = null,
  xt = 1,
  $t = "";
function sn(e, t) {
  (Fn[zn++] = gi), (Fn[zn++] = vi), (vi = e), (gi = t);
}
function nd(e, t, n) {
  (We[He++] = xt), (We[He++] = $t), (We[He++] = gn), (gn = e);
  var r = xt;
  e = $t;
  var o = 32 - it(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - it(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (xt = (1 << (32 - it(t) + o)) | (n << o) | r),
      ($t = i + e);
  } else (xt = (1 << i) | (n << o) | r), ($t = e);
}
function us(e) {
  e.return !== null && (sn(e, 1), nd(e, 1, 0));
}
function ds(e) {
  for (; e === vi; )
    (vi = Fn[--zn]), (Fn[zn] = null), (gi = Fn[--zn]), (Fn[zn] = null);
  for (; e === gn; )
    (gn = We[--He]),
      (We[He] = null),
      ($t = We[--He]),
      (We[He] = null),
      (xt = We[--He]),
      (We[He] = null);
}
var je = null,
  Le = null,
  ee = !1,
  ot = null;
function rd(e, t) {
  var n = Ke(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Le = Gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: xt, overflow: $t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function da(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fa(e) {
  if (ee) {
    var t = Le;
    if (t) {
      var n = t;
      if (!Vc(e, t)) {
        if (da(e)) throw Error(_(418));
        t = Gt(n.nextSibling);
        var r = je;
        t && Vc(e, t)
          ? rd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (je = e));
      }
    } else {
      if (da(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (je = e);
    }
  }
}
function Bc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Mo(e) {
  if (e !== je) return !1;
  if (!ee) return Bc(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !aa(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (da(e)) throw (od(), Error(_(418)));
    for (; t; ) rd(e, t), (t = Gt(t.nextSibling));
  }
  if ((Bc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = Gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = je ? Gt(e.stateNode.nextSibling) : null;
  return !0;
}
function od() {
  for (var e = Le; e; ) e = Gt(e.nextSibling);
}
function qn() {
  (Le = je = null), (ee = !1);
}
function fs(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var e3 = Pt.ReactCurrentBatchConfig;
function nt(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var yi = ln(null),
  wi = null,
  Un = null,
  ps = null;
function ms() {
  ps = Un = wi = null;
}
function hs(e) {
  var t = yi.current;
  q(yi), (e._currentValue = t);
}
function pa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  (wi = e),
    (ps = Un = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function Ze(e) {
  var t = e._currentValue;
  if (ps !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Un === null)) {
      if (wi === null) throw Error(_(308));
      (Un = e), (wi.dependencies = { lanes: 0, firstContext: e });
    } else Un = Un.next = e;
  return t;
}
var dn = null;
function vs(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function id(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), vs(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    kt(e, r)
  );
}
function kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function gs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ld(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      kt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), vs(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    kt(e, n)
  );
}
function Zo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ns(e, n);
  }
}
function Wc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function xi(e, t, n, r) {
  var o = e.updateQueue;
  Ft = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (l = 0), (f = u = s = null), (a = i);
    do {
      var h = a.lane,
        g = a.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            y = a;
          switch (((h = t), (g = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                d = w.call(g, d, h);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (h = typeof w == "function" ? w.call(g, d, h) : w),
                h == null)
              )
                break e;
              d = oe({}, d, h);
              break e;
            case 2:
              Ft = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = g), (s = d)) : (f = f.next = g),
          (l |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (wn |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function Hc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var ad = new i1.Component().refs;
function ma(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Sn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      o = Yt(e),
      i = Ct(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Zt(e, i, o)),
      t !== null && (lt(t, e, o, r), Zo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      o = Yt(e),
      i = Ct(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Zt(e, i, o)),
      t !== null && (lt(t, e, o, r), Zo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = Yt(e),
      o = Ct(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Zt(e, o, r)),
      t !== null && (lt(t, e, r, n), Zo(t, e, r));
  },
};
function Kc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Vr(n, r) || !Vr(o, i)
      : !0
  );
}
function sd(e, t, n) {
  var r = !1,
    o = en,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ze(i))
      : ((o = Re(t) ? vn : $e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Jn(e, o) : en)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Gc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vi.enqueueReplaceState(t, t.state, null);
}
function ha(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = ad), gs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ze(i))
    : ((i = Re(t) ? vn : $e.current), (o.context = Jn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ma(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Vi.enqueueReplaceState(o, o.state, null),
      xi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === ad && (a = o.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ro(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Zc(e) {
  var t = e._init;
  return t(e._payload);
}
function cd(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = Xt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, v, $) {
    return p === null || p.tag !== 6
      ? ((p = _l(v, m.mode, $)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function s(m, p, v, $) {
    var C = v.type;
    return C === An
      ? f(m, p, v.props.children, $, v.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === jt &&
            Zc(C) === p.type))
      ? (($ = o(p, v.props)), ($.ref = gr(m, p, v)), ($.return = m), $)
      : (($ = ei(v.type, v.key, v.props, null, m.mode, $)),
        ($.ref = gr(m, p, v)),
        ($.return = m),
        $);
  }
  function u(m, p, v, $) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Nl(v, m.mode, $)), (p.return = m), p)
      : ((p = o(p, v.children || [])), (p.return = m), p);
  }
  function f(m, p, v, $, C) {
    return p === null || p.tag !== 7
      ? ((p = hn(v, m.mode, $, C)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function d(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = _l("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case wo:
          return (
            (v = ei(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = gr(m, null, p)),
            (v.return = m),
            v
          );
        case Tn:
          return (p = Nl(p, m.mode, v)), (p.return = m), p;
        case jt:
          var $ = p._init;
          return d(m, $(p._payload), v);
      }
      if (Er(p) || fr(p))
        return (p = hn(p, m.mode, v, null)), (p.return = m), p;
      Ro(m, p);
    }
    return null;
  }
  function h(m, p, v, $) {
    var C = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : a(m, p, "" + v, $);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case wo:
          return v.key === C ? s(m, p, v, $) : null;
        case Tn:
          return v.key === C ? u(m, p, v, $) : null;
        case jt:
          return (C = v._init), h(m, p, C(v._payload), $);
      }
      if (Er(v) || fr(v)) return C !== null ? null : f(m, p, v, $, null);
      Ro(m, v);
    }
    return null;
  }
  function g(m, p, v, $, C) {
    if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
      return (m = m.get(v) || null), a(p, m, "" + $, C);
    if (typeof $ == "object" && $ !== null) {
      switch ($.$$typeof) {
        case wo:
          return (m = m.get($.key === null ? v : $.key) || null), s(p, m, $, C);
        case Tn:
          return (m = m.get($.key === null ? v : $.key) || null), u(p, m, $, C);
        case jt:
          var S = $._init;
          return g(m, p, v, S($._payload), C);
      }
      if (Er($) || fr($)) return (m = m.get(v) || null), f(p, m, $, C, null);
      Ro(p, $);
    }
    return null;
  }
  function w(m, p, v, $) {
    for (
      var C = null, S = null, k = p, b = (p = 0), R = null;
      k !== null && b < v.length;
      b++
    ) {
      k.index > b ? ((R = k), (k = null)) : (R = k.sibling);
      var P = h(m, k, v[b], $);
      if (P === null) {
        k === null && (k = R);
        break;
      }
      e && k && P.alternate === null && t(m, k),
        (p = i(P, p, b)),
        S === null ? (C = P) : (S.sibling = P),
        (S = P),
        (k = R);
    }
    if (b === v.length) return n(m, k), ee && sn(m, b), C;
    if (k === null) {
      for (; b < v.length; b++)
        (k = d(m, v[b], $)),
          k !== null &&
            ((p = i(k, p, b)), S === null ? (C = k) : (S.sibling = k), (S = k));
      return ee && sn(m, b), C;
    }
    for (k = r(m, k); b < v.length; b++)
      (R = g(k, m, b, v[b], $)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? b : R.key),
          (p = i(R, p, b)),
          S === null ? (C = R) : (S.sibling = R),
          (S = R));
    return (
      e &&
        k.forEach(function (F) {
          return t(m, F);
        }),
      ee && sn(m, b),
      C
    );
  }
  function y(m, p, v, $) {
    var C = fr(v);
    if (typeof C != "function") throw Error(_(150));
    if (((v = C.call(v)), v == null)) throw Error(_(151));
    for (
      var S = (C = null), k = p, b = (p = 0), R = null, P = v.next();
      k !== null && !P.done;
      b++, P = v.next()
    ) {
      k.index > b ? ((R = k), (k = null)) : (R = k.sibling);
      var F = h(m, k, P.value, $);
      if (F === null) {
        k === null && (k = R);
        break;
      }
      e && k && F.alternate === null && t(m, k),
        (p = i(F, p, b)),
        S === null ? (C = F) : (S.sibling = F),
        (S = F),
        (k = R);
    }
    if (P.done) return n(m, k), ee && sn(m, b), C;
    if (k === null) {
      for (; !P.done; b++, P = v.next())
        (P = d(m, P.value, $)),
          P !== null &&
            ((p = i(P, p, b)), S === null ? (C = P) : (S.sibling = P), (S = P));
      return ee && sn(m, b), C;
    }
    for (k = r(m, k); !P.done; b++, P = v.next())
      (P = g(k, m, b, P.value, $)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? b : P.key),
          (p = i(P, p, b)),
          S === null ? (C = P) : (S.sibling = P),
          (S = P));
    return (
      e &&
        k.forEach(function (I) {
          return t(m, I);
        }),
      ee && sn(m, b),
      C
    );
  }
  function E(m, p, v, $) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === An &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case wo:
          e: {
            for (var C = v.key, S = p; S !== null; ) {
              if (S.key === C) {
                if (((C = v.type), C === An)) {
                  if (S.tag === 7) {
                    n(m, S.sibling),
                      (p = o(S, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  S.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === jt &&
                    Zc(C) === S.type)
                ) {
                  n(m, S.sibling),
                    (p = o(S, v.props)),
                    (p.ref = gr(m, S, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            v.type === An
              ? ((p = hn(v.props.children, m.mode, $, v.key)),
                (p.return = m),
                (m = p))
              : (($ = ei(v.type, v.key, v.props, null, m.mode, $)),
                ($.ref = gr(m, p, v)),
                ($.return = m),
                (m = $));
          }
          return l(m);
        case Tn:
          e: {
            for (S = v.key; p !== null; ) {
              if (p.key === S)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Nl(v, m.mode, $)), (p.return = m), (m = p);
          }
          return l(m);
        case jt:
          return (S = v._init), E(m, p, S(v._payload), $);
      }
      if (Er(v)) return w(m, p, v, $);
      if (fr(v)) return y(m, p, v, $);
      Ro(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = _l(v, m.mode, $)), (p.return = m), (m = p)),
        l(m))
      : n(m, p);
  }
  return E;
}
var er = cd(!0),
  ud = cd(!1),
  so = {},
  vt = ln(so),
  Kr = ln(so),
  Gr = ln(so);
function fn(e) {
  if (e === so) throw Error(_(174));
  return e;
}
function ys(e, t) {
  switch ((Q(Gr, t), Q(Kr, e), Q(vt, so), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gl(t, e));
  }
  q(vt), Q(vt, t);
}
function tr() {
  q(vt), q(Kr), q(Gr);
}
function dd(e) {
  fn(Gr.current);
  var t = fn(vt.current),
    n = Gl(t, e.type);
  t !== n && (Q(Kr, e), Q(vt, n));
}
function ws(e) {
  Kr.current === e && (q(vt), q(Kr));
}
var ne = ln(0);
function $i(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function xs() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Qo = Pt.ReactCurrentDispatcher,
  Cl = Pt.ReactCurrentBatchConfig,
  yn = 0,
  re = null,
  ue = null,
  fe = null,
  Ci = !1,
  Pr = !1,
  Zr = 0,
  t3 = 0;
function ye() {
  throw Error(_(321));
}
function $s(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function Cs(e, t, n, r, o, i) {
  if (
    ((yn = i),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qo.current = e === null || e.memoizedState === null ? i3 : l3),
    (e = n(r, o)),
    Pr)
  ) {
    i = 0;
    do {
      if (((Pr = !1), (Zr = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (fe = ue = null),
        (t.updateQueue = null),
        (Qo.current = a3),
        (e = n(r, o));
    } while (Pr);
  }
  if (
    ((Qo.current = Ei),
    (t = ue !== null && ue.next !== null),
    (yn = 0),
    (fe = ue = re = null),
    (Ci = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Es() {
  var e = Zr !== 0;
  return (Zr = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (re.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function Qe() {
  if (ue === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = fe === null ? re.memoizedState : fe.next;
  if (t !== null) (fe = t), (ue = e);
  else {
    if (e === null) throw Error(_(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      fe === null ? (re.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function El(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ue,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = i;
    do {
      var f = u.lane;
      if ((yn & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = d), (l = r)) : (s = s.next = d),
          (re.lanes |= f),
          (wn |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (l = r) : (s.next = a),
      st(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (re.lanes |= i), (wn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Sl(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    st(i, t.memoizedState) || (Ne = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function fd() {}
function pd(e, t) {
  var n = re,
    r = Qe(),
    o = t(),
    i = !st(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ne = !0)),
    (r = r.queue),
    Ss(vd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yr(9, hd.bind(null, n, r, o, t), void 0, null),
      pe === null)
    )
      throw Error(_(349));
    yn & 30 || md(n, t, o);
  }
  return o;
}
function md(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gd(t) && yd(e);
}
function vd(e, t, n) {
  return n(function () {
    gd(t) && yd(e);
  });
}
function gd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function yd(e) {
  var t = kt(e, 1);
  t !== null && lt(t, e, 1, -1);
}
function Qc(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = o3.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function Yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wd() {
  return Qe().memoizedState;
}
function Yo(e, t, n, r) {
  var o = ft();
  (re.flags |= e),
    (o.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bi(e, t, n, r) {
  var o = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ue !== null) {
    var l = ue.memoizedState;
    if (((i = l.destroy), r !== null && $s(r, l.deps))) {
      o.memoizedState = Yr(t, n, i, r);
      return;
    }
  }
  (re.flags |= e), (o.memoizedState = Yr(1 | t, n, i, r));
}
function Yc(e, t) {
  return Yo(8390656, 8, e, t);
}
function Ss(e, t) {
  return Bi(2048, 8, e, t);
}
function xd(e, t) {
  return Bi(4, 2, e, t);
}
function $d(e, t) {
  return Bi(4, 4, e, t);
}
function Cd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ed(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bi(4, 4, Cd.bind(null, t, e), n)
  );
}
function ks() {}
function Sd(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $s(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function kd(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $s(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function bd(e, t, n) {
  return yn & 21
    ? (st(n, t) || ((n = M1()), (re.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function n3(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Cl.transition;
  Cl.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Cl.transition = r);
  }
}
function _d() {
  return Qe().memoizedState;
}
function r3(e, t, n) {
  var r = Yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Nd(e))
  )
    Md(t, n);
  else if (((n = id(e, t, n, r)), n !== null)) {
    var o = Ee();
    lt(n, e, r, o), Rd(n, t, r);
  }
}
function o3(e, t, n) {
  var r = Yt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nd(e)) Md(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), st(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), vs(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = id(e, t, o, r)),
      n !== null && ((o = Ee()), lt(n, e, r, o), Rd(n, t, r));
  }
}
function Nd(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function Md(e, t) {
  Pr = Ci = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Rd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ns(e, n);
  }
}
var Ei = {
    readContext: Ze,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  i3 = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ze,
    useEffect: Yc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yo(4194308, 4, Cd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = r3.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qc,
    useDebugValue: ks,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = Qc(!1),
        t = e[0];
      return (e = n3.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        o = ft();
      if (ee) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(_(349));
        yn & 30 || md(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Yc(vd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yr(9, hd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = pe.identifierPrefix;
      if (ee) {
        var n = $t,
          r = xt;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Zr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = t3++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  l3 = {
    readContext: Ze,
    useCallback: Sd,
    useContext: Ze,
    useEffect: Ss,
    useImperativeHandle: Ed,
    useInsertionEffect: xd,
    useLayoutEffect: $d,
    useMemo: kd,
    useReducer: El,
    useRef: wd,
    useState: function () {
      return El(Qr);
    },
    useDebugValue: ks,
    useDeferredValue: function (e) {
      var t = Qe();
      return bd(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = El(Qr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: pd,
    useId: _d,
    unstable_isNewReconciler: !1,
  },
  a3 = {
    readContext: Ze,
    useCallback: Sd,
    useContext: Ze,
    useEffect: Ss,
    useImperativeHandle: Ed,
    useInsertionEffect: xd,
    useLayoutEffect: $d,
    useMemo: kd,
    useReducer: Sl,
    useRef: wd,
    useState: function () {
      return Sl(Qr);
    },
    useDebugValue: ks,
    useDeferredValue: function (e) {
      var t = Qe();
      return ue === null ? (t.memoizedState = e) : bd(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Sl(Qr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: pd,
    useId: _d,
    unstable_isNewReconciler: !1,
  };
function nr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += I2(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function va(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var s3 = typeof WeakMap == "function" ? WeakMap : Map;
function Pd(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ki || ((ki = !0), (ba = r)), va(e, t);
    }),
    n
  );
}
function Td(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        va(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        va(e, t),
          typeof r != "function" &&
            (Qt === null ? (Qt = new Set([this])) : Qt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Xc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new s3();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = C3.bind(null, e, t, n)), t.then(e, e));
}
function Jc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var c3 = Pt.ReactCurrentOwner,
  Ne = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? ud(t, null, n, r) : er(t, e.child, n, r);
}
function eu(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Zn(t, o),
    (r = Cs(e, t, n, r, i, o)),
    (n = Es()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        bt(e, t, o))
      : (ee && n && us(t), (t.flags |= 1), Ce(e, t, r, o), t.child)
  );
}
function tu(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !As(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ad(e, t, i, r, o))
      : ((e = ei(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vr), n(l, r) && e.ref === t.ref)
    )
      return bt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Xt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ad(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Vr(i, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), bt(e, t, o);
  }
  return ga(e, t, n, r, o);
}
function Od(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(Bn, Ie),
        (Ie |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(Bn, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Q(Bn, Ie),
        (Ie |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(Bn, Ie),
      (Ie |= r);
  return Ce(e, t, o, n), t.child;
}
function Id(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ga(e, t, n, r, o) {
  var i = Re(n) ? vn : $e.current;
  return (
    (i = Jn(t, i)),
    Zn(t, o),
    (n = Cs(e, t, n, r, i, o)),
    (r = Es()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        bt(e, t, o))
      : (ee && r && us(t), (t.flags |= 1), Ce(e, t, n, o), t.child)
  );
}
function nu(e, t, n, r, o) {
  if (Re(n)) {
    var i = !0;
    hi(t);
  } else i = !1;
  if ((Zn(t, o), t.stateNode === null))
    Xo(e, t), sd(t, n, r), ha(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ze(u))
      : ((u = Re(n) ? vn : $e.current), (u = Jn(t, u)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Gc(t, l, r, u)),
      (Ft = !1);
    var h = t.memoizedState;
    (l.state = h),
      xi(t, r, l, o),
      (s = t.memoizedState),
      a !== r || h !== s || Me.current || Ft
        ? (typeof f == "function" && (ma(t, n, f, r), (s = t.memoizedState)),
          (a = Ft || Kc(t, n, a, r, h, s, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      ld(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : nt(t.type, a)),
      (l.props = u),
      (d = t.pendingProps),
      (h = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ze(s))
        : ((s = Re(n) ? vn : $e.current), (s = Jn(t, s)));
    var g = n.getDerivedStateFromProps;
    (f =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== d || h !== s) && Gc(t, l, r, s)),
      (Ft = !1),
      (h = t.memoizedState),
      (l.state = h),
      xi(t, r, l, o);
    var w = t.memoizedState;
    a !== d || h !== w || Me.current || Ft
      ? (typeof g == "function" && (ma(t, n, g, r), (w = t.memoizedState)),
        (u = Ft || Kc(t, n, u, r, h, w, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ya(e, t, n, r, i, o);
}
function ya(e, t, n, r, o, i) {
  Id(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Uc(t, n, !1), bt(e, t, i);
  (r = t.stateNode), (c3.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = er(t, e.child, null, i)), (t.child = er(t, null, a, i)))
      : Ce(e, t, a, i),
    (t.memoizedState = r.state),
    o && Uc(t, n, !0),
    t.child
  );
}
function Dd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? zc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zc(e, t.context, !1),
    ys(e, t.containerInfo);
}
function ru(e, t, n, r, o) {
  return qn(), fs(o), (t.flags |= 256), Ce(e, t, n, r), t.child;
}
var wa = { dehydrated: null, treeContext: null, retryLane: 0 };
function xa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ld(e, t, n) {
  var r = t.pendingProps,
    o = ne.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Q(ne, o & 1),
    e === null)
  )
    return (
      fa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ki(l, r, 0, null)),
              (e = hn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = xa(n)),
              (t.memoizedState = wa),
              e)
            : bs(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return u3(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Xt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Xt(a, i)) : ((i = hn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? xa(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = wa),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Xt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bs(e, t) {
  return (
    (t = Ki({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Po(e, t, n, r) {
  return (
    r !== null && fs(r),
    er(t, e.child, null, n),
    (e = bs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function u3(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = kl(Error(_(422)))), Po(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ki({ mode: "visible", children: r.children }, o, 0, null)),
        (i = hn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && er(t, e.child, null, l),
        (t.child.memoizedState = xa(l)),
        (t.memoizedState = wa),
        i);
  if (!(t.mode & 1)) return Po(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(_(419))), (r = kl(i, r, void 0)), Po(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Ne || a)) {
    if (((r = pe), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), kt(e, o), lt(r, e, o, -1));
    }
    return Ts(), (r = kl(Error(_(421)))), Po(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = E3.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Le = Gt(o.nextSibling)),
      (je = t),
      (ee = !0),
      (ot = null),
      e !== null &&
        ((We[He++] = xt),
        (We[He++] = $t),
        (We[He++] = gn),
        (xt = e.id),
        ($t = e.overflow),
        (gn = t)),
      (t = bs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ou(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pa(e.return, t, n);
}
function bl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function jd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ce(e, t, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ou(e, n, t);
        else if (e.tag === 19) ou(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Q(ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && $i(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          bl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && $i(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        bl(t, !0, n, null, i);
        break;
      case "together":
        bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function d3(e, t, n) {
  switch (t.tag) {
    case 3:
      Dd(t), qn();
      break;
    case 5:
      dd(t);
      break;
    case 1:
      Re(t.type) && hi(t);
      break;
    case 4:
      ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Q(yi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ld(e, t, n)
          : (Q(ne, ne.current & 1),
            (e = bt(e, t, n)),
            e !== null ? e.sibling : null);
      Q(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return jd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Q(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Od(e, t, n);
  }
  return bt(e, t, n);
}
var Fd, $a, zd, Ud;
Fd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
$a = function () {};
zd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), fn(vt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Bl(e, o)), (r = Bl(e, r)), (i = []);
        break;
      case "select":
        (o = oe({}, o, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Kl(e, o)), (r = Kl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = pi);
    }
    Zl(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ir.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ir.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && J("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ud = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function f3(e, t, n) {
  var r = t.pendingProps;
  switch ((ds(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return we(t), null;
    case 1:
      return Re(t.type) && mi(), we(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tr(),
        q(Me),
        q($e),
        xs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Mo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (Ma(ot), (ot = null)))),
        $a(e, t),
        we(t),
        null
      );
    case 5:
      ws(t);
      var o = fn(Gr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        zd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return we(t), null;
        }
        if (((e = fn(vt.current)), Mo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[pt] = t), (r[Hr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < kr.length; o++) J(kr[o], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              pc(r, i), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              hc(r, i), J("invalid", r);
          }
          Zl(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      No(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      No(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Ir.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              xo(r), mc(r, i, !0);
              break;
            case "textarea":
              xo(r), vc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = pi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = m1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[pt] = t),
            (e[Hr] = r),
            Fd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ql(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < kr.length; o++) J(kr[o], e);
                o = r;
                break;
              case "source":
                J("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (o = r);
                break;
              case "details":
                J("toggle", e), (o = r);
                break;
              case "input":
                pc(e, r), (o = Bl(e, r)), J("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = oe({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                hc(e, r), (o = Kl(e, r)), J("invalid", e);
                break;
              default:
                o = r;
            }
            Zl(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? g1(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && h1(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Dr(e, s)
                    : typeof s == "number" && Dr(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ir.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && J("scroll", e)
                      : s != null && Ya(e, i, s, l));
              }
            switch (n) {
              case "input":
                xo(e), mc(e, r, !1);
                break;
              case "textarea":
                xo(e), vc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = pi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) Ud(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = fn(Gr.current)), fn(vt.current), Mo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (i = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                No(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  No(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return we(t), null;
    case 13:
      if (
        (q(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Le !== null && t.mode & 1 && !(t.flags & 128))
          od(), qn(), (t.flags |= 98560), (i = !1);
        else if (((i = Mo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[pt] = t;
          } else
            qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          we(t), (i = !1);
        } else ot !== null && (Ma(ot), (ot = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? de === 0 && (de = 3) : Ts())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null);
    case 4:
      return (
        tr(), $a(e, t), e === null && Br(t.stateNode.containerInfo), we(t), null
      );
    case 10:
      return hs(t.type._context), we(t), null;
    case 17:
      return Re(t.type) && mi(), we(t), null;
    case 19:
      if ((q(ne), (i = t.memoizedState), i === null)) return we(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) yr(i, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = $i(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    yr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(ne, (ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            le() > rr &&
            ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $i(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !ee)
            )
              return we(t), null;
          } else
            2 * le() - i.renderingStartTime > rr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = le()),
          (t.sibling = null),
          (n = ne.current),
          Q(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null);
    case 22:
    case 23:
      return (
        Ps(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ie & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : we(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function p3(e, t) {
  switch ((ds(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && mi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tr(),
        q(Me),
        q($e),
        xs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ws(t), null;
    case 13:
      if ((q(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(ne), null;
    case 4:
      return tr(), null;
    case 10:
      return hs(t.type._context), null;
    case 22:
    case 23:
      return Ps(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var To = !1,
  xe = !1,
  m3 = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function Ca(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var iu = !1;
function h3(e, t) {
  if (((ia = ui), (e = H1()), cs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            f = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = l + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (h = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === o && (a = l),
                h === i && ++f === r && (s = l),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = g;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (la = { focusedElem: e, selectionRange: n }, ui = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    E = w.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : nt(t.type, y),
                      E
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch ($) {
          ie(t, t.return, $);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (w = iu), (iu = !1), w;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ca(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ea(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[Hr], delete t[ca], delete t[Xp], delete t[Jp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Bd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sa(e, t, n), e = e.sibling; e !== null; ) Sa(e, t, n), (e = e.sibling);
}
function ka(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ka(e, t, n), e = e.sibling; e !== null; ) ka(e, t, n), (e = e.sibling);
}
var me = null,
  rt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Wd(e, t, n), (n = n.sibling);
}
function Wd(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(Di, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || Vn(n, t);
    case 6:
      var r = me,
        o = rt;
      (me = null),
        Ot(e, t, n),
        (me = r),
        (rt = o),
        me !== null &&
          (rt
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (rt
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? wl(e.parentNode, n)
              : e.nodeType === 1 && wl(e, n),
            zr(e))
          : wl(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (o = rt),
        (me = n.stateNode.containerInfo),
        (rt = !0),
        Ot(e, t, n),
        (me = r),
        (rt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Ca(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (Vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ie(n, t, a);
        }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), Ot(e, t, n), (xe = r))
        : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function au(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new m3()),
      t.forEach(function (r) {
        var o = S3.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (me = a.stateNode), (rt = !1);
              break e;
            case 3:
              (me = a.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (me = a.stateNode.containerInfo), (rt = !0);
              break e;
          }
          a = a.return;
        }
        if (me === null) throw Error(_(160));
        Wd(i, l, o), (me = null), (rt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        ie(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Hd(t, e), (t = t.sibling);
}
function Hd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), dt(e), r & 4)) {
        try {
          Tr(3, e, e.return), Wi(3, e);
        } catch (y) {
          ie(e, e.return, y);
        }
        try {
          Tr(5, e, e.return);
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      break;
    case 1:
      et(t, e), dt(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        dt(e),
        r & 512 && n !== null && Vn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Dr(o, "");
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && f1(o, i),
              Ql(a, l);
            var u = Ql(a, i);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                d = s[l + 1];
              f === "style"
                ? g1(o, d)
                : f === "dangerouslySetInnerHTML"
                ? h1(o, d)
                : f === "children"
                ? Dr(o, d)
                : Ya(o, f, d, u);
            }
            switch (a) {
              case "input":
                Wl(o, i);
                break;
              case "textarea":
                p1(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Wn(o, !!i.multiple, g, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wn(o, !!i.multiple, i.defaultValue, !0)
                      : Wn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Hr] = i;
          } catch (y) {
            ie(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((et(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          zr(t.containerInfo);
        } catch (y) {
          ie(e, e.return, y);
        }
      break;
    case 4:
      et(t, e), dt(e);
      break;
    case 13:
      et(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ms = le())),
        r & 4 && au(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (u = xe) || f), et(t, e), (xe = u)) : et(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (A = e, f = e.child; f !== null; ) {
            for (d = A = f; A !== null; ) {
              switch (((h = A), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, h, h.return);
                  break;
                case 1:
                  Vn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      ie(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Vn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    cu(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (A = g)) : cu(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (s = d.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = v1("display", l)));
              } catch (y) {
                ie(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                ie(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      et(t, e), dt(e), r & 4 && au(e);
      break;
    case 21:
      break;
    default:
      et(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Dr(o, ""), (r.flags &= -33));
          var i = lu(e);
          ka(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = lu(e);
          Sa(e, a, l);
          break;
        default:
          throw Error(_(161));
      }
    } catch (s) {
      ie(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function v3(e, t, n) {
  (A = e), Kd(e);
}
function Kd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || To;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || xe;
        a = To;
        var u = xe;
        if (((To = l), (xe = s) && !u))
          for (A = o; A !== null; )
            (l = A),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? uu(o)
                : s !== null
                ? ((s.return = l), (A = s))
                : uu(o);
        for (; i !== null; ) (A = i), Kd(i), (i = i.sibling);
        (A = o), (To = a), (xe = u);
      }
      su(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : su(e);
  }
}
function su(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || Wi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Hc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hc(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && zr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        xe || (t.flags & 512 && Ea(t));
      } catch (h) {
        ie(t, t.return, h);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function cu(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function uu(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wi(4, t);
          } catch (s) {
            ie(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ie(t, o, s);
            }
          }
          var i = t.return;
          try {
            Ea(t);
          } catch (s) {
            ie(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ea(t);
          } catch (s) {
            ie(t, l, s);
          }
      }
    } catch (s) {
      ie(t, t.return, s);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var g3 = Math.ceil,
  Si = Pt.ReactCurrentDispatcher,
  _s = Pt.ReactCurrentOwner,
  Ge = Pt.ReactCurrentBatchConfig,
  W = 0,
  pe = null,
  se = null,
  ve = 0,
  Ie = 0,
  Bn = ln(0),
  de = 0,
  Xr = null,
  wn = 0,
  Hi = 0,
  Ns = 0,
  Ar = null,
  _e = null,
  Ms = 0,
  rr = 1 / 0,
  yt = null,
  ki = !1,
  ba = null,
  Qt = null,
  Ao = !1,
  Bt = null,
  bi = 0,
  Or = 0,
  _a = null,
  Jo = -1,
  qo = 0;
function Ee() {
  return W & 6 ? le() : Jo !== -1 ? Jo : (Jo = le());
}
function Yt(e) {
  return e.mode & 1
    ? W & 2 && ve !== 0
      ? ve & -ve
      : e3.transition !== null
      ? (qo === 0 && (qo = M1()), qo)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : D1(e.type))),
        e)
    : 1;
}
function lt(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (_a = null), Error(_(185)));
  io(e, n, r),
    (!(W & 2) || e !== pe) &&
      (e === pe && (!(W & 2) && (Hi |= n), de === 4 && Ut(e, ve)),
      Pe(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((rr = le() + 500), Ui && an()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  ep(e, t);
  var r = ci(e, e === pe ? ve : 0);
  if (r === 0)
    n !== null && wc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wc(n), t === 1))
      e.tag === 0 ? qp(du.bind(null, e)) : td(du.bind(null, e)),
        Qp(function () {
          !(W & 6) && an();
        }),
        (n = null);
    else {
      switch (R1(r)) {
        case 1:
          n = ts;
          break;
        case 4:
          n = _1;
          break;
        case 16:
          n = si;
          break;
        case 536870912:
          n = N1;
          break;
        default:
          n = si;
      }
      n = ef(n, Gd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gd(e, t) {
  if (((Jo = -1), (qo = 0), W & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n) return null;
  var r = ci(e, e === pe ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = _i(e, r);
  else {
    t = r;
    var o = W;
    W |= 2;
    var i = Qd();
    (pe !== e || ve !== t) && ((yt = null), (rr = le() + 500), mn(e, t));
    do
      try {
        x3();
        break;
      } catch (a) {
        Zd(e, a);
      }
    while (!0);
    ms(),
      (Si.current = i),
      (W = o),
      se !== null ? (t = 0) : ((pe = null), (ve = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ea(e)), o !== 0 && ((r = o), (t = Na(e, o)))), t === 1)
    )
      throw ((n = Xr), mn(e, 0), Ut(e, r), Pe(e, le()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !y3(o) &&
          ((t = _i(e, r)),
          t === 2 && ((i = ea(e)), i !== 0 && ((r = i), (t = Na(e, i)))),
          t === 1))
      )
        throw ((n = Xr), mn(e, 0), Ut(e, r), Pe(e, le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          cn(e, _e, yt);
          break;
        case 3:
          if (
            (Ut(e, r), (r & 130023424) === r && ((t = Ms + 500 - le()), 10 < t))
          ) {
            if (ci(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = sa(cn.bind(null, e, _e, yt), t);
            break;
          }
          cn(e, _e, yt);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - it(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * g3(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sa(cn.bind(null, e, _e, yt), r);
            break;
          }
          cn(e, _e, yt);
          break;
        case 5:
          cn(e, _e, yt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Pe(e, le()), e.callbackNode === n ? Gd.bind(null, e) : null;
}
function Na(e, t) {
  var n = Ar;
  return (
    e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
    (e = _i(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && Ma(t)),
    e
  );
}
function Ma(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function y3(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!st(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ut(e, t) {
  for (
    t &= ~Ns,
      t &= ~Hi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function du(e) {
  if (W & 6) throw Error(_(327));
  Qn();
  var t = ci(e, 0);
  if (!(t & 1)) return Pe(e, le()), null;
  var n = _i(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ea(e);
    r !== 0 && ((t = r), (n = Na(e, r)));
  }
  if (n === 1) throw ((n = Xr), mn(e, 0), Ut(e, t), Pe(e, le()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cn(e, _e, yt),
    Pe(e, le()),
    null
  );
}
function Rs(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((rr = le() + 500), Ui && an());
  }
}
function xn(e) {
  Bt !== null && Bt.tag === 0 && !(W & 6) && Qn();
  var t = W;
  W |= 1;
  var n = Ge.transition,
    r = K;
  try {
    if (((Ge.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (Ge.transition = n), (W = t), !(W & 6) && an();
  }
}
function Ps() {
  (Ie = Bn.current), q(Bn);
}
function mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zp(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((ds(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && mi();
          break;
        case 3:
          tr(), q(Me), q($e), xs();
          break;
        case 5:
          ws(r);
          break;
        case 4:
          tr();
          break;
        case 13:
          q(ne);
          break;
        case 19:
          q(ne);
          break;
        case 10:
          hs(r.type._context);
          break;
        case 22:
        case 23:
          Ps();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (se = e = Xt(e.current, null)),
    (ve = Ie = t),
    (de = 0),
    (Xr = null),
    (Ns = Hi = wn = 0),
    (_e = Ar = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    dn = null;
  }
  return e;
}
function Zd(e, t) {
  do {
    var n = se;
    try {
      if ((ms(), (Qo.current = Ei), Ci)) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ci = !1;
      }
      if (
        ((yn = 0),
        (fe = ue = re = null),
        (Pr = !1),
        (Zr = 0),
        (_s.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (Xr = t), (se = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = ve),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            f = a,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var g = Jc(l);
          if (g !== null) {
            (g.flags &= -257),
              qc(g, l, a, i, t),
              g.mode & 1 && Xc(i, u, t),
              (t = g),
              (s = u);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Xc(i, u, t), Ts();
              break e;
            }
            s = Error(_(426));
          }
        } else if (ee && a.mode & 1) {
          var E = Jc(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              qc(E, l, a, i, t),
              fs(nr(s, a));
            break e;
          }
        }
        (i = s = nr(s, a)),
          de !== 4 && (de = 2),
          Ar === null ? (Ar = [i]) : Ar.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Pd(i, s, t);
              Wc(i, m);
              break e;
            case 1:
              a = s;
              var p = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Qt === null || !Qt.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var $ = Td(i, a, t);
                Wc(i, $);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Xd(n);
    } catch (C) {
      (t = C), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Qd() {
  var e = Si.current;
  return (Si.current = Ei), e === null ? Ei : e;
}
function Ts() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    pe === null || (!(wn & 268435455) && !(Hi & 268435455)) || Ut(pe, ve);
}
function _i(e, t) {
  var n = W;
  W |= 2;
  var r = Qd();
  (pe !== e || ve !== t) && ((yt = null), mn(e, t));
  do
    try {
      w3();
      break;
    } catch (o) {
      Zd(e, o);
    }
  while (!0);
  if ((ms(), (W = n), (Si.current = r), se !== null)) throw Error(_(261));
  return (pe = null), (ve = 0), de;
}
function w3() {
  for (; se !== null; ) Yd(se);
}
function x3() {
  for (; se !== null && !H2(); ) Yd(se);
}
function Yd(e) {
  var t = qd(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xd(e) : (se = t),
    (_s.current = null);
}
function Xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = p3(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (se = null);
        return;
      }
    } else if (((n = f3(n, t, Ie)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function cn(e, t, n) {
  var r = K,
    o = Ge.transition;
  try {
    (Ge.transition = null), (K = 1), $3(e, t, n, r);
  } finally {
    (Ge.transition = o), (K = r);
  }
  return null;
}
function $3(e, t, n, r) {
  do Qn();
  while (Bt !== null);
  if (W & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (tp(e, i),
    e === pe && ((se = pe = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ao ||
      ((Ao = !0),
      ef(si, function () {
        return Qn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ge.transition), (Ge.transition = null);
    var l = K;
    K = 1;
    var a = W;
    (W |= 4),
      (_s.current = null),
      h3(e, n),
      Hd(n, e),
      Up(la),
      (ui = !!ia),
      (la = ia = null),
      (e.current = n),
      v3(n),
      K2(),
      (W = a),
      (K = l),
      (Ge.transition = i);
  } else e.current = n;
  if (
    (Ao && ((Ao = !1), (Bt = e), (bi = o)),
    (i = e.pendingLanes),
    i === 0 && (Qt = null),
    Q2(n.stateNode),
    Pe(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ki) throw ((ki = !1), (e = ba), (ba = null), e);
  return (
    bi & 1 && e.tag !== 0 && Qn(),
    (i = e.pendingLanes),
    i & 1 ? (e === _a ? Or++ : ((Or = 0), (_a = e))) : (Or = 0),
    an(),
    null
  );
}
function Qn() {
  if (Bt !== null) {
    var e = R1(bi),
      t = Ge.transition,
      n = K;
    try {
      if (((Ge.transition = null), (K = 16 > e ? 16 : e), Bt === null))
        var r = !1;
      else {
        if (((e = Bt), (Bt = null), (bi = 0), W & 6)) throw Error(_(331));
        var o = W;
        for (W |= 4, A = e.current; A !== null; ) {
          var i = A,
            l = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (A = u; A !== null; ) {
                  var f = A;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (A = d);
                  else
                    for (; A !== null; ) {
                      f = A;
                      var h = f.sibling,
                        g = f.return;
                      if ((Vd(f), f === u)) {
                        A = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (A = h);
                        break;
                      }
                      A = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var E = y.sibling;
                    (y.sibling = null), (y = E);
                  } while (y !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (A = l);
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (A = m);
                break e;
              }
              A = i.return;
            }
        }
        var p = e.current;
        for (A = p; A !== null; ) {
          l = A;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (A = v);
          else
            e: for (l = p; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wi(9, a);
                  }
                } catch (C) {
                  ie(a, a.return, C);
                }
              if (a === l) {
                A = null;
                break e;
              }
              var $ = a.sibling;
              if ($ !== null) {
                ($.return = a.return), (A = $);
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((W = o), an(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(Di, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (Ge.transition = t);
    }
  }
  return !1;
}
function fu(e, t, n) {
  (t = nr(n, t)),
    (t = Pd(e, t, 1)),
    (e = Zt(e, t, 1)),
    (t = Ee()),
    e !== null && (io(e, 1, t), Pe(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) fu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Qt === null || !Qt.has(r)))
        ) {
          (e = nr(n, e)),
            (e = Td(t, e, 1)),
            (t = Zt(t, e, 1)),
            (e = Ee()),
            t !== null && (io(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function C3(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (ve & n) === n &&
      (de === 4 || (de === 3 && (ve & 130023424) === ve && 500 > le() - Ms)
        ? mn(e, 0)
        : (Ns |= n)),
    Pe(e, t);
}
function Jd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Eo), (Eo <<= 1), !(Eo & 130023424) && (Eo = 4194304))
      : (t = 1));
  var n = Ee();
  (e = kt(e, t)), e !== null && (io(e, t, n), Pe(e, n));
}
function E3(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jd(e, n);
}
function S3(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Jd(e, n);
}
var qd;
qd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), d3(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), ee && t.flags & 1048576 && nd(t, gi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xo(e, t), (e = t.pendingProps);
      var o = Jn(t, $e.current);
      Zn(t, n), (o = Cs(null, t, r, e, o, n));
      var i = Es();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((i = !0), hi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            gs(t),
            (o.updater = Vi),
            (t.stateNode = o),
            (o._reactInternals = t),
            ha(t, r, e, n),
            (t = ya(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && us(t), Ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = b3(r)),
          (e = nt(r, e)),
          o)
        ) {
          case 0:
            t = ga(null, t, r, e, n);
            break e;
          case 1:
            t = nu(null, t, r, e, n);
            break e;
          case 11:
            t = eu(null, t, r, e, n);
            break e;
          case 14:
            t = tu(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        ga(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        nu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Dd(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          ld(e, t),
          xi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = nr(Error(_(423)), t)), (t = ru(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = nr(Error(_(424)), t)), (t = ru(e, t, r, n, o));
            break e;
          } else
            for (
              Le = Gt(t.stateNode.containerInfo.firstChild),
                je = t,
                ee = !0,
                ot = null,
                n = ud(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qn(), r === o)) {
            t = bt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dd(t),
        e === null && fa(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        aa(r, o) ? (l = null) : i !== null && aa(r, i) && (t.flags |= 32),
        Id(e, t),
        Ce(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && fa(t), null;
    case 13:
      return Ld(e, t, n);
    case 4:
      return (
        ys(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = er(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        eu(e, t, r, o, n)
      );
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          Q(yi, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (st(i.value, l)) {
            if (i.children === o.children && !Me.current) {
              t = bt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ct(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      pa(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(_(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  pa(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Ce(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (o = Ze(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = nt(r, t.pendingProps)),
        (o = nt(r.type, o)),
        tu(e, t, r, o, n)
      );
    case 15:
      return Ad(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        Xo(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), hi(t)) : (e = !1),
        Zn(t, n),
        sd(t, r, o),
        ha(t, r, o, n),
        ya(null, t, r, !0, e, n)
      );
    case 19:
      return jd(e, t, n);
    case 22:
      return Od(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function ef(e, t) {
  return b1(e, t);
}
function k3(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ke(e, t, n, r) {
  return new k3(e, t, n, r);
}
function As(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function b3(e) {
  if (typeof e == "function") return As(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ja)) return 11;
    if (e === qa) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ei(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) As(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case An:
        return hn(n.children, o, i, t);
      case Xa:
        (l = 8), (o |= 8);
        break;
      case Fl:
        return (
          (e = Ke(12, n, t, o | 2)), (e.elementType = Fl), (e.lanes = i), e
        );
      case zl:
        return (e = Ke(13, n, t, o)), (e.elementType = zl), (e.lanes = i), e;
      case Ul:
        return (e = Ke(19, n, t, o)), (e.elementType = Ul), (e.lanes = i), e;
      case c1:
        return Ki(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case a1:
              l = 10;
              break e;
            case s1:
              l = 9;
              break e;
            case Ja:
              l = 11;
              break e;
            case qa:
              l = 14;
              break e;
            case jt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ke(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function hn(e, t, n, r) {
  return (e = Ke(7, e, r, t)), (e.lanes = n), e;
}
function Ki(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = c1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function _l(e, t, n) {
  return (e = Ke(6, e, null, t)), (e.lanes = n), e;
}
function Nl(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _3(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = sl(0)),
    (this.expirationTimes = sl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = sl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Os(e, t, n, r, o, i, l, a, s) {
  return (
    (e = new _3(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ke(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    gs(i),
    e
  );
}
function N3(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function tf(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (Sn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return ed(e, n, t);
  }
  return t;
}
function nf(e, t, n, r, o, i, l, a, s) {
  return (
    (e = Os(n, r, !0, e, o, i, l, a, s)),
    (e.context = tf(null)),
    (n = e.current),
    (r = Ee()),
    (o = Yt(n)),
    (i = Ct(r, o)),
    (i.callback = t ?? null),
    Zt(n, i, o),
    (e.current.lanes = o),
    io(e, o, r),
    Pe(e, r),
    e
  );
}
function Gi(e, t, n, r) {
  var o = t.current,
    i = Ee(),
    l = Yt(o);
  return (
    (n = tf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(o, t, l)),
    e !== null && (lt(e, o, l, i), Zo(e, o, l)),
    l
  );
}
function Ni(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Is(e, t) {
  pu(e, t), (e = e.alternate) && pu(e, t);
}
function M3() {
  return null;
}
var rf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ds(e) {
  this._internalRoot = e;
}
Zi.prototype.render = Ds.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Gi(e, t, null, null);
};
Zi.prototype.unmount = Ds.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function () {
      Gi(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function Zi(e) {
  this._internalRoot = e;
}
Zi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = A1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && I1(e);
  }
};
function Ls(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mu() {}
function R3(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ni(l);
        i.call(u);
      };
    }
    var l = nf(t, r, e, 0, null, !1, !1, "", mu);
    return (
      (e._reactRootContainer = l),
      (e[St] = l.current),
      Br(e.nodeType === 8 ? e.parentNode : e),
      xn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ni(s);
      a.call(u);
    };
  }
  var s = Os(e, 0, !1, null, null, !1, !1, "", mu);
  return (
    (e._reactRootContainer = s),
    (e[St] = s.current),
    Br(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      Gi(t, s, n, r);
    }),
    s
  );
}
function Yi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = Ni(l);
        a.call(s);
      };
    }
    Gi(t, l, e, o);
  } else l = R3(n, t, e, o, r);
  return Ni(l);
}
P1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 &&
          (ns(t, n | 1), Pe(t, le()), !(W & 6) && ((rr = le() + 500), an()));
      }
      break;
    case 13:
      xn(function () {
        var r = kt(e, 1);
        if (r !== null) {
          var o = Ee();
          lt(r, e, 1, o);
        }
      }),
        Is(e, 1);
  }
};
rs = function (e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      lt(t, e, 134217728, n);
    }
    Is(e, 134217728);
  }
};
T1 = function (e) {
  if (e.tag === 13) {
    var t = Yt(e),
      n = kt(e, t);
    if (n !== null) {
      var r = Ee();
      lt(n, e, t, r);
    }
    Is(e, t);
  }
};
A1 = function () {
  return K;
};
O1 = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
Xl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = zi(r);
            if (!o) throw Error(_(90));
            d1(r), Wl(r, o);
          }
        }
      }
      break;
    case "textarea":
      p1(e, n);
      break;
    case "select":
      (t = n.value), t != null && Wn(e, !!n.multiple, t, !1);
  }
};
x1 = Rs;
$1 = xn;
var P3 = { usingClientEntryPoint: !1, Events: [ao, Ln, zi, y1, w1, Rs] },
  wr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  T3 = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = S1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || M3,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Oo.isDisabled && Oo.supportsFiber)
    try {
      (Di = Oo.inject(T3)), (ht = Oo);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P3;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ls(t)) throw Error(_(200));
  return N3(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!Ls(e)) throw Error(_(299));
  var n = !1,
    r = "",
    o = rf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Os(e, 1, !1, null, null, n, !1, r, o)),
    (e[St] = t.current),
    Br(e.nodeType === 8 ? e.parentNode : e),
    new Ds(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = S1(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return xn(e);
};
Ue.hydrate = function (e, t, n) {
  if (!Qi(t)) throw Error(_(200));
  return Yi(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!Ls(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = rf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = nf(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[St] = t.current),
    Br(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Zi(t);
};
Ue.render = function (e, t, n) {
  if (!Qi(t)) throw Error(_(200));
  return Yi(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!Qi(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (xn(function () {
        Yi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = Rs;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qi(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Yi(e, t, n, !1, r);
};
Ue.version = "18.2.0-next-9e3b772b8-20220608";
function of() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(of);
    } catch (e) {
      console.error(e);
    }
}
of(), (n1.exports = Ue);
var co = n1.exports;
const lf = Hu(co);
var hu = co;
(Ll.createRoot = hu.createRoot), (Ll.hydrateRoot = hu.hydrateRoot);
const A3 = () =>
    x.jsxs("footer", {
      id: "footer",
      children: [
        x.jsx("hr", { className: "w-11/12 mx-auto" }),
        x.jsx("section", {
          className: "container py-20",
          children: x.jsxs("div", {
            className: "flex justify-center align-center gap-5",
            children: [
              x.jsx("a", {
                href: "mailto:mydeacompanies@gmail.com",
                children: x.jsx("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 15 15",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: x.jsx("path", {
                    d: "M7.94721 0.164594C7.66569 0.0238299 7.33431 0.0238302 7.05279 0.164594L0.552786 3.41459C0.214002 3.58399 0 3.93025 0 4.30902V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V4.30902C15 3.93025 14.786 3.58399 14.4472 3.41459L7.94721 0.164594ZM13.5689 4.09349L7.5 1.05902L1.43105 4.09349L7.5 7.29136L13.5689 4.09349ZM1 4.88366V12H14V4.88366L7.70977 8.19813C7.57848 8.26731 7.42152 8.26731 7.29023 8.19813L1 4.88366Z",
                    fill: "currentColor",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                  }),
                }),
              }),
              x.jsx("a", {
                target: "_blank",
                href: "https://www.instagram.com/mydeacompanies/",
                children: x.jsx("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 15 15",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: x.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z",
                    fill: "currentColor",
                  }),
                }),
              }),
            ],
          }),
        }),
        x.jsx("section", {
          className: "container pb-14 text-center",
          children: x.jsxs("h3", {
            children: [
              "© 2024 Landing page made by",
              " ",
              x.jsx("a", {
                target: "_blank",
                href: "#",
                className:
                  "text-primary transition-all border-primary hover:border-b-2",
                children: "Mydea",
              }),
            ],
          }),
        }),
      ],
    }),
  O3 = () =>
    x.jsxs("section", {
      className: "container text-center py-20 md:py-32 gap-10",
      children: [
        x.jsxs("div", {
          className: "text-center space-y-6 max-w-4xl mx-auto",
          children: [
            x.jsxs("main", {
              className: "text-4xl md:text-6xl font-bold",
              children: [
                x.jsxs("h1", {
                  className: "inline",
                  children: [
                    x.jsx("span", {
                      className:
                        "inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text",
                    }),
                    " ",
                    "Sell your wacky",
                  ],
                }),
                " ",
                x.jsxs("h2", {
                  className: "inline",
                  children: [
                    x.jsx("span", {
                      className:
                        "inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text",
                      children: " Social Media",
                    }),
                    " ",
                    "ideas to brands you love",
                  ],
                }),
              ],
            }),
            x.jsx("div", {
              className: "space-y-4 my-4 md:space-y-4 md:space-x-4",
              children: x.jsx("div", {
                className: "ml-embedded",
                "data-form": "v1o9lQ",
              }),
            }),
          ],
        }),
        x.jsx("div", { className: "shadow" }),
      ],
    });
function af(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = af(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function sf() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = af(e)) && (r && (r += " "), (r += t));
  return r;
}
const js = "-";
function I3(e) {
  const t = L3(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(l) {
    const a = l.split(js);
    return a[0] === "" && a.length !== 1 && a.shift(), cf(a, t) || D3(l);
  }
  function i(l, a) {
    const s = n[l] || [];
    return a && r[l] ? [...s, ...r[l]] : s;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: i };
}
function cf(e, t) {
  var l;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? cf(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const i = e.join(js);
  return (l = t.validators.find(({ validator: a }) => a(i))) == null
    ? void 0
    : l.classGroupId;
}
const vu = /^\[(.+)\]$/;
function D3(e) {
  if (vu.test(e)) {
    const t = vu.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function L3(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    F3(Object.entries(e.classGroups), n).forEach(([i, l]) => {
      Ra(l, r, i, t);
    }),
    r
  );
}
function Ra(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : gu(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (j3(o)) {
        Ra(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([i, l]) => {
      Ra(l, gu(t, i), n, r);
    });
  });
}
function gu(e, t) {
  let n = e;
  return (
    t.split(js).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function j3(e) {
  return e.isThemeGetter;
}
function F3(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((i) =>
          typeof i == "string"
            ? t + i
            : typeof i == "object"
            ? Object.fromEntries(Object.entries(i).map(([l, a]) => [t + l, a]))
            : i
        );
        return [n, o];
      })
    : e;
}
function z3(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(i, l) {
    n.set(i, l), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(i) {
      let l = n.get(i);
      if (l !== void 0) return l;
      if ((l = r.get(i)) !== void 0) return o(i, l), l;
    },
    set(i, l) {
      n.has(i) ? n.set(i, l) : o(i, l);
    },
  };
}
const uf = "!";
function U3(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (l) {
    const a = [];
    let s = 0,
      u = 0,
      f;
    for (let y = 0; y < l.length; y++) {
      let E = l[y];
      if (s === 0) {
        if (E === r && (n || l.slice(y, y + o) === t)) {
          a.push(l.slice(u, y)), (u = y + o);
          continue;
        }
        if (E === "/") {
          f = y;
          continue;
        }
      }
      E === "[" ? s++ : E === "]" && s--;
    }
    const d = a.length === 0 ? l : l.substring(u),
      h = d.startsWith(uf),
      g = h ? d.substring(1) : d,
      w = f && f > u ? f - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: w,
    };
  };
}
function V3(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function B3(e) {
  return { cache: z3(e.cacheSize), splitModifiers: U3(e), ...I3(e) };
}
const W3 = /\s+/;
function H3(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    i = new Set();
  return e
    .trim()
    .split(W3)
    .map((l) => {
      const {
        modifiers: a,
        hasImportantModifier: s,
        baseClassName: u,
        maybePostfixModifierPosition: f,
      } = n(l);
      let d = r(f ? u.substring(0, f) : u),
        h = !!f;
      if (!d) {
        if (!f) return { isTailwindClass: !1, originalClassName: l };
        if (((d = r(u)), !d))
          return { isTailwindClass: !1, originalClassName: l };
        h = !1;
      }
      const g = V3(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: s ? g + uf : g,
        classGroupId: d,
        originalClassName: l,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter((l) => {
      if (!l.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: s, hasPostfixModifier: u } = l,
        f = a + s;
      return i.has(f)
        ? !1
        : (i.add(f), o(s, u).forEach((d) => i.add(a + d)), !0);
    })
    .reverse()
    .map((l) => l.originalClassName)
    .join(" ");
}
function K3() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = df(t)) && (r && (r += " "), (r += n));
  return r;
}
function df(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = df(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function G3(e, ...t) {
  let n,
    r,
    o,
    i = l;
  function l(s) {
    const u = t.reduce((f, d) => d(f), e());
    return (n = B3(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(s);
  }
  function a(s) {
    const u = r(s);
    if (u) return u;
    const f = H3(s, n);
    return o(s, f), f;
  }
  return function () {
    return i(K3.apply(null, arguments));
  };
}
function X(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const ff = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Z3 = /^\d+\/\d+$/,
  Q3 = new Set(["px", "full", "screen"]),
  Y3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  X3 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  J3 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  q3 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function tt(e) {
  return pn(e) || Q3.has(e) || Z3.test(e);
}
function It(e) {
  return sr(e, "length", am);
}
function pn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Io(e) {
  return sr(e, "number", pn);
}
function xr(e) {
  return !!e && Number.isInteger(Number(e));
}
function em(e) {
  return e.endsWith("%") && pn(e.slice(0, -1));
}
function U(e) {
  return ff.test(e);
}
function Dt(e) {
  return Y3.test(e);
}
const tm = new Set(["length", "size", "percentage"]);
function nm(e) {
  return sr(e, tm, pf);
}
function rm(e) {
  return sr(e, "position", pf);
}
const om = new Set(["image", "url"]);
function im(e) {
  return sr(e, om, cm);
}
function lm(e) {
  return sr(e, "", sm);
}
function $r() {
  return !0;
}
function sr(e, t, n) {
  const r = ff.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function am(e) {
  return X3.test(e);
}
function pf() {
  return !1;
}
function sm(e) {
  return J3.test(e);
}
function cm(e) {
  return q3.test(e);
}
function um() {
  const e = X("colors"),
    t = X("spacing"),
    n = X("blur"),
    r = X("brightness"),
    o = X("borderColor"),
    i = X("borderRadius"),
    l = X("borderSpacing"),
    a = X("borderWidth"),
    s = X("contrast"),
    u = X("grayscale"),
    f = X("hueRotate"),
    d = X("invert"),
    h = X("gap"),
    g = X("gradientColorStops"),
    w = X("gradientColorStopPositions"),
    y = X("inset"),
    E = X("margin"),
    m = X("opacity"),
    p = X("padding"),
    v = X("saturate"),
    $ = X("scale"),
    C = X("sepia"),
    S = X("skew"),
    k = X("space"),
    b = X("translate"),
    R = () => ["auto", "contain", "none"],
    P = () => ["auto", "hidden", "clip", "visible", "scroll"],
    F = () => ["auto", U, t],
    I = () => [U, t],
    te = () => ["", tt, It],
    j = () => ["auto", pn, U],
    H = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    z = () => ["solid", "dashed", "dotted", "double", "none"],
    Y = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
      "plus-lighter",
    ],
    M = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    N = () => ["", "0", U],
    O = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    L = () => [pn, Io],
    B = () => [pn, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [$r],
      spacing: [tt, It],
      blur: ["none", "", Dt, U],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Dt, U],
      borderSpacing: I(),
      borderWidth: te(),
      contrast: L(),
      grayscale: N(),
      hueRotate: B(),
      invert: N(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [em, It],
      inset: F(),
      margin: F(),
      opacity: L(),
      padding: I(),
      saturate: L(),
      scale: L(),
      sepia: N(),
      skew: B(),
      space: I(),
      translate: I(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", U] }],
      container: ["container"],
      columns: [{ columns: [Dt] }],
      "break-after": [{ "break-after": O() }],
      "break-before": [{ "break-before": O() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...H(), U] }],
      overflow: [{ overflow: P() }],
      "overflow-x": [{ "overflow-x": P() }],
      "overflow-y": [{ "overflow-y": P() }],
      overscroll: [{ overscroll: R() }],
      "overscroll-x": [{ "overscroll-x": R() }],
      "overscroll-y": [{ "overscroll-y": R() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [y] }],
      "inset-x": [{ "inset-x": [y] }],
      "inset-y": [{ "inset-y": [y] }],
      start: [{ start: [y] }],
      end: [{ end: [y] }],
      top: [{ top: [y] }],
      right: [{ right: [y] }],
      bottom: [{ bottom: [y] }],
      left: [{ left: [y] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", xr, U] }],
      basis: [{ basis: F() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", U] }],
      grow: [{ grow: N() }],
      shrink: [{ shrink: N() }],
      order: [{ order: ["first", "last", "none", xr, U] }],
      "grid-cols": [{ "grid-cols": [$r] }],
      "col-start-end": [{ col: ["auto", { span: ["full", xr, U] }, U] }],
      "col-start": [{ "col-start": j() }],
      "col-end": [{ "col-end": j() }],
      "grid-rows": [{ "grid-rows": [$r] }],
      "row-start-end": [{ row: ["auto", { span: [xr, U] }, U] }],
      "row-start": [{ "row-start": j() }],
      "row-end": [{ "row-end": j() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", U] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", U] }],
      gap: [{ gap: [h] }],
      "gap-x": [{ "gap-x": [h] }],
      "gap-y": [{ "gap-y": [h] }],
      "justify-content": [{ justify: ["normal", ...M()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...M(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...M(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [p] }],
      px: [{ px: [p] }],
      py: [{ py: [p] }],
      ps: [{ ps: [p] }],
      pe: [{ pe: [p] }],
      pt: [{ pt: [p] }],
      pr: [{ pr: [p] }],
      pb: [{ pb: [p] }],
      pl: [{ pl: [p] }],
      m: [{ m: [E] }],
      mx: [{ mx: [E] }],
      my: [{ my: [E] }],
      ms: [{ ms: [E] }],
      me: [{ me: [E] }],
      mt: [{ mt: [E] }],
      mr: [{ mr: [E] }],
      mb: [{ mb: [E] }],
      ml: [{ ml: [E] }],
      "space-x": [{ "space-x": [k] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [k] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", U, t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", U, tt] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Dt] },
            Dt,
            U,
          ],
        },
      ],
      h: [{ h: [U, t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", tt, U] }],
      "max-h": [{ "max-h": [U, t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Dt, It] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Io,
          ],
        },
      ],
      "font-family": [{ font: [$r] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            U,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", pn, Io] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            tt,
            U,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", U] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", U] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [m] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [m] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", tt, It] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", tt, U] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: I() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            U,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", U] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [m] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...H(), rm] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", nm] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            im,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [w] }],
      "gradient-via-pos": [{ via: [w] }],
      "gradient-to-pos": [{ to: [w] }],
      "gradient-from": [{ from: [g] }],
      "gradient-via": [{ via: [g] }],
      "gradient-to": [{ to: [g] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [m] }],
      "border-style": [{ border: [...z(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [m] }],
      "divide-style": [{ divide: z() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...z()] }],
      "outline-offset": [{ "outline-offset": [tt, U] }],
      "outline-w": [{ outline: [tt, It] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: te() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [m] }],
      "ring-offset-w": [{ "ring-offset": [tt, It] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Dt, lm] }],
      "shadow-color": [{ shadow: [$r] }],
      opacity: [{ opacity: [m] }],
      "mix-blend": [{ "mix-blend": Y() }],
      "bg-blend": [{ "bg-blend": Y() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [s] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Dt, U] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [f] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [v] }],
      sepia: [{ sepia: [C] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [s] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [m] }],
      "backdrop-saturate": [{ "backdrop-saturate": [v] }],
      "backdrop-sepia": [{ "backdrop-sepia": [C] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [l] }],
      "border-spacing-x": [{ "border-spacing-x": [l] }],
      "border-spacing-y": [{ "border-spacing-y": [l] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            U,
          ],
        },
      ],
      duration: [{ duration: B() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", U] }],
      delay: [{ delay: B() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", U] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [$] }],
      "scale-x": [{ "scale-x": [$] }],
      "scale-y": [{ "scale-y": [$] }],
      rotate: [{ rotate: [xr, U] }],
      "translate-x": [{ "translate-x": [b] }],
      "translate-y": [{ "translate-y": [b] }],
      "skew-x": [{ "skew-x": [S] }],
      "skew-y": [{ "skew-y": [S] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            U,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            U,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": I() }],
      "scroll-mx": [{ "scroll-mx": I() }],
      "scroll-my": [{ "scroll-my": I() }],
      "scroll-ms": [{ "scroll-ms": I() }],
      "scroll-me": [{ "scroll-me": I() }],
      "scroll-mt": [{ "scroll-mt": I() }],
      "scroll-mr": [{ "scroll-mr": I() }],
      "scroll-mb": [{ "scroll-mb": I() }],
      "scroll-ml": [{ "scroll-ml": I() }],
      "scroll-p": [{ "scroll-p": I() }],
      "scroll-px": [{ "scroll-px": I() }],
      "scroll-py": [{ "scroll-py": I() }],
      "scroll-ps": [{ "scroll-ps": I() }],
      "scroll-pe": [{ "scroll-pe": I() }],
      "scroll-pt": [{ "scroll-pt": I() }],
      "scroll-pr": [{ "scroll-pr": I() }],
      "scroll-pb": [{ "scroll-pb": I() }],
      "scroll-pl": [{ "scroll-pl": I() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", U] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [tt, It, Io] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const dm = G3(um);
function G(...e) {
  return dm(sf(e));
}
const mf = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", {
    ref: n,
    className: G("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t,
  })
);
mf.displayName = "Card";
const hf = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", {
    ref: n,
    className: G("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
hf.displayName = "CardHeader";
const vf = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("h3", {
    ref: n,
    className: G("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
vf.displayName = "CardTitle";
const fm = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("p", { ref: n, className: G("text-sm text-muted-foreground", e), ...t })
);
fm.displayName = "CardDescription";
const gf = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", { ref: n, className: G("p-6 pt-0", e), ...t })
);
gf.displayName = "CardContent";
const pm = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", { ref: n, className: G("flex items-center p-6 pt-0", e), ...t })
);
pm.displayName = "CardFooter";
const mm = () =>
    x.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "lucide lucide-panels-top-left mr-2 w-6 h-6",
      children: [
        x.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
        x.jsx("path", { d: "M3 9h18" }),
        x.jsx("path", { d: "M9 21V9" }),
      ],
    }),
  hm = () =>
    x.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 128 128",
      className: "w-14 fill-primary",
      children: [
        x.jsx("title", { children: "Free Icons" }),
        x.jsxs("g", {
          id: "Layer_8",
          "data-name": "Layer 8",
          children: [
            x.jsx("path", {
              className: "cls-1",
              d: "M60.59,60.42a2.14,2.14,0,0,1,1.89-2.06c.39-.06,1,.63,1.11.72a10,10,0,0,1,.19,1.42c0,.24-.62,5.27-1,7.2-.07.35-.15.7-.26,1.07a7.47,7.47,0,0,1-.27.78,9.1,9.1,0,0,1-.39.84,4.27,4.27,0,0,1-1.17,1.36,4.23,4.23,0,0,1-1.67.59l-1,.08-.56.06q-1.2.15-2.4.36c-.39.07-.82.15-1.17.23h0s0,0,0,0a.21.21,0,0,0-.12.07.16.16,0,0,0,0,.1.38.38,0,0,0,.07.08l0,0,.1.06.19.12c.53.33,1.08.63,1.63.91s1.12.55,1.69.79c.16.07.86.36,1.42.54a2.93,2.93,0,0,1,1.54.74c.11.11.2.22.27.3a2,2,0,0,1,.24.43,7.33,7.33,0,0,1,.31,1,8.28,8.28,0,0,1-.29,2.83l-.13.65c0,.09,0,0,0,.06s0,0,0,0,0,.08-.13.22a4.36,4.36,0,0,0-.31.53.48.48,0,0,0-.08.23c0,.1.1.12.28.1l.12,0c.07,0,.14-.14.22,0,.22.31.56,0,1-.27A28.33,28.33,0,0,1,64.33,81a7.59,7.59,0,0,1,1.44-.47c.44-.12.57.47.48.61-.25.4.19.41.36.57a.65.65,0,0,1,.15.2,26,26,0,0,1-2,2.19l-.77.8-.19.2-.23.22-.56.51c-.68.62-1.4,1.26-1.6,1.41l-.52.41c-.38.33-1,.81-2.05,1.76l-1,.89a2.29,2.29,0,0,1-.32.26l-.26.12-.57.26a3.11,3.11,0,0,1-.3.12l-.23,0-.47.09a1.41,1.41,0,0,1-.52-.15l-.1-.08c-.07,0-.2-.09-.27-.13a1.06,1.06,0,0,1-.41-.38,2.31,2.31,0,0,1-.23-.54c-.07-.17-.15-.27-.18-.35a3.44,3.44,0,0,1,.19-2.09l1.5-6.45.11-.54.06-.3c0-.08,0-.24,0-.25h0s0,0,0,0a.08.08,0,0,0,0,0s0,0,0,0h0l-.21-.09a8.47,8.47,0,0,1-1.86-1.09,3.65,3.65,0,0,0-.75-.41l-.83-.4-.41-.22-.53-.29a21.28,21.28,0,0,1-2.69-1.73,5.94,5.94,0,0,1-1.74-2,3.49,3.49,0,0,1-.31-1,3.12,3.12,0,0,1,0-.54c0-.2.14-.41.13-.59a2,2,0,0,1,.56-.91l.38-.4A1.83,1.83,0,0,1,47.9,70l.55-.35c.19-.11.44-.2.66-.3a11,11,0,0,1,1.47-.51,10.53,10.53,0,0,1,1.17-.23l1.32-.22c.83-.18,1.67-.32,2.51-.43l1.27-.15.64-.06.26,0a.36.36,0,0,0,.18,0,.29.29,0,0,0,.11-.16.64.64,0,0,0,.06-.18c.06-.2.14-.47.2-.73.15-.51,1.23-3.38,1.33-4.15C59.69,62.05,60.59,60.82,60.59,60.42Z",
            }),
            x.jsx("path", {
              className: "cls-2",
              d: "M56.23,92.36c-.24,0-.49,0-.73,0a4.27,4.27,0,0,1-.68-.18c-.22-.08-.42-.22-.63-.32a3.33,3.33,0,0,1-.48-.51A3.4,3.4,0,0,1,53.23,90c0-.25,0-.49-.07-.74v-.49a23,23,0,0,1,.39-3.43c.19-1.1.41-2.18.66-3.25l.39-1.6.08-.32,0-.07.05-.15s-.08-.06-.12-.09l-.07,0-.15-.06-1.57-.6a26.61,26.61,0,0,1-3.19-1.45,17.82,17.82,0,0,1-2.83-1.88,14.2,14.2,0,0,1-1.28-1.18L45,74c-.27-.3-.53-.73-.8-1.09a2.91,2.91,0,0,1-.34-1.23,2.5,2.5,0,0,1,1.54-1.85,9.67,9.67,0,0,1,1.91-.71,31.71,31.71,0,0,1,3.21-.68c1.07-.17,2.13-.31,3.2-.41.53-.05,1.07-.1,1.61-.13l.59,0h.29l1.88-5.28c.74-2,1.46-4,2.42-5.94l.18-.36c.08-.15.18-.3.28-.45a2.26,2.26,0,0,1,.7-.74A2.45,2.45,0,0,1,63.38,55a2.84,2.84,0,0,1,.82.4,4.36,4.36,0,0,1,.58.43,15.1,15.1,0,0,1,1.81,1.87c1.07,1.29,2,2.59,3,3.87.61.8,1.24,1.58,1.87,2.36l1,1.15c.18.21.33.38.5.55l.37-.18.87-.37c.66-.27,1.32-.52,2-.73a12.11,12.11,0,0,1,4.37-.7,1.82,1.82,0,0,1,1,.32c.19.14.24.26.18.37s-.6.33-1.17.62c-1.15.54-3,1.59-5.43,2.6l-.44.18L74,68c-.6.27-1.2.57-1.79.85L71,67.47l-.59-.71-.32-.39c-.42-.53-.84-1.05-1.24-1.58L66.5,61.61c-.79-1-1.57-2.09-2.36-3A8.65,8.65,0,0,0,63,57.48c-.12-.07-.07-.06-.08-.06l0,0a.06.06,0,0,0-.06,0s0,0,0,0l0,0-.14.26c-.19.37-.38.79-.57,1.21-.37.83-.72,1.7-1.07,2.57-.69,1.75-1.36,3.53-2,5.31L58.5,68l-.68,2a40.26,40.26,0,0,0-4.06.23c-1.09.12-2.18.28-3.25.48a23.09,23.09,0,0,0-3.13.77l-.36.13-.14.05a1.09,1.09,0,0,0-.23.14c-.07.05-.15.12-.14.21s.08.16.12.24a2.07,2.07,0,0,0,.26.33,8.43,8.43,0,0,0,.57.64,14.52,14.52,0,0,0,4.23,2.9c.8.38,1.62.72,2.48,1l1.4.53a9.43,9.43,0,0,1,1.9,1L57,80.38l-.29,1.17c-.17.69-.33,1.39-.48,2.09a38.1,38.1,0,0,0-.68,4.17,10.88,10.88,0,0,0,0,1.36,1,1,0,0,0,.19.67.71.71,0,0,0,.68.06.82.82,0,0,0,.19-.06l.28-.13c.19-.08.39-.22.59-.32a22,22,0,0,0,4.38-3.85c.72-.77,1.39-1.58,2.06-2.41l1-1.25L66.2,80l1.88,1.12,1.29.76c.86.5,1.73,1,2.6,1.45s1.74.93,2.63,1.35c.44.22.88.42,1.33.61.22.11.44.18.66.28l.33.12.22.08a3.71,3.71,0,0,0,.5.13c.15,0,.36.07.43-.12a1.71,1.71,0,0,0,.14-.94,11.65,11.65,0,0,0-.75-3.18,25.78,25.78,0,0,0-1.4-3.08c-.27-.5-.55-1-.84-1.49-.1-.18-.42-.7-.62-1.07l-.16-.3c0-.11-.15-.21,0-.31l.32-.61.32-.53.28-.43c.16-.22.32-.45.49-.67A14.46,14.46,0,0,1,76.9,72a10.48,10.48,0,0,1,3.65-2.44,3,3,0,0,1,2-.15,2.68,2.68,0,0,1,.65.25c.5.42-.94,1-3,2.56a12.58,12.58,0,0,0-2.09,2c-.31.37-.6.76-.87,1.15l-.09.15v0l0,.06a.08.08,0,0,0,0,.11l0,0s0,0,.11.17.28.48.42.72c.28.48.54,1,.79,1.49a23.31,23.31,0,0,1,1.35,3.19A15.29,15.29,0,0,1,80.33,83c.07.3.12.61.17.92l0,.49a2,2,0,0,1,0,.25V85a4.1,4.1,0,0,1-.86,2.82l-.24.27-.12.13-.17,0a3.61,3.61,0,0,1-.67.12,4.9,4.9,0,0,1-1.47-.18A13.11,13.11,0,0,1,75,87.48c-.53-.23-1.06-.47-1.57-.72-1-.5-2-1-3-1.56L68,83.85l-1.09-.63h0l-1.32,1.7c-.76,1-1.59,1.89-2.43,2.8a31.28,31.28,0,0,1-2.78,2.59,17.24,17.24,0,0,1-1.62,1.16c-.31.17-.6.35-1,.51a2.88,2.88,0,0,1-.67.25l-.83.2Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M111.88,50c0,.19-.29.15-.64,0-.11-.05-.36-.3-.36-.37a2.55,2.55,0,0,1,0-.4c0-.07.56-.89.76-1.17a3.43,3.43,0,0,1,.64-.73c.49-.43,1-.88,1.48-1.28a1.3,1.3,0,0,1,.38-.22,5.46,5.46,0,0,0,1.26-.79c.06-.05.14-.09.17-.19a4.18,4.18,0,0,1,1.37-.92c.46-.08.86-.24,1.31-.3.07,0,.12,0,.21,0a.43.43,0,0,0,.44,0,1.8,1.8,0,0,1,.58,0,2.34,2.34,0,0,1,.33.09c.1,0,.13.2.11.23s0,.15.09.22l0,.07s-.17.27-.32.57a4.25,4.25,0,0,1-.4.54c0,.05-1.21.87-1.32,1a.53.53,0,0,1-.25.08l-1,.74c-.22.1-.38.28-.67.27a.22.22,0,0,0-.14.06,10.28,10.28,0,0,1-1.07.62c-.18.11-.34.25-.51.37l-.11,0a.59.59,0,0,0-.14.06,9.53,9.53,0,0,0-1.16.94c-.08.08-.61.31-.69.42S111.89,49.93,111.88,50Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M111.62,71.77c-.19.11-.31-.14-.45-.61a1.28,1.28,0,0,1,0-.66,2.18,2.18,0,0,1,.38-.3,8.39,8.39,0,0,1,1.75-.1,3.86,3.86,0,0,1,1.18.22,21.64,21.64,0,0,1,2.21.88,1.59,1.59,0,0,1,.43.3,7.06,7.06,0,0,0,1.47,1,.43.43,0,0,0,.28.1,5.4,5.4,0,0,1,1.63,1.05,14.3,14.3,0,0,1,.91,1.29c0,.06.12.09.11.2,0,.26.12.33.22.45a4,4,0,0,1,.37.54,1.06,1.06,0,0,1,.09.37c0,.11-.18.26-.22.26s-.14.13-.2.21l-.07.08s-1.3-.32-1.41-.37l-.26-.14-.55-.28c-.43-.18-.8-.46-.9-.48s-.14-.14-.2-.23-1.23-.64-1.27-.66c-.22-.18-.5-.24-.63-.55,0-.06-.08-.08-.13-.11-.41-.21-.78-.5-1.18-.75a4.18,4.18,0,0,0-.64-.31s-.06-.06-.1-.09a.41.41,0,0,0-.13-.1,6.5,6.5,0,0,0-1.55-.54c-.12,0-.65-.37-.8-.35S111.7,71.71,111.62,71.77Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M10.08,99.67c-.1.22-.37,0-.76-.35A1.8,1.8,0,0,1,9,98.64a2.27,2.27,0,0,1,.14-.5,15.36,15.36,0,0,1,1.31-1.07,4.1,4.1,0,0,1,1-.57l2.11-.93a1.61,1.61,0,0,1,.49-.13,5,5,0,0,0,1.66-.54.45.45,0,0,0,.24-.17A6.37,6.37,0,0,1,17.68,94c.52,0,1-.14,1.53-.22.08,0,.14,0,.24,0a.55.55,0,0,0,.52,0,4.58,4.58,0,0,1,.66-.08,1.72,1.72,0,0,1,.38.08c.12,0,.16.25.14.29s.06.18.11.26l0,.09a12.06,12.06,0,0,1-1,1.23c0,.1-1.63.92-1.8,1a.68.68,0,0,1-.32.07c-.05,0-1.32.74-1.37.76-.29.1-.53.29-.88.23-.07,0-.12,0-.17,0a10.55,10.55,0,0,1-1.46.52c-.25.08-.48.21-.72.31a.59.59,0,0,1-.14,0,1,1,0,0,0-.18,0,13.45,13.45,0,0,0-1.68.76c-.12.08-.83.15-1,.25S10.13,99.58,10.08,99.67Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M14.57,70.84c.17-.07.22.17.21.6a1.54,1.54,0,0,1-.17.56,2.28,2.28,0,0,1-.31.22c-.07,0-.87,0-1.14,0a2.31,2.31,0,0,1-.75-.08c-.5-.1-1-.17-1.46-.22a.87.87,0,0,1-.31-.1,2.11,2.11,0,0,0-1.07-.18.19.19,0,0,0-.18.06,3.94,3.94,0,0,1-1.14.1,4.62,4.62,0,0,0-1-.19s-.09,0-.15,0-.23-.09-.33-.08-.27,0-.43,0a1.71,1.71,0,0,1-.27-.11A.4.4,0,0,1,6,71.18c0-.1-.07-.18-.11-.27a.15.15,0,0,1,0-.09A3.47,3.47,0,0,1,6.61,70a11.19,11.19,0,0,1,1.53-.59.6.6,0,0,1,.26,0,12.21,12.21,0,0,1,1.21-.2c.24,0,.48,0,.69.15,0,0,.09,0,.14,0a4.94,4.94,0,0,1,1.14.25,5.78,5.78,0,0,0,.57.12l.09.06.12.06c.45.08.86.28,1.31.33.1,0,.52.33.64.33S14.5,70.87,14.57,70.84Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M20.53,56.28c.23,0,.2.33,0,.74a1.37,1.37,0,0,1-.47.44,3.44,3.44,0,0,1-.43,0c-.05,0-.93-.46-1.24-.59a4.44,4.44,0,0,1-.84-.5c-.53-.39-1.09-.75-1.64-1.12a2.35,2.35,0,0,1-.33-.3,4.11,4.11,0,0,0-1.21-1A.34.34,0,0,0,14.1,54a5.51,5.51,0,0,1-1.45-.89c-.29-.37-.62-.69-.94-1,0,0-.11-.06-.12-.16s-.14-.28-.25-.37a2.7,2.7,0,0,1-.42-.41.86.86,0,0,1-.12-.34c0-.11.15-.31.19-.32s.13-.17.18-.27a.44.44,0,0,1,.06-.1,5.16,5.16,0,0,1,1.35.19l.79.38.89.42c.1,0,.15.12.22.2s1.21.62,1.25.65c.21.17.48.26.61.56a.2.2,0,0,0,.12.1,8.33,8.33,0,0,1,1.11.87c.18.15.39.27.58.41a.28.28,0,0,1,.08.11.68.68,0,0,0,.12.12c.47.32.87.73,1.37,1,.12.07.49.62.62.71S20.44,56.27,20.53,56.28Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M42.93,17.33c.84,1.48,1.7,2.93,2.63,4.35s1.95,2.78,3,4.11,2.17,2.62,3.26,3.92,2.24,2.55,3.41,3.77a1.49,1.49,0,0,1-.07,2.12,1.46,1.46,0,0,1-2.15,0c-1.2-1.3-2.33-2.65-3.41-4a50,50,0,0,1-3-4.33c-1-1.48-1.84-3-2.65-4.57A21.14,21.14,0,0,1,42,17.68.52.52,0,0,1,42.93,17.33Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M76.5,16.43A31.28,31.28,0,0,0,75,20.13c-.43,1.28-.8,2.6-1.11,3.94a53.72,53.72,0,0,0-1.31,8c-.07.73-1,1-1.93,1s-1.82-.57-1.69-1.43a51.07,51.07,0,0,1,2.44-8.34,36.5,36.5,0,0,1,1.75-3.95,11.91,11.91,0,0,1,2.53-3.62C76,15.49,76.57,16,76.5,16.43Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M94.08,19.28c-.62,1.58-1.13,3.24-1.65,4.9l-1.55,5c-.53,1.68-1.09,3.36-1.74,5a30.91,30.91,0,0,1-2.4,5,1.41,1.41,0,0,1-1.21.67,1.88,1.88,0,0,1-1.23-.51c-.69-.64-1.13-1.55-.63-2.25a29.26,29.26,0,0,0,2.49-4.23c.77-1.52,1.47-3.1,2.17-4.68l2.09-4.81c.71-1.61,1.43-3.22,2.3-4.8C93,18.2,94.2,18.81,94.08,19.28Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M29,87.07a40.44,40.44,0,0,0,26.56,23.69,35.43,35.43,0,0,0,13.33.83,40.89,40.89,0,0,0,21.52-9.54,37,37,0,0,0,12.34-20,41.17,41.17,0,0,0-.92-21.11A37.28,37.28,0,0,0,95.55,49,38.86,38.86,0,0,0,85.44,40c-2.37-1.52-1.76-2,.76-1.41a22.48,22.48,0,0,1,2.22.7c.82.35,1.7.84,2.67,1.38.47.29,1,.56,1.47.91s1,.75,1.46,1.16,1,.84,1.5,1.29.93,1,1.4,1.54a39.09,39.09,0,0,1,7.45,13,43.54,43.54,0,0,1,2.34,14.69A42.32,42.32,0,0,1,104,87.9a39,39,0,0,1-8,12.59A46.37,46.37,0,0,1,81.47,111a41.07,41.07,0,0,1-17.73,3.82,40.69,40.69,0,0,1-9.88-1.53,45,45,0,0,1-9.15-4,46.74,46.74,0,0,1-8-6,45.07,45.07,0,0,1-6.41-7.58,41.72,41.72,0,0,1-5.2-11,39.15,39.15,0,0,1-1.61-12.07,38.61,38.61,0,0,1,1.29-9.14,45.16,45.16,0,0,1,1.43-4.4L27.18,57c.3-.71.7-1.37,1-2.06a43.35,43.35,0,0,1,5.19-7.59,46.45,46.45,0,0,1,6.66-6.27,44.21,44.21,0,0,1,12.36-6.72A40,40,0,0,1,66.29,32l1.55,0,1.55.12c.52,0,1,.06,1.55.14l1.56.25a23.18,23.18,0,0,1,2.63.56,16.3,16.3,0,0,1,2.15.63l1.74.63a14.7,14.7,0,0,1,1.36.64,7.77,7.77,0,0,1,3,2.23,6.31,6.31,0,0,1,.7,1c.18.43-.48.4-1.78,0-.32-.1-.68-.23-1.08-.38l-1.35-.43-1.57-.53-1.82-.51a38.48,38.48,0,0,0-23.67,1A41.11,41.11,0,0,0,42,43.19a42.83,42.83,0,0,0-4.65,4.08,42,42,0,0,0-4,4.76,38.52,38.52,0,0,0-4.4,8A37,37,0,0,0,26.76,69a35.34,35.34,0,0,0,0,9.19A34.61,34.61,0,0,0,29.09,87Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M26.51,20.08c1.09,1.75,2.31,3.42,3.51,5.1s2.5,3.3,3.74,4.94c2.53,3.26,5.16,6.44,7.91,9.46C43.2,41.33,40,44.21,38.4,42.3c-2.56-3.39-4.9-6.89-7.12-10.47-1.12-1.78-2.13-3.63-3.13-5.48s-1.91-3.75-2.78-5.67C25.15,20.13,26.15,19.61,26.51,20.08Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M31.36,32c1.58,1.73,3.19,3.43,4.87,5,.84.78,1.72,1.51,2.63,2.29s1.78,1.63,2.62,2.48c.93,1-1.07,2.7-1.91,1.7s-1.46-1.76-2.24-2.6-1.62-1.7-2.4-2.61-1.49-1.88-2.19-2.84-1.34-2-2-2.93C30.58,32.14,31.11,31.73,31.36,32Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M76.29,16.69c-.08.18-.3.16-.63,0-.1,0-.31-.25-.3-.32a2.34,2.34,0,0,1,.11-.4,6,6,0,0,1,1.22-1.18,3.85,3.85,0,0,1,1-.58,9.73,9.73,0,0,1,2.34-.56,1.51,1.51,0,0,1,.52,0c.6.06,1.19.06,1.77.08a.7.7,0,0,0,.29,0,6,6,0,0,1,1.92.23l1.4.59c.07,0,.15,0,.19.11s.26.19.4.25a3.38,3.38,0,0,1,.58.27,1.34,1.34,0,0,1,.25.23c.07.07,0,.22-.07.23s-.06.13-.07.2,0,.05,0,.07S86,16,85.87,16L85,15.81a9.1,9.1,0,0,0-1-.1.9.9,0,0,1-.28-.08,13.5,13.5,0,0,0-1.42-.07,3.16,3.16,0,0,1-.8-.12.29.29,0,0,0-.16,0c-.46,0-.91,0-1.37,0a5.09,5.09,0,0,0-.68.12h-.13a.44.44,0,0,0-.16,0,4.94,4.94,0,0,0-1.49.59,4.59,4.59,0,0,0-.78.37C76.65,16.59,76.32,16.6,76.29,16.69Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M43,18c.17.1.14.32,0,.56a.6.6,0,0,1-.34.18,1.79,1.79,0,0,1-.3-.09,2.92,2.92,0,0,0-.89-.53c-.21-.09-.44-.14-.65-.23a5.75,5.75,0,0,0-1.52-.2,1.1,1.1,0,0,1-.36,0,3.25,3.25,0,0,0-1.28,0,.39.39,0,0,0-.21.06A7.17,7.17,0,0,1,36,18l-1.21,0c-.06,0-.12,0-.18,0a.53.53,0,0,0-.38-.06,4.68,4.68,0,0,1-.53,0,1.43,1.43,0,0,1-.27-.09c-.08,0-.06-.17,0-.19s0-.12,0-.17a.15.15,0,0,1,0-.06,4.07,4.07,0,0,1,.46-.29,4.51,4.51,0,0,1,.54-.3l.22-.08c.14-.06.32-.11.5-.17l.84-.25a.82.82,0,0,1,.27,0S37.35,16,37.41,16a1.58,1.58,0,0,1,.75,0,.38.38,0,0,0,.15,0,4.21,4.21,0,0,1,1.32.07c.23,0,.46,0,.69.09l.12.05.16.05a5.8,5.8,0,0,1,1.58.65,2.38,2.38,0,0,1,.35.31,3.21,3.21,0,0,0,.3.37C42.91,17.64,43,18,43,18Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M34.79,84.84a34,34,0,0,0,22.3,19.88,29.73,29.73,0,0,0,11.19.7,34.34,34.34,0,0,0,18.06-8A31,31,0,0,0,96.69,80.57a34.53,34.53,0,0,0-.77-17.71,31.26,31.26,0,0,0-5.29-10,32.53,32.53,0,0,0-8.49-7.49c-2-1.27-1.48-1.68.62-1.15.53.14,1.15.34,1.86.59S86,45.52,86.85,46c.39.24.83.47,1.23.77l1.22,1q.61.51,1.26,1.08c.4.4.78.84,1.17,1.29a34.61,34.61,0,0,1,8.2,23.16A35.35,35.35,0,0,1,97.66,85.5,32.69,32.69,0,0,1,91,96.06a39,39,0,0,1-12.22,8.77A34.29,34.29,0,0,1,63.94,108a34.18,34.18,0,0,1-8.29-1.28A38.29,38.29,0,0,1,48,103.44a39.7,39.7,0,0,1-6.66-5A38.34,38.34,0,0,1,36,92.09a33.46,33.46,0,0,1-5.71-19.36,32,32,0,0,1,1.09-7.66,31.37,31.37,0,0,1,2.83-7.19,36,36,0,0,1,4.35-6.36,38.55,38.55,0,0,1,5.58-5.26,37.52,37.52,0,0,1,10.36-5.63,33.44,33.44,0,0,1,11.62-2h1.3l1.3.1a21,21,0,0,1,2.6.32,23.58,23.58,0,0,1,6.61,2.07A6.6,6.6,0,0,1,80.38,43a6.13,6.13,0,0,1,.6.8c.15.35-.4.33-1.49,0-.54-.18-1.21-.43-2-.68l-1.32-.45-1.52-.43a32.4,32.4,0,0,0-19.88.84,34.42,34.42,0,0,0-9,4.94,33,33,0,0,0-7.22,7.41,31.72,31.72,0,0,0-3.7,6.76,31.09,31.09,0,0,0-1.9,7.46,30.23,30.23,0,0,0,2,15.17Z",
            }),
          ],
        }),
      ],
    }),
  vm = () =>
    x.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 128 128",
      className: "w-14 fill-primary",
      children: [
        x.jsx("title", { children: "Free Icons" }),
        x.jsxs("g", {
          id: "Layer_45",
          "data-name": "Layer 45",
          children: [
            x.jsx("polygon", {
              className: "cls-1",
              points:
                "11.43 77.06 7.94 77.58 38.75 118.18 116.65 109.76 118.12 106.39 40.63 113.44 11.43 77.06",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M67.52,47.87a6,6,0,0,1-6,5.77,5.68,5.68,0,1,1,6-5.77Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M38.25,39.06a20.73,20.73,0,0,0-.65,6.57,25.84,25.84,0,0,0,1.32,6.54,21.35,21.35,0,0,0,.88,2.3c.3.76.68,1.49,1,2.23A68.07,68.07,0,0,0,50.82,71c1.71,2,3.52,3.85,5.34,5.69,2.33,2.38,4.76,4.68,6.89,7.27.66.8.5.76-.22.24a36.43,36.43,0,0,1-3.47-2.78Q55.63,78,52.11,74.24a85.26,85.26,0,0,1-6.63-7.9A59,59,0,0,1,38.9,55.5a27,27,0,0,1-2.42-13.75,22.48,22.48,0,0,1,2.65-8.22,31,31,0,0,1,3.8-5.32,24.3,24.3,0,0,1,5-4.12,29.55,29.55,0,0,1,9.23-3.72c.72-.18,1.43-.29,2.15-.42s1.25-.16,1.72-.19.87,0,1.18,0a4.27,4.27,0,0,1,1.3.24,3.54,3.54,0,0,1,.39.13c.26.17-.84.3-2.76.69-5.69.78-11.62,2.86-16.06,6.92A24.21,24.21,0,0,0,40.94,33a20.72,20.72,0,0,0-2.65,6.11Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M58.48,80.3S51.27,83,54.22,84.46s9.54.47,9.54.47Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M72.46,78.55c.19-.3,3.78-.27,5.2.49s.14,2-.89,2.6A24.56,24.56,0,0,1,69,84Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M25.89,71.12c1.89-.12,3.79-.26,5.68-.43l2.06-.23c2.44-.2,4.87-.39,7.31-.62,1.08-.11,2.16-.26,3.22-.41l2.06-.3a12.51,12.51,0,0,1,2.12,0c.45.05.4.36.07.76a3.85,3.85,0,0,1-1.68,1.18c-1.38.28-2.78.5-4.18.69s-2.83.24-4.26.29c-1.71,0-3.46.37-5.19.55-1.91.19-3.83.35-5.74.52l-3.53.28c-1.79.15-3.58.24-5.35.41-1.38.12-2.72.4-4.1.5-.3,0-.59.08-.9.09-1.14,0-1.5-.12-1.75-.64-.05-.12-.12-.24-.16-.36-.1-.4.35-.75,1.16-.91a57.2,57.2,0,0,1,7.45-.95l5.7-.47Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M107.68,108q-14.42,1.6-28.85,3c-3.51.36-7,.77-10.52,1.1-6.2.55-12.39,1.08-18.61,1.48-1.55.1-3.11.19-4.67.25-.79,0-1.57.06-2.36.06-.4,0-.8,0-1.21,0l-.34,0-.45,0a2.23,2.23,0,0,1-.45-.08l-.31-.33-1.61-1.9-1.49-1.79-3-3.61L23.42,93.35c-4.44-5.46-8.9-10.93-13-16.68-1.26-1.82-.77-1.78.64-.53a62.09,62.09,0,0,1,6.44,6.77L31.07,99.64,37.89,108l3.29,3.93s.06,0,.1,0h.49c.42,0,.86,0,1.3,0,.89,0,1.78,0,2.68-.07,8.6-.4,17.56-1.47,26.36-2.33q14.52-1.45,29-3.06l8.92-1,8.12-1,.3,0,.15,0s.06,0,.06,0l0-.06-.35-.47-14.6-19.39-6.29-8.33Q95.86,74.14,94.34,72c-.52-.7-1-1.42-1.51-2.14-.24-.34-.51-.77-.7-1.06l-.14-.2a1.15,1.15,0,0,0-.26,0l-.41,0h-.55l-1.11,0-2.26.08c-5.69.16-7.55-.06-8.76-.63a6.11,6.11,0,0,1-.8-.38c-.52-.41,1.77-.7,5.92-1,1.54-.09,3.09-.23,4.66-.29.79,0,1.59-.07,2.41-.08h1a3.2,3.2,0,0,1,.51.06,6.24,6.24,0,0,1,1,.23,6.4,6.4,0,0,1,.64.86l.7,1,.67,1,1.38,1.92,2.83,3.87c3.83,5.16,7.77,10.37,11.72,15.59l10,13.24.13,1,.06.51-.56-.23h0v.06l0,.08-.06.17-.13.43c0,.19-.19.32-.41.41-.54.1-1.12.17-1.68.24l-3.93.5-6.94.82Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M77.22,24.79C70.1,19.88,60.43,19.37,52.14,22a24.46,24.46,0,0,0-8.25,4.57,20.89,20.89,0,0,0-2.89,3l-1.26,1.69c-.39.58-.73,1.19-1.1,1.79a20.39,20.39,0,0,0-2.57,7.87c-.61,5.57,1.28,11.21,4.11,16.18a68.61,68.61,0,0,0,9.29,12.25c2.24,2.41,4.56,4.76,6.9,7.11a90.56,90.56,0,0,1,6.76,7.34c1.26,1.68.93,1.55-.42.43C62,83.65,61,82.88,59.84,82c-.6-.46-1.26-.94-1.93-1.5s-1.35-1.16-2-1.81c-2.46-2.32-5-4.6-7.31-7.11a88.41,88.41,0,0,1-6.66-7.87,50.68,50.68,0,0,1-5.41-8.93A27.84,27.84,0,0,1,33.8,44.48a12.33,12.33,0,0,1,0-1.61c0-.54,0-1.09.06-1.63A25.42,25.42,0,0,1,34.36,38a23.19,23.19,0,0,1,1-3.14c.18-.51.44-1,.66-1.49a12.63,12.63,0,0,1,.74-1.47,26.2,26.2,0,0,1,1.76-2.75c.33-.44.64-.88,1-1.31s.71-.85,1.08-1.25a24,24,0,0,1,5.09-4.12A31.44,31.44,0,0,1,59.1,18.31a35.46,35.46,0,0,1,7.06.09A30.17,30.17,0,0,1,73,20.06,25.09,25.09,0,0,1,86.12,31.17a25,25,0,0,1,2.93,12.75,37,37,0,0,1-2.82,12.66c-2.55,6.24-6.44,11.56-10,17-.79,1.19-1.54,2.37-2.3,3.58S72.63,79.18,72.16,80s-1,1.37-1.28,1.89a14.89,14.89,0,0,1-1.57,2,8,8,0,0,1-.57.58c-.24.18-.2-.26.06-1.22a14.86,14.86,0,0,1,.59-1.82,25,25,0,0,1,1-2.47c2.75-5.26,6.36-10.13,9.49-15.21a56.37,56.37,0,0,0,4.16-7.86,36.86,36.86,0,0,0,2.39-8.49A24.86,24.86,0,0,0,85.2,34.67a21.31,21.31,0,0,0-8-9.83Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M58.44,43.55a5.91,5.91,0,0,0-2,4.8,5.85,5.85,0,0,0,6.34,5.29,6.15,6.15,0,0,0,3-1.12,7.92,7.92,0,0,0,2.43-3.26c.19-.38.66-.26,1,.27a2.38,2.38,0,0,1,.3,1.09A2.78,2.78,0,0,1,69.13,52a8,8,0,0,1-9.79,2.82A8.07,8.07,0,0,1,55,50.14a7.51,7.51,0,0,1,1.18-6.78,8,8,0,0,1,3.32-2.64,7.77,7.77,0,0,1,3.16-.61,7.34,7.34,0,0,1,3.1.79,8.06,8.06,0,0,1,3.57,3.39,7.29,7.29,0,0,1,.45,1c.39,1.36.18,1.85-.29,2.12a1.24,1.24,0,0,1-.34.18c-.39.11-.66-.39-.9-1.14A6.38,6.38,0,0,0,63.3,42a5.93,5.93,0,0,0-4.83,1.56Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M97.16,94.19l-2.35.18c-.29,0-.56.09-.85.11-1,.08-2,.17-3,.3a11.67,11.67,0,0,0-1.31.26,9,9,0,0,1-1.65.31c-.16,0-.24-.2-.17-.47a1.12,1.12,0,0,1,.62-.73,13.67,13.67,0,0,1,3.47-.73c.71,0,1.41-.27,2.13-.39s1.57-.25,2.36-.34l1.46-.17c.74-.09,1.49-.15,2.22-.27.57-.08,1.11-.27,1.69-.39.12,0,.25-.07.37-.08.49-.06.66.06.76.51,0,.1,0,.2.07.31a.7.7,0,0,1-.46.76,13.64,13.64,0,0,1-3,.61l-2.34.26Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M23.49,79.2l1.28,0c.16,0,.31,0,.47,0l1.66,0c.24,0,.49,0,.73,0a2.53,2.53,0,0,1,.95,0c.19.05-.06.73-.39.8a7.46,7.46,0,0,1-1.84.15,6.3,6.3,0,0,0-1.14.12l-1.27.14-.79.07c-.4,0-.8.07-1.19.13s-.6.15-.91.22l-.2,0c-.26,0-.34,0-.41-.32a1.21,1.21,0,0,1-.05-.18.44.44,0,0,1,.23-.48,5.46,5.46,0,0,1,1.6-.46c.42-.06.84-.1,1.27-.14Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M99.51,98.12l-1,0c-.12,0-.24.06-.37.06-.44,0-.88,0-1.32.06a2.68,2.68,0,0,0-.56.13,1.41,1.41,0,0,1-.73.14c-.17,0-.22-1.14.06-1.22a4.51,4.51,0,0,1,1.56-.14,4.29,4.29,0,0,0,.94-.1l1-.09.64-.06a7.48,7.48,0,0,0,1-.13c.24-.07.46-.17.69-.26l.15-.06c.19,0,.28,0,.37.28L102,97a.47.47,0,0,1-.11.5,2.55,2.55,0,0,1-1.3.55c-.34.07-.69.1-1,.14Z",
            }),
            x.jsx("path", {
              className: "cls-2",
              d: "M89.73,10.41A1.6,1.6,0,0,1,92,10.18C94.83,12.94,86.29,14,89.73,10.41Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M97.65,22.68a1.63,1.63,0,0,1,2.25-.23C102.75,25.21,94.21,26.25,97.65,22.68Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M23.93,41.47a1.22,1.22,0,0,0-1.7-.18C20.07,43.38,26.54,44.16,23.93,41.47Z",
            }),
          ],
        }),
      ],
    }),
  gm = () =>
    x.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 128 128",
      className: "w-14 fill-primary",
      children: [
        x.jsx("title", { children: "Free Icons" }),
        x.jsxs("g", {
          id: "Layer_4",
          "data-name": "Layer 4",
          children: [
            x.jsx("path", {
              className: "cls-1",
              d: "M105.07,53.84a47.29,47.29,0,0,0-8.45-18.41A40.76,40.76,0,0,0,81,22.72a37,37,0,0,0-7-2.39,43.32,43.32,0,0,0-7.36-1.12,46.56,46.56,0,0,0-25.42,5.71,44.94,44.94,0,0,0-18.6,18.35,49.34,49.34,0,0,0-5.07,22.81,45.6,45.6,0,0,0,2.78,14.69A42.47,42.47,0,0,0,27.8,93.6c2,2.34,1.29,2.59-1.07,1.05a12.21,12.21,0,0,1-2-1.56L23.61,92l-.6-.61-.56-.68a24.69,24.69,0,0,1-2.3-3.17c-.36-.6-.72-1.22-1.09-1.87s-.63-1.35-.94-2.06a46.46,46.46,0,0,1-2.49-7.79c-.25-1.34-.53-2.68-.69-4s-.35-2.7-.35-4.06a53.42,53.42,0,0,1,1.79-16.12A55.57,55.57,0,0,1,19.14,44a38.57,38.57,0,0,1,4.14-7.08A47.1,47.1,0,0,1,35,25.63a54.07,54.07,0,0,1,17.93-8,46.7,46.7,0,0,1,19.83-.39,42.09,42.09,0,0,1,19.46,9.51,47.38,47.38,0,0,1,12.65,17.52,51.57,51.57,0,0,1,3.6,12.83,48.6,48.6,0,0,1-6.66,32.25A46.48,46.48,0,0,1,88,103.83c-8.66,5.85-19.15,8.19-29.39,7.74-1.14-.06-2.25-.15-3.38-.23s-2.23-.25-3.36-.44a44.2,44.2,0,0,1-8.68-2.22,20.76,20.76,0,0,1-2.18-1,7.78,7.78,0,0,1-1.33-1,7.39,7.39,0,0,1-.93-.89c-.27-.4.44-.42,1.9-.1l6.63,1.58c8.61,1.88,17.87,2.27,26.62-.09A41.86,41.86,0,0,0,96.27,92.53,46.74,46.74,0,0,0,105,74.22a45.83,45.83,0,0,0,0-20.35Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M41.22,94.81c-3.73,3.74-7.49,7.47-11.4,11.07-1.43,1.32-2.83,2.66-4.33,3.91a48,48,0,0,1-8.55,6,11.13,11.13,0,0,1-5.34,1.44,5.79,5.79,0,0,1-2.89-.78,4.08,4.08,0,0,1-1.83-2.56,10.32,10.32,0,0,1,.3-4.91,29.17,29.17,0,0,1,1.6-4.37,32.88,32.88,0,0,1,6.48-9.82c.94-.85,1.21-.25,1,.87a14.16,14.16,0,0,1-2.08,4.63,46.07,46.07,0,0,0-2.83,4.9,25.29,25.29,0,0,0-2,5.12c-.41,1.69-.38,3.44.41,4a3.14,3.14,0,0,0,1.91.61,6.52,6.52,0,0,0,2.44-.36,21.78,21.78,0,0,0,5.94-3.37c1.91-1.41,3.74-3,5.54-4.57,3.94-3.49,7.73-7.21,11.49-11l6.9-7c3.48-3.54,7-7.06,10.58-10.48a86.86,86.86,0,0,1,8.61-7.61,21.91,21.91,0,0,1,2.17-1.42c2.91-1.6,4.56-1.28,5.12-.53a1.71,1.71,0,0,1,.33.54c0,.28-.25.4-.7.52a12.94,12.94,0,0,0-2.06.72,20.6,20.6,0,0,0-4,2.56c-1.33,1-2.62,2.12-3.91,3.28C57.53,78.52,55,81,52.47,83.49,48.73,87.22,45,91,41.27,94.85Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M66.45,58.67l.43.51.35.37.48.48a5,5,0,0,1-.06,1c-.06.16-.13.33-.2.49l-.3.45a9.68,9.68,0,0,1-.93,1,1.64,1.64,0,0,0-.24.23c-.06,0,0,.11,0,.13a.29.29,0,0,0,.19.05,1.62,1.62,0,0,0,.44,0,2.63,2.63,0,0,0,.47-.06,9.36,9.36,0,0,0,2-.62,26.63,26.63,0,0,0,3.82-2.13c1.51-1,3-2.13,4.37-3.27,2.52-2,4.93-4.17,7.26-6.42A59.51,59.51,0,0,0,91,43.72a3,3,0,0,0,.45-3.44c-.47-1-2-.55-3.17,0a26.41,26.41,0,0,0-4.51,2.94c-1.44,1.11-2.84,2.28-4.24,3.45-1.72,1.5-.78-1.71,2.63-4.43A31.22,31.22,0,0,1,87,39a8.43,8.43,0,0,1,3.11-1,3,3,0,0,1,2,.63,3.5,3.5,0,0,1,1.07,1.7,4.55,4.55,0,0,1-.49,3.51A17.11,17.11,0,0,1,91,46.32C89.7,47.79,88.37,49.16,87,50.5a118,118,0,0,1-10.44,9.31,42.12,42.12,0,0,1-5.29,3.5,15.59,15.59,0,0,1-3,1.29,7.57,7.57,0,0,1-1.68.32,1.78,1.78,0,0,1-.46,0,3.07,3.07,0,0,1-.57-.06,5.6,5.6,0,0,1-1.07-.44,1.22,1.22,0,0,1-.54-.75,1.36,1.36,0,0,1,.27-.89,4.65,4.65,0,0,1,.69-.78l.53-.51A4.42,4.42,0,0,0,66,61c.07-.11.17-.28.07-.39l-.25-.27-.44-.51a9.77,9.77,0,0,1-.8-1.11,4.45,4.45,0,0,1-.6-1.39,1.72,1.72,0,0,1,.51-1.7,2.93,2.93,0,0,1,.84-.18,4.43,4.43,0,0,1,.72,0,8.68,8.68,0,0,1,1.26.17c.31.07.61.15.92.24l.4.12.23.09c.08.06.12-.07.18-.1l.21-.2.64-.64,2.07-2-1-.49-1.56-.83a34.89,34.89,0,0,1-3-1.85A11,11,0,0,1,64.7,48.5a2.88,2.88,0,0,1-.71-1,1.31,1.31,0,0,1,.26-1.35,4.54,4.54,0,0,1,3.56-1.38,26.23,26.23,0,0,1,3.48.27c.8.1,1.58.2,2.38.32,3,.45,3.86.68,4.43,1.2a3.41,3.41,0,0,1,.38.35c.24.37-1,.47-3.19.23-1.8-.2-3.62-.46-5.41-.65a15.37,15.37,0,0,0-2.6-.08,3.6,3.6,0,0,0-1.06.23,2.06,2.06,0,0,0-.41.23l-.19.14-.08.09h0s0,0,0,0l0,0,.11.14a2.93,2.93,0,0,0,.3.32,12.23,12.23,0,0,0,1.64,1.27A43.21,43.21,0,0,0,71.46,51l1.34.67,1.83.86L70,57.19l-.42.42c-.15.13-.27.35-.47.2L68,57.43A10.19,10.19,0,0,0,67,57.15a6.4,6.4,0,0,0-1-.15h-.39s0,0,0,0v0s0,.16.1.26a6.78,6.78,0,0,0,.86,1.33Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M84.3,62.51a9.65,9.65,0,0,0,.33-1.87c.07-.67.1-1.36.12-2,0-.5,0-1,0-1.51,0-.87,0-1.83-.08-2.61a4,4,0,0,0,0-.57,1.91,1.91,0,0,0-.06-.33s-.06-.12-.11-.11a.43.43,0,0,0-.09.1c-.1.13-.2.3-.31.46a2.09,2.09,0,0,1-.18.27,5,5,0,0,1-.43.5,4.36,4.36,0,0,1-.64.58,7.36,7.36,0,0,1-.63.47,6.23,6.23,0,0,1-1.39.76c-.14,0-.32,0-.29-.17a.21.21,0,0,1-.11-.22,1.17,1.17,0,0,1,0-.32,1.8,1.8,0,0,1,.73-1.31,13.23,13.23,0,0,0,1.12-.82,3.19,3.19,0,0,0,.43-.46c.29-.35.59-.85.87-1.27A2.75,2.75,0,0,1,84,51.5a1.51,1.51,0,0,1,.37-.15c.22,0,.38-.23.71,0a1,1,0,0,1,.57.6,5.23,5.23,0,0,1,.29,1.25c.15,1.29.14,1.7.2,2.41s.09,1.31.09,2A29,29,0,0,1,85.94,62a5.07,5.07,0,0,1-.41,1.42,1.55,1.55,0,0,1-1.47,1,2.16,2.16,0,0,1-1.16-.58,6,6,0,0,1-.73-.8,15.35,15.35,0,0,1-1.1-1.74,18.4,18.4,0,0,1-1.35-2.83,5,5,0,0,1-.21-.69c-.21-.89.06-1.47.55-1.48a.52.52,0,0,1,.29.07c.2.29.38.28.48.73A18.32,18.32,0,0,0,83,61.63a6.82,6.82,0,0,0,.55.72,3.47,3.47,0,0,0,.48.44l0,0s.09-.09.16-.31Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M68.92,62.36a3.19,3.19,0,0,1-.73.66,2.27,2.27,0,0,1-.6.26,4,4,0,0,1-1.26.1c-.28,0-.67-.41-.5-.7l.86-1.36.07-.09,0-.08a2.14,2.14,0,0,0,.13-.22.31.31,0,0,0-.2-.48s-.06,0-.09-.05l-.05,0-.19-.13c-.26-.18-.53-.36-.81-.57a4.58,4.58,0,0,1-.47-.39,3.11,3.11,0,0,1-.29-.31,2,2,0,0,1-.19-.27,1.07,1.07,0,0,1-.12-.19c0-.12-.1-.24-.14-.36l0-.18a2.15,2.15,0,0,1,0-.45,2.06,2.06,0,0,1,.29-1,2.09,2.09,0,0,1,.86-.8,2.05,2.05,0,0,1,.49-.18l.23,0h.1a2.46,2.46,0,0,1,.54,0,2.36,2.36,0,0,1,.38.08,1,1,0,0,1,.39.13,5.88,5.88,0,0,0,1.15.45l.26.07.07,0,0,0,0,0,.74-.7c.54-.54,1.07-1.11,1.56-1.69l.69-.86s0,0,0,0v0h0l-.31-.14-.51-.21-.5-.2-.54-.25-.92-.46a21.42,21.42,0,0,1-2-1.14A5.35,5.35,0,0,1,66,49.45a4,4,0,0,1-.34-.5,1.87,1.87,0,0,1-.14-.27,2.32,2.32,0,0,1-.13-.37,1.74,1.74,0,0,1-.09-.51,3,3,0,0,1,0-.6,2.53,2.53,0,0,1,1.1-1.66,3,3,0,0,1,.79-.37,5.15,5.15,0,0,1,1.52-.2c.4,0,.76,0,1.11.06.7.06,1.37.14,2,.22a4.12,4.12,0,0,0,1.31.06,31,31,0,0,1,5.26.67h.05a1.29,1.29,0,0,0,.31-.13,7.07,7.07,0,0,0,.63-.41c.33-.22.81-.62,1.24-1l1.35-1.06a33.32,33.32,0,0,1,2.87-2,2.55,2.55,0,0,1,.91-.47A8,8,0,0,0,88,40.11a6.14,6.14,0,0,1,3.35-.55,2.76,2.76,0,0,1,1.58.91c.37.37-.17.62-.31.61-.45-.06-.25.32-.34.5a.86.86,0,0,1-.11.19.42.42,0,0,1-.19,0l-.18,0-.25,0a3.31,3.31,0,0,0-1.33.4,17.94,17.94,0,0,0-2.25,1.61s-.41.3-1,.74-1.3,1.08-2,1.77-1.47,1.44-2.09,2.08a10,10,0,0,1-1.76,1.44,4.36,4.36,0,0,1-2.3.63,4.09,4.09,0,0,1-1.11-.07c-.37-.06-1.79-.27-3.19-.42s-2.72-.26-2.83-.26c-.62,0-1.24,0-1.82,0H69a1.42,1.42,0,0,1-.31,0l-.09,0v0s0,.06,0-.1a4.61,4.61,0,0,0-.16-.64c0-.15-.09-.29-.13-.43a2.57,2.57,0,0,0-.16-.37.76.76,0,0,0-.15-.26c-.07-.08-.06-.11-.12-.15s-.08,0,0,0a.45.45,0,0,0,.19-.06l0,0h0l.52-.29h0l.09-.05a4.16,4.16,0,0,0,.79-.7s0,0,.09,0l.44.25c.37.19.83.39,1.35.6l.87.4.71.34.83.42.48.25c.24.13.45.27.68.41a5.26,5.26,0,0,1,2,2.15,3.19,3.19,0,0,1,.25,1.42,1.9,1.9,0,0,1-.14.7,3.33,3.33,0,0,1-.28.69,3.72,3.72,0,0,1-.65.91,6.17,6.17,0,0,1-.48.54l-.4.43A25.27,25.27,0,0,1,72,58.9l-.47.33c-.06.06-.22.13-.34.22l-.38.24A6.38,6.38,0,0,1,70,60a2.6,2.6,0,0,1-.88,0c-1.39-.22-1.86-.55-2.55-.64l-.22,0s-.08,0-.11,0l0,0h0l.07-.28a3.68,3.68,0,0,0,.18-1.5s0,0,0,0a.23.23,0,0,0,.1,0l.35-.18a4,4,0,0,0,.48-.35l.3-.24c.08-.08.22-.22.18-.17l0,0,.1.12c.17.18.44.41.71.65l.22.2a2.83,2.83,0,0,1,.3.3c.21.19.37.39.53.56a4.44,4.44,0,0,1,.39.65,2.84,2.84,0,0,1,.21.46A2.08,2.08,0,0,1,70,61.16,7,7,0,0,1,68.92,62.36Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M44.26,15.62a9.29,9.29,0,0,1,7.24-3c1.14.06,2.54-1.62.87-1.7a13,13,0,0,0-10.15,4c-1.08,1.07,1.3,1.39,2,.66Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M111.67,47.16a8.2,8.2,0,0,1,2.38,8.72c-.41,1.09,1.62,1.07,1.93.23a9.12,9.12,0,0,0-2.46-9.84c-.66-.63-2.57.21-1.85.89Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M116.62,43.57a5.66,5.66,0,0,1,2.79,5.3c0,.89,2,.51,2-.23a6.49,6.49,0,0,0-3.22-6.11c-.61-.39-2.46.47-1.61,1Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M41.44,40.62c.2,2.67-4.89,2.84-4.43-.3.31-2.2,3.72-2.34,4.34-.18A2.23,2.23,0,0,1,41.44,40.62Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M31.38,50.19c.12,1.59-2.93,1.7-2.66-.19a1.35,1.35,0,0,1,2.6-.1A1.5,1.5,0,0,1,31.38,50.19Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M80.78,98.68c.12,1.6-2.94,1.7-2.66-.19a1.35,1.35,0,0,1,2.6-.1A1.67,1.67,0,0,1,80.78,98.68Z",
            }),
          ],
        }),
      ],
    }),
  ym = () =>
    x.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 128 128",
      className: "w-14 fill-primary",
      children: [
        x.jsx("title", { children: "Free Icons" }),
        x.jsxs("g", {
          id: "Layer_14",
          "data-name": "Layer 14",
          children: [
            x.jsx("path", {
              className: "cls-1",
              d: "M16,103.87l-.26-5.22c0-.64-.14-1.27-.17-1.91-.11-2.24-.22-4.49-.37-6.74-.08-1-.19-2-.3-3a20.29,20.29,0,0,1-.28-3.82c0-.4.4-.38.81-.08a2.58,2.58,0,0,1,1,1.58c.21,1.28.42,2.55.58,3.84s.26,2.58.31,3.89c.05,1.57.38,3.17.57,4.77s.36,3.5.5,5.26l.25,3.26c.14,1.64.21,3.29.37,4.92.12,1.27.4,2.51.58,3.77a7.83,7.83,0,0,1,.1.83c0,1.05-.16,1.39-.87,1.61a4.42,4.42,0,0,1-.48.15c-.54.1-1-.32-1.21-1.06a33.15,33.15,0,0,1-.88-6.82c-.11-1.74-.21-3.49-.32-5.24Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M37.18,115.42c3.31.12,6.62.25,9.92.31h3.62c4.26.09,8.52.17,12.77.08,1.88,0,3.77-.14,5.63-.28,1.2-.09,2.39-.22,3.57-.35s2.39-.24,3.44-.47c.65-.12.81.24.33.85a3.91,3.91,0,0,1-.5.5,6.21,6.21,0,0,1-2.57,1.09c-2.49.43-5,.69-7.44.87s-5,.13-7.46.07c-3-.08-6.07.11-9.11.13-3.35,0-6.7,0-10-.07L33.17,118c-3.12-.07-6.24-.18-9.34-.22-2.41,0-4.78.08-7.18,0-.53,0-1-.05-1.58-.12-2-.24-2.58-.54-2.92-1.17a2.43,2.43,0,0,1-.22-.42c-.12-.45.72-.69,2.13-.76,4.21-.36,8.62-.18,13.11-.14l10,.21Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M82.85,88.56l.07,6.2c0,.75.1,1.5.11,2.26,0,2.66.06,5.32.14,8,0,1.18.14,2.36.26,3.52a30.63,30.63,0,0,1,.26,4.44.36.36,0,0,1-.09.23l-.09.07s0,0-.11,0l-.1,0,.06,0H83.1a1.1,1.1,0,0,1-.37-.17,3,3,0,0,1-1.17-1.94,39.64,39.64,0,0,1-.4-4.61c-.08-1.54-.1-3.08-.06-4.64,0-1.86-.19-3.78-.27-5.67L80.61,90l-.11-3.85c-.07-1.94-.1-3.9-.2-5.82-.09-1.5-.31-3-.45-4.46,0-.33-.08-.65-.08-1,0-1.23.2-1.65.78-1.89a2.05,2.05,0,0,1,.38-.16c.4-.1.8.4,1,1.27a52.47,52.47,0,0,1,.81,8.16c.1,2.08.11,4.17.18,6.25Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M99.38,99.27c1-.87,2-1.74,3-2.58.37-.36.2,0,.26-.9l0-2,0-2.85c0-3.35-.09-6.71-.19-10.07,0-1.5-.14-3-.24-4.47-.12-1.9-.29-3.81-.23-5.72,0-1.19,1.2.26,1.43,2.44.33,3.86.71,7.73.72,11.66,0,2.35.23,4.79.29,7.2,0,1.32,0,2.64,0,4v.56a6.71,6.71,0,0,1,0,.78l-1,.87L102,99.52c-1.2,1.08-2.4,2.18-3.58,3.28l-5.4,5c-1.39,1.3-2.7,2.65-4.1,3.92-.31.28-.6.58-.93.84a4.17,4.17,0,0,1-1.41.9,1.26,1.26,0,0,1-.92,0,2.61,2.61,0,0,1-.37-.14c-.31-.18,0-.89.73-1.7,2.39-2.28,5-4.62,7.55-7l5.81-5.37Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M97.45,66.7c1.6-.78,3.18-1.6,4.7-2.49.28-.17.54-.35.8-.53l.36-.25.22-.22a5.67,5.67,0,0,0,1.35-2.64,9.4,9.4,0,0,0,.26-3.22,7.6,7.6,0,0,0-.79-2.78,8.68,8.68,0,0,0-2.3-2.77c-.27-.26-.09-.52.37-.6a2.44,2.44,0,0,1,.9.07,2.87,2.87,0,0,1,1,.61,9.53,9.53,0,0,1,2.33,8.24,11.4,11.4,0,0,1-.72,2.59A5.29,5.29,0,0,1,104.18,65c-1.55,1-3.14,1.94-4.75,2.81-1,.53-2,1-3,1.55-1.51.76-3.07,1.47-4.58,2.22-1.18.57-2.28,1.24-3.45,1.84-.25.13-.49.27-.76.4-1,.43-1.35.42-1.77,0a2.61,2.61,0,0,1-.28-.31c-.26-.38,0-.88.67-1.29A62.35,62.35,0,0,1,92.59,69c1.61-.76,3.24-1.52,4.84-2.35Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M8.53,67.52a11,11,0,0,1,.88-3.32,7.44,7.44,0,0,1,2.19-2.92c.14-.1.22-.19.4-.3a5,5,0,0,1,.66-.32c.36-.11.64-.16,1-.23.56-.07,1.11-.13,1.63-.16,1.05-.07,2.07-.07,3.09-.07,4.07,0,8.07.24,12.08.43l8.76.41c10.28.55,20.57,1.15,30.83,1,2.27-.06,4.55-.17,6.8-.4.57,0,1.13-.12,1.69-.19.26,0,.59-.06.81-.11l.27-.09.36-.16c1-.45,2-1,3-1.54C88,56.71,93.1,53.71,98.69,51.74c1.78-.57,1.66,0,.39.92a50.28,50.28,0,0,1-6.54,4.08c-2.61,1.38-5.19,2.83-7.82,4.25-1.33.71-2.58,1.42-4.1,2.09a5,5,0,0,1-1.42.39l-1.14.13c-.75.09-1.51.14-2.27.21a162.26,162.26,0,0,1-18.05.13c-7.19-.29-14.67-.5-22-.85-4-.19-8.06-.39-12.09-.52-2-.07-4-.11-6-.09-1,0-2,.05-2.94.13L14,62.7c-.2,0-.43.09-.58.14a.26.26,0,0,1-.15,0,1.5,1.5,0,0,1-.23.2,3.12,3.12,0,0,0-.46.43c-1.44,1.56-1.91,4-1.78,6.33a13.3,13.3,0,0,0,.68,3.42,5.64,5.64,0,0,0,.31.81,5.5,5.5,0,0,0,.38.77,4.78,4.78,0,0,0,.44.72l.24.35a2.49,2.49,0,0,0,.23.23,5.76,5.76,0,0,0,2.2,1A22.52,22.52,0,0,0,18,77.7c1.82.27,3.68.4,5.55.49,3.73.17,7.48.15,11.2.06,5.8-.14,11.47-.59,17.21-.85,1.27-.06,2.51-.14,3.78-.18,4.74-.13,6.27.07,7.28.74a5,5,0,0,1,.66.46c.44.53-1.48.9-4.91,1.11-10.21.65-21,1.37-32,1.22-2,0-4.09-.12-6.16-.29a32.23,32.23,0,0,1-6.32-1.06l-.83-.29c-.29-.11-.58-.26-.86-.39s-.6-.37-.89-.56l-.45-.43a2.91,2.91,0,0,1-.36-.42A11.59,11.59,0,0,1,9.25,74.2a15.41,15.41,0,0,1-.78-6.67Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M23.93,55.79c1.19-.26,2.38-.55,3.56-.88.43-.13.84-.3,1.27-.43l4.59-1.34c.67-.2,1.34-.45,2-.7a9.16,9.16,0,0,1,2.59-.79c.29,0,.34.23.23.59a2.18,2.18,0,0,1-.85,1.14,30.82,30.82,0,0,1-5.16,2c-1.09.27-2.14.77-3.22,1.14s-2.4.76-3.61,1.11l-2.25.59c-1.13.29-2.29.52-3.41.82-.87.24-1.7.56-2.57.78-.19,0-.37.11-.57.15-.72.13-1,0-1.22-.38a2.09,2.09,0,0,1-.17-.28c-.13-.33.1-.69.59-.94a18.77,18.77,0,0,1,4.61-1.7l3.57-.89Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M83.9,47.55l3.07.37c.37,0,.75,0,1.12.07l4,.51c.58.07,1.17.09,1.75.11a7.1,7.1,0,0,1,2.24.24c.23.08.2.33,0,.61a1.64,1.64,0,0,1-1,.7A20.69,20.69,0,0,1,90.44,50a22,22,0,0,0-2.82-.16l-3.1-.23-1.91-.14c-1-.07-1.93-.16-2.89-.17-.75,0-1.48.1-2.22.1-.16,0-.32,0-.48,0-.61,0-.79-.18-.91-.63,0-.1-.06-.2-.07-.3-.05-.34.21-.62.66-.74a11.56,11.56,0,0,1,4.1-.46c1,0,2.07.12,3.1.22Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M29.93,80.41c2.52,0,5.06,0,7.59-.07l2.78-.15c3.26-.11,6.54-.2,9.81-.35,1.45-.07,2.91-.17,4.35-.27A51.74,51.74,0,0,1,60,79.39c.58,0,.5.27,0,.53a6.79,6.79,0,0,1-2.42.64c-3.75.3-7.5.68-11.31.85-2.28.09-4.64.39-7,.52-2.57.15-5.14.26-7.72.3-1.58,0-3.17,0-4.76,0a58.51,58.51,0,0,1-7.23-.56,27.49,27.49,0,0,1-2.79-.55,7.75,7.75,0,0,1-2.76-1.22,3.64,3.64,0,0,1-.56-.48L13.12,79A6.48,6.48,0,0,1,12,77.89a.89.89,0,0,1,0-1.14.87.87,0,0,1,.35-.27c.22-.07.41.07.59.13a1.94,1.94,0,0,1,.79.3,4.62,4.62,0,0,1,1.19.93,4.36,4.36,0,0,0,.73.55,8,8,0,0,0,2,.79,27.77,27.77,0,0,0,4.76.83c2.47.24,5,.34,7.56.35Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M98.32,69.93c-.68.33-1.39.6-2.08.89-.25.09-.49.23-.75.32l-2.7.92a11.84,11.84,0,0,0-1.17.46,7.38,7.38,0,0,1-1.49.56c-.33.08-.28-.83.24-1.17a12.88,12.88,0,0,1,3-1.33,12.79,12.79,0,0,0,1.82-.81c.66-.3,1.31-.61,2-.94.39-.2.79-.4,1.18-.63a15.84,15.84,0,0,0,1.7-1.09c.43-.3.77-.71,1.17-1l.25-.22c.35-.25.52-.25.8-.06l.19.14c.19.16.18.44,0,.73a5.42,5.42,0,0,1-.94,1.19,6.87,6.87,0,0,1-1.18,1,20.42,20.42,0,0,1-2,1.15Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M47.11,100.09,47,95.78c0-.53-.09-1-.1-1.57,0-1.86,0-3.72,0-5.59V86.14a8.47,8.47,0,0,1,.38-3.24c.13-.34.43-.17.72.17a2.52,2.52,0,0,1,.62,1.38c0,1,.13,2,.2,3.08s0,2.1,0,3.17a32.28,32.28,0,0,0,.29,3.9l.29,4.32.19,2.66c.1,1.35.17,2.7.34,4,.12,1,.41,2,.56,3.08a6.86,6.86,0,0,1,.12.68c.08.86-.14,1.15-.76,1.35-.14,0-.26.1-.38.12A1.1,1.1,0,0,1,48.3,110a23.77,23.77,0,0,1-.95-5.58c-.12-1.44-.19-2.88-.3-4.33Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M53.42,95.49q-4.05,0-8.09.11c-1,0-2,.12-2.95.14-3.47.08-6.94.16-10.41.34-1.54.09-3.08.23-4.59.4-1.94.22-3.92.56-5.79.64-.56,0-.64-.34-.22-.86a3.47,3.47,0,0,1,1-.79,3.92,3.92,0,0,1,1.51-.53A99.77,99.77,0,0,1,36,94c2.43,0,4.94-.3,7.42-.42q4.08-.17,8.18-.25l5-.08,7.62-.07c2,0,3.89-.19,5.84-.25.43,0,.85,0,1.28,0,1.61,0,2.12.22,2.43.83a2.67,2.67,0,0,1,.2.42c.12.46-.55.82-1.71.91-1.71.13-3.48.26-5.27.27s-3.6,0-5.43.08c-2.7,0-5.43,0-8.15.09Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M97.08,83.65v4c0,.49.06,1,.06,1.45,0,1.71-.05,3.42,0,5.13,0,.76,0,1.52.09,2.27a19,19,0,0,1,0,2.92c-.07.6-.9-.15-1.12-1.23a24.16,24.16,0,0,1-.53-5.89c0-1.19-.17-2.41-.24-3.63s-.11-2.67-.15-4l-.07-2.47c0-1.25,0-2.51-.13-3.75-.06-1-.22-1.9-.31-2.87a4.64,4.64,0,0,1,0-.64c0-.81.28-1.07.74-1.2l.29-.09a.51.51,0,0,1,.45.2,1.4,1.4,0,0,1,.36.65A12,12,0,0,1,96.89,77c.1.87.13,1.75.16,2.64,0,1.33,0,2.67.08,4Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M93,88c.74-.48,1.48-1,2.19-1.53.26-.2.48-.44.74-.64l2.75-2.18c.4-.33.79-.68,1.17-1a8.61,8.61,0,0,1,1.56-1.26c.36-.22.47.74,0,1.29a28.55,28.55,0,0,1-2.88,2.83c-.66.49-1.22,1.13-1.85,1.69s-1.43,1.2-2.18,1.76q-.69.51-1.41,1c-.73.49-1.51.9-2.27,1.34-.6.32-1.16.72-1.79,1a1.4,1.4,0,0,1-.42.18.89.89,0,0,1-.64,0,.87.87,0,0,1-.35-.36,1.73,1.73,0,0,1-.13-.21c-.1-.23.06-.55.35-.88a21.06,21.06,0,0,1,2.93-1.66A26.1,26.1,0,0,0,93,87.91Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M104,87.83s11.84-.09,13.85,5.36c2.43,6.56-15.26,16.41-31.12,19.14L103.66,97Z",
            }),
            x.jsx("path", {
              className: "cls-1",
              d: "M62.4,24.22A1.25,1.25,0,0,1,64,23.4C67.25,24.41,61.33,27.67,62.4,24.22Z",
            }),
            x.jsx("path", {
              className: "cls-2",
              d: "M50.21,11.76a1.24,1.24,0,0,1,1.57-.82C55.06,12,49.14,15.21,50.21,11.76Z",
            }),
            x.jsx("path", {
              className: "cls-2",
              d: "M26.22,31.38a1.25,1.25,0,0,1,1.57-.82C31.07,31.57,25.15,34.83,26.22,31.38Z",
            }),
            x.jsx("path", {
              className: "cls-2",
              d: "M93.25,24.22a1.25,1.25,0,0,1,1.57-.82C98.1,24.41,92.18,27.67,93.25,24.22Z",
            }),
            x.jsx("path", {
              className: "cls-3",
              d: "M38.24,48.36a12.66,12.66,0,0,1-.91-4.4,6.71,6.71,0,0,1,1.6-4.67,6.3,6.3,0,0,1,3.14-1.9,7,7,0,0,1,3.12,0,9.92,9.92,0,0,1,2.65,1.09A18.08,18.08,0,0,1,52,42a39.52,39.52,0,0,1,2.95,3.54,12.46,12.46,0,0,1,2.66,5.34c.09.67-.65.71-1.46.46a3.62,3.62,0,0,1-2.18-1.61,28.08,28.08,0,0,0-6.56-8.29,6.31,6.31,0,0,0-2.7-1.32,4.1,4.1,0,0,0-2.63.29,3.09,3.09,0,0,0-1.78,2.09,7.25,7.25,0,0,0,.08,3.33,10.2,10.2,0,0,0,1.9,3.95,16,16,0,0,0,5.35,4.36,23.83,23.83,0,0,0,5.1,1.81l1.16.28c1.43.39,1.84.67,2,1.49a3.78,3.78,0,0,1,.08.56c0,.59-.73.92-1.88.77a23.58,23.58,0,0,1-10.14-3.91,15.76,15.76,0,0,1-5.69-6.69Z",
            }),
            x.jsx("path", {
              className: "cls-3",
              d: "M73.11,42.22a9.19,9.19,0,0,0,.68-3.93,1.52,1.52,0,0,0-.45-1A2,2,0,0,0,72,37a4.89,4.89,0,0,0-1.41.33l-.7.24-.7.34a17.84,17.84,0,0,0-4.64,3.37,30.46,30.46,0,0,0-3.86,4.59,27.61,27.61,0,0,0-2.61,4.69c-.93,2.09-1.54,4.28-2.33,6.38-.25.65-1,.45-1.5-.32a4,4,0,0,1-.46-3.51,33.29,33.29,0,0,1,7.89-12.72,44.85,44.85,0,0,1,3.44-3.11,14.16,14.16,0,0,1,4.18-2.45,9.09,9.09,0,0,1,2.75-.57,4,4,0,0,1,4.47,3.91,9.49,9.49,0,0,1-.18,2.74A19.38,19.38,0,0,1,74,46.78a22.94,22.94,0,0,1-6.37,6.88c-1.94,1.43-3.91,2.69-5.83,3.93l-1.25.83c-1.58,1-2.15,1.17-2.91.76a3.53,3.53,0,0,1-.51-.28c-.48-.37-.11-1.23,1-2.13,3.36-2.69,7.31-4.48,10.1-7.23a20.43,20.43,0,0,0,2.8-3.4,16.47,16.47,0,0,0,2-3.94Z",
            }),
          ],
        }),
      ],
    }),
  wm = [
    {
      icon: x.jsx(hm, {}),
      title: "Have an Idea",
      description:
        "You come up with a funny idea and it would be hilarious if a brand does it.",
    },
    {
      icon: x.jsx(vm, {}),
      title: "Pitch your Idea",
      description:
        "We leverage instagram's platform and reach so that you can directly pitch your funny idea.",
    },
    {
      icon: x.jsx(gm, {}),
      title: "Select Brands",
      description:
        "You just select the brand you want to share with and it reaches them in just 1 click.",
    },
    {
      icon: x.jsx(ym, {}),
      title: "Get Paid",
      description:
        "Brand loves your idea and you get paid directly in your bank account.",
    },
  ],
  xm = () =>
    x.jsxs("section", {
      id: "howItWorks",
      className: "container text-center py-24 sm:py-32",
      children: [
        x.jsxs("h2", {
          className: "text-3xl md:text-4xl font-bold ",
          children: [
            "How It",
            " ",
            x.jsxs("span", {
              className:
                "bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text",
              children: ["Works", " "],
            }),
            "Step-by-Step Guide",
          ],
        }),
        x.jsx("p", {
          className: "md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground",
        }),
        x.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: wm.map(({ icon: e, title: t, description: n }) =>
            x.jsxs(
              mf,
              {
                className: "bg-muted/50",
                children: [
                  x.jsx(hf, {
                    children: x.jsxs(vf, {
                      className: "grid gap-4 place-items-center",
                      children: [e, t],
                    }),
                  }),
                  x.jsx(gf, { children: n }),
                ],
              },
              t
            )
          ),
        }),
      ],
    });
function T() {
  return (
    (T = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    T.apply(this, arguments)
  );
}
function kn(e, t = []) {
  let n = [];
  function r(i, l) {
    const a = c.createContext(l),
      s = n.length;
    n = [...n, l];
    function u(d) {
      const { scope: h, children: g, ...w } = d,
        y = (h == null ? void 0 : h[e][s]) || a,
        E = c.useMemo(() => w, Object.values(w));
      return c.createElement(y.Provider, { value: E }, g);
    }
    function f(d, h) {
      const g = (h == null ? void 0 : h[e][s]) || a,
        w = c.useContext(g);
      if (w) return w;
      if (l !== void 0) return l;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, f];
  }
  const o = () => {
    const i = n.map((l) => c.createContext(l));
    return function (a) {
      const s = (a == null ? void 0 : a[e]) || i;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: s } }), [a, s]);
    };
  };
  return (o.scopeName = e), [r, $m(o, ...t)];
}
function $m(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const l = r.reduce((a, { useScope: s, scopeName: u }) => {
        const d = s(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function D(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Cm(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function uo(...e) {
  return (t) => e.forEach((n) => Cm(n, t));
}
function ae(...e) {
  return c.useCallback(uo(...e), e);
}
const $n = c.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = c.Children.toArray(n),
    i = o.find(Sm);
  if (i) {
    const l = i.props.children,
      a = o.map((s) =>
        s === i
          ? c.Children.count(l) > 1
            ? c.Children.only(null)
            : c.isValidElement(l)
            ? l.props.children
            : null
          : s
      );
    return c.createElement(
      Pa,
      T({}, r, { ref: t }),
      c.isValidElement(l) ? c.cloneElement(l, void 0, a) : null
    );
  }
  return c.createElement(Pa, T({}, r, { ref: t }), n);
});
$n.displayName = "Slot";
const Pa = c.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return c.isValidElement(n)
    ? c.cloneElement(n, { ...km(r, n.props), ref: t ? uo(t, n.ref) : n.ref })
    : c.Children.count(n) > 1
    ? c.Children.only(null)
    : null;
});
Pa.displayName = "SlotClone";
const Em = ({ children: e }) => c.createElement(c.Fragment, null, e);
function Sm(e) {
  return c.isValidElement(e) && e.type === Em;
}
function km(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
const bm = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Z = bm.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const { asChild: i, ...l } = r,
        a = i ? $n : t;
      return (
        c.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        c.createElement(a, T({}, l, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function yf(e, t) {
  e && co.flushSync(() => e.dispatchEvent(t));
}
function he(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    c.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function Xi({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = _m({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r,
    a = he(n),
    s = c.useCallback(
      (u) => {
        if (i) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && a(d);
        } else o(u);
      },
      [i, e, o, a]
    );
  return [l, s];
}
function _m({ defaultProp: e, onChange: t }) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    i = he(t);
  return (
    c.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
const Nm = c.createContext(void 0);
function Fs(e) {
  const t = c.useContext(Nm);
  return e || t || "ltr";
}
const _t =
  globalThis != null && globalThis.document ? c.useLayoutEffect : () => {};
function Mm(e, t) {
  return c.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Xe = (e) => {
  const { present: t, children: n } = e,
    r = Rm(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n),
    i = ae(r.ref, o.ref);
  return typeof n == "function" || r.isPresent
    ? c.cloneElement(o, { ref: i })
    : null;
};
Xe.displayName = "Presence";
function Rm(e) {
  const [t, n] = c.useState(),
    r = c.useRef({}),
    o = c.useRef(e),
    i = c.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [a, s] = Mm(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    c.useEffect(() => {
      const u = Do(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    _t(() => {
      const u = r.current,
        f = o.current;
      if (f !== e) {
        const h = i.current,
          g = Do(u);
        e
          ? s("MOUNT")
          : g === "none" || (u == null ? void 0 : u.display) === "none"
          ? s("UNMOUNT")
          : s(f && h !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, s]),
    _t(() => {
      if (t) {
        const u = (d) => {
            const g = Do(r.current).includes(d.animationName);
            d.target === t && g && co.flushSync(() => s("ANIMATION_END"));
          },
          f = (d) => {
            d.target === t && (i.current = Do(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: c.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Do(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const Pm = E2.useId || (() => {});
let Tm = 0;
function Jt(e) {
  const [t, n] = c.useState(Pm());
  return (
    _t(() => {
      e || n((r) => r ?? String(Tm++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function Ji(e) {
  const t = e + "CollectionProvider",
    [n, r] = kn(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    l = (g) => {
      const { scope: w, children: y } = g,
        E = Be.useRef(null),
        m = Be.useRef(new Map()).current;
      return Be.createElement(o, { scope: w, itemMap: m, collectionRef: E }, y);
    },
    a = e + "CollectionSlot",
    s = Be.forwardRef((g, w) => {
      const { scope: y, children: E } = g,
        m = i(a, y),
        p = ae(w, m.collectionRef);
      return Be.createElement($n, { ref: p }, E);
    }),
    u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    d = Be.forwardRef((g, w) => {
      const { scope: y, children: E, ...m } = g,
        p = Be.useRef(null),
        v = ae(w, p),
        $ = i(u, y);
      return (
        Be.useEffect(
          () => (
            $.itemMap.set(p, { ref: p, ...m }), () => void $.itemMap.delete(p)
          )
        ),
        Be.createElement($n, { [f]: "", ref: v }, E)
      );
    });
  function h(g) {
    const w = i(e + "CollectionConsumer", g);
    return Be.useCallback(() => {
      const E = w.collectionRef.current;
      if (!E) return [];
      const m = Array.from(E.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        ($, C) => m.indexOf($.ref.current) - m.indexOf(C.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: l, Slot: s, ItemSlot: d }, h, r];
}
function Am(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = he(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const Ta = "dismissableLayer.update",
  Om = "dismissableLayer.pointerDownOutside",
  Im = "dismissableLayer.focusOutside";
let yu;
const Dm = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  zs = c.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: l,
        onInteractOutside: a,
        onDismiss: s,
        ...u
      } = e,
      f = c.useContext(Dm),
      [d, h] = c.useState(null),
      g =
        (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, w] = c.useState({}),
      y = ae(t, (b) => h(b)),
      E = Array.from(f.layers),
      [m] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = E.indexOf(m),
      v = d ? E.indexOf(d) : -1,
      $ = f.layersWithOutsidePointerEventsDisabled.size > 0,
      C = v >= p,
      S = Lm((b) => {
        const R = b.target,
          P = [...f.branches].some((F) => F.contains(R));
        !C ||
          P ||
          (i == null || i(b),
          a == null || a(b),
          b.defaultPrevented || s == null || s());
      }, g),
      k = jm((b) => {
        const R = b.target;
        [...f.branches].some((F) => F.contains(R)) ||
          (l == null || l(b),
          a == null || a(b),
          b.defaultPrevented || s == null || s());
      }, g);
    return (
      Am((b) => {
        v === f.layers.size - 1 &&
          (o == null || o(b),
          !b.defaultPrevented && s && (b.preventDefault(), s()));
      }, g),
      c.useEffect(() => {
        if (d)
          return (
            r &&
              (f.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((yu = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              f.layersWithOutsidePointerEventsDisabled.add(d)),
            f.layers.add(d),
            wu(),
            () => {
              r &&
                f.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = yu);
            }
          );
      }, [d, g, r, f]),
      c.useEffect(
        () => () => {
          d &&
            (f.layers.delete(d),
            f.layersWithOutsidePointerEventsDisabled.delete(d),
            wu());
        },
        [d, f]
      ),
      c.useEffect(() => {
        const b = () => w({});
        return (
          document.addEventListener(Ta, b),
          () => document.removeEventListener(Ta, b)
        );
      }, []),
      c.createElement(
        Z.div,
        T({}, u, {
          ref: y,
          style: {
            pointerEvents: $ ? (C ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: D(e.onFocusCapture, k.onFocusCapture),
          onBlurCapture: D(e.onBlurCapture, k.onBlurCapture),
          onPointerDownCapture: D(
            e.onPointerDownCapture,
            S.onPointerDownCapture
          ),
        })
      )
    );
  });
function Lm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = he(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return (
    c.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let f = function () {
              wf(Om, n, u, { discrete: !0 });
            };
            var s = f;
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = f),
                t.addEventListener("click", o.current, { once: !0 }))
              : f();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        l = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(l),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function jm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = he(e),
    r = c.useRef(!1);
  return (
    c.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          wf(Im, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function wu() {
  const e = new CustomEvent(Ta);
  document.dispatchEvent(e);
}
function wf(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? yf(o, i) : o.dispatchEvent(i);
}
function Fm(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
const zm = c.forwardRef((e, t) =>
    c.createElement(
      Z.span,
      T({}, e, {
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      })
    )
  ),
  Um = zm,
  fo = "NavigationMenu",
  [Us, xf, Vm] = Ji(fo),
  [Aa, Bm, Wm] = Ji(fo),
  [Vs, Sg] = kn(fo, [Vm, Wm]),
  [Hm, ct] = Vs(fo),
  [Km, Gm] = Vs(fo),
  Zm = c.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        delayDuration: l = 200,
        skipDelayDuration: a = 300,
        orientation: s = "horizontal",
        dir: u,
        ...f
      } = e,
      [d, h] = c.useState(null),
      g = ae(t, (R) => h(R)),
      w = Fs(u),
      y = c.useRef(0),
      E = c.useRef(0),
      m = c.useRef(0),
      [p, v] = c.useState(!0),
      [$ = "", C] = Xi({
        prop: r,
        onChange: (R) => {
          const P = R !== "",
            F = a > 0;
          P
            ? (window.clearTimeout(m.current), F && v(!1))
            : (window.clearTimeout(m.current),
              (m.current = window.setTimeout(() => v(!0), a))),
            o == null || o(R);
        },
        defaultProp: i,
      }),
      S = c.useCallback(() => {
        window.clearTimeout(E.current),
          (E.current = window.setTimeout(() => C(""), 150));
      }, [C]),
      k = c.useCallback(
        (R) => {
          window.clearTimeout(E.current), C(R);
        },
        [C]
      ),
      b = c.useCallback(
        (R) => {
          $ === R
            ? window.clearTimeout(E.current)
            : (y.current = window.setTimeout(() => {
                window.clearTimeout(E.current), C(R);
              }, l));
        },
        [$, C, l]
      );
    return (
      c.useEffect(
        () => () => {
          window.clearTimeout(y.current),
            window.clearTimeout(E.current),
            window.clearTimeout(m.current);
        },
        []
      ),
      c.createElement(
        Qm,
        {
          scope: n,
          isRootMenu: !0,
          value: $,
          dir: w,
          orientation: s,
          rootNavigationMenu: d,
          onTriggerEnter: (R) => {
            window.clearTimeout(y.current), p ? b(R) : k(R);
          },
          onTriggerLeave: () => {
            window.clearTimeout(y.current), S();
          },
          onContentEnter: () => window.clearTimeout(E.current),
          onContentLeave: S,
          onItemSelect: (R) => {
            C((P) => (P === R ? "" : R));
          },
          onItemDismiss: () => C(""),
        },
        c.createElement(
          Z.nav,
          T({ "aria-label": "Main", "data-orientation": s, dir: w }, f, {
            ref: g,
          })
        )
      )
    );
  }),
  Qm = (e) => {
    const {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: r,
        dir: o,
        orientation: i,
        children: l,
        value: a,
        onItemSelect: s,
        onItemDismiss: u,
        onTriggerEnter: f,
        onTriggerLeave: d,
        onContentEnter: h,
        onContentLeave: g,
      } = e,
      [w, y] = c.useState(null),
      [E, m] = c.useState(new Map()),
      [p, v] = c.useState(null);
    return c.createElement(
      Hm,
      {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: r,
        value: a,
        previousValue: Fm(a),
        baseId: Jt(),
        dir: o,
        orientation: i,
        viewport: w,
        onViewportChange: y,
        indicatorTrack: p,
        onIndicatorTrackChange: v,
        onTriggerEnter: he(f),
        onTriggerLeave: he(d),
        onContentEnter: he(h),
        onContentLeave: he(g),
        onItemSelect: he(s),
        onItemDismiss: he(u),
        onViewportContentChange: c.useCallback(($, C) => {
          m((S) => (S.set($, C), new Map(S)));
        }, []),
        onViewportContentRemove: c.useCallback(($) => {
          m((C) => (C.has($) ? (C.delete($), new Map(C)) : C));
        }, []),
      },
      c.createElement(
        Us.Provider,
        { scope: t },
        c.createElement(Km, { scope: t, items: E }, l)
      )
    );
  },
  Ym = "NavigationMenuList",
  Xm = c.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = ct(Ym, n),
      i = c.createElement(
        Z.ul,
        T({ "data-orientation": o.orientation }, r, { ref: t })
      );
    return c.createElement(
      Z.div,
      { style: { position: "relative" }, ref: o.onIndicatorTrackChange },
      c.createElement(
        Us.Slot,
        { scope: n },
        o.isRootMenu ? c.createElement(kf, { asChild: !0 }, i) : i
      )
    );
  }),
  Jm = "NavigationMenuItem",
  [qm, $f] = Vs(Jm),
  e4 = c.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e,
      i = Jt(),
      l = r || i || "LEGACY_REACT_AUTO_VALUE",
      a = c.useRef(null),
      s = c.useRef(null),
      u = c.useRef(null),
      f = c.useRef(() => {}),
      d = c.useRef(!1),
      h = c.useCallback((w = "start") => {
        if (a.current) {
          f.current();
          const y = Oa(a.current);
          y.length && Bs(w === "start" ? y : y.reverse());
        }
      }, []),
      g = c.useCallback(() => {
        if (a.current) {
          const w = Oa(a.current);
          w.length && (f.current = d4(w));
        }
      }, []);
    return c.createElement(
      qm,
      {
        scope: n,
        value: l,
        triggerRef: s,
        contentRef: a,
        focusProxyRef: u,
        wasEscapeCloseRef: d,
        onEntryKeyDown: h,
        onFocusProxyEnter: h,
        onRootContentClose: g,
        onContentFocusOutside: g,
      },
      c.createElement(Z.li, T({}, o, { ref: t }))
    );
  }),
  xu = "NavigationMenuTrigger",
  t4 = c.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, disabled: r, ...o } = e,
      i = ct(xu, e.__scopeNavigationMenu),
      l = $f(xu, e.__scopeNavigationMenu),
      a = c.useRef(null),
      s = ae(a, l.triggerRef, t),
      u = bf(i.baseId, l.value),
      f = _f(i.baseId, l.value),
      d = c.useRef(!1),
      h = c.useRef(!1),
      g = l.value === i.value;
    return c.createElement(
      c.Fragment,
      null,
      c.createElement(
        Us.ItemSlot,
        { scope: n, value: l.value },
        c.createElement(
          u4,
          { asChild: !0 },
          c.createElement(
            Z.button,
            T(
              {
                id: u,
                disabled: r,
                "data-disabled": r ? "" : void 0,
                "data-state": Ws(g),
                "aria-expanded": g,
                "aria-controls": f,
              },
              o,
              {
                ref: s,
                onPointerEnter: D(e.onPointerEnter, () => {
                  (h.current = !1), (l.wasEscapeCloseRef.current = !1);
                }),
                onPointerMove: D(
                  e.onPointerMove,
                  Mi(() => {
                    r ||
                      h.current ||
                      l.wasEscapeCloseRef.current ||
                      d.current ||
                      (i.onTriggerEnter(l.value), (d.current = !0));
                  })
                ),
                onPointerLeave: D(
                  e.onPointerLeave,
                  Mi(() => {
                    r || (i.onTriggerLeave(), (d.current = !1));
                  })
                ),
                onClick: D(e.onClick, () => {
                  i.onItemSelect(l.value), (h.current = g);
                }),
                onKeyDown: D(e.onKeyDown, (w) => {
                  const E = {
                    horizontal: "ArrowDown",
                    vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight",
                  }[i.orientation];
                  g && w.key === E && (l.onEntryKeyDown(), w.preventDefault());
                }),
              }
            )
          )
        )
      ),
      g &&
        c.createElement(
          c.Fragment,
          null,
          c.createElement(Um, {
            "aria-hidden": !0,
            tabIndex: 0,
            ref: l.focusProxyRef,
            onFocus: (w) => {
              const y = l.contentRef.current,
                E = w.relatedTarget,
                m = E === a.current,
                p = y == null ? void 0 : y.contains(E);
              (m || !p) && l.onFocusProxyEnter(m ? "start" : "end");
            },
          }),
          i.viewport && c.createElement("span", { "aria-owns": f })
        )
    );
  }),
  Cf = "NavigationMenuIndicator",
  n4 = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = ct(Cf, e.__scopeNavigationMenu),
      i = !!o.value;
    return o.indicatorTrack
      ? lf.createPortal(
          c.createElement(
            Xe,
            { present: n || i },
            c.createElement(r4, T({}, r, { ref: t }))
          ),
          o.indicatorTrack
        )
      : null;
  }),
  r4 = c.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = ct(Cf, n),
      i = xf(n),
      [l, a] = c.useState(null),
      [s, u] = c.useState(null),
      f = o.orientation === "horizontal",
      d = !!o.value;
    c.useEffect(() => {
      var g;
      const y =
        (g = i().find((E) => E.value === o.value)) === null || g === void 0
          ? void 0
          : g.ref.current;
      y && a(y);
    }, [i, o.value]);
    const h = () => {
      l &&
        u({
          size: f ? l.offsetWidth : l.offsetHeight,
          offset: f ? l.offsetLeft : l.offsetTop,
        });
    };
    return (
      Ia(l, h),
      Ia(o.indicatorTrack, h),
      s
        ? c.createElement(
            Z.div,
            T(
              {
                "aria-hidden": !0,
                "data-state": d ? "visible" : "hidden",
                "data-orientation": o.orientation,
              },
              r,
              {
                ref: t,
                style: {
                  position: "absolute",
                  ...(f
                    ? {
                        left: 0,
                        width: s.size + "px",
                        transform: `translateX(${s.offset}px)`,
                      }
                    : {
                        top: 0,
                        height: s.size + "px",
                        transform: `translateY(${s.offset}px)`,
                      }),
                  ...r.style,
                },
              }
            )
          )
        : null
    );
  }),
  Jr = "NavigationMenuContent",
  o4 = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = ct(Jr, e.__scopeNavigationMenu),
      i = $f(Jr, e.__scopeNavigationMenu),
      l = ae(i.contentRef, t),
      a = i.value === o.value,
      s = {
        value: i.value,
        triggerRef: i.triggerRef,
        focusProxyRef: i.focusProxyRef,
        wasEscapeCloseRef: i.wasEscapeCloseRef,
        onContentFocusOutside: i.onContentFocusOutside,
        onRootContentClose: i.onRootContentClose,
        ...r,
      };
    return o.viewport
      ? c.createElement(i4, T({ forceMount: n }, s, { ref: l }))
      : c.createElement(
          Xe,
          { present: n || a },
          c.createElement(
            Ef,
            T({ "data-state": Ws(a) }, s, {
              ref: l,
              onPointerEnter: D(e.onPointerEnter, o.onContentEnter),
              onPointerLeave: D(e.onPointerLeave, Mi(o.onContentLeave)),
              style: {
                pointerEvents: !a && o.isRootMenu ? "none" : void 0,
                ...s.style,
              },
            })
          )
        );
  }),
  i4 = c.forwardRef((e, t) => {
    const n = ct(Jr, e.__scopeNavigationMenu),
      { onViewportContentChange: r, onViewportContentRemove: o } = n;
    return (
      _t(() => {
        r(e.value, { ref: t, ...e });
      }, [e, t, r]),
      _t(() => () => o(e.value), [e.value, o]),
      null
    );
  }),
  Ml = "navigationMenu.rootContentDismiss",
  Ef = c.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        triggerRef: o,
        focusProxyRef: i,
        wasEscapeCloseRef: l,
        onRootContentClose: a,
        onContentFocusOutside: s,
        ...u
      } = e,
      f = ct(Jr, n),
      d = c.useRef(null),
      h = ae(d, t),
      g = bf(f.baseId, r),
      w = _f(f.baseId, r),
      y = xf(n),
      E = c.useRef(null),
      { onItemDismiss: m } = f;
    c.useEffect(() => {
      const v = d.current;
      if (f.isRootMenu && v) {
        const $ = () => {
          var C;
          m(),
            a(),
            v.contains(document.activeElement) &&
              ((C = o.current) === null || C === void 0 || C.focus());
        };
        return v.addEventListener(Ml, $), () => v.removeEventListener(Ml, $);
      }
    }, [f.isRootMenu, e.value, o, m, a]);
    const p = c.useMemo(() => {
      const $ = y().map((P) => P.value);
      f.dir === "rtl" && $.reverse();
      const C = $.indexOf(f.value),
        S = $.indexOf(f.previousValue),
        k = r === f.value,
        b = S === $.indexOf(r);
      if (!k && !b) return E.current;
      const R = (() => {
        if (C !== S) {
          if (k && S !== -1) return C > S ? "from-end" : "from-start";
          if (b && C !== -1) return C > S ? "to-start" : "to-end";
        }
        return null;
      })();
      return (E.current = R), R;
    }, [f.previousValue, f.value, f.dir, y, r]);
    return c.createElement(
      kf,
      { asChild: !0 },
      c.createElement(
        zs,
        T(
          {
            id: w,
            "aria-labelledby": g,
            "data-motion": p,
            "data-orientation": f.orientation,
          },
          u,
          {
            ref: h,
            onDismiss: () => {
              var v;
              const $ = new Event(Ml, { bubbles: !0, cancelable: !0 });
              (v = d.current) === null || v === void 0 || v.dispatchEvent($);
            },
            onFocusOutside: D(e.onFocusOutside, (v) => {
              var $;
              s();
              const C = v.target;
              ($ = f.rootNavigationMenu) !== null &&
                $ !== void 0 &&
                $.contains(C) &&
                v.preventDefault();
            }),
            onPointerDownOutside: D(e.onPointerDownOutside, (v) => {
              var $;
              const C = v.target,
                S = y().some((b) => {
                  var R;
                  return (R = b.ref.current) === null || R === void 0
                    ? void 0
                    : R.contains(C);
                }),
                k =
                  f.isRootMenu &&
                  (($ = f.viewport) === null || $ === void 0
                    ? void 0
                    : $.contains(C));
              (S || k || !f.isRootMenu) && v.preventDefault();
            }),
            onKeyDown: D(e.onKeyDown, (v) => {
              const $ = v.altKey || v.ctrlKey || v.metaKey;
              if (v.key === "Tab" && !$) {
                const k = Oa(v.currentTarget),
                  b = document.activeElement,
                  R = k.findIndex((I) => I === b),
                  F = v.shiftKey
                    ? k.slice(0, R).reverse()
                    : k.slice(R + 1, k.length);
                if (Bs(F)) v.preventDefault();
                else {
                  var S;
                  (S = i.current) === null || S === void 0 || S.focus();
                }
              }
            }),
            onEscapeKeyDown: D(e.onEscapeKeyDown, (v) => {
              l.current = !0;
            }),
          }
        )
      )
    );
  }),
  Sf = "NavigationMenuViewport",
  l4 = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = !!ct(Sf, e.__scopeNavigationMenu).value;
    return c.createElement(
      Xe,
      { present: n || i },
      c.createElement(a4, T({}, r, { ref: t }))
    );
  }),
  a4 = c.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, children: r, ...o } = e,
      i = ct(Sf, n),
      l = ae(t, i.onViewportChange),
      a = Gm(Jr, e.__scopeNavigationMenu),
      [s, u] = c.useState(null),
      [f, d] = c.useState(null),
      h = s ? (s == null ? void 0 : s.width) + "px" : void 0,
      g = s ? (s == null ? void 0 : s.height) + "px" : void 0,
      w = !!i.value,
      y = w ? i.value : i.previousValue;
    return (
      Ia(f, () => {
        f && u({ width: f.offsetWidth, height: f.offsetHeight });
      }),
      c.createElement(
        Z.div,
        T({ "data-state": Ws(w), "data-orientation": i.orientation }, o, {
          ref: l,
          style: {
            pointerEvents: !w && i.isRootMenu ? "none" : void 0,
            "--radix-navigation-menu-viewport-width": h,
            "--radix-navigation-menu-viewport-height": g,
            ...o.style,
          },
          onPointerEnter: D(e.onPointerEnter, i.onContentEnter),
          onPointerLeave: D(e.onPointerLeave, Mi(i.onContentLeave)),
        }),
        Array.from(a.items).map(([m, { ref: p, forceMount: v, ...$ }]) => {
          const C = y === m;
          return c.createElement(
            Xe,
            { key: m, present: v || C },
            c.createElement(
              Ef,
              T({}, $, {
                ref: uo(p, (S) => {
                  C && S && d(S);
                }),
              })
            )
          );
        })
      )
    );
  }),
  s4 = "FocusGroup",
  kf = c.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = ct(s4, n);
    return c.createElement(
      Aa.Provider,
      { scope: n },
      c.createElement(
        Aa.Slot,
        { scope: n },
        c.createElement(Z.div, T({ dir: o.dir }, r, { ref: t }))
      )
    );
  }),
  $u = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
  c4 = "FocusGroupItem",
  u4 = c.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = Bm(n),
      i = ct(c4, n);
    return c.createElement(
      Aa.ItemSlot,
      { scope: n },
      c.createElement(
        Z.button,
        T({}, r, {
          ref: t,
          onKeyDown: D(e.onKeyDown, (l) => {
            if (["Home", "End", ...$u].includes(l.key)) {
              let s = o().map((d) => d.ref.current);
              if (
                ([
                  i.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
                  "ArrowUp",
                  "End",
                ].includes(l.key) && s.reverse(),
                $u.includes(l.key))
              ) {
                const d = s.indexOf(l.currentTarget);
                s = s.slice(d + 1);
              }
              setTimeout(() => Bs(s)), l.preventDefault();
            }
          }),
        })
      )
    );
  });
function Oa(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Bs(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
function d4(e) {
  return (
    e.forEach((t) => {
      (t.dataset.tabindex = t.getAttribute("tabindex") || ""),
        t.setAttribute("tabindex", "-1");
    }),
    () => {
      e.forEach((t) => {
        const n = t.dataset.tabindex;
        t.setAttribute("tabindex", n);
      });
    }
  );
}
function Ia(e, t) {
  const n = he(t);
  _t(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
function Ws(e) {
  return e ? "open" : "closed";
}
function bf(e, t) {
  return `${e}-trigger-${t}`;
}
function _f(e, t) {
  return `${e}-content-${t}`;
}
function Mi(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
const Nf = Zm,
  Mf = Xm,
  f4 = e4,
  Rf = t4,
  Pf = n4,
  Tf = o4,
  Af = l4,
  Cu = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Eu = sf,
  Hs = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Eu(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      l = Object.keys(o).map((u) => {
        const f = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (f === null) return null;
        const h = Cu(f) || Cu(d);
        return o[u][h];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, f) => {
          let [d, h] = f;
          return h === void 0 || (u[d] = h), u;
        }, {}),
      s =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, f) => {
              let { class: d, className: h, ...g } = f;
              return Object.entries(g).every((w) => {
                let [y, E] = w;
                return Array.isArray(E)
                  ? E.includes({ ...i, ...a }[y])
                  : { ...i, ...a }[y] === E;
              })
                ? [...u, d, h]
                : u;
            }, []);
    return Eu(
      e,
      l,
      s,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var p4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m4 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Tt = (e, t) => {
    const n = c.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: l,
          className: a = "",
          children: s,
          ...u
        },
        f
      ) =>
        c.createElement(
          "svg",
          {
            ref: f,
            ...p4,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
            className: ["lucide", `lucide-${m4(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([d, h]) => c.createElement(d, h)),
            ...(Array.isArray(s) ? s : [s]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h4 = Tt("ArrowUpToLine", [
  ["path", { d: "M5 3h14", key: "7usisc" }],
  ["path", { d: "m18 13-6-6-6 6", key: "1kf1n9" }],
  ["path", { d: "M12 7v14", key: "1akyts" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v4 = Tt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g4 = Tt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y4 = Tt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w4 = Tt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x4 = Tt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $4 = Tt("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C4 = Tt("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E4 = Tt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Of = c.forwardRef(({ className: e, children: t, ...n }, r) =>
    x.jsxs(Nf, {
      ref: r,
      className: G(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...n,
      children: [t, x.jsx(Df, {})],
    })
  );
Of.displayName = Nf.displayName;
const If = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(Mf, {
    ref: n,
    className: G(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t,
  })
);
If.displayName = Mf.displayName;
const S4 = f4,
  k4 = Hs(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  ),
  b4 = c.forwardRef(({ className: e, children: t, ...n }, r) =>
    x.jsxs(Rf, {
      ref: r,
      className: G(k4(), "group", e),
      ...n,
      children: [
        t,
        " ",
        x.jsx(g4, {
          className:
            "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true",
        }),
      ],
    })
  );
b4.displayName = Rf.displayName;
const _4 = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(Tf, {
    ref: n,
    className: G(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t,
  })
);
_4.displayName = Tf.displayName;
const Df = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", {
    className: G("absolute left-0 top-full flex justify-center"),
    children: x.jsx(Af, {
      className: G(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        e
      ),
      ref: n,
      ...t,
    }),
  })
);
Df.displayName = Af.displayName;
const N4 = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(Pf, {
    ref: n,
    className: G(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: x.jsx("div", {
      className:
        "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md",
    }),
  })
);
N4.displayName = Pf.displayName;
const Rl = "focusScope.autoFocusOnMount",
  Pl = "focusScope.autoFocusOnUnmount",
  Su = { bubbles: !1, cancelable: !0 },
  Lf = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [a, s] = c.useState(null),
      u = he(o),
      f = he(i),
      d = c.useRef(null),
      h = ae(t, (y) => s(y)),
      g = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    c.useEffect(() => {
      if (r) {
        let p = function (S) {
            if (g.paused || !a) return;
            const k = S.target;
            a.contains(k) ? (d.current = k) : Lt(d.current, { select: !0 });
          },
          v = function (S) {
            if (g.paused || !a) return;
            const k = S.relatedTarget;
            k !== null && (a.contains(k) || Lt(d.current, { select: !0 }));
          },
          $ = function (S) {
            if (document.activeElement === document.body)
              for (const b of S) b.removedNodes.length > 0 && Lt(a);
          };
        var y = p,
          E = v,
          m = $;
        document.addEventListener("focusin", p),
          document.addEventListener("focusout", v);
        const C = new MutationObserver($);
        return (
          a && C.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", v),
              C.disconnect();
          }
        );
      }
    }, [r, a, g.paused]),
      c.useEffect(() => {
        if (a) {
          bu.add(g);
          const y = document.activeElement;
          if (!a.contains(y)) {
            const m = new CustomEvent(Rl, Su);
            a.addEventListener(Rl, u),
              a.dispatchEvent(m),
              m.defaultPrevented ||
                (M4(O4(jf(a)), { select: !0 }),
                document.activeElement === y && Lt(a));
          }
          return () => {
            a.removeEventListener(Rl, u),
              setTimeout(() => {
                const m = new CustomEvent(Pl, Su);
                a.addEventListener(Pl, f),
                  a.dispatchEvent(m),
                  m.defaultPrevented || Lt(y ?? document.body, { select: !0 }),
                  a.removeEventListener(Pl, f),
                  bu.remove(g);
              }, 0);
          };
        }
      }, [a, u, f, g]);
    const w = c.useCallback(
      (y) => {
        if ((!n && !r) || g.paused) return;
        const E = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey,
          m = document.activeElement;
        if (E && m) {
          const p = y.currentTarget,
            [v, $] = R4(p);
          v && $
            ? !y.shiftKey && m === $
              ? (y.preventDefault(), n && Lt(v, { select: !0 }))
              : y.shiftKey &&
                m === v &&
                (y.preventDefault(), n && Lt($, { select: !0 }))
            : m === p && y.preventDefault();
        }
      },
      [n, r, g.paused]
    );
    return c.createElement(
      Z.div,
      T({ tabIndex: -1 }, l, { ref: h, onKeyDown: w })
    );
  });
function M4(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Lt(r, { select: t }), document.activeElement !== n)) return;
}
function R4(e) {
  const t = jf(e),
    n = ku(t, e),
    r = ku(t.reverse(), e);
  return [n, r];
}
function jf(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ku(e, t) {
  for (const n of e) if (!P4(n, { upTo: t })) return n;
}
function P4(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function T4(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Lt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && T4(e) && t && e.select();
  }
}
const bu = A4();
function A4() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = _u(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = _u(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function _u(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function O4(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ff = c.forwardRef((e, t) => {
  var n;
  const {
    container: r = globalThis == null ||
    (n = globalThis.document) === null ||
    n === void 0
      ? void 0
      : n.body,
    ...o
  } = e;
  return r
    ? lf.createPortal(c.createElement(Z.div, T({}, o, { ref: t })), r)
    : null;
});
let Tl = 0;
function zf() {
  c.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : Nu()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : Nu()
      ),
      Tl++,
      () => {
        Tl === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          Tl--;
      }
    );
  }, []);
}
function Nu() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var mt = function () {
  return (
    (mt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    mt.apply(this, arguments)
  );
};
function Uf(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function I4(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var ti = "right-scroll-bar-position",
  ni = "width-before-scroll-bar",
  D4 = "with-scroll-bars-hidden",
  L4 = "--removed-body-scroll-bar-size";
function j4(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function F4(e, t) {
  var n = c.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function z4(e, t) {
  return F4(t || null, function (n) {
    return e.forEach(function (r) {
      return j4(r, n);
    });
  });
}
function U4(e) {
  return e;
}
function V4(e, t) {
  t === void 0 && (t = U4);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var l = t(i, r);
        return (
          n.push(l),
          function () {
            n = n.filter(function (a) {
              return a !== l;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var l = n;
          (n = []), l.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var l = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (l = n);
        }
        var s = function () {
            var f = l;
            (l = []), f.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(s);
          };
        u(),
          (n = {
            push: function (f) {
              l.push(f), u();
            },
            filter: function (f) {
              return (l = l.filter(f)), n;
            },
          });
      },
    };
  return o;
}
function B4(e) {
  e === void 0 && (e = {});
  var t = V4(null);
  return (t.options = mt({ async: !0, ssr: !1 }, e)), t;
}
var Vf = function (e) {
  var t = e.sideCar,
    n = Uf(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return c.createElement(r, mt({}, n));
};
Vf.isSideCarExport = !0;
function W4(e, t) {
  return e.useMedium(t), Vf;
}
var Bf = B4(),
  Al = function () {},
  qi = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: Al,
        onWheelCapture: Al,
        onTouchMoveCapture: Al,
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      a = e.children,
      s = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      d = e.shards,
      h = e.sideCar,
      g = e.noIsolation,
      w = e.inert,
      y = e.allowPinchZoom,
      E = e.as,
      m = E === void 0 ? "div" : E,
      p = Uf(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      v = h,
      $ = z4([n, t]),
      C = mt(mt({}, p), o);
    return c.createElement(
      c.Fragment,
      null,
      f &&
        c.createElement(v, {
          sideCar: Bf,
          removeScrollBar: u,
          shards: d,
          noIsolation: g,
          inert: w,
          setCallbacks: i,
          allowPinchZoom: !!y,
          lockRef: n,
        }),
      l
        ? c.cloneElement(c.Children.only(a), mt(mt({}, C), { ref: $ }))
        : c.createElement(m, mt({}, C, { className: s, ref: $ }), a)
    );
  });
qi.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
qi.classNames = { fullWidth: ni, zeroRight: ti };
var Mu,
  H4 = function () {
    if (Mu) return Mu;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function K4() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = H4();
  return t && e.setAttribute("nonce", t), e;
}
function G4(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Z4(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Q4 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = K4()) && (G4(t, n), Z4(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Y4 = function () {
    var e = Q4();
    return function (t, n) {
      c.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Wf = function () {
    var e = Y4(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  X4 = { left: 0, top: 0, right: 0, gap: 0 },
  Ol = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  J4 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ol(n), Ol(r), Ol(o)];
  },
  q4 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return X4;
    var t = J4(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  eh = Wf(),
  th = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      l = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          D4,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          ti,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          ni,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ti, " .")
        .concat(
          ti,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ni, " .")
        .concat(
          ni,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(L4, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  nh = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r,
      i = c.useMemo(
        function () {
          return q4(o);
        },
        [o]
      );
    return c.createElement(eh, { styles: th(i, !t, o, n ? "" : "!important") });
  },
  Da = !1;
if (typeof window < "u")
  try {
    var Lo = Object.defineProperty({}, "passive", {
      get: function () {
        return (Da = !0), !0;
      },
    });
    window.addEventListener("test", Lo, Lo),
      window.removeEventListener("test", Lo, Lo);
  } catch {
    Da = !1;
  }
var Mn = Da ? { passive: !1 } : !1,
  rh = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Hf = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !rh(e) && n[t] === "visible")
    );
  },
  oh = function (e) {
    return Hf(e, "overflowY");
  },
  ih = function (e) {
    return Hf(e, "overflowX");
  },
  Ru = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = Kf(e, n);
      if (r) {
        var o = Gf(e, n),
          i = o[1],
          l = o[2];
        if (i > l) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  lh = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  ah = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Kf = function (e, t) {
    return e === "v" ? oh(t) : ih(t);
  },
  Gf = function (e, t) {
    return e === "v" ? lh(t) : ah(t);
  },
  sh = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  ch = function (e, t, n, r, o) {
    var i = sh(e, window.getComputedStyle(t).direction),
      l = i * r,
      a = n.target,
      s = t.contains(a),
      u = !1,
      f = l > 0,
      d = 0,
      h = 0;
    do {
      var g = Gf(e, a),
        w = g[0],
        y = g[1],
        E = g[2],
        m = y - E - i * w;
      (w || m) && Kf(e, a) && ((d += m), (h += w)), (a = a.parentNode);
    } while ((!s && a !== document.body) || (s && (t.contains(a) || t === a)));
    return (
      ((f && ((o && d === 0) || (!o && l > d))) ||
        (!f && ((o && h === 0) || (!o && -l > h)))) &&
        (u = !0),
      u
    );
  },
  jo = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Pu = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Tu = function (e) {
    return e && "current" in e ? e.current : e;
  },
  uh = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  dh = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  fh = 0,
  Rn = [];
function ph(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(fh++)[0],
    i = c.useState(function () {
      return Wf();
    })[0],
    l = c.useRef(e);
  c.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var y = I4([e.lockRef.current], (e.shards || []).map(Tu), !0).filter(
            Boolean
          );
          return (
            y.forEach(function (E) {
              return E.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                y.forEach(function (E) {
                  return E.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = c.useCallback(function (y, E) {
      if ("touches" in y && y.touches.length === 2)
        return !l.current.allowPinchZoom;
      var m = jo(y),
        p = n.current,
        v = "deltaX" in y ? y.deltaX : p[0] - m[0],
        $ = "deltaY" in y ? y.deltaY : p[1] - m[1],
        C,
        S = y.target,
        k = Math.abs(v) > Math.abs($) ? "h" : "v";
      if ("touches" in y && k === "h" && S.type === "range") return !1;
      var b = Ru(k, S);
      if (!b) return !0;
      if ((b ? (C = k) : ((C = k === "v" ? "h" : "v"), (b = Ru(k, S))), !b))
        return !1;
      if (
        (!r.current && "changedTouches" in y && (v || $) && (r.current = C), !C)
      )
        return !0;
      var R = r.current || C;
      return ch(R, E, y, R === "h" ? v : $, !0);
    }, []),
    s = c.useCallback(function (y) {
      var E = y;
      if (!(!Rn.length || Rn[Rn.length - 1] !== i)) {
        var m = "deltaY" in E ? Pu(E) : jo(E),
          p = t.current.filter(function (C) {
            return C.name === E.type && C.target === E.target && uh(C.delta, m);
          })[0];
        if (p && p.should) {
          E.cancelable && E.preventDefault();
          return;
        }
        if (!p) {
          var v = (l.current.shards || [])
              .map(Tu)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(E.target);
              }),
            $ = v.length > 0 ? a(E, v[0]) : !l.current.noIsolation;
          $ && E.cancelable && E.preventDefault();
        }
      }
    }, []),
    u = c.useCallback(function (y, E, m, p) {
      var v = { name: y, delta: E, target: m, should: p };
      t.current.push(v),
        setTimeout(function () {
          t.current = t.current.filter(function ($) {
            return $ !== v;
          });
        }, 1);
    }, []),
    f = c.useCallback(function (y) {
      (n.current = jo(y)), (r.current = void 0);
    }, []),
    d = c.useCallback(function (y) {
      u(y.type, Pu(y), y.target, a(y, e.lockRef.current));
    }, []),
    h = c.useCallback(function (y) {
      u(y.type, jo(y), y.target, a(y, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      Rn.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: h,
      }),
      document.addEventListener("wheel", s, Mn),
      document.addEventListener("touchmove", s, Mn),
      document.addEventListener("touchstart", f, Mn),
      function () {
        (Rn = Rn.filter(function (y) {
          return y !== i;
        })),
          document.removeEventListener("wheel", s, Mn),
          document.removeEventListener("touchmove", s, Mn),
          document.removeEventListener("touchstart", f, Mn);
      }
    );
  }, []);
  var g = e.removeScrollBar,
    w = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    w ? c.createElement(i, { styles: dh(o) }) : null,
    g ? c.createElement(nh, { gapMode: "margin" }) : null
  );
}
const mh = W4(Bf, ph);
var Zf = c.forwardRef(function (e, t) {
  return c.createElement(qi, mt({}, e, { ref: t, sideCar: mh }));
});
Zf.classNames = qi.classNames;
const Qf = Zf;
var hh = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Pn = new WeakMap(),
  Fo = new WeakMap(),
  zo = {},
  Il = 0,
  Yf = function (e) {
    return e && (e.host || Yf(e.parentNode));
  },
  vh = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Yf(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  gh = function (e, t, n, r) {
    var o = vh(t, Array.isArray(e) ? e : [e]);
    zo[n] || (zo[n] = new WeakMap());
    var i = zo[n],
      l = [],
      a = new Set(),
      s = new Set(o),
      u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var f = function (d) {
      !d ||
        s.has(d) ||
        Array.prototype.forEach.call(d.children, function (h) {
          if (a.has(h)) f(h);
          else {
            var g = h.getAttribute(r),
              w = g !== null && g !== "false",
              y = (Pn.get(h) || 0) + 1,
              E = (i.get(h) || 0) + 1;
            Pn.set(h, y),
              i.set(h, E),
              l.push(h),
              y === 1 && w && Fo.set(h, !0),
              E === 1 && h.setAttribute(n, "true"),
              w || h.setAttribute(r, "true");
          }
        });
    };
    return (
      f(t),
      a.clear(),
      Il++,
      function () {
        l.forEach(function (d) {
          var h = Pn.get(d) - 1,
            g = i.get(d) - 1;
          Pn.set(d, h),
            i.set(d, g),
            h || (Fo.has(d) || d.removeAttribute(r), Fo.delete(d)),
            g || d.removeAttribute(n);
        }),
          Il--,
          Il ||
            ((Pn = new WeakMap()),
            (Pn = new WeakMap()),
            (Fo = new WeakMap()),
            (zo = {}));
      }
    );
  },
  Xf = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || hh(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        gh(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
const Jf = "Dialog",
  [qf, kg] = kn(Jf),
  [yh, ut] = qf(Jf),
  wh = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: l = !0,
      } = e,
      a = c.useRef(null),
      s = c.useRef(null),
      [u = !1, f] = Xi({ prop: r, defaultProp: o, onChange: i });
    return c.createElement(
      yh,
      {
        scope: t,
        triggerRef: a,
        contentRef: s,
        contentId: Jt(),
        titleId: Jt(),
        descriptionId: Jt(),
        open: u,
        onOpenChange: f,
        onOpenToggle: c.useCallback(() => f((d) => !d), [f]),
        modal: l,
      },
      n
    );
  },
  xh = "DialogTrigger",
  $h = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ut(xh, n),
      i = ae(t, o.triggerRef);
    return c.createElement(
      Z.button,
      T(
        {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": o.open,
          "aria-controls": o.contentId,
          "data-state": Ks(o.open),
        },
        r,
        { ref: i, onClick: D(e.onClick, o.onOpenToggle) }
      )
    );
  }),
  e0 = "DialogPortal",
  [Ch, t0] = qf(e0, { forceMount: void 0 }),
  Eh = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = ut(e0, t);
    return c.createElement(
      Ch,
      { scope: t, forceMount: n },
      c.Children.map(r, (l) =>
        c.createElement(
          Xe,
          { present: n || i.open },
          c.createElement(Ff, { asChild: !0, container: o }, l)
        )
      )
    );
  },
  La = "DialogOverlay",
  Sh = c.forwardRef((e, t) => {
    const n = t0(La, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = ut(La, e.__scopeDialog);
    return i.modal
      ? c.createElement(
          Xe,
          { present: r || i.open },
          c.createElement(kh, T({}, o, { ref: t }))
        )
      : null;
  }),
  kh = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ut(La, n);
    return c.createElement(
      Qf,
      { as: $n, allowPinchZoom: !0, shards: [o.contentRef] },
      c.createElement(
        Z.div,
        T({ "data-state": Ks(o.open) }, r, {
          ref: t,
          style: { pointerEvents: "auto", ...r.style },
        })
      )
    );
  }),
  qr = "DialogContent",
  bh = c.forwardRef((e, t) => {
    const n = t0(qr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = ut(qr, e.__scopeDialog);
    return c.createElement(
      Xe,
      { present: r || i.open },
      i.modal
        ? c.createElement(_h, T({}, o, { ref: t }))
        : c.createElement(Nh, T({}, o, { ref: t }))
    );
  }),
  _h = c.forwardRef((e, t) => {
    const n = ut(qr, e.__scopeDialog),
      r = c.useRef(null),
      o = ae(t, n.contentRef, r);
    return (
      c.useEffect(() => {
        const i = r.current;
        if (i) return Xf(i);
      }, []),
      c.createElement(
        n0,
        T({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: D(e.onCloseAutoFocus, (i) => {
            var l;
            i.preventDefault(),
              (l = n.triggerRef.current) === null || l === void 0 || l.focus();
          }),
          onPointerDownOutside: D(e.onPointerDownOutside, (i) => {
            const l = i.detail.originalEvent,
              a = l.button === 0 && l.ctrlKey === !0;
            (l.button === 2 || a) && i.preventDefault();
          }),
          onFocusOutside: D(e.onFocusOutside, (i) => i.preventDefault()),
        })
      )
    );
  }),
  Nh = c.forwardRef((e, t) => {
    const n = ut(qr, e.__scopeDialog),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return c.createElement(
      n0,
      T({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var l;
          if (
            ((l = e.onCloseAutoFocus) === null || l === void 0 || l.call(e, i),
            !i.defaultPrevented)
          ) {
            var a;
            r.current ||
              (a = n.triggerRef.current) === null ||
              a === void 0 ||
              a.focus(),
              i.preventDefault();
          }
          (r.current = !1), (o.current = !1);
        },
        onInteractOutside: (i) => {
          var l, a;
          (l = e.onInteractOutside) === null || l === void 0 || l.call(e, i),
            i.defaultPrevented ||
              ((r.current = !0),
              i.detail.originalEvent.type === "pointerdown" &&
                (o.current = !0));
          const s = i.target;
          ((a = n.triggerRef.current) === null || a === void 0
            ? void 0
            : a.contains(s)) && i.preventDefault(),
            i.detail.originalEvent.type === "focusin" &&
              o.current &&
              i.preventDefault();
        },
      })
    );
  }),
  n0 = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...l
      } = e,
      a = ut(qr, n),
      s = c.useRef(null),
      u = ae(t, s);
    return (
      zf(),
      c.createElement(
        c.Fragment,
        null,
        c.createElement(
          Lf,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
          },
          c.createElement(
            zs,
            T(
              {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Ks(a.open),
              },
              l,
              { ref: u, onDismiss: () => a.onOpenChange(!1) }
            )
          )
        ),
        !1
      )
    );
  }),
  Mh = "DialogTitle",
  Rh = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ut(Mh, n);
    return c.createElement(Z.h2, T({ id: o.titleId }, r, { ref: t }));
  }),
  Ph = "DialogDescription",
  Th = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ut(Ph, n);
    return c.createElement(Z.p, T({ id: o.descriptionId }, r, { ref: t }));
  }),
  Ah = "DialogClose",
  Oh = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ut(Ah, n);
    return c.createElement(
      Z.button,
      T({ type: "button" }, r, {
        ref: t,
        onClick: D(e.onClick, () => o.onOpenChange(!1)),
      })
    );
  });
function Ks(e) {
  return e ? "open" : "closed";
}
const Ih = wh,
  Dh = $h,
  Lh = Eh,
  r0 = Sh,
  o0 = bh,
  i0 = Rh,
  l0 = Th,
  jh = Oh,
  Fh = Ih,
  zh = Dh,
  Uh = Lh,
  a0 = c.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(r0, {
      className: G(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
a0.displayName = r0.displayName;
const Vh = Hs(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  s0 = c.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, o) =>
      x.jsxs(Uh, {
        children: [
          x.jsx(a0, {}),
          x.jsxs(o0, {
            ref: o,
            className: G(Vh({ side: e }), t),
            ...r,
            children: [
              n,
              x.jsxs(jh, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  x.jsx(E4, { className: "h-4 w-4" }),
                  x.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
            ],
          }),
        ],
      })
  );
s0.displayName = o0.displayName;
const c0 = ({ className: e, ...t }) =>
  x.jsx("div", {
    className: G("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
c0.displayName = "SheetHeader";
const u0 = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(i0, {
    ref: n,
    className: G("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
u0.displayName = i0.displayName;
const Bh = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(l0, { ref: n, className: G("text-sm text-muted-foreground", e), ...t })
);
Bh.displayName = l0.displayName;
const ja = Hs(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Gs = c.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const l = r ? $n : "button";
      return x.jsx(l, {
        className: G(ja({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
Gs.displayName = "Button";
const Wh = ["top", "right", "bottom", "left"],
  tn = Math.min,
  De = Math.max,
  Ri = Math.round,
  Uo = Math.floor,
  nn = (e) => ({ x: e, y: e }),
  Hh = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Kh = { start: "end", end: "start" };
function Fa(e, t, n) {
  return De(e, tn(t, n));
}
function Nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function cr(e) {
  return e.split("-")[1];
}
function Zs(e) {
  return e === "x" ? "y" : "x";
}
function Qs(e) {
  return e === "y" ? "height" : "width";
}
function ur(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function Ys(e) {
  return Zs(ur(e));
}
function Gh(e, t, n) {
  n === void 0 && (n = !1);
  const r = cr(e),
    o = Ys(e),
    i = Qs(o);
  let l =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (l = Pi(l)), [l, Pi(l)];
}
function Zh(e) {
  const t = Pi(e);
  return [za(e), t, za(t)];
}
function za(e) {
  return e.replace(/start|end/g, (t) => Kh[t]);
}
function Qh(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function Yh(e, t, n, r) {
  const o = cr(e);
  let i = Qh(Mt(e), n === "start", r);
  return (
    o && ((i = i.map((l) => l + "-" + o)), t && (i = i.concat(i.map(za)))), i
  );
}
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Hh[t]);
}
function Xh(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function d0(e) {
  return typeof e != "number"
    ? Xh(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ti(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function Au(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = ur(t),
    l = Ys(t),
    a = Qs(l),
    s = Mt(t),
    u = i === "y",
    f = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    h = r[a] / 2 - o[a] / 2;
  let g;
  switch (s) {
    case "top":
      g = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      g = { x: f, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: d };
      break;
    case "left":
      g = { x: r.x - o.width, y: d };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (cr(t)) {
    case "start":
      g[l] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      g[l] += h * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Jh = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l,
    } = n,
    a = i.filter(Boolean),
    s = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: d } = Au(u, r, s),
    h = r,
    g = {},
    w = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: E, fn: m } = a[y],
      {
        x: p,
        y: v,
        data: $,
        reset: C,
      } = await m({
        x: f,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: g,
        rects: u,
        platform: l,
        elements: { reference: e, floating: t },
      });
    if (
      ((f = p ?? f),
      (d = v ?? d),
      (g = { ...g, [E]: { ...g[E], ...$ } }),
      C && w <= 50)
    ) {
      w++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: f, y: d } = Au(u, h, s))),
        (y = -1);
      continue;
    }
  }
  return { x: f, y: d, placement: h, strategy: o, middlewareData: g };
};
async function eo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: d = "floating",
      altBoundary: h = !1,
      padding: g = 0,
    } = Nt(t, e),
    w = d0(g),
    E = a[h ? (d === "floating" ? "reference" : "floating") : d],
    m = Ti(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(E))) == null ||
          n
            ? E
            : E.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: s,
      })
    ),
    p = d === "floating" ? { ...l.floating, x: r, y: o } : l.reference,
    v = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    $ = (await (i.isElement == null ? void 0 : i.isElement(v)))
      ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Ti(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: p,
            offsetParent: v,
            strategy: s,
          })
        : p
    );
  return {
    top: (m.top - C.top + w.top) / $.y,
    bottom: (C.bottom - m.bottom + w.bottom) / $.y,
    left: (m.left - C.left + w.left) / $.x,
    right: (C.right - m.right + w.right) / $.x,
  };
}
const Ou = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: l,
          elements: a,
          middlewareData: s,
        } = t,
        { element: u, padding: f = 0 } = Nt(e, t) || {};
      if (u == null) return {};
      const d = d0(f),
        h = { x: n, y: r },
        g = Ys(o),
        w = Qs(g),
        y = await l.getDimensions(u),
        E = g === "y",
        m = E ? "top" : "left",
        p = E ? "bottom" : "right",
        v = E ? "clientHeight" : "clientWidth",
        $ = i.reference[w] + i.reference[g] - h[g] - i.floating[w],
        C = h[g] - i.reference[g],
        S = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
      let k = S ? S[v] : 0;
      (!k || !(await (l.isElement == null ? void 0 : l.isElement(S)))) &&
        (k = a.floating[v] || i.floating[w]);
      const b = $ / 2 - C / 2,
        R = k / 2 - y[w] / 2 - 1,
        P = tn(d[m], R),
        F = tn(d[p], R),
        I = P,
        te = k - y[w] - F,
        j = k / 2 - y[w] / 2 + b,
        H = Fa(I, j, te),
        z =
          !s.arrow &&
          cr(o) != null &&
          j != H &&
          i.reference[w] / 2 - (j < I ? P : F) - y[w] / 2 < 0,
        Y = z ? (j < I ? j - I : j - te) : 0;
      return {
        [g]: h[g] + Y,
        data: {
          [g]: H,
          centerOffset: j - H - Y,
          ...(z && { alignmentOffset: Y }),
        },
        reset: z,
      };
    },
  }),
  qh = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: l,
              initialPlacement: a,
              platform: s,
              elements: u,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: d = !0,
              fallbackPlacements: h,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: y = !0,
              ...E
            } = Nt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = Mt(o),
            p = Mt(a) === a,
            v = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
            $ = h || (p || !y ? [Pi(a)] : Zh(a));
          !h && w !== "none" && $.push(...Yh(a, y, w, v));
          const C = [a, ...$],
            S = await eo(t, E),
            k = [];
          let b = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((f && k.push(S[m]), d)) {
            const I = Gh(o, l, v);
            k.push(S[I[0]], S[I[1]]);
          }
          if (
            ((b = [...b, { placement: o, overflows: k }]),
            !k.every((I) => I <= 0))
          ) {
            var R, P;
            const I = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1,
              te = C[I];
            if (te)
              return {
                data: { index: I, overflows: b },
                reset: { placement: te },
              };
            let j =
              (P = b
                .filter((H) => H.overflows[0] <= 0)
                .sort((H, z) => H.overflows[1] - z.overflows[1])[0]) == null
                ? void 0
                : P.placement;
            if (!j)
              switch (g) {
                case "bestFit": {
                  var F;
                  const H =
                    (F = b
                      .map((z) => [
                        z.placement,
                        z.overflows
                          .filter((Y) => Y > 0)
                          .reduce((Y, M) => Y + M, 0),
                      ])
                      .sort((z, Y) => z[1] - Y[1])[0]) == null
                      ? void 0
                      : F[0];
                  H && (j = H);
                  break;
                }
                case "initialPlacement":
                  j = a;
                  break;
              }
            if (o !== j) return { reset: { placement: j } };
          }
          return {};
        },
      }
    );
  };
function Iu(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Du(e) {
  return Wh.some((t) => e[t] >= 0);
}
const ev = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Nt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await eo(t, { ...o, elementContext: "reference" }),
              l = Iu(i, n.reference);
            return {
              data: { referenceHiddenOffsets: l, referenceHidden: Du(l) },
            };
          }
          case "escaped": {
            const i = await eo(t, { ...o, altBoundary: !0 }),
              l = Iu(i, n.floating);
            return { data: { escapedOffsets: l, escaped: Du(l) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function tv(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    l = Mt(n),
    a = cr(n),
    s = ur(n) === "y",
    u = ["left", "top"].includes(l) ? -1 : 1,
    f = i && s ? -1 : 1,
    d = Nt(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: w,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    a && typeof w == "number" && (g = a === "end" ? w * -1 : w),
    s ? { x: g * f, y: h * u } : { x: h * u, y: g * f }
  );
}
const nv = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: l, middlewareData: a } = t,
            s = await tv(t, e);
          return l === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + s.x, y: i + s.y, data: { ...s, placement: l } };
        },
      }
    );
  },
  rv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: a = {
                fn: (E) => {
                  let { x: m, y: p } = E;
                  return { x: m, y: p };
                },
              },
              ...s
            } = Nt(e, t),
            u = { x: n, y: r },
            f = await eo(t, s),
            d = ur(Mt(o)),
            h = Zs(d);
          let g = u[h],
            w = u[d];
          if (i) {
            const E = h === "y" ? "top" : "left",
              m = h === "y" ? "bottom" : "right",
              p = g + f[E],
              v = g - f[m];
            g = Fa(p, g, v);
          }
          if (l) {
            const E = d === "y" ? "top" : "left",
              m = d === "y" ? "bottom" : "right",
              p = w + f[E],
              v = w - f[m];
            w = Fa(p, w, v);
          }
          const y = a.fn({ ...t, [h]: g, [d]: w });
          return { ...y, data: { x: y.x - n, y: y.y - r } };
        },
      }
    );
  },
  ov = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: l } = t,
            { offset: a = 0, mainAxis: s = !0, crossAxis: u = !0 } = Nt(e, t),
            f = { x: n, y: r },
            d = ur(o),
            h = Zs(d);
          let g = f[h],
            w = f[d];
          const y = Nt(a, t),
            E =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (s) {
            const v = h === "y" ? "height" : "width",
              $ = i.reference[h] - i.floating[v] + E.mainAxis,
              C = i.reference[h] + i.reference[v] - E.mainAxis;
            g < $ ? (g = $) : g > C && (g = C);
          }
          if (u) {
            var m, p;
            const v = h === "y" ? "width" : "height",
              $ = ["top", "left"].includes(Mt(o)),
              C =
                i.reference[d] -
                i.floating[v] +
                (($ && ((m = l.offset) == null ? void 0 : m[d])) || 0) +
                ($ ? 0 : E.crossAxis),
              S =
                i.reference[d] +
                i.reference[v] +
                ($ ? 0 : ((p = l.offset) == null ? void 0 : p[d]) || 0) -
                ($ ? E.crossAxis : 0);
            w < C ? (w = C) : w > S && (w = S);
          }
          return { [h]: g, [d]: w };
        },
      }
    );
  },
  iv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: i } = t,
            { apply: l = () => {}, ...a } = Nt(e, t),
            s = await eo(t, a),
            u = Mt(n),
            f = cr(n),
            d = ur(n) === "y",
            { width: h, height: g } = r.floating;
          let w, y;
          u === "top" || u === "bottom"
            ? ((w = u),
              (y =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = u), (w = f === "end" ? "top" : "bottom"));
          const E = g - s[w],
            m = h - s[y],
            p = !t.middlewareData.shift;
          let v = E,
            $ = m;
          if (d) {
            const S = h - s.left - s.right;
            $ = f || p ? tn(m, S) : S;
          } else {
            const S = g - s.top - s.bottom;
            v = f || p ? tn(E, S) : S;
          }
          if (p && !f) {
            const S = De(s.left, 0),
              k = De(s.right, 0),
              b = De(s.top, 0),
              R = De(s.bottom, 0);
            d
              ? ($ = h - 2 * (S !== 0 || k !== 0 ? S + k : De(s.left, s.right)))
              : (v =
                  g - 2 * (b !== 0 || R !== 0 ? b + R : De(s.top, s.bottom)));
          }
          await l({ ...t, availableWidth: $, availableHeight: v });
          const C = await o.getDimensions(i.floating);
          return h !== C.width || g !== C.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function rn(e) {
  return f0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Fe(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function At(e) {
  var t;
  return (t = (f0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function f0(e) {
  return e instanceof Node || e instanceof Fe(e).Node;
}
function Rt(e) {
  return e instanceof Element || e instanceof Fe(e).Element;
}
function gt(e) {
  return e instanceof HTMLElement || e instanceof Fe(e).HTMLElement;
}
function Lu(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Fe(e).ShadowRoot;
}
function po(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Ye(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function lv(e) {
  return ["table", "td", "th"].includes(rn(e));
}
function Xs(e) {
  const t = Js(),
    n = Ye(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function av(e) {
  let t = or(e);
  for (; gt(t) && !el(t); ) {
    if (Xs(t)) return t;
    t = or(t);
  }
  return null;
}
function Js() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function el(e) {
  return ["html", "body", "#document"].includes(rn(e));
}
function Ye(e) {
  return Fe(e).getComputedStyle(e);
}
function tl(e) {
  return Rt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function or(e) {
  if (rn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Lu(e) && e.host) || At(e);
  return Lu(t) ? t.host : t;
}
function p0(e) {
  const t = or(e);
  return el(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : gt(t) && po(t)
    ? t
    : p0(t);
}
function to(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = p0(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = Fe(o);
  return i
    ? t.concat(
        l,
        l.visualViewport || [],
        po(o) ? o : [],
        l.frameElement && n ? to(l.frameElement) : []
      )
    : t.concat(o, to(o, [], n));
}
function m0(e) {
  const t = Ye(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = gt(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    a = Ri(n) !== i || Ri(r) !== l;
  return a && ((n = i), (r = l)), { width: n, height: r, $: a };
}
function qs(e) {
  return Rt(e) ? e : e.contextElement;
}
function Yn(e) {
  const t = qs(e);
  if (!gt(t)) return nn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = m0(t);
  let l = (i ? Ri(n.width) : n.width) / r,
    a = (i ? Ri(n.height) : n.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: l, y: a }
  );
}
const sv = nn(0);
function h0(e) {
  const t = Fe(e);
  return !Js() || !t.visualViewport
    ? sv
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function cv(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Fe(e)) ? !1 : t;
}
function Cn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = qs(e);
  let l = nn(1);
  t && (r ? Rt(r) && (l = Yn(r)) : (l = Yn(e)));
  const a = cv(i, n, r) ? h0(i) : nn(0);
  let s = (o.left + a.x) / l.x,
    u = (o.top + a.y) / l.y,
    f = o.width / l.x,
    d = o.height / l.y;
  if (i) {
    const h = Fe(i),
      g = r && Rt(r) ? Fe(r) : r;
    let w = h.frameElement;
    for (; w && r && g !== h; ) {
      const y = Yn(w),
        E = w.getBoundingClientRect(),
        m = Ye(w),
        p = E.left + (w.clientLeft + parseFloat(m.paddingLeft)) * y.x,
        v = E.top + (w.clientTop + parseFloat(m.paddingTop)) * y.y;
      (s *= y.x),
        (u *= y.y),
        (f *= y.x),
        (d *= y.y),
        (s += p),
        (u += v),
        (w = Fe(w).frameElement);
    }
  }
  return Ti({ width: f, height: d, x: s, y: u });
}
function uv(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const o = gt(n),
    i = At(n);
  if (n === i) return t;
  let l = { scrollLeft: 0, scrollTop: 0 },
    a = nn(1);
  const s = nn(0);
  if (
    (o || (!o && r !== "fixed")) &&
    ((rn(n) !== "body" || po(i)) && (l = tl(n)), gt(n))
  ) {
    const u = Cn(n);
    (a = Yn(n)), (s.x = u.x + n.clientLeft), (s.y = u.y + n.clientTop);
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - l.scrollLeft * a.x + s.x,
    y: t.y * a.y - l.scrollTop * a.y + s.y,
  };
}
function dv(e) {
  return Array.from(e.getClientRects());
}
function v0(e) {
  return Cn(At(e)).left + tl(e).scrollLeft;
}
function fv(e) {
  const t = At(e),
    n = tl(e),
    r = e.ownerDocument.body,
    o = De(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = De(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + v0(e);
  const a = -n.scrollTop;
  return (
    Ye(r).direction === "rtl" && (l += De(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: l, y: a }
  );
}
function pv(e, t) {
  const n = Fe(e),
    r = At(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    l = r.clientHeight,
    a = 0,
    s = 0;
  if (o) {
    (i = o.width), (l = o.height);
    const u = Js();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: l, x: a, y: s };
}
function mv(e, t) {
  const n = Cn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = gt(e) ? Yn(e) : nn(1),
    l = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    s = o * i.x,
    u = r * i.y;
  return { width: l, height: a, x: s, y: u };
}
function ju(e, t, n) {
  let r;
  if (t === "viewport") r = pv(e, n);
  else if (t === "document") r = fv(At(e));
  else if (Rt(t)) r = mv(t, n);
  else {
    const o = h0(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Ti(r);
}
function g0(e, t) {
  const n = or(e);
  return n === t || !Rt(n) || el(n)
    ? !1
    : Ye(n).position === "fixed" || g0(n, t);
}
function hv(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = to(e, [], !1).filter((a) => Rt(a) && rn(a) !== "body"),
    o = null;
  const i = Ye(e).position === "fixed";
  let l = i ? or(e) : e;
  for (; Rt(l) && !el(l); ) {
    const a = Ye(l),
      s = Xs(l);
    !s && a.position === "fixed" && (o = null),
      (
        i
          ? !s && !o
          : (!s &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (po(l) && !s && g0(e, l))
      )
        ? (r = r.filter((f) => f !== l))
        : (o = a),
      (l = or(l));
  }
  return t.set(e, r), r;
}
function vv(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const l = [...(n === "clippingAncestors" ? hv(t, this._c) : [].concat(n)), r],
    a = l[0],
    s = l.reduce((u, f) => {
      const d = ju(t, f, o);
      return (
        (u.top = De(d.top, u.top)),
        (u.right = tn(d.right, u.right)),
        (u.bottom = tn(d.bottom, u.bottom)),
        (u.left = De(d.left, u.left)),
        u
      );
    }, ju(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top,
  };
}
function gv(e) {
  return m0(e);
}
function yv(e, t, n) {
  const r = gt(t),
    o = At(t),
    i = n === "fixed",
    l = Cn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const s = nn(0);
  if (r || (!r && !i))
    if (((rn(t) !== "body" || po(o)) && (a = tl(t)), r)) {
      const u = Cn(t, !0, i, t);
      (s.x = u.x + t.clientLeft), (s.y = u.y + t.clientTop);
    } else o && (s.x = v0(o));
  return {
    x: l.left + a.scrollLeft - s.x,
    y: l.top + a.scrollTop - s.y,
    width: l.width,
    height: l.height,
  };
}
function Fu(e, t) {
  return !gt(e) || Ye(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function y0(e, t) {
  const n = Fe(e);
  if (!gt(e)) return n;
  let r = Fu(e, t);
  for (; r && lv(r) && Ye(r).position === "static"; ) r = Fu(r, t);
  return r &&
    (rn(r) === "html" ||
      (rn(r) === "body" && Ye(r).position === "static" && !Xs(r)))
    ? n
    : r || av(e) || n;
}
const wv = async function (e) {
  let { reference: t, floating: n, strategy: r } = e;
  const o = this.getOffsetParent || y0,
    i = this.getDimensions;
  return {
    reference: yv(t, await o(n), r),
    floating: { x: 0, y: 0, ...(await i(n)) },
  };
};
function xv(e) {
  return Ye(e).direction === "rtl";
}
const $v = {
  convertOffsetParentRelativeRectToViewportRelativeRect: uv,
  getDocumentElement: At,
  getClippingRect: vv,
  getOffsetParent: y0,
  getElementRects: wv,
  getClientRects: dv,
  getDimensions: gv,
  getScale: Yn,
  isElement: Rt,
  isRTL: xv,
};
function Cv(e, t) {
  let n = null,
    r;
  const o = At(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), (n = null);
  }
  function l(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), i();
    const { left: u, top: f, width: d, height: h } = e.getBoundingClientRect();
    if ((a || t(), !d || !h)) return;
    const g = Uo(f),
      w = Uo(o.clientWidth - (u + d)),
      y = Uo(o.clientHeight - (f + h)),
      E = Uo(u),
      p = {
        rootMargin: -g + "px " + -w + "px " + -y + "px " + -E + "px",
        threshold: De(0, tn(1, s)) || 1,
      };
    let v = !0;
    function $(C) {
      const S = C[0].intersectionRatio;
      if (S !== s) {
        if (!v) return l();
        S
          ? l(!1, S)
          : (r = setTimeout(() => {
              l(!1, 1e-7);
            }, 100));
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver($, { ...p, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver($, p);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function Ev(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: s = !1,
    } = r,
    u = qs(e),
    f = o || i ? [...(u ? to(u) : []), ...to(t)] : [];
  f.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n);
  });
  const d = u && a ? Cv(u, n) : null;
  let h = -1,
    g = null;
  l &&
    ((g = new ResizeObserver((m) => {
      let [p] = m;
      p &&
        p.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          g && g.observe(t);
        }))),
        n();
    })),
    u && !s && g.observe(u),
    g.observe(t));
  let w,
    y = s ? Cn(e) : null;
  s && E();
  function E() {
    const m = Cn(e);
    y &&
      (m.x !== y.x ||
        m.y !== y.y ||
        m.width !== y.width ||
        m.height !== y.height) &&
      n(),
      (y = m),
      (w = requestAnimationFrame(E));
  }
  return (
    n(),
    () => {
      f.forEach((m) => {
        o && m.removeEventListener("scroll", n),
          i && m.removeEventListener("resize", n);
      }),
        d && d(),
        g && g.disconnect(),
        (g = null),
        s && cancelAnimationFrame(w);
    }
  );
}
const Sv = (e, t, n) => {
    const r = new Map(),
      o = { platform: $v, ...n },
      i = { ...o.platform, _c: r };
    return Jh(e, t, { ...o, platform: i });
  },
  kv = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Ou({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Ou({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  };
var ri = typeof document < "u" ? c.useLayoutEffect : c.useEffect;
function Ai(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ai(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ai(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function w0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zu(e, t) {
  const n = w0(e);
  return Math.round(t * n) / n;
}
function Uu(e) {
  const t = c.useRef(e);
  return (
    ri(() => {
      t.current = e;
    }),
    t
  );
}
function bv(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: l } = {},
      transform: a = !0,
      whileElementsMounted: s,
      open: u,
    } = e,
    [f, d] = c.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, g] = c.useState(r);
  Ai(h, r) || g(r);
  const [w, y] = c.useState(null),
    [E, m] = c.useState(null),
    p = c.useCallback(
      (z) => {
        z != S.current && ((S.current = z), y(z));
      },
      [y]
    ),
    v = c.useCallback(
      (z) => {
        z !== k.current && ((k.current = z), m(z));
      },
      [m]
    ),
    $ = i || w,
    C = l || E,
    S = c.useRef(null),
    k = c.useRef(null),
    b = c.useRef(f),
    R = Uu(s),
    P = Uu(o),
    F = c.useCallback(() => {
      if (!S.current || !k.current) return;
      const z = { placement: t, strategy: n, middleware: h };
      P.current && (z.platform = P.current),
        Sv(S.current, k.current, z).then((Y) => {
          const M = { ...Y, isPositioned: !0 };
          I.current &&
            !Ai(b.current, M) &&
            ((b.current = M),
            co.flushSync(() => {
              d(M);
            }));
        });
    }, [h, t, n, P]);
  ri(() => {
    u === !1 &&
      b.current.isPositioned &&
      ((b.current.isPositioned = !1), d((z) => ({ ...z, isPositioned: !1 })));
  }, [u]);
  const I = c.useRef(!1);
  ri(
    () => (
      (I.current = !0),
      () => {
        I.current = !1;
      }
    ),
    []
  ),
    ri(() => {
      if (($ && (S.current = $), C && (k.current = C), $ && C)) {
        if (R.current) return R.current($, C, F);
        F();
      }
    }, [$, C, F, R]);
  const te = c.useMemo(
      () => ({ reference: S, floating: k, setReference: p, setFloating: v }),
      [p, v]
    ),
    j = c.useMemo(() => ({ reference: $, floating: C }), [$, C]),
    H = c.useMemo(() => {
      const z = { position: n, left: 0, top: 0 };
      if (!j.floating) return z;
      const Y = zu(j.floating, f.x),
        M = zu(j.floating, f.y);
      return a
        ? {
            ...z,
            transform: "translate(" + Y + "px, " + M + "px)",
            ...(w0(j.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: Y, top: M };
    }, [n, a, j.floating, f.x, f.y]);
  return c.useMemo(
    () => ({ ...f, update: F, refs: te, elements: j, floatingStyles: H }),
    [f, F, te, j, H]
  );
}
function _v(e) {
  const [t, n] = c.useState(void 0);
  return (
    _t(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let l, a;
          if ("borderBoxSize" in i) {
            const s = i.borderBoxSize,
              u = Array.isArray(s) ? s[0] : s;
            (l = u.inlineSize), (a = u.blockSize);
          } else (l = e.offsetWidth), (a = e.offsetHeight);
          n({ width: l, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const x0 = "Popper",
  [$0, C0] = kn(x0),
  [Nv, E0] = $0(x0),
  Mv = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = c.useState(null);
    return c.createElement(Nv, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  Rv = "PopperAnchor",
  Pv = c.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = E0(Rv, n),
      l = c.useRef(null),
      a = ae(t, l);
    return (
      c.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
      }),
      r ? null : c.createElement(Z.div, T({}, o, { ref: a }))
    );
  }),
  S0 = "PopperContent",
  [Tv, bg] = $0(S0),
  Av = c.forwardRef((e, t) => {
    var n, r, o, i, l, a, s, u;
    const {
        __scopePopper: f,
        side: d = "bottom",
        sideOffset: h = 0,
        align: g = "center",
        alignOffset: w = 0,
        arrowPadding: y = 0,
        avoidCollisions: E = !0,
        collisionBoundary: m = [],
        collisionPadding: p = 0,
        sticky: v = "partial",
        hideWhenDetached: $ = !1,
        updatePositionStrategy: C = "optimized",
        onPlaced: S,
        ...k
      } = e,
      b = E0(S0, f),
      [R, P] = c.useState(null),
      F = ae(t, (dr) => P(dr)),
      [I, te] = c.useState(null),
      j = _v(I),
      H = (n = j == null ? void 0 : j.width) !== null && n !== void 0 ? n : 0,
      z = (r = j == null ? void 0 : j.height) !== null && r !== void 0 ? r : 0,
      Y = d + (g !== "center" ? "-" + g : ""),
      M =
        typeof p == "number"
          ? p
          : { top: 0, right: 0, bottom: 0, left: 0, ...p },
      N = Array.isArray(m) ? m : [m],
      O = N.length > 0,
      L = { padding: M, boundary: N.filter(Ov), altBoundary: O },
      {
        refs: B,
        floatingStyles: Te,
        placement: Ae,
        isPositioned: qe,
        middlewareData: ce,
      } = bv({
        strategy: "fixed",
        placement: Y,
        whileElementsMounted: (...dr) =>
          Ev(...dr, { animationFrame: C === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          nv({ mainAxis: h + z, alignmentAxis: w }),
          E &&
            rv({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === "partial" ? ov() : void 0,
              ...L,
            }),
          E && qh({ ...L }),
          iv({
            ...L,
            apply: ({
              elements: dr,
              rects: lc,
              availableWidth: r2,
              availableHeight: o2,
            }) => {
              const { width: i2, height: l2 } = lc.reference,
                go = dr.floating.style;
              go.setProperty("--radix-popper-available-width", `${r2}px`),
                go.setProperty("--radix-popper-available-height", `${o2}px`),
                go.setProperty("--radix-popper-anchor-width", `${i2}px`),
                go.setProperty("--radix-popper-anchor-height", `${l2}px`);
            },
          }),
          I && kv({ element: I, padding: y }),
          Iv({ arrowWidth: H, arrowHeight: z }),
          $ && ev({ strategy: "referenceHidden", ...L }),
        ],
      }),
      [Oe, ho] = k0(Ae),
      be = he(S);
    _t(() => {
      qe && (be == null || be());
    }, [qe, be]);
    const vo = (o = ce.arrow) === null || o === void 0 ? void 0 : o.x,
      q0 = (i = ce.arrow) === null || i === void 0 ? void 0 : i.y,
      e2 =
        ((l = ce.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !==
        0,
      [t2, n2] = c.useState();
    return (
      _t(() => {
        R && n2(window.getComputedStyle(R).zIndex);
      }, [R]),
      c.createElement(
        "div",
        {
          ref: B.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...Te,
            transform: qe ? Te.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: t2,
            "--radix-popper-transform-origin": [
              (a = ce.transformOrigin) === null || a === void 0 ? void 0 : a.x,
              (s = ce.transformOrigin) === null || s === void 0 ? void 0 : s.y,
            ].join(" "),
          },
          dir: e.dir,
        },
        c.createElement(
          Tv,
          {
            scope: f,
            placedSide: Oe,
            onArrowChange: te,
            arrowX: vo,
            arrowY: q0,
            shouldHideArrow: e2,
          },
          c.createElement(
            Z.div,
            T({ "data-side": Oe, "data-align": ho }, k, {
              ref: F,
              style: {
                ...k.style,
                animation: qe ? void 0 : "none",
                opacity:
                  (u = ce.hide) !== null && u !== void 0 && u.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    );
  });
function Ov(e) {
  return e !== null;
}
const Iv = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: a, rects: s, middlewareData: u } = t,
      d =
        ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      h = d ? 0 : e.arrowWidth,
      g = d ? 0 : e.arrowHeight,
      [w, y] = k0(a),
      E = { start: "0%", center: "50%", end: "100%" }[y],
      m =
        ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        h / 2,
      p =
        ((i = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null &&
        i !== void 0
          ? i
          : 0) +
        g / 2;
    let v = "",
      $ = "";
    return (
      w === "bottom"
        ? ((v = d ? E : `${m}px`), ($ = `${-g}px`))
        : w === "top"
        ? ((v = d ? E : `${m}px`), ($ = `${s.floating.height + g}px`))
        : w === "right"
        ? ((v = `${-g}px`), ($ = d ? E : `${p}px`))
        : w === "left" &&
          ((v = `${s.floating.width + g}px`), ($ = d ? E : `${p}px`)),
      { data: { x: v, y: $ } }
    );
  },
});
function k0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Dv = Mv,
  Lv = Pv,
  jv = Av,
  Dl = "rovingFocusGroup.onEntryFocus",
  Fv = { bubbles: !1, cancelable: !0 },
  ec = "RovingFocusGroup",
  [Ua, b0, zv] = Ji(ec),
  [Uv, _0] = kn(ec, [zv]),
  [Vv, Bv] = Uv(ec),
  Wv = c.forwardRef((e, t) =>
    c.createElement(
      Ua.Provider,
      { scope: e.__scopeRovingFocusGroup },
      c.createElement(
        Ua.Slot,
        { scope: e.__scopeRovingFocusGroup },
        c.createElement(Hv, T({}, e, { ref: t }))
      )
    )
  ),
  Hv = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: l,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: s,
        onEntryFocus: u,
        ...f
      } = e,
      d = c.useRef(null),
      h = ae(t, d),
      g = Fs(i),
      [w = null, y] = Xi({ prop: l, defaultProp: a, onChange: s }),
      [E, m] = c.useState(!1),
      p = he(u),
      v = b0(n),
      $ = c.useRef(!1),
      [C, S] = c.useState(0);
    return (
      c.useEffect(() => {
        const k = d.current;
        if (k)
          return k.addEventListener(Dl, p), () => k.removeEventListener(Dl, p);
      }, [p]),
      c.createElement(
        Vv,
        {
          scope: n,
          orientation: r,
          dir: g,
          loop: o,
          currentTabStopId: w,
          onItemFocus: c.useCallback((k) => y(k), [y]),
          onItemShiftTab: c.useCallback(() => m(!0), []),
          onFocusableItemAdd: c.useCallback(() => S((k) => k + 1), []),
          onFocusableItemRemove: c.useCallback(() => S((k) => k - 1), []),
        },
        c.createElement(
          Z.div,
          T({ tabIndex: E || C === 0 ? -1 : 0, "data-orientation": r }, f, {
            ref: h,
            style: { outline: "none", ...e.style },
            onMouseDown: D(e.onMouseDown, () => {
              $.current = !0;
            }),
            onFocus: D(e.onFocus, (k) => {
              const b = !$.current;
              if (k.target === k.currentTarget && b && !E) {
                const R = new CustomEvent(Dl, Fv);
                if ((k.currentTarget.dispatchEvent(R), !R.defaultPrevented)) {
                  const P = v().filter((H) => H.focusable),
                    F = P.find((H) => H.active),
                    I = P.find((H) => H.id === w),
                    j = [F, I, ...P].filter(Boolean).map((H) => H.ref.current);
                  N0(j);
                }
              }
              $.current = !1;
            }),
            onBlur: D(e.onBlur, () => m(!1)),
          })
        )
      )
    );
  }),
  Kv = "RovingFocusGroupItem",
  Gv = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...l
      } = e,
      a = Jt(),
      s = i || a,
      u = Bv(Kv, n),
      f = u.currentTabStopId === s,
      d = b0(n),
      { onFocusableItemAdd: h, onFocusableItemRemove: g } = u;
    return (
      c.useEffect(() => {
        if (r) return h(), () => g();
      }, [r, h, g]),
      c.createElement(
        Ua.ItemSlot,
        { scope: n, id: s, focusable: r, active: o },
        c.createElement(
          Z.span,
          T({ tabIndex: f ? 0 : -1, "data-orientation": u.orientation }, l, {
            ref: t,
            onMouseDown: D(e.onMouseDown, (w) => {
              r ? u.onItemFocus(s) : w.preventDefault();
            }),
            onFocus: D(e.onFocus, () => u.onItemFocus(s)),
            onKeyDown: D(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const y = Yv(w, u.orientation, u.dir);
              if (y !== void 0) {
                w.preventDefault();
                let m = d()
                  .filter((p) => p.focusable)
                  .map((p) => p.ref.current);
                if (y === "last") m.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && m.reverse();
                  const p = m.indexOf(w.currentTarget);
                  m = u.loop ? Xv(m, p + 1) : m.slice(p + 1);
                }
                setTimeout(() => N0(m));
              }
            }),
          })
        )
      )
    );
  }),
  Zv = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
  };
function Qv(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function Yv(e, t, n) {
  const r = Qv(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return Zv[r];
}
function N0(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Xv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const Jv = Wv,
  qv = Gv,
  Va = ["Enter", " "],
  e6 = ["ArrowDown", "PageUp", "Home"],
  M0 = ["ArrowUp", "PageDown", "End"],
  t6 = [...e6, ...M0],
  n6 = { ltr: [...Va, "ArrowRight"], rtl: [...Va, "ArrowLeft"] },
  r6 = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  nl = "Menu",
  [no, o6, i6] = Ji(nl),
  [bn, R0] = kn(nl, [i6, C0, _0]),
  tc = C0(),
  P0 = _0(),
  [l6, _n] = bn(nl),
  [a6, mo] = bn(nl),
  s6 = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: i,
        modal: l = !0,
      } = e,
      a = tc(t),
      [s, u] = c.useState(null),
      f = c.useRef(!1),
      d = he(i),
      h = Fs(o);
    return (
      c.useEffect(() => {
        const g = () => {
            (f.current = !0),
              document.addEventListener("pointerdown", w, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", w, {
                capture: !0,
                once: !0,
              });
          },
          w = () => (f.current = !1);
        return (
          document.addEventListener("keydown", g, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", g, { capture: !0 }),
              document.removeEventListener("pointerdown", w, { capture: !0 }),
              document.removeEventListener("pointermove", w, { capture: !0 });
          }
        );
      }, []),
      c.createElement(
        Dv,
        a,
        c.createElement(
          l6,
          {
            scope: t,
            open: n,
            onOpenChange: d,
            content: s,
            onContentChange: u,
          },
          c.createElement(
            a6,
            {
              scope: t,
              onClose: c.useCallback(() => d(!1), [d]),
              isUsingKeyboardRef: f,
              dir: h,
              modal: l,
            },
            r
          )
        )
      )
    );
  },
  T0 = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = tc(n);
    return c.createElement(Lv, T({}, o, r, { ref: t }));
  }),
  A0 = "MenuPortal",
  [c6, O0] = bn(A0, { forceMount: void 0 }),
  u6 = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = _n(A0, t);
    return c.createElement(
      c6,
      { scope: t, forceMount: n },
      c.createElement(
        Xe,
        { present: n || i.open },
        c.createElement(Ff, { asChild: !0, container: o }, r)
      )
    );
  },
  at = "MenuContent",
  [d6, nc] = bn(at),
  f6 = c.forwardRef((e, t) => {
    const n = O0(at, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = _n(at, e.__scopeMenu),
      l = mo(at, e.__scopeMenu);
    return c.createElement(
      no.Provider,
      { scope: e.__scopeMenu },
      c.createElement(
        Xe,
        { present: r || i.open },
        c.createElement(
          no.Slot,
          { scope: e.__scopeMenu },
          l.modal
            ? c.createElement(p6, T({}, o, { ref: t }))
            : c.createElement(m6, T({}, o, { ref: t }))
        )
      )
    );
  }),
  p6 = c.forwardRef((e, t) => {
    const n = _n(at, e.__scopeMenu),
      r = c.useRef(null),
      o = ae(t, r);
    return (
      c.useEffect(() => {
        const i = r.current;
        if (i) return Xf(i);
      }, []),
      c.createElement(
        rc,
        T({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: D(e.onFocusOutside, (i) => i.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => n.onOpenChange(!1),
        })
      )
    );
  }),
  m6 = c.forwardRef((e, t) => {
    const n = _n(at, e.__scopeMenu);
    return c.createElement(
      rc,
      T({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  rc = c.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: l,
        disableOutsidePointerEvents: a,
        onEntryFocus: s,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: d,
        onInteractOutside: h,
        onDismiss: g,
        disableOutsideScroll: w,
        ...y
      } = e,
      E = _n(at, n),
      m = mo(at, n),
      p = tc(n),
      v = P0(n),
      $ = o6(n),
      [C, S] = c.useState(null),
      k = c.useRef(null),
      b = ae(t, k, E.onContentChange),
      R = c.useRef(0),
      P = c.useRef(""),
      F = c.useRef(0),
      I = c.useRef(null),
      te = c.useRef("right"),
      j = c.useRef(0),
      H = w ? Qf : c.Fragment,
      z = w ? { as: $n, allowPinchZoom: !0 } : void 0,
      Y = (N) => {
        var O, L;
        const B = P.current + N,
          Te = $().filter((be) => !be.disabled),
          Ae = document.activeElement,
          qe =
            (O = Te.find((be) => be.ref.current === Ae)) === null ||
            O === void 0
              ? void 0
              : O.textValue,
          ce = Te.map((be) => be.textValue),
          Oe = R6(ce, B, qe),
          ho =
            (L = Te.find((be) => be.textValue === Oe)) === null || L === void 0
              ? void 0
              : L.ref.current;
        (function be(vo) {
          (P.current = vo),
            window.clearTimeout(R.current),
            vo !== "" && (R.current = window.setTimeout(() => be(""), 1e3));
        })(B),
          ho && setTimeout(() => ho.focus());
      };
    c.useEffect(() => () => window.clearTimeout(R.current), []), zf();
    const M = c.useCallback((N) => {
      var O, L;
      return (
        te.current ===
          ((O = I.current) === null || O === void 0 ? void 0 : O.side) &&
        T6(N, (L = I.current) === null || L === void 0 ? void 0 : L.area)
      );
    }, []);
    return c.createElement(
      d6,
      {
        scope: n,
        searchRef: P,
        onItemEnter: c.useCallback(
          (N) => {
            M(N) && N.preventDefault();
          },
          [M]
        ),
        onItemLeave: c.useCallback(
          (N) => {
            var O;
            M(N) ||
              ((O = k.current) === null || O === void 0 || O.focus(), S(null));
          },
          [M]
        ),
        onTriggerLeave: c.useCallback(
          (N) => {
            M(N) && N.preventDefault();
          },
          [M]
        ),
        pointerGraceTimerRef: F,
        onPointerGraceIntentChange: c.useCallback((N) => {
          I.current = N;
        }, []),
      },
      c.createElement(
        H,
        z,
        c.createElement(
          Lf,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: D(i, (N) => {
              var O;
              N.preventDefault(),
                (O = k.current) === null || O === void 0 || O.focus();
            }),
            onUnmountAutoFocus: l,
          },
          c.createElement(
            zs,
            {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: u,
              onPointerDownOutside: f,
              onFocusOutside: d,
              onInteractOutside: h,
              onDismiss: g,
            },
            c.createElement(
              Jv,
              T({ asChild: !0 }, v, {
                dir: m.dir,
                orientation: "vertical",
                loop: r,
                currentTabStopId: C,
                onCurrentTabStopIdChange: S,
                onEntryFocus: D(s, (N) => {
                  m.isUsingKeyboardRef.current || N.preventDefault();
                }),
              }),
              c.createElement(
                jv,
                T(
                  {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "data-state": F0(E.open),
                    "data-radix-menu-content": "",
                    dir: m.dir,
                  },
                  p,
                  y,
                  {
                    ref: b,
                    style: { outline: "none", ...y.style },
                    onKeyDown: D(y.onKeyDown, (N) => {
                      const L =
                          N.target.closest("[data-radix-menu-content]") ===
                          N.currentTarget,
                        B = N.ctrlKey || N.altKey || N.metaKey,
                        Te = N.key.length === 1;
                      L &&
                        (N.key === "Tab" && N.preventDefault(),
                        !B && Te && Y(N.key));
                      const Ae = k.current;
                      if (N.target !== Ae || !t6.includes(N.key)) return;
                      N.preventDefault();
                      const ce = $()
                        .filter((Oe) => !Oe.disabled)
                        .map((Oe) => Oe.ref.current);
                      M0.includes(N.key) && ce.reverse(), N6(ce);
                    }),
                    onBlur: D(e.onBlur, (N) => {
                      N.currentTarget.contains(N.target) ||
                        (window.clearTimeout(R.current), (P.current = ""));
                    }),
                    onPointerMove: D(
                      e.onPointerMove,
                      ro((N) => {
                        const O = N.target,
                          L = j.current !== N.clientX;
                        if (N.currentTarget.contains(O) && L) {
                          const B = N.clientX > j.current ? "right" : "left";
                          (te.current = B), (j.current = N.clientX);
                        }
                      })
                    ),
                  }
                )
              )
            )
          )
        )
      )
    );
  }),
  h6 = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return c.createElement(Z.div, T({}, r, { ref: t }));
  }),
  Ba = "MenuItem",
  Vu = "menu.itemSelect",
  oc = c.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = c.useRef(null),
      l = mo(Ba, e.__scopeMenu),
      a = nc(Ba, e.__scopeMenu),
      s = ae(t, i),
      u = c.useRef(!1),
      f = () => {
        const d = i.current;
        if (!n && d) {
          const h = new CustomEvent(Vu, { bubbles: !0, cancelable: !0 });
          d.addEventListener(Vu, (g) => (r == null ? void 0 : r(g)), {
            once: !0,
          }),
            yf(d, h),
            h.defaultPrevented ? (u.current = !1) : l.onClose();
        }
      };
    return c.createElement(
      I0,
      T({}, o, {
        ref: s,
        disabled: n,
        onClick: D(e.onClick, f),
        onPointerDown: (d) => {
          var h;
          (h = e.onPointerDown) === null || h === void 0 || h.call(e, d),
            (u.current = !0);
        },
        onPointerUp: D(e.onPointerUp, (d) => {
          var h;
          u.current ||
            (h = d.currentTarget) === null ||
            h === void 0 ||
            h.click();
        }),
        onKeyDown: D(e.onKeyDown, (d) => {
          const h = a.searchRef.current !== "";
          n ||
            (h && d.key === " ") ||
            (Va.includes(d.key) &&
              (d.currentTarget.click(), d.preventDefault()));
        }),
      })
    );
  }),
  I0 = c.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      l = nc(Ba, n),
      a = P0(n),
      s = c.useRef(null),
      u = ae(t, s),
      [f, d] = c.useState(!1),
      [h, g] = c.useState("");
    return (
      c.useEffect(() => {
        const w = s.current;
        if (w) {
          var y;
          g(((y = w.textContent) !== null && y !== void 0 ? y : "").trim());
        }
      }, [i.children]),
      c.createElement(
        no.ItemSlot,
        { scope: n, disabled: r, textValue: o ?? h },
        c.createElement(
          qv,
          T({ asChild: !0 }, a, { focusable: !r }),
          c.createElement(
            Z.div,
            T(
              {
                role: "menuitem",
                "data-highlighted": f ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
              },
              i,
              {
                ref: u,
                onPointerMove: D(
                  e.onPointerMove,
                  ro((w) => {
                    r
                      ? l.onItemLeave(w)
                      : (l.onItemEnter(w),
                        w.defaultPrevented || w.currentTarget.focus());
                  })
                ),
                onPointerLeave: D(
                  e.onPointerLeave,
                  ro((w) => l.onItemLeave(w))
                ),
                onFocus: D(e.onFocus, () => d(!0)),
                onBlur: D(e.onBlur, () => d(!1)),
              }
            )
          )
        )
      )
    );
  }),
  v6 = c.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return c.createElement(
      L0,
      { scope: e.__scopeMenu, checked: n },
      c.createElement(
        oc,
        T(
          { role: "menuitemcheckbox", "aria-checked": Oi(n) ? "mixed" : n },
          o,
          {
            ref: t,
            "data-state": ic(n),
            onSelect: D(
              o.onSelect,
              () => (r == null ? void 0 : r(Oi(n) ? !0 : !n)),
              { checkForDefaultPrevented: !1 }
            ),
          }
        )
      )
    );
  }),
  g6 = "MenuRadioGroup",
  [_g, y6] = bn(g6, { value: void 0, onValueChange: () => {} }),
  w6 = "MenuRadioItem",
  x6 = c.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = y6(w6, e.__scopeMenu),
      i = n === o.value;
    return c.createElement(
      L0,
      { scope: e.__scopeMenu, checked: i },
      c.createElement(
        oc,
        T({ role: "menuitemradio", "aria-checked": i }, r, {
          ref: t,
          "data-state": ic(i),
          onSelect: D(
            r.onSelect,
            () => {
              var l;
              return (l = o.onValueChange) === null || l === void 0
                ? void 0
                : l.call(o, n);
            },
            { checkForDefaultPrevented: !1 }
          ),
        })
      )
    );
  }),
  D0 = "MenuItemIndicator",
  [L0, $6] = bn(D0, { checked: !1 }),
  C6 = c.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      i = $6(D0, n);
    return c.createElement(
      Xe,
      { present: r || Oi(i.checked) || i.checked === !0 },
      c.createElement(Z.span, T({}, o, { ref: t, "data-state": ic(i.checked) }))
    );
  }),
  E6 = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return c.createElement(
      Z.div,
      T({ role: "separator", "aria-orientation": "horizontal" }, r, { ref: t })
    );
  }),
  S6 = "MenuSub",
  [Ng, j0] = bn(S6),
  Vo = "MenuSubTrigger",
  k6 = c.forwardRef((e, t) => {
    const n = _n(Vo, e.__scopeMenu),
      r = mo(Vo, e.__scopeMenu),
      o = j0(Vo, e.__scopeMenu),
      i = nc(Vo, e.__scopeMenu),
      l = c.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: s } = i,
      u = { __scopeMenu: e.__scopeMenu },
      f = c.useCallback(() => {
        l.current && window.clearTimeout(l.current), (l.current = null);
      }, []);
    return (
      c.useEffect(() => f, [f]),
      c.useEffect(() => {
        const d = a.current;
        return () => {
          window.clearTimeout(d), s(null);
        };
      }, [a, s]),
      c.createElement(
        T0,
        T({ asChild: !0 }, u),
        c.createElement(
          I0,
          T(
            {
              id: o.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": n.open,
              "aria-controls": o.contentId,
              "data-state": F0(n.open),
            },
            e,
            {
              ref: uo(t, o.onTriggerChange),
              onClick: (d) => {
                var h;
                (h = e.onClick) === null || h === void 0 || h.call(e, d),
                  !(e.disabled || d.defaultPrevented) &&
                    (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
              },
              onPointerMove: D(
                e.onPointerMove,
                ro((d) => {
                  i.onItemEnter(d),
                    !d.defaultPrevented &&
                      !e.disabled &&
                      !n.open &&
                      !l.current &&
                      (i.onPointerGraceIntentChange(null),
                      (l.current = window.setTimeout(() => {
                        n.onOpenChange(!0), f();
                      }, 100)));
                })
              ),
              onPointerLeave: D(
                e.onPointerLeave,
                ro((d) => {
                  var h;
                  f();
                  const g =
                    (h = n.content) === null || h === void 0
                      ? void 0
                      : h.getBoundingClientRect();
                  if (g) {
                    var w;
                    const y =
                        (w = n.content) === null || w === void 0
                          ? void 0
                          : w.dataset.side,
                      E = y === "right",
                      m = E ? -5 : 5,
                      p = g[E ? "left" : "right"],
                      v = g[E ? "right" : "left"];
                    i.onPointerGraceIntentChange({
                      area: [
                        { x: d.clientX + m, y: d.clientY },
                        { x: p, y: g.top },
                        { x: v, y: g.top },
                        { x: v, y: g.bottom },
                        { x: p, y: g.bottom },
                      ],
                      side: y,
                    }),
                      window.clearTimeout(a.current),
                      (a.current = window.setTimeout(
                        () => i.onPointerGraceIntentChange(null),
                        300
                      ));
                  } else {
                    if ((i.onTriggerLeave(d), d.defaultPrevented)) return;
                    i.onPointerGraceIntentChange(null);
                  }
                })
              ),
              onKeyDown: D(e.onKeyDown, (d) => {
                const h = i.searchRef.current !== "";
                if (
                  !(e.disabled || (h && d.key === " ")) &&
                  n6[r.dir].includes(d.key)
                ) {
                  var g;
                  n.onOpenChange(!0),
                    (g = n.content) === null || g === void 0 || g.focus(),
                    d.preventDefault();
                }
              }),
            }
          )
        )
      )
    );
  }),
  b6 = "MenuSubContent",
  _6 = c.forwardRef((e, t) => {
    const n = O0(at, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = _n(at, e.__scopeMenu),
      l = mo(at, e.__scopeMenu),
      a = j0(b6, e.__scopeMenu),
      s = c.useRef(null),
      u = ae(t, s);
    return c.createElement(
      no.Provider,
      { scope: e.__scopeMenu },
      c.createElement(
        Xe,
        { present: r || i.open },
        c.createElement(
          no.Slot,
          { scope: e.__scopeMenu },
          c.createElement(
            rc,
            T({ id: a.contentId, "aria-labelledby": a.triggerId }, o, {
              ref: u,
              align: "start",
              side: l.dir === "rtl" ? "left" : "right",
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (f) => {
                var d;
                l.isUsingKeyboardRef.current &&
                  ((d = s.current) === null || d === void 0 || d.focus()),
                  f.preventDefault();
              },
              onCloseAutoFocus: (f) => f.preventDefault(),
              onFocusOutside: D(e.onFocusOutside, (f) => {
                f.target !== a.trigger && i.onOpenChange(!1);
              }),
              onEscapeKeyDown: D(e.onEscapeKeyDown, (f) => {
                l.onClose(), f.preventDefault();
              }),
              onKeyDown: D(e.onKeyDown, (f) => {
                const d = f.currentTarget.contains(f.target),
                  h = r6[l.dir].includes(f.key);
                if (d && h) {
                  var g;
                  i.onOpenChange(!1),
                    (g = a.trigger) === null || g === void 0 || g.focus(),
                    f.preventDefault();
                }
              }),
            })
          )
        )
      )
    );
  });
function F0(e) {
  return e ? "open" : "closed";
}
function Oi(e) {
  return e === "indeterminate";
}
function ic(e) {
  return Oi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function N6(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function M6(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function R6(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let l = M6(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter((u) => u !== n));
  const s = l.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return s !== n ? s : void 0;
}
function P6(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
    const a = t[i].x,
      s = t[i].y,
      u = t[l].x,
      f = t[l].y;
    s > r != f > r && n < ((u - a) * (r - s)) / (f - s) + a && (o = !o);
  }
  return o;
}
function T6(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return P6(n, t);
}
function ro(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
const A6 = s6,
  O6 = T0,
  I6 = u6,
  D6 = f6,
  L6 = h6,
  j6 = oc,
  F6 = v6,
  z6 = x6,
  U6 = C6,
  V6 = E6,
  B6 = k6,
  W6 = _6,
  z0 = "DropdownMenu",
  [H6, Mg] = kn(z0, [R0]),
  Je = R0(),
  [K6, U0] = H6(z0),
  G6 = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: i,
        onOpenChange: l,
        modal: a = !0,
      } = e,
      s = Je(t),
      u = c.useRef(null),
      [f = !1, d] = Xi({ prop: o, defaultProp: i, onChange: l });
    return c.createElement(
      K6,
      {
        scope: t,
        triggerId: Jt(),
        triggerRef: u,
        contentId: Jt(),
        open: f,
        onOpenChange: d,
        onOpenToggle: c.useCallback(() => d((h) => !h), [d]),
        modal: a,
      },
      c.createElement(
        A6,
        T({}, s, { open: f, onOpenChange: d, dir: r, modal: a }),
        n
      )
    );
  },
  Z6 = "DropdownMenuTrigger",
  Q6 = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      i = U0(Z6, n),
      l = Je(n);
    return c.createElement(
      O6,
      T({ asChild: !0 }, l),
      c.createElement(
        Z.button,
        T(
          {
            type: "button",
            id: i.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": i.open ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
          },
          o,
          {
            ref: uo(t, i.triggerRef),
            onPointerDown: D(e.onPointerDown, (a) => {
              !r &&
                a.button === 0 &&
                a.ctrlKey === !1 &&
                (i.onOpenToggle(), i.open || a.preventDefault());
            }),
            onKeyDown: D(e.onKeyDown, (a) => {
              r ||
                (["Enter", " "].includes(a.key) && i.onOpenToggle(),
                a.key === "ArrowDown" && i.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(a.key) &&
                  a.preventDefault());
            }),
          }
        )
      )
    );
  }),
  Y6 = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = Je(t);
    return c.createElement(I6, T({}, r, n));
  },
  X6 = "DropdownMenuContent",
  J6 = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U0(X6, n),
      i = Je(n),
      l = c.useRef(!1);
    return c.createElement(
      D6,
      T({ id: o.contentId, "aria-labelledby": o.triggerId }, i, r, {
        ref: t,
        onCloseAutoFocus: D(e.onCloseAutoFocus, (a) => {
          var s;
          l.current ||
            (s = o.triggerRef.current) === null ||
            s === void 0 ||
            s.focus(),
            (l.current = !1),
            a.preventDefault();
        }),
        onInteractOutside: D(e.onInteractOutside, (a) => {
          const s = a.detail.originalEvent,
            u = s.button === 0 && s.ctrlKey === !0,
            f = s.button === 2 || u;
          (!o.modal || f) && (l.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width":
            "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height":
            "var(--radix-popper-anchor-height)",
        },
      })
    );
  }),
  q6 = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Je(n);
    return c.createElement(L6, T({}, o, r, { ref: t }));
  }),
  eg = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Je(n);
    return c.createElement(j6, T({}, o, r, { ref: t }));
  }),
  tg = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Je(n);
    return c.createElement(F6, T({}, o, r, { ref: t }));
  }),
  ng = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Je(n);
    return c.createElement(z6, T({}, o, r, { ref: t }));
  }),
  rg = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Je(n);
    return c.createElement(U6, T({}, o, r, { ref: t }));
  }),
  og = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Je(n);
    return c.createElement(V6, T({}, o, r, { ref: t }));
  }),
  ig = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Je(n);
    return c.createElement(B6, T({}, o, r, { ref: t }));
  }),
  lg = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Je(n);
    return c.createElement(
      W6,
      T({}, o, r, {
        ref: t,
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width":
            "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height":
            "var(--radix-popper-anchor-height)",
        },
      })
    );
  }),
  ag = G6,
  sg = Q6,
  cg = Y6,
  V0 = J6,
  B0 = q6,
  W0 = eg,
  H0 = tg,
  K0 = ng,
  G0 = rg,
  Z0 = og,
  Q0 = ig,
  Y0 = lg,
  ug = ag,
  dg = sg,
  fg = c.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
    x.jsxs(Q0, {
      ref: o,
      className: G(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t && "pl-8",
        e
      ),
      ...r,
      children: [n, x.jsx(y4, { className: "ml-auto h-4 w-4" })],
    })
  );
fg.displayName = Q0.displayName;
const pg = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(Y0, {
    ref: n,
    className: G(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t,
  })
);
pg.displayName = Y0.displayName;
const X0 = c.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  x.jsx(cg, {
    children: x.jsx(V0, {
      ref: r,
      sideOffset: t,
      className: G(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    }),
  })
);
X0.displayName = V0.displayName;
const oi = c.forwardRef(({ className: e, inset: t, ...n }, r) =>
  x.jsx(W0, {
    ref: r,
    className: G(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n,
  })
);
oi.displayName = W0.displayName;
const mg = c.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  x.jsxs(H0, {
    ref: o,
    className: G(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      x.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: x.jsx(G0, { children: x.jsx(v4, { className: "h-4 w-4" }) }),
      }),
      t,
    ],
  })
);
mg.displayName = H0.displayName;
const hg = c.forwardRef(({ className: e, children: t, ...n }, r) =>
  x.jsxs(K0, {
    ref: r,
    className: G(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      x.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: x.jsx(G0, {
          children: x.jsx(w4, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      t,
    ],
  })
);
hg.displayName = K0.displayName;
const vg = c.forwardRef(({ className: e, inset: t, ...n }, r) =>
  x.jsx(B0, {
    ref: r,
    className: G("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n,
  })
);
vg.displayName = B0.displayName;
const gg = c.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(Z0, { ref: n, className: G("-mx-1 my-1 h-px bg-muted", e), ...t })
);
gg.displayName = Z0.displayName;
const yg = { theme: "system", setTheme: () => null },
  J0 = c.createContext(yg);
function wg({
  children: e,
  defaultTheme: t = "dark",
  storageKey: n = "vite-ui-theme",
  ...r
}) {
  const [o, i] = c.useState(() => localStorage.getItem(n) || t);
  c.useEffect(() => {
    const a = window.document.documentElement;
    if ((a.classList.remove("light", "dark"), o === "system")) {
      const s = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      a.classList.add(s);
      return;
    }
    a.classList.add(o);
  }, [o]);
  const l = {
    theme: o,
    setTheme: (a) => {
      localStorage.setItem(n, a), i(a);
    },
  };
  return x.jsx(J0.Provider, { ...r, value: l, children: e });
}
const xg = () => {
  const e = c.useContext(J0);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
};
function Bu() {
  const { setTheme: e } = xg();
  return x.jsxs(ug, {
    children: [
      x.jsx(dg, {
        asChild: !0,
        children: x.jsxs(Gs, {
          variant: "ghost",
          size: "icon",
          className: "ghost",
          children: [
            x.jsx(C4, {
              className:
                "h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
            }),
            x.jsx($4, {
              className:
                "absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
            }),
            x.jsx("span", { className: "sr-only", children: "Toggle theme" }),
          ],
        }),
      }),
      x.jsxs(X0, {
        align: "end",
        children: [
          x.jsx(oi, { onClick: () => e("light"), children: "Light" }),
          x.jsx(oi, { onClick: () => e("dark"), children: "Dark" }),
          x.jsx(oi, { onClick: () => e("system"), children: "System" }),
        ],
      }),
    ],
  });
}
const Wu = [],
  $g = () => {
    const [e, t] = c.useState(!1);
    return x.jsx("header", {
      className:
        "sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background",
      children: x.jsx(Of, {
        className: "mx-auto",
        children: x.jsxs(If, {
          className: "container h-14 px-4 w-screen flex justify-between ",
          children: [
            x.jsx(S4, {
              className: "font-bold flex",
              children: x.jsxs("a", {
                href: "/",
                className: "ml-2 font-bold text-xl flex",
                children: [x.jsx(mm, {}), "mydea"],
              }),
            }),
            x.jsxs("span", {
              className: "flex md:hidden",
              children: [
                x.jsx(Bu, {}),
                x.jsxs(Fh, {
                  open: e,
                  onOpenChange: t,
                  children: [
                    x.jsx(zh, {
                      className: "px-2",
                      children: x.jsx(x4, {
                        className: "flex md:hidden h-5 w-5",
                        onClick: () => t(!0),
                        children: x.jsx("span", {
                          className: "sr-only",
                          children: "Menu Icon",
                        }),
                      }),
                    }),
                    x.jsxs(s0, {
                      side: "left",
                      children: [
                        x.jsx(c0, {
                          children: x.jsx(u0, {
                            className: "font-bold text-xl",
                            children: "Mydea",
                          }),
                        }),
                        x.jsx("nav", {
                          className:
                            "flex flex-col justify-center items-center gap-2 mt-4",
                          children: Wu.map(({ href: n, label: r }) =>
                            x.jsx(
                              "a",
                              {
                                href: n,
                                onClick: () => t(!1),
                                className: ja({ variant: "ghost" }),
                                children: r,
                              },
                              r
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            x.jsx("nav", {
              className: "hidden md:flex gap-2",
              children: Wu.map((n, r) =>
                x.jsx(
                  "a",
                  {
                    href: n.href,
                    className: `text-[17px] ${ja({ variant: "ghost" })}`,
                    children: n.label,
                  },
                  r
                )
              ),
            }),
            x.jsx("div", {
              className: "hidden md:flex gap-2",
              children: x.jsx(Bu, {}),
            }),
          ],
        }),
      }),
    });
  },
  Cg = () => {
    const [e, t] = c.useState(!1);
    c.useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 400 ? t(!0) : t(!1);
      });
    }, []);
    const n = () => {
      window.scroll({ top: 0, left: 0 });
    };
    return x.jsx(x.Fragment, {
      children:
        e &&
        x.jsx(Gs, {
          onClick: n,
          className: "fixed bottom-4 right-4 opacity-90 shadow-md",
          size: "icon",
          children: x.jsx(h4, { className: "h-4 w-4" }),
        }),
    });
  };
function Eg() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx($g, {}),
      x.jsx(O3, {}),
      x.jsx(xm, {}),
      x.jsx(A3, {}),
      x.jsx(Cg, {}),
    ],
  });
}
Ll.createRoot(document.getElementById("root")).render(
  x.jsx(Be.StrictMode, { children: x.jsx(wg, { children: x.jsx(Eg, {}) }) })
);
