// import moment from "moment/moment";
// import css from "./Layout.module.css";
// import { BiSearch } from "react-icons/bi";
// import Sidebar from "../Sidebar/Sidebar";
// import { Navigate, Outlet, useLocation } from "react-router-dom";

// const Layout = () => {

//   const { pathname } = useLocation()


//   return (
//     <div className={css.container}>
//       <Sidebar />


//       {/* making the dashboard as the default route */}
//       {pathname === "/" && <Navigate to="/dashboard" />}


//       <div className={css.dashboard}>
//         <div className={css.topBaseGradients}>
//           <div className="gradient-red"></div>
//           <div className="gradient-orange"></div>
//           <div className="gradient-blue"></div>
//         </div>

//         <div className={css.header}>

//           <span>{moment().format("dddd, Do MMM YYYY")}</span>

//           <div className={css.searchBar}>
//             <BiSearch size={20} />
//             <input type="text" placeholder="Search" />
//           </div>

//           <div className={css.profile}>
//             <img src="./profile.png" alt="person image" />
//             <div className={css.details}>
//               <span>Kaviyarasu S</span>
//               <span>kaviyarasu@gmail.com</span>
//             </div>
//           </div>


//         </div>


//         <div className={css.content}>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
//==============================================================================================
//button correct ah irukku 

// import React from "react";
// import moment from "moment";
// import css from "./Layout.module.css";
// import { BiSearch } from "react-icons/bi";
// import Sidebar from "../Sidebar/Sidebar";
// import { Navigate, Outlet, useLocation } from "react-router-dom";

// const Layout = () => {
//   const { pathname } = useLocation();

//   const handleLogout = () => {
//     // Implement your logout logic here
//     // For example:
//     // Clear authentication state and redirect to login page
//     console.log("Logout button clicked");
//   };

//   return (
//     <div className={css.container}>
//       <Sidebar />

//       {/* Making the dashboard as the default route */}
//       {pathname === "/" && <Navigate to="/dashboard" />}

//       <div className={css.dashboard}>
//         <div className={css.topBaseGradients}>
//           <div className="gradient-red"></div>
//           <div className="gradient-orange"></div>
//           <div className="gradient-blue"></div>
//         </div>

//         <div className={css.header}>
//           <span>{moment().format("dddd, Do MMM YYYY")}</span>

//           <div className={css.searchBar}>
//             <BiSearch size={20} />
//             <input type="text" placeholder="Search" />
//           </div>

//           <div className={css.profile}>
//             <img src="./profile.png" alt="person image" />
//             <div className={css.details}>
//               <span>Kaviyarasu S</span>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           </div>
//         </div>

//         <div className={css.content}>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

//===========================================================
//=============================================================
//Perfect Code

// import React from "react";
// import moment from "moment";
// import css from "./Layout.module.css";
// import { BiSearch } from "react-icons/bi";
// import Sidebar from "../Sidebar/Sidebar";
// import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { auth, db } from '../../data/firebase'; // Import Firebase authentication and database modules
// import { updateDoc, doc } from "firebase/firestore"; // Import Firestore functions

// const Layout = () => {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   const handleLogout = async () => {
//     try {
//       // Get the current user
//       const currentUser = auth.currentUser;

//       // Update status to "Unavailable" in Firebase Officer table
//       if (currentUser) {
//         await updateDoc(doc(db, "Officer", currentUser.uid), {
//           Status: "Unavailable"
//         });
//       }

//       // Sign out the user
//       await auth.signOut();

//       // Redirect to login page
//       navigate('/');
//     } catch (error) {
//       console.error("Logout error:", error.message);
//     }
//   };

//   return (
//     <div className={css.container}>
//       <Sidebar />

//       {/* Making the dashboard as the default route */}
//       {pathname === "/" && <Navigate to="/dashboard" />}

//       <div className={css.dashboard}>
//         <div className={css.topBaseGradients}>
//           <div className="gradient-red"></div>
//           <div className="gradient-orange"></div>
//           <div className="gradient-blue"></div>
//         </div>

//         <div className={css.header}>
//           <span>{moment().format("dddd, Do MMM YYYY")}</span>

//           <div className={css.searchBar}>
//             <BiSearch size={20} />
//             <input type="text" placeholder="Search" />
//           </div>

//           <div className={css.profile}>
//             <img src="./profile.png" alt="person image" />
//             <div className={css.details}>
//               <span>Kaviyarasu S</span>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           </div>
//         </div>

//         <div className={css.content}>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React, { useEffect, useState } from "react";
import moment from "moment";
import css from "./Layout.module.css";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { auth, db } from '../../data/firebase'; // Import Firebase authentication and database modules
import { updateDoc, doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import person from '../../assets/pf.png';
const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch the username when the component mounts
    const fetchUsername = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userDoc = await getDoc(doc(db, "Officer", currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUsername(userData.username);
          }
        }
      } catch (error) {
        console.error("Error fetching username:", error.message);
      }
    };

    fetchUsername();

    // Cleanup function
    return () => setUsername("");
  }, []);

  const handleLogout = async () => {
    try {
      // Get the current user
      const currentUser = auth.currentUser;

      // Update status to "Unavailable" in Firebase Officer table
      if (currentUser) {
        await updateDoc(doc(db, "Officer", currentUser.uid), {
          Status: "Unavailable"
        });
      }

      // Sign out the user
      await auth.signOut();

      // Redirect to login page
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className={css.container}>
      <Sidebar />

      {/* Making the dashboard as the default route */}
      {pathname === "/" && <Navigate to="/dashboard" />}

      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-blue"></div>
          <div className="gradient-blue"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span className={css.dates}>{moment().format("dddd, Do MMM YYYY")}</span>

          {/* <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div> */}

          <div className={css.profile}>
            <img src={person} alt="person image"  className={css.profilePhoto} />
            <div className={css.details}>
              <span >{username}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>

        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
