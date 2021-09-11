import './body.css'

import Item from './item/itemLoader'
import Warframe from './warframe/warframeLoader'
import Primary from './weaponsPrimary/primaryLoader'
import Secondary from './weaponsSecondary/secondaryLoader'
import Mele from './weaponsMele/meleLoader'

function Body() {
    return (
        <div>
            <Item />
            <Warframe />
            <Primary />
            <Secondary />
            <Mele />

            Body
        </div>
    )
}

export default Body