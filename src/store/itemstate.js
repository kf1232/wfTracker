import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    showCompleted: false,
    acquiredItems: [] 
}

const itemSlice = createSlice({
  name: 'itemManager',
  initialState,
  reducers: {
    add(state, action){
        console.log("add   ", action.payload)
        state.acquiredItems.push(action.payload);
    },
    remove(state, action){
        console.log("remove  ", action.payload)
        state.acquiredItems.splice(state.acquiredItems.indexOf(action.payload), 1);
    },
  },
})

export const { add, remove } = itemSlice.actions
    // function actions to take on the store object
export default itemSlice.reducer