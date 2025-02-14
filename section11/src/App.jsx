import './App.css'
import {useState, useRef, useReducer,useCallback,createContext,useMemo, memo} from "react";
import Header from './Components/Header';
import Editor from './Components/Editor';
import List from './Components/List';


const mockData = [
  {
    id:0,
    isDone :false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },

  {
    id:1,
    isDone :false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id:2,
    isDone :false,
    content : "노래 연습하기",
    date : new Date().getTime(),
  },
];

// todosSate의 상태변화 담당 
function reducer(state, action){
  switch (action.type){
    case "CREATE" :
         return [action.data ,...state];
    case "UPDATE" :
         return state.map((item)=>item.id === action.targetId?
       {...item,isDone: !item.isDone} 
       :item);
    case "DELETE" :
          return state.filter((item)=> item.id !==action.targetId)
    default :
       return state;
  }
}


//section11. 여길 두개로 분리 
//변화할 값 
export const TodoStateContext = createContext(); 
//변화하지 않을 값 
export const TodoDispatchContext = createContext();


function App() {

  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content)=>{
    dispatch({
      type :"CREATE",
      data: {
        id : idRef.current++,
        isDone :false,
        content :content,
        data : new Date().getTime(),
      },
    });
  },[]); 
  // 첫번째 인수로 익명함수 
  // 두번째 인수로 deps 


  const onUpdate =useCallback((targetId) =>{
     //todos State의 값들 중에 
     //targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경 

     //인수 : todos배열에서 targetID와 일치한s id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열 
    dispatch({
      type :"UPDATE",
      targetId:targetId
    })
  },[]);
  
  const onDelete = useCallback((targetId)=>{
  //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열 
  dispatch({
    type : "DELETE",
    targetId :targetId,
  })
},[]);
//마운트 되었을 때만 딱 한번  생성되고 
// 그뒤로는 아무리 많이 리렌더링 되더라도
//다시는 생성되지 않도록 최적화 


//onCreate,onU,onD 세개의함수를 묶어주는 객체를
//다시는 생성하지 않도록 
const memoizedDispatch = useMemo(()=>{
  return {onCreate,onDelete,onUpdate};
},[]);


  return (
    <div className = "App">
      
    <Header />
    <TodoStateContext.Provider value ={todos}>
      <TodoDispatchContext.Provider
        value ={memoizedDispatch}
        >
          <Editor/>
          <List />
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
    </div>
  );
}

export default App;
