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


export const changeSHow = (bug) => {
    return {
        type: "CHANGE_SHOW",
        payload: bug
    }
}