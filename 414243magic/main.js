// define function to showmagicine names
function showMagicNames(magicines) {
    magicines.forEach(function (names) {
        console.log(names);
    });
}
function greatMagicie(magicines) {
    return magicines.map(function (names) { return "The Great ".concat(names); });
}
// array of names
var magicinesName = ["fahad", "asim", "basit", "ahmed"];
///making a copy of array
var magicinesNameCopy = magicinesName.slice();
showMagicNames(magicinesNameCopy);
// call function to show magicine names
var GreateMagic = greatMagicie(magicinesName);
showMagicNames(GreateMagic);
