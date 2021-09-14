import React from 'react';
import './AboutPage.css';
import LogOutButton from '../LogOutButton/LogOutButton';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div>
      <p>&copy; Benjamin Henke 2021 </p>
    </div>
  );
}

export default AboutPage;