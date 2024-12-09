let mongoose = require('mongoose')

const plm = require('passport-local-mongoose')
//The only way to login is through discord
let Schema =  mongoose.Schema({
    Email:{
        type: String,
        required: true
    },
    Username:{
        type: String,
        required: true
    },
    discordId:{
        type: String,
        required: true
    },
    Token:{
        type: String,
        required: true
    },
    RefreshToken:{
        type: String,
        required: true
    },
    ProfilePicture:{
        type:String,
        required: false
    },
    Pfp:{
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
    
})

Schema.plugin(plm)
const User = mongoose.model('users', Schema)
module.exports = User
