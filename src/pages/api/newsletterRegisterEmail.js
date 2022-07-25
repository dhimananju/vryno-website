import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);


export default async (req, res) => {
  const { email } = req.body;
  const msg = {
    to: 'thakralrohit@gmail.com',
    from: 'info@vryno.com',
    subject: `Newsletter subscription Notification`,
    text: `${email} just subscribed to vryno newsletter`,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
    console.log(error);
  }
};
