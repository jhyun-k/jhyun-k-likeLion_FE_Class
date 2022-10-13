//문제2
// hint code : '5, 4, 10, 2, 5'.split(',')
let string = '5, 4, 10, 2, 5'.split(',')
//  console.log(string);
let num = []
for(let i =0;i<string.length;i++){
    num.push(parseInt(string[i]))
}
// console.log(num);
function solution(arr){
    let sum = 0;
    for(let i = 0; i< arr.length;i++){
        sum += arr[i]
    }
    console.log(sum/arr.length)
}
solution(num)

//문제3
// hint 문자열로 변환해서 풀어주세요!
let arr = [11, 22, 33, 111, 2]
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17

let str = arr.join('')
let sum = 0;

for (let i in str) {
    sum += parseInt(str[i], 10);
  }

  console.log(sum);

// 문제4
// - 반복문만 사용하여 숫자단위 콤마 찍기(예 - 1,000,000)
// - 반복문만 사용하여 숫자단위 콤마 없애기(예 - 1,000,000 → 1000000)
// - 문자열 뒤집기
/* let  = 10000

for (let i = array.length-1; i >=0; i--) {
	console.log(i);
}
 */
function addComma(num){
    if(num.length<=3){
        return num
    }

    let count = Math.floor((num.length-1)/3);
    let result = "";
    
}

