$(function() {
  $("#nav ul.sub").hide();
  $("#nav ul.menu li").click(function(){
    $("ul",this).slideToggle("fast");
  })

  
  $('.hamburger').click(function(){
    $(this).toggleClass('active');
    $(".menu_container").stop().toggleClass('on');
  })
  

  // $(".hamburger").click(function(){
  //  $(".menu_container").slideDown(300);
  // })
})