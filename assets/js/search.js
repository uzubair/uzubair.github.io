/*!
  * Simple-Jekyll-Search v1.7.1 (https://github.com/christian-fei/Simple-Jekyll-Search)
  * Copyright 2015-2018, Christian Fei
  * Licensed under the MIT License.
  */
 ! function() {
    "use strict";
    var f = {
        load: function(t, e) {
            var n = window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            n.open("GET", t, !0), n.onreadystatechange = (r = n, i = e, function() {
                if (4 === r.readyState && 200 === r.status) try {
                    i(null, JSON.parse(r.responseText))
                } catch (t) {
                    i(t, null)
                }
            }), n.send();
            var r, i
        }
    };
    var n = function(t, e) {
            var n = e.length,
                r = t.length;
            if (n < r) return !1;
            if (r === n) return t === e;
            t: for (var i = 0, o = 0; i < r; i++) {
                for (var u = t.charCodeAt(i); o < n;)
                    if (e.charCodeAt(o++) === u) continue t;
                return !1
            }
            return !0
        },
        e = new function() {
            this.matches = function(t, e) {
                return n(e.toLowerCase(), t.toLowerCase())
            }
        };
    var r = new function() {
        this.matches = function(e, t) {
            return !!e && (e = e.trim().toLowerCase(), 0 < (t = t.toLowerCase()).split(" ").filter(function(t) {
                return 0 <= e.indexOf(t)
            }).length)
        }
    };
    var l = {
        put: function(t) {
            if (s(t)) return c(t);
            if (e = t, Boolean(e) && "[object Array]" === Object.prototype.toString.call(e)) return function(t) {
                var e = [];
                a();
                for (var n = 0, r = t.length; n < r; n++) s(t[n]) && e.push(c(t[n]));
                return e
            }(t);
            var e;
            return undefined
        },
        clear: a,
        search: function(t) {
            if (!t) return [];
            return function(t, e, n, r) {
                for (var i = [], o = 0; o < t.length && i.length < r.limit; o++) {
                    var u = p(t[o], e, n, r);
                    u && i.push(u)
                }
                return i
            }(o, t, u.searchStrategy, u).sort(u.sort)
        },
        setOptions: function(t) {
            (u = t || {}).fuzzy = t.fuzzy || !1, u.limit = t.limit || 10, u.searchStrategy = t.fuzzy ? e : r, u.sort = t.sort || i
        }
    };

    function i() {
        return 0
    }
    var o = [],
        u = {};

    function a() {
        return o.length = 0, o
    }

    function s(t) {
        return Boolean(t) && "[object Object]" === Object.prototype.toString.call(t)
    }

    function c(t) {
        return o.push(t), o
    }

    function p(t, e, n, r) {
        for (var i in t)
            if (!d(t[i], r.exclude) && n.matches(t[i], e)) return t
    }

    function d(t, e) {
        for (var n = !1, r = 0, i = (e = e || []).length; r < i; r++) {
            var o = e[r];
            !n && new RegExp(t).test(o) && (n = !0)
        }
        return n
    }
    u.fuzzy = !1, u.limit = 10, u.searchStrategy = u.fuzzy ? e : r, u.sort = i;
    var h = {
            compile: function(r) {
                return v.template.replace(v.pattern, function(t, e) {
                    var n = v.middleware(e, r[e], v.template);
                    return void 0 !== n ? n : r[e] || t
                })
            },
            setOptions: function(t) {
                v.pattern = t.pattern || v.pattern, v.template = t.template || v.template, "function" == typeof t.middleware && (v.middleware = t.middleware)
            }
        },
        v = {};
    v.pattern = /\{(.*?)\}/g, v.template = "", v.middleware = function() {};
    var m = {
        merge: function(t, e) {
            var n = {};
            for (var r in t) n[r] = t[r], "undefined" != typeof e[r] && (n[r] = e[r]);
            return n
        },
        isJSON: function(t) {
            try {
                return !!(t instanceof Object && JSON.parse(JSON.stringify(t)))
            } catch (e) {
                return !1
            }
        }
    };
    ! function(e) {
        var r = {
                searchInput: null,
                resultsContainer: null,
                json: [],
                success: Function.prototype,
                searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
                templateMiddleware: Function.prototype,
                sortMiddleware: function() {
                    return 0
                },
                noResultsText: "No results found",
                limit: 10,
                fuzzy: !1,
                exclude: []
            },
            i = ["searchInput", "resultsContainer", "json"],
            o = function t(e) {
                if (n = e, !(n && "undefined" != typeof n.required && n.required instanceof Array)) throw new Error("-- OptionsValidator: required options missing");
                var n;
                if (!(this instanceof t)) return new t(e);
                var r = e.required;
                this.getRequiredOptions = function() {
                    return r
                }, this.validate = function(e) {
                    var n = [];
                    return r.forEach(function(t) {
                        "undefined" == typeof e[t] && n.push(t)
                    }), n
                }
            }({
                required: i
            });

        function u(t) {
            r.success(t), l.put(t), r.searchInput.addEventListener("keyup", function(t) {
                var e;
                e = t.which, -1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(e) && (n(), s(t.target.value))
            })
        }

        function n() {
            r.resultsContainer.innerHTML = ""
        }

        function a(t) {
            r.resultsContainer.innerHTML += t
        }

        function s(t) {
            var e;
            (e = t) && 0 < e.length && (n(), function(t) {
                var e = t.length;
                if (0 === e) return a(r.noResultsText);
                for (var n = 0; n < e; n++) a(h.compile(t[n]))
            }(l.search(t)))
        }

        function c(t) {
            throw new Error("SimpleJekyllSearch --- " + t)
        }
        e.SimpleJekyllSearch = function(t) {
            var n;
            return 0 < o.validate(t).length && c("You must specify the following required options: " + i), r = m.merge(r, t), h.setOptions({
                template: r.searchResultTemplate,
                middleware: r.templateMiddleware
            }), l.setOptions({
                fuzzy: r.fuzzy,
                limit: r.limit,
                sort: r.sortMiddleware
            }), m.isJSON(r.json) ? u(r.json) : (n = r.json, f.load(n, function(t, e) {
                t && c("failed to get JSON (" + n + ")"), u(e)
            })), {
                search: s
            }
        }
    }(window)
}();