// const admin = require('firebase-admin');
// const serviceAccount = require('../src/pages/Calendar/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // Add any other configuration options here
// });

// module.exports = admin;



const admin = require('firebase-admin');
const serviceAccount = require('../src/pages/Calendar/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Add any other configuration options here
});

module.exports = {
  admin,
  sendPushNotification: async (tokens, title, body) => {
    try {
      const message = {
        notification: {
          title: title,
          body: body,
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
};
