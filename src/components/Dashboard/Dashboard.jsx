import React from 'react';
import {useSelector} from 'react-redux';

function Dashboard() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <div id="recent_posts">
        <h3>
          Recent Posts
        </h3>
      </div>
      <div id="search_bars">
        <input type="text" placeholder="Find board game" />
        <input type="text" placeholder="Find games in my area" />
        <input type="text" placeholder="Find games by date" />
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Dashboard;
