// 1. 대입 연산자 
let var1 = 1;
//가장 기초적인 오른쪽 값을 왼쪽에 넣는 것 
//대입 연산자 = 

//2 . 산술 연산자 
let num1 =  3 +2;
// - , / , * 
let num5 = 3%2; 
// 마지막은 모듈러 연산자 
// 모듈러는 덧셈 뺄셈보다 우선순위가 높다 
let num6 = 1+2 * 10;  
// 21 
// 곱셈이 먼저 일어나고, 덧셈 진행 

console.log(num6);

// 소괄호 이용해서 우선순위 만들기 ㅗ
let num7 = (1+2)*10;


// 3. 복합 대입 연산자 
//산술과 대입이 복합 
let num8 = 10;
//num8 = num +20;
//같은 표현 
num8+=20; 
num8-=20;
console.log(num8);
// *,/, % 도 가능 


// 4. 증감연산자 
//값을 1씩 늘리거나 줄이거나 
let num9 = 10;
num9++; // 후위 연산자 : 한 줄 내려가야 값이 올라감 
console.log(num9);
// 따라서 만약 
console.log(num9++); // 이렇게 했으면 그대로 10이 출력되었을 것 
//출력과 동시에 값 올리고 싶으면 전위연산자 사용하기 ++num; 
// -- 에서도 마찬가지 ! 

// 5. 논리 연산자 
//true 와 false  담을 때 사용 
// r값 하나만 참이어도 참 
let or = true || false 

// 둘 다 참이어야 참 and 
let and = true && false  

//참이면 거짓, 거짓이면 참 
let not = !true 

console.log(or, and , not);


// 6. 비교 연산자 
let comp1 = 1 ===2;  //동등
let comp2 = 1 !== 2; //비동등
console.log(comp1, comp2);

// == 만 사용하면 값의 자료형까지는 비교가 안 됨 
//1과 "1"을 같다고 출력할 걸 ?
// ==== 자료형까지 검사 
let comp3 = 2>1;
let comp4 = 1>2; 
console.log(comp3, comp4);

// >= , <=  이상 이하 알지 ?

