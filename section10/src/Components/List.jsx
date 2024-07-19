import "./List.css";
import TodoItem from "./TodoItem";
import {useState, useMemo}from "react";

const List = ({todos,onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch =(e) =>{
        setSearch(e.target.value);
    };

    const getfilterdDate = ()=>{
        if(search ===""){
            return todos;
        }
        return todos.filter((todo)=>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

   const filteredTodos =  getfilterdDate();

   //section 10.최적화 실습 
    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        //메모이제이션 하고 싶은 연산 넣기 
        console.log("getAnalyzedData 호출!");
        const totalCount = todos.length; // 현재 등록된 전체 todo item의 개수 저장  
        const doneCount =  todos.filter(
            (todo)=>todo.isDone
            ).length; //전체todo중에 완료된 todo의 개수
        const notDoneCount = totalCount - doneCount;
        
        //return 객체로 묶어서 내보내기 
        return {
            totalCount,
            doneCount,
            notDoneCount
        };
    }, [todos]);
    //의존성 배열 :deps 

    //구조분해 할당을 이용해 값 받아오기 
    // const {totalCount, doneCount, notDoneCount} = getAnalyzedDate();

    return (
    <div className="List">
        <h4>Todo List🌱</h4>
        <div>
            <div>total : {totalCount}</div>
            <div>done : {doneCount}</div>
            <div>notDone : {notDoneCount}</div>
        </div>
        <input value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요" />
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => {
                return <TodoItem key={todo.id}{...todo}
                onUpdate={onUpdate}
                onDelete={onDelete}/>;
            })}
        </div>
    </div>

    );
};

export default List;