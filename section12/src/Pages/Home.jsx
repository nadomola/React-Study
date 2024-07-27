import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../Components/Header";
import Button from "../Components/Button";
import DiaryList from "../Components/DiaryList";

const getMonthlyData = (pivotDate, data)=>{

    const beginTime = new Date(
        pivotDate.getFullYear(), 
        pivotDate.getMonth(),
         //시작 시간 만들기  
        1,  // 이달의 시작 1일 
        0, //시
        0, //분
        0 //초 
        ).getTime(); //숫자값 형식으로 저장 

    const endTime = new Date(
        pivotDate.getFullYear(), 
        pivotDate.getMonth()+1,
        0, //0일 -> 이전 달의 마지막날로 설정 됨 
        23,
        59,
        59
        ).getTime();

        return data.filter(
            (item) =>
                beginTime <= item.createdDate && item.createdDate <= endTime
        );
};

const Home =()=>{
    const data = useContext(DiaryStateContext); //ㅋㅋ 여기서 괄호 오류 미친 것 같음 
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData= getMonthlyData(pivotDate,data);

    
    //이벤트 핸들러
    //날짜 한달 뒤로
    const onIncreaseMonth = ()=> {
        setPivotDate(
            new Date(pivotDate.getFullYear(),pivotDate.getMonth() + 1)
            );
    };
    //날짜 한달 앞으로
    const onDecreaseMonth = ()=>{
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    };

    return (
    <div>
        <Header 
            title ={`${pivotDate.getFullYear()}년 ${
            pivotDate.getMonth()+1}월`}
        leftChild={<Button  onClick={onDecreaseMonth}text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth}text ={">"}/>} 
        />
        <DiaryList data={monthlyData} />
    </div>
    );
};

export default Home;