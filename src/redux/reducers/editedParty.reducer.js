// Stores the users created parties
// Will be appended on MyParties Pages
const editedPartyReducer = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_THIS_PARTY':
            return action.payload;
        default:
            return state;
    }
}

export default editedPartyReducer;