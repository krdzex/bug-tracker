export const newActive = (field) =>{
    return {
        type: "ACTIVE_FIELD",
        payload: field
    }
}

export const addBug = (field) =>{
    return {
        type: "ADD_BUG",
        payload: field
    }
}