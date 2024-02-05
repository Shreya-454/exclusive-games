import React, { useState } from 'react'
import back from '../assets/images/uparrow.webp'

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div> 
            <button className="group animate-bounce  flex justify-center items-center p-2 w-[45px] h-[45px] rounded-full  bg-green-blue fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300 "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <img src={back} alt="img" />
            </button>
        </div>
    );
};

export default BackToTop;
