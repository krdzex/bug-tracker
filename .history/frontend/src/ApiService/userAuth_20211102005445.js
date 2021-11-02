import url from "../Config/config";
const headers = { "Accept": "application/json", "Content-Type": "application/json" };

const listUserNames = () => {
    return fetch(`${url}/api/user`, {
        method: "GET",
        headers: headers,
    }).then(response => response.json()).catch(err => console.log(err))
}