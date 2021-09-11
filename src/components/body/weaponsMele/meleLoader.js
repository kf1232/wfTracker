import Item from '../item/item'

const Items = require('warframe-items')


function Melee(){
    const melee = (new Items({ category: ['Melee'] } )).filter(i => i.category === 'Melee');

    return(
        <div>
            <h1>Melee</h1>
            {melee.map( (wep) =>
                <Item key = {wep.name} item = {wep}/>
            )}
        </div>
    )
}

export default Melee