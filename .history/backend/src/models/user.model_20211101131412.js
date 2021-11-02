import mongoose from "mongoose"
import crypto from "crypto"

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

UserSchema.method = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password){
        if(!password) return ""
        try {
            return 
        } catch (error) {
            crypto.createHmac("sha1",this.salt).update(password).digest("hex")
        }
    },
    
}


