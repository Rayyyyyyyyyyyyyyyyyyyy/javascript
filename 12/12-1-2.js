function start() {
    console.log('start');
}

function doSomething(callback) {
    setTimeout(function() {
        console.log('Do something');
        callback()
    }, 1000)
}

function end() {
    console.log('end');
}

function main(callback) {
    start()
    callback(end)
}
main(doSomething)