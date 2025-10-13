import React, { useState } from 'react'
import Card from './Card'

const Navbar = () => {
    const [size, setSize] = useState(250)
  return (
    <div>
      <aside 
      style={{width: size}}
       className='fixed top-0 left-0 py-4 h-full bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-600 text-white'>
       <nav className='flex justify-start items-center p-5'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
       </nav>
      </aside>
        <section
        style={{marginLeft: size}}
        >
            <Card/>
        </section>
    </div>
  )
}

export default Navbar
