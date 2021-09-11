import './body.css'

import Component from './consumable/consumableLoader'
import Warframe from './warframe/warframeLoader'
import Primary from './weaponsPrimary/primaryLoader'
import Secondary from './weaponsSecondary/secondaryLoader'
import Mele from './weaponsMele/meleLoader'

function Body() {
    return (
        <div>
            <Component />
            <Warframe />
            <Primary />
            <Secondary />
            <Mele />

            Body
        </div>
    )
}

export default Body