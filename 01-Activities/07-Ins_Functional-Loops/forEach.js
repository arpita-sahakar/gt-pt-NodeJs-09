 // const myArray =["arpita", "abhishek" , "tiya" , "bandana"];

// for(i=0; i<myArray.length; i++){
//     let names = myArray[i];
//     printName(names);
  
// }

// function printName(names) {
//     console.log("hello " + names);
// }


// myArray.forEach(names => console.log("hello with foreach " + names));

const numArray= [1,2,3,4,5];
// for(i=0; i<numArray.length; i++){
//     let number = numArray[i];
//     resultDisplay(number, i);
// }

// function resultDisplay(number, i){
//     let result = number * 3;
//     console.log( "Result for " + i + "th element is " + result );

// }

numArray.forEach((num) => {
    let result = num * 3;
    console.log( "Result for " + result );
});



