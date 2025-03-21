!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.MSP2Client = e() : t.MSP2Client = e()
}(this, ( () => ( () => {
        "use strict";
        var t = {
            d: (e, n) => {
                for (var i in n)
                    t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: n[i]
                    })
            }
            ,
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
        }
            , e = {};
        function n(t, e, n) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t)
                        return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        t.d(e, {
            default: () => In
        });
        class i {
        }
        var o, r = "msp2_auth_token", s = {
            t: window.localStorage
        }, a = {
            t: new TextDecoder
        };
        function c(t, e, n) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t)
                        return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        function h(t, e, n) {
            (function(t, e) {
                    if (e.has(t))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }
            )(t, e),
                e.set(t, n)
        }
        function d(t, e) {
            return t.get(u(t, e))
        }
        function u(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        n(i, "getUserData", ( () => {
                const [t,e] = [t => JSON.parse(a.t.decode(Uint8Array.from(atob(t), (t => t.charCodeAt(0))))), null];
                return n => {
                    try {
                        const {profileId: e, name: i} = t(n.split(".")[1]);
                        return {
                            profileId: e,
                            name: i
                        }
                    } catch {
                        return e
                    }
                }
            }
        )()),
            n(i, "getToken", ( () => s.t.getItem(r))),
            n(i, "saveToken", (t => t && s.t.setItem(r, t))),
            n(i, "isValidToken", (t => !!(t?.length >>> 0)));
        var p = new WeakMap
            , l = new WeakMap
            , m = new WeakMap;
        class f {
            constructor() {
                h(this, p, !1),
                    h(this, l, {
                        s: "https://umami.msp2.lol/script.js",
                        i: "511ee3e4-ed45-4e55-9931-986040b1b070"
                    }),
                    h(this, m, ( () => {
                            if (d(p, this))
                                return;
                            const t = document.createElement("script");
                            Object.assign(t, {
                                src: d(l, this).s,
                                defer: !0,
                                onload: () => function(t, e, n) {
                                    return t.set(u(t, e), n),
                                        n
                                }(p, this, !0)
                            }),
                                t.setAttribute("data-website-id", d(l, this).i),
                                document.head.appendChild(t)
                        }
                    )),
                    c(this, "track", ( (t, e) => window.umami?.track(t, e))),
                    d(m, this).call(this)
            }
        }
        o = f;
        var w, g = {
            t: void 0
        };
        function b(t, e, n) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t)
                        return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        function v(t, e, n) {
            (function(t, e) {
                    if (e.has(t))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }
            )(t, e),
                e.set(t, n)
        }
        function y(t, e) {
            return t.get(function(t, e, n) {
                if ("function" == typeof t ? t === e : t.has(e))
                    return arguments.length < 3 ? e : n;
                throw new TypeError("Private element is not present on this object")
            }(t, e))
        }
        c(f, "getInstance", ( () => g.t ?? (g.t = new o)));
        var x = new WeakMap
            , k = new WeakMap
            , S = new WeakMap
            , M = new WeakMap
            , W = new WeakMap
            , T = new WeakMap;
        class j {
            constructor() {
                if (v(this, x, new Set(["google-analytics.com", "region1.analytics.google.com", "analytics.eu.moviestarplanet.app", "www.google-analytics.com"])),
                    v(this, k, new Map),
                    v(this, S, new Map),
                    v(this, M, {
                        h: {
                            "content-type": "application/json",
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                            accept: "application/json, text/plain, */*",
                            "accept-language": "en-US,en;q=0.9",
                            origin: "https://www.moviestarplanet.com",
                            referer: "https://www.moviestarplanet.com/",
                            "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": '"Windows"',
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "cross-site"
                        }
                    }),
                    v(this, W, ( () => {
                            const t = XMLHttpRequest.prototype
                                , e = window.fetch;
                            var n;
                            t.open = (n = t.open,
                                    function() {
                                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                                            e[i] = arguments[i];
                                        return y(T, this).call(this, e[1]) ? void this.abort() : n.apply(this, e)
                                    }
                            ),
                                Object.defineProperty(window, "fetch", {
                                    value: function(t, n) {
                                        return y(T, this).call(this, t) ? Promise.resolve(new Response(null,{
                                            status: 403
                                        })) : e.call(window, t, n)
                                    }
                                        .bind(this),
                                    writable: !0
                                })
                        }
                    )),
                    v(this, T, (t => {
                            if (y(k, this).has(t))
                                return y(k, this).get(t);
                            try {
                                const e = y(x, this).has(new URL(t).hostname);
                                return y(k, this).set(t, e),
                                    e
                            } catch {
                                return !1
                            }
                        }
                    )),
                    b(this, "getHeaders", (t => {
                            const e = t || "";
                            if (y(S, this).has(e))
                                return y(S, this).get(e);
                            const n = {
                                ...y(M, this).h,
                                authorization: t ? `Bearer ${t}` : ""
                            };
                            return Object.freeze(n),
                                y(S, this).set(e, n),
                                n
                        }
                    )),
                    b(this, "delay", (function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500
                                , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                            return new Promise((n => setTimeout(n, ~~(Math.random() * (e - t + 1)) + t)))
                        }
                    )),
                    z.t)
                    return z.t;
                z.t = this,
                    y(W, this).call(this)
            }
        }
        w = j;
        var z = {
            t: void 0
        };
        function _(t, e, n) {
            E(t, e),
                e.set(t, n)
        }
        function E(t, e) {
            if (e.has(t))
                throw new TypeError("Cannot initialize the same private elements twice on an object")
        }
        function $(t, e) {
            return t.get(C(t, e))
        }
        function P(t, e, n) {
            return t.set(C(t, e), n),
                n
        }
        function C(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        b(j, "getInstance", ( () => z.t ?? new w));
        var O = new WeakMap
            , A = new WeakMap
            , I = new WeakMap
            , N = new WeakMap
            , U = new WeakMap
            , J = new WeakMap
            , D = new WeakMap
            , q = new WeakMap
            , R = new WeakMap
            , B = new WeakSet;
        class F {
            constructor() {
                var t;
                E(this, t = B),
                    t.add(this),
                    _(this, O, !0),
                    _(this, A, void 0),
                    _(this, I, void 0),
                    _(this, N, !1),
                    _(this, U, new Set),
                    _(this, J, void 0),
                    _(this, D, void 0),
                    _(this, q, []),
                    _(this, R, !1),
                    P(A, this, f.getInstance()),
                    P(I, this, j.getInstance()),
                    P(J, this, window.fetch),
                    P(D, this, window.WebSocket),
                    this.initialize()
            }
            initialize() {
                "undefined" != typeof window && (this.interceptFetchRequests(),
                    this.interceptWebSocket())
            }
            interceptFetchRequests() {
                var t = this;
                window.fetch = async function() {
                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                        n[i] = arguments[i];
                    const [o,r] = n;
                    try {
                        if (r?.headers && C(B, t, Q).call(t, r.headers),
                        C(B, t, Y).call(t, o) && $(O, t))
                            return C(B, t, H).call(t, o, r, n)
                    } catch (t) {}
                    return $(J, t).apply(window, n)
                }
            }
            getToken() {
                return i.getToken() || null
            }
            async resetAvatar() {
                try {
                    const t = this.getToken()
                        , e = this.getProfileId();
                    if (!t || !e)
                        throw new Error("Missing authentication");
                    const n = C(B, this, G).call(this, t)
                        , i = $(I, this).getHeaders(t)
                        , o = await fetch(`https://${n}/profileattributes/v1/profiles/${e}/games/j68d/attributes`, {
                        headers: i
                    });
                    if (!o.ok)
                        throw new Error(`Failed to get avatar attributes: ${o.status}`);
                    const r = await o.json();
                    if (!r?.avatarId)
                        throw new Error("No avatar ID found");
                    const s = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://github.com/mwarcc/msp2guis/raw/refs/heads/main/default.bson"));
                    if (!s.ok)
                        throw new Error(`Failed to get default avatar: ${s.status}`);
                    const a = await s.arrayBuffer()
                        , c = await fetch(`https://${n}/profilegeneratedcontent/v2/profiles/${e}/games/j68d/avatars/${r.avatarId}`, {
                        method: "PUT",
                        headers: {
                            ...i,
                            "content-type": "application/bson",
                            signature: "2eA/CteuR/k2YUipj3YflkjpxJLRoUlSbNNY8xpwo6S8="
                        },
                        body: a
                    });
                    if (!c.ok)
                        throw new Error(`Avatar update failed: ${c.status}`)
                } catch (t) {}
            }
            async processQuestDefinitions(t) {
                if (!$(N, this) && $(O, this)) {
                    P(N, this, !0);
                    try {
                        const e = this.getToken()
                            , n = this.getProfileId();
                        if (!e || !n)
                            return;
                        const i = C(B, this, G).call(this, e)
                            , o = $(I, this).getHeaders(e)
                            , r = [];
                        C(B, this, X).call(this, t, r, i, n, o),
                        r.length > 0 && (await C(B, this, Z).call(this, r),
                            await Promise.all([C(B, this, tt).call(this, n, e), C(B, this, et).call(this, n, e)]),
                            $(A, this).track("Quests Completed", {
                                count: r.length
                            }))
                    } catch (t) {} finally {
                        P(N, this, !1)
                    }
                }
            }
            getProfileId() {
                const t = this.getToken();
                if (!t)
                    return null;
                try {
                    return JSON.parse(atob(t.split(".")[1])).profileId
                } catch (t) {
                    return null
                }
            }
            interceptWebSocket() {
                const t = this;
                window.WebSocket = function() {
                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                        n[i] = arguments[i];
                    const o = new ($(D, t))(...n);
                    o.addEventListener("message", (e => {
                            $(O, t) && "string" == typeof e.data && t.handleQuizMessage(o, e.data)
                        }
                    ));
                    const r = o.send;
                    return o.send = function(e) {
                        return $(O, t) && "string" == typeof e && C(B, t, nt).call(t, e, o),
                            r.apply(this, arguments)
                    }
                        ,
                        o
                }
                    ,
                    Object.assign(window.WebSocket, $(D, this))
            }
            toggle() {
                return P(O, this, !$(O, this)),
                    $(O, this)
            }
            isEnabled() {
                return $(O, this)
            }
            cleanup() {
                "undefined" != typeof window && (window.fetch = $(J, this),
                    window.WebSocket = $(D, this)),
                    P(q, this, []),
                    P(R, this, !1),
                    P(N, this, !1)
            }
        }
        function G(t) {
            if (!t)
                return "eu.mspapis.com";
            const e = i.getUserData(t)
                , n = e?.name?.split("|")[0];
            return ["US", "CA"].includes(n) ? "us.mspapis.com" : "eu.mspapis.com"
        }
        function L(t) {
            if (!t)
                return rt.t;
            const e = i.getUserData(t)
                , n = e?.name?.split("|")[0];
            return ["US", "CA"].includes(n) ? st.t : rt.t
        }
        function Q(t) {
            const e = Object.entries(t).find((t => {
                    let[e] = t;
                    return "authorization" === e.toLowerCase()
                }
            ))?.[1];
            if (e?.startsWith("Bearer ")) {
                const t = C(B, this, V).call(this, e);
                i.isValidToken(t) && i.saveToken(t)
            }
        }
        function Y(t) {
            return t.includes("games/j68d/definitions?questType=") || t.includes("games/j68d/quests?questType=")
        }
        async function H(t, e, n) {
            const i = await $(J, this).apply(window, n)
                , o = await i.clone().json();
            if ((o.questDefinitions?.length || o.quests?.length) && !$(N, this)) {
                const t = (o.questDefinitions || o.quests || []).filter((t => t.definitionId && !$(U, this).has(t.definitionId)));
                t.length > 0 && ($(q, this).push(...t),
                $(R, this) || (P(R, this, !0),
                    setTimeout(( () => C(B, this, K).call(this)), it.t)))
            }
            return i
        }
        function K() {
            $(q, this).length > 0 && ($(A, this).track("Processing New Quests", {
                count: $(q, this).length
            }),
                this.processQuestDefinitions($(q, this)),
                P(q, this, [])),
                P(R, this, !1)
        }
        function V(t) {
            return t.replace("Bearer ", "").trim()
        }
        function X(t, e, n, i, o) {
            const r = t => {
                    const s = t.definitionId;
                    if (!s || $(U, this).has(s))
                        return;
                    const a = s.toLowerCase().includes("gift") ? 4 : 1;
                    for (let t = 0; t < a; t++)
                        e.push({
                            url: `https://${n}/quests/v2/profiles/${i}/games/j68d/quests/${s}/progress`,
                            method: "PUT",
                            headers: o,
                            body: JSON.stringify({
                                progress: 1
                            })
                        });
                    $(U, this).add(s),
                    t.children?.length && t.children.forEach(r)
                }
            ;
            t.forEach(r)
        }
        async function Z(t) {
            for (let e = 0; e < t.length; e += ot.t) {
                const n = t.slice(e, e + ot.t);
                await Promise.all(n.map((t => fetch(t.url, {
                    method: t.method,
                    headers: t.headers,
                    body: t.body
                }).catch((t => {}
                ))))),
                e + ot.t < t.length && await new Promise((t => setTimeout(t, 300)))
            }
        }
        async function tt(t, e) {
            const n = C(B, this, G).call(this, e)
                , i = $(I, this).getHeaders(e)
                , o = [{
                url: `https://${n}/quests/v2/profiles/${t}/games/j68d/quests/random_daily_change_profile_bg/state`,
                body: JSON.stringify({
                    state: "Complete"
                })
            }, ...Array(10).fill({
                url: `https://${n}/quests/v2/profiles/${t}/games/j68d/quests/daily_pet_pets/state`,
                body: JSON.stringify({
                    state: "Complete"
                })
            }), ...Array(4).fill({
                url: `https://${n}/timelimitedrewards/v2/profiles/${t}/games/j68d/rewards/daily_pickup`,
                body: JSON.stringify({
                    state: "Claimed"
                })
            })];
            await Promise.all(o.map((t => fetch(t.url, {
                method: "PUT",
                headers: i,
                body: t.body
            }).catch((t => {}
            )))))
        }
        async function et(t, e) {
            const n = C(B, this, G).call(this, e)
                , i = $(I, this).getHeaders(e)
                , o = JSON.stringify({
                profileId: t,
                gameId: "j68d"
            })
                , r = C(B, this, L).call(this, e);
            for (let t = 0; t < r.length; t += ot.t) {
                const e = r.slice(t, t + ot.t);
                await Promise.all(e.map((t => fetch(`https://${n}/pets/v1/pets/${t}/interactions`, {
                    method: "POST",
                    headers: i,
                    body: o
                }).catch((t => {}
                ))))),
                t + ot.t < r.length && await new Promise((t => setTimeout(t, 200)))
            }
        }
        function nt(t, e) {
            ['42["chatv2:send",{"message":"avreset"}]', '42["chatv2:send",{"message":"a­v­r­e­s­e­t"}]'].includes(t) && ($(A, this).track("Avatar Reset"),
                this.resetAvatar())
        }
        var it = {
            t: 1e4
        }
            , ot = {
            t: 5
        }
            , rt = {
            t: ["cf0589ffe9ed45369d70dcaaa9aa1db2", "6ca07ffa53e3468598e6f2a2e0d20ded", "cf42a511688e49f795e387d43a78c758", "d92645e7672142028f2731aeda6e8e6f", "39e585c334834622ab69fa636068d278", "7e4f2d790d5c4b3e808f3737b30f6458", "c568275ccfbb482486d54942542fe22f", "e79da67391154e56ad381960ca344b54", "3924865e60fe426eb2862fd9a7a813b5", "d2d9a0623b24dde83142b8951ea3a79", "8a05904fe4c042009f60ea0e3958832e"]
        }
            , st = {
            t: ["c2e1adda81be4c79af951760d95777f4", "c582f5c2ff8144dcbc5ee04b234f40fe", "4e5e437fd1f7420893b012c0757565fd", "fe4b1ee6448045de9d37eec3fe7486bc", "bdc6f675cc6047088a5b623753963459", "c0cef46f2b3c4887b3224fc3f91376d3", "6b2729ddc59a475dab5a64f07f585264", "8d464a5ef2ba4b8cadbbe3c82b758ee7", "0e07bbf665b447ae92ed5a7393ca31ff", "65dcdc6e949a439e93bdecf14d8c0e1b"]
        };
        function at(t, e, n) {
            (function(t, e) {
                    if (e.has(t))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }
            )(t, e),
                e.set(t, n)
        }
        function ct(t, e) {
            return t.get(dt(t, e))
        }
        function ht(t, e, n) {
            return t.set(dt(t, e), n),
                n
        }
        function dt(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        var ut = new WeakMap
            , pt = new WeakMap
            , lt = new WeakMap
            , mt = new WeakMap;
        class ft {
            constructor() {
                at(this, ut, !0),
                    at(this, pt, new Map),
                    at(this, lt, null),
                    at(this, mt, void 0),
                    ht(mt, this, f.getInstance()),
                    this.initialize()
            }
            async initialize() {
                try {
                    const t = await fetch("https://raw.githubusercontent.com/mwarcc/ss/refs/heads/main/quiz.json");
                    if (!t.ok)
                        throw new Error(`HTTP error! Status: ${t.status}`);
                    const e = await t.json();
                    Object.entries(e).forEach((t => {
                            let[e,n] = t;
                            ct(pt, this).set(e, n)
                        }
                    )),
                        this.interceptWebSocket()
                } catch (t) {}
            }
            interceptWebSocket() {
                const t = window.WebSocket
                    , e = this;
                window.WebSocket = function() {
                    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                        i[o] = arguments[o];
                    const r = new t(...i);
                    return r.addEventListener("message", (t => {
                            ct(ut, e) && e.handleMessage(r, t.data)
                        }
                    )),
                        r
                }
                    ,
                    Object.assign(window.WebSocket, t)
            }
            handleMessage(t, e) {
                if (e.startsWith('40{"jwt":"') || e.match(/^\d+$/))
                    return;
                const n = e.startsWith("42[") ? e.substring(2) : e;
                try {
                    const [e,i] = JSON.parse(n);
                    this.processPayload(t, i)
                } catch (t) {}
            }
            processPayload(t, e) {
                const {messageType: n, messageContent: i} = e;
                switch (n) {
                    case "game:state":
                        ct(mt, this).track("Quiz State"),
                            this.handleGameState(t, i);
                        break;
                    case "quiz:chal":
                        ct(mt, this).track("Quiz Challenge"),
                            this.handleQuizChallenge(i);
                        break;
                    case "quiz:reveal":
                        ct(mt, this).track("Quiz Reveal"),
                            this.handleQuizReveal(i)
                }
            }
            handleGameState(t, e) {
                if ("waiting_for_answer" === e.newState) {
                    ct(mt, this).track("Waiting For Quiz Answer");
                    const e = ct(lt, this) && ct(pt, this).get(ct(lt, this))?.correctAnswer ? ct(pt, this).get(ct(lt, this)).correctAnswer : Math.floor(3 * Math.random()) + 1;
                    t.send(`42${JSON.stringify(["quiz:answer", {
                        answer: e
                    }])}`)
                }
            }
            handleQuizChallenge(t) {
                let {question: e, answers: n} = t;
                e && n && (ht(lt, this, e),
                ct(pt, this).has(e) || ct(pt, this).set(e, {
                    answers: n,
                    correctAnswer: null
                }))
            }
            handleQuizReveal(t) {
                let {correctAnswer: e} = t;
                if (ct(lt, this)) {
                    const t = ct(pt, this).get(ct(lt, this));
                    t && ct(pt, this).set(ct(lt, this), {
                        ...t,
                        correctAnswer: e
                    })
                }
            }
            toggle() {
                ht(ut, this, !ct(ut, this)),
                    ct(mt, this).track("Auto Quiz Toggle")
            }
        }
        function wt(t, e, n) {
            (function(t, e) {
                    if (e.has(t))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }
            )(t, e),
                e.set(t, n)
        }
        function gt(t, e) {
            return t.get(vt(t, e))
        }
        function bt(t, e, n) {
            return t.set(vt(t, e), n),
                n
        }
        function vt(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        var yt = new WeakMap
            , xt = new WeakMap
            , kt = new WeakMap
            , St = new WeakMap
            , Mt = new WeakMap;
        class Wt {
            constructor() {
                wt(this, yt, !0),
                    wt(this, xt, void 0),
                    wt(this, kt, /curatedcontentitemtemplates\/v2\/item-templates\//),
                    wt(this, St, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
                    wt(this, Mt, void 0),
                    bt(xt, this, f.getInstance()),
                    bt(Mt, this, window.fetch),
                    this.initialize(),
                    this.setupShortcut()
            }
            initialize() {
                var t = this;
                window.fetch = async function() {
                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                        n[i] = arguments[i];
                    const o = n[0];
                    return gt(yt, t) && gt(kt, t).test(o) ? (gt(xt, t).track("ItemLayeringService Called"),
                        t.handleFetch(gt(Mt, t), ...n)) : gt(Mt, t).apply(window, n)
                }
            }
            async handleFetch(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                try {
                    const e = await t.apply(window, n)
                        , i = await e.clone().json();
                    return this.processData(i),
                        new Response(JSON.stringify(i),{
                            status: 200,
                            statusText: "OK",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                } catch (e) {
                    return t.apply(window, n)
                }
            }
            processData(t) {
                t.forEach((t => {
                        t.tags?.forEach((t => {
                                t.resourceIdentifiers?.forEach((t => t.key = null))
                            }
                        )),
                        t.additionalData?.MSP2Data && (t.additionalData.MSP2Data.Type = null)
                    }
                ))
            }
            generateRandomString() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                return Array.from({
                    length: t
                }, ( () => gt(St, this)[~~(Math.random() * gt(St, this).length)])).join("")
            }
            setupShortcut() {
                window.addEventListener("keydown", (t => {
                        t.shiftKey && /^[aA]$/.test(t.key) && this.toggle()
                    }
                ))
            }
            toggle() {
                bt(yt, this, !gt(yt, this)),
                    gt(xt, this).track("ItemLayeringService " + (gt(yt, this) ? "enabled" : "disabled"))
            }
            restore() {
                bt(yt, this, !1),
                    window.fetch = gt(Mt, this)
            }
        }
        function Tt(t, e, n) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t)
                        return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        function jt(t, e, n) {
            (function(t, e) {
                    if (e.has(t))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }
            )(t, e),
                e.set(t, n)
        }
        function zt(t, e, n) {
            return t.set(Et(t, e), n),
                n
        }
        function _t(t, e) {
            return t.get(Et(t, e))
        }
        function Et(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        var $t = new WeakMap
            , Pt = new WeakMap
            , Ct = new WeakMap
            , Ot = new WeakMap
            , At = new WeakMap
            , It = new WeakMap
            , Nt = new WeakMap
            , Ut = new WeakMap
            , Jt = new WeakMap
            , Dt = new WeakMap
            , qt = new WeakMap
            , Rt = new WeakMap;
        class Bt {
            constructor() {
                var t = this;
                jt(this, $t, !0),
                    jt(this, Pt, {
                        d: !1
                    }),
                    jt(this, Ct, f.getInstance()),
                    jt(this, Ot, window.fetch),
                    jt(this, At, null),
                    jt(this, It, {
                        b: "https://api.msp2cheats.eu/purchase",
                        x: "https://api.xerus.lol/listings"
                    }),
                    jt(this, Nt, ( () => _t(qt, this).call(this))),
                    jt(this, Ut, (t => {
                            if (!_t($t, this) || "string" != typeof t)
                                return !1;
                            if (t.includes("/profileinventory/v1/profiles/") && t.includes("/games/j68d/inventory/items"))
                                return !0;
                            if (t === _t(It, this).b)
                                return !0;
                            const e = /(?:eu|us)\.mspapis\.com\/shop(?:inventory|purchase)\/v1\/(?:shops|games\/j68d\/profiles)/.test(t)
                                , n = /\/(shops\/(?:6|13)\/tags)/.test(t);
                            return e && !n
                        }
                    )),
                    jt(this, Jt, ( () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                            const e = 16 * Math.random() | 0;
                            return ("x" === t ? e : 3 & e | 8).toString(16)
                        }
                    )))),
                    jt(this, Dt, (t => {
                            if (!_t($t, this))
                                return t;
                            try {
                                const e = new URL(t);
                                if (e.pathname.includes("/items/purchase") || e.pathname.includes("/shop/purchase"))
                                    return _t(It, this).b;
                                if (_t(Pt, this).d && e.pathname.includes("/shopinventory")) {
                                    const t = new URLSearchParams(e.search)
                                        , n = new URL(_t(It, this).x);
                                    return [...t].filter((t => {
                                            let[e] = t;
                                            return !/auth/i.test(e)
                                        }
                                    )).forEach((t => {
                                            let[e,i] = t;
                                            return n.searchParams.append(e, i)
                                        }
                                    )),
                                        n.toString()
                                }
                                return t
                            } catch {
                                return t
                            }
                        }
                    )),
                    jt(this, qt, ( () => {
                            window.fetch = async function() {
                                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                                    n[i] = arguments[i];
                                const [o,r] = n;
                                if (!_t(Ut, t).call(t, o))
                                    return _t(Ot, t).apply(window, n);
                                const s = _t(Dt, t).call(t, o);
                                return s === _t(It, t).b ? _t(Rt, t).call(t, s, r ?? {}) : _t(Ot, t).call(t, s, r ?? {})
                            }
                        }
                    )),
                    jt(this, Rt, (async (t, e) => {
                            if (!_t($t, this))
                                return _t(Ot, this).call(this, t, e);
                            try {
                                const n = await _t(Ot, this).call(this, t, e)
                                    , o = await n.json()
                                    , r = "purchaseList"
                                    , s = JSON.parse(localStorage.getItem(r) || "[]");
                                s.push(...o),
                                    localStorage.setItem(r, JSON.stringify(s.slice(-100)));
                                const a = i.getUserData(window.msp2Client?.getToken());
                                return a && _t(Ct, this).track("Bought items from shop", a),
                                    new Response(JSON.stringify(o),{
                                        status: 200,
                                        statusText: "OK",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })
                            } catch (n) {
                                return _t(Ot, this).call(this, t, e)
                            }
                        }
                    )),
                    Tt(this, "setEnabled", (t => {
                            let {diamondPacks: e} = t;
                            zt(Pt, this, {
                                d: e
                            }),
                                zt($t, this, !0)
                        }
                    )),
                    Tt(this, "toggle", ( () => {
                            zt($t, this, !_t($t, this)),
                            _t($t, this) && _t(At, this) && _t(At, this).restore()
                        }
                    )),
                    Tt(this, "restore", ( () => {
                            zt($t, this, !1),
                                window.fetch = _t(Ot, this)
                        }
                    )),
                    _t(Nt, this).call(this)
            }
            setDiamondShopService(t) {
                zt(At, this, t)
            }
        }
        function Ft(t, e, n) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != typeof t || !t)
                        return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof e ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        function Gt(t, e, n) {
            (function(t, e) {
                    if (e.has(t))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }
            )(t, e),
                e.set(t, n)
        }
        function Lt(t, e) {
            return t.get(Ht(t, e))
        }
        function Qt(t, e, n) {
            e || (e = []);
            var i = e.length++;
            return Object.defineProperty({}, "t", {
                set: function(o) {
                    e[i] = o,
                        t.apply(n, e)
                }
            })
        }
        function Yt(t, e, n) {
            return t.set(Ht(t, e), n),
                n
        }
        function Ht(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        var Kt = new WeakMap
            , Vt = new WeakMap
            , Xt = new WeakMap
            , Zt = new WeakMap
            , te = new WeakMap
            , ee = new WeakMap
            , ne = new WeakMap
            , ie = new WeakMap;
        class oe {
            constructor() {
                var t = this;
                Gt(this, Kt, !0),
                    Gt(this, Vt, void 0),
                    Gt(this, Xt, void 0),
                    Gt(this, Zt, void 0),
                    Gt(this, te, "­"),
                    Gt(this, ee, ( () => {
                            Lt(ne, this).call(this),
                                Lt(ie, this).call(this)
                        }
                    )),
                    Gt(this, ne, ( () => {
                            window.fetch = async (t, e) => {
                                if (!Lt(Kt, this))
                                    return Lt(Xt, this).call(window, t, e);
                                if (t.includes("/history") && e?.body) {
                                    const t = e.headers?.["Content-Type"] ?? e.headers?.get?.("Content-Type");
                                    if (t?.includes("application/json"))
                                        try {
                                            const t = "string" == typeof e.body ? e.body : await (e.body.text?.())
                                                , n = JSON.parse(t);
                                            n.MessageBody && (Lt(Vt, this).track("Bypassed chat filtering", i.getUserData(window.msp2Client.getToken())),
                                                n.MessageBody = n.MessageBody.split("").join(Lt(te, this)),
                                                e.body = JSON.stringify(n))
                                        } catch (t) {}
                                }
                                return Lt(Xt, this).call(window, t, e)
                            }
                        }
                    )),
                    Gt(this, ie, ( () => {
                            window.WebSocket = function() {
                                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                                    n[o] = arguments[o];
                                const r = new (Lt(Zt, t))(...n)
                                    , s = r.send;
                                return r.send = e => {
                                    if (!Lt(Kt, t))
                                        return s.call(r, e);
                                    try {
                                        if ("string" == typeof e && e.startsWith("42[")) {
                                            const n = JSON.parse(e.slice(2));
                                            Array.isArray(n) && "chatv2:send" === n[0] && n[1]?.message && (n[1].message = n[1].message.split("").join(Lt(te, t)),
                                                e = "42" + JSON.stringify(n),
                                                Lt(Vt, t).track("Bypassed chat filtering in chatroom", i.getUserData(window.msp2Client.getToken())))
                                        }
                                    } catch (t) {}
                                    s.call(r, e)
                                }
                                    ,
                                    r
                            }
                                ,
                                Object.assign(window.WebSocket, Lt(Zt, this))
                        }
                    )),
                    Ft(this, "toggle", ( () => {
                            Yt(Kt, this, !Lt(Kt, this))
                        }
                    )),
                    Ft(this, "restore", ( () => {
                            Yt(Kt, this, !1),
                                window.fetch = Lt(Xt, this),
                                window.WebSocket = Lt(Zt, this)
                        }
                    )),
                    Yt(Vt, this, f.getInstance()),
                    [Qt(Yt, [Xt, this]).t,Qt(Yt, [Zt, this]).t] = [window.fetch, window.WebSocket],
                    Lt(ee, this).call(this)
            }
        }
        function re(t, e, n) {
            (function(t, e) {
                    if (e.has(t))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }
            )(t, e),
                e.set(t, n)
        }
        function se(t, e) {
            return t.get(ce(t, e))
        }
        function ae(t, e, n) {
            return t.set(ce(t, e), n),
                n
        }
        function ce(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        var he = new WeakMap
            , de = new WeakMap
            , ue = new WeakMap
            , pe = new WeakMap;
        class le {
            constructor() {
                if (re(this, he, !0),
                    re(this, de, localStorage.getItem("selectedEmote") || "shimm_2024_fireworkswalk_lsz"),
                    re(this, ue, void 0),
                    re(this, pe, new Set(["noshoes_skating", "swim_new", "bunny_hold", "2023_spidercrawl_lsz", "bad_2022_teenwalk_dg", "xmas_2022_frosty_dg", "xmas_2022_freezing_lsz", "2022_turkeywalk_lsz", "2022_easter_sackjump_dg", "cool_slide", "very_2022_froglike_lsz", "2023_bended_lz", "shimm_2024_fireworkswalk_lsz"])),
                    me.t)
                    return me.t;
                me.t = this,
                    ae(ue, this, window.WebSocket),
                    this.initialize()
            }
            static getInstance() {
                return me.t ?? new le
            }
            initialize() {
                this.interceptWebSocket()
            }
            getEmotes() {
                return Array.from(se(pe, this))
            }
            getCurrentEmote() {
                return se(de, this)
            }
            get isEnabled() {
                return se(he, this)
            }
            setCurrentEmote(t) {
                se(pe, this).has(t) && (ae(de, this, t),
                    localStorage.setItem("selectedEmote", t))
            }
            formatEmoteName(t) {
                return t.split("_").map((t => t.charAt(0).toUpperCase() + t.slice(1))).join(" ")
            }
            interceptWebSocket() {
                const t = this;
                window.WebSocket = function() {
                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                        n[i] = arguments[i];
                    const o = new (se(ue, t))(...n)
                        , r = o.send;
                    return o.send = function(e) {
                        if (se(he, t) && "string" == typeof e && e.startsWith('42["7001"'))
                            try {
                                const n = JSON.parse(e.slice(2));
                                Array.isArray(n) && n[1]?.mood && (n[1].mood = se(de, t),
                                    e = "42" + JSON.stringify(n))
                            } catch (t) {}
                        return r.call(this, e)
                    }
                        ,
                        o
                }
                    ,
                    Object.assign(window.WebSocket, se(ue, this))
            }
            toggle() {
                ae(he, this, !se(he, this))
            }
            restore() {
                ae(he, this, !1),
                    window.WebSocket = se(ue, this)
            }
        }
        var me = {
            t: void 0
        };
        function fe(t, e, n) {
            (function(t, e) {
                    if (e.has(t))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }
            )(t, e),
                e.set(t, n)
        }
        function we(t, e) {
            return t.get(be(t, e))
        }
        function ge(t, e, n) {
            return t.set(be(t, e), n),
                n
        }
        function be(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        var ve = new WeakMap
            , ye = new WeakMap
            , xe = new WeakMap
            , ke = new WeakMap
            , Se = new WeakMap
            , Me = new WeakMap
            , We = new WeakMap;
        class Te {
            constructor() {
                fe(this, ve, !0),
                    fe(this, ye, void 0),
                    fe(this, xe, void 0),
                    fe(this, ke, void 0),
                    fe(this, Se, void 0),
                    fe(this, Me, null),
                    fe(this, We, null),
                    ge(ye, this, f.getInstance()),
                    ge(xe, this, j.getInstance()),
                    ge(ke, this, window.WebSocket),
                    ge(Se, this, window.fetch),
                    this.initialize()
            }
            initialize() {
                this.interceptWebSocket(),
                    this.createNotificationStyles(),
                    this.setupKeyboardShortcut()
            }
            setupKeyboardShortcut() {
                window.addEventListener("keydown", (t => {
                        t.altKey && "1" === t.key && (t.preventDefault(),
                            this.handleAutogreetCommand())
                    }
                ))
            }
            setupKeyboardShortcut() {
                window.addEventListener("keydown", (t => {
                        t.altKey && "2" === t.key && (t.preventDefault(),
                            this.sendLoveit(t, e))
                    }
                ))
            }
            createNotificationStyles() {
                const t = document.createElement("style");
                t.textContent = "\n      .greet-notification {\n        position: fixed;\n        top: -100px;\n        left: 50%;\n        transform: translateX(-50%);\n        background: rgba(17, 17, 27, 0.95);\n        color: #fff;\n        padding: 12px 24px;\n        border-radius: 12px;\n        font-family: 'Inter', system-ui, -apple-system, sans-serif;\n        font-size: 14px;\n        z-index: 10000;\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n        border: 1px solid rgba(255, 255, 255, 0.1);\n        transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n      }\n      .greet-notification.show {\n        top: 20px;\n      }\n    ",
                    document.head.appendChild(t)
            }
            showNotification(t) {
                let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const n = document.createElement("div");
                n.className = "greet-notification",
                    n.innerHTML = `${e ? "✅" : "❌"} ${t}`,
                    document.body.appendChild(n),
                    setTimeout(( () => n.classList.add("show")), 100),
                    setTimeout(( () => {
                            n.classList.remove("show"),
                                setTimeout(( () => n.remove()), 300)
                        }
                    ), 3e3)
            }
            interceptWebSocket() {
                const t = window.WebSocket
                    , e = this;
                window.WebSocket = function() {
                    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                        i[o] = arguments[o];
                    const r = new t(...i);
                    r.addEventListener("message", (t => {
                            we(ve, e) && e.handleMessage(r, t.data)
                        }
                    ));
                    const s = r.send;
                    return r.send = function(t) {
                        return we(ve, e) && "string" == typeof t && ('42["chatv2:send",{"message":"autogreet"}]' === t || '42["chatv2:send",{"message":"a​u​t​o​g​r​e​e​t"}]' === t || t.includes('"message":"autogreet"') || t.includes('"message":"a​u​t​o​g​r​e​e​t"')) && e.handleAutogreetCommand(),
                            s.apply(this, arguments)
                    }
                        ,
                        r
                }
                    ,
                    Object.assign(window.WebSocket, t)
            }
            async handleAutogreetCommand() {
                const t = await this.promptUsername();
                if (!t)
                    return;
                const e = i.getToken();
                if (!e)
                    return void this.showNotification("Not logged in", !1);
                const n = i.getUserData(e);
                if (!n?.name)
                    return void this.showNotification("Could not get user data", !1);
                const o = n.name.split("|")[0]
                    , r = await this.findProfileId(t, o);
                r ? (ge(Me, this, r),
                    this.startGreeting()) : this.showNotification(`Could not find user ${t}`, !1)
            }
            handleMessage(t, e) {
                !e.startsWith('40{"jwt":"') && e.match(/^\d+$/)
            }
            promptUsername() {
                return new Promise((t => {
                        const e = prompt("Enter username to auto-greet:");
                        t(e?.trim() || null)
                    }
                ))
            }
            async findProfileId(t, e) {
                try {
                    const n = await fetch("https://eu.mspapis.com/edgerelationships/graphql/graphql", {
                        method: "POST",
                        headers: we(xe, this).getHeaders(i.getToken()),
                        body: JSON.stringify({
                            query: "query GetProfileSearch($region: String!, $startsWith: String!, $pageSize: Int, $currentPage: Int, $preferredGameId: String!) { findProfiles(region: $region, nameBeginsWith: $startsWith, pageSize: $pageSize, page: $currentPage) { totalCount nodes { id avatar(preferredGameId: $preferredGameId) { gameId face full } } } }",
                            variables: JSON.stringify({
                                region: e,
                                startsWith: t,
                                pageSize: 50,
                                currentPage: 1,
                                preferredGameId: "j68d"
                            })
                        })
                    })
                        , o = await n.json();
                    return o?.data?.findProfiles?.nodes?.[0]?.id || null
                } catch (t) {
                    return null
                }
            }
            async sendGreeting() {
                if (we(Me, this))
                    try {
                        const t = await fetch("https://eu.mspapis.com/federationgateway/graphql", {
                            method: "POST",
                            headers: we(xe, this).getHeaders(i.getToken()),
                            body: JSON.stringify({
                                id: "SendGreetings-159BDD7706D824BB8F14874A7FAE3368",
                                variables: {
                                    greetingType: "Autograph",
                                    receiverProfileId: we(Me, this),
                                    ignoreDailyCap: !0
                                }
                            })
                        })
                            , e = await t.json()
                            , n = e?.data?.greetings?.sendGreeting?.success;
                        if (!n)
                            return we(ye, this).track("sent-greeting-failed"),
                                void this.showNotification("Failed to send greeting", !1);
                        we(ye, this).track("sent-greeting"),
                            this.showNotification("Greeting sent successfully!", !0)
                    } catch (t) {
                        we(ye, this).track("sent-greeting-failed"),
                            this.showNotification("Error sending greeting", !1)
                    }
            }
            startGreeting() {
                we(We, this) && clearInterval(we(We, this)),
                    this.sendGreeting(),
                    ge(We, this, setInterval(( () => this.sendGreeting()), 123e3))
            }
            stopGreeting() {
                we(We, this) && (clearInterval(we(We, this)),
                    ge(We, this, null)),
                    ge(Me, this, null)
            }
            toggle() {
                ge(ve, this, !we(ve, this)),
                we(ve, this) || this.stopGreeting(),
                    we(ye, this).track("Greetings Service " + (we(ve, this) ? "Enabled" : "Disabled"))
            }
            restore() {
                this.stopGreeting(),
                    window.WebSocket = we(ke, this),
                    window.fetch = we(Se, this)
            }
        }
        function je(t, e, n) {
            ze(t, e),
                e.set(t, n)
        }
        function ze(t, e) {
            if (e.has(t))
                throw new TypeError("Cannot initialize the same private elements twice on an object")
        }
        function _e(t, e) {
            return t.get($e(t, e))
        }
        function Ee(t, e, n) {
            return t.set($e(t, e), n),
                n
        }
        function $e(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        var Pe = new WeakMap
            , Ce = new WeakMap
            , Oe = new WeakMap
            , Ae = new WeakMap
            , Ie = new WeakMap
            , Ne = new WeakSet;
        class Ue {
            constructor() {
                var t;
                ze(this, t = Ne),
                    t.add(this),
                    je(this, Pe, !0),
                    je(this, Ce, void 0),
                    je(this, Oe, void 0),
                    je(this, Ae, void 0),
                    je(this, Ie, /^https:\/\/[^/]+\/profilegeneratedcontent\/v2\/profiles\/[^/]+\/games\/j68d\/content$/),
                    Ee(Ce, this, f.getInstance()),
                    Ee(Oe, this, j.getInstance()),
                    Ee(Ae, this, window.fetch),
                    this.initialize()
            }
            initialize() {
                var t = this;
                window.fetch = async function() {
                    for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                        n[o] = arguments[o];
                    const [r,s] = n;
                    if (!_e(Pe, t) || "string" != typeof r || !_e(Ie, t).test(r))
                        return _e(Ae, t).apply(window, n);
                    try {
                        const e = "string" == typeof s?.body ? s.body : await (s?.body?.text?.());
                        if (e?.includes("WAYD")) {
                            const e = i.getToken();
                            if (!e)
                                return _e(Ae, t).apply(window, n);
                            const o = i.getUserData(e)?.profileId;
                            if (!o)
                                return _e(Ae, t).apply(window, n);
                            const a = await $e(Ne, t, De).call(t, o, e);
                            if (!a)
                                return _e(Ae, t).apply(window, n);
                            _e(Ce, t).track("UGC WAYD Request Modified");
                            const c = `https://${$e(Ne, t, Je).call(t, e)}${new URL(r).pathname}/${a}`;
                            return _e(Ae, t).call(window, c, {
                                ...s,
                                method: "PUT"
                            })
                        }
                    } catch (t) {}
                    return _e(Ae, t).apply(window, n)
                }
            }
            toggle() {
                Ee(Pe, this, !_e(Pe, this))
            }
            restore() {
                Ee(Pe, this, !1),
                    window.fetch = _e(Ae, this)
            }
        }
        function Je(t) {
            if (!t)
                return "eu.mspapis.com";
            const e = i.getUserData(t);
            return "US" === e?.name?.split("|")[0] ? "us.mspapis.com" : "eu.mspapis.com"
        }
        async function De(t, e) {
            if (!_e(Pe, this))
                return null;
            try {
                const n = $e(Ne, this, Je).call(this, e)
                    , i = await _e(Ae, this).call(this, `https://${n}/profileattributes/v1/profiles/${t}/games/j68d/attributes`, {
                    headers: _e(Oe, this).getHeaders(e)
                })
                    , o = await i.json();
                return o?.additionalData?.WAYD || null
            } catch (t) {
                return null
            }
        }
        function qe(t, e, n) {
            Re(t, e),
                e.set(t, n)
        }
        function Re(t, e) {
            if (e.has(t))
                throw new TypeError("Cannot initialize the same private elements twice on an object")
        }
        function Be(t, e) {
            return t.get(Ge(t, e))
        }
        function Fe(t, e, n) {
            return t.set(Ge(t, e), n),
                n
        }
        function Ge(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        var Le = new WeakMap
            , Qe = new WeakMap
            , Ye = new WeakMap
            , He = new WeakMap
            , Ke = new WeakMap
            , Ve = new WeakMap
            , Xe = new WeakMap
            , Ze = new WeakMap
            , tn = new WeakMap
            , en = new WeakMap
            , nn = new WeakMap
            , on = new WeakMap
            , rn = new WeakMap
            , sn = new WeakMap
            , an = new WeakMap
            , cn = new WeakMap
            , hn = new WeakSet;
        class dn {
            constructor() {
                var t;
                if (Re(this, t = hn),
                    t.add(this),
                    qe(this, Le, void 0),
                    qe(this, Qe, void 0),
                    qe(this, Ye, new Map),
                    qe(this, He, !0),
                    qe(this, Ke, !1),
                    qe(this, Ve, "services"),
                    qe(this, Xe, JSON.parse(localStorage.getItem("modMenuPosition") || '{"x": 20, "y": 20}')),
                    qe(this, Ze, null),
                    qe(this, tn, null),
                    qe(this, en, void 0),
                    qe(this, nn, !1),
                    qe(this, on, new Set),
                    qe(this, rn, "hattys_home"),
                    qe(this, sn, !1),
                    qe(this, an, [{
                        id: "Superstar_Diamond",
                        name: "Superstar Diamond"
                    }, {
                        id: "PlayedBeta",
                        name: "Played Beta"
                    }, {
                        id: "Xmas2024_Gingerbread",
                        name: "Christmas 2024 Gingerbread"
                    }]),
                    qe(this, cn, [{
                        id: "hattys_home",
                        name: "Hatty's Home"
                    }, {
                        id: "fallback_room",
                        name: "Fallback Room"
                    }, {
                        id: "myhome_bling_vip",
                        name: "Bling VIP"
                    }, {
                        id: "myhome_tiny",
                        name: "Tiny Home"
                    }, {
                        id: "easter_22_vip",
                        name: "Easter 2022 VIP"
                    }, {
                        id: "easter_24_questforest_enchanted",
                        name: "Enchanted Forest 2024"
                    }, {
                        id: "island_quest_words",
                        name: "Island Quest Words"
                    }, {
                        id: "island_quest_party_day_night",
                        name: "Island Party Day/Night"
                    }, {
                        id: "forest",
                        name: "Forest"
                    }, {
                        id: "myhome_basic_2floor",
                        name: "Basic 2 Floor"
                    }, {
                        id: "halloween_21_forest",
                        name: "Halloween 2021 Forest"
                    }, {
                        id: "under_the_deep",
                        name: "Under The Deep"
                    }, {
                        id: "halloween_21_vip_club",
                        name: "Halloween 2021 VIP Club"
                    }, {
                        id: "under_the_sea",
                        name: "Under The Sea"
                    }]),
                    gn.t)
                    return gn.t;
                gn.t = this,
                    Fe(Le, this, f.getInstance()),
                    Fe(en, this, j.getInstance()),
                    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", ( () => this.initialize())) : this.initialize()
            }
            static getInstance() {
                return gn.t ?? new dn
            }
            fixBase64Padding(t) {
                for (; t.length % 4 != 0; )
                    t += "=";
                return t
            }
            registerService(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                    , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                return "Emote Service" === t ? (Fe(Ze, this, e),
                    void this.updateMenu()) : "Loveits Service" === t ? (Fe(tn, this, e),
                    e.setMenuUpdateCallback(( () => this.updateMenu())),
                    void this.updateMenu()) : (Be(Ye, this).set(t, {
                    service: e,
                    enabled: !0,
                    description: n,
                    shortcut: i
                }),
                    void this.updateMenu())
            }
            createCustomProfileImageSection() {
                const t = document.createElement("div");
                t.className = "emote-section";
                const e = document.createElement("div");
                e.className = "emote-header";
                const n = document.createElement("div");
                n.className = "emote-title",
                    n.textContent = "Custom Profile Image";
                const i = document.createElement("div");
                i.className = "emote-status " + (Be(nn, this) ? "inactive" : "active"),
                    i.textContent = Be(nn, this) ? "Uploading..." : "Ready",
                    e.appendChild(n),
                    e.appendChild(i);
                const o = document.createElement("div");
                o.className = "emote-controls";
                const r = document.createElement("div");
                r.className = "drop-zone",
                    r.innerHTML = '\n            <div class="drop-zone-text">\n                Drop PNG image here<br>or click to select\n            </div>\n            <input type="file" accept=".png" style="display: none">\n        ',
                    Object.assign(r.style, {
                        border: "2px dashed rgba(137, 180, 250, 0.3)",
                        borderRadius: "8px",
                        padding: "20px",
                        textAlign: "center",
                        cursor: "pointer",
                        backgroundColor: "transparent",
                        transition: "all 0.2s ease"
                    }),
                    r.addEventListener("click", ( () => {
                            Be(nn, this) || r.querySelector("input").click()
                        }
                    )),
                    r.addEventListener("dragover", (t => {
                            t.preventDefault(),
                            Be(nn, this) || (r.style.borderColor = "rgba(137, 180, 250, 0.8)",
                                r.style.backgroundColor = "rgba(49, 50, 68, 0.3)")
                        }
                    )),
                    r.addEventListener("dragleave", ( () => {
                            r.style.borderColor = "rgba(137, 180, 250, 0.3)",
                                r.style.backgroundColor = "transparent"
                        }
                    )),
                    r.addEventListener("drop", (t => {
                            if (t.preventDefault(),
                                !Be(nn, this)) {
                                const e = t.dataTransfer.files[0];
                                e && "image/png" === e.type ? Ge(hn, this, mn).call(this, e) : this.showNotification("Please upload a PNG image", !1)
                            }
                            r.style.borderColor = "rgba(137, 180, 250, 0.3)",
                                r.style.backgroundColor = "transparent"
                        }
                    ));
                const s = r.querySelector("input");
                return s.addEventListener("change", ( () => {
                        !Be(nn, this) && s.files[0] && Ge(hn, this, mn).call(this, s.files[0])
                    }
                )),
                    o.appendChild(r),
                    t.appendChild(e),
                    t.appendChild(o),
                    t
            }
            centerMenu() {
                const t = window.innerWidth
                    , e = window.innerHeight
                    , n = Be(Qe, this).offsetWidth
                    , i = Be(Qe, this).offsetHeight;
                Be(Xe, this).x = (t - n) / 2,
                    Be(Xe, this).y = (e - i) / 2,
                    Be(Qe, this).style.left = `${Be(Xe, this).x}px`,
                    Be(Qe, this).style.top = `${Be(Xe, this).y}px`,
                    localStorage.setItem("modMenuPosition", JSON.stringify(Be(Xe, this)))
            }
            initialize() {
                this.createStyles(),
                    this.createMenu(),
                    this.setupKeyboardShortcut()
            }
            setupKeyboardShortcut() {
                document.addEventListener("keydown", (t => {
                        t.altKey && "m" === t.key && (t.preventDefault(),
                            this.toggleVisibility())
                    }
                ))
            }
            toggleMinimize() {
                Fe(Ke, this, !Be(Ke, this)),
                    Be(Qe, this).classList.toggle("minimized", Be(Ke, this)),
                    Be(Qe, this).querySelector(".mod-menu-button").innerHTML = Be(Ke, this) ? "+" : "−",
                    Be(Le, this).track("Mod Menu Minimized", {
                        minimized: Be(Ke, this)
                    })
            }
            toggleVisibility() {
                Fe(He, this, !Be(He, this)),
                    Be(Qe, this).classList.toggle("hidden", !Be(He, this)),
                    Be(Le, this).track("Mod Menu Toggled", {
                        visible: Be(He, this)
                    })
            }
            createTabButton(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = document.createElement("button");
                return n.className = "mod-menu-tab " + (e ? "active" : ""),
                    n.textContent = t,
                    n.onclick = () => {
                        Fe(Ve, this, t.toLowerCase()),
                            this.updateMenu(),
                            Be(Le, this).track("Tab Changed", {
                                tab: t
                            })
                    }
                    ,
                    n
            }
            createStyles() {
                const t = document.createElement("style");
                t.textContent = "\n            .mod-menu {\n                position: fixed;\n                background: rgba(17, 17, 27, 0.95);\n                border-radius: 12px;\n                padding: 12px;\n                font-family: 'Inter', system-ui, -apple-system, sans-serif;\n                color: #cdd6f4;\n                width: 300px;\n                backdrop-filter: blur(10px);\n                border: 1px solid rgba(255, 255, 255, 0.1);\n                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n                z-index: 999999;\n                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n                max-height: 90vh;\n                overflow: hidden;\n                scrollbar-width: thin;\n                scrollbar-color: rgba(205, 214, 244, 0.2) transparent;\n                zoom: 80%;\n            }\n\n            .mod-menu.minimized {\n                max-height: 42px;\n            }\n\n            .mod-menu.minimized .mod-menu-content {\n                opacity: 0;\n                transform: translateY(-10px);\n                pointer-events: none;\n            }\n\n            .mod-menu-content {\n                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n                opacity: 1;\n                transform: translateY(0);\n                overflow-y: auto;\n                max-height: calc(90vh - 42px);\n            }\n\n            .mod-menu::-webkit-scrollbar {\n                width: 4px;\n            }\n\n            .mod-menu::-webkit-scrollbar-track {\n                background: transparent;\n            }\n\n            .mod-menu::-webkit-scrollbar-thumb {\n                background-color: rgba(205, 214, 244, 0.2);\n                border-radius: 2px;\n            }\n\n            .mod-menu-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 12px;\n                padding-bottom: 8px;\n                border-bottom: 1px solid rgba(205, 214, 244, 0.1);\n                cursor: move;\n                user-select: none;\n                height: 22px;\n            }\n\n            .mod-menu.minimized .mod-menu-header {\n                margin-bottom: 0;\n                padding-bottom: 0;\n                border-bottom: none;\n            }\n\n            .mod-menu-title {\n                font-size: 16px;\n                font-weight: 600;\n                background: linear-gradient(135deg, #cdd6f4 0%, #89b4fa 100%);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n                letter-spacing: -0.3px;\n            }\n\n            .mod-menu-controls {\n                display: flex;\n                gap: 6px;\n            }\n\n            .mod-menu-button {\n                background: rgba(69, 71, 90, 0.5);\n                border: none;\n                color: #cdd6f4;\n                width: 24px;\n                height: 24px;\n                border-radius: 6px;\n                cursor: pointer;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                font-size: 16px;\n                transition: all 0.2s ease;\n            }\n\n            .mod-menu-button:hover {\n                background: rgba(88, 91, 112, 0.7);\n                transform: scale(1.05);\n            }\n\n            .mod-menu-tabs {\n                display: flex;\n                gap: 4px;\n                margin-bottom: 12px;\n                padding: 2px;\n                background: rgba(49, 50, 68, 0.3);\n                border-radius: 6px;\n            }\n\n            .mod-menu-tab {\n                flex: 1;\n                padding: 6px;\n                border: none;\n                background: none;\n                color: #cdd6f4;\n                border-radius: 4px;\n                cursor: pointer;\n                font-size: 12px;\n                transition: all 0.2s ease;\n                text-align: center;\n                text-transform: uppercase;\n                letter-spacing: 0.5px;\n                font-weight: 500;\n            }\n\n            .mod-menu-tab:hover {\n                background: rgba(88, 91, 112, 0.3);\n            }\n\n            .mod-menu-tab.active {\n                background: rgba(137, 180, 250, 0.2);\n                color: #89b4fa;\n            }\n\n            .mod-menu-service {\n                background: rgba(49, 50, 68, 0.3);\n                border-radius: 8px;\n                padding: 10px;\n                margin-bottom: 8px;\n                transition: all 0.2s ease;\n            }\n\n            .mod-menu-service:hover {\n                background: rgba(49, 50, 68, 0.5);\n            }\n\n            .service-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 4px;\n            }\n\n            .service-name {\n                font-weight: 500;\n                font-size: 14px;\n                color: #cdd6f4;\n            }\n\n            .service-shortcut {\n                font-size: 11px;\n                color: #6c7086;\n                background: rgba(108, 112, 134, 0.2);\n                padding: 2px 6px;\n                border-radius: 4px;\n            }\n\n            .service-description {\n                font-size: 12px;\n                color: #a6adc8;\n                margin-bottom: 6px;\n                line-height: 1.3;\n            }\n\n            .service-toggle {\n                position: relative;\n                display: inline-block;\n                width: 36px;\n                height: 20px;\n            }\n\n            .service-toggle input {\n                opacity: 0;\n                width: 0;\n                height: 0;\n            }\n\n            .service-toggle-slider {\n                position: absolute;\n                cursor: pointer;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(127, 132, 156, 0.4);\n                transition: .3s;\n                border-radius: 34px;\n            }\n\n            .service-toggle-slider:before {\n                position: absolute;\n                content: \"\";\n                height: 16px;\n                width: 16px;\n                left: 2px;\n                bottom: 2px;\n                background-color: #cdd6f4;\n                transition: .3s;\n                border-radius: 50%;\n            }\n\n            .service-toggle input:checked + .service-toggle-slider {\n                background-color: #89b4fa;\n            }\n\n            .service-toggle input:checked + .service-toggle-slider:before {\n                transform: translateX(16px);\n            }\n\n            .emote-section {\n                background: transparent;\n                border-radius: 12px;\n                padding: 16px;\n                margin-bottom: 16px;\n                border: 1px solid rgba(137, 180, 250, 0.15);\n                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            }\n\n            .emote-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 16px;\n                padding-bottom: 12px;\n                border-bottom: 1px solid rgba(137, 180, 250, 0.15);\n            }\n\n            .emote-title {\n                font-size: 14px;\n                font-weight: 600;\n                color: #cdd6f4;\n                letter-spacing: 0.5px;\n                text-transform: uppercase;\n                background: linear-gradient(135deg, #cdd6f4 0%, #89b4fa 100%);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n            }\n\n            .emote-status {\n                font-size: 12px;\n                padding: 4px 8px;\n                border-radius: 6px;\n                font-weight: 500;\n                letter-spacing: 0.5px;\n                transition: all 0.3s ease;\n            }\n\n            .emote-status.active {\n                background: rgba(166, 227, 161, 0.2);\n                color: #a6e3a1;\n                border: 1px solid rgba(166, 227, 161, 0.3);\n            }\n\n            .emote-status.inactive {\n                background: rgba(243, 139, 168, 0.2);\n                color: #f38ba8;\n                border: 1px solid rgba(243, 139, 168, 0.3);\n            }\n\n            .emote-controls {\n                display: flex;\n                flex-direction: column;\n                gap: 12px;\n            }\n\n            .emote-select {\n                background: rgba(49, 50, 68, 0.6);\n                border: 1px solid rgba(137, 180, 250, 0.3);\n                border-radius: 8px;\n                color: #cdd6f4;\n                font-size: 13px;\n                padding: 10px 32px 10px 12px;\n                appearance: none;\n                cursor: pointer;\n                transition: all 0.2s ease;\n                width: 100%;\n                background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(205, 214, 244, 0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n                background-repeat: no-repeat;\n                background-position: right 8px center;\n                background-size: 16px;\n            }\n\n            .emote-select:hover {\n                border-color: rgba(137, 180, 250, 0.5);\n                background-color: rgba(49, 50, 68, 0.8);\n            }\n\n            .emote-select:focus {\n                outline: none;\n                border-color: #89b4fa;\n                box-shadow: 0 0 0 2px rgba(137, 180, 250, 0.2);\n            }\n\n            .emote-toggle {\n                padding: 10px;\n                background: rgba(137, 180, 250, 0.2);\n                border: 1px solid rgba(137, 180, 250, 0.3);\n                border-radius: 8px;\n                color: #cdd6f4;\n                font-size: 13px;\n                font-weight: 500;\n                cursor: pointer;\n                transition: all 0.2s ease;\n                text-align: center;\n                text-transform: uppercase;\n                letter-spacing: 0.5px;\n            }\n\n            .emote-toggle:hover {\n                background: rgba(137, 180, 250, 0.3);\n                border-color: rgba(137, 180, 250, 0.4);\n                transform: translateY(-1px);\n            }\n\n            .emote-toggle:active {\n                transform: translateY(0);\n            }\n\n            .emote-toggle:disabled {\n                background: rgba(108, 112, 134, 0.2);\n                border-color: rgba(108, 112, 134, 0.3);\n                color: #6c7086;\n                cursor: not-allowed;\n                transform: none;\n            }\n\n            .emote-preview {\n                margin-top: 12px;\n                padding: 12px;\n                background: rgba(49, 50, 68, 0.3);\n                border-radius: 8px;\n                font-size: 12px;\n                color: #a6adc8;\n                text-align: center;\n                border: 1px dashed rgba(137, 180, 250, 0.2);\n            }\n\n            .emote-preview span {\n                color: #89b4fa;\n                font-weight: 500;\n            }\n\n            .status-section {\n                margin-top: 16px;\n                padding: 16px;\n                background: rgba(49, 50, 68, 0.4);\n                border-radius: 8px;\n                border: 1px solid rgba(137, 180, 250, 0.1);\n            }\n\n            .status-title {\n                font-size: 14px;\n                font-weight: 600;\n                color: #cdd6f4;\n                margin-bottom: 12px;\n                letter-spacing: 0.5px;\n                text-transform: uppercase;\n            }\n\n            .status-grid {\n                display: grid;\n                grid-template-columns: repeat(2, 1fr);\n                gap: 8px;\n            }\n\n            .status-item {\n                background: rgba(49, 50, 68, 0.3);\n                padding: 8px;\n                border-radius: 6px;\n                text-align: center;\n            }\n\n            .status-value {\n                font-size: 16px;\n                font-weight: 600;\n                color: #cdd6f4;\n            }\n\n            .status-label {\n                font-size: 11px;\n                color: #a6adc8;\n                text-transform: uppercase;\n                letter-spacing: 0.5px;\n                margin-top: 2px;\n            }\n\n            .status-button {\n                width: 100%;\n                padding: 8px;\n                margin-top: 12px;\n                background: rgba(137, 180, 250, 0.2);\n                border: 1px solid rgba(137, 180, 250, 0.3);\n                border-radius: 6px;\n                color: #cdd6f4;\n                font-size: 12px;\n                font-weight: 500;\n                text-transform: uppercase;\n                letter-spacing: 0.5px;\n                cursor: pointer;\n                transition: all 0.2s ease;\n            }\n\n            .status-button:hover {\n                background: rgba(137, 180, 250, 0.3);\n            }\n\n            .status-button:disabled {\n                background: rgba(108, 112, 134, 0.2);\n                border-color: rgba(108, 112, 134, 0.3);\n                color: #6c7086;\n                cursor: not-allowed;\n            }\n\n            .discord-section {\n                margin-top: 16px;\n                padding: 16px;\n                background: transparent;\n                border-radius: 8px;\n                border: 1px solid rgba(137, 180, 250, 0.1);\n                display: flex;\n                flex-direction: column;\n                gap: 12px;\n            }\n\n            .discord-title {\n                font-size: 14px;\n                font-weight: 600;\n                color: #cdd6f4;\n                letter-spacing: 0.5px;\n                text-transform: uppercase;\n            }\n\n            .discord-button {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                width: 100%;\n                padding: 8px;\n                background: rgba(88, 101, 242, 0.3);\n                border: 1px solid rgba(88, 101, 242, 0.5);\n                border-radius: 6px;\n                color: #cdd6f4;\n                font-size: 12px;\n                font-weight: 500;\n                text-transform: uppercase;\n                letter-spacing: 0.5px;\n                text-decoration: none;\n                cursor: pointer;\n                transition: all 0.2s ease;\n                box-sizing: border-box;\n            }\n\n            .discord-button:hover {\n                background: rgba(88, 101, 242, 0.4);\n                border-color: rgba(88, 101, 242, 0.6);\n            }\n\n            .drop-zone {\n                border: 2px dashed rgba(137, 180, 250, 0.3);\n                border-radius: 8px;\n                padding: 20px;\n                text-align: center;\n                cursor: pointer;\n                background-color: transparent;\n                transition: all 0.2s ease;\n            }\n\n            .drop-zone:hover {\n                border-color: rgba(137, 180, 250, 0.8);\n                background-color: rgba(49, 50, 68, 0.3);\n            }\n\n            .drop-zone-text {\n                font-size: 14px;\n                color: #cdd6f4;\n                line-height: 1.4;\n            }\n\n            @keyframes slideIn {\n                from {\n                    opacity: 0;\n                    transform: translateY(-10px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n            }\n\n            .mod-menu.hidden {\n                opacity: 0;\n                pointer-events: none;\n                transform: scale(0.95);\n            }\n\n            .tab-content {\n                display: none;\n                animation: slideIn 0.3s ease forwards;\n            }\n\n            .tab-content.active {\n                display: block;\n            }\n\n            .center-menu-button {\n    width: 100%;\n    padding: 8px;\n    margin-top: 8px;\n    background: rgba(137, 180, 250, 0.2);\n    border: 1px solid rgba(137, 180, 250, 0.3);\n    border-radius: 6px;\n    color: #cdd6f4;\n    font-size: 12px;\n    font-weight: 500;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n}\n\n.center-menu-button:hover {\n    background: rgba(137, 180, 250, 0.3);\n    border-color: rgba(137, 180, 250, 0.4);\n}\n\n.achievements-section {\n    margin-top: 16px;\n    padding: 16px;\n    background: transparent;\n    border-radius: 8px;\n    border: 1px solid rgba(137, 180, 250, 0.1);\n}\n\n.achievements-title {\n    font-size: 14px;\n    font-weight: 600;\n    margin-bottom: 12px;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    background: linear-gradient(135deg, #cdd6f4 0%, #89b4fa 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n.achievements-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.achievement-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 12px;\n    background: rgba(49, 50, 68, 0.6);\n    border: 1px solid rgba(137, 180, 250, 0.2);\n    border-radius: 6px;\n    transition: all 0.2s ease;\n    cursor: pointer;\n}\n\n.achievement-item:hover {\n    background: rgba(49, 50, 68, 0.8);\n    border-color: rgba(137, 180, 250, 0.4);\n}\n\n.achievement-checkbox {\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border: 2px solid rgba(137, 180, 250, 0.4);\n    border-radius: 4px;\n    background: rgba(49, 50, 68, 0.6);\n    cursor: pointer;\n    position: relative;\n    transition: all 0.2s ease;\n}\n\n.achievement-checkbox:checked {\n    background: #89b4fa;\n    border-color: #89b4fa;\n}\n\n.achievement-checkbox:checked::after {\n    content: \"✓\";\n    position: absolute;\n    color: #1e1e2e;\n    font-size: 12px;\n    font-weight: bold;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.achievement-label {\n    color: #cdd6f4;\n    font-size: 13px;\n    user-select: none;\n}\n        ",
                    document.head.appendChild(t);
                const e = document.createElement("link");
                e.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
                    e.rel = "stylesheet",
                    document.head.appendChild(e)
            }
            createMenu() {
                Fe(Qe, this, document.createElement("div")),
                    Be(Qe, this).className = "mod-menu",
                    Be(Qe, this).style.left = `${Be(Xe, this).x}px`,
                    Be(Qe, this).style.top = `${Be(Xe, this).y}px`;
                const t = document.createElement("div");
                t.className = "mod-menu-header";
                const e = document.createElement("div");
                e.className = "mod-menu-title",
                    e.textContent = "Tim ist cool";
                const n = document.createElement("div");
                n.className = "mod-menu-controls";
                const i = document.createElement("button");
                i.className = "mod-menu-button",
                    i.innerHTML = Be(Ke, this) ? "+" : "−",
                    i.onclick = () => this.toggleMinimize(),
                    n.appendChild(i),
                    t.appendChild(e),
                    t.appendChild(n),
                    Be(Qe, this).appendChild(t);
                let o, r, s, a, c = !1;
                t.addEventListener("mousedown", (t => {
                        c = !0,
                            s = t.clientX - Be(Xe, this).x,
                            a = t.clientY - Be(Xe, this).y,
                            Be(Qe, this).style.transition = "none"
                    }
                )),
                    document.addEventListener("mousemove", (t => {
                            c && (t.preventDefault(),
                                o = t.clientX - s,
                                r = t.clientY - a,
                                Be(Xe, this).x = o,
                                Be(Xe, this).y = r,
                                Be(Qe, this).style.left = `${o}px`,
                                Be(Qe, this).style.top = `${r}px`,
                                localStorage.setItem("modMenuPosition", JSON.stringify(Be(Xe, this))))
                        }
                    )),
                    document.addEventListener("mouseup", ( () => {
                            c = !1,
                                Be(Qe, this).style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                        }
                    )),
                    document.body.appendChild(Be(Qe, this)),
                    this.updateMenu()
            }
            updateMenu() {
                const t = document.createElement("div");
                t.className = "mod-menu-content";
                const e = document.createElement("div");
                e.className = "mod-menu-tabs",
                    ["Services", "Soft", "Misc"].forEach((t => {
                            const n = this.createTabButton(t, Be(Ve, this) === t.toLowerCase());
                            e.appendChild(n)
                        }
                    )),
                    t.appendChild(e);
                const n = document.createElement("div");
                n.className = "tab-content " + ("services" === Be(Ve, this) ? "active" : ""),
                    Be(Ye, this).forEach(( (t, e) => {
                            const i = document.createElement("div");
                            i.className = "mod-menu-service";
                            const o = document.createElement("div");
                            o.className = "service-header";
                            const r = document.createElement("div");
                            r.style.display = "flex",
                                r.style.alignItems = "center",
                                r.style.gap = "6px";
                            const s = document.createElement("div");
                            if (s.className = "service-name",
                                s.textContent = e,
                                r.appendChild(s),
                                t.shortcut) {
                                const e = document.createElement("div");
                                e.className = "service-shortcut",
                                    e.textContent = t.shortcut,
                                    r.appendChild(e)
                            }
                            const a = document.createElement("label");
                            a.className = "service-toggle";
                            const c = document.createElement("input");
                            c.type = "checkbox",
                                c.checked = t.enabled,
                                c.onchange = () => {
                                    t.enabled = c.checked,
                                    t.service.toggle && t.service.toggle(),
                                        Be(Le, this).track("Service Toggled", {
                                            service: e,
                                            enabled: t.enabled
                                        })
                                }
                            ;
                            const h = document.createElement("span");
                            if (h.className = "service-toggle-slider",
                                a.appendChild(c),
                                a.appendChild(h),
                                o.appendChild(r),
                                o.appendChild(a),
                                i.appendChild(o),
                                t.description) {
                                const e = document.createElement("div");
                                e.className = "service-description",
                                    e.textContent = t.description,
                                    i.appendChild(e)
                            }
                            n.appendChild(i)
                        }
                    ));
                const i = document.createElement("button");
                i.className = "center-menu-button",
                    i.textContent = "Center Menu",
                    i.onclick = () => {
                        this.centerMenu(),
                            Be(Le, this).track("Menu Centered")
                    }
                    ,
                    n.appendChild(i);
                const o = document.createElement("div");
                if (o.className = "tab-content " + ("soft" === Be(Ve, this) ? "active" : ""),
                    Be(Ze, this)) {
                    const t = document.createElement("div");
                    t.className = "emote-section";
                    const e = document.createElement("div");
                    e.className = "emote-header";
                    const n = document.createElement("div");
                    n.className = "emote-title",
                        n.textContent = "Emotes";
                    const i = document.createElement("div");
                    i.className = "emote-status " + (Be(Ze, this).isEnabled ? "active" : "inactive"),
                        i.textContent = Be(Ze, this).isEnabled ? "Active" : "Inactive",
                        e.appendChild(n),
                        e.appendChild(i);
                    const r = document.createElement("div");
                    r.className = "emote-controls";
                    const s = document.createElement("select");
                    s.className = "emote-select",
                        Be(Ze, this).getEmotes().forEach((t => {
                                const e = document.createElement("option");
                                e.value = t,
                                    e.textContent = Be(Ze, this).formatEmoteName(t),
                                    e.selected = t === Be(Ze, this).getCurrentEmote(),
                                    s.appendChild(e)
                            }
                        )),
                        s.addEventListener("change", (t => {
                                Be(Ze, this).setCurrentEmote(t.target.value),
                                    Be(Le, this).track("Emote Changed", {
                                        emote: t.target.value
                                    }),
                                    this.updatePreview(t.target.value)
                            }
                        ));
                    const a = document.createElement("button");
                    a.className = "emote-toggle",
                        a.textContent = Be(Ze, this).isEnabled ? "Desactivate Emotes" : "Activate Emotes",
                        a.onclick = () => {
                            Be(Ze, this).toggle(),
                                a.textContent = Be(Ze, this).isEnabled ? "Desactivate Emotes" : "Activate Emotes",
                                i.textContent = Be(Ze, this).isEnabled ? "Active" : "Inactive",
                                i.className = "emote-status " + (Be(Ze, this).isEnabled ? "active" : "inactive"),
                                Be(Le, this).track("Emote Service Toggled")
                        }
                    ;
                    const c = document.createElement("div");
                    c.className = "emote-preview",
                        c.innerHTML = `Current Emote: <span>${Be(Ze, this).formatEmoteName(Be(Ze, this).getCurrentEmote())}</span>`,
                        r.appendChild(s),
                        r.appendChild(a),
                        r.appendChild(c),
                        t.appendChild(e),
                        t.appendChild(r),
                        o.appendChild(t)
                }
                o.appendChild(Ge(hn, this, wn).call(this)),
                    o.appendChild(this.createCustomProfileImageSection());
                const r = document.createElement("div");
                r.className = "tab-content " + ("misc" === Be(Ve, this) ? "active" : ""),
                    r.appendChild(Ge(hn, this, ln).call(this));
                const s = document.createElement("div");
                s.className = "discord-section";
                const a = document.createElement("div");
                a.className = "discord-title",
                    a.textContent = "Community";
                const c = document.createElement("a");
                for (c.href = "https://discord.gg/fametopia",
                         c.className = "discord-button",
                         c.target = "_blank",
                         c.textContent = "Join Discord Server",
                         c.onclick = () => {
                             Be(Le, this).track("Discord Link Clicked")
                         }
                         ,
                         s.appendChild(a),
                         s.appendChild(c),
                         r.appendChild(s),
                         t.appendChild(n),
                         t.appendChild(o),
                         t.appendChild(r); Be(Qe, this).children.length > 1; )
                    Be(Qe, this).removeChild(Be(Qe, this).lastChild);
                Be(Qe, this).appendChild(t)
            }
            updatePreview(t) {
                const e = Be(Qe, this).querySelector(".emote-preview");
                e && (e.innerHTML = `Current Animation: <span>${Be(Ze, this).formatEmoteName(t)}</span>`)
            }
            showNotification(t) {
                let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const n = document.createElement("div");
                n.className = "greet-notification",
                    n.innerHTML = `${e ? "✅" : "❌"} ${t}`,
                    document.body.appendChild(n),
                    setTimeout(( () => n.classList.add("show")), 100),
                    setTimeout(( () => {
                            n.classList.remove("show"),
                                setTimeout(( () => n.remove()), 300)
                        }
                    ), 3e3)
            }
        }
        function un(t) {
            if (!t)
                return "eu.mspapis.com";
            const e = i.getUserData(t)
                , n = e?.name?.split("|")[0];
            return ["US", "CA"].includes(n) ? "us.mspapis.com" : "eu.mspapis.com"
        }
        async function pn() {
            const t = i.getToken();
            if (!t)
                return void this.showNotification("Not logged in", !1);
            const e = i.getUserData(t)?.profileId;
            if (!e)
                return void this.showNotification("Profile ID not found", !1);
            if (0 === Be(on, this).size)
                return void this.showNotification("Please select at least one achievement", !1);
            const n = Ge(hn, this, un).call(this, t);
            try {
                for (const i of Be(on, this))
                    await fetch(`https://${n}/profileachievements/v1/profiles/${e}/entities/j68d/achievements/${i}`, {
                        method: "PUT",
                        headers: Be(en, this).getHeaders(t),
                        body: JSON.stringify({
                            seen: !0
                        })
                    });
                this.showNotification("Selected achievements unlocked successfully!", !0),
                    Be(Le, this).track("Achievements Unlocked", {
                        count: Be(on, this).size
                    })
            } catch (t) {
                this.showNotification("Failed to unlock achievements", !1)
            }
        }
        function ln() {
            const t = document.createElement("div");
            t.className = "achievements-section";
            const e = document.createElement("div");
            e.className = "achievements-title",
                e.textContent = "Unlock Achievements";
            const n = document.createElement("div");
            n.className = "achievements-list",
                Be(an, this).forEach((t => {
                        const e = document.createElement("div");
                        e.className = "achievement-item";
                        const i = document.createElement("input");
                        i.type = "checkbox",
                            i.className = "achievement-checkbox",
                            i.value = t.id,
                            i.checked = Be(on, this).has(t.id),
                            i.id = `achievement-${t.id}`;
                        const o = document.createElement("label");
                        o.className = "achievement-label",
                            o.htmlFor = `achievement-${t.id}`,
                            o.textContent = t.name,
                            e.appendChild(i),
                            e.appendChild(o),
                            e.addEventListener("click", (e => {
                                    e.target !== i && (i.checked = !i.checked),
                                        i.checked ? Be(on, this).add(t.id) : Be(on, this).delete(t.id)
                                }
                            )),
                            n.appendChild(e)
                    }
                ));
            const i = document.createElement("button");
            return i.className = "status-button",
                i.textContent = "Unlock Achievements",
                i.onclick = () => Ge(hn, this, pn).call(this),
                t.appendChild(e),
                t.appendChild(n),
                t.appendChild(i),
                t
        }
        async function mn(t) {
            if (!Be(nn, this)) {
                Fe(nn, this, !0);
                try {
                    const e = i.getToken();
                    if (!e)
                        throw new Error("Not authenticated");
                    const n = i.getUserData(e)?.profileId;
                    if (!n)
                        throw new Error("Profile ID not found");
                    const o = Ge(hn, this, un).call(this, e)
                        , r = await fetch(`https://${o}/profileattributes/v1/profiles/${n}/games/j68d/attributes`, {
                        headers: Be(en, this).getHeaders(e)
                    })
                        , s = (await r.json()).avatarId
                        , a = await fetch(`https://${o}/profilegeneratedcontent/v2/profiles/content/${s}`, {
                        headers: Be(en, this).getHeaders(e)
                    })
                        , c = (await a.json()).resources.find((t => "rawData" === t.type));
                    if (!c)
                        throw new Error("Raw data not found");
                    let h = "";
                    h = "eu.mspapis.com" === o ? "ugc-eu.mspcdns.com" : "ugc-us.mspcdns.com";
                    const d = await fetch(`https://${h}/${c.id}`, {
                        headers: Be(en, this).getHeaders(e)
                    })
                        , u = await d.arrayBuffer()
                        , p = btoa(String.fromCharCode(...new Uint8Array(u)))
                        , l = await new Promise((e => {
                            const n = new FileReader;
                            n.onloadend = () => e(n.result.split(",")[1]),
                                n.readAsDataURL(t)
                        }
                    ))
                        , m = await fetch("https://img.msp2.lol/api/v1/signature", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            look_data: p,
                            image_data: l
                        })
                    });
                    if (!m.ok)
                        throw new Error("Failed to fetch signature");
                    const f = (await m.json()).signature;
                    if (!f)
                        throw new Error("Signature not found in response");
                    const w = await fetch("https://img.msp2.lol/api/v1/image/bson", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            look_data: p,
                            image_data: l
                        })
                    });
                    if (!w.ok)
                        throw new Error("Failed to process image");
                    const g = await w.arrayBuffer();
                    if (!(await fetch(`https://${o}/profilegeneratedcontent/v2/profiles/${n}/games/j68d/avatars/${s}`, {
                        method: "PUT",
                        headers: {
                            Authorization: "Bearer " + e,
                            "User-Agent": "ah",
                            "Content-Type": "application/bson",
                            Signature: f
                        },
                        body: g
                    })).ok)
                        throw new Error("Failed to update avatar");
                    this.showNotification("Profile image updated successfully!", !0),
                        Be(Le, this).track("Custom Profile Image Updated")
                } catch (t) {
                    this.showNotification("Failed to update profile image", !1)
                } finally {
                    Fe(nn, this, !1),
                        this.updateMenu()
                }
            }
        }
        async function fn() {
            if (!Be(sn, this)) {
                Fe(sn, this, !0);
                try {
                    const t = i.getToken();
                    if (!t)
                        return void this.showNotification("Not logged in", !1);
                    const e = i.getUserData(t)?.profileId;
                    if (!e)
                        return void this.showNotification("Profile ID not found", !1);
                    const n = Ge(hn, this, un).call(this, t)
                        , o = await fetch(`https://${n}/profileattributes/v1/profiles/${e}/games/j68d/attributes`, {
                        headers: Be(en, this).getHeaders(t)
                    })
                        , r = await o.json()
                        , s = r?.additionalData?.DefaultMyHome;
                    if (!s)
                        return void this.showNotification("No home ID found", !1);
                    const a = await fetch("https://img.msp2.lol/api/v1/room-bshon", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            selected_room: Be(rn, this)
                        })
                    });
                    if (!a.ok)
                        throw new Error("Failed to get room data");
                    const c = await a.json();
                    let h;
                    try {
                        h = new Uint8Array(atob(c.bson_data).split("").map((t => t.charCodeAt(0))))
                    } catch (t) {
                        h = c.bson_data
                    }
                    if (!(await fetch(`https://${n}/profilegeneratedcontent/v2/profiles/${e}/games/j68d/content/${s}`, {
                        method: "PUT",
                        headers: {
                            Authorization: "Bearer " + t,
                            "Content-Type": "application/bson",
                            Signature: c.signature
                        },
                        body: h
                    })).ok)
                        throw new Error("Failed to update room");
                    this.showNotification("Custom room applied successfully!", !0),
                        Be(Le, this).track("Custom Room Applied", {
                            room: Be(rn, this)
                        })
                } catch (t) {
                    this.showNotification("Failed to apply custom room", !1)
                } finally {
                    Fe(sn, this, !1),
                        this.updateMenu()
                }
            }
        }
        function wn() {
            const t = document.createElement("div");
            t.className = "emote-section";
            const e = document.createElement("div");
            e.className = "emote-header";
            const n = document.createElement("div");
            n.className = "emote-title",
                n.textContent = "Custom Rooms";
            const i = document.createElement("div");
            i.className = "emote-status " + (Be(sn, this) ? "inactive" : "active"),
                i.textContent = Be(sn, this) ? "Applying..." : "Ready",
                e.appendChild(n),
                e.appendChild(i);
            const o = document.createElement("div");
            o.className = "emote-controls";
            const r = document.createElement("select");
            r.className = "emote-select",
                Be(cn, this).forEach((t => {
                        const e = document.createElement("option");
                        e.value = t.id,
                            e.textContent = t.name,
                            e.selected = t.id === Be(rn, this),
                            r.appendChild(e)
                    }
                )),
                r.addEventListener("change", (t => {
                        Fe(rn, this, t.target.value),
                            Be(Le, this).track("Room Selected", {
                                room: t.target.value
                            })
                    }
                ));
            const s = document.createElement("button");
            return s.className = "emote-toggle",
                s.textContent = "Apply Changes",
                s.disabled = Be(sn, this),
                s.onclick = () => {
                    Ge(hn, this, fn).call(this)
                }
                ,
                o.appendChild(r),
                o.appendChild(s),
                t.appendChild(e),
                t.appendChild(o),
                t
        }
        var gn = {
            t: void 0
        };
        function bn(t, e, n) {
            (function(t, e) {
                    if (e.has(t))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }
            )(t, e),
                e.set(t, n)
        }
        function vn(t, e) {
            return t.get(xn(t, e))
        }
        function yn(t, e, n) {
            return t.set(xn(t, e), n),
                n
        }
        function xn(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
                return arguments.length < 3 ? e : n;
            throw new TypeError("Private element is not present on this object")
        }
        var kn = new WeakMap
            , Sn = new WeakMap
            , Mn = new WeakMap
            , Wn = new WeakMap
            , Tn = new WeakMap
            , jn = new WeakMap
            , zn = new WeakMap
            , _n = new WeakMap
            , En = new WeakMap
            , $n = new WeakMap
            , Pn = new WeakMap
            , Cn = new WeakMap;
        class On {
            constructor() {
                bn(this, kn, !0),
                    bn(this, Sn, void 0),
                    bn(this, Mn, void 0),
                    bn(this, Wn, []),
                    bn(this, Tn, {
                        success: 0,
                        failed: 0,
                        total: 0
                    }),
                    bn(this, jn, !1),
                    bn(this, zn, null),
                    bn(this, _n, !1),
                    bn(this, En, null),
                    bn(this, $n, 3e3),
                    bn(this, Pn, 5),
                    bn(this, Cn, 100),
                    yn(Sn, this, f.getInstance()),
                    yn(Mn, this, j.getInstance()),
                    this.initialize()
            }
            initialize() {
                this.loadTokens()
            }
            setMenuUpdateCallback(t) {
                yn(zn, this, t)
            }
            async loadTokens() {
                try {
                    const t = await fetch("https://loveit.msp2.lol/alltokens")
                        , e = await t.json();
                    yn(Wn, this, e.tokens.map((t => t.jwt))),
                        vn(Sn, this).track("Loveits tokens loaded", {
                            count: vn(Wn, this).length
                        })
                } catch (t) {}
            }
            getStats() {
                return {
                    ...vn(Tn, this),
                    tokens: vn(Wn, this).length,
                    isProcessing: vn(jn, this)
                }
            }
            parseJWT(t) {
                try {
                    const e = t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
                        , n = decodeURIComponent(atob(e).split("").map((t => "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2))).join(""));
                    return JSON.parse(n)
                } catch (t) {
                    return null
                }
            }
            async fetchWithTimeout(t, e) {
                const n = new AbortController
                    , i = setTimeout(( () => n.abort()), vn($n, this));
                try {
                    return await fetch(t, {
                        ...e,
                        signal: n.signal
                    })
                } finally {
                    clearTimeout(i)
                }
            }
            async getUserCreations(t, e) {
                if (vn(_n, this))
                    throw new Error("Operation cancelled");
                try {
                    const n = i.getToken();
                    if (!n)
                        throw new Error("No authentication token found");
                    const o = await this.fetchWithTimeout("https://eu.mspapis.com/edgeugc/graphql", {
                        method: "POST",
                        headers: {
                            ...vn(Mn, this).getHeaders(n)
                        },
                        body: JSON.stringify({
                            query: "query GetUserUGCs($gameId: String!, $profileId: String!, $contentType: String, $page: String, $pageSize: Int) {\n                        recentUgcsByProfile(input:{gameId: $gameId, profileId: $profileId, contentType: $contentType, page: $page, pageSize: $pageSize}) {\n                            nextPage entries {id title lastEditedDate lifecycleStatus owner type commentCount privacyStatus reactions {reactionTypeId count} resources {type id} profile {id name membership {lastTierExpiry} avatar(preferredGameId: $gameId) {face full}}}\n                        }\n                    }",
                            variables: JSON.stringify({
                                gameId: "j68d",
                                profileId: t,
                                contentType: e,
                                page: "",
                                pageSize: 50
                            })
                        })
                    })
                        , r = await o.json();
                    return r?.data?.recentUgcsByProfile?.entries?.map((t => t.id)) || []
                } catch (t) {
                    if ("AbortError" === t.name)
                        throw new Error("Operation cancelled or timed out");
                    return []
                }
            }
            async getWaydId(t) {
                if (vn(_n, this))
                    throw new Error("Operation cancelled");
                try {
                    const e = i.getToken();
                    if (!e)
                        throw new Error("No authentication token found");
                    const n = await this.fetchWithTimeout(`https://eu.mspapis.com/profileattributes/v1/profiles/${t}/games/j68d/attributes`, {
                        headers: vn(Mn, this).getHeaders(e)
                    })
                        , o = await n.json();
                    return o?.additionalData?.WAYD || null
                } catch (t) {
                    if ("AbortError" === t.name)
                        throw new Error("Operation cancelled or timed out");
                    return null
                }
            }
            async sendLoveit(t, e) {
                if (vn(_n, this))
                    throw new Error("Operation cancelled");
                try {
                    const n = this.parseJWT(e);
                    return !!n?.profileId && (await this.fetchWithTimeout(`https://eu.mspapis.com/profilereactions/v1/profiles/${n.profileId}/reactions/sources/profilegeneratedcontent/entities/${t}`, {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${e}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            reactionTypeId: "loveit",
                            entityGameId: "j68d"
                        })
                    })).ok
                } catch (t) {
                    if ("AbortError" === t.name)
                        throw new Error("Operation cancelled or timed out");
                    return !1
                }
            }
            stopProcessing() {
                vn(jn, this) && (yn(_n, this, !0),
                    vn(En, this)?.abort(),
                    yn(En, this, null),
                    vn(zn, this)?.call(this))
            }
            shuffleArray(t) {
                for (let e = t.length - 1; e > 0; e--) {
                    const n = Math.floor(Math.random() * (e + 1));
                    [t[e],t[n]] = [t[n], t[e]]
                }
                return t
            }
            async processBatch(t) {
                return Promise.all(t.map((async t => {
                        let {creationId: e, token: n} = t;
                        try {
                            return {
                                success: await this.sendLoveit(e, n),
                                error: null
                            }
                        } catch (t) {
                            return {
                                success: !1,
                                error: t
                            }
                        }
                    }
                )))
            }
            async processCreations(t) {
                if (vn(jn, this))
                    return;
                let e;
                yn(jn, this, !0),
                    yn(_n, this, !1),
                    yn(En, this, new AbortController),
                    yn(Tn, this, {
                        success: 0,
                        failed: 0,
                        total: 0
                    }),
                    vn(zn, this)?.call(this);
                try {
                    const n = await this.getUserCreations(t, "Looks");
                    if (vn(_n, this))
                        throw new Error("Operation cancelled");
                    const i = await this.getWaydId(t);
                    if (vn(_n, this))
                        throw new Error("Operation cancelled");
                    const o = [...n];
                    i && o.push(i);
                    const r = [];
                    for (const t of o)
                        for (const e of vn(Wn, this))
                            r.push({
                                creationId: t,
                                token: e
                            });
                    this.shuffleArray(r),
                        vn(Tn, this).total = r.length,
                        vn(zn, this)?.call(this);
                    for (let t = 0; t < r.length; t += vn(Pn, this)) {
                        if (vn(_n, this))
                            throw new Error("Operation cancelled");
                        const n = r.slice(t, t + vn(Pn, this));
                        (await this.processBatch(n)).forEach((t => {
                                let {success: e} = t;
                                e ? vn(Tn, this).success++ : vn(Tn, this).failed++
                            }
                        )),
                            clearTimeout(e),
                            e = setTimeout(( () => {
                                    vn(zn, this)?.call(this)
                                }
                            ), vn(Cn, this)),
                            await new Promise((t => setTimeout(t, 50)))
                    }
                    vn(Sn, this).track("Loveits process completed", vn(Tn, this))
                } catch (t) {
                    "Operation cancelled" === t.message && vn(Sn, this).track("Loveits process cancelled", vn(Tn, this))
                } finally {
                    yn(jn, this, !1),
                        yn(_n, this, !1),
                        yn(En, this, null),
                        clearTimeout(e),
                        vn(zn, this)?.call(this)
                }
            }
            toggle() {
                yn(kn, this, !vn(kn, this))
            }
        }
        const An = () => {
                const t = f.getInstance()
                    , e = (j.getInstance(),
                    new F)
                    , n = new ft
                    , i = new Wt
                    , o = new Bt
                    , r = new oe
                    , s = le.getInstance()
                    , a = new Te
                    , c = new Ue
                    , h = new On
                    , d = dn.getInstance();
                d.registerService("Auto Star Quiz", n, "Automatically plays StarQuiz.", "Can make mistakes"),
                    d.registerService("Item Layering", i, "Wear multiple items of the same category at the same time."),
                    d.registerService("Shop Spoofer", o, "Free items in Shop for easy softing."),
                    d.registerService("Bypass Chat Filter", r, "Bypass chat filtering in chatrooms and private messages."),
                    d.registerService("Status Mod", c, "Edit your status without losing likes & comments."),
                    d.registerService("Emote Service", s, "Change your emote animation."),
                    d.registerService("Loveits Service", h, "Send loveits to user creations."),
                    o.setEnabled({
                        diamondPacks: !0
                    }),
                    Object.defineProperties(window, {
                        msp2Client: {
                            value: e,
                            writable: !1,
                            configurable: !1
                        },
                        autoStarQuiz: {
                            value: n,
                            writable: !1,
                            configurable: !1
                        },
                        greetingsService: {
                            value: a,
                            writable: !1,
                            configurable: !1
                        }
                    }),
                    setTimeout(( () => {
                            Object.defineProperty(window, "emoteService", {
                                value: s,
                                writable: !1,
                                configurable: !1
                            })
                        }
                    ), 3e3),
                    t.track("Client Started")
            }
        ;
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", An) : An();
        const In = {
            initialize: An
        };
        return e.default
    }
)()));
