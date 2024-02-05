import React from "react";
import Whitebtn from "./Whitebtn";
import giros from "../assets/images/Giros.webp";
import european from "../assets/images/european.webp";
import betting from "../assets/images/live-betting.webp";
const carddata = [
  {
    bg: giros,
    class: "xl:pr-3 mb-5",
    aos:"zoom-out-right"
  },
  {
    bg: european,
    class: "xl:px-3 mb-5",
    aos:"zoom-out-down"
  },
  {
    bg: betting,
    class: "xl:pl-3 pb-0",
    aos:"zoom-out-left"
  },
];

const Ellos = () => {
  const data = carddata.map((carddata, s) => (
    <div key={s} className={` ${carddata.class} lg:w-1/3 md:w-1/2 w-full flex justify-center px-4`}>
      <div
        className="max-w-[364px] group rounded-lg overflow-hidden relative  hover:shadow-[7px_9px_15px_0px_#00000033] duration-500
" data-aos={carddata.aos} data-aos-duration="1000">
        <img src={carddata.bg} alt="img" className="w-full" />
        <div className="w-full h-full group-hover:left-0 top-0 left-[-100%] absolute bg-[#000000B2] flex justify-center items-center duration-500">
          <Whitebtn btn="Rcasinovip" />
        </div>
      </div>
    </div>
  ));
  return (
    <div className=" md:pt-20 pt-10  lg:pt-[150px] relative z-[1] overflow-x-clip">
      <div className="w-[484px] h-[484px] rounded-full bg-ellipse blur-[189px] absolute right-[-35%] top-[-21%] opacity-50 hidden lg:block"></div>
      <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
        <h2 className="text-white font-anton text-4xl md:text-[40px] lg:text-5xl text-center md:mb-10 mb-5 lg:mb-[60px] ">
          Ellos eligieron apostar con nosotros
        </h2>
        <div className="flex flex-wrap flex-row mb-[38px] justify-center">{data}</div>
        <p className=" font-inter text-white text-center text-sm md:text-base  font-semibold !leading-[25.6px]">
          Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
          de emocionantes experiencias de juego.
        </p>
        <p className=" font-inter text-white text-center text-sm md:text-base  font-semibold !leading-[25.6px]">Ahora, la próxima apuesta está en tus manos.</p>
        <p className=" font-inter text-white text-center text-sm md:text-base  font-semibold !leading-[25.6px]">Elige ganar. Elige exclusive game.</p>
      </div>
    </div>
  );
};

export default Ellos;
