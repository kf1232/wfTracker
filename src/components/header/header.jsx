import './header.css'
import React from 'react'
import { useDispatch } from 'react-redux';
import { tComplete, tWarframe, tPrimary, tSecondary, tMelee, showAll, reset } from '../../store/itemstate'

function Header() {
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={()=> dispatch(tComplete())}> Completed Items </button>
            </div>
            <div>
                <button onClick={()=> dispatch(tWarframe())}> Warframes </button>
                <button onClick={()=> dispatch(tPrimary())}> Primary </button>
                <button onClick={()=> dispatch(tSecondary())}> Secondary </button>
                <button onClick={()=> dispatch(tMelee())}> Melee </button>
                <button onClick={()=> dispatch(showAll())}> Show All </button>
            </div>
            <div>
                <button onClick={()=> dispatch(reset())}> Reset Progress </button>
            </div>
            
            Header
        </div>
    )
}

export default Header