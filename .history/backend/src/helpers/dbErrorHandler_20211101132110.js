const getErrorMessage = (err) => {
    let message = "";
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = getUniqueErrirMessage(err)
                break;
        }
    }else{
        for(let errName in err.errors){
            if(err.errors[errName].message) message = err.errors[errName].message
        }
    }
}