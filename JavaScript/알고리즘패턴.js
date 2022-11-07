
'abde15283abced'.split('')
(14) ['a', 'b', 'd', 'e', '1', '5', '2', '8', '3', 'a', 'b', 'c', 'e', 'd']
Array.from('abde15283abced')
(14) ['a', 'b', 'd', 'e', '1', '5', '2', '8', '3', 'a', 'b', 'c', 'e', 'd']
'abde15283abced'.split('').filter(v => +v) // 숫자만 찾기
(5) ['1', '5', '2', '8', '3']
'abde15283abced'.split('').filter(v => +v).map(v => parseInt(v)) //문자 숫자로 바꾸기....
(5) [1, 5, 2, 8, 3]
'abde15283abced'.split('').filter(v => +v).map(v => parseInt(v)).reduce((a, c) => a + c) //숫자들 누적하기...
19

'onetwothreefour'.match(/(one|two|three|four)/g)
(4) ['one', 'two', 'three', 'four']
let s = {'one':1, 'two':2, 'three':3, 'four':4}
undefined
let ss = 'onetwothreefour'.match(/(one|two|three|four)/g)
undefined
for (i of ss){
    console.log(s[i])
}
