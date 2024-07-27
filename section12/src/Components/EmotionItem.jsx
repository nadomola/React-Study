import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-images";

const EmotionItem =({emotionId, emotionName ,isSelected }) =>{
    return (
        <div className={`EmotionItem ${
            isSelected ? `EmotionItem_on_${emotionId}` : ""
        }`}>
            <img  className="emotion_img" src = {getEmotionImage(emotionId)} />
            <div className="emotion_mane">{emotionName}</div>
        </div>
    );
}

export default EmotionItem;