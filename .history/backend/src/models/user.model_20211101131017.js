import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    userName: { type: String, trim: true },
    password: { type: String, trim: true },
    role: { type: String, trim: true },
})