const listBugs = () => {
    return fetch(`${url}/api/bug`, {
        method: "GET",
        headers: headers,
    }).then(response => response.json()).catch(err => console.log(err))
}