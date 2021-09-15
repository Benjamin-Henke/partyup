// Stores data from the the users search input of finding a board game
// Will be used to display on the dashboard
const boardGames = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCHED_BOARD_GAME':
            return action.payload
        default:
            return state;
    }
}

export default boardGames;