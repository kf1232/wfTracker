
import React from 'react'
import Item from '../item/item'

function CoreLoader(props){
    return(
        <div className='loader'>
            {props.list[0].map( (obj) =>
                <Item key = {obj.name} item = {obj}/>
            )}
        </div>
    )
}

export default CoreLoader