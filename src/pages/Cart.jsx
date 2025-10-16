import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import emptyCart from '../assets/emptyCart.jpg'
import { FaTrashAlt } from 'react-icons/fa'
const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [address, setAddress] = useState('mian street, 12')
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {
        cart.products.length > 0 ? 
        <div className=''>
            <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
            <div className='flex  md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                <div className='flex items-center justify-center font-bold border-b text-xs'>
                    <p>PRODUCTS</p>
                    <div className=' flex items-center justify-between space-x-8'>
                        <p>PRICE</p>
                        <p>QUANTITY</p>
                        <p>SUBTOTAL</p>
                        <p>REMOVE</p>
                    </div>
                  </div>  
                </div>
                <div>
                    {
                        cart.products.map((product) => (
                            <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                                <div className='md:flex items-center space-x-4'>
                                    <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                    <div className='flex-1 ml-4'>
                                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                                    </div>
                                </div>
                                <div className='flex space-x-12 items-center'>
                                    <p>${product.price}</p>
                                    <div className='flex items-center justify-center border text-xl'>
                                        <button className=' px-1.5 font-bold border-r'>-</button>
                                        <p className='px-2'>{product.quantity}</p>
                                        <button className='px-1 border-l'>+</button>
                                    </div>
                                    <p>{(product.quantity * product.price).toFixed(2)}</p>
                                    <button className='text-red-500 hover:text-red-700'>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-sm font-bold mb-5'>CART TOTAL</h3>
                    <div className='flex justify-between mb-5 border-b pb-1'>
                        <span className='text-sm'>Total item</span>
                        <span>{cart.totalQuantity}</span>
                    </div>
                    <div className='mb-4 border-b pb-2'>
                        <p>Shipping :</p>
                        <p className='ml-2'>Shipping to :
                        <span className='text-sm font-bold'>{address}</span>
                        </p>
                        <button className='text-blue-500 hover:underline mt-1 ml-2'>change address</button>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <span>Total Price</span>
                        <span>{cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <button className='w-full bg-red-600 hover:bg-red-800 text-white py-2'>Proced to checkout</button>
                </div>
            </div>
        </div>
        : <div className='flex justify-center items-center'>
            <img src={emptyCart} alt="" className='h-96' />
        </div>
      }
    </div>
  )
}

export default Cart;
