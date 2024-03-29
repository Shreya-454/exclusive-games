import React from "react";
import Greenbtn from "./Greenbtn";
import Acard1 from '../assets/images/Acard1.webp'
import coin from '../assets/images/coin.webp'
import Acard2 from '../assets/images/Acard2.webp'
import dice from '../assets/images/dice.webp'
const Luxury = () => {
  return (
    <div  className="px-4 xl:px-0">
      <div className=" px-4 xl:px-0 mx-auto py-5 bg-[url(./assets/images/gamebg.webp)] bg-cover bg-center bg-no-repeat rounded-2xl border-[0.5px] border-solid border-[#FFFFFF80] lg:py-[46px] flex justify-center md:mb-16 mb-8 relative" data-aos="zoom-in-down" data-aos-duration="1000">
        <img src={Acard1} alt="card" className="absolute right-[10%] top-[17%] hidden lg:block" /> 
        <img src={coin} alt="coin" className=" absolute left-[20%] top-[16%] hidden lg:block" />
        <img src={Acard2} alt="card" className="absolute left-[12%] bottom-[15%] hidden lg:block" />
        <img src={dice} alt="dice" className=" absolute right-[20%] bottom-[16%] hidden lg:block" />
        <div className="max-w-[419px]">
          <h3 className="font-anton text-white text-2xl md:text-[32px] text-center !leading-[41.6px] font-normal mb-4">
            Luxury
          </h3>
          <p className="font-inter text-sm md:text-base font-medium  !leading-[25.6px] text-center opacity-80 max-w-[391px] text-white mb-8 mx-auto">
            lleva tu experiencia de juego al siguiente nivel. Con todas las
            características de la versión Silver y la potencia adicional de la
            tecnología React .
          </p>
          <h2 className="font-anton text-white text-4xl md:text-[40px] lg:text-5xl text-center !leading-[57.6px] font-normal mb-4">
            $9000
          </h2>
          <div className="lg:mb-9">
            <div className="flex gap-2 mb-3">
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.956 7.45506C14.1673 7.2539 14.4485 7.14268 14.7402 7.14489C15.0319 7.1471 15.3114 7.26256 15.5196 7.4669C15.7279 7.67124 15.8486 7.94848 15.8563 8.24013C15.864 8.53177 15.7581 8.81501 15.561 9.03006L9.57597 16.5151C9.47306 16.6259 9.34885 16.7149 9.21077 16.7766C9.07269 16.8384 8.92358 16.8716 8.77235 16.8744C8.62112 16.8772 8.47087 16.8495 8.3306 16.7929C8.19033 16.7363 8.06292 16.652 7.95597 16.5451L3.98697 12.5761C3.87644 12.4731 3.78779 12.3489 3.7263 12.2109C3.66481 12.0729 3.63175 11.9239 3.62908 11.7728C3.62642 11.6218 3.6542 11.4718 3.71078 11.3317C3.76737 11.1916 3.85158 11.0643 3.95841 10.9575C4.06524 10.8507 4.19249 10.7665 4.33257 10.7099C4.47265 10.6533 4.6227 10.6255 4.77375 10.6282C4.92481 10.6308 5.07378 10.6639 5.21178 10.7254C5.34977 10.7869 5.47398 10.8755 5.57697 10.9861L8.71797 14.1256L13.926 7.48806C13.9353 7.47648 13.9453 7.46546 13.956 7.45506ZM12.576 15.1651L13.956 16.5451C14.0629 16.6518 14.1902 16.7359 14.3303 16.7923C14.4705 16.8488 14.6205 16.8765 14.7716 16.8737C14.9226 16.8709 15.0716 16.8377 15.2095 16.7761C15.3475 16.7144 15.4716 16.6257 15.5745 16.5151L21.5625 9.03006C21.67 8.92387 21.7551 8.79708 21.8126 8.65728C21.8701 8.51748 21.8988 8.36752 21.897 8.21638C21.8952 8.06523 21.863 7.91599 21.8023 7.77756C21.7416 7.63914 21.6536 7.51437 21.5436 7.41071C21.4336 7.30705 21.3038 7.22662 21.162 7.17423C21.0202 7.12184 20.8693 7.09856 20.7183 7.10578C20.5674 7.113 20.4194 7.15057 20.2832 7.21625C20.1471 7.28193 20.0256 7.37438 19.926 7.48806L14.7165 14.1256L13.989 13.3966L12.5745 15.1651H12.576Z"
                    fill="url(#paint0_linear_402_86)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_402_86"
                      x1="26.9852"
                      y1="16.3828"
                      x2="14.5628"
                      y2="-1.11632"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-white font-inter text-sm md:text-base font-medium !leading-[25.6px] text-center opacity-80">
                Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                Cargas manuales
              </span>
            </div>
            <div className="flex gap-2 mb-3">
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.956 7.45506C14.1673 7.2539 14.4485 7.14268 14.7402 7.14489C15.0319 7.1471 15.3114 7.26256 15.5196 7.4669C15.7279 7.67124 15.8486 7.94848 15.8563 8.24013C15.864 8.53177 15.7581 8.81501 15.561 9.03006L9.57597 16.5151C9.47306 16.6259 9.34885 16.7149 9.21077 16.7766C9.07269 16.8384 8.92358 16.8716 8.77235 16.8744C8.62112 16.8772 8.47087 16.8495 8.3306 16.7929C8.19033 16.7363 8.06292 16.652 7.95597 16.5451L3.98697 12.5761C3.87644 12.4731 3.78779 12.3489 3.7263 12.2109C3.66481 12.0729 3.63175 11.9239 3.62908 11.7728C3.62642 11.6218 3.6542 11.4718 3.71078 11.3317C3.76737 11.1916 3.85158 11.0643 3.95841 10.9575C4.06524 10.8507 4.19249 10.7665 4.33257 10.7099C4.47265 10.6533 4.6227 10.6255 4.77375 10.6282C4.92481 10.6308 5.07378 10.6639 5.21178 10.7254C5.34977 10.7869 5.47398 10.8755 5.57697 10.9861L8.71797 14.1256L13.926 7.48806C13.9353 7.47648 13.9453 7.46546 13.956 7.45506ZM12.576 15.1651L13.956 16.5451C14.0629 16.6518 14.1902 16.7359 14.3303 16.7923C14.4705 16.8488 14.6205 16.8765 14.7716 16.8737C14.9226 16.8709 15.0716 16.8377 15.2095 16.7761C15.3475 16.7144 15.4716 16.6257 15.5745 16.5151L21.5625 9.03006C21.67 8.92387 21.7551 8.79708 21.8126 8.65728C21.8701 8.51748 21.8988 8.36752 21.897 8.21638C21.8952 8.06523 21.863 7.91599 21.8023 7.77756C21.7416 7.63914 21.6536 7.51437 21.5436 7.41071C21.4336 7.30705 21.3038 7.22662 21.162 7.17423C21.0202 7.12184 20.8693 7.09856 20.7183 7.10578C20.5674 7.113 20.4194 7.15057 20.2832 7.21625C20.1471 7.28193 20.0256 7.37438 19.926 7.48806L14.7165 14.1256L13.989 13.3966L12.5745 15.1651H12.576Z"
                    fill="url(#paint0_linear_402_86)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_402_86"
                      x1="26.9852"
                      y1="16.3828"
                      x2="14.5628"
                      y2="-1.11632"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-white font-inter text-sm md:text-base font-medium !leading-[25.6px] text-center opacity-80 mx-auto">
              Control de RTP (controlás qué porcentaje pagar)
              </span>
            </div>
            <div className="flex gap-2 mb-3">
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.956 7.45506C14.1673 7.2539 14.4485 7.14268 14.7402 7.14489C15.0319 7.1471 15.3114 7.26256 15.5196 7.4669C15.7279 7.67124 15.8486 7.94848 15.8563 8.24013C15.864 8.53177 15.7581 8.81501 15.561 9.03006L9.57597 16.5151C9.47306 16.6259 9.34885 16.7149 9.21077 16.7766C9.07269 16.8384 8.92358 16.8716 8.77235 16.8744C8.62112 16.8772 8.47087 16.8495 8.3306 16.7929C8.19033 16.7363 8.06292 16.652 7.95597 16.5451L3.98697 12.5761C3.87644 12.4731 3.78779 12.3489 3.7263 12.2109C3.66481 12.0729 3.63175 11.9239 3.62908 11.7728C3.62642 11.6218 3.6542 11.4718 3.71078 11.3317C3.76737 11.1916 3.85158 11.0643 3.95841 10.9575C4.06524 10.8507 4.19249 10.7665 4.33257 10.7099C4.47265 10.6533 4.6227 10.6255 4.77375 10.6282C4.92481 10.6308 5.07378 10.6639 5.21178 10.7254C5.34977 10.7869 5.47398 10.8755 5.57697 10.9861L8.71797 14.1256L13.926 7.48806C13.9353 7.47648 13.9453 7.46546 13.956 7.45506ZM12.576 15.1651L13.956 16.5451C14.0629 16.6518 14.1902 16.7359 14.3303 16.7923C14.4705 16.8488 14.6205 16.8765 14.7716 16.8737C14.9226 16.8709 15.0716 16.8377 15.2095 16.7761C15.3475 16.7144 15.4716 16.6257 15.5745 16.5151L21.5625 9.03006C21.67 8.92387 21.7551 8.79708 21.8126 8.65728C21.8701 8.51748 21.8988 8.36752 21.897 8.21638C21.8952 8.06523 21.863 7.91599 21.8023 7.77756C21.7416 7.63914 21.6536 7.51437 21.5436 7.41071C21.4336 7.30705 21.3038 7.22662 21.162 7.17423C21.0202 7.12184 20.8693 7.09856 20.7183 7.10578C20.5674 7.113 20.4194 7.15057 20.2832 7.21625C20.1471 7.28193 20.0256 7.37438 19.926 7.48806L14.7165 14.1256L13.989 13.3966L12.5745 15.1651H12.576Z"
                    fill="url(#paint0_linear_402_86)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_402_86"
                      x1="26.9852"
                      y1="16.3828"
                      x2="14.5628"
                      y2="-1.11632"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-white font-inter text-sm md:text-base font-medium !leading-[25.6px] text-center mx-auto opacity-80">
              Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo
              </span>
            </div>
            <div className="flex gap-2 mb-3">
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.956 7.45506C14.1673 7.2539 14.4485 7.14268 14.7402 7.14489C15.0319 7.1471 15.3114 7.26256 15.5196 7.4669C15.7279 7.67124 15.8486 7.94848 15.8563 8.24013C15.864 8.53177 15.7581 8.81501 15.561 9.03006L9.57597 16.5151C9.47306 16.6259 9.34885 16.7149 9.21077 16.7766C9.07269 16.8384 8.92358 16.8716 8.77235 16.8744C8.62112 16.8772 8.47087 16.8495 8.3306 16.7929C8.19033 16.7363 8.06292 16.652 7.95597 16.5451L3.98697 12.5761C3.87644 12.4731 3.78779 12.3489 3.7263 12.2109C3.66481 12.0729 3.63175 11.9239 3.62908 11.7728C3.62642 11.6218 3.6542 11.4718 3.71078 11.3317C3.76737 11.1916 3.85158 11.0643 3.95841 10.9575C4.06524 10.8507 4.19249 10.7665 4.33257 10.7099C4.47265 10.6533 4.6227 10.6255 4.77375 10.6282C4.92481 10.6308 5.07378 10.6639 5.21178 10.7254C5.34977 10.7869 5.47398 10.8755 5.57697 10.9861L8.71797 14.1256L13.926 7.48806C13.9353 7.47648 13.9453 7.46546 13.956 7.45506ZM12.576 15.1651L13.956 16.5451C14.0629 16.6518 14.1902 16.7359 14.3303 16.7923C14.4705 16.8488 14.6205 16.8765 14.7716 16.8737C14.9226 16.8709 15.0716 16.8377 15.2095 16.7761C15.3475 16.7144 15.4716 16.6257 15.5745 16.5151L21.5625 9.03006C21.67 8.92387 21.7551 8.79708 21.8126 8.65728C21.8701 8.51748 21.8988 8.36752 21.897 8.21638C21.8952 8.06523 21.863 7.91599 21.8023 7.77756C21.7416 7.63914 21.6536 7.51437 21.5436 7.41071C21.4336 7.30705 21.3038 7.22662 21.162 7.17423C21.0202 7.12184 20.8693 7.09856 20.7183 7.10578C20.5674 7.113 20.4194 7.15057 20.2832 7.21625C20.1471 7.28193 20.0256 7.37438 19.926 7.48806L14.7165 14.1256L13.989 13.3966L12.5745 15.1651H12.576Z"
                    fill="url(#paint0_linear_402_86)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_402_86"
                      x1="26.9852"
                      y1="16.3828"
                      x2="14.5628"
                      y2="-1.11632"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-white font-inter text-sm md:text-base font-medium !leading-[25.6px] text-center opacity-80 mx-auto">
              Aplicación para Android y Windows de regalo.
              </span>
            </div>
            <div className="flex gap-2">
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.956 7.45506C14.1673 7.2539 14.4485 7.14268 14.7402 7.14489C15.0319 7.1471 15.3114 7.26256 15.5196 7.4669C15.7279 7.67124 15.8486 7.94848 15.8563 8.24013C15.864 8.53177 15.7581 8.81501 15.561 9.03006L9.57597 16.5151C9.47306 16.6259 9.34885 16.7149 9.21077 16.7766C9.07269 16.8384 8.92358 16.8716 8.77235 16.8744C8.62112 16.8772 8.47087 16.8495 8.3306 16.7929C8.19033 16.7363 8.06292 16.652 7.95597 16.5451L3.98697 12.5761C3.87644 12.4731 3.78779 12.3489 3.7263 12.2109C3.66481 12.0729 3.63175 11.9239 3.62908 11.7728C3.62642 11.6218 3.6542 11.4718 3.71078 11.3317C3.76737 11.1916 3.85158 11.0643 3.95841 10.9575C4.06524 10.8507 4.19249 10.7665 4.33257 10.7099C4.47265 10.6533 4.6227 10.6255 4.77375 10.6282C4.92481 10.6308 5.07378 10.6639 5.21178 10.7254C5.34977 10.7869 5.47398 10.8755 5.57697 10.9861L8.71797 14.1256L13.926 7.48806C13.9353 7.47648 13.9453 7.46546 13.956 7.45506ZM12.576 15.1651L13.956 16.5451C14.0629 16.6518 14.1902 16.7359 14.3303 16.7923C14.4705 16.8488 14.6205 16.8765 14.7716 16.8737C14.9226 16.8709 15.0716 16.8377 15.2095 16.7761C15.3475 16.7144 15.4716 16.6257 15.5745 16.5151L21.5625 9.03006C21.67 8.92387 21.7551 8.79708 21.8126 8.65728C21.8701 8.51748 21.8988 8.36752 21.897 8.21638C21.8952 8.06523 21.863 7.91599 21.8023 7.77756C21.7416 7.63914 21.6536 7.51437 21.5436 7.41071C21.4336 7.30705 21.3038 7.22662 21.162 7.17423C21.0202 7.12184 20.8693 7.09856 20.7183 7.10578C20.5674 7.113 20.4194 7.15057 20.2832 7.21625C20.1471 7.28193 20.0256 7.37438 19.926 7.48806L14.7165 14.1256L13.989 13.3966L12.5745 15.1651H12.576Z"
                    fill="url(#paint0_linear_402_86)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_402_86"
                      x1="26.9852"
                      y1="16.3828"
                      x2="14.5628"
                      y2="-1.11632"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-white font-inter text-sm md:text-base font-medium !leading-[25.6px] text-center opacity-80 mx-auto">
              Tiempo de creación 2 a 3 semanas
              </span>
            </div>
          </div>
          <div className="flex justify-center">
              <Greenbtn text="Comprar ahora" class="lg:!mt-0 !mt-5"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
