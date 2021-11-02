import url from "../Config/config";
const headers = { "Accept": "application/json", "Content-Type": "application/json" };

const signIn = (data) => {
    return fetch(`${url}/auth/signin`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => response.json()).catch(err => console.log(err))
}

export { signIn }