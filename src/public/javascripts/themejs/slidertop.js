
  var total_item = 3 ;
  $(".sohomeslider-inner-1").owlCarousel2({
		rtl: false,
		animateOut: 'none',
		animateIn: 'none',
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed:  1000,
		smartSpeed: 500,
		autoplayHoverPause: true,
		startPosition: 0,
		mouseDrag:  true,
		touchDrag: true,
		dots: true,
		autoWidth: false,
		dotClass: "owl2-dot",
		dotsClass: "owl2-dots",
		loop: true,
		navText: ["Next", "Prev"],
		navClass: ["owl2-prev", "owl2-next"],

		responsive: {
		0:{ items: 1,
		nav: total_item <= 1 ? false : ((true ) ? true: false),
		},
		480:{ items: 1,
		nav: total_item <= 1 ? false : ((true ) ? true: false),
		},
		768:{ items: 1,
		nav: total_item <= 1 ? false : ((true ) ? true: false),
		},
		992:{ items: 1,
		nav: total_item <= 1 ? false : ((true ) ? true: false),
		},
		1200:{ items: 1,
		nav: total_item <= 1 ? false : ((true ) ? true: false),
		}
	},
  });
