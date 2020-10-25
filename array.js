var a = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(a.indexOf(5))
    // 第5個位子的東西
console.log(a.push(5, 10))
    // 在後面增加東西
console.log(a.unshift('a', 'c'))
    // 把東西加到最前面
console.log(a.pop())
    // 拿出最後一個
var c = console.log(a.pop())
    // 取出的可以放進變數裡
console.log(a.reverse())
    // 反轉陣列
console.log(a.splice(5, 2, 20))
    // 5是起始位子
    // 2是要砍幾個
    // 20是要增加的東西
console.log(a.join('~~~~~~~~~~~~~'))
    // 把物件間的逗點替換成自己想要的東西
var b = a.slice(3, 5)
    // 擷取指定位子的東西
console.log(b)