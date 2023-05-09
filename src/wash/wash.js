import React from 'react'

const wash = () => {
  return (
    <div id='wash'>
        <div className='sm:block items-center justify-evenly bg-gray-200 px-9 shadow-lg rounded-3xl py-16 mx-10 xs:mb-10 lg:mt-20 lg:mb-24 md:flex'>
            <div className='items-center justify-center ' id='washer'>
                <div className='bg-orange-400 w-10 h-10 m-auto rounded-full justify-center flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#fff" className="w-6 h-6 m-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                </div>
                <h1 className='font-bold text-lg text-center pt-3'>Today 10:00am - 10:00pm</h1>
                <p className='text-center text-md pt-2'>Working Time</p>
            </div>
            <div className='border-2 border-gray-800' id='bord'></div>
            <div>
        <div className='bg-orange-400 w-10 h-10 m-auto rounded-full justify-center flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#fff" className="w-6 h-6 m-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
        </div>

                <h1 className='font-bold text-lg text-center pt-3'  id='seco'>Washington, D.C, USA</h1>
                <p className='text-center pt-2' id='locat'>Our Location</p>
            </div>

            <div className=' border-gray-800' id='bord'></div>
            <div>
                <div className='bg-orange-400 w-10 h-10 m-auto rounded-full justify-center flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#fff" className="w-6 h-6 m-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
</svg>
                </div>
    

                <h1 className='font-bold text-lg text-center pt-3'>+0123 456 789</h1>
                <p className='text-center pt-2'>Phone Number</p>
            </div>
        </div>
      
    </div>
  )
}

export default wash
