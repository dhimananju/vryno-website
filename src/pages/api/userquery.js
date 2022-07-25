import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

export default async (req, res) => {
  const { email, fullName, subject, message, phone } = req.body;
  const msg = {
    to: 'thakralrohit@gmail.com',
    from: 'info@vryno.com',
    subject: `User query: ${subject} from ${email}`,
    text: `Message from ${fullName} -->  ${message} this email
     was sent by ${email} please contact the user at ${phone}`,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
    console.log(error);
  }
};
