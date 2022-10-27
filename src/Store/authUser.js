import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        isAuthenticated: false, 
        id: null, 
        name: null, 
        avatarURL: null, 
        answers: null,
        questions: null
    };

    // const initialState = {
    //     isAuthenticated: true, 
    //     id: 'pig', 
    //     name: 'Sarah Edo', 
    //     avatarURL: './images/avatars/pig.png', 
    //     answers: {
    //         '8xf0y6ziyjabvozdd253nd':"optionOne",
    //         '6ni6ok3ym7mf1p33lnez':"optionOne",
    //         'am8ehyc8byjqgar0jgpub9':"optionTwo",
    //         'loxhs1bqm25b708cmbf3g':"optionTwo"
    //     },
    //     questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
    // };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.avatarURL = action.payload.avatarURL;
            state.answers = action.payload.answers;
            state.questions = action.payload.questions;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.id = null;
            state.name = null;
            state.avatarURL = null;
            state.answers = null;
            state.questions = null;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;