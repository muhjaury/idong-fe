import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {};

const dataSlice = createSlice({
  name: "DATA",
  initialState,
  reducers: {
    ADD_USER_DATA: (state, action: PayloadAction<any>) => {
      return { ...state, user: action.payload };
    },
    DELETE_DATA: () => {
      return {};
    },
  },
});

export const { ADD_USER_DATA, DELETE_DATA } = dataSlice.actions;
export default dataSlice.reducer;
