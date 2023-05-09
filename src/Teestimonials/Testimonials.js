import  { useState} from 'react';
import React from 'react';
import imagerey  from './Group 30.png'
import Icon from './Component 6.png'
import IconTwo from './Component 7.png'
import bg from './3-36085_fast-food-banner-junk-food-transparent-background 1.png'



const Testimonials = () => {  
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Peter Obi',
      title: 'CEO & Co-Founder',
      text:
        '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”',
      image: imagerey,
    },
    {
      id: 2,
      name: 'Makinde Charles',
      title: 'Financial Assistant',
      text:
        '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”',
      image: imagerey,
    },
    {
      id: 3,
      name: 'Bola Ahmed Tinubu',
      title: 'CEO/CTO/HR',
      text:
        '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”',
      image: imagerey,
    },
    {
      id: 4,
      name: 'Atiku Abubakar',
      title: 'Treasurer',
      text:
        '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”',
      image: imagerey,
    }
    // add more testimonials here
  ];
  
  return (
    
    <div id='testimonies' className='mx-10'>
        <div className='text-center pt-10'>
            <p>TESTIMONIES</p>
            <h1 className='font-bold text-xl'>What our happy clients says</h1>
        </div>
        <div className='lg:flex xs:block pt-20 pb-20 justify-between items-center'>
        <div className='flex w-1/2 relative col-span-3  xs:mx-auto lg:ml-10 rounded-2xl' id='width'>
        <div className='block px-10 py-10'>
  <div className=' flex items-center mx-auto'>
    <img src={testimonials[currentTestimonialIndex].image} alt='' className='img-slide' />
    <div className='block'>
      <p className='font-bold text-lg'>{testimonials[currentTestimonialIndex].name}</p>
      <p className=''>{testimonials[currentTestimonialIndex].title}</p>
    </div>
  </div>

  <div className='flex items-center'>
    <div className='absolute left-0 ' id='arrow' onClick={() => setCurrentTestimonialIndex((currentTestimonialIndex - 1 + testimonials.length) % testimonials.length)}>
      <img src={Icon} alt='' />
    </div>
    <div className='absolute right-0 ' id='arrow-right' onClick={() => setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonials.length)}>
      <img src={IconTwo} alt='' />
    </div>
  </div>

  <div className='block'>
    <p>{testimonials[currentTestimonialIndex].text}</p>
  </div>
</div>


            </div>
            <div className='lg:pl-36' id='imago'>
                <img src={bg} alt="" className='back-food'/>
            </div>
            
        </div>
      
    </div>
  )
}

export default Testimonials
