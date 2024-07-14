import React from "react";

const CardList = (props) => {
    const textList = props.textList;
    const handleDelete = props.handleDelete;

    const formatText = (text) => {
        return text.split('\n').map((str, index) => (
            <React.Fragment key={index}>
                {str}
                <br />
            </React.Fragment>
        ));
    }

    return ( 
        <div className="card-list">
            { textList.map((card) => (
                    <div className="card" key={card.id}>
                        <p>{formatText(card.text)}</p>
                        <button onClick={() => handleDelete(card.id)}>Delete Card</button>
                    </div>
                ))}
        </div>
     );
}
 
export default CardList;