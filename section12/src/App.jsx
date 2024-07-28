import './App.css'
import { useReducer, useRef, createContext, useEffect ,useState} from 'react';
import {Routes, Route, useLinkClickHandler, useSearchParams} from "react-router-dom";
import Home from './Pages/Home'
import New from './Pages/New'
import Diary from './Pages/Diary'
import Notfound from './Pages/Notfound';
import Edit from './Pages/Edit';


function reducer(state, action){
  //새로운 state값 저장할 변수 
  let nextState;


  switch(action.type){
    case "INIT":{
      return action.data;

    }
    case "CREATE" : {
        nextState =  [action.data,...state]; 
        break;
      }
    case "UPDATE" : {
      nextState = state.map((item)=>
        String(item.id) ===String(action.data.id)
      ?action.data
      :item
    );
    break;
    }
    case "DELETE" :
       {
      nextState =  state.filter(
        (item)=> String(item.id) !== String(action.id)
       );
      break; 
    }
    default :
    return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;

}

//home 에서 쓸 수 있게 공급해줘야 함 
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const[isLoading,setIsLoadiing] = useState(true);

  const [data, dispatch] = useReducer(reducer,[]);
  const idRef = useRef(3); //앞으로 생성될 id 저장 - 초기값 3 (mock에 1,2 있어서)

  //데이터 보관 - 언제 ? 새로운 값 추가, 수정 , 삭제 될때마다 dataSates값 

  useEffect(()=>{
    const storedData = localStorage.getItem("diary");
    if(!storedData){
      return;
    }
    const parsedData = JSON.parse(storedData);

    //예외처리 진행 - parsedData에 담긴 값이 배열이 아닐 경우!
    if(!Array.isArray(parsedData)){
      setIsLoadiing(false);
      return ; //강제 종료
    }

    let maxId = 0;
    parsedData.forEach((item)=>{
      if(Number(item.id)>maxId){
        maxId = Number(item.id)
      }
    });
   
    idRef.current = maxId+1; //기존에 저장되어있었던 id값과 겹치지않도록 .. 


    dispatch({
      type:"INIT", // 초기화의미
      data : parsedData,
    });
    setIsLoadiing(false);
  },[]);


  // 새로운 일기 추가 
  const onCreate = (createdDate,emotionId,content)=>{
    dispatch({
      type: "CREATE",
      data : {
        id : idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정 
  const onUpdate = (id, createdDate,emotionId,content)=>{
    dispatch({
      type : "UPDATE",
      data : {
      id,
      createdDate,
      emotionId,
      content,
      },
    });
  };

  // 기존 일기 삭제 
  const onDelete = (id)=>{
    dispatch({
      type : "DELETE",
      id,
    });
  };

  if(isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }
  return (
    <>
      <DiaryStateContext.Provider value = {data}>
        <DiaryDispatchContext.Provider 
        value ={{
          onCreate,
          onUpdate,
          onDelete,
        }} >
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/new" element ={<New/>}/>
        <Route path ="/diary/:id" element ={<Diary/>}/>
        <Route path ="/edit/:id" element ={<Edit/>}/>
        <Route path ="*" element ={<Notfound/>}/>
        
      </Routes>
      </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
