import LoginForm from "../loginForm/loginForm";
import { useNavigate } from "react-router-dom";
import "./loginPage.css"

function LoginPage(props) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Make API call to authenticate user's credentials
    // If the credentials are valid, set the isLoggedIn state to true
    // and navigate to the profile page
    props.onLoginSuccess();
    navigate("/profile");
  };

  return (
    <div className="login-page">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
