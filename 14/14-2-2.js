function Dog(name, age) {
    this.name = name
    this.age = age
    this.eat = function() {
        console.log(this.name, '吃飼料');
    }
}
var smallDog = new Dog('阿旺', 1)
console.log(smallDog.name);
console.log(smallDog.age);
smallDog.eat()

var bigDog = new Dog('小笨狗', 5)
console.log(bigDog.name);
console.log(bigDog.age);
bigDog.eat()