$(function() {
  function listMore(){
    let size_li = $("#book_box li").size();
    win=$(window).width();
    if(win <= 640) {
      let x = 2;
      $('#book_box li:lt('+x+')').show();
      $('more_btn').click(function(){
        x = (x+2 <= size_li) ? x+2 : size_li;
        $('#book_box li:lt('+x+')').show();
      });
    } else if(win>640 && win<=768) {
      let x = 3;
      $('#book_box li:lt('+x+')').show();
      $('.more_btn').click(function() {
        x = (x+3 <= size_li) ? x+3 : size_li;
        $('#book_box li:lt('+x+')').show();
      });
    } else {
      let x = 4;
      $('#book_box li:lt('+x+')').show();
      $('.more_btn').click(function() {
        x = (x+4 <= size_li) ? x+4 : size_li;
        $('#book_box li:lt('+x+')').show();
      });
    }
  }
  listMore();
  $(window).on("resize", function() {
    listMore()
    location.reload();
  })
})


/*$(document).ready(function () {
  const slider = $(".slider");
  const slideWidth = $(".slide").outerWidth(true);
  const totalSlides = $(".slide").length;
  let currentIndex = 0;

  function slideNext() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      slider.css("transform", "translateX(0)");
      currentIndex = 0;
    } else {
      slider.css("transform", `translateX(${-slideWidth * currentIndex}px)`);
    }
  }
  setInterval(slideNext, 3000);
});*/



$(function() {
  const track =$(".slide_book");
  const itemWidth = $(".slide").outerWidth(true);

  function flowBooks() {
    track.animate({
      left: `-=${itemWidth}px`}, 2500,'linear',
    function() {
      track.css('left', 0);
      track.append(track.children().first());
    });
  }
  setInterval(flowBooks, 1000);
})