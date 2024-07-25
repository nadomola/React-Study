// 함수 선언 (미리 준비해두는 작업)
/*
function greeting(){
     console.log("환영합니다");
}


//함수 호출(그래야 함수가 동작함)
console.log("호출 전 ");
greeting(); // 반드시 소괄호 함께 작성 
console.log("호출 후");
*/

function getArea2(){
    let width = 4;
    let height = 4;
    let area = width*height;
    // console.log(area);
}

// getArea2();


// 동적으로 직사각형의 넓이 구하는 함수 
function getArea(width, height){ // 매개변수 

    let area = width * height;
    // console.log("직사각형의 넓이는 " + area+"입니다."); 
}

// getArea(5,10); //인수 

//함수 호출하면서 인수 전달하면 
//전달된 인수는 함수의 매개변수로 함수에 저장됨 


// getArea(30,20);


//함수 반환 
function getArea(width, height){ 

    function another(){ //중첩 함수 
        console.log("another");
    }

    another();
    let area = width * height;
    return area; // 반환 값 
}

let area1 = getArea(3,3); 
console.log(area1);


//js는 중첩 함수도 가능하다
//함수의 선언을 호출 뒤에 둬도 오류 없음 정상적으로 실행됨 
//js의 호이스팅 기능 때문 -> 끌어 올리다 
