import Bug from "../models/bug.model"
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

export default { createBug }