
const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");
const sendContactEmail = require("../config/email");

// POST API - Save contact and send Gmail notification
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save contact in MongoDB
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    console.log("Contact saved in MongoDB!");

    // Send Gmail notification
    let notificationSent = false;

    try {
      const emailResponse = await sendContactEmail(newContact);

      notificationSent = true;

      console.log("Gmail notification sent:", emailResponse.messageId);

    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
    }

    // Send response
    return res.status(201).json({
      success: true,
      notificationSent,
      message: notificationSent
        ? "Your message has been sent successfully!"
        : "Your message was saved, but email notification could not be sent.",
    });

  } catch (error) {
    console.error("Contact API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

module.exports = router;
