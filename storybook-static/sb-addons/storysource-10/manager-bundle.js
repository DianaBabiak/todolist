try {
  (() => {
    var g = __REACT__,
      {
        Children: ht,
        Component: Ot,
        Fragment: _t,
        Profiler: vt,
        PureComponent: Pt,
        StrictMode: Lt,
        Suspense: Tt,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Et,
        cloneElement: Ct,
        createContext: Rt,
        createElement: kt,
        createFactory: Nt,
        createRef: wt,
        forwardRef: xt,
        isValidElement: jt,
        lazy: Bt,
        memo: It,
        useCallback: At,
        useContext: Dt,
        useDebugValue: Mt,
        useEffect: Ht,
        useImperativeHandle: Kt,
        useLayoutEffect: Yt,
        useMemo: Ft,
        useReducer: Wt,
        useRef: $t,
        useState: Gt,
        version: Ut,
      } = __REACT__;
    var Jt = __STORYBOOK_API__,
      {
        ActiveTabs: Zt,
        Consumer: Xt,
        ManagerContext: rt,
        Provider: tc,
        addons: w,
        combineParameters: cc,
        controlOrMetaKey: oc,
        controlOrMetaSymbol: ec,
        eventMatchesShortcut: nc,
        eventToShortcut: ac,
        isMacLike: ic,
        isShortcutTaken: sc,
        keyToSymbol: lc,
        merge: uc,
        mockChannel: pc,
        optionOrAltSymbol: dc,
        shortcutMatchesShortcut: mc,
        shortcutToHumanString: yc,
        types: D,
        useAddonState: fc,
        useArgTypes: gc,
        useArgs: Sc,
        useChannel: bc,
        useGlobalTypes: hc,
        useGlobals: Oc,
        useParameter: x,
        useSharedState: _c,
        useStoryPrepared: vc,
        useStorybookApi: Pc,
        useStorybookState: Lc,
      } = __STORYBOOK_API__;
    var kc = __STORYBOOK_THEMING__,
      {
        CacheProvider: Nc,
        ClassNames: wc,
        Global: xc,
        ThemeProvider: jc,
        background: Bc,
        color: Ic,
        convert: Ac,
        create: Dc,
        createCache: Mc,
        createGlobal: Hc,
        createReset: Kc,
        css: Yc,
        darken: Fc,
        ensure: Wc,
        ignoreSsrWarning: $c,
        isPropValid: Gc,
        jsx: Uc,
        keyframes: Vc,
        lighten: qc,
        styled: C,
        themes: zc,
        typography: Qc,
        useTheme: Jc,
        withTheme: Zc,
      } = __STORYBOOK_THEMING__;
    var oo = __STORYBOOK_ROUTER__,
      {
        BaseLocationProvider: eo,
        DEEPLY_EQUAL: no,
        Link: M,
        Location: ao,
        LocationProvider: io,
        Match: so,
        Route: lo,
        buildArgsParam: uo,
        deepDiff: po,
        getMatch: mo,
        parsePath: yo,
        queryFromLocation: fo,
        queryFromString: go,
        stringifyQuery: So,
        useNavigate: bo,
      } = __STORYBOOK_ROUTER__;
    var Po = __STORYBOOK_COMPONENTS__,
      {
        A: Lo,
        ActionBar: To,
        AddonPanel: Eo,
        Badge: Co,
        Bar: Ro,
        Blockquote: ko,
        Button: No,
        ClipboardCode: wo,
        Code: xo,
        DL: jo,
        Div: Bo,
        DocumentWrapper: Io,
        ErrorFormatter: Ao,
        FlexBar: Do,
        Form: Mo,
        H1: Ho,
        H2: Ko,
        H3: Yo,
        H4: Fo,
        H5: Wo,
        H6: $o,
        HR: Go,
        IconButton: Uo,
        IconButtonSkeleton: Vo,
        Icons: qo,
        Img: zo,
        LI: Qo,
        Link: Jo,
        ListItem: Zo,
        Loader: Xo,
        OL: ro,
        P: te,
        Placeholder: ce,
        Pre: oe,
        ResetWrapper: ee,
        ScrollArea: ne,
        Separator: ae,
        Spaced: ie,
        Span: se,
        StorybookIcon: le,
        StorybookLogo: ue,
        Symbols: pe,
        SyntaxHighlighter: H,
        TT: de,
        TabBar: me,
        TabButton: ye,
        TabWrapper: fe,
        Table: ge,
        Tabs: Se,
        TabsState: be,
        TooltipLinkList: he,
        TooltipMessage: Oe,
        TooltipNote: _e,
        UL: ve,
        WithTooltip: Pe,
        WithTooltipPure: Le,
        Zoom: Te,
        codeCommon: Ee,
        components: Ce,
        createCopyToClipboardFunction: Re,
        getStoryHref: ke,
        icons: Ne,
        interleaveSeparators: we,
        nameSpaceClassNames: xe,
        resetComponents: je,
        withReset: Be,
      } = __STORYBOOK_COMPONENTS__;
    var z = !0,
      j = "Invariant failed";
    function K(t, c) {
      if (!t) {
        if (z) throw new Error(j);
        var o = typeof c == "function" ? c() : c,
          e = o ? "".concat(j, ": ").concat(o) : j;
        throw new Error(e);
      }
    }
    function P(t) {
      "@babel/helpers - typeof";
      return (
        (P =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (c) {
                return typeof c;
              }
            : function (c) {
                return c &&
                  typeof Symbol == "function" &&
                  c.constructor === Symbol &&
                  c !== Symbol.prototype
                  ? "symbol"
                  : typeof c;
              }),
        P(t)
      );
    }
    function Q(t, c) {
      if (P(t) !== "object" || t === null) return t;
      var o = t[Symbol.toPrimitive];
      if (o !== void 0) {
        var e = o.call(t, c || "default");
        if (P(e) !== "object") return e;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (c === "string" ? String : Number)(t);
    }
    function J(t) {
      var c = Q(t, "string");
      return P(c) === "symbol" ? c : String(c);
    }
    function Z(t, c, o) {
      return (
        (c = J(c)),
        c in t
          ? Object.defineProperty(t, c, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[c] = o),
        t
      );
    }
    function I() {
      return (
        (I = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var c = 1; c < arguments.length; c++) {
                var o = arguments[c];
                for (var e in o)
                  Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
              }
              return t;
            }),
        I.apply(this, arguments)
      );
    }
    function Y(t, c) {
      var o = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        c &&
          (e = e.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          o.push.apply(o, e);
      }
      return o;
    }
    function _(t) {
      for (var c = 1; c < arguments.length; c++) {
        var o = arguments[c] != null ? arguments[c] : {};
        c % 2
          ? Y(Object(o), !0).forEach(function (e) {
              Z(t, e, o[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : Y(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e),
                );
              });
      }
      return t;
    }
    function X(t) {
      var c = t.length;
      if (c === 0 || c === 1) return t;
      if (c === 2)
        return [
          t[0],
          t[1],
          "".concat(t[0], ".").concat(t[1]),
          "".concat(t[1], ".").concat(t[0]),
        ];
      if (c === 3)
        return [
          t[0],
          t[1],
          t[2],
          "".concat(t[0], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[2]),
          "".concat(t[2], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[0]),
        ];
      if (c >= 4)
        return [
          t[0],
          t[1],
          t[2],
          t[3],
          "".concat(t[0], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[3]),
          "".concat(t[3], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[3]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[3]),
          "".concat(t[0], ".").concat(t[3], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[3], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[3], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[3], ".").concat(t[2]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[3], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[3], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[3], ".").concat(t[1], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[3], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[2], ".").concat(t[3]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[3], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[1], ".").concat(t[3]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[3], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[3], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[3], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[2], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[3], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[0], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[3], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[3], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[3], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[1], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[3], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[0], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[3], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[3], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[3], ".").concat(t[1], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[0], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[3], ".").concat(t[0], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[1], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[3], ".").concat(t[1], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[2], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[2], ".").concat(t[1], ".").concat(t[0]),
        ];
    }
    var B = {};
    function r(t) {
      if (t.length === 0 || t.length === 1) return t;
      var c = t.join(".");
      return B[c] || (B[c] = X(t)), B[c];
    }
    function tt(t) {
      var c =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        o = arguments.length > 2 ? arguments[2] : void 0,
        e = t.filter(function (m) {
          return m !== "token";
        }),
        n = r(e);
      return n.reduce(function (m, v) {
        return _(_({}, m), o[v]);
      }, c);
    }
    function F(t) {
      return t.join(" ");
    }
    function ct(t, c) {
      var o = 0;
      return function (e) {
        return (
          (o += 1),
          e.map(function (n, m) {
            return W({
              node: n,
              stylesheet: t,
              useInlineStyles: c,
              key: "code-segment-".concat(o, "-").concat(m),
            });
          })
        );
      };
    }
    function W(t) {
      var c = t.node,
        o = t.stylesheet,
        e = t.style,
        n = e === void 0 ? {} : e,
        m = t.useInlineStyles,
        v = t.key,
        l = c.properties,
        L = c.type,
        O = c.tagName,
        R = c.value;
      if (L === "text") return R;
      if (O) {
        var k = ct(o, m),
          a;
        if (!m) a = _(_({}, l), {}, { className: F(l.className) });
        else {
          var i = Object.keys(o).reduce(function (d, y) {
              return (
                y.split(".").forEach(function (f) {
                  d.includes(f) || d.push(f);
                }),
                d
              );
            }, []),
            u = l.className && l.className.includes("token") ? ["token"] : [],
            s =
              l.className &&
              u.concat(
                l.className.filter(function (d) {
                  return !i.includes(d);
                }),
              );
          a = _(
            _({}, l),
            {},
            {
              className: F(s) || void 0,
              style: tt(l.className, Object.assign({}, l.style, n), o),
            },
          );
        }
        var p = k(c.children);
        return g.createElement(O, I({ key: v }, a), p);
      }
    }
    var ot = C(M)(({ theme: t }) => ({
        display: "block",
        textDecoration: "none",
        borderRadius: t.appBorderRadius,
        color: "inherit",
        "&:hover": { background: t.background.hoverable },
      })),
      et = C.div(({ theme: t }) => ({
        background: t.background.hoverable,
        borderRadius: t.appBorderRadius,
      })),
      nt = C(H)(({ theme: t }) => ({ fontSize: t.typography.size.s2 - 1 })),
      at = (t, c) =>
        t.startLoc.line === c.startLoc.line &&
        t.startLoc.col === c.startLoc.col &&
        t.endLoc.line === c.endLoc.line &&
        t.endLoc.col === c.endLoc.col,
      it = ({ api: t }) => {
        let c = t.getCurrentStoryData(),
          o = g.useRef(null),
          { source: e, locationsMap: n } = x("storySource", {}),
          { source: { originalSource: m } = {} } = x("docs", {}),
          v = e || m || "loading source...",
          l = n
            ? Object.keys(n).find((a) => {
                let i = a.split("--");
                return c.id.endsWith(i[i.length - 1]);
              })
            : void 0,
          L = n && l ? n[l] : void 0;
        g.useEffect(() => {
          o.current && o.current.scrollIntoView();
        }, [o.current]);
        let O = ({ rows: a, stylesheet: i, useInlineStyles: u }) =>
            a.map((s, p) =>
              W({
                node: s,
                stylesheet: i,
                useInlineStyles: u,
                key: `code-segment${p}`,
              }),
            ),
          R = ({
            rows: a,
            stylesheet: i,
            useInlineStyles: u,
            location: s,
            id: p,
            refId: d,
          }) => {
            let y = s.startLoc.line - 1,
              f = s.endLoc.line,
              N = a.slice(y, f),
              T = O({ rows: N, stylesheet: i, useInlineStyles: u }),
              E = `${y}-${f}`;
            return L && at(s, L)
              ? g.createElement(et, { key: E, ref: o }, T)
              : g.createElement(
                  ot,
                  { to: d ? `/story/${d}_${p}` : `/story/${p}`, key: E },
                  T,
                );
          },
          k = ({ rows: a, stylesheet: i, useInlineStyles: u }) => {
            let s = [],
              p = 0;
            K(n, "locationsMap should be defined while creating parts"),
              Object.keys(n).forEach((y) => {
                let f = n[y],
                  N = f.startLoc.line - 1,
                  T = f.endLoc.line,
                  { title: E, refId: G } = c,
                  A = y.split("--"),
                  U = t.storyId(E, A[A.length - 1]),
                  V = O({
                    rows: a.slice(p, N),
                    stylesheet: i,
                    useInlineStyles: u,
                  }),
                  q = R({
                    rows: a,
                    stylesheet: i,
                    useInlineStyles: u,
                    location: f,
                    id: U,
                    refId: G,
                  });
                s.push(...V), s.push(q), (p = T);
              });
            let d = O({ rows: a.slice(p), stylesheet: i, useInlineStyles: u });
            return s.push(...d), s;
          };
        return c
          ? g.createElement(
              nt,
              {
                language: "jsx",
                showLineNumbers: !0,
                renderer: ({ rows: a, stylesheet: i, useInlineStyles: u }) => {
                  let s = a.map(({ properties: d, ...y }) => ({
                    ...y,
                    properties: { className: [] },
                  }));
                  if (!n || !Object.keys(n).length)
                    return O({ rows: s, stylesheet: i, useInlineStyles: u });
                  let p = k({ rows: s, stylesheet: i, useInlineStyles: u });
                  return g.createElement("span", null, p);
                },
                format: !1,
                copyable: !1,
                padded: !0,
                wrapLongLines: !0,
                lineProps: { style: { whiteSpace: "pre" } },
              },
              v,
            )
          : null;
      },
      $ = "storybook/source-loader",
      st = `${$}/panel`;
    w.register($, (t) => {
      w.add(st, {
        type: D.PANEL,
        title: "Code",
        render: ({ active: c }) => (c ? g.createElement(it, { api: t }) : null),
        paramKey: "storysource",
      });
    });
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e,
  );
}
