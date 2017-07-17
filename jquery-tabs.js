'use strict';
!function ($) {
  jQuery.fn.lightTabs = function (contentSelector, numberOfActive) {
    var createTabs = function () {
      var tabs = this;
      var i = 0;

      var showPage = function (selector) {
        $(contentSelector).children("div").hide();
        $(contentSelector).children(selector).show();
        $(tabs).children("li").removeClass("active");
        $(tabs).children("li:has(a[href='" + selector + "'])").addClass("active");
      }

      showPage($(tabs).children("li:eq("+ numberOfActive +")").children('a').attr("href"));

      $(tabs).children("li").click(function (e) {
        e.preventDefault();
        showPage($(this).children('a').attr("href"));
      });
    };
    return this.each(createTabs);
  };
}(jQuery);