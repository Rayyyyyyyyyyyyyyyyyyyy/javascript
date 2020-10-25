var person = {
    man: 'aaaaa',
    age: '54',
    say: function() {
        console.log(hi);
        alert('hiiiii');
    }
}
console.log(person.say)

for (var i in person) {
    console.log('key' + i);
}