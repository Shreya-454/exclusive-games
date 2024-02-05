import React from "react";
import poker1 from "../assets/images/poker1.webp";
import avitor from "../assets/images/avitor.webp";
const Poker = () => {
  return (
    <div className="lg:pt-[74px] lg:-mb-[160px] mb-10 relative z-[1] overflow-x-clip">
      <div className="w-[484px] h-[484px] bg-ellipse opacity-50 blur-[189px] absolute top-[5%] z-[-1] left-[-20%] rounded-full hidden md:block"></div>
      <div className="w-[100px] h-[100px] opacity-70 bg-ellipse absolute blur-[41px] left-[45%] top-[35%] z-[-1] rounded-full"></div>
      <div className="w-[484px] h-[484px] bg-ellipse opacity-50 blur-[189px] absolute bottom-[-16%] z-[-1] right-[-20%] rounded-full hidden lg:block"></div>
      <div className="max-w-[1140px] mx-auto px-4 xl:px-0 ">
        <div className="flex flex-wrap flex-row py-10">
          <div className="lg:w-1/2 w-full lg:pr-8 flex justify-center lg:block  ">
            <img src={poker1} alt="img1" className="rounded-2xl" data-aos="fade-right" data-aos-duration="1000" />
          </div>
          <div className="lg:w-1/2 w-full  lg:pl-8 " data-aos="fade-left" data-aos-duration="1000">
            <h2 className="font-anton text-white text-4xl md:text-[40px] lg:text-5xl mb-4 text-center lg:text-start mt-5 lg:mt-0">
              Nuestra Misión
            </h2>
            <p className=" font-inter text-white text-sm md:text-base opacity-80 font-medium text-center lg:text-start max-w-[400px] sm:max-w-[500px] md:max-w-[700px] mx-auto lg:w-full lg:mx-0">
              Nuestra misión es simple pero poderosa: proporcionarte la más
              amplia gama de soluciones de entretenimiento de alta calidad y
              rentabilidad. Estamos comprometidos a elevar tus expectativas y
              brindarte experiencias inigualables.
            </p>
            <a href="" className="flex items-center mt-6 justify-center lg:justify-normal">
              <span className="text-[#7AF57A] font-bold font-inter text-sm md:text-base !leading-[25.6px]">Aprende más</span>

              <span class="px-2 mt-1">
                {" "}
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_1523_79"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-2"
                    width="21"
                    height="16"
                    fill="black"
                  >
                    <rect
                      fill="white"
                      x="-1"
                      y="-2"
                      width="21"
                      height="16"
                    ></rect>
                    <path d="M12.1477 11.6364L10.8295 10.3239L14.2898 6.86932H0V4.94886H14.2898L10.8295 1.48864L12.1477 0.181818L17.875 5.90909L12.1477 11.6364Z"></path>
                  </mask>
                  <path
                    d="M12.1477 11.6364L10.8295 10.3239L14.2898 6.86932H0V4.94886H14.2898L10.8295 1.48864L12.1477 0.181818L17.875 5.90909L12.1477 11.6364Z"
                    fill="#7AF57A"
                  ></path>
                  <path
                    d="M12.1477 11.6364L11.4422 12.345L12.1493 13.0491L12.8548 12.3435L12.1477 11.6364ZM10.8295 10.3239L10.123 9.61618L9.41322 10.3248L10.124 11.0325L10.8295 10.3239ZM14.2898 6.86932L14.9963 7.57701L16.7068 5.86932H14.2898V6.86932ZM0 6.86932H-1V7.86932H0V6.86932ZM0 4.94886V3.94886H-1V4.94886H0ZM14.2898 4.94886V5.94886H16.704L14.9969 4.24176L14.2898 4.94886ZM10.8295 1.48864L10.1255 0.778475L9.41226 1.48557L10.1224 2.19574L10.8295 1.48864ZM12.1477 0.181818L12.8548 -0.525289L12.1508 -1.22934L11.4437 -0.528343L12.1477 0.181818ZM17.875 5.90909L18.5821 6.6162L19.2892 5.90909L18.5821 5.20198L17.875 5.90909ZM12.8533 10.9277L11.5351 9.61523L10.124 11.0325L11.4422 12.345L12.8533 10.9277ZM11.5361 11.0316L14.9963 7.57701L13.5832 6.16163L10.123 9.61618L11.5361 11.0316ZM14.2898 5.86932H0V7.86932H14.2898V5.86932ZM1 6.86932V4.94886H-1V6.86932H1ZM0 5.94886H14.2898V3.94886H0V5.94886ZM14.9969 4.24176L11.5367 0.781529L10.1224 2.19574L13.5827 5.65597L14.9969 4.24176ZM11.5336 2.1988L12.8518 0.891979L11.4437 -0.528343L10.1255 0.778475L11.5336 2.1988ZM11.4406 0.888925L17.1679 6.6162L18.5821 5.20198L12.8548 -0.525289L11.4406 0.888925ZM17.1679 5.20198L11.4406 10.9293L12.8548 12.3435L18.5821 6.6162L17.1679 5.20198Z"
                    fill="black"
                    mask="url(#path-1-outside-1_1523_79)"
                  ></path>
                </svg>{" "}
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-row lg:-translate-y-[50%] flex-col-reverse">
          <div className="lg:w-1/2 lg:pr-8 flex flex-col justify-end " data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-white font-anton text-4xl md:text-[40px] lg:text-5xl text-center lg:text-start mt-5 lg:mt-0 mb-4">Nuestra Visión</h2>
            <p className=" font-inter text-white text-sm md:text-base font-medium opacity-80 text-center lg:text-start lg:w-full md:max-w-[700px] sm:max-w-[500px] max-w-[400px] mx-auto lg:mx-0">
              Nuestra visión es ser líderes indiscutibles en la industria de los
              juegos de azar y llevar nuestra pasión por el entretenimiento más
              allá de las fronteras. Imagina un mundo donde la emoción y la
              diversión no tengan límites, y ese es el mundo que queremos crear
              contigo.
            </p>
            <a href="" className="flex items-center mt-6 justify-center lg:justify-normal">
              <span className="text-[#7AF57A] font-bold font-inter text-sm md:text-base !leading-[25.6px]">Aprende más</span>

              <span class="px-2 mt-1">
                {" "}
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_1523_79"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-2"
                    width="21"
                    height="16"
                    fill="black"
                  >
                    <rect
                      fill="white"
                      x="-1"
                      y="-2"
                      width="21"
                      height="16"
                    ></rect>
                    <path d="M12.1477 11.6364L10.8295 10.3239L14.2898 6.86932H0V4.94886H14.2898L10.8295 1.48864L12.1477 0.181818L17.875 5.90909L12.1477 11.6364Z"></path>
                  </mask>
                  <path
                    d="M12.1477 11.6364L10.8295 10.3239L14.2898 6.86932H0V4.94886H14.2898L10.8295 1.48864L12.1477 0.181818L17.875 5.90909L12.1477 11.6364Z"
                    fill="#7AF57A"
                  ></path>
                  <path
                    d="M12.1477 11.6364L11.4422 12.345L12.1493 13.0491L12.8548 12.3435L12.1477 11.6364ZM10.8295 10.3239L10.123 9.61618L9.41322 10.3248L10.124 11.0325L10.8295 10.3239ZM14.2898 6.86932L14.9963 7.57701L16.7068 5.86932H14.2898V6.86932ZM0 6.86932H-1V7.86932H0V6.86932ZM0 4.94886V3.94886H-1V4.94886H0ZM14.2898 4.94886V5.94886H16.704L14.9969 4.24176L14.2898 4.94886ZM10.8295 1.48864L10.1255 0.778475L9.41226 1.48557L10.1224 2.19574L10.8295 1.48864ZM12.1477 0.181818L12.8548 -0.525289L12.1508 -1.22934L11.4437 -0.528343L12.1477 0.181818ZM17.875 5.90909L18.5821 6.6162L19.2892 5.90909L18.5821 5.20198L17.875 5.90909ZM12.8533 10.9277L11.5351 9.61523L10.124 11.0325L11.4422 12.345L12.8533 10.9277ZM11.5361 11.0316L14.9963 7.57701L13.5832 6.16163L10.123 9.61618L11.5361 11.0316ZM14.2898 5.86932H0V7.86932H14.2898V5.86932ZM1 6.86932V4.94886H-1V6.86932H1ZM0 5.94886H14.2898V3.94886H0V5.94886ZM14.9969 4.24176L11.5367 0.781529L10.1224 2.19574L13.5827 5.65597L14.9969 4.24176ZM11.5336 2.1988L12.8518 0.891979L11.4437 -0.528343L10.1255 0.778475L11.5336 2.1988ZM11.4406 0.888925L17.1679 6.6162L18.5821 5.20198L12.8548 -0.525289L11.4406 0.888925ZM17.1679 5.20198L11.4406 10.9293L12.8548 12.3435L18.5821 6.6162L17.1679 5.20198Z"
                    fill="black"
                    mask="url(#path-1-outside-1_1523_79)"
                  ></path>
                </svg>{" "}
              </span>
            </a>
          </div>
          <div className="lg:w-1/2 lg:pl-8 flex justify-center lg:block ">
            <img src={avitor} alt="img" className="rounded-2xl" data-aos="fade-left" data-aos-duration="1000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poker;
