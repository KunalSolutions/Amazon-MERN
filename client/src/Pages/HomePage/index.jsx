import React from 'react'
import HeroSection from './HeroSection'
import ProductSection from './ProductSection'
import MultipleCard from './MultipleCard'
import ThreeCardSection from './ThreeCardSection'

function Homepage() {
  return (
    <div className=''>
        <HeroSection />
        <MultipleCard />
        {/* <ThreeCardSection /> */}
        <ProductSection />
    </div>
  )
}

export default Homepage