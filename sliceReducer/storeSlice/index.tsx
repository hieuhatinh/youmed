/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

interface IStoreSlice {
    text: string;
    filtered: {
        origin: string;
        evaluate: string;
    };
}

const initialState: IStoreSlice = {
    text: '',
    filtered: {
        origin: '',
        evaluate: '',
    },
};

const storeSlice = createSlice({
    name: 'storeSlice',
    initialState,
    reducers: {
        transmissionText: (state, action) => {
            state.text = action.payload;
        },
        filtered: (state, action) => {
            state.filtered.origin = action.payload.origin;
            state.filtered.evaluate = action.payload.evaluate;
        },
    },
});

export const {transmissionText} = storeSlice.actions;

export default storeSlice.reducer;
