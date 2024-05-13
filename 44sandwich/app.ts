/// define a function with a rest parameter ...
function makesandwich(...items:string[]){
    console.log("\nMaking a Sandwiche With Following Items:\n");
    items.forEach(item => console.log(item));

    console.log("Now Enjoy The Sandwich");
}

makesandwich("bread","chesse","mayo","chicken","tomatoes");

makesandwich("bread","jam","butter")

makesandwich("bread","lettuce","tomatoes","beef","chesse","mayo","ketchup","eggs");
