const authenticate = (token,cb) =>{
    if(typeof window !== undefined) {
        sessionStorage("jwt",JSON.stringify(token))
        cb();
    }
}

const isAuthentcated = () => {
    if (typeof window == "undefined") return false;
    if (sessionStorage.getItem("jwt")) {
        return JSON.parse(sessionStorage.getItem("jwt"))
    }
    return false;
}

const signOut = () => {
    if (typeof window !== "undefined") sessionStorage.removeItem("jwt")
}

const export 