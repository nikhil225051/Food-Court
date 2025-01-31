import React from 'react'
import RestaurentCard from '../Restaurent/RestaurentCard'

export const Favorites = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap gap-3 justify-center'>

        {[1,1,1,1].map((item=><RestaurentCard/>))}

      </div>
    </div>
  )
}
