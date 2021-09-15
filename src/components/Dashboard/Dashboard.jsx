import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Dashboard.css';
import './UpcomingEvents.css'


function Dashboard() {
  // Set hook variables
  const dispatch = useDispatch();
  
  // Pulling data from the store
  const user = useSelector((store) => store.user);
  const upcoming = useSelector(store => store.upcomingEvents);
  const info = useSelector(store => store.partyInfo);
  const players = useSelector(store => store.currentPlayersReducer);

  


  // Fetch on page load. Calls api/my_parties to get data
  useEffect(() => {
    fetchUpcomingParties();
  }, []); // end useEffect

  // Handles searching for upcoming events in the Upcoming Panel
  const fetchUpcomingParties = () => {
    dispatch({
      type: "FETCH_UPCOMING_EVENTS"  // upcomingEvents.saga
    })
  }

  /* ----------------------------------
      SEARCH BARS
  ---------------------------------- */
  // Local state variable for find board games search
  const [findBoardGame, setFindBoardGame] = useState('');
  
  // Handles search for a board game by name
  const handleFindBoardGameChange = (e) => {
    setFindBoardGame(e.target.value)
  }

  // Runs on search button click
  function searchForBoardGame() {
    console.log('Searching for', findBoardGame);
    dispatch({
      type: "SEARCH_FOR_BOARD_GAME",
      payload: findBoardGame
    })

    setFindBoardGame('');
  }
  /* ----------------------------------
     END - SEARCH BARS
 ---------------------------------- */

  // Handles the info button
  // Sends data to reducer to be used in the body section of the app
  // Dispatches to upcoming.saga
  const displayInfo = (party) => {
    console.log('Game Info', party);
    dispatch({            
      type: "SET_PARTY_INFO",
      payload: party
    })
    dispatch({
      type: "SHOW_CURRENT_PLAYERS",
      payload: party.id
    })
  }

  function formatDate(date) {
    let d = new Date(date);
    return d.toLocaleDateString();
  }
  function formatTime(time) {
    let d = new Date(time);
    return d.toLocaleTimeString()
  }

  /* --TO DO-- */
  // Handles the join party button
  // Send email to the user who created the party that the user tht clicked wants to join
  // Add user to the party info
  const joinParty = (party) => {
    console.log('Joining', party);
    console.log('party id', party.id);
    console.log('number of players', party.number_of_players);
    let joinInfo = {
      partyId: party.id,
      players: party.number_of_players
    }

    // Double checks that the user asking to join isn't the owner
    if (user.id === party.owner_id) {
      alert(`This is your party, you're already apart of it.`);
      return;
    } else if (user.id === party) {
      alert(`You can't join a party twice!`)
    }
    else {
      dispatch({
        type: "JOINING_A_PARTY",
        payload: joinInfo
      })
    }
    dispatch({
      type: "SHOW_CURRENT_PLAYERS",
      payload: party.id
    })
  }

  return (
    <div className="container">
      <div id="searchBars">
        <div id="findBoardGame">
          <input 
            type="text" 
            placeholder="Find board game"
            value={findBoardGame}
            onChange={handleFindBoardGameChange}  
          />
          <button
              className="searchBtn"
              onClick={searchForBoardGame}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" /><path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" /><path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z" /></svg>
          </button>
        </div>
          <input type="text" placeholder="Find games in my area" />
          <input type="text" placeholder="Find games by date" />
      </div>
      <div id="recentPosts">
        <h3>Upcoming Events</h3>
          <div>
            {upcoming.map((party, index) =>
              <div class="card" className="upcomingCards" key={index}>
                <h5 class="card-header" id="nameHeader"> {party.board_game}
                  <button id="headerBtn" onClick={() => { joinParty(party) }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16"> <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" /></svg></button>
                  <button id="headerBtn" onClick={() => { displayInfo(party) }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg></button>
                </h5>
                <div class="card-body">
                  <p>{formatDate(party.date_time)}</p>
                  <p>{formatTime(party.date_time)}</p>
                </div>
              </div>
            )}
          </div>
      </div>
  
      <div id="searchResults">
          {info.id &&
            <div>
              <h3>{info.board_game}</h3>
              <h6 class="card-subtitle mb-2 text-muted">{info.location}</h6>
              
                <p class="card-text">Created by: {info.username}</p>
              
              <p class="card-text">Experience: {info.experience}</p>

              <div>
                Current Players:
                {players.map((player, index) => (
                    <div key={index}>
                      <li>{player.username}</li>
                    </div>
                ))}
              </div>
              
            </div>

          }
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Dashboard;
