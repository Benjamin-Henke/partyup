// Stores data from th dashboard when the info button is clicked
// Will be used to display the most current button clicked 
const info = (state = [], action) => {
    switch (action.payload) {
        case 'SET_PARTY_INFO':
            return action.payload
        default:
            return state;
    }
}

export default info;