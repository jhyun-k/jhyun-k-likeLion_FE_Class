// 집합, 합집합, 교집합, 차집합

let s = new Set('abcdeeeeeeeee');

console.log(s);
console.log(s.size);

// 문제
회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?

let board = new Set(회사게시판)

console.log(board);
console.log(board.size);
for (const i of board) {
    console.log(i, 회사게시판.filter(e => e === i))
}
for (member of board) {
    console.log(member, 회사게시판.filter((x) => x === member).length)}

let map = new Map();
for (const i of 회사게시판) {
    map.set(i, (map.get(i) ||  0) + 1); // 순회 돌면서 해당 key값을 업데이트 해주는 식으로
}

// 서현주님 코드
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 1)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 2)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 3)
map.set('김은하', (map.get('김은하') ||  0) + 1)
// => map.set('김은하', 1)


// set 순환하기
let set = new Set('abcdefg')
s.add('h')

for(let variable of set) {
    console.log(variable);
}

//값이 배열인 경우
let ss = new Set('abceddd'.split(''))
    console.log(ss);
