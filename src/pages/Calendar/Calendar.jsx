// import React, { useState } from 'react';
// import axios from 'axios';

// function FileUpload() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert('Please select a file.');
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append('file', file);

//       // Make POST request to upload endpoint
//       await axios.post('http://localhost:3000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert('File uploaded successfully and push notification sent.');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('File uploaded successfully and push notification sent.');
//     }
//   };

//   return (
//     <div>
//       <h2>File Upload</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default FileUpload;

//=========================================================================================================================================================================

// import React, { useState } from 'react';
// import axios from 'axios';

// function Calendar() {
//   const [file, setFile] = useState(null);
//   const [downloadURL, setDownloadURL] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     try {
//       const formData = new FormData();
//       formData.append('file', file);

//       const response = await axios.post('http://localhost:3000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Extract the download URL from the response data
//       const { downloadURL } = response.data;
//       setDownloadURL(downloadURL);
//       alert('File uploaded successfully and push notification sent.');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('File uploaded successfully and push notification sent.');
//     }
//   };

//   return (
//     <div className="Calendar">
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default Calendar;

//=========================================================================================================================================================================


// // React Component
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Calendar.css';

// function Calendar() {
//   const [file, setFile] = useState(null);
//   const [downloadURL, setDownloadURL] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     try {
//       const formData = new FormData();
//       formData.append('file', file);

//       const response = await axios.post('http://localhost:3000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Extract the download URL from the response data
//       const { downloadURL } = response.data;
//       setDownloadURL(downloadURL);
//       alert('File uploaded successfully and push notification sent.');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('Error uploading file:', error.message);
//     }
//   };

//   const handleMapButtonClick = () => {
//     // Open map.html in a new window or tab
//     window.open('http://localhost:3000/map', '_blank');
//   };

//   const handleSendBill = () => {
//     // Open the link when the "Send Bill" button is pressed
//     window.open('https://eb-bill.streamlit.app/', '_blank');
//   };

//   return (
//     <div className="Calendar">
//       {/* Upload section */}
//       <div className="section">
//         {/* Label for file input */}
//         <label htmlFor="fileInput" className="custom-file-upload">
//           Upload
//           {/* Actual file input */}
//           <input id="fileInput" type="file" onChange={handleFileChange} />
//         </label>
//         <button className='upload-btn' onClick={handleUpload}>Upload</button>
//       </div>
//       {/* Map section */}
//       <div className="section">
//         <button onClick={handleMapButtonClick} className='map'>Map</button>
//       </div>
//       {/* Bill section */}
//       <div className="section">
        
//       </div>
//       {/* "Send Bill" button */}
//       <button onClick={handleSendBill} className='bill'>Send Bill</button>
//     </div>
//   );
// }

// export default Calendar;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Calendar.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Calendar() {
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState('');
  const [billData, setBillData] = useState([]);

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyB_9LJaDX0EmvqfEeYJGExdHRqQN5zo_FU",
    authDomain: "kavi-597ca.firebaseapp.com",
    projectId: "kavi-597ca",
    storageBucket: "kavi-597ca.appspot.com",
    messagingSenderId: "609330279022",
    appId: "1:609330279022:web:647d3f879d5c0db5446c7f"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const fetchBillData = async () => {
    try {
      const snapshot = await firebase.firestore().collection('Test').get();
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().Name,
        email: doc.data().Email,
        bill: doc.data().bill,
      }));
      setBillData(data);
    } catch (error) {
      console.error('Error fetching bill data:', error);
    }
  };

  useEffect(() => {
    fetchBillData();
    
    const interval = setInterval(fetchBillData, 5 * 60 * 1000); // Periodically fetch data every 5 minutes
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Real-time listener for Firestore changes
    const unsubscribe = firebase.firestore().collection('Test').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'modified') {
          fetchBillData(); // Fetch updated bill data
        }
      });
    });

    return () => unsubscribe();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Extract the download URL from the response data
      const { downloadURL } = response.data;
      setDownloadURL(downloadURL);
      alert('File uploaded successfully and push notification sent.');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file:', error.message);
    }
  };

  const handleMapButtonClick = () => {
    window.open('http://localhost:3000/map', '_blank');
  };

  const handleSendBill = async () => {
    try {
      window.open('https://eb-bill.streamlit.app/', '_blank');
      const emails = billData.map(item => item.email);
      const subject = 'Bill Details';
      const message = 'Please find the bill details below:\n\n' + billData.map(item => `Name: ${item.name}, Email: ${item.email}, Bill: ${item.bill}`).join('\n');
      await axios.post('http://localhost:3000/send-emails', { emails, subject, message });
    } catch (error) {
      console.error('Error sending bill and emails:', error);
      alert('Error sending bill and emails:', error.message);
    }
  };

  return (
    <div className="Calendar">
      <div className="section">
        <label htmlFor="fileInput" className="custom-file-upload">
          Upload
          <input id="fileInput" type="file" onChange={handleFileChange} />
        </label>
        <button className='upload-btn' onClick={handleUpload}>Upload</button>
      </div>
      <div className="section">
        <button onClick={handleMapButtonClick} className='map'>Map</button>
      </div>
      <div className="section">
        <h2>Bill Data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Bill</th>
            </tr>
          </thead>
          <tbody>
            {billData.map((bill, index) => (
              <tr key={index}>
                <td>{bill.name}</td>
                <td>{bill.email}</td>
                <td>{bill.bill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="section">
        <button onClick={handleSendBill} className='bill'>Send Bill</button>
      </div>
    </div>
  );
}

export default Calendar;
