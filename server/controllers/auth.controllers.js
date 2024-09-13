const { getUserByEmail } = require('../services/user.services');
const { createAccessToken } = require('../services/authantication.services');
const User = require('../models/user.models');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  try {
      const {firstName, lastName, username, email, password} = req.body;

      const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
      if (existingUser) {
          return res.status(400).json({ message: 'Email or Username already in use' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const newUser = new User({
          email,
          username,
          password: hashedPassword,
          profile: {
              firstName: firstName,
              lastName: lastName
          }
      });

      // Save the user to the database
      await newUser.save();

      // Return success response
      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Error registering user', error: error.message });
      console.error('Signup error:', error);
  }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      const user = await getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = createAccessToken(user.id, user.email, user.username);

      res.status(200).json({ message: 'User logged in successfully', token: token });
  
    } catch (error) { 
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };