// 1, if 조건문 
let num = 9;

if(num>=10){
    // console.log("num은 10 이상입니다.");
   // console.log("조건이 참 입니다.");
}

else if(num>=5){
    // console.log("num은 5 이상입니다.");
}
else if (num>=3){
    // console.log("num은 4 이상입니다.");
}
else {
    // console.log("조건이 거짓입니다.");
}

//if로 시작해서 else 로 끝나기  
//if 로 시작해서 else 없이 끝내기 


//2. switch 
// if 와 기능 자체는 동일 
// 다수의 조건을 처리할 때 if 보다 더 직관 

let animal = "owl";

switch(animal){ // ()안에 비교하고 싶은 변수를 넣기 
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("강아지");
        break;
    }
    case "bear":{
        console.log("곰");
        break;
    }
    case"snake":{
        console.log("뱀");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }
    default: console.log("그런 동물은 모릅니다.");
}
