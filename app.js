for (var FizzBuzz = 1; FizzBuzz < 16; FizzBuzz++) {
	if (FizzBuzz % 15 == 0) {
		console.log("fizz buzz");
	}
	else if (FizzBuzz % 3 == 0) {
		console.log("fizz");
	}
	else if (FizzBuzz % 5 == 0) {
		console.log("buzz");
	}
	else {
		console.log(FizzBuzz);
	}
}