"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = ['amir', 'noman', 'saba', 'admin'];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello Admin, Would You Like To See A Status Report");
    }
    else {
        console.log(`Hello ${user}, Thank You For Login In Again `);
    }
}
