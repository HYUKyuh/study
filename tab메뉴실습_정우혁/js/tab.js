$(function() {
  $(".menu_panel ul:not("+$(".tab li a.selected").attr("href")+")").hide();
  $(".tab li a").click(function(){
    $(".tab ul li a").removeClass("selected");
    $(this).addClass("selected");
    $(".menu_panel ul").hide();
    $($(this).attr("href")).show();
  })

  // $(".menu_panel ul li").mouseenter(function(){
  //   $(".menu_panel ul li img").animate({marginBottom:'100px'},300)
  // })

  $(".gnb > li").mouseenter(function(){
    $(this).css("display","flex")
    $(this).children(".submenu").stop().slideDown(400);
  });
  
  $(".gnb > li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp(200);
  });
  
  
})


// $(function() {
//   const slide = function() {
//     setTimeout(function() {
//       $('#slide li:first').animate({marginLeft:'-150px'}, 300, function() {
//         $(this).detach().appendTo('ul#slide').removeAttr('style');
//       }); slide();
//     }, 3000);
//   }; slide();

//   $("#container").simplyScroll({
//     pauseOnHover:false
// });
// })