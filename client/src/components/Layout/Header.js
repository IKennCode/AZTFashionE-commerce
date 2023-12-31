import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {GiShoppingCart} from 'react-icons/gi'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import SearchInput from '../Form/SearchInput'
import useCategory from '../../Hooks/useCategory'
import { useCart } from '../../context/cart'
import { Badge } from "antd";


// this will handle the logout session 
// in line If the user's role is 1, the URL will be /dashboard/admin.
// If the user's role is anything other than 1, the URL will be /dashboard/user.
// This dynamic URL generation allows the application to route users to different dashboard views based on their roles.
//this will also play an important role of navigation through the web applicatri
const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  
  const handleLogout = () => {
    setAuth({
      ...auth, user:null, token: ''
    })
    localStorage.removeItem('auth');
    toast.success("Logout Successfully");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand text-uppercase p-4">< GiShoppingCart/>AZT Fashion</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
        <li className="nav-item">
          <NavLink to="/home" className="nav-link active" aria-current="page">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/about" className="nav-link active" aria-current="page">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contact" className="nav-link active" aria-current="page">Contact</NavLink>
        </li>

        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to={"/categories"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </Link>

            <ul className="dropdown-menu">
              <li><Link  to={"/categories"}  className="dropdown-item" href="#">All categories</Link ></li>
              {categories?.map((c) => (
              <li><Link  className="dropdown-item" to={`/category/${c.slug}`}> {c.name}</Link ></li>
              ))};
              <li><hr className="dropdown-divider" /></li>
                
            </ul>
        </li>

        
     

        {
          !auth.user ? 
          (<> <NavLink to="/register" className=" btn-outline-dark nav-link" >Register</NavLink>
                <NavLink to="/login" className="nav-link">Login </NavLink></>)
          
            : (<> <li className="nav-item dropdown">
                     <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {auth?.user?.name}
                  </NavLink>
            <ul className="dropdown-menu">
              
              <li><NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item-dashboard" >Dashboard</NavLink ></li>
                  <li><hr className="dropdown-divider" /></li>
                  <NavLink onClick={handleLogout} to="/login" className="dropdown-item-logout">Logout</NavLink>
            </ul>
                </li>

           </>)
        }

    
      </ul>

      <SearchInput />

      <li className="d-flex m-4">
      <Badge count={cart?.length} showZero>
          <NavLink to="/cart" className="btn btn-outline-secondary" >Cart</NavLink>
      </Badge>
    </li>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header;