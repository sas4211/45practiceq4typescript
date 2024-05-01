// series of conditional test

import { Console } from "console";

// creating car variable
let car: string = 'honda';

// = setting/ assign  value
// == checking value
// === checking value with data type
// ! not
// != not equal

// test 1
console.log(" IS CAR == 'honda' ? I GUESS TRUE.");
console.log(car == 'honda');

///test 2
console.log(" IS CAR === 'honda' ? I GUESS TRUE.");
console.log(car === 'honda');

// auto compailing js file. first go to cmd terminal
// npm install -g ts-node-dev
// type ts-node-dev yourFileName.ts


///test 3
console.log(" IS CAR != 'honda' ? I GUESS TRUE.");
console.log(car != 'toyota');


///test 4
console.log(" IS CAR !== 'honda' ? I GUESS FLASE.");
console.log(car !== 'honda');

///test 5
console.log(" IS CAR.UPPER CASE == 'HONDA' ? I GUESS TRUE.");
console.log(car.toUpperCase() == 'HONDA');

///test 6
console.log(" IS CAR.LOWER CASE === 'honda' ? I GUESS FALSE.");
console.log(car.toLowerCase() == 'honda');

//test 7
console.log(" IS CAR == 'van' ? I GUESS FLASE.");
console.log(car == 'van');

//test 8
console.log(" IS CAR === 'suzuki' ? I GUESS FLASE.");
console.log(car === 'suzuki');

//test 9
console.log(" IS CAR == 'animal' ? I GUESS FLASE.");
console.log(car == 'animal');

//test 10
console.log(" IS CAR === 'CYCLE' ? I GUESS FLASE.");
console.log(car === 'CYCLE');