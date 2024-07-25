function returnFalse(){
    console.log("False 함수");
    return undefined; //falsy한 값 
}

function returnTrue(){
    console.log("True 함수");
    return 10; //Truthy한 값 
}

console.log(returnTrue() || returnFalse()); 
// 두번째거에 접근조차하지 않음 


// 단락평가 활용 사례
function printName(person){
    const name = person && person.name;
    console.log(name ||"perosn의 값이 없음");
}


printName({name: "남시윤"});
