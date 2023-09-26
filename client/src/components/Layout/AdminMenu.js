import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
    <div className="text-center">
        <h1>Admin Panel</h1>
        <ul className="list-group">
            <NavLink to="/dashboard/admin/create-category" className="list-group-item" aria-current="true">Create-Category</NavLink>
            <NavLink  to="/dashboard/admin/create-product" className="list-group-item">Create Product</NavLink>
            <NavLink to="/dashboard/admin/users" className="list-group-item">Users</NavLink>
           
        </ul>
    </div>

    </>
  )
}

export default AdminMenu