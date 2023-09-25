
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Policy from "./pages/Policy"
import Pagenotfound from "./pages/Pagenotfound"
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";



function App() {
  return (
    < >
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/dashboard" element={< PrivateRoute/>}>
          <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/*" element={< Pagenotfound/>} />
      <Route path="/policy" element={<Policy/>} />
      </Routes>
    </>
  );
  
}

export default App;
