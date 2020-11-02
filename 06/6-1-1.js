// function sayHello() {
//     console.log('Hello')
// }
// sayHello()

// function saySomething() {
//     console.log('message');
// }
// saySomething()

// function add1(a, b) {
//     return a + b
// }
// console.log(add1(5, 456));

// var addFunWithName = function add2(a, b) {
//     return a + b
// }
// console.log(addFunWithName(564, 879))

// function test() {
//     var num = 18;
// }
// console.log(num);
// num在test裡面 叫不到

var globalNum = 18

function test() {
    console.log(globalNum);
}
test()
    // 在外面使用var定義的變數 可以從function裡面抓到