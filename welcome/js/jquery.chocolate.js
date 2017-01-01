
(function($){

	$.fn.chocolate = function(args) {

		
		var options = $.extend({
			interval 	: 3000,
			speed 		: 1000
		}, args);

		return this.each(function() {
			
			var original = $(this);

			
			$div = $(document.createElement('div'));
			$div.css({
				position 	: 'absolute',
				zIndex 		: 0,
				overflow 	: 'hidden',
			});

			original.prepend($div);
		    $div.css(copybackground());
		    $div.css('background-image', 'url(' + args.images[0] + ')');
			
			
			original.css('background', 'none');
		    
		    
		    $div2 = $div.clone();
		    $div.after($div2);
			
			
			$div.css(copyPosition());
			$div2.css(copyPosition());

			
			$(window).resize(function() {
				$div.css(copyPosition());
				$div2.css(copyPosition());
			});

			
			function copybackground() {
				var backgroundProperties = [
		        	'Attachment', 'Color', 'Repeat',
		        	'Position', 'Size', 'Clip', 'Origin'
		    		];
			    var prop,
			    	copyStyle 			= {},
			    	i 					= 0;

			    for (; i < backgroundProperties.length; i++) {
			    	prop = 'background' + backgroundProperties[i];
			    	copyStyle[prop] = original.css(prop);
			    }

			    return copyStyle;
			}

			
		    function copyPosition() {
		    	var corners 	= ['Top', 'Right', 'Bottom', 'Left'];
			    var i 			= 0,
			    	position 	= original.position(),
			    	copyStyle 	= {
			    		top 	: position.top,
			    		left 	: position.left,
			    		width 	: original.innerWidth(),
			    		height 	: original.innerHeight()
			    	};

			    for (; i < corners.length; i++) {
		    		corner = corners[i];
		    		copyStyle['margin' + corner] = original.css('margin' + corner);
		    		copyStyle['border' + corner] = original.css('border' + corner);
		    	}

		    	return copyStyle;
		    }

		    var count 	= 0,
		    	current = 0;

			
			var slide = function() {
				if (current == args.images.length - 1) current = 0;
				else current++;
				
				if (count == 0) {
					$div2.fadeOut(options.speed);
					$div.css('background-image', 'url(' + args.images[current] + ')').fadeIn(options.speed);
					count++;
				} else {
					$div.fadeOut(options.speed);
					$div2.css('background-image', 'url(' + args.images[current] + ')').fadeIn(options.speed);
					count = 0;
				}
			}		

			setInterval(function() {slide();}, options.interval);
		});
	}

})(jQuery);