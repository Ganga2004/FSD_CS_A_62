const User = require('../Model/userModel.js');


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude passwords
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
};


const getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({ email }).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = new User({ name, email, password, role });
        const savedUser = await user.save();
        res.status(201).json({ message: 'User created', user: savedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const email = req.params.email;
        const updatedData = req.body;
        const updatedUser = await User.findOneAndUpdate({ email }, updatedData, { new: true }).select('-password');
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const email = req.params.email;
        const deletedUser = await User.findOneAndDelete({ email });
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
};
