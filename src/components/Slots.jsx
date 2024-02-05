import React from "react";
import bg1 from '../assets/images/img1.webp'
import bg2 from '../assets/images/img2.webp'
import bg3 from '../assets/images/img3.webp'
import bg4 from '../assets/images/img4.webp'
import bg5 from '../assets/images/img5.webp'
import bg6 from '../assets/images/img6.webp'
import Greenbtn from "./Greenbtn";
import Whitebtn from "./Whitebtn";
 const cards = [{
    bg:bg1,
    aos:"fade-right"
 },
 {
    bg:bg2,
    aos:"fade-down"
 },
 {
    bg:bg3,
aos:"fade-left"
 },
 {
    bg:bg4,
    aos:"fade-right"
 },
 {
    bg:bg5,
    aos:"fade-up"
 },
 {
    bg:bg6,
    aos:"fade-left"
 },

]
const Slots = () => {
    const card = cards.map((cards,i)=>(<div key={i} className="lg:w-1/3 md:w-1/2 w-full xl:px-3 px-4 flex justify-center group duration-500 mb-6" >
    <div className="max-w-[364px] rounded-lg overflow-hidden relative " data-aos={cards.aos} data-aos-duration="1000">
      <img src={cards.bg} alt="img" className="w-full" />
        <div className="absolute w-full  bg-[#2C2B2B]/[0.8] max-w-[364px] border border-solid rounded-lg border-[#51C8EF] h-[265px] flex justify-center top-[-200%] group-hover:top-0 left-0 items-center duration-500">
        <Whitebtn btn="Jugar"/>
        </div>
    </div>
</div>))
  return (
    <div className="lg:pt-[150px] md:pt-20 pt-10 overflow-x-clip">
      <h2 className=" font-anton text-4xl md:text-[40px] lg:text-5xl text-center !leading-[57.6px] text-[#00141B] font-normal  mb-4 "data-aos="zoom-in-down" data-aos-duration="1000">
        Slots
      </h2>
      <p className=" font-inter text-center text-sm md:text-base font-medium !leading-[25.6px] text-[#00141B] max-w-[904px] mx-auto mb-5 md:mb-10 lg:mb-[60px] " data-aos="fade-right" data-aos-duration="1000">
        En Exclusive Games, ofrecemos una selección de más de 600 juegos de los
        principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic,
        IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
        incansablemente para innovar y ampliar nuestra oferta de experiencias,
        garantizando la máxima seguridad con operaciones protegidas por cifrado
        SSL de 256 bits.
      </p>
      <div className="flex flex-wrap flex-row -mx-3">
{card}
      </div>
      <div className="flex justify-center">
        <Greenbtn text="Mostrar más"/>
      </div>
    </div>
  );
};

export default Slots;
