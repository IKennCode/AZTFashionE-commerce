import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
    <div className="text-center">
        <h1>Admin Panel</h1>
        <ul className="list-group">
            <NavLink to="/dashboard/admin/create-category" className="list-group-item" aria-current="true">Create New Category</NavLink>
            <NavLink  to="/dashboard/admin/create-product" className="list-group-item">Create New Product</NavLink>
           
           
        </ul>
    </div>

    </>
  )
}

export default AdminMenu