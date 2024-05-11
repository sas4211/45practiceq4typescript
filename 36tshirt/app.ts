function shirtMaking(size:string ,printMessage:string) {
    console.log(`You Selected ${size} Size Shirt With ${printMessage} print On The Shirt`)
   }
    shirtMaking("large","Governer Sindh");

    function shirtDesgin(size:string = "Medium", printmessage:string = "I Love Typescript") {
        console.log(`Designing a ${size} Shirt With The ${printmessage} Print On The Shirt` );
    }
/// calling a function with default values
    shirtDesgin();

    ///calling a function with small sze and default message
    shirtDesgin("small");

    /// calling a function with xlarge size and different message
    shirtDesgin("xlarge","I Love JavaScript")