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

let input = arr
let output = 0
// for(let i = 0;i<input.length;i++){
//     for(let j=0;j<i.length;j++){
//         console.log(i)
//     output = output + i[j]
//     }
// }
for(let i=0;i<input.length;i++){
    for(let j=1;j<i.length;j++){
        console.log(j)
    }
}

console.log(output);