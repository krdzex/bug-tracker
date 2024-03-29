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


export const allBugs = (bugs) => {
    return {
        type: "ALL_BUGS",
        payload: bugs
    }
}


export const addWorkers = (workers) => {
    return {
        type: "ADD_WORKERS",
        payload: workers
    }
}

export const openPopUp = (content) => {
    return {
        type: "SHOW_POP_UP",
        payload: content
    }
}

export const closePopUp = () => {
    return {
        type: "REMOVE_POP_UP"
    }
}