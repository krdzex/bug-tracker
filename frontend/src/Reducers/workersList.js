const workersListReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_WORKERS":
            return state = action.payload
        default:
            return state;
    }
}
export default workersListReducer;