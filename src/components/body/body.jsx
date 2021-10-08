import './body.css'
import React, { useState } from 'react';
import CoreLoader from './itemGroup/coreLoader.jsx'
import { useSelector } from 'react-redux';
const Items = require('warframe-items')


function Body() {
    const wfState = useSelector( state => state.item.showWarframe);
    const pmState = useSelector( state => state.item.showPrimary);
    const seState = useSelector( state => state.item.showSecondary);
    const meState = useSelector( state => state.item.showMelee);

    var dataPull = new Items({ category: ['Warframes', 'Primary', 'Secondary', 'Melee'] });


    var warframeList  = useState(dataPull.filter(i => i.category === 'Warframes'));
    var primaryList   = useState(dataPull.filter(i => i.category === 'Primary'));
    var secondaryList = useState(dataPull.filter(i => i.category === 'Secondary'));
    var meleeList     = useState(dataPull.filter(i => i.category === 'Melee'));

    return (
        <div>
            {wfState ? <CoreLoader list={warframeList}/> : null}
            {pmState ? <CoreLoader list={primaryList}/> : null}
            {seState ? <CoreLoader list={secondaryList}/> : null}
            {meState ? <CoreLoader list={meleeList}/> : null}
        </div>
    )
}

export default Body