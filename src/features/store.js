import { createSlice, configureStore } from "@reduxjs/toolkit";
import states from "../media/states";

const initialState = {
    user: null,
    employee: [], // liste des employés
    token: '' // token de chaque employés
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setToken: (state, action) =>{
            state.token = action.payload;
        },
        addEmployee: (state, action) =>{
            state.employee.push(action.payload)
        }
    }
})

export const { setToken, addEmployee } = employeeSlice.actions;

export const store = configureStore({
    reducer: { employee: employeeSlice.reducer}, 
    devTools: true
})

export default store