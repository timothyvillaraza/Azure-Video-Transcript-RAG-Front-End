import { useState } from "react";
import CardList from "./CardList";

const Home = () => {
    const [id, setId] = useState(0);
    const [text, setText] = useState('');
    const [textList, setTextList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTextList([
            ...textList,
            { id: id, text: text }
        ]);
        setId(id + 1);
        setText('');
    }

    const handleDelete = (id) => {
        setTextList(
                textList.filter((text) => 
                text.id !== id
            )
        );
    }

    return ( 
        <div className="home">
            <form onSubmit={handleSubmit}>
                <label>Enter Epic Text: </label>
                <textarea type="text" 
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>Display Epic Text</button>
            </form>
            <CardList textList={textList} handleDelete={handleDelete}></CardList>
        </div>
     );
}
 
export default Home;