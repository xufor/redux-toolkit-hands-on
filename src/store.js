import { configureStore } from '@reduxjs/toolkit';
import userListReducer from './redux/userListSlice';
import appStatusSlice from './redux/appStatusSlice';

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    appStatus: appStatusSlice
  },
});
