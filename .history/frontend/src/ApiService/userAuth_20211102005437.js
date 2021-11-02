import url from "../Config/config";
const headers = { "Accept": "application/json", "Content-Type": "application/json" };

const listBugs = () => {
    return fetch(`${url}/api/bug`, {
        method: "GET",
        headers: headers,
    }).then(response => response.json()).catch(err => console.log(err))
}