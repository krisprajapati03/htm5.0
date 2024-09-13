const { getUserById } = require('../services/user.services');

exports.getUserProfile = async (req, res) => {
    try {
        const userId = req.userId;

        // Find the user by ID in the database
        const user = await getUserById(userId); // Exclude the password field

        // If user not found, return an error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return user profile data
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error: error.message });
        console.error('Get user profile error:', error);
    }
};