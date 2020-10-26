function start() {
    console.log('start');
}

function doSomething() {
    console.log('Do something');
}

function end() {
    console.log('end');

}

function main(callback) {
    start()
    callback()
    end()

}
main(doSomething)