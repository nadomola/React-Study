
const Viewer = ({count}) =>{

    

    return <div>
        <div>현재 카운트 : </div>
        <h1>{count}</h1>
        </div>
};

export default Viewer;


// 계층구조상 controller와 viewer는 부모자식간의 관계x
// 따라서 props를 통한 값 전달 불가능 
// 정답: App.jsx에다가 count,setCount 둬야함 