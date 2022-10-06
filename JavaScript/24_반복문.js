for(let i = 0 ; i < 10;i++){
    console.log(i);
}

// airbnb 컨벤션에 권장
// IE9 전부 사용 가능
for(const i in ['one','two','three']){
    console.log(i);
}

// airbnb 컨벤션에 권장
// IE 전부 사용 불가
for(const i of object){
    console.log(i);
}

