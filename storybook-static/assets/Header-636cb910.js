import { j as e, a as l, F as r } from "./jsx-runtime-9dc53467.js";
import { B as n } from "./Button-f198ed1b.js";
const i = ({ user: a, onLogin: o, onLogout: d, onCreateAccount: t }) =>
  e("header", {
    children: l("div", {
      className: "storybook-header",
      children: [
        l("div", {
          children: [
            e("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 32 32",
              xmlns: "http://www.w3.org/2000/svg",
              children: l("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  e("path", {
                    d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
                    fill: "#FFF",
                  }),
                  e("path", {
                    d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
                    fill: "#555AB9",
                  }),
                  e("path", {
                    d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
                    fill: "#91BAF8",
                  }),
                ],
              }),
            }),
            e("h1", { children: "Acme" }),
          ],
        }),
        e("div", {
          children: a
            ? l(r, {
                children: [
                  l("span", {
                    className: "welcome",
                    children: ["Welcome, ", e("b", { children: a.name }), "!"],
                  }),
                  e(n, { size: "small", onClick: d, label: "Log out" }),
                ],
              })
            : l(r, {
                children: [
                  e(n, { size: "small", onClick: o, label: "Log in" }),
                  e(n, {
                    primary: !0,
                    size: "small",
                    onClick: t,
                    label: "Sign up",
                  }),
                ],
              }),
        }),
      ],
    }),
  });
try {
  (i.displayName = "Header"),
    (i.__docgenInfo = {
      description: "",
      displayName: "Header",
      props: {
        user: {
          defaultValue: null,
          description: "",
          name: "user",
          required: !1,
          type: { name: "User" },
        },
        onLogin: {
          defaultValue: null,
          description: "",
          name: "onLogin",
          required: !0,
          type: { name: "() => void" },
        },
        onLogout: {
          defaultValue: null,
          description: "",
          name: "onLogout",
          required: !0,
          type: { name: "() => void" },
        },
        onCreateAccount: {
          defaultValue: null,
          description: "",
          name: "onCreateAccount",
          required: !0,
          type: { name: "() => void" },
        },
      },
    });
} catch {}
export { i as H };
