import Item from '../item/item'

const Items = require('warframe-items')


function Primary(){
    const primary = (new Items({ category: ['Primary'] } )).filter(i => i.category === 'Primary');

    return(
        <div>
            <h1>Primary</h1>
            {primary.map( (wep) =>
                <Item key = {wep.name} item = {wep}/>
            )}
        </div>
    )
}

export default Primary