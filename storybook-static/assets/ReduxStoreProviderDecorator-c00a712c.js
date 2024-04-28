import { a as ae, j as O } from "./jsx-runtime-9dc53467.js";
import "./react-is.production.min-22aa4f73.js";
import { E as ue } from "./EditableSpan-3a1648de.js";
import {
  r as ce,
  i as de,
  a as le,
  I as fe,
} from "./jsx-runtime_commonjs-proxy-019d1f89.js";
import { C as pe } from "./CheckBox-affaec7e.js";
import { r as T } from "./index-76fb7be0.js";
import { a as S, b as E } from "./type-a0f69047.js";
import { r as ye } from "./index-d3ea75b5.js";
import "./ButtonBase-c19e39c2.js";
import { t as I } from "./tasksAPI-c88ee661.js";
import { r as Te, u as me } from "./stringify-ec260085.js";
import { t as L } from "./todolistsApi-61ec3b29.js";
var q = {},
  he = de;
Object.defineProperty(q, "__esModule", { value: !0 });
var Q = (q.default = void 0),
  ve = he(ce()),
  Se = le,
  be = (0, ve.default)(
    (0, Se.jsx)("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
    }),
    "Delete",
  );
Q = q.default = be;
const ge = "_isDone_x9017_1",
  we = "_wrapperTask_x9017_7",
  $ = { isDone: ge, wrapperTask: we },
  U = T.memo(
    ({
      task: e,
      handlerDeleteTodoTask: t,
      onChangeCheckedHandler: r,
      onEditTodoItem: n,
    }) => {
      const o = T.useCallback(() => {
          const a = e.status === S.Completed ? S.New : S.Completed;
          r(e.id, a);
        }, [r, e.id, e.status]),
        i = T.useCallback(
          (a) => {
            n(e.id, a);
          },
          [n, e.id],
        );
      return ae("li", {
        className: e.status === S.Completed ? $.isDone : $.wrapperTask,
        children: [
          O(pe, { checked: e.status === S.Completed, onChange: o }),
          O(ue, { label: e.title, onEditHandler: i, variantTypography: "h6" }),
          O(fe, {
            "aria-label": "delete",
            size: "large",
            children: O(Q, { fontSize: "small", onClick: () => t(e.id) }),
          }),
        ],
      });
    },
  );
try {
  (U.displayName = "TodoTask"),
    (U.__docgenInfo = {
      description: "",
      displayName: "TodoTask",
      props: {
        task: {
          defaultValue: null,
          description: "",
          name: "task",
          required: !0,
          type: { name: "TaskType" },
        },
        handlerDeleteTodoTask: {
          defaultValue: null,
          description: "",
          name: "handlerDeleteTodoTask",
          required: !0,
          type: { name: "(idTask: string) => void" },
        },
        onChangeCheckedHandler: {
          defaultValue: null,
          description: "",
          name: "onChangeCheckedHandler",
          required: !0,
          type: { name: "(idItem: string, status: TaskStatuses) => void" },
        },
        onEditTodoItem: {
          defaultValue: null,
          description: "",
          name: "onEditTodoItem",
          required: !0,
          type: { name: "(idTask: string, newLabel: string) => void" },
        },
      },
    });
} catch {}
function A(e) {
  "@babel/helpers - typeof";
  return (
    (A =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    A(e)
  );
}
function Ee(e, t) {
  if (A(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (A(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xe(e) {
  var t = Ee(e, "string");
  return A(t) == "symbol" ? t : String(t);
}
function Ce(e, t, r) {
  return (
    (t = xe(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function B(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? B(Object(r), !0).forEach(function (n) {
          Ce(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : B(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function h(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var G = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  _ = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  P = {
    INIT: "@@redux/INIT" + _(),
    REPLACE: "@@redux/REPLACE" + _(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + _();
    },
  };
function De(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function X(e, t, r) {
  var n;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(h(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(h(1));
    return r(X)(e, t);
  }
  if (typeof e != "function") throw new Error(h(2));
  var o = e,
    i = t,
    a = [],
    s = a,
    u = !1;
  function c() {
    s === a && (s = a.slice());
  }
  function l() {
    if (u) throw new Error(h(3));
    return i;
  }
  function p(f) {
    if (typeof f != "function") throw new Error(h(4));
    if (u) throw new Error(h(5));
    var v = !0;
    return (
      c(),
      s.push(f),
      function () {
        if (v) {
          if (u) throw new Error(h(6));
          (v = !1), c();
          var w = s.indexOf(f);
          s.splice(w, 1), (a = null);
        }
      }
    );
  }
  function d(f) {
    if (!De(f)) throw new Error(h(7));
    if (typeof f.type > "u") throw new Error(h(8));
    if (u) throw new Error(h(9));
    try {
      (u = !0), (i = o(i, f));
    } finally {
      u = !1;
    }
    for (var v = (a = s), g = 0; g < v.length; g++) {
      var w = v[g];
      w();
    }
    return f;
  }
  function y(f) {
    if (typeof f != "function") throw new Error(h(10));
    (o = f), d({ type: P.REPLACE });
  }
  function m() {
    var f,
      v = p;
    return (
      (f = {
        subscribe: function (w) {
          if (typeof w != "object" || w === null) throw new Error(h(11));
          function V() {
            w.next && w.next(l());
          }
          V();
          var se = v(V);
          return { unsubscribe: se };
        },
      }),
      (f[G] = function () {
        return this;
      }),
      f
    );
  }
  return (
    d({ type: P.INIT }),
    (n = { dispatch: d, subscribe: p, getState: l, replaceReducer: y }),
    (n[G] = m),
    n
  );
}
var Oe = X;
function Ae(e) {
  Object.keys(e).forEach(function (t) {
    var r = e[t],
      n = r(void 0, { type: P.INIT });
    if (typeof n > "u") throw new Error(h(12));
    if (typeof r(void 0, { type: P.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(h(13));
  });
}
function Ie(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var o = t[n];
    typeof e[o] == "function" && (r[o] = e[o]);
  }
  var i = Object.keys(r),
    a;
  try {
    Ae(r);
  } catch (s) {
    a = s;
  }
  return function (u, c) {
    if ((u === void 0 && (u = {}), a)) throw a;
    for (var l = !1, p = {}, d = 0; d < i.length; d++) {
      var y = i[d],
        m = r[y],
        f = u[y],
        v = m(f, c);
      if (typeof v > "u") throw (c && c.type, new Error(h(14)));
      (p[y] = v), (l = l || v !== f);
    }
    return (l = l || i.length !== Object.keys(u).length), l ? p : u;
  };
}
function Pe() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0
    ? function (n) {
        return n;
      }
    : t.length === 1
      ? t[0]
      : t.reduce(function (n, o) {
          return function () {
            return n(o.apply(void 0, arguments));
          };
        });
}
function Re() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return function () {
      var o = n.apply(void 0, arguments),
        i = function () {
          throw new Error(h(15));
        },
        a = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        s = t.map(function (u) {
          return u(a);
        });
      return (
        (i = Pe.apply(void 0, s)(o.dispatch)), H(H({}, o), {}, { dispatch: i })
      );
    };
  };
}
let W,
  k,
  j = 0,
  M = 0;
function b(e, t, r) {
  let n = (t && r) || 0;
  const o = t || new Array(16);
  e = e || {};
  let i = e.node || W,
    a = e.clockseq !== void 0 ? e.clockseq : k;
  if (i == null || a == null) {
    const d = e.random || (e.rng || Te)();
    i == null && (i = W = [d[0] | 1, d[1], d[2], d[3], d[4], d[5]]),
      a == null && (a = k = ((d[6] << 8) | d[7]) & 16383);
  }
  let s = e.msecs !== void 0 ? e.msecs : Date.now(),
    u = e.nsecs !== void 0 ? e.nsecs : M + 1;
  const c = s - j + (u - M) / 1e4;
  if (
    (c < 0 && e.clockseq === void 0 && (a = (a + 1) & 16383),
    (c < 0 || s > j) && e.nsecs === void 0 && (u = 0),
    u >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  (j = s), (M = u), (k = a), (s += 122192928e5);
  const l = ((s & 268435455) * 1e4 + u) % 4294967296;
  (o[n++] = (l >>> 24) & 255),
    (o[n++] = (l >>> 16) & 255),
    (o[n++] = (l >>> 8) & 255),
    (o[n++] = l & 255);
  const p = ((s / 4294967296) * 1e4) & 268435455;
  (o[n++] = (p >>> 8) & 255),
    (o[n++] = p & 255),
    (o[n++] = ((p >>> 24) & 15) | 16),
    (o[n++] = (p >>> 16) & 255),
    (o[n++] = (a >>> 8) | 128),
    (o[n++] = a & 255);
  for (let d = 0; d < 6; ++d) o[n + d] = i[d];
  return t || me(o);
}
const Le = {},
  Ne = (e = Le, t) => {
    switch (t.type) {
      case "DELETE TODO": {
        const r = { ...e };
        return delete r[t.payload.idTodo], r;
      }
      case "DELETE TASK": {
        const { idTodo: r, idTask: n } = t.payload;
        return { ...e, [r]: e[r].filter((o) => o.id !== n) };
      }
      case "ADD EMPTY ARRAY TASK":
        return { ...e, [t.payload.idTodo]: [] };
      case "ADD TASK": {
        const { idTodo: r, newTitle: n } = t.payload,
          o = {
            addedDate: "",
            deadline: "",
            description: "",
            id: b(),
            order: 0,
            priority: E.Later,
            startDate: "",
            status: S.New,
            title: n,
            todoListId: r,
          };
        return { ...e, [r]: [...e[r], o] };
      }
      case "CHANGE STATUS": {
        const { idTodo: r, idTask: n, status: o } = t.payload;
        return {
          ...e,
          [r]: e[r].map((i) => (n === i.id ? { ...i, status: o } : i)),
        };
      }
      case "EDIT TITLE TASK": {
        const { idTodo: r, idTask: n, newTitle: o } = t.payload;
        return {
          ...e,
          [r]: e[r].map((i) => (n === i.id ? { ...i, title: o } : i)),
        };
      }
      case "GET TASKS FROM API": {
        console.log("GET TASKS FROM API");
        const { payload: r } = t;
        return { ...e, [r.idTodo]: r.data.items };
      }
      case "GET TODOLISTS FROM API": {
        const { payload: r } = t;
        return r.data.reduce((n, o) => ({ ...n, [o.id]: [] }), e);
      }
      default:
        return e;
    }
  },
  _e = (e) => ({ type: "DELETE TODO", payload: { idTodo: e } }),
  ke = (e, t) => ({ type: "DELETE TASK", payload: { idTodo: e, idTask: t } }),
  je = (e) => ({ type: "ADD EMPTY ARRAY TASK", payload: { idTodo: e } }),
  Me = (e, t) => ({ type: "ADD TASK", payload: { idTodo: e, newTitle: t } }),
  Ke = (e, t, r) => ({
    type: "CHANGE STATUS",
    payload: { idTodo: e, idTask: t, status: r },
  }),
  qe = (e, t, r) => ({
    type: "EDIT TITLE TASK",
    payload: { idTodo: e, idTask: t, newTitle: r },
  }),
  Ve = (e, t) => ({
    type: "GET TASKS FROM API",
    payload: { idTodo: e, data: t },
  }),
  Bt = (e) => (t) => {
    I.getTasks(e)
      .then((r) => t(Ve(e, r)))
      .catch((r) => console.log("err getTask", r));
  },
  Ht = (e, t) => async (r) => {
    try {
      (await I.deleteTask(e, t)).resultCode === 0 && r(ke(e, t));
    } catch (n) {
      console.log("delete task", n);
    }
  },
  Gt = (e, t) => async (r) => {
    try {
      (await I.createTask(e, t)).resultCode === 0 && r(Me(e, t));
    } catch (n) {
      console.log("add task", n);
    }
  },
  Wt = (e, t, r) => async (n, o) => {
    try {
      const s = o().tasks[e].find((l) => l.id === t),
        u = {
          title: r,
          description: s == null ? void 0 : s.description,
          status: s == null ? void 0 : s.status,
          priority: s == null ? void 0 : s.priority,
          startDate: s == null ? void 0 : s.startDate,
          deadline: s == null ? void 0 : s.deadline,
        };
      (await I.updateTask(e, t, u)).resultCode === 0 && n(qe(e, t, r));
    } catch (i) {
      console.log("edit title task", i);
    }
  },
  zt = (e, t, r) => async (n, o) => {
    try {
      const s = o().tasks[e].find((l) => l.id === t),
        u = {
          title: s == null ? void 0 : s.title,
          description: s == null ? void 0 : s.description,
          status: r,
          priority: s == null ? void 0 : s.priority,
          startDate: s == null ? void 0 : s.startDate,
          deadline: s == null ? void 0 : s.deadline,
        };
      (await I.updateTask(e, t, u)).resultCode === 0 && n(Ke(e, t, r));
    } catch (i) {
      console.log("edit title task", i);
    }
  },
  C = b(),
  D = b(),
  $e = [],
  Ue = (e = $e, t) => {
    switch (t.type) {
      case "ADD TODO":
        return [t.payload.data, ...e];
      case "DELETE TODO":
        return e.filter((r) => r.id !== t.payload.idTodo);
      case "EDIT TODO TITLE":
        return e.map((r) =>
          r.id === t.payload.idTodo ? { ...r, title: t.payload.newTitle } : r,
        );
      case "GET TODOLISTS FROM API":
        return t.payload.data;
      default:
        return e;
    }
  },
  Be = (e) => ({ type: "DELETE TODO", payload: { idTodo: e } }),
  He = (e) => ({ type: "ADD TODO", payload: { data: e } }),
  Ge = (e, t) => ({
    type: "EDIT TODO TITLE",
    payload: { idTodo: e, newTitle: t },
  }),
  We = (e) => ({ type: "GET TODOLISTS FROM API", payload: { data: e } }),
  Yt = () => (e) => {
    L.getTodolists()
      .then((t) => {
        e(We(t));
      })
      .catch((t) => console.log("err getTodo", t));
  },
  Ft = (e) => (t) => {
    L.createTodolist(e)
      .then((r) => {
        r.resultCode === 0 && (t(He(r.data.item)), t(je(r.data.item.id)));
      })
      .catch((r) => console.log("create todo", r));
  },
  Jt = (e) => async (t) => {
    try {
      (await L.deleteTodolist(e)).resultCode === 0 && (t(Be(e)), t(_e(e)));
    } catch (r) {
      console.log("delete todo", r);
    }
  },
  Qt = (e, t) => async (r) => {
    try {
      (await L.updateTodolist(e, t)).resultCode === 0 && r(Ge(e, t));
    } catch (n) {
      console.log("editTitleTodolist", n);
    }
  };
function ze(e) {
  return ({ dispatch: r, getState: n }) =>
    (o) =>
    (i) =>
      typeof i == "function" ? i(r, n, e) : o(i);
}
var Ye = ze(),
  Z = { exports: {} },
  ee = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x = T;
function Fe(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : Fe,
  Qe = x.useState,
  Xe = x.useEffect,
  Ze = x.useLayoutEffect,
  et = x.useDebugValue;
function tt(e, t) {
  var r = t(),
    n = Qe({ inst: { value: r, getSnapshot: t } }),
    o = n[0].inst,
    i = n[1];
  return (
    Ze(
      function () {
        (o.value = r), (o.getSnapshot = t), K(o) && i({ inst: o });
      },
      [e, r, t],
    ),
    Xe(
      function () {
        return (
          K(o) && i({ inst: o }),
          e(function () {
            K(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    et(r),
    r
  );
}
function K(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Je(e, r);
  } catch {
    return !0;
  }
}
function rt(e, t) {
  return t();
}
var nt =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? rt
    : tt;
ee.useSyncExternalStore =
  x.useSyncExternalStore !== void 0 ? x.useSyncExternalStore : nt;
Z.exports = ee;
var ot = Z.exports,
  te = { exports: {} },
  re = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var N = T,
  it = ot;
function st(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var at = typeof Object.is == "function" ? Object.is : st,
  ut = it.useSyncExternalStore,
  ct = N.useRef,
  dt = N.useEffect,
  lt = N.useMemo,
  ft = N.useDebugValue;
re.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
  var i = ct(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else a = i.current;
  i = lt(
    function () {
      function u(y) {
        if (!c) {
          if (((c = !0), (l = y), (y = n(y)), o !== void 0 && a.hasValue)) {
            var m = a.value;
            if (o(m, y)) return (p = m);
          }
          return (p = y);
        }
        if (((m = p), at(l, y))) return m;
        var f = n(y);
        return o !== void 0 && o(m, f) ? m : ((l = y), (p = f));
      }
      var c = !1,
        l,
        p,
        d = r === void 0 ? null : r;
      return [
        function () {
          return u(t());
        },
        d === null
          ? void 0
          : function () {
              return u(d());
            },
      ];
    },
    [t, r, n, o],
  );
  var s = ut(e, i[0], i[1]);
  return (
    dt(
      function () {
        (a.hasValue = !0), (a.value = s);
      },
      [s],
    ),
    ft(s),
    s
  );
};
te.exports = re;
var pt = te.exports;
function yt(e) {
  e();
}
let ne = yt;
const Tt = (e) => (ne = e),
  mt = () => ne,
  z = Symbol.for("react-redux-context"),
  Y = typeof globalThis < "u" ? globalThis : {};
function ht() {
  var e;
  if (!T.createContext) return {};
  const t = (e = Y[z]) != null ? e : (Y[z] = new Map());
  let r = t.get(T.createContext);
  return r || ((r = T.createContext(null)), t.set(T.createContext, r)), r;
}
const R = ht();
function oe(e = R) {
  return function () {
    return T.useContext(e);
  };
}
const vt = oe(),
  St = () => {
    throw new Error("uSES not initialized!");
  };
let ie = St;
const bt = (e) => {
    ie = e;
  },
  gt = (e, t) => e === t;
function wt(e = R) {
  const t = e === R ? vt : oe(e);
  return function (n, o = {}) {
    const {
        equalityFn: i = gt,
        stabilityCheck: a = void 0,
        noopCheck: s = void 0,
      } = typeof o == "function" ? { equalityFn: o } : o,
      {
        store: u,
        subscription: c,
        getServerState: l,
        stabilityCheck: p,
        noopCheck: d,
      } = t();
    T.useRef(!0);
    const y = T.useCallback(
        {
          [n.name](f) {
            return n(f);
          },
        }[n.name],
        [n, p, a],
      ),
      m = ie(c.addNestedSub, u.getState, l || u.getState, y, i);
    return T.useDebugValue(m), m;
  };
}
const Xt = wt();
function Et() {
  const e = mt();
  let t = null,
    r = null;
  return {
    clear() {
      (t = null), (r = null);
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      let n = [],
        o = t;
      for (; o; ) n.push(o), (o = o.next);
      return n;
    },
    subscribe(n) {
      let o = !0,
        i = (r = { callback: n, next: null, prev: r });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (r = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const F = { notify() {}, get: () => [] };
function xt(e, t) {
  let r,
    n = F,
    o = 0,
    i = !1;
  function a(f) {
    l();
    const v = n.subscribe(f);
    let g = !1;
    return () => {
      g || ((g = !0), v(), p());
    };
  }
  function s() {
    n.notify();
  }
  function u() {
    m.onStateChange && m.onStateChange();
  }
  function c() {
    return i;
  }
  function l() {
    o++, r || ((r = t ? t.addNestedSub(u) : e.subscribe(u)), (n = Et()));
  }
  function p() {
    o--, r && o === 0 && (r(), (r = void 0), n.clear(), (n = F));
  }
  function d() {
    i || ((i = !0), l());
  }
  function y() {
    i && ((i = !1), p());
  }
  const m = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: u,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: y,
    getListeners: () => n,
  };
  return m;
}
const Ct =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Dt = Ct ? T.useLayoutEffect : T.useEffect;
function Ot({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once",
}) {
  const a = T.useMemo(() => {
      const c = xt(e);
      return {
        store: e,
        subscription: c,
        getServerState: n ? () => n : void 0,
        stabilityCheck: o,
        noopCheck: i,
      };
    }, [e, n, o, i]),
    s = T.useMemo(() => e.getState(), [e]);
  Dt(() => {
    const { subscription: c } = a;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      s !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [a, s]);
  const u = t || R;
  return T.createElement(u.Provider, { value: a }, r);
}
bt(pt.useSyncExternalStoreWithSelector);
Tt(ye.unstable_batchedUpdates);
const At = Ie({ todolist: Ue, tasks: Ne }),
  It = {
    todolist: [
      { title: "Programming", id: C, addedDate: "", order: 0 },
      { title: "Drinks", id: D, addedDate: "", order: 0 },
    ],
    tasks: {
      [C]: [
        {
          addedDate: "",
          deadline: "",
          description: "",
          id: b(),
          order: 0,
          priority: E.Low,
          startDate: "",
          status: S.Completed,
          title: "JS",
          todoListId: C,
        },
        {
          addedDate: "",
          deadline: "",
          description: "",
          id: b(),
          order: 0,
          priority: E.Low,
          startDate: "",
          status: S.New,
          title: "HTML",
          todoListId: C,
        },
        {
          addedDate: "",
          deadline: "",
          description: "",
          id: b(),
          order: 0,
          priority: E.Low,
          startDate: "",
          status: S.Completed,
          title: "React",
          todoListId: C,
        },
      ],
      [D]: [
        {
          addedDate: "",
          deadline: "",
          description: "",
          id: b(),
          order: 0,
          priority: E.Low,
          startDate: "",
          status: S.Completed,
          title: "Milk",
          todoListId: D,
        },
        {
          addedDate: "",
          deadline: "",
          description: "",
          id: b(),
          order: 0,
          priority: E.Low,
          startDate: "",
          status: S.New,
          title: "Water",
          todoListId: D,
        },
        {
          addedDate: "",
          deadline: "",
          description: "",
          id: b(),
          order: 0,
          priority: E.Low,
          startDate: "",
          status: S.Completed,
          title: "Tea",
          todoListId: D,
        },
      ],
    },
  },
  Pt = Oe(At, It, Re(Ye)),
  J = (e) => O(Ot, { store: Pt, children: e() });
try {
  (J.displayName = "ReduxStoreProviderDecorator"),
    (J.__docgenInfo = {
      description: "",
      displayName: "ReduxStoreProviderDecorator",
      props: {},
    });
} catch {}
export {
  J as R,
  U as T,
  C as a,
  R as b,
  oe as c,
  Ie as d,
  Re as e,
  Ne as f,
  Ye as g,
  Xt as h,
  It as i,
  Jt as j,
  Ht as k,
  Oe as l,
  Gt as m,
  zt as n,
  Qt as o,
  Wt as p,
  Bt as q,
  Q as r,
  Yt as s,
  Ue as t,
  vt as u,
  Ft as v,
};
