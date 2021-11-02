export const newActive = (field) => {
    return {
        type: "ACTIVE_FIELD",
        payload: field
    }
}

export const addBug = (bug) => {
    return {
        type: "ADD_BUG",
        payload: bug
    }
}


export const changeShow = (show) => {
    return {
        type: "CHANGE_SHOW",
        payload: show
    }
}


export const allBugs = (show) => {
    return {
        type: "CHANGE_SHOW",
        payload: show
    }
}