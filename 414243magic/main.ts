// define function to showmagicine names
function showMagicNames(magicines:string[]){
    magicines.forEach(names => { console.log(names)
    });
}

function greatMagicie(magicines:string[]){
   return magicines.map(names => `The Great ${names}`);
    
}

// array of names
let magicinesName=["fahad","asim","basit","ahmed"]

///making a copy of array
let magicinesNameCopy=magicinesName.slice();
showMagicNames(magicinesNameCopy);

// call function to show magicine names
let GreateMagic = greatMagicie(magicinesName);

showMagicNames(GreateMagic);

