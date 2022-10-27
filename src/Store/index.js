import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authUser';
import questionsReducer from './questions';
import userReducer from './user';

const store = configureStore({
    reducer: { 
        auth: authReducer,
        user: userReducer,
        questions: questionsReducer
    }
})

export default store;