// Stores the users created parties
//Will be appended on MyParties Pages
const myPartiesReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_MY_PARTIES' :
            return action.payload;
        default:
            return state;
    }
}

export default myPartiesReducer;