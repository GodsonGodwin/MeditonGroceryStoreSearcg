import React from 'react'

const Grocery = ({title, image}) => {
  return (
    <div className='cardWrapper'>
        <img 
       style={{
        height: '200px',
        width: '200px'
       }}
            src={image} alt="Products Image" />
        
        <h3 
        style={{
            fontSize:'20px',
            fontWeight: 'bold',
            color:'#4E5521',
            padding: '15px',
            }}>{title} </h3>
    </div>
  )
}

export default Grocery