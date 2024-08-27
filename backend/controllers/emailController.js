const emailjs = require('@emailjs/nodejs'); 
require('dotenv').config();

exports.sendEmail = async (req, res) => {
  const { userName, userEmail, message } = req.body;

  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        userName,
        userEmail,
        message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY, 
      }
    );
    console.log('SUCCESS!', response);
    res.status(201).json({ success: true, response });
  } catch (err) {
    // Check if the error is an instance of EmailJSResponseStatus
    if (err instanceof emailjs.EmailJSResponseStatus) {
      console.error('EMAILJS FAILED...', err);
      res.status(err.status || 500).json({ success: false, message: err.text });
      return;
    }

    // Other errors (non-EmailJS specific)
    console.error('ERROR:', err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// const emailjs = require('@emailjs/nodejs'); 
// require('dotenv').config();


// exports.sendEmail = async (req, res) => {
//   const { userName, userEmail, message } = req.body;

//   try {
//     const response = await emailjs.send(
//       process.env.EMAILJS_SERVICE_ID,
//       process.env.EMAILJS_TEMPLATE_ID,
//       {
//         userName,
//         userEmail,
//         message,
//       },
//       {
//         publicKey: process.env.EMAILJS_PUBLIC_KEY,
//         privateKey: process.env.EMAILJS_PRIVATE_KEY,
//       }
//     );
//     res.status(201).json({ success: true, response });
//   } catch (err) {
//     console.error('Error sending email:', err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };
