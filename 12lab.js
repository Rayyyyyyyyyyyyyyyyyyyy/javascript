function fun1(number, ...theArgs) {
    console.log(theArgs.length);
    if (theArgs.length < 0)
        return theArgs.join();

}
console.log(fun1());
console.log(fun1(5, 6));