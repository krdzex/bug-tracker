import User from "../models/user.model"

const signIn = (res, req) => {
    User.findOne({ "userName": req.body.userName }, (err, user) => {
        if (err || !user) {

        }
    })
}