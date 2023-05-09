import React, {useState} from 'react'
import Logo from './Untitled-1 1.png'
import Delivery from './Group 21 (1).png'
import Flexer from './Flexer.js'

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
<div className='' id='home'>
<div className="">
<div className='flex items-center justify-between py-3 px-10' >
      <div className="logo">
        <img src={Logo} alt="" className='Logo' />
      </div>
      <div className="flex">
        <nav>
          <ul className='lg:flex hidden items-center'>
            <li className='pl-10 text-slate-600 font-bold'><a href="#">Home</a></li>
            <li className='pl-10 text-slate-600 font-bold '><a href="#">Menu</a></li>
            <li className='pl-10 text-slate-600 font-bold '><a href="#">Blogs</a></li>
            <li className='pl-10 text-slate-600 font-bold '><a href="#">Contacts</a></li>
          </ul>
        </nav>
      </div>

      <div class="w-72 max-w-md flex items-center">
  <div class="relative">
    <input id="search" type="search" placeholder="Search..." class="w-full py-2 pr-10 pl-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
    <button type="submit" class="absolute top-0 right-0 mt-2 mr-2">
      <svg class="h-6 w-6 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M22 22L15.5 15.5M15.5 15.5C17.1569 14.1716 18.0784 12.3905 18.0784 10.5294C18.0784 6.71471 14.8637 3.5 11.049 3.5C7.23432 3.5 4.01959 6.71471 4.01959 10.5294C4.01959 14.3441 7.23432 17.5588 11.049 17.5588C12.9101 17.5588 14.6913 16.6373 16.0197 14.9804L22 22Z"/>
      </svg>
    </button>
  </div>
  <div className='ml-4'>
    <div className='flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>

<div className='pl-3 md:hidden' onClick={handleClick}>
  {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
}

</div>
    </div>


<div className='absolute w-5 h-5 top-4 rounded-full bg-red-600 items-center flex justify-center'>
  <span className='text-white'>2</span>
</div>
  </div>

</div>


<div className='absolute md:hidden rounded-2xl top-20' id='wizz'>
<ul className={!nav ? 'hidden' : ' items-center relative pb-5 pt-10 bg-black'}>
            <div>
            <li className='pl-5 leading-10  font-bold '><a href="#">Home</a></li>
            <li className='pl-5 leading-10 font-bold '><a href="#">Menu</a></li>
            <li className='pl-5 leading-10 font-bold '><a href="#">Blogs</a></li>
            <li className='pl-5 leading-10 font-bold '><a href="#">Contacts</a></li>
            <button type='button' className='bg-orange-400 p-3 ml-3 '>Start now</button>
            </div>
          </ul>
</div>
      
    </div>
    

<div className="lg:flex">
<div className=''>
      <div className='flex items-center px-10 w-72 mt-3 ' id='round'>
        <span className='font-bold text-orange-600 flex py-3 pl-5 lg:pr-5 w-80 bg-orange-100 ' id='bike'>Bike Delivery
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" id='svgb'>
  <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg></span>
  

      </div>
      <div className='pt-16 md:ml-10'>
        <h1 className='text-6xl font-bold pb-5' id='home-text'>The Fastest <span className='text-orange-500'>Delivery</span> in your city</h1>
        <p className='text-lg' id='home-small'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente similique cupiditate accusamus quis aliquam veritatis est ratione adipisci blanditiis illum!</p>
      </div>
    <div className=''>
    <div className='pt-10 ml-10 flex ' id='blocker'>
        <button type='button' className='bg-orange-400 capitalize font-bold text-white px-6 py-3 ' id='buut'>Order Now</button>
       <div className='flex items-center justify-center'>
       <div className='bg-white rounded-full shadow-xl w-10 h-10 flex items-center ml-8'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FB923C" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FB923C" className="w-7 h-7 mx-auto" id='svg'>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
</svg>
        </div>
        <div className='flex items-center justify-center'>
        <button type='button' className='font-bold pl-4  bg-transparent '>Order process</button>
        </div>
       </div>
      </div>
    </div>
    </div>
    <Flexer />
</div>



</div>
<div>
</div>
</div>
  )
}

export default Home;
