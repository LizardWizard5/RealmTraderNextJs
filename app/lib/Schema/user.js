import mongoose from 'mongoose';

//const plm = require('passport-local-mongoose')
//The only way to login is through discord


let UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    discordId:{
        type: String,
        required: true
    },
    ProfilePicture:{
        type:String,
        required: false
    },
    DisplayName:{
        required: true,
        type: String
    },
    BannerColor:{
        type: String,
        required: false
    },
    IsVerified:{
        type: Boolean,
        required: true
    },
    status:{//Admin, User, Banned
        type: String,
        required: true,
        default: "user"
    },
    bannedUntil:{
        type: Date,
        required: false
    },
})

//Schema.plugin(plm)
export default mongoose.models.users || mongoose.model('users', UserSchema)