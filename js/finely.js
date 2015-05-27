// Functions for FINELY Responsive Under Construction Template
// Version 1.0
// By CosmicLabs
// Available for purchase from Themeforest.net
// http://themeforest.net/user/cosmiclabs/portfolio

function animateInStart() {
	if ($('html').hasClass('ie9')) {
		$('.section-main .header').fadeIn(1000);
		$('.section-main .content').fadeIn(1000);
		if(videoMuted == false) {
			$('.videoMuteButton').fadeIn(1000);
		}
	}
	else {
		$('.section-main .header').addClass('animated fadeInDown');
		$('.section-main .content').addClass('animated fadeInUp');
		if(videoMuted == false) {
			$('.videoMuteButton').addClass('animated fadeInUp');
		}
	}
}

var navButtonClicked = false;

function showSection(section) {
	
	if(navButtonClicked === false) {
		navButtonClicked = true;
	
		if ($('html').hasClass('ie9')) {
			var headerClassName = "." + section + " .header";
			var contentClassName = "." + section + " .content";
			
			var className = "." + section;
			
			$('.section-main .header').fadeOut(1000);
			$('.section-main .content').fadeOut(1000);
			if(videoMuted == false) {
				$('.videoMuteButton').fadeOut(1000);
			}

			setTimeout(function() {
				$(className).css('opacity','1');
				$(className).fadeIn(1000);
											
				if ($(window).width() < 599) {
					$('.about-container .about-box-spacer').css('height', '1px');
				}
				else {
					var ieAboutSpacerHeight = $('.about-box-text').height() + 'px';
					$('.about-container .about-box-spacer').css('height', ieAboutSpacerHeight);
				}
			},1000);
		}
		else {
			var headerClassName = "." + section + " .header";
			var contentClassName = "." + section + " .content";
			
			$(headerClassName).css('opacity', '0');
			$(contentClassName).css('opacity', '0');
			
			$('.section-main .header').removeClass('fadeInDown').removeClass('fadeOutUp').addClass('fadeOutUp');
			$('.section-main .content').removeClass('fadeInDown').removeClass('fadeOutDown').addClass('fadeOutDown');
			if(videoMuted == false) {
				$('.videoMuteButton').removeClass('fadeInDown').removeClass('fadeOutDown').addClass('fadeOutDown');
			}

			function showSpecificSection() {
				$('.section-main .header').css('display', 'none');
				$('.section-main .content').css('display', 'none');
				if(videoMuted == false) {
					$('.videoMuteButton').css('display', 'none');
				}
				$('.section-main .header').css('opacity', '0');
				$('.section-main .content').css('opacity', '0');
				if(videoMuted == false) {
					$('.videoMuteButton').css('opacity', '0');
				}
				
				var className = "." + section;
				$(className).css('display','block');
				
				if ($(window).width() < 599) {
					$('.about-container .about-box-spacer').css('height', '1px');
				}
				else {
					var ieAboutSpacerHeight = $('.about-box-text').height() + 'px';
					$('.about-container .about-box-spacer').css('height', ieAboutSpacerHeight);
				}
				
				$(className).removeClass('fadeOut').removeClass('fadeIn').addClass('animated fadeIn');
				
				$(headerClassName).removeClass('fadeInDown').removeClass('fadeOutUp').addClass('animated fadeInDown');
				$(contentClassName).removeClass('fadeInDown').removeClass('fadeOutDown').addClass('animated fadeInUp');
			}
			
			setTimeout(showSpecificSection,1000);
		}
	}
}

function closeSection(section) {
	
	if ($('html').hasClass('ie9')) {
		var className = "." + section;
		
		var headerClassName = "." + section + " .header";
		var contentClassName = "." + section + " .content";

		$(className).fadeOut(1000);
		
		setTimeout(function() {						
			if ($(window).height() < $('.title').outerHeight()) {
				$('.mini-container.main-mini-container').css("height", "auto");
				$('.section-main').css("height", "auto");
				$('.title').addClass('smallHeight');
			}
			else {
				$('.mini-container.main-mini-container').css("height", "100%");
				$('.section-main').css("height", "100%");
				$('.title').removeClass('smallHeight');
			}
			
			$('.section-main .header').fadeIn(1000);
			$('.section-main .content').fadeIn(1000);
			if(videoMuted == false) {
				$('.videoMuteButton').fadeIn(1000);
			}
			
			navButtonClicked = false;
		},1000);
	}
	else {
		var className = "." + section;
		
		var headerClassName = "." + section + " .header";
		var contentClassName = "." + section + " .content";
		
		$(headerClassName).removeClass('fadeInDown').removeClass('fadeOutUp').addClass('fadeOutUp');
		$(contentClassName).removeClass('fadeInDown').removeClass('fadeOutDown').addClass('fadeOutDown');
		
		$(className).removeClass('fadeOut').removeClass('fadeIn').addClass('fadeOut');
		
		function showHomeSection() {
			$(className).css('display','none');
			$('.section-main .header').css('display', 'block');
			$('.section-main .content').css('display', 'block');
			if(videoMuted == false) {
				$('.videoMuteButton').css('display', 'block');
			}
			
			if ($(window).height() < $('.title').outerHeight()) {
				$('.mini-container.main-mini-container').css("height", "auto");
				$('.section-main').css("height", "auto");
				$('.title').addClass('smallHeight');
			}
			else {
				$('.mini-container.main-mini-container').css("height", "100%");
				$('.section-main').css("height", "100%");
				$('.title').removeClass('smallHeight');
			}
			
			$('.section-main .header').removeClass('fadeInDown').removeClass('fadeOutUp').addClass('fadeInDown');
			$('.section-main .content').removeClass('fadeInDown').removeClass('fadeOutDown').addClass('fadeInUp');
			if(videoMuted == false) {
				$('.videoMuteButton').removeClass('fadeInDown').removeClass('fadeOutDown').addClass('fadeInUp');
			}
			
			navButtonClicked = false;
		}
		
		setTimeout(showHomeSection,1000);
	}
}

if(preloader == 'on') {}
else {
	$('.page-loading').hide();
}

function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var rgbaColour = "rgba(" + hexToRgb(bgOverlayColour).r + "," + hexToRgb(bgOverlayColour).g + "," + hexToRgb(bgOverlayColour).b + "," + bgOverlayOpacity + ")";

var bgImgOverlayCSS = '';
if(bgImgOverlay == 'on') {
	bgImgOverlayCSS = 'url("images/bg-overlay.png")';
}
else {
	bgImgOverlayCSS = 'none';
}

var div = $("<div />", {
		html: '&shy;<style>.page-loading { background-image: ' + bgImgOverlayCSS + '; } .backstretch:after { background-image: ' + bgImgOverlayCSS + '; background-color: ' + rgbaColour + '; } .YTPOverlay { background-image: ' + bgImgOverlayCSS + '; background-color: ' + rgbaColour + '; }</style>'
	}).appendTo("body");

$(document).ready(function(){
	if ($('html').hasClass('ie9')) {
		$('.section-main .header').css('display', 'none');
		$('.section-main .content').css('display', 'none');
		if(videoMuted == false) {
			$('.videoMuteButton').css('display', 'none');
		}
	}
	else {
		$('.section-main .header').css('opacity', '0');
		$('.section-main .content').css('opacity', '0');
		$('.videoMuteButton').css('opacity', '0');
	}
});