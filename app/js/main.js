$(document).ready(function(){
	$('.slider').slick({
		autoplay: true,
		centerMode: true,
		centerPadding: '25px',
		slidesToShow: 5,
		prevArrow:'<i class="fas fa-angle-left"></i>',
		nextArrow:'<i class="fas fa-angle-right"></i>',
		responsive: [
    {
      breakpoint: 1199,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
       slidesToShow: 1,
             }
    }
    ]
		
		
	});
});


