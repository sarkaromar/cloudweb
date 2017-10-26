! function(a) {
    "use strict";
    var e = a(".is-sticky");
    if (e.length > 0) {
        var s = a(window),
            t = a("#mainnav").offset();
        s.scroll(function() {
            var a = s.scrollTop();
            s.width() > 991 && a > t.top + 4 ? e.hasClass("has-fixed") || e.addClass("has-fixed") : e.hasClass("has-fixed") && e.removeClass("has-fixed")
        })
    }
    var l = a("#slider");
    l.length > 0 && l.carousel({
        interval: 6e3,
        pause: "null"
    });
    var i = a(".has-carousel");
    i.length > 0 && i.each(function() {
        var e = a(this),
            s = e.data("items") ? e.data("items") : 4,
            t = s >= 3 ? 3 : s,
            l = t >= 2 ? 2 : t,
            i = e.data("delay") ? e.data("delay") : 6e3,
            o = e.data("auto") ? !0 : !1,
            r = e.data("loop") ? !0 : !1,
            n = e.data("dots") ? !0 : !1,
            c = e.data("navs") ? !0 : !1;
        e.owlCarousel({
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            items: s,
            loop: r,
            nav: c,
            dots: n,
            margin: 30,
            autoplay: o,
            autoplayTimeout: i,
            autoplaySpeed: 700,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: l
                },
                768: {
                    items: t
                },
                1170: {
                    items: s
                }
            }
        })
    });
    var o = a(".logo-carousel");
    o.length > 0 && o.owlCarousel({
        items: 5,
        loop: !0,
        margin: 30,
        responsive: {
            0: {
                items: 2
            },
            379: {
                items: 3
            },
            720: {
                items: 4
            },
            1280: {
                items: 6
            }
        }
    });
    var r = a(".has-parallax");
    r.length > 0 && r.each(function() {
        a(this).parallaxie({
            speed: .3,
            offset: 0
        })
    });
    var n = window.location.href,
        c = a(".nav li a");
    c.each(function() {
        n === this.href && a(this).closest("li").addClass("active")
    });
    var d = a("#preloader");
    d.length > 0 && a(window).on("load", function() {
        d.children().fadeOut(300), d.delay(150).fadeOut(500), a("body").delay(100).css({
            overflow: "visible"
        })
    });
    var f = a(".scroll-to");
    f.length > 0 && f.on("click", function() {
        return a("html, body").animate({
            scrollTop: a(a.attr(this, "href")).offset().top
        }, 500), !1
    });
    var h = a(".imagebg");
    h.length > 0 && h.each(function() {
        var e = a(this),
            s = e.parent(),
            t = e.data("overlay"),
            l = e.children("img").attr("src"),
            i = "undefined" != typeof t && "" !== t ? t.split("-") : !1;
        "undefined" != typeof l && "" !== l && (s.hasClass("has-bg-image") || s.addClass("has-bg-image"), "" !== i && "dark" === i[0] && (s.hasClass("light") || s.addClass("light")), e.css("background-image", 'url("' + l + '")').addClass("bg-image-loaded"))
    });
    var u = a("#quote-contact-request");
    if (u.length > 0) {
        if (!a().validate || !a().ajaxSubmit) return console.log("quoteForm: jQuery Form or Form Validate not Defined."), !0;
        if (u.length > 0) {
            var v = u.find("select.required"),
                g = u.find(".form-results");
            u.validate({
                invalidHandler: function() {
                    g.slideUp(400)
                },
                submitHandler: function(e) {
                    g.slideUp(400), a(e).ajaxSubmit({
                        target: g,
                        dataType: "json",
                        success: function(s) {
                            var t = "error" === s.result ? "alert-danger" : "alert-success";
                            g.removeClass("alert-danger alert-success").addClass("alert " + t).html(s.message).slideDown(400), "error" !== s.result && a(e).clearForm()
                        }
                    })
                }
            }), v.on("change", function() {
                a(this).valid()
            })
        }
    }
    var m = a(".map-holder");
    if (m.length > 0) {
        new GMaps({
            div: "#gmap",
            lat: -12.043333,
            lng: -77.028333
        });
        m.on("click", function() {
            a(this).children().css("pointer-events", "auto")
        }), m.on("mouseleave", function() {
            a(this).children().css("pointer-events", "none")
        })
    }
}(jQuery);