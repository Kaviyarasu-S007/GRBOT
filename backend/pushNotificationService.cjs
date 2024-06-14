// const express = require('express');
// const admin = require('firebase-admin');
// const multer = require('multer');
// const serviceAccount = require('../src/pages/Calendar/serviceAccountKey.json');

// const app = express();
// const port = 3000;

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "kavi-597ca.appspot.com", 
//   // Add any other configuration options here
// });

// // Set up multer for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Route for handling file uploads
// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const file = req.file;

//     // Check if file exists
//     if (!file) {
//       return res.status(400).send('No file uploaded.');
//     }

//     // File upload successful, now upload to Firebase Storage
//     const bucket = admin.storage().bucket();
//     const fileName = `Schemes/${Date.now()}_${file.originalname}`;
//     const fileUpload = bucket.file(fileName);

//     await fileUpload.save(file.buffer, {
//       metadata: {
//         contentType: file.mimetype,
//       },
//     });

//     console.log('File uploaded to Firebase Storage:', fileName);

//     // Trigger push notification
//     const tokens = ['ciwCMf2dSpmykyW2Tt75GJ:APA91bGRY4PSNqp5fzW3O-ObvfO65XYQbKFg4Cv1qMxCAvMXr5KgE8ofKZVC6yukAeeenYfEkOB41_HwzvAUVnAaZ8v39jPUGvlhZ1SqSwbglt92G5VdUSkyFbHPf4599DyEhGRrE3y-']; // Add device tokens here
//     const title = 'New File Uploaded';
//     const body = 'A new file has been uploaded!';
//     await sendPushNotification(tokens, title, body);

//     // Send response
//     res.status(200).send('File uploaded to Firebase Storage and push notification sent.');
//   } catch (error) {
//     console.error('Error handling file upload:', error);
//     res.status(500).send('An error occurred while handling file upload.');
//   }
// });

// // Function to send push notification
// async function sendPushNotification(tokens, title, body) {
//   try {
//     const message = {
//       notification: {
//         title: title,
//         body: body,
//       },
//       tokens: tokens,
//     };

//     const response = await admin.messaging().sendMulticast(message);
//     console.log('Successfully sent message:', response);

//     response.responses.forEach((res, index) => {
//       if (!res.success) {
//         console.error(`Failed to send notification to token ${tokens[index]}:`, res.error);
//       }
//     });

//     return response;
//   } catch (error) {
//     console.error('Error sending message:', error);
//     throw error;
//   }
// }

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



// const express = require('express');
// const admin = require('firebase-admin');
// const multer = require('multer');
// const serviceAccount = require('../src/pages/Calendar/serviceAccountKey.json');

// const app = express();
// const port = 3000;

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "kavi-597ca.appspot.com",
//   // Add any other configuration options here
// });

// // Set up multer for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Route for handling file uploads
// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const file = req.file;

//     // Check if file exists
//     if (!file) {
//       return res.status(400).send('No file uploaded.');
//     }

//     // File upload successful, now upload to Firebase Storage
//     const bucket = admin.storage().bucket();
//     const fileName = `Schemes/${Date.now()}_${file.originalname}`;
//     const fileUpload = bucket.file(fileName);

//     await fileUpload.save(file.buffer, {
//       metadata: {
//         contentType: file.mimetype,
//       },
//     });

//     console.log('File uploaded to Firebase Storage:', fileName);

//     // Get download URL for the uploaded file
//     const downloadURL = await fileUpload.getSignedUrl({
//       action: 'read',
//       expires: '03-01-2500', // Change the expiration date as needed
//     });

//     // Trigger push notification with download URL included in message
//     const tokens = ['ciwCMf2dSpmykyW2Tt75GJ:APA91bGRY4PSNqp5fzW3O-ObvfO65XYQbKFg4Cv1qMxCAvMXr5KgE8ofKZVC6yukAeeenYfEkOB41_HwzvAUVnAaZ8v39jPUGvlhZ1SqSwbglt92G5VdUSkyFbHPf4599DyEhGRrE3y-']; // Add device tokens here
//     const title = 'New File Uploaded';
//     const body = `Tamil Nadu government TNEB department has released a new Scheme. If you are willing to apply for this, download the file from ${downloadURL}`;
//     const soundFileName = 'gs://kavi-597ca.appspot.com/pikachu.mp3';
//     await sendPushNotification(tokens, title, body);

//     // Send response
//     res.status(200).send('File uploaded to Firebase Storage and push notification sent.');
//   } catch (error) {
//     console.error('Error handling file upload:', error);
//     res.status(500).send('An error occurred while handling file upload.');
//   }
// });

// // Function to send push notification
// async function sendPushNotification(tokens, title, body) {
//   try {
//     const message = {
//       notification: {
//         title: title,
//         body: body,
//       },
//       android: {
//         notification: {
//           sound: `sounds/${sound}`, // Specify the path to the sound file in Firebase Storage
//         },
//       },
//       tokens: tokens,
//     };

//     const response = await admin.messaging().sendMulticast(message);
//     console.log('Successfully sent message:', response);

//     response.responses.forEach((res, index) => {
//       if (!res.success) {
//         console.error(`Failed to send notification to token ${tokens[index]}:`, res.error);
//       }
//     });

//     return response;
//   } catch (error) {
//     console.error('Error sending message:', error);
//     throw error;
//   }
// }

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const admin = require('firebase-admin');
const multer = require('multer');
const serviceAccount = require('../src/pages/Calendar/serviceAccountKey.json');

const app = express();
const port = 3000;

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "kavi-597ca.appspot.com",
  // Add any other configuration options here
});

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for handling file uploads
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    // Check if file exists
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    // File upload successful, now upload to Firebase Storage
    const bucket = admin.storage().bucket();
    const fileName = `Schemes/${Date.now()}_${file.originalname}`;
    const fileUpload = bucket.file(fileName);

    await fileUpload.save(file.buffer, {
      metadata: {
        contentType: file.mimetype,
      },
    });

    console.log('File uploaded to Firebase Storage:', fileName);

    // Get download URL for the uploaded file
    const downloadURL = await fileUpload.getSignedUrl({
      action: 'read',
      expires: '03-01-2500', // Change the expiration date as needed
    });

    // Trigger push notification with download URL included in message
    const tokens = ['ciwCMf2dSpmykyW2Tt75GJ:APA91bGRY4PSNqp5fzW3O-ObvfO65XYQbKFg4Cv1qMxCAvMXr5KgE8ofKZVC6yukAeeenYfEkOB41_HwzvAUVnAaZ8v39jPUGvlhZ1SqSwbglt92G5VdUSkyFbHPf4599DyEhGRrE3y-','fg6Es6VFSGieqmQIUHyxMM:APA91bG8Cm8iR2rnFs6zVhMH_qQRq7M0PjPIzu3UxMLSX2A7iVF9q9e6uX9brhkzaGg7sRHdQ69F8YQ04WYC7wK5lbF-uHcW3k6DwcgLuOLrn24kiBcrGuhPe_mS0sszIAAivPKTVldD']; // Add device tokens here
    const title = 'New File Uploaded';
    const body = `Tamil Nadu government TNEB department has released a new Scheme. If you are willing to apply for this, download the file from ${downloadURL}`;
    const soundFileName = 'gs://kavi-597ca.appspot.com/pikachu.mp3';
    await sendPushNotification(tokens, title, body, soundFileName);

    // Send response
    res.status(200).send('File uploaded to Firebase Storage and push notification sent.');
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).send('An error occurred while handling file upload.');
  }
});

// Function to send push notification
async function sendPushNotification(tokens, title, body, soundFileName) {
  try {
    const message = {
      notification: {
        title: title,
        body: body,
      },
      android: {
        notification: {
          sound: soundFileName, // Specify the path to the sound file in Firebase Storage
        },
      },
      tokens: tokens,
    };

    const response = await admin.messaging().sendMulticast(message);
    console.log('Successfully sent message:', response);

    response.responses.forEach((res, index) => {
      if (!res.success) {
        console.error(`Failed to send notification to token ${tokens[index]}:`, res.error);
      }
    });

    return response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
