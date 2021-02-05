import React from 'react'
import "./Banner.css"

function Banner() {
    function truncate( string,number){

        return string?.length>number ? string.substr(0,number-1) + '....' : string;
    }
    return (
        // header tag and div class = "header" are same
        <header className="banner" style = {{
            backgroundSize:"cover",
            backgroundImage:`url("https://lh3.googleusercontent.com/proxy/1IpE3jd5JO0u_iI7jZwrfPbtt8NuaOy7Mbs-xPAETKPyvuMly7fVimJsmte_2-dD1RYIlGgIf3AnM6N1P5xkkRJbsXcTH5KBNhmVyB6WCnZZbOs1Iw5hGRyasetWHYM")`,
            backgroundPosition:"center center",
        }}>
        
    
        <div className = "banner__content">
             <h1 className = "banner__title">Movie Name</h1>
             <div className = "banner__buttons">
             <button className = "banner__button">Play</button>
             <button className = "banner__button">My List</button>
             </div>
             <h1 className = "banner__description">
             { truncate('This is a temp movie description/ mbanner description This is a temp movie description/ mbanner description This is a temp movie description/ mbanner description',150)}
             </h1>
            
        </div>
        <div className = "banner__fadeBottom"/>
    </header> 
    )
}

export default Banner
