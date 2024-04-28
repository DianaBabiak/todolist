import { r as d } from "./index-76fb7be0.js";
import { _ as S } from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";
import { a as C, j as x } from "./jsx-runtime-9dc53467.js";
import {
  g as I,
  a as w,
  s as R,
  f as v,
  u as b,
  _ as N,
  c as A,
  d as B,
} from "./useThemeProps-154ffbf4.js";
function P({ controlled: o, default: e, name: n, state: l = "value" }) {
  const { current: t } = d.useRef(o !== void 0),
    [s, p] = d.useState(e),
    r = t ? o : s,
    m = d.useCallback((a) => {
      t || p(a);
    }, []);
  return [r, m];
}
function M(o) {
  return I("MuiSvgIcon", o);
}
w("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const T = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  U = (o) => {
    const { color: e, fontSize: n, classes: l } = o,
      t = {
        root: ["root", e !== "inherit" && `color${v(e)}`, `fontSize${v(n)}`],
      };
    return B(t, M, l);
  },
  V = R("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: n } = o;
      return [
        e.root,
        n.color !== "inherit" && e[`color${v(n.color)}`],
        e[`fontSize${v(n.fontSize)}`],
      ];
    },
  })(({ theme: o, ownerState: e }) => {
    var n, l, t, s, p, r, m, a, h, c, u, f, i;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: e.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = o.transitions) == null || (l = n.create) == null
          ? void 0
          : l.call(n, "fill", {
              duration:
                (t = o.transitions) == null || (t = t.duration) == null
                  ? void 0
                  : t.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((s = o.typography) == null || (p = s.pxToRem) == null
            ? void 0
            : p.call(s, 20)) || "1.25rem",
        medium:
          ((r = o.typography) == null || (m = r.pxToRem) == null
            ? void 0
            : m.call(r, 24)) || "1.5rem",
        large:
          ((a = o.typography) == null || (h = a.pxToRem) == null
            ? void 0
            : h.call(a, 35)) || "2.1875rem",
      }[e.fontSize],
      color:
        (c =
          (u = (o.vars || o).palette) == null || (u = u[e.color]) == null
            ? void 0
            : u.main) != null
          ? c
          : {
              action:
                (f = (o.vars || o).palette) == null || (f = f.action) == null
                  ? void 0
                  : f.active,
              disabled:
                (i = (o.vars || o).palette) == null || (i = i.action) == null
                  ? void 0
                  : i.disabled,
              inherit: void 0,
            }[e.color],
    };
  }),
  _ = d.forwardRef(function (e, n) {
    const l = b({ props: e, name: "MuiSvgIcon" }),
      {
        children: t,
        className: s,
        color: p = "inherit",
        component: r = "svg",
        fontSize: m = "medium",
        htmlColor: a,
        inheritViewBox: h = !1,
        titleAccess: c,
        viewBox: u = "0 0 24 24",
      } = l,
      f = N(l, T),
      i = d.isValidElement(t) && t.type === "svg",
      g = S({}, l, {
        color: p,
        component: r,
        fontSize: m,
        instanceFontSize: e.fontSize,
        inheritViewBox: h,
        viewBox: u,
        hasSvgAsChild: i,
      }),
      y = {};
    h || (y.viewBox = u);
    const z = U(g);
    return C(
      V,
      S(
        {
          as: r,
          className: A(z.root, s),
          focusable: "false",
          color: a,
          "aria-hidden": c ? void 0 : !0,
          role: c ? "img" : void 0,
          ref: n,
        },
        y,
        f,
        i && t.props,
        {
          ownerState: g,
          children: [
            i ? t.props.children : t,
            c ? x("title", { children: c }) : null,
          ],
        },
      ),
    );
  });
_.muiName = "SvgIcon";
const $ = _;
function D(o, e) {
  function n(l, t) {
    return x($, S({ "data-testid": `${e}Icon`, ref: t }, l, { children: o }));
  }
  return (n.muiName = $.muiName), d.memo(d.forwardRef(n));
}
export { D as c, P as u };
