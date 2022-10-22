import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authUser';
import receiveUserReducer from './receiveUser';

const store = configureStore({
    reducer: { 
        auth: authReducer,
        receiveUser: receiveUserReducer,
    }
})

export default store;