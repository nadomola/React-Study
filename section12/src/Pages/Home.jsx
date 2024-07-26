import Header from "../Components/Header";
import Button from "../Components/Button";
import DiaryList from "../Components/DiaryList";

const Home =()=>{

    return (
    <div>
        <Header title ={"20204년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text ={">"}/>} 
        />
        <DiaryList />
    </div>
    );
};

export default Home;