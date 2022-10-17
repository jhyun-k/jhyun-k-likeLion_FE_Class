/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/

// - pending(대기상태) - resolve(해결) - fulfilled(성공)
// - pending(대기상태) - reject(거부) - rejected(실패)


// resolve
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
})

console.log(p)
console.log(p)


// reject
let r = new Promise(function(resolve, reject){
// 비동기적으로 실행될 code 작성
reject('hello world')
}).then(메시지 => {
alert(메시지)
return 메시지.split(' ')[0]
}).then(메시지 => {
alert(메시지)
return 메시지[0]
}).then(메시지 => {
alert(메시지)
return 메시지
}).catch(메시지 => {
alert('catch 실행!!')
})

console.log(p)
console.log(p)


// resolve인데 중간에 error가 던져졌을 때
let e = new Promise(function(resolve, reject){
// 비동기적으로 실행될 code 작성
resolve('hello world')
}).then(메시지 => {
alert(메시지)
return 메시지.split(' ')[0]
}).then(메시지 => {
alert(메시지)
throw Error('Error 발생! 경고경고!')
return 메시지[0]
}).then(메시지 => {
alert(메시지)
return 메시지
}).catch(메시지 => {
console.log(메시지)
alert('catch 실행!!')
})

console.log(p)


// 예제를 위한 예제, 이런식으로 처리하지 않습니다.
let ex = new Promise(function(resolve, reject){
// 비동기적으로 실행될 code 작성
resolve('hello world')
}).then(메시지 => {
alert(메시지)
return 메시지.split(' ')[0]
}).then(메시지 => {
alert(메시지)
throw Error('Error 발생! 경고경고!')
return 메시지[0]
}).then(메시지 => {
alert(메시지)
return 메시지
}).catch(메시지 => {
console.log(메시지)
alert('catch 실행!!')
}).then(메시지=>{
alert('catch 이후에 then')
throw Error('Error 발생! 경고경고!')
}).catch(메시지 => {
console.log(메시지)
alert('catch 이후에 then 이후에 catch 실행!!')
})

console.log(p)

// 입력 시간 걸리게 작성
let d =  new Promise(function(resolve,reject){
    setTimeout(()=>resolve('끝!!',5000))
})
console.log('hello woorld');
console.log(p);

let pr = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 10000); // (*)
  
  });
  console.log('hello world');
  let pr2 = p.then(function(result) { // (**)
  
    console.log(result); // 1
    return result * 2;
  
  });
  console.log('hello world2');
  let pr3 = p2.then(function(result) { // (***)
  
    console.log(result); // 2
    return result * 2;
  
  });
  console.log('hello world3');
  let pr4 = p3.then(function(result) {
  
    console.log(result); // 4
    return result * 2;
  
  });

  // 우리가 뒤에서 배울 async나 fetch도 Promise를!?
let test = async function(){
    return 'hello world'
}

test
test() // Promise {<fulfilled>: 'hello world'}

let data = fetch('http://test.api.weniv.co.kr/mall')
data


fetch('http://test.api.weniv.co.kr/mall')
    .then(메시지 => {
        console.log(메시지)
        return 메시지.json()
    })
    .then(메시지 => {
        console.log(메시지)
    })
    .catch(메시지 =>{
        // alert(메시지)
        alert('홈페이지가 정상적으로 작동하지 않고 있습니다. 조치중이오니 잠시만 기다려주시기 바랍니다.')
        console.log(메시지)
    })


// 프로미스 체이닝의 다른 형태
let pc = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 10000); // (*)
});
  console.log('hello world');
  
let p2 = p.then(function(result) { // (**)

console.log(result); // 1
return result * 2;

});
console.log('hello world2');
let p3 = p2.then(function(result) { // (***)

console.log(result); // 2
return result * 2;

});
console.log('hello world3');
let p4 = p3.then(function(result) {

console.log(result); // 4
return result * 2;

});

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});