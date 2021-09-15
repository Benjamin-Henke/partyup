import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (

    
    <div>
      <div>
        <Link to="/dashboard">
          <h2 className="nav-title">
            Party
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" /></svg>
            Up</h2>
        </Link>
      </div>
      
        <div className="nav">
            <div>
              {/* If no user is logged in, show these links */}
              {user.id === null &&
                // If there's no user, show login/registration links
                <Link className="navLink" to="/login">
                  Login / Register
                </Link>
              }

              {/* If a user is logged in, show these links */}
              {user.id && (
                <>
                  <Link className="navLink" to="/my_parties">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-layers-half" viewBox="0 0 16 16"><path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" /></svg>
                    <br />
                    Parties
                  </Link>
                  <Link className="navLink" to="/create_party">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" /></svg>
                    <br />
                    Create
                    
                  </Link>
                  <Link className="navLink" to="/account_info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" /></svg>
                    <br />
                    Account
                  </Link>

                  

                <div id="findBoardGameInput" className="navLink">
                  <input
                    id="findBoardGame"
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

              <div id="searchBars" className="navLink">

                <input type="text" placeholder="Find games in my area" />
                <input type="text" placeholder="Find games by date" />
              </div>

                </>
              )}

          </div>
        </div>  
    </div>
  );
}

export default Nav;
