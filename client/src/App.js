
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Policy from "./pages/Policy"
import Pagenotfound from "./pages/Pagenotfound"
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


function App() {
  return (
    < >
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/*" element={< Pagenotfound/>} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/register" element={<RegisterForm/>} />
      </Routes>
      
      
    </>
  );
}

export default App;
