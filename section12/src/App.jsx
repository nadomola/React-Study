import './App.css'
import { useReducer } from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home'
import New from './Pages/New'
import Diary from './Pages/Diary'
import Notfound from './Pages/Notfound';
import Edit from './Pages/Edit';


const mockData = [
  {
    id : 1,
    createdDate : new Date().getTime(),
    emotionId: 1,
    content:"1번 일기 내용",
  },
  {
    id : 2,
    createdDate : new Date().getTime(),
    emotionId: 2,
    content:"2번 일기 내용",
  },
];

function reducer(state, action){
  return state;
}

function App() {

  const [data, dispatch] = useReducer(reducer,mockData);

  return (
    <>
  
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/new" element ={<New/>}/>
        <Route path ="/diary/:id" element ={<Diary/>}/>
        <Route path ="/edit/:id" element ={<Edit/>}/>
        <Route path ="*" element ={<Notfound/>}/>
        
      </Routes>
    </>
  );
}

export default App;
