const myFunc2 = function () {
    let a = 1;
    let b = 2;

    const myFunc3 = function () {
        let b = 5;
        let c = 6;
        // 스코프 체닝을 통해 외부 함수의 a 값을 참조합니다.
        a = a + b + c;
        console.log(a);
    }

    // myFunc3(); 함수를 실행하지 않고 리턴하여 밖으로 뺍니다.
    return myFunc3
}

const innerFunc = myFunc2();

// return 키워드를 만남으로서 myFunc2는 메모리에서 지워집니다. 그렇다면 이때 myFunc3에서 참조하고 있던 a는 어떻게 될까요?
innerFunc();

// 자바스크립트에서 메모리 관리는 참조 카운팅이라는 방법으로 이루어 집니다. a를 여전히 myFunc3에서 참조하고 있기 때문에 myFunc2의 b는 사라지지만 a는 여전히 남아있습니다.
