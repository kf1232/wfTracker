import { configureStore } from '@reduxjs/toolkit'

import itemReducer from './itemstate'

const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store = configureStore({
    reducer: {
        item: itemReducer,
    },
    preloadedState: loadFromLocalStorage()

})

store.subscribe( () => saveToLocalStorage( store.getState() ) )

export default store