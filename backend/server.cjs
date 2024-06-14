// const express = require('express');
// const path = require('path');

// const app = express();
// const port = 3000; // Choose any available port

// // Serve static files from the project directory
// app.use(express.static(path.join(__dirname, '/')));

// // Route to serve the "map.html" file
// app.get('/map', (req, res) => {
//   res.sendFile(path.join(__dirname, 'map.html'));
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Choose any available port

// Enable CORS middleware
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// Serve static files from the project directory
app.use(express.static(path.join(__dirname, '/')));

// Route to serve the "map.html" file
app.get('/map', (req, res) => {
  res.sendFile(path.join(__dirname, 'map.html'));
});

// Route to handle sending emails
app.post('/send-emails', async (req, res) => {
  const { emails, subject, message } = req.body;

  try {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'k7518991@gmail.com', // Your Gmail email address
        pass: 'jxfv emwk gjbs fbwn', // Your Gmail password
      },
    });

    // Configure email options
    const mailOptions = {
      from: 'k7518991@gmail.com',
      to: emails.join(', '), // Join all email addresses with commas
      subject: subject,
      text: message,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Send response
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
