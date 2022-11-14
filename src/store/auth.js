import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store
const initialState = {
  loggedIn: false
};

const authSlice = createSlice({
    name: "Auth",
    initialState: initialState,
   
    reducers: {
      login(state) {
        state.loggedIn = true;
      },
      logout(state) {
        state.loggedIn = false;
      },
    },
  });
  
  export const authActions = authSlice.actions;
  
  export default authSlice.reducer;