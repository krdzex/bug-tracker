import mongoose from "mongoose"

const BugSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    details: { type: String, trim: true },
    steps: { type: String, trim: true },
    version: { type: String, trim: true },
    priority: { type: String, trim: true },
    assigned: { type: String, trim: true },
    creator: { type: String, trim: true },
    complete: { type: String, trim: true },
    time: { type: Date, default: Date.now }
})

export default mongoose.model("Bug", BugSchema)