import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <div>
      {id === open ? (
        <div className="relative inline-block pb-2">
          <div className="w-[2px] h-[17px] mx-auto opacity-0  duration-300 rounded-sm bg-white  absolute left-[8px] top-[-7px] "></div>
          <div className="w-[18px]  h-[2px] mx-auto  rounded-sm bg-white  "></div>
        </div>
      ) : (
        <div className="relative inline-block pb-2">
          <div className="w-[2px] h-[17px] mx-auto  opacity-100 duration-300 rounded-sm bg-white absolute left-[8px] top-[-7px]"></div>
          <div className="w-[18px] h-[2px] mx-auto  rounded-sm bg-white "></div>
        </div>
      )}
    </div>
  );
}
const Preguntas = () => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="lg:pt-[150px] pt-10 md:pt-20 lg:pb-[132px] md:pb-20 pb-10 relative z-[1]">
      <div className="w-[396px] h-[396px] bg-ellipse rounded-full opacity-50 blur-[80px] absolute left-[-12%] top-[-5%] hidden lg:block"></div>
      <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
        <h2 className="text-white font-anton text-4xl md:text-[40px] lg:text-5xl text-center font-normal !leading-[57.6px] mb-5 md:mb-10 lg:mb-[60px]">
          Preguntas más frecuentes
        </h2>
        <div className="max-w-[970px] mx-auto">
          <div className="border-[0.5px] border-solid border-[#FFFFFF80] py-4 pl-4 pr-5 rounded-md mb-4 md:mb-8" data-aos="fade-right" data-aos-duration="1000">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-white font-anton text-base md:text-xl  font-normal !leading-[26px] hover:text-white border-0 flex justify-between text-start items-center"
              >
                ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis
                plataformas de juegos?
              </AccordionHeader>
              <AccordionBody className=" text-white font-inter text-sm md:text-base font-normal opacity-80 !leading-[25.6px] pt-2 max-w-[880px]">
                En Exclusive Games, ofrecemos experiencias únicas y
                personalizadas, respaldadas por más de 15 años de dedicación al
                desarrollo de multiplataformas para juegos de azar.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="border-[0.5px] border-solid border-[#FFFFFF80] py-4 pl-4 pr-5 rounded-md mb-4 md:mb-8" data-aos="fade-left" data-aos-duration="1000">
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-white font-anton text-base md:text-xl  font-normal !leading-[26px] hover:text-white border-0 flex justify-between text-start items-center"
                >
               ¿Cómo garantizan la seguridad de las operaciones en sus juegos?
                </AccordionHeader>
                <AccordionBody className=" text-white font-inter text-sm md:text-base font-normal opacity-80 !leading-[25.6px] pt-2 max-w-[880px]">
                En Exclusive Games, ofrecemos experiencias únicas y
                personalizadas, respaldadas por más de 15 años de dedicación al
                desarrollo de multiplataformas para juegos de azar.
              </AccordionBody>
              </Accordion>
          </div>
          <div className="border-[0.5px] border-solid border-[#FFFFFF80] py-4 pl-4 pr-5 rounded-md mb-4 md:mb-8" data-aos="fade-right" data-aos-duration="1000">
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="text-white font-anton text-base md:text-xl  font-normal !leading-[26px] hover:text-white border-0 flex justify-between text-start items-center"
                >
                  ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?
                </AccordionHeader>
                <AccordionBody className=" text-white font-inter text-sm md:text-base font-normal opacity-80 !leading-[25.6px] pt-2 max-w-[880px]">
                    En Exclusive Games, ofrecemos experiencias únicas y
                    personalizadas, respaldadas por más de 15 años de dedicación al
                    desarrollo de multiplataformas para juegos de azar.
                  </AccordionBody>
              </Accordion>
          </div>
          <div className="border-[0.5px] border-solid border-[#FFFFFF80] py-4 pl-4 pr-5 rounded-md mb-4 md:mb-8" data-aos="fade-left" data-aos-duration="1000">
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="text-white font-anton text-base md:text-xl  font-normal !leading-[26px] hover:text-white border-0 flex justify-between text-start items-center"
                >
                 ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?
                </AccordionHeader>
                <AccordionBody className=" text-white font-inter text-sm md:text-base font-normal opacity-80 !leading-[25.6px] pt-2 max-w-[880px]">
                    En Exclusive Games, ofrecemos experiencias únicas y
                    personalizadas, respaldadas por más de 15 años de dedicación al
                    desarrollo de multiplataformas para juegos de azar.
                  </AccordionBody>
              </Accordion>
          </div>
          <div className="border-[0.5px] border-solid border-[#FFFFFF80] py-4 pl-4 pr-5 rounded-md mb-4 md:mb-8" data-aos="fade-right" data-aos-duration="1000">
              <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="text-white font-anton text-base md:text-xl  font-normal !leading-[26px] hover:text-white border-0 flex justify-between text-start items-center"
                >
               ¿Qué métodos de pago aceptan?
                </AccordionHeader>
                <AccordionBody className=" text-white font-inter text-sm md:text-base font-normal opacity-80 !leading-[25.6px] pt-2 max-w-[880px]">
                    En Exclusive Games, ofrecemos experiencias únicas y
                    personalizadas, respaldadas por más de 15 años de dedicación al
                    desarrollo de multiplataformas para juegos de azar.
                  </AccordionBody>
              </Accordion>
          </div>
          <div className="border-[0.5px] border-solid border-[#FFFFFF80] py-4 pl-4 pr-5 rounded-md" data-aos="fade-left" data-aos-duration="1000">
              <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="text-white font-anton text-base md:text-xl  font-normal !leading-[26px] hover:text-white border-0 flex justify-between text-start items-center"
                >
                  ¿Puedo probar sus juegos antes de comprometerme?
                </AccordionHeader>
                <AccordionBody className=" text-white font-inter text-sm md:text-base font-normal opacity-80 !leading-[25.6px] pt-2 max-w-[880px]">
                    En Exclusive Games, ofrecemos experiencias únicas y
                    personalizadas, respaldadas por más de 15 años de dedicación al
                    desarrollo de multiplataformas para juegos de azar.
                  </AccordionBody>
              </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
