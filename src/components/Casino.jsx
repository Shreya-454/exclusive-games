import React from "react";
import casino1 from "../assets/images/casino1.webp";
import Greenbtn from "./Greenbtn";
const Casino = () => {
  return (
    <div className="bg-[url(./assets/images/white-bg2.webp)] bg-size bg-center bg-no-repeat md:pt-20 pt-10 lg:pt-[304px] md:pb-20 pb-10 lg:pb-[324px] bg-white lg:bg-[#00141B]">
      <div className=" max-w-[1140px] mx-auto xl:px-0 px-4">
        <div className="flex flex-wrap lg:flex-row flex-col-reverse relative z-[1]">
          <div className="lg:w-1/2 lg:pr-3 lg:py-20 md:pt-10 pt-5" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="lg:text-5xl md:text-[40px] text-4xl font-anton font-normal !leading-[57.6px] text-[#00141B] text-center lg:text-start">
              Por qué elegirnos
            </h2>
            <p className=" font-inter text-sm md:text-base font-medium !leading-[25.6px] text-[#00141B] mt-1 md:mt-4 text-center lg:text-start">
              Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
              todo lo invertido en fichas en la moneda que elijas. En Exclusive
              Games siempre sumamos nuevos juegos. Juegos crash, los juegos
              interactivos que más pide la gente. Con Exclusive Games empezás a
              ganar ya! Creamos tu plataforma en solo 2 semanas.
            </p>
            <div className="flex justify-center lg:block ">
              <Greenbtn text="Aprende más" class="!mt-6"/>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-3 flex justify-center lg:block">
            <img src={casino1} alt="img" className="rounded-2xl" data-aos="zoom-in-left" data-aos-duration="1000"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
