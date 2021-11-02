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

        if (err || !result) {
            return res.status(400).json({ error: "Something is wrong" })
        }

        let bug = result;

        bug = _.extend(bug, req.body)

        bug.save((err) => {
            if (err) {
                return res.status(400).json(
                    errorHandler.getErrorMessage(err)
                )
            }
            res.json({ message: "Successfuly edited" })
        })
    })
}
const completeBug = (req, res) => {
    let id = req.params.id;
    Bug.findById(id).exec((err, result) => {

        if (err || !result) {
            return res.status(400).json({ error: "Something is wrong" })
        }

        let bug = result;

        bug = _.extend(bug, {complete: true})

        bug.save((err) => {
            if (err) {
                return res.status(400).json(
                    errorHandler.getErrorMessage(err)
                )
            }
            res.json({ message: "Successfuly edited" })
        })
    })
}



export default { createBug, listBugs, removeBug, editBug,completeBug }