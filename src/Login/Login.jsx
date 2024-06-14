// import "./Login.css";
// import infinity from "../assets/infinity.png";
// import { useState } from "react";
// import warning from "../assets/warning.png";
// import { auth } from '../data/firebase';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [isNewUser, setIsNewUser] = useState(true);

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [error, setError] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setError(false);

//     try {
//       let userCredential;
//       if (isNewUser) {
//         userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         userCredential = await signInWithEmailAndPassword(auth, email, password);
//       }

//       // Accessing user ID
//       const userId = userCredential.user.uid;
//       console.log("User ID:", userId);

//       // Authentication successful, navigate to the dashboard
//       navigate('/layout/dashboard');
//     } catch (error) {
//       setError(true);
//       setErrorMsg(error.message);
//     }
//   };

//   return (
//     <div className="login-page">
//       <header>
//         <span>
//           from <i>Infinity Studios</i>
//         </span>
//       </header>

//       <img className="logo" src={infinity} alt="" />

//       <h2 className="title">
//         Sub-Min <br />
//         Dashboard
//       </h2>

//       <form onSubmit={submit}>
//         {isNewUser && (
//           <div className="username">
//             <input
//               onChange={(e) => setUsername(e.target.value)}
//               type="username"
//               id="username"
//               required
//             />
//             <label htmlFor="username">username</label>
//           </div>
//         )}

//         <div className="email">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="email"
//             required
//           />
//           <label htmlFor="email">email</label>
//         </div>

//         <div className="password">
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             id="password"
//             required
//           />
//           <label htmlFor="password">password</label>
//         </div>

//         {error && <img src={warning} alt="" className="status" />}

//         {error && <span className="error">Process Failed</span>}
//         {error && <span className="error">{errorMsg}</span>}

//         <button type="submit">{isNewUser ? "Sign Up" : "Log In"}</button>

//         {isNewUser ? (
//           <span className="user-stat">
//             Already have an account?{" "}
//             <b
//               onClick={() => {
//                 setIsNewUser(false);
//                 setError(false);
//               }}
//             >
//               Log In
//             </b>
//           </span>
//         ) : (
//           <span className="user-stat">
//             Don't have an account?{" "}
//             <b
//               onClick={() => {
//                 setIsNewUser(true);
//                 setError(false);
//               }}
//             >
//               Sign Up
//             </b>
//           </span>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;

// import "./Login.css";
// import infinity from "../assets/infinity.png";
// import { useState } from "react";
// import warning from "../assets/warning.png";
// import { auth, db } from '../data/firebase'; // Import Firebase database module
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [isNewUser, setIsNewUser] = useState(true);

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [error, setError] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setError(false);

//     try {
//       let userCredential;
//       if (isNewUser) {
//         // Create new user
//         userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         // Sign in existing user
//         userCredential = await signInWithEmailAndPassword(auth, email, password);
//       }

//       // Accessing user ID
//       const userId = userCredential.user.uid;
//       console.log("User ID:", userId);

//       // Add user details to Firebase Officer table
//       await addUserToOfficer(userId, username, email);

//       // Authentication successful, navigate to the dashboard
//       navigate('/layout/dashboard');
//     } catch (error) {
//       setError(true);
//       setErrorMsg(error.message);
//     }
//   };

//   // Function to add user details to Firebase Officer table
//   const addUserToOfficer = async (userId, username, email) => {
//     try {
//       await db.collection("Officer").doc(userId).set({
//         username: username,
//         email: email,
//         Status: "Available"
//       });
//       console.log("User added to Officer table");
//     } catch (error) {
//       console.error("Error adding user to Officer table: ", error);
//     }
//   };

//   return (
//     <div className="login-page">
//       <header>
//         <span>
//           from <i>Infinity Studios</i>
//         </span>
//       </header>

//       <img className="logo" src={infinity} alt="" />

//       <h2 className="title">
//         Sub-Min <br />
//         Dashboard
//       </h2>

//       <form onSubmit={submit}>
//         {isNewUser && (
//           <div className="username">
//             <input
//               onChange={(e) => setUsername(e.target.value)}
//               type="text"
//               id="username"
//               required
//             />
//             <label htmlFor="username">Username</label>
//           </div>
//         )}

//         <div className="email">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="email"
//             required
//           />
//           <label htmlFor="email">Email</label>
//         </div>

//         <div className="password">
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             id="password"
//             required
//           />
//           <label htmlFor="password">Password</label>
//         </div>

//         {error && <img src={warning} alt="" className="status" />}

//         {error && <span className="error">Process Failed</span>}
//         {error && <span className="error">{errorMsg}</span>}

//         <button type="submit">{isNewUser ? "Sign Up" : "Log In"}</button>

//         {isNewUser ? (
//           <span className="user-stat">
//             Already have an account?{" "}
//             <b
//               onClick={() => {
//                 setIsNewUser(false);
//                 setError(false);
//               }}
//             >
//               Log In
//             </b>
//           </span>
//         ) : (
//           <span className="user-stat">
//             Don't have an account?{" "}
//             <b
//               onClick={() => {
//                 setIsNewUser(true);
//                 setError(false);
//               }}
//             >
//               Sign Up
//             </b>
//           </span>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;


// import "./Login.css";
// import { useState } from "react";
// import warning from "../assets/warning.png";
// import { auth, db } from '../data/firebase'; // Import Firebase authentication and database modules
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [isNewUser, setIsNewUser] = useState(true);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setError(false);

//     try {
//       let userCredential;
//       if (isNewUser) {
//         userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         userCredential = await signInWithEmailAndPassword(auth, email, password);
//       }

//       const userId = userCredential.user.uid;
//       console.log("User ID:", userId);

//       await addUserToOfficer(userId, username, email); 

//       navigate('/layout/dashboard');
//     } catch (error) {
//       setError(true);
//       setErrorMsg(error.message);
//     }
//   };

//   const addUserToOfficer = async (userId, username, email) => {
//     try {
//       await db.collection("Location").doc(userId).set({
//         username: username,
//         email: email,
//         Status: "Available"
//       });
//       console.log("User added to Officer table");
//     } catch (error) {
//       console.error("Error adding user to Officer table: ", error);
//     }
//   };

//   return (
//     <div className="login-page">
//       <header>
//         <span>
//           from <i>Infinity Studios</i>
//         </span>
//       </header>

//       {/* Logo and title */}
//       <img className="logo" alt="" />
//       <h2 className="title">
//         Sub-Min <br />
//         Dashboard
//       </h2>

//       {/* Login form */}
//       <form onSubmit={submit}>
//         {isNewUser && (
//           <div className="username">
//             <input
//               onChange={(e) => setUsername(e.target.value)}
//               type="text"
//               id="username"
//               required
//             />
//             <label htmlFor="username">Username</label>
//           </div>
//         )}

//         <div className="email">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="email"
//             required
//           />
//           <label htmlFor="email">Email</label>
//         </div>

//         <div className="password">
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             id="password"
//             required
//           />
//           <label htmlFor="password">Password</label>
//         </div>

//         {error && <img src={warning} alt="" className="status" />}
//         {error && <span className="error">Process Failed</span>}
//         {error && <span className="error">{errorMsg}</span>}

//         <button type="submit">{isNewUser ? "Sign Up" : "Log In"}</button>

//         {isNewUser ? (
//           <span className="user-stat">
//             Already have an account?{" "}
//             <b
//               onClick={() => {
//                 setIsNewUser(false);
//                 setError(false);
//               }}
//             >
//               Log In
//             </b>
//           </span>
//         ) : (
//           <span className="user-stat">
//             Don't have an account?{" "}
//             <b
//               onClick={() => {
//                 setIsNewUser(true);
//                 setError(false);
//               }}
//             >
//               Sign Up
//             </b>
//           </span>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;

//==============================================================================================================================
// import "./Login.css";
// import { useState } from "react";
// import warning from "../assets/warning.png";
// import { auth, db } from '../data/firebase'; // Import Firebase authentication and database modules
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { collection, doc, setDoc } from "firebase/firestore"; // Import Firestore functions
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [isNewUser, setIsNewUser] = useState(true);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setError(false);

//     try {
//       if (isNewUser) {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const userId = userCredential.user.uid; // Get the user ID

//         // Store user info in Firestore database
//         await setDoc(doc(db, "Officer", userId), {
//           username: username,
//           email: email,
//           Status: "Available"
//         });

//         navigate('/layout/dashboard');
//       } else {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         navigate('/layout/dashboard');
//       }
//     } catch (error) {
//       setError(true);
//       setErrorMsg(error.message);
//     }
//   };

//   return (
//     <div className="login-page">
//       <header>
//         <span>
//           from <i>Infinity Studios</i>
//         </span>
//       </header>

//       {/* Logo and title */}
//       <img className="logo" alt="" />
//       <h2 className="title">
//         Sub-Min <br />
//         Dashboard
//       </h2>

//       {/* Login form */}
//       <form onSubmit={submit}>
//         {isNewUser && (
//           <div className="username">
//             <input
//               onChange={(e) => setUsername(e.target.value)}
//               type="text"
//               id="username"
//               required
//             />
//             <label htmlFor="username">Username</label>
//           </div>
//         )}

//         <div className="email">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="email"
//             required
//           />
//           <label htmlFor="email">Email</label>
//         </div>

//         <div className="password">
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             id="password"
//             required
//           />
//           <label htmlFor="password">Password</label>
//         </div>

//         {error && <img src={warning} alt="" className="status" />}
//         {error && <span className="error">Process Failed</span>}
//         {error && <span className="error">{errorMsg}</span>}

//         <button type="submit">{isNewUser ? "Sign Up" : "Log In"}</button>

//         {isNewUser ? (
//           <span className="user-stat">
//             Already have an account?{" "}
//             <b
//               onClick={() => {
//                 setIsNewUser(false);
//                 setError(false);
//               }}
//             >
//               Log In
//             </b>
//           </span>
//         ) : (
//           <span className="user-stat">
//             Don't have an account?{" "}
//             <b
//               onClick={() => {
//                 setIsNewUser(true);
//                 setError(false);
//               }}
//             >
//               Sign Up
//             </b>
//           </span>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;

import "./Login.css";
import { useState } from "react";
import warning from "../assets/warning.png";
import { auth, db } from '../data/firebase'; // Import Firebase authentication and database modules
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore"; // Import Firestore functions
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isNewUser, setIsNewUser] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      if (isNewUser) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid; // Get the user ID

        // Store user info in Firestore database
        await setDoc(doc(db, "Officer", userId), {
          username: username,
          email: email,
          Status: "Available"
        });

        navigate('/layout/dashboard');
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid; // Get the user ID

        // Update status to "Available" in Firestore Officer table upon login
        await updateDoc(doc(db, "Officer", userId), {
          Status: "Available"
        });

        navigate('/layout/dashboard');
      }
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="login-page">
      <header>
        <span>
          from <i>GR BOT</i>
        </span>
      </header>

      {/* Logo and title */}
      <img className="logo" alt="" />
      <h2 className="title">
        TNEB <br />
        Dashboard
      </h2>

      {/* Login form */}
      <form onSubmit={submit}>
        {isNewUser && (
          <div className="username">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              required
            />
            <label htmlFor="username">Username</label>
          </div>
        )}

        <div className="email">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="password">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        {error && <img src={warning} alt="" className="status" />}
        {error && <span className="error">Process Failed</span>}
        {error && <span className="error">{errorMsg}</span>}

        <button type="submit">{isNewUser ? "Sign Up" : "Log In"}</button>

        {isNewUser ? (
          <span className="user-stat">
            Already have an account?{" "}
            <b
              onClick={() => {
                setIsNewUser(false);
                setError(false);
              }}
            >
              Log In
            </b>
          </span>
        ) : (
          <span className="user-stat">
            Don't have an account?{" "}
            <b
              onClick={() => {
                setIsNewUser(true);
                setError(false);
              }}
            >
              Sign Up
            </b>
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
