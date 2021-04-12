// Run this from the command line using 'node index.js'
//Anonymous function with call on single line
(function () {
  // console.log(this);
  console.log("Hello world from anonymous function");
})();

//Anonymous function assigned to a variable
var anotherFunction = (function () {
 console.log("Another anonymous function");
});
 anotherFunction();

//Named function
function initialize() {
  // console.log(this);
  console.log("Hello world from named function");
}
initialize();