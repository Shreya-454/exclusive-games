import React from "react";
import seven from "../assets/images/777.webp";
import bulb2 from "../assets/images/bulb2.webp";
import stars from "../assets/images/stars.webp";
import dollar from '../assets/images/dollars.webp'
import Silver from "./Silver";
import Luxury from "./Luxury";
import Platinum from "./Platinum";
const boxdata = [
  {
    img: bulb2,
    title: "200",
    dis: "Páginas creadas",
    class:"mb-6"
  },
  {
    img: stars,
    title: "98%",
    dis: "Clientes Satisfechas",
    class:"mb-6"
  },
  {
    img:dollar ,
    title:'200',
    dis:'Divisas Disponibles',
    class:"mb-0"
  }
];
const Más = () => {
    const box = boxdata.map((boxdata,r) => (
        <div className={`${boxdata.class} max-w-[374px] w-full  bg-green-blue  rounded-2xl `}  data-aos="zoom-out-left" data-aos-duration="1000">
          <div key={r} className=" bg-[#051C21] py-6 rounded-2xl m-[0.5px]">
          <div className="flex ">
            <div className=" pl-[56px]">
              <div className="w-[69px] h-[69px] rounded-full bg-[#7AF57A14] flex justify-center items-center">
                <img src={boxdata.img} alt="img" />
              </div>
            </div>
            <div className=" pl-[37px]">
              <h3 className=" font-anton text-white text-2xl md:text-[32px] !leading-[41.6px] font-normal">
                {boxdata.title}
              </h3>
              <p className=" font-inter text-sm md:text-base text-white !leading-[25.6px] font-medium">
           {boxdata.dis}
              </p>
            </div>
          </div>
                </div>
        </div>
    ))
  return (
    <div className="lg:pt-[100px] md:pt-20 pt-10 relative z-[1] overflow-x-clip ">
      <div className="w-[440px] h-[440px] bg-ellipse absolute blur-[189px] rounded-full top-[-10%] left-[-10%] z-[-1] opacity-50 hidden lg:block"></div>
      <div className="w-[484px] h-[484px] bg-ellipse rounded-full blur-[189px] absolute right-[-32%] bottom-[72%] z-[-1] opacity-50 hidden lg:block"></div>
      <div className="w-[440px] h-[440px] bg-ellipse absolute blur-[189px] rounded-full bottom-[12%] left-[-10%] z-[-1] opacity-50  hidden lg:block"></div>
      <div className="max-w-[1140px] mx-auto px-4 xl:px-0 ">
        <div className="flex flex-wrap flex-row">
          <div className="lg:w-1/2 w-full lg:pr-5  flex justify-center lg:block mb-5 lg:mb-0">
            <img src={seven} alt="img" className="rounded-2xl h-full" data-aos="zoom-out-right" data-aos-duration="1000" />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-[25px] flex justify-center lg:block">
            <div>
              <h2 className=" font-anton text-white text-4xl md:text-[40px] lg:text-5xl !leading-[57.6px] md:mb-10 mb-5 lg:mb-[60px] text-center lg:text-start" data-aos="fade-left" data-aos-duration="1000">
                Más razones para elegirnos
              </h2>
              <div className="flex flex-col justify-center mx-auto items-center max-w-[374px] lg:mx-0">{box}</div>
            </div>
          </div>
        </div>
        <h2 className="md:pt-20 pt-10 lg:pt-[150px] text-white font-anton text-4xl md:text-[40px] lg:text-5xl font-normal text-center !leading-[57.6px] mb-4">
        Nuestras ofertas
        </h2>
        <p className=" font-inter text-white text-sm md:text-base font-medium !leading-[25.6px] text-center md:mb-10 mb-5 lg:mb-[60px]">Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
        <Silver/>
        <Luxury/>
        <Platinum/>
      </div>
    </div>
  );
};

export default Más;
