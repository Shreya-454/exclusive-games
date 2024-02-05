import React from 'react'
import Greenbtn from './Greenbtn'
import web1 from '../assets/images/web1.webp'
import web2 from '../assets/images/web2.webp'
const Lanza = () => {
  return (
    <div className='lg:pb-[150px] pb-10 md:pb-20 px-4 xl:px-0'>
      <div className=" px-4 xl:px-0 max-w-[1140px] overflow-hidden mx-auto bg-background border-[0.5px] border-solid border-[#FFFFFF80] rounded-2xl py-10  sm:py-20 md:py-[104px] flex flex-col items-center relative z-[1] " data-aos="zoom-in-up" data-aos-duration="1000">
        <img src={web1} alt="img" className='absolute top-0 left-0  z-[-1]' />
        <img src={web2} alt="img" className='absolute  bottom-0 right-0 z-[-1]' />
<h2 className=' font-anton font-normal text-2xl md:text-[32px] text-white text-center !leading-[41.6px]'>Lanza tu propia plataforma en sólo 2 semanas</h2>
<Greenbtn text="Leer más"/>
      </div>
    </div>
  )
}

export default Lanza
