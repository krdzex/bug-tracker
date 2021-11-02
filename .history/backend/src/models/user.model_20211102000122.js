import crypto from "crypto";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    : {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        unique: "Email already exists",
    },

    hashed_password: {
        type: String,
        required: true
    },
    salt: String
})

UserSchema.virtual("password").set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password)
})

UserSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function (password) {
        if (!password) return ""
        try {
            return crypto.createHmac("sha1", this.salt).update(password).digest("hex")
        } catch (err) {
            return ""
        }
    },
    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + ""
    }
}

export default mongoose.model("User", UserSchema);