// 스코프 (변수의 유효범위)
// 스코프는 전역스코프, 함수스코프, 블록스코프 세가지가 존재합니다.

// 전역스코프는 어디서든 접근할 수 있기 때문에 사용이 쉽지만 타인과의 협업이나 라이브러리 사용시 충돌의 가능성이 있습니다.
// 메모리 사용면에 있어서도 좋지 않습니다. 전역에 선언된 변수는 프로그램이 끝날 때까지 메모리를 점유합니다.

const myFunc = function () {
    let a = 1;
    let b = 2;
    return a + b
}

// a의 값에 20을 할당하면 함수의 결과는?
// let a = 20;
// console.log(myFunc());


// b변수에 접근할 수 있는가?
// console.log(b);


// 함수 내부에서 정의된 변수와 매개변수는 외부에서 접근할 수 없습니다.
// 함수 내부에서 정의된 변수와 매개변수는 함수의 안에서는 어디있든 접근할 수 있습니다.
const myFunc2 = function () {
    let a = 1;
    let b = 2;

    const myFunc3 = function () {
        let b = 5;
        let c = 6;
        // 함수스코프 안에 필요한 
        a = a + b + c;
        console.log(a);
    }

    myFunc3();
}

myFunc2();