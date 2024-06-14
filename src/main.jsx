// import React from 'react'
// // import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';

// import App from './App'
// import './index.css'
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
// )


import React from 'react';
import { createRoot } from 'react-dom';

import App from './App';
import './style.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// yarn run dev
