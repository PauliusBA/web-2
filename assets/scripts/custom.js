"use strict";

$(window).on("scroll", function() {
    if($(window).scrollTop() > 400) {
        $(".site-header").addClass("active");
        $(".site-header a").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".site-header").removeClass("active");
    }
});

var slider = tns({
	container: '.my-slider',
	items: 1,
	mouseDrag: true,
	autoplay: true,
	autoplayTimeout: 3000,
    controlsText: ["ankstesnis", "sekantis"],
    navPosition: 'bottom',
	// navContainer: '.button-block'
});

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });

  $( document ).ready(function() {

	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	});
	});
	
	$( ".cross" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	});
	});
	
	});