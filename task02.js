"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN

if (!isNaN(userInput) && typeof(userInput) != "string") {
    console.log("Yes");
} else {
    console.log("No");
}
