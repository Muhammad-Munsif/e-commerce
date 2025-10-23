import React from 'react'
import Order from '../Order'

const Orders = ({order, orderNumber}) => {
  return (
    <div className='container mx-auto mt-40 px-4 md:px-16 lg:px-8 py-4 flex flex-col md:flex-row space-x-2'>
        <Order />
    </div>
  )
}

export default Orders
