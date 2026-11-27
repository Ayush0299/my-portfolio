
const nodemailer = require("nodemailer");

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Send notification email
const sendContactEmail = async (contact) => {
  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,

    to: process.env.NOTIFICATION_EMAIL,

    replyTo: contact.email,

    subject: `New Portfolio Message: ${contact.subject}`,

    text: `
Hello Ayush,

You have received a new message through your portfolio website.

Visitor Details:

Name: ${contact.name}

Email: ${contact.email}

Subject: ${contact.subject}

Message:
${contact.message}

--------------------------------
Portfolio Contact Form
    `,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = sendContactEmail;
