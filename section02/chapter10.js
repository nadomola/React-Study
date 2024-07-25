// 1. Date 객체 생성하는 방법 
let date1 = new Date(); //내장함수 호출 (생성자) - 지금 시장 
console.log(date1);

 
let date2= new Date("1997-01-09/10:10:10"); //. /  - 중 아무거나 사용 / t시간까지 
//let date2 = new Date(1998,09,1,23,40,23); //이렇게도 가능 
console.log(date2);


//2.타임 스탬프 
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms 가 지났는지를 의미하는 숫자값 
// 저 시간을 협정세계시 : UTC 세계모든 나라가 표준으로 사용하는 시간이 시작되는 시 
let ts1= date1.getTime(); //타임 스탬프 계산해서 반환 
console.log(ts1);

//새로운 Date객체 생성 
let date4 = new Date(ts1); //ㅌ임스탬프에 해당 되는 시간으로 date 객체 생성 
//date 4 =date1
console.log(date1, date4);

//3. 시간 요소들을 추출하는 방법 
let year = date1.getFullYear();
let month = date1.getMonth()+ 1; //월은 0부터 시작 
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();


// console.log(
//     year,
//     month,
//     date,
//     hour,
//     minute,
//     seconds
// );


//4. 시간 수정하기 
date1.setFullYear(2023); //인수로 수정하고 싶은 연도 전달 
date1.setMonth(2); // 실제론 3월 
date1.getDate(30);

date1.setHours(23);
date1.getMinutes(59);
date1.getSeconds(59);


//5. 시간을 여러 포맷으로 출력하기 
console.log(date1.toDateString()); // 시간 제외 날짜 풀력 
console.log(date1.toLocaleString()); //우리나라 시간 표시형식 
