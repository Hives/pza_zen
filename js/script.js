/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

	$(document).ready(function(){

		// featured project carousel
		(function(){
			var Carousel;

			Carousel = function (carousel) {
				this.carousel = carousel;
			};

			Carousel.prototype = {
				init: function () {
					var that = this;

					this.items = this.carousel.find('.views-row');
					this.current = 0;

					this.controls = this.carousel.find('.carousel-control');
					this.controls.next = this.controls.find('.next');
					this.controls.next.click(function(){
						that.slide("n");
						return false;
					});
					this.controls.prev = this.controls.find('.prev');
					this.controls.prev.click(function(){
						that.slide("p");
						return false;
					});

				},

				slide: function (dir) {
					var
						next, $next, $current, len = this.items.length;

					if (dir === "n") {
						next = (this.current + 1) % len;
					} else if (dir === "p") {
						next = (((this.current - 1) % len) + len) % len;
					}

					$next = $(this.items[next]);
					$current = $(this.items[this.current]);

					console.log($next);

					if (dir === "n") {
						$next.css({'left': '960px'});
						$next.animate({'left': '0'}, 'slow');
						$current.animate({'left': '-960px'}, 'slow');
					} else if (dir === "p") {
						$next.css({'left': '-960px'});
						$next.animate({'left': '0'}, 'slow');
						$current.animate({'left': '960px'}, 'slow');
					}

					this.current = next;

				}

			};

			$(window).load(function(){
				var carousel = new Carousel($('#block-views-featured-projects-block'));
				carousel.init();
			});

		})();

		// isotope menu for non-featured projects
		(function(){
			var $container = $('#block-views-non-featured-projects-block .view-content');

			$container.imagesLoaded(function(){
			  $container.isotope({
			  	animationEngine: 'best-available',
			    itemSelector: '.non-featured-project'
			  });
			});

			$('#block-views-non-featured-projects-block a.category').click(function(){
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector });
				return false;
			});

		})();

		// makes menu on about page sticky, and animate transitions
		// (function(){
		// 	var
		// 		$aboutMenu = $('#about-menu'),
		// 		titleHeight = $('#page-title').outerHeight(),
		// 		$main = $('#main'),
		// 		headerHeight = $('#header').height();

		// 	if($aboutMenu.length!=0) {

		// 		$(window).scroll(function(){
		// 			var mainTop = Math.abs($main[0].getBoundingClientRect().top);
		// 			console.log("mainTop: " + mainTop);
		// 			console.log("titleHeight: " + titleHeight);

		// 			if (mainTop >= titleHeight) {
		// 				console.log("yes");
		// 				$aboutMenu.addClass('sticky');
		// 			} else {
		// 				console.log("no");
		// 				$aboutMenu.removeClass('sticky');
		// 			}

		// 		});

		// 	}

		// })();

		if($('#about-menu').length > 0) {
			(function(){
				var
					$links = $('#about-menu').find('a'),
					headerHeight = $('#header').height(),
					positions = [];

				$('a.about-anchor').each(function(){
					var h2 = $(this).parent().find('h2');
					positions[$(this).attr('name')] = h2.position().top + headerHeight;
				});

				// set first position to 0
				positions[$('a.about-anchor').first().attr('name')] = 0;


				console.log(positions);

				$links.click(function() {
					var target = $(this).attr('href').substr(1);

					$('html, body').animate(
						{scrollTop: positions[target]},
						'slow'
					);

					// $links.removeClass('current');
					// $(this).addClass('current');

					return false;
				});

			})()
		}

	});

})(jQuery, Drupal, this, this.document);
