import './body.css'

import Warframe from './itemGroup/warframeLoader'
import Primary from './itemGroup/primaryLoader'
import Secondary from './itemGroup/secondaryLoader'
import Mele from './itemGroup/meleLoader'

function Body() {
    return (
        <div>
            <Warframe />
            <Primary />
            <Secondary />
            <Mele />
        </div>
    )
}

export default Body