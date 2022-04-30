import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'

export const ScrollToTop = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        })
    }, [])

    const goToTop = () => {
        window.scrollTo({ top:0, behavior: "smooth"})
    }

    return(
        <>
        {showButton && (
            <button onClick={goToTop} class="z-10 animate-top bottom-14 right-14 fixed text-white rounded-xl px-4 py-4 cursor-pointer">
                <FaArrowUp />
            </button>
        )}
        </>
    );
}