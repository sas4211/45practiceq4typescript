"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describeCity(city, country = "Pakistan") {
    console.log(`${city} Is In The ${country} `);
}
describeCity("Karachi");
describeCity("Lahore");
describeCity("Dehli", "India");
//return function
function cityCountry(city, country) {
    return ` ${city} ,${country}`;
}
/////print the return value
cityCountry("Karachi", "Pakistan");
console.log(cityCountry("Karachi", "Pakistan"));
///the value is store in varabile only call not print 
cityCountry("London", "England");
cityCountry("Tokyo", "Japan");
console.log(cityCountry("Tokyo", "Japan"));
// not stored only print
console.log(cityCountry("Dubai", "UAE"));
