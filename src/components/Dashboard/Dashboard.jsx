import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Dashboard.css';
import './UpcomingEvents.css'


function Dashboard() {
  // Set hook variables
  const dispatch = useDispatch();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const upcoming = useSelector(store => store.upcomingEvents)

  // Fetch on page load. Calls api/my_parties to get data
  useEffect(() => {
    fetchUpcomingParties();
  }, []); // end useEffect

  const fetchUpcomingParties = () => {
    dispatch({
      type: "FETCH_UPCOMING_EVENTS"  // upcomingEvents.saga
    })
  }

  // Handles the info button
  // Sends data to reducer to be used in the body section of the app
  const displayInfo = (party) => {
    console.log('Game Info', party);
  }

  /* --TO DO-- */
  // Handles the join party button
  // Send email to the user who created the party that the user tht clicked wants to join
  // Add user to the party info
  const joinParty = (party) => {
    console.log('Joining', party);
  }

  return (
    <div className="container">
      {/* <div id="searchBars">
        <input type="text" placeholder="Find board game" />
        <input type="text" placeholder="Find games in my area" />
        <input type="text" placeholder="Find games by date" />
      </div> */}
      <div id="recentPosts">
        <h3>Upcoming Events</h3>
          <div>
            {upcoming.map((party) =>
              <div class="card" className="upcomingCards">
                <h5 class="card-header" id="nameHeader"> {party.board_game}
                  <button id="headerBtn" onClick={() => {joinParty(party)}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" /><path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg></button>
                  <button id="headerBtn" onClick={() => { displayInfo(party) }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg></button>
                </h5>
                <div class="card-body">
                  <h6 id="loc" class="card-subtitle mb-2 text-muted">By {party.username}</h6>
                  <p>Players {party.number_of_players}</p>
                </div>
              </div>
            )}
          </div>
      </div>
  
      <div id="searchResults">
        <h3>Search Results will go here</h3>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Dashboard;
