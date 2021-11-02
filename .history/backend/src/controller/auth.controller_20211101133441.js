import User from "../models/user.model"

const signIn = (res, req) => {
    User.findOne({ "userName": req.body.userName }, (err, user) => {
        if (err || !user) {
            return res.status("401").json({
                userName: "Username and password dont match"
                userName: "Email and password dont match"
            })
        }
    })
}