// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변핸해주는 그러 ㄴ키워드 

async function getData(){
    return{
        nmae: "남시윤",
        id  :"winter",
    };
}//비동기 함수로 
// 이 객체를 결과값으로 갖는 새로운 promise를 반환하는 함수로 바뀸 

console.log(getData());