import React from 'react'
import Stepper from './Stepper/Stepper'
import PropertyDetails from './PropertyDetails/PropertyDetails'

const ListingPage = () => {
  return (
    <div>
      <div>
        {/* <div className='flex gap-6'>
        </div> */}
        <div>
          <Stepper/>
        </div>
        <PropertyDetails/>
      </div>
    </div>
  )
}

export default ListingPage
