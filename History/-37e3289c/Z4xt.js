import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" />
                </Link>

                <div className="login__container">
                    <h1>Sign-in</h1>

                    <form>
                        
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login