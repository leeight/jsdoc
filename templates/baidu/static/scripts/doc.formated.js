function g(a) {
    throw a;
}
var i = void 0,
    j = !0,
    k = null,
    r = !1,
    s, aa = aa || {},
    t = this,
    ba = function(a) {
        for (var a = a.split("."), b = t, c; c = a.shift();) if (b[c] != k) b = b[c];
        else return k;
        return b
    },
    ca = function() {},
    da = function(a) {
        a.getInstance = function() {
            return a.instance_ ? a.instance_ : a.instance_ = new a
        }
    },
    fa = function(a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    },
    ga = function(a) {
        return a !== i
    },
    ha = function(a) {
        return "array" == fa(a)
    },
    ia = function(a) {
        var b = fa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    },
    u = function(a) {
        return "string" == typeof a
    },
    ja = function(a) {
        return "function" == fa(a)
    },
    ka = function(a) {
        var b = typeof a;
        return "object" == b && a != k || "function" == b
    },
    na = function(a) {
        return a[la] || (a[la] = ++ma)
    },
    la = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
    ma = 0,
    oa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    pa = function(a, b, c) {
        a || g(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    },
    v = function(a, b, c) {
        v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
        return v.apply(k, arguments)
    },
    qa = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    },
    ra = Date.now ||
function() {
    return +new Date
}, x = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.superClass_ = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};
Function.prototype.bind = Function.prototype.bind ||
function(a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return v.apply(k, c)
    }
    return v(this, a)
};
var sa = function(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, sa) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
x(sa, Error);
sa.prototype.name = "CustomError";
var ta = function(a, b) {
        for (var c = 1; c < arguments.length; c++) var d = String(arguments[c]).replace(/\$/g, "$$$$"),
            a = a.replace(/\%s/, d);
        return a
    },
    ua = function(a) {
        return /^[\s\xa0]*$/.test(a == k ? "" : String(a))
    },
    va = function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    },
    Ba = function(a) {
        if (!wa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(xa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ya, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(za, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Aa, "&quot;"));
        return a
    },
    xa = /&/g,
    ya = /</g,
    za = />/g,
    Aa = /\"/g,
    wa = /[&<>\"]/,
    Ca = /&([^;\s<&]+);?/g,
    Da = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
var Ea = function(a, b) {
        b.unshift(a);
        sa.call(this, ta.apply(k, b));
        b.shift()
    };
x(Ea, sa);
Ea.prototype.name = "AssertionError";
var Fa = function(a, b, c, d) {
        var f = "Assertion failed";
        if (c) var f = f + (": " + c),
            e = d;
        else a && (f += ": " + a, e = b);
        g(new Ea("" + f, e || []))
    },
    Ga = function(a, b, c) {
        a || Fa("", k, b, Array.prototype.slice.call(arguments, 2))
    },
    Ha = function(a, b) {
        g(new Ea("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
    },
    Ia = function(a, b, c) {
        ka(a) || Fa("Expected object but got %s: %s.", [fa(a), a], b, Array.prototype.slice.call(arguments, 2))
    },
    Ja = function(a, b, c, d) {
        a instanceof b || Fa("instanceof check failed.", k, c, Array.prototype.slice.call(arguments, 3))
    };
var Ka = Array.prototype,
    La = Ka.indexOf ?
function(a, b, c) {
    Ga(a.length != k);
    return Ka.indexOf.call(a, b, c)
} : function(a, b, c) {
    c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (u(a)) return !u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
    for (; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1
}, Ma = Ka.forEach ?
function(a, b, c) {
    Ga(a.length != k);
    Ka.forEach.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, f = u(a) ? a.split("") : a, e = 0; e < d; e++) e in f && b.call(c, f[e], e, a)
}, Na = Ka.filter ?
function(a, b, c) {
    Ga(a.length != k);
    return Ka.filter.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, f = [], e = 0, h = u(a) ? a.split("") : a, l = 0; l < d; l++) if (l in h) {
        var m = h[l];
        b.call(c, m, l, a) && (f[e++] = m)
    }
    return f
}, Oa = Ka.map ?
function(a, b, c) {
    Ga(a.length != k);
    return Ka.map.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, f = Array(d), e = u(a) ? a.split("") : a, h = 0; h < d; h++) h in e && (f[h] = b.call(c, e[h], h, a));
    return f
}, Pa = Ka.every ?
function(a, b, c) {
    Ga(a.length != k);
    return Ka.every.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, f = u(a) ? a.split("") : a, e = 0; e < d; e++) if (e in f && !b.call(c, f[e], e, a)) return r;
    return j
}, Qa = function(a, b) {
    return 0 <= La(a, b)
}, Ra = function(a, b) {
    var c = La(a, b);
    0 <= c && (Ga(a.length != k), Ka.splice.call(a, c, 1))
}, Sa = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}, Ua = function(a, b, c, d) {
    Ga(a.length != k);
    Ka.splice.apply(a, Ta(arguments, 1))
}, Ta = function(a, b, c) {
    Ga(a.length != k);
    return 2 >= arguments.length ? Ka.slice.call(a, b) : Ka.slice.call(a, b, c)
};
var Va, Wa = function(a) {
        a = a.className;
        return u(a) && a.match(/\S+/g) || []
    },
    z = function(a, b) {
        for (var c = Wa(a), d = Ta(arguments, 1), f = c.length + d.length, e = c, h = 0; h < d.length; h++) Qa(e, d[h]) || e.push(d[h]);
        a.className = c.join(" ");
        return c.length == f
    },
    Xa = function(a, b) {
        var c = Wa(a),
            d = Ta(arguments, 1),
            f, e = d;
        f = Na(c, function(a) {
            return !Qa(e, a)
        });
        a.className = f.join(" ");
        return f.length == c.length - d.length
    },
    Ya = function(a, b, c) {
        c ? z(a, b) : Xa(a, b)
    };
var A = function(a, b) {
        this.x = ga(a) ? a : 0;
        this.y = ga(b) ? b : 0
    };
A.prototype.clone = function() {
    return new A(this.x, this.y)
};
A.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")"
};
var Za = function(a, b) {
        return new A(a.x - b.x, a.y - b.y)
    };
var $a = function(a, b) {
        this.width = a;
        this.height = b
    };
$a.prototype.clone = function() {
    return new $a(this.width, this.height)
};
$a.prototype.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
};
$a.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
$a.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var bb = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    },
    cb = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    },
    db = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    },
    eb = function(a) {
        for (var b in a) return r;
        return j
    },
    fb = function(a, b, c) {
        b in a && g(Error('The object already contains the key "' + b + '"'));
        a[b] = c
    },
    gb = function(a) {
        var b = {},
            c;
        for (c in a) b[a[c]] = c;
        return b
    },
    hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    ib = function(a, b) {
        for (var c, d, f = 1; f < arguments.length; f++) {
            d = arguments[f];
            for (c in d) a[c] = d[c];
            for (var e = 0; e < hb.length; e++) c = hb[e], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
var jb, kb, lb, mb, nb, ob = function() {
        return t.navigator ? t.navigator.userAgent : k
    },
    pb = function() {
        return t.navigator
    };
mb = lb = kb = jb = r;
var qb;
if (qb = ob()) {
    var rb = pb();
    jb = 0 == qb.indexOf("Opera");
    kb = !jb && -1 != qb.indexOf("MSIE");
    lb = !jb && -1 != qb.indexOf("WebKit");
    mb = !jb && !lb && "Gecko" == rb.product
}
var sb = jb,
    E = kb,
    F = mb,
    G = lb,
    tb = pb();
nb = -1 != (tb && tb.platform || "").indexOf("Mac");
var ub = !! pb() && -1 != (pb().appVersion || "").indexOf("X11"),
    vb;
a: {
    var wb = "",
        xb;
    if (sb && t.opera) var yb = t.opera.version,
        wb = "function" == typeof yb ? yb() : yb;
    else if (F ? xb = /rv\:([^\);]+)(\)|;)/ : E ? xb = /MSIE\s+([^\);]+)(\)|;)/ : G && (xb = /WebKit\/(\S+)/), xb) var zb = xb.exec(ob()),
        wb = zb ? zb[1] : "";
    if (E) {
        var Ab, Bb = t.document;
        Ab = Bb ? Bb.documentMode : i;
        if (Ab > parseFloat(wb)) {
            vb = String(Ab);
            break a
        }
    }
    vb = wb
}
var Cb = vb,
    Db = {},
    H = function(a) {
        var b;
        if (!(b = Db[a])) {
            b = 0;
            for (var c = va(String(Cb)).split("."), d = va(String(a)).split("."), f = Math.max(c.length, d.length), e = 0; 0 == b && e < f; e++) {
                var h = c[e] || "",
                    l = d[e] || "",
                    m = RegExp("(\\d*)(\\D*)", "g"),
                    n = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var p = m.exec(h) || ["", "", ""],
                        q = n.exec(l) || ["", "", ""];
                    if (0 == p[0].length && 0 == q[0].length) break;
                    b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == q[2].length) ? -1 : (0 == p[2].length) > (0 == q[2].length) ? 1 : 0) || (p[2] < q[2] ? -1 : p[2] > q[2] ? 1 : 0)
                } while (0 == b)
            }
            b = Db[a] = 0 <= b
        }
        return b
    },
    Eb = {},
    Fb = function(a) {
        return Eb[a] || (Eb[a] = E && !! document.documentMode && document.documentMode >= a)
    };
var Gb = !E || Fb(9),
    Hb = !F && !E || E && Fb(9) || F && H("1.9.1"),
    Ib = E && !H("9");
var Kb = function(a) {
        return a ? new Jb(I(a)) : Va || (Va = new Jb)
    },
    Lb = function(a) {
        return u(a) ? document.getElementById(a) : a
    },
    Mb = function(a, b, c) {
        var d = document,
            c = c || d,
            a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, f = 0, e = 0, h; h = c[e]; e++) a == h.nodeName && (d[f++] = h);
                d.length = f;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (e = f = 0; h = c[e]; e++) a = h.className, "function" == typeof a.split && Qa(a.split(/\s+/), b) && (d[f++] = h);
            d.length = f;
            return d
        }
        return c
    },
    Nb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    },
    Pb = function(a, b, c) {
        return Ob(document, arguments)
    },
    Ob = function(a, b) {
        var c = b[0],
            d = b[1];
        if (!Gb && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', Ba(d.name), '"');
            if (d.type) {
                c.push(' type="', Ba(d.type), '"');
                var f = {};
                ib(f, d);
                delete f.type;
                d = f
            }
            c.push(">");
            c = c.join("")
        }
        var e = a.createElement(c);
        d && (u(d) ? e.className = d : ha(d) ? z.apply(k, [e].concat(d)) : bb(d, function(a, b) {
            "style" == b ? e.style.cssText = a : "class" == b ? e.className = a : "for" == b ? e.htmlFor = a : b in Nb ? e.setAttribute(Nb[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? e.setAttribute(b, a) : e[b] = a
        }));
        2 < b.length && Qb(a, e, b, 2);
        return e
    },
    Qb = function(a, b, c, d) {
        function f(c) {
            c && b.appendChild(u(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var e = c[d];
            if (ia(e) && !(ka(e) && 0 < e.nodeType)) {
                var h;
                a: {
                    if (e && "number" == typeof e.length) {
                        if (ka(e)) {
                            h = "function" == typeof e.item || "string" == typeof e.item;
                            break a
                        }
                        if (ja(e)) {
                            h = "function" == typeof e.item;
                            break a
                        }
                    }
                    h = r
                }
                Ma(h ? Sa(e) : e, f)
            } else f(e)
        }
    },
    Rb = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    },
    Sb = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : k
    },
    Tb = function(a) {
        for (; a && 1 != a.nodeType;) a = a.nextSibling;
        return a
    },
    Ub = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    },
    I = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    },
    Vb = function(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else Rb(a), a.appendChild(I(a).createTextNode(b))
    },
    Wb = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    Xb = {
        IMG: " ",
        BR: "\n"
    },
    Yb = function(a) {
        var b = a.getAttributeNode("tabindex");
        return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : r
    },
    $b = function(a) {
        if (Ib && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Zb(a, b, j);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Ib || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    },
    ac = function(a) {
        var b = [];
        Zb(a, b, r);
        return b.join("")
    },
    Zb = function(a, b, c) {
        if (!(a.nodeName in Wb)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in Xb) b.push(Xb[a.nodeName]);
        else for (a = a.firstChild; a;) Zb(a, b, c), a = a.nextSibling
    },
    Jb = function(a) {
        this.document_ = a || t.document || document
    };
s = Jb.prototype;
s.getDomHelper = Kb;
s.getElement = function(a) {
    return u(a) ? this.document_.getElementById(a) : a
};
s.createDom = function(a, b, c) {
    return Ob(this.document_, arguments)
};
s.createElement = function(a) {
    return this.document_.createElement(a)
};
s.createTextNode = function(a) {
    return this.document_.createTextNode(a)
};
var bc = function(a) {
        return "CSS1Compat" == a.document_.compatMode
    },
    cc = function(a) {
        var b = a.document_,
            a = !G && "CSS1Compat" == b.compatMode ? b.documentElement : b.body,
            b = b.parentWindow || b.defaultView;
        return new A(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    };
s = Jb.prototype;
s.appendChild = function(a, b) {
    a.appendChild(b)
};
s.append = function(a, b) {
    Qb(I(a), a, arguments, 1)
};
s.removeChildren = Rb;
s.removeNode = Sb;
s.getChildren = function(a) {
    return Hb && a.children != i ? a.children : Na(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
s.contains = Ub;
var dc = function(a) {
        return eval("(" + a + ")")
    };
var ec = function() {};
ec.prototype.disposed_ = r;
ec.prototype.dispose = function() {
    this.disposed_ || (this.disposed_ = j, this.disposeInternal())
};
ec.prototype.disposeInternal = function() {
    this.dependentDisposables_ && fc.apply(k, this.dependentDisposables_);
    if (this.onDisposeCallbacks_) for (; this.onDisposeCallbacks_.length;) this.onDisposeCallbacks_.shift()()
};
var gc = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    },
    fc = function(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            ia(d) ? fc.apply(k, d) : gc(d)
        }
    };
var hc = function(a) {
        hc[" "](a);
        return a
    };
hc[" "] = ca;
var ic = !E || Fb(9),
    jc = !E || Fb(9),
    kc = E && !H("9");
!G || H("528");
F && H("1.9b") || E && H("8") || sb && H("9.5") || G && H("528");
F && !H("8") || E && H("9");
var lc = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    };
s = lc.prototype;
s.disposeInternal = function() {};
s.dispose = function() {};
s.propagationStopped_ = r;
s.defaultPrevented = r;
s.returnValue_ = j;
s.stopPropagation = function() {
    this.propagationStopped_ = j
};
s.preventDefault = function() {
    this.defaultPrevented = j;
    this.returnValue_ = r
};
var mc = function(a, b) {
        a && this.init(a, b)
    };
x(mc, lc);
var nc = [1, 4, 2];
s = mc.prototype;
s.target = k;
s.relatedTarget = k;
s.offsetX = 0;
s.offsetY = 0;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.button = 0;
s.keyCode = 0;
s.charCode = 0;
s.ctrlKey = r;
s.altKey = r;
s.shiftKey = r;
s.metaKey = r;
s.platformModifierKey = r;
s.event_ = k;
s.init = function(a, b) {
    var c = this.type = a.type;
    lc.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (F) {
            var f;
            a: {
                try {
                    hc(d.nodeName);
                    f = j;
                    break a
                } catch (e) {}
                f = r
            }
            f || (d = k)
        }
    } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = G || a.offsetX !== i ? a.offsetX : a.layerX;
    this.offsetY = G || a.offsetY !== i ? a.offsetY : a.layerY;
    this.clientX = a.clientX !== i ? a.clientX : a.pageX;
    this.clientY = a.clientY !== i ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.platformModifierKey = nb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.event_ = a;
    a.defaultPrevented && this.preventDefault();
    delete this.propagationStopped_
};
var oc = function(a) {
        return ic ? 0 == a.event_.button : "click" == a.type ? j : !! (a.event_.button & nc[0])
    };
mc.prototype.stopPropagation = function() {
    mc.superClass_.stopPropagation.call(this);
    this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = j
};
mc.prototype.preventDefault = function() {
    mc.superClass_.preventDefault.call(this);
    var a = this.event_;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = r, kc) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
mc.prototype.getBrowserEvent = function() {
    return this.event_
};
mc.prototype.disposeInternal = function() {};
var pc = function() {},
    qc = 0;
s = pc.prototype;
s.key = 0;
s.removed = r;
s.callOnce = r;
s.init = function(a, b, c, d, f, e) {
    ja(a) ? this.isFunctionListener_ = j : a && a.handleEvent && ja(a.handleEvent) ? this.isFunctionListener_ = r : g(Error("Invalid listener argument"));
    this.listener = a;
    this.proxy = b;
    this.src = c;
    this.type = d;
    this.capture = !! f;
    this.handler = e;
    this.callOnce = r;
    this.key = ++qc;
    this.removed = r
};
s.handleEvent = function(a) {
    return this.isFunctionListener_ ? this.listener.call(this.handler || this.src, a) : this.listener.handleEvent.call(this.listener, a)
};
var rc = {},
    sc = {},
    tc = {},
    wc = {},
    L = function(a, b, c, d, f) {
        if (b) {
            if (ha(b)) {
                for (var e = 0; e < b.length; e++) L(a, b[e], c, d, f);
                return k
            }
            var d = !! d,
                h = sc;
            b in h || (h[b] = {
                count_: 0,
                remaining_: 0
            });
            h = h[b];
            d in h || (h[d] = {
                count_: 0,
                remaining_: 0
            }, h.count_++);
            var h = h[d],
                l = na(a),
                m;
            h.remaining_++;
            if (h[l]) {
                m = h[l];
                for (e = 0; e < m.length; e++) if (h = m[e], h.listener == c && h.handler == f) {
                    if (h.removed) break;
                    return m[e].key
                }
            } else m = h[l] = [], h.count_++;
            var n = xc,
                p = jc ?
            function(a) {
                return n.call(p.src, p.key, a)
            } : function(a) {
                a = n.call(p.src, p.key, a);
                if (!a) return a
            }, e = p;
            e.src = a;
            h = new pc;
            h.init(c, e, a, b, d, f);
            c = h.key;
            e.key = c;
            m.push(h);
            rc[c] = h;
            tc[l] || (tc[l] = []);
            tc[l].push(h);
            a.addEventListener ? (a == t || !a.customEvent_) && a.addEventListener(b, e, d) : a.attachEvent(b in wc ? wc[b] : wc[b] = "on" + b, e);
            return c
        }
        g(Error("Invalid event type"))
    },
    yc = function(a, b, c, d, f) {
        if (ha(b)) for (var e = 0; e < b.length; e++) yc(a, b[e], c, d, f);
        else a = L(a, b, c, d, f), rc[a].callOnce = j
    },
    zc = function(a, b, c, d, f) {
        if (ha(b)) for (var e = 0; e < b.length; e++) zc(a, b[e], c, d, f);
        else if (d = !! d, a = Ac(a, b, d)) for (e = 0; e < a.length; e++) if (a[e].listener == c && a[e].capture == d && a[e].handler == f) {
            Bc(a[e].key);
            break
        }
    },
    Bc = function(a) {
        if (!rc[a]) return r;
        var b = rc[a];
        if (b.removed) return r;
        var c = b.src,
            d = b.type,
            f = b.proxy,
            e = b.capture;
        c.removeEventListener ? (c == t || !c.customEvent_) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(d in wc ? wc[d] : wc[d] = "on" + d, f);
        c = na(c);
        tc[c] && (f = tc[c], Ra(f, b), 0 == f.length && delete tc[c]);
        b.removed = j;
        if (b = sc[d][e][c]) b.needsCleanup_ = j, Cc(d, e, c, b);
        delete rc[a];
        return j
    },
    Cc = function(a, b, c, d) {
        if (!d.locked_ && d.needsCleanup_) {
            for (var f = 0, e = 0; f < d.length; f++) d[f].removed ? d[f].proxy.src = k : (f != e && (d[e] = d[f]), e++);
            d.length = e;
            d.needsCleanup_ = r;
            0 == e && (delete sc[a][b][c], sc[a][b].count_--, 0 == sc[a][b].count_ && (delete sc[a][b], sc[a].count_--), 0 == sc[a].count_ && delete sc[a])
        }
    },
    Dc = function(a) {
        var b, c = 0,
            d = b == k;
        b = !! b;
        if (a == k) bb(tc, function(a) {
            for (var f = a.length - 1; 0 <= f; f--) {
                var e = a[f];
                if (d || b == e.capture) Bc(e.key), c++
            }
        });
        else if (a = na(a), tc[a]) for (var a = tc[a], f = a.length - 1; 0 <= f; f--) {
            var e = a[f];
            if (d || b == e.capture) Bc(e.key), c++
        }
    },
    Ac = function(a, b, c) {
        var d = sc;
        return b in d && (d = d[b], c in d && (d = d[c], a = na(a), d[a])) ? d[a] : k
    },
    Fc = function(a, b, c, d, f) {
        var e = 1,
            b = na(b);
        if (a[b]) {
            a.remaining_--;
            a = a[b];
            a.locked_ ? a.locked_++ : a.locked_ = 1;
            try {
                for (var h = a.length, l = 0; l < h; l++) {
                    var m = a[l];
                    m && !m.removed && (e &= Ec(m, f) !== r)
                }
            } finally {
                a.locked_--, Cc(c, d, b, a)
            }
        }
        return Boolean(e)
    },
    Ec = function(a, b) {
        a.callOnce && Bc(a.key);
        return a.handleEvent(b)
    },
    xc = function(a, b) {
        if (!rc[a]) return j;
        var c = rc[a],
            d = c.type,
            f = sc;
        if (!(d in f)) return j;
        var f = f[d],
            e, h;
        if (!jc) {
            e = b || ba("window.event");
            var l = j in f,
                m = r in f;
            if (l) {
                if (0 > e.keyCode || e.returnValue != i) return j;
                a: {
                    var n = r;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (p) {
                        n = j
                    }
                    if (n || e.returnValue == i) e.returnValue = j
                }
            }
            n = new mc;
            n.init(e, this);
            e = j;
            try {
                if (l) {
                    for (var q = [], y = n.currentTarget; y; y = y.parentNode) q.push(y);
                    h = f[j];
                    h.remaining_ = h.count_;
                    for (var B = q.length - 1; !n.propagationStopped_ && 0 <= B && h.remaining_; B--) n.currentTarget = q[B], e &= Fc(h, q[B], d, j, n);
                    if (m) {
                        h = f[r];
                        h.remaining_ = h.count_;
                        for (B = 0; !n.propagationStopped_ && B < q.length && h.remaining_; B++) n.currentTarget = q[B], e &= Fc(h, q[B], d, r, n)
                    }
                } else e = Ec(c, n)
            } finally {
                q && (q.length = 0)
            }
            return e
        }
        d = new mc(b, this);
        return e = Ec(c, d)
    };
var Gc = function(a) {
        this.handler_ = a;
        this.keys_ = []
    };
x(Gc, ec);
var Hc = [],
    M = function(a, b, c, d, f) {
        ha(c) || (Hc[0] = c, c = Hc);
        for (var e = 0; e < c.length; e++) {
            var h = L(b, c[e], d || a, f || r, a.handler_ || a);
            a.keys_.push(h)
        }
        return a
    },
    N = function(a, b, c, d, f, e) {
        if (ha(c)) for (var h = 0; h < c.length; h++) N(a, b, c[h], d, f, e);
        else {
            a: {
                d = d || a;
                e = e || a.handler_ || a;
                f = !! f;
                if (b = Ac(b, c, f)) for (c = 0; c < b.length; c++) if (!b[c].removed && b[c].listener == d && b[c].capture == f && b[c].handler == e) {
                    b = b[c];
                    break a
                }
                b = k
            }
            b && (b = b.key, Bc(b), Ra(a.keys_, b))
        }
        return a
    };
Gc.prototype.removeAll = function() {
    Ma(this.keys_, Bc);
    this.keys_.length = 0
};
Gc.prototype.disposeInternal = function() {
    Gc.superClass_.disposeInternal.call(this);
    this.removeAll()
};
Gc.prototype.handleEvent = function() {
    g(Error("EventHandler.handleEvent not implemented"))
};
var Ic = function() {};
x(Ic, ec);
s = Ic.prototype;
s.customEvent_ = j;
s.parentEventTarget_ = k;
s.setParentEventTarget = function(a) {
    this.parentEventTarget_ = a
};
s.addEventListener = function(a, b, c, d) {
    L(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
    zc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
    var b = a.type || a,
        c = sc;
    if (b in c) {
        if (u(a)) a = new lc(a, this);
        else if (a instanceof lc) a.target = a.target || this;
        else {
            var d = a,
                a = new lc(b, this);
            ib(a, d)
        }
        var d = 1,
            f, c = c[b],
            b = j in c,
            e;
        if (b) {
            f = [];
            for (e = this; e; e = e.parentEventTarget_) f.push(e);
            e = c[j];
            e.remaining_ = e.count_;
            for (var h = f.length - 1; !a.propagationStopped_ && 0 <= h && e.remaining_; h--) a.currentTarget = f[h], d &= Fc(e, f[h], a.type, j, a) && a.returnValue_ != r
        }
        if (r in c) if (e = c[r], e.remaining_ = e.count_, b) for (h = 0; !a.propagationStopped_ && h < f.length && e.remaining_; h++) a.currentTarget = f[h], d &= Fc(e, f[h], a.type, r, a) && a.returnValue_ != r;
        else for (f = this; !a.propagationStopped_ && f && e.remaining_; f = f.parentEventTarget_) a.currentTarget = f, d &= Fc(e, f, a.type, r, a) && a.returnValue_ != r;
        a = Boolean(d)
    } else a = j;
    return a
};
s.disposeInternal = function() {
    Ic.superClass_.disposeInternal.call(this);
    Dc(this);
    this.parentEventTarget_ = k
};
var Jc = function(a) {
        this.imageIdToUrlMap_ = {};
        this.imageIdToImageMap_ = {};
        this.handler_ = new Gc(this);
        this.parent_ = a
    };
x(Jc, Ic);
var Kc = [E ? "readystatechange" : "load", "abort", "error"];
Jc.prototype.start = function() {
    var a = this.imageIdToUrlMap_;
    Ma(db(a), function(b) {
        var c = a[b];
        if (c && (delete a[b], !this.disposed_)) {
            var d;
            d = this.parent_ ? Kb(this.parent_).createDom("img") : new Image;
            M(this.handler_, d, Kc, this.onNetworkEvent_);
            this.imageIdToImageMap_[b] = d;
            d.id = b;
            d.src = c
        }
    }, this)
};
Jc.prototype.onNetworkEvent_ = function(a) {
    var b = a.currentTarget;
    if (b) {
        if ("readystatechange" == a.type) if ("complete" == b.readyState) a.type = "load";
        else return;
        "undefined" == typeof b.naturalWidth && ("load" == a.type ? (b.naturalWidth = b.width, b.naturalHeight = b.height) : (b.naturalWidth = 0, b.naturalHeight = 0));
        this.dispatchEvent({
            type: a.type,
            target: b
        });
        if (!this.disposed_ && (a = b.id, delete this.imageIdToUrlMap_[a], b = this.imageIdToImageMap_[a])) delete this.imageIdToImageMap_[a], N(this.handler_, b, Kc, this.onNetworkEvent_), eb(this.imageIdToImageMap_) && eb(this.imageIdToUrlMap_) && this.dispatchEvent("complete")
    }
};
Jc.prototype.disposeInternal = function() {
    delete this.imageIdToUrlMap_;
    delete this.imageIdToImageMap_;
    gc(this.handler_);
    Jc.superClass_.disposeInternal.call(this)
};
var Lc = "StopIteration" in t ? t.StopIteration : Error("StopIteration"),
    Mc = function() {};
Mc.prototype.next = function() {
    g(Lc)
};
Mc.prototype.__iterator__ = function() {
    return this
};
var Nc = function(a) {
        if (a instanceof Mc) return a;
        if ("function" == typeof a.__iterator__) return a.__iterator__(r);
        if (ia(a)) {
            var b = 0,
                c = new Mc;
            c.next = function() {
                for (;;) {
                    b >= a.length && g(Lc);
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        g(Error("Not implemented"))
    },
    Oc = function(a, b, c) {
        if (ia(a)) try {
            Ma(a, b, c)
        } catch (d) {
            d !== Lc && g(d)
        } else {
            a = Nc(a);
            try {
                for (;;) b.call(c, a.next(), i, a)
            } catch (f) {
                f !== Lc && g(f)
            }
        }
    };
var Pc = function(a) {
        if ("function" == typeof a.getValues) return a.getValues();
        if (u(a)) return a.split("");
        if (ia(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return cb(a)
    },
    Qc = function(a) {
        if ("function" == typeof a.getKeys) return a.getKeys();
        if ("function" != typeof a.getValues) {
            if (ia(a) || u(a)) {
                for (var b = [], a = a.length, c = 0; c < a; c++) b.push(c);
                return b
            }
            return db(a)
        }
    },
    Rc = function(a, b, c) {
        if ("function" == typeof a.forEach) a.forEach(b, c);
        else if (ia(a) || u(a)) Ma(a, b, c);
        else for (var d = Qc(a), f = Pc(a), e = f.length, h = 0; h < e; h++) b.call(c, f[h], d && d[h], a)
    };
var Sc = function(a, b) {
        this.map_ = {};
        this.keys_ = [];
        var c = arguments.length;
        if (1 < c) {
            c % 2 && g(Error("Uneven number of arguments"));
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
s = Sc.prototype;
s.count_ = 0;
s.version_ = 0;
s.getValues = function() {
    Tc(this);
    for (var a = [], b = 0; b < this.keys_.length; b++) a.push(this.map_[this.keys_[b]]);
    return a
};
s.getKeys = function() {
    Tc(this);
    return this.keys_.concat()
};
s.containsKey = function(a) {
    return Uc(this.map_, a)
};
s.clear = function() {
    this.map_ = {};
    this.version_ = this.count_ = this.keys_.length = 0
};
s.remove = function(a) {
    return Uc(this.map_, a) ? (delete this.map_[a], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && Tc(this), j) : r
};
var Tc = function(a) {
        if (a.count_ != a.keys_.length) {
            for (var b = 0, c = 0; b < a.keys_.length;) {
                var d = a.keys_[b];
                Uc(a.map_, d) && (a.keys_[c++] = d);
                b++
            }
            a.keys_.length = c
        }
        if (a.count_ != a.keys_.length) {
            for (var f = {}, c = b = 0; b < a.keys_.length;) d = a.keys_[b], Uc(f, d) || (a.keys_[c++] = d, f[d] = 1), b++;
            a.keys_.length = c
        }
    };
s = Sc.prototype;
s.get = function(a, b) {
    return Uc(this.map_, a) ? this.map_[a] : b
};
s.set = function(a, b) {
    Uc(this.map_, a) || (this.count_++, this.keys_.push(a), this.version_++);
    this.map_[a] = b
};
s.addAll = function(a) {
    var b;
    a instanceof Sc ? (b = a.getKeys(), a = a.getValues()) : (b = db(a), a = cb(a));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
};
s.clone = function() {
    return new Sc(this)
};
s.__iterator__ = function(a) {
    Tc(this);
    var b = 0,
        c = this.keys_,
        d = this.map_,
        f = this.version_,
        e = this,
        h = new Mc;
    h.next = function() {
        for (;;) {
            f != e.version_ && g(Error("The map has changed since the iterator was created"));
            b >= c.length && g(Lc);
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};
var Uc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
var Vc = function(a) {
        this.map_ = new Sc;
        a && this.addAll(a)
    },
    Wc = function(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + na(a) : b.substr(0, 1) + a
    };
s = Vc.prototype;
s.add = function(a) {
    this.map_.set(Wc(a), a)
};
s.addAll = function(a) {
    for (var a = Pc(a), b = a.length, c = 0; c < b; c++) this.add(a[c])
};
s.removeAll = function(a) {
    for (var a = Pc(a), b = a.length, c = 0; c < b; c++) this.remove(a[c])
};
s.remove = function(a) {
    return this.map_.remove(Wc(a))
};
s.clear = function() {
    this.map_.clear()
};
s.contains = function(a) {
    return this.map_.containsKey(Wc(a))
};
s.intersection = function(a) {
    for (var b = new Vc, a = Pc(a), c = 0; c < a.length; c++) {
        var d = a[c];
        this.contains(d) && b.add(d)
    }
    return b
};
s.getValues = function() {
    return this.map_.getValues()
};
s.clone = function() {
    return new Vc(this)
};
s.__iterator__ = function() {
    return this.map_.__iterator__(r)
};
var Yc = function(a) {
        return Xc(a || arguments.callee.caller, [])
    },
    Xc = function(a, b) {
        var c = [];
        if (Qa(b, a)) c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(Zc(a) + "(");
            for (var d = a.arguments, f = 0; f < d.length; f++) {
                0 < f && c.push(", ");
                var e;
                e = d[f];
                switch (typeof e) {
                case "object":
                    e = e ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    e = String(e);
                    break;
                case "boolean":
                    e = e ? "true" : "false";
                    break;
                case "function":
                    e = (e = Zc(e)) ? e : "[fn]";
                    break;
                default:
                    e = typeof e
                }
                40 < e.length && (e = e.substr(0, 40) + "...");
                c.push(e)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(Xc(a.caller, b))
            } catch (h) {
                c.push("[exception trying to get caller]\n")
            }
        } else a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    },
    Zc = function(a) {
        if ($c[a]) return $c[a];
        a = String(a);
        if (!$c[a]) {
            var b = /function ([^\(]+)/.exec(a);
            $c[a] = b ? b[1] : "[Anonymous]"
        }
        return $c[a]
    },
    $c = {};
var ad = function(a, b, c, d, f) {
        this.reset(a, b, c, d, f)
    };
ad.prototype.exception_ = k;
ad.prototype.exceptionText_ = k;
var bd = 0;
ad.prototype.reset = function(a, b, c, d, f) {
    "number" == typeof f || bd++;
    d || ra();
    this.level_ = a;
    this.msg_ = b;
    delete this.exception_;
    delete this.exceptionText_
};
ad.prototype.setLevel = function(a) {
    this.level_ = a
};
ad.prototype.getMessage = function() {
    return this.msg_
};
var cd = function(a) {
        this.name_ = a
    };
cd.prototype.parent_ = k;
cd.prototype.level_ = k;
cd.prototype.children_ = k;
cd.prototype.handlers_ = k;
var dd = function(a, b) {
        this.name = a;
        this.value = b
    };
dd.prototype.toString = function() {
    return this.name
};
var ed = new dd("SEVERE", 1E3),
    fd = new dd("WARNING", 900),
    gd = new dd("CONFIG", 700),
    hd = new dd("FINE", 500);
cd.prototype.getName = function() {
    return this.name_
};
cd.prototype.getParent = function() {
    return this.parent_
};
cd.prototype.getChildren = function() {
    this.children_ || (this.children_ = {});
    return this.children_
};
cd.prototype.setLevel = function(a) {
    this.level_ = a
};
var jd = function(a) {
        if (a.level_) return a.level_;
        if (a.parent_) return jd(a.parent_);
        Ha("Root logger has no level set.");
        return k
    };
cd.prototype.log = function(a, b, c) {
    if (a.value >= jd(this).value) {
        a = this.getLogRecord(a, b, c);
        b = "log:" + a.getMessage();
        t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
        t.msWriteProfilerMark && t.msWriteProfilerMark(b);
        for (b = this; b;) {
            var c = b,
                d = a;
            if (c.handlers_) for (var f = 0, e = i; e = c.handlers_[f]; f++) e(d);
            b = b.getParent()
        }
    }
};
cd.prototype.getLogRecord = function(a, b, c) {
    var d = new ad(a, String(b), this.name_);
    if (c) {
        d.exception_ = c;
        var f;
        var e = arguments.callee.caller;
        try {
            var h;
            var l = ba("window.location.href");
            if (u(c)) h = {
                message: c,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: l,
                stack: "Not available"
            };
            else {
                var m, n, p = r;
                try {
                    m = c.lineNumber || c.line || "Not available"
                } catch (q) {
                    m = "Not available", p = j
                }
                try {
                    n = c.fileName || c.filename || c.sourceURL || l
                } catch (y) {
                    n = "Not available", p = j
                }
                h = p || !c.lineNumber || !c.fileName || !c.stack ? {
                    message: c.message,
                    name: c.name,
                    lineNumber: m,
                    fileName: n,
                    stack: c.stack || "Not available"
                } : c
            }
            f = "Message: " + Ba(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + Ba(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ba(Yc(e) + "-> ")
        } catch (B) {
            f = "Exception trying to expose exception! You win, we lose. " + B
        }
        d.exceptionText_ = f
    }
    return d
};
var nd = function(a, b) {
        a.log(hd, b, i)
    },
    od = {},
    pd = k,
    qd = function(a) {
        pd || (pd = new cd(""), od[""] = pd, pd.setLevel(gd));
        var b;
        if (!(b = od[a])) {
            b = new cd(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1),
                c = qd(a.substr(0, c));
            c.getChildren()[d] = b;
            b.parent_ = c;
            od[a] = b
        }
        return b
    };
var sd = function(a, b) {
        this.interval_ = a || 1;
        this.timerObject_ = b || rd;
        this.boundTick_ = v(this.tick_, this);
        this.last_ = ra()
    };
x(sd, Ic);
sd.prototype.enabled = r;
var rd = t.window;
s = sd.prototype;
s.timer_ = k;
s.tick_ = function() {
    if (this.enabled) {
        var a = ra() - this.last_;
        0 < a && a < 0.8 * this.interval_ ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - a) : (this.dispatchEvent("tick"), this.enabled && (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = ra()))
    }
};
s.start = function() {
    this.enabled = j;
    this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = ra())
};
s.stop = function() {
    this.enabled = r;
    this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = k)
};
s.disposeInternal = function() {
    sd.superClass_.disposeInternal.call(this);
    this.stop();
    delete this.timerObject_
};
var td = function(a, b, c) {
        ja(a) ? c && (a = v(a, c)) : a && "function" == typeof a.handleEvent ? a = v(a.handleEvent, a) : g(Error("Invalid listener argument"));
        return 2147483647 < b ? -1 : rd.setTimeout(a, b || 0)
    };
var ud = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
    vd = G,
    wd = function(a, b) {
        if (vd) {
            vd = r;
            var c = t.location;
            if (c) {
                var d = c.href;
                if (d && (d = (d = wd(3, d)) && decodeURIComponent(d)) && d != c.hostname) vd = j, g(Error())
            }
        }
        return b.match(ud)[a] || k
    };
var xd = function() {};
xd.prototype.cachedOptions_ = k;
xd.prototype.getOptions = function() {
    var a;
    if (!(a = this.cachedOptions_)) a = {}, yd(this) && (a[0] = j, a[1] = j), a = this.cachedOptions_ = a;
    return a
};
var zd, Ad = function() {};
x(Ad, xd);
var Bd = function(a) {
        return (a = yd(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    },
    yd = function(a) {
        if (!a.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.ieProgId_ = d
                } catch (f) {}
            }
            g(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
        }
        return a.ieProgId_
    };
zd = new Ad;
var Cd = function(a) {
        this.headers = new Sc;
        this.xmlHttpFactory_ = a || k
    };
x(Cd, Ic);
Cd.prototype.logger_ = qd("goog.net.XhrIo");
var Dd = /^https?$/i;
s = Cd.prototype;
s.active_ = r;
s.xhr_ = k;
s.xhrOptions_ = k;
s.lastUri_ = "";
s.lastMethod_ = "";
s.lastError_ = "";
s.errorDispatched_ = r;
s.inSend_ = r;
s.inOpen_ = r;
s.inAbort_ = r;
s.timeoutInterval_ = 0;
s.timeoutId_ = k;
s.responseType_ = "";
s.withCredentials_ = r;
s.send = function(a, b, c, d) {
    this.xhr_ && g(Error("[goog.net.XhrIo] Object is active with another request=" + this.lastUri_ + "; newUri=" + a));
    b = b ? b.toUpperCase() : "GET";
    this.lastUri_ = a;
    this.lastError_ = "";
    this.lastMethod_ = b;
    this.errorDispatched_ = r;
    this.active_ = j;
    this.xhr_ = this.xmlHttpFactory_ ? Bd(this.xmlHttpFactory_) : Bd(zd);
    this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() : zd.getOptions();
    this.xhr_.onreadystatechange = v(this.onReadyStateChange_, this);
    try {
        nd(this.logger_, Ed(this, "Opening Xhr")), this.inOpen_ = j, this.xhr_.open(b, a, j), this.inOpen_ = r
    } catch (f) {
        nd(this.logger_, Ed(this, "Error opening Xhr: " + f.message));
        Fd(this, f);
        return
    }
    var a = c || "",
        e = this.headers.clone();
    d && Rc(d, function(a, b) {
        e.set(b, a)
    });
    d = t.FormData && a instanceof t.FormData;
    "POST" == b && (!e.containsKey("Content-Type") && !d) && e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    Rc(e, function(a, b) {
        this.xhr_.setRequestHeader(b, a)
    }, this);
    this.responseType_ && (this.xhr_.responseType = this.responseType_);
    "withCredentials" in this.xhr_ && (this.xhr_.withCredentials = this.withCredentials_);
    try {
        this.timeoutId_ && (rd.clearTimeout(this.timeoutId_), this.timeoutId_ = k), 0 < this.timeoutInterval_ && (nd(this.logger_, Ed(this, "Will abort after " + this.timeoutInterval_ + "ms if incomplete")), this.timeoutId_ = rd.setTimeout(v(this.timeout_, this), this.timeoutInterval_)), nd(this.logger_, Ed(this, "Sending request")), this.inSend_ = j, this.xhr_.send(a), this.inSend_ = r
    } catch (h) {
        nd(this.logger_, Ed(this, "Send error: " + h.message)), Fd(this, h)
    }
};
s.timeout_ = function() {
    "undefined" != typeof aa && this.xhr_ && (this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting", nd(this.logger_, Ed(this, this.lastError_)), this.dispatchEvent("timeout"), this.abort(8))
};
var Fd = function(a, b) {
        a.active_ = r;
        a.xhr_ && (a.inAbort_ = j, a.xhr_.abort(), a.inAbort_ = r);
        a.lastError_ = b;
        Gd(a);
        Hd(a)
    },
    Gd = function(a) {
        a.errorDispatched_ || (a.errorDispatched_ = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
Cd.prototype.abort = function() {
    this.xhr_ && this.active_ && (nd(this.logger_, Ed(this, "Aborting")), this.active_ = r, this.inAbort_ = j, this.xhr_.abort(), this.inAbort_ = r, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Hd(this))
};
Cd.prototype.disposeInternal = function() {
    this.xhr_ && (this.active_ && (this.active_ = r, this.inAbort_ = j, this.xhr_.abort(), this.inAbort_ = r), Hd(this, j));
    Cd.superClass_.disposeInternal.call(this)
};
Cd.prototype.onReadyStateChange_ = function() {
    if (!this.inOpen_ && !this.inSend_ && !this.inAbort_) this.onReadyStateChangeEntryPoint_();
    else Id(this)
};
Cd.prototype.onReadyStateChangeEntryPoint_ = function() {
    Id(this)
};
var Id = function(a) {
        if (a.active_ && "undefined" != typeof aa) if (a.xhrOptions_[1] && 4 == Jd(a) && 2 == Kd(a)) nd(a.logger_, Ed(a, "Local request error detected and ignored"));
        else if (a.inSend_ && 4 == Jd(a)) rd.setTimeout(v(a.onReadyStateChange_, a), 0);
        else if (a.dispatchEvent("readystatechange"), 4 == Jd(a)) {
            nd(a.logger_, Ed(a, "Request complete"));
            a.active_ = r;
            try {
                var b = Kd(a),
                    c, d;
                a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    d = j;
                    break a;
                default:
                    d = r
                }
                if (!(c = d)) {
                    var f;
                    if (f = 0 === b) {
                        var e = wd(1, String(a.lastUri_));
                        if (!e && self.location) var h = self.location.protocol,
                            e = h.substr(0, h.length - 1);
                        f = !Dd.test(e ? e.toLowerCase() : "")
                    }
                    c = f
                }
                if (c) a.dispatchEvent("complete"),
                a.dispatchEvent("success");
                else {
                    var l;
                    try {
                        l = 2 < Jd(a) ? a.xhr_.statusText : ""
                    } catch (m) {
                        nd(a.logger_, "Can not get status: " + m.message), l = ""
                    }
                    a.lastError_ = l + " [" + Kd(a) + "]";
                    Gd(a)
                }
            } finally {
                Hd(a)
            }
        }
    },
    Hd = function(a, b) {
        if (a.xhr_) {
            var c = a.xhr_,
                d = a.xhrOptions_[0] ? ca : k;
            a.xhr_ = k;
            a.xhrOptions_ = k;
            a.timeoutId_ && (rd.clearTimeout(a.timeoutId_), a.timeoutId_ = k);
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (f) {
                a.logger_.log(ed, "Problem encountered resetting onreadystatechange: " + f.message, i)
            }
        }
    };
Cd.prototype.isActive = function() {
    return !!this.xhr_
};
var Jd = function(a) {
        return a.xhr_ ? a.xhr_.readyState : 0
    },
    Kd = function(a) {
        try {
            return 2 < Jd(a) ? a.xhr_.status : -1
        } catch (b) {
            return a.logger_.log(fd, "Can not get status: " + b.message, i), -1
        }
    },
    Ed = function(a, b) {
        return b + " [" + a.lastMethod_ + " " + a.lastUri_ + " " + Kd(a) + "]"
    };
var Ld = function(a, b) {
        this.rows_ = a;
        this.useSimilar_ = !b
    };
var Md = function(a, b, c) {
        this.matcher_ = a;
        this.selectionHandler_ = c;
        this.renderer_ = b;
        L(b, ["hilite", "select", "canceldismiss", "dismiss"], this);
        this.token_ = k;
        this.rows_ = [];
        this.hiliteId_ = -1;
        this.firstRowId_ = 0;
        this.dismissTimer_ = this.target_ = k;
        this.inputToAnchorMap_ = {}
    };
x(Md, Ic);
s = Md.prototype;
s.maxMatches_ = 10;
s.autoHilite_ = j;
s.allowFreeSelect_ = r;
s.wrap_ = r;
s.triggerSuggestionsOnUpdate_ = r;
s.getRenderer = function() {
    return this.renderer_
};
s.handleEvent = function(a) {
    if (a.target == this.renderer_) switch (a.type) {
    case "hilite":
        this.hiliteId(a.row);
        break;
    case "select":
        Nd(this);
        break;
    case "canceldismiss":
        Od(this);
        break;
    case "dismiss":
        Pd(this)
    }
};
s.isOpen = function() {
    return this.renderer_.isVisible()
};
var Qd = function(a) {
        var b = a.firstRowId_ + a.rows_.length - 1;
        a.hiliteId_ >= a.firstRowId_ && a.hiliteId_ < b ? a.hiliteId(a.hiliteId_ + 1) : -1 == a.hiliteId_ ? a.hiliteId(a.firstRowId_) : a.hiliteId_ == b && (a.allowFreeSelect_ ? a.hiliteId(-1) : a.wrap_ && a.hiliteId(a.firstRowId_))
    },
    Rd = function(a) {
        a.hiliteId_ > a.firstRowId_ ? a.hiliteId(a.hiliteId_ - 1) : a.allowFreeSelect_ && a.hiliteId_ == a.firstRowId_ ? a.hiliteId(-1) : a.wrap_ && (-1 == a.hiliteId_ || a.hiliteId_ == a.firstRowId_) && a.hiliteId(a.firstRowId_ + a.rows_.length - 1)
    };
Md.prototype.hiliteId = function(a) {
    this.hiliteId_ = a;
    this.renderer_.hiliteId(a);
    return -1 != Sd(this, a)
};
var Nd = function(a) {
        var b = Sd(a, a.hiliteId_);
        if (-1 != b) {
            var b = a.rows_[b],
                c = a.selectionHandler_,
                d = b.toString();
            if (ga(i) ? 0 : c.multi_) {
                var f = Td(c, c.getValue(), Ud(c.activeElement_)),
                    e = Vd(c, c.getValue());
                c.separatorCheck_.test(d) || (d = d.replace(/[\s\xa0]+$/, "") + c.defaultSeparator_);
                c.whitespaceWrapEntries_ && (0 != f && !/^[\s\xa0]*$/.test(e[f - 1]) && (d = " " + d), f == e.length - 1 && (d += " "));
                if (d != e[f]) {
                    e[f] = d;
                    d = c.activeElement_;
                    (F || E && H("9")) && d.blur();
                    d.value = e.join("");
                    for (var h = 0, l = 0; l <= f; l++) h += e[l].length;
                    d.focus();
                    f = h;
                    e = c.activeElement_;
                    d = f;
                    Wd(e) ? e.selectionStart = d : E && (h = Xd(e), l = h[0], l.inRange(h[1]) && (d = Yd(e, d), l.collapse(j), l.move("character", d), l.select()));
                    e = c.activeElement_;
                    Wd(e) ? e.selectionEnd = f : E && (h = Xd(e), d = h[1], h[0].inRange(d) && (f = Yd(e, f), e = Yd(e, Ud(e)), d.collapse(j), d.moveEnd("character", f - e), d.select()))
                }
            } else c.setValue(d);
            c.rowJustSelected_ = j;
            a.triggerSuggestionsOnUpdate_ ? (a.token_ = k, Pd(a)) : a.dismiss();
            a.dispatchEvent({
                type: "update",
                row: b
            });
            a.triggerSuggestionsOnUpdate_ && a.selectionHandler_.update(j);
            return j
        }
        a.dismiss();
        a.dispatchEvent({
            type: "update",
            row: k
        });
        return r
    };
Md.prototype.dismiss = function() {
    this.hiliteId_ = -1;
    this.token_ = k;
    this.firstRowId_ += this.rows_.length;
    this.rows_ = [];
    window.clearTimeout(this.dismissTimer_);
    this.dismissTimer_ = k;
    this.renderer_.dismiss();
    this.dispatchEvent("suggestionsupdate")
};
var Pd = function(a) {
        a.dismissTimer_ || (a.dismissTimer_ = window.setTimeout(v(a.dismiss, a), 100))
    };
Md.prototype.immediatelyCancelDelayedDismiss_ = function() {
    return this.dismissTimer_ ? (window.clearTimeout(this.dismissTimer_), this.dismissTimer_ = k, j) : r
};
var Od = function(a) {
        a.immediatelyCancelDelayedDismiss_() || window.setTimeout(v(a.immediatelyCancelDelayedDismiss_, a), 10)
    };
Md.prototype.disposeInternal = function() {
    Md.superClass_.disposeInternal.call(this);
    delete this.inputToAnchorMap_;
    this.renderer_.dispose();
    this.selectionHandler_.dispose();
    this.matcher_ = k
};
Md.prototype.matchListener_ = function(a, b, c) {
    this.token_ == a && this.renderRows(b, c)
};
Md.prototype.renderRows = function(a, b) {
    var c = "object" == fa(b) && b,
        d = (c ? c.getPreserveHilited() : b) ? Sd(this, this.hiliteId_) : -1;
    this.firstRowId_ += this.rows_.length;
    this.rows_ = a;
    for (var f = [], e = 0; e < a.length; ++e) f.push({
        id: this.firstRowId_ + e,
        data: a[e]
    });
    e = k;
    this.target_ && (e = this.inputToAnchorMap_[na(this.target_)] || this.target_);
    this.renderer_.anchorElement_ = e;
    this.renderer_.renderRows(f, this.token_, this.target_);
    e = this.autoHilite_;
    c && c.getAutoHilite() !== i && (e = c.getAutoHilite());
    (e || 0 <= d) && 0 != f.length && this.token_ ? this.hiliteId(0 <= d ? this.firstRowId_ + d : this.firstRowId_) : this.hiliteId_ = -1;
    this.dispatchEvent("suggestionsupdate")
};
var Sd = function(a, b) {
        var c = b - a.firstRowId_;
        return 0 > c || c >= a.rows_.length ? -1 : c
    };
Md.prototype.attachInputs = function(a) {
    var b = this.selectionHandler_;
    b.attachInputs.apply(b, arguments)
};
Md.prototype.update = function(a) {
    this.selectionHandler_.update(a)
};
var Zd = function(a, b) {
        a.setAttribute("role", b)
    },
    P = function(a, b, c) {
        a.setAttribute("aria-" + b, c)
    };
var Ud = function(a) {
        var b;
        a: {
            var c = 0,
                d = 0;
            if (Wd(a)) c = a.selectionStart, d = -1;
            else if (E) {
                var f = Xd(a);
                b = f[0];
                f = f[1];
                if (b.inRange(f)) {
                    b.setEndPoint("EndToStart", f);
                    if ("textarea" == a.type) {
                        f.duplicate();
                        c = a = b.text;
                        for (d = r; !d;) 0 == b.compareEndPoints("StartToEnd", b) ? d = j : (b.moveEnd("character", -1), b.text == a ? c += "\r\n" : d = j);
                        b = [c.length, -1];
                        break a
                    }
                    c = b.text.length;
                    d = -1
                }
            }
            b = [c, d]
        }
        return b[0]
    },
    Xd = function(a) {
        var b = a.ownerDocument || a.document,
            c = b.selection.createRange();
        "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
        return [b, c]
    },
    Yd = function(a, b) {
        "textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length);
        return b
    },
    Wd = function(a) {
        try {
            return "number" == typeof a.selectionStart
        } catch (b) {
            return r
        }
    };
var ae = function(a, b, c, d, f) {
        if (!E && (!G || !H("525"))) return j;
        if (nb && f) return $d(a);
        if (f && !d || !c && (17 == b || 18 == b || nb && 91 == b)) return r;
        if (G && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return r
        }
        if (E && d && b == a) return r;
        switch (a) {
        case 13:
            return !(E && Fb(9));
        case 27:
            return !G
        }
        return $d(a)
    },
    $d = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || G && 0 == a) return j;
        switch (a) {
        case 32:
        case 63:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return j;
        default:
            return r
        }
    },
    be = function(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    };
var ce = function(a, b) {
        a && this.attach(a, b)
    };
x(ce, Ic);
s = ce.prototype;
s.element_ = k;
s.keyPressKey_ = k;
s.keyDownKey_ = k;
s.keyUpKey_ = k;
s.lastKey_ = -1;
s.keyCode_ = -1;
s.altKey_ = r;
var de = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
},
    ee = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    fe = E || G && H("525"),
    ge = nb && F;
s = ce.prototype;
s.handleKeyDown_ = function(a) {
    if (G && (17 == this.lastKey_ && !a.ctrlKey || 18 == this.lastKey_ && !a.altKey || nb && 91 == this.lastKey_ && !a.metaKey)) this.keyCode_ = this.lastKey_ = -1; - 1 == this.lastKey_ && (a.ctrlKey && 17 != a.keyCode ? this.lastKey_ = 17 : a.altKey && 18 != a.keyCode ? this.lastKey_ = 18 : a.metaKey && 91 != a.keyCode && (this.lastKey_ = 91));
    fe && !ae(a.keyCode, this.lastKey_, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.keyCode_ = F ? be(a.keyCode) : a.keyCode, ge && (this.altKey_ = a.altKey))
};
s.handleKeyup_ = function(a) {
    this.keyCode_ = this.lastKey_ = -1;
    this.altKey_ = a.altKey
};
s.handleEvent = function(a) {
    var b = a.getBrowserEvent(),
        c, d, f = b.altKey;
    E && "keypress" == a.type ? (c = this.keyCode_, d = 13 != c && 27 != c ? b.keyCode : 0) : G && "keypress" == a.type ? (c = this.keyCode_, d = 0 <= b.charCode && 63232 > b.charCode && $d(c) ? b.charCode : 0) : sb ? (c = this.keyCode_, d = $d(c) ? b.keyCode : 0) : (c = b.keyCode || this.keyCode_, d = b.charCode || 0, ge && (f = this.altKey_), nb && (63 == d && 224 == c) && (c = 191));
    var e = c,
        h = b.keyIdentifier;
    c ? 63232 <= c && c in de ? e = de[c] : 25 == c && a.shiftKey && (e = 9) : h && h in ee && (e = ee[h]);
    a = e == this.lastKey_;
    this.lastKey_ = e;
    b = new he(e, d, a, b);
    b.altKey = f;
    this.dispatchEvent(b)
};
s.getElement = function() {
    return this.element_
};
s.attach = function(a, b) {
    this.keyUpKey_ && this.detach();
    this.element_ = a;
    this.keyPressKey_ = L(this.element_, "keypress", this, b);
    this.keyDownKey_ = L(this.element_, "keydown", this.handleKeyDown_, b, this);
    this.keyUpKey_ = L(this.element_, "keyup", this.handleKeyup_, b, this)
};
s.detach = function() {
    this.keyPressKey_ && (Bc(this.keyPressKey_), Bc(this.keyDownKey_), Bc(this.keyUpKey_), this.keyUpKey_ = this.keyDownKey_ = this.keyPressKey_ = k);
    this.element_ = k;
    this.keyCode_ = this.lastKey_ = -1
};
s.disposeInternal = function() {
    ce.superClass_.disposeInternal.call(this);
    this.detach()
};
var he = function(a, b, c, d) {
        d && this.init(d, i);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
x(he, mc);
var ie, je;
je = ie = r;
var ke = ob();
ke && (-1 != ke.indexOf("Firefox") || -1 != ke.indexOf("Camino") || (-1 != ke.indexOf("iPhone") || -1 != ke.indexOf("iPod") ? ie = j : -1 != ke.indexOf("iPad") && (je = j)));
var le = ie,
    me = je;
var ne = function(a, b, c, d) {
        d = d || 150;
        this.multi_ = c != k ? c : j;
        this.separators_ = a != k ? a : ",;";
        this.defaultSeparator_ = this.separators_.substring(0, 1);
        a = this.multi_ ? "[\\s" + this.separators_ + "]+" : "[\\s]+";
        this.trimmer_ = RegExp("^" + a + "|" + a + "$", "g");
        this.separatorCheck_ = RegExp("\\s*[" + this.separators_ + "]$");
        this.literals_ = b || "";
        this.preventDefaultOnTab_ = this.multi_;
        this.timer_ = 0 < d ? new sd(d) : k;
        this.eh_ = new Gc(this);
        this.activateHandler_ = new Gc(this);
        this.keyHandler_ = new ce;
        this.lastKeyCode_ = -1
    };
x(ne, ec);
var oe = (le || me) && !H("533.17.9");
s = ne.prototype;
s.whitespaceWrapEntries_ = j;
s.generateNewTokenOnLiteral_ = j;
s.upsideDown_ = r;
s.separatorUpdates_ = j;
s.separatorSelects_ = j;
s.activeTimeoutId_ = k;
s.activeElement_ = k;
s.lastValue_ = "";
s.waitingForIme_ = r;
s.rowJustSelected_ = r;
s.updateDuringTyping_ = j;
s.getValue = function() {
    return this.activeElement_.value
};
s.setValue = function(a) {
    this.activeElement_.value = a
};
s.attachInputs = function(a) {
    for (var b = 0; b < arguments.length; b++) {
        var c = arguments[b];
        ka(c) && 1 == c.nodeType && P(c, "haspopup", j);
        M(this.eh_, c, "focus", this.handleFocus);
        M(this.eh_, c, "blur", this.handleBlur);
        if (!this.activeElement_ && (M(this.activateHandler_, c, "keydown", this.onKeyDownOnInactiveElement_), ka(c) && 1 == c.nodeType)) {
            var d;
            a: {
                var f = I(c);
                try {
                    d = f && f.activeElement;
                    break a
                } catch (e) {}
                d = k
            }
            d == c && pe(this, c)
        }
    }
};
s.disposeInternal = function() {
    ne.superClass_.disposeInternal.call(this);
    this.activeTimeoutId_ != k && window.clearTimeout(this.activeTimeoutId_);
    this.eh_.dispose();
    delete this.eh_;
    this.activateHandler_.dispose();
    this.keyHandler_.dispose()
};
s.handleKeyEvent = function(a) {
    switch (a.keyCode) {
    case 40:
        if (this.ac_.isOpen()) return this.upsideDown_ ? Rd(this.ac_) : Qd(this.ac_), a.preventDefault(), j;
        if (!this.multi_) return this.update(j), a.preventDefault(), j;
        break;
    case 38:
        if (this.ac_.isOpen()) return this.upsideDown_ ? Qd(this.ac_) : Rd(this.ac_), a.preventDefault(), j;
        break;
    case 9:
        if (this.ac_.isOpen() && !a.shiftKey) {
            if (this.update(), Nd(this.ac_) && this.preventDefaultOnTab_) return a.preventDefault(), j
        } else this.ac_.dismiss();
        break;
    case 13:
        if (this.ac_.isOpen()) {
            if (this.update(), Nd(this.ac_)) return a.preventDefault(), a.stopPropagation(), j
        } else this.ac_.dismiss();
        break;
    case 27:
        if (this.ac_.isOpen()) return this.ac_.dismiss(), a.preventDefault(), a.stopPropagation(), j;
        break;
    case 229:
        if (!this.waitingForIme_) return this.waitingForIme_ || (M(this.eh_, this.activeElement_, "keyup", this.onKeyUp_), M(this.eh_, this.activeElement_, "keypress", this.onKeyPress_), this.waitingForIme_ = j), j;
        break;
    default:
        this.timer_ && !this.updateDuringTyping_ && (this.timer_.stop(), this.timer_.start())
    }
    return qe(this, a)
};
var qe = function(a, b) {
        var c = a.multi_ && b.charCode && -1 != a.separators_.indexOf(String.fromCharCode(b.charCode));
        a.separatorUpdates_ && c && a.update();
        return a.separatorSelects_ && c && Nd(a.ac_) ? (b.preventDefault(), j) : r
    };
ne.prototype.handleKeyUp = function() {
    return r
};
ne.prototype.handleFocus = function(a) {
    pe(this, a.target || k)
};
var pe = function(a, b) {
        a.activateHandler_.removeAll();
        a.ac_ && Od(a.ac_);
        b != a.activeElement_ && (a.activeElement_ = b, a.timer_ && (a.timer_.start(), M(a.eh_, a.timer_, "tick", a.onTick_)), a.lastValue_ = a.getValue(), a.keyHandler_.attach(a.activeElement_), M(a.eh_, a.keyHandler_, "key", a.onKey_), M(a.eh_, a.activeElement_, "mousedown", a.onMouseDown_), E && M(a.eh_, a.activeElement_, "keypress", a.onIeKeyPress_))
    };
s = ne.prototype;
s.handleBlur = function() {
    oe ? this.activeTimeoutId_ = window.setTimeout(v(this.processBlur_, this), 0) : this.processBlur_()
};
s.processBlur_ = function() {
    this.activeElement_ && (N(this.eh_, this.keyHandler_, "key", this.onKey_), this.keyHandler_.detach(), N(this.eh_, this.activeElement_, "keyup", this.handleKeyUp), N(this.eh_, this.activeElement_, "mousedown", this.onMouseDown_), E && N(this.eh_, this.activeElement_, "keypress", this.onIeKeyPress_), this.waitingForIme_ && re(this), this.activeElement_ = k, this.timer_ && (this.timer_.stop(), N(this.eh_, this.timer_, "tick", this.onTick_)), this.ac_ && Pd(this.ac_))
};
s.onTick_ = function() {
    this.update()
};
s.onKeyDownOnInactiveElement_ = function(a) {
    this.handleFocus(a)
};
s.onKey_ = function(a) {
    this.lastKeyCode_ = a.keyCode;
    this.ac_ && this.handleKeyEvent(a)
};
s.onKeyPress_ = function() {
    this.waitingForIme_ && 229 != this.lastKeyCode_ && re(this)
};
s.onKeyUp_ = function(a) {
    this.waitingForIme_ && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && re(this)
};
s.onMouseDown_ = function(a) {
    this.ac_ && this.handleMouseDown(a)
};
s.handleMouseDown = function() {};
var re = function(a) {
        a.waitingForIme_ && (a.waitingForIme_ = r, N(a.eh_, a.activeElement_, "keypress", a.onKeyPress_), N(a.eh_, a.activeElement_, "keyup", a.onKeyUp_))
    };
ne.prototype.onIeKeyPress_ = function(a) {
    qe(this, a)
};
ne.prototype.update = function(a) {
    if (this.activeElement_ && (a || this.getValue() != this.lastValue_)) {
        if (a || !this.rowJustSelected_) {
            var b, a = Ud(this.activeElement_);
            b = this.getValue();
            a = Vd(this, b)[Td(this, b, a)];
            b = this.trimmer_ ? String(a).replace(this.trimmer_, "") : a;
            if (this.ac_ && (this.ac_.target_ = this.activeElement_, a = this.ac_, this.getValue(), a.token_ != b)) {
                a.token_ = b;
                var c = a.matcher_,
                    d = a.token_,
                    f = a.maxMatches_;
                b = v(a.matchListener_, a);
                var e, h = [];
                if ("" != d) {
                    e = Da(d);
                    var l = RegExp("(^|\\W+)" + e, "i");
                    e = c.rows_;
                    var m = function(a) {
                            String(a).match(l) && h.push(a);
                            return h.length >= f
                        };
                    e = Nc(e);
                    try {
                        for (; !m.call(i, e.next()););
                    } catch (n) {
                        n !== Lc && g(n)
                    }
                }
                e = h;
                if (0 == e.length && c.useSimilar_) {
                    var p = [];
                    Oc(c.rows_, function(a, b) {
                        var c = d.toLowerCase(),
                            f = String(a).toLowerCase(),
                            e = 0;
                        if (-1 != f.indexOf(c)) e = parseInt((f.indexOf(c) / 4).toString(), 10);
                        else for (var h = c.split(""), l = -1, m = 10, n = 0, O; O = h[n]; n++) O = f.indexOf(O), O > l ? (l = O - l - 1, l > m - 5 && (l = m - 5), e += l, l = O) : (e += m, m += 5);
                        e < 6 * c.length && p.push({
                            str: a,
                            score: e,
                            index: b
                        })
                    });
                    p.sort(function(a, b) {
                        var c = a.score - b.score;
                        return 0 != c ? c : a.index - b.index
                    });
                    c = [];
                    for (e = 0; e < f && e < p.length; e++) c.push(p[e].str);
                    e = c
                }
                b(d, e);
                Od(a)
            }
        }
        this.lastValue_ = this.getValue()
    }
    this.rowJustSelected_ = r
};
var Td = function(a, b, c) {
        a = Vd(a, b);
        if (c == b.length) return a.length - 1;
        for (var d = b = 0, f = 0; d < a.length && f <= c; d++) f += a[d].length, b = d;
        return b
    },
    Vd = function(a, b) {
        if (!a.multi_) return [b];
        for (var c = String(b).split(""), d = [], f = [], e = 0, h = r; e < c.length; e++) a.literals_ && -1 != a.literals_.indexOf(c[e]) ? (a.generateNewTokenOnLiteral_ && !h && (d.push(f.join("")), f.length = 0), f.push(c[e]), h = !h) : !h && -1 != a.separators_.indexOf(c[e]) ? (f.push(c[e]), d.push(f.join("")), f.length = 0) : f.push(c[e]);
        d.push(f.join(""));
        return d
    };
var se = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
se.prototype.clone = function() {
    return new se(this.top, this.right, this.bottom, this.left)
};
se.prototype.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
se.prototype.contains = function(a) {
    return !this || !a ? r : a instanceof se ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
var te = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
te.prototype.clone = function() {
    return new te(this.left, this.top, this.width, this.height)
};
te.prototype.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
te.prototype.intersection = function(a) {
    var b = Math.max(this.left, a.left),
        c = Math.min(this.left + this.width, a.left + a.width);
    if (b <= c) {
        var d = Math.max(this.top, a.top),
            a = Math.min(this.top + this.height, a.top + a.height);
        if (d <= a) return this.left = b, this.top = d, this.width = c - b, this.height = a - d, j
    }
    return r
};
te.prototype.contains = function(a) {
    return a instanceof te ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
var ue = function(a, b) {
        var c = I(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || "" : ""
    },
    ve = function(a, b) {
        return a.currentStyle ? a.currentStyle[b] : k
    },
    we = function(a, b) {
        return ue(a, b) || ve(a, b) || a.style && a.style[b]
    },
    xe = function(a) {
        a = a ? I(a) : document;
        return E && !Fb(9) && !bc(Kb(a)) ? a.body : a.documentElement
    },
    ye = function(a) {
        var b = a.getBoundingClientRect();
        E && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    },
    ze = function(a) {
        if (E && !Fb(8)) return a.offsetParent;
        for (var b = I(a), c = we(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode) if (c = we(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return k
    },
    Ce = function(a) {
        for (var b = new se(0, Infinity, Infinity, 0), c = Kb(a), d = c.document_.body, f = c.document_.documentElement, e = !G && "CSS1Compat" == c.document_.compatMode ? c.document_.documentElement : c.document_.body; a = ze(a);) if ((!E || 0 != a.clientWidth) && (!G || 0 != a.clientHeight || a != d) && a != d && a != f && "visible" != we(a, "overflow")) {
            var h = Ae(a),
                l;
            l = a;
            if (F && !H("1.9")) {
                var m = parseFloat(ue(l, "borderLeftWidth"));
                if (Be(l)) var n = l.offsetWidth - l.clientWidth - m - parseFloat(ue(l, "borderRightWidth")),
                    m = m + n;
                l = new A(m, parseFloat(ue(l, "borderTopWidth")))
            } else l = new A(l.clientLeft, l.clientTop);
            h.x += l.x;
            h.y += l.y;
            b.top = Math.max(b.top, h.y);
            b.right = Math.min(b.right, h.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
            b.left = Math.max(b.left, h.x)
        }
        d = e.scrollLeft;
        e = e.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, e);
        c = (c.document_.parentWindow || c.document_.defaultView || window).document;
        c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
        c = new $a(c.clientWidth, c.clientHeight);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, e + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : k
    },
    Ae = function(a) {
        var b, c = I(a),
            d = we(a, "position");
        Ia(a, "Parameter is required");
        var f = F && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
            e = new A(0, 0),
            h = xe(c);
        if (a == h) return e;
        if (a.getBoundingClientRect) b = ye(a), a = cc(Kb(c)), e.x = b.left + a.x, e.y = b.top + a.y;
        else if (c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), e.x = b.screenX - a.screenX, e.y = b.screenY - a.screenY;
        else {
            b = a;
            do {
                e.x += b.offsetLeft;
                e.y += b.offsetTop;
                b != a && (e.x += b.clientLeft || 0, e.y += b.clientTop || 0);
                if (G && "fixed" == we(b, "position")) {
                    e.x += c.body.scrollLeft;
                    e.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (sb || G && "absolute" == d) e.y -= c.body.offsetTop;
            for (b = a;
            (b = ze(b)) && b != c.body && b != h;) if (e.x -= b.scrollLeft, !sb || "TR" != b.tagName) e.y -= b.scrollTop
        }
        return e
    },
    De = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    },
    Fe = function(a) {
        if ("none" != we(a, "display")) return Ee(a);
        var b = a.style,
            c = b.display,
            d = b.visibility,
            f = b.position;
        b.visibility = "hidden";
        b.position = "absolute";
        b.display = "inline";
        a = Ee(a);
        b.display = c;
        b.position = f;
        b.visibility = d;
        return a
    },
    Ee = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = G && !b && !c;
        return (!ga(b) || d) && a.getBoundingClientRect ? (a = ye(a), new $a(a.right - a.left, a.bottom - a.top)) : new $a(b, c)
    },
    Ge = function(a, b) {
        a.style.display = b ? "" : "none"
    },
    Be = function(a) {
        return "rtl" == we(a, "direction")
    },
    He = F ? "MozUserSelect" : G ? "WebkitUserSelect" : k,
    Ie = function(a, b, c) {
        c = !c ? a.getElementsByTagName("*") : k;
        if (He) {
            if (b = b ? "none" : "", a.style[He] = b, c) for (var a = 0, d; d = c[a]; a++) d.style[He] = b
        } else if (E || sb) if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    },
    Je = function(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        var f = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return f
    },
    Le = {
        thin: 2,
        medium: 4,
        thick: 6
    },
    Me = function(a, b) {
        if ("none" == ve(a, b + "Style")) return 0;
        var c = ve(a, b + "Width");
        return c in Le ? Le[c] : Je(a, c)
    },
    Ne = function(a) {
        if (E) {
            var b = Me(a, "borderLeft"),
                c = Me(a, "borderRight"),
                d = Me(a, "borderTop"),
                a = Me(a, "borderBottom");
            return new se(d, c, a, b)
        }
        b = ue(a, "borderLeftWidth");
        c = ue(a, "borderRightWidth");
        d = ue(a, "borderTopWidth");
        a = ue(a, "borderBottomWidth");
        return new se(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    },
    Oe = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
var Pe = function(a, b, c) {
        this.listener_ = a;
        this.interval_ = b || 0;
        this.handler_ = c;
        this.callback_ = v(this.doAction_, this)
    };
x(Pe, ec);
s = Pe.prototype;
s.id_ = 0;
s.disposeInternal = function() {
    Pe.superClass_.disposeInternal.call(this);
    this.stop();
    delete this.listener_;
    delete this.handler_
};
s.start = function(a) {
    this.stop();
    this.id_ = td(this.callback_, ga(a) ? a : this.interval_)
};
s.stop = function() {
    this.isActive() && rd.clearTimeout(this.id_);
    this.id_ = 0
};
s.isActive = function() {
    return 0 != this.id_
};
s.doAction_ = function() {
    this.id_ = 0;
    this.listener_ && this.listener_.call(this.handler_)
};
var Qe = {},
    Re = k,
    Se = function(a) {
        a = na(a);
        delete Qe[a];
        eb(Qe) && Re && Re.stop()
    },
    Ue = function() {
        Re || (Re = new Pe(function() {
            var a = ra();
            bb(Qe, function(c) {
                Te(c, a)
            });
            eb(Qe) || Ue()
        }, 20));
        var a = Re;
        a.isActive() || a.start()
    };
var Ve = function() {
        this.state_ = 0;
        this.endTime = this.startTime = k
    };
x(Ve, Ic);
Ve.prototype.onBegin = function() {
    this.dispatchAnimationEvent("begin")
};
Ve.prototype.onEnd = function() {
    this.dispatchAnimationEvent("end")
};
Ve.prototype.dispatchAnimationEvent = function(a) {
    this.dispatchEvent(a)
};
var We = function(a, b, c, d) {
        Ve.call(this);
        (!ha(a) || !ha(b)) && g(Error("Start and end parameters must be arrays"));
        a.length != b.length && g(Error("Start and end points must be the same length"));
        this.startPoint = a;
        this.endPoint = b;
        this.duration = c;
        this.accel_ = d;
        this.coords = []
    };
x(We, Ve);
We.prototype.progress = 0;
We.prototype.play = function(a) {
    if (a || 0 == this.state_) this.progress = 0, this.coords = this.startPoint;
    else if (1 == this.state_) return r;
    Se(this);
    this.startTime = a = ra(); - 1 == this.state_ && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    if (!this.progress) this.onBegin();
    this.dispatchAnimationEvent("play"); - 1 == this.state_ && this.dispatchAnimationEvent("resume");
    this.state_ = 1;
    var b = na(this);
    b in Qe || (Qe[b] = this);
    Ue();
    Te(this, a);
    return j
};
We.prototype.stop = function(a) {
    Se(this);
    this.state_ = 0;
    a && (this.progress = 1);
    Xe(this, this.progress);
    this.dispatchAnimationEvent("stop");
    this.onEnd()
};
We.prototype.disposeInternal = function() {
    0 == this.state_ || this.stop(r);
    this.dispatchAnimationEvent("destroy");
    We.superClass_.disposeInternal.call(this)
};
var Te = function(a, b) {
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 <= a.progress && (a.progress = 1);
        Xe(a, a.progress);
        if (1 == a.progress) a.state_ = 0, Se(a), a.dispatchAnimationEvent("finish"), a.onEnd();
        else if (1 == a.state_) a.onAnimate()
    },
    Xe = function(a, b) {
        ja(a.accel_) && (b = a.accel_(b));
        a.coords = Array(a.startPoint.length);
        for (var c = 0; c < a.startPoint.length; c++) a.coords[c] = (a.endPoint[c] - a.startPoint[c]) * b + a.startPoint[c]
    };
We.prototype.onAnimate = function() {
    this.dispatchAnimationEvent("animate")
};
We.prototype.dispatchAnimationEvent = function(a) {
    this.dispatchEvent(new Ye(a, this))
};
var Ye = function(a, b) {
        lc.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.state_
    };
x(Ye, lc);
var Ze = function(a, b, c, d, f) {
        We.call(this, b, c, d, f);
        this.element = a
    };
x(Ze, We);
s = Ze.prototype;
s.updateStyle = ca;
s.isRightToLeft = function() {
    ga(this.rightToLeft_) || (this.rightToLeft_ = Be(this.element));
    return this.rightToLeft_
};
s.onAnimate = function() {
    this.updateStyle();
    Ze.superClass_.onAnimate.call(this)
};
s.onEnd = function() {
    this.updateStyle();
    Ze.superClass_.onEnd.call(this)
};
s.onBegin = function() {
    this.updateStyle();
    Ze.superClass_.onBegin.call(this)
};
var $e = function(a, b, c, d, f) {
        "number" == typeof b && (b = [b]);
        "number" == typeof c && (c = [c]);
        Ze.call(this, a, b, c, d, f);
        (1 != b.length || 1 != c.length) && g(Error("Start and end points must be 1D"))
    };
x($e, Ze);
$e.prototype.updateStyle = function() {
    var a = this.coords[0],
        b = this.element.style;
    "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * a + ")")
};
$e.prototype.show = function() {
    this.element.style.display = ""
};
var af = function(a, b, c) {
        $e.call(this, a, 1, 0, b, c)
    };
x(af, $e);
af.prototype.onBegin = function() {
    this.show();
    af.superClass_.onBegin.call(this)
};
af.prototype.onEnd = function() {
    this.element.style.display = "none";
    af.superClass_.onEnd.call(this)
};
var bf = function(a, b, c) {
        $e.call(this, a, 0, 1, b, c)
    };
x(bf, $e);
bf.prototype.onBegin = function() {
    this.show();
    bf.superClass_.onBegin.call(this)
};
var df = function(a, b, c, d, f, e, h, l) {
        Ga(c);
        var m, n;
        if (m = c.offsetParent) {
            var p = "HTML" == m.tagName || "BODY" == m.tagName;
            if (!p || "static" != we(m, "position")) n = Ae(m), p || (p = (p = Be(m)) && F ? -m.scrollLeft : p && (!E || !H("8")) ? m.scrollWidth - m.clientWidth - m.scrollLeft : m.scrollLeft, n = Za(n, new A(p, m.scrollTop)))
        }
        m = n || new A;
        n = Ae(a);
        p = Fe(a);
        n = new te(n.x, n.y, p.width, p.height);
        (p = Ce(a)) && n.intersection(new te(p.left, p.top, p.right - p.left, p.bottom - p.top));
        var p = Kb(a),
            q = Kb(c);
        if (p.document_ != q.document_) {
            var y = p.document_.body,
                q = q.document_.parentWindow || q.document_.defaultView,
                B = new A(0, 0),
                w = I(y) ? I(y).parentWindow || I(y).defaultView : window,
                J = y;
            do {
                var D;
                if (w == q) D = Ae(J);
                else {
                    D = J;
                    var W = new A;
                    if (1 == D.nodeType) {
                        if (D.getBoundingClientRect) {
                            var K = ye(D);
                            W.x = K.left;
                            W.y = K.top
                        } else {
                            var K = cc(Kb(D)),
                                X = Ae(D);
                            W.x = X.x - K.x;
                            W.y = X.y - K.y
                        }
                        F && !H(12) && (K = i, K = i, E ? K = "-ms-transform" : G ? K = "-webkit-transform" : sb ? K = "-o-transform" : F && (K = "-moz-transform"), X = i, K && (X = we(D, K)), X || (X = we(D, "transform")), X ? (D = X.match(Oe), K = !D ? new A(0, 0) : new A(parseFloat(D[1]), parseFloat(D[2]))) : K = new A(0, 0), W = new A(W.x + K.x, W.y + K.y))
                    } else K = ja(D.getBrowserEvent), X = D, D.targetTouches ? X = D.targetTouches[0] : K && D.getBrowserEvent().targetTouches && (X = D.getBrowserEvent().targetTouches[0]), W.x = X.clientX, W.y = X.clientY;
                    D = W
                }
                B.x += D.x;
                B.y += D.y
            } while (w && w != q && (J = w.frameElement) && (w = w.parent));
            y = Za(B, Ae(y));
            E && !bc(p) && (y = Za(y, cc(p)));
            n.left += y.x;
            n.top += y.y
        }
        a = (b & 4 && Be(a) ? b ^ 2 : b) & -5;
        b = new A(a & 2 ? n.left + n.width : n.left, a & 1 ? n.top + n.height : n.top);
        b = Za(b, m);
        f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
        var O;
        if (h && (O = Ce(c))) O.top -= m.y, O.right -= m.x, O.bottom -= m.y, O.left -= m.x;
        return cf(b, c, d, e, O, h, l)
    },
    cf = function(a, b, c, d, f, e, h) {
        var a = a.clone(),
            l = 0,
            m = (c & 4 && Be(b) ? c ^ 2 : c) & -5,
            c = Fe(b),
            h = h ? h.clone() : c.clone();
        if (d || 0 != m) m & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left), m & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (e) {
            if (f) {
                l = a;
                d = 0;
                if (65 == (e & 65) && (l.x < f.left || l.x >= f.right)) e &= -2;
                if (132 == (e & 132) && (l.y < f.top || l.y >= f.bottom)) e &= -5;
                l.x < f.left && e & 1 && (l.x = f.left, d |= 1);
                l.x < f.left && (l.x + h.width > f.right && e & 16) && (h.width = Math.max(h.width - (l.x + h.width - f.right), 0), d |= 4);
                l.x + h.width > f.right && e & 1 && (l.x = Math.max(f.right - h.width, f.left), d |= 1);
                e & 2 && (d |= (l.x < f.left ? 16 : 0) | (l.x + h.width > f.right ? 32 : 0));
                l.y < f.top && e & 4 && (l.y = f.top, d |= 2);
                l.y >= f.top && (l.y + h.height > f.bottom && e & 32) && (h.height = Math.max(h.height - (l.y + h.height - f.bottom), 0), d |= 8);
                l.y + h.height > f.bottom && e & 4 && (l.y = Math.max(f.bottom - h.height, f.top), d |= 2);
                e & 8 && (d |= (l.y < f.top ? 64 : 0) | (l.y + h.height > f.bottom ? 128 : 0));
                l = d
            } else l = 256;
            if (l & 496) return l
        }
        e = a;
        f = F && (nb || ub) && H("1.9");
        e instanceof A ? (a = e.x, e = e.y) : (a = e, e = i);
        b.style.left = De(a, f);
        b.style.top = De(e, f);
        if (!(c == h || (!c || !h ? 0 : c.width == h.width && c.height == h.height))) a = bc(Kb(I(b))), E && (!a || !H("8")) ? (c = b.style, a ? (E ? (a = Je(b, ve(b, "paddingLeft")), f = Je(b, ve(b, "paddingRight")), e = Je(b, ve(b, "paddingTop")), d = Je(b, ve(b, "paddingBottom")), a = new se(e, f, d, a)) : (a = ue(b, "paddingLeft"), f = ue(b, "paddingRight"), e = ue(b, "paddingTop"), d = ue(b, "paddingBottom"), a = new se(parseFloat(e), parseFloat(f), parseFloat(d), parseFloat(a))), b = Ne(b), c.pixelWidth = h.width - b.left - a.left - a.right - b.right, c.pixelHeight = h.height - b.top - a.top - a.bottom - b.bottom) : (c.pixelWidth = h.width, c.pixelHeight = h.height)) : (b = b.style, F ? b.MozBoxSizing = "border-box" : G ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(h.width, 0) + "px", b.height = Math.max(h.height, 0) + "px");
        return l
    };
var ef = function() {};
da(ef);
ef.prototype.nextId_ = 0;
var ff = function(a) {
        return ":" + (a.nextId_++).toString(36)
    };
ef.getInstance();
var gf = function(a, b, c, d) {
        this.parent_ = a || document.body;
        this.dom_ = Kb(this.parent_);
        this.reposition_ = !a;
        this.element_ = k;
        this.token_ = "";
        this.rows_ = [];
        this.rowDivs_ = [];
        this.startRenderingRows_ = this.hilitedRow_ = -1;
        this.visible_ = r;
        this.className = "ac-renderer";
        this.rowClassName = "ac-row";
        this.legacyActiveClassName_ = "active";
        this.activeClassName = "ac-active";
        this.highlightedClassName = "ac-highlighted";
        this.customRenderer_ = b || k;
        this.useStandardHighlighting_ = d != k ? d : j;
        this.highlightAllTokens_ = r;
        this.rightAlign_ = !! c;
        this.topAlign_ = r;
        this.menuFadeDuration_ = 0
    };
x(gf, Ic);
s = gf.prototype;
s.getElement = function() {
    return this.element_
};
s.renderRows = function(a, b, c) {
    this.token_ = b;
    this.rows_ = a;
    this.hilitedRow_ = -1;
    this.startRenderingRows_ = ra();
    this.target_ = c;
    this.rowDivs_ = [];
    this.element_ || (this.element_ = a = this.dom_.createDom("div", {
        style: "display:none"
    }), z(a, this.className), Zd(a, "listbox"), a.id = ff(ef.getInstance()), this.dom_.appendChild(this.parent_, a), L(a, "click", this.handleClick_, r, this), L(a, "mousedown", this.handleMouseDown_, r, this), L(a, "mouseover", this.handleMouseOver_, r, this));
    this.topAlign_ && (this.element_.style.visibility = "hidden");
    this.widthProvider_ && (this.element_.style.minWidth = this.widthProvider_.clientWidth + "px");
    this.rowDivs_.length = 0;
    this.dom_.removeChildren(this.element_);
    if (this.customRenderer_ && this.customRenderer_.render) this.customRenderer_.render(this);
    else {
        var d = k;
        Oc(this.rows_, function(a) {
            var b = this.token_,
                c = this.dom_.createDom("div", {
                    className: this.rowClassName,
                    id: ff(ef.getInstance())
                });
            Zd(c, "option");
            this.customRenderer_ && this.customRenderer_.renderRow ? this.customRenderer_.renderRow(a, 0, c) : c.innerHTML = Ba(a.data.toString());
            b && this.useStandardHighlighting_ && hf(this, c, b);
            z(c, this.rowClassName);
            this.rowDivs_.push(c);
            a = c;
            this.topAlign_ ? this.element_.insertBefore(a, d) : this.dom_.appendChild(this.element_, a);
            d = a
        }, this)
    }
    0 == this.rows_.length ? this.dismiss() : (this.show(), this.reposition(), Ie(this.element_, j))
};
s.dismiss = function() {
    this.target_ && P(this.target_, "activedescendant", "");
    this.visible_ && (this.visible_ = r, this.target_ && P(this.target_, "haspopup", r), 0 < this.menuFadeDuration_ ? (gc(this.animation_), this.animation_ = new af(this.element_, this.menuFadeDuration_), this.animation_.play()) : Ge(this.element_, r))
};
s.show = function() {
    this.visible_ || (this.visible_ = j, this.target_ && (Zd(this.target_, "combobox"), P(this.target_, "autocomplete", "list"), P(this.target_, "haspopup", j)), 0 < this.menuFadeDuration_ ? (gc(this.animation_), this.animation_ = new bf(this.element_, this.menuFadeDuration_), this.animation_.play()) : Ge(this.element_, j))
};
s.isVisible = function() {
    return this.visible_
};
var jf = function(a, b) {
        var c = 0 <= b && b < a.rowDivs_.length ? a.rowDivs_[b] : i;
        if (a.dispatchEvent({
            type: "rowhilite",
            rowNode: c
        }) && (0 <= a.hilitedRow_ && Xa(a.rowDivs_[a.hilitedRow_], a.activeClassName, a.legacyActiveClassName_), a.hilitedRow_ = b, c)) {
            z(c, a.activeClassName, a.legacyActiveClassName_);
            a.target_ && P(a.target_, "activedescendant", c ? c.id : "");
            var d = a.element_,
                f = Ae(c),
                e = Ae(d),
                h = Ne(d),
                l = f.x - e.x - h.left,
                f = f.y - e.y - h.top,
                e = d.clientHeight - c.offsetHeight,
                h = d.scrollLeft,
                m = d.scrollTop,
                h = h + Math.min(l, Math.max(l - (d.clientWidth - c.offsetWidth), 0)),
                m = m + Math.min(f, Math.max(f - e, 0)),
                c = new A(h, m);
            d.scrollLeft = c.x;
            d.scrollTop = c.y
        }
    };
gf.prototype.hiliteId = function(a) {
    if (-1 == a) jf(this, -1);
    else for (var b = 0; b < this.rows_.length; b++) if (this.rows_[b].id == a) {
        jf(this, b);
        break
    }
};
gf.prototype.reposition = function() {
    if (this.target_ && this.reposition_) {
        var a = this.anchorElement_ || this.target_,
            b = this.rightAlign_ ? 3 : 1;
        this.topAlign_ && (b ^= 1);
        df(a, b, this.element_, b ^ 1, k, k, 65);
        this.topAlign_ && (this.element_.style.visibility = "visible")
    }
};
gf.prototype.disposeInternal = function() {
    this.element_ && (zc(this.element_, "click", this.handleClick_, r, this), zc(this.element_, "mousedown", this.handleMouseDown_, r, this), zc(this.element_, "mouseover", this.handleMouseOver_, r, this), this.dom_.removeNode(this.element_), this.element_ = k, this.visible_ = r);
    gc(this.animation_);
    this.parent_ = k;
    gf.superClass_.disposeInternal.call(this)
};
var hf = function(a, b, c) {
        if (3 == b.nodeType) {
            var d = k;
            ha(c) && (1 < c.length && !a.highlightAllTokens_) && (d = Ta(c, 1));
            var f = "";
            c && (ha(c) && (c = Na(c, function(a) {
                return !ua(a)
            })), a.highlightAllTokens_ ? ha(c) ? f = Oa(c, Da).join("|") : (f = c.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), f = Da(f), f = f.replace(/ /g, "|")) : ha(c) ? f = 0 < c.length ? Da(c[0]) : "" : /^\W/.test(c) || (f = Da(c)));
            c = f;
            if (0 != c.length) {
                for (var f = b.nodeValue, e = RegExp("([\\s\\S]*?)\\b(" + c + ")", "gi"), c = [], h = 0, l = e.exec(f), m = 0; l;) m++, c.push(l[1]), c.push(l[2]), h = e.lastIndex, l = e.exec(f);
                c.push(f.substring(h));
                if (1 < c.length) {
                    d = !a.highlightAllTokens_ ? 1 : m;
                    for (f = 0; f < d; f++) e = 2 * f, b.nodeValue = c[e], h = a.dom_.createElement("b"), h.className = a.highlightedClassName, a.dom_.appendChild(h, a.dom_.createTextNode(c[e + 1])), h = b.parentNode.insertBefore(h, b.nextSibling), b.parentNode.insertBefore(a.dom_.createTextNode(""), h.nextSibling), b = h.nextSibling;
                    a = Ta(c, 2 * d);
                    b.nodeValue = a.join("")
                } else d && hf(a, b, d)
            }
        } else for (b = b.firstChild; b;) d = b.nextSibling, hf(a, b, c), b = d
    },
    kf = function(a, b) {
        for (; b && b != a.element_ && !Qa(Wa(b), a.rowClassName);) b = b.parentNode;
        return b ? La(a.rowDivs_, b) : -1
    };
gf.prototype.handleClick_ = function(a) {
    var b = kf(this, a.target);
    0 <= b && this.dispatchEvent({
        type: "select",
        row: this.rows_[b].id
    });
    a.stopPropagation()
};
gf.prototype.handleMouseDown_ = function(a) {
    a.stopPropagation();
    a.preventDefault()
};
gf.prototype.handleMouseOver_ = function(a) {
    a = kf(this, a.target);
    0 <= a && !(300 > ra() - this.startRenderingRows_) && this.dispatchEvent({
        type: "hilite",
        row: this.rows_[a].id
    })
};
var mf = function(a, b, c, d, f) {
        function e(a) {
            a && (a.tabIndex = 0, Zd(a, h.getAriaRole()), z(a, "goog-zippy-header"), lf(h, a), a && M(h.keyboardEventHandler_, a, "keydown", h.onHeaderKeyDown_))
        }
        this.dom_ = f || Kb();
        this.elHeader_ = this.dom_.getElement(a) || k;
        this.elExpandedHeader_ = this.dom_.getElement(d || k);
        this.elContent_ = (this.lazyCreateFunc_ = ja(b) ? b : k) || !b ? k : this.dom_.getElement(b);
        this.expanded_ = c == j;
        this.keyboardEventHandler_ = new Gc(this);
        this.mouseEventHandler_ = new Gc(this);
        var h = this;
        e(this.elHeader_);
        e(this.elExpandedHeader_);
        this.setExpanded(this.expanded_)
    };
x(mf, Ic);
s = mf.prototype;
s.handleMouseEvents_ = j;
s.handleKeyEvents_ = j;
s.disposeInternal = function() {
    mf.superClass_.disposeInternal.call(this);
    gc(this.keyboardEventHandler_);
    gc(this.mouseEventHandler_)
};
s.getAriaRole = function() {
    return "tab"
};
s.getContentElement = function() {
    return this.elContent_
};
s.collapse = function() {
    this.setExpanded(r)
};
s.toggle = function() {
    this.setExpanded(!this.expanded_)
};
s.setExpanded = function(a) {
    this.elContent_ ? Ge(this.elContent_, a) : a && this.lazyCreateFunc_ && (this.elContent_ = this.lazyCreateFunc_());
    this.elContent_ && z(this.elContent_, "goog-zippy-content");
    this.elExpandedHeader_ ? (Ge(this.elHeader_, !a), Ge(this.elExpandedHeader_, a)) : nf(this, a);
    this.setExpandedInternal(a);
    this.dispatchEvent(new of("toggle", this))
};
s.setExpandedInternal = function(a) {
    this.expanded_ = a
};
var nf = function(a, b) {
        a.elHeader_ && (Ya(a.elHeader_, "goog-zippy-expanded", b), Ya(a.elHeader_, "goog-zippy-collapsed", !b), P(a.elHeader_, "expanded", b))
    };
mf.prototype.isHandleMouseEvents = function() {
    return this.handleKeyEvents_
};
mf.prototype.setHandleMouseEvents = function(a) {
    this.handleMouseEvents_ != a && ((this.handleMouseEvents_ = a) ? (lf(this, this.elHeader_), lf(this, this.elExpandedHeader_)) : this.mouseEventHandler_.removeAll())
};
var lf = function(a, b) {
        b && M(a.mouseEventHandler_, b, "click", a.onHeaderClick_)
    };
mf.prototype.onHeaderKeyDown_ = function(a) {
    if (13 == a.keyCode || 32 == a.keyCode) this.toggle(), this.dispatchEvent(new lc("action", this)), a.preventDefault(), a.stopPropagation()
};
mf.prototype.onHeaderClick_ = function() {
    this.toggle();
    this.dispatchEvent(new lc("action", this))
};
var of = function(a, b) {
        lc.call(this, a, b)
    };
x(of, lc);
var pf = function(a, b, c) {
        var d = Pb("div", {
            style: "overflow:hidden"
        }),
            b = Lb(b);
        b.parentNode.replaceChild(d, b);
        d.appendChild(b);
        this.elWrapper_ = d;
        this.anim_ = k;
        mf.call(this, a, b, c);
        a = this.expanded_;
        this.elWrapper_.style.display = a ? "" : "none";
        nf(this, a)
    };
x(pf, mf);
s = pf.prototype;
s.animationDuration = 500;
s.animationAcceleration = function(a) {
    return 1 - Math.pow(1 - a, 3)
};
s.setExpanded = function(a) {
    if (this.expanded_ != a || this.anim_) {
        "none" == this.elWrapper_.style.display && (this.elWrapper_.style.display = "");
        var b = this.getContentElement().offsetHeight,
            c = 0;
        this.anim_ ? (a = this.expanded_, Dc(this.anim_), this.anim_.stop(r), c = parseInt(this.getContentElement().style.marginTop, 10), c = b - Math.abs(c)) : c = a ? 0 : b;
        nf(this, a);
        this.anim_ = new We([0, c], [0, a ? b : 0], this.animationDuration, this.animationAcceleration);
        L(this.anim_, ["begin", "animate", "end"], this.onAnimate_, r, this);
        L(this.anim_, "end", v(this.onAnimationCompleted_, this, a));
        this.anim_.play(r)
    }
};
s.onAnimate_ = function(a) {
    var b = this.getContentElement();
    b.style.marginTop = a.y - b.offsetHeight + "px"
};
s.onAnimationCompleted_ = function(a) {
    a && (this.getContentElement().style.marginTop = "0");
    Dc(this.anim_);
    this.setExpandedInternal(a);
    this.anim_ = k;
    a || (this.elWrapper_.style.display = "none");
    this.dispatchEvent(new of("toggle", this))
};
var Q = function(a) {
        this.dom_ = a || Kb();
        this.rightToLeft_ = qf
    };
x(Q, Ic);
Q.prototype.idGenerator_ = ef.getInstance();
var qf = k,
    rf = function(a, b) {
        switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
        }
        g(Error("Invalid component state"))
    };
s = Q.prototype;
s.id_ = k;
s.inDocument_ = r;
s.element_ = k;
s.rightToLeft_ = k;
s.parent_ = k;
s.children_ = k;
s.childIndex_ = k;
s.wasDecorated_ = r;
var sf = function(a) {
        return a.id_ || (a.id_ = ff(a.idGenerator_))
    },
    tf = function(a, b) {
        if (a.parent_ && a.parent_.childIndex_) {
            var c = a.parent_.childIndex_,
                d = a.id_;
            d in c && delete c[d];
            fb(a.parent_.childIndex_, b, a)
        }
        a.id_ = b
    };
Q.prototype.getElement = function() {
    return this.element_
};
var uf = function(a) {
        return a.googUiComponentHandler_ || (a.googUiComponentHandler_ = new Gc(a))
    },
    vf = function(a, b) {
        a == b && g(Error("Unable to set parent component"));
        b && (a.parent_ && a.id_ && a.parent_.childIndex_ && a.id_ && (a.id_ in a.parent_.childIndex_ && a.parent_.childIndex_[a.id_]) && a.parent_ != b) && g(Error("Unable to set parent component"));
        a.parent_ = b;
        Q.superClass_.setParentEventTarget.call(a, b)
    };
s = Q.prototype;
s.getParent = function() {
    return this.parent_
};
s.setParentEventTarget = function(a) {
    this.parent_ && this.parent_ != a && g(Error("Method not supported"));
    Q.superClass_.setParentEventTarget.call(this, a)
};
s.getDomHelper = function() {
    return this.dom_
};
s.createDom = function() {
    this.element_ = this.dom_.createElement("div")
};
s.render = function(a) {
    wf(this, a)
};
var wf = function(a, b, c) {
        a.inDocument_ && g(Error("Component already rendered"));
        a.element_ || a.createDom();
        b ? b.insertBefore(a.element_, c || k) : a.dom_.document_.body.appendChild(a.element_);
        (!a.parent_ || a.parent_.inDocument_) && a.enterDocument()
    };
s = Q.prototype;
s.decorate = function(a) {
    this.inDocument_ && g(Error("Component already rendered"));
    if (a && this.canDecorate(a)) {
        this.wasDecorated_ = j;
        if (!this.dom_ || this.dom_.document_ != I(a)) this.dom_ = Kb(a);
        this.decorateInternal(a);
        this.enterDocument()
    } else g(Error("Invalid element to decorate"))
};
s.canDecorate = function() {
    return j
};
s.decorateInternal = function(a) {
    this.element_ = a
};
s.enterDocument = function() {
    this.inDocument_ = j;
    xf(this, function(a) {
        !a.inDocument_ && a.getElement() && a.enterDocument()
    })
};
s.exitDocument = function() {
    xf(this, function(a) {
        a.inDocument_ && a.exitDocument()
    });
    this.googUiComponentHandler_ && this.googUiComponentHandler_.removeAll();
    this.inDocument_ = r
};
s.disposeInternal = function() {
    Q.superClass_.disposeInternal.call(this);
    this.inDocument_ && this.exitDocument();
    this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(), delete this.googUiComponentHandler_);
    xf(this, function(a) {
        a.dispose()
    });
    !this.wasDecorated_ && this.element_ && Sb(this.element_);
    this.parent_ = this.element_ = this.childIndex_ = this.children_ = k
};
s.addChild = function(a, b) {
    this.addChildAt(a, yf(this), b)
};
s.addChildAt = function(a, b, c) {
    a.inDocument_ && (c || !this.inDocument_) && g(Error("Component already rendered"));
    (0 > b || b > yf(this)) && g(Error("Child component index out of bounds"));
    if (!this.childIndex_ || !this.children_) this.childIndex_ = {}, this.children_ = [];
    if (a.getParent() == this) {
        var d = sf(a);
        this.childIndex_[d] = a;
        Ra(this.children_, a)
    } else fb(this.childIndex_, sf(a), a);
    vf(a, this);
    Ua(this.children_, b, 0, a);
    a.inDocument_ && this.inDocument_ && a.getParent() == this ? (c = this.getContentElement(), c.insertBefore(a.getElement(), c.childNodes[b] || k)) : c ? (this.element_ || this.createDom(), b = R(this, b + 1), wf(a, this.getContentElement(), b ? b.element_ : k)) : this.inDocument_ && (!a.inDocument_ && a.element_ && a.element_.parentNode) && a.enterDocument()
};
s.getContentElement = function() {
    return this.element_
};
s.isRightToLeft = function() {
    this.rightToLeft_ == k && (this.rightToLeft_ = Be(this.inDocument_ ? this.element_ : this.dom_.document_.body));
    return this.rightToLeft_
};
s.setRightToLeft = function(a) {
    this.inDocument_ && g(Error("Component already rendered"));
    this.rightToLeft_ = a
};
var zf = function(a) {
        return !!a.children_ && 0 != a.children_.length
    },
    yf = function(a) {
        return a.children_ ? a.children_.length : 0
    },
    R = function(a, b) {
        return a.children_ ? a.children_[b] || k : k
    },
    xf = function(a, b, c) {
        a.children_ && Ma(a.children_, b, c)
    },
    Af = function(a, b) {
        return a.children_ && b ? La(a.children_, b) : -1
    };
Q.prototype.removeChild = function(a, b) {
    if (a) {
        var c = u(a) ? a : sf(a),
            a = this.childIndex_ && c ? (c in this.childIndex_ ? this.childIndex_[c] : i) || k : k;
        if (c && a) {
            var d = this.childIndex_;
            c in d && delete d[c];
            Ra(this.children_, a);
            b && (a.exitDocument(), a.element_ && Sb(a.element_));
            vf(a, k)
        }
    }
    a || g(Error("Child is not in parent component"));
    return a
};
Q.prototype.removeChildren = function(a) {
    for (var b = []; zf(this);) b.push(this.removeChild(R(this, 0), a));
    return b
};
var Bf = function() {},
    Cf;
da(Bf);
s = Bf.prototype;
s.getAriaRole = function() {};
s.createDom = function(a) {
    var b = a.getDomHelper().createDom("div", this.getClassNames(a).join(" "), a.content_);
    Df(a, b);
    return b
};
s.getContentElement = function(a) {
    return a
};
s.enableClassName = function(a, b, c) {
    if (a = a.getElement ? a.getElement() : a) if (E && !H("7")) {
        var d = Ef(Wa(a), b);
        d.push(b);
        qa(c ? z : Xa, a).apply(k, d)
    } else Ya(a, b, c)
};
s.canDecorate = function() {
    return j
};
s.decorate = function(a, b) {
    b.id && tf(a, b.id);
    var c = this.getContentElement(b);
    c && c.firstChild ? (c = c.firstChild.nextSibling ? Sa(c.childNodes) : c.firstChild, a.content_ = c) : a.content_ = k;
    var d = 0,
        f = this.getCssClass(),
        e = this.getCssClass(),
        h = r,
        l = r,
        c = r,
        m = Wa(b);
    Ma(m, function(a) {
        if (!h && a == f) h = j, e == f && (l = j);
        else if (!l && a == e) l = j;
        else {
            var b = d;
            this.stateByClass_ || (this.classByState_ || Ff(this), this.stateByClass_ = gb(this.classByState_));
            a = parseInt(this.stateByClass_[a], 10);
            d = b | (isNaN(a) ? 0 : a)
        }
    }, this);
    a.state_ = d;
    h || (m.push(f), e == f && (l = j));
    l || m.push(e);
    var n = a.extraClassNames_;
    n && m.push.apply(m, n);
    if (E && !H("7")) {
        var p = Ef(m);
        0 < p.length && (m.push.apply(m, p), c = j)
    }
    if (!h || !l || n || c) c = m.join(" "), b.className = c;
    Df(a, b);
    return b
};
s.initializeDom = function(a) {
    a.isRightToLeft() && this.setRightToLeft(a.getElement(), j);
    a.isEnabled() && this.setFocusable(a, a.isVisible())
};
var Df = function(a, b) {
        Ga(a);
        Ga(b);
        a.isEnabled() || Gf(b, 1, j);
        a.isSelected() && Gf(b, 8, j);
        a.supportedStates_ & 16 && Gf(b, 16, a.isChecked());
        a.supportedStates_ & 64 && Gf(b, 64, a.isOpen())
    };
s = Bf.prototype;
s.setAllowTextSelection = function(a, b) {
    Ie(a, !b, !E && !sb)
};
s.setRightToLeft = function(a, b) {
    this.enableClassName(a, this.getCssClass() + "-rtl", b)
};
s.isFocusable = function(a) {
    var b;
    return a.supportedStates_ & 32 && (b = a.getKeyEventTarget()) ? Yb(b) : r
};
s.setFocusable = function(a, b) {
    var c;
    if (a.supportedStates_ & 32 && (c = a.getKeyEventTarget())) {
        if (!b && a.state_ & 32) {
            try {
                c.blur()
            } catch (d) {}
            a.state_ & 32 && a.handleBlur(k)
        }
        Yb(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
};
s.setVisible = function(a, b) {
    Ge(a, b)
};
s.setState = function(a, b, c) {
    var d = a.getElement();
    if (d) {
        var f = Hf(this, b);
        f && this.enableClassName(a, f, c);
        Gf(d, b, c)
    }
};
var Gf = function(a, b, c) {
        Cf || (Cf = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        (b = Cf[b]) && P(a, b, c)
    };
Bf.prototype.getKeyEventTarget = function(a) {
    return a.getElement()
};
Bf.prototype.getCssClass = function() {
    return "goog-control"
};
Bf.prototype.getClassNames = function(a) {
    var b = this.getCssClass(),
        c = [b],
        d = this.getCssClass();
    d != b && c.push(d);
    b = a.getState();
    for (d = []; b;) {
        var f = b & -b;
        d.push(Hf(this, f));
        b &= ~f
    }
    c.push.apply(c, d);
    (a = a.extraClassNames_) && c.push.apply(c, a);
    E && !H("7") && c.push.apply(c, Ef(c));
    return c
};
var Ef = function(a, b) {
        var c = [];
        b && (a = a.concat([b]));
        Ma([], function(d) {
            Pa(d, qa(Qa, a)) && (!b || Qa(d, b)) && c.push(d.join("_"))
        });
        return c
    },
    Hf = function(a, b) {
        a.classByState_ || Ff(a);
        return a.classByState_[b]
    },
    Ff = function(a) {
        var b = a.getCssClass();
        a.classByState_ = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };
var If = function() {};
x(If, Bf);
da(If);
If.prototype.createDom = function(a) {
    var b = a.getDomHelper().createDom("span", this.getClassNames(a).join(" "));
    Jf(this, b, a.checked_);
    return b
};
If.prototype.decorate = function(a, b) {
    var b = If.superClass_.decorate.call(this, a, b),
        c = Wa(b),
        d = r;
    Qa(c, Kf(this, k)) ? d = k : Qa(c, Kf(this, j)) ? d = j : Qa(c, Kf(this, r)) && (d = r);
    a.checked_ = d;
    P(b, "checked", d == k ? "mixed" : d == j ? "true" : "false");
    return b
};
If.prototype.getAriaRole = function() {
    return "checkbox"
};
var Jf = function(a, b, c) {
        if (b) {
            var d = Kf(a, c);
            Ga(d);
            Qa(Wa(b), d) || (bb(Lf, function(a) {
                a = Kf(this, a);
                Ya(b, a, a == d)
            }, a), P(b, "checked", c == k ? "mixed" : c == j ? "true" : "false"))
        }
    };
If.prototype.getCssClass = function() {
    return "goog-checkbox"
};
var Kf = function(a, b) {
        var c = a.getCssClass();
        if (b == j) return c + "-checked";
        if (b == r) return c + "-unchecked";
        if (b == k) return c + "-undetermined";
        g(Error("Invalid checkbox state: " + b))
    };
var Nf = function(a, b) {
        a || g(Error("Invalid class name " + a));
        ja(b) || g(Error("Invalid decorator function " + b));
        Mf[a] = b
    },
    Of = {},
    Mf = {};
var S = function(a, b, c) {
        Q.call(this, c);
        if (!b) {
            for (var b = this.constructor, d; b;) {
                d = na(b);
                if (d = Of[d]) break;
                b = b.superClass_ ? b.superClass_.constructor : k
            }
            b = d ? ja(d.getInstance) ? d.getInstance() : new d : k
        }
        this.renderer_ = b;
        this.content_ = a
    };
x(S, Q);
s = S.prototype;
s.content_ = k;
s.state_ = 0;
s.supportedStates_ = 39;
s.autoStates_ = 255;
s.statesWithTransitionEvents_ = 0;
s.visible_ = j;
s.extraClassNames_ = k;
s.handleMouseEvents_ = j;
s.allowTextSelection_ = r;
s.preferredAriaRole_ = k;
s.isHandleMouseEvents = function() {
    return this.handleMouseEvents_
};
s.setHandleMouseEvents = function(a) {
    this.inDocument_ && a != this.handleMouseEvents_ && Pf(this, a);
    this.handleMouseEvents_ = a
};
s.getKeyEventTarget = function() {
    return this.renderer_.getKeyEventTarget(this)
};
s.getKeyHandler = function() {
    return this.keyHandler_ || (this.keyHandler_ = new ce)
};
s.getRenderer = function() {
    return this.renderer_
};
s.enableClassName = function(a, b) {
    b ? a && (this.extraClassNames_ ? Qa(this.extraClassNames_, a) || this.extraClassNames_.push(a) : this.extraClassNames_ = [a], this.renderer_.enableClassName(this, a, j)) : a && this.extraClassNames_ && (Ra(this.extraClassNames_, a), 0 == this.extraClassNames_.length && (this.extraClassNames_ = k), this.renderer_.enableClassName(this, a, r))
};
s.createDom = function() {
    var a = this.renderer_.createDom(this);
    this.element_ = a;
    var b = this.preferredAriaRole_ || this.renderer_.getAriaRole();
    b && Zd(a, b);
    this.allowTextSelection_ || this.renderer_.setAllowTextSelection(a, r);
    this.isVisible() || this.renderer_.setVisible(a, r)
};
s.getContentElement = function() {
    return this.renderer_.getContentElement(this.getElement())
};
s.canDecorate = function(a) {
    return this.renderer_.canDecorate(a)
};
s.decorateInternal = function(a) {
    this.element_ = a = this.renderer_.decorate(this, a);
    var b = this.preferredAriaRole_ || this.renderer_.getAriaRole();
    b && Zd(a, b);
    this.allowTextSelection_ || this.renderer_.setAllowTextSelection(a, r);
    this.visible_ = "none" != a.style.display
};
s.enterDocument = function() {
    S.superClass_.enterDocument.call(this);
    this.renderer_.initializeDom(this);
    if (this.supportedStates_ & -2 && (this.isHandleMouseEvents() && Pf(this, j), this.supportedStates_ & 32)) {
        var a = this.getKeyEventTarget();
        if (a) {
            var b = this.getKeyHandler();
            b.attach(a);
            M(M(M(uf(this), b, "key", this.handleKeyEvent), a, "focus", this.handleFocus), a, "blur", this.handleBlur)
        }
    }
};
var Pf = function(a, b) {
        var c = uf(a),
            d = a.getElement();
        b ? (M(M(M(M(c, d, "mouseover", a.handleMouseOver), d, "mousedown", a.handleMouseDown), d, "mouseup", a.handleMouseUp), d, "mouseout", a.handleMouseOut), a.handleContextMenu != ca && M(c, d, "contextmenu", a.handleContextMenu), E && M(c, d, "dblclick", a.handleDblClick)) : (N(N(N(N(c, d, "mouseover", a.handleMouseOver), d, "mousedown", a.handleMouseDown), d, "mouseup", a.handleMouseUp), d, "mouseout", a.handleMouseOut), a.handleContextMenu != ca && N(c, d, "contextmenu", a.handleContextMenu), E && N(c, d, "dblclick", a.handleDblClick))
    };
s = S.prototype;
s.exitDocument = function() {
    S.superClass_.exitDocument.call(this);
    this.keyHandler_ && this.keyHandler_.detach();
    this.isVisible() && this.isEnabled() && this.renderer_.setFocusable(this, r)
};
s.disposeInternal = function() {
    S.superClass_.disposeInternal.call(this);
    this.keyHandler_ && (this.keyHandler_.dispose(), delete this.keyHandler_);
    delete this.renderer_;
    this.extraClassNames_ = this.content_ = k
};
s.setRightToLeft = function(a) {
    S.superClass_.setRightToLeft.call(this, a);
    var b = this.getElement();
    b && this.renderer_.setRightToLeft(b, a)
};
s.setAllowTextSelection = function(a) {
    this.allowTextSelection_ = a;
    var b = this.getElement();
    b && this.renderer_.setAllowTextSelection(b, a)
};
s.isVisible = function() {
    return this.visible_
};
s.setVisible = function(a, b) {
    if (b || this.visible_ != a && this.dispatchEvent(a ? "show" : "hide")) {
        var c = this.getElement();
        c && this.renderer_.setVisible(c, a);
        this.isEnabled() && this.renderer_.setFocusable(this, a);
        this.visible_ = a;
        return j
    }
    return r
};
s.isEnabled = function() {
    return !(this.state_ & 1)
};
s.setEnabled = function(a) {
    var b = this.getParent();
    if ((!b || "function" != typeof b.isEnabled || b.isEnabled()) && Qf(this, 1, !a)) a || (this.setActive(r), this.setHighlighted(r)), this.isVisible() && this.renderer_.setFocusable(this, a), this.setState(1, !a)
};
s.setHighlighted = function(a) {
    Qf(this, 2, a) && this.setState(2, a)
};
s.isActive = function() {
    return !!(this.state_ & 4)
};
s.setActive = function(a) {
    Qf(this, 4, a) && this.setState(4, a)
};
s.isSelected = function() {
    return !!(this.state_ & 8)
};
var Rf = function(a, b) {
        Qf(a, 8, b) && a.setState(8, b)
    };
S.prototype.isChecked = function() {
    return !!(this.state_ & 16)
};
S.prototype.setChecked = function(a) {
    Qf(this, 16, a) && this.setState(16, a)
};
S.prototype.isOpen = function() {
    return !!(this.state_ & 64)
};
var Sf = function(a, b) {
        Qf(a, 64, b) && a.setState(64, b)
    };
S.prototype.getState = function() {
    return this.state_
};
S.prototype.setState = function(a, b) {
    this.supportedStates_ & a && b != !! (this.state_ & a) && (this.renderer_.setState(this, a, b), this.state_ = b ? this.state_ | a : this.state_ & ~a)
};
var Tf = function(a, b, c) {
        a.inDocument_ && (a.state_ & b && !c) && g(Error("Component already rendered"));
        !c && a.state_ & b && a.setState(b, r);
        a.supportedStates_ = c ? a.supportedStates_ | b : a.supportedStates_ & ~b
    },
    Uf = function(a, b) {
        return !!(a.autoStates_ & b) && !! (a.supportedStates_ & b)
    },
    Qf = function(a, b, c) {
        return !!(a.supportedStates_ & b) && !! (a.state_ & b) != c && (!(a.statesWithTransitionEvents_ & b) || a.dispatchEvent(rf(b, c))) && !a.disposed_
    };
S.prototype.handleMouseOver = function(a) {
    !Vf(a, this.getElement()) && (this.dispatchEvent("enter") && this.isEnabled() && Uf(this, 2)) && this.setHighlighted(j)
};
S.prototype.handleMouseOut = function(a) {
    !Vf(a, this.getElement()) && this.dispatchEvent("leave") && (Uf(this, 4) && this.setActive(r), Uf(this, 2) && this.setHighlighted(r))
};
S.prototype.handleContextMenu = ca;
var Vf = function(a, b) {
        return !!a.relatedTarget && Ub(b, a.relatedTarget)
    };
S.prototype.handleMouseDown = function(a) {
    if (this.isEnabled() && (Uf(this, 2) && this.setHighlighted(j), oc(a) && (!G || !nb || !a.ctrlKey))) Uf(this, 4) && this.setActive(j), this.renderer_.isFocusable(this) && this.getKeyEventTarget().focus();
    !this.allowTextSelection_ && (oc(a) && (!G || !nb || !a.ctrlKey)) && a.preventDefault()
};
S.prototype.handleMouseUp = function(a) {
    this.isEnabled() && (Uf(this, 2) && this.setHighlighted(j), this.isActive() && (Wf(this, a) && Uf(this, 4)) && this.setActive(r))
};
S.prototype.handleDblClick = function(a) {
    this.isEnabled() && Wf(this, a)
};
var Wf = function(a, b) {
        Uf(a, 16) && a.setChecked(!a.isChecked());
        Uf(a, 8) && Rf(a, j);
        Uf(a, 64) && Sf(a, !a.isOpen());
        var c = new lc("action", a);
        b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.platformModifierKey = b.platformModifierKey);
        return a.dispatchEvent(c)
    };
S.prototype.handleFocus = function() {
    Uf(this, 32) && Qf(this, 32, j) && this.setState(32, j)
};
S.prototype.handleBlur = function() {
    Uf(this, 4) && this.setActive(r);
    Uf(this, 32) && Qf(this, 32, r) && this.setState(32, r)
};
S.prototype.handleKeyEvent = function(a) {
    return this.isVisible() && this.isEnabled() && this.handleKeyEventInternal(a) ? (a.preventDefault(), a.stopPropagation(), j) : r
};
S.prototype.handleKeyEventInternal = function(a) {
    return 13 == a.keyCode && Wf(this, a)
};
ja(S) || g(Error("Invalid component class " + S));
ja(Bf) || g(Error("Invalid renderer class " + Bf));
var Xf = na(S);
Of[Xf] = Bf;
Nf("goog-control", function() {
    return new S(k)
});
var Yf = function(a, b, c) {
        c = c || If.getInstance();
        S.call(this, k, c, b);
        this.checked_ = ga(a) ? a : r
    };
x(Yf, S);
var Lf = {
    CHECKED: j,
    UNCHECKED: r,
    UNDETERMINED: k
};
s = Yf.prototype;
s.label_ = k;
s.isChecked = function() {
    return this.checked_ == j
};
s.setChecked = function(a) {
    a != this.checked_ && (this.checked_ = a, Jf(this.getRenderer(), this.getElement(), this.checked_))
};
s.toggle = function() {
    this.setChecked(this.checked_ ? r : j)
};
s.enterDocument = function() {
    Yf.superClass_.enterDocument.call(this);
    if (this.isHandleMouseEvents()) {
        var a = uf(this);
        this.label_ && M(M(M(M(M(a, this.label_, "click", this.handleClickOrSpace_), this.label_, "mouseover", this.handleMouseOver), this.label_, "mouseout", this.handleMouseOut), this.label_, "mousedown", this.handleMouseDown), this.label_, "mouseup", this.handleMouseUp);
        M(a, this.getElement(), "click", this.handleClickOrSpace_)
    }
    if (this.label_) {
        if (!this.label_.id) {
            var a = this.label_,
                b;
            b = sf(this) + ".lbl";
            a.id = b
        }
        P(this.getElement(), "labelledby", this.label_.id)
    }
};
s.setEnabled = function(a) {
    Yf.superClass_.setEnabled.call(this, a);
    if (a = this.getElement()) a.tabIndex = this.isEnabled() ? 0 : -1
};
s.handleClickOrSpace_ = function(a) {
    a.stopPropagation();
    var b = this.checked_ ? "uncheck" : "check";
    this.isEnabled() && this.dispatchEvent(b) && (a.preventDefault(), this.toggle(), this.dispatchEvent("change"))
};
s.handleKeyEventInternal = function(a) {
    32 == a.keyCode && this.handleClickOrSpace_(a);
    return r
};
Nf("goog-checkbox", function() {
    return new Yf
});
var Zf = function() {};
x(Zf, Bf);
da(Zf);
Zf.prototype.createDom = function(a) {
    return a.getDomHelper().createDom("div", this.getCssClass())
};
Zf.prototype.decorate = function(a, b) {
    b.id && tf(a, b.id);
    if ("HR" == b.tagName) {
        var c = b,
            b = this.createDom(a);
        c.parentNode && c.parentNode.insertBefore(b, c);
        Sb(c)
    } else z(b, this.getCssClass());
    return b
};
Zf.prototype.getCssClass = function() {
    return "goog-menuseparator"
};
var $f = function(a, b) {
        S.call(this, k, a || Zf.getInstance(), b);
        Tf(this, 1, r);
        Tf(this, 2, r);
        Tf(this, 4, r);
        Tf(this, 32, r);
        this.state_ = 1
    };
x($f, S);
$f.prototype.enterDocument = function() {
    $f.superClass_.enterDocument.call(this);
    Zd(this.getElement(), "separator")
};
Nf("goog-menuseparator", function() {
    return new $f
});
var ag = function() {};
da(ag);
s = ag.prototype;
s.getAriaRole = function() {};
s.createDom = function(a) {
    return a.getDomHelper().createDom("div", this.getClassNames(a).join(" "))
};
s.getContentElement = function(a) {
    return a
};
s.canDecorate = function(a) {
    return "DIV" == a.tagName
};
s.decorate = function(a, b) {
    b.id && tf(a, b.id);
    var c = this.getCssClass(),
        d = r,
        f = Wa(b);
    f && Ma(f, function(b) {
        b == c ? d = j : b && this.setStateFromClassName(a, b, c)
    }, this);
    d || z(b, c);
    if (f = this.getContentElement(b)) for (var e = f.firstChild, h; e && e.parentNode == f;) {
        h = e.nextSibling;
        if (1 == e.nodeType) {
            var l;
            a: {
                l = i;
                for (var m = Wa(e), n = 0, p = m.length; n < p; n++) if (l = m[n] in Mf ? Mf[m[n]]() : k) break a;
                l = k
            }
            l && (l.element_ = e, a.isEnabled() || l.setEnabled(r), a.addChild(l), l.decorate(e))
        } else(!e.nodeValue || "" == va(e.nodeValue)) && f.removeChild(e);
        e = h
    }
    return b
};
s.setStateFromClassName = function(a, b, c) {
    b == c + "-disabled" ? a.setEnabled(r) : b == c + "-horizontal" ? bg(a, "horizontal") : b == c + "-vertical" && bg(a, "vertical")
};
s.initializeDom = function(a) {
    a = a.getElement();
    Ie(a, j, F);
    E && (a.hideFocus = j);
    var b = this.getAriaRole();
    b && Zd(a, b)
};
s.getKeyEventTarget = function(a) {
    return a.getElement()
};
s.getCssClass = function() {
    return "goog-container"
};
s.getClassNames = function(a) {
    var b = this.getCssClass(),
        c = [b, "horizontal" == a.orientation_ ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
};
var U = function(a, b, c) {
        Q.call(this, c);
        this.renderer_ = b || ag.getInstance();
        this.orientation_ = a || "vertical"
    };
x(U, Q);
s = U.prototype;
s.keyEventTarget_ = k;
s.keyHandler_ = k;
s.renderer_ = k;
s.orientation_ = k;
s.visible_ = j;
s.enabled_ = j;
s.focusable_ = j;
s.highlightedIndex_ = -1;
s.openItem_ = k;
s.mouseButtonPressed_ = r;
s.allowFocusableChildren_ = r;
s.openFollowsHighlight_ = j;
s.childElementIdMap_ = k;
s.getKeyEventTarget = function() {
    return this.keyEventTarget_ || this.renderer_.getKeyEventTarget(this)
};
s.getKeyHandler = function() {
    return this.keyHandler_ || (this.keyHandler_ = new ce(this.getKeyEventTarget()))
};
s.getRenderer = function() {
    return this.renderer_
};
s.createDom = function() {
    this.element_ = this.renderer_.createDom(this)
};
s.getContentElement = function() {
    return this.renderer_.getContentElement(this.getElement())
};
s.canDecorate = function(a) {
    return this.renderer_.canDecorate(a)
};
s.decorateInternal = function(a) {
    this.element_ = this.renderer_.decorate(this, a);
    "none" == a.style.display && (this.visible_ = r)
};
s.enterDocument = function() {
    U.superClass_.enterDocument.call(this);
    xf(this, function(a) {
        a.inDocument_ && cg(this, a)
    }, this);
    var a = this.getElement();
    this.renderer_.initializeDom(this);
    this.setVisible(this.visible_, j);
    M(M(M(M(M(M(M(M(uf(this), this, "enter", this.handleEnterItem), this, "highlight", this.handleHighlightItem), this, "unhighlight", this.handleUnHighlightItem), this, "open", this.handleOpenItem), this, "close", this.handleCloseItem), a, "mousedown", this.handleMouseDown), I(a), "mouseup", this.handleDocumentMouseUp), a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.handleChildMouseEvents);
    this.isFocusable() && dg(this, j)
};
var dg = function(a, b) {
        var c = uf(a),
            d = a.getKeyEventTarget();
        b ? M(M(M(c, d, "focus", a.handleFocus), d, "blur", a.handleBlur), a.getKeyHandler(), "key", a.handleKeyEvent) : N(N(N(c, d, "focus", a.handleFocus), d, "blur", a.handleBlur), a.getKeyHandler(), "key", a.handleKeyEvent)
    };
s = U.prototype;
s.exitDocument = function() {
    eg(this, -1);
    this.openItem_ && Sf(this.openItem_, r);
    this.mouseButtonPressed_ = r;
    U.superClass_.exitDocument.call(this)
};
s.disposeInternal = function() {
    U.superClass_.disposeInternal.call(this);
    this.keyHandler_ && (this.keyHandler_.dispose(), this.keyHandler_ = k);
    this.renderer_ = this.openItem_ = this.childElementIdMap_ = this.keyEventTarget_ = k
};
s.handleEnterItem = function() {
    return j
};
s.handleHighlightItem = function(a) {
    var b = Af(this, a.target);
    if (-1 < b && b != this.highlightedIndex_) {
        var c = R(this, this.highlightedIndex_);
        c && c.setHighlighted(r);
        this.highlightedIndex_ = b;
        c = R(this, this.highlightedIndex_);
        this.mouseButtonPressed_ && c.setActive(j);
        this.openFollowsHighlight_ && (this.openItem_ && c != this.openItem_) && (c.supportedStates_ & 64 ? Sf(c, j) : Sf(this.openItem_, r))
    }
    P(this.getElement(), "activedescendant", a.target.getElement().id)
};
s.handleUnHighlightItem = function(a) {
    a.target == R(this, this.highlightedIndex_) && (this.highlightedIndex_ = -1);
    P(this.getElement(), "activedescendant", "")
};
s.handleOpenItem = function(a) {
    if ((a = a.target) && a != this.openItem_ && a.getParent() == this) this.openItem_ && Sf(this.openItem_, r), this.openItem_ = a
};
s.handleCloseItem = function(a) {
    a.target == this.openItem_ && (this.openItem_ = k)
};
s.handleMouseDown = function(a) {
    this.enabled_ && (this.mouseButtonPressed_ = j);
    var b = this.getKeyEventTarget();
    b && Yb(b) ? b.focus() : a.preventDefault()
};
s.handleDocumentMouseUp = function() {
    this.mouseButtonPressed_ = r
};
s.handleChildMouseEvents = function(a) {
    var b;
    a: {
        b = a.target;
        if (this.childElementIdMap_) for (var c = this.getElement(); b && b !== c;) {
            var d = b.id;
            if (d in this.childElementIdMap_) {
                b = this.childElementIdMap_[d];
                break a
            }
            b = b.parentNode
        }
        b = k
    }
    if (b) switch (a.type) {
    case "mousedown":
        b.handleMouseDown(a);
        break;
    case "mouseup":
        b.handleMouseUp(a);
        break;
    case "mouseover":
        b.handleMouseOver(a);
        break;
    case "mouseout":
        b.handleMouseOut(a);
        break;
    case "contextmenu":
        b.handleContextMenu(a)
    }
};
s.handleFocus = function() {};
s.handleBlur = function() {
    eg(this, -1);
    this.mouseButtonPressed_ = r;
    this.openItem_ && Sf(this.openItem_, r)
};
s.handleKeyEvent = function(a) {
    return this.isEnabled() && this.isVisible() && (0 != yf(this) || this.keyEventTarget_) && this.handleKeyEventInternal(a) ? (a.preventDefault(), a.stopPropagation(), j) : r
};
s.handleKeyEventInternal = function(a) {
    var b = R(this, this.highlightedIndex_);
    if (b && "function" == typeof b.handleKeyEvent && b.handleKeyEvent(a) || this.openItem_ && this.openItem_ != b && "function" == typeof this.openItem_.handleKeyEvent && this.openItem_.handleKeyEvent(a)) return j;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return r;
    switch (a.keyCode) {
    case 27:
        if (this.isFocusable()) this.getKeyEventTarget().blur();
        else return r;
        break;
    case 36:
        fg(this, function(a, b) {
            return (a + 1) % b
        }, yf(this) - 1);
        break;
    case 35:
        fg(this, function(a, b) {
            a--;
            return 0 > a ? b - 1 : a
        }, 0);
        break;
    case 38:
        if ("vertical" == this.orientation_) gg(this);
        else return r;
        break;
    case 37:
        if ("horizontal" == this.orientation_) this.isRightToLeft() ? hg(this) : gg(this);
        else return r;
        break;
    case 40:
        if ("vertical" == this.orientation_) hg(this);
        else return r;
        break;
    case 39:
        if ("horizontal" == this.orientation_) this.isRightToLeft() ? gg(this) : hg(this);
        else return r;
        break;
    default:
        return r
    }
    return j
};
var cg = function(a, b) {
        var c = b.getElement(),
            c = c.id || (c.id = sf(b));
        a.childElementIdMap_ || (a.childElementIdMap_ = {});
        a.childElementIdMap_[c] = b
    };
U.prototype.addChild = function(a, b) {
    Ja(a, S, "The child of a container must be a control");
    U.superClass_.addChild.call(this, a, b)
};
U.prototype.addChildAt = function(a, b, c) {
    a.statesWithTransitionEvents_ |= 2;
    a.statesWithTransitionEvents_ |= 64;
    (this.isFocusable() || !this.allowFocusableChildren_) && Tf(a, 32, r);
    a.setHandleMouseEvents(r);
    U.superClass_.addChildAt.call(this, a, b, c);
    a.inDocument_ && this.inDocument_ && cg(this, a);
    b <= this.highlightedIndex_ && this.highlightedIndex_++
};
U.prototype.removeChild = function(a, b) {
    if (a = u(a) ? this.childIndex_ && a ? (a in this.childIndex_ ? this.childIndex_[a] : i) || k : k : a) {
        var c = Af(this, a); - 1 != c && (c == this.highlightedIndex_ ? a.setHighlighted(r) : c < this.highlightedIndex_ && this.highlightedIndex_--);
        var d = a.getElement();
        d && (d.id && this.childElementIdMap_) && (c = this.childElementIdMap_, d = d.id, d in c && delete c[d])
    }
    a = U.superClass_.removeChild.call(this, a, b);
    a.setHandleMouseEvents(j);
    return a
};
var bg = function(a, b) {
        a.getElement() && g(Error("Component already rendered"));
        a.orientation_ = b
    };
s = U.prototype;
s.isVisible = function() {
    return this.visible_
};
s.setVisible = function(a, b) {
    if (b || this.visible_ != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.visible_ = a;
        var c = this.getElement();
        if (c) {
            Ge(c, a);
            if (this.isFocusable() && (c = this.getKeyEventTarget())) c.tabIndex = this.enabled_ && this.visible_ ? 0 : -1;
            b || this.dispatchEvent(this.visible_ ? "aftershow" : "afterhide")
        }
        return j
    }
    return r
};
s.isEnabled = function() {
    return this.enabled_
};
s.setEnabled = function(a) {
    if (this.enabled_ != a && this.dispatchEvent(a ? "enable" : "disable")) if (a ? (this.enabled_ = j, xf(this, function(a) {
        a.wasDisabled ? delete a.wasDisabled : a.setEnabled(j)
    })) : (xf(this, function(a) {
        a.isEnabled() ? a.setEnabled(r) : a.wasDisabled = j
    }), this.mouseButtonPressed_ = this.enabled_ = r), this.isFocusable()) {
        var b = this.getKeyEventTarget();
        b && (b.tabIndex = a && this.visible_ ? 0 : -1)
    }
};
s.isFocusable = function() {
    return this.focusable_
};
s.setFocusable = function(a) {
    a != this.focusable_ && this.inDocument_ && dg(this, a);
    this.focusable_ = a;
    if (this.enabled_ && this.visible_) {
        var b = this.getKeyEventTarget();
        b && (b.tabIndex = a ? 0 : -1)
    }
};
var eg = function(a, b) {
        var c = R(a, b);
        c ? c.setHighlighted(j) : -1 < a.highlightedIndex_ && R(a, a.highlightedIndex_).setHighlighted(r)
    };
U.prototype.setHighlighted = function(a) {
    eg(this, Af(this, a))
};
var hg = function(a) {
        fg(a, function(a, c) {
            return (a + 1) % c
        }, a.highlightedIndex_)
    },
    gg = function(a) {
        fg(a, function(a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.highlightedIndex_)
    },
    fg = function(a, b, c) {
        for (var c = 0 > c ? Af(a, a.openItem_) : c, d = yf(a), c = b.call(a, c, d), f = 0; f <= d;) {
            var e = R(a, c);
            if (e && e.isVisible() && e.isEnabled() && e.supportedStates_ & 2) {
                a.setHighlightedIndexFromKeyEvent(c);
                break
            }
            f++;
            c = b.call(a, c, d)
        }
    };
U.prototype.setHighlightedIndexFromKeyEvent = function(a) {
    eg(this, a)
};
var ig = function() {};
x(ig, Bf);
da(ig);
s = ig.prototype;
s.getCssClass = function() {
    return "goog-tab"
};
s.getAriaRole = function() {
    return "tab"
};
s.createDom = function(a) {
    var b = ig.superClass_.createDom.call(this, a);
    (a = a.getTooltip()) && this.setTooltip(b, a);
    return b
};
s.decorate = function(a, b) {
    var b = ig.superClass_.decorate.call(this, a, b),
        c = this.getTooltip(b);
    c && (a.tooltip_ = c);
    if (a.isSelected() && (c = a.getParent()) && ja(c.setSelectedTab)) a.setState(8, r), c.setSelectedTab(a);
    return b
};
s.getTooltip = function(a) {
    return a.title || ""
};
s.setTooltip = function(a, b) {
    a && (a.title = b || "")
};
var jg = function(a, b, c) {
        S.call(this, a, b || ig.getInstance(), c);
        Tf(this, 8, j);
        this.statesWithTransitionEvents_ |= 9
    };
x(jg, S);
jg.prototype.getTooltip = function() {
    return this.tooltip_
};
jg.prototype.setTooltip = function(a) {
    this.getRenderer().setTooltip(this.getElement(), a);
    this.tooltip_ = a
};
Nf("goog-tab", function() {
    return new jg(k)
});
var kg = function() {};
x(kg, ag);
da(kg);
kg.prototype.getCssClass = function() {
    return "goog-tab-bar"
};
kg.prototype.getAriaRole = function() {
    return "tablist"
};
kg.prototype.setStateFromClassName = function(a, b, c) {
    this.locationByClass_ || (this.classByLocation_ || lg(this), this.locationByClass_ = gb(this.classByLocation_));
    var d = this.locationByClass_[b];
    d ? (bg(a, mg(d)), a.location_ = d) : kg.superClass_.setStateFromClassName.call(this, a, b, c)
};
kg.prototype.getClassNames = function(a) {
    var b = kg.superClass_.getClassNames.call(this, a);
    this.classByLocation_ || lg(this);
    b.push(this.classByLocation_[a.location_]);
    return b
};
var lg = function(a) {
        var b = a.getCssClass();
        a.classByLocation_ = {
            top: b + "-top",
            bottom: b + "-bottom",
            start: b + "-start",
            end: b + "-end"
        }
    };
var og = function(a, b, c) {
        a = a || "top";
        bg(this, mg(a));
        this.location_ = a;
        U.call(this, this.orientation_, b || kg.getInstance(), c);
        ng(this)
    };
x(og, U);
s = og.prototype;
s.autoSelectTabs_ = j;
s.selectedTab_ = k;
s.enterDocument = function() {
    og.superClass_.enterDocument.call(this);
    ng(this)
};
s.disposeInternal = function() {
    og.superClass_.disposeInternal.call(this);
    this.selectedTab_ = k
};
s.removeChild = function(a, b) {
    pg(this, a);
    return og.superClass_.removeChild.call(this, a, b)
};
s.setHighlightedIndexFromKeyEvent = function(a) {
    og.superClass_.setHighlightedIndexFromKeyEvent.call(this, a);
    this.autoSelectTabs_ && this.setSelectedTab(R(this, a))
};
s.setSelectedTab = function(a) {
    a ? Rf(a, j) : this.selectedTab_ && Rf(this.selectedTab_, r)
};
var pg = function(a, b) {
        if (b && b == a.selectedTab_) {
            for (var c = Af(a, b), d = c - 1; b = R(a, d); d--) if (b.isVisible() && b.isEnabled()) {
                a.setSelectedTab(b);
                return
            }
            for (c += 1; b = R(a, c); c++) if (b.isVisible() && b.isEnabled()) {
                a.setSelectedTab(b);
                return
            }
            a.setSelectedTab(k)
        }
    };
s = og.prototype;
s.handleTabSelect = function(a) {
    this.selectedTab_ && this.selectedTab_ != a.target && Rf(this.selectedTab_, r);
    this.selectedTab_ = a.target
};
s.handleTabUnselect = function(a) {
    a.target == this.selectedTab_ && (this.selectedTab_ = k)
};
s.handleTabDisable = function(a) {
    pg(this, a.target)
};
s.handleTabHide = function(a) {
    pg(this, a.target)
};
s.handleFocus = function() {
    R(this, this.highlightedIndex_) || this.setHighlighted(this.selectedTab_ || R(this, 0))
};
var ng = function(a) {
        M(M(M(M(uf(a), a, "select", a.handleTabSelect), a, "unselect", a.handleTabUnselect), a, "disable", a.handleTabDisable), a, "hide", a.handleTabHide)
    },
    mg = function(a) {
        return "start" == a || "end" == a ? "vertical" : "horizontal"
    };
Nf("goog-tab-bar", function() {
    return new og
});
var qg = function(a) {
        this.element_ = a;
        a = E ? "focusout" : "blur";
        this.listenKeyIn_ = L(this.element_, E ? "focusin" : "focus", this, !E);
        this.listenKeyOut_ = L(this.element_, a, this, !E)
    };
x(qg, Ic);
qg.prototype.handleEvent = function(a) {
    var b = new mc(a.getBrowserEvent());
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
};
qg.prototype.disposeInternal = function() {
    qg.superClass_.disposeInternal.call(this);
    Bc(this.listenKeyIn_);
    Bc(this.listenKeyOut_);
    delete this.element_
};
var rg = function(a, b) {
        a != k && this.append.apply(this, arguments)
    };
s = rg.prototype;
s.buffer_ = "";
s.set = function(a) {
    this.buffer_ = "" + a
};
s.append = function(a, b, c) {
    this.buffer_ += a;
    if (b != k) for (var d = 1; d < arguments.length; d++) this.buffer_ += arguments[d];
    return this
};
s.clear = function() {
    this.buffer_ = ""
};
s.toString = function() {
    return this.buffer_
};
var V = function(a, b, c) {
        Q.call(this, c);
        this.config_ = b || sg;
        this.html_ = a
    };
x(V, Q);
var tg = {};
s = V.prototype;
s.selected_ = r;
s.expanded_ = r;
s.toolTip_ = k;
s.afterLabelHtml_ = "";
s.isUserCollapsible_ = j;
s.depth_ = -1;
s.disposeInternal = function() {
    V.superClass_.disposeInternal.call(this);
    this.tree_ && (this.tree_.removeNode(this), this.tree_ = k);
    this.element_ = k
};
s.initAccessibility = function() {
    var a = this.getElement();
    if (a) {
        var b = ug(this);
        b && !b.id && (b.id = sf(this) + ".label");
        Zd(a, "treeitem");
        P(a, "selected", r);
        P(a, "expanded", r);
        P(a, "level", this.getDepth());
        b && P(a, "labelledby", b.id);
        (a = this.getIconElement()) && Zd(a, "presentation");
        (a = this.getExpandIconElement()) && Zd(a, "presentation");
        a = vg(this);
        Zd(a, "group");
        if (a.hasChildNodes()) {
            a = yf(this);
            for (b = 1; b <= a; b++) {
                var c = R(this, b - 1).getElement();
                P(c, "setsize", a);
                P(c, "posinset", b)
            }
        }
    }
};
s.createDom = function() {
    var a = new rg;
    this.toHtml(a);
    var b;
    b = this.getDomHelper().document_;
    var c = a.toString(),
        a = b.createElement("div");
    E ? (a.innerHTML = "<br>" + c, a.removeChild(a.firstChild)) : a.innerHTML = c;
    if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
    else for (b = b.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
    this.element_ = b
};
s.enterDocument = function() {
    V.superClass_.enterDocument.call(this);
    tg[sf(this)] = this;
    this.initAccessibility()
};
s.exitDocument = function() {
    V.superClass_.exitDocument.call(this);
    delete tg[sf(this)]
};
s.addChildAt = function(a, b) {
    Ga(!a.getParent());
    var c = R(this, b - 1),
        d = R(this, b);
    V.superClass_.addChildAt.call(this, a, b);
    a.previousSibling_ = c;
    a.nextSibling_ = d;
    c ? c.nextSibling_ = a : this.firstChild_ = a;
    d ? d.previousSibling_ = a : this.lastChild_ = a;
    var f = this.getTree();
    f && wg(a, f);
    xg(a, this.getDepth() + 1);
    if (this.getElement() && (this.updateExpandIcon(), this.getExpanded())) {
        f = vg(this);
        a.getElement() || a.createDom();
        var e = a.getElement(),
            h = d && d.getElement();
        f.insertBefore(e, h);
        this.inDocument_ && a.enterDocument();
        d || (c ? c.updateExpandIcon() : (Ge(f, j), this.setExpanded(this.getExpanded())))
    }
};
s.add = function(a, b) {
    Ga(!b || b.getParent() == this, "Can only add nodes before siblings");
    a.getParent() && a.getParent().removeChild(a);
    this.addChildAt(a, b ? Af(this, b) : yf(this));
    return a
};
s.removeChild = function(a) {
    var b = this.getTree(),
        c = b ? b.selectedItem_ : k;
    if (c == a || a.contains(c)) b.hasFocus() ? (this.select(), td(this.onTimeoutSelect_, 10, this)) : this.select();
    V.superClass_.removeChild.call(this, a);
    this.lastChild_ == a && (this.lastChild_ = a.previousSibling_);
    this.firstChild_ == a && (this.firstChild_ = a.nextSibling_);
    a.previousSibling_ && (a.previousSibling_.nextSibling_ = a.nextSibling_);
    a.nextSibling_ && (a.nextSibling_.previousSibling_ = a.previousSibling_);
    c = !a.nextSibling_;
    a.tree_ = k;
    a.depth_ = -1;
    if (b && (b.removeNode(this), this.inDocument_)) {
        b = vg(this);
        if (a.inDocument_) {
            var d = a.getElement();
            b.removeChild(d);
            a.exitDocument()
        }
        c && (c = R(this, yf(this) - 1)) && c.updateExpandIcon();
        zf(this) || (b.style.display = "none", this.updateExpandIcon(), this.getIconElement().className = this.getCalculatedIconClass())
    }
    return a
};
s.remove = V.prototype.removeChild;
s.onTimeoutSelect_ = function() {
    this.select()
};
s.getDepth = function() {
    var a = this.depth_;
    0 > a && (a = (a = this.getParent()) ? a.getDepth() + 1 : 0, xg(this, a));
    return a
};
var xg = function(a, b) {
        if (b != a.depth_) {
            a.depth_ = b;
            var c = yg(a);
            if (c) {
                var d = Math.max(0, (a.getDepth() - 1) * a.config_.indentWidth) + "px";
                a.isRightToLeft() ? c.style.paddingRight = d : c.style.paddingLeft = d
            }
            xf(a, function(a) {
                xg(a, b + 1)
            })
        }
    };
V.prototype.contains = function(a) {
    for (; a;) {
        if (a == this) return j;
        a = a.getParent()
    }
    return r
};
V.prototype.getChildren = function() {
    var a = [];
    xf(this, function(b) {
        a.push(b)
    });
    return a
};
V.prototype.isSelected = function() {
    return this.selected_
};
V.prototype.select = function() {
    var a = this.getTree();
    if (a && a.selectedItem_ != this) {
        var b = r;
        a.selectedItem_ && (b = a.selectedItem_ == a.focusedNode_, zg(a.selectedItem_, r));
        a.selectedItem_ = this;
        this && (zg(this, j), b && this.select());
        a.dispatchEvent("change")
    }
};
var zg = function(a, b) {
        if (a.selected_ != b) {
            a.selected_ = b;
            Ag(a);
            var c = a.getElement();
            c && (P(c, "selected", b), b && P(a.getTree().getElement(), "activedescendant", sf(a)))
        }
    };
s = V.prototype;
s.getExpanded = function() {
    return this.expanded_
};
s.setExpandedInternal = function(a) {
    this.expanded_ = a
};
s.setExpanded = function(a) {
    var b = a != this.expanded_;
    if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
        var c;
        this.expanded_ = a;
        c = this.getTree();
        var d = this.getElement();
        if (zf(this)) {
            if (!a && (c && this.contains(c.selectedItem_)) && this.select(), d) {
                if (c = vg(this)) if (Ge(c, a), a && this.inDocument_ && !c.hasChildNodes()) {
                    var f = new rg;
                    xf(this, function(a) {
                        a.toHtml(f)
                    });
                    c.innerHTML = f.toString();
                    xf(this, function(a) {
                        a.enterDocument()
                    })
                }
                this.updateExpandIcon()
            }
        } else(c = vg(this)) && Ge(c, r);
        d && (this.getIconElement().className = this.getCalculatedIconClass(), P(d, "expanded", a));
        b && this.dispatchEvent(a ? "expand" : "collapse")
    }
};
s.toggle = function() {
    this.setExpanded(!this.getExpanded())
};
s.collapse = function() {
    this.setExpanded(r)
};
s.reveal = function() {
    var a = this.getParent();
    a && (a.setExpanded(j), a.reveal())
};
s.toHtml = function(a) {
    var b = this.getTree(),
        b = !b.showLines_ || b == this.getParent() && !b.showRootLines_ ? this.config_.cssChildrenNoLines : this.config_.cssChildren,
        c = this.getExpanded() && zf(this);
    a.append('<div class="', this.config_.cssItem, '" id="', sf(this), '">', Bg(this), '<div class="', b, '" style="', "background-position:" + Cg(this) + ";", c ? "" : "display:none;", '">');
    c && xf(this, function(b) {
        b.toHtml(a)
    });
    a.append("</div></div>")
};
var Bg = function(a) {
        var b = new rg;
        b.append('<div class="', a.getRowClassName(), '" style="padding-', a.isRightToLeft() ? "right:" : "left:", Math.max(0, (a.getDepth() - 1) * a.config_.indentWidth), 'px">', a.getExpandIconHtml(), '<span style="display:inline-block" class="' + a.getCalculatedIconClass() + '"></span>', a.getLabelHtml(), "</div>");
        return b.toString()
    };
V.prototype.getRowClassName = function() {
    return this.config_.cssTreeRow + (this.isSelected() ? " " + this.config_.cssSelectedRow : "")
};
V.prototype.getLabelHtml = function() {
    var a = this.toolTip_,
        b = new rg;
    b.append('<span class="', this.config_.cssItemLabel, '"', a ? ' title="' + Ba(a) + '"' : "", ">", this.getHtml(), "</span>", "<span>", this.afterLabelHtml_, "</span>");
    return b.toString()
};
V.prototype.getExpandIconHtml = function() {
    return '<span type="expand" style="display:inline-block" class="' + Dg(this) + '"></span>'
};
var Dg = function(a) {
        var b = a.getTree(),
            c = !b.showLines_ || b == a.getParent() && !b.showRootLines_,
            d = a.config_,
            f = new rg;
        f.append(d.cssTreeIcon, " ", d.cssExpandTreeIcon, " ");
        if (zf(a)) {
            var e = 0;
            b.showExpandIcons_ && a.isUserCollapsible_ && (e = a.getExpanded() ? 2 : 1);
            c || (e = !a.nextSibling_ ? e + 4 : e + 8);
            switch (e) {
            case 1:
                f.append(d.cssExpandTreeIconPlus);
                break;
            case 2:
                f.append(d.cssExpandTreeIconMinus);
                break;
            case 4:
                f.append(d.cssExpandTreeIconL);
                break;
            case 5:
                f.append(d.cssExpandTreeIconLPlus);
                break;
            case 6:
                f.append(d.cssExpandTreeIconLMinus);
                break;
            case 8:
                f.append(d.cssExpandTreeIconT);
                break;
            case 9:
                f.append(d.cssExpandTreeIconTPlus);
                break;
            case 10:
                f.append(d.cssExpandTreeIconTMinus);
                break;
            default:
                f.append(d.cssExpandTreeIconBlank)
            }
        } else c ? f.append(d.cssExpandTreeIconBlank) : !a.nextSibling_ ? f.append(d.cssExpandTreeIconL) : f.append(d.cssExpandTreeIconT);
        return f.toString()
    },
    Cg = function(a) {
        return (!a.nextSibling_ ? "-100" : (a.getDepth() - 1) * a.config_.indentWidth) + "px 0"
    };
V.prototype.getElement = function() {
    var a = V.superClass_.getElement.call(this);
    a || (this.element_ = a = this.getDomHelper().getElement(sf(this)));
    return a
};
var yg = function(a) {
        return (a = a.getElement()) ? a.firstChild : k
    };
V.prototype.getExpandIconElement = function() {
    var a = yg(this);
    return a ? a.firstChild : k
};
V.prototype.getIconElement = function() {
    var a = yg(this);
    return a ? a.childNodes[1] : k
};
var ug = function(a) {
        return (a = yg(a)) && a.lastChild ? a.lastChild.previousSibling : k
    },
    vg = function(a) {
        return (a = a.getElement()) ? a.lastChild : k
    };
V.prototype.setText = function(a) {
    this.setHtml(Ba(a))
};
V.prototype.getText = function() {
    var a = this.getHtml();
    if (-1 != a.indexOf("&")) if ("document" in t) var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    },
        c = document.createElement("div"),
        a = a.replace(Ca, function(a, f) {
            var e = b[a];
            if (e) return e;
            if ("#" == f.charAt(0)) {
                var h = Number("0" + f.substr(1));
                isNaN(h) || (e = String.fromCharCode(h))
            }
            e || (c.innerHTML = a + " ", e = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = e
        });
    else a = a.replace(/&([^;]+);/g, function(a, b) {
        switch (b) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            if ("#" == b.charAt(0)) {
                var c = Number("0" + b.substr(1));
                if (!isNaN(c)) return String.fromCharCode(c)
            }
            return a
        }
    });
    return a
};
V.prototype.setHtml = function(a) {
    this.html_ = a;
    var b = ug(this);
    b && (b.innerHTML = a);
    (a = this.getTree()) && Eg(a.typeAhead_, this)
};
V.prototype.getHtml = function() {
    return this.html_
};
var Ag = function(a) {
        var b = yg(a);
        b && (b.className = a.getRowClassName())
    };
V.prototype.updateExpandIcon = function() {
    var a = this.getExpandIconElement();
    a && (a.className = Dg(this));
    if (a = vg(this)) a.style.backgroundPosition = Cg(this)
};
V.prototype.onClick_ = function(a) {
    a.preventDefault()
};
V.prototype.onKeyPress_ = function(a) {
    !a.altKey && (37 <= a.keyCode && 40 >= a.keyCode) && a.preventDefault()
};
var Fg = function(a) {
        return !a.getExpanded() || !zf(a) ? a : Fg(R(a, yf(a) - 1))
    },
    wg = function(a, b) {
        a.tree_ != b && (a.tree_ = b, Eg(b.typeAhead_, a), xf(a, function(a) {
            wg(a, b)
        }))
    };
var Gg = function(a, b, c) {
        V.call(this, a, b, c)
    };
x(Gg, V);
Gg.prototype.tree_ = k;
Gg.prototype.getTree = function() {
    if (this.tree_) return this.tree_;
    var a = this.getParent();
    return a && (a = a.getTree()) ? (wg(this, a), a) : k
};
Gg.prototype.getCalculatedIconClass = function() {
    var a = this.getExpanded();
    if (a && this.expandedIconClass_) return this.expandedIconClass_;
    if (!a && this.iconClass_) return this.iconClass_;
    var b = this.config_;
    if (zf(this)) {
        if (a && b.cssExpandedFolderIcon) return b.cssTreeIcon + " " + b.cssExpandedFolderIcon;
        if (!a && b.cssCollapsedFolderIcon) return b.cssTreeIcon + " " + b.cssCollapsedFolderIcon
    } else if (b.cssFileIcon) return b.cssTreeIcon + " " + b.cssFileIcon;
    return ""
};
var Hg = function(a) {
        this.childNodes_ = {};
        if (a) for (var b = Qc(a), a = Pc(a), c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
Hg.prototype.value_ = i;
Hg.prototype.set = function(a, b) {
    Ig(this, a, b, r)
};
Hg.prototype.add = function(a, b) {
    Ig(this, a, b, j)
};
var Ig = function(a, b, c, d) {
        for (var f = 0; f < b.length; f++) {
            var e = b.charAt(f);
            a.childNodes_[e] || (a.childNodes_[e] = new Hg);
            a = a.childNodes_[e]
        }
        d && a.value_ !== i && g(Error('The collection already contains the key "' + b + '"'));
        a.value_ = c
    };
Hg.prototype.get = function(a) {
    for (var b = this, c = 0; c < a.length; c++) {
        var d = a.charAt(c);
        if (!b.childNodes_[d]) return;
        b = b.childNodes_[d]
    }
    return b.value_
};
Hg.prototype.getValues = function() {
    var a = [];
    Jg(this, a);
    return a
};
var Jg = function(a, b) {
        a.value_ !== i && b.push(a.value_);
        for (var c in a.childNodes_) Jg(a.childNodes_[c], b)
    };
Hg.prototype.getKeys = function(a) {
    var b = [];
    if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
            var f = a.charAt(d);
            if (!c.childNodes_[f]) return [];
            c = c.childNodes_[f]
        }
        Kg(c, a, b)
    } else Kg(this, "", b);
    return b
};
var Kg = function(a, b, c) {
        a.value_ !== i && c.push(b);
        for (var d in a.childNodes_) Kg(a.childNodes_[d], b + d, c)
    };
Hg.prototype.containsKey = function(a) {
    return this.get(a) !== i
};
Hg.prototype.clear = function() {
    this.childNodes_ = {};
    this.value_ = i
};
Hg.prototype.remove = function(a) {
    for (var b = this, c = [], d = 0; d < a.length; d++) {
        var f = a.charAt(d);
        b.childNodes_[f] || g(Error('The collection does not have the key "' + a + '"'));
        c.push([b, f]);
        b = b.childNodes_[f]
    }
    a = b.value_;
    for (delete b.value_; 0 < c.length;) if (f = c.pop(), b = f[0], f = f[1], eb(b.childNodes_[f].childNodes_)) delete b.childNodes_[f];
    else break;
    return a
};
Hg.prototype.clone = function() {
    return new Hg(this)
};
var Lg = function() {
        this.nodeMap_ = new Hg
    };
s = Lg.prototype;
s.buffer_ = "";
s.matchingLabels_ = k;
s.matchingNodes_ = k;
s.matchingLabelIndex_ = 0;
s.matchingNodeIndex_ = 0;
var Eg = function(a, b) {
        var c = b.getText();
        if (c && !ua(c)) {
            var c = c.toLowerCase(),
                d = a.nodeMap_.get(c);
            d ? d.push(b) : a.nodeMap_.set(c, [b])
        }
    },
    Sg = function(a, b) {
        var c = r,
            d = a.nodeMap_.getKeys(b);
        if (d && d.length && (a.matchingNodeIndex_ = 0, a.matchingLabelIndex_ = 0, c = a.nodeMap_.get(d[0]), c = Mg(a, c))) a.matchingLabels_ = d;
        return c
    },
    Mg = function(a, b) {
        var c;
        b && (a.matchingNodeIndex_ < b.length && (c = b[a.matchingNodeIndex_], a.matchingNodes_ = b), c && (c.reveal(), c.select()));
        return !!c
    };
Lg.prototype.clear = function() {
    this.buffer_ = ""
};
var Tg = function(a, b, c) {
        V.call(this, a, b, c);
        this.setExpandedInternal(j);
        zg(this, j);
        this.selectedItem_ = this;
        this.typeAhead_ = new Lg;
        if (E) try {
            document.execCommand("BackgroundImageCache", r, j)
        } catch (d) {
            this.logger_.log(fd, "Failed to enable background image cache", i)
        }
    };
x(Tg, V);
s = Tg.prototype;
s.keyHandler_ = k;
s.focusHandler_ = k;
s.logger_ = qd("goog.ui.tree.TreeControl");
s.focused_ = r;
s.focusedNode_ = k;
s.showLines_ = j;
s.showExpandIcons_ = j;
s.showRootNode_ = j;
s.showRootLines_ = j;
s.getTree = function() {
    return this
};
s.getDepth = function() {
    return 0
};
s.reveal = function() {};
s.handleFocus_ = function() {
    this.focused_ = j;
    z(this.getElement(), "focused");
    this.selectedItem_ && this.selectedItem_.select()
};
s.handleBlur_ = function() {
    this.focused_ = r;
    Xa(this.getElement(), "focused")
};
s.hasFocus = function() {
    return this.focused_
};
s.getExpanded = function() {
    return !this.showRootNode_ || Tg.superClass_.getExpanded.call(this)
};
s.setExpanded = function(a) {
    this.showRootNode_ ? Tg.superClass_.setExpanded.call(this, a) : this.setExpandedInternal(a)
};
s.getExpandIconHtml = function() {
    return ""
};
s.getIconElement = function() {
    var a = yg(this);
    return a ? a.firstChild : k
};
s.getExpandIconElement = function() {
    return k
};
s.updateExpandIcon = function() {};
s.getRowClassName = function() {
    return Tg.superClass_.getRowClassName.call(this) + (this.showRootNode_ ? "" : " " + this.config_.cssHideRoot)
};
s.getCalculatedIconClass = function() {
    var a = this.getExpanded();
    if (a && this.expandedIconClass_) return this.expandedIconClass_;
    if (!a && this.iconClass_) return this.iconClass_;
    var b = this.config_;
    return a && b.cssExpandedRootIcon ? b.cssTreeIcon + " " + b.cssExpandedRootIcon : !a && b.cssCollapsedRootIcon ? b.cssTreeIcon + " " + b.cssCollapsedRootIcon : ""
};
s.initAccessibility = function() {
    Tg.superClass_.initAccessibility.call(this);
    var a = this.getElement();
    Zd(a, "tree");
    P(a, "labelledby", ug(this).id)
};
s.enterDocument = function() {
    Tg.superClass_.enterDocument.call(this);
    var a = this.getElement();
    a.className = this.config_.cssRoot;
    a.setAttribute("hideFocus", "true");
    a = this.getElement();
    a.tabIndex = 0;
    var b = this.keyHandler_ = new ce(a),
        c = this.focusHandler_ = new qg(a);
    M(M(M(M(M(M(uf(this), c, "focusout", this.handleBlur_), c, "focusin", this.handleFocus_), b, "key", this.handleKeyEvent), a, "mousedown", this.handleMouseEvent_), a, "click", this.handleMouseEvent_), a, "dblclick", this.handleMouseEvent_);
    this.initAccessibility()
};
s.exitDocument = function() {
    Tg.superClass_.exitDocument.call(this);
    this.keyHandler_.dispose();
    this.keyHandler_ = k;
    this.focusHandler_.dispose();
    this.focusHandler_ = k
};
s.handleMouseEvent_ = function(a) {
    nd(this.logger_, "Received event " + a.type);
    var b;
    a: {
        b = k;
        for (var c = a.target; c != k;) {
            if (b = tg[c.id]) break a;
            if (c == this.getElement()) break;
            c = c.parentNode
        }
        b = k
    }
    if (b) switch (a.type) {
    case "mousedown":
        "expand" == a.target.getAttribute("type") && zf(b) ? b.isUserCollapsible_ && b.toggle() : (b.select(), Ag(b));
        break;
    case "click":
        b.onClick_(a);
        break;
    case "dblclick":
        "expand" == a.target.getAttribute("type") && zf(b) || b.isUserCollapsible_ && b.toggle()
    }
};
s.handleKeyEvent = function(a) {
    var b = r,
        b = this.typeAhead_,
        c = r;
    switch (a.keyCode) {
    case 40:
    case 38:
        if (a.ctrlKey) {
            var c = 40 == a.keyCode ? 1 : -1,
                d = b.matchingLabels_;
            if (d) {
                var f = k,
                    e = r;
                if (b.matchingNodes_) {
                    var h = b.matchingNodeIndex_ + c;
                    0 <= h && h < b.matchingNodes_.length ? (b.matchingNodeIndex_ = h, f = b.matchingNodes_) : e = j
                }
                f || (h = b.matchingLabelIndex_ + c, 0 <= h && h < d.length && (b.matchingLabelIndex_ = h), d.length > b.matchingLabelIndex_ && (f = b.nodeMap_.get(d[b.matchingLabelIndex_])), f && (f.length && e) && (b.matchingNodeIndex_ = -1 == c ? f.length - 1 : 0));
                Mg(b, f) && (b.matchingLabels_ = d)
            }
            c = j
        }
        break;
    case 8:
        d = b.buffer_.length - 1;
        c = j;
        0 < d ? (b.buffer_ = b.buffer_.substring(0, d), Sg(b, b.buffer_)) : 0 == d ? b.buffer_ = "" : c = r;
        break;
    case 27:
        b.buffer_ = "", c = j
    }
    if (!(b = c)) {
        if (b = this.selectedItem_) {
            b = this.selectedItem_;
            c = j;
            switch (a.keyCode) {
            case 39:
                if (a.altKey) break;
                zf(b) && (b.getExpanded() ? R(b, 0).select() : b.setExpanded(j));
                break;
            case 37:
                if (a.altKey) break;
                zf(b) && b.getExpanded() && b.isUserCollapsible_ ? b.setExpanded(r) : (d = b.getParent(), f = b.getTree(), d && (f.showRootNode_ || d != f) && d.select());
                break;
            case 40:
                a: if (zf(b) && b.getExpanded()) d = R(b, 0);
                else {
                    for (d = b; d != b.getTree();) {
                        f = d.nextSibling_;
                        if (f != k) {
                            d = f;
                            break a
                        }
                        d = d.getParent()
                    }
                    d = k
                }
                d && d.select();
                break;
            case 38:
                d = b.previousSibling_;
                d != k ? d = Fg(d) : (d = b.getParent(), f = b.getTree(), d = !f.showRootNode_ && d == f ? k : d);
                d && d.select();
                break;
            default:
                c = r
            }
            c && (a.preventDefault(), (f = b.getTree()) && f.typeAhead_.clear());
            b = c
        }
        if (!b) {
            b = this.typeAhead_;
            c = r;
            if (!a.ctrlKey && !a.altKey && (d = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == d.length && " " <= d && "~" >= d || "\u0080" <= d && "\ufffd" >= d) && (" " != d || b.buffer_))) b.buffer_ += d, c = Sg(b, b.buffer_);
            b = c
        }
    }
    b && a.preventDefault();
    return b
};
s.createNode = function(a) {
    return new Gg(a || "", this.config_, this.getDomHelper())
};
s.removeNode = function(a) {
    var b = this.typeAhead_,
        c = a.getText();
    if (c && !ua(c)) {
        var c = c.toLowerCase(),
            d = b.nodeMap_.get(c);
        d && (Ra(d, a), d.length && b.nodeMap_.remove(c))
    }
};
var sg = {
    indentWidth: 19,
    cssRoot: "goog-tree-root goog-tree-item",
    cssHideRoot: "goog-tree-hide-root",
    cssItem: "goog-tree-item",
    cssChildren: "goog-tree-children",
    cssChildrenNoLines: "goog-tree-children-nolines",
    cssTreeRow: "goog-tree-row",
    cssItemLabel: "goog-tree-item-label",
    cssTreeIcon: "goog-tree-icon",
    cssExpandTreeIcon: "goog-tree-expand-icon",
    cssExpandTreeIconPlus: "goog-tree-expand-icon-plus",
    cssExpandTreeIconMinus: "goog-tree-expand-icon-minus",
    cssExpandTreeIconTPlus: "goog-tree-expand-icon-tplus",
    cssExpandTreeIconTMinus: "goog-tree-expand-icon-tminus",
    cssExpandTreeIconLPlus: "goog-tree-expand-icon-lplus",
    cssExpandTreeIconLMinus: "goog-tree-expand-icon-lminus",
    cssExpandTreeIconT: "goog-tree-expand-icon-t",
    cssExpandTreeIconL: "goog-tree-expand-icon-l",
    cssExpandTreeIconBlank: "goog-tree-expand-icon-blank",
    cssExpandedFolderIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedFolderIcon: "goog-tree-collapsed-folder-icon",
    cssFileIcon: "goog-tree-file-icon",
    cssExpandedRootIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedRootIcon: "goog-tree-collapsed-folder-icon",
    cssSelectedRow: "selected"
};
var Ug = function() {};
Ug.prototype.reposition = function() {};
var Vg = function(a, b, c) {
        this.element = a;
        this.corner = b;
        this.overflow_ = c
    };
x(Vg, Ug);
Vg.prototype.reposition = function(a, b, c) {
    df(this.element, this.corner, a, b, i, c, this.overflow_)
};
var Wg = function(a, b) {
        this.coordinate = a instanceof A ? a : new A(a, b)
    };
x(Wg, Ug);
Wg.prototype.reposition = function(a, b, c, d) {
    df(xe(a), 0, a, b, this.coordinate, c, k, d)
};
var Xg = function(a, b) {
        this.handler_ = new Gc(this);
        this.setElement(a || k);
        b && (this.type_ = b)
    };
x(Xg, Ic);
s = Xg.prototype;
s.element_ = k;
s.autoHide_ = j;
s.autoHideRegion_ = k;
s.isVisible_ = r;
s.shouldHideAsync_ = r;
s.lastShowTime_ = -1;
s.hideOnEscape_ = r;
s.enableCrossIframeDismissal_ = j;
s.type_ = "toggle_display";
s.getType = function() {
    return this.type_
};
s.getElement = function() {
    return this.element_
};
s.setElement = function(a) {
    this.isVisible_ && g(Error("Can not change this state of the popup while showing."));
    this.element_ = a
};
s.isVisible = function() {
    return this.isVisible_
};
s.setVisible = function(a) {
    this.showTransition_ && this.showTransition_.stop();
    this.hideTransition_ && this.hideTransition_.stop();
    if (a) {
        if (!this.isVisible_ && this.onBeforeShow()) {
            this.element_ || g(Error("Caller must call setElement before trying to show the popup"));
            this.reposition();
            a = I(this.element_);
            this.hideOnEscape_ && M(this.handler_, a, "keydown", this.onDocumentKeyDown_, j);
            if (this.autoHide_) if (M(this.handler_, a, "mousedown", this.onDocumentMouseDown_, j), E) {
                var b;
                try {
                    b = a.activeElement
                } catch (c) {}
                for (; b && "IFRAME" == b.nodeName;) {
                    try {
                        var d = b.contentDocument || b.contentWindow.document
                    } catch (f) {
                        break
                    }
                    a = d;
                    b = a.activeElement
                }
                M(this.handler_, a, "mousedown", this.onDocumentMouseDown_, j);
                M(this.handler_, a, "deactivate", this.onDocumentBlur_)
            } else M(this.handler_, a, "blur", this.onDocumentBlur_);
            "toggle_display" == this.type_ ? (this.element_.style.visibility = "visible", Ge(this.element_, j)) : "move_offscreen" == this.type_ && this.reposition();
            this.isVisible_ = j;
            if (this.showTransition_) yc(this.showTransition_, "end", this.onShow_, r, this), this.showTransition_.play();
            else this.onShow_()
        }
    } else Yg(this)
};
s.reposition = ca;
var Yg = function(a, b) {
        if (!a.isVisible_ || !a.dispatchEvent({
            type: "beforehide",
            target: b
        })) return r;
        a.handler_ && a.handler_.removeAll();
        a.isVisible_ = r;
        ra();
        a.hideTransition_ ? (yc(a.hideTransition_, "end", qa(a.continueHidingPopup_, b), r, a), a.hideTransition_.play()) : a.continueHidingPopup_(b);
        return j
    };
s = Xg.prototype;
s.continueHidingPopup_ = function(a) {
    "toggle_display" == this.type_ ? this.shouldHideAsync_ ? td(this.hidePopupElement_, 0, this) : this.hidePopupElement_() : "move_offscreen" == this.type_ && (this.element_.style.top = "-10000px");
    this.onHide_(a)
};
s.hidePopupElement_ = function() {
    this.element_.style.visibility = "hidden";
    Ge(this.element_, r)
};
s.onBeforeShow = function() {
    return this.dispatchEvent("beforeshow")
};
s.onShow_ = function() {
    this.lastShowTime_ = ra();
    this.dispatchEvent("show")
};
s.onHide_ = function(a) {
    this.dispatchEvent({
        type: "hide",
        target: a
    })
};
s.onDocumentMouseDown_ = function(a) {
    a = a.target;
    !Ub(this.element_, a) && ((!this.autoHideRegion_ || Ub(this.autoHideRegion_, a)) && !(150 > ra() - this.lastShowTime_)) && Yg(this, a)
};
s.onDocumentKeyDown_ = function(a) {
    27 == a.keyCode && Yg(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
s.onDocumentBlur_ = function(a) {
    if (this.enableCrossIframeDismissal_) {
        var b = I(this.element_);
        if (E || sb) {
            if (a = b.activeElement, !a || Ub(this.element_, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > ra() - this.lastShowTime_ || Yg(this)
    }
};
s.disposeInternal = function() {
    Xg.superClass_.disposeInternal.call(this);
    this.handler_.dispose();
    gc(this.showTransition_);
    gc(this.hideTransition_);
    delete this.element_;
    delete this.handler_
};
var Zg = function(a, b) {
        this.popupCorner_ = 4;
        this.position_ = b || i;
        Xg.call(this, a)
    };
x(Zg, Xg);
Zg.prototype.reposition = function() {
    if (this.position_) {
        var a = !this.isVisible() && "move_offscreen" != this.getType(),
            b = this.getElement();
        a && (b.style.visibility = "hidden", Ge(b, j));
        this.position_.reposition(b, this.popupCorner_, this.margin_);
        a && Ge(b, r)
    }
};
var $g = function(a, b, c) {
        this.dom_ = c || (a ? Kb(Lb(a)) : Kb());
        Zg.call(this, this.dom_.createDom("div", {
            style: "position:absolute;display:none;"
        }));
        this.cursorPosition = new A(1, 1);
        this.elements_ = new Vc;
        a && this.attach(a);
        b != k && this.setText(b)
    };
x($g, Zg);
var ah = [];
s = $g.prototype;
s.activeEl_ = k;
s.className = "goog-tooltip";
s.showDelayMs_ = 500;
s.hideDelayMs_ = 0;
s.getDomHelper = function() {
    return this.dom_
};
s.attach = function(a) {
    a = Lb(a);
    this.elements_.add(a);
    L(a, "mouseover", this.handleMouseOver, r, this);
    L(a, "mouseout", this.handleMouseOutAndBlur, r, this);
    L(a, "mousemove", this.handleMouseMove, r, this);
    L(a, "focus", this.handleFocus, r, this);
    L(a, "blur", this.handleMouseOutAndBlur, r, this)
};
s.detach = function(a) {
    if (a) a = Lb(a), bh(this, a), this.elements_.remove(a);
    else {
        for (var b = this.elements_.getValues(), c = 0; a = b[c]; c++) bh(this, a);
        this.elements_.clear()
    }
};
var bh = function(a, b) {
        zc(b, "mouseover", a.handleMouseOver, r, a);
        zc(b, "mouseout", a.handleMouseOutAndBlur, r, a);
        zc(b, "mousemove", a.handleMouseMove, r, a);
        zc(b, "focus", a.handleFocus, r, a);
        zc(b, "blur", a.handleMouseOutAndBlur, r, a)
    };
s = $g.prototype;
s.setText = function(a) {
    Vb(this.getElement(), a)
};
s.setHtml = function(a) {
    this.getElement().innerHTML = a
};
s.setElement = function(a) {
    var b = this.getElement();
    b && Sb(b);
    $g.superClass_.setElement.call(this, a);
    a && (b = this.dom_.document_.body, b.insertBefore(a, b.lastChild))
};
s.getText = function() {
    return $b(this.getElement())
};
s.getHtml = function() {
    return this.getElement().innerHTML
};
s.getState = function() {
    return this.showTimer ? this.isVisible() ? 4 : 1 : this.hideTimer ? 3 : this.isVisible() ? 2 : 0
};
s.onBeforeShow = function() {
    if (!Xg.prototype.onBeforeShow.call(this)) return r;
    if (this.anchor) for (var a, b = 0; a = ah[b]; b++) Ub(a.getElement(), this.anchor) || a.setVisible(r);
    Qa(ah, this) || ah.push(this);
    a = this.getElement();
    a.className = this.className;
    ch(this);
    L(a, "mouseover", this.handleTooltipMouseOver, r, this);
    L(a, "mouseout", this.handleTooltipMouseOut, r, this);
    dh(this);
    return j
};
s.onHide_ = function() {
    Ra(ah, this);
    for (var a = this.getElement(), b, c = 0; b = ah[c]; c++) b.anchor && Ub(a, b.anchor) && b.setVisible(r);
    this.parentTooltip_ && eh(this.parentTooltip_);
    zc(a, "mouseover", this.handleTooltipMouseOver, r, this);
    zc(a, "mouseout", this.handleTooltipMouseOut, r, this);
    this.anchor = i;
    0 == this.getState() && (this.seenInteraction_ = r);
    Xg.prototype.onHide_.call(this)
};
s.maybeShow = function(a, b) {
    this.anchor == a && this.elements_.contains(this.anchor) && (this.seenInteraction_ || !this.requireInteraction_ ? (this.setVisible(r), this.isVisible() || (this.anchor = a, this.position_ = b || fh(this, 0) || i, this.isVisible() && this.reposition(), this.setVisible(j))) : this.anchor = i);
    this.showTimer = i
};
s.maybeHide = function(a) {
    this.hideTimer = i;
    a == this.anchor && (this.activeEl_ == k || this.activeEl_ != this.getElement() && !this.elements_.contains(this.activeEl_)) && (!this.childTooltip_ || !this.childTooltip_.activeEl_) && this.setVisible(r)
};
var gh = function(a, b) {
        var c = cc(a.dom_);
        a.cursorPosition.x = b.clientX + c.x;
        a.cursorPosition.y = b.clientY + c.y
    };
$g.prototype.handleMouseOver = function(a) {
    var b = hh(this, a.target);
    this.activeEl_ = b;
    ch(this);
    b != this.anchor && (this.anchor = b, this.showTimer || (this.showTimer = td(v(this.maybeShow, this, b, i), this.showDelayMs_)), ih(this), gh(this, a))
};
var hh = function(a, b) {
        try {
            for (; b && !a.elements_.contains(b);) b = b.parentNode;
            return b
        } catch (c) {
            return k
        }
    };
$g.prototype.handleMouseMove = function(a) {
    gh(this, a);
    this.seenInteraction_ = j
};
$g.prototype.handleFocus = function(a) {
    this.activeEl_ = a = hh(this, a.target);
    this.seenInteraction_ = j;
    if (this.anchor != a) {
        this.anchor = a;
        var b = fh(this, 1);
        ch(this);
        this.showTimer || (this.showTimer = td(v(this.maybeShow, this, a, b), this.showDelayMs_));
        ih(this)
    }
};
var fh = function(a, b) {
        if (0 == b) {
            var c = a.cursorPosition.clone();
            return new jh(c)
        }
        return new kh(a.activeEl_)
    },
    ih = function(a) {
        if (a.anchor) for (var b, c = 0; b = ah[c]; c++) Ub(b.getElement(), a.anchor) && (b.childTooltip_ = a, a.parentTooltip_ = b)
    };
$g.prototype.handleMouseOutAndBlur = function(a) {
    var b = hh(this, a.target),
        c = hh(this, a.relatedTarget);
    b != c && (b == this.activeEl_ && (this.activeEl_ = k), dh(this), this.seenInteraction_ = r, this.isVisible() && (!a.relatedTarget || !Ub(this.getElement(), a.relatedTarget)) ? eh(this) : this.anchor = i)
};
$g.prototype.handleTooltipMouseOver = function() {
    var a = this.getElement();
    this.activeEl_ != a && (ch(this), this.activeEl_ = a)
};
$g.prototype.handleTooltipMouseOut = function(a) {
    var b = this.getElement();
    if (this.activeEl_ == b && (!a.relatedTarget || !Ub(b, a.relatedTarget))) this.activeEl_ = k, eh(this)
};
var dh = function(a) {
        a.showTimer && (rd.clearTimeout(a.showTimer), a.showTimer = i)
    },
    eh = function(a) {
        2 == a.getState() && (a.hideTimer = td(v(a.maybeHide, a, a.anchor), a.hideDelayMs_))
    },
    ch = function(a) {
        a.hideTimer && (rd.clearTimeout(a.hideTimer), a.hideTimer = i)
    };
$g.prototype.disposeInternal = function() {
    this.setVisible(r);
    dh(this);
    this.detach();
    this.getElement() && Sb(this.getElement());
    this.activeEl_ = k;
    delete this.dom_;
    $g.superClass_.disposeInternal.call(this)
};
var jh = function(a, b) {
        Wg.call(this, a, b)
    };
x(jh, Wg);
jh.prototype.reposition = function(a, b, c) {
    b = xe(a);
    b = Ce(b);
    c = c ? new se(c.top + 10, c.right, c.bottom, c.left + 10) : new se(10, 0, 0, 10);
    cf(this.coordinate, a, 4, c, b, 9) & 496 && cf(this.coordinate, a, 4, c, b, 5)
};
var kh = function(a) {
        Vg.call(this, a, 3)
    };
x(kh, Vg);
kh.prototype.reposition = function(a, b, c) {
    var d = new A(10, 0);
    df(this.element, this.corner, a, b, d, c, 9) & 496 && df(this.element, 2, a, 1, d, c, 5)
};
/*
 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
window.PR_SHOULD_USE_CONTINUATION = j;
window.PR_TAB_WIDTH = 8;
window.PR_normalizedHtml = window.PR = window.prettyPrintOne = window.prettyPrint = i;
window._pr_isIE6 = function() {
    var a = navigator && navigator.userAgent && navigator.userAgent.match(/\bMSIE ([678])\./),
        a = a ? +a[1] : r;
    window._pr_isIE6 = function() {
        return a
    };
    return a
};
var oh = function(a) {
        return a.replace(lh, "&amp;").replace(mh, "&lt;").replace(nh, "&gt;")
    },
    qh = function(a, b, c) {
        switch (a.nodeType) {
        case 1:
            var d = a.tagName.toLowerCase();
            b.push("<", d);
            var f = a.attributes,
                e = f.length;
            if (e) {
                if (c) {
                    for (var h = [], l = e; 0 <= --l;) h[l] = f[l];
                    h.sort(function(a, b) {
                        return a.name < b.name ? -1 : a.name === b.name ? 0 : 1
                    });
                    f = h
                }
                for (l = 0; l < e; ++l) h = f[l], h.specified && b.push(" ", h.name.toLowerCase(), '="', h.value.replace(lh, "&amp;").replace(mh, "&lt;").replace(nh, "&gt;").replace(ph, "&quot;"), '"')
            }
            b.push(">");
            for (f = a.firstChild; f; f = f.nextSibling) qh(f, b, c);
            (a.firstChild || !/^(?:br|link|img)$/.test(d)) && b.push("</", d, ">");
            break;
        case 3:
        case 4:
            b.push(oh(a.nodeValue))
        }
    },
    rh = function(a) {
        function b(a) {
            if ("\\" !== a.charAt(0)) return a.charCodeAt(0);
            switch (a.charAt(1)) {
            case "b":
                return 8;
            case "t":
                return 9;
            case "n":
                return 10;
            case "v":
                return 11;
            case "f":
                return 12;
            case "r":
                return 13;
            case "u":
            case "x":
                return parseInt(a.substring(2), 16) || a.charCodeAt(1);
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
                return parseInt(a.substring(1), 8);
            default:
                return a.charCodeAt(1)
            }
        }
        function c(a) {
            if (32 > a) return (16 > a ? "\\x0" : "\\x") + a.toString(16);
            a = String.fromCharCode(a);
            if ("\\" === a || "-" === a || "[" === a || "]" === a) a = "\\" + a;
            return a
        }
        function d(a) {
            for (var d = a.substring(1, a.length - 1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")), a = [], e = [], f = "^" === d[0], h = f ? 1 : 0, l = d.length; h < l; ++h) {
                var q = d[h];
                switch (q) {
                case "\\B":
                case "\\b":
                case "\\D":
                case "\\d":
                case "\\S":
                case "\\s":
                case "\\W":
                case "\\w":
                    a.push(q);
                    continue
                }
                var q = b(q),
                    p;
                h + 2 < l && "-" === d[h + 1] ? (p = b(d[h + 2]), h += 2) : p = q;
                e.push([q, p]);
                65 > p || 122 < q || (65 > p || 90 < q || e.push([Math.max(65, q) | 32, Math.min(p, 90) | 32]), 97 > p || 122 < q || e.push([Math.max(97, q) & -33, Math.min(p, 122) & -33]))
            }
            e.sort(function(a, b) {
                return a[0] - b[0] || b[1] - a[1]
            });
            d = [];
            q = [NaN, NaN];
            for (h = 0; h < e.length; ++h) l = e[h], l[0] <= q[1] + 1 ? q[1] = Math.max(q[1], l[1]) : d.push(q = l);
            e = ["["];
            f && e.push("^");
            e.push.apply(e, a);
            for (h = 0; h < d.length; ++h) l = d[h], e.push(c(l[0])), l[1] > l[0] && (l[1] + 1 > l[0] && e.push("-"), e.push(c(l[1])));
            e.push("]");
            return e.join("")
        }
        function f(a) {
            for (var b = a.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), c = b.length, f = [], l = 0, q = 0; l < c; ++l) {
                var p = b[l];
                "(" === p ? ++q : "\\" === p.charAt(0) && (p = +p.substring(1)) && p <= q && (f[p] = -1)
            }
            for (l = 1; l < f.length; ++l) - 1 === f[l] && (f[l] = ++e);
            for (q = l = 0; l < c; ++l) p = b[l], "(" === p ? (++q, f[q] === i && (b[l] = "(?:")) : "\\" === p.charAt(0) && (p = +p.substring(1)) && p <= q && (b[l] = "\\" + f[q]);
            for (q = l = 0; l < c; ++l)"^" === b[l] && "^" !== b[l + 1] && (b[l] = "");
            if (a.ignoreCase && h) for (l = 0; l < c; ++l) p = b[l], a = p.charAt(0), 2 <= p.length && "[" === a ? b[l] = d(p) : "\\" !== a && (b[l] = p.replace(/[a-zA-Z]/g, function(a) {
                a = a.charCodeAt(0);
                return "[" + String.fromCharCode(a & -33, a | 32) + "]"
            }));
            return b.join("")
        }
        for (var e = 0, h = r, l = r, m = 0, n = a.length; m < n; ++m) {
            var p = a[m];
            if (p.ignoreCase) l = j;
            else if (/[a-z]/i.test(p.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                h = j;
                l = r;
                break
            }
        }
        for (var q = [], m = 0, n = a.length; m < n; ++m) p = a[m], (p.global || p.multiline) && g(Error("" + p)), q.push("(?:" + f(p) + ")");
        return RegExp(q.join("|"), l ? "gi" : "g")
    },
    sh = function(a, b, c, d) {
        b && (a = {
            source: b,
            basePos: a
        }, c(a), d.push.apply(d, a.decorations))
    },
    uh = function(a, b) {
        for (var c = {}, d, f = a.concat(b), e = [], h = {}, l = 0, m = f.length; l < m; ++l) {
            var n = f[l],
                p = n[3];
            if (p) for (var q = p.length; 0 <= --q;) c[p.charAt(q)] = n;
            n = n[1];
            p = "" + n;
            h.hasOwnProperty(p) || (e.push(n), h[p] = k)
        }
        e.push(/[\0-\uffff]/);
        d = rh(e);
        var y = b.length,
            B = function(a) {
                for (var e = a.basePos, f = [e, "pln"], h = 0, l = a.source.match(d) || [], q = {}, p = 0, m = l.length; p < m; ++p) {
                    var n = l[p],
                        T = q[n],
                        Y = i,
                        C;
                    if ("string" === typeof T) C = r;
                    else {
                        var ea = c[n.charAt(0)];
                        if (ea) Y = n.match(ea[1]), T = ea[0];
                        else {
                            for (C = 0; C < y; ++C) if (ea = b[C], Y = n.match(ea[1])) {
                                T = ea[0];
                                break
                            }
                            Y || (T = "pln")
                        }
                        if ((C = 5 <= T.length && "lang-" === T.substring(0, 5)) && !(Y && "string" === typeof Y[1])) C = r, T = "src";
                        C || (q[n] = T)
                    }
                    ea = h;
                    h += n.length;
                    if (C) {
                        C = Y[1];
                        var Z = n.indexOf(C),
                            ab = Z + C.length;
                        Y[2] && (ab = n.length - Y[2].length, Z = ab - C.length);
                        T = T.substring(5);
                        sh(e + ea, n.substring(0, Z), B, f);
                        sh(e + ea + Z, C, th(T, C), f);
                        sh(e + ea + ab, n.substring(ab), B, f)
                    } else f.push(e + ea, T)
                }
                a.decorations = f
            };
        return B
    },
    wh = function(a) {
        var b = [],
            c = [];
        a.tripleQuotedStrings ? b.push(["str", /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, k, "'\""]) : a.multiLineStrings ? b.push(["str", /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, k, "'\"`"]) : b.push(["str", /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, k, "\"'"]);
        a.verbatimStrings && c.push(["str", /^@\"(?:[^\"]|\"\")*(?:\"|$)/, k]);
        var d = a.hashComments;
        d && (a.cStyleComments ? (1 < d ? b.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, k, "#"]) : b.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/, k, "#"]), c.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, k])) : b.push(["com", /^#[^\r\n]*/, k, "#"]));
        a.cStyleComments && (c.push(["com", /^\/\/[^\r\n]*/, k]), c.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/, k]));
        a.regexLiterals && c.push(["lang-regex", RegExp("^" + vh + "(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]);
        a = a.keywords.replace(/^\s+|\s+$/g, "");
        a.length && c.push(["kwd", RegExp("^(?:" + a.replace(/\s+/g, "|") + ")\\b"), k]);
        b.push(["pln", /^\s+/, k, " \r\n\t\u00a0"]);
        c.push(["lit", /^@[a-z_$][a-z_$@0-9]*/i, k], ["typ", /^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/, k], ["pln", /^[a-z_$][a-z_$@0-9]*/i, k], ["lit", /^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i, k, "0123456789"], ["pun", /^.[^\s\w\.$@\'\"\`\/\#]*/, k]);
        return uh(b, c)
    },
    $ = function(a, b) {
        for (var c = b.length; 0 <= --c;) {
            var d = b[c];
            xh.hasOwnProperty(d) ? "console" in window && console.warn("cannot override language handler %s", d) : xh[d] = a
        }
    },
    th = function(a, b) {
        if (!a || !xh.hasOwnProperty(a)) a = /^\s*</.test(b) ? "default-markup" : "default-code";
        return xh[a]
    },
    Jh = function(a) {
        var b, c = a.sourceCodeHtml,
            d = a.langExtension;
        a.prettyPrintedHtml = c;
        try {
            var f = c.match(yh),
                c = [],
                e = 0,
                h = [];
            if (f) for (var l = 0, m = f.length; l < m; ++l) {
                var n = f[l];
                if (1 < n.length && "<" === n.charAt(0)) {
                    if (!zh.test(n)) if (Ah.test(n)) c.push(n.substring(9, n.length - 3)), e += n.length - 12;
                    else if (Bh.test(n)) c.push("\n"), ++e;
                    else if (0 <= n.indexOf("nocode") && n.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g, ' $1="$2$3$4"').match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/)) {
                        var p = n.match(Ch)[2],
                            q = 1,
                            y;
                        y = l + 1;
                        a: for (; y < m; ++y) {
                            var B = f[y].match(Ch);
                            if (B && B[2] === p) if ("/" === B[1]) {
                                if (0 === --q) break a
                            } else++q
                        }
                        y < m ? (h.push(e, f.slice(l, y + 1).join("")), l = y) : h.push(e, n)
                    } else h.push(e, n)
                } else {
                    var w;
                    var q = n,
                        J = q.indexOf("&");
                    if (0 > J) w = q;
                    else {
                        for (--J; 0 <= (J = q.indexOf("&#", J + 1));) {
                            var D = q.indexOf(";", J);
                            if (0 <= D) {
                                var W = q.substring(J + 3, D),
                                    K = 10;
                                W && "x" === W.charAt(0) && (W = W.substring(1), K = 16);
                                var X = parseInt(W, K);
                                isNaN(X) || (q = q.substring(0, J) + String.fromCharCode(X) + q.substring(D + 1))
                            }
                        }
                        w = q.replace(Dh, "<").replace(Eh, ">").replace(Fh, "'").replace(Gh, '"').replace(Hh, " ").replace(Ih, "&")
                    }
                    c.push(w);
                    e += w.length
                }
            }
            b = c.join("");
            a.source = b;
            a.basePos = 0;
            a.extractedTags = h;
            th(d, b)(a);
            b = function(a) {
                if (a > ea) {
                    Z && Z !== ab && (C.push("</span>"), Z = k);
                    !Z && ab && (Z = ab, C.push('<span class="', Z, '">'));
                    var b = oh(Ng(O.substring(ea, a))).replace(Og ? mi : ni, "$1&#160;");
                    Og = oi.test(b);
                    C.push(b.replace(pi, Ke));
                    ea = a
                }
            };
            var O = a.source,
                id = a.extractedTags,
                uc = a.decorations,
                T = a.numberLines,
                Y = a.sourceNode,
                C = [],
                ea = 0,
                Z = k,
                ab = k,
                f = d = 0,
                Ng, Pg = window.PR_TAB_WIDTH,
                vc = 0;
            Ng = function(a) {
                for (var b = k, c = 0, d = 0, e = a.length; d < e; ++d) switch (a.charAt(d)) {
                case "\t":
                    b || (b = []);
                    b.push(a.substring(c, d));
                    c = Pg - vc % Pg;
                    for (vc += c; 0 <= c; c -= 16) b.push("                ".substring(0, c));
                    c = d + 1;
                    break;
                case "\n":
                    vc = 0;
                    break;
                default:
                    ++vc
                }
                if (!b) return a;
                b.push(a.substring(c));
                return b.join("")
            };
            var ni = /([\r\n ]) /g,
                mi = /(^| ) /gm,
                pi = /\r\n?|\n/g,
                oi = /[ \r\n]$/,
                Og = j,
                kd = window._pr_isIE6(),
                Qg = kd ? Y && "PRE" === Y.tagName ? 6 === kd ? "&#160;\r\n" : 7 === kd ? "&#160;<br />\r" : 8 === kd ? "&#160;<br />" : "&#160;\r" : "&#160;<br />" : "<br />",
                Ke;
            if (T) {
                for (var Rg = [], Y = 0; 10 > Y; ++Y) Rg[Y] = Qg + '</li><li class="L' + Y + '">';
                var ld = "number" === typeof T ? T - 1 : 0;
                C.push('<ol class="linenums"><li class="L', ld % 10, '"');
                ld && C.push(' value="', ld + 1, '"');
                C.push(">");
                Ke = function() {
                    var a = Rg[++ld % 10];
                    return Z ? "</span>" + a + '<span class="' + Z + '">' : a
                }
            } else Ke = Qg;
            for (;;) if (d < id.length && (f < uc.length ? id[d] <= uc[f] : 1)) b(id[d]), Z && (C.push("</span>"), Z = k), C.push(id[d + 1]), d += 2;
            else if (f < uc.length) b(uc[f]), ab = uc[f + 1], f += 2;
            else break;
            b(O.length);
            Z && C.push("</span>");
            T && C.push("</li></ol>");
            a.prettyPrintedHtml = C.join("")
        } catch (md) {
            "console" in window && console.log(md && md.stack ? md.stack : md)
        }
    },
    Kh = "! != !== # % %= & && &&= &= ( * *= += , -= -> / /= : :: ; < << <<= <= = == === > >= >> >>= >>> >>>= ? @ [ ^ ^= ^^ ^^= { | |= || ||= ~ break case continue delete do else finally instanceof return throw try typeof".split(" "),
    Lh = "(?:^^|[+-]",
    Mh = 0;
for (; Mh < Kh.length; ++Mh) Lh += "|" + Kh[Mh].replace(/([^=<>:&a-z])/g, "\\$1");
var vh = Lh += ")\\s*",
    lh = /&/g,
    mh = /</g,
    nh = />/g,
    ph = /\"/g,
    Dh = /&lt;/g,
    Eh = /&gt;/g,
    Fh = /&apos;/g,
    Gh = /&quot;/g,
    Ih = /&amp;/g,
    Hh = /&nbsp;/g,
    Nh = /[\r\n]/g,
    Oh = k,
    yh = RegExp("[^<]+|<\!--[\\s\\S]*?--\>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>|</?[a-zA-Z](?:[^>\"']|'[^']*'|\"[^\"]*\")*>|<", "g"),
    zh = /^<\!--/,
    Ah = /^<!\[CDATA\[/,
    Bh = /^<br\b/i,
    Ch = /^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/,
    Ph = wh({
        keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending dynamic event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END break continue do else for if return while case done elif esac eval fi function in local set then until ",
        hashComments: j,
        cStyleComments: j,
        multiLineStrings: j,
        regexLiterals: j
    }),
    xh = {};
$(Ph, ["default-code"]);
$(uh([], [
    ["pln", /^[^<?]+/],
    ["dec", /^<!\w[^>]*(?:>|$)/],
    ["com", /^<\!--[\s\S]*?(?:-\->|$)/],
    ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/],
    ["lang-", /^<%([\s\S]+?)(?:%>|$)/],
    ["pun", /^(?:<[%?]|[%?]>)/],
    ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
    ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
    ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
    ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
]), "default-markup htm html mxml xhtml xml xsl".split(" "));
$(uh([
    ["pln", /^[\s]+/, k, " \t\r\n"],
    ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, k, "\"'"]
], [
    ["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
    ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
    ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
    ["pun", /^[=<>\/]+/],
    ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i],
    ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i],
    ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i],
    ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i],
    ["lang-css", /^style\s*=\s*\'([^\']+)\'/i],
    ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]
]), ["in.tag"]);
$(uh([], [
    ["atv", /^[\s\S]+/]
]), ["uq.val"]);
$(wh({
    keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where ",
    hashComments: j,
    cStyleComments: j
}), "c cc cpp cxx cyc m".split(" "));
$(wh({
    keywords: "null true false"
}), ["json"]);
$(wh({
    keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending dynamic event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",
    hashComments: j,
    cStyleComments: j,
    verbatimStrings: j
}), ["cs"]);
$(wh({
    keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ",
    cStyleComments: j
}), ["java"]);
$(wh({
    keywords: "break continue do else for if return while case done elif esac eval fi function in local set then until ",
    hashComments: j,
    multiLineStrings: j
}), ["bsh", "csh", "sh"]);
$(wh({
    keywords: "break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",
    hashComments: j,
    multiLineStrings: j,
    tripleQuotedStrings: j
}), ["cv", "py"]);
$(wh({
    keywords: "caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",
    hashComments: j,
    multiLineStrings: j,
    regexLiterals: j
}), ["perl", "pl", "pm"]);
$(wh({
    keywords: "break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ",
    hashComments: j,
    multiLineStrings: j,
    regexLiterals: j
}), ["rb"]);
$(wh({
    keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN ",
    cStyleComments: j,
    regexLiterals: j
}), ["js"]);
$(wh({
    keywords: "all and by catch class else extends false finally for if in is isnt loop new no not null of off on or return super then true try unless until when while yes ",
    hashComments: 3,
    cStyleComments: j,
    multilineStrings: j,
    tripleQuotedStrings: j,
    regexLiterals: j
}), ["coffee"]);
$(uh([], [
    ["str", /^[\s\S]+/]
]), ["regex"]);
window.PR_normalizedHtml = qh;
window.prettyPrintOne = function(a, b, c) {
    a = {
        sourceCodeHtml: a,
        langExtension: b,
        numberLines: c
    };
    Jh(a);
    return a.prettyPrintedHtml
};
window.prettyPrint = function(a) {
    function b() {
        for (var c = window.PR_SHOULD_USE_CONTINUATION ? l.now() + 250 : Infinity; m < d.length && l.now() < c; m++) {
            var e = d[m];
            if (e.className && 0 <= e.className.indexOf("prettyprint")) {
                var f = e.className.match(/\blang-(\w+)\b/);
                f && (f = f[1]);
                for (var h = r, w = e.parentNode; w; w = w.parentNode) if (("pre" === w.tagName || "code" === w.tagName || "xmp" === w.tagName) && w.className && 0 <= w.className.indexOf("prettyprint")) {
                    h = j;
                    break
                }
                if (!h) {
                    w = e;
                    k === Oh && (h = document.createElement("PRE"), h.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />')), Oh = !/</.test(h.innerHTML));
                    if (Oh) if (h = w.innerHTML, "XMP" === w.tagName) h = oh(h);
                    else {
                        if ("PRE" === w.tagName || !Nh.test(h)) w = j;
                        else {
                            var J = "";
                            w.currentStyle ? J = w.currentStyle.whiteSpace : window.getComputedStyle && (J = window.getComputedStyle(w, k).whiteSpace);
                            w = !J || "pre" === J
                        }
                        w || (h = h.replace(/(<br\s*\/?>)[\r\n]+/g, "$1").replace(/(?:[\r\n]+[ \t]*)+/g, " "))
                    } else {
                        h = [];
                        for (w = w.firstChild; w; w = w.nextSibling) qh(w, h);
                        h = h.join("")
                    }
                    h = h.replace(/(?:\r\n?|\n)$/, "");
                    w = e.className.match(/\blinenums\b(?::(\d+))?/);
                    n = {
                        sourceCodeHtml: h,
                        langExtension: f,
                        sourceNode: e,
                        numberLines: w ? w[1] && w[1].length ? +w[1] : j : r
                    };
                    Jh(n);
                    if (e = n.prettyPrintedHtml) if (f = n.sourceNode, "XMP" === f.tagName) {
                        h = document.createElement("PRE");
                        for (w = 0; w < f.attributes.length; ++w) J = f.attributes[w], J.specified && ("class" === J.name.toLowerCase() ? h.className = J.value : h.setAttribute(J.name, J.value));
                        h.innerHTML = e;
                        f.parentNode.replaceChild(h, f)
                    } else f.innerHTML = e
                }
            }
        }
        m < d.length ? setTimeout(b, 250) : a && a()
    }
    for (var c = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], d = [], f = 0; f < c.length; ++f) for (var e = 0, h = c[f].length; e < h; ++e) d.push(c[f][e]);
    var c = k,
        l = Date;
    l.now || (l = {
        now: function() {
            return (new Date).getTime()
        }
    });
    var m = 0,
        n;
    b()
};
window.PR = {
    combinePrefixPatterns: rh,
    createSimpleLexer: uh,
    registerLangHandler: $,
    sourceDecorator: wh,
    PR_ATTRIB_NAME: "atn",
    PR_ATTRIB_VALUE: "atv",
    PR_COMMENT: "com",
    PR_DECLARATION: "dec",
    PR_KEYWORD: "kwd",
    PR_LITERAL: "lit",
    PR_NOCODE: "nocode",
    PR_PLAIN: "pln",
    PR_PUNCTUATION: "pun",
    PR_SOURCE: "src",
    PR_STRING: "str",
    PR_TAG: "tag",
    PR_TYPE: "typ"
};
/*
 Copyright (C) 2009 Onno Hommes.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_COMMENT, /^#[^\r\n]*/, k, "#"],
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, k, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, k, '"']
], [
    [PR.PR_KEYWORD, /^(?:ADS|AD|AUG|BZF|BZMF|CAE|CAF|CA|CCS|COM|CS|DAS|DCA|DCOM|DCS|DDOUBL|DIM|DOUBLE|DTCB|DTCF|DV|DXCH|EDRUPT|EXTEND|INCR|INDEX|NDX|INHINT|LXCH|MASK|MSK|MP|MSU|NOOP|OVSK|QXCH|RAND|READ|RELINT|RESUME|RETURN|ROR|RXOR|SQUARE|SU|TCR|TCAA|OVSK|TCF|TC|TS|WAND|WOR|WRITE|XCH|XLQ|XXALQ|ZL|ZQ|ADD|ADZ|SUB|SUZ|MPY|MPR|MPZ|DVP|COM|ABS|CLA|CLZ|LDQ|STO|STQ|ALS|LLS|LRS|TRA|TSQ|TMI|TOV|AXT|TIX|DLY|INP|OUT)\s/, k],
    [PR.PR_TYPE, /^(?:-?GENADR|=MINUS|2BCADR|VN|BOF|MM|-?2CADR|-?[1-6]DNADR|ADRES|BBCON|[SE]?BANK\=?|BLOCK|BNKSUM|E?CADR|COUNT\*?|2?DEC\*?|-?DNCHAN|-?DNPTR|EQUALS|ERASE|MEMORY|2?OCT|REMADR|SETLOC|SUBRO|ORG|BSS|BES|SYN|EQU|DEFINE|END)\s/, k],
    [PR.PR_LITERAL, /^\'(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],
    [PR.PR_PLAIN, /^-*(?:[!-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0()\"\\\';]+/]
]), ["apollo", "agc", "aea"]);
/*
 Copyright (C) 2011 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    ["opn", /^[\(\{\[]+/, k, "([{"],
    ["clo", /^[\)\}\]]+/, k, ")]}"],
    [PR.PR_COMMENT, /^;[^\r\n]*/, k, ";"],
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, k, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, k, '"']
], [
    [PR.PR_KEYWORD, /^(?:def|if|do|let|quote|var|fn|loop|recur|throw|try|monitor-enter|monitor-exit|defmacro|defn|defn-|macroexpand|macroexpand-1|for|doseq|dosync|dotimes|and|or|when|not|assert|doto|proxy|defstruct|first|rest|cons|defprotocol|deftype|defrecord|reify|defmulti|defmethod|meta|with-meta|ns|in-ns|create-ns|import|intern|refer|alias|namespace|resolve|ref|deref|refset|new|set!|memfn|to-array|into-array|aset|gen-class|reduce|map|filter|find|nil?|empty?|hash-map|hash-set|vec|vector|seq|flatten|reverse|assoc|dissoc|list|list?|disj|get|union|difference|intersection|extend|extend-type|extend-protocol|prn)\b/, k],
    [PR.PR_TYPE, /^:[0-9a-zA-Z\-]+/]
]), ["clj"]);
/*
 Copyright (C) 2009 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[ \t\r\n\f]+/, k, " \t\r\n\f"]
], [
    [PR.PR_STRING, /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, k],
    [PR.PR_STRING, /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/, k],
    ["lang-css-str", /^url\(([^\)\"\']*)\)/i],
    [PR.PR_KEYWORD, /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i, k],
    ["lang-css-kw", /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],
    [PR.PR_COMMENT, /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],
    [PR.PR_COMMENT, /^(?:<\!--|--\>)/],
    [PR.PR_LITERAL, /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],
    [PR.PR_LITERAL, /^#(?:[0-9a-f]{3}){1,2}/i],
    [PR.PR_PLAIN, /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],
    [PR.PR_PUNCTUATION, /^[^\s\w\'\"]+/]
]), ["css"]);
PR.registerLangHandler(PR.createSimpleLexer([], [
    [PR.PR_KEYWORD, /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]
]), ["css-kw"]);
PR.registerLangHandler(PR.createSimpleLexer([], [
    [PR.PR_STRING, /^[^\)\"\']+/]
]), ["css-str"]);
/*
 Copyright (C) 2010 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, k, "\t\n\r \u00a0"],
    [PR.PR_PLAIN, /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])+(?:\'|$))/, k, "\"'"]
], [
    [PR.PR_COMMENT, /^(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],
    [PR.PR_PLAIN, /^(?:[^\/\"\']|\/(?![\/\*]))+/i]
]), ["go"]);
/*
 Copyright (C) 2009 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\x0B\x0C\r ]+/, k, "\t\n\x0B\f\r "],
    [PR.PR_STRING, /^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/, k, '"'],
    [PR.PR_STRING, /^\'(?:[^\'\\\n\x0C\r]|\\[^&])\'?/, k, "'"],
    [PR.PR_LITERAL, /^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i, k, "0123456789"]
], [
    [PR.PR_COMMENT, /^(?:(?:--+(?:[^\r\n\x0C]*)?)|(?:\{-(?:[^-]|-+[^-\}])*-\}))/],
    [PR.PR_KEYWORD, /^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\']|$)/, k],
    [PR.PR_PLAIN, /^(?:[A-Z][\w\']*\.)*[a-zA-Z][\w\']*/],
    [PR.PR_PUNCTUATION, /^[^\t\n\x0B\x0C\r a-zA-Z0-9\'\"]+/]
]), ["hs"]);
/*
 Copyright (C) 2008 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    ["opn", /^\(+/, k, "("],
    ["clo", /^\)+/, k, ")"],
    [PR.PR_COMMENT, /^;[^\r\n]*/, k, ";"],
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, k, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, k, '"']
], [
    [PR.PR_KEYWORD, /^(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\b/, k],
    [PR.PR_LITERAL, /^[+\-]?(?:[0#]x[0-9a-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[ed][+\-]?\d+)?)/i],
    [PR.PR_LITERAL, /^\'(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],
    [PR.PR_PLAIN, /^-*(?:[a-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0()\"\\\';]+/]
]), ["cl", "el", "lisp", "scm"]);
/*
 Copyright (C) 2008 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, k, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/, k, "\"'"]
], [
    [PR.PR_COMMENT, /^--(?:\[(=*)\[[\s\S]*?(?:\]\1\]|$)|[^\r\n]*)/],
    [PR.PR_STRING, /^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],
    [PR.PR_KEYWORD, /^(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/, k],
    [PR.PR_LITERAL, /^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
    [PR.PR_PLAIN, /^[a-z_]\w*/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/]
]), ["lua"]);
/*
 Copyright (C) 2008 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, k, "\t\n\r \u00a0"],
    [PR.PR_COMMENT, /^#(?:if[\t\n\r \xA0]+(?:[a-z_$][\w\']*|``[^\r\n\t`]*(?:``|$))|else|endif|light)/i, k, "#"],
    [PR.PR_STRING, /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])(?:\'|$))/, k, "\"'"]
], [
    [PR.PR_COMMENT, /^(?:\/\/[^\r\n]*|\(\*[\s\S]*?\*\))/],
    [PR.PR_KEYWORD, /^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/],
    [PR.PR_LITERAL, /^[+\-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
    [PR.PR_PLAIN, /^(?:[a-z_][\w']*[!?#]?|``[^\r\n\t`]*(?:``|$))/i],
    [PR.PR_PUNCTUATION, /^[^\t\n\r \xA0\"\'\w]+/]
]), ["fs", "ml"]);
/*
 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.sourceDecorator({
    keywords: "bool bytes default double enum extend extensions false fixed32 fixed64 float group import int32 int64 max message option optional package repeated required returns rpc service sfixed32 sfixed64 sint32 sint64 string syntax to true uint32 uint64",
    cStyleComments: j
}), ["proto"]);
/*
 Copyright (C) 2010 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, k, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^(?:"(?:(?:""(?:""?(?!")|[^\\"]|\\.)*"{0,3})|(?:[^"\r\n\\]|\\.)*"?))/, k, '"'],
    [PR.PR_LITERAL, /^`(?:[^\r\n\\`]|\\.)*`?/, k, "`"],
    [PR.PR_PUNCTUATION, /^[!#%&()*+,\-:;<=>?@\[\\\]^{|}~]+/, k, "!#%&()*+,-:;<=>?@[\\]^{|}~"]
], [
    [PR.PR_STRING, /^'(?:[^\r\n\\']|\\(?:'|[^\r\n']+))'/],
    [PR.PR_LITERAL, /^'[a-zA-Z_$][\w$]*(?!['$\w])/],
    [PR.PR_KEYWORD, /^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/],
    [PR.PR_LITERAL, /^(?:true|false|null|this)\b/],
    [PR.PR_LITERAL, /^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i],
    [PR.PR_TYPE, /^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],
    [PR.PR_PLAIN, /^[$a-zA-Z_][\w$]*/],
    [PR.PR_COMMENT, /^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],
    [PR.PR_PUNCTUATION, /^(?:\.+|\/)/]
]), ["scala"]);
/*
 Copyright (C) 2008 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, k, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/, k, "\"'"]
], [
    [PR.PR_COMMENT, /^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],
    [PR.PR_KEYWORD, /^(?:ADD|ALL|ALTER|AND|ANY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|NATIONAL|NOCHECK|NONCLUSTERED|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PERCENT|PLAN|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNION|UNIQUE|UPDATE|UPDATETEXT|USE|USER|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WRITETEXT)(?=[^\w-]|$)/i, k],
    [PR.PR_LITERAL, /^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
    [PR.PR_PLAIN, /^[a-z_][\w-]*/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]
]), ["sql"]);
/*
 Copyright (C) 2009 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0\u2028\u2029]+/, k, "\t\n\r \u00a0\u2028\u2029"],
    [PR.PR_STRING, /^(?:[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})(?:[\"\u201C\u201D]c|$)|[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})*(?:[\"\u201C\u201D]|$))/i, k, '"\u201c\u201d'],
    [PR.PR_COMMENT, /^[\'\u2018\u2019][^\r\n\u2028\u2029]*/, k, "'\u2018\u2019"]
], [
    [PR.PR_KEYWORD, /^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\b/i, k],
    [PR.PR_COMMENT, /^REM[^\r\n\u2028\u2029]*/i],
    [PR.PR_LITERAL, /^(?:True\b|False\b|Nothing\b|\d+(?:E[+\-]?\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\d*\.\d+(?:E[+\-]?\d+)?[FRD]?|#\s+(?:\d+[\-\/]\d+[\-\/]\d+(?:\s+\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)?|\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)\s+#)/i],
    [PR.PR_PLAIN, /^(?:(?:[a-z]|_\w)\w*|\[(?:[a-z]|_\w)\w*\])/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \"\'\[\]\xA0\u2018\u2019\u201C\u201D\u2028\u2029]+/],
    [PR.PR_PUNCTUATION, /^(?:\[|\])/]
]), ["vb", "vbs"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, k, "\t\n\r \u00a0"]
], [
    [PR.PR_STRING, /^(?:[BOX]?"(?:[^\"]|"")*"|'.')/i],
    [PR.PR_COMMENT, /^--[^\r\n]*/],
    [PR.PR_KEYWORD, /^(?:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)(?=[^\w-]|$)/i, k],
    [PR.PR_TYPE, /^(?:bit|bit_vector|character|boolean|integer|real|time|string|severity_level|positive|natural|signed|unsigned|line|text|std_u?logic(?:_vector)?)(?=[^\w-]|$)/i, k],
    [PR.PR_TYPE, /^\'(?:ACTIVE|ASCENDING|BASE|DELAYED|DRIVING|DRIVING_VALUE|EVENT|HIGH|IMAGE|INSTANCE_NAME|LAST_ACTIVE|LAST_EVENT|LAST_VALUE|LEFT|LEFTOF|LENGTH|LOW|PATH_NAME|POS|PRED|QUIET|RANGE|REVERSE_RANGE|RIGHT|RIGHTOF|SIMPLE_NAME|STABLE|SUCC|TRANSACTION|VAL|VALUE)(?=[^\w-]|$)/i, k],
    [PR.PR_LITERAL, /^\d+(?:_\d+)*(?:#[\w\\.]+#(?:[+\-]?\d+(?:_\d+)*)?|(?:\.\d+(?:_\d+)*)?(?:E[+\-]?\d+(?:_\d+)*)?)/i],
    [PR.PR_PLAIN, /^(?:[a-z]\w*|\\[^\\]*\\)/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0\-\"\']*/]
]), ["vhdl", "vhd"]);
/*
 Copyright (C) 2009 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t \xA0a-gi-z0-9]+/, k, "\t \u00a0abcdefgijklmnopqrstuvwxyz0123456789"],
    [PR.PR_PUNCTUATION, /^[=*~\^\[\]]+/, k, "=*~^[]"]
], [
    ["lang-wiki.meta", /(?:^^|\r\n?|\n)(#[a-z]+)\b/],
    [PR.PR_LITERAL, /^(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\b/],
    ["lang-", /^\{\{\{([\s\S]+?)\}\}\}/],
    ["lang-", /^`([^\r\n`]+)`/],
    [PR.PR_STRING, /^https?:\/\/[^\/?#\s]*(?:\/[^?#\s]*)?(?:\?[^#\s]*)?(?:#\S*)?/i],
    [PR.PR_PLAIN, /^(?:\r\n|[\s\S])[^#=*~^A-Zh\{`\[\r\n]*/]
]), ["wiki"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_KEYWORD, /^#[a-z]+/i, k, "#"]
], []), ["wiki.meta"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PUNCTUATION, /^[:|>?]+/, k, ":|>?"],
    [PR.PR_DECLARATION, /^%(?:YAML|TAG)[^#\r\n]+/, k, "%"],
    [PR.PR_TYPE, /^[&]\S+/, k, "&"],
    [PR.PR_TYPE, /^!\S*/, k, "!"],
    [PR.PR_STRING, /^"(?:[^\\"]|\\.)*(?:"|$)/, k, '"'],
    [PR.PR_STRING, /^'(?:[^']|'')*(?:'|$)/, k, "'"],
    [PR.PR_COMMENT, /^#[^\r\n]*/, k, "#"],
    [PR.PR_PLAIN, /^\s+/, k, " \t\r\n"]
], [
    [PR.PR_DECLARATION, /^(?:---|\.\.\.)(?:[\r\n]|$)/],
    [PR.PR_PUNCTUATION, /^-/],
    [PR.PR_KEYWORD, /^\w+:[ \r\n]/],
    [PR.PR_PLAIN, /^\w+/]
]), ["yaml", "yml"]);
var Qh = function(a) {
        for (var b = [], a = Mb(k, "entry", a), c = 0, d = a.length; c < d; c++) {
            var f = Mb(k, "entryDetails", a[c]);
            if (f[0]) {
                f = new pf(a[c], f[0], r);
                b.push(f);
                for (var f = Mb("a", k, a[c]), e = 0, h; h = f[e]; e++) L(h, "click", function(a) {
                    a.stopPropagation()
                })
            }
        }
        return b
    },
    Sh = function(a) {
        this.legendElt_ = a;
        this.containerElt_ = a.parentNode;
        this.checkboxElts_ = {};
        a = document.createElement("strong");
        Vb(a, "Show: ");
        var b = this.legendElt_.firstElementChild != i ? this.legendElt_.firstElementChild : Tb(this.legendElt_.firstChild);
        b.parentNode && b.parentNode.insertBefore(a, b);
        for (var a = Mb("span", "key", this.legendElt_), b = 0, c; c = a[b]; b++) {
            var d = document.createElement("label"),
                f = document.createElement("div");
            f.className = "key-bg";
            var e = document.createElement("input");
            e.type = "checkbox";
            for (var h = "", b = 0, l; l = Rh[b]; b++) if (Qa(Wa(c), l)) {
                h = l;
                break
            }
            z(f, h);
            e.className = h;
            e.id = h + "-cb";
            d.setAttribute("for", e.id);
            this.checkboxElts_[h] = e;
            "publickey" == h ? e.checked = j : Ya(this.containerElt_, "func-hide-" + h, j);
            f.appendChild(e);
            L(e, "click", this.checkboxClickHandler_, r, this);
            e = c.nextElementSibling != i ? c.nextElementSibling : Tb(c.nextSibling);
            l = h.replace("key", "");
            var m = Mb("tr", l, this.containerElt_),
                n = document.createTextNode($b(e) + " (" + m.length + ")");
            if (0 < m.length) for (var m = Mb("table", "horiz-rule", this.containerElt_), p = 0, q; q = m[p]; p++) {
                var y = Mb("tr", l, q);
                if (0 < y.length) {
                    var B = y[y.length - 1];
                    q = q.insertRow(B.rowIndex + 1);
                    q.className = "funcs-hidden-" + l;
                    q.insertCell(0).className = "access";
                    q = q.insertCell(1);
                    q.className = h + "-toggle";
                    q.functionType = h;
                    q.setAttribute("colspan", B.cells.length - 1);
                    q.innerHTML = y.length + " hidden " + l + " item" + (1 < y.length ? "s" : "") + ".";
                    L(q, "click", this.hiddenFunctionTypeRowClickHandler_, r, this)
                }
            }
            d.appendChild(f);
            d.appendChild(n);
            e.parentNode && e.parentNode.insertBefore(d, e.nextSibling);
            Sb(e);
            Sb(c)
        }
    },
    Rh = ["publickey", "protectedkey", "privatekey"];
Sh.prototype.hiddenFunctionTypeRowClickHandler_ = function(a) {
    a = a.currentTarget.functionType;
    this.checkboxElts_[a].checked = j;
    Ya(this.containerElt_, "func-hide-" + a, r)
};
Sh.prototype.checkboxClickHandler_ = function(a) {
    a = a.currentTarget;
    Ya(this.containerElt_, "func-hide-" + a.className, !a.checked)
};
var Uh = function(a, b, c) {
        this.open = a;
        this.zippies = c;
        a = Mb("a", "toggleLink", b);
        0 < a.length && (this.toggleElt = a[0], Th(this), L(this.toggleElt, "click", this.handleClick, r, this))
    };
Uh.prototype.handleClick = function() {
    this.open = !this.open;
    for (var a = 0; a < this.zippies.length; a++) this.zippies[a].setExpanded(this.open);
    Th(this)
};
var Th = function(a) {
        Vb(a.toggleElt, a.open ? "Close all" : "Expand all")
    },
    Vh = function() {
        this.xhr_ = new Cd;
        L(this.xhr_, "success", this.loadData, r, this);
        this.callbacks_ = []
    },
    Wh = function(a, b, c) {
        b = c ? v(b, c) : b;
        a.callbacks_.push(b)
    };
Vh.prototype.send = function(a) {
    this.xhr_.send(a)
};
Vh.prototype.loadData = function() {
    var a;
    var b = this.xhr_;
    try {
        a = b.xhr_ ? b.xhr_.responseText : ""
    } catch (c) {
        nd(b.logger_, "Can not get responseText: " + c.message), a = ""
    }
    a = dc(a);
    for (b = 0; b < this.callbacks_.length; b++) this.callbacks_[b](a)
};
var Yh = function(a, b, c) {
        this.acElt = a;
        this.numToShow = b || 25;
        this.blankUrl = c || Xh
    },
    Xh = _staticFilePath + "images/blank.gif",
    Zh = {
        "class": ".",
        "interface": ".",
        namespace: ".",
        file: "/"
    };
Yh.prototype.buildAc = function(a) {
    this.rows_ = [];
    this.index_ = [];
    $h(this, "", a.typeIndex, []);
    $h(this, "", a.fileIndex, []);
    a = new ai(this.rows_, this.acElt, this.blankUrl, r, j);
    a.maxMatches_ = this.numToShow;
    L(a, "update", this.choiceHandler, r, this)
};
var $h = function(a, b, c, d) {
        var f = c[1];
        if (f) {
            var e = c[0];
            d.shift();
            var h = d.join(Zh[e]) + Zh[e],
                e = new bi(b, h, e);
            a.index_[e.toString()] = f;
            a.rows_.push(e)
        }
        for (var l in c[2]) $h(a, l, c[2][l], d.concat(b))
    };
Yh.prototype.choiceHandler = function(a) {
    window.location = this.index_[a.row]
};
var bi = function(a, b, c) {
        this.name = a;
        this.pathname = b;
        this.fullname = this.pathname + this.name;
        this.kind = c
    };
bi.prototype.toString = function() {
    return this.fullname
};
bi.prototype.getName = function() {
    return this.name
};
var ci = function(a) {
        this.blankImg = a
    },
    di = {
        "class": "gdoc-ac-class-icon",
        file: "gdoc-ac-file-icon",
        "interface": "gdoc-ac-iface-icon",
        namespace: "gdoc-ac-namespace-icon"
    };
ci.prototype.renderRow = function(a, b, c) {
    var b = a.data.kind,
        d = di[b] || "gdoc-ac-file-icon",
        f = Pb("img", {
            src: this.blankImg
        });
    z(f, d, "goog-tree-icon");
    c.appendChild(f);
    "file" === b ? (b = document.createTextNode(a.data.getName() + " "), a = Pb("span", k, a.data.pathname), z(a, "entryNamespace"), c.appendChild(b), c.appendChild(a)) : c.appendChild(document.createTextNode(a.data.toString()))
};
var ai = function(a, b, c, d, f) {
        a = new Ld(a, !f);
        c = new gf(k, new ci(c));
        d = new ne(k, k, !! d);
        Md.call(this, a, c, d);
        d.ac_ = this;
        d.attachInputs(b)
    };
x(ai, Md);
var ei = function(a, b, c) {
        if (!b) {
            var b = sg,
                d = {},
                f;
            for (f in b) d[f] = b[f];
            b = d
        }
        f = b;
        f.cleardotPath = _staticFilePath + "images/cleardot.gif";
        this.current = r;
        Tg.call(this, a, f, c)
    };
x(ei, Tg);
ei.prototype.setExpanded = function(a) {
    ei.superClass_.setExpanded.call(this, a);
    fi(this, a)
};
ei.prototype.createNode = function(a, b, c) {
    return new gi(a, b, this.config_, this.dom_, c)
};
var gi = function(a, b, c, d, f) {
        V.call(this, b, c, d);
        this.name = a;
        this.type_ = f
    };
x(gi, Gg);
var hi = {
    "class": "gdoc-tree-class-icon",
    file: "gdoc-tree-file-icon",
    "interface": "gdoc-tree-iface-icon",
    namespace: "gdoc-tree-namespace-icon"
},
    ii = {
        "class": "gdoc-tree-class-label",
        "interface": "gdoc-tree-class-label",
        namespace: "gdoc-tree-namespace-label",
        file: "gdoc-tree-class-label",
        folder: "gdoc-tree-namespace-label"
    };
s = gi.prototype;
s.getName = function() {
    return this.name
};
s.getType = function() {
    return this.type_
};
s.getCalculatedIconClass = function() {
    return this.type_ in hi ? this.config_.cssTreeIcon + " " + hi[this.type_] : gi.superClass_.getCalculatedIconClass.call(this)
};
s.setExpanded = function(a) {
    gi.superClass_.setExpanded.call(this, a);
    fi(this, a)
};
s.getRowClassName = function() {
    return this.config_.cssTreeRow + (this.isSelected() ? " selected" : "") + (this.current ? " current" : "")
};
s.getLabelHtml = function() {
    var a = this.config_.cssItemLabel,
        b = "";
    this.type_ in ii && (a = ii[this.type_], b = 'type="expand" ');
    var c = this.toolTip_;
    this.getTree();
    var d = new rg,
        f = zf(this) ? " (" + this.children_.length + ")" : "";
    d.append("<span ", b, 'class="', a, '" ', c ? ' title="' + Ba(c) + '" ' : " ", ">", this.getHtml(), f, "</span>", "<span>", this.afterLabelHtml_, "</span>");
    return d.toString()
};
s.toHtml = function(a) {
    var b = this.getTree(),
        b = !b.showLines_ || b == this.getParent() && !b.showRootLines_ ? this.config_.cssChildrenNoLines : this.config_.cssChildren,
        c = this.getExpanded() && zf(this);
    a.append('<div class="', this.config_.cssItem, zf(this) ? " gdoc-treenodewithchildren" : "", '" id="', sf(this), '">', Bg(this), '<div class="', b, '" style="', "background-position:" + Cg(this) + ";", c ? "" : "display:none;", '">');
    c && xf(this, function(b) {
        b.toHtml(a)
    });
    a.append("</div></div>")
};
var fi = function(a, b) {
        if (b && 1 == yf(a)) {
            var c = R(a, 0);
            c.setExpanded && c.setExpanded(j)
        }
    },
    ji = function(a, b, c) {
        var d = a.getTree().createNode(b, k, c[0]);
        u(c[1]) && (b = '<a href="' + c[1] + '">' + b + "</a>", d.onClick_ = ca);
        d.setHtml(b);
        a.add(d);
        a = db(c[2]);
        a.sort();
        for (b = 0; b < a.length; b++) {
            var f = a[b];
            ji(d, f, c[2][f])
        }
    },
    ki = function(a, b, c) {
        var a = new ei(a),
            d = db(c[2]);
        d.sort();
        for (var f = 0; f < d.length; f++) {
            var e = d[f];
            ji(a, e, c[2][e])
        }
        a.render(b);
        a.setExpanded(j);
        return a
    },
    li = function(a) {
        a = Lb(a);
        this.tabs = new og;
        this.tabs.decorate(a);
        this.tabToPageMap = {};
        this.currTab = k;
        L(this.tabs, "select", this.selectHandler, r, this)
    },
    ri = function(a, b, c, d, f) {
        d.style.display = "none";
        var e = Mb("div", "indexTree", d);
        ki(c, e[0], f);
        a.tabToPageMap[b] = d;
        a.currTab || qi(a, b)
    },
    qi = function(a, b) {
        a.currTab && (a.tabToPageMap[a.currTab].style.display = "none");
        a.currTab = b;
        a.tabToPageMap[a.currTab].style.display = "block"
    };
li.prototype.selectHandler = function(a) {
    a = (a = a.target.content_) ? (u(a) ? a : ha(a) ? Oa(a, ac).join("") : $b(a)).replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") : "";
    qi(this, a)
};
yc(window, "load", function() {
    function a(a) {
        ri(m, "Type Index", window._typeTreeName, e, a.typeIndex);
        ri(m, "File Index", window._fileTreeName, h, a.fileIndex);
        if (l) {
            var a = m,
                b = l;
            b.style.display = "none";
            a.tabToPageMap.Demos = b;
            a.currTab || qi(a, "Demos")
        }
        Lb("loading").style.display = "none"
    }
    function b(a, b) {
        for (var c = Lb("localView"), d = b.getChildren(), e = 0; e < d.length; e++) if ("namespace" != d[e].getType()) {
            var f = Pb("div");
            f.innerHTML = d[e].getHtml();
            c.appendChild(f);
            d[e] == a ? z(f, "current") : z(f, "localView")
        }
    }
    function c(a, c, d) {
        var e = a.getAttribute("current"),
            f = a.getAttribute("rootPath"),
            h = c ? "." : "/",
            d = c ? d.typeIndex : d.fileIndex,
            c = [];
        0 < f.length && (c = f.split(h));
        f = d;
        for (d = 0; d < c.length; d++) f = f[2][c[d]];
        d = f;
        f = db(d[2]);
        f = ki('<span style="display:none;"></span>', a, 1 == f.length ? d[2][f[0]] : d);
        a = b;
        e = e.split(h);
        h = f;
        for (f = 0; f < e.length && h; f++) for (var c = h.getChildren(), l = h, h = k, d = 0; d < c.length; d++) c[d].getName() == e[f] && (h = c[d]);
        h && a && a(h, l || k)
    }
    function d(a) {
        return function() {
            for (var b = this.isChecked(), c = Mb(k, a, i), d = 0; d < c.length; d++) Ge(c[d], b)
        }
    }
    var f = Lb("tabbar"),
        e = Lb("typePage"),
        h = Lb("filePage"),
        l = Lb("demoPage"),
        m = f && e && h ? new li(f) : k,
        n = new Jc;
    Ma("I.png check-outline.gif custom-logo.png minus.png arrow.gif check.gif inherit.gif plus.png blank.gif cleardot.gif loading.gif sidetree.png bluearrow.png logo.png tree.png".split(" "), function(a) {
        var b = _staticFilePath + "images/" + a;
        (b = u(b) ? b : b.src) && (n.imageIdToUrlMap_[a] = b)
    });
    L(n, "complete", function() {
        for (var b = Mb("div", "section", i), e = [], f = 0; f < b.length; f++) {
            var h = Qh(b[f]);
            new Uh(r, b[f], h);
            e.push()
        }
        b = Mb("a", "viewdef", i);
        e = [];
        for (f = 0; f < b.length; f++) if (h = b[f].nextElementSibling != i ? b[f].nextElementSibling : Tb(b[f].nextSibling)) {
            var l = new $g(b[f]);
            l.setHtml(h.innerHTML);
            e.push(l)
        }
        b = new Vh;
        (e = (e = document.getElementById("ac")) ? new Yh(e) : k) && Wh(b, e.buildAc, e);
        if (e = document.getElementById("acls")) {
            f = Mb(k, "aclbox", e);
            for (e = 0; e < f.length; e++) h = new Yf(j), l = f[e].getAttribute("accessLevel"), L(h, "change", d(l)), h.decorate(f[e])
        }
        m && Wh(b, a);
        (e = Lb("sideTypeIndex")) && Wh(b, qa(c, e, j));
        (e = Lb("sideFileIndex")) && Wh(b, qa(c, e, r));
        b.send("doc_json_index.js?zx=" + Math.random());
        b = Mb("div", "legend", i);
        for (e = 0; f = b[e]; e++) new Sh(f)
    });
    n.start()
});
var si = {
    "gviz-org-chart": function(a) {
        var b = new google.visualization.DataTable;
        b.addColumn("string", "Name");
        b.addColumn("string", "Parent");
        for (var c = 0, d = a.rows[0]; d = a.rows[c]; c++) 2 <= d.cells.length && b.addRows([
            [d.cells[0].innerHTML, d.cells[1].innerHTML]
        ]);
        c = Pb("div", "goog-inline-block");
        a.parentNode.replaceChild(c, a);
        a.style.display = "block";
        (new google.visualization.OrgChart(c)).draw(b, {
            allowHtml: j,
            allowCollapse: j
        })
    }
},
    ti = function() {
        for (var a = Mb("table", i, i), b, c = 0; b = a[c++];) {
            var d = si[b.className];
            d && d(b)
        }
    },
    ui = ["grokdoc", "onLoad"],
    vi = t;
!(ui[0] in vi) && vi.execScript && vi.execScript("var " + ui[0]);
for (var wi; ui.length && (wi = ui.shift());)!ui.length && ga(ti) ? vi[wi] = ti : vi = vi[wi] ? vi[wi] : vi[wi] = {};