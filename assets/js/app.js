$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 350) {
		$("header").addClass("scroll_down");
	} else {
		$("header").removeClass("scroll_down");
	}
});


$('.site_header .toggle, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
	$('.site_header .toggle').toggleClass('opened')
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});


// end
$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});
// end



// 
function create_custom_dropdowns() {
	$('.c_select').each(function (i, select) {
		if (!$(this).next().hasClass('dropdown-select')) {
			$(this).after('<div class="dropdown-select wide ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
			var dropdown = $(this).next();
			var options = $(select).find('option');
			var selected = $(this).find('option:selected');
			dropdown.find('.current').html(selected.data('display-text') || selected.text());
			options.each(function (j, o) {
				var display = $(o).data('display-text') || '';
				dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
			});
		}
	});
	$(".dropdown-select").append('<div class="dropdown-overlay"></div>');


}

$(document).on('click', '.dropdown-select', function (event) {
	if ($(event.target).hasClass('dd-searchbox')) {
		return;
	}
	$('.dropdown-select').not($(this)).removeClass('open');
	$(this).toggleClass('open');
	if ($(this).hasClass('open')) {
		$(this).find('.option').attr('tabindex', 0);
		$(this).find('.selected').focus();
	} else {
		$(this).find('.option').removeAttr('tabindex');
		$(this).focus();
	}

});

$(document).on('click', function (event) {
	if ($(event.target).closest('.dropdown-select').length === 0) {
		$('.dropdown-select').removeClass('open');
		$('.dropdown-select .option').removeAttr('tabindex');
	}
	event.stopPropagation();

});

$(document).on('click', '.dropdown-select .option', function (event) {
	$(this).closest('.list').find('.selected').removeClass('selected');
	$(this).addClass('selected');
	var text = $(this).data('display-text') || $(this).text();
	$(this).closest('.dropdown-select').find('.current').text(text);
	$(this).closest('.dropdown-select').prev('select').val($(this).data('value')).trigger('change');
});
$(document).on('keydown', '.dropdown-select', function (event) {
	var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
	if (event.keyCode == 13) {
		if ($(this).hasClass('open')) {
			focused_option.trigger('click');
		} else {
			$(this).trigger('click');
		}
		return false;
	} else if (event.keyCode == 40) {
		if (!$(this).hasClass('open')) {
			$(this).trigger('click');
		} else {
			focused_option.next().focus();
		}
		return false;
	} else if (event.keyCode == 38) {
		if (!$(this).hasClass('open')) {
			$(this).trigger('click');
		} else {
			var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
			focused_option.prev().focus();
		}
		return false;
	} else if (event.keyCode == 27) {
		if ($(this).hasClass('open')) {
			$(this).trigger('click');
		}
		return false;
	}
});



$(document).ready(function () {
	create_custom_dropdowns();

});

//  ENd


$('.dropdown0 .btn').click(function () {
	$(this).parent().siblings('.dropdown0').find('ul').slideUp()
	$(this).parent().siblings().find('.btn').removeClass('opened')
	$(this).next().slideToggle()
	$(this).toggleClass('opened')
	return false;
});


// 


$(document).ready(function () {

	var $wrapper = $('.tab-wrapper'),
		$allTabs = $wrapper.find('.tab-content > div'),
		$tabMenu = $wrapper.find('.tab-menu li')

	$allTabs.not(':first-child').hide();

	$tabMenu.each(function (i) {
		$(this).attr('data-tab', 'tab' + i);
	});

	$allTabs.each(function (i) {
		$(this).attr('data-tab', 'tab' + i);
	});

	$tabMenu.on('click', function () {

		var dataTab = $(this).data('tab'),
			$getWrapper = $(this).closest($wrapper);

		$getWrapper.find($tabMenu).removeClass('active');
		$(this).addClass('active');

		$getWrapper.find($allTabs).hide();
		$getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
	});

});


// 

$('.property_filter .bottom .view_more').click(function () {
	$(this).parents().eq(3).find('.hide').slideToggle()
	$(this).parents().toggleClass('active')
	$(this).toggleClass('active')
	if ($(this).hasClass('active')) {
		$(this).find('span').html('Daha az filtre');
	}
	else {
		$(this).find('span').html('Daha fazla filtre');
	}
});

// 

var photo_gallery = new Swiper(".hero .slider", {
	slidesPerView: 1,

	navigation: {
		nextEl: ".hero .next_arrow ",
		prevEl: ".hero .prev_arrow",
	},
	pagination: {
		el: ".hero .swiper-pagination",
	},
	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: false,
	// },
});

// 


var category_slider = new Swiper(".category_slider .slider", {
	freeMode: true,
	breakpoints: {
		0: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
		991: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 30,

		},
	},
	// pagination: {
	// 	el: ".hero .swiper-pagination",
	// },
	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: false,
	// },
});


if ($(window).width() < 991) {
	$(".properties  .sliderMobile").addClass("slider");

	var properties = new Swiper(".properties .sliderMobile.slider", {
		slidesPerView: 1.05,
		spaceBetween: 22,
		pagination: {
			el: ".properties .swiper-pagination",
		},
		// autoplay: {
		// 	delay: 2000,
		// 	disableOnInteraction: false,
		// },
	});
}

// 

$('.top_header .favorite_btn').click(function () {
	$('.fixed_menu.favorite_list').addClass('opened');
});

$('.top_header .toggle').click(function () {
	$('.fixed_menu.quick_links').addClass('opened');
});


$('.fixed_menu .close_btn').click(function () {
	$(this).parents().eq(2).removeClass('opened');
});

$('.fixed_menu .overlay').click(function () {
	$(this).parent().removeClass('opened');
});

$('.fixed_menu .add_fav').click(function () {
	$(this).toggleClass('active');
});

// 


$('.property_result .filter .listingType .line').click(function () {
	$(this).addClass('active');
	$('.property_result .filter .listingType .grid').removeClass('active')
	$('.properties_grid').addClass('line');
	$('.properties_grid').removeClass('grid');
});

$('.property_result .filter .listingType .grid').click(function () {
	$(this).addClass('active');
	$('.property_result .filter .listingType .line').removeClass('active')
	$('.properties_grid').addClass('grid');
	$('.properties_grid').removeClass('line');
});


var slider_nav = new Swiper(".property_detail .gallery .slider_nav", {
	slidesPerView: "auto",
	spaceBetween: 7.5,
	freeMode: true,
	watchSlidesProgress: true,
});

// var preview = new Swiper(".property_detail .preview .slider", {
// 	slidesPerView: 1,
// 	spaceBetween: 10,
// 	thumbs: {
// 		swiper: slider_nav,
// 	},
// });

// Zoom image

// $(document).ready(function () {
// 	$(".gallery .preview .slider a").attr("data-fancybox", "mygallery");
// 	$(".gallery .preview .slider a").each(function () {
// 		$(this).attr("data-caption", $(this).find("img").attr("alt"));
// 		$(this).attr("title", $(this).find("img").attr("alt"));
// 	});
// 	$(".gallery .preview .slider a").fancybox();
// });



$(document).ready(function ($) {
	$('.gallery .preview .slider').each(function () {
		var swiper = initSwiper(this);
	});
	function initSwiper(base) {
		return new Swiper(base, {
			slidesPerView: 1,
			spaceBetween: 10,
			thumbs: {
				swiper: slider_nav,
			},
		}
		);
	}
	$.fancybox.defaults.backFocus = false

	$('[data-fancybox="group1"]').fancybox();
});




var certificates = new Swiper(".certificates .slider", {

	freeMode: true,
	navigation: {
		nextEl: ".certificates .next_arrow ",
		prevEl: ".certificates .prev_arrow",
	},
	breakpoints: {
		0: {
			slidesPerView: 1.3,
			spaceBetween: 20,
		},
		991: {
			slidesPerView: 2.2,
		},
		1200: {
			slidesPerView: 2.6,
			spaceBetween: 32,
		},
	},
});


var certificates = new Swiper(".our_office .image_gallery", {
	slidesPerView: "auto",
	freeMode: true,

	breakpoints: {
		0: {
			spaceBetween: 10,

		},
		991: {
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: ".our_office .next_arrow ",
		prevEl: ".our_office .prev_arrow",
	},
});


$('.comments_list .list .item .showMore').click(function () {
	$(this).parents().eq(2).toggleClass('active');
	$(this).parents().eq(2).find('.hide').slideToggle(600)
	$(this).toggleClass('active');
	
	if ($('.showMore').hasClass('active')) {
		$(this).html('Daralt');
	}
	else {
		$(this).html('Genişlet');
	}
});

