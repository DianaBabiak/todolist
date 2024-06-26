import { I as h, v as m } from "./preview-errors-8d9da8be.js";
const { addons: E } = __STORYBOOK_MODULE_PREVIEW_API__,
  { global: O } = __STORYBOOK_MODULE_GLOBAL__;
var R = "storybook/actions",
  w = `${R}/action-event`,
  D = { depth: 10, clearOnStoryChange: !0, limit: 50 },
  d = (t, o) => {
    let e = Object.getPrototypeOf(t);
    return !e || o(e) ? e : d(e, o);
  },
  b = (t) =>
    !!(
      typeof t == "object" &&
      t &&
      d(t, (o) => /^Synthetic(?:Base)?Event$/.test(o.constructor.name)) &&
      typeof t.persist == "function"
    ),
  v = (t) => {
    if (b(t)) {
      let o = Object.create(
        t.constructor.prototype,
        Object.getOwnPropertyDescriptors(t),
      );
      o.persist();
      let e = Object.getOwnPropertyDescriptor(o, "view"),
        n = e == null ? void 0 : e.value;
      return (
        typeof n == "object" &&
          (n == null ? void 0 : n.constructor.name) === "Window" &&
          Object.defineProperty(o, "view", {
            ...e,
            value: Object.create(n.constructor.prototype),
          }),
        o
      );
    }
    return t;
  },
  I = () =>
    typeof crypto == "object" && typeof crypto.getRandomValues == "function"
      ? m()
      : Date.now().toString(36) + Math.random().toString(36).substring(2);
function S(t, o = {}) {
  let e = { ...D, ...o },
    n = function (...i) {
      var a, s;
      if (o.implicit) {
        let p =
          (a =
            "__STORYBOOK_PREVIEW__" in O ? O.__STORYBOOK_PREVIEW__ : void 0) ==
          null
            ? void 0
            : a.storyRenders.find(
                (r) => r.phase === "playing" || r.phase === "rendering",
              );
        if (p) {
          let r = !(
              (s = window == null ? void 0 : window.FEATURES) != null &&
              s.disallowImplicitActionsInRenderV8
            ),
            l = new h({ phase: p.phase, name: t, deprecated: r });
          if (r) console.warn(l);
          else throw l;
        }
      }
      let _ = E.getChannel(),
        y = I(),
        g = 5,
        c = i.map(v),
        u = i.length > 1 ? c : c[0],
        f = {
          id: y,
          count: 0,
          data: { name: t, args: u },
          options: {
            ...e,
            maxDepth: g + (e.depth || 3),
            allowFunction: e.allowFunction || !1,
          },
        };
      _.emit(w, f);
    };
  return (n.isAction = !0), n;
}
export { S as a };
