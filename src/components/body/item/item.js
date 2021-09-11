import './item.css'
import React from "react"

function Item({ item: { name } }){
    return(
        <div>
            <h4>Item</h4>
            {name} 
        </div>
    )
}

export default Item