import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    employee: [], // liste des employés
    token: '' 
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) =>{
            state.employee.push(action.payload)
        }
    }
})

export const { addEmployee } = employeeSlice.actions;

export const store = configureStore({
    reducer: { employee: employeeSlice.reducer}, 
    devTools: true
})

export default store