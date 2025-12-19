import { title } from 'framer-motion/client'
import React from 'react'

function ThreeCardSection() {

   const ThreeCardSection1 = [
    {
        imgUrl: '/Images/Gifts/13.jpg',
        title: 'Starting ₹249 | boAt'
    },
    {
        imgUrl: '/Images/Gifts/14.jpg',
        title: 'Starting ₹249 | boult'
    },
    {
        imgUrl: '/Images/Gifts/15.jpg',
        title: 'Starting ₹249 | Noise'
    },
    {
        imgUrl: '/Images/Gifts/16.jpg',
        title: 'Starting ₹249 | Zebronics'
    }
   ]



   const ThreeCardSection2 = [
    {
        imgUrl: '/Images/Gifts/17.jpg',
        title: 'Starting ₹249 | Bedshit'
    },
    {
        imgUrl: '/Images/Gifts/18.jpg',
        title: 'Starting ₹249 | Curtains'
    },
    {
        imgUrl: '/Images/Gifts/19.jpg',
        title: 'Starting ₹249 | Minimum 40% off | Ironing board & more'
    },
    {
        imgUrl: '/Images/Gifts/20.jpg',
        title: 'Starting ₹249 | Minimum 40% off | Home decor'
    }
   ]
   
   
   
   
   const ThreeCardSection3 = [
    {
        imgUrl: '/Images/Gifts/09.jpg',
        title: 'Starting ₹249 | boAt'
    },
    {
        imgUrl: '/Images/Gifts/10.jpg',
        title: 'Starting ₹249 | boAt'
    },
    {
        imgUrl: '/Images/Gifts/11.jpg',
        title: 'Starting ₹249 | boAt'
    },
    {
        imgUrl: '/Images/Gifts/12.jpg',
        title: 'Starting ₹249 | boAt'
    }
   ]
    
  return (
    <section className='grid lg:grid-cols-2 justify-between max-w-7xl gap-4 p-10'>
    <div className='relative border max-w-3xl shadow px-6 py-5'>
        <h2 className='text-gray-900 text-center tracking-tight font-semibold text-xl mb-8 '>
            Starting ₹149 | Headphones
        </h2>
       <div className='flex gap-2'>
            {ThreeCardSection1.map((TCS1,index) => (
                <div key={index}>
                    <img src={TCS1.imgUrl} alt="" />
                    <div>
                        <h3 className='text-sm text-gray-900 text-center mt-2'>{TCS1.title}</h3>
                    </div>
                </div>                 
            ))}
       </div>
    </div>

    <div className='relative border max-w-3xl shadow px-6 py-5'>
        <h2 className='text-gray-900 text-center tracking-tight font-semibold text-xl mb-8 '>
            Starting ₹149 | Headphones
        </h2>
       <div className='flex gap-2'>
            {ThreeCardSection3.map((TCS3,index) => (
                <div key={index}>
                    <img src={TCS3.imgUrl} alt="" />
                    <div>
                        <h3 className='text-sm text-gray-900 text-center mt-2'>{TCS3.title}</h3>
                    </div>
                </div>                 
            ))}
       </div>
    </div>

    <div className='relative border px-6 py-5'>
        <h2 className='text-gray-900 text-center tracking-tight font-semibold text-xl mb-8 '>
            Shop gifts by recipient
        </h2>
       <div className='flex gap-2'>
            {ThreeCardSection2.map((TCS2,index) => (
                <div key={index}>
                    <img src={TCS2.imgUrl} className='h-auto' alt="" />
                    <div>
                        <h3 className='text-sm text-gray-900 text-center mt-2'>{TCS2.title}</h3>
                    </div>
                </div>                 
            ))}
       </div>
    </div>


    </section>
  )
}

export default ThreeCardSection