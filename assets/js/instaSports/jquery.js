(!(function () {
  var t = document.getElementById("share-btn"),
    a = document.getElementById("share-menu");
  t &&
    a &&
    (t.addEventListener("click", function (t) {
      if ((t.stopPropagation(), !a.classList.contains("open"))) {
        var e = encodeURIComponent(location.href),
          p = encodeURIComponent(
            "Ver Mundial 2026 en vivo gratis ⚽ " + location.href,
          );
        ((document.getElementById("sh-wa").href = "https://wa.me/?text=" + p),
          (document.getElementById("sh-fb").href =
            "https://www.facebook.com/sharer/sharer.php?u=" + e));
      }
      a.classList.toggle("open");
    }),
    document.addEventListener("click", function (t) {
      t.target.closest("#share-btn") ||
        t.target.closest("#share-menu") ||
        a.classList.remove("open");
    }));
})(),
  (window._tvErr = []),
  (window.onerror = function (t, a, e, p) {
    return (window._tvErr.push({ m: t, s: a, l: e, c: p }), !1);
  }),
  (function (t) {
    ("/" === location.pathname && document.body.classList.add("tv-home"),
      (function () {
        function t(t) {
          document.querySelectorAll(t).forEach(function (t) {
            t.style.setProperty("display", "none", "important");
          });
        }
        (t("#HTML1,#HTML2,#HTML3,#HTML4,#HTML5,#HTML6,#HTML7,#HTML8"),
          t(".widget.HTML,.widget.PageList,.widget.LinkList"),
          "/" === location.pathname &&
            t("#Blog1,.blog-pager,#blog-pager,.blog-posts.hfeed"),
          t("#sidebar-wrapper,#sidebar,.sidebar-wrapper,.sidebar-outer"),
          t(
            "#RecentPosts1,#BlogArchive1,#FeaturedPost1,#BlogSearch1,#Label1,#PageList1",
          ),
          t(
            ".widget.RecentPosts,.widget.BlogArchive,.widget.BlogSearch,.widget.Label,.widget.PageList",
          ));
        var a = document.getElementById("hdr");
        if (a)
          for (var e = a.parentElement; e && e !== document.body; ) {
            for (var p = e.previousElementSibling; p; )
              (p.style.setProperty("display", "none", "important"),
                (p = p.previousElementSibling));
            e = e.parentElement;
          }
      })(),
      (window.CANALES = [
        {
          n: "Latina TV",
          f: "&#127477;&#127466;",
          c: "Per&#250;",
          cat: "noticias",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "m3u8",
              url: "https://redirector.rudo.video/hls-video/567ffde3fa319fadf3419efda25619456231dfea/latina/latina.smil/playlist.m3u8",
            },
          ],
        },
        {
          n: "RPP TV",
          f: "&#127477;&#127466;",
          c: "Per&#250;",
          cat: "noticias",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "m3u8",
              url: "https://cdn-ssai.smartbit.co/rpp/index.m3u8",
            },
          ],
        },
        {
          n: "TUDN",
          f: "&#127487;&#127485;",
          c: "M&#233;xico",
          cat: "deportes",
          m: !0,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "iframe",
              url: "https://dlhd.pk/embed/stream-935.php",
            },
          ],
        },
        {
          n: "Azteca Inter",
          f: "&#127487;&#127485;",
          c: "M&#233;xico",
          cat: "entretenimiento",
          m: !0,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "m3u8",
              url: "https://azt-mun.otteravision.com/azt/mun/mun.m3u8",
            },
          ],
        },
        {
          n: "TV Cultura",
          f: "&#127463;&#127479;",
          c: "Brasil",
          cat: "noticias",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "m3u8",
              url: "https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8",
            },
          ],
        },
        {
          n: "Record News",
          f: "&#127463;&#127479;",
          c: "Brasil",
          cat: "noticias",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "m3u8",
              url: "https://rnw-rn.otteravision.com/rnw/rn/rnw_rn.m3u8",
            },
          ],
        },
        {
          n: "FOX Sports",
          f: "&#127482;&#127480;",
          c: "USA/Espa&#241;ol",
          cat: "entretenimiento",
          m: !0,
          s: [
            {
              l: "Opción 1",
              q: "SD",
              tipo: "iframe",
              url: "https://dlhd.pk/embed/stream-929.php",
            },
          ],
        },
        {
          n: "ESPN 2",
          f: "&#127758;",
          c: "Intl",
          cat: "deportes",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "iframe",
              url: "https://dlhd.pk/embed/stream-926.php",
            },
          ],
        },
        {
          n: "ESPN 3",
          f: "&#127474;&#127485;",
          c: "M&#233;xico",
          cat: "deportes",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "iframe",
              url: "https://dlhd.pk/embed/stream-927.php",
            },
          ],
        },
        {
          n: "DSports",
          f: "&#127758;",
          c: "Intl",
          cat: "deportes",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "iframe",
              url: "https://deportes.ksdjugfsddeports.com/stream2.php?canal=directvsports&target=2",
            },
            {
              l: "Opción 2",
              q: "HD",
              tipo: "iframe",
              url: "https://www.cablevisionhd.com/stream2/core.php?canal=directvsports",
            },
            {
              l: "Opción 3",
              q: "HD",
              tipo: "iframe",
              url: "https://elcanaldeportivo.org/directvsports.php",
            },
          ],
        },
        {
          n: "Fox Sports 2",
          f: "&#127758;",
          c: "Intl",
          cat: "deportes",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "iframe",
              url: "https://dlhd.pk/embed/stream-930.php",
            },
          ],
        },
        {
          n: "TV Globo",
          f: "&#127463;&#127479;",
          c: "Brasil",
          cat: "entretenimiento",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "SD",
              tipo: "iframe",
              url: "https://dlhd.pk/embed/stream-262.php",
            },
          ],
        },
        {
          n: "TV Brasil",
          f: "&#127463;&#127479;",
          c: "Brasil",
          cat: "entretenimiento",
          m: !1,
          s: [
            {
              l: "Opción 1",
              q: "HD",
              tipo: "m3u8",
              url: "https://tvbrasil-stream.ebc.com.br/index.m3u8",
            },
          ],
        },
      ]));
    var a = null,
      e = null,
      p = 0,
      i = null,
      s = {};
    function r() {
      (a && (a.destroy(), (a = null)), o());
    }
    function o() {
      i && (clearTimeout(i), (i = null));
    }
    function n(a, e, s) {
      if (s === p) {
        for (var n = a.s || []; e < n.length && !n[e].url; ) e++;
        if (e >= n.length)
          return (
            r(),
            void t("#player-screen").html(`
              <div class="player-empty player-error">

                  <div class="player-empty__icon error-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 9v4"></path>
                          <path d="M12 17h.01"></path>
                          <circle cx="12" cy="12" r="9"></circle>
                      </svg>
                  </div>

                  <h3 class="player-empty__title">
                      Sin señal
                  </h3>

                  <p class="player-empty__text">
                      Intenta otra fuente.
                  </p>

              </div>
              `)
          );
        var c = n[e];
        if (
          (t("#src-btns .src-btn").removeClass("on").eq(e).addClass("on"),
          "m3u8" === c.tipo)
        ) {
          var d = new AbortController();
          fetch(c.url, { method: "GET", mode: "cors", signal: d.signal })
            .then(function () {
              (d.abort(), s === p && l(a, c, e, s));
            })
            .catch(function (t) {
              "AbortError" !== t.name && s === p && h(a, e, s);
            });
        } else
          !(function (a, e, s, n) {
            (r(),
              (function (a, e, s, r) {
                var n = v.some(function (t) {
                  return -1 !== e.url.indexOf(t);
                })
                  ? ""
                  : ' sandbox="allow-scripts allow-same-origin allow-forms allow-presentation allow-orientation-lock allow-modals allow-downloads"';
                if (
                  (t("#player-screen").html(
                    '<iframe src="' +
                      e.url +
                      '" allowfullscreen allow="autoplay;encrypted-media;fullscreen;picture-in-picture;gyroscope;accelerometer"' +
                      n +
                      ' style="position:absolute;inset:0;width:100%;height:100%;border:none"></iframe>' +
                      (u
                        ? ""
                        : '<div id="ad-shield" style="position:absolute;inset:0;z-index:10;cursor:pointer;background:transparent"></div>') +
                      '<div id="shield-hint" style="position:absolute;bottom:70px;right:10px;z-index:11;background:rgba(0,0,0,.7);color:#fff;font-size:13px;padding:4px 8px;border-radius:4px;pointer-events:none">' +
                      (u ? "▶ Toca la pantalla para reproducir" : "") +
                      '</div><div id="src-bar" style="position:absolute;bottom:0;left:0;height:3px;background:var(--red);width:100%;z-index:15;border-radius:0 2px 2px 0;transition:width ' +
                      Math.round(20) +
                      's linear"></div>',
                  ),
                  !u)
                ) {
                  var l = !1;
                  t("#ad-shield").on("click", function () {
                    l ||
                      ((l = !0),
                      t("#shield-hint").text("🔊 Activando... (3s)"),
                      t(this).css("pointer-events", "none"),
                      setTimeout(function () {
                        (t("#ad-shield").css("pointer-events", "all"),
                          (l = !1));
                      }, 3e3));
                  });
                }
                function c() {
                  o();
                  var t = document.getElementById("src-bar");
                  t &&
                    ((t.style.transition = "none"), (t.style.display = "none"));
                }
                (t("#shield-hint").one("click touchstart", function () {
                  t(this).hide();
                }),
                  setTimeout(function () {
                    var a = t("#shield-hint");
                    a.length && a.fadeOut(800);
                  }, 5e3));
                var d = Date.now();
                (t("#player-screen iframe").one("load", function () {
                  r === p && (Date.now() - d < 800 && !m ? h(a, s, r) : c());
                }),
                  requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                      var t = document.getElementById("src-bar");
                      t && (t.style.width = "0%");
                    });
                  }),
                  (i = setTimeout(function () {
                    r === p && (m ? c() : h(a, s, r));
                  }, 2e4)),
                  t("#player-screen").one("click mousedown", function () {
                    try {
                      localStorage.setItem("lws_" + a.n, e.url);
                    } catch (t) {}
                    var t = document.getElementById("src-bar");
                    t && (t.style.display = "none");
                  }));
              })(a, e, s, n));
          })(a, c, e, s);
      }
    }
    function l(e, i, s, o) {
      if ("undefined" != typeof Hls) {
        (r(),
          t("#player-screen").html(
            '<video id="hls-video" style="position:absolute;inset:0;width:100%;height:100%;background:#000;object-fit:contain" controls autoplay muted></video>',
          ));
        var n = document.getElementById("hls-video"),
          c = null;
        Hls.isSupported()
          ? ((a = new Hls({ enableWorker: !0, lowLatencyMode: !0 })).loadSource(
              i.url,
            ),
            a.attachMedia(n),
            a.on(Hls.Events.ERROR, function (t, p) {
              p.fatal && (m(), a.destroy(), (a = null), h(e, s, o));
            }),
            n.addEventListener(
              "timeupdate",
              function () {
                n.currentTime > 0.5 && m();
              },
              { once: !0 },
            ),
            v(12e3))
          : n.canPlayType("application/vnd.apple.mpegurl")
            ? ((n.src = i.url),
              n.play(),
              v(12e3),
              n.addEventListener(
                "timeupdate",
                function () {
                  n.currentTime > 0.5 && m();
                },
                { once: !0 },
              ))
            : h(e, s, o);
      } else
        setTimeout(function () {
          o === p && l(e, i, s, o);
        }, 600);
      function m() {
        c && (clearTimeout(c), (c = null));
      }
      function v(t) {
        (m(),
          (c = setTimeout(function () {
            o === p &&
              n.currentTime < 0.5 &&
              (a && (a.destroy(), (a = null)), h(e, s, o));
          }, t || 12e3)));
      }
    }
    var c = {},
      m = !1;
    function h(t, a, e) {
      var p,
        i = t.s || [];
      (a >= 0 && a < i.length && (p = i[a].url) && (c[p] = Date.now()),
        (m = !0),
        n(t, a + 1, e));
    }
    var v = [
        "stream196tp.com",
        "streamtp",
        "tvlibre-online.com",
        "spaceyou.store",
        "balondeportes.com",
        "daddylives.sbs",
        "dlhd.pk",
        "welivesports.cfd",
        "canalesdeportivos.net",
        "elcanaldeportivo.org",
      ],
      u = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    function d(a) {
      m = !1;
      var i,
        o,
        l = t("#post-view");
      (l.is(":visible") &&
        (l.hide(),
        t("#player-shell").show(),
        t("#ch-rail").show(),
        t("#news-section").show()),
        r(),
        (a.s = ((i = a.s || []),
        (o = function (t) {
          var a = s[t.url];
          return "up" === a ? 0 : "down" === a ? 2 : 1;
        }),
        i.slice().sort(function (t, a) {
          return o(t) - o(a);
        })).sort(function (t, a) {
          return (c[t.url] ? 1 : 0) - (c[a.url] ? 1 : 0);
        })),
        (e = a));
      var h = (p = 65535 & ++p);
      (t("#ch-name").html(a.n),
        (function (a) {
          t("#src-btns").empty();
          t("#sources-bar").removeClass("visible");

          if (a.s && !(a.s.length <= 1)) {
            var i = "";
            (t.each(a.s, function (t, a) {
              var e = "4K" === a.q ? "q-4k" : "HD" === a.q ? "q-hd" : "";
              i +=
                '<button class="src-btn" data-idx="' +
                t +
                '" data-url="' +
                (a.url || "") +
                '" data-tipo="' +
                (a.tipo || "iframe") +
                '" data-q="' +
                a.q +
                '">' +
                a.l +
                ' <span class="q-badge ' +
                e +
                '">' +
                a.q +
                "</span></button>";
            }),
              t("#src-btns").html(i),
              t("#sources-bar").addClass("visible"),
              t("#src-btns .src-btn").on("click", function () {
                var a = parseInt(t(this).data("idx"));
                try {
                  localStorage.setItem("lws_" + e.n, e.s[a].url);
                } catch (t) {}
                n(e, a, p);
              }));
          }
        })(a),
        t(".ch-tile")
          .removeClass("on")
          .filter('[data-n="' + a.n + '"]')
          .addClass("on"),
        t("html,body").animate({ scrollTop: 0 }, 300));
      var v = "";
      try {
        v = localStorage.getItem("lws_" + a.n) || "";
      } catch (t) {}
      var u = 0;
      if (v)
        for (var d = 0; d < a.s.length; d++)
          if (a.s[d].url === v) {
            u = d;
            break;
          }
      n(a, u, h);
    }
    var f = {
      Perú: "pe",
      México: "mx",
      Argentina: "ar",
      Brasil: "br",
      Colombia: "co",
      "USA/Español": "us",
      Intl: "",
      Ecuador: "ec",
      Venezuela: "ve",
      Chile: "cl",
      Bolivia: "bo",
      Paraguay: "py",
      Uruguay: "uy",
      "Perú/Latinoamérica": "pe",
    };
    function D(t) {
      var a = f[t.c];
      return a
        ? `\n    <img\n      class="channel-flag"\n      src="https://flagcdn.com/40x30/${a}.png"\n      alt="${a}"\n      onerror="this.outerHTML='<span class=&quot;channel-placeholder&quot;><svg viewBox=&quot;0 0 24 24&quot;><rect x=&quot;3&quot; y=&quot;5&quot; width=&quot;18&quot; height=&quot;12&quot; rx=&quot;2&quot;></rect><path d=&quot;M8 19h8M12 17v2&quot;></path></svg></span>'"\n    >\n  `
        : '\n    <span class="channel-placeholder">\n      <img src="/assets/images/world-channel.png" alt="Canal">\n    </span>\n  ';
    }
    function O(a) {
      var e =
          "all" === a
            ? CANALES
            : CANALES.filter(function (t) {
                return t.cat === a;
              }),
        p = "";
      (t.each(e, function (t, a) {
        (a.s && a.s[0] && a.s[0].url,
          (p +=
            '<a class="ch-tile" href="/?ch=' +
            encodeURIComponent(a.n) +
            '" data-n="' +
            a.n +
            '"><div class="ct-flag">' +
            D(a) +
            '</div><div class="ct-name">' +
            a.n +
            "</div>"));
      }),
        t("#ch-strip").html(p),
        t(".ch-tile").on("click", function (a) {
          a.preventDefault();
          var p = parseInt(t(this).index());
          (d(e[p]), t(this).addClass("on"));
        }));
    }
    function q(a, e) {
      var p = e
          ? CANALES.filter(function (t) {
              return t.m;
            })
          : CANALES,
        i = "";
      (t.each(p, function (t, a) {
        i +=
          '<a class="card" href="/?ch=' +
          encodeURIComponent(a.n) +
          '" data-n="' +
          t +
          '"><div class="c-thumb" style="font-size:22px">' +
          D(a) +
          '<div class="c-play">&#9654;</div></div><div class="c-info"><strong>' +
          a.n +
          (a.m ? '<span class="c-badge">MUNDIAL</span>' : "") +
          "</strong><small>" +
          a.c +
          "</small></div></a>";
      }),
        t(a).html(i),
        t(a + " .card").on("click", function (a) {
          (a.preventDefault(), d(p[t(this).index()]));
        }));
    }
    (t(".rf").on("click", function () {
      (t(".rf").removeClass("on"),
        t(this).addClass("on"),
        O(t(this).data("cat")));
    }),
      O("deportes"),
      q("#strip-mundial", !0),
      q("#strip-all", !1),
      [
        ["strip-mundial", "sw-mundial"],
        ["strip-all", "sw-all"],
        ["pv-strip-mundial", "sw-pvm"],
        ["pv-strip-all2", "sw-pva"],
      ].forEach(function (t) {
        var a = document.getElementById(t[0]);
        a &&
          a.addEventListener(
            "scroll",
            function () {
              !(function (t, a) {
                var e = document.getElementById(t),
                  p = document.getElementById(a);
                if (e && p) {
                  var i = e.scrollLeft <= 4,
                    s = e.scrollLeft + e.clientWidth >= e.scrollWidth - 4;
                  (p.classList.toggle("at-start", i),
                    p.classList.toggle("at-end", s));
                  var r = p.querySelector(".strip-btn.prev"),
                    o = p.querySelector(".strip-btn.next");
                  (r && r.classList.toggle("sb-hidden", i),
                    o && o.classList.toggle("sb-hidden", s));
                }
              })(t[0], t[1]);
            },
            { passive: !0 },
          );
      }),
      window.addEventListener("load", function () {
        if ("/" === location.pathname)
          for (var t = 0; t < CANALES.length; t++)
            if ("DirecTV Sports" === CANALES[t].n) return void d(CANALES[t]);
      }));
    var H = [
      {
        e: "&#127467;&#127479;&#127386;&#127474;&#127462;",
        cat: "PARTIDO EN VIVO",
        f: "9 Jul 2026",
        ch: "DSports · DirecTV",
        t: "Ver Francia vs Marruecos en Vivo &#8212; Semif&#237;nal | Copa del Mundo 2026",
        p: "Francia busca su tercer Mundial. Transmisi&#243;n en vivo por DSports y DirecTV GO. Sin cable.",
      },
      {
        e: "&#127462;&#127479;&#127386;&#127466;&#127480;",
        cat: "PARTIDO EN VIVO",
        f: "9 Jul 2026",
        ch: "El Trece · TyC Sports",
        t: "Ver Argentina vs Espa&#241;a en Vivo Gratis &#8212; Semif&#237;nal Mundial 2026",
        p: "La Scaloneta va por la final. Se&#241;al gratis por El Trece y Telefe. 18:00 ET.",
      },
      {
        e: "&#127474;&#127462;&#127386;&#127466;&#127480;",
        cat: "NOTICIAS",
        f: "8 Jul 2026",
        ch: "TyC Sports · DSports",
        t: "&#191;Cu&#225;ndo es la Final del Mundial 2026? Fecha, hora y canales en vivo",
        p: "La gran final se juega el 19 de julio en el MetLife Stadium. Todo lo que necesit&#225;s saber.",
      },
      {
        e: "&#127467;&#127479;&#127386;&#127463;&#127479;",
        cat: "PARTIDO EN VIVO",
        f: "5 Jul 2026",
        ch: "DSports · DirecTV GO",
        t: "Ver Francia vs Brasil en Vivo &#8212; Cuartos de Final | Mundial 2026",
        p: "Cl&#225;sico europeo-sudamericano en cuartos. Transmisi&#243;n completa en DSports sin registro.",
      },
      {
        e: "&#127462;&#127479;&#127386;&#127466;&#127480;",
        cat: "PARTIDO EN VIVO",
        f: "4 Jul 2026",
        ch: "Telefe · DSports",
        t: "Ver Argentina vs Espa&#241;a en Vivo &#8212; Cuartos de Final Copa del Mundo",
        p: "La Albiceleste vs La Roja en cuartos. Telefe lo transmite gratis en Argentina.",
      },
      {
        e: "&#127474;&#127462;&#127386;&#127474;&#127481;",
        cat: "NOTICIAS",
        f: "3 Jul 2026",
        ch: "DSports · ESPN",
        t: "Messi hace historia: los goles m&#225;s importantes del Mundial 2026",
        p: "Leo Messi lidera a Argentina hacia la semifinal con una actuaci&#243;n inolvidable.",
      },
    ];
    var w = [],
      g = 1;
    ((window._ngPg = function (t) {
      g += t;
      var a = "";
      w.slice(6 * (g - 1), 6 * g).forEach(function (t) {
        try {
          var e = t.title.$t,
            p =
              (
                (t.link || []).filter(function (t) {
                  return "alternate" === t.rel;
                })[0] || {}
              ).href || "#",
            i =
              (t.content && t.content.$t) || (t.summary && t.summary.$t) || "",
            s = (t.media$thumbnail || {}).url || "";
          if ((s && (s = s.replace(/=s\d+(-[a-z0-9]+)*$/i, "=s600")), !s)) {
            var r = i.match(/src=["']([^"']{20,})["']/i);
            r && (s = r[1]);
          }
          var o =
              s &&
              (s.indexOf("blogger.googleusercontent") > 0 ||
                s.indexOf("bp.blogspot") > 0 ||
                s.indexOf("googleusercontent") > 0),
            n = s
              ? o
                ? s
                : "https://wsrv.nl/?url=" +
                  encodeURIComponent(s) +
                  "&w=320&output=jpg"
              : "",
            l = ((t.category || [])[0] || {}).term || "Noticias";
          a +=
            '<div class="news-card" onclick="openPost(\'' +
            p +
            '\')"><div class="nc-top"><span class="nc-cat">' +
            l +
            "</span>" +
            (n
              ? '<img src="' +
                n +
                '" loading="eager" onerror="this.outerHTML=\'&#128240;\'">'
              : "&#128240;") +
            '</div><div class="nc-body"><h4>' +
            e +
            "</h4></div></div>";
        } catch (t) {}
      });
      var e = document.getElementById("news-grid");
      e && (e.innerHTML = a);
      var p = document.getElementById("ng-pv"),
        i = document.getElementById("ng-nx");
      (p && (p.disabled = g <= 1), i && (i.disabled = 6 * g >= w.length));
    }),
      (function () {
        var a,
          e = window.location.pathname.match(/\/search\/label\/(.+)/);
        if ((e && e[1], e)) {
          var p = decodeURIComponent(e[1].replace(/\+/g, " ")),
            i = document.querySelector("#news-section .row-hdr h3");
          i && (i.textContent = p);
        }
        ("file:" !== window.location.protocol &&
          "localhost" !== window.location.hostname &&
          window.location.hostname,
          (a = ""),
          t.each(H, function (t, e) {
            a +=
              '<div class="news-card" onclick="openPost(\'#\')"><div class="nc-top"><span class="nc-cat">' +
              e.cat +
              "</span>" +
              e.e +
              '</div><div class="nc-body"><h4>' +
              e.t +
              "</h4><p>" +
              e.p +
              '</p><div class="nc-meta"><span>' +
              e.f +
              "</span><span>" +
              e.ch +
              "</span></div></div></div>";
          }),
          t("#news-grid").html(a));
      })());
    var b =
      "https://script.google.com/macros/s/AKfycbwtoWzK6crnZpNa4z-eglUks0sV-WTv2sADzDttwqeAAIbpNILLe-4tmwoig8z5iFqzGQ/exec";
    window.SCHEDULE = [];
    var y = {
      Mexico: { disp: "Azteca 7 · TUDN", keys: ["TUDN", "Azteca"] },
      "United States": {
        disp: "FOX",
        keys: "TUDN",
      },
      Brazil: {
        disp: "FOX Sports",
        keys: "FOX Sports",
      },
      Peru: {
        disp: "Movistar",
        keys: "Latina TV",
      },
      Canada: { disp: "CBC · TSN" },
      Chile: { disp: "TNT Sports Chile · Canal 13", keys: [] },
      Ecuador: { disp: "TC Televisión · RTS", keys: [] },
      Uruguay: { disp: "VTV+ · Tenfield", keys: [] },
      Venezuela: { disp: "Televen · VTV", keys: [] },
      Paraguay: { disp: "SNT · Tigo Sports", keys: [] },
      Bolivia: { disp: "Bolivia TV · Red Uno", keys: [] },
    };
    !(function () {
      function a(a) {
        var e = "";
        (a.slice(0, 4).forEach(function (t, a) {
          var p = (t.player && t.player.name) || t.name || "?",
            i = (t.team && (t.team.name || t.team.shortName)) || "",
            s = T[i] || "",
            r = t.numberOfGoals || t.goals || 0;
          e +=
            '<div style="display:flex;align-items:center;gap:8px;padding:7px 14px;border-bottom:1px solid #1a1a1a"><span style="font-family:Oswald,sans-serif;font-size:12px;color:#555;min-width:16px">' +
            (a + 1) +
            '</span><span style="flex:1;font-size:13px;color:#ccc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' +
            s +
            " " +
            p +
            '</span><span style="font-family:Oswald,sans-serif;font-size:13px;font-weight:700;color:var(--green)">' +
            r +
            '\n          <span class="goal-icon">\n            <img src="/assets/images/golden-ball.png" alt="Goles">\n          </span>\n          </div>';
        }),
          t("#goles-list").html(
            e ||
              '<div style="padding:14px;color:#555;font-size:13px;text-align:center">Sin goles registrados aún</div>',
          ));
      }
      function e() {
        t.ajax({
          url: b + "?action=scorers",
          success: function (t) {
            t.scorers && t.scorers.length ? a(t.scorers) : p();
          },
          error: p,
        });
      }
      function p() {
        var e = function (t) {
            return t < 10 ? "0" + t : "" + t;
          },
          p = new Date(),
          i = p.getFullYear() + "" + e(p.getMonth() + 1) + e(p.getDate());
        fetch(
          "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-" +
            i +
            "&limit=200",
        )
          .then(function (t) {
            return t.json();
          })
          .then(function (e) {
            var p = {};
            (e.events || []).forEach(function (t) {
              ((t.competitions || [])[0] || {}).details &&
                ((t.competitions || [])[0].details || []).forEach(function (t) {
                  var a = (t.type && t.type.text) || "";
                  if (
                    -1 !== a.indexOf("Goal") &&
                    -1 === a.indexOf("Own") &&
                    -1 === a.indexOf("Missed")
                  ) {
                    var e = (t.athletesInvolved || [])[0];
                    e &&
                      e.displayName &&
                      ((p[e.displayName] = p[e.displayName] || {
                        name: e.displayName,
                        goals: 0,
                      }),
                      p[e.displayName].goals++);
                  }
                });
            });
            var i = Object.keys(p)
              .map(function (t) {
                return p[t];
              })
              .sort(function (t, a) {
                return a.goals - t.goals;
              });
            i.length
              ? a(
                  i.map(function (t) {
                    return {
                      name: t.name,
                      team: { name: "" },
                      numberOfGoals: t.goals,
                    };
                  }),
                )
              : t("#goles-list").html(
                  '<div style="padding:14px;color:#555;font-size:13px;text-align:center">Sin goles registrados aún</div>',
                );
          })
          .catch(function () {
            t("#goles-list").html(
              '<div style="padding:14px;color:#555;font-size:13px;text-align:center">Sin datos disponibles</div>',
            );
          });
      }
      t(function () {
        (setTimeout(e, 700), setInterval(e, 3e5));
      });
    })();
    var S = [
        {
          g: "A",
          t: [
            { f: "&#127487;&#127485;", n: "México" },
            { f: "&#127487;&#127462;", n: "Sudáfrica" },
            { f: "&#127472;&#127479;", n: "Corea Sur" },
            { f: "&#127464;&#127487;", n: "Chequia" },
          ],
        },
        {
          g: "B",
          t: [
            { f: "&#127464;&#127462;", n: "Canadá" },
            { f: "&#127463;&#127462;", n: "Bosnia" },
            { f: "&#127478;&#127462;", n: "Catar" },
            { f: "&#127464;&#127469;", n: "Suiza" },
          ],
        },
        {
          g: "C",
          t: [
            { f: "&#127463;&#127479;", n: "Brasil" },
            { f: "&#127474;&#127462;", n: "Marruecos" },
            { f: "&#127469;&#127481;", n: "Haití" },
            {
              f: "&#127988;&#917607;&#917602;&#917619;&#917603;&#917620;&#917607;&#917631;",
              n: "Escocia",
            },
          ],
        },
        {
          g: "D",
          t: [
            { f: "&#127482;&#127480;", n: "USA" },
            { f: "&#127477;&#127486;", n: "Paraguay" },
            { f: "&#127462;&#127482;", n: "Australia" },
            { f: "&#127481;&#127479;", n: "Turquía" },
          ],
        },
        {
          g: "E",
          t: [
            { f: "&#127465;&#127466;", n: "Alemania" },
            { f: "&#127464;&#127484;", n: "Curazao" },
            { f: "&#127464;&#127470;", n: "C. Marfil" },
            { f: "&#127466;&#127464;", n: "Ecuador" },
          ],
        },
        {
          g: "F",
          t: [
            { f: "&#127475;&#127473;", n: "P. Bajos" },
            { f: "&#127471;&#127477;", n: "Japón" },
            { f: "&#127480;&#127466;", n: "Suecia" },
            { f: "&#127481;&#127475;", n: "Túnez" },
          ],
        },
        {
          g: "G",
          t: [
            { f: "&#127463;&#127466;", n: "Bélgica" },
            { f: "&#127466;&#127468;", n: "Egipto" },
            { f: "&#127470;&#127479;", n: "Irán" },
            { f: "&#127475;&#127487;", n: "N. Zelanda" },
          ],
        },
        {
          g: "H",
          t: [
            { f: "&#127466;&#127480;", n: "España" },
            { f: "&#127464;&#127483;", n: "Cabo Verde" },
            { f: "&#127480;&#127462;", n: "Arabia Saudita" },
            { f: "&#127482;&#127486;", n: "Uruguay" },
          ],
        },
        {
          g: "I",
          t: [
            { f: "&#127467;&#127479;", n: "Francia" },
            { f: "&#127480;&#127475;", n: "Senegal" },
            { f: "&#127470;&#127478;", n: "Irak" },
            { f: "&#127475;&#127476;", n: "Noruega" },
          ],
        },
        {
          g: "J",
          t: [
            { f: "&#127462;&#127479;", n: "Argentina" },
            { f: "&#127465;&#127487;", n: "Argelia" },
            { f: "&#127462;&#127481;", n: "Austria" },
            { f: "&#127471;&#127476;", n: "Jordania" },
          ],
        },
        {
          g: "K",
          t: [
            { f: "&#127477;&#127481;", n: "Portugal" },
            { f: "&#127464;&#127465;", n: "DR Congo" },
            { f: "&#127482;&#127487;", n: "Uzbekistán" },
            { f: "&#127464;&#127476;", n: "Colombia" },
          ],
        },
        {
          g: "L",
          t: [
            {
              f: "&#127988;&#917607;&#917602;&#917605;&#917614;&#917607;&#917631;",
              n: "Inglaterra",
            },
            { f: "&#127469;&#127479;", n: "Croacia" },
            { f: "&#127468;&#127469;", n: "Ghana" },
            { f: "&#127477;&#127462;", n: "Panamá" },
          ],
        },
      ],
      T = {
        "United States": "&#127482;&#127480;",
        USA: "&#127482;&#127480;",
        Canada: "&#127464;&#127462;",
        Mexico: "&#127487;&#127485;",
        Scotland:
          "&#127988;&#917607;&#917602;&#917619;&#917603;&#917620;&#917607;&#917631;",
        Panama: "&#127477;&#127462;",
        Belgium: "&#127463;&#127466;",
        Uruguay: "&#127482;&#127486;",
        Jamaica: "&#127471;&#127474;",
        Argentina: "&#127462;&#127479;",
        Chile: "&#127464;&#127473;",
        Nigeria: "&#127475;&#127468;",
        Senegal: "&#127480;&#127475;",
        Brazil: "&#127463;&#127479;",
        Ecuador: "&#127466;&#127464;",
        "South Korea": "&#127472;&#127479;",
        "Korea Republic": "&#127472;&#127479;",
        Croatia: "&#127469;&#127479;",
        Peru: "&#127477;&#127466;",
        France: "&#127467;&#127479;",
        Netherlands: "&#127475;&#127473;",
        Australia: "&#127462;&#127482;",
        Colombia: "&#127464;&#127476;",
        Germany: "&#127465;&#127466;",
        Spain: "&#127466;&#127480;",
        Japan: "&#127471;&#127477;",
        Portugal: "&#127477;&#127481;",
        Morocco: "&#127474;&#127462;",
        "Saudi Arabia": "&#127480;&#127462;",
        Cameroon: "&#127464;&#127474;",
        England:
          '\n      <svg class="team-flag-placeholder" viewBox="0 0 24 24" aria-hidden="true">\n        <path d="M8 3h8v4a4 4 0 0 1-8 0V3z"></path>\n        <path d="M8 5H5a3 3 0 0 0 3 5"></path>\n        <path d="M16 5h3a3 3 0 0 1-3 5"></path>\n        <path d="M12 11v5"></path>\n        <path d="M9 21h6"></path>\n        <path d="M10 16h4"></path>\n      </svg>\n    ',
        Serbia: "&#127479;&#127480;",
        Ghana: "&#127468;&#127469;",
        "Costa Rica": "&#127464;&#127479;",
        Turkey: "&#127481;&#127479;",
        Turkiye: "&#127481;&#127479;",
        Denmark: "&#127465;&#127472;",
        "South Africa": "&#127487;&#127462;",
        Bolivia: "&#127463;&#127476;",
        "IR Iran": "&#127470;&#127479;",
        Iran: "&#127470;&#127479;",
        Uzbekistan: "&#127482;&#127487;",
        "China PR": "&#127464;&#127475;",
        China: "&#127464;&#127475;",
        Venezuela: "&#127483;&#127466;",
        Switzerland: "&#127464;&#127469;",
        Austria: "&#127462;&#127481;",
        "Cote d'Ivoire": "&#127464;&#127470;",
        "Ivory Coast": "&#127464;&#127470;",
        Honduras: "&#127469;&#127475;",
        Poland: "&#127477;&#127473;",
        "Czech Republic": "&#127464;&#127487;",
        Czechia: "&#127464;&#127487;",
        Romania: "&#127479;&#127476;",
        Paraguay: "&#127477;&#127486;",
        "Bosnia and Herzegovina": "&#127463;&#127462;",
        Qatar: "&#127478;&#127462;",
        Haiti: "&#127469;&#127481;",
        Curacao: "&#127464;&#127484;",
        Sweden: "&#127480;&#127466;",
        Tunisia: "&#127481;&#127475;",
        Egypt: "&#127466;&#127468;",
        "New Zealand": "&#127475;&#127487;",
        Iraq: "&#127470;&#127478;",
        Norway: "&#127475;&#127476;",
        Algeria: "&#127465;&#127487;",
        Jordan: "&#127471;&#127476;",
        "DR Congo": "&#127464;&#127465;",
        "Congo DR": "&#127464;&#127465;",
        "Cape Verde": "&#127464;&#127483;",
      },
      _ = {
        "United States": "USA",
        Canada: "Canadá",
        Mexico: "México",
        Scotland: "Escocia",
        Panama: "Panamá",
        Belgium: "Bélgica",
        Uruguay: "Uruguay",
        Jamaica: "Jamaica",
        Argentina: "Argentina",
        Chile: "Chile",
        Nigeria: "Nigeria",
        Senegal: "Senegal",
        Brazil: "Brasil",
        Ecuador: "Ecuador",
        "South Korea": "Corea Sur",
        "Korea Republic": "Corea Sur",
        Croatia: "Croacia",
        Peru: "Perú",
        France: "Francia",
        Netherlands: "P. Bajos",
        Australia: "Australia",
        Colombia: "Colombia",
        Germany: "Alemania",
        Spain: "España",
        Japan: "Japón",
        Portugal: "Portugal",
        Morocco: "Marruecos",
        "Saudi Arabia": "Arabia Saudita",
        Cameroon: "Camerún",
        England: "Inglaterra",
        Serbia: "Serbia",
        Ghana: "Ghana",
        "Costa Rica": "Costa Rica",
        Turkey: "Turquía",
        Turkiye: "Turquía",
        Denmark: "Dinamarca",
        "South Africa": "Sudáfrica",
        Bolivia: "Bolivia",
        "IR Iran": "Irán",
        Iran: "Irán",
        Uzbekistan: "Uzbekistán",
        "China PR": "China",
        China: "China",
        Venezuela: "Venezuela",
        Switzerland: "Suiza",
        Austria: "Austria",
        "Cote d'Ivoire": "Costa de Marfil",
        "Ivory Coast": "Costa de Marfil",
        Honduras: "Honduras",
        Poland: "Polonia",
        "Czech Republic": "Rep. Checa",
        Czechia: "Rep. Checa",
        Romania: "Rumanía",
        Paraguay: "Paraguay",
        "Bosnia and Herzegovina": "Bosnia",
        Qatar: "Catar",
        Haiti: "Haití",
        Curacao: "Curazao",
        Sweden: "Suecia",
        Tunisia: "Túnez",
        Egypt: "Egipto",
        "New Zealand": "N. Zelanda",
        Iraq: "Irak",
        Norway: "Noruega",
        Algeria: "Argelia",
        Jordan: "Jordania",
        "DR Congo": "DR Congo",
        "Congo DR": "DR Congo",
        "Cape Verde": "Cabo Verde",
      };
    (!(function () {
      var a = 0,
        e = "wc26_st_v1";
      function p(e) {
        var p = e[Math.min(a, e.length - 1)];
        if (p) {
          var i = p.t.slice().sort(function (t, a) {
              if (a.pts !== t.pts) return a.pts - t.pts;
              var e = t.gf - t.gc,
                p = a.gf - a.gc;
              return p !== e ? p - e : a.gf - t.gf;
            }),
            s = "";
          (t.each(i, function (t, a) {
            s +=
              "<tr" +
              (t < 2 ? ' class="qualify"' : "") +
              "><td>" +
              (t + 1) +
              '</td><td><span class="st-team"><span>' +
              a.f +
              "</span>" +
              a.n +
              "</span></td><td>" +
              (a.j || 0) +
              "</td><td>" +
              (a.g || 0) +
              "</td><td>" +
              (a.e || 0) +
              "</td><td>" +
              (a.p || 0) +
              "</td><td>" +
              (a.gf || 0) +
              "</td><td>" +
              (a.gc || 0) +
              '</td><td class="st-pts">' +
              (a.pts || 0) +
              "</td></tr>";
          }),
            t("#st-tbody").html(s));
        }
      }
      function i() {
        var i, s;
        ((i = function (e) {
          var i,
            s = e
              ? (function (a) {
                  var e = [];
                  return (
                    t.each(a.standings || [], function (a, p) {
                      if ("TOTAL" === p.type) {
                        var i = (p.group || "").replace("GROUP_", "");
                        if (i) {
                          var s = t.map(p.table || [], function (t) {
                            var a = t.team.name;
                            return {
                              f: T[a] || "&#127988;",
                              n: _[a] || t.team.shortName || a,
                              j: t.playedGames,
                              g: t.won,
                              e: t.draw,
                              p: t.lost,
                              gf: t.goalsFor,
                              gc: t.goalsAgainst,
                              pts: t.points,
                            };
                          });
                          e.push({ g: i, t: s });
                        }
                      }
                    }),
                    e.sort(function (t, a) {
                      return t.g > a.g ? 1 : -1;
                    }),
                    e.length ? e : null
                  );
                })(e)
              : null;
          ((function (e) {
            var i = "";
            (t.each(e, function (t, e) {
              i +=
                '<button data-i="' +
                t +
                '"' +
                (t === a ? ' class="on"' : "") +
                ">" +
                e.g +
                "</button>";
            }),
              t("#standings-tabs").html(i),
              t("#standings-tabs button").on("click", function () {
                ((a = parseInt(t(this).data("i"))),
                  t("#standings-tabs button").removeClass("on"),
                  t(this).addClass("on"),
                  p(e));
              }));
          })((i = s || S)),
            p(i));
        }),
          (s = (function () {
            try {
              var t = JSON.parse(sessionStorage.getItem(e) || "null");
              if (t && Date.now() - t.ts < 3e5) return t.d;
            } catch (t) {}
            return null;
          })())
            ? i(s)
            : t.ajax({
                url: b + "?action=standings",
                success: function (t) {
                  (!(function (t) {
                    try {
                      sessionStorage.setItem(
                        e,
                        JSON.stringify({ ts: Date.now(), d: t }),
                      );
                    } catch (t) {}
                  })(t),
                    i(t));
                },
                error: function () {
                  i(null);
                },
              }));
      }
      (i(), setInterval(i, 3e5), (window._stLoad = i));
    })(),
      (function () {
        var a = "wc26_bk_v1",
          e = {
            ROUND_OF_32: "Ronda Eliminatoria (16 equipos)",
            ROUND_OF_16: "Octavos de Final",
            QUARTER_FINAL: "Cuartos de Final",
            SEMI_FINAL: "Semifinal",
            FINAL: "Final",
            THIRD_PLACE: "3er Puesto",
          },
          p = {
            ROUND_OF_32: 1,
            ROUND_OF_16: 2,
            QUARTER_FINAL: 3,
            SEMI_FINAL: 4,
            THIRD_PLACE: 5,
            FINAL: 6,
          };
        function i(t) {
          return (
            T[t] ||
            '\n    <svg class="team-flag-placeholder" viewBox="0 0 24 24" aria-hidden="true">\n      <path d="M8 3h8v4a4 4 0 0 1-8 0V3z"></path>\n      <path d="M8 5H5a3 3 0 0 0 3 5"></path>\n      <path d="M16 5h3a3 3 0 0 1-3 5"></path>\n      <path d="M12 11v5"></path>\n      <path d="M9 21h6"></path>\n      <path d="M10 16h4"></path>\n    </svg>\n  '
          );
        }
        function s(t) {
          return _[t] || t || "?";
        }
        function r(a) {
          if (a && a.length) {
            var r = a.filter(function (t) {
              if ("GROUP_STAGE" === t.stage) return !1;
              if (!e[t.stage] && "KNOCKOUT" !== t.stage) return !1;
              var a = t.homeTeam && t.homeTeam.name,
                p = t.awayTeam && t.awayTeam.name;
              return (
                (a && "TBD" !== a && "?" !== a) ||
                (p && "TBD" !== p && "?" !== p)
              );
            });
            if (r.length) {
              var o = {};
              r.forEach(function (t) {
                (o[t.stage] = o[t.stage] || []).push(t);
              });
              var n = Object.keys(o).sort(function (t, a) {
                  return (p[t] || 9) - (p[a] || 9);
                }),
                l = "";
              (n.forEach(function (t) {
                ((l +=
                  '<div class="bk-round"><div class="bk-round-hdr">' +
                  e[t] +
                  "</div>"),
                  o[t].forEach(function (t) {
                    var a,
                      e = s(t.homeTeam && t.homeTeam.name),
                      p = s(t.awayTeam && t.awayTeam.name),
                      r = i(t.homeTeam && t.homeTeam.name),
                      o = i(t.awayTeam && t.awayTeam.name),
                      n = t.status,
                      c = t.score && t.score.fullTime,
                      m = "IN_PLAY" === n || "PAUSED" === n,
                      h = "FINISHED" === n;
                    a =
                      h && c
                        ? '<div class="bk-score">' +
                          (null !== c.home ? c.home : "?") +
                          " - " +
                          (null !== c.away ? c.away : "?") +
                          "</div>"
                        : m && c
                          ? '<div class="bk-live-dot">&#9679; EN VIVO</div><div class="bk-score">' +
                            (c.home || 0) +
                            " - " +
                            (c.away || 0) +
                            "</div>"
                          : '<div class="bk-time">' +
                            (function (t) {
                              try {
                                return new Date(t).toLocaleTimeString("es", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  timeZone: "America/Lima",
                                });
                              } catch (t) {
                                return "--:--";
                              }
                            })(t.utcDate) +
                            "</div>";
                    var v = h && c && c.home > c.away ? " bk-winner" : "",
                      u = h && c && c.away > c.home ? " bk-winner" : "",
                      d = !e || "?" === e,
                      f = !p || "?" === p;
                    l +=
                      '<div class="bk-match"><div class="bk-team' +
                      (d ? " bk-tbd" : v) +
                      '"><span>' +
                      r +
                      "</span><span>" +
                      (d ? "Por definir" : e) +
                      '</span></div><div class="bk-mid">' +
                      a +
                      '</div><div class="bk-team away' +
                      (f ? " bk-tbd" : u) +
                      '"><span>' +
                      o +
                      "</span><span>" +
                      (f ? "Por definir" : p) +
                      "</span></div></div>";
                  }),
                  (l += "</div>"));
              }),
                t("#bracket-wrap").html(l));
            } else
              t("#bracket-wrap").html(
                '<div style="padding:12px;text-align:center;color:#555;font-size:13px">Fase de grupos en curso</div>',
              );
          } else
            t("#bracket-wrap").html(
              '<div style="padding:12px;text-align:center;color:#555;font-size:13px">Sin partidos eliminatorios aún</div>',
            );
        }
        function o() {
          var e = (function () {
            try {
              var t = JSON.parse(sessionStorage.getItem(a) || "null");
              if (t && Date.now() - t.ts < 12e4) return t.d;
            } catch (t) {}
            return null;
          })();
          e
            ? r(e)
            : (function (a) {
                var e = "wc26_matches_v1";
                try {
                  var p = JSON.parse(sessionStorage.getItem(e) || "null");
                  if (p) {
                    var i = p.d.some(function (t) {
                      var a = t.status;
                      return "IN_PLAY" === a || "LIVE" === a || "PAUSED" === a;
                    });
                    if (Date.now() - p.ts < (i ? 6e4 : 9e5)) return void a(p.d);
                  }
                } catch (t) {}
                function s(t) {
                  fetch(
                    "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-20260727&limit=200",
                  )
                    .then(function (t) {
                      return t.json();
                    })
                    .then(function (a) {
                      var e = (a.events || []).map(function (t) {
                        var a,
                          e,
                          p =
                            (t.status && t.status.type && t.status.type.name) ||
                            "",
                          i =
                            "STATUS_IN_PROGRESS" === p
                              ? "IN_PLAY"
                              : "STATUS_HALFTIME" === p
                                ? "PAUSED"
                                : "STATUS_FINAL" === p
                                  ? "FINISHED"
                                  : "SCHEDULED",
                          s = (t.competitions || [])[0] || {},
                          r =
                            (s.competitors || []).find(function (t) {
                              return "home" === t.homeAway;
                            }) || {},
                          o =
                            (s.competitors || []).find(function (t) {
                              return "away" === t.homeAway;
                            }) || {};
                        return {
                          utcDate: t.date,
                          status: i,
                          stage:
                            ((a = t.date),
                            (e = new Date(a).getTime()),
                            e < new Date("2026-07-05").getTime()
                              ? "GROUP_STAGE"
                              : e < new Date("2026-07-12").getTime()
                                ? "ROUND_OF_32"
                                : e < new Date("2026-07-18").getTime()
                                  ? "ROUND_OF_16"
                                  : e < new Date("2026-07-22").getTime()
                                    ? "QUARTER_FINAL"
                                    : e < new Date("2026-07-25").getTime()
                                      ? "SEMI_FINAL"
                                      : "FINAL"),
                          homeTeam: {
                            name: (r.team || {}).displayName || "",
                            shortName: (r.team || {}).abbreviation || "",
                          },
                          awayTeam: {
                            name: (o.team || {}).displayName || "",
                            shortName: (o.team || {}).abbreviation || "",
                          },
                          score: {
                            fullTime: {
                              home: null != r.score ? parseInt(r.score) : null,
                              away: null != o.score ? parseInt(o.score) : null,
                            },
                          },
                        };
                      });
                      t(e.length ? e : null);
                    })
                    .catch(function () {
                      t(null);
                    });
                }
                var r = {
                  LAST_32: "ROUND_OF_32",
                  LAST_16: "ROUND_OF_16",
                  QUARTER_FINALS: "QUARTER_FINAL",
                  SEMI_FINALS: "SEMI_FINAL",
                  THIRD_PLACE: "THIRD_PLACE",
                };
                t.ajax({
                  url: b + "?action=matches",
                  success: function (t) {
                    var p = (t.matches || []).map(function (t) {
                      return Object.assign({}, t, {
                        stage: r[t.stage] || t.stage,
                      });
                    });
                    if (
                      p.some(function (t) {
                        return "GROUP_STAGE" !== t.stage;
                      })
                    ) {
                      try {
                        sessionStorage.setItem(
                          e,
                          JSON.stringify({ ts: Date.now(), d: p }),
                        );
                      } catch (t) {}
                      a(p);
                    } else s(a);
                  },
                  error: function () {
                    s(a);
                  },
                });
              })(function (e) {
                e
                  ? ((function (t) {
                      try {
                        sessionStorage.setItem(
                          a,
                          JSON.stringify({ ts: Date.now(), d: t }),
                        );
                      } catch (t) {}
                    })(e),
                    r(e))
                  : t("#bracket-wrap").html(
                      '<div style="padding:12px;text-align:center;color:#555;font-size:13px">Sin datos disponibles</div>',
                    );
              });
        }
        t(function () {
          (setTimeout(o, 800), setInterval(o, 12e4));
        });
      })(),
      (function () {
        if ("/" === location.pathname) {
          for (
            var t = Date.now(), a = [], e = {}, p = 0;
            p < SCHEDULE.length;
            p++
          ) {
            var i = SCHEDULE[p],
              s = new Date(i.start).getTime();
            if (t >= s && t < s + 6e4 * i.dur && i.match)
              for (var r = 0; r < i.match.length; r++)
                for (
                  var o = i.match[r].toLowerCase(), n = 0;
                  n < CANALES.length;
                  n++
                )
                  CANALES[n].n.toLowerCase().indexOf(o) >= 0 && l(CANALES[n]);
          }
          for (p = 0; p < CANALES.length; p++)
            CANALES[p].m && "futbol" === CANALES[p].cat && l(CANALES[p]);
          for (p = 0; p < CANALES.length; p++) l(CANALES[p]);
          a.length && d(a[0].ch);
        }
        function l(t) {
          if (t.s)
            for (var p = 0; p < t.s.length; p++) {
              var i = t.s[p];
              if (i.url && "m3u8" === i.tipo) {
                var s = t.n + "||" + p;
                e[s] || ((e[s] = 1), a.push({ ch: t, src: i, idx: p }));
              }
            }
        }
      })());
    var A = t(".page").first(),
      C = ["canales", "grupos", "resultados", "horarios"];
    function E(a) {
      var e,
        p,
        i = (a || "").replace(/^#/, "");
      (t("header nav a,#mob-menu a").removeClass("on"),
        i && -1 !== C.indexOf(i)
          ? (A.hide(),
            t(".page-view").hide(),
            t("#view-" + i).show(),
            t(
              'header nav a[href$="#' +
                i +
                '"],#mob-menu a[href$="#' +
                i +
                '"]',
            ).addClass("on"),
            "grupos" === i
              ? (function () {
                  if (!t("#grupos-grid").data("built")) {
                    t("#grupos-grid").data("built", !0);
                    var a = "";
                    (t.each(S, function (e, p) {
                      ((a +=
                        '<div class="grupo-card"><div class="g-hdr">GRUPO ' +
                        p.g +
                        "</div><table><thead><tr><th></th><th>Equipo</th><th>J</th><th>G</th><th>E</th><th>P</th><th>Pts</th></tr></thead><tbody>"),
                        t.each(p.t, function (t, e) {
                          a +=
                            "<tr><td>" +
                            (t + 1) +
                            "</td><td>" +
                            e.f +
                            " " +
                            e.n +
                            "</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>";
                        }),
                        (a += "</tbody></table></div>"));
                    }),
                      t("#grupos-grid").html(a));
                  }
                })()
              : "horarios" === i
                ? ((e = Date.now()),
                  (p = ""),
                  t.each(SCHEDULE, function (t, a) {
                    var i,
                      s = new Date(a.start).getTime(),
                      r = s + 6e4 * a.dur;
                    if (e >= s && e < r)
                      i = '<span class="hor-live-badge">EN VIVO</span>';
                    else if (e >= r) i = '<span style="color:#aaa">FIN</span>';
                    else {
                      var o = new Date(s);
                      i =
                        o.toLocaleDateString("es", {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                        }) +
                        " &middot; " +
                        o.toLocaleTimeString("es", {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: !0,
                        });
                    }
                    p +=
                      '<div class="hor-item"><div><div class="hor-teams">' +
                      a.t +
                      '</div><div class="hor-ch">' +
                      a.ch +
                      '</div></div><div class="hor-time">' +
                      i +
                      "</div></div>";
                  }),
                  p ||
                    (p =
                      '<p style="color:#555;padding:20px 0">Próximamente...</p>'),
                  t("#horarios-list").html(p))
                : "resultados" === i
                  ? (function () {
                      var a = "",
                        e = Date.now(),
                        p = SCHEDULE.filter(function (t) {
                          return e >= new Date(t.start).getTime() + 6e4 * t.dur;
                        });
                      (p.length
                        ? t.each(p.slice().reverse(), function (t, e) {
                            a +=
                              '<div class="hor-item"><div><div class="hor-teams">' +
                              e.t +
                              '</div></div><div class="hor-time"><span style="color:#aaa">FIN</span></div></div>';
                          })
                        : (a =
                            '<p style="color:#555;padding:20px 0">&#127942; Los resultados aparecerán aquí una vez comiencen los partidos.</p>'),
                        t("#resultados-list").html(a));
                    })()
                  : "canales" === i &&
                    (t("#pv-strip-mundial").data("built") ||
                      (t("#pv-strip-mundial").data("built", !0),
                      q("#pv-strip-mundial", !0),
                      q("#pv-strip-all2", !1))),
            window.scrollTo(0, 0))
          : (A.show(),
            t(".page-view").hide(),
            t('header nav a[href="/"],#mob-menu a[href="/"]').addClass("on")));
    }
    (t(window).on("hashchange", function () {
      E(location.hash);
    }),
      E(location.hash));
    var x,
      N = {
        WC: "",
        CL: "ESPN",
        PL: "ESPN",
        PD: "ESPN",
        BL1: "ESPN",
        SA: "ESPN",
        FL1: "ESPN",
        ELC: "ESPN3",
        EC: "ESPN",
        DED: "ESPN",
        BSA: "ESPN/DSports",
        PPL: "ESPN",
      },
      I = ((x = new Date()).setHours(0, 0, 0, 0), x),
      L = {},
      k = !1;
    function P(t) {
      return t < 10 ? "0" + t : "" + t;
    }
    function z(t) {
      for (var a = new Date(t).getTime(), e = 0; e < SCHEDULE.length; e++)
        if (Math.abs(new Date(SCHEDULE[e].start).getTime() - a) < 18e5)
          return SCHEDULE[e];
      return null;
    }
    var M = [
      "international",
      "copa libertadores",
      "copa sudamericana",
      "concacaf",
      "mls",
      "liga mx",
      "apertura",
      "clausura",
      "liga 1",
      "primera division",
      "primera a",
      "nations league",
      "euro",
      "africa cup",
      "gold cup",
      "world cup",
      "mundial",
      "bundesliga",
      "premier league",
      "la liga",
      "serie a",
      "ligue 1",
      "eredivisie",
      "primera liga",
      "champions",
      "europa league",
      "conmebol",
      "amistoso",
      "friendly",
    ];
    function U(t) {
      return (t || "").toLowerCase().replace(/[^a-z]/g, "");
    }
    function R() {
      var a = (function (t) {
        return t.toISOString().slice(0, 10);
      })(I);
      if (
        (t("#today-lbl").text(
          "Partidos De " +
            (function (t) {
              var a = new Date();
              a.setHours(0, 0, 0, 0);
              var e = Math.round((t - a) / 864e5);
              return 0 === e
                ? "HOY"
                : 1 === e
                  ? "MAÑANA"
                  : -1 === e
                    ? "AYER"
                    : ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"][
                        t.getDay()
                      ] +
                      " " +
                      t.getDate() +
                      " " +
                      [
                        "Ene",
                        "Feb",
                        "Mar",
                        "Abr",
                        "May",
                        "Jun",
                        "Jul",
                        "Ago",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dic",
                      ][t.getMonth()];
            })(I),
        ),
        L[a])
      )
        V(L[a]);
      else {
        t("#today-list").html(
          '<div style="padding:14px;text-align:center;color:#555;font-size:13px">Cargando...</div>',
        );
        var e = a.replace(/-/g, ""),
          p = fetch(
            "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=" +
              e,
          )
            .then(function (t) {
              return t.json();
            })
            .catch(function () {
              return { events: [] };
            }),
          i = fetch(
            "https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=" +
              a +
              "&s=Soccer",
          )
            .then(function (t) {
              return t.json();
            })
            .catch(function () {
              return { events: null };
            });
        Promise.all([p, i]).then(function (t) {
          var e = t[0],
            p = t[1],
            i = [];
          (e.events || []).forEach(function (t) {
            var e = (t.competitions && t.competitions[0]) || {},
              p = e.competitors || [],
              s =
                p.filter(function (t) {
                  return "home" === t.homeAway;
                })[0] ||
                p[0] ||
                {},
              r =
                p.filter(function (t) {
                  return "away" === t.homeAway;
                })[1] ||
                p[1] ||
                {},
              o = (s.team && s.team.displayName) || "?",
              n = (r.team && r.team.displayName) || "?",
              l = e.startDate || t.date || a + "T00:00:00Z",
              c =
                (e.status && e.status.type && e.status.type.name) ||
                "STATUS_SCHEDULED",
              m =
                "STATUS_FINAL" === c
                  ? "FINISHED"
                  : "STATUS_IN_PROGRESS" === c
                    ? "IN_PLAY"
                    : "SCHEDULED",
              h = parseFloat(s.score),
              v = parseFloat(r.score),
              u = z(l),
              d = [];
            if (u && u.ch) d = [u.ch];
            else {
              var f = y[o],
                D = y[n];
              (f && d.push(f.disp),
                !D || (f && D.disp === f.disp) || d.push(D.disp));
            }
            i.push({
              utcDate: l,
              homeTeam: { name: o, shortName: o },
              awayTeam: { name: n, shortName: n },
              competition: { code: "WC", name: "FIFA World Cup 2026" },
              status: m,
              score: {
                fullTime: {
                  home: isNaN(h) ? null : h,
                  away: isNaN(v) ? null : v,
                },
              },
              _chs: d,
            });
          });
          var s = {};
          (i.forEach(function (t) {
            s[U(t.homeTeam.name) + "_" + U(t.awayTeam.name)] = 1;
          }),
            (p.events || []).forEach(function (t) {
              if (
                (function (t) {
                  for (
                    var a = (t || "").toLowerCase(), e = 0;
                    e < M.length;
                    e++
                  )
                    if (-1 !== a.indexOf(M[e])) return !0;
                  return !1;
                })(t.strLeague)
              ) {
                var e = t.strHomeTeam || "?",
                  p = t.strAwayTeam || "?",
                  r = U(e) + "_" + U(p);
                if (!s[r]) {
                  s[r] = 1;
                  var o =
                      t.strTimestamp ||
                      a + "T" + (t.strTime || "00:00:00").replace(/\+.*/, ""),
                    n =
                      -1 === o.indexOf("Z") && -1 === o.indexOf("+")
                        ? o + "Z"
                        : o,
                    l = t.strStatus || "NS",
                    c =
                      "FT" === l || "AET" === l || "PEN" === l
                        ? "FINISHED"
                        : "NS" === l
                          ? "SCHEDULED"
                          : "IN_PLAY",
                    m = parseInt(t.intHomeScore, 10),
                    h = parseInt(t.intAwayScore, 10),
                    v = [],
                    u = y[e],
                    d = y[p];
                  (u && v.push(u.disp),
                    !d || (u && d.disp === u.disp) || v.push(d.disp),
                    i.push({
                      utcDate: n,
                      homeTeam: { name: e, shortName: e },
                      awayTeam: { name: p, shortName: p },
                      competition: {
                        code: (t.strLeague || "").substring(0, 8).toUpperCase(),
                        name: t.strLeague || "",
                      },
                      status: c,
                      score: {
                        fullTime: {
                          home: isNaN(m) ? null : m,
                          away: isNaN(h) ? null : h,
                        },
                      },
                      _chs: v,
                    }));
                }
              }
            }),
            (L[a] = i),
            V(i));
        });
      }
    }
    function V(a) {
      if (a.length) {
        var e = a.slice().sort(function (t, a) {
            return "WC" === t.competition.code && "WC" !== a.competition.code
              ? -1
              : ("WC" === a.competition.code && "WC" !== t.competition.code) ||
                  t.utcDate > a.utcDate
                ? 1
                : -1;
          }),
          p = "";
        (e.forEach(function (t) {
          var a = new Date(t.utcDate),
            e = P(a.getHours()) + ":" + P(a.getMinutes()),
            i =
              _[t.homeTeam.name] ||
              t.homeTeam.shortName ||
              t.homeTeam.name ||
              "?",
            s =
              _[t.awayTeam.name] ||
              t.awayTeam.shortName ||
              t.awayTeam.name ||
              "?",
            r = T[t.homeTeam.name] || "",
            o = T[t.awayTeam.name] || "",
            n = t.status,
            l = "IN_PLAY" === n || "PAUSED" === n,
            c = "FINISHED" === n,
            m = "";
          (l || c) &&
            t.score &&
            null !== t.score.fullTime.home &&
            (m = t.score.fullTime.home + "-" + t.score.fullTime.away);
          var h,
            v =
              t._chs && t._chs.length
                ? t._chs.slice(0, 3).join(" / ")
                : "WC" === t.competition.code
                  ? (h = z(t.utcDate))
                    ? h.ch
                    : ""
                  : N[t.competition.code] || t.competition.name || "";
          (v || (v = "DirecTV Sports"),
            (p +=
              '<div style="padding:7px 12px;border-bottom:1px solid #1a1a1a;display:flex;align-items:center;gap:6px;flex-wrap:wrap">'),
            (p +=
              '<span style="font-family:Oswald,sans-serif;font-size:12px;font-weight:700;color:' +
              (l ? "var(--red)" : "#fff") +
              ';min-width:34px">' +
              (l ? "LIVE" : e) +
              "</span>"),
            (p +=
              '<span style="flex:1;font-size:13px;color:#ccc;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' +
              r +
              " " +
              i +
              ' <span style="color:#fbbf24">VS</span> ' +
              s +
              " " +
              o +
              "</span>"),
            m &&
              (p +=
                '<span style="font-family:Oswald,sans-serif;font-size:12px;font-weight:700;color:' +
                (c ? "#666" : "#fff") +
                '">' +
                m +
                "</span>"),
            (p += (function (t) {
              if (!t) return "";
              for (
                var a = t.split(/[\/,]/), e = null, p = 0;
                p < a.length && !e;
                p++
              )
                for (
                  var i = a[p].trim().toLowerCase(), s = 0;
                  s < CANALES.length;
                  s++
                )
                  if (
                    -1 !== CANALES[s].n.toLowerCase().indexOf(i) ||
                    -1 !== i.indexOf(CANALES[s].n.toLowerCase())
                  ) {
                    e = CANALES[s];
                    break;
                  }
              if (e) {
                var r = e.n.replace(/"/g, "&quot;");
                return (
                  '<a href="?ch=' +
                  encodeURIComponent(e.n) +
                  '" class="today-channel-link" data-ch="' +
                  r +
                  '"><span class="channel-dot"></span>' +
                  t +
                  "</a>"
                );
              }
              return '<span class="today-channel-text">' + t + "</span>";
            })(v)),
            (p += "</div>"));
        }),
          t("#today-list").html(p));
      } else
        t("#today-list").html(
          '<div style="padding:14px;text-align:center;color:#555;font-size:13px">Sin partidos.</div>',
        );
    }
    var F = !1;
    function B() {
      F ||
        ((F = !0),
        k ||
          ((k = !0),
          t("#today-prev").on("click", function () {
            ((I = new Date(I.getTime() - 864e5)), R());
          }),
          t("#today-next").on("click", function () {
            ((I = new Date(I.getTime() + 864e5)), R());
          }),
          R()),
        window._stLoad && window._stLoad(),
        document.addEventListener("selectstart", function (t) {
          t.preventDefault();
        }));
    }
    ("loading" === document.readyState
      ? document.addEventListener("DOMContentLoaded", B)
      : B(),
      setTimeout(function () {
        B();
      }, 800));
  })(jQuery));
