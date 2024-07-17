import { useReducer } from "react";

//reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할 
function reducer(state, action){
  switch (action.type){
    case 'INCREASE' : return state + action.data;
    case "DECREASE" : return state - action.data;
  }
}

const Exam =()=>{

    const [state,dispatch] =useReducer(reducer, 0 );
    // dispatch : 상태변화를 요청하기만 하는 함수 , 발송하다, 급송하다 
    // -> 상태변화가 있어야 한다는 사실을 알리는 , 발송하는 함수 
    const onClickPlus =()=>{
        //디스패치 호출해서 상태변화 요청 
        //인수 : 상태가 어떻게 변화되길 원하는지 
        // -> 액션 객체 (인수로 전달된 이 요청의 내용을 담고 있는 객체 )
        dispatch({
            // 액션 객체 
            type : "INCREASE",
            data : 1,
        });
    };
    const onClickMinus =()=>{
        dispatch({
            type :"DECREASE",
            data:1,
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus} >+</button>
            <button onClick ={onClickMinus}>-</button>
        </div>
    );
}

export default Exam;