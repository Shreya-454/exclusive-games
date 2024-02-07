import React from 'react'
const Greenbtn = (props) => {
  return (
    <div>
       <button className={` ${props.class} hover:after:left-[2%] hover:after:bottom-[2%] after:z-[-8] z-[10] after:duration-500  hover:text-white duration-500 bg-green-blue text-black font-inter font-bold text-sm md:text-base py-[13px] px-[46px] rounded-full relative after:absolute after:content-[url(./assets/images/green-btn.svg)] after:left-[-5%] after:bottom-[-30%] mt-5 md:mt-10`} data-aos="zoom-in" data-aos-duration="1000">{props.text}</button>
    </div>
  )
}

export default Greenbtn
