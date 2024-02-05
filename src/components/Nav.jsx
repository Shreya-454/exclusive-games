import React, { useState } from 'react'
import logo from '../assets/images/logo.webp'
import Whitebtn from './Whitebtn';
const Nav = () => {
  const [show, setshow] = useState(true);
  function nav() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }
  return (
    <div className="bg-[#FFFFFF1A]">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="flex items-center py-6 justify-between">
          <div className="flex items-center justify-between">
            <a href="">
              <img src={logo} alt="" />
            </a>
            <ul
              className={`gap-7 flex items-center justify-center mobileView lg:pl-[101px] ${
                show ? "right-[-100%]" : "right-0"
              }`}
            >
              <li onClick={nav}>
                <a
                  href="#"
                  className=" font-inter font-medium navhover text-white text-base !leading-[25.6px]"
                >
                  Hogar
                </a>
              </li>
              <li onClick={nav}>
                <a
                  href="#"
                  className=" font-inter font-medium navhover text-white text-base !leading-[25.6px]"
                >
                  Misión
                </a>
              </li>
              <li onClick={nav}>
                <a
                  href="#"
                  className=" font-inter font-medium navhover text-white text-base !leading-[25.6px]"
                >
                  Tragamonedas
                </a>
              </li>
              <li onClick={nav}>
                <a
                  href="#"
                  className=" font-inter font-medium text-white  navhover text-base !leading-[25.6px]"
                >
                  Por qué elegirnos
                </a>
              </li>
              <li onClick={nav}>
                <a
                  href="#"
                  className=" font-inter font-medium navhover text-white text-base !leading-[25.6px]"
                >
                  Ofertas
                </a>
              </li>
              <li>
                {" "}
                <Whitebtn btn="Acceso" class1="block sm:hidden" />
              </li>
            </ul>
          </div>
          <div className=' hidden sm:block'>
            <Whitebtn btn="Acceso" class="hidden sm:block"/>
          </div>
          <label className=" lg:hidden" onClick={nav}>
            {show ? (
              <div className="z-20 relative">
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6"></span>
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative">
                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
              </div>
            )}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Nav
