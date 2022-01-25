import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Reset from "./pages/resetpassword/ResetPassword";
import Forgot from "./pages/forgotpassword/ForgotPassword";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<Forgot />} />
          <Route path="/resetpassword" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;
