const menuReducer = (state = "", action) => {
    switch (action.type) {
        case "ACTIVE_FIELD":
            return state = action.payload
        default:
            return state;
    }
}
export default menuReducer;