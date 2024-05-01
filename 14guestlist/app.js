"use strict";
// guest list print
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
let guest_list = ["males_females", "enfants", "old", "children"];
exports.guest_list = guest_list;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madame " + guest_list[i] + ",\nYOU ARE INVITED FOR BIRTHDAY DINNER ON MONDAY.\n THANK YOU.\n");
}
