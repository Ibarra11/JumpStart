$(document).ready(function(){
  $('.jumbotron').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });

  $(window).scroll(function(){
    if(window.scrollY > 90){
      $('.navbar').hide("slide", 5000);
    }
    else{
        $('.navbar').show("slide", 5000);
    }
  })

});
