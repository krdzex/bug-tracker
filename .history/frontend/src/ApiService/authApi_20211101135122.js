
const signIn = (data) =>{
    return fetch(`${url}/auth/signin`,{
        method:"POST",
    })
}