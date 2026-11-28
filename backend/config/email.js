
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

const sendContactEmail = async (contact) => {
  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
    to: process.env.NOTIFICATION_EMAIL,
    replyTo: contact.email,
    subject: `New Portfolio Message: ${contact.subject}`,
    text: `
Hello Ayush,

You have received a new message through your portfolio website.

Name: ${contact.name}
Email: ${contact.email}
Subject: ${contact.subject}

Message:
${contact.message}
`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Nodemailer Error:", {
      code: error.code,
      command: error.command,
      response: error.response,
      message: error.message,
    });
    throw error;
  }
};

module.exports = sendContactEmail;
