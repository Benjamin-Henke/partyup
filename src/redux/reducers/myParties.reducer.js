// Stores the users created parties
// Will be appended on MyParties Pages
const userPartiesReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_MY_PARTIES':
            return action.payload;
        default:
            return state;
    }
}

export default userPartiesReducer;