import User from "../models/user.model"
const createUser = (req,res) =>{
    const user = new User(req.body)
}