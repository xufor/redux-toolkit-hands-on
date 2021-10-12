import React from 'react';
import UserList from './components/UserList';
import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const { status } = useSelector(state => state.appStatus);

  return (
    <div>
      <Alert severity="info">{status}</Alert>
      <UserList/>
    </div>
  );
}

export default App;
