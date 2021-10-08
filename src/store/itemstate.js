import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    showCompleted: false,
    showWarframe: true,
    showPrimary: true,
    showSecondary: true,
    showMelee: true,
    acquiredItems: [] 
}

const itemSlice = createSlice({
  name: 'itemManager',
  initialState,
  reducers: {
    showAll(state){
        state.showWarframe = true;
        state.showPrimary = true;
        state.showSecondary = true;
        state.showMelee = true;
    },
    tComplete(state){
        console.log("showCompleted: ",state.showCompleted);
        state.showCompleted = !state.showCompleted;
    },
    tWarframe(state){
        state.showWarframe = true;
        console.log("showWarframe: ",state.showWarframe);
        
        state.showPrimary = false;
        state.showSecondary = false;
        state.showMelee = false;
    },
    tPrimary(state){
        state.showPrimary = true;
        console.log("showPrimary: ",state.showPrimary);
        
        state.showWarframe = false;
        state.showSecondary = false;
        state.showMelee = false;
    },
    tSecondary(state){
        state.showSecondary = true;
        console.log("showSecondary: ",state.showSecondary);

        state.showWarframe = false;
        state.showPrimary = false;
        state.showMelee = false;
    },
    tMelee(state){
        state.showMelee = true;
        console.log("showMelee: ",state.showMelee);
        

        state.showWarframe = false;
        state.showPrimary = false;
        state.showSecondary = false;
    },
    add(state, action){
        state.acquiredItems.push(action.payload);
    },
    remove(state, action){
        state.acquiredItems.splice(state.acquiredItems.indexOf(action.payload), 1);
    },
    reset(state){
        state.acquiredItems = []
    },
  },
})

export const { showAll, tComplete, tWarframe, tPrimary, tSecondary, tMelee, add, remove, reset } = itemSlice.actions
export default itemSlice.reducer