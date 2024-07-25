// 1. 콜백함수 

/*function main(value){

    console.log(value); //함수식이 출력 
    value();// 함수 호출 -> i am sub 가 출력 
}

function sub(){
    console.log("i am sub");
}
main(sub); //sub가 콜백함수 
//왜 콜백 ?
// sub는 당장 실행되는게 아니라 main함수 인수로 전달되어
//main함수가 알아서 실행하기 때문에 
// 콜백함수는 메인함수가 원하는 타이밍에 언제든 실행시킬 수 있다 


//이것도 가능 
main(function sub(){ //함수 표현식에서는 익명함수 (함수 이름 없는거) 써도 문제 없다 !
    console.log("i am sub");
}); //선언문 자체를 안으로 넣어서 
//아예 function 지우는 것도 가능 

main(() => {
    // console.log("i am sub");
});

*/
//콜백함수 예제 
//2. 콜백함수의 활용 
function repeat(count,callback){
    for(let i = 1; i<=count; i++){
        callback(i); //콜백함수 호출 
    }
}



repeat(5,function(i){
    console.log(i);
});
//두번째 인수로 매개변수 받아서 그대로 출력하는 콜백함수를 보냄 

//비슷한 중복 코드를 극복하는거임 

repeat(5, function(i){
    console.log(i*2);
});
//중복코드 제거하면서 간단히 코드 작성 가능 
//여기서 더 간단히 하려면 
repeat(5,(i)=> { //화살표 이용 
    console.log(i*3);
});


