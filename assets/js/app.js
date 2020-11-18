(function () {
  jQuery(function ($) {
    $("#carousel").on("slid.bs.carousel", function (transition) {
      $("a[data-target='#carousel']").removeClass("text-dark").addClass("text-muted");
      $("a[data-target='#carousel'][data-slide-to=" + transition.to + "]").removeClass("text-muted").addClass("text-dark");
    });
    $("[data-toggle=popover]").popover();
    $("[data-toggle=tooltip]").tooltip();
  });
})();
