import './item.css'

function Item({ item: { name,  imageName, masteryReq} }){
    return(
        <div class='item'>
            <div class='imgBox'>
                <img 
                  src={`https://cdn.warframestat.us/img/${imageName}`} 
                  alt={imageName} />
            </div>
            <div class='infoBox'>
                {masteryReq} {name}
            </div> 
        </div>
    )
}

export default Item