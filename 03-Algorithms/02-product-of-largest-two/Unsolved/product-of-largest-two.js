// Write code to create a function that accepts an array of numbers,
// finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = (arr) => {
  //   opt - 1
  //   let max = Math.max.apply(null, arr);
  //   arr.splice(arr.indexOf(max), 1);
  //   let secMax = Math.max.apply(null, arr);

  //   let productOfTwo = max * secMax;

  //   console.log(max);
  //   console.log(secMax);
  //   console.log(productOfTwo);

  // Opt - 2
  // let highestNum = 0;
  // let secondHighestNum = 0;

  // for(i=0; i<arr.length; i++){
  //     if(arr[i]>highestNum){
  //         secondHighestNum = highestNum;
  //         highestNum = arr[i]
  //     }
  // }
  // let productOfTwo = highestNum * secondHighestNum

  // console.log(productOfTwo);

  let highestNum = null;
  let secondHNum = null;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > highestNum || highestNum === null ) {
      secondHNum = highestNum;
      highestNum = arr[i];
    } else if (secondHNum < arr[i] || secondHNum === null) {
      secondHNum = arr[i];
    }
  }
  let productOfTwo = highestNum * secondHNum;
  console.log(`highest number is ${highestNum}, second highest number is ${secondHNum}, product of first and second highest number is ${productOfTwo}`);

};

productOfLargestTwo([40, -2, -15, -10,-4]);
// productOfLargestTwo ([50,10,35,4])
