const menuReducer = (state = "0", action) => {
    switch (action.type) {
        case "ACTIVE_FIELD":
            return state = action.payload
        default:
            return state;
    }
}
export default menuReducer;