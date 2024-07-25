// 1. 배열 순회 
let arr = [1,2,3];

// 1.1 배열 인덱스 이용 
for(let i = 0; i<arr.length; i++){ //length = 3
    // console.log(arr[i]);
}

//length : 배열의 길이 저장하는 프로퍼티, 모든 배열에 내장되어있음 

let arr2 = [4,5,6,7,8];
for(let i = 0; i<arr2.length; i++){ //length = 5
    // console.log(arr2[i]);
}

// 1.2 for of 반복문 
// 오직 배열을 순회하기 위한 반복문 
for(let item of arr){ //arr 에 있는 값 하나씩 꺼내서 변수 item에다가 저장 
    // console.log(item);
}

//둘 다 성능 상의 차이는 없지만 .. 
// 1.1 인덱스를 통한 활동 가능 
// 1.2 배열안에 있는 값을 그냥 순회한ㄴ다 
//알아서 편한거 사용하면 된다 


//2. 객체 순회 
let person = {
    name : "남시윤",
    age : 28,
    hobby : "테니스",
};

//2.1 object.keys 사용 
// 주어진 객체에서 key 값들ㄹ만 ㅃ보아서 새로운 배열로 반환 
let keys = Object.keys(person);

// console.log(keys);

for(let i =0; i<keys.length;i++){
    // console.log(keys[i]);
}


//for of 이용 
for (let key of keys){
    const value = person[key];
    // console.log(key, value); // key랑 value 순회 
}


// 2.2 Object.values 
// 객체에서 value 값들만 ㅃ보아서 새로운 배열로 반환 
let values = Object.values(person);
// console.log(values);

for(let value of values){
    console.log(value);
}

//2.3 for in 객체만을 위해 존재하는 특수한 반복문 
for(let key in person){ //person에 있는 키를 key 에 할당 
    const value = person[key];
    console.log(key,value); //키 값 value 값 동시 순회 
}

//주의 사항 : for in 과 for of 헷갈 ㄴㄴ 
//for in  : 객체에만 
// for of : 배열에만 /