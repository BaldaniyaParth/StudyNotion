const { contactUsEmail } = require("../mail/templates/contactFormRes")             
const mailSender = require("../utils/mailSender")
const ContactUs = require("../models/Contact");

// Contact Controller
exports.contactUsController = async (req, res) => {
  // fetch data
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
  

  try {
    // Send notification email
    await mailSender( email, "Your Data send successfully", contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode))
    await mailSender( "parthbaldaniya94277@gmail.com" , "Someone Send this data to you", contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode))

    const contact = await ContactUs.create({
      firstName : firstname,
      lastName : lastname,
      email,
      countryCode : countrycode,
      contactNumber : phoneNo,
      message
    });

    await contact.save();

    return res.json({
      success: true,
      message: "Email send successfully",
    })
  }
   catch (error) {
      return res.json({
        success: false,
        message: "Something went wrong...",
      })
  }
}