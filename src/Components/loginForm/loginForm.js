import LoginButton from "./loginButton";
import axios from "axios";
import { useContext, useState } from "react";
import "./loginForm.css";
import UserContext from "../UserContext/UserContext";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { setToken, setIsLoggedIn } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to check password length
  function isValidPassword(password) {
    return password.length >= 6;
  }

  const handleLogin = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    if (!isValidPassword(password)) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }
    axios.defaults.headers.common["Accept"] = "application/json";

    axios
      .post(`http://localhost:8000/api/login`, { email, password })
      .then((response) => {
        const authToken = response.data.access_token;
        navigate("/profile");
        setToken(authToken);
        setIsLoggedIn(true);
        setErrorMessage("");
        // Show a success toast when login is successful
        toast.success("Login successful!", {
          position: "top-right"
        });
        // Set the 'auth-token' cookie with an expiration of 1 day
        Cookies.set("auth-token", authToken, { expires: 1 }); 
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid email or password");
        } else {
          setErrorMessage("An error occurred, please try again");
        }
        // Show an error toast when login fails
        toast.error(errorMessage, {
          position: "top-right"
        });
      });
  };

  return (
    <div className="login-container">

      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label htmlFor="email" className="login-input-labels">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder=" "
            required
          />
          <span className="label-name">Email</span>
        </label>

        <label htmlFor="password" className="login-input-labels">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder=" "
            required
          />
          <span className="label-name">Password</span>
        </label>

        <LoginButton />
      </form>
    </div>
  );
}

export default LoginForm;
