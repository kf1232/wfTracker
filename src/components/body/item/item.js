import './item.css'
import React, {useState} from 'react';

function Item({ item: { name,  imageName, masteryReq} }){
    const [completed, setCompleted] = useState(false);

    return(
        !completed ? 
            <div class='item'>
                <img src={`https://cdn.warframestat.us/img/${imageName}`} 
                     alt={imageName} />
                <div class='infoBox'>
                    {masteryReq} {name} <button onClick={() => setCompleted(!completed)}> X </button>
                </div> 
            </div>
        
        : null
    )
}

export default Item