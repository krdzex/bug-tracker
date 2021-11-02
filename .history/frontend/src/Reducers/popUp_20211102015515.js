const popUpReducer = (state = { show: false, content: "Successfuly deleted bug!" }, action) => {
    switch (action.type) {
        case "SHOW_POP_UP":
            return state = { show: true, content: action.payload }
        case "REMOVE_POP_UP":
            return state = { ...state, show: false }
        default:
            return state;
    }
}
export default popUpReducer;