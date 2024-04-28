import { j as l, a as R } from "./jsx-runtime-9dc53467.js";
import {
  r as M,
  i as D,
  a as z,
  I as P,
} from "./jsx-runtime_commonjs-proxy-019d1f89.js";
import { r as x } from "./index-76fb7be0.js";
import {
  o as j,
  p as G,
  q as O,
  _ as v,
  c as m,
  g as A,
  a as b,
  s as y,
  f as g,
  u as _,
  d as T,
  t as q,
  T as U,
  C as E,
} from "./useThemeProps-154ffbf4.js";
import { _ as s } from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";
import { e as H, T as L } from "./Typography-e4a8f377.js";
import { P as F } from "./Paper-f04280dd.js";
import { B as V } from "./Button-1163e020.js";
const W = ["className", "component"];
function J(o = {}) {
  const {
      themeId: r,
      defaultTheme: a,
      defaultClassName: t = "MuiBox-root",
      generateClassName: e,
    } = o,
    p = j("div", {
      shouldForwardProp: (n) => n !== "theme" && n !== "sx" && n !== "as",
    })(G);
  return x.forwardRef(function (d, i) {
    const c = O(a),
      C = H(d),
      { className: I, component: N = "div" } = C,
      $ = v(C, W);
    return l(
      p,
      s(
        {
          as: N,
          ref: i,
          className: m(I, e ? e(t) : t),
          theme: (r && c[r]) || c,
        },
        $,
      ),
    );
  });
}
function K(o) {
  return A("MuiAppBar", o);
}
b("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const Q = ["className", "color", "enableColorOnDark", "position"],
  X = (o) => {
    const { color: r, position: a, classes: t } = o,
      e = { root: ["root", `color${g(r)}`, `position${g(a)}`] };
    return T(e, K, t);
  },
  f = (o, r) => (o ? `${o == null ? void 0 : o.replace(")", "")}, ${r})` : r),
  Y = y(F, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (o, r) => {
      const { ownerState: a } = o;
      return [r.root, r[`position${g(a.position)}`], r[`color${g(a.color)}`]];
    },
  })(({ theme: o, ownerState: r }) => {
    const a =
      o.palette.mode === "light" ? o.palette.grey[100] : o.palette.grey[900];
    return s(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      r.position === "fixed" && {
        position: "fixed",
        zIndex: (o.vars || o).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      r.position === "absolute" && {
        position: "absolute",
        zIndex: (o.vars || o).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      r.position === "sticky" && {
        position: "sticky",
        zIndex: (o.vars || o).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      r.position === "static" && { position: "static" },
      r.position === "relative" && { position: "relative" },
      !o.vars &&
        s(
          {},
          r.color === "default" && {
            backgroundColor: a,
            color: o.palette.getContrastText(a),
          },
          r.color &&
            r.color !== "default" &&
            r.color !== "inherit" &&
            r.color !== "transparent" && {
              backgroundColor: o.palette[r.color].main,
              color: o.palette[r.color].contrastText,
            },
          r.color === "inherit" && { color: "inherit" },
          o.palette.mode === "dark" &&
            !r.enableColorOnDark && { backgroundColor: null, color: null },
          r.color === "transparent" &&
            s(
              { backgroundColor: "transparent", color: "inherit" },
              o.palette.mode === "dark" && { backgroundImage: "none" },
            ),
        ),
      o.vars &&
        s(
          {},
          r.color === "default" && {
            "--AppBar-background": r.enableColorOnDark
              ? o.vars.palette.AppBar.defaultBg
              : f(
                  o.vars.palette.AppBar.darkBg,
                  o.vars.palette.AppBar.defaultBg,
                ),
            "--AppBar-color": r.enableColorOnDark
              ? o.vars.palette.text.primary
              : f(o.vars.palette.AppBar.darkColor, o.vars.palette.text.primary),
          },
          r.color &&
            !r.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": r.enableColorOnDark
                ? o.vars.palette[r.color].main
                : f(o.vars.palette.AppBar.darkBg, o.vars.palette[r.color].main),
              "--AppBar-color": r.enableColorOnDark
                ? o.vars.palette[r.color].contrastText
                : f(
                    o.vars.palette.AppBar.darkColor,
                    o.vars.palette[r.color].contrastText,
                  ),
            },
          {
            backgroundColor: "var(--AppBar-background)",
            color: r.color === "inherit" ? "inherit" : "var(--AppBar-color)",
          },
          r.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          },
        ),
    );
  }),
  Z = x.forwardRef(function (r, a) {
    const t = _({ props: r, name: "MuiAppBar" }),
      {
        className: e,
        color: p = "primary",
        enableColorOnDark: u = !1,
        position: n = "fixed",
      } = t,
      d = v(t, Q),
      i = s({}, t, { color: p, position: n, enableColorOnDark: u }),
      c = X(i);
    return l(
      Y,
      s(
        {
          square: !0,
          component: "header",
          ownerState: i,
          elevation: 4,
          className: m(c.root, e, n === "fixed" && "mui-fixed"),
          ref: a,
        },
        d,
      ),
    );
  }),
  S = Z,
  w = b("MuiBox", ["root"]),
  oo = w,
  ro = q(),
  ao = J({
    themeId: U,
    defaultTheme: ro,
    defaultClassName: oo.root,
    generateClassName: E.generate,
  }),
  to = ao;
function so(o) {
  return A("MuiToolbar", o);
}
b("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const eo = ["className", "component", "disableGutters", "variant"],
  no = (o) => {
    const { classes: r, disableGutters: a, variant: t } = o;
    return T({ root: ["root", !a && "gutters", t] }, so, r);
  },
  lo = y("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (o, r) => {
      const { ownerState: a } = o;
      return [r.root, !a.disableGutters && r.gutters, r[a.variant]];
    },
  })(
    ({ theme: o, ownerState: r }) =>
      s(
        { position: "relative", display: "flex", alignItems: "center" },
        !r.disableGutters && {
          paddingLeft: o.spacing(2),
          paddingRight: o.spacing(2),
          [o.breakpoints.up("sm")]: {
            paddingLeft: o.spacing(3),
            paddingRight: o.spacing(3),
          },
        },
        r.variant === "dense" && { minHeight: 48 },
      ),
    ({ theme: o, ownerState: r }) =>
      r.variant === "regular" && o.mixins.toolbar,
  ),
  io = x.forwardRef(function (r, a) {
    const t = _({ props: r, name: "MuiToolbar" }),
      {
        className: e,
        component: p = "div",
        disableGutters: u = !1,
        variant: n = "regular",
      } = t,
      d = v(t, eo),
      i = s({}, t, { component: p, disableGutters: u, variant: n }),
      c = no(i);
    return l(
      lo,
      s({ as: p, className: m(c.root, e), ref: a, ownerState: i }, d),
    );
  }),
  co = io;
var B = {},
  po = D;
Object.defineProperty(B, "__esModule", { value: !0 });
var h = (B.default = void 0),
  uo = po(M()),
  fo = z,
  go = (0, uo.default)(
    (0, fo.jsx)("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }),
    "Menu",
  );
h = B.default = go;
const k = x.memo(() =>
  l(to, {
    sx: { flexGrow: 1 },
    children: l(S, {
      position: "static",
      children: R(co, {
        children: [
          l(P, {
            size: "large",
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            sx: { mr: 2 },
            children: l(h, {}),
          }),
          l(L, {
            variant: "h6",
            component: "div",
            sx: { flexGrow: 1 },
            children: "News",
          }),
          l(V, { color: "inherit", children: "Login" }),
        ],
      }),
    }),
  }),
);
try {
  (k.displayName = "AppBarComponent"),
    (k.__docgenInfo = {
      description: "",
      displayName: "AppBarComponent",
      props: {},
    });
} catch {}
export { k as A };
