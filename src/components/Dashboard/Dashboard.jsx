import React from 'react';
import {useSelector} from 'react-redux';
import './Dashboard.css';

import RecentPosts from '../RecentPosts/RecentPosts';

function Dashboard() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <div id="recentPosts">
        <h3>
          Recent Posts
          <RecentPosts />
        </h3>
      </div>
      <div id="searchBars">
        <input type="text" placeholder="Find board game"  />
        <input type="text" placeholder="Find games in my area" />
        <input type="text" placeholder="Find games by date" />
      </div>
      <div id="searchResults">
        <h3>Search Results will go here</h3>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Dashboard;
