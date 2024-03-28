import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    item: false,
  },
  reducers: {
    userLogin: (state, action) => {
      state.item = true;
    },
    userLogout: (state, action) => {
      state.item = false;
    }
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
