$(function(){
  $("select").on("change",function() {
    const ab=$(this).val();
    const $lis = $("ul > li");
    const n = ab.substr(4,1) ;   
   
    const sort = $lis.sort(function(a,b) {
    if (n == 0) {
      location.reload(true);
    } else if(n == 1){
        return new Date($(a).find("span.date").text()) < new Date($(b).find("span.date").text()) ? -1:new Date($(a).find("span.date").text())<new Date($(b).find("span.date").text()) ? 1:0;
    } else if (n == 2) {  /* 내림차순 */
        return parseInt(($(a).find("span.price").text()).replace(/[^0-9]/g,''))>parseInt(($(b).find("span.price").text()).replace(/[^0-9]/g,'')) ? -1:parseInt(($(a).find("span.price").text()).replace(/[^0-9]/g,''))<parseInt(($(b).find("span.price").text()).replace(/[^0-9]/g,'')) ? 1:0;
    } else {  /* 오름차순 */
        return parseInt(($(a).find("span.price").text()).replace(/[^0-9]/g,''))<parseInt(($(b).find("span.price").text()).replace(/[^0-9]/g,'')) ? -1:parseInt(($(a).find("span.price").text()).replace(/[^0-9]/g,''))>parseInt(($(b).find("span.price").text()).replace(/[^0-9]/g,'')) ? 1:0;
    }
           
    });   $("#content ul").html(sort);
  });
});