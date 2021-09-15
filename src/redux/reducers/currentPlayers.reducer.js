// Stores the current players for a specific game
// Will be appended on MyParties Page
const currentPlayersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENT_PLAYERS':
            return action.payload;
        default:
            return state;
    }
}

export default currentPlayersReducer;