import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    userName: { type: String, trim: true },
    password: { type: String, trim: true },
    role: { type: String, trim: true },
})

UserSchema.virtual("password").set(function(password){
    this
})


