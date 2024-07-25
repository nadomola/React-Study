// 1. Number Type 
let num1 = 27;
let num2 = 1.5;
let num3 = -20; 

//기본적인 사칙연산 지원
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
// 나머지 구하는 연산은 모듈러 연산이라고 함 

//숫자로 보이지 않는 독특한 값 
let inf = Infinity; //양의 무한대 
let mInt = -Infinity; //음의 무한대 

let nan = NaN;
// not a number : 수치 연산 실패했을 때 결과값을 사용 
console.log(1*"Hello"); 
//불가능한 수치연산을 시켜도 프로그램이 종료되지 않는다 
// 수학연산에서 안전하다 ! 


// 2. String 
let myName = "남시윤";
let myLocaiton = "광명";
let myIntroduce = myName+myLocaiton;

console.log(myIntroduce);

let introduceText = `${myName}은 ${myLocaiton}에 거주합니다.`
//`${} 변수의 값 동적으로 집어넣기 가능 
console.log(introduceText);
//템플릿 리터럴 문법 -> ` 사용하느 ㄴ것 


// 3. boolean 타입 
let isSwitceOn = true;
let inEmpty = false;
//현재 상태 의미할 때 주로 사용 

// 4. Null 타입 
// 아무것도 없다 
let empty = null;
// empty 안에 아무것도 들어있지않다.  아무런 값도 없음 

// 5. Undefined 타입 
// undefined 만 포함하는 단 하나의 값 
// 변수 선언하고 어떠한 값도 넣지 않았을 때 자동으로 할당 되는 것 
let none;
console.log(none);
//하면 undefined 나옴 

//null과의 차이점 
// 의미는 똑같지만 
// null은 명시적으로 할당해줘야하지만 (프로그래머가 직접 표현함 )
// undefined는 아무것도 넣지 않았을 때 자동으로 할당 되는 것임 (미처 초기화하지 못했을 때, 혹은 불러오지 못하는 것 )

