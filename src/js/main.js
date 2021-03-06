console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)


let slideshow = function(time, selector) {

	// find the element we're going to build the slideshow inside
	let $slideshowContainer = document.querySelector(selector);
	let $slides = $slideshowContainer.querySelectorAll(".slide")
	let currentSlideNumber = 0;
	let intervalID;


	//find the element we're going to build the slideshow inside
	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector)
		return false
	}

	let next = function(){

		//whatever slide currently has .active, remove .active from it
		let $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		//change slide counter, up by one
		currentSlideNumber++;

		//check to make sure currentSlideNumber didn't exceed number of slides
		if(currentSlideNumber === $slides.length){
			currentSlideNumber = 0;
		}

		//find slide referenced by currentSlideNumber, add .active to it
		$slides[currentSlideNumber].classList.add('active');

	}

	let prev = function(){

		//whatever slide currently has .active, remove .active from it
		let $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		// if we're on the first slide, go to last slide
		if(currentSlideNumber === 0){
			currentSlideNumber = $slides.length - 1;
		} 
		//or change slide counter, down by one
		else{
			currentSlideNumber--;
		}

		//find slide referenced by currentSlideNumber, add .active to it
		$slides[currentSlideNumber].classList.add('active');
	}

	let jump = function(currentSlideNumber){

		//whatever slide currently has .active, remove .active from it
		let $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		$slides[currentSlideNumber].classList.add('active');
	}

	let stop = function(){
		clearInterval(intervalID);
	}

	let start = function(){
		stop();
		intervalID = setInterval(next, time);
	}
	
	start();

	return {
		// publicly accessible stuff goes here
		next: next,
		stop: stop,
		start: start,
		prev: prev,
		jump: jump
	}

}