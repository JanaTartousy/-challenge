import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navebar";
import Profile from "./pages/Profile/Profile";
import Protected from "./Components/Protected/Protected";
import Home from "./pages/Home/Home";
import LoginPage from "./Components/loginPage/loginPage";
import UserContext from "./Components/UserContext/UserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (token) => {
    setIsLoggedIn(true);
    localStorage.setItem("authToken", token);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authToken");
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
        <div>
          <Navbar />
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
            <Route
              path="/login"
              element={<LoginPage onLoginSuccess={handleLogin} />}
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
