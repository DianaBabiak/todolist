import { j as a } from "./jsx-runtime-9dc53467.js";
import { r as l } from "./index-76fb7be0.js";
import { B as n } from "./Button-1163e020.js";
const t = l.memo(({ status: e, onClickHandler: r, isSelected: o }) =>
  a(n, {
    color: "secondary",
    onClick: () => r(e),
    variant: o ? "contained" : "outlined",
    children: e,
  }),
);
try {
  (t.displayName = "FilterButton"),
    (t.__docgenInfo = {
      description: "",
      displayName: "FilterButton",
      props: {
        status: {
          defaultValue: null,
          description: "",
          name: "status",
          required: !0,
          type: {
            name: "enum",
            value: [
              { value: '"All"' },
              { value: '"Active"' },
              { value: '"Completed"' },
            ],
          },
        },
        onClickHandler: {
          defaultValue: null,
          description: "",
          name: "onClickHandler",
          required: !0,
          type: { name: "(status: TodoItemFilter) => void" },
        },
        isSelected: {
          defaultValue: null,
          description: "",
          name: "isSelected",
          required: !0,
          type: { name: "boolean" },
        },
      },
    });
} catch {}
export { t as F };
