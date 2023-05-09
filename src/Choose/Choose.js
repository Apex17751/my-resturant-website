import React from 'react'
import GroupOne from './Group 20.png'
import GroupTwo from './Group 21.png'
import GroupThree from './Group 22.png'

const Choose = () => {
  return (
    <div className='lg:flex  items-center justify-between pt-32 pb-32 text-center lg:mx-20 xs:mx-10 relative' id='choose'>
        <div className='bg-grey-100 shadow-lg  rounded-lg' id='small'>
            <img src={GroupOne} alt="" className='mx-auto' />
            <h1 className='font-bold text-xl pb-3 pt-3'>Quality Foods</h1>
            <p className='leading-7 xs:px-5 lg:px-10 pb-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, exercitationem. Veniam fugit ad id enim!</p>
        </div>
        <div className='bg-grey-100 shadow-lg rounded-lg ' id='small'>
            <img src={GroupTwo} alt=""  className='mx-auto'/>
            <h1 className='font-bold text-xl pb-3 pt-3'>Healthy Foods</h1>
            <p className='leading-7 xs:px-5 lg:px-10 pb-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, exercitationem. Veniam fugit ad id enim!</p>
        </div>
        <div className='bg-grey-100 shadow-lg rounded-lg' id='small'>
            <img src={GroupThree} alt="" className='mx-auto'/>
            <h1 className='font-bold text-xl pb-3 pt-3'>Fast Delivery</h1>
            <p className='leading-7 xs:px-5 lg:px-10 pb-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, exercitationem. Veniam fugit ad id enim!</p>
        </div>
      
    </div>
  )
}

export default Choose
