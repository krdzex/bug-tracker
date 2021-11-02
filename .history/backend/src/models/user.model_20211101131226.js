import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    userName: { type: String, trim: true },
    hashed_password: { type: String, trim: true },
    role: { type: String, trim: true },
    salt: String
})

UserSchema.virtual("password").set(function(password){
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password)
})

UserSchema.method


