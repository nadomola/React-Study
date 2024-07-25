
function add10(num){
    const promise = new Promise((resolve, reject)=>{
        //비동기 작업 실행하는 함수 
        //executor 함수라고 부름 
    
        setTimeout(()=>{
            
    
            if(typeof num ==="number"){
                resolve(num+10);
            }
            else {
                reject("num이 숫자가 아닙니다");
            }
    
        },2000);
    
    });
    return promise;
}

add10(0)
.then((result)=>{
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

//then 메서드 
// -> 그 후에 
//promise의 비동기 작업이 성공했을 때만 호출됨 

// resolve 의 인수로 전달한 결과값을 매개변수로까지 전달해줌 
// promise.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// });
//프라미스 체이닝 문법이라고 함 ...


//resolve : promise 의 비동기 작업성공 
// reject: promise으 ㅣ비동기 작업실패 
//인수로 promise 의 결과값 전달할 수 있음 