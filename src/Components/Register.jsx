import React from 'react'

const Register = () => {
   return (
     <div>
       <h2 className='text-2xl font-bold mb-4'>Sign UP</h2>
       <form>
             <div className='mb-4'>
                 <label className="block text-gray-700">Name</label>
                 <input type="name" placeholder='Enter your name' className='w-full py-2 px-3 border-1 border-gray-200 rounded' />
             </div>
             <div className='mb-4'>
                 <label className="block text-gray-700">Email</label>
                 <input type="email" placeholder='Enter your email' className='w-full py-2 px-3 border-1 border-gray-200 rounded' />
             </div>
             <div className='mb-4'>
                 <label className="block text-gray-700">Password</label>
                 <input type="password" placeholder='Enter your Password' className='w-full py-2 px-3 border-1 border-gray-200 rounded'/>
             </div>
            
             <div className='mb-4'>
                 <button type='submit' className='w-full bg-red-600 py-2 text-white'>Sign Up</button>
             </div>
       </form>
       <div className='text-center'>
         <span className='text-gray-700'>Already have an Account?</span>
         <button className='text-red-800'>Login</button>
       </div>
     </div>
   )
}

export default Register
