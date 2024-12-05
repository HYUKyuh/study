$(function() {
  $(".search ul li").on("click", function() {
    const a = $(this).attr("class");
    const result = a.substr(4,1);
    const sort = $("#content ul li").sort(function(a,b) {
      if(result == 0) {
        return new Date($(a).find("span.date").text()) <
        new Date($(b).find("span.date").text()) ? -1 :
        new Date($(a).find("span.date").text()) >
        new Date($(b).find("span.date").text()) ? 1 : 0;
      } else if (result == 1) {
        return parseInt (
        $(a).find("span.price").text().replace(/[^0-9]/g,'')) >
        parseInt($(b).find("span.price").text().replace(/[^0-9]/g,'')) ? -1 :
        parseInt($(a).find("span.price").text().replace(/[^0-9]/g,'')) ? 1 : 0;
      } else {
        return parseInt($(a).find("span.price").text().replace(/[^0-9]/g,'')) <
        parseInt($(b).find("span.price").text().replace(/[^0-9]/g,'')) ? -1 :
        parseInt($(a).find("span.price").text().replace(/[^0-9]/g,'')) >
        parseInt($(b).find("span.price").text().replace(/[^0-9]/g,'')) ? 1 : 0;
      }
    });
    $("#content ul").html(sort);
  });
});