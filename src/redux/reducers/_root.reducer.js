import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import myPartiesReducer from './myParties.reducer';
import editReducer from './editedParty.reducer';
import upcomingEvents from './upcoming.reducer';
import partyInfo from './partyInfo.reducer';
import currentPlayersReducer from './currentPlayers.reducer';
import searchBoardGameReducer from './searchBoardGame.reducer';
import searchActivityReducer from './searchIsActive.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  editReducer, // contains the edited version of a party
  user, // will have an id and username if someone is logged in
  myPartiesReducer, // contains the users parties they have created
  upcomingEvents,  // contains the next 4 events to happen based on current date
  partyInfo,  // contains the party info to be displayed on the dashboard
  currentPlayersReducer,  // contains the current players for a specific game
  searchBoardGameReducer, // contains the board games from a search input
  searchActivityReducer, // contains boolean to control conditional rendering on dashboard
});

export default rootReducer;
