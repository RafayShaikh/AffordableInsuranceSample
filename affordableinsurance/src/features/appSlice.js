import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    insuranceLogo: null,
    insuranceName: null,
    insuranceDescription: null,
    email: null,
  },
  reducers: {
    add: (state, action) => {
      state.insuranceLogo = action.payload.insuranceLogo;
      state.insuranceName = action.payload.insuranceName;
      state.insuranceDescription = action.payload.insuranceDescription;
    },
    addUser: (state, action) => {
      state.email = action.payload.email;
    },
    removeUser: (state) => {
      state.userName = null;
    },
  },
});

export const { add, addUser, removeUser } = appSlice.actions;
export const selectAppData = (state) => state.app;

export default appSlice.reducer;
