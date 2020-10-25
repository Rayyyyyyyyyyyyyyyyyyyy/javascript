var txt = '我是XXX，我在資策會上課，資策會的全名是ooo，目前的課程是在學習javascript。'
var long = '以上字串的長度是:' + txt.length
var yes = '"會"這個字在這個字串最後出現的索引值是:' + txt.lastIndexOf("會")
var now = '目前'
console.log(txt.lastIndexOf(now))
var search = txt.lastIndexOf(now)
    // var search = now.length
console.log(txt)
console.log(long)
console.log(yes)
console.log(now, search, )