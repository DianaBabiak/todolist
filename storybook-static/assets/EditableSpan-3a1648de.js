import { j as u, F as m, a as h } from "./jsx-runtime-9dc53467.js";
import { r } from "./index-76fb7be0.js";
import { T as g } from "./Typography-e4a8f377.js";
const f = (a, n) => {
    const [i, t] = r.useState(!1),
      [e, o] = r.useState(""),
      [s, l] = r.useState(null),
      d = r.useCallback(() => {
        t(!0), o(n);
      }, [n]),
      c = r.useCallback((p) => {
        o(p.currentTarget.value);
      }, []),
      b = r.useCallback(() => {
        if (e.trim() === "") {
          l("Title is required");
          return;
        } else t(!1), a(e);
      }, [a, e]),
      y = r.useCallback(
        (p) => {
          if ((l(""), p.key === "Enter"))
            if (e.trim() === "") {
              l("Title is required");
              return;
            } else t(!1), a(e);
        },
        [a, e],
      );
    return {
      editMode: i,
      error: s,
      editLabel: e,
      onBlurHandler: b,
      onChangeLabelHandler: c,
      onKeyDownEdit: y,
      onDoubleClickHandler: d,
    };
  },
  v = r.memo(({ label: a, onEditHandler: n, variantTypography: i }) => {
    const {
      editMode: t,
      error: e,
      editLabel: o,
      onBlurHandler: s,
      onChangeLabelHandler: l,
      onKeyDownEdit: d,
      onDoubleClickHandler: c,
    } = f(n, a);
    return u(m, {
      children: t
        ? u("input", {
            value: o,
            autoFocus: !0,
            onBlur: s,
            onChange: l,
            onKeyDown: d,
            className: e ? "error" : "",
          })
        : h(m, {
            children: [
              u(g, {
                style: {
                  margin: "0",
                  display: "flex",
                  alignItems: "end",
                  paddingBottom: "5px",
                },
                onDoubleClick: c,
                variant: i,
                gutterBottom: !0,
                children: a,
              }),
              e && u("div", { className: "errorMessage", children: e }),
            ],
          }),
    });
  });
try {
  (v.displayName = "EditableSpan"),
    (v.__docgenInfo = {
      description: "",
      displayName: "EditableSpan",
      props: {
        label: {
          defaultValue: null,
          description: "",
          name: "label",
          required: !0,
          type: { name: "string" },
        },
        onEditHandler: {
          defaultValue: null,
          description: "",
          name: "onEditHandler",
          required: !0,
          type: { name: "(newLabel: string) => void" },
        },
        variantTypography: {
          defaultValue: null,
          description: "",
          name: "variantTypography",
          required: !0,
          type: {
            name: "enum",
            value: [
              { value: "undefined" },
              { value: '"button"' },
              { value: '"caption"' },
              { value: '"h1"' },
              { value: '"h2"' },
              { value: '"h3"' },
              { value: '"h4"' },
              { value: '"h5"' },
              { value: '"h6"' },
              { value: '"subtitle1"' },
              { value: '"subtitle2"' },
              { value: '"body1"' },
              { value: '"body2"' },
              { value: '"overline"' },
              { value: '"inherit"' },
            ],
          },
        },
      },
    });
} catch {}
export { v as E };
