"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// equility and inequality test
console.log("EQUILITY TEST WITH STRINGS: ", "Train" === "Train");
console.log("INEQUILITY TEST WITH STRINGS: ", "Train" != "car");
//test using the lower case function
console.log("LOWER CASE FUNCTION TEST: ", "TraiN".toLowerCase() === "train");
// numerical test of equality
console.log("EQUILITY TEST WITH NUMBERS: ", 53 === 53);
// numerical test of inequality
console.log("INEQUALITY TEST WITH NUMBERS ", 54 != 59);
//greater than  
console.log("GREATER THEN TEST IS ", 50 > 45);
//greater than or equal to
console.log("GREATER THAN OR EQUAL TO IS  ", 50 >= 42);
// less then
console.log("LESS THAN IS ", 50 < 65);
//less than or equal to
console.log("LESS THAN OR EQUAL TO IS  ", 50 <= 50);
//using "and"
console.log("AND OPERATOR TEST:  ", 6 === 6 && 12 > 6);
//using "or"
console.log("OR OPERATOR TEST:  ", 6 === 4 || 12 > 6);
//whether an iteam is in a array
const cities = ['karachi', 'lahore', 'maree', 'swat'];
console.log('PRINT  "SWAT" IN ARRAY: ', cities.includes("swat"));
// item not  in array
const places = ['school', 'park', 'mall', 'market'];
//! is not symbol
console.log('PRINT  "SAWAT" NOT IN ARRAY: ', !places.includes('swat'));
