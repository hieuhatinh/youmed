/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

interface IStoreSlice {
    text: string;
}

const initialState: IStoreSlice = {
    text: '',
};

const storeSlice = createSlice({
    name: 'storeSlice',
    initialState,
    reducers: {
        transmissionText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const {transmissionText} = storeSlice.actions;

export default storeSlice.reducer;
