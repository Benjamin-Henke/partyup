// Will be used to control how the welcome text and search results are rendered in the same div container
// Will be appended on Dashboard Page
const isActive = (state = false, action) => {
    switch (action.type) {
        case 'SET_SEARCH_IS_ACTIVE':
            return state = true;
        case 'SET_SEARCH_IS_INACTIVE':
            return state = false;
        default:
            return state;
    }
}

export default isActive;