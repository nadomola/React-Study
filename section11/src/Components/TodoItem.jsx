import "./TodoItem.css";
import { memo,useContext } from "react";
import { TodoContext } from "../App";


const TodoItem = ({id,isDone,content, date
    //매번 전달될때마다 새롭게 다른 주소값을 갖게 된다
    //그래서 memo 메서드가 판단하기에 props가 바뀌었다라고 판단 

}) =>{

    const {onUpdate, onDelete} = useContext(TodoContext);

    const onChangeCheckbox = () =>{
        onUpdate(id);
    };

    const onClickDeleteButton = ()=>{
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            <input 
            onChange={onChangeCheckbox}
            readOnly checked={isDone}type ="checkbox"/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}


// 교차 컴포넌트 (HOC : Higher Order Component)
// export default memo(TodoItem, (prevProps, nextProps)=>{
//     //최적화 커스텀 마이징 
//     // 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//     // T-> props 바뀌지 않음 -> 리렌더링 x
//     // F -> props 바뀜 -> 리렌더링 o

//     //id,isDone, content,date 값만 바뀌었을때 리렌더링 
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;


//     //위 4개의 값이 바뀌지 않았다면 
//     //그냥 return true 반환해서
//     //props의 값 안 바뀌었고-> 리렌더링하지 마 !
//     return true;

// });

export default memo(TodoItem);