"use strict";

console.log("Hello World from app.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");

var slideshow = function slideshow(time, selector) {

	// find the element we're going to build the slideshow inside
	var $slideshowContainer = document.querySelector(selector);
	var currentSlideNumber = 0;
	var $slides = $slideshowContainer.querySelectorAll(".slide");
	var intervalID = void 0;

	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector);
		return false;
	}

	var next = function next() {

		var $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		currentSlideNumber++;

		if (currentSlideNumber === $slides.length) {
			currentSlideNumber = 0;
		}

		$slides[currentSlideNumber].classList.add('active');
	};

	var previous = function previous() {};

	var jump = function jump() {};

	var stopSlideshow = function stopSlideshow() {
		clearInterval(intervalID);
	};

	var start = function start() {
		stop();
		intervalID = setInterval(next, time);
	};

	start();

	return {
		// publicly accessible stuff goes here
		next: next,
		stop: stopSlideshow,
		start: start
	};
};
//# sourceMappingURL=main.js.map
