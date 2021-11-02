import url from "../config/config";
const headers = { "Accept": "application/json", "Content-Type": "application/json" };

const signIn = (data) =>{
    return fetch(`${url}/auth/signin`,{
        method:"POST",
        headers: headers,
        body: 
    })
}

export  {signIn}