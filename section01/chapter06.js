// 형변환 

// 1. 묵시적 형변환 -> 자바 스크립트 엔진이 알아서 
let num  = 10;
let str = "20";

const result = num + str;

// console.timeLog(result);
//숫자를 문자열로 묵시적 형변환 


//명시적 형변환 
// 프로그래머가 내장함수 등을 이용해 직접 형변환 명시 
//내장함수 : 자바 스크립트가 기본적으로 제공 
let str1 = "10";
let strToNum1 = Number(str1); // 형변환 하고 싶은 값 넣기 
// console.log(10 + strToNum1); // 20이 출력됨 


let str2 = "10개";
let strToNum2 = Number(str2);
// console.log(strToNum2); //NaN 나옴 - 형변환 실패 

//parseInt 사용하면 됨 (근데 숫자가 앞에 있는 걸로 해야함 "개10"보다 "10개")
let strToNum3 = parseInt(str2);
console.log(strToNum3);

//숫자 -> 문자열
let num1 = 20;
let numTostr1 = String(num1);
console.log(numTostr1+"입니다.");