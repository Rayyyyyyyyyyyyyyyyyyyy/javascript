firstAsync(function(data1) {
    secondAsync(function(data2) {
        thirdAsync(function(data3) {

        })
    })
})
firstAsync()
    .then(function(data1) {
        return secondAsync()
    })
    .then(function(data2) {
        return thirdAsync()
    })
    .then(function(data3) {

    })