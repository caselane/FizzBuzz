$(document).ready(function() {
	var countUp =  prompt('Write your number here:');
	var x = parseInt(countUp);
	for ( FizzBuzz = 1; FizzBuzz <= x; FizzBuzz++) {
		if (FizzBuzz % 15 == 0) {
			console.log("fizz buzz");
			$('<p>fizz buzz</p>').appendTo('.numbers');
		}
		else if (FizzBuzz % 3 == 0) {
			console.log("fizz");
			$('<p>fizz</p>').appendTo('.numbers');
		}
		else if (FizzBuzz % 5 == 0) {
			console.log("buzz");
			$('<p>buzz</p>').appendTo('.numbers');
		}
		else {
			console.log(FizzBuzz);
			$('<p>' + FizzBuzz + '</p>').appendTo('.numbers');
		}
	}
});