import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Reset from "./pages/resetpassword/ResetPassword";
import Forgot from "./pages/forgotpassword/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
