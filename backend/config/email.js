
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async (contact) => {
  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",

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
  });

  if (error) {
    console.error("Resend Email Error:", error);
    throw new Error(error.message);
  }

  console.log("Email sent successfully:", data.id);

  return data;
};

module.exports = sendContactEmail;
