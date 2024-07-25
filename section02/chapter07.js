// 6가지 요소 조작 메서드 

//1. push 메서드 
// 배열의 맨 뒤에 새로운 요소를 추가하느 메서드
let arr1  = [1,2,3];
const newLength = arr1.push(4,5,6,7);

// console.log(arr1);
// console.log(newLength);

//2. pop 메서드 
// 배열의 맨 뒤에 있는 요소 제거, 반환 
let arr2 = [1,2,3];
const popedItem = arr2.pop(); //메서드의 결과값 (뽑힌 아이템 3 : 3이 삭제된다  )
// console.log(popedItem);
// console.log(arr2);

// 3. shift 메서드 
// 배열에서 맨 앞 요소를 제거 , 반환 
arr1 = [1,2,3];
const shiftedItem = arr1.shift();
// console.log(shiftedItem);
// console.log(arr1);

//4. unshift 
// 배열의 맨 앞에 새로운 요소를 추가하는 ㅔㅁ서드 ㅡ
arr4 = [1,2,3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2,arr4); //배열의 길이


// 3,4 는 1,2 보다 느리게 동작하니까 1,2 더 서라 


// 5.  slice 
// 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환 
let arr5 = [1,2,3,4,5];
let sliced = arr5.slice(2,5); // 잘라낼 시작 인덱스, 마지막 인덱스 +1 (5ㅈ번 인덱스 전까지 잘라낸다! 라는 뜻 )
// 어디서부터 마지막까지 잘라달라 라고 할거면 
let sliced2 = arr5.slice(2); //이렇게만 해도 됨 
// console.log(sliced2);
// console.log(sliced);

// console.log(arr5); //원본 배열은 그대로다 ! 

//뒤에서부터 잘라내기 
let sliced3 = arr5.slice(-1) // 뒤에서부터 한개만 잘라 
// console.log(sliced3);


//6. concat 
// 두개의 서로 다른 배열 이어 붙여서 새로운 배열 반환 
let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);