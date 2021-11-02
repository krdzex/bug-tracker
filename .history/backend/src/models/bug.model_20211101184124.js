import mongoose from "mongoose"

const BugSchema = new mongoose.Schema({
    name: { String, trim: true },
    details: { String, trim: true },
    steps: { String, trim: true },
    version: { String, trim: true },
    priority: { String, trim: true },
    Assigned: { String, trim: true },
    Creator: { String, trim: true },
    time: {}
})