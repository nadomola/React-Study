// 1. 배열의 구조 분해 할당 
let arr = [1,2,3];

let [one, two,three,four= 4 ] = arr; 
// let[] 안에 변수 선언 
console.log(one,two, three,four);
//값 없으면 undefined 


//2. 객체의 구조분해 할당 
let person ={
    name : "남시윤",
    age : 27,
    hobby : "테니스",
};

//원래 
//let name = person.name 


//객체는 {} 이용
let {name,
    age :myAge, //age가 아니라 myAge에 담기 
    hobby,
    extra=true,
} = person;
// console.log(name,myAge,hobby,extra);


// 3. 객체의 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법 
const func = ({name,age,hobby,extra})=>{ //구조분해할당 

    console.log(name,age,hobby,extra);
}

func(person);