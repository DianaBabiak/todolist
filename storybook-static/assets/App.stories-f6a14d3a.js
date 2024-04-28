import { j as f, a as P } from "./jsx-runtime-9dc53467.js";
import "./react-is.production.min-22aa4f73.js";
import { u as J, a as Q, T as X } from "./Todolist-9fc8fc14.js";
import { u as Y, A as ee } from "./AddField-16291b9c.js";
import { A as te } from "./AppBarComponent-0ef8ca67.js";
import {
  s as re,
  v as oe,
  R as ne,
} from "./ReduxStoreProviderDecorator-c00a712c.js";
import { r as h } from "./index-76fb7be0.js";
import {
  j as ie,
  k as se,
  f as y,
  l as ae,
  _,
  c as O,
  d as L,
  g as D,
  s as K,
  u as U,
  a as ce,
  m as w,
  n as N,
} from "./useThemeProps-154ffbf4.js";
import { _ as x } from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";
import { e as pe } from "./Typography-e4a8f377.js";
import { P as ue } from "./Paper-f04280dd.js";
import "./type-a0f69047.js";
import "./EditableSpan-3a1648de.js";
import "./FilterButton-74137275.js";
import "./Button-1163e020.js";
import "./ButtonBase-c19e39c2.js";
import "./assertThisInitialized-e784747a.js";
import "./jsx-runtime_commonjs-proxy-019d1f89.js";
import "./_commonjsHelpers-de833af9.js";
import "./createSvgIcon-7f642adb.js";
import "./useFormControl-464ef007.js";
import "./index-d3ea75b5.js";
import "./CheckBox-affaec7e.js";
import "./tasksAPI-c88ee661.js";
import "./commonAPI-9afb705d.js";
import "./stringify-ec260085.js";
import "./todolistsApi-61ec3b29.js";
const le = ie(),
  de = le,
  me = [
    "className",
    "component",
    "disableGutters",
    "fixed",
    "maxWidth",
    "classes",
  ],
  fe = se(),
  xe = de("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`maxWidth${y(String(r.maxWidth))}`],
        r.fixed && t.fixed,
        r.disableGutters && t.disableGutters,
      ];
    },
  }),
  ge = (e) => ae({ props: e, name: "MuiContainer", defaultTheme: fe }),
  he = (e, t) => {
    const r = (u) => D(t, u),
      { classes: o, fixed: n, disableGutters: s, maxWidth: i } = e,
      a = {
        root: [
          "root",
          i && `maxWidth${y(String(i))}`,
          n && "fixed",
          s && "disableGutters",
        ],
      };
    return L(a, r, o);
  };
function be(e = {}) {
  const {
      createStyledComponent: t = xe,
      useThemeProps: r = ge,
      componentName: o = "MuiContainer",
    } = e,
    n = t(
      ({ theme: i, ownerState: a }) =>
        x(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !a.disableGutters && {
            paddingLeft: i.spacing(2),
            paddingRight: i.spacing(2),
            [i.breakpoints.up("sm")]: {
              paddingLeft: i.spacing(3),
              paddingRight: i.spacing(3),
            },
          },
        ),
      ({ theme: i, ownerState: a }) =>
        a.fixed &&
        Object.keys(i.breakpoints.values).reduce((u, p) => {
          const c = p,
            l = i.breakpoints.values[c];
          return (
            l !== 0 &&
              (u[i.breakpoints.up(c)] = {
                maxWidth: `${l}${i.breakpoints.unit}`,
              }),
            u
          );
        }, {}),
      ({ theme: i, ownerState: a }) =>
        x(
          {},
          a.maxWidth === "xs" && {
            [i.breakpoints.up("xs")]: {
              maxWidth: Math.max(i.breakpoints.values.xs, 444),
            },
          },
          a.maxWidth &&
            a.maxWidth !== "xs" && {
              [i.breakpoints.up(a.maxWidth)]: {
                maxWidth: `${i.breakpoints.values[a.maxWidth]}${i.breakpoints.unit}`,
              },
            },
        ),
    );
  return h.forwardRef(function (a, u) {
    const p = r(a),
      {
        className: c,
        component: l = "div",
        disableGutters: d = !1,
        fixed: m = !1,
        maxWidth: b = "lg",
      } = p,
      G = _(p, me),
      C = x({}, p, { component: l, disableGutters: d, fixed: m, maxWidth: b }),
      $ = he(C, o);
    return f(
      n,
      x({ as: l, ownerState: C, className: O($.root, c), ref: u }, G),
    );
  });
}
const $e = be({
    createStyledComponent: K("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          t[`maxWidth${y(String(r.maxWidth))}`],
          r.fixed && t.fixed,
          r.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => U({ props: e, name: "MuiContainer" }),
  }),
  Se = $e,
  ve = h.createContext(),
  z = ve;
function Ce(e) {
  return D("MuiGrid", e);
}
const ke = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  We = ["column-reverse", "column", "row-reverse", "row"],
  we = ["nowrap", "wrap-reverse", "wrap"],
  S = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  v = ce("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...ke.map((e) => `spacing-xs-${e}`),
    ...We.map((e) => `direction-xs-${e}`),
    ...we.map((e) => `wrap-xs-${e}`),
    ...S.map((e) => `grid-xs-${e}`),
    ...S.map((e) => `grid-sm-${e}`),
    ...S.map((e) => `grid-md-${e}`),
    ...S.map((e) => `grid-lg-${e}`),
    ...S.map((e) => `grid-xl-${e}`),
  ]),
  Ge = [
    "className",
    "columns",
    "columnSpacing",
    "component",
    "container",
    "direction",
    "item",
    "rowSpacing",
    "spacing",
    "wrap",
    "zeroMinWidth",
  ];
function g(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function ye({ theme: e, ownerState: t }) {
  let r;
  return e.breakpoints.keys.reduce((o, n) => {
    let s = {};
    if ((t[n] && (r = t[n]), !r)) return o;
    if (r === !0) s = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (r === "auto")
      s = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      };
    else {
      const i = w({ values: t.columns, breakpoints: e.breakpoints.values }),
        a = typeof i == "object" ? i[n] : i;
      if (a == null) return o;
      const u = `${Math.round((r / a) * 1e8) / 1e6}%`;
      let p = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e.spacing(t.columnSpacing);
        if (c !== "0px") {
          const l = `calc(${u} + ${g(c)})`;
          p = { flexBasis: l, maxWidth: l };
        }
      }
      s = x({ flexBasis: u, flexGrow: 0, maxWidth: u }, p);
    }
    return (
      e.breakpoints.values[n] === 0
        ? Object.assign(o, s)
        : (o[e.breakpoints.up(n)] = s),
      o
    );
  }, {});
}
function Ne({ theme: e, ownerState: t }) {
  const r = w({ values: t.direction, breakpoints: e.breakpoints.values });
  return N({ theme: e }, r, (o) => {
    const n = { flexDirection: o };
    return (
      o.indexOf("column") === 0 && (n[`& > .${v.item}`] = { maxWidth: "none" }),
      n
    );
  });
}
function I({ breakpoints: e, values: t }) {
  let r = "";
  Object.keys(t).forEach((n) => {
    r === "" && t[n] !== 0 && (r = n);
  });
  const o = Object.keys(e).sort((n, s) => e[n] - e[s]);
  return o.slice(0, o.indexOf(r));
}
function Te({ theme: e, ownerState: t }) {
  const { container: r, rowSpacing: o } = t;
  let n = {};
  if (r && o !== 0) {
    const s = w({ values: o, breakpoints: e.breakpoints.values });
    let i;
    typeof s == "object" &&
      (i = I({ breakpoints: e.breakpoints.values, values: s })),
      (n = N({ theme: e }, s, (a, u) => {
        var p;
        const c = e.spacing(a);
        return c !== "0px"
          ? { marginTop: `-${g(c)}`, [`& > .${v.item}`]: { paddingTop: g(c) } }
          : (p = i) != null && p.includes(u)
            ? {}
            : { marginTop: 0, [`& > .${v.item}`]: { paddingTop: 0 } };
      }));
  }
  return n;
}
function Me({ theme: e, ownerState: t }) {
  const { container: r, columnSpacing: o } = t;
  let n = {};
  if (r && o !== 0) {
    const s = w({ values: o, breakpoints: e.breakpoints.values });
    let i;
    typeof s == "object" &&
      (i = I({ breakpoints: e.breakpoints.values, values: s })),
      (n = N({ theme: e }, s, (a, u) => {
        var p;
        const c = e.spacing(a);
        return c !== "0px"
          ? {
              width: `calc(100% + ${g(c)})`,
              marginLeft: `-${g(c)}`,
              [`& > .${v.item}`]: { paddingLeft: g(c) },
            }
          : (p = i) != null && p.includes(u)
            ? {}
            : {
                width: "100%",
                marginLeft: 0,
                [`& > .${v.item}`]: { paddingLeft: 0 },
              };
      }));
  }
  return n;
}
function Re(e, t, r = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [r[`spacing-xs-${String(e)}`]];
  const o = [];
  return (
    t.forEach((n) => {
      const s = e[n];
      Number(s) > 0 && o.push(r[`spacing-${n}-${String(s)}`]);
    }),
    o
  );
}
const Be = K("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const { ownerState: r } = e,
      {
        container: o,
        direction: n,
        item: s,
        spacing: i,
        wrap: a,
        zeroMinWidth: u,
        breakpoints: p,
      } = r;
    let c = [];
    o && (c = Re(i, p, t));
    const l = [];
    return (
      p.forEach((d) => {
        const m = r[d];
        m && l.push(t[`grid-${d}-${String(m)}`]);
      }),
      [
        t.root,
        o && t.container,
        s && t.item,
        u && t.zeroMinWidth,
        ...c,
        n !== "row" && t[`direction-xs-${String(n)}`],
        a !== "wrap" && t[`wrap-xs-${String(a)}`],
        ...l,
      ]
    );
  },
})(
  ({ ownerState: e }) =>
    x(
      { boxSizing: "border-box" },
      e.container && { display: "flex", flexWrap: "wrap", width: "100%" },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== "wrap" && { flexWrap: e.wrap },
    ),
  Ne,
  Te,
  Me,
  ye,
);
function Pe(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [`spacing-xs-${String(e)}`];
  const r = [];
  return (
    t.forEach((o) => {
      const n = e[o];
      if (Number(n) > 0) {
        const s = `spacing-${o}-${String(n)}`;
        r.push(s);
      }
    }),
    r
  );
}
const ze = (e) => {
    const {
      classes: t,
      container: r,
      direction: o,
      item: n,
      spacing: s,
      wrap: i,
      zeroMinWidth: a,
      breakpoints: u,
    } = e;
    let p = [];
    r && (p = Pe(s, u));
    const c = [];
    u.forEach((d) => {
      const m = e[d];
      m && c.push(`grid-${d}-${String(m)}`);
    });
    const l = {
      root: [
        "root",
        r && "container",
        n && "item",
        a && "zeroMinWidth",
        ...p,
        o !== "row" && `direction-xs-${String(o)}`,
        i !== "wrap" && `wrap-xs-${String(i)}`,
        ...c,
      ],
    };
    return L(l, Ce, t);
  },
  Ae = h.forwardRef(function (t, r) {
    const o = U({ props: t, name: "MuiGrid" }),
      { breakpoints: n } = Y(),
      s = pe(o),
      {
        className: i,
        columns: a,
        columnSpacing: u,
        component: p = "div",
        container: c = !1,
        direction: l = "row",
        item: d = !1,
        rowSpacing: m,
        spacing: b = 0,
        wrap: G = "wrap",
        zeroMinWidth: C = !1,
      } = s,
      $ = _(s, Ge),
      F = m || b,
      Z = u || b,
      q = h.useContext(z),
      T = c ? a || 12 : q,
      M = {},
      R = x({}, $);
    n.keys.forEach((k) => {
      $[k] != null && ((M[k] = $[k]), delete R[k]);
    });
    const B = x(
        {},
        s,
        {
          columns: T,
          container: c,
          direction: l,
          item: d,
          rowSpacing: F,
          columnSpacing: Z,
          wrap: G,
          zeroMinWidth: C,
          spacing: b,
        },
        M,
        { breakpoints: n.keys },
      ),
      H = ze(B);
    return f(z.Provider, {
      value: T,
      children: f(
        Be,
        x({ ownerState: B, className: O(H.root, i), as: p, ref: r }, R),
      ),
    });
  }),
  A = Ae;
function Ee() {
  const e = J(({ todolist: o }) => o),
    t = Q();
  h.useEffect(() => {
    t(re());
  }, [t]);
  const r = h.useCallback(
    (o) => {
      t(oe(o));
    },
    [t],
  );
  return P("div", {
    className: "App",
    children: [
      f(te, {}),
      P(Se, {
        maxWidth: "lg",
        style: { padding: "20px 0 0" },
        children: [
          f(ee, { handlerAdd: r }),
          f(A, {
            container: !0,
            rowSpacing: 1,
            columnSpacing: { xs: 1, sm: 2, md: 3 },
            children: e.map((o) =>
              f(A, {
                item: !0,
                style: { margin: "40px 0 0" },
                xs: 4,
                children: f(ue, {
                  elevation: 3,
                  children: f(X, { todo: o }, o.id),
                }),
              }),
            ),
          }),
        ],
      }),
    ],
  });
}
const ut = { component: Ee, decorators: [ne] },
  W = { args: {} };
var E, j, V;
W.parameters = {
  ...W.parameters,
  docs: {
    ...((E = W.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((V = (j = W.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : V.source),
    },
  },
};
const lt = ["AppBasicExample"];
export { W as AppBasicExample, lt as __namedExportsOrder, ut as default };
