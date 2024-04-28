import {
  u as we,
  _ as G,
} from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";
import {
  v as _e,
  w as ct,
  x as ft,
  y as pt,
  _ as ye,
  c as x,
  a as Ie,
  s as be,
  u as Ne,
  g as dt,
  d as mt,
} from "./useThemeProps-154ffbf4.js";
import { r as s, R as Y } from "./index-76fb7be0.js";
import { j as O, a as ht } from "./jsx-runtime-9dc53467.js";
import { _ as yt, a as bt } from "./assertThisInitialized-e784747a.js";
var Ae = { exports: {} },
  f = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var m = typeof Symbol == "function" && Symbol.for,
  ge = m ? Symbol.for("react.element") : 60103,
  Re = m ? Symbol.for("react.portal") : 60106,
  Q = m ? Symbol.for("react.fragment") : 60107,
  Z = m ? Symbol.for("react.strict_mode") : 60108,
  ee = m ? Symbol.for("react.profiler") : 60114,
  te = m ? Symbol.for("react.provider") : 60109,
  ne = m ? Symbol.for("react.context") : 60110,
  Ee = m ? Symbol.for("react.async_mode") : 60111,
  re = m ? Symbol.for("react.concurrent_mode") : 60111,
  oe = m ? Symbol.for("react.forward_ref") : 60112,
  ie = m ? Symbol.for("react.suspense") : 60113,
  gt = m ? Symbol.for("react.suspense_list") : 60120,
  se = m ? Symbol.for("react.memo") : 60115,
  ae = m ? Symbol.for("react.lazy") : 60116,
  Rt = m ? Symbol.for("react.block") : 60121,
  Et = m ? Symbol.for("react.fundamental") : 60117,
  Tt = m ? Symbol.for("react.responder") : 60118,
  vt = m ? Symbol.for("react.scope") : 60119;
function b(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ge:
        switch (((e = e.type), e)) {
          case Ee:
          case re:
          case Q:
          case ee:
          case Z:
          case ie:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ne:
              case oe:
              case ae:
              case se:
              case te:
                return e;
              default:
                return t;
            }
        }
      case Re:
        return t;
    }
  }
}
function ze(e) {
  return b(e) === re;
}
f.AsyncMode = Ee;
f.ConcurrentMode = re;
f.ContextConsumer = ne;
f.ContextProvider = te;
f.Element = ge;
f.ForwardRef = oe;
f.Fragment = Q;
f.Lazy = ae;
f.Memo = se;
f.Portal = Re;
f.Profiler = ee;
f.StrictMode = Z;
f.Suspense = ie;
f.isAsyncMode = function (e) {
  return ze(e) || b(e) === Ee;
};
f.isConcurrentMode = ze;
f.isContextConsumer = function (e) {
  return b(e) === ne;
};
f.isContextProvider = function (e) {
  return b(e) === te;
};
f.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ge;
};
f.isForwardRef = function (e) {
  return b(e) === oe;
};
f.isFragment = function (e) {
  return b(e) === Q;
};
f.isLazy = function (e) {
  return b(e) === ae;
};
f.isMemo = function (e) {
  return b(e) === se;
};
f.isPortal = function (e) {
  return b(e) === Re;
};
f.isProfiler = function (e) {
  return b(e) === ee;
};
f.isStrictMode = function (e) {
  return b(e) === Z;
};
f.isSuspense = function (e) {
  return b(e) === ie;
};
f.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Q ||
    e === re ||
    e === ee ||
    e === Z ||
    e === ie ||
    e === gt ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ae ||
        e.$$typeof === se ||
        e.$$typeof === te ||
        e.$$typeof === ne ||
        e.$$typeof === oe ||
        e.$$typeof === Et ||
        e.$$typeof === Tt ||
        e.$$typeof === vt ||
        e.$$typeof === Rt))
  );
};
f.typeOf = b;
Ae.exports = f;
var Mt = Ae.exports,
  Oe = Mt,
  Ct = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  St = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ue = {};
Ue[Oe.ForwardRef] = Ct;
Ue[Oe.Memo] = St;
var mn = ct(function (e, t) {
  var n = e.styles,
    a = _e([n], void 0, s.useContext(ft)),
    i = s.useRef();
  return (
    we(
      function () {
        var r = t.key + "-global",
          o = new t.sheet.constructor({
            key: r,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          c = !1,
          l = document.querySelector(
            'style[data-emotion="' + r + " " + a.name + '"]',
          );
        return (
          t.sheet.tags.length && (o.before = t.sheet.tags[0]),
          l !== null &&
            ((c = !0), l.setAttribute("data-emotion", r), o.hydrate([l])),
          (i.current = [o, c]),
          function () {
            o.flush();
          }
        );
      },
      [t],
    ),
    we(
      function () {
        var r = i.current,
          o = r[0],
          c = r[1];
        if (c) {
          r[1] = !1;
          return;
        }
        if ((a.next !== void 0 && pt(t, a.next, !0), o.tags.length)) {
          var l = o.tags[o.tags.length - 1].nextElementSibling;
          (o.before = l), o.flush();
        }
        t.insert("", a, o, !1);
      },
      [t, a.name],
    ),
    null
  );
});
function xt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return _e(t);
}
var Te = function () {
  var t = xt.apply(void 0, arguments),
    n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
function $t(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const wt = typeof window < "u" ? s.useLayoutEffect : s.useEffect,
  Pt = wt;
function J(e) {
  const t = s.useRef(e);
  return (
    Pt(() => {
      t.current = e;
    }),
    s.useRef((...n) => (0, t.current)(...n)).current
  );
}
function Pe(...e) {
  return s.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              $t(n, t);
            });
          },
    e,
  );
}
let ue = !0,
  me = !1,
  Ve;
const Vt = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function Ft(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && Vt[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function Bt(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ue = !0);
}
function de() {
  ue = !1;
}
function Lt() {
  this.visibilityState === "hidden" && me && (ue = !0);
}
function kt(e) {
  e.addEventListener("keydown", Bt, !0),
    e.addEventListener("mousedown", de, !0),
    e.addEventListener("pointerdown", de, !0),
    e.addEventListener("touchstart", de, !0),
    e.addEventListener("visibilitychange", Lt, !0);
}
function Dt(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return ue || Ft(t);
}
function _t() {
  const e = s.useCallback((i) => {
      i != null && kt(i.ownerDocument);
    }, []),
    t = s.useRef(!1);
  function n() {
    return t.current
      ? ((me = !0),
        window.clearTimeout(Ve),
        (Ve = window.setTimeout(() => {
          me = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function a(i) {
    return Dt(i) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: a, onBlur: n, ref: e };
}
const Fe = Y.createContext(null);
function ve(e, t) {
  var n = function (r) {
      return t && s.isValidElement(r) ? t(r) : r;
    },
    a = Object.create(null);
  return (
    e &&
      s.Children.map(e, function (i) {
        return i;
      }).forEach(function (i) {
        a[i.key] = n(i);
      }),
    a
  );
}
function It(e, t) {
  (e = e || {}), (t = t || {});
  function n(h) {
    return h in t ? t[h] : e[h];
  }
  var a = Object.create(null),
    i = [];
  for (var r in e) r in t ? i.length && ((a[r] = i), (i = [])) : i.push(r);
  var o,
    c = {};
  for (var l in t) {
    if (a[l])
      for (o = 0; o < a[l].length; o++) {
        var p = a[l][o];
        c[a[l][o]] = n(p);
      }
    c[l] = n(l);
  }
  for (o = 0; o < i.length; o++) c[i[o]] = n(i[o]);
  return c;
}
function I(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Nt(e, t) {
  return ve(e.children, function (n) {
    return s.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: I(n, "appear", e),
      enter: I(n, "enter", e),
      exit: I(n, "exit", e),
    });
  });
}
function At(e, t, n) {
  var a = ve(e.children),
    i = It(t, a);
  return (
    Object.keys(i).forEach(function (r) {
      var o = i[r];
      if (s.isValidElement(o)) {
        var c = r in t,
          l = r in a,
          p = t[r],
          h = s.isValidElement(p) && !p.props.in;
        l && (!c || h)
          ? (i[r] = s.cloneElement(o, {
              onExited: n.bind(null, o),
              in: !0,
              exit: I(o, "exit", e),
              enter: I(o, "enter", e),
            }))
          : !l && c && !h
            ? (i[r] = s.cloneElement(o, { in: !1 }))
            : l &&
              c &&
              s.isValidElement(p) &&
              (i[r] = s.cloneElement(o, {
                onExited: n.bind(null, o),
                in: p.props.in,
                exit: I(o, "exit", e),
                enter: I(o, "enter", e),
              }));
      }
    }),
    i
  );
}
var zt =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  Ot = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Me = (function (e) {
    yt(t, e);
    function t(a, i) {
      var r;
      r = e.call(this, a, i) || this;
      var o = r.handleExited.bind(bt(r));
      return (
        (r.state = {
          contextValue: { isMounting: !0 },
          handleExited: o,
          firstRender: !0,
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (i, r) {
        var o = r.children,
          c = r.handleExited,
          l = r.firstRender;
        return { children: l ? Nt(i, c) : At(i, o, c), firstRender: !1 };
      }),
      (n.handleExited = function (i, r) {
        var o = ve(this.props.children);
        i.key in o ||
          (i.props.onExited && i.props.onExited(r),
          this.mounted &&
            this.setState(function (c) {
              var l = G({}, c.children);
              return delete l[i.key], { children: l };
            }));
      }),
      (n.render = function () {
        var i = this.props,
          r = i.component,
          o = i.childFactory,
          c = ye(i, ["component", "childFactory"]),
          l = this.state.contextValue,
          p = zt(this.state.children).map(o);
        return (
          delete c.appear,
          delete c.enter,
          delete c.exit,
          r === null
            ? Y.createElement(Fe.Provider, { value: l }, p)
            : Y.createElement(
                Fe.Provider,
                { value: l },
                Y.createElement(r, c, p),
              )
        );
      }),
      t
    );
  })(Y.Component);
Me.propTypes = {};
Me.defaultProps = Ot;
const Ut = Me;
function Kt(e) {
  const {
      className: t,
      classes: n,
      pulsate: a = !1,
      rippleX: i,
      rippleY: r,
      rippleSize: o,
      in: c,
      onExited: l,
      timeout: p,
    } = e,
    [h, E] = s.useState(!1),
    R = x(t, n.ripple, n.rippleVisible, a && n.ripplePulsate),
    $ = { width: o, height: o, top: -(o / 2) + r, left: -(o / 2) + i },
    y = x(n.child, h && n.childLeaving, a && n.childPulsate);
  return (
    !c && !h && E(!0),
    s.useEffect(() => {
      if (!c && l != null) {
        const T = setTimeout(l, p);
        return () => {
          clearTimeout(T);
        };
      }
    }, [l, c, p]),
    O("span", { className: R, style: $, children: O("span", { className: y }) })
  );
}
const jt = Ie("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  g = jt,
  Wt = ["center", "classes", "className"];
let le = (e) => e,
  Be,
  Le,
  ke,
  De;
const he = 550,
  Xt = 80,
  Yt = Te(
    Be ||
      (Be = le`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`),
  ),
  Gt = Te(
    Le ||
      (Le = le`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),
  ),
  Ht = Te(
    ke ||
      (ke = le`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`),
  ),
  qt = be("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  Jt = be(Kt, { name: "MuiTouchRipple", slot: "Ripple" })(
    De ||
      (De = le`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    g.rippleVisible,
    Yt,
    he,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    g.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    g.child,
    g.childLeaving,
    Gt,
    he,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    g.childPulsate,
    Ht,
    ({ theme: e }) => e.transitions.easing.easeInOut,
  ),
  Qt = s.forwardRef(function (t, n) {
    const a = Ne({ props: t, name: "MuiTouchRipple" }),
      { center: i = !1, classes: r = {}, className: o } = a,
      c = ye(a, Wt),
      [l, p] = s.useState([]),
      h = s.useRef(0),
      E = s.useRef(null);
    s.useEffect(() => {
      E.current && (E.current(), (E.current = null));
    }, [l]);
    const R = s.useRef(!1),
      $ = s.useRef(0),
      y = s.useRef(null),
      T = s.useRef(null);
    s.useEffect(
      () => () => {
        $.current && clearTimeout($.current);
      },
      [],
    );
    const U = s.useCallback(
        (d) => {
          const {
            pulsate: v,
            rippleX: M,
            rippleY: k,
            rippleSize: z,
            cb: j,
          } = d;
          p((C) => [
            ...C,
            O(
              Jt,
              {
                classes: {
                  ripple: x(r.ripple, g.ripple),
                  rippleVisible: x(r.rippleVisible, g.rippleVisible),
                  ripplePulsate: x(r.ripplePulsate, g.ripplePulsate),
                  child: x(r.child, g.child),
                  childLeaving: x(r.childLeaving, g.childLeaving),
                  childPulsate: x(r.childPulsate, g.childPulsate),
                },
                timeout: he,
                pulsate: v,
                rippleX: M,
                rippleY: k,
                rippleSize: z,
              },
              h.current,
            ),
          ]),
            (h.current += 1),
            (E.current = j);
        },
        [r],
      ),
      N = s.useCallback(
        (d = {}, v = {}, M = () => {}) => {
          const {
            pulsate: k = !1,
            center: z = i || v.pulsate,
            fakeElement: j = !1,
          } = v;
          if ((d == null ? void 0 : d.type) === "mousedown" && R.current) {
            R.current = !1;
            return;
          }
          (d == null ? void 0 : d.type) === "touchstart" && (R.current = !0);
          const C = j ? null : T.current,
            F = C
              ? C.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let w, B, L;
          if (
            z ||
            d === void 0 ||
            (d.clientX === 0 && d.clientY === 0) ||
            (!d.clientX && !d.touches)
          )
            (w = Math.round(F.width / 2)), (B = Math.round(F.height / 2));
          else {
            const { clientX: D, clientY: P } =
              d.touches && d.touches.length > 0 ? d.touches[0] : d;
            (w = Math.round(D - F.left)), (B = Math.round(P - F.top));
          }
          if (z)
            (L = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3)),
              L % 2 === 0 && (L += 1);
          else {
            const D =
                Math.max(Math.abs((C ? C.clientWidth : 0) - w), w) * 2 + 2,
              P = Math.max(Math.abs((C ? C.clientHeight : 0) - B), B) * 2 + 2;
            L = Math.sqrt(D ** 2 + P ** 2);
          }
          d != null && d.touches
            ? y.current === null &&
              ((y.current = () => {
                U({ pulsate: k, rippleX: w, rippleY: B, rippleSize: L, cb: M });
              }),
              ($.current = setTimeout(() => {
                y.current && (y.current(), (y.current = null));
              }, Xt)))
            : U({ pulsate: k, rippleX: w, rippleY: B, rippleSize: L, cb: M });
        },
        [i, U],
      ),
      K = s.useCallback(() => {
        N({}, { pulsate: !0 });
      }, [N]),
      A = s.useCallback((d, v) => {
        if (
          (clearTimeout($.current),
          (d == null ? void 0 : d.type) === "touchend" && y.current)
        ) {
          y.current(),
            (y.current = null),
            ($.current = setTimeout(() => {
              A(d, v);
            }));
          return;
        }
        (y.current = null),
          p((M) => (M.length > 0 ? M.slice(1) : M)),
          (E.current = v);
      }, []);
    return (
      s.useImperativeHandle(n, () => ({ pulsate: K, start: N, stop: A }), [
        K,
        N,
        A,
      ]),
      O(
        qt,
        G({ className: x(g.root, r.root, o), ref: T }, c, {
          children: O(Ut, { component: null, exit: !0, children: l }),
        }),
      )
    );
  }),
  Zt = Qt;
function en(e) {
  return dt("MuiButtonBase", e);
}
const tn = Ie("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  nn = tn,
  rn = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  on = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: a,
        classes: i,
      } = e,
      o = mt({ root: ["root", t && "disabled", n && "focusVisible"] }, en, i);
    return n && a && (o.root += ` ${a}`), o;
  },
  sn = be("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${nn.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  an = s.forwardRef(function (t, n) {
    const a = Ne({ props: t, name: "MuiButtonBase" }),
      {
        action: i,
        centerRipple: r = !1,
        children: o,
        className: c,
        component: l = "button",
        disabled: p = !1,
        disableRipple: h = !1,
        disableTouchRipple: E = !1,
        focusRipple: R = !1,
        LinkComponent: $ = "a",
        onBlur: y,
        onClick: T,
        onContextMenu: U,
        onDragLeave: N,
        onFocus: K,
        onFocusVisible: A,
        onKeyDown: d,
        onKeyUp: v,
        onMouseDown: M,
        onMouseLeave: k,
        onMouseUp: z,
        onTouchEnd: j,
        onTouchMove: C,
        onTouchStart: F,
        tabIndex: w = 0,
        TouchRippleProps: B,
        touchRippleRef: L,
        type: D,
      } = a,
      P = ye(a, rn),
      W = s.useRef(null),
      S = s.useRef(null),
      Ke = Pe(S, L),
      { isFocusVisibleRef: Ce, onFocus: je, onBlur: We, ref: Xe } = _t(),
      [_, H] = s.useState(!1);
    p && _ && H(!1),
      s.useImperativeHandle(
        i,
        () => ({
          focusVisible: () => {
            H(!0), W.current.focus();
          },
        }),
        [],
      );
    const [ce, Ye] = s.useState(!1);
    s.useEffect(() => {
      Ye(!0);
    }, []);
    const Ge = ce && !h && !p;
    s.useEffect(() => {
      _ && R && !h && ce && S.current.pulsate();
    }, [h, R, _, ce]);
    function V(u, xe, lt = E) {
      return J(
        ($e) => (xe && xe($e), !lt && S.current && S.current[u]($e), !0),
      );
    }
    const He = V("start", M),
      qe = V("stop", U),
      Je = V("stop", N),
      Qe = V("stop", z),
      Ze = V("stop", (u) => {
        _ && u.preventDefault(), k && k(u);
      }),
      et = V("start", F),
      tt = V("stop", j),
      nt = V("stop", C),
      rt = V(
        "stop",
        (u) => {
          We(u), Ce.current === !1 && H(!1), y && y(u);
        },
        !1,
      ),
      ot = J((u) => {
        W.current || (W.current = u.currentTarget),
          je(u),
          Ce.current === !0 && (H(!0), A && A(u)),
          K && K(u);
      }),
      fe = () => {
        const u = W.current;
        return l && l !== "button" && !(u.tagName === "A" && u.href);
      },
      pe = s.useRef(!1),
      it = J((u) => {
        R &&
          !pe.current &&
          _ &&
          S.current &&
          u.key === " " &&
          ((pe.current = !0),
          S.current.stop(u, () => {
            S.current.start(u);
          })),
          u.target === u.currentTarget &&
            fe() &&
            u.key === " " &&
            u.preventDefault(),
          d && d(u),
          u.target === u.currentTarget &&
            fe() &&
            u.key === "Enter" &&
            !p &&
            (u.preventDefault(), T && T(u));
      }),
      st = J((u) => {
        R &&
          u.key === " " &&
          S.current &&
          _ &&
          !u.defaultPrevented &&
          ((pe.current = !1),
          S.current.stop(u, () => {
            S.current.pulsate(u);
          })),
          v && v(u),
          T &&
            u.target === u.currentTarget &&
            fe() &&
            u.key === " " &&
            !u.defaultPrevented &&
            T(u);
      });
    let q = l;
    q === "button" && (P.href || P.to) && (q = $);
    const X = {};
    q === "button"
      ? ((X.type = D === void 0 ? "button" : D), (X.disabled = p))
      : (!P.href && !P.to && (X.role = "button"),
        p && (X["aria-disabled"] = p));
    const at = Pe(n, Xe, W),
      Se = G({}, a, {
        centerRipple: r,
        component: l,
        disabled: p,
        disableRipple: h,
        disableTouchRipple: E,
        focusRipple: R,
        tabIndex: w,
        focusVisible: _,
      }),
      ut = on(Se);
    return ht(
      sn,
      G(
        {
          as: q,
          className: x(ut.root, c),
          ownerState: Se,
          onBlur: rt,
          onClick: T,
          onContextMenu: qe,
          onFocus: ot,
          onKeyDown: it,
          onKeyUp: st,
          onMouseDown: He,
          onMouseLeave: Ze,
          onMouseUp: Qe,
          onDragLeave: Je,
          onTouchEnd: tt,
          onTouchMove: nt,
          onTouchStart: et,
          ref: at,
          tabIndex: p ? -1 : w,
          type: D,
        },
        X,
        P,
        { children: [o, Ge ? O(Zt, G({ ref: Ke, center: r }, B)) : null] },
      ),
    );
  }),
  hn = an;
export {
  hn as B,
  mn as G,
  Fe as T,
  J as a,
  Pe as b,
  _t as c,
  $t as s,
  Pt as u,
};
