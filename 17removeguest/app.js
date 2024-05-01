"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ["ali", "amir", "asma", "sara", "raza"];
// guest not coming and new guest insert
let not_coming = "asma";
let new_guest = "maria";
guest_list[2] = new_guest;
console.log(`MISS. ${not_coming} WILL NOT BE COMING`);
// new guest added
guest_list.unshift("mustafa", "ahmed", "fatima");
for (let i = 0; i < guest_list.length; i++) {
    console.log("RESPECTED SIR/MADAME " + guest_list[i] + ".\nYOU ARE INVITED FOR GRAND DINNER AS WE HAVE GOT A BIGGER TABLE.\nTHANK YOU.\n");
}
;
// remove guest
console.log(`\nBAD NEWS! SORRY THE BIG TABLE IS NOT AVAILABLE SO WE ARE INVITING ONLY TWO PEOPLE \n`);
while (guest_list.length > 2) {
    let removed_guest = guest_list.pop();
    console.log(`\nWE ARE EXTREMLY SORRY DEAR ${removed_guest}, YOU ARE NOT INVITED FOR DINNER.\n`);
}
;
// remaning guest
for (let i = 0; i < guest_list.length; i++) {
    console.log(`DEAR ` + guest_list[i] + `,\nYOU ARE STILL INVITED.\nSEE YOU ON TIME\n`);
}
;
//empty array
guest_list.splice(0, 2);
