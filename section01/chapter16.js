//1. 상수 객체 
//상수에 저장해놓은 객ㅊ;
const  animal={
    type:"고양이",
    name:"나비",
    color:"balck",
};

// animal= {a:1}; //당연히 오류 (또 다른 객체 생성 )
animal.age =2; //추가
animal.name = "까밍이"//수정 
delete animal.color; //삭제 
console.log(animal);


//저장된 객체값의 프로퍼티 수정하는 것은 아무런 문제가 되지 않는다 


//2. 메서드 
// -> 값이 함수인 프로퍼티를 말함 
const person = {
    name : "이정한",

    //메서드 : 함수 저장하는 프로퍼티 
    sayHi:function(){ //익명 함수 
        console.log("안녕1");
    },

    sayBye : () =>{ //화살표 함수로ㄷ 가능 
        console.log("바이~");
    },
    // 더 단축된 형태도 가능 "메서드 선언"이라고 함
    //객체의 동작을 정의할때 사용  
    saynmae(){
        console.log("내 이름은 남시윤이야");
    },
};

//메셔드는 함수이 기 때문에 당연히 호출 가능 
person.sayHi();
person.sayBye();
person["sayname"](); //괄호표기법도 가능 
