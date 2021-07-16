 
/*======================================
[Start Activation Code]
========================================
	* One Page Nav
	* Sticky JS
	* Mobile Menu
	* Social JS
	* Service hover
	* Isotop Active
	* Counter JS
	* Testimonial Carousel
	* Blog Carousel
	* Blog Slider
	* Clients Carousel
	* Wow JS
	* Parallax JS
	* Video Background
	* Side Navigation
	* Personal slider
	* Extra JS
	* Preloader JS
	* Background moving text

========================================
[End Activation Code]
========================================*/ 
(function ($) {
	"use strict";
    $(document).ready(function(){
		
		function Maheraz_Custom_JS() {
			var windowS = $(window),
				windowH = windowS.height(),
				projecthoverS = $('.portfolio-hover'),
				projecthoverH = projecthoverS.height(),
				proejectdevide = (projecthoverH / 2);
				projecthoverS.css({
				marginTop: -proejectdevide,
			});
		}; 
		
		/*====================================
		//  Onepage Nav
		======================================*/ 
		if ($.fn.onePageNav) {
			$('.mainmenu .nav').onePageNav({
				currentClass: 'active',
				scrollSpeed: 1000,
				easing: 'easeInOutQuart'
			});
		}
		
		/*====================================
		// Sticky JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 1) {
				$('#header').addClass("sticky");
			} else {
				$('#header').removeClass("sticky");
			}
		});
			
		/*====================================
		// 	Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			closeOnClick:true,
		});
		
		/*====================================
		// 	Social JS
		======================================*/ 	
		$('.social-icon li a').on( "click", function(){
			$('.social').toggleClass('active');
		});
		
		
		/*====================================
		// Service Hover
		======================================*/ 
		$('.single-service').on('mouseenter', function(){
			$(' .single-service').removeClass('active');
			$(this).addClass('active');
		});
		
		/*====================================
		// Isotop Active
		======================================*/
		$(window).on('load', function() {
			Maheraz_Custom_JS();		
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });

					$('.portfolio-nav ul li').on('click', function() {
                    $(".portfolio-nav ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeInOutQuart',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
		});
		
		/*====================================
			Counter JS
		======================================*/ 
		$('.count').counterUp({
			time: 1000
		});
		
		/*====================================
		// Testimonial Carousel
		======================================*/ 	
		$(".testimonial-carousel").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 600,
			animateOut: 'flipOutX',
			animateIn: 'flipInX',
			margin:30,
			nav:true,
			dots:false,
			items: 1,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		});	
		
		/*====================================
		// Blog Carousel
		======================================*/ 	
		$(".blog-carousel").owlCarousel({
			loop:true,
			autoplay:false,
			autoplayTimeout:4000,
			smartSpeed: 600,
			margin:15,
			nav:false,
			dots:true,
			responsive:{
				300: {
					items: 1,
				},
				480: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 3,
				},
			}
		});	
		
		/*====================================
		// Blog Slider
		======================================*/ 	
		$("#blog .slide").owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:3500,
			smartSpeed: 600,
			mouseDrag: true,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:true,
			responsive:{
				320: {
					items: 1,
					dots:false,
					nav:false,
				},
				480: {
					items: 1,
					dots:false,
					nav:false,
				},
				768: {
					items: 1,
				},
				1170: {
					items: 1,
				},
			}
		});	
		
		
		/*====================================
		// clients Carousel
		======================================*/ 	
		$(".clients-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 600,
			margin:30,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items: 1,
				},
				480: {
					items: 2,
				},
				768: {
					items: 3,
				},
				1170: {
					items: 5,
				},
			}
		});	
		
		/*====================================
			Wow JS
		======================================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		/*======================================
		// Parallax JS
		======================================*/ 
		 $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
		
		
		/*====================================
		// 	Side Navigation
		======================================*/ 	
		$('.side-icon a').on( "click", function(){
			$('#header').toggleClass('active');
		});
		
		/*====================================
		// Personal Slider
		======================================*/ 	
		$(".personal-main.slide").owlCarousel({
			loop:true,
			autoplay:true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			smartSpeed: 600,
			autoplayTimeout:4000,
			mouseDrag: false,
			margin:30,
			nav:false,
			dots:true,
			items: 1,
		});	
		
		/*====================================
		// Portfolio Single
		======================================*/ 	
		$(".portfolio-single.slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 600,
			autoplayTimeout:3500,
			mouseDrag: true,
			margin:30,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items: 1,
		});	
		
		/*====================================
		// Related Portfolio
		======================================*/ 
		$(".portfolio-related").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 600,
			autoplayTimeout:3500,
			mouseDrag: true,
			nav:false,
			dots:false,
			items: 1,
			responsive:{
				300: {
					items: 1,
				},
				480: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 3,
				},
			}
		});	

		
		/*====================================
		Extra JS
		======================================*/
		$('.btn, .arrow a, .slicknav_menu li a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 20 
			}, 1000, 'easeInOutQuart');
			event.preventDefault();
		});
		
		
		/*====================================
			Video Background
		======================================*/
		$('.player').mb_YTPlayer();		
		
    });
	
	/*======================================
	// Preloader
	======================================*/ 	
		$(window).load(function(){
				$('.loader').fadeOut('slow', function(){
				$(this).remove();
			});
		});
})(jQuery);	


/*======================================
	//Background moving text
	======================================*/ 

/*VARIABLES*/

canvas = document.getElementsByTagName('canvas')[0];
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight*9;

var ctx = canvas.getContext('2d');



/*Modify options here*/

//possible characters that will appear
var characterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//stocks possible character attributes
var layers = {
    n: 5, //number of layers
    letters: [300, 300, 100, 50, 10], //letters per layer (starting from the deepest layer)
    coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
    size: [26, 32, 40, 45, 66], //font size of the letters (starting from the deepest layer)
    color: ['#808080', '#808080', '#808080', '#808080', '#808080'], //color of the letters (starting from the deepest layer)
    font: 'Courier' //font family (of every layer)
};

/*End of options*/



var characters = [];
var mouseX = document.body.clientWidth/2;
var mouseY = document.body.clientHeight/2;

var rnd = {
    btwn: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    choose: function(list) {
        return list[rnd.btwn(0, list.length)];
    }
};



/*LETTER DRAWING*/

function drawLetter(char) {
    ctx.font = char.size + 'px ' + char.font;
    ctx.fillStyle = char.color;
    
    var x = char.posX + (mouseX-canvas.width/2)*char.coef;
    var y = char.posY + (mouseY-canvas.height/2)*char.coef;

    ctx.fillText(char.char, x, y);
}



/*ANIMATION*/

document.onmousemove = function(ev) {
    mouseX = ev.pageX - canvas.offsetLeft;
    mouseY = ev.pageY - canvas.offsetTop;

    if (window.requestAnimationFrame) {
        requestAnimationFrame(update);
    } else {
        update();
    }
};

function update() {
    clear();
    render();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function render() {
    for (var i = 0; i < characters.length; i++) {
        drawLetter(characters[i]);
    }
}



/*INITIALIZE*/

function createLetters() {
    for (var i = 0; i < layers.n; i++) {
        for (var j = 0; j < layers.letters[i]; j++) {

            var character = rnd.choose(characterList);
            var x = rnd.btwn(0, canvas.width);
            var y = rnd.btwn(0, canvas.height);

            characters.push({
                char: character,
                font: layers.font,
                size: layers.size[i],
                color: layers.color[i],
                layer: i,
                coef: layers.coef[i],
                posX: x,
                posY: y
            });

        }
    }
}

createLetters();
update();



/*REAJUST CANVAS AFTER RESIZE*/

window.onresize = function() {
    location.reload();
};


/*======================================
	//Background moving text
	======================================*/ 
