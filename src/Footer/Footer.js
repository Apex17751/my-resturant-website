import React from 'react'
import Logow from './logow.png'

const Footer = () => {
  return (
    <div className='px-10 pt-24 pb-10' id='footer'>
      
      <div className='block sm:flex justify-between'>
      <div className=''>
      <img src={Logow} className='editable' alt="" />
      </div>
      <div>
        <p className='max-w-sm w-4/5 md:max-w-lg md:w m-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error alias enim, tempore doloribus cum animi! Nobis nulla odio, culpa dolores nam illo soluta illum doloribus, minima quis quaerat reprehenderit numquam?</p>
      </div>
      <div className=''>
        <h2>ABOUT US</h2>
        <p className='leading-normal'>About Metav</p>
        <p>Contact us</p>
        <p>FAQ</p>
        <p>Privacy policy</p>
        <p>Terms of services</p>
      </div>
      <div>
        <h2>SERVICES</h2>
        <p>NFT marketplace</p>
        <p>Virtual concert</p>
        <p>Gaming</p>
        <p>Artwork</p>
        <p>Online Travel</p>
      </div>


      </div>

      <div>
        <p className='text-center pt-36'>2022 Metaverse.com all rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
