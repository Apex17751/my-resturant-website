import React from 'react'
import Burgerbg from './burger_sandwich_PNG4135 2.png'

const News = () => {
  return (
    <div className='pt-20' id='news'>
        <div className='bg-black lg:h-80 mx-10 items-center justify-between flex rounded-3xl'>
            <div className='lg:flex xs:block items-center justify-center'>
            <div>
                <img src={Burgerbg} alt="" />
            </div>
            <div className='text-white lg:w-1/2 relative lg:ml-20 px-5 xs:text-center lg:text-left'id='sub'>
                <h1 className='font-bold text-xl pb-3'>Subcribe To Our Newsletter</h1>
                <p className='lg:pr-32 xs:px-10 lg:px-0  pb-4'>Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</p>
            <div className='items-center xs:block lg:flex'id='sub-btn'>
            <input type="email" placeholder='Type your email...' className='rounded-xl relative pl-5 pr-8  outline-none py-5 text-black text-sm ' id='opaque' />
            <button type='button' className='bg-orange-400 px-5 py-3 rounded-xl lg:absolute lg:left-72 xs:mb-14 lg:mb-0' id='btnnc'>SUBSCRIBE</button>
            </div>
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default News
