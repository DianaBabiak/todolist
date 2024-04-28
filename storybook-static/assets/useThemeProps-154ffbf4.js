import {
  _ as S,
  a as Nt,
} from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";
import { r as U } from "./index-76fb7be0.js";
function Y(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ct(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = Ct(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function Zi() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = Ct(e)) && (n && (n += " "), (n += t));
  return n;
}
function ae(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function $t(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var qt =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Xt = $t(function (e) {
    return (
      qt.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function Yt(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Vt(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Zt = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (i) {
        var o;
        n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
              ? (o = n.container.firstChild)
              : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, o),
          n.tags.push(i);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Vt(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = Yt(i);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  B = "-ms-",
  Pe = "-moz-",
  v = "-webkit-",
  Ot = "comm",
  Xe = "rule",
  Ye = "decl",
  Jt = "@import",
  At = "@keyframes",
  Qt = "@layer",
  er = Math.abs,
  Ie = String.fromCharCode,
  tr = Object.assign;
function rr(e, t) {
  return I(e, 0) ^ 45
    ? (((((((t << 2) ^ I(e, 0)) << 2) ^ I(e, 1)) << 2) ^ I(e, 2)) << 2) ^
        I(e, 3)
    : 0;
}
function Tt(e) {
  return e.trim();
}
function nr(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function w(e, t, r) {
  return e.replace(t, r);
}
function Ue(e, t) {
  return e.indexOf(t);
}
function I(e, t) {
  return e.charCodeAt(t) | 0;
}
function pe(e, t, r) {
  return e.slice(t, r);
}
function G(e) {
  return e.length;
}
function Ve(e) {
  return e.length;
}
function Ce(e, t) {
  return t.push(e), e;
}
function ir(e, t) {
  return e.map(t).join("");
}
var Be = 1,
  se = 1,
  Pt = 0,
  M = 0,
  E = 0,
  ce = "";
function Me(e, t, r, n, i, o, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: o,
    line: Be,
    column: se,
    length: a,
    return: "",
  };
}
function ue(e, t) {
  return tr(Me("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function or() {
  return E;
}
function ar() {
  return (E = M > 0 ? I(ce, --M) : 0), se--, E === 10 && ((se = 1), Be--), E;
}
function L() {
  return (E = M < Pt ? I(ce, M++) : 0), se++, E === 10 && ((se = 1), Be++), E;
}
function N() {
  return I(ce, M);
}
function $e() {
  return M;
}
function xe(e, t) {
  return pe(ce, e, t);
}
function ge(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Rt(e) {
  return (Be = se = 1), (Pt = G((ce = e))), (M = 0), [];
}
function Et(e) {
  return (ce = ""), e;
}
function Oe(e) {
  return Tt(xe(M - 1, Ne(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sr(e) {
  for (; (E = N()) && E < 33; ) L();
  return ge(e) > 2 || ge(E) > 3 ? "" : " ";
}
function cr(e, t) {
  for (
    ;
    --t &&
    L() &&
    !(E < 48 || E > 102 || (E > 57 && E < 65) || (E > 70 && E < 97));

  );
  return xe(e, $e() + (t < 6 && N() == 32 && L() == 32));
}
function Ne(e) {
  for (; L(); )
    switch (E) {
      case e:
        return M;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ne(E);
        break;
      case 40:
        e === 41 && Ne(e);
        break;
      case 92:
        L();
        break;
    }
  return M;
}
function fr(e, t) {
  for (; L() && e + E !== 47 + 10; ) if (e + E === 42 + 42 && N() === 47) break;
  return "/*" + xe(t, M - 1) + "*" + Ie(e === 47 ? e : L());
}
function ur(e) {
  for (; !ge(N()); ) L();
  return xe(e, M);
}
function lr(e) {
  return Et(Ae("", null, null, null, [""], (e = Rt(e)), 0, [0], e));
}
function Ae(e, t, r, n, i, o, a, s, f) {
  for (
    var u = 0,
      m = 0,
      d = a,
      l = 0,
      p = 0,
      h = 0,
      c = 1,
      b = 1,
      g = 1,
      k = 0,
      O = "",
      C = i,
      P = o,
      _ = n,
      y = O;
    b;

  )
    switch (((h = k), (k = L()))) {
      case 40:
        if (h != 108 && I(y, d - 1) == 58) {
          Ue((y += w(Oe(k), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Oe(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += sr(h);
        break;
      case 92:
        y += cr($e() - 1, 7);
        continue;
      case 47:
        switch (N()) {
          case 42:
          case 47:
            Ce(dr(fr(L(), $e()), t, r), f);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * c:
        s[u++] = G(y) * g;
      case 125 * c:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            b = 0;
          case 59 + m:
            g == -1 && (y = w(y, /\f/g, "")),
              p > 0 &&
                G(y) - d &&
                Ce(
                  p > 32
                    ? at(y + ";", n, r, d - 1)
                    : at(w(y, " ", "") + ";", n, r, d - 2),
                  f,
                );
            break;
          case 59:
            y += ";";
          default:
            if (
              (Ce((_ = ot(y, t, r, u, m, i, s, O, (C = []), (P = []), d)), o),
              k === 123)
            )
              if (m === 0) Ae(y, t, _, _, C, o, d, s, P);
              else
                switch (l === 99 && I(y, 3) === 110 ? 100 : l) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ae(
                      e,
                      _,
                      _,
                      n && Ce(ot(e, _, _, 0, 0, i, s, O, i, (C = []), d), P),
                      i,
                      P,
                      d,
                      s,
                      n ? C : P,
                    );
                    break;
                  default:
                    Ae(y, _, _, _, [""], P, 0, s, P);
                }
        }
        (u = m = p = 0), (c = g = 1), (O = y = ""), (d = a);
        break;
      case 58:
        (d = 1 + G(y)), (p = h);
      default:
        if (c < 1) {
          if (k == 123) --c;
          else if (k == 125 && c++ == 0 && ar() == 125) continue;
        }
        switch (((y += Ie(k)), k * c)) {
          case 38:
            g = m > 0 ? 1 : ((y += "\f"), -1);
            break;
          case 44:
            (s[u++] = (G(y) - 1) * g), (g = 1);
            break;
          case 64:
            N() === 45 && (y += Oe(L())),
              (l = N()),
              (m = d = G((O = y += ur($e())))),
              k++;
            break;
          case 45:
            h === 45 && G(y) == 2 && (c = 0);
        }
    }
  return o;
}
function ot(e, t, r, n, i, o, a, s, f, u, m) {
  for (
    var d = i - 1, l = i === 0 ? o : [""], p = Ve(l), h = 0, c = 0, b = 0;
    h < n;
    ++h
  )
    for (var g = 0, k = pe(e, d + 1, (d = er((c = a[h])))), O = e; g < p; ++g)
      (O = Tt(c > 0 ? l[g] + " " + k : w(k, /&\f/g, l[g]))) && (f[b++] = O);
  return Me(e, t, r, i === 0 ? Xe : s, f, u, m);
}
function dr(e, t, r) {
  return Me(e, t, r, Ot, Ie(or()), pe(e, 2, -2), 0);
}
function at(e, t, r, n) {
  return Me(e, t, r, Ye, pe(e, 0, n), pe(e, n + 1, -1), n);
}
function ie(e, t) {
  for (var r = "", n = Ve(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function mr(e, t, r, n) {
  switch (e.type) {
    case Qt:
      if (e.children.length) break;
    case Jt:
    case Ye:
      return (e.return = e.return || e.value);
    case Ot:
      return "";
    case At:
      return (e.return = e.value + "{" + ie(e.children, n) + "}");
    case Xe:
      e.value = e.props.join(",");
  }
  return G((r = ie(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function hr(e) {
  var t = Ve(e);
  return function (r, n, i, o) {
    for (var a = "", s = 0; s < t; s++) a += e[s](r, n, i, o) || "";
    return a;
  };
}
function pr(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var gr = function (t, r, n) {
    for (
      var i = 0, o = 0;
      (i = o), (o = N()), i === 38 && o === 12 && (r[n] = 1), !ge(o);

    )
      L();
    return xe(t, M);
  },
  yr = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (ge(i)) {
        case 0:
          i === 38 && N() === 12 && (r[n] = 1), (t[n] += gr(M - 1, r, n));
          break;
        case 2:
          t[n] += Oe(i);
          break;
        case 4:
          if (i === 44) {
            (t[++n] = N() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Ie(i);
      }
    while ((i = L()));
    return t;
  },
  br = function (t, r) {
    return Et(yr(Rt(t), r));
  },
  st = new WeakMap(),
  xr = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          i = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !st.get(n)) &&
        !i
      ) {
        st.set(t, !0);
        for (
          var o = [], a = br(r, o), s = n.props, f = 0, u = 0;
          f < a.length;
          f++
        )
          for (var m = 0; m < s.length; m++, u++)
            t.props[u] = o[f] ? a[f].replace(/&\f/g, s[m]) : s[m] + " " + a[f];
      }
    }
  },
  vr = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function _t(e, t) {
  switch (rr(e, t)) {
    case 5103:
      return v + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return v + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return v + e + Pe + e + B + e + e;
    case 6828:
    case 4268:
      return v + e + B + e + e;
    case 6165:
      return v + e + B + "flex-" + e + e;
    case 5187:
      return (
        v + e + w(e, /(\w+).+(:[^]+)/, v + "box-$1$2" + B + "flex-$1$2") + e
      );
    case 5443:
      return v + e + B + "flex-item-" + w(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        v + e + B + "flex-line-pack" + w(e, /align-content|flex-|-self/, "") + e
      );
    case 5548:
      return v + e + B + w(e, "shrink", "negative") + e;
    case 5292:
      return v + e + B + w(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        v +
        "box-" +
        w(e, "-grow", "") +
        v +
        e +
        B +
        w(e, "grow", "positive") +
        e
      );
    case 4554:
      return v + w(e, /([^-])(transform)/g, "$1" + v + "$2") + e;
    case 6187:
      return (
        w(w(w(e, /(zoom-|grab)/, v + "$1"), /(image-set)/, v + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return w(e, /(image-set\([^]*)/, v + "$1$`$1");
    case 4968:
      return (
        w(
          w(e, /(.+:)(flex-)?(.*)/, v + "box-pack:$3" + B + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        v +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(e, /(.+)-inline(.+)/, v + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (G(e) - 1 - t > 6)
        switch (I(e, t + 1)) {
          case 109:
            if (I(e, t + 4) !== 45) break;
          case 102:
            return (
              w(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  v +
                  "$2-$3$1" +
                  Pe +
                  (I(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ue(e, "stretch")
              ? _t(w(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (I(e, t + 1) !== 115) break;
    case 6444:
      switch (I(e, G(e) - 3 - (~Ue(e, "!important") && 10))) {
        case 107:
          return w(e, ":", ":" + v) + e;
        case 101:
          return (
            w(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                v +
                (I(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                v +
                "$2$3$1" +
                B +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (I(e, t + 11)) {
        case 114:
          return v + e + B + w(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return v + e + B + w(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return v + e + B + w(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return v + e + B + e + e;
  }
  return e;
}
var wr = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ye:
          t.return = _t(t.value, t.length);
          break;
        case At:
          return ie([ue(t, { value: w(t.value, "@", "@" + v) })], i);
        case Xe:
          if (t.length)
            return ir(t.props, function (o) {
              switch (nr(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ie(
                    [ue(t, { props: [w(o, /:(read-\w+)/, ":" + Pe + "$1")] })],
                    i,
                  );
                case "::placeholder":
                  return ie(
                    [
                      ue(t, {
                        props: [w(o, /:(plac\w+)/, ":" + v + "input-$1")],
                      }),
                      ue(t, { props: [w(o, /:(plac\w+)/, ":" + Pe + "$1")] }),
                      ue(t, { props: [w(o, /:(plac\w+)/, B + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  Sr = [wr],
  kr = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (c) {
        var b = c.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(c), c.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || Sr,
      o = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (c) {
          for (
            var b = c.getAttribute("data-emotion").split(" "), g = 1;
            g < b.length;
            g++
          )
            o[b[g]] = !0;
          s.push(c);
        },
      );
    var f,
      u = [xr, vr];
    {
      var m,
        d = [
          mr,
          pr(function (c) {
            m.insert(c);
          }),
        ],
        l = hr(u.concat(i, d)),
        p = function (b) {
          return ie(lr(b), l);
        };
      f = function (b, g, k, O) {
        (m = k),
          p(b ? b + "{" + g.styles + "}" : g.styles),
          O && (h.inserted[g.name] = !0);
      };
    }
    var h = {
      key: r,
      sheet: new Zt({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: f,
    };
    return h.sheet.hydrate(s), h;
  },
  Cr = !0;
function $r(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (n += i + " ");
    }),
    n
  );
}
var It = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || Cr === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = r.styles);
  },
  Or = function (t, r, n) {
    It(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do t.insert(r === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function Ar(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Tr = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Pr = /[A-Z]|^ms/g,
  Rr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Bt = function (t) {
    return t.charCodeAt(1) === 45;
  },
  ct = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ge = $t(function (e) {
    return Bt(e) ? e : e.replace(Pr, "-$&").toLowerCase();
  }),
  ft = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Rr, function (n, i, o) {
            return (H = { name: i, styles: o, next: H }), i;
          });
    }
    return Tr[t] !== 1 && !Bt(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function ye(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (H = { name: r.name, styles: r.styles, next: H }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (H = { name: n.name, styles: n.styles, next: H }), (n = n.next);
        var i = r.styles + ";";
        return i;
      }
      return Er(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var o = H,
          a = r(e);
        return (H = o), ye(e, t, a);
      }
      break;
    }
  }
  if (t == null) return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function Er(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++) n += ye(e, t, r[i]) + ";";
  else
    for (var o in r) {
      var a = r[o];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (n += o + "{" + t[a] + "}")
          : ct(a) && (n += Ge(o) + ":" + ft(o, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          ct(a[s]) && (n += Ge(o) + ":" + ft(o, a[s]) + ";");
      else {
        var f = ye(e, t, a);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Ge(o) + ":" + f + ";";
            break;
          }
          default:
            n += o + "{" + f + "}";
        }
      }
    }
  return n;
}
var ut = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  H,
  _r = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = "";
    H = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((i = !1), (o += ye(n, r, a)))
      : (o += a[0]);
    for (var s = 1; s < t.length; s++) (o += ye(n, r, t[s])), i && (o += a[s]);
    ut.lastIndex = 0;
    for (var f = "", u; (u = ut.exec(o)) !== null; ) f += "-" + u[1];
    var m = Ar(o) + f;
    return { name: m, styles: o, next: H };
  },
  Mt = U.createContext(typeof HTMLElement < "u" ? kr({ key: "css" }) : null);
Mt.Provider;
var Ir = function (t) {
    return U.forwardRef(function (r, n) {
      var i = U.useContext(Mt);
      return t(r, i, n);
    });
  },
  jt = U.createContext({}),
  Br = Xt,
  Mr = function (t) {
    return t !== "theme";
  },
  lt = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Br : Mr;
  },
  dt = function (t, r, n) {
    var i;
    if (r) {
      var o = r.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (a) {
              return t.__emotion_forwardProp(a) && o(a);
            }
          : o;
    }
    return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
  },
  jr = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      It(r, n, i),
      Nt(function () {
        return Or(r, n, i);
      }),
      null
    );
  },
  Fr = function e(t, r) {
    var n = t.__emotion_real === t,
      i = (n && t.__emotion_base) || t,
      o,
      a;
    r !== void 0 && ((o = r.label), (a = r.target));
    var s = dt(t, r, n),
      f = s || lt(i),
      u = !f("as");
    return function () {
      var m = arguments,
        d =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && d.push("label:" + o + ";"),
        m[0] == null || m[0].raw === void 0)
      )
        d.push.apply(d, m);
      else {
        d.push(m[0][0]);
        for (var l = m.length, p = 1; p < l; p++) d.push(m[p], m[0][p]);
      }
      var h = Ir(function (c, b, g) {
        var k = (u && c.as) || i,
          O = "",
          C = [],
          P = c;
        if (c.theme == null) {
          P = {};
          for (var _ in c) P[_] = c[_];
          P.theme = U.useContext(jt);
        }
        typeof c.className == "string"
          ? (O = $r(b.registered, C, c.className))
          : c.className != null && (O = c.className + " ");
        var y = _r(d.concat(C), b.registered, P);
        (O += b.key + "-" + y.name), a !== void 0 && (O += " " + a);
        var Se = u && s === void 0 ? lt(k) : f,
          V = {};
        for (var x in c) (u && x === "as") || (Se(x) && (V[x] = c[x]));
        return (
          (V.className = O),
          (V.ref = g),
          U.createElement(
            U.Fragment,
            null,
            U.createElement(jr, {
              cache: b,
              serialized: y,
              isStringTag: typeof k == "string",
            }),
            U.createElement(k, V),
          )
        );
      });
      return (
        (h.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = i),
        (h.__emotion_styles = d),
        (h.__emotion_forwardProp = s),
        Object.defineProperty(h, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (h.withComponent = function (c, b) {
          return e(c, S({}, r, b, { shouldForwardProp: dt(h, b, !0) })).apply(
            void 0,
            d,
          );
        }),
        h
      );
    };
  },
  Lr = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  qe = Fr.bind();
Lr.forEach(function (e) {
  qe[e] = qe(e);
});
/**
 * @mui/styled-engine v5.15.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function zr(e, t) {
  return qe(e, t);
}
const Kr = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function X(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Ft(e) {
  if (!X(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      t[r] = Ft(e[r]);
    }),
    t
  );
}
function W(e, t, r = { clone: !0 }) {
  const n = r.clone ? S({}, e) : e;
  return (
    X(e) &&
      X(t) &&
      Object.keys(t).forEach((i) => {
        i !== "__proto__" &&
          (X(t[i]) && i in e && X(e[i])
            ? (n[i] = W(e[i], t[i], r))
            : r.clone
              ? (n[i] = X(t[i]) ? Ft(t[i]) : t[i])
              : (n[i] = t[i]));
      }),
    n
  );
}
function de(e) {
  if (typeof e != "string") throw new Error(ae(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Lt(e, t) {
  const r = S({}, t);
  return (
    Object.keys(e).forEach((n) => {
      if (n.toString().match(/^(components|slots)$/)) r[n] = S({}, e[n], r[n]);
      else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
        const i = e[n] || {},
          o = t[n];
        (r[n] = {}),
          !o || !Object.keys(o)
            ? (r[n] = i)
            : !i || !Object.keys(i)
              ? (r[n] = o)
              : ((r[n] = S({}, o)),
                Object.keys(i).forEach((a) => {
                  r[n][a] = Lt(i[a], o[a]);
                }));
      } else r[n] === void 0 && (r[n] = e[n]);
    }),
    r
  );
}
function Ji(e, t, r = void 0) {
  const n = {};
  return (
    Object.keys(e).forEach((i) => {
      n[i] = e[i]
        .reduce((o, a) => {
          if (a) {
            const s = t(a);
            s !== "" && o.push(s), r && r[a] && o.push(r[a]);
          }
          return o;
        }, [])
        .join(" ");
    }),
    n
  );
}
const mt = (e) => e,
  Wr = () => {
    let e = mt;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = mt;
      },
    };
  },
  Dr = Wr(),
  Gr = Dr,
  Hr = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function Ur(e, t, r = "Mui") {
  const n = Hr[t];
  return n ? `${r}-${n}` : `${Gr.generate(e)}-${t}`;
}
function Qi(e, t, r = "Mui") {
  const n = {};
  return (
    t.forEach((i) => {
      n[i] = Ur(e, i, r);
    }),
    n
  );
}
const Nr = ["values", "unit", "step"],
  qr = (e) => {
    const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
    return (
      t.sort((r, n) => r.val - n.val),
      t.reduce((r, n) => S({}, r, { [n.key]: n.val }), {})
    );
  };
function Xr(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = "px",
      step: n = 5,
    } = e,
    i = Y(e, Nr),
    o = qr(t),
    a = Object.keys(o);
  function s(l) {
    return `@media (min-width:${typeof t[l] == "number" ? t[l] : l}${r})`;
  }
  function f(l) {
    return `@media (max-width:${(typeof t[l] == "number" ? t[l] : l) - n / 100}${r})`;
  }
  function u(l, p) {
    const h = a.indexOf(p);
    return `@media (min-width:${typeof t[l] == "number" ? t[l] : l}${r}) and (max-width:${(h !== -1 && typeof t[a[h]] == "number" ? t[a[h]] : p) - n / 100}${r})`;
  }
  function m(l) {
    return a.indexOf(l) + 1 < a.length ? u(l, a[a.indexOf(l) + 1]) : s(l);
  }
  function d(l) {
    const p = a.indexOf(l);
    return p === 0
      ? s(a[1])
      : p === a.length - 1
        ? f(a[p])
        : u(l, a[a.indexOf(l) + 1]).replace("@media", "@media not all and");
  }
  return S(
    {
      keys: a,
      values: o,
      up: s,
      down: f,
      between: u,
      only: m,
      not: d,
      unit: r,
    },
    i,
  );
}
const Yr = { borderRadius: 4 },
  Vr = Yr;
function me(e, t) {
  return t ? W(e, t, { clone: !1 }) : e;
}
const Ze = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  ht = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Ze[e]}px)`,
  };
function q(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const o = n.breakpoints || ht;
    return t.reduce((a, s, f) => ((a[o.up(o.keys[f])] = r(t[f])), a), {});
  }
  if (typeof t == "object") {
    const o = n.breakpoints || ht;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(o.values || Ze).indexOf(s) !== -1) {
        const f = o.up(s);
        a[f] = r(t[s], s);
      } else {
        const f = s;
        a[f] = t[f];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Zr(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((n, i) => {
          const o = e.up(i);
          return (n[o] = {}), n;
        }, {})) || {}
  );
}
function Jr(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Qr(e, t) {
  if (typeof e != "object") return {};
  const r = {},
    n = Object.keys(t);
  return (
    Array.isArray(e)
      ? n.forEach((i, o) => {
          o < e.length && (r[i] = !0);
        })
      : n.forEach((i) => {
          e[i] != null && (r[i] = !0);
        }),
    r
  );
}
function eo({ values: e, breakpoints: t, base: r }) {
  const n = r || Qr(e, t),
    i = Object.keys(n);
  if (i.length === 0) return e;
  let o;
  return i.reduce(
    (a, s, f) => (
      Array.isArray(e)
        ? ((a[s] = e[f] != null ? e[f] : e[o]), (o = f))
        : typeof e == "object"
          ? ((a[s] = e[s] != null ? e[s] : e[o]), (o = s))
          : (a[s] = e),
      a
    ),
    {},
  );
}
function je(e, t, r = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`
      .split(".")
      .reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (n != null) return n;
  }
  return t.split(".").reduce((n, i) => (n && n[i] != null ? n[i] : null), e);
}
function Re(e, t, r, n = r) {
  let i;
  return (
    typeof e == "function"
      ? (i = e(r))
      : Array.isArray(e)
        ? (i = e[r] || n)
        : (i = je(e, r) || n),
    t && (i = t(i, n, e)),
    i
  );
}
function R(e) {
  const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: i } = e,
    o = (a) => {
      if (a[t] == null) return null;
      const s = a[t],
        f = a.theme,
        u = je(f, n) || {};
      return q(a, s, (d) => {
        let l = Re(u, i, d);
        return (
          d === l &&
            typeof d == "string" &&
            (l = Re(u, i, `${t}${d === "default" ? "" : de(d)}`, d)),
          r === !1 ? l : { [r]: l }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function en(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const tn = { m: "margin", p: "padding" },
  rn = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  pt = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  nn = en((e) => {
    if (e.length > 2)
      if (pt[e]) e = pt[e];
      else return [e];
    const [t, r] = e.split(""),
      n = tn[t],
      i = rn[r] || "";
    return Array.isArray(i) ? i.map((o) => n + o) : [n + i];
  }),
  Je = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Qe = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Je, ...Qe];
function ve(e, t, r, n) {
  var i;
  const o = (i = je(e, t, !1)) != null ? i : r;
  return typeof o == "number"
    ? (a) => (typeof a == "string" ? a : o * a)
    : Array.isArray(o)
      ? (a) => (typeof a == "string" ? a : o[a])
      : typeof o == "function"
        ? o
        : () => {};
}
function zt(e) {
  return ve(e, "spacing", 8);
}
function we(e, t) {
  if (typeof t == "string" || t == null) return t;
  const r = Math.abs(t),
    n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function on(e, t) {
  return (r) => e.reduce((n, i) => ((n[i] = we(t, r)), n), {});
}
function an(e, t, r, n) {
  if (t.indexOf(r) === -1) return null;
  const i = nn(r),
    o = on(i, n),
    a = e[r];
  return q(e, a, o);
}
function Kt(e, t) {
  const r = zt(e.theme);
  return Object.keys(e)
    .map((n) => an(e, t, n, r))
    .reduce(me, {});
}
function A(e) {
  return Kt(e, Je);
}
A.propTypes = {};
A.filterProps = Je;
function T(e) {
  return Kt(e, Qe);
}
T.propTypes = {};
T.filterProps = Qe;
function sn(e = 8) {
  if (e.mui) return e;
  const t = zt({ spacing: e }),
    r = (...n) =>
      (n.length === 0 ? [1] : n)
        .map((o) => {
          const a = t(o);
          return typeof a == "number" ? `${a}px` : a;
        })
        .join(" ");
  return (r.mui = !0), r;
}
function Fe(...e) {
  const t = e.reduce(
      (n, i) => (
        i.filterProps.forEach((o) => {
          n[o] = i;
        }),
        n
      ),
      {},
    ),
    r = (n) => Object.keys(n).reduce((i, o) => (t[o] ? me(i, t[o](n)) : i), {});
  return (
    (r.propTypes = {}),
    (r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), [])),
    r
  );
}
function z(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function K(e, t) {
  return R({ prop: e, themeKey: "borders", transform: t });
}
const cn = K("border", z),
  fn = K("borderTop", z),
  un = K("borderRight", z),
  ln = K("borderBottom", z),
  dn = K("borderLeft", z),
  mn = K("borderColor"),
  hn = K("borderTopColor"),
  pn = K("borderRightColor"),
  gn = K("borderBottomColor"),
  yn = K("borderLeftColor"),
  bn = K("outline", z),
  xn = K("outlineColor"),
  Le = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ve(e.theme, "shape.borderRadius", 4),
        r = (n) => ({ borderRadius: we(t, n) });
      return q(e, e.borderRadius, r);
    }
    return null;
  };
Le.propTypes = {};
Le.filterProps = ["borderRadius"];
Fe(cn, fn, un, ln, dn, mn, hn, pn, gn, yn, Le, bn, xn);
const ze = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ve(e.theme, "spacing", 8),
      r = (n) => ({ gap: we(t, n) });
    return q(e, e.gap, r);
  }
  return null;
};
ze.propTypes = {};
ze.filterProps = ["gap"];
const Ke = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ve(e.theme, "spacing", 8),
      r = (n) => ({ columnGap: we(t, n) });
    return q(e, e.columnGap, r);
  }
  return null;
};
Ke.propTypes = {};
Ke.filterProps = ["columnGap"];
const We = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ve(e.theme, "spacing", 8),
      r = (n) => ({ rowGap: we(t, n) });
    return q(e, e.rowGap, r);
  }
  return null;
};
We.propTypes = {};
We.filterProps = ["rowGap"];
const vn = R({ prop: "gridColumn" }),
  wn = R({ prop: "gridRow" }),
  Sn = R({ prop: "gridAutoFlow" }),
  kn = R({ prop: "gridAutoColumns" }),
  Cn = R({ prop: "gridAutoRows" }),
  $n = R({ prop: "gridTemplateColumns" }),
  On = R({ prop: "gridTemplateRows" }),
  An = R({ prop: "gridTemplateAreas" }),
  Tn = R({ prop: "gridArea" });
Fe(ze, Ke, We, vn, wn, Sn, kn, Cn, $n, On, An, Tn);
function oe(e, t) {
  return t === "grey" ? t : e;
}
const Pn = R({ prop: "color", themeKey: "palette", transform: oe }),
  Rn = R({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: oe,
  }),
  En = R({ prop: "backgroundColor", themeKey: "palette", transform: oe });
Fe(Pn, Rn, En);
function F(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const _n = R({ prop: "width", transform: F }),
  et = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var n, i;
        const o =
          ((n = e.theme) == null ||
          (n = n.breakpoints) == null ||
          (n = n.values) == null
            ? void 0
            : n[r]) || Ze[r];
        return o
          ? ((i = e.theme) == null || (i = i.breakpoints) == null
              ? void 0
              : i.unit) !== "px"
            ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: F(r) };
      };
      return q(e, e.maxWidth, t);
    }
    return null;
  };
et.filterProps = ["maxWidth"];
const In = R({ prop: "minWidth", transform: F }),
  Bn = R({ prop: "height", transform: F }),
  Mn = R({ prop: "maxHeight", transform: F }),
  jn = R({ prop: "minHeight", transform: F });
R({ prop: "size", cssProperty: "width", transform: F });
R({ prop: "size", cssProperty: "height", transform: F });
const Fn = R({ prop: "boxSizing" });
Fe(_n, et, In, Bn, Mn, jn, Fn);
const Ln = {
    border: { themeKey: "borders", transform: z },
    borderTop: { themeKey: "borders", transform: z },
    borderRight: { themeKey: "borders", transform: z },
    borderBottom: { themeKey: "borders", transform: z },
    borderLeft: { themeKey: "borders", transform: z },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: z },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Le },
    color: { themeKey: "palette", transform: oe },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: oe,
    },
    backgroundColor: { themeKey: "palette", transform: oe },
    p: { style: T },
    pt: { style: T },
    pr: { style: T },
    pb: { style: T },
    pl: { style: T },
    px: { style: T },
    py: { style: T },
    padding: { style: T },
    paddingTop: { style: T },
    paddingRight: { style: T },
    paddingBottom: { style: T },
    paddingLeft: { style: T },
    paddingX: { style: T },
    paddingY: { style: T },
    paddingInline: { style: T },
    paddingInlineStart: { style: T },
    paddingInlineEnd: { style: T },
    paddingBlock: { style: T },
    paddingBlockStart: { style: T },
    paddingBlockEnd: { style: T },
    m: { style: A },
    mt: { style: A },
    mr: { style: A },
    mb: { style: A },
    ml: { style: A },
    mx: { style: A },
    my: { style: A },
    margin: { style: A },
    marginTop: { style: A },
    marginRight: { style: A },
    marginBottom: { style: A },
    marginLeft: { style: A },
    marginX: { style: A },
    marginY: { style: A },
    marginInline: { style: A },
    marginInlineStart: { style: A },
    marginInlineEnd: { style: A },
    marginBlock: { style: A },
    marginBlockStart: { style: A },
    marginBlockEnd: { style: A },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: ze },
    rowGap: { style: We },
    columnGap: { style: Ke },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: F },
    maxWidth: { style: et },
    minWidth: { transform: F },
    height: { transform: F },
    maxHeight: { transform: F },
    minHeight: { transform: F },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  tt = Ln;
function zn(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []),
    r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Kn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wn() {
  function e(r, n, i, o) {
    const a = { [r]: n, theme: i },
      s = o[r];
    if (!s) return { [r]: n };
    const { cssProperty: f = r, themeKey: u, transform: m, style: d } = s;
    if (n == null) return null;
    if (u === "typography" && n === "inherit") return { [r]: n };
    const l = je(i, u) || {};
    return d
      ? d(a)
      : q(a, n, (h) => {
          let c = Re(l, m, h);
          return (
            h === c &&
              typeof h == "string" &&
              (c = Re(l, m, `${r}${h === "default" ? "" : de(h)}`, h)),
            f === !1 ? c : { [f]: c }
          );
        });
  }
  function t(r) {
    var n;
    const { sx: i, theme: o = {} } = r || {};
    if (!i) return null;
    const a = (n = o.unstable_sxConfig) != null ? n : tt;
    function s(f) {
      let u = f;
      if (typeof f == "function") u = f(o);
      else if (typeof f != "object") return f;
      if (!u) return null;
      const m = Zr(o.breakpoints),
        d = Object.keys(m);
      let l = m;
      return (
        Object.keys(u).forEach((p) => {
          const h = Kn(u[p], o);
          if (h != null)
            if (typeof h == "object")
              if (a[p]) l = me(l, e(p, h, o, a));
              else {
                const c = q({ theme: o }, h, (b) => ({ [p]: b }));
                zn(c, h) ? (l[p] = t({ sx: h, theme: o })) : (l = me(l, c));
              }
            else l = me(l, e(p, h, o, a));
        }),
        Jr(d, l)
      );
    }
    return Array.isArray(i) ? i.map(s) : s(i);
  }
  return t;
}
const Wt = Wn();
Wt.filterProps = ["sx"];
const rt = Wt,
  Dn = ["breakpoints", "palette", "spacing", "shape"];
function nt(e = {}, ...t) {
  const { breakpoints: r = {}, palette: n = {}, spacing: i, shape: o = {} } = e,
    a = Y(e, Dn),
    s = Xr(r),
    f = sn(i);
  let u = W(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: S({ mode: "light" }, n),
      spacing: f,
      shape: S({}, Vr, o),
    },
    a,
  );
  return (
    (u = t.reduce((m, d) => W(m, d), u)),
    (u.unstable_sxConfig = S({}, tt, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return rt({ sx: d, theme: this });
    }),
    u
  );
}
function Gn(e) {
  return Object.keys(e).length === 0;
}
function Hn(e = null) {
  const t = U.useContext(jt);
  return !t || Gn(t) ? e : t;
}
const Un = nt();
function Nn(e = Un) {
  return Hn(e);
}
const qn = ["variant"];
function gt(e) {
  return e.length === 0;
}
function Dt(e) {
  const { variant: t } = e,
    r = Y(e, qn);
  let n = t || "";
  return (
    Object.keys(r)
      .sort()
      .forEach((i) => {
        i === "color"
          ? (n += gt(n) ? e[i] : de(e[i]))
          : (n += `${gt(n) ? i : de(i)}${de(e[i].toString())}`);
      }),
    n
  );
}
const Xn = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function Yn(e) {
  return Object.keys(e).length === 0;
}
function Vn(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const Zn = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  Ee = (e) => {
    let t = 0;
    const r = {};
    return (
      e &&
        e.forEach((n) => {
          let i = "";
          typeof n.props == "function"
            ? ((i = `callback${t}`), (t += 1))
            : (i = Dt(n.props)),
            (r[i] = n.style);
        }),
      r
    );
  },
  Jn = (e, t) => {
    let r = [];
    return (
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (r = t.components[e].variants),
      Ee(r)
    );
  },
  _e = (e, t, r) => {
    const { ownerState: n = {} } = e,
      i = [];
    let o = 0;
    return (
      r &&
        r.forEach((a) => {
          let s = !0;
          if (typeof a.props == "function") {
            const f = S({}, e, n);
            s = a.props(f);
          } else
            Object.keys(a.props).forEach((f) => {
              n[f] !== a.props[f] && e[f] !== a.props[f] && (s = !1);
            });
          s &&
            (typeof a.props == "function"
              ? i.push(t[`callback${o}`])
              : i.push(t[Dt(a.props)])),
            typeof a.props == "function" && (o += 1);
        }),
      i
    );
  },
  Qn = (e, t, r, n) => {
    var i;
    const o =
      r == null || (i = r.components) == null || (i = i[n]) == null
        ? void 0
        : i.variants;
    return _e(e, t, o);
  };
function he(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ei = nt(),
  ti = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Te({ defaultTheme: e, theme: t, themeId: r }) {
  return Yn(t) ? e : t[r] || t;
}
function ri(e) {
  return e ? (t, r) => r[e] : null;
}
const yt = ({ styledArg: e, props: t, defaultTheme: r, themeId: n }) => {
  const i = e(
    S({}, t, { theme: Te(S({}, t, { defaultTheme: r, themeId: n })) }),
  );
  let o;
  if ((i && i.variants && ((o = i.variants), delete i.variants), o)) {
    const a = _e(t, Ee(o), o);
    return [i, ...a];
  }
  return i;
};
function ni(e = {}) {
  const {
      themeId: t,
      defaultTheme: r = ei,
      rootShouldForwardProp: n = he,
      slotShouldForwardProp: i = he,
    } = e,
    o = (a) =>
      rt(S({}, a, { theme: Te(S({}, a, { defaultTheme: r, themeId: t })) }));
  return (
    (o.__mui_systemSx = !0),
    (a, s = {}) => {
      Kr(a, (C) => C.filter((P) => !(P != null && P.__mui_systemSx)));
      const {
          name: f,
          slot: u,
          skipVariantsResolver: m,
          skipSx: d,
          overridesResolver: l = ri(ti(u)),
        } = s,
        p = Y(s, Xn),
        h = m !== void 0 ? m : (u && u !== "Root" && u !== "root") || !1,
        c = d || !1;
      let b,
        g = he;
      u === "Root" || u === "root"
        ? (g = n)
        : u
          ? (g = i)
          : Vn(a) && (g = void 0);
      const k = zr(a, S({ shouldForwardProp: g, label: b }, p)),
        O = (C, ...P) => {
          const _ = P
            ? P.map((x) => {
                if (typeof x == "function" && x.__emotion_real !== x)
                  return (j) =>
                    yt({ styledArg: x, props: j, defaultTheme: r, themeId: t });
                if (X(x)) {
                  let j = x,
                    D;
                  return (
                    x &&
                      x.variants &&
                      ((D = x.variants),
                      delete j.variants,
                      (j = (fe) => {
                        let Z = x;
                        return (
                          _e(fe, Ee(D), D).forEach((Ut) => {
                            Z = W(Z, Ut);
                          }),
                          Z
                        );
                      })),
                    j
                  );
                }
                return x;
              })
            : [];
          let y = C;
          if (X(C)) {
            let x;
            C &&
              C.variants &&
              ((x = C.variants),
              delete y.variants,
              (y = (j) => {
                let D = C;
                return (
                  _e(j, Ee(x), x).forEach((Z) => {
                    D = W(D, Z);
                  }),
                  D
                );
              }));
          } else
            typeof C == "function" &&
              C.__emotion_real !== C &&
              (y = (x) =>
                yt({ styledArg: C, props: x, defaultTheme: r, themeId: t }));
          f &&
            l &&
            _.push((x) => {
              const j = Te(S({}, x, { defaultTheme: r, themeId: t })),
                D = Zn(f, j);
              if (D) {
                const fe = {};
                return (
                  Object.entries(D).forEach(([Z, ke]) => {
                    fe[Z] =
                      typeof ke == "function" ? ke(S({}, x, { theme: j })) : ke;
                  }),
                  l(x, fe)
                );
              }
              return null;
            }),
            f &&
              !h &&
              _.push((x) => {
                const j = Te(S({}, x, { defaultTheme: r, themeId: t }));
                return Qn(x, Jn(f, j), j, f);
              }),
            c || _.push(o);
          const Se = _.length - P.length;
          if (Array.isArray(C) && Se > 0) {
            const x = new Array(Se).fill("");
            (y = [...C, ...x]), (y.raw = [...C.raw, ...x]);
          }
          const V = k(y, ..._);
          return a.muiName && (V.muiName = a.muiName), V;
        };
      return k.withConfig && (O.withConfig = k.withConfig), O;
    }
  );
}
function ii(e) {
  const { theme: t, name: r, props: n } = e;
  return !t ||
    !t.components ||
    !t.components[r] ||
    !t.components[r].defaultProps
    ? n
    : Lt(t.components[r].defaultProps, n);
}
function oi({ props: e, name: t, defaultTheme: r, themeId: n }) {
  let i = Nn(r);
  return n && (i = i[n] || i), ii({ theme: i, name: t, props: e });
}
function it(e, t = 0, r = 1) {
  return Math.min(Math.max(t, e), r);
}
function ai(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return (
    r && r[0].length === 1 && (r = r.map((n) => n + n)),
    r
      ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => (i < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3)).join(", ")})`
      : ""
  );
}
function J(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return J(ai(e));
  const t = e.indexOf("("),
    r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(ae(9, e));
  let n = e.substring(t + 1, e.length - 1),
    i;
  if (r === "color") {
    if (
      ((n = n.split(" ")),
      (i = n.shift()),
      n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        i,
      ) === -1)
    )
      throw new Error(ae(10, i));
  } else n = n.split(",");
  return (
    (n = n.map((o) => parseFloat(o))), { type: r, values: n, colorSpace: i }
  );
}
function De(e) {
  const { type: t, colorSpace: r } = e;
  let { values: n } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (n = n.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.indexOf("hsl") !== -1 && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
    t.indexOf("color") !== -1
      ? (n = `${r} ${n.join(" ")}`)
      : (n = `${n.join(", ")}`),
    `${t}(${n})`
  );
}
function si(e) {
  e = J(e);
  const { values: t } = e,
    r = t[0],
    n = t[1] / 100,
    i = t[2] / 100,
    o = n * Math.min(i, 1 - i),
    a = (u, m = (u + r / 30) % 12) =>
      i - o * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let s = "rgb";
  const f = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), f.push(t[3])), De({ type: s, values: f })
  );
}
function bt(e) {
  e = J(e);
  let t = e.type === "hsl" || e.type === "hsla" ? J(si(e)).values : e.values;
  return (
    (t = t.map(
      (r) => (
        e.type !== "color" && (r /= 255),
        r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function ci(e, t) {
  const r = bt(e),
    n = bt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function to(e, t) {
  return (
    (e = J(e)),
    (t = it(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    De(e)
  );
}
function fi(e, t) {
  if (((e = J(e)), (t = it(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
  return De(e);
}
function ui(e, t) {
  if (((e = J(e)), (t = it(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
  return De(e);
}
function li(e, t) {
  return S(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t,
  );
}
const di = { black: "#000", white: "#fff" },
  be = di,
  mi = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  hi = mi,
  pi = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Q = pi,
  gi = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  ee = gi,
  yi = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  le = yi,
  bi = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  te = bi,
  xi = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  re = xi,
  vi = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  ne = vi,
  wi = ["mode", "contrastThreshold", "tonalOffset"],
  xt = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: be.white, default: be.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  He = {
    text: {
      primary: be.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: be.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function vt(e, t, r, n) {
  const i = n.light || n,
    o = n.dark || n * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? (e[t] = e[r])
      : t === "light"
        ? (e.light = ui(e.main, i))
        : t === "dark" && (e.dark = fi(e.main, o)));
}
function Si(e = "light") {
  return e === "dark"
    ? { main: te[200], light: te[50], dark: te[400] }
    : { main: te[700], light: te[400], dark: te[800] };
}
function ki(e = "light") {
  return e === "dark"
    ? { main: Q[200], light: Q[50], dark: Q[400] }
    : { main: Q[500], light: Q[300], dark: Q[700] };
}
function Ci(e = "light") {
  return e === "dark"
    ? { main: ee[500], light: ee[300], dark: ee[700] }
    : { main: ee[700], light: ee[400], dark: ee[800] };
}
function $i(e = "light") {
  return e === "dark"
    ? { main: re[400], light: re[300], dark: re[700] }
    : { main: re[700], light: re[500], dark: re[900] };
}
function Oi(e = "light") {
  return e === "dark"
    ? { main: ne[400], light: ne[300], dark: ne[700] }
    : { main: ne[800], light: ne[500], dark: ne[900] };
}
function Ai(e = "light") {
  return e === "dark"
    ? { main: le[400], light: le[300], dark: le[700] }
    : { main: "#ed6c02", light: le[500], dark: le[900] };
}
function Ti(e) {
  const {
      mode: t = "light",
      contrastThreshold: r = 3,
      tonalOffset: n = 0.2,
    } = e,
    i = Y(e, wi),
    o = e.primary || Si(t),
    a = e.secondary || ki(t),
    s = e.error || Ci(t),
    f = e.info || $i(t),
    u = e.success || Oi(t),
    m = e.warning || Ai(t);
  function d(c) {
    return ci(c, He.text.primary) >= r ? He.text.primary : xt.text.primary;
  }
  const l = ({
      color: c,
      name: b,
      mainShade: g = 500,
      lightShade: k = 300,
      darkShade: O = 700,
    }) => {
      if (
        ((c = S({}, c)),
        !c.main && c[g] && (c.main = c[g]),
        !c.hasOwnProperty("main"))
      )
        throw new Error(ae(11, b ? ` (${b})` : "", g));
      if (typeof c.main != "string")
        throw new Error(ae(12, b ? ` (${b})` : "", JSON.stringify(c.main)));
      return (
        vt(c, "light", k, n),
        vt(c, "dark", O, n),
        c.contrastText || (c.contrastText = d(c.main)),
        c
      );
    },
    p = { dark: He, light: xt };
  return W(
    S(
      {
        common: S({}, be),
        mode: t,
        primary: l({ color: o, name: "primary" }),
        secondary: l({
          color: a,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: l({ color: s, name: "error" }),
        warning: l({ color: m, name: "warning" }),
        info: l({ color: f, name: "info" }),
        success: l({ color: u, name: "success" }),
        grey: hi,
        contrastThreshold: r,
        getContrastText: d,
        augmentColor: l,
        tonalOffset: n,
      },
      p[t],
    ),
    i,
  );
}
const Pi = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function Ri(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wt = { textTransform: "uppercase" },
  St = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ei(e, t) {
  const r = typeof t == "function" ? t(e) : t,
    {
      fontFamily: n = St,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: f = 700,
      htmlFontSize: u = 16,
      allVariants: m,
      pxToRem: d,
    } = r,
    l = Y(r, Pi),
    p = i / 14,
    h = d || ((g) => `${(g / u) * p}rem`),
    c = (g, k, O, C, P) =>
      S(
        { fontFamily: n, fontWeight: g, fontSize: h(k), lineHeight: O },
        n === St ? { letterSpacing: `${Ri(C / k)}em` } : {},
        P,
        m,
      ),
    b = {
      h1: c(o, 96, 1.167, -1.5),
      h2: c(o, 60, 1.2, -0.5),
      h3: c(a, 48, 1.167, 0),
      h4: c(a, 34, 1.235, 0.25),
      h5: c(a, 24, 1.334, 0),
      h6: c(s, 20, 1.6, 0.15),
      subtitle1: c(a, 16, 1.75, 0.15),
      subtitle2: c(s, 14, 1.57, 0.1),
      body1: c(a, 16, 1.5, 0.15),
      body2: c(a, 14, 1.43, 0.15),
      button: c(s, 14, 1.75, 0.4, wt),
      caption: c(a, 12, 1.66, 0.4),
      overline: c(a, 12, 2.66, 1, wt),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return W(
    S(
      {
        htmlFontSize: u,
        pxToRem: h,
        fontFamily: n,
        fontSize: i,
        fontWeightLight: o,
        fontWeightRegular: a,
        fontWeightMedium: s,
        fontWeightBold: f,
      },
      b,
    ),
    l,
    { clone: !1 },
  );
}
const _i = 0.2,
  Ii = 0.14,
  Bi = 0.12;
function $(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${_i})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ii})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Bi})`,
  ].join(",");
}
const Mi = [
    "none",
    $(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    $(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    $(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    $(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    $(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    $(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    $(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    $(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    $(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    $(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    $(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    $(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    $(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    $(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    $(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    $(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    $(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    $(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    $(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    $(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    $(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    $(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    $(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    $(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  ji = Mi,
  Fi = ["duration", "easing", "delay"],
  Li = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  zi = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function kt(e) {
  return `${Math.round(e)}ms`;
}
function Ki(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Wi(e) {
  const t = S({}, Li, e.easing),
    r = S({}, zi, e.duration);
  return S(
    {
      getAutoHeightDuration: Ki,
      create: (i = ["all"], o = {}) => {
        const {
          duration: a = r.standard,
          easing: s = t.easeInOut,
          delay: f = 0,
        } = o;
        return (
          Y(o, Fi),
          (Array.isArray(i) ? i : [i])
            .map(
              (u) =>
                `${u} ${typeof a == "string" ? a : kt(a)} ${s} ${typeof f == "string" ? f : kt(f)}`,
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: r },
  );
}
const Di = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Gi = Di,
  Hi = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Ui(e = {}, ...t) {
  const {
      mixins: r = {},
      palette: n = {},
      transitions: i = {},
      typography: o = {},
    } = e,
    a = Y(e, Hi);
  if (e.vars) throw new Error(ae(18));
  const s = Ti(n),
    f = nt(e);
  let u = W(f, {
    mixins: li(f.breakpoints, r),
    palette: s,
    shadows: ji.slice(),
    typography: Ei(s, o),
    transitions: Wi(i),
    zIndex: S({}, Gi),
  });
  return (
    (u = W(u, a)),
    (u = t.reduce((m, d) => W(m, d), u)),
    (u.unstable_sxConfig = S({}, tt, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return rt({ sx: d, theme: this });
    }),
    u
  );
}
const Ni = Ui(),
  Gt = Ni,
  Ht = "$$material",
  qi = (e) => he(e) && e !== "classes",
  ro = he,
  Xi = ni({ themeId: Ht, defaultTheme: Gt, rootShouldForwardProp: qi }),
  no = Xi;
function io({ props: e, name: t }) {
  return oi({ props: e, name: t, defaultTheme: Gt, themeId: Ht });
}
export {
  ae as A,
  W as B,
  Gr as C,
  ro as D,
  Ht as T,
  Y as _,
  Qi as a,
  to as b,
  Zi as c,
  Ji as d,
  tt as e,
  de as f,
  Ur as g,
  Lt as h,
  X as i,
  ni as j,
  nt as k,
  oi as l,
  eo as m,
  q as n,
  zr as o,
  rt as p,
  Nn as q,
  qi as r,
  no as s,
  Ui as t,
  io as u,
  _r as v,
  Ir as w,
  jt as x,
  Or as y,
  Gt as z,
};
