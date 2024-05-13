// define a function to create a car object with optional option

function createcar(manufacturer:string, modelName:string, ...options:string[]){
let car = {
    manufacturer: manufacturer,
    modelName: modelName,
};
// add additional options to car object
options.forEach(options => {
    let [key, value]= options.split(":");
    car[key.trim()] = value.trim();

});
return car;
}

let thecar = createcar("honda","city","colour:white","year :2023","sunroof:yes");
console.log(thecar);
