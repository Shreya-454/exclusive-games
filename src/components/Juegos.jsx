import React from "react";
import Whitebtn from "./Whitebtn";
import bg1 from "../assets/images/backg1.webp";
import bg2 from '../assets/images/back2.webp'
import bg3 from '../assets/images/back3.webp'
const myArray = [
  {
    bg:bg1,
    class:'mb-5',
    aos:"zoom-in-right"
  },
  {
    bg:bg2,
    class:'mb-5',
    aos:"zoom-in-up"
  },
  {
    bg:bg3,
    class:'lg:mb-5',
    aos:"zoom-in-left"
  }
]

const Juegos = () => {
  const data= myArray.map((myArray,e)=>(<div className={`${myArray.class} lg:w-1/3 md:w-1/2 w-full flex justify-center  px-3`} key={e}>
  <div className="max-w-[364px] rounded-lg overflow-hidden relative group hover:shadow-[7px_9px_15px_0px_#00000033]
" data-aos={myArray.aos} data-aos-duration="1000">
  <img src={myArray.bg} alt="img" className="w-full" />
    <div className="absolute w-full  bg-[#2C2B2B]/[0.7] max-w-[364px] h-[265px] flex justify-center bottom-[-200%] group-hover:bottom-0 left-0 items-center duration-500">
      <Whitebtn btn="Reproducir ahora" />
    </div>
  </div>
</div>))
  return (
    <div className=" pt-10 md:pt-20 lg:pt-[150px] overflow-x-clip">
      <h2 className="text-center text-white font-anton text-4xl md:text-[40px] lg:text-5xl !leading-[57.6px] mb-5 md:mb-10 lg:mb-[60px]">
        Juegos en vivo
      </h2>
      <div className="flex flex-wrap flex-row -mx-3 justify-center">
       {data}
      </div>
    </div>
  );
};

export default Juegos;
