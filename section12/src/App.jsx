import './App.css'
import {Routes, Route,Link, useNavigate} from "react-router-dom";
import Home from './Pages/Home'
import New from './Pages/New'
import Diary from './Pages/Diary'
import Notfound from './Pages/Notfound';
import Button from './Components/Button';
import Header from './Components/Header';

import { getEmotionImage } from './util/get-emotion-images';

// 1. "/" : 모든 일기를 조회하는 home 페이지 
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지 
function App() {
  const nav = useNavigate(); //함수 호출해서 저장 
  const onClickButton = ()=>{
    //nav함수 호출해서 인수로 이동하고싶은 경로 넣어주기
    nav("/new"); 
  };

  return (
    <>
      <Header  title ={"Header"}
      leftChild={<Button text={"Left"}/>}
      rightChild={<Button text ={"Right"}/>}
      
      />


      <Button 
      text= {"123"} 
      type ={"DEFAULT"} //Default는 생략해도 되긴함 
      onClick={()=> {
        console.log("123번 버튼 클릭!");
      }}
      />

      <Button 
      text= {"123"} 
      type ={"POSITIVE"}
      onClick={()=> {
        console.log("123번 버튼 클릭!");
      }}
      />
      <Button 
      text= {"123"} 
      type ={"NEGATIVE"}
      onClick={()=> {
        console.log("123번 버튼 클릭!");
      }}
      />

      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/new" element ={<New/>}/>
        <Route path ="/diary/:id" element ={<Diary/>}/>
        <Route path ="*" element ={<Notfound/>}/>
      </Routes>
    </>
  );
}

export default App;
