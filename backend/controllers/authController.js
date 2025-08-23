const User = require("../models/User");
const bcrypt = require("bcrypt.js");
const jwt = require("jsonwebtoken");
 
//Generate JWT Token
const generateToken = (userID) => {
    return jwt.sign({ id:userID}, process.env.JWT_SECRET, {expiresIn: "7d"});
};

//@desc  register a new user
//@route POST /api/auth/register
//@access Public
const registerUser = async (req, res) => {
    try{
        const { name. email, password, profileImageUrl, adminInviteToken } = req.body;

        // check if user already exists
        const userExists = await User.findOne({ email });
        if(userExists){
            return res.status(400).json({ message: "User already exists! "});
        }

        // Determine user: Admin if correct token is provided, otherwise member
        let role= "member";
        if ( adminInviteToken && adminInviteToken == process.env.ADMIN_INVITE_TOKEN){
            role = " admin"
        }
    }catch (error){
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//@desc  login user
//@route POST /api/auth/login
//@access Public
const loginUser = async (req, res) => {
    try{
    }catch (error){
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//@desc  Get user profile
//@route GET /api/auth/profile
//@access Private (Requires JWT)
const getUserProfile = async (req, res) => {
    try{
    }catch (error){
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//@desc  Update user profile
//@route PUT /api/auth/profile
//@access Private (Requires JWT)
const updateUserProfile = async (req, res) => {
    try{
    }catch (error){
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile};