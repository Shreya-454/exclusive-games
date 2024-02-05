import React from "react";
import bulb from "../assets/images/bulb.webp";
import people from "../assets/images/people.webp";
import innvocation from '../assets/images/innvocation.webp'
import arrow1 from '../assets/images/arrow1.webp'
import arrow2 from '../assets/images/arrow2.webp'
import Slots from "./Slots";
const Nuestros = () => {
  return (
    <div className="bg-[url(./assets/images/white-bg1.webp)] bg-size bg-center bg-no-repeat py-16 md:py-20 lg:py-[243px] bg-white lg:bg-[#00141B]">
      <div className="max-w-[1140px] mx-auto xl:px-0 px-4 ">
        <h2 className=" font-anton text-[#00141B] md:text-[40px] text-4xl lg:text-5xl text-center mb-5 sm:mb-10 lg:mb-[60px]">
          Nuestros Atributos de Marca
        </h2>
        <div className="flex flex-wrap flex-row  relative">
          <img src={arrow1} alt="a" className="absolute left-[19%] top-[1%] hidden lg:block" />
          <img src={arrow2} alt="a" className=" absolute right-[19%] top-[22%] hidden lg:block" />
          <div className="lg:w-1/3 md:w-1/2 w-full  xl:pr-3 px-4 flex justify-center lg:block">
            <div className="max-w-[263px] flex flex-col items-center" data-aos="fade-down" data-aos-duration="1000">
              <div className="w-[100px] h-[100px] rounded-full bg-[#7AF57A14] mb-4 flex justify-center items-center" data-aos="fade-down" data-aos-duration="1000"><img src={bulb} alt="img1" /></div>
              <h3 className=" font-anton text-[#00141B] text-base md:text-xl !leading-[26px] font-normal text-center mb-2.5">
                Inteligencia
              </h3>
              <p className="text-center font-inter text-sm md:text-base  font-medium !leading-[25.6px] text-[#00141B]">
                Comprendemos a la perfección los gustos de las personas y el
                mundo del gaming.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full xl:px-3 px-4 flex justify-center">
            <div className="max-w-[235px] flex flex-col items-center" data-aos="fade-down" data-aos-duration="1000">
            <div className="w-[100px] h-[100px] rounded-full bg-[#7AF57A14] mb-4 flex justify-center items-center" data-aos="fade-down" data-aos-duration="1000"><img src={people} alt="img1" /></div>
              <h3 className="font-anton text-[#00141B] text-base md:text-xl !leading-[26px] font-normal text-center mb-2.5">Proactividad</h3>
              <p className="text-center font-inter text-sm md:text-base  font-medium !leading-[25.6px] text-[#00141B]">Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
            </div>
          </div>
          <div className="lg:w-1/3  w-full xl:pl-3 px-4 flex lg:justify-end justify-center">
  <div className="max-w-[244px] flex flex-col items-center" data-aos="fade-down" data-aos-duration="1000">
  <div className="w-[100px] h-[100px] rounded-full bg-[#7AF57A14] mb-4 flex justify-center items-center" data-aos="fade-down" data-aos-duration="1000"><img src={bulb} alt="img1" /></div>
<h3 className="font-anton text-[#00141B] text-base md:text-xl !leading-[26px] font-normal text-center mb-2.5">Innovación</h3>
<p className="text-center font-inter text-sm md:text-base  font-medium !leading-[25.6px] text-[#00141B]">Pensamos fuera de la caja para estar siempre un paso adelante.</p>
</div>
          </div>
        </div>
        <Slots/>
      </div>
    </div>
  );
};

export default Nuestros;
