/// define a function with a rest parameter ...
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwiche With Following Items:\n");
    items.forEach(function (item) { return console.log(item); });
    console.log("Now Enjoy The Sandwich");
}
makesandwich("bread", "chesse", "mayo", "chicken", "tomatoes");
makesandwich("bread", "jam", "butter");
makesandwich("bread", "lettuce", "tomatoes", "beef", "chesse", "mayo", "ketchup", "eggs");
