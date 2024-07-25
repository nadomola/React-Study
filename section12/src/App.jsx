import './App.css'
import {Routes, Route,Link, useNavigate} from "react-router-dom";
import Home from './Pages/Home'
import New from './Pages/New'
import Diary from './Pages/Diary'
import Notfound from './Pages/Notfound';


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
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
    </div>
    <button onClick={onClickButton}>New 페이지로 이동</button>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/new" element ={<New/>}/>
      <Route path ="/diary/:id" element ={<Diary/>}/>
      <Route path ="*" element ={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default App;
