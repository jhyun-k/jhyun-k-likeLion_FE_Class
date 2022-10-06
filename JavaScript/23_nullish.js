let firstName = null;
let lastName = null;
let nickName = '바이올렛';
//null이나 undefined가 아닌 첫번째 피연산자
console.log(firstName ?? lastName ?? nickName??'익명의사용자');

let a = null;
let b = 20;
let c = 30;

let d = a?? b?? c;

console.log(d);

//카카오톡
let 실명;
let 별명 = 'licat';
let 기본값 = '프로도';

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;

console.log(채팅창아이디);

// 차이점
let height = 0;
console.log(height || 100);//100 앞에가 0(false)니까 뒤에까지 확인해서 100 출력
console.log(height ?? 100);//0 null이나 undefined가 아닌 가장 먼저 값을 출력하므로 0출력

// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined