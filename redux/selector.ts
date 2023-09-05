/* eslint-disable prettier/prettier */
// import { createSelector } from "@reduxjs/toolkit";

export const getText = (state: any) => state.store.text;

export const getFilteredValue = (state: any) => state.store.filtered;

// export const storeSelector = createSelector(getTextPlaceholder, (text) => text)
