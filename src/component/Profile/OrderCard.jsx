import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img
            className='h-16 w-16'
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

         <div>
            <p>Pasta</p>
            <p>$299</p>
         </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'>competed</Button>
        </div>
       

    </Card>
  )
}
