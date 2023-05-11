$(document)
    .on('click', '.navbar-toggler', () => {
        $('.sm-navbar').slideToggle();
    })
    .on('click', '.navbar-item', () => {
        let isNavbarExpanded = $('.sm-navbar').css('display') !== 'none';
        if (isNavbarExpanded)
            $('.sm-navbar').slideToggle();
    })


!function () {
    var i = "Pn4kpN", a = window, d = document;

    function g() {
        var g = d.createElement("script"), s = "https://www.goftino.com/widget/" + i,
            l = localStorage.getItem("goftino_" + i);
        g.async = !0, g.src = l ? s + "?o=" + l : s;
        d.getElementsByTagName("head")[0].appendChild(g);
    }

    "complete" === d.readyState ? g() : a.attachEvent ? a.attachEvent("onload", g) : a.addEventListener("load", g, !1);
}();

