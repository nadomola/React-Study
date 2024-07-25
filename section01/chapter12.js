//1. 함수 표현식 
//값으로서 취급됨 

//일반적인 것 
function funcA(){
    console.log("funcA");
}

let varA = funcA; //함수 자체를 변수에 담기 
// console.log(varA); //함수식이 출력됨 
// varA(); // funcA 문자열 출력됨 


// 이게 함수 펴햔식 
//선언식이 아닌 값으로서 함수가 생성됨 
let varB = function (){ //함수 만들자마자 바로 변수에 담아버리기 
    console.log("funcB");
};
varB(); //호출 
funcB(); // 값으로 함수가 생성되서 이 함수 호출문은 오류를 일으킴

// 따라서 fucB()라는 이름 생략해도 가능 -> "익명함수"라고 부름 
//그래서 호이스팅도 안 됨 
//향후 배울 콜백함수에서 유용하게 활용되니 꼭기억하기 



//2. 화살표 함수 
// 함수 이전보다 더 빠르고 간결하게 생성 
let varC  =() => { // 소괄호와 중괄호 사이에 => 삽입 
    return 1;
} 
// console.log(varC());
//그냥 반환만 할거라면 
let var4 = () => 1; //이것도 가능 ...
// console.log(var4());

//매개변수도 가능 
let varD = (value) => {
    //중괄호 삽입해서 
    // console.log(value); 
    
    return value+1;
}

// console.log(varD(10));