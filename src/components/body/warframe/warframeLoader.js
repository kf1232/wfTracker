import Item from '../item/item'

const Items = require('warframe-items')


function Warframe(){
    const warframe = (new Items({ category: ['Warframes'] } )).filter(i => i.category === 'Warframes');

    return(
        <div>
            <h1>Warframe</h1>
            {warframe.map( (wep) =>
                <Item key = {wep.name} item = {wep}/>
            )}
        </div>
    )
}

export default Warframe