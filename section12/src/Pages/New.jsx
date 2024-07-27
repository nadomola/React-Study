import Header from "../Components/Header";
import Button from "../Components/Button";
import Editor from "../Components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New =()=>{
    const {onCreate} = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    const onSubmit =(input) =>{
        onCreate(
            input.createdDate.getTime(), 
            input.emotionId, 
            input.content
        );
        nav("/" , { replace : true});//새 일기작성 완료하고 나면 홈페이지로 이동하면서 뒤로가기 버튼 방지 
    };

    return (
    <div>
        <Header title ={"새 일기 쓰기"}
        leftChild={
        <Button onClick={()=> nav(-1)} text={"< 뒤로 가기"}/>
    }
        />
        <Editor onSubmit={onSubmit}/>
    </div>
    );
};

export default New;