import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Reset from './pages/resetpassword/ResetPassword';
import Forgot from './pages/forgotpassword/ForgotPassword';
import Dashboard from './pages/dashboard/Dashboard';
import { ProtectedRoute } from './components/auth/protected.route';
import auth from './components/auth/auth';
import customHistory from '../src/components/history/history';
import Archive from './pages/archive/Archive';
import Notes from './pages/notes/Notes';
import Trash from './pages/trash/Trash';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/resetpassword/:id" element={<Reset />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Route path="/notes" component={Notes} />
        <Route path="/archive" component={<Archive/>} />
        <Route path="/trash" component={Trash} /> */}
        {/* <Route path="/dashboard/*">. */}
        {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      </Routes>
    </Router>
  );
}

export default App;
