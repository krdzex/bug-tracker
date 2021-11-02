import mongoose from "mongoose"

const BugSchema = new mongoose.Schema({
    name: { String },
    details: { String },
    steps: { String },
    version: { String },
    priority: { String },
    Assigned: { String,trim: true },
    Creator: { String,trim: true }
})