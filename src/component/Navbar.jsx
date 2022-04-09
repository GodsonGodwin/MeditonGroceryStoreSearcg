import React from 'react'

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <div className= 'brandName'>
        <img src= {process.env.PUBLIC_URL + '/assets/mediton.png'} alt='Brand Logo' />
        <h1>Mediton Grocery Store Search</h1>
        </div>

        <p><i>Search through our store for available product before Check-in...</i></p>

    </div>
  )
}

export default Navbar