import React from "react";
import Greenbtn from "./Greenbtn";

const Header = () => {
  return (
    <div className="pt-[140px]" >
      <div className="max-w-[1140px] mx-auto px-4 xl:px-0 ">
        <h1 className=" font-anton md:text-6xl text-5xl lg:text-7xl text-white text-center max-w-[505px] mx-auto !leading-[120%] mb-4" data-aos="zoom-in" data-aos-duration="1000">
          Exclusive Games. Pasión por ganar
        </h1>
        <p className=" font-inter font-medium text-sm md:text-base text-white text-center opacity-80 max-w-[727px] mx-auto !leading-[160%]" data-aos="zoom-in-up" data-aos-duration="1000">
          En Exclusive Games somos un equipo apasionado de personas dedicados al
          desarrollo de multiplataformas para juegos de azar. A lo largo de
          nuestra vida consumimos todo tipo de juegos hasta que un día decidimos
          crear los propios.
        </p>
        <div className="flex justify-center">
          <Greenbtn text="Empezar"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
