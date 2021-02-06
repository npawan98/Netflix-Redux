import React from 'react'
import './SignUpScreen.css'

function SignInScreen() {
    return (
        <div className = "signupScreen">
        <form>
        <h1>SignIn</h1>
        <input type="email" placeholder ="Email"/>
        <input type="passsword" placeholder ="Password"/>
        <button type="submit">Sign In</button>
        </form>
        <h4><span className = "signupScreen__grey"> New to Netflix? </span><span className = "signupScreen__link">Sign Up now.</span></h4>
            
        </div>
    )
}

export default SignInScreen
