import { a as f, j as a } from "./jsx-runtime-9dc53467.js";
import { T as l, a as A } from "./type-a0f69047.js";
import {
  b as p,
  u as w,
  c as x,
  d as D,
  l as E,
  e as B,
  t as R,
  f as v,
  g as F,
  h as I,
  j as N,
  k as q,
  m as j,
  n as W,
  o as $,
  p as z,
  q as M,
  r as V,
  T as Y,
} from "./ReduxStoreProviderDecorator-c00a712c.js";
import { r } from "./index-76fb7be0.js";
import { A as G } from "./AddField-16291b9c.js";
import { E as J } from "./EditableSpan-3a1648de.js";
import { F as _ } from "./FilterButton-74137275.js";
import "./ButtonBase-c19e39c2.js";
import "./react-is.production.min-22aa4f73.js";
import { B as K } from "./Button-1163e020.js";
const L = "_wrapper_k5pq3_1",
  O = "_titleWrapper_k5pq3_8",
  P = "_wrapperButtons_k5pq3_14",
  H = { wrapper: L, titleWrapper: O, wrapperButtons: P };
function y(e = p) {
  const o = e === p ? w : x(e);
  return function () {
    const { store: d } = o();
    return d;
  };
}
const Q = y();
function U(e = p) {
  const o = e === p ? Q : y(e);
  return function () {
    return o().dispatch;
  };
}
const X = U(),
  Z = D({ todolist: R, tasks: v });
E(Z, B(F));
const b = X,
  ee = I,
  te = (e) => {
    const [o, n] = r.useState(l.All),
      d = ee(({ tasks: t }) => t),
      s = b(),
      u = d[e].filter((t) =>
        o === l.All
          ? t
          : o === l.Completed
            ? t.status === A.Completed
            : t.status === A.New,
      ),
      T = r.useCallback(() => {
        s(N(e));
      }, [s, e]),
      k = r.useCallback(
        (t) => {
          s(q(e, t));
        },
        [s, e],
      ),
      m = r.useCallback(
        (t) => {
          s(j(e, t));
        },
        [s, e],
      ),
      C = r.useCallback(
        (t, h) => {
          s(W(e, t, h));
        },
        [s, e],
      ),
      c = r.useCallback((t) => {
        n(t);
      }, []),
      i = r.useCallback(
        (t) => {
          s($(e, t));
        },
        [s, e],
      ),
      g = r.useCallback(
        (t, h) => {
          s(z(e, t, h));
        },
        [s, e],
      );
    return {
      status: o,
      filterTasks: u,
      onEditTodoHandler: i,
      handlerDeleteTodolist: T,
      handlerAddTodoTask: m,
      onDeleteTodoTask: k,
      onChangeChecked: C,
      onEditTodoItemHandler: g,
      onClickFilterButtonHandler: c,
    };
  },
  S = r.memo(({ todo: e }) => {
    const o = b(),
      {
        status: n,
        filterTasks: d,
        onEditTodoHandler: s,
        handlerDeleteTodolist: u,
        handlerAddTodoTask: T,
        onDeleteTodoTask: k,
        onChangeChecked: m,
        onEditTodoItemHandler: C,
        onClickFilterButtonHandler: c,
      } = te(e.id);
    return (
      r.useEffect(() => {
        o(M(e.id));
      }, [o, e.id]),
      f("div", {
        className: H.wrapper,
        children: [
          f("div", {
            className: H.titleWrapper,
            children: [
              a(J, {
                label: e.title,
                onEditHandler: s,
                variantTypography: "h4",
              }),
              a(K, {
                size: "small",
                onClick: u,
                variant: "outlined",
                startIcon: a(V, {}),
                children: "Delete",
              }),
            ],
          }),
          a(G, { handlerAdd: T }),
          a("ul", {
            children: d.length
              ? d.map((i) =>
                  a(
                    Y,
                    {
                      task: i,
                      handlerDeleteTodoTask: k,
                      onChangeCheckedHandler: m,
                      onEditTodoItem: C,
                    },
                    i.id,
                  ),
                )
              : a("p", { children: "Your tasks are empty " }),
          }),
          f("div", {
            className: H.wrapperButtons,
            children: [
              a(_, {
                status: l.All,
                onClickHandler: c,
                isSelected: n === l.All,
              }),
              a(_, {
                status: l.Active,
                onClickHandler: c,
                isSelected: n === l.Active,
              }),
              a(_, {
                status: l.Completed,
                onClickHandler: c,
                isSelected: n === l.Completed,
              }),
            ],
          }),
        ],
      })
    );
  });
try {
  (S.displayName = "Todolist"),
    (S.__docgenInfo = {
      description: "",
      displayName: "Todolist",
      props: {
        todo: {
          defaultValue: null,
          description: "",
          name: "todo",
          required: !0,
          type: { name: "TodolistType" },
        },
      },
    });
} catch {}
export { S as T, b as a, ee as u };
