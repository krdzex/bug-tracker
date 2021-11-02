import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String }
    role: { type: String }
})