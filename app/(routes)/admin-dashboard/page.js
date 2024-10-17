"use client"
import React from 'react'
import ViewListing from './viewListing'
const AdminDashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-1'>
      <div>
      <ViewListing type='Sell'/>
      </div>
    </div>
  )
}

export default AdminDashboard
