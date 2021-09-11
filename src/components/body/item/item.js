import './item.css'

function Item({ item: { name } }){
    return(
        <div>
            <h4>Item</h4>
            {name} 
        </div>
    )
}

export default Item