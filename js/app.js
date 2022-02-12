$(window).on('load', function () {
   $('.preloader').fadeOut(1000);
})
$(function () {
    $(window).on('scroll', function () {
       if ($(this).scrollTop() > 200) {
          $('#backToTop').fadeIn(1000)
       } else {
          $('#backToTop').fadeOut(1000)
       }
    })
    $('#backToTop').on('click', function () {
       $('html,body').animate({
          scrollTop: 0,
       },2000)
    })
 })

 