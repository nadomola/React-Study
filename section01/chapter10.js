// for 

for (let i = 0; i <=10 ;i++ ){
    // console.log(i);
}

// 조건식이 거짓이 아닐때도 강제로 종료하는 방식 
for (let i = 1; i <=10 ;i++ ){
    // console.log(i);

    if(i>=5){
        break;
    }
}
//조건문과 함께 사용 

//반복의 특정 횟차 건너뛰기 
// 짝수만 출력 
for(let i = 1; i <=10; i++){
    if(i %2 ===0 ){
        console.log(i);
    }
}

//교수님이 쓴 건 continue
for (let i = 1; i <=10 ;i++ ){
    if(i %2 ===0 ){
        continue; // 이 밑으로 실행이 안 되고 바로 다음 회차로 진행됨 
    }

    console.log(i);

    if(i>=5){
        break;
    }
}

// 1이 었다가 2가 되면 실행 안하고 바로 다음으로 넘어가서 3 출력 
// 4도 출력 안하고 (0이되니까 )
// 5이상의 홀수는 break 만나서 진행 안되나 ?
