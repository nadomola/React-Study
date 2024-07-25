// truthy & falsy 
// 1. falsy한 값 (총 7개)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 ="";
let f7 = 0n; // Big interger 아주아주 큰 값 저장할 때 사용 (보통 이용 잘 안 함)
//조건문에서는 거짓으로 평가 됨

if (!f1){ //not 만났으니까 조건식 결국 참 
    console.log("falsy");
}


// 2. truthy한 값 
//7가지 falsy한 값 제외한 나머지 모든 값 
let t1 = "hello";
let t2 = 123;
let t3 = []; //배열 
let t4 = {}; // 객체
let t5 = ()=>{}; //화살표함수 

if(t4){
    console.log("truthy");
}

// 3. 활용 사례
// 조건문이 복잡
/*
function printName(person){
    if(person===undefined||person===null){
        console.log("person의 값이 없음 ");
        return;
    }

    console.log(person.name);
}
let person =null;
printName(person);
*/
//개선 
function printName(person){
    if(!person){ //person매개변수의 값이 null이나 undefined 들어왔을 때 
        //조건문이 참이 되기 때문에 내부 코드 실행되고 종료됨 
        console.log("person의 값이 없음 ");
        return;
    }

    console.log(person.name);
}
let person = {name :"이정환"};
printName(person);