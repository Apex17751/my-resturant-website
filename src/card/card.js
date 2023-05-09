import React from 'react'
import Burger from './chicken.jpg'
import Spag from './spag.jpg'
import Bbq from './bbq.jpg'
import Tortilla from './Tortilla.jpg'
import sandwich from './Riceballs.jpg'
import grilled from './meatballs.jpg'


const card = () => {
  return (
    <div className='bg-orange-200 font-poppins items-center justify-center xs:pb-20 lg:pb-32 lg:px-28 mx-auto' id='font'>
      <div className="text-center pt-20">
        <p className='text-md pb-3'>PRODUCT</p>
        <h1 className='font-bold text-2xl'>Most Popular Items</h1>
      </div>
      <div className='items-center sm:h-auto justify-between pt-20 pb-10 grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3' id='give'>
     <div className='sm:block items-center justify-center mx-auto xs:mb-10 xl:mb-0  flex flex-col ' id='grid'>
     <div className='w-80 min-h-[10rem] rounded-lg relative items-center justify-center block '>
     <img src={Tortilla} alt="" className='rounded-t-xl object-cover object-center' />
     </div>
     <div className=' w-80 py-2 px-2  rounded-b-xl shadow-xl bg-white'>
      <div className='justify-between flex'>
        <span className='text-xl font-bold pl-3 pt-5'>Tortilla & lemon </span>
        <span className='text-md pr-3 pt-6 flex gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#F97316" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
4.5</span>
         </div>
   <div className='pt-3 pb-3 pl-3 font-bold justify-between flex '>
        <button type='button' className='bg-orange-500 rounded-full text-md px-5 py-3 font-thin text-white'>Add to cart</button>
        <span className=' p-2 '>$12.00</span>
      </div>
   
     </div>
     </div>



      <div className='sm:block items-center justify-center mx-auto flex flex-col xs:mb-10 xl:mb-0 ' id='grid'>
     <div className='w-80 min-h-[10rem] rounded-lg relative items-center justify-center block'>
     <img src={grilled} alt="" className='rounded-t-xl object-cover object-center' />
     </div>
     <div className=' w-80 py-2 px-2  rounded-b-xl shadow-xl bg-white'>
      <div className='justify-between flex'>
        <span className='text-xl font-bold pl-3 pt-5'>Steaky Meat balls </span>
        <span className='text-md pr-3 pt-6 flex gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#F97316" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
4.5</span>
         </div>
   <div className='pt-3 pb-3 pl-3 font-bold justify-between flex '>
        <button type='button' className='bg-orange-500 rounded-full text-md px-5 py-3 font-thin text-white'>Add to cart</button>
        <span className=' p-2 '>$12.00</span>
      </div>
   
     </div>
     </div>


      <div className='sm:block items-center justify-center mx-auto flex flex-col xs:mb-10 xl:mb-0' id='grid'>
     <div className='w-80 min-h-[10rem] rounded-lg relative items-center justify-center block'>
     <img src={sandwich} alt="" className='rounded-t-xl object-cover object-center' />
     </div>
     <div className=' w-80 py-2 px-2  rounded-b-xl shadow-xl bg-white'>
      <div className='justify-between flex'>
        <span className='text-xl font-bold pl-3 pt-5'>Kofta Rice balls </span>
        <span className='text-md pr-3 pt-6 flex gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#F97316" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
4.5</span>
         </div>
   <div className='pt-3 pb-3 pl-3 font-bold justify-between flex '>
        <button type='button' className='bg-orange-500 rounded-full text-md px-5 py-3 font-thin text-white'>Add to cart</button>
        <span className=' p-2 '>$12.00</span>
      </div>
   
     </div>
     </div>


      <div className='sm:block items-center justify-center mx-auto flex flex-col xs:mb-10 xl:mb-0' id='grid'>
     <div className='w-80 min-h-[10rem] rounded-lg relative items-center justify-center block'>
     <img src={Spag} alt="" className='rounded-t-xl object-cover object-center' />
     </div>
     <div className=' w-80 py-2 px-2  rounded-b-xl shadow-xl bg-white'>
      <div className='justify-between flex'>
        <span className='text-xl font-bold pl-3 pt-5'>Comida spaghetti </span>
        <span className='text-md pr-3 pt-6 flex gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#F97316" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
4.5</span>
         </div>
   <div className='pt-3 pb-3 pl-3 font-bold justify-between flex '>
        <button type='button' className='bg-orange-500 rounded-full text-md px-5 py-3 font-thin text-white'>Add to cart</button>
        <span className=' p-2 '>$12.00</span>
      </div>
   
     </div>
     </div>

  <div className="sm:block mt-10 items-center justify-center mx-auto flex flex-col xs:mb-10 xl:mb-0" id='gridar'>
  <div className='w-80 min-h-[10rem] rounded-lg relative items-center justify-center block '>
     <img src={Burger} alt="" className='rounded-t-xl object-cover object-center ' />
     </div>

     <div className=' w-80 py-2 px-2 mb-10 rounded-b-xl shadow-xl bg-white'>
      <div className='justify-between flex'>
        <span className='text-xl font-bold pl-3 pt-5'>Chicken skewers</span>
        <span className='text-md pr-3 pt-6 flex gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#F97316" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
4.5</span>
      </div>
      <div className='pt-3 pb-3 pl-3 font-bold justify-between flex '>
        <button type='button' className='bg-orange-500 rounded-full text-md px-5 py-3 font-thin text-white'>Add to cart</button>
        <span className=' p-2 '>$12.00</span>
      </div>
     </div>
  </div>

   <div className="sm:block items-center justify-center mx-auto flex flex-col xs:mb-10 xl:mb-0" id='gridar'>
   <div className='w-80 min-h-[10rem] rounded-lg relative items-center justify-center block '>
     <img src={Bbq} alt="" className='rounded-t-xl object-cover object-center ' />
     </div>

     <div className=' w-80 py-2 px-2 rounded-b-xl bg-white  shadow-xl'>
      <div className='justify-between flex'>
        <span className='text-xl font-bold pl-3 pt-5'>Meats Tomato</span>
        <span className='text-md pr-3 pt-6 flex gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#F97316" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
4.5</span>
      </div>
      <div className='pt-3 pb-3 pl-3 font-bold justify-between flex '>
        <button type='button' className='bg-orange-500 rounded-full text-md px-5 py-3 font-thin text-white '>Add to cart</button>
        <span className=' p-2 '>$12.00</span>
      </div>
     </div>
   </div>
    </div>
    <div className='flex items-center justify-center' id='div-but'>
  <button type='button' className='bg-orange-500 rounded-full text-md px-5 py-3 font-bold text-white mx-auto'>See more products</button>
</div>
    
    </div>
    
     
  
  )
}

export default card
