import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { updateStatus } from './appStatusSlice';

export const fetchUsers = createAsyncThunk(
  'useList/fetchUsers',
  async (what, { dispatch }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${what}`);
    const parsedResponse = await response.json();
    if(response.ok) {
      dispatch(updateStatus(parsedResponse.length));
    }
    return parsedResponse;
  }
);

export const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    users: [],
    loading: false
  },
  reducers: {
    clearUserList: (state) => {
      state.users = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export const { 
  clearUserList
} = userListSlice.actions;

export default userListSlice.reducer;
