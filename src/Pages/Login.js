import React, { useState } from 'react'
import './Login.css'
import SignUpScreen from './SignUpScreen'

function Login() {
    const[signIn,setSignIn] = useState(false);
    
    return (
        <div className="login">
            <div className = "login__background">
            <img
            className="login__logo" 
            src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"/>

            <button onClick ={()=>setSignIn(true)} className = "login__button">
            SignIn
            </button>
            {console.log(signIn)}
            <div className = "login__gradient"></div>
            <div className = "login__body">
            {signIn ? (
                <SignUpScreen/>
            ):(
                <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="login__input">
                    <form>
                        <input type="email" placeholder="Email Address"/>
                        <button onClick={()=>setSignIn(true)} className = "login__getstarted">Get Started</button>
                    </form>
                    </div>
                </>
              

            )}
            { /*when we click on the get started button then signIn = false and the above condition get fails*/}
                
            
            </div>
            </div>  
            
            
        </div>
    )
}

export default Login
