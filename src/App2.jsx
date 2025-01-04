
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import AppRouter from "./AppRouter.jsx";
import AuthContext from "./auth/context";

const App = () => {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await sessionStorage.getItem("token");
    if (user) setUser(jwtDecode(user));
  };

  useEffect(() => {
    restoreUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;

