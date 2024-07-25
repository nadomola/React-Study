/*function add(a,b,callback){
    setTimeout(()=>{ 
        const sum = a + b;///3 
        callback(sum); // 콘솔 대체 호출문 
    },3000);
}

add(1,2, (value)=>{
    console.log(value);
});
*/


//비동기처리의 결과값인 sum이라는 변수에 들어있는 값을 
//add함수 바깥에서도 이용할 수 있게 만들기! 
//add 함수 호출 시 인수로 비동기처리의 결과값(sum)을 사용하고자하는 콜백함수 함께 전달 
//콜백함수가 value라는 매개변수 받아서 콘솔에 그대로 출력하게 만듦 

// 음식을 주문하는 상황 
function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food,callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    },2000);
}

function freezeFood(food,callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    },1500);
}

orderFood((food)=>{
    console.log(food);

    cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood,(freezedFood)=>{
            console.log(freezedFood);
        })
    });
});

//인덴트(indent) : 들여쓰기 
// 쓸수록 가독성 구림 (콜백지옥..)
//비동기 작업 도와주는 promise 사용해야함 