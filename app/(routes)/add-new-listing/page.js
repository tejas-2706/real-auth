import GoogleAddressSearch from '@/app/component/GoogleAddressSearch'
import React from 'react'
const AddNewListing = () => {
  return (
      <div className='flex items-center justify-center'>
        <h2 className='font-bold'>Add New Listing</h2>
        <div className='' >
        <h2>Enter Address which you want</h2>
        
        <GoogleAddressSearch/>
        </div>
    </div>
  )
}

export default AddNewListing
