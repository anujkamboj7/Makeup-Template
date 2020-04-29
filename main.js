$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop: true,
		responsiveClass: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		loop: false,
		responsive: {
			0: {
				items: 1
			},
			767.98: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	// $(".owl-prev").html('<ion-icon name="arrow-back-outline" ></ion-icon>');
	// $(".owl-next").html('<ion-icon name="arrow-forward-outline"></ion-icon>');

	$(".menu-icon").on("click", function() {
		$(".nav-list").toggleClass("active");
		$(".overlay").toggleClass("active");
	});
	$(".close-icon").on("click", function() {
		$(".nav-list").removeClass("active");
		$(".overlay").removeClass("active");
	});
});
