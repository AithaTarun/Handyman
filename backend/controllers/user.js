const User = require('../models/user');

const bcrypt = require('bcrypt');

const jsonwebtoken = require('jsonwebtoken');

exports.createUser = async (request, response, next) =>
{
  try
  {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const user = new User
    (
      {
        username : request.body.username,
        password : hashedPassword,
        role: request.body.role,
        email: request.body.email,
        phone: request.body.phone
      }
    );

    const result = await user.save();

    return response.status(201).send
    (
      {
        status: true,
        message : 'User created',
        result :
          {
            id : result._id,
            username : result.username,
          }
      }
    );
  }
  catch (error)
  {
    console.log("Error while creating user : ", error);

    let errorMessages = [];

    Object.entries(error.errors)
      .map(
        err =>
        {
          console.log(err[0]);
          errorMessages.push(err[0])
        }
      );

    return response.status(500).send
    (
      {
        status: false,
        message : errorMessages
      }
    );
  }
};

exports.loginUser = async (request, response, next) =>
{
  try
  {
    const user = await User.findOne
    (
      {
        username: request.body.username
      }
    );

    if (user) // Found user
    {
      // Validate password
      const passwordResult = await bcrypt.compare(request.body.password, user.password);

      if (passwordResult) // Valid password
      {
        const token = jsonwebtoken.sign
        (

          {
            user
          },
          process.env.SECRET_KEY,
          {
            expiresIn: request.body.remember ? '30d' : '1d'
          }
        )

        console.log("Found user");
        return response.status(200).send({status: true, message: "Found user", token});
      }
      else // Invalid password
      {
        console.log("Incorrect password");
        return response.status(401).send({status: false, message: "Incorrect password"});
      }
    }
    else
    {
      console.log("User not found");
      return response.status(401).send({status: false, message: "User not found"});
    }
  }
  catch (error)
  {
    console.log("Error while authenticating user : ", error);
    return response.status(401).send({status: false, message: error.message});
  }
}
