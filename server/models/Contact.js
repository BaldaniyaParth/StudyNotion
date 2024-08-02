const mongoose = require("mongoose");

// Define the ContactUs schema
const contactSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},
        countryCode: {
            type: Number,
            trim: true,
        },
        contactNumber: {
            type: Number,
            trim: true,
        },
        message: {
            type: String,
            trim: true,
        }
	},
);

module.exports = mongoose.model("contact", contactSchema);