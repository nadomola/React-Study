//math 모듈 

export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

//CJS 이용 
// module.exports = {
// add : add,
// sub,  //value key 값 똑같을 땐 함숭 이름만 명시해도됨 
// // 두 가지 표현식 모두 
// };

//es 
// export{add,sub}; //객체 내보내고싶은 것

export default function multiply(a,b){
    return a*b;
} //디폴트로 내보내서 math 모듈 대표하는 단 하나의 모듈 