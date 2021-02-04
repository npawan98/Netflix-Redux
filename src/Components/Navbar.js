import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar() {
    const[show,handleShow] = useState(false);

    const transitionNavbar = () =>{
        if(window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
       window.addEventListener("scroll",transitionNavbar)
        return () => {
            window.removeEventListner("scroll",transitionNavbar)
        }
    }, [])
    return (

        <div className = {`nav ${show && "nav__black"}`}>
            <div className = "nav__content">
            <img
            className="nav__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt = "BrandingLogo"
            />

            <img 
            className="nav__avatar"
                src="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png"
                alt="avatar"
            />
            </div>
            
        </div>
    )
}

export default Navbar
