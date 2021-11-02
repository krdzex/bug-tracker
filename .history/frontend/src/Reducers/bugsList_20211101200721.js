const allBugsReducer = (state = , action) => {
    switch (action.type) {
        case "ALL_BUGS":
            return state = action.payload
        default:
            return state;
    }
}
export default allBugsReducer;