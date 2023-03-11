const { User } = require("../models/User");

const register = async(req, res) => {
    let data = req.body;
    const existingUser = await User.findOne({ email: data.email });
    if(existingUser) return res.status(400).send("Email already taken");

    const hashedPassword = hashedPassword(data.password);
    data.password = hashedPassword;
    
    const newUser = new User({ ...data });

    await newUser.save();

    return res.status(201).json(newUser);
}

const getUsers = async (req,res) => {
    const users = await User.find({});
    return res.status(200).json(users)
}


exports.registerUser = register
exports.getUsers = getUsers;