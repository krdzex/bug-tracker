import jwt from "jsonwebtoken"
import User from "../models/user.model"
import config from "../../config/config"
const signIn = (req, res) => {
    console.log(req.body)
    User.findOne({ "userName": req.body.userName, role: req.body.role}, (err, user) => {
        if (err || !user) {
            return res.status("401").json({
                userName: "Username and password dont match",
                password: "Username and password dont match",
                role: `No ${req.body.role} with this credentials`
            })
        }
        if (!user.authenticate(req.body.password)) {
            return res.status("401").json({
                userName: "Username and password dont match",
                password: "Username and password dont match",
                role: `No {${req.body.role}} with this credentials`
            })
        }



        const token = jwt.sign({ _id: user._id }, config.jwtSecret);
        res.cookie("t", token, {
            expire: new Date() + 999
        })

        return res.status(200).json({
            token, user: { _id: user._id, userName: user.userName, role: user.role }
        })
    })
}

export default { signIn }