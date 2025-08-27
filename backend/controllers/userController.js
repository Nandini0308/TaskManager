const Task = require("../models/Task");
const task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require("bcrypt");

//@desc Get all Admin only User
//@route Get /api/users/
//@access Private (Admin)
const getUsers = async (req, res) => {
    try{
const users = await User.find({role:'member'}).select ("-password");

        //Add task counts to each user
        const userWithTaskCounts = await Promise.all(users.map(async (user) => {
            const pendingTasks = await Task.countDocuments({assignedTo: user_id, status:"Pending "});
            const inProhressTasks = await Task.countDocuments({assignedTo: user_id, status: "In Progress"});
            const completedtasks = await Task.countDocuments({ assignedTo: user_id, status: " Completed"});

            return {...user._doc,// Includes all existing user data
                pendingTasks,
                inProhressTasks,
                completedtasks,
            };
        }));

        res.json(userWithTaskCounts);
        
    }catch(error) {
        res.status(500).json({ message: "Server error", error:error.message });
    }
};

//@desc Get user by ID
//@route Get /api/users/:id
//@access Private 
const getUserById = async (req, res) => {
    try{

    }catch(error) {
        res.status(500).json({ message: "Server error", error:error.message });
    }
};

//@desc Get all Admin only User
//@route Get /api/users/:id
//@access Private (Admin)
const deleteUser = async (req, res) => {
    try{

    }catch(error) {
        res.status(500).json({ message: "Server error", error:error.message });
    }
};

module.exports = {getUsers, getUserById, deleteUser};