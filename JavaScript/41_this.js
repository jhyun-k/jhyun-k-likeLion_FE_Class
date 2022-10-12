function a(){ 
    console.log(this)
}
a();

function b(){
    console.log('hello world')
}
b()
window.b()

let test = {
    one:1,
    two:2,
    three: function(){
        console.log(this)
    }
}

test.three()
let test2 = test.three

// 추가 예제 //

function sayName(){
    console.log(this.name);
}

var name = 'Hero';

let peter = {
    name: 'Peter Parker',
    say: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

sayName();
peter.say(); 
bruce.say();

function a(){
    console.log(this.name)
    function b(){
        console.log(this.name)
    }
    b()
}
a()

function a(){
    console.log(this)
    function b(){
        console.log(this)
    }
    b()
}
a()