let car = {
    name : "nissan",
    year : 2015
}
console.log(car.name);
console.log(car["name"]);
car["make"] = "abcd";
console.log(car);
car["year"] = car["year"] + 1;
console.log(car);