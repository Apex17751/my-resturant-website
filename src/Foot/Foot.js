import React from 'react'
import Logow from './Untitled-1 1.png'
import facebook from './Facebook.png'
import linked from './Linkind.png'
import twitter from './Twitter.png'
import insta from './Instagram.png'

const Foot = () => {
  return (
    <div className='xs:mt-10 lg:mt-28 bg-slate-100' id='back-slate'>
        <div className='  lg:pt-14 lg:pb-10 mx-10' id='foot'>
        <div className='lg:flex  xs:block '>
            <div id='texxte'>
                <img src={Logow} alt="" />
                <p className='xs:w-1/2 pt-10 pb-10 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.</p>
               <div className='flex xs:pb-5 lg:pb-0' id='icon-sty'>
                <img src={linked} alt="" className='icon-style' />
                <img src={facebook} alt="" className='icon-style' />
                <img src={twitter} alt="" className='icon-style' />
                <img src={insta} alt="" className='icon-style'/>
               </div>
            </div>
           <div className=" lg:flex grid xs:grid-cols-1 md:grid-cols-2  w-full" id='trans'>
           <div className='xs:pb-7 lg:pb-0'>
                <h1 className='font-bold text-xl w-80 lg:pb-14 xs:pb-5 xs:pt-4 lg:pt-2' id='open'>Opening Resturant</h1>
             <div className='leading-8'>
             <p>Sat-Wet: 09:00am-10:00PM</p>
                <p>Thursday: 09:00am-11:00PM</p>
                <p id='friday'>Friday: 09:00am-8:00PM</p>
             </div>
            </div>
            <div className='xs:pb-7 lg:pb-0' id='trans'>
                <h1 className='font-bold text-xl lg:pb-14 lg:pt-2 lg:pr-5 xs:pb-5 xs:pt-4'>User Link</h1>
                <div className='leading-8'>
                <p id='about'>About Us</p>
                <p>Contact Us</p>
                <p>Order Delivery</p>
                <p>Payment & Tax</p>
                <p>Terms of Services</p>
                </div>
            </div>
            <div className='' >
                <h1 className='font-bold text-xl lg:pb-14 lg:pt-2 xs:pb-5 xs:pt-4 'id='opens'>Contact Us</h1>
                <div className='leading-8'>
                <p>1234 Country Club Ave</p>
                <p>NC 123456, London, UK</p>
                <p id='openz'>+0123 456 7891</p>
                </div>
            </div>
           </div>

        </div>
      
    </div>
    </div>
  )
}

export default Foot
