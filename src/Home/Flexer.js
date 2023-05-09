import React from 'react'
import Burger from './burger_sandwich_PNG4135 1.png'
import Pizza from './pizza-png-12 1.png'
import Junk from './Combo-Junk-Food-PNG-Image 2.png'
import Pure from './purepng 1.png'

const Flexer = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 items-center justify-center' id='slates'>
        {/* <div className='bg-slate-500 ' id='slate'></div> */}
        <div className="block">
        <div className='z-10  absolute' id='first'>
        <img src={Burger} alt="" className='' />
        </div>
        <div className='bg-white shadow-2xl rounded-3xl left-10 relative top-32 w-60 text-center pt-5 pb-5' >
          <h1 className='text-xl font-bold pb-2 pt-20'>Burger</h1>
          <p className='pb-2'>Mushroom sauce</p>
          <p className='font-bold'><span className='text-red-800'>$</span> 9.35</p>
        </div>
        
        </div>

        <div className="block">
        <div className='z-10  absolute ' >
        <img src={Junk} alt="" className='' />
        </div>
        <div className='bg-white shadow-2xl rounded-3xl left-10 relative top-32 w-60 text-center pt-5 pb-5'>
          <h1 className='text-xl font-bold pb-2 pt-20'>Burger</h1>
          <p className='pb-2'>Mushroom sauce</p>
          <p className='font-bold'><span className='text-red-800'>$</span> 9.35</p>
        </div>
        
        </div>

       <div className="block mt-20 mr-10">
       <div className='z-10 inline-block absolute ' id='second'>
        <img src={Pure} alt="" className='translated' />
        </div>
        <div className='bg-white shadow-2xl rounded-3xl left-10 top-10 w-60 text-center pt-5 pb-5' id='thirds'>
          <h1 className='text-xl font-bold pb-2 pt-20'>Burger</h1>
          <p className='pb-2'>Mushroom sauce</p>
          <p className='font-bold'><span className='text-red-800'>$</span> 9.35</p>
        </div>
       </div>

       <div className="block ">
       <div className='z-20 inline-block absolute' id='second'>
        <img src={Pizza} alt="" className='tansform' />
        </div>
        <div className='bg-white shadow-2xl z-10 rounded-3xl left-10  top-0 w-60 text-center pt-5 pb-5' id='thirdz'>
          <h1 className='text-xl font-bold pb-2 pt-20'>Burger</h1>
          <p className='pb-2'>Mushroom sauce</p>
          <p className='font-bold'><span className='text-red-800'>$</span> 9.35</p>
        </div>
       </div>
        

        

        </div>
        {/* <div className='z-10'>
        <img src={Pure} alt="" className='' />
        </div>
        <div className='bg-white shadow-2xl rounded-3xl left-10 relative top-40 w-60 text-center pt-5 pb-5'>
          <h1 className='text-xl font-bold pb-2 pt-20'>Burger</h1>
          <p className='pb-2'>Mushroom sauce</p>
          <p className='font-bold'><span className='text-red-800'>$</span> 9.35</p>

        </div>
        <div className=' z-10'>
        <img src={Junk} alt="" className='' />
        </div>
        <div className='bg-white shadow-2xl rounded-3xl left-10 relative top-40 w-60 text-center pt-5 pb-5'>
          <h1 className='text-xl font-bold pb-2 pt-20'>Burger</h1>
          <p className='pb-2'>Mushroom sauce</p>
          <p className='font-bold'><span className='text-red-800'>$</span> 9.35</p>

        </div> */}

      
    </div>
  )
}

export default Flexer
