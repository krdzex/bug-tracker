const authenticate = (token,cb) =>{
    if(typeof window !== undefined) {
        sessionStorage("jwt",JSON.stringify(token))
        cb();
    }
}

