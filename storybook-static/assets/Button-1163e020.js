import {
  a as V,
  g as _,
  s as b,
  r as O,
  f as t,
  b as u,
  h as G,
  u as j,
  _ as F,
  c as I,
  d as U,
} from "./useThemeProps-154ffbf4.js";
import { _ as i } from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";
import { r as d } from "./index-76fb7be0.js";
import { j as h, a as H } from "./jsx-runtime-9dc53467.js";
import { B as A } from "./ButtonBase-c19e39c2.js";
function D(o) {
  return _("MuiButton", o);
}
const q = V("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  v = q,
  J = d.createContext({}),
  K = J,
  Q = d.createContext(void 0),
  X = Q,
  Y = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  Z = (o) => {
    const {
        color: a,
        disableElevation: n,
        fullWidth: s,
        size: r,
        variant: l,
        classes: e,
      } = o,
      x = {
        root: [
          "root",
          l,
          `${l}${t(a)}`,
          `size${t(r)}`,
          `${l}Size${t(r)}`,
          a === "inherit" && "colorInherit",
          n && "disableElevation",
          s && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${t(r)}`],
        endIcon: ["endIcon", `iconSize${t(r)}`],
      },
      g = U(x, D, e);
    return i({}, e, g);
  },
  R = (o) =>
    i(
      {},
      o.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      o.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      o.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } },
    ),
  w = b(A, {
    shouldForwardProp: (o) => O(o) || o === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (o, a) => {
      const { ownerState: n } = o;
      return [
        a.root,
        a[n.variant],
        a[`${n.variant}${t(n.color)}`],
        a[`size${t(n.size)}`],
        a[`${n.variant}Size${t(n.size)}`],
        n.color === "inherit" && a.colorInherit,
        n.disableElevation && a.disableElevation,
        n.fullWidth && a.fullWidth,
      ];
    },
  })(
    ({ theme: o, ownerState: a }) => {
      var n, s;
      const r =
          o.palette.mode === "light"
            ? o.palette.grey[300]
            : o.palette.grey[800],
        l =
          o.palette.mode === "light"
            ? o.palette.grey.A100
            : o.palette.grey[700];
      return i(
        {},
        o.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (o.vars || o).shape.borderRadius,
          transition: o.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: o.transitions.duration.short },
          ),
          "&:hover": i(
            {
              textDecoration: "none",
              backgroundColor: o.vars
                ? `rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`
                : u(o.palette.text.primary, o.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            a.variant === "text" &&
              a.color !== "inherit" && {
                backgroundColor: o.vars
                  ? `rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`
                  : u(o.palette[a.color].main, o.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            a.variant === "outlined" &&
              a.color !== "inherit" && {
                border: `1px solid ${(o.vars || o).palette[a.color].main}`,
                backgroundColor: o.vars
                  ? `rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`
                  : u(o.palette[a.color].main, o.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            a.variant === "contained" && {
              backgroundColor: o.vars
                ? o.vars.palette.Button.inheritContainedHoverBg
                : l,
              boxShadow: (o.vars || o).shadows[4],
              "@media (hover: none)": {
                boxShadow: (o.vars || o).shadows[2],
                backgroundColor: (o.vars || o).palette.grey[300],
              },
            },
            a.variant === "contained" &&
              a.color !== "inherit" && {
                backgroundColor: (o.vars || o).palette[a.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (o.vars || o).palette[a.color].main,
                },
              },
          ),
          "&:active": i(
            {},
            a.variant === "contained" && {
              boxShadow: (o.vars || o).shadows[8],
            },
          ),
          [`&.${v.focusVisible}`]: i(
            {},
            a.variant === "contained" && {
              boxShadow: (o.vars || o).shadows[6],
            },
          ),
          [`&.${v.disabled}`]: i(
            { color: (o.vars || o).palette.action.disabled },
            a.variant === "outlined" && {
              border: `1px solid ${(o.vars || o).palette.action.disabledBackground}`,
            },
            a.variant === "contained" && {
              color: (o.vars || o).palette.action.disabled,
              boxShadow: (o.vars || o).shadows[0],
              backgroundColor: (o.vars || o).palette.action.disabledBackground,
            },
          ),
        },
        a.variant === "text" && { padding: "6px 8px" },
        a.variant === "text" &&
          a.color !== "inherit" && {
            color: (o.vars || o).palette[a.color].main,
          },
        a.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        a.variant === "outlined" &&
          a.color !== "inherit" && {
            color: (o.vars || o).palette[a.color].main,
            border: o.vars
              ? `1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`
              : `1px solid ${u(o.palette[a.color].main, 0.5)}`,
          },
        a.variant === "contained" && {
          color: o.vars
            ? o.vars.palette.text.primary
            : (n = (s = o.palette).getContrastText) == null
              ? void 0
              : n.call(s, o.palette.grey[300]),
          backgroundColor: o.vars
            ? o.vars.palette.Button.inheritContainedBg
            : r,
          boxShadow: (o.vars || o).shadows[2],
        },
        a.variant === "contained" &&
          a.color !== "inherit" && {
            color: (o.vars || o).palette[a.color].contrastText,
            backgroundColor: (o.vars || o).palette[a.color].main,
          },
        a.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        a.size === "small" &&
          a.variant === "text" && {
            padding: "4px 5px",
            fontSize: o.typography.pxToRem(13),
          },
        a.size === "large" &&
          a.variant === "text" && {
            padding: "8px 11px",
            fontSize: o.typography.pxToRem(15),
          },
        a.size === "small" &&
          a.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: o.typography.pxToRem(13),
          },
        a.size === "large" &&
          a.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: o.typography.pxToRem(15),
          },
        a.size === "small" &&
          a.variant === "contained" && {
            padding: "4px 10px",
            fontSize: o.typography.pxToRem(13),
          },
        a.size === "large" &&
          a.variant === "contained" && {
            padding: "8px 22px",
            fontSize: o.typography.pxToRem(15),
          },
        a.fullWidth && { width: "100%" },
      );
    },
    ({ ownerState: o }) =>
      o.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${v.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${v.disabled}`]: { boxShadow: "none" },
      },
  ),
  oo = b("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (o, a) => {
      const { ownerState: n } = o;
      return [a.startIcon, a[`iconSize${t(n.size)}`]];
    },
  })(({ ownerState: o }) =>
    i(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      o.size === "small" && { marginLeft: -2 },
      R(o),
    ),
  ),
  ao = b("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (o, a) => {
      const { ownerState: n } = o;
      return [a.endIcon, a[`iconSize${t(n.size)}`]];
    },
  })(({ ownerState: o }) =>
    i(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      o.size === "small" && { marginRight: -2 },
      R(o),
    ),
  ),
  no = d.forwardRef(function (a, n) {
    const s = d.useContext(K),
      r = d.useContext(X),
      l = G(s, a),
      e = j({ props: l, name: "MuiButton" }),
      {
        children: x,
        color: g = "primary",
        component: z = "button",
        className: k,
        disabled: f = !1,
        disableElevation: m = !1,
        disableFocusRipple: C = !1,
        endIcon: y,
        focusVisibleClassName: E,
        fullWidth: P = !1,
        size: W = "medium",
        startIcon: $,
        type: B,
        variant: M = "text",
      } = e,
      N = F(e, Y),
      p = i({}, e, {
        color: g,
        component: z,
        disabled: f,
        disableElevation: m,
        disableFocusRipple: C,
        fullWidth: P,
        size: W,
        type: B,
        variant: M,
      }),
      c = Z(p),
      S = $ && h(oo, { className: c.startIcon, ownerState: p, children: $ }),
      L = y && h(ao, { className: c.endIcon, ownerState: p, children: y }),
      T = r || "";
    return H(
      w,
      i(
        {
          ownerState: p,
          className: I(s.className, c.root, k, T),
          component: z,
          disabled: f,
          focusRipple: !C,
          focusVisibleClassName: I(c.focusVisible, E),
          ref: n,
          type: B,
        },
        N,
        { classes: c, children: [S, x, L] },
      ),
    );
  }),
  eo = no;
export { eo as B };
