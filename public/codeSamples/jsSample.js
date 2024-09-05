// FizzBuzz function in JavaScript
function fizzBuzz() {
    // Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        // If 'i' is divisible by both 3 and 5, print "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // If 'i' is divisible by only 3, print "Fizz"
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // If 'i' is divisible by only 5, print "Buzz"
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // If 'i' is not divisible by either 3 or 5, print the number
        else {
            console.log(i);
        }
    }
}

// Call the function to run FizzBuzz
fizzBuzz();
