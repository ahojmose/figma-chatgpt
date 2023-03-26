(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:process.env>
  var define_process_env_default;
  var init_define_process_env = __esm({
    "<define:process.env>"() {
      define_process_env_default = { OPENAI_API_KEY: "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" };
    }
  });

  // node_modules/preact/dist/preact.module.js
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function v(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, i3) {
    var t3, r3, o3, f3 = {};
    for (o3 in u3)
      "key" == o3 ? t3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : f3[o3] = u3[o3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (o3 in l3.defaultProps)
        void 0 === f3[o3] && (f3[o3] = l3.defaultProps[o3]);
    return p(l3, f3, t3, r3, null);
  }
  function p(n2, i3, t3, r3, o3) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o3 ? ++u : o3 };
    return null == o3 && null != l.vnode && l.vnode(f3), f3;
  }
  function _(n2) {
    return n2.children;
  }
  function k(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function b(n2, l3) {
    if (null == l3)
      return n2.__ ? b(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? b(n2) : null;
  }
  function g(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return g(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
  }
  function w() {
    var n2, l3, u3, i3, r3, o3, e3, c3;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l3 = t.length, i3 = void 0, r3 = void 0, e3 = (o3 = (u3 = n2).__v).__e, (c3 = u3.__P) && (i3 = [], (r3 = h({}, o3)).__v = o3.__v + 1, L(c3, o3, r3, u3.__n, void 0 !== c3.ownerSVGElement, null != o3.__h ? [e3] : null, i3, null == e3 ? b(o3) : e3, o3.__h), M(i3, o3), o3.__e != e3 && g(o3)), t.length > l3 && t.sort(f));
    w.__r = 0;
  }
  function x(n2, l3, u3, i3, t3, r3, o3, f3, e3, a3) {
    var h3, v3, y2, d2, k3, g3, m3, w3 = i3 && i3.__k || s, x2 = w3.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (d2 = u3.__k[h3] = null == (d2 = l3[h3]) || "boolean" == typeof d2 || "function" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p(null, d2, null, null, d2) : Array.isArray(d2) ? p(_, { children: d2 }, null, null, null) : d2.__b > 0 ? p(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
        if (d2.__ = u3, d2.__b = u3.__b + 1, null === (y2 = w3[h3]) || y2 && d2.key == y2.key && d2.type === y2.type)
          w3[h3] = void 0;
        else
          for (v3 = 0; v3 < x2; v3++) {
            if ((y2 = w3[v3]) && d2.key == y2.key && d2.type === y2.type) {
              w3[v3] = void 0;
              break;
            }
            y2 = null;
          }
        L(n2, d2, y2 = y2 || c, t3, r3, o3, f3, e3, a3), k3 = d2.__e, (v3 = d2.ref) && y2.ref != v3 && (m3 || (m3 = []), y2.ref && m3.push(y2.ref, null, d2), m3.push(v3, d2.__c || k3, d2)), null != k3 ? (null == g3 && (g3 = k3), "function" == typeof d2.type && d2.__k === y2.__k ? d2.__d = e3 = A(d2, e3, n2) : e3 = C(n2, d2, y2, w3, k3, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y2.__e == e3 && e3.parentNode != n2 && (e3 = b(y2));
      }
    for (u3.__e = g3, h3 = x2; h3--; )
      null != w3[h3] && ("function" == typeof u3.type && null != w3[h3].__e && w3[h3].__e == u3.__d && (u3.__d = $(i3).nextSibling), S(w3[h3], w3[h3]));
    if (m3)
      for (h3 = 0; h3 < m3.length; h3++)
        O(m3[h3], m3[++h3], m3[++h3]);
  }
  function A(n2, l3, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? A(i3, l3, u3) : C(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function P(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
      P(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function C(n2, l3, u3, i3, t3, r3) {
    var o3, f3, e3;
    if (void 0 !== l3.__d)
      o3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != r3 || null == t3.parentNode)
      n:
        if (null == r3 || r3.parentNode !== n2)
          n2.appendChild(t3), o3 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o3 = r3;
        }
    return void 0 !== o3 ? o3 : t3.nextSibling;
  }
  function $(n2) {
    var l3, u3, i3;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
        if ((u3 = n2.__k[l3]) && (i3 = $(u3)))
          return i3;
    }
    return null;
  }
  function H(n2, l3, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      "children" === r3 || "key" === r3 || r3 in l3 || T(n2, r3, null, u3[r3], i3);
    for (r3 in l3)
      t3 && "function" != typeof l3[r3] || "children" === r3 || "key" === r3 || "value" === r3 || "checked" === r3 || u3[r3] === l3[r3] || T(n2, r3, l3[r3], u3[r3], i3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, i3, t3) {
    var r3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? z : j, r3) : n2.removeEventListener(l3, r3 ? z : j, r3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, i3, t3, r3, o3, f3, e3, c3) {
    var s3, a3, v3, y2, p2, d2, b3, g3, m3, w3, A2, P2, C2, $2, H2, I2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if ("function" == typeof I2) {
          if (g3 = u3.props, m3 = (s3 = I2.contextType) && t3[s3.__c], w3 = s3 ? m3 ? m3.props.value : s3.__ : t3, i3.__c ? b3 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in I2 && I2.prototype.render ? u3.__c = a3 = new I2(g3, w3) : (u3.__c = a3 = new k(g3, w3), a3.constructor = I2, a3.render = q), m3 && m3.sub(a3), a3.props = g3, a3.state || (a3.state = {}), a3.context = w3, a3.__n = t3, v3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != I2.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, I2.getDerivedStateFromProps(g3, a3.__s))), y2 = a3.props, p2 = a3.state, a3.__v = u3, v3)
            null == I2.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && g3 !== y2 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(g3, w3), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(g3, a3.__s, w3) || u3.__v === i3.__v) {
              for (u3.__v !== i3.__v && (a3.props = g3, a3.state = a3.__s, a3.__d = false), a3.__e = false, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), A2 = 0; A2 < a3._sb.length; A2++)
                a3.__h.push(a3._sb[A2]);
              a3._sb = [], a3.__h.length && f3.push(a3);
              break n;
            }
            null != a3.componentWillUpdate && a3.componentWillUpdate(g3, a3.__s, w3), null != a3.componentDidUpdate && a3.__h.push(function() {
              a3.componentDidUpdate(y2, p2, d2);
            });
          }
          if (a3.context = w3, a3.props = g3, a3.__P = n2, P2 = l.__r, C2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, P2 && P2(u3), s3 = a3.render(a3.props, a3.state, a3.context), $2 = 0; $2 < a3._sb.length; $2++)
              a3.__h.push(a3._sb[$2]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, P2 && P2(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
            } while (a3.__d && ++C2 < 25);
          a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), v3 || null == a3.getSnapshotBeforeUpdate || (d2 = a3.getSnapshotBeforeUpdate(y2, p2)), H2 = null != s3 && s3.type === _ && null == s3.key ? s3.props.children : s3, x(n2, Array.isArray(H2) ? H2 : [H2], u3, i3, t3, r3, o3, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), b3 && (a3.__E = a3.__ = null), a3.__e = false;
        } else
          null == o3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = N(i3.__e, u3, i3, t3, r3, o3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != o3) && (u3.__e = e3, u3.__h = !!c3, o3[o3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function M(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, i3, t3, r3, o3, f3, e3) {
    var s3, a3, h3, y2 = i3.props, p2 = u3.props, d2 = u3.type, _3 = 0;
    if ("svg" === d2 && (r3 = true), null != o3) {
      for (; _3 < o3.length; _3++)
        if ((s3 = o3[_3]) && "setAttribute" in s3 == !!d2 && (d2 ? s3.localName === d2 : 3 === s3.nodeType)) {
          l3 = s3, o3[_3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d2)
        return document.createTextNode(p2);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o3 = null, e3 = false;
    }
    if (null === d2)
      y2 === p2 || e3 && l3.data === p2 || (l3.data = p2);
    else {
      if (o3 = o3 && n.call(l3.childNodes), a3 = (y2 = i3.props || c).dangerouslySetInnerHTML, h3 = p2.dangerouslySetInnerHTML, !e3) {
        if (null != o3)
          for (y2 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
            y2[l3.attributes[_3].name] = l3.attributes[_3].value;
        (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
      }
      if (H(l3, p2, y2, r3, e3), h3)
        u3.__k = [];
      else if (_3 = u3.props.children, x(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, r3 && "foreignObject" !== d2, o3, f3, o3 ? o3[0] : i3.__k && b(i3, 0), e3), null != o3)
        for (_3 = o3.length; _3--; )
          null != o3[_3] && v(o3[_3]);
      e3 || ("value" in p2 && void 0 !== (_3 = p2.value) && (_3 !== l3.value || "progress" === d2 && !_3 || "option" === d2 && _3 !== y2.value) && T(l3, "value", _3, y2.value, false), "checked" in p2 && void 0 !== (_3 = p2.checked) && _3 !== l3.checked && T(l3, "checked", _3, y2.checked, false));
    }
    return l3;
  }
  function O(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function S(n2, u3, i3) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || O(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && S(t3[r3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || v(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, i3, t3) {
    var r3, o3, f3;
    l.__ && l.__(u3, i3), o3 = (r3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], L(i3, u3 = (!r3 && t3 || i3).__k = y(_, null, [u3]), o3 || c, c, void 0 !== i3.ownerSVGElement, !r3 && t3 ? [t3] : o3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o3 ? o3.__e : i3.firstChild, r3), M(f3, u3);
  }
  var n, l, u, i, t, r, o, f, e, c, s, a;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      init_define_process_env();
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = s.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, r3, o3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((r3 = t3.constructor) && null != r3.getDerivedStateFromError && (t3.setState(r3.getDerivedStateFromError(n2)), o3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), o3 = t3.__d), o3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, k.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), m(this));
      }, k.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
      }, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, w.__r = 0, e = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
      init_define_process_env();
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o3 = d(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function _2(n2) {
    return o2 = 5, F(function() {
      return { current: n2 };
    }, []);
  }
  function F(n2, r3) {
    var u3 = d(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_define_process_env();
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // ../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/0b8d290c-ba7a-4f07-a7da-e6561af93c4f/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/0b8d290c-ba7a-4f07-a7da-e6561af93c4f/loading-indicator.module.js"() {
      init_define_process_env();
      if (document.getElementById("7d5e3cf57e") === null) {
        const element = document.createElement("style");
        element.id = "7d5e3cf57e";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_module_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_module_default.loadingIndicator }), y("svg", { class: loading_indicator_module_default.svg, style: typeof color === "undefined" ? void 0 : {
      fill: `var(--figma-color-icon-${color})`
    } }, y("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_define_process_env();
      init_preact_module();
      init_loading_indicator_module();
    }
  });

  // ../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/1e306cd0-9da5-4610-9367-70b2bbdff2d3/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/1e306cd0-9da5-4610-9367-70b2bbdff2d3/button.module.js"() {
      init_define_process_env();
      if (document.getElementById("90bd021db2") === null) {
        const element = document.createElement("style");
        element.id = "90bd021db2";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDZDQUE2QztFQUM3QyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnV0dG9uIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTYpO1xufVxuXG4uZGlzYWJsZWQgYnV0dG9uIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGVmYXVsdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uYnJhbmQpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kZWZhdWx0Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGFuZ2VyKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xufVxuLnNlY29uZGFyeS5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZhdWx0IC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubG9hZGluZyAuY2hpbGRyZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_module_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return y("div", { class: createClassName([
      button_module_default.button,
      secondary === true ? button_module_default.secondary : button_module_default.default,
      danger === true ? button_module_default.danger : null,
      fullWidth === true ? button_module_default.fullWidth : null,
      disabled === true ? button_module_default.disabled : null,
      loading === true ? button_module_default.loading : null
    ]) }, loading === true ? y("div", { class: button_module_default.loadingIndicator }, y(LoadingIndicator, null)) : null, y("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), y("div", { class: button_module_default.children }, children)));
  }
  var init_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_define_process_env();
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator();
      init_button_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
      init_define_process_env();
    }
  });

  // ../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/66465c4f-2f43-4365-9558-ecb7aaee1387/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/66465c4f-2f43-4365-9558-ecb7aaee1387/text.module.js"() {
      init_define_process_env();
      if (document.getElementById("447a0fe808") === null) {
        const element = document.createElement("style");
        element.id = "447a0fe808";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a) {
    var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_module_default.text,
      text_module_default[align],
      numeric === true ? text_module_default.numeric : null
    ]) }), children);
  }
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_define_process_env();
      init_preact_module();
      init_create_class_name();
      init_text_module();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      init_define_process_env();
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/mixed-values.js
  var MIXED_STRING;
  var init_mixed_values = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/mixed-values.js"() {
      init_define_process_env();
      MIXED_STRING = "999999999999999";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_define_process_env();
      init_events();
      init_mixed_values();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js
  function isKeyCodeCharacterGenerating(keyCode) {
    return keyCode === 32 || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 105 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222;
  }
  var init_is_keycode_character_generating = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js"() {
      init_define_process_env();
    }
  });

  // ../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/acdc3588-b6ca-4342-9404-714730005137/textbox-multiline.module.js
  var textbox_multiline_module_default;
  var init_textbox_multiline_module = __esm({
    "../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/acdc3588-b6ca-4342-9404-714730005137/textbox-multiline.module.js"() {
      init_define_process_env();
      if (document.getElementById("17a6b025e0") === null) {
        const element = document.createElement("style");
        element.id = "17a6b025e0";
        element.textContent = `._textboxMultiline_1rfqs_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._grow_1rfqs_6 {
  display: grid;
}

._ghost_1rfqs_10,
._grow_1rfqs_6 ._textarea_1rfqs_11 {
  grid-area: 1 / 1 / 2 / 2;
}

._ghost_1rfqs_10 {
  padding: 6px 0 6px var(--space-extra-small);
  visibility: hidden;
  white-space: pre-wrap;
}

._textarea_1rfqs_11 {
  display: block;
  width: 100%;
  padding: 6px var(--space-extra-small) 6px var(--space-extra-small);
  border-radius: var(--border-radius-2);
  background-color: transparent;
  color: var(--figma-color-text);
  resize: none;
}
._textarea_1rfqs_11::placeholder {
  color: var(--figma-color-text-tertiary);
}
._disabled_1rfqs_33 ._textarea_1rfqs_11 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}

._border_1rfqs_38 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_1rfqs_48 ._border_1rfqs_38,
._textboxMultiline_1rfqs_1:not(._disabled_1rfqs_33):hover ._border_1rfqs_38 {
  border-color: var(--figma-color-border);
}
._textboxMultiline_1rfqs_1:not(._disabled_1rfqs_33) ._textarea_1rfqs_11:focus ~ ._border_1rfqs_38 {
  top: -1px;
  bottom: -1px;
  border: 2px solid var(--figma-color-border-brand-strong);
}

._underline_1rfqs_58 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textboxMultiline_1rfqs_1:not(._disabled_1rfqs_33) ._textarea_1rfqs_11:focus ~ ._underline_1rfqs_58,
._textboxMultiline_1rfqs_1:not(._disabled_1rfqs_33):hover ._underline_1rfqs_58 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbXVsdGlsaW5lL3RleHRib3gtbXVsdGlsaW5lLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrRUFBa0U7RUFDbEUscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsU0FBUztFQUNULDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDO0FBQ0E7O0VBRUUsNkJBQTZCO0FBQy9CIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbXVsdGlsaW5lL3RleHRib3gtbXVsdGlsaW5lLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveE11bHRpbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbn1cblxuLmdyb3cge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZ2hvc3QsXG4uZ3JvdyAudGV4dGFyZWEge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG59XG5cbi5naG9zdCB7XG4gIHBhZGRpbmc6IDZweCAwIDZweCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4udGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCkgNnB4IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgcmVzaXplOiBub25lO1xufVxuLnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcbn1cbi5kaXNhYmxlZCAudGV4dGFyZWEge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLnRleHRib3hNdWx0aWxpbmU6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94TXVsdGlsaW5lOm5vdCguZGlzYWJsZWQpIC50ZXh0YXJlYTpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94TXVsdGlsaW5lOm5vdCguZGlzYWJsZWQpIC50ZXh0YXJlYTpmb2N1cyB+IC51bmRlcmxpbmUsXG4udGV4dGJveE11bHRpbGluZTpub3QoLmRpc2FibGVkKTpob3ZlciAudW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      textbox_multiline_module_default = { "textboxMultiline": "_textboxMultiline_1rfqs_1", "grow": "_grow_1rfqs_6", "ghost": "_ghost_1rfqs_10", "textarea": "_textarea_1rfqs_11", "disabled": "_disabled_1rfqs_33", "border": "_border_1rfqs_38", "hasBorder": "_hasBorder_1rfqs_48", "underline": "_underline_1rfqs_58" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-multiline/textbox-multiline.js
  function TextboxMultiline(_a) {
    var _b = _a, { grow = false, disabled = false, name, onInput = function() {
    }, onValueInput = function() {
    }, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, rows = 3, spellCheck = false, validateOnBlur, variant, value } = _b, rest = __objRest(_b, ["grow", "disabled", "name", "onInput", "onValueInput", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "rows", "spellCheck", "validateOnBlur", "variant", "value"]);
    const textAreaElementRef = _2(null);
    const revertOnEscapeKeyDownRef = _2(false);
    const [originalValue, setOriginalValue] = h2(EMPTY_STRING);
    const setTextAreaElementValue = T2(function(value2) {
      const textAreaElement = getCurrentFromRef(textAreaElementRef);
      textAreaElement.value = value2;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      textAreaElement.dispatchEvent(inputEvent);
    }, []);
    const handleBlur = T2(function() {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (typeof validateOnBlur !== "undefined") {
        const result = validateOnBlur(value);
        if (typeof result === "string") {
          setTextAreaElementValue(result);
          setOriginalValue(EMPTY_STRING);
          return;
        }
        if (result === false) {
          if (value !== originalValue) {
            setTextAreaElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING);
          return;
        }
      }
      setOriginalValue(EMPTY_STRING);
    }, [originalValue, setTextAreaElementValue, validateOnBlur, value]);
    const handleFocus = T2(function(event) {
      setOriginalValue(value);
      event.currentTarget.select();
    }, [value]);
    const handleInput = T2(function(event) {
      onValueInput(event.currentTarget.value, name);
      onInput(event);
    }, [name, onInput, onValueInput]);
    const handleKeyDown = T2(function(event) {
      if (event.key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true;
          setTextAreaElementValue(originalValue);
          setOriginalValue(EMPTY_STRING);
        }
        event.currentTarget.blur();
        return;
      }
      if (value === MIXED_STRING && isKeyCodeCharacterGenerating(event.keyCode) === false) {
        event.preventDefault();
        event.currentTarget.select();
      }
    }, [
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setTextAreaElementValue,
      value
    ]);
    const handleMouseUp = T2(function(event) {
      if (value === MIXED_STRING) {
        event.preventDefault();
      }
    }, [value]);
    return y("div", { class: createClassName([
      textbox_multiline_module_default.textboxMultiline,
      typeof variant === "undefined" ? null : variant === "border" ? textbox_multiline_module_default.hasBorder : null,
      grow === true ? textbox_multiline_module_default.grow : null,
      disabled === true ? textbox_multiline_module_default.disabled : null
    ]) }, grow === true ? y("div", { class: textbox_multiline_module_default.ghost }, value === MIXED_STRING ? "Mixed" : `${value} `) : null, y("textarea", __spreadProps(__spreadValues({}, rest), { ref: textAreaElementRef, class: textbox_multiline_module_default.textarea, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, placeholder, rows, spellcheck: spellCheck, tabIndex: disabled === true ? -1 : 0, value: value === MIXED_STRING ? "Mixed" : value })), y("div", { class: textbox_multiline_module_default.border }), variant === "underline" ? y("div", { class: textbox_multiline_module_default.underline }) : null);
  }
  var EMPTY_STRING;
  var init_textbox_multiline = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-multiline/textbox-multiline.js"() {
      init_define_process_env();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_get_current_from_ref();
      init_is_keycode_character_generating();
      init_textbox_multiline_module();
      EMPTY_STRING = "";
    }
  });

  // ../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/b5a0040d-06b5-40a0-ad27-5ef35e2d4c6a/muted.module.js
  var muted_module_default;
  var init_muted_module = __esm({
    "../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/b5a0040d-06b5-40a0-ad27-5ef35e2d4c6a/muted.module.js"() {
      init_define_process_env();
      if (document.getElementById("f0657c5e7a") === null) {
        const element = document.createElement("style");
        element.id = "f0657c5e7a";
        element.textContent = `._muted_139yx_1 {
  color: var(--figma-color-text-secondary);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaW5saW5lLXRleHQvbXV0ZWQvbXV0ZWQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUF3QztBQUMxQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2lubGluZS10ZXh0L211dGVkL211dGVkLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXV0ZWQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      muted_module_default = { "muted": "_muted_139yx_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js
  function Muted(_a) {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return y("span", __spreadProps(__spreadValues({}, rest), { class: muted_module_default.muted }), children);
  }
  var init_muted = __esm({
    "node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js"() {
      init_define_process_env();
      init_preact_module();
      init_muted_module();
    }
  });

  // ../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/a1c6e9a0-53fe-4aec-8f0e-32f5c157c32a/columns.module.js
  var columns_module_default;
  var init_columns_module = __esm({
    "../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/a1c6e9a0-53fe-4aec-8f0e-32f5c157c32a/columns.module.js"() {
      init_define_process_env();
      if (document.getElementById("5042342bc0") === null) {
        const element = document.createElement("style");
        element.id = "5042342bc0";
        element.textContent = `._columns_ybv3x_1 {
  display: flex;
}
._extraSmall_ybv3x_4 {
  margin-left: calc(-1 * var(--space-extra-small));
}
._small_ybv3x_7 {
  margin-left: calc(-1 * var(--space-small));
}
._medium_ybv3x_10 {
  margin-left: calc(-1 * var(--space-medium));
}
._large_ybv3x_13 {
  margin-left: calc(-1 * var(--space-large));
}
._extraLarge_ybv3x_16 {
  margin-left: calc(-1 * var(--space-extra-large));
}

._child_ybv3x_20 {
  flex-grow: 1;
}
._extraSmall_ybv3x_4 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-small);
}
._small_ybv3x_7 > ._child_ybv3x_20 {
  padding-left: var(--space-small);
}
._medium_ybv3x_10 > ._child_ybv3x_20 {
  padding-left: var(--space-medium);
}
._large_ybv3x_13 > ._child_ybv3x_20 {
  padding-left: var(--space-large);
}
._extraLarge_ybv3x_16 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbHVtbnMvY29sdW1ucy5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9sYXlvdXQvY29sdW1ucy9jb2x1bW5zLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZXh0cmFTbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpKTtcbn1cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2Utc21hbGwpKTtcbn1cbi5tZWRpdW0ge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLW1lZGl1bSkpO1xufVxuLmxhcmdlIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zcGFjZS1sYXJnZSkpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKSk7XG59XG5cbi5jaGlsZCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5leHRyYVNtYWxsID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0gPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2UgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      columns_module_default = { "columns": "_columns_ybv3x_1", "extraSmall": "_extraSmall_ybv3x_4", "small": "_small_ybv3x_7", "medium": "_medium_ybv3x_10", "large": "_large_ybv3x_13", "extraLarge": "_extraLarge_ybv3x_16", "child": "_child_ybv3x_20" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js
  function Columns(_a) {
    var _b = _a, { children, space } = _b, rest = __objRest(_b, ["children", "space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      columns_module_default.columns,
      typeof space === "undefined" ? null : columns_module_default[space]
    ]) }), P(children).map(function(element, index) {
      return y("div", { key: index, class: columns_module_default.child }, element);
    }));
  }
  var init_columns = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js"() {
      init_define_process_env();
      init_preact_module();
      init_create_class_name();
      init_columns_module();
    }
  });

  // ../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/f69e4138-447e-4fed-b802-825192e2f5c6/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/f69e4138-447e-4fed-b802-825192e2f5c6/container.module.js"() {
      init_define_process_env();
      if (document.getElementById("9b590443b6") === null) {
        const element = document.createElement("style");
        element.id = "9b590443b6";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: container_module_default[space] }));
  }
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_define_process_env();
      init_preact_module();
      init_container_module();
    }
  });

  // ../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/30c51caa-9358-4c0d-9154-1dee1fd0b0e3/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/30c51caa-9358-4c0d-9154-1dee1fd0b0e3/vertical-space.module.js"() {
      init_define_process_env();
      if (document.getElementById("a008a3cff1") === null) {
        const element = document.createElement("style");
        element.id = "a008a3cff1";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_module_default[space] }));
  }
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_define_process_env();
      init_preact_module();
      init_vertical_space_module();
    }
  });

  // ../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/192d5047-473c-4ae0-9d14-2baac3cc2221/base.js
  var init_base = __esm({
    "../../../../private/var/folders/0d/tt75wf8563b3_x70hnmkmvx80000gn/T/192d5047-473c-4ae0-9d14-2baac3cc2221/base.js"() {
      init_define_process_env();
      if (document.getElementById("f8e96a7c93") === null) {
        const element = document.createElement("style");
        element.id = "f8e96a7c93";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      B(y(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_define_process_env();
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_define_process_env();
      init_button();
      init_text();
      init_textbox_multiline();
      init_muted();
      init_columns();
      init_container();
      init_vertical_space();
      init_render();
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/bind.js
  var require_bind = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/bind.js"(exports, module) {
      "use strict";
      init_define_process_env();
      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i3 = 0; i3 < args.length; i3++) {
            args[i3] = arguments[i3];
          }
          return fn.apply(thisArg, args);
        };
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/openai/node_modules/axios/lib/utils.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var bind = require_bind();
      var toString = Object.prototype.toString;
      function isArray(val) {
        return Array.isArray(val);
      }
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
      }
      function isArrayBuffer(val) {
        return toString.call(val) === "[object ArrayBuffer]";
      }
      function isFormData(val) {
        return toString.call(val) === "[object FormData]";
      }
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && isArrayBuffer(val.buffer);
        }
        return result;
      }
      function isString(val) {
        return typeof val === "string";
      }
      function isNumber(val) {
        return typeof val === "number";
      }
      function isObject(val) {
        return val !== null && typeof val === "object";
      }
      function isPlainObject(val) {
        if (toString.call(val) !== "[object Object]") {
          return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      function isDate(val) {
        return toString.call(val) === "[object Date]";
      }
      function isFile(val) {
        return toString.call(val) === "[object File]";
      }
      function isBlob(val) {
        return toString.call(val) === "[object Blob]";
      }
      function isFunction(val) {
        return toString.call(val) === "[object Function]";
      }
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }
      function isURLSearchParams(val) {
        return toString.call(val) === "[object URLSearchParams]";
      }
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
      }
      function isStandardBrowserEnv() {
        if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function forEach(obj, fn) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (var i3 = 0, l3 = obj.length; i3 < l3; i3++) {
            fn.call(null, obj[i3], i3, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }
      function merge() {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }
        for (var i3 = 0, l3 = arguments.length; i3 < l3; i3++) {
          forEach(arguments[i3], assignValue);
        }
        return result;
      }
      function extend(a3, b3, thisArg) {
        forEach(b3, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a3[key] = bind(val, thisArg);
          } else {
            a3[key] = val;
          }
        });
        return a3;
      }
      function stripBOM(content) {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      }
      module.exports = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isFunction,
        isStream,
        isURLSearchParams,
        isStandardBrowserEnv,
        forEach,
        merge,
        extend,
        trim,
        stripBOM
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/buildURL.js
  var require_buildURL = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      module.exports = function buildURL(url, params, paramsSerializer) {
        if (!params) {
          return url;
        }
        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }
            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }
            utils.forEach(val, function parseValue(v3) {
              if (utils.isDate(v3)) {
                v3 = v3.toISOString();
              } else if (utils.isObject(v3)) {
                v3 = JSON.stringify(v3);
              }
              parts.push(encode(key) + "=" + encode(v3));
            });
          });
          serializedParams = parts.join("&");
        }
        if (serializedParams) {
          var hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/core/InterceptorManager.js
  var require_InterceptorManager = __commonJS({
    "node_modules/openai/node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      function InterceptorManager() {
        this.handlers = [];
      }
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h3) {
          if (h3 !== null) {
            fn(h3);
          }
        });
      };
      module.exports = InterceptorManager;
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/normalizeHeaderName.js
  var require_normalizeHeaderName = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/core/enhanceError.js
  var require_enhanceError = __commonJS({
    "node_modules/openai/node_modules/axios/lib/core/enhanceError.js"(exports, module) {
      "use strict";
      init_define_process_env();
      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;
        if (code) {
          error.code = code;
        }
        error.request = request;
        error.response = response;
        error.isAxiosError = true;
        error.toJSON = function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        };
        return error;
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/defaults/transitional.js
  var require_transitional = __commonJS({
    "node_modules/openai/node_modules/axios/lib/defaults/transitional.js"(exports, module) {
      "use strict";
      init_define_process_env();
      module.exports = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/core/createError.js
  var require_createError = __commonJS({
    "node_modules/openai/node_modules/axios/lib/core/createError.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var enhanceError = require_enhanceError();
      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/core/settle.js
  var require_settle = __commonJS({
    "node_modules/openai/node_modules/axios/lib/core/settle.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var createError = require_createError();
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError(
            "Request failed with status code " + response.status,
            response.config,
            null,
            response.request,
            response
          ));
        }
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/cookies.js
  var require_cookies = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/cookies.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? (
        // Standard browser envs support document.cookie
        function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              var cookie = [];
              cookie.push(name + "=" + encodeURIComponent(value));
              if (utils.isNumber(expires)) {
                cookie.push("expires=" + new Date(expires).toGMTString());
              }
              if (utils.isString(path)) {
                cookie.push("path=" + path);
              }
              if (utils.isString(domain)) {
                cookie.push("domain=" + domain);
              }
              if (secure === true) {
                cookie.push("secure");
              }
              document.cookie = cookie.join("; ");
            },
            read: function read(name) {
              var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, "", Date.now() - 864e5);
            }
          };
        }()
      ) : (
        // Non standard browser env (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return {
            write: function write() {
            },
            read: function read() {
              return null;
            },
            remove: function remove() {
            }
          };
        }()
      );
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/isAbsoluteURL.js
  var require_isAbsoluteURL = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
      "use strict";
      init_define_process_env();
      module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/combineURLs.js
  var require_combineURLs = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
      "use strict";
      init_define_process_env();
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/core/buildFullPath.js
  var require_buildFullPath = __commonJS({
    "node_modules/openai/node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var isAbsoluteURL = require_isAbsoluteURL();
      var combineURLs = require_combineURLs();
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/parseHeaders.js
  var require_parseHeaders = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i3;
        if (!headers) {
          return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
          i3 = line.indexOf(":");
          key = utils.trim(line.substr(0, i3)).toLowerCase();
          val = utils.trim(line.substr(i3 + 1));
          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/isURLSameOrigin.js
  var require_isURLSameOrigin = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? (
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
          var msie = /(msie|trident)/i.test(navigator.userAgent);
          var urlParsingNode = document.createElement("a");
          var originURL;
          function resolveURL(url) {
            var href = url;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin(requestURL) {
            var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }()
      ) : (
        // Non standard browser envs (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        }()
      );
    }
  });

  // node_modules/openai/node_modules/axios/lib/cancel/Cancel.js
  var require_Cancel = __commonJS({
    "node_modules/openai/node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
      "use strict";
      init_define_process_env();
      function Cancel(message) {
        this.message = message;
      }
      Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      };
      Cancel.prototype.__CANCEL__ = true;
      module.exports = Cancel;
    }
  });

  // node_modules/openai/node_modules/axios/lib/adapters/xhr.js
  var require_xhr = __commonJS({
    "node_modules/openai/node_modules/axios/lib/adapters/xhr.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      var settle = require_settle();
      var cookies = require_cookies();
      var buildURL = require_buildURL();
      var buildFullPath = require_buildFullPath();
      var parseHeaders = require_parseHeaders();
      var isURLSameOrigin = require_isURLSameOrigin();
      var createError = require_createError();
      var transitionalDefaults = require_transitional();
      var Cancel = require_Cancel();
      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;
          var responseType = config.responseType;
          var onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils.isFormData(requestData)) {
            delete requestHeaders["Content-Type"];
          }
          var request = new XMLHttpRequest();
          if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
          }
          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(createError("Network Error", config, null, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(
              timeoutErrorMessage,
              config,
              transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
              request
            ));
            request = null;
          };
          if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                delete requestHeaders[key];
              } else {
                request.setRequestHeader(key, val);
              }
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", config.onUploadProgress);
          }
          if (config.cancelToken || config.signal) {
            onCanceled = function(cancel) {
              if (!request) {
                return;
              }
              reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          if (!requestData) {
            requestData = null;
          }
          request.send(requestData);
        });
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/defaults/index.js
  var require_defaults = __commonJS({
    "node_modules/openai/node_modules/axios/lib/defaults/index.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      var normalizeHeaderName = require_normalizeHeaderName();
      var enhanceError = require_enhanceError();
      var transitionalDefaults = require_transitional();
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
          headers["Content-Type"] = value;
        }
      }
      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== "undefined") {
          adapter = require_xhr();
        } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
          adapter = require_xhr();
        }
        return adapter;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e3) {
            if (e3.name !== "SyntaxError") {
              throw e3;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: transitionalDefaults,
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
            setContentTypeIfUnset(headers, "application/json");
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          var transitional = this.transitional || defaults.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
            try {
              return JSON.parse(data);
            } catch (e3) {
              if (strictJSONParsing) {
                if (e3.name === "SyntaxError") {
                  throw enhanceError(e3, this, "E_JSON_PARSE");
                }
                throw e3;
              }
            }
          }
          return data;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }
  });

  // node_modules/openai/node_modules/axios/lib/core/transformData.js
  var require_transformData = __commonJS({
    "node_modules/openai/node_modules/axios/lib/core/transformData.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      var defaults = require_defaults();
      module.exports = function transformData(data, headers, fns) {
        var context = this || defaults;
        utils.forEach(fns, function transform(fn) {
          data = fn.call(context, data, headers);
        });
        return data;
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/cancel/isCancel.js
  var require_isCancel = __commonJS({
    "node_modules/openai/node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
      "use strict";
      init_define_process_env();
      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/core/dispatchRequest.js
  var require_dispatchRequest = __commonJS({
    "node_modules/openai/node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      var transformData = require_transformData();
      var isCancel = require_isCancel();
      var defaults = require_defaults();
      var Cancel = require_Cancel();
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new Cancel("canceled");
        }
      }
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = config.headers || {};
        config.data = transformData.call(
          config,
          config.data,
          config.headers,
          config.transformRequest
        );
        config.headers = utils.merge(
          config.headers.common || {},
          config.headers[config.method] || {},
          config.headers
        );
        utils.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function cleanHeaderConfig(method) {
            delete config.headers[method];
          }
        );
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(
            config,
            response.data,
            response.headers,
            config.transformResponse
          );
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config,
                reason.response.data,
                reason.response.headers,
                config.transformResponse
              );
            }
          }
          return Promise.reject(reason);
        });
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/core/mergeConfig.js
  var require_mergeConfig = __commonJS({
    "node_modules/openai/node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      module.exports = function mergeConfig(config1, config2) {
        config2 = config2 || {};
        var config = {};
        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          }
        }
        function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function mergeDirectKeys(prop) {
          if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        var mergeMap = {
          "url": valueFromConfig2,
          "method": valueFromConfig2,
          "data": valueFromConfig2,
          "baseURL": defaultToConfig2,
          "transformRequest": defaultToConfig2,
          "transformResponse": defaultToConfig2,
          "paramsSerializer": defaultToConfig2,
          "timeout": defaultToConfig2,
          "timeoutMessage": defaultToConfig2,
          "withCredentials": defaultToConfig2,
          "adapter": defaultToConfig2,
          "responseType": defaultToConfig2,
          "xsrfCookieName": defaultToConfig2,
          "xsrfHeaderName": defaultToConfig2,
          "onUploadProgress": defaultToConfig2,
          "onDownloadProgress": defaultToConfig2,
          "decompress": defaultToConfig2,
          "maxContentLength": defaultToConfig2,
          "maxBodyLength": defaultToConfig2,
          "transport": defaultToConfig2,
          "httpAgent": defaultToConfig2,
          "httpsAgent": defaultToConfig2,
          "cancelToken": defaultToConfig2,
          "socketPath": defaultToConfig2,
          "responseEncoding": defaultToConfig2,
          "validateStatus": mergeDirectKeys
        };
        utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
          var merge = mergeMap[prop] || mergeDeepProperties;
          var configValue = merge(prop);
          utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/env/data.js
  var require_data = __commonJS({
    "node_modules/openai/node_modules/axios/lib/env/data.js"(exports, module) {
      init_define_process_env();
      module.exports = {
        "version": "0.26.1"
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/validator.js
  var require_validator = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/validator.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var VERSION = require_data().version;
      var validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i3) {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i3 < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return function(value, opt, opts) {
          if (validator === false) {
            throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new TypeError("options must be an object");
        }
        var keys = Object.keys(options);
        var i3 = keys.length;
        while (i3-- > 0) {
          var opt = keys[i3];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === void 0 || validator(value, opt, options);
            if (result !== true) {
              throw new TypeError("option " + opt + " must be " + result);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw Error("Unknown option " + opt);
          }
        }
      }
      module.exports = {
        assertOptions,
        validators
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/core/Axios.js
  var require_Axios = __commonJS({
    "node_modules/openai/node_modules/axios/lib/core/Axios.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      var buildURL = require_buildURL();
      var InterceptorManager = require_InterceptorManager();
      var dispatchRequest = require_dispatchRequest();
      var mergeConfig = require_mergeConfig();
      var validator = require_validator();
      var validators = validator.validators;
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      Axios.prototype.request = function request(configOrUrl, config) {
        if (typeof configOrUrl === "string") {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = "get";
        }
        var transitional = config.transitional;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, void 0];
          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);
          promise = Promise.resolve(config);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }
          return promise;
        }
        var newConfig = config;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }
        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }
        return promise;
      };
      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        Axios.prototype[method] = function(url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data
          }));
        };
      });
      module.exports = Axios;
    }
  });

  // node_modules/openai/node_modules/axios/lib/cancel/CancelToken.js
  var require_CancelToken = __commonJS({
    "node_modules/openai/node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var Cancel = require_Cancel();
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        this.promise.then(function(cancel) {
          if (!token._listeners)
            return;
          var i3;
          var l3 = token._listeners.length;
          for (i3 = 0; i3 < l3; i3++) {
            token._listeners[i3](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = function(onfulfilled) {
          var _resolve;
          var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };
          return promise;
        };
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }
          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      CancelToken.prototype.subscribe = function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      };
      CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      };
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c3) {
          cancel = c3;
        });
        return {
          token,
          cancel
        };
      };
      module.exports = CancelToken;
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/spread.js
  var require_spread = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/spread.js"(exports, module) {
      "use strict";
      init_define_process_env();
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/helpers/isAxiosError.js
  var require_isAxiosError = __commonJS({
    "node_modules/openai/node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      module.exports = function isAxiosError(payload) {
        return utils.isObject(payload) && payload.isAxiosError === true;
      };
    }
  });

  // node_modules/openai/node_modules/axios/lib/axios.js
  var require_axios = __commonJS({
    "node_modules/openai/node_modules/axios/lib/axios.js"(exports, module) {
      "use strict";
      init_define_process_env();
      var utils = require_utils();
      var bind = require_bind();
      var Axios = require_Axios();
      var mergeConfig = require_mergeConfig();
      var defaults = require_defaults();
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);
        utils.extend(instance, Axios.prototype, context);
        utils.extend(instance, context);
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios = createInstance(defaults);
      axios.Axios = Axios;
      axios.Cancel = require_Cancel();
      axios.CancelToken = require_CancelToken();
      axios.isCancel = require_isCancel();
      axios.VERSION = require_data().version;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = require_spread();
      axios.isAxiosError = require_isAxiosError();
      module.exports = axios;
      module.exports.default = axios;
    }
  });

  // node_modules/openai/node_modules/axios/index.js
  var require_axios2 = __commonJS({
    "node_modules/openai/node_modules/axios/index.js"(exports, module) {
      init_define_process_env();
      module.exports = require_axios();
    }
  });

  // node_modules/openai/dist/base.js
  var require_base = __commonJS({
    "node_modules/openai/dist/base.js"(exports) {
      "use strict";
      init_define_process_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = exports.BASE_PATH = void 0;
      var axios_1 = require_axios2();
      exports.BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, "");
      exports.COLLECTION_FORMATS = {
        csv: ",",
        ssv: " ",
        tsv: "	",
        pipes: "|"
      };
      var BaseAPI = class {
        constructor(configuration2, basePath = exports.BASE_PATH, axios = axios_1.default) {
          this.basePath = basePath;
          this.axios = axios;
          if (configuration2) {
            this.configuration = configuration2;
            this.basePath = configuration2.basePath || this.basePath;
          }
        }
      };
      exports.BaseAPI = BaseAPI;
      var RequiredError = class extends Error {
        constructor(field, msg) {
          super(msg);
          this.field = field;
          this.name = "RequiredError";
        }
      };
      exports.RequiredError = RequiredError;
    }
  });

  // node_modules/openai/dist/common.js
  var require_common = __commonJS({
    "node_modules/openai/dist/common.js"(exports) {
      "use strict";
      init_define_process_env();
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e3) {
              reject(e3);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e3) {
              reject(e3);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createRequestFunction = exports.toPathString = exports.serializeDataIfNeeded = exports.setSearchParams = exports.setOAuthToObject = exports.setBearerAuthToObject = exports.setBasicAuthToObject = exports.setApiKeyToObject = exports.assertParamExists = exports.DUMMY_BASE_URL = void 0;
      var base_1 = require_base();
      exports.DUMMY_BASE_URL = "https://example.com";
      exports.assertParamExists = function(functionName, paramName, paramValue) {
        if (paramValue === null || paramValue === void 0) {
          throw new base_1.RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
        }
      };
      exports.setApiKeyToObject = function(object, keyParamName, configuration2) {
        return __awaiter(this, void 0, void 0, function* () {
          if (configuration2 && configuration2.apiKey) {
            const localVarApiKeyValue = typeof configuration2.apiKey === "function" ? yield configuration2.apiKey(keyParamName) : yield configuration2.apiKey;
            object[keyParamName] = localVarApiKeyValue;
          }
        });
      };
      exports.setBasicAuthToObject = function(object, configuration2) {
        if (configuration2 && (configuration2.username || configuration2.password)) {
          object["auth"] = { username: configuration2.username, password: configuration2.password };
        }
      };
      exports.setBearerAuthToObject = function(object, configuration2) {
        return __awaiter(this, void 0, void 0, function* () {
          if (configuration2 && configuration2.accessToken) {
            const accessToken = typeof configuration2.accessToken === "function" ? yield configuration2.accessToken() : yield configuration2.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
          }
        });
      };
      exports.setOAuthToObject = function(object, name, scopes, configuration2) {
        return __awaiter(this, void 0, void 0, function* () {
          if (configuration2 && configuration2.accessToken) {
            const localVarAccessTokenValue = typeof configuration2.accessToken === "function" ? yield configuration2.accessToken(name, scopes) : yield configuration2.accessToken;
            object["Authorization"] = "Bearer " + localVarAccessTokenValue;
          }
        });
      };
      function setFlattenedQueryParams(urlSearchParams, parameter, key = "") {
        if (parameter == null)
          return;
        if (typeof parameter === "object") {
          if (Array.isArray(parameter)) {
            parameter.forEach((item) => setFlattenedQueryParams(urlSearchParams, item, key));
          } else {
            Object.keys(parameter).forEach((currentKey) => setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== "" ? "." : ""}${currentKey}`));
          }
        } else {
          if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
          } else {
            urlSearchParams.set(key, parameter);
          }
        }
      }
      exports.setSearchParams = function(url, ...objects) {
        const searchParams = new URLSearchParams(url.search);
        setFlattenedQueryParams(searchParams, objects);
        url.search = searchParams.toString();
      };
      exports.serializeDataIfNeeded = function(value, requestOptions, configuration2) {
        const nonString = typeof value !== "string";
        const needsSerialization = nonString && configuration2 && configuration2.isJsonMime ? configuration2.isJsonMime(requestOptions.headers["Content-Type"]) : nonString;
        return needsSerialization ? JSON.stringify(value !== void 0 ? value : {}) : value || "";
      };
      exports.toPathString = function(url) {
        return url.pathname + url.search + url.hash;
      };
      exports.createRequestFunction = function(axiosArgs, globalAxios, BASE_PATH, configuration2) {
        return (axios = globalAxios, basePath = BASE_PATH) => {
          const axiosRequestArgs = Object.assign(Object.assign({}, axiosArgs.options), { url: ((configuration2 === null || configuration2 === void 0 ? void 0 : configuration2.basePath) || basePath) + axiosArgs.url });
          return axios.request(axiosRequestArgs);
        };
      };
    }
  });

  // node_modules/openai/dist/api.js
  var require_api = __commonJS({
    "node_modules/openai/dist/api.js"(exports) {
      "use strict";
      init_define_process_env();
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e3) {
              reject(e3);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e3) {
              reject(e3);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.OpenAIApi = exports.OpenAIApiFactory = exports.OpenAIApiFp = exports.OpenAIApiAxiosParamCreator = exports.CreateImageRequestResponseFormatEnum = exports.CreateImageRequestSizeEnum = exports.ChatCompletionResponseMessageRoleEnum = exports.ChatCompletionRequestMessageRoleEnum = void 0;
      var axios_1 = require_axios2();
      var common_1 = require_common();
      var base_1 = require_base();
      exports.ChatCompletionRequestMessageRoleEnum = {
        System: "system",
        User: "user",
        Assistant: "assistant"
      };
      exports.ChatCompletionResponseMessageRoleEnum = {
        System: "system",
        User: "user",
        Assistant: "assistant"
      };
      exports.CreateImageRequestSizeEnum = {
        _256x256: "256x256",
        _512x512: "512x512",
        _1024x1024: "1024x1024"
      };
      exports.CreateImageRequestResponseFormatEnum = {
        Url: "url",
        B64Json: "b64_json"
      };
      exports.OpenAIApiAxiosParamCreator = function(configuration2) {
        return {
          /**
           *
           * @summary Immediately cancel a fine-tune job.
           * @param {string} fineTuneId The ID of the fine-tune job to cancel
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          cancelFineTune: (fineTuneId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("cancelFineTune", "fineTuneId", fineTuneId);
            const localVarPath = `/fine-tunes/{fine_tune_id}/cancel`.replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
           * @param {CreateAnswerRequest} createAnswerRequest
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          createAnswer: (createAnswerRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createAnswer", "createAnswerRequest", createAnswerRequest);
            const localVarPath = `/answers`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createAnswerRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Creates a completion for the chat message
           * @param {CreateChatCompletionRequest} createChatCompletionRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createChatCompletion: (createChatCompletionRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createChatCompletion", "createChatCompletionRequest", createChatCompletionRequest);
            const localVarPath = `/chat/completions`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createChatCompletionRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Classifies the specified `query` using provided examples.  The endpoint first [searches](/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](/docs/api-reference/completions) endpoint.  Labeled examples can be provided via an uploaded `file`, or explicitly listed in the request using the `examples` parameter for quick tests and small scale use cases.
           * @param {CreateClassificationRequest} createClassificationRequest
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          createClassification: (createClassificationRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createClassification", "createClassificationRequest", createClassificationRequest);
            const localVarPath = `/classifications`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createClassificationRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Creates a completion for the provided prompt and parameters
           * @param {CreateCompletionRequest} createCompletionRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createCompletion: (createCompletionRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createCompletion", "createCompletionRequest", createCompletionRequest);
            const localVarPath = `/completions`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createCompletionRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Creates a new edit for the provided input, instruction, and parameters.
           * @param {CreateEditRequest} createEditRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createEdit: (createEditRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createEdit", "createEditRequest", createEditRequest);
            const localVarPath = `/edits`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createEditRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Creates an embedding vector representing the input text.
           * @param {CreateEmbeddingRequest} createEmbeddingRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createEmbedding: (createEmbeddingRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createEmbedding", "createEmbeddingRequest", createEmbeddingRequest);
            const localVarPath = `/embeddings`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createEmbeddingRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.
           * @param {File} file Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.  If the &#x60;purpose&#x60; is set to \\\&quot;fine-tune\\\&quot;, each line is a JSON record with \\\&quot;prompt\\\&quot; and \\\&quot;completion\\\&quot; fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data).
           * @param {string} purpose The intended purpose of the uploaded documents.  Use \\\&quot;fine-tune\\\&quot; for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createFile: (file, purpose, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createFile", "file", file);
            common_1.assertParamExists("createFile", "purpose", purpose);
            const localVarPath = `/files`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
            if (file !== void 0) {
              localVarFormParams.append("file", file);
            }
            if (purpose !== void 0) {
              localVarFormParams.append("purpose", purpose);
            }
            localVarHeaderParameter["Content-Type"] = "multipart/form-data";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)
           * @param {CreateFineTuneRequest} createFineTuneRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createFineTune: (createFineTuneRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createFineTune", "createFineTuneRequest", createFineTuneRequest);
            const localVarPath = `/fine-tunes`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createFineTuneRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Creates an image given a prompt.
           * @param {CreateImageRequest} createImageRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createImage: (createImageRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createImage", "createImageRequest", createImageRequest);
            const localVarPath = `/images/generations`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createImageRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Creates an edited or extended image given an original image and a prompt.
           * @param {File} image The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
           * @param {string} prompt A text description of the desired image(s). The maximum length is 1000 characters.
           * @param {File} [mask] An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where &#x60;image&#x60; should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as &#x60;image&#x60;.
           * @param {number} [n] The number of images to generate. Must be between 1 and 10.
           * @param {string} [size] The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
           * @param {string} [responseFormat] The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
           * @param {string} [user] A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createImageEdit: (image, prompt, mask, n2, size, responseFormat, user, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createImageEdit", "image", image);
            common_1.assertParamExists("createImageEdit", "prompt", prompt);
            const localVarPath = `/images/edits`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
            if (image !== void 0) {
              localVarFormParams.append("image", image);
            }
            if (mask !== void 0) {
              localVarFormParams.append("mask", mask);
            }
            if (prompt !== void 0) {
              localVarFormParams.append("prompt", prompt);
            }
            if (n2 !== void 0) {
              localVarFormParams.append("n", n2);
            }
            if (size !== void 0) {
              localVarFormParams.append("size", size);
            }
            if (responseFormat !== void 0) {
              localVarFormParams.append("response_format", responseFormat);
            }
            if (user !== void 0) {
              localVarFormParams.append("user", user);
            }
            localVarHeaderParameter["Content-Type"] = "multipart/form-data";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Creates a variation of a given image.
           * @param {File} image The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
           * @param {number} [n] The number of images to generate. Must be between 1 and 10.
           * @param {string} [size] The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
           * @param {string} [responseFormat] The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
           * @param {string} [user] A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createImageVariation: (image, n2, size, responseFormat, user, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createImageVariation", "image", image);
            const localVarPath = `/images/variations`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
            if (image !== void 0) {
              localVarFormParams.append("image", image);
            }
            if (n2 !== void 0) {
              localVarFormParams.append("n", n2);
            }
            if (size !== void 0) {
              localVarFormParams.append("size", size);
            }
            if (responseFormat !== void 0) {
              localVarFormParams.append("response_format", responseFormat);
            }
            if (user !== void 0) {
              localVarFormParams.append("user", user);
            }
            localVarHeaderParameter["Content-Type"] = "multipart/form-data";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Classifies if text violates OpenAI\'s Content Policy
           * @param {CreateModerationRequest} createModerationRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createModeration: (createModerationRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createModeration", "createModerationRequest", createModerationRequest);
            const localVarPath = `/moderations`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createModerationRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.  To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.  The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
           * @param {string} engineId The ID of the engine to use for this request.  You can select one of &#x60;ada&#x60;, &#x60;babbage&#x60;, &#x60;curie&#x60;, or &#x60;davinci&#x60;.
           * @param {CreateSearchRequest} createSearchRequest
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          createSearch: (engineId, createSearchRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createSearch", "engineId", engineId);
            common_1.assertParamExists("createSearch", "createSearchRequest", createSearchRequest);
            const localVarPath = `/engines/{engine_id}/search`.replace(`{${"engine_id"}}`, encodeURIComponent(String(engineId)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = common_1.serializeDataIfNeeded(createSearchRequest, localVarRequestOptions, configuration2);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Transcribes audio into the input language.
           * @param {File} file The audio file to transcribe, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
           * @param {string} model ID of the model to use. Only &#x60;whisper-1&#x60; is currently available.
           * @param {string} [prompt] An optional text to guide the model\\\&#39;s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
           * @param {string} [responseFormat] The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
           * @param {number} [temperature] The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
           * @param {string} [language] The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createTranscription: (file, model, prompt, responseFormat, temperature, language, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createTranscription", "file", file);
            common_1.assertParamExists("createTranscription", "model", model);
            const localVarPath = `/audio/transcriptions`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
            if (file !== void 0) {
              localVarFormParams.append("file", file);
            }
            if (model !== void 0) {
              localVarFormParams.append("model", model);
            }
            if (prompt !== void 0) {
              localVarFormParams.append("prompt", prompt);
            }
            if (responseFormat !== void 0) {
              localVarFormParams.append("response_format", responseFormat);
            }
            if (temperature !== void 0) {
              localVarFormParams.append("temperature", temperature);
            }
            if (language !== void 0) {
              localVarFormParams.append("language", language);
            }
            localVarHeaderParameter["Content-Type"] = "multipart/form-data";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Translates audio into into English.
           * @param {File} file The audio file to translate, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
           * @param {string} model ID of the model to use. Only &#x60;whisper-1&#x60; is currently available.
           * @param {string} [prompt] An optional text to guide the model\\\&#39;s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.
           * @param {string} [responseFormat] The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
           * @param {number} [temperature] The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createTranslation: (file, model, prompt, responseFormat, temperature, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("createTranslation", "file", file);
            common_1.assertParamExists("createTranslation", "model", model);
            const localVarPath = `/audio/translations`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
            if (file !== void 0) {
              localVarFormParams.append("file", file);
            }
            if (model !== void 0) {
              localVarFormParams.append("model", model);
            }
            if (prompt !== void 0) {
              localVarFormParams.append("prompt", prompt);
            }
            if (responseFormat !== void 0) {
              localVarFormParams.append("response_format", responseFormat);
            }
            if (temperature !== void 0) {
              localVarFormParams.append("temperature", temperature);
            }
            localVarHeaderParameter["Content-Type"] = "multipart/form-data";
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Delete a file.
           * @param {string} fileId The ID of the file to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          deleteFile: (fileId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("deleteFile", "fileId", fileId);
            const localVarPath = `/files/{file_id}`.replace(`{${"file_id"}}`, encodeURIComponent(String(fileId)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "DELETE" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Delete a fine-tuned model. You must have the Owner role in your organization.
           * @param {string} model The model to delete
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          deleteModel: (model, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("deleteModel", "model", model);
            const localVarPath = `/models/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(model)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "DELETE" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Returns the contents of the specified file
           * @param {string} fileId The ID of the file to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          downloadFile: (fileId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("downloadFile", "fileId", fileId);
            const localVarPath = `/files/{file_id}/content`.replace(`{${"file_id"}}`, encodeURIComponent(String(fileId)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          listEngines: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/engines`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Returns a list of files that belong to the user\'s organization.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listFiles: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/files`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Get fine-grained status updates for a fine-tune job.
           * @param {string} fineTuneId The ID of the fine-tune job to get events for.
           * @param {boolean} [stream] Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a &#x60;data: [DONE]&#x60; message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listFineTuneEvents: (fineTuneId, stream, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("listFineTuneEvents", "fineTuneId", fineTuneId);
            const localVarPath = `/fine-tunes/{fine_tune_id}/events`.replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (stream !== void 0) {
              localVarQueryParameter["stream"] = stream;
            }
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary List your organization\'s fine-tuning jobs
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listFineTunes: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/fine-tunes`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Lists the currently available models, and provides basic information about each one such as the owner and availability.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listModels: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/models`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Retrieves a model instance, providing basic information about it such as the owner and availability.
           * @param {string} engineId The ID of the engine to use for this request
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          retrieveEngine: (engineId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("retrieveEngine", "engineId", engineId);
            const localVarPath = `/engines/{engine_id}`.replace(`{${"engine_id"}}`, encodeURIComponent(String(engineId)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Returns information about a specific file.
           * @param {string} fileId The ID of the file to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          retrieveFile: (fileId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("retrieveFile", "fileId", fileId);
            const localVarPath = `/files/{file_id}`.replace(`{${"file_id"}}`, encodeURIComponent(String(fileId)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)
           * @param {string} fineTuneId The ID of the fine-tune job
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          retrieveFineTune: (fineTuneId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("retrieveFineTune", "fineTuneId", fineTuneId);
            const localVarPath = `/fine-tunes/{fine_tune_id}`.replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          }),
          /**
           *
           * @summary Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
           * @param {string} model The ID of the model to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          retrieveModel: (model, options = {}) => __awaiter(this, void 0, void 0, function* () {
            common_1.assertParamExists("retrieveModel", "model", model);
            const localVarPath = `/models/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(model)));
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration2) {
              baseOptions = configuration2.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
              url: common_1.toPathString(localVarUrlObj),
              options: localVarRequestOptions
            };
          })
        };
      };
      exports.OpenAIApiFp = function(configuration2) {
        const localVarAxiosParamCreator = exports.OpenAIApiAxiosParamCreator(configuration2);
        return {
          /**
           *
           * @summary Immediately cancel a fine-tune job.
           * @param {string} fineTuneId The ID of the fine-tune job to cancel
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          cancelFineTune(fineTuneId, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.cancelFineTune(fineTuneId, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
           * @param {CreateAnswerRequest} createAnswerRequest
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          createAnswer(createAnswerRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createAnswer(createAnswerRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Creates a completion for the chat message
           * @param {CreateChatCompletionRequest} createChatCompletionRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createChatCompletion(createChatCompletionRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createChatCompletion(createChatCompletionRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Classifies the specified `query` using provided examples.  The endpoint first [searches](/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](/docs/api-reference/completions) endpoint.  Labeled examples can be provided via an uploaded `file`, or explicitly listed in the request using the `examples` parameter for quick tests and small scale use cases.
           * @param {CreateClassificationRequest} createClassificationRequest
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          createClassification(createClassificationRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createClassification(createClassificationRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Creates a completion for the provided prompt and parameters
           * @param {CreateCompletionRequest} createCompletionRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createCompletion(createCompletionRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createCompletion(createCompletionRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Creates a new edit for the provided input, instruction, and parameters.
           * @param {CreateEditRequest} createEditRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createEdit(createEditRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createEdit(createEditRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Creates an embedding vector representing the input text.
           * @param {CreateEmbeddingRequest} createEmbeddingRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createEmbedding(createEmbeddingRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createEmbedding(createEmbeddingRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.
           * @param {File} file Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.  If the &#x60;purpose&#x60; is set to \\\&quot;fine-tune\\\&quot;, each line is a JSON record with \\\&quot;prompt\\\&quot; and \\\&quot;completion\\\&quot; fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data).
           * @param {string} purpose The intended purpose of the uploaded documents.  Use \\\&quot;fine-tune\\\&quot; for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createFile(file, purpose, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createFile(file, purpose, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)
           * @param {CreateFineTuneRequest} createFineTuneRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createFineTune(createFineTuneRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createFineTune(createFineTuneRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Creates an image given a prompt.
           * @param {CreateImageRequest} createImageRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createImage(createImageRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createImage(createImageRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Creates an edited or extended image given an original image and a prompt.
           * @param {File} image The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
           * @param {string} prompt A text description of the desired image(s). The maximum length is 1000 characters.
           * @param {File} [mask] An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where &#x60;image&#x60; should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as &#x60;image&#x60;.
           * @param {number} [n] The number of images to generate. Must be between 1 and 10.
           * @param {string} [size] The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
           * @param {string} [responseFormat] The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
           * @param {string} [user] A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createImageEdit(image, prompt, mask, n2, size, responseFormat, user, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createImageEdit(image, prompt, mask, n2, size, responseFormat, user, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Creates a variation of a given image.
           * @param {File} image The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
           * @param {number} [n] The number of images to generate. Must be between 1 and 10.
           * @param {string} [size] The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
           * @param {string} [responseFormat] The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
           * @param {string} [user] A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createImageVariation(image, n2, size, responseFormat, user, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createImageVariation(image, n2, size, responseFormat, user, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Classifies if text violates OpenAI\'s Content Policy
           * @param {CreateModerationRequest} createModerationRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createModeration(createModerationRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createModeration(createModerationRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.  To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.  The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
           * @param {string} engineId The ID of the engine to use for this request.  You can select one of &#x60;ada&#x60;, &#x60;babbage&#x60;, &#x60;curie&#x60;, or &#x60;davinci&#x60;.
           * @param {CreateSearchRequest} createSearchRequest
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          createSearch(engineId, createSearchRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createSearch(engineId, createSearchRequest, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Transcribes audio into the input language.
           * @param {File} file The audio file to transcribe, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
           * @param {string} model ID of the model to use. Only &#x60;whisper-1&#x60; is currently available.
           * @param {string} [prompt] An optional text to guide the model\\\&#39;s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
           * @param {string} [responseFormat] The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
           * @param {number} [temperature] The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
           * @param {string} [language] The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createTranscription(file, model, prompt, responseFormat, temperature, language, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Translates audio into into English.
           * @param {File} file The audio file to translate, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
           * @param {string} model ID of the model to use. Only &#x60;whisper-1&#x60; is currently available.
           * @param {string} [prompt] An optional text to guide the model\\\&#39;s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.
           * @param {string} [responseFormat] The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
           * @param {number} [temperature] The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createTranslation(file, model, prompt, responseFormat, temperature, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.createTranslation(file, model, prompt, responseFormat, temperature, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Delete a file.
           * @param {string} fileId The ID of the file to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          deleteFile(fileId, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteFile(fileId, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Delete a fine-tuned model. You must have the Owner role in your organization.
           * @param {string} model The model to delete
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          deleteModel(model, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteModel(model, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Returns the contents of the specified file
           * @param {string} fileId The ID of the file to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          downloadFile(fileId, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.downloadFile(fileId, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          listEngines(options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.listEngines(options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Returns a list of files that belong to the user\'s organization.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listFiles(options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.listFiles(options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Get fine-grained status updates for a fine-tune job.
           * @param {string} fineTuneId The ID of the fine-tune job to get events for.
           * @param {boolean} [stream] Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a &#x60;data: [DONE]&#x60; message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listFineTuneEvents(fineTuneId, stream, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.listFineTuneEvents(fineTuneId, stream, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary List your organization\'s fine-tuning jobs
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listFineTunes(options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.listFineTunes(options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Lists the currently available models, and provides basic information about each one such as the owner and availability.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listModels(options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.listModels(options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Retrieves a model instance, providing basic information about it such as the owner and availability.
           * @param {string} engineId The ID of the engine to use for this request
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          retrieveEngine(engineId, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.retrieveEngine(engineId, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Returns information about a specific file.
           * @param {string} fileId The ID of the file to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          retrieveFile(fileId, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.retrieveFile(fileId, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)
           * @param {string} fineTuneId The ID of the fine-tune job
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          retrieveFineTune(fineTuneId, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.retrieveFineTune(fineTuneId, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          },
          /**
           *
           * @summary Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
           * @param {string} model The ID of the model to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          retrieveModel(model, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const localVarAxiosArgs = yield localVarAxiosParamCreator.retrieveModel(model, options);
              return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
            });
          }
        };
      };
      exports.OpenAIApiFactory = function(configuration2, basePath, axios) {
        const localVarFp = exports.OpenAIApiFp(configuration2);
        return {
          /**
           *
           * @summary Immediately cancel a fine-tune job.
           * @param {string} fineTuneId The ID of the fine-tune job to cancel
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          cancelFineTune(fineTuneId, options) {
            return localVarFp.cancelFineTune(fineTuneId, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
           * @param {CreateAnswerRequest} createAnswerRequest
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          createAnswer(createAnswerRequest, options) {
            return localVarFp.createAnswer(createAnswerRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Creates a completion for the chat message
           * @param {CreateChatCompletionRequest} createChatCompletionRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createChatCompletion(createChatCompletionRequest, options) {
            return localVarFp.createChatCompletion(createChatCompletionRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Classifies the specified `query` using provided examples.  The endpoint first [searches](/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](/docs/api-reference/completions) endpoint.  Labeled examples can be provided via an uploaded `file`, or explicitly listed in the request using the `examples` parameter for quick tests and small scale use cases.
           * @param {CreateClassificationRequest} createClassificationRequest
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          createClassification(createClassificationRequest, options) {
            return localVarFp.createClassification(createClassificationRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Creates a completion for the provided prompt and parameters
           * @param {CreateCompletionRequest} createCompletionRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createCompletion(createCompletionRequest, options) {
            return localVarFp.createCompletion(createCompletionRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Creates a new edit for the provided input, instruction, and parameters.
           * @param {CreateEditRequest} createEditRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createEdit(createEditRequest, options) {
            return localVarFp.createEdit(createEditRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Creates an embedding vector representing the input text.
           * @param {CreateEmbeddingRequest} createEmbeddingRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createEmbedding(createEmbeddingRequest, options) {
            return localVarFp.createEmbedding(createEmbeddingRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.
           * @param {File} file Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.  If the &#x60;purpose&#x60; is set to \\\&quot;fine-tune\\\&quot;, each line is a JSON record with \\\&quot;prompt\\\&quot; and \\\&quot;completion\\\&quot; fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data).
           * @param {string} purpose The intended purpose of the uploaded documents.  Use \\\&quot;fine-tune\\\&quot; for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createFile(file, purpose, options) {
            return localVarFp.createFile(file, purpose, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)
           * @param {CreateFineTuneRequest} createFineTuneRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createFineTune(createFineTuneRequest, options) {
            return localVarFp.createFineTune(createFineTuneRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Creates an image given a prompt.
           * @param {CreateImageRequest} createImageRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createImage(createImageRequest, options) {
            return localVarFp.createImage(createImageRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Creates an edited or extended image given an original image and a prompt.
           * @param {File} image The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
           * @param {string} prompt A text description of the desired image(s). The maximum length is 1000 characters.
           * @param {File} [mask] An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where &#x60;image&#x60; should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as &#x60;image&#x60;.
           * @param {number} [n] The number of images to generate. Must be between 1 and 10.
           * @param {string} [size] The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
           * @param {string} [responseFormat] The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
           * @param {string} [user] A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createImageEdit(image, prompt, mask, n2, size, responseFormat, user, options) {
            return localVarFp.createImageEdit(image, prompt, mask, n2, size, responseFormat, user, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Creates a variation of a given image.
           * @param {File} image The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
           * @param {number} [n] The number of images to generate. Must be between 1 and 10.
           * @param {string} [size] The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
           * @param {string} [responseFormat] The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
           * @param {string} [user] A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createImageVariation(image, n2, size, responseFormat, user, options) {
            return localVarFp.createImageVariation(image, n2, size, responseFormat, user, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Classifies if text violates OpenAI\'s Content Policy
           * @param {CreateModerationRequest} createModerationRequest
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createModeration(createModerationRequest, options) {
            return localVarFp.createModeration(createModerationRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.  To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.  The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
           * @param {string} engineId The ID of the engine to use for this request.  You can select one of &#x60;ada&#x60;, &#x60;babbage&#x60;, &#x60;curie&#x60;, or &#x60;davinci&#x60;.
           * @param {CreateSearchRequest} createSearchRequest
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          createSearch(engineId, createSearchRequest, options) {
            return localVarFp.createSearch(engineId, createSearchRequest, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Transcribes audio into the input language.
           * @param {File} file The audio file to transcribe, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
           * @param {string} model ID of the model to use. Only &#x60;whisper-1&#x60; is currently available.
           * @param {string} [prompt] An optional text to guide the model\\\&#39;s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
           * @param {string} [responseFormat] The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
           * @param {number} [temperature] The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
           * @param {string} [language] The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
            return localVarFp.createTranscription(file, model, prompt, responseFormat, temperature, language, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Translates audio into into English.
           * @param {File} file The audio file to translate, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
           * @param {string} model ID of the model to use. Only &#x60;whisper-1&#x60; is currently available.
           * @param {string} [prompt] An optional text to guide the model\\\&#39;s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.
           * @param {string} [responseFormat] The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
           * @param {number} [temperature] The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          createTranslation(file, model, prompt, responseFormat, temperature, options) {
            return localVarFp.createTranslation(file, model, prompt, responseFormat, temperature, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Delete a file.
           * @param {string} fileId The ID of the file to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          deleteFile(fileId, options) {
            return localVarFp.deleteFile(fileId, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Delete a fine-tuned model. You must have the Owner role in your organization.
           * @param {string} model The model to delete
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          deleteModel(model, options) {
            return localVarFp.deleteModel(model, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Returns the contents of the specified file
           * @param {string} fileId The ID of the file to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          downloadFile(fileId, options) {
            return localVarFp.downloadFile(fileId, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          listEngines(options) {
            return localVarFp.listEngines(options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Returns a list of files that belong to the user\'s organization.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listFiles(options) {
            return localVarFp.listFiles(options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Get fine-grained status updates for a fine-tune job.
           * @param {string} fineTuneId The ID of the fine-tune job to get events for.
           * @param {boolean} [stream] Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a &#x60;data: [DONE]&#x60; message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listFineTuneEvents(fineTuneId, stream, options) {
            return localVarFp.listFineTuneEvents(fineTuneId, stream, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary List your organization\'s fine-tuning jobs
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listFineTunes(options) {
            return localVarFp.listFineTunes(options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Lists the currently available models, and provides basic information about each one such as the owner and availability.
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          listModels(options) {
            return localVarFp.listModels(options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Retrieves a model instance, providing basic information about it such as the owner and availability.
           * @param {string} engineId The ID of the engine to use for this request
           * @param {*} [options] Override http request option.
           * @deprecated
           * @throws {RequiredError}
           */
          retrieveEngine(engineId, options) {
            return localVarFp.retrieveEngine(engineId, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Returns information about a specific file.
           * @param {string} fileId The ID of the file to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          retrieveFile(fileId, options) {
            return localVarFp.retrieveFile(fileId, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)
           * @param {string} fineTuneId The ID of the fine-tune job
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          retrieveFineTune(fineTuneId, options) {
            return localVarFp.retrieveFineTune(fineTuneId, options).then((request) => request(axios, basePath));
          },
          /**
           *
           * @summary Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
           * @param {string} model The ID of the model to use for this request
           * @param {*} [options] Override http request option.
           * @throws {RequiredError}
           */
          retrieveModel(model, options) {
            return localVarFp.retrieveModel(model, options).then((request) => request(axios, basePath));
          }
        };
      };
      var OpenAIApi2 = class extends base_1.BaseAPI {
        /**
         *
         * @summary Immediately cancel a fine-tune job.
         * @param {string} fineTuneId The ID of the fine-tune job to cancel
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        cancelFineTune(fineTuneId, options) {
          return exports.OpenAIApiFp(this.configuration).cancelFineTune(fineTuneId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
         * @param {CreateAnswerRequest} createAnswerRequest
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createAnswer(createAnswerRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createAnswer(createAnswerRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Creates a completion for the chat message
         * @param {CreateChatCompletionRequest} createChatCompletionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createChatCompletion(createChatCompletionRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createChatCompletion(createChatCompletionRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Classifies the specified `query` using provided examples.  The endpoint first [searches](/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](/docs/api-reference/completions) endpoint.  Labeled examples can be provided via an uploaded `file`, or explicitly listed in the request using the `examples` parameter for quick tests and small scale use cases.
         * @param {CreateClassificationRequest} createClassificationRequest
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createClassification(createClassificationRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createClassification(createClassificationRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Creates a completion for the provided prompt and parameters
         * @param {CreateCompletionRequest} createCompletionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createCompletion(createCompletionRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createCompletion(createCompletionRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Creates a new edit for the provided input, instruction, and parameters.
         * @param {CreateEditRequest} createEditRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createEdit(createEditRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createEdit(createEditRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Creates an embedding vector representing the input text.
         * @param {CreateEmbeddingRequest} createEmbeddingRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createEmbedding(createEmbeddingRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createEmbedding(createEmbeddingRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.
         * @param {File} file Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.  If the &#x60;purpose&#x60; is set to \\\&quot;fine-tune\\\&quot;, each line is a JSON record with \\\&quot;prompt\\\&quot; and \\\&quot;completion\\\&quot; fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data).
         * @param {string} purpose The intended purpose of the uploaded documents.  Use \\\&quot;fine-tune\\\&quot; for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createFile(file, purpose, options) {
          return exports.OpenAIApiFp(this.configuration).createFile(file, purpose, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)
         * @param {CreateFineTuneRequest} createFineTuneRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createFineTune(createFineTuneRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createFineTune(createFineTuneRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Creates an image given a prompt.
         * @param {CreateImageRequest} createImageRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createImage(createImageRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createImage(createImageRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Creates an edited or extended image given an original image and a prompt.
         * @param {File} image The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
         * @param {string} prompt A text description of the desired image(s). The maximum length is 1000 characters.
         * @param {File} [mask] An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where &#x60;image&#x60; should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as &#x60;image&#x60;.
         * @param {number} [n] The number of images to generate. Must be between 1 and 10.
         * @param {string} [size] The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
         * @param {string} [responseFormat] The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
         * @param {string} [user] A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createImageEdit(image, prompt, mask, n2, size, responseFormat, user, options) {
          return exports.OpenAIApiFp(this.configuration).createImageEdit(image, prompt, mask, n2, size, responseFormat, user, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Creates a variation of a given image.
         * @param {File} image The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
         * @param {number} [n] The number of images to generate. Must be between 1 and 10.
         * @param {string} [size] The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
         * @param {string} [responseFormat] The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
         * @param {string} [user] A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createImageVariation(image, n2, size, responseFormat, user, options) {
          return exports.OpenAIApiFp(this.configuration).createImageVariation(image, n2, size, responseFormat, user, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Classifies if text violates OpenAI\'s Content Policy
         * @param {CreateModerationRequest} createModerationRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createModeration(createModerationRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createModeration(createModerationRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.  To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.  The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
         * @param {string} engineId The ID of the engine to use for this request.  You can select one of &#x60;ada&#x60;, &#x60;babbage&#x60;, &#x60;curie&#x60;, or &#x60;davinci&#x60;.
         * @param {CreateSearchRequest} createSearchRequest
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createSearch(engineId, createSearchRequest, options) {
          return exports.OpenAIApiFp(this.configuration).createSearch(engineId, createSearchRequest, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Transcribes audio into the input language.
         * @param {File} file The audio file to transcribe, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
         * @param {string} model ID of the model to use. Only &#x60;whisper-1&#x60; is currently available.
         * @param {string} [prompt] An optional text to guide the model\\\&#39;s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
         * @param {string} [responseFormat] The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
         * @param {number} [temperature] The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
         * @param {string} [language] The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
          return exports.OpenAIApiFp(this.configuration).createTranscription(file, model, prompt, responseFormat, temperature, language, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Translates audio into into English.
         * @param {File} file The audio file to translate, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
         * @param {string} model ID of the model to use. Only &#x60;whisper-1&#x60; is currently available.
         * @param {string} [prompt] An optional text to guide the model\\\&#39;s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.
         * @param {string} [responseFormat] The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
         * @param {number} [temperature] The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        createTranslation(file, model, prompt, responseFormat, temperature, options) {
          return exports.OpenAIApiFp(this.configuration).createTranslation(file, model, prompt, responseFormat, temperature, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Delete a file.
         * @param {string} fileId The ID of the file to use for this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        deleteFile(fileId, options) {
          return exports.OpenAIApiFp(this.configuration).deleteFile(fileId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Delete a fine-tuned model. You must have the Owner role in your organization.
         * @param {string} model The model to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        deleteModel(model, options) {
          return exports.OpenAIApiFp(this.configuration).deleteModel(model, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Returns the contents of the specified file
         * @param {string} fileId The ID of the file to use for this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        downloadFile(fileId, options) {
          return exports.OpenAIApiFp(this.configuration).downloadFile(fileId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        listEngines(options) {
          return exports.OpenAIApiFp(this.configuration).listEngines(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Returns a list of files that belong to the user\'s organization.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        listFiles(options) {
          return exports.OpenAIApiFp(this.configuration).listFiles(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Get fine-grained status updates for a fine-tune job.
         * @param {string} fineTuneId The ID of the fine-tune job to get events for.
         * @param {boolean} [stream] Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a &#x60;data: [DONE]&#x60; message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        listFineTuneEvents(fineTuneId, stream, options) {
          return exports.OpenAIApiFp(this.configuration).listFineTuneEvents(fineTuneId, stream, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary List your organization\'s fine-tuning jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        listFineTunes(options) {
          return exports.OpenAIApiFp(this.configuration).listFineTunes(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Lists the currently available models, and provides basic information about each one such as the owner and availability.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        listModels(options) {
          return exports.OpenAIApiFp(this.configuration).listModels(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Retrieves a model instance, providing basic information about it such as the owner and availability.
         * @param {string} engineId The ID of the engine to use for this request
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        retrieveEngine(engineId, options) {
          return exports.OpenAIApiFp(this.configuration).retrieveEngine(engineId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Returns information about a specific file.
         * @param {string} fileId The ID of the file to use for this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        retrieveFile(fileId, options) {
          return exports.OpenAIApiFp(this.configuration).retrieveFile(fileId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)
         * @param {string} fineTuneId The ID of the fine-tune job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        retrieveFineTune(fineTuneId, options) {
          return exports.OpenAIApiFp(this.configuration).retrieveFineTune(fineTuneId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         *
         * @summary Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
         * @param {string} model The ID of the model to use for this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof OpenAIApi
         */
        retrieveModel(model, options) {
          return exports.OpenAIApiFp(this.configuration).retrieveModel(model, options).then((request) => request(this.axios, this.basePath));
        }
      };
      exports.OpenAIApi = OpenAIApi2;
    }
  });

  // node_modules/openai/package.json
  var require_package = __commonJS({
    "node_modules/openai/package.json"(exports, module) {
      module.exports = {
        name: "openai",
        version: "3.2.1",
        description: "Node.js library for the OpenAI API",
        repository: {
          type: "git",
          url: "git@github.com:openai/openai-node.git"
        },
        keywords: [
          "openai",
          "open",
          "ai",
          "gpt-3",
          "gpt3"
        ],
        author: "OpenAI",
        license: "MIT",
        main: "./dist/index.js",
        types: "./dist/index.d.ts",
        scripts: {
          build: "tsc --outDir dist/"
        },
        dependencies: {
          axios: "^0.26.0",
          "form-data": "^4.0.0"
        },
        devDependencies: {
          "@types/node": "^12.11.5",
          typescript: "^3.6.4"
        }
      };
    }
  });

  // node_modules/form-data/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/form-data/lib/browser.js"(exports, module) {
      init_define_process_env();
      module.exports = typeof self == "object" ? self.FormData : window.FormData;
    }
  });

  // node_modules/openai/dist/configuration.js
  var require_configuration = __commonJS({
    "node_modules/openai/dist/configuration.js"(exports) {
      "use strict";
      init_define_process_env();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Configuration = void 0;
      var packageJson = require_package();
      var Configuration2 = class {
        constructor(param = {}) {
          this.apiKey = param.apiKey;
          this.organization = param.organization;
          this.username = param.username;
          this.password = param.password;
          this.accessToken = param.accessToken;
          this.basePath = param.basePath;
          this.baseOptions = param.baseOptions;
          this.formDataCtor = param.formDataCtor;
          if (!this.baseOptions) {
            this.baseOptions = {};
          }
          this.baseOptions.headers = Object.assign({ "User-Agent": `OpenAI/NodeJS/${packageJson.version}`, "Authorization": `Bearer ${this.apiKey}` }, this.baseOptions.headers);
          if (this.organization) {
            this.baseOptions.headers["OpenAI-Organization"] = this.organization;
          }
          if (!this.formDataCtor) {
            this.formDataCtor = require_browser();
          }
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        isJsonMime(mime) {
          const jsonMime = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
          return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
        }
      };
      exports.Configuration = Configuration2;
    }
  });

  // node_modules/openai/dist/index.js
  var require_dist = __commonJS({
    "node_modules/openai/dist/index.js"(exports) {
      "use strict";
      init_define_process_env();
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o3, m3, k3, k22) {
        if (k22 === void 0)
          k22 = k3;
        Object.defineProperty(o3, k22, { enumerable: true, get: function() {
          return m3[k3];
        } });
      } : function(o3, m3, k3, k22) {
        if (k22 === void 0)
          k22 = k3;
        o3[k22] = m3[k3];
      });
      var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
        for (var p2 in m3)
          if (p2 !== "default" && !exports2.hasOwnProperty(p2))
            __createBinding(exports2, m3, p2);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_api(), exports);
      __exportStar(require_configuration(), exports);
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    async function runCompletion(prompt) {
      try {
        const completion = await openai.createChatCompletion({
          //model: "text-davinci-003",
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a design assistant helping a product designer working in Figma using the Figma plugin API." },
            { role: "user", content: prompt + ". Wrap any code examples in <code></code> blocks." }
          ]
        });
        console.log(completion.data.choices[0].message.content);
        emit("RUN_CODE", completion.data.choices[0].message.content);
      } catch (e3) {
        console.log("Error getting GPT completion: ", e3);
        throw e3;
      }
    }
    const [countString, setCountString] = h2("What up?");
    const handleCreateRectanglesButtonClick = T2(
      function() {
        if (countString !== null) {
          runCompletion(countString);
        }
      },
      [countString]
    );
    const handleCloseButtonClick = T2(function() {
      emit("CLOSE");
    }, []);
    return /* @__PURE__ */ y(Container, { space: "medium" }, /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(Text, null, /* @__PURE__ */ y(Muted, null, "Prompt")), /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(
      TextboxMultiline,
      {
        onValueInput: setCountString,
        value: countString,
        variant: "border"
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ y(Columns, { space: "extraSmall" }, /* @__PURE__ */ y(Button, { fullWidth: true, onClick: handleCreateRectanglesButtonClick }, "Create")), /* @__PURE__ */ y(VerticalSpace, { space: "small" }));
  }
  var Configuration, OpenAIApi, configuration, openai, ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_define_process_env();
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      ({ Configuration, OpenAIApi } = require_dist());
      configuration = new Configuration({
        //apiKey: "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"
        apiKey: define_process_env_default.OPENAI_API_KEY
      });
      openai = new OpenAIApi(configuration);
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  init_define_process_env();
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
