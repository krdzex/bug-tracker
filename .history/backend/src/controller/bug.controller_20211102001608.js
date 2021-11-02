import Bug from "../models/bug.model"
import _ from "lodash"
const createBug = (req, res) => {
    const bug = new Bug(req.body);
    bug.save((err, result) => {
        if (err) {
            return res.status(400).json({ error: "Something is wrong" })
        }

        res.status(200).json({
            message: "Successfully created bug"
        })
    })
}

const listBugs = (req, res) => {
    Bug.find((err, result) => {
        res.status(200).json(result)
    })
}

const removeBug = (req, res) => {
    let id = req.params.id
    Bug.deleteOne({ _id: id }, (err, result) => {
        if (err) {
            return res.status(400).json({ error: "Something is wrong" })
        }

        res.status(200).json({
            message: "Successfully deleted bug"
        })
    })
}
const editBug = (req, res) => {
    let id = req.params.id;
    Bug.findById(id).exec((err, result) => {

        const bug = result;

        bug = _.
        if (err) {
            return res.status(400).json({ error: "Something is wrong" })
        }
        res.status(200).json({
            message: "Successfully edited bug"
        })
    })
}

export default { createBug, listBugs, removeBug, editBug }