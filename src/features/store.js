import { createSlice, configureStore } from "@reduxjs/toolkit";
import states from "../media/states";

const initialState = {
    user: null,
    employee: [], // liste des employé
    token: '' // token de chaque employé
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setToken: (state, action) =>{
            state.token = action.payload;
        }
    }
})

export const { setToken } = employeeSlice.actions

export const store = configureStore({
    reducer: { employee: employeeSlice.reducer}, 
    devTools: true
})

export default store