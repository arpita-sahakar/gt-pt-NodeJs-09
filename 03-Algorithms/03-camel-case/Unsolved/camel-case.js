// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = (str) => {
  let splitArr = str.split(" "); // ["Myyyy" "name" "is" "Arpita" "kar"]

  for (i = 0; i < splitArr.length; i++) {
    splitArr[i] = splitArr[i][0].toUpperCase() + splitArr[i].substring(1).toLowerCase();
  }
  let strJoin = splitArr.join("");
  let finalCamelCase = strJoin[0].toLowerCase() + strJoin.substring(1);
  console.log(finalCamelCase);
};

camelCase("Myyyy name is Arpita kar");
