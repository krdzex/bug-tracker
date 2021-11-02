import jwt from "express-jwt"
import User from "../models/user.model"
import config from "../../config/config"
const signIn = (res, req) => {
    User.findOne({ "userName": req.body.userName }, (err, user) => {
        if (err || !user) {
            return res.status("401").json({
                userName: "Username and password dont match",
                password: "Username and password dont match"
            })
        }
        if (!user.authenticate(req.body.password)) {
            return res.status("401").json({
                userName: "Username and password dont match",
                password: "Username and password dont match"
            })
        }

        const token = jwt.signIn({ _id: user._id }, config.jwtSecret);
        res.cookie
    })
}