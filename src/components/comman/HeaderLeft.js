import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLeft = () => {
  return (
    <div className='flex justify-center items-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/about">About Us</Link>
    </div>
  )
}

export default HeaderLeft