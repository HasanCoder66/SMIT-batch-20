import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: null,
};


export const getAllUserThunk = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const response = await axios.get(`https://auth-be-five.vercel.app/api/user`);
    

    return response.data.data
    
    
  } catch (error) {
    
  }
})






const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    getAllUserStart: (state) => {
      state.loading = true;
    },

    getAllUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },

    getAllUsersFailure: (state, action) => {
      state.error = "Error in fetching data";
    },
  },

  extraReducers: (builder) => {

    
    builder
    // get all users thunk -->
    .addCase(getAllUserThunk.pending, (state) => {
        state.loading = true;
      })
    .addCase(getAllUserThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      
        state.loading = false;
        state.users = action.payload
        state.error = ""
      })
    .addCase(getAllUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to get users"
      })

     
  }
});

export const { getAllUserStart, getAllUsersSuccess, getAllUsersFailure } = userSlice.actions;

export default userSlice.reducer;
