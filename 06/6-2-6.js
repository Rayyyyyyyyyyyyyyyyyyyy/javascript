var sayHello = function(name) {
    console.log('Hello' + name);
}('world');
// 小括號放在後面 代表立刻執行function
console.log(sayHello);

// function sayHello(name) {
//     return 'Hello' + name
// }('world')
// console.log(sayHello());