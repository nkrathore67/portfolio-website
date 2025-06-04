const UserModel = require('../models/User.model');
const Logger = require('../utils/Logger.util');

// Controller for user-related actions
const UserController = {
    // Register a new user
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;

            // Check if the user already exists
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Create a new user
            const newUser = new UserModel({ username, email, password });
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            Logger.error('Error registering user:', error);
            res.status(500).json({ message: 'Error registering user' });
        }
    },

    // Get user profile
    profile: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            Logger.error('Error fetching user profile:', error);
            res.status(500).json({ message: 'Error fetching user profile' });
        }
    },

    // Update user profile
    updateProfile: async (req, res) => {
        try {
            const userId = req.params.id;
            const updatedData = req.body;
            const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedData, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User profile updated successfully', user: updatedUser });
        } catch (error) {
            Logger.error('Error updating user profile:', error);
            res.status(500).json({ message: 'Error updating user profile' });
        }
    },

    // Delete user account
    deleteAccount: async (req, res) => {
        try {
            const userId = req.params.id;
            const deletedUser = await UserModel.findByIdAndDelete(userId);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User account deleted successfully' });
        } catch (error) {
            Logger.error('Error deleting user account:', error);
            res.status(500).json({ message: 'Error deleting user account' });
        }
    },

    // Get user settings (placeholder example)
    settings: (req, res) => {
        res.status(200).json({ message: 'User settings endpoint' });
    },

    // User login
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            // Add your authentication logic here
            res.status(200).json({ message: 'User logged in successfully' });
        } catch (error) {
            Logger.error('Error logging in user:', error);
            res.status(500).json({ message: 'Error logging in user' });
        }
    },

    // User logout
    logout: (req, res) => {
        try {
            // Add your logout logic here
            res.status(200).json({ message: 'User logged out successfully' });
        } catch (error) {
            Logger.error('Error logging out user:', error);
            res.status(500).json({ message: 'Error logging out user' });
        }
    },

    // Reset password
    resetPassword: async (req, res) => {
        try {
            const { email } = req.body;
            // Add your password reset logic here
            res.status(200).json({ message: 'Password reset link sent successfully' });
        } catch (error) {
            Logger.error('Error resetting password:', error);
            res.status(500).json({ message: 'Error resetting password' });
        }
    },
};

module.exports = UserController;