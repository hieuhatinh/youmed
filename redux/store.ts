/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import storeSliceReducer from '../sliceReducer/storeSlice';

const store = configureStore({
    reducer: {
        store: storeSliceReducer,
    },
});

export default store;
