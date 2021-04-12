

const User = usName => {
    this.name=usName;
    this.sayName = function () {
        console.log(this.name);
    }
    return this;
};


const ob1 = new User("Arpita");
const ob2 = new User("Abhishek");
ob1.sayName();
ob2.sayName();