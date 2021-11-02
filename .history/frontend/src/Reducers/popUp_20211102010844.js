const workersListReducer = (state = {show: false,content: ""}, action) => {
    switch (action.type) {
        case "SHOW_POP_UP":
            return state ={show}
        default:
            return state;
    }
}
export default workersListReducer;