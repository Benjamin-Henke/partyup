import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
      <div class="mainContainer">
        <h3 className="aboutPageH3">Technology Used</h3>
        <br />
        <pre>React    React-Redux   Redux-Saga    Node    Express    Posgresql   Bootstrap    Nodemailer</pre>
        
      </div>
      <div className="footer">
        <p>&copy; Benjamin Henke 2021 </p>
      </div>
    </>
  );
}

export default AboutPage;
