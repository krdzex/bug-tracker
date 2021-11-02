import Bug from "../models/bug.model"
const createBug = (req,res) =>{
    const bug = new Bug(req.body);

}