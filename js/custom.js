/*
  ____                    _      _          _         
 / ___|___  ___ _ __ ___ (_) ___| |    __ _| |__  ___ 
| |   / _ \/ __| '_ ` _ \| |/ __| |   / _` | '_ \/ __|
| |__| (_) \__ \ | | | | | | (__| |__| (_| | |_) \__ \
 \____\___/|___/_| |_| |_|_|\___|_____\__,_|_.__/|___/
                                                   

Finely - Responsive Under Construction Template
Version 1.1.5 - Last updated 14/12/2014
Copyright 2014 CosmicLabs

This template and more are available to purchase on Themeforest.net
http://themeforest.net/user/cosmiclabs/portfolio

For template support, see the documentation files or get in touch with us.
Support site: http://cosmiclabs.co.uk/support
Support email: support@cosmiclabs.co.uk

*/

// ************************************************************* //
// SETTINGS for Finely Responsive Under Construction Template
// ************************************************************* //



// To setup the template, change the variables below
// Follow instructions in code comments or see documentation for more detail


// ************************************************************* //
// ==== GENERAL SETTINGS ====
// Enable or disable the preloader by changing var preloader to 'on' or 'off' (disabling it is not reccomended)
// If var preloaderGIF is 'off', the default CSS3 animation preloader is used - set to 'on' and a GIF image preloader will be used, the loader.gif file in images folder
// Enable or disable the background image overlay (the squares) using 'on' or 'off'
// Edit the colour of the CSS background overlay which darkens background images/video by using '#HEX' - use a HEX colour
// Edit the opacity of the colour overlay - determine how visible the background images/video are between '0' and '1.0'

var preloader = 'on';
var preloaderGIF = 'off';

var bgImgOverlay = 'on';
var bgOverlayColour = '#000000';
var bgOverlayOpacity = '100';


// ************************************************************* //
// ==== SLIDESHOW BACKGROUND ====
// Set URLs to background images inside the array
// Each image must be on its own line, inbetween speech marks (" ") and with a comma at the end of the line
// Add / remove images by changing the number of lines below
// To use a single (static) image background, only use one image line below
// Variable slideshowFade = transition speed for fade animation, in milliseconds
// Variable slideshowDuration = time each slide is shown for, in milliseconds

var slideshowBackgroundURLS = [
	"images/background1.jpg",
	"images/background1.jpg",
	"images/background1.jpg",
	"images/background1.jpg",
];

var slideshowFade = 1000;
var slideshowDuration = 4000;


// ************************************************************* //
// ==== VIDEO BACKGROUND ====
// Enable Video Background - 'on' to enable, 'off' to disable
// Cannot work on mobile devices due to device restrictions, instead shows slideshow
// If disabled slideshow is shown
// Paste YouTube URL into the videoBackgronudURL variable - use YouTube link NOT embed code
// Set videoMuted to 'true' and background videos will be muted with no toggle mute button visible
// Set videoMuted to 'false' and videos will not be muted, and the toggle mute button will be visible on the site so users can turn off audio if they want

var videoBackground = 'off';
var videoBackgroundURL = 'PASTE-YOUTUBE-URL-HERE';
var videoMuted = true;


// ************************************************************* //
// ==== COUNTDOWN ====
// Set up the date and time that will be counted down to
// Enter date in the format (24 hr clock): DD Month YYYY HH:MM:SS for example: 01 January 2015 23:04:00

var countdownDate = "1 May 2015 00:00:00";