let places :string[] =["Karachi", "Islamabad", "Paris", "NewYork", "Dubai"];
//prin array in alphabetical
console.log(`original list of places ` + places);
//prnt in alphabetical without modifying the acual list
console.log(`copy list  ` + [...places].sort());
//printing original
console.log(`1 original list of places ` + places);
//printing reverse aplhabetical without modification
console.log(`1copy list ` + [...places].sort().reverse());
//Printing original 
console.log(`2original list of places ` + places);
//printing the reversed order
console.log(`2original list ` + places.reverse());

console.log(`3original list of places ` + places.reverse());




