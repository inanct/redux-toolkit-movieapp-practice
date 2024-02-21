import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLeft from './HeaderLeft'

const Header = () => {
  return (
    
     <div className=" flex justify-between items-center p-6  bg-indigo-950 text-white ">
       <Link to="/" className='text-2xl font-bold  '>MoviesApp</Link>
       <HeaderLeft />
    </div>
    
   
  )
}

export default Header