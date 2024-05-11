function countdown(number :number):void{
    if (number<= 0){
        console.log("Drama has Started");
        return;
    }
    console.log(number);
    countdown(number -1)
}
countdown(8);

/// factorial
function factorial(n :number):number{
    if (n=== 0){
        return 1;
    }
    return n * factorial(n-1)
}
let response =factorial(5)
console.log(response);


