import { _ as a } from "./iframe-127d47d8.js";
import { R as e, r as c } from "./index-76fb7be0.js";
import { r as l, u } from "./react-18-988a5df2.js";
import { C as h, A as E, H as d, D as x } from "./index-2568921c.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-de833af9.js";
import "./index-d3ea75b5.js";
import "./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";
import "./index-11d98b33.js";
import "./assertThisInitialized-e784747a.js";
import "./index-8fd8397b.js";
import "./index-356e4a49.js";
var _ = { code: h, a: E, ...d },
  D = class extends c.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(t) {
      let { showException: r } = this.props;
      r(t);
    }
    render() {
      let { hasError: t } = this.state,
        { children: r } = this.props;
      return t ? null : e.createElement(e.Fragment, null, r);
    }
  },
  S = class {
    constructor() {
      (this.render = async (t, r, o) => {
        let n = { ..._, ...(r == null ? void 0 : r.components) },
          s = x;
        return new Promise((m, i) => {
          a(
            () => import("./index-9eea8125.js"),
            [
              "./index-9eea8125.js",
              "./index-a1cf9e47.js",
              "./index-76fb7be0.js",
              "./_commonjsHelpers-de833af9.js",
            ],
            import.meta.url,
          )
            .then(({ MDXProvider: p }) =>
              l(
                e.createElement(
                  D,
                  { showException: i, key: Math.random() },
                  e.createElement(
                    p,
                    { components: n },
                    e.createElement(s, { context: t, docsParameter: r }),
                  ),
                ),
                o,
              ),
            )
            .then(() => m());
        });
      }),
        (this.unmount = (t) => {
          u(t);
        });
    }
  };
export { S as DocsRenderer, _ as defaultComponents };
