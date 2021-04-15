import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    insuranceLogo: null,
    insuranceName: null,
    insuranceDescription: null,
    email: null,
    individualName: null,
    individualDescription: null,
    individualPic: null,
  },
  reducers: {
    add: (state, action) => {
      state.insuranceLogo = action.payload.insuranceLogo;
      state.insuranceName = action.payload.insuranceName;
      state.insuranceDescription = action.payload.insuranceDescription;
      state.individualName = action.payload.individualName;
      state.individualDescription = action.payload.individualDescription;
      state.individualPic = action.payload.individualPic;
    },
    addUser: (state, action) => {
      state.email = action.payload.email;
    },
    removeUser: (state) => {
      state.email = null;
    },
  },
});

export const { add, addUser, removeUser } = appSlice.actions;
export const selectAppData = (state) => state.app;

export default appSlice.reducer;
