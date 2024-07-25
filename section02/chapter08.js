// 5가지 요소 순회 및 탐색 메서드 
//1.forEach
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드 
let arr1 = [1,2,3]; // 3회 호출

arr1.forEach(function (item,idx, arr) {//콜백함수 (현재요소 값 ,현재 반복 카운트,  전체배열의 값) 전달 

    // console.log(idx, item*2);
}); 
// item, idx , arr 
 // 1     0 arr
 // 2     1 arr
 // 3     2 arr 


 //연습2
 let doubleArr = [];
 //arr에 모든 값에 *2해서 저 배열에 넣어 
arr1.forEach((item)=> {
    doubleArr.push(item*2); //배열 요소 순회 ... 앞으로도 자주 쓸거임 ㅠ


 });

//  console.log(doubleArr);


 //2 .탐색 includes 
 // q배열에 특정 요소가 있는지 확인하는 그런 메서드 
 let arr2 = [1,2,3];
let isInclude =  arr2.includes(3);
// console.log(isInclude); //true 출력 


//3. indexOf 
//배열탐색 
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드 
let arr3 = [1,2,3];
let index = arr3.indexOf(2); //2 값 어디있는지 인덱스 반환해라 
// console.log(index); //출력 :1


// arr3 = [2,2,2]; 이렇다면 가장 앞에 걸 출력 (0) 
// 만약 arr.indexOf(20); -> 배열에 존재하지 않는 것: -1 반환 

//4.findIndex 
// 특정요소를 순회하면서, 콜백함수를 만족하는 그런 
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1,2,3];
const findedIndex = arr4.findIndex((item)=>{//콜백함수 만족하는 배열 찾아서 반환 (콜백함수 만족:콜백함수가 참을 반환한다  )
    if(item %2 !== 0) //가장 처음으로 이 조건 만족하는 인덱스 찾아서 위치 반환해줌 
        return true; 
}); 

console.log(findedIndex);// 0 출력 
// 더 간단하게 작성 가능 
// const findedIndex = arr4.findIndex9item) => item%2 !==0); 
// 조건 만족안 하면 -1 반환 

//findIndex 가 존재하는 이유 :객체 저장하는 배열 할 때 indexOf 로 못 함 
//indexOf 는 얕은 비교 함 
let objectArr = [
    {name :"남시윤"},
    {name: "홍길동"},
];

console.log(
    objectArr.indexOf({name:"남시윤"})
); //못 찾아서 -1 출력됨 
//indexof로는 특정 객체값 존재하는 거 못 찾음 


//findIndex 쓰면 ?
console.log(
    objectArr.findIndex(
        (item)=>item.name ==="남시윤"
    )
);
//복잡한 객체값도 조건으로 쉽게 찾아낼 수 있다 
//원시타입에는 indexOf 쓰고 
//복잡한 객체타입 찾을때는 findIndex 쓰면 좋다 

//5. find 메서드 
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾느넫,
// 요소를 그대로 반환 
let arr5 =[
    {name:"남시윤"},
    {name:"홍길동"},
];

const finded = arr5.find((item)=>item.name ==="남시윤");
//요소 자체를 반환 
console.log(finded);