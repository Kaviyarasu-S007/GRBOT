const puppeteer = require('puppeteer');
const firebase = require('firebase/app');
require('firebase/database');

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_9LJaDX0EmvqfEeYJGExdHRqQN5zo_FU",
    authDomain: "kavi-597ca.firebaseapp.com",
    projectId: "kavi-597ca",
    storageBucket: "kavi-597ca.appspot.com",
    messagingSenderId: "609330279022",
    appId: "1:609330279022:web:647d3f879d5c0db5446c7f"
};
firebase.initializeApp(firebaseConfig);

async function generateBillAndStoreInFirebase() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://eb-bill.streamlit.app/');
    
    // Wait for the button to be visible with a longer timeout
    await page.waitForSelector('#generate-bill-button', { timeout: 60000 });

    // Click on the button to generate the bill
    await page.click('#generate-bill-button');

    // Extract bill details from the page
    const name = await page.$eval('#name', element => element.innerText);
    const email = await page.$eval('#email', element => element.innerText);
    const bill = await page.$eval('#bill', element => element.innerText);

    // Store bill details in Firebase
    const database = firebase.database();
    const testRef = database.ref('Test');
    const newBillRef = testRef.push();
    newBillRef.set({
      Name: name,
      Email: email,
      Bill: bill
    });

    await browser.close();
    console.log('Bill generated and stored successfully.');
  } catch (error) {
    console.error('Error generating and storing bill:', error);
  }
}

generateBillAndStoreInFirebase();
