import React from 'react'
import Laptop from './91374 1.png'
import Junker from './3-36085_fast-food-banner-junk-food-transparent-background 1.png'
import Chef from './Blank-Package-Transparent-PNG 1.png'
import RopeOne from './Group 27.png'
import RopeTwo from './Vector 2.png'

const Work = () => {
  return (
    <div className='pb-28 xs:pt-10 lg:pt-20 mb-10 px-10 bg-orange-200' id='work'>
        <div >
        <div className='text-center' >
            <p>HOW TO WORK</p>
            <h1 className='font-bold text-xl pt-3 pb-14'>Food Us An Important Part Of A Balanced Diet</h1>
        </div>
        <div className='lg:flex'>
            <div className='pt-6 xs:pb-8 lg:pb-0' id='smaller'>
                <img src={Laptop} alt="" className='xs:mx-auto lg:mx-0' />
                <h1 className='text-center font-bold text-xl pt-5 pb-3'>CHOOSE</h1>
                <p className='xs:text-center lg:text-left xs:px-14 lg:px-0'>Do you want to lose weight, exercise,
adhere to a therapeutic diet? Our
dietitian will help you with choosing the
right program!</p>
            </div>

            <div>
                <img src={RopeTwo} alt="" className='xs:hidden lg:block' id='rope' />
            </div>

            <div className='xs:pb-10 lg:pb-0' id='smaller'>
            <h1 className='text-center font-bold text-xl pt-5 pb-3 '>PREPARE FOOD</h1>
                <p className='text-center pb-7 xs:px-14 lg:px-0'>Do you want to lose weight, exercise,
adhere to a therapeutic diet? Our
dietitian will help you with choosing the
right program!</p>
                <img src={Junker} alt=""  className='xs:w-1/2 lg:w-auto mx-auto'/>
            </div>

            <div>
                <img src={RopeOne} alt="" className='xs:hidden lg:block' id='ropeOne'/>

            </div>

            <div className='' id='smaller'>
                <img src={Chef} alt="" className='xs:mx-auto lg:mx-0'/>
                <h1 className='text-center font-bold text-xl pt-3 pb-3'>DELIVER</h1>
                <p className='xs:text-center lg:text-right xs:px-14 lg:px-0'>Do you want to lose weight, exercise,
adhere to a therapeutic diet? Our
dietitian will help you with choosing the
right program!</p>
            </div>
            
        </div>
        </div>
      
    </div>
  )
}

export default Work
