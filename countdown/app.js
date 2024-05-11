"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countdown(number) {
    if (number <= 0) {
        console.log("Drama has Started");
        return;
    }
    console.log(number);
    countdown(number - 1);
}
countdown(8);
/// factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
let response = factorial(5);
console.log(response);
