
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
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard"
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import UpdateProduct from "./pages/Admin/UpdateProducts";
import Products from "./pages/Admin/Products";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CartPage from "./pages/CartPage";



function App() {
  return (
    < >
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/product/:slug" element={<ProductDetails/>}/>
          <Route path="/categories" element={<Categories/>} />
          
          
            <Route path="/dashboard" element={< PrivateRoute/>}>
                <Route path="user" element={<Dashboard />} />
                <Route path="user/orders" element={<Orders />} />
                <Route path="user/profile" element={<Profile />} />
            </Route>

            <Route path="/dashboard" element={<AdminRoute/>}>
                <Route path="admin" element={<AdminDashboard/>}/>
                <Route path="/dashboard/admin/create-category" element={<CreateCategory/>}/>
                <Route path="/dashboard/admin/create-product" element={<CreateProduct/>}/>
                <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
                <Route path="admin/products" element={<Products/>}/>
                <Route path="/dashboard/admin/users" element={<Users/>}/>
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
