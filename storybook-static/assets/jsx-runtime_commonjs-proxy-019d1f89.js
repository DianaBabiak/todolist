import {
  a as z,
  g as h,
  s as B,
  f as a,
  b as g,
  u as E,
  _ as N,
  c as M,
  d as S,
  C as P,
} from "./useThemeProps-154ffbf4.js";
import { _ as s } from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";
import { r as l, a as T } from "./index-76fb7be0.js";
import { j as k, b as q } from "./jsx-runtime-9dc53467.js";
import {
  B as F,
  s as D,
  u as O,
  a as j,
  b as U,
  c as G,
} from "./ButtonBase-c19e39c2.js";
import { a as I } from "./_commonjsHelpers-de833af9.js";
import { c as L, u as V } from "./createSvgIcon-7f642adb.js";
function W(...e) {
  return e.reduce(
    (o, t) =>
      t == null
        ? o
        : function (...n) {
            o.apply(this, n), t.apply(this, n);
          },
    () => {},
  );
}
function w(e, o = 166) {
  let t;
  function r(...n) {
    const i = () => {
      e.apply(this, n);
    };
    clearTimeout(t), (t = setTimeout(i, o));
  }
  return (
    (r.clear = () => {
      clearTimeout(t);
    }),
    r
  );
}
function A(e, o) {
  return () => null;
}
function H(e, o) {
  var t, r;
  return (
    l.isValidElement(e) &&
    o.indexOf(
      (t = e.type.muiName) != null
        ? t
        : (r = e.type) == null ||
            (r = r._payload) == null ||
            (r = r.value) == null
          ? void 0
          : r.muiName,
    ) !== -1
  );
}
function y(e) {
  return (e && e.ownerDocument) || document;
}
function J(e) {
  return y(e).defaultView || window;
}
function K(e, o) {
  return () => null;
}
let m = 0;
function Q(e) {
  const [o, t] = l.useState(e),
    r = e || o;
  return (
    l.useEffect(() => {
      o == null && ((m += 1), t(`mui-${m}`));
    }, [o]),
    r
  );
}
const v = T["useId".toString()];
function X(e) {
  if (v !== void 0) {
    const o = v();
    return e ?? o;
  }
  return Q(e);
}
function Y(e, o, t, r, n) {
  return null;
}
function Z(e) {
  return h("MuiIconButton", e);
}
const ee = z("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  oe = ee,
  te = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  re = (e) => {
    const { classes: o, disabled: t, color: r, edge: n, size: i } = e,
      c = {
        root: [
          "root",
          t && "disabled",
          r !== "default" && `color${a(r)}`,
          n && `edge${a(n)}`,
          `size${a(i)}`,
        ],
      };
    return S(c, Z, o);
  },
  ne = B(F, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.root,
        t.color !== "default" && o[`color${a(t.color)}`],
        t.edge && o[`edge${a(t.edge)}`],
        o[`size${a(t.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: o }) =>
      s(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !o.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : g(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        o.edge === "start" && { marginLeft: o.size === "small" ? -3 : -12 },
        o.edge === "end" && { marginRight: o.size === "small" ? -3 : -12 },
      ),
    ({ theme: e, ownerState: o }) => {
      var t;
      const r = (t = (e.vars || e).palette) == null ? void 0 : t[o.color];
      return s(
        {},
        o.color === "inherit" && { color: "inherit" },
        o.color !== "inherit" &&
          o.color !== "default" &&
          s(
            { color: r == null ? void 0 : r.main },
            !o.disableRipple && {
              "&:hover": s(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : g(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } },
              ),
            },
          ),
        o.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        o.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${oe.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        },
      );
    },
  ),
  ae = l.forwardRef(function (o, t) {
    const r = E({ props: o, name: "MuiIconButton" }),
      {
        edge: n = !1,
        children: i,
        className: c,
        color: _ = "default",
        disabled: d = !1,
        disableFocusRipple: p = !1,
        size: C = "medium",
      } = r,
      $ = N(r, te),
      f = s({}, r, {
        edge: n,
        color: _,
        disabled: d,
        disableFocusRipple: p,
        size: C,
      }),
      x = re(f);
    return k(
      ne,
      s(
        {
          className: M(x.root, c),
          centerRipple: !0,
          focusRipple: !p,
          disabled: d,
          ref: t,
          ownerState: f,
        },
        $,
        { children: i },
      ),
    );
  }),
  ve = ae;
var R = { exports: {} };
(function (e) {
  function o(t) {
    return t && t.__esModule ? t : { default: t };
  }
  (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(R);
var be = R.exports,
  u = {};
const se = {
    configure: (e) => {
      P.configure(e);
    },
  },
  ie = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: a,
        createChainedFunction: W,
        createSvgIcon: L,
        debounce: w,
        deprecatedPropType: A,
        isMuiElement: H,
        ownerDocument: y,
        ownerWindow: J,
        requirePropFactory: K,
        setRef: D,
        unstable_ClassNameGenerator: se,
        unstable_useEnhancedEffect: O,
        unstable_useId: X,
        unsupportedProp: Y,
        useControlled: V,
        useEventCallback: j,
        useForkRef: U,
        useIsFocusVisible: G,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  le = I(ie);
var b;
function Ie() {
  return (
    b ||
      ((b = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return o.createSvgIcon;
            },
          });
        var o = le;
      })(u)),
    u
  );
}
const ye = I(q);
export {
  ve as I,
  ye as a,
  J as b,
  W as c,
  w as d,
  H as e,
  be as i,
  y as o,
  Ie as r,
  X as u,
};
