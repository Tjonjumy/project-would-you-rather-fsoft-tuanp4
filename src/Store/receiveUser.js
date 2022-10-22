import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        users: null
    };

const receiveUserSlice = createSlice({
    name: 'receiveUser',
    initialState: initialState,
    reducers: {
        getListUsers(state, action) {
            state.users = action.payload;
        }
    }
});

export const receiveUserActions = receiveUserSlice.actions;

export default receiveUserSlice.reducer;