// function plusone(x) {
//     return x + 1
// }
// console.log(plusone(1));

// var arrowFun1 = function(x) {
//     return x + 1
// }

// console.log(arrowFun1(1));

var arrowFun2 = x => x + 1
console.log(arrowFun2(1));

var arrowFun3 = () => 'hello world'
console.log(arrowFun3());

var add = (a, b) => { console.log(a + b); }
add(5, 4)