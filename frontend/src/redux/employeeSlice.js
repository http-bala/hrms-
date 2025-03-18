import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmployees = createAsyncThunk('employee/fetchEmployees', async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/employees',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return res.data;
    } catch (error) {
        throw error;
    }
});

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
        status: 'idle',
        error: null
    },
    extraReducers :(builder)=>{
        builder
       .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
       })
       .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = action.payload;
       })
       .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
       });

    }

})

export default employeeSlice.reducer;