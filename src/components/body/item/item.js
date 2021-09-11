import './item.css'

function Item({ item: { name,  imageName} }){
    return(
        <div class='item'>
            <div class='imgBox'>
                <img 
                  src={`https://cdn.warframestat.us/img/${imageName}`} 
                  alt={imageName} />
            </div>
            <div class='infoBox'>
                {name}
                <input type='checkbox'/>
            </div> 
        </div>
    )
}

export default Item