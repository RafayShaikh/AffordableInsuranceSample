import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    insuranceLogo: null,
    insuranceName: null,
    insuranceDescription: null,
    individualName: null,
    individualDescription: null,
  },
  reducers: {
    add: (state, action) => {
      state.insuranceLogo = action.payload.insuranceLogo;
      state.insuranceName = action.payload.insuranceName;
      state.insuranceDescription = action.payload.insuranceDescription;
      state.individualName = action.payload.individualName;
      state.individualDescription = action.payload.individualDescription;
    },
    remove: (state) => {
      state = null;
    },
  },
});

export const { add, remove } = appSlice.actions;
export const selectAppData = (state) => state.app;

export default appSlice.reducer;
