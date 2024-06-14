// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import BoardPage from './pages/Board/Board';
// import Calendar from './pages/Calendar/Calendar';
// import Dashboard from './pages/Dashboard/Dashboard';
// import DataGrid from './pages/DataGrid/DataGrid';
// import Login from './Login/Login';

// const App = () => {
//   return (
//     <div id="dashboard">
//       <BrowserRouter>
//       <Routes>
//          <Route path="/" element={<Login/>}/>
//          <Route path="layout" element={<Layout/>}>
	    
//           <Route path="dashboard" element={<Dashboard/>}/>
//           <Route path="calendar" element={<Calendar/>}/>
//           <Route path="board" element={<BoardPage/>}/>
//           <Route path="users" element={<DataGrid/>}/>
          
//         </Route>

//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;


// //yarn run dev



// Function to handle button click event
function handleClick() {
  // Select the element with id="output"
  let outputElement = document.getElementById('output');

  // Update the text content of the output element
  outputElement.textContent = 'Button clicked!';
}

// Add event listener to the button when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select the button element
  let button = document.getElementById('click-button');

  // Add a click event listener to the button
  button.addEventListener('click', handleClick);
});
