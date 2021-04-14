// Write code to create a function that accepts a string and returns the string in camelCase

// var camelCase = function(str) {
//   var result = "";
//   var words = str.toLowerCase().split(" ");

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     var letters = word.split("");

//     if (i > 0) {
//       letters[0] = letters[0].toUpperCase();
//     }

//     result += letters.join("");
//   }

//   return result;
// };

var camelCase = function(str) {
  var result = "";
  // var words = str.toLowerCase().split(" ");
  var splitWordsArr = str.toLowerCase().split(" ")
 ;

  for (var i = 0; i < splitWordsArr.length; i++) {
    var singleWordArr = splitWordsArr[i].split("");
    console.log(singleWordArr);

    singleWordArr[0] = singleWordArr[0].toUpperCase();
    console.log(singleWordArr);

    result = result + singleWordArr.join("");
    console.log(result);

    
    // singleWord = singleWord[i].toUpperCase + singleWord.subString(2);
    // var word = words[i];
    // var letters = word.split("");

    // if (i > 0) {
    //   letters[0] = letters[0].toUpperCase();
    // }

    // result += letters.join("");
  }

  console.log(result);
};

camelCase("How are you")