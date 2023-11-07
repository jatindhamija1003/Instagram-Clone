import React from 'react'
import "../styles/register.css"
const Register = () => {
    return (
        <div className="registerContainer">
            <h3>Register</h3>
            <div>
                <input type="email" name="email" placeholder="Enter Your Email " />
            </div>
            <div>
                <input type="phone" name="phone" placeholder="Enter Your Phone Number" />
            </div>
            <div>
                <input type="password" name="password" placeholder="Enter Your Password " />
            </div>
            <button>Register</button>
            <button className="link">Want to Login?</button>
        </div>
    )
}
export default Register