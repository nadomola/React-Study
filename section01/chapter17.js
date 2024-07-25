//1. 배열 생성 (2가지 방법)
let araA = new Array(); //1. 배열 생성자 방법 

let araB = []; //배열 리터럴 (대부분 사용 )

let arrC = [1,2,3,true,"hello",
    null,
    undefined,
    () => {}, //홧라표함수 
    {}, //객체
    [],  //배열 
]; 
//길이 한계 없음 
console.log(arrC);

//2. 배욜 요소 접근 
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1,item2);

arrC[0] = "hello"; // 수저 
console.log(arrC);