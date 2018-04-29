"use strict";

console.log("Hello World from app.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");

var slideshow = function slideshow(time, selector) {

	// find the element we're going to build the slideshow inside
	var $slideshowContainer = document.querySelector(selector);
	var $slides = $slideshowContainer.querySelectorAll(".slide");
	var currentSlideNumber = 0;
	var intervalID = void 0;

	//find the element we're going to build the slideshow inside
	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector);
		return false;
	}

	var next = function next() {

		//whatever slide currently has .active, remove .active from it
		var $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		//change slide counter, up by one
		currentSlideNumber++;

		//check to make sure currentSlideNumber didn't exceed number of slides
		if (currentSlideNumber === $slides.length) {
			currentSlideNumber = 0;
		}

		//find slide referenced by currentSlideNumber, add .active to it
		$slides[currentSlideNumber].classList.add('active');
	};

	var prev = function prev() {

		//whatever slide currently has .active, remove .active from it
		var $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		// if we're on the first slide, go to last slide
		if (currentSlideNumber === 0) {
			currentSlideNumber = $slides.length - 1;
		}
		//or change slide counter, down by one
		else {
				currentSlideNumber--;
			}

		//find slide referenced by currentSlideNumber, add .active to it
		$slides[currentSlideNumber].classList.add('active');
	};

	var jump = function jump() {
		//whatever slide currently has .active, remove .active from it
		var $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');
	};

	var stop = function stop() {
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
		stop: stop,
		start: start,
		prev: prev,
		jump: jump
	};
};
//# sourceMappingURL=main.js.map
