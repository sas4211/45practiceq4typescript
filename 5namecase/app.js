"use strict";
// camel Case//
// snake_case//
// Pascel Case//
Object.defineProperty(exports, "__esModule", { value: true });
let personname = "samina amir";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
console.log(personname.replace(/\b\w/g, (char) => char.toUpperCase()));
