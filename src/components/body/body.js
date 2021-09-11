import './body.css'

import Component from './consumable/consumableLoader'
import Warframe from './itemGroup/warframeLoader'
import Primary from './itemGroup/primaryLoader'
import Secondary from './itemGroup/secondaryLoader'
import Mele from './itemGroup/meleLoader'

function Body() {
    return (
        <div>
            <Component />
            <Warframe />
            <Primary />
            <Secondary />
            <Mele />
        </div>
    )
}

export default Body