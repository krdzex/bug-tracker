import url from "../Config/config";
const headers = { "Accept": "application/json", "Content-Type": "application/json" };


const createBug = (bug) => {
    return fetch(`${url}/api/bug`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(bug)
    }).then(response => response.json()).catch(err => console.log(err))
}

export { createBug }