import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';
import { clearUserList, fetchUsers } from '../redux/userListSlice';

function UserList() {
  const { users, loading } = useSelector((state) => state.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers('users'));
  }, [dispatch]);

  return loading ? <Typography variant="h1">Loading.....</Typography> : (
    <Container>
      <Button onClick={() => {dispatch(clearUserList())}}>Clear the list....</Button>
      {
        users.map(({ id, name, website }) =>
          <Card key={id}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                { name }
              </Typography>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                { website }
              </Typography>
            </CardContent>
          </Card>
        )
      }
    </Container>
  );
}

export default UserList;
