import { r as e, u as i } from "./stringify-ec260085.js";
import { d as s } from "./index-356e4a49.js";
const a =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  n = { randomUUID: a };
function m(E, t, o) {
  if (n.randomUUID && !t && !E) return n.randomUUID();
  E = E || {};
  const r = E.random || (E.rng || e)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    o = o || 0;
    for (let R = 0; R < 16; ++R) t[o + R] = r[R];
    return t;
  }
  return i(r);
}
var d = class extends Error {
    constructor() {
      super(...arguments),
        (this.data = {}),
        (this.documentation = !1),
        (this.fromStorybook = !0);
    }
    get fullErrorCode() {
      let E = String(this.code).padStart(4, "0");
      return `SB_${this.category}_${E}`;
    }
    get name() {
      let E = this.constructor.name;
      return `${this.fullErrorCode} (${E})`;
    }
    get message() {
      let E;
      return (
        this.documentation === !0
          ? (E = `https://storybook.js.org/error/${this.fullErrorCode}`)
          : typeof this.documentation == "string"
            ? (E = this.documentation)
            : Array.isArray(this.documentation) &&
              (E = `
${this.documentation.map((t) => `	- ${t}`).join(`
`)}`),
        `${this.template()}${
          E != null
            ? `

More info: ${E}
`
            : ""
        }`
      );
    }
  },
  c = ((E) => (
    (E.PREVIEW_CLIENT_LOGGER = "PREVIEW_CLIENT-LOGGER"),
    (E.PREVIEW_CHANNELS = "PREVIEW_CHANNELS"),
    (E.PREVIEW_CORE_EVENTS = "PREVIEW_CORE-EVENTS"),
    (E.PREVIEW_INSTRUMENTER = "PREVIEW_INSTRUMENTER"),
    (E.PREVIEW_API = "PREVIEW_API"),
    (E.PREVIEW_REACT_DOM_SHIM = "PREVIEW_REACT-DOM-SHIM"),
    (E.PREVIEW_ROUTER = "PREVIEW_ROUTER"),
    (E.PREVIEW_THEMING = "PREVIEW_THEMING"),
    (E.RENDERER_HTML = "RENDERER_HTML"),
    (E.RENDERER_PREACT = "RENDERER_PREACT"),
    (E.RENDERER_REACT = "RENDERER_REACT"),
    (E.RENDERER_SERVER = "RENDERER_SERVER"),
    (E.RENDERER_SVELTE = "RENDERER_SVELTE"),
    (E.RENDERER_VUE = "RENDERER_VUE"),
    (E.RENDERER_VUE3 = "RENDERER_VUE3"),
    (E.RENDERER_WEB_COMPONENTS = "RENDERER_WEB-COMPONENTS"),
    E
  ))(c || {}),
  N = class extends d {
    constructor(E) {
      super(),
        (this.data = E),
        (this.category = "PREVIEW_API"),
        (this.code = 2),
        (this.documentation =
          "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function");
    }
    template() {
      return s`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${
        this.data.deprecated
          ? `
This is deprecated and won't work in Storybook 8 anymore.
`
          : ""
      }
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `;
    }
  };
export { N as I, m as v };
