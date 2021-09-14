import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <LogOutButton className="logoutBtn" />
      <p> &copy; Benjamin Henke 2021  </p>
    </div>
  );
}

export default InfoPage;
