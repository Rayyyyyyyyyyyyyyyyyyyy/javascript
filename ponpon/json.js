// 一般寫法

var point = new Object()
point.x = 3
Point.y = 4
point.get = function() {
    alert(this.x + "," + this.y)
}


// JSON寫法

var point = {
    "x": 3,
    "y": 4,
    "get": function() {
        alert(this.x + "," + this.y)
    }

};
point.get()
    /*
    物件結構與JSON格式字串轉換，使用內建JSON物件中的方法。
        使用Json.stringify(物件);將物件轉換成JSON格式的字串
        但會忽略函式部分
        使用JSON.parse(Json格式字串) 將字串轉換成物件


        */

var jsonStr = JSON.stringify(point) //把物件轉換成字串
console.log(jsonStr);
var plainObj = JSON.parse(jsonStr) //把字串轉換成物件
console.log(plainObj);