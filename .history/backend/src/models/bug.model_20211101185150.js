import mongoose from "mongoose"

const BugSchema = new mongoose.Schema({
    name: { type:String, trim: true },
    details: { type:String, trim: true },
    steps: { type: String, trim: true },
    version: { String, trim: true },
    priority: { String, trim: true },
    assigned: { String, trim: true },
    creator: { String, trim: true },
    time: { type: Date, default: Date.now }
})

export default mongoose.model("Bug", BugSchema)