import React from 'react'
import img from '/images/Product-hunt-button.png'

const Section2 = () => {
  return (
    <div className='text-center p-6'>
      <button
        className="w-52 h-14 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${img})` }}
        aria-label="Product Hunt Button"
      >
        <span className="sr-only">Product Hunt</span>
      </button>
    </div>
  )
}

export default Section2
