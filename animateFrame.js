
//load when document is ready

document.addEventListener('DOMContentLoaded', function() {
	"use strict";
	var svgBorder = document.querySelector(".svgBorder");
	var startBtn  = document.querySelector(".startBtn");
	var stopBtn   = document.querySelector(".stopBtn");
	var imageStackName = document.querySelector("#imageStackName");

	// add a class name to an element
	function addClass(el, className) {
		if (el.classList) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}


	// remove a className from an element
	function removeClass(el, className) {
		if (el.classList) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// drawBorder adds the drawBorder class to the svgBorder element
	function drawBorder() {
		console.log("startBtn clicked or inputStackName field blurred so drawBorder function runs.");
		
		//add drawBorder to svgBorder if the input field is empty
		if (imageStackName.value === '') {
			addClass(svgBorder, "drawBorder");
			console.log("imageStackName field is empty. drawBorder class was added so rotation starting.");
		} else {
			console.log("imageStackName field contains '" + imageStackName.value + "'. drawBorder cass was NOT added.");
		}
	}



	// stopBorder removes the drawBorder class from the svgBorder element
	function stopBorder() {
		console.log("stopBtn clicked or imageStackName field received focus so stopBorder function removes the drawBorder class");

		// remove drawBorder class from svgBorder element
		removeClass(svgBorder, "drawBorder");
	}


	//event listeners for clicking the start and stop buttons
	stopBtn.addEventListener('click', stopBorder);
	startBtn.addEventListener('click', drawBorder);

	//event listeners forImageStackName field
	imageStackName.addEventListener('focus', stopBorder);
	imageStackName.addEventListener('blur', drawBorder);
});
