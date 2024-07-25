// 1. 객체 생성 (2가지 방법 )
let obj1 = new Object(); //객체 생성자 이용 
let obj2 = {}; //빈 중괄호 이용 (객체 리터럴 방법 이라고 함 )대부분 이거 많이 사용 


// 2. 객체 프로퍼티 (객체 속성 ) key : value 
let person ={
    name : "남시윤",
    age : 27,
    hobby : "발레", // 객체의 실질적인 정보 담고 있음 
    job : "학생",
    extrs: {}, //함수나 boolean도 가능 
    10: 20,
    "like cat": true,
}; //name,age,hobby 프로퍼티가 존재 
//프로퍼티의 개수 제한 없고
//value에 들어오는 자료형의 타입도 제한 없음 
//key값으로는 문자열이나 숫자만 가능 
//key값이 문자열일 때 "" 안 붙여도 되지만 띄어쓰기 할때는 "" 붙여야함 

// 3. 객체 프로퍼티 다루는 방법 
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호표기법)
let name =person.name; 
// console.log(name); 

//괄호표기법:접근하고자 하는 프로퍼티의 키를 문자열로 명시
let age = person["age"]; //쌍따옴표!
console.log(age);

let property="hobby";
let hobby = person[property];
console.log(hobby);


//3.2 새로운 프로퍼티 추가하는 방법 
person.job="백수";
person["favoriteFood"]="떡볶이";
console.log(person);

//3,3 프로퍼티 수정 
person.job="판사";
person["favoriteFood"]="쌀국수";
console.log(person);

//3.4 프로퍼티 삭제 
delete person.job;
delete person["favoriteFood"];
console.log(person);


//3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자 )
let result1= "name"in person;
//네임 키가 person에 들어있냐 
//존재하면 true 
console.log(result1);