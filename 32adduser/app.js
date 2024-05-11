"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let currentUsers = ["amir", "sana", "babar", "ali", "asim"];
let newUsers = ["umer", "khalid", "amir", "ijaz", "Ali"];
// loop through newUser to check for username availability
// making condition for usename already exist and save in our_condition variable
newUsers.forEach(newOneUser => {
    let our_condition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase());
    /// if else condition for printing messages
    if (our_condition) {
        console.log(`Sorry ${newOneUser} is already exit `);
    }
    else {
        console.log(`This Username ${newOneUser} Is Available`);
    }
});
