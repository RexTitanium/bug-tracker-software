import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState: [{}],
    reducers:{
        getUser:(state) => {
            state.push({name:"Samyak Shah"})
            state.push({name:"Shubh Shah"})
        },

    }
})

export default slice.reducer;
export const{getUser}  = slice.actions;