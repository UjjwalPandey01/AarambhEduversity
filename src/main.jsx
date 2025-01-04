

// import React, { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";

// import App2 from "./App2.jsx";
// import AuthContext from "./auth/context";

// const App = () => {
//   const [user, setUser] = useState();
// console.log(user)
//   const restoreUser = async () => {
//     const user = await sessionStorage.getItem("token");
//     if (user) setUser(jwtDecode(user));
//   };

//   useEffect(() => {
//     restoreUser();
//   }, []);
//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <App2 />
//     </AuthContext.Provider>
//   );
// };

// export default App;



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App2 from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
      <App2 />

  </StrictMode>
);
