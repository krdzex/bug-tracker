const allBugsReducer = (state = "allBugs", action) => {
    switch (action.type) {
        case "CHANGE_SHOW":
            return state = action.payload
        default:
            return state;
    }
}
export default allBugsReducer;