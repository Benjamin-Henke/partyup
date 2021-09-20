import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

import './InfoPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const user = useSelector((store) => store.user);
  return (
    <div className="outsideContainer">
      <div className="infoMainContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
        <h3 >Username: {user.username}</h3>
        <h3 >Email: {user.email}</h3>
        <LogOutButton className="logoutBtn" />
      </div>
    </div>
  );
}

export default InfoPage;
