import './item.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../../store/itemstate';

function Item({ item: { uniqueName, name,  imageName, masteryReq} }){
    const dispatch = useDispatch();
    const itemArray = useSelector( state => state.item.acquiredItems );

    const completed = itemArray.indexOf(uniqueName) !== -1

    const onClick = (itemState) => {
        if(itemState)
            dispatch(add(uniqueName))
        else
            dispatch(remove(uniqueName))
    }

    return(
        !completed ? 
            <div className='item'>
                <button onClick={() => onClick(!completed)}> X </button>
                <img src={`https://cdn.warframestat.us/img/${imageName}`} 
                     alt={imageName} />

                <div className='infoBox'>
                    {masteryReq} {name}
                </div>        
            </div>
        
        : null
    )
}

export default Item