const mongoose = require('mongoose')
const userSchema= new mongoose.Schema({
    firstname:{
        type: String,
        min:8,
        max: 30,
        required:true
    },
    lastname:{
        type: String,
        min:8,
        max: 30,
        required:true
    },
    username:{
        type: String,
        min:8,
        max: 30,
        required:true
    },
    email:{
        type: String,
        required:true,
        min:6,
        max:30
    },
    password:{
        type: String,
        required:true,
        min:6,
        max:30
    }
})
const User = mongoose.model('User',userSchema)
exports.User = User  