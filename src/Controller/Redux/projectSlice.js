import {createSlice} from "@reduxjs/toolkit"
import { retrieveProject } from "../projectController";

const slice = createSlice({
    name:'project',
    initialState: [],
    reducers: {
        getProjects:state => retrieveProject(),

        createProjects:(state, actions) => {

        },
        updateProjects:(state, actions) =>{

        },
    }
})

export default slice.reducer;
export const{getProjects, createProjects, updateProjects} = slice.actions;