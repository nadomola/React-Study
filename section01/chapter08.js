// 1. null 병합 연산자 
// 존재하는 값을 추려내는 기능 
// null, undefined가 아닌 값을 찾아내는 연산자 

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; 
//?? 널 병합 연산자 
// 양 쪽 값중에 null, undefined가 아닌 값을 찾아서 var4에 저장함 
// 10 
// console.log(var4);

let var5 = var1 ?? var3;
// console.log(var5);

let var6 = var2?? var3; //둘 다아닐 경우에는 맨 처음에 적힌 값이 나옴 
// console.log(var6);

let username;
let userNickName ="Winterload";

let displayName = username ??userNickName;
// console.log(displayName);


// 2. typeof 연산자 
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자 
let var7 = 1;
var7 = "hello"; 
// var7 = 20;
//q변수의 타입이 고정되어있지 않음 

let t1 =typeof var7;  //현재 변수에 저장된 값의 타입 확인 
console.log(t1); 

// 3. 삼항 연산자 
// 항을 3개 사용하는 연산자 
// 항 : 연산에서 연산자 양쪽에 있는 것들 ... 
// 열병합 연산자는 항 두개 사용 
// 대부분 2개의 항을 사용함 
// 조건식을 이용해서 참, 기짓일 때의 값 다르게 함 
let var8 = 10;
//요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수 ="홀"

let res = var8 %2 === 0?"짝" : "홀";
//  조건식 ? 참일 때 반환값 : 거짓일 때 반환값 
console.log(res);






