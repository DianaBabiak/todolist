import { a as X, j as r } from "./jsx-runtime-9dc53467.js";
import { r as C } from "./index-76fb7be0.js";
import {
  g as U,
  a as V,
  s as S,
  r as q,
  _ as E,
  c as H,
  f as b,
  d as L,
  b as Y,
  u as Z,
} from "./useThemeProps-154ffbf4.js";
import { _ as s } from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";
import { u as ee } from "./useFormControl-464ef007.js";
import { B as oe } from "./ButtonBase-c19e39c2.js";
import { u as te, c as _ } from "./createSvgIcon-7f642adb.js";
function ce(e) {
  return U("PrivateSwitchBase", e);
}
V("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const ne = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  ae = (e) => {
    const { classes: o, checked: t, disabled: i, edge: c } = e,
      n = {
        root: ["root", t && "checked", i && "disabled", c && `edge${b(c)}`],
        input: ["input"],
      };
    return L(n, ce, o);
  },
  se = S(oe)(({ ownerState: e }) =>
    s(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 },
    ),
  ),
  re = S("input", { shouldForwardProp: q })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  ie = C.forwardRef(function (o, t) {
    const {
        autoFocus: i,
        checked: c,
        checkedIcon: n,
        className: u,
        defaultChecked: x,
        disabled: v,
        disableFocusRipple: l = !1,
        edge: g = !1,
        icon: y,
        id: p,
        inputProps: z,
        inputRef: P,
        name: B,
        onBlur: h,
        onChange: m,
        onFocus: f,
        readOnly: j,
        required: T = !1,
        tabIndex: W,
        type: I,
        value: R,
      } = o,
      A = E(o, ne),
      [w, D] = te({
        controlled: c,
        default: !!x,
        name: "SwitchBase",
        state: "checked",
      }),
      d = ee(),
      G = (a) => {
        f && f(a), d && d.onFocus && d.onFocus(a);
      },
      J = (a) => {
        h && h(a), d && d.onBlur && d.onBlur(a);
      },
      K = (a) => {
        if (a.nativeEvent.defaultPrevented) return;
        const M = a.target.checked;
        D(M), m && m(a, M);
      };
    let k = v;
    d && typeof k > "u" && (k = d.disabled);
    const Q = I === "checkbox" || I === "radio",
      $ = s({}, o, { checked: w, disabled: k, disableFocusRipple: l, edge: g }),
      N = ae($);
    return X(
      se,
      s(
        {
          component: "span",
          className: H(N.root, u),
          centerRipple: !0,
          focusRipple: !l,
          disabled: k,
          tabIndex: null,
          role: void 0,
          onFocus: G,
          onBlur: J,
          ownerState: $,
          ref: t,
        },
        A,
        {
          children: [
            r(
              re,
              s(
                {
                  autoFocus: i,
                  checked: c,
                  defaultChecked: x,
                  className: N.input,
                  disabled: k,
                  id: Q ? p : void 0,
                  name: B,
                  onChange: K,
                  readOnly: j,
                  ref: P,
                  required: T,
                  ownerState: $,
                  tabIndex: W,
                  type: I,
                },
                I === "checkbox" && R === void 0 ? {} : { value: R },
                z,
              ),
            ),
            w ? n : y,
          ],
        },
      ),
    );
  }),
  de = ie,
  le = _(
    r("path", {
      d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    }),
    "CheckBoxOutlineBlank",
  ),
  ue = _(
    r("path", {
      d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    }),
    "CheckBox",
  ),
  pe = _(
    r("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
    }),
    "IndeterminateCheckBox",
  );
function he(e) {
  return U("MuiCheckbox", e);
}
const me = V("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
  ]),
  F = me,
  fe = [
    "checkedIcon",
    "color",
    "icon",
    "indeterminate",
    "indeterminateIcon",
    "inputProps",
    "size",
    "className",
  ],
  ke = (e) => {
    const { classes: o, indeterminate: t, color: i, size: c } = e,
      n = {
        root: ["root", t && "indeterminate", `color${b(i)}`, `size${b(c)}`],
      },
      u = L(n, he, o);
    return s({}, o, u);
  },
  Ce = S(de, {
    shouldForwardProp: (e) => q(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.root,
        t.indeterminate && o.indeterminate,
        o[`size${b(t.size)}`],
        t.color !== "default" && o[`color${b(t.color)}`],
      ];
    },
  })(({ theme: e, ownerState: o }) =>
    s(
      { color: (e.vars || e).palette.text.secondary },
      !o.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${o.color === "default" ? e.vars.palette.action.activeChannel : e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
            : Y(
                o.color === "default"
                  ? e.palette.action.active
                  : e.palette[o.color].main,
                e.palette.action.hoverOpacity,
              ),
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
      },
      o.color !== "default" && {
        [`&.${F.checked}, &.${F.indeterminate}`]: {
          color: (e.vars || e).palette[o.color].main,
        },
        [`&.${F.disabled}`]: { color: (e.vars || e).palette.action.disabled },
      },
    ),
  ),
  be = r(ue, {}),
  xe = r(le, {}),
  ge = r(pe, {}),
  Be = C.forwardRef(function (o, t) {
    var i, c;
    const n = Z({ props: o, name: "MuiCheckbox" }),
      {
        checkedIcon: u = be,
        color: x = "primary",
        icon: v = xe,
        indeterminate: l = !1,
        indeterminateIcon: g = ge,
        inputProps: y,
        size: p = "medium",
        className: z,
      } = n,
      P = E(n, fe),
      B = l ? g : v,
      h = l ? g : u,
      m = s({}, n, { color: x, indeterminate: l, size: p }),
      f = ke(m);
    return r(
      Ce,
      s(
        {
          type: "checkbox",
          inputProps: s({ "data-indeterminate": l }, y),
          icon: C.cloneElement(B, {
            fontSize: (i = B.props.fontSize) != null ? i : p,
          }),
          checkedIcon: C.cloneElement(h, {
            fontSize: (c = h.props.fontSize) != null ? c : p,
          }),
          ownerState: m,
          ref: t,
          className: H(f.root, z),
        },
        P,
        { classes: f },
      ),
    );
  }),
  Ie = Be,
  O = C.memo(({ checked: e, onChange: o }) =>
    r(Ie, { checked: e, onChange: o, defaultChecked: !0, color: "secondary" }),
  );
try {
  (O.displayName = "CheckBox"),
    (O.__docgenInfo = {
      description: "",
      displayName: "CheckBox",
      props: {
        checked: {
          defaultValue: null,
          description: "",
          name: "checked",
          required: !0,
          type: { name: "boolean" },
        },
        onChange: {
          defaultValue: null,
          description: "",
          name: "onChange",
          required: !0,
          type: { name: "() => void" },
        },
      },
    });
} catch {}
export { O as C };
