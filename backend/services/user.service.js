const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error('All fields are required');
  }

  // Check if the email already exists in the database
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists with this email');
  }

  // Hash the password before saving
  const hashedPassword = await userModel.hashPassword(password);

  // Create a new user document
  const user = await userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password: hashedPassword,
  });

  return user;
};
