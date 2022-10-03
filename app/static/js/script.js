var A45 = {
    r84: !1,
    e21: null,
    b12: null,
    b34: "",
    b35: "",
    a28: null,
    s82: null,
    u42: null,
    g129: null,
    p24: null,
    i45: !1,
    s83: null,
    a29: function () {
        var s = S72.g130("session", ""),
            i = new XMLHttpRequest(),
            t = this;
        (i.onreadystatechange = function () {
            (function () {
                if (i.readyState == XMLHttpRequest.DONE)
                    if (((this.r84 = !0), 200 == i.status)) {
                        this.e21 = !1;
                        var s = JSON.parse(i.responseText);
                        if (
                            ((this.b12 = s.ban),
                                (this.b34 = s.banId),
                                (this.b35 = s.banIp),
                                !this.b12)
                        ) {
                            if (
                                ((this.a28 = s.authKey),
                                    (this.s82 = s.session),
                                    (this.u42 = s.user),
                                    (this.u42.storage = this.u42.storage
                                        ? JSON.parse(this.u42.storage)
                                        : {}),
                                    (this.g129 = s.geolocation),
                                    (this.i45 = s.isNewUser),
                                    this.u55(),
                                    s.serverTime)
                            ) {
                                var t = new Date();
                                this.s83 =
                                    s.serverTime -
                                    t.getTime() +
                                    60 * t.getTimezoneOffset() * 1e3;
                            }
                            s.session && S72.s85("session", s.session);
                        }
                    } else this.e21 = !0;
            }.apply(t));
        }),
            i.open("GET", "/authorize?session=" + s, !0),
            i.send();
    },
    u55: function () {
        this.p24 =
            (this.u42.premiumTo &&
                new Date(this.u42.premiumTo).getTime() > Date.now()) ||
            1 == this.u42.patronState ||
            2 == this.u42.patronState;
    },
},
    P41 = {
        s106: !1,
        q5: null,
        w7: [],
        n14: function (s, t, i) {
            this.s106
                ? R39.n14(s, t)
                : ((this.q5 = ["navigate", s, t]),
                    document.body.classList.add("waiting"),
                    i && (i.classList.add("waiting"), this.w7.push(i)));
        },
        e22: function (s, t) {
            this.s106
                ? R39.e22(s)
                : ((this.q5 = ["executeUrl", s]),
                    document.body.classList.add("waiting"),
                    t && (t.classList.add("waiting"), this.w7.push(t)));
        },
        o10: function () {
            if (((this.s106 = !0), this.q5)) {
                "navigate" == this.q5[0]
                    ? R39.n14(this.q5[1], this.q5[2])
                    : "executeUrl" == this.q5[0] && R39.e22(this.q5[1]),
                    (this.q5 = null),
                    document.body.classList.remove("waiting");
                for (var s = 0; s < this.w7.length; s++)
                    this.w7[s].classList.remove("waiting");
            }
        },
    },
    S72 = {
        s84: {},
        g130: function (s, t) {
            return (
                void 0 !== this.s84[s] ||
                (!Env.screenMode && localStorage["_" + s]
                    ? (this.s84[s] = localStorage["_" + s])
                    : (this.s84[s] = void 0 !== t ? t : null)),
                this.s84[s]
            );
        },
        h23: function (s) {
            return this.s84[s] || localStorage["_" + s];
        },
        s85: function (s, t) {
            (this.s84[s] = t), Env.screenMode || (localStorage["_" + s] = t);
        },
    };
A45.a29();
