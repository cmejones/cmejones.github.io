! function(a) {
  "use strict";
  a("a.page-scroll").bind("click", function(b) {
    var c = a(this);
    a("html, body").stop().animate({
      scrollTop: a(c.attr("href")).offset().top - 50
    }, 1250, "easeInOutExpo"), b.preventDefault()
  }), a("body").scrollspy({
    target: ".navbar-fixed-top",
    offset: 51
  }), a(".navbar-collapse ul li a:not(.dropdown-toggle)").click(function() {
    a(".navbar-toggle:visible").click()
  }), a("h1").fitText(1.2, {
    minFontSize: "35px",
    maxFontSize: "65px"
  }), a("#mainNav").affix({
    offset: {
      top: 100
    }
  }), window.sr = ScrollReveal(), sr.reveal(".sr-icons", {
    duration: 600,
    scale: .3,
    distance: "0px"
  }, 200), sr.reveal(".sr-button", {
    duration: 1e3,
    delay: 200
  }), sr.reveal(".sr-contact", {
    duration: 600,
    scale: .3,
    distance: "0px"
  }, 300)
}(jQuery);
