// Stores the 5 most recent posts in the database, not dependant on user
// Will be appended on Dashboard Page
const upcoming = (state = [], action) => {
    switch (action.type) {
        case 'SET_UPCOMING_EVENTS':
            return action.payload;
        default:
            return state;
    }
}

export default upcoming;
