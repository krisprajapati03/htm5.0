const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const { id, email, username } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!id) {
      throw new Error();
    }

    req.userId = id;
    req.email = email;
    req.username = username;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized to access this resource' });
  }
};

module.exports = authentication;
