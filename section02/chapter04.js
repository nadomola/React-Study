//1. spread 연산자
// 흩뿌리다 , 펼치다 
//객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할 

let arr1= [1,2,3];
let arr2= [4,...arr1,5,6];

//원래 let arr2= [4, arr1[0],arr1[2],arr1[2],5,6]; 

//배열은 원래 중간에 값 바꿔가며서 쓰려고 있는 것 ㄱ
//그래서 원래 방법은 비효울적 

// ... 이 spread 
// console.log(arr2);

//당연히 객체에도 사용 가능 
let obj1 = {
    a:1,
    b:2,

};

let obj2 ={
    c:3,
    ...obj1,
    d:4,
};
// console.log(obj2);


//함수 호출할때도 활용 가능 
function funcA(p1,p2,p3){
    // console.log(p1,p2,p3);
}

funcA(...arr1); // arr1 배열을 순서대로 전달하고 싶다 ! 

// 2. Rest 매개변수 
// rest = 나머지 , 나머지 매개변수 
// 여러개의 매개변수를 받아야할 때 배열 형태로 
//한방에 여러개의 매개변수를 받아올 수 있게 해줌 

function funcB(one,...rest){ //한방에 모든 매개변수 받아올 수 있ㅇㅁ 
    //이건 spread아니라 rest 야 ! 둘은 달라 ! 
// one : 첫번째거는 다른 이름으로 받고싶다 ! 
//나머지는 rest 배열에 저장 
    console.log(rest); //q배열 형태로 
}

funcB(...arr1);

//주의사항 : ...rest 매개변수 뒤에느 추가적으로 매개변수 선언 불가 
//오류 발생 

//...만 붙이면 되기 때문에 rest 대신에 아무이름이나 써도 됨 