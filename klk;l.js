for (var i = 0; i < 5; i++) {
    var j = 0
    setTimeout(function() {
        console.log(j)
        j++
    }, i * 1000)
}