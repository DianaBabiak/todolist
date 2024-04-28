import { I as A, v as R } from "./preview-errors-8d9da8be.js";
import "./stringify-ec260085.js";
import "./index-356e4a49.js";
const { addons: E } = __STORYBOOK_MODULE_PREVIEW_API__,
  { global: O } = __STORYBOOK_MODULE_GLOBAL__;
var b = "storybook/actions",
  I = `${b}/action-event`,
  T = { depth: 10, clearOnStoryChange: !0, limit: 50 },
  _ = (t, n) => {
    let e = Object.getPrototypeOf(t);
    return !e || n(e) ? e : _(e, n);
  },
  w = (t) =>
    !!(
      typeof t == "object" &&
      t &&
      _(t, (n) => /^Synthetic(?:Base)?Event$/.test(n.constructor.name)) &&
      typeof t.persist == "function"
    ),
  j = (t) => {
    if (w(t)) {
      let n = Object.create(
        t.constructor.prototype,
        Object.getOwnPropertyDescriptors(t),
      );
      n.persist();
      let e = Object.getOwnPropertyDescriptor(n, "view"),
        r = e == null ? void 0 : e.value;
      return (
        typeof r == "object" &&
          (r == null ? void 0 : r.constructor.name) === "Window" &&
          Object.defineProperty(n, "view", {
            ...e,
            value: Object.create(r.constructor.prototype),
          }),
        n
      );
    }
    return t;
  },
  D = () =>
    typeof crypto == "object" && typeof crypto.getRandomValues == "function"
      ? R()
      : Date.now().toString(36) + Math.random().toString(36).substring(2);
function l(t, n = {}) {
  let e = { ...T, ...n },
    r = function (...i) {
      var g, d;
      if (n.implicit) {
        let y =
          (g =
            "__STORYBOOK_PREVIEW__" in O ? O.__STORYBOOK_PREVIEW__ : void 0) ==
          null
            ? void 0
            : g.storyRenders.find(
                (s) => s.phase === "playing" || s.phase === "rendering",
              );
        if (y) {
          let s = !(
              (d = window == null ? void 0 : window.FEATURES) != null &&
              d.disallowImplicitActionsInRenderV8
            ),
            f = new A({ phase: y.phase, name: t, deprecated: s });
          if (s) console.warn(f);
          else throw f;
        }
      }
      let o = E.getChannel(),
        c = D(),
        a = 5,
        p = i.map(j),
        h = i.length > 1 ? p : p[0],
        u = {
          id: c,
          count: 0,
          data: { name: t, args: h },
          options: {
            ...e,
            maxDepth: a + (e.depth || 3),
            allowFunction: e.allowFunction || !1,
          },
        };
      o.emit(I, u);
    };
  return (r.isAction = !0), r;
}
var m = (t, n) => typeof n[t] > "u" && !(t in n),
  S = (t) => {
    let {
      initialArgs: n,
      argTypes: e,
      id: r,
      parameters: { actions: i },
    } = t;
    if (!i || i.disable || !i.argTypesRegex || !e) return {};
    let o = new RegExp(i.argTypesRegex);
    return Object.entries(e)
      .filter(([c]) => !!o.test(c))
      .reduce(
        (c, [a, p]) => (m(a, n) && (c[a] = l(a, { implicit: !0, id: r })), c),
        {},
      );
  },
  P = (t) => {
    let {
      initialArgs: n,
      argTypes: e,
      parameters: { actions: r },
    } = t;
    return (r != null && r.disable) || !e
      ? {}
      : Object.entries(e)
          .filter(([i, o]) => !!o.action)
          .reduce(
            (i, [o, c]) => (
              m(o, n) && (i[o] = l(typeof c.action == "string" ? c.action : o)),
              i
            ),
            {},
          );
  },
  B = [P, S],
  F = (t) => {
    let {
      args: n,
      parameters: { actions: e },
    } = t;
    (e != null && e.disable) ||
      Object.entries(n)
        .filter(
          ([, r]) =>
            typeof r == "function" &&
            "_isMockFunction" in r &&
            r._isMockFunction,
        )
        .forEach(([r, i]) => {
          let o = i.getMockImplementation();
          if (
            (o == null ? void 0 : o._actionAttached) !== !0 &&
            (o == null ? void 0 : o.isAction) !== !0
          ) {
            let c = (...a) => (l(r)(...a), o == null ? void 0 : o(...a));
            (c._actionAttached = !0), i.mockImplementation(c);
          }
        });
  },
  V = [F];
export { B as argsEnhancers, V as loaders };
