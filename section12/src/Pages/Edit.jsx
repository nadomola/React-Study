import { useParams ,useNavigate} from "react-router-dom";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Editor from "../Components/Editor";
import { useContext, useEffect,useState } from "react";
import { DiaryDispatchContext , DiaryStateContext} from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit =()=>{
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const curDiaryItem =useDiary(params.id);
    usePageTitle(`${params.id}번 일기 수정`);
    
    const onClickDelete = ()=>{
        //팝업창 
       if(
        window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")
       ) {
        //일기 삭제 로직 
        onDelete(params.id);
        nav("/",{replace:true});
       }
    };
    const onSubmit=(input)=>{
        //순서 잘 지키기 ! 
        if(window.confirm("일기를 정말 수정할까요?")){
        onUpdate(
            params.id, 
            input.createdDate.getTime(), 
            input.emotionId, 
            input.content 
        );
            nav("/", {replace  : true});
        }
    };

     return (
        <>
        <div>
            <Header title ={"일기 수정하기"}
            leftChild={<Button 
                onClick={() => nav(-1)}
                text={"<뒤로 가기"}/>}
            rightChild={<Button 
                onClick={onClickDelete}
                text={"삭제하기"} type = {"NEGATIVE"}/>}
            />
        <Editor initData = {curDiaryItem} onSubmit={onSubmit}/>

        </div>
        </>
    )

}

export default Edit;