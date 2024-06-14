// // pushNotifications.js

// import admin from 'firebase-admin'; // Import admin from 'firebase-admin' package
// import serviceAccount from './serviceAccountKey.json';

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const sendPushNotification = async (tokens, title, body) => {
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
//     return response;
//   } catch (error) {
//     console.error('Error sending message:', error);
//     throw error;
//   }
// };

// export default sendPushNotification; // Export sendPushNotification as default
//===========================================================================================================================================================================


// pushnotification.js

import { adminApp } from '../../data/'; // Import the Firebase Admin SDK instance

// Define the function to send push notifications
export const sendPushNotification = async (tokens, title, body) => {
  try {
    // Construct an array of message objects
    const messages = tokens.map(token => ({
      notification: {
        title: title,
        body: body,
      },
      token: token, // Note: 'token' is a single FCM token
    }));

    // Send the batch of messages using Firebase Admin SDK
    const response = await adminApp.messaging().send(messages);

    // Log success message
    console.log('Successfully sent messages:', response);

    // Return the response (optional)
    return response;
  } catch (error) {
    // Log error and throw it for further handling
    console.error('Error sending messages:', error);
    throw error;
  }
};

