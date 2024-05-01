// make interface
interface item {
    name:string 
    price:number
}
// create 2 objects
const book: item ={
    name: 'essential typescript',
    price: 500
}
const copy:item ={
    name: 'workbook',
    price: 250
}
// we use \n for line gap
console.log(`book name:${book.name}, \nprice: rs${book.price}`)
console.log(`\ncopy name: ${copy.name},\nprice: rs${copy.price}`)