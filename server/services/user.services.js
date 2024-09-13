const User = require('../models/user.models');

exports.getUserById = async (userId) => {
    try {
        const user = await User.findById(userId).select('-password');
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
};

exports.getUserByEmail = async (email) => {
    return await User.findOne({ email });
};
