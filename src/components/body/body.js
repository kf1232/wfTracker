import './body.css'

import React, {useState} from 'react';

import CoreLoader from './itemGroup/coreLoader'

const Items = require('warframe-items')


function Body() {
    const [wfState, setWFState] = useState(true);
    const [pmState, setPMState] = useState(true);
    const [seState, setSEState] = useState(true);
    const [meState, setMEState] = useState(true);

    var dataPull = new Items({ category: ['Warframes', 'Primary', 'Secondary', 'Melee'] });
    var warframeList  = useState(dataPull.filter(i => i.category === 'Warframes'));
    var primaryList   = useState(dataPull.filter(i => i.category === 'Primary'));
    var secondaryList = useState(dataPull.filter(i => i.category === 'Secondary'));
    var meleeList     = useState(dataPull.filter(i => i.category === 'Melee'));

    return (
        <div>
            <div>
                <button onClick={() => setWFState(!wfState)}> Warframe </button>
                <button onClick={() => setPMState(!pmState)}> Primary </button>
                <button onClick={() => setSEState(!seState)}> Secondary </button>
                <button onClick={() => setMEState(!meState)}> Melee </button>
            </div>
            {wfState ? <CoreLoader list={warframeList}/> : null}
            {pmState ? <CoreLoader list={primaryList}/> : null}
            {seState ? <CoreLoader list={secondaryList}/> : null}
            {meState ? <CoreLoader list={meleeList}/> : null}
        </div>
    )
}

export default Body