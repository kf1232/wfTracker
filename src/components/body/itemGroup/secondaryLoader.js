import Item from '../item/item'

const Items = require('warframe-items')


function Secondary(){
    const secondary = (new Items({ category: ['Secondary'] } )).filter(i => i.category === 'Secondary');

    return(
        <div class='loader'>
            <h1>Secondary</h1>
            {secondary.map( (wep) =>
                <Item key = {wep.name} item = {wep}/>
            )}
        </div>
    )
}

export default Secondary