import './body.css'

import React, {useState} from 'react';

import CoreLoader from './itemGroup/coreLoader'

const Items = require('warframe-items')

function Body() {

    var dataPull = new Items({ category: ['Warframes', 'Primary', 'Secondary', 'Melee'] });
    var warframeState = useState(dataPull.filter(i => i.category === 'Warframes'));
    var primaryState  = useState(dataPull.filter(i => i.category === 'Primary'));
    var secondaryState = useState(dataPull.filter(i => i.category === 'Secondary'));
    var meleState = useState(dataPull.filter(i => i.category === 'Melee'));

    return (
        <div>
            <CoreLoader list={warframeState}/>
            <CoreLoader list={primaryState}/>
            <CoreLoader list={secondaryState}/>
            <CoreLoader list={meleState}/>
        </div>
    )
}

export default Body