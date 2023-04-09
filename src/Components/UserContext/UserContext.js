import React from "react";

const UserContext = React.createContext({
  token: null,
  setToken: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default UserContext;
