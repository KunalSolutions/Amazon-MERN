import React from 'react'

function MultipleCard() {

    const Gifts = [
        {
            imgUrl: '/Images/Gifts/01.jpg',
            price: 'under $10'
        },
        {
            imgUrl: '/Images/Gifts/02.jpg',
            price: 'under $25'
        },
        {
            imgUrl: '/Images/Gifts/03.jpg',
            price: 'under $50',
        },
        {
            imgUrl: '/Images/Gifts/04.jpg',
            price: 'under $100'
        },
    ] 

    const Gifts1 = [
        {
            imgUrl: '/Images/Gifts/05.jpg',
            msg: 'For him'
        },
        {
            imgUrl: '/Images/Gifts/06.jpg',
            msg: 'For her'
        },
        {
            imgUrl: '/Images/Gifts/07.jpg',
            msg: 'For kids',
        },
        {
            imgUrl: '/Images/Gifts/08.jpg',
            msg: 'for teens'
        },
    ] 

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
            title: 'Starting ₹249 | Cleaning Accessories'
        },
        {
            imgUrl: '/Images/Gifts/10.jpg',
            title: 'Starting ₹249 | Tyre & rim care'
        },
        {
            imgUrl: '/Images/Gifts/11.jpg',
            title: 'Starting ₹249 | Helemet'
        },
        {
            imgUrl: '/Images/Gifts/12.jpg',
            title: 'Starting ₹249 | Vaccum cleaner'
        }
       ]



  return (
    <section className='grid lg:grid-cols-2 max-w-7xl gap-4 p-15'>
    <div className='relative border max-w-3xl shadow px-6 py-5'>
        <h2 className='text-gray-900 text-center tracking-tight font-medium text-xl mb-8 '>
            Shop gifts by price
        </h2>
       <div className='flex gap-2'>
            {Gifts.map((gift,index) => (
                <div key={index}>
                    <img src={gift.imgUrl} alt="" />
                    <div>
                        <h3 className='text-sm text-gray-900 text-center mt-2'>{gift.price}</h3>
                    </div>
                </div>                 
            ))}
       </div>
    </div>

     <div className='relative border px-6 py-5'>
        <h2 className='text-gray-900 text-center tracking-tight font-medium text-xl mb-8 '>
            Shop gifts by recipient
        </h2>
       <div className='flex gap-2'>
            {Gifts1.map((gift,index) => (
                <div key={index}>
                    <img src={gift.imgUrl} alt="" />
                    <div>
                        <h3 className='text-sm text-gray-900 text-center mt-2'>{gift.msg}</h3>
                    </div>
                </div>                 
            ))}
       </div>
    </div>

    <div className='relative border max-w-3xl shadow px-6 py-5'>
            <h2 className='text-gray-900 text-center tracking-tight font-medium text-xl mb-8 '>
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
            <h2 className='text-gray-900 text-center tracking-tight font-medium text-xl mb-8 '>
                Automotive essentials | Up to 60% off
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

    </section>

    )
}

export default MultipleCard