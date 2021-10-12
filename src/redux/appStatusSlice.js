import { createSlice } from '@reduxjs/toolkit';

export const appStatusSlice = createSlice({
  name: 'appStatus',
  initialState: {
    status: 'Nothing yet...'
  },
  reducers: {
    updateStatus: (state, { payload }) => {
      state.status = `${ payload } users were loaded....`;
    }
  }
});

export const { 
  updateStatus
} = appStatusSlice.actions;

export default appStatusSlice.reducer;
