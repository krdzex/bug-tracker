import url from "../Config/config";
const headers = { "Accept": "application/json", "Content-Type": "application/json" };


const createBug = (bug) => {
    return fetch(`${url}/api/bug`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(bug)
    }).then(response => response.json()).catch(err => console.log(err))
}

const listBugs = () => {
    return fetch(`${url}/api/bug`, {
        method: "GET",
        headers: headers,
    }).then(response => response.json()).catch(err => console.log(err))
}

const deleteBug = (id) => {
    return fetch(`${url}/api/bug/${id}`, {
        method: "DELETE",
        headers: headers,
    }).then(response => response.json()).catch(err => console.log(err))
}

const editBug = (id, bug) => {
    return fetch(`${url}/api/bug/${id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(bug)
    }).then(response => response.json()).catch(err => console.log(err))
}

export { createBug, listBugs, deleteBug }