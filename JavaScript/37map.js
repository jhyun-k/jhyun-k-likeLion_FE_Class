let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 2], '리얼리?') //이렇게는 호출되지 않습니다.

console.log(m)

console.log(m.get('하나'))
console.log(m.get(true)) // object에서 가능하지 않습니다.
console.log(m.get([1, 2])) // 이렇게는 호출되지 않습니다.

// Python Vs JavaScript 
// 1. Python
// python에서 아래 값은 다르게 나옵니다.
// x = [1, 2]
// id(x)

// y = [1, 2]
// id(y)

// x == y // python에서는 true
// x is y // python에서는 false

// 2. JavaScript
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false
// x === y // false

let m2 = new Map();
let test = [1, 2];

m.set('하나', 1) // 메서드 체이닝
    .set(true, '트루')
    .set(test, '리얼리?') // 이렇게는 호출됩니다.

console.log(m.get(test))

// Map에 해당 key값이 있는지 확인하기
m.has('하나')

// Map에 값을 제거하기
m.delete('하나')
m.has('하나')

// 크기 구하기
m.size

let data2 = new Map([['one', 1], ['two',2]]) // O
let data3 = new Map(Object.entries({'one':1, 'two':2})) // O
let data4 = new Map({'one':1, 'two':2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

// 직접 순회가 가능한 Map!
let data5 = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data6 = {'one':1, 'two':2}
for (const i of Object.entries(data)) {
    console.log(i)
}

let m3 = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m3) {
    console.log(i)
}

for (const [i, j] of m3) {
    console.log(i, j)
}

m3.keys()
m3.values()
m3.entries()


// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({'one':1, 'two':2}))
let 오브젝트 = Object.fromEntries(m3)