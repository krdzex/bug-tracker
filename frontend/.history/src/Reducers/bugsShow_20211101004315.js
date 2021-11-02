const bugShowReducer = (state = "allBugs", action) => {
    switch (action.type) {
        case "ADD_BUG":
            return state = action.payload
        default:
            return state;
    }
}
export default bugReducer;