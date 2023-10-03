import React from 'react'
import headerimage from '../images/headerimage.jpeg'
function Banner() {
  return (
   
    <section data-testid="banner-id" className='flex flex-col items-start justify-center px-16'  style={{backgroundSize: 'cover', backgroundImage:`url(${headerimage})`,backgroundRepeat:"no-repeat", height:'500px', backgroundPositionY:'center' }}>
    <div className='text-white flex flex-col gap-y-8 md:w-1/2 sm:w-full'>
        <span className='font-extrabold md:text-xl sm:text-lg  text-justify'>UPGRADES AHEAD OF STARSHIP’S SECOND FLIGHT TEST</span>
        <p className='md:text-xl sm:text-lg text-justify'>The first flight test of a fully integrated Starship and Super Heavy was a critical step in advancing the capabilities of the most powerful launch system ever developed. Starship’s first flight test provided numerous lessons learned that are directly contributing to several upgrades being made to both the vehicle and ground infrastructure to improve the probability of success on future Starship flights.</p>
    </div>
    </section>
  )
}

export default Banner