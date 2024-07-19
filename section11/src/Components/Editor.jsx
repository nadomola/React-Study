import "./Editor.css";
import { useState ,useRef,useContext} from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    };

    const onKeydown =(e)=>{
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    const onSubmit = ()=>{
        //content state의 값이 빈 문자열이라면 
        // input tag에 아무것도 입력 x 
        // onCrate 함수 호출하지 않도록 return 
        if(content === ""){
            contentRef.current.focus(); //포커스 주기 
            return;
        }
        onCreate(content);
        setContent(""); // state 초기화 -> 데이터 추가하고나면 입력창 clear!
    };
    return (
    <div className="Editor">
        <input 
        ref = {contentRef}
        value ={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
         placeholder="새로운  Todo..." />
        <button onClick={onSubmit}>추가</button>
    </div>
    );
}

export default Editor;