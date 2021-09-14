import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h3>{user.username}</h3>
      <LogOutButton className="logoutBtn" />
    </div>
  );
}

export default InfoPage;
