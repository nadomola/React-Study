// 5가지 배열 변형 메서드
// 1. filter 
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
let arr1 = [
    {name : "남시윤", hobby:"테니스"},
    {name : "남지원", hobby:"테니스"},
    {name: "메서드", hobby:"독서"},
];

const tennisPeople =arr1.filter((item)=>{
    if(item.hobby ==="테니스")
        return true;
});

console.log(tennisPeople);


//2. map 
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들ㅇ르 모아서
// 새로운 배열로 반환 
let arr2 = [1,2,3];
const mapResult = arr2.map((item,idx, arr)=>{
    return item *2;
});

// console.log(mapResult);

// map 실용적인 사례 

let names = arr1.map((item)=>item.name); 
// console.log(names);

//3.  sort 
// 배열을 사전순으로 정렬하는 메서드 
let arr3= [10,3,5];
arr3.sort();

// console.log(arr3);
//주의 사항 배열이 숫자라면 ?
// sort 는 배열을 사전숫으로 한다면 숫자의 대소 비교 기준 넘겨야함 
arr3.sort((a,b)=>{
    //오름 차순 
    if(a>b){
        //b가 ㅇa 앞에 와라 
        return 1;  //b,a 배치
    }
    else if(a<b){
        //a가 b 앞에 와라 
        return -1; //a,b 배치 
    }
    else {//두 값이 같다면 
        return 0; //a,b 자리 그대로 유지 
    }
})

// console.log(arr3);


// 4. toSorted (가장 최근에 추가된 최신함수 )
// sort와 똑같아 - 배열 정리
// 차이점 : 원본 냅두고 새로운 배열 반환 하는 ㅔㅁ섣,
let arr5 = ["c","a","b"];
const  sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

//5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드 
let arr6 = ["hi","im","siyun"];
const joined = arr6.join(" "); //구분자 설정 

console.log(joined);