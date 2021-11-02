const workersListReducer = (state = {}, action) => {
    switch (action.type) {
        case "SHOW_POP_UP":
            return state = action.payload
        default:
            return state;
    }
}
export default workersListReducer;