var obj = {
    name: 'Jack',
    printName: function() {
        console.log(this);
    }
}
obj.printName()