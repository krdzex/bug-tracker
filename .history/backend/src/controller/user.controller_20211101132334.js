import User from "../models/user.model"
const createUser = (req,res) =>{
    const user = new User(req.body)
    user.save((err,result) =>{
        if(err){
            
        }
        res.status(200).json({
            message: "Successfully signed up"
        })
    })
}

export default