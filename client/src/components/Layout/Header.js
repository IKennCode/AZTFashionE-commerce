import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {GiShoppingCart} from 'react-icons/gi'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'

const Header = () => {
  const [auth, setAuth] = useAuth();
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
    <Link to="/home" className="navbar-brand text-uppercase p-4">< GiShoppingCart/>AZT Clothing</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to="/category" className="nav-link" href="#">Category</NavLink>
        </li>

        {
          !auth.user ? 
          (<><NavLink to="/register" className=" btn-outline-dark nav-link" href="#">Register</NavLink><NavLink to="/login" className="nav-link" href="#">Login</NavLink></>)
          
          : (<><NavLink onClick={handleLogout} to="/login" className="nav-link" href="#">Logout</NavLink></>)
        }

    
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <li className="d-flex m-4">
      <NavLink to="/cart" className="btn btn-outline-secondary" href="#">Cart(0)</NavLink>
    </li>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header;