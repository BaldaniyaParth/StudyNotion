const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//resetPasswordToken :- it generate token and send URL with Token to the user;
exports.resetPasswordToken = async (req, res) => {
  try {
    //get email from req body and check user for this email,find user which email is matched to this email;
    const email = req.body.email;
    const user = await User.findOne({ email: email });

    //if there is no any user for this email;
    if (!user) {
      return res.json({
        success: false,
        message: "Your Email is not registered",
      });
    }

    //generate token and we add expiration time in that token and then we add that token
    const token = crypto.randomBytes(20).toString("hex");

    // URL so the URL which will be sent to user to reset password will expire after certain time;
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 60,
      },
      { new: true }
    );

    //create url
    const url = `http://localhost:3000/update-password/${token}`;
    await mailSender(
      email,
      "Password Reset Link",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    ); //send mail containing the url

    //return response
    return res.json({
      success: true,
      message: "Email sent successfully, please check email and change pwd",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset pwd mail",
    });
  }
};

//resetPassword/
exports.resetPassword = async (req, res) => {
  try {
    //data fetch
    const { password, confirmPassword, token } = req.body;

    //validation
    if (password !== confirmPassword) {
      return res.json({ success: false, message: "Password not matching" });
    }

    //get userdetails from db using token
    const userDetails = await User.findOne({ token: token });
    if (!userDetails) {
      return res.json({ success: false, message: "Token is invalid" });
    }

    //token time check
    if (userDetails.resetPasswordExpires > Date.now()) {
      return res.json({
        success: false,
        message: "Token is expired, please regenerate your token",
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    //password update IN DB;
    await User.findOneAndUpdate(
      { token: token },
      { password: encryptedPassword },
      { new: true }
    );

    //return response
    return res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset pwd mail",
    });
  }
};

