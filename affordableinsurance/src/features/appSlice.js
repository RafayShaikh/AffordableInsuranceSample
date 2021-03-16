import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    insuranceLogo: null,
    insuranceName: null,
    insuranceDescription: null,
  },
  reducers: {
    add: (state, action) => {
      state.insuranceLogo = action.payload.insuranceLogo;
      state.insuranceName = action.payload.insuranceName;
      state.insuranceDescription = action.payload.insuranceDescription;
    },
    remove: (state) => {
      state = null;
    },
  },
});

export const { add, remove } = appSlice.actions;
export const selectAppData = (state) => state.app;

export default appSlice.reducer;
