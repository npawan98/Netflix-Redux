import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className = "login__background">
            <img
            className="login__logo"  
            src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"/>

            <button className = "login__button">SignIn</button>
            <div className = "login__gradient"></div>
            <div className = "login__body">
            <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="login__input">
            <form>
                <input type="email" placeholder="Email Address"/>
                <button className = "login__getstarted">Get Started</button>
            </form>
            </div>
            </>
            
            </div>
            </div>  
            
            
        </div>
    )
}

export default Login
