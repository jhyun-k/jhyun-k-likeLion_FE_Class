/* const jihyun = {
    name : 'jyeniii',
    age : 26,
    job : 'no',
    like : 'cat',
    hobby : 'reading book',
    studing : function(js){
        js.levelUp();
    }
}

const js = {
    level : 1,
    levelUp: function(){
        this.level++
    }
}
console.log(jihyun.studing(js));

 */


function NewFood (food){
    this.food = food;
    let randomNum = parseInt(Math.random()*food.length-1)
    let whatFood = food[randomNum]
    this.random = function(){
        return (`오늘의 점심은 ${whatFood}`)
    }
}
let food = new NewFood(['pizza','cookie','chicken','rice','apple','banana','salad','mara',])
console.log(food.random())

