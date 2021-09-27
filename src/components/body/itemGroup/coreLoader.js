import Item from '../item/item'
import React from 'react'

function CoreLoader(props){
    return(
        <div class='loader'>
            {props.list[0].map( (obj) =>
                <Item key = {obj.name} item = {obj}/>
            )}
        </div>
    )
}

export default CoreLoader