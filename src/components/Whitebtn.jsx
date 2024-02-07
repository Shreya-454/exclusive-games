import React from 'react' 
const Whitebtn = (props) => {
  return (
    <div>
      <button className={`${props.class1} text-white opacity-100 relative z-[2] border hover:after:left-[2%] hover:after:bottom-[2%]  after:duration-500 hover:bg-white hover:text-black  duration-500 border-white rounded-full py-[13px] px-[46px] border-solid after:absolute after:content-[url(./assets/images/simple-border.svg)] after:left-[-4%]  after:bottom-[-31%] font-inter font-bold text-base !leading-[25.6px]`} data-aos="zoom-in" data-aos-duration="1000">{props.btn}</button>
    </div>
  )
}

export default Whitebtn
